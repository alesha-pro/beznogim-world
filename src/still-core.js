// A local, fictional cloud jug puzzle. No real GPU time or resident resources.
export const CAP=[3,5,7,9], START=[3,5,7,1], LIMIT=16;
export const GOALS=[[2,1,4,9],[3,4,1,8],[3,1,5,7]];
export const NAMES=['улитка','чайник','кит'];
const eq=(a,b)=>a.every((v,i)=>v===b[i]);
export function normalize(raw){
 const r=raw&&typeof raw==='object'?raw:{},round=Number.isInteger(r.round)?Math.max(0,Math.min(2,r.round)):0;
 const valid=Array.isArray(r.volumes)&&r.volumes.length===4&&r.volumes.every((v,i)=>Number.isInteger(v)&&v>=0&&v<=CAP[i])&&r.volumes.reduce((a,b)=>a+b,0)===16;
 const volumes=valid?r.volumes.slice():START.slice(),used=valid&&Number.isInteger(r.used)?Math.max(0,Math.min(LIMIT,r.used)):0;
 const phase=eq(volumes,GOALS[round])?(round===2?'complete':'won'):used>=LIMIT?'spent':'ready';
 return {round,volumes,used,phase,run:Number.isSafeInteger(r.run)?Math.max(1,Math.min(999999,r.run)):1,seq:Number.isSafeInteger(r.seq)?Math.max(0,Math.min(999999,r.seq)):0};
}
export function transfer(v,a,b){if(!Number.isInteger(a)||!Number.isInteger(b)||a<0||a>3||b<0||b>3||a===b)return null;const amount=Math.min(v[a],CAP[b]-v[b]);if(amount<=0)return null;const n=v.slice();n[a]-=amount;n[b]+=amount;return {volumes:n,amount};}
export function step(raw,action,a,b){
 const s=normalize(raw);let result={ok:false,reason:'locked'},pour=null;
 if(action==='reset'||action==='all')return {state:normalize({round:action==='all'?0:s.round,run:s.run+(action==='all'?1:0),seq:s.seq}),result:{ok:true},pour};
 if(action==='next'&&s.phase==='won')return {state:normalize({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:true},pour};
 if(action==='pour'&&s.phase==='ready'){
  const t=transfer(s.volumes,a,b);if(!t)return {state:s,result:{ok:false,reason:'empty'},pour};
  pour={a,b,amount:t.amount,before:s.volumes.slice(),after:t.volumes.slice(),seq:s.seq+1};
  s.volumes=t.volumes;s.used++;s.seq++;result={ok:true,amount:t.amount};
 }
 return {state:normalize(s),result,pour};
}
export function solution(raw){
 const s=normalize(raw);if(s.phase!=='ready')return [];
 const q=[{v:s.volumes,path:[]}],seen=new Set([s.volumes.join(',')]);
 for(let i=0;i<q.length;i++){const {v,path}=q[i];if(eq(v,GOALS[s.round]))return path;if(path.length>=LIMIT-s.used)continue;
  for(let a=0;a<4;a++)for(let b=0;b<4;b++){const t=transfer(v,a,b);if(!t)continue;const k=t.volumes.join(',');if(seen.has(k))continue;seen.add(k);q.push({v:t.volumes,path:[...path,{a,b}]});}}
 return null;
}
export function pose(a,b,t){t=Math.max(0,Math.min(1,Number(t)||0));return [-3+2*a+2*(b-a)*t,2.95+Math.sin(t*Math.PI)*1.15,0];}
