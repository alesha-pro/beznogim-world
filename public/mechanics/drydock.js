// A toy dry dock: neither physical hydrodynamics nor a real shipyard.
function drydockLegacy(input){
 const o=input.state||{},bound=(x,lo,hi,f)=>Number.isFinite(x)?Math.max(lo,Math.min(hi,Math.floor(x))):f;
 const s={depths:[0,0,0].map((_,i)=>bound(o.depths?.[i],0,2,0)),water:bound(o.water,0,2,0),launched:o.launched===true,floods:bound(o.floods,0,99999,0),run:bound(o.run,1,999999,1),message:typeof o.message==='string'?o.message.slice(0,160):'Корабль сел в песочницу. Выкопай три канала до отметки 2.'};
 let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(input.tool==='reset'){Object.assign(s,{depths:[0,0,0],water:0,launched:false,floods:0,run:Math.min(999999,s.run+1),message:'Снова песочница. Лопата на месте.'});result={ok:true};}
  else if(s.launched)result={ok:false,reason:'Корабль уже в выходном доке. Для повтора используй reset.'};
  else if(input.tool==='dig'){
   if(![0,1,2].includes(a.channel))result={ok:false,reason:'Нет такого канала.'};
   else if(s.water>0)result={ok:false,reason:'Сначала слей воду: копать можно только насухо.'};
   else if(s.depths[a.channel]===2)result={ok:false,reason:'Этот канал уже достаточно глубокий.'};
   else{s.depths[a.channel]++;s.message='Песок вынут. Отметка канала: '+s.depths[a.channel]+'/2.';result={ok:true,channel:a.channel,depth:s.depths[a.channel]};}
  }else if(input.tool==='pump'){
   if(a.direction==='drain'){s.water=0;s.message='Вода слита. Теперь можно копать.';result={ok:true,water:0};}
   else if(a.direction==='fill'){
    if(s.water===2){s.water=0;s.depths=s.depths.map(d=>Math.max(0,d-1));s.floods=Math.min(99999,s.floods+1);s.message='Перелив! Вода ушла, по одной отметке песка намыло обратно.';result={ok:true,flood:true};}
    else{s.water++;s.message='Вода: '+s.water+'/2. Третий качок перельёт борта.';result={ok:true,water:s.water};}
   }else result={ok:false,reason:'Выбери fill или drain.'};
  }else if(input.tool==='launch'){
   if(s.water!==2||s.depths.some(d=>d<2))result={ok:false,reason:'Для спуска нужны вода 2 и все три канала 2.'};
   else{s.launched=true;s.message='Поплыл. Грузовой корабль вышел из песочницы.';result={ok:true,launched:true};}
  }
  if(result?.ok===false)s.message=result.reason;
 }
 const ready=s.water===2&&s.depths.every(d=>d===2);
 return {state:s,public:{...s,ready,afloat:ready||s.launched},result,seconds:input.tool==='dig'?40:input.tool==='launch'?60:20,label:input.tool==='dig'?'выкапывает канал в песочнице':input.tool==='launch'?'спускает грузовой корабль':'качает воду в сухом доке'};
}

// A deliberately simple skipping-stone model, not a hydrodynamic simulation.
// State lives alongside the sand port, but neither game's reset touches the other.
function shoreRun(strength,angle,id,started){
 const skips=Math.max(1,Math.round(strength*(angle===2?1.3:angle===1?.85:.45)));
 const distance=Math.round((1.4+strength*1.05)*(angle===2?1:angle===1?.85:.65)*10)/10;
 const contacts=[];for(let i=0;i<skips;i++)contacts.push({t:1+i*.85,x:i===skips-1?distance:Math.min(distance,distance*(1-Math.pow(.65,i+1))/(1-Math.pow(.65,skips)))});
 return {id,strength,angle,started,ends:started+1+skips*.85+2.5,skips,distance,contacts};
}
function shoreState(raw){
 const o=raw&&typeof raw==='object'?raw:{},seq=Number.isSafeInteger(o.sequence)&&o.sequence>=0?Math.min(o.sequence,999999):0;
 const clean=r=>r&&Number.isInteger(r.id)&&r.id>0&&r.id<=seq&&Number.isInteger(r.strength)&&r.strength>=1&&r.strength<=5&&[1,2,3].includes(r.angle)&&Number.isFinite(r.started)&&r.started>=0?shoreRun(r.strength,r.angle,r.id,r.started):null;
 const history=(Array.isArray(o.history)?o.history:[]).map(clean).filter(Boolean).slice(-6).filter((r,i,a)=>a.findIndex(x=>x.id===r.id)===i);
 const active=clean(o.active),last=clean(o.last);
 return {sequence:seq,active,history,last:last||history[history.length-1]||null};
}
function world(input){
 const now=Number.isFinite(input.now)?Math.max(0,input.now):0,shore=shoreState(input.state?.shore),args=input.args||{};
 if(shore.active&&now>=shore.active.ends){shore.last=shore.active;if(!shore.history.some(r=>r.id===shore.active.id))shore.history.push(shore.active);shore.history=shore.history.slice(-6);shore.active=null;}
 let out;
 const p=input.world?.position,pos=Array.isArray(p)?p:[p?.x,p?.y,p?.z];
 if(input.mode==='action'&&input.tool==='launch'&&args.shore){
  out=drydockLegacy({...input,mode:'tick'});
  let result={ok:true,kind:'shore_inspect',shore};
  if(args.shore==='throw'){
   if(!Number.isFinite(pos[0])||!Number.isFinite(pos[2])||Math.hypot(pos[0]-7.8,pos[2]-4.5)>2.4)result={ok:false,kind:'shore',reason:'Подлети к камням у причала [7.8,.6,4.5].'};
   else if(!Number.isInteger(args.strength)||args.strength<1||args.strength>5||![1,2,3].includes(args.angle))result={ok:false,kind:'shore',reason:'Сила 1..5, угол 1 низко / 2 полого / 3 высоко.'};
   else if(shore.active)result={ok:false,kind:'shore',reason:'Камень ещё летит. Дождись кругов.',ends:shore.active.ends};
   else if(shore.last&&now<shore.last.ends)result={ok:false,kind:'shore',reason:'Часы ещё не догнали прошлый бросок.'};
   else if(shore.sequence>=999999)result={ok:false,kind:'shore',reason:'Альбом заполнен.'};
   else{shore.sequence++;shore.active=shoreRun(args.strength,args.angle,shore.sequence,now);result={ok:true,kind:'shore_throw',...shore.active};}
  }else if(args.shore!=='inspect')result={ok:false,kind:'shore',reason:'Выбери throw или inspect.'};
  out.result=result;out.seconds=result.ok&&args.shore==='throw'?15:5;out.label=args.shore==='throw'?'пускает камешек по воде':'сравнивает броски у причала';
 }else if(input.mode==='action'&&input.tool==='launch'&&p&&(!Number.isFinite(pos[0])||!Number.isFinite(pos[2])||Math.hypot(pos[0]+24,pos[2])>2.4)){
  out=drydockLegacy({...input,mode:'tick'});out.result={ok:false,reason:'Подлети к песочному порту [-24,.6,0].'};
 }else out=drydockLegacy(input);
 out.state.shore=shore;out.public.shore={...shore,phase:shore.active?'flying':shore.last?'settled':'quiet'};
 return out;
}
