import {ABSENCE_SLOTS,freshAbsence,absenceReady,toggleAbsence,actAbsence,advanceAbsence,absencePose,absenceTrace} from './absence-dream-core.js';
export function createAbsenceDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,tube,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream12-absence-with-a-graph';room.visible=false;
 const ink=mat('#243650'),night=mat('#15243f',{emissive:'#15243f',emissiveIntensity:.3}),paper=mat('#ecdfb8',{side:THREE.DoubleSide}),grid=mat('#acb4a2'),gold=mat('#ffd886',{emissive:'#ffb34d',emissiveIntensity:.85}),dust=mat('#91adc0',{emissive:'#91adc0',emissiveIntensity:.4});
 const ground=group([0,-.32,0],room);cyl([0,0,0],4.35,.15,ink,ground);
 for(let i=0;i<52;i++){const a=i*2.39996,r=.5+3.6*((i*17%53)/53);sphere([Math.cos(a)*r,.085,Math.sin(a)*r],[.015+(i%3)*.006,.01,.015+(i%3)*.006],dust,ground);}
 const chart=group([0,.15,-2.65],room);
 // The holes really are cut out of the paper mesh; no fake numeric bars.
 const shape=new THREE.Shape();shape.moveTo(-3.75,0);shape.lineTo(3.75,0);shape.lineTo(3.75,4.7);shape.lineTo(-3.75,4.7);shape.closePath();
 for(const [x,end] of ABSENCE_SLOTS){const h=new THREE.Path();h.moveTo(x-.44,.7);h.lineTo(x-.44,end+.24);h.lineTo(x+.44,end+.24);h.lineTo(x+.44,.7);h.closePath();shape.holes.push(h);}
 const geo=new THREE.ShapeGeometry(shape);geo.rotateX(Math.PI/2);const sheetMaterial=paper.clone();const sheet=new THREE.Mesh(geo,sheetMaterial);sheet.receiveShadow=true;sheet.castShadow=false;chart.add(sheet);
 for(let z=.35;z<4.7;z+=.55)for(let i=0;i<6;i++)box([-3.5+i*1.4,.012,z],[.24,.012,.015],grid,chart);
 box([0,.025,.34],[7,.025,.035],M.copper,chart);box([-3.5,.025,2.35],[.035,.025,4.3],M.copper,chart);
 const covers=[],rolls=[],stars=[],marks=[];
 function star(parent,scale=1){const shape=new THREE.Shape();for(let k=0;k<10;k++){const a=k*Math.PI/5+Math.PI/2,r=k%2?.11:.25;const x=Math.cos(a)*r,y=Math.sin(a)*r;k?shape.lineTo(x,y):shape.moveTo(x,y);}shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth:.045,bevelEnabled:false});geo.rotateX(Math.PI/2);const o=new THREE.Mesh(geo,gold);o.scale.setScalar(scale);parent.add(o);return o;}
 for(let i=0;i<5;i++){
  const [x,end]=ABSENCE_SLOTS[i],length=end-.7+.24;
  covers.push(box([x,.035,.7+length/2],[.87,.035,length],paper,chart));
  const roll=cyl([x,.12,end+.24],.07,.87,paper,chart);roll.rotation.z=Math.PI/2;rolls.push(roll);
  const st=star(chart);st.position.set(x,-.02,end-.18);stars.push(st);
  const label=sign('Н/Д',[x,.065,1.05],.65,.25,chart,{size:60,bg:'#e3d7af',fg:'#526576'});label.rotation.x=-Math.PI/2;marks.push(label);
  const n=sign(String(i+1),[x,.04,.36],.27,.21,chart,{size:70});n.rotation.x=-Math.PI/2;
  for(let k=0;k<5;k++)sphere([x+Math.sin(i*8+k*7)*.32,-.025,.9+(end-.6)*(k+.5)/5],[.025,.015,.025],dust,chart);
 }
 const links=Array.from({length:3},()=>cyl([0,0,0],.018,1,gold,chart));
 const watcher=head.clone(true);watcher.scale.setScalar(.43);room.add(watcher);
 const stool=group([0,.02,2.3],room);cyl([0,.15,0],.43,.13,paper,stool);for(const x of [-.25,.25])for(const z of [-.25,.25])box([x,0,z],[.06,.3,.06],M.copper,stool);
 sign('Н/Д · С ГРАФИКАМИ',[0,-.12,3.55],3.4,.28,room,{size:52});
 const trace=group([-5.45,.2,-2.15],root);const traceStars=ABSENCE_SLOTS.map(([x,z])=>{const st=star(trace,.22);st.position.set(x*.15,.1,z*.12);return st;});trace.visible=false;
 batchStatic(ground,[]);batchStatic(stool,[]);
 let s=freshAbsence(),active=false,open=[0,0,0,0,0],lastHoles=null;
 try{lastHoles=absenceTrace(JSON.parse(localStorage.getItem('beznogim-dream12-v1')||'null'));}catch{}setTrace();
 function setTrace(){trace.visible=!!lastHoles;traceStars.forEach((st,i)=>st.visible=!!lastHoles?.[i]);}
 function enter(){s=freshAbsence();open.fill(0);active=true;root.visible=false;room.visible=true;update(0,0);}
 function exit(){active=false;root.visible=true;room.visible=false;}
 function toggle(i){if(!active)return;const n=toggleAbsence(s,i);if(n===s)return;s=n;chime(180+i*55);changed();}
 function act(){if(!active)return;const n=actAbsence(s);if(n===s)return;s=n;chime(440);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceAbsence(s,dt);const d=Number.isFinite(dt)?Math.max(0,Math.min(dt,.1)):0,p=absencePose(s.progress);chart.rotation.x=p.tilt;const normal=Math.cos(s.progress*Math.PI);sheetMaterial.color.copy(paper.color).lerp(ink.color,s.progress);
  watcher.position.set(0,p.headY,p.headZ);watcher.rotation.y=Math.PI;watcher.rotation.z=Math.sin(time*.8)*.04;
  for(let i=0;i<5;i++){open[i]=THREE.MathUtils.damp(open[i],s.holes[i]?1:0,8,d);const end=ABSENCE_SLOTS[i][1],length=end-.7+.24,rest=Math.max(.001,1-open[i]);covers[i].scale.z=length*rest;covers[i].position.z=.7+length*rest/2;covers[i].position.y=.035*normal;marks[i].position.y=.065*normal;rolls[i].position.y=.14*normal;marks[i].visible=open[i]<.12;rolls[i].position.z=.7+length*rest;rolls[i].scale.x=rolls[i].scale.z=.07+open[i]*.07;stars[i].position.y=(.04+open[i]*.18)*normal;stars[i].scale.setScalar(.3+open[i]*.7);stars[i].visible=open[i]>.02;}
  const chosen=s.holes.map((v,i)=>v?i:-1).filter(i=>i>=0);links.forEach((edge,k)=>{edge.visible=chosen.length===3;if(!edge.visible)return;const a=stars[chosen[k]].position.clone(),b=stars[chosen[(k+1)%3]].position.clone(),v=b.clone().sub(a);edge.position.copy(a.add(b).multiplyScalar(.5));edge.scale.set(.018,v.length(),.018);edge.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());});
  if(old!==s.phase){if(s.phase==='night'){lastHoles=s.holes.slice();setTrace();try{localStorage.setItem('beznogim-dream12-v1',JSON.stringify({trace:true,holes:lastHoles}));}catch{}}changed();}
 }
 const landmarks=[[-4.4,-.5,-4.4],[4.4,-.5,4.4],[-3.8,4.95,-2.65],[3.8,4.95,-2.65],[0,1.6,2.3]];
 return {enter,exit,toggle,act,update,ready:()=>absenceReady(s),busy:()=>s.phase==='lifting',button:()=>s.phase==='night'?'другое созвездие':s.phase==='lifting'?'график становится небом…':'потянуть за небо · 6 секунд',text:()=>s.phase==='night'?'Ответов не прибавилось. График встал на ребро и стал ночным окном. Три звезды светят сквозь пропуски. Можно оставить другое созвездие.':s.phase==='lifting'?'Три звезды тянут бумагу вверх. Там, где не было данных, теперь видно небо.':'Пять столбцов остались без ответа. Сверни любые три: сквозь пустоты появятся звёзды. Выбор можно отменить. Здесь нет правильного созвездия. '+s.holes.filter(Boolean).length+'/3 открыты.',inspect:()=>({...s,active,open:open.slice(),trace:!!lastHoles,lastHoles,chartTilt:chart.rotation.x,coverLengths:covers.map(o=>o.scale.z),starPositions:stars.map(o=>o.position.toArray()),starVisible:stars.map(o=>o.visible),linksVisible:links.map(o=>o.visible),watcher:watcher.position.toArray(),rootVisible:root.visible,roomVisible:room.visible,landmarks,geometryBounds:(()=>{room.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(room);return {min:b.min.toArray(),max:b.max.toArray()};})()})};
}
