// A visitor's dream, not weather, computing hardware, or the resident's sleep.
export const freshCloudDream=()=>({target:'sky',phase:'ready',progress:0,trace:false});
export function chooseCloud(s,target){return s.phase==='ready'&&['sky','planet'].includes(target)?{...s,target}:s;}
export function actCloud(s){if(s.phase==='ready')return {...s,phase:'heating',progress:0};if(s.phase==='cloud')return {...s,phase:'raining',progress:0};if(s.phase==='settled')return freshCloudDream();return s;}
export function advanceCloud(s,dt){if(!['heating','raining'].includes(s.phase))return s;const d=Number.isFinite(dt)?Math.max(0,Math.min(.1,dt)):0;const p=Math.min(1,s.progress+d/3);if(p<1)return {...s,progress:p};return {...s,progress:1,phase:s.phase==='raining'?'settled':s.target==='sky'?'cloud':'ready',trace:s.trace||s.phase==='raining'};}
