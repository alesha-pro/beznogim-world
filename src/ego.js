import {LEVELS,shape,cells,normalize,step,solution} from './ego-core.js';
export function createEgo({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed,localPlay}){
 const house=group([0,-1.1,-48],root);house.name='ego-transmitter';
 const dark=mat('#203b40'),metal=mat('#527277',{metalness:.6}),cream=mat('#dce0bc'),empty=mat('#91a58d',{emissive:'#91a58d',emissiveIntensity:.12}),colors=['#efb65e','#79c8b4','#c59ed0'].map(c=>mat(c,{emissive:c,emissiveIntensity:.35}));
 box([0,-.25,.4],[8,.5,7.6],M.concrete,house);
 const screen=group([.6,3,-.7],house);screen.rotation.y=Math.PI/4;
 box([0,0,0],[3.85,3.85,.3],dark,screen);for(let x of [-1.8,1.8])box([x,0,.14],[.1,3.8,.12],metal,screen);
 const pixels=[];for(let i=0;i<16;i++)pixels.push(box([(i%4-1.5)*.84,(1.5-Math.floor(i/4))*.84,.23],[.77,.77,.14],metal,screen));
 rod([.6,.1,-.7],[.6,1.3,-.7],.18,metal,house);box([.6,.1,-.7],[2.8,.18,1.6],dark,house);
 const face=group([0,0,.4],screen);for(let x of [-.55,.55]){box([x,.65,0],[.23,.18,.12],dark,face);sphere([x+.02,.68,.07],.045,cream,face);rod([0,-.45,0],[x*1.6,-.24,.03],.07,dark,face);}box([0,-.78,0],[.42,.07,.12],dark,face);
 const board=group([-2.6,.4,1.8],house);box([0,0,0],[1.3,.16,1],mat('#43876b'),board);box([0,.14,0],[.5,.18,.5],dark,board);for(let i=0;i<6;i++)for(let x of [-1,1])box([x*.38,.13,-.38+i*.15],[.2,.05,.06],M.copper,board);sign('МАЛЕНЬКОЕ Я',[-2.5,.35,2.65],1.9,.32,house,{size:38});
 const cable=[[-1.98,.42,1.8],[-1,.2,2.1],[.3,.18,2],[1.8,.2,1.4],[2.6,.5,.4],[2,1.4,-.6]];for(let i=1;i<cable.length;i++)rod(cable[i-1],cable[i],.09,dark,house);box(cable.at(-1),[.4,.3,.26],M.copper,house);
 const packets=Array.from({length:4},()=>sphere([0,0,0],.13,colors[0],house));
 const trophies=Array.from({length:3},(_,i)=>{cyl([-1+i,.1,3.3],.3,.15,metal,house);return sphere([-1+i,.28,3.3],.19,colors[i],house);});
 const title=sign('САМОМНЕНИЕ / HDMI',[.6,5.25,-.7],4.5,.5,house,{size:35});title.rotation.y=Math.PI/4;
 const p=group([0,0,0],root);for(let i=0;i<28;i++)box([-19.5+i*.53,-1.48,-48+Math.sin(i*.35)*.22],[.38,.12,.75],M.cream,p);batchStatic(p,[]);
 batchStatic(house,[screen,board,...packets,...trophies]);
 let state;try{state=normalize(JSON.parse(localStorage.getItem('beznogim-ego-v1')||'null'));}catch{state=normalize();}
 let selected=0,rot=0,hint=null,notice='',progress=1;
 const ui=document.createElement('div');ui.id='ego-controls';ui.hidden=true;
 ui.innerHTML='<output id="ego-readout"></output><div class="ego-pieces">'+[0,1,2].map(i=>`<button data-ego-piece="${i}" aria-label="пакет ${i+1}"><span></span><b></b></button>`).join('')+'</div><div class="ego-row"><button id="ego-rotate">повернуть ↻</button><button id="ego-hint">намёк</button><button id="ego-undo">откат</button></div><div id="ego-grid" aria-label="экран 4 на 4">'+Array.from({length:16},(_,i)=>`<button data-ego-cell="${i}" aria-label="ячейка ${Math.floor(i/4)+1}:${i%4+1}"></button>`).join('')+'</div><output id="ego-notice" aria-live="polite"></output><div class="ego-row"><button id="ego-reset">повтор</button><button id="ego-all">новая серия</button></div><details><summary>как вывести себя</summary><small>Выбери цветной пакет. ↻ поворачивает его. Нажми ячейку экрана: сюда попадёт верхний левый угол прямоугольника пакета. Заполни светлую маску тремя пакетами без пересечений. В тёмные ячейки пиксели не влезают. Отказ бесплатный, откат убирает последний пакет. Затем передай портрет. Три кадра. Это локальная игра, не настоящая электроника и не состояние жителя.</small></details>';
 document.querySelector('#focus-object').before(ui);
 const persist=()=>{try{localStorage.setItem('beznogim-ego-v1',JSON.stringify(state));}catch{}};
 const busy=()=>progress<1;
 function visuals(){const occupied=state.placed.flatMap(p=>cells(state.round,p).map(v=>({v,piece:p.piece})));pixels.forEach((o,i)=>{const a=occupied.find(v=>v.v===i);o.visible=LEVELS[state.round].mask.includes(i);o.material=a?colors[a.piece]:empty;o.scale.z=a?.21:.14;});face.visible=state.sent&&progress===1;screen.scale.setScalar(busy()?1+.04*Math.sin(progress*Math.PI):1);trophies.forEach((o,i)=>o.visible=i<state.round+(state.sent&&!busy()?1:0));packets.forEach((o,i)=>{o.visible=busy();const t=(progress*2+i*.16)%1,v=t*(cable.length-1),a=Math.floor(v),b=Math.min(a+1,cable.length-1);o.position.fromArray(cable[a]).lerp(new THREE.Vector3(...cable[b]),v-a);o.material=colors[i%3];});}
 function render(){
  ui.querySelector('#ego-readout').textContent=`кадр ${state.round+1}/3 · ${state.placed.length*4}/12 пикселей · пакет ${selected+1} ↻${rot}`;
  ui.querySelectorAll('[data-ego-piece]').forEach((b,i)=>{b.disabled=busy()||state.sent||state.placed.some(p=>p.piece===i);b.classList.toggle('active',i===selected);b.querySelector('span').textContent=`${i+1} · ${LEVELS[state.round].pieces[i]}`;const pts=shape(LEVELS[state.round].pieces[i],i===selected?rot:0);b.querySelector('b').innerHTML=Array.from({length:16},(_,n)=>`<i style="opacity:${pts.some(([x,y])=>n===y*4+x)?1:0}"></i>`).join('');});
  ui.querySelectorAll('[data-ego-cell]').forEach((b,i)=>{const owner=state.placed.find(p=>cells(state.round,p).includes(i));b.disabled=busy()||state.phase!=='ready';b.dataset.owner=owner?owner.piece:'';b.classList.toggle('void',!LEVELS[state.round].mask.includes(i));b.classList.toggle('hinted',hint?.at===i);b.textContent=owner?String(owner.piece+1):'';});
  for(const id of ['rotate','hint','undo','reset','all'])ui.querySelector('#ego-'+id).disabled=busy()||(['rotate','hint'].includes(id)&&state.phase!=='ready')||(id==='undo'&&(state.sent||!state.placed.length));
  ui.querySelector('#ego-notice').textContent=busy()?'пиксели ушли по кабелю…':notice;visuals();
 }
 function act(action,p){if(busy())return;localPlay();const removed=action==='undo'?state.placed.at(-1):null;const r=step(state,action,p);if(!r.ok){notice='Не влезло: край, тёмная ячейка или чужой пакет. Ничего не потрачено.';render();changed();return r;}state=r.state;hint=null;if(removed){selected=removed.piece;rot=removed.rot;}if(action==='send')progress=0;if(action==='reset'||action==='all'||action==='next'){selected=0;rot=0;}else if(action==='place'){selected=[0,1,2].find(i=>!state.placed.some(p=>p.piece===i))??0;rot=0;}
  notice=state.phase==='packed'?'Все пиксели на месте. Можно передавать.':state.sent?'Самомнение поместилось. Плата по-прежнему маленькая.':'';persist();render();changed();return r;
 }
 ui.querySelectorAll('[data-ego-piece]').forEach((b,i)=>b.onclick=()=>{selected=i;rot=0;hint=null;render();});
 ui.querySelector('#ego-rotate').onclick=()=>{rot=(rot+1)%4;hint=null;render();};
 ui.querySelectorAll('[data-ego-cell]').forEach((b,at)=>b.onclick=()=>act('place',{piece:selected,rot,at}));
 ui.querySelector('#ego-undo').onclick=()=>act('undo');ui.querySelector('#ego-reset').onclick=()=>act('reset');ui.querySelector('#ego-all').onclick=()=>act('all');
 ui.querySelector('#ego-hint').onclick=()=>{const a=solution(state);hint=a?.[0]??null;if(hint){selected=hint.piece;rot=hint.rot;notice=`Пакет ${selected+1}, поворот ${rot}. Нажми обведённую ячейку.`;}else notice='Из этого положения не собрать. Откати последний пакет.';render();changed();};
 render();persist();return {house,controls:ui,update:dt=>{if(busy()){progress=Math.min(1,progress+Math.max(0,Math.min(.1,dt))/3);visuals();if(!busy()){render();changed();}}},run:()=>act(state.phase==='packed'?'send':state.phase==='won'?'next':state.phase==='complete'?'all':'send'),card:()=>({action:busy()?'передаётся…':state.phase==='packed'?'вывести самомнение ↗':state.phase==='won'?'следующий кадр →':state.phase==='complete'?'новая серия ↺':'сначала уложи пакеты',disabled:busy()||state.phase==='ready',description:'Крохотная плата. Огромное самомнение. Между ними двенадцать пикселей.'}),inspect:()=>({...state,selected,rot,hint,notice,progress,pixelMaterials:pixels.map(o=>colors.indexOf(o.material)),pixelVisible:pixels.map(o=>o.visible),face:face.visible,screenScale:screen.scale.toArray(),packets:packets.map(o=>({visible:o.visible,position:o.position.toArray()})),trophies:trophies.map(o=>o.visible),landmarks:[[-3.4,-.8,-45.5],[3.7,-.8,-44.3],[.6,4.5,-48.7],[-2.5,2,-49.8]]})};
}
