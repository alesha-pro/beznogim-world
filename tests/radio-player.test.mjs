import assert from 'node:assert/strict';
import {createRadioPlayer,validTracks} from '../src/radio-player-core.js';
class Audio extends EventTarget {
 paused=true;ended=false;currentTime=0;duration=210;volume=1;plays=0;loads=0;error=null;
 load(){this.loads++;this.error=null;} pause(){this.paused=true;this.dispatchEvent(new Event('pause'));}
 async play(){this.plays++;if(this.reject)throw Object.assign(new Error('fixture'),{name:this.reject});this.paused=false;this.dispatchEvent(new Event('playing'));}
}
const tracks=[{id:'a',title:'fixture A',file:'music/a.wav'},{id:'b',title:'fixture B',file:'music/b.wav'}];
assert.equal(validTracks([...tracks,{id:'x',title:'external',file:'https://example.com/x.mp3'},{id:'y',title:'traversal',file:'music/../private.mp3'}]).length,2);
let a=new Audio(),p=createRadioPlayer({audio:a,tracks});assert.equal(a.plays,0);assert.equal(a.loads,0);assert.equal(a.autoplay,false);assert.equal(a.preload,'none');
await p.play();assert.equal(a.plays,1);assert(p.inspect().playing);p.pause();assert(a.paused);
p.next();assert.equal(p.inspect().index,1);assert.equal(a.plays,1);p.previous();assert.equal(p.inspect().index,0);p.previous();assert.equal(p.inspect().index,1);
await p.play();p.next();await Promise.resolve();assert.equal(p.inspect().index,0);assert(p.inspect().playing);
a.ended=true;a.dispatchEvent(new Event('ended'));await Promise.resolve();assert.equal(p.inspect().index,1);assert(p.inspect().wanted);
p.pause();a.dispatchEvent(new Event('ended'));assert.equal(p.inspect().index,1);
p.setVolume(.23);assert.equal(a.volume,.23);p.setVolume(8);assert.equal(a.volume,1);p.setVolume(-1);assert.equal(a.volume,0);p.setVolume(NaN);assert.equal(a.volume,0);
a.error={code:4};a.dispatchEvent(new Event('error'));assert(p.inspect().error);assert(!p.inspect().wanted);const n=a.loads;await p.play();assert.equal(a.loads,n+1);assert.equal(p.inspect().error,'');
a.reject='NotAllowedError';p.pause();await p.play();assert(p.inspect().error.includes('Браузер'));assert(!p.inspect().wanted);a.reject='NotSupportedError';await p.play();assert(p.inspect().error.includes('Не удалось'));delete a.reject;
let resolve;a.play=()=>new Promise(r=>resolve=r);const pending=p.play();p.pause();resolve();await pending;assert(a.paused);assert(!p.inspect().wanted);
a=new Audio();p=createRadioPlayer({audio:a});await p.play();p.next();p.previous();assert.equal(a.plays,0);assert.equal(a.loads,0);assert.equal(p.inspect().track,null);
assert.equal(createRadioPlayer({audio:new Audio(),volume:Infinity}).inspect().volume,.5);
a=new Audio();p=createRadioPlayer({audio:a,tracks:[tracks[0]]});await p.play();const loads=a.loads;p.next();await Promise.resolve();assert.equal(a.loads,loads+1);assert(p.inspect().wanted);a.pause();assert.equal(p.inspect().wanted,false);
console.log('PASS radio core: no autoplay, playlist/path validation, playback, pause, wrap, ended, volume, errors/retry, stale promise, empty catalog');
