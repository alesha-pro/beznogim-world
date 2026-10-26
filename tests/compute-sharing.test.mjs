import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
const context=vm.createContext({});vm.runInContext(fs.readFileSync('public/mechanics/garage.js','utf8'),context);const plain=x=>JSON.parse(JSON.stringify(x));
const run=i=>plain(context.world(i));let now=1800000000,s=null;const remote={position:[0,.6,0]},near={position:[50.5,.6,-35]};
function oldEqual(out,prev){const expected=run({mode:'tick',state:prev,now,world:remote});const actual=plain(out.state);delete actual.sharing;delete expected.state.sharing;assert.deepEqual(actual,expected.state);}
function tick(dt=0,mode='tick'){now+=dt;const out=run({mode,now,state:plain(s),world:remote,version:4,previous_version:3});oldEqual(out,s);s=out.state;return out;}
function call(args,world=remote,tool='pump'){const out=run({mode:'action',now,state:plain(s),world,tool,args});oldEqual(out,s);s=out.state;return out;}
tick(0,'migrate');assert.equal(s.sharing.enabled,false);const garageBefore=plain(s);delete garageBefore.sharing;
assert.equal(call({sharing:'submit',task:'sort',batch:1,ticket:1}).result.reason,'sharing_disabled');assert.equal(s.sharing.seq,0);
for(const w of [remote,{}, {position:{x:0,z:0}}, {position:[null,.6,null]}])assert.equal(call({sharing:'enable'},w).result.ok,false);
assert.equal(call({sharing:'enable'},near).result.ok,true);const base=plain(s);
for(const args of [{sharing:'submit',task:'__proto__',batch:1,ticket:1},{sharing:'submit',task:'sort',batch:0,ticket:1},{sharing:'submit',task:'sort',batch:1.5,ticket:1},{sharing:'submit',task:'sort',batch:1,ticket:0},{sharing:'submit',task:'sort',batch:1,ticket:2},{sharing:'enable',task:'sort'},{sharing:'submit',task:'sort',batch:1,ticket:1,energy:'delivery'},{sharing:'inspect',datacenter:'mike'}]){assert.equal(call(args,near).result.ok,false);assert.deepEqual(s,base);}
assert.equal(call({sharing:'enable'},near,'launch').result.ok,false);
for(let n=1;n<=4;n++){assert.equal(call({sharing:'submit',task:['sort','checksum','route'][n%3],batch:n%3+1,ticket:n}).result.ok,true);}
assert(s.sharing.active);assert.equal(s.sharing.queue.length,3);assert.equal(call({sharing:'submit',task:'sort',batch:1,ticket:5}).result.reason,'queue_full_3_waiting');assert.equal(s.sharing.seq,4);
const pending=plain(s);const beforeQueue=plain(s.sharing);for(let i=0;i<100;i++)assert.equal(call({sharing:'submit',task:'sort',batch:3,ticket:1}).result.duplicate,true);assert.deepEqual(s.sharing,beforeQueue);
let r=tick(30);assert.equal(r.public.sharing.active.progress,.25);assert.equal(s.sharing.completed,0);const mid=plain(s);tick(-100);assert.equal(s.sharing.last,mid.sharing.last);assert.deepEqual(s.sharing,mid.sharing);now+=100;
r=tick(600);assert.equal(s.sharing.completed,4);assert.equal(s.sharing.active,null);assert.equal(s.sharing.queue.length,0);assert.equal(s.sharing.receipts.length,4);assert.deepEqual(s.sharing.receipts.map(j=>j.finished),[1800000120,1800000300,1800000360,1800000480]);
const receipt=plain(s.sharing);tick(0,'migrate');tick(0);assert.deepEqual(s.sharing,receipt);for(let i=0;i<100;i++)call({sharing:'submit',task:'sort',batch:1,ticket:1});assert.deepEqual(s.sharing,receipt);
// Validate the actual calculations independently, not just counts.
for(const j of s.sharing.receipts){const v=Array.from({length:j.batch*4},(_,i)=>(j.ticket*17+i*13)%97);if(j.task==='sort')assert.deepEqual(j.simulation.sorted,v.sort((a,b)=>a-b));if(j.task==='checksum')assert.equal(j.simulation.sum,v.reduce((a,b)=>a+b,0));if(j.task==='route')assert.equal(j.simulation.workUnits,v.length*3);}
// Revocation cancels rather than covertly finishing pending work.
for(let n=5;n<=8;n++)call({sharing:'submit',task:'sort',batch:3,ticket:n});assert.equal(call({sharing:'disable'},near).result.cancelled,4);assert.equal(s.sharing.active,null);assert.equal(s.sharing.cancelled,4);const stopped=plain(s.sharing);tick(99999);assert.equal(s.sharing.completed,4);assert.equal(s.sharing.seq,8);assert.equal(call({sharing:'submit',task:'sort',batch:1,ticket:9}).result.reason,'sharing_disabled');
// Every new ticket may complete once; bounded records must not allow retired tickets to rerun.
call({sharing:'enable'},near);for(let n=9;n<109;n++){call({sharing:'submit',task:['sort','checksum','route'][n%3],batch:1,ticket:n});tick(60);tick(0,'migrate');}assert.equal(s.sharing.completed,104);assert.equal(s.sharing.receipts.length,12);const done=plain(s.sharing);const dup=call({sharing:'submit',task:'route',batch:1,ticket:1});assert.equal(dup.result.reason,'ticket_retired_no_reexecution');assert.deepEqual(s.sharing,done);
// All old garage fields and physical energy state advance exactly like the normal tick.
// oldEqual checks every action/tick against a parallel normal tick at the same timestamp, preserving identical integration steps.
// Upgrade legacy saves add off sharing only, preserve all old garage/power fields.
const legacy=plain(garageBefore);Object.assign(legacy,{run:8,air:2,landed:2,stage:2});const migrated=run({mode:'migrate',state:legacy,now:1800000000,world:near,version:4,previous_version:3});assert.equal(migrated.state.run,8);assert.equal(migrated.state.air,2);assert.equal(migrated.state.sharing.enabled,false);assert.equal(migrated.state.energy.gas,legacy.energy.gas);
// Persist/reload each pending phase, then settle offline exactly once.
for(const state of [pending,mid]){const restored=run({mode:'migrate',state:plain(state),now:1800010000,world:near,version:4,previous_version:4});assert.equal(restored.state.sharing.completed,4);const repeated=run({mode:'migrate',state:restored.state,now:1800010000,world:near,version:4,previous_version:4});assert.deepEqual(repeated.state,restored.state);}
console.log('PASS virtual sharing off/permission near/remote submit/guards/queue4/busy/deadlines/104results/cancel4/retiredtickets/JSONmigration/offline/backwardclock/legacy energy unchanged');
