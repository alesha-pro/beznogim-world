// Visitor-only simulation. No resident, storage, network or real people here.
export const DURATION=90, LIMITS={enemies:48,ram:80,bolts:32,sparks:32},EDGE=18;
export const UPGRADES=[
 {id:'damage',title:'двухканал',text:'RAM и чипы: +50% урона.'},
 {id:'orbit',title:'ещё одна планка',text:'+1 RAM на орбите (до 6), шире защита.'},
 {id:'clock',title:'разгон без BIOS',text:'Чипы летят на 22% чаще.'},
 {id:'magnet',title:'пылесос контекста',text:'+1.2 м сбора RAM и +25 здоровья.'},
 {id:'speed',title:'своп на колёсах',text:'+12% скорости и +20 здоровья.'}
];
export function fresh(seed=91){return {phase:'ready',time:0,seed:seed>>>0,seq:0,player:{x:0,z:0,hp:100,inv:0},enemies:[],ram:[],bolts:[],sparks:[],xp:0,need:5,level:1,kills:0,collected:0,spawn:.3,shot:0,angle:0,damage:1,orbits:2,rate:.8,magnet:2.3,speed:5,choices:[],upgrades:[],peak:0};}
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const dist=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
function random(s){s.seed=(Math.imul(s.seed,1664525)+1013904223)>>>0;return s.seed/4294967296;}
export function start(s){if(s.phase==='ready')s.phase='running';return s;}
export function pause(s){if(s.phase==='running')s.phase='paused';else if(s.phase==='paused')s.phase='running';return s;}
export function upgrade(s,id){if(s.phase!=='upgrade'||!s.choices.includes(id))return false;
 if(id==='damage')s.damage+=.5;if(id==='orbit')s.orbits=Math.min(6,s.orbits+1);
 if(id==='clock')s.rate=Math.max(.15,s.rate*.78);
 if(id==='magnet'){s.magnet=Math.min(10,s.magnet+1.2);s.player.hp=Math.min(100,s.player.hp+25);}
 if(id==='speed'){s.speed=Math.min(9,s.speed*1.12);s.player.hp=Math.min(100,s.player.hp+20);}
 s.upgrades.push(id);s.choices=[];s.phase='running';return true;
}
export function orbitPositions(s){return Array.from({length:s.orbits},(_,i)=>{const a=s.angle+i*Math.PI*2/s.orbits,r=2.1+(s.orbits-2)*.16;return {x:s.player.x+Math.cos(a)*r,z:s.player.z+Math.sin(a)*r,a};});}
function kill(s,e){e.hp=0;s.kills++;
 if(s.ram.length<LIMITS.ram)s.ram.push({id:++s.seq,x:e.x,z:e.z});else{const r=s.ram.reduce((a,b)=>dist(a,s.player)>dist(b,s.player)?a:b);r.x=e.x;r.z=e.z;}
 if(s.sparks.length<LIMITS.sparks)s.sparks.push({x:e.x,z:e.z,life:.55,kind:e.kind});
}
export function tick(s,dt,input={x:0,y:0}){
 if(s.phase!=='running')return s;
 dt=clamp(Number.isFinite(dt)?dt:0,0,.05);if(!dt)return s;
 s.time=Math.min(DURATION,s.time+dt);s.angle=(s.angle+dt*2.6)%(Math.PI*2);
 const p=s.player;let x=Number.isFinite(input.x)?input.x:0,y=Number.isFinite(input.y)?input.y:0;const len=Math.hypot(x,y);if(len>1){x/=len;y/=len;}
 // Screen-aligned movement through the fixed 45-degree isometric camera.
 p.x=clamp(p.x+(x+y)*Math.SQRT1_2*s.speed*dt,-EDGE,EDGE);
 p.z=clamp(p.z+(y-x)*Math.SQRT1_2*s.speed*dt,-EDGE,EDGE);
 p.inv=Math.max(0,p.inv-dt);const wave=Math.min(3,1+Math.floor(s.time/30));
 s.spawn-=dt;if(s.spawn<=0){s.spawn+=.78/(1+(wave-1)*.58);if(s.enemies.length<LIMITS.enemies){const a=random(s)*Math.PI*2,r=11+random(s)*3;
 s.enemies.push({id:++s.seq,x:clamp(p.x+Math.cos(a)*r,-EDGE-1,EDGE+1),z:clamp(p.z+Math.sin(a)*r,-EDGE-1,EDGE+1),hp:2+wave,kind:s.seq%2,hit:0});}}
 s.shot-=dt;
 if(s.shot<=0&&s.enemies.length){s.shot=s.rate;const e=s.enemies.reduce((a,b)=>dist(a,p)<dist(b,p)?a:b);const d=dist(e,p)||1;
 if(s.bolts.length<LIMITS.bolts)s.bolts.push({x:p.x,z:p.z,vx:(e.x-p.x)/d*14,vz:(e.z-p.z)/d*14,life:1.5});}
 for(const b of s.bolts){b.x+=b.vx*dt;b.z+=b.vz*dt;b.life-=dt;for(const e of s.enemies){if(e.hp>0&&b.life>0&&dist(e,b)<.8){e.hp-=2*s.damage;b.life=0;if(e.hp<=0)kill(s,e);break;}}}
 const orbits=orbitPositions(s);
 for(const e of s.enemies){if(e.hp<=0)continue;const d=dist(e,p)||1,v=(1.55+wave*.28+(e.kind?.22:0))*dt;e.x+=(p.x-e.x)/d*v;e.z+=(p.z-e.z)/d*v;e.hit=Math.max(0,e.hit-dt);
 if(!e.hit&&orbits.some(o=>dist(o,e)<.95)){e.hp-=s.damage;e.hit=.4;if(e.hp<=0){kill(s,e);continue;}}
 if(dist(e,p)<.85&&p.inv<=0){p.hp=Math.max(0,p.hp-12);p.inv=.7;}}
 for(const r of s.ram){let d=dist(r,p);if(d<s.magnet){const v=Math.min(d,dt*10);r.x+=(p.x-r.x)/(d||1)*v;r.z+=(p.z-r.z)/(d||1)*v;}if(dist(r,p)<.6){r.taken=true;s.xp++;s.collected++;}}
 s.ram=s.ram.filter(r=>!r.taken);s.enemies=s.enemies.filter(e=>e.hp>0);s.bolts=s.bolts.filter(b=>b.life>0);s.sparks=s.sparks.filter(a=>(a.life-=dt)>0);s.peak=Math.max(s.peak,s.enemies.length);
 if(p.hp<=0){s.phase='lost';return s;}
 if(s.time>=DURATION){s.phase='won';return s;}
 if(s.xp>=s.need){s.xp-=s.need;s.level++;s.need+=3;s.phase='upgrade';const ids=UPGRADES.filter(u=>u.id!=='orbit'||s.orbits<6).map(u=>u.id),offset=Math.floor(random(s)*ids.length);s.choices=[0,1,2].map(i=>ids[(i+offset)%ids.length]);}
 return s;
}
