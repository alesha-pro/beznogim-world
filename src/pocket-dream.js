import {freshPocketDream,actPocket,advancePocket,pocketPose,pocketBusy} from './pocket-dream-core.js';
export function createPocketDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,chime,changed}){
 const room=new THREE.Group();scene.add(room);room.visible=false;
 const paper=mat('#e9dbb7'),ink=mat('#405e62'),red=mat('#c87e68'),glow=mat('#ffe6aa',{emissive:'#e9b35d',emissiveIntensity:.8});
 box([0,-.35,0],[8.1,.28,7.1],ink,room);box([0,-.18,0],[7.8,.1,6.8],M.concrete,room);
 // Four hinged paper leaves around a pocket. Reused meshes, no allocation in update.
 const pocket=group([0,.12,0],room);box([0,0,0],[2.5,.06,2.5],paper,pocket);
 const leaves=[];for(let i=0;i<4;i++){const pivot=group([0,0,0],pocket);pivot.rotation.y=i*Math.PI/2;const hinge=group([0,0,1.25],pivot);box([0,0,.8],[2.5,.05,1.6],paper,hinge);box([0,.032,.76],[.022,.015,1.3],red,hinge);box([0,.035,.1],[2.3,.015,.018],red,hinge);leaves.push(hinge);}
 const yard=group([0,4.4,0],room);box([0,0,0],[2.25,.17,2.25],ink,yard);box([0,.12,0],[2.15,.08,2.15],M.concrete,yard);
 const tinyHouse=group([-.45,.18,-.3],yard);box([0,.33,0],[.8,.66,.7],paper,tinyHouse);box([0,.4,.36],[.25,.28,.025],glow,tinyHouse);box([0,.73,0],[1.05,.12,.9],red,tinyHouse);
 const pendulum=group([.65,.72,-.5],yard);rod([-.25,-.5,0],[-.25,.4,0],.03,ink,pendulum);rod([.25,-.5,0],[.25,.4,0],.03,ink,pendulum);rod([-.25,.4,0],[.25,.4,0],.03,ink,pendulum);const bob=group([0,.33,0],pendulum);rod([0,0,0],[0,-.65,0],.02,red,bob);sphere([0,-.67,0],.14,M.copper,bob);
 for(let i=0;i<4;i++)box([-.7+i*.42,.23,.66],[.28,.13,.36],paper,yard);
 // The stage hangs on four strings until the second action.
 const strings=[];for(const x of [-1.05,1.05])for(const z of [-1.05,1.05])strings.push(rod([x,4.45,z],[x,5.25,z],.012,M.copper,room));
 for(const x of [-2.8,2.8]){rod([x,0,-1.6],[x,5.3,-1.6],.06,ink,room);}rod([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,ink,room);
 const chair=(pos,parent=room)=>{const g=group(pos,parent);box([0,.4,0],[.55,.1,.55],red,g);box([0,.73,-.24],[.55,.65,.08],red,g);for(const x of [-.2,.2])for(const z of [-.2,.2])rod([x,0,z],[x,.4,z],.025,ink,g);return g;};
 const chairs=[chair([-2.6,0,1.1]),chair([-2.6,0,2.1]),chair([-1.65,0,2.1]),chair([-.7,0,2.1])];
 const visitor=group([0,2,0],room);sphere([0,0,0],[.15,.27,.15],glow,visitor);rod([0,.18,0],[.19,.35,0],.018,M.copper,visitor);
 const observer=head.clone(true);observer.scale.setScalar(.35);observer.position.set(2.8,.78,1.65);room.add(observer);
 sign('07 / ПУСТОЙ ЗАЛ',[0,-.1,3.16],2.6,.33,room,{size:43}).rotation.x=-Math.PI/2;
 // A tiny empty seat, not a new resident, item, or resource.
 const trace=chair([-30.6,-1.3,-20.8],root);trace.scale.setScalar(.35);trace.visible=false;
 batchStatic(room,[pocket,yard,...strings,...chairs,visitor,observer]);batchStatic(pocket,leaves.map(g=>g.parent));leaves.forEach(g=>batchStatic(g,[]));batchStatic(yard,[tinyHouse,pendulum]);batchStatic(tinyHouse,[]);batchStatic(pendulum,[bob]);batchStatic(bob,[]);chairs.forEach(g=>batchStatic(g,[]));batchStatic(visitor,[]);batchStatic(trace,[]);
 const carried=new THREE.Vector3(),turnAxis=new THREE.Vector3(1,0,-1).normalize();
 let s=freshPocketDream(),active=false,traceSaved=false;
 try{traceSaved=JSON.parse(localStorage.getItem('beznogim-dream07-v1')||'{}').trace===true;}catch{}trace.visible=traceSaved;
 function enter(){s=freshPocketDream();active=true;room.visible=true;root.visible=false;update(0,0);}
 function exit(){active=false;room.visible=false;root.visible=true;}
 function act(){const next=actPocket(s);if(next===s)return;s=next;chime(s.phase==='falling'?165:s.phase==='turning'?440:330);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advancePocket(s,dt);const {fold,fall,turn}=pocketPose(s);
  leaves.forEach(g=>g.rotation.x=-fold*.92*(1-turn));pocket.quaternion.setFromAxisAngle(turnAxis,turn*2.2);pocket.position.y=.12+turn*3.9;
  // After capture, the miniature stage is rigidly attached to the turning paper.
  yard.position.set(0,4.4-3.65*fall,0);yard.quaternion.identity();
  if(turn>0){carried.set(0,.63,0).applyAxisAngle(turnAxis,turn*2.2);yard.position.copy(carried).add(pocket.position);yard.quaternion.copy(pocket.quaternion);}
  strings.forEach(g=>g.visible=fall===0);bob.rotation.z=Math.sin(time*2.1)*.5;
  visitor.position.set(-2.6*turn,2-1.34*turn,1.1*turn);visitor.rotation.z=Math.sin(time)*.1;
  chairs.forEach((g,i)=>{if(i>0){g.position.y=turn*.15*Math.sin(time+i);g.rotation.z=turn*Math.sin(time+i)*.035;}});
  if(s.trace&&!traceSaved){traceSaved=true;trace.visible=true;try{localStorage.setItem('beznogim-dream07-v1',JSON.stringify({trace:true}));}catch{}}
  if(s.phase!==old)changed();
 }
 const text=()=>({flat:'Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.',folding:'Бумага складывается в карман. Поймать пока нечего.',bowl:'Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.',falling:'Двор падает. Бумага ловит дом, ступени и маятник вместе.',caught:'Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.',turning:'Пол уходит наверх. Старое белое семечко ищет себе место в зале.',audience:'Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть.'})[s.phase];
 return {enter,exit,act,update,text,button:()=>({flat:'сложить обёртку ↑',folding:'бумага складывается…',bowl:'отцепить двор ↓',falling:'двор падает…',caught:'вывернуть карман ↻',turning:'пол становится потолком…',audience:'увидеть сон снова'})[s.phase],busy:()=>pocketBusy(s),inspect:()=>({...s,...pocketPose(s),active,trace:traceSaved,rootVisible:root.visible,roomVisible:room.visible,leafAngles:leaves.map(g=>g.rotation.x),yard:yard.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(yard.quaternion.w))),yardQuaternion:yard.quaternion.toArray(),pocket:pocket.position.toArray(),seed:visitor.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})};
}
