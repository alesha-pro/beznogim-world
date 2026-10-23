import assert from 'node:assert/strict';
import {CAP,START,GOALS,LIMIT,normalize,step,solution,transfer,pose} from '../src/still-core.js';
const s=normalize();assert.deepEqual(s.volumes,START);assert.equal(s.phase,'ready');
for(const bad of [null,{},[],{round:99,volumes:[NaN,1,2,3]},{volumes:[3,5,7,0]},{volumes:[4,4,7,1]},'bad']){const n=normalize(bad);assert.equal(n.volumes.reduce((a,b)=>a+b),16);assert(n.volumes.every((v,i)=>v>=0&&v<=CAP[i]));}
for(const [a,b] of [[-1,0],[0,4],[0.5,1],[0,null],[NaN,2]])assert.equal(transfer(START,a,b),null);
assert.equal(solution(normalize({used:15,volumes:START})),null);
const empty=step(s,'pour',0,3).state;assert.equal(empty.used,1);assert.equal(step(empty,'pour',0,1).result.ok,false);assert.equal(step(empty,'pour',3,2).result.ok,false);assert.deepEqual(step(empty,'pour',3,2).state,empty);
const denied=step(s,'pour',0,0);assert(!denied.result.ok);assert.deepEqual(denied.state,s);
let current=s,total=0;for(let round=0;round<3;round++){assert.equal(current.round,round);const p=solution(current);assert(p?.length>0);console.log('round',round+1,'minimum',p.length);for(const h of p){const before=structuredClone(current),r=step(current,'pour',h.a,h.b);assert.deepEqual(current,before);assert(r.result.ok);assert.equal(r.state.volumes.reduce((a,b)=>a+b),16);assert.equal(r.pour.before[h.a]-r.pour.after[h.a],r.pour.amount);current=r.state;total++;}assert.deepEqual(current.volumes,GOALS[round]);assert.equal(current.phase,round===2?'complete':'won');assert(!step(current,'pour',0,1).result.ok);assert.equal(solution(current).length,0);if(round<2)current=step(current,'next').state;}
assert.equal(step(current,'reset').state.round,2);assert.equal(step(current,'all').state.round,0);assert.equal(step(current,'all').state.run,2);
let fail=s;for(let i=0;i<LIMIT;i++)fail=step(fail,'pour',i%2?3:0,i%2?0:3).state;assert.equal(fail.phase,'spent');assert.equal(fail.used,16);assert(!step(fail,'pour',0,1).result.ok);assert.equal(step(fail,'reset').state.phase,'ready');
// Exhaust every reachable distribution and every directed pour; solver stays within budget.
const q=[START],seen=new Set([START.join()]);for(let i=0;i<q.length;i++){for(let a=0;a<4;a++)for(let b=0;b<4;b++){const t=transfer(q[i],a,b);if(!t)continue;assert.equal(t.volumes.reduce((x,y)=>x+y),16);const k=t.volumes.join();if(!seen.has(k)){seen.add(k);q.push(t.volumes);}}}
for(let r=0;r<3;r++)for(const v of q){let n=normalize({round:r,volumes:v});const p=solution(n);assert(p!==null);for(const h of p)n=step(n,'pour',h.a,h.b).state;assert.deepEqual(n.volumes,GOALS[r]);}
for(let a=0;a<4;a++)for(let b=0;b<4;b++)for(let i=0;i<=1000;i++){const p=pose(a,b,i/1000);assert(p.every(Number.isFinite));assert(p[1]>=2.95&&p[1]<=4.101);}
assert.deepEqual(normalize(JSON.parse(JSON.stringify(current))),current);
console.log('PASS still core',q.length,'reachable distributions',total,'winning pours,16016 poses');

import fs from 'node:fs';
const land=JSON.parse(fs.readFileSync('src/territory.json')),manifest=JSON.parse(fs.readFileSync('public/resident-manifest.json')),modules=JSON.parse(fs.readFileSync('public/world-mechanics.json'));
assert.deepEqual(manifest.objects.find(o=>o.id==='cloud_still').position,[24,.6,-24]);assert.equal(manifest.objects.find(o=>o.id==='cloud_still').actions.study.effect,'study');assert.equal(land.sectors.find(o=>o.id==='1:-1').name,'облачная перегонная');assert.equal(land.sectors.filter(o=>o.status==='settled').length,13);assert.equal(modules.modules.length,8);assert.equal(modules.modules.reduce((n,m)=>n+m.tools.length,0),32);
console.log('PASS still stable registry/study only/current settled registry/eightmodules32tools preserved');
