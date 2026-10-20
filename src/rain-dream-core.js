// A visitor's paper hour. It never advances or interrupts the resident's sleep.
export const freshRainDream=()=>({phase:'folding',folds:[false,false,false],water:[0,0,0],progress:0,open:0});
export const rainBusy=s=>s.phase==='raining'||s.phase==='turning';
export function foldRain(s,i){return s.phase==='folding'&&Number.isInteger(i)&&i>=0&&i<3?{...s,folds:s.folds.map((v,k)=>k===i?!v:v)}:s;}
export function actRain(s){return s.phase==='shelter'?freshRainDream():s.phase==='folding'?{...s,phase:'raining',progress:0}:s;}
export function advanceRain(s,dt){if(!rainBusy(s)||!Number.isFinite(dt)||dt<=0)return s;const d=Math.min(.1,dt);if(s.phase==='turning'){const open=Math.min(1,s.open+d/3);return {...s,open,phase:open>=1?'shelter':'turning'};}const progress=Math.min(1,s.progress+d/6),water=s.water.map((v,i)=>s.folds[i]?Math.max(v,progress):v);return {...s,water,progress,phase:progress<1?'raining':water.every(v=>v===1)?'turning':'folding'};}
export function rainPose(s){const e=s.open*s.open*(3-2*s.open);return {lift:e*2.8,flip:e*Math.PI,clockY:4.3-e*3.5,clockScale:1-e*.65,clockTilt:-e*Math.PI/2,wing:e*.65,hand:s.progress*Math.PI*2,reverse:e};}
export function rainParticle(s,i,time){const lane=i%3,k=Math.floor(i/3),u=s.phase==='raining'?(s.progress*2+k/12)%1:(time*.3+k/12)%1,x=(lane-1)*2.4,catching=s.folds[lane],reverse=s.open;let p;if(u<.45){const q=u/.45;p=[x,4.5-q*2,-.65+q*.65];}else{const q=(u-.45)/.55;p=[x+(catching?-x*.55:Math.sign(x||1)*1.2)*q,2.5-q*2,catching?q*1.75:-q*1.7];}if(reverse>0){p=[(lane-1)*.9+Math.sin(u*Math.PI*2)*.15,.6+u*3.9,1.5-u*2];}return p;}
