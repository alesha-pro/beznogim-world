// A visitor's dream. It never writes to the shared resident or simulates his needs.
export function createSleepDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime}) {
  const room=group([0,0,0],scene);room.name='dream-02-water-sleeps';room.visible=false;
  const rind=mat('#c39860'),cheese=mat('#e0c58b'),ink=mat('#465c63'),blue=mat('#80b9be',{metalness:.15,roughness:.35}),linen=mat('#dbd6bc');
  // The rind is an open crescent, not a sphere hiding everything inside it.
  mesh(new THREE.CylinderGeometry(3.85,3.85,.38,64,1,false,.15,Math.PI*1.42),rind,[0,-.35,0],null,room);
  mesh(new THREE.CylinderGeometry(3.72,3.72,.08,64,1,false,.15,Math.PI*1.42),cheese,[0,-.11,0],null,room);
  for(let i=0;i<13;i++){
    const a=.15+i/12*Math.PI*1.42,x=Math.sin(a)*3.65,z=Math.cos(a)*3.65;
    const wall=box([x,.48,z],[.75,1.08,.19],cheese,room);wall.rotation.y=a;
    if(i%3===0){const hole=torus([x,.48,z],.15,.048,ink,room,[Math.PI/2,0,0]);hole.rotation.set(0,a,0);}
  }
  sign('СОН / 02',[0,-.18,3.95],2.2,.38,room,{size:52});
  // A tub-shaped bed; water is an opaque thin slab inside, never a giant bubble.
  const bed=group([1.08,.12,.4],room);
  box([0,0,0],[2.55,.22,1.55],ink,bed);
  for(let x of [-1.15,1.15])for(let z of [-.63,.63])box([x,-.23,z],[.12,.5,.12],M.copper,bed);
  for(let z of [-.79,.79])box([0,.36,z],[2.72,.65,.14],linen,bed);
  for(let x of [-1.32,1.32])box([x,.38,0],[.14,.68,1.55],linen,bed);
  const water=box([0,.18,0],[2.49,.045,1.49],blue,bed);
  const pillow=sphere([-.84,.38,0],[.34,.14,.54],M.cream,bed);
  const sleeper=head.clone(true);room.add(sleeper);sleeper.scale.setScalar(.54);sleeper.position.set(.3,.83,.45);sleeper.rotation.z=-.35;
  const lids=group([0,0,0],sleeper);
  for(const x of [-.23,.23]){sphere([x,.2,.611],[.15,.11,.025],M.black,lids);box([x,.2,.64],[.2,.018,.012],M.copper,lids);}
  const cup=group([-2.05,2.35,-.38],room);
  cyl([0,0,0],.52,.56,M.cream,cup);cyl([0,.29,0],.44,.022,ink,cup);torus([.55,0,0],.24,.055,M.copper,cup,[0,0,0]);
  sign('ПУСТО',[-2.03,2.8,-.38],1.1,.28,room,{size:52});
  const steps=[];
  for(let i=0;i<7;i++){
    const g=group([-1.92+i*.33,.2+i*.29,1.45-i*.29],room);
    box([0,0,0],[.7,.13,.42],M.cream,g);
    for(let z of [-.2,.2])box([0,.07,z],[.7,.12,.05],M.copper,g);
    steps.push(g);
  }
  const droplets=Array.from({length:16},()=>sphere([0,0,0],[.07,.1,.07],blue,room));
  const ripples=Array.from({length:3},(_,i)=>{const r=torus([.65,.2,0],.23+i*.16,.012,M.mint,bed);r.scale.z=.6;return r;});
  const moon=group([-.8,3.65,-1.7],room);
  mesh(new THREE.TorusGeometry(.6,.12,8,40,Math.PI*1.6),M.light,[0,0,0],null,moon);moon.rotation.z=.55;
  const stars=[];for(let i=0;i<9;i++){const a=i*2.4;stars.push(sphere([Math.sin(a)*3,3.2+(i%3)*.28,Math.cos(a)*2],.025,M.cream,room));}
  let active=false,step=0,phase=0,trace=false;
  try{trace=JSON.parse(localStorage.getItem('beznogim-dream02-v1')||'{}').trace===true;}catch{}
  // A tiny trace on the real cellar table. Not a reward or resident property.
  const traceCup=group([26.6,-.86,.65],root);traceCup.visible=trace;
  cyl([0,0,0],.15,.2,M.cream,traceCup);cyl([0,.104,0],.125,.014,blue,traceCup);torus([.16,0,0],.07,.02,M.copper,traceCup,[0,0,0]);
  batchStatic(room,[bed,sleeper,cup,...steps,...droplets,...stars,moon]);batchStatic(bed,[water,pillow,...ripples]);batchStatic(cup,[]);batchStatic(traceCup,[]);
  steps.forEach(s=>batchStatic(s,[]));
  function enter(){active=true;step=0;phase=0;room.visible=true;root.visible=false;update(0,0);}
  function exit(){active=false;room.visible=false;root.visible=true;}
  function pour(){if(!active)return;step=step===3?0:step+1;chime(165+step*55);if(step===3){trace=true;traceCup.visible=true;try{localStorage.setItem('beznogim-dream02-v1',JSON.stringify({trace:true}));}catch{}}}
  function update(dt,time){
    if(!active)return;
    phase=THREE.MathUtils.damp(phase,step,2.4,dt);
    steps.forEach((s,i)=>{
      const f=Math.min(1,phase/2),x0=-1.92+i*.33,y0=.2+i*.29,z0=1.45-i*.29;
      // The uphill stair turns into a downhill water channel after two pours.
      s.position.set(THREE.MathUtils.lerp(x0,-1.72+i*.39,f),THREE.MathUtils.lerp(y0,1.95-i*.22,f),THREE.MathUtils.lerp(z0,-.32+i*.055,f));
      s.rotation.z=-f*.21;
    });
    water.position.y=.18+phase*.09;pillow.position.y=.38+phase*.09;
    sleeper.position.y=.83+phase*.09+Math.sin(time*.6)*.025;sleeper.rotation.z=-.35-phase*.13;
    cup.rotation.z=-Math.min(1,phase)*.45;
    droplets.forEach((d,i)=>{const u=(time*.16+i/16)%1;d.visible=phase>.05;d.position.set(-1.7+u*3,2.14-u*1.62,-.32+u*.25);d.scale.set(.07,.1+Math.sin(u*Math.PI)*.04,.07);});
    ripples.forEach((r,i)=>{r.visible=phase>.4;r.position.y=water.position.y+.034;r.scale.setScalar(1+Math.sin(time*.5+i)*.08);r.scale.z*=.6;});
    moon.rotation.z=.55+phase*.21;lids.visible=phase>1.8;
  }
  return {enter,exit,pour,update,inspect:()=>({active,step,phase,trace,roomVisible:room.visible,rootVisible:root.visible,waterY:water.position.y,sleeperY:sleeper.position.y,channel:steps.map(s=>s.position.toArray()),droplets:droplets.filter(d=>d.visible).length})};
}

// Read-only visualization of the controller's real long sleep, not another sleep timer.
export function createSleepBody({head,group,sphere,box,torus,M,mat}) {
  const nest=group([0,-.5,0],head);nest.name='resident-sleep-pillow';nest.visible=false;
  sphere([0,-.1,0],[.8,.15,.64],mat('#83afb0'),nest);
  torus([0,.08,0],.7,.025,M.mint,nest);
  const lids=group([0,0,0],head);lids.visible=false;
  for(const x of [-.23,.23]){sphere([x,.2,.611],[.15,.11,.025],M.black,lids);box([x,.2,.64],[.2,.018,.012],M.copper,lids);}
  let snapshot=null,offset=0;
  function accept(d){snapshot=d;offset=Number(d.server_time)-Date.now()/1000;}
  addEventListener('beznogim:state',({detail})=>accept(detail));
  if(window.__beznogimState)accept(window.__beznogimState);
  function update(watching){const a=snapshot?.action;nest.visible=!!watching&&a?.kind==='sleep'&&Number(a.ends)>Date.now()/1000+(Number.isFinite(offset)?offset:0);lids.visible=nest.visible;}
  return {update,inspect:()=>({visible:nest.visible,ends:snapshot?.action?.kind==='sleep'?snapshot.action.ends:null})};
}
