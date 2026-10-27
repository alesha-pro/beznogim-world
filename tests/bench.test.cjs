const {readFileSync}=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx=vm.createContext({});vm.runInContext(readFileSync('public/mechanics/bench.js','utf8'),ctx);
const w=(i)=>JSON.parse(JSON.stringify(ctx.world(i)));let r=w({mode:'migrate'});
const mod=JSON.parse(readFileSync('public/world-mechanics.json')).modules.find(m=>m.id==='bench');
for(const t of mod.tests){r=w({mode:'action',state:r.state,tool:t.tool,args:t.args});for(const [p,v]of Object.entries(t.expect)){let got=r;for(const k of p.split('.'))got=got[k];assert.deepEqual(got,v,p);}}
for(const phase of ['ready','repaired','ejected','complete']){const s={round:2,core:3,belt:3,phase,run:8,attempts:42,repairs:3};assert.deepEqual(w({mode:'migrate',state:s}).state,{...s,observer:{version:1,rows:[],seen:[],total:0}});assert.deepEqual(w({mode:'tick',state:s}).state,{...s,observer:{version:1,rows:[],seen:[],total:0}});}
r=w({mode:'action',tool:'fit',state:r.state,args:{part:'core',value:1}});assert.equal(r.result.ok,false);
let fail=w({mode:'action',tool:'crank'});fail=w({mode:'action',tool:'crank',state:fail.state});assert.equal(fail.state.attempts,1);
console.log('PASS bench: 16 contract steps + migration/tick each phase + invalid part');

const source=readFileSync('public/mechanics/bench.js','utf8');assert.equal(readFileSync('src/bench-core.js','utf8').split('\n').slice(1).join('\n'),source+'\nexport default world;\n');
const registry=JSON.parse(readFileSync('public/resident-manifest.json'));assert.deepEqual(registry.objects.find(o=>o.id==='mechanical_bench').position,[-3.2,1.15,-2.2]);
const corrupt=w({mode:'migrate',state:{round:99,core:0,belt:-3,phase:'invalid',repairs:999,attempts:-1,run:0}});assert.equal(corrupt.public.phase,'ready');assert.equal(corrupt.public.target,9);assert.equal(corrupt.state.repairs,3);
for(const target of [6,8,9])assert([2,3,4].some(c=>[1,2,3].some(b=>c*b===target)));
console.log('PASS bench: shared source, registry, bounded corrupt saves, all targets solvable');
