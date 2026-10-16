import {freshCloudDream,chooseCloud,actCloud,advanceCloud} from './cloud-dream-core.js';
export function createCloudDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream-06-cloud-heating';room.visible=false;
 const ink=mat('#203f49'),cloudMat=mat('#dce6d7'),copper=mat('#c87948',{metalness:.55,roughness:.33}),warm=mat('#ffcb74',{emissive:'#df7c29',emissiveIntensity:.7}),cold=mat('#598e9d'),paper=mat('#ede1c3');
 cyl([0,-.3,0],4,.4,ink,room);torus([0,-.06,0],3.85,.045,copper,room);
 for(let i=0;i<8;i++)rod([-3.0+i*.85,-.06,-2.5],[-3.0+i*.85,-.06,2.5],.012,cold,room);
 const radiator=group([-2.35,0,.2],room);box([0,.2,0],[1.7,.35,1.3],M.concrete,radiator);
 for(let i=0;i<6;i++){const x=-.65+i*.26;box([x,1.2,0],[.16,1.8,.66],copper,radiator);torus([x,2.12,0],.27,.065,copper,radiator,[0,Math.PI/2,0]);}
 rod([-.8,.45,.2],[.8,.45,.2],.11,copper,radiator);rod([-.8,1.95,.2],[.8,1.95,.2],.11,copper,radiator);
 const globe=sphere([-2.35,1.15,.87],.42,cold,room);torus([-2.35,1.15,.87],.48,.024,paper,room,[.5,.3,0]);
 // Two card-shaped valves. These are dream controls, not simulated real electronics.
 const cards=['ЗЕМЛЯ','ОБЛАКО'].map((t,i)=>{const g=group([-3.0+i*1.3,.4,2.1],room);box([0,0,0],[.87,.14,1.13],ink,g);for(let k=0;k<4;k++)box([-.27+k*.18,.09,-.28],[.08,.03,.25],warm,g);sign(t,[0,.12,.32],.78,.22,g,{size:52}).rotation.x=-Math.PI/2;return g;});
 const valve=torus([-2.8,.57,2.1],.5,.035,warm,room);valve.rotation.x=Math.PI/2;
 const pipe=group([0,0,0],room);rod([-1.5,.45,.2],[-.7,.45,.2],.09,copper,pipe);rod([-.7,.45,.2],[-.7,3.7,.2],.09,copper,pipe);rod([-.7,3.7,.2],[1.2,3.7,.2],.09,copper,pipe);
 const puffs=Array.from({length:7},(_,i)=>sphere([.1+i*.45,3.8+(i%2)*.22,-.8], [.65,.45,.63],cloudMat,room));
 const skyHouse=group([1.25,3.1,-.8],room);box([0,.2,0],[2.6,.1,1.7],paper,skyHouse);
 for(const x of [-1.15,1.15])for(const z of [-.7,.7])rod([x,.2,z],[x,1.28,z],.045,copper,skyHouse);
 const roof=group([0,1.26,0],skyHouse);box([-.61,.15,0],[1.45,.12,1.95],cloudMat,roof).rotation.z=.35;box([.61,.15,0],[1.45,.12,1.95],cloudMat,roof).rotation.z=-.35;
 const shutters=[box([-.68,.8,.72],[.48,.57,.06],warm,skyHouse),box([.68,.8,.72],[.48,.57,.06],warm,skyHouse)];
 const locations=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],houses=[],windows=[];
 locations.forEach(([x,y,z],i)=>{const g=group([x,y,z],room);houses.push(g);box([0,.05,0],[1.2,.13,1.1],M.concrete,g);for(const xx of [-.5,.5])rod([xx,.1,-.38],[xx,1.1,-.38],.045,copper,g);rod([-.5,1.1,-.38],[0,1.5,-.38],.045,copper,g);rod([0,1.5,-.38],[.5,1.1,-.38],.045,copper,g);const w=group([1.25,3.9,-.05],room);windows.push(w);box([0,0,0],[.65,.72,.12],paper,w);box([0,0,.071],[.48,.55,.035],warm,w);rod([0,-.28,.10],[0,.28,.10],.018,copper,w);rod([-.23,0,.10],[.23,0,.10],.018,copper,w);});
 const heatDots=Array.from({length:10},()=>sphere([0,0,0],.065,warm,room));
 const sleeper=head.clone(true);sleeper.scale.setScalar(.4);sleeper.position.set(-2.0,.9,-1.7);room.add(sleeper);
 sign('СОН / 06',[0,-.04,3.3],1.5,.29,room,{size:52}).rotation.x=-Math.PI/2;
 const trace=group([-5.13,.95,1.14],root);box([0,0,0],[.23,.32,.06],copper,trace);box([0,0,.04],[.13,.22,.02],warm,trace);trace.visible=false;
 batchStatic(room,[radiator,globe,...cards,valve,pipe,...puffs,skyHouse,...houses,...windows,...heatDots,sleeper]);batchStatic(radiator,[]);batchStatic(pipe,[]);batchStatic(skyHouse,[roof,...shutters]);batchStatic(roof,[]);houses.forEach(g=>batchStatic(g,[]));windows.forEach(g=>batchStatic(g,[]));cards.forEach(g=>batchStatic(g,[]));
 let s=freshCloudDream(),active=false,warmth=0,spent=0,traceSaved=false;
 try{traceSaved=JSON.parse(localStorage.getItem('beznogim-dream06-v1')||'{}').trace===true;}catch{}trace.visible=traceSaved;
 function enter(){s=freshCloudDream();warmth=0;spent=0;active=true;room.visible=true;root.visible=false;update(0,0);}
 function exit(){active=false;room.visible=false;root.visible=true;}
 function choose(target){s=chooseCloud(s,target);chime(target==='sky'?330:165);changed();}
 function act(){s=actCloud(s);chime(s.phase==='raining'?440:220);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceCloud(s,dt);
  const heating=s.phase==='heating',sky=s.target==='sky';
  const u=sky?(heating?s.progress:['cloud','raining','settled'].includes(s.phase)?1:0):0;warmth=u;
  spent=s.phase==='raining'?s.progress:s.phase==='settled'?1:0;
  skyHouse.visible=u>.02;skyHouse.scale.setScalar(Math.max(.001,u));skyHouse.position.y=3.1+Math.sin(time*.9)*.05;
  puffs.forEach((g,i)=>{g.position.y=3.8+(i%2)*.22+u*.5-spent*.25;g.scale.set(.65+u*.12,.45*(1-u*.6),.63);});
  globe.scale.setScalar(.42*(heating&&!sky?1+Math.sin(s.progress*Math.PI)*.75:1));globe.rotation.y=time*.2;
  windows.forEach((g,i)=>{const t=Math.max(0,Math.min(1,(spent*1.6-i*.3))),e=t*t*(3-2*t);const to=locations[i];g.position.set(1.25+(to[0]-1.25)*e,3.9+(to[1]+.8-3.9)*e,-.05+(to[2]+.06+.05)*e);g.rotation.z=(1-e)*Math.sin(time+i)*.1;g.visible=['cloud','raining','settled'].includes(s.phase);});
  shutters.forEach(g=>g.visible=s.phase==='cloud'||heating);valve.position.x=sky?-1.7:-3;
  heatDots.forEach((g,i)=>{g.visible=heating;const p=(time*.7+i/10)%1;if(sky){if(p<.72)g.position.set(-.7,.45+p/.72*3.25,.2);else g.position.set(-.7+(p-.72)/.28*1.9,3.7,.2);}else g.position.set(-2.35+Math.sin(p*Math.PI*2)*.6,.5+p*1.8,.87);});
  if(s.trace&&!traceSaved){traceSaved=true;trace.visible=true;try{localStorage.setItem('beznogim-dream06-v1',JSON.stringify({trace:true}));}catch{}}
  if(s.phase!==old)changed();
 }
 const text=()=>({ready:s.target==='sky'?'В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.':'Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.',heating:s.target==='sky'?'Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.':'Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.',cloud:'Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.',raining:'Из облака идёт оконный дождь. Окна ищут себе соседей.',settled:'Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе.'})[s.phase];
 return {enter,exit,choose,act,update,text,button:()=>s.phase==='raining'?'окна падают…':s.phase==='heating'?'тепло идёт…':s.phase==='settled'?'увидеть сон снова':s.phase==='cloud'?'пустить оконный дождь ↓':'пустить тепло ↑',inspect:()=>({...s,active,trace:traceSaved,warmth,spent,globeScale:globe.scale.x/.42,rootVisible:root.visible,roomVisible:room.visible,houseVisible:skyHouse.visible,windows:windows.map(g=>g.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...locations.map(p=>[p[0],.8,p[2]])]})};
}
