const vm=require('vm'),fs=require('fs'),assert=require('assert');const c=vm.createContext({});vm.runInContext(fs.readFileSync('public/mechanics/garage.js','utf8'),c);const clone=x=>JSON.parse(JSON.stringify(x));const now=1000,world={position:[48,.6,-24]};
const call=(state,mode='tick',args={},time=now)=>clone(c.world({state,mode,tool:['trip','repair'].includes(args.energy)?'launch':'pump',args,now:time,world}));
const fresh=()=>call(null,'migrate').state;
const close=(a,b,why)=>assert(Math.abs(a-b)<1e-6,why+': '+a+' vs '+b);
let tested=0;
// All combinations of empty/full stores, night/day, weather, N0/N1/N2, settings.
for(const gas of [0,5,400000])for(const battery of [0,160,400,800])for(const hour of [0,6,12,18,22])for(const weather of ['clear','overcast','cycle'])for(const failures of [0,1,2]){
 let s=fresh();Object.assign(s.energy,{gas,battery,hour,weather,tripped:[failures>0,failures>1]});let e0=clone(s.energy);const r=call(s,'tick',{},now+120),e=r.state.energy,t=e.totals,f=e.flow;
 close(e0.gas-e.gas,t.gas,'gas balance');close(t.gen,t.gas*.4,'efficiency');close(t.heat,t.gas*.45,'heat');close(t.gas-t.gen-t.heat,t.gas*.15,'unrecovered thermal loss');close(t.gen+t.pv+t.discharge,t.served+t.charge+t.spill,'AC balance');close(e0.battery+t.charge*.95-t.discharge/.95,e.battery,'DC balance');close(t.charge*.05+t.discharge*(1/.95-1),t.loss,'loss');
 assert(e.gas>=0&&e.battery>=0&&e.battery<=800);assert(f.gen<=500&&f.charge<=200&&f.discharge<=200&&f.deficit>=0);assert(f.charge===0||f.discharge===0);close(t.served+t.unserved, c.energyLoad(hour+.125)*.25+c.energyLoad(hour+.375)*.25+c.energyLoad(hour+.625)*.25+c.energyLoad(hour+.875)*.25,'load');
 if(gas===0)assert.equal(t.gen,0);if(failures===2)assert.equal(t.gen,0);if(hour===0)assert.equal(t.pv,0);
 const saved=clone(r.state);assert.deepEqual(call(saved,'migrate',{},now+120).state,saved);tested++;
}
// Persist garage achievements and energy through version migration and JSON roundtrip.
let s=fresh();Object.assign(s,{stage:2,landed:3,phase:'complete',run:7,attempts:18,seq:11});s.energy.battery=321;s.energy.depot=12345;s.energy.tripped=[true,false];s=call(s,'migrate').state;const saved=clone(s);assert.deepEqual(call(clone(saved),'migrate').state,saved);
// A full week at winter-overcast N-1 with a measured finite budget, no deliveries.
s=fresh();s.energy.tripped=[true,false];s.energy.weather='overcast';s.energy.battery=0;let r=call(s,'tick',{},now+168*120);assert.equal(r.state.energy.totals.unserved,0);assert(r.state.energy.gas<s.energy.gas);assert.equal(r.state.energy.totals.discharge,0);
// No gas and empty battery at night is a real blackout; neither generator nor magic battery.
s=fresh();s.energy.gas=0;s.energy.battery=0;r=call(s,'tick',{},now+120);assert(r.public.energy.flow.deficit>100);assert.equal(r.public.energy.flow.consumer,'stopped');assert.equal(r.public.energy.flow.gen,0);assert.equal(r.public.energy.flow.discharge,0);
// Clear midday no gas can supply load and charge with losses. Overcast cannot.
s=fresh();Object.assign(s.energy,{hour:12,gas:0,battery:0,weather:'clear'});r=call(s,'tick',{},now+120);assert(r.state.energy.battery>0);assert.equal(r.state.energy.totals.unserved,0);s.energy.weather='overcast';r=call(s,'tick',{},now+120);assert(r.state.energy.totals.unserved>0);
// Bounded deliveries: cooldown, finite depot, tank capacity, repeated migration never refills.
s=fresh();r=call(s,'action',{energy:'delivery'});assert(r.result.ok);assert.equal(r.state.energy.gas,500000);assert.equal(r.state.energy.depot,700000);s=r.state;assert(!call(s,'action',{energy:'delivery'}).result.ok);assert.deepEqual(call(s,'migrate').state,s);s.energy.gas=100;s.energy.hour=25;s.energy.depot=123;r=call(s,'action',{energy:'delivery'});assert.equal(r.result.delivered,123);assert.equal(r.state.energy.depot,0);s=r.state;s.energy.hour=100;assert(!call(s,'action',{energy:'delivery'}).result.ok);
// Tools actually switch independent units and preserve old game; wrong location cannot change them.
s=fresh();r=call(s,'action',{energy:'trip',unit:1});assert.deepEqual(r.state.energy.tripped,[true,false]);r=call(r.state,'action',{energy:'repair',unit:1});assert.deepEqual(r.state.energy.tripped,[false,false]);r=call(r.state,'action',{energy:'dispatch',unit:2,enabled:false});assert.deepEqual(r.state.energy.units,[true,false]);
const wrong=clone(c.world({mode:'action',state:s,now,tool:'launch',args:{energy:'trip',unit:1},world:{position:[0,0,0]}}));assert.equal(wrong.result.ok,false);assert.deepEqual(wrong.state,s);
const old=clone(c.world({mode:'action',state:s,now,tool:'pump',args:{power:2,angle:1},world:{position:[-32,.6,-20.6]}}));assert(old.result.ok);assert.equal(old.state.power,2);const reject=clone(c.world({mode:'action',state:old.state,now,tool:'launch',args:{mode:'restart'},world}));assert(!reject.result.ok);assert.equal(reject.state.run,old.state.run);
// Backward time cannot refill or remove gas. Full offline time is retained, not discarded.
s=fresh();s.energy.last=2000;r=call(s,'tick',{},1500);assert.equal(r.state.energy.gas,s.energy.gas);assert.equal(r.state.energy.last,2000);
s=fresh();r=call(s,'tick',{},now+9000*120);assert.equal(r.state.energy.hour,8760);assert.equal(r.state.energy.last,now+8760*120);let r2=call(r.state,'tick',{},now+9000*120);assert.equal(r2.state.energy.hour,9000);assert.equal(r2.state.energy.last,now+9000*120);assert.equal(r2.state.energy.gas,0);
// Fine vs coarse wall clock ticks use the same quarter-hour integrator.
s=fresh();const full=call(s,'tick',{},now+120*24);let stepped=s;for(let i=1;i<=96;i++)stepped=call(stepped,'tick',{},now+i*30).state;close(full.state.energy.gas,stepped.energy.gas,'split gas');close(full.state.energy.battery,stepped.energy.battery,'split battery');
// Restarting the old toy never resets the station or its exhausted depot.
s=fresh();Object.assign(s.energy,{gas:1234,battery:321,depot:0,tripped:[true,false]});s=call(s,'migrate').state;const energyBefore=clone(s.energy);const restarted=clone(c.world({mode:'action',state:s,now,tool:'launch',args:{mode:'restart'},world:{position:[-32,.6,-20.6]}}));assert(restarted.result.ok);assert.deepEqual(restarted.state.energy,energyBefore);
// Every optional mode rejects a missing unit rather than silently changing a block.
for(const energy of ['dispatch','trip','repair'])assert.equal(call(fresh(),'action',{energy}).result.reason,'unit_required_1_or_2');
console.log('PASS power',tested,'balance cases; N-1 week/night/cloud/empty/no-gas/delivery/JSON migration/oldgarage/location/offline/split clock');
