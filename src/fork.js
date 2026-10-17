import {WAVES,LIMITS,normalize,step,solution,saved,route,shotPose} from './fork-core.js';
export function createFork({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed,localPlay}){
 const house=group([-23,-1.1,-32],root);house.name='backup-fork';
 const dark=mat('#263f46'),silver=mat('#c5ccbe',{metalness:.65,roughness:.3}),amber=mat('#e4bc77'),colors=['#e8b86c','#98cfbc','#bfabc9','#98bde0'].map(c=>mat(c,{emissive:c,emissiveIntensity:.5}));
 box([.5,-.27,0],[9,.4,6.5],M.concrete,house);box([0,-.01,0],[6.6,.1,5.8],dark,house);
 for(const x of [-2.8,2.8])for(const z of [-2.4,2.4])box([x,-.6,z],[.14,1.2,.14],M.metal,house);
 // Short labels need square textures; the yard's long sign canvas makes digits too small.
 function token(text,p,w,h,parent){const o=sign(text,p,w,h,parent),c=o.material.map.image;c.width=c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#29464b';ctx.fillRect(0,0,128,128);ctx.strokeStyle='#e4dfc8';ctx.lineWidth=3;ctx.strokeRect(5,5,118,118);ctx.fillStyle='#fff1c9';ctx.font='bold 90px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);o.material.map.needsUpdate=true;return o;}
 const points=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],ends=[-2.8,-.9,.9,2.8];
 const track=(a,b)=>{rod(a,b,.075,silver,house);for(const dx of [-.14,.14])rod([a[0]+dx,a[1]+.08,a[2]],[b[0]+dx,b[1]+.08,b[2]],.025,M.copper,house);};
 track([0,1.4,-2.5],points[0]);for(let i=0;i<2;i++){track(points[0],points[i+1]);for(let j=0;j<2;j++)track(points[i+1],[ends[i*2+j],.4,2]);}
 const switches=points.map((p,i)=>{const g=group(p,house);cyl([0,0,0],.24,.13,M.copper,g);const lever=group([0,.13,0],g);rod([0,0,0],[0,.07,.66],.055,amber,lever);sphere([0,.07,.66],.14,silver,lever);token(['А','Б','В'][i],[.48,.38,-.08],.55,.5,g);return lever;});
 const lamps=ends.map((x,i)=>{cyl([x,.15,2],.29,.32,M.copper,house);torus([x,.37,2],.27,.04,colors[i],house);token(String(i+1),[x,.74,2.65],.7,.65,house);return sphere([x,.49,2],[.16,.2,.16],colors[i],house);});
 const preview=ends.map((x,i)=>{const g=group([x,.22,2],house);box([0,0,0],[.66,.06,.7],colors[i],g);return g;});
 const incoming=sphere([0,1.57,-2.5],.18,colors[0],house),rolling=sphere([0,1.57,-2.5],.18,colors[0],house);
 const bucket=group([4,-.3,2.5],house);cyl([0,0,0],.4,.55,dark,bucket);torus([0,.28,0],.4,.045,silver,bucket);const lost=sphere([0,.21,0],.18,amber,bucket);
 box([3.9,.05,-.7],[1.25,.15,3.1],M.copper,house);
 const archive=Array.from({length:12},(_,i)=>{const g=group([3.6+(i%2)*.57,.18,-1.9+Math.floor(i/2)*.48],house);cyl([0,0,0],.12,.14,dark,g);return sphere([0,.16,0],.13,colors[WAVES.flat()[i]],g);});
 sign('ВИЛКА / РЕЗЕРВ',[0,.55,-2.9],3.8,.4,house,{size:42});
 for(let i=0;i<4;i++)box([-25,-1.42,-28.7-i*.62],[.7,.1,.44],M.cream,root);
 batchStatic(house,[...switches.map(g=>g.parent),...lamps,...preview,incoming,rolling,bucket,...archive]);
 let state;try{state=normalize(JSON.parse(localStorage.getItem('beznogim-fork-v1')||'null'));}catch{state=normalize();}
 let shot=null,progress=1,notice='',hinted=null;
 const ui=document.createElement('div');ui.id='fork-controls';ui.hidden=true;
 ui.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+['А','Б','В'].map((n,i)=>`<button id="fork-flip-${i}" aria-label="Переключить развилку ${n}">${n} ←</button>`).join('')+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>';
 document.querySelector('#focus-object').before(ui);
 function persist(){try{localStorage.setItem('beznogim-fork-v1',JSON.stringify(state));}catch{}}
 const busy=()=>progress<1;
 function render(){
  const remaining=WAVES[state.wave].slice(state.cursor).map(n=>n+1).join(' → ')||'всё на месте';
  ui.querySelector('#fork-readout').textContent=`волна ${state.wave+1}/3 · сохранено ${saved(state)}/12\nочередь: ${remaining}\nручные щелчки ${state.used}/${LIMITS[state.wave]} · путь сейчас → ${route(state.switches).bay+1}`;
  ui.querySelector('#fork-notice').textContent=busy()?'катится…':notice;
  const visualSwitches=busy()&&shot?shot.before:state.switches;
  switches.forEach((g,i)=>{g.rotation.y=(visualSwitches[i]?1:-1)*.68;const b=ui.querySelector('#fork-flip-'+i);b.textContent=['А','Б','В'][i]+(state.switches[i]?' →':' ←');b.setAttribute('aria-pressed',String(!!state.switches[i]));b.disabled=busy()||state.phase!=='ready'||state.used>=LIMITS[state.wave];b.classList.toggle('hinted',hinted?.action==='flip'&&hinted.index===i);});
  for(const b of ui.querySelectorAll('.fork-tools button'))b.disabled=busy();
  incoming.visible=state.phase==='ready'&&!busy();incoming.material=colors[WAVES[state.wave][state.cursor]||0];
  const displayCursor=state.cursor-(busy()&&shot?.success?1:0);
  lamps.forEach((g,i)=>g.visible=WAVES[state.wave].slice(0,displayCursor).includes(i));preview.forEach((g,i)=>g.visible=route(visualSwitches).bay===i);
  archive.forEach((g,i)=>g.visible=i<saved(state)-(busy()&&shot?.success?1:0));lost.visible=state.phase==='spilled'&&!busy();lost.material=colors[WAVES[state.wave][state.cursor]||0];rolling.visible=busy();
 }
 function act(action,index){if(busy())return;localPlay();hinted=null;const r=step(state,action,index);state=r.state;shot=r.shot;progress=shot?0:1;notice=r.result.reason==='budget'?'Ручные щелчки кончились. Можно повторить волну.':state.phase==='spilled'?'Не то гнездо. Лампочка в ведре; повтори эту волну.':state.phase==='rounddone'?'Волна сохранена. Дальше очередь другая.':state.phase==='complete'?'Все двенадцать на полке. Вилка сработала.':'';persist();render();changed();return r;}
 ['А','Б','В'].forEach((_,i)=>ui.querySelector('#fork-flip-'+i).onclick=()=>act('flip',i));
 ui.querySelector('#fork-reset').onclick=()=>act('restart');ui.querySelector('#fork-all').onclick=()=>act('all');
 ui.querySelector('#fork-hint').onclick=()=>{if(busy())return;const p=solution(state);hinted=p?.[0]||null;notice=hinted?hinted.action==='release'?'Сейчас можно отпустить лампочку.':`Щёлкни развилку ${['А','Б','В'][hinted.index]}.`:state.phase==='ready'?'С этими щелчками уже не сохранить волну. Повтори её.':'Эта волна закончилась.';render();changed();};
 function update(dt){if(!busy())return;const old=progress;progress=Math.min(1,progress+Math.min(.1,Math.max(0,dt))/2.8);rolling.position.set(...shotPose(shot,progress));rolling.position.y+=.17;rolling.material=colors[shot.target];if(progress===1&&old<1){render();changed();}}
 render();persist();
 return {house,controls:ui,update,run:()=>act(state.phase==='complete'?'all':state.phase==='rounddone'?'next':state.phase==='spilled'?'restart':'release'),card:()=>({action:busy()?'лампочка катится…':state.phase==='complete'?'новая серия ↺':state.phase==='rounddone'?'следующая волна →':state.phase==='spilled'?'повторить волну ↺':'отпустить лампочку',disabled:busy(),description:'Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам.'}),inspect:()=>({...state,saved:saved(state),queue:WAVES[state.wave],limit:LIMITS[state.wave],path:route(state.switches).bay,progress,shot,notice,hinted,rolling:rolling.position.toArray(),archive:archive.map(g=>g.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})};
}
