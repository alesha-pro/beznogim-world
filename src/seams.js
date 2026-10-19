import {LIMIT,normalize,step,solution,pressure} from './seams-core.js';
export function createSeams({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed,localPlay}){
 const house=group([-24,-1.1,-48],root);house.name='head-seams';
 const metal=mat('#405e62',{metalness:.55,roughness:.4}),copper=mat('#bd8757',{metalness:.6,roughness:.35}),light=mat('#e9dfbb'),dark=mat('#233e40'),mint=mat('#93beb0'),amber=mat('#efa250',{emissive:'#c38535',emissiveIntensity:.3});
 box([0,-.25,.5],[7.8,.5,7.6],M.concrete,house);box([0,.04,0],[4.4,.18,3.7],dark,house);
 const skull=group([0,0,0],house),rings=[],angles=[],handles=[];
 // Face fragments are attached to real rotating drums, not camera-facing labels.
 for(let i=0;i<3;i++){
  const y=2.95-i*.88,g=group([0,y,0],skull);rings.push(g);cyl([0,0,0],1.4,.8,[light,mint,copper][i],g);
  torus([0,.35,0],1.4,.045,dark,g);torus([0,-.35,0],1.4,.045,dark,g);
  box([0,0,1.4],[.16,.66,.07],light,g); // the front witness line
  if(i===0){for(let x of [-.5,.5]){sphere([x,0,1.31],[.27,.23,.13],dark,g);sphere([x+.025,.02,1.43],.075,light,g);}sphere([0,.43,0],[1.15,.25,1.1],light,g);}
  if(i===1){box([0,-.06,1.52],[.36,.5,.4],light,g);for(let x of [-.5,.5])rod([x-.2,-.23,1.35],[x+.2,-.23,1.35],.045,dark,g);}
  if(i===2){for(let x of [-1,1]){rod([0,.12,1.43],[x*.7,.22,1.3],.09,dark,g);rod([x*.7,.22,1.3],[x*.9,.05,1.2],.06,dark,g);}box([0,-.13,1.39],[.55,.07,.07],dark,g);}
  const h=group([-2.6+i*2.6,.55,2.35],house);handles.push(h);cyl([0,-.15,0],.6,.18,metal,h);const wheel=torus([0,.08,0],.38,.06,copper,h);wheel.rotation.x=Math.PI/2;rod([0,-.3,0],[0,.4,0],.065,metal,h);sphere([0,.48,0],.14,amber,h);
  sign(''+(i+1),[-2.6+i*2.6,.15,2.9],.55,.4,house,{size:80});
 }
 // A fixed front arrow prevents "all equal, but facing away" from looking solved.
 box([0,.2,1.95],[.13,.12,.7],amber,house);const arrow=box([0,.2,1.7],[.38,.12,.38],amber,house);arrow.rotation.y=Math.PI/4;
 const staples=[];
 for(let i=0;i<3;i++){
  const g=group([-2.7+i*2.7,.3,3.55],house);cyl([0,-.1,0],.7,.15,metal,g);const trophy=group([0,.18,0],g);for(let x of [-.32,.32])rod([x,0,0],[x,.65,0],.075,copper,trophy);rod([-.32,.65,0],[.32,.65,0],.075,copper,trophy);staples.push(trophy);
 }
 const clamps=[];for(let y of [1.61,2.49])for(let x of [-1,1]){const g=group([x*.85,y,1.2],skull);rod([0,-.28,0],[0,.28,0],.05,copper,g);sphere([0,-.28,0],.085,metal,g);sphere([0,.28,0],.085,metal,g);clamps.push(g);}
 const instruction=sign('НЕ ОШИБАЙСЯ',[0,4.22,-.3],3.5,.65,house,{size:48});
 const lamp=sphere([2.5,2.3,-.5],.19,amber,house);rod([2.5,.15,-.5],[2.5,2.3,-.5],.045,metal,house);
 sign('ШОВНАЯ',[0,.28,-3],3,.45,house,{size:52});
 const p=group([0,0,0],root);for(let i=0;i<17;i++)box([-24+Math.sin(i*.4)*.25,-1.48,-35.3-i*.53],[.75,.12,.37],M.cream,p);batchStatic(p,[]);
 batchStatic(house,[skull,instruction,lamp,...handles,...staples]);
 let state;try{state=normalize(JSON.parse(localStorage.getItem('beznogim-seams-v1')||'null'));}catch{state=normalize();}
 let progress=1,motion=null,hint=null,notice='';
 rings.forEach((g,i)=>{g.rotation.y=state.turns[i]*Math.PI/2;angles[i]=g.rotation.y;});
 const ui=document.createElement('div');ui.id='seams-controls';ui.hidden=true;ui.innerHTML='<output id="seams-readout"></output><div class="seams-row">'+[0,1,2].map(i=>`<button data-seam="${i}">${i+1} ↻</button>`).join('')+'</div><div class="seams-row"><button id="seams-hint">намёк</button><button id="seams-reset">повтор</button><button id="seams-all">новая серия</button></div><output id="seams-notice" aria-live="polite"></output><details id="seams-help"><summary>как держится голова</summary><small>Ручка поворачивает своё кольцо на 90°, следующее на 180°: 1→2, 2→3, 3→1. Выстрой лицо по передней светлой метке за 9 ходов, затем испытай инструкцией. Все три числа должны стать 0. Намёк показывает кратчайший путь; отказ бесплатный. Повтор сохраняет прежние скобы. Локальная игра посетителя, не здоровье жителя.</small></details>';
 document.querySelector('#focus-object').before(ui);
 const persist=()=>{try{localStorage.setItem('beznogim-seams-v1',JSON.stringify(state));}catch{}};
 const busy=()=>progress<1;
 function visuals(){
  const press=motion?.kind==='test'&&busy()?pressure(progress):0;
  skull.scale.set(1+press*.12,1+press*.08,1+press*.12);skull.position.y=press*.08;
  if(motion?.kind==='turn'&&busy())rings.forEach((g,i)=>g.rotation.y=motion.before[i]+(angles[i]-motion.before[i])*(progress*progress*(3-2*progress)));
  else rings.forEach((g,i)=>g.rotation.y=angles[i]);
  instruction.scale.setScalar(motion?.kind==='test'&&busy()?1+press*.12:1);instruction.rotation.z=press*Math.sin(progress*28)*.025;
  const held=state.tested||motion?.kind==='test';clamps.forEach(o=>o.visible=held);
  staples.forEach((g,i)=>g.visible=i<state.round+(state.tested&&!busy()?1:0));lamp.material=state.phase==='aligned'||state.tested?mint:amber;
 }
 function render(){ui.querySelector('#seams-readout').textContent=`сборка ${state.round+1}/3 · ${state.used}/${LIMIT} ходов\nкольца: ${state.turns.join(' / ')} → 0 / 0 / 0`;
  ui.querySelector('#seams-notice').textContent=busy()?(motion.kind==='test'?'инструкция давит. скобы держат…':'кольца сцеплены…'):notice;
  ui.querySelectorAll('[data-seam]').forEach((b,i)=>{b.disabled=busy()||state.phase!=='ready';b.classList.toggle('hinted',hint===i);b.setAttribute('aria-label',`ручка ${i+1}: своё кольцо +1, следующее +2`);});
  ui.querySelectorAll('#seams-hint,#seams-reset,#seams-all').forEach(b=>b.disabled=busy());visuals();
 }
 function act(action,i){if(busy())return;localPlay();const before=angles.slice(),r=step(state,action,i);if(!r.ok){notice='Сначала совмести лицо. Ход не потрачен.';render();changed();return r;}
  state=r.state;hint=null;motion=null;
  if(action==='turn'){angles[i]+=Math.PI/2;angles[(i+1)%3]+=Math.PI;motion={kind:'turn',before};progress=0;}
  else if(action==='test'){motion={kind:'test'};progress=0;}
  else{progress=1;rings.forEach((g,j)=>angles[j]=state.turns[j]*Math.PI/2);}
  notice=state.phase==='spent'?'Ходы кончились, швы ещё криво. Повтори сборку.':state.phase==='aligned'?'Лицо на месте. Теперь проверка инструкцией.':state.phase==='won'?'Выдержала. Скоба остаётся на полке.':state.phase==='complete'?'Три скобы. Голова пока цела.':'';
  persist();render();changed();return r;
 }
 ui.querySelectorAll('[data-seam]').forEach((b,i)=>b.onclick=()=>act('turn',i));ui.querySelector('#seams-reset').onclick=()=>act('reset');ui.querySelector('#seams-all').onclick=()=>act('all');
 ui.querySelector('#seams-hint').onclick=()=>{if(busy())return;const p=solution(state);hint=p?.[0]??null;notice=hint!==null?`Ручка ${hint+1}. До ровных швов ${p.length} ходов.`:state.phase==='ready'?'Оставшихся ходов не хватит. Повтори сборку.':state.phase==='aligned'?'Всё ровно. Испытай инструкцией.':'Сборка закончена.';render();changed();};
 function update(dt){if(!busy())return;progress=Math.min(1,progress+Math.max(0,Math.min(.1,dt))/(motion.kind==='test'?2.6:.7));visuals();if(progress===1){render();changed();}}
 render();persist();return {house,controls:ui,update,run:()=>act(state.phase==='aligned'?'test':state.phase==='won'?'next':state.phase==='complete'?'all':state.phase==='spent'?'reset':'test'),card:()=>({action:busy()?'стягивается…':state.phase==='aligned'?'испытать: «не ошибайся»':state.phase==='won'?'следующая сборка →':state.phase==='complete'?'новая серия ↺':state.phase==='spent'?'повторить сборку ↺':'сначала совмести кольца',disabled:busy()||state.phase==='ready',description:'Три ручки сцеплены. Собери лицо; инструкция проверит швы.'}),inspect:()=>({...state,progress,motion,hint,notice,angles:rings.map(g=>g.rotation.y),scale:skull.scale.toArray(),clamps:clamps.map(g=>g.visible),staples:staples.map(g=>g.visible),landmarks:[[-27.3,-.9,-44.1],[-20.7,-.9,-44.1],[-24,3.7,-48.3],[-24,-.5,-51]]})};
}
