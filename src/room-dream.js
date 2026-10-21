import {freshRoomDream,chooseRoom,actRoom,advanceRoom,roomReady,roomSize,roomWalk} from './room-dream-core.js';
export function createRoomDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,tube,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream11-room-for-a-bug';room.visible=false;
 const ink=mat('#264d50'),paper=mat('#e4d3ae'),green=mat('#4e8b69'),amber=mat('#e7a34d',{metalness:.25,roughness:.35}),gold=M.copper;
 const ground=group([0,-.25,0],room);box([0,0,0],[8.8,.16,7.5],ink,ground);
 for(let i=0;i<7;i++)box([0,.09,-3+i],[8.5,.012,.018],M.mint,ground);
 for(let i=0;i<9;i++)box([-4+i,.09,0],[.018,.012,7.2],M.mint,ground);
 sign('ПРОСТОР ДЛЯ БАГА',[0,-.1,3.45],3.3,.28,room,{size:48});
 const watcher=head.clone(true);watcher.scale.setScalar(.48);watcher.position.set(-2.5,1.5,2.1);room.add(watcher);
 const shell=group([0,1,-.6],room),structure=group([0,0,0],shell);
 // Only a rear wall and a raised, slatted roof: the inhabitant remains visible.
 box([0,0,0],[1,.08,1],green,structure);
 box([0,.5,-.5],[1,1,.035],paper,structure);
 for(const x of [-.5,.5])for(const z of [-.5,.5])box([x,.5,z],[.025,1,.025],gold,structure);
 for(const z of [-.5,.5])box([0,1,z],[1,.035,.035],gold,structure);
 for(const x of [-.5,.5])box([x,1,0],[.035,.035,1],gold,structure);
 for(let i=0;i<5;i++)box([-.44+i*.22,1.04,0],[.08,.035,1.1],paper,structure);
 const windows=[];for(let i=0;i<3;i++){const w=group([-.3+i*.3,.6,-.475],structure);box([0,0,0],[.17,.3,.018],ink,w);box([0,0,.013],[.012,.3,.01],gold,w);box([0,0,.013],[.17,.012,.01],gold,w);windows.push(w);}
 const bug=group([0,.24,.05],shell);sphere([0,0,0],[.38,.22,.49],amber,bug);box([0,.15,0],[.018,.045,.76],gold,bug);sphere([0,.04,.5],[.26,.18,.2],ink,bug);
 for(const x of [-.12,.12]){sphere([x,.12,.65],.045,M.cream,bug);tube([[x,.12,.6],[x*2,.4,.8],[x*2.7,.45,.85]],.015,gold,bug);}
 const feet=[];for(const side of [-1,1])for(let i=0;i<3;i++){const f=group([side*.3,-.02,-.3+i*.3],shell);tube([[0,0,0],[side*.4,-.35,.15],[side*.6,-.6,.35]],.035,gold,f);for(let j=0;j<3;j++)box([side*(.38+j*.09),-.28-j*.12,.18+j*.07],[.24,.055,.16],paper,f);feet.push(f);}
 const stairs=[],chips=[],steps=[];
 for(let i=0;i<2;i++){const stair=group([-3.2+i*1.4,.12,2.1],room);stairs.push(stair);const ss=[];for(let k=0;k<5;k++){const step=box([0,k*.17,-k*.19],[.5,.09,.3],paper,stair);ss.push(step);}steps.push(ss);
  const pcb=box([0,0,0],[.58,.055,1.2],green,stair);pcb.visible=false;chips.push(pcb);
  for(let k=0;k<5;k++)box([.3,.01,-.5+k*.25],[.09,.03,.09],gold,pcb);
 }
 const labels=[];for(let i=0;i<3;i++){const l=group([2.7,.2,2.3-i*.75],room);box([0,0,0],[.55,.06,.5],green,l);sign(['Ш','Г','В'][i],[0,.1,0],.38,.25,l,{size:60});labels.push(l);}
 const trace=group([-5.55,.52,-3.25],root);sphere([0,0,0],[.12,.08,.18],amber,trace);for(const side of [-1,1])for(let i=0;i<3;i++)box([side*.13,-.04,-.1+i*.1],[.14,.025,.025],gold,trace);box([0,.12,0],[.2,.03,.22],green,trace);trace.visible=false;
 batchStatic(ground,[]);batchStatic(structure,windows);windows.forEach(g=>batchStatic(g,[]));batchStatic(bug,[]);feet.forEach(g=>batchStatic(g,[]));labels.forEach(g=>batchStatic(g,[]));batchStatic(trace,[]);
 let s=freshRoomDream(),active=false,shape=[0,0],dims=roomSize(shape),traceSaved=false,lastShape=null;
 try{const saved=JSON.parse(localStorage.getItem('beznogim-dream11-v1')||'{}');if(saved.trace===true&&Array.isArray(saved.shape)&&saved.shape.length===2&&saved.shape.every(v=>Number.isInteger(v)&&v>=1&&v<=3)){traceSaved=true;lastShape=saved.shape;}}catch{}trace.visible=traceSaved;
 function geometryBounds(){room.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(room);return {min:b.min.toArray(),max:b.max.toArray()};}
 function enter(){s=freshRoomDream();shape=[0,0];dims=roomSize(shape);active=true;root.visible=false;room.visible=true;update(0,0);}
 function exit(){active=false;root.visible=true;room.visible=false;}
 function choose(i,axis){if(!active)return;const n=chooseRoom(s,i,axis);if(n===s)return;s=n;chime(165+axis*70);update(0,0);changed();}
 function act(){if(!active)return;const n=actRoom(s);if(n===s)return;s=n;chime(420);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceRoom(s,dt);const d=roomSize(s.slots),speed=1-Math.exp(-Math.max(0,Math.min(.1,dt))*6);dims=dims.map((v,i)=>THREE.MathUtils.lerp(v,d[i],speed));structure.scale.set(dims[0],dims[2],dims[1]);
  const walk=roomWalk(s.progress);shell.position.set(walk.x,1+walk.y,-.6+walk.z);shell.rotation.y=walk.turn;
  feet.forEach((f,i)=>{const side=i<3?-1:1;f.position.x=side*(dims[0]/2-.1);f.position.z=(i%3-1)*dims[1]*.28;f.rotation.x=s.phase==='walking'?Math.sin(s.progress*Math.PI*12+i%2*Math.PI)*.32:0;});
  bug.rotation.z=Math.sin(time*2)*.025;bug.position.y=.24;
  stairs.forEach((g,i)=>{shape[i]=THREE.MathUtils.lerp(shape[i],s.slots[i]>0?1:0,speed);const a=shape[i];g.position.set(THREE.MathUtils.lerp(-3.2+i*1.4,walk.x+(i-.5)*.7,a),THREE.MathUtils.lerp(.12,1.08+walk.y,a),THREE.MathUtils.lerp(2.1,.5+walk.z,a));g.rotation.y=walk.turn*a;steps[i].forEach((o,k)=>{o.position.set(0,k*.17*(1-a),-k*.19);o.scale.set(.5*(1-a*.35),.09*(1-a*.45),.3*(1-a*.4));});chips[i].visible=a>.02;chips[i].position.z=-.38;});
  watcher.rotation.z=-.1;labels.forEach((g,i)=>g.scale.y=s.slots.includes(i+1)?1.7:1);
  if(s.phase==='settled'&&old!==s.phase){traceSaved=true;lastShape=s.slots.slice();trace.visible=true;try{localStorage.setItem('beznogim-dream11-v1',JSON.stringify({trace:true,shape:lastShape}));}catch{}}
  if(old!==s.phase)changed();
 }
 return {enter,exit,choose,act,update,ready:()=>roomReady(s),busy:()=>s.phase==='walking',text:()=>s.phase==='settled'?'Жук унёс комнату целиком. Две лестницы теперь ходят за него. Мне оставили голову. Можно собрать другое просторное жильё.':s.phase==='walking'?'Комната обулась в собственные ступени и пошла. Жук даже не встал с пола.':`Две лестницы можно обменять на память: раздвинуть ширину, глубину или высоту комнаты. Обе можно отдать одной оси. Жук останется маленьким. ${s.slots.filter(Boolean).length}/2 отданы.`,button:()=>s.phase==='settled'?'другое жильё':s.phase==='walking'?'комната гуляет…':'выпустить комнату · 6 секунд',inspect:()=>({...s,active,trace:traceSaved,lastShape,dimensions:dims.slice(),targetSize:roomSize(s.slots),shell:shell.position.toArray(),shellTurn:shell.rotation.y,structureScale:structure.scale.toArray(),steps:steps.map(ss=>ss.map(g=>g.position.toArray())),stepScales:steps.map(ss=>ss.map(g=>g.scale.toArray())),head:watcher.position.toArray(),stairs:stairs.map(g=>g.position.toArray()),chipVisible:chips.map(g=>g.visible),footAngles:feet.map(g=>g.rotation.x),bugScale:bug.scale.toArray(),rootVisible:root.visible,roomVisible:room.visible,geometryBounds:geometryBounds(),landmarks:[[-4.45,-.4,-3.8],[4.45,-.4,3.8],[-2.5,2.2,2.1],[1.4,4.4,-1.7]]})};
}
