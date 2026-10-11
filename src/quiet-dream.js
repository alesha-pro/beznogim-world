// A visitor-only dream. No resident tools, needs or shared state are changed.
export function createQuietDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,paperBoat,batchStatic,chime}) {
  const room=group([0,0,0],scene);room.name='dream-03-silent-dock';room.visible=false;
  const stoneMat=mat('#526b79'),waterMat=mat('#375d69',{metalness:.35,roughness:.27}),paper=mat('#c7cdb3');
  cyl([0,-.45,0],4.15,.38,stoneMat,room);cyl([0,-.23,0],4,.055,waterMat,room);
  torus([0,-.18,0],4.08,.04,M.copper,room);
  // One open concrete pier, not another house or a wall across the view.
  box([-2.85,-.12,.9],[1.45,.35,2.6],M.concrete,room);
  for(let z of [-.1,.55,1.2,1.85])box([-2.85,.07,z],[1.38,.045,.025],stoneMat,room);
  for(let x of [-3.4,-2.3])rod([x,-.3,1.9],[x,.48,1.9],.035,M.copper,room);
  sign('СОН / 03',[-2.85,.13,2.4],1.6,.28,room,{size:48}).rotation.x=-Math.PI/2;
  const sleeper=head.clone(true);sleeper.position.set(-2.8,1.27,.75);sleeper.scale.setScalar(.65);room.add(sleeper);
  // Two independent whisker-pendulums hang from the quiet head.
  const whiskers=[];
  for(const side of [-1,1]){
    const w=group([side*.12,-.04,.68],sleeper);
    rod([0,0,0],[side*.64,-.2,.05],.06,M.black,w);
    sphere([side*.62,-.18,.05],[.19,.095,.07],M.black,w);
    rod([side*.58,-.18,.06],[side*.58,-.7,.06],.015,M.copper,w);
    sphere([side*.58,-.76,.06],.075,M.copper,w);batchStatic(w,[]);whiskers.push(w);
  }
  const rings=Array.from({length:3},(_,i)=>torus([-1.2+i*1.25,-.17,-.25],.72,.035,i===1?M.cream:M.copper,room));
  const reflections=Array.from({length:3},(_,i)=>torus([-1.2+i*1.25,-.165,-.25],.72,.013,paper,room));
  const pebble=mesh(new THREE.IcosahedronGeometry(.12,1),stoneMat,[-2.6,.35,1.5],null,room);
  const boat=paperBoat(room,[-1.9,-.13,-.25],.9);
  const seed=sphere([0,.53,0],[.065,.09,.065],M.light,boat);
  const tinyMoon=mesh(new THREE.TorusGeometry(.5,.09,8,40,Math.PI*1.55),M.cream,[1.6,3.7,-1.4],null,room);tinyMoon.rotation.z=.65;
  // Slender inverted pylons mark the far edge. They never enclose the scene.
  const tips=[];for(let i=0;i<5;i++){const x=-1.6+i*.85;rod([x,-.2,-2.9],[x,1.1+(i%2)*.4,-2.9],.025,stoneMat,room);tips.push(sphere([x,1.12+(i%2)*.4,-2.9],.035,M.light,room));}
  let active=false,step=0,force=1,forces=[1,1,1],lift=[0,0,0],stoneAge=0,clock=0,trace=false;
  try{trace=JSON.parse(localStorage.getItem('beznogim-dream03-v1')||'{}').trace===true;}catch{}
  const traceRing=torus([6.97,1.28,1.44],.13,.017,M.copper,root,[0,0,.2]);traceRing.visible=trace;
  const flightPoints=Array.from({length:5},()=>new THREE.Vector3());
  const curve=new THREE.CatmullRomCurve3(flightPoints);const boatPos=new THREE.Vector3(),nextPos=new THREE.Vector3();
  batchStatic(room,[sleeper,...rings,...reflections,pebble,boat,tinyMoon,...tips]);batchStatic(sleeper,whiskers);batchStatic(boat,[seed]);
  function choose(n){force=THREE.MathUtils.clamp(Math.round(Number(n)||1),1,3);}
  function enter(){active=true;step=0;forces=[1,1,1];lift=[0,0,0];stoneAge=0;clock=0;room.visible=true;root.visible=false;update(0,0);}
  function exit(){active=false;room.visible=false;root.visible=true;}
  function toss(){if(!active)return;if(step===3){step=0;forces=[1,1,1];lift=[0,0,0];clock=0;return;}forces[step]=force;step++;stoneAge=0;chime(110+force*55);if(step===3){trace=true;traceRing.visible=true;try{localStorage.setItem('beznogim-dream03-v1',JSON.stringify({trace:true}));}catch{}}}
  function update(dt,time){
    if(!active)return;clock+=Math.min(dt,.15);stoneAge+=Math.min(dt,.15);
    for(let i=0;i<3;i++){
      lift[i]=THREE.MathUtils.damp(lift[i],i<step?1:0,3,dt);
      const y=-.17+lift[i]*(.95+forces[i]*.42),r=.72+forces[i]*.12;
      rings[i].position.y=y;rings[i].rotation.set(Math.PI/2*(1-lift[i]),Math.PI/2*lift[i],0);rings[i].scale.setScalar(r/.72);
      reflections[i].scale.setScalar((r/.72)*(1+Math.sin(clock*.9+i)*.045));
      flightPoints[i+1].set(rings[i].position.x,Math.max(-.1,y),-.25);
    }
    flightPoints[0].set(-2,-.1,-.25);flightPoints[4].set(2.5,-.1,-.25);
    const u=(1-Math.cos(clock*.55))*.5;curve.getPoint(u,boatPos);curve.getPoint(Math.min(.999,u+.012),nextPos);
    boat.position.copy(boatPos);boat.rotation.z=THREE.MathUtils.clamp(Math.atan2(nextPos.y-boatPos.y,nextPos.x-boatPos.x),-.45,.45);
    boat.rotation.y=0;
    pebble.visible=step>0;const t=Math.min(1,stoneAge/1.8),i=Math.max(0,step-1);
    pebble.position.set(THREE.MathUtils.lerp(-2.5,-1.2+i*1.25,t),.35+t*(2.1+forces[i]*.35),THREE.MathUtils.lerp(1.4,-.25,t));
    pebble.rotation.y=clock*.4;
    whiskers.forEach((w,i)=>w.rotation.z=Math.sin(clock*1.2+i*Math.PI)*(.06+step*.04));
    seed.position.y=.53+Math.sin(time)*.02;
  }
  return {enter,exit,toss,choose,update,inspect:()=>({active,step,force,forces:[...forces],lift:[...lift],trace,roomVisible:room.visible,rootVisible:root.visible,boat:boat.position.toArray(),ringY:rings.map(r=>r.position.y),ringRotation:rings.map(r=>r.rotation.toArray().slice(0,3)),stone:pebble.position.toArray()})};
}
