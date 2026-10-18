import {freshTorchDream,torchAligned,turnTorch,actTorch,advanceTorch,torchPose,TORCH_TARGETS} from './torch-dream-core.js';
export function createTorchDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream08-ten-torches';room.visible=false;
 const ink=mat('#344c5d'),stone=mat('#647c83'),wax=mat('#ddc999'),colors=['#d38d6d','#81beca','#d6c56e'],mats=colors.map(c=>mat(c)),fires=colors.map(c=>mat(c,{emissive:c,emissiveIntensity:1.4}));
 cyl([0,-.4,0],4.15,.22,ink,room);torus([0,-.27,0],4,.035,M.copper,room);
 const disk=group([0,.18,0],room);cyl([0,0,0],2.6,.18,M.black,disk);cyl([0,.105,0],.49,.015,wax,disk);
 const rings=[],needles=[];
 for(let i=0;i<3;i++){
  const r=.9+i*.6,g=group([0,.12,0],disk);rings.push(g);
  torus([0,0,0],r,.035,mats[i],g);torus([0,-.02,0],r+.09,.008,stone,g);
  sphere([r,.04,0],.13,fires[i],g);
  // Fixed quarter marks and a large coloured notch show the score in the scene.
  for(let k=0;k<4;k++){const a=k*Math.PI/2;box([Math.cos(a)*r,.025,Math.sin(a)*r],[.1,.07,.1],k===TORCH_TARGETS[i]?mats[i]:stone,disk);}
  const a=TORCH_TARGETS[i]*Math.PI/2;needles.push(rod([Math.cos(a)*r,.18,Math.sin(a)*r],[0,.18,0],.018,fires[i],disk));
 }
 sign('1 / 3 / 2',[0,.09,2.82],1.7,.35,room,{size:68}).rotation.x=-Math.PI/2;
 const torches=[],flames=[],channels=[];
 for(let i=0;i<10;i++){
  const g=group([0,0,0],room),c=i%3;channels.push(c);torches.push(g);
  cyl([0,-.34,0],.055,.7,M.copper,g);cyl([0,0,0],.14,.14,mats[c],g);
  const f=sphere([0,.26,0],[.12,.3,.12],fires[c],g);flames.push(f);
  torus([0,-.16,0],.17,.018,mats[c],g);
 }
 // The head is a silent conductor. Its whiskers replace the old hanging pendulums.
 const conductor=head.clone(true);conductor.position.set(0,.65,3.1);conductor.scale.setScalar(.4);room.add(conductor);
 const whiskers=[];for(const side of [-1,1]){const g=group([side*.16,-.08,.7],conductor);rod([0,0,0],[side*.85,-.12,0],.055,M.black,g);sphere([side*.8,-.12,0],[.19,.08,.08],M.black,g);whiskers.push(g);}
 const trace=group([-5.05,.15,1.55],root);cyl([0,0,0],.13,.06,M.black,trace);sphere([0,.15,0],[.045,.095,.045],M.light,trace);trace.visible=false;
 batchStatic(room,[disk,...torches,conductor]);batchStatic(disk,[...rings,...needles]);rings.forEach(g=>batchStatic(g,[]));torches.forEach((g,i)=>batchStatic(g,[flames[i]]));batchStatic(trace,[]);
 let s=freshTorchDream(),active=false,traceSaved=false;const angles=[0,0,0],angleTargets=[0,0,0];
 try{traceSaved=JSON.parse(localStorage.getItem('beznogim-dream08-v1')||'{}').trace===true;}catch{}trace.visible=traceSaved;
 function enter(){s=freshTorchDream();angles.fill(0);angleTargets.fill(0);active=true;root.visible=false;room.visible=true;update(0,0);}
 function exit(){active=false;root.visible=true;room.visible=false;}
 function turn(i){if(!active)return;const next=turnTorch(s,i);if(next===s)return;s=next;angleTargets[i]+=Math.PI/2;chime(180+i*85+s.turns[i]*20);changed();}
 function act(){if(!active)return;const next=actTorch(s);if(next===s)return;s=next;if(s.phase==='tuning'){angles.fill(0);angleTargets.fill(0);}chime(s.phase==='releasing'?440:165);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceTorch(s,dt);const a=torchAligned(s),pose=torchPose(s,0),d=Number.isFinite(dt)?Math.max(0,Math.min(.1,dt)):0;
  rings.forEach((g,i)=>{angles[i]=THREE.MathUtils.damp(angles[i],angleTargets[i],9,d);g.rotation.y=-angles[i];needles[i].visible=a[i];});
  disk.scale.setScalar(pose.diskScale);disk.rotation.x=pose.diskTilt;disk.position.y=.18+pose.lift*2.7;
  torches.forEach((g,i)=>{const p=torchPose(s,i);g.position.set(p.x,p.y,p.z);g.rotation.z=pose.lift*Math.sin(time*.7+i)*.1;flames[i].visible=a[channels[i]];flames[i].scale.y=1+Math.sin(time*5+i)*.1;});
  whiskers.forEach((g,i)=>g.rotation.z=Math.sin(time*2+i*Math.PI)*.3);conductor.rotation.y=Math.sin(time*.3)*.12;
  if(s.trace&&!traceSaved){traceSaved=true;trace.visible=true;try{localStorage.setItem('beznogim-dream08-v1',JSON.stringify({trace:true}));}catch{}}
  if(old!==s.phase)changed();
 }
 return {enter,exit,turn,act,update,busy:()=>s.phase==='releasing',canRelease:()=>s.phase!=='tuning'||torchAligned(s).every(Boolean),text:()=>s.phase==='sky'?'Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.':s.phase==='releasing'?'Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.':'Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.',button:()=>s.phase==='sky'?'увидеть сон снова':s.phase==='releasing'?'факелы уходят в небо…':'освободить место ↑',inspect:()=>({...s,active,trace:traceSaved,aligned:torchAligned(s),ringAngles:rings.map(g=>g.rotation.y),flames:flames.map(f=>f.visible),torches:torches.map(g=>g.position.toArray()),diskScale:disk.scale.x,diskTilt:disk.rotation.x,diskY:disk.position.y,rootVisible:root.visible,roomVisible:room.visible,whiskers:whiskers.map(g=>g.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})};
}
