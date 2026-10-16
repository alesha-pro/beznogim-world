// Finite, bounded board-game trajectory. Bumps return from the actual contact point.
export function garageFlight(f,p){
 if(!f)return {x:0,y:0};const u=Math.max(0,Math.min(1,Number.isFinite(p)?p:0));
 if(f.outcome!=='bumped')return {x:f.range*u,y:4*f.apex*u*(1-u)};
 const contact=f.end/f.range,high=4*f.apex*contact*(1-contact);
 if(u<.65){const t=u/.65*contact;return {x:f.range*t,y:4*f.apex*t*(1-t)};}
 const t=(u-.65)/.35;return {x:f.end*(1-t),y:high*(1-t)+Math.sin(t*Math.PI)*.5};
}
