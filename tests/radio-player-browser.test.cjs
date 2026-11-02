// Explicit synthetic tones for media API tests; NEVER part of the public playlist.
const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),assert=require('assert/strict');
process.env.LP_NUM_THREADS='2';
const mobile=process.argv[2]==='mobile',name=mobile?'mobile':'desktop';let browser,page,failMusic=false;
function tone(hz,seconds=1.2){const rate=24000,n=Math.floor(rate*seconds),b=Buffer.alloc(44+n*2);b.write('RIFF');b.writeUInt32LE(36+n*2,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);b.writeUInt32LE(rate,24);b.writeUInt32LE(rate*2,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(n*2,40);for(let i=0;i<n;i++)b.writeInt16LE(Math.round(Math.sin(i*2*Math.PI*hz/rate)*4000),44+i*2);return b;}
const wavA=tone(220),wavB=tone(330,4),tracks=[{id:'fixture-a',title:'ТЕСТ: тон 220 Гц (не песня)',file:'music/fixture-a.wav'},{id:'fixture-b',title:'ТЕСТ: тон 330 Гц (не песня)',file:'music/fixture-b.wav'},{id:'missing',title:'ТЕСТ: отсутствующий файл',file:'music/missing.wav'}];
(async()=>{
 browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--use-angle=swiftshader','--enable-webgl','--enable-unsafe-swiftshader','--single-process','--no-zygote']});page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:1000},isMobile:mobile,hasTouch:mobile});page.setDefaultTimeout(30000);
 const errors=[],writes=[];let mediaRequests=0;page.on('pageerror',e=>errors.push(String(e)));page.on('request',r=>{if(r.method()!=='GET')writes.push(r.url());if(/\.(wav|mp3)/.test(r.url())){mediaRequests++;console.log('MEDIA',r.url(),r.headers().range||'full');}});
 const now=Math.floor(Date.now()/1000),history=[{id:1,time:now,type:'wait',text:'спит до утра'},{id:2,time:now,type:'muse',text:'публичное тестовое событие'}],snapshot={version:1,server_time:now,heartbeat:now,resident_status:'sleeping',position:[-.15,1.9,.85],objects:{radio:{station:2}},release:{commit:'radio-test-fixture'},action:{kind:'sleep',started:now,ends:now+3600,label:'спит до утра'},mechanics:{vitals:{public:{hunger:60,thirst:80,energy:50,mood:70}}},history};
 await page.addInitScript(()=>{window.EventSource=class extends EventTarget{constructor(){super();window.__radioTransport=this;}};});
 await page.route('**/*',async route=>{const u=new URL(route.request().url());if(u.hostname!=='head.alesha.pro')return route.abort();
  if(u.pathname==='/api/state')return route.fulfill({json:snapshot});if(u.pathname==='/api/history')return route.fulfill({json:{entries:history,has_more:false}});if(u.pathname.startsWith('/api/'))return route.fulfill({status:404,body:''});
  if(failMusic&&u.pathname.endsWith('.mp3'))return route.fulfill({status:404,body:''});
  if(u.pathname==='/radio-test'){return route.fulfill({contentType:'text/html',body:`<html lang="ru"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#182a2f;color:#ddd;font:14px sans-serif;margin:24px"><h2>Тест аудиоконтролов</h2><p>Синтетические тоны. Не песни чата.</p><section id="inspector" style="max-width:330px;background:#f0ecd7;padding:16px;border-radius:8px"><button id="object-action">старая шумовая станция</button></section><link rel="stylesheet" href="/src/radio-player.css"><script type="module">import {installRadioPlayer} from '/src/radio-player.js';window.player=installRadioPlayer();player.controls.hidden=false;</script></body></html>`});}
  if(u.pathname==='/src/radio-player.js'){const text=fs.readFileSync('src/radio-player.js','utf8').replace("import './radio-player.css';",'').replace('import.meta.env.BASE_URL',"'./'");return route.fulfill({contentType:'text/javascript',body:text});}
  if(u.pathname==='/public/music/playlist.json')return route.fulfill({contentType:'text/javascript',body:`export default ${JSON.stringify({version:1,tracks})}`});
  if(u.pathname==='/music/fixture-a.wav')return route.fulfill({contentType:'audio/wav',body:wavA});if(u.pathname==='/music/fixture-b.wav')return route.fulfill({contentType:'audio/wav',body:wavB});if(u.pathname==='/music/missing.wav')return route.fulfill({status:404,body:''});
  if(u.pathname.endsWith('.mp3')){const b=fs.readFileSync(path.join(process.cwd(),'dist',u.pathname)),range=route.request().headers().range;const m=range?.match(/^bytes=(\d+)-(\d*)$/);if(m){const start=Number(m[1]),end=m[2]?Math.min(Number(m[2]),b.length-1):b.length-1;return route.fulfill({status:206,headers:{'Content-Type':'audio/mpeg','Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${b.length}`},body:b.subarray(start,end+1)});}return route.fulfill({contentType:'audio/mpeg',headers:{'Accept-Ranges':'bytes'},body:b});}
  try{const f=u.pathname.startsWith('/src/')?path.join(process.cwd(),u.pathname):path.join(process.cwd(),'dist',u.pathname==='/'?'index.html':u.pathname);return route.fulfill({contentType:{'.js':'text/javascript','.css':'text/css','.html':'text/html','.json':'application/json','.mp3':'audio/mpeg'}[path.extname(f)]||'application/octet-stream',body:fs.readFileSync(f)});}catch{return route.fulfill({status:404,body:''});}
 });
 const click=async s=>{console.log('click',s);const l=page.locator(s);await l.scrollIntoViewIfNeeded();mobile?await l.tap():await l.click();};
 await page.goto('https://head.alesha.pro/',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.__yard);await page.selectOption('#world-places','radio');await page.waitForTimeout(500);
 assert(await page.locator('#radio-player').isVisible());assert.equal(await page.locator('#radio-play').isDisabled(),false);assert(await page.locator('#radio-track').textContent().then(s=>s.includes('1 / 4 · нечестивым до утра')));assert.equal(await page.locator('audio').evaluate(a=>a.paused&&!a.autoplay&&!a.getAttribute('src')),true);assert.equal(mediaRequests,0);
 const original=await page.evaluate(()=>JSON.stringify(__beznogimState));assert.equal(await page.locator('.need-icon').count(),4);
 await page.screenshot({path:`/captures/radio-${name}-catalog.png`});
 assert(await page.locator('#enter-dream08').isVisible());assert(await page.locator('#enter-dream06').isVisible());
 // Scene geometry and old local station: do not trigger it while watching the resident.
 await click('#focus-object');await page.waitForTimeout(500);await page.screenshot({path:`/captures/radio-${name}-close.png`});
 if(mobile){await click('.history-toggle');}await page.waitForFunction(()=>document.querySelectorAll('.history-entry').length===2);await click('[data-filter="actions"]');assert.equal(await page.locator('.history-entry').count(),1);await click('.history-close');
 assert.equal(await page.evaluate(()=>JSON.stringify(__beznogimState)),original);assert.deepEqual(writes,[]);
 if(mobile){await page.setViewportSize({width:320,height:568});await page.locator('#radio-message').scrollIntoViewIfNeeded();await page.screenshot({path:'/captures/radio-mobile-320-catalog.png'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.setViewportSize({width:390,height:844});}

 // Actual delivered MP3s in the production built world. No media fixtures here.
 const audio=page.locator('#yard-radio-audio');
 const playing=()=>page.waitForFunction(()=>{const a=document.querySelector('#yard-radio-audio');return !a.paused&&a.readyState>=2&&a.currentTime>.1;});
 const titles=JSON.parse(fs.readFileSync('public/music/playlist.json','utf8')).tracks;
 // Autonomous local clocks/weather/cache are allowed to tick; saved puzzle progress is not.
 const stored=await page.evaluate(()=>JSON.stringify(Object.fromEntries(Object.entries(localStorage).filter(([k])=>/^beznogim-(quotes|beacon|garage|drydock|seams|scale|fork|bench|dash|still|amnesty|ego|ram-survival)-v1$/.test(k)))));
 for(let i=0;i<4;i++){console.log('ACTUAL TRACK',i);
   assert((await page.locator('#radio-track').textContent()).includes(titles[i].title));
   await click('#radio-play');await playing();
   assert.equal(await audio.evaluate(a=>a.currentSrc.split('/').pop()),titles[i].file.split('/').pop());
   const duration=await audio.evaluate(a=>a.duration);assert(Math.abs(duration-titles[i].duration)<.15,JSON.stringify({duration,expected:titles[i].duration}));
   await page.waitForTimeout(250);assert((await audio.evaluate(a=>a.currentTime))>.2);
   await click('#radio-play');assert(await audio.evaluate(a=>a.paused));const t=await audio.evaluate(a=>a.currentTime);await page.waitForTimeout(200);assert.equal(await audio.evaluate(a=>a.currentTime),t);
   if(i<3)await click('#radio-next');
 }
 // Actual touch/mouse volume adjustment, persistence, active prev/next and wrap.
 await page.locator('#radio-volume').scrollIntoViewIfNeeded();const vb=await page.locator('#radio-volume').boundingBox();
 if(mobile)await page.touchscreen.tap(vb.x+vb.width*.75,vb.y+vb.height/2);else await page.mouse.click(vb.x+vb.width*.75,vb.y+vb.height/2);
 assert((await audio.evaluate(a=>a.volume))>.55);
 await page.locator('#radio-volume').evaluate(e=>{e.value='.23';e.dispatchEvent(new Event('input',{bubbles:true}));});assert.equal(await audio.evaluate(a=>a.volume),.23);
 await click('#radio-play');await playing();await click('#radio-prev');await playing();assert((await page.locator('#radio-track').textContent()).includes(titles[2].title));
 await click('#radio-next');await playing();assert((await page.locator('#radio-track').textContent()).includes(titles[3].title));
 await audio.evaluate(a=>{window.realEndedCount=0;a.addEventListener('ended',()=>window.realEndedCount++);a.currentTime=a.duration-.4;});
 await page.waitForFunction(()=>window.realEndedCount>=1&&document.querySelector('#radio-track').textContent.includes('1 / 4'));
 await playing();assert((await page.locator('#radio-track').textContent()).includes(titles[0].title));
 await page.screenshot({path:`/captures/radio-${name}-real-playing.png`});
 await click('#close-card');assert(await page.locator('#radio-mini').isVisible());await click('#radio-mini');assert(await audio.evaluate(a=>a.paused));
 await page.selectOption('#world-places','radio');await click('#radio-prev');assert((await page.locator('#radio-track').textContent()).includes(titles[3].title));
 // A real failed media request, followed by same-track retry with the actual MP3.
 failMusic=true;await click('#radio-next');await click('#radio-play');await page.waitForFunction(()=>Boolean(document.querySelector('#yard-radio-audio').error));
 assert((await page.locator('#radio-message').textContent()).match(/недоступен|воспроизвести/));
 await page.screenshot({path:`/captures/radio-${name}-real-error.png`});
 failMusic=false;await click('#radio-play');await playing();assert((await page.locator('#radio-track').textContent()).includes(titles[0].title));await click('#radio-play');
 assert.equal(await page.evaluate(()=>JSON.stringify(__beznogimState)),original);assert.equal(await page.evaluate(()=>JSON.stringify(Object.fromEntries(Object.entries(localStorage).filter(([k])=>/^beznogim-(quotes|beacon|garage|drydock|seams|scale|fork|bench|dash|still|amnesty|ego|ram-survival)-v1$/.test(k))))),stored);
 // Native decoder parses every actual MP3 to PCM, including the whole tail.
 const decoded=await page.evaluate(async tracks=>{const ctx=new AudioContext(),results=[];for(const t of tracks){const response=await fetch('/'+t.file);if(!response.ok)throw Error('MP3 HTTP '+response.status);const a=await ctx.decodeAudioData(await response.arrayBuffer());const data=a.getChannelData(0);let sum=0,peak=0,n=0;for(let i=0;i<data.length;i+=113){sum+=data[i]*data[i];peak=Math.max(peak,Math.abs(data[i]));n++;}results.push({title:t.title,duration:a.duration,channels:a.numberOfChannels,sampleRate:a.sampleRate,rms:Math.sqrt(sum/n),peak});}await ctx.close();return results;},titles);
 for(let i=0;i<4;i++){assert(Math.abs(decoded[i].duration-titles[i].duration)<.15);assert(decoded[i].rms>.001);assert(decoded[i].peak>.01);}
 fs.writeFileSync(`/captures/radio-${name}-actual-decode.json`,JSON.stringify(decoded,null,2));console.log('PASS actual4MP3 decode/fullPCM/duration/non-silence',JSON.stringify(decoded));
 const beforeReload=mediaRequests;await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.__yard);await page.selectOption('#world-places','radio');
 assert.equal(await audio.evaluate(a=>a.paused&&!a.autoplay&&!a.getAttribute('src')),true);assert.equal(await audio.evaluate(a=>a.volume),.23);assert.equal(mediaRequests,beforeReload);
 if(mobile){for(const size of [{width:320,height:568},{width:650,height:390},{width:390,height:844}]){await page.setViewportSize(size);await page.locator('#radio-play').scrollIntoViewIfNeeded();await page.screenshot({path:`/captures/radio-real-${size.width}x${size.height}.png`});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);}}
 mediaRequests=0;
 await page.goto('https://head.alesha.pro/radio-test',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.player);assert.equal(mediaRequests,0);assert.equal(await page.evaluate(()=>player.inspect().playing),false);
 await click('#radio-play');await page.waitForFunction(()=>player.inspect().playing&&player.inspect().time>.05);assert.equal(await page.evaluate(()=>document.querySelector('audio').readyState>=2),true);
 await click('#radio-play');assert.equal(await page.evaluate(()=>document.querySelector('audio').paused),true);const t=await page.evaluate(()=>player.inspect().time);await page.waitForTimeout(200);assert.equal(await page.evaluate(()=>player.inspect().time),t);
 // Real pointer/touch hit on the range, then exact-value assertion.
 const range=await page.locator('#radio-volume').boundingBox();if(mobile)await page.touchscreen.tap(range.x+range.width*.7,range.y+range.height/2);else await page.mouse.click(range.x+range.width*.7,range.y+range.height/2);assert(await page.evaluate(()=>player.inspect().volume>.5));
 await page.locator('#radio-volume').evaluate(e=>{e.value='.23';e.dispatchEvent(new Event('input',{bubbles:true}));});assert.equal(await page.evaluate(()=>document.querySelector('audio').volume),.23);assert.equal(await page.locator('#radio-volume-value').textContent(),'23%');
 await click('#radio-next');assert.equal(await page.evaluate(()=>player.inspect().index),1);assert.equal(await page.evaluate(()=>document.querySelector('audio').paused),true);await click('#radio-prev');assert.equal(await page.evaluate(()=>player.inspect().index),0);
 await click('#radio-play');await page.waitForFunction(()=>player.inspect().index===1&&player.inspect().playing); // real media ended, NOT a dispatched fake event
 await click('#radio-mini');assert.equal(await page.evaluate(()=>document.querySelector('audio').paused),true);
 await page.screenshot({path:`/captures/radio-${name}-fixture-controls.png`});
 await click('#radio-next');await click('#radio-play');await page.waitForFunction(()=>player.inspect().error);assert(await page.locator('#radio-message').textContent().then(s=>s.includes('недоступен')||s.includes('воспроизвести')));assert.equal(await page.evaluate(()=>player.inspect().wanted),false);await page.screenshot({path:`/captures/radio-${name}-fixture-error.png`});
 await click('#radio-prev');await click('#radio-play');await page.waitForFunction(()=>player.inspect().playing);await click('#radio-next');await page.waitForFunction(()=>player.inspect().error); // active switching and missing-file recovery
 await click('#radio-next');await click('#radio-play');await page.waitForFunction(()=>player.inspect().playing&&player.inspect().index===0);await click('#radio-play');
 await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.player);assert.equal(await page.evaluate(()=>player.inspect().playing),false);assert.equal(await page.evaluate(()=>document.querySelector('audio').getAttribute('src')),null);assert.equal(await page.evaluate(()=>player.inspect().volume),.23);
 assert.deepEqual(errors,[]);assert.deepEqual(writes,[]);console.log('PASS radio browser '+name+': actual4MP3 catalog/full decode/playback/pause/prevnext/volume/NATURALended/error/retry/noautoplay/reload/history/needs; additional synthetic WAV decode/time/pause/next/previous/real ended/volume/error/retry/reload (WAV fixtures are not songs)');await browser.close();
})().catch(async e=>{console.error(e);if(page)await page.screenshot({path:`/captures/radio-${name}-BAD.png`}).catch(()=>{});if(browser)await browser.close();process.exit(1);});
