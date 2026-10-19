// Three coupled quarter-turn drums; a local fictional repair, not resident health.
export const STARTS=[[1,1,3],[1,3,2],[0,2,1]], LIMIT=9;
export function normalize(raw){
 const r=raw&&typeof raw==='object'?raw:{},round=Number.isInteger(r.round)?Math.max(0,Math.min(2,r.round)):0;
 const valid=Array.isArray(r.turns)&&r.turns.length===3&&r.turns.every(v=>Number.isInteger(v)&&v>=0&&v<4);
 const turns=valid?r.turns.slice():STARTS[round].slice(),used=valid&&Number.isInteger(r.used)?Math.max(0,Math.min(LIMIT,r.used)):0;
 const aligned=turns.every(v=>v===0),tested=aligned&&r.tested===true;
 return {round,turns,used,tested,phase:tested?(round===2?'complete':'won'):aligned?'aligned':used===LIMIT?'spent':'ready',run:Number.isSafeInteger(r.run)?Math.max(1,Math.min(999999,r.run)):1};
}
export function turn(v,i){if(!Number.isInteger(i)||i<0||i>2)return null;const n=v.slice();n[i]=(n[i]+1)%4;n[(i+1)%3]=(n[(i+1)%3]+2)%4;return n;}
export function step(raw,action,i){
 const s=normalize(raw);let ok=false;
 if(action==='reset'||action==='all')return {state:normalize({round:action==='all'?0:s.round,run:s.run+(action==='all'?1:0)}),ok:true};
 if(action==='next'&&s.phase==='won')return {state:normalize({round:s.round+1,run:s.run}),ok:true};
 if(action==='test'&&s.phase==='aligned'){s.tested=true;ok=true;}
 if(action==='turn'&&s.phase==='ready'){const n=turn(s.turns,i);if(n){s.turns=n;s.used++;ok=true;}}
 return {state:normalize(s),ok};
}
export function solution(raw){
 const s=normalize(raw);if(s.phase!=='ready')return [];
 const q=[{v:s.turns,path:[]}],seen=new Set([s.turns.join()]);
 for(let j=0;j<q.length;j++){const {v,path}=q[j];if(v.every(x=>x===0))return path;if(path.length>=LIMIT-s.used)continue;
 for(let i=0;i<3;i++){const n=turn(v,i),key=n.join();if(!seen.has(key)){seen.add(key);q.push({v:n,path:[...path,i]});}}}return null;
}
export function pressure(t){t=Math.max(0,Math.min(1,Number(t)||0));return Math.sin(t*Math.PI)**2;}
