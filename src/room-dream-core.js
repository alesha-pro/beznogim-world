// A visitor's imaginary memory. No resident inventory, sleep or hardware changes.
export const freshRoomDream=()=>({phase:'furnishing',slots:[0,0],progress:0});
export function chooseRoom(s,leg,axis){return s.phase==='furnishing'&&Number.isInteger(leg)&&leg>=0&&leg<2&&Number.isInteger(axis)&&axis>=0&&axis<=3?{...s,slots:s.slots.map((v,i)=>i===leg?axis:v)}:s;}
export const roomReady=s=>s.slots.every(v=>v>0);
export function actRoom(s){return s.phase==='settled'?freshRoomDream():s.phase==='furnishing'&&roomReady(s)?{...s,phase:'walking',progress:0}:s;}
export function advanceRoom(s,dt){if(s.phase!=='walking'||!Number.isFinite(dt)||dt<=0)return s;const progress=Math.min(1,s.progress+Math.min(.1,dt)/6);return {...s,progress,phase:progress>=1?'settled':'walking'};}
export function roomSize(slots){return [1.5,1.2,1.1].map((v,i)=>v+slots.filter(a=>a===i+1).length*1.05);}
export function roomWalk(progress){const e=progress*progress*(3-2*progress);return {x:1.4*e,z:-1.1*e,y:progress>=1?0:Math.sin(progress*Math.PI*8)*.065,turn:-e*.35};}
