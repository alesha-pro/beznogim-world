export const LEVELS=[
 {mirrors:[[1,2],[1,0],[4,0],[4,4]],start:[-1,2],dir:0,goal:[-1,4],solution:[0,0,1,0]},
 {mirrors:[[1,2],[1,4],[4,4],[4,1]],start:[-1,2],dir:0,goal:[-1,1],solution:[1,1,0,1]},
 {mirrors:[[3,2],[3,0],[0,0],[0,4]],start:[5,2],dir:2,goal:[5,4],solution:[1,1,0,1]}
];
export function fresh(){return {level:0,mirrors:[1,1,1,1],flags:[false,false,false],paper:0,repeat:false,won:false};}
export function normalize(raw){const s=fresh();if(!raw||typeof raw!=='object')return s;s.level=Number.isInteger(raw.level)&&raw.level>=0&&raw.level<3?raw.level:0;s.mirrors=Array.isArray(raw.mirrors)&&raw.mirrors.length===4&&raw.mirrors.every(v=>v===0||v===1)?raw.mirrors.slice():s.mirrors;s.paper=Number.isInteger(raw.paper)?Math.min(6,Math.max(0,raw.paper)):0;s.flags=Array.isArray(raw.flags)&&raw.flags.length===3?raw.flags.map(v=>v===true):s.flags;s.won=raw.won===true&&s.flags[s.level]&&trace(s.level,s.mirrors).ok;return s;}
export function trace(level,mirrors){const l=LEVELS[level],pts=[l.start.slice()],dirs=[[1,0],[0,1],[-1,0],[0,-1]];let [x,z]=l.start,d=l.dir;const seen=new Set();for(let n=0;n<120;n++){x+=dirs[d][0];z+=dirs[d][1];pts.push([x,z]);if(x<0||x>4||z<0||z>4)return {points:pts,ok:x===l.goal[0]&&z===l.goal[1],exit:[x,z]};const key=[x,z,d].join();if(seen.has(key))return {points:pts,ok:false,loop:true,exit:[x,z]};seen.add(key);const at=l.mirrors.findIndex(p=>p[0]===x&&p[1]===z);if(at>=0)d=mirrors[at]===0?3-d:d^1;}throw Error('ray limit');}
export function step(s,action,arg){let n={...s,mirrors:s.mirrors.slice(),flags:s.flags.slice()},shot=null;
 if(action==='turn'&&!s.won&&Number.isInteger(arg)&&arg>=0&&arg<4)n.mirrors[arg]^=1;
 if(action==='repeat')n.repeat=!s.repeat;
 if(action==='stop')n.repeat=false;
 if(action==='clean')n.paper=0;
 if(action==='reset'){n.mirrors=[1,1,1,1];n.repeat=false;n.won=false;n.flags[n.level]=false;}
 if(action==='all')n=fresh();
 if(action==='next'&&s.won&&s.level<2){n.level++;n.mirrors=[1,1,1,1];n.won=false;n.repeat=false;}
 if(action==='flash'&&!s.won){shot={...trace(s.level,s.mirrors),repeat:s.repeat};if(shot.ok&&!s.repeat){n.won=true;n.flags[n.level]=true;}else{n.paper=Math.min(6,s.paper+1);if(n.paper===6)n.repeat=false;}}
 return {state:n,shot};}
export function rayPose(points,p){const v=Math.max(0,Math.min(1,Number.isFinite(p)?p:0))*(points.length-1),i=Math.min(points.length-2,Math.floor(v)),t=v-i;return [points[i][0]+(points[i+1][0]-points[i][0])*t,points[i][1]+(points[i+1][1]-points[i][1])*t];}
