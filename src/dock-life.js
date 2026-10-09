// The dock's little fiction. Three souvenirs, all geometry, all local.
// The boat is reused: no new GPU objects on repeated voyages.
export function createDockLife({THREE,root,dock,state,M,mat,group,mesh,box,sphere,cyl,torus,rod,sign,paperBoat,batchStatic,persist,say,refresh,chime,reduced}) {
  const duration=18;
  const finds=[
    {name:'камень, который не тонет',line:'камень приплыл. сам.',description:'Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть.'},
    {name:'белое семечко',line:'посадил. уже светится.',description:'Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит.'},
    {name:'письмо от меня',line:'почерк мой. странно.',description:'В конверте записка от головы. Адреса нет, бумага сухая.'}
  ];
  const notes=['«чайник выключил. можешь не возвращаться быстро. - я»','«здесь тоже нет ног. зато тихо. - я»','«камень не выбрасывай. он дорогу знает. - я»'];
  const gallery=group([0,0,0],dock);
  // A dish for a stone which will never touch it.
  cyl([-.70,.30,-.83],.30,.38,M.concrete,gallery);
  torus([-.70,.51,-.83],.31,.035,M.copper,gallery);
  cyl([-.70,.49,-.83],.26,.045,M.dark,gallery);
  const stone=group([-.70,.97,-.83],gallery);
  const pebble=mesh(new THREE.IcosahedronGeometry(.25,1),mat('#83ada4',{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],stone);
  torus([0,0,0],.36,.015,M.copper,stone,[0,0,.35]);
  // Pot, then a flower with a deliberately impossible centre.
  cyl([.66,.34,-.22],.27,.45,M.rust,gallery);
  torus([.66,.56,-.22],.28,.028,M.copper,gallery);
  cyl([.66,.55,-.22],.24,.03,mat('#495441'),gallery);
  const plant=group([.66,.56,-.22],gallery);
  rod([0,0,0],[0,.83,0],.026,M.copper,plant);
  for(const [x,y,a] of [[-.17,.23,-.5],[.17,.41,.5]]) {
    const leaf=sphere([x,y,0],[.24,.035,.085],M.mint,plant);leaf.rotation.z=a;
  }
  const flower=group([0,.95,0],plant);
  sphere([0,0,0],.115,M.light,flower);
  torus([0,0,0],.28,.021,M.cream,flower,[0,0,0]);
  torus([0,0,0],.27,.021,M.copper,flower,[0,Math.PI/2,0]);
  const buds=[];
  for(let i=0;i<4;i++) {
    const a=i*Math.PI/2;const bud=group([Math.cos(a)*.30,.13+Math.sin(a)*.12,Math.sin(a)*.30],plant);
    rod([0,-.15,0],[0,.2,0],.012,M.copper,bud);sphere([0,.23,0],.065,M.cream,bud);batchStatic(bud,[]);buds.push(bud);
  }
  // Small tray for the folded letter. Text is read in the object card.
  box([-.46,.20,.32],[.68,.12,.47],M.dark,gallery);
  const envelope=group([-.46,.29,.32],gallery);
  box([0,0,0],[.50,.025,.32],M.cream,envelope);
  for(const x of [-.23,.23])rod([x,.016,-.14],[0,.016,.06],.009,M.copper,envelope);
  sphere([0,.027,.06],[.04,.015,.04],M.rust,envelope);
  sign('ОБРАТНО',[0,.51,1.365],1.1,.20,gallery,{bg:'#c2c7a3',fg:'#445e45',size:42});
  batchStatic(stone,[]);batchStatic(flower,[]);batchStatic(plant,[flower,...buds]);batchStatic(envelope,[]);
  batchStatic(gallery,[stone,plant,envelope]);
  // A return signal has its own material, so engine lights do not blink.
  const beacon=sphere([.17,2.1,-.7],.10,mat('#ffd591',{emissive:'#ffb85a',emissiveIntensity:1.2}),dock);
  beacon.castShadow=false;
  const travel=group([0,0,0],root);
  const boat=paperBoat(travel,[8.3,.14,3.5],1.05);
  const cargo=group([0,.36,0],boat);
  const cargoStone=mesh(new THREE.IcosahedronGeometry(.15,0),mat('#83ada4'),[0,.14,0],[1,1.25,.85],cargo);
  const cargoSeed=sphere([0,.12,0],[.085,.13,.085],M.light,cargo);
  const cargoLetter=box([0,.09,0],[.23,.025,.16],M.cream,cargo);cargoLetter.rotation.z=.2;
  const cargoes=[cargoStone,cargoSeed,cargoLetter];
  batchStatic(boat,[cargo]);
  const berth=new THREE.Vector3(8.3,.14,3.5),slip=new THREE.Vector3(8.45,.14,3.65),far=new THREE.Vector3(9.2,-2.7,6.5);
  let phase=-1;let grow=state.dockTrips>=2?1:.02;
  function sync(){
    stone.visible=state.dockTrips>=1;plant.visible=state.dockTrips>=2;envelope.visible=state.dockTrips>=3;
    buds.forEach((b,i)=>b.visible=state.dockTrips>=5+i*3);
    cargo.visible=state.dockPending;
    cargoes.forEach((o,i)=>o.visible=i===state.dockTrips%3);
    boat.position.copy(state.dockPending?slip:berth);
  }
  sync();
  function launchOrCollect(){
    if(state.boat>0)return;
    if(state.dockPending){
      const found=finds[state.dockTrips%3];state.dockTrips++;state.dockPending=false;
      if(state.dockTrips===2)grow=.02;
      persist();sync();say(found.line);chime(330);refresh();
    }else{
      state.boat=duration;phase=-1;cargoes.forEach((o,i)=>o.visible=i===state.dockTrips%3);cargo.visible=false;
      say('ну плыви. я тут.');refresh();
    }
  }
  function update(dt,time){
    if(state.boat>0){
      state.boat=Math.max(0,state.boat-dt);const t=duration-state.boat;const next=t<7?0:t<11?1:2;if(next!==phase){phase=next;refresh();}
      if(t<2)boat.position.lerpVectors(berth,slip,THREE.MathUtils.smoothstep(t,0,2));
      else if(t<7)boat.position.lerpVectors(slip,far,THREE.MathUtils.smoothstep(t,2,7));
      else if(t<11)boat.position.copy(far);
      else if(t<16)boat.position.lerpVectors(far,slip,THREE.MathUtils.smoothstep(t,11,16));
      else boat.position.copy(slip);
      boat.visible=t<7||t>=11;cargo.visible=t>=11;
      boat.rotation.y=t>=11?Math.PI+.2:.2;
      if(state.boat===0){state.dockPending=true;persist();boat.visible=true;sync();say('вернулся. с чем-то.');chime(554);refresh();}
    }
    boat.rotation.z=reduced?0:Math.sin(time*1.7)*.035;
    if(state.boat===0){boat.visible=true;boat.position.y=(state.dockPending?slip.y:berth.y)+Math.sin(time*1.2)*.02;boat.rotation.y=state.dockPending?Math.PI+.2:0;}
    stone.position.y=.97+Math.sin(time*.9)*.055;stone.rotation.y=time*.15;
    grow=THREE.MathUtils.damp(grow,1,1.1,dt);plant.scale.setScalar(grow);flower.rotation.y=reduced?0:time*.23;
    beacon.material.emissiveIntensity=state.dockPending?1.5+Math.sin(time*4)*1.1:1.2;
  }
  function card(){
    if(state.boat>0){const t=duration-state.boat;return {disabled:true,action:t<7?'плывёт…':t<11?'где-то в никуда…':'возвращается…',description:'Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём.'};}
    if(state.dockPending)return {disabled:false,action:'забрать находку',description:`Вернулся. На борту: ${finds[state.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};
    if(state.dockTrips){const index=(state.dockTrips-1)%3;return {disabled:false,action:'отпустить ещё раз',description:index===2?`${finds[index].description} ${notes[Math.floor((state.dockTrips-1)/3)%notes.length]}`:finds[index].description};}
    return {disabled:false,action:'отпустить и дождаться',description:'Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место.'};
  }
  return {travel,gallery,beacon,launchOrCollect,update,card,inspect:()=>({trips:state.dockTrips,pending:state.dockPending,boat:boat.position.toArray(),visible:boat.visible,cargo:cargo.visible,stone:stone.visible,plant:plant.visible,plantScale:grow,letter:envelope.visible,buds:buds.filter(b=>b.visible).length})};
}
