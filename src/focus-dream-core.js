// Visitor-only dream: the surroundings focus, the camera stays put.
export const freshFocus=()=>({phase:'focusing',dial:0,progress:0});
export const focusReady=s=>s.phase==='focusing'&&s.dial===6;
export function tuneFocus(s,n){return s.phase==='focusing'&&Number.isInteger(n)&&n>=0&&n<=12?{...s,dial:n}:s;}
export function actFocus(s){return s.phase==='inside'?freshFocus():focusReady(s)?{...s,phase:'collecting',progress:0}:s;}
export function advanceFocus(s,dt){if(s.phase!=='collecting'||!Number.isFinite(dt)||dt<=0)return s;const progress=Math.min(1,s.progress+Math.min(dt,.1)/4);return {...s,progress,phase:progress>=1?'inside':'collecting'};}
export function focusPose(dial,progress){const d=(dial-6)/6,t=Math.max(0,Math.min(1,progress)),e=t*t*(3-2*t);return {spread:d*1.25,orbit:d*.8,scale:1-.71*e,y:1.12*e,z:1.2*e,open:e*1.25,tilt:-Math.PI/2*e};}
export const focusTrace=v=>v?.trace===true&&v?.version===1;
