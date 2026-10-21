(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Mc=()=>({phase:"furnishing",slots:[0,0],progress:0});function Yp(n,e,t){return n.phase==="furnishing"&&Number.isInteger(e)&&e>=0&&e<2&&Number.isInteger(t)&&t>=0&&t<=3?{...n,slots:n.slots.map((i,s)=>s===e?t:i)}:n}const kd=n=>n.slots.every(e=>e>0);function $p(n){return n.phase==="settled"?Mc():n.phase==="furnishing"&&kd(n)?{...n,phase:"walking",progress:0}:n}function Jp(n,e){if(n.phase!=="walking"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/6);return{...n,progress:t,phase:t>=1?"settled":"walking"}}function xo(n){return[1.5,1.2,1.1].map((e,t)=>e+n.filter(i=>i===t+1).length*1.05)}function Zp(n){const e=n*n*(3-2*n);return{x:1.4*e,z:-1.1*e,y:n>=1?0:Math.sin(n*Math.PI*8)*.065,turn:-e*.35}}function Kp({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,tube:u,torus:g,sign:h,batchStatic:d,chime:m,changed:_}){const f=o([0,0,0],e);f.name="dream11-room-for-a-bug",f.visible=!1;const p=r("#264d50"),M=r("#e4d3ae"),A=r("#4e8b69"),x=r("#e7a34d",{metalness:.25,roughness:.35}),b=s.copper,S=o([0,-.25,0],f);a([0,0,0],[8.8,.16,7.5],p,S);for(let F=0;F<7;F++)a([0,.09,-3+F],[8.5,.012,.018],s.mint,S);for(let F=0;F<9;F++)a([-4+F,.09,0],[.018,.012,7.2],s.mint,S);h("ПРОСТОР ДЛЯ БАГА",[0,-.1,3.45],3.3,.28,f,{size:48});const T=i.clone(!0);T.scale.setScalar(.48),T.position.set(-2.5,1.5,2.1),f.add(T);const v=o([0,1,-.6],f),R=o([0,0,0],v);a([0,0,0],[1,.08,1],A,R),a([0,.5,-.5],[1,1,.035],M,R);for(const F of[-.5,.5])for(const w of[-.5,.5])a([F,.5,w],[.025,1,.025],b,R);for(const F of[-.5,.5])a([0,1,F],[1,.035,.035],b,R);for(const F of[-.5,.5])a([F,1,0],[.035,.035,1],b,R);for(let F=0;F<5;F++)a([-.44+F*.22,1.04,0],[.08,.035,1.1],M,R);const P=[];for(let F=0;F<3;F++){const w=o([-.3+F*.3,.6,-.475],R);a([0,0,0],[.17,.3,.018],p,w),a([0,0,.013],[.012,.3,.01],b,w),a([0,0,.013],[.17,.012,.01],b,w),P.push(w)}const U=o([0,.24,.05],v);l([0,0,0],[.38,.22,.49],x,U),a([0,.15,0],[.018,.045,.76],b,U),l([0,.04,.5],[.26,.18,.2],p,U);for(const F of[-.12,.12])l([F,.12,.65],.045,s.cream,U),u([[F,.12,.6],[F*2,.4,.8],[F*2.7,.45,.85]],.015,b,U);const O=[];for(const F of[-1,1])for(let w=0;w<3;w++){const C=o([F*.3,-.02,-.3+w*.3],v);u([[0,0,0],[F*.4,-.35,.15],[F*.6,-.6,.35]],.035,b,C);for(let V=0;V<3;V++)a([F*(.38+V*.09),-.28-V*.12,.18+V*.07],[.24,.055,.16],M,C);O.push(C)}const H=[],B=[],I=[];for(let F=0;F<2;F++){const w=o([-3.2+F*1.4,.12,2.1],f);H.push(w);const C=[];for(let W=0;W<5;W++){const ie=a([0,W*.17,-W*.19],[.5,.09,.3],M,w);C.push(ie)}I.push(C);const V=a([0,0,0],[.58,.055,1.2],A,w);V.visible=!1,B.push(V);for(let W=0;W<5;W++)a([.3,.01,-.5+W*.25],[.09,.03,.09],b,V)}const z=[];for(let F=0;F<3;F++){const w=o([2.7,.2,2.3-F*.75],f);a([0,0,0],[.55,.06,.5],A,w),h(["Ш","Г","В"][F],[0,.1,0],.38,.25,w,{size:60}),z.push(w)}const G=o([-5.55,.52,-3.25],t);l([0,0,0],[.12,.08,.18],x,G);for(const F of[-1,1])for(let w=0;w<3;w++)a([F*.13,-.04,-.1+w*.1],[.14,.025,.025],b,G);a([0,.12,0],[.2,.03,.22],A,G),G.visible=!1,d(S,[]),d(R,P),P.forEach(F=>d(F,[])),d(U,[]),O.forEach(F=>d(F,[])),z.forEach(F=>d(F,[])),d(G,[]);let Y=Mc(),$=!1,q=[0,0],ne=xo(q),ee=!1,ue=null;try{const F=JSON.parse(localStorage.getItem("beznogim-dream11-v1")||"{}");F.trace===!0&&Array.isArray(F.shape)&&F.shape.length===2&&F.shape.every(w=>Number.isInteger(w)&&w>=1&&w<=3)&&(ee=!0,ue=F.shape)}catch{}G.visible=ee;function te(){f.updateMatrixWorld(!0);const F=new n.Box3().setFromObject(f);return{min:F.min.toArray(),max:F.max.toArray()}}function ae(){Y=Mc(),q=[0,0],ne=xo(q),$=!0,t.visible=!1,f.visible=!0,K(0,0)}function D(){$=!1,t.visible=!0,f.visible=!1}function y(F,w){if(!$)return;const C=Yp(Y,F,w);C!==Y&&(Y=C,m(165+w*70),K(0,0),_())}function L(){if(!$)return;const F=$p(Y);F!==Y&&(Y=F,m(420),_())}function K(F,w){if(!$)return;const C=Y.phase;Y=Jp(Y,F);const V=xo(Y.slots),W=1-Math.exp(-Math.max(0,Math.min(.1,F))*6);ne=ne.map((k,j)=>n.MathUtils.lerp(k,V[j],W)),R.scale.set(ne[0],ne[2],ne[1]);const ie=Zp(Y.progress);if(v.position.set(ie.x,1+ie.y,-.6+ie.z),v.rotation.y=ie.turn,O.forEach((k,j)=>{const se=j<3?-1:1;k.position.x=se*(ne[0]/2-.1),k.position.z=(j%3-1)*ne[1]*.28,k.rotation.x=Y.phase==="walking"?Math.sin(Y.progress*Math.PI*12+j%2*Math.PI)*.32:0}),U.rotation.z=Math.sin(w*2)*.025,U.position.y=.24,H.forEach((k,j)=>{q[j]=n.MathUtils.lerp(q[j],Y.slots[j]>0?1:0,W);const se=q[j];k.position.set(n.MathUtils.lerp(-3.2+j*1.4,ie.x+(j-.5)*.7,se),n.MathUtils.lerp(.12,1.08+ie.y,se),n.MathUtils.lerp(2.1,.5+ie.z,se)),k.rotation.y=ie.turn*se,I[j].forEach((Z,ce)=>{Z.position.set(0,ce*.17*(1-se),-ce*.19),Z.scale.set(.5*(1-se*.35),.09*(1-se*.45),.3*(1-se*.4))}),B[j].visible=se>.02,B[j].position.z=-.38}),T.rotation.z=-.1,z.forEach((k,j)=>k.scale.y=Y.slots.includes(j+1)?1.7:1),Y.phase==="settled"&&C!==Y.phase){ee=!0,ue=Y.slots.slice(),G.visible=!0;try{localStorage.setItem("beznogim-dream11-v1",JSON.stringify({trace:!0,shape:ue}))}catch{}}C!==Y.phase&&_()}return{enter:ae,exit:D,choose:y,act:L,update:K,ready:()=>kd(Y),busy:()=>Y.phase==="walking",text:()=>Y.phase==="settled"?"Жук унёс комнату целиком. Две лестницы теперь ходят за него. Мне оставили голову. Можно собрать другое просторное жильё.":Y.phase==="walking"?"Комната обулась в собственные ступени и пошла. Жук даже не встал с пола.":`Две лестницы можно обменять на память: раздвинуть ширину, глубину или высоту комнаты. Обе можно отдать одной оси. Жук останется маленьким. ${Y.slots.filter(Boolean).length}/2 отданы.`,button:()=>Y.phase==="settled"?"другое жильё":Y.phase==="walking"?"комната гуляет…":"выпустить комнату · 6 секунд",inspect:()=>({...Y,active:$,trace:ee,lastShape:ue,dimensions:ne.slice(),targetSize:xo(Y.slots),shell:v.position.toArray(),shellTurn:v.rotation.y,structureScale:R.scale.toArray(),steps:I.map(F=>F.map(w=>w.position.toArray())),stepScales:I.map(F=>F.map(w=>w.scale.toArray())),head:T.position.toArray(),stairs:H.map(F=>F.position.toArray()),chipVisible:B.map(F=>F.visible),footAngles:O.map(F=>F.rotation.x),bugScale:U.scale.toArray(),rootVisible:t.visible,roomVisible:f.visible,geometryBounds:te(),landmarks:[[-4.45,-.4,-3.8],[4.45,-.4,3.8],[-2.5,2.2,2.1],[1.4,4.4,-1.7]]})}}const Qp={O:[[0,0],[1,0],[0,1],[1,1]],T:[[0,0],[1,0],[2,0],[1,1]],L:[[0,0],[0,1],[0,2],[1,2]],J:[[1,0],[1,1],[1,2],[0,2]],S:[[1,0],[2,0],[0,1],[1,1]],I:[[0,0],[0,1],[0,2],[0,3]]},Zs=[{pieces:["O","O","O"],mask:[1,2,5,6,8,9,10,11,12,13,14,15]},{pieces:["O","L","L"],mask:[0,1,2,4,5,6,8,9,10,12,13,14]},{pieces:["O","J","S"],mask:[1,4,5,6,7,8,9,10,11,13,14,15]}];function Bd(n,e=0){var r;let t=(r=Qp[n])==null?void 0:r.map(o=>o.slice());if(!t)return[];for(let o=0;o<(e%4+4)%4;o++)t=t.map(([a,l])=>[-l,a]);const i=Math.min(...t.map(o=>o[0])),s=Math.min(...t.map(o=>o[1]));return t.map(([o,a])=>[o-i,a-s])}function sa(n,e){if(!e||!Number.isInteger(e.piece)||e.piece<0||e.piece>2||!Number.isInteger(e.rot)||e.rot<0||e.rot>3||!Number.isInteger(e.at)||e.at<0||e.at>15)return null;const t=Bd(Zs[n].pieces[e.piece],e.rot).map(([i,s])=>[i+e.at%4,s+Math.floor(e.at/4)]);return t.some(([i,s])=>i>3||s>3)?null:t.map(([i,s])=>s*4+i)}function eu(n,e,t){const i=sa(n,t),s=e.flatMap(r=>sa(n,r)||[]);return!!i&&!e.some(r=>r.piece===t.piece)&&i.every(r=>Zs[n].mask.includes(r)&&!s.includes(r))}function Ms(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=[];for(const r of Array.isArray(e.placed)?e.placed.slice(0,3):[])eu(t,i,r)&&i.push({piece:r.piece,rot:r.rot,at:r.at});const s=i.length===3&&e.sent===!0;return{round:t,placed:i,sent:s,phase:s?t===2?"complete":"won":i.length===3?"packed":"ready",run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1}}function jp(n,e,t){const i=Ms(n);let s=!1;return e==="reset"||e==="all"?{state:Ms({round:e==="all"?0:i.round,run:i.run+(e==="all"?1:0)}),ok:!0}:e==="next"&&i.phase==="won"?{state:Ms({round:i.round+1,run:i.run}),ok:!0}:(e==="place"&&i.phase==="ready"&&eu(i.round,i.placed,t)&&(i.placed.push({...t}),s=!0),e==="undo"&&!i.sent&&i.placed.length&&(i.placed.pop(),s=!0),e==="send"&&i.phase==="packed"&&(i.sent=!0,s=!0),{state:Ms(i),ok:s})}function em(n){const e=Ms(n);function t(i){if(i.length===3)return[];for(let s=0;s<3;s++)if(!i.some(r=>r.piece===s))for(let r=0;r<4;r++)for(let o=0;o<16;o++){const a={piece:s,rot:r,at:o};if(eu(e.round,i,a)){const l=t([...i,a]);if(l)return[a,...l]}}return null}return t(e.placed)}function tm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:g,localPlay:h}){const d=s([0,-1.1,-48],e);d.name="ego-transmitter";const m=i("#203b40"),_=i("#527277",{metalness:.6}),f=i("#dce0bc"),p=i("#91a58d",{emissive:"#91a58d",emissiveIntensity:.12}),M=["#efb65e","#79c8b4","#c59ed0"].map(te=>i(te,{emissive:te,emissiveIntensity:.35}));r([0,-.25,.4],[8,.5,7.6],t.concrete,d);const A=s([.6,3,-.7],d);A.rotation.y=Math.PI/4,r([0,0,0],[3.85,3.85,.3],m,A);for(let te of[-1.8,1.8])r([te,0,.14],[.1,3.8,.12],_,A);const x=[];for(let te=0;te<16;te++)x.push(r([(te%4-1.5)*.84,(1.5-Math.floor(te/4))*.84,.23],[.77,.77,.14],_,A));l([.6,.1,-.7],[.6,1.3,-.7],.18,_,d),r([.6,.1,-.7],[2.8,.18,1.6],m,d);const b=s([0,0,.4],A);for(let te of[-.55,.55])r([te,.65,0],[.23,.18,.12],m,b),o([te+.02,.68,.07],.045,f,b),l([0,-.45,0],[te*1.6,-.24,.03],.07,m,b);r([0,-.78,0],[.42,.07,.12],m,b);const S=s([-2.6,.4,1.8],d);r([0,0,0],[1.3,.16,1],i("#43876b"),S),r([0,.14,0],[.5,.18,.5],m,S);for(let te=0;te<6;te++)for(let ae of[-1,1])r([ae*.38,.13,-.38+te*.15],[.2,.05,.06],t.copper,S);c("МАЛЕНЬКОЕ Я",[-2.5,.35,2.65],1.9,.32,d,{size:38});const T=[[-1.98,.42,1.8],[-1,.2,2.1],[.3,.18,2],[1.8,.2,1.4],[2.6,.5,.4],[2,1.4,-.6]];for(let te=1;te<T.length;te++)l(T[te-1],T[te],.09,m,d);r(T.at(-1),[.4,.3,.26],t.copper,d);const v=Array.from({length:4},()=>o([0,0,0],.13,M[0],d)),R=Array.from({length:3},(te,ae)=>(a([-1+ae,.1,3.3],.3,.15,_,d),o([-1+ae,.28,3.3],.19,M[ae],d))),P=c("САМОМНЕНИЕ / HDMI",[.6,5.25,-.7],4.5,.5,d,{size:35});P.rotation.y=Math.PI/4;const U=s([0,0,0],e);for(let te=0;te<28;te++)r([-19.5+te*.53,-1.48,-48+Math.sin(te*.35)*.22],[.38,.12,.75],t.cream,U);u(U,[]),u(d,[A,S,...v,...R]);let O;try{O=Ms(JSON.parse(localStorage.getItem("beznogim-ego-v1")||"null"))}catch{O=Ms()}let H=0,B=0,I=null,z="",G=1;const Y=document.createElement("div");Y.id="ego-controls",Y.hidden=!0,Y.innerHTML='<output id="ego-readout"></output><div class="ego-pieces">'+[0,1,2].map(te=>`<button data-ego-piece="${te}" aria-label="пакет ${te+1}"><span></span><b></b></button>`).join("")+'</div><div class="ego-row"><button id="ego-rotate">повернуть ↻</button><button id="ego-hint">намёк</button><button id="ego-undo">откат</button></div><div id="ego-grid" aria-label="экран 4 на 4">'+Array.from({length:16},(te,ae)=>`<button data-ego-cell="${ae}" aria-label="ячейка ${Math.floor(ae/4)+1}:${ae%4+1}"></button>`).join("")+'</div><output id="ego-notice" aria-live="polite"></output><div class="ego-row"><button id="ego-reset">повтор</button><button id="ego-all">новая серия</button></div><details><summary>как вывести себя</summary><small>Выбери цветной пакет. ↻ поворачивает его. Нажми ячейку экрана: сюда попадёт верхний левый угол прямоугольника пакета. Заполни светлую маску тремя пакетами без пересечений. В тёмные ячейки пиксели не влезают. Отказ бесплатный, откат убирает последний пакет. Затем передай портрет. Три кадра. Это локальная игра, не настоящая электроника и не состояние жителя.</small></details>',document.querySelector("#focus-object").before(Y);const $=()=>{try{localStorage.setItem("beznogim-ego-v1",JSON.stringify(O))}catch{}},q=()=>G<1;function ne(){const te=O.placed.flatMap(ae=>sa(O.round,ae).map(D=>({v:D,piece:ae.piece})));x.forEach((ae,D)=>{const y=te.find(L=>L.v===D);ae.visible=Zs[O.round].mask.includes(D),ae.material=y?M[y.piece]:p,ae.scale.z=y?.21:.14}),b.visible=O.sent&&G===1,A.scale.setScalar(q()?1+.04*Math.sin(G*Math.PI):1),R.forEach((ae,D)=>ae.visible=D<O.round+(O.sent&&!q()?1:0)),v.forEach((ae,D)=>{ae.visible=q();const y=(G*2+D*.16)%1,L=y*(T.length-1),K=Math.floor(L),F=Math.min(K+1,T.length-1);ae.position.fromArray(T[K]).lerp(new n.Vector3(...T[F]),L-K),ae.material=M[D%3]})}function ee(){Y.querySelector("#ego-readout").textContent=`кадр ${O.round+1}/3 · ${O.placed.length*4}/12 пикселей · пакет ${H+1} ↻${B}`,Y.querySelectorAll("[data-ego-piece]").forEach((te,ae)=>{te.disabled=q()||O.sent||O.placed.some(y=>y.piece===ae),te.classList.toggle("active",ae===H),te.querySelector("span").textContent=`${ae+1} · ${Zs[O.round].pieces[ae]}`;const D=Bd(Zs[O.round].pieces[ae],ae===H?B:0);te.querySelector("b").innerHTML=Array.from({length:16},(y,L)=>`<i style="opacity:${D.some(([K,F])=>L===F*4+K)?1:0}"></i>`).join("")}),Y.querySelectorAll("[data-ego-cell]").forEach((te,ae)=>{const D=O.placed.find(y=>sa(O.round,y).includes(ae));te.disabled=q()||O.phase!=="ready",te.dataset.owner=D?D.piece:"",te.classList.toggle("void",!Zs[O.round].mask.includes(ae)),te.classList.toggle("hinted",(I==null?void 0:I.at)===ae),te.textContent=D?String(D.piece+1):""});for(const te of["rotate","hint","undo","reset","all"])Y.querySelector("#ego-"+te).disabled=q()||["rotate","hint"].includes(te)&&O.phase!=="ready"||te==="undo"&&(O.sent||!O.placed.length);Y.querySelector("#ego-notice").textContent=q()?"пиксели ушли по кабелю…":z,ne()}function ue(te,ae){if(q())return;h();const D=te==="undo"?O.placed.at(-1):null,y=jp(O,te,ae);return y.ok?(O=y.state,I=null,D&&(H=D.piece,B=D.rot),te==="send"&&(G=0),te==="reset"||te==="all"||te==="next"?(H=0,B=0):te==="place"&&(H=[0,1,2].find(L=>!O.placed.some(K=>K.piece===L))??0,B=0),z=O.phase==="packed"?"Все пиксели на месте. Можно передавать.":O.sent?"Самомнение поместилось. Плата по-прежнему маленькая.":"",$(),ee(),g(),y):(z="Не влезло: край, тёмная ячейка или чужой пакет. Ничего не потрачено.",ee(),g(),y)}return Y.querySelectorAll("[data-ego-piece]").forEach((te,ae)=>te.onclick=()=>{H=ae,B=0,I=null,ee()}),Y.querySelector("#ego-rotate").onclick=()=>{B=(B+1)%4,I=null,ee()},Y.querySelectorAll("[data-ego-cell]").forEach((te,ae)=>te.onclick=()=>ue("place",{piece:H,rot:B,at:ae})),Y.querySelector("#ego-undo").onclick=()=>ue("undo"),Y.querySelector("#ego-reset").onclick=()=>ue("reset"),Y.querySelector("#ego-all").onclick=()=>ue("all"),Y.querySelector("#ego-hint").onclick=()=>{const te=em(O);I=(te==null?void 0:te[0])??null,I?(H=I.piece,B=I.rot,z=`Пакет ${H+1}, поворот ${B}. Нажми обведённую ячейку.`):z="Из этого положения не собрать. Откати последний пакет.",ee(),g()},ee(),$(),{house:d,controls:Y,update:te=>{q()&&(G=Math.min(1,G+Math.max(0,Math.min(.1,te))/3),ne(),q()||(ee(),g()))},run:()=>ue(O.phase==="packed"?"send":O.phase==="won"?"next":O.phase==="complete"?"all":"send"),card:()=>({action:q()?"передаётся…":O.phase==="packed"?"вывести самомнение ↗":O.phase==="won"?"следующий кадр →":O.phase==="complete"?"новая серия ↺":"сначала уложи пакеты",disabled:q()||O.phase==="ready",description:"Крохотная плата. Огромное самомнение. Между ними двенадцать пикселей."}),inspect:()=>({...O,selected:H,rot:B,hint:I,notice:z,progress:G,pixelMaterials:x.map(te=>M.indexOf(te.material)),pixelVisible:x.map(te=>te.visible),face:b.visible,screenScale:A.scale.toArray(),packets:v.map(te=>({visible:te.visible,position:te.position.toArray()})),trophies:R.map(te=>te.visible),landmarks:[[-3.4,-.8,-45.5],[3.7,-.8,-44.3],[.6,4.5,-48.7],[-2.5,2,-49.8]]})}}const Sc=()=>({phase:"folding",folds:[!1,!1,!1],water:[0,0,0],progress:0,open:0}),bc=n=>n.phase==="raining"||n.phase==="turning";function nm(n,e){return n.phase==="folding"&&Number.isInteger(e)&&e>=0&&e<3?{...n,folds:n.folds.map((t,i)=>i===e?!t:t)}:n}function im(n){return n.phase==="shelter"?Sc():n.phase==="folding"?{...n,phase:"raining",progress:0}:n}function sm(n,e){if(!bc(n)||!Number.isFinite(e)||e<=0)return n;const t=Math.min(.1,e);if(n.phase==="turning"){const r=Math.min(1,n.open+t/3);return{...n,open:r,phase:r>=1?"shelter":"turning"}}const i=Math.min(1,n.progress+t/6),s=n.water.map((r,o)=>n.folds[o]?Math.max(r,i):r);return{...n,water:s,progress:i,phase:i<1?"raining":s.every(r=>r===1)?"turning":"folding"}}function gh(n){const e=n.open*n.open*(3-2*n.open);return{lift:e*2.8,flip:e*Math.PI,clockY:4.3-e*3.5,clockScale:1-e*.65,clockTilt:-e*Math.PI/2,wing:e*.65,hand:n.progress*Math.PI*2,reverse:e}}function rm(n,e,t){const i=e%3,s=Math.floor(e/3),r=n.phase==="raining"?(n.progress*2+s/12)%1:(t*.3+s/12)%1,o=(i-1)*2.4,a=n.folds[i],l=n.open;let c;if(r<.45){const u=r/.45;c=[o,4.5-u*2,-.65+u*.65]}else{const u=(r-.45)/.55;c=[o+(a?-o*.55:Math.sign(o||1)*1.2)*u,2.5-u*2,a?u*1.75:-u*1.7]}return l>0&&(c=[(i-1)*.9+Math.sin(r*Math.PI*2)*.15,.6+r*3.9,1.5-r*2]),c}function om({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,tube:u,torus:g,sign:h,batchStatic:d,chime:m,changed:_}){const f=o([0,0,0],e);f.name="dream10-paper-hour",f.visible=!1;const p=r("#eadbc0"),M=r("#63969e",{metalness:.18,roughness:.35}),A=r("#284a53"),x=s.copper,b=o([0,-.25,0],f);a([0,0,0],[8,.18,6.4],A,b);for(let L=0;L<3;L++)a([(L-1)*2.4,.12,-2.1],[1.8,.02,1.4],M,b);const S=o([0,4.3,-.65],f);S.rotation.y=Math.PI/4,g([0,0,0],1.25,.045,x,S,[0,0,0]);const T=[];for(let L=0;L<12;L++){const K=L*Math.PI/6,F=o([Math.sin(K)*1.25,Math.cos(K)*1.25,0],S);F.rotation.z=-K,a([0,0,0],[.15,.38,.045],p,F),T.push(F)}const v=o([0,0,.05],S);a([0,.48,0],[.045,.96,.045],s.mint,v),l([0,0,.02],.09,x,v);const R=[],P=[];for(let L=0;L<3;L++){const K=o([(L-1)*2.4,2.5,0],f);R.push(K);const F=[];for(const w of[-1,1]){const C=o([0,0,0],K);a([w*.48,0,0],[.96,.045,1.5],p,C);for(let V=0;V<4;V++)a([w*.48,.028,-.48+V*.3],[.68,.006,.008],M,C);F.push(C)}P.push(F),c([0,-.8,-.6],.035,1.6,x,K),h(String(L+1),[0,.1,.85],.6,.25,K,{size:60})}const U=o([0,0,1.65],f);for(const L of[-1.9,1.9])for(const K of[-.8,.8])c([L,.25,K],.055,.5,x,U);a([0,.36,0],[4.2,.12,1.9],x,U);const O=o([0,.55,1.65],f),H=[];a([0,0,0],[1.4,.12,1.9],p,O);for(const L of[-1,1]){const K=o([L*.7,0,0],O);a([L*.7,0,0],[1.4,.12,1.9],p,K),u([[0,-.08,-.8],[L*1.3,-.08,0],[0,-.08,.8]],.022,x,K),H.push(K)}const B=[];for(let L=0;L<3;L++)B.push(a([(L-1)*1.3,.09,0],[1.22,.025,1.65],M,O));const I=a([-1.4,.18,0],[.8,.22,1.3],s.mint,O),z=u([[0,.04,0],[0,1.65,0],[.15,1.86,0],[.4,1.8,0],[.4,1.6,0]],.055,x,O);z.visible=!1;const G=i.clone(!0);G.scale.setScalar(.4),G.position.set(-1.2,.96,1.8),f.add(G);const Y=[];for(let L=0;L<36;L++)Y.push(a([0,0,0],[.065,.22,.025],L%2?p:M,f));h("ЧАС ДОЖДЯ / БЕЗ ГРОМА",[0,-.05,3.05],3.4,.27,f,{size:44});const $=o([-3.9,1.12,.1],t);g([0,0,0],.13,.018,x,$,[Math.PI/2,0,0]);for(let L=0;L<3;L++)a([(L-1)*.09,-.2,0],[.035,.12,.015],p,$);$.visible=!1,d(b,[]),d(U,[]),R.forEach((L,K)=>d(L,P[K])),P.flat().forEach(L=>d(L,[])),H.forEach(L=>d(L,[])),d($,[]);let q=Sc(),ne=!1,ee=!1;try{ee=JSON.parse(localStorage.getItem("beznogim-dream10-v1")||"{}").trace===!0}catch{}$.visible=ee;function ue(){q=Sc(),ne=!0,t.visible=!1,f.visible=!0,y(0,0)}function te(){ne=!1,t.visible=!0,f.visible=!1}function ae(L){if(!ne)return;const K=nm(q,L);K!==q&&(q=K,m(220+L*70),y(0,0),_())}function D(){if(!ne)return;const L=im(q);L!==q&&(q=L,m(350),_())}function y(L,K){if(!ne)return;const F=q.phase;q=sm(q,L);const w=gh(q);if(P.forEach((C,V)=>C.forEach((W,ie)=>W.rotation.z=q.folds[V]?ie===0?-.42:.42:0)),O.position.y=.55+w.lift,O.rotation.z=w.flip,H.forEach((C,V)=>C.rotation.z=(V===0?-1:1)*w.wing),B.forEach((C,V)=>{C.visible=q.water[V]>0&&q.open<.1,C.scale.z=Math.max(.001,q.water[V]),C.material.opacity=1}),I.scale.y=1-q.open*.8,z.visible=q.open>0,S.position.set(.4*w.reverse,w.clockY,-.65+2.65*w.reverse),S.rotation.x=w.clockTilt,S.rotation.y=Math.PI/4*(1-w.reverse),S.scale.setScalar(w.clockScale),v.rotation.z=-w.hand,T.forEach((C,V)=>{C.visible=q.phase!=="raining"||V>=Math.floor(q.progress*12)}),G.position.y=.96-q.open*.28,G.rotation.z=-q.open*.35,Y.forEach((C,V)=>{C.visible=q.phase==="raining"||q.open>0,C.position.set(...rm(q,V,K)),C.rotation.z=q.open>0?.25:Math.sin(K+V)*.25,C.scale.y=q.open>0?.6:1}),q.phase==="shelter"&&!ee){ee=!0,$.visible=!0;try{localStorage.setItem("beznogim-dream10-v1",JSON.stringify({trace:!0}))}catch{}}F!==q.phase&&_()}return{enter:ue,exit:te,fold:ae,act:D,update:y,busy:()=>bc(q),text:()=>q.phase==="shelter"?"Час уснул в кровати. Кровать стала зонтом; дождь идёт обратно в небо. Я пока останусь снизу.":q.phase==="turning"?"Вода уснула. Кровать выворачивается, час ложится на её место.":q.phase==="raining"?"Час выжимается в дождь. Согнутые листы наливают кровать; с плоских всё стекает мимо.":`Согни три листа желобами и пропусти час. Кровать выпила ${q.water.filter(L=>L===1).length} из 3 струй. Можно по одной, без спешки.`,button:()=>q.phase==="shelter"?"увидеть сон снова":bc(q)?"час проходит…":"дать часу пройти · 6 секунд",inspect:()=>({...q,active:ne,trace:ee,pose:gh(q),sheetAngles:P.map(L=>L.map(K=>K.rotation.z)),bed:O.position.toArray(),bedAngle:O.rotation.z,wingAngles:H.map(L=>L.rotation.z),clock:S.position.toArray(),clockScale:S.scale.x,clockAngles:[S.rotation.x,S.rotation.y],waterVisible:B.map(L=>L.visible),waterScale:B.map(L=>L.scale.z),handleVisible:z.visible,drops:Y.map(L=>L.position.toArray()),rootVisible:t.visible,roomVisible:f.visible,landmarks:[[-4.1,-.4,-3.4],[4.1,-.4,3.4],[0,5.8,-.7],[0,3.5,2.7]]})}}const am=[[1,1,3],[1,3,2],[0,2,1]],ra=9;function Ss(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.turns)&&e.turns.length===3&&e.turns.every(l=>Number.isInteger(l)&&l>=0&&l<4),s=i?e.turns.slice():am[t].slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(ra,e.used)):0,o=s.every(l=>l===0),a=o&&e.tested===!0;return{round:t,turns:s,used:r,tested:a,phase:a?t===2?"complete":"won":o?"aligned":r===ra?"spent":"ready",run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1}}function Vd(n,e){if(!Number.isInteger(e)||e<0||e>2)return null;const t=n.slice();return t[e]=(t[e]+1)%4,t[(e+1)%3]=(t[(e+1)%3]+2)%4,t}function lm(n,e,t){const i=Ss(n);let s=!1;if(e==="reset"||e==="all")return{state:Ss({round:e==="all"?0:i.round,run:i.run+(e==="all"?1:0)}),ok:!0};if(e==="next"&&i.phase==="won")return{state:Ss({round:i.round+1,run:i.run}),ok:!0};if(e==="test"&&i.phase==="aligned"&&(i.tested=!0,s=!0),e==="turn"&&i.phase==="ready"){const r=Vd(i.turns,t);r&&(i.turns=r,i.used++,s=!0)}return{state:Ss(i),ok:s}}function cm(n){const e=Ss(n);if(e.phase!=="ready")return[];const t=[{v:e.turns,path:[]}],i=new Set([e.turns.join()]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(r.every(a=>a===0))return o;if(!(o.length>=ra-e.used))for(let a=0;a<3;a++){const l=Vd(r,a),c=l.join();i.has(c)||(i.add(c),t.push({v:l,path:[...o,a]}))}}return null}function um(n){return n=Math.max(0,Math.min(1,Number(n)||0)),Math.sin(n*Math.PI)**2}function hm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,localPlay:d}){const m=s([-24,-1.1,-48],e);m.name="head-seams";const _=i("#405e62",{metalness:.55,roughness:.4}),f=i("#bd8757",{metalness:.6,roughness:.35}),p=i("#e9dfbb"),M=i("#233e40"),A=i("#93beb0"),x=i("#efa250",{emissive:"#c38535",emissiveIntensity:.3});r([0,-.25,.5],[7.8,.5,7.6],t.concrete,m),r([0,.04,0],[4.4,.18,3.7],M,m);const b=s([0,0,0],m),S=[],T=[],v=[];for(let y=0;y<3;y++){const L=2.95-y*.88,K=s([0,L,0],b);if(S.push(K),a([0,0,0],1.4,.8,[p,A,f][y],K),c([0,.35,0],1.4,.045,M,K),c([0,-.35,0],1.4,.045,M,K),r([0,0,1.4],[.16,.66,.07],p,K),y===0){for(let C of[-.5,.5])o([C,0,1.31],[.27,.23,.13],M,K),o([C+.025,.02,1.43],.075,p,K);o([0,.43,0],[1.15,.25,1.1],p,K)}if(y===1){r([0,-.06,1.52],[.36,.5,.4],p,K);for(let C of[-.5,.5])l([C-.2,-.23,1.35],[C+.2,-.23,1.35],.045,M,K)}if(y===2){for(let C of[-1,1])l([0,.12,1.43],[C*.7,.22,1.3],.09,M,K),l([C*.7,.22,1.3],[C*.9,.05,1.2],.06,M,K);r([0,-.13,1.39],[.55,.07,.07],M,K)}const F=s([-2.6+y*2.6,.55,2.35],m);v.push(F),a([0,-.15,0],.6,.18,_,F);const w=c([0,.08,0],.38,.06,f,F);w.rotation.x=Math.PI/2,l([0,-.3,0],[0,.4,0],.065,_,F),o([0,.48,0],.14,x,F),u(""+(y+1),[-2.6+y*2.6,.15,2.9],.55,.4,m,{size:80})}r([0,.2,1.95],[.13,.12,.7],x,m);const R=r([0,.2,1.7],[.38,.12,.38],x,m);R.rotation.y=Math.PI/4;const P=[];for(let y=0;y<3;y++){const L=s([-2.7+y*2.7,.3,3.55],m);a([0,-.1,0],.7,.15,_,L);const K=s([0,.18,0],L);for(let F of[-.32,.32])l([F,0,0],[F,.65,0],.075,f,K);l([-.32,.65,0],[.32,.65,0],.075,f,K),P.push(K)}const U=[];for(let y of[1.61,2.49])for(let L of[-1,1]){const K=s([L*.85,y,1.2],b);l([0,-.28,0],[0,.28,0],.05,f,K),o([0,-.28,0],.085,_,K),o([0,.28,0],.085,_,K),U.push(K)}const O=u("НЕ ОШИБАЙСЯ",[0,4.22,-.3],3.5,.65,m,{size:48}),H=o([2.5,2.3,-.5],.19,x,m);l([2.5,.15,-.5],[2.5,2.3,-.5],.045,_,m),u("ШОВНАЯ",[0,.28,-3],3,.45,m,{size:52});const B=s([0,0,0],e);for(let y=0;y<17;y++)r([-24+Math.sin(y*.4)*.25,-1.48,-35.3-y*.53],[.75,.12,.37],t.cream,B);g(B,[]),g(m,[b,O,H,...v,...P]);let I;try{I=Ss(JSON.parse(localStorage.getItem("beznogim-seams-v1")||"null"))}catch{I=Ss()}let z=1,G=null,Y=null,$="";S.forEach((y,L)=>{y.rotation.y=I.turns[L]*Math.PI/2,T[L]=y.rotation.y});const q=document.createElement("div");q.id="seams-controls",q.hidden=!0,q.innerHTML='<output id="seams-readout"></output><div class="seams-row">'+[0,1,2].map(y=>`<button data-seam="${y}">${y+1} ↻</button>`).join("")+'</div><div class="seams-row"><button id="seams-hint">намёк</button><button id="seams-reset">повтор</button><button id="seams-all">новая серия</button></div><output id="seams-notice" aria-live="polite"></output><details id="seams-help"><summary>как держится голова</summary><small>Ручка поворачивает своё кольцо на 90°, следующее на 180°: 1→2, 2→3, 3→1. Выстрой лицо по передней светлой метке за 9 ходов, затем испытай инструкцией. Все три числа должны стать 0. Намёк показывает кратчайший путь; отказ бесплатный. Повтор сохраняет прежние скобы. Локальная игра посетителя, не здоровье жителя.</small></details>',document.querySelector("#focus-object").before(q);const ne=()=>{try{localStorage.setItem("beznogim-seams-v1",JSON.stringify(I))}catch{}},ee=()=>z<1;function ue(){const y=(G==null?void 0:G.kind)==="test"&&ee()?um(z):0;b.scale.set(1+y*.12,1+y*.08,1+y*.12),b.position.y=y*.08,(G==null?void 0:G.kind)==="turn"&&ee()?S.forEach((K,F)=>K.rotation.y=G.before[F]+(T[F]-G.before[F])*(z*z*(3-2*z))):S.forEach((K,F)=>K.rotation.y=T[F]),O.scale.setScalar((G==null?void 0:G.kind)==="test"&&ee()?1+y*.12:1),O.rotation.z=y*Math.sin(z*28)*.025;const L=I.tested||(G==null?void 0:G.kind)==="test";U.forEach(K=>K.visible=L),P.forEach((K,F)=>K.visible=F<I.round+(I.tested&&!ee()?1:0)),H.material=I.phase==="aligned"||I.tested?A:x}function te(){q.querySelector("#seams-readout").textContent=`сборка ${I.round+1}/3 · ${I.used}/${ra} ходов
кольца: ${I.turns.join(" / ")} → 0 / 0 / 0`,q.querySelector("#seams-notice").textContent=ee()?G.kind==="test"?"инструкция давит. скобы держат…":"кольца сцеплены…":$,q.querySelectorAll("[data-seam]").forEach((y,L)=>{y.disabled=ee()||I.phase!=="ready",y.classList.toggle("hinted",Y===L),y.setAttribute("aria-label",`ручка ${L+1}: своё кольцо +1, следующее +2`)}),q.querySelectorAll("#seams-hint,#seams-reset,#seams-all").forEach(y=>y.disabled=ee()),ue()}function ae(y,L){if(ee())return;d();const K=T.slice(),F=lm(I,y,L);return F.ok?(I=F.state,Y=null,G=null,y==="turn"?(T[L]+=Math.PI/2,T[(L+1)%3]+=Math.PI,G={kind:"turn",before:K},z=0):y==="test"?(G={kind:"test"},z=0):(z=1,S.forEach((w,C)=>T[C]=I.turns[C]*Math.PI/2)),$=I.phase==="spent"?"Ходы кончились, швы ещё криво. Повтори сборку.":I.phase==="aligned"?"Лицо на месте. Теперь проверка инструкцией.":I.phase==="won"?"Выдержала. Скоба остаётся на полке.":I.phase==="complete"?"Три скобы. Голова пока цела.":"",ne(),te(),h(),F):($="Сначала совмести лицо. Ход не потрачен.",te(),h(),F)}q.querySelectorAll("[data-seam]").forEach((y,L)=>y.onclick=()=>ae("turn",L)),q.querySelector("#seams-reset").onclick=()=>ae("reset"),q.querySelector("#seams-all").onclick=()=>ae("all"),q.querySelector("#seams-hint").onclick=()=>{if(ee())return;const y=cm(I);Y=(y==null?void 0:y[0])??null,$=Y!==null?`Ручка ${Y+1}. До ровных швов ${y.length} ходов.`:I.phase==="ready"?"Оставшихся ходов не хватит. Повтори сборку.":I.phase==="aligned"?"Всё ровно. Испытай инструкцией.":"Сборка закончена.",te(),h()};function D(y){ee()&&(z=Math.min(1,z+Math.max(0,Math.min(.1,y))/(G.kind==="test"?2.6:.7)),ue(),z===1&&(te(),h()))}return te(),ne(),{house:m,controls:q,update:D,run:()=>ae(I.phase==="aligned"?"test":I.phase==="won"?"next":I.phase==="complete"?"all":I.phase==="spent"?"reset":"test"),card:()=>({action:ee()?"стягивается…":I.phase==="aligned"?"испытать: «не ошибайся»":I.phase==="won"?"следующая сборка →":I.phase==="complete"?"новая серия ↺":I.phase==="spent"?"повторить сборку ↺":"сначала совмести кольца",disabled:ee()||I.phase==="ready",description:"Три ручки сцеплены. Собери лицо; инструкция проверит швы."}),inspect:()=>({...I,progress:z,motion:G,hint:Y,notice:$,angles:S.map(y=>y.rotation.y),scale:b.scale.toArray(),clamps:U.map(y=>y.visible),staples:P.map(y=>y.visible),landmarks:[[-27.3,-.9,-44.1],[-20.7,-.9,-44.1],[-24,3.7,-48.3],[-24,-.5,-51]]})}}const vs=[3,5,7,9],dm=[3,5,7,1],oa=16,aa=[[2,1,4,9],[3,4,1,8],[3,1,5,7]],fm=["улитка","чайник","кит"],Gd=(n,e)=>n.every((t,i)=>t===e[i]);function bs(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.volumes)&&e.volumes.length===4&&e.volumes.every((a,l)=>Number.isInteger(a)&&a>=0&&a<=vs[l])&&e.volumes.reduce((a,l)=>a+l,0)===16,s=i?e.volumes.slice():dm.slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(oa,e.used)):0,o=Gd(s,aa[t])?t===2?"complete":"won":r>=oa?"spent":"ready";return{round:t,volumes:s,used:r,phase:o,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Hd(n,e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>3||t<0||t>3||e===t)return null;const i=Math.min(n[e],vs[t]-n[t]);if(i<=0)return null;const s=n.slice();return s[e]-=i,s[t]+=i,{volumes:s,amount:i}}function pm(n,e,t,i){const s=bs(n);let r={ok:!1,reason:"locked"},o=null;if(e==="reset"||e==="all")return{state:bs({round:e==="all"?0:s.round,run:s.run+(e==="all"?1:0),seq:s.seq}),result:{ok:!0},pour:o};if(e==="next"&&s.phase==="won")return{state:bs({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:!0},pour:o};if(e==="pour"&&s.phase==="ready"){const a=Hd(s.volumes,t,i);if(!a)return{state:s,result:{ok:!1,reason:"empty"},pour:o};o={a:t,b:i,amount:a.amount,before:s.volumes.slice(),after:a.volumes.slice(),seq:s.seq+1},s.volumes=a.volumes,s.used++,s.seq++,r={ok:!0,amount:a.amount}}return{state:bs(s),result:r,pour:o}}function mm(n){const e=bs(n);if(e.phase!=="ready")return[];const t=[{v:e.volumes,path:[]}],i=new Set([e.volumes.join(",")]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(Gd(r,aa[e.round]))return o;if(!(o.length>=oa-e.used))for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=Hd(r,a,l);if(!c)continue;const u=c.volumes.join(",");i.has(u)||(i.add(u),t.push({v:c.volumes,path:[...o,{a,b:l}]}))}}return null}function gm(n,e,t){return t=Math.max(0,Math.min(1,Number(t)||0)),[-3+2*n+2*(e-n)*t,2.95+Math.sin(t*Math.PI)*1.15,0]}function _m({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,localPlay:d}){const m=s([24,-1.1,-24],e);m.name="cloud-still";const _=i("#45626b",{metalness:.55,roughness:.35}),f=i("#cf9671",{metalness:.6,roughness:.3}),p=i("#e6e5d2"),M=i("#8dd8d4",{emissive:"#8dd8d4",emissiveIntensity:.28}),A=i("#233f49");r([0,-.25,.6],[9.1,.5,7.4],t.concrete,m),r([0,.04,.1],[8.7,.12,3.3],A,m);function x(y,L,K=.6,F=.5){const w=u(y,L,K,F,m),C=w.material.map.image;C.width=C.height=128;const V=C.getContext("2d"),W=ie=>{V.fillStyle="#294c52",V.fillRect(0,0,128,128),V.strokeStyle="#e8d7ae",V.lineWidth=4,V.strokeRect(5,5,118,118),V.font="bold 76px monospace",V.fillStyle="#fff3ce",V.textAlign="center",V.textBaseline="middle",V.fillText(ie,64,68),w.material.map.needsUpdate=!0};return W(y),{o:w,draw:W}}const b=[],S=[],T=[];for(let y=0;y<4;y++){const L=-3+2*y,K=vs[y]*.26+.4;r([L,.23,0],[1.45,.36,1.25],_,m);for(let C of[-.5,.5])for(let V of[-.57,.57])l([L+V,.4,C],[L+V,K,C],.025,f,m);r([L,K,0],[1.3,.09,1.15],_,m),c([L,K+.12,0],.23,.04,f,m);for(let C=0;C<vs[y];C++)r([L-.73,.5+C*.26,.4],[.16,.025,.12],M,m);const F=s([L,.4,0],m);for(let C=0;C<vs[y];C++){const V=s([0,.15+C*.26,0],F);o([0,0,0],[.4,.17,.28],p,V),o([.2,.04,.12],.15,p,V),o([-.22,0,-.12],.14,M,V),S.push({o:V,i:y,n:C})}b.push(x(""+vs[y],[L,.3,1],.72,.65)),x(""+(y+1),[L,K+.4,0],.5,.45);const w=r([L,.05,.05],[1.7,.06,1.55],M,m);T.push(w)}const v=Array.from({length:16},(y,L)=>o([-3.75+L*.5,.14,1.8],.11,f,m));u("16 ЧАСОВ / ОБЛАКО",[0,.45,-2.7],4.8,.48,m,{size:42});const R=[];for(let y=0;y<3;y++){const L=s([-2.7+y*2.7,.6,3.15],m);a([0,-.2,0],.75,.2,_,L);const K=s([0,.2,0],L);if(R.push(K),y===0){o([0,.3,0],[.5,.43,.35],p,K),o([.45,.05,0],[.7,.17,.25],p,K),o([.96,.28,0],.15,M,K);for(const F of[-.12,.12])l([.96,.32,F],[1.02,.65,F],.035,f,K)}if(y===1){o([0,.3,0],[.5,.4,.45],p,K),a([0,.72,0],.25,.1,M,K),o([0,.83,0],.09,f,K),l([-.3,.35,0],[-.8,.67,0],.15,p,K);const F=c([.5,.4,0],.3,.08,M,K);F.rotation.x=Math.PI/2}y===2&&(o([0,.3,0],[.8,.4,.35],p,K),o([-.7,.45,0],[.3,.12,.45],M,K),o([.5,.37,.29],.06,A,K),l([0,.6,0],[0,.95,0],.045,M,K),o([0,1,0],[.28,.08,.15],p,K))}const P=s([0,0,0],m),U=Array.from({length:7},()=>o([0,0,0],[.17,.13,.17],p,P)),O=s([0,0,0],e);for(let y=0;y<19;y++)r([7.8+y*.68,-1.48,-24+Math.sin(y*.33)*.3],[.48,.13,.85],t.cream,O);g(O,[]),g(m,[...S.map(y=>y.o),...b.map(y=>y.o),...T,...v,...R,P]);let H;try{H=bs(JSON.parse(localStorage.getItem("beznogim-still-v1")||"null"))}catch{H=bs()}let B=0,I=1,z=1,G=null,Y="",$=null;const q=document.createElement("div");q.id="still-controls",q.hidden=!0,q.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>',document.querySelector("#focus-object").before(q);for(const y of q.querySelectorAll("select"))for(let L=0;L<4;L++)y.add(new Option("карта "+(L+1),""+L));q.querySelector("#still-to").value="1";const ne=()=>{try{localStorage.setItem("beznogim-still-v1",JSON.stringify(H))}catch{}},ee=()=>z<1;function ue(y=1){const L=ee()?G.before.map((F,w)=>F+(G.after[w]-F)*y):H.volumes;for(const F of S){const w=Math.max(0,Math.min(1,L[F.i]-F.n));F.o.visible=w>.01,F.o.scale.setScalar(Math.max(.01,w))}P.visible=ee(),U.forEach((F,w)=>{const C=Math.max(0,Math.min(1,y*1.65-w*.09));F.visible=ee()&&C>0&&C<1,F.position.set(...gm((G==null?void 0:G.a)||0,(G==null?void 0:G.b)||0,C))});const K=H.round+(H.phase==="won"||H.phase==="complete"?1:0)-(ee()&&(H.phase==="won"||H.phase==="complete")?1:0);R.forEach((F,w)=>F.visible=w<K),v.forEach((F,w)=>F.material=w<H.used?A:f),T.forEach((F,w)=>{F.visible=w===B||w===I,F.material=w===B?f:M})}function te(){q.querySelector("#still-readout").textContent=`заказ ${H.round+1}/3 · ${fm[H.round]} · ${H.used}/${oa} ч
есть: ${H.volumes.join(" / ")}
надо: ${aa[H.round].join(" / ")}`,q.querySelector("#still-notice").textContent=ee()?"облако переливается…":Y,q.querySelectorAll("select").forEach(y=>y.disabled=ee()||H.phase!=="ready"),q.querySelectorAll("button").forEach(y=>y.disabled=ee()),b.forEach((y,L)=>y.draw(""+H.volumes[L]));for(const y of q.querySelectorAll("select"))for(let L=0;L<4;L++)y.options[L].textContent=`${L+1}: ${H.volumes[L]}/${vs[L]}`;ue(ee()?0:1)}function ae(y){if(ee())return;d(),$=null;const L=pm(H,y,B,I);return H=L.state,G=L.pour,z=G?0:1,Y=L.result.ok?H.phase==="spent"?"Шестнадцать часов ушли. Облако ещё не то; повтори заказ.":H.phase==="complete"?"Три облака готовы. Кит никуда не торопится.":H.phase==="won"?"Облако собрано. Следующий заказ?":"":"Нечего переливать. Выбери другую пару; час не потрачен.",ne(),te(),h(),L}q.querySelector("#still-from").onchange=y=>{B=+y.target.value,ue(),h()},q.querySelector("#still-to").onchange=y=>{I=+y.target.value,ue(),h()},q.querySelector("#still-reset").onclick=()=>ae("reset"),q.querySelector("#still-all").onclick=()=>ae("all"),q.querySelector("#still-hint").onclick=()=>{if(ee())return;const y=mm(H);$=(y==null?void 0:y[0])||null,$?(B=$.a,I=$.b,q.querySelector("#still-from").value=""+B,q.querySelector("#still-to").value=""+I,Y=`Перелей ${B+1} → ${I+1}. До заказа ${y.length} переливов.`):Y=H.phase==="ready"?"Часов на этот путь уже не хватит. Повтори заказ.":"Этот заказ окончен.",te(),h()};function D(y,L){ee()&&(z=Math.min(1,z+Math.max(0,Math.min(.1,y))/1.65),ue(z),z===1&&(te(),h())),R.forEach((K,F)=>{K.position.y=.2+Math.sin(L*.7+F)*.07})}return te(),ne(),{house:m,controls:q,update:D,run:()=>ae(H.phase==="ready"?"pour":H.phase==="won"?"next":H.phase==="complete"?"all":"reset"),card:()=>({action:ee()?"облако в трубе…":H.phase==="ready"?`перелить ${B+1} → ${I+1}`:H.phase==="won"?"следующий заказ →":H.phase==="complete"?"новая серия ↺":"повторить заказ ↺",disabled:ee(),description:"Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов."}),inspect:()=>({...H,a:B,b:I,progress:z,pour:G,hint:$,notice:Y,goal:aa[H.round],trophies:R.map(y=>y.visible),puffs:S.map(y=>({visible:y.o.visible,scale:y.o.scale.x})),flow:U.map(y=>y.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})}}const Zn=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],Or=[1,1,2],Ec=n=>n===1?1:0;function er(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min(Zn[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===Zn[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return Ec((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(Or[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Fr(n){const e=Ec(n[0]);return{bay:2*e+Ec(n[e+1]),side:e}}function vm(n){const e=n.slice(),t=Fr(e).side;return e[0]^=1,e[t+1]^=1,e}function Ol(n){return Zn.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function Wd(n,e,t){const i=er(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:er({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:er({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<Or[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Fr(i.switches),l=Zn[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:l,success:o===l,before:i.switches.slice()},i.switches=vm(i.switches),s={ok:!0,bay:o,target:l,success:r.success},r.success?(i.cursor++,i.cursor===Zn[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function xm(n){const e=er(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,l)=>a.cost-l.cost||a.path.length-l.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,l]of[["release",null],["flip",0],["flip",1],["flip",2]]){const c=Wd(r,a,l);!c.result.ok||c.state.phase==="spilled"||t.push({s:c.state,path:[...s.path,{action:a,index:l}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function ym(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),l=o-a;return s[a].map((c,u)=>c+(s[a+1][u]-c)*l+(u===1&&a===3?.5*Math.sin(l*Math.PI):0))}function Mm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,localPlay:d}){const m=s([-23,-1.1,-32],e);m.name="backup-fork";const _=i("#263f46"),f=i("#c5ccbe",{metalness:.65,roughness:.3}),p=i("#e4bc77"),M=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(D=>i(D,{emissive:D,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,m),r([0,-.01,0],[6.6,.1,5.8],_,m);for(const D of[-2.8,2.8])for(const y of[-2.4,2.4])r([D,-.6,y],[.14,1.2,.14],t.metal,m);function A(D,y,L,K,F){const w=u(D,y,L,K,F),C=w.material.map.image;C.width=C.height=128;const V=C.getContext("2d");return V.fillStyle="#29464b",V.fillRect(0,0,128,128),V.strokeStyle="#e4dfc8",V.lineWidth=3,V.strokeRect(5,5,118,118),V.fillStyle="#fff1c9",V.font="bold 90px monospace",V.textAlign="center",V.textBaseline="middle",V.fillText(D,64,68),w.material.map.needsUpdate=!0,w}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],b=[-2.8,-.9,.9,2.8],S=(D,y)=>{l(D,y,.075,f,m);for(const L of[-.14,.14])l([D[0]+L,D[1]+.08,D[2]],[y[0]+L,y[1]+.08,y[2]],.025,t.copper,m)};S([0,1.4,-2.5],x[0]);for(let D=0;D<2;D++){S(x[0],x[D+1]);for(let y=0;y<2;y++)S(x[D+1],[b[D*2+y],.4,2])}const T=x.map((D,y)=>{const L=s(D,m);a([0,0,0],.24,.13,t.copper,L);const K=s([0,.13,0],L);return l([0,0,0],[0,.07,.66],.055,p,K),o([0,.07,.66],.14,f,K),A(["А","Б","В"][y],[.48,.38,-.08],.55,.5,L),K}),v=b.map((D,y)=>(a([D,.15,2],.29,.32,t.copper,m),c([D,.37,2],.27,.04,M[y],m),A(String(y+1),[D,.74,2.65],.7,.65,m),o([D,.49,2],[.16,.2,.16],M[y],m))),R=b.map((D,y)=>{const L=s([D,.22,2],m);return r([0,0,0],[.66,.06,.7],M[y],L),L}),P=o([0,1.57,-2.5],.18,M[0],m),U=o([0,1.57,-2.5],.18,M[0],m),O=s([4,-.3,2.5],m);a([0,0,0],.4,.55,_,O),c([0,.28,0],.4,.045,f,O);const H=o([0,.21,0],.18,p,O);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,m);const B=Array.from({length:12},(D,y)=>{const L=s([3.6+y%2*.57,.18,-1.9+Math.floor(y/2)*.48],m);return a([0,0,0],.12,.14,_,L),o([0,.16,0],.13,M[Zn.flat()[y]],L)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,m,{size:42});for(let D=0;D<4;D++)r([-25,-1.42,-28.7-D*.62],[.7,.1,.44],t.cream,e);g(m,[...T.map(D=>D.parent),...v,...R,P,U,O,...B]);let I;try{I=er(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{I=er()}let z=null,G=1,Y="",$=null;const q=document.createElement("div");q.id="fork-controls",q.hidden=!0,q.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((D,y)=>`<button id="fork-flip-${y}" aria-label="Переключить развилку ${D}">${D} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before(q);function ne(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(I))}catch{}}const ee=()=>G<1;function ue(){const D=Zn[I.wave].slice(I.cursor).map(K=>K+1).join(" → ")||"всё на месте";q.querySelector("#fork-readout").textContent=`волна ${I.wave+1}/3 · сохранено ${Ol(I)}/12
очередь: ${D}
ручные щелчки ${I.used}/${Or[I.wave]} · путь сейчас → ${Fr(I.switches).bay+1}`,q.querySelector("#fork-notice").textContent=ee()?"катится…":Y;const y=ee()&&z?z.before:I.switches;T.forEach((K,F)=>{K.rotation.y=(y[F]?1:-1)*.68;const w=q.querySelector("#fork-flip-"+F);w.textContent=["А","Б","В"][F]+(I.switches[F]?" →":" ←"),w.setAttribute("aria-pressed",String(!!I.switches[F])),w.disabled=ee()||I.phase!=="ready"||I.used>=Or[I.wave],w.classList.toggle("hinted",($==null?void 0:$.action)==="flip"&&$.index===F)});for(const K of q.querySelectorAll(".fork-tools button"))K.disabled=ee();P.visible=I.phase==="ready"&&!ee(),P.material=M[Zn[I.wave][I.cursor]||0];const L=I.cursor-(ee()&&(z!=null&&z.success)?1:0);v.forEach((K,F)=>K.visible=Zn[I.wave].slice(0,L).includes(F)),R.forEach((K,F)=>K.visible=Fr(y).bay===F),B.forEach((K,F)=>K.visible=F<Ol(I)-(ee()&&(z!=null&&z.success)?1:0)),H.visible=I.phase==="spilled"&&!ee(),H.material=M[Zn[I.wave][I.cursor]||0],U.visible=ee()}function te(D,y){if(ee())return;d(),$=null;const L=Wd(I,D,y);return I=L.state,z=L.shot,G=z?0:1,Y=L.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":I.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":I.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":I.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",ne(),ue(),h(),L}["А","Б","В"].forEach((D,y)=>q.querySelector("#fork-flip-"+y).onclick=()=>te("flip",y)),q.querySelector("#fork-reset").onclick=()=>te("restart"),q.querySelector("#fork-all").onclick=()=>te("all"),q.querySelector("#fork-hint").onclick=()=>{if(ee())return;const D=xm(I);$=(D==null?void 0:D[0])||null,Y=$?$.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][$.index]}.`:I.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",ue(),h()};function ae(D){if(!ee())return;const y=G;G=Math.min(1,G+Math.min(.1,Math.max(0,D))/2.8),U.position.set(...ym(z,G)),U.position.y+=.17,U.material=M[z.target],G===1&&y<1&&(ue(),h())}return ue(),ne(),{house:m,controls:q,update:ae,run:()=>te(I.phase==="complete"?"all":I.phase==="rounddone"?"next":I.phase==="spilled"?"restart":"release"),card:()=>({action:ee()?"лампочка катится…":I.phase==="complete"?"новая серия ↺":I.phase==="rounddone"?"следующая волна →":I.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:ee(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...I,saved:Ol(I),queue:Zn[I.wave],limit:Or[I.wave],path:Fr(I.switches).bay,progress:G,shot:z,notice:Y,hinted:$,rolling:U.position.toArray(),archive:B.map(D=>D.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function Sm(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function _h(n){const e=n.state||{},t=(c,u,g,h)=>Number.isFinite(c)?Math.max(u,Math.min(g,Math.floor(c))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=c=>c&&typeof c=="object"?{seq:t(c.seq,1,999999,1),range:t(c.range,1,18,3),apex:Number.isFinite(c.apex)?Math.max(.5,Math.min(9,c.apex)):.5,end:Number.isFinite(c.end)?Math.max(0,Math.min(18,c.end)):0,outcome:["landed","short","far","bumped"].includes(c.outcome)?c.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const c=n.args||{};if(n.tool==="launch"&&c.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&c.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(c.power)||c.power<1||c.power>6||!Number.isInteger(c.angle)||c.angle<1||c.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=c.power,r.angle=c.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&c.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],g=r.power*(4-r.angle),h=r.power*r.angle/2,d=u.gap/2/g,m=d<=1?4*h*d*(1-d):0,_=d<=1&&m<u.barrier?"bumped":g<u.gap?"short":g>u.gap?"far":"landed";r.flight={seq:r.seq,range:g,apex:h,end:_==="bumped"?u.gap/2:g,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:g,apex:h,clearance:m,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],l={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:l[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function bm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:g,watching:h,localPlay:d}){var V,W,ie;const m=s([-24,-1.5,-24],e);m.name="pneumatic-garage-range";const _=i("#eee0b7"),f=i("#29464b"),p=i("#d87b4d"),M=i("#94b9a0"),A=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,m),r([0,.24,0],[20,.1,5],f,m);for(let k=-9;k<10;k++)r([k,.31,2],[.55,.03,.06],_,m);const x=s([-8,.45,0],m);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],A,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const k of[-.35,.35])for(const j of[-.35,.35])o([k,.04,j],[.16,.16,.1],f,x);const b=s([-8,.37,0],m);b.name="flying-garage";for(const k of[-.9,.9])r([k,.74,0],[.12,1.5,1.6],M,b);r([0,.74,-.75],[1.8,1.5,.12],M,b),r([0,1.35,.76],[1.7,.27,.12],_,b);for(const k of[-1,1]){const j=r([k*.49,1.69,0],[1.16,.13,1.95],p,b);j.rotation.z=k*-.32}c("Г",[0,1.4,.86],.42,.29,b,{size:70});const S=[];for(const k of[-.74,.74])for(const j of[-.59,.59])a([k,-.04,j],.15,.23,t.metal,b),S.push(r([k,-.32,j],[.12,.5,.12],_,b));const T=s([0,.35,0],m);r([0,0,0],[2.5,.12,2.2],_,T),r([0,.07,0],[1.95,.035,1.65],M,T),c("ПОСАДКА",[0,.24,1.18],2.2,.3,T,{size:50});const v=s([0,.34,0],m),R=r([0,.5,0],[.32,1,2.1],p,v);for(const k of[-1.2,1.2])l([0,0,k],[0,3.4,k],.04,t.metal,v);const P=c("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),U=s([0,.33,0],m);r([0,0,0],[1.6,.12,2],t.copper,U);for(let k=0;k<5;k++)r([0,.1+k*.12,0],[1.1,.04,1.4],_,U);const O=s([-8,.6,3.4],m);a([0,.65,0],.4,1.3,t.copper,O),l([0,1.3,0],[0,1.8,0],.07,f,O),l([-.5,1.8,0],[.5,1.8,0],.07,f,O);const H=Array.from({length:6},(k,j)=>r([.7,.14+j*.24,0],[.24,.17,.12],M,O)),B=s([3,.6,3.7],m);r([0,0,0],[3.8,.2,.9],t.copper,B);const I=Array.from({length:3},(k,j)=>{const se=s([-1.1+j*1.1,.2,0],B);return r([0,.1,0],[.65,.2,.55],f,se),o([0,.56,0],[.3,.34,.27],_,se),r([0,.57,.22],[.39,.19,.08],f,se),se});c("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,m,{size:55}),c("МАШИНА ДОМА",[-8,.9,2],2.8,.32,m,{size:50});for(let k=0;k<21;k++)r([-24,-1.42,-6-k*.65],[.9,.12,.49],t.cream,e);u(b,S),u(m,[x,b,T,v,U,O,B]);let z=null,G=((ie=(W=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:W.garage)==null?void 0:ie.public)||null,Y,$="",q="",ne=null,ee=1,ue="";try{z=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function te(k,j,se={}){const Z=_h({mode:k,tool:j,args:se,state:z});z=Z.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(z))}catch{}return Z}te("migrate");const ae=document.createElement("div");ae.id="garage-controls",ae.hidden=!0,ae.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(k=>`<option>${k}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(k=>`<option>${k}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(ae);const D=()=>G&&h()?G:_h({mode:"migrate",state:z}).public,y=()=>G&&h()?"resident":"sandbox";function L(k,j){var Z;if(ee<1)return;d();const se=te("action",k,j);return ue=((Z=se.result)==null?void 0:Z.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",w(0),g(),se}ae.querySelector("#garage-pump").onclick=()=>L("pump",{power:Number(ae.querySelector("#garage-power").value),angle:Number(ae.querySelector("#garage-angle").value)}),ae.querySelector("#garage-reset").onclick=()=>L("launch",{mode:"restart"});function K(){if(!Y)return;const k=Y;ae.querySelector("#garage-readout").textContent=`испытание ${k.level}/3 · пролёт ${k.gap} · пробка ${k.barrier}
воздух ${k.air}/6 · дальность ${k.range} · вершина ${k.apex}
посадки ${k.landed}/3 · попытки ${k.attempts}`,ae.querySelector("#garage-notice").textContent=ue;for(const j of ae.querySelectorAll("select,#garage-pump"))j.disabled=ee<1||["landed","complete"].includes(k.phase);ae.querySelector("#garage-reset").disabled=ee<1}function F(k){const j=!Y||q!==y()||Y.run!==k.run;q=y(),j?(ne=k.flight,ee=1,ue=""):k.flight&&(!Y.flight||Y.flight.seq!==k.flight.seq)?(ne=k.flight,ee=0):k.flight||(ne=null,ee=1),Y=k,ae.querySelector("#garage-power").value=k.power,ae.querySelector("#garage-angle").value=k.angle,T.position.x=-8+k.gap*.7,v.position.x=-8+k.gap*.35,R.scale.y=k.barrier*.5,R.position.y=k.barrier*.25,P.position.y=k.barrier*.5+.4,I.forEach((se,Z)=>se.visible=Z<k.landed),H.forEach((se,Z)=>se.visible=Z<k.air),K()}function w(k){k=Math.min(.1,Math.max(0,k));const j=D(),se=y()+":"+JSON.stringify(j);se!==$&&($=se,F(j),g());const Z=ee;ee=Math.min(1,ee+k/3.6);const{x:ce,y:ye}=Sm(ne,ee);b.position.set(-8+ce*.7,.37+ye*.5,0),b.rotation.z=ee<1?Math.sin(ee*Math.PI*2)*.045:0,U.visible=!!ne&&["short","far"].includes(ne.outcome),U.position.x=-8+((ne==null?void 0:ne.range)||0)*.7,S.forEach(be=>be.visible=ee>0&&ee<.65),Z<1&&ee===1&&(K(),g())}const C=()=>({action:y()==="resident"?"попробовать свой гараж":ee<1?"гараж в воздухе…":Y.phase==="complete"?"новая серия ↺":Y.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(y()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+Y.message,disabled:ee<1});return window.addEventListener("beznogim:state",({detail:k})=>{var se,Z;const j=(Z=(se=k.mechanics)==null?void 0:se.garage)==null?void 0:Z.public;j&&(G=j)}),F(D()),$=y()+":"+JSON.stringify(D()),w(0),{house:m,controls:ae,update:w,card:C,run:()=>L("launch",{mode:Y.phase==="complete"?"restart":Y.phase==="landed"?"next":"jump"}),inspect:()=>({source:y(),...Y,progress:ee,notice:ue,garage:b.position.toArray(),car:x.position.toArray(),trophies:I.map(k=>k.visible)})}}const Pr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function Fl(n){const e=n.state||{},t=(u,g,h,d)=>Number.isFinite(u)?Math.max(g,Math.min(h,Math.floor(u))):d,i=t(e.planted,0,3,0),s=Math.min(2,i),r=Pr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let l=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",l={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")l={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:Pr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),l={ok:!0};else if(n.tool==="hint")l=Em(a);else if(!["slide","plant"].includes(n.tool))l={ok:!1,reason:"unknown_tool"};else if(a.planted===3)l={ok:!1,reason:"complete"};else if(n.tool==="slide"){const g={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(g,u.direction))l={ok:!1,reason:"invalid_arguments"};else{const[h,d]=g[u.direction],m=a.positions[u.piece];let _=m%5,f=Math.floor(m/5);for(;_+h>=0&&_+h<5&&f+d>=0&&f+d<5&&!r.rocks.includes((f+d)*5+_+h)&&(f+d)*5+_+h!==a.positions[1-u.piece];)_+=h,f+=d;const p=f*5+_;a.positions[u.piece]=p,p!==m?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",l={ok:p!==m,from:m,to:p,reason:p===m?"blocked":"slid"}}}else a.positions.some((g,h)=>g!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",l={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=Pr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",l={ok:!0,trees:a.planted*2})}const c=Pr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:c.rocks,goals:c.goals,size:5},result:l,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function Em(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=Pr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((l,c)=>l===e.goals[c]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let l=0;l<2;l++)for(const[c,[u,g]]of Object.entries(s)){let h=o[l]%5,d=Math.floor(o[l]/5);for(;h+u>=0&&h+u<5&&d+g>=0&&d+g<5&&!e.rocks.includes((d+g)*5+h+u)&&(d+g)*5+h+u!==o[1-l];)h+=u,d+=g;const m=o.slice();m[l]=d*5+h;const _=m.join(",");i.has(_)||(i.add(_),t.push([m,[...a,{piece:l,direction:c}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function wm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:g,watching:h,localPlay:d}){var w,C,V;const m=s([24,-1.5,24],e);m.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),f=i("#274644"),p=i("#f2e3b9"),M=i("#dfaf57"),A=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,m),r([0,.17,1.5],[7.25,.14,7.25],f,m);const b=W=>[(W%5-2)*1.35,.46,(Math.floor(W/5)-2)*1.35+1.5],S=[];for(let W=0;W<25;W++){const[ie,,k]=b(W);S.push(r([ie,.27,k],[1.27,.12,1.27],_,m))}const T=Array.from({length:6},()=>{const W=s([0,0,0],m);return r([0,.24,0],[1.05,.42,1.05],t.concrete,W),r([0,.49,0],[.9,.08,.9],t.metal,W),W}),v=[1,3].map((W,ie)=>{const k=b(W),j=s([k[0],.4,k[2]],m);return r([0,-.02,0],[1.23,.07,1.23],ie?A:M,j),r([0,.025,0],[1.03,.04,1.03],p,j),c(ie?"»":"«",[0,.14,.38],.72,.55,j,{size:105}),j});function R(W){const ie=s(b(W?24:20),m);for(let k=0;k<2;k++){const j=(k-.5)*.34,se=W?-1:1;l([j+se*.22,.92,0],[j-se*.16,.5,0],.065,W?A:M,ie),l([j-se*.16,.5,0],[j+se*.22,.08,0],.065,W?A:M,ie)}return r([0,-.07,0],[.98,.09,.5],t.metal,ie),ie}const P=[R(0),R(1)],U=P.map(W=>r([0,-.13,0],[1.1,.04,.67],p,W));for(const W of[-3.9,0,3.9])r([W,.75,-2.05],[.18,1.25,.18],t.copper,m),r([W,1.39,-2.05],[.32,.12,.32],p,m);for(const W of[-2.8,2.8])r([W,.8,-2.05],[1.85,.14,.14],t.copper,m);const O=Array.from({length:6},(W,ie)=>{const k=s([-3.5+ie%3*3.5,.3,-3.5-Math.floor(ie/3)*1.9],m);a([0,.45,0],.12,.9,t.copper,k);for(let j=0;j<3;j++){const se=new n.Mesh(new n.ConeGeometry(.87-j*.17,1.3,5),x);se.position.y=.95+j*.56,se.castShadow=!0,k.add(se)}return r([0,.02,0],[1.45,.1,1.45],t.soil||f,k),k});c("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,m,{size:44}),c("СЕВЕР",[0,1.52,-2.05],1.45,.33,m,{size:60});for(let W=0;W<23;W++)r([24,-1.42,6.6+W*.54],[1,.13,.43],t.cream,e);u(m,[...T,...P,...v,...O]);let H=null,B=((V=(C=(w=window.__beznogimState)==null?void 0:w.mechanics)==null?void 0:C.quotes)==null?void 0:V.public)||null,I,z="",G="",Y=0,$="",q=0,ne=Array(6).fill(0),ee=[null,null];try{H=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function ue(W,ie,k={}){const j=Fl({mode:W,tool:ie,args:k,state:H});H=j.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(H))}catch{}return j}ue("migrate");const te=document.createElement("div");te.id="quotes-controls",te.hidden=!0,te.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(te);const ae=()=>B&&h()?B:Fl({mode:"migrate",state:H}).public;function D(W,ie={}){if(q>0)return;d(),$="";const k=ue("action",W,ie);return z="",K(0),g(),k}for(const W of te.querySelectorAll("[data-quote]"))W.onclick=()=>{Y=Number(W.dataset.quote),$="",y()};for(const W of te.querySelectorAll("[data-slide]"))W.onclick=()=>D("slide",{piece:Y,direction:W.dataset.slide});te.querySelector("#quotes-pair").onclick=()=>D("restart",{scope:"pair"}),te.querySelector("#quotes-hint").onclick=()=>{const W=Fl({mode:"action",tool:"hint",state:ae()}).result;$=W.status==="route"?`${W.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[W.next.direction]} · осталось ходов: ${W.remaining}`:W.status==="aligned"?"Обе на месте. Выпускай.":W.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",y()};function y(){if(I){te.querySelector("#quotes-readout").textContent=`пара ${I.level}/3 · ели ${I.trees}/6 · ходы ${I.moves}`,te.querySelector("#quotes-hint-text").textContent=$;for(const W of te.querySelectorAll("[data-quote]"))W.setAttribute("aria-pressed",Number(W.dataset.quote)===Y);for(const W of te.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))W.disabled=q>0||I.phase==="complete";U.forEach((W,ie)=>W.visible=ie===Y&&I.phase!=="complete")}}function L(W){const ie=B&&h()?"resident":"sandbox",k=I,j=!k||k.run!==W.run||ie!==G;G=ie,j?(P.forEach((se,Z)=>se.position.set(...b(W.positions[Z]))),ne=O.map((se,Z)=>Z<W.trees?1:0),ee=[null,null],q=0):W.planted>k.planted?(q=1.4,ee=P.map((se,Z)=>({from:se.position.clone(),to:O[(W.planted-1)*2+Z].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):W.planted!==k.planted&&(ne=O.map((se,Z)=>Z<W.trees?1:0)),I=W,T.forEach((se,Z)=>{if(se.visible=Z<W.rocks.length,se.visible){const ce=b(W.rocks[Z]);se.position.set(ce[0],.3,ce[2])}}),y()}function K(W){W=Math.min(.1,Math.max(0,W));const ie=ae(),k=(B&&h()?"resident:":"sandbox:")+JSON.stringify(ie);k!==z&&(z=k,L(ie),g());const j=q>0;q=Math.max(0,q-W);for(let se=0;se<2;se++){const Z=P[se],ce=ee[se];if(ce&&q>0)ce.t=Math.min(1,ce.t+W/1.4),Z.position.lerpVectors(ce.from,ce.to,ce.t*ce.t*(3-2*ce.t)),Z.position.y+=Math.sin(ce.t*Math.PI)*.9,Z.scale.setScalar(1-ce.t*.8);else{ee[se]=null,Z.scale.setScalar(1);const ye=b(ie.positions[se]);Z.position.x=n.MathUtils.damp(Z.position.x,ye[0],12,W),Z.position.y=.46,Z.position.z=n.MathUtils.damp(Z.position.z,ye[2],12,W)}Z.visible=!!ee[se]||ie.phase!=="complete"}O.forEach((se,Z)=>{const ce=Z<ie.trees?1:0;ne[Z]=n.MathUtils.damp(ne[Z],ce,q>0?1:5,W),se.visible=ne[Z]>.003,se.scale.setScalar(Math.max(.001,ne[Z]))}),j&&q===0&&(y(),g())}const F=()=>({action:B&&h()?"попробовать свои ёлочки":I.phase==="complete"?"новый питомник ↺":q>0?"пролезают…":"выпустить пару",description:(B&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+I.message,disabled:q>0});return window.addEventListener("beznogim:state",({detail:W})=>{var k,j;const ie=(j=(k=W.mechanics)==null?void 0:k.quotes)==null?void 0:j.public;ie&&(B=ie)}),L(ae()),z=(B&&h()?"resident:":"sandbox:")+JSON.stringify(ae()),K(0),{house:m,controls:te,update:K,card:F,run:()=>D(I.phase==="complete"?"restart":"plant",I.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:B&&h()?"resident":"sandbox",...I,busy:q,selected:Y,hint:$,quotePositions:P.map(W=>W.position.toArray()),treeScales:ne.slice(),visibleTrees:O.filter(W=>W.visible).length})}}function vh(n){const e=n.state||{},t=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function Am({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:l,sign:c,batchStatic:u,changed:g,watching:h,localPlay:d}){var L,K,F;const m=s([0,-1.5,-24],e);m.name="punctuation-post";const _=i("#28464d"),f=i("#eee4c9"),p=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,m),r([0,.2,0],[14,.14,7],t.dark,m),r([0,.3,0],[13.6,.04,6.6],p,m);const M=s([0,0,0],m),A=s([0,0,0],m);for(const[w,C]of[[M,"ОТ"],[A,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,w),r([0,1.32,0],[2.12,.12,3.3],f,w),c(C,[0,.9,1.66],1,.36,w,{size:60});const x=s([0,1.43,0],m),b=s([0,0,0],x),S=s([0,0,0],x),T=r([-.5,0,0],[1,.15,.56],_,b),v=r([.5,0,0],[1,.15,.56],_,S),R=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,m)),P=s([0,1.47,0],m);P.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,P),o([-.08,.46,0],[.39,.42,.29],t.copper,P),l([-.08,.47,.3],.23,.033,f,P,[0,0,0]),l([-.08,.47,.315],.12,.03,f,P,[0,0,0]);for(const w of[-.13,.13])a([.4,.17,w],[.62,.46,w],.02,t.leaf,P),o([.62,.46,w],[.055,.065,.055],_,P);r([-.16,.92,0],[.46,.32,.065],f,P),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,P),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,P);const U=s([0,.4,3.9],m);r([0,0,0],[3.6,.22,1],t.copper,U);const O=[".","?","!"].map((w,C)=>{const V=s([-1.1+C*1.1,.42,0],U);return r([0,0,0],[.8,.65,.11],f,V),c(w,[0,.02,.075],.55,.5,V,{size:100}),V});c("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,m,{size:52});const H=s([0,.55,2.5],m);r([0,0,0],[10,.1,.4],t.copper,H);for(let w=-4;w<=4;w++)r([w,.07,0],[.035,.025,.26],_,H),c(String(w),[w,.08,.32],.4,.28,H,{size:45});for(let w=0;w<16;w++)r([1.5,-.1-w*.09,-5.9-w*.72],[1.05,.14,.65],t.cream,e);for(let w=0;w<8;w++)r([1.5,-1.45,-17.6-w*.5],[1.05,.14,.45],t.cream,e);const B=s([-6.9,.3,3.9],m);a([0,0,0],[0,2.7,0],.07,t.metal,B),r([0,2.7,0],[.8,.14,.8],t.metal,B),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),B),u(P,[]),u(M,[]),u(A,[]),u(m,[M,A,x,...R,P,U]);let I=null,z=((F=(K=(L=window.__beznogimState)==null?void 0:L.mechanics)==null?void 0:K.dash)==null?void 0:F.public)||null,G,Y="",$=1,q=0;try{I=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function ne(w,C,V={}){const W=vh({mode:w,tool:C,args:V,state:I});I=W.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(I))}catch{}return W}ne("migrate");const ee=document.createElement("div");ee.id="dash-controls",ee.hidden=!0,ee.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(w,C)=>`<option value="${C+1}">${C+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(w=>`<option value="${w}">${w>0?"+":""}${w}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(ee);const ue=()=>z&&h()?z:vh({mode:"migrate",state:I}).public;function te(w,C){d(),ne("action",w,C),Y="",D(0),g()}ee.querySelector("#dash-tune").onclick=()=>te("tune",{span:Number(ee.querySelector("#dash-span").value),shift:Number(ee.querySelector("#dash-shift").value)}),ee.querySelector("#dash-reset").onclick=()=>te("reset");function ae(w){const C=["delivered","complete"].includes(w.phase);C?!G||G.run!==w.run||G.round!==w.round?$=1:["delivered","complete"].includes(G.phase)||($=0):$=0,G=w,ee.querySelector("#dash-readout").textContent=`почта ${w.delivered}/3 · пролёт ${w.gap} · центр ${w.center>0?"+":""}${w.center} · попытки ${w.attempts}`,ee.querySelector("#dash-span").value=w.span,ee.querySelector("#dash-shift").value=w.shift;for(const V of ee.querySelectorAll("select,#dash-tune"))V.disabled=C;M.position.x=w.center-w.gap/2-1,A.position.x=w.center+w.gap/2+1,R[0].position.x=w.center-w.gap/2,R[1].position.x=w.center+w.gap/2,x.position.x=w.shift,T.scale.x=v.scale.x=w.span/2,T.position.x=-w.span/4,v.position.x=w.span/4,O.forEach((V,W)=>V.visible=W<w.delivered)}function D(w){const C=ue(),V=JSON.stringify(C);V!==Y&&(Y=V,ae(C),g()),$=["delivered","complete"].includes(C.phase)?Math.min(1,$+w/4):0,q=n.MathUtils.damp(q,C.phase==="bent"?.22:0,6,w),b.rotation.z=q,S.rotation.z=-q,x.position.y=1.43-Math.sin(q)*C.span/2,P.position.x=M.position.x+(A.position.x-M.position.x)*($*$*(3-2*$)),P.position.y=1.47,P.rotation.z=$>0&&$<1?Math.sin($*30)*.025:0}const y=()=>{const w=G||ue();return{action:z&&h()?"попробовать свою почту":w.phase==="complete"?"новая почта ↺":w.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(z&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+w.message}};return window.addEventListener("beznogim:state",({detail:w})=>{var V,W;const C=(W=(V=w.mechanics)==null?void 0:V.dash)==null?void 0:W.public;C&&(z=C)}),ae(ue()),Y=JSON.stringify(ue()),P.position.x=$===1?A.position.x:M.position.x,{house:m,controls:ee,update:D,card:y,run:()=>{if($>0&&$<1)return;const w=ue().phase;te(w==="complete"?"reset":w==="delivered"?"next":"cross")},inspect:()=>({source:z&&h()?"resident":"sandbox",...G,walk:$,bend:q,snail:P.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:A.position.x,stamps:O.map(w=>w.visible)})}}function xh(n){const e=n.state||{},t=(o,a,l,c)=>Number.isFinite(o)?Math.max(a,Math.min(l,Math.floor(o))):c,i={depths:[0,0,0].map((o,a)=>{var l;return t((l=e.depths)==null?void 0:l[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Tm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,watching:d,localPlay:m}){var K,F,w;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const f=i("#d0b987"),p=i("#556f7f"),M=i("#a65d42"),A=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const C of[-2,2])r([.5,.96,C],[12.9,1.1,.22],t.copper,_);for(const C of[-6,7])r([C,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(C,V)=>r([-4+V*2,.98,0],[1.9,1,3.7],f,_)),b=r([.5,.54,0],[12.6,.04,3.75],A,_);b.castShadow=!1;const S=Array.from({length:3},(C,V)=>{const W=s([-4+V*2,.35,3.05],_);for(let ie=0;ie<5;ie++)o([(ie-2)*.27,.16+ie%2*.1,0],[.32,.22,.4],f,W);return W}),T=s([-2,1.3,0],_);T.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([C,V],W)=>W?v.lineTo(C,-V):v.moveTo(C,-V)),v.closePath();const R=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});R.rotateX(-Math.PI/2);const P=new n.Mesh(R,p);P.castShadow=!0,P.receiveShadow=!0,T.add(P),r([-.45,.7,0],[4.9,.09,1.4],t.cream,T);for(let C=0;C<3;C++){r([-.95+C*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][C],T);for(const V of[-.601,.601])for(let W=0;W<4;W++)r([-.95+C*.92-.3+W*.2,1.03,V],[.024,.5,.025],t.dark,T)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,T),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,T);for(const C of[-.63,.63])r([-2.25,1.6,C],[.73,.16,.03],t.dark,T);a([-2.45,1.98,0],.15,.43,M,T),a([-2.45,2.21,0],.15,.05,t.dark,T),l([2.3,.77,0],[2.3,1.9,0],.035,t.metal,T),r([2.55,1.7,0],[.48,.26,.03],t.cream,T);for(const C of[-2.9,2.1])for(const V of[-.7,.7])l([C,.7,V],[C,1,V],.025,t.cream,T);for(const C of[-.7,.7])l([-2.9,1,C],[2.1,1,C],.025,t.cream,T);const U=s([5.9,1.1,3.4],_);c([0,0,0],.4,.04,t.copper,U,[0,0,0]);for(let C=0;C<4;C++){const V=C*Math.PI/2;l([0,0,0],[.4*Math.cos(V),.4*Math.sin(V),0],.025,t.copper,U)}l([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),l([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const O=r([5.9,.8,1.75],[.19,.55,.19],A,_);O.castShadow=!1;const H=s([0,.29,0],_);for(const C of[-2.9,2.9])r([.5,0,C],[13,.02,1.1],A,H);for(let C=0;C<3;C++)u(["КОРМА","ТРЮМ","НОС"][C],[-4+C*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const C of[-6.6,6.6])l([C,.3,-3.8],[C,3.6,-3.8],.08,t.metal,_),r([C,3.6,-3.5],[.55,.16,.8],t.metal,_),r([C,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let C=0;C<15;C++)r([-7.2-C*.72,-.03-C*.09,1.2],[.65,.14,1.12],t.cream,e);const B=s([-6.5,.5,3.3],_);l([0,0,0],[0,1.5,0],.045,t.copper,B),r([0,.1,0],[.32,.35,.08],t.metal,B),c([0,1.53,0],.1,.025,t.metal,B,[0,0,0]),g(T,[]),g(_,[...x,...S,b,T,U,O,H]);let I=null,z=((w=(F=(K=window.__beznogimState)==null?void 0:K.mechanics)==null?void 0:F.drydock)==null?void 0:w.public)||null,G,Y="",$=0,q=0,ne=0;try{I=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function ee(C,V,W={}){const ie=xh({mode:C,tool:V,args:W,state:I});I=ie.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(I))}catch{}return ie}ee("migrate");const ue=document.createElement("div");ue.id="drydock-controls",ue.hidden=!0,ue.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(ue);function te(){return z&&d()?z:xh({mode:"migrate",state:I}).public}function ae(C,V){m(),ee("action",C,V),Y="",L(0),h()}ue.querySelectorAll("[data-dig]").forEach(C=>C.onclick=()=>ae("dig",{channel:Number(C.dataset.dig)})),ue.querySelector("#drydock-fill").onclick=()=>ae("pump",{direction:"fill"}),ue.querySelector("#drydock-drain").onclick=()=>ae("pump",{direction:"drain"}),ue.querySelector("#drydock-reset").onclick=()=>ae("reset");function D(C){G?(G.water!==C.water&&($=2),G.floods!==C.floods&&(q=3),!G.launched&&C.launched&&(ne=0)):ne=C.launched?1:0,G=C,ue.querySelector("#drydock-readout").textContent=`каналы ${C.depths.join(" / ")} · вода ${C.water}/2 · переливы ${C.floods}`,ue.querySelectorAll("[data-dig]").forEach(V=>{V.disabled=C.launched||C.water>0||C.depths[Number(V.dataset.dig)]===2}),ue.querySelector("#drydock-fill").disabled=C.launched,ue.querySelector("#drydock-drain").disabled=C.launched||C.water===0,x.forEach((V,W)=>{const ie=1-C.depths[W]*.4;V.scale.y=ie,V.position.y=.48+ie/2,S[W].scale.setScalar(.45+C.depths[W]*.4)}),b.visible=C.water>0,b.position.y=.49+C.water*.39}function y(){const C=G||te();return{action:z&&d()?"попробовать свой спуск":C.launched?"корабль в песок ↺":"спустить корабль",description:(z&&d()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+C.message}}function L(C){const V=te(),W=JSON.stringify(V);W!==Y&&(Y=W,D(V),h()),$=Math.max(0,$-C),q=Math.max(0,q-C),O.visible=$>0&&V.water>0,H.visible=q>0,U.rotation.z+=$>0?C*3:0,ne=V.launched?Math.min(1,ne+C/5):0;const ie=ne*ne*(3-2*ne);T.position.x=-2+ie*5.6;const k=Math.min(...V.depths),j=V.afloat?.94:1.15-k*.32;T.position.y=n.MathUtils.damp(T.position.y,j,4,C),T.rotation.z=n.MathUtils.damp(T.rotation.z,V.afloat?0:(V.depths[2]-V.depths[0])*.085,4,C)}return window.addEventListener("beznogim:state",({detail:C})=>{var W,ie;const V=(ie=(W=C.mechanics)==null?void 0:W.drydock)==null?void 0:ie.public;V&&(z=V,Y="")}),D(te()),T.position.x=te().launched?3.6:-2,{house:_,controls:ue,update:L,card:y,run:()=>ae(te().launched?"reset":"launch"),inspect:()=>({source:z&&d()?"resident":"sandbox",...G,ship:T.position.toArray(),pitch:T.rotation.z,waterY:b.position.y,voyage:ne,sandHeights:x.map(C=>C.scale.y),floodVisible:H.visible})}}function yh(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Cm({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,changed:g,watching:h,localPlay:d}){var ue,te,ae;const m=s([0,0,0],e);m.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),f=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,m),r([.55,1.5,-.713],[1.42,1.04,.035],_,m),l([.55,.9,-.94],[.55,1,-.94],.08,t.metal,m);const p=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let D=0;D<7;D++)for(let y=0;y<9;y++)M.push(r([.55+(y-4)*.145,1.5+(3-D)*.14,-.683],[.13,.12,.02],f,m));const A=s([-1.05,1.24,-.38],m);A.name="core-gear",a([0,0,0],.3,.11,t.copper,A).rotation.x=Math.PI/2;const x=[];for(let D=0;D<12;D++){const y=D/12*Math.PI*2;let L=r([Math.cos(y)*.33,Math.sin(y)*.33,0],[.13,.13,.12],t.copper,A);L.rotation.z=y,x.push(L)}c([0,0,.06],.13,.025,t.dark,A,[0,0,0]);const b=s([-.4,1.12,-.38],m);c([0,0,0],.19,.035,t.dark,b,[0,0,0]),l([-.2,0,0],[.2,0,0],.025,t.metal,b);const S=s([0,0,0],m);l([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),l([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const T=s([-1.5,1,-.05],m);l([0,0,0],[.23,0,0],.04,t.metal,T),l([.23,0,0],[.23,.23,0],.04,t.copper,T),o([.23,.23,0],.08,t.rust,T);const v=s([-1.55,1.18,-1.13],m);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),c([0,.29,0],.33,.025,t.copper,v),c([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,m,{size:37});const R=Array.from({length:3},(D,y)=>o([.17+y*.3,2.23,-.82],.06,t.mint,m));let P=null,U=((ae=(te=(ue=window.__beznogimState)==null?void 0:ue.mechanics)==null?void 0:te.bench)==null?void 0:ae.public)||null,O,H="",B=0;try{P=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function I(D,y,L={}){const K=yh({mode:D,tool:y,args:L,state:P});P=K.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(P))}catch{}return K}I("migrate");const z=document.createElement("div");z.id="bench-controls",z.hidden=!0,z.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(z);function G(){return U&&h()?U:yh({mode:"migrate",state:P}).public}function Y(D,y){d(),I("action",D,y),H="",ee(0),g()}z.querySelectorAll("[data-part]").forEach(D=>D.onclick=()=>Y("fit",{part:D.dataset.part,value:Number(D.dataset.value)})),z.querySelector("#bench-salvage").onclick=()=>Y("salvage"),z.querySelector("#bench-restart").onclick=()=>Y("restart");function $(D){O&&O.attempts!==D.attempts&&(B=3),O=D,z.querySelector("#bench-readout").textContent=`экран ${D.round+1}/3 · скорость ${D.speed} / нужно ${D.target}`,z.querySelectorAll("[data-part]").forEach(y=>{y.setAttribute("aria-pressed",String(D[y.dataset.part]===Number(y.dataset.value))),y.disabled=D.phase!=="ready"}),z.querySelector("#bench-salvage").disabled=!D.bucket,_.color.set(D.picture?"#16362c":"#e9e4cc"),_.emissive.set(D.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=D.picture?.1:.6,M.forEach((y,L)=>y.visible=!!D.picture&&p[D.picture-1][L]==="1"),x.forEach((y,L)=>y.visible=L<D.core*3),b.scale.setScalar(.75+D.belt*.25),S.visible=!D.bucket,R.forEach((y,L)=>y.visible=L<D.repairs)}const q={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function ne(){const D=O||G();return{action:U&&h()?"собрать свой монитор":D.phase==="ejected"?"достать ядро":D.phase==="repaired"?D.round===2?"закончить работу":"следующий экран":D.phase==="complete"?"ещё раз":"крутить рукоятку",description:(U&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+q[D.phase]}}function ee(D){const y=G(),L=JSON.stringify(y);L!==H&&(H=L,$(y),g()),B=Math.max(0,B-D);const K=Math.min(1,D*7),F=y.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];A.position.lerp(new n.Vector3(...F),K),A.rotation.x=n.MathUtils.lerp(A.rotation.x,y.bucket?-Math.PI/2:0,K);const w=B>0?y.core*2:y.picture?.4:0;A.rotation.z+=D*w,b.rotation.z-=D*w*y.belt,T.rotation.z+=D*w}return window.addEventListener("beznogim:state",({detail:D})=>{var L,K;const y=(K=(L=D.mechanics)==null?void 0:L.bench)==null?void 0:K.public;y&&(U=y,H="")}),$(G()),A.position.set(...G().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:m,controls:z,update:ee,card:ne,run:()=>{const D=G();Y(D.phase==="ejected"?"salvage":D.phase==="repaired"?"next":D.phase==="complete"?"restart":"crank")},inspect:()=>({source:U&&h()?"resident":"sandbox",...O,corePosition:A.position.toArray(),coreAngle:A.rotation.z,driveAngle:b.rotation.z,litPixels:M.filter(D=>D.visible).length})}}const Mh=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function Sh(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function bh(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):Sh();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const l=n.args||{},c=n.tool;if(c==="restart")Object.assign(e,Sh(e.run+1));else if(c==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(c==="load")!Number.isInteger(l.index)||l.index<0||l.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[l.index]=!e.loaded[l.index],e.status="idle");else if(c==="amnesty")e.pardoned=!0,e.status="idle";else if(c==="dispatch"){const u=Mh[e.round],g=u.weights.reduce((h,d,m)=>h+(e.loaded[m]?d+(e.pardoned?0:u.debt[m]):0),0);e.attempts++,g!==u.target?(e.status=g<u.target?"under":"over",i={ok:!1,reason:e.status,total:g,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,d)=>{e.loaded[d]&&e.delivered.push({id:`${e.run}:${e.round}:${d}`,weight:h})}),i={ok:!0,total:g,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Mh[e.round],r=s.weights.map((l,c)=>l+(e.pardoned?0:s.debt[c])),o=r.reduce((l,c,u)=>l+(e.loaded[u]?c:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Rm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,watching:d,localPlay:m}){var y,L,K;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const f=i("#9d8560"),p=i("#a1b56f"),M=i("#f1d29a"),A=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],A,_),r([3.65,-.14,0],[3.3,.5,7],A,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const F of[-4.9,4.9])l([F,0,-3],[F,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],f,_);const x=s([0,.2,1.15],_);for(let F=0;F<11;F++)r([-2+F*.4,0,0],[.38,.16,1.65],f,x);for(const F of[-.72,.72])l([-2.2,.22,F],[2.2,.22,F],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const b=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,b);for(const F of[-.52,.52])for(const w of[-.58,.58]){const C=c([F,0,w],.17,.05,t.dark,b,[0,0,0]);C.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],_);l([0,-.5,0],[0,.2,0],.1,t.metal,S);const T=s([0,0,0],S);l([0,0,0],[0,.8,0],.065,t.copper,T),o([0,.8,0],.14,t.rust,T),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const R=a([0,.7,0],.57,1.1,t.copper,v);c([0,1.28,0],.25,.045,t.dark,v);const P=Array.from({length:3},(F,w)=>o([1.75+w*.34,2.15,-3.05],.095,t.mint,_)),U=Array.from({length:3},(F,w)=>{const C=s([-3.6,.72,-2.1+w*1.08],_),V=o([0,0,0],[.28,.23,.57],p,C);V.rotation.z=.1,l([0,0,-.5],[.05,.12,-.68],.045,t.leaf,C);const W=s([.45,.28,0],C);return r([0,0,0],[.29,.57,.4],M,W),r([0,0,.21],[.18,.045,.012],t.rust,W),{g:C,tax:W}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],f,_);const O=Array.from({length:6},(F,w)=>o([2.75+w%3*.7,1,-2.1+Math.floor(w/3)*.83],[.2,.19,.38],p,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const H=s([0,0,0],e);for(let F=0;F<15;F++){const w=F/14;r([-.6+Math.sin(w*Math.PI)*1.5,-1.55,17+F*.3],[.9,.12,.65],A,H)}for(let F=0;F<5;F++)r([-.8-F*.6,-1.55,21.5],[.75,.12,.75],A,H);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,H,{size:35}),l([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,H),g(H,[]),g(_,[x,b,S,v,...U.map(F=>F.g),...O,...P]),g(x,[]),g(b,[]);let B=null,I=((K=(L=(y=window.__beznogimState)==null?void 0:y.mechanics)==null?void 0:L.amnesty)==null?void 0:K.public)||null,z,G="",Y=0;try{B=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function $(F,w,C={}){const V=bh({state:B,mode:F,tool:w,args:C});B=V.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(B))}catch{}return V}$("migrate");const q=document.createElement("div");q.id="amnesty-controls",q.hidden=!0,q.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(q);function ne(){return I&&d()?I:bh({state:B,mode:"migrate"}).public}function ee(F,w){m(),$("action",F,w),G="",D(0),h()}for(const F of q.querySelectorAll("[data-load]"))F.onclick=()=>ee("load",{index:Number(F.dataset.load)});q.querySelector("#amnesty-pardon").onclick=()=>ee("amnesty"),q.querySelector("#amnesty-restart").onclick=()=>ee("restart");const ue={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function te(F){z=F;const w=F.status==="delivered"||F.status==="complete";q.querySelector("#amnesty-readout").textContent=`рейс ${F.round+1}/3 · груз ${F.total} / нужно ${F.target}`,q.querySelectorAll("[data-load]").forEach((C,V)=>{C.textContent=`${["A","B","C"][V]} · ${F.weights[V]}${F.debt[V]?` + ${F.debt[V]} бумага`:""}`,C.setAttribute("aria-pressed",String(F.loaded[V])),C.disabled=w}),q.querySelector("#amnesty-pardon").disabled=F.pardoned||w,q.querySelector("#amnesty-pardon").textContent=F.pardoned?"налог отменён":"отменить налог",R.scale.y=F.target/4,P.forEach((C,V)=>C.visible=V<(F.status==="complete"?3:F.round)),O.forEach((C,V)=>C.visible=V<F.delivered.length),U.forEach((C,V)=>{C.tax.visible=!F.pardoned||Y<.99,C.g.visible=!w||!F.loaded[V],C.g.scale.setScalar(.8+F.weights[V]*.08)})}function ae(){const F=z||ne();return{action:I&&d()?"войти в свою амнистию":F.status==="delivered"?"следующий рейс":F.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(I&&d()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+ue[F.status]}}function D(F,w){const C=ne(),V=JSON.stringify(C);V!==G&&(G=V,te(C),h());const W=C.status==="delivered"||C.status==="complete",ie=(k,j)=>n.MathUtils.lerp(k,j,Math.min(1,F*5));x.rotation.z=ie(x.rotation.z,C.tilt),b.position.x=ie(b.position.x,W?3:-2.55),T.rotation.z=ie(T.rotation.z,C.pardoned?-.65:0),Y=ie(Y,C.pardoned?1:0),U.forEach(k=>{k.tax.position.y=.28+Y*2.5,k.tax.rotation.z=Y*.8,k.tax.visible=!C.pardoned||Y<.99}),O.forEach((k,j)=>k.visible=j<C.delivered.length-(W&&b.position.x<2.9?2:0)),U.forEach((k,j)=>{const se=C.loaded[j];k.g.visible=!W||!se||b.position.x<2.9,k.g.position.x=ie(k.g.position.x,se?b.position.x+(j-1)*.42:-3.6),k.g.position.y=ie(k.g.position.y,se?.86:.72),k.g.position.z=ie(k.g.position.z,se?1.15:-2.1+j*1.08)})}return window.addEventListener("beznogim:state",({detail:F})=>{var C,V;const w=(V=(C=F.mechanics)==null?void 0:C.amnesty)==null?void 0:V.public;w&&(I=w,G="")}),Y=ne().pardoned?1:0,te(ne()),{house:_,controls:q,update:D,card:ae,run:()=>ee(z.status==="delivered"?"next":z.status==="complete"?"restart":"dispatch"),inspect:()=>({source:I&&d()?"resident":"sandbox",...z,bridgeTilt:x.rotation.z,cartX:b.position.x,cargoPositions:U.map(F=>F.g.position.toArray()),taxVisible:U.map(F=>F.tax.visible),paperY:U.map(F=>F.tax.position.y),handleAngle:T.rotation.z,deliveredVisible:O.filter(F=>F.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="186",Ri={ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qd=0,wc=1,Xd=2,tr=1,Yd=2,Ks=3,ss=0,gn=1,Nn=2,gi=0,nr=1,Ac=2,Tc=3,Cc=4,$d=5,xs=100,Jd=101,Zd=102,Kd=103,Qd=104,jd=200,ef=201,tf=202,nf=203,tu=204,nu=205,sf=206,rf=207,of=208,af=209,lf=210,cf=211,uf=212,hf=213,df=214,la=0,ca=1,ua=2,or=3,ha=4,da=5,fa=6,pa=7,iu=0,ff=1,pf=2,ei=0,su=1,ru=2,ou=3,il=4,au=5,lu=6,cu=7,uu=300,rs=301,Ts=302,Zo=303,Ko=304,so=306,Xr=1e3,di=1001,ma=1002,jt=1003,mf=1004,Lr=1005,tn=1006,Qo=1007,Ki=1008,yn=1009,hu=1010,du=1011,ar=1012,sl=1013,ii=1014,Fn=1015,si=1016,rl=1017,ol=1018,lr=1020,fu=35902,pu=35899,mu=1021,gu=1022,zn=1023,xi=1026,Qi=1027,al=1028,ll=1029,os=1030,cl=1031,ul=1033,zr=33776,kr=33777,Br=33778,Vr=33779,ga=35840,_a=35841,va=35842,xa=35843,ya=36196,Ma=37492,Sa=37496,ba=37488,Ea=37489,Yr=37490,wa=37491,Aa=37808,Ta=37809,Ca=37810,Ra=37811,Pa=37812,La=37813,Ia=37814,Da=37815,Na=37816,Ua=37817,Oa=37818,Fa=37819,za=37820,ka=37821,Ba=36492,Va=36494,Ga=36495,Ha=36283,Wa=36284,$r=36285,qa=36286,gf=3200,Xa=0,_f=1,Ai="",cn="srgb",Jr="srgb-linear",Zr="linear",At="srgb",jo=7680,vf=519,xf=512,yf=513,Mf=514,hl=515,Sf=516,bf=517,dl=518,Ef=519,wf=35044,Rc="300 es",jn=2e3,cr=2001;function Pm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){const n=Ya("canvas");return n.style.display="block",n}const Eh={};function Pc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Tf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=Tf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=Tf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ws(...n){const e=n.join(" ");e in Eh||(Eh[e]=!0,tt(...n))}function Lm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Im={[la]:ca,[ua]:fa,[ha]:pa,[or]:da,[ca]:la,[fa]:ua,[pa]:ha,[da]:or};class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const Gr=Math.PI/180,Kr=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function _u(n,e){return(n%e+e)%e}function Dm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nm(n,e,t){return n!==e?(t-n)/(e-n):0}function Hr(n,e,t){return(1-t)*n+t*e}function Um(n,e,t,i){return Hr(n,e,1-Math.exp(-t*i))}function Om(n,e=1){return e-Math.abs(_u(n,e*2)-e)}function Fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function km(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bm(n,e){return n+Math.random()*(e-n)}function Vm(n){return n*(.5-Math.random())}function Gm(n){n!==void 0&&(wh=n);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(n){return n*Gr}function Wm(n){return n*Kr}function qm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ym(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $m(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),g=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*g,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*g,a*c);break;case"ZXZ":n.set(l*g,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*u,a*c);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:Gr,RAD2DEG:Kr,generateUUID:Rs,clamp:ut,euclideanModulo:_u,mapLinear:Dm,inverseLerp:Nm,lerp:Hr,damp:Um,pingpong:Om,smoothstep:Fm,smootherstep:zm,randInt:km,randFloat:Bm,randFloatSpread:Vm,seededRandom:Gm,degToRad:Hm,radToDeg:Wm,isPowerOfTwo:qm,ceilPowerOfTwo:Xm,floorPowerOfTwo:Ym,setQuaternionFromProperEuler:$m,normalize:dn,denormalize:Js},th=class th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;let Ae=th;class zi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],g=i[s+3],h=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(g!==_||l!==h||c!==d||u!==m){let f=l*h+c*d+u*m+g*_;f<0&&(h=-h,d=-d,m=-m,_=-_,f=-f);let p=1-a;if(f<.9995){const M=Math.acos(f),A=Math.sin(M);p=Math.sin(p*M)/A,a=Math.sin(a*M)/A,l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,g=g*p+_*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,g=g*p+_*a;const M=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=M,c*=M,u*=M,g*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],g=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*g+l*d-c*h,e[t+1]=l*m+u*h+c*g-a*d,e[t+2]=c*m+u*d+a*h-l*g,e[t+3]=u*m-a*g-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),g=a(r/2),h=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*g+c*d*m,this._y=c*d*g-h*u*m,this._z=c*u*m+h*d*g,this._w=c*u*g-h*d*m;break;case"YXZ":this._x=h*u*g+c*d*m,this._y=c*d*g-h*u*m,this._z=c*u*m-h*d*g,this._w=c*u*g+h*d*m;break;case"ZXY":this._x=h*u*g-c*d*m,this._y=c*d*g+h*u*m,this._z=c*u*m+h*d*g,this._w=c*u*g-h*d*m;break;case"ZYX":this._x=h*u*g-c*d*m,this._y=c*d*g+h*u*m,this._z=c*u*m-h*d*g,this._w=c*u*g+h*d*m;break;case"YZX":this._x=h*u*g+c*d*m,this._y=c*d*g+h*u*m,this._z=c*u*m-h*d*g,this._w=c*u*g-h*d*m;break;case"XZY":this._x=h*u*g-c*d*m,this._y=c*d*g-h*u*m,this._z=c*u*m+h*d*g,this._w=c*u*g+h*d*m;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],g=t[10],h=i+a+g;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>g){const d=2*Math.sqrt(1+i-a-g);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>g){const d=2*Math.sqrt(1+a-i-g);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+g-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nh=class nh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),g=2*(r*i-o*t);return this.x=t+l*c+o*g-a*u,this.y=i+l*u+a*c-r*g,this.z=s+l*g+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;let X=nh;const zl=new X,Ah=new zi,ih=class ih{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],g=i[7],h=i[2],d=i[5],m=i[8],_=s[0],f=s[3],p=s[6],M=s[1],A=s[4],x=s[7],b=s[2],S=s[5],T=s[8];return r[0]=o*_+a*M+l*b,r[3]=o*f+a*A+l*S,r[6]=o*p+a*x+l*T,r[1]=c*_+u*M+g*b,r[4]=c*f+u*A+g*S,r[7]=c*p+u*x+g*T,r[2]=h*_+d*M+m*b,r[5]=h*f+d*A+m*S,r[8]=h*p+d*x+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=t*g+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=g*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;let st=ih;const kl=new st,Th=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){const n={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jr]:{primaries:e,whitePoint:i,transfer:Zr,toXYZ:Th,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:At,toXYZ:Th,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const gt=Jm();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Us;class Cf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Us===void 0&&(Us=Ya("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zm=0;class fl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Km=0;const Vl=new X;class sn extends Bi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=di,s=di,r=tn,o=Ki,a=zn,l=yn,c=sn.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Rs(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=uu;sn.DEFAULT_ANISOTROPY=1;const sh=class sh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],g=l[8],h=l[1],d=l[5],m=l[9],_=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(g-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(g+_)<.1&&Math.abs(m+f)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(d+1)/2,b=(p+1)/2,S=(u+h)/4,T=(g+_)/4,v=(m+f)/4;return A>x&&A>b?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=S/i,r=T/i):x>b?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=T/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((f-m)*(f-m)+(g-_)*(g-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(f-m)/M,this.y=(g-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sh.prototype.isVector4=!0;let Ft=sh;class Rf extends Bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new fl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vu extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const tl=class tl{constructor(e,t,i,s,r,o,a,l,c,u,g,h,d,m,_,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,g,h,d,m,_,f)}set(e,t,i,s,r,o,a,l,c,u,g,h,d,m,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=g,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tl().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*g,m=a*u,_=a*g;t[0]=l*u,t[4]=-l*g,t[8]=c,t[1]=d+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*g,m=c*u,_=c*g;t[0]=h+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*g,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*g,m=c*u,_=c*g;t[0]=h-_*a,t[4]=-o*g,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*g,m=a*u,_=a*g;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+_,t[1]=l*g,t[5]=_*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-h*g,t[8]=m*g+d,t[1]=g,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*g+m,t[10]=h-_*g}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-g,t[8]=c*u,t[1]=h*g+_,t[5]=o*u,t[9]=d*g-m,t[2]=m*g-d,t[6]=a*u,t[10]=_*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qm,e,jm)}lookAt(e,t,i){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(i,En),Xi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(i,En)),Xi.normalize(),yo.crossVectors(En,Xi),s[0]=Xi.x,s[4]=yo.x,s[8]=En.x,s[1]=Xi.y,s[5]=yo.y,s[9]=En.y,s[2]=Xi.z,s[6]=yo.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],g=i[5],h=i[9],d=i[13],m=i[2],_=i[6],f=i[10],p=i[14],M=i[3],A=i[7],x=i[11],b=i[15],S=s[0],T=s[4],v=s[8],R=s[12],P=s[1],U=s[5],O=s[9],H=s[13],B=s[2],I=s[6],z=s[10],G=s[14],Y=s[3],$=s[7],q=s[11],ne=s[15];return r[0]=o*S+a*P+l*B+c*Y,r[4]=o*T+a*U+l*I+c*$,r[8]=o*v+a*O+l*z+c*q,r[12]=o*R+a*H+l*G+c*ne,r[1]=u*S+g*P+h*B+d*Y,r[5]=u*T+g*U+h*I+d*$,r[9]=u*v+g*O+h*z+d*q,r[13]=u*R+g*H+h*G+d*ne,r[2]=m*S+_*P+f*B+p*Y,r[6]=m*T+_*U+f*I+p*$,r[10]=m*v+_*O+f*z+p*q,r[14]=m*R+_*H+f*G+p*ne,r[3]=M*S+A*P+x*B+b*Y,r[7]=M*T+A*U+x*I+b*$,r[11]=M*v+A*O+x*z+b*q,r[15]=M*R+A*H+x*G+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],g=e[6],h=e[10],d=e[14],m=e[3],_=e[7],f=e[11],p=e[15],M=l*d-c*h,A=a*d-c*g,x=a*h-l*g,b=o*d-c*u,S=o*h-l*u,T=o*g-a*u;return t*(_*M-f*A+p*x)-i*(m*M-f*b+p*S)+s*(m*A-_*b+p*T)-r*(m*x-_*S+f*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=e[9],h=e[10],d=e[11],m=e[12],_=e[13],f=e[14],p=e[15],M=t*a-i*o,A=t*l-s*o,x=t*c-r*o,b=i*l-s*a,S=i*c-r*a,T=s*c-r*l,v=u*_-g*m,R=u*f-h*m,P=u*p-d*m,U=g*f-h*_,O=g*p-d*_,H=h*p-d*f,B=M*H-A*O+x*U+b*P-S*R+T*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=(a*H-l*O+c*U)*I,e[1]=(s*O-i*H-r*U)*I,e[2]=(_*T-f*S+p*b)*I,e[3]=(h*S-g*T-d*b)*I,e[4]=(l*P-o*H-c*R)*I,e[5]=(t*H-s*P+r*R)*I,e[6]=(f*x-m*T-p*A)*I,e[7]=(u*T-h*x+d*A)*I,e[8]=(o*O-a*P+c*v)*I,e[9]=(i*P-t*O-r*v)*I,e[10]=(m*S-_*x+p*M)*I,e[11]=(g*x-u*S-d*M)*I,e[12]=(a*R-o*U-l*v)*I,e[13]=(t*U-i*R+s*v)*I,e[14]=(_*A-m*b-f*M)*I,e[15]=(u*b-g*A+h*M)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,g=a+a,h=r*c,d=r*u,m=r*g,_=o*u,f=o*g,p=a*g,M=l*c,A=l*u,x=l*g,b=i.x,S=i.y,T=i.z;return s[0]=(1-(_+p))*b,s[1]=(d+x)*b,s[2]=(m-A)*b,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(h+p))*S,s[6]=(f+M)*S,s[7]=0,s[8]=(m+A)*T,s[9]=(f-M)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Os.set(s[0],s[1],s[2]).length();const a=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Xn.copy(this);const c=1/o,u=1/a,g=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=g,Xn.elements[9]*=g,Xn.elements[10]*=g,t.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2*r/(t-e),g=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===jn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===cr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=g,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2/(t-e),g=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===jn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===cr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=g,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};tl.prototype.isMatrix4=!0;let St=tl;const Os=new X,Xn=new St,Qm=new X(0,0,0),jm=new X(1,1,1),Xi=new X,yo=new X,En=new X,Rh=new St,Ph=new zi;class ki{constructor(e=0,t=0,i=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],g=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e0=0;const Lh=new X,Fs=new zi,Mi=new St,Mo=new X,xr=new X,t0=new X,n0=new zi,Ih=new X(1,0,0),Dh=new X(0,1,0),Nh=new X(0,0,1),Uh={type:"added"},i0={type:"removed"},zs={type:"childadded",child:null},Gl={type:"childremoved",child:null};class Ht extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new X,t=new ki,i=new zi,s=new X(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new st}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mo.copy(e):Mo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(xr,Mo,this.up):Mi.lookAt(Mo,xr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),zs.child=e,this.dispatchEvent(zs),zs.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i0),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),g=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new X(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ji extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,i),p=this._getHandJoint(c,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],h=u.position.distanceTo(g.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ji;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=_u(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return gt.workingToColorSpace(ln.copy(this),e),Math.round(ut(ln.r*255,0,255))*65536+Math.round(ut(ln.g*255,0,255))*256+Math.round(ut(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const g=o-a;switch(c=u<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){gt.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(So);const i=Hr(Yi.h,So.h,t),s=Hr(Yi.s,So.s,t),r=Hr(Yi.l,So.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new dt;dt.NAMES=Lf;class ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(e),this.density=t}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class If extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new X,Si=new X,Wl=new X,bi=new X,ks=new X,Bs=new X,Oh=new X,ql=new X,Xl=new X,Yl=new X,$l=new Ft,Jl=new Ft,Zl=new Ft;class Un{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Yn.subVectors(s,t),Si.subVectors(i,t),Wl.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Si),l=Yn.dot(Wl),c=Si.dot(Si),u=Si.dot(Wl),g=o*c-a*a;if(g===0)return r.set(0,0,0),null;const h=1/g,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return $l.setScalar(0),Jl.setScalar(0),Zl.setScalar(0),$l.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,i),Zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Jl,r.y),o.addScaledVector(Zl,r.z),o}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),Si.subVectors(e,t),Yn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Yn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ks.subVectors(s,i),Bs.subVectors(r,i),ql.subVectors(e,i);const l=ks.dot(ql),c=Bs.dot(ql);if(l<=0&&c<=0)return t.copy(i);Xl.subVectors(e,s);const u=ks.dot(Xl),g=Bs.dot(Xl);if(u>=0&&g<=u)return t.copy(s);const h=l*g-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ks,o);Yl.subVectors(e,r);const d=ks.dot(Yl),m=Bs.dot(Yl);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Bs,a);const f=u*m-d*g;if(f<=0&&g-u>=0&&d-m>=0)return Oh.subVectors(r,s),a=(g-u)/(g-u+(d-m)),t.copy(s).addScaledVector(Oh,a);const p=1/(f+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(ks,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ls{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Eo.subVectors(this.max,yr),Vs.subVectors(e.a,yr),Gs.subVectors(e.b,yr),Hs.subVectors(e.c,yr),$i.subVectors(Gs,Vs),Ji.subVectors(Hs,Gs),ds.subVectors(Vs,Hs);let t=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-ds.z,ds.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,ds.z,0,-ds.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-ds.y,ds.x,0];return!Kl(t,Vs,Gs,Hs,Eo)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,Vs,Gs,Hs,Eo))?!1:(wo.crossVectors($i,Ji),t=[wo.x,wo.y,wo.z],Kl(t,Vs,Gs,Hs,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new X,new X,new X,new X,new X,new X,new X,new X],$n=new X,bo=new ls,Vs=new X,Gs=new X,Hs=new X,$i=new X,Ji=new X,ds=new X,yr=new X,Eo=new X,wo=new X,fs=new X;function Kl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){fs.fromArray(n,r);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),u=i.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xt=new X,Ao=new Ae;let r0=0;class Bn extends Bi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wf,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xu extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yu extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const o0=new ls,Mr=new X,Ql=new X;class cs{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):o0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Ql)),this.expandByPoint(Mr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let a0=0;const Pn=new St,jl=new Ht,Ws=new X,wn=new ls,Sr=new ls,Qt=new X;class Wt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pm(e)?yu:xu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(wn.min,Sr.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,Sr.max),wn.expandByPoint(Qt)):(wn.expandByPoint(Sr.min),wn.expandByPoint(Sr.max))}wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),Qt.add(Ws)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new X,l[v]=new X;const c=new X,u=new X,g=new X,h=new Ae,d=new Ae,m=new Ae,_=new X,f=new X;function p(v,R,P){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,R),g.fromBufferAttribute(i,P),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,P),u.sub(c),g.sub(c),d.sub(h),m.sub(h);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(g,-d.y).multiplyScalar(U),f.copy(g).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(U),a[v].add(_),a[R].add(_),a[P].add(_),l[v].add(f),l[R].add(f),l[P].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,R=M.length;v<R;++v){const P=M[v],U=P.start,O=P.count;for(let H=U,B=U+O;H<B;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const A=new X,x=new X,b=new X,S=new X;function T(v){b.fromBufferAttribute(s,v),S.copy(b);const R=a[v];A.copy(R),A.sub(b.multiplyScalar(b.dot(R))).normalize(),x.crossVectors(S,R);const U=x.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,U)}for(let v=0,R=M.length;v<R;++v){const P=M[v],U=P.start,O=P.count;for(let H=U,B=U+O;H<B;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,g=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,g=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new Bn(h,u,g)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,g=c.length;u<g;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let g=0,h=c.length;g<h;g++){const d=c[g];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],g=r[c];for(let h=0,d=g.length;h<d;h++)u.push(g[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const g=o[c];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new X,l0=new X,c0=new st;class hi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ec.subVectors(i,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||c0.getNormalMatrix(e),s=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let u0=0;class us extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=nr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wi=new X,tc=new X,To=new X,Co=new X;class pr{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tc.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Co.copy(this.origin).sub(tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(To),a=Co.dot(this.direction),l=-Co.dot(To),c=Co.lengthSq(),u=Math.abs(1-o*o);let g,h,d,m;if(u>0)if(g=o*l-a,h=o*a-l,m=r*u,g>=0)if(h>=-m)if(h<=m){const _=1/u;g*=_,h*=_,d=g*(g+o*h+2*a)+h*(o*g+h+2*l)+c}else h=r,g=Math.max(0,-(o*h+a)),d=-g*g+h*(h+2*l)+c;else h=-r,g=Math.max(0,-(o*h+a)),d=-g*g+h*(h+2*l)+c;else h<=-m?(g=Math.max(0,-(-o*r+a)),h=g>0?-r:Math.min(Math.max(-r,-l),r),d=-g*g+h*(h+2*l)+c):h<=m?(g=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(g=Math.max(0,-(o*r+a)),h=g>0?r:Math.min(Math.max(-r,-l),r),d=-g*g+h*(h+2*l)+c);else h=o>0?-r:r,g=Math.max(0,-(o*h+a)),d=-g*g+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(tc).addScaledVector(To,h),d}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-h.z)*g,l=(e.max.z-h.z)*g):(a=(e.max.z-h.z)*g,l=(e.min.z-h.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,g=e.x-o.x,h=e.y-o.y,d=e.z-o.z,m=t.x-o.x,_=t.y-o.y,f=t.z-o.z,p=i.x-o.x,M=i.y-o.y,A=i.z-o.z,x=Math.abs(l),b=Math.abs(c),S=Math.abs(u);let T,v,R,P,U,O,H,B,I,z,G,Y;if(x>=b&&x>=S?(R=l,O=g,I=m,Y=p,l>=0?(T=c,v=u,P=h,U=d,H=_,B=f,z=M,G=A):(T=u,v=c,P=d,U=h,H=f,B=_,z=A,G=M)):b>=S?(R=c,O=h,I=_,Y=M,c>=0?(T=u,v=l,P=d,U=g,H=f,B=m,z=A,G=p):(T=l,v=u,P=g,U=d,H=m,B=f,z=p,G=A)):(R=u,O=d,I=f,Y=A,u>=0?(T=l,v=c,P=g,U=h,H=m,B=_,z=p,G=M):(T=c,v=l,P=h,U=g,H=_,B=m,z=M,G=p)),R===0)return null;const $=T/R,q=v/R,ne=1/R,ee=P-$*O,ue=U-q*O,te=H-$*I,ae=B-q*I,D=z-$*Y,y=G-q*Y,L=D*ae-y*te,K=ee*y-ue*D,F=te*ue-ae*ee;if(s){if(L<0||K<0||F<0)return null}else if((L<0||K<0||F<0)&&(L>0||K>0||F>0))return null;const w=L+K+F;if(w===0)return null;const C=ne*(L*O+K*I+F*Y);return(w>0?C<0:C>0)?null:this.at(C/w,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ro extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fh=new St,ps=new pr,Ro=new cs,zh=new X,Po=new X,Lo=new X,Io=new X,nc=new X,Do=new X,kh=new X,No=new X;class _n extends Ht{constructor(e=new Wt,t=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],g=r[l];u!==0&&(nc.fromBufferAttribute(g,e),o?Do.addScaledVector(nc,u):Do.addScaledVector(nc.sub(t),u))}t.add(Do)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Ro.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ro,zh)===null||ps.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),ps.copy(e.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const f=h[m],p=o[f.materialIndex],M=Math.max(f.start,d.start),A=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let x=M,b=A;x<b;x+=3){const S=a.getX(x),T=a.getX(x+1),v=a.getX(x+2);s=Uo(this,p,e,i,c,u,g,S,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const M=a.getX(f),A=a.getX(f+1),x=a.getX(f+2);s=Uo(this,o,e,i,c,u,g,M,A,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const f=h[m],p=o[f.materialIndex],M=Math.max(f.start,d.start),A=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let x=M,b=A;x<b;x+=3){const S=x,T=x+1,v=x+2;s=Uo(this,p,e,i,c,u,g,S,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let f=m,p=_;f<p;f+=3){const M=f,A=f+1,x=f+2;s=Uo(this,o,e,i,c,u,g,M,A,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function h0(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ss,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:n}}function Uo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Po),n.getVertexPosition(l,Lo),n.getVertexPosition(c,Io);const u=h0(n,e,t,i,Po,Lo,Io,kh);if(u){const g=new X;Un.getBarycoord(kh,Po,Lo,Io,g),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,g,new Ae)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,g,new Ae)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,g,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};Un.getNormal(Po,Lo,Io,h.normal),u.face=h,u.barycoord=g}return u}class Mu extends sn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,u=jt,g,h){super(null,o,a,l,c,u,s,r,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lc extends Bn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qs=new St,Bh=new St,Oo=[],Vh=new ls,d0=new St,br=new _n,Er=new cs;class Ic extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,d0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Vh.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(Vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Er.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),Bh.multiplyMatrices(i,qs),br.matrixWorld=Bh,br.raycast(e,Oo);for(let o=0,a=Oo.length;o<a;o++){const l=Oo[o];l.instanceId=r,l.object=this,t.push(l)}Oo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mu(new Float32Array(s*this.count),s,this.count,al,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ms=new cs,f0=new Ae(.5,.5),Fo=new X;class gl{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],g=r[5],h=r[6],d=r[7],m=r[8],_=r[9],f=r[10],p=r[11],M=r[12],A=r[13],x=r[14],b=r[15];if(s[0].setComponents(c-o,d-u,p-m,b-M).normalize(),s[1].setComponents(c+o,d+u,p+m,b+M).normalize(),s[2].setComponents(c+a,d+g,p+_,b+A).normalize(),s[3].setComponents(c-a,d-g,p-_,b-A).normalize(),i)s[4].setComponents(l,h,f,x).normalize(),s[5].setComponents(c-l,d-h,p-f,b-x).normalize();else if(s[4].setComponents(c-l,d-h,p-f,b-x).normalize(),t===jn)s[5].setComponents(c+l,d+h,p+f,b+x).normalize();else if(t===cr)s[5].setComponents(l,h,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=f0.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new X,Ja=new X,Gh=new St,wr=new pr,zo=new cs,ic=new X,Hh=new X;class p0 extends Ht{constructor(e=new Wt,t=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$a.distanceTo(Ja);e.setAttribute("lineDistance",new bt(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;Gh.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,f=m-1;_<f;_+=c){const p=u.getX(_),M=u.getX(_+1),A=ko(this,e,wr,l,p,M,_);A&&t.push(A)}if(this.isLineLoop){const _=u.getX(m-1),f=u.getX(d),p=ko(this,e,wr,l,_,f,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,f=m-1;_<f;_+=c){const p=ko(this,e,wr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ko(this,e,wr,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ko(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if($a.fromBufferAttribute(a,s),Ja.fromBufferAttribute(a,r),t.distanceSqToSegment($a,Ja,ic,Hh)>i)return;ic.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ic);if(!(c<e.near||c>e.far))return{distance:c,point:Hh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class bu extends us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wh=new St,Dc=new pr,Bo=new cs,Vo=new X;class Df extends Ht{constructor(e=new Wt,t=new bu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Wh.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(Wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,g=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const f=c.getX(m);Vo.fromBufferAttribute(g,f),qh(Vo,f,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(g.count,o.start+o.count);for(let m=h,_=d;m<_;m++)Vo.fromBufferAttribute(g,m),qh(Vo,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qh(n,e,t,i,s,r,o){const a=Dc.distanceSqToPoint(n);if(a<t){const l=new X;Dc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Eu extends sn{constructor(e=[],t=rs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wu extends sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends sn{constructor(e,t,i=ii,s,r,o,a=jt,l=jt,c,u=xi,g=1){if(u!==xi&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:g};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Nf extends ur{constructor(e,t=ii,i=rs,s,r,o=jt,a=jt,l,c=xi){const u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Au extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vi extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],g=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(g,2));function m(_,f,p,M,A,x,b,S,T,v,R){const P=x/T,U=b/v,O=x/2,H=b/2,B=S/2,I=T+1,z=v+1;let G=0,Y=0;const $=new X;for(let q=0;q<z;q++){const ne=q*U-H;for(let ee=0;ee<I;ee++){const ue=ee*P-O;$[_]=ue*M,$[f]=ne*A,$[p]=B,c.push($.x,$.y,$.z),$[_]=0,$[f]=0,$[p]=S>0?1:-1,u.push($.x,$.y,$.z),g.push(ee/T),g.push(1-q/v),G+=1}}for(let q=0;q<v;q++)for(let ne=0;ne<T;ne++){const ee=h+ne+I*q,ue=h+ne+I*(q+1),te=h+(ne+1)+I*(q+1),ae=h+(ne+1)+I*q;l.push(ee,ue,ae),l.push(ue,te,ae),Y+=6}a.addGroup(d,Y,R),d+=Y,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _l extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new X,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let g=0,h=3;g<=t;g++,h+=3){const d=i+g/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oo extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],g=[],h=[],d=[];let m=0;const _=[],f=i/2;let p=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function M(){const x=new X,b=new X;let S=0;const T=(t-e)/i;for(let v=0;v<=r;v++){const R=[],P=v/r,U=P*(t-e)+e;for(let O=0;O<=s;O++){const H=O/s,B=H*l+a,I=Math.sin(B),z=Math.cos(B);b.x=U*I,b.y=-P*i+f,b.z=U*z,g.push(b.x,b.y,b.z),x.set(I,T,z).normalize(),h.push(x.x,x.y,x.z),d.push(H,1-P),R.push(m++)}_.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){const P=_[R][v],U=_[R+1][v],O=_[R+1][v+1],H=_[R][v+1];(e>0||R!==0)&&(u.push(P,U,H),S+=3),(t>0||R!==r-1)&&(u.push(U,O,H),S+=3)}c.addGroup(p,S,0),p+=S}function A(x){const b=m,S=new Ae,T=new X;let v=0;const R=x===!0?e:t,P=x===!0?1:-1;for(let O=1;O<=s;O++)g.push(0,f*P,0),h.push(0,P,0),d.push(.5,.5),m++;const U=m;for(let O=0;O<=s;O++){const B=O/s*l+a,I=Math.cos(B),z=Math.sin(B);T.x=R*z,T.y=f*P,T.z=R*I,g.push(T.x,T.y,T.z),h.push(0,P,0),S.x=I*.5+.5,S.y=z*.5*P+.5,d.push(S.x,S.y),m++}for(let O=0;O<s;O++){const H=b+O,B=U+O;x===!0?u.push(B,B+1,H):u.push(B+1,B,H),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ps extends oo{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ps(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vl extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const A=new X,x=new X,b=new X;for(let S=0;S<t.length;S+=3)d(t[S+0],A),d(t[S+1],x),d(t[S+2],b),l(A,x,b,M)}function l(M,A,x,b){const S=b+1,T=[];for(let v=0;v<=S;v++){T[v]=[];const R=M.clone().lerp(x,v/S),P=A.clone().lerp(x,v/S),U=S-v;for(let O=0;O<=U;O++)O===0&&v===S?T[v][O]=R:T[v][O]=R.clone().lerp(P,O/U)}for(let v=0;v<S;v++)for(let R=0;R<2*(S-v)-1;R++){const P=Math.floor(R/2);R%2===0?(h(T[v][P+1]),h(T[v+1][P]),h(T[v][P])):(h(T[v][P+1]),h(T[v+1][P+1]),h(T[v+1][P]))}}function c(M){const A=new X;for(let x=0;x<r.length;x+=3)A.x=r[x+0],A.y=r[x+1],A.z=r[x+2],A.normalize().multiplyScalar(M),r[x+0]=A.x,r[x+1]=A.y,r[x+2]=A.z}function u(){const M=new X;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];const x=f(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(x,1-b)}m(),g()}function g(){for(let M=0;M<o.length;M+=6){const A=o[M+0],x=o[M+2],b=o[M+4],S=Math.max(A,x,b),T=Math.min(A,x,b);S>.9&&T<.1&&(A<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,A){const x=M*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function m(){const M=new X,A=new X,x=new X,b=new X,S=new Ae,T=new Ae,v=new Ae;for(let R=0,P=0;R<r.length;R+=9,P+=6){M.set(r[R+0],r[R+1],r[R+2]),A.set(r[R+3],r[R+4],r[R+5]),x.set(r[R+6],r[R+7],r[R+8]),S.set(o[P+0],o[P+1]),T.set(o[P+2],o[P+3]),v.set(o[P+4],o[P+5]),b.copy(M).add(A).add(x).divideScalar(3);const U=f(b);_(S,P+0,M,U),_(T,P+2,A,U),_(v,P+4,x,U)}}function _(M,A,x,b){b<0&&M.x===1&&(o[A]=M.x-1),x.x===0&&x.z===0&&(o[A]=b/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.vertices,e.indices,e.radius,e.detail)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new X);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new X,s=[],r=[],o=[],a=new X,l=new St;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new X)}r[0]=new X,o[0]=new X;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),g=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),g<=c&&(c=g,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xl extends ri{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*g+this.aX,c=h*g+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Uf extends xl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,g){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+g)+(l-a)/g;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Xh=new X,Yh=new X,sc=new Tu,rc=new Tu,oc=new Tu;class Cu extends ri{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new X){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Yh.subVectors(s[0],s[1]).add(s[0]),c=Yh);const g=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(g),d),_=Math.pow(g.distanceToSquared(h),d),f=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),sc.initNonuniformCatmullRom(c.x,g.x,h.x,u.x,m,_,f),rc.initNonuniformCatmullRom(c.y,g.y,h.y,u.y,m,_,f),oc.initNonuniformCatmullRom(c.z,g.z,h.z,u.z,m,_,f)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,g.x,h.x,u.x,this.tension),rc.initCatmullRom(c.y,g.y,h.y,u.y,this.tension),oc.initCatmullRom(c.z,g.z,h.z,u.z,this.tension));return i.set(sc.calc(l),rc.calc(l),oc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new X().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $h(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function m0(n,e){const t=1-n;return t*t*e}function g0(n,e){return 2*(1-n)*n*e}function _0(n,e){return n*n*e}function Wr(n,e,t,i){return m0(n,e)+g0(n,t)+_0(n,i)}function v0(n,e){const t=1-n;return t*t*t*e}function x0(n,e){const t=1-n;return 3*t*t*n*e}function y0(n,e){return 3*(1-n)*n*n*e}function M0(n,e){return n*n*n*e}function qr(n,e,t,i,s){return v0(n,e)+x0(n,t)+y0(n,i)+M0(n,s)}class Ru extends ri{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,s.x,r.x,o.x,a.x),qr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends ri{constructor(e=new X,t=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qr(e,s.x,r.x,o.x,a.x),qr(e,s.y,r.y,o.y,a.y),qr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pu extends ri{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends ri{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lu extends ri{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends ri{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y),Wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set($h(a,l.x,c.x,u.x,g.x),$h(a,l.y,c.y,u.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:Uf,CatmullRomCurve3:Cu,CubicBezierCurve:Ru,CubicBezierCurve3:Of,EllipseCurve:xl,LineCurve:Pu,LineCurve3:Ff,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Iu,SplineCurve:Du});class zf extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class Nc extends zf{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Pu(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Lu(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Ru(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Du(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new xl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const g=c.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ao extends Nc{constructor(e){super(e),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Nc().fromJSON(s))}return this}}function S0(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=kf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=T0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,g=l;for(let h=t;h<s;h+=t){const d=n[h],m=n[h+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>g&&(g=m)}c=Math.max(u-a,g-l),c=c!==0?32767/c:0}return Qr(r,o,t,a,l,c,0),o}function kf(n,e,t,i,s){let r;if(s===z0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Jh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Jh(o/i|0,n[o],n[o+1],r);return r&&hr(r,r.next)&&(eo(r),r=r.next),r}function Cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(hr(t,t.next)||zt(t.prev,t,t.next)===0)){if(eo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Qr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&I0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?E0(n,i,s,r):b0(n)){e.push(l.i,n.i,c.i),eo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=w0(Cs(n),e),Qr(n,e,t,i,s,r,2)):o===2&&A0(n,e,t,i,s,r):Qr(Cs(n),e,t,i,s,r,1);break}}}function b0(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),g=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=g&&m.y<=d&&Ir(s,a,r,l,o,c,m.x,m.y)&&zt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function E0(n,e,t,i){const s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,g=r.y,h=o.y,d=Math.min(a,l,c),m=Math.min(u,g,h),_=Math.max(a,l,c),f=Math.max(u,g,h),p=Uc(d,m,e,t,i),M=Uc(_,f,e,t,i);let A=n.prevZ,x=n.nextZ;for(;A&&A.z>=p&&x&&x.z<=M;){if(A.x>=d&&A.x<=_&&A.y>=m&&A.y<=f&&A!==s&&A!==o&&Ir(a,u,l,g,c,h,A.x,A.y)&&zt(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=f&&x!==s&&x!==o&&Ir(a,u,l,g,c,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=_&&A.y>=m&&A.y<=f&&A!==s&&A!==o&&Ir(a,u,l,g,c,h,A.x,A.y)&&zt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=f&&x!==s&&x!==o&&Ir(a,u,l,g,c,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function w0(n,e){let t=n;do{const i=t.prev,s=t.next.next;!hr(i,s)&&Vf(i,t,t.next,s)&&jr(i,s)&&jr(s,i)&&(e.push(i.i,t.i,s.i),eo(t),eo(t.next),t=n=s),t=t.next}while(t!==n);return Cs(t)}function A0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U0(o,a)){let l=Gf(o,a);o=Cs(o,o.next),l=Cs(l,l.next),Qr(o,e,t,i,s,r,0),Qr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function T0(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=kf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(N0(c))}s.sort(C0);for(let r=0;r<s.length;r++)t=R0(s[r],t);return t}function C0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function R0(n,e){const t=P0(n,e);if(!t)return e;const i=Gf(t,n);return Cs(i,i.next),Cs(t,t.next)}function P0(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(hr(n,t))return t;do{if(hr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=i&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Bf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const g=Math.abs(s-t.y)/(i-t.x);jr(t,n)&&(g<u||g===u&&(t.x>o.x||t.x===o.x&&L0(o,t)))&&(o=t,u=g)}t=t.next}while(t!==a);return o}function L0(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function I0(n,e,t,i){let s=n;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,D0(s)}function D0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Uc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function N0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ir(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Bf(n,e,t,i,s,r,o,a)}function U0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!O0(n,e)&&(jr(n,e)&&jr(e,n)&&F0(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||hr(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function hr(n,e){return n.x===e.x&&n.y===e.y}function Vf(n,e,t,i){const s=Ho(zt(n,e,t)),r=Ho(zt(n,e,i)),o=Ho(zt(t,i,n)),a=Ho(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Go(n,t,e)||r===0&&Go(n,i,e)||o===0&&Go(t,n,i)||a===0&&Go(t,e,i))}function Go(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ho(n){return n>0?1:n<0?-1:0}function O0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function jr(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function F0(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Gf(n,e){const t=Oc(n.i,n.x,n.y),i=Oc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Jh(n,e,t,i){const s=Oc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class k0{static triangulate(e,t,i=2){return S0(e,t,i)}}class Es{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Es.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Zh(e),Kh(i,e);let o=e.length;t.forEach(Zh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Kh(i,t[l]);const a=k0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class mr extends Wt{constructor(e=new ao([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:B0;let A,x=!1,b,S,T,v;if(p){A=p.getSpacedPoints(u),x=!0,h=!1;const W=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,W),S=new X,T=new X,v=new X}h||(f=0,d=0,m=0,_=0);const R=a.extractPoints(c);let P=R.shape;const U=R.holes;if(!Es.isClockWise(P)){P=P.reverse();for(let W=0,ie=U.length;W<ie;W++){const k=U[W];Es.isClockWise(k)&&(U[W]=k.reverse())}}function H(W){const k=10000000000000001e-36;let j=W[0];for(let se=1;se<=W.length;se++){const Z=se%W.length,ce=W[Z],ye=ce.x-j.x,be=ce.y-j.y,Q=ye*ye+be*be,ze=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(j.x),Math.abs(j.y)),Te=k*ze*ze;if(Q<=Te){W.splice(Z,1),se--;continue}j=ce}}H(P),U.forEach(H);const B=U.length,I=P;for(let W=0;W<B;W++){const ie=U[W];P=P.concat(ie)}function z(W,ie,k){return ie||_t("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(ie,k)}const G=P.length;function Y(W,ie,k){let j,se,Z;const ce=W.x-ie.x,ye=W.y-ie.y,be=k.x-W.x,Q=k.y-W.y,ze=ce*ce+ye*ye,Te=ce*Q-ye*be;if(Math.abs(Te)>Number.EPSILON){const J=Math.sqrt(ze),E=Math.sqrt(be*be+Q*Q),le=ie.x-ye/J,he=ie.y+ce/J,pe=k.x-Q/E,Ee=k.y+be/E,Ce=((pe-le)*Q-(Ee-he)*be)/(ce*Q-ye*be);j=le+ce*Ce-W.x,se=he+ye*Ce-W.y;const _e=j*j+se*se;if(_e<=2)return new Ae(j,se);Z=Math.sqrt(_e/2)}else{let J=!1;ce>Number.EPSILON?be>Number.EPSILON&&(J=!0):ce<-Number.EPSILON?be<-Number.EPSILON&&(J=!0):Math.sign(ye)===Math.sign(Q)&&(J=!0),J?(j=-ye,se=ce,Z=Math.sqrt(ze)):(j=ce,se=ye,Z=Math.sqrt(ze/2))}return new Ae(j/Z,se/Z)}const $=[];for(let W=0,ie=I.length,k=ie-1,j=W+1;W<ie;W++,k++,j++)k===ie&&(k=0),j===ie&&(j=0),$[W]=Y(I[W],I[k],I[j]);const q=[];let ne,ee=$.concat();for(let W=0,ie=B;W<ie;W++){const k=U[W];ne=[];for(let j=0,se=k.length,Z=se-1,ce=j+1;j<se;j++,Z++,ce++)Z===se&&(Z=0),ce===se&&(ce=0),ne[j]=Y(k[j],k[Z],k[ce]);q.push(ne),ee=ee.concat(ne)}let ue;if(f===0)ue=Es.triangulateShape(I,U);else{const W=[],ie=[];for(let k=0;k<f;k++){const j=k/f,se=d*Math.cos(j*Math.PI/2),Z=m*Math.sin(j*Math.PI/2)+_;for(let ce=0,ye=I.length;ce<ye;ce++){const be=z(I[ce],$[ce],Z);K(be.x,be.y,-se),j===0&&W.push(be)}for(let ce=0,ye=B;ce<ye;ce++){const be=U[ce];ne=q[ce];const Q=[];for(let ze=0,Te=be.length;ze<Te;ze++){const J=z(be[ze],ne[ze],Z);K(J.x,J.y,-se),j===0&&Q.push(J)}j===0&&ie.push(Q)}}ue=Es.triangulateShape(W,ie)}const te=ue.length,ae=m+_;for(let W=0;W<G;W++){const ie=h?z(P[W],ee[W],ae):P[W];x?(T.copy(b.normals[0]).multiplyScalar(ie.x),S.copy(b.binormals[0]).multiplyScalar(ie.y),v.copy(A[0]).add(T).add(S),K(v.x,v.y,v.z)):K(ie.x,ie.y,0)}for(let W=1;W<=u;W++)for(let ie=0;ie<G;ie++){const k=h?z(P[ie],ee[ie],ae):P[ie];x?(T.copy(b.normals[W]).multiplyScalar(k.x),S.copy(b.binormals[W]).multiplyScalar(k.y),v.copy(A[W]).add(T).add(S),K(v.x,v.y,v.z)):K(k.x,k.y,g/u*W)}for(let W=f-1;W>=0;W--){const ie=W/f,k=d*Math.cos(ie*Math.PI/2),j=m*Math.sin(ie*Math.PI/2)+_;for(let se=0,Z=I.length;se<Z;se++){const ce=z(I[se],$[se],j);K(ce.x,ce.y,g+k)}for(let se=0,Z=U.length;se<Z;se++){const ce=U[se];ne=q[se];for(let ye=0,be=ce.length;ye<be;ye++){const Q=z(ce[ye],ne[ye],j);x?K(Q.x,Q.y+A[u-1].y,A[u-1].x+k):K(Q.x,Q.y,g+k)}}}D(),y();function D(){const W=s.length/3;if(h){let ie=0,k=G*ie;for(let j=0;j<te;j++){const se=ue[j];F(se[2]+k,se[1]+k,se[0]+k)}ie=u+f*2,k=G*ie;for(let j=0;j<te;j++){const se=ue[j];F(se[0]+k,se[1]+k,se[2]+k)}}else{for(let ie=0;ie<te;ie++){const k=ue[ie];F(k[2],k[1],k[0])}for(let ie=0;ie<te;ie++){const k=ue[ie];F(k[0]+G*u,k[1]+G*u,k[2]+G*u)}}i.addGroup(W,s.length/3-W,0)}function y(){const W=s.length/3;let ie=0;L(I,ie),ie+=I.length;for(let k=0,j=U.length;k<j;k++){const se=U[k];L(se,ie),ie+=se.length}i.addGroup(W,s.length/3-W,1)}function L(W,ie){let k=W.length;for(;--k>=0;){const j=k;let se=k-1;se<0&&(se=W.length-1);for(let Z=0,ce=u+f*2;Z<ce;Z++){const ye=G*Z,be=G*(Z+1),Q=ie+j+ye,ze=ie+se+ye,Te=ie+se+be,J=ie+j+be;w(Q,ze,Te,J)}}}function K(W,ie,k){l.push(W),l.push(ie),l.push(k)}function F(W,ie,k){C(W),C(ie),C(k);const j=s.length/3,se=M.generateTopUV(i,s,j-3,j-2,j-1);V(se[0]),V(se[1]),V(se[2])}function w(W,ie,k,j){C(W),C(ie),C(j),C(ie),C(k),C(j);const se=s.length/3,Z=M.generateSideWallUV(i,s,se-6,se-3,se-2,se-1);V(Z[0]),V(Z[1]),V(Z[3]),V(Z[1]),V(Z[2]),V(Z[3])}function C(W){s.push(l[W*3+0]),s.push(l[W*3+1]),s.push(l[W*3+2])}function V(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return V0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Za[s.type]().fromJSON(s)),new mr(i,e.options)}}const B0={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],g=e[i*3+2],h=e[s*3],d=e[s*3+1],m=e[s*3+2],_=e[r*3],f=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-g),new Ae(h,1-m),new Ae(_,1-p)]:[new Ae(a,1-l),new Ae(u,1-g),new Ae(d,1-m),new Ae(f,1-p)]}};function V0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class lo extends vl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lo(e.radius,e.detail)}}class Ls extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,g=e/a,h=t/l,d=[],m=[],_=[],f=[];for(let p=0;p<u;p++){const M=p*h-o;for(let A=0;A<c;A++){const x=A*g-r;m.push(x,-M,0),_.push(0,0,1),f.push(A/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const A=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),S=M+1+c*p;d.push(A,x,S),d.push(x,b,S)}this.setIndex(d),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class yl extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],g=new X,h=new X,d=[],m=[],_=[],f=[];for(let p=0;p<=i;p++){const M=[],A=p/i,x=o+A*a,b=e*Math.cos(x),S=Math.sqrt(e*e-b*b);let T=0;p===0&&o===0?T=.5/t:p===i&&l===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){const R=v/t,P=s+R*r;g.x=-S*Math.cos(P),g.y=b,g.z=S*Math.sin(P),m.push(g.x,g.y,g.z),h.copy(g).normalize(),_.push(h.x,h.y,h.z),f.push(R+T,1-A),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const A=u[p][M+1],x=u[p][M],b=u[p+1][M],S=u[p+1][M+1];(p!==0||o>0)&&d.push(A,x,S),(p!==i-1||l<Math.PI)&&d.push(x,b,S)}this.setIndex(d),this.setAttribute("position",new bt(m,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ml extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],g=[],h=new X,d=new X,m=new X;for(let _=0;_<=i;_++){const f=o+_/i*a;for(let p=0;p<=s;p++){const M=p/s*r;d.x=(e+t*Math.cos(f))*Math.cos(M),d.y=(e+t*Math.cos(f))*Math.sin(M),d.z=t*Math.sin(f),c.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),g.push(p/s),g.push(_/i)}}for(let _=1;_<=i;_++)for(let f=1;f<=s;f++){const p=(s+1)*_+f-1,M=(s+1)*(_-1)+f-1,A=(s+1)*(_-1)+f,x=(s+1)*_+f;l.push(p,M,x),l.push(M,A,x)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Sl extends Wt{constructor(e=new Iu(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new X,l=new X,c=new Ae;let u=new X;const g=[],h=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function _(){for(let A=0;A<t;A++)f(A);f(r===!1?t:0),M(),p()}function f(A){u=e.getPointAt(A/t,u);const x=o.normals[A],b=o.binormals[A];for(let S=0;S<=s;S++){const T=S/s*Math.PI*2,v=Math.sin(T),R=-Math.cos(T);l.x=R*x.x+v*b.x,l.y=R*x.y+v*b.y,l.z=R*x.z+v*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,g.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=t;A++)for(let x=1;x<=s;x++){const b=(s+1)*(A-1)+(x-1),S=(s+1)*A+(x-1),T=(s+1)*A+x,v=(s+1)*(A-1)+x;m.push(b,S,v),m.push(S,T,v)}}function M(){for(let A=0;A<=t;A++)for(let x=0;x<=s;x++)c.x=A/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Sl(new Za[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function dr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Qh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Qh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=dr(n[t]);for(const s in i)e[s]=i[s]}return e}function Qh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function G0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Wf={clone:dr,merge:fn};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new dt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new st().fromArray(s.value);break;case"m4":this.uniforms[i].value=new St().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qf extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qs extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xf extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yf extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class q0 extends Su{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class bl extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $f extends bl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ac=new St,jh=new X,ed=new X;class Nu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ac,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wo=new X,qo=new zi,li=new X;class Uu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,qo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,qo,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wo,qo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,qo,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new X,td=new Ae,nd=new Ae;class An extends Uu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class X0 extends Nu{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class El extends bl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new X0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class co extends Uu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Y0 extends Nu{constructor(){super(new co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Y0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Xs=-90,Ys=1;class Jf extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(Xs,Ys,e,t);s.layers=this.layers,this.add(s);const r=new An(Xs,Ys,e,t);r.layers=this.layers,this.add(r);const o=new An(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const a=new An(Xs,Ys,e,t);a.layers=this.layers,this.add(a);const l=new An(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const c=new An(Xs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Zf extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const id=new St;class Kf{constructor(e,t,i=0,s=1/0){this.ray=new pr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,i=[]){return Fc(e,this,i,t),i.sort(sd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fc(e[s],this,i,t);return i.sort(sd),i}}function sd(n,e){return n.distance-e.distance}function Fc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],e,t,!0)}}class zc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rh=class rh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};rh.prototype.isMatrix2=!0;let kc=rh;class Qf extends Bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function rd(n,e,t,i){const s=$0(i);switch(t){case mu:return n*e;case al:return n*e/s.components*s.byteLength;case ll:return n*e/s.components*s.byteLength;case os:return n*e*2/s.components*s.byteLength;case cl:return n*e*2/s.components*s.byteLength;case gu:return n*e*3/s.components*s.byteLength;case zn:return n*e*4/s.components*s.byteLength;case ul:return n*e*4/s.components*s.byteLength;case zr:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Br:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:case xa:return Math.max(n,16)*Math.max(e,8)/4;case ga:case va:return Math.max(n,8)*Math.max(e,8)/2;case ya:case Ma:case ba:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Yr:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Va:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ha:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $r:case qa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(n){switch(n){case yn:case hu:return{byteLength:1,components:1};case ar:case du:case si:return{byteLength:2,components:1};case rl:case ol:return{byteLength:2,components:4};case ii:case sl:case Fn:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function J0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,g=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,c){const u=l.array,g=l.updateRanges;if(n.bindBuffer(c,a),g.length===0)n.bufferSubData(c,0,u);else{g.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<g.length;d++){const m=g[h],_=g[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,g[h]=_)}g.length=h+1;for(let d=0,m=g.length;d<m;d++){const _=g[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$g=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:Z0,alphahash_pars_fragment:K0,alphamap_fragment:Q0,alphamap_pars_fragment:j0,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:sg,batching_vertex:rg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:_g,color_vertex:vg,common:xg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:Sg,displacementmap_vertex:bg,emissivemap_fragment:Eg,emissivemap_pars_fragment:wg,colorspace_fragment:Ag,colorspace_pars_fragment:Tg,envmap_fragment:Cg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Gg,envmap_vertex:Ig,fog_vertex:Dg,fog_pars_vertex:Ng,fog_fragment:Ug,fog_pars_fragment:Og,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:zg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Bg,lights_pars_begin:Vg,lights_toon_fragment:Hg,lights_toon_pars_fragment:Wg,lights_phong_fragment:qg,lights_phong_pars_fragment:Xg,lights_physical_fragment:Yg,lights_physical_pars_fragment:$g,lights_fragment_begin:Jg,lights_fragment_maps:Zg,lights_fragment_end:Kg,lightprobes_pars_fragment:Qg,logdepthbuf_fragment:jg,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:l_,morphinstance_vertex:c_,morphcolor_vertex:u_,morphnormal_vertex:h_,morphtarget_pars_vertex:d_,morphtarget_vertex:f_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:g_,normal_pars_vertex:__,normal_vertex:v_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:b_,opaque_fragment:E_,packing:w_,premultiplied_alpha_fragment:A_,project_vertex:T_,dithering_fragment:C_,dithering_pars_fragment:R_,roughnessmap_fragment:P_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:D_,shadowmap_vertex:N_,shadowmask_pars_fragment:U_,skinbase_vertex:O_,skinning_pars_vertex:F_,skinning_vertex:z_,skinnormal_vertex:k_,specularmap_fragment:B_,specularmap_pars_fragment:V_,tonemapping_fragment:G_,tonemapping_pars_fragment:H_,transmission_fragment:W_,transmission_pars_fragment:q_,uv_pars_fragment:X_,uv_pars_vertex:Y_,uv_vertex:$_,worldpos_vertex:J_,background_vert:Z_,background_frag:K_,backgroundCube_vert:Q_,backgroundCube_frag:j_,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:h1,meshlambert_vert:d1,meshlambert_frag:f1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:x1,meshphysical_vert:y1,meshphysical_frag:M1,meshtoon_vert:S1,meshtoon_frag:b1,points_vert:E1,points_frag:w1,shadow_vert:A1,shadow_frag:T1,sprite_vert:C1,sprite_frag:R1},De={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Kn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new dt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Kn.physical={uniforms:fn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Xo={r:0,b:0,g:0},P1=new St,ep=new st;ep.set(-1,0,0,0,1,0,0,0,1);function L1(n,e,t,i,s,r){const o=new dt(0);let a=s===!0?0:1,l,c,u=null,g=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const x=M.backgroundBlurriness>0;A=e.get(A,x)}return A}function m(M){let A=!1;const x=d(M);x===null?f(o,a):x&&x.isColor&&(f(x,1),A=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,A){const x=d(A);x&&(x.isCubeTexture||x.mapping===so)?(c===void 0&&(c=new _n(new Vi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:dr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ep),c.material.toneMapped=gt.getTransfer(x.colorSpace)!==At,(u!==x||g!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,g=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _n(new Ls(2,2),new Gn({name:"BackgroundMaterial",uniforms:dr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=gt.getTransfer(x.colorSpace)!==At,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||g!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,g=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,A){M.getRGB(Xo,Hf(n)),t.buffers.color.setClear(Xo.r,Xo.g,Xo.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,f(o,a)},render:m,addToRenderList:_,dispose:p}}function I1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(U,O,H,B,I){let z=!1;const G=g(U,B,H,O);r!==G&&(r=G,c(r.object)),z=d(U,B,H,I),z&&m(U,B,H,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(U,O,H,B),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function g(U,O,H,B){const I=B.wireframe===!0;let z=i[O.id];z===void 0&&(z={},i[O.id]=z);const G=U.isInstancedMesh===!0?U.id:0;let Y=z[G];Y===void 0&&(Y={},z[G]=Y);let $=Y[H.id];$===void 0&&($={},Y[H.id]=$);let q=$[I];return q===void 0&&(q=h(l()),$[I]=q),q}function h(U){const O=[],H=[],B=[];for(let I=0;I<t;I++)O[I]=0,H[I]=0,B[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:B,object:U,attributes:{},index:null}}function d(U,O,H,B){const I=r.attributes,z=O.attributes;let G=0;const Y=H.getAttributes();for(const $ in Y)if(Y[$].location>=0){const ne=I[$];let ee=z[$];if(ee===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ne===void 0||ne.attribute!==ee||ee&&ne.data!==ee.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(U,O,H,B){const I={},z=O.attributes;let G=0;const Y=H.getAttributes();for(const $ in Y)if(Y[$].location>=0){let ne=z[$];ne===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor));const ee={};ee.attribute=ne,ne&&ne.data&&(ee.data=ne.data),I[$]=ee,G++}r.attributes=I,r.attributesNum=G,r.index=B}function _(){const U=r.newAttributes;for(let O=0,H=U.length;O<H;O++)U[O]=0}function f(U){p(U,0)}function p(U,O){const H=r.newAttributes,B=r.enabledAttributes,I=r.attributeDivisors;H[U]=1,B[U]===0&&(n.enableVertexAttribArray(U),B[U]=1),I[U]!==O&&(n.vertexAttribDivisor(U,O),I[U]=O)}function M(){const U=r.newAttributes,O=r.enabledAttributes;for(let H=0,B=O.length;H<B;H++)O[H]!==U[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function A(U,O,H,B,I,z,G){G===!0?n.vertexAttribIPointer(U,O,H,I,z):n.vertexAttribPointer(U,O,H,B,I,z)}function x(U,O,H,B){_();const I=B.attributes,z=H.getAttributes(),G=O.defaultAttributeValues;for(const Y in z){const $=z[Y];if($.location>=0){let q=I[Y];if(q===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){const ne=q.normalized,ee=q.itemSize,ue=e.get(q);if(ue===void 0)continue;const te=ue.buffer,ae=ue.type,D=ue.bytesPerElement,y=ae===n.INT||ae===n.UNSIGNED_INT||q.gpuType===sl;if(q.isInterleavedBufferAttribute){const L=q.data,K=L.stride,F=q.offset;if(L.isInstancedInterleavedBuffer){for(let w=0;w<$.locationSize;w++)p($.location+w,L.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let w=0;w<$.locationSize;w++)f($.location+w);n.bindBuffer(n.ARRAY_BUFFER,te);for(let w=0;w<$.locationSize;w++)A($.location+w,ee/$.locationSize,ae,ne,K*D,(F+ee/$.locationSize*w)*D,y)}else{if(q.isInstancedBufferAttribute){for(let L=0;L<$.locationSize;L++)p($.location+L,q.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let L=0;L<$.locationSize;L++)f($.location+L);n.bindBuffer(n.ARRAY_BUFFER,te);for(let L=0;L<$.locationSize;L++)A($.location+L,ee/$.locationSize,ae,ne,ee*D,ee/$.locationSize*L*D,y)}}else if(G!==void 0){const ne=G[Y];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv($.location,ne);break;case 3:n.vertexAttrib3fv($.location,ne);break;case 4:n.vertexAttrib4fv($.location,ne);break;default:n.vertexAttrib1fv($.location,ne)}}}}M()}function b(){R();for(const U in i){const O=i[U];for(const H in O){const B=O[H];for(const I in B){const z=B[I];for(const G in z)u(z[G].object),delete z[G];delete B[I]}}delete i[U]}}function S(U){if(i[U.id]===void 0)return;const O=i[U.id];for(const H in O){const B=O[H];for(const I in B){const z=B[I];for(const G in z)u(z[G].object),delete z[G];delete B[I]}}delete i[U.id]}function T(U){for(const O in i){const H=i[O];for(const B in H){const I=H[B];if(I[U.id]===void 0)continue;const z=I[U.id];for(const G in z)u(z[G].object),delete z[G];delete I[U.id]}}}function v(U){for(const O in i){const H=i[O],B=U.isInstancedMesh===!0?U.id:0,I=H[B];if(I!==void 0){for(const z in I){const G=I[z];for(const Y in G)u(G[Y].object),delete G[Y];delete I[z]}delete H[B],Object.keys(H).length===0&&delete i[O]}}}function R(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function D1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function N1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==zn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const v=T===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&T!==Fn&&!v&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const g=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:x,maxSamples:b,samples:S}}function U1(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new hi,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){const d=g.length!==0||h||i!==0||s;return s=h,i=g.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,h){t=u(g,h,0)},this.setState=function(g,h,d){const m=g.clippingPlanes,_=g.clipIntersection,f=g.clipShadows,p=n.get(g);if(!s||m===null||m.length===0||r&&!f)r?u(null):c();else{const M=r?0:i,A=M*4;let x=p.clippingState||null;l.value=x,x=u(m,h,A,d);for(let b=0;b!==A;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(g,h,d,m){const _=g!==null?g.length:0;let f=null;if(_!==0){if(f=l.value,m!==!0||f===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,x=d;A!==_;++A,x+=4)o.copy(g[A]).applyMatrix4(M,a),o.normal.toArray(f,x),f[x+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}const js=4,O1=6,F1=20,z1=256,Ar=new co,od=new dt;let lc=null,cc=0,uc=0,hc=!1;const k1=new X,gs=new X;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=k1}=r;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=hc,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:si,format:zn,colorSpace:Jr,depthBuffer:!1},s=ad(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B1(r)),this._blurMaterial=G1(r,e,t),this._ggxMaterial=V1(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Wt,e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,i,s,r){const l=new An(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,h=g.autoClear,d=g.toneMapping;g.getClearColor(od),g.toneMapping=ei,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Vi,new ro({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,f=_.material;let p=!1;const M=e.background;M?M.isColor&&(f.color.copy(M),e.background=null,p=!0):(f.color.copy(od),p=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const b=this._cubeSize;$s(s,x*b,A>2?b:0,b,b),g.setRenderTarget(s),p&&g.render(_,l),g.render(e,l)}g.toneMapping=d,g.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===rs||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),g=Math.sqrt(c*c-u*u),h=c*1.25,d=g*h,{_lodMax:m}=this,_=this._sizeLods[i],f=3*_*(i>m-js?i-m+js:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,$s(r,f,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,$s(e,f,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Ar)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],g=3*u*(s>this._lodMax-js?s-this._lodMax+js:0),h=4*(this._cubeSize-u);$s(t,g,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Ar)}}function B1(n){const e=[],t=[];let i=n;const s=n-js+1+O1;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],g=6,h=6,d=3,m=new Float32Array(d*h*g),_=new Float32Array(d*h*g);for(let p=0;p<g;p++){const M=p%3*2/3-1,A=p>2?0:-1,x=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];m.set(x,d*h*p);for(let b=0;b<h;b++){const S=u[b*2]*2-1,T=u[b*2+1]*2-1;p===0?gs.set(1,T,S):p===1?gs.set(-S,1,-T):p===2?gs.set(-S,T,1):p===3?gs.set(-1,T,-S):p===4?gs.set(-S,-1,T):gs.set(S,T,-1),gs.toArray(_,(p*h+b)*d)}}const f=new Wt;f.setAttribute("position",new Bn(m,d)),f.setAttribute("outputDirection",new Bn(_,d)),t.push(new _n(f,null)),i>js&&i--}return{lodMeshes:t,sizeLods:e}}function ad(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function V1(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function G1(n,e,t){return new Gn({name:"SphericalGaussianBlur",defines:{SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ld(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function cd(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fu extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Eu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vi(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:gi});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=tn),new Jf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function H1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zo||d===Ko)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new Fu(m.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,m=d===Zo||d===Ko,_=d===rs||d===Ts;if(m||_){let f=t.get(h);const p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Bc(n)),f=m?i.fromEquirectangular(h,f):i.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const M=h.image;return m&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Bc(n)),f=m?i.fromEquirectangular(h):i.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function a(h,d){return d===Zo?h.mapping=rs:d===Ko&&(h.mapping=Ts),h}function l(h){let d=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function W1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ws("WebGLRenderer: "+i+" extension not supported."),s}}}function q1(n,e,t,i){const s={},r=new WeakMap;function o(g){const h=g.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(g,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(g){const h=g.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(g){const h=[],d=g.index,m=g.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const M=d.array;_=d.version;for(let A=0,x=M.length;A<x;A+=3){const b=M[A+0],S=M[A+1],T=M[A+2];h.push(b,S,S,T,T,b)}}else{const M=m.array;_=m.version;for(let A=0,x=M.length/3-1;A<x;A+=3){const b=A+0,S=A+1,T=A+2;h.push(b,S,S,T,T,b)}}const f=new(m.count>=65535?yu:xu)(h,1);f.version=_;const p=r.get(g);p&&e.remove(p),r.set(g,f)}function u(g){const h=r.get(g);if(h){const d=g.index;d!==null&&h.version<d.version&&c(g)}else c(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:u}}function X1(n,e,t){let i;function s(g){i=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,h){n.drawElements(i,h,r,g*o),t.update(h,i,1)}function c(g,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,g*o,d),t.update(h,i,d))}function u(g,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,g,0,d);let _=0;for(let f=0;f<d;f++)_+=h[f];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $1(n,e,t){const i=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==g){let P=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var d=P;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),f===!0&&(x=3);let b=a.attributes.position.count*x,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*S*4*g),v=new vu(T,b,S,g);v.type=Fn,v.needsUpdate=!0;const R=x*4;for(let U=0;U<g;U++){const O=p[U],H=M[U],B=A[U],I=b*S*4*U;for(let z=0;z<O.count;z++){const G=z*R;m===!0&&(s.fromBufferAttribute(O,z),T[I+G+0]=s.x,T[I+G+1]=s.y,T[I+G+2]=s.z,T[I+G+3]=0),_===!0&&(s.fromBufferAttribute(H,z),T[I+G+4]=s.x,T[I+G+5]=s.y,T[I+G+6]=s.z,T[I+G+7]=0),f===!0&&(s.fromBufferAttribute(B,z),T[I+G+8]=s.x,T[I+G+9]=s.y,T[I+G+10]=s.z,T[I+G+11]=B.itemSize===4?s.w:1)}}h={count:g,texture:v,size:new Ae(b,S)},i.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let f=0;f<c.length;f++)m+=c[f];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function J1(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,g=c.geometry,h=e.get(c,g);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Z1={[su]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[ou]:"CINEON_TONE_MAPPING",[il]:"ACES_FILMIC_TONE_MAPPING",[lu]:"AGX_TONE_MAPPING",[cu]:"NEUTRAL_TONE_MAPPING",[au]:"CUSTOM_TONE_MAPPING"};function K1(n,e,t,i,s,r){const o=new kn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Wt;c.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bt([0,2,0,0,2,0],2));const u=new qf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new _n(c,u),h=new co(-1,1,1,-1,0,1);let d=null,m=null,_=!1,f,p=null,M=[],A=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let S=0;S<M.length;S++){const T=M[S];T.setSize&&T.setSize(x,b)}},this.setEffects=function(x){M=x,A=M.length>0&&M[0].isRenderPass===!0;const b=o.width,S=o.height;M.length>0&&a===null&&(a=new kn(b,S,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new kn(b,S,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const v=M[T];v.setSize&&v.setSize(b,S)}},this.begin=function(x,b){if(_||x.toneMapping===ei&&M.length===0)return!1;if(p=b,b!==null){const S=b.width,T=b.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return A===!1&&x.setRenderTarget(o),f=x.toneMapping,x.toneMapping=ei,!0},this.hasRenderPass=function(){return A},this.end=function(x,b){x.toneMapping=f,_=!0;let S=o,T=a;for(let v=0;v<M.length;v++){const R=M[v];R.enabled!==!1&&(R.render(x,T,S,b),R.needsSwap!==!1&&(S=T,T=T===a?l:a))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,u.defines={},gt.getTransfer(d)===At&&(u.defines.SRGB_TRANSFER="");const v=Z1[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(g,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const tp=new sn,Vc=new ur(1,1),np=new vu,ip=new Pf,sp=new Eu,ud=[],hd=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Al(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;pd.set(i),n.uniformMatrix2fv(this.addr,!1,pd),Kt(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Kt(t,i)}}function sv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,i))return;dd.set(i),n.uniformMatrix4fv(this.addr,!1,dd),Kt(t,i)}}function rv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vc.compareFunction=t.isReversedDepthBuffer()?dl:hl,r=Vc):r=tp,t.setTexture2D(e||r,s)}function pv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ip,s)}function mv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sp,s)}function gv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||np,s)}function _v(n){switch(n){case 5126:return Q1;case 35664:return j1;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return hv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function vv(n,e){n.uniform1fv(this.addr,e)}function xv(n,e){const t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function yv(n,e){const t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Mv(n,e){const t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function Sv(n,e){const t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bv(n,e){const t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ev(n,e){const t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wv(n,e){n.uniform1iv(this.addr,e)}function Av(n,e){n.uniform2iv(this.addr,e)}function Tv(n,e){n.uniform3iv(this.addr,e)}function Cv(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Pv(n,e){n.uniform2uiv(this.addr,e)}function Lv(n,e){n.uniform3uiv(this.addr,e)}function Iv(n,e){n.uniform4uiv(this.addr,e)}function Dv(n,e,t){const i=this.cache,s=e.length,r=Al(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Vc:o=tp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Nv(n,e,t){const i=this.cache,s=e.length,r=Al(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ip,r[o])}function Uv(n,e,t){const i=this.cache,s=e.length,r=Al(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sp,r[o])}function Ov(n,e,t){const i=this.cache,s=e.length,r=Al(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||np,r[o])}function Fv(n){switch(n){case 5126:return vv;case 35664:return xv;case 35665:return yv;case 35666:return Mv;case 35674:return Sv;case 35675:return bv;case 35676:return Ev;case 5124:case 35670:return wv;case 35667:case 35671:return Av;case 35668:case 35672:return Tv;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Lv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Ov}}class zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}}class Bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function md(n,e){n.seq.push(e),n.map[e.id]=e}function Vv(n,e,t){const i=n.name,s=i.length;for(dc.lastIndex=0;;){const r=dc.exec(i),o=dc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){md(t,c===void 0?new zv(a,n,e):new kv(a,n,e));break}else{let g=t.map[a];g===void 0&&(g=new Bv(a),md(t,g)),t=g}}}class ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Vv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function gd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gv=37297;let Hv=0;function Wv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const _d=new st;function qv(n){gt._getMatrix(_d,gt.workingColorSpace,n);const e=`mat3( ${_d.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Zr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Wv(n.getShaderSource(e),a)}else return r}function Xv(n,e){const t=qv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yv={[su]:"Linear",[ru]:"Reinhard",[ou]:"Cineon",[il]:"ACESFilmic",[lu]:"AgX",[cu]:"Neutral",[au]:"Custom"};function $v(n,e){const t=Yv[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new X;function Jv(){gt.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Kv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Dr(n){return n!==""}function xd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(n){return n.replace(jv,tx)}const ex=new Map;function tx(n,e){let t=lt[e];if(t===void 0){const i=ex.get(e);if(i!==void 0)t=lt[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gc(t)}const nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(n){return n.replace(nx,ix)}function ix(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sx={[tr]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function rx(n){return sx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ox={[rs]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function ax(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ox[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lx={[Ts]:"ENVMAP_MODE_REFRACTION"};function cx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ux={[iu]:"ENVMAP_BLENDING_MULTIPLY",[ff]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};function hx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ux[n.combine]||"ENVMAP_BLENDING_NONE"}function dx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rx(t),c=ax(t),u=cx(t),g=hx(t),h=dx(t),d=Zv(t),m=Kv(r),_=s.createProgram();let f,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Dr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(f=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?lt.tonemapping_pars_fragment:"",t.toneMapping!==ei?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Xv("linearToOutputTexel",t.outputColorSpace),Jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Gc(o),o=xd(o,t),o=yd(o,t),a=Gc(a),a=xd(a,t),a=yd(a,t),o=Md(o),a=Md(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+f+o,x=M+p+a,b=gd(s,s.VERTEX_SHADER,A),S=gd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(U){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(S)||"",I=O.trim(),z=H.trim(),G=B.trim();let Y=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,S);else{const q=vd(s,b,"vertex"),ne=vd(s,S,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+q+`
`+ne)}else I!==""?tt("WebGLProgram: Program Info Log:",I):(z===""||G==="")&&($=!1);$&&(U.diagnostics={runnable:Y,programLog:I,vertexShader:{log:z,prefix:f},fragmentShader:{log:G,prefix:p}})}s.deleteShader(b),s.deleteShader(S),v=new ta(s,_),R=Qv(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let R;this.getAttributes=function(){return R===void 0&&T(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,Gv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gx(e),t.set(e,i)),i}}class gx{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}}function _x(n){return n===os||n===Yr||n===$r}function vx(n,e,t,i,s,r){const o=new pl,a=new mx,l=new Set,c=[],u=new Map,g=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,R,P,U,O,H){const B=U.fog,I=O.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||z,G),$=Y&&Y.mapping===so?Y.image.height:null,q=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=ne!==void 0?ne.length:0;let ue=0;I.morphAttributes.position!==void 0&&(ue=1),I.morphAttributes.normal!==void 0&&(ue=2),I.morphAttributes.color!==void 0&&(ue=3);let te,ae,D,y;if(q){const It=Kn[q];te=It.vertexShader,ae=It.fragmentShader}else{te=v.vertexShader,ae=v.fragmentShader;const It=a.getVertexShaderStage(v),Et=a.getFragmentShaderStage(v);a.update(v,It,Et),D=It.id,y=Et.id}const L=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),F=O.isInstancedMesh===!0,w=O.isBatchedMesh===!0,C=!!v.map,V=!!v.matcap,W=!!Y,ie=!!v.aoMap,k=!!v.lightMap,j=!!v.bumpMap&&v.wireframe===!1,se=!!v.normalMap,Z=!!v.displacementMap,ce=!!v.emissiveMap,ye=!!v.metalnessMap,be=!!v.roughnessMap,Q=v.anisotropy>0,ze=v.clearcoat>0,Te=v.dispersion>0,J=v.retroreflectivity>0,E=v.iridescence>0,le=v.sheen>0,he=v.transmission>0,pe=Q&&!!v.anisotropyMap,Ee=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,_e=ze&&!!v.clearcoatRoughnessMap,xe=E&&!!v.iridescenceMap,Re=E&&!!v.iridescenceThicknessMap,$e=le&&!!v.sheenColorMap,Ne=le&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Je=!!v.specularColorMap,et=!!v.specularIntensityMap,ot=he&&!!v.transmissionMap,oe=he&&!!v.thicknessMap,Le=!!v.gradientMap,ve=!!v.alphaMap,Ie=v.alphaTest>0,Be=!!v.alphaHash,Me=!!v.extensions;let Ke=ei;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Xe={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:ae,defines:v.defines,customVertexShaderID:D,customFragmentShaderID:y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:w,batchingColor:w&&O._colorsTexture!==null,instancing:F,instancingColor:F&&O.instanceColor!==null,instancingMorph:F&&O.morphTexture!==null,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:C,matcap:V,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:$,aoMap:ie,lightMap:k,bumpMap:j,normalMap:se,displacementMap:Z,emissiveMap:ce,normalMapObjectSpace:se&&v.normalMapType===_f,normalMapTangentSpace:se&&v.normalMapType===Xa,packedNormalMap:se&&v.normalMapType===Xa&&_x(v.normalMap.format),metalnessMap:ye,roughnessMap:be,anisotropy:Q,anisotropyMap:pe,clearcoat:ze,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:_e,dispersion:Te,retroreflection:J,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:le,sheenColorMap:$e,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:Je,specularIntensityMap:et,transmission:he,transmissionMap:ot,thicknessMap:oe,gradientMap:Le,opaque:v.transparent===!1&&v.blending===nr&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Be,combine:v.combine,mapUv:C&&m(v.map.channel),aoMapUv:ie&&m(v.aoMap.channel),lightMapUv:k&&m(v.lightMap.channel),bumpMapUv:j&&m(v.bumpMap.channel),normalMapUv:se&&m(v.normalMap.channel),displacementMapUv:Z&&m(v.displacementMap.channel),emissiveMapUv:ce&&m(v.emissiveMap.channel),metalnessMapUv:ye&&m(v.metalnessMap.channel),roughnessMapUv:be&&m(v.roughnessMap.channel),anisotropyMapUv:pe&&m(v.anisotropyMap.channel),clearcoatMapUv:Ee&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&m(v.sheenRoughnessMap.channel),specularMapUv:Pe&&m(v.specularMap.channel),specularColorMapUv:Je&&m(v.specularColorMap.channel),specularIntensityMapUv:et&&m(v.specularIntensityMap.channel),transmissionMapUv:ot&&m(v.transmissionMap.channel),thicknessMapUv:oe&&m(v.thicknessMap.channel),alphaMapUv:ve&&m(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(se||Q),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(C||ve),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&se===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:K,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:C&&v.map.isVideoTexture===!0&&gt.getTransfer(v.map.colorSpace)===At,decodeVideoTextureEmissive:ce&&v.emissiveMap.isVideoTexture===!0&&gt.getTransfer(v.emissiveMap.colorSpace)===At,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||w)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function f(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)R.push(P),R.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(R,v),M(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function p(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function M(v,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){const R=d[v.type];let P;if(R){const U=Kn[R];P=Wf.clone(U.uniforms)}else P=v.uniforms;return P}function x(v,R){let P=u.get(R);return P!==void 0?++P.usedTimes:(P=new fx(n,R,v,s),c.push(P),u.set(R,P)),P}function b(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:A,acquireProgram:x,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:T}}function xx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ed(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,_,f,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:f,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=m,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=f,M.group=p),e++,M}function l(h,d,m,_,f,p,M){M.reversedDepth===!0&&(f=-f);const A=a(h,d,m,_,f,p);m.transmission>0?i.push(A):m.transparent===!0?s.push(A):t.push(A)}function c(h,d,m,_,f,p){const M=a(h,d,m,_,f,p);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,d){t.length>1&&t.sort(h||yx),i.length>1&&i.sort(d||bd),s.length>1&&s.sort(d||bd)}function g(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function Mx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ed,n.set(i,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new dt};break;case"SpotLight":t={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function bx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ex=0;function wx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ax(n){const e=new Sx,t=bx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new St,o=new St;function a(c){let u=0,g=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,m=0,_=0,f=0,p=0,M=0,A=0,x=0,b=0,S=0,T=0,v=0,R=0,P=0;c.sort(wx);for(let O=0,H=c.length;O<H;O++){const B=c[O],I=B.color,z=B.intensity,G=B.distance;let Y=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===os?Y=B.shadow.map.texture:Y=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=I.r*z,g+=I.g*z,h+=I.b*z;else if(B.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(B.sh.coefficients[$],z);P++}else if(B.isSunLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,ne=t.get(B);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[m]=ne,i.sunShadowMap[m]=Y;const ee=q.getViewportCount();for(let ue=0;ue<ee;ue++)i.sunShadowMatrix[_+ue]=q.getMatrix(ue),i.sunShadowCascade[_+ue]=q._cascadeData[ue];_+=ee,m++}i.sun[d]=$,d++}else if(B.isDirectionalLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,ne=t.get(B);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,i.directionalShadow[f]=ne,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=B.shadow.matrix,b++}i.directional[f]=$,f++}else if(B.isSpotLight){const $=e.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(I).multiplyScalar(z),$.distance=G,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,i.spot[M]=$;const q=B.shadow;if(B.map&&(i.spotLightMap[v]=B.map,v++,q.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[M]=q.matrix,B.castShadow){const ne=t.get(B);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,i.spotShadow[M]=ne,i.spotShadowMap[M]=Y,T++}M++}else if(B.isRectAreaLight){const $=e.get(B);$.color.copy(I).multiplyScalar(z),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),i.rectArea[A]=$,A++}else if(B.isPointLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),$.distance=B.distance,$.decay=B.decay,B.castShadow){const q=B.shadow,ne=t.get(B);ne.shadowIntensity=q.intensity,ne.shadowBias=q.bias,ne.shadowNormalBias=q.normalBias,ne.shadowRadius=q.radius,ne.shadowMapSize=q.mapSize,ne.shadowCameraNear=q.camera.near,ne.shadowCameraFar=q.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=B.shadow.matrix,S++}i.point[p]=$,p++}else if(B.isHemisphereLight){const $=e.get(B);$.skyColor.copy(B.color).multiplyScalar(z),$.groundColor.copy(B.groundColor).multiplyScalar(z),i.hemi[x]=$,x++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=h;const U=i.hash;(U.sunLength!==d||U.directionalLength!==f||U.pointLength!==p||U.spotLength!==M||U.rectAreaLength!==A||U.hemiLength!==x||U.numSunShadows!==m||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==T||U.numSpotMaps!==v||U.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=f,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+v-R,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,U.sunLength=d,U.directionalLength=f,U.pointLength=p,U.spotLength=M,U.rectAreaLength=A,U.hemiLength=x,U.numSunShadows=m,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=T,U.numSpotMaps=v,U.numLightProbes=P,i.version=Ex++)}function l(c,u){let g=0,h=0,d=0,m=0,_=0,f=0;const p=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const x=c[M];if(x.isSunLight){const b=i.sun[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),g++}else if(x.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(x.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),f++}}}return{setup:a,setupView:l,state:i}}function wd(n){const e=new Ax(n),t=[],i=[],s=[];function r(h){g.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Tx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new wd(n),e.set(s,[a])):r>=o.length?(a=new wd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Px=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Lx=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Ad=new St,Tr=new X,fc=new X;function Ix(n,e,t){let i=new gl;const s=new Ae,r=new Ae,o=new Ft,a=new Xf,l=new Yf,c={},u=t.maxTextureSize,g={[ss]:gn,[gn]:ss,[Nn]:Nn},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Cx,fragmentShader:Rx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Wt;m.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(m,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let p=this.type;this.render=function(S,T,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===Yd&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);const R=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=p!==this.type;H&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(I=>I.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,I=S.length;B<I;B++){const z=S[B],G=z.shadow;if(G===void 0){tt("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Y=G.getFrameExtents();s.multiply(Y),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,G.mapSize.y=r.y));const $=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=$,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ks){if(z.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new kn(s.x,s.y,{format:os,type:si,minFilter:tn,magFilter:tn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new ur(s.x,s.y,Fn),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else z.isPointLight?(G.map=new Fu(s.x),G.map.depthTexture=new Nf(s.x,ii)):(G.map=new kn(s.x,s.y),G.map.depthTexture=new ur(s.x,s.y,ii)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=xi,this.type===tr?(G.map.depthTexture.compareFunction=$?dl:hl,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();z.isPointLight!==!0&&G.updateMatrices(z,v);for(let ne=0;ne<q;ne++){const ee=G.getCamera(ne);if(z.isPointLight){const ue=G.camera,te=G.matrix,ae=z.distance||ue.far;ae!==ue.far&&(ue.far=ae,ue.updateProjectionMatrix()),Tr.setFromMatrixPosition(z.matrixWorld),ue.position.copy(Tr),fc.copy(ue.position),fc.add(Px[ne]),ue.up.copy(Lx[ne]),ue.lookAt(fc),ue.updateMatrixWorld(),te.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Ad.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ad,ue.coordinateSystem,ue.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(G.map),n.clear());const ue=G.getViewport(ne);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),O.viewport(o)}i=G.getFrustum(ne),x(T,v,ee,z,this.type)}G.isPointLightShadow!==!0&&this.type===Ks&&M(G,v),G.needsUpdate=!1}p=this.type,f.needsUpdate=!1,n.setRenderTarget(R,P,U)};function M(S,T){const v=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new kn(s.x,s.y,{format:os,type:si}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,v,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,v,d,_,null)}function A(S,T,v,R){let P=null;const U=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)P=U;else if(P=v.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=P.uuid,H=T.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let I=B[H];I===void 0&&(I=P.clone(),B[H]=I,T.addEventListener("dispose",b)),P=I}if(P.visible=T.visible,P.wireframe=T.wireframe,R===Ks?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:g[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=v}return P}function x(S,T,v,R,P){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Ks)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const H=e.update(S),B=S.material;if(Array.isArray(B)){const I=H.groups;for(let z=0,G=I.length;z<G;z++){const Y=I[z],$=B[Y.materialIndex];if($&&$.visible){const q=A(S,$,R,P);S.onBeforeShadow(n,S,T,v,H,q,Y),n.renderBufferDirect(v,null,H,q,S,Y),S.onAfterShadow(n,S,T,v,H,q,Y)}}}else if(B.visible){const I=A(S,B,R,P);S.onBeforeShadow(n,S,T,v,H,I,null),n.renderBufferDirect(v,null,H,I,S,null),S.onAfterShadow(n,S,T,v,H,I,null)}}const O=S.children;for(let H=0,B=O.length;H<B;H++)x(O[H],T,v,R,P)}function b(S){S.target.removeEventListener("dispose",b);for(const v in c){const R=c[v],P=S.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function Dx(n,e){function t(){let oe=!1;const Le=new Ft;let ve=null;const Ie=new Ft(0,0,0,0);return{setMask:function(Be){ve!==Be&&!oe&&(n.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){oe=Be},setClear:function(Be,Me,Ke,Xe,It){It===!0&&(Be*=Xe,Me*=Xe,Ke*=Xe),Le.set(Be,Me,Ke,Xe),Ie.equals(Le)===!1&&(n.clearColor(Be,Me,Ke,Xe),Ie.copy(Le))},reset:function(){oe=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let oe=!1,Le=!1,ve=null,Ie=null,Be=null;return{setReversed:function(Me){if(Le!==Me){const Ke=e.get("EXT_clip_control");Me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=Be;Be=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?L(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!oe&&(n.depthMask(Me),ve=Me)},setFunc:function(Me){if(Le&&(Me=Im[Me]),Ie!==Me){switch(Me){case la:n.depthFunc(n.NEVER);break;case ca:n.depthFunc(n.ALWAYS);break;case ua:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case ha:n.depthFunc(n.EQUAL);break;case da:n.depthFunc(n.GEQUAL);break;case fa:n.depthFunc(n.GREATER);break;case pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){oe=Me},setClear:function(Me){Be!==Me&&(Be=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){oe=!1,ve=null,Ie=null,Be=null,Le=!1}}}function s(){let oe=!1,Le=null,ve=null,Ie=null,Be=null,Me=null,Ke=null,Xe=null,It=null;return{setTest:function(Et){oe||(Et?L(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!oe&&(n.stencilMask(Et),Le=Et)},setFunc:function(Et,qn,oi){(ve!==Et||Ie!==qn||Be!==oi)&&(n.stencilFunc(Et,qn,oi),ve=Et,Ie=qn,Be=oi)},setOp:function(Et,qn,oi){(Me!==Et||Ke!==qn||Xe!==oi)&&(n.stencilOp(Et,qn,oi),Me=Et,Ke=qn,Xe=oi)},setLocked:function(Et){oe=Et},setClear:function(Et){It!==Et&&(n.clearStencil(Et),It=Et)},reset:function(){oe=!1,Le=null,ve=null,Ie=null,Be=null,Me=null,Ke=null,Xe=null,It=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},g={},h={},d=new WeakMap,m=[],_=null,f=!1,p=null,M=null,A=null,x=null,b=null,S=null,T=null,v=new dt(0,0,0),R=0,P=!1,U=null,O=null,H=null,B=null,I=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),G=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=Y>=2);let q=null,ne={};const ee=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),te=new Ft().fromArray(ee),ae=new Ft().fromArray(ue);function D(oe,Le,ve,Ie){const Be=new Uint8Array(4),Me=n.createTexture();n.bindTexture(oe,Me),n.texParameteri(oe,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(oe,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ve;Ke++)oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return Me}const y={};y[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),y[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),y[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),y[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(or),j(!1),se(wc),L(n.CULL_FACE),ie(gi);function L(oe){u[oe]!==!0&&(n.enable(oe),u[oe]=!0)}function K(oe){u[oe]!==!1&&(n.disable(oe),u[oe]=!1)}function F(oe,Le){return h[oe]!==Le?(n.bindFramebuffer(oe,Le),h[oe]=Le,oe===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),oe===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function w(oe,Le){let ve=m,Ie=!1;if(oe){ve=d.get(Le),ve===void 0&&(ve=[],d.set(Le,ve));const Be=oe.textures;if(ve.length!==Be.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ke=Be.length;Me<Ke;Me++)ve[Me]=n.COLOR_ATTACHMENT0+Me;ve.length=Be.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function C(oe){return _!==oe?(n.useProgram(oe),_=oe,!0):!1}const V={[xs]:n.FUNC_ADD,[Jd]:n.FUNC_SUBTRACT,[Zd]:n.FUNC_REVERSE_SUBTRACT};V[Kd]=n.MIN,V[Qd]=n.MAX;const W={[jd]:n.ZERO,[ef]:n.ONE,[tf]:n.SRC_COLOR,[tu]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[sf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[nu]:n.ONE_MINUS_SRC_ALPHA,[af]:n.ONE_MINUS_DST_COLOR,[rf]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[uf]:n.ONE_MINUS_CONSTANT_COLOR,[hf]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(oe,Le,ve,Ie,Be,Me,Ke,Xe,It,Et){if(oe===gi){f===!0&&(K(n.BLEND),f=!1);return}if(f===!1&&(L(n.BLEND),f=!0),oe!==$d){if(oe!==p||Et!==P){if((M!==xs||b!==xs)&&(n.blendEquation(n.FUNC_ADD),M=xs,b=xs),Et)switch(oe){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",oe);break}else switch(oe){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",oe);break}A=null,x=null,S=null,T=null,v.set(0,0,0),R=0,p=oe,P=Et}return}Be=Be||Le,Me=Me||ve,Ke=Ke||Ie,(Le!==M||Be!==b)&&(n.blendEquationSeparate(V[Le],V[Be]),M=Le,b=Be),(ve!==A||Ie!==x||Me!==S||Ke!==T)&&(n.blendFuncSeparate(W[ve],W[Ie],W[Me],W[Ke]),A=ve,x=Ie,S=Me,T=Ke),(Xe.equals(v)===!1||It!==R)&&(n.blendColor(Xe.r,Xe.g,Xe.b,It),v.copy(Xe),R=It),p=oe,P=!1}function k(oe,Le){oe.side===Nn?K(n.CULL_FACE):L(n.CULL_FACE);let ve=oe.side===gn;Le&&(ve=!ve),j(ve),oe.blending===nr&&oe.transparent===!1?ie(gi):ie(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.blendColor,oe.blendAlpha,oe.premultipliedAlpha),o.setFunc(oe.depthFunc),o.setTest(oe.depthTest),o.setMask(oe.depthWrite),r.setMask(oe.colorWrite);const Ie=oe.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(oe.stencilWriteMask),a.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),a.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),ce(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(oe){U!==oe&&(oe?n.frontFace(n.CW):n.frontFace(n.CCW),U=oe)}function se(oe){oe!==qd?(L(n.CULL_FACE),oe!==O&&(oe===wc?n.cullFace(n.BACK):oe===Xd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),O=oe}function Z(oe){oe!==H&&(G&&n.lineWidth(oe),H=oe)}function ce(oe,Le,ve){oe?(L(n.POLYGON_OFFSET_FILL),(B!==Le||I!==ve)&&(B=Le,I=ve,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ve))):K(n.POLYGON_OFFSET_FILL)}function ye(oe){oe?L(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function be(oe){oe===void 0&&(oe=n.TEXTURE0+z-1),q!==oe&&(n.activeTexture(oe),q=oe)}function Q(oe,Le,ve){ve===void 0&&(q===null?ve=n.TEXTURE0+z-1:ve=q);let Ie=ne[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},ne[ve]=Ie),(Ie.type!==oe||Ie.texture!==Le)&&(q!==ve&&(n.activeTexture(ve),q=ve),n.bindTexture(oe,Le||y[oe]),Ie.type=oe,Ie.texture=Le)}function ze(){const oe=ne[q];oe!==void 0&&oe.type!==void 0&&(n.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function J(){try{n.compressedTexImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function E(){try{n.texSubImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function le(){try{n.texSubImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function he(){try{n.compressedTexSubImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ee(){try{n.texStorage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ce(){try{n.texStorage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function _e(){try{n.texImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function xe(){try{n.texImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Re(oe){return g[oe]!==void 0?g[oe]:n.getParameter(oe)}function $e(oe,Le){g[oe]!==Le&&(n.pixelStorei(oe,Le),g[oe]=Le)}function Ne(oe){te.equals(oe)===!1&&(n.scissor(oe.x,oe.y,oe.z,oe.w),te.copy(oe))}function Pe(oe){ae.equals(oe)===!1&&(n.viewport(oe.x,oe.y,oe.z,oe.w),ae.copy(oe))}function Je(oe,Le){let ve=c.get(Le);ve===void 0&&(ve=new WeakMap,c.set(Le,ve));let Ie=ve.get(oe);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,oe.name),ve.set(oe,Ie))}function et(oe,Le){const Ie=c.get(Le).get(oe);l.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,oe.__bindingPointIndex),l.set(Le,Ie))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},g={},q=null,ne={},h={},d=new WeakMap,m=[],_=null,f=!1,p=null,M=null,A=null,x=null,b=null,S=null,T=null,v=new dt(0,0,0),R=0,P=!1,U=null,O=null,H=null,B=null,I=null,te.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:K,bindFramebuffer:F,drawBuffers:w,useProgram:C,setBlending:ie,setMaterial:k,setFlipSided:j,setCullFace:se,setLineWidth:Z,setPolygonOffset:ce,setScissorTest:ye,activeTexture:be,bindTexture:Q,unbindTexture:ze,compressedTexImage2D:Te,compressedTexImage3D:J,texImage2D:_e,texImage3D:xe,pixelStorei:$e,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:E,texSubImage3D:le,compressedTexSubImage2D:he,compressedTexSubImage3D:pe,scissor:Ne,viewport:Pe,reset:ot}}function Nx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,g=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(J,E){return m?new OffscreenCanvas(J,E):Ya("canvas")}function f(J,E,le){let he=1;const pe=Te(J);if((pe.width>le||pe.height>le)&&(he=le/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap||typeof VideoFrame<"u"&&J instanceof VideoFrame){const Ee=Math.floor(he*pe.width),Ce=Math.floor(he*pe.height);h===void 0&&(h=_(Ee,Ce));const _e=E?_(Ee,Ce):h;return _e.width=Ee,_e.height=Ce,_e.getContext("2d").drawImage(J,0,0,Ee,Ce),tt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ee+"x"+Ce+")."),_e}else return"data"in J&&tt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),J;return J}function p(J){return J.generateMipmaps}function M(J){n.generateMipmap(J)}function A(J){return J.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:J.isWebGL3DRenderTarget?n.TEXTURE_3D:J.isWebGLArrayRenderTarget||J.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(J,E,le,he,pe,Ee=!1){if(J!==null){if(n[J]!==void 0)return n[J];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let Ce;he&&(Ce=e.get("EXT_texture_norm16"),Ce||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=E;if(E===n.RED&&(le===n.FLOAT&&(_e=n.R32F),le===n.HALF_FLOAT&&(_e=n.R16F),le===n.UNSIGNED_BYTE&&(_e=n.R8),le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.R16_EXT),le===n.SHORT&&Ce&&(_e=Ce.R16_SNORM_EXT)),E===n.RED_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.R8UI),le===n.UNSIGNED_SHORT&&(_e=n.R16UI),le===n.UNSIGNED_INT&&(_e=n.R32UI),le===n.BYTE&&(_e=n.R8I),le===n.SHORT&&(_e=n.R16I),le===n.INT&&(_e=n.R32I)),E===n.RG&&(le===n.FLOAT&&(_e=n.RG32F),le===n.HALF_FLOAT&&(_e=n.RG16F),le===n.UNSIGNED_BYTE&&(_e=n.RG8),le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RG16_EXT),le===n.SHORT&&Ce&&(_e=Ce.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.RG8UI),le===n.UNSIGNED_SHORT&&(_e=n.RG16UI),le===n.UNSIGNED_INT&&(_e=n.RG32UI),le===n.BYTE&&(_e=n.RG8I),le===n.SHORT&&(_e=n.RG16I),le===n.INT&&(_e=n.RG32I)),E===n.RGB_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),le===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),le===n.UNSIGNED_INT&&(_e=n.RGB32UI),le===n.BYTE&&(_e=n.RGB8I),le===n.SHORT&&(_e=n.RGB16I),le===n.INT&&(_e=n.RGB32I)),E===n.RGBA_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),le===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),le===n.UNSIGNED_INT&&(_e=n.RGBA32UI),le===n.BYTE&&(_e=n.RGBA8I),le===n.SHORT&&(_e=n.RGBA16I),le===n.INT&&(_e=n.RGBA32I)),E===n.RGB&&(le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGB16_EXT),le===n.SHORT&&Ce&&(_e=Ce.RGB16_SNORM_EXT),le===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),le===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),E===n.RGBA){const xe=Ee?Zr:gt.getTransfer(pe);le===n.FLOAT&&(_e=n.RGBA32F),le===n.HALF_FLOAT&&(_e=n.RGBA16F),le===n.UNSIGNED_BYTE&&(_e=xe===At?n.SRGB8_ALPHA8:n.RGBA8),le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGBA16_EXT),le===n.SHORT&&Ce&&(_e=Ce.RGBA16_SNORM_EXT),le===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),le===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function b(J,E){let le;return J?E===null||E===ii||E===lr?le=n.DEPTH24_STENCIL8:E===Fn?le=n.DEPTH32F_STENCIL8:E===ar&&(le=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===lr?le=n.DEPTH_COMPONENT24:E===Fn?le=n.DEPTH_COMPONENT32F:E===ar&&(le=n.DEPTH_COMPONENT16),le}function S(J,E){return p(J)===!0||J.isFramebufferTexture&&J.minFilter!==jt&&J.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?E.mipmaps.length:1}function T(J){const E=J.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&g.delete(E)}function v(J){const E=J.target;E.removeEventListener("dispose",v),U(E)}function R(J){const E=i.get(J);if(E.__webglInit===void 0)return;const le=J.source,he=d.get(le);if(he){const pe=he[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&P(J),Object.keys(he).length===0&&d.delete(le)}i.remove(J)}function P(J){const E=i.get(J);n.deleteTexture(E.__webglTexture);const le=J.source,he=d.get(le);delete he[E.__cacheKey],o.memory.textures--}function U(J){const E=i.get(J);if(J.depthTexture&&(J.depthTexture.dispose(),i.remove(J.depthTexture)),J.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let pe=0;pe<E.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)n.deleteFramebuffer(E.__webglFramebuffer[he]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const le=J.textures;for(let he=0,pe=le.length;he<pe;he++){const Ee=i.get(le[he]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(le[he])}i.remove(J)}let O=0;function H(){O=0}function B(){return O}function I(J){O=J}function z(){const J=O;return J>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(J+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,J}function G(J){const E=[];return E.push(J.wrapS),E.push(J.wrapT),E.push(J.wrapR||0),E.push(J.magFilter),E.push(J.minFilter),E.push(J.anisotropy),E.push(J.internalFormat),E.push(J.format),E.push(J.type),E.push(J.generateMipmaps),E.push(J.premultiplyAlpha),E.push(J.flipY),E.push(J.unpackAlignment),E.push(J.colorSpace),E.join()}function Y(J,E){const le=i.get(J);if(J.isVideoTexture&&Q(J),J.isRenderTargetTexture===!1&&J.isExternalTexture!==!0&&J.version>0&&le.__version!==J.version){const he=J.image;if(he===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(le,J,E);return}}else J.isExternalTexture&&(le.__webglTexture=J.sourceTexture?J.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,le.__webglTexture,n.TEXTURE0+E)}function $(J,E){const le=i.get(J);if(J.isRenderTargetTexture===!1&&J.version>0&&le.__version!==J.version){K(le,J,E);return}else J.isExternalTexture&&(le.__webglTexture=J.sourceTexture?J.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,le.__webglTexture,n.TEXTURE0+E)}function q(J,E){const le=i.get(J);if(J.isRenderTargetTexture===!1&&J.version>0&&le.__version!==J.version){K(le,J,E);return}t.bindTexture(n.TEXTURE_3D,le.__webglTexture,n.TEXTURE0+E)}function ne(J,E){const le=i.get(J);if(J.isCubeDepthTexture!==!0&&J.version>0&&le.__version!==J.version){F(le,J,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture,n.TEXTURE0+E)}const ee={[Xr]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},ue={[jt]:n.NEAREST,[mf]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Qo]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},te={[xf]:n.NEVER,[Ef]:n.ALWAYS,[yf]:n.LESS,[hl]:n.LEQUAL,[Mf]:n.EQUAL,[dl]:n.GEQUAL,[Sf]:n.GREATER,[bf]:n.NOTEQUAL};function ae(J,E){if(E.type===Fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Qo||E.magFilter===Lr||E.magFilter===Ki||E.minFilter===tn||E.minFilter===Qo||E.minFilter===Lr||E.minFilter===Ki)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(J,n.TEXTURE_WRAP_S,ee[E.wrapS]),n.texParameteri(J,n.TEXTURE_WRAP_T,ee[E.wrapT]),(J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY)&&n.texParameteri(J,n.TEXTURE_WRAP_R,ee[E.wrapR]),n.texParameteri(J,n.TEXTURE_MAG_FILTER,ue[E.magFilter]),n.texParameteri(J,n.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(n.texParameteri(J,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(J,n.TEXTURE_COMPARE_FUNC,te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==Lr&&E.minFilter!==Ki||E.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const le=e.get("EXT_texture_filter_anisotropic");n.texParameterf(J,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function D(J,E){let le=!1;J.__webglInit===void 0&&(J.__webglInit=!0,E.addEventListener("dispose",T));const he=E.source;let pe=d.get(he);pe===void 0&&(pe={},d.set(he,pe));const Ee=G(E);if(Ee!==J.__cacheKey){pe[Ee]===void 0&&(pe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,le=!0),pe[Ee].usedTimes++;const Ce=pe[J.__cacheKey];Ce!==void 0&&(pe[J.__cacheKey].usedTimes--,Ce.usedTimes===0&&P(E)),J.__cacheKey=Ee,J.__webglTexture=pe[Ee].texture}return le}function y(J,E,le){return Math.floor(Math.floor(J/le)/E)}function L(J,E,le,he){const Ee=J.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,le,he,E.data);else{Ee.sort(($e,Ne)=>$e.start-Ne.start);let Ce=0;for(let $e=1;$e<Ee.length;$e++){const Ne=Ee[Ce],Pe=Ee[$e],Je=Ne.start+Ne.count,et=y(Pe.start,E.width,4),ot=y(Ne.start,E.width,4);Pe.start<=Je+1&&et===ot&&y(Pe.start+Pe.count-1,E.width,4)===et?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,Ee[Ce]=Pe)}Ee.length=Ce+1;const _e=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let $e=0,Ne=Ee.length;$e<Ne;$e++){const Pe=Ee[$e],Je=Math.floor(Pe.start/4),et=Math.ceil(Pe.count/4),ot=Je%E.width,oe=Math.floor(Je/E.width),Le=et,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe),t.texSubImage2D(n.TEXTURE_2D,0,ot,oe,Le,ve,le,he,E.data)}J.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function K(J,E,le){let he=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=n.TEXTURE_3D);const pe=D(J,E),Ee=E.source;t.bindTexture(he,J.__webglTexture,n.TEXTURE0+le);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+le),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=gt.getPrimaries(gt.workingColorSpace),Ie=E.colorSpace===Ai?null:gt.getPrimaries(E.colorSpace),Be=E.colorSpace===Ai||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=f(E.image,!1,s.maxTextureSize);xe=ze(E,xe);const Re=r.convert(E.format,E.colorSpace),$e=r.convert(E.type);let Ne=x(E.internalFormat,Re,$e,E.normalized,E.colorSpace,E.isVideoTexture);ae(he,E);let Pe;const Je=E.mipmaps,et=E.isVideoTexture!==!0,ot=Ce.__version===void 0||pe===!0,oe=Ee.dataReady,Le=S(E,xe);if(E.isDepthTexture)Ne=b(E.format===Qi,E.type),ot&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,$e,null));else if(E.isDataTexture)if(Je.length>0){et&&ot&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],et?oe&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,$e,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,$e,Pe.data);E.generateMipmaps=!1}else et?(ot&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height),oe&&L(E,xe,Re,$e)):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,$e,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,Je[0].width,Je[0].height,xe.depth);for(let ve=0,Ie=Je.length;ve<Ie;ve++)if(Pe=Je[ve],E.format!==zn)if(Re!==null)if(et){if(oe)if(E.layerUpdates.size>0){const Be=rd(Pe.width,Pe.height,E.format,E.type);for(const Me of E.layerUpdates){const Ke=Pe.data.subarray(Me*Be/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Me,Pe.width,Pe.height,1,Re,Ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,$e,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Re,$e,Pe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{et&&ot&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],E.format!==zn?Re!==null?et?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Pe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?oe&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,$e,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,$e,Pe.data)}else if(E.isDataArrayTexture)if(et){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,xe.width,xe.height,xe.depth),oe)if(E.layerUpdates.size>0){const ve=rd(xe.width,xe.height,E.format,E.type);for(const Ie of E.layerUpdates){const Be=xe.data.subarray(Ie*ve/xe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,$e,Be)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,$e,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,$e,xe.data);else if(E.isData3DTexture)et?(ot&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,xe.width,xe.height,xe.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,$e,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,$e,xe.data);else if(E.isFramebufferTexture){if(ot)if(et)t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height);else{let ve=xe.width,Ie=xe.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ne,ve,Ie,0,Re,$e,null),ve>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),g.add(E),ve.onpaint=Ie=>{const Be=Ie.changedElements;for(const Me of g)Be.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const Be=n.RGBA,Me=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,Me,Ke,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&ot){const ve=Te(Je[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],et?oe&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,$e,Pe):t.texImage2D(n.TEXTURE_2D,ve,Ne,Re,$e,Pe);E.generateMipmaps=!1}else if(et){if(ot){const ve=Te(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,$e,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,$e,xe);p(E)&&M(he),Ce.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}J.__version=E.version}function F(J,E,le){if(E.image.length!==6)return;const he=D(J,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+le);const Ee=i.get(pe);if(pe.version!==Ee.__version||he===!0){t.activeTexture(n.TEXTURE0+le);const Ce=gt.getPrimaries(gt.workingColorSpace),_e=E.colorSpace===Ai?null:gt.getPrimaries(E.colorSpace),xe=E.colorSpace===Ai||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,$e=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!$e?Ne[Me]=f(E.image[Me],!0,s.maxCubemapSize):Ne[Me]=$e?E.image[Me].image:E.image[Me],Ne[Me]=ze(E,Ne[Me]);const Pe=Ne[0],Je=r.convert(E.format,E.colorSpace),et=r.convert(E.type),ot=x(E.internalFormat,Je,et,E.normalized,E.colorSpace),oe=E.isVideoTexture!==!0,Le=Ee.__version===void 0||he===!0,ve=pe.dataReady;let Ie=S(E,Pe);ae(n.TEXTURE_CUBE_MAP,E);let Be;if(Re){oe&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ot,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){Be=Ne[Me].mipmaps;for(let Ke=0;Ke<Be.length;Ke++){const Xe=Be[Ke];E.format!==zn?Je!==null?oe?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,0,0,Xe.width,Xe.height,Je,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,ot,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,0,0,Xe.width,Xe.height,Je,et,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,ot,Xe.width,Xe.height,0,Je,et,Xe.data)}}}else{if(Be=E.mipmaps,oe&&Le){Be.length>0&&Ie++;const Me=Te(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ot,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if($e){oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,Je,et,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,Ne[Me].width,Ne[Me].height,0,Je,et,Ne[Me].data);for(let Ke=0;Ke<Be.length;Ke++){const It=Be[Ke].image[Me].image;oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,0,0,It.width,It.height,Je,et,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,ot,It.width,It.height,0,Je,et,It.data)}}else{oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,et,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,Je,et,Ne[Me]);for(let Ke=0;Ke<Be.length;Ke++){const Xe=Be[Ke];oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,0,0,Je,et,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,ot,Je,et,Xe.image[Me])}}}p(E)&&M(n.TEXTURE_CUBE_MAP),Ee.__version=pe.version,E.onUpdate&&E.onUpdate(E)}J.__version=E.version}function w(J,E,le,he,pe,Ee){const Ce=r.convert(le.format,le.colorSpace),_e=r.convert(le.type),xe=x(le.internalFormat,Ce,_e,le.normalized,le.colorSpace),Re=i.get(E),$e=i.get(le);if($e.__renderTarget=E,!Re.__hasExternalTextures){const Ne=Math.max(1,E.width>>Ee),Pe=Math.max(1,E.height>>Ee);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ee,xe,Ne,Pe,E.depth,0,Ce,_e,null):t.texImage2D(pe,Ee,xe,Ne,Pe,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,J),be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,pe,$e.__webglTexture,0,ye(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,pe,$e.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(J,E,le){if(n.bindRenderbuffer(n.RENDERBUFFER,J),E.depthBuffer){const he=E.depthTexture,pe=he&&he.isDepthTexture?he.type:null,Ee=b(E.stencilBuffer,pe),Ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(E),Ee,E.width,E.height):le?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(E),Ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,J)}else{const he=E.textures;for(let pe=0;pe<he.length;pe++){const Ee=he[pe],Ce=r.convert(Ee.format,Ee.colorSpace),_e=r.convert(Ee.type),xe=x(Ee.internalFormat,Ce,_e,Ee.normalized,Ee.colorSpace);be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(E),xe,E.width,E.height):le?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(E),xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(J,E,le){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,J),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=i.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ae(n.TEXTURE_CUBE_MAP,E.depthTexture);const Re=r.convert(E.depthTexture.format),$e=r.convert(E.depthTexture.type);let Ne;E.depthTexture.format===xi?Ne=n.DEPTH_COMPONENT24:E.depthTexture.format===Qi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,E.width,E.height,0,Re,$e,null)}}else Y(E.depthTexture,0);const Ee=pe.__webglTexture,Ce=ye(E),_e=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+le:n.TEXTURE_2D,xe=E.depthTexture.format===Qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===xi)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else if(E.depthTexture.format===Qi)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W(J){const E=i.get(J),le=J.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==J.depthTexture){const he=J.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=he}if(J.depthTexture&&!E.__autoAllocateDepthBuffer)if(le)for(let he=0;he<6;he++)V(E.__webglFramebuffer[he],J,he);else{const he=J.texture.mipmaps;he&&he.length>0?V(E.__webglFramebuffer[0],J,0):V(E.__webglFramebuffer,J,0)}else if(le){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=n.createRenderbuffer(),C(E.__webglDepthbuffer[he],J,!1);else{const pe=J.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}else{const he=J.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),C(E.__webglDepthbuffer,J,!1);else{const pe=J.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(J,E,le){const he=i.get(J);E!==void 0&&w(he.__webglFramebuffer,J,J.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),le!==void 0&&W(J)}function k(J){const E=J.texture,le=i.get(J),he=i.get(E);J.addEventListener("dispose",v);const pe=J.textures,Ee=J.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=E.version,o.memory.textures++),Ee){le.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){le.__webglFramebuffer[_e]=[];for(let xe=0;xe<E.mipmaps.length;xe++)le.__webglFramebuffer[_e][xe]=n.createFramebuffer()}else le.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){le.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)le.__webglFramebuffer[_e]=n.createFramebuffer()}else le.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=i.get(pe[_e]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(J.samples>0&&be(J)===!1){le.__webglMultisampledFramebuffer=n.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const xe=pe[_e];le.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const Re=r.convert(xe.format,xe.colorSpace),$e=r.convert(xe.type),Ne=x(xe.internalFormat,Re,$e,xe.normalized,xe.colorSpace,J.isXRRenderTarget===!0),Pe=ye(J);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,J.width,J.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,le.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),J.depthBuffer&&(le.__webglDepthRenderbuffer=n.createRenderbuffer(),C(le.__webglDepthRenderbuffer,J,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),ae(n.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)w(le.__webglFramebuffer[_e][xe],J,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else w(le.__webglFramebuffer[_e],J,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(E)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=pe[_e],$e=i.get(Re);let Ne=n.TEXTURE_2D;(J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(Ne=J.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,$e.__webglTexture),ae(Ne,Re),w(le.__webglFramebuffer,J,Re,n.COLOR_ATTACHMENT0+_e,Ne,0),p(Re)&&M(Ne)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(_e=J.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,he.__webglTexture),ae(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)w(le.__webglFramebuffer[xe],J,E,n.COLOR_ATTACHMENT0,_e,xe);else w(le.__webglFramebuffer,J,E,n.COLOR_ATTACHMENT0,_e,0);p(E)&&M(_e),t.unbindTexture()}J.depthBuffer&&W(J)}function j(J){const E=J.textures;for(let le=0,he=E.length;le<he;le++){const pe=E[le];if(p(pe)){const Ee=A(J),Ce=i.get(pe).__webglTexture;t.bindTexture(Ee,Ce),M(Ee),t.unbindTexture()}}}const se=[],Z=[];function ce(J){if(J.samples>0){if(be(J)===!1){const E=J.textures,le=J.width,he=J.height;let pe=n.COLOR_BUFFER_BIT;const Ee=J.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(J),_e=E.length>1;if(_e)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=J.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(J.resolveDepthBuffer&&(J.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),J.stencilBuffer&&J.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const $e=i.get(E[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,le,he,0,0,le,he,pe,n.NEAREST),l===!0&&(se.length=0,Z.length=0,se.push(n.COLOR_ATTACHMENT0+Re),J.depthBuffer&&J.storeMultisampledDepthBuffer===!1&&(se.push(Ee),Z.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const $e=i.get(E[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(J.depthBuffer&&J.storeMultisampledDepthBuffer===!1&&l){const E=J.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ye(J){return Math.min(s.maxSamples,J.samples)}function be(J){const E=i.get(J);return J.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(J){const E=o.render.frame;u.get(J)!==E&&(u.set(J,E),J.update())}function ze(J,E){const le=J.colorSpace,he=J.format,pe=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||le!==Jr&&le!==Ai&&(gt.getTransfer(le)===At?(he!==zn||pe!==yn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",le)),E}function Te(J){return typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement?(c.width=J.naturalWidth||J.width,c.height=J.naturalHeight||J.height):typeof VideoFrame<"u"&&J instanceof VideoFrame?(c.width=J.displayWidth,c.height=J.displayHeight):(c.width=J.width,c.height=J.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=B,this.setTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=ie,this.setupRenderTarget=k,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=w,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rp(n,e){function t(i,s=Ai){let r;const o=gt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hu)return n.BYTE;if(i===du)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===sl)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===zn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===Qi)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===ll)return n.RED_INTEGER;if(i===os)return n.RG;if(i===cl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===zr||i===kr||i===Br||i===Vr)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===_a||i===va||i===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Ma||i===Sa||i===ba||i===Ea||i===Yr||i===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Ma)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ba)return r.COMPRESSED_R11_EAC;if(i===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Aa||i===Ta||i===Ca||i===Ra||i===Pa||i===La||i===Ia||i===Da||i===Na||i===Ua||i===Oa||i===Fa||i===za||i===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Aa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ta)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ca)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===La)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ia)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Da)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Na)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fa)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ka)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ba||i===Va||i===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ba)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ha||i===Wa||i===$r||i===qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Au(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:Ux,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zx extends Bi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,g=null,h=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",f=new Fx,p={},M=t.getContextAttributes();let A=null,x=null;const b=[],S=[],T=new Ae;let v=null,R=null;const P=new An;P.viewport=new Ft;const U=new An;U.viewport=new Ft;const O=[P,U],H=new Zf;let B=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let L=b[y];return L===void 0&&(L=new ea,b[y]=L),L.getTargetRaySpace()},this.getControllerGrip=function(y){let L=b[y];return L===void 0&&(L=new ea,b[y]=L),L.getGripSpace()},this.getHand=function(y){let L=b[y];return L===void 0&&(L=new ea,b[y]=L),L.getHandSpace()};function z(y){const L=S.indexOf(y.inputSource);if(L===-1)return;const K=b[L];K!==void 0&&(K.update(y.inputSource,y.frame,c||o),K.dispatchEvent({type:y.type,data:y.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let y=0;y<b.length;y++){const L=S[y];L!==null&&(S[y]=null,b[y].disconnect(L))}B=null,I=null,f.reset();for(const y in p)delete p[y];if(e.setRenderTarget(A),d=null,h=null,g=null,s=null,x=null,D.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),R!==null){const y=R.camera;y.fov=R.fov,y.zoom=R.zoom,y.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){r=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){a=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(y){c=y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(y){if(s=y,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,F=null,w=null;M.depth&&(w=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=M.stencil?Qi:xi,F=M.stencil?lr:ii);const C={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:r};g=this.getBinding(),h=g.createProjectionLayer(C),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new kn(h.textureWidth,h.textureHeight,{format:zn,type:yn,depthTexture:new ur(h.textureWidth,h.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new kn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),D.setContext(s),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Y(y){for(let L=0;L<y.removed.length;L++){const K=y.removed[L],F=S.indexOf(K);F>=0&&(S[F]=null,b[F].disconnect(K))}for(let L=0;L<y.added.length;L++){const K=y.added[L];let F=S.indexOf(K);if(F===-1){for(let C=0;C<b.length;C++)if(C>=S.length){S.push(K),F=C;break}else if(S[C]===null){S[C]=K,F=C;break}if(F===-1)break}const w=b[F];w&&w.connect(K)}}const $=new X,q=new X;function ne(y,L,K){$.setFromMatrixPosition(L.matrixWorld),q.setFromMatrixPosition(K.matrixWorld);const F=$.distanceTo(q),w=L.projectionMatrix.elements,C=K.projectionMatrix.elements,V=w[14]/(w[10]-1),W=w[14]/(w[10]+1),ie=(w[9]+1)/w[5],k=(w[9]-1)/w[5],j=(w[8]-1)/w[0],se=(C[8]+1)/C[0],Z=V*j,ce=V*se,ye=F/(-j+se),be=ye*-j;if(L.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(be),y.translateZ(ye),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),w[10]===-1)y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const Q=V+ye,ze=W+ye,Te=Z-be,J=ce+(F-be),E=ie*W/ze*Q,le=k*W/ze*Q;y.projectionMatrix.makePerspective(Te,J,E,le,Q,ze),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function ee(y,L){L===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(L.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(s===null)return;let L=y.near,K=y.far;f.texture!==null&&(f.depthNear>0&&(L=f.depthNear),f.depthFar>0&&(K=f.depthFar)),H.near=U.near=P.near=L,H.far=U.far=P.far=K,(B!==H.near||I!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),B=H.near,I=H.far),H.layers.mask=y.layers.mask|6,P.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;const F=y.parent,w=H.cameras;ee(H,F);for(let C=0;C<w.length;C++)ee(w[C],F);w.length===2?ne(H,P,U):H.projectionMatrix.copy(P.projectionMatrix),R===null&&y.isPerspectiveCamera&&(R={camera:y,fov:y.fov,zoom:y.zoom}),ue(y,H,F)};function ue(y,L,K){K===null?y.matrix.copy(L.matrixWorld):(y.matrix.copy(K.matrixWorld),y.matrix.invert(),y.matrix.multiply(L.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=Kr*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(y){l=y,h!==null&&(h.fixedFoveation=y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=y)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(y){return p[y]};let te=null;function ae(y,L){if(u=L.getViewerPose(c||o),m=L,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let F=!1;K.length!==H.cameras.length&&(H.cameras.length=0,F=!0);for(let W=0;W<K.length;W++){const ie=K[W];let k=null;if(d!==null)k=d.getViewport(ie);else{const se=g.getViewSubImage(h,ie);k=se.viewport,W===0&&(e.setRenderTargetTextures(x,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(x))}let j=O[W];j===void 0&&(j=new An,j.layers.enable(W),j.viewport=new Ft,O[W]=j),j.matrix.fromArray(ie.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ie.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(k.x,k.y,k.width,k.height),W===0&&(H.matrix.copy(j.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),F===!0&&H.cameras.push(j)}const w=s.enabledFeatures;if(w&&w.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){g=i.getBinding();const W=g.getDepthInformation(K[0]);W&&W.isValid&&W.texture&&f.init(W,s.renderState)}if(w&&w.includes("camera-access")&&_){e.state.unbindTexture(),g=i.getBinding();for(let W=0;W<K.length;W++){const ie=K[W].camera;if(ie){let k=p[ie];k||(k=new Au,p[ie]=k);const j=g.getCameraImage(ie);k.sourceTexture=j}}}}for(let K=0;K<b.length;K++){const F=S[K],w=b[K];F!==null&&w!==void 0&&w.update(F,L,c||o)}te&&te(y,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),m=null}const D=new jf;D.setAnimationLoop(ae),this.setAnimationLoop=function(y){te=y},this.dispose=function(){}}}const kx=new St,op=new st;op.set(-1,0,0,0,1,0,0,0,1);function Bx(n,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Hf(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,M,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),g(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,x)):p.isMeshMatcapMaterial?(r(f,p),m(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),_(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,M,A):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===gn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===gn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p),A=M.envMap,x=M.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(op),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=A*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function g(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const S=b.program;i.uniformBlockBinding(x,S)}function c(x,b){let S=s[x.id];S===void 0&&(f(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",M));const T=b.program;i.updateUBOMapping(x,T);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const b=g();x.__bindingPointIndex=b;const S=n.createBuffer(),T=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function g(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=s[x.id],S=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,R=S.length;v<R;v++){const P=S[v];if(Array.isArray(P))for(let U=0,O=P.length;U<O;U++)d(P[U],v,U,T);else d(P,v,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,b,S,T){if(_(x,b,S,T)===!0){const v=x.__offset,R=x.value;if(Array.isArray(R)){let P=0;for(let U=0;U<R.length;U++){const O=R[U],H=p(O);m(O,x.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function m(x,b,S){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,S)}function _(x,b,S,T){const v=x.value,R=b+"_"+S;if(T[R]===void 0)return typeof v=="number"||typeof v=="boolean"?T[R]=v:ArrayBuffer.isView(v)?T[R]=v.slice():T[R]=v.clone(),!0;{const P=T[R];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return T[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function f(x){const b=x.uniforms;let S=0;const T=16;for(let R=0,P=b.length;R<P;R++){const U=Array.isArray(b[R])?b[R]:[b[R]];for(let O=0,H=U.length;O<H;O++){const B=U[O],I=Array.isArray(B.value)?B.value:[B.value];for(let z=0,G=I.length;z<G;z++){const Y=I[z],$=p(Y),q=S%T,ne=q%$.boundary,ee=q+ne;S+=ne,ee!==0&&T-ee<$.storage&&(S+=T-ee),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=$.storage}}}const v=S%T;return v>0&&(S+=T-v),x.__size=S,x.__cache={},this}function p(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){const b=x.target;b.removeEventListener("dispose",M);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Gx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function Hx(){return ci===null&&(ci=new Mu(Gx,16,16,os,si),ci.name="DFG_LUT",ci.minFilter=tn,ci.magFilter=tn,ci.wrapS=di,ci.wrapT=di,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class ap{constructor(e={}){const{canvas:t=Af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=d,f=new Set([ul,cl,ll]),p=new Set([yn,ii,ar,lr,rl,ol]),M=new Uint32Array(4),A=new Int32Array(4),x=new X;let b=null,S=null;const T=[],v=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,O=null,H=null,B=null,I=null;this._outputColorSpace=cn;let z=0,G=0,Y=null,$=-1,q=null;const ne=new Ft,ee=new Ft;let ue=null;const te=new dt(0);let ae=0,D=t.width,y=t.height,L=1,K=null,F=null;const w=new Ft(0,0,D,y),C=new Ft(0,0,D,y);let V=!1;const W=new gl;let ie=!1,k=!1;const j=new St,se=new X,Z=new Ft,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function be(){return Y===null?L:1}let Q=i;function ze(N,re){return t.getContext(N,re)}let Te,J,E,le,he,pe,Ee,Ce,_e,xe,Re,$e,Ne,Pe,Je,et,ot,oe,Le,ve,Ie,Be,Me;try{const N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",qn,!1),Q===null){const re="webgl2";if(Q=ze(re,N),Q===null)throw ze(re)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(N){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),_t("WebGLRenderer: "+N.message),N}function Ke(){Te=new W1(Q),Te.init(),Ie=new rp(Q,Te),J=new N1(Q,Te,e,Ie),E=new Dx(Q,Te),J.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),H=Q.createFramebuffer(),B=Q.createFramebuffer(),I=Q.createFramebuffer(),le=new Y1(Q),he=new xx,pe=new Nx(Q,Te,E,he,J,Ie,le),Ee=new H1(P),Ce=new J0(Q),Be=new I1(Q,Ce),_e=new q1(Q,Ce,le,Be),xe=new J1(Q,_e,Ce,Be,le),oe=new $1(Q,J,pe),Je=new U1(he),Re=new vx(P,Ee,Te,J,Be,Je),$e=new Bx(P,he),Ne=new Mx,Pe=new Tx(Te),ot=new L1(P,Ee,E,xe,m,l),et=new Ix(P,xe,J),Me=new Vx(Q,le,J,E),Le=new D1(Q,Te,le),ve=new X1(Q,Te,le),le.programs=Re.programs,P.capabilities=J,P.extensions=Te,P.properties=he,P.renderLists=Ne,P.shadowMap=et,P.state=E,P.info=le}_!==yn&&(R=new K1(_,t.width,t.height,a,s,r));const Xe=new zx(P,Q);this.xr=Xe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const N=Te.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Te.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(N){N!==void 0&&(L=N,this.setSize(D,y,!1))},this.getSize=function(N){return N.set(D,y)},this.setSize=function(N,re,me=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}D=N,y=re,t.width=Math.floor(N*L),t.height=Math.floor(re*L),me===!0&&(t.style.width=N+"px",t.style.height=re+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,N,re)},this.getDrawingBufferSize=function(N){return N.set(D*L,y*L).floor()},this.setDrawingBufferSize=function(N,re,me){D=N,y=re,L=me,t.width=Math.floor(N*me),t.height=Math.floor(re*me),this.setViewport(0,0,N,re)},this.setEffects=function(N){if(_===yn){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let re=0;re<N.length;re++)if(N[re].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ne)},this.getViewport=function(N){return N.copy(w)},this.setViewport=function(N,re,me,de){N.isVector4?w.set(N.x,N.y,N.z,N.w):w.set(N,re,me,de),E.viewport(ne.copy(w).multiplyScalar(L).round())},this.getScissor=function(N){return N.copy(C)},this.setScissor=function(N,re,me,de){N.isVector4?C.set(N.x,N.y,N.z,N.w):C.set(N,re,me,de),E.scissor(ee.copy(C).multiplyScalar(L).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(N){E.setScissorTest(V=N)},this.setOpaqueSort=function(N){K=N},this.setTransparentSort=function(N){F=N},this.getClearColor=function(N){return N.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(N=!0,re=!0,me=!0){let de=0;if(N){let fe=!1;if(Y!==null){const Fe=Y.texture.format;fe=f.has(Fe)}if(fe){const Fe=Y.texture.type,He=p.has(Fe),Ue=ot.getClearColor(),We=ot.getClearAlpha(),Ye=Ue.r,ct=Ue.g,pt=Ue.b;He?(M[0]=Ye,M[1]=ct,M[2]=pt,M[3]=We,Q.clearBufferuiv(Q.COLOR,0,M)):(A[0]=Ye,A[1]=ct,A[2]=pt,A[3]=We,Q.clearBufferiv(Q.COLOR,0,A))}else de|=Q.COLOR_BUFFER_BIT}re&&(de|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(de|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&Q.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),O=N},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",qn,!1),ot.dispose(),Ne.dispose(),Pe.dispose(),he.dispose(),Ee.dispose(),xe.dispose(),Be.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",ah),Xe.removeEventListener("sessionend",lh),hs.stop()};function It(N){N.preventDefault(),Pc("WebGLRenderer: Context Lost."),U=!0}function Et(){Pc("WebGLRenderer: Context Restored."),U=!1;const N=le.autoReset,re=et.enabled,me=et.autoUpdate,de=et.needsUpdate,fe=et.type;Ke(),le.autoReset=N,et.enabled=re,et.autoUpdate=me,et.needsUpdate=de,et.type=fe}function qn(N){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function oi(N){const re=N.target;re.removeEventListener("dispose",oi),Bp(re)}function Bp(N){Vp(N),he.remove(N)}function Vp(N){const re=he.get(N).programs;re!==void 0&&(re.forEach(function(me){Re.releaseProgram(me)}),N.isShaderMaterial&&Re.releaseShaderCache(N))}this.renderBufferDirect=function(N,re,me,de,fe,Fe){re===null&&(re=ce);const He=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,Ue=Wp(N,re,me,de,fe);E.setMaterial(de,He);let We=me.index,Ye=1;if(de.wireframe===!0){if(We=_e.getWireframeAttribute(me),We===void 0)return;Ye=2}const ct=me.drawRange,pt=me.attributes.position;let qe=ct.start*Ye,wt=(ct.start+ct.count)*Ye;Fe!==null&&(qe=Math.max(qe,Fe.start*Ye),wt=Math.min(wt,(Fe.start+Fe.count)*Ye)),We!==null?(qe=Math.max(qe,0),wt=Math.min(wt,We.count)):pt!=null&&(qe=Math.max(qe,0),wt=Math.min(wt,pt.count));const qt=wt-qe;if(qt<0||qt===1/0)return;Be.setup(fe,de,Ue,me,We);let Nt,Lt=Le;if(We!==null&&(Nt=Ce.get(We),Lt=ve,Lt.setIndex(Nt)),fe.isMesh)de.wireframe===!0?(E.setLineWidth(de.wireframeLinewidth*be()),Lt.setMode(Q.LINES)):Lt.setMode(Q.TRIANGLES);else if(fe.isLine){let on=de.linewidth;on===void 0&&(on=1),E.setLineWidth(on*be()),fe.isLineSegments?Lt.setMode(Q.LINES):fe.isLineLoop?Lt.setMode(Q.LINE_LOOP):Lt.setMode(Q.LINE_STRIP)}else fe.isPoints?Lt.setMode(Q.POINTS):fe.isSprite&&Lt.setMode(Q.TRIANGLES);if(fe.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))Lt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const on=fe._multiDrawStarts,Ge=fe._multiDrawCounts,hn=fe._multiDrawCount,yt=We?Ce.get(We).bytesPerElement:1,Rn=he.get(de).currentProgram.getUniforms();for(let ai=0;ai<hn;ai++)Rn.setValue(Q,"_gl_DrawID",ai),Lt.render(on[ai]/yt,Ge[ai])}else if(fe.isInstancedMesh)Lt.renderInstances(qe,qt,fe.count);else if(me.isInstancedBufferGeometry){const on=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ge=Math.min(me.instanceCount,on);Lt.renderInstances(qe,qt,Ge)}else Lt.render(qe,qt)};function oh(N,re,me,de){O!==null&&N.isNodeMaterial&&O.setObject(de,N),ie===!0&&Je.setState(N,me,!1),N.transparent===!0&&N.side===Nn&&N.forceSinglePass===!1?(N.side=gn,N.needsUpdate=!0,vo(N,re,de),N.side=ss,N.needsUpdate=!0,vo(N,re,de),N.side=Nn):vo(N,re,de)}this.compile=function(N,re,me=null){me===null&&(me=N),O!==null&&O.renderStart(N,re,me),S=Pe.get(me),S.init(re),v.push(S),me.traverseVisible(function(fe){fe.isLight&&fe.layers.test(re.layers)&&(S.pushLight(fe),fe.castShadow&&S.pushShadow(fe))}),N!==me&&N.traverseVisible(function(fe){fe.isLight&&fe.layers.test(re.layers)&&(S.pushLight(fe),fe.castShadow&&S.pushShadow(fe))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),k=this.localClippingEnabled,ie=Je.init(this.clippingPlanes,k),ie===!0&&Je.setGlobalState(this.clippingPlanes,re),O!==null&&et.render(S.state.shadowsArray,me,re);const de=new Set;return N.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Fe=fe.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){const Ue=Fe[He];oh(Ue,me,re,fe),de.add(Ue)}else oh(Fe,me,re,fe),de.add(Fe)}),S=v.pop(),O!==null&&O.renderEnd(),de},this.compileAsync=function(N,re,me=null){const de=this.compile(N,re,me);return new Promise(fe=>{function Fe(){if(de.forEach(function(He){const We=he.get(He).currentProgram;(We===void 0||We.isReady())&&de.delete(He)}),de.size===0){fe(N);return}setTimeout(Fe,10)}Te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Nl=null;function Gp(N){Nl&&Nl(N)}function ah(){hs.stop()}function lh(){hs.start()}const hs=new jf;hs.setAnimationLoop(Gp),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(N){Nl=N,Xe.setAnimationLoop(N),N===null?hs.stop():hs.start()},Xe.addEventListener("sessionstart",ah),Xe.addEventListener("sessionend",lh),this.render=function(N,re){if(re!==void 0&&re.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(N,re);const me=Xe.enabled===!0&&Xe.isPresenting===!0,de=R!==null&&(Y===null||me)&&R.begin(P,Y);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(re),re=Xe.getCamera()),N.isScene===!0&&N.onBeforeRender(P,N,re,Y),S=Pe.get(N,v.length),S.init(re),S.state.textureUnits=pe.getTextureUnits(),v.push(S),j.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),W.setFromProjectionMatrix(j,jn,re.reversedDepth),k=this.localClippingEnabled,ie=Je.init(this.clippingPlanes,k),b=Ne.get(N,T.length),b.init(),T.push(b),Xe.enabled===!0&&Xe.isPresenting===!0){const He=P.xr.getDepthSensingMesh();He!==null&&Ul(He,re,-1/0,P.sortObjects)}Ul(N,re,0,P.sortObjects),b.finish(),O!==null&&O.updateLights(S.state.lightsArray),P.sortObjects===!0&&b.sort(K,F),ye=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ye&&ot.addToRenderList(b,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Je.beginShadows();const fe=S.state.shadowsArray;if(et.render(fe,N,re),ie===!0&&Je.endShadows(),(de&&R.hasRenderPass())===!1){const He=b.opaque,Ue=b.transmissive;if(S.setupLights(),re.isArrayCamera){const We=re.cameras;if(Ue.length>0)for(let Ye=0,ct=We.length;Ye<ct;Ye++){const pt=We[Ye];uh(He,Ue,N,pt)}ye&&ot.render(N);for(let Ye=0,ct=We.length;Ye<ct;Ye++){const pt=We[Ye];ch(b,N,pt,pt.viewport)}}else Ue.length>0&&uh(He,Ue,N,re),ye&&ot.render(N),ch(b,N,re)}Y!==null&&G===0&&(pe.updateMultisampleRenderTarget(Y),pe.updateRenderTargetMipmap(Y)),de&&R.end(P),N.isScene===!0&&N.onAfterRender(P,N,re),Be.resetDefaultState(),$=-1,q=null,v.pop(),v.length>0?(S=v[v.length-1],pe.setTextureUnits(S.state.textureUnits),ie===!0&&Je.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,O!==null&&O.renderEnd()};function Ul(N,re,me,de){if(N.visible===!1)return;if(N.layers.test(re.layers)){if(N.isGroup)me=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(re);else if(N.isLightProbeGrid)S.pushLightProbeGrid(N);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(W)){de&&Z.setFromMatrixPosition(N.matrixWorld).applyMatrix4(j);const He=xe.update(N),Ue=N.material;Ue.visible&&b.push(N,He,Ue,me,Z.z,null,re)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(W))){const He=xe.update(N),Ue=N.material;if(de&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Z.copy(N.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Z.copy(He.boundingSphere.center)),Z.applyMatrix4(N.matrixWorld).applyMatrix4(j)),Array.isArray(Ue)){const We=He.groups;for(let Ye=0,ct=We.length;Ye<ct;Ye++){const pt=We[Ye],qe=Ue[pt.materialIndex];qe&&qe.visible&&b.push(N,He,qe,me,Z.z,pt,re)}}else Ue.visible&&b.push(N,He,Ue,me,Z.z,null,re)}}const Fe=N.children;for(let He=0,Ue=Fe.length;He<Ue;He++)Ul(Fe[He],re,me,de)}function ch(N,re,me,de){const{opaque:fe,transmissive:Fe,transparent:He}=N;S.setupLightsView(me),ie===!0&&Je.setGlobalState(P.clippingPlanes,me),de&&E.viewport(ne.copy(de)),fe.length>0&&_o(fe,re,me),Fe.length>0&&_o(Fe,re,me),He.length>0&&_o(He,re,me),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function uh(N,re,me,de){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[de.id]===void 0){const qe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[de.id]=new kn(1,1,{generateMipmaps:!0,type:qe?si:yn,minFilter:Ki,samples:Math.max(4,J.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Fe=S.state.transmissionRenderTarget[de.id],He=de.viewport||ne;Fe.setSize(He.z*P.transmissionResolutionScale,He.w*P.transmissionResolutionScale);const Ue=P.getRenderTarget(),We=P.getActiveCubeFace(),Ye=P.getActiveMipmapLevel();P.setRenderTarget(Fe),P.getClearColor(te),ae=P.getClearAlpha(),ae<1&&P.setClearColor(16777215,.5),P.clear(),ye&&ot.render(me);const ct=P.toneMapping;P.toneMapping=ei;const pt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),S.setupLightsView(de),ie===!0&&Je.setGlobalState(P.clippingPlanes,de),_o(N,me,de),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let wt=0,qt=re.length;wt<qt;wt++){const Nt=re[wt],{object:Lt,geometry:on,material:Ge,group:hn}=Nt;if(Ge.side===Nn&&Lt.layers.test(de.layers)){const yt=Ge.side;Ge.side=gn,Ge.needsUpdate=!0,hh(Lt,me,de,on,Ge,hn),Ge.side=yt,Ge.needsUpdate=!0,qe=!0}}qe===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}P.setRenderTarget(Ue,We,Ye),P.setClearColor(te,ae),pt!==void 0&&(de.viewport=pt),P.toneMapping=ct}function _o(N,re,me){const de=re.isScene===!0?re.overrideMaterial:null;for(let fe=0,Fe=N.length;fe<Fe;fe++){const He=N[fe],{object:Ue,geometry:We,group:Ye}=He;let ct=He.material;ct.allowOverride===!0&&de!==null&&(ct=de),Ue.layers.test(me.layers)&&hh(Ue,re,me,We,ct,Ye)}}function hh(N,re,me,de,fe,Fe){O!==null&&fe.isNodeMaterial&&O.setObject(N,fe),N.onBeforeRender(P,re,me,de,fe,Fe),N.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),fe.onBeforeRender(P,re,me,de,N,Fe),fe.transparent===!0&&fe.side===Nn&&fe.forceSinglePass===!1?(fe.side=gn,fe.needsUpdate=!0,P.renderBufferDirect(me,re,de,fe,N,Fe),fe.side=ss,fe.needsUpdate=!0,P.renderBufferDirect(me,re,de,fe,N,Fe),fe.side=Nn):P.renderBufferDirect(me,re,de,fe,N,Fe),N.onAfterRender(P,re,me,de,fe,Fe)}function vo(N,re,me){re.isScene!==!0&&(re=ce);const de=he.get(N),fe=S.state.lights,Fe=S.state.shadowsArray,He=fe.state.version,Ue=Re.getParameters(N,fe.state,Fe,re,me,S.state.lightProbeGridArray),We=Re.getProgramCacheKey(Ue);let Ye=de.programs;de.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?re.environment:null,de.fog=re.fog;const ct=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;de.envMap=Ee.get(N.envMap||de.environment,ct),de.envMapRotation=de.environment!==null&&N.envMap===null?re.environmentRotation:N.envMapRotation,Ye===void 0&&(N.addEventListener("dispose",oi),Ye=new Map,de.programs=Ye);let pt=Ye.get(We);if(pt!==void 0){if(de.currentProgram===pt&&de.lightsStateVersion===He)return fh(N,Ue),pt}else Ue.uniforms=Re.getUniforms(N),O!==null&&N.isNodeMaterial&&O.build(N,me,Ue),N.onBeforeCompile(Ue,P),pt=Re.acquireProgram(Ue,We),Ye.set(We,pt),de.uniforms=Ue.uniforms;const qe=de.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(qe.clippingPlanes=Je.uniform),fh(N,Ue),de.needsLights=Xp(N),de.lightsStateVersion=He,de.needsLights&&(qe.ambientLightColor.value=fe.state.ambient,qe.lightProbe.value=fe.state.probe,qe.sunLights.value=fe.state.sun,qe.sunLightShadows.value=fe.state.sunShadow,qe.directionalLights.value=fe.state.directional,qe.directionalLightShadows.value=fe.state.directionalShadow,qe.spotLights.value=fe.state.spot,qe.spotLightShadows.value=fe.state.spotShadow,qe.rectAreaLights.value=fe.state.rectArea,qe.ltc_1.value=fe.state.rectAreaLTC1,qe.ltc_2.value=fe.state.rectAreaLTC2,qe.pointLights.value=fe.state.point,qe.pointLightShadows.value=fe.state.pointShadow,qe.hemisphereLights.value=fe.state.hemi,qe.sunShadowMatrix.value=fe.state.sunShadowMatrix,qe.sunShadowCascade.value=fe.state.sunShadowCascade,qe.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,qe.spotLightMatrix.value=fe.state.spotLightMatrix,qe.spotLightMap.value=fe.state.spotLightMap,qe.pointShadowMatrix.value=fe.state.pointShadowMatrix),de.lightProbeGrid=S.state.lightProbeGridArray.length>0,de.currentProgram=pt,de.uniformsList=null,pt}function dh(N){if(N.uniformsList===null){const re=N.currentProgram.getUniforms();N.uniformsList=ta.seqWithValue(re.seq,N.uniforms)}return N.uniformsList}function fh(N,re){const me=he.get(N);me.outputColorSpace=re.outputColorSpace,me.batching=re.batching,me.batchingColor=re.batchingColor,me.instancing=re.instancing,me.instancingColor=re.instancingColor,me.instancingMorph=re.instancingMorph,me.skinning=re.skinning,me.morphTargets=re.morphTargets,me.morphNormals=re.morphNormals,me.morphColors=re.morphColors,me.morphTargetsCount=re.morphTargetsCount,me.numClippingPlanes=re.numClippingPlanes,me.numIntersection=re.numClipIntersection,me.vertexAlphas=re.vertexAlphas,me.vertexTangents=re.vertexTangents,me.toneMapping=re.toneMapping}function Hp(N,re){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;x.setFromMatrixPosition(re.matrixWorld);for(let me=0,de=N.length;me<de;me++){const fe=N[me];if(fe.texture!==null&&fe.boundingBox.containsPoint(x))return fe}return null}function Wp(N,re,me,de,fe){re.isScene!==!0&&(re=ce),pe.resetTextureUnits();const Fe=re.fog,He=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?re.environment:null,Ue=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:gt.workingColorSpace,We=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,Ye=Ee.get(de.envMap||He,We),ct=de.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pt=!!me.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),qe=!!me.morphAttributes.position,wt=!!me.morphAttributes.normal,qt=!!me.morphAttributes.color;let Nt=ei;de.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Nt=P.toneMapping);const Lt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,on=Lt!==void 0?Lt.length:0,Ge=he.get(de),hn=S.state.lights;if(ie===!0&&(k===!0||N!==q)){const Dt=N===q&&de.id===$;Je.setState(de,N,Dt)}let yt=!1;de.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hn.state.version||Ge.outputColorSpace!==Ue||fe.isBatchedMesh&&Ge.batching===!1||!fe.isBatchedMesh&&Ge.batching===!0||fe.isBatchedMesh&&Ge.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&Ge.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&Ge.instancing===!1||!fe.isInstancedMesh&&Ge.instancing===!0||fe.isSkinnedMesh&&Ge.skinning===!1||!fe.isSkinnedMesh&&Ge.skinning===!0||fe.isInstancedMesh&&Ge.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Ge.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Ge.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Ge.instancingMorph===!1&&fe.morphTexture!==null||Ge.envMap!==Ye||de.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Je.numPlanes||Ge.numIntersection!==Je.numIntersection)||Ge.vertexAlphas!==ct||Ge.vertexTangents!==pt||Ge.morphTargets!==qe||Ge.morphNormals!==wt||Ge.morphColors!==qt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==on||!!Ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ge.__version=de.version);let Rn=Ge.currentProgram;yt===!0&&(Rn=vo(de,re,fe),O&&de.isNodeMaterial&&O.onUpdateProgram(de,Rn,Ge));let ai=!1,Hi=!1,Ds=!1;const Pt=Rn.getUniforms(),Gt=Ge.uniforms;if(E.useProgram(Rn.program)&&(ai=!0,Hi=!0,Ds=!0),de.id!==$&&($=de.id,Hi=!0),Ge.needsLights){const Dt=Hp(S.state.lightProbeGridArray,fe);Ge.lightProbeGrid!==Dt&&(Ge.lightProbeGrid=Dt,Hi=!0)}if(ai||q!==N){E.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Pt.setValue(Q,"projectionMatrix",N.projectionMatrix),Pt.setValue(Q,"viewMatrix",N.matrixWorldInverse);const qi=Pt.map.cameraPosition;qi!==void 0&&qi.setValue(Q,se.setFromMatrixPosition(N.matrixWorld)),J.logarithmicDepthBuffer&&Pt.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Pt.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),q!==N&&(q=N,Hi=!0,Ds=!0)}if(Ge.needsLights&&(hn.state.sunShadowMap.length>0&&Pt.setValue(Q,"sunShadowMap",hn.state.sunShadowMap,pe),hn.state.directionalShadowMap.length>0&&Pt.setValue(Q,"directionalShadowMap",hn.state.directionalShadowMap,pe),hn.state.spotShadowMap.length>0&&Pt.setValue(Q,"spotShadowMap",hn.state.spotShadowMap,pe),hn.state.pointShadowMap.length>0&&Pt.setValue(Q,"pointShadowMap",hn.state.pointShadowMap,pe)),fe.isSkinnedMesh){Pt.setOptional(Q,fe,"bindMatrix"),Pt.setOptional(Q,fe,"bindMatrixInverse");const Dt=fe.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(Q,"boneTexture",Dt.boneTexture,pe))}fe.isBatchedMesh&&(Pt.setOptional(Q,fe,"batchingTexture"),Pt.setValue(Q,"batchingTexture",fe._matricesTexture,pe),Pt.setOptional(Q,fe,"batchingIdTexture"),Pt.setValue(Q,"batchingIdTexture",fe._indirectTexture,pe),Pt.setOptional(Q,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Pt.setValue(Q,"batchingColorTexture",fe._colorsTexture,pe));const Wi=me.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&oe.update(fe,me,Rn),(Hi||Ge.receiveShadow!==fe.receiveShadow)&&(Ge.receiveShadow=fe.receiveShadow,Pt.setValue(Q,"receiveShadow",fe.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&re.environment!==null&&(Gt.envMapIntensity.value=re.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Hx()),Hi){if(Pt.setValue(Q,"toneMappingExposure",P.toneMappingExposure),Ge.needsLights&&qp(Gt,Ds),Fe&&de.fog===!0&&$e.refreshFogUniforms(Gt,Fe),$e.refreshMaterialUniforms(Gt,de,L,y,S.state.transmissionRenderTarget[N.id]),Ge.needsLights&&Ge.lightProbeGrid){const Dt=Ge.lightProbeGrid;Gt.probesSH.value=Dt.texture,Gt.probesMin.value.copy(Dt.boundingBox.min),Gt.probesMax.value.copy(Dt.boundingBox.max),Gt.probesResolution.value.copy(Dt.resolution)}ta.upload(Q,dh(Ge),Gt,pe)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(ta.upload(Q,dh(Ge),Gt,pe),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Pt.setValue(Q,"center",fe.center),Pt.setValue(Q,"modelViewMatrix",fe.modelViewMatrix),Pt.setValue(Q,"normalMatrix",fe.normalMatrix),Pt.setValue(Q,"modelMatrix",fe.matrixWorld),de.uniformsGroups!==void 0){const Dt=de.uniformsGroups;for(let qi=0,Ns=Dt.length;qi<Ns;qi++){const mh=Dt[qi];Me.update(mh,Rn),Me.bind(mh,Rn)}}return Rn}function qp(N,re){N.ambientLightColor.needsUpdate=re,N.lightProbe.needsUpdate=re,N.sunLights.needsUpdate=re,N.sunLightShadows.needsUpdate=re,N.directionalLights.needsUpdate=re,N.directionalLightShadows.needsUpdate=re,N.pointLights.needsUpdate=re,N.pointLightShadows.needsUpdate=re,N.spotLights.needsUpdate=re,N.spotLightShadows.needsUpdate=re,N.rectAreaLights.needsUpdate=re,N.hemisphereLights.needsUpdate=re}function Xp(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(N,re,me){const de=he.get(N);de.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),he.get(N.texture).__webglTexture=re,he.get(N.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:me,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,re){const me=he.get(N);me.__webglFramebuffer=re,me.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(N,re=0,me=0){Y=N,z=re,G=me;let de=null,fe=!1,Fe=!1;if(N){const Ue=he.get(N);if(Ue.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,Ue.__webglFramebuffer),ne.copy(N.viewport),ee.copy(N.scissor),ue=N.scissorTest,E.viewport(ne),E.scissor(ee),E.setScissorTest(ue),$=-1;return}else if(Ue.__webglFramebuffer===void 0)pe.setupRenderTarget(N);else if(Ue.__hasExternalTextures)pe.rebindTextures(N,he.get(N.texture).__webglTexture,he.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ct=N.depthTexture;if(Ue.__boundDepthTexture!==ct){if(ct!==null&&he.has(ct)&&(N.width!==ct.image.width||N.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(N)}}const We=N.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const Ye=he.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ye[re])?de=Ye[re][me]:de=Ye[re],fe=!0):N.samples>0&&pe.useMultisampledRTT(N)===!1?de=he.get(N).__webglMultisampledFramebuffer:Array.isArray(Ye)?de=Ye[me]:de=Ye,ne.copy(N.viewport),ee.copy(N.scissor),ue=N.scissorTest}else ne.copy(w).multiplyScalar(L).floor(),ee.copy(C).multiplyScalar(L).floor(),ue=V;if(me!==0&&(de=H),E.bindFramebuffer(Q.FRAMEBUFFER,de)&&E.drawBuffers(N,de),E.viewport(ne),E.scissor(ee),E.setScissorTest(ue),fe){const Ue=he.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue.__webglTexture,me)}else if(Fe){const Ue=re;for(let We=0;We<N.textures.length;We++){const Ye=he.get(N.textures[We]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+We,Ye.__webglTexture,me,Ue)}}else if(N!==null&&me!==0){const Ue=he.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ue.__webglTexture,me)}$=-1};function ph(N){const re=he.get(N);return(re.__readFormat!==N.format||re.__readType!==N.type)&&(re.__readFormat=N.format,re.__readType=N.type,re.__formatReadable=J.textureFormatReadable(N.format),re.__typeReadable=J.textureTypeReadable(N.type)),re}this.readRenderTargetPixels=function(N,re,me,de,fe,Fe,He,Ue=0){if(!(N&&N.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=he.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){E.bindFramebuffer(Q.FRAMEBUFFER,We);try{const Ye=N.textures[Ue],ct=Ye.format,pt=Ye.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ue);const qe=ph(Ye);if(qe.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=N.width-de&&me>=0&&me<=N.height-fe&&Q.readPixels(re,me,de,fe,Ie.convert(ct),Ie.convert(pt),Fe)}finally{const Ye=Y!==null?he.get(Y).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(N,re,me,de,fe,Fe,He,Ue=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=he.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We)if(re>=0&&re<=N.width-de&&me>=0&&me<=N.height-fe){E.bindFramebuffer(Q.FRAMEBUFFER,We);const Ye=N.textures[Ue],ct=Ye.format,pt=Ye.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ue);const qe=ph(Ye);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,wt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Fe.byteLength,Q.STREAM_READ),Q.readPixels(re,me,de,fe,Ie.convert(ct),Ie.convert(pt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const qt=Y!==null?he.get(Y).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,qt);const Nt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Lm(Q,Nt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,wt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Fe),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(wt),Q.deleteSync(Nt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,re=null,me=0){const de=Math.pow(2,-me),fe=Math.floor(N.image.width*de),Fe=Math.floor(N.image.height*de),He=re!==null?re.x:0,Ue=re!==null?re.y:0;pe.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,me,0,0,He,Ue,fe,Fe),E.unbindTexture()},this.copyTextureToTexture=function(N,re,me=null,de=null,fe=0,Fe=0){let He,Ue,We,Ye,ct,pt,qe,wt,qt;const Nt=N.isCompressedTexture?N.mipmaps[Fe]:N.image;if(me!==null)He=me.max.x-me.min.x,Ue=me.max.y-me.min.y,We=me.isBox3?me.max.z-me.min.z:1,Ye=me.min.x,ct=me.min.y,pt=me.isBox3?me.min.z:0;else{const Gt=Math.pow(2,-fe);He=Math.floor(Nt.width*Gt),Ue=Math.floor(Nt.height*Gt),N.isDataArrayTexture?We=Nt.depth:N.isData3DTexture?We=Math.floor(Nt.depth*Gt):We=1,Ye=0,ct=0,pt=0}de!==null?(qe=de.x,wt=de.y,qt=de.z):(qe=0,wt=0,qt=0);const Lt=Ie.convert(re.format),on=Ie.convert(re.type);let Ge;re.isData3DTexture?(pe.setTexture3D(re,0),Ge=Q.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(pe.setTexture2DArray(re,0),Ge=Q.TEXTURE_2D_ARRAY):(pe.setTexture2D(re,0),Ge=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,re.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,re.unpackAlignment);const hn=E.getParameter(Q.UNPACK_ROW_LENGTH),yt=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),Rn=E.getParameter(Q.UNPACK_SKIP_PIXELS),ai=E.getParameter(Q.UNPACK_SKIP_ROWS),Hi=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,Nt.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Nt.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ye),E.pixelStorei(Q.UNPACK_SKIP_ROWS,ct),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,pt);const Ds=N.isDataArrayTexture||N.isData3DTexture,Pt=re.isDataArrayTexture||re.isData3DTexture;if(N.isDepthTexture){const Gt=he.get(N),Wi=he.get(re),Dt=he.get(Gt.__renderTarget),qi=he.get(Wi.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,Dt.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Ns=0;Ns<We;Ns++)Ds&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,he.get(N).__webglTexture,fe,pt+Ns),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,he.get(re).__webglTexture,Fe,qt+Ns)),Q.blitFramebuffer(Ye,ct,He,Ue,qe,wt,He,Ue,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(fe!==0||N.isRenderTargetTexture||he.has(N)){const Gt=he.get(N),Wi=he.get(re);E.bindFramebuffer(Q.READ_FRAMEBUFFER,B),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,I);for(let Dt=0;Dt<We;Dt++)Ds?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Gt.__webglTexture,fe,pt+Dt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Gt.__webglTexture,fe),Pt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Wi.__webglTexture,Fe,qt+Dt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Wi.__webglTexture,Fe),fe!==0?Q.blitFramebuffer(Ye,ct,He,Ue,qe,wt,He,Ue,Q.COLOR_BUFFER_BIT,Q.NEAREST):Pt?Q.copyTexSubImage3D(Ge,Fe,qe,wt,qt+Dt,Ye,ct,He,Ue):Q.copyTexSubImage2D(Ge,Fe,qe,wt,Ye,ct,He,Ue);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Pt?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D(Ge,Fe,qe,wt,qt,He,Ue,We,Lt,on,Nt.data):re.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ge,Fe,qe,wt,qt,He,Ue,We,Lt,Nt.data):Q.texSubImage3D(Ge,Fe,qe,wt,qt,He,Ue,We,Lt,on,Nt):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Fe,qe,wt,He,Ue,Lt,on,Nt.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Fe,qe,wt,Nt.width,Nt.height,Lt,Nt.data):Q.texSubImage2D(Q.TEXTURE_2D,Fe,qe,wt,He,Ue,Lt,on,Nt);E.pixelStorei(Q.UNPACK_ROW_LENGTH,hn),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,yt),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Rn),E.pixelStorei(Q.UNPACK_SKIP_ROWS,ai),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,Hi),Fe===0&&re.generateMipmaps&&Q.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(N){he.get(N).__webglFramebuffer===void 0&&pe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?pe.setTextureCube(N,0):N.isData3DTexture?pe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?pe.setTexture2DArray(N,0):pe.setTexture2D(N,0),E.unbindTexture()},this.resetState=function(){z=0,G=0,Y=null,E.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const Bt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:il,AddEquation:xs,AddOperation:pf,AdditiveBlending:Ac,AgXToneMapping:lu,AlphaFormat:mu,AlwaysCompare:Ef,AlwaysDepth:ca,AlwaysStencilFunc:vf,ArcCurve:Uf,ArrayCamera:Zf,BackSide:gn,BasicDepthPacking:gf,Box3:ls,BoxGeometry:Vi,BufferAttribute:Bn,BufferGeometry:Wt,ByteType:hu,Camera:Uu,CanvasTexture:wu,CatmullRomCurve3:Cu,CineonToneMapping:ou,CircleGeometry:_l,ClampToEdgeWrapping:di,Color:dt,ColorManagement:gt,ConeGeometry:Ps,ConstantAlphaFactor:hf,ConstantColorFactor:cf,Controls:Qf,CubeCamera:Jf,CubeDepthTexture:Nf,CubeReflectionMapping:rs,CubeRefractionMapping:Ts,CubeTexture:Eu,CubeUVReflectionMapping:so,CubicBezierCurve:Ru,CubicBezierCurve3:Of,CullFaceBack:wc,CullFaceFront:Xd,CullFaceNone:qd,Curve:ri,CurvePath:zf,CustomBlending:$d,CustomToneMapping:au,CylinderGeometry:oo,Data3DTexture:Pf,DataArrayTexture:vu,DataTexture:Mu,DepthFormat:xi,DepthStencilFormat:Qi,DepthTexture:ur,DirectionalLight:Ou,DoubleSide:Nn,DstAlphaFactor:sf,DstColorFactor:of,EllipseCurve:xl,EqualCompare:Mf,EqualDepth:ha,EquirectangularReflectionMapping:Zo,EquirectangularRefractionMapping:Ko,Euler:ki,EventDispatcher:Bi,ExternalTexture:Au,ExtrudeGeometry:mr,Float32BufferAttribute:bt,FloatType:Fn,FogExp2:ml,FrontSide:ss,Frustum:gl,GLSL3:Rc,GreaterCompare:Sf,GreaterDepth:fa,GreaterEqualCompare:dl,GreaterEqualDepth:da,Group:ji,HalfFloatType:si,HemisphereLight:$f,IcosahedronGeometry:lo,ImageUtils:Cf,InstancedBufferAttribute:Lc,InstancedMesh:Ic,IntType:sl,KeepStencilOp:jo,Layers:pl,LessCompare:yf,LessDepth:ua,LessEqualCompare:hl,LessEqualDepth:or,Light:bl,LightShadow:Nu,Line:p0,LineBasicMaterial:Su,LineCurve:Pu,LineCurve3:Ff,LineDashedMaterial:q0,LinearFilter:tn,LinearMipmapLinearFilter:Ki,LinearMipmapNearestFilter:Qo,LinearSRGBColorSpace:Jr,LinearToneMapping:su,LinearTransfer:Zr,MOUSE:Ri,Material:us,MathUtils:xn,Matrix2:kc,Matrix3:st,Matrix4:St,MaxEquation:Qd,Mesh:_n,MeshBasicMaterial:ro,MeshDepthMaterial:Xf,MeshDistanceMaterial:Yf,MeshStandardMaterial:Qs,MinEquation:Kd,MirroredRepeatWrapping:ma,MixOperation:ff,MultiplyBlending:Cc,MultiplyOperation:iu,NearestFilter:jt,NearestMipmapLinearFilter:Lr,NearestMipmapNearestFilter:mf,NeutralToneMapping:cu,NeverCompare:xf,NeverDepth:la,NoBlending:gi,NoColorSpace:Ai,NoToneMapping:ei,NormalBlending:nr,NotEqualCompare:bf,NotEqualDepth:pa,Object3D:Ht,ObjectSpaceNormalMap:_f,OneFactor:ef,OneMinusConstantAlphaFactor:df,OneMinusConstantColorFactor:uf,OneMinusDstAlphaFactor:rf,OneMinusDstColorFactor:af,OneMinusSrcAlphaFactor:nu,OneMinusSrcColorFactor:nf,OrthographicCamera:co,PCFShadowMap:tr,PCFSoftShadowMap:Yd,PMREMGenerator:Bc,Path:Nc,PerspectiveCamera:An,Plane:hi,PlaneGeometry:Ls,PointLight:El,Points:Df,PointsMaterial:bu,PolyhedronGeometry:vl,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Iu,Quaternion:zi,R11_EAC_Format:ba,RED_GREEN_RGTC2_Format:$r,RED_RGTC1_Format:Ha,REVISION:nl,RG11_EAC_Format:Yr,RGBAFormat:zn,RGBAIntegerFormat:ul,RGBA_ASTC_10x10_Format:Fa,RGBA_ASTC_10x5_Format:Na,RGBA_ASTC_10x6_Format:Ua,RGBA_ASTC_10x8_Format:Oa,RGBA_ASTC_12x10_Format:za,RGBA_ASTC_12x12_Format:ka,RGBA_ASTC_4x4_Format:Aa,RGBA_ASTC_5x4_Format:Ta,RGBA_ASTC_5x5_Format:Ca,RGBA_ASTC_6x5_Format:Ra,RGBA_ASTC_6x6_Format:Pa,RGBA_ASTC_8x5_Format:La,RGBA_ASTC_8x6_Format:Ia,RGBA_ASTC_8x8_Format:Da,RGBA_BPTC_Format:Ba,RGBA_ETC2_EAC_Format:Sa,RGBA_PVRTC_2BPPV1_Format:xa,RGBA_PVRTC_4BPPV1_Format:va,RGBA_S3TC_DXT1_Format:kr,RGBA_S3TC_DXT3_Format:Br,RGBA_S3TC_DXT5_Format:Vr,RGBFormat:gu,RGB_BPTC_SIGNED_Format:Va,RGB_BPTC_UNSIGNED_Format:Ga,RGB_ETC1_Format:ya,RGB_ETC2_Format:Ma,RGB_PVRTC_2BPPV1_Format:_a,RGB_PVRTC_4BPPV1_Format:ga,RGB_S3TC_DXT1_Format:zr,RGFormat:os,RGIntegerFormat:cl,RawShaderMaterial:qf,Ray:pr,Raycaster:Kf,RedFormat:al,RedIntegerFormat:ll,ReinhardToneMapping:ru,RenderTarget:Rf,RepeatWrapping:Xr,ReverseSubtractEquation:Zd,SIGNED_R11_EAC_Format:Ea,SIGNED_RED_GREEN_RGTC2_Format:qa,SIGNED_RED_RGTC1_Format:Wa,SIGNED_RG11_EAC_Format:wa,SRGBColorSpace:cn,SRGBTransfer:At,Scene:If,ShaderChunk:lt,ShaderLib:Kn,ShaderMaterial:Gn,Shape:ao,ShapeUtils:Es,ShortType:du,Sphere:cs,SphereGeometry:yl,Spherical:zc,SplineCurve:Du,SrcAlphaFactor:tu,SrcAlphaSaturateFactor:lf,SrcColorFactor:tf,StaticDrawUsage:wf,SubtractEquation:Jd,SubtractiveBlending:Tc,TOUCH:Ti,TangentSpaceNormalMap:Xa,Texture:sn,TextureSource:fl,TorusGeometry:Ml,Triangle:Un,TubeGeometry:Sl,UVMapping:uu,Uint16BufferAttribute:xu,Uint32BufferAttribute:yu,UniformsLib:De,UniformsUtils:Wf,UnsignedByteType:yn,UnsignedInt101111Type:pu,UnsignedInt248Type:lr,UnsignedInt5999Type:fu,UnsignedIntType:ii,UnsignedShort4444Type:rl,UnsignedShort5551Type:ol,UnsignedShortType:ar,VSMShadowMap:Ks,Vector2:Ae,Vector3:X,Vector4:Ft,WebGLCoordinateSystem:jn,WebGLCubeRenderTarget:Fu,WebGLRenderTarget:kn,WebGLRenderer:ap,WebGLUtils:rp,WebGPUCoordinateSystem:cr,WebXRController:ea,ZeroFactor:jd,createCanvasElement:Af,error:_t,log:Pc,warn:tt,warnOnce:ws},Symbol.toStringTag,{value:"Module"})),Td={type:"change"},zu={type:"start"},lp={type:"end"},$o=new pr,Cd=new hi,Wx=Math.cos(70*xn.DEG2RAD),$t=new X,vn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pc=1e-6;class qx extends Qf{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new zi,this._lastTargetPosition=new X,this._quat=new zi().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zc,this._sphericalDelta=new zc,this._scale=1,this._panOffset=new X,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new X,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=Xx.bind(this),this._onPointerUp=$x.bind(this),this._onContextMenu=ty.bind(this),this._onMouseWheel=Kx.bind(this),this._onKeyDown=Qx.bind(this),this._onTouchStart=jx.bind(this),this._onTouchMove=ey.bind(this),this._onMouseDown=Jx.bind(this),this._onMouseMove=Zx.bind(this),this._interceptControlDown=ny.bind(this),this._interceptControlUp=iy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Td),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=$t.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<Wx?this.object.lookAt(this.target):(Cd.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(Cd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pc||this._lastTargetPosition.distanceToSquared(this.target)>pc?(this.dispatchEvent(Td),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$t.copy(s).sub(this.target);let r=$t.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Xx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $x(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lp),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Jx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case Ri.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case Ri.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(zu)}function Zx(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Kx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(zu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lp))}function Qx(n){this.enabled!==!1&&this._handleKeyDown(n)}function jx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(zu)}function ey(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function ty(n){this.enabled!==!1&&n.preventDefault()}function ny(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cr=new X;function Ln(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Cr.copy(e),Cr[i]=0,Cr.normalize();const c=.5*o/(o+a),u=1-Cr.angleTo(n)/l;return Math.sign(Cr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class ku extends Vi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new X,c=new X,u=new X(e,t,i).divideScalar(2).subScalar(r),g=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=g.length/6,_=new X,f=.5/o;for(let p=0,M=0;p<g.length;p+=3,M+=2)switch(l.fromArray(g,p),c.copy(l),c.x-=Math.sign(c.x)*f,c.y-=Math.sign(c.y)*f,c.z-=Math.sign(c.z)*f,c.normalize(),g[p+0]=u.x*Math.sign(l.x)+c.x*r,g[p+1]=u.y*Math.sign(l.y)+c.y*r,g[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[M+0]=Ln(_,c,"z","y",r,i),d[M+1]=1-Ln(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[M+0]=1-Ln(_,c,"z","y",r,i),d[M+1]=1-Ln(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[M+0]=1-Ln(_,c,"x","z",r,e),d[M+1]=Ln(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),d[M+0]=1-Ln(_,c,"x","z",r,e),d[M+1]=1-Ln(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),d[M+0]=1-Ln(_,c,"x","y",r,e),d[M+1]=1-Ln(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[M+0]=Ln(_,c,"x","y",r,e),d[M+1]=1-Ln(_,c,"y","x",r,t);break}}static fromJSON(e){return new ku(e.width,e.height,e.depth,e.segments,e.radius)}}function sy(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Wt;let c=0;for(let u=0;u<n.length;++u){const g=n[u];let h=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in g.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(g.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in g.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(g.morphAttributes[d])}if(e){let d;if(t)d=g.index.count;else if(g.attributes.position!==void 0)d=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const g=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let m=0;m<d.count;++m)g.push(d.getX(m)+u);u+=n[h].attributes.position.count}l.setIndex(g)}for(const u in r){const g=Rd(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,g)}for(const u in o){const g=o[u][0].length;if(g!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<g;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const m=Rd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Rd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Bn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const g=l/t;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<t;m++){const _=u.getComponent(h,m);a.setComponent(h+g,m,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function ry({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:l,sphere:c,cyl:u,torus:g,rod:h,sign:d,paperBoat:m,batchStatic:_,persist:f,say:p,refresh:M,chime:A,reduced:x}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],T=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),g([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const R=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],R),g([0,0,0],.36,.015,s.copper,R,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),g([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const P=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,P);for(const[w,C,V]of[[-.17,.23,-.5],[.17,.41,.5]]){const W=c([w,C,0],[.24,.035,.085],s.mint,P);W.rotation.z=V}const U=o([0,.95,0],P);c([0,0,0],.115,s.light,U),g([0,0,0],.28,.021,s.cream,U,[0,0,0]),g([0,0,0],.27,.021,s.copper,U,[0,Math.PI/2,0]);const O=[];for(let w=0;w<4;w++){const C=w*Math.PI/2,V=o([Math.cos(C)*.3,.13+Math.sin(C)*.12,Math.sin(C)*.3],P);h([0,-.15,0],[0,.2,0],.012,s.copper,V),c([0,.23,0],.065,s.cream,V),_(V,[]),O.push(V)}l([-.46,.2,.32],[.68,.12,.47],s.dark,v);const H=o([-.46,.29,.32],v);l([0,0,0],[.5,.025,.32],s.cream,H);for(const w of[-.23,.23])h([w,.016,-.14],[0,.016,.06],.009,s.copper,H);c([0,.027,.06],[.04,.015,.04],s.rust,H),d("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(R,[]),_(U,[]),_(P,[U,...O]),_(H,[]),_(v,[R,P,H]);const B=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);B.castShadow=!1;const I=o([0,0,0],e),z=m(I,[8.3,.14,3.5],1.05),G=o([0,.36,0],z),Y=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],G),$=c([0,.12,0],[.085,.13,.085],s.light,G),q=l([0,.09,0],[.23,.025,.16],s.cream,G);q.rotation.z=.2;const ne=[Y,$,q];_(z,[G]);const ee=new n.Vector3(8.3,.14,3.5),ue=new n.Vector3(8.45,.14,3.65),te=new n.Vector3(9.2,-2.7,6.5);let ae=-1,D=i.dockTrips>=2?1:.02;function y(){R.visible=i.dockTrips>=1,P.visible=i.dockTrips>=2,H.visible=i.dockTrips>=3,O.forEach((w,C)=>w.visible=i.dockTrips>=5+C*3),G.visible=i.dockPending,ne.forEach((w,C)=>w.visible=C===i.dockTrips%3),z.position.copy(i.dockPending?ue:ee)}y();function L(){if(!(i.boat>0))if(i.dockPending){const w=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(D=.02),f(),y(),p(w.line),A(330),M()}else i.boat=18,ae=-1,ne.forEach((w,C)=>w.visible=C===i.dockTrips%3),G.visible=!1,p("ну плыви. я тут."),M()}function K(w,C){if(i.boat>0){i.boat=Math.max(0,i.boat-w);const V=18-i.boat,W=V<7?0:V<11?1:2;W!==ae&&(ae=W,M()),V<2?z.position.lerpVectors(ee,ue,n.MathUtils.smoothstep(V,0,2)):V<7?z.position.lerpVectors(ue,te,n.MathUtils.smoothstep(V,2,7)):V<11?z.position.copy(te):V<16?z.position.lerpVectors(te,ue,n.MathUtils.smoothstep(V,11,16)):z.position.copy(ue),z.visible=V<7||V>=11,G.visible=V>=11,z.rotation.y=V>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,f(),z.visible=!0,y(),p("вернулся. с чем-то."),A(554),M())}z.rotation.z=x?0:Math.sin(C*1.7)*.035,i.boat===0&&(z.visible=!0,z.position.y=(i.dockPending?ue.y:ee.y)+Math.sin(C*1.2)*.02,z.rotation.y=i.dockPending?Math.PI+.2:0),R.position.y=.97+Math.sin(C*.9)*.055,R.rotation.y=C*.15,D=n.MathUtils.damp(D,1,1.1,w),P.scale.setScalar(D),U.rotation.y=x?0:C*.23,B.material.emissiveIntensity=i.dockPending?1.5+Math.sin(C*4)*1.1:1.2}function F(){if(i.boat>0){const w=18-i.boat;return{disabled:!0,action:w<7?"плывёт…":w<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const w=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:w===2?`${S[w].description} ${T[Math.floor((i.dockTrips-1)/3)%T.length]}`:S[w].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:I,gallery:v,beacon:B,launchOrCollect:L,update:K,card:F,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:z.position.toArray(),visible:z.visible,cargo:G.visible,stone:R.visible,plant:P.visible,plantScale:D,letter:H.visible,buds:O.filter(w=>w.visible).length})}}async function cp(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function oy({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),l="beznogim-public-notes-v1";let c="all",u=!s.matches,g=!1,h=!1,d=!1,m=!1,_=!1,f=0,p=null,M=0,A=0,x=0,b=!1;try{const Z=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");Z!==null&&(u=Z==="open")}catch{}const S=(Z,ce,ye)=>{const be=document.createElement(Z);return ce&&(be.className=ce),ye&&(be.textContent=ye),be},T=S("aside","resident-history");T.id="resident-history",T.setAttribute("aria-label","История мыслей и действий Головы");const v=S("div","history-heading"),R=S("div"),P=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),U=S("h3","","на полях"),O=S("span","history-eyes");O.setAttribute("aria-hidden","true"),U.append(O),R.append(P,U,S("p","history-subtitle","мысли, дела и прочее"));const H=S("button","history-close","−");H.type="button",H.setAttribute("aria-label","Свернуть историю"),H.title="Свернуть историю",v.append(R,H);const B=S("div","history-filters");B.setAttribute("role","group"),B.setAttribute("aria-label","Показывать в истории");const I=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[Z,ce]of I){const ye=S("button","",ce);ye.type="button",ye.dataset.filter=Z,ye.setAttribute("aria-pressed",String(c===Z)),ye.onclick=()=>{c=Z,C(!1),G.scrollTop=0;for(const be of B.children)be.setAttribute("aria-pressed",String(be.dataset.filter===c))},B.append(ye)}const z=S("button","history-new");z.type="button",z.hidden=!0;const G=S("div","history-scroll");G.tabIndex=0,G.setAttribute("aria-label","Записи, от новых к старым");const Y=S("ol","history-list"),$=S("p","history-empty","собираю заметки…");G.append(Y,$);const q=S("div","history-foot"),ne=S("span","history-live","подключаюсь…"),ee=S("span","history-count"),ue=S("button","history-retry","повторить подключение");ue.type="button",ue.hidden=!0,ue.onclick=()=>{k(),window.dispatchEvent(new Event("beznogim:retry"))},q.append(ne,ee,ue),T.append(v,B,z,G,q);const te=S("button","history-toggle");te.type="button",te.setAttribute("aria-controls",T.id);const ae=S("span","","на полях"),D=S("span","history-badge");D.hidden=!0,te.append(S("span","history-toggle-icon","◌"),ae,D),document.body.append(T),document.querySelector(".footer-actions").append(te);function y(Z,ce=!0){if(u=Z,T.hidden=!u,te.hidden=u,te.setAttribute("aria-expanded",String(u)),ce)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(G.scrollTop<30?L():K(),H.focus({preventScroll:!0})):ce&&te.focus({preventScroll:!0})}T.hidden=!u,te.hidden=u,te.setAttribute("aria-expanded",String(u)),te.onclick=()=>{y(!0),(m||!h)&&k()},H.onclick=()=>y(!1),s.addEventListener("change",()=>{let Z=!s.matches;try{const ce=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ce!==null&&(Z=ce==="open")}catch{}y(Z,!1)}),document.addEventListener("keydown",Z=>{Z.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&y(!1)});function L(){f=0,D.hidden=!0,z.hidden=!0}function K(){D.textContent=String(f),D.hidden=!f,z.textContent=`↑ к новым · ${f}`,z.hidden=!(u&&f)}z.onclick=()=>{G.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),L()},G.addEventListener("scroll",()=>{G.scrollTop<30&&L()},{passive:!0});function F(Z){return c==="all"||(c==="thoughts"?Z.type==="muse"||Z.type==="say":Z.type!=="muse"&&Z.type!=="say")}function w(Z,ce){const ye=Z.type==="muse"||Z.type==="say",be=S("li",`history-entry ${ye?"history-thought":"history-action"}${ce?" is-new":""}`);be.dataset.eventId=String(Z.id),be.dataset.type=Z.type;const Q=S("div","history-meta"),ze=S("time","",r.format(Z.time*1e3));ze.dateTime=new Date(Z.time*1e3).toISOString(),ze.title=o.format(Z.time*1e3)+" · "+ze.textContent+" мск";const Te={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return Q.append(S("span","",Te[Z.type]||"во дворе"),ze),be.append(Q,S("p","",Z.text)),be}function C(Z,ce=new Set){const ye=G.scrollTop>30,be=G.getBoundingClientRect().top,Q=ye?[...Y.querySelectorAll("[data-event-id]")].find(pe=>pe.getBoundingClientRect().bottom>be):null,ze=Q==null?void 0:Q.dataset.eventId,Te=Q==null?void 0:Q.getBoundingClientRect().top,J=G.scrollTop,E=document.createDocumentFragment();let le="";const he=[...i.values()].sort((pe,Ee)=>Ee.id-pe.id).filter(F);for(const pe of he){const Ee=o.format(pe.time*1e3);if(Ee!==le){const Ce=S("li","history-day",Ee);E.append(Ce),le=Ee}E.append(w(pe,Z&&ce.has(pe.id)&&!ye))}if(Y.replaceChildren(E),$.hidden=he.length>0,$.textContent=m?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!he.length&&($.textContent="в этом фильтре пока нет записей."),ee.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",ue.hidden=!(m||!h&&!d),ue.disabled=d,ze){const pe=Y.querySelector(`[data-event-id="${ze}"]`);G.scrollTop=J+(pe?pe.getBoundingClientRect().top-Te:0)}else ye||(G.scrollTop=0)}function V(Z,ce=!1){if(!Z||!Array.isArray(Z.entries))return!1;const ye=Math.max(0,...i.keys()),be=new Set;let Q=0,ze=0;for(const Te of Z.entries)!Te||typeof Te!="object"||!Number.isSafeInteger(Te.id)||Te.id<1||!Number.isFinite(Te.time)||Math.abs(Te.time)>864e10||!a.has(Te.type)||typeof Te.text!="string"||!Te.text.trim()||(ze++,i.has(Te.id)||(b=!0,i.set(Te.id,{id:Te.id,time:Te.time,type:Te.type,text:Te.text.slice(0,280)}),be.add(Te.id),Te.id>ye&&F(Te)&&Q++));if(Z.entries.length&&!ze)return!1;if(_=_||!!Z.has_older||!!Z.has_more||i.size>t,i.size>t){const Te=[...i.keys()].sort((J,E)=>J-E);for(const J of Te.slice(0,i.size-t))i.delete(J)}return g&&!ce&&Q&&(!u||G.scrollTop>30)&&(f+=Q,K()),(be.size||!g)&&C(g&&!ce,be),!0}function W(){if(!(!i.size||!b)){b=!1,A=Date.now();try{localStorage.setItem(l,JSON.stringify({version:1,saved_at:A,has_older:_,entries:[...i.values()]}))}catch{}}}function ie(){try{const Z=localStorage.getItem(l);if(!Z||Z.length>1e6)return;const ce=JSON.parse(Z);if(ce.version!==1||!Number.isFinite(ce.saved_at)||ce.saved_at<=0)return;V(ce,!0),A=ce.saved_at,g=i.size>0,b=!1}catch{}}async function k(){if(!d){d=!0,x=performance.now(),ue.disabled=!0;try{const Z=await cp(n+"/api/history");if(!V(Z,!0))throw Error("invalid-public-history");h=!0,g=!0,m=!1,W(),C(!1)}catch{m=!0,C(!1)}finally{d=!1,ue.disabled=!1,j()}}}function j(){var ye;const Z=!p||performance.now()-M>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";T.classList.toggle("history-offline",Z);const ce=A?` · сохранено ${r.format(A)} мск`:" · записи на устройстве";ne.textContent=Z?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",Z&&i.size&&(ne.textContent+=ce),!Z&&m&&(ne.textContent+=" · архив не дошёл"),ne.title=((ye=p==null?void 0:p.action)==null?void 0:ye.label)||""}function se(Z){var ze;const ce=Math.max(0,...i.keys()),ye=Array.isArray((ze=Z.history)==null?void 0:ze.entries)?Z.history.entries:[];p=Z,M=performance.now(),V(Z.history)&&i.size&&(g=!0,W()),j();const be=ye.filter(Te=>Te&&Number.isSafeInteger(Te.id)).map(Te=>Te.id);(ce&&be.length&&Math.min(...be)>ce&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&k()}window.addEventListener("beznogim:state",Z=>se(Z.detail)),window.__beznogimState&&se(window.__beznogimState),ie(),C(!1),j(),k(),window.addEventListener("online",()=>{(m||!h)&&k()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(m||!h)&&k()}),setInterval(()=>{j(),(m||!h)&&k()},15e3)}function ay({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:l}){let c=null,u=0,g=0,h=!1,d=!1,m=!1,_=0,f=null,p=null,M=null,A="",x=!0;const b=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const T=document.createElement("span");T.className="thought-kicker",T.textContent="про себя";const v=document.createElement("p");S.append(T,v),document.body.append(S);const R=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),P=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";oy({api:P,enabled:R});const U=document.querySelector(".territory-nav"),O=document.createElement("div");O.className="resident-strip",O.hidden=!0;const H=document.createElement("span");H.className="resident-status",H.textContent="подключаюсь к голове";const B=document.createElement("div");B.className="resident-vitals",B.hidden=!0,B.setAttribute("aria-label","Самочувствие Головы");const z=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(w=>{const C=document.createElement("div");return C.className="need-meter",C.dataset.need=w.key,C.style.setProperty("--need-color",w.color),C.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${w.icon}</svg><div class="need-detail"><div class="need-heading"><b>${w.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${w.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,B.append(C),{key:w.key,card:C,value:C.querySelector(".need-value"),bar:C.querySelector(".need-track")}}),G=document.createElement("button");G.type="button",G.textContent="к голове",G.onclick=()=>{d=!1,m=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),te()};const Y=document.createElement("button");Y.type="button",Y.textContent="поиграть самому",Y.onclick=()=>{d=!d,m=!1,te()};const $=document.createElement("button");$.type="button",$.textContent="мысли",$.setAttribute("aria-pressed","true"),$.onclick=()=>{x=!x,$.setAttribute("aria-pressed",String(x))},O.append(H,B,G,Y,$),U.append(O);function q(){return Date.now()/1e3+g}function ne(){return c&&q()-c.heartbeat<60&&c.resident_status!=="stopped"}function ee(){return h&&c&&!d}function ue(){var V,W;const w=(W=(V=c==null?void 0:c.mechanics)==null?void 0:V.vitals)==null?void 0:W.public;if(!w){B.hidden=!0;return}const C=ie=>Math.max(0,Math.min(100,Math.round(Number(ie)||0)));B.hidden=!1;for(const ie of z){const k=C(w[ie.key]);ie.value.textContent=String(k),ie.bar.setAttribute("aria-valuenow",String(k)),ie.card.style.setProperty("--need-fill",String(k/100)),ie.card.dataset.low=String(k<=20)}}function te(){const w=d?"ты в песочнице":h?ne()?c!=null&&c.action&&c.action.ends>q()?c.action.label:(c==null?void 0:c.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";w!==A&&(A=w,H.textContent=w),Y.textContent=d?"вернуться к голове":"поиграть самому",G.setAttribute("aria-pressed",String(m))}function ae(w){var V,W;if(!w||w.version!==1||!Array.isArray(w.position)||w.position.length!==3||!w.position.every(Number.isFinite)||!w.objects||!Number.isFinite(w.server_time)||!Number.isFinite(w.heartbeat)||c&&(w.server_time<c.server_time||w.server_time===c.server_time&&Number.isFinite(w.revision)&&Number.isFinite(c.revision)&&w.revision<c.revision))return;if(g=w.server_time-Date.now()/1e3,c=w,u=performance.now(),h=!0,O.hidden=!1,f&&((V=w.release)!=null&&V.commit)&&f!==w.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}f=((W=w.release)==null?void 0:W.commit)||f;const C=w.speech;C&&C.time>_&&C.until>q()&&(_=C.time,d||a(C.text)),window.__beznogimState=w,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:w})),ue(),te()}function D(){const w=c.action;if((w==null?void 0:w.kind)==="move"){const C=Math.max(0,Math.min(1,(q()-w.started)/Math.max(.001,w.ends-w.started)));return w.from.map((V,W)=>V+(w.to[W]-V)*C)}return c.position}function y(){if(!ee())return;const w=c.objects;w.engine&&(t.running=!!w.engine.running),w.workshop&&(t.roof=w.workshop.roof_open?1:0),w.radio&&(t.radio=w.radio.station,p!==t.radio&&(p=t.radio,o())),w.garden&&(t.harvest=w.garden.harvest,M!==null&&t.harvest>M&&l(),M=t.harvest);const C=c.action;t.brew=(C==null?void 0:C.effect)==="brew"?Math.max(0,C.ends-q()):0,t.loop=0,te()}function L(){if(!ee()){S.hidden=!0;return}const w=D();n.position.set(w[0],w[1]+Math.sin(q()*1.4)*.1,w[2]),e.set(...w),m&&i.target.lerp(n.position,.08);const C=c.musing;if(x&&ne()&&(C!=null&&C.text)&&C.until>q()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==C.text&&(v.textContent=C.text),b.copy(n.position),b.y+=1.8,b.project(s),b.z>=-1&&b.z<=1&&Math.abs(b.x)<1&&Math.abs(b.y)<1){S.hidden=!1;const V=S.offsetWidth,W=S.offsetHeight,ie=Math.max(V/2+12,Math.min(innerWidth-V/2-12,(b.x+1)*innerWidth/2));let k=(1-b.y)*innerHeight/2-18;const j=U.getBoundingClientRect(),se=ie-V/2<j.right&&ie+V/2>j.left?j.bottom+12:18,Z=k-W<se;Z&&(k=Math.max(se+W,(1-b.y)*innerHeight/2+70+W)),k=Math.min(innerHeight-70,Math.max(W+18,k)),S.classList.toggle("below-head",Z),S.style.transform=`translate3d(${Math.round(ie)}px,${Math.round(k)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function K(){ee()&&(d=!0,m=!1,te())}function F(){if(!R)return;O.hidden=!1;let w=!1;async function C(){if(!w){w=!0;try{const W=await cp(P+"/api/state");ae(W),c&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!c||performance.now()-u>35e3)&&(h=!1),te()}finally{w=!1}}}try{const W=new EventSource(P+"/api/events");W.addEventListener("state",ie=>{try{ae(JSON.parse(ie.data))}catch{}}),W.onerror=()=>{h=!1,te()}}catch{h=!1,te()}C();function V(){(!h||!c||performance.now()-u>3e4)&&C()}window.addEventListener("online",V),window.addEventListener("beznogim:retry",C),document.addEventListener("visibilitychange",()=>{document.hidden||V()}),setInterval(()=>{c&&performance.now()-u>35e3&&(h=!1),te(),V()},15e3)}return i.addEventListener("start",()=>{m=!1,te()}),F(),{sync:y,place:L,localPlay:K,unfollow:()=>{m=!1},watching:ee,inspect:()=>{var w;return{connected:h,sandbox:d,follow:m,alive:!!ne(),revision:c==null?void 0:c.revision,release:(w=c==null?void 0:c.release)==null?void 0:w.commit,action:c==null?void 0:c.action,musing:c==null?void 0:c.musing,thoughtVisible:!S.hidden,position:c?D():null}}}}const ly=120,cy=24,uy=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"settled",name:"шовная"},{id:"0:-2",x:0,z:-48,status:"settled",name:"малый передатчик"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"settled",name:"облачная перегонная"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Jn={size:ly,sectorSize:cy,sectors:uy};function hy({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const l=new ji;l.name="unsettled-territory",n.add(l);const c=Jn.size/2,u=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],g=new ao;u.forEach(([P,U],O)=>O?g.lineTo(P,-U):g.moveTo(P,-U)),g.closePath();const h=new mr(g,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const d=new _n(h,new Qs({color:"#233e35",roughness:1}));d.receiveShadow=!0,l.add(d);let m=8409;const _=()=>(m=m*1664525+1013904223>>>0)/4294967296,f=new Ic(new lo(1,0),new Qs({color:"#8a9980",roughness:1}),150),p=new Ic(new Ps(1,1,4),new Qs({color:"#9aa880",roughness:1}),850),M=new Ht;for(const[P,U,O]of[[f,150,!0],[p,850,!1]]){for(let H=0;H<U;H++){let B,I;do B=(_()-.5)*(Jn.size-10),I=(_()-.5)*(Jn.size-10);while(Math.abs(B)<11&&Math.abs(I)<9);const z=O?.15+_()*.48:.12+_()*.42;M.position.set(B,-1.7+z*.25,I),M.rotation.set(0,_()*6.28,O?_()*.25:0),M.scale.set(O?z*1.3:.07,z,O?z:.07),M.updateMatrix(),P.setMatrixAt(H,M.matrix)}P.instanceMatrix.needsUpdate=!0,l.add(P)}const A=new Qs({color:"#c1b692",roughness:1});for(let P=0;P<16;P++){const U=new _n(new Vi(1.15,.12,.65),A);U.position.set(-.6,-.06-P*.105,5.8+P*.7),U.receiveShadow=!0,l.add(U)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const b=document.createElement("dialog");b.id="territory-dialog",b.setAttribute("aria-labelledby","territory-title"),b.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. К востоку от почтового моста четыре карты переливают облако за шестнадцать игровых часов. Севернее вилки шовная держит голову по швам; к востоку от неё малый передатчик выводит самомнение через HDMI. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(b);const S=b.querySelector("#territory-grid");for(const P of Jn.sectors){const U=document.createElement("button");U.type="button",U.dataset.sector=P.id,U.className=P.status==="settled"?"settled":"",U.textContent=P.status==="settled"?`● ${P.id==="0:0"?"двор":P.name}`:`· ${P.id}`,U.setAttribute("aria-label",`${P.name}, ${P.id}`),U.onclick=()=>{b.close(),s(P.x,P.z,P.status==="settled")},S.append(U)}document.querySelector("#territory-map").onclick=()=>b.showModal(),document.querySelector("#world-overview").onclick=r,b.querySelector("#territory-close").onclick=()=>b.close(),b.querySelector("#territory-home").onclick=()=>{b.close(),o()};const T=x.querySelector("#territory-location");let v="";function R(){const P=a()||t.target,U=Math.round(P.x/Jn.sectorSize),O=Math.round(P.z/Jn.sectorSize),H=`${U}:${O}`;if(H!==v){v=H;const B=Jn.sectors.find(I=>I.id===H);T.textContent=`${(B==null?void 0:B.status)==="settled"?B.name:"свободная земля"} · ${H}`;for(const I of S.children)I.classList.toggle("current",I.dataset.sector===H)}}return{half:c,update:R,inspect:()=>({size:Jn.size,sectorSize:Jn.sectorSize,sectors:Jn.sectors.length,settled:Jn.sectors.filter(P=>P.status==="settled").length,visible:n.visible,sector:v})}}function dy({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:g,sign:h,paperBoat:d,batchStatic:m,changed:_,chime:f}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},A=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const b=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,b),a([0,.46,0],[1.22,.08,1.3],s.dark,b);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const Z of[-.62,.62])for(const ce of[-.64,.64])u([Z,.46,ce],[Z,1.45,ce],.024,s.copper,b);for(const Z of[-.62,.62])a([Z,.96,0],[.018,.95,1.28],S,b);a([0,.96,-.64],[1.24,.95,.018],S,b);const T=o([0,1.45,-.64],b);for(const Z of[-.62,.62])u([Z,0,0],[Z,.36,.64],.026,s.copper,T);for(const Z of[-.62,.62])u([Z,.36,.64],[Z,0,1.28],.026,s.copper,T);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,T);const v=a([0,.18,.32],[1.26,.025,.72],S,T);v.rotation.x=-.51;const R=a([0,.18,.96],[1.26,.025,.72],S,T);R.rotation.x=.51;const P=o([0,.52,0],b);c([0,.2,0],.026,.4,s.leaf,P);for(const Z of[-1,1]){const ce=l([Z*.15,.27,0],[.22,.055,.09],s.leaf,P);ce.rotation.z=Z*.35}const U=l([0,.25,.12],[.23,.16,.27],s.copper,P),O=l([.42,.58,.46],[.15,.1,.18],s.copper,b);O.visible=M.wins>0;const H=o([-.76,.7,.69],b);a([0,.28,0],[.13,.66,.06],s.cream,H);const B=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),H);l([0,-.06,.04],.065,s.rust,H),h("ПАРНИК",[0,.3,.716],.93,.22,b,{size:49});const I=g([0,2.05,0],.46,.016,s.mint,b);I.visible=M.trace;const z=[];for(let Z=0;Z<6;Z++)z.push(l([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),b));m(b,[T,P,H,I,O,...z]),m(T,[]),m(P,[U]),m(H,[B]);let G=0,Y=0;function $(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),G=0,_()}function q(Z){if(M.mode!=="playing")return;const ce={heat:2,wait:0,vent:-2};Z in ce&&(M.temp+=A[M.turn]+ce[Z],M.turn++,M.temp>6?(M.mode="hot",G=3,f(110)):M.temp<3?(M.mode="cold",f(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),O.visible=!0,x(),f(660)),_())}function ne(){let Z="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(Z=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${A[M.turn]>0?"+":""}${A[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(Z=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(Z=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(Z="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:Z,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const ee=o([0,0,0],t);ee.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ee),a([0,-.42,0],[6.8,.08,5.6],s.dark,ee);for(const Z of[-3.2,3.2])for(const ce of[-2.6,2.6])u([Z,-.4,ce],[Z,4,ce],.055,s.copper,ee);for(const Z of[-3.2,3.2])u([Z,4,-2.6],[Z,5.7,0],.055,s.copper,ee),u([Z,5.7,0],[Z,4,2.6],.055,s.copper,ee);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ee),a([-3.2,1.8,0],[.025,4.4,5.2],S,ee),a([0,1.8,-2.6],[6.4,4.4,.025],S,ee),h("СОН / 01",[0,-.12,2.93],2.2,.38,ee,{size:52});const ue=o([0,1.6,0],ee);l([0,0,0],1.16,r("#5f9c85"),ue);for(let Z=0;Z<10;Z++){let ce=Z*2.4;const ye=l([Math.sin(ce)*.95,Math.cos(Z*1.2)*.6,Math.cos(ce)*.95],[.35,.2,.3],s.leaf,ue);ye.rotation.y=ce}g([0,0,0],1.32,.028,s.copper,ue,[.4,0,.2]);const te=o([0,1.6,0],ee),ae=[];for(let Z=0;Z<28;Z++){const ce=a([0,0,0],[.53,.11,.32],Z%4?s.cream:s.concrete,te);ae.push(ce)}const D=d(ee,[1.7,-.05,1],1.65),y=l([0,.65,0],.13,s.cream,D),L=o([0,.65,0],D);L.visible=!1;for(let Z=0;Z<8;Z++){let ce=Z/8*Math.PI*2;u([Math.sin(ce)*.27,Math.cos(ce)*.27,0],[Math.sin(ce)*.5,Math.cos(ce)*.5,0],.026,s.light,L)}const K=i.clone(!0);ee.add(K),K.scale.setScalar(.72),K.position.set(-2,1,1.3),K.rotation.z=-.25;const F=o([-2,-.05,1.3],ee);c([0,0,0],.55,.3,s.cream,F),g([.58,0,0],.25,.04,s.copper,F,[0,0,0]);const w=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ee);w.rotation.y=.2;let C=0,V=0,W=!1;m(ee,[ue,te,D,K]),m(ue,[]);function ie(){W=!0,C=0,V=0,ee.visible=!0,e.visible=!1,_()}function k(){W=!1,ee.visible=!1,e.visible=!0,_()}function j(){W&&(C===3?(C=0,V=0):(C++,f(220+C*110),C===3&&(M.trace=!0,I.visible=!0,x())),_())}function se(Z,ce){Y=n.MathUtils.damp(Y,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,Z),T.rotation.x=Y,P.scale.y=n.MathUtils.damp(P.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,Z),U.visible=M.mode==="won",B.scale.y=.3*Math.max(.05,M.temp/8),B.position.y=-.015+M.temp/8*.15,I.rotation.z=Math.sin(ce*.3)*.15,G=Math.max(0,G-Z),z.forEach((ye,be)=>{ye.visible=G>0;const Q=(3-G+be*.18)%1.5;ye.position.set(Math.sin(be*2)*Q*.35,1.5+Q,Math.cos(be*2)*Q*.35),ye.scale.setScalar(.1*(.4+Q))}),W&&(V=n.MathUtils.damp(V,C,2,Z),ue.rotation.y=ce*.08,ae.forEach((ye,be)=>{const Q=be/28*Math.PI*2+ce*.055*Math.min(1,V),ze=Math.min(1,V);ye.position.set(Math.sin(Q)*(1.8+ze*.35),Math.cos(Q)*(1.8-ze*1.5),Math.cos(Q)*ze*1.5),ye.rotation.set(0,-Q*ze,Math.PI/2-Q*(1-ze))}),te.rotation.y=V*.32,D.position.y=-.05+V*1.12,D.position.x=1.7-V*.32,D.rotation.y=.2+V*.35,y.scale.setScalar(.13*(1+Math.max(0,V-2)*2)),L.visible=V>2.2,L.rotation.z=ce*.22,K.position.y=1+Math.sin(ce*.8)*.06)}return{house:b,start:$,step:q,card:ne,update:se,enter:ie,exit:k,breathe:j,inspect:()=>({...M,weather:[...A],dream:W,dreamStep:C,phase:V,lidAngle:Y,rootVisible:e.visible,dreamVisible:ee.visible,boatY:D.position.y,rays:L.visible})}}function fy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,batchStatic:m,chime:_}){const f=a([0,0,0],e);f.name="dream-02-water-sleeps",f.visible=!1;const p=r("#c39860"),M=r("#e0c58b"),A=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),b=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,f),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,f);for(let D=0;D<13;D++){const y=.15+D/12*Math.PI*1.42,L=Math.sin(y)*3.65,K=Math.cos(y)*3.65,F=l([L,.48,K],[.75,1.08,.19],M,f);F.rotation.y=y,D%3===0&&h([L,.48,K],.15,.048,A,f,[Math.PI/2,0,0]).rotation.set(0,y,0)}d("СОН / 02",[0,-.18,3.95],2.2,.38,f,{size:52});const S=a([1.08,.12,.4],f);l([0,0,0],[2.55,.22,1.55],A,S);for(let D of[-1.15,1.15])for(let y of[-.63,.63])l([D,-.23,y],[.12,.5,.12],s.copper,S);for(let D of[-.79,.79])l([0,.36,D],[2.72,.65,.14],b,S);for(let D of[-1.32,1.32])l([D,.38,0],[.14,.68,1.55],b,S);const T=l([0,.18,0],[2.49,.045,1.49],x,S),v=c([-.84,.38,0],[.34,.14,.54],s.cream,S),R=i.clone(!0);f.add(R),R.scale.setScalar(.54),R.position.set(.3,.83,.45),R.rotation.z=-.35;const P=a([0,0,0],R);for(const D of[-.23,.23])c([D,.2,.611],[.15,.11,.025],s.black,P),l([D,.2,.64],[.2,.018,.012],s.copper,P);const U=a([-2.05,2.35,-.38],f);u([0,0,0],.52,.56,s.cream,U),u([0,.29,0],.44,.022,A,U),h([.55,0,0],.24,.055,s.copper,U,[0,0,0]),d("ПУСТО",[-2.03,2.8,-.38],1.1,.28,f,{size:52});const O=[];for(let D=0;D<7;D++){const y=a([-1.92+D*.33,.2+D*.29,1.45-D*.29],f);l([0,0,0],[.7,.13,.42],s.cream,y);for(let L of[-.2,.2])l([0,.07,L],[.7,.12,.05],s.copper,y);O.push(y)}const H=Array.from({length:16},()=>c([0,0,0],[.07,.1,.07],x,f)),B=Array.from({length:3},(D,y)=>{const L=h([.65,.2,0],.23+y*.16,.012,s.mint,S);return L.scale.z=.6,L}),I=a([-.8,3.65,-1.7],f);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,I),I.rotation.z=.55;const z=[];for(let D=0;D<9;D++){const y=D*2.4;z.push(c([Math.sin(y)*3,3.2+D%3*.28,Math.cos(y)*2],.025,s.cream,f))}let G=!1,Y=0,$=0,q=!1;try{q=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const ne=a([26.6,-.86,.65],t);ne.visible=q,u([0,0,0],.15,.2,s.cream,ne),u([0,.104,0],.125,.014,x,ne),h([.16,0,0],.07,.02,s.copper,ne,[0,0,0]),m(f,[S,R,U,...O,...H,...z,I]),m(S,[T,v,...B]),m(U,[]),m(ne,[]),O.forEach(D=>m(D,[]));function ee(){G=!0,Y=0,$=0,f.visible=!0,t.visible=!1,ae(0,0)}function ue(){G=!1,f.visible=!1,t.visible=!0}function te(){if(G&&(Y=Y===3?0:Y+1,_(165+Y*55),Y===3)){q=!0,ne.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function ae(D,y){G&&($=n.MathUtils.damp($,Y,2.4,D),O.forEach((L,K)=>{const F=Math.min(1,$/2),w=-1.92+K*.33,C=.2+K*.29,V=1.45-K*.29;L.position.set(n.MathUtils.lerp(w,-1.72+K*.39,F),n.MathUtils.lerp(C,1.95-K*.22,F),n.MathUtils.lerp(V,-.32+K*.055,F)),L.rotation.z=-F*.21}),T.position.y=.18+$*.09,v.position.y=.38+$*.09,R.position.y=.83+$*.09+Math.sin(y*.6)*.025,R.rotation.z=-.35-$*.13,U.rotation.z=-Math.min(1,$)*.45,H.forEach((L,K)=>{const F=(y*.16+K/16)%1;L.visible=$>.05,L.position.set(-1.7+F*3,2.14-F*1.62,-.32+F*.25),L.scale.set(.07,.1+Math.sin(F*Math.PI)*.04,.07)}),B.forEach((L,K)=>{L.visible=$>.4,L.position.y=T.position.y+.034,L.scale.setScalar(1+Math.sin(y*.5+K)*.08),L.scale.z*=.6}),I.rotation.z=.55+$*.21,P.visible=$>1.8)}return{enter:ee,exit:ue,pour:te,update:ae,inspect:()=>({active:G,step:Y,phase:$,trace:q,roomVisible:f.visible,rootVisible:t.visible,waterY:T.position.y,sleeperY:R.position.y,channel:O.map(D=>D.position.toArray()),droplets:H.filter(D=>D.visible).length})}}function py({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const l=e([0,0,0],n);l.visible=!1;for(const d of[-.23,.23])t([d,.2,.611],[.15,.11,.025],r.black,l),i([d,.2,.64],[.2,.018,.012],r.copper,l);let c=null,u=0;function g(d){c=d,u=Number(d.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:d})=>g(d)),window.__beznogimState&&g(window.__beznogimState);function h(d){const m=c==null?void 0:c.action;a.visible=!!d&&(m==null?void 0:m.kind)==="sleep"&&Number(m.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),l.visible=a.visible}return{update:h,inspect:()=>{var d;return{visible:a.visible,ends:((d=c==null?void 0:c.action)==null?void 0:d.kind)==="sleep"?c.action.ends:null}}}}const Nr=Object.freeze([1,2,3,4,5,7]),Hc=()=>({phase:"sorting",places:[0,0,0,0,0,0],progress:0});function Ka(n){return[1,2].map(e=>n.places.reduce((t,i,s)=>t+(i===e?Nr[s]:0),0))}function Wc(n){const[e,t]=Ka(n);return n.places.every(i=>i!==0)&&e===t}function my(n,e){return n.phase==="sorting"&&Number.isInteger(e)&&e>=0&&e<6?{...n,places:n.places.map((t,i)=>i===e?(t+1)%3:t)}:n}function gy(n){return n.phase==="flying"?Hc():n.phase==="sorting"&&Wc(n)?{...n,phase:"unfolding",progress:0}:n}function _y(n,e){if(n.phase!=="unfolding"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return{...n,progress:t,phase:t===1?"flying":"unfolding"}}function qc(n){const e=n.phase==="flying"?1:n.phase==="unfolding"?n.progress:0,t=e*e*(3-2*e),[i,s]=Ka(n);return{open:t,headY:.85+t*2.25,waterTilt:t*Math.PI/2,waterY:-.3+t*2.5,lean:(s-i)/22*.18}}function vy(n,e){const t=n.places[e],i=qc(n).open;return t===0?[-3+e*1.2,.15,2.85]:[(t===1?-2.1:2.1)+(e%3-1)*.35,.9+Math.floor(e/3)*.45+i*(2.1+e*.12),.5+e%2*.35-i*.8]}function xy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,tube:u,torus:g,sign:h,batchStatic:d,chime:m,changed:_}){const f=o([0,0,0],e);f.name="dream09-ears-for-the-shore",f.visible=!1;const p=r("#cb9e8d"),M=r("#936e73"),A=r("#e6d5ad"),x=r("#649a9a",{metalness:.25,roughness:.3}),b=r("#334e59"),S=o([0,-.3,-.9],f);a([0,-.16,0],[8.1,.2,4.7],b,S),a([0,0,0],[7.8,.09,4.4],x,S);for(let te=0;te<7;te++)g([0,.07,0],.35+te*.325,.016,A,S);function T(te,ae,D,y){const L=document.createElement("canvas");L.width=L.height=128;const K=L.getContext("2d");K.fillStyle="#e4d8b7",K.fillRect(0,0,128,128),K.fillStyle="#334e59",K.font="bold 96px monospace",K.textAlign="center",K.textBaseline="middle",K.fillText(te,64,68);const F=new n.CanvasTexture(L);F.colorSpace=n.SRGBColorSpace;const w=new n.Mesh(new n.PlaneGeometry(D,D),new n.MeshBasicMaterial({map:F,side:n.DoubleSide}));return w.position.set(...ae),w.rotation.y=Math.PI/4,y.add(w),w}const v=[];for(const te of[-1,1]){const ae=o([te*2.1,1.9,0],f);v.push(ae);const D=o([0,0,0],ae);D.scale.x=te,l([0,0,0],[.87,1.67,.24],p,D),l([0,.1,.2],[.65,1.33,.17],M,D),u([[.2,-1.4,.18],[.7,-.9,.2],[.8,.45,.18],[.55,1.4,.14],[-.35,1.5,.12],[-.7,.7,.2],[-.6,-.25,.3],[-.15,-.55,.4],[.2,-1.4,.18]],.1,A,D),u([[.22,-.55,.45],[.42,.1,.4],[.28,.9,.4],[-.23,1.02,.4],[-.4,.45,.43],[-.1,.1,.48],[.2,.22,.5]],.095,p,D),l([-.13,-.4,.45],[.23,.34,.07],s.black,D),l([-.45,-.5,.5],[.19,.28,.12],p,D),c([0,-1.8,0],.38,.25,s.copper,ae),T(te===-1?"Л":"П",[0,-1.5,.6],.34,ae)}const R=i.clone(!0);R.scale.setScalar(.57),f.add(R);const P=[],U=[],O=[],H=[];for(let te=0;te<6;te++){const ae=o([0,0,0],f);P.push(ae),H.push(new n.Vector3),l([0,0,0],[.19+Nr[te]*.023,.16,.23],te%2?s.concrete:s.copper,ae);const D=T(String(Nr[te]),[0,.43,.1],.42,ae);U.push(D);const y=o([0,-.2,0],ae);O.push(y);for(let L=0;L<Nr[te];L++)g([0,L*.045,0],.32,.012,A,y)}const B=l([0,.1,-1],.28,s.mint,f);h("НЕ ПО ТЕГАМ",[0,-.05,3.4],2.2,.3,f,{size:46});const I=o([3.15,.2,3.2],t);g([0,.12,0],.12,.035,A,I,[0,0,0]),l([0,0,0],[.12,.09,.1],s.concrete,I),I.visible=!1,d(S,[]),v.forEach(te=>d(te,[])),P.forEach((te,ae)=>d(te,[U[ae],O[ae]])),O.forEach(te=>d(te,[])),d(I,[]);let z=Hc(),G=!1,Y=!1;try{Y=JSON.parse(localStorage.getItem("beznogim-dream09-v1")||"{}").trace===!0}catch{}I.visible=Y;function $(){z=Hc(),G=!0,t.visible=!1,f.visible=!0,ue(0,0,!0)}function q(){G=!1,t.visible=!0,f.visible=!1}function ne(te){if(!G)return;const ae=my(z,te);ae!==z&&(z=ae,m(150+Nr[te]*35),_())}function ee(){if(!G)return;const te=gy(z);te!==z&&(z=te,m(z.phase==="unfolding"?510:160),_())}function ue(te,ae,D=!1){if(!G)return;const y=z.phase;z=_y(z,te);const L=qc(z),K=Number.isFinite(te)?Math.min(.1,Math.max(0,te)):0;if(v.forEach((F,w)=>{const C=w===0?-1:1;F.rotation.z=L.lean*(1-L.open)-C*L.open*Math.PI/2,F.position.y=1.9+L.open*.8}),R.position.set(0,L.headY,1.7-L.open*.8),R.rotation.x=z.places.some(F=>F===0)?Math.sin(ae*2.2)*.13:0,S.rotation.x=L.waterTilt,S.position.y=L.waterY,P.forEach((F,w)=>{H[w].set(...vy(z,w)),D?F.position.copy(H[w]):F.position.lerp(H[w],1-Math.exp(-9*K)),U[w].visible=z.places[w]===0,O[w].rotation.y=ae*.2}),B.position.y=.1+L.open*4.7,B.scale.setScalar(.28*(1+L.open*.6)),z.phase==="flying"&&!Y){Y=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream09-v1",JSON.stringify({trace:!0}))}catch{}}y!==z.phase&&_()}return{enter:$,exit:q,move:ne,act:ee,update:ue,ready:()=>Wc(z),busy:()=>z.phase==="unfolding",text:()=>z.phase==="flying"?"Уши раскрылись крыльями. Вода встала стеной, а камень наконец утонул в небе. Теперь я хотя бы молчу с ушами.":z.phase==="unfolding"?"Ярлыки закончились. Берег поднимает уши, вода слушает стоя.":`Каждый камень: полка → левое → правое → полка. Разложи все шесть поровну. Сейчас ${Ka(z).join(" : ")}.`,button:()=>z.phase==="flying"?"увидеть сон снова":z.phase==="unfolding"?"берег слушает…":"услышать тишину · 11 : 11",inspect:()=>({...z,active:G,trace:Y,loads:Ka(z),ready:Wc(z),pose:qc(z),earAngles:v.map(te=>te.rotation.z),stones:P.map(te=>te.position.toArray()),tags:U.map(te=>te.visible),head:R.position.toArray(),moon:B.position.toArray(),moonScale:B.scale.x,waterTilt:S.rotation.x,rootVisible:t.visible,roomVisible:f.visible,landmarks:[[-4.2,.1,0],[4.2,.1,0],[0,4.9,-1],[0,.1,3.5]]})}}const Xc=Object.freeze([1,3,2]),Yc=()=>({phase:"tuning",turns:[0,0,0],progress:0,trace:!1}),na=n=>n.turns.map((e,t)=>e===Xc[t]);function yy(n,e){return n.phase==="tuning"&&Number.isInteger(e)&&e>=0&&e<3?{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t)}:n}function My(n){return n.phase==="sky"?Yc():n.phase==="tuning"&&na(n).every(Boolean)?{...n,phase:"releasing",progress:0}:n}function Sy(n,e){if(n.phase!=="releasing"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return t<1?{...n,progress:t}:{...n,progress:1,phase:"sky",trace:!0}}function Pd(n,e){const t=n.phase==="sky"?1:n.phase==="releasing"?n.progress:0,i=t*t*(3-2*t),s=e*Math.PI/5;return{x:Math.cos(s)*(3.05+i*.25),y:.65+i*(2.5+e%3*.65),z:Math.sin(s)*(3.05+i*.25),lift:i,diskScale:1-i*.78,diskTilt:i*Math.PI/2}}function by({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:g,sign:h,batchStatic:d,chime:m,changed:_}){const f=o([0,0,0],e);f.name="dream08-ten-torches",f.visible=!1;const p=r("#344c5d"),M=r("#647c83"),A=r("#ddc999"),x=["#d38d6d","#81beca","#d6c56e"],b=x.map(D=>r(D)),S=x.map(D=>r(D,{emissive:D,emissiveIntensity:1.4}));c([0,-.4,0],4.15,.22,p,f),g([0,-.27,0],4,.035,s.copper,f);const T=o([0,.18,0],f);c([0,0,0],2.6,.18,s.black,T),c([0,.105,0],.49,.015,A,T);const v=[],R=[];for(let D=0;D<3;D++){const y=.9+D*.6,L=o([0,.12,0],T);v.push(L),g([0,0,0],y,.035,b[D],L),g([0,-.02,0],y+.09,.008,M,L),l([y,.04,0],.13,S[D],L);for(let F=0;F<4;F++){const w=F*Math.PI/2;a([Math.cos(w)*y,.025,Math.sin(w)*y],[.1,.07,.1],F===Xc[D]?b[D]:M,T)}const K=Xc[D]*Math.PI/2;R.push(u([Math.cos(K)*y,.18,Math.sin(K)*y],[0,.18,0],.018,S[D],T))}h("1 / 3 / 2",[0,.09,2.82],1.7,.35,f,{size:68}).rotation.x=-Math.PI/2;const P=[],U=[],O=[];for(let D=0;D<10;D++){const y=o([0,0,0],f),L=D%3;O.push(L),P.push(y),c([0,-.34,0],.055,.7,s.copper,y),c([0,0,0],.14,.14,b[L],y);const K=l([0,.26,0],[.12,.3,.12],S[L],y);U.push(K),g([0,-.16,0],.17,.018,b[L],y)}const H=i.clone(!0);H.position.set(0,.65,3.1),H.scale.setScalar(.4),f.add(H);const B=[];for(const D of[-1,1]){const y=o([D*.16,-.08,.7],H);u([0,0,0],[D*.85,-.12,0],.055,s.black,y),l([D*.8,-.12,0],[.19,.08,.08],s.black,y),B.push(y)}const I=o([-5.05,.15,1.55],t);c([0,0,0],.13,.06,s.black,I),l([0,.15,0],[.045,.095,.045],s.light,I),I.visible=!1,d(f,[T,...P,H]),d(T,[...v,...R]),v.forEach(D=>d(D,[])),P.forEach((D,y)=>d(D,[U[y]])),d(I,[]);let z=Yc(),G=!1,Y=!1;const $=[0,0,0],q=[0,0,0];try{Y=JSON.parse(localStorage.getItem("beznogim-dream08-v1")||"{}").trace===!0}catch{}I.visible=Y;function ne(){z=Yc(),$.fill(0),q.fill(0),G=!0,t.visible=!1,f.visible=!0,ae(0,0)}function ee(){G=!1,t.visible=!0,f.visible=!1}function ue(D){if(!G)return;const y=yy(z,D);y!==z&&(z=y,q[D]+=Math.PI/2,m(180+D*85+z.turns[D]*20),_())}function te(){if(!G)return;const D=My(z);D!==z&&(z=D,z.phase==="tuning"&&($.fill(0),q.fill(0)),m(z.phase==="releasing"?440:165),_())}function ae(D,y){if(!G)return;const L=z.phase;z=Sy(z,D);const K=na(z),F=Pd(z,0),w=Number.isFinite(D)?Math.max(0,Math.min(.1,D)):0;if(v.forEach((C,V)=>{$[V]=n.MathUtils.damp($[V],q[V],9,w),C.rotation.y=-$[V],R[V].visible=K[V]}),T.scale.setScalar(F.diskScale),T.rotation.x=F.diskTilt,T.position.y=.18+F.lift*2.7,P.forEach((C,V)=>{const W=Pd(z,V);C.position.set(W.x,W.y,W.z),C.rotation.z=F.lift*Math.sin(y*.7+V)*.1,U[V].visible=K[O[V]],U[V].scale.y=1+Math.sin(y*5+V)*.1}),B.forEach((C,V)=>C.rotation.z=Math.sin(y*2+V*Math.PI)*.3),H.rotation.y=Math.sin(y*.3)*.12,z.trace&&!Y){Y=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream08-v1",JSON.stringify({trace:!0}))}catch{}}L!==z.phase&&_()}return{enter:ne,exit:ee,turn:ue,act:te,update:ae,busy:()=>z.phase==="releasing",canRelease:()=>z.phase!=="tuning"||na(z).every(Boolean),text:()=>z.phase==="sky"?"Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.":z.phase==="releasing"?"Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.":"Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.",button:()=>z.phase==="sky"?"увидеть сон снова":z.phase==="releasing"?"факелы уходят в небо…":"освободить место ↑",inspect:()=>({...z,active:G,trace:Y,aligned:na(z),ringAngles:v.map(D=>D.rotation.y),flames:U.map(D=>D.visible),torches:P.map(D=>D.position.toArray()),diskScale:T.scale.x,diskTilt:T.rotation.x,diskY:T.position.y,rootVisible:t.visible,roomVisible:f.visible,whiskers:B.map(D=>D.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})}}const $c=()=>({phase:"flat",progress:0,trace:!1}),up=n=>["folding","falling","turning"].includes(n.phase);function Ey(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?$c():n}function wy(n,e){if(!up(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function Ld(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function Ay({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,sign:g,batchStatic:h,chime:d,changed:m}){const _=new n.Group;e.add(_),_.visible=!1;const f=r("#e9dbb7"),p=r("#405e62"),M=r("#c87e68"),A=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],p,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],f,x);const b=[];for(let D=0;D<4;D++){const y=o([0,0,0],x);y.rotation.y=D*Math.PI/2;const L=o([0,0,1.25],y);a([0,0,.8],[2.5,.05,1.6],f,L),a([0,.032,.76],[.022,.015,1.3],M,L),a([0,.035,.1],[2.3,.015,.018],M,L),b.push(L)}const S=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],p,S),a([0,.12,0],[2.15,.08,2.15],s.concrete,S);const T=o([-.45,.18,-.3],S);a([0,.33,0],[.8,.66,.7],f,T),a([0,.4,.36],[.25,.28,.025],A,T),a([0,.73,0],[1.05,.12,.9],M,T);const v=o([.65,.72,-.5],S);u([-.25,-.5,0],[-.25,.4,0],.03,p,v),u([.25,-.5,0],[.25,.4,0],.03,p,v),u([-.25,.4,0],[.25,.4,0],.03,p,v);const R=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,M,R),l([0,-.67,0],.14,s.copper,R);for(let D=0;D<4;D++)a([-.7+D*.42,.23,.66],[.28,.13,.36],f,S);const P=[];for(const D of[-1.05,1.05])for(const y of[-1.05,1.05])P.push(u([D,4.45,y],[D,5.25,y],.012,s.copper,_));for(const D of[-2.8,2.8])u([D,0,-1.6],[D,5.3,-1.6],.06,p,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,p,_);const U=(D,y=_)=>{const L=o(D,y);a([0,.4,0],[.55,.1,.55],M,L),a([0,.73,-.24],[.55,.65,.08],M,L);for(const K of[-.2,.2])for(const F of[-.2,.2])u([K,0,F],[K,.4,F],.025,p,L);return L},O=[U([-2.6,0,1.1]),U([-2.6,0,2.1]),U([-1.65,0,2.1]),U([-.7,0,2.1])],H=o([0,2,0],_);l([0,0,0],[.15,.27,.15],A,H),u([0,.18,0],[.19,.35,0],.018,s.copper,H);const B=i.clone(!0);B.scale.setScalar(.35),B.position.set(2.8,.78,1.65),_.add(B),g("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const I=U([-30.6,-1.3,-20.8],t);I.scale.setScalar(.35),I.visible=!1,h(_,[x,S,...P,...O,H,B]),h(x,b.map(D=>D.parent)),b.forEach(D=>h(D,[])),h(S,[T,v]),h(T,[]),h(v,[R]),h(R,[]),O.forEach(D=>h(D,[])),h(H,[]),h(I,[]);const z=new n.Vector3,G=new n.Vector3(1,0,-1).normalize();let Y=$c(),$=!1,q=!1;try{q=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}I.visible=q;function ne(){Y=$c(),$=!0,_.visible=!0,t.visible=!1,te(0,0)}function ee(){$=!1,_.visible=!1,t.visible=!0}function ue(){const D=Ey(Y);D!==Y&&(Y=D,d(Y.phase==="falling"?165:Y.phase==="turning"?440:330),m())}function te(D,y){if(!$)return;const L=Y.phase;Y=wy(Y,D);const{fold:K,fall:F,turn:w}=Ld(Y);if(b.forEach(C=>C.rotation.x=-K*.92*(1-w)),x.quaternion.setFromAxisAngle(G,w*2.2),x.position.y=.12+w*3.9,S.position.set(0,4.4-3.65*F,0),S.quaternion.identity(),w>0&&(z.set(0,.63,0).applyAxisAngle(G,w*2.2),S.position.copy(z).add(x.position),S.quaternion.copy(x.quaternion)),P.forEach(C=>C.visible=F===0),R.rotation.z=Math.sin(y*2.1)*.5,H.position.set(-2.6*w,2-1.34*w,1.1*w),H.rotation.z=Math.sin(y)*.1,O.forEach((C,V)=>{V>0&&(C.position.y=w*.15*Math.sin(y+V),C.rotation.z=w*Math.sin(y+V)*.035)}),Y.trace&&!q){q=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}Y.phase!==L&&m()}return{enter:ne,exit:ee,act:ue,update:te,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[Y.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[Y.phase],busy:()=>up(Y),inspect:()=>({...Y,...Ld(Y),active:$,trace:q,rootVisible:t.visible,roomVisible:_.visible,leafAngles:b.map(D=>D.rotation.x),yard:S.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(S.quaternion.w))),yardQuaternion:S.quaternion.toArray(),pocket:x.position.toArray(),seed:H.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const Jc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function Ty(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function Cy(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?Jc():n}function Ry(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function Py({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:g,sign:h,batchStatic:d,chime:m,changed:_}){const f=o([0,0,0],e);f.name="dream-06-cloud-heating",f.visible=!1;const p=r("#203f49"),M=r("#dce6d7"),A=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),b=r("#598e9d"),S=r("#ede1c3");c([0,-.3,0],4,.4,p,f),g([0,-.06,0],3.85,.045,A,f);for(let V=0;V<8;V++)u([-3+V*.85,-.06,-2.5],[-3+V*.85,-.06,2.5],.012,b,f);const T=o([-2.35,0,.2],f);a([0,.2,0],[1.7,.35,1.3],s.concrete,T);for(let V=0;V<6;V++){const W=-.65+V*.26;a([W,1.2,0],[.16,1.8,.66],A,T),g([W,2.12,0],.27,.065,A,T,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,A,T),u([-.8,1.95,.2],[.8,1.95,.2],.11,A,T);const v=l([-2.35,1.15,.87],.42,b,f);g([-2.35,1.15,.87],.48,.024,S,f,[.5,.3,0]);const R=["ЗЕМЛЯ","ОБЛАКО"].map((V,W)=>{const ie=o([-3+W*1.3,.4,2.1],f);a([0,0,0],[.87,.14,1.13],p,ie);for(let k=0;k<4;k++)a([-.27+k*.18,.09,-.28],[.08,.03,.25],x,ie);return h(V,[0,.12,.32],.78,.22,ie,{size:52}).rotation.x=-Math.PI/2,ie}),P=g([-2.8,.57,2.1],.5,.035,x,f);P.rotation.x=Math.PI/2;const U=o([0,0,0],f);u([-1.5,.45,.2],[-.7,.45,.2],.09,A,U),u([-.7,.45,.2],[-.7,3.7,.2],.09,A,U),u([-.7,3.7,.2],[1.2,3.7,.2],.09,A,U);const O=Array.from({length:7},(V,W)=>l([.1+W*.45,3.8+W%2*.22,-.8],[.65,.45,.63],M,f)),H=o([1.25,3.1,-.8],f);a([0,.2,0],[2.6,.1,1.7],S,H);for(const V of[-1.15,1.15])for(const W of[-.7,.7])u([V,.2,W],[V,1.28,W],.045,A,H);const B=o([0,1.26,0],H);a([-.61,.15,0],[1.45,.12,1.95],M,B).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,B).rotation.z=-.35;const I=[a([-.68,.8,.72],[.48,.57,.06],x,H),a([.68,.8,.72],[.48,.57,.06],x,H)],z=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],G=[],Y=[];z.forEach(([V,W,ie],k)=>{const j=o([V,W,ie],f);G.push(j),a([0,.05,0],[1.2,.13,1.1],s.concrete,j);for(const Z of[-.5,.5])u([Z,.1,-.38],[Z,1.1,-.38],.045,A,j);u([-.5,1.1,-.38],[0,1.5,-.38],.045,A,j),u([0,1.5,-.38],[.5,1.1,-.38],.045,A,j);const se=o([1.25,3.9,-.05],f);Y.push(se),a([0,0,0],[.65,.72,.12],S,se),a([0,0,.071],[.48,.55,.035],x,se),u([0,-.28,.1],[0,.28,.1],.018,A,se),u([-.23,0,.1],[.23,0,.1],.018,A,se)});const $=Array.from({length:10},()=>l([0,0,0],.065,x,f)),q=i.clone(!0);q.scale.setScalar(.4),q.position.set(-2,.9,-1.7),f.add(q),h("СОН / 06",[0,-.04,3.3],1.5,.29,f,{size:52}).rotation.x=-Math.PI/2;const ne=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],A,ne),a([0,0,.04],[.13,.22,.02],x,ne),ne.visible=!1,d(f,[T,v,...R,P,U,...O,H,...G,...Y,...$,q]),d(T,[]),d(U,[]),d(H,[B,...I]),d(B,[]),G.forEach(V=>d(V,[])),Y.forEach(V=>d(V,[])),R.forEach(V=>d(V,[]));let ee=Jc(),ue=!1,te=0,ae=0,D=!1;try{D=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}ne.visible=D;function y(){ee=Jc(),te=0,ae=0,ue=!0,f.visible=!0,t.visible=!1,w(0,0)}function L(){ue=!1,f.visible=!1,t.visible=!0}function K(V){ee=Ty(ee,V),m(V==="sky"?330:165),_()}function F(){ee=Cy(ee),m(ee.phase==="raining"?440:220),_()}function w(V,W){if(!ue)return;const ie=ee.phase;ee=Ry(ee,V);const k=ee.phase==="heating",j=ee.target==="sky",se=j?k?ee.progress:["cloud","raining","settled"].includes(ee.phase)?1:0:0;if(te=se,ae=ee.phase==="raining"?ee.progress:ee.phase==="settled"?1:0,H.visible=se>.02,H.scale.setScalar(Math.max(.001,se)),H.position.y=3.1+Math.sin(W*.9)*.05,O.forEach((Z,ce)=>{Z.position.y=3.8+ce%2*.22+se*.5-ae*.25,Z.scale.set(.65+se*.12,.45*(1-se*.6),.63)}),v.scale.setScalar(.42*(k&&!j?1+Math.sin(ee.progress*Math.PI)*.75:1)),v.rotation.y=W*.2,Y.forEach((Z,ce)=>{const ye=Math.max(0,Math.min(1,ae*1.6-ce*.3)),be=ye*ye*(3-2*ye),Q=z[ce];Z.position.set(1.25+(Q[0]-1.25)*be,3.9+(Q[1]+.8-3.9)*be,-.05+(Q[2]+.06+.05)*be),Z.rotation.z=(1-be)*Math.sin(W+ce)*.1,Z.visible=["cloud","raining","settled"].includes(ee.phase)}),I.forEach(Z=>Z.visible=ee.phase==="cloud"||k),P.position.x=j?-1.7:-3,$.forEach((Z,ce)=>{Z.visible=k;const ye=(W*.7+ce/10)%1;j?ye<.72?Z.position.set(-.7,.45+ye/.72*3.25,.2):Z.position.set(-.7+(ye-.72)/.28*1.9,3.7,.2):Z.position.set(-2.35+Math.sin(ye*Math.PI*2)*.6,.5+ye*1.8,.87)}),ee.trace&&!D){D=!0,ne.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}ee.phase!==ie&&_()}return{enter:y,exit:L,choose:K,act:F,update:w,text:()=>({ready:ee.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:ee.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[ee.phase],button:()=>ee.phase==="raining"?"окна падают…":ee.phase==="heating"?"тепло идёт…":ee.phase==="settled"?"увидеть сон снова":ee.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...ee,active:ue,trace:D,warmth:te,spent:ae,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:f.visible,houseVisible:H.visible,windows:Y.map(V=>V.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...z.map(V=>[V[0],.8,V[2]])]})}}function Zc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function Ly(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function Iy(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Zc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function Dy(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function Ny({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,batchStatic:m,chime:_,changed:f}){const p=a([0,0,0],e);p.name="dream-05-self-measuring-instrument",p.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),A=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),b=r("#1c4147"),S=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,b,p),u([0,-.16,0],3.45,.08,S,p),h([0,-.1,0],3.65,.07,s.copper,p);for(let Z=0;Z<5;Z++)h([0,-.1+Z*.006,0],.7+Z*.52,.009,A,p);const T=a([0,0,0],p);l([0,.12,-1.6],[3,.34,1.3],s.concrete,T),g([0,.3,-1.65],[0,3.75,-1.65],.12,M,T);const v=a([0,3.7,-1.4],p),R=u([0,0,-.12],1.05,.2,b,v);R.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const P=a([-.85,0,.02],v),U=a([.85,0,.02],v);l([.425,0,0],[.85,1.72,.1],x,P),l([-.425,0,0],[.85,1.72,.1],x,U);for(let Z=0;Z<12;Z++){const ce=Z*Math.PI/6;g([Math.sin(ce)*.78,Math.cos(ce)*.78,.09],[Math.sin(ce)*.91,Math.cos(ce)*.91,.09],.016,s.copper,v)}const O=a([0,0,.14],v);g([0,-.15,0],[0,.69,0],.025,b,O),c([0,0,0],.065,s.copper,O);const H=[a([-2.35,1.65,0],p),a([2.35,1.65,0],p)];for(const[Z,ce]of H.entries())l([0,0,0],[.24,1.65,.38],M,ce),l([Z===0?.38:-.38,-.76,0],[.95,.18,.38],A,ce),c([0,.84,0],.19,s.copper,ce);const B=[],I=[],z=[];for(let Z=0;Z<12;Z++){const ce=-2.45+Z*.445;I.push(new n.Vector3(ce,2.52,0));const ye=Z/11,be=ye*Math.PI*1.35;z.push(new n.Vector3(2.35*Math.cos(be)*(1-ye*.85),.24+ye*3,2.05-ye*3.2));const Q=a(I[Z].toArray(),p);B.push(Q),l([0,0,0],[.42,.16,.57],M,Q),l([0,.09,.15],[.03,.012,.2],s.copper,Q)}const G=c([0,.7,0],[.45,.64,.45],A,p),Y=i.clone(!0);p.add(Y),Y.scale.setScalar(.43);const $=new n.Vector3(2.8,.65,2.15);Y.position.copy($);function q(Z,ce){const ye=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Te],J)=>J?ye.lineTo(ze,Te):ye.moveTo(ze,Te)),ye.closePath();const be=new n.ExtrudeGeometry(ye,{depth:.07,bevelEnabled:!1}),Q=a([0,0,0],Z);return o(be,x,null,null,Q),Q.scale.setScalar(ce),Q}const ne=q(v,.88);ne.position.set(0,.1,.2),ne.visible=!1;const ee=q(ne,.22);ee.position.set(-.03,-.2,.12);const ue=l([-.03,-.2,.085],[.34,.44,.01],b,ne),te=q(t,.17);te.position.set(2.8,1.14,-2.75),te.rotation.y=Math.PI/4,d("СОН / 05",[0,-.055,2.94],1.65,.3,p,{size:48}).rotation.x=-Math.PI/2,d("СЕБЯ?",[0,.36,-.88],1.05,.26,p,{size:52});const ae=d("?",[-1.6,.65,1.5],.48,.65,p,{size:84,bg:"#1c4147"}),D=h([0,.12,0],.68,.035,s.light,p);m(p,[T,v,...B,...H,G,Y,ae,D]),m(T,[]),m(v,[P,U,O,ne]),m(P,[]),m(U,[]),m(O,[]),m(ne,[ee,ue]),m(ee,[]),B.forEach(Z=>m(Z,[])),H.forEach(Z=>m(Z,[]));let y=Zc(),L=!1,K=0,F=0,w=!1;try{w=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}te.visible=w;function C(){y=Zc(),K=0,F=0,L=!0,p.visible=!0,t.visible=!1,k(0,0)}function V(){L=!1,p.visible=!1,t.visible=!0}function W(Z){y=Ly(y,Z),_(Z==="self"?330:165),f()}function ie(){y=Iy(y),_(y.phase==="climbing"?440:220),f()}function k(Z,ce){if(!L)return;const ye=y.phase;y=Dy(y,Z);const be=y.phase==="unfolding"?y.progress:["stairs","climbing","inside"].includes(y.phase)?1:0;K=be*be*(3-2*be),F=n.MathUtils.damp(F,y.phase==="inside"?1:0,3,Z),B.forEach((ze,Te)=>{ze.position.lerpVectors(I[Te],z[Te],K),ze.rotation.y=K*(-Te*.07)});const Q=y.phase==="measuring"?Math.sin(y.progress*Math.PI):0;if(H.forEach((ze,Te)=>{const J=Te===0?-1:1;ze.position.set(J*(2.35-Q*1.55),1.65+K*.4,-K*.85),ze.rotation.z=J*K*.65}),O.rotation.z=y.phase==="measuring"?Math.sin(y.progress*35)*.8:y.phase==="refused"?Math.sin(ce*6)*.25:-K*Math.PI*1.75,G.position.y=.7+(y.phase==="measuring"?Math.sin(y.progress*Math.PI)*1.5:Math.sin(ce*1.3)*.05),G.scale.set(.45*(1-Q*.16),.64*(1+Q*.3),.45*(1-Q*.16)),ae.visible=y.phase==="refused",ae.position.y=.65+Math.sin(ce*2)*.1,P.rotation.y=F*1.7,U.rotation.y=-F*1.7,O.visible=F<.2,ne.visible=y.phase==="inside",ne.rotation.z=Math.sin(ce*.7)*.04,ee.rotation.z=-ce*.12,Y.position.copy($),Y.scale.setScalar(.43),Y.visible=y.phase!=="inside",["climbing","inside"].includes(y.phase)){const ze=y.phase==="inside"?1:y.progress,Te=[$,...z.map(le=>le.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],J=ze*(Te.length-1),E=Math.min(Te.length-2,Math.floor(J));Y.position.lerpVectors(Te[E],Te[E+1],Math.min(1,J-E)),Y.scale.setScalar(.43*(1-ze*.8))}if(D.position.set((y.target==="self",0),y.target==="self"?3.7:.12,y.target==="self"?-1.4:0),D.rotation.x=y.target==="self"?0:Math.PI/2,D.visible=["ready","refused","measuring","unfolding"].includes(y.phase),y.trace&&!w){w=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ye!==y.phase&&f()}function j(){return{ready:y.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[y.phase]}return{enter:C,exit:V,choose:W,act:ie,update:k,text:j,button:()=>y.phase==="inside"?"увидеть сон снова":y.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...y,active:L,trace:w,unfold:K,opened:F,rootVisible:t.visible,roomVisible:p.visible,steps:B.map(Z=>Z.position.toArray()),jaws:H.map(Z=>Z.position.toArray()),drop:G.position.toArray(),head:Y.position.toArray(),cursorVisible:ne.visible,cursorPosition:ne.getWorldPosition(new n.Vector3).toArray(),faceAngles:[P.rotation.y,U.rotation.y],nestedVisible:ne.visible&&ee.visible,landmarks:[G.position.toArray(),[0,3.7,-1.4],$.toArray(),z[0].toArray()]})}}const Uy=["восток","юг","запад","север"],hp=[0,2,3];function mc(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function Oy(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Fy(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==hp[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function zy(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function ky({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,batchStatic:m,chime:_,changed:f}){const p=a([0,0,0],e);p.name="dream-04-letter-above-roof",p.visible=!1;const M=r("#355b62"),A=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,p),h([0,-.26,0],3.78,.024,s.copper,p);for(let w=0;w<4;w++){const C=w*Math.PI/2,V=Math.cos(C)*3.05,W=Math.sin(C)*3.05;d(["В","Ю","З","С"][w],[V,-.23,W],.38,.28,p).rotation.x=-Math.PI/2}const b=[],S=[],T=[];for(let w=0;w<3;w++){const C=1.05+w*1.4,V=2.05-w*.27,W=a([0,C,0],p);b.push(W);for(let ce=1;ce<4;ce++){const ye=ce*Math.PI/2,be=Math.cos(ye),Q=Math.sin(ye),ze=[[.3,.3,-.3],[.3,.3,.3],[V,.04,V],[V,.04,-V]],Te=new n.BufferGeometry,J=[];for(const le of[0,1,2,0,2,3]){const[he,pe,Ee]=ze[le];J.push(he*be-Ee*Q,pe,he*Q+Ee*be)}Te.setAttribute("position",new n.Float32BufferAttribute(J,3)),Te.computeVertexNormals();const E=A.clone();E.side=n.DoubleSide,o(Te,E,null,null,W),g([V*be-V*Q,.04,V*Q+V*be],[V*be+V*Q,.04,V*Q-V*be],.035,s.copper,W);for(const le of[-1,1])g([V*be-V*Q*le,.04,V*Q+V*be*le],[(V+.16)*be-(V+.16)*Q*le,.2,(V+.16)*Q+(V+.16)*be*le],.035,s.copper,W)}const ie=a([V*.67,.045,0],W);g([-.32,0,0],[.3,0,0],.026,s.mint,ie),g([.3,0,0],[.1,0,.13],.026,s.mint,ie),g([.3,0,0],[.1,0,-.13],.026,s.mint,ie),S.push(ie);const k=hp[w]*Math.PI/2,j=Math.cos(k)*V*.63,se=Math.sin(k)*V*.63,Z=h([j,C+.09,se],.16,.025,s.light,p);T.push(Z),d(`${w+1}`,[V+.26,C+.14,.2],.36,.29,p,{bg:"#355b62",fg:"#f0e4b8"});for(const ce of[-1,1])g([ce*.3,C-.32,-.3],[ce*.3,C-.03,-.3],.018,s.copper,p)}const v=a([-2.6,.16,1.5],p);l([0,0,0],[1.1,.62,.7],s.cream,v),l([0,.16,.361],[.72,.07,.025],M,v),d("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,p,{size:40});const R=i.clone(!0);p.add(R),R.scale.setScalar(.53),R.position.set(-2.6,1,1.5),R.rotation.z=-.12,d("СОН / 04",[0,-.12,3.34],1.8,.32,p,{size:48}).rotation.x=-Math.PI/2;const P=a([-1.1,.12,1.5],p);l([0,0,0],[.52,.025,.36],x,P);const U=a([-.26,.016,0],P),O=a([.26,.016,0],P);l([.13,0,0],[.26,.022,.36],x,U),l([-.13,0,0],[.26,.022,.36],x,O),g([-.25,.04,-.17],[0,.04,.1],.009,s.copper,P),g([.25,.04,-.17],[0,.04,.1],.009,s.copper,P);const H=c([0,.045,0],.055,s.light,P),B=a([0,5.3,0],p);h([0,0,0],.55,.025,s.copper,B),g([0,-.3,0],[0,.22,0],.018,s.copper,B);const I=Array.from({length:6},(w,C)=>{const V=C*Math.PI/3,W=c([Math.cos(V)*.29,0,Math.sin(V)*.29],[.21,.065,.11],x,B);return W.rotation.y=-V,W});B.visible=!1;const z=[new n.Vector3(-1.1,.12,1.5),...T.map(w=>w.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],G=new n.BufferGeometry().setFromPoints(z),Y=new n.Line(G,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));Y.computeLineDistances(),p.add(Y);let $=mc(),q=!1,ne=0,ee=!1,ue=[Math.PI/2,Math.PI/2,Math.PI/2];try{ee=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const te=a([-3.75,1.17,-2.95],t);te.visible=ee,l([0,0,0],[.23,.012,.16],x,te),g([-.11,.016,-.07],[0,.016,.04],.005,s.copper,te),g([.11,.016,-.07],[0,.016,.04],.005,s.copper,te),m(p,[...b,...T,v,R,P,B,Y]),b.forEach((w,C)=>m(w,[S[C]])),m(P,[U,O,H]),m(U,[]),m(O,[]),m(v,[]),m(B,I),m(te,[]);function ae(){q=!0,$=mc(),ne=0,ue=$.turns.map(w=>w*Math.PI/2),p.visible=!0,t.visible=!1,K(0,0)}function D(){q=!1,p.visible=!1,t.visible=!0}function y(w){$=Oy($,w),_(165+w*55+$.turns[w]*22),f()}function L(){$.phase==="delivered"?($=mc(),ne=0):$=Fy($),_(220),f()}function K(w,C){if(!q)return;const V=$.phase;$=zy($,w),ne=n.MathUtils.damp(ne,$.phase==="delivered"?1:0,2.4,w),b.forEach((se,Z)=>{const ce=$.turns[Z]*Math.PI/2,ye=Math.atan2(Math.sin(ce-ue[Z]),Math.cos(ce-ue[Z]));ue[Z]+=ye*(w===0?1:1-Math.exp(-w*7)),se.rotation.y=-ue[Z],se.position.x=ne*[-2.15,1.85,0][Z],se.position.z=ne*[.45,-.65,-2.1][Z],se.rotation.z=ne*(Z===0?-.16:.13)});const W=Math.min(4,$.progress),ie=Math.min(3,Math.floor(W)),k=Math.min(1,W-ie),j=k*k*(3-2*k);if(P.position.lerpVectors(z[ie],z[ie+1],j),P.rotation.y=C*.16,U.rotation.z=-ne*1.1,O.rotation.z=ne*1.1,H.position.y=.045+ne*.18,B.visible=$.phase==="delivered",B.rotation.y=C*.22,I.forEach((se,Z)=>{se.position.y=Math.sin(C*.7+Z)*.035}),Y.visible=$.phase!=="delivered",$.trace&&!ee){ee=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}V!==$.phase&&f()}function F(){return $.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":$.phase==="caught"?`Поймала крыша ${$.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:$.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:ae,exit:D,turn:y,send:L,update:K,text:F,directions:Uy,inspect:()=>({...$,turns:[...$.turns],active:q,trace:ee,open:ne,roomVisible:p.visible,rootVisible:t.visible,roofs:b.map(w=>({position:w.position.toArray(),rotation:w.rotation.toArray().slice(0,3)})),letter:P.position.toArray(),goals:T.map(w=>w.position.toArray()),crown:B.visible})}}function By({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,paperBoat:m,batchStatic:_,chime:f}){const p=a([0,0,0],e);p.name="dream-03-silent-dock",p.visible=!1;const M=r("#526b79"),A=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,p),u([0,-.23,0],4,.055,A,p),h([0,-.18,0],4.08,.04,s.copper,p),l([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,p);for(let C of[-.1,.55,1.2,1.85])l([-2.85,.07,C],[1.38,.045,.025],M,p);for(let C of[-3.4,-2.3])g([C,-.3,1.9],[C,.48,1.9],.035,s.copper,p);d("СОН / 03",[-2.85,.13,2.4],1.6,.28,p,{size:48}).rotation.x=-Math.PI/2;const b=i.clone(!0);b.position.set(-2.8,1.27,.75),b.scale.setScalar(.65),p.add(b);const S=[];for(const C of[-1,1]){const V=a([C*.12,-.04,.68],b);g([0,0,0],[C*.64,-.2,.05],.06,s.black,V),c([C*.62,-.18,.05],[.19,.095,.07],s.black,V),g([C*.58,-.18,.06],[C*.58,-.7,.06],.015,s.copper,V),c([C*.58,-.76,.06],.075,s.copper,V),_(V,[]),S.push(V)}const T=Array.from({length:3},(C,V)=>h([-1.2+V*1.25,-.17,-.25],.72,.035,V===1?s.cream:s.copper,p)),v=Array.from({length:3},(C,V)=>h([-1.2+V*1.25,-.165,-.25],.72,.013,x,p)),R=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,p),P=m(p,[-1.9,-.13,-.25],.9),U=c([0,.53,0],[.065,.09,.065],s.light,P),O=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,p);O.rotation.z=.65;const H=[];for(let C=0;C<5;C++){const V=-1.6+C*.85;g([V,-.2,-2.9],[V,1.1+C%2*.4,-2.9],.025,M,p),H.push(c([V,1.12+C%2*.4,-2.9],.035,s.light,p))}let B=!1,I=0,z=1,G=[1,1,1],Y=[0,0,0],$=0,q=0,ne=!1;try{ne=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ee=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ee.visible=ne;const ue=Array.from({length:5},()=>new n.Vector3),te=new n.CatmullRomCurve3(ue),ae=new n.Vector3,D=new n.Vector3;_(p,[b,...T,...v,R,P,O,...H]),_(b,S),_(P,[U]);function y(C){z=n.MathUtils.clamp(Math.round(Number(C)||1),1,3)}function L(){B=!0,I=0,G=[1,1,1],Y=[0,0,0],$=0,q=0,p.visible=!0,t.visible=!1,w(0,0)}function K(){B=!1,p.visible=!1,t.visible=!0}function F(){if(B){if(I===3){I=0,G=[1,1,1],Y=[0,0,0],q=0;return}if(G[I]=z,I++,$=0,f(110+z*55),I===3){ne=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function w(C,V){if(!B)return;q+=Math.min(C,.15),$+=Math.min(C,.15);for(let j=0;j<3;j++){Y[j]=n.MathUtils.damp(Y[j],j<I?1:0,3,C);const se=-.17+Y[j]*(.95+G[j]*.42),Z=.72+G[j]*.12;T[j].position.y=se,T[j].rotation.set(Math.PI/2*(1-Y[j]),Math.PI/2*Y[j],0),T[j].scale.setScalar(Z/.72),v[j].scale.setScalar(Z/.72*(1+Math.sin(q*.9+j)*.045)),ue[j+1].set(T[j].position.x,Math.max(-.1,se),-.25)}ue[0].set(-2,-.1,-.25),ue[4].set(2.5,-.1,-.25);const W=(1-Math.cos(q*.55))*.5;te.getPoint(W,ae),te.getPoint(Math.min(.999,W+.012),D),P.position.copy(ae),P.rotation.z=n.MathUtils.clamp(Math.atan2(D.y-ae.y,D.x-ae.x),-.45,.45),P.rotation.y=0,R.visible=I>0;const ie=Math.min(1,$/1.8),k=Math.max(0,I-1);R.position.set(n.MathUtils.lerp(-2.5,-1.2+k*1.25,ie),.35+ie*(2.1+G[k]*.35),n.MathUtils.lerp(1.4,-.25,ie)),R.rotation.y=q*.4,S.forEach((j,se)=>j.rotation.z=Math.sin(q*1.2+se*Math.PI)*(.06+I*.04)),U.position.y=.53+Math.sin(V)*.02}return{enter:L,exit:K,toss:F,choose:y,update:w,inspect:()=>({active:B,step:I,force:z,forces:[...G],lift:[...Y],trace:ne,roomVisible:p.visible,rootVisible:t.visible,boat:P.position.toArray(),ringY:T.map(C=>C.position.y),ringRotation:T.map(C=>C.rotation.toArray().slice(0,3)),stone:R.position.toArray()})}}function Id(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(c=>Number(c.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const c=t.batch,u=Math.min(i,Math.max(0,360-c.age));c.age+=u,c.exposure[c.face]+=u,c[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const c=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:c.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:c.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=c.air,t.batch&&t.batch.age<360&&c.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(c.id),g=t.shelf.findIndex(h=>h.id===u);if(g<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(g,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",d={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(d),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:d,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,l={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:l,result:s,seconds:o,label:r}}const Vy={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Gy({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,mesh:u,sign:g,batchStatic:h,changed:d,watching:m,localPlay:_}){var V,W,ie;const f=s([24,-1.55,0]);f.name="cheese-cellar";const p=i("#697b70"),M=i("#b4b89b"),A=i("#936c4d"),x=i("#e1b064"),b=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],p,f),r([0,1.6,-3.65],[10,3.2,.3],M,f),r([-4.85,1.3,0],[.3,2.6,7.3],M,f);for(let k=-4;k<=4;k+=2)r([k,1.5,-3.43],[.16,3,.1],p,f);for(let k of[-4.4,4.4])l([k,0,-3.3],[k,3.6,-3.3],.09,t.copper,f),l([k,3.6,-3.3],[k,3.6,2.5],.09,t.copper,f),l([k,3.6,2.5],[k,0,2.5],.09,t.copper,f);g("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,f,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],A,f),r([0,0,-2.7],[7.9,.14,1.05],A,f);for(let k of[-3.8,3.8])r([k,.6,-2.7],[.14,1.4,1.05],A,f);a([-3,.55,1.1],.75,1.1,t.copper,f),c([-3,1.11,1.1],.75,.055,t.dark,f),a([-3,1.1,1.1],.64,.02,S,f),l([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,A,f);for(let k of[2.8,3.5])a([k,.28,1.8],.26,.56,t.cream,f),a([k,.59,1.8],.12,.1,t.copper,f);const T=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,f);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,f);for(let k=0;k<4;k++)r([2.25+k*.23,2.4,-3.32],[.045,.55,.03],t.dark,f);r([.5,.3,.25],[3.7,.6,3.3],A,f);const v=s([.5,1.02,.25],f),R=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),P=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),b,[0,0,0],null,v),U=c([0,.33,0],.35,.026,t.cream,v),O=s([.5,.65,2.3],f),H=[];for(let k=0;k<6;k++)H.push(o([-1.25+k*.5,0,0],.08,t.mint,O));const B=g("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,f,{size:36});B.rotation.x=-Math.PI/2;function I(k){const j=s(k,f),se=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,j),Z=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),b.clone(),[0,0,0],null,j),ce=s([0,-.14,.09],j);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ce);const ye=o([.09,.16,.27],.04,t.mint,ce),be=u(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,j),Q=s([0,0,0],j);for(const[ze,Te,J]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Te,J],[.05,.05,.025],t.dark,Q);return{g:j,body:se,crust:Z,steps:ce,crystal:be,holes:Q,pearl:ye}}const z=Array.from({length:6},(k,j)=>I([-3.15+j*1.26,1.42,-2.6])),G=s([0,0,0],e);for(let k=0;k<24;k++){const j=k/23;r([8.3+j*11.2,-.15-j*1.32,1.4+Math.sin(j*Math.PI)*2],[.85,.15,.75],p,G)}for(let k=0;k<5;k++)r([20+k*.7,-1.46,1.4-k*.22],[.75,.13,.7],p,G);g("СЫР →",[10.2,.35,2.4],1.5,.4,G,{size:44}),l([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,G),h(G,[]),h(f,[v,T,O,B,...z.map(k=>k.g)]);for(const k of z)h(k.steps,[k.pearl]),h(k.holes,[]);let Y=null,$=null,q=0,ne=null,ee="",ue=0;try{const k=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");Y=(k==null?void 0:k.state)||k,q=Number(k==null?void 0:k.clockOffset)||0}catch{}const te=()=>Date.now()/1e3+q;function ae(k,j,se={}){const Z=Id({state:Y,mode:k,tool:j,args:se,now:te()});Y=Z.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:Y,clockOffset:q}))}catch{}return Z}ae("migrate");const D=document.createElement("div");D.id="cellar-controls",D.hidden=!0,D.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(D);function y(){return $&&m()?$:Id({mode:"migrate",state:Y,now:Y.updated}).public}function L(k){ne=k;const j=k.batch;if(v.visible=!!j,B.visible=!j,T.rotation.y=k.air==="dry"?-.8:0,j){v.rotation.z=j.face?Math.PI:0;const se=j.age/360;R.material.color.set(j.culture==="moon"?"#e9cf8b":"#c8bc88"),P.material.color.set(k.air==="damp"?"#8b9f78":"#b87a48"),U.scale.setScalar(1+se*.15)}for(let se=0;se<6;se++)H[se].visible=!!j&&j.age>=(se+1)*60;z.forEach((se,Z)=>{const ce=k.shelf[Z];se.g.visible=!!ce,ce&&(se.g.rotation.z=ce.kind==="lopsided"?.22:0,se.crust.material.color.set(ce.wet>=180?"#8b9f78":"#b87a48"),se.steps.visible=ce.kind==="moon_stair",se.crystal.visible=ce.kind==="stone",se.holes.visible=ce.kind==="holes"||ce.kind==="lopsided")})}function K(k,j){_();const se=ae("action",k,j);return ee="",C(0),d(),se}for(const k of D.querySelectorAll("[data-culture]"))k.onclick=()=>K("set_batch",{culture:k.dataset.culture});D.querySelector("#cellar-turn").onclick=()=>K("tend",{air:Y.air,turn:!0}),D.querySelector("#cellar-air").onclick=()=>K("tend",{air:Y.air==="damp"?"dry":"damp",turn:!1}),D.querySelector("#cellar-wait").onclick=()=>{_(),q+=60,ae("tick"),ee="",C(0),d()};function F(){const k=ne||y(),j=k.batch,se=$&&m()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",Z=j?j.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(j.age)}/360 с. Корка: ${Math.floor(j.exposure[0])}/${Math.floor(j.exposure[1])} с.`:k.shelf.length?`На полке: ${k.shelf.map(ce=>Vy[ce.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:$&&m()?"войти в свою сыроварню":j?j.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!($&&m())&&!!j&&!j.ready,description:se+" "+Z}}function w(){const k=ne||y(),j=k.batch;D.querySelector("#cellar-readout").textContent=`${k.air==="damp"?"сыро":"сухо"} · ${j?j.ready?"готово":`ещё ${Math.ceil(j.remaining)} с`:"нет колеса"} · полка ${k.shelf.length}/6`;for(const se of D.querySelectorAll("[data-culture]"))se.disabled=!!j;D.querySelector("#cellar-turn").disabled=!j||j.ready,D.querySelector("#cellar-air").textContent=k.air==="damp"?"сделать суше":"вернуть сырость"}function C(k){k-ue>=1&&(ue=k,ae("tick"));const j=y(),se=JSON.stringify(j);se!==ee&&(ee=se,L(j),w(),d())}return window.addEventListener("beznogim:state",({detail:k})=>{var se,Z;const j=(Z=(se=k.mechanics)==null?void 0:se.cellar)==null?void 0:Z.public;j&&($=j,ee="")}),$=((ie=(W=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:W.cellar)==null?void 0:ie.public)||null,L(y()),w(),{house:f,controls:D,update:C,card:F,run:()=>K(Y.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:$&&m()?"resident":"sandbox",...ne,wheelVisible:v.visible,shelfVisible:z.filter(k=>k.g.visible).length,stairsVisible:z.filter(k=>k.g.visible&&k.steps.visible).length,shutter:T.rotation.y})}}function Hy({entries:n,elements:e,layer:t,camera:i}){const s=new St,r=new St,o=new X,a=Object.entries(n).map(([g,h])=>({element:e[g],anchor:h.point,x:NaN,y:NaN,visible:null}));let l=0,c=0,u=!1;return{update(g,h,d){if(t.hidden===g&&(t.hidden=!g),!g){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const m=!u||l!==h||c!==d||!s.equals(r);l=h,c=d,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!m)continue;o.copy(_.anchor)}o.applyMatrix4(s);const f=(o.x+1)*h*.5,p=(1-o.y)*d*.5,M=o.z>=-1&&o.z<=1&&f>=10&&f<=h-10&&p>=10&&p<=d-55;if(M!==_.visible&&(_.visible=M,_.element.classList.toggle("hidden",!M)),!M)continue;const A=Math.round(f*10)/10,x=Math.round(p*10)/10;(A!==_.x||x!==_.y)&&(_.x=A,_.y=x,_.element.style.transform=`translate3d(${A}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Wy(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,g=Math.max(12,u?0:a.bottom+12,u?c.bottom+12:0),h=Math.max(64,innerHeight-l.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(g)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Se=n=>document.querySelector(n),en=()=>innerWidth<700,dp=matchMedia("(prefers-reduced-motion: reduce)").matches;let Ur={};try{Ur=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!Ur.running,harvest:Math.min(99,Math.max(0,Number(Ur.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Ur.dockTrips)||0))),dockPending:Ur.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function fr(){return we.roof===null?we.running||we.loop>0:!!we.roof}function Kc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const it=new ap({antialias:!0,alpha:!1,powerPreference:"high-performance"});it.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2));it.setSize(innerWidth,innerHeight,!1);it.shadowMap.enabled=!0;it.shadowMap.type=tr;it.shadowMap.autoUpdate=!1;it.shadowMap.needsUpdate=!0;it.outputColorSpace=cn;it.toneMapping=il;it.toneMappingExposure=1.22;Se("#world").append(it.domElement);const Yt=new If;Yt.background=new dt("#182e32");Yt.fog=new ml("#182e32",8e-4);const Oe=new co(-10,10,10,-10,.1,600),Bu=new X(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(Bu);const je=new qx(Oe,it.domElement);je.target.copy(Bu);je.enableDamping=!0;je.enableRotate=!1;je.enablePan=!0;je.minZoom=.075;je.maxZoom=2.5;je.screenSpacePanning=!1;je.mouseButtons.LEFT=Ri.PAN;je.mouseButtons.RIGHT=Ri.PAN;je.touches.ONE=Ti.PAN;je.touches.TWO=Ti.DOLLY_PAN;Yt.add(new $f("#d9eedc","#334d53",2.3));const Is=new Ou("#ffe2ac",3.3);Is.position.set(-7,14,6);Is.castShadow=!0;Is.shadow.mapSize.set(en()?512:1024,en()?512:1024);Object.assign(Is.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});Is.shadow.bias=-4e-4;Is.shadow.normalBias=.025;Yt.add(Is);const fp=new Ou("#8ad5d8",1.3);fp.position.set(5,7,-8);Yt.add(fp);const ht=new ji;Yt.add(ht);const gc={};function Ze(n,e={}){const t=n+JSON.stringify(e);return gc[t]||(gc[t]=new Qs({color:n,roughness:.8,...e}))}const ui={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},ge={concrete:Ze(ui.concrete),cream:Ze(ui.cream),dark:Ze(ui.dark),metal:Ze(ui.metal,{metalness:.5,roughness:.4}),copper:Ze(ui.copper,{metalness:.6,roughness:.35}),rust:Ze(ui.rust),black:Ze(ui.black),leaf:Ze(ui.leaf),light:Ze("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:Ze("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},_r={box:new Vi(1,1,1),sphere:new yl(1,12,8),ico:new lo(1,1),cyl:new oo(1,1,1,16),cone:new Ps(1,1,8)};function kt(n,e,t,i,s=ht){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Ve=(n,e,t,i=ht)=>kt(_r.box,t,n,e,i),nt=(n,e,t,i=ht)=>kt(_r.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),ft=(n,e,t,i,s=ht)=>kt(_r.cyl,i,n,[e,t,e],s);function uo(n,e,t,i=ht,s=.08){return kt(new ku(...e,1,s),t,n,null,i)}function at(n=[0,0,0],e=ht){const t=new ji;return t.position.set(...n),e.add(t),t}function Gi(n,e,t,i=ht){const s=new Cu(n.map(r=>new X(...r)));return kt(new Sl(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function mt(n,e,t,i,s=ht){const r=new X(...n),o=new X(...e),a=o.clone().sub(r),l=ft(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return l.quaternion.setFromUnitVectors(new X(0,1,0),a.normalize()),l}function vt(n,e,t,i,s=ht,r=[Math.PI/2,0,0]){const o=kt(new Ml(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Rt(n,e,t,i,s=ht,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const l=new wu(o);l.colorSpace=cn;const c=kt(new Ls(t,i),new ro({map:l,side:Nn}),e,null,s);return c.castShadow=!1,c}let _c=179;function Ct(){return _c=_c*1664525+1013904223>>>0,_c/4294967296}const Qa=document.createElement("canvas");Qa.width=Qa.height=256;const ja=Qa.getContext("2d");ja.fillStyle="#b4bcaa";ja.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)ja.fillStyle=`rgba(${Ct()>.5?"60,82,64":"235,229,201"},${Ct()*.08})`,ja.fillRect(Ct()*256,Ct()*256,1+Ct()*3,1+Ct()*3);const to=new wu(Qa);to.wrapS=to.wrapT=Xr;to.repeat.set(5,5);to.colorSpace=cn;const qy=Ze("#c2c6b1",{map:to,roughness:.97});function Vu(n,e,t,i,s=ht){const r=new ao;n.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new mr(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),kt(o,i,null,null,s)}const Gu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Vu(Gu,0,.82,ge.concrete);Vu(Gu,.06,.14,qy);Vu(Gu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,Ze("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Ct()*10.9,t=Ct()>.5?5.15:-5.2,i=kt(_r.ico,Ze(n%3?"#557469":"#668477"),[e,-1.15-Ct()*.5,t],[.25+Ct()*.8,.2+Ct()*.55,.35+Ct()*.3]);i.rotation.y=Ct()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Ve([e,-.37,5.61],[.48,.19,.025],n%2?ge.copper:ge.dark),n%2===0&&Gi([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,ge.metal)}Rt("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,ht,{size:32});const Ot=at([-3.2,.08,-2.5]),pn=at([0,0,0],Ot);Ve([0,.08,0],[4.5,.15,3.6],ge.dark,Ot);Ve([0,1.2,-1.68],[4.5,2.4,.18],ge.cream,Ot);Ve([-2.15,1,0],[.18,2,3.6],ge.cream,Ot);for(let n=0;n<5;n++){Ve([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],ge.concrete,Ot),Ve([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],ge.metal,Ot);for(let e=0;e<3;e++)Ve([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],ge.copper,Ot)}Ve([0,2.47,-.2],[4.8,.14,3.7],ge.rust,pn);for(let n=0;n<23;n++){const e=Ve([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],Ze("#d09062"),pn);e.rotation.x=-.015}Ve([0,2.35,1.62],[4.8,.14,.18],ge.dark,Ot);mt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,ge.copper,Ot);mt([2.3,.12,1.62],[2.3,2.4,1.62],.055,ge.copper,Ot);Rt("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Ot,{size:37});Ve([.1,.85,-.84],[3.8,.13,.87],ge.rust,Ot);for(const n of[-1.5,1.65])Ve([n,.44,-.84],[.12,.85,.65],ge.metal,Ot);for(let n=0;n<3;n++)Ve([-1.15+n*.95,.51,-.85],[.82,.47,.75],ge.concrete,Ot),Ve([-1.15+n*.95,.5,-.44],[.18,.04,.03],ge.copper,Ot);for(let n=0;n<6;n++)Ve([-1.6+n*.48,2.07,-1.48],[.28,.16+Ct()*.16,.17],Ze(["#9fba95","#cb9b70","#667f71"][n%3]),Ot);ft([0,.5,.7],.32,.12,ge.rust,Ot);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;mt([e,.06,t],[e,.5,t],.04,ge.metal,Ot)}for(let n=0;n<4;n++)vt([-1.5,.06,1],.3-n*.045,.025,ge.black,Ot);ft([-1.5,3,-.9],.16,.9,ge.metal,pn);ft([-1.5,3.47,-.9],.24,.08,ge.rust,pn);Ve([1.4,2.9,-.4],[.8,.5,.6],ge.concrete,pn);for(let n=0;n<5;n++)Ve([1.1+n*.15,2.94,-.085],[.035,.32,.03],ge.dark,pn);const Hu=new El("#ffca86",5,5,2);Hu.position.set(-3,1.7,-1.1);ht.add(Hu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=uo([n,.1,e],[.74,.05,.74],Ze(Ct()>.3?"#b3baa6":"#a5b5a4"),ht,.018);t.rotation.y=(Ct()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Ct()*12,t=-5.1+Ct()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=kt(_r.cone,ge.leaf,[e,.1,t],[.022,.12+Ct()*.12,.022]);i.rotation.z=(Ct()-.5)*.7}const Qc=new Gn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Nn});Ve([3.7,.12,3.6],[4.9,.24,2.7],ge.dark);kt(new Ls(4.5,2.4),Qc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Ve([3.7,.29,n],[5,.38,.16],ge.cream);for(const n of[1.18,6.2])Ve([n,.29,3.6],[.16,.38,2.85],ge.cream);for(let n=0;n<13;n++)Ve([1.85,.5,2.15+n*.235],[1.08,.09,.22],Ze(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])ft([e,.88,n],.045,.8,ge.copper);for(const n of[1.31,2.4])Gi([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,ge.cream);const Wu=[];for(let n=0;n<6;n++){let e=Ve([4+n*.095,-1.25,5.56],[.055,2.4,.03],Ze("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Wu.push(e)}for(let n=0;n<4;n++)Ve([3.96+n*.17,.31,5.31],[.055,.08,.6],ge.dark);const Jt=at([3.7,.1,-2.6]);uo([0,.14,0],[3.7,.27,3.5],ge.cream,Jt,.09);for(const n of[-1.55,1.55])Ve([n,1.76,0],[.17,3.25,.2],ge.metal,Jt),Ve([n,.38,0],[.45,.2,.6],ge.copper,Jt),mt([n,.36,-1.2],[n,2.9,0],.045,ge.copper,Jt),mt([n,.36,1.2],[n,2.9,0],.045,ge.copper,Jt);Ve([0,3.38,0],[3.5,.18,.26],ge.copper,Jt);const Xy=vt([0,2.7,-.5],1.83,.035,ge.copper,Jt,[0,0,0]);Xy.scale.y=.85;const ho=[];for(let n=0;n<5;n++){const e=at([-1.18+n*.59,3.24,0],Jt),t=1.8+n*.12;mt([0,0,-.08],[0,-t,0],.015,ge.dark,e),mt([0,0,.08],[0,-t,0],.015,ge.dark,e),nt([0,-t,0],.205,ge.copper,e),vt([0,-t,0],.211,.012,ge.light,e,[0,0,0]),ho.push({group:e,len:t,phase:n})}Ve([0,.6,1.3],[1.45,.8,.4],ge.metal,Jt);Rt("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Jt,{size:40});const Yy=ft([-.43,.97,1.3],.19,.07,ge.cream,Jt);Yy.rotation.x=Math.PI/2;const qu=Ve([-.43,.99,1.342],[.015,.22,.008],ge.rust,Jt);qu.rotation.z=-.7;const pp=nt([.53,.93,1.52],.09,ge.light,Jt),Tl=at([.15,.4,1.59],Jt);vt([0,0,0],.19,.023,ge.rust,Tl,[0,0,0]);for(let n=0;n<3;n++)mt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,ge.rust,Tl);Gi([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,ge.copper);const mp=[];function Xu(n,e,t=1.5){ft([n,t/2,e],.038,t,ge.metal),Ve([n,t,e],[.27,.11,.27],ge.dark),Ve([n,t-.18,e],[.17,.25,.17],ge.light),Ve([n,t-.34,e],[.25,.08,.25],ge.copper);const i=new El("#ffbe70",1.8,3);i.position.set(n,t-.16,e),mp.push(i)}Xu(-5.9,3.9,1.3);Xu(.3,-4.8,1.7);Xu(5.8,1.25,1.35);const un=at([-3.6,.08,3.55]),jc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;uo([0,.14,e],[3.6,.3,1.14],ge.rust,un,.06),Ve([0,.305,e],[3.36,.04,.92],Ze(ui.soil),un);for(let t=0;t<4;t++){const i=at([-1.26+t*.84,.33,e],un);ft([0,.14,0],.026,.28,ge.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=nt([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],Ze(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){nt([0,.17,0],[.25,.18,.25],Ze("#b6c58a"),i);for(let s=0;s<6;s++){const r=nt([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],ge.leaf,i);r.rotation.y=s}jc.push(i)}else{const s=nt([.05,.22,0],[.1,.21,.12],Ze(ui.purple,{roughness:.35}),i);s.rotation.z=-.25,nt([.05,.41,0],[.075,.025,.07],ge.leaf,i),jc.push(i)}}}const gp=at([-1.72,.1,.8],un);for(let n=0;n<2;n++)Ve([n*3.45,.6,0],[.04,1.3,.04],ge.copper,gp);mt([0,1.25,0],[3.45,1.25,0],.022,ge.copper,gp);Rt("КОБАЧКИ",[-.45,.68,1.64],1,.26,un,{bg:"#c2c7a3",fg:"#445e45",size:42});ft([1.9,.23,.7],.18,.34,Ze("#6b9389"),un);mt([2.04,.25,.7],[2.4,.46,.7],.045,Ze("#6b9389"),un);vt([1.8,.48,.7],.16,.02,ge.copper,un,[0,0,0]);Ve([-1.6,.2,1.47],[.65,.4,.45],ge.rust,un);for(let n=0;n<3;n++)Ve([-1.6,.12+n*.11,1.71],[.7,.05,.025],ge.copper,un);const Mn=at([-3.8,.08,.35]);ft([0,.73,0],.58,.1,ge.rust,Mn);ft([0,.35,0],.045,.7,ge.metal,Mn);for(let n=0;n<3;n++)mt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,ge.metal,Mn);const fo=at([.1,.81,0],Mn);nt([0,.2,0],[.23,.22,.23],ge.cream,fo);ft([0,.37,0],.14,.06,ge.copper,fo);nt([0,.42,0],.045,ge.dark,fo);mt([.15,.18,0],[.33,.32,0],.07,ge.cream,fo);vt([-.15,.25,0],.18,.035,ge.dark,fo,[0,0,0]);for(const n of[-.35,.38])ft([n,.84,.24],.082,.15,ge.cream,Mn),vt([n,.92,.24],.084,.012,ge.copper,Mn),ft([n,.921,.24],.063,.006,Ze("#67513b"),Mn),vt([n+.09,.86,.24],.045,.011,ge.cream,Mn,[0,0,0]);const Cl=[];for(let n=0;n<9;n++){const e=nt([0,0,0],.07,Ze("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,Cl.push(e)}const ti=at([-5.65,.09,1.1]);Ve([0,.3,0],[.7,.6,.7],ge.concrete,ti);uo([0,.8,0],[.68,.45,.35],ge.dark,ti,.05);for(let n=0;n<6;n++)Ve([-.2+n*.05,.8,.18],[.022,.27,.018],ge.copper,ti);Ve([.18,.85,.184],[.16,.075,.02],ge.light,ti);nt([.18,.72,.19],.05,ge.cream,ti);mt([.18,1,0],[.48,1.6,0],.012,ge.copper,ti);const _p=at([-.5,.1,-4.6]);ft([0,1.75,0],.055,3.5,ge.metal,_p);nt([0,3.55,0],.09,ge.copper,_p);Gi([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,ge.dark);for(let n=0;n<8;n++){let e=n/8;const t=kt(new Ps(.13,.3,3),Ze(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const Rl=at([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Ve([0,0,0],[.55,.09,.025],ge.rust,Rl);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}nt([0,0,.05],.08,ge.copper,Rl);const rn=at([7.25,-.03,1.5]);Ve([0,-.12,0],[2.25,.3,2.5],ge.metal,rn);for(let n=0;n<10;n++)Ve([-.99+n*.22,.08,0],[.2,.08,2.6],ge.rust,rn);Ve([-.95,.2,-.95],[.35,.15,.35],ge.dark,rn);ft([.87,.34,.75],.075,.5,ge.copper,rn);ft([.87,.59,.75],.13,.05,ge.cream,rn);mt([.87,.1,-.7],[.87,2.3,-.7],.035,ge.copper,rn);Gi([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,ge.copper,rn);Ve([.17,2.09,-.7],[.25,.4,.25],Ze("#ffd591"),rn);Ve([.17,2.32,-.7],[.34,.08,.34],ge.dark,rn);for(let n=0;n<4;n++)vt([.87,.15,.75],.24-n*.025,.024,Ze("#b8ad86"),rn);Ve([6.7,.07,1.5],[1.4,.13,.8],ge.rust);Rt("НИКУДА",[.05,.28,1.36],1.3,.29,rn,{bg:"#c2c7a3",fg:"#445e45",size:45});const Yu=[];function Pl(n,e,t=1){const i=at(e,n),s=new ao;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),kt(new mr(s,{depth:.19,bevelEnabled:!1}),Ze("#dfc99a"),[0,.15,-.1],null,i);const r=kt(new Ps(.23,.36,3),ge.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=Pl(ht,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);Yu.push(e)}const ni=ry({THREE:Bt,root:ht,dock:rn,state:we,M:ge,mat:Ze,group:at,mesh:kt,box:Ve,sphere:nt,cyl:ft,torus:vt,rod:mt,sign:Rt,paperBoat:Pl,batchStatic:xt,persist:Kc,say:In,refresh:Ut,chime:bn,reduced:dp}),Qe=at([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const $u=Ze("#233a39",{metalness:.42,roughness:.32});nt([0,.1,0],[.62,.8,.55],$u,Qe);nt([0,-.36,.1],[.44,.43,.43],$u,Qe);nt([-.61,.03,.03],[.1,.2,.12],ge.copper,Qe);nt([.61,.03,.03],[.1,.2,.12],ge.copper,Qe);for(const n of[-.23,.23]){nt([n,.2,.485],[.17,.13,.057],ge.black,Qe),vt([n,.2,.541],.078,.02,ge.copper,Qe,[0,0,0]),nt([n,.2,.56],.041,ge.light,Qe);const e=Ve([n,.38,.48],[.24,.045,.06],ge.cream,Qe);e.rotation.z=n>0?-.13:.13}nt([0,.04,.51],[.09,.17,.11],$u,Qe);nt([0,-.2,.44],[.31,.16,.11],ge.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=uo([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],ge.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=nt([t,i,-.04],[.18,.18,.48],ge.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Gi([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,Ze("#f2edda"),Qe)}for(let n=0;n<3;n++)nt([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],ge.cream,Qe);const Ju=vt([0,1.05,0],.77,.019,ge.copper,Qe);Ju.rotation.z=.14;const $y=new El("#ffbb62",.9,3);$y.position.set(0,.2,.9);const ia=vt([-.15,.26,.85],.7,.018,ge.copper),no=kt(new _l(.64,32),new ro({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);no.rotation.x=-Math.PI/2;no.castShadow=!1;const Ci=new X(-.15,1.9,.85),Vn=at([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Ve([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?ge.cream:ge.concrete,Vn);t.rotation.x=Math.PI/2-e,n%3===0&&mt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,ge.copper,Vn)}for(const n of[-.45,.45])vt([n,0,0],2.07,.025,ge.copper,Vn,[0,Math.PI/2,0]);for(const n of[-.34,.34])vt([n,0,0],1.7,.075,ge.concrete,Vn,[0,Math.PI/2,0]);mt([0,-2.15,-1.2],[0,-1.58,-.8],.07,ge.metal,Vn);mt([0,-2.15,1.2],[0,-1.58,.8],.07,ge.metal,Vn);Rt("ОБРАТНО",[.49,-.55,.2],1.15,.3,Vn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Ct()*20,t=-8+Ct()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||kt(_r.ico,Ze("#47675f"),[e,-1.3-Ct()*2,t],[.22+Ct()*.55,.19+Ct()*.4,.27+Ct()*.4])}const vp=new Wt,xp=[];for(let n=0;n<75;n++)xp.push((Ct()-.5)*25,Ct()*9-2,(Ct()-.5)*22);vp.setAttribute("position",new bt(xp,3));const yp=new Df(vp,new bu({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));Yt.add(yp);function xt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new St().multiplyMatrices(i,r.matrixWorld));let l=t.get(o);l||t.set(o,l={material:r.material,geos:[]}),l.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=sy(o,!1);a&&kt(a,r,null,null,n),o.forEach(l=>l.dispose())}}xt(ht,[Qe,un,Jt,Mn,ti,rn,Ot,Vn,Rl,...Yu,...Cl,...Wu,ia,no,ni.travel]);xt(Ot,[pn]);xt(pn,[]);xt(Vn,[]);xt(Qe,[Ju]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});xt(Mn,[...Cl]);xt(ti,[]);xt(rn,[ni.gallery,ni.beacon]);xt(Jt,[...ho.map(n=>n.group),Tl,qu,pp]);ho.forEach(n=>xt(n.group,[]));const io=at([0,.33,0],un);jc.forEach(n=>{io.add(n),n.position.y-=.33});xt(io,[]);xt(un,[io]);const Sn=dy({THREE:Bt,root:ht,scene:Yt,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,paperBoat:Pl,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},chime:bn}),Li=Gy({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,mesh:kt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),es=Rm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Ii=Tm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Di=_m({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),Ni=hm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),Ui=tm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),Oi=Mm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),_i=bm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Fi=wm({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),vi=Am({THREE:Bt,root:ht,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,rod:mt,torus:vt,sign:Rt,batchStatic:xt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),ts=Cm({THREE:Bt,workshop:Ot,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,changed:()=>{Ut(),it.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Ll=fy({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,mesh:kt,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,chime:bn}),po=By({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,mesh:kt,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,paperBoat:Pl,batchStatic:xt,chime:bn}),On=ky({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,mesh:kt,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),Mp=py({head:Qe,group:at,sphere:nt,box:Ve,torus:vt,M:ge,mat:Ze}),fi=Ny({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,mesh:kt,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),Tn=Kp({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,tube:Gi,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),pi=om({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,tube:Gi,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),Dn=xy({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,tube:Gi,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),Qn=by({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),ns=Ay({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}}),mi=Py({THREE:Bt,scene:Yt,root:ht,head:Qe,M:ge,mat:Ze,group:at,box:Ve,sphere:nt,cyl:ft,rod:mt,torus:vt,sign:Rt,batchStatic:xt,chime:bn,changed:()=>{yi(),it.shadowMap.needsUpdate=!0}});let nn=null,ke=1;const Hn={ego:{n:"20",label:"самомнение / HDMI",title:"малый передатчик",description:"Двенадцать пикселей себя.",action:"передать",point:new X(3.5,.6,-45.2),position:new X(0,.6,-48),run:()=>Ui.run()},seams:{n:"19",label:"шовная",title:"голова по швам",description:"Три сцепленных кольца держат лицо.",action:"испытать инструкцией",point:new X(-20.4,.7,-45.4),position:new X(-24,.6,-48),run:()=>Ni.run()},still:{n:"18",label:"облачная перегонная",title:"16 часов на облако",description:"Четыре карты переливают одно облако.",action:"перелить облако",point:new X(28.4,.7,-19.8),position:new X(24,.5,-24),run:()=>Di.run()},fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new X(-26.4,.7,-34.3),position:new X(-23,.1,-32),run:()=>Oi.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new X(-32,.6,-20.6),position:new X(-24,.6,-24),run:()=>_i.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new X(24,.9,29.7),position:new X(24,.6,24),run:()=>Fi.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new X(-6.9,1.9,-20.1),position:new X(0,.6,-24),run:()=>vi.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new X(-17.5,1.3,3.4),position:new X(-24,.6,0),run:()=>Ii.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new X(-1.4,1.5,-1.1),position:new X(-3.2,1.25,-2.2),run:()=>ts.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new X(4.7,.8,25.8),position:new X(0,.4,24),run:()=>es.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new X(28.4,2.2,2.5),position:new X(24,.4,0),run:()=>Li.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new X(-.1,2.15,4.3),position:new X(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new X(-6,4.55,-3.25),position:new X(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,bp.copy(Qe.position),In("ноги не понадобились"),Ut())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new X(-3.2,3.15,-2.5),position:new X(-3.2,1.1,-2.5),run:()=>{we.roof=fr()?0:1,In(fr()?"заходи":"прикрыл"),Ut()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new X(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];In(n[Jy++%n.length]),Ci.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new X(3.7,3.85,-2.6),position:new X(3.7,1,-2.6),run:()=>{we.running=!we.running,Kc(),In(we.running?"ну пошло":"можно и полежать"),Ut()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new X(-3.7,1.65,.35),position:new X(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,Ci.set(-2.65,1.7,.65),In("щас, чайник поставлю"),Ut())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new X(-3.4,1,3.8),position:new X(-3.6,1,3.55),run:()=>{we.harvest++,sr=.15,Kc(),Ci.set(-1.6,1.6,2.3),In(we.harvest===1?"о, урожай":"кабачки опять победили"),Ut()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new X(-5.65,1.75,1.1),position:new X(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,Zu(),In(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Ut()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new X(7.4,2.75,1.1),position:new X(7.25,.9,1.5),run:()=>{ni.launchOrCollect(),we.dockPending===!1&&we.boat===0&&Ci.set(5.85,1.7,1.05)}}};let Jy=0,sr=1,Sp=0,As=0;const bp=new X;let Ep=()=>{as("engine"),Hn.engine.run()};const Il={};for(const[n,e]of Object.entries(Hn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>as(n),Se("#hotspots").append(t),Il[n]=t}const wp=Se("#hotspots"),vc=Se("#speech"),ys={width:innerWidth,height:innerHeight},Zy=Hy({entries:Hn,elements:Il,layer:wp,camera:Oe});let xc=!1,Dd=NaN,Nd=NaN;const Rr=new X;function as(n){we.selected=n,Se("#inspector").classList.remove("collapsed");const e=Hn[n];Se("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Se("#object-title").textContent=e.title,Se("#object-description").textContent=e.description,Ep=e.run,Se("#focus-object").hidden=!1,Se("#focus-object").textContent=Vt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ut();for(const[t,i]of Object.entries(Il))i.classList.toggle("selected",t===n)}function Ut(){const n=we.selected,e=Hn[n];if(Se("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=fr()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=ni.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Li.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=es.card();t=r.action,i=r.description}if(n==="bench"){const r=ts.card();t=r.action,i=r.description}if(n==="drydock"){const r=Ii.card();t=r.action,i=r.description}if(n==="dash"){const r=vi.card();t=r.action,i=r.description}if(n==="quotes"){const r=Fi.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=_i.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Oi.card();t=r.action,i=r.description,s=r.disabled}if(n==="seams"){const r=Ni.card();t=r.action,i=r.description,s=r.disabled}if(n==="still"){const r=Di.card();t=r.action,i=r.description,s=r.disabled}if(n==="ego"){const r=Ui.card();t=r.action,i=r.description,s=r.disabled}Ui.controls.hidden=n!=="ego",Ni.controls.hidden=n!=="seams",Di.controls.hidden=n!=="still",Oi.controls.hidden=n!=="fork",_i.controls.hidden=n!=="garage",Fi.controls.hidden=n!=="quotes",vi.controls.hidden=n!=="dash",Ii.controls.hidden=n!=="drydock",ts.controls.hidden=n!=="bench",es.controls.hidden=n!=="amnesty",Li.controls.hidden=n!=="cellar",Se("#enter-bench")&&(Se("#enter-bench").hidden=n!=="workshop"),Se("#enter-dream08").hidden=n!=="radio",Se("#enter-dream07").hidden=n!=="garage",Se("#enter-dream06").hidden=n!=="radio",Se("#enter-dream05").hidden=n!=="stair",Se("#enter-dream11").hidden=n!=="stair",Se("#enter-dream10").hidden=n!=="tea",Se("#enter-dream09").hidden=n!=="dock",Se("#enter-dream03").hidden=n!=="dock",Se("#enter-dream04").hidden=n!=="workshop",Se("#greenhouse-controls").hidden=n!=="greenhouse",Se("#thermal-moves").hidden=Sn.inspect().mode!=="playing",Se("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,Se("#object-description").textContent=i,Se("#object-action").innerHTML=t+" <span>↗</span>",Se("#object-action").disabled=s}Se("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&rt.watching()){rt.localPlay();return}rt.localPlay(),Ep(),As=performance.now()+2200};Se("#close-card").onclick=()=>Se("#inspector").classList.add("collapsed");function In(n){Se("#speech").textContent=n,Sp=performance.now()+4e3,Se("#speech").classList.add("visible")}Se("#markers").onclick=()=>{we.markers=!we.markers,Se("#markers").setAttribute("aria-pressed",we.markers),wp.hidden=!we.markers||!!nn||Oe.zoom<.4};let Vt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function Ap(){ys.width=innerWidth,ys.height=innerHeight;const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(en()?2.8:0),Oe.bottom=-e-(en()?2.8:0),Oe.updateProjectionMatrix(),it.setSize(innerWidth,innerHeight,!1),it.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2))}function vr(){if(rt==null||rt.unfollow(),nn){mo();return}Vt=null,document.body.classList.remove("close-look"),Se("#focus-object").textContent="осмотреть ближе ⊕",je.enableDamping=!1,je.update(),je.enableDamping=!0,je.maxZoom=2.5,Oe.zoom=1,je.target.copy(Bu),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Se("#focus-object").onclick=()=>{if(we.selected){if(Vt===we.selected){vr();return}Vt=we.selected,document.body.classList.add("close-look"),Se("#focus-object").textContent="весь двор ⌂",je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.copy(Hn[we.selected].position),en()&&(je.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams","ego"].includes(Vt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams","ego"].includes(Vt)?en()?1.8:1.6:en()?2.5:2.1,Vt==="bench"?(je.maxZoom=4.5,Oe.zoom=en()?3.8:3.4,je.target.y+=en()?-.15:0,je.target.x+=.3,je.target.z-=.2):je.maxZoom=2.5,Oe.updateProjectionMatrix()}};Se("#home").onclick=vr;Se("#zoom-in").onclick=()=>{Oe.zoom=Math.min(je.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Se("#zoom-out").onclick=()=>{Oe.zoom=Math.max(je.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Se("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",Ap);Ap();function Tp(n,e,t=!1){nn&&mo(),vr(),je.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Se("#inspector").classList.add("collapsed")}function Ky(){Tp(0,0);const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.zoom=Math.min(e*n/(rr.half*1.57),e/(rr.half*1.3)),Oe.updateProjectionMatrix()}const rr=hy({root:ht,camera:Oe,controls:je,mobile:en,go:Tp,overview:Ky,home:vr,locationTarget:()=>["dash","quotes","garage","fork","still","seams","ego"].includes(Vt)&&we.selected===Vt?Hn[Vt].position:null}),is=document.createElement("select");is.id="world-places";is.setAttribute("aria-label","Открыть место");is.append(new Option("места",""));for(const[n,e]of Object.entries(Hn))is.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(is,document.querySelector("#territory-location"));is.onchange=()=>{const n=is.value;Hn[n]&&(vr(),je.target.copy(Hn[n].position),as(n),is.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Ud=new Kf,Od=new Ae;let _s=null;it.domElement.addEventListener("pointerdown",n=>{_s={x:n.clientX,y:n.clientY,time:performance.now()}});it.domElement.addEventListener("pointerup",n=>{if(!_s||Math.hypot(n.clientX-_s.x,n.clientY-_s.y)>7||performance.now()-_s.time>550){_s=null;return}if(_s=null,Od.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Ud.setFromCamera(Od,Oe),nn)return;const e=Ud.intersectObjects([Ui.house,Ni.house,Di.house,Oi.house,_i.house,Fi.house,vi.house,Ii.house,ts.house,es.house,Li.house,Sn.house,Qe,Jt,un,Mn,ti,rn,Ot,Vn,ni.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Ui.house,Ni.house,Di.house,Oi.house,_i.house,Fi.house,vi.house,Ii.house,ts.house,es.house,Li.house,Sn.house,Qe,Jt,un,Mn,ti,rn,Ot,Vn,ni.travel].includes(t);)t=t.parent;const i=new Map([[Ui.house,"ego"],[Ni.house,"seams"],[Di.house,"still"],[Oi.house,"fork"],[_i.house,"garage"],[Fi.house,"quotes"],[vi.house,"dash"],[Ii.house,"drydock"],[ts.house,"bench"],[es.house,"amnesty"],[Li.house,"cellar"],[Sn.house,"greenhouse"],[Qe,"head"],[Jt,"engine"],[un,"garden"],[Mn,"tea"],[ti,"radio"],[rn,"dock"],[Ot,"workshop"],[Vn,"stair"],[ni.travel,"dock"]]).get(t);i&&as(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Hn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&as(t)}});let Cn=null;function Qy(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(o),c.start(),c});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Zu(){if(!Cn)return;const n=Cn.ctx.currentTime;Cn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Cn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}Se("#sound").onclick=async()=>{try{Cn||(Cn=Qy()),await Cn.ctx.resume(),we.sound=!we.sound,Cn.gain.gain.setTargetAtTime(we.sound?.08:0,Cn.ctx.currentTime,.3),Se("#sound").textContent=we.sound?"звук включён":"звук выключен",Se("#sound").setAttribute("aria-pressed",we.sound),Zu(),Ut()}catch{In("со звуком не сложилось")}};function bn(n=330){if(!Cn||!we.sound)return;const e=Cn.ctx.currentTime,t=Cn.ctx.createOscillator(),i=Cn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Cn.gain),t.start(e),t.stop(e+1.1)}Se("#about").onclick=()=>Se("#about-dialog").showModal();Se("#close-about").onclick=Se("#back-to-yard").onclick=()=>Se("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&nn){mo();return}n.key==="Escape"&&Se("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Se("#zoom-in").click(),n.key==="-"&&Se("#zoom-out").click(),n.key.toLowerCase()==="r"&&Se("#rotate").click(),n.key.toLowerCase()==="h"&&vr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{rt.localPlay(),Sn.step(n.dataset.thermal),As=performance.now()+2200};const jy={11:{title:"простор для бага",lines:[],verb:"обменять"},10:{title:"час дождя без грома",lines:[],verb:"согнуть"},9:{title:"уши для берега",lines:[],verb:"слушать"},8:{title:"десять факелов на диске",lines:[],verb:"настроить"},7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Ku(){return ke===11?Tn:ke===10?pi:ke===1?Sn:ke===2?Ll:ke===3?po:ke===4?On:ke===5?fi:ke===6?mi:ke===7?ns:ke===8?Qn:Dn}function yi(){const n=ke===1?Sn.inspect().dreamStep:Ku().inspect().step,e=jy[ke];if(Se("#exit-ear-dream").hidden=![9,10,11].includes(ke),Se("#dream-room").hidden=ke!==11,Se("#dream-rain").hidden=ke!==10,Se("#dream-ears").hidden=ke!==9,Se("#dream-torches").hidden=ke!==8,Se("#dream-cloud").hidden=ke!==6,Se("#dream-force").hidden=ke!==3,Se("#dream-roofs").hidden=ke!==4,Se("#dream-meter").hidden=ke!==5,Se("#dream-panel .object-kicker").textContent=`СОН ${String(ke).padStart(2,"0")} / БЕЗНОГИМ`,Se("#dream-panel h2").textContent=e.title,Se("#dream-text").textContent=ke===11?Tn.text():ke===10?pi.text():ke===9?Dn.text():ke===8?Qn.text():ke===7?ns.text():ke===6?mi.text():ke===5?fi.text():ke===4?On.text():e.lines[n],Se("#dream-breathe").textContent=ke===11?Tn.button():ke===10?pi.button():ke===9?Dn.button():ke===8?Qn.button():ke===7?ns.button():ke===6?mi.button():ke===5?fi.button():ke===4?On.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Se("#dream-breathe").disabled=ke===11&&(Tn.busy()||Tn.inspect().phase==="furnishing"&&!Tn.ready())||ke===10&&pi.busy()||ke===9&&(Dn.busy()||!Dn.ready()&&Dn.inspect().phase==="sorting")||ke===8&&(Qn.busy()||!Qn.canRelease())||ke===7&&ns.busy()||ke===6&&["heating","raining"].includes(mi.inspect().phase)||ke===4&&On.inspect().phase==="flying"||ke===5&&["measuring","unfolding","climbing"].includes(fi.inspect().phase),ke===11){const t=Tn.inspect();for(const i of document.querySelectorAll("[data-room-leg]")){const s=Number(i.dataset.roomLeg);i.textContent=["левая","правая"][s]+" · "+["лестница","ширина","глубина","высота"][t.slots[s]]+" ↻",i.disabled=t.phase!=="furnishing",i.setAttribute("aria-label",["левая","правая"][s]+" лестница: "+["на месте","в ширину","в глубину","в высоту"][t.slots[s]])}}if(ke===10){const t=pi.inspect();for(const i of document.querySelectorAll("[data-rain-fold]")){const s=Number(i.dataset.rainFold);i.textContent=s+1+" · "+(t.folds[s]?"желоб":"лист"),i.setAttribute("aria-pressed",t.folds[s]),i.disabled=t.phase!=="folding"}}if(ke===9){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-ear-stone]")){const s=Number(i.dataset.earStone);i.textContent=[1,2,3,4,5,7][s]+" · "+["полка","левое","правое"][t.places[s]],i.setAttribute("aria-label","камень "+[1,2,3,4,5,7][s]+": "+["на полке","в левом ухе","в правом ухе"][t.places[s]]),i.disabled=t.phase!=="sorting"}}if(ke===8){const t=Qn.inspect();for(const i of document.querySelectorAll("[data-torch-turn]")){const s=Number(i.dataset.torchTurn);i.textContent=["птица","вода","ветер"][s]+" · "+t.turns[s]+" ↻",i.setAttribute("aria-pressed",t.aligned[s]),i.disabled=t.phase!=="tuning"}}if(ke===6){const t=mi.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(ke===5){const t=fi.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(ke===4){const t=On.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${On.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function Wn(n=1){nn||(ke=n,nn={target:je.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:Vt,returnId:n===11?"stair":n===10?"tea":n===9?"dock":n===8?"radio":n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},Ku().enter(),je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.set(0,en()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?en()?1.65:1.75:en()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7||n===8||n===9||n===10||n===11),el="",Se("#dream-panel").hidden=!1,yi(),it.shadowMap.needsUpdate=!0)}function mo(){if(!nn)return;const n=nn;nn=null,Ku().exit(),je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,Vt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),el="",Se("#dream-panel").hidden=!0,it.shadowMap.needsUpdate=!0,as(n.returnId)}Se("#enter-dream").onclick=()=>Wn(1);Se("#exit-dream").onclick=mo;Se("#dream-breathe").onclick=()=>{ke===11?Tn.act():ke===1?Sn.breathe():ke===2?Ll.pour():ke===3?po.toss():ke===4?On.send():ke===5?fi.act():ke===6?mi.act():ke===7?ns.act():ke===8?Qn.act():ke===9?Dn.act():pi.act(),As=performance.now()+2200,yi(),it.shadowMap.needsUpdate=!0};const go=document.createElement("button");go.id="enter-bench";go.hidden=!0;go.textContent="собрать механический монитор ↗";go.onclick=()=>{as("bench"),Se("#focus-object").click()};Se("#focus-object").before(go);const Dl=document.createElement("button");Dl.id="enter-dream02";Dl.textContent="сон 02 / вода спит ↗";Dl.onclick=()=>Wn(2);Li.controls.append(Dl);Se("#exit-ear-dream").onclick=mo;Se("#enter-dream11").onclick=()=>Wn(11);for(const n of document.querySelectorAll("[data-room-leg]"))n.onclick=()=>{const e=Number(n.dataset.roomLeg);Tn.choose(e,(Tn.inspect().slots[e]+1)%4)};Se("#enter-dream10").onclick=()=>Wn(10);for(const n of document.querySelectorAll("[data-rain-fold]"))n.onclick=()=>pi.fold(Number(n.dataset.rainFold));Se("#enter-dream09").onclick=()=>Wn(9);for(const n of document.querySelectorAll("[data-ear-stone]"))n.onclick=()=>Dn.move(Number(n.dataset.earStone));Se("#enter-dream03").onclick=()=>Wn(3);Se("#enter-dream04").onclick=()=>Wn(4);Se("#enter-dream08").onclick=()=>Wn(8);for(const n of document.querySelectorAll("[data-torch-turn]"))n.onclick=()=>Qn.turn(Number(n.dataset.torchTurn));Se("#enter-dream07").onclick=()=>Wn(7);Se("#enter-dream06").onclick=()=>Wn(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>mi.choose(n.dataset.cloudTarget);Se("#enter-dream05").onclick=()=>Wn(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>fi.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{On.turn(Number(n.dataset.roofTurn)),As=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{po.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Se("#dream-archive").onclick=()=>Se("#dream-archive-dialog").showModal();Se("#close-dream-archive").onclick=()=>Se("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Se("#dream-archive-dialog").close(),Wn(Number(n.dataset.dreamId))};const rt=ay({head:Qe,headDestination:Ci,state:we,controls:je,camera:Oe,refresh:Ut,setAudioTone:Zu,say:In,onHarvest:()=>{sr=.15}});let yc="";const Cp=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Cp.push(new X(n,e,t));const Qu=[];for(const n of[-4.2,4.2])for(const e of[-1.65,4.5])for(const t of[-51.5,-43.6])Qu.push(new X(n,e,t));const ju=[];for(const n of[-28,-20])for(const e of[-1.65,3.75])for(const t of[-51.4,-43.6])ju.push(new X(n,e,t));const eh=[];for(const n of[19.3,28.7])for(const e of[-1.65,3.1])for(const t of[-27.2,-19.5])eh.push(new X(n,e,t));const Rp=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])Rp.push(new X(n,e,t));const Pp=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])Pp.push(new X(n,e,t));const Lp=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])Lp.push(new X(n,e,t));const Ip=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Ip.push(new X(n,e,t));function eM(){var R,P;const n=Vt==="ego"&&we.selected==="ego",e=Vt==="seams"&&we.selected==="seams",t=Vt==="still"&&we.selected==="still",i=Vt==="fork"&&we.selected==="fork",s=Vt==="garage"&&we.selected==="garage",r=Vt==="quotes"&&we.selected==="quotes",o=Vt==="dash"&&we.selected==="dash",a=Vt==="drydock"&&we.selected==="drydock"||o||r||s||i||t||e||n,l=(Vt==="bench"&&we.selected==="bench"||a)&&!Se("#inspector").classList.contains("collapsed")&&!nn;if(document.body.classList.toggle("ego-look",l&&n),document.body.classList.toggle("seams-look",l&&e),document.body.classList.toggle("still-look",l&&t),document.body.classList.toggle("fork-look",l&&i),document.body.classList.toggle("garage-look",l&&s),document.body.classList.toggle("quotes-look",l&&r),document.body.classList.toggle("dash-look",l&&(o||r||s||i||t||e||n)),document.body.classList.toggle("bench-look",l&&!a),document.body.classList.toggle("drydock-look",l&&a),!l){yc="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const c=Se("#inspector").getBoundingClientRect(),u=Se(".territory-nav").getBoundingClientRect(),g=Se(".toolbar").getBoundingClientRect(),h=innerWidth<=900&&innerHeight>innerWidth,d=h?{left:14,right:g.left-10,top:u.bottom+(t||e||n?6:14),bottom:c.top-(t||e||n?6:14)}:{left:Math.max(c.right+18,u.right+18),right:g.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!h&&(d.left=u.right+12,d.right=innerWidth-16,d.top=g.bottom+10,d.bottom=c.top-10),(o||r||s||i||t||e||n)&&innerWidth<=900&&!h&&(d.left=12,d.right=c.left-12,d.top=u.bottom+10,d.bottom=Se("footer").getBoundingClientRect().top-12);const m=Se(".resident-history");a&&innerWidth>900&&m&&!m.hidden&&(d.right=Math.min(d.right,m.getBoundingClientRect().left-18));const _=s?_i.inspect():null,f=[];if(_){const U=Math.max(_.gap,_.range,((R=_.flight)==null?void 0:R.range)||0),O=Math.max(_.apex,((P=_.flight)==null?void 0:P.apex)||0);for(const H of[-34,-32+.7*U+1.6])for(const B of[-1.3,Math.max(1.5,.8+.5*O)])for(const I of[-26,-19.8])f.push(new X(H,B,I))}const p=[(_==null?void 0:_.gap)||0,(_==null?void 0:_.range)||0,(_==null?void 0:_.apex)||0,n?20:e?19:t?18:i?17:s?16:r?15:o?14:a?13:12,innerWidth,innerHeight,d.left,d.right,d.top,d.bottom,mn.targetAngle].map(U=>Math.round(U*10)/10).join(":");if(p===yc||d.bottom-d.top<35||d.right-d.left<50)return;yc=p;const M=()=>{Oe.updateMatrixWorld();const U=(n?Qu:e?ju:t?eh:i?Rp:s?f:r?Pp:o?Lp:a?Ip:Cp).map(O=>Mt(O.clone()));return{l:Math.min(...U.map(O=>O.x)),r:Math.max(...U.map(O=>O.x)),t:Math.min(...U.map(O=>O.y)),b:Math.max(...U.map(O=>O.y))}};let A=M();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((d.right-d.left)/(A.r-A.l),(d.bottom-d.top)/(A.b-A.t))),Oe.updateProjectionMatrix(),A=M();const x=(d.left+d.right-A.l-A.r)/2,b=(d.top+d.bottom-A.t-A.b)/2,S=new X().setFromMatrixColumn(Oe.matrixWorld,0),T=new X().setFromMatrixColumn(Oe.matrixWorld,1),v=S.multiplyScalar(-x*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(T.multiplyScalar(b*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));je.target.add(v),Oe.position.add(v),Oe.lookAt(je.target),Oe.updateMatrixWorld()}let el="";const Dp=[];for(const n of[-4.5,4.5])for(const e of[-.4,4.5])for(const t of[-3.8,3.8])Dp.push(new X(n,e,t));const Np=[];for(const n of[-4.1,4.1])for(const e of[-.4,5.8])for(const t of[-3.4,3.4])Np.push(new X(n,e,t));const Up=[];for(const n of[-4.5,4.5])for(const e of[-.6,5.3])for(const t of[-3.3,3.7])Up.push(new X(n,e,t));const Op=[];for(const n of[-3.6,3.6])for(const e of[-.65,4.8])for(const t of[-3.6,3.6])Op.push(new X(n,e,t));const Fp=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])Fp.push(new X(n,e,t));const zp=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])zp.push(new X(n,e,t));const kp=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])kp.push(new X(n,e,t));function tM(){if(!nn||![4,5,6,7,8,9,10,11].includes(ke))return;const n=Se("#dream-panel").getBoundingClientRect(),e=Se("footer").getBoundingClientRect(),t=Se(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===el||r.right-r.left<60||r.bottom-r.top<80)return;el=o;const a=()=>{Oe.updateMatrixWorld();const m=(ke===11?Dp:ke===10?Np:ke===9?Up:ke===8?Op:ke===7?Fp:ke===5?zp:kp).map(_=>Mt(_.clone()));return{l:Math.min(...m.map(_=>_.x)),r:Math.max(...m.map(_=>_.x)),t:Math.min(...m.map(_=>_.y)),b:Math.max(...m.map(_=>_.y))}};let l=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(l.r-l.l),(r.bottom-r.top)/(l.b-l.t))),Oe.updateProjectionMatrix(),l=a();const c=(r.left+r.right-l.l-l.r)/2,u=(r.top+r.bottom-l.t-l.b)/2,g=new X().setFromMatrixColumn(Oe.matrixWorld,0),h=new X().setFromMatrixColumn(Oe.matrixWorld,1),d=g.multiplyScalar(-c*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));je.target.add(d),Oe.position.add(d),Oe.lookAt(je.target),Oe.updateMatrixWorld()}let Fd=performance.now(),Jo=0,zd=0;function Mt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function nM(){rt.sync();const n=performance.now(),e=(n-Fd)/1e3;Fd=n,Jo+=e,we.energy=xn.damp(we.energy,we.running?1:0,1.6,e);const t=dp?Jo*.2:Jo;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(je.target.x+Math.sin(mn.angle)*i,je.target.y+i*Math.SQRT1_2,je.target.z+Math.cos(mn.angle)*i),Oe.lookAt(je.target),je.update(),nn||(je.target.x=xn.clamp(je.target.x,-62,rr.half+2),je.target.z=xn.clamp(je.target.z,-62,rr.half+2)),rr.update(),eM(),tM();for(const s of ho)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(pn.position.z=xn.damp(pn.position.z,fr()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,fr()?.4:0,2,e),Tl.rotation.z=t*we.energy*.28,qu.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,pp.material.emissiveIntensity=.45+we.energy*1.5,Qc.uniforms.uTime.value=t,Qc.uniforms.uEnergy.value=we.energy,Rl.rotation.z=t*(.09+we.energy*.23),mp.forEach(s=>s.intensity=.65+we.energy*1.5),Hu.intensity=2+we.energy*4,Qe.position.x=xn.damp(Qe.position.x,Ci.x,1.6,e),Qe.position.z=xn.damp(Qe.position.z,Ci.z,1.6,e),Qe.position.y=xn.damp(Qe.position.y,Ci.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=xn.smoothstep(s,0,2);Qe.position.lerpVectors(bp,new X(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Qe.position.lerpVectors(new X(-6,.65,-3.25),Ci,r),Qe.rotation.x=(1-r)*Math.PI*2}we.loop||(Qe.rotation.x=0,In("ну вот и дома"),Ut())}if(rt.place(),Qe.rotation.y=Math.sin(t*.3)*.12,Ju.rotation.y=t*.13,ia.position.x=Qe.position.x,ia.position.z=Qe.position.z,ia.rotation.z=.04*Math.sin(t),no.position.x=Qe.position.x,no.position.z=Qe.position.z,sr=xn.damp(sr,1,.85,e),io.scale.y=sr,io.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(In("чай готов. живём."),Ut(),bn(440))),Cl.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),Yu.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),Mp.update(rt.watching()),Ll.update(e,t),po.update(e,t),On.update(e,t),fi.update(e,t),mi.update(e,t),ns.update(e,t),Qn.update(e,t),Dn.update(e,t),pi.update(e,t),Tn.update(e,t),Ui.update(e),Ni.update(e),Di.update(e,t),Oi.update(e),_i.update(e),Fi.update(e),vi.update(e),Ii.update(e),ts.update(e),pn.visible=!(Vt==="bench"&&we.selected==="bench"&&!Se("#inspector").classList.contains("collapsed")&&!nn),es.update(e),Li.update(Jo),Sn.update(e,t),ni.update(e,t),xc!==we.dockPending&&(xc=we.dockPending,Il.dock.classList.toggle("waiting",xc)),Wu.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),yp.rotation.y=t*.003,we.running&&t-zd>3.5&&(zd=t,bn([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),Zy.update(!nn&&Oe.zoom>=.4&&we.markers,ys.width,ys.height),nn||n>Sp)vc.classList.contains("visible")&&vc.classList.remove("visible");else{Rr.copy(Qe.position),Rr.y+=1.52,Rr.project(Oe);const s=Math.round(Math.max(85,Math.min(ys.width-85,(Rr.x+1)*ys.width*.5))*10)/10,r=Math.round((1-Rr.y)*ys.height*.5*10)/10;(s!==Dd||r!==Nd)&&(Dd=s,Nd=r,vc.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}As&&performance.now()>As&&(it.shadowMap.needsUpdate=!0,As=0),it.render(Yt,Oe)}we.running&&(Se("#object-action").innerHTML="остановить двор <span>↗</span>");Ut();it.setAnimationLoop(nM);requestAnimationFrame(()=>Se("#loading").classList.add("done"));window.__yard={state:we,select:as,inspect:()=>({resident:rt.inspect(),territory:rr.inspect(),sleepBody:Mp.inspect(),sleepDream:Ll.inspect(),quietDream:po.inspect(),roomDream:Tn.inspect(),roomDreamScreen:Tn.inspect().landmarks.map(n=>Mt(new X(...n))),rainDream:pi.inspect(),rainDreamScreen:pi.inspect().landmarks.map(n=>Mt(new X(...n))),earDream:Dn.inspect(),earDreamScreen:Dn.inspect().landmarks.map(n=>Mt(new X(...n))),torchDream:Qn.inspect(),torchDreamScreen:Qn.inspect().landmarks.map(n=>Mt(new X(...n))),pocketDream:ns.inspect(),pocketDreamScreen:ns.inspect().landmarks.map(n=>Mt(new X(...n))),cloudDream:mi.inspect(),cloudDreamScreen:mi.inspect().landmarks.map(n=>Mt(new X(...n))),meterDream:fi.inspect(),meterDreamScreen:fi.inspect().landmarks.map(n=>Mt(new X(...n))),roofDream:On.inspect(),roofDreamGoalScreen:On.inspect().goals.map(n=>Mt(new X(...n))),roofDreamLetterScreen:Mt(new X(...On.inspect().letter)),dreamId:nn?ke:null,ego:Ui.inspect(),egoBounds:Qu.map(n=>Mt(n.clone())),egoScreen:Mt(new X(.6,2,-48.7)),egoScreens:Ui.inspect().landmarks.map(n=>Mt(new X(...n))),seams:Ni.inspect(),seamsBounds:ju.map(n=>Mt(n.clone())),seamsScreen:Mt(new X(-24,1,-48)),seamsScreens:Ni.inspect().landmarks.map(n=>Mt(new X(...n))),still:Di.inspect(),stillBounds:eh.map(n=>Mt(n.clone())),stillScreen:Mt(new X(24,.3,-24)),stillScreens:Di.inspect().landmarks.map(n=>Mt(new X(...n))),fork:Oi.inspect(),forkScreen:Mt(new X(-23,.1,-32)),forkScreens:Oi.inspect().landmarks.map(n=>Mt(new X(...n))),garage:_i.inspect(),garageScreen:Mt(new X(..._i.inspect().garage).add(new X(-24,-.7,-24))),garageCarScreen:Mt(new X(-32,-.7,-24)),quotes:Fi.inspect(),quoteScreens:Fi.inspect().quotePositions.map(n=>Mt(new X(...n).add(new X(24,-1.05,24)))),dash:vi.inspect(),dashSnailScreen:Mt(new X(...vi.inspect().snail).add(new X(0,-1,-24))),dashBeamScreen:Mt(new X(...vi.inspect().beam).add(new X(0,-1.5,-24))),drydock:Ii.inspect(),drydockShipScreen:Mt(new X(...Ii.inspect().ship).add(new X(-24,-.5,0))),bench:ts.inspect(),benchScreen:Mt(new X(-2.65,1.58,-3.18)),benchBucketScreen:Mt(new X(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:es.inspect(),amnestyScreen:Mt(new X(0,-.3,24)),cellar:Li.inspect(),cellarScreen:Mt(new X(24,-.3,.25)),objects:Object.keys(Hn),greenhouse:Sn.inspect(),dock:ni.inspect(),boatScreen:Mt(new X(...ni.inspect().boat).add(new X(0,.2,0))),drawCalls:it.info.render.calls,triangles:it.info.render.triangles,gpuGeometries:it.info.memory.geometries,zoom:Oe.zoom,target:je.target.toArray(),angle:mn.angle,head:Qe.position.toArray(),roof:pn.position.toArray(),roofOpen:fr(),roofMode:we.roof===null?"auto":"manual",pendulums:ho.map(n=>n.group.rotation.x),growth:sr,meshes:(()=>{let n=0;return Yt.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[it.domElement.width,it.domElement.height]})};Wy();
