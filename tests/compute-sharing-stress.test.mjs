import vm from 'node:vm';import fs from 'node:fs';import assert from 'node:assert/strict';
const c=vm.createContext({});vm.runInContext(fs.readFileSync('public/mechanics/garage.js','utf8'),c);const plain=x=>JSON.parse(JSON.stringify(x));let seed=123456789;const rand=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;};
let s=null,now=1800000000;const accepted=new Map(),ended=new Map();let rejects=0,duplicates=0;
for(let i=0;i<8000;i++){
 now+=rand(5)?rand(50):rand(2000);let op=rand(10),args=op===0?{sharing:'disable'}:op===1?{sharing:'enable'}:op===2?{sharing:'inspect'}:{sharing:'submit',task:['sort','checksum','route'][rand(3)],batch:1+rand(3),ticket:op===3?Math.max(1,(s?.seq||0)-rand(30)):op===4?(s?.seq||0)+2:(s?.seq||0)+1};
 const beforeSeq=s?.seq||0;let out=plain(c.sharingWorld({mode:'action',state:s,tool:'pump',args,now,world:{position:[50.5,.6,-35]}}));s=out.state;
 if(out.result.ok===false)rejects++;if(out.result.duplicate)duplicates++;
 if(s.seq>beforeSeq){assert.equal(s.seq,beforeSeq+1);assert.equal(args.ticket,s.seq);assert(!accepted.has(s.seq));accepted.set(s.seq,{task:args.task,batch:args.batch});}
 assert.equal(s.seq,s.completed+s.cancelled+s.queue.length+(s.active?1:0));assert(s.queue.length<=3);assert(s.receipts.length<=12);assert.equal(new Set([s.active,...s.queue].filter(Boolean).map(j=>j.ticket)).size,s.queue.length+(s.active?1:0));
 if(!s.enabled){assert.equal(s.active,null);assert.equal(s.queue.length,0);}
 for(const j of s.receipts){assert(accepted.has(j.ticket));assert.deepEqual({task:j.task,batch:j.batch},accepted.get(j.ticket));assert.equal(j.unit,'datacenter_mike');if(ended.has(j.ticket))assert.deepEqual(j,ended.get(j.ticket));else ended.set(j.ticket,j);if(j.status==='done'){assert(j.simulation);assert(j.finished<=now);if(j.task==='sort'){assert.deepEqual(j.simulation.sorted,[...j.simulation.input].sort((a,b)=>a-b));}if(j.task==='checksum')assert.equal(j.simulation.sum,j.simulation.input.reduce((a,b)=>a+b,0));}else assert.equal(j.simulation,null);}
 assert.equal(ended.size,s.completed+s.cancelled);
 // Same-time reload/migration must be an exact identity, not just equivalent counters.
 if(i%17===0){const after=plain(c.sharingWorld({mode:'migrate',state:plain(s),now,world:{}}));assert.deepEqual(after.state,s);s=after.state;}
}
assert(accepted.size>1000);assert(rejects>100);assert(duplicates>100);
console.log('PASS sharing stress 8000 transitions:',{accepted:accepted.size,completed:s.completed,cancelled:s.cancelled,rejects,duplicates,uniqueReceipts:ended.size,retained:s.receipts.length});
