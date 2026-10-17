// Local visitor puzzle. No resident writes, inventory or real backups.
export const WAVES = [[0,3,1],[1,2,0,3],[3,0,2,1,3]];
export const LIMITS = [1,1,2];
const bit = v => v===1?1:0;
export function normalize(raw) {
 const r=raw&&typeof raw==='object'?raw:{};
 const wave=Number.isInteger(r.wave)?Math.max(0,Math.min(2,r.wave)):0;
 const cursor=Number.isInteger(r.cursor)?Math.max(0,Math.min(WAVES[wave].length,r.cursor)):0;
 const phase=r.phase==='complete'&&wave===2&&cursor===5?'complete':cursor===WAVES[wave].length?'rounddone':r.phase==='spilled'?'spilled':'ready';
 return {wave,cursor,phase,switches:Array.from({length:3},(_,i)=>bit(r.switches?.[i])),used:Number.isInteger(r.used)?Math.max(0,Math.min(LIMITS[wave],r.used)):0,run:Number.isSafeInteger(r.run)?Math.max(1,Math.min(999999,r.run)):1,seq:Number.isSafeInteger(r.seq)?Math.max(0,Math.min(999999,r.seq)):0};
}
export function route(switches){const side=bit(switches[0]);return {bay:2*side+bit(switches[side+1]),side};}
export function flipPassed(switches){const s=switches.slice(),side=route(s).side;s[0]^=1;s[side+1]^=1;return s;}
export function saved(s){return WAVES.slice(0,s.wave).reduce((n,a)=>n+a.length,0)+s.cursor;}
export function step(raw,action,index){
 const s=normalize(raw);let result={ok:false,reason:'locked'},shot=null;
 if(action==='restart'||action==='all'){
  return {state:normalize({wave:action==='all'?0:s.wave,run:s.run+(action==='all'?1:0),seq:s.seq}),result:{ok:true},shot};
 }
 if(action==='next'&&s.phase==='rounddone'&&s.wave<2)return {state:normalize({wave:s.wave+1,seq:s.seq,run:s.run}),result:{ok:true},shot};
 if(s.phase==='ready'){
  if(action==='flip'&&Number.isInteger(index)&&index>=0&&index<3){if(s.used<LIMITS[s.wave]){s.switches[index]^=1;s.used++;result={ok:true};}else result={ok:false,reason:'budget'};}
  if(action==='release'){
   const {bay,side}=route(s.switches),target=WAVES[s.wave][s.cursor];shot={seq:++s.seq,bay,side,target,success:bay===target,before:s.switches.slice()};
   s.switches=flipPassed(s.switches);result={ok:true,bay,target,success:shot.success};
   if(shot.success){s.cursor++;if(s.cursor===WAVES[s.wave].length)s.phase=s.wave===2?'complete':'rounddone';}else s.phase='spilled';
  }
 }
 return {state:s,result,shot};
}
// Dijkstra on 8 switch states × 6 cursor positions × at most 2 manual clicks.
// The first returned action is only a hint; it never mutates the game.
export function solution(raw){
 const s=normalize(raw);if(s.phase!=='ready')return [];
 const q=[{s,path:[],cost:0}],seen=new Set();
 while(q.length){q.sort((a,b)=>a.cost-b.cost||a.path.length-b.path.length);const n=q.shift(),d=n.s,key=[d.cursor,d.used,...d.switches].join(':');if(seen.has(key))continue;seen.add(key);
  if(d.phase==='rounddone'||d.phase==='complete')return n.path;
  for(const [a,i]of [['release',null],['flip',0],['flip',1],['flip',2]]){const r=step(d,a,i);if(!r.result.ok||r.state.phase==='spilled')continue;q.push({s:r.state,path:[...n.path,{action:a,index:i}],cost:n.cost+(a==='flip'?1:0)});}
 }
 return null;
}
export function shotPose(shot,t){
 t=Math.max(0,Math.min(1,Number(t)||0));const end=[-2.8,-.9,.9,2.8][shot?.bay||0],side=shot?.side?1:-1;
 const points=[[0,1.4,-2.5],[0,1.2,-1.4],[side*1.5,.8,0],[end,.4,2.0],shot?.success?[end,.4,2.0]:[4.0,-.15,2.5]];
 if(t===1)return points[shot?.success?3:4].slice();
 const duration=shot?.success?3:4,x=t*duration,i=Math.min(duration-1,Math.floor(x)),u=x-i;
 return points[i].map((v,k)=>v+(points[i+1][k]-v)*u+(k===1&&i===3?.5*Math.sin(u*Math.PI):0));
}
