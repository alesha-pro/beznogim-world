import runWorld from './dash-core.js';
export function createDash({THREE,root,M,mat,group,box,sphere,rod,torus,sign,batchStatic,changed,watching,localPlay}){
 const house=group([0,-1.5,-24],root);house.name='punctuation-post';
 const ink=mat('#28464d'),paper=mat('#eee4c9'),waterMat=mat('#6d9994',{roughness:.35,transparent:true,opacity:.8});
 box([0,-.16,0],[16,.6,10],M.concrete,house);box([0,.2,0],[14,.14,7],M.dark,house);box([0,.3,0],[13.6,.04,6.6],waterMat,house);
 const left=group([0,0,0],house),right=group([0,0,0],house);
 for(const [pad,label]of [[left,'ОТ'],[right,'ДО']]){box([0,.72,0],[2,1.15,3.2],M.concrete,pad);box([0,1.32,0],[2.12,.12,3.3],paper,pad);sign(label,[0,.9,1.66],1,.36,pad,{size:60});}
 const beam=group([0,1.43,0],house),halfA=group([0,0,0],beam),halfB=group([0,0,0],beam);
 const a=box([-.5,0,0],[1,.15,.56],ink,halfA),b=box([.5,0,0],[1,.15,.56],ink,halfB);
 const rests=[-1,1].map(()=>box([0,1.37,0],[.2,.12,.82],M.copper,house));
 const snail=group([0,1.47,0],house);snail.name='postal-snail';sphere([0,.1,0],[.65,.16,.22],M.leaf,snail);sphere([-.08,.46,0],[.39,.42,.29],M.copper,snail);torus([-.08,.47,.3],.23,.033,paper,snail,[0,0,0]);torus([-.08,.47,.315],.12,.03,paper,snail,[0,0,0]);
 for(const z of [-.13,.13]){rod([.4,.17,z],[.62,.46,z],.02,M.leaf,snail);sphere([.62,.46,z],[.055,.065,.055],ink,snail);}
 box([-.16,.92,0],[.46,.32,.065],paper,snail);rod([-.38,.98,.04],[-.16,.83,.04],.014,M.copper,snail);rod([.06,.98,.04],[-.16,.83,.04],.014,M.copper,snail);
 // Actual arrivals fill this shelf; no resource or food is minted.
 const shelf=group([0,.4,3.9],house);box([0,0,0],[3.6,.22,1],M.copper,shelf);
 const stamps=['.','?','!'].map((v,i)=>{const g=group([-1.1+i*1.1,.42,0],shelf);box([0,0,0],[.8,.65,.11],paper,g);sign(v,[0,.02,.075],.55,.5,g,{size:100});return g;});
 sign('ДЛИННОЕ ТИРЕ',[0,.74,-3.9],4.5,.5,house,{size:52});
 const ruler=group([0,.55,2.5],house);box([0,0,0],[10,.1,.4],M.copper,ruler);for(let i=-4;i<=4;i++){box([i,.07,0],[.035,.025,.26],ink,ruler);sign(String(i),[i,.08,.32],.4,.28,ruler,{size:45});}
 // A descending footpath connects the new north lot to the existing yard.
 for(let i=0;i<16;i++)box([1.5,-.1-i*.09,-5.9-i*.72],[1.05,.14,.65],M.cream,root);
 for(let i=0;i<8;i++)box([1.5,-1.45,-17.6-i*.5],[1.05,.14,.45],M.cream,root);
 const lamp=group([-6.9,.3,3.9],house);rod([0,0,0],[0,2.7,0],.07,M.metal,lamp);box([0,2.7,0],[.8,.14,.8],M.metal,lamp);box([0,2.59,0],[.68,.06,.68],mat('#e4ecd0',{emissive:'#c2d5a4',emissiveIntensity:1}),lamp);
 batchStatic(snail,[]);batchStatic(left,[]);batchStatic(right,[]);batchStatic(house,[left,right,beam,...rests,snail,shelf]);
 let local=null,live=window.__beznogimState?.mechanics?.dash?.public||null,current,lastKey='',walk=1,bend=0;
 try{local=JSON.parse(localStorage.getItem('beznogim-dash-v1')||'null');}catch{}
 function invoke(mode,tool,args={}){const r=runWorld({mode,tool,args,state:local});local=r.state;try{localStorage.setItem('beznogim-dash-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('div');ui.id='dash-controls';ui.hidden=true;
 ui.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join('')+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(i=>`<option value="${i}">${i>0?'+':''}${i}</option>`).join('')+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>';
 document.querySelector('#focus-object').before(ui);
 const data=()=>live&&watching()?live:runWorld({mode:'migrate',state:local}).public;
 function action(t,args){localPlay();invoke('action',t,args);lastKey='';update(0);changed();}
 ui.querySelector('#dash-tune').onclick=()=>action('tune',{span:Number(ui.querySelector('#dash-span').value),shift:Number(ui.querySelector('#dash-shift').value)});ui.querySelector('#dash-reset').onclick=()=>action('reset');
 function apply(d){const arrived=['delivered','complete'].includes(d.phase);if(!arrived)walk=0;else if(!current||current.run!==d.run||current.round!==d.round)walk=1;else if(!['delivered','complete'].includes(current.phase))walk=0;current=d;
  ui.querySelector('#dash-readout').textContent=`почта ${d.delivered}/3 · пролёт ${d.gap} · центр ${d.center>0?'+':''}${d.center} · попытки ${d.attempts}`;
  ui.querySelector('#dash-span').value=d.span;ui.querySelector('#dash-shift').value=d.shift;for(const el of ui.querySelectorAll('select,#dash-tune'))el.disabled=arrived;
  left.position.x=d.center-d.gap/2-1;right.position.x=d.center+d.gap/2+1;rests[0].position.x=d.center-d.gap/2;rests[1].position.x=d.center+d.gap/2;
  beam.position.x=d.shift;a.scale.x=b.scale.x=d.span/2;a.position.x=-d.span/4;b.position.x=d.span/4;
  stamps.forEach((m,i)=>m.visible=i<d.delivered);
 }
 function update(dt){const d=data(),key=JSON.stringify(d);if(key!==lastKey){lastKey=key;apply(d);changed();}walk=['delivered','complete'].includes(d.phase)?Math.min(1,walk+dt/4):0;
  bend=THREE.MathUtils.damp(bend,d.phase==='bent'?.22:0,6,dt);halfA.rotation.z=bend;halfB.rotation.z=-bend;beam.position.y=1.43-Math.sin(bend)*d.span/2;
  snail.position.x=left.position.x+(right.position.x-left.position.x)*(walk*walk*(3-2*walk));snail.position.y=1.47;snail.rotation.z=walk>0&&walk<1?Math.sin(walk*30)*.025:0;
 }
 const card=()=>{const d=current||data();return {action:live&&watching()?'попробовать свою почту':d.phase==='complete'?'новая почта ↺':d.phase==='delivered'?'следующий пролёт →':'отправить улитку',description:(live&&watching()?'Почтовый мост жителя. Кнопки открывают отдельную песочницу. ':'Твой почтовый мост. ')+d.message};};
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.dash?.public;if(d)live=d;});
 apply(data());lastKey=JSON.stringify(data());snail.position.x=walk===1?right.position.x:left.position.x;
 return {house,controls:ui,update,card,run:()=>{if(walk>0&&walk<1)return;const p=data().phase;action(p==='complete'?'reset':p==='delivered'?'next':'cross');},inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,walk,bend,snail:snail.position.toArray(),beam:beam.position.toArray(),left:left.position.x,right:right.position.x,stamps:stamps.map(s=>s.visible)})};
}
