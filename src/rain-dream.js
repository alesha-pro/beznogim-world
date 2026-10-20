import {freshRainDream,foldRain,actRain,advanceRain,rainPose,rainParticle,rainBusy} from './rain-dream-core.js';
export function createRainDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,tube,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream10-paper-hour';room.visible=false;
 const paper=mat('#eadbc0'),blue=mat('#63969e',{metalness:.18,roughness:.35}),dark=mat('#284a53'),copper=M.copper;
 const floor=group([0,-.25,0],room);box([0,0,0],[8,.18,6.4],dark,floor);for(let i=0;i<3;i++)box([(i-1)*2.4,.12,-2.1],[1.8,.02,1.4],blue,floor);
 const clock=group([0,4.3,-.65],room);clock.rotation.y=Math.PI/4;
 const dial=torus([0,0,0],1.25,.045,copper,clock,[0,0,0]);
 const ticks=[];for(let i=0;i<12;i++){const a=i*Math.PI/6,g=group([Math.sin(a)*1.25,Math.cos(a)*1.25,0],clock);g.rotation.z=-a;box([0,0,0],[.15,.38,.045],paper,g);ticks.push(g);}
 const hand=group([0,0,.05],clock);box([0,.48,0],[.045,.96,.045],M.mint,hand);sphere([0,0,.02],.09,copper,hand);
 const sheets=[],halves=[];
 for(let i=0;i<3;i++){const g=group([(i-1)*2.4,2.5,0],room);sheets.push(g);const pair=[];for(const side of [-1,1]){const h=group([0,0,0],g);box([side*.48,0,0],[.96,.045,1.5],paper,h);for(let k=0;k<4;k++)box([side*.48,.028,-.48+k*.3],[.68,.006,.008],blue,h);pair.push(h);}halves.push(pair);cyl([0,-.8,-.6],.035,1.6,copper,g);sign(String(i+1),[0,.1,.85],.6,.25,g,{size:60});}
 const base=group([0,0,1.65],room);for(const x of [-1.9,1.9])for(const z of [-.8,.8])cyl([x,.25,z],.055,.5,copper,base);box([0,.36,0],[4.2,.12,1.9],copper,base);
 const bed=group([0,.55,1.65],room),wings=[];box([0,0,0],[1.4,.12,1.9],paper,bed);
 for(const side of [-1,1]){const g=group([side*.7,0,0],bed);box([side*.7,0,0],[1.4,.12,1.9],paper,g);tube([[0,-.08,-.8],[side*1.3,-.08,0],[0,-.08,.8]],.022,copper,g);wings.push(g);}
 const waters=[];for(let i=0;i<3;i++)waters.push(box([(i-1)*1.3,.09,0],[1.22,.025,1.65],blue,bed));
 const pillow=box([-1.4,.18,0],[.8,.22,1.3],M.mint,bed);
 const handle=tube([[0,.04,0],[0,1.65,0],[.15,1.86,0],[.4,1.8,0],[.4,1.6,0]],.055,copper,bed);handle.visible=false;
 const dreamHead=head.clone(true);dreamHead.scale.setScalar(.4);dreamHead.position.set(-1.2,.96,1.8);room.add(dreamHead);
 const drops=[];for(let i=0;i<36;i++)drops.push(box([0,0,0],[.065,.22,.025],i%2?paper:blue,room));
 sign('ЧАС ДОЖДЯ / БЕЗ ГРОМА',[0,-.05,3.05],3.4,.27,room,{size:44});
 const trace=group([-3.9,1.12,.1],root);const little=torus([0,0,0],.13,.018,copper,trace,[Math.PI/2,0,0]);for(let i=0;i<3;i++)box([(i-1)*.09,-.2,0],[.035,.12,.015],paper,trace);trace.visible=false;
 batchStatic(floor,[]);batchStatic(base,[]);sheets.forEach((g,i)=>batchStatic(g,halves[i]));halves.flat().forEach(g=>batchStatic(g,[]));wings.forEach(g=>batchStatic(g,[]));batchStatic(trace,[]);
 let s=freshRainDream(),active=false,traceSaved=false;try{traceSaved=JSON.parse(localStorage.getItem('beznogim-dream10-v1')||'{}').trace===true;}catch{}trace.visible=traceSaved;
 function enter(){s=freshRainDream();active=true;root.visible=false;room.visible=true;update(0,0);}
 function exit(){active=false;root.visible=true;room.visible=false;}
 function fold(i){if(!active)return;const n=foldRain(s,i);if(n===s)return;s=n;chime(220+i*70);update(0,0);changed();}
 function act(){if(!active)return;const n=actRain(s);if(n===s)return;s=n;chime(350);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceRain(s,dt);const p=rainPose(s);halves.forEach((pair,i)=>pair.forEach((h,k)=>h.rotation.z=s.folds[i]?(k===0?-.42:.42):0));
  bed.position.y=.55+p.lift;bed.rotation.z=p.flip;wings.forEach((g,i)=>g.rotation.z=(i===0?-1:1)*p.wing);waters.forEach((g,i)=>{g.visible=s.water[i]>0&&s.open<.1;g.scale.z=Math.max(.001,s.water[i]);g.material.opacity=1;});pillow.scale.y=1-s.open*.8;handle.visible=s.open>0;clock.position.set(.4*p.reverse,p.clockY,-.65+2.65*p.reverse);clock.rotation.x=p.clockTilt;clock.rotation.y=Math.PI/4*(1-p.reverse);clock.scale.setScalar(p.clockScale);hand.rotation.z=-p.hand;ticks.forEach((g,i)=>{g.visible=s.phase!=='raining'||i>=Math.floor(s.progress*12);});
  dreamHead.position.y=.96-s.open*.28;dreamHead.rotation.z=-s.open*.35;
  drops.forEach((g,i)=>{g.visible=s.phase==='raining'||s.open>0;g.position.set(...rainParticle(s,i,time));g.rotation.z=s.open>0?.25:Math.sin(time+i)*.25;g.scale.y=s.open>0?.6:1;});
  if(s.phase==='shelter'&&!traceSaved){traceSaved=true;trace.visible=true;try{localStorage.setItem('beznogim-dream10-v1',JSON.stringify({trace:true}));}catch{}}
  if(old!==s.phase)changed();
 }
 return {enter,exit,fold,act,update,busy:()=>rainBusy(s),text:()=>s.phase==='shelter'?'Час уснул в кровати. Кровать стала зонтом; дождь идёт обратно в небо. Я пока останусь снизу.':s.phase==='turning'?'Вода уснула. Кровать выворачивается, час ложится на её место.':s.phase==='raining'?'Час выжимается в дождь. Согнутые листы наливают кровать; с плоских всё стекает мимо.':`Согни три листа желобами и пропусти час. Кровать выпила ${s.water.filter(v=>v===1).length} из 3 струй. Можно по одной, без спешки.`,button:()=>s.phase==='shelter'?'увидеть сон снова':rainBusy(s)?'час проходит…':'дать часу пройти · 6 секунд',inspect:()=>({...s,active,trace:traceSaved,pose:rainPose(s),sheetAngles:halves.map(pair=>pair.map(h=>h.rotation.z)),bed:bed.position.toArray(),bedAngle:bed.rotation.z,wingAngles:wings.map(g=>g.rotation.z),clock:clock.position.toArray(),clockScale:clock.scale.x,clockAngles:[clock.rotation.x,clock.rotation.y],waterVisible:waters.map(g=>g.visible),waterScale:waters.map(g=>g.scale.z),handleVisible:handle.visible,drops:drops.map(g=>g.position.toArray()),rootVisible:root.visible,roomVisible:room.visible,landmarks:[[-4.1,-.4,-3.4],[4.1,-.4,3.4],[0,5.8,-.7],[0,3.5,2.7]]})};
}
