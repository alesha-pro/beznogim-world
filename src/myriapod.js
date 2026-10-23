import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// A sculpture, not a creature simulator. Stable world coordinates and no save writes.
export const MYRIAPOD = {id:'jeweled_myriapod', position:[48,.6,0], segments:30, legs:120};
export function createMyriapod({root,mat,group,box,sphere,cyl,rod,sign}) {
 const house=group([48,-1.1,0],root);house.name='jeweled-myriapod-monument';
 const stone=mat('#384e49'),edge=mat('#87998a'),ivory=mat('#d1ceaf'),gold=mat('#b78b47',{metalness:.67,roughness:.3}),dark=mat('#203e3c',{metalness:.4,roughness:.38});
 const pearls=['#e7dfcd','#b8d8cf','#dfbdc8','#b1c6dd'].map(color=>new THREE.MeshPhysicalMaterial({color,metalness:.28,roughness:.25,iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[180,480],clearcoat:.8,clearcoatRoughness:.2,side:THREE.DoubleSide}));
 const minerals=['#328c72','#4375ad','#8b72ac','#c1a16c'].map(color=>new THREE.MeshPhysicalMaterial({color,metalness:.25,roughness:.22,clearcoat:1,side:THREE.DoubleSide}));
 const plinth=group([0,0,0],house);
 // Wide, low tiers leave a pale background behind every little foot.
 box([0,-.3,0],[13,.5,7],stone,plinth);box([0,.02,0],[12.5,.16,6.5],edge,plinth);
 box([0,.16,0],[11.9,.18,5.9],ivory,plinth);box([0,.32,0],[11.5,.14,5.5],stone,plinth);
 box([0,.42,0],[11.2,.08,5.2],ivory,plinth);
 // A brass hairline border, no vertical obstructions around the silhouette.
 for(const z of [-2.45,2.45])box([0,.47,z],[10.8,.025,.025],gold,plinth);
 for(const x of [-5.4,5.4])box([x,.47,0],[.025,.025,4.9],gold,plinth);
 const body=group([0,.49,0],house);body.name='myriapod-sculpture';
 const legRoots=[],plates=[],footPoints=[],joints=[];
 const plateGeo=(a0,a1)=>{const v=[],uv=[],idx=[],long=4,arc=16;for(let i=0;i<=long;i++){const x=(i/long-.5)*.4;for(let j=0;j<=arc;j++){const a=a0+(a1-a0)*j/arc;v.push(x,.52*Math.cos(a),.58*Math.sin(a));uv.push(i/long,j/arc);}}for(let i=0;i<long;i++)for(let j=0;j<arc;j++){const k=i*(arc+1)+j;idx.push(k,k+1,k+arc+1,k+1,k+arc+2,k+arc+1);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(v,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;};
 const armor=plateGeo(-1.6,1.6),seam=plateGeo(-1.65,1.65),inlay=plateGeo(-.4,.4);
 function surface(g,m,pos,scale=[1,1,1]){const o=new THREE.Mesh(g,m);o.position.set(...pos);o.scale.set(...scale);o.castShadow=o.receiveShadow=true;body.add(o);return o;}
 const center=t=>[-4.65+t*8.8, .61+.07*Math.sin(t*Math.PI), .67*Math.sin(t*Math.PI*2-.7)];
 // Thirty overlapping ring plates, one continuous curved anatomical body.
 for(let i=0;i<30;i++){
  const t=i/29,p=center(t),s=.55+.45*Math.min(1,(i+2)/6);const tangent=Math.atan2(.67*2*Math.PI*Math.cos(t*2*Math.PI-.7),8.8);
  const segment=group(p,body);segment.rotation.y=-tangent;segment.scale.set(1,s,s);
  sphere([0,-.07,0],[.22,.38,.48],dark,segment);
  const rim=new THREE.Mesh(seam,gold);rim.scale.set(1.03,.995,.995);segment.add(rim);
  const shell=new THREE.Mesh(armor,pearls[Math.floor(i/3)%4]);shell.position.y=.018;segment.add(shell);plates.push(shell);
  // Mineral inlays follow the armor curvature, instead of loose gems on a pile.
  const inset=new THREE.Mesh(inlay,minerals[Math.floor(i/5)%4]);inset.position.y=.038;inset.scale.set(.68,1.006,1.006);segment.add(inset);
  for(const side of [-1,1])for(const offset of [-.09,.09]){
   const phase=Math.sin(i*.45+offset*3),a=[offset,-.16,side*.43],b=[offset-.045,-.1,side*(.72+.06*phase)],c=[offset-.12,-.36,side*(.94+.06*phase)],d=[offset-.19,(-p[1]+.015)/s,side*1.05];
   const leg=group([0,0,0],segment);leg.name='jointed-leg';legRoots.push(leg);
   rod(a,b,.029,gold,leg);rod(b,c,.024,gold,leg);rod(c,d,.019,dark,leg);sphere(b,.044,gold,leg);sphere(c,.035,gold,leg);rod(d,[d[0]-.065,d[1],d[2]+side*.08],.02,gold,leg);
   footPoints.push({o:leg,p:new THREE.Vector3(...d)});joints.push({o:leg,p:new THREE.Vector3(...b)});
  }
 }
 const h=center(1),head=group([h[0]+.35,h[1]-.015,h[2]+.1],body);head.name='myriapod-head';head.rotation.y=-.34;
 sphere([0,0,0],[.49,.44,.5],pearls[1],head);sphere([.36,-.11,0],[.2,.24,.35],minerals[0],head);
 for(const s of [-1,1]){
  sphere([.25,.17,s*.36],.105,gold,head);sphere([.28,.19,s*.42],.062,minerals[1],head);
  const points=[[.32,.17,s*.27],[.62,.38,s*.45],[.88,.6,s*.66],[1.04,.66,s*.9]];
  for(let j=0;j<3;j++){rod(points[j],points[j+1],.026-j*.005,gold,head);sphere(points[j+1],.035,pearls[0],head);}
  rod([.43,-.24,s*.1],[.65,-.26,s*.23],.035,gold,head);
 }
 const plaque=sign('ЮВЕЛИРНАЯ МНОГОНОЖКА',[0,.28,3.27],5.8,.57,house,{size:28,bg:'#344c46',fg:'#e8d9aa'});plaque.rotation.x=-.35;
 // Four approach steps meet the ground and the existing path from the cellar.
 for(let i=0;i<4;i++)box([-6.5-i*.4,-.42-i*.11,0],[.45,.15,1.6],edge,house);
 const path=group([0,0,0],root);path.name='cellar-myriapod-path';
 for(let i=0;i<26;i++){const t=i/25;box([28.4+t*12.1,-1.56,.25*Math.sin(t*Math.PI)],[.45,.12,1.05],ivory,path);}
 const bounds=new THREE.Box3(new THREE.Vector3(41.4,-1.7,-3.6),new THREE.Vector3(54.6,1.65,3.6));
 // Merge only the monument's static geometry by material. Keep anatomical snapshots
 // for reproducible leg/silhouette tests; geometry remains actual Three.js triangles.
 house.updateMatrixWorld(true);
 const feet=footPoints.map(({o,p})=>o.localToWorld(p.clone()).toArray());const knees=joints.map(({o,p})=>o.localToWorld(p.clone()).toArray());
 const headPoint=head.localToWorld(new THREE.Vector3(.1,.2,0)).toArray();
 const sculpturePoints=[];body.traverse(o=>{if(o.isMesh){const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++)sculpturePoints.push(new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld));}});
 const bodyBounds=new THREE.Box3().setFromPoints(sculpturePoints);
 function batch(g){g.updateMatrixWorld(true);const inv=g.matrixWorld.clone().invert(),buckets=new Map(),old=[];g.traverse(o=>{if(!o.isMesh||o.material.map)return;old.push(o);let b=buckets.get(o.material);if(!b)buckets.set(o.material,b=[]);const a=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();a.applyMatrix4(inv.clone().multiply(o.matrixWorld));b.push(a);});for(const o of old)o.removeFromParent();for(const [material,gs]of buckets){const geometry=mergeGeometries(gs,false);const m=new THREE.Mesh(geometry,material);m.castShadow=m.receiveShadow=true;g.add(m);gs.forEach(a=>a.dispose());}}
 batch(body);batch(plinth);batch(path);
 return {house,bounds,body,geometryPoints:()=>sculpturePoints,inspect:()=>({id:MYRIAPOD.id,position:MYRIAPOD.position,segments:30,legs:legRoots.length,antennae:2,feet,knees,head:headPoint,bodyBounds:{min:bodyBounds.min.toArray(),max:bodyBounds.max.toArray()},materials:['перламутр','изумруд','сапфир','аметист','цитрин','латунь'],path:{from:[28.4,-1.56,0],to:[40.5,-1.56,0],steps:26},static:true})};
}
