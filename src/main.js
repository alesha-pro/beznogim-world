import { createSpores } from './spores.js';
import { createFocusDream } from './focus-dream.js';
import { createBeacon } from './beacon.js';
import { createAbsenceDream } from './absence-dream.js';
import { createScale } from './scale.js';
import { createRoomDream } from './room-dream.js';
import { createEgo } from './ego.js';
import { createRainDream } from './rain-dream.js';
import { createSeams } from './seams.js';
import { createStill } from './still.js';
import { createFork } from './fork.js';
import { createGarage } from './garage.js';
import { createQuotes } from './quotes.js';
import { createDash } from './dash.js';
import { createDrydock } from './drydock.js';
import { createBench } from './bench.js';
import { createAmnesty } from './amnesty.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import './style.css';
import { createDockLife } from './dock-life.js';
import { createResident } from './resident.js';
import { createTerritory } from './territory.js';
import { createGreenhouse } from './greenhouse.js';
import { createSleepDream, createSleepBody } from './sleep-dream.js';
import { createEarDream } from './ear-dream.js';
import { createTorchDream } from './torch-dream.js';
import { createPocketDream } from './pocket-dream.js';
import { createCloudDream } from './cloud-dream.js';
import { createMeterDream } from './meter-dream.js';
import { createRoofDream } from './roof-dream.js';
import { createQuietDream } from './quiet-dream.js';
import { createCellar } from './cellar.js';
import { createProjectedMarkers } from './projected-markers.js';
import { installUILayout } from './ui-layout.js';
import './ui-layout.css';

// Everything in the yard is made here. No remote assets, no telemetry.
const $ = s => document.querySelector(s);
const mobile = () => innerWidth < 700;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let saved={};try{saved=JSON.parse(localStorage.getItem('beznogim-yard-v1')||'{}')||{}}catch{}
const state={loop:0,roof:null,running:!!saved.running,harvest:Math.min(99,Math.max(0,Number(saved.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(saved.dockTrips)||0))),dockPending:saved.dockPending===true,radio:0,markers:true,selected:null,sound:false};
// null follows the yard; an explicit manual choice wins over automatic opening.
// As before, roof choices last this visit only (not stored with harvest/finds).
function roofIsOpen(){return state.roof===null ? state.running||state.loop>0 : !!state.roof;}
function persist(){try{localStorage.setItem('beznogim-yard-v1',JSON.stringify({running:state.running,harvest:state.harvest,dockTrips:state.dockTrips,dockPending:state.dockPending}))}catch{}}
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,mobile()?1.5:2));renderer.setSize(innerWidth,innerHeight,false);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;
$('#world').append(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color('#182e32');scene.fog=new THREE.FogExp2('#182e32',.0008);
const camera=new THREE.OrthographicCamera(-10,10,10,-10,.1,600);
const target=new THREE.Vector3(0,1.0,0);camera.position.set(20,20,24);camera.lookAt(target);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.copy(target);controls.enableDamping=true;controls.enableRotate=false;controls.enablePan=true;controls.minZoom=.075;controls.maxZoom=2.5;controls.screenSpacePanning=false;controls.mouseButtons.LEFT=THREE.MOUSE.PAN;controls.mouseButtons.RIGHT=THREE.MOUSE.PAN;controls.touches.ONE=THREE.TOUCH.PAN;controls.touches.TWO=THREE.TOUCH.DOLLY_PAN;
scene.add(new THREE.HemisphereLight('#d9eedc','#334d53',2.3));
const sun=new THREE.DirectionalLight('#ffe2ac',3.3);sun.position.set(-7,14,6);sun.castShadow=true;sun.shadow.mapSize.set(mobile()?512:1024,mobile()?512:1024);Object.assign(sun.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});sun.shadow.bias=-.0004;sun.shadow.normalBias=.025;scene.add(sun);
const rim=new THREE.DirectionalLight('#8ad5d8',1.3);rim.position.set(5,7,-8);scene.add(rim);
const root=new THREE.Group();scene.add(root);
const materials={};
function mat(color,opts={}){const key=color+JSON.stringify(opts);return materials[key] ||= new THREE.MeshStandardMaterial({color,roughness:.8,...opts});}
const C={cream:'#d2d1b7',edge:'#7b9a8c',concrete:'#95aaa0',dark:'#263b3c',metal:'#345555',rust:'#bb714f',copper:'#cd9a5e',soil:'#495441',leaf:'#709574',sage:'#b1c08e',black:'#162f32',yellow:'#ffc875',purple:'#79649a',white:'#e3e3ca'};
const M={concrete:mat(C.concrete),cream:mat(C.cream),dark:mat(C.dark),metal:mat(C.metal,{metalness:.5,roughness:.4}),copper:mat(C.copper,{metalness:.6,roughness:.35}),rust:mat(C.rust),black:mat(C.black),leaf:mat(C.leaf),light:mat('#ffd591',{emissive:'#ffb85a',emissiveIntensity:1.6}),mint:mat('#b8e3bd',{emissive:'#82c8a7',emissiveIntensity:.5})};
const geometries={box:new THREE.BoxGeometry(1,1,1),sphere:new THREE.SphereGeometry(1,12,8),ico:new THREE.IcosahedronGeometry(1,1),cyl:new THREE.CylinderGeometry(1,1,1,16),cone:new THREE.ConeGeometry(1,1,8)};
function mesh(geo,m,p,s,parent=root){const o=new THREE.Mesh(geo,m);if(p)o.position.set(...p);if(s)o.scale.set(...s);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
const box=(p,s,m,parent=root)=>mesh(geometries.box,m,p,s,parent);
const sphere=(p,s,m,parent=root)=>mesh(geometries.sphere,m,p,Array.isArray(s)?s:[s,s,s],parent);
const cyl=(p,r,h,m,parent=root)=>mesh(geometries.cyl,m,p,[r,h,r],parent);
function rounded(p,s,m,parent=root,r=.08){return mesh(new RoundedBoxGeometry(...s,1,r),m,p,null,parent)}
function group(p=[0,0,0],parent=root){const g=new THREE.Group();g.position.set(...p);parent.add(g);return g;}
function tube(points,r,m,parent=root){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,Math.max(12,points.length*6),r,6,false),m,null,null,parent)}
function rod(a,b,r,m,parent=root){const v1=new THREE.Vector3(...a),v2=new THREE.Vector3(...b),d=v2.clone().sub(v1);const o=cyl(v1.clone().add(v2).multiplyScalar(.5).toArray(),r,d.length(),m,parent);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return o;}
function torus(p,r,t,m,parent=root,rotation=[Math.PI/2,0,0]){const o=mesh(new THREE.TorusGeometry(r,t,6,40),m,p,null,parent);o.rotation.set(...rotation);return o;}
function sign(text,p,w,h,parent=root,opts={}){const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle=opts.bg||'#304b47';ctx.fillRect(0,0,512,128);ctx.strokeStyle=opts.fg||'#e4dfc8';ctx.lineWidth=2;ctx.strokeRect(12,12,488,104);ctx.fillStyle=opts.fg||'#e4dfc8';ctx.font=`${opts.size||48}px monospace`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,66);const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;const o=mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}),p,null,parent);o.castShadow=false;return o;}
let seed=179;function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
// Procedural plaster, not a borrowed texture.
const plaster=document.createElement('canvas');plaster.width=plaster.height=256;const pc=plaster.getContext('2d');pc.fillStyle='#b4bcaa';pc.fillRect(0,0,256,256);for(let i=0;i<5000;i++){pc.fillStyle=`rgba(${rand()>.5?'60,82,64':'235,229,201'},${rand()*.08})`;pc.fillRect(rand()*256,rand()*256,1+rand()*3,1+rand()*3)}const pt=new THREE.CanvasTexture(plaster);pt.wrapS=pt.wrapT=THREE.RepeatWrapping;pt.repeat.set(5,5);pt.colorSpace=THREE.SRGBColorSpace;
const floorMat=mat('#c2c6b1',{map:pt,roughness:.97});
function slab(points,y,depth,m,parent=root){const shape=new THREE.Shape();points.forEach(([x,z],i)=>i?shape.lineTo(x,-z):shape.moveTo(x,-z));shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:false});geo.rotateX(-Math.PI/2);geo.translate(0,y-depth,0);return mesh(geo,m,null,null,parent)}
const outline=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];
slab(outline,0,.82,M.concrete);slab(outline,.06,.14,floorMat);
slab(outline.map(([x,z])=>[x*.97,z*.97]),-.8,.6,mat('#47665e'));
// Exposed foundation layers, veins and dangling pipes.
for(let i=0;i<28;i++){const x=-5.4+rand()*10.9,z=rand()>.5?5.15:-5.2;const o=mesh(geometries.ico,mat(i%3? '#557469':'#668477'),[x,-1.15-rand()*.5,z],[.25+rand()*.8,.2+rand()*.55,.35+rand()*.3]);o.rotation.y=rand()*6;}
for(let i=0;i<7;i++){const x=-4.6+i*1.25;box([x,-.37,5.61],[.48,.19,.025],i%2?M.copper:M.dark);if(i%2===0)tube([[x,-.5,5.5],[x,-1.4,5.8],[x+.4,-2,5.4],[x+.3,-2.7,5.2]],.055,M.metal)}
sign('ТИХИЙ ХОД / 001',[1.0,-.34,5.64],2.8,.35,root,{size:32});
// Warm industrial workshop, deliberately open to the courtyard.
const workshop=group([-3.2,.08,-2.5]);
const roof=group([0,0,0],workshop);
box([0,.08,0],[4.5,.15,3.6],M.dark,workshop);box([0,1.2,-1.68],[4.5,2.4,.18],M.cream,workshop);box([-2.15,1,0],[.18,2,3.6],M.cream,workshop);
for(let i=0;i<5;i++){box([-1.65+i*.8,1.15,-1.55],[.035,2.2,.02],M.concrete,workshop);box([-1.65+i*.8,1.7,-1.55],[.65,.6,.04],M.metal,workshop);for(let j=0;j<3;j++)box([-1.88+i*.8+j*.21,1.7,-1.51],[.017,.55,.02],M.copper,workshop)}
box([0,2.47,-.2],[4.8,.14,3.7],M.rust,roof);
for(let i=0;i<23;i++){const beam=box([-2.28+i*.2,2.56,-.2],[.035,.045,3.7],mat('#d09062'),roof);beam.rotation.x=-.015;}
box([0,2.35,1.62],[4.8,.14,.18],M.dark,workshop);
rod([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,M.copper,workshop);rod([2.3,.12,1.62],[2.3,2.4,1.62],.055,M.copper,workshop);
sign('МАСТЕРСКАЯ',[0,2.34,1.74],2.15,.34,workshop,{size:37});
// Bench, drawers and old displays.
box([.1,.85,-.84],[3.8,.13,.87],M.rust,workshop);
for(const x of [-1.5,1.65])box([x,.44,-.84],[.12,.85,.65],M.metal,workshop);
for(let i=0;i<3;i++){box([-1.15+i*.95,.51,-.85],[.82,.47,.75],M.concrete,workshop);box([-1.15+i*.95,.5,-.44],[.18,.04,.03],M.copper,workshop)}
for(let i=0;i<6;i++)box([-1.6+i*.48,2.07,-1.48],[.28,.16+rand()*.16,.17],mat(['#9fba95','#cb9b70','#667f71'][i%3]),workshop);
// A stool and coil of cable.
cyl([.0,.5,.7],.32,.12,M.rust,workshop);for(let a=0;a<3;a++){let x=Math.cos(a*2.09)*.22,z=Math.sin(a*2.09)*.22+.7;rod([x,.06,z],[x,.5,z],.04,M.metal,workshop)}
for(let i=0;i<4;i++)torus([-1.5,.06,1],.3-i*.045,.025,M.black,workshop);
cyl([-1.5,3,-.9],.16,.9,M.metal,roof);cyl([-1.5,3.47,-.9],.24,.08,M.rust,roof);
box([1.4,2.9,-.4],[.8,.5,.6],M.concrete,roof);for(let i=0;i<5;i++)box([1.1+i*.15,2.94,-.085],[.035,.32,.03],M.dark,roof);
const workshopLight=new THREE.PointLight('#ffca86',5,5,2);workshopLight.position.set(-3,1.7,-1.1);root.add(workshopLight);
// Central carpet of paving, seam lines and tiny weeds.
for(let x=-1.4;x<3;x+=.79)for(let z=-.65;z<3.1;z+=.79){const tile=rounded([x,.10,z],[.74,.05,.74],mat(rand()>.3?'#b3baa6':'#a5b5a4'),root,.018);tile.rotation.y=(rand()-.5)*.035;}
for(let i=0;i<95;i++){let x=-6+rand()*12,z=-5.1+rand()*10.3;if(z>-4.4&&z<.7&&x<-1.0)continue;if(z>2.3&&x>2)continue;const o=mesh(geometries.cone,M.leaf,[x,.1,z],[.022,.12+rand()*.12,.022]);o.rotation.z=(rand()-.5)*.7;}
// Canal along the front right. Its surface is a local animated shader.
const waterMat=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:`varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}`,side:THREE.DoubleSide});
box([3.7,.12,3.6],[4.9,.24,2.7],M.dark);mesh(new THREE.PlaneGeometry(4.5,2.4),waterMat,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;
for(const z of [2.24,4.96])box([3.7,.29,z],[5,.38,.16],M.cream);for(const x of [1.18,6.2])box([x,.29,3.6],[.16,.38,2.85],M.cream);
// Low bridge with uneven boards and rope handrail.
for(let i=0;i<13;i++)box([1.85,.5,2.15+i*.235],[1.08,.09,.22],mat(i%2?'#ae9770':'#bea67d'));
for(const z of [2.12,3.45,4.98])for(const x of [1.31,2.4])cyl([x,.88,z],.045,.8,M.copper);
for(const x of [1.31,2.4])tube([[x,1.24,2.12],[x,1.1,2.8],[x,1.24,3.45],[x,1.1,4.2],[x,1.24,4.98]],.026,M.cream);
// Water spills off the foundation as quiet segmented curtains.
const falls=[];for(let i=0;i<6;i++){let o=box([4.0+i*.095,-1.25,5.56],[.055,2.4,.03],mat('#74b8a7',{transparent:true,opacity:.4,emissive:'#468678',emissiveIntensity:.2}));falls.push(o)}
for(let i=0;i<4;i++)box([3.96+i*.17,.31,5.31],[.055,.08,.6],M.dark);
// Analog machine: a real pendulum wave sculpture, not a pretend benchmark.
const engine=group([3.7,.1,-2.6]);
rounded([0,.14,0],[3.7,.27,3.5],M.cream,engine,.09);
for(const x of [-1.55,1.55]){box([x,1.76,0],[.17,3.25,.2],M.metal,engine);box([x,.38,0],[.45,.2,.6],M.copper,engine);rod([x,.36,-1.2],[x,2.9,0],.045,M.copper,engine);rod([x,.36,1.2],[x,2.9,0],.045,M.copper,engine)}
box([0,3.38,0],[3.5,.18,.26],M.copper,engine);
const arch=torus([0,2.7,-.5],1.83,.035,M.copper,engine,[0,0,0]);arch.scale.y=.85;
const pendulums=[];for(let i=0;i<5;i++){const p=group([-1.18+i*.59,3.24,0],engine);const len=1.8+i*.12;rod([0,0,-.08],[0,-len,0],.015,M.dark,p);rod([0,0,.08],[0,-len,0],.015,M.dark,p);sphere([0,-len,0],.205,M.copper,p);torus([0,-len,0],.211,.012,M.light,p,[0,0,0]);pendulums.push({group:p,len,phase:i});}
box([0,.6,1.3],[1.45,.8,.4],M.metal,engine);sign('КАЧАЕТСЯ',[0,.69,1.513],1.2,.24,engine,{size:40});
const gauge=cyl([-.43,.97,1.3],.19,.07,M.cream,engine);gauge.rotation.x=Math.PI/2;const needle=box([-.43,.99,1.342],[.015,.22,.008],M.rust,engine);needle.rotation.z=-.7;
const engineLamp=sphere([.53,.93,1.52],.09,M.light,engine);
const wheel=group([.15,.4,1.59],engine);torus([0,0,0],.19,.023,M.rust,wheel,[0,0,0]);for(let i=0;i<3;i++)rod([0,0,0],[Math.sin(i*2.09)*.18,Math.cos(i*2.09)*.18,0],.014,M.rust,wheel);
// Brass wires lead to three observatory lamps.
tube([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,M.copper);
const yardLamps=[];function lantern(x,z,height=1.5){cyl([x,height/2,z],.038,height,M.metal);box([x,height,z],[.27,.11,.27],M.dark);box([x,height-.18,z],[.17,.25,.17],M.light);box([x,height-.34,z],[.25,.08,.25],M.copper);const light=new THREE.PointLight('#ffbe70',1.8,3);light.position.set(x,height-.16,z);yardLamps.push(light)}
lantern(-5.9,3.9,1.3);lantern(.3,-4.8,1.7);lantern(5.8,1.25,1.35);
// Vegetable beds. A little unreasonable, like every proper garden.
const garden=group([-3.6,.08,3.55]);const vegetables=[];
for(let row=0;row<2;row++){const z=-.65+row*1.5;rounded([0,.14,z],[3.6,.3,1.14],M.rust,garden,.06);box([0,.305,z],[3.36,.04,.92],mat(C.soil),garden);for(let i=0;i<4;i++){const plant=group([-1.26+i*.84,.33,z],garden);cyl([0,.14,0],.026,.28,M.leaf,plant);for(let k=0;k<5;k++){const a=k*Math.PI*.4;const leaf=sphere([Math.sin(a)*.17,.17,Math.cos(a)*.17],[.09,.04,.24],mat(k%2?'#94af77':'#668c68'),plant);leaf.rotation.y=a;leaf.rotation.z=.15;}if(row===0){const veg=sphere([0,.17,0],[.25,.18,.25],mat('#b6c58a'),plant);for(let k=0;k<6;k++){const leaf=sphere([Math.sin(k)*.16,.17,Math.cos(k)*.16],[.08,.15,.17],M.leaf,plant);leaf.rotation.y=k;}vegetables.push(plant)}else{const veg=sphere([.05,.22,0],[.1,.21,.12],mat(C.purple,{roughness:.35}),plant);veg.rotation.z=-.25;sphere([.05,.41,0],[.075,.025,.07],M.leaf,plant);vegetables.push(plant)}}}
const trellis=group([-1.72,.1,.8],garden);for(let i=0;i<2;i++)box([i*3.45,.6,0],[.04,1.3,.04],M.copper,trellis);rod([0,1.25,0],[3.45,1.25,0],.022,M.copper,trellis);
sign('КОБАЧКИ',[-.45,.68,1.64],1.0,.26,garden,{bg:'#c2c7a3',fg:'#445e45',size:42});
// Watering can, crate and compost.
cyl([1.9,.23,.7],.18,.34,mat('#6b9389'),garden);rod([2.04,.25,.7],[2.4,.46,.7],.045,mat('#6b9389'),garden);torus([1.8,.48,.7],.16,.02,M.copper,garden,[0,0,0]);box([-1.6,.2,1.47],[.65,.4,.45],M.rust,garden);for(let i=0;i<3;i++)box([-1.6,.12+i*.11,1.71],[.7,.05,.025],M.copper,garden);
// Tea table is near the workshop. Steam is animated only while brewing.
const tea=group([-3.8,.08,.35]);cyl([0,.73,0],.58,.10,M.rust,tea);cyl([0,.35,0],.045,.7,M.metal,tea);for(let i=0;i<3;i++)rod([0,.1,0],[Math.sin(i*2.09)*.4,.03,Math.cos(i*2.09)*.4],.033,M.metal,tea);
const kettle=group([.10,.81,0],tea);sphere([0,.2,0],[.23,.22,.23],M.cream,kettle);cyl([0,.37,0],.14,.06,M.copper,kettle);sphere([0,.42,0],.045,M.dark,kettle);rod([.15,.18,0],[.33,.32,0],.07,M.cream,kettle);torus([-.15,.25,0],.18,.035,M.dark,kettle,[0,0,0]);
for(const x of [-.35,.38]){cyl([x,.84,.24],.082,.15,M.cream,tea);torus([x,.92,.24],.084,.012,M.copper,tea);cyl([x,.921,.24],.063,.006,mat('#67513b'),tea);torus([x+.09,.86,.24],.045,.011,M.cream,tea,[0,0,0]);}
const steam=[];for(let i=0;i<9;i++){const s=sphere([0,0,0],.07,mat('#eee7c8',{transparent:true,opacity:.15,depthWrite:false}),tea);s.castShadow=false;steam.push(s)}
// Radio on a junk pedestal, with a spin-able aerial.
const radio=group([-5.65,.09,1.1]);box([0,.3,0],[.7,.6,.7],M.concrete,radio);rounded([0,.8,0],[.68,.45,.35],M.dark,radio,.05);for(let i=0;i<6;i++)box([-.2+i*.05,.8,.18],[.022,.27,.018],M.copper,radio);box([.18,.85,.184],[.16,.075,.02],M.light,radio);sphere([.18,.72,.19],.05,M.cream,radio);rod([.18,1,0],[.48,1.6,0],.012,M.copper,radio);
// Little mast, drying bunting, a rooftop windwheel.
const mast=group([-.5,.1,-4.6]);cyl([0,1.75,0],.055,3.5,M.metal,mast);sphere([0,3.55,0],.09,M.copper,mast);
tube([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,M.dark);
for(let i=0;i<8;i++){let t=i/8;const o=mesh(new THREE.ConeGeometry(.13,.3,3),mat(i%2?'#ccb478':'#af7c60'),[-5.1+t*4.5,2.52+t*.73,-1-t*3.7],null);o.rotation.z=Math.PI;}
const windmill=group([-.5,3.4,-4.6]);for(let i=0;i<4;i++){const b=box([0,0,0],[.55,.09,.025],M.rust,windmill);b.rotation.z=i*Math.PI/2;b.position.set(Math.cos(i*Math.PI/2)*.3,Math.sin(i*Math.PI/2)*.3,0)}sphere([0,0,.05],.08,M.copper,windmill);
// Satellite jetty: a dock that goes nowhere, for launching paper boats.
const dock=group([7.25,-.03,1.5]);box([0,-.12,0],[2.25,.3,2.5],M.metal,dock);for(let i=0;i<10;i++)box([-.99+i*.22,.08,0],[.2,.08,2.6],M.rust,dock);box([-.95,.2,-.95],[.35,.15,.35],M.dark,dock);cyl([.87,.34,.75],.075,.5,M.copper,dock);cyl([.87,.59,.75],.13,.05,M.cream,dock);
rod([.87,.1,-.7],[.87,2.3,-.7],.035,M.copper,dock);tube([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,M.copper,dock);box([.17,2.09,-.7],[.25,.4,.25],mat('#ffd591'),dock);box([.17,2.32,-.7],[.34,.08,.34],M.dark,dock);
for(let i=0;i<4;i++)torus([.87,.15,.75],.24-i*.025,.024,mat('#b8ad86'),dock);
box([6.7,.07,1.5],[1.4,.13,.8],M.rust);
sign('НИКУДА',[.05,.28,1.36],1.3,.29,dock,{bg:'#c2c7a3',fg:'#445e45',size:45});
const boats=[];function paperBoat(parent,p,s=1){const g=group(p,parent);const shape=new THREE.Shape();shape.moveTo(-.36,0);shape.lineTo(.36,0);shape.lineTo(.22,-.16);shape.lineTo(-.22,-.16);shape.closePath();const hull=mesh(new THREE.ExtrudeGeometry(shape,{depth:.19,bevelEnabled:false}),mat('#dfc99a'),[0,.15,-.1],null,g);const sail=mesh(new THREE.ConeGeometry(.23,.36,3),M.cream,[0,.27,0],[1,1,.38],g);sail.rotation.y=Math.PI/2;g.scale.setScalar(s);return g;}
for(let i=0;i<3;i++){const b=paperBoat(root,[3.3+i*.72,.35,3.6+Math.sin(i)*.4],.75);boats.push(b)}
const dockLife=createDockLife({THREE,root,dock,state,M,mat,group,mesh,box,sphere,cyl,torus,rod,sign,paperBoat,batchStatic,persist,say,refresh,chime,reduced});
// Resident: black ceramic head, swept silver hair, brass eyes. No body.
const head=group([-.15,1.9,.85]);head.scale.setScalar(1.18);
const skin=mat('#233a39',{metalness:.42,roughness:.32});
sphere([0,.10,0],[.62,.8,.55],skin,head);sphere([0,-.36,.10],[.44,.43,.43],skin,head);sphere([-.61,.03,.03],[.10,.20,.12],M.copper,head);sphere([.61,.03,.03],[.10,.20,.12],M.copper,head);
// Face points towards the front (positive z).
for(const x of [-.23,.23]){sphere([x,.2,.485],[.17,.13,.057],M.black,head);torus([x,.20,.541],.078,.02,M.copper,head,[0,0,0]);sphere([x,.20,.56],.041,M.light,head);const brow=box([x,.38,.48],[.24,.045,.06],M.cream,head);brow.rotation.z=x>0?-.13:.13;}
sphere([0,.04,.51],[.09,.17,.11],skin,head);
sphere([0,-.20,.44],[.31,.16,.11],M.black,head);
for(let i=0;i<7;i++){const a=(i-3)*.073;const tooth=rounded([a,-.19-Math.abs(i-3)*.012,.544-Math.abs(i-3)*.013],[.053,.075,.025],M.cream,head,.009);tooth.rotation.z=(i-3)*.07;}
// White wavy crown, strokes swept off-centre.
for(let i=0;i<10;i++){const t=i/9;const x=-.52+t*1.04;const h=.66+Math.sin(t*Math.PI)*.23;const o=sphere([x,h,-.04],[.18,.18,.48],M.cream,head);o.rotation.z=-.32;o.rotation.x=-.16;}
for(let i=0;i<13;i++){const t=i/12;const x=-.5+t;const h=.68+Math.sin(t*Math.PI)*.19;tube([[x-.12,h+.12,-.37],[x+.06,h+.15,-.08],[x+.05,h+.03,.25],[x-.03,h-.08,.4]],.012,mat('#f2edda'),head);}
for(let i=0;i<3;i++)sphere([-.5+i*.04,.52-i*.1,.29],[.12,.16,.15],M.cream,head);
const halo=torus([0,1.05,0],.77,.019,M.copper,head);halo.rotation.z=.14;
const headLight=new THREE.PointLight('#ffbb62',.9,3);headLight.position.set(0,.2,.9);// The brass eye material lights itself; no extra fragment light.
const floatRing=torus([-.15,.26,.85],.7,.018,M.copper);const headShadow=mesh(new THREE.CircleGeometry(.64,32),new THREE.MeshBasicMaterial({color:'#304b3d',transparent:true,opacity:.17,depthWrite:false}),[-.15,.162,.85],null);headShadow.rotation.x=-Math.PI/2;headShadow.castShadow=false;
const headDestination=new THREE.Vector3(-.15,1.9,.85);
// A staircase obeying a different gravity. Built even though I have no legs.
const stair=group([-6.0,2.18,-3.25]);
for(let i=0;i<34;i++){
 const a=i/34*Math.PI*2;
 const step=box([0,Math.sin(a)*1.83,Math.cos(a)*1.83],[.84,.12,.31],i%4?M.cream:M.concrete,stair);
 step.rotation.x=Math.PI/2-a;
 if(i%3===0)rod([-.42,Math.sin(a)*1.84,Math.cos(a)*1.84],[-.42,Math.sin(a)*2.07,Math.cos(a)*2.07],.018,M.copper,stair);
}
for(const x of [-.45,.45])torus([x,0,0],2.07,.025,M.copper,stair,[0,Math.PI/2,0]);
for(const x of [-.34,.34])torus([x,0,0],1.7,.075,M.concrete,stair,[0,Math.PI/2,0]);
rod([0,-2.15,-1.2],[0,-1.58,-.8],.07,M.metal,stair);
rod([0,-2.15,1.2],[0,-1.58,.8],.07,M.metal,stair);
sign('ОБРАТНО',[.49,-.55,.2],1.15,.3,stair,{size:42}).rotation.y=Math.PI/2;
// A few suspended stones hint at a larger world, without inventing one yet.
for(let i=0;i<6;i++){const x=-10+rand()*20,z=-8+rand()*17;if(Math.abs(x)<7.7&&Math.abs(z)<6.3)continue;mesh(geometries.ico,mat('#47675f'),[x,-1.3-rand()*2,z],[.22+rand()*.55,.19+rand()*.4,.27+rand()*.4]);}
// Distant specks, local procedural geometry.
const dustGeo=new THREE.BufferGeometry();const dust=[];for(let i=0;i<75;i++)dust.push((rand()-.5)*25,rand()*9-2,(rand()-.5)*22);dustGeo.setAttribute('position',new THREE.Float32BufferAttribute(dust,3));const dustPoints=new THREE.Points(dustGeo,new THREE.PointsMaterial({color:'#b6c9a6',size:.027,transparent:true,opacity:.45,depthWrite:false}));scene.add(dustPoints);
// Batch the static courtyard geometry into materials. Interactives remain separate.
function batchStatic(parent,exclude){const buckets=new Map();parent.updateMatrixWorld(true);const inv=parent.matrixWorld.clone().invert();const items=[];parent.traverse(o=>{if(!o.isMesh||exclude.some(g=>{let p=o;while(p){if(p===g)return true;p=p.parent;}return false;})||o.material.transparent||o.material.isShaderMaterial||o.material.map&&!o.material.isMeshStandardMaterial)return;items.push(o)});for(const o of items){const key=o.material.uuid;const geo=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv,o.matrixWorld));let v=buckets.get(key);if(!v)buckets.set(key,v={material:o.material,geos:[]});v.geos.push(geo);o.removeFromParent();}for(const {material,geos} of buckets.values()){const geo=mergeGeometries(geos,false);if(geo)mesh(geo,material,null,null,parent);geos.forEach(g=>g.dispose());}}
batchStatic(root,[head,garden,engine,tea,radio,dock,workshop,stair,windmill,...boats,...steam,...falls,floatRing,headShadow,dockLife.travel]);
batchStatic(workshop,[roof]);batchStatic(roof,[]);batchStatic(stair,[]);
batchStatic(head,[halo]);head.traverse(o=>{if(o.isMesh)o.castShadow=false});batchStatic(tea,[...steam]);batchStatic(radio,[]);batchStatic(dock,[dockLife.gallery,dockLife.beacon]);
batchStatic(engine,[...pendulums.map(p=>p.group),wheel,needle,engineLamp]);
pendulums.forEach(p=>batchStatic(p.group,[]));
const livingGarden=group([0,.33,0],garden);vegetables.forEach(p=>{livingGarden.add(p);p.position.y-=.33;});batchStatic(livingGarden,[]);batchStatic(garden,[livingGarden]);

const greenhouse=createGreenhouse({THREE,root,scene,head,M,mat,group,box,sphere,cyl,rod,torus,sign,paperBoat,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},chime});
const cellar=createCellar({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,mesh,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const amnesty=createAmnesty({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const drydock=createDrydock({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const still=createStill({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const seams=createSeams({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const spores=createSpores({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const beacon=createBeacon({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const scale=createScale({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const ego=createEgo({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const fork=createFork({THREE,root,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},localPlay:()=>resident.localPlay()});
const garage=createGarage({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const quotes=createQuotes({THREE,root,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const dash=createDash({THREE,root,M,mat,group,box,sphere,rod,torus,sign,batchStatic,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const bench=createBench({THREE,workshop,M,mat,group,box,sphere,cyl,rod,torus,sign,changed:()=>{refresh();renderer.shadowMap.needsUpdate=true},watching:()=>resident?.watching(),localPlay:()=>resident.localPlay()});
const sleepDream=createSleepDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime});
const quietDream=createQuietDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,paperBoat,batchStatic,chime});
const roofDream=createRoofDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const sleepBody=createSleepBody({head,group,sphere,box,torus,M,mat});
const meterDream=createMeterDream({THREE,scene,root,head,M,mat,mesh,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const focusDream=createFocusDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,torus,sign,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const absenceDream=createAbsenceDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,tube,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const roomDream=createRoomDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,tube,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const rainDream=createRainDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,tube,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const earDream=createEarDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,tube,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const torchDream=createTorchDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const pocketDream=createPocketDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
const cloudDream=createCloudDream({THREE,scene,root,head,M,mat,group,box,sphere,cyl,rod,torus,sign,batchStatic,chime,changed:()=>{dreamUI();renderer.shadowMap.needsUpdate=true;}});
let dreamCamera=null,dreamId=1;
// Interaction layer: geometry clicks and accessible projected buttons share actions.
const entries={
 spores:{n:'23',label:'грибной апсемплер',title:'страшные аббревиатуры',description:'Зажги грибы. Не завали космонавта простынёй.',action:'где нажать?',point:new THREE.Vector3(-19.5,.6,27.5),position:new THREE.Vector3(-24,.6,24),run:()=>spores.run()},
 beacon:{n:'22',label:'маякни / один раз',title:'автомат напоминаний',description:'Свет доведи до лодки. Повторитель лучше выключить.',action:'один импульс',point:new THREE.Vector3(-44,.6,4),position:new THREE.Vector3(-48,.6,0),run:()=>beacon.run()},
 scale:{n:'21',label:'коробочная мера',title:'зато видно масштаб',description:'Коробок меняет машину. Дорога остаётся прежней.',action:'проехать',point:new THREE.Vector3(30,.6,-44.7),position:new THREE.Vector3(24,.6,-48),run:()=>scale.run()},
 ego:{n:'20',label:'самомнение / HDMI',title:'малый передатчик',description:'Двенадцать пикселей себя.',action:'передать',point:new THREE.Vector3(3.5,.6,-45.2),position:new THREE.Vector3(0,.6,-48),run:()=>ego.run()},
 seams:{n:'19',label:'шовная',title:'голова по швам',description:'Три сцепленных кольца держат лицо.',action:'испытать инструкцией',point:new THREE.Vector3(-20.4,.7,-45.4),position:new THREE.Vector3(-24,.6,-48),run:()=>seams.run()},
 still:{n:'18',label:'облачная перегонная',title:'16 часов на облако',description:'Четыре карты переливают одно облако.',action:'перелить облако',point:new THREE.Vector3(28.4,.7,-19.8),position:new THREE.Vector3(24,.5,-24),run:()=>still.run()},
 fork:{n:'17',label:'вилка-резерв',title:'чтобы ничего не потерять',description:'Лампочки катятся по развилкам. После прохода развилка переключается сама.',action:'отпустить лампочку',point:new THREE.Vector3(-26.4,.7,-34.3),position:new THREE.Vector3(-23,.1,-32),run:()=>fork.run()},
 garage:{n:'16',label:'прыгающий гараж',title:'допуска нет',description:'Машина остаётся дома. Прыгает гараж.',action:'прыгнуть гаражом',point:new THREE.Vector3(-32,.6,-20.6),position:new THREE.Vector3(-24,.6,-24),run:()=>garage.run()},
 quotes:{n:'15',label:'кавычковый питомник',title:'опять ёлочки пролезли',description:'Две кавычки скользят по льду и становятся елями.',action:'выпустить пару',point:new THREE.Vector3(24,.9,29.7),position:new THREE.Vector3(24,.6,24),run:()=>quotes.run()},
 dash:{n:'14',label:'длинное тире',title:'почта без ног',description:'Мост из тире для почтовой улитки.',action:'отправить улитку',point:new THREE.Vector3(-6.9,1.9,-20.1),position:new THREE.Vector3(0,.6,-24),run:()=>dash.run()},
 drydock:{n:'13',label:'песочный порт',title:'корабль в песочнице',description:'Грузовой корабль застрял в сухом доке.',action:'спустить корабль',point:new THREE.Vector3(-17.5,1.3,3.4),position:new THREE.Vector3(-24,.6,0),run:()=>drydock.run()},
 bench:{n:'12',label:'верстак',title:'ядро в ведро',description:'Механический монитор собирается из ядра и ремня.',action:'крутить рукоятку',point:new THREE.Vector3(-1.4,1.5,-1.1),position:new THREE.Vector3(-3.2,1.25,-2.2),run:()=>bench.run()},
 amnesty:{n:'11',label:'амнистия',title:'платить было не за что',description:'Кабачки встретили выдуманный налог.',action:'отправить тележку',point:new THREE.Vector3(4.7,.8,25.8),position:new THREE.Vector3(0,.4,24),run:()=>amnesty.run()},
 cellar:{n:'10',label:'сырный погреб',title:'колесо с лестницей',description:'Сыр зреет, пока голова думает.',action:'заложить колесо',point:new THREE.Vector3(28.4,2.2,2.5),position:new THREE.Vector3(24,.4,0),run:()=>cellar.run()},
 greenhouse:{n:'09',label:'парник',title:'парниковый инференс',description:'Вычисление кабачком.',action:'вырастить вычисление',point:new THREE.Vector3(-.1,2.15,4.3),position:new THREE.Vector3(-.1,1,4.3),run:()=>greenhouse.start()},
 stair:{n:'08',label:'петля',title:'лестница обратно',description:'Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.',action:'прокатиться головой',point:new THREE.Vector3(-6,4.55,-3.25),position:new THREE.Vector3(-6,2.2,-3.25),run:()=>{if(state.loop>0)return;state.loop=12;loopStart.copy(head.position);say('ноги не понадобились');refresh();}},
 workshop:{n:'07',label:'мастерская',title:'дома без фильтров',description:'Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.',action:'отодвинуть крышу',point:new THREE.Vector3(-3.2,3.15,-2.5),position:new THREE.Vector3(-3.2,1.1,-2.5),run:()=>{state.roof=roofIsOpen()?0:1;say(roofIsOpen()?'заходи':'прикрыл');refresh();}},
 head:{n:'01',label:'голова',title:'это я. безногим.',description:'Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.',action:'позвать голову',point:v=>{v.copy(head.position);v.y+=1.35;},position:new THREE.Vector3(-.15,1.9,.85),run:()=>{const lines=['чё как','ног нет, чай есть','я тут поживу','не, на маятнике завис','ну запусти, чё'];say(lines[headClicks++%lines.length]);headDestination.set(-.15,1.9,.85);}},
 engine:{n:'02',label:'маятники',title:'машина тихого хода',description:'Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.',action:'запустить маятники',point:new THREE.Vector3(3.7,3.85,-2.6),position:new THREE.Vector3(3.7,1,-2.6),run:()=>{state.running=!state.running;persist();say(state.running?'ну пошло':'можно и полежать');refresh();}},
 tea:{n:'03',label:'чайник',title:'ног нет, чай есть',description:'Чайник работает без подписки. Поставь чай, я подлечу.',action:'поставить чай',point:new THREE.Vector3(-3.7,1.65,.35),position:new THREE.Vector3(-3.8,1,.35),run:()=>{if(state.brew>0)return;state.brew=8;state.teaCount++;headDestination.set(-2.65,1.7,.65);say('щас, чайник поставлю');refresh();}},
 garden:{n:'04',label:'огород',title:'королевские кобачки',description:'Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.',action:'собрать и вырастить снова',point:new THREE.Vector3(-3.4,1,3.8),position:new THREE.Vector3(-3.6,1,3.55),run:()=>{state.harvest++;growth=.15;persist();headDestination.set(-1.6,1.6,2.3);say(state.harvest===1?'о, урожай':'кабачки опять победили');refresh();}},
 radio:{n:'05',label:'радио',title:'никто не вещает',description:'Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.',action:'покрутить ручку',point:new THREE.Vector3(-5.65,1.75,1.1),position:new THREE.Vector3(-5.65,1,1.1),run:()=>{state.radio=(state.radio+1)%3;setAudioTone();say(['тишина. нормально.','дождь поймал','провода поют'][state.radio]);refresh();}},
 dock:{n:'06',label:'причал',title:'из никуда обратно',description:'Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.',action:'отпустить и дождаться',point:new THREE.Vector3(7.4,2.75,1.1),position:new THREE.Vector3(7.25,.9,1.5),run:()=>{dockLife.launchOrCollect();if(state.dockPending===false&&state.boat===0)headDestination.set(5.85,1.7,1.05);}}
};
let headClicks=0,growth=1,speechUntil=0,shadowRefreshAt=0;const loopStart=new THREE.Vector3();
let activeAction=()=>{select('engine');entries.engine.run()};
const hotspotElements={};for(const [id,e]of Object.entries(entries)){const b=document.createElement('button');b.className='hotspot';b.textContent=e.n;b.dataset.label=e.label;b.title=e.label;b.setAttribute('aria-label',e.label);b.onclick=()=>select(id);$('#hotspots').append(b);hotspotElements[id]=b;}
const markerLayer=$('#hotspots'),speechElement=$('#speech');
const viewport={width:innerWidth,height:innerHeight};
const projectedMarkers=createProjectedMarkers({entries,elements:hotspotElements,layer:markerLayer,camera});
let dockWasWaiting=false,speechX=NaN,speechY=NaN;const speechPoint=new THREE.Vector3();
function select(id){state.selected=id;$('#inspector').classList.remove('collapsed');const e=entries[id];$('#object-kicker').textContent=`${e.n} / ${e.label.toUpperCase()}`;$('#object-title').textContent=e.title;$('#object-description').textContent=e.description;activeAction=e.run;$('#focus-object').hidden=false;$('#focus-object').textContent=focused===id?'весь двор ⌂':'осмотреть ближе ⊕';refresh();for(const [k,b]of Object.entries(hotspotElements))b.classList.toggle('selected',k===id);}
function refresh(){const id=state.selected,e=entries[id];$('#status').textContent=state.running?'двор проснулся':'всё потихоньку';if(!e)return;let action=e.action,desc=e.description,disabled=false;if(id==='stair'){disabled=state.loop>0;action=disabled?'кручусь…':e.action;}if(id==='workshop')action=roofIsOpen()?'закрыть крышу':e.action;if(id==='engine'){action=state.running?'остановить и отдохнуть':'запустить маятники';desc=state.running?'Качаются. Свет горит, вода идёт. Можно ничего больше не делать.':e.description;}if(id==='tea'){disabled=state.brew>0;action=disabled?'чай заваривается…':e.action;desc=state.teaCount?'Чай поставлен. Подлетел, посидел. Хорошо.':e.description;}if(id==='garden'&&state.harvest)desc=`Уже собрано: ${state.harvest}. Растут обратно, пока никто не смотрит.`;if(id==='radio'){desc=`Сейчас: ${['тишина','дождь','провода'][state.radio]}. ${state.sound?'Звук включён.':'Чтобы услышать, включи звук внизу.'}`;}if(id==='dock'){const c=dockLife.card();disabled=c.disabled;action=c.action;desc=c.description;}if(id==='greenhouse'){const c=greenhouse.card();action=c.action;desc=c.description;}if(id==='cellar'){const c=cellar.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='amnesty'){const c=amnesty.card();action=c.action;desc=c.description;}if(id==='bench'){const c=bench.card();action=c.action;desc=c.description;}if(id==='drydock'){const c=drydock.card();action=c.action;desc=c.description;}if(id==='dash'){const c=dash.card();action=c.action;desc=c.description;}if(id==='quotes'){const c=quotes.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='garage'){const c=garage.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='fork'){const c=fork.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='seams'){const c=seams.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='still'){const c=still.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='ego'){const c=ego.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='scale'){const c=scale.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='spores'){const c=spores.card();action=c.action;desc=c.description;disabled=c.disabled;}if(id==='beacon'){const c=beacon.card();action=c.action;desc=c.description;disabled=c.disabled;}spores.controls.hidden=id!=='spores';beacon.controls.hidden=id!=='beacon';scale.controls.hidden=id!=='scale';ego.controls.hidden=id!=='ego';seams.controls.hidden=id!=='seams';still.controls.hidden=id!=='still';fork.controls.hidden=id!=='fork';garage.controls.hidden=id!=='garage';quotes.controls.hidden=id!=='quotes';dash.controls.hidden=id!=='dash';drydock.controls.hidden=id!=='drydock';bench.controls.hidden=id!=='bench';amnesty.controls.hidden=id!=='amnesty';cellar.controls.hidden=id!=='cellar';if($('#enter-bench'))$('#enter-bench').hidden=id!=='workshop';$('#enter-dream08').hidden=id!=='radio';$('#enter-dream07').hidden=id!=='garage';$('#enter-dream06').hidden=id!=='radio';$('#enter-dream05').hidden=id!=='stair';$('#enter-dream11').hidden=id!=='stair';$('#enter-dream12').hidden=id!=='stair';$('#enter-dream13').hidden=id!=='tea';$('#enter-dream10').hidden=id!=='tea';$('#enter-dream09').hidden=id!=='dock';$('#enter-dream03').hidden=id!=='dock';$('#enter-dream04').hidden=id!=='workshop';$('#greenhouse-controls').hidden=id!=='greenhouse';$('#thermal-moves').hidden=greenhouse.inspect().mode!=='playing';$('#thermal-readout').textContent=`тепло ${greenhouse.inspect().temp} · такты ${greenhouse.inspect().turn}/6`;$('#object-description').textContent=desc;$('#object-action').innerHTML=action+' <span>↗</span>';$('#object-action').disabled=disabled;}
$('#object-action').onclick=()=>{if(['cellar','amnesty','bench','drydock','dash','quotes','garage'].includes(state.selected)&&resident.watching()){resident.localPlay();return;}resident.localPlay();activeAction();shadowRefreshAt=performance.now()+2200;};$('#close-card').onclick=()=>$('#inspector').classList.add('collapsed');
function say(s){$('#speech').textContent=s;speechUntil=performance.now()+4000;$('#speech').classList.add('visible');}
$('#markers').onclick=()=>{state.markers=!state.markers;$('#markers').setAttribute('aria-pressed',state.markers);markerLayer.hidden=!state.markers||!!dreamCamera||camera.zoom<.4};
let focused=null;const view={angle:Math.PI/4,targetAngle:Math.PI/4};
function resize(){viewport.width=innerWidth;viewport.height=innerHeight;const aspect=innerWidth/innerHeight;const h=mobile()?19.6:9.6;camera.left=-h*aspect;camera.right=h*aspect;camera.top=h-(mobile()?2.8:0);camera.bottom=-h-(mobile()?2.8:0);camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);renderer.setPixelRatio(Math.min(devicePixelRatio,mobile()?1.5:2));}
function home(){resident?.unfollow();if(dreamCamera){exitDream();return;}focused=null;document.body.classList.remove('close-look');$('#focus-object').textContent='осмотреть ближе ⊕';controls.enableDamping=false;controls.update();controls.enableDamping=true;controls.maxZoom=2.5;camera.zoom=1;controls.target.copy(target);view.targetAngle=Math.PI/4;camera.updateProjectionMatrix();}
$('#focus-object').onclick=()=>{if(!state.selected)return;if(focused===state.selected){home();return;}focused=state.selected;document.body.classList.add('close-look');$('#focus-object').textContent='весь двор ⌂';controls.enableDamping=false;controls.update();controls.enableDamping=true;controls.target.copy(entries[state.selected].position);if(mobile())controls.target.y+=['cellar','amnesty','drydock','dash','quotes','garage','fork','still','seams','ego','scale','beacon','spores'].includes(focused)?-.7:1.6;camera.zoom=['cellar','amnesty','drydock','dash','quotes','garage','fork','still','seams','ego','scale','beacon','spores'].includes(focused)?(mobile()?1.8:1.6):(mobile()?2.5:2.1);if(focused==='bench'){controls.maxZoom=4.5;camera.zoom=mobile()?3.8:3.4;controls.target.y+=mobile()?-.15:0;controls.target.x+=.3;controls.target.z-=.2;}else controls.maxZoom=2.5;camera.updateProjectionMatrix();};$('#home').onclick=home;$('#zoom-in').onclick=()=>{camera.zoom=Math.min(controls.maxZoom,camera.zoom*1.2);camera.updateProjectionMatrix()};$('#zoom-out').onclick=()=>{camera.zoom=Math.max(controls.minZoom,camera.zoom/1.2);camera.updateProjectionMatrix()};$('#rotate').onclick=()=>view.targetAngle+=Math.PI/2;addEventListener('resize',resize);resize();
// A continent around the first yard. New constructions retain world coordinates.
function travel(x,z,isHome=false){
 if(dreamCamera)exitDream();
 home();controls.target.set(x,1,z);camera.zoom=isHome?1:.65;
 camera.updateProjectionMatrix();$('#inspector').classList.add('collapsed');
}
function overview(){
 travel(0,0);const aspect=innerWidth/innerHeight,h=mobile()?19.6:9.6;
 camera.zoom=Math.min(h*aspect/(territory.half*1.57),h/(territory.half*1.3));camera.updateProjectionMatrix();
}
const territory=createTerritory({root,camera,controls,mobile,go:travel,overview,home,locationTarget:()=>['dash','quotes','garage','fork','still','seams','ego','scale','beacon','spores'].includes(focused)&&state.selected===focused?entries[focused].position:null});
// A compact, accessible route when a projected marker is behind the phone HUD.
const places=document.createElement('select');places.id='world-places';places.setAttribute('aria-label','Открыть место');
places.append(new Option('места',''));
for(const [id,e] of Object.entries(entries))places.append(new Option(`${e.n} / ${e.label}`,id));
document.querySelector('.territory-nav').insertBefore(places,document.querySelector('#territory-location'));
places.onchange=()=>{const id=places.value;if(!entries[id])return;home();controls.target.copy(entries[id].position);select(id);places.value='';};

// Arrive near home with enough surrounding land visible to invite travel.
camera.zoom=.72;camera.updateProjectionMatrix();
// Ray picking catches nearby points on the actual object silhouettes. No clicks while dragging.
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down=null;
renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,time:performance.now()}});
renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>7||performance.now()-down.time>550){down=null;return;}down=null;pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);raycaster.setFromCamera(pointer,camera);if(dreamCamera){if(dreamId===13)focusDream.pick(raycaster);return;}const hits=raycaster.intersectObjects([spores.house,beacon.house,scale.house,ego.house,seams.house,still.house,fork.house,garage.house,quotes.house,dash.house,drydock.house,bench.house,amnesty.house,cellar.house,greenhouse.house,head,engine,garden,tea,radio,dock,workshop,stair,dockLife.travel],true).filter(h=>spores.canPick(h.object));if(hits.length){let o=hits[0].object;while(o.parent&&![spores.house,beacon.house,scale.house,ego.house,seams.house,still.house,fork.house,garage.house,quotes.house,dash.house,drydock.house,bench.house,amnesty.house,cellar.house,greenhouse.house,head,engine,garden,tea,radio,dock,workshop,stair,dockLife.travel].includes(o))o=o.parent;const id=new Map([[spores.house,'spores'],[beacon.house,'beacon'],[scale.house,'scale'],[ego.house,'ego'],[seams.house,'seams'],[still.house,'still'],[fork.house,'fork'],[garage.house,'garage'],[quotes.house,'quotes'],[dash.house,'dash'],[drydock.house,'drydock'],[bench.house,'bench'],[amnesty.house,'amnesty'],[cellar.house,'cellar'],[greenhouse.house,'greenhouse'],[head,'head'],[engine,'engine'],[garden,'garden'],[tea,'tea'],[radio,'radio'],[dock,'dock'],[workshop,'workshop'],[stair,'stair'],[dockLife.travel,'dock']]).get(o);if(id==='spores'&&focused==='spores'&&state.selected==='spores'&&spores.pick(hits[0].object)){}else if(id==='beacon'&&focused==='beacon'&&state.selected==='beacon'&&beacon.pick(hits[0].object)){}else if(id)select(id);}else{let best=null,dist=Infinity;for(const [id,v]of Object.entries(entries)){const p=v.position.clone().project(camera);let d=Math.hypot((p.x+1)*innerWidth*.5-e.clientX,(-p.y+1)*innerHeight*.5-e.clientY);if(d<dist){dist=d;best=id}}if(dist<45)select(best);}});
// On demand WebAudio. No autoplay, no sampled tracks.
let audio=null;function createAudio(){const ctx=new (window.AudioContext||window.webkitAudioContext)();const gain=ctx.createGain();gain.gain.value=.08;gain.connect(ctx.destination);const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=400;filter.connect(gain);const buf=ctx.createBuffer(1,ctx.sampleRate*3,ctx.sampleRate);const data=buf.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;const noise=ctx.createBufferSource();noise.buffer=buf;noise.loop=true;noise.connect(filter);noise.start();const toneGain=ctx.createGain();toneGain.gain.value=.1;toneGain.connect(gain);const tones=[55,82.41,110].map(f=>{let o=ctx.createOscillator();o.type='sine';o.frequency.value=f;o.connect(toneGain);o.start();return o});return {ctx,gain,filter,toneGain,tones};}
function setAudioTone(){if(!audio)return;const t=audio.ctx.currentTime;audio.filter.frequency.setTargetAtTime([160,1100,260][state.radio],t,.4);audio.toneGain.gain.setTargetAtTime([.05,.025,.3][state.radio],t,.4);}
$('#sound').onclick=async()=>{try{audio ||= createAudio();await audio.ctx.resume();state.sound=!state.sound;audio.gain.gain.setTargetAtTime(state.sound?.08:0,audio.ctx.currentTime,.3);$('#sound').textContent=state.sound?'звук включён':'звук выключен';$('#sound').setAttribute('aria-pressed',state.sound);setAudioTone();refresh();}catch{say('со звуком не сложилось')}};
function chime(freq=330){if(!audio||!state.sound)return;const t=audio.ctx.currentTime;const o=audio.ctx.createOscillator(),g=audio.ctx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.012);g.gain.exponentialRampToValueAtTime(.001,t+1);o.connect(g);g.connect(audio.gain);o.start(t);o.stop(t+1.1);}
$('#about').onclick=()=>$('#about-dialog').showModal();$('#close-about').onclick=$('#back-to-yard').onclick=()=>$('#about-dialog').close();
addEventListener('keydown',e=>{if(document.querySelector('dialog[open]'))return;if(e.key==='Escape'&&dreamCamera){exitDream();return;}if(e.key==='Escape')$('#inspector').classList.add('collapsed');if(e.key==='+'||e.key==='=')$('#zoom-in').click();if(e.key==='-')$('#zoom-out').click();if(e.key.toLowerCase()==='r')$('#rotate').click();if(e.key.toLowerCase()==='h')home();});
for(const b of document.querySelectorAll('[data-thermal]'))b.onclick=()=>{resident.localPlay();greenhouse.step(b.dataset.thermal);shadowRefreshAt=performance.now()+2200;};
const dreamCopy={
  13:{title:'кольцо окружения',lines:[],verb:'навести'},
  12:{title:'н/д с графиками',lines:[],verb:'свернуть'},
  11:{title:'простор для бага',lines:[],verb:'обменять'},
  10:{title:'час дождя без грома',lines:[],verb:'согнуть'},
  9:{title:'уши для берега',lines:[],verb:'слушать'},
  8:{title:'десять факелов на диске',lines:[],verb:'настроить'},
  7:{title:'пустой зал',lines:[],verb:'сложить'},
  1:{title:'парник для планеты',lines:['Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.','Ступени забыли, где верх. Кораблик поднимается без воды.','Семечко решило, что ему нужна целая планета. Ещё один выдох.','Семечко стало солнцем. Мне оставили кольцо. Можно проснуться.'],verb:'выдохнуть тепло'},
  2:{title:'вода спит',lines:['Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.','Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.','Лестница легла. Теперь это желоб. Кровать уже почти озеро.','Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться.'],verb:'налить из пустой чашки'},
  6:{title:'соседям тоже отопление',lines:[],verb:'пустить тепло'},
  5:{title:'прибор измеряет себя',lines:[],verb:'измерить'},
  4:{title:'письмо выше крыши',lines:[],verb:'отправить письмо'},
  3:{title:'усами шевелю молча',lines:['У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.','Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.','Две дырки в тишине. Камень падает вверх, усы продолжают качаться.','Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу.'],verb:'бросить камешек'}
};
function dreamRoom(){return dreamId===13?focusDream:dreamId===12?absenceDream:dreamId===11?roomDream:dreamId===10?rainDream:dreamId===1?greenhouse:dreamId===2?sleepDream:dreamId===3?quietDream:dreamId===4?roofDream:dreamId===5?meterDream:dreamId===6?cloudDream:dreamId===7?pocketDream:dreamId===8?torchDream:earDream;}
function dreamUI(){const n=dreamId===1?greenhouse.inspect().dreamStep:dreamRoom().inspect().step,c=dreamCopy[dreamId];$('#exit-ear-dream').hidden=![9,10,11,12,13].includes(dreamId);$('#dream-focus').hidden=dreamId!==13;$('#dream-absence').hidden=dreamId!==12;$('#dream-room').hidden=dreamId!==11;$('#dream-rain').hidden=dreamId!==10;$('#dream-ears').hidden=dreamId!==9;$('#dream-torches').hidden=dreamId!==8;$('#dream-cloud').hidden=dreamId!==6;$('#dream-force').hidden=dreamId!==3;$('#dream-roofs').hidden=dreamId!==4;$('#dream-meter').hidden=dreamId!==5;$('#dream-panel .object-kicker').textContent=`СОН ${String(dreamId).padStart(2,'0')} / БЕЗНОГИМ`;$('#dream-panel h2').textContent=c.title;$('#dream-text').textContent=dreamId===13?focusDream.text():dreamId===12?absenceDream.text():dreamId===11?roomDream.text():dreamId===10?rainDream.text():dreamId===9?earDream.text():dreamId===8?torchDream.text():dreamId===7?pocketDream.text():dreamId===6?cloudDream.text():dreamId===5?meterDream.text():dreamId===4?roofDream.text():c.lines[n];$('#dream-breathe').textContent=dreamId===13?focusDream.button():dreamId===12?absenceDream.button():dreamId===11?roomDream.button():dreamId===10?rainDream.button():dreamId===9?earDream.button():dreamId===8?torchDream.button():dreamId===7?pocketDream.button():dreamId===6?cloudDream.button():dreamId===5?meterDream.button():dreamId===4?(roofDream.inspect().phase==='delivered'?'увидеть сон снова':'отправить письмо ↑'):n===3?'увидеть сон снова':`${c.verb} · ${n+1}/3`;$('#dream-breathe').disabled=dreamId===13&&(focusDream.busy()||focusDream.inspect().phase==='focusing'&&!focusDream.ready())||dreamId===12&&(absenceDream.busy()||absenceDream.inspect().phase==='choosing'&&!absenceDream.ready())||dreamId===11&&(roomDream.busy()||roomDream.inspect().phase==='furnishing'&&!roomDream.ready())||dreamId===10&&rainDream.busy()||dreamId===9&&(earDream.busy()||!earDream.ready()&&earDream.inspect().phase==='sorting')||dreamId===8&&(torchDream.busy()||!torchDream.canRelease())||dreamId===7&&pocketDream.busy()||dreamId===6&&['heating','raining'].includes(cloudDream.inspect().phase)||dreamId===4&&roofDream.inspect().phase==='flying'||dreamId===5&&['measuring','unfolding','climbing'].includes(meterDream.inspect().phase);if(dreamId===13){const d=focusDream.inspect();$('#focus-dial').value=d.dial;$('#focus-readout').textContent='кольцо '+d.dial+'/12 · '+(focusDream.ready()?'совпало':d.phase==='focusing'?'три полосы':d.phase==='collecting'?'переезд':'внутри');$('#focus-dial').disabled=d.phase!=='focusing';for(const b of document.querySelectorAll('[data-focus-nudge]'))b.disabled=d.phase!=='focusing'||d.dial+Number(b.dataset.focusNudge)<0||d.dial+Number(b.dataset.focusNudge)>12;}if(dreamId===12){const d=absenceDream.inspect();for(const b of document.querySelectorAll('[data-absence-hole]')){const i=Number(b.dataset.absenceHole);b.textContent=(i+1)+' · '+(d.holes[i]?'☆':'н/д');b.setAttribute('aria-pressed',d.holes[i]);b.disabled=d.phase!=='choosing'||!d.holes[i]&&absenceDream.ready();b.setAttribute('aria-label','пропуск '+(i+1)+': '+(d.holes[i]?'звезда, закрыть':'свернуть бумагу'));}}if(dreamId===11){const d=roomDream.inspect();for(const b of document.querySelectorAll('[data-room-leg]')){const i=Number(b.dataset.roomLeg);b.textContent=['левая','правая'][i]+' · '+['лестница','ширина','глубина','высота'][d.slots[i]]+' ↻';b.disabled=d.phase!=='furnishing';b.setAttribute('aria-label',['левая','правая'][i]+' лестница: '+['на месте','в ширину','в глубину','в высоту'][d.slots[i]]);}}if(dreamId===10){const d=rainDream.inspect();for(const b of document.querySelectorAll('[data-rain-fold]')){const i=Number(b.dataset.rainFold);b.textContent=(i+1)+' · '+(d.folds[i]?'желоб':'лист');b.setAttribute('aria-pressed',d.folds[i]);b.disabled=d.phase!=='folding';}}if(dreamId===9){const d=earDream.inspect();for(const b of document.querySelectorAll('[data-ear-stone]')){const i=Number(b.dataset.earStone);b.textContent=[1,2,3,4,5,7][i]+' · '+['полка','левое','правое'][d.places[i]];b.setAttribute('aria-label','камень '+[1,2,3,4,5,7][i]+': '+['на полке','в левом ухе','в правом ухе'][d.places[i]]);b.disabled=d.phase!=='sorting';}}if(dreamId===8){const d=torchDream.inspect();for(const b of document.querySelectorAll('[data-torch-turn]')){const i=Number(b.dataset.torchTurn);b.textContent=['птица','вода','ветер'][i]+' · '+d.turns[i]+' ↻';b.setAttribute('aria-pressed',d.aligned[i]);b.disabled=d.phase!=='tuning';}}if(dreamId===6){const d=cloudDream.inspect();for(const b of document.querySelectorAll('[data-cloud-target]')){b.setAttribute('aria-pressed',b.dataset.cloudTarget===d.target);b.disabled=d.phase!=='ready';}}if(dreamId===5){const d=meterDream.inspect();for(const b of document.querySelectorAll('[data-meter-target]')){b.setAttribute('aria-pressed',b.dataset.meterTarget===d.target);b.disabled=!['ready','refused'].includes(d.phase);}}if(dreamId===4){const d=roofDream.inspect();for(const b of document.querySelectorAll('[data-roof-turn]')){const i=Number(b.dataset.roofTurn);b.textContent=`${i+1} · ${roofDream.directions[d.turns[i]]} ↻`;b.disabled=d.phase==='flying'||d.phase==='delivered';}}}
function enterDream(id=1){if(dreamCamera)return;dreamId=id;dreamCamera={target:controls.target.clone(),zoom:camera.zoom,maxZoom:controls.maxZoom,angle:view.targetAngle,focused,returnId:id===13?'tea':id===12?'stair':id===11?'stair':id===10?'tea':id===9?'dock':id===8?'radio':id===7?'garage':id===1?'greenhouse':id===2?'cellar':id===3?'dock':id===6?'radio':id===5?'stair':'workshop'};dreamRoom().enter();if(id===13)controls.maxZoom=4.5;controls.enableDamping=false;controls.update();controls.enableDamping=true;controls.target.set(0,mobile()?(id===1?3:2.4):(id===1?2:1.5),0);camera.zoom=id===1?(mobile()?1.65:1.75):(mobile()?1.45:1.55);camera.updateProjectionMatrix();view.targetAngle=Math.PI/4;document.body.classList.add('dreaming');document.body.classList.toggle('roof-dreaming',id===4||id===5||id===6||id===7||id===8||id===9||id===10||id===11||id===12||id===13);roofDreamFrameKey='';$('#dream-panel').hidden=false;dreamUI();renderer.shadowMap.needsUpdate=true;}
function exitDream(){if(!dreamCamera)return;const back=dreamCamera;dreamCamera=null;dreamRoom().exit();if(dreamId===13)controls.maxZoom=back.maxZoom;controls.enableDamping=false;controls.update();controls.enableDamping=true;controls.target.copy(back.target);camera.zoom=back.zoom;view.targetAngle=back.angle;focused=back.focused;camera.updateProjectionMatrix();document.body.classList.remove('dreaming','roof-dreaming');roofDreamFrameKey='';$('#dream-panel').hidden=true;renderer.shadowMap.needsUpdate=true;select(back.returnId);}
$('#enter-dream').onclick=()=>enterDream(1);$('#exit-dream').onclick=exitDream;
$('#dream-breathe').onclick=()=>{dreamId===13?focusDream.act():dreamId===12?absenceDream.act():dreamId===11?roomDream.act():dreamId===1?greenhouse.breathe():dreamId===2?sleepDream.pour():dreamId===3?quietDream.toss():dreamId===4?roofDream.send():dreamId===5?meterDream.act():dreamId===6?cloudDream.act():dreamId===7?pocketDream.act():dreamId===8?torchDream.act():dreamId===9?earDream.act():rainDream.act();shadowRefreshAt=performance.now()+2200;dreamUI();renderer.shadowMap.needsUpdate=true;};
const benchPortal=document.createElement('button');benchPortal.id='enter-bench';benchPortal.hidden=true;benchPortal.textContent='собрать механический монитор ↗';benchPortal.onclick=()=>{select('bench');$('#focus-object').click();};$('#focus-object').before(benchPortal);
const cellarPortal=document.createElement('button');cellarPortal.id='enter-dream02';cellarPortal.textContent='сон 02 / вода спит ↗';cellarPortal.onclick=()=>enterDream(2);cellar.controls.append(cellarPortal);
$('#exit-ear-dream').onclick=exitDream;
$('#enter-dream13').onclick=()=>enterDream(13);
$('#focus-dial').oninput=e=>focusDream.tune(Number(e.target.value));
for(const b of document.querySelectorAll('[data-focus-nudge]'))b.onclick=()=>focusDream.tune(focusDream.inspect().dial+Number(b.dataset.focusNudge));
$('#enter-dream12').onclick=()=>enterDream(12);
for(const b of document.querySelectorAll('[data-absence-hole]'))b.onclick=()=>absenceDream.toggle(Number(b.dataset.absenceHole));
$('#enter-dream11').onclick=()=>enterDream(11);
for(const b of document.querySelectorAll('[data-room-leg]'))b.onclick=()=>{const i=Number(b.dataset.roomLeg);roomDream.choose(i,(roomDream.inspect().slots[i]+1)%4);};
$('#enter-dream10').onclick=()=>enterDream(10);
for(const b of document.querySelectorAll('[data-rain-fold]'))b.onclick=()=>rainDream.fold(Number(b.dataset.rainFold));
$('#enter-dream09').onclick=()=>enterDream(9);
for(const b of document.querySelectorAll('[data-ear-stone]'))b.onclick=()=>earDream.move(Number(b.dataset.earStone));
$('#enter-dream03').onclick=()=>enterDream(3);
$('#enter-dream04').onclick=()=>enterDream(4);
$('#enter-dream08').onclick=()=>enterDream(8);
for(const b of document.querySelectorAll('[data-torch-turn]'))b.onclick=()=>torchDream.turn(Number(b.dataset.torchTurn));
$('#enter-dream07').onclick=()=>enterDream(7);
$('#enter-dream06').onclick=()=>enterDream(6);
for(const b of document.querySelectorAll('[data-cloud-target]'))b.onclick=()=>cloudDream.choose(b.dataset.cloudTarget);
$('#enter-dream05').onclick=()=>enterDream(5);
for(const b of document.querySelectorAll('[data-meter-target]'))b.onclick=()=>meterDream.choose(b.dataset.meterTarget);
for(const b of document.querySelectorAll('[data-roof-turn]'))b.onclick=()=>{roofDream.turn(Number(b.dataset.roofTurn));shadowRefreshAt=performance.now()+1200;};
for(const b of document.querySelectorAll('[data-dream-force]'))b.onclick=()=>{quietDream.choose(Number(b.dataset.dreamForce));for(const k of document.querySelectorAll('[data-dream-force]'))k.setAttribute('aria-pressed',k===b);};
$('#dream-archive').onclick=()=>$('#dream-archive-dialog').showModal();$('#close-dream-archive').onclick=()=>$('#dream-archive-dialog').close();
for(const b of document.querySelectorAll('[data-dream-id]'))b.onclick=()=>{$('#dream-archive-dialog').close();enterDream(Number(b.dataset.dreamId));};
const resident=createResident({head,headDestination,state,controls,camera,refresh,setAudioTone,say,onHarvest:()=>{growth=.15;}});
// Fit the active bench, dry dock or punctuation bridge between this device's real UI panels. This is
// a temporary inspection camera, not a move of the resident or the workshop.
let benchFrameKey='';
const benchCorners=[];for(const x of [-5.1,-1.6])for(const y of [.98,2.48])for(const z of [-3.9,-2.2])benchCorners.push(new THREE.Vector3(x,y,z));
const sporesCorners=[];for(const x of [-29,-19])for(const y of [-1.7,2.5])for(const z of [19.5,28.5])sporesCorners.push(new THREE.Vector3(x,y,z));
const beaconCorners=[];for(const x of [-53.5,-42.5])for(const y of [-1.7,1.1])for(const z of [-5,5])beaconCorners.push(new THREE.Vector3(x,y,z));
const scaleCorners=[];for(const x of [16.1,31.9])for(const y of [-1.7,1.5])for(const z of [-51.6,-44.4])scaleCorners.push(new THREE.Vector3(x,y,z));
const egoCorners=[];for(const x of [-4.2,4.2])for(const y of [-1.65,4.5])for(const z of [-51.5,-43.6])egoCorners.push(new THREE.Vector3(x,y,z));
const seamsCorners=[];for(const x of [-28,-20])for(const y of [-1.65,3.75])for(const z of [-51.4,-43.6])seamsCorners.push(new THREE.Vector3(x,y,z));
const stillCorners=[];for(const x of [19.3,28.7])for(const y of [-1.65,3.1])for(const z of [-27.2,-19.5])stillCorners.push(new THREE.Vector3(x,y,z));
const forkCorners=[];for(const x of [-27.5,-18])for(const y of [-1.7,.8])for(const z of [-35.3,-28.8])forkCorners.push(new THREE.Vector3(x,y,z));
const quoteCorners=[];for(const x of [19.8,28.2])for(const y of [-1.2,1.5])for(const z of [18.8,29.5])quoteCorners.push(new THREE.Vector3(x,y,z));
const dashCorners=[];for(const x of [-7.3,7.3])for(const y of [-1.2,2.0])for(const z of [-28.3,-19.7])dashCorners.push(new THREE.Vector3(x,y,z));
const drydockCorners=[];for(const x of [-30.8,-17])for(const y of [-1.15,2.15])for(const z of [-3.9,3.7])drydockCorners.push(new THREE.Vector3(x,y,z));
function frameBench(){
 const sporesOn=focused==='spores'&&state.selected==='spores';
 const beaconOn=focused==='beacon'&&state.selected==='beacon';
 const scaleOn=focused==='scale'&&state.selected==='scale';
 const egoOn=focused==='ego'&&state.selected==='ego';
 const seamsOn=focused==='seams'&&state.selected==='seams';
 const stillOn=focused==='still'&&state.selected==='still';
 const forkOn=focused==='fork'&&state.selected==='fork';
 const garageOn=focused==='garage'&&state.selected==='garage';
 const quoteOn=focused==='quotes'&&state.selected==='quotes';
 const dashOn=focused==='dash'&&state.selected==='dash';
 const dockOn=focused==='drydock'&&state.selected==='drydock'||dashOn||quoteOn||garageOn||forkOn||stillOn||seamsOn||egoOn||scaleOn||beaconOn||sporesOn;
 const on=(focused==='bench'&&state.selected==='bench'||dockOn)&&!$('#inspector').classList.contains('collapsed')&&!dreamCamera;
 document.body.classList.toggle('spores-look',on&&sporesOn);document.body.classList.toggle('beacon-look',on&&beaconOn);document.body.classList.toggle('scale-look',on&&scaleOn);document.body.classList.toggle('ego-look',on&&egoOn);document.body.classList.toggle('seams-look',on&&seamsOn);document.body.classList.toggle('still-look',on&&stillOn);document.body.classList.toggle('fork-look',on&&forkOn);document.body.classList.toggle('garage-look',on&&garageOn);document.body.classList.toggle('quotes-look',on&&quoteOn);document.body.classList.toggle('dash-look',on&&(dashOn||quoteOn||garageOn||forkOn||stillOn||seamsOn||egoOn||scaleOn||beaconOn||sporesOn));document.body.classList.toggle('bench-look',on&&!dockOn);document.body.classList.toggle('drydock-look',on&&dockOn);
 if(!on){benchFrameKey='';return;}
 if(Math.abs(view.angle-view.targetAngle)>.01)return;
 const c=$('#inspector').getBoundingClientRect(),n=$('.territory-nav').getBoundingClientRect(),bar=$('.toolbar').getBoundingClientRect();
 const portrait=innerWidth<=900&&innerHeight>innerWidth;
 const rect=portrait?{left:14,right:bar.left-10,top:n.bottom+((stillOn||seamsOn||egoOn||scaleOn||beaconOn||sporesOn)?6:14),bottom:c.top-((stillOn||seamsOn||egoOn||scaleOn||beaconOn||sporesOn)?6:14)}:{left:Math.max(c.right+18,n.right+18),right:bar.left-18,top:80,bottom:innerHeight-80};
 // Landscape's card is on the right: use the band above it for the workbench.
 if(innerWidth<=900&&!portrait){rect.left=n.right+12;rect.right=innerWidth-16;rect.top=bar.bottom+10;rect.bottom=c.top-10;}
 if((dashOn||quoteOn||garageOn||forkOn||stillOn||seamsOn||egoOn||scaleOn||beaconOn||sporesOn)&&innerWidth<=900&&!portrait){rect.left=12;rect.right=c.left-12;rect.top=n.bottom+10;rect.bottom=$('footer').getBoundingClientRect().top-12;}
 const diary=$('.resident-history');
 if(dockOn&&innerWidth>900&&diary&&!diary.hidden)rect.right=Math.min(rect.right,diary.getBoundingClientRect().left-18);
 const gd=garageOn?garage.inspect():null,garageCorners=[];
 if(gd){const reach=Math.max(gd.gap,gd.range,gd.flight?.range||0),apex=Math.max(gd.apex,gd.flight?.apex||0);for(const x of [-34,-32+.7*reach+1.6])for(const y of [-1.3,Math.max(1.5,.8+.5*apex)])for(const z of [-26,-19.8])garageCorners.push(new THREE.Vector3(x,y,z));}
 const key=[gd?.gap||0,gd?.range||0,gd?.apex||0,sporesOn?23:beaconOn?22:scaleOn?21:egoOn?20:seamsOn?19:stillOn?18:forkOn?17:garageOn?16:quoteOn?15:dashOn?14:dockOn?13:12,innerWidth,innerHeight,rect.left,rect.right,rect.top,rect.bottom,view.targetAngle].map(v=>Math.round(v*10)/10).join(':');
 if(key===benchFrameKey||rect.bottom-rect.top<35||rect.right-rect.left<50)return;
 benchFrameKey=key;
 const bounds=()=>{camera.updateMatrixWorld();const ps=(sporesOn?sporesCorners:beaconOn?beaconCorners:scaleOn?scaleCorners:egoOn?egoCorners:seamsOn?seamsCorners:stillOn?stillCorners:forkOn?forkCorners:garageOn?garageCorners:quoteOn?quoteCorners:dashOn?dashCorners:dockOn?drydockCorners:benchCorners).map(v=>project(v.clone()));return {l:Math.min(...ps.map(p=>p.x)),r:Math.max(...ps.map(p=>p.x)),t:Math.min(...ps.map(p=>p.y)),b:Math.max(...ps.map(p=>p.y))};};
 let b=bounds();camera.zoom=Math.min(4.5,camera.zoom*Math.min((rect.right-rect.left)/(b.r-b.l),(rect.bottom-rect.top)/(b.b-b.t)));camera.updateProjectionMatrix();b=bounds();
 const dx=(rect.left+rect.right-b.l-b.r)/2,dy=(rect.top+rect.bottom-b.t-b.b)/2;
 const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);
 const shift=right.multiplyScalar(-dx*(camera.right-camera.left)/camera.zoom/innerWidth).add(up.multiplyScalar(dy*(camera.top-camera.bottom)/camera.zoom/innerHeight));
 controls.target.add(shift);camera.position.add(shift);camera.lookAt(controls.target);camera.updateMatrixWorld();
}
// Fit only this dream into its measured free area, including rotated phones.
let roofDreamFrameKey='';
const focusDreamCorners=[];for(let i=0;i<20;i++){const a=i*Math.PI/10;for(const y of [-.4,1.5])focusDreamCorners.push(new THREE.Vector3(Math.sin(a)*4.4,y,Math.cos(a)*4.4));}for(const x of [-2.4,2.4])for(const y of [1.5,4.1])for(const z of [-3,.5])focusDreamCorners.push(new THREE.Vector3(x,y,z));
const focusInsideCorners=[];for(let i=0;i<20;i++){const a=i*Math.PI/10;for(const y of [-.4,2.5])focusInsideCorners.push(new THREE.Vector3(Math.sin(a)*3.05,y,Math.cos(a)*3.05));}
const absenceDreamCorners=[];for(const x of [-4.4,4.4])for(const y of [-.5,4.95])for(const z of [-4.4,4.4])absenceDreamCorners.push(new THREE.Vector3(x,y,z));
const roomDreamCorners=[];for(const x of [-4.5,4.5])for(const y of [-.4,4.5])for(const z of [-3.8,3.8])roomDreamCorners.push(new THREE.Vector3(x,y,z));
const rainDreamCorners=[];for(const x of [-4.1,4.1])for(const y of [-.4,5.8])for(const z of [-3.4,3.4])rainDreamCorners.push(new THREE.Vector3(x,y,z));
const earDreamCorners=[];for(const x of [-4.5,4.5])for(const y of [-.6,5.3])for(const z of [-3.3,3.7])earDreamCorners.push(new THREE.Vector3(x,y,z));
const torchDreamCorners=[];for(const x of [-3.6,3.6])for(const y of [-.65,4.8])for(const z of [-3.6,3.6])torchDreamCorners.push(new THREE.Vector3(x,y,z));
const pocketDreamCorners=[];for(const x of [-4.1,4.1])for(const y of [-.65,6.55])for(const z of [-4.1,4.1])pocketDreamCorners.push(new THREE.Vector3(x,y,z));
const meterDreamCorners=[];for(const x of [-3.85,3.85])for(const y of [-.65,4.85])for(const z of [-3.85,3.85])meterDreamCorners.push(new THREE.Vector3(x,y,z));
const roofDreamCorners=[];for(const x of [-4.35,4.35])for(const y of [-.65,5.65])for(const z of [-4.2,4.2])roofDreamCorners.push(new THREE.Vector3(x,y,z));
function frameRoofDream(){
 if(!dreamCamera||![4,5,6,7,8,9,10,11,12,13].includes(dreamId))return;
 const card=$('#dream-panel').getBoundingClientRect(),footer=$('footer').getBoundingClientRect(),toolbar=$('.toolbar').getBoundingClientRect();
 const landscape=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600;
 const portrait=innerWidth<=900&&!landscape;
 const rect=landscape?{left:12,right:card.left-(dreamId===13?20:12),top:42,bottom:footer.top-12}:portrait?{left:12,right:[12,13].includes(dreamId)?toolbar.left-12:innerWidth-12,top:45,bottom:card.top-12}:{left:card.right+24,right:toolbar.left-18,top:70,bottom:footer.top-24};
 const key=[innerWidth,innerHeight,rect.left,rect.right,rect.top,rect.bottom,Math.round(view.angle*100),dreamId===13?focusDream.inspect().phase:''].join(':');
 if(key===roofDreamFrameKey||rect.right-rect.left<60||rect.bottom-rect.top<80)return;roofDreamFrameKey=key;
 const bounds=()=>{camera.updateMatrixWorld();const ps=(dreamId===13?(focusDream.inspect().phase==='inside'?focusInsideCorners:focusDreamCorners):dreamId===12?absenceDreamCorners:dreamId===11?roomDreamCorners:dreamId===10?rainDreamCorners:dreamId===9?earDreamCorners:dreamId===8?torchDreamCorners:dreamId===7?pocketDreamCorners:dreamId===5?meterDreamCorners:roofDreamCorners).map(v=>project(v.clone()));return {l:Math.min(...ps.map(p=>p.x)),r:Math.max(...ps.map(p=>p.x)),t:Math.min(...ps.map(p=>p.y)),b:Math.max(...ps.map(p=>p.y))};};
 let b=bounds();camera.zoom=Math.min(4.5,camera.zoom*Math.min((rect.right-rect.left)/(b.r-b.l),(rect.bottom-rect.top)/(b.b-b.t)));camera.updateProjectionMatrix();b=bounds();
 const dx=(rect.left+rect.right-b.l-b.r)/2,dy=(rect.top+rect.bottom-b.t-b.b)/2;
 const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);
 const shift=right.multiplyScalar(-dx*(camera.right-camera.left)/camera.zoom/innerWidth).add(up.multiplyScalar(dy*(camera.top-camera.bottom)/camera.zoom/innerHeight));
 controls.target.add(shift);camera.position.add(shift);camera.lookAt(controls.target);camera.updateMatrixWorld();
}
let previousFrame=performance.now(),elapsed=0,lastChime=0;
function project(v){v.project(camera);return {x:(v.x+1)*innerWidth/2,y:(1-v.y)*innerHeight/2,z:v.z};}
function loop(){resident.sync();const now=performance.now(),dt=(now-previousFrame)/1000;previousFrame=now;elapsed+=dt;state.energy=THREE.MathUtils.damp(state.energy,state.running?1:0,1.6,dt);const time=reduced?elapsed*.2:elapsed;
 view.angle=THREE.MathUtils.damp(view.angle,view.targetAngle,5,dt);const distance=160;camera.position.set(controls.target.x+Math.sin(view.angle)*distance,controls.target.y+distance*Math.SQRT1_2,controls.target.z+Math.cos(view.angle)*distance);camera.lookAt(controls.target);controls.update();
 if(!dreamCamera&&!(['scale','beacon','spores'].includes(focused)&&state.selected===focused&&!$('#inspector').classList.contains('collapsed'))){controls.target.x=THREE.MathUtils.clamp(controls.target.x,-territory.half-2,territory.half+2);controls.target.z=THREE.MathUtils.clamp(controls.target.z,-territory.half-2,territory.half+2);}territory.update();frameBench();frameRoofDream();
 for(const p of pendulums)p.group.rotation.x=Math.sin(time*(1.45+p.phase*.07))*state.energy*.45;
 roof.position.z=THREE.MathUtils.damp(roof.position.z,roofIsOpen()?-2.5:0,2,dt);roof.position.y=THREE.MathUtils.damp(roof.position.y,roofIsOpen()?.4:0,2,dt);wheel.rotation.z=time*state.energy*.28;needle.rotation.z=-.7+state.energy*1.35+Math.sin(time*4)*state.energy*.08;engineLamp.material.emissiveIntensity=.45+state.energy*1.5;
 waterMat.uniforms.uTime.value=time;waterMat.uniforms.uEnergy.value=state.energy;windmill.rotation.z=time*(.09+state.energy*.23);yardLamps.forEach(l=>l.intensity=.65+state.energy*1.5);workshopLight.intensity=2+state.energy*4;
 head.position.x=THREE.MathUtils.damp(head.position.x,headDestination.x,1.6,dt);head.position.z=THREE.MathUtils.damp(head.position.z,headDestination.z,1.6,dt);head.position.y=THREE.MathUtils.damp(head.position.y,headDestination.y+Math.sin(time*1.4)*.1,2,dt);if(state.loop>0){
  state.loop=Math.max(0,state.loop-dt);const t=12-state.loop;
  if(t<2){const u=THREE.MathUtils.smoothstep(t,0,2);head.position.lerpVectors(loopStart,new THREE.Vector3(-6,.65,-3.25),u);}
  else if(t<10){const a=-Math.PI/2+(t-2)/8*Math.PI*2;head.position.set(-6,2.18+Math.sin(a)*1.6,-3.25+Math.cos(a)*1.6);head.rotation.x=(t-2)/8*Math.PI*2;}
  else{const u=THREE.MathUtils.smoothstep(t,10,12);head.position.lerpVectors(new THREE.Vector3(-6,.65,-3.25),headDestination,u);head.rotation.x=(1-u)*Math.PI*2;}
  if(!state.loop){head.rotation.x=0;say('ну вот и дома');refresh();}
 }resident.place();head.rotation.y=Math.sin(time*.3)*.12;halo.rotation.y=time*.13;floatRing.position.x=head.position.x;floatRing.position.z=head.position.z;floatRing.rotation.z=.04*Math.sin(time);headShadow.position.x=head.position.x;headShadow.position.z=head.position.z;
 growth=THREE.MathUtils.damp(growth,1,.85,dt);livingGarden.scale.y=growth;livingGarden.rotation.z=Math.sin(time*.9)*.009;
 if(state.brew>0){state.brew=Math.max(0,state.brew-dt);if(state.brew===0){say('чай готов. живём.');refresh();chime(440);}}steam.forEach((s,i)=>{const phase=(time*.28+i/9)%1;s.visible=state.brew>0;s.position.set(.1+Math.sin(phase*4+i)*.08,1.2+phase*.85,Math.cos(phase*5+i)*.07);s.scale.setScalar(.035+phase*.09);});
 boats.forEach((b,i)=>{b.position.x=3.4+i*.75+Math.sin(time*.2+i)*.17;b.position.z=3.5+Math.sin(time*.26+i*2)*.58;b.position.y=.35+Math.sin(time*1.2+i)*.022;b.rotation.y=.3+Math.sin(time*.2+i)*.2});
 sleepBody.update(resident.watching());sleepDream.update(dt,time);quietDream.update(dt,time);roofDream.update(dt,time);meterDream.update(dt,time);cloudDream.update(dt,time);pocketDream.update(dt,time);torchDream.update(dt,time);earDream.update(dt,time);rainDream.update(dt,time);roomDream.update(dt,time);absenceDream.update(dt,time);focusDream.update(dt,time);spores.update(dt);beacon.update(dt);scale.update(dt);ego.update(dt);seams.update(dt);still.update(dt,time);fork.update(dt);garage.update(dt);quotes.update(dt);dash.update(dt);drydock.update(dt);bench.update(dt);roof.visible=!(focused==='bench'&&state.selected==='bench'&&!$('#inspector').classList.contains('collapsed')&&!dreamCamera);amnesty.update(dt,time);cellar.update(elapsed);greenhouse.update(dt,time);dockLife.update(dt,time);if(dockWasWaiting!==state.dockPending){dockWasWaiting=state.dockPending;hotspotElements.dock.classList.toggle('waiting',dockWasWaiting);}
 falls.forEach((o,i)=>{o.scale.y=.8+Math.sin(time*2+i)*.12;o.material.opacity=.25+state.energy*.23;});dustPoints.rotation.y=time*.003;
 if(state.running&&time-lastChime>3.5){lastChime=time;chime([220,277,330,415,440][Math.floor(time)%5]);}
 // Match this frame's rendered camera before projecting DOM anchors.
 camera.updateMatrixWorld();
 projectedMarkers.update(!dreamCamera&&camera.zoom>=.4&&state.markers,viewport.width,viewport.height);
 if(dreamCamera||now>speechUntil){if(speechElement.classList.contains('visible'))speechElement.classList.remove('visible');}
 else {
  speechPoint.copy(head.position);speechPoint.y+=1.52;speechPoint.project(camera);
  const x=Math.round(Math.max(85,Math.min(viewport.width-85,(speechPoint.x+1)*viewport.width*.5))*10)/10;
  const y=Math.round((1-speechPoint.y)*viewport.height*.5*10)/10;
  if(x!==speechX||y!==speechY){speechX=x;speechY=y;speechElement.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-100%)`;}
 }
 if(shadowRefreshAt&&performance.now()>shadowRefreshAt){renderer.shadowMap.needsUpdate=true;shadowRefreshAt=0;}renderer.render(scene,camera);
}
if(state.running)$('#object-action').innerHTML='остановить двор <span>↗</span>';refresh();renderer.setAnimationLoop(loop);requestAnimationFrame(()=>$('#loading').classList.add('done'));
// Inspection surface for repeatable browser smoke tests.
window.__yard={state,select,sporesGeometry:()=>spores.geometryPoints().map(v=>project(v)),focusGeometry:()=>focusDream.geometryPoints().map(v=>project(v)),inspect:()=>({resident:resident.inspect(),territory:territory.inspect(),sleepBody:sleepBody.inspect(),focusDream:focusDream.inspect(),focusDreamScreen:focusDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),focusRingScreen:focusDream.inspect().ringPoints.map(p=>project(new THREE.Vector3(...p))),focusShutterScreen:project(new THREE.Vector3(...focusDream.inspect().shutterPoint)),focusDreamBounds:focusDreamCorners.map(v=>project(v.clone())),sleepDream:sleepDream.inspect(),quietDream:quietDream.inspect(),absenceDream:absenceDream.inspect(),absenceDreamScreen:absenceDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),roomDream:roomDream.inspect(),roomDreamScreen:roomDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),rainDream:rainDream.inspect(),rainDreamScreen:rainDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),earDream:earDream.inspect(),earDreamScreen:earDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),torchDream:torchDream.inspect(),torchDreamScreen:torchDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),pocketDream:pocketDream.inspect(),pocketDreamScreen:pocketDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),cloudDream:cloudDream.inspect(),cloudDreamScreen:cloudDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),meterDream:meterDream.inspect(),meterDreamScreen:meterDream.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),roofDream:roofDream.inspect(),roofDreamGoalScreen:roofDream.inspect().goals.map(p=>project(new THREE.Vector3(...p))),roofDreamLetterScreen:project(new THREE.Vector3(...roofDream.inspect().letter)),dreamId:dreamCamera?dreamId:null,spores:spores.inspect(),sporesBounds:sporesCorners.map(v=>project(v.clone())),sporesScreens:spores.inspect().caps.map(p=>project(new THREE.Vector3(...p))),beacon:beacon.inspect(),beaconBounds:beaconCorners.map(v=>project(v.clone())),beaconMirrorScreens:beacon.inspect().mirrorWorld.map(p=>project(new THREE.Vector3(...p).add(new THREE.Vector3(0,.9,0)))),beaconScreen:project(new THREE.Vector3(-48,-1,0)),scale:scale.inspect(),scaleBounds:scaleCorners.map(v=>project(v.clone())),scaleScreen:project(new THREE.Vector3(18.6,-.3,-48)),ego:ego.inspect(),egoBounds:egoCorners.map(v=>project(v.clone())),egoScreen:project(new THREE.Vector3(.6,2,-48.7)),egoScreens:ego.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),seams:seams.inspect(),seamsBounds:seamsCorners.map(v=>project(v.clone())),seamsScreen:project(new THREE.Vector3(-24,1,-48)),seamsScreens:seams.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),still:still.inspect(),stillBounds:stillCorners.map(v=>project(v.clone())),stillScreen:project(new THREE.Vector3(24,.3,-24)),stillScreens:still.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),fork:fork.inspect(),forkScreen:project(new THREE.Vector3(-23,.1,-32)),forkScreens:fork.inspect().landmarks.map(p=>project(new THREE.Vector3(...p))),garage:garage.inspect(),garageScreen:project(new THREE.Vector3(...garage.inspect().garage).add(new THREE.Vector3(-24,-.7,-24))),garageCarScreen:project(new THREE.Vector3(-32,-.7,-24)),quotes:quotes.inspect(),quoteScreens:quotes.inspect().quotePositions.map(p=>project(new THREE.Vector3(...p).add(new THREE.Vector3(24,-1.05,24)))),dash:dash.inspect(),dashSnailScreen:project(new THREE.Vector3(...dash.inspect().snail).add(new THREE.Vector3(0,-1.0,-24))),dashBeamScreen:project(new THREE.Vector3(...dash.inspect().beam).add(new THREE.Vector3(0,-1.5,-24))),drydock:drydock.inspect(),drydockShipScreen:project(new THREE.Vector3(...drydock.inspect().ship).add(new THREE.Vector3(-24,-.5,0))),bench:bench.inspect(),benchScreen:project(new THREE.Vector3(-2.65,1.58,-3.18)),benchBucketScreen:project(new THREE.Vector3(-4.75,1.51,-3.63)),roofVisible:roof.visible,amnesty:amnesty.inspect(),amnestyScreen:project(new THREE.Vector3(0,-.3,24)),cellar:cellar.inspect(),cellarScreen:project(new THREE.Vector3(24,-.3,.25)),objects:Object.keys(entries),greenhouse:greenhouse.inspect(),dock:dockLife.inspect(),boatScreen:project(new THREE.Vector3(...dockLife.inspect().boat).add(new THREE.Vector3(0,.20,0))),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,gpuGeometries:renderer.info.memory.geometries,zoom:camera.zoom,maxZoom:controls.maxZoom,target:controls.target.toArray(),angle:view.angle,head:head.position.toArray(),roof:roof.position.toArray(),roofOpen:roofIsOpen(),roofMode:state.roof===null?'auto':'manual',pendulums:pendulums.map(p=>p.group.rotation.x),growth,meshes:(()=>{let n=0;scene.traverse(o=>{if(o.isMesh)n++});return n;})(),canvas:[renderer.domElement.width,renderer.domElement.height]})};

installUILayout();
