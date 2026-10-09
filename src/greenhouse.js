// A toy thermostat. Deliberately not a model, real inference, or climate science.
export function createGreenhouse({THREE,root,scene,head,M,mat,group,box,sphere,cyl,rod,torus,sign,paperBoat,batchStatic,changed,chime}) {
 let saved={};try{saved=JSON.parse(localStorage.getItem('beznogim-parnik-v1')||'{}')||{}}catch{}
 const game={temp:4,turn:0,mode:'idle',wins:Math.min(99,Math.max(0,Math.floor(Number(saved.wins)||0))),trace:saved.trace===true};
 const weather=[1,2,-1,1,2,-1];
 function persist(){try{localStorage.setItem('beznogim-parnik-v1',JSON.stringify({wins:game.wins,trace:game.trace}))}catch{}}
 const house=group([-.1,.08,4.3],root);
 box([0,.22,0],[1.35,.44,1.4],M.concrete,house);box([0,.46,0],[1.22,.08,1.3],M.dark,house);
 const glass=mat('#a6d4bb',{transparent:true,opacity:.18,depthWrite:false,side:THREE.DoubleSide});
 for(const x of [-.62,.62])for(const z of [-.64,.64])rod([x,.46,z],[x,1.45,z],.024,M.copper,house);
 for(const x of [-.62,.62])box([x,.96,0],[.018,.95,1.28],glass,house);
 box([0,.96,-.64],[1.24,.95,.018],glass,house);
 const lid=group([0,1.45,-.64],house);
 for(const x of [-.62,.62])rod([x,0,0],[x,.36,.64],.026,M.copper,lid);
 for(const x of [-.62,.62])rod([x,.36,.64],[x,0,1.28],.026,M.copper,lid);
 rod([-.62,.36,.64],[.62,.36,.64],.026,M.copper,lid);
 const roof1=box([0,.18,.32],[1.26,.025,.72],glass,lid);roof1.rotation.x=-.51;
 const roof2=box([0,.18,.96],[1.26,.025,.72],glass,lid);roof2.rotation.x=.51;
 const stalk=group([0,.52,0],house);cyl([0,.2,0],.026,.4,M.leaf,stalk);
 for(const x of [-1,1]){const leaf=sphere([x*.15,.27,0],[.22,.055,.09],M.leaf,stalk);leaf.rotation.z=x*.35;}
 const fruit=sphere([0,.25,.12],[.23,.16,.27],M.copper,stalk);
 const trophy=sphere([.42,.58,.46],[.15,.1,.18],M.copper,house);trophy.visible=game.wins>0;
 const thermometer=group([-.76,.7,.69],house);box([0,.28,0],[.13,.66,.06],M.cream,thermometer);
 const mercury=box([0,.12,.036],[.055,.3,.018],mat('#ce7852',{emissive:'#8b392b',emissiveIntensity:.2}),thermometer);
 sphere([0,-.06,.04],.065,M.rust,thermometer);
 sign('ПАРНИК',[0,.3,.716],.93,.22,house,{size:49});
 const trace=torus([0,2.05,0],.46,.016,M.mint,house);trace.visible=game.trace;
 const puffs=[];for(let i=0;i<6;i++)puffs.push(sphere([0,0,0],.1,mat('#d5e6cd',{transparent:true,opacity:.3,depthWrite:false}),house));
 batchStatic(house,[lid,stalk,thermometer,trace,trophy,...puffs]);batchStatic(lid,[]);batchStatic(stalk,[fruit]);batchStatic(thermometer,[mercury]);
 let puffTime=0,lidAngle=0;
 function start(){Object.assign(game,{temp:4,turn:0,mode:'playing'});puffTime=0;changed();}
 function step(action){if(game.mode!=='playing')return;const deltas={heat:2,wait:0,vent:-2};if(!(action in deltas))return;
 game.temp+=weather[game.turn]+deltas[action];game.turn++;
 if(game.temp>6){game.mode='hot';puffTime=3;chime(110)}else if(game.temp<3){game.mode='cold';chime(165)}else if(game.turn===6){game.mode='won';game.wins=Math.min(99,game.wins+1);trophy.visible=true;persist();chime(660)}
 changed();}
 function card(){let description='Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.';
 if(game.mode==='playing')description=`Тепло ${game.temp} / норма 3–6. Такт ${game.turn+1} из 6. Следующее солнце: ${weather[game.turn]>0?'+':''}${weather[game.turn]}. Выбери один ход.`;
 if(game.mode==='hot')description=`Тепло ${game.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`;
 if(game.mode==='cold')description=`Тепло ${game.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`;
 if(game.mode==='won')description='Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником.';
 return {description,action:game.mode==='idle'?'вырастить вычисление':'начать заново'};}
 // Dream: its own room in the same scene. Existing yard never gets rebuilt.
 const dream=group([0,0,0],scene);dream.visible=false;
 box([0,-.7,0],[7,.5,5.8],M.concrete,dream);box([0,-.42,0],[6.8,.08,5.6],M.dark,dream);
 for(const x of [-3.2,3.2])for(const z of [-2.6,2.6])rod([x,-.4,z],[x,4,z],.055,M.copper,dream);
 for(const x of [-3.2,3.2]){rod([x,4,-2.6],[x,5.7,0],.055,M.copper,dream);rod([x,5.7,0],[x,4,2.6],.055,M.copper,dream)}
 rod([-3.2,5.7,0],[3.2,5.7,0],.055,M.copper,dream);
 box([-3.2,1.8,0],[.025,4.4,5.2],glass,dream);box([0,1.8,-2.6],[6.4,4.4,.025],glass,dream);
 sign('СОН / 01',[0,-.12,2.93],2.2,.38,dream,{size:52});
 const planet=group([0,1.6,0],dream);
 sphere([0,0,0],1.16,mat('#5f9c85'),planet);
 for(let i=0;i<10;i++){let a=i*2.4;const land=sphere([Math.sin(a)*.95,Math.cos(i*1.2)*.6,Math.cos(a)*.95],[.35,.2,.3],M.leaf,planet);land.rotation.y=a;}
 torus([0,0,0],1.32,.028,M.copper,planet,[.4,0,.2]);
 const orbit=group([0,1.6,0],dream),steps=[];
 for(let i=0;i<28;i++){const s=box([0,0,0],[.53,.11,.32],i%4?M.cream:M.concrete,orbit);steps.push(s)}
 const dreamBoat=paperBoat(dream,[1.7,-.05,1],1.65);
 const seed=sphere([0,.65,0],.13,M.cream,dreamBoat);
 const rays=group([0,.65,0],dreamBoat);rays.visible=false;for(let i=0;i<8;i++){let a=i/8*Math.PI*2;rod([Math.sin(a)*.27,Math.cos(a)*.27,0],[Math.sin(a)*.5,Math.cos(a)*.5,0],.026,M.light,rays)}
 const sleeper=head.clone(true);dream.add(sleeper);sleeper.scale.setScalar(.72);sleeper.position.set(-2,1,1.3);sleeper.rotation.z=-.25;
 const cup=group([-2,-.05,1.3],dream);cyl([0,0,0],.55,.3,M.cream,cup);torus([.58,0,0],.25,.04,M.copper,cup,[0,0,0]);
 const envelope=box([2.4,-.32,1.9],[.7,.04,.46],M.cream,dream);envelope.rotation.y=.2;
 let dreamStep=0,phase=0,isDream=false;
 batchStatic(dream,[planet,orbit,dreamBoat,sleeper]);batchStatic(planet,[]);
 function enter(){isDream=true;dreamStep=0;phase=0;dream.visible=true;root.visible=false;changed();}
 function exit(){isDream=false;dream.visible=false;root.visible=true;changed();}
 function breathe(){if(!isDream)return;if(dreamStep===3){dreamStep=0;phase=0;}else{dreamStep++;chime(220+dreamStep*110);if(dreamStep===3){game.trace=true;trace.visible=true;persist();}}changed();}
 function update(dt,time){
 lidAngle=THREE.MathUtils.damp(lidAngle,game.mode==='hot'?-1.1:game.mode==='playing'?-.08:0,4,dt);lid.rotation.x=lidAngle;
 stalk.scale.y=THREE.MathUtils.damp(stalk.scale.y,game.mode==='hot'?.2:game.mode==='cold'?.45:game.mode==='won'?1.25:.6+game.turn*.08,4,dt);
 fruit.visible=game.mode==='won';mercury.scale.y=.3*Math.max(.05,game.temp/8);mercury.position.y=-.015+game.temp/8*.15;
 trace.rotation.z=Math.sin(time*.3)*.15;puffTime=Math.max(0,puffTime-dt);puffs.forEach((p,i)=>{p.visible=puffTime>0;const t=(3-puffTime+i*.18)%1.5;p.position.set(Math.sin(i*2)*t*.35,1.5+t,Math.cos(i*2)*t*.35);p.scale.setScalar(.1*(.4+t));});
 if(!isDream)return;
 phase=THREE.MathUtils.damp(phase,dreamStep,2,dt);planet.rotation.y=time*.08;
 steps.forEach((s,i)=>{const a=i/28*Math.PI*2+time*.055*Math.min(1,phase);const spread=Math.min(1,phase);s.position.set(Math.sin(a)*(1.8+spread*.35),Math.cos(a)*(1.8-spread*1.5),Math.cos(a)*spread*1.5);s.rotation.set(0,-a*spread,Math.PI/2-a*(1-spread));});
 orbit.rotation.y=phase*.32;dreamBoat.position.y=-.05+phase*1.12;dreamBoat.position.x=1.7-phase*.32;dreamBoat.rotation.y=.2+phase*.35;
 seed.scale.setScalar(.13*(1+Math.max(0,phase-2)*2));rays.visible=phase>2.2;rays.rotation.z=time*.22;sleeper.position.y=1+Math.sin(time*.8)*.06;
 }
 return {house,start,step,card,update,enter,exit,breathe,inspect:()=>({...game,weather:[...weather],dream:isDream,dreamStep,phase,lidAngle,rootVisible:root.visible,dreamVisible:dream.visible,boatY:dreamBoat.position.y,rays:rays.visible})};
}
