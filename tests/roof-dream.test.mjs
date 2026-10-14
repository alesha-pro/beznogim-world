import assert from 'node:assert/strict';
import {freshRoofDream,turnRoof,sendRoofLetter,advanceRoofLetter} from '../src/roof-dream-core.js';
const done=s=>{for(let i=0;i<100;i++)s=advanceRoofLetter(s,.15);return s;};
let s=freshRoofDream();assert.deepEqual(s.turns,[1,1,1]);
s=sendRoofLetter(s);assert.equal(s.stop,1);assert.equal(turnRoof(s,0),s);assert.equal(sendRoofLetter(s),s);s=done(s);assert.equal(s.phase,'caught');assert.equal(s.progress,1);assert.equal(s.trace,false);
for(let i=0;i<3;i++)s=turnRoof(s,0);s=done(sendRoofLetter(s));assert.equal(s.stop,2);assert.equal(s.phase,'caught');
s=turnRoof(s,1);s=done(sendRoofLetter(s));assert.equal(s.stop,3);assert.equal(s.phase,'caught');
for(let i=0;i<2;i++)s=turnRoof(s,2);s=sendRoofLetter(s);assert.equal(s.stop,4);const before=s.progress;s=advanceRoofLetter(s,-1);assert.equal(s.progress,before);s=done(s);assert.equal(s.phase,'delivered');assert.equal(s.trace,true);assert.equal(s.attempts,4);assert.equal(sendRoofLetter(s),s);assert.equal(turnRoof(s,1),s);assert.equal(turnRoof(freshRoofDream(),9).turns.length,3);
console.log('PASS roof dream rules: three reversible catches, locked flight, route delivery, bounded dt, no duplicate send');
