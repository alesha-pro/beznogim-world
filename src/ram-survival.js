import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {fresh,start,pause,tick,upgrade,orbitPositions,UPGRADES,DURATION,LIMITS} from './ram-survival-core.js';
import './ram-survival.css';

export function createRamSurvival(){
 const modal=document.createElement('dialog');modal.id='ram-survival';modal.setAttribute('aria-label','нехватка памяти - их проблема');
 modal.innerHTML=`<header class="ram-hud"><div><b class="ram-brand">RAM / ЛОКАЛЬНЫЙ ЗАБЕГ</b><output class="ram-stats"></output><progress id="ram-hp" max="100" value="100" aria-label="здоровье"></progress><progress id="ram-xp" max="5" value="0" aria-label="опыт"></progress></div><button id="ram-pause" aria-label="пауза">Ⅱ</button><button id="ram-exit">во двор ↗</button></header><section class="ram-panel"></section><footer class="ram-bottom"><div class="ram-stick" role="group" aria-label="стик движения: потяни в нужную сторону"><span></span></div><span class="ram-help">WASD / стрелки / стик<br>RAM бьёт сама. Подбирай зелёные платы.</span></footer>`;
 document.body.append(modal);
 const launch=document.createElement('button');launch.id='ram-launch';launch.textContent='RAM-survival / начать забег ↗';launch.hidden=true;document.querySelector('#focus-object').before(launch);launch.onclick=()=>open();
 const panel=modal.querySelector('.ram-panel'),stats=modal.querySelector('.ram-stats'),hp=modal.querySelector('#ram-hp'),xp=modal.querySelector('#ram-xp'),stick=modal.querySelector('.ram-stick'),knob=stick.querySelector('span');
 let s=fresh(),renderer,scene,camera,hero,halo,rams=[],enemies=[],pickups=[],bolts=[],sparks=[],active=false,raf=0,last=0,phase='',pointerId=null,joystick={x:0,y:0},keys=new Set(),returnFocus=null;
 const geometries=[],materials=[],textures=[];
 function material(c,extra={}){const m=new THREE.MeshStandardMaterial({color:c,roughness:.8,...extra});materials.push(m);return m;}
 function geometry(g){geometries.push(g);return g;}
 function init(){
  if(renderer)return;
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setClearColor('#173b40');renderer.outputColorSpace=THREE.SRGBColorSpace;modal.prepend(renderer.domElement);renderer.domElement.setAttribute('aria-label','изометрическая RAM-арена');
  scene=new THREE.Scene();scene.fog=new THREE.Fog('#173b40',50,105);camera=new THREE.OrthographicCamera(-12,12,12,-12,.1,150);
  scene.add(new THREE.HemisphereLight('#fdf3cc','#3b6668',2));const sun=new THREE.DirectionalLight('#ffe0a4',2.4);sun.position.set(10,25,5);scene.add(sun);
  const cube=geometry(new THREE.BoxGeometry(1,1,1)),ball=geometry(new THREE.SphereGeometry(1,16,10)),ring=geometry(new THREE.TorusGeometry(1,.035,5,32)),chip=material('#183e39'),pcb=material('#64bc89'),gold=material('#f8cc76'),ink=material('#19323c'),face=material('#e8c7a1'),silver=material('#b3c5c0'),pink=material('#e99292'),white=material('#fff4dc');
  const scenery=new THREE.Group();scene.add(scenery);
  const vertexMaterial=material('#ffffff',{vertexColors:true});
  function bake(parent){parent.updateMatrixWorld(true);const inverse=parent.matrixWorld.clone().invert(),parts=[];parent.traverse(o=>{if(!o.isMesh)return;const geo=o.geometry.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld));const a=new Float32Array(geo.attributes.position.count*3);for(let i=0;i<a.length;i+=3){a[i]=o.material.color.r;a[i+1]=o.material.color.g;a[i+2]=o.material.color.b;}geo.setAttribute('color',new THREE.BufferAttribute(a,3));parts.push(geo);});const merged=geometry(mergeGeometries(parts));parts.forEach(g=>g.dispose());return merged;}
  let boardGeometry;
  function mesh(g,m,pos,scale,parent=scenery){const o=new THREE.Mesh(g,m);o.position.set(...pos);o.scale.set(...scale);parent.add(o);return o;}
  function group(){return new THREE.Group();}
  function board(parent,scale=1){if(!boardGeometry){const g=group();mesh(cube,pcb,[0,0,0],[.3,.08,.85],g);for(const z of [-.24,0,.24])mesh(cube,chip,[0,.07,z],[.21,.07,.16],g);mesh(cube,gold,[.17,0,0],[.045,.06,.8],g);boardGeometry=bake(g);}return mesh(boardGeometry,vertexMaterial,[0,0,0],[scale,scale,scale],parent);}
  function label(text,color){const c=document.createElement('canvas');c.width=256;c.height=64;const ctx=c.getContext('2d');ctx.fillStyle='#16393a';ctx.fillRect(0,0,256,64);ctx.strokeStyle=color;ctx.lineWidth=5;ctx.strokeRect(3,3,250,58);ctx.fillStyle=color;ctx.font='bold 35px monospace';ctx.textAlign='center';ctx.fillText(text,128,45);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);const m=new THREE.SpriteMaterial({map:t,depthWrite:false});materials.push(m);return m;}
  mesh(cube,material('#2d5b57'),[0,-.28,0],[42,.4,42]);
  const grid=new THREE.GridHelper(40,20,'#8a9c70','#446d60');grid.position.y=-.06;scene.add(grid);
  const edge=material('#8c9f73');for(let i=-20;i<=20;i+=4){for(const p of [[i,.12,-20],[i,.12,20],[-20,.12,i],[20,.12,i]]){mesh(cube,edge,p,[.4,.7,.4]);mesh(cube,gold,[p[0],.52,p[2]],[.5,.08,.5]);}}
  // Inlaid traces, not obstacles. Never obscure actors.
  for(let i=0;i<8;i++){const z=-16+i*4.5;mesh(cube,edge,[-6,-.055,z],[15,.035,.045]);mesh(cube,edge,[1.5,-.055,z+1],[.045,.035,2]);}
  const environmentGeometry=bake(scenery);scenery.clear();mesh(environmentGeometry,vertexMaterial,[0,0,0],[1,1,1],scenery);
  const emblem=label('NO API','#d6c589');const seal=new THREE.Sprite(emblem);seal.position.set(-15,.3,-15);seal.scale.set(3,.75,1);scene.add(seal);
  hero=group();scene.add(hero);mesh(ball,silver,[0,.95,0],[.78,.69,.7],hero);const features=group();features.rotation.y=Math.PI/4;hero.add(features);
  for(const x of [-.25,.25]){mesh(cube,ink,[x,1.03,.64],[.19,.16,.13],features);mesh(cube,white,[x,1.07,.72],[.055,.06,.03],features);}mesh(cube,ink,[0,.67,.64],[.29,.06,.08],features);
  halo=mesh(ring,gold,[0,.12,0],[1.05,1.05,1.05],hero);halo.rotation.x=-Math.PI/2;
  rams=Array.from({length:6},()=>board(scene,1.2));
  const labels=[label('SAM / API','#f0ca85'),label('DARIO / CAP','#b4dbba')],hair=[material('#5c4939'),material('#713e31')],suits=[material('#cfaa69'),material('#7a9d92')];
  const enemyGeometry=[];
  enemies=Array.from({length:LIMITS.enemies},(_,i)=>{const g=group();scene.add(g);const k=i%2;mesh(cube,suits[k],[0,.5,0],[.7,.8,.5],g);mesh(cube,gold,[0,.58,.29],[.13,.44,.06],g);mesh(ball,face,[0,1.3,0],[.55,.52,.5],g);mesh(cube,hair[k],[0,1.68,-.02],[.91,.23,.8],g);
   const f=group();f.rotation.y=Math.PI/4;g.add(f);for(const x of [-.18,.18])mesh(cube,ink,[x,1.37,.47],[.13,.09,.08],f);mesh(cube,ink,[.01,1.14,.49],[.2,.045,.05],f);
   if(!enemyGeometry[k])enemyGeometry[k]=bake(g);g.clear();const body=mesh(enemyGeometry[k],vertexMaterial,[0,0,0],[1,1,1],g);
   const badge=new THREE.Sprite(labels[k]);badge.position.set(0,2.12,0);badge.scale.set(1.65,.41,1);g.add(badge);g.userData={badge,body};return g;});
  enemyLabels=labels;enemyShapes=enemyGeometry;
  pickups=Array.from({length:LIMITS.ram},()=>board(scene,.9));
  bolts=Array.from({length:LIMITS.bolts},()=>mesh(cube,gold,[0,0,0],[.18,.16,.38],scene));
  sparks=Array.from({length:LIMITS.sparks},()=>{const g=group();scene.add(g);for(let i=0;i<3;i++)mesh(cube,i===0?pink:gold,[0,0,0],[.18,.18,.18],g);return g;});
 }
 function input(){return {x:joystick.x+(keys.has('right')?1:0)-(keys.has('left')?1:0),y:joystick.y+(keys.has('down')?1:0)-(keys.has('up')?1:0)};}
 function release(){keys.clear();joystick={x:0,y:0};knob.style.transform='';if(pointerId!==null){try{stick.releasePointerCapture(pointerId);}catch{}pointerId=null;}}
 function draw(){
  if(!renderer)return;const p=s.player;hero.position.set(p.x,0,p.z);hero.visible=p.inv===0||Math.floor(p.inv*15)%2===0;halo.rotation.z=s.angle;
  orbitPositions(s).forEach((a,i)=>{rams[i].position.set(a.x,.65,a.z);rams[i].rotation.y=-a.a;rams[i].rotation.z=.3;});rams.forEach((o,i)=>o.visible=i<s.orbits);
  for(let i=0;i<enemies.length;i++){const o=enemies[i],e=s.enemies[i];o.visible=!!e;if(e){o.position.set(e.x,Math.sin(s.time*7+i)*.04,e.z);o.rotation.z=Math.sin(s.time*5+i)*.05;const k=e.kind;// Pool order changes after removals; faction follows the simulation, not the slot.
   o.userData.badge.material=enemyLabels[k];o.userData.body.geometry=enemyShapes[k];}}
  pickups.forEach((o,i)=>{const r=s.ram[i];o.visible=!!r;if(r){o.position.set(r.x,.23+Math.sin(s.time*3+i)*.06,r.z);o.rotation.y=s.time*.4+i;}});
  bolts.forEach((o,i)=>{const b=s.bolts[i];o.visible=!!b;if(b){o.position.set(b.x,.9,b.z);o.rotation.y=Math.atan2(b.vx,b.vz);}});
  sparks.forEach((o,i)=>{const a=s.sparks[i];o.visible=!!a;if(a){o.position.set(a.x,0,a.z);o.children.forEach((c,j)=>{const t=THREE.MathUtils.clamp(1-a.life/.55,0,1);c.position.set(Math.cos(j*2.1)*t*1.3,1+t*.5,Math.sin(j*2.1)*t*1.3);c.rotation.set(t*4,j,t*3);c.scale.setScalar(.35*(1-t*.7));});}});
  const w=modal.clientWidth,h=modal.clientHeight,half=h>w?14:11;
  if(renderer.domElement.width!==Math.round(w*renderer.getPixelRatio())||renderer.domElement.height!==Math.round(h*renderer.getPixelRatio()))renderer.setSize(w,h,false);
  camera.left=-half*w/h;camera.right=half*w/h;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();camera.position.set(p.x+28,28,p.z+28);camera.lookAt(p.x,0,p.z);renderer.render(scene,camera);
 }
 let enemyLabels,enemyShapes;
 function renderUI(force=false){
  stats.textContent=`${String(Math.floor(s.time)).padStart(2,'0')} / ${DURATION}с · волна ${Math.min(3,1+Math.floor(s.time/30))}/3 · ♥ ${s.player.hp} · RAM ${s.collected} · ур.${s.level}`;
  hp.value=s.player.hp;xp.max=s.need;xp.value=s.xp;modal.querySelector('#ram-pause').disabled=!['running','paused'].includes(s.phase);modal.querySelector('#ram-pause').textContent=s.phase==='paused'?'▶':'Ⅱ';
  stick.style.visibility=s.phase==='running'?'visible':'hidden';
  if(!force&&phase===s.phase)return;phase=s.phase;release();panel.hidden=s.phase==='running';
  if(s.phase==='ready')panel.innerHTML=`<small>БЕЗНОГИЙ SURVIVAL / 90 СЕКУНД</small><h1>нехватка памяти -<br>их проблема</h1><p>Три волны SAM / API и DARIO / CAP хотят твою оперативку. Это игровые маски Сэма Альтмана и Дарио, не настоящие люди. Голова скользит, RAM вращается, чипы стреляют сами.</p><p>Двигайся WASD, стрелками или стиком. Собирай зелёные платы: опыт открывает выбор улучшения. Не стой внутри толпы.</p><small>Мультяшная сатира. Противники рассыпаются на токены и лимиты. Только твой браузер: житель и его жизнь не участвуют.</small><button class="ram-primary" id="ram-start">держать свою память ↗</button>`;
  if(s.phase==='upgrade')panel.innerHTML=`<small>RAM УРОВЕНЬ ${s.level} / ВРЕМЯ ОСТАНОВЛЕНО</small><h1>добавь железку</h1><div class="ram-choices">${s.choices.map(id=>{const u=UPGRADES.find(v=>v.id===id);return `<button data-ram-upgrade="${id}"><strong>${u.title}</strong><span>${u.text}</span></button>`}).join('')}</div><small>Выбери одно. Здоровье ${s.player.hp}/100. Враги подождут, у них rate limit.</small>`;
  if(s.phase==='paused')panel.innerHTML='<small>ЗАБЕГ НА ПАУЗЕ</small><h1>контекст не утечёт</h1><p>Время и враги стоят. Вернёшься - продолжим отсюда.</p><button class="ram-primary" id="ram-resume">продолжить ▶</button>';
  if(['won','lost'].includes(s.phase))panel.innerHTML=`<small>${s.phase==='won'?'90 СЕКУНД / ПАМЯТЬ ОТБИТА':'КОНТЕКСТ КОНЧИЛСЯ / МОЖНО ПОВТОРИТЬ'}</small><h1>${s.phase==='won'?'доступ запрещён.':'ушёл в своп.'}</h1><p>${s.phase==='won'?'Три волны пережиты. Чужие лимиты остались снаружи.':'Толпа съела полоску, не голову. Попробуй двигаться по кругу и собирать RAM.'}</p><p>${Math.floor(s.time)}с · ${s.kills} токенов · ${s.collected} RAM · уровень ${s.level}</p><small>Это локальный забег. Во дворе ничего не потрачено.</small><button class="ram-primary" id="ram-restart">ещё один забег ↺</button>`;
  panel.querySelector('#ram-start')?.addEventListener('click',()=>{start(s);renderUI();});panel.querySelector('#ram-resume')?.addEventListener('click',()=>{pause(s);renderUI();});panel.querySelector('#ram-restart')?.addEventListener('click',()=>{s=fresh();start(s);renderUI(true);});
  panel.querySelectorAll('[data-ram-upgrade]').forEach(b=>b.onclick=()=>{upgrade(s,b.dataset.ramUpgrade);renderUI();});
  if(s.phase!=='running')requestAnimationFrame(()=>panel.querySelector('button')?.focus({preventScroll:true}));
 }
 function frame(now){if(!active)return;let dt=Math.min(.25,Math.max(0,(now-last)/1000));last=now;if(!document.hidden)while(dt>0&&s.phase==='running'){const step=Math.min(.05,dt);tick(s,step,input());dt-=step;}draw();renderUI();raf=requestAnimationFrame(frame);}
 function open(){if(active)return;returnFocus=document.activeElement;init();
  active=true;s=fresh();phase='';release();modal.showModal();document.body.classList.add('ram-playing');last=performance.now();renderUI(true);draw();raf=requestAnimationFrame(frame);
 }
 function close(){if(!active)return;active=false;cancelAnimationFrame(raf);release();modal.close();document.body.classList.remove('ram-playing');returnFocus?.focus?.({preventScroll:true});}
 modal.querySelector('#ram-exit').onclick=close;modal.querySelector('#ram-pause').onclick=()=>{pause(s);renderUI();};
 modal.addEventListener('cancel',e=>{e.preventDefault();pause(s);renderUI();});
 const mapping={KeyW:'up',ArrowUp:'up',KeyS:'down',ArrowDown:'down',KeyA:'left',ArrowLeft:'left',KeyD:'right',ArrowRight:'right'};
 window.addEventListener('keydown',e=>{if(!active)return;if(mapping[e.code]){e.preventDefault();keys.add(mapping[e.code]);}if((e.code==='Space'||e.code==='KeyP')&&!e.repeat&&!e.target.closest('button')){e.preventDefault();pause(s);renderUI();}});
 window.addEventListener('keyup',e=>{if(mapping[e.code])keys.delete(mapping[e.code]);});
 window.addEventListener('blur',()=>{release();if(active&&s.phase==='running'){pause(s);renderUI();}});
 document.addEventListener('visibilitychange',()=>{release();if(document.hidden&&active&&s.phase==='running'){pause(s);renderUI();}});
 function move(e){if(e.pointerId!==pointerId)return;const r=stick.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,l=Math.hypot(dx,dy),radius=r.width*.32,k=l>radius?radius/l:1;joystick={x:dx*k/radius,y:dy*k/radius};knob.style.transform=`translate(${dx*k}px,${dy*k}px)`;}
 stick.addEventListener('pointerdown',e=>{if(s.phase!=='running'||pointerId!==null)return;e.preventDefault();pointerId=e.pointerId;stick.setPointerCapture(pointerId);move(e);});stick.addEventListener('pointermove',move);for(const type of ['pointerup','pointercancel','lostpointercapture'])stick.addEventListener(type,e=>{if(e.pointerId===pointerId)release();});
 return {open,close,active:()=>active,showLaunch:visible=>launch.hidden=!visible,inspect:()=>({active,state:JSON.parse(JSON.stringify(s)),limits:LIMITS,drawCalls:renderer?.info.render.calls??0,geometries:renderer?.info.memory.geometries??0,joystick:{...joystick},canvas:renderer?[renderer.domElement.width,renderer.domElement.height]:null})};
}
