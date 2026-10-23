// Fictional stencil puzzle. These labels do not model machine-learning algorithms.
export const TYPES=['DPO','PPO','RLHF'];
export const FULL=511,LIMIT=6;
export function affected(type,cell){
 if(!TYPES.includes(type)||!Number.isInteger(cell)||cell<0||cell>8)return [];
 const x=cell%3,z=Math.floor(cell/3),p=type==='DPO'?[[0,0],[1,0]]:type==='PPO'?[[0,-1],[0,0],[0,1]]:[[0,0],[-1,0],[1,0],[0,-1],[0,1]];
 return p.filter(([a,b])=>x+a>=0&&x+a<3&&z+b>=0&&z+b<3).map(([a,b])=>(z+b)*3+x+a);
}
export const moves=TYPES.flatMap(type=>Array.from({length:9},(_,cell)=>({type,cell,mask:affected(type,cell).reduce((m,i)=>m^(1<<i),0)})));
// Only 512 light patterns; breadth first search gives a real shortest hint.
const paths=Array(512).fill(null);paths[FULL]=[];const q=[FULL];
for(let n=0;n<q.length;n++)for(const {type,cell,mask}of moves){const next=q[n]^mask;if(paths[next]===null){paths[next]=[{type,cell},...paths[q[n]]];q.push(next);}}
export const LEVELS=[2,3,4].map((distance,i)=>{const candidates=paths.map((p,mask)=>({p,mask})).filter(o=>o.p?.length===distance);const a=candidates[Math.floor(candidates.length*(i+1)/4)];return {mask:a.mask,solution:a.p};});
export function solve(mask){return Number.isInteger(mask)&&mask>=0&&mask<=FULL?paths[mask]?.map(o=>({...o})):null;}
export function fresh(level=0,flags=[false,false,false]){return {v:1,level,stamp:'DPO',history:[],collected:false,flags:[...flags]};}
export function light(s){return s.history.reduce((mask,a)=>mask^moves.find(m=>m.type===a.type&&m.cell===a.cell).mask,LEVELS[s.level].mask);}
export function phase(s){return s.collected?'collected':light(s)===FULL?'ready':s.history.length===LIMIT?'buried':'playing';}
export function normalize(raw){
 if(!raw||raw.v!==1||!Number.isInteger(raw.level)||raw.level<0||raw.level>2)return fresh();
 const s=fresh(raw.level,Array.from({length:3},(_,i)=>raw.flags?.[i]===true));
 if(TYPES.includes(raw.stamp))s.stamp=raw.stamp;
 for(const a of Array.isArray(raw.history)?raw.history.slice(0,LIMIT):[]){if(phase(s)!=='playing'||!moves.some(m=>m.type===a?.type&&m.cell===a?.cell))break;s.history.push({type:a.type,cell:a.cell});}
 s.collected=raw.collected===true&&light(s)===FULL;if(s.collected)s.flags[s.level]=true;
 return s;
}
export function step(input,action,arg){const s=normalize(input),before=phase(s);let hit=[];
 if(action==='stamp'&&TYPES.includes(arg))s.stamp=arg;
 else if(action==='press'&&before==='playing'&&Number.isInteger(arg)&&arg>=0&&arg<9){hit=affected(s.stamp,arg);s.history.push({type:s.stamp,cell:arg});}
 else if(action==='undo'&&s.history.length&&!s.collected)s.history.pop();
 else if(action==='harvest'&&before==='ready'){s.collected=true;s.flags[s.level]=true;}
 else if(action==='reset')return {state:fresh(s.level,s.flags),hit};
 else if(action==='all')return {state:fresh(),hit};
 else if(action==='next'&&s.collected)return {state:fresh((s.level+1)%3,s.flags),hit};
 return {state:s,hit};
}
