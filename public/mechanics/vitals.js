// Calm, durable needs. The controller owns sleep; this module only consumes its timestamps.
function world(input) {
  const old=input.state||{};
  const s=JSON.parse(JSON.stringify(old));
  const clamp=(v)=>Math.max(0,Math.min(100,v));
  if(!s.vitals||typeof s.vitals!=='object')s.vitals={hunger:72,thirst:72,energy:72,mood:72};
  for(const k of ['hunger','thirst','energy','mood'])s.vitals[k]=Number.isFinite(s.vitals[k])?clamp(s.vitals[k]):72;
  if(!s.food||typeof s.food!=='object')s.food={harvestConsumed:0,cheeseConsumed:[]};
  s.food.teaConsumed=Number.isInteger(s.food.teaConsumed)&&s.food.teaConsumed>=0?s.food.teaConsumed:0;
  s.food.lastMealSequence=Number.isInteger(s.food.lastMealSequence)&&s.food.lastMealSequence>=0?s.food.lastMealSequence:0;
  s.food.cheeseEaten=Number.isInteger(s.food.cheeseEaten)&&s.food.cheeseEaten>=0?s.food.cheeseEaten:0;
  s.food.harvestConsumed=Number.isInteger(s.food.harvestConsumed)&&s.food.harvestConsumed>=0?s.food.harvestConsumed:0;
  if(!Array.isArray(s.food.cheeseConsumed))s.food.cheeseConsumed=[];
  s.food.cheeseConsumed=[...new Set(s.food.cheeseConsumed.filter(Number.isInteger))].slice(-24);
  if(!s.cooldowns||typeof s.cooldowns!=='object')s.cooldowns={};
  if(!Number.isFinite(s.updated))s.updated=input.now;
  if(!Number.isFinite(s.lastSleepEnd))s.lastSleepEnd=0;

  const knownSleeps=[];
  const a=input.world?.action;
  if(a?.kind==='sleep'&&Number.isFinite(a.started)&&Number.isFinite(a.ends))knownSleeps.push([a.started,a.ends]);
  const last=input.world?.last_sleep;
  if(last&&Number.isFinite(last.started)&&Number.isFinite(last.ended))knownSleeps.push([last.started,last.ended]);
  const now=Math.max(s.updated,input.now);
  const from=Math.max(s.updated,now-43200); // absence is never a harsh full-week penalty
  const intervals=knownSleeps.map(([start,end])=>[Math.max(start,from),Math.min(end,now)]).filter(([start,end])=>end>start).sort((x,y)=>x[0]-y[0]);
  let asleep=0,until=-Infinity;
  for(const [start,end] of intervals){const mergedStart=Math.max(start,until);if(end>mergedStart){asleep+=end-mergedStart;until=Math.max(until,end);}}
  const elapsed=Math.max(0,now-from),awake=Math.max(0,elapsed-asleep),hours=(n)=>n/3600;
  s.vitals.hunger=clamp(s.vitals.hunger-hours(awake)*5-hours(asleep)*2);
  s.vitals.thirst=clamp(s.vitals.thirst-hours(awake)*8-hours(asleep)*3);
  s.vitals.energy=clamp(s.vitals.energy-hours(awake)*3+hours(asleep)*10);
  const comfort=(s.vitals.hunger+s.vitals.thirst+s.vitals.energy)/3;
  s.vitals.mood=clamp(s.vitals.mood+(comfort-s.vitals.mood)*Math.min(.35,hours(elapsed)*.12));
  s.updated=now;
  for(const [,end] of knownSleeps)if(end<=now)s.lastSleepEnd=Math.max(s.lastSleepEnd,end);

  // The broker already flattens each module's public projection here.
  // Consume every receipt, including two meals between ticks; sequence is durable.
  const cellar=input.world?.mechanics?.cellar;
  const meals=Array.isArray(cellar?.mealReceipts)?cellar.mealReceipts:[];
  for(const meal of [...meals].sort((a,b)=>a.sequence-b.sequence)){
    if(!Number.isInteger(meal.sequence)||meal.sequence<=s.food.lastMealSequence||!Number.isInteger(meal.id))continue;
    s.food.lastMealSequence=meal.sequence;
    s.food.cheeseEaten++;
    s.food.cheeseConsumed.push(meal.id);s.food.cheeseConsumed=s.food.cheeseConsumed.slice(-24);
    s.vitals.hunger=clamp(s.vitals.hunger+22);s.vitals.mood=clamp(s.vitals.mood+5);
  }

  // One tray per visit. Durable deadlines, no visitor/API stock minting.
  if(!s.cafe||typeof s.cafe!=='object')s.cafe={sequence:0,nextOrder:0,tray:null,served:0};
  const cf=s.cafe;
  for(const k of ['sequence','served'])cf[k]=Number.isSafeInteger(cf[k])&&cf[k]>=0?cf[k]:0;
  cf.nextOrder=Number.isFinite(cf.nextOrder)&&cf.nextOrder>=0?cf.nextOrder:0;
  if(cf.tray && (!Number.isInteger(cf.tray.id)||!['ordered','ready','expires'].every(k=>Number.isFinite(cf.tray[k]))||cf.tray.ready<cf.tray.ordered||cf.tray.expires<cf.tray.ready))cf.tray=null;
  if(cf.tray){cf.tray.eaten=cf.tray.eaten===true;cf.tray.drunk=cf.tray.drunk===true;}

  // One atomic ledger for production and cooking: no cross-module receipt race.
  // Two existing pantry quotes become a finite starter reserve, once only.
  if(!cf.supply||typeof cf.supply!=='object')cf.supply={raw:0,kitchen:2,starter:2,sequence:0,produced:0,delivered:0,used:0,batch:null};
  const sp=cf.supply;
  for(const k of ['raw','kitchen','starter','sequence','produced','delivered','used'])sp[k]=Number.isSafeInteger(sp[k])&&sp[k]>=0?sp[k]:0;
  sp.raw=Math.min(12,sp.raw);sp.kitchen=Math.min(12,sp.kitchen);
  if(sp.batch&&(!Number.isSafeInteger(sp.batch.id)||!Number.isFinite(sp.batch.started)||!Number.isFinite(sp.batch.ready)||sp.batch.ready<sp.batch.started))sp.batch=null;
  const farmPublic=()=>({...sp,batch:sp.batch?{...sp.batch,phase:now<sp.batch.ready?'growing':'ripe'}:null,capacity:12,yield:6,growSeconds:180});
  if(cf.tray && now>=cf.tray.expires)cf.tray=null;
  const cafePublic=()=>({supply:farmPublic(),sequence:cf.sequence,nextOrder:cf.nextOrder,served:cf.served,
    tray:cf.tray?{...cf.tray,phase:now<cf.tray.ready?'cooking':!cf.tray.eaten||!cf.tray.drunk?'ready':'finished'}:null});
  let result=null,label='прислушивается к себе',seconds=10;
  if(input.mode==='action'){
    const garden=Math.max(0,Math.floor(Number(input.world?.objects?.garden?.harvest)||0));
    if(input.tool==='rest_quietly' && input.args?.farm){
      const p=input.world?.position,pos=Array.isArray(p)?p:[p?.x,p?.y,p?.z];
      const job=input.args.farm,site=job==='deliver'?[48,24]:[55,24];
      const near=Number.isFinite(pos[0])&&Number.isFinite(pos[2])&&Math.hypot(pos[0]-site[0],pos[2]-site[1])<=2.4;
      label='осматривает кавычечную мастерскую';seconds=10;
      if(input.args.cafe)result={ok:false,reason:'one_job_at_a_time'};
      else if(job==='inspect')result={ok:true,kind:'quote_supply',supply:farmPublic(),farm:[55,.6,24],cafe:[48,.6,24]};
      else if(!near)result={ok:false,reason:job==='deliver'?'visit_cafe':'visit_quote_farm',position:[site[0],.6,site[1]]};
      else if(job==='start'){
        if(sp.batch)result={ok:false,reason:'batch_exists',ready_at:sp.batch.ready};
        else if(sp.raw>6)result={ok:false,reason:'raw_store_full'};
        else{sp.sequence++;sp.batch={id:sp.sequence,started:now,ready:now+180};result={ok:true,kind:'quote_start',ready_at:sp.batch.ready};seconds=25;label='заводит шесть кавычечных ростков';}
      }else if(job==='harvest'){
        if(!sp.batch)result={ok:false,reason:'no_batch'};
        else if(now<sp.batch.ready)result={ok:false,reason:'growing',ready_at:sp.batch.ready};
        else if(sp.raw+6>12)result={ok:false,reason:'raw_store_full'};
        else{const id=sp.batch.id;sp.raw+=6;sp.produced+=6;sp.batch=null;result={ok:true,kind:'quote_harvest',id,amount:6,raw:sp.raw};seconds=30;label='собирает шесть сырых кавычек';}
      }else if(job==='deliver'){
        const amount=input.args.amount===undefined?Math.min(sp.raw,12-sp.kitchen):input.args.amount;
        if(!Number.isInteger(amount)||amount<1||amount>12)result={ok:false,reason:sp.raw===0?'no_raw':'invalid_amount'};
        else if(amount>sp.raw)result={ok:false,reason:'not_enough_raw'};
        else if(sp.kitchen+amount>12)result={ok:false,reason:'kitchen_full'};
        else{sp.raw-=amount;sp.kitchen+=amount;sp.delivered+=amount;result={ok:true,kind:'quote_delivery',amount,raw:sp.raw,kitchen:sp.kitchen};seconds=45;label='несёт сырые кавычки на кухню';}
      }else result={ok:false,reason:'unknown_farm_job'};
    }else if(input.tool==='eat_harvest'){
      if(garden<=s.food.harvestConsumed)result={ok:false,kind:'harvest',reason:'no_harvest'};
      else {s.food.harvestConsumed++;s.vitals.hunger=clamp(s.vitals.hunger+18);s.vitals.mood=clamp(s.vitals.mood+3);result={ok:true,kind:'harvest',remaining:garden-s.food.harvestConsumed};label='ест овощ с грядки';seconds=30;}
    }else if(input.tool==='drink_tea'){
      const cups=Math.max(0,Math.floor(Number(input.world?.objects?.tea?.cups)||0));
      if(cups<=s.food.teaConsumed)result={ok:false,kind:'tea',reason:'no_tea'};
      else {s.food.teaConsumed++;s.vitals.thirst=clamp(s.vitals.thirst+22);s.vitals.mood=clamp(s.vitals.mood+4);result={ok:true,kind:'tea',remaining:cups-s.food.teaConsumed};label='пьёт заваренный чай';seconds=45;}
    }else if(input.tool==='drink_water'){
      const ready=Number(s.cooldowns.water)||0;
      if(input.now<ready)result={ok:false,reason:'settling',ready_at:ready};
      else {s.cooldowns.water=input.now+900;s.vitals.thirst=clamp(s.vitals.thirst+30);s.vitals.mood=clamp(s.vitals.mood+2);result={ok:true,ready_at:s.cooldowns.water};label='набирает воды и пьёт';seconds=20;}
    }else if(input.tool==='rest_quietly' && input.args?.cafe){
      const p=input.world?.position;
      const pos=Array.isArray(p)?p:[p?.x,p?.y,p?.z];
      const near=Number.isFinite(pos[0])&&Number.isFinite(pos[2])&&Math.hypot(pos[0]-48,pos[2]-24)<=2.4;
      const course=input.args.cafe;
      seconds=10;label='заглядывает в миникафе';
      if(!near)result={ok:false,reason:'visit_cafe',position:[48,.6,24]};
      else if(course==='order'){
        if(cf.tray && (!cf.tray.eaten||!cf.tray.drunk))result={ok:false,reason:'tray_exists',ready_at:cf.tray.ready};
        else if(now<cf.nextOrder)result={ok:false,reason:'kitchen_break',ready_at:cf.nextOrder};
        else if(sp.kitchen<1)result={ok:false,reason:'no_kitchen_quotes'};
        else {sp.kitchen--;sp.used++;cf.sequence++;cf.nextOrder=now+7200;cf.tray={id:cf.sequence,ordered:now,ready:now+90,expires:now+14400,eaten:false,drunk:false};result={ok:true,kind:'cafe_order',ready_at:cf.tray.ready};seconds=15;label='заказывает кавычку в кляре и чай';}
      }else if(!cf.tray)result={ok:false,reason:'no_tray'};
      else if(now<cf.tray.ready)result={ok:false,reason:'cooking',ready_at:cf.tray.ready};
      else if(course==='eat'){
        if(cf.tray.eaten)result={ok:false,reason:'already_eaten'};
        else{cf.tray.eaten=true;cf.served++;s.vitals.hunger=clamp(s.vitals.hunger+26);s.vitals.mood=clamp(s.vitals.mood+4);result={ok:true,kind:'cafe_meal',id:cf.tray.id};seconds=90;label='ест кавычку в золотистом кляре';}
      }else if(course==='tea'){
        if(cf.tray.drunk)result={ok:false,reason:'already_drunk'};
        else{cf.tray.drunk=true;s.vitals.thirst=clamp(s.vitals.thirst+24);s.vitals.mood=clamp(s.vitals.mood+4);result={ok:true,kind:'cafe_tea',id:cf.tray.id};seconds=60;label='пьёт чай в миникафе';}
      }else result={ok:false,reason:'unknown_course'};
    }else if(input.tool==='rest_quietly'){
      const p=input.world?.position, pos=Array.isArray(p)?p:[p?.x,p?.y,p?.z];
      if(!Number.isFinite(pos[0])||!Number.isFinite(pos[2])||Math.hypot(pos[0]+2.65,pos[2]-.65)>2.4)
        result={ok:false,reason:'visit_tea'};
      else {
      const ready=Number(s.cooldowns.rest)||0;
      if(input.now<ready)result={ok:false,reason:'settling',ready_at:ready};
      else {s.cooldowns.rest=input.now+5400;s.vitals.energy=clamp(s.vitals.energy+8);s.vitals.mood=clamp(s.vitals.mood+6);result={ok:true,ready_at:s.cooldowns.rest};label='сидит в тишине';seconds=180;}
      }
    }
  }
  if(input.mode==='action'&&input.tool==='rest_quietly'&&!input.args?.cafe&&!input.args?.farm&&result)result.kind='rest';
  const v=s.vitals;
  return {state:s,public:{...v,cafe:cafePublic(),food:{harvestAvailable:Math.max(0,Math.floor(Number(input.world?.objects?.garden?.harvest)||0)-s.food.harvestConsumed),teaAvailable:Math.max(0,Math.floor(Number(input.world?.objects?.tea?.cups)||0)-s.food.teaConsumed),cheeseConsumed:s.food.cheeseEaten},sleeping:a?.kind==='sleep'&&a.started<=input.now&&a.ends>input.now,lastSleepEnd:s.lastSleepEnd},result,seconds,label};
}
