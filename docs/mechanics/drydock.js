// A toy dry dock: neither physical hydrodynamics nor a real shipyard.
function world(input){
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
