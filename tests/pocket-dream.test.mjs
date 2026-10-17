import assert from 'node:assert/strict';
import {freshPocketDream,actPocket,advancePocket,pocketPose,pocketBusy} from '../src/pocket-dream-core.js';
let s=freshPocketDream();const finish=()=>{for(let i=0;i<70;i++)s=advancePocket(s,.1);};
assert.deepEqual(pocketPose(s),{fold:0,fall:0,turn:0});
for(const [phase,next] of [['folding','bowl'],['falling','caught'],['turning','audience']]){s=actPocket(s);assert.equal(s.phase,phase);assert(pocketBusy(s));assert.equal(actPocket(s),s);for(const dt of [NaN,Infinity,-1,0])assert.equal(advancePocket(s,dt),s);assert.deepEqual(advancePocket(s,99),advancePocket(s,.1));finish();assert.equal(s.phase,next);assert(!pocketBusy(s));}
assert(s.trace);assert.deepEqual(pocketPose(s),{fold:1,fall:1,turn:1});assert.deepEqual(actPocket(s),freshPocketDream());assert.equal(advancePocket(s,.1),s);
console.log('PASS pocket dream fold/capture/inversion/locks/repeat/safe dt');

for(const phase of ['folding','falling','turning']){let prev={fold:0,fall:0,turn:0};for(let i=0;i<=1000;i++){const pose=pocketPose({phase,progress:i/1000});for(const k of ['fold','fall','turn']){assert(Number.isFinite(pose[k]));assert(pose[k]>=0&&pose[k]<=1);assert(pose[k]>=prev[k]);}prev=pose;}}
console.log('PASS pocket dream 3003 poses: bounded, monotone and finite');
