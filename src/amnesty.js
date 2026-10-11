import runWorld from './amnesty-core.js';
export function createAmnesty({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed,watching,localPlay}){
 const house=group([0,-1.5,24]);house.name='amnesty-bureau';
 const wood=mat('#9d8560'),green=mat('#a1b56f'),paper=mat('#f1d29a'),stone=mat('#879c88');
 box([-3.65,-.14,0],[3.3,.5,7],stone,house);box([3.65,-.14,0],[3.3,.5,7],stone,house);
 box([0,-.8,0],[4.2,.1,6.7],M.dark,house);
 for(const x of [-4.9,4.9]){rod([x,0,-3],[x,3.3,-3],.06,M.copper,house);}
 sign('КАБАЧКОВАЯ АМНИСТИЯ',[0,3.25,-3],7,.65,house,{size:31});
 sign('НЕ ПЛАТИЛ. И НЕ НАДО.',[-3.5,1.35,-2.85],2.8,.4,house,{size:30});
 box([-3.6,.4,-1],[2.1,.16,3.8],wood,house);
 const bridge=group([0,.2,1.15],house);
 for(let i=0;i<11;i++)box([-2+i*.4,0,0],[.38,.16,1.65],wood,bridge);
 for(const z of [-.72,.72])rod([-2.2,.22,z],[2.2,.22,z],.045,M.copper,bridge);
 cyl([0,-.22,1.15],.32,.6,M.metal,house);
 const cart=group([-2.55,.32,1.15],house);box([0,.12,0],[1.5,.18,1.35],M.metal,cart);
 for(const x of [-.52,.52])for(const z of [-.58,.58]){const w=torus([x,0,z],.17,.05,M.dark,cart,[0,0,0]);w.rotation.y=Math.PI/2;}
 const lever=group([-4.7,.8,1.4],house);rod([0,-.5,0],[0,.2,0],.1,M.metal,lever);const handle=group([0,0,0],lever);rod([0,0,0],[0,.8,0],.065,M.copper,handle);sphere([0,.8,0],.14,M.rust,handle);
 sign('АМНИСТИЯ',[-4.6,.15,2.35],1.75,.35,house,{size:35});
 const counter=group([.1,.1,-2.3],house);box([0,.08,0],[1.6,.16,1.5],M.metal,counter);
 const ballast=cyl([0,.7,0],.57,1.1,M.copper,counter);torus([0,1.28,0],.25,.045,M.dark,counter);
 const lamps=Array.from({length:3},(_,i)=>sphere([1.75+i*.34,2.15,-3.05],.095,M.mint,house));
 const cargo=Array.from({length:3},(_,i)=>{
  const g=group([-3.6,.72,-2.1+i*1.08],house);const body=sphere([0,0,0],[.28,.23,.57],green,g);body.rotation.z=.1;
  rod([0,0,-.5],[.05,.12,-.68],.045,M.leaf,g);
  const tax=group([.45,.28,0],g);box([0,0,0],[.29,.57,.4],paper,tax);box([0,0,.21],[.18,.045,.012],M.rust,tax);
  return {g,tax};
 });
 sign('A',[-4.35,.75,-2.1],.28,.28,house);sign('B',[-4.35,.75,-1.02],.28,.28,house);sign('C',[-4.35,.75,.06],.28,.28,house);
 box([3.55,.8,-1.7],[2.75,.13,2.2],wood,house);
 const delivered=Array.from({length:6},(_,i)=>sphere([2.75+(i%3)*.7,1,-2.1+Math.floor(i/3)*.83],[.2,.19,.38],green,house));
 sign('ПРОЕХАЛИ',[3.6,1.75,-2.9],2.1,.4,house,{size:39});
 const path=group([0,0,0],root);
 // Continue the existing southern steps. The old courtyard is not enlarged.
 for(let i=0;i<15;i++){const u=i/14;box([-.6+Math.sin(u*Math.PI)*1.5,-1.55,17+i*.3],[.9,.12,.65],stone,path);}
 for(let i=0;i<5;i++)box([-.8-i*.6,-1.55,21.5],[.75,.12,.75],stone,path);
 sign('АМНИСТИЯ ↓',[-1.8,-.2,17.9],2.5,.4,path,{size:35});rod([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,M.copper,path);
 batchStatic(path,[]);batchStatic(house,[bridge,cart,lever,counter,...cargo.map(c=>c.g),...delivered,...lamps]);batchStatic(bridge,[]);batchStatic(cart,[]);
 let local=null,live=window.__beznogimState?.mechanics?.amnesty?.public||null,current,lastKey='',paperLift=0;
 try{local=JSON.parse(localStorage.getItem('beznogim-amnesty-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({state:local,mode,tool,args,world:{},now:Date.now()/1000});local=r.state;try{localStorage.setItem('beznogim-amnesty-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='amnesty-controls';ui.hidden=true;
 ui.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>';
 document.querySelector('#focus-object').before(ui);
 function data(){return live&&watching()?live:runWorld({state:local,mode:'migrate',world:{}}).public;}
 function action(t,args){localPlay();invoke('action',t,args);lastKey='';update(0,0);changed();}
 for(const b of ui.querySelectorAll('[data-load]'))b.onclick=()=>action('load',{index:Number(b.dataset.load)});
 ui.querySelector('#amnesty-pardon').onclick=()=>action('amnesty');ui.querySelector('#amnesty-restart').onclick=()=>action('restart');
 const messages={idle:'Выбери груз и попробуй мост.',under:'Легковато. Мост поднялся: добавь груз.',over:'Перевес. Мост опустился: убери груз или бумаги.',delivered:'Рейс прошёл. Кабачки уже на полке.',complete:'Три рейса. Шесть кабачков на свободе.'};
 function apply(d){current=d;const done=d.status==='delivered'||d.status==='complete';
  ui.querySelector('#amnesty-readout').textContent=`рейс ${d.round+1}/3 · груз ${d.total} / нужно ${d.target}`;
  ui.querySelectorAll('[data-load]').forEach((b,i)=>{b.textContent=`${['A','B','C'][i]} · ${d.weights[i]}${d.debt[i]?` + ${d.debt[i]} бумага`:''}`;b.setAttribute('aria-pressed',String(d.loaded[i]));b.disabled=done;});
  ui.querySelector('#amnesty-pardon').disabled=d.pardoned||done;
  ui.querySelector('#amnesty-pardon').textContent=d.pardoned?'налог отменён':'отменить налог';
  ballast.scale.y=d.target/4;lamps.forEach((l,i)=>l.visible=i<(d.status==='complete'?3:d.round));
  delivered.forEach((o,i)=>o.visible=i<d.delivered.length);
  cargo.forEach((c,i)=>{c.tax.visible=!d.pardoned||paperLift<.99;c.g.visible=!done||!d.loaded[i];c.g.scale.setScalar(.8+d.weights[i]*.08);});
 }
 function card(){const d=current||data();return {action:live&&watching()?'войти в свою амнистию':d.status==='delivered'?'следующий рейс':d.status==='complete'?'сыграть ещё раз':'отправить тележку',description:(live&&watching()?'Жизнь жителя. Кнопки откроют отдельную песочницу. ':'Твоя песочница. ')+messages[d.status]};}
 function update(dt,time){const d=data(),key=JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}
  const done=d.status==='delivered'||d.status==='complete';const lerp=(a,b)=>THREE.MathUtils.lerp(a,b,Math.min(1,dt*5));
  bridge.rotation.z=lerp(bridge.rotation.z,d.tilt);cart.position.x=lerp(cart.position.x,done?3:-2.55);
  handle.rotation.z=lerp(handle.rotation.z,d.pardoned?-.65:0);
  paperLift=lerp(paperLift,d.pardoned?1:0);cargo.forEach(c=>{c.tax.position.y=.28+paperLift*2.5;c.tax.rotation.z=paperLift*.8;c.tax.visible=!d.pardoned||paperLift<.99;});
  delivered.forEach((o,i)=>o.visible=i<d.delivered.length-(done&&cart.position.x<2.9?2:0));
  cargo.forEach((c,i)=>{const load=d.loaded[i];c.g.visible=!done||!load||cart.position.x<2.9;c.g.position.x=lerp(c.g.position.x,load?cart.position.x+(i-1)*.42:-3.6);c.g.position.y=lerp(c.g.position.y,load?.86:.72);c.g.position.z=lerp(c.g.position.z,load?1.15:-2.1+i*1.08);});
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.amnesty?.public;if(d){live=d;lastKey='';}});
 paperLift=data().pardoned?1:0;apply(data());
 return {house,controls:ui,update,card,run:()=>action(current.status==='delivered'?'next':current.status==='complete'?'restart':'dispatch'),inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,bridgeTilt:bridge.rotation.z,cartX:cart.position.x,cargoPositions:cargo.map(c=>c.g.position.toArray()),taxVisible:cargo.map(c=>c.tax.visible),paperY:cargo.map(c=>c.tax.position.y),handleAngle:handle.rotation.z,deliveredVisible:delivered.filter(c=>c.visible).length})};
}
