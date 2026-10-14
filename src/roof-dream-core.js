// Visitor dream rules. There is no shared resident write or invented sleep timer.
export const roofDirections=['восток','юг','запад','север'];
export const roofRoute=[0,2,3];
export function freshRoofDream(){return {turns:[1,1,1],phase:'idle',stop:0,progress:0,attempts:0,trace:false};}
export function turnRoof(s,i){if(s.phase==='flying'||s.phase==='delivered'||!Number.isInteger(i)||i<0||i>2)return s;return {...s,turns:s.turns.map((n,k)=>k===i?(n+1)%4:n),phase:'idle',progress:0};}
export function sendRoofLetter(s){if(s.phase==='flying'||s.phase==='delivered')return s;const fail=s.turns.findIndex((n,i)=>n!==roofRoute[i]);return {...s,phase:'flying',stop:fail<0?4:fail+1,progress:0,attempts:s.attempts+1};}
export function advanceRoofLetter(s,dt){if(s.phase!=='flying')return s;const progress=Math.min(s.stop,s.progress+Math.max(0,Math.min(Number(dt)||0,.15))*.85);return {...s,progress,phase:progress>=s.stop?(s.stop===4?'delivered':'caught'):'flying',trace:s.trace||(progress>=4)};}
