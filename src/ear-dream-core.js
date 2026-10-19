// Visitor-only dream. No resident state, timers or remote writes.
export const EAR_WEIGHTS=Object.freeze([1,2,3,4,5,7]);
export const freshEarDream=()=>({phase:'sorting',places:[0,0,0,0,0,0],progress:0});
export function earLoads(s){return [1,2].map(side=>s.places.reduce((sum,p,i)=>sum+(p===side?EAR_WEIGHTS[i]:0),0));}
export function earReady(s){const [l,r]=earLoads(s);return s.places.every(p=>p!==0)&&l===r;}
export function moveEarStone(s,i){return s.phase==='sorting'&&Number.isInteger(i)&&i>=0&&i<6?{...s,places:s.places.map((p,k)=>k===i?(p+1)%3:p)}:s;}
export function actEar(s){return s.phase==='flying'?freshEarDream():s.phase==='sorting'&&earReady(s)?{...s,phase:'unfolding',progress:0}:s;}
export function advanceEar(s,dt){if(s.phase!=='unfolding'||!Number.isFinite(dt)||dt<=0)return s;const progress=Math.min(1,s.progress+Math.min(.1,dt)/4);return {...s,progress,phase:progress===1?'flying':'unfolding'};}
export function earPose(s){const p=s.phase==='flying'?1:s.phase==='unfolding'?s.progress:0,e=p*p*(3-2*p),[l,r]=earLoads(s);return {open:e,headY:.85+e*2.25,waterTilt:e*Math.PI/2,waterY:-.3+e*2.5,lean:(r-l)/22*.18};}
export function earStonePose(s,i){const side=s.places[i],p=earPose(s).open;return side===0?[-3+i*1.2,.15,2.85]:[(side===1?-2.1:2.1)+(i%3-1)*.35,.9+Math.floor(i/3)*.45+p*(2.1+i*.12),.5+(i%2)*.35-p*.8];}
