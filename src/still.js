import {CAP,GOALS,NAMES,LIMIT,normalize,step,solution,pose} from './still-core.js';
export function createStill({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed,localPlay}){
 const house=group([24,-1.1,-24],root);house.name='cloud-still';
 const metal=mat('#45626b',{metalness:.55,roughness:.35}),copper=mat('#cf9671',{metalness:.6,roughness:.3}),cloud=mat('#e6e5d2'),blue=mat('#8dd8d4',{emissive:'#8dd8d4',emissiveIntensity:.28}),dark=mat('#233f49');
 box([0,-.25,.6],[9.1,.5,7.4],M.concrete,house);box([0,.04,.1],[8.7,.12,3.3],dark,house);
 function badge(text,p,w=.6,h=.5){const o=sign(text,p,w,h,house);const canvas=o.material.map.image;canvas.width=canvas.height=128;const ctx=canvas.getContext('2d');const draw=t=>{ctx.fillStyle='#294c52';ctx.fillRect(0,0,128,128);ctx.strokeStyle='#e8d7ae';ctx.lineWidth=4;ctx.strokeRect(5,5,118,118);ctx.font='bold 76px monospace';ctx.fillStyle='#fff3ce';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t,64,68);o.material.map.needsUpdate=true;};draw(text);return {o,draw};}
 const badges=[],puffs=[],highlights=[];
 for(let i=0;i<4;i++){
  const x=-3+2*i,height=CAP[i]*.26+.4;
  box([x,.23,0],[1.45,.36,1.25],metal,house);for(let z of [-.5,.5])for(let dx of [-.57,.57])rod([x+dx,.4,z],[x+dx,height,z],.025,copper,house);
  box([x,height,0],[1.3,.09,1.15],metal,house);torus([x,height+.12,0],.23,.04,copper,house);
  for(let n=0;n<CAP[i];n++)box([x-.73,.5+n*.26,.4],[.16,.025,.12],blue,house);
  const g=group([x,.4,0],house);for(let n=0;n<CAP[i];n++){const p=group([0,.15+n*.26,0],g);sphere([0,0,0],[.4,.17,.28],cloud,p);sphere([.2,.04,.12],.15,cloud,p);sphere([-.22,0,-.12],.14,blue,p);puffs.push({o:p,i,n});}
  badges.push(badge(''+CAP[i],[x,.3,1.0],.72,.65));badge(''+(i+1),[x,height+.4,0],.5,.45);
  const h=box([x,.05,.05],[1.7,.06,1.55],blue,house);highlights.push(h);
 }
 const hours=Array.from({length:16},(_,i)=>sphere([-3.75+i*.5,.14,1.8],.11,copper,house));
 sign('16 ЧАСОВ / ОБЛАКО',[0,.45,-2.7],4.8,.48,house,{size:42});
 const trophies=[];
 for(let i=0;i<3;i++){
  const g=group([-2.7+i*2.7,.6,3.15],house);cyl([0,-.2,0],.75,.2,metal,g);const shape=group([0,.2,0],g);trophies.push(shape);
  if(i===0){sphere([0,.3,0],[.5,.43,.35],cloud,shape);sphere([.45,.05,0],[.7,.17,.25],cloud,shape);sphere([.96,.28,0],.15,blue,shape);for(const z of [-.12,.12])rod([.96,.32,z],[1.02,.65,z],.035,copper,shape);}
  if(i===1){sphere([0,.3,0],[.5,.4,.45],cloud,shape);cyl([0,.72,0],.25,.1,blue,shape);sphere([0,.83,0],.09,copper,shape);rod([-.3,.35,0],[-.8,.67,0],.15,cloud,shape);const h=torus([.5,.4,0],.3,.08,blue,shape);h.rotation.x=Math.PI/2;}
  if(i===2){sphere([0,.3,0],[.8,.4,.35],cloud,shape);sphere([-.7,.45,0],[.3,.12,.45],blue,shape);sphere([.5,.37,.29],.06,dark,shape);rod([0,.6,0],[0,.95,0],.045,blue,shape);sphere([0,1,0],[.28,.08,.15],cloud,shape);}
 }
 const flow=group([0,0,0],house);const particles=Array.from({length:7},()=>sphere([0,0,0],[.17,.13,.17],cloud,flow));
 // A narrow branch from the punctuation bridge. Nothing relocates old districts.
 const path=group([0,0,0],root);for(let i=0;i<19;i++)box([7.8+i*.68,-1.48,-24+Math.sin(i*.33)*.3],[.48,.13,.85],M.cream,path);batchStatic(path,[]);
 batchStatic(house,[...puffs.map(p=>p.o),...badges.map(b=>b.o),...highlights,...hours,...trophies,flow]);
 let state;try{state=normalize(JSON.parse(localStorage.getItem('beznogim-still-v1')||'null'));}catch{state=normalize();}
 let a=0,b=1,progress=1,pour=null,notice='',hint=null;
 const ui=document.createElement('div');ui.id='still-controls';ui.hidden=true;
 ui.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>';
 document.querySelector('#focus-object').before(ui);
 for(const sel of ui.querySelectorAll('select'))for(let i=0;i<4;i++)sel.add(new Option('карта '+(i+1),''+i));
 ui.querySelector('#still-to').value='1';
 const persist=()=>{try{localStorage.setItem('beznogim-still-v1',JSON.stringify(state));}catch{}};
 const busy=()=>progress<1;
 function visuals(t=1){
  const v=busy()?pour.before.map((n,i)=>n+(pour.after[i]-n)*t):state.volumes;
  for(const p of puffs){const amount=Math.max(0,Math.min(1,v[p.i]-p.n));p.o.visible=amount>.01;p.o.scale.setScalar(Math.max(.01,amount));}
  flow.visible=busy();particles.forEach((p,i)=>{const u=Math.max(0,Math.min(1,(t*1.65-i*.09)));p.visible=busy()&&u>0&&u<1;p.position.set(...pose(pour?.a||0,pour?.b||0,u));});
  const count=state.round+(state.phase==='won'||state.phase==='complete'?1:0)-(busy()&&(state.phase==='won'||state.phase==='complete')?1:0);
  trophies.forEach((o,i)=>o.visible=i<count);hours.forEach((o,i)=>o.material=i<state.used?dark:copper);
  highlights.forEach((o,i)=>{o.visible=i===a||i===b;o.material=i===a?copper:blue;});
 }
 function render(){
  ui.querySelector('#still-readout').textContent=`заказ ${state.round+1}/3 · ${NAMES[state.round]} · ${state.used}/${LIMIT} ч\nесть: ${state.volumes.join(' / ')}\nнадо: ${GOALS[state.round].join(' / ')}`;
  ui.querySelector('#still-notice').textContent=busy()?'облако переливается…':notice;
  ui.querySelectorAll('select').forEach(el=>el.disabled=busy()||state.phase!=='ready');ui.querySelectorAll('button').forEach(el=>el.disabled=busy());
  badges.forEach((o,i)=>o.draw(''+state.volumes[i]));for(const sel of ui.querySelectorAll('select'))for(let i=0;i<4;i++)sel.options[i].textContent=`${i+1}: ${state.volumes[i]}/${CAP[i]}`;visuals(busy()?0:1);
 }
 function act(action){if(busy())return;localPlay();hint=null;const r=step(state,action,a,b);state=r.state;pour=r.pour;progress=pour?0:1;
  notice=!r.result.ok?'Нечего переливать. Выбери другую пару; час не потрачен.':state.phase==='spent'?'Шестнадцать часов ушли. Облако ещё не то; повтори заказ.':state.phase==='complete'?'Три облака готовы. Кит никуда не торопится.':state.phase==='won'?'Облако собрано. Следующий заказ?':'';persist();render();changed();return r;
 }
 ui.querySelector('#still-from').onchange=e=>{a=+e.target.value;visuals();changed();};ui.querySelector('#still-to').onchange=e=>{b=+e.target.value;visuals();changed();};
 ui.querySelector('#still-reset').onclick=()=>act('reset');ui.querySelector('#still-all').onclick=()=>act('all');
 ui.querySelector('#still-hint').onclick=()=>{if(busy())return;const p=solution(state);hint=p?.[0]||null;if(hint){a=hint.a;b=hint.b;ui.querySelector('#still-from').value=''+a;ui.querySelector('#still-to').value=''+b;notice=`Перелей ${a+1} → ${b+1}. До заказа ${p.length} переливов.`;}else notice=state.phase==='ready'?'Часов на этот путь уже не хватит. Повтори заказ.':'Этот заказ окончен.';render();changed();};
 function update(dt,time){if(busy()){progress=Math.min(1,progress+Math.max(0,Math.min(.1,dt))/1.65);visuals(progress);if(progress===1){render();changed();}}trophies.forEach((g,i)=>{g.position.y=.2+Math.sin(time*.7+i)*.07;});}
 render();persist();return {house,controls:ui,update,run:()=>act(state.phase==='ready'?'pour':state.phase==='won'?'next':state.phase==='complete'?'all':'reset'),card:()=>({action:busy()?'облако в трубе…':state.phase==='ready'?`перелить ${a+1} → ${b+1}`:state.phase==='won'?'следующий заказ →':state.phase==='complete'?'новая серия ↺':'повторить заказ ↺',disabled:busy(),description:'Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов.'}),inspect:()=>({...state,a,b,progress,pour,hint,notice,goal:GOALS[state.round],trophies:trophies.map(g=>g.visible),puffs:puffs.map(p=>({visible:p.o.visible,scale:p.o.scale.x})),flow:particles.map(p=>p.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})};
}
