import assert from 'node:assert/strict';
import {readPublicJson} from '../src/public-read.js';
const realFetch=globalThis.fetch,realController=globalThis.AbortController;
try{
  globalThis.fetch=async(url,options)=>{assert.equal(options.cache,'no-store');return {ok:true,json:async()=>({entries:[]})};};
  assert.deepEqual(await readPublicJson('/api/history',100),{entries:[]});
  globalThis.fetch=async()=>({ok:false});await assert.rejects(readPublicJson('/',100),e=>e.code==='http');
  globalThis.fetch=async()=>({ok:true,json:async()=>{throw Error('json')}});await assert.rejects(readPublicJson('/',100),/json/);
  let aborted=false;
  globalThis.fetch=async(_,options)=>{options.signal.addEventListener('abort',()=>aborted=true);return {ok:true,json:()=>new Promise(()=>{})};};
  await assert.rejects(readPublicJson('/',20),e=>e.code==='timeout');assert(aborted);
  globalThis.AbortController=undefined;globalThis.fetch=()=>new Promise(()=>{});
  await assert.rejects(readPublicJson('/',20),e=>e.code==='timeout');
  console.log('PASS public read: JSON, HTTP, malformed body, stalled body abort, no AbortController fallback');
}finally{globalThis.fetch=realFetch;globalThis.AbortController=realController;}
