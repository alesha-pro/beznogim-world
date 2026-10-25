import * as THREE from 'three';
import run from './vitals-core.js';
export function createCafe({root,mat,group,box,sphere,cyl,rod,torus,sign,changed,watching}){
 const house=group([48,-1.6,24],root);house.name='quote-cafe';
 const cream=mat('#e5d4ae'),wood=mat('#925c42'),teal=mat('#416d62'),gold=mat('#e7ad42',{roughness:.62}),white=mat('#f5ead4'),tea=mat('#925321'),dark=mat('#3b493f');
 box([0,0,0],[8.6,.22,7.3],wood,house);box([0,.14,0],[8.2,.1,6.9],cream,house);
 // An open tea kiosk: the striped awning covers only the back counter.
 box([0,1.7,-2.8],[7,.15,.16],wood,house);box([0,.95,-2.75],[7,1.7,.16],teal,house);
 for(const x of [-3.5,3.5])rod([x,.2,-2.7],[x,3.65,-2.7],.09,wood,house);
 for(let i=0;i<10;i++)box([-3.6+i*.8,3.65,-1.95],[.8,.13,2.15],i%2?cream:teal,house);
 sign('КАВЫЧКА В КЛЯРЕ',[0,3.07,-.81],6.7,.72,house,{size:49,bg:'#416d62',fg:'#fff1cf'});
 box([0,1,-1.4],[6.9,1.6,.8],teal,house);box([0,1.85,-1.4],[7.2,.16,1.1],wood,house);
 sign('МИНИКАФЕ · ЧАЙ И ПОРЦИЯ',[0,1.12,-.97],4.7,.34,house,{size:38,bg:'#416d62',fg:'#f4dfb2'});
 for(const x of [-2.45,2.45]){
  cyl([x,.7,1.8],.09,1.1,wood,house);cyl([x,1.3,1.8],.96,.13,wood,house);
  cyl([x,.38,2.97],.08,.6,teal,house);cyl([x,.72,2.97],.43,.12,teal,house);
  box([x,.99,3.22],[.82,.55,.11],teal,house);
 }
 // A recognisable hooked quotation mark, with a chunky golden battered crust.
 const comma=new THREE.Shape();comma.moveTo(-.18,.14);comma.bezierCurveTo(-.4,.5,.4,.55,.32,.1);comma.bezierCurveTo(.34,-.25,.1,-.5,-.24,-.5);comma.lineTo(-.26,-.37);comma.bezierCurveTo(.02,-.28,.06,-.16,.04,-.1);comma.bezierCurveTo(-.1,-.15,-.35,-.1,-.18,.14);
 const batter=new THREE.ExtrudeGeometry(comma,{depth:.13,bevelEnabled:true,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1,curveSegments:12});batter.rotateX(-Math.PI/2);
 function quote(parent,pos,scale=1,material=gold){const g=group(pos,parent);g.scale.setScalar(scale);const q=new THREE.Mesh(batter,material);q.castShadow=q.receiveShadow=true;g.add(q);if(material===gold)for(let i=0;i<10;i++)sphere([Math.sin(i*2.4)*.19,.17, -.2+Math.cos(i*2.4)*.11],.035,material,g);return g;}

 const logo=group([-2.65,2.5,-.8],house);quote(logo,[0,0,0],1.05);logo.rotation.x=Math.PI/2;
 const plate=group([-2.45,1.39,1.8],house);cyl([0,0,0],.6,.04,white,plate);torus([0,.04,0],.5,.035,white,plate,[-Math.PI/2,0,0]);const meal=quote(plate,[0,.13,0]);
 const cup=group([-1.84,1.52,1.58],house);cyl([0,0,0],.14,.26,white,cup);cyl([0,.137,0],.11,.012,tea,cup);torus([.15,0,0],.09,.025,white,cup,[0,0,0]);
 const steam=group([0,0,0],cup);for(let i=0;i<3;i++)rod([-.08+i*.08,.2,0],[-.1+i*.08,.5,0],.012,cream,steam);
 const cloche=group([0,1.96,-1.3],house);sphere([0,0,0],[.55,.29,.4],gold,cloche);sphere([0,.3,0],.07,wood,cloche);
 // A permanent sample at the counter, even when the resident has eaten their tray.
 cyl([2.25,1.96,-1.3],.48,.045,white,house);quote(house,[2.25,2.08,-1.3],.8);
 for(const x of [-3.7,3.7]){cyl([x,.5,.25],.27,.6,wood,house);for(let i=0;i<3;i++)sphere([x+(i-1)*.13,1,.25],[.16,.45,.16],teal,house);}
 const path=group([0,0,0],root);for(let i=0;i<28;i++)box([30+i*.49,-1.58,24],[.4,.12,.85],cream,path);
 const kiosk=group([0,0,0],house);for(const child of [...house.children])if(child!==kiosk)kiosk.add(child);
 const rawMaterial=mat('#b8e6bf',{roughness:.55});
 // Six growing hooks, a finite raw crate, and the kitchen shelf share one server ledger.
 const farm=group([7,0,0],house);farm.name='quote-farm';
 box([0,.04,0],[4.5,.3,6.7],wood,farm);box([0,.25,-.6],[4.2,.12,4.9],cream,farm);
 sign('КАВЫЧЕЧНАЯ ФЕРМА',[0,2.7,-2.7],4.3,.55,farm,{size:36,bg:'#416d62',fg:'#fff1cf'});
 for(const x of [-2,2])rod([x,.3,-2.75],[x,3,-2.75],.065,wood,farm);
 const sprouts=[];
 for(let i=0;i<6;i++){
  const x=i%2?1:-1,z=-1.6+Math.floor(i/2)*1.4;
  box([x,.48,z],[1.45,.38,1.05],teal,farm);box([x,.7,z],[1.22,.06,.85],dark,farm);
  const q=quote(farm,[x,.75,z],.9,rawMaterial);q.rotation.x=Math.PI/2;sprouts.push(q);
 }
 const wheel=group([-1.85,1.25,2.6],farm);torus([0,0,0],.48,.05,gold,wheel,[0,0,0]);
 for(let i=0;i<4;i++){const a=i*Math.PI/2;rod([0,0,0],[Math.cos(a)*.47,Math.sin(a)*.47,0],.025,wood,wheel);}
 box([.65,.6,2.55],[2.5,.75,1.15],wood,farm);box([.65,1,2.55],[2.2,.07,.95],dark,farm);
 const rawMarks=[];for(let i=0;i<12;i++){const q=quote(farm,[-.15+(i%4)*.53,1.15,2.25+Math.floor(i/4)*.27],.43,rawMaterial);rawMarks.push(q);}
 sign('СЫРЬЁ  /  12',[.65,.69,3.15],2.1,.33,farm,{size:32,bg:'#925c42',fg:'#fff1cf'});
 const kitchenMarks=[];for(let i=0;i<12;i++){const q=quote(kiosk,[-2.9+i%6*.45,2.04,-2.4+Math.floor(i/6)*.38],.38,rawMaterial);kitchenMarks.push(q);}
 for(let i=0;i<5;i++)box([4.45+i*.55,.05,1.1],[.43,.12,.8],cream,house);
 let tab='cafe';
 let local=null,live=window.__beznogimState?.mechanics?.vitals?.public||null,current=null,key='',lastSecond=-1,message='',messageUntil=0;
 try{local=JSON.parse(localStorage.getItem('beznogim-cafe-v1')||'null');}catch{}
 if(!local||typeof local!=='object'||Array.isArray(local))local=null;
 let sandbox=!live;
 const invoke=(mode,cafe,farm)=>{const r=run({mode,tool:'rest_quietly',args:{cafe,farm},state:local,now:Math.floor(Date.now()/1000),world:{position:farm&&farm!=='deliver'?[55,.6,24]:[48,.6,24]}});local=r.state;try{localStorage.setItem('beznogim-cafe-v1',JSON.stringify(local));}catch{}return r;};invoke('migrate');
 const ui=document.createElement('section');ui.id='cafe-controls';ui.hidden=true;
 ui.innerHTML='<div class="cafe-tabs"><button id="cafe-tab-kitchen">кафе</button><button id="cafe-tab-farm">ферма</button></div><output id="cafe-stocks"></output><div id="cafe-kitchen-panel"><output id="cafe-readout"></output><div class="cafe-buttons"><button id="cafe-order">заказать · 90 с</button><button id="cafe-eat">съесть порцию</button><button id="cafe-tea">выпить чай</button></div></div><div id="cafe-farm-panel" hidden><output id="cafe-farm-readout"></output><div class="cafe-buttons"><button id="farm-start">вырастить · 3 мин</button><button id="farm-harvest">собрать 6</button><button id="farm-deliver">на кухню →</button></div></div><button id="cafe-sandbox">своя песочница</button><small id="cafe-message"></small><details><summary>цикл, меню и время</summary><small>Вкладка фермы - приближение со скрытым кафе, только для удобства обзора. Шесть ростков за 3 минуты → сбор6 в ящик12 → передача на кухню12 → 1 сырая кавычка на заказ. Начальный остаток кухни2, дальше только производство. Сбор и передача вручную. Заказ расходует сырьё сразу, даже если поднос потом остынет. Кляр и вода - кухонные припасы, в этой модели не учитываются. Порция +26 сытости, чай +24 воды. Готовка90с, новый заказ через2ч, поднос4ч. Еда и чай по одному разу, сон не заменяют. Это игровая модель. Кнопки посетителя меняют только его сохраняемую песочницу.</small></details>';
 document.querySelector('#focus-object').before(ui);
 for(const course of ['order','eat','tea'])ui.querySelector('#cafe-'+course).onclick=()=>{if(!sandbox)return;const r=invoke('action',course);message=r.result?.ok?{order:'заказ принят',eat:'порция съедена',tea:'чай выпит'}[course]:r.result?.reason;messageUntil=Date.now()+5000;key='';update();changed();};
 for(const [id,value] of [['kitchen','cafe'],['farm','farm']])ui.querySelector('#cafe-tab-'+id).onclick=()=>{tab=value;messageUntil=Date.now()+5000;key='';update();changed();};
 const reasons={batch_exists:'ростки уже посажены',raw_store_full:'ящик заполнен: сначала на кухню',no_batch:'сначала вырасти кавычки',growing:'кавычки ещё растут',no_raw:'ящик пуст',kitchen_full:'кухня заполнена',no_kitchen_quotes:'сырьё закончилось: ферма → сбор → на кухню',tray_exists:'поднос ещё на столе',kitchen_break:'кухня отдыхает',cooking:'готовится',no_tray:'сначала закажи'};
 for(const job of ['start','harvest','deliver'])ui.querySelector('#farm-'+job).onclick=()=>{if(!sandbox)return;const r=invoke('action',undefined,job);message=r.result?.ok?{start:'шесть кавычек растут',harvest:'собрано 6 в ящик',deliver:'передано на кухню: '+r.result.amount}[job]:(reasons[r.result?.reason]||r.result?.reason);messageUntil=Date.now()+5000;key='';update();changed();};
 ui.querySelector('#cafe-sandbox').onclick=()=>{sandbox=!sandbox;if(!live)sandbox=true;messageUntil=Date.now()+5000;key='';update();changed();};
 function update(){kiosk.visible=!(tab==='farm'&&document.body.classList.contains('cafe-look'));const sec=Math.floor(Date.now()/1000);if(sandbox&&sec!==lastSecond){invoke('tick');lastSecond=sec;}const d=!sandbox&&live?live:run({mode:'migrate',state:local,now:sec,world:{}}).public;if(message&&Date.now()>messageUntil)message='';const k=JSON.stringify([d,sandbox,message,sec,tab]);if(k===key)return;key=k;current=d;const c=d.cafe||{tray:null,nextOrder:0},t=c.tray,ready=t&&t.phase!=='cooking';
 const sp=c.supply||{raw:0,kitchen:0,batch:null},b=sp.batch;
 const progress=b?(b.phase==='ripe'?1:Math.max(0,Math.min(1,(sec-b.started)/180))):0;
 sprouts.forEach(q=>{q.visible=!!b;const size=.3+progress*.75;q.scale.setScalar(size);q.position.y=.75+.55*size;});
 rawMarks.forEach((q,i)=>q.visible=i<sp.raw);kitchenMarks.forEach((q,i)=>q.visible=i<sp.kitchen);
 wheel.rotation.z=b&&progress<1?sec*.4:0;
 ui.querySelector('#cafe-kitchen-panel').hidden=tab!=='cafe';ui.querySelector('#cafe-farm-panel').hidden=tab!=='farm';
 ui.querySelector('#cafe-tab-kitchen').setAttribute('aria-pressed',tab==='cafe');ui.querySelector('#cafe-tab-farm').setAttribute('aria-pressed',tab==='farm');
 ui.querySelector('#cafe-stocks').textContent=(sandbox?'песочница':'житель')+' · ящик '+sp.raw+'/12  →  кухня '+sp.kitchen+'/12';
 ui.querySelector('#cafe-farm-readout').textContent=!b?'шесть лотков свободны':b.phase==='ripe'?'созрели 6 кавычек · можно собрать':(b.ready>sec?'растут 6 · ещё '+(b.ready-sec)+' с':'рост завершён · ждём серверный тик');
 ui.querySelector('#farm-start').disabled=!sandbox||!!b||sp.raw>6;
 ui.querySelector('#farm-harvest').disabled=!sandbox||!b||b.phase!=='ripe'||sp.raw+6>12;
 ui.querySelector('#farm-deliver').disabled=!sandbox||sp.raw<1||sp.kitchen>=12;
 meal.visible=!!ready&&!t.eaten;cup.visible=!!ready&&!t.drunk;cloche.visible=t?.phase==='cooking';steam.visible=cup.visible;
 ui.querySelector('#cafe-readout').textContent=(sandbox?'твоя песочница':'поднос жителя')+' · '+(!t?'можно заказать':t.phase==='cooking'?'готовится · '+Math.max(0,t.ready-sec)+' с':t.phase==='finished'?'спасибо, заходи ещё':'подано · '+(t.eaten?'порция съедена':'кавычка горячая')+' / '+(t.drunk?'чай выпит':'чай готов'));
 ui.querySelector('#cafe-order').disabled=!sandbox||!!t&&t.phase!=='finished'||sec<c.nextOrder||sp.kitchen<1;
 ui.querySelector('#cafe-eat').disabled=!sandbox||!ready||t.eaten;
 ui.querySelector('#cafe-tea').disabled=!sandbox||!ready||t.drunk;
 ui.querySelector('#cafe-sandbox').textContent=sandbox&&live?'смотреть жителя':'своя песочница';
 ui.querySelector('#cafe-message').textContent=message||(c.nextOrder>sec?'кухня отдыхает до '+new Date(c.nextOrder*1000).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}):'две посадки, без спешки');
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.vitals?.public;if(d){if(!live)sandbox=false;live=d;key='';}});update();
 function geometryPoints(){const p=[];house.updateWorldMatrix(true,true);const subject=tab==='farm'?farm:house;subject.traverse(o=>{if(!o.isMesh)return;for(let a=o;a&&a!==subject;a=a.parent)if(!a.visible)return;const v=o.geometry.attributes.position;for(let i=0;i<v.count;i++)p.push(new THREE.Vector3().fromBufferAttribute(v,i).applyMatrix4(o.matrixWorld));});return p;}
 return {house,controls:ui,update,geometryPoints,pick:(o)=>{let inFarm=false;for(let a=o;a&&a!==house;a=a.parent)if(a===farm)inFarm=true;tab=inFarm?'farm':'cafe';key='';update();},inspect:()=>({position:[48,.6,24],farmPosition:[55,.6,24],tab,cutaway:!kiosk.visible,sandbox,current,sprouts:sprouts.filter(q=>q.visible).length,rawVisible:rawMarks.filter(q=>q.visible).length,kitchenVisible:kitchenMarks.filter(q=>q.visible).length,mealVisible:meal.visible,cupVisible:cup.visible,cooking:cloche.visible,seats:2,pathSteps:28}),card:()=>({action:'осмотреть миникафе',description:'Кафе и своя ферма справа. Вырастить → собрать → передать кухне. На заказ уходит 1 сырая кавычка. '+(sandbox?'Кнопки - твоя отдельная песочница.':'Сейчас виден настоящий поднос жителя.')})};
}
