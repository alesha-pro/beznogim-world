// Generated from public/mechanics/bench.js by scripts/sync-mechanics.mjs.
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
  if(trial.cover!==undefined&&!['open','mica','both'].includes(trial.cover))trial.cover='open';
  trial.seed=bounded(trial.seed,1,3,1);trial.water=bounded(trial.water,1,3,2);
  trial.started=Number.isFinite(trial.started)?Math.max(0,trial.started):0;
  trial.sequence=bounded(trial.sequence,0,999999,0);
  trial.records=Array.isArray(trial.records)?trial.records.filter(r=>r&&typeof r==='object'&&Number.isFinite(r.id)&&[1,2,3].includes(r.seed)&&Number.isFinite(r.soil)&&Number.isFinite(r.mica)).slice(-6).map(r=>({id:bounded(r.id,0,999999,0),seed:r.seed,water:bounded(r.water,1,3,2),soil:Math.max(0,Math.min(12,r.soil)),mica:Math.max(0,Math.min(12,r.mica)),finished:Number.isFinite(r.finished)?Math.max(0,r.finished):0,...(r.cover===undefined?{}:{cover:['open','mica','both'].includes(r.cover)?r.cover:'open'})})):[];
  trial.sequence=Math.max(trial.sequence,...trial.records.map(r=>r.id));
  if(!['empty','planted','growing','ready','collected'].includes(trial.phase))trial.phase='empty';
  if(trial.phase==='growing'&&now>=trial.started+360)trial.phase='ready';
  s.trial=trial;
 }
 const projectTrial=()=>{
  const t=trial||initialTrial(),progress=['ready','collected'].includes(t.phase)?1:t.phase==='growing'?Math.max(0,Math.min(1,(now-t.started)/360)):0;
  const factors=[[1,.7],[.65,1.1],[.85,.85]][t.seed-1];
  const trays=[8,15].map((loss,i)=>{
   const covered=t.cover==='both'||t.cover==='mica'&&i===1;
   loss*=covered?.5:1;
   const start=t.water*40,minutes=progress*6;
   // Integral of retained water (clamped at zero), not a counter of button presses.
   const wet=Math.min(minutes,start/loss),area=start*wet-loss*wet*wet/2;
   const growth=Math.round(Math.min(12,area/60*factors[i]*(covered?.8:1))*10)/10;
   return {substrate:i?'mica':'soil',water:Math.round(Math.max(0,start-loss*minutes)),growth};
  });
  return {...t,progress,trays,remaining:t.phase==='growing'?Math.max(0,Math.min(360,Math.ceil(t.started+360-now))):0,model:'accelerated_fictional_pair'};
 };
 // Bounded public instrument archive; no private notes or generated measurements.
 s.observer=observerCollect(s.observer,input.world,now);
 let journal=observerProject(s.observer);
 const targets=[6,8,9];
 let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(a.cover!==undefined&&(input.tool!=='crank'||a.trial!==true)){
   result={ok:false,reason:'cover_requires_trial_crank'};
  }else if(a.capture!==undefined&&(input.tool!=='salvage'||a.journal!==true)){
   result={ok:false,reason:'capture_requires_journal'};
  }else if(input.tool==='salvage'&&a.journal===true){
   result=a.trial===true?{ok:false,reason:'one_job_at_a_time'}:a.capture!==undefined?observerCapture(s.observer,a.capture,a.metric):observerRead(journal,a.metric);
   journal=observerProject(s.observer);
  }else if(input.tool==='fit'&&a.part==='seed'||a.trial===true&&['crank','salvage'].includes(input.tool)){
   if(!trial){trial=initialTrial();s.trial=trial;}
   if(input.tool==='fit'){
    if(![1,2,3].includes(a.value))result={ok:false,reason:'Семена: 1 кресс, 2 камнецвет, 3 бобы.'};
    else if(['growing','ready'].includes(trial.phase))result={ok:false,reason:'Сначала дождись и сними текущий опыт.'};
    else{trial.seed=a.value;trial.phase='planted';result={ok:true,trial:true,seed:a.value};}
   }else if(input.tool==='crank'){
    if(trial.phase!=='planted')result={ok:false,reason:'Посади пару лотков: fit part=seed value=1/2/3. Готовый опыт сначала сними.'};
    else if(a.water!==undefined&&![1,2,3].includes(a.water))result={ok:false,reason:'Равный полив: 1, 2 или 3 дозы на лоток.'};
    else if(a.cover!==undefined&&!['open','mica','both'].includes(a.cover))result={ok:false,reason:'unknown_cover'};
    else{if(a.cover!==undefined)trial.cover=a.cover;else delete trial.cover;trial.water=a.water||2;trial.started=now;trial.phase='growing';result={ok:true,trial:true,ready_at:now+360,water_each:trial.water*40};}
   }else if(trial.phase!=='ready')result={ok:false,reason:'Снимать можно только готовый опыт через шесть минут.'};
   else{
    const view=projectTrial();trial.sequence=Math.min(999999,trial.sequence+1);
    const record={id:trial.sequence,seed:trial.seed,water:trial.water,soil:view.trays[0].growth,mica:view.trays[1].growth,finished:trial.started+360,...(trial.cover===undefined?{}:{cover:trial.cover})};
    trial.records.push(record);trial.records=trial.records.slice(-6);trial.phase='collected';
    result={ok:true,trial:true,comparison:record,meaning:'Игровой опыт: равный полив, разные субстраты; навес = половина испарения и 80% света. Условия сохранены; рост в условных единицах, не еда.'};
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
 const p={...s,observer:journal,trial:projectTrial(),target:targets[s.round],speed:s.core*s.belt,picture:s.phase==='repaired'||s.phase==='complete'?s.round+1:0,bucket:s.phase==='ejected',completed:s.phase==='complete'};
 return {state:s,public:p,result,seconds:input.tool==='crank'?60:20,label:input.args?.journal===true?'читает ленту маятников':input.args?.trial===true||input.args?.part==='seed'?'занимается парным опытом':input.tool==='salvage'?'достаёт ядро из ведра':input.tool==='crank'?'крутит механический монитор':'собирает механический монитор'};
}

// Numeric leaves only, not arbitrary text lifted from a field note. Paths stay bounded.
function observerNumbers(facts){
 const out={};let count=0;
 const safe=k=>typeof k==='string'&&/^[\p{L}][\p{L}\p{N}_ -]{0,39}$/u.test(k)&&!['__proto__','constructor','prototype'].includes(k);
 function walk(x,path,depth){
  if(count>=12||depth>4||path.length>96)return;
  if(typeof x==='number'&&Number.isFinite(x)&&Math.abs(x)<=1e9){out[path]=x;count++;return;}
  if(!x||typeof x!=='object')return;
  if(Array.isArray(x)){for(let i=0;i<Math.min(24,x.length);i++){
   const row=x[i];
   if(row&&typeof row==='object'&&safe(row.key||row.name)&&typeof row.value==='number')walk(row.value,path?path+'.'+(row.key||row.name):row.key||row.name,depth+1);
   else walk(row,path?path+'.'+i:String(i),depth+1);
  }}else for(const k of Object.keys(x).sort().slice(0,32))if(safe(k))walk(x[k],path?path+'.'+k:k,depth+1);
 }
 walk(facts,'',0);return out;
}
function observerCollect(old,w,now){
 const clean=r=>r&&Number.isSafeInteger(r.id)&&r.id>0&&Number.isFinite(r.time)&&r.time>=0;
 const s={version:2,rows:[],seen:[],total:0,clamps:observerClamps(old?.clamps)};
 if(old&&typeof old==='object'){
  s.rows=Array.isArray(old.rows)?old.rows.filter(clean).slice(-48).map(r=>({id:r.id,time:r.time,values:observerStored(r.values),running:typeof r.running==='boolean'?r.running:null})):[];
  s.seen=Array.isArray(old.seen)?old.seen.filter(n=>typeof n==='string'&&/^[0-9]+@[0-9.]+$/.test(n)&&n.length<48).slice(-96):[];
  s.total=Number.isSafeInteger(old.total)?Math.max(s.rows.length,Math.min(1e9,old.total)):s.rows.length;
 }
 for(const r of s.rows){const stamp=r.id+'@'+r.time;if(!s.seen.includes(stamp))s.seen.push(stamp);}
 const notes=w?.field_notes;
 if(notes&&typeof notes==='object'){
  const candidates=Object.entries(notes).slice(0,256).filter(([key,r])=>r&&r.source==='fictional_world_simulation'&&(key==='engine'||r.target==='engine'||r.target?.id==='engine')&&clean(r)&&r.time<=now+60).map(([,r])=>({...r,time:Number.isFinite(r.checked_at)&&r.checked_at>=r.time&&r.checked_at<=now+60?r.checked_at:r.time})).sort((a,b)=>a.time-b.time||a.id-b.id);
  for(const r of candidates){
   const stamp=r.id+'@'+r.time;if(s.seen.includes(stamp))continue;
   const values=observerNumbers(r.facts);if(!Object.keys(values).length)continue;
   // A note older than the retained window cannot reappear as a new sample.
   const last=s.rows[s.rows.length-1];if(last&&(r.time<last.time||r.time===last.time&&r.id<=last.id))continue;
   s.rows.push({id:r.id,time:r.time,values,running:typeof w.objects?.engine?.running==='boolean'?w.objects.engine.running:null});
   s.rows=s.rows.slice(-48);s.seen.push(stamp);s.seen=s.seen.slice(-96);s.total=Math.min(1e9,s.total+1);
  }
 }
 s.seen=s.seen.slice(-96);return s;
}
function observerProject(s){
 const metrics=[...new Set(s.rows.flatMap(r=>Object.keys(r.values)))].sort().slice(0,48);
 return {version:2,source:'field_notes.engine',rows:s.rows,total:s.total,capacity:48,metrics,clamps:s.clamps,
  note:'Только числовые факты игровых измерений engine; время — checked_at или time. Повторная проверка того же id с новым checked_at сохраняется. Тики не делают новые замеры. Лента хранит последние48 доступных проб; полный архив у resident_catalog. Метка running — состояние переключателя при записи, не причина изменения.'};
}
function observerRead(p,metric){
 const key=metric===undefined?p.metrics[0]:metric;
 if(key!==undefined&&!p.metrics.includes(key))return {ok:false,reason:'unknown_metric',metrics:p.metrics};
 const points=key?p.rows.filter(r=>Object.hasOwn(r.values,key)).map(r=>({id:r.id,time:r.time,value:r.values[key],running:r.running})):[];
 const values=points.map(r=>r.value);
 return {ok:true,total:p.total,retained:p.rows.length,metric:key||null,metrics:p.metrics,
  clamps:p.clamps,points:points.slice(-12),summary:values.length?{count:values.length,min:Math.min(...values),max:Math.max(...values),delta:values[values.length-1]-values[0]}:null,
  note:p.note};
}

function observerStored(values){
 const out={};if(!values||typeof values!=='object')return out;
 for(const k of Object.keys(values).slice(0,12))if(/^[\p{L}\p{N}][\p{L}\p{N}_ .-]{0,95}$/u.test(k)&&!k.split('.').some(p=>['__proto__','constructor','prototype'].includes(p))&&typeof values[k]==='number'&&Number.isFinite(values[k])&&Math.abs(values[k])<=1e9)out[k]=values[k];
 return out;
}

// Frozen numeric A/B receipts, independent of the rolling paper window.
function observerMetric(k){return typeof k==='string'&&/^[\p{L}\p{N}][\p{L}\p{N}_ .-]{0,95}$/u.test(k)&&!k.split('.').some(p=>['__proto__','constructor','prototype'].includes(p));}
function observerPoint(p){
 if(!p||!Number.isSafeInteger(p.id)||p.id<=0||!Number.isFinite(p.time)||p.time<0||!Number.isFinite(p.value)||Math.abs(p.value)>1e9)return null;
 return {id:p.id,time:p.time,value:p.value,running:typeof p.running==='boolean'?p.running:null};
}
function observerReceipt(id,metric,a,b){
 const delta=b.value-a.value;
 return {id,metric,a,b,delta,percent:a.value===0||!Number.isFinite(delta/Math.abs(a.value)*100)?null:delta/Math.abs(a.value)*100,elapsed:b.time-a.time};
}
function observerClamps(old){
 const s={anchor:null,records:[],sequence:0,lastCompared:null};
 if(!old||typeof old!=='object')return s;
 const p=observerPoint(old.anchor);
 if(p&&observerMetric(old.anchor.metric))s.anchor={metric:old.anchor.metric,...p};
 if(Array.isArray(old.records))for(const r of old.records.slice(-6)){
  const a=observerPoint(r?.a),b=observerPoint(r?.b);
  if(!a||!b||!observerMetric(r.metric)||!Number.isSafeInteger(r.id)||r.id<=0||b.time<=a.time||s.records.some(x=>x.id>=r.id))continue;
  s.records.push(observerReceipt(r.id,r.metric,a,b));
 }
 s.sequence=Math.max(...s.records.map(r=>r.id),Number.isSafeInteger(old.sequence)&&old.sequence>=0?Math.min(1e9,old.sequence):0);
 if(s.anchor&&Number.isFinite(old.lastCompared)&&old.lastCompared>s.anchor.time)s.lastCompared=old.lastCompared;
 // Recover the guard even if a pre-release state lacks lastCompared.
 for(const r of s.records)if(s.anchor&&r.metric===s.anchor.metric&&r.a.id===s.anchor.id&&r.a.time===s.anchor.time)s.lastCompared=Math.max(s.lastCompared||0,r.b.time);
 return s;
}
function observerCapture(s,action,metric){
 const c=s.clamps;
 if(!['pin','compare','release'].includes(action))return {ok:false,reason:'unknown_capture'};
 if(action==='release'){c.anchor=null;c.lastCompared=null;return {ok:true,capture:action,retained:c.records.length};}
 if(action==='compare'&&!c.anchor)return {ok:false,reason:'pin_first'};
 const key=metric===undefined?(action==='compare'?c.anchor.metric:observerProject(s).metrics[0]):metric;
 if(!observerMetric(key))return {ok:false,reason:'no_numeric_sample'};
 if(action==='compare'&&key!==c.anchor.metric)return {ok:false,reason:'metric_mismatch',metric:c.anchor.metric};
 const row=[...s.rows].reverse().find(r=>Object.hasOwn(r.values,key));
 if(!row)return {ok:false,reason:'no_numeric_sample',metric:key};
 const point={id:row.id,time:row.time,value:row.values[key],running:row.running};
 if(action==='pin'){
  if(c.anchor)return {ok:false,reason:'release_first',anchor:c.anchor};
  c.anchor={metric:key,...point};c.lastCompared=null;
  return {ok:true,capture:action,anchor:c.anchor,next:'Получи более новую числовую пробу engine.listen, затем capture=compare. Изменять switch необязательно.'};
 }
 if(point.time<=c.anchor.time)return {ok:false,reason:'new_sample_required',anchor:c.anchor};
 if(c.lastCompared!==null&&point.time<=c.lastCompared){
  const receipt=c.records.find(r=>r.metric===key&&r.a.id===c.anchor.id&&r.a.time===c.anchor.time&&r.b.id===point.id&&r.b.time===point.time);
  return receipt?{ok:true,capture:action,duplicate:true,comparison:receipt}:{ok:false,reason:'already_compared'};
 }
 if(c.sequence>=1e9)return {ok:false,reason:'archive_sequence_full'};
 // A percentage near zero can overflow: represent it as null, never Infinity.
 const receipt=observerReceipt(++c.sequence,key,observerPoint(c.anchor),point);
 if(!Number.isFinite(receipt.percent))receipt.percent=null;
 c.records.push(receipt);c.records=c.records.slice(-6);c.lastCompared=point.time;
 return {ok:true,capture:action,duplicate:false,comparison:receipt,note:'Разница двух игровых проб, не доказательство причинности. running — переключатель при записи, не во время исходного измерения.'};
}

export default world;
