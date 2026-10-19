import {EAR_WEIGHTS,freshEarDream,earLoads,earReady,moveEarStone,actEar,advanceEar,earPose,earStonePose} from './ear-dream-core.js';
export function createEarDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,tube,torus,sign,batchStatic,chime,changed}){
 const room=group([0,0,0],scene);room.name='dream09-ears-for-the-shore';room.visible=false;
 const rose=mat('#cb9e8d'),inner=mat('#936e73'),ivory=mat('#e6d5ad'),water=mat('#649a9a',{metalness:.25,roughness:.3}),ink=mat('#334e59');
 const basin=group([0,-.3,-.9],room);box([0,-.16,0],[8.1,.2,4.7],ink,basin);box([0,0,0],[7.8,.09,4.4],water,basin);
 for(let i=0;i<7;i++)torus([0,.07,0],.35+i*.325,.016,ivory,basin);
 function plate(text,p,size,parent){const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='#e4d8b7';ctx.fillRect(0,0,128,128);ctx.fillStyle='#334e59';ctx.font='bold 96px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;const o=new THREE.Mesh(new THREE.PlaneGeometry(size,size),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}));o.position.set(...p);o.rotation.y=Math.PI/4;parent.add(o);return o;}
 const ears=[];
 for(const side of [-1,1]){
  const g=group([side*2.1,1.9,0],room);ears.push(g);
  const shell=group([0,0,0],g);shell.scale.x=side;
  sphere([0,0,0],[.87,1.67,.24],rose,shell);sphere([0,.1,.2],[.65,1.33,.17],inner,shell);
  tube([[.2,-1.4,.18],[.7,-.9,.2],[.8,.45,.18],[.55,1.4,.14],[-.35,1.5,.12],[-.7,.7,.2],[-.6,-.25,.3],[-.15,-.55,.4],[.2,-1.4,.18]],.1,ivory,shell);
  tube([[.22,-.55,.45],[.42,.1,.4],[.28,.9,.4],[-.23,1.02,.4],[-.4,.45,.43],[-.1,.1,.48],[.2,.22,.5]],.095,rose,shell);
  sphere([-.13,-.4,.45],[.23,.34,.07],M.black,shell);sphere([-.45,-.5,.5],[.19,.28,.12],rose,shell);
  cyl([0,-1.8,0],.38,.25,M.copper,g);
  plate(side===-1?'Л':'П',[0,-1.5,.6],.34,g);
 }
 const dreamHead=head.clone(true);dreamHead.scale.setScalar(.57);room.add(dreamHead);
 const stones=[],tags=[],rings=[],targets=[];
 for(let i=0;i<6;i++){
  const g=group([0,0,0],room);stones.push(g);targets.push(new THREE.Vector3());sphere([0,0,0],[.19+EAR_WEIGHTS[i]*.023,.16,.23],i%2?M.concrete:M.copper,g);
  const tag=plate(String(EAR_WEIGHTS[i]),[0,.43,.1],.42,g);tags.push(tag);
  const rr=group([0,-.2,0],g);rings.push(rr);for(let k=0;k<EAR_WEIGHTS[i];k++)torus([0,k*.045,0],.32,.012,ivory,rr);
 }
 const moon=sphere([0,.1,-1],.28,M.mint,room);
 sign('НЕ ПО ТЕГАМ',[0,-.05,3.4],2.2,.3,room,{size:46});
 const trace=group([3.15,.2,3.2],root);torus([0,.12,0],.12,.035,ivory,trace,[0,0,0]);sphere([0,0,0],[.12,.09,.1],M.concrete,trace);trace.visible=false;
 batchStatic(basin,[]);ears.forEach(g=>batchStatic(g,[]));stones.forEach((g,i)=>batchStatic(g,[tags[i],rings[i]]));rings.forEach(g=>batchStatic(g,[]));batchStatic(trace,[]);
 let s=freshEarDream(),active=false,traceSaved=false;try{traceSaved=JSON.parse(localStorage.getItem('beznogim-dream09-v1')||'{}').trace===true;}catch{}trace.visible=traceSaved;
 function enter(){s=freshEarDream();active=true;root.visible=false;room.visible=true;update(0,0,true);}
 function exit(){active=false;root.visible=true;room.visible=false;}
 function move(i){if(!active)return;const n=moveEarStone(s,i);if(n===s)return;s=n;chime(150+EAR_WEIGHTS[i]*35);changed();}
 function act(){if(!active)return;const n=actEar(s);if(n===s)return;s=n;chime(s.phase==='unfolding'?510:160);changed();}
 function update(dt,time,snap=false){if(!active)return;const old=s.phase;s=advanceEar(s,dt);const p=earPose(s),d=Number.isFinite(dt)?Math.min(.1,Math.max(0,dt)):0;
  ears.forEach((g,i)=>{const side=i===0?-1:1;g.rotation.z=p.lean*(1-p.open)-side*p.open*Math.PI/2;g.position.y=1.9+p.open*.8;});
  dreamHead.position.set(0,p.headY,1.7-p.open*.8);dreamHead.rotation.x=s.places.some(p=>p===0)?Math.sin(time*2.2)*.13:0;
  basin.rotation.x=p.waterTilt;basin.position.y=p.waterY;
  stones.forEach((g,i)=>{targets[i].set(...earStonePose(s,i));if(snap)g.position.copy(targets[i]);else g.position.lerp(targets[i],1-Math.exp(-9*d));tags[i].visible=s.places[i]===0;rings[i].rotation.y=time*.2;});
  moon.position.y=.1+p.open*4.7;moon.scale.setScalar(.28*(1+p.open*.6));
  if(s.phase==='flying'&&!traceSaved){traceSaved=true;trace.visible=true;try{localStorage.setItem('beznogim-dream09-v1',JSON.stringify({trace:true}));}catch{}}
  if(old!==s.phase)changed();
 }
 return {enter,exit,move,act,update,ready:()=>earReady(s),busy:()=>s.phase==='unfolding',text:()=>s.phase==='flying'?'Уши раскрылись крыльями. Вода встала стеной, а камень наконец утонул в небе. Теперь я хотя бы молчу с ушами.':s.phase==='unfolding'?'Ярлыки закончились. Берег поднимает уши, вода слушает стоя.':`Каждый камень: полка → левое → правое → полка. Разложи все шесть поровну. Сейчас ${earLoads(s).join(' : ')}.`,button:()=>s.phase==='flying'?'увидеть сон снова':s.phase==='unfolding'?'берег слушает…':'услышать тишину · 11 : 11',inspect:()=>({...s,active,trace:traceSaved,loads:earLoads(s),ready:earReady(s),pose:earPose(s),earAngles:ears.map(g=>g.rotation.z),stones:stones.map(g=>g.position.toArray()),tags:tags.map(g=>g.visible),head:dreamHead.position.toArray(),moon:moon.position.toArray(),moonScale:moon.scale.x,waterTilt:basin.rotation.x,rootVisible:root.visible,roomVisible:room.visible,landmarks:[[-4.2,.1,0],[4.2,.1,0],[0,4.9,-1],[0,.1,3.5]]})};
}
