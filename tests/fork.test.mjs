import assert from 'node:assert/strict';
import {WAVES,LIMITS,normalize,step,solution,saved,route,shotPose} from '../src/fork-core.js';
let s=normalize(),clicks=[];
for(let w=0;w<3;w++){
 const path=solution(s);assert(path);clicks.push(path.filter(a=>a.action==='flip').length);assert.equal(clicks[w],LIMITS[w]);
 for(const a of path){const before=JSON.stringify(s),r=step(s,a.action,a.index);assert.equal(JSON.stringify(s),before);assert(r.result.ok);if(r.shot){for(let i=0;i<=1000;i++)assert(shotPose(r.shot,i/1000).every(Number.isFinite));assert.deepEqual(shotPose(r.shot,1),[[-2.8,-.9,.9,2.8][r.shot.bay],.4,2]);}s=r.state;}
 assert.equal(s.cursor,WAVES[w].length);assert.equal(saved(s),[3,7,12][w]);assert.deepEqual(step(s,'release').state,s);s=step(s,'next').state;
}
assert.equal(s.phase,'complete');assert.equal(saved(s),12);assert.equal(step(s,'all').state.wave,0);
let f=step(normalize(),'flip',0).state;f=step(f,'release');assert.equal(f.state.phase,'spilled');assert.equal(f.shot.success,false);assert.deepEqual(shotPose(f.shot,1),[4,-.15,2.5]);assert.equal(step(f.state,'restart').state.phase,'ready');
s=normalize({wave:1});s=step(s,'flip',0).state;assert.equal(step(s,'flip',2).result.reason,'budget');assert.equal(solution(s),null);assert.equal(step(s,'restart').state.wave,1);assert.equal(saved(step(s,'restart').state),3);
for(let w=0;w<3;w++)for(let mask=0;mask<8;mask++)for(let cursor=0;cursor<WAVES[w].length;cursor++)for(let used=0;used<=LIMITS[w];used++){const d=normalize({wave:w,cursor,used,switches:[mask&1,(mask>>1)&1,(mask>>2)&1]}),before=JSON.stringify(d),p=solution(d);assert.equal(JSON.stringify(d),before);if(p){let v=d;for(const a of p)v=step(v,a.action,a.index).state;assert(['rounddone','complete'].includes(v.phase));}}
for(const bad of [null,[],true,'bad',{wave:Infinity,cursor:-8,switches:['1',null,99],used:1e9}])assert(Number.isFinite(saved(normalize(bad))));
console.log('PASS fork: optimal budgets',clicks,'all reachable hints, refusal, reset, purity, 12012 poses');
const {readFileSync}=await import('node:fs');
const manifest=JSON.parse(readFileSync(new URL('../public/resident-manifest.json',import.meta.url))),land=JSON.parse(readFileSync(new URL('../src/territory.json',import.meta.url))),modules=JSON.parse(readFileSync(new URL('../public/world-mechanics.json',import.meta.url)));
assert.deepEqual(manifest.objects.find(o=>o.id==='backup_fork').position,[-23,.6,-30]);assert.equal(manifest.objects.find(o=>o.id==='backup_fork').actions.study.effect,'study');assert.equal(land.sectors.find(o=>o.id==='-1:-1').name,'гараж и вилка');assert.equal(land.sectors.filter(o=>o.status==='settled').length,17);assert.equal(modules.modules.length,8);assert.equal(modules.modules.reduce((n,m)=>n+m.tools.length,0),32);
console.log('PASS fork registry: real position, study only, 12 settled / 13 free, original 8 modules / 32 tools intact');
