import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import './style.css';

// Everything in the yard is made here. No remote assets, no telemetry.
const $ = s => document.querySelector(s);
const mobile = () => innerWidth < 700;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let saved={};try{saved=JSON.parse(localStorage.getItem('beznogim-yard-v1')||'{}')}catch{}
const state={loop:0,roof:0,running:!!saved.running,harvest:Math.min(99,Math.max(0,Number(saved.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,radio:0,markers:true,selected:null,sound:false};
function persist(){try{localStorage.setItem('beznogim-yard-v1',JSON.stringify({running:state.running,harvest:state.harvest}))}catch{}}
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,mobile()?1.5:2));renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.22;
$('#world').append(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color('#182e32');scene.fog=new THREE.FogExp2('#182e32',.003);
const camera=new THREE.OrthographicCamera(-10,10,10,-10,.1,150);
const target=new THREE.Vector3(0,1.0,0);camera.position.set(20,20,24);camera.lookAt(target);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.copy(target);controls.enableDamping=true;controls.enableRotate=false;controls.enablePan=true;controls.minZoom=.65;controls.maxZoom=2.5;controls.screenSpacePanning=true;controls.mouseButtons.LEFT=THREE.MOUSE.PAN;controls.mouseButtons.RIGHT=THREE.MOUSE.PAN;controls.touches.ONE=THREE.TOUCH.PAN;controls.touches.TWO=THREE.TOUCH.DOLLY_PAN;
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
for(let i=0;i<2;i++){rounded([-.55+i*1.3,1.25,-.85],[.78,.59,.5],M.dark,workshop);box([-.55+i*1.3,1.27,-.591],[.62,.41,.012],mat('#70a58b',{emissive:'#87cfa6',emissiveIntensity:.65}),workshop);for(let j=0;j<4;j++)box([-.65+i*1.3,1.18+j*.055,-.58],[.21+rand()*.3,.012,.012],M.mint,workshop);box([-.5+i*1.3,.94,-.35],[.75,.035,.25],M.cream,workshop)}
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
const dock=group([7.25,-.03,1.5]);box([0,-.12,0],[2.25,.3,2],M.metal,dock);for(let i=0;i<10;i++)box([-.99+i*.22,.08,0],[.2,.08,2.1],M.rust,dock);box([-.95,.2,-.95],[.35,.15,.35],M.dark,dock);cyl([.87,.34,.75],.075,.5,M.copper,dock);cyl([.87,.59,.75],.13,.05,M.cream,dock);
rod([.87,.1,-.7],[.87,2.3,-.7],.035,M.copper,dock);tube([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,M.copper,dock);box([.17,2.09,-.7],[.25,.4,.25],M.light,dock);box([.17,2.32,-.7],[.34,.08,.34],M.dark,dock);
for(let i=0;i<4;i++)torus([.87,.15,.75],.24-i*.025,.024,mat('#b8ad86'),dock);
box([6.7,.07,1.5],[1.4,.13,.8],M.rust);
sign('НИКУДА',[.05,.28,1.07],1.3,.29,dock,{bg:'#c2c7a3',fg:'#445e45',size:45});
const boats=[];function paperBoat(parent,p,s=1){const g=group(p,parent);const shape=new THREE.Shape();shape.moveTo(-.36,0);shape.lineTo(.36,0);shape.lineTo(.22,-.16);shape.lineTo(-.22,-.16);shape.closePath();const hull=mesh(new THREE.ExtrudeGeometry(shape,{depth:.19,bevelEnabled:false}),mat('#dfc99a'),[0,.15,-.1],null,g);const sail=mesh(new THREE.ConeGeometry(.23,.36,3),M.cream,[0,.27,0],[1,1,.38],g);sail.rotation.y=Math.PI/2;g.scale.setScalar(s);return g;}
for(let i=0;i<3;i++){const b=paperBoat(root,[3.3+i*.72,.35,3.6+Math.sin(i)*.4],.75);boats.push(b)}
paperBoat(dock,[-.45,.25,.2],.9);
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
batchStatic(root,[head,garden,engine,tea,radio,dock,workshop,stair,windmill,...boats,...steam,...falls,floatRing,headShadow]);
batchStatic(workshop,[roof]);batchStatic(roof,[]);batchStatic(stair,[]);
batchStatic(head,[halo]);head.traverse(o=>{if(o.isMesh)o.castShadow=false});batchStatic(tea,[...steam]);batchStatic(radio,[]);batchStatic(dock,[]);
batchStatic(engine,[...pendulums.map(p=>p.group),wheel,needle,engineLamp]);
pendulums.forEach(p=>batchStatic(p.group,[]));
const livingGarden=group([0,.33,0],garden);vegetables.forEach(p=>{livingGarden.add(p);p.position.y-=.33;});batchStatic(livingGarden,[]);batchStatic(garden,[livingGarden]);

// Interaction layer: geometry clicks and accessible projected buttons share actions.
const entries={
 stair:{n:'08',label:'петля',title:'лестница обратно',description:'Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.',action:'прокатиться головой',point:()=>new THREE.Vector3(-6,4.55,-3.25),position:new THREE.Vector3(-6,2.2,-3.25),run:()=>{if(state.loop>0)return;state.loop=12;loopStart.copy(head.position);say('ноги не понадобились');refresh();}},
 workshop:{n:'07',label:'мастерская',title:'дома без фильтров',description:'Здесь два старых монитора, провода и никакого дедлайна. Крышу можно отодвинуть.',action:'отодвинуть крышу',point:()=>new THREE.Vector3(-3.2,3.15,-2.5),position:new THREE.Vector3(-3.2,1.1,-2.5),run:()=>{state.roof=state.roof?0:1;say(state.roof?'заходи':'прикрыл');refresh();}},
 head:{n:'01',label:'голова',title:'это я. безногим.',description:'Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.',action:'позвать голову',point:()=>head.position.clone().add(new THREE.Vector3(0,1.35,0)),position:new THREE.Vector3(-.15,1.9,.85),run:()=>{const lines=['чё как','ног нет, чай есть','я тут поживу','не, на маятнике завис','ну запусти, чё'];say(lines[headClicks++%lines.length]);headDestination.set(-.15,1.9,.85);}},
 engine:{n:'02',label:'маятники',title:'машина тихого хода',description:'Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.',action:'запустить маятники',point:()=>new THREE.Vector3(3.7,3.85,-2.6),position:new THREE.Vector3(3.7,1,-2.6),run:()=>{state.running=!state.running;persist();say(state.running?'ну пошло':'можно и полежать');refresh();}},
 tea:{n:'03',label:'чайник',title:'ног нет, чай есть',description:'Чайник работает без подписки. Поставь чай, я подлечу.',action:'поставить чай',point:()=>new THREE.Vector3(-3.7,1.65,.35),position:new THREE.Vector3(-3.8,1,.35),run:()=>{if(state.brew>0)return;state.brew=8;state.teaCount++;headDestination.set(-2.65,1.7,.65);say('щас, чайник поставлю');refresh();}},
 garden:{n:'04',label:'огород',title:'королевские кобачки',description:'Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.',action:'собрать и вырастить снова',point:()=>new THREE.Vector3(-3.4,1,3.8),position:new THREE.Vector3(-3.6,1,3.55),run:()=>{state.harvest++;growth=.15;persist();headDestination.set(-1.6,1.6,2.3);say(state.harvest===1?'о, урожай':'кабачки опять победили');refresh();}},
 radio:{n:'05',label:'радио',title:'никто не вещает',description:'Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.',action:'покрутить ручку',point:()=>new THREE.Vector3(-5.65,1.75,1.1),position:new THREE.Vector3(-5.65,1,1.1),run:()=>{state.radio=(state.radio+1)%3;setAudioTone();say(['тишина. нормально.','дождь поймал','провода поют'][state.radio]);refresh();}},
 dock:{n:'06',label:'причал',title:'причал «никуда»',description:'Отсюда пока некуда плыть. Но бумажный кораблик всё равно можно отпустить.',action:'отпустить кораблик',point:()=>new THREE.Vector3(7.3,1,1.7),position:new THREE.Vector3(7.3,.3,1.7),run:()=>{if(state.boat>0)return;state.boat=12;activeBoat=paperBoat(root,[7.3,.2,2.2],1);say('ну плыви');refresh();}}
};
let headClicks=0,growth=1,activeBoat=null,speechUntil=0,shadowRefreshAt=0;const loopStart=new THREE.Vector3();
let activeAction=()=>{select('engine');entries.engine.run()};
const hotspotElements={};for(const [id,e]of Object.entries(entries)){const b=document.createElement('button');b.className='hotspot';b.textContent=e.n;b.dataset.label=e.label;b.title=e.label;b.setAttribute('aria-label',e.label);b.onclick=()=>select(id);$('#hotspots').append(b);hotspotElements[id]=b;}
function select(id){state.selected=id;$('#inspector').classList.remove('collapsed');const e=entries[id];$('#object-kicker').textContent=`${e.n} / ${e.label.toUpperCase()}`;$('#object-title').textContent=e.title;$('#object-description').textContent=e.description;activeAction=e.run;refresh();for(const [k,b]of Object.entries(hotspotElements))b.classList.toggle('selected',k===id);}
function refresh(){const id=state.selected,e=entries[id];$('#status').textContent=state.running?'двор проснулся':'всё потихоньку';if(!e)return;let action=e.action,desc=e.description,disabled=false;if(id==='stair'){disabled=state.loop>0;action=disabled?'кручусь…':e.action;}if(id==='workshop')action=state.roof?'закрыть крышу':e.action;if(id==='engine'){action=state.running?'остановить и отдохнуть':'запустить маятники';desc=state.running?'Качаются. Свет горит, вода идёт. Можно ничего больше не делать.':e.description;}if(id==='tea'){disabled=state.brew>0;action=disabled?'чай заваривается…':e.action;desc=state.teaCount?'Чай поставлен. Подлетел, посидел. Хорошо.':e.description;}if(id==='garden'&&state.harvest)desc=`Уже собрано: ${state.harvest}. Растут обратно, пока никто не смотрит.`;if(id==='radio'){desc=`Сейчас: ${['тишина','дождь','провода'][state.radio]}. ${state.sound?'Звук включён.':'Чтобы услышать, включи звук внизу.'}`;}if(id==='dock'){disabled=state.boat>0;action=disabled?'уже плывёт…':e.action;}$('#object-description').textContent=desc;$('#object-action').innerHTML=action+' <span>↗</span>';$('#object-action').disabled=disabled;}
$('#object-action').onclick=()=>{activeAction();shadowRefreshAt=performance.now()+2200;};$('#close-card').onclick=()=>$('#inspector').classList.add('collapsed');
function say(s){$('#speech').textContent=s;speechUntil=performance.now()+4000;$('#speech').classList.add('visible');}
$('#markers').onclick=()=>{state.markers=!state.markers;$('#markers').setAttribute('aria-pressed',state.markers)};
const view={angle:Math.PI/4,targetAngle:Math.PI/4};
function resize(){const aspect=innerWidth/innerHeight;const h=mobile()?19.6:9.6;camera.left=-h*aspect;camera.right=h*aspect;camera.top=h-(mobile()?2.8:0);camera.bottom=-h-(mobile()?2.8:0);camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,mobile()?1.5:2));}
function home(){controls.enableDamping=false;controls.update();controls.enableDamping=true;camera.zoom=1;controls.target.copy(target);view.targetAngle=Math.PI/4;camera.updateProjectionMatrix();}
$('#home').onclick=home;$('#zoom-in').onclick=()=>{camera.zoom=Math.min(2.5,camera.zoom*1.2);camera.updateProjectionMatrix()};$('#zoom-out').onclick=()=>{camera.zoom=Math.max(.65,camera.zoom/1.2);camera.updateProjectionMatrix()};$('#rotate').onclick=()=>view.targetAngle+=Math.PI/2;addEventListener('resize',resize);resize();
// Ray picking catches nearby points on the actual object silhouettes. No clicks while dragging.
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down=null;
renderer.domElement.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,time:performance.now()}});
renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down.x,e.clientY-down.y)>7||performance.now()-down.time>550){down=null;return;}down=null;pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects([head,engine,garden,tea,radio,dock,workshop,stair],true);if(hits.length){let o=hits[0].object;while(o.parent&&![head,engine,garden,tea,radio,dock,workshop,stair].includes(o))o=o.parent;const id=new Map([[head,'head'],[engine,'engine'],[garden,'garden'],[tea,'tea'],[radio,'radio'],[dock,'dock'],[workshop,'workshop'],[stair,'stair']]).get(o);if(id)select(id);}else{let best=null,dist=Infinity;for(const [id,v]of Object.entries(entries)){const p=v.position.clone().project(camera);let d=Math.hypot((p.x+1)*innerWidth*.5-e.clientX,(-p.y+1)*innerHeight*.5-e.clientY);if(d<dist){dist=d;best=id}}if(dist<45)select(best);}});
// On demand WebAudio. No autoplay, no sampled tracks.
let audio=null;function createAudio(){const ctx=new (window.AudioContext||window.webkitAudioContext)();const gain=ctx.createGain();gain.gain.value=.08;gain.connect(ctx.destination);const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=400;filter.connect(gain);const buf=ctx.createBuffer(1,ctx.sampleRate*3,ctx.sampleRate);const data=buf.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;const noise=ctx.createBufferSource();noise.buffer=buf;noise.loop=true;noise.connect(filter);noise.start();const toneGain=ctx.createGain();toneGain.gain.value=.1;toneGain.connect(gain);const tones=[55,82.41,110].map(f=>{let o=ctx.createOscillator();o.type='sine';o.frequency.value=f;o.connect(toneGain);o.start();return o});return {ctx,gain,filter,toneGain,tones};}
function setAudioTone(){if(!audio)return;const t=audio.ctx.currentTime;audio.filter.frequency.setTargetAtTime([160,1100,260][state.radio],t,.4);audio.toneGain.gain.setTargetAtTime([.05,.025,.3][state.radio],t,.4);}
$('#sound').onclick=async()=>{try{audio ||= createAudio();await audio.ctx.resume();state.sound=!state.sound;audio.gain.gain.setTargetAtTime(state.sound?.08:0,audio.ctx.currentTime,.3);$('#sound').textContent=state.sound?'звук включён':'звук выключен';$('#sound').setAttribute('aria-pressed',state.sound);setAudioTone();refresh();}catch{say('со звуком не сложилось')}};
function chime(freq=330){if(!audio||!state.sound)return;const t=audio.ctx.currentTime;const o=audio.ctx.createOscillator(),g=audio.ctx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.012);g.gain.exponentialRampToValueAtTime(.001,t+1);o.connect(g);g.connect(audio.gain);o.start(t);o.stop(t+1.1);}
$('#about').onclick=()=>$('#about-dialog').showModal();$('#close-about').onclick=$('#back-to-yard').onclick=()=>$('#about-dialog').close();
addEventListener('keydown',e=>{if($('#about-dialog').open)return;if(e.key==='Escape')$('#inspector').classList.add('collapsed');if(e.key==='+'||e.key==='=')$('#zoom-in').click();if(e.key==='-')$('#zoom-out').click();if(e.key.toLowerCase()==='r')$('#rotate').click();if(e.key.toLowerCase()==='h')home();});
let previousFrame=performance.now(),elapsed=0,lastChime=0;
function project(v){v.project(camera);return {x:(v.x+1)*innerWidth/2,y:(1-v.y)*innerHeight/2,z:v.z};}
function loop(){const now=performance.now(),dt=(now-previousFrame)/1000;previousFrame=now;elapsed+=dt;state.energy=THREE.MathUtils.damp(state.energy,state.running?1:0,1.6,dt);const time=reduced?elapsed*.2:elapsed;
 view.angle=THREE.MathUtils.damp(view.angle,view.targetAngle,5,dt);const distance=34;camera.position.set(controls.target.x+Math.sin(view.angle)*distance,controls.target.y+distance*Math.SQRT1_2,controls.target.z+Math.cos(view.angle)*distance);camera.lookAt(controls.target);controls.update();
 for(const p of pendulums)p.group.rotation.x=Math.sin(time*(1.45+p.phase*.07))*state.energy*.45;
 roof.position.z=THREE.MathUtils.damp(roof.position.z,(state.roof||state.running||state.loop>0)?-2.5:0,2,dt);roof.position.y=THREE.MathUtils.damp(roof.position.y,(state.roof||state.running||state.loop>0)?.4:0,2,dt);wheel.rotation.z=time*state.energy*.28;needle.rotation.z=-.7+state.energy*1.35+Math.sin(time*4)*state.energy*.08;engineLamp.material.emissiveIntensity=.45+state.energy*1.5;
 waterMat.uniforms.uTime.value=time;waterMat.uniforms.uEnergy.value=state.energy;windmill.rotation.z=time*(.09+state.energy*.23);yardLamps.forEach(l=>l.intensity=.65+state.energy*1.5);workshopLight.intensity=2+state.energy*4;
 head.position.x=THREE.MathUtils.damp(head.position.x,headDestination.x,1.6,dt);head.position.z=THREE.MathUtils.damp(head.position.z,headDestination.z,1.6,dt);head.position.y=THREE.MathUtils.damp(head.position.y,headDestination.y+Math.sin(time*1.4)*.1,2,dt);if(state.loop>0){
  state.loop=Math.max(0,state.loop-dt);const t=12-state.loop;
  if(t<2){const u=THREE.MathUtils.smoothstep(t,0,2);head.position.lerpVectors(loopStart,new THREE.Vector3(-6,.65,-3.25),u);}
  else if(t<10){const a=-Math.PI/2+(t-2)/8*Math.PI*2;head.position.set(-6,2.18+Math.sin(a)*1.6,-3.25+Math.cos(a)*1.6);head.rotation.x=(t-2)/8*Math.PI*2;}
  else{const u=THREE.MathUtils.smoothstep(t,10,12);head.position.lerpVectors(new THREE.Vector3(-6,.65,-3.25),headDestination,u);head.rotation.x=(1-u)*Math.PI*2;}
  if(!state.loop){head.rotation.x=0;say('ну вот и дома');refresh();}
 }head.rotation.y=Math.sin(time*.3)*.12;halo.rotation.y=time*.13;floatRing.position.x=head.position.x;floatRing.position.z=head.position.z;floatRing.rotation.z=.04*Math.sin(time);headShadow.position.x=head.position.x;headShadow.position.z=head.position.z;
 growth=THREE.MathUtils.damp(growth,1,.85,dt);livingGarden.scale.y=growth;livingGarden.rotation.z=Math.sin(time*.9)*.009;
 if(state.brew>0){state.brew=Math.max(0,state.brew-dt);if(state.brew===0){say('чай готов. живём.');refresh();chime(440);}}steam.forEach((s,i)=>{const phase=(time*.28+i/9)%1;s.visible=state.brew>0;s.position.set(.1+Math.sin(phase*4+i)*.08,1.2+phase*.85,Math.cos(phase*5+i)*.07);s.scale.setScalar(.035+phase*.09);});
 boats.forEach((b,i)=>{b.position.x=3.4+i*.75+Math.sin(time*.2+i)*.17;b.position.z=3.5+Math.sin(time*.26+i*2)*.58;b.position.y=.35+Math.sin(time*1.2+i)*.022;b.rotation.y=.3+Math.sin(time*.2+i)*.2});
 if(state.boat>0){state.boat=Math.max(0,state.boat-dt);const t=1-state.boat/12;activeBoat.position.set(7.3-t*2.7,.2-Math.max(0,t-.6)*8,2.2+t*4.1);activeBoat.rotation.y=-.2+t;activeBoat.rotation.z=Math.sin(time)*.07;if(state.boat===0){activeBoat.traverse(o=>{if(o.isMesh&&!Object.values(geometries).includes(o.geometry))o.geometry.dispose()});activeBoat.removeFromParent();activeBoat=null;refresh();}}
 falls.forEach((o,i)=>{o.scale.y=.8+Math.sin(time*2+i)*.12;o.material.opacity=.25+state.energy*.23;});dustPoints.rotation.y=time*.003;
 if(state.running&&time-lastChime>3.5){lastChime=time;chime([220,277,330,415,440][Math.floor(time)%5]);}
 for(const [id,e]of Object.entries(entries)){const p=project(e.point());const b=hotspotElements[id];b.style.left=p.x+'px';b.style.top=p.y+'px';b.classList.toggle('hidden',!state.markers||p.z>1||p.x<10||p.x>innerWidth-10||p.y<10||p.y>innerHeight-55);}
 const sp=project(head.position.clone().add(new THREE.Vector3(0,1.52,0)));$('#speech').style.left=Math.max(85,Math.min(innerWidth-85,sp.x))+'px';$('#speech').style.top=sp.y+'px';if(performance.now()>speechUntil)$('#speech').classList.remove('visible');
 if(shadowRefreshAt&&performance.now()>shadowRefreshAt){renderer.shadowMap.needsUpdate=true;shadowRefreshAt=0;}renderer.render(scene,camera);
}
if(state.running)$('#object-action').innerHTML='остановить двор <span>↗</span>';refresh();renderer.setAnimationLoop(loop);requestAnimationFrame(()=>$('#loading').classList.add('done'));
// Inspection surface for repeatable browser smoke tests.
window.__yard={state,select,inspect:()=>({objects:Object.keys(entries),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,zoom:camera.zoom,target:controls.target.toArray(),angle:view.angle,head:head.position.toArray(),roof:roof.position.toArray(),pendulums:pendulums.map(p=>p.group.rotation.x),growth,meshes:(()=>{let n=0;scene.traverse(o=>{if(o.isMesh)n++});return n;})(),canvas:[renderer.domElement.width,renderer.domElement.height]})};
