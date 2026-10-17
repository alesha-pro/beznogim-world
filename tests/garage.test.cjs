const vm=require('vm'),fs=require('fs'),assert=require('assert');
const c=vm.createContext({});vm.runInContext(fs.readFileSync('public/mechanics/garage.js','utf8'),c);
let state=null;const call=(tool,args={})=>{const r=JSON.parse(JSON.stringify(c.world({state,mode:tool?'action':'migrate',tool,args})));state=r.state;return r;};call();
for(const t of JSON.parse(fs.readFileSync('public/world-mechanics.json')).modules.find(m=>m.id==='garage').tests){const r=call(t.tool,t.args);for(const [p,v]of Object.entries(t.expect))assert.deepEqual(p.split('.').reduce((x,k)=>x[k],r),v,p);}
let count=0;for(let stage=0;stage<3;stage++)for(let p=1;p<=6;p++)for(let a=1;a<=3;a++){
 state={stage,landed:stage,power:p,angle:a,air:6,run:8};const before=call().state,r=call('launch',{mode:'jump'});assert.equal(r.state.air,6-p);assert(r.public.flight.apex>=.5);assert(r.public.flight.end<=18);assert.equal(r.public.landed,stage+(r.result.ok?1:0));
 const saved=JSON.stringify(state);call();assert.equal(JSON.stringify(state),saved);const tick=JSON.parse(JSON.stringify(c.world({state,mode:'tick'})));assert.deepEqual(tick.state,state);
 if(r.result.ok){assert.equal(r.result.range,[6,8,6][stage]);assert(r.result.clearance>=[1,3,6][stage]);const x=JSON.stringify(state);assert(!call('launch',{mode:'jump'}).result.ok);assert.equal(JSON.stringify(state),x);}
 else{call('pump',{power:p,angle:a});assert.equal(state.air,6);assert.equal(state.phase,'ready');assert.equal(state.landed,stage);assert.equal(state.flight,null);}
 count++;
}
for(const args of [{power:0,angle:1},{power:2.5,angle:2},{power:2,angle:4},{power:'2',angle:2},{power:NaN,angle:2},{},{power:2,angle:2,extra:1}]){state=null;call();const old=JSON.stringify(state);const r=call('pump',args);if(!args.extra){assert.equal(r.result.ok,false);assert.equal(JSON.stringify(state),old);}}
state=null;call();let old=JSON.stringify(state);assert.equal(call('bad').result.ok,false);assert.equal(JSON.stringify(state),old);assert.equal(call('launch',{mode:'__proto__'}).result.ok,false);assert.equal(JSON.stringify(state),old);
state={run:99,landed:2,stage:2,power:999,angle:-4,air:Infinity,attempts:-3,flight:{range:999,apex:Infinity,end:999,seq:2,outcome:'bad'}};const bounded=call().state;assert.equal(bounded.run,99);assert.equal(bounded.landed,2);assert.equal(bounded.power,6);assert.equal(bounded.angle,1);assert.equal(bounded.air,6);assert.equal(bounded.attempts,0);assert.equal(bounded.flight.range,18);
assert.equal(fs.readFileSync('src/garage-core.js','utf8'),'// Generated from public/mechanics/garage.js by scripts/sync-mechanics.mjs.\n'+fs.readFileSync('public/mechanics/garage.js','utf8')+'\nexport default world;\n');
const manifest=JSON.parse(fs.readFileSync('public/resident-manifest.json'));assert.deepEqual(manifest.objects.find(x=>x.id==='pneumatic_garage').position,[-32,.6,-20.6]);const land=JSON.parse(fs.readFileSync('src/territory.json'));assert.equal(land.sectors.find(x=>x.id==='-1:-1').name,'гараж и вилка');assert.equal(land.sectors.filter(x=>x.status==='settled').length,7);
console.log('PASS garage 16 contract cases,',count,'configurations, success/air/clearance, migration/tick no reset, duplicate locks, refusal, bounded corrupt input, shared core and stable registry');
