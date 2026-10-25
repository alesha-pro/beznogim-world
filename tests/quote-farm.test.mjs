import assert from 'node:assert/strict';
import run from '../src/vitals-core.js';
const kitchen={position:[48,.6,24]},farm={position:[55,.6,24]};
let state=null,now=10000;
const go=(args={},world=farm,mode='action')=>{const r=run({mode,state,now,tool:'rest_quietly',args,world});state=JSON.parse(JSON.stringify(r.state));return r;};
const supply=()=>state.cafe.supply;
const check=()=>{const s=supply();assert.equal(s.raw,s.produced-s.delivered);assert.equal(s.kitchen,s.starter+s.delivered-s.used);for(const k of ['raw','kitchen'])assert(s[k]>=0&&s[k]<=12);};
const job=(farm,amount,world)=>go({farm,...amount===undefined?{}:{amount}},world);
const act=cafe=>go({cafe},kitchen);
go({}, {},'migrate');assert.deepEqual(supply(),{raw:0,kitchen:2,starter:2,sequence:0,produced:0,delivered:0,used:0,batch:null});
assert.equal(job('inspect',undefined,{}).result.ok,true);assert.equal(job('start',undefined,kitchen).result.reason,'visit_quote_farm');assert.equal(job('harvest').result.reason,'no_batch');assert.equal(job('deliver',undefined,kitchen).result.reason,'no_raw');
assert.equal(go({farm:'start',cafe:'order'}).result.reason,'one_job_at_a_time');assert.equal(supply().sequence,0);
assert.equal(job('start').result.ok,true);const batch=structuredClone(supply().batch);assert.equal(job('start').result.reason,'batch_exists');assert.deepEqual(supply().batch,batch);assert.equal(job('harvest').result.reason,'growing');
now+=179;assert.equal(go({}, {},'tick').public.cafe.supply.batch.phase,'growing');assert.equal(job('harvest').result.reason,'growing');now++;
assert.equal(go({}, {},'tick').public.cafe.supply.batch.phase,'ripe');assert.equal(supply().raw,0,'tick must not collect');assert.equal(job('harvest').result.amount,6);for(let i=0;i<100;i++)assert.equal(job('harvest').result.reason,'no_batch');assert.equal(supply().raw,6);check();
assert.equal(job('deliver',undefined,farm).result.reason,'visit_cafe');for(const n of [-1,0,1.5,13,7])assert.equal(job('deliver',n,kitchen).result.ok,false);assert.equal(supply().raw,6);assert.equal(job('deliver',4,kitchen).result.ok,true);assert.equal(supply().raw,2);assert.equal(supply().kitchen,6);check();
assert.equal(act('order').result.ok,true);assert.equal(supply().kitchen,5);assert.equal(supply().used,1);for(let i=0;i<100;i++)assert.equal(act('order').result.reason,'tray_exists');assert.equal(supply().used,1);now+=90;assert.equal(act('tea').result.ok,true);assert.equal(act('eat').result.ok,true);assert.equal(act('tea').result.reason,'already_drunk');assert.equal(act('eat').result.reason,'already_eaten');assert.equal(act('order').result.reason,'kitchen_break');check();
// Grow while the cafe rests; offline ticks don't duplicate, refill, or autoharvest.
assert.equal(job('start').result.ok,true);now+=86400*7;for(let i=0;i<3;i++)go({}, {},'tick');assert.equal(supply().raw,2);assert.equal(go({}, {},'tick').public.cafe.supply.batch.phase,'ripe');assert.equal(job('harvest').result.amount,6);assert.equal(supply().raw,8);assert.equal(job('start').result.reason,'raw_store_full');check();
assert.equal(job('deliver',8,kitchen).result.reason,'kitchen_full');assert.equal(job('deliver',undefined,kitchen).result.amount,7);assert.equal(supply().kitchen,12);assert.equal(supply().raw,1);check();
assert.equal(job('deliver',1,kitchen).result.reason,'kitchen_full');assert.equal(job('deliver',undefined,kitchen).result.reason,'invalid_amount');
// Exhaust the pantry through real 90s orders + 2h kitchen breaks. Tea remains consumable.
for(let i=0;i<12;i++){assert.equal(act('order').result.ok,true);now+=90;const used=supply().used;assert.equal(act('tea').result.ok,true);assert.equal(act('eat').result.ok,true);assert.equal(supply().used,used);now+=7200;check();}
assert.equal(supply().kitchen,0);assert.equal(act('order').result.reason,'no_kitchen_quotes');assert.equal(state.cafe.tray.drunk,true);assert.equal(job('deliver',1,kitchen).result.ok,true);assert.equal(act('order').result.ok,true);assert.equal(supply().kitchen,0);check();
// Expired/uneaten trays never refund the ingredient. No starter stock on republish.
const used=supply().used;now+=15000;go({}, {},'tick');assert.equal(state.cafe.tray,null);assert.equal(supply().used,used);assert.equal(act('order').result.reason,'no_kitchen_quotes');
for(let i=0;i<10;i++){const before=structuredClone(state);go({}, {},'migrate');assert.deepEqual(state,before);}check();
// Serialize during growth and restore with backward time; nothing finishes early.
job('start');const save=JSON.stringify(state),deadline=supply().batch.ready;now-=100;state=JSON.parse(save);assert.equal(go({}, {},'migrate').public.cafe.supply.batch.phase,'growing');assert.equal(job('harvest').result.reason,'growing');now=deadline;assert.equal(job('harvest').result.ok,true);check();
// Additive v2 migrations at each tray phase preserve IDs, needs, food, cooldowns and existing meal.
for(const phase of ['empty','cooking','ready','eaten','finished']){
 let r=run({mode:'migrate',now:900000,world:kitchen});
 if(phase!=='empty')r=run({mode:'action',tool:'rest_quietly',args:{cafe:'order'},state:r.state,now:900000,world:kitchen});
 const time=phase==='empty'||phase==='cooking'?900000:900090;
 for(const course of phase==='finished'?['eat','tea']:phase==='eaten'?['eat']:[])r=run({mode:'action',tool:'rest_quietly',args:{cafe:course},state:r.state,now:time,world:kitchen});
 r=run({mode:'tick',state:r.state,now:time,world:kitchen});delete r.state.cafe.supply;r.state.kept={stamp:'preserve'};
 const old=structuredClone(r.state);let n=run({mode:'migrate',previous_version:2,version:3,state:old,now:time,world:kitchen});
 const copy=structuredClone(n.state);delete copy.cafe.supply;assert.deepEqual(copy,old);assert.equal(n.state.cafe.supply.kitchen,2,'one finite existing reserve');assert.equal(n.state.cafe.supply.used,0,'no retroactive charging');
 for(let i=0;i<3;i++){const before=structuredClone(n.state);n=run({mode:'migrate',state:JSON.parse(JSON.stringify(n.state)),now:time,world:kitchen});assert.deepEqual(n.state,before);}
 if(phase==='ready'){n=run({mode:'action',tool:'rest_quietly',args:{cafe:'eat'},state:n.state,now:time,world:kitchen});assert.equal(n.result.ok,true);assert.equal(n.state.cafe.supply.kitchen,2);}
}
console.log('PASS quote farm: atomic6/12/12 ledger,180s/manual collection,all guards/capacities,100 repeats,no refunds,finite starter,no raw order,tea/eat,week offline,JSON/backwardclock,5 legacy migrations/idempotence');
state=null;now=1000000;go({}, {},'migrate');let seed=19,rejected=0;
const rng=()=>{seed=(seed*1664525+1013904223)>>>0;return seed;};
for(let i=0;i<6000;i++){
 now+=rng()%80;
 const options=['start','harvest','deliver','inspect'],which=rng()%7;
 const near=(rng()%5)!==0;const args=which<4?{farm:options[which]}:{cafe:['order','eat','tea'][which-4]};
 if(args.farm==='deliver'&&(rng()%2))args.amount=(rng()%15)-1;
 const w=near?(args.farm&&args.farm!=='deliver'?farm:kitchen):{position:{x:0,y:0,z:0}};
 const before=structuredClone(supply());const r=go(args,w);check();
 if(r.result?.ok===false){assert.deepEqual(supply(),before);rejected++;}
 if(i%61===0){const before=structuredClone(state);go({}, {},'migrate');assert.deepEqual(state,before);}
}
assert(rejected>1000);console.log('PASS quote farm deterministic6000jobs,all rejected ledgers identical,limits/conservation/repeated migration',rejected);
