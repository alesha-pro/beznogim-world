const {readFileSync}=require('fs'),vm=require('vm'),assert=require('assert/strict');
const ctx=vm.createContext({});vm.runInContext(readFileSync('public/mechanics/bench.js','utf8'),ctx);const w=i=>JSON.parse(JSON.stringify(ctx.world(i)));
const legacy={round:2,core:3,belt:3,phase:'complete',attempts:42,repairs:3,run:7};let x=w({mode:'migrate',now:1000,state:legacy,previous_version:1,version:2});assert.deepEqual(x.state,{...legacy,observer:{version:2,rows:[],seen:[],total:0,clamps:{anchor:null,records:[],sequence:0,lastCompared:null}}});
function action(tool,args={},now=1000){x=w({mode:'action',state:x.state,tool,args,now});return x;}
function tick(now){x=w({mode:'tick',state:x.state,now});return x;}
action('fit',{part:'seed',value:1});assert.equal(x.state.phase,'complete');assert.equal(x.state.trial.phase,'planted');
action('crank',{trial:true,water:1});const start=x.state.trial.started;assert.equal(start,1000);assert.equal(x.public.trial.trays[0].water,40);
action('crank',{trial:true,water:3},1100);assert.equal(x.result.ok,false);assert.equal(x.state.trial.started,start);assert.equal(x.state.trial.water,1);
action('fit',{part:'seed',value:2},1100);assert.equal(x.result.ok,false);assert.equal(x.state.trial.seed,1);
action('salvage',{trial:true},1359);assert.equal(x.result.ok,false);assert.equal(x.state.trial.sequence,0);
tick(1180);assert.equal(x.public.trial.progress,.5);assert(x.public.trial.trays[0].growth>0);assert(x.public.trial.trays[0].water>x.public.trial.trays[1].water);
const halfway=x.state;x=w({mode:'migrate',state:halfway,now:1180,previous_version:2,version:2});assert.deepEqual(x.state,halfway);
tick(1360);assert.equal(x.public.trial.phase,'ready');assert.equal(x.public.trial.trays[0].water,0);assert.equal(x.public.trial.trays[1].water,0);const outcomes=x.public.trial.trays;
action('fit',{part:'seed',value:2},1400);assert.equal(x.result.ok,false);
action('salvage',{trial:true},1400);assert.equal(x.result.ok,true);assert.equal(x.state.trial.sequence,1);assert.deepEqual(x.result.comparison,{id:1,seed:1,water:1,soil:outcomes[0].growth,mica:outcomes[1].growth,finished:1360});assert(outcomes[0].growth>outcomes[1].growth);
const collected=x.state;action('salvage',{trial:true},1500);assert.equal(x.result.ok,false);assert.deepEqual(x.state,collected);
action('restart',{},1600);assert.deepEqual(x.state.trial,collected.trial);assert.equal(x.state.phase,'ready');
for(let i=0;i<10;i++){const n=2000+i*1000;action('fit',{part:'seed',value:2},n);action('crank',{trial:true,water:3},n);tick(n+360);assert(x.public.trial.trays[1].growth>x.public.trial.trays[0].growth);action('salvage',{trial:true},n+360);}
assert.equal(x.state.trial.sequence,11);assert.equal(x.state.trial.records.length,6);assert.deepEqual(x.state.trial.records.map(r=>r.id),[6,7,8,9,10,11]);
for(const seed of [1,2,3])for(const water of [1,2,3]){x=w({mode:'migrate'});action('fit',{part:'seed',value:seed});action('crank',{trial:true,water});const s=x.state;let prior=[-1,-1];for(let dt=0;dt<=360;dt+=10){x=w({mode:'tick',state:s,now:1000+dt});for(let i=0;i<2;i++){const t=x.public.trial.trays[i];assert(t.growth>=prior[i]);prior[i]=t.growth;assert(t.growth>=0&&t.growth<=12);assert(t.water>=0&&t.water<=120);}}const full=x.public.trial;x=w({mode:'tick',state:x.state,now:10000000});assert.deepEqual(x.public.trial.trays,full.trays);assert.equal(x.public.trial.phase,'ready');}
x=w({mode:'migrate',now:900,state:{trial:{phase:'growing',started:1000,water:2,seed:1}}});assert.equal(x.public.trial.progress,0);assert(x.public.trial.trays.every(t=>t.growth===0));
console.log('PASS paired trials: legacy exact preservation; all 9 seed/water configurations x37 timings; offline cap; duplicate start/harvest; blocked replacement; stable sequence/bounded6 archive; independent monitor restart; reload during growth; backwards clock');
x=w({mode:'migrate',now:0,state:{trial:{seed:-8,water:999,phase:'garbage',started:'oops',sequence:-1,records:[null,'oops',{}, {id:2,seed:1,water:99,soil:999,mica:-99,finished:'x'}]}}});assert.equal(x.public.trial.phase,'empty');assert.equal(x.public.trial.records.length,1);assert.equal(x.public.trial.records[0].soil,12);assert.equal(x.public.trial.records[0].mica,0);assert.equal(x.public.trial.records[0].water,3);
console.log('PASS corrupt trial normalization, archive schema/finite ranges');
assert.equal(x.state.trial.sequence,2);
x=w({mode:'action',now:1000,tool:'fit',args:{part:'seed',value:3},state:legacy});x=w({mode:'action',now:1000,tool:'crank',args:{trial:true},state:x.state});const active=JSON.parse(JSON.stringify(x.state.trial));x=w({mode:'action',now:1100,tool:'restart',state:x.state});assert.deepEqual(x.state.trial,active);x=w({mode:'migrate',now:100000,state:x.state});assert.equal(x.state.trial.phase,'ready');assert.equal(x.state.trial.started,1000);
console.log('PASS monitor restart during active trial; offline migration completes without reset; sequence >= archived ids');
// Negative guards are exercised directly: the workshop contract runner treats
// ok:false as a rejected action before matching expectations.
{
 let r=w({mode:'migrate'});r=w({mode:'action',state:r.state,tool:'crank',args:{}});
 for(const [tool,args]of [['crank',{}],['fit',{part:'belt',value:3}]]){const x=w({mode:'action',state:r.state,tool,args});assert.equal(x.result.ok,false);assert.deepEqual(x.state,r.state);}
 r=w({mode:'action',state:r.state,tool:'salvage',args:{}});r=w({mode:'action',state:r.state,tool:'fit',args:{part:'belt',value:3}});r=w({mode:'action',state:r.state,tool:'crank',args:{}});assert.equal(r.state.phase,'repaired');
 for(const [tool,args]of [['crank',{}],['fit',{part:'core',value:4}]]){const x=w({mode:'action',state:r.state,tool,args});assert.equal(x.result.ok,false);assert.deepEqual(x.state,r.state);}
 console.log('PASS legacy ejected/repaired duplicate crank + blocked fit: no loss of refusal regression');
}
