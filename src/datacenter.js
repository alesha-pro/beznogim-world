import * as THREE from 'three';
import catalog from '../public/datacenter-catalog.json';
export function createDatacenter({root,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed}){
 const house=group([48,-1.6,-35],root);house.name='little-datacenter';
 const silver=mat('#9caeaa',{metalness:.65,roughness:.35}),black=mat('#1e292d'),edge=mat('#465459'),pcb=mat('#29433b'),paper=mat('#c3a778'),egg=mat('#d6c49c'),red=mat('#a94438'),white=mat('#e7e1c9'),copper=mat('#bf7952');
 const stage=group([0,0,0],house);box([0,0,0],[8.4,.25,5.2],mat('#b4b49b'),stage);
 // No roof or front wall: every support and improvised packing stays visible.
 sign('ЦОД · ЯЙЦА НЕ ТРОГАТЬ',[0,.45,2.58],7.2,.55,stage,{size:48,bg:'#365b50',fg:'#f4e5ba'});
 const rig=group([-1.6,.18,0],house);rig.name='alexey-open-rig';
 const W=3.7,D=2.55,H=2.55;
 // L-shaped angle iron, not solid rectangular furniture.
 for(const x of [-W/2,W/2])for(const z of [-D/2,D/2]){box([x,H/2,z],[.08,H,.18],silver,rig);box([x+.05,H/2,z+.05],[.18,H,.08],silver,rig);}
 for(const y of [.12,1.0,2.22]){
 for(const z of [-D/2,D/2]){box([0,y,z],[W,.08,.16],silver,rig);box([0,y+.05,z+.05],[W,.16,.06],silver,rig);}
 for(const x of [-W/2,W/2])box([x,y,0],[.12,.1,D],silver,rig);
 }
 box([0,.14,0],[W,.07,D],silver,rig);box([-1,.22,.3],[1.2,.055,1.8],red,rig);
 // Corrugated packing and a rolled support, prominent at the front.
 box([.6,.24,.1],[1.75,.05,1.8],paper,rig);
 box([-.25,1.02,.25],[3.05,.06,2.15],black,rig);box([-.25,1.08,.25],[2.95,.065,2.05],pcb,rig);
 for(let i=0;i<6;i++)box([-.9+i*.24,1.2,.65],[.12,.18,.55],edge,rig);
 for(let i=0;i<8;i++)box([-.9+i*.24,1.14,-.2],[.14,.04,.12],silver,rig);
 for(let i=0;i<5;i++)box([-1.6+i*.3,1.15,1.31],[.23,.19,.08],silver,rig);
 // Large fin-stack CPU cooler on the left, with copper heat pipes.
 box([-1.25,1.65,.45],[.9,1.05,.82],edge,rig);
 for(let i=0;i<15;i++)box([-1.25,1.19+i*.065,.45],[1.02,.025,.9],silver,rig);
 for(let i=0;i<4;i++)rod([-1.5+i*.18,1.1,.45],[-1.5+i*.18,2.3,.45],.025,copper,rig);
 // Household wire rack over the upper rim.
 for(let i=0;i<12;i++)rod([-1.75+i*.32,2.26,-1.18],[-1.75+i*.32,2.26,1.18],.018,silver,rig);
 for(const z of [-1.18,0,1.18])rod([-1.85,2.26,z],[1.85,2.26,z],.024,silver,rig);
 // Egg carton under the left top card: folded rim + unmistakable egg cups.
 const carton=group([-.75,2.36,.4],rig);box([0,0,0],[1.25,.22,2.1],egg,carton);
 for(const x of [-.32,.32])for(const z of [-.65,0,.85])sphere([x,-.12,z],[.28,.27,.3],egg,carton);
 for(const x of [-.63,.63])box([x,.12,0],[.05,.16,2.15],egg,carton);
 box([.6,2.32,.0],[1.3,.06,2.05],paper,rig);
 for(let i=0;i<14;i++)sphere([.03+i*.08,2.32,1.035],.022,egg,rig);
 // Rolled corrugated cardboard, hollow and visibly open at the front.
 for(let i=0;i<5;i++)torus([-.45,2.02,.88+i*.12],.29,.026,paper,rig,[0,0,0]);
 for(const r of [.17,.23,.29])torus([-.45,2.02,1.47],r,.027,paper,rig,[0,0,0]);
 for(const x of [-.73,-.18])rod([x,1.99,.8],[x,1.99,1.46],.045,paper,rig);
 const fans=[];
 function gpu(parent,pos,rotation=[0,0,0]){
  const g=group(pos,parent);g.rotation.set(...rotation);g.name='illustrative-triple-fan-card';
  box([0,0,0],[.96,.22,2.18],black,g);box([0,-.14,0],[.9,.05,2.13],silver,g);
  for(let i=0;i<3;i++){
   const z=-.69+i*.69;const f=group([0,.14,z],g);f.rotation.x=-Math.PI/2;
   torus([0,0,0],.29,.04,edge,f,[0,0,0]);cyl([0,0,0],.09,.06,silver,f).rotation.x=Math.PI/2;
   for(let j=0;j<7;j++){const a=j*Math.PI*2/7;const b=box([Math.cos(a)*.17,Math.sin(a)*.17,0],[.23,.09,.035],edge,f);b.rotation.z=a+.6;}fans.push(f);
  }
  box([0,-.05,1.13],[1.05,.5,.035],silver,g);
  for(let i=0;i<5;i++)for(let j=0;j<2;j++)sphere([-.4+i*.19,-.16+j*.16,1.155],.035,black,g);
  return g;
 }
 gpu(rig,[-.76,2.73,.0]);gpu(rig,[.6,2.49,0]);
 // Vertical right-hand silhouette is an artistic arrangement, not a component count claim.
 gpu(rig,[1.43,1.27,.0],[0,0,Math.PI/2]);gpu(rig,[1.75,1.27,-.05],[0,0,Math.PI/2]);
 function cable(points,r,m){for(let i=1;i<points.length;i++)rod(points[i-1],points[i],r,m,rig);}
 cable([[-1.0,1.14,1.4],[-1,.4,1.65],[-.7,.25,1.75],[-.25,.3,1.65],[.05,1.1,1.3]],.038,white);
 for(let i=0;i<4;i++)cable([[.1+i*.15,2.7,-.8],[.4+i*.1,3,-1],[1.3,2,-1.1],[1.4,.4,-.9],[.4,.25,-.6]],.022,black);
 box([-.8,.48,-.7],[.8,.4,.7],black,rig);
 sign('01 · АЛЕКСЕЙ',[-1.6,.46,1.97],3.6,.4,stage,{size:42,bg:'#3e5150',fg:'#f4e5ba'});
 // Mike supplied a parts table, not a case photo. The tower is intentionally generic.
 const mike=group([2.55,.18,0],house);mike.name='mike-unit';box([0,1.3,0],[1.45,2.6,2.1],black,mike);box([-.74,1.3,0],[.04,2.35,1.9],mat('#739e9a',{transparent:true,opacity:.28}),mike);
 for(let j=0;j<3;j++){const f=group([0,.5+j*.78,1.07],mike);torus([0,0,0],.29,.045,silver,f,[0,0,0]);for(let i=0;i<5;i++){const a=i*6.28/5;rod([0,0,0],[Math.cos(a)*.23,Math.sin(a)*.23,0],.045,edge,f);}}
 box([-.1,1.3,.1],[.8,.1,1.4],pcb,mike);box([0,2.4,0],[1.15,.1,1.7],silver,mike);
 sign('02 · MIKE / WIN 11',[2.45,.46,1.97],3.1,.4,stage,{size:38,bg:'#3e5150',fg:'#f4e5ba'});
 const path=group([0,0,0],root);for(let i=0;i<6;i++)box([48,-1.55,-32.2+i*.25],[1.2,.12,.2],silver,path);
 // Independent batches retain visitor-only visibility and ray picking for each unit.
 batchStatic(rig,[]);batchStatic(mike,[]);batchStatic(stage,[]);batchStatic(path,[]);
 let tab='alexey';const ui=document.createElement('section');ui.id='datacenter-controls';ui.hidden=true;
 ui.innerHTML='<div class="dc-tabs"><button data-unit="alexey">риг Алексея</button><button data-unit="mike">юнит Mike</button><button data-unit="all">весь ЦОД</button></div><div id="dc-passport"></div><small>Макеты. Без нового энергобаланса и без майнинга. Вращай вид кнопкой справа.</small><a href="./datacenter-catalog.json" target="_blank">открыть полный паспорт JSON</a>';
 document.querySelector('#focus-object').before(ui);
 const format=v=>v==null?'неизвестно':v.toLocaleString('ru-RU')+' ₽';
 function draw(){for(const b of ui.querySelectorAll('[data-unit]'))b.setAttribute('aria-pressed',String(tab===b.dataset.unit));const unit=tab==='all'?null:catalog[tab];const el=ui.querySelector('#dc-passport');el.replaceChildren();const add=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;el.append(n);return n;};if(!unit){add('p','Два добровольно присланных юнита, рядом с настоящей станцией. Выбери риг для приближения.');return;}add('strong',unit.name+' · '+unit.os);add('p',unit.provenance);if(tab==='mike')add('p','Внешний вид корпуса условный: прислана таблица, не фото.');const details=add('details','');const summary=document.createElement('summary');summary.textContent='состав, SKU и цены';details.append(summary);for(const p of unit.parts){const item=document.createElement('p');item.textContent=p.part+': '+p.model+' · SKU: '+(p.sku||'не уточнён')+' · покупка: '+format(p.purchaseRub)+(p.status?' ('+p.status+')':'')+(p.source?' · '+p.source:'')+' · сейчас: '+format(p.currentRub);details.append(item);}if(unit.totalRub)add('p','Итог таблицы: '+format(unit.totalRub)+' · '+unit.period);add('p',unit.priceStatus);}
 for(const b of ui.querySelectorAll('[data-unit]'))b.onclick=()=>{tab=b.dataset.unit;draw();changed();};draw();
 function update(){const on=document.body.classList.contains('datacenter-look');stage.visible=!on||tab==='all';rig.visible=!on||tab!=='mike';mike.visible=!on||tab!=='alexey';}
 function geometryPoints(){house.updateWorldMatrix(true,true);const p=[];house.traverse(o=>{if(!o.isMesh||!o.visible)return;let a=o;while(a&&a!==house){if(!a.visible)return;a=a.parent;}const v=o.geometry.attributes.position;for(let i=0;i<v.count;i++)p.push(new THREE.Vector3().fromBufferAttribute(v,i).applyMatrix4(o.matrixWorld));});return p;}
 return {house,controls:ui,update,showAll:()=>{rig.visible=true;mike.visible=true;},geometryPoints,inspect:()=>({tab,location:[48,.6,-35],catalog,fanCount:fans.length,reference:'27088',rigVisible:rig.visible,mikeVisible:mike.visible}),card:()=>({action:'осмотреть ЦОД',description:'Открытая рама, яичный лоток и две истории железа. Не модели, угаданные по фото.'})};
}
