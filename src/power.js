import * as THREE from 'three';
import run from './garage-core.js';
export function createPower({root,mat,group,box,sphere,cyl,rod,torus,sign,changed}){
 const house=group([48,-1.6,-24],root);house.name='hybrid-power-station';
 const cream=mat('#d7cbae'),dark=mat('#374d4e'),teal=mat('#4e8273'),rust=mat('#ad6143'),gold=mat('#e3b44d'),blue=mat('#284e6b',{metalness:.3}),glass=mat('#bbd2b5',{transparent:true,opacity:.32}),red=mat('#a64e3c');
 box([0,0,0],[17,.3,14],cream,house);
 // Open-front machine hall with two genuinely independent engine sets.
 box([-2.6,1.9,-4],[9.8,3.6,.23],teal,house);box([-7.4,1.9,-1.8],[.2,3.6,4.5],teal,house);
 for(const x of [-7.2,2])rod([x,.2,-3.8],[x,4.4,-3.8],.1,rust,house);
 box([-2.6,4.4,-3.2],[9.9,.18,1.8],dark,house);
 sign('ТЭЦ · ДВА ПО 250',[-2.6,3.65,-3.79],8.7,.65,house,{size:48,bg:'#4e8273',fg:'#fff0c7'});
 const rotors=[],unitLamps=[];
 for(let i=0;i<2;i++){const x=-5.2+i*4.4;
  box([x,.5,-1.8],[3.6,.55,2.7],dark,house);box([x,1.3,-1.8],[2.2,1.1,1.6],teal,house);
  for(let j=0;j<5;j++)box([x-1+j*.45,1.4,-.91],[.12,.9,.12],cream,house);
  const r=group([x+.6,1.5,-.8],house);torus([0,0,0],.54,.13,dark,r);for(let j=0;j<4;j++){const a=j*Math.PI/2;rod([0,0,0],[Math.cos(a)*.48,Math.sin(a)*.48,0],.04,gold,r);}rotors.push(r);
  rod([x,1.8,-2.2],[x,4.9,-2.2],.14,rust,house);cyl([x,5,-2.2],.24,.25,dark,house);
  const lm=mat('#99b95c',{emissive:'#79ab39',emissiveIntensity:.4});sphere([x-1.3,1.8,-.87],.12,lm,house);unitLamps.push(lm);
  sign('0'+(i+1)+' / 250 кВт',[x,.67,-.39],2.7,.33,house,{size:42,bg:'#374d4e',fg:'#eee2b8'});
 }
 // Compact tilted photovoltaic tables, kept low so they do not hide the hall.
 for(let z=0;z<3;z++)for(let x=0;x<4;x++){
  const px=-6+x*2.1,pz=1.3+z*1.7;
  rod([px,.2,pz],[px,.95,pz],.05,dark,house);const p=box([px,1.1,pz],[1.9,.1,1.35],blue,house);p.rotation.x=-.25;
  for(let k=0;k<3;k++)rod([px-.7+k*.7,1.2,pz-.6],[px-.7+k*.7,1.2,pz+.6],.014,cream,house);
 }
 sign('PV 300 кВтп',[-2.7,.4,6.2],4,.38,house,{size:44,bg:'#284e6b',fg:'#fff0c7'});
 // Battery container with visible state-of-charge bars.
 box([5.6,1.2,-3],[3.5,2.2,3.2],dark,house);const batteryBars=[];
 for(let i=0;i<8;i++){const m=mat('#75a788');box([4.2+i*.4,1.2,-1.37],[.26,1.3,.055],m,house);batteryBars.push(m);}
 sign('800 кВт·ч / 200 кВт',[5.6,2.5,-1.3],3.6,.4,house,{size:37,bg:'#374d4e',fg:'#fff0c7'});
 // A heat exchanger, modest pipes and a finite gas tank.
 for(let i=0;i<5;i++)rod([3.2,.5,0+i*.22],[4.5,.5,0+i*.22],.07,rust,house);
 rod([0,1,-2.5],[3.5,1,-2.5],.1,rust,house);rod([3.5,1,-2.5],[3.5,.5,1],.1,rust,house);
 cyl([6.1,1.1,0],.72,1.8,cream,house);sphere([6.1,2,0],[.72,.25,.72],cream,house);
 sign('ГАЗ · НТС',[6.1,1.25,.74],1.3,.3,house,{size:35,bg:'#ad6143',fg:'#fff0c7'});
 // New consumer only: a small electrically driven propagation greenhouse.
 box([5.1,.5,4],[4.4,.6,3.4],rust,house);box([5.1,1.8,4],[4.2,2,3.3],glass,house);
 for(const x of [3,7.2])for(const z of [2.4,5.6])rod([x,.7,z],[x,2.9,z],.05,cream,house);
 for(let i=0;i<6;i++)sphere([3.5+i*.6,.95,4],[.16,.45,.16],teal,house);
 const lampMat=mat('#fff2ae',{emissive:'#ffe586',emissiveIntensity:.7});for(let i=0;i<3;i++)sphere([3.7+i*1.3,2.55,4],.14,lampMat,house);
 const fan=group([5.1,2,5.75],house);for(let i=0;i<4;i++){const a=i*Math.PI/2;rod([0,0,0],[Math.cos(a)*.5,Math.sin(a)*.5,0],.09,dark,fan);}
 sign('РАССАДНИК · 20 кВт',[5.1,.4,5.78],4,.35,house,{size:40,bg:'#4e8273',fg:'#fff0c7'});
 rod([1,.25,-1],[2.6,.25,2],.045,gold,house);rod([2.6,.25,2],[5.1,.25,2.4],.045,gold,house);
 const links=group([0,0,0],root);
 // Paving connects the old cellar without moving any old place.
 for(let i=0;i<37;i++)box([24+i*24/37,-1.56,-i*24/37],[.57,.12,.9],cream,links);
 const cable=mat('#70523c');const poles=[[28,-4],[34,-10],[41,-17],[48,-22]];
 for(const [x,z] of poles){rod([x,-1.6,z],[x,3,z],.08,rust,links);rod([x-.7,2.8,z],[x+.7,2.8,z],.055,dark,links);}
 for(let i=0;i<poles.length-1;i++){const [x,z]=poles[i],[xx,zz]=poles[i+1];rod([x,2.9,z],[(x+xx)/2,2.3,(z+zz)/2],.025,cable,links);rod([(x+xx)/2,2.3,(z+zz)/2],[xx,2.9,zz],.025,cable,links);}
 let local=null;try{local=JSON.parse(localStorage.getItem('beznogim-power-v1')||'null');}catch{}
 if(!local||typeof local!=='object'||Array.isArray(local))local=null;
 let live=window.__beznogimState?.mechanics?.garage?.public?.energy||null,sandbox=!live,current=null,last=-1,message='',drawKey='';
 const invoke=(mode,args={})=>{const r=run({mode,tool:args.energy==='trip'||args.energy==='repair'?'launch':'pump',args,state:local,now:Math.floor(Date.now()/1000),world:{position:[48,.6,-24]}});local=r.state;try{localStorage.setItem('beznogim-power-v1',JSON.stringify(local));}catch{}return r;};invoke('migrate');
 const ui=document.createElement('section');ui.id='power-controls';ui.hidden=true;ui.innerHTML=`<output id="power-readout"></output><div id="power-stores"></div><div class="power-buttons"><button id="power-step">+1 энерго-час</button><button id="power-trip">отказ блока 1</button><button id="power-repair">ремонт 1</button><button id="power-off">оба выкл.</button><button id="power-on">оба вкл.</button><button id="power-delivery">поставка газа</button></div><div class="power-buttons"><button id="power-night">ночь без газа</button><button id="power-cloud">пасмурно</button></div><button id="power-sandbox">своя песочница</button><small id="power-message"></small><details><summary>энергобаланс и модель</summary><p>1 энергетический час = 120 реальных секунд. 2×250 кВт; PV300 кВтп; батарея800 кВт·ч / 200 кВт. Газ: кВт·ч НТС, электрический КПД40%, тепло45%. Заряд и разряд по95%. Склад800000 невозобновляемый; бак500000; поставка до100000 раз в24 энерго-часа. Батарея не источник энергии. Рассадник20 кВт входит в общую синтетическую нагрузку, свет и вентилятор зависят от снабжения. Старые места не отключаются.</p><p>100 кВт исходно - авторский масштаб. ×1.5428374077 из условного сценария. Не измерение, прогноз или инженерный проект, не доказательство оптимальности газа. Кнопки - только локальная песочница.</p><a href="./power-design/report.html" target="_blank">расчёт, допущения и Python</a></details>`;
 document.querySelector('#focus-object').before(ui);
 function act(args){if(!sandbox)return;const r=invoke('action',args);message=r.result?.ok?'принято':r.result?.reason;drawKey='';update();changed();}
 ui.querySelector('#power-trip').onclick=()=>act({energy:'trip',unit:1});ui.querySelector('#power-repair').onclick=()=>act({energy:'repair',unit:1});
 for(const en of [false,true])ui.querySelector(en?'#power-on':'#power-off').onclick=()=>{act({energy:'dispatch',unit:1,enabled:en});act({energy:'dispatch',unit:2,enabled:en});};
 ui.querySelector('#power-delivery').onclick=()=>act({energy:'delivery'});
 ui.querySelector('#power-step').onclick=()=>{if(!sandbox)return;local.energy.last-=120;invoke('tick');drawKey='';update();};
 ui.querySelector('#power-night').onclick=()=>{if(!sandbox)return;Object.assign(local.energy,{gas:0,battery:0,hour:0});invoke('tick');drawKey='';update();};
 ui.querySelector('#power-cloud').onclick=()=>{if(!sandbox)return;local.energy.weather=local.energy.weather==='overcast'?'clear':'overcast';invoke('tick');drawKey='';update();};
 ui.querySelector('#power-sandbox').onclick=()=>{sandbox=live?!sandbox:true;drawKey='';update();};
 function update(dt=0){const sec=Math.floor(Date.now()/1000);if(sandbox&&sec!==last){invoke('tick');last=sec;}current=!sandbox&&live?live:local.energy;const f=current.flow||{},k=JSON.stringify([current,sandbox,message]);
 rotors.forEach((r,i)=>{const available=current.units[i]&&!current.tripped[i],active=available&&f.gen>0;r.rotation.z+=dt*(active?2:0);unitLamps[i].color.set(current.tripped[i]?'#b83f2d':!current.units[i]?'#65746c':active?'#a5c367':'#e3b44d');unitLamps[i].emissiveIntensity=active?.6:0;});
 fan.rotation.z+=dt*4*(f.served/(f.load||1));lampMat.emissiveIntensity=f.consumer==='running'?.9:f.consumer==='slow'?.3:0;lampMat.color.set(f.consumer==='stopped'?'#6b796e':'#fff2ae');
 batteryBars.forEach((m,i)=>m.color.set(current.battery>i*100?'#83ac6c':'#394b4c'));
 if(k===drawKey)return;drawKey=k;const n=x=>Math.round(x||0).toLocaleString('ru-RU');
 ui.querySelector('#power-readout').textContent=(sandbox?'твоя модель':'станция жителя')+' · час '+current.hour.toFixed(1)+' · '+((current.hour%24)<6||(current.hour%24)>=18?'ночь':'день')+'\nнагрузка '+n(f.load)+' / ТЭЦ '+n(f.gen)+' / PV '+n(f.pv)+' кВт\nбатарея '+n(f.charge)+'↓ '+n(f.discharge)+'↑ кВт · дефицит '+n(f.deficit)+' кВт';
 ui.querySelector('#power-stores').textContent='заряд '+n(current.battery)+'/800 кВт·ч · газ '+n(current.gas)+' кВт·ч НТС\nсклад '+n(current.depot)+' кВт·ч НТС · рассадник '+({running:'работает',slow:'медленно',stopped:'стоит'}[f.consumer]||'ждёт')+'\nблоки: '+current.units.map((on,i)=>current.tripped[i]?'отказ':on?'авто':'выкл').join(' / ')+'\n1 энерго-час = 120 с · тепло '+n(f.heat)+' кВт';
 ui.querySelector('#power-message').textContent=message||'два независимых блока · конечное топливо';ui.querySelector('#power-sandbox').textContent=sandbox&&live?'смотреть жителя':'своя песочница';
 for(const b of ui.querySelectorAll('.power-buttons button'))b.disabled=!sandbox;
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.garage?.public?.energy;if(d){if(!live)sandbox=false;live=d;drawKey='';}});update();
 function geometryPoints(){const p=[];house.updateWorldMatrix(true,true);house.traverse(o=>{if(!o.isMesh)return;const v=o.geometry.attributes.position;for(let i=0;i<v.count;i++)p.push(new THREE.Vector3().fromBufferAttribute(v,i).applyMatrix4(o.matrixWorld));});return p;}
 return {house,controls:ui,update,geometryPoints,inspect:()=>({sandbox,current,units:2,fan:fan.rotation.z,lamp:lampMat.emissiveIntensity,pathSteps:37}),card:()=>({action:'осмотреть электростанцию',description:'Малая гибридная ТЭЦ: два независимых блока, солнце и батарея. '+(sandbox?'Отдельная песочница.':'Сохраняемая станция жителя.')})};
}
