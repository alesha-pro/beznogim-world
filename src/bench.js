import runWorld from './bench-core.js';
export function createBench({THREE,workshop,M,mat,group,box,sphere,cyl,rod,torus,sign,changed,watching,localPlay}){
 const house=group([0,0,0],workshop);house.name='mechanical-bench';
 const white=mat('#e9e4cc',{emissive:'#e9e4cc',emissiveIntensity:.6}),green=mat('#c9ff97',{emissive:'#a5dc90',emissiveIntensity:.4});
 box([.55,1.5,-.94],[1.65,1.22,.42],M.dark,house);box([.55,1.5,-.713],[1.42,1.04,.035],white,house);rod([.55,.9,-.94],[.55,1,-.94],.08,M.metal,house);
 const pictures=['000111000001111100011111110011010110011111110001101100000111000','000010000000011000000011100000011110111111111011111110000000000','000010000001111000000110000000010000001111100000010000000010000'];
 const pixels=[];for(let y=0;y<7;y++)for(let x=0;x<9;x++)pixels.push(box([.55+(x-4)*.145,1.5+(3-y)*.14,-.683],[.13,.12,.02],green,house));
 const core=group([-1.05,1.24,-.38],house);core.name='core-gear';cyl([0,0,0],.3,.11,M.copper,core).rotation.x=Math.PI/2;
 const teeth=[];for(let i=0;i<12;i++){const a=i/12*Math.PI*2;let t=box([Math.cos(a)*.33,Math.sin(a)*.33,0],[.13,.13,.12],M.copper,core);t.rotation.z=a;teeth.push(t);}
 torus([0,0,.06],.13,.025,M.dark,core,[0,0,0]);
 const drive=group([-.4,1.12,-.38],house);torus([0,0,0],.19,.035,M.dark,drive,[0,0,0]);rod([-.2,0,0],[.2,0,0],.025,M.metal,drive);
 const belt=group([0,0,0],house);rod([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,M.dark,belt);rod([-1.05,.96,-.4],[-.4,.93,-.4],.027,M.dark,belt);
 const crank=group([-1.5,1,-.05],house);rod([0,0,0],[.23,0,0],.04,M.metal,crank);rod([.23,0,0],[.23,.23,0],.04,M.copper,crank);sphere([.23,.23,0],.08,M.rust,crank);
 const bucket=group([-1.55,1.18,-1.13],house);cyl([0,0,0],.33,.55,M.metal,bucket);cyl([0,.281,0],.29,.015,M.dark,bucket);torus([0,.29,0],.33,.025,M.copper,bucket);torus([0,.36,0],.33,.025,M.metal,bucket,[0,Math.PI/2,0]);
 sign('ЯДРО В ВЕДРО',[0,.4,1.48],2.25,.3,house,{size:37});
 const bulbs=Array.from({length:3},(_,i)=>sphere([.17+i*.3,2.23,-.82],.06,M.mint,house));
 let local=null,live=window.__beznogimState?.mechanics?.bench?.public||null,current,lastKey='',spin=0;
 try{local=JSON.parse(localStorage.getItem('beznogim-bench-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({mode,tool,args,state:local,world:{}});local=r.state;try{localStorage.setItem('beznogim-bench-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='bench-controls';ui.hidden=true;
 ui.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>';
 document.querySelector('#focus-object').before(ui);
 function data(){return live&&watching()?live:runWorld({mode:'migrate',state:local}).public;}
 function action(t,args){localPlay();invoke('action',t,args);lastKey='';update(0);changed();}
 ui.querySelectorAll('[data-part]').forEach(b=>b.onclick=()=>action('fit',{part:b.dataset.part,value:Number(b.dataset.value)}));
 ui.querySelector('#bench-salvage').onclick=()=>action('salvage');ui.querySelector('#bench-restart').onclick=()=>action('restart');
 function apply(d){if(current&&current.attempts!==d.attempts)spin=3;current=d;
  ui.querySelector('#bench-readout').textContent=`экран ${d.round+1}/3 · скорость ${d.speed} / нужно ${d.target}`;
  ui.querySelectorAll('[data-part]').forEach(b=>{b.setAttribute('aria-pressed',String(d[b.dataset.part]===Number(b.dataset.value)));b.disabled=d.phase!=='ready';});
  ui.querySelector('#bench-salvage').disabled=!d.bucket;
  white.color.set(d.picture?'#16362c':'#e9e4cc');white.emissive.set(d.picture?'#20382b':'#e9e4cc');white.emissiveIntensity=d.picture?.1:.6;
  pixels.forEach((p,i)=>p.visible=!!d.picture&&pictures[d.picture-1][i]==='1');
  teeth.forEach((t,i)=>t.visible=i<d.core*3);drive.scale.setScalar(.75+d.belt*.25);belt.visible=!d.bucket;bulbs.forEach((b,i)=>b.visible=i<d.repairs);
 }
 const messages={ready:'Собери передачу и крути рукоятку.',ejected:'Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.',repaired:'Картинка вернулась. Можно взяться за следующий экран.',complete:'Голова, лодка, росток. Все три экрана работают.'};
 function card(){const d=current||data();return {action:live&&watching()?'собрать свой монитор':d.phase==='ejected'?'достать ядро':d.phase==='repaired'?d.round===2?'закончить работу':'следующий экран':d.phase==='complete'?'ещё раз':'крутить рукоятку',description:(live&&watching()?'Верстак жителя. Кнопки открывают твою отдельную сборку. ':'Твоя сборка. ')+messages[d.phase]};}
 function update(dt){const d=data(),key=JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}
  spin=Math.max(0,spin-dt);const a=Math.min(1,dt*7);const dest=d.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];core.position.lerp(new THREE.Vector3(...dest),a);core.rotation.x=THREE.MathUtils.lerp(core.rotation.x,d.bucket?-Math.PI/2:0,a);
  const rate=spin>0?d.core*2:d.picture?.4:0;core.rotation.z+=dt*rate;drive.rotation.z-=dt*rate*d.belt;crank.rotation.z+=dt*rate;
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.bench?.public;if(d){live=d;lastKey='';}});
 apply(data());core.position.set(...(data().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]));
 return {house,controls:ui,update,card,run:()=>{const d=data();action(d.phase==='ejected'?'salvage':d.phase==='repaired'?'next':d.phase==='complete'?'restart':'crank');},inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,corePosition:core.position.toArray(),coreAngle:core.rotation.z,driveAngle:drive.rotation.z,litPixels:pixels.filter(p=>p.visible).length})};
}
