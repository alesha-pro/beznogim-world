import runWorld from './quotes-core.js';
export function createQuotes({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed,watching,localPlay}){
 const house=group([24,-1.5,24],root);house.name='quote-nursery';
 const ice=mat('#94c1c0',{roughness:.34}),dark=mat('#274644'),cream=mat('#f2e3b9'),gold=mat('#dfaf57'),coral=mat('#c7674e'),pine=mat('#326d59');
 box([0,-.18,0],[12,.65,14],M.concrete,house);
 box([0,.17,1.5],[7.25,.14,7.25],dark,house);
 const cellPos=v=>[(v%5-2)*1.35,.46,(Math.floor(v/5)-2)*1.35+1.5];
 const tiles=[];for(let v=0;v<25;v++){const [x,,z]=cellPos(v);tiles.push(box([x,.27,z],[1.27,.12,1.27],ice,house));}
 const stones=Array.from({length:6},()=>{const g=group([0,0,0],house);box([0,.24,0],[1.05,.42,1.05],M.concrete,g);box([0,.49,0],[.9,.08,.9],M.metal,g);return g;});
 const goals=[1,3].map((v,i)=>{const p=cellPos(v),g=group([p[0],.4,p[2]],house);box([0,-.02,0],[1.23,.07,1.23],i?coral:gold,g);box([0,.025,0],[1.03,.04,1.03],cream,g);sign(i?'»':'«',[0,.14,.38],.72,.55,g,{size:105});return g;});
 function quote(i){const g=group(cellPos(i?24:20),house);for(let j=0;j<2;j++){const x=(j-.5)*.34,sgn=i?-1:1;rod([x+sgn*.22,.92,0],[x-sgn*.16,.5,0],.065,i?coral:gold,g);rod([x-sgn*.16,.5,0],[x+sgn*.22,.08,0],.065,i?coral:gold,g);}box([0,-.07,0],[.98,.09,.5],M.metal,g);return g;}
 const quotes=[quote(0),quote(1)],halos=quotes.map(g=>box([0,-.13,0],[1.1,.04,.67],cream,g));
 // Open slots are part of a low fence; the board's two pale squares lead through it.
 for(const x of [-3.9,0,3.9]){box([x,.75,-2.05],[.18,1.25,.18],M.copper,house);box([x,1.39,-2.05],[.32,.12,.32],cream,house);}
 for(const x of [-2.8,2.8])box([x,.8,-2.05],[1.85,.14,.14],M.copper,house);
 const trees=Array.from({length:6},(_,i)=>{const g=group([-3.5+(i%3)*3.5,.3,-3.5-Math.floor(i/3)*1.9],house);cyl([0,.45,0],.12,.9,M.copper,g);for(let k=0;k<3;k++){const m=new THREE.Mesh(new THREE.ConeGeometry(.87-k*.17,1.3,5),pine);m.position.y=.95+k*.56;m.castShadow=true;g.add(m);}box([0,.02,0],[1.45,.1,1.45],M.soil||dark,g);return g;});
 sign('ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ',[0,.84,5.7],6,.58,house,{size:44});sign('СЕВЕР',[0,1.52,-2.05],1.45,.33,house,{size:60});
 // A sparse path joins the cellar's southern edge, leaving most of this lot empty.
 for(let i=0;i<23;i++)box([24,-1.42,6.6+i*.54],[1,.13,.43],M.cream,root);
 batchStatic(house,[...stones,...quotes,...goals,...trees]);
 let local=null,live=window.__beznogimState?.mechanics?.quotes?.public||null,current,lastKey='',lastSource='',selected=0,hint='',busy=0,treeScale=Array(6).fill(0),travel=[null,null];
 try{local=JSON.parse(localStorage.getItem('beznogim-quotes-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({mode,tool,args,state:local});local=r.state;try{localStorage.setItem('beznogim-quotes-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='quotes-controls';ui.hidden=true;
 ui.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>';
 document.querySelector('#focus-object').before(ui);
 const data=()=>live&&watching()?live:runWorld({mode:'migrate',state:local}).public;
 function action(t,args={}){if(busy>0)return;localPlay();hint='';const r=invoke('action',t,args);lastKey='';update(0);changed();return r;}
 for(const b of ui.querySelectorAll('[data-quote]'))b.onclick=()=>{selected=Number(b.dataset.quote);hint='';refreshUI();};
 for(const b of ui.querySelectorAll('[data-slide]'))b.onclick=()=>action('slide',{piece:selected,direction:b.dataset.slide});
 ui.querySelector('#quotes-pair').onclick=()=>action('restart',{scope:'pair'});
 ui.querySelector('#quotes-hint').onclick=()=>{const r=runWorld({mode:'action',tool:'hint',state:data()}).result;hint=r.status==='route'?`${r.next.piece?'»':'«'} → ${{north:'север',east:'восток',south:'юг',west:'запад'}[r.next.direction]} · осталось ходов: ${r.remaining}`:r.status==='aligned'?'Обе на месте. Выпускай.':r.status==='complete'?'Шесть елей уже на месте.':'Здесь застряли. Верни пару на старт.';refreshUI();};
 function refreshUI(){if(!current)return;ui.querySelector('#quotes-readout').textContent=`пара ${current.level}/3 · ели ${current.trees}/6 · ходы ${current.moves}`;ui.querySelector('#quotes-hint-text').textContent=hint;for(const b of ui.querySelectorAll('[data-quote]'))b.setAttribute('aria-pressed',Number(b.dataset.quote)===selected);for(const b of ui.querySelectorAll('[data-slide],#quotes-pair,#quotes-hint'))b.disabled=busy>0||current.phase==='complete';halos.forEach((h,i)=>h.visible=i===selected&&current.phase!=='complete');}
 function apply(d){const source=live&&watching()?'resident':'sandbox';const previous=current,initial=!previous||previous.run!==d.run||source!==lastSource;lastSource=source;if(initial){quotes.forEach((g,i)=>g.position.set(...cellPos(d.positions[i])));treeScale=trees.map((_,i)=>i<d.trees?1:0);travel=[null,null];busy=0;}
  else if(d.planted>previous.planted){busy=1.4;travel=quotes.map((g,i)=>({from:g.position.clone(),to:trees[(d.planted-1)*2+i].position.clone().add(new THREE.Vector3(0,.35,0)),t:0}));}
  else if(d.planted!==previous.planted){treeScale=trees.map((_,i)=>i<d.trees?1:0);}
  current=d;stones.forEach((g,i)=>{g.visible=i<d.rocks.length;if(g.visible){const p=cellPos(d.rocks[i]);g.position.set(p[0],.3,p[2]);}});refreshUI();
 }
 function update(dt){dt=Math.min(.1,Math.max(0,dt));const d=data(),key=(live&&watching()?'resident:':'sandbox:')+JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}const wasBusy=busy>0;busy=Math.max(0,busy-dt);
  for(let i=0;i<2;i++){const g=quotes[i],t=travel[i];if(t&&busy>0){t.t=Math.min(1,t.t+dt/1.4);g.position.lerpVectors(t.from,t.to,t.t*t.t*(3-2*t.t));g.position.y+=Math.sin(t.t*Math.PI)*.9;g.scale.setScalar(1-t.t*.8);}else{travel[i]=null;g.scale.setScalar(1);const p=cellPos(d.positions[i]);g.position.x=THREE.MathUtils.damp(g.position.x,p[0],12,dt);g.position.y=.46;g.position.z=THREE.MathUtils.damp(g.position.z,p[2],12,dt);}g.visible=!!travel[i]||d.phase!=='complete';}
  trees.forEach((g,i)=>{const target=i<d.trees?1:0;treeScale[i]=THREE.MathUtils.damp(treeScale[i],target,busy>0?1:5,dt);g.visible=treeScale[i]>.003;g.scale.setScalar(Math.max(.001,treeScale[i]));});
  if(wasBusy&&busy===0){refreshUI();changed();}
 }
 const card=()=>({action:live&&watching()?'попробовать свои ёлочки':current.phase==='complete'?'новый питомник ↺':busy>0?'пролезают…':'выпустить пару',description:(live&&watching()?'Питомник жителя. Кнопки открывают твою отдельную партию. ':'Твой питомник. ')+current.message,disabled:busy>0});
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.quotes?.public;if(d)live=d;});
 apply(data());lastKey=(live&&watching()?'resident:':'sandbox:')+JSON.stringify(data());update(0);
 return {house,controls:ui,update,card,run:()=>action(current.phase==='complete'?'restart':'plant',current.phase==='complete'?{scope:'all'}:{}),inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,busy,selected,hint,quotePositions:quotes.map(g=>g.position.toArray()),treeScales:treeScale.slice(),visibleTrees:trees.filter(t=>t.visible).length})};
}
