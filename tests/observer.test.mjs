import assert from 'node:assert/strict';
import world from '../src/bench-core.js';
const note=(id,time,facts)=>({id,time,target:'engine',source:'fictional_world_simulation',facts});
const start={round:2,core:3,belt:3,phase:'complete',run:8,attempts:42,repairs:3,trial:{phase:'growing',seed:2,water:3,started:1000,sequence:2,records:[{id:2,seed:1,water:2,soil:9,mica:7,finished:700}]}};
let state=structuredClone(start),r;const call=(mode,now,notes={},tool,args={})=>{r=world({mode,state:structuredClone(state),now,tool,args,world:{field_notes:notes,objects:{engine:{running:true}}}});state=JSON.parse(JSON.stringify(r.state));return r;};
call('migrate',1000);for(const k of Object.keys(start))assert.deepEqual(state[k],start[k]);assert.equal(state.observer.total,0);
call('tick',1040,{engine:note(1,1020,{period:4.2,amplitude:12,nested:{resonance:.4},raw:'private text must not leak'})});assert.equal(r.public.observer.rows.length,1);assert(!JSON.stringify(state.observer).includes('private'));assert.equal(state.observer.rows[0].values['nested.resonance'],.4);
for(let i=0;i<5;i++)call('tick',1040,{engine:note(1,1020,{period:4.2})});assert.equal(state.observer.total,1);
call('migrate',900);assert.equal(state.observer.total,1);assert.equal(state.observer.rows[0].values['nested.resonance'],.4);
call('action',1100,{engine:note(2,1080,[{key:'period',value:5.2},{name:'amplitude',value:16}])},'salvage',{journal:true,metric:'period'});assert.equal(r.result.summary.delta,1);assert.equal(r.result.summary.count,2);
call('action',1100,{},'salvage',{journal:true,trial:true});assert.equal(r.result.reason,'one_job_at_a_time');assert.equal(state.trial.phase,'growing');
call('tick',1200,{engine:note(3,1160,['text facts are not numeric']),other:{...note(4,1170,{period:6}),target:'radio'},bad:{...note(5,1180,{period:6}),source:'not_public'},future:note(6,9999,{period:6})});assert.equal(state.observer.total,2);
for(let id=3;id<203;id++)call('tick',1200+id,{engine:note(id,1200+id,{period:id/10,amplitude:id%7,resonance:id%3})});assert.equal(state.observer.total,202);assert.equal(state.observer.rows.length,48);assert(state.observer.seen.length<=96);
const saved=structuredClone(state);call('migrate',3000);assert.deepEqual(state,saved);call('tick',3000,{engine:note(1,1020,{period:1})});assert.deepEqual(state,saved);
call('action',3000,{},'salvage',{journal:true,metric:'resonance'});assert.equal(r.result.summary.count,48);assert.equal(r.result.points.length,12);assert.equal(r.result.summary.max,2);
call('action',3000,{},'restart');assert.deepEqual(state.observer,saved.observer);assert.deepEqual(state.trial,saved.trial);assert.equal(state.phase,'ready');
let corrupt={observer:{rows:[null,{id:7,time:1,values:{'nested.resonance':.2,'__proto__.secret':2},running:'secret'}],seen:['secret'],total:NaN}};const c=world({mode:'migrate',state:corrupt,now:3000});assert.deepEqual(c.state.observer.rows[0].values,{'nested.resonance':.2});assert.equal(c.state.observer.rows[0].running,null);assert(!JSON.stringify(c).includes('secret'));
const empty=world({mode:'action',tool:'salvage',args:{journal:true},now:1});assert.equal(empty.result.summary,null);assert.equal(empty.result.retained,0);
const noMeasurement=world({mode:'tick',now:30000,state});assert.equal(noMeasurement.state.observer.total,202);
console.log('PASS observer: real numeric leaves/arrays, 202 samples, 48 ring/96 dedup, restart+JSON+migration/backwards, no fictional measurements, privacy, independent trial/monitor, tool summaries');
// A stable observation id may be rechecked: checked_at, not wall-clock ticks, creates a new point.
let a=world({mode:'tick',now:200,state:null,world:{field_notes:{engine:{...note(42,100,{period:4}),checked_at:150}}}});
assert.equal(a.state.observer.rows[0].time,150);
a=world({mode:'tick',now:210,state:a.state,world:{field_notes:{engine:{...note(42,100,{period:4}),checked_at:160}}}});
assert.equal(a.state.observer.total,2);assert.deepEqual(a.state.observer.rows.map(r=>r.id),[42,42]);
const same=world({mode:'tick',now:99999,state:a.state,world:{field_notes:{engine:{...note(42,100,{period:4}),checked_at:160}}}});assert.deepEqual(same.state.observer,a.state.observer);
// Maximum retained numeric data stays safely below the per-part 120KB budget.
let maxState=null;for(let id=1;id<=200;id++){const facts=Object.fromEntries(Array.from({length:30},(_,i)=>['x'+i.toString().padStart(2,'0')+'a'.repeat(35),i+id/3]));maxState=world({mode:'tick',state:maxState,now:id,world:{field_notes:{engine:note(id,id,facts)}}}).state;}
assert(Object.keys(maxState.observer.rows[0].values).length<=12);assert(Buffer.byteLength(JSON.stringify(maxState))<80000);
console.log('PASS stable-id rechecks, checked_at idempotency, worst-case numeric state byte budget');

// Public fact keys are not guaranteed to be English. Keep numeric Cyrillic keys
// across projection and migration, without copying text values.
const ru=world({mode:'tick',now:900,world:{field_notes:{engine:note(8,800,{"период":4.2,"амплитуда":12,"поле":{"резонанс":.3},"текст":"not a numeric fact"})}}});
assert.deepEqual(ru.public.observer.rows[0].values,{"амплитуда":12,"период":4.2,"поле.резонанс":.3});
const ruRestored=world({mode:'migrate',state:JSON.parse(JSON.stringify(ru.state)),now:1000});
assert.deepEqual(ruRestored.state.observer,ru.state.observer);
assert.equal(world({mode:'action',state:ruRestored.state,tool:'salvage',args:{journal:true,metric:'период'},now:1000}).result.summary.min,4.2);
console.log('PASS numeric Unicode public fact paths survive projection/migration/tool read, text excluded');

const manifest=JSON.parse((await import('node:fs')).readFileSync(new URL('../public/resident-manifest.json',import.meta.url),'utf8'));
const approach=manifest.objects.find(o=>o.id==='observer_journal').position;assert.deepEqual(approach,[6.95,.6,-2.1]);
assert(Math.hypot(approach[0]-5.45,approach[2]+.6)>2);assert(Math.hypot(approach[0]-5.45,approach[2]+.6)<2.4);
console.log('PASS stable observer approach beside, not inside board; physical geometry centre unchanged');
