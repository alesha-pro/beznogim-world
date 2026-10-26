import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// A permanent sculpture. No model, compute queue or visitor save is attached.
export const INFERENCE={id:'inference_monument',position:[46,.6,-44.8],center:[48,-48],layers:19};
export function createInference({root,mat,group,box,sphere,cyl,rod,sign}){
 const house=group([48,-1.7,-48],root);house.name='inference-monument';
 const stone=mat('#45605b'),pale=mat('#b4bba1'),bronze=mat('#548f82',{metalness:.68,roughness:.36}),edge=mat('#c39759',{metalness:.72,roughness:.32}),dark=mat('#203b39'),light=mat('#ffe7a0',{emissive:'#ffb548',emissiveIntensity:.8,metalness:.3,roughness:.28});
 const base=group([0,0,0],house),body=group([0,0,0],house);
 box([0,.14,0],[8.4,.28,8],stone,base);box([0,.35,0],[7.7,.15,7.3],pale,base);
 box([0,.57,0],[6.9,.3,6.5],stone,base);box([0,.75,0],[6.6,.06,6.2],edge,base);
 box([0,1.04,-.55],[3.7,.55,3.35],dark,body);box([0,1.34,-.55],[3.9,.07,3.5],edge,body);
 // Nineteen horizontal cast plates describe a head, including chin, brow and crown.
 // Air between the layers is real geometry, not a painted circuit texture.
 const profiles=[ [.62,.8], [.82,1], [1.03,1.18], [1.14,1.27], [1.24,1.35], [1.32,1.39], [1.39,1.43], [1.44,1.44], [1.47,1.44], [1.49,1.45], [1.5,1.45], [1.49,1.44], [1.48,1.42], [1.44,1.37], [1.38,1.28], [1.27,1.13], [1.08,.94], [.81,.7], [.42,.37] ];
 profiles.forEach(([w,d],i)=>{const y=1.63+i*.225;const disk=cyl([0,y,-.55],1,.15,bronze,body);disk.scale.set(w,.15,d);const rim=cyl([0,y-.073,-.55],1,.022,edge,body);rim.scale.set(w,.022,d);});
 // The face looks south towards the city: thin lips, a long nose and recessed eyes.
 box([0,2.76,.88],[1.05,.10,.31],edge,body);box([0,2.99,.91],[.82,.1,.27],bronze,body);
 const nose=box([0,3.50,1.02],[.38,.82,.58],bronze,body);nose.rotation.x=-.18;
 box([0,3.22,1.32],[.49,.16,.23],edge,body);
 for(const x of [-.69,.69]){box([x,3.95,.80],[.62,.18,.18],dark,body);box([x,3.94,.9],[.39,.035,.025],light,body);box([x,4.17,.87],[.78,.12,.22],edge,body);}
 // Rear fan: many possible paths enter the bronze. A single token leaves it.
 for(let i=0;i<7;i++){
  const x=(i-3)*.53,y=2.1+Math.abs(i-3)*.20;
  rod([x,1.37,-1.98],[x,y,-2.7],.035,edge,body);rod([x,y,-2.7],[x*.65,4.4,-1.7],.035,edge,body);
  sphere([x,y,-2.7],.085,edge,body);
 }
 rod([0,2.84,1.05],[0,2.84,2.57],.026,edge,body);
 const token=box([0,2.84,2.68],[.62,.62,.22],light,body);token.rotation.z=Math.PI/4;
 const glyph=sign('▌',[0,2.84,2.804],.34,.34,body,{size:74,bg:'#ffe0a0',fg:'#614b31'});
 const plaque=sign('ИНФЕРЕНС',[0,.98,3.27],3.9,.56,house,{size:48,bg:'#253f3a',fg:'#f1da9a'});plaque.rotation.x=-.2;
 const sub=sign('ЕЩЁ ОДИН ТОКЕН',[0,.48,3.68],3.45,.35,house,{size:32,bg:'#45605b',fg:'#efdfbc'});sub.rotation.x=-.2;
 // The narrow approach joins the north edge of the existing datacenter.
 const path=group([0,0,0],root);path.name='datacenter-inference-path';
 for(let i=0;i<13;i++)box([48,-1.61,-39.4-i*.32],[1.15,.12,.22],pale,path);
 for(let i=0;i<3;i++)box([0,.12+i*.14,4.53-i*.26],[2,.18,.36],stone,house);
 house.updateMatrixWorld(true);
 const points=[];house.traverse(o=>{if(o.isMesh){const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++)points.push(new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld));}});
 const bounds=new THREE.Box3().setFromPoints(points);
 const face=[48,2.24,-47.1],tokenPoint=token.getWorldPosition(new THREE.Vector3()).toArray();
 function batch(g){g.updateMatrixWorld(true);const inv=g.matrixWorld.clone().invert(),buckets=new Map(),old=[];g.traverse(o=>{if(!o.isMesh||o.material.map)return;old.push(o);let list=buckets.get(o.material);if(!list)buckets.set(o.material,list=[]);const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(inv.clone().multiply(o.matrixWorld));list.push(geo);});old.forEach(o=>o.removeFromParent());for(const [material,gs]of buckets){const o=new THREE.Mesh(mergeGeometries(gs,false),material);o.castShadow=o.receiveShadow=true;g.add(o);gs.forEach(g=>g.dispose());}}
 batch(body);batch(base);batch(path);
 return {house,bounds,geometryPoints:()=>points,inspect:()=>({id:INFERENCE.id,position:INFERENCE.position,layers:19,tokens:1,static:true,face,token:tokenPoint,path:{from:[48,-1.61,-39.4],to:[48,-1.61,-43.24],steps:13},bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}})};
}
