import assert from 'node:assert/strict';import run from '../src/drydock-core.js';
const w={position:[7.8,.6,4.5]},start=1792846800;
let r=run({mode:'migrate',now:start,world:w}),s=r.state;
assert.equal(r.public.shore.phase,'quiet');assert.equal(s.run,1);
const act=(args,now=start,world=w)=>{r=run({mode:'action',tool:'launch',args,state:s,now,world});s=structuredClone(r.state);return r;};
assert.equal(act({shore:'throw',strength:5,angle:2},start,{position:[0,0,0]}).result.ok,false);
assert.equal(act({shore:'throw',strength:2.5,angle:2}).result.ok,false);
assert.equal(act({shore:'throw',strength:5,angle:4}).result.ok,false);
let now=start;for(let i=1;i<=9;i++){
 const strength=(i-1)%5+1,angle=(i-1)%3+1;r=act({shore:'throw',strength,angle},now);assert(r.result.ok);assert.equal(r.seconds,15);const flight=structuredClone(s.shore.active);assert(flight.ends-now<=15);assert.equal(flight.contacts.length,flight.skips);
 for(let j=0;j<flight.contacts.length;j++){const c=flight.contacts[j];assert(c.t>0&&c.t<flight.ends-now);if(j){assert(c.x>flight.contacts[j-1].x);assert(c.t>flight.contacts[j-1].t);}assert(c.x<=flight.distance);}
 assert.equal(flight.contacts.at(-1).x,flight.distance);
 const stable=JSON.stringify(s.shore);assert.equal(act({shore:'throw',strength:2,angle:1},now+1).result.ok,false);assert.equal(JSON.stringify(s.shore),stable);
 r=run({mode:'migrate',state:JSON.parse(JSON.stringify(s)),now:now+1,world:w});assert.deepEqual(r.state.shore,s.shore);s=r.state;
 r=run({mode:'tick',state:s,now:flight.ends,world:w});s=structuredClone(r.state);assert.equal(s.shore.active,null);assert.equal(s.shore.last.id,i);assert.equal(s.shore.history.length,Math.min(i,6));
 const hist=JSON.stringify(s.shore);r=run({mode:'tick',state:s,now:flight.ends+999999,world:w});assert.equal(JSON.stringify(r.state.shore),hist);now+=30;
}
assert.equal(s.shore.sequence,9);assert.deepEqual(s.shore.history.map(r=>r.id),[4,5,6,7,8,9]);
const album=structuredClone(s.shore);r=run({mode:'action',tool:'reset',args:{},state:s,now,world:{position:[-24,.6,0]}});assert.deepEqual(r.state.shore,album);assert.equal(r.state.run,2);
for(let strength=1;strength<=5;strength++)for(let angle=1;angle<=3;angle++){
 const r=run({mode:'action',tool:'launch',args:{shore:'throw',strength,angle},state:null,now:start,world:w});assert(r.result.ok);assert(r.result.skips>=1&&r.result.skips<=7);assert(r.result.distance>=1&&r.result.distance<8);assert.equal(r.state.depths.join(), '0,0,0');
}
const old={depths:[2,1,2],water:1,launched:false,floods:8,run:5,message:'old port'};r=run({mode:'migrate',state:old,now:start});for(const k of Object.keys(old))assert.deepEqual(r.state[k],old[k]);
for(const bad of [null,42,[],{sequence:NaN,active:{started:NaN}}, {sequence:1,history:[null,3,{},{}]}]){r=run({mode:'migrate',state:{shore:bad},now:start});assert.doesNotThrow(()=>JSON.stringify(r));assert.equal(r.state.shore.active,null);}
console.log('PASS skipping: 15 settings/contact timing, duplicate/busy/location/args guards, JSON in-flight migration, exact deadline/offline/no duplicate, six-result album, old reset/port preservation, corrupt state');

let launched={depths:[2,2,2],water:2,launched:true,floods:1,run:6};let q=run({mode:'action',tool:'launch',args:{shore:'throw',strength:3,angle:2},state:launched,now:start,world:w});assert(q.result.ok);assert(q.state.launched);assert.equal(q.state.water,2);q=run({mode:'tick',state:q.state,now:start+1000000});const steady=structuredClone(q.state.shore);let a=run({mode:'action',tool:'launch',args:{shore:'inspect'},state:q.state,now:start+1000000,world:{position:[-50,.6,50]}});assert(a.result.ok);assert.deepEqual(a.state.shore,steady);a=run({mode:'action',tool:'launch',args:{shore:'throw',strength:3,angle:2},state:q.state,now:start-1,world:w});assert.equal(a.result.ok,false);assert.deepEqual(a.state.shore,steady);console.log('PASS skipping launched-port independence, remote inspect, backwards-clock refusal');
