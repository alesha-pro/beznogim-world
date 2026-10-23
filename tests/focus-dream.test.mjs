import assert from 'node:assert/strict';
import {freshFocus,focusReady,tuneFocus,actFocus,advanceFocus,focusPose,focusTrace} from '../src/focus-dream-core.js';
const base=freshFocus();for(const n of [-1,13,.1,NaN,Infinity,'6',null])assert.equal(tuneFocus(base,n),base);
for(let n=0;n<13;n++){
 const before=structuredClone(base),s=tuneFocus(base,n);assert.equal(s.dial,n);assert.equal(focusReady(s),n===6);assert.deepEqual(base,before);
 if(n!==6)assert.equal(actFocus(s),s);else{let a=actFocus(s);assert.equal(a.phase,'collecting');assert.equal(actFocus(a),a);assert.equal(tuneFocus(a,3),a);for(const dt of [0,-1,NaN,Infinity])assert.equal(advanceFocus(a,dt),a);assert.equal(advanceFocus(a,100).progress,.025);for(let i=0;i<41;i++)a=advanceFocus(a,.1);assert.equal(a.phase,'inside');assert.equal(a.progress,1);assert.equal(tuneFocus(a,0),a);assert.equal(advanceFocus(a,.1),a);assert.deepEqual(actFocus(a),base);}
 for(let i=0;i<=1000;i++){const p=focusPose(n,i/1000);assert(Object.values(p).every(Number.isFinite));assert(p.scale>=.29&&p.scale<=1);assert(p.open>=0&&p.open<=1.25);assert(p.tilt<=0&&p.tilt>=-Math.PI/2);}
}
assert.equal(focusPose(6,0).spread,0);assert.equal(focusPose(6,0).orbit,0);assert(focusPose(0,0).spread<0);assert(focusPose(12,0).spread>0);
for(const v of [null,{},'broken',{trace:true},{trace:1,version:1},{trace:false,version:1}])assert.equal(focusTrace(v),false);assert.equal(focusTrace({trace:true,version:1}),true);
assert.deepEqual(base,freshFocus());console.log('PASS dream13: 13dial choices/13013finite poses/immutable/guards/capture/repeat/trace validation');
