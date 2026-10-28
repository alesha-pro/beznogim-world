import runWorld from './bench-core.js';
export function createBench({THREE,workshop,M,mat,group,box,sphere,cyl,rod,torus,sign,changed,watching,localPlay}){
 const house=group([0,0,0],workshop);house.name='mechanical-bench';
 const monitor=group([0,0,0],house);
 const white=mat('#e9e4cc',{emissive:'#e9e4cc',emissiveIntensity:.6}),green=mat('#c9ff97',{emissive:'#a5dc90',emissiveIntensity:.4});
 box([.55,1.5,-.94],[1.65,1.22,.42],M.dark,monitor);box([.55,1.5,-.713],[1.42,1.04,.035],white,monitor);rod([.55,.9,-.94],[.55,1,-.94],.08,M.metal,monitor);
 const pictures=['000111000001111100011111110011010110011111110001101100000111000','000010000000011000000011100000011110111111111011111110000000000','000010000001111000000110000000010000001111100000010000000010000'];
 const pixels=[];for(let y=0;y<7;y++)for(let x=0;x<9;x++)pixels.push(box([.55+(x-4)*.145,1.5+(3-y)*.14,-.683],[.13,.12,.02],green,monitor));
 const core=group([-1.05,1.24,-.38],monitor);core.name='core-gear';cyl([0,0,0],.3,.11,M.copper,core).rotation.x=Math.PI/2;
 const teeth=[];for(let i=0;i<12;i++){const a=i/12*Math.PI*2;let t=box([Math.cos(a)*.33,Math.sin(a)*.33,0],[.13,.13,.12],M.copper,core);t.rotation.z=a;teeth.push(t);}
 torus([0,0,.06],.13,.025,M.dark,core,[0,0,0]);
 const drive=group([-.4,1.12,-.38],monitor);torus([0,0,0],.19,.035,M.dark,drive,[0,0,0]);rod([-.2,0,0],[.2,0,0],.025,M.metal,drive);
 const belt=group([0,0,0],monitor);rod([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,M.dark,belt);rod([-1.05,.96,-.4],[-.4,.93,-.4],.027,M.dark,belt);
 const crank=group([-1.5,1,-.05],monitor);rod([0,0,0],[.23,0,0],.04,M.metal,crank);rod([.23,0,0],[.23,.23,0],.04,M.copper,crank);sphere([.23,.23,0],.08,M.rust,crank);
 const bucket=group([-1.55,1.18,-1.13],monitor);cyl([0,0,0],.33,.55,M.metal,bucket);cyl([0,.281,0],.29,.015,M.dark,bucket);torus([0,.29,0],.33,.025,M.copper,bucket);torus([0,.36,0],.33,.025,M.metal,bucket,[0,Math.PI/2,0]);
 sign('ЯДРО В ВЕДРО',[0,.4,1.48],2.25,.3,house,{size:37});
 const bulbs=Array.from({length:3},(_,i)=>sphere([.17+i*.3,2.23,-.82],.06,M.mint,monitor));
 // Two removable trays on a small fold-out shelf; monitor coordinates are untouched.
 box([.85,.89,0],[1.8,.09,.7],M.rust,house);
 const trialRoot=group([0,0,0],house),sprouts=[],gauges=[],covers=[];
 const soil=mat('#52443a'),mica=mat('#9ea6a1',{metalness:.55,roughness:.3}),leaf=mat('#99bb70'),water=mat('#6ba9b5');
 for(let i=0;i<2;i++){
  const x=.4+i*.88;
  box([x,.97,0],[.74,.12,.55],M.copper,trialRoot);
  box([x,1.038,0],[.66,.025,.47],i?mica:soil,trialRoot);
  if(i)for(let k=0;k<9;k++){const flake=box([x-.25+k%3*.24,1.058,-.15+Math.floor(k/3)*.15],[.1,.012,.065],M.cream,trialRoot);flake.rotation.y=k*.71;}
  sign(i?'СЛЮДА':'ПОЧВА',[x,.97,.283],.67,.13,trialRoot,{size:54});
  const plants=[];for(let k=0;k<3;k++){
   const g=group([x-.22+k*.22,1.06,0],trialRoot);cyl([0,.33,0],.018,.66,leaf,g);
   const a=sphere([-.08,.42,0],[.12,.04,.065],leaf,g);a.rotation.z=-.45;
   const b=sphere([.08,.525,0],[.12,.04,.065],leaf,g);b.rotation.z=.45;
   plants.push(g);
  }sprouts.push(plants);
  const canopy=group([0,0,0],trialRoot);
  for(const z of [-.23,.23])rod([x-.32,1.04,z],[x-.32,1.8,z],.012,M.copper,canopy);
  for(let k=0;k<4;k++)box([x-.27+k*.18,1.8,0],[.13,.025,.54],M.cream,canopy);
  covers.push(canopy);
  const gauge=box([x,1.068,-.19],[.55,.015,.035],water,trialRoot);gauges.push(gauge);
 }
 let trialTab=false,lastTick=-1;
 let local=null,live=window.__beznogimState?.mechanics?.bench?.public||null,current,lastKey='',spin=0;
 try{local=JSON.parse(localStorage.getItem('beznogim-bench-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({mode,tool,args,state:local,now:Math.floor(Date.now()/1000),world:{}});local=r.state;try{localStorage.setItem('beznogim-bench-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='bench-controls';ui.hidden=true;
 ui.innerHTML='<div class="bench-tabs"><button id="bench-mode-monitor" aria-pressed="true">монитор</button><button id="bench-mode-trial" aria-pressed="false">два лотка</button></div><section id="bench-monitor-panel"><output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small></section><section id="bench-trial-panel" hidden><output id="trial-readout"></output><div class="bench-parts"><button data-seed="1">кресс</button><button data-seed="2">камнецвет</button><button data-seed="3">бобы</button></div><div class="bench-parts"><span>полив</span><button data-water="1">1 доза</button><button data-water="2">2 дозы</button><button data-water="3">3 дозы</button></div><div class="bench-parts"><span>навес</span><button data-cover="open">нет</button><button data-cover="mica">слюда</button><button data-cover="both">оба</button></div><button id="trial-start">полить оба · 6 минут</button><button id="trial-collect">снять сравнение</button><output id="trial-comparison"></output><details><summary>как устроен опыт</summary><small>Пара одинаковых семян, равный полив. Почва теряет 8 единиц воды в минуту, слюда 15. Кресс предпочитает почву, камнецвет слюду, бобы без предпочтения. Навес вдвое снижает испарение, но пропускает 80% света. Режим «слюда» меняет только один лоток; «оба» сохраняет равные условия освещения. Выбор фиксируется при поливе. Рост зависит от удержанной воды и света. Ускоренная игровая модель, не ботанический прогноз. Результат не еда. Личная песочница отделена от опыта жителя.</small></details><div id="trial-records"></div></section>';
 document.querySelector('#focus-object').before(ui);
 function data(){return live&&watching()?{...live,trial:live.trial||runWorld({mode:'migrate'}).public.trial}:runWorld({mode:'migrate',state:local,now:Math.floor(Date.now()/1000)}).public;}
 function action(t,args){localPlay();invoke('action',t,args);lastKey='';update(0);changed();}
 ui.querySelectorAll('[data-part]').forEach(b=>b.onclick=()=>action('fit',{part:b.dataset.part,value:Number(b.dataset.value)}));
 ui.querySelector('#bench-salvage').onclick=()=>action('salvage');ui.querySelector('#bench-restart').onclick=()=>action('restart');
 let dose=2,cover='open';
 function setTab(t){trialTab=t;ui.querySelector('#bench-monitor-panel').hidden=t;ui.querySelector('#bench-trial-panel').hidden=!t;ui.querySelector('#bench-mode-monitor').setAttribute('aria-pressed',String(!t));ui.querySelector('#bench-mode-trial').setAttribute('aria-pressed',String(t));lastKey='';update(0);changed();}
 ui.querySelector('#bench-mode-monitor').onclick=()=>setTab(false);ui.querySelector('#bench-mode-trial').onclick=()=>setTab(true);
 ui.querySelectorAll('[data-seed]').forEach(b=>b.onclick=()=>action('fit',{part:'seed',value:Number(b.dataset.seed)}));
 ui.querySelectorAll('[data-water]').forEach(b=>b.onclick=()=>{dose=Number(b.dataset.water);lastKey='';update(0);});
 ui.querySelectorAll('[data-cover]').forEach(b=>b.onclick=()=>{cover=b.dataset.cover;lastKey='';update(0);});
 ui.querySelector('#trial-start').onclick=()=>action('crank',{trial:true,water:dose,cover});
 ui.querySelector('#trial-collect').onclick=()=>action('salvage',{trial:true});
 function apply(d){if(current&&current.attempts!==d.attempts)spin=3;current=d;
  const t=d.trial,coverLabels={open:'нет',mica:'слюда',both:'оба'},shownCover=live&&watching()||['growing','ready','collected'].includes(t.phase)?t.cover||'open':cover;
  covers.forEach((g,i)=>g.visible=shownCover==='both'||shownCover==='mica'&&i===1);
  ui.querySelectorAll('[data-cover]').forEach(b=>{b.disabled=!!(live&&watching())||['growing','ready'].includes(t.phase);b.setAttribute('aria-pressed',String(b.dataset.cover===shownCover));});
  const names=['кресс','камнецвет','бобы'],phases={empty:'выбери семена',planted:'посажено · выбери полив',growing:`растёт · осталось ${t.remaining} с`,ready:'готово · сними сравнение',collected:'сравнение сохранено · можно сеять снова'};
  ui.querySelector('#trial-readout').textContent=(live&&watching()?'опыт жителя · ':'твоя песочница · ')+phases[t.phase];
  ui.querySelectorAll('[data-seed]').forEach(b=>{b.disabled=!!(live&&watching())||['growing','ready'].includes(t.phase);b.setAttribute('aria-pressed',String(t.phase!=='empty'&&t.seed===Number(b.dataset.seed)));});
  ui.querySelectorAll('[data-water]').forEach(b=>{b.disabled=!!(live&&watching())||['growing','ready'].includes(t.phase);b.setAttribute('aria-pressed',String((['growing','ready','collected'].includes(t.phase)?t.water:dose)===Number(b.dataset.water)));});
  ui.querySelector('#trial-start').disabled=!!(live&&watching())||t.phase!=='planted';ui.querySelector('#trial-collect').disabled=!!(live&&watching())||t.phase!=='ready';
  ui.querySelector('#trial-comparison').textContent=t.phase==='empty'||t.phase==='planted'?'Почва / слюда · одинаковые семена и полив':`рост ${t.trays[0].growth} / ${t.trays[1].growth} · вода ${t.trays[0].water} / ${t.trays[1].water} · навес: ${coverLabels[t.cover||'open']}`;
  ui.querySelector('#trial-records').textContent=t.records.map(r=>`№${r.id} ${names[r.seed-1]} · ${r.water} дозы · навес: ${coverLabels[r.cover||'open']} · почва ${r.soil} / слюда ${r.mica}`).join('\n');
  sprouts.forEach((plants,i)=>plants.forEach(g=>{g.visible=t.progress>0;g.scale.y=Math.max(.025,t.trays[i].growth/12);}));
  gauges.forEach((g,i)=>{g.visible=!['empty','planted'].includes(t.phase);g.scale.x=Math.max(.001,t.trays[i].water/120);});
  ui.querySelector('#bench-readout').textContent=`экран ${d.round+1}/3 · скорость ${d.speed} / нужно ${d.target}`;
  ui.querySelectorAll('[data-part]').forEach(b=>{b.setAttribute('aria-pressed',String(d[b.dataset.part]===Number(b.dataset.value)));b.disabled=d.phase!=='ready';});
  ui.querySelector('#bench-salvage').disabled=!d.bucket;
  white.color.set(d.picture?'#16362c':'#e9e4cc');white.emissive.set(d.picture?'#20382b':'#e9e4cc');white.emissiveIntensity=d.picture?.1:.6;
  pixels.forEach((p,i)=>p.visible=!!d.picture&&pictures[d.picture-1][i]==='1');
  teeth.forEach((t,i)=>t.visible=i<d.core*3);drive.scale.setScalar(.75+d.belt*.25);belt.visible=!d.bucket;bulbs.forEach((b,i)=>b.visible=i<d.repairs);
 }
 const messages={ready:'Собери передачу и крути рукоятку.',ejected:'Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.',repaired:'Картинка вернулась. Можно взяться за следующий экран.',complete:'Голова, лодка, росток. Все три экрана работают.'};
 function card(){const d=current||data();if(trialTab)return {action:live&&watching()?'открыть свою песочницу':d.trial.phase==='ready'?'снять сравнение':d.trial.phase==='planted'?'полить оба лотка':'парный опыт',description:'Два субстрата, одинаковые семена. Шесть минут роста, потом сравнение. Монитор работает отдельно.'};return {action:live&&watching()?'собрать свой монитор':d.phase==='ejected'?'достать ядро':d.phase==='repaired'?d.round===2?'закончить работу':'следующий экран':d.phase==='complete'?'ещё раз':'крутить рукоятку',description:(live&&watching()?'Верстак жителя. Кнопки открывают твою отдельную сборку. ':'Твоя сборка. ')+messages[d.phase]};}
 function update(dt){const sec=Math.floor(Date.now()/1000);if(!(live&&watching())&&local?.trial?.phase==='growing'&&sec!==lastTick){lastTick=sec;invoke('tick');}const d=data(),key=JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}
  spin=Math.max(0,spin-dt);const a=Math.min(1,dt*7);const dest=d.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];core.position.lerp(new THREE.Vector3(...dest),a);core.rotation.x=THREE.MathUtils.lerp(core.rotation.x,d.bucket?-Math.PI/2:0,a);
  const rate=spin>0?d.core*2:d.picture?.4:0;core.rotation.z+=dt*rate;drive.rotation.z-=dt*rate*d.belt;crank.rotation.z+=dt*rate;
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.bench?.public;if(d){live=d;lastKey='';}});
 apply(data());core.position.set(...(data().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]));
 function trialGeometry(){const points=[];trialRoot.updateWorldMatrix(true,true);trialRoot.traverse(o=>{if(!o.isMesh||!o.geometry?.attributes?.position)return;for(let n=o;n&&n!==trialRoot;n=n.parent)if(!n.visible)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++)points.push(new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld));});return points;}
 return {house,controls:ui,update,card,trialGeometry,setCutaway:active=>{monitor.visible=!active;},run:()=>{const d=data();if(trialTab){if(live&&watching()){localPlay();lastKey='';update(0);changed();}else if(d.trial.phase==='ready')action('salvage',{trial:true});else if(d.trial.phase==='planted')action('crank',{trial:true,water:dose,cover});return;}action(d.phase==='ejected'?'salvage':d.phase==='repaired'?'next':d.phase==='complete'?'restart':'crank');},inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,trialTab,trialCutaway:!monitor.visible,monitorVisible:monitor.visible,trialCovers:covers.map(g=>g.visible),trialPlants:sprouts.map(ps=>ps.map(g=>({visible:g.visible,height:g.scale.y,position:g.getWorldPosition(new THREE.Vector3()).toArray()}))),corePosition:core.position.toArray(),coreAngle:core.rotation.z,driveAngle:drive.rotation.z,litPixels:pixels.filter(p=>p.visible).length})};
}
