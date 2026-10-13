const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const base=path.join(__dirname,'..'),code=fs.readFileSync(path.join(base,'public/mechanics/amnesty.js'),'utf8'),c=vm.createContext({});vm.runInContext(code,c);let state=null;
const call=(mode='migrate',tool,args={})=>{const r=JSON.parse(JSON.stringify(c.world({state,mode,tool,args,world:{},now:99999})));state=r.state;return r;};
call();const initial=JSON.stringify(state);call('tick');assert.equal(JSON.stringify(state),initial);
call('action','next');assert.equal(JSON.stringify(state),initial);
for(const index of [-1,3,1.5,'1']){assert.equal(call('action','load',{index}).result.ok,false);assert.deepEqual(state.loaded,[false,false,false]);}
assert.equal(call('action','dispatch').result.reason,'under');
for(let round=0;round<3;round++){
 let r=call();assert.equal(r.public.round,round);
 // No subset can cross with the invented paper masses. Once cleared there is a solution.
 let trueSolutions=0,taxedSolutions=0;for(let mask=0;mask<8;mask++){
  let actual=0,taxed=0;for(let i=0;i<3;i++)if(mask&(1<<i)){actual+=r.public.weights[i];taxed+=r.public.effective[i];}
  trueSolutions+=actual===r.public.target;taxedSolutions+=taxed===r.public.target;
 }
 assert(trueSolutions>0);assert.equal(taxedSolutions,0);
 for(let i=0;i<3;i++)call('action','load',{index:i});
 assert.equal(call('action','dispatch').result.reason,'over');
 call('action','amnesty');call('action','amnesty');assert.equal(call().public.debt.reduce((a,b)=>a+b),0);
 // Fixed pairs: A+C, A+B, A+C.
 call('action','load',{index:round===1?2:1});
 const ready=JSON.stringify(state);call('migrate');assert.equal(JSON.stringify(state),ready);
 r=call('action','dispatch');assert.equal(r.result.ok,true);assert.equal(state.delivered.length,(round+1)*2);
 const delivered=JSON.stringify(state);call('action','dispatch');call('action','amnesty');call('action','load',{index:0});assert.equal(JSON.stringify(state),delivered,'finished route cannot duplicate cargo');
 assert.equal(call().public.tilt,0);
 if(round<2)call('action','next');
}
assert.equal(state.status,'complete');assert.equal(new Set(state.delivered.map(x=>x.id)).size,6);
const final=JSON.stringify(state);call('tick');call('migrate');assert.equal(JSON.stringify(state),final);
call('action','next');assert.equal(state.status,'complete');call('action','restart');assert.equal(state.run,2);assert.equal(state.status,'idle');assert.deepEqual(state.delivered,[]);
assert.equal(fs.readFileSync(path.join(base,'src/amnesty-core.js'),'utf8'),'// Generated from public/mechanics/amnesty.js by scripts/sync-mechanics.mjs.\n'+code+'\nexport default world;\n');
const manifest=JSON.parse(fs.readFileSync(path.join(base,'public/resident-manifest.json')));assert.deepEqual(manifest.objects.find(x=>x.id==='amnesty_bureau').position,[0,.6,24]);assert.deepEqual(manifest.objects.find(x=>x.id==='cheese_cellar').position,[24,.6,0]);
const land=JSON.parse(fs.readFileSync(path.join(base,'src/territory.json')));assert.equal(land.sectors.find(x=>x.id==='0:1').status,'settled');assert.equal(land.sectors.filter(x=>x.status==='settled').length,4);assert.equal(land.sectors.length,25);
console.log('PASS amnesty: both fails, all 3 routes, exhaustive subsets, invalid input, idempotent pardon, duplicate guard, replay, migrate/tick preserve, shared source, registry');
