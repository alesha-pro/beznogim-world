import {freshFocus,focusReady,tuneFocus,actFocus,advanceFocus,focusPose,focusTrace} from './focus-dream-core.js';
export function createFocusDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,torus,sign,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream13-ring-of-surroundings';room.visible=false;
 const navy=mat('#1a3044'),ivory=mat('#e8d6ac'),pink=mat('#c58c73'),mint=mat('#86bcad'),gold=mat('#f6cf82',{emissive:'#e6ab56',emissiveIntensity:.35});
 const ground=group([0,0,0],room);cyl([0,-.23,0],4.25,.18,navy,ground);for(let i=0;i<48;i++){const a=i*Math.PI/24;box([Math.sin(a)*4.05,-.12,Math.cos(a)*4.05],[.035,.025,.12],i%4?M.metal:gold,ground).rotation.y=a;}
 const world=group([0,0,0],room),orbit=group([0,0,0],world);
 const planet=group([0,2.7,-1.3],orbit);planet.name='jupiter-in-three-bands';
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='#e6cda5';ctx.fillRect(0,0,256,128);for(let y=0;y<128;y++){ctx.fillStyle=['#b77a56','#e8d3ad','#d49c76','#f2dfb7','#c38d66'][Math.floor(y/7)%5];ctx.fillRect(0,y,256,1);ctx.fillStyle='rgba(255,232,189,.2)';for(let x=0;x<256;x+=16)ctx.fillRect(x,y+Math.sin(x*.05+y*.14)*2,16,1);}ctx.fillStyle='#a56551';ctx.beginPath();ctx.ellipse(170,78,19,7,-.2,0,Math.PI*2);ctx.fill();
 const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;const pm=new THREE.MeshStandardMaterial({map:tex,roughness:.8,side:THREE.DoubleSide});
 const bands=[];for(let i=0;i<3;i++){const o=new THREE.Mesh(new THREE.SphereGeometry(1.03,32,12,0,Math.PI*2,i*Math.PI/3,Math.PI/3),pm);planet.add(o);bands.push(o);}
 torus([0,2.7,-1.3],1.35,.025,gold,orbit,[Math.PI/2+.2,0,.25]);
 const islands=[];for(let i=0;i<4;i++){const a=i*Math.PI/2+.45,x=Math.sin(a)*2.85,z=Math.cos(a)*2.85;const g=group([x,.05,z],orbit);islands.push(g);cyl([0,0,0],.7,.13,M.concrete,g);if(i%2===0){for(const x of [-.4,.4])box([x,.65,0],[.12,1.25,.18],ivory,g);box([0,1.27,0],[.92,.17,.18],ivory,g);torus([0,.7,0],.23,.04,gold,g,[0,0,0]);}else{rod([0,.1,0],[0,1.1,0],.06,M.copper,g);for(let k=0;k<3;k++)sphere([Math.sin(k*2.1)*.22,.85+k*.21,Math.cos(k*2.1)*.16],[.3,.36,.27],k%2?pink:mint,g);}}
 // A hollow camera: the miniature remains visible through it from either side.
 const camera=group([0,0,.65],room),left=group([0,0,0],camera),right=group([0,0,0],camera);
 for(const [g,side] of [[left,-1],[right,1]]){box([side*.95,1.1,0],[.42,1.5,.72],M.dark,g);box([side*.44,1.84,0],[.72,.16,.72],M.dark,g);box([side*.44,.36,0],[.72,.16,.72],M.dark,g);}
 const shutter=box([-.7,1.98,0],[.32,.14,.3],gold,left);box([0,.15,0],[1.3,.14,1.2],M.copper,camera);
 const lens=group([0,1.12,.65],camera);torus([0,0,0],.78,.11,M.copper,lens,[0,0,0]);torus([0,0,.14],.78,.065,M.metal,lens,[0,0,0]);const grip=group([0,0,.15],lens);for(let i=0;i<36;i++){const a=i*Math.PI/18;box([Math.sin(a)*.82,Math.cos(a)*.82,0],[.035,.1,.12],i%3?ivory:gold,grip).rotation.z=-a;}
 const marker=box([0,2.25,1.3],[.06,.14,.08],gold,room);
 const watcher=head.clone(true);watcher.scale.setScalar(.38);room.add(watcher);
 sign('КОЛЬЦО ОКРУЖЕНИЯ',[0,-.04,3.65],3.6,.27,ground,{size:46});
 const trace=torus([2.5,.32,2.4],.18,.035,M.copper,root);trace.visible=false;
 let s=freshFocus(),active=false,visualDial=0,hadTrace=false;try{hadTrace=focusTrace(JSON.parse(localStorage.getItem('beznogim-dream13-v1')||'null'));}catch{}trace.visible=hadTrace;
 function enter(){s=freshFocus();visualDial=0;active=true;root.visible=false;room.visible=true;update(0,0);}
 function exit(){active=false;room.visible=false;root.visible=true;}
 function tune(n){if(!active)return;const next=tuneFocus(s,n);if(next===s||next.dial===s.dial)return;s=next;chime(160+s.dial*18);changed();}
 function act(){if(!active)return;const n=actFocus(s);if(n===s)return;s=n;chime(440);changed();}
 function update(dt,time){if(!active)return;const old=s.phase;s=advanceFocus(s,dt);visualDial=THREE.MathUtils.damp(visualDial,s.dial,9,Number.isFinite(dt)?Math.max(0,Math.min(dt,.1)):0);const p=focusPose(visualDial,s.progress);world.position.set(0,p.y,p.z);world.scale.setScalar(p.scale);ground.scale.setScalar(1-s.progress*.3);orbit.rotation.y=p.orbit;
  bands.forEach((b,i)=>{b.position.set((i-1)*p.spread,0,(i===1?-.5:.5)*Math.abs(p.spread));b.rotation.y=(i-1)*p.spread*.4;});
  left.position.x=-p.open;right.position.x=p.open;lens.rotation.x=p.tilt;lens.scale.setScalar(1+s.progress*.45);grip.rotation.z=visualDial*Math.PI/6;marker.material=focusReady(s)||s.phase!=='focusing'?M.mint:gold;
  watcher.position.set(1.7+s.progress*.1,1.05,1.85);watcher.rotation.y=-.7;watcher.rotation.z=Math.sin(time)*.03;
  if(old!==s.phase){if(s.phase==='inside'){hadTrace=true;trace.visible=true;try{localStorage.setItem('beznogim-dream13-v1',JSON.stringify({version:1,trace:true}));}catch{}}changed();}
 }
 function geometryPoints(){room.updateMatrixWorld(true);const ps=[];room.traverse(o=>{if(!o.isMesh||!o.visible)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i++)ps.push(new THREE.Vector3(p.getX(i),p.getY(i),p.getZ(i)).applyMatrix4(o.matrixWorld));});return ps;}
 function pick(ray){if(!active||s.phase!=='focusing')return false;const hit=ray.intersectObjects([lens,shutter],true)[0];if(!hit)return false;if(hit.object===shutter){act();return true;}const x=lens.worldToLocal(hit.point.clone()).x;tune((s.dial+(x<0?-1:1)+13)%13);return true;}
 const landmarks=[[-4.3,-.4,-4.3],[4.3,-.4,4.3],[-1.5,4,-2],[1.5,4,-2],[0,2.3,2.5]];
 return {enter,exit,tune,act,update,pick,geometryPoints,ready:()=>focusReady(s),busy:()=>s.phase==='collecting',button:()=>s.phase==='inside'?'выпустить окружение обратно':s.phase==='collecting'?'окружение переезжает…':'нажать на спуск',text:()=>s.phase==='inside'?'Снаружи стало тихо. Весь пейзаж живёт внутри раскрытого объектива. Даже Юпитер поместился. Кольцо можно оставить у чая.':s.phase==='collecting'?'Затвор не фотографирует мир. Он забирает его целиком. Корпус расходится, чтобы никого не прищемить.':focusReady(s)?'Три полосы совпали. Юпитер стал одной планетой, а окружение наконец резкое. Теперь можно нажать на спуск.':'Крути кольцо: вместо объектива движется весь пейзаж. Совмести три полосы Юпитера. Светлая риска подскажет фокус.',inspect:()=>({...s,step:s.phase==='inside'?3:0,active,visualDial,trace:hadTrace,rootVisible:root.visible,roomVisible:room.visible,landmarks:s.phase==='inside'?[[0,-.4,-3],[0,-.4,3],[-3,-.4,0],[3,-.4,0],[0,2.5,0]]:landmarks,worldScale:world.scale.x,worldPosition:world.position.toArray(),orbitAngle:orbit.rotation.y,bandPositions:bands.map(b=>b.position.toArray()),leftX:left.position.x,rightX:right.position.x,lensTilt:lens.rotation.x,lensScale:lens.scale.x,watcher:watcher.position.toArray(),ringPoints:[-.8,.8].map(x=>lens.localToWorld(new THREE.Vector3(x,0,.15)).toArray()),shutterPoint:shutter.getWorldPosition(new THREE.Vector3()).toArray(),geometryBounds:(()=>{room.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(room);return {min:b.min.toArray(),max:b.max.toArray()};})()})};
}
