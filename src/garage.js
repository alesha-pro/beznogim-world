import {garageFlight} from './garage-flight.js';
import runWorld from './garage-core.js';
export function createGarage({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed,watching,localPlay}){
 const house=group([-24,-1.5,-24],root);house.name='pneumatic-garage-range';
 const cream=mat('#eee0b7'),ink=mat('#29464b'),orange=mat('#d87b4d'),mint=mat('#94b9a0'),red=mat('#a84a3b');
 box([0,-.1,0],[21,.6,10],M.concrete,house);box([0,.24,0],[20,.1,5],ink,house);
 for(let x=-9;x<10;x++)box([x,.31,2],[.55,.03,.06],cream,house);
 // The red collector's car really stays behind when its garage takes off.
 const car=group([-8,.45,0],house);car.name='car-stays-home';box([0,.21,0],[1.1,.3,.62],red,car);box([-.07,.47,0],[.58,.27,.54],cream,car);for(const x of [-.35,.35])for(const z of [-.35,.35])sphere([x,.04,z],[.16,.16,.10],ink,car);
 const garage=group([-8,.37,0],house);garage.name='flying-garage';
 for(const x of [-.9,.9])box([x,.74,0],[.12,1.5,1.6],mint,garage);box([0,.74,-.75],[1.8,1.5,.12],mint,garage);box([0,1.35,.76],[1.7,.27,.12],cream,garage);
 for(const x of [-1,1]){const roof=box([x*.49,1.69,0],[1.16,.13,1.95],orange,garage);roof.rotation.z=x*-.32;}
 sign('Г',[0,1.4,.86],.42,.29,garage,{size:70});
 const jets=[];for(const x of [-.74,.74])for(const z of [-.59,.59]){cyl([x,-.04,z],.15,.23,M.metal,garage);jets.push(box([x,-.32,z],[.12,.5,.12],cream,garage));}
 const pad=group([0,.35,0],house);box([0,0,0],[2.5,.12,2.2],cream,pad);box([0,.07,0],[1.95,.035,1.65],mint,pad);sign('ПОСАДКА',[0,.24,1.18],2.2,.3,pad,{size:50});
 const gate=group([0,.34,0],house);const gateBar=box([0,.5,0],[.32,1,2.1],orange,gate);for(const z of [-1.2,1.2])rod([0,0,z],[0,3.4,z],.04,M.metal,gate);
 const gateLabel=sign('ПРОБКА',[0,.7,1.3],1.5,.3,gate,{size:50});
 const spring=group([0,.33,0],house);box([0,0,0],[1.6,.12,2],M.copper,spring);for(let i=0;i<5;i++)box([0,.1+i*.12,0],[1.1,.04,1.4],cream,spring);
 const tank=group([-8,.6,3.4],house);cyl([0,.65,0],.4,1.3,M.copper,tank);rod([0,1.3,0],[0,1.8,0],.07,ink,tank);rod([-.5,1.8,0],[.5,1.8,0],.07,ink,tank);
 const airBars=Array.from({length:6},(_,i)=>box([.7,.14+i*.24,0],[.24,.17,.12],mint,tank));
 const shelf=group([3,.6,3.7],house);box([0,0,0],[3.8,.2,.9],M.copper,shelf);
 const trophies=Array.from({length:3},(_,i)=>{const g=group([-1.1+i*1.1,.2,0],shelf);box([0,.1,0],[.65,.2,.55],ink,g);sphere([0,.56,0],[.3,.34,.27],cream,g);box([0,.57,.22],[.39,.19,.08],ink,g);return g;});
 sign('ДОПУСКА НЕТ',[0,.8,-3.9],4,.5,house,{size:55});sign('МАШИНА ДОМА',[-8,.9,2],2.8,.32,house,{size:50});
 // A few stepping stones join the port, not another road across the whole frontier.
 for(let i=0;i<21;i++)box([-24,-1.42,-6-i*.65],[.9,.12,.49],M.cream,root);
 batchStatic(garage,jets);batchStatic(house,[car,garage,pad,gate,spring,tank,shelf]);
 let local=null,live=window.__beznogimState?.mechanics?.garage?.public||null,current,lastKey='',lastSource='',flight=null,progress=1,notice='';
 try{local=JSON.parse(localStorage.getItem('beznogim-garage-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({mode,tool,args,state:local});local=r.state;try{localStorage.setItem('beznogim-garage-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='garage-controls';ui.hidden=true;
 ui.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(v=>`<option>${v}</option>`).join('')+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(v=>`<option>${v}</option>`).join('')+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>';
 document.querySelector('#focus-object').before(ui);
 const data=()=>live&&watching()?live:runWorld({mode:'migrate',state:local}).public;
 const source=()=>live&&watching()?'resident':'sandbox';
 function action(t,args){if(progress<1)return;localPlay();const r=invoke('action',t,args);notice=r.result?.reason==='empty'?'Баллон пуст для этого импульса. Накачай снова.':'';update(0);changed();return r;}
 ui.querySelector('#garage-pump').onclick=()=>action('pump',{power:Number(ui.querySelector('#garage-power').value),angle:Number(ui.querySelector('#garage-angle').value)});
 ui.querySelector('#garage-reset').onclick=()=>action('launch',{mode:'restart'});
 function refreshUI(){if(!current)return;const d=current;ui.querySelector('#garage-readout').textContent=`испытание ${d.level}/3 · пролёт ${d.gap} · пробка ${d.barrier}\nвоздух ${d.air}/6 · дальность ${d.range} · вершина ${d.apex}\nпосадки ${d.landed}/3 · попытки ${d.attempts}`;ui.querySelector('#garage-notice').textContent=notice;
  for(const el of ui.querySelectorAll('select,#garage-pump'))el.disabled=progress<1||['landed','complete'].includes(d.phase);ui.querySelector('#garage-reset').disabled=progress<1;
 }
 function apply(d){const initial=!current||lastSource!==source()||current.run!==d.run;lastSource=source();
  if(initial){flight=d.flight;progress=1;notice='';}
  else if(d.flight&&(!current.flight||current.flight.seq!==d.flight.seq)){flight=d.flight;progress=0;}
  else if(!d.flight){flight=null;progress=1;}
  current=d;ui.querySelector('#garage-power').value=d.power;ui.querySelector('#garage-angle').value=d.angle;
  pad.position.x=-8+d.gap*.7;gate.position.x=-8+d.gap*.35;gateBar.scale.y=d.barrier*.5;gateBar.position.y=d.barrier*.25;gateLabel.position.y=d.barrier*.5+.4;
  trophies.forEach((g,i)=>g.visible=i<d.landed);airBars.forEach((b,i)=>b.visible=i<d.air);refreshUI();
 }
 function update(dt){dt=Math.min(.1,Math.max(0,dt));const d=data(),key=source()+':'+JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}
  const was=progress;progress=Math.min(1,progress+dt/3.6);const {x,y}=garageFlight(flight,progress);
  garage.position.set(-8+x*.7,.37+y*.5,0);garage.rotation.z=progress<1?Math.sin(progress*Math.PI*2)*.045:0;spring.visible=!!flight&&['short','far'].includes(flight.outcome);spring.position.x=-8+(flight?.range||0)*.7;
  jets.forEach(j=>j.visible=progress>0&&progress<.65);if(was<1&&progress===1){refreshUI();changed();}
 }
 const card=()=>({action:source()==='resident'?'попробовать свой гараж':progress<1?'гараж в воздухе…':current.phase==='complete'?'новая серия ↺':current.phase==='landed'?'следующее испытание →':'прыгнуть гаражом',description:(source()==='resident'?'Полигон жителя. Здесь можно открыть свою отдельную партию. ':'Твой полигон. ')+current.message,disabled:progress<1});
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.garage?.public;if(d)live=d;});
 apply(data());lastKey=source()+':'+JSON.stringify(data());update(0);
 return {house,controls:ui,update,card,run:()=>action('launch',{mode:current.phase==='complete'?'restart':current.phase==='landed'?'next':'jump'}),inspect:()=>({source:source(),...current,progress,notice,garage:garage.position.toArray(),car:car.position.toArray(),trophies:trophies.map(g=>g.visible)})};
}
