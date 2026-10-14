import {freshRoofDream,turnRoof,sendRoofLetter,advanceRoofLetter,roofDirections,roofRoute} from './roof-dream-core.js';
export function createRoofDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream-04-letter-above-roof';room.visible=false;
 const ink=mat('#355b62'),tile=mat('#72a49c',{metalness:.25,roughness:.5}),paper=mat('#eee3bd'),stripe=mat('#96c9c2');
 cyl([0,-.45,0],3.9,.32,ink,room);torus([0,-.26,0],3.78,.024,M.copper,room);
 for(let i=0;i<4;i++){const a=i*Math.PI/2,x=Math.cos(a)*3.05,z=Math.sin(a)*3.05;sign(['В','Ю','З','С'][i],[x,-.23,z],.38,.28,room).rotation.x=-Math.PI/2;}
 // Empty walls: three independent floating roofs, with a genuinely absent sector.
 const roofs=[],needles=[],goals=[];
 for(let i=0;i<3;i++){
  const y=1.05+i*1.4,r=2.05-i*.27,g=group([0,y,0],room);roofs.push(g);
  for(let j=1;j<4;j++){
   const a=j*Math.PI/2,ca=Math.cos(a),sa=Math.sin(a);
   const points=[[.30,.30,-.30],[.30,.30,.30],[r,.04,r],[r,.04,-r]];
   const geo=new THREE.BufferGeometry();const verts=[];
   for(const k of [0,1,2,0,2,3]){const [x,py,z]=points[k];verts.push(x*ca-z*sa,py,x*sa+z*ca);}
   geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.computeVertexNormals();
   const panelMat=tile.clone();panelMat.side=THREE.DoubleSide;mesh(geo,panelMat,null,null,g);
   rod([r*ca-r*sa,.04,r*sa+r*ca],[r*ca+r*sa,.04,r*sa-r*ca],.035,M.copper,g);
   for(const t of [-1,1])rod([r*ca-r*sa*t,.04,r*sa+r*ca*t],[(r+.16)*ca-(r+.16)*sa*t,.20,(r+.16)*sa+(r+.16)*ca*t],.035,M.copper,g);
  }
  const arrow=group([r*.67,.045,0],g);rod([-.32,0,0],[.30,0,0],.026,M.mint,arrow);rod([.30,0,0],[.10,0,.13],.026,M.mint,arrow);rod([.30,0,0],[.10,0,-.13],.026,M.mint,arrow);needles.push(arrow);
  // Mark the fixed route outside the rotating roof. It does not move with tuning.
  const a=roofRoute[i]*Math.PI/2,x=Math.cos(a)*r*.63,z=Math.sin(a)*r*.63;
  const goal=torus([x,y+.09,z],.16,.025,M.light,room);goals.push(goal);
  sign(`${i+1}`,[r+.26,y+.14,.2],.36,.29,room,{bg:'#355b62',fg:'#f0e4b8'});
  for(const side of [-1,1])rod([side*.3,y-.32,-.3],[side*.3,y-.03,-.3],.018,M.copper,room);
 }
 // A mailbox with a sleeping head; the envelope is the old letter, not a chat log.
 const mailbox=group([-2.6,.16,1.5],room);box([0,0,0],[1.1,.62,.7],M.cream,mailbox);box([0,.16,.361],[.72,.07,.025],ink,mailbox);sign('БЕЗ АДРЕСА',[-2.6,.14,1.87],.94,.18,room,{size:40});
 const sleeper=head.clone(true);room.add(sleeper);sleeper.scale.setScalar(.53);sleeper.position.set(-2.6,1.0,1.5);sleeper.rotation.z=-.12;
 sign('СОН / 04',[0,-.12,3.34],1.8,.32,room,{size:48}).rotation.x=-Math.PI/2;
 const letter=group([-1.1,.12,1.5],room);box([0,0,0],[.52,.025,.36],paper,letter);
 const left=group([-.26,.016,0],letter),right=group([.26,.016,0],letter);
 box([.13,0,0],[.26,.022,.36],paper,left);box([-.13,0,0],[.26,.022,.36],paper,right);
 rod([-.25,.04,-.17],[0,.04,.10],.009,M.copper,letter);rod([.25,.04,-.17],[0,.04,.10],.009,M.copper,letter);
 const seed=sphere([0,.045,0],.055,M.light,letter);
 const crown=group([0,5.3,0],room);torus([0,0,0],.55,.025,M.copper,crown);rod([0,-.3,0],[0,.22,0],.018,M.copper,crown);
 const petals=Array.from({length:6},(_,i)=>{const a=i*Math.PI/3;const p=sphere([Math.cos(a)*.29,0,Math.sin(a)*.29],[.21,.065,.11],paper,crown);p.rotation.y=-a;return p;});crown.visible=false;
 // The ray describes the route, not a hidden random solution.
 const points=[new THREE.Vector3(-1.1,.12,1.5),...goals.map(g=>g.position.clone().add(new THREE.Vector3(0,.05,0))),new THREE.Vector3(0,5.3,0)];
 const pathGeo=new THREE.BufferGeometry().setFromPoints(points);const ray=new THREE.Line(pathGeo,new THREE.LineDashedMaterial({color:'#d6c797',dashSize:.12,gapSize:.16,transparent:true,opacity:.45}));ray.computeLineDistances();room.add(ray);
 let s=freshRoofDream(),active=false,open=0,trace=false,angles=[Math.PI/2,Math.PI/2,Math.PI/2];
 try{trace=JSON.parse(localStorage.getItem('beznogim-dream04-v1')||'{}').trace===true;}catch{}
 const traceLetter=group([-3.75,1.17,-2.95],root);traceLetter.visible=trace;box([0,0,0],[.23,.012,.16],paper,traceLetter);rod([-.11,.016,-.07],[0,.016,.04],.005,M.copper,traceLetter);rod([.11,.016,-.07],[0,.016,.04],.005,M.copper,traceLetter);
 batchStatic(room,[...roofs,...goals,mailbox,sleeper,letter,crown,ray]);roofs.forEach((g,i)=>batchStatic(g,[needles[i]]));batchStatic(letter,[left,right,seed]);batchStatic(left,[]);batchStatic(right,[]);batchStatic(mailbox,[]);batchStatic(crown,petals);batchStatic(traceLetter,[]);
 function enter(){active=true;s=freshRoofDream();open=0;angles=s.turns.map(n=>n*Math.PI/2);room.visible=true;root.visible=false;update(0,0);}
 function exit(){active=false;room.visible=false;root.visible=true;}
 function turn(i){s=turnRoof(s,i);chime(165+i*55+s.turns[i]*22);changed();}
 function send(){if(s.phase==='delivered'){s=freshRoofDream();open=0;}else s=sendRoofLetter(s);chime(220);changed();}
 function update(dt,time){if(!active)return;const oldPhase=s.phase;s=advanceRoofLetter(s,dt);open=THREE.MathUtils.damp(open,s.phase==='delivered'?1:0,2.4,dt);
  roofs.forEach((g,i)=>{const target=s.turns[i]*Math.PI/2;const delta=Math.atan2(Math.sin(target-angles[i]),Math.cos(target-angles[i]));angles[i]+=delta*(dt===0?1:1-Math.exp(-dt*7));g.rotation.y=-angles[i];g.position.x=open*[-2.15,1.85,0][i];g.position.z=open*[.45,-.65,-2.1][i];g.rotation.z=open*(i===0?-.16:.13);});
  const p=Math.min(4,s.progress),n=Math.min(3,Math.floor(p)),u=Math.min(1,p-n),ease=u*u*(3-2*u);letter.position.lerpVectors(points[n],points[n+1],ease);letter.rotation.y=time*.16;left.rotation.z=-open*1.1;right.rotation.z=open*1.1;seed.position.y=.045+open*.18;
  crown.visible=s.phase==='delivered';crown.rotation.y=time*.22;petals.forEach((p,i)=>{p.position.y=Math.sin(time*.7+i)*.035;});ray.visible=s.phase!=='delivered';
  if(s.trace&&!trace){trace=true;traceLetter.visible=true;try{localStorage.setItem('beznogim-dream04-v1',JSON.stringify({trace:true}));}catch{}}
  if(oldPhase!==s.phase)changed();
 }
 function text(){if(s.phase==='flying')return 'Письмо падает вверх. Крыши пока не трогаем.';if(s.phase==='caught')return `Поймала крыша ${s.stop}. Ничего страшного: поверни проход и отправь ещё раз.`;if(s.phase==='delivered')return 'Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.';return 'Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь.';}
 return {enter,exit,turn,send,update,text,directions:roofDirections,inspect:()=>({...s,turns:[...s.turns],active,trace,open,roomVisible:room.visible,rootVisible:root.visible,roofs:roofs.map(g=>({position:g.position.toArray(),rotation:g.rotation.toArray().slice(0,3)})),letter:letter.position.toArray(),goals:goals.map(g=>g.position.toArray()),crown:crown.visible})};
}
