import {SIZES,ROUTES,RULES,normalize,step,pose} from './scale-core.js';
export function createScale({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed,localPlay}){
 const house=group([24,-1.1,-48],root);house.name='box-scale-range';
 const ink=mat('#29464b'),cream=mat('#eee2c0'),orange=mat('#ca784e'),mint=mat('#89bba5'),steel=mat('#9db3ad',{metalness:.6}),red=mat('#b55545');
 box([0,-.35,0],[15.6,.45,7],M.concrete,house);box([0,-.06,0],[14.8,.15,3.4],ink,house);
 for(const x of [-6.8,6.8])for(const z of [-2.6,2.6])box([x,-.6,z],[.16,1.1,.16],steel,house);
 const pads=[];for(let i=0;i<4;i++){const x=-5.4+i*3.6;box([x,.08,0],[2.1,.18,2.7],cream,house);pads.push(box([x,.19,1.03],[.7,.04,.2],mint,house));}
 const obstacles=[];
 for(let i=0;i<3;i++){
  const at=group([-3.6+i*3.6,.16,0],house),rails=group([0,0,0],at),tunnel=group([0,0,0],at),balance=group([0,0,0],at);
  for(const z of [-.65,.65]){box([0,0,z],[1.6,.13,.16],steel,rails);for(const x of [-.65,.65])box([x,-.15,z],[.1,.3,.2],orange,rails);}
  box([0,0,0],[1.6,.13,2.6],ink,tunnel);for(const z of [-.85,.85])box([0,.55,z],[.65,1.1,.8],orange,tunnel);box([0,1.03,0],[.65,.14,2.5],orange,tunnel);for(const z of [-.47,.47])box([0,.67,z],[.72,.12,.06],cream,tunnel);
  const lift=group([0,0,0],balance);box([0,.02,0],[1.6,.14,2.3],mint,lift);box([0,-.22,0],[.22,.45,.24],steel,balance);for(const z of [-1.2,1.2]){rod([0,0,z],[0,1.3,z],.04,steel,balance);sphere([0,1.3,z],.09,cream,balance);}
  const label=sign('',[0,.4,1.8],2,.34,at,{size:40});label.rotation.y=Math.PI/4;
  obstacles.push({at,rails,tunnel,balance,lift,label});
 }
 // The box is separate from the road and deliberately bounded: no huge occluder.
 const reference=group([-5.1,.36,2.4],house);box([0,0,0],[1.05,.42,.62],cream,reference);box([0,.22,0],[.82,.025,.48],red,reference);for(let i=0;i<4;i++){rod([-.7,-.12,-.21+i*.14],[-.3,-.12,-.21+i*.14],.022,cream,reference);sphere([-.72,-.12,-.21+i*.14],.04,red,reference);}
 const ruler=group([-.6,.4,2.6],house);box([0,0,0],[2.9,.06,.5],orange,ruler);for(let i=0;i<13;i++)box([-1.3+i*.21,.04,0],[.025,.025,i%3===0?.4:.2],ink,ruler);
 const car=group([-5.4,.28,0],house);car.name='reference-sized-car';box([0,.3,0],[1.4,.35,.7],ink,car);box([-.05,.6,0],[.7,.3,.61],mint,car);box([.13,.62,0],[.05,.26,.63],ink,car);for(const z of [-.26,.26])box([.7,.34,z],[.03,.12,.12],cream,car);const wheels=[];for(const x of [-.46,.46])for(const z of [-.4,.4]){const w=group([x,.17,z],car);const tire=cyl([0,0,0],.18,.12,ink,w);tire.rotation.x=Math.PI/2;const hub=cyl([0,0,0],.09,.13,steel,w);hub.rotation.x=Math.PI/2;box([0,0,.08],[.025,.18,.025],cream,w);wheels.push(w);}
 // It is the builder's head in the model car, not the server resident's body.
 sphere([-.18,.85,0],.15,cream,car);for(const z of [-.15,.15])sphere([-.1,.88,z],.027,ink,car);
 const stamps=Array.from({length:3},(_,i)=>{const g=group([-5.4+i*3.6,.27,1],house);cyl([0,0,0],.22,.07,orange,g);box([0,.08,0],[.22,.1,.12],ink,g);return g;});
 const flags=Array.from({length:3},(_,i)=>{const g=group([4.5+i*.7,.2,2.3],house);rod([0,0,0],[0,1.3,0],.035,steel,g);box([.2,1.12,0],[.4,.3,.04],[mint,orange,cream][i],g);return g;});
 const title=sign('ЗАТО ВИДНО МАСШТАБ',[.4,.6,-2.8],5,.5,house,{size:40});title.rotation.y=Math.PI/4;
 for(let i=0;i<27;i++)box([4.5+i*.47,-1.48,-47.5+Math.sin(i*.3)*.2],[.34,.12,.7],M.cream,root);
 batchStatic(house,[car,reference,ruler,...stamps,...flags,...obstacles.map(o=>o.at)]);
 let state;try{state=normalize(JSON.parse(localStorage.getItem('beznogim-scale-v1')||'null'));}catch{state=normalize();}
 let shot=null,progress=1,notice='';const ui=document.createElement('div');ui.id='scale-controls';ui.hidden=true;
 ui.innerHTML='<output id="scale-readout"></output><div class="scale-row">'+['огромный коробок','обычный коробок','маленький коробок'].map((v,i)=>`<button data-scale-size="${i}">${v}<small>${['машина ×½','машина ×1','машина ×1.6'][i]}</small></button>`).join('')+'</div><div id="scale-route"></div><output id="scale-notice" aria-live="polite"></output><div class="scale-row"><button id="scale-undo">назад ↶</button><button id="scale-reset">повтор</button><button id="scale-all">новая серия</button></div><details><summary>почему так</summary><small>Мера меняет машину, дорога остаётся прежней. Менять размер можно на четырёх площадках. Тоннель принимает маленькую, широкая колея - большую, весы - среднюю. Неверный размер возвращает на площадку. «Назад» отменяет последний проход, «повтор» сбрасывает маршрут. Пройди три маршрута. Коробок - условная мера, не физика и не настоящий размер спичек. Это твоя отдельная игра; жизнь жителя не меняется.</small></details>';
 document.querySelector('#focus-object').before(ui);
 function persist(){try{localStorage.setItem('beznogim-scale-v1',JSON.stringify(state));}catch{}}
 const busy=()=>progress<1;
 function visuals(){
  const route=ROUTES[state.round];obstacles.forEach((o,i)=>{o.rails.visible=route[i]==='rails';o.tunnel.visible=route[i]==='tunnel';o.balance.visible=route[i]==='balance';o.lift.position.y=shot?.from===i?pose(shot,progress).lift:0;});
  car.scale.setScalar(SIZES[state.size]);reference.scale.setScalar(1/SIZES[state.size]);const p=shot?pose(shot,progress):{x:state.passed.length*3.6,y:0,tilt:0,wheel:0};car.position.set(-5.4+p.x,.28+p.y,0);car.rotation.z=p.tilt;wheels.forEach(w=>w.rotation.z=-p.wheel);
  stamps.forEach((o,i)=>{o.visible=i<state.passed.length&&(!busy()||i<shot.from);o.scale.setScalar(SIZES[state.passed[i]]||1);});flags.forEach((o,i)=>o.visible=i<state.round+(state.passed.length===3&&!busy()?1:0));
 }
 function render(){ui.querySelector('#scale-readout').textContent=`маршрут ${state.round+1}/3 · площадка ${state.passed.length+1}/4 · машина ×${SIZES[state.size]}\n`+(state.phase==='ready'?`впереди ${RULES[ROUTES[state.round][state.passed.length]].name}`:'груз доставлен');
  ui.querySelectorAll('[data-scale-size]').forEach((b,i)=>{b.disabled=busy()||state.phase!=='ready';b.setAttribute('aria-pressed',i===state.size);});
  ui.querySelector('#scale-route').innerHTML=ROUTES[state.round].map((k,i)=>`<span class="${i<state.passed.length?'done':i===state.passed.length?'here':''}">${i+1} ${RULES[k].name}</span>`).join('<i>→</i>');ui.querySelector('#scale-notice').textContent=busy()?(shot.ok?'едет…':'не тот масштаб…'):notice;for(const id of ['undo','reset','all'])ui.querySelector('#scale-'+id).disabled=busy()||(id==='undo'&&!state.passed.length);visuals();}
 // Canvas labels are rebuilt in-place; no textures or meshes are created per action.
 function labels(){obstacles.forEach((o,i)=>{const c=o.label.material.map.image,ctx=c.getContext('2d');ctx.fillStyle='#29464b';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#eee2c0';ctx.font='bold 54px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(RULES[ROUTES[state.round][i]].name.toUpperCase(),c.width/2,c.height/2);o.label.material.map.needsUpdate=true;});}
 function act(action,arg){if(busy())return;localPlay();const r=step(state,action,arg);state=r.state;if(r.shot){shot=r.shot;progress=0;notice=r.ok?'Проехал. На площадке можно менять размер.':RULES[r.shot.obstacle].why;}else{shot=null;notice='';}labels();persist();render();changed();return r;}
 ui.querySelectorAll('[data-scale-size]').forEach((b,i)=>b.onclick=()=>act('size',i));for(const a of ['undo','reset','all'])ui.querySelector('#scale-'+a).onclick=()=>act(a);
 labels();render();persist();return {house,controls:ui,run:()=>act(state.phase==='won'?'next':state.phase==='complete'?'all':'cross'),card:()=>({action:busy()?'машина в пути…':state.phase==='won'?'следующий маршрут →':state.phase==='complete'?'новая серия ↺':'проехать участок →',description:'Коробок для масштаба. Теперь от него зависит, пролезет ли машина.',disabled:busy()}),update:dt=>{if(busy()){progress=Math.min(1,progress+Math.max(0,Math.min(.1,dt))/1.6);visuals();if(!busy()){render();changed();}}},inspect:()=>({...state,notice,progress,shot,car:car.position.toArray(),carScale:car.scale.toArray(),referenceScale:reference.scale.toArray(),carTilt:car.rotation.z,wheels:wheels.map(w=>w.rotation.z),stamps:stamps.map(o=>({visible:o.visible,scale:o.scale.toArray()})),flags:flags.map(o=>o.visible),obstacles:obstacles.map(o=>({rails:o.rails.visible,tunnel:o.tunnel.visible,balance:o.balance.visible,lift:o.lift.position.y})),landmarks:[[16.2,-1.7,-51.5],[31.8,1,-44.5],[24,1,-48]]})};
}
