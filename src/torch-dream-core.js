// Local visitor dream, independent of the resident and server state.
export const TORCH_TARGETS=Object.freeze([1,3,2]);
export const freshTorchDream=()=>({phase:'tuning',turns:[0,0,0],progress:0,trace:false});
export const torchAligned=s=>s.turns.map((n,i)=>n===TORCH_TARGETS[i]);
export function turnTorch(s,i){return s.phase==='tuning'&&Number.isInteger(i)&&i>=0&&i<3?{...s,turns:s.turns.map((v,k)=>k===i?(v+1)%4:v)}:s;}
export function actTorch(s){return s.phase==='sky'?freshTorchDream():s.phase==='tuning'&&torchAligned(s).every(Boolean)?{...s,phase:'releasing',progress:0}:s;}
export function advanceTorch(s,dt){if(s.phase!=='releasing'||!Number.isFinite(dt)||dt<=0)return s;const progress=Math.min(1,s.progress+Math.min(.1,dt)/4);return progress<1?{...s,progress}:{...s,progress:1,phase:'sky',trace:true};}
export function torchPose(s,i){const p=s.phase==='sky'?1:s.phase==='releasing'?s.progress:0,e=p*p*(3-2*p),a=i*Math.PI/5;return {x:Math.cos(a)*(3.05+e*.25),y:.65+e*(2.5+(i%3)*.65),z:Math.sin(a)*(3.05+e*.25),lift:e,diskScale:1-e*.78,diskTilt:e*Math.PI/2};}
