import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {validTracks} from '../src/radio-player-core.js';
const {tracks}=JSON.parse(readFileSync(new URL('../public/music/playlist.json',import.meta.url)));
assert.equal(tracks.length,4);assert.equal(validTracks(tracks).length,4);
assert.deepEqual(tracks.map(t=>t.title),['нечестивым до утра','голова на заднем сиденье','на ход ноги','гигас · вальс под листвой']);
assert.equal(new Set(tracks.map(t=>t.id)).size,4);
for(const t of tracks){const b=readFileSync(new URL('../public/'+t.file,import.meta.url));assert.equal(b.length,t.bytes);assert.equal(createHash('sha256').update(b).digest('hex'),t.sha256);assert(t.duration>150&&t.duration<220);}
console.log('PASS radio assets:4 exact MP3 bytes/SHA256, original titles, stable local paths');
