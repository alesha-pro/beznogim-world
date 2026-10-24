// Generated from public/mechanics/garage.js by scripts/sync-mechanics.mjs.
// Fictional pneumatic garage. These are board-game rules, not vehicle physics.
function garageWorld(input){
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

// Accelerated fictional microgrid; kW electrical, kWh stores, gas in kWh LHV.
// One energy hour = 120 real seconds. No invented real-world measurement.
function energyFresh(now){return {v:1,last:now,hour:0,gas:400000,depot:800000,battery:400,units:[true,true],tripped:[false,false],weather:'cycle',loadMode:'profile',nextDelivery:0,deliveries:0,totals:{gas:0,pv:0,gen:0,served:0,unserved:0,charge:0,discharge:0,loss:0,spill:0,heat:0},flow:null};}
function energyLoad(h){return 154.28374077+32*Math.cos(2*Math.PI*(h%24-18)/24)+20*Math.cos(2*Math.PI*h/8760)+15.49625923*Math.cos(4*Math.PI*(h%24-18)/24);}
function energyFlow(s,h,dt){
 const daylight=Math.max(0,Math.sin(Math.PI*((h%24)-6)/12));
 const cloud=s.weather==='overcast'?.12:s.weather==='clear'?1:.55+.35*Math.cos(2*Math.PI*h/168);
 const pv=300*daylight*cloud,load=s.loadMode==='peak'?221.78:s.loadMode==='low'?100:energyLoad(h);
 const active=s.units.filter((on,i)=>on&&!s.tripped[i]).length;
 const regularBattery=Math.min(200,Math.max(0,load-pv),Math.max(0,s.battery-160)*.95/dt);
 const gen=Math.min(active*250,Math.max(0,load-pv-regularBattery),s.gas*.4/dt);
 const gas=gen*dt/.4;s.gas=Math.max(0,s.gas-gas);
 const surplus=Math.max(0,pv+gen-load),short=Math.max(0,load-pv-gen);
 const charge=Math.min(200,surplus,(800-s.battery)/(.95*dt));
 const discharge=Math.min(200,short,s.battery*.95/dt);
 s.battery=Math.max(0,Math.min(800,s.battery+charge*.95*dt-discharge/.95*dt));
 const loss=(charge*.05+discharge*(1/.95-1))*dt,deficit=Math.max(0,short-discharge),spill=Math.max(0,surplus-charge),served=load-deficit;
 const heat=gen/.4*.45,ratio=served/load;
 const flow={load,pv,gen,gasRate:gen/.4,charge,discharge,lossKW:loss/dt,spill,served,deficit,heat,daylight,cloud,active,consumer:ratio>.999?'running':ratio>.65?'slow':'stopped',consumerKW:20*ratio};
 const t=s.totals;t.gas+=gas;t.pv+=pv*dt;t.gen+=gen*dt;t.served+=served*dt;t.unserved+=deficit*dt;t.charge+=charge*dt;t.discharge+=discharge*dt;t.loss+=loss;t.spill+=spill*dt;t.heat+=heat*dt;
 s.flow=flow;return flow;
}
function energyAdvance(s,hours){let left=Math.max(0,hours);while(left>1e-9){const d=Math.min(.25,left);energyFlow(s,s.hour+d/2,d);s.hour+=d;left-=d;}return s;}
function energyPublic(s){return {...s,clock:'1 энергетический час = 120 реальных секунд',capacityKW:500,solarKWp:300,batteryKWh:800,batteryKW:200,efficiency:.4,chargeEfficiency:.95,dischargeEfficiency:.95,gasUnit:'кВт·ч НТС',model:'fictional_accelerated_microgrid'};}
function energyWorld(input){
 const base=input.state&&typeof input.state==='object'?input.state:null;
 const s=base?JSON.parse(JSON.stringify(base)):energyFresh(input.now);
 if(!Number.isFinite(s.last))s.last=input.now;
 // Offline integration is complete; after gas exhaustion no fuel appears on a tick.
 const hours=Math.max(0,(input.now-s.last)/120);if(hours>0){const processed=Math.min(hours,8760);energyAdvance(s,processed);s.last+=processed*120;}
 let result=null;const a=input.args||{};
 if(input.mode==='action'){
 const p=input.world?.position,pos=Array.isArray(p)?p:[p?.x,p?.y,p?.z],near=Number.isFinite(pos[0])&&Number.isFinite(pos[2])&&Math.hypot(pos[0]-48,pos[2]+24)<=2.4;
 if(a.energy!=='inspect'&&!near)result={ok:false,reason:'Подлети к электростанции [48,0.6,-24]'};
 else if(a.energy==='inspect')result={ok:true,energy:energyPublic(s)};
 else if(['dispatch','trip','repair'].includes(a.energy)&&a.unit!==1&&a.unit!==2)result={ok:false,reason:'unit_required_1_or_2'};
 else if(a.energy==='dispatch'){if(a.unit===1||a.unit===2)s.units[a.unit-1]=a.enabled!==false;result={ok:true,units:s.units};}
 else if(a.energy==='delivery'){
 const amount=Math.min(100000,s.depot,500000-s.gas);
 if(s.hour<s.nextDelivery||amount<1)result={ok:false,reason:'Поставка недоступна: интервал 24 энерго-часа, конечный склад800000 и бак500000 кВт·ч НТС'};
 else{s.gas+=amount;s.depot-=amount;s.deliveries++;s.nextDelivery=s.hour+24;result={ok:true,delivered:amount,remainingDepot:s.depot};}
 }else if(a.energy==='trip'){const i=(a.unit||1)-1;s.tripped[i]=true;result={ok:true,tripped:a.unit||1};}
 else if(a.energy==='repair'){const i=(a.unit||1)-1;s.tripped[i]=false;result={ok:true,repaired:a.unit||1};}
 else result={ok:false,reason:'unknown_energy_action'};
 }
 // Instant readout without changing stores or totals.
 const probe=JSON.parse(JSON.stringify(s));energyFlow(probe,s.hour,1/3600);s.flow=probe.flow;
 return {state:s,public:energyPublic(s),result,seconds:10,label:'проверяет электростанцию'};
}
function world(input){
 const old=input.state||{};
 if(input.mode==='action'&&!input.args?.energy){const p=input.world?.position,pos=Array.isArray(p)?p:[p?.x,p?.y,p?.z];if(p&&(!Number.isFinite(pos[0])||!Number.isFinite(pos[2])||Math.hypot(pos[0]+32,pos[2]+20.6)>2.4))return {...world({...input,mode:'tick'}),result:{ok:false,reason:'Подлети к гаражу [-32,.6,-20.6]'}};}
 const energy=energyWorld({...input,state:old.energy||null,mode:input.mode==='action'&&input.args?.energy?'action':input.mode==='action'?'tick':input.mode});
 const garage=garageWorld({...input,state:old,mode:input.args?.energy?'tick':input.mode});
 garage.state.energy=energy.state;garage.public.energy=energy.public;
 if(input.mode==='action'&&input.args?.energy){garage.result=energy.result;garage.seconds=energy.seconds;garage.label=energy.label;}
 return garage;
}

export default world;
