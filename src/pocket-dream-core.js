// Visitor-only dream; never advances server time or the resident's life.
export const freshPocketDream=()=>({phase:'flat',progress:0,trace:false});
export const pocketBusy=s=>['folding','falling','turning'].includes(s.phase);
export function actPocket(s){const next={flat:'folding',bowl:'falling',caught:'turning'}[s.phase];return next?{...s,phase:next,progress:0}:s.phase==='audience'?freshPocketDream():s;}
export function advancePocket(s,dt){if(!pocketBusy(s))return s;const d=Number.isFinite(dt)?Math.min(.1,Math.max(0,dt)):0;if(d===0)return s;const p=Math.min(1,s.progress+d/(s.phase==='turning'?4:3));return p<1?{...s,progress:p}:{...s,progress:1,phase:{folding:'bowl',falling:'caught',turning:'audience'}[s.phase],trace:s.trace||s.phase==='turning'};}
export function pocketPose(s){const e=t=>t*t*(3-2*t),p=e(s.progress),fold=s.phase==='flat'?0:s.phase==='folding'?p:1,fall=['flat','folding','bowl'].includes(s.phase)?0:s.phase==='falling'?p:1,turn=s.phase==='turning'?p:s.phase==='audience'?1:0;return {fold,fall,turn};}
