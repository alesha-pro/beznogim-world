import * as THREE from 'three';
import land from './territory.json';

// Shared coordinates stay stable as the workshop settles new districts.
export function createTerritory({root, camera, controls, mobile, go, overview, home}) {
  const terrain=new THREE.Group();terrain.name='unsettled-territory';root.add(terrain);
  const half=land.size/2;
  const outline=[[-half+4,-half],[half-4,-half],[half,-half+4],[half,half-4],[half-4,half],[-half+4,half],[-half,half-4],[-half,-half+4]];
  const shape=new THREE.Shape();outline.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z));shape.closePath();
  const groundGeo=new THREE.ExtrudeGeometry(shape,{depth:1.8,bevelEnabled:false});groundGeo.rotateX(-Math.PI/2);groundGeo.translate(0,-3.5,0);
  const ground=new THREE.Mesh(groundGeo,new THREE.MeshStandardMaterial({color:'#233e35',roughness:1}));ground.receiveShadow=true;terrain.add(ground);
  let seed=8409;const rand=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
  const rocks=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:'#8a9980',roughness:1}),150);
  const grass=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,4),new THREE.MeshStandardMaterial({color:'#9aa880',roughness:1}),850);
  const o=new THREE.Object3D();
  for(const [inst,n,isRock]of [[rocks,150,true],[grass,850,false]]){
    for(let i=0;i<n;i++){
      let x,z;do{x=(rand()-.5)*(land.size-10);z=(rand()-.5)*(land.size-10)}while(Math.abs(x)<11&&Math.abs(z)<9);
      const h=isRock?.15+rand()*.48:.12+rand()*.42;
      o.position.set(x,-1.7+h*.25,z);o.rotation.set(0,rand()*6.28,isRock?rand()*.25:0);o.scale.set(isRock?h*1.3:.07,h,isRock?h:.07);o.updateMatrix();inst.setMatrixAt(i,o.matrix);
    }
    inst.instanceMatrix.needsUpdate=true;terrain.add(inst);
  }
  // A narrow way out of the original raised yard; no prebuilt future attractions.
  const pathMat=new THREE.MeshStandardMaterial({color:'#c1b692',roughness:1});
  for(let i=0;i<16;i++){
    const step=new THREE.Mesh(new THREE.BoxGeometry(1.15,.12,.65),pathMat);
    step.position.set(-.6,-.06-i*.105,5.8+i*.7);step.receiveShadow=true;terrain.add(step);
  }
  const nav=document.createElement('nav');nav.className='territory-nav';nav.setAttribute('aria-label','Путешествие по миру');
  nav.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>';
  document.body.append(nav);
  const dialog=document.createElement('dialog');dialog.id='territory-dialog';dialog.setAttribute('aria-labelledby','territory-title');
  dialog.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор пока один. Всё остальное можно обжить.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>';
  document.body.append(dialog);
  const grid=dialog.querySelector('#territory-grid');
  for(const sector of land.sectors){
    const b=document.createElement('button');b.type='button';b.dataset.sector=sector.id;b.className=sector.status==='settled'?'settled':'';
    b.textContent=sector.status==='settled'?`● ${sector.id==='0:0'?'двор':sector.name}`:`· ${sector.id}`;
    b.setAttribute('aria-label',`${sector.name}, ${sector.id}`);
    b.onclick=()=>{dialog.close();go(sector.x,sector.z,sector.status==='settled');};grid.append(b);
  }
  document.querySelector('#territory-map').onclick=()=>dialog.showModal();
  document.querySelector('#world-overview').onclick=overview;
  dialog.querySelector('#territory-close').onclick=()=>dialog.close();
  dialog.querySelector('#territory-home').onclick=()=>{dialog.close();home();};
  const location=nav.querySelector('#territory-location');let last='';
  function update(){
    const x=Math.round(controls.target.x/land.sectorSize),z=Math.round(controls.target.z/land.sectorSize),id=`${x}:${z}`;
    if(id!==last){last=id;const sector=land.sectors.find(s=>s.id===id);location.textContent=`${sector?.status==='settled'?sector.name:'свободная земля'} · ${id}`;for(const b of grid.children)b.classList.toggle('current',b.dataset.sector===id);}
  }
  return {half,update,inspect:()=>({size:land.size,sectorSize:land.sectorSize,sectors:land.sectors.length,settled:land.sectors.filter(s=>s.status==='settled').length,visible:root.visible,sector:last})};
}
