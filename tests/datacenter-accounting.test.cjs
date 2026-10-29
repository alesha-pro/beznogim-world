const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const catalog=JSON.parse(fs.readFileSync('public/datacenter-catalog.json'));
for(const u of [catalog.mike,catalog.alexey]){
 const sum=status=>u.parts.filter(p=>p.status===status).reduce((a,p)=>a+(p.purchaseRub??0),0);
 assert.equal(sum('куплено'),u.priceSummary.receiptLabeledRub);assert.equal(sum('план'),u.priceSummary.plannedRub);
 assert.equal(u.parts.filter(p=>p.purchaseRub===null).length,u.priceSummary.unknownAmountRows);
 assert.equal(u.priceSummary.currentVerifiedRows,0);assert(u.parts.every(p=>p.currentRub===null));
 if(u.totalRub)assert.equal(u.totalRub,sum('куплено')+sum('план'));
}
assert.equal(catalog.mike.priceSummary.receiptLabeledRub,462388);assert.equal(catalog.mike.priceSummary.plannedRub,106895);
assert.equal(catalog.alexey.priceSummary.unknownAmountRows,4);
const mods=JSON.parse(fs.readFileSync('public/world-mechanics.json')).modules;
assert.equal(mods.find(m=>m.id==='garage').version,5);
const code=fs.readFileSync('public/mechanics/garage.js','utf8');
const run=vm.runInNewContext(code+';world'),copy=o=>JSON.parse(JSON.stringify(o));
const ctx={mode:'migrate',state:null,now:1800000000,world:{position:[48,.6,-24]}};
const old=run(ctx);
let checked=0;
for(const mode of ['migrate','tick','action']) for(const dt of [0,30,120,3600,864000]) for(const args of [{datacenter:'inspect'},{datacenter:'mike'},{datacenter:'alexey'},{energy:'inspect'},{}]){
 const a=run({...ctx,mode,state:copy(old.state),now:ctx.now+dt,elapsed:dt,tool:'pump',args});
 if(mode==='action'&&args.datacenter){assert.deepEqual(copy(a.result.datacenter),catalog);const b=run({...ctx,mode:'tick',state:copy(old.state),now:ctx.now+dt,elapsed:dt});assert.deepEqual(copy(a.state),copy(b.state));assert.deepEqual(copy(a.public),copy(b.public));}
 checked++;
}
console.log('PASS datacenter-accounting',checked,'mode/time cases; exact sums and unknowns, readonly projection; garage v5 schema');
