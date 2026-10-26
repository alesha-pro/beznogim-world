import assert from 'node:assert/strict';
import fs from 'node:fs';
import {STARTS,LIMIT,normalize,turn,step,solution,pressure} from '../src/seams-core.js';
for(const bad of [null,{},[],NaN,'bad',{turns:[-1,0,0]},{turns:[NaN,0,0]},{turns:[0,0]},{round:Infinity,used:Infinity}]){const n=normalize(bad);assert.equal(n.turns.length,3);assert(n.turns.every(v=>v>=0&&v<4));assert(n.used>=0&&n.used<=9);}
for(const i of [-1,3,null,NaN,.5])assert.equal(turn([0,0,0],i),null);
let max=0;for(let a=0;a<4;a++)for(let b=0;b<4;b++)for(let c=0;c<4;c++){
 let s=normalize({turns:[a,b,c]}),path=solution(s);assert(path!==null);max=Math.max(max,path.length);
 for(const i of path){const copy=structuredClone(s),r=step(s,'turn',i);assert.deepEqual(s,copy);assert(r.ok);s=r.state;}assert.deepEqual(s.turns,[0,0,0]);assert.equal(s.phase,'aligned');
}
assert.equal(max,9);let s=normalize();for(let round=0;round<3;round++){
 assert.equal(s.round,round);assert.deepEqual(s.turns,STARTS[round]);const p=solution(s);assert.equal(p.length,[5,6,7][round]);
 for(const i of p)s=step(s,'turn',i).state;assert.equal(s.phase,'aligned');assert(!step(s,'turn',0).ok);s=step(s,'test').state;assert(s.tested);assert.equal(s.phase,round===2?'complete':'won');assert(!step(s,'test').ok);assert.deepEqual(normalize(JSON.parse(JSON.stringify(s))),s);if(round<2)s=step(s,'next').state;
}
assert.equal(step(s,'reset').state.round,2);assert.equal(step(s,'all').state.run,2);assert.equal(step(s,'all').state.round,0);
let fail=normalize();assert(!step(fail,'test').ok);for(let i=0;i<LIMIT;i++)fail=step(fail,'turn',0).state;assert.equal(fail.phase,'spent');assert(!step(fail,'turn',1).ok);assert.equal(step(fail,'reset').state.phase,'ready');assert.equal(solution(normalize({turns:[1,1,3],used:8})),null);
for(let i=0;i<=10000;i++){const p=pressure(i/10000);assert(p>=0&&p<=1);}assert.equal(pressure(0),0);assert(pressure(1)<1e-20);assert.equal(pressure(.5),1);
const m=JSON.parse(fs.readFileSync('public/resident-manifest.json')),land=JSON.parse(fs.readFileSync('src/territory.json')),mods=JSON.parse(fs.readFileSync('public/world-mechanics.json'));
assert.deepEqual(m.objects.find(o=>o.id==='head_seams').position,[-24,.6,-48]);assert.equal(m.objects.find(o=>o.id==='head_seams').actions.study.effect,'study');assert.equal(land.sectors.find(o=>o.id==='-1:-2').name,'шовная');assert.equal(land.sectors.filter(o=>o.status==='settled').length,17);assert.equal(mods.modules.length,8);assert.equal(mods.modules.reduce((s,m)=>s+m.tools.length,0),32);
console.log('PASS seams core64states/allreachable/max9/rounds5,6,7/10001pressureposes/registry12settled13free/8modules32tools');
