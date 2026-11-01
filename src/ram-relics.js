import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Artistic reconstruction from a single reference, NOT photogrammetry.
// Decorative museum miniatures. No fabrication or combat simulation.
export const RAM_RELICS={id:'ram_reliquary',position:[55,.6,-42],center:[55,-43]};
export function createRamRelics({root,mat,group,box,cyl,rod,sign}){
 const house=group([55,-1.7,-43],root);house.name='ram-reliquary';
 const stone=mat('#314b50'),edge=mat('#c8ad74',{metalness:.64,roughness:.42}),velvet=mat('#162f34'),pcb=mat('#287954',{roughness:.46}),rail=mat('#36aa79'),chip=mat('#182c2e',{roughness:.43}),gold=mat('#e8be62',{metalness:.75,roughness:.31}),trace=mat('#83b788',{metalness:.3,roughness:.6}),black=mat('#202b30',{roughness:.65}),grey=mat('#829596',{metalness:.3}),cream=mat('#d4c5a5'),wrapAlt=mat('#bbae91');
 const base=group([0,0,0],house);
 box([0,.15,0],[5.1,.3,2.8],stone,base);box([0,.33,0],[4.8,.06,2.55],edge,base);
 box([0,.58,0],[4.62,.45,2.4],stone,base);box([0,.82,-.24],[4.4,.08,1.8],velvet,base);
 // Open display, not a huge enclosing glass box. The artifacts remain visible from behind.
 for(const x of [-1.08,1.08]){rod([x,.84,-.45],[x,3.3,-.45],.045,edge,base);for(const y of [1.55,3.2])rod([x,y,-.45],[x,y,.08],.035,edge,base);}
 const bodies=[];const chips=[];const contacts=[];
 for(let k=0;k<2;k++){
  const g=group([k?1.03:-1.03,.99,.04],house);g.rotation.z=k?-.055:.07;bodies.push(g);
  // Both silhouettes carry the long DIMM edge and a tapered lower end, as in the photo.
  const shape=new THREE.Shape();[[-.39,2.25],[.39,2.25],[.39,1.45],[.33,.90],[.15,.32],[-.12,0],[-.32,.75],[-.39,1.15]].forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();
  const board=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.07,bevelEnabled:false}),pcb);board.position.z=-.035;g.add(board);
  // Real raised chip packages and edge contacts, not a flat photo on a plane.
  for(const side of [-1,1]){
   for(let i=0;i<5;i++){const y=.57+i*.33;const w=i===0?.19:.27;box([0,y,side*.061],[w,.22,.057],chip,g);chips.push([k,side,y]);
    for(let j=0;j<4;j++)for(const s of [-1,1])box([s*(w/2+.018),y-.073+j*.05,side*.066],[.035,.018,.016],grey,g);
    for(let j=0;j<3;j++){const x=-.28+j*.085;rod([x,y+.11,side*.039],[x,y+.22,side*.039],.005,trace,g);rod([x,y+.22,side*.039],[x+.04,y+.26,side*.039],.005,trace,g);}
   }
   for(let j=0;j<44;j++){const y=.45+j*.039;const x=-.37+Math.max(0,1.13-y)*.23;box([x,y,side*.04],[.065,.022,.014],gold,g);contacts.push([k,side,y]);}
   for(let j=0;j<8;j++){const y=.78+j*.17;box([.25,y,side*.045],[.06,.035,.023],cream,g);}
  }
  if(k===0){
   // Black tape, bright green rails and a blunt silver cap are the left artifact's signature.
   box([0,3.03,0],[.49,1.53,.27],black,g);
   for(let i=0;i<13;i++){const o=box([0,2.39+i*.105,.012],[.51,.088,.29],i%3===0?chip:black,g);o.rotation.z=.025*Math.sin(i*1.7);}
   for(const x of [-.33,.33])box([x,3.03,0],[.11,1.62,.17],rail,g);
   box([0,2.26,0],[1.04,.12,.23],rail,g);
   for(const x of [-.45,.45]){const o=box([x,2.18,.01],[.17,.23,.2],cream,g);o.rotation.z=x;}
   cyl([0,3.88,0],.27,.18,grey,g);box([.25,3.88,0],[.26,.13,.22],edge,g);
  }else{
   const core=cyl([0,3.12,0],.30,1.72,wrapAlt,g);core.scale.z*=.72;
   // Broad overlapping ribbons, intentionally uneven like the beige wrap in the reference.
   for(let i=0;i<14;i++){const o=cyl([.012*Math.sin(i),2.35+i*.113,.01],.31+.025*Math.sin(i*.8),.18,i%3===0?wrapAlt:cream,g);o.scale.z*=.74;o.rotation.z=.11*Math.sin(i*.7);o.rotation.x=.10*Math.cos(i);}
   const cap=cyl([0,3.98,0],.28,.13,cream,g);cap.scale.z*=.74;
   box([0,2.33,.08],[.7,.17,.23],wrapAlt,g);box([-.34,2.46,.12],[.25,.10,.30],black,g);
  }
  const tag=sign(k?'02 / ОБМОТКА':'01 / ИЗОЛЕНТА',[0,.08,.57],1.55,.22,base,{size:29,bg:'#314b50',fg:'#e5d6b2'});tag.position.x=k?1.13:-1.13;tag.position.y=.92;
 }
 sign('RAM · РЕЛИКВИИ',[0,.56,1.212],3.8,.33,base,{size:39,bg:'#314b50',fg:'#ead4a4'});
 sign('ОДНА ФОТОГРАФИЯ / ДВЕ ФАНТАЗИИ',[0,.25,1.413],3.9,.20,base,{size:23,bg:'#314b50',fg:'#c4d6c5'});
 const path=group([0,0,0],root);path.name='ram-reliquary-approach';
 for(let i=0;i<10;i++)box([49+i*.58,-1.59,-41.1],[.4,.13,.7],stone,path);
 function batch(g){g.updateMatrixWorld(true);const inv=g.matrixWorld.clone().invert(),buckets=new Map(),old=[];g.traverse(o=>{if(!o.isMesh||o.material.map)return;old.push(o);let list=buckets.get(o.material);if(!list)buckets.set(o.material,list=[]);const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(inv.clone().multiply(o.matrixWorld));list.push(geo);});old.forEach(o=>o.removeFromParent());for(const [material,gs] of buckets){const o=new THREE.Mesh(mergeGeometries(gs,false),material);o.castShadow=o.receiveShadow=true;g.add(o);gs.forEach(g=>g.dispose());}}
 bodies.forEach(batch);batch(base);batch(path);
 house.updateMatrixWorld(true);const points=[];house.traverse(o=>{if(o.isMesh){const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++)points.push(new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld));}});
 const bounds=new THREE.Box3().setFromPoints(points);
 const pickPoint=bodies[0].localToWorld(new THREE.Vector3(0,1.23,.095)).toArray();
 return {house,bounds,geometryPoints:()=>points,inspect:()=>({pickPoint,id:RAM_RELICS.id,position:RAM_RELICS.position,static:true,artifacts:2,chips:chips.length,contacts:contacts.length,reconstruction:'artistic-single-image',weaponsMechanic:false,pathSteps:10,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}})};
}
