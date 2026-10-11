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

  let result=null,label='прислушивается к себе',seconds=10;
  if(input.mode==='action'){
    const garden=Math.max(0,Math.floor(Number(input.world?.objects?.garden?.harvest)||0));
    if(input.tool==='eat_harvest'){
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
    }else if(input.tool==='rest_quietly'){
      const ready=Number(s.cooldowns.rest)||0;
      if(input.now<ready)result={ok:false,reason:'settling',ready_at:ready};
      else {s.cooldowns.rest=input.now+5400;s.vitals.energy=clamp(s.vitals.energy+8);s.vitals.mood=clamp(s.vitals.mood+6);result={ok:true,ready_at:s.cooldowns.rest};label='сидит в тишине';seconds=180;}
    }
  }
  const v=s.vitals;
  return {state:s,public:{...v,food:{harvestAvailable:Math.max(0,Math.floor(Number(input.world?.objects?.garden?.harvest)||0)-s.food.harvestConsumed),teaAvailable:Math.max(0,Math.floor(Number(input.world?.objects?.tea?.cups)||0)-s.food.teaConsumed),cheeseConsumed:s.food.cheeseEaten},sleeping:a?.kind==='sleep'&&a.started<=input.now&&a.ends>input.now,lastSleepEnd:s.lastSleepEnd},result,seconds,label};
}
