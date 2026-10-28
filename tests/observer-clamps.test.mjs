import assert from 'node:assert/strict';
import world from '../src/bench-core.js';
let s=null,r;
const call=(mode,now,tool,args={},notes={})=>{r=world({mode,now,tool,args,state:structuredClone(s),world:{field_notes:notes,objects:{engine:{running:now%2===0}}}});assert.doesNotThrow(()=>JSON.stringify(r));s=JSON.parse(JSON.stringify(r.state));return r;};
const capture=(action,metric)=>call('action',90000,'salvage',{journal:true,capture:action,...(metric===undefined?{}:{metric})});
const measure=(id,time,value,checked)=>call('tick',time,undefined,{}, {engine:{id,time,target:'engine',source:'fictional_world_simulation',...(checked?{checked_at:checked}:{}),facts:{period_s:value,amplitude:value*2,private:'do not publish me'}}});
assert.equal(capture('compare').result.reason,'pin_first');assert.equal(capture('pin').result.reason,'no_numeric_sample');
measure(1,100,4);capture('pin','period_s');assert.deepEqual(r.result.anchor,{metric:'period_s',id:1,time:100,value:4,running:true});
assert.equal(capture('pin','period_s').result.reason,'release_first');assert.equal(capture('compare').result.reason,'new_sample_required');
const pinned=structuredClone(s.observer.clamps);call('tick',200);assert.deepEqual(s.observer.clamps,pinned);
measure(2,200,5);capture('compare','amplitude');assert.equal(r.result.reason,'metric_mismatch');assert.deepEqual(s.observer.clamps,pinned);
capture('compare');assert.deepEqual(r.result.comparison,{id:1,metric:'period_s',a:{id:1,time:100,value:4,running:true},b:{id:2,time:200,value:5,running:true},delta:1,percent:25,elapsed:100});
const first=structuredClone(s.observer.clamps);for(let i=0;i<100;i++){capture('compare');assert(r.result.duplicate);assert.deepEqual(s.observer.clamps,first);}
// Monitor restart must not reset anchor/archive; neither may trial mode or a rejected mixed job.
call('action',90000,'restart');assert.deepEqual(s.observer.clamps,first);
call('action',90000,'salvage',{journal:true,capture:'release',trial:true});assert.equal(r.result.reason,'one_job_at_a_time');assert.deepEqual(s.observer.clamps,first);
call('action',90000,'salvage',{capture:'release'});assert.equal(r.result.reason,'capture_requires_journal');assert.deepEqual(s.observer.clamps,first);
for(let id=3;id<=80;id++){measure(id,id*100,id/3);capture('compare');}
assert.equal(s.observer.rows.length,48);assert.equal(s.observer.clamps.records.length,6);assert.equal(s.observer.clamps.sequence,79);assert.equal(s.observer.clamps.anchor.value,4);
const saved=structuredClone(s);call('migrate',99999999);assert.deepEqual(s,saved);call('migrate',1);assert.deepEqual(s,saved);assert(!JSON.stringify(r).includes('do not publish'));
const oldPaper=structuredClone(s.observer);delete oldPaper.clamps;oldPaper.version=1;s.observer=oldPaper;call('migrate',90000);assert.deepEqual(s.observer.rows,saved.observer.rows);assert.equal(s.observer.clamps.anchor,null);assert.equal(s.observer.clamps.records.length,0);
s=saved;capture('release');assert.equal(s.observer.clamps.anchor,null);assert.equal(s.observer.clamps.records.length,6);assert.equal(s.observer.clamps.sequence,79);
capture('pin','period_s');assert.equal(s.observer.clamps.anchor.id,80);assert.equal(capture('compare').result.reason,'new_sample_required');
// Same id with a new checked_at is a legitimate newer measurement. Zero A has no percentage.
capture('release');measure(81,8100,0);capture('pin','period_s');measure(81,8100,2,8110);capture('compare');assert.equal(r.result.comparison.percent,null);assert.equal(r.result.comparison.delta,2);assert.equal(r.result.comparison.elapsed,10);
// Negative A uses |A| for sign-consistent percentage, tiny nonzero A cannot produce Infinity.
for(const [a,b,p] of [[-4,-2,50],[1e-320,1,null]]){capture('release');measure(90,9000,a);capture('pin','period_s');measure(91,9100,b);capture('compare');assert.equal(r.result.comparison.percent,p);s=null;}
// Rehydrate only numeric frozen receipts: reject text/prototype paths, recompute derived fields.
s={observer:{clamps:{anchor:{id:1,time:100,value:4,metric:'period_s',secret:'private'},records:[{id:1,metric:'period_s',a:{id:1,time:100,value:4},b:{id:2,time:200,value:5},delta:999,percent:999,private:'secret'}],sequence:1}}};call('migrate',90000);assert.equal(s.observer.clamps.records[0].delta,1);assert.equal(s.observer.clamps.records[0].percent,25);assert.equal(s.observer.clamps.lastCompared,200);assert(!JSON.stringify(s).includes('private'));
const c=structuredClone(s);c.observer.clamps.anchor.metric='constructor.bad';s=c;call('migrate',90000);assert.equal(s.observer.clamps.anchor,null);
// Stress thousands of transitions with no repeated comparison ids/pairs, bounded JSON state.
s=null;const seen=new Set();let accepted=0;
for(let n=1;n<=1500;n++){
 measure(n,10000+n,n%19-9);
 if(n%17===1||!s.observer.clamps.anchor){capture('release');capture('pin','period_s');}
 else{capture('compare');assert.equal(r.result.ok,true);const p=r.result.comparison,key=`${p.a.id}@${p.a.time}/${p.b.id}@${p.b.time}`;assert(!seen.has(key));seen.add(key);accepted++;const copy=structuredClone(s);capture('compare');assert(r.result.duplicate);assert.deepEqual(s,copy);}
 if(n%19===0){const copy=structuredClone(s);call('migrate',0);assert.deepEqual(s,copy);}
 assert(s.observer.clamps.records.length<=6);assert(s.observer.rows.length<=48);assert(Buffer.byteLength(JSON.stringify(r))<120000);
}
console.log(`PASS frozen clamps: ${accepted} unique comparisons/1500 samples; pin/newer-only/metric/zero-negative-tiny/100replays/6archive/ring-eviction/JSON/offline/backward/migration/privacy/mixedguards/restart; no fabricated measurements`);
