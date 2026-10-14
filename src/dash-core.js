// Generated from public/mechanics/dash.js by scripts/sync-mechanics.mjs.
// A punctuation bridge, not structural engineering. Durable results, no inventory rewards.
function world(input){
 const o=input.state||{},num=(x,l,h,f)=>Number.isFinite(x)?Math.max(l,Math.min(h,Math.floor(x))):f;
 const s={run:num(o.run,1,999999,1),round:num(o.round,0,2,0),span:num(o.span,1,8,1),shift:num(o.shift,-2,2,0),phase:['ready','short','bent','shifted','delivered','complete'].includes(o.phase)?o.phase:'ready',delivered:num(o.delivered,0,3,0),attempts:num(o.attempts,0,99999,0),message:typeof o.message==='string'?o.message.slice(0,180):'Подгони тире под пролёт. Улитка ждёт на левом берегу.'};
 // Normalize old/corrupt completions without erasing a valid delivered shelf.
 if(s.delivered===3)s.phase='complete';
 const gap=[3,5,7][s.round],center=[0,1,-1][s.round];let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(input.tool==='reset'){Object.assign(s,{run:Math.min(999999,s.run+1),round:0,span:1,shift:0,phase:'ready',delivered:0,attempts:0,message:'Новая почта. Три знака ждут переправы.'});result={ok:true};}
  else if(input.tool==='next'){
   if(s.phase!=='delivered')result={ok:false,reason:'Сначала доставь знак. После третьего можно начать заново.'};
   else{s.round=Math.min(2,s.round+1);s.span=1;s.shift=0;s.phase='ready';s.message='Берега разошлись. Следующий знак ждёт на левом берегу.';result={ok:true,round:s.round};}
  }else if(['delivered','complete'].includes(s.phase))result={ok:false,reason:'Знак уже доставлен. Используй next или reset.'};
  else if(input.tool==='tune'){
   if(!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift< -2||a.shift>2)result={ok:false,reason:'Длина 1..8, сдвиг -2..2, целые отметки.'};
   else{s.span=a.span;s.shift=a.shift;s.phase='ready';s.message='Тире выправлено. Проверь длину и сдвиг перед отправкой.';result={ok:true,span:s.span,shift:s.shift};}
  }else if(input.tool==='cross'){
   s.attempts=Math.min(99999,s.attempts+1);
   if(s.span>gap){s.phase='bent';s.message='Слишком длинное тире согнулось между упорами. Улитка осталась дома.';result={ok:false,reason:'bent'};}
   else if(s.span<gap){s.phase='short';s.message='Не дотянулось до берега. Улитка осталась дома.';result={ok:false,reason:'short'};}
   else if(s.shift!==center){s.phase='shifted';s.message='Один конец не на упоре. Передвинь тире целиком.';result={ok:false,reason:'shifted'};}
   else{s.delivered=Math.max(s.delivered,s.round+1);s.phase=s.delivered===3?'complete':'delivered';s.message=s.phase==='complete'?'Три знака на полке. Почта добралась.':'Знак доставлен. Можно раздвинуть берега для следующего.';result={ok:true,delivered:s.delivered};}
  }else result={ok:false,reason:'Неизвестное действие.'};
 }
 return {state:s,public:{...s,gap:[3,5,7][s.round],center:[0,1,-1][s.round],cargo:['.','?','!'][s.round]},result,seconds:input.tool==='cross'?45:20,label:input.tool==='cross'?'провожает почтовую улитку':'подгоняет мост из тире'};
}

export default world;
