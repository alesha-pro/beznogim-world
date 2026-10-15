import {freshMeterDream,chooseMeterTarget,actMeter,advanceMeter} from './meter-dream-core.js';
export function createMeterDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream-05-self-measuring-instrument';room.visible=false;
 const enamel=mat('#8ebcb2',{metalness:.35,roughness:.38}),silver=mat('#d3eeed',{metalness:.85,roughness:.18}),paper=mat('#f1e7c7'),ink=mat('#1c4147'),water=mat('#547d83',{metalness:.5,roughness:.28});
 cyl([0,-.42,0],3.8,.45,ink,room);cyl([0,-.16,0],3.45,.08,water,room);torus([0,-.10,0],3.65,.07,M.copper,room);
 for(let i=0;i<5;i++)torus([0,-.10+i*.006,0],.7+i*.52,.009,silver,room);
 const base=group([0,0,0],room);box([0,.12,-1.6],[3.0,.34,1.3],M.concrete,base);rod([0,.3,-1.65],[0,3.75,-1.65],.12,enamel,base);
 const dial=group([0,3.7,-1.4],room);const back=cyl([0,0,-.12],1.05,.20,ink,dial);back.rotation.x=Math.PI/2;
 torus([0,0,0],1.05,.085,M.copper,dial,[0,0,0]);
 // Split face really opens. Its scale is baked, not a shrinking giant sphere.
 const faceL=group([-.85,0,.02],dial),faceR=group([.85,0,.02],dial);
 box([.425,0,0],[.85,1.72,.10],paper,faceL);box([-.425,0,0],[.85,1.72,.10],paper,faceR);
 for(let i=0;i<12;i++){const a=i*Math.PI/6;rod([Math.sin(a)*.78,Math.cos(a)*.78,.09],[Math.sin(a)*.91,Math.cos(a)*.91,.09],.016,M.copper,dial);}
 const needle=group([0,0,.14],dial);rod([0,-.15,0],[0,.69,0],.025,ink,needle);sphere([0,0,0],.065,M.copper,needle);
 const jaws=[group([-2.35,1.65,0],room),group([2.35,1.65,0],room)];
 for(const [i,g]of jaws.entries()){box([0,0,0],[.24,1.65,.38],enamel,g);box([i===0?.38:-.38,-.76,0],[.95,.18,.38],silver,g);sphere([0,.84,0],.19,M.copper,g);}
 const steps=[],start=[],end=[];
 for(let i=0;i<12;i++){
  const x=-2.45+i*.445;start.push(new THREE.Vector3(x,2.52,0));
  const u=i/11,a=u*Math.PI*1.35;end.push(new THREE.Vector3(2.35*Math.cos(a)*(1-u*.85),.24+u*3.0,2.05-u*3.2));
  const g=group(start[i].toArray(),room);steps.push(g);box([0,0,0],[.42,.16,.57],enamel,g);box([0,.09,.15],[.03,.012,.20],M.copper,g);
 }
 const drop=sphere([0,.7,0],[.45,.64,.45],silver,room);
 const sleeper=head.clone(true);room.add(sleeper);sleeper.scale.setScalar(.43);const home=new THREE.Vector3(2.8,.65,2.15);sleeper.position.copy(home);
 function pointer(parent,scale){const shape=new THREE.Shape();[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.10,-.32],[-.44,-.58]].forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth:.07,bevelEnabled:false});const g=group([0,0,0],parent);mesh(geo,paper,null,null,g);g.scale.setScalar(scale);return g;}
 const cursor=pointer(dial,.88);cursor.position.set(0,.10,.20);cursor.visible=false;
 const nested=pointer(cursor,.22);nested.position.set(-.03,-.20,.12);const hole=box([-.03,-.20,.085],[.34,.44,.01],ink,cursor);
 const tracePointer=pointer(root,.17);tracePointer.position.set(2.80,1.14,-2.75);tracePointer.rotation.y=Math.PI/4;
 sign('СОН / 05',[0,-.055,2.94],1.65,.30,room,{size:48}).rotation.x=-Math.PI/2;
 sign('СЕБЯ?',[0,.36,-.88],1.05,.26,room,{size:52});
 const question=sign('?',[-1.6,.65,1.5],.48,.65,room,{size:84,bg:'#1c4147'});
 const targetRing=torus([0,.12,0],.68,.035,M.light,room);
 batchStatic(room,[base,dial,...steps,...jaws,drop,sleeper,question,targetRing]);batchStatic(base,[]);batchStatic(dial,[faceL,faceR,needle,cursor]);batchStatic(faceL,[]);batchStatic(faceR,[]);batchStatic(needle,[]);batchStatic(cursor,[nested,hole]);batchStatic(nested,[]);steps.forEach(g=>batchStatic(g,[]));jaws.forEach(g=>batchStatic(g,[]));
 let s=freshMeterDream(),active=false,unfold=0,opened=0,trace=false;
 try{trace=JSON.parse(localStorage.getItem('beznogim-dream05-v1')||'{}').trace===true;}catch{}tracePointer.visible=trace;
 function enter(){s=freshMeterDream();unfold=0;opened=0;active=true;room.visible=true;root.visible=false;update(0,0);}
 function exit(){active=false;room.visible=false;root.visible=true;}
 function choose(target){s=chooseMeterTarget(s,target);chime(target==='self'?330:165);changed();}
 function act(){s=actMeter(s);chime(s.phase==='climbing'?440:220);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceMeter(s,dt);
  const u=s.phase==='unfolding'?s.progress:['stairs','climbing','inside'].includes(s.phase)?1:0;unfold=u*u*(3-2*u);
  opened=THREE.MathUtils.damp(opened,s.phase==='inside'?1:0,3,dt);
  steps.forEach((g,i)=>{g.position.lerpVectors(start[i],end[i],unfold);g.rotation.y=unfold*(-i*.07);});
  const squeeze=s.phase==='measuring'?Math.sin(s.progress*Math.PI):0;
  jaws.forEach((g,i)=>{const side=i===0?-1:1;g.position.set(side*(2.35-squeeze*1.55),1.65+unfold*.4,-unfold*.85);g.rotation.z=side*unfold*.65;});
  needle.rotation.z=s.phase==='measuring'?Math.sin(s.progress*35)*.8:s.phase==='refused'?Math.sin(time*6)*.25:-unfold*Math.PI*1.75;
  drop.position.y=.7+(s.phase==='measuring'?Math.sin(s.progress*Math.PI)*1.5:Math.sin(time*1.3)*.05);drop.scale.set(.45*(1-squeeze*.16),.64*(1+squeeze*.3),.45*(1-squeeze*.16));
  question.visible=s.phase==='refused';question.position.y=.65+Math.sin(time*2)*.1;
  faceL.rotation.y=opened*1.7;faceR.rotation.y=-opened*1.7;needle.visible=opened<.2;cursor.visible=s.phase==='inside';cursor.rotation.z=Math.sin(time*.7)*.04;nested.rotation.z=-time*.12;
  sleeper.position.copy(home);sleeper.scale.setScalar(.43);sleeper.visible=s.phase!=='inside';
  if(['climbing','inside'].includes(s.phase)){
   const p=s.phase==='inside'?1:s.progress;const route=[home,...end.map(v=>v.clone().add(new THREE.Vector3(0,.45,0))),new THREE.Vector3(0,3.7,-1.02)];
   const t=p*(route.length-1),i=Math.min(route.length-2,Math.floor(t));sleeper.position.lerpVectors(route[i],route[i+1],Math.min(1,t-i));sleeper.scale.setScalar(.43*(1-p*.80));
  }
  targetRing.position.set(s.target==='self'?0:0,s.target==='self'?3.7:.12,s.target==='self'?-1.4:0);targetRing.rotation.x=s.target==='self'?0:Math.PI/2;targetRing.visible=['ready','refused','measuring','unfolding'].includes(s.phase);
  if(s.trace&&!trace){trace=true;tracePointer.visible=true;try{localStorage.setItem('beznogim-dream05-v1',JSON.stringify({trace:true}));}catch{}}
  if(old!==s.phase)changed();
 }
 function text(){return ({ready:s.target==='drop'?'Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.':'Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.',measuring:'Губки сходятся. Капля вытягивается и ускользает.',refused:'Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.',unfolding:'Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.',stairs:'Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.',climbing:'Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.',inside:'В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же.'})[s.phase];}
 const button=()=>s.phase==='inside'?'увидеть сон снова':s.phase==='stairs'?'подняться в показание ↑':'измерить ↗';
 return {enter,exit,choose,act,update,text,button,inspect:()=>({...s,active,trace,unfold,opened,rootVisible:root.visible,roomVisible:room.visible,steps:steps.map(g=>g.position.toArray()),jaws:jaws.map(g=>g.position.toArray()),drop:drop.position.toArray(),head:sleeper.position.toArray(),cursorVisible:cursor.visible,cursorPosition:cursor.getWorldPosition(new THREE.Vector3()).toArray(),faceAngles:[faceL.rotation.y,faceR.rotation.y],nestedVisible:cursor.visible&&nested.visible,landmarks:[drop.position.toArray(),[0,3.7,-1.4],home.toArray(),end[0].toArray()]})};
}
