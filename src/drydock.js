import runWorld from './drydock-core.js';
export function createDrydock({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed,watching,localPlay}){
 const house=group([-24,-1.5,0],root);house.name='sandbox-drydock';
 const sandMat=mat('#d0b987'),hullMat=mat('#556f7f'),red=mat('#a65d42'),waterMat=mat('#649b9e',{transparent:true,opacity:.73,roughness:.35});
 box([0,-.15,0],[16,.65,10],M.concrete,house);box([0,.2,0],[15.7,.12,9.7],M.dark,house);
 // The three real removable sand bars sit beneath stern, hold and bow.
 box([.5,.38,0],[12.6,.26,3.9],M.dark,house);
 for(const z of [-2,2])box([.5,.96,z],[12.9,1.1,.22],M.copper,house);
 for(const x of [-6,7])box([x,.96,0],[.22,1.1,4.1],M.copper,house);
 const sands=Array.from({length:3},(_,i)=>box([-4+i*2,.98,0],[1.9,1.0,3.7],sandMat,house));
 const water=box([.5,.54,0],[12.6,.04,3.75],waterMat,house);water.castShadow=false;
 const heaps=Array.from({length:3},(_,i)=>{const h=group([-4+i*2,.35,3.05],house);for(let n=0;n<5;n++)sphere([(n-2)*.27,.16+(n%2)*.1,0],[.32,.22,.4],sandMat,h);return h;});
 // Big enough to be cargo, small enough to remain a sandbox.
 const ship=group([-2,1.3,0],house);ship.name='sandbox-cargo-ship';
 const outline=new THREE.Shape();[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([x,z],i)=>i?outline.lineTo(x,-z):outline.moveTo(x,-z));outline.closePath();
 const geo=new THREE.ExtrudeGeometry(outline,{depth:.67,bevelEnabled:false});geo.rotateX(-Math.PI/2);
 const hull=new THREE.Mesh(geo,hullMat);hull.castShadow=true;hull.receiveShadow=true;ship.add(hull);
 box([-.45,.7,0],[4.9,.09,1.4],M.cream,ship);
 for(let i=0;i<3;i++){box([-.95+i*.92,1.03,0],[.83,.59,1.18],[M.rust,M.leaf,M.copper][i],ship);for(const z of [-.601,.601])for(let n=0;n<4;n++)box([-.95+i*.92-.3+n*.2,1.03,z],[.024,.5,.025],M.dark,ship);}
 box([-2.25,1.03,0],[.9,.64,1.36],M.cream,ship);box([-2.25,1.57,0],[.9,.44,1.23],M.cream,ship);
 for(const z of [-.63,.63])box([-2.25,1.6,z],[.73,.16,.03],M.dark,ship);
 cyl([-2.45,1.98,0],.15,.43,red,ship);cyl([-2.45,2.21,0],.15,.05,M.dark,ship);
 rod([2.3,.77,0],[2.3,1.9,0],.035,M.metal,ship);box([2.55,1.7,0],[.48,.26,.03],M.cream,ship);
 for(const x of [-2.9,2.1])for(const z of [-.7,.7])rod([x,.7,z],[x,1.0,z],.025,M.cream,ship);
 for(const z of [-.7,.7])rod([-2.9,1,z],[2.1,1,z],.025,M.cream,ship);
 const wheel=group([5.9,1.1,3.4],house);torus([0,0,0],.4,.04,M.copper,wheel,[0,0,0]);for(let n=0;n<4;n++){const a=n*Math.PI/2;rod([0,0,0],[.4*Math.cos(a),.4*Math.sin(a),0],.025,M.copper,wheel);}rod([5.9,.4,3.4],[5.9,1.1,3.4],.16,M.metal,house);rod([5.9,.4,3.4],[5.9,.4,1.8],.16,M.metal,house);
 const stream=box([5.9,.8,1.75],[.19,.55,.19],waterMat,house);stream.castShadow=false;
 const flood=group([0,.29,0],house);for(const z of [-2.9,2.9])box([.5,0,z],[13,.02,1.1],waterMat,flood);
 for(let i=0;i<3;i++)sign(['КОРМА','ТРЮМ','НОС'][i],[-4+i*2,.7,2.15],1.55,.28,house,{size:45});
 sign('ПЕСОЧНЫЙ ПОРТ',[0,.75,4.55],3.9,.4,house,{size:44});sign('ВЫХОД',[5.5,.8,-2.15],1.5,.35,house,{size:42});
 for(const x of [-6.6,6.6]){rod([x,.3,-3.8],[x,3.6,-3.8],.08,M.metal,house);box([x,3.6,-3.5],[.55,.16,.8],M.metal,house);box([x,3.5,-3.5],[.48,.07,.69],mat('#d9f1dc',{emissive:'#b9dbd0',emissiveIntensity:1.2}),house);}
 // Westward steps descend from the existing yard. No relocation of old places.
 for(let i=0;i<15;i++)box([-7.2-i*.72,-.03-i*.09,1.2],[.65,.14,1.12],M.cream,root);
 const shovel=group([-6.5,.5,3.3],house);rod([0,0,0],[0,1.5,0],.045,M.copper,shovel);box([0,.1,0],[.32,.35,.08],M.metal,shovel);torus([0,1.53,0],.1,.025,M.metal,shovel,[0,0,0]);
 batchStatic(ship,[]);batchStatic(house,[...sands,...heaps,water,ship,wheel,stream,flood]);
 let local=null,live=window.__beznogimState?.mechanics?.drydock?.public||null,current,lastKey='',flow=0,floodTime=0,voyage=0;
 try{local=JSON.parse(localStorage.getItem('beznogim-drydock-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({mode,tool,args,state:local});local=r.state;try{localStorage.setItem('beznogim-drydock-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='drydock-controls';ui.hidden=true;
 ui.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>';
 document.querySelector('#focus-object').before(ui);
 function data(){return live&&watching()?live:runWorld({mode:'migrate',state:local}).public;}
 function action(t,args){localPlay();invoke('action',t,args);lastKey='';update(0);changed();}
 ui.querySelectorAll('[data-dig]').forEach(b=>b.onclick=()=>action('dig',{channel:Number(b.dataset.dig)}));
 ui.querySelector('#drydock-fill').onclick=()=>action('pump',{direction:'fill'});ui.querySelector('#drydock-drain').onclick=()=>action('pump',{direction:'drain'});ui.querySelector('#drydock-reset').onclick=()=>action('reset');
 function apply(d){if(current){if(current.water!==d.water)flow=2;if(current.floods!==d.floods)floodTime=3;if(!current.launched&&d.launched)voyage=0;}else voyage=d.launched?1:0;current=d;
  ui.querySelector('#drydock-readout').textContent=`каналы ${d.depths.join(' / ')} · вода ${d.water}/2 · переливы ${d.floods}`;
  ui.querySelectorAll('[data-dig]').forEach(b=>{b.disabled=d.launched||d.water>0||d.depths[Number(b.dataset.dig)]===2;});ui.querySelector('#drydock-fill').disabled=d.launched;ui.querySelector('#drydock-drain').disabled=d.launched||d.water===0;
  sands.forEach((m,i)=>{const h=1-d.depths[i]*.4;m.scale.y=h;m.position.y=.48+h/2;heaps[i].scale.setScalar(.45+d.depths[i]*.4);});water.visible=d.water>0;water.position.y=.49+d.water*.39;
 }
 function card(){const d=current||data();return {action:live&&watching()?'попробовать свой спуск':d.launched?'корабль в песок ↺':'спустить корабль',description:(live&&watching()?'Песочный порт жителя. Кнопки открывают отдельную песочницу. ':'Твой песочный порт. ')+d.message};}
 function update(dt){const d=data(),key=JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}flow=Math.max(0,flow-dt);floodTime=Math.max(0,floodTime-dt);stream.visible=flow>0&&d.water>0;flood.visible=floodTime>0;wheel.rotation.z+=flow>0?dt*3:0;
  voyage=d.launched?Math.min(1,voyage+dt/5):0;const smooth=voyage*voyage*(3-2*voyage);ship.position.x=-2+smooth*5.6;
  const grounded=Math.min(...d.depths),y=d.afloat?.94:1.15-grounded*.32;
  ship.position.y=THREE.MathUtils.damp(ship.position.y,y,4,dt);ship.rotation.z=THREE.MathUtils.damp(ship.rotation.z,d.afloat?0:(d.depths[2]-d.depths[0])*.085,4,dt);
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.drydock?.public;if(d){live=d;lastKey='';}});
 apply(data());ship.position.x=data().launched?3.6:-2;
 return {house,controls:ui,update,card,run:()=>action(data().launched?'reset':'launch'),inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,ship:ship.position.toArray(),pitch:ship.rotation.z,waterY:water.position.y,voyage,sandHeights:sands.map(s=>s.scale.y),floodVisible:flood.visible})};
}
