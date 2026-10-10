// Explicitly synthetic public API fixtures. No production API/network or private data.
const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),assert=require('assert');
const capture=process.env.CAPTURE_DIR||'/tmp/beznogim-world-tests';fs.mkdirSync(capture,{recursive:true});
(async()=>{
const mobile=process.argv[2]==='mobile',name=mobile?'mobile':'desktop';
const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox','--single-process','--no-zygote','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage({viewport:mobile?{width:390,height:844}:{width:1200,height:900},isMobile:mobile,hasTouch:mobile});p.setDefaultTimeout(22000);
let mode='healthy',host='mirror',stateRequests=0,historyRequests=0;const errors=[],requests=[];p.on('pageerror',e=>errors.push(String(e)));p.on('request',r=>requests.push(r));
const t=Date.now()/1000,events=Array.from({length:600},(_,i)=>({id:i+1,time:t-600+i,type:i%3===0?'muse':i===599?'wait':'interact',text:i===599?'fixture: начал долгий сон':'fixture: публичная запись '+(i+1)}));
const state={version:1,revision:100,server_time:t,heartbeat:t,resident_status:'sleeping',position:[-.15,1.9,.85],objects:{},release:{commit:'explicit-reconnect-fixture'},action:{kind:'sleep',started:t,ends:t+8*3600,label:'спит до утра'},history:{entries:events.slice(-30),has_older:true}};
await p.addInitScript(()=>{
  AbortSignal.timeout=undefined;
  if(sessionStorage.getItem('fixture-phase')==='stall'){
    window.__stall=true;window.__stallHistory=true;localStorage.removeItem('beznogim-public-notes-v1');
  }
  window.EventSource=class extends EventTarget {constructor(){super();window.__transport=this;}close(){}};
  window.__requests=[];window.__cacheWrites=0;
  const realSet=Storage.prototype.setItem;
  Storage.prototype.setItem=function(key,value){if(window.__denyStorage)throw Error('fixture: storage denied');if(key==='beznogim-public-notes-v1')window.__cacheWrites++;return realSet.call(this,key,value);};
  const realFetch=window.fetch;
  window.fetch=(url,options)=>{
    window.__requests.push(String(url));
    if(window.__stall&&String(url).endsWith('/api/state')||window.__stallHistory&&String(url).endsWith('/api/history'))return new Promise((_,reject)=>{options.signal.addEventListener('abort',()=>reject(Error('fixture abort')));});
    return realFetch(url,options);
  };
});
async function route(r){
  const u=new URL(r.request().url());
  if(u.pathname.startsWith('/api/')){
    assert.equal(u.hostname,'head.alesha.pro');assert.equal(r.request().method(),'GET');
    if(u.pathname==='/api/state'){stateRequests++;if(mode==='blocked')return r.abort();return r.fulfill({json:mode==='empty'?{...state,history:{entries:[]}}:state});}
    if(u.pathname==='/api/history'){historyRequests++;if(mode==='blocked'||mode==='history-blocked')return r.abort();if(mode==='invalid')return r.fulfill({json:{wrong:'shape'}});if(mode==='invalid-entries')return r.fulfill({json:{entries:[null,{id:'bad',time:null,type:'muse',text:'invalid fixture'}]}});if(mode==='empty')return r.fulfill({json:{entries:[]}});return r.fulfill({json:{entries:events,has_older:false}});}
    return r.abort();
  }
  let relative=u.pathname.replace(/^\/beznogim-world\//,'/');const file=path.join(path.resolve(__dirname,'../dist'),relative==='/'?'index.html':relative);
  try{return r.fulfill({body:fs.readFileSync(file),contentType:{'.js':'text/javascript','.css':'text/css','.html':'text/html'}[path.extname(file)]||'application/octet-stream'});}catch{return r.fulfill({status:404,body:''});}
}
await p.route('https://head.alesha.pro/**',route);await p.route('https://alesha-pro.github.io/**',route);
const url=h=>h==='mirror'?'https://alesha-pro.github.io/beznogim-world/':'https://head.alesha.pro/';
async function click(s){const l=p.locator(s);await l.scrollIntoViewIfNeeded();const box=await l.boundingBox();assert(box,s);const x=box.x+box.width/2,y=box.y+box.height/2;assert(await p.evaluate(({s,x,y})=>document.querySelector(s).contains(document.elementFromPoint(x,y)),{s,x,y}),s+' overlap');mobile?await p.touchscreen.tap(x,y):await p.mouse.click(x,y);}
async function open(){if(await p.locator('.history-toggle').isVisible())await click('.history-toggle');}
const emit=patch=>p.evaluate(patch=>__transport.dispatchEvent(new MessageEvent('state',{data:JSON.stringify({...__beznogimState,...patch})})),patch);
const checks=[];
// Healthy mirror without native AbortSignal.timeout. Preserve all 600 public entries while asleep.
await p.goto(url('mirror'));await p.waitForFunction(()=>document.querySelectorAll('.history-entry').length===600);await open();assert.equal(await p.locator('.history-live').textContent(),'голова спит · дневник открыт');await click('[data-filter="thoughts"]');assert.equal(await p.locator('.history-entry').count(),200);await click('[data-filter="actions"]');assert.equal(await p.locator('.history-entry').count(),400);await click('[data-filter="all"]');await p.screenshot({path:`${capture}/notes-sleep-${name}.png`});checks.push('mirror 600 events without AbortSignal.timeout, sleeping label and filters');
await click('.history-close');assert(await p.locator('.history-toggle').isVisible());await p.reload();assert(await p.locator('.history-toggle').isVisible());await open();checks.push('collapse persistence');
// Cached reload with a blocked live host: public lines survive, stale is explicit.
mode='blocked';await p.reload();await p.waitForFunction(()=>document.querySelector('.history-live').textContent.includes('связи нет'));assert.equal(await p.locator('.history-entry').count(),600);await open();assert(!/^записей: 0/.test(await p.locator('.history-count').textContent()));await p.screenshot({path:`${capture}/notes-cached-${name}.png`});checks.push('blocked reload keeps validated cached public entries');
mode='healthy';await click('.history-retry');await p.waitForFunction(()=>document.querySelector('.history-live').textContent==='голова спит · дневник открыт');checks.push('manual retry recovers state and history');
// Deduplicated SSE continuation, safe literal text, ordered newest-first and capped cache.
await emit({revision:101,server_time:t+1,history:{entries:[{id:601,time:t+1,type:'muse',text:'<img src=x onerror=alert(1)> fixture'}]}});await p.waitForFunction(()=>document.querySelector('.history-entry').dataset.eventId==='601');assert.equal(await p.locator('.history-entry').count(),600);assert.equal(await p.locator('.history-entry img').count(),0);await emit({revision:101,server_time:t+1,history:{entries:[{id:601,time:t+1,type:'muse',text:'duplicate'}]}});assert.equal(await p.locator('.history-entry').count(),600);const cache=await p.evaluate(()=>JSON.parse(localStorage.getItem('beznogim-public-notes-v1')));assert.equal(cache.entries.length,600);assert.deepEqual(Object.keys(cache.entries[0]).sort(),['id','text','time','type']);checks.push('SSE dedup/order/600 bound, text-only, cache public fields only');
const writes=await p.evaluate(()=>__cacheWrites);for(let i=0;i<8;i++)await emit({revision:101,server_time:t+1,history:{entries:[{id:601,time:t+1,type:'muse',text:'duplicate'}]}});assert.equal(await p.evaluate(()=>__cacheWrites),writes);checks.push('unchanged heartbeats do not rewrite the 600-entry cache');
// New visitor with no cache and blocked domain: no invented empty diary; controls still usable.
await p.evaluate(()=>localStorage.removeItem('beznogim-public-notes-v1'));mode='blocked';await p.reload();await open();await p.waitForFunction(()=>document.querySelector('.history-empty').textContent.includes('это не пустой дневник'));assert.equal(await p.locator('.history-count').textContent(),'записи ещё не загружены');assert.equal(await p.locator('.history-entry').count(),0);await p.screenshot({path:`${capture}/notes-unreachable-${name}.png`});await click('.history-close');await click('#zoom-in');await open();checks.push('first blocked visit honestly unloaded, local world controls work');
// Stalled GET cannot delay constructing SSE. Its late timeout cannot disconnect newer SSE.
mode='healthy';await p.evaluate(()=>sessionStorage.setItem('fixture-phase','stall'));await p.reload();await p.waitForFunction(()=>!!window.__transport);await p.evaluate(s=>__transport.dispatchEvent(new MessageEvent('state',{data:JSON.stringify(s)})),state);await p.waitForFunction(()=>__yard.inspect().resident.connected);await open();await p.waitForFunction(()=>!document.querySelector('.history-retry').hidden,{timeout:20000});assert.equal((await p.evaluate(()=>__yard.inspect().resident)).connected,true);assert.equal(await p.locator('.history-entry').count(),30);assert((await p.locator('.history-live').textContent()).includes('архив не дошёл'));checks.push('stalled state/history bounded; SSE independent and healthy after failed poll');
await p.evaluate(()=>{window.__stall=false;window.__stallHistory=false;sessionStorage.removeItem('fixture-phase');});await click('.history-retry');await p.waitForFunction(()=>document.querySelectorAll('.history-entry').length===600);checks.push('retry after stalled body');
// Primary host uses relative API paths. Same session/body/history intact.
await p.goto(url('primary'));await open();await p.waitForFunction(()=>document.querySelectorAll('.history-entry').length===600);assert((await p.evaluate(()=>__requests)).includes('/api/history'));checks.push('primary relative API path');
// A slow older HTTP state cannot rewind a newer SSE state.
await emit({revision:102,server_time:t+2,position:[2,1.9,1]});await p.evaluate(s=>__transport.dispatchEvent(new MessageEvent('state',{data:JSON.stringify(s)})),state);assert.equal((await p.evaluate(()=>__yard.inspect().resident)).revision,102);checks.push('old snapshots ignored');
// SSE error plus browser online signal really restarts state polling; no write requests.
state.revision=103;state.server_time=t+3;state.heartbeat=t+3;
const previousRequests=stateRequests;await p.evaluate(()=>__transport.dispatchEvent(new Event('error')));
// EventSource.onerror is a property in the actual implementation, so explicitly call it on this minimal fixture.
await p.evaluate(()=>{__transport.onerror();window.dispatchEvent(new Event('online'));});
await p.evaluate(()=>window.dispatchEvent(new Event('beznogim:retry')));await p.waitForFunction(()=>!document.querySelector('.resident-status').textContent.includes('прервалась'));assert(stateRequests>previousRequests);checks.push('SSE error, online wake and explicit retry poll state');
// Invalid archive shape is a failure, never an authoritative empty archive.
await p.evaluate(()=>{localStorage.removeItem('beznogim-public-notes-v1');window.__stall=false;window.__stallHistory=false;});mode='invalid';await p.reload();await p.evaluate(()=>{window.__stall=false;window.__stallHistory=false;});await open();await p.waitForFunction(()=>!document.querySelector('.history-retry').hidden&&!document.querySelector('.history-retry').disabled);await click('.history-retry');await p.waitForFunction(()=>document.querySelector('.history-live').textContent.includes('архив не дошёл'));checks.push('malformed archive does not silently succeed');
mode='invalid-entries';await click('.history-retry');await p.waitForFunction(()=>!document.querySelector('.history-retry').disabled);assert((await p.locator('.history-live').textContent()).includes('архив не дошёл'));await emit({history:{entries:[null,{id:'bad'}]}});checks.push('invalid entries and malformed SSE tail are safe, not authoritative zero');
// Corrupt local cache and denied storage must not prevent valid network history.
await p.evaluate(()=>localStorage.setItem('beznogim-public-notes-v1','{broken'));mode='healthy';await p.addInitScript(()=>{window.__denyStorage=true;});await p.reload();await open();await p.waitForFunction(()=>document.querySelectorAll('.history-entry').length===600);checks.push('corrupt and denied storage still allows live history');
// Truly empty successful archive, without live tail, is the only authoritative zero.
mode='empty';await p.evaluate(()=>{window.__denyStorage=false;localStorage.removeItem('beznogim-public-notes-v1');});await p.reload();await open();await p.waitForFunction(()=>document.querySelector('.history-count').textContent==='записей: 0 · мск');assert.equal(await p.locator('.history-empty').textContent(),'пока ни строчки. пусть поживёт.');checks.push('successful truly empty archive distinguished from unavailable');
assert.equal(errors.length,0,errors.join('\n'));assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth||document.documentElement.scrollHeight>innerHeight),false);assert(requests.every(r=>r.method()==='GET'));fs.writeFileSync(`${capture}/notes-reconnect-${name}.json`,JSON.stringify({passed:true,fixture:true,notProduction:true,checks,stateRequests,historyRequests,errors},null,2));console.log('PASS resident reconnect',name,checks);await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
