// A visitor's dream. Neither scientific measurement nor the resident's sleep.
export function freshMeterDream(){return {target:'drop',phase:'ready',progress:0,attempts:0,trace:false};}
export function chooseMeterTarget(s,target){if(!['ready','refused'].includes(s.phase)||!['drop','self'].includes(target))return s;return {...s,target,phase:'ready',progress:0};}
export function actMeter(s){
 if(['measuring','unfolding','climbing'].includes(s.phase))return s;
 if(s.phase==='inside')return freshMeterDream();
 if(s.phase==='stairs')return {...s,phase:'climbing',progress:0};
 return {...s,phase:s.target==='drop'?'measuring':'unfolding',progress:0,attempts:s.attempts+1};
}
export function advanceMeter(s,dt){if(!['measuring','unfolding','climbing'].includes(s.phase))return s;
 const safe=Number.isFinite(dt)?Math.max(0,Math.min(dt,.15)):0;
 const progress=Math.min(1,s.progress+safe/(s.phase==='climbing'?4:s.phase==='unfolding'?2.5:1.8));
 const phase=progress<1?s.phase:s.phase==='measuring'?'refused':s.phase==='unfolding'?'stairs':'inside';
 return {...s,progress,phase,trace:s.trace||phase==='inside'};
}
