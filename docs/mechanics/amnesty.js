// Fictional cargo puzzle. Not a tax, food store or currency.
const routes=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];
function freshAmnesty(run=1){return {round:0,run,loaded:[false,false,false],pardoned:false,status:'idle',delivered:[],attempts:0};}
function world(input){
 const s=input.state?JSON.parse(JSON.stringify(input.state)):freshAmnesty();
 // Publications do not change cargo, bridge, run or the delivered collection.
 if(!Array.isArray(s.delivered))s.delivered=[];
 if(!Array.isArray(s.loaded)||s.loaded.length!==3)s.loaded=[false,false,false];
 if(!Number.isInteger(s.round)||s.round<0||s.round>2)s.round=0;
 if(!Number.isInteger(s.run))s.run=1;
 if(!Number.isInteger(s.attempts))s.attempts=0;
 if(!s.status)s.status='idle';
 const done=()=>s.status==='delivered'||s.status==='complete';
 let result={ok:true};
 if(input.mode==='action'){
  const a=input.args||{},t=input.tool;
  if(t==='restart'){Object.assign(s,freshAmnesty(s.run+1));}
  else if(t==='next'){
   if(s.status!=='delivered')result={ok:false,reason:'finish_route_first'};
   else {s.round++;s.loaded=[false,false,false];s.pardoned=false;s.status='idle';}
  }else if(done()){result={ok:false,reason:'route_finished'};}
  else if(t==='load'){
   if(!Number.isInteger(a.index)||a.index<0||a.index>2)result={ok:false,reason:'invalid_index'};
   else {s.loaded[a.index]=!s.loaded[a.index];s.status='idle';}
  }else if(t==='amnesty'){s.pardoned=true;s.status='idle';}
  else if(t==='dispatch'){
   const r=routes[s.round],total=r.weights.reduce((v,w,i)=>v+(s.loaded[i]?w+(s.pardoned?0:r.debt[i]):0),0);s.attempts++;
   if(total!==r.target){s.status=total<r.target?'under':'over';result={ok:false,reason:s.status,total,target:r.target};}
   else {s.status=s.round===2?'complete':'delivered';r.weights.forEach((w,i)=>{if(s.loaded[i])s.delivered.push({id:`${s.run}:${s.round}:${i}`,weight:w});});result={ok:true,total,target:r.target};}
  }else result={ok:false,reason:'unknown_tool'};
 }
 const r=routes[s.round],effective=r.weights.map((w,i)=>w+(s.pardoned?0:r.debt[i])),total=effective.reduce((v,w,i)=>v+(s.loaded[i]?w:0),0);
 const pub={...s,weights:r.weights,debt:s.pardoned?[0,0,0]:r.debt,effective,target:r.target,total,tilt:s.status==='under'?.22:s.status==='over'?-.22:0};
 return {state:s,public:pub,result,seconds:input.tool==='dispatch'?35:15,label:'возится с кабачковым мостом'};
}
