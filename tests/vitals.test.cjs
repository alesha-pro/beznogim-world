const vm=require('vm'),fs=require('fs'),path=require('path'),assert=require('assert');
const source=fs.readFileSync(path.join(__dirname,'../public/mechanics/vitals.js'),'utf8');
const ctx=vm.createContext({});vm.runInContext(source,ctx);
let state=null;
function call(mode,now,{tool,args={},action=null,last_sleep=null,objects={garden:{harvest:2}},mechanics={cellar:{shelf:[{id:7,kind:'stone'}]}}}={}){
  const out=ctx.world({mode,now,tool,args,state,version:1,previous_version:1,world:{objects,mechanics,action,last_sleep}});
  state=JSON.parse(JSON.stringify(out.state));return JSON.parse(JSON.stringify(out));
}
function close(actual,expected,epsilon=.001){assert(Math.abs(actual-expected)<=epsilon,`${actual} != ${expected}`);}

// Initial state is bounded, persists, and loses needs slowly over real time.
call('migrate',0);assert.deepEqual(Object.keys(state).sort(),['cooldowns','food','lastSleepEnd','updated','vitals']);
assert.deepEqual(state.vitals,{hunger:72,thirst:72,energy:72,mood:72});
call('tick',3600);close(state.vitals.hunger,67);close(state.vitals.thirst,64);close(state.vitals.energy,69);

// A trusted live sleep action restores energy only for its actual overlap.
call('tick',7200,{action:{kind:'sleep',started:3600,ends:10800}});close(state.vitals.energy,79);
// The remaining live interval is credited once as the resident wakes.
call('tick',10800,{action:{kind:'sleep',started:3600,ends:10800}});close(state.vitals.energy,89);
const afterLiveSleep=state.vitals.energy;
// last_sleep repeats the entire interval after wake; it must not heal twice.
call('tick',10800,{last_sleep:{started:3600,ended:10800,seconds:7200}});assert.equal(state.vitals.energy,afterLiveSleep);
assert.equal(state.lastSleepEnd,10800);

// Food is a finite ledger tied to garden harvest; a second bite cannot mint food.
const meal=call('action',10800,{tool:'eat_harvest'});assert.equal(meal.result.ok,true);assert.equal(state.food.harvestConsumed,1);
const noSecond=call('action',10830,{tool:'eat_harvest',objects:{garden:{harvest:1}}});assert.equal(noSecond.result.ok,false);assert.equal(noSecond.result.reason,'no_harvest');

// Water has a calm cooldown instead of a click farm.
const drink=call('action',11000,{tool:'drink_water'});assert.equal(drink.result.ok,true);
const spam=call('action',11001,{tool:'drink_water'});assert.equal(spam.result.ok,false);assert.equal(spam.result.reason,'settling');

// The bridge provides flat public projections. Two meals between ticks both count.
state.vitals.hunger=10;
const receipts={cellar:{shelf:[],mealReceipts:[{sequence:1,id:7,at:11945},{sequence:2,id:8,at:11990}]}};
call('tick',12000,{mechanics:receipts});assert.deepEqual(state.food.cheeseConsumed,[7,8]);assert.equal(state.food.cheeseEaten,2);
close(state.vitals.hunger,10-999/3600*5+44);
const hungerAfterCheese=state.vitals.hunger;
call('tick',13000,{mechanics:receipts});assert(state.vitals.hunger<hungerAfterCheese);assert.equal(state.food.cheeseEaten,2);

// A real brewed cup can be drunk once; missing stock cannot mint another cup.
assert.equal(call('action',13000,{tool:'drink_tea',objects:{tea:{cups:1}}}).result.ok,true);
assert.equal(call('action',13045,{tool:'drink_tea',objects:{tea:{cups:1}}}).result.reason,'no_tea');
assert.equal(call('action',13055,{tool:'drink_tea',objects:{tea:{cups:2}}}).result.remaining,0);

// Restart/migration preserves resource receipts, cooldowns, and sleep accounting.
const saved=JSON.parse(JSON.stringify(state));call('migrate',13055,{mechanics:receipts});assert.deepEqual(state,saved);
const beforeBackward=state.vitals.energy;call('tick',13000);assert.equal(state.vitals.energy,beforeBackward);
state=null;call('migrate',0);call('tick',86400);close(state.vitals.hunger,12);close(state.vitals.thirst,0);close(state.vitals.energy,36);
state=null;call('migrate',0);
const overlapping=call('tick',7200,{action:{kind:'sleep',started:0,ends:10800},last_sleep:{started:0,ended:7200}});
close(state.vitals.energy,92);assert.equal(overlapping.public.sleeping,true);
const awake=call('tick',10800,{last_sleep:{started:0,ended:10800}});assert.equal(awake.public.sleeping,false);close(state.vitals.energy,100);
for(const n of Object.values(state.vitals))assert(n>=0&&n<=100);

const registry=JSON.parse(fs.readFileSync(path.join(__dirname,'../public/world-mechanics.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'../public/resident-manifest.json'),'utf8'));
const vitals=registry.modules.find(m=>m.id==='vitals');assert(vitals);assert.equal(vitals.tick_seconds,60);
assert.deepEqual(vitals.tools.map(t=>t.name),['eat_harvest','drink_water','rest_quietly','drink_tea']);
for(const tool of vitals.tools)assert(manifest.objects.some(o=>o.id===tool.object),`missing object ${tool.object}`);
const cellar=registry.modules.find(m=>m.id==='cellar');assert(cellar.tools.some(t=>t.name==='eat'));
console.log('PASS vitals: sleep overlap/restart, bounded offline decay, finite food/tea, water cooldown, multiple cheese receipts and registered tools');
