// A visitor's dream. Missing measurements remain missing, never invented values.
export const ABSENCE_SLOTS=[[-2.8,2.2],[-1.4,3.65],[0,2.8],[1.4,4.2],[2.8,3.25]];
export const freshAbsence=()=>({phase:'choosing',holes:[false,false,false,false,false],progress:0});
export const absenceReady=s=>s.holes.filter(Boolean).length===3;
export function toggleAbsence(s,i){if(s.phase!=='choosing'||!Number.isInteger(i)||i<0||i>=5||!s.holes[i]&&absenceReady(s))return s;return {...s,holes:s.holes.map((v,k)=>k===i?!v:v)};}
export function actAbsence(s){return s.phase==='night'?freshAbsence():s.phase==='choosing'&&absenceReady(s)?{...s,phase:'lifting',progress:0}:s;}
export function advanceAbsence(s,dt){if(s.phase!=='lifting'||!Number.isFinite(dt)||dt<=0)return s;const progress=Math.min(1,s.progress+Math.min(dt,.1)/6);return {...s,progress,phase:progress>=1?'night':'lifting'};}
export function absencePose(progress){const t=Math.max(0,Math.min(1,progress)),e=t*t*(3-2*t);return {tilt:-Math.PI/2*e,headY:.85+.45*e,headZ:2.3-.35*e};}
export function absenceTrace(value){return value?.trace===true&&Array.isArray(value.holes)&&value.holes.length===5&&value.holes.every(v=>typeof v==='boolean')&&absenceReady(value)?value.holes.slice():null;}
