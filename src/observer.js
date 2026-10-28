import * as THREE from 'three';
import world from './bench-core.js';
import './observer.css';

// Public instrument, not a transcript of anybody's research notebook.
export function createObserver({root,M,mat,group,box,sphere,cyl,rod,sign,changed}){
 const house=group([5.45,.08,-.6],root);house.name='observer-journal';
 const paper=mat('#eee0b7'),ink=mat('#347b78',{emissive:'#265d5b',emissiveIntensity:.2}),brass=M.copper;
 box([0,.07,0],[1.48,.14,.9],M.dark,house);
 for(const x of [-.55,.55])rod([x,.1,0],[x,1.12,0],.035,brass,house);
 box([0,1.2,0],[1.45,1.44,.15],M.rust,house);
 box([0,1.23,.087],[1.28,1.12,.02],paper,house);
 for(let i=0;i<6;i++)box([0,.79+i*.17,.102],[1.17,.006,.008],M.cream,house);
 for(let i=0;i<7;i++)box([-.56+i*.185,1.22,.103],[.006,.96,.009],M.cream,house);
 for(const y of [.62,1.87]){const roll=cyl([0,y,.09],.085,1.5,paper,house);roll.rotation.z=Math.PI/2;for(const x of [-.76,.76])sphere([x,y,.09],.08,brass,house);}
 sign('ЛЕНТА',[0,2.07,.06],1.2,.23,house,{size:55,bg:'#304b47',fg:'#efdfbb'});
 const nib=group([0,0,0],house);rod([.58,1.84,.15],[.36,1.55,.18],.025,brass,nib);sphere([.36,1.55,.18],.045,ink,nib);
 const line=new THREE.Line(new THREE.BufferGeometry(),new THREE.LineBasicMaterial({color:'#297b76'}));line.name='observer-numeric-curve';house.add(line);
 const dots=Array.from({length:48},()=>sphere([0,0,0],.016,ink,house));
 const clipA=box([-.63,1.2,.145],[.11,.13,.075],brass,house),clipB=box([.63,1.2,.145],[.11,.13,.075],ink,house);
 clipA.name='observer-clamp-A';clipB.name='observer-clamp-B';
 const archiveTabs=Array.from({length:6},(_,i)=>box([-.46+i*.185,.4,.05],[.12,.06,.1],brass,house));
 const ui=document.createElement('section');ui.id='observer-controls';ui.hidden=true;
 ui.innerHTML='<output id="observer-source"></output><label for="observer-metric">числовой факт</label><select id="observer-metric" aria-label="Числовой факт"></select><output id="observer-summary"></output><p id="observer-empty">Нет числовых проб. Житель может вызвать listen у engine; лента подхватит его новые числовые field_notes на ближайшем тике. Пробы грунта с другими target сюда не попадают. Чужие объекты и текстовые факты не рисуются.</p><div id="observer-rows"></div><button id="observer-export" type="button">скачать ленту · JSON</button><details><summary>как читать ленту</summary><p>По горизонтали время проверки (checked_at, иначе time), по вертикали выбранное число от минимума до максимума. Плоский ряд лежит посередине. Единицы и названия берутся из числовых путей фактов; разные факты не складываются. До 48 проб, полный архив у жителя в каталоге. Это измерения игровой модели, не реальные физические замеры.</p><p>Тики только сохраняют доступные пробы, не измеряют сами. Повторная проверка одного id с новым checked_at добавляет точку. Если новых проб несколько между тиками и старая исчезла из field_notes, здесь её не будет. Метка «вкл/выкл» - положение переключателя при записи, не доказательство причины изменения. Если закреплённое A или B вышло за диапазон текущей ленты, зажим стоит на её краю; точные числа и времена остаются в архиве пар.</p></details><button id="observer-demo" type="button">учебная лента · отдельно</button><button id="observer-sample" type="button" hidden>добавить учебную пробу</button><small id="observer-demo-note" hidden>Демонстрационные числа для знакомства с прибором. Не наблюдения жителя; не влияют на его состояние.</small>';
 const clampsUI=document.createElement('fieldset');clampsUI.id='observer-clamps';
 clampsUI.innerHTML='<legend>два зажима · A / B</legend><output id="observer-anchor"></output><output id="observer-comparison"></output><div id="observer-comparisons"></div><div id="observer-clamp-buttons" hidden><button id="observer-pin" type="button">закрепить A</button><button id="observer-compare" type="button">сравнить с новой B</button><button id="observer-release" type="button">снять A · архив оставить</button></div><output id="observer-clamp-message" aria-live="polite"></output><small>Житель: salvage journal=true, capture=pin → новая проба engine.listen → capture=compare. Можно переключить engine между пробами. capture=release снимает A, не стирает архив. Разница не доказывает причину; «вкл/выкл» - переключатель при записи, не при исходном замере.</small>';
 ui.querySelector('#observer-export').after(clampsUI);
 document.querySelector('#focus-object').before(ui);
 let live=window.__beznogimState?.mechanics?.bench?.public?.observer||null,demo=false,metric='',lastKey='',current=null,vertices=[];
 let local=null;try{local=JSON.parse(localStorage.getItem('beznogim-observer-demo-v1')||'null');}catch{}
 const migrate=()=>{local=world({mode:'migrate',state:local,now:Math.floor(Date.now()/1000)}).state;};migrate();
 const persist=()=>{try{localStorage.setItem('beznogim-observer-demo-v1',JSON.stringify(local));}catch{}};
 let localView=world({mode:'migrate',state:local,now:Math.floor(Date.now()/1000)}).public.observer;
 const data=()=>demo?localView:live||{version:1,source:'field_notes.engine',rows:[],metrics:[],total:0,capacity:48};
 let lastData=null,lastMetric=null,lastDemo=null;
 const label=k=>({period:'period · период',period_s:'period_s · период, с',amplitude:'amplitude · амплитуда',resonance:'resonance · резонанс'}[k]||k);
 function update(){
  const d=data();if(d===lastData&&metric===lastMetric&&demo===lastDemo)return;lastData=d;lastMetric=metric;lastDemo=demo;if(!d.metrics.includes(metric))metric=d.metrics.includes(d.clamps?.anchor?.metric)?d.clamps.anchor.metric:d.metrics[0]||'';
  const key=JSON.stringify([demo,metric,d]);if(key===lastKey)return;lastKey=key;current=d;
  const sel=ui.querySelector('#observer-metric');sel.replaceChildren(...d.metrics.map(k=>new Option(label(k),k)));if(!d.metrics.length)sel.append(new Option('нет числовых фактов',''));sel.value=metric;sel.disabled=!d.metrics.length;
  ui.querySelector('#observer-source').textContent=demo?'УЧЕБНАЯ ЛЕНТА · не житель':live?'ЛЕНТА ЖИТЕЛЯ · только чтение':'ЛЕНТА ЖИТЕЛЯ · ждём публичные пробы';
  const rows=d.rows.filter(r=>Object.hasOwn(r.values,metric)),values=rows.map(r=>r.values[metric]),lo=Math.min(...values),hi=Math.max(...values),span=hi-lo;
  const fmt=v=>Number(v.toFixed(4)).toString();
  ui.querySelector('#observer-summary').textContent=rows.length?`${rows.length}/${d.capacity} · min ${fmt(lo)} · max ${fmt(hi)} · Δ ${fmt(values.at(-1)-values[0])}`:'Пока пусто · ничего не дорисовываем';
  ui.querySelector('#observer-empty').hidden=!!rows.length;
  const list=ui.querySelector('#observer-rows');list.replaceChildren(...rows.slice(-8).reverse().map(r=>{const el=document.createElement('div');el.textContent=`#${r.id} · ${new Date(r.time*1000).toISOString().slice(5,19).replace('T',' ')} UTC · ${fmt(r.values[metric])} · ${r.running===null?'?':r.running?'вкл':'выкл'}`;return el;}));
  ui.querySelector('#observer-export').disabled=!d.rows.length;
  ui.querySelector('#observer-demo').textContent=demo?'вернуться к ленте жителя':'учебная лента · отдельно';
  ui.querySelector('#observer-sample').hidden=!demo;ui.querySelector('#observer-demo-note').hidden=!demo;
  const clamps=d.clamps||{anchor:null,records:[]},a=clamps.anchor,b=clamps.records.at(-1),matching=b&&a&&b.metric===a.metric&&b.a.id===a.id&&b.a.time===a.time;
  const time=p=>new Date(p.time*1000).toISOString().slice(5,19).replace('T',' ')+' UTC';
  ui.querySelector('#observer-anchor').textContent=a?`A · ${label(a.metric)} = ${fmt(a.value)} · #${a.id} · ${time(a)}`:'A не закреплена · новая проба сама не сравнивается';
  ui.querySelector('#observer-comparison').textContent=b?`Последняя пара #${b.id} · ${label(b.metric)}: ${fmt(b.a.value)} → ${fmt(b.b.value)} · Δ ${fmt(b.delta)} · ${b.percent===null?'процент н/д (нулевая/слишком малая A)':fmt(b.percent)+'%'} · ${fmt(b.elapsed)} с`:'Архив пуст · ничего не сравнивали';
  ui.querySelector('#observer-comparisons').replaceChildren(...clamps.records.slice().reverse().map(r=>{const el=document.createElement('div');el.textContent=`Пара #${r.id} · ${label(r.metric)} · A#${r.a.id} ${time(r.a)} · B#${r.b.id} ${time(r.b)} · Δ ${fmt(r.delta)}`;return el;}));
  ui.querySelector('#observer-clamp-buttons').hidden=!demo;
  ui.querySelector('#observer-pin').disabled=!!a||!rows.length;
  ui.querySelector('#observer-compare').disabled=!a;
  ui.querySelector('#observer-release').disabled=!a;
  const clipY=value=>.8+(span?Math.max(0,Math.min(1,(value-lo)/span)):.5)*.85;
  clipA.visible=!!a&&a.metric===metric&&!!rows.length;clipB.visible=!!matching&&a.metric===metric&&!!rows.length;
  if(clipA.visible)clipA.position.y=clipY(a.value);if(clipB.visible)clipB.position.y=clipY(b.b.value);
  archiveTabs.forEach((o,i)=>o.visible=i<clamps.records.length);
  const t0=rows[0]?.time||0,dt=(rows.at(-1)?.time||t0)-t0;
  vertices=rows.map((r,i)=>new THREE.Vector3(-.56+(dt?(r.time-t0)/dt:rows.length>1?i/(rows.length-1):.5)*1.12,.8+(span?(r.values[metric]-lo)/span:.5)*.85,.122));
  line.geometry.dispose();line.geometry=new THREE.BufferGeometry().setFromPoints(vertices);line.visible=vertices.length>1;
  dots.forEach((o,i)=>{o.visible=i<vertices.length;if(o.visible)o.position.copy(vertices[i]);});nib.visible=!!vertices.length;if(vertices.length)nib.position.set(vertices.at(-1).x-.36,vertices.at(-1).y-1.55,0);
  changed();
 }
 ui.querySelector('#observer-metric').onchange=e=>{metric=e.target.value;lastKey='';update();};
 function sample(){
  if(!demo)return;const n=(local.observer?.total||0)+1,now=Math.floor(Date.now()/1000),last=local.observer?.rows.at(-1)?.time||0,t=Math.max(now,last+1);
  const r=world({mode:'tick',state:local,now:t,world:{objects:{engine:{running:n%4!==0}},field_notes:{engine:{id:n,time:t,target:'engine',source:'fictional_world_simulation',facts:{period_s:Math.round((4+Math.sin(n*.8)*.6)*100)/100,amplitude:Math.round((10+n%5)*10)/10,resonance:Math.round((.5+.3*Math.cos(n*.5))*100)/100}}}}});local=r.state;localView=r.public.observer;persist();lastKey='';update();
 }
 const reasons={release_first:'Сначала сними A. Архив останется.',pin_first:'Сначала закрепи A.',new_sample_required:'Нужна более новая проба. Добавь учебную пробу.',metric_mismatch:'Выбрана другая метрика. Верни метрику A или сними зажим.',no_numeric_sample:'Пока нет числовой пробы.',already_compared:'Эта проба уже учтена.'};
 function capture(action){
  if(!demo)return;
  const r=world({mode:'action',tool:'salvage',args:{journal:true,capture:action,metric},state:local,now:Math.floor(Date.now()/1000)});
  local=r.state;localView=r.public.observer;persist();lastKey='';update();
  ui.querySelector('#observer-clamp-message').textContent=r.result.ok?(r.result.duplicate?'Эта пара уже в архиве.':action==='pin'?'A закреплена. Добавь новую учебную пробу.':action==='release'?'A снята, архив сохранён.':'Пара сохранена. Это учебные числа, не житель.'):(reasons[r.result.reason]||r.result.reason);
 }
 for(const a of ['pin','compare','release'])ui.querySelector('#observer-'+a).onclick=()=>capture(a);
 ui.querySelector('#observer-demo').onclick=()=>{demo=!demo;lastKey='';ui.querySelector('#observer-clamp-message').textContent='';if(demo&&!local.observer.rows.length)for(let i=0;i<8;i++)sample();update();};
 ui.querySelector('#observer-sample').onclick=sample;
 ui.querySelector('#observer-export').onclick=()=>{const d=data(),a=document.createElement('a'),u=URL.createObjectURL(new Blob([JSON.stringify({kind:demo?'demonstration_not_resident':'public_game_measurements',...d},null,2)],{type:'application/json'}));a.href=u;a.download=demo?'observer-demo.json':'observer-public.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};
 window.addEventListener('beznogim:state',({detail})=>{live=detail.mechanics?.bench?.public?.observer||live;});
 function geometryPoints(){house.updateWorldMatrix(true,true);const p=[];house.traverse(o=>{if(!o.isMesh||!o.visible)return;for(let a=o.parent;a&&a!==house;a=a.parent)if(!a.visible)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++)p.push(new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld));});return p;}
 return {house,controls:ui,update,geometryPoints,card:()=>({action:'обойти самописец',description:'Бумажная лента у маятников. Новые числовые пробы жителя остаются здесь, их можно сравнить по времени. Учебная лента отделена.'}),inspect:()=>({source:demo?'demo':'resident',metric,points:vertices.length,curve:vertices.map(v=>v.toArray()),clampGeometry:{a:clipA.visible,b:clipB.visible,archive:archiveTabs.filter(o=>o.visible).length},public:current,position:house.position.toArray()})};
}
