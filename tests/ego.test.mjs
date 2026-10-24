import assert from 'node:assert/strict';
import fs from 'node:fs';
import {LEVELS,shape,cells,fits,normalize,step,solution} from '../src/ego-core.js';
for(const bad of [null,{},[],NaN,'bad',{round:Infinity,placed:[null,{},false]},{placed:[{piece:0,rot:-1,at:0}]}])assert.equal(normalize(bad).placed.length,0);
let checked=0,dead=0;
for(let round=0;round<3;round++){
 const s=normalize({round});assert(solution(s));const seen=new Set();function check(s){const key=JSON.stringify(s.placed.slice().sort((a,b)=>a.piece-b.piece));if(seen.has(key))return;seen.add(key);checked++;const orig=structuredClone(s),sol=solution(s);if(sol){let v=s;for(const p of sol){const r=step(v,'place',p);assert(r.ok);v=r.state;}assert.equal(v.phase,'packed');assert.equal(new Set(v.placed.flatMap(p=>cells(round,p))).size,12);}else dead++;
 assert.deepEqual(s,orig);assert.deepEqual(normalize(JSON.parse(JSON.stringify(s))),s);
 for(let piece=0;piece<3;piece++)for(let rot=0;rot<4;rot++)for(let at=0;at<16;at++){const p={piece,rot,at},r=step(s,'place',p);if(r.ok){assert.equal(r.state.placed.length,s.placed.length+1);check(r.state);}else assert.deepEqual(r.state,s);}}
 check(s);let v=s;for(const p of solution(s))v=step(v,'place',p).state;assert(!step(s,'send').ok);v=step(v,'send').state;assert(v.sent);assert(!step(v,'undo').ok);assert(!step(v,'send').ok);assert.equal(v.phase,round===2?'complete':'won');assert.equal(step(v,'all').state.run,2);assert.equal(step(v,'reset').state.round,round);if(round<2)assert.equal(step(v,'next').state.round,round+1);
}
assert(dead>0);assert.equal(shape('no').length,0);assert.equal(cells(0,{piece:0,rot:0,at:15}),null);
const land=JSON.parse(fs.readFileSync('src/territory.json')),manifest=JSON.parse(fs.readFileSync('public/resident-manifest.json')),mods=JSON.parse(fs.readFileSync('public/world-mechanics.json'));
assert.equal(land.sectors.filter(s=>s.status==='settled').length,15);assert.equal(land.sectors.find(s=>s.id==='0:-2').name,'малый передатчик');assert.deepEqual(manifest.objects.find(s=>s.id==='ego_transmitter').position,[0,.6,-48]);assert.equal(mods.modules.length,8);assert.equal(mods.modules.reduce((n,m)=>n+m.tools.length,0),32);console.log('PASS ego exhaustive states',checked,'deadends',dead,'all3solutions/undo/normalization/registry/8modules32tools');
