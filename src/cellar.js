import runWorld from './cellar-core.js';
// The very same local algorithm drives the visitor sandbox and server.
const names={moon_stair:'сыр с лестницей',stone:'каменный сыр',holes:'дырчатый сыр',lopsided:'однобокий сыр'};
export function createCellar({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,mesh,sign,batchStatic,changed,watching,localPlay}) {
  const house=group([24,-1.55,0]);house.name='cheese-cellar';
  const stone=mat('#697b70'),plaster=mat('#b4b89b'),wood=mat('#936c4d'),gold=mat('#e1b064'),rind=mat('#b77e42'),cream=mat('#f4d490');
  box([0,-.23,0],[10,.45,8],stone,house);box([0,1.6,-3.65],[10,3.2,.3],plaster,house);box([-4.85,1.3,0],[.3,2.6,7.3],plaster,house);
  for(let x=-4;x<=4;x+=2)box([x,1.5,-3.43],[.16,3,.1],stone,house);
  // Roof cut away, ribs left: the room is visible from any quarter turn.
  for(let x of [-4.4,4.4]){
    rod([x,0,-3.3],[x,3.6,-3.3],.09,M.copper,house);
    rod([x,3.6,-3.3],[x,3.6,2.5],.09,M.copper,house);
    rod([x,3.6,2.5],[x,0,2.5],.09,M.copper,house);
  }
  sign('СЫРНЫЙ ПОГРЕБ / 010',[0,3,-3.42],4.8,.5,house,{size:36});
  box([0,1.2,-2.7],[7.9,.14,1.05],wood,house);box([0,0,-2.7],[7.9,.14,1.05],wood,house);
  for(let x of [-3.8,3.8])box([x,.6,-2.7],[.14,1.4,1.05],wood,house);
  const vat=cyl([-3,.55,1.1],.75,1.1,M.copper,house);torus([-3,1.11,1.1],.75,.055,M.dark,house);
  cyl([-3,1.1,1.1],.64,.02,cream,house);rod([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,wood,house);
  for(let x of [2.8,3.5]){cyl([x,.28,1.8],.26,.56,M.cream,house);cyl([x,.59,1.8],.12,.1,M.copper,house);}
  const shutter=box([2.6,2.4,-3.42],[1.2,.65,.12],M.metal,house);box([2.6,2.4,-3.31],[.7,.08,.12],M.copper,house);
  for(let i=0;i<4;i++)box([2.25+i*.23,2.4,-3.32],[.045,.55,.03],M.dark,house);
  box([.5,.3,.25],[3.7,.6,3.3],wood,house);
  const wheel=group([.5,1.02,.25],house);
  const fresh=mesh(new THREE.CylinderGeometry(1.2,1.2,.62,40),gold,[0,0,0],null,wheel);
  const rindBand=mesh(new THREE.CylinderGeometry(1.215,1.215,.14,40,1,true),rind,[0,0,0],null,wheel);
  const stamp=torus([0,.33,0],.35,.026,M.cream,wheel);
  const progress=group([.5,.65,2.3],house);const lamps=[];
  for(let i=0;i<6;i++){lamps.push(sphere([-1.25+i*.5,0,0],.08,M.mint,progress));}
  const resting=sign('ЗАКЛАДКА ЖДЁТ',[.5,.8,.27],2.4,.4,house,{size:36});resting.rotation.x=-Math.PI/2;
  function specimen(pos) {
    const g=group(pos,house);
    const body=mesh(new THREE.CylinderGeometry(.49,.49,.31,24,1,false,1.12,Math.PI*2-1.12),cream,[0,0,0],null,g);
    const crust=mesh(new THREE.CylinderGeometry(.5,.5,.09,24,1,true,1.12,Math.PI*2-1.12),rind.clone(),[0,0,0],null,g);
    const steps=group([0,-.14,.09],g);
    for(let i=0;i<4;i++)box([.05+i*.085,.04+i*.05,.15+i*.03],[.12,.06,.2],M.cream,steps);
    const pearl=sphere([.09,.16,.27],.04,M.mint,steps);
    const crystal=mesh(new THREE.IcosahedronGeometry(.21,0),stone,[.13,.02,.23],null,g);
    const holes=group([0,0,0],g);
    for(const [x,y,z] of [[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])sphere([x,y,z],[.05,.05,.025],M.dark,holes);
    return {g,body,crust,steps,crystal,holes,pearl};
  }
  const shelves=Array.from({length:6},(_,i)=>specimen([-3.15+i*1.26,1.42,-2.6]));
  // A walkable-looking stone path descends from the dock's outer edge to the new room.
  const path=group([0,0,0],root);
  for(let i=0;i<24;i++){
    const u=i/23;box([8.3+u*11.2,-.15-u*1.32,1.4+Math.sin(u*Math.PI)*2],[.85,.15,.75],stone,path);
  }
  for(let i=0;i<5;i++)box([20+i*.7,-1.46,1.4-i*.22],[.75,.13,.7],stone,path);
  sign('СЫР →',[10.2,.35,2.4],1.5,.4,path,{size:44});rod([10.2,-1.6,2.4],[10.2,.35,2.4],.045,M.copper,path);
  batchStatic(path,[]);batchStatic(house,[wheel,shutter,progress,resting,...shelves.map(x=>x.g)]);
  for(const s of shelves){batchStatic(s.steps,[s.pearl]);batchStatic(s.holes,[]);}
  let local=null,live=null,clockOffset=0,current=null,lastKey='',lastTick=0;
  try{const saved=JSON.parse(localStorage.getItem('beznogim-cellar-v1')||'null');local=saved?.state||saved;clockOffset=Number(saved?.clockOffset)||0;}catch{}
  const now=()=>Date.now()/1000+clockOffset;
  function invoke(mode,tool,args={}){
    const r=runWorld({state:local,mode,tool,args,now:now(),version:1,previous_version:1,world:{}});local=r.state;
    try{localStorage.setItem('beznogim-cellar-v1',JSON.stringify({state:local,clockOffset}))}catch{}
    return r;
  }
  invoke('migrate');
  const controls=document.createElement('div');controls.id='cellar-controls';controls.hidden=true;
  controls.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>';
  document.querySelector('#focus-object').before(controls);
  function data(){return live&&watching()?live:runWorld({mode:'migrate',state:local,now:local.updated,world:{}}).public;}
  function apply(d){
    current=d;const b=d.batch;wheel.visible=!!b;resting.visible=!b;
    shutter.rotation.y=d.air==='dry'?-.8:0;
    if(b){wheel.rotation.z=b.face?Math.PI:0;const ratio=b.age/360;fresh.material.color.set(b.culture==='moon'?'#e9cf8b':'#c8bc88');rindBand.material.color.set(d.air==='damp'?'#8b9f78':'#b87a48');stamp.scale.setScalar(1+ratio*.15);}
    for(let i=0;i<6;i++)lamps[i].visible=!!b&&b.age>=(i+1)*60;
    shelves.forEach((item,i)=>{const cheese=d.shelf[i];item.g.visible=!!cheese;if(!cheese)return;
      item.g.rotation.z=cheese.kind==='lopsided'?.22:0;item.crust.material.color.set(cheese.wet>=180?'#8b9f78':'#b87a48');
      item.steps.visible=cheese.kind==='moon_stair';item.crystal.visible=cheese.kind==='stone';item.holes.visible=cheese.kind==='holes'||cheese.kind==='lopsided';
    });
  }
  function action(tool,args){localPlay();const r=invoke('action',tool,args);lastKey='';update(0);changed();return r;}
  for(const b of controls.querySelectorAll('[data-culture]'))b.onclick=()=>action('set_batch',{culture:b.dataset.culture});
  controls.querySelector('#cellar-turn').onclick=()=>action('tend',{air:local.air,turn:true});
  controls.querySelector('#cellar-air').onclick=()=>action('tend',{air:local.air==='damp'?'dry':'damp',turn:false});
  controls.querySelector('#cellar-wait').onclick=()=>{localPlay();clockOffset+=60;invoke('tick');lastKey='';update(0);changed();};
  function card(){
    const d=current||data(),b=d.batch;
    const source=live&&watching()?'Жизнь жителя. Кнопки откроют твою отдельную песочницу.':'Твоя песочница. Житель и его сыр не меняются.';
    const detail=b?b.ready?'Созрел. Можно открыть колесо; дальше оно не стареет.':`Зреет: ${Math.floor(b.age)}/360 с. Корка: ${Math.floor(b.exposure[0])}/${Math.floor(b.exposure[1])} с.`:d.shelf.length?`На полке: ${d.shelf.map(c=>names[c.kind]).join(', ')}.`:'В тёплой комнате ждёт пустой стол.';
    return {action:live&&watching()?'войти в свою сыроварню':b?(b.ready?'разрезать колесо':'сыр пока зреет'):'заложить лунное колесо',disabled:!(live&&watching())&&!!b&&!b.ready,description:source+' '+detail};
  }
  function refreshControls(){
    const d=current||data(),b=d.batch;
    controls.querySelector('#cellar-readout').textContent=`${d.air==='damp'?'сыро':'сухо'} · ${b?(b.ready?'готово':`ещё ${Math.ceil(b.remaining)} с`):'нет колеса'} · полка ${d.shelf.length}/6`;
    for(const btn of controls.querySelectorAll('[data-culture]'))btn.disabled=!!b;
    controls.querySelector('#cellar-turn').disabled=!b||b.ready;
    controls.querySelector('#cellar-air').textContent=d.air==='damp'?'сделать суше':'вернуть сырость';
  }
  function update(time){
    if(time-lastTick>=1){lastTick=time;invoke('tick');}
    const d=data();const key=JSON.stringify(d);
    if(key!==lastKey){lastKey=key;apply(d);refreshControls();changed();}
  }
  window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.cellar?.public;if(d){live=d;lastKey='';}});
  live=window.__beznogimState?.mechanics?.cellar?.public||null;apply(data());refreshControls();
  return {house,controls,update,card,run:()=>action(local.batch?'cut':'set_batch',{culture:'moon'}),inspect:()=>({source:live&&watching()?'resident':'sandbox',...current,wheelVisible:wheel.visible,shelfVisible:shelves.filter(x=>x.g.visible).length,stairsVisible:shelves.filter(x=>x.g.visible&&x.steps.visible).length,shutter:shutter.rotation.y})};
}
