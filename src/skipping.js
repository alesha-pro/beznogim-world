import * as THREE from 'three';
import run from './drydock-core.js';
export function createSkipping({root,mat,group,box,sphere,cyl,rod,torus,sign,changed}){
 const house=group([12,-.35,4.5],root);house.name='skipping-water';
 const cream=mat('#c9cbb1'),dark=mat('#3c5756'),copper=mat('#b77e51'),water=mat('#729e9a',{roughness:.3,metalness:.2}),stoneMat=mat('#686c65');
 box([0,-.16,0],[9.4,.22,3.8],dark,house);box([0,.04,0],[9.12,.08,3.5],water,house);
 for(const z of [-1.84,1.84])box([0,.12,z],[9.4,.19,.12],cream,house);
 for(const x of [-4.64,4.64])box([x,.12,0],[.12,.19,3.8],cream,house);
 for(const x of [-4.4,0,4.4])for(const z of [-1.6,1.6])rod([x,-1.2,z],[x,-.2,z],.07,copper,house);
 // A short side jetty, attached to the original paper-boat dock, not a new parcel.
 for(let i=0;i<10;i++)box([7.55,-.02,2.8+i*.23],[.75,.12,.2],copper,root);
 box([-4.2,.22,.72],[.6,.45,.55],cream,house);
 for(let i=0;i<5;i++)sphere([-4.25+(i%2)*.17,.48+Math.floor(i/2)*.06,.72],[.16,.045,.1],stoneMat,house);
 sign('КАМЕШКИ',[-3.7,.38,1.9],1.7,.33,house,{size:42,bg:'#3c5756',fg:'#f2dfb6'});
 const marks=[];for(let i=0;i<6;i++){const m=sphere([-2.7+i*.57,.28,1.58],[.15,.05,.1],copper,house);m.visible=false;marks.push(m);}
 const stone=sphere([-4,.3,0],[.14,.045,.1],stoneMat,house);stone.name='skipping-stone';stone.visible=false;
 const rings=[];for(let i=0;i<7;i++){const m=new THREE.MeshBasicMaterial({color:'#ffedac',transparent:true,opacity:0,depthWrite:false});const ring=torus([0,.1,0],1,.028,m,house,[Math.PI/2,0,0]);ring.visible=false;ring.castShadow=false;rings.push(ring);}
 let local=null;try{local=JSON.parse(localStorage.getItem('beznogim-skipping-v1')||'null');}catch{}
 if(!local||typeof local!=='object'||Array.isArray(local))local=null;
 let live=window.__beznogimState?.mechanics?.drydock?.public?.shore||null,sandbox=!live,current=null,drawKey='',lastSecond=-1,replay=null;
 function invoke(mode,args={}){const r=run({mode,tool:'launch',args,state:local,now:Date.now()/1000,world:{position:[7.8,.6,4.5]}});local=r.state;try{localStorage.setItem('beznogim-skipping-v1',JSON.stringify(local));}catch{}return r;}
 invoke('migrate');
 const ui=document.createElement('section');ui.id='skipping-controls';ui.hidden=true;
 ui.innerHTML=`<output id="skipping-readout"></output><label>сила <select id="skipping-strength" aria-label="Сила броска">${[1,2,3,4,5].map(n=>`<option value="${n}" ${n===3?'selected':''}>${n}</option>`).join('')}</select></label><label>угол <select id="skipping-angle" aria-label="Угол броска"><option value="1">низко</option><option value="2" selected>полого</option><option value="3">высоко</option></select></label><div class="skipping-row"><button id="skipping-throw">пустить камень</button><button id="skipping-replay">посмотреть ещё</button></div><ol id="skipping-album" aria-label="Последние шесть бросков"></ol><button id="skipping-sandbox">своя песочница</button><small>Сила 1–5 · пологий угол даёт больше отскоков. Упрощённая игровая модель, не настоящая физика. Камни здесь не кончаются.</small>`;
 document.querySelector('#focus-object').before(ui);
 ui.querySelector('#skipping-throw').onclick=()=>{if(!sandbox)return;replay=null;invoke('action',{shore:'throw',strength:Number(ui.querySelector('#skipping-strength').value),angle:Number(ui.querySelector('#skipping-angle').value)});drawKey='';update();changed();};
 ui.querySelector('#skipping-sandbox').onclick=()=>{sandbox=live?!sandbox:true;replay=null;drawKey='';update();changed();};
 ui.querySelector('#skipping-replay').onclick=()=>{const r=current?.last;if(r){replay={...r,started:Date.now()/1000,duration:r.ends-r.started};update();}};
 function update(){const now=Date.now()/1000;if(sandbox&&Math.floor(now)!==lastSecond){invoke('tick');lastSecond=Math.floor(now);}current=!sandbox&&live?live:run({mode:'migrate',state:local,now}).public.shore;
 const shot=replay||current.active||current.last;let t=shot?now-shot.started:99;if(replay&&t>replay.duration){replay=null;}
 const flying=shot&&t>=0&&t<shot.contacts[shot.contacts.length-1].t;
 stone.visible=!!flying;
 if(flying){const contacts=[{t:0,x:0},...shot.contacts];let i=contacts.findIndex(c=>c.t>t);i=Math.max(1,i);const a=contacts[i-1],b=contacts[i],f=(t-a.t)/(b.t-a.t);stone.position.set(-4+a.x+(b.x-a.x)*f,.13+Math.sin(f*Math.PI)*(.6*Math.pow(.64,i-1)),0);stone.rotation.y=t*9;}
 rings.forEach((ring,i)=>{const c=shot?.contacts[i],age=c?t-c.t:-1;ring.visible=age>=0&&age<2.5;if(ring.visible){ring.position.x=-4+c.x;ring.scale.setScalar(.07+age*.32);ring.material.opacity=(1-age/2.5)*.95;}});
 marks.forEach((m,i)=>{const r=current.history[i];m.visible=!!r;if(r)m.scale.x=.5+r.skips*.22;});
 const a=current.active,phase=a?(now>=a.ends?'awaiting':now>=a.started+a.contacts[a.contacts.length-1].t?'rings':'flight'):'quiet';
 const key=JSON.stringify([current,sandbox,phase]);if(key===drawKey)return;drawKey=key;
 const last=current.last,prev=current.history[current.history.length-2];
 const observed=current.active||last;if(!sandbox&&observed){ui.querySelector('#skipping-strength').value=String(observed.strength);ui.querySelector('#skipping-angle').value=String(observed.angle);}
 ui.querySelector('#skipping-sandbox').disabled=!live;
 ui.querySelector('#skipping-readout').textContent=(sandbox?'твои камешки':'камешки жителя')+' · '+(current.active?({flight:'летит…',rings:'круги расходятся…',awaiting:'круги затихли · ждём запись тика'}[phase]):last?last.skips+' '+(last.skips===1?'отскок':last.skips<5?'отскока':'отскоков')+' · '+last.distance.toFixed(1)+' м':'вода тихая')+(prev&&last?'\nк прошлому: '+(last.skips-prev.skips>=0?'+':'')+(last.skips-prev.skips)+' отскоков · '+(last.distance-prev.distance>=0?'+':'')+(last.distance-prev.distance).toFixed(1)+' м':'');
 const list=ui.querySelector('#skipping-album');list.replaceChildren();for(const r of [...current.history].reverse()){const li=document.createElement('li');li.textContent='#'+r.id+' · сила '+r.strength+' / '+['','низко','полого','высоко'][r.angle]+' → '+r.skips+' / '+r.distance.toFixed(1)+' м';list.append(li);}
 for(const b of ui.querySelectorAll('select,#skipping-throw'))b.disabled=!sandbox||!!current.active;
 ui.querySelector('#skipping-replay').disabled=!last||!!current.active;ui.querySelector('#skipping-sandbox').textContent=sandbox&&live?'смотреть жителя':'своя песочница';
 }
 window.addEventListener('beznogim:state',({detail})=>{const d=detail.mechanics?.drydock?.public?.shore;if(d){if(!live)sandbox=false;live=d;drawKey='';}});update();
 function geometryPoints(){const ps=[];house.updateWorldMatrix(true,true);house.traverse(o=>{if(!o.isMesh||!o.visible)return;const v=o.geometry.attributes.position;for(let i=0;i<v.count;i++)ps.push(new THREE.Vector3().fromBufferAttribute(v,i).applyMatrix4(o.matrixWorld));});return ps;}
 return {house,controls:ui,update,geometryPoints,card:()=>({action:'камешки у причала',description:'Пусти плоский камень, дождись кругов и сравни броски. Альбом сохраняет шесть последних результатов. '+(sandbox?'Своя песочница.':'Настоящие броски жителя; свои отдельно.')}),inspect:()=>({sandbox,current,stone:stone.visible?stone.position.clone().add(house.position).toArray():null,rings:rings.filter(r=>r.visible).length,replay:!!replay,marks:marks.filter(m=>m.visible).length})};
}
