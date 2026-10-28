import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const ctx=vm.createContext({});vm.runInContext(fs.readFileSync('public/mechanics/bench.js','utf8'),ctx);
const w=i=>JSON.parse(JSON.stringify(ctx.world(i)));
let count=0,tradeoffs=0;
for(const seed of [1,2,3])for(const water of [1,2,3])for(const cover of ['open','mica','both']){
 let x=w({mode:'migrate',now:1000,state:{phase:'complete',core:3,belt:3,observer:{rows:[],seen:[],total:0}}});
 x=w({mode:'action',now:1000,state:x.state,tool:'fit',args:{part:'seed',value:seed}});
 x=w({mode:'action',now:1000,state:x.state,tool:'crank',args:{trial:true,water,cover}});
 assert.equal(x.result.ok,true);assert.equal(x.state.trial.cover,cover);
 const active=structuredClone(x.state);let prior=[0,0];
 for(let dt=0;dt<=360;dt+=5){
  const y=w({mode:'tick',now:1000+dt,state:active});
  for(let i=0;i<2;i++){
   const covered=cover==='both'||cover==='mica'&&i===1,loss=[8,15][i]*(covered?.5:1),minutes=(dt/360)*6,wet=Math.min(minutes,water*40/loss),area=water*40*wet-loss*wet*wet/2;
   const factor=[[1,.7],[.65,1.1],[.85,.85]][seed-1][i],growth=Math.round(Math.min(12,area/60*factor*(covered?.8:1))*10)/10;
   assert.equal(y.public.trial.trays[i].growth,growth);assert(y.public.trial.trays[i].growth>=prior[i]);prior[i]=growth;
   assert.equal(y.public.trial.trays[i].water,Math.round(Math.max(0,water*40-loss*minutes)));count++;
  }
 }
 for(const args of [{trial:true,water:3,cover:'both'},{trial:true,water:2,cover:'open'}]){
  const y=w({mode:'action',now:1100,state:active,tool:'crank',args});assert.equal(y.result.ok,false);assert.deepEqual(y.state,active);
 }
 let y=w({mode:'migrate',now:1180,state:JSON.parse(JSON.stringify(active)),previous_version:4,version:5});assert.deepEqual(y.state,active);
 y=w({mode:'migrate',now:10000000,state:y.state,previous_version:5,version:5});assert.equal(y.public.trial.phase,'ready');
 y=w({mode:'action',now:10000000,state:y.state,tool:'salvage',args:{trial:true}});assert.equal(y.result.comparison.cover,cover);
 const record=structuredClone(y.state.trial.records),saved=structuredClone(y.state);
 y=w({mode:'action',now:10000001,state:saved,tool:'salvage',args:{trial:true}});assert.equal(y.result.ok,false);assert.deepEqual(y.state,saved);
 y=w({mode:'action',now:10000002,state:y.state,tool:'restart',args:{}});assert.deepEqual(y.state.trial.records,record);
 // With ample water the loss of light is a real cost, not a guaranteed upgrade.
 if(cover==='both'&&water===3){const base=w({mode:'tick',now:1360,state:{...active,trial:{...active.trial,cover:'open'}}});assert(y.public.trial.trays[0].growth<base.public.trial.trays[0].growth);tradeoffs++;}
}
// All older experiments/results retain their exact serialized form, including in-flight work.
const legacy={phase:'growing',seed:2,water:2,started:1000,sequence:9,records:[{id:9,seed:1,water:1,soil:1.7,mica:.6,finished:900}]};
let x=w({mode:'migrate',now:1100,state:{trial:legacy},previous_version:4,version:5});assert.deepEqual(x.state.trial,legacy);
x=w({mode:'action',now:1100,state:x.state,tool:'crank',args:{cover:'both'}});assert.equal(x.result.reason,'cover_requires_trial_crank');assert.deepEqual(x.state.trial,legacy);
x=w({mode:'action',now:2000,tool:'fit',args:{part:'seed',value:1}});let planted=structuredClone(x.state);
x=w({mode:'action',now:2000,state:planted,tool:'crank',args:{trial:true,cover:'secret'}});assert.equal(x.result.reason,'unknown_cover');assert.deepEqual(x.state,planted);
x=w({mode:'migrate',now:2000,state:{trial:{...legacy,cover:'junk',phase:'ready',records:[{...legacy.records[0],cover:'junk'}]}}});assert.equal(x.state.trial.cover,'open');assert.equal(x.state.trial.records[0].cover,'open');
// Bounded archive, mixed old/new records and restart, no loss of earlier result conditions.
let y=w({mode:'migrate',now:0});
for(let i=0;i<15;i++){let now=1000+i*500;y=w({mode:'action',now,state:y.state,tool:'fit',args:{part:'seed',value:1}});y=w({mode:'action',now,state:y.state,tool:'crank',args:{trial:true,...(i%2?{cover:'mica'}:{})}});y=w({mode:'action',now:now+360,state:y.state,tool:'salvage',args:{trial:true}});}
assert.equal(y.state.trial.sequence,15);assert.equal(y.state.trial.records.length,6);assert.deepEqual(y.state.trial.records.map(r=>r.id),[10,11,12,13,14,15]);
assert.equal(JSON.stringify(y).includes('NaN'),false);
console.log('PASS covers:',count,'growth/water timings;27 settings; light cost',tradeoffs,'legacy exact migration; JSON; offline; duplicate start/collect; bounded mixed archive; monitor restart; invalid/mixed guards');
