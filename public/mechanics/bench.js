// A fictional mechanical monitor. No operating-system commands or real files.
function world(input){
 const old=input.state||{};
 const s={round:0,core:2,belt:1,phase:'ready',attempts:0,repairs:0,run:1,...old};
 const bounded=(v,min,max,fallback)=>Number.isFinite(v)?Math.max(min,Math.min(max,Math.floor(v))):fallback;
 s.round=bounded(s.round,0,2,0);s.core=bounded(s.core,2,4,2);s.belt=bounded(s.belt,1,3,1);s.repairs=bounded(s.repairs,0,3,0);s.attempts=bounded(s.attempts,0,99999,0);s.run=bounded(s.run,1,999999,1);
 if(!['ready','ejected','repaired','complete'].includes(s.phase))s.phase='ready';
 const targets=[6,8,9];
 let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(input.tool==='fit'){
   if(s.phase!=='ready')result={ok:false,reason:s.phase==='ejected'?'Достань ядро из ведра.':'Перейди к следующему экрану.'};
   else if(a.part==='core'&&[2,3,4].includes(a.value)||a.part==='belt'&&[1,2,3].includes(a.value)){s[a.part]=a.value;result={ok:true,part:a.part,value:a.value};}
   else result={ok:false,reason:'Такой детали нет.'};
  }else if(input.tool==='crank'){
   if(s.phase!=='ready')result={ok:false,reason:s.phase==='ejected'?'Ядро в ведре.':'Экран уже работает.'};
   else{s.attempts=Math.min(99999,s.attempts+1);s.phase=s.core*s.belt===targets[s.round]?'repaired':'ejected';if(s.phase==='repaired')s.repairs=Math.min(3,s.repairs+1);result={ok:true,repaired:s.phase==='repaired',speed:s.core*s.belt,target:targets[s.round]};}
  }else if(input.tool==='salvage'){
   if(s.phase==='ejected'){s.phase='ready';result={ok:true,core:s.core};}else result={ok:false,reason:'Ведро пустое.'};
  }else if(input.tool==='next'){
   if(s.phase==='repaired'&&s.round<2){s.round++;s.phase='ready';s.belt=1;result={ok:true,round:s.round};}
   else if(s.phase==='repaired'&&s.round===2){s.phase='complete';result={ok:true,complete:true};}
   else result={ok:false,reason:'Сначала восстанови экран.'};
  }else if(input.tool==='restart'){
   Object.assign(s,{round:0,core:2,belt:1,phase:'ready',attempts:0,repairs:0,run:Math.min(999999,s.run+1)});result={ok:true};
  }
 }
 const p={...s,target:targets[s.round],speed:s.core*s.belt,picture:s.phase==='repaired'||s.phase==='complete'?s.round+1:0,bucket:s.phase==='ejected',completed:s.phase==='complete'};
 return {state:s,public:p,result,seconds:input.tool==='crank'?60:20,label:input.tool==='salvage'?'достаёт ядро из ведра':input.tool==='crank'?'крутит механический монитор':'собирает механический монитор'};
}
