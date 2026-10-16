// Fictional pneumatic garage. These are board-game rules, not vehicle physics.
function world(input){
 const o=input.state||{},n=(x,l,h,f)=>Number.isFinite(x)?Math.max(l,Math.min(h,Math.floor(x))):f;
 const targets=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}];
 const cleanFlight=f=>f&&typeof f==='object'?{seq:n(f.seq,1,999999,1),range:n(f.range,1,18,3),apex:Number.isFinite(f.apex)?Math.max(.5,Math.min(9,f.apex)):.5,end:Number.isFinite(f.end)?Math.max(0,Math.min(18,f.end)):0,outcome:['landed','short','far','bumped'].includes(f.outcome)?f.outcome:'short'}:null;
 const s={run:n(o.run,1,999999,1),stage:n(o.stage,0,2,0),power:n(o.power,1,6,1),angle:n(o.angle,1,3,3),air:n(o.air,0,6,6),landed:n(o.landed,0,3,0),attempts:n(o.attempts,0,99999,0),seq:n(o.seq,0,999999,0),phase:['ready','short','far','bumped','landed','complete'].includes(o.phase)?o.phase:'ready',flight:cleanFlight(o.flight)};
 if(s.landed===3)s.phase='complete';let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(input.tool==='launch'&&a.mode==='restart'){
   Object.assign(s,{run:Math.min(999999,s.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:'ready',flight:null});result={ok:true};
  }else if(input.tool==='launch'&&a.mode==='next'){
   if(s.phase!=='landed')result={ok:false,reason:'not_landed'};
   else{ s.stage=Math.min(2,s.stage+1);s.phase='ready';s.flight=null;result={ok:true,stage:s.stage+1}; }
  }else if(['landed','complete'].includes(s.phase))result={ok:false,reason:'already_landed'};
  else if(input.tool==='pump'){
   if(!Number.isInteger(a.power)||a.power<1||a.power>6||!Number.isInteger(a.angle)||a.angle<1||a.angle>3)result={ok:false,reason:'invalid_setting'};
   else{ s.power=a.power;s.angle=a.angle;s.air=6;s.phase='ready';s.flight=null;result={ok:true,air:6}; }
  }else if(input.tool==='launch'&&a.mode==='jump'){
   if(s.air<s.power)result={ok:false,reason:'empty',air:s.air};
   else{
    s.air-=s.power;s.attempts=Math.min(99999,s.attempts+1);s.seq=Math.min(999999,s.seq+1);
    const t=targets[s.stage],range=s.power*(4-s.angle),apex=s.power*s.angle/2,u=t.gap/2/range,clearance=u<=1?4*apex*u*(1-u):0;
    const outcome=u<=1&&clearance<t.barrier?'bumped':range<t.gap?'short':range>t.gap?'far':'landed';
    s.flight={seq:s.seq,range,apex,end:outcome==='bumped'?t.gap/2:range,outcome};s.phase=outcome;
    if(outcome==='landed'){s.landed=Math.max(s.landed,s.stage+1);if(s.landed===3)s.phase='complete';}
    result={ok:outcome==='landed',outcome,range,apex,clearance,air:s.air,landed:s.landed};
   }
  }else result={ok:false,reason:'unknown_action'};
 }
 const t=targets[s.stage],messages={ready:'Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.',short:'Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.',far:'Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.',bumped:'Задел пробку. Пружинный упор вернул гараж. Нужно выше.',landed:'Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.',complete:'Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет.'};
 return {state:s,public:{...s,level:s.stage+1,...t,range:s.power*(4-s.angle),apex:s.power*s.angle/2,message:messages[s.phase]},result,seconds:input.tool==='pump'?35:45,label:input.tool==='pump'?'накачивает гараж':'испытывает прыгающий гараж'};
}
