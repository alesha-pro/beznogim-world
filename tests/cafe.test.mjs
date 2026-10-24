import assert from 'node:assert/strict';import run from '../src/vitals-core.js';
const base={position:[48,.6,24],objects:{garden:{harvest:3},tea:{cups:2}},mechanics:{}};
let s;let now=1000;const go=(mode='tick',cafe,world=base)=>{const r=run({mode,tool:'rest_quietly',args:{cafe},state:s,now,world});s=r.state;return r;};
go('migrate');s.vitals.hunger=20;s.vitals.thirst=20;
assert.equal(go('action','eat').result.reason,'no_tray');assert.equal(go('action','order',{position:[0,0,0]}).result.reason,'visit_cafe');assert.equal(go('action','order').result.ok,true);assert.equal(s.cafe.sequence,1);
assert.equal(go('action','order').result.reason,'tray_exists');assert.equal(go('action','eat').result.reason,'cooking');assert.equal(go('action','tea').result.reason,'cooking');now+=89;assert.equal(go().public.cafe.tray.phase,'cooking');now++;assert.equal(go().public.cafe.tray.phase,'ready');
let h=s.vitals.hunger,t=s.vitals.thirst;assert.equal(go('action','eat').result.ok,true);assert.equal(s.vitals.hunger,h+26);assert.equal(go('action','eat').result.reason,'already_eaten');assert.equal(go('action','tea').result.ok,true);assert.equal(s.vitals.thirst,t+24);assert.equal(go('action','tea').result.reason,'already_drunk');assert.equal(go().public.cafe.tray.phase,'finished');assert.equal(go('action','order').result.reason,'kitchen_break');
const saved=structuredClone(s);assert.deepEqual(go('migrate').state,saved);now=8200;assert.equal(go('action','order').result.ok,true);assert.equal(s.cafe.sequence,2);now=22600;assert.equal(go().public.cafe.tray,null);assert.equal(go('action','eat').result.reason,'no_tray');
// Previous state migration preserves resources, timestamps and unknown durable fields.
const legacy={vitals:{hunger:41,thirst:52,energy:63,mood:74},food:{harvestConsumed:2,teaConsumed:1,lastMealSequence:6,cheeseEaten:4,cheeseConsumed:[1,2]},cooldowns:{water:999,rest:99999},lastSleepEnd:123,updated:30000,custom:{keep:1}};
s=legacy;now=30000;go('migrate');for(const k of Object.keys(legacy))assert.deepEqual(s[k],legacy[k]);assert.equal(s.cafe.sequence,0);
// Missing location cannot summon a cafe. Backward clock doesn't finish cooking.
assert.equal(go('action','order',{}).result.reason,'visit_cafe');go('action','order');now-=300;assert.equal(go().public.cafe.tray.phase,'cooking');
now=30100;go('action','tea');go('action','eat');const energy=s.vitals.energy;assert.equal(go('action','tea').result.reason,'already_drunk');assert.equal(s.vitals.energy,energy);
console.log('PASS cafe: finite tray,90s cooking,2h cooldown,4h expiry,one-time needs,location,bounded backward time,migration,legacy preservation');
// Additive migration at every tray phase, no reset or duplicate healing.
for(const phase of ['empty','cooking','ready','eaten','finished']){
 let r=run({mode:'migrate',now:50000,world:base});
 if(phase!=='empty')r=run({mode:'action',tool:'rest_quietly',args:{cafe:'order'},state:r.state,now:50000,world:base});
 const time=phase==='cooking'||phase==='empty'?50000:50090;
 if(['eaten','finished'].includes(phase))r=run({mode:'action',tool:'rest_quietly',args:{cafe:'eat'},state:r.state,now:time,world:base});
 if(phase==='finished')r=run({mode:'action',tool:'rest_quietly',args:{cafe:'tea'},state:r.state,now:time,world:base});
 r=run({mode:'tick',state:r.state,now:time,world:base});
 const before=structuredClone(r.state);for(let j=0;j<3;j++){r=run({mode:'migrate',state:r.state,now:time,world:base});assert.deepEqual(r.state,before,phase);}
}
// Two simultaneous repeated requests on the persisted state don't mint a second tray.
let r=run({mode:'migrate',now:60000,world:base});for(let i=0;i<100;i++)r=run({mode:'action',tool:'rest_quietly',args:{cafe:'order'},state:r.state,now:60000,world:base});assert.equal(r.state.cafe.sequence,1);for(let i=0;i<100;i++)r=run({mode:'action',tool:'rest_quietly',args:{cafe:i%2?'eat':'tea'},state:r.state,now:60090,world:base});assert.equal(r.state.cafe.served,1);assert.equal(r.state.cafe.tray.eaten,true);assert.equal(r.state.cafe.tray.drunk,true);
console.log('PASS cafe: all5phase migrations idempotent x3,100repeatedorders,100repeatedbites/sips consume one tray');
