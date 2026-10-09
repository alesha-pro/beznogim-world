const vm=require('vm'),fs=require('fs'),assert=require('assert');const c=vm.createContext({});vm.runInContext(fs.readFileSync(require('path').join(__dirname,'../public/mechanics/cellar.js'),'utf8'),c);let state=null;
function call(mode,now,tool,args={}){const r=c.world({mode,now,tool,args,state,version:1,previous_version:1,world:{}});state=JSON.parse(JSON.stringify(r.state));return JSON.parse(JSON.stringify(r));}
call('migrate',1000);assert.equal(state.batch,null);
call('action',1000,'set_batch',{culture:'moon'});call('tick',1180);assert.equal(state.batch.age,180);
call('action',1180,'tend',{air:'damp',turn:true});call('tick',1360);assert.equal(state.batch.age,360);assert.deepEqual(state.batch.exposure,[180,180]);
call('tick',99999);assert.equal(state.batch.age,360);assert.equal(state.batch.wet,360);const migration=JSON.stringify(state);call('migrate',99999);assert.equal(JSON.stringify(state),migration);
assert.equal(call('action',99999,'cut').result.cheese.kind,'moon_stair');
let n=100000;for(let i=0;i<8;i++){call('action',n,'set_batch',{culture:'stone'});call('action',n,'tend',{air:'dry',turn:false});call('action',n+180,'tend',{air:'dry',turn:true});call('tick',n+360);assert.equal(call('action',n+360,'cut').result.cheese.kind,'stone');n+=400;}
assert.equal(state.shelf.length,6);assert.equal(state.cutCount,9);assert.equal(state.nextId,10);
call('action',n,'set_batch',{culture:'moon'});call('tick',n+720);assert.equal(call('action',n+720,'cut').result.cheese.kind,'lopsided');
n+=800;call('action',n,'set_batch',{culture:'moon'});call('action',n,'tend',{air:'dry',turn:false});call('action',n+180,'tend',{air:'dry',turn:true});call('action',n+360,'tend',{air:'damp',turn:true});assert.equal(state.batch.turns,1);assert.equal(call('action',n+360,'cut').result.cheese.kind,'holes');
// Exactly partitioned and delayed ticks give the same result. Older timestamps never run time backwards.
n+=500;call('action',n,'set_batch',{culture:'stone'});let r=call('tick',n+90);let age=state.batch.age;call('tick',n+30);assert.equal(state.batch.age,age);call('tick',n+360);assert.equal(state.batch.age,360);
console.log('PASS: time integration, every outcome, turn, air, early cut, late tick, backwards clock, bounded shelf, stable ids, migrate preservation');

const path=require('path'),base=path.join(__dirname,'..');
const serverSource=fs.readFileSync(path.join(base,'public/mechanics/cellar.js'),'utf8');
assert.equal(fs.readFileSync(path.join(base,'src/cellar-core.js'),'utf8'),'// Generated from public/mechanics/cellar.js by scripts/sync-mechanics.mjs.\n'+serverSource+'\nexport default world;\n');
const manifest=JSON.parse(fs.readFileSync(path.join(base,'public/resident-manifest.json'),'utf8'));
assert.deepEqual(manifest.objects.find(o=>o.id==='cheese_cellar').position,[24,.6,0]);
const land=JSON.parse(fs.readFileSync(path.join(base,'src/territory.json'),'utf8'));
assert.equal(land.sectors.find(s=>s.id==='1:0').status,'settled');
console.log('PASS: shared source equality, stable resident object, settled map registry');
