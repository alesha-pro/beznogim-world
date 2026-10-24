// A fictional mechanical monitor. No operating-system commands or real files.
function world(input){
 const old=input.state||{};
 const s={round:0,core:2,belt:1,phase:'ready',attempts:0,repairs:0,run:1,...old};
 const bounded=(v,min,max,fallback)=>Number.isFinite(v)?Math.max(min,Math.min(max,Math.floor(v))):fallback;
 s.round=bounded(s.round,0,2,0);s.core=bounded(s.core,2,4,2);s.belt=bounded(s.belt,1,3,1);s.repairs=bounded(s.repairs,0,3,0);s.attempts=bounded(s.attempts,0,99999,0);s.run=bounded(s.run,1,999999,1);
 if(!['ready','ejected','repaired','complete'].includes(s.phase))s.phase='ready';
 const now=Number.isFinite(input.now)?input.now:0;
 // Paired accelerated fictional growth model; never claims a real soil measurement.
 const initialTrial=()=>({phase:'empty',seed:1,water:2,started:0,sequence:0,records:[]});
 let trial=s.trial&&typeof s.trial==='object'?s.trial:null;
 if(trial){
  trial={...initialTrial(),...trial};
  trial.seed=bounded(trial.seed,1,3,1);trial.water=bounded(trial.water,1,3,2);
  trial.started=Number.isFinite(trial.started)?Math.max(0,trial.started):0;
  trial.sequence=bounded(trial.sequence,0,999999,0);
  trial.records=Array.isArray(trial.records)?trial.records.filter(r=>r&&typeof r==='object'&&Number.isFinite(r.id)&&[1,2,3].includes(r.seed)&&Number.isFinite(r.soil)&&Number.isFinite(r.mica)).slice(-6).map(r=>({id:bounded(r.id,0,999999,0),seed:r.seed,water:bounded(r.water,1,3,2),soil:Math.max(0,Math.min(12,r.soil)),mica:Math.max(0,Math.min(12,r.mica)),finished:Number.isFinite(r.finished)?Math.max(0,r.finished):0})):[];
  trial.sequence=Math.max(trial.sequence,...trial.records.map(r=>r.id));
  if(!['empty','planted','growing','ready','collected'].includes(trial.phase))trial.phase='empty';
  if(trial.phase==='growing'&&now>=trial.started+360)trial.phase='ready';
  s.trial=trial;
 }
 const projectTrial=()=>{
  const t=trial||initialTrial(),progress=['ready','collected'].includes(t.phase)?1:t.phase==='growing'?Math.max(0,Math.min(1,(now-t.started)/360)):0;
  const factors=[[1,.7],[.65,1.1],[.85,.85]][t.seed-1];
  const trays=[8,15].map((loss,i)=>{
   const start=t.water*40,minutes=progress*6;
   // Integral of retained water (clamped at zero), not a counter of button presses.
   const wet=Math.min(minutes,start/loss),area=start*wet-loss*wet*wet/2;
   const growth=Math.round(Math.min(12,area/60*factors[i])*10)/10;
   return {substrate:i?'mica':'soil',water:Math.round(Math.max(0,start-loss*minutes)),growth};
  });
  return {...t,progress,trays,remaining:t.phase==='growing'?Math.max(0,Math.min(360,Math.ceil(t.started+360-now))):0,model:'accelerated_fictional_pair'};
 };
 const targets=[6,8,9];
 let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(input.tool==='fit'&&a.part==='seed'||a.trial===true&&['crank','salvage'].includes(input.tool)){
   if(!trial){trial=initialTrial();s.trial=trial;}
   if(input.tool==='fit'){
    if(![1,2,3].includes(a.value))result={ok:false,reason:'Семена: 1 кресс, 2 камнецвет, 3 бобы.'};
    else if(['growing','ready'].includes(trial.phase))result={ok:false,reason:'Сначала дождись и сними текущий опыт.'};
    else{trial.seed=a.value;trial.phase='planted';result={ok:true,trial:true,seed:a.value};}
   }else if(input.tool==='crank'){
    if(trial.phase!=='planted')result={ok:false,reason:'Посади пару лотков: fit part=seed value=1/2/3. Готовый опыт сначала сними.'};
    else if(a.water!==undefined&&![1,2,3].includes(a.water))result={ok:false,reason:'Равный полив: 1, 2 или 3 дозы на лоток.'};
    else{trial.water=a.water||2;trial.started=now;trial.phase='growing';result={ok:true,trial:true,ready_at:now+360,water_each:trial.water*40};}
   }else if(trial.phase!=='ready')result={ok:false,reason:'Снимать можно только готовый опыт через шесть минут.'};
   else{
    const view=projectTrial();trial.sequence=Math.min(999999,trial.sequence+1);
    const record={id:trial.sequence,seed:trial.seed,water:trial.water,soil:view.trays[0].growth,mica:view.trays[1].growth,finished:trial.started+360};
    trial.records.push(record);trial.records=trial.records.slice(-6);trial.phase='collected';
    result={ok:true,trial:true,comparison:record,meaning:'Игровой опыт: равный полив, разные субстраты; рост в условных единицах, не еда.'};
   }
  }else if(input.tool==='fit'){
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
 const p={...s,trial:projectTrial(),target:targets[s.round],speed:s.core*s.belt,picture:s.phase==='repaired'||s.phase==='complete'?s.round+1:0,bucket:s.phase==='ejected',completed:s.phase==='complete'};
 return {state:s,public:p,result,seconds:input.tool==='crank'?60:20,label:input.args?.trial===true||input.args?.part==='seed'?'занимается парным опытом':input.tool==='salvage'?'достаёт ядро из ведра':input.tool==='crank'?'крутит механический монитор':'собирает механический монитор'};
}
