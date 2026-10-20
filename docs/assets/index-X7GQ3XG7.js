(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Gp={O:[[0,0],[1,0],[0,1],[1,1]],T:[[0,0],[1,0],[2,0],[1,1]],L:[[0,0],[0,1],[0,2],[1,2]],J:[[1,0],[1,1],[1,2],[0,2]],S:[[1,0],[2,0],[0,1],[1,1]],I:[[0,0],[0,1],[0,2],[0,3]]},Js=[{pieces:["O","O","O"],mask:[1,2,5,6,8,9,10,11,12,13,14,15]},{pieces:["O","L","L"],mask:[0,1,2,4,5,6,8,9,10,12,13,14]},{pieces:["O","J","S"],mask:[1,4,5,6,7,8,9,10,11,13,14,15]}];function Od(n,e=0){var r;let t=(r=Gp[n])==null?void 0:r.map(o=>o.slice());if(!t)return[];for(let o=0;o<(e%4+4)%4;o++)t=t.map(([a,l])=>[-l,a]);const i=Math.min(...t.map(o=>o[0])),s=Math.min(...t.map(o=>o[1]));return t.map(([o,a])=>[o-i,a-s])}function na(n,e){if(!e||!Number.isInteger(e.piece)||e.piece<0||e.piece>2||!Number.isInteger(e.rot)||e.rot<0||e.rot>3||!Number.isInteger(e.at)||e.at<0||e.at>15)return null;const t=Od(Js[n].pieces[e.piece],e.rot).map(([i,s])=>[i+e.at%4,s+Math.floor(e.at/4)]);return t.some(([i,s])=>i>3||s>3)?null:t.map(([i,s])=>s*4+i)}function Kc(n,e,t){const i=na(n,t),s=e.flatMap(r=>na(n,r)||[]);return!!i&&!e.some(r=>r.piece===t.piece)&&i.every(r=>Js[n].mask.includes(r)&&!s.includes(r))}function ys(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=[];for(const r of Array.isArray(e.placed)?e.placed.slice(0,3):[])Kc(t,i,r)&&i.push({piece:r.piece,rot:r.rot,at:r.at});const s=i.length===3&&e.sent===!0;return{round:t,placed:i,sent:s,phase:s?t===2?"complete":"won":i.length===3?"packed":"ready",run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1}}function Hp(n,e,t){const i=ys(n);let s=!1;return e==="reset"||e==="all"?{state:ys({round:e==="all"?0:i.round,run:i.run+(e==="all"?1:0)}),ok:!0}:e==="next"&&i.phase==="won"?{state:ys({round:i.round+1,run:i.run}),ok:!0}:(e==="place"&&i.phase==="ready"&&Kc(i.round,i.placed,t)&&(i.placed.push({...t}),s=!0),e==="undo"&&!i.sent&&i.placed.length&&(i.placed.pop(),s=!0),e==="send"&&i.phase==="packed"&&(i.sent=!0,s=!0),{state:ys(i),ok:s})}function Wp(n){const e=ys(n);function t(i){if(i.length===3)return[];for(let s=0;s<3;s++)if(!i.some(r=>r.piece===s))for(let r=0;r<4;r++)for(let o=0;o<16;o++){const a={piece:s,rot:r,at:o};if(Kc(e.round,i,a)){const l=t([...i,a]);if(l)return[a,...l]}}return null}return t(e.placed)}function qp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:g,localPlay:h}){const d=s([0,-1.1,-48],e);d.name="ego-transmitter";const p=i("#203b40"),_=i("#527277",{metalness:.6}),m=i("#dce0bc"),f=i("#91a58d",{emissive:"#91a58d",emissiveIntensity:.12}),M=["#efb65e","#79c8b4","#c59ed0"].map(ee=>i(ee,{emissive:ee,emissiveIntensity:.35}));r([0,-.25,.4],[8,.5,7.6],t.concrete,d);const w=s([.6,3,-.7],d);w.rotation.y=Math.PI/4,r([0,0,0],[3.85,3.85,.3],p,w);for(let ee of[-1.8,1.8])r([ee,0,.14],[.1,3.8,.12],_,w);const x=[];for(let ee=0;ee<16;ee++)x.push(r([(ee%4-1.5)*.84,(1.5-Math.floor(ee/4))*.84,.23],[.77,.77,.14],_,w));l([.6,.1,-.7],[.6,1.3,-.7],.18,_,d),r([.6,.1,-.7],[2.8,.18,1.6],p,d);const b=s([0,0,.4],w);for(let ee of[-.55,.55])r([ee,.65,0],[.23,.18,.12],p,b),o([ee+.02,.68,.07],.045,m,b),l([0,-.45,0],[ee*1.6,-.24,.03],.07,p,b);r([0,-.78,0],[.42,.07,.12],p,b);const S=s([-2.6,.4,1.8],d);r([0,0,0],[1.3,.16,1],i("#43876b"),S),r([0,.14,0],[.5,.18,.5],p,S);for(let ee=0;ee<6;ee++)for(let ae of[-1,1])r([ae*.38,.13,-.38+ee*.15],[.2,.05,.06],t.copper,S);c("МАЛЕНЬКОЕ Я",[-2.5,.35,2.65],1.9,.32,d,{size:38});const T=[[-1.98,.42,1.8],[-1,.2,2.1],[.3,.18,2],[1.8,.2,1.4],[2.6,.5,.4],[2,1.4,-.6]];for(let ee=1;ee<T.length;ee++)l(T[ee-1],T[ee],.09,p,d);r(T.at(-1),[.4,.3,.26],t.copper,d);const v=Array.from({length:4},()=>o([0,0,0],.13,M[0],d)),P=Array.from({length:3},(ee,ae)=>(a([-1+ae,.1,3.3],.3,.15,_,d),o([-1+ae,.28,3.3],.19,M[ae],d))),C=c("САМОМНЕНИЕ / HDMI",[.6,5.25,-.7],4.5,.5,d,{size:35});C.rotation.y=Math.PI/4;const O=s([0,0,0],e);for(let ee=0;ee<28;ee++)r([-19.5+ee*.53,-1.48,-48+Math.sin(ee*.35)*.22],[.38,.12,.75],t.cream,O);u(O,[]),u(d,[w,S,...v,...P]);let U;try{U=ys(JSON.parse(localStorage.getItem("beznogim-ego-v1")||"null"))}catch{U=ys()}let V=0,z=0,I=null,F="",B=1;const J=document.createElement("div");J.id="ego-controls",J.hidden=!0,J.innerHTML='<output id="ego-readout"></output><div class="ego-pieces">'+[0,1,2].map(ee=>`<button data-ego-piece="${ee}" aria-label="пакет ${ee+1}"><span></span><b></b></button>`).join("")+'</div><div class="ego-row"><button id="ego-rotate">повернуть ↻</button><button id="ego-hint">намёк</button><button id="ego-undo">откат</button></div><div id="ego-grid" aria-label="экран 4 на 4">'+Array.from({length:16},(ee,ae)=>`<button data-ego-cell="${ae}" aria-label="ячейка ${Math.floor(ae/4)+1}:${ae%4+1}"></button>`).join("")+'</div><output id="ego-notice" aria-live="polite"></output><div class="ego-row"><button id="ego-reset">повтор</button><button id="ego-all">новая серия</button></div><details><summary>как вывести себя</summary><small>Выбери цветной пакет. ↻ поворачивает его. Нажми ячейку экрана: сюда попадёт верхний левый угол прямоугольника пакета. Заполни светлую маску тремя пакетами без пересечений. В тёмные ячейки пиксели не влезают. Отказ бесплатный, откат убирает последний пакет. Затем передай портрет. Три кадра. Это локальная игра, не настоящая электроника и не состояние жителя.</small></details>',document.querySelector("#focus-object").before(J);const Y=()=>{try{localStorage.setItem("beznogim-ego-v1",JSON.stringify(U))}catch{}},W=()=>B<1;function ne(){const ee=U.placed.flatMap(ae=>na(U.round,ae).map(N=>({v:N,piece:ae.piece})));x.forEach((ae,N)=>{const y=ee.find(L=>L.v===N);ae.visible=Js[U.round].mask.includes(N),ae.material=y?M[y.piece]:f,ae.scale.z=y?.21:.14}),b.visible=U.sent&&B===1,w.scale.setScalar(W()?1+.04*Math.sin(B*Math.PI):1),P.forEach((ae,N)=>ae.visible=N<U.round+(U.sent&&!W()?1:0)),v.forEach((ae,N)=>{ae.visible=W();const y=(B*2+N*.16)%1,L=y*(T.length-1),Z=Math.floor(L),K=Math.min(Z+1,T.length-1);ae.position.fromArray(T[Z]).lerp(new n.Vector3(...T[K]),L-Z),ae.material=M[N%3]})}function j(){J.querySelector("#ego-readout").textContent=`кадр ${U.round+1}/3 · ${U.placed.length*4}/12 пикселей · пакет ${V+1} ↻${z}`,J.querySelectorAll("[data-ego-piece]").forEach((ee,ae)=>{ee.disabled=W()||U.sent||U.placed.some(y=>y.piece===ae),ee.classList.toggle("active",ae===V),ee.querySelector("span").textContent=`${ae+1} · ${Js[U.round].pieces[ae]}`;const N=Od(Js[U.round].pieces[ae],ae===V?z:0);ee.querySelector("b").innerHTML=Array.from({length:16},(y,L)=>`<i style="opacity:${N.some(([Z,K])=>L===K*4+Z)?1:0}"></i>`).join("")}),J.querySelectorAll("[data-ego-cell]").forEach((ee,ae)=>{const N=U.placed.find(y=>na(U.round,y).includes(ae));ee.disabled=W()||U.phase!=="ready",ee.dataset.owner=N?N.piece:"",ee.classList.toggle("void",!Js[U.round].mask.includes(ae)),ee.classList.toggle("hinted",(I==null?void 0:I.at)===ae),ee.textContent=N?String(N.piece+1):""});for(const ee of["rotate","hint","undo","reset","all"])J.querySelector("#ego-"+ee).disabled=W()||["rotate","hint"].includes(ee)&&U.phase!=="ready"||ee==="undo"&&(U.sent||!U.placed.length);J.querySelector("#ego-notice").textContent=W()?"пиксели ушли по кабелю…":F,ne()}function ue(ee,ae){if(W())return;h();const N=ee==="undo"?U.placed.at(-1):null,y=Hp(U,ee,ae);return y.ok?(U=y.state,I=null,N&&(V=N.piece,z=N.rot),ee==="send"&&(B=0),ee==="reset"||ee==="all"||ee==="next"?(V=0,z=0):ee==="place"&&(V=[0,1,2].find(L=>!U.placed.some(Z=>Z.piece===L))??0,z=0),F=U.phase==="packed"?"Все пиксели на месте. Можно передавать.":U.sent?"Самомнение поместилось. Плата по-прежнему маленькая.":"",Y(),j(),g(),y):(F="Не влезло: край, тёмная ячейка или чужой пакет. Ничего не потрачено.",j(),g(),y)}return J.querySelectorAll("[data-ego-piece]").forEach((ee,ae)=>ee.onclick=()=>{V=ae,z=0,I=null,j()}),J.querySelector("#ego-rotate").onclick=()=>{z=(z+1)%4,I=null,j()},J.querySelectorAll("[data-ego-cell]").forEach((ee,ae)=>ee.onclick=()=>ue("place",{piece:V,rot:z,at:ae})),J.querySelector("#ego-undo").onclick=()=>ue("undo"),J.querySelector("#ego-reset").onclick=()=>ue("reset"),J.querySelector("#ego-all").onclick=()=>ue("all"),J.querySelector("#ego-hint").onclick=()=>{const ee=Wp(U);I=(ee==null?void 0:ee[0])??null,I?(V=I.piece,z=I.rot,F=`Пакет ${V+1}, поворот ${z}. Нажми обведённую ячейку.`):F="Из этого положения не собрать. Откати последний пакет.",j(),g()},j(),Y(),{house:d,controls:J,update:ee=>{W()&&(B=Math.min(1,B+Math.max(0,Math.min(.1,ee))/3),ne(),W()||(j(),g()))},run:()=>ue(U.phase==="packed"?"send":U.phase==="won"?"next":U.phase==="complete"?"all":"send"),card:()=>({action:W()?"передаётся…":U.phase==="packed"?"вывести самомнение ↗":U.phase==="won"?"следующий кадр →":U.phase==="complete"?"новая серия ↺":"сначала уложи пакеты",disabled:W()||U.phase==="ready",description:"Крохотная плата. Огромное самомнение. Между ними двенадцать пикселей."}),inspect:()=>({...U,selected:V,rot:z,hint:I,notice:F,progress:B,pixelMaterials:x.map(ee=>M.indexOf(ee.material)),pixelVisible:x.map(ee=>ee.visible),face:b.visible,screenScale:w.scale.toArray(),packets:v.map(ee=>({visible:ee.visible,position:ee.position.toArray()})),trophies:P.map(ee=>ee.visible),landmarks:[[-3.4,-.8,-45.5],[3.7,-.8,-44.3],[.6,4.5,-48.7],[-2.5,2,-49.8]]})}}const xc=()=>({phase:"folding",folds:[!1,!1,!1],water:[0,0,0],progress:0,open:0}),yc=n=>n.phase==="raining"||n.phase==="turning";function Xp(n,e){return n.phase==="folding"&&Number.isInteger(e)&&e>=0&&e<3?{...n,folds:n.folds.map((t,i)=>i===e?!t:t)}:n}function Yp(n){return n.phase==="shelter"?xc():n.phase==="folding"?{...n,phase:"raining",progress:0}:n}function $p(n,e){if(!yc(n)||!Number.isFinite(e)||e<=0)return n;const t=Math.min(.1,e);if(n.phase==="turning"){const r=Math.min(1,n.open+t/3);return{...n,open:r,phase:r>=1?"shelter":"turning"}}const i=Math.min(1,n.progress+t/6),s=n.water.map((r,o)=>n.folds[o]?Math.max(r,i):r);return{...n,water:s,progress:i,phase:i<1?"raining":s.every(r=>r===1)?"turning":"folding"}}function fh(n){const e=n.open*n.open*(3-2*n.open);return{lift:e*2.8,flip:e*Math.PI,clockY:4.3-e*3.5,clockScale:1-e*.65,clockTilt:-e*Math.PI/2,wing:e*.65,hand:n.progress*Math.PI*2,reverse:e}}function Jp(n,e,t){const i=e%3,s=Math.floor(e/3),r=n.phase==="raining"?(n.progress*2+s/12)%1:(t*.3+s/12)%1,o=(i-1)*2.4,a=n.folds[i],l=n.open;let c;if(r<.45){const u=r/.45;c=[o,4.5-u*2,-.65+u*.65]}else{const u=(r-.45)/.55;c=[o+(a?-o*.55:Math.sign(o||1)*1.2)*u,2.5-u*2,a?u*1.75:-u*1.7]}return l>0&&(c=[(i-1)*.9+Math.sin(r*Math.PI*2)*.15,.6+r*3.9,1.5-r*2]),c}function Zp({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,tube:u,torus:g,sign:h,batchStatic:d,chime:p,changed:_}){const m=o([0,0,0],e);m.name="dream10-paper-hour",m.visible=!1;const f=r("#eadbc0"),M=r("#63969e",{metalness:.18,roughness:.35}),w=r("#284a53"),x=s.copper,b=o([0,-.25,0],m);a([0,0,0],[8,.18,6.4],w,b);for(let L=0;L<3;L++)a([(L-1)*2.4,.12,-2.1],[1.8,.02,1.4],M,b);const S=o([0,4.3,-.65],m);S.rotation.y=Math.PI/4,g([0,0,0],1.25,.045,x,S,[0,0,0]);const T=[];for(let L=0;L<12;L++){const Z=L*Math.PI/6,K=o([Math.sin(Z)*1.25,Math.cos(Z)*1.25,0],S);K.rotation.z=-Z,a([0,0,0],[.15,.38,.045],f,K),T.push(K)}const v=o([0,0,.05],S);a([0,.48,0],[.045,.96,.045],s.mint,v),l([0,0,.02],.09,x,v);const P=[],C=[];for(let L=0;L<3;L++){const Z=o([(L-1)*2.4,2.5,0],m);P.push(Z);const K=[];for(const A of[-1,1]){const R=o([0,0,0],Z);a([A*.48,0,0],[.96,.045,1.5],f,R);for(let G=0;G<4;G++)a([A*.48,.028,-.48+G*.3],[.68,.006,.008],M,R);K.push(R)}C.push(K),c([0,-.8,-.6],.035,1.6,x,Z),h(String(L+1),[0,.1,.85],.6,.25,Z,{size:60})}const O=o([0,0,1.65],m);for(const L of[-1.9,1.9])for(const Z of[-.8,.8])c([L,.25,Z],.055,.5,x,O);a([0,.36,0],[4.2,.12,1.9],x,O);const U=o([0,.55,1.65],m),V=[];a([0,0,0],[1.4,.12,1.9],f,U);for(const L of[-1,1]){const Z=o([L*.7,0,0],U);a([L*.7,0,0],[1.4,.12,1.9],f,Z),u([[0,-.08,-.8],[L*1.3,-.08,0],[0,-.08,.8]],.022,x,Z),V.push(Z)}const z=[];for(let L=0;L<3;L++)z.push(a([(L-1)*1.3,.09,0],[1.22,.025,1.65],M,U));const I=a([-1.4,.18,0],[.8,.22,1.3],s.mint,U),F=u([[0,.04,0],[0,1.65,0],[.15,1.86,0],[.4,1.8,0],[.4,1.6,0]],.055,x,U);F.visible=!1;const B=i.clone(!0);B.scale.setScalar(.4),B.position.set(-1.2,.96,1.8),m.add(B);const J=[];for(let L=0;L<36;L++)J.push(a([0,0,0],[.065,.22,.025],L%2?f:M,m));h("ЧАС ДОЖДЯ / БЕЗ ГРОМА",[0,-.05,3.05],3.4,.27,m,{size:44});const Y=o([-3.9,1.12,.1],t);g([0,0,0],.13,.018,x,Y,[Math.PI/2,0,0]);for(let L=0;L<3;L++)a([(L-1)*.09,-.2,0],[.035,.12,.015],f,Y);Y.visible=!1,d(b,[]),d(O,[]),P.forEach((L,Z)=>d(L,C[Z])),C.flat().forEach(L=>d(L,[])),V.forEach(L=>d(L,[])),d(Y,[]);let W=xc(),ne=!1,j=!1;try{j=JSON.parse(localStorage.getItem("beznogim-dream10-v1")||"{}").trace===!0}catch{}Y.visible=j;function ue(){W=xc(),ne=!0,t.visible=!1,m.visible=!0,y(0,0)}function ee(){ne=!1,t.visible=!0,m.visible=!1}function ae(L){if(!ne)return;const Z=Xp(W,L);Z!==W&&(W=Z,p(220+L*70),y(0,0),_())}function N(){if(!ne)return;const L=Yp(W);L!==W&&(W=L,p(350),_())}function y(L,Z){if(!ne)return;const K=W.phase;W=$p(W,L);const A=fh(W);if(C.forEach((R,G)=>R.forEach((q,ie)=>q.rotation.z=W.folds[G]?ie===0?-.42:.42:0)),U.position.y=.55+A.lift,U.rotation.z=A.flip,V.forEach((R,G)=>R.rotation.z=(G===0?-1:1)*A.wing),z.forEach((R,G)=>{R.visible=W.water[G]>0&&W.open<.1,R.scale.z=Math.max(.001,W.water[G]),R.material.opacity=1}),I.scale.y=1-W.open*.8,F.visible=W.open>0,S.position.set(.4*A.reverse,A.clockY,-.65+2.65*A.reverse),S.rotation.x=A.clockTilt,S.rotation.y=Math.PI/4*(1-A.reverse),S.scale.setScalar(A.clockScale),v.rotation.z=-A.hand,T.forEach((R,G)=>{R.visible=W.phase!=="raining"||G>=Math.floor(W.progress*12)}),B.position.y=.96-W.open*.28,B.rotation.z=-W.open*.35,J.forEach((R,G)=>{R.visible=W.phase==="raining"||W.open>0,R.position.set(...Jp(W,G,Z)),R.rotation.z=W.open>0?.25:Math.sin(Z+G)*.25,R.scale.y=W.open>0?.6:1}),W.phase==="shelter"&&!j){j=!0,Y.visible=!0;try{localStorage.setItem("beznogim-dream10-v1",JSON.stringify({trace:!0}))}catch{}}K!==W.phase&&_()}return{enter:ue,exit:ee,fold:ae,act:N,update:y,busy:()=>yc(W),text:()=>W.phase==="shelter"?"Час уснул в кровати. Кровать стала зонтом; дождь идёт обратно в небо. Я пока останусь снизу.":W.phase==="turning"?"Вода уснула. Кровать выворачивается, час ложится на её место.":W.phase==="raining"?"Час выжимается в дождь. Согнутые листы наливают кровать; с плоских всё стекает мимо.":`Согни три листа желобами и пропусти час. Кровать выпила ${W.water.filter(L=>L===1).length} из 3 струй. Можно по одной, без спешки.`,button:()=>W.phase==="shelter"?"увидеть сон снова":yc(W)?"час проходит…":"дать часу пройти · 6 секунд",inspect:()=>({...W,active:ne,trace:j,pose:fh(W),sheetAngles:C.map(L=>L.map(Z=>Z.rotation.z)),bed:U.position.toArray(),bedAngle:U.rotation.z,wingAngles:V.map(L=>L.rotation.z),clock:S.position.toArray(),clockScale:S.scale.x,clockAngles:[S.rotation.x,S.rotation.y],waterVisible:z.map(L=>L.visible),waterScale:z.map(L=>L.scale.z),handleVisible:F.visible,drops:J.map(L=>L.position.toArray()),rootVisible:t.visible,roomVisible:m.visible,landmarks:[[-4.1,-.4,-3.4],[4.1,-.4,3.4],[0,5.8,-.7],[0,3.5,2.7]]})}}const Kp=[[1,1,3],[1,3,2],[0,2,1]],ia=9;function Ms(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.turns)&&e.turns.length===3&&e.turns.every(l=>Number.isInteger(l)&&l>=0&&l<4),s=i?e.turns.slice():Kp[t].slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(ia,e.used)):0,o=s.every(l=>l===0),a=o&&e.tested===!0;return{round:t,turns:s,used:r,tested:a,phase:a?t===2?"complete":"won":o?"aligned":r===ia?"spent":"ready",run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1}}function Fd(n,e){if(!Number.isInteger(e)||e<0||e>2)return null;const t=n.slice();return t[e]=(t[e]+1)%4,t[(e+1)%3]=(t[(e+1)%3]+2)%4,t}function Qp(n,e,t){const i=Ms(n);let s=!1;if(e==="reset"||e==="all")return{state:Ms({round:e==="all"?0:i.round,run:i.run+(e==="all"?1:0)}),ok:!0};if(e==="next"&&i.phase==="won")return{state:Ms({round:i.round+1,run:i.run}),ok:!0};if(e==="test"&&i.phase==="aligned"&&(i.tested=!0,s=!0),e==="turn"&&i.phase==="ready"){const r=Fd(i.turns,t);r&&(i.turns=r,i.used++,s=!0)}return{state:Ms(i),ok:s}}function jp(n){const e=Ms(n);if(e.phase!=="ready")return[];const t=[{v:e.turns,path:[]}],i=new Set([e.turns.join()]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(r.every(a=>a===0))return o;if(!(o.length>=ia-e.used))for(let a=0;a<3;a++){const l=Fd(r,a),c=l.join();i.has(c)||(i.add(c),t.push({v:l,path:[...o,a]}))}}return null}function em(n){return n=Math.max(0,Math.min(1,Number(n)||0)),Math.sin(n*Math.PI)**2}function tm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,localPlay:d}){const p=s([-24,-1.1,-48],e);p.name="head-seams";const _=i("#405e62",{metalness:.55,roughness:.4}),m=i("#bd8757",{metalness:.6,roughness:.35}),f=i("#e9dfbb"),M=i("#233e40"),w=i("#93beb0"),x=i("#efa250",{emissive:"#c38535",emissiveIntensity:.3});r([0,-.25,.5],[7.8,.5,7.6],t.concrete,p),r([0,.04,0],[4.4,.18,3.7],M,p);const b=s([0,0,0],p),S=[],T=[],v=[];for(let y=0;y<3;y++){const L=2.95-y*.88,Z=s([0,L,0],b);if(S.push(Z),a([0,0,0],1.4,.8,[f,w,m][y],Z),c([0,.35,0],1.4,.045,M,Z),c([0,-.35,0],1.4,.045,M,Z),r([0,0,1.4],[.16,.66,.07],f,Z),y===0){for(let R of[-.5,.5])o([R,0,1.31],[.27,.23,.13],M,Z),o([R+.025,.02,1.43],.075,f,Z);o([0,.43,0],[1.15,.25,1.1],f,Z)}if(y===1){r([0,-.06,1.52],[.36,.5,.4],f,Z);for(let R of[-.5,.5])l([R-.2,-.23,1.35],[R+.2,-.23,1.35],.045,M,Z)}if(y===2){for(let R of[-1,1])l([0,.12,1.43],[R*.7,.22,1.3],.09,M,Z),l([R*.7,.22,1.3],[R*.9,.05,1.2],.06,M,Z);r([0,-.13,1.39],[.55,.07,.07],M,Z)}const K=s([-2.6+y*2.6,.55,2.35],p);v.push(K),a([0,-.15,0],.6,.18,_,K);const A=c([0,.08,0],.38,.06,m,K);A.rotation.x=Math.PI/2,l([0,-.3,0],[0,.4,0],.065,_,K),o([0,.48,0],.14,x,K),u(""+(y+1),[-2.6+y*2.6,.15,2.9],.55,.4,p,{size:80})}r([0,.2,1.95],[.13,.12,.7],x,p);const P=r([0,.2,1.7],[.38,.12,.38],x,p);P.rotation.y=Math.PI/4;const C=[];for(let y=0;y<3;y++){const L=s([-2.7+y*2.7,.3,3.55],p);a([0,-.1,0],.7,.15,_,L);const Z=s([0,.18,0],L);for(let K of[-.32,.32])l([K,0,0],[K,.65,0],.075,m,Z);l([-.32,.65,0],[.32,.65,0],.075,m,Z),C.push(Z)}const O=[];for(let y of[1.61,2.49])for(let L of[-1,1]){const Z=s([L*.85,y,1.2],b);l([0,-.28,0],[0,.28,0],.05,m,Z),o([0,-.28,0],.085,_,Z),o([0,.28,0],.085,_,Z),O.push(Z)}const U=u("НЕ ОШИБАЙСЯ",[0,4.22,-.3],3.5,.65,p,{size:48}),V=o([2.5,2.3,-.5],.19,x,p);l([2.5,.15,-.5],[2.5,2.3,-.5],.045,_,p),u("ШОВНАЯ",[0,.28,-3],3,.45,p,{size:52});const z=s([0,0,0],e);for(let y=0;y<17;y++)r([-24+Math.sin(y*.4)*.25,-1.48,-35.3-y*.53],[.75,.12,.37],t.cream,z);g(z,[]),g(p,[b,U,V,...v,...C]);let I;try{I=Ms(JSON.parse(localStorage.getItem("beznogim-seams-v1")||"null"))}catch{I=Ms()}let F=1,B=null,J=null,Y="";S.forEach((y,L)=>{y.rotation.y=I.turns[L]*Math.PI/2,T[L]=y.rotation.y});const W=document.createElement("div");W.id="seams-controls",W.hidden=!0,W.innerHTML='<output id="seams-readout"></output><div class="seams-row">'+[0,1,2].map(y=>`<button data-seam="${y}">${y+1} ↻</button>`).join("")+'</div><div class="seams-row"><button id="seams-hint">намёк</button><button id="seams-reset">повтор</button><button id="seams-all">новая серия</button></div><output id="seams-notice" aria-live="polite"></output><details id="seams-help"><summary>как держится голова</summary><small>Ручка поворачивает своё кольцо на 90°, следующее на 180°: 1→2, 2→3, 3→1. Выстрой лицо по передней светлой метке за 9 ходов, затем испытай инструкцией. Все три числа должны стать 0. Намёк показывает кратчайший путь; отказ бесплатный. Повтор сохраняет прежние скобы. Локальная игра посетителя, не здоровье жителя.</small></details>',document.querySelector("#focus-object").before(W);const ne=()=>{try{localStorage.setItem("beznogim-seams-v1",JSON.stringify(I))}catch{}},j=()=>F<1;function ue(){const y=(B==null?void 0:B.kind)==="test"&&j()?em(F):0;b.scale.set(1+y*.12,1+y*.08,1+y*.12),b.position.y=y*.08,(B==null?void 0:B.kind)==="turn"&&j()?S.forEach((Z,K)=>Z.rotation.y=B.before[K]+(T[K]-B.before[K])*(F*F*(3-2*F))):S.forEach((Z,K)=>Z.rotation.y=T[K]),U.scale.setScalar((B==null?void 0:B.kind)==="test"&&j()?1+y*.12:1),U.rotation.z=y*Math.sin(F*28)*.025;const L=I.tested||(B==null?void 0:B.kind)==="test";O.forEach(Z=>Z.visible=L),C.forEach((Z,K)=>Z.visible=K<I.round+(I.tested&&!j()?1:0)),V.material=I.phase==="aligned"||I.tested?w:x}function ee(){W.querySelector("#seams-readout").textContent=`сборка ${I.round+1}/3 · ${I.used}/${ia} ходов
кольца: ${I.turns.join(" / ")} → 0 / 0 / 0`,W.querySelector("#seams-notice").textContent=j()?B.kind==="test"?"инструкция давит. скобы держат…":"кольца сцеплены…":Y,W.querySelectorAll("[data-seam]").forEach((y,L)=>{y.disabled=j()||I.phase!=="ready",y.classList.toggle("hinted",J===L),y.setAttribute("aria-label",`ручка ${L+1}: своё кольцо +1, следующее +2`)}),W.querySelectorAll("#seams-hint,#seams-reset,#seams-all").forEach(y=>y.disabled=j()),ue()}function ae(y,L){if(j())return;d();const Z=T.slice(),K=Qp(I,y,L);return K.ok?(I=K.state,J=null,B=null,y==="turn"?(T[L]+=Math.PI/2,T[(L+1)%3]+=Math.PI,B={kind:"turn",before:Z},F=0):y==="test"?(B={kind:"test"},F=0):(F=1,S.forEach((A,R)=>T[R]=I.turns[R]*Math.PI/2)),Y=I.phase==="spent"?"Ходы кончились, швы ещё криво. Повтори сборку.":I.phase==="aligned"?"Лицо на месте. Теперь проверка инструкцией.":I.phase==="won"?"Выдержала. Скоба остаётся на полке.":I.phase==="complete"?"Три скобы. Голова пока цела.":"",ne(),ee(),h(),K):(Y="Сначала совмести лицо. Ход не потрачен.",ee(),h(),K)}W.querySelectorAll("[data-seam]").forEach((y,L)=>y.onclick=()=>ae("turn",L)),W.querySelector("#seams-reset").onclick=()=>ae("reset"),W.querySelector("#seams-all").onclick=()=>ae("all"),W.querySelector("#seams-hint").onclick=()=>{if(j())return;const y=jp(I);J=(y==null?void 0:y[0])??null,Y=J!==null?`Ручка ${J+1}. До ровных швов ${y.length} ходов.`:I.phase==="ready"?"Оставшихся ходов не хватит. Повтори сборку.":I.phase==="aligned"?"Всё ровно. Испытай инструкцией.":"Сборка закончена.",ee(),h()};function N(y){j()&&(F=Math.min(1,F+Math.max(0,Math.min(.1,y))/(B.kind==="test"?2.6:.7)),ue(),F===1&&(ee(),h()))}return ee(),ne(),{house:p,controls:W,update:N,run:()=>ae(I.phase==="aligned"?"test":I.phase==="won"?"next":I.phase==="complete"?"all":I.phase==="spent"?"reset":"test"),card:()=>({action:j()?"стягивается…":I.phase==="aligned"?"испытать: «не ошибайся»":I.phase==="won"?"следующая сборка →":I.phase==="complete"?"новая серия ↺":I.phase==="spent"?"повторить сборку ↺":"сначала совмести кольца",disabled:j()||I.phase==="ready",description:"Три ручки сцеплены. Собери лицо; инструкция проверит швы."}),inspect:()=>({...I,progress:F,motion:B,hint:J,notice:Y,angles:S.map(y=>y.rotation.y),scale:b.scale.toArray(),clamps:O.map(y=>y.visible),staples:C.map(y=>y.visible),landmarks:[[-27.3,-.9,-44.1],[-20.7,-.9,-44.1],[-24,3.7,-48.3],[-24,-.5,-51]]})}}const _s=[3,5,7,9],nm=[3,5,7,1],sa=16,ra=[[2,1,4,9],[3,4,1,8],[3,1,5,7]],im=["улитка","чайник","кит"],zd=(n,e)=>n.every((t,i)=>t===e[i]);function Ss(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.volumes)&&e.volumes.length===4&&e.volumes.every((a,l)=>Number.isInteger(a)&&a>=0&&a<=_s[l])&&e.volumes.reduce((a,l)=>a+l,0)===16,s=i?e.volumes.slice():nm.slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(sa,e.used)):0,o=zd(s,ra[t])?t===2?"complete":"won":r>=sa?"spent":"ready";return{round:t,volumes:s,used:r,phase:o,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function kd(n,e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>3||t<0||t>3||e===t)return null;const i=Math.min(n[e],_s[t]-n[t]);if(i<=0)return null;const s=n.slice();return s[e]-=i,s[t]+=i,{volumes:s,amount:i}}function sm(n,e,t,i){const s=Ss(n);let r={ok:!1,reason:"locked"},o=null;if(e==="reset"||e==="all")return{state:Ss({round:e==="all"?0:s.round,run:s.run+(e==="all"?1:0),seq:s.seq}),result:{ok:!0},pour:o};if(e==="next"&&s.phase==="won")return{state:Ss({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:!0},pour:o};if(e==="pour"&&s.phase==="ready"){const a=kd(s.volumes,t,i);if(!a)return{state:s,result:{ok:!1,reason:"empty"},pour:o};o={a:t,b:i,amount:a.amount,before:s.volumes.slice(),after:a.volumes.slice(),seq:s.seq+1},s.volumes=a.volumes,s.used++,s.seq++,r={ok:!0,amount:a.amount}}return{state:Ss(s),result:r,pour:o}}function rm(n){const e=Ss(n);if(e.phase!=="ready")return[];const t=[{v:e.volumes,path:[]}],i=new Set([e.volumes.join(",")]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(zd(r,ra[e.round]))return o;if(!(o.length>=sa-e.used))for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=kd(r,a,l);if(!c)continue;const u=c.volumes.join(",");i.has(u)||(i.add(u),t.push({v:c.volumes,path:[...o,{a,b:l}]}))}}return null}function om(n,e,t){return t=Math.max(0,Math.min(1,Number(t)||0)),[-3+2*n+2*(e-n)*t,2.95+Math.sin(t*Math.PI)*1.15,0]}function am({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,localPlay:d}){const p=s([24,-1.1,-24],e);p.name="cloud-still";const _=i("#45626b",{metalness:.55,roughness:.35}),m=i("#cf9671",{metalness:.6,roughness:.3}),f=i("#e6e5d2"),M=i("#8dd8d4",{emissive:"#8dd8d4",emissiveIntensity:.28}),w=i("#233f49");r([0,-.25,.6],[9.1,.5,7.4],t.concrete,p),r([0,.04,.1],[8.7,.12,3.3],w,p);function x(y,L,Z=.6,K=.5){const A=u(y,L,Z,K,p),R=A.material.map.image;R.width=R.height=128;const G=R.getContext("2d"),q=ie=>{G.fillStyle="#294c52",G.fillRect(0,0,128,128),G.strokeStyle="#e8d7ae",G.lineWidth=4,G.strokeRect(5,5,118,118),G.font="bold 76px monospace",G.fillStyle="#fff3ce",G.textAlign="center",G.textBaseline="middle",G.fillText(ie,64,68),A.material.map.needsUpdate=!0};return q(y),{o:A,draw:q}}const b=[],S=[],T=[];for(let y=0;y<4;y++){const L=-3+2*y,Z=_s[y]*.26+.4;r([L,.23,0],[1.45,.36,1.25],_,p);for(let R of[-.5,.5])for(let G of[-.57,.57])l([L+G,.4,R],[L+G,Z,R],.025,m,p);r([L,Z,0],[1.3,.09,1.15],_,p),c([L,Z+.12,0],.23,.04,m,p);for(let R=0;R<_s[y];R++)r([L-.73,.5+R*.26,.4],[.16,.025,.12],M,p);const K=s([L,.4,0],p);for(let R=0;R<_s[y];R++){const G=s([0,.15+R*.26,0],K);o([0,0,0],[.4,.17,.28],f,G),o([.2,.04,.12],.15,f,G),o([-.22,0,-.12],.14,M,G),S.push({o:G,i:y,n:R})}b.push(x(""+_s[y],[L,.3,1],.72,.65)),x(""+(y+1),[L,Z+.4,0],.5,.45);const A=r([L,.05,.05],[1.7,.06,1.55],M,p);T.push(A)}const v=Array.from({length:16},(y,L)=>o([-3.75+L*.5,.14,1.8],.11,m,p));u("16 ЧАСОВ / ОБЛАКО",[0,.45,-2.7],4.8,.48,p,{size:42});const P=[];for(let y=0;y<3;y++){const L=s([-2.7+y*2.7,.6,3.15],p);a([0,-.2,0],.75,.2,_,L);const Z=s([0,.2,0],L);if(P.push(Z),y===0){o([0,.3,0],[.5,.43,.35],f,Z),o([.45,.05,0],[.7,.17,.25],f,Z),o([.96,.28,0],.15,M,Z);for(const K of[-.12,.12])l([.96,.32,K],[1.02,.65,K],.035,m,Z)}if(y===1){o([0,.3,0],[.5,.4,.45],f,Z),a([0,.72,0],.25,.1,M,Z),o([0,.83,0],.09,m,Z),l([-.3,.35,0],[-.8,.67,0],.15,f,Z);const K=c([.5,.4,0],.3,.08,M,Z);K.rotation.x=Math.PI/2}y===2&&(o([0,.3,0],[.8,.4,.35],f,Z),o([-.7,.45,0],[.3,.12,.45],M,Z),o([.5,.37,.29],.06,w,Z),l([0,.6,0],[0,.95,0],.045,M,Z),o([0,1,0],[.28,.08,.15],f,Z))}const C=s([0,0,0],p),O=Array.from({length:7},()=>o([0,0,0],[.17,.13,.17],f,C)),U=s([0,0,0],e);for(let y=0;y<19;y++)r([7.8+y*.68,-1.48,-24+Math.sin(y*.33)*.3],[.48,.13,.85],t.cream,U);g(U,[]),g(p,[...S.map(y=>y.o),...b.map(y=>y.o),...T,...v,...P,C]);let V;try{V=Ss(JSON.parse(localStorage.getItem("beznogim-still-v1")||"null"))}catch{V=Ss()}let z=0,I=1,F=1,B=null,J="",Y=null;const W=document.createElement("div");W.id="still-controls",W.hidden=!0,W.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>',document.querySelector("#focus-object").before(W);for(const y of W.querySelectorAll("select"))for(let L=0;L<4;L++)y.add(new Option("карта "+(L+1),""+L));W.querySelector("#still-to").value="1";const ne=()=>{try{localStorage.setItem("beznogim-still-v1",JSON.stringify(V))}catch{}},j=()=>F<1;function ue(y=1){const L=j()?B.before.map((K,A)=>K+(B.after[A]-K)*y):V.volumes;for(const K of S){const A=Math.max(0,Math.min(1,L[K.i]-K.n));K.o.visible=A>.01,K.o.scale.setScalar(Math.max(.01,A))}C.visible=j(),O.forEach((K,A)=>{const R=Math.max(0,Math.min(1,y*1.65-A*.09));K.visible=j()&&R>0&&R<1,K.position.set(...om((B==null?void 0:B.a)||0,(B==null?void 0:B.b)||0,R))});const Z=V.round+(V.phase==="won"||V.phase==="complete"?1:0)-(j()&&(V.phase==="won"||V.phase==="complete")?1:0);P.forEach((K,A)=>K.visible=A<Z),v.forEach((K,A)=>K.material=A<V.used?w:m),T.forEach((K,A)=>{K.visible=A===z||A===I,K.material=A===z?m:M})}function ee(){W.querySelector("#still-readout").textContent=`заказ ${V.round+1}/3 · ${im[V.round]} · ${V.used}/${sa} ч
есть: ${V.volumes.join(" / ")}
надо: ${ra[V.round].join(" / ")}`,W.querySelector("#still-notice").textContent=j()?"облако переливается…":J,W.querySelectorAll("select").forEach(y=>y.disabled=j()||V.phase!=="ready"),W.querySelectorAll("button").forEach(y=>y.disabled=j()),b.forEach((y,L)=>y.draw(""+V.volumes[L]));for(const y of W.querySelectorAll("select"))for(let L=0;L<4;L++)y.options[L].textContent=`${L+1}: ${V.volumes[L]}/${_s[L]}`;ue(j()?0:1)}function ae(y){if(j())return;d(),Y=null;const L=sm(V,y,z,I);return V=L.state,B=L.pour,F=B?0:1,J=L.result.ok?V.phase==="spent"?"Шестнадцать часов ушли. Облако ещё не то; повтори заказ.":V.phase==="complete"?"Три облака готовы. Кит никуда не торопится.":V.phase==="won"?"Облако собрано. Следующий заказ?":"":"Нечего переливать. Выбери другую пару; час не потрачен.",ne(),ee(),h(),L}W.querySelector("#still-from").onchange=y=>{z=+y.target.value,ue(),h()},W.querySelector("#still-to").onchange=y=>{I=+y.target.value,ue(),h()},W.querySelector("#still-reset").onclick=()=>ae("reset"),W.querySelector("#still-all").onclick=()=>ae("all"),W.querySelector("#still-hint").onclick=()=>{if(j())return;const y=rm(V);Y=(y==null?void 0:y[0])||null,Y?(z=Y.a,I=Y.b,W.querySelector("#still-from").value=""+z,W.querySelector("#still-to").value=""+I,J=`Перелей ${z+1} → ${I+1}. До заказа ${y.length} переливов.`):J=V.phase==="ready"?"Часов на этот путь уже не хватит. Повтори заказ.":"Этот заказ окончен.",ee(),h()};function N(y,L){j()&&(F=Math.min(1,F+Math.max(0,Math.min(.1,y))/1.65),ue(F),F===1&&(ee(),h())),P.forEach((Z,K)=>{Z.position.y=.2+Math.sin(L*.7+K)*.07})}return ee(),ne(),{house:p,controls:W,update:N,run:()=>ae(V.phase==="ready"?"pour":V.phase==="won"?"next":V.phase==="complete"?"all":"reset"),card:()=>({action:j()?"облако в трубе…":V.phase==="ready"?`перелить ${z+1} → ${I+1}`:V.phase==="won"?"следующий заказ →":V.phase==="complete"?"новая серия ↺":"повторить заказ ↺",disabled:j(),description:"Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов."}),inspect:()=>({...V,a:z,b:I,progress:F,pour:B,hint:Y,notice:J,goal:ra[V.round],trophies:P.map(y=>y.visible),puffs:S.map(y=>({visible:y.o.visible,scale:y.o.scale.x})),flow:O.map(y=>y.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})}}const $n=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],Ur=[1,1,2],Mc=n=>n===1?1:0;function js(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min($n[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===$n[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return Mc((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(Ur[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Or(n){const e=Mc(n[0]);return{bay:2*e+Mc(n[e+1]),side:e}}function lm(n){const e=n.slice(),t=Or(e).side;return e[0]^=1,e[t+1]^=1,e}function Nl(n){return $n.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function Bd(n,e,t){const i=js(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:js({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:js({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<Ur[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Or(i.switches),l=$n[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:l,success:o===l,before:i.switches.slice()},i.switches=lm(i.switches),s={ok:!0,bay:o,target:l,success:r.success},r.success?(i.cursor++,i.cursor===$n[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function cm(n){const e=js(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,l)=>a.cost-l.cost||a.path.length-l.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,l]of[["release",null],["flip",0],["flip",1],["flip",2]]){const c=Bd(r,a,l);!c.result.ok||c.state.phase==="spilled"||t.push({s:c.state,path:[...s.path,{action:a,index:l}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function um(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),l=o-a;return s[a].map((c,u)=>c+(s[a+1][u]-c)*l+(u===1&&a===3?.5*Math.sin(l*Math.PI):0))}function hm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,localPlay:d}){const p=s([-23,-1.1,-32],e);p.name="backup-fork";const _=i("#263f46"),m=i("#c5ccbe",{metalness:.65,roughness:.3}),f=i("#e4bc77"),M=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(N=>i(N,{emissive:N,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,p),r([0,-.01,0],[6.6,.1,5.8],_,p);for(const N of[-2.8,2.8])for(const y of[-2.4,2.4])r([N,-.6,y],[.14,1.2,.14],t.metal,p);function w(N,y,L,Z,K){const A=u(N,y,L,Z,K),R=A.material.map.image;R.width=R.height=128;const G=R.getContext("2d");return G.fillStyle="#29464b",G.fillRect(0,0,128,128),G.strokeStyle="#e4dfc8",G.lineWidth=3,G.strokeRect(5,5,118,118),G.fillStyle="#fff1c9",G.font="bold 90px monospace",G.textAlign="center",G.textBaseline="middle",G.fillText(N,64,68),A.material.map.needsUpdate=!0,A}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],b=[-2.8,-.9,.9,2.8],S=(N,y)=>{l(N,y,.075,m,p);for(const L of[-.14,.14])l([N[0]+L,N[1]+.08,N[2]],[y[0]+L,y[1]+.08,y[2]],.025,t.copper,p)};S([0,1.4,-2.5],x[0]);for(let N=0;N<2;N++){S(x[0],x[N+1]);for(let y=0;y<2;y++)S(x[N+1],[b[N*2+y],.4,2])}const T=x.map((N,y)=>{const L=s(N,p);a([0,0,0],.24,.13,t.copper,L);const Z=s([0,.13,0],L);return l([0,0,0],[0,.07,.66],.055,f,Z),o([0,.07,.66],.14,m,Z),w(["А","Б","В"][y],[.48,.38,-.08],.55,.5,L),Z}),v=b.map((N,y)=>(a([N,.15,2],.29,.32,t.copper,p),c([N,.37,2],.27,.04,M[y],p),w(String(y+1),[N,.74,2.65],.7,.65,p),o([N,.49,2],[.16,.2,.16],M[y],p))),P=b.map((N,y)=>{const L=s([N,.22,2],p);return r([0,0,0],[.66,.06,.7],M[y],L),L}),C=o([0,1.57,-2.5],.18,M[0],p),O=o([0,1.57,-2.5],.18,M[0],p),U=s([4,-.3,2.5],p);a([0,0,0],.4,.55,_,U),c([0,.28,0],.4,.045,m,U);const V=o([0,.21,0],.18,f,U);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,p);const z=Array.from({length:12},(N,y)=>{const L=s([3.6+y%2*.57,.18,-1.9+Math.floor(y/2)*.48],p);return a([0,0,0],.12,.14,_,L),o([0,.16,0],.13,M[$n.flat()[y]],L)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,p,{size:42});for(let N=0;N<4;N++)r([-25,-1.42,-28.7-N*.62],[.7,.1,.44],t.cream,e);g(p,[...T.map(N=>N.parent),...v,...P,C,O,U,...z]);let I;try{I=js(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{I=js()}let F=null,B=1,J="",Y=null;const W=document.createElement("div");W.id="fork-controls",W.hidden=!0,W.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((N,y)=>`<button id="fork-flip-${y}" aria-label="Переключить развилку ${N}">${N} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before(W);function ne(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(I))}catch{}}const j=()=>B<1;function ue(){const N=$n[I.wave].slice(I.cursor).map(Z=>Z+1).join(" → ")||"всё на месте";W.querySelector("#fork-readout").textContent=`волна ${I.wave+1}/3 · сохранено ${Nl(I)}/12
очередь: ${N}
ручные щелчки ${I.used}/${Ur[I.wave]} · путь сейчас → ${Or(I.switches).bay+1}`,W.querySelector("#fork-notice").textContent=j()?"катится…":J;const y=j()&&F?F.before:I.switches;T.forEach((Z,K)=>{Z.rotation.y=(y[K]?1:-1)*.68;const A=W.querySelector("#fork-flip-"+K);A.textContent=["А","Б","В"][K]+(I.switches[K]?" →":" ←"),A.setAttribute("aria-pressed",String(!!I.switches[K])),A.disabled=j()||I.phase!=="ready"||I.used>=Ur[I.wave],A.classList.toggle("hinted",(Y==null?void 0:Y.action)==="flip"&&Y.index===K)});for(const Z of W.querySelectorAll(".fork-tools button"))Z.disabled=j();C.visible=I.phase==="ready"&&!j(),C.material=M[$n[I.wave][I.cursor]||0];const L=I.cursor-(j()&&(F!=null&&F.success)?1:0);v.forEach((Z,K)=>Z.visible=$n[I.wave].slice(0,L).includes(K)),P.forEach((Z,K)=>Z.visible=Or(y).bay===K),z.forEach((Z,K)=>Z.visible=K<Nl(I)-(j()&&(F!=null&&F.success)?1:0)),V.visible=I.phase==="spilled"&&!j(),V.material=M[$n[I.wave][I.cursor]||0],O.visible=j()}function ee(N,y){if(j())return;d(),Y=null;const L=Bd(I,N,y);return I=L.state,F=L.shot,B=F?0:1,J=L.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":I.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":I.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":I.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",ne(),ue(),h(),L}["А","Б","В"].forEach((N,y)=>W.querySelector("#fork-flip-"+y).onclick=()=>ee("flip",y)),W.querySelector("#fork-reset").onclick=()=>ee("restart"),W.querySelector("#fork-all").onclick=()=>ee("all"),W.querySelector("#fork-hint").onclick=()=>{if(j())return;const N=cm(I);Y=(N==null?void 0:N[0])||null,J=Y?Y.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][Y.index]}.`:I.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",ue(),h()};function ae(N){if(!j())return;const y=B;B=Math.min(1,B+Math.min(.1,Math.max(0,N))/2.8),O.position.set(...um(F,B)),O.position.y+=.17,O.material=M[F.target],B===1&&y<1&&(ue(),h())}return ue(),ne(),{house:p,controls:W,update:ae,run:()=>ee(I.phase==="complete"?"all":I.phase==="rounddone"?"next":I.phase==="spilled"?"restart":"release"),card:()=>({action:j()?"лампочка катится…":I.phase==="complete"?"новая серия ↺":I.phase==="rounddone"?"следующая волна →":I.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:j(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...I,saved:Nl(I),queue:$n[I.wave],limit:Ur[I.wave],path:Or(I.switches).bay,progress:B,shot:F,notice:J,hinted:Y,rolling:O.position.toArray(),archive:z.map(N=>N.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function dm(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function ph(n){const e=n.state||{},t=(c,u,g,h)=>Number.isFinite(c)?Math.max(u,Math.min(g,Math.floor(c))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=c=>c&&typeof c=="object"?{seq:t(c.seq,1,999999,1),range:t(c.range,1,18,3),apex:Number.isFinite(c.apex)?Math.max(.5,Math.min(9,c.apex)):.5,end:Number.isFinite(c.end)?Math.max(0,Math.min(18,c.end)):0,outcome:["landed","short","far","bumped"].includes(c.outcome)?c.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const c=n.args||{};if(n.tool==="launch"&&c.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&c.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(c.power)||c.power<1||c.power>6||!Number.isInteger(c.angle)||c.angle<1||c.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=c.power,r.angle=c.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&c.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],g=r.power*(4-r.angle),h=r.power*r.angle/2,d=u.gap/2/g,p=d<=1?4*h*d*(1-d):0,_=d<=1&&p<u.barrier?"bumped":g<u.gap?"short":g>u.gap?"far":"landed";r.flight={seq:r.seq,range:g,apex:h,end:_==="bumped"?u.gap/2:g,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:g,apex:h,clearance:p,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],l={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:l[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function fm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:g,watching:h,localPlay:d}){var G,q,ie;const p=s([-24,-1.5,-24],e);p.name="pneumatic-garage-range";const _=i("#eee0b7"),m=i("#29464b"),f=i("#d87b4d"),M=i("#94b9a0"),w=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,p),r([0,.24,0],[20,.1,5],m,p);for(let k=-9;k<10;k++)r([k,.31,2],[.55,.03,.06],_,p);const x=s([-8,.45,0],p);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],w,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const k of[-.35,.35])for(const te of[-.35,.35])o([k,.04,te],[.16,.16,.1],m,x);const b=s([-8,.37,0],p);b.name="flying-garage";for(const k of[-.9,.9])r([k,.74,0],[.12,1.5,1.6],M,b);r([0,.74,-.75],[1.8,1.5,.12],M,b),r([0,1.35,.76],[1.7,.27,.12],_,b);for(const k of[-1,1]){const te=r([k*.49,1.69,0],[1.16,.13,1.95],f,b);te.rotation.z=k*-.32}c("Г",[0,1.4,.86],.42,.29,b,{size:70});const S=[];for(const k of[-.74,.74])for(const te of[-.59,.59])a([k,-.04,te],.15,.23,t.metal,b),S.push(r([k,-.32,te],[.12,.5,.12],_,b));const T=s([0,.35,0],p);r([0,0,0],[2.5,.12,2.2],_,T),r([0,.07,0],[1.95,.035,1.65],M,T),c("ПОСАДКА",[0,.24,1.18],2.2,.3,T,{size:50});const v=s([0,.34,0],p),P=r([0,.5,0],[.32,1,2.1],f,v);for(const k of[-1.2,1.2])l([0,0,k],[0,3.4,k],.04,t.metal,v);const C=c("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),O=s([0,.33,0],p);r([0,0,0],[1.6,.12,2],t.copper,O);for(let k=0;k<5;k++)r([0,.1+k*.12,0],[1.1,.04,1.4],_,O);const U=s([-8,.6,3.4],p);a([0,.65,0],.4,1.3,t.copper,U),l([0,1.3,0],[0,1.8,0],.07,m,U),l([-.5,1.8,0],[.5,1.8,0],.07,m,U);const V=Array.from({length:6},(k,te)=>r([.7,.14+te*.24,0],[.24,.17,.12],M,U)),z=s([3,.6,3.7],p);r([0,0,0],[3.8,.2,.9],t.copper,z);const I=Array.from({length:3},(k,te)=>{const se=s([-1.1+te*1.1,.2,0],z);return r([0,.1,0],[.65,.2,.55],m,se),o([0,.56,0],[.3,.34,.27],_,se),r([0,.57,.22],[.39,.19,.08],m,se),se});c("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,p,{size:55}),c("МАШИНА ДОМА",[-8,.9,2],2.8,.32,p,{size:50});for(let k=0;k<21;k++)r([-24,-1.42,-6-k*.65],[.9,.12,.49],t.cream,e);u(b,S),u(p,[x,b,T,v,O,U,z]);let F=null,B=((ie=(q=(G=window.__beznogimState)==null?void 0:G.mechanics)==null?void 0:q.garage)==null?void 0:ie.public)||null,J,Y="",W="",ne=null,j=1,ue="";try{F=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function ee(k,te,se={}){const $=ph({mode:k,tool:te,args:se,state:F});F=$.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(F))}catch{}return $}ee("migrate");const ae=document.createElement("div");ae.id="garage-controls",ae.hidden=!0,ae.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(k=>`<option>${k}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(k=>`<option>${k}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(ae);const N=()=>B&&h()?B:ph({mode:"migrate",state:F}).public,y=()=>B&&h()?"resident":"sandbox";function L(k,te){var $;if(j<1)return;d();const se=ee("action",k,te);return ue=(($=se.result)==null?void 0:$.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",A(0),g(),se}ae.querySelector("#garage-pump").onclick=()=>L("pump",{power:Number(ae.querySelector("#garage-power").value),angle:Number(ae.querySelector("#garage-angle").value)}),ae.querySelector("#garage-reset").onclick=()=>L("launch",{mode:"restart"});function Z(){if(!J)return;const k=J;ae.querySelector("#garage-readout").textContent=`испытание ${k.level}/3 · пролёт ${k.gap} · пробка ${k.barrier}
воздух ${k.air}/6 · дальность ${k.range} · вершина ${k.apex}
посадки ${k.landed}/3 · попытки ${k.attempts}`,ae.querySelector("#garage-notice").textContent=ue;for(const te of ae.querySelectorAll("select,#garage-pump"))te.disabled=j<1||["landed","complete"].includes(k.phase);ae.querySelector("#garage-reset").disabled=j<1}function K(k){const te=!J||W!==y()||J.run!==k.run;W=y(),te?(ne=k.flight,j=1,ue=""):k.flight&&(!J.flight||J.flight.seq!==k.flight.seq)?(ne=k.flight,j=0):k.flight||(ne=null,j=1),J=k,ae.querySelector("#garage-power").value=k.power,ae.querySelector("#garage-angle").value=k.angle,T.position.x=-8+k.gap*.7,v.position.x=-8+k.gap*.35,P.scale.y=k.barrier*.5,P.position.y=k.barrier*.25,C.position.y=k.barrier*.5+.4,I.forEach((se,$)=>se.visible=$<k.landed),V.forEach((se,$)=>se.visible=$<k.air),Z()}function A(k){k=Math.min(.1,Math.max(0,k));const te=N(),se=y()+":"+JSON.stringify(te);se!==Y&&(Y=se,K(te),g());const $=j;j=Math.min(1,j+k/3.6);const{x:ce,y:ye}=dm(ne,j);b.position.set(-8+ce*.7,.37+ye*.5,0),b.rotation.z=j<1?Math.sin(j*Math.PI*2)*.045:0,O.visible=!!ne&&["short","far"].includes(ne.outcome),O.position.x=-8+((ne==null?void 0:ne.range)||0)*.7,S.forEach(be=>be.visible=j>0&&j<.65),$<1&&j===1&&(Z(),g())}const R=()=>({action:y()==="resident"?"попробовать свой гараж":j<1?"гараж в воздухе…":J.phase==="complete"?"новая серия ↺":J.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(y()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+J.message,disabled:j<1});return window.addEventListener("beznogim:state",({detail:k})=>{var se,$;const te=($=(se=k.mechanics)==null?void 0:se.garage)==null?void 0:$.public;te&&(B=te)}),K(N()),Y=y()+":"+JSON.stringify(N()),A(0),{house:p,controls:ae,update:A,card:R,run:()=>L("launch",{mode:J.phase==="complete"?"restart":J.phase==="landed"?"next":"jump"}),inspect:()=>({source:y(),...J,progress:j,notice:ue,garage:b.position.toArray(),car:x.position.toArray(),trophies:I.map(k=>k.visible)})}}const Rr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function Ul(n){const e=n.state||{},t=(u,g,h,d)=>Number.isFinite(u)?Math.max(g,Math.min(h,Math.floor(u))):d,i=t(e.planted,0,3,0),s=Math.min(2,i),r=Rr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let l=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",l={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")l={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:Rr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),l={ok:!0};else if(n.tool==="hint")l=pm(a);else if(!["slide","plant"].includes(n.tool))l={ok:!1,reason:"unknown_tool"};else if(a.planted===3)l={ok:!1,reason:"complete"};else if(n.tool==="slide"){const g={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(g,u.direction))l={ok:!1,reason:"invalid_arguments"};else{const[h,d]=g[u.direction],p=a.positions[u.piece];let _=p%5,m=Math.floor(p/5);for(;_+h>=0&&_+h<5&&m+d>=0&&m+d<5&&!r.rocks.includes((m+d)*5+_+h)&&(m+d)*5+_+h!==a.positions[1-u.piece];)_+=h,m+=d;const f=m*5+_;a.positions[u.piece]=f,f!==p?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",l={ok:f!==p,from:p,to:f,reason:f===p?"blocked":"slid"}}}else a.positions.some((g,h)=>g!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",l={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=Rr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",l={ok:!0,trees:a.planted*2})}const c=Rr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:c.rocks,goals:c.goals,size:5},result:l,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function pm(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=Rr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((l,c)=>l===e.goals[c]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let l=0;l<2;l++)for(const[c,[u,g]]of Object.entries(s)){let h=o[l]%5,d=Math.floor(o[l]/5);for(;h+u>=0&&h+u<5&&d+g>=0&&d+g<5&&!e.rocks.includes((d+g)*5+h+u)&&(d+g)*5+h+u!==o[1-l];)h+=u,d+=g;const p=o.slice();p[l]=d*5+h;const _=p.join(",");i.has(_)||(i.add(_),t.push([p,[...a,{piece:l,direction:c}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function mm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:g,watching:h,localPlay:d}){var A,R,G;const p=s([24,-1.5,24],e);p.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),m=i("#274644"),f=i("#f2e3b9"),M=i("#dfaf57"),w=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,p),r([0,.17,1.5],[7.25,.14,7.25],m,p);const b=q=>[(q%5-2)*1.35,.46,(Math.floor(q/5)-2)*1.35+1.5],S=[];for(let q=0;q<25;q++){const[ie,,k]=b(q);S.push(r([ie,.27,k],[1.27,.12,1.27],_,p))}const T=Array.from({length:6},()=>{const q=s([0,0,0],p);return r([0,.24,0],[1.05,.42,1.05],t.concrete,q),r([0,.49,0],[.9,.08,.9],t.metal,q),q}),v=[1,3].map((q,ie)=>{const k=b(q),te=s([k[0],.4,k[2]],p);return r([0,-.02,0],[1.23,.07,1.23],ie?w:M,te),r([0,.025,0],[1.03,.04,1.03],f,te),c(ie?"»":"«",[0,.14,.38],.72,.55,te,{size:105}),te});function P(q){const ie=s(b(q?24:20),p);for(let k=0;k<2;k++){const te=(k-.5)*.34,se=q?-1:1;l([te+se*.22,.92,0],[te-se*.16,.5,0],.065,q?w:M,ie),l([te-se*.16,.5,0],[te+se*.22,.08,0],.065,q?w:M,ie)}return r([0,-.07,0],[.98,.09,.5],t.metal,ie),ie}const C=[P(0),P(1)],O=C.map(q=>r([0,-.13,0],[1.1,.04,.67],f,q));for(const q of[-3.9,0,3.9])r([q,.75,-2.05],[.18,1.25,.18],t.copper,p),r([q,1.39,-2.05],[.32,.12,.32],f,p);for(const q of[-2.8,2.8])r([q,.8,-2.05],[1.85,.14,.14],t.copper,p);const U=Array.from({length:6},(q,ie)=>{const k=s([-3.5+ie%3*3.5,.3,-3.5-Math.floor(ie/3)*1.9],p);a([0,.45,0],.12,.9,t.copper,k);for(let te=0;te<3;te++){const se=new n.Mesh(new n.ConeGeometry(.87-te*.17,1.3,5),x);se.position.y=.95+te*.56,se.castShadow=!0,k.add(se)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,k),k});c("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,p,{size:44}),c("СЕВЕР",[0,1.52,-2.05],1.45,.33,p,{size:60});for(let q=0;q<23;q++)r([24,-1.42,6.6+q*.54],[1,.13,.43],t.cream,e);u(p,[...T,...C,...v,...U]);let V=null,z=((G=(R=(A=window.__beznogimState)==null?void 0:A.mechanics)==null?void 0:R.quotes)==null?void 0:G.public)||null,I,F="",B="",J=0,Y="",W=0,ne=Array(6).fill(0),j=[null,null];try{V=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function ue(q,ie,k={}){const te=Ul({mode:q,tool:ie,args:k,state:V});V=te.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(V))}catch{}return te}ue("migrate");const ee=document.createElement("div");ee.id="quotes-controls",ee.hidden=!0,ee.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(ee);const ae=()=>z&&h()?z:Ul({mode:"migrate",state:V}).public;function N(q,ie={}){if(W>0)return;d(),Y="";const k=ue("action",q,ie);return F="",Z(0),g(),k}for(const q of ee.querySelectorAll("[data-quote]"))q.onclick=()=>{J=Number(q.dataset.quote),Y="",y()};for(const q of ee.querySelectorAll("[data-slide]"))q.onclick=()=>N("slide",{piece:J,direction:q.dataset.slide});ee.querySelector("#quotes-pair").onclick=()=>N("restart",{scope:"pair"}),ee.querySelector("#quotes-hint").onclick=()=>{const q=Ul({mode:"action",tool:"hint",state:ae()}).result;Y=q.status==="route"?`${q.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[q.next.direction]} · осталось ходов: ${q.remaining}`:q.status==="aligned"?"Обе на месте. Выпускай.":q.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",y()};function y(){if(I){ee.querySelector("#quotes-readout").textContent=`пара ${I.level}/3 · ели ${I.trees}/6 · ходы ${I.moves}`,ee.querySelector("#quotes-hint-text").textContent=Y;for(const q of ee.querySelectorAll("[data-quote]"))q.setAttribute("aria-pressed",Number(q.dataset.quote)===J);for(const q of ee.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))q.disabled=W>0||I.phase==="complete";O.forEach((q,ie)=>q.visible=ie===J&&I.phase!=="complete")}}function L(q){const ie=z&&h()?"resident":"sandbox",k=I,te=!k||k.run!==q.run||ie!==B;B=ie,te?(C.forEach((se,$)=>se.position.set(...b(q.positions[$]))),ne=U.map((se,$)=>$<q.trees?1:0),j=[null,null],W=0):q.planted>k.planted?(W=1.4,j=C.map((se,$)=>({from:se.position.clone(),to:U[(q.planted-1)*2+$].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):q.planted!==k.planted&&(ne=U.map((se,$)=>$<q.trees?1:0)),I=q,T.forEach((se,$)=>{if(se.visible=$<q.rocks.length,se.visible){const ce=b(q.rocks[$]);se.position.set(ce[0],.3,ce[2])}}),y()}function Z(q){q=Math.min(.1,Math.max(0,q));const ie=ae(),k=(z&&h()?"resident:":"sandbox:")+JSON.stringify(ie);k!==F&&(F=k,L(ie),g());const te=W>0;W=Math.max(0,W-q);for(let se=0;se<2;se++){const $=C[se],ce=j[se];if(ce&&W>0)ce.t=Math.min(1,ce.t+q/1.4),$.position.lerpVectors(ce.from,ce.to,ce.t*ce.t*(3-2*ce.t)),$.position.y+=Math.sin(ce.t*Math.PI)*.9,$.scale.setScalar(1-ce.t*.8);else{j[se]=null,$.scale.setScalar(1);const ye=b(ie.positions[se]);$.position.x=n.MathUtils.damp($.position.x,ye[0],12,q),$.position.y=.46,$.position.z=n.MathUtils.damp($.position.z,ye[2],12,q)}$.visible=!!j[se]||ie.phase!=="complete"}U.forEach((se,$)=>{const ce=$<ie.trees?1:0;ne[$]=n.MathUtils.damp(ne[$],ce,W>0?1:5,q),se.visible=ne[$]>.003,se.scale.setScalar(Math.max(.001,ne[$]))}),te&&W===0&&(y(),g())}const K=()=>({action:z&&h()?"попробовать свои ёлочки":I.phase==="complete"?"новый питомник ↺":W>0?"пролезают…":"выпустить пару",description:(z&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+I.message,disabled:W>0});return window.addEventListener("beznogim:state",({detail:q})=>{var k,te;const ie=(te=(k=q.mechanics)==null?void 0:k.quotes)==null?void 0:te.public;ie&&(z=ie)}),L(ae()),F=(z&&h()?"resident:":"sandbox:")+JSON.stringify(ae()),Z(0),{house:p,controls:ee,update:Z,card:K,run:()=>N(I.phase==="complete"?"restart":"plant",I.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:z&&h()?"resident":"sandbox",...I,busy:W,selected:J,hint:Y,quotePositions:C.map(q=>q.position.toArray()),treeScales:ne.slice(),visibleTrees:U.filter(q=>q.visible).length})}}function mh(n){const e=n.state||{},t=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function gm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:l,sign:c,batchStatic:u,changed:g,watching:h,localPlay:d}){var L,Z,K;const p=s([0,-1.5,-24],e);p.name="punctuation-post";const _=i("#28464d"),m=i("#eee4c9"),f=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,p),r([0,.2,0],[14,.14,7],t.dark,p),r([0,.3,0],[13.6,.04,6.6],f,p);const M=s([0,0,0],p),w=s([0,0,0],p);for(const[A,R]of[[M,"ОТ"],[w,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,A),r([0,1.32,0],[2.12,.12,3.3],m,A),c(R,[0,.9,1.66],1,.36,A,{size:60});const x=s([0,1.43,0],p),b=s([0,0,0],x),S=s([0,0,0],x),T=r([-.5,0,0],[1,.15,.56],_,b),v=r([.5,0,0],[1,.15,.56],_,S),P=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,p)),C=s([0,1.47,0],p);C.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,C),o([-.08,.46,0],[.39,.42,.29],t.copper,C),l([-.08,.47,.3],.23,.033,m,C,[0,0,0]),l([-.08,.47,.315],.12,.03,m,C,[0,0,0]);for(const A of[-.13,.13])a([.4,.17,A],[.62,.46,A],.02,t.leaf,C),o([.62,.46,A],[.055,.065,.055],_,C);r([-.16,.92,0],[.46,.32,.065],m,C),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,C),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,C);const O=s([0,.4,3.9],p);r([0,0,0],[3.6,.22,1],t.copper,O);const U=[".","?","!"].map((A,R)=>{const G=s([-1.1+R*1.1,.42,0],O);return r([0,0,0],[.8,.65,.11],m,G),c(A,[0,.02,.075],.55,.5,G,{size:100}),G});c("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,p,{size:52});const V=s([0,.55,2.5],p);r([0,0,0],[10,.1,.4],t.copper,V);for(let A=-4;A<=4;A++)r([A,.07,0],[.035,.025,.26],_,V),c(String(A),[A,.08,.32],.4,.28,V,{size:45});for(let A=0;A<16;A++)r([1.5,-.1-A*.09,-5.9-A*.72],[1.05,.14,.65],t.cream,e);for(let A=0;A<8;A++)r([1.5,-1.45,-17.6-A*.5],[1.05,.14,.45],t.cream,e);const z=s([-6.9,.3,3.9],p);a([0,0,0],[0,2.7,0],.07,t.metal,z),r([0,2.7,0],[.8,.14,.8],t.metal,z),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),z),u(C,[]),u(M,[]),u(w,[]),u(p,[M,w,x,...P,C,O]);let I=null,F=((K=(Z=(L=window.__beznogimState)==null?void 0:L.mechanics)==null?void 0:Z.dash)==null?void 0:K.public)||null,B,J="",Y=1,W=0;try{I=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function ne(A,R,G={}){const q=mh({mode:A,tool:R,args:G,state:I});I=q.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(I))}catch{}return q}ne("migrate");const j=document.createElement("div");j.id="dash-controls",j.hidden=!0,j.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(A,R)=>`<option value="${R+1}">${R+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(A=>`<option value="${A}">${A>0?"+":""}${A}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(j);const ue=()=>F&&h()?F:mh({mode:"migrate",state:I}).public;function ee(A,R){d(),ne("action",A,R),J="",N(0),g()}j.querySelector("#dash-tune").onclick=()=>ee("tune",{span:Number(j.querySelector("#dash-span").value),shift:Number(j.querySelector("#dash-shift").value)}),j.querySelector("#dash-reset").onclick=()=>ee("reset");function ae(A){const R=["delivered","complete"].includes(A.phase);R?!B||B.run!==A.run||B.round!==A.round?Y=1:["delivered","complete"].includes(B.phase)||(Y=0):Y=0,B=A,j.querySelector("#dash-readout").textContent=`почта ${A.delivered}/3 · пролёт ${A.gap} · центр ${A.center>0?"+":""}${A.center} · попытки ${A.attempts}`,j.querySelector("#dash-span").value=A.span,j.querySelector("#dash-shift").value=A.shift;for(const G of j.querySelectorAll("select,#dash-tune"))G.disabled=R;M.position.x=A.center-A.gap/2-1,w.position.x=A.center+A.gap/2+1,P[0].position.x=A.center-A.gap/2,P[1].position.x=A.center+A.gap/2,x.position.x=A.shift,T.scale.x=v.scale.x=A.span/2,T.position.x=-A.span/4,v.position.x=A.span/4,U.forEach((G,q)=>G.visible=q<A.delivered)}function N(A){const R=ue(),G=JSON.stringify(R);G!==J&&(J=G,ae(R),g()),Y=["delivered","complete"].includes(R.phase)?Math.min(1,Y+A/4):0,W=n.MathUtils.damp(W,R.phase==="bent"?.22:0,6,A),b.rotation.z=W,S.rotation.z=-W,x.position.y=1.43-Math.sin(W)*R.span/2,C.position.x=M.position.x+(w.position.x-M.position.x)*(Y*Y*(3-2*Y)),C.position.y=1.47,C.rotation.z=Y>0&&Y<1?Math.sin(Y*30)*.025:0}const y=()=>{const A=B||ue();return{action:F&&h()?"попробовать свою почту":A.phase==="complete"?"новая почта ↺":A.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(F&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+A.message}};return window.addEventListener("beznogim:state",({detail:A})=>{var G,q;const R=(q=(G=A.mechanics)==null?void 0:G.dash)==null?void 0:q.public;R&&(F=R)}),ae(ue()),J=JSON.stringify(ue()),C.position.x=Y===1?w.position.x:M.position.x,{house:p,controls:j,update:N,card:y,run:()=>{if(Y>0&&Y<1)return;const A=ue().phase;ee(A==="complete"?"reset":A==="delivered"?"next":"cross")},inspect:()=>({source:F&&h()?"resident":"sandbox",...B,walk:Y,bend:W,snail:C.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:w.position.x,stamps:U.map(A=>A.visible)})}}function gh(n){const e=n.state||{},t=(o,a,l,c)=>Number.isFinite(o)?Math.max(a,Math.min(l,Math.floor(o))):c,i={depths:[0,0,0].map((o,a)=>{var l;return t((l=e.depths)==null?void 0:l[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function _m({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,watching:d,localPlay:p}){var Z,K,A;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const m=i("#d0b987"),f=i("#556f7f"),M=i("#a65d42"),w=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const R of[-2,2])r([.5,.96,R],[12.9,1.1,.22],t.copper,_);for(const R of[-6,7])r([R,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(R,G)=>r([-4+G*2,.98,0],[1.9,1,3.7],m,_)),b=r([.5,.54,0],[12.6,.04,3.75],w,_);b.castShadow=!1;const S=Array.from({length:3},(R,G)=>{const q=s([-4+G*2,.35,3.05],_);for(let ie=0;ie<5;ie++)o([(ie-2)*.27,.16+ie%2*.1,0],[.32,.22,.4],m,q);return q}),T=s([-2,1.3,0],_);T.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([R,G],q)=>q?v.lineTo(R,-G):v.moveTo(R,-G)),v.closePath();const P=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});P.rotateX(-Math.PI/2);const C=new n.Mesh(P,f);C.castShadow=!0,C.receiveShadow=!0,T.add(C),r([-.45,.7,0],[4.9,.09,1.4],t.cream,T);for(let R=0;R<3;R++){r([-.95+R*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][R],T);for(const G of[-.601,.601])for(let q=0;q<4;q++)r([-.95+R*.92-.3+q*.2,1.03,G],[.024,.5,.025],t.dark,T)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,T),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,T);for(const R of[-.63,.63])r([-2.25,1.6,R],[.73,.16,.03],t.dark,T);a([-2.45,1.98,0],.15,.43,M,T),a([-2.45,2.21,0],.15,.05,t.dark,T),l([2.3,.77,0],[2.3,1.9,0],.035,t.metal,T),r([2.55,1.7,0],[.48,.26,.03],t.cream,T);for(const R of[-2.9,2.1])for(const G of[-.7,.7])l([R,.7,G],[R,1,G],.025,t.cream,T);for(const R of[-.7,.7])l([-2.9,1,R],[2.1,1,R],.025,t.cream,T);const O=s([5.9,1.1,3.4],_);c([0,0,0],.4,.04,t.copper,O,[0,0,0]);for(let R=0;R<4;R++){const G=R*Math.PI/2;l([0,0,0],[.4*Math.cos(G),.4*Math.sin(G),0],.025,t.copper,O)}l([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),l([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const U=r([5.9,.8,1.75],[.19,.55,.19],w,_);U.castShadow=!1;const V=s([0,.29,0],_);for(const R of[-2.9,2.9])r([.5,0,R],[13,.02,1.1],w,V);for(let R=0;R<3;R++)u(["КОРМА","ТРЮМ","НОС"][R],[-4+R*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const R of[-6.6,6.6])l([R,.3,-3.8],[R,3.6,-3.8],.08,t.metal,_),r([R,3.6,-3.5],[.55,.16,.8],t.metal,_),r([R,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let R=0;R<15;R++)r([-7.2-R*.72,-.03-R*.09,1.2],[.65,.14,1.12],t.cream,e);const z=s([-6.5,.5,3.3],_);l([0,0,0],[0,1.5,0],.045,t.copper,z),r([0,.1,0],[.32,.35,.08],t.metal,z),c([0,1.53,0],.1,.025,t.metal,z,[0,0,0]),g(T,[]),g(_,[...x,...S,b,T,O,U,V]);let I=null,F=((A=(K=(Z=window.__beznogimState)==null?void 0:Z.mechanics)==null?void 0:K.drydock)==null?void 0:A.public)||null,B,J="",Y=0,W=0,ne=0;try{I=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function j(R,G,q={}){const ie=gh({mode:R,tool:G,args:q,state:I});I=ie.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(I))}catch{}return ie}j("migrate");const ue=document.createElement("div");ue.id="drydock-controls",ue.hidden=!0,ue.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(ue);function ee(){return F&&d()?F:gh({mode:"migrate",state:I}).public}function ae(R,G){p(),j("action",R,G),J="",L(0),h()}ue.querySelectorAll("[data-dig]").forEach(R=>R.onclick=()=>ae("dig",{channel:Number(R.dataset.dig)})),ue.querySelector("#drydock-fill").onclick=()=>ae("pump",{direction:"fill"}),ue.querySelector("#drydock-drain").onclick=()=>ae("pump",{direction:"drain"}),ue.querySelector("#drydock-reset").onclick=()=>ae("reset");function N(R){B?(B.water!==R.water&&(Y=2),B.floods!==R.floods&&(W=3),!B.launched&&R.launched&&(ne=0)):ne=R.launched?1:0,B=R,ue.querySelector("#drydock-readout").textContent=`каналы ${R.depths.join(" / ")} · вода ${R.water}/2 · переливы ${R.floods}`,ue.querySelectorAll("[data-dig]").forEach(G=>{G.disabled=R.launched||R.water>0||R.depths[Number(G.dataset.dig)]===2}),ue.querySelector("#drydock-fill").disabled=R.launched,ue.querySelector("#drydock-drain").disabled=R.launched||R.water===0,x.forEach((G,q)=>{const ie=1-R.depths[q]*.4;G.scale.y=ie,G.position.y=.48+ie/2,S[q].scale.setScalar(.45+R.depths[q]*.4)}),b.visible=R.water>0,b.position.y=.49+R.water*.39}function y(){const R=B||ee();return{action:F&&d()?"попробовать свой спуск":R.launched?"корабль в песок ↺":"спустить корабль",description:(F&&d()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+R.message}}function L(R){const G=ee(),q=JSON.stringify(G);q!==J&&(J=q,N(G),h()),Y=Math.max(0,Y-R),W=Math.max(0,W-R),U.visible=Y>0&&G.water>0,V.visible=W>0,O.rotation.z+=Y>0?R*3:0,ne=G.launched?Math.min(1,ne+R/5):0;const ie=ne*ne*(3-2*ne);T.position.x=-2+ie*5.6;const k=Math.min(...G.depths),te=G.afloat?.94:1.15-k*.32;T.position.y=n.MathUtils.damp(T.position.y,te,4,R),T.rotation.z=n.MathUtils.damp(T.rotation.z,G.afloat?0:(G.depths[2]-G.depths[0])*.085,4,R)}return window.addEventListener("beznogim:state",({detail:R})=>{var q,ie;const G=(ie=(q=R.mechanics)==null?void 0:q.drydock)==null?void 0:ie.public;G&&(F=G,J="")}),N(ee()),T.position.x=ee().launched?3.6:-2,{house:_,controls:ue,update:L,card:y,run:()=>ae(ee().launched?"reset":"launch"),inspect:()=>({source:F&&d()?"resident":"sandbox",...B,ship:T.position.toArray(),pitch:T.rotation.z,waterY:b.position.y,voyage:ne,sandHeights:x.map(R=>R.scale.y),floodVisible:V.visible})}}function _h(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function vm({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,changed:g,watching:h,localPlay:d}){var ue,ee,ae;const p=s([0,0,0],e);p.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,p),r([.55,1.5,-.713],[1.42,1.04,.035],_,p),l([.55,.9,-.94],[.55,1,-.94],.08,t.metal,p);const f=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let N=0;N<7;N++)for(let y=0;y<9;y++)M.push(r([.55+(y-4)*.145,1.5+(3-N)*.14,-.683],[.13,.12,.02],m,p));const w=s([-1.05,1.24,-.38],p);w.name="core-gear",a([0,0,0],.3,.11,t.copper,w).rotation.x=Math.PI/2;const x=[];for(let N=0;N<12;N++){const y=N/12*Math.PI*2;let L=r([Math.cos(y)*.33,Math.sin(y)*.33,0],[.13,.13,.12],t.copper,w);L.rotation.z=y,x.push(L)}c([0,0,.06],.13,.025,t.dark,w,[0,0,0]);const b=s([-.4,1.12,-.38],p);c([0,0,0],.19,.035,t.dark,b,[0,0,0]),l([-.2,0,0],[.2,0,0],.025,t.metal,b);const S=s([0,0,0],p);l([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),l([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const T=s([-1.5,1,-.05],p);l([0,0,0],[.23,0,0],.04,t.metal,T),l([.23,0,0],[.23,.23,0],.04,t.copper,T),o([.23,.23,0],.08,t.rust,T);const v=s([-1.55,1.18,-1.13],p);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),c([0,.29,0],.33,.025,t.copper,v),c([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,p,{size:37});const P=Array.from({length:3},(N,y)=>o([.17+y*.3,2.23,-.82],.06,t.mint,p));let C=null,O=((ae=(ee=(ue=window.__beznogimState)==null?void 0:ue.mechanics)==null?void 0:ee.bench)==null?void 0:ae.public)||null,U,V="",z=0;try{C=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function I(N,y,L={}){const Z=_h({mode:N,tool:y,args:L,state:C});C=Z.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(C))}catch{}return Z}I("migrate");const F=document.createElement("div");F.id="bench-controls",F.hidden=!0,F.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(F);function B(){return O&&h()?O:_h({mode:"migrate",state:C}).public}function J(N,y){d(),I("action",N,y),V="",j(0),g()}F.querySelectorAll("[data-part]").forEach(N=>N.onclick=()=>J("fit",{part:N.dataset.part,value:Number(N.dataset.value)})),F.querySelector("#bench-salvage").onclick=()=>J("salvage"),F.querySelector("#bench-restart").onclick=()=>J("restart");function Y(N){U&&U.attempts!==N.attempts&&(z=3),U=N,F.querySelector("#bench-readout").textContent=`экран ${N.round+1}/3 · скорость ${N.speed} / нужно ${N.target}`,F.querySelectorAll("[data-part]").forEach(y=>{y.setAttribute("aria-pressed",String(N[y.dataset.part]===Number(y.dataset.value))),y.disabled=N.phase!=="ready"}),F.querySelector("#bench-salvage").disabled=!N.bucket,_.color.set(N.picture?"#16362c":"#e9e4cc"),_.emissive.set(N.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=N.picture?.1:.6,M.forEach((y,L)=>y.visible=!!N.picture&&f[N.picture-1][L]==="1"),x.forEach((y,L)=>y.visible=L<N.core*3),b.scale.setScalar(.75+N.belt*.25),S.visible=!N.bucket,P.forEach((y,L)=>y.visible=L<N.repairs)}const W={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function ne(){const N=U||B();return{action:O&&h()?"собрать свой монитор":N.phase==="ejected"?"достать ядро":N.phase==="repaired"?N.round===2?"закончить работу":"следующий экран":N.phase==="complete"?"ещё раз":"крутить рукоятку",description:(O&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+W[N.phase]}}function j(N){const y=B(),L=JSON.stringify(y);L!==V&&(V=L,Y(y),g()),z=Math.max(0,z-N);const Z=Math.min(1,N*7),K=y.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];w.position.lerp(new n.Vector3(...K),Z),w.rotation.x=n.MathUtils.lerp(w.rotation.x,y.bucket?-Math.PI/2:0,Z);const A=z>0?y.core*2:y.picture?.4:0;w.rotation.z+=N*A,b.rotation.z-=N*A*y.belt,T.rotation.z+=N*A}return window.addEventListener("beznogim:state",({detail:N})=>{var L,Z;const y=(Z=(L=N.mechanics)==null?void 0:L.bench)==null?void 0:Z.public;y&&(O=y,V="")}),Y(B()),w.position.set(...B().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:p,controls:F,update:j,card:ne,run:()=>{const N=B();J(N.phase==="ejected"?"salvage":N.phase==="repaired"?"next":N.phase==="complete"?"restart":"crank")},inspect:()=>({source:O&&h()?"resident":"sandbox",...U,corePosition:w.position.toArray(),coreAngle:w.rotation.z,driveAngle:b.rotation.z,litPixels:M.filter(N=>N.visible).length})}}const vh=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function xh(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function yh(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):xh();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const l=n.args||{},c=n.tool;if(c==="restart")Object.assign(e,xh(e.run+1));else if(c==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(c==="load")!Number.isInteger(l.index)||l.index<0||l.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[l.index]=!e.loaded[l.index],e.status="idle");else if(c==="amnesty")e.pardoned=!0,e.status="idle";else if(c==="dispatch"){const u=vh[e.round],g=u.weights.reduce((h,d,p)=>h+(e.loaded[p]?d+(e.pardoned?0:u.debt[p]):0),0);e.attempts++,g!==u.target?(e.status=g<u.target?"under":"over",i={ok:!1,reason:e.status,total:g,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,d)=>{e.loaded[d]&&e.delivered.push({id:`${e.run}:${e.round}:${d}`,weight:h})}),i={ok:!0,total:g,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=vh[e.round],r=s.weights.map((l,c)=>l+(e.pardoned?0:s.debt[c])),o=r.reduce((l,c,u)=>l+(e.loaded[u]?c:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function xm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:g,changed:h,watching:d,localPlay:p}){var y,L,Z;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const m=i("#9d8560"),f=i("#a1b56f"),M=i("#f1d29a"),w=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],w,_),r([3.65,-.14,0],[3.3,.5,7],w,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const K of[-4.9,4.9])l([K,0,-3],[K,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,_);const x=s([0,.2,1.15],_);for(let K=0;K<11;K++)r([-2+K*.4,0,0],[.38,.16,1.65],m,x);for(const K of[-.72,.72])l([-2.2,.22,K],[2.2,.22,K],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const b=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,b);for(const K of[-.52,.52])for(const A of[-.58,.58]){const R=c([K,0,A],.17,.05,t.dark,b,[0,0,0]);R.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],_);l([0,-.5,0],[0,.2,0],.1,t.metal,S);const T=s([0,0,0],S);l([0,0,0],[0,.8,0],.065,t.copper,T),o([0,.8,0],.14,t.rust,T),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const P=a([0,.7,0],.57,1.1,t.copper,v);c([0,1.28,0],.25,.045,t.dark,v);const C=Array.from({length:3},(K,A)=>o([1.75+A*.34,2.15,-3.05],.095,t.mint,_)),O=Array.from({length:3},(K,A)=>{const R=s([-3.6,.72,-2.1+A*1.08],_),G=o([0,0,0],[.28,.23,.57],f,R);G.rotation.z=.1,l([0,0,-.5],[.05,.12,-.68],.045,t.leaf,R);const q=s([.45,.28,0],R);return r([0,0,0],[.29,.57,.4],M,q),r([0,0,.21],[.18,.045,.012],t.rust,q),{g:R,tax:q}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],m,_);const U=Array.from({length:6},(K,A)=>o([2.75+A%3*.7,1,-2.1+Math.floor(A/3)*.83],[.2,.19,.38],f,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const V=s([0,0,0],e);for(let K=0;K<15;K++){const A=K/14;r([-.6+Math.sin(A*Math.PI)*1.5,-1.55,17+K*.3],[.9,.12,.65],w,V)}for(let K=0;K<5;K++)r([-.8-K*.6,-1.55,21.5],[.75,.12,.75],w,V);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,V,{size:35}),l([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,V),g(V,[]),g(_,[x,b,S,v,...O.map(K=>K.g),...U,...C]),g(x,[]),g(b,[]);let z=null,I=((Z=(L=(y=window.__beznogimState)==null?void 0:y.mechanics)==null?void 0:L.amnesty)==null?void 0:Z.public)||null,F,B="",J=0;try{z=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function Y(K,A,R={}){const G=yh({state:z,mode:K,tool:A,args:R});z=G.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(z))}catch{}return G}Y("migrate");const W=document.createElement("div");W.id="amnesty-controls",W.hidden=!0,W.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(W);function ne(){return I&&d()?I:yh({state:z,mode:"migrate"}).public}function j(K,A){p(),Y("action",K,A),B="",N(0),h()}for(const K of W.querySelectorAll("[data-load]"))K.onclick=()=>j("load",{index:Number(K.dataset.load)});W.querySelector("#amnesty-pardon").onclick=()=>j("amnesty"),W.querySelector("#amnesty-restart").onclick=()=>j("restart");const ue={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function ee(K){F=K;const A=K.status==="delivered"||K.status==="complete";W.querySelector("#amnesty-readout").textContent=`рейс ${K.round+1}/3 · груз ${K.total} / нужно ${K.target}`,W.querySelectorAll("[data-load]").forEach((R,G)=>{R.textContent=`${["A","B","C"][G]} · ${K.weights[G]}${K.debt[G]?` + ${K.debt[G]} бумага`:""}`,R.setAttribute("aria-pressed",String(K.loaded[G])),R.disabled=A}),W.querySelector("#amnesty-pardon").disabled=K.pardoned||A,W.querySelector("#amnesty-pardon").textContent=K.pardoned?"налог отменён":"отменить налог",P.scale.y=K.target/4,C.forEach((R,G)=>R.visible=G<(K.status==="complete"?3:K.round)),U.forEach((R,G)=>R.visible=G<K.delivered.length),O.forEach((R,G)=>{R.tax.visible=!K.pardoned||J<.99,R.g.visible=!A||!K.loaded[G],R.g.scale.setScalar(.8+K.weights[G]*.08)})}function ae(){const K=F||ne();return{action:I&&d()?"войти в свою амнистию":K.status==="delivered"?"следующий рейс":K.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(I&&d()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+ue[K.status]}}function N(K,A){const R=ne(),G=JSON.stringify(R);G!==B&&(B=G,ee(R),h());const q=R.status==="delivered"||R.status==="complete",ie=(k,te)=>n.MathUtils.lerp(k,te,Math.min(1,K*5));x.rotation.z=ie(x.rotation.z,R.tilt),b.position.x=ie(b.position.x,q?3:-2.55),T.rotation.z=ie(T.rotation.z,R.pardoned?-.65:0),J=ie(J,R.pardoned?1:0),O.forEach(k=>{k.tax.position.y=.28+J*2.5,k.tax.rotation.z=J*.8,k.tax.visible=!R.pardoned||J<.99}),U.forEach((k,te)=>k.visible=te<R.delivered.length-(q&&b.position.x<2.9?2:0)),O.forEach((k,te)=>{const se=R.loaded[te];k.g.visible=!q||!se||b.position.x<2.9,k.g.position.x=ie(k.g.position.x,se?b.position.x+(te-1)*.42:-3.6),k.g.position.y=ie(k.g.position.y,se?.86:.72),k.g.position.z=ie(k.g.position.z,se?1.15:-2.1+te*1.08)})}return window.addEventListener("beznogim:state",({detail:K})=>{var R,G;const A=(G=(R=K.mechanics)==null?void 0:R.amnesty)==null?void 0:G.public;A&&(I=A,B="")}),J=ne().pardoned?1:0,ee(ne()),{house:_,controls:W,update:N,card:ae,run:()=>j(F.status==="delivered"?"next":F.status==="complete"?"restart":"dispatch"),inspect:()=>({source:I&&d()?"resident":"sandbox",...F,bridgeTilt:x.rotation.z,cartX:b.position.x,cargoPositions:O.map(K=>K.g.position.toArray()),taxVisible:O.map(K=>K.tax.visible),paperY:O.map(K=>K.tax.position.y),handleAngle:T.rotation.z,deliveredVisible:U.filter(K=>K.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="186",Ai={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,Sc=1,Gd=2,er=1,Hd=2,Zs=3,ns=0,gn=1,Dn=2,mi=0,tr=1,bc=2,Ec=3,wc=4,Wd=5,vs=100,qd=101,Xd=102,Yd=103,$d=104,Jd=200,Zd=201,Kd=202,Qd=203,Qc=204,jc=205,jd=206,ef=207,tf=208,nf=209,sf=210,rf=211,of=212,af=213,lf=214,oa=0,aa=1,la=2,rr=3,ca=4,ua=5,ha=6,da=7,eu=0,cf=1,uf=2,Qn=0,tu=1,nu=2,iu=3,tl=4,su=5,ru=6,ou=7,au=300,is=301,Ts=302,$o=303,Jo=304,io=306,qr=1e3,hi=1001,fa=1002,jt=1003,hf=1004,Pr=1005,tn=1006,Zo=1007,Ji=1008,yn=1009,lu=1010,cu=1011,or=1012,nl=1013,ti=1014,On=1015,ni=1016,il=1017,sl=1018,ar=1020,uu=35902,hu=35899,du=1021,fu=1022,Fn=1023,vi=1026,Zi=1027,rl=1028,ol=1029,ss=1030,al=1031,ll=1033,Fr=33776,zr=33777,kr=33778,Br=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,ya=37496,Ma=37488,Sa=37489,Xr=37490,ba=37491,Ea=37808,wa=37809,Ta=37810,Aa=37811,Ca=37812,Ra=37813,Pa=37814,La=37815,Ia=37816,Da=37817,Na=37818,Ua=37819,Oa=37820,Fa=37821,za=36492,ka=36494,Ba=36495,Va=36283,Ga=36284,Yr=36285,Ha=36286,df=3200,Wa=0,ff=1,Ei="",cn="srgb",$r="srgb-linear",Jr="linear",Tt="srgb",Ko=7680,pf=519,mf=512,gf=513,_f=514,cl=515,vf=516,xf=517,ul=518,yf=519,Mf=35044,Tc="300 es",Kn=2e3,lr=2001;function ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sf(){const n=qa("canvas");return n.style.display="block",n}const Mh={};function Ac(...n){const e="THREE."+n.shift();console.log(e,...n)}function bf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=bf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=bf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Es(...n){const e=n.join(" ");e in Mh||(Mh[e]=!0,tt(...n))}function Mm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Sm={[oa]:aa,[la]:ha,[ca]:da,[rr]:ua,[aa]:oa,[ha]:la,[da]:ca,[ua]:rr};class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Vr=Math.PI/180,Zr=180/Math.PI;function Cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function pu(n,e){return(n%e+e)%e}function bm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Em(n,e,t){return n!==e?(t-n)/(e-n):0}function Gr(n,e,t){return(1-t)*n+t*e}function wm(n,e,t,i){return Gr(n,e,1-Math.exp(-t*i))}function Tm(n,e=1){return e-Math.abs(pu(n,e*2)-e)}function Am(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Pm(n,e){return n+Math.random()*(e-n)}function Lm(n){return n*(.5-Math.random())}function Im(n){n!==void 0&&(Sh=n);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dm(n){return n*Vr}function Nm(n){return n*Zr}function Um(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Om(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zm(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),g=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*g,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*g,a*c);break;case"ZXZ":n.set(l*g,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:Vr,RAD2DEG:Zr,generateUUID:Cs,clamp:ut,euclideanModulo:pu,mapLinear:bm,inverseLerp:Em,lerp:Gr,damp:wm,pingpong:Tm,smoothstep:Am,smootherstep:Cm,randInt:Rm,randFloat:Pm,randFloatSpread:Lm,seededRandom:Im,degToRad:Dm,radToDeg:Nm,isPowerOfTwo:Um,ceilPowerOfTwo:Om,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:zm,normalize:dn,denormalize:$s},Qu=class Qu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;let Te=Qu;class Oi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],g=i[s+3],h=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(g!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+g*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let f=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);f=Math.sin(f*M)/w,a=Math.sin(a*M)/w,l=l*f+h*a,c=c*f+d*a,u=u*f+p*a,g=g*f+_*a}else{l=l*f+h*a,c=c*f+d*a,u=u*f+p*a,g=g*f+_*a;const M=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=M,c*=M,u*=M,g*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],g=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*g+l*d-c*h,e[t+1]=l*p+u*h+c*g-a*d,e[t+2]=c*p+u*d+a*h-l*g,e[t+3]=u*p-a*g-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),g=a(r/2),h=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*g+c*d*p,this._y=c*d*g-h*u*p,this._z=c*u*p+h*d*g,this._w=c*u*g-h*d*p;break;case"YXZ":this._x=h*u*g+c*d*p,this._y=c*d*g-h*u*p,this._z=c*u*p-h*d*g,this._w=c*u*g+h*d*p;break;case"ZXY":this._x=h*u*g-c*d*p,this._y=c*d*g+h*u*p,this._z=c*u*p+h*d*g,this._w=c*u*g-h*d*p;break;case"ZYX":this._x=h*u*g-c*d*p,this._y=c*d*g+h*u*p,this._z=c*u*p-h*d*g,this._w=c*u*g+h*d*p;break;case"YZX":this._x=h*u*g+c*d*p,this._y=c*d*g+h*u*p,this._z=c*u*p-h*d*g,this._w=c*u*g-h*d*p;break;case"XZY":this._x=h*u*g-c*d*p,this._y=c*d*g-h*u*p,this._z=c*u*p+h*d*g,this._w=c*u*g+h*d*p;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],g=t[10],h=i+a+g;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>g){const d=2*Math.sqrt(1+i-a-g);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>g){const d=2*Math.sqrt(1+a-i-g);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+g-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ju=class ju{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),g=2*(r*i-o*t);return this.x=t+l*c+o*g-a*u,this.y=i+l*u+a*c-r*g,this.z=s+l*g+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ju.prototype.isVector3=!0;let H=ju;const Ol=new H,bh=new Oi,eh=class eh{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],g=i[7],h=i[2],d=i[5],p=i[8],_=s[0],m=s[3],f=s[6],M=s[1],w=s[4],x=s[7],b=s[2],S=s[5],T=s[8];return r[0]=o*_+a*M+l*b,r[3]=o*m+a*w+l*S,r[6]=o*f+a*x+l*T,r[1]=c*_+u*M+g*b,r[4]=c*m+u*w+g*S,r[7]=c*f+u*x+g*T,r[2]=h*_+d*M+p*b,r[5]=h*m+d*w+p*S,r[8]=h*f+d*x+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*g+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=g*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;let it=eh;const Fl=new it,Eh=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){const n={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$r]:{primaries:e,whitePoint:i,transfer:Jr,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const gt=km();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ns;class Ef{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ns===void 0&&(Ns=qa("canvas")),Ns.width=e.width,Ns.height=e.height;const s=Ns.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bm=0;class hl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zl(s[o].image)):r.push(zl(s[o]))}else r=zl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ef.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Vm=0;const kl=new H;class sn extends zi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=hi,s=hi,r=tn,o=Ji,a=Fn,l=yn,c=sn.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Cs(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=au;sn.DEFAULT_ANISOTROPY=1;const th=class th{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],g=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(g-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(g+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(d+1)/2,b=(f+1)/2,S=(u+h)/4,T=(g+_)/4,v=(p+m)/4;return w>x&&w>b?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=T/i):x>b?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=T/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(g-_)*(g-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(g-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};th.prototype.isVector4=!0;let Ft=th;class wf extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends wf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mu extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ja=class ja{constructor(e,t,i,s,r,o,a,l,c,u,g,h,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,g,h,d,p,_,m)}set(e,t,i,s,r,o,a,l,c,u,g,h,d,p,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=g,f[14]=h,f[3]=d,f[7]=p,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ja().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*g,p=a*u,_=a*g;t[0]=l*u,t[4]=-l*g,t[8]=c,t[1]=d+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*g,p=c*u,_=c*g;t[0]=h+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*g,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*g,p=c*u,_=c*g;t[0]=h-_*a,t[4]=-o*g,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*g,p=a*u,_=a*g;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+_,t[1]=l*g,t[5]=_*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-h*g,t[8]=p*g+d,t[1]=g,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*g+p,t[10]=h-_*g}else if(e.order==="XZY"){const h=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-g,t[8]=c*u,t[1]=h*g+_,t[5]=o*u,t[9]=d*g-p,t[2]=p*g-d,t[6]=a*u,t[10]=_*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Hm)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Wi.crossVectors(i,bn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Wi.crossVectors(i,bn)),Wi.normalize(),vo.crossVectors(bn,Wi),s[0]=Wi.x,s[4]=vo.x,s[8]=bn.x,s[1]=Wi.y,s[5]=vo.y,s[9]=bn.y,s[2]=Wi.z,s[6]=vo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],g=i[5],h=i[9],d=i[13],p=i[2],_=i[6],m=i[10],f=i[14],M=i[3],w=i[7],x=i[11],b=i[15],S=s[0],T=s[4],v=s[8],P=s[12],C=s[1],O=s[5],U=s[9],V=s[13],z=s[2],I=s[6],F=s[10],B=s[14],J=s[3],Y=s[7],W=s[11],ne=s[15];return r[0]=o*S+a*C+l*z+c*J,r[4]=o*T+a*O+l*I+c*Y,r[8]=o*v+a*U+l*F+c*W,r[12]=o*P+a*V+l*B+c*ne,r[1]=u*S+g*C+h*z+d*J,r[5]=u*T+g*O+h*I+d*Y,r[9]=u*v+g*U+h*F+d*W,r[13]=u*P+g*V+h*B+d*ne,r[2]=p*S+_*C+m*z+f*J,r[6]=p*T+_*O+m*I+f*Y,r[10]=p*v+_*U+m*F+f*W,r[14]=p*P+_*V+m*B+f*ne,r[3]=M*S+w*C+x*z+b*J,r[7]=M*T+w*O+x*I+b*Y,r[11]=M*v+w*U+x*F+b*W,r[15]=M*P+w*V+x*B+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],g=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],f=e[15],M=l*d-c*h,w=a*d-c*g,x=a*h-l*g,b=o*d-c*u,S=o*h-l*u,T=o*g-a*u;return t*(_*M-m*w+f*x)-i*(p*M-m*b+f*S)+s*(p*w-_*b+f*T)-r*(p*x-_*S+m*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],g=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],f=e[15],M=t*a-i*o,w=t*l-s*o,x=t*c-r*o,b=i*l-s*a,S=i*c-r*a,T=s*c-r*l,v=u*_-g*p,P=u*m-h*p,C=u*f-d*p,O=g*m-h*_,U=g*f-d*_,V=h*f-d*m,z=M*V-w*U+x*O+b*C-S*P+T*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return e[0]=(a*V-l*U+c*O)*I,e[1]=(s*U-i*V-r*O)*I,e[2]=(_*T-m*S+f*b)*I,e[3]=(h*S-g*T-d*b)*I,e[4]=(l*C-o*V-c*P)*I,e[5]=(t*V-s*C+r*P)*I,e[6]=(m*x-p*T-f*w)*I,e[7]=(u*T-h*x+d*w)*I,e[8]=(o*U-a*C+c*v)*I,e[9]=(i*C-t*U-r*v)*I,e[10]=(p*S-_*x+f*M)*I,e[11]=(g*x-u*S-d*M)*I,e[12]=(a*P-o*O-l*v)*I,e[13]=(t*O-i*P+s*v)*I,e[14]=(_*w-p*b-m*M)*I,e[15]=(u*b-g*w+h*M)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,g=a+a,h=r*c,d=r*u,p=r*g,_=o*u,m=o*g,f=a*g,M=l*c,w=l*u,x=l*g,b=i.x,S=i.y,T=i.z;return s[0]=(1-(_+f))*b,s[1]=(d+x)*b,s[2]=(p-w)*b,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(h+f))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(p+w)*T,s[9]=(m-M)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Us.set(s[0],s[1],s[2]).length();const a=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);const c=1/o,u=1/a,g=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=g,Wn.elements[9]*=g,Wn.elements[10]*=g,t.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2*r/(t-e),g=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Kn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=g,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2/(t-e),g=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Kn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===lr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=g,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ja.prototype.isMatrix4=!0;let xt=ja;const Us=new H,Wn=new xt,Gm=new H(0,0,0),Hm=new H(1,1,1),Wi=new H,vo=new H,bn=new H,Th=new xt,Ah=new Oi;class Fi{constructor(e=0,t=0,i=0,s=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],g=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const Ch=new H,Os=new Oi,xi=new xt,xo=new H,vr=new H,qm=new H,Xm=new Oi,Rh=new H(1,0,0),Ph=new H(0,1,0),Lh=new H(0,0,1),Ih={type:"added"},Ym={type:"removed"},Fs={type:"childadded",child:null},Bl={type:"childremoved",child:null};class Ht extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new H,t=new Fi,i=new Oi,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new it}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(vr,xo,this.up):xi.lookAt(xo,vr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(xi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ih),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ym),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ih),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),g=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new H(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ki extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $m={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],h=u.position.distanceTo(g.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($m)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ki;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Vl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=pu(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vl(o,r,e+1/3),this.g=Vl(o,r,e),this.b=Vl(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Af[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return gt.workingToColorSpace(ln.copy(this),e),Math.round(ut(ln.r*255,0,255))*65536+Math.round(ut(ln.g*255,0,255))*256+Math.round(ut(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const g=o-a;switch(c=u<=.5?g/(o+a):g/(2-o-a),o){case i:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-i)/g+2;break;case r:l=(i-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){gt.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(yo);const i=Gr(qi.h,yo.h,t),s=Gr(qi.s,yo.s,t),r=Gr(qi.l,yo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ht;ht.NAMES=Af;class fl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=t}clone(){return new fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cf extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new H,yi=new H,Gl=new H,Mi=new H,zs=new H,ks=new H,Dh=new H,Hl=new H,Wl=new H,ql=new H,Xl=new Ft,Yl=new Ft,$l=new Ft;class Nn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),yi.subVectors(i,t),Gl.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(yi),l=qn.dot(Gl),c=yi.dot(yi),u=yi.dot(Gl),g=o*c-a*a;if(g===0)return r.set(0,0,0),null;const h=1/g,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Xl.setScalar(0),Yl.setScalar(0),$l.setScalar(0),Xl.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),$l.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xl,r.x),o.addScaledVector(Yl,r.y),o.addScaledVector($l,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),yi.subVectors(e,t),qn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;zs.subVectors(s,i),ks.subVectors(r,i),Hl.subVectors(e,i);const l=zs.dot(Hl),c=ks.dot(Hl);if(l<=0&&c<=0)return t.copy(i);Wl.subVectors(e,s);const u=zs.dot(Wl),g=ks.dot(Wl);if(u>=0&&g<=u)return t.copy(s);const h=l*g-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(zs,o);ql.subVectors(e,r);const d=zs.dot(ql),p=ks.dot(ql);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(ks,a);const m=u*p-d*g;if(m<=0&&g-u>=0&&d-p>=0)return Dh.subVectors(r,s),a=(g-u)/(g-u+(d-p)),t.copy(s).addScaledVector(Dh,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(zs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class os{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),So.subVectors(this.max,xr),Bs.subVectors(e.a,xr),Vs.subVectors(e.b,xr),Gs.subVectors(e.c,xr),Xi.subVectors(Vs,Bs),Yi.subVectors(Gs,Vs),hs.subVectors(Bs,Gs);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-hs.z,hs.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,hs.z,0,-hs.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-hs.y,hs.x,0];return!Jl(t,Bs,Vs,Gs,So)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,Bs,Vs,Gs,So))?!1:(bo.crossVectors(Xi,Yi),t=[bo.x,bo.y,bo.z],Jl(t,Bs,Vs,Gs,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new H,new H,new H,new H,new H,new H,new H,new H],Xn=new H,Mo=new os,Bs=new H,Vs=new H,Gs=new H,Xi=new H,Yi=new H,hs=new H,xr=new H,So=new H,bo=new H,ds=new H;function Jl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ds.fromArray(n,r);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=i.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xt=new H,Eo=new Te;let Jm=0;class kn extends zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mf,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class gu extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _u extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Zm=new os,yr=new H,Zl=new H;class as{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Zl)),this.expandByPoint(yr.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Km=0;const Rn=new xt,Kl=new Ht,Hs=new H,En=new os,Mr=new os,Qt=new H;class Wt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ym(e)?_u:gu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(En.min,Mr.min),En.expandByPoint(Qt),Qt.addVectors(En.max,Mr.max),En.expandByPoint(Qt)):(En.expandByPoint(Mr.min),En.expandByPoint(Mr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Qt.add(Hs)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new kn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new H,l[v]=new H;const c=new H,u=new H,g=new H,h=new Te,d=new Te,p=new Te,_=new H,m=new H;function f(v,P,C){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,P),g.fromBufferAttribute(i,C),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,C),u.sub(c),g.sub(c),d.sub(h),p.sub(h);const O=1/(d.x*p.y-p.x*d.y);isFinite(O)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(g,-d.y).multiplyScalar(O),m.copy(g).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(O),a[v].add(_),a[P].add(_),a[C].add(_),l[v].add(m),l[P].add(m),l[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,P=M.length;v<P;++v){const C=M[v],O=C.start,U=C.count;for(let V=O,z=O+U;V<z;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new H,x=new H,b=new H,S=new H;function T(v){b.fromBufferAttribute(s,v),S.copy(b);const P=a[v];w.copy(P),w.sub(b.multiplyScalar(b.dot(P))).normalize(),x.crossVectors(S,P);const O=x.dot(l[v])<0?-1:1;o.setXYZW(v,w.x,w.y,w.z,O)}for(let v=0,P=M.length;v<P;++v){const C=M[v],O=C.start,U=C.count;for(let V=O,z=O+U;V<z;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,g=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,g=a.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let f=0;f<u;f++)h[p++]=c[d++]}return new kn(h,u,g)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,g=c.length;u<g;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let g=0,h=c.length;g<h;g++){const d=c[g];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],g=r[c];for(let h=0,d=g.length;h<d;h++)u.push(g[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const g=o[c];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new H,Qm=new H,jm=new it;class ui{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ql.subVectors(i,t).cross(Qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jm.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let e0=0;class ls extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=tr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=jc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ui().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new H,jl=new H,wo=new H,To=new H;class fr{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){jl.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),To.copy(this.origin).sub(jl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=To.dot(this.direction),l=-To.dot(wo),c=To.lengthSq(),u=Math.abs(1-o*o);let g,h,d,p;if(u>0)if(g=o*l-a,h=o*a-l,p=r*u,g>=0)if(h>=-p)if(h<=p){const _=1/u;g*=_,h*=_,d=g*(g+o*h+2*a)+h*(o*g+h+2*l)+c}else h=r,g=Math.max(0,-(o*h+a)),d=-g*g+h*(h+2*l)+c;else h=-r,g=Math.max(0,-(o*h+a)),d=-g*g+h*(h+2*l)+c;else h<=-p?(g=Math.max(0,-(-o*r+a)),h=g>0?-r:Math.min(Math.max(-r,-l),r),d=-g*g+h*(h+2*l)+c):h<=p?(g=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(g=Math.max(0,-(o*r+a)),h=g>0?r:Math.min(Math.max(-r,-l),r),d=-g*g+h*(h+2*l)+c);else h=o>0?-r:r,g=Math.max(0,-(o*h+a)),d=-g*g+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(jl).addScaledVector(wo,h),d}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-h.z)*g,l=(e.max.z-h.z)*g):(a=(e.max.z-h.z)*g,l=(e.min.z-h.z)*g),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,g=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,f=i.x-o.x,M=i.y-o.y,w=i.z-o.z,x=Math.abs(l),b=Math.abs(c),S=Math.abs(u);let T,v,P,C,O,U,V,z,I,F,B,J;if(x>=b&&x>=S?(P=l,U=g,I=p,J=f,l>=0?(T=c,v=u,C=h,O=d,V=_,z=m,F=M,B=w):(T=u,v=c,C=d,O=h,V=m,z=_,F=w,B=M)):b>=S?(P=c,U=h,I=_,J=M,c>=0?(T=u,v=l,C=d,O=g,V=m,z=p,F=w,B=f):(T=l,v=u,C=g,O=d,V=p,z=m,F=f,B=w)):(P=u,U=d,I=m,J=w,u>=0?(T=l,v=c,C=g,O=h,V=p,z=_,F=f,B=M):(T=c,v=l,C=h,O=g,V=_,z=p,F=M,B=f)),P===0)return null;const Y=T/P,W=v/P,ne=1/P,j=C-Y*U,ue=O-W*U,ee=V-Y*I,ae=z-W*I,N=F-Y*J,y=B-W*J,L=N*ae-y*ee,Z=j*y-ue*N,K=ee*ue-ae*j;if(s){if(L<0||Z<0||K<0)return null}else if((L<0||Z<0||K<0)&&(L>0||Z>0||K>0))return null;const A=L+Z+K;if(A===0)return null;const R=ne*(L*U+Z*I+K*J);return(A>0?R<0:R>0)?null:this.at(R/A,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class so extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nh=new xt,fs=new fr,Ao=new as,Uh=new H,Co=new H,Ro=new H,Po=new H,ec=new H,Lo=new H,Oh=new H,Io=new H;class _n extends Ht{constructor(e=new Wt,t=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],g=r[l];u!==0&&(ec.fromBufferAttribute(g,e),o?Lo.addScaledVector(ec,u):Lo.addScaledVector(ec.sub(t),u))}t.add(Lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Ao.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ao,Uh)===null||fs.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],f=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=w;x<b;x+=3){const S=a.getX(x),T=a.getX(x+1),v=a.getX(x+2);s=Do(this,f,e,i,c,u,g,S,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,f=_;m<f;m+=3){const M=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);s=Do(this,o,e,i,c,u,g,M,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],f=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=w;x<b;x+=3){const S=x,T=x+1,v=x+2;s=Do(this,f,e,i,c,u,g,S,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,f=_;m<f;m+=3){const M=m,w=m+1,x=m+2;s=Do(this,o,e,i,c,u,g,M,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function t0(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;Io.copy(a),Io.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:n}}function Do(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Ro),n.getVertexPosition(c,Po);const u=t0(n,e,t,i,Co,Ro,Po,Oh);if(u){const g=new H;Nn.getBarycoord(Oh,Co,Ro,Po,g),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,g,new Te)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,g,new Te)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,g,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Nn.getNormal(Co,Ro,Po,h.normal),u.face=h,u.barycoord=g}return u}class vu extends sn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,u=jt,g,h){super(null,o,a,l,c,u,s,r,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends kn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new xt,Fh=new xt,No=[],zh=new os,n0=new xt,Sr=new _n,br=new as;class Rc extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,n0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new os),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),zh.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(zh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ws),br.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),Fh.multiplyMatrices(i,Ws),Sr.matrixWorld=Fh,Sr.raycast(e,No);for(let o=0,a=No.length;o<a;o++){const l=No[o];l.instanceId=r,l.object=this,t.push(l)}No.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vu(new Float32Array(s*this.count),s,this.count,rl,On));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ps=new as,i0=new Te(.5,.5),Uo=new H;class pl{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],g=r[5],h=r[6],d=r[7],p=r[8],_=r[9],m=r[10],f=r[11],M=r[12],w=r[13],x=r[14],b=r[15];if(s[0].setComponents(c-o,d-u,f-p,b-M).normalize(),s[1].setComponents(c+o,d+u,f+p,b+M).normalize(),s[2].setComponents(c+a,d+g,f+_,b+w).normalize(),s[3].setComponents(c-a,d-g,f-_,b-w).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,f-m,b-x).normalize();else if(s[4].setComponents(c-l,d-h,f-m,b-x).normalize(),t===Kn)s[5].setComponents(c+l,d+h,f+m,b+x).normalize();else if(t===lr)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=i0.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xu extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xa=new H,Ya=new H,kh=new xt,Er=new fr,Oo=new as,tc=new H,Bh=new H;class s0 extends Ht{constructor(e=new Wt,t=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Xa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Xa.distanceTo(Ya);e.setAttribute("lineDistance",new bt(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;kh.copy(s).invert(),Er.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const f=u.getX(_),M=u.getX(_+1),w=Fo(this,e,Er,l,f,M,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(d),f=Fo(this,e,Er,l,_,m,p-1);f&&t.push(f)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const f=Fo(this,e,Er,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Fo(this,e,Er,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Xa.fromBufferAttribute(a,s),Ya.fromBufferAttribute(a,r),t.distanceSqToSegment(Xa,Ya,tc,Bh)>i)return;tc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(tc);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class yu extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vh=new xt,Pc=new fr,zo=new as,ko=new H;class Rf extends Ht{constructor(e=new Wt,t=new yu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;Vh.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(Vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,g=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,_=d;p<_;p++){const m=c.getX(p);ko.fromBufferAttribute(g,m),Gh(ko,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(g.count,o.start+o.count);for(let p=h,_=d;p<_;p++)ko.fromBufferAttribute(g,p),Gh(ko,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(n,e,t,i,s,r,o){const a=Pc.distanceSqToPoint(n);if(a<t){const l=new H;Pc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mu extends sn{constructor(e=[],t=is,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Su extends sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends sn{constructor(e,t,i=ti,s,r,o,a=jt,l=jt,c,u=vi,g=1){if(u!==vi&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:g};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Pf extends cr{constructor(e,t=ti,i=is,s,r,o=jt,a=jt,l,c=vi){const u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bu extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],g=[];let h=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(g,2));function p(_,m,f,M,w,x,b,S,T,v,P){const C=x/T,O=b/v,U=x/2,V=b/2,z=S/2,I=T+1,F=v+1;let B=0,J=0;const Y=new H;for(let W=0;W<F;W++){const ne=W*O-V;for(let j=0;j<I;j++){const ue=j*C-U;Y[_]=ue*M,Y[m]=ne*w,Y[f]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),g.push(j/T),g.push(1-W/v),B+=1}}for(let W=0;W<v;W++)for(let ne=0;ne<T;ne++){const j=h+ne+I*W,ue=h+ne+I*(W+1),ee=h+(ne+1)+I*(W+1),ae=h+(ne+1)+I*W;l.push(j,ue,ae),l.push(ue,ee,ae),J+=6}a.addGroup(d,J,P),d+=J,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ml extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new H,u=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let g=0,h=3;g<=t;g++,h+=3){const d=i+g/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ro extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],g=[],h=[],d=[];let p=0;const _=[],m=i/2;let f=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function M(){const x=new H,b=new H;let S=0;const T=(t-e)/i;for(let v=0;v<=r;v++){const P=[],C=v/r,O=C*(t-e)+e;for(let U=0;U<=s;U++){const V=U/s,z=V*l+a,I=Math.sin(z),F=Math.cos(z);b.x=O*I,b.y=-C*i+m,b.z=O*F,g.push(b.x,b.y,b.z),x.set(I,T,F).normalize(),h.push(x.x,x.y,x.z),d.push(V,1-C),P.push(p++)}_.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){const C=_[P][v],O=_[P+1][v],U=_[P+1][v+1],V=_[P][v+1];(e>0||P!==0)&&(u.push(C,O,V),S+=3),(t>0||P!==r-1)&&(u.push(O,U,V),S+=3)}c.addGroup(f,S,0),f+=S}function w(x){const b=p,S=new Te,T=new H;let v=0;const P=x===!0?e:t,C=x===!0?1:-1;for(let U=1;U<=s;U++)g.push(0,m*C,0),h.push(0,C,0),d.push(.5,.5),p++;const O=p;for(let U=0;U<=s;U++){const z=U/s*l+a,I=Math.cos(z),F=Math.sin(z);T.x=P*F,T.y=m*C,T.z=P*I,g.push(T.x,T.y,T.z),h.push(0,C,0),S.x=I*.5+.5,S.y=F*.5*C+.5,d.push(S.x,S.y),p++}for(let U=0;U<s;U++){const V=b+U,z=O+U;x===!0?u.push(z,z+1,V):u.push(z+1,z,V),v+=3}c.addGroup(f,v,x===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends ro{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Rs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gl extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new H,x=new H,b=new H;for(let S=0;S<t.length;S+=3)d(t[S+0],w),d(t[S+1],x),d(t[S+2],b),l(w,x,b,M)}function l(M,w,x,b){const S=b+1,T=[];for(let v=0;v<=S;v++){T[v]=[];const P=M.clone().lerp(x,v/S),C=w.clone().lerp(x,v/S),O=S-v;for(let U=0;U<=O;U++)U===0&&v===S?T[v][U]=P:T[v][U]=P.clone().lerp(C,U/O)}for(let v=0;v<S;v++)for(let P=0;P<2*(S-v)-1;P++){const C=Math.floor(P/2);P%2===0?(h(T[v][C+1]),h(T[v+1][C]),h(T[v][C])):(h(T[v][C+1]),h(T[v+1][C+1]),h(T[v+1][C]))}}function c(M){const w=new H;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(M),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function u(){const M=new H;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const x=m(M)/2/Math.PI+.5,b=f(M)/Math.PI+.5;o.push(x,1-b)}p(),g()}function g(){for(let M=0;M<o.length;M+=6){const w=o[M+0],x=o[M+2],b=o[M+4],S=Math.max(w,x,b),T=Math.min(w,x,b);S>.9&&T<.1&&(w<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,w){const x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function p(){const M=new H,w=new H,x=new H,b=new H,S=new Te,T=new Te,v=new Te;for(let P=0,C=0;P<r.length;P+=9,C+=6){M.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),x.set(r[P+6],r[P+7],r[P+8]),S.set(o[C+0],o[C+1]),T.set(o[C+2],o[C+3]),v.set(o[C+4],o[C+5]),b.copy(M).add(w).add(x).divideScalar(3);const O=m(b);_(S,C+0,M,O),_(T,C+2,w,O),_(v,C+4,x,O)}}function _(M,w,x,b){b<0&&M.x===1&&(o[w]=M.x-1),x.x===0&&x.z===0&&(o[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.vertices,e.indices,e.radius,e.detail)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Te:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,s=[],r=[],o=[],a=new H,l=new xt;for(let d=0;d<=e;d++){const p=d/e;s[d]=this.getTangentAt(p,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),g=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),g<=c&&(c=g,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ut(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ut(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _l extends ii{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*g+this.aX,c=h*g+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lf extends _l{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Eu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,g){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+g)+(l-a)/g;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Hh=new H,Wh=new H,nc=new Eu,ic=new Eu,sc=new Eu;class wu extends ii{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Wh.subVectors(s[0],s[1]).add(s[0]),c=Wh);const g=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Hh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(g),d),_=Math.pow(g.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),nc.initNonuniformCatmullRom(c.x,g.x,h.x,u.x,p,_,m),ic.initNonuniformCatmullRom(c.y,g.y,h.y,u.y,p,_,m),sc.initNonuniformCatmullRom(c.z,g.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,g.x,h.x,u.x,this.tension),ic.initCatmullRom(c.y,g.y,h.y,u.y,this.tension),sc.initCatmullRom(c.z,g.z,h.z,u.z,this.tension));return i.set(nc.calc(l),ic.calc(l),sc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function r0(n,e){const t=1-n;return t*t*e}function o0(n,e){return 2*(1-n)*n*e}function a0(n,e){return n*n*e}function Hr(n,e,t,i){return r0(n,e)+o0(n,t)+a0(n,i)}function l0(n,e){const t=1-n;return t*t*t*e}function c0(n,e){const t=1-n;return 3*t*t*n*e}function u0(n,e){return 3*(1-n)*n*n*e}function h0(n,e){return n*n*n*e}function Wr(n,e,t,i,s){return l0(n,e)+c0(n,t)+u0(n,i)+h0(n,s)}class Tu extends ii{constructor(e=new Te,t=new Te,i=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(e,s.x,r.x,o.x,a.x),Wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class If extends ii{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(e,s.x,r.x,o.x,a.x),Wr(e,s.y,r.y,o.y,a.y),Wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Au extends ii{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Df extends ii{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cu extends ii{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ru extends ii{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y),Hr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pu extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set(qh(a,l.x,c.x,u.x,g.x),qh(a,l.y,c.y,u.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Te().fromArray(s))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:wu,CubicBezierCurve:Tu,CubicBezierCurve3:If,EllipseCurve:_l,LineCurve:Au,LineCurve3:Df,QuadraticBezierCurve:Cu,QuadraticBezierCurve3:Ru,SplineCurve:Pu});class Nf extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new $a[s.type]().fromJSON(s))}return this}}class Lc extends Nf{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Au(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Cu(this.currentPoint.clone(),new Te(e,t),new Te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Tu(this.currentPoint.clone(),new Te(e,t),new Te(i,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Pu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new _l(e,t,i,s,r,o,a,l);if(this.curves.length>0){const g=c.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class oo extends Lc{constructor(e){super(e),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Lc().fromJSON(s))}return this}}function d0(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Uf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=_0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,g=l;for(let h=t;h<s;h+=t){const d=n[h],p=n[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>g&&(g=p)}c=Math.max(u-a,g-l),c=c!==0?32767/c:0}return Kr(r,o,t,a,l,c,0),o}function Uf(n,e,t,i,s){let r;if(s===C0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Xh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Xh(o/i|0,n[o],n[o+1],r);return r&&ur(r,r.next)&&(jr(r),r=r.next),r}function As(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ur(t,t.next)||zt(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&S0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?p0(n,i,s,r):f0(n)){e.push(l.i,n.i,c.i),jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=m0(As(n),e),Kr(n,e,t,i,s,r,2)):o===2&&g0(n,e,t,i,s,r):Kr(As(n),e,t,i,s,r,1);break}}}function f0(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),g=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=g&&p.y<=d&&Lr(s,a,r,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function p0(n,e,t,i){const s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,g=r.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,g,h),_=Math.max(a,l,c),m=Math.max(u,g,h),f=Ic(d,p,e,t,i),M=Ic(_,m,e,t,i);let w=n.prevZ,x=n.nextZ;for(;w&&w.z>=f&&x&&x.z<=M;){if(w.x>=d&&w.x<=_&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Lr(a,u,l,g,c,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Lr(a,u,l,g,c,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=f;){if(w.x>=d&&w.x<=_&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Lr(a,u,l,g,c,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Lr(a,u,l,g,c,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function m0(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ur(i,s)&&Ff(i,t,t.next,s)&&Qr(i,s)&&Qr(s,i)&&(e.push(i.i,t.i,s.i),jr(t),jr(t.next),t=n=s),t=t.next}while(t!==n);return As(t)}function g0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&w0(o,a)){let l=zf(o,a);o=As(o,o.next),l=As(l,l.next),Kr(o,e,t,i,s,r,0),Kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _0(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Uf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(E0(c))}s.sort(v0);for(let r=0;r<s.length;r++)t=x0(s[r],t);return t}function v0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function x0(n,e){const t=y0(n,e);if(!t)return e;const i=zf(t,n);return As(i,i.next),As(t,t.next)}function y0(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ur(n,t))return t;do{if(ur(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=i&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Of(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const g=Math.abs(s-t.y)/(i-t.x);Qr(t,n)&&(g<u||g===u&&(t.x>o.x||t.x===o.x&&M0(o,t)))&&(o=t,u=g)}t=t.next}while(t!==a);return o}function M0(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function S0(n,e,t,i){let s=n;do s.z===0&&(s.z=Ic(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,b0(s)}function b0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ic(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function E0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Of(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Lr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Of(n,e,t,i,s,r,o,a)}function w0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!T0(n,e)&&(Qr(n,e)&&Qr(e,n)&&A0(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||ur(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ur(n,e){return n.x===e.x&&n.y===e.y}function Ff(n,e,t,i){const s=Vo(zt(n,e,t)),r=Vo(zt(n,e,i)),o=Vo(zt(t,i,n)),a=Vo(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Bo(n,t,e)||r===0&&Bo(n,i,e)||o===0&&Bo(t,n,i)||a===0&&Bo(t,e,i))}function Bo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vo(n){return n>0?1:n<0?-1:0}function T0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ff(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qr(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function A0(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zf(n,e){const t=Dc(n.i,n.x,n.y),i=Dc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xh(n,e,t,i){const s=Dc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Dc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class R0{static triangulate(e,t,i=2){return d0(e,t,i)}}class bs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return bs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Yh(e),$h(i,e);let o=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$h(i,t[l]);const a=R0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Yh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $h(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class pr extends Wt{constructor(e=new oo([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:P0;let w,x=!1,b,S,T,v;if(f){w=f.getSpacedPoints(u),x=!0,h=!1;const q=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(u,q),S=new H,T=new H,v=new H}h||(m=0,d=0,p=0,_=0);const P=a.extractPoints(c);let C=P.shape;const O=P.holes;if(!bs.isClockWise(C)){C=C.reverse();for(let q=0,ie=O.length;q<ie;q++){const k=O[q];bs.isClockWise(k)&&(O[q]=k.reverse())}}function V(q){const k=10000000000000001e-36;let te=q[0];for(let se=1;se<=q.length;se++){const $=se%q.length,ce=q[$],ye=ce.x-te.x,be=ce.y-te.y,Q=ye*ye+be*be,ze=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(te.x),Math.abs(te.y)),Ae=k*ze*ze;if(Q<=Ae){q.splice($,1),se--;continue}te=ce}}V(C),O.forEach(V);const z=O.length,I=C;for(let q=0;q<z;q++){const ie=O[q];C=C.concat(ie)}function F(q,ie,k){return ie||_t("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(ie,k)}const B=C.length;function J(q,ie,k){let te,se,$;const ce=q.x-ie.x,ye=q.y-ie.y,be=k.x-q.x,Q=k.y-q.y,ze=ce*ce+ye*ye,Ae=ce*Q-ye*be;if(Math.abs(Ae)>Number.EPSILON){const X=Math.sqrt(ze),E=Math.sqrt(be*be+Q*Q),le=ie.x-ye/X,he=ie.y+ce/X,pe=k.x-Q/E,Ee=k.y+be/E,Ce=((pe-le)*Q-(Ee-he)*be)/(ce*Q-ye*be);te=le+ce*Ce-q.x,se=he+ye*Ce-q.y;const _e=te*te+se*se;if(_e<=2)return new Te(te,se);$=Math.sqrt(_e/2)}else{let X=!1;ce>Number.EPSILON?be>Number.EPSILON&&(X=!0):ce<-Number.EPSILON?be<-Number.EPSILON&&(X=!0):Math.sign(ye)===Math.sign(Q)&&(X=!0),X?(te=-ye,se=ce,$=Math.sqrt(ze)):(te=ce,se=ye,$=Math.sqrt(ze/2))}return new Te(te/$,se/$)}const Y=[];for(let q=0,ie=I.length,k=ie-1,te=q+1;q<ie;q++,k++,te++)k===ie&&(k=0),te===ie&&(te=0),Y[q]=J(I[q],I[k],I[te]);const W=[];let ne,j=Y.concat();for(let q=0,ie=z;q<ie;q++){const k=O[q];ne=[];for(let te=0,se=k.length,$=se-1,ce=te+1;te<se;te++,$++,ce++)$===se&&($=0),ce===se&&(ce=0),ne[te]=J(k[te],k[$],k[ce]);W.push(ne),j=j.concat(ne)}let ue;if(m===0)ue=bs.triangulateShape(I,O);else{const q=[],ie=[];for(let k=0;k<m;k++){const te=k/m,se=d*Math.cos(te*Math.PI/2),$=p*Math.sin(te*Math.PI/2)+_;for(let ce=0,ye=I.length;ce<ye;ce++){const be=F(I[ce],Y[ce],$);Z(be.x,be.y,-se),te===0&&q.push(be)}for(let ce=0,ye=z;ce<ye;ce++){const be=O[ce];ne=W[ce];const Q=[];for(let ze=0,Ae=be.length;ze<Ae;ze++){const X=F(be[ze],ne[ze],$);Z(X.x,X.y,-se),te===0&&Q.push(X)}te===0&&ie.push(Q)}}ue=bs.triangulateShape(q,ie)}const ee=ue.length,ae=p+_;for(let q=0;q<B;q++){const ie=h?F(C[q],j[q],ae):C[q];x?(T.copy(b.normals[0]).multiplyScalar(ie.x),S.copy(b.binormals[0]).multiplyScalar(ie.y),v.copy(w[0]).add(T).add(S),Z(v.x,v.y,v.z)):Z(ie.x,ie.y,0)}for(let q=1;q<=u;q++)for(let ie=0;ie<B;ie++){const k=h?F(C[ie],j[ie],ae):C[ie];x?(T.copy(b.normals[q]).multiplyScalar(k.x),S.copy(b.binormals[q]).multiplyScalar(k.y),v.copy(w[q]).add(T).add(S),Z(v.x,v.y,v.z)):Z(k.x,k.y,g/u*q)}for(let q=m-1;q>=0;q--){const ie=q/m,k=d*Math.cos(ie*Math.PI/2),te=p*Math.sin(ie*Math.PI/2)+_;for(let se=0,$=I.length;se<$;se++){const ce=F(I[se],Y[se],te);Z(ce.x,ce.y,g+k)}for(let se=0,$=O.length;se<$;se++){const ce=O[se];ne=W[se];for(let ye=0,be=ce.length;ye<be;ye++){const Q=F(ce[ye],ne[ye],te);x?Z(Q.x,Q.y+w[u-1].y,w[u-1].x+k):Z(Q.x,Q.y,g+k)}}}N(),y();function N(){const q=s.length/3;if(h){let ie=0,k=B*ie;for(let te=0;te<ee;te++){const se=ue[te];K(se[2]+k,se[1]+k,se[0]+k)}ie=u+m*2,k=B*ie;for(let te=0;te<ee;te++){const se=ue[te];K(se[0]+k,se[1]+k,se[2]+k)}}else{for(let ie=0;ie<ee;ie++){const k=ue[ie];K(k[2],k[1],k[0])}for(let ie=0;ie<ee;ie++){const k=ue[ie];K(k[0]+B*u,k[1]+B*u,k[2]+B*u)}}i.addGroup(q,s.length/3-q,0)}function y(){const q=s.length/3;let ie=0;L(I,ie),ie+=I.length;for(let k=0,te=O.length;k<te;k++){const se=O[k];L(se,ie),ie+=se.length}i.addGroup(q,s.length/3-q,1)}function L(q,ie){let k=q.length;for(;--k>=0;){const te=k;let se=k-1;se<0&&(se=q.length-1);for(let $=0,ce=u+m*2;$<ce;$++){const ye=B*$,be=B*($+1),Q=ie+te+ye,ze=ie+se+ye,Ae=ie+se+be,X=ie+te+be;A(Q,ze,Ae,X)}}}function Z(q,ie,k){l.push(q),l.push(ie),l.push(k)}function K(q,ie,k){R(q),R(ie),R(k);const te=s.length/3,se=M.generateTopUV(i,s,te-3,te-2,te-1);G(se[0]),G(se[1]),G(se[2])}function A(q,ie,k,te){R(q),R(ie),R(te),R(ie),R(k),R(te);const se=s.length/3,$=M.generateSideWallUV(i,s,se-6,se-3,se-2,se-1);G($[0]),G($[1]),G($[3]),G($[1]),G($[2]),G($[3])}function R(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function G(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return L0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $a[s.type]().fromJSON(s)),new pr(i,e.options)}}const P0={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,l),new Te(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],g=e[i*3+2],h=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-g),new Te(h,1-p),new Te(_,1-f)]:[new Te(a,1-l),new Te(u,1-g),new Te(d,1-p),new Te(m,1-f)]}};function L0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ao extends gl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ao(e.radius,e.detail)}}class Ps extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,g=e/a,h=t/l,d=[],p=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*h-o;for(let w=0;w<c;w++){const x=w*g-r;p.push(x,-M,0),_.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const w=M+c*f,x=M+c*(f+1),b=M+1+c*(f+1),S=M+1+c*f;d.push(w,x,S),d.push(x,b,S)}this.setIndex(d),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class vl extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],g=new H,h=new H,d=[],p=[],_=[],m=[];for(let f=0;f<=i;f++){const M=[],w=f/i,x=o+w*a,b=e*Math.cos(x),S=Math.sqrt(e*e-b*b);let T=0;f===0&&o===0?T=.5/t:f===i&&l===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){const P=v/t,C=s+P*r;g.x=-S*Math.cos(C),g.y=b,g.z=S*Math.sin(C),p.push(g.x,g.y,g.z),h.copy(g).normalize(),_.push(h.x,h.y,h.z),m.push(P+T,1-w),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const w=u[f][M+1],x=u[f][M],b=u[f+1][M],S=u[f+1][M+1];(f!==0||o>0)&&d.push(w,x,S),(f!==i-1||l<Math.PI)&&d.push(x,b,S)}this.setIndex(d),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xl extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],g=[],h=new H,d=new H,p=new H;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let f=0;f<=s;f++){const M=f/s*r;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),g.push(f/s),g.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const f=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,x=(s+1)*_+m;l.push(f,M,x),l.push(M,w,x)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class yl extends Wt{constructor(e=new Ru(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new H,l=new H,c=new Te;let u=new H;const g=[],h=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function _(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),f()}function m(w){u=e.getPointAt(w/t,u);const x=o.normals[w],b=o.binormals[w];for(let S=0;S<=s;S++){const T=S/s*Math.PI*2,v=Math.sin(T),P=-Math.cos(T);l.x=P*x.x+v*b.x,l.y=P*x.y+v*b.y,l.z=P*x.z+v*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,g.push(a.x,a.y,a.z)}}function f(){for(let w=1;w<=t;w++)for(let x=1;x<=s;x++){const b=(s+1)*(w-1)+(x-1),S=(s+1)*w+(x-1),T=(s+1)*w+x,v=(s+1)*(w-1)+x;p.push(b,S,v),p.push(S,T,v)}}function M(){for(let w=0;w<=t;w++)for(let x=0;x<=s;x++)c.x=w/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new yl(new $a[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Jh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Jh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=hr(n[t]);for(const s in i)e[s]=i[s]}return e}function Jh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function I0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Bf={clone:hr,merge:fn};var D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new it().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vf extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ks extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gf extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class U0 extends xu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ml extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Wf extends Ml{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rc=new xt,Zh=new H,Kh=new H;class Lu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===lr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Go=new H,Ho=new Oi,ai=new H;class Iu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Ho,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Go,Ho,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Ho,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new H,Qh=new Te,jh=new Te;class wn extends Iu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Qh,jh),t.subVectors(jh,Qh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class O0 extends Lu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Sl extends Ml{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new O0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class lo extends Iu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class F0 extends Lu{constructor(){super(new lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new F0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qs=-90,Xs=1;class qf extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(qs,Xs,e,t);s.layers=this.layers,this.add(s);const r=new wn(qs,Xs,e,t);r.layers=this.layers,this.add(r);const o=new wn(qs,Xs,e,t);o.layers=this.layers,this.add(o);const a=new wn(qs,Xs,e,t);a.layers=this.layers,this.add(a);const l=new wn(qs,Xs,e,t);l.layers=this.layers,this.add(l);const c=new wn(qs,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,h,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Xf extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ed=new xt;class Yf{constructor(e,t,i=0,s=1/0){this.ray=new fr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ed),this}intersectObject(e,t=!0,i=[]){return Nc(e,this,i,t),i.sort(td),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nc(e[s],this,i,t);return i.sort(td),i}}function td(n,e){return n.distance-e.distance}function Nc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],e,t,!0)}}class Uc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nh=class nh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};nh.prototype.isMatrix2=!0;let Oc=nh;class $f extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nd(n,e,t,i){const s=z0(i);switch(t){case du:return n*e;case rl:return n*e/s.components*s.byteLength;case ol:return n*e/s.components*s.byteLength;case ss:return n*e*2/s.components*s.byteLength;case al:return n*e*2/s.components*s.byteLength;case fu:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case ll:return n*e*4/s.components*s.byteLength;case Fr:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kr:case Br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ma:case _a:return Math.max(n,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(n,8)*Math.max(e,8)/2;case va:case xa:case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case Xr:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case za:case ka:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Va:case Ga:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yr:case Ha:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z0(n){switch(n){case yn:case lu:return{byteLength:1,components:1};case or:case cu:case ni:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case ti:case nl:case On:return{byteLength:4,components:1};case uu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function k0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,g=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,l,c){const u=l.array,g=l.updateRanges;if(n.bindBuffer(c,a),g.length===0)n.bufferSubData(c,0,u);else{g.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<g.length;d++){const p=g[h],_=g[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,g[h]=_)}g.length=h+1;for(let d=0,p=g.length;d<p;d++){const _=g[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j0=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cg=`#define PI 3.141592653589793
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
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hg=`vec3 transformedNormal = objectNormal;
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
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",_g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
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
#endif`,zg=`uniform sampler2D dfgLUT;
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
}`,kg=`
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
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
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w_=`float getShadowMask() {
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
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
}`,$_=`#define DISTANCE
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
}`,J_=`#define DISTANCE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
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
}`,j_=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 diffuse;
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define MATCAP
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
}`,rv=`#define MATCAP
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
}`,ov=`#define NORMAL
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
}`,av=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,cv=`#define PHONG
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
}`,uv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
}`,dv=`#define TOON
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
}`,fv=`#define TOON
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,_v=`uniform vec3 color;
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
}`,vv=`uniform float rotation;
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
}`,xv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:B0,alphahash_pars_fragment:V0,alphamap_fragment:G0,alphamap_pars_fragment:H0,alphatest_fragment:W0,alphatest_pars_fragment:q0,aomap_fragment:X0,aomap_pars_fragment:Y0,batching_pars_vertex:$0,batching_vertex:J0,begin_vertex:Z0,beginnormal_vertex:K0,bsdfs:Q0,iridescence_fragment:j0,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:og,color_pars_vertex:ag,color_vertex:lg,common:cg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:hg,displacementmap_pars_vertex:dg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:_g,envmap_fragment:vg,envmap_common_pars_fragment:xg,envmap_pars_fragment:yg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Ig,envmap_vertex:Sg,fog_vertex:bg,fog_pars_vertex:Eg,fog_fragment:wg,fog_pars_fragment:Tg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Cg,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Pg,lights_pars_begin:Lg,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ng,lights_phong_fragment:Ug,lights_phong_pars_fragment:Og,lights_physical_fragment:Fg,lights_physical_pars_fragment:zg,lights_fragment_begin:kg,lights_fragment_maps:Bg,lights_fragment_end:Vg,lightprobes_pars_fragment:Gg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Xg,map_fragment:Yg,map_pars_fragment:$g,map_particle_fragment:Jg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:jg,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:s_,normal_fragment_maps:r_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:f_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:__,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:b_,shadowmap_vertex:E_,shadowmask_pars_fragment:w_,skinbase_vertex:T_,skinning_pars_vertex:A_,skinning_vertex:C_,skinnormal_vertex:R_,specularmap_fragment:P_,specularmap_pars_fragment:L_,tonemapping_fragment:I_,tonemapping_pars_fragment:D_,transmission_fragment:N_,transmission_pars_fragment:U_,uv_pars_fragment:O_,uv_pars_vertex:F_,uv_vertex:z_,worldpos_vertex:k_,background_vert:B_,background_frag:V_,backgroundCube_vert:G_,backgroundCube_frag:H_,cube_vert:W_,cube_frag:q_,depth_vert:X_,depth_frag:Y_,distance_vert:$_,distance_frag:J_,equirect_vert:Z_,equirect_frag:K_,linedashed_vert:Q_,linedashed_frag:j_,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:uv,meshphysical_frag:hv,meshtoon_vert:dv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:_v,sprite_vert:vv,sprite_frag:xv},De={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Jn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Jn.physical={uniforms:fn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Wo={r:0,b:0,g:0},yv=new xt,Zf=new it;Zf.set(-1,0,0,0,1,0,0,0,1);function Mv(n,e,t,i,s,r){const o=new ht(0);let a=s===!0?0:1,l,c,u=null,g=0,h=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const x=M.backgroundBlurriness>0;w=e.get(w,x)}return w}function p(M){let w=!1;const x=d(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,w){const x=d(w);x&&(x.isCubeTexture||x.mapping===io)?(c===void 0&&(c=new _n(new ki(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:hr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zf),c.material.toneMapped=gt.getTransfer(x.colorSpace)!==Tt,(u!==x||g!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,g=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _n(new Ps(2,2),new Vn({name:"BackgroundMaterial",uniforms:hr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=gt.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||g!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,g=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Wo,kf(n)),t.buffers.color.setClear(Wo.r,Wo.g,Wo.b,w,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:f}}function Sv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(O,U,V,z,I){let F=!1;const B=g(O,z,V,U);r!==B&&(r=B,c(r.object)),F=d(O,z,V,I),F&&p(O,z,V,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(O,U,V,z),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function g(O,U,V,z){const I=z.wireframe===!0;let F=i[U.id];F===void 0&&(F={},i[U.id]=F);const B=O.isInstancedMesh===!0?O.id:0;let J=F[B];J===void 0&&(J={},F[B]=J);let Y=J[V.id];Y===void 0&&(Y={},J[V.id]=Y);let W=Y[I];return W===void 0&&(W=h(l()),Y[I]=W),W}function h(O){const U=[],V=[],z=[];for(let I=0;I<t;I++)U[I]=0,V[I]=0,z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:z,object:O,attributes:{},index:null}}function d(O,U,V,z){const I=r.attributes,F=U.attributes;let B=0;const J=V.getAttributes();for(const Y in J)if(J[Y].location>=0){const ne=I[Y];let j=F[Y];if(j===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),ne===void 0||ne.attribute!==j||j&&ne.data!==j.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function p(O,U,V,z){const I={},F=U.attributes;let B=0;const J=V.getAttributes();for(const Y in J)if(J[Y].location>=0){let ne=F[Y];ne===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const j={};j.attribute=ne,ne&&ne.data&&(j.data=ne.data),I[Y]=j,B++}r.attributes=I,r.attributesNum=B,r.index=z}function _(){const O=r.newAttributes;for(let U=0,V=O.length;U<V;U++)O[U]=0}function m(O){f(O,0)}function f(O,U){const V=r.newAttributes,z=r.enabledAttributes,I=r.attributeDivisors;V[O]=1,z[O]===0&&(n.enableVertexAttribArray(O),z[O]=1),I[O]!==U&&(n.vertexAttribDivisor(O,U),I[O]=U)}function M(){const O=r.newAttributes,U=r.enabledAttributes;for(let V=0,z=U.length;V<z;V++)U[V]!==O[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function w(O,U,V,z,I,F,B){B===!0?n.vertexAttribIPointer(O,U,V,I,F):n.vertexAttribPointer(O,U,V,z,I,F)}function x(O,U,V,z){_();const I=z.attributes,F=V.getAttributes(),B=U.defaultAttributeValues;for(const J in F){const Y=F[J];if(Y.location>=0){let W=I[J];if(W===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){const ne=W.normalized,j=W.itemSize,ue=e.get(W);if(ue===void 0)continue;const ee=ue.buffer,ae=ue.type,N=ue.bytesPerElement,y=ae===n.INT||ae===n.UNSIGNED_INT||W.gpuType===nl;if(W.isInterleavedBufferAttribute){const L=W.data,Z=L.stride,K=W.offset;if(L.isInstancedInterleavedBuffer){for(let A=0;A<Y.locationSize;A++)f(Y.location+A,L.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let A=0;A<Y.locationSize;A++)m(Y.location+A);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let A=0;A<Y.locationSize;A++)w(Y.location+A,j/Y.locationSize,ae,ne,Z*N,(K+j/Y.locationSize*A)*N,y)}else{if(W.isInstancedBufferAttribute){for(let L=0;L<Y.locationSize;L++)f(Y.location+L,W.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let L=0;L<Y.locationSize;L++)m(Y.location+L);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let L=0;L<Y.locationSize;L++)w(Y.location+L,j/Y.locationSize,ae,ne,j*N,j/Y.locationSize*L*N,y)}}else if(B!==void 0){const ne=B[J];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}M()}function b(){P();for(const O in i){const U=i[O];for(const V in U){const z=U[V];for(const I in z){const F=z[I];for(const B in F)u(F[B].object),delete F[B];delete z[I]}}delete i[O]}}function S(O){if(i[O.id]===void 0)return;const U=i[O.id];for(const V in U){const z=U[V];for(const I in z){const F=z[I];for(const B in F)u(F[B].object),delete F[B];delete z[I]}}delete i[O.id]}function T(O){for(const U in i){const V=i[U];for(const z in V){const I=V[z];if(I[O.id]===void 0)continue;const F=I[O.id];for(const B in F)u(F[B].object),delete F[B];delete I[O.id]}}}function v(O){for(const U in i){const V=i[U],z=O.isInstancedMesh===!0?O.id:0,I=V[z];if(I!==void 0){for(const F in I){const B=I[F];for(const J in B)u(B[J].object),delete B[J];delete I[F]}delete V[z],Object.keys(V).length===0&&delete i[U]}}}function P(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function bv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ev(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Fn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const v=T===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&T!==On&&!v&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const g=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:b,samples:S}}function wv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ui,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){const d=g.length!==0||h||i!==0||s;return s=h,i=g.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,h){t=u(g,h,0)},this.setState=function(g,h,d){const p=g.clippingPlanes,_=g.clipIntersection,m=g.clipShadows,f=n.get(g);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,w=M*4;let x=f.clippingState||null;l.value=x,x=u(p,h,w,d);for(let b=0;b!==w;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(g,h,d,p){const _=g!==null?g.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const f=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,x=d;w!==_;++w,x+=4)o.copy(g[w]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Qs=4,Tv=6,Av=20,Cv=256,wr=new lo,id=new ht;let oc=null,ac=0,lc=0,cc=!1;const Rv=new H,ms=new H;class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Rv}=r;oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ni,format:Fn,colorSpace:$r,depthBuffer:!1},s=sd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pv(r)),this._blurMaterial=Iv(r,e,t),this._ggxMaterial=Lv(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Wt,e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,i,s,r){const l=new wn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,h=g.autoClear,d=g.toneMapping;g.getClearColor(id),g.toneMapping=Qn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new ki,new so({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(id),f=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const b=this._cubeSize;Ys(s,x*b,w>2?b:0,b,b),g.setRenderTarget(s),f&&g.render(_,l),g.render(e,l)}g.toneMapping=d,g.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===is||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),g=Math.sqrt(c*c-u*u),h=c*1.25,d=g*h,{_lodMax:p}=this,_=this._sizeLods[i],m=3*_*(i>p-Qs?i-p+Qs:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Ys(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(a,wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ys(e,m,f,3*_,2*_),s.setRenderTarget(e),s.render(a,wr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],g=3*u*(s>this._lodMax-Qs?s-this._lodMax+Qs:0),h=4*(this._cubeSize-u);Ys(t,g,h,3*u,2*u),o.setRenderTarget(t),o.render(l,wr)}}function Pv(n){const e=[],t=[];let i=n;const s=n-Qs+1+Tv;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],g=6,h=6,d=3,p=new Float32Array(d*h*g),_=new Float32Array(d*h*g);for(let f=0;f<g;f++){const M=f%3*2/3-1,w=f>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(x,d*h*f);for(let b=0;b<h;b++){const S=u[b*2]*2-1,T=u[b*2+1]*2-1;f===0?ms.set(1,T,S):f===1?ms.set(-S,1,-T):f===2?ms.set(-S,T,1):f===3?ms.set(-1,T,-S):f===4?ms.set(-S,-1,T):ms.set(S,T,-1),ms.toArray(_,(f*h+b)*d)}}const m=new Wt;m.setAttribute("position",new kn(p,d)),m.setAttribute("outputDirection",new kn(_,d)),t.push(new _n(m,null)),i>Qs&&i--}return{lodMeshes:t,sizeLods:e}}function sd(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Lv(n,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Iv(n,e,t){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function rd(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function od(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nu extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:mi});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=tn),new qf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Dv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===$o||d===Jo)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new Nu(p.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,p=d===$o||d===Jo,_=d===is||d===Ts;if(p||_){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Fc(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Fc(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===$o?h.mapping=is:d===Jo&&(h.mapping=Ts),h}function l(h){let d=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function Nv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Es("WebGLRenderer: "+i+" extension not supported."),s}}}function Uv(n,e,t,i){const s={},r=new WeakMap;function o(g){const h=g.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(g,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(g){const h=g.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(g){const h=[],d=g.index,p=g.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const M=d.array;_=d.version;for(let w=0,x=M.length;w<x;w+=3){const b=M[w+0],S=M[w+1],T=M[w+2];h.push(b,S,S,T,T,b)}}else{const M=p.array;_=p.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const b=w+0,S=w+1,T=w+2;h.push(b,S,S,T,T,b)}}const m=new(p.count>=65535?_u:gu)(h,1);m.version=_;const f=r.get(g);f&&e.remove(f),r.set(g,m)}function u(g){const h=r.get(g);if(h){const d=g.index;d!==null&&h.version<d.version&&c(g)}else c(g);return r.get(g)}return{get:a,update:l,getWireframeAttribute:u}}function Ov(n,e,t){let i;function s(g){i=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function l(g,h){n.drawElements(i,h,r,g*o),t.update(h,i,1)}function c(g,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,g*o,d),t.update(h,i,d))}function u(g,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,g,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Fv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function zv(n,e,t){const i=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==g){let C=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",C)};var d=C;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*S*4*g),v=new mu(T,b,S,g);v.type=On,v.needsUpdate=!0;const P=x*4;for(let O=0;O<g;O++){const U=f[O],V=M[O],z=w[O],I=b*S*4*O;for(let F=0;F<U.count;F++){const B=F*P;p===!0&&(s.fromBufferAttribute(U,F),T[I+B+0]=s.x,T[I+B+1]=s.y,T[I+B+2]=s.z,T[I+B+3]=0),_===!0&&(s.fromBufferAttribute(V,F),T[I+B+4]=s.x,T[I+B+5]=s.y,T[I+B+6]=s.z,T[I+B+7]=0),m===!0&&(s.fromBufferAttribute(z,F),T[I+B+8]=s.x,T[I+B+9]=s.y,T[I+B+10]=s.z,T[I+B+11]=z.itemSize===4?s.w:1)}}h={count:g,texture:v,size:new Te(b,S)},i.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function kv(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,g=c.geometry,h=e.get(c,g);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Bv={[tu]:"LINEAR_TONE_MAPPING",[nu]:"REINHARD_TONE_MAPPING",[iu]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[ru]:"AGX_TONE_MAPPING",[ou]:"NEUTRAL_TONE_MAPPING",[su]:"CUSTOM_TONE_MAPPING"};function Vv(n,e,t,i,s,r){const o=new zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Wt;c.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bt([0,2,0,0,2,0],2));const u=new Vf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new _n(c,u),h=new lo(-1,1,1,-1,0,1);let d=null,p=null,_=!1,m,f=null,M=[],w=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let S=0;S<M.length;S++){const T=M[S];T.setSize&&T.setSize(x,b)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;const b=o.width,S=o.height;M.length>0&&a===null&&(a=new zn(b,S,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new zn(b,S,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const v=M[T];v.setSize&&v.setSize(b,S)}},this.begin=function(x,b){if(_||x.toneMapping===Qn&&M.length===0)return!1;if(f=b,b!==null){const S=b.width,T=b.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return w===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return w},this.end=function(x,b){x.toneMapping=m,_=!0;let S=o,T=a;for(let v=0;v<M.length;v++){const P=M[v];P.enabled!==!1&&(P.render(x,T,S,b),P.needsSwap!==!1&&(S=T,T=T===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,u.defines={},gt.getTransfer(d)===Tt&&(u.defines.SRGB_TRANSFER="");const v=Bv[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(f),x.render(g,h),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Kf=new sn,zc=new cr(1,1),Qf=new mu,jf=new Tf,ep=new Mu,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),hd=new Float32Array(4);function mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function Xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;hd.set(i),n.uniformMatrix2fv(this.addr,!1,hd),Zt(t,i)}}function Yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),Zt(t,i)}}function $v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),Zt(t,i)}}function Jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function e1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function i1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zc.compareFunction=t.isReversedDepthBuffer()?ul:cl,r=zc):r=Kf,t.setTexture2D(e||r,s)}function s1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jf,s)}function r1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ep,s)}function o1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qf,s)}function a1(n){switch(n){case 5126:return Gv;case 35664:return Hv;case 35665:return Wv;case 35666:return qv;case 35674:return Xv;case 35675:return Yv;case 35676:return $v;case 5124:case 35670:return Jv;case 35667:case 35671:return Zv;case 35668:case 35672:return Kv;case 35669:case 35673:return Qv;case 5125:return jv;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}function l1(n,e){n.uniform1fv(this.addr,e)}function c1(n,e){const t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function u1(n,e){const t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function h1(n,e){const t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function d1(n,e){const t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function f1(n,e){const t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function p1(n,e){const t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function m1(n,e){n.uniform1iv(this.addr,e)}function g1(n,e){n.uniform2iv(this.addr,e)}function _1(n,e){n.uniform3iv(this.addr,e)}function v1(n,e){n.uniform4iv(this.addr,e)}function x1(n,e){n.uniform1uiv(this.addr,e)}function y1(n,e){n.uniform2uiv(this.addr,e)}function M1(n,e){n.uniform3uiv(this.addr,e)}function S1(n,e){n.uniform4uiv(this.addr,e)}function b1(n,e,t){const i=this.cache,s=e.length,r=El(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=zc:o=Kf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function E1(n,e,t){const i=this.cache,s=e.length,r=El(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jf,r[o])}function w1(n,e,t){const i=this.cache,s=e.length,r=El(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ep,r[o])}function T1(n,e,t){const i=this.cache,s=e.length,r=El(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function A1(n){switch(n){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return h1;case 35674:return d1;case 35675:return f1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return x1;case 36294:return y1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return T1}}class C1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a1(t.type)}}class R1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class P1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function L1(n,e,t){const i=n.name,s=i.length;for(uc.lastIndex=0;;){const r=uc.exec(i),o=uc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dd(t,c===void 0?new C1(a,n,e):new R1(a,n,e));break}else{let g=t.map[a];g===void 0&&(g=new P1(a),dd(t,g)),t=g}}}class jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);L1(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function fd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const I1=37297;let D1=0;function N1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const pd=new it;function U1(n){gt._getMatrix(pd,gt.workingColorSpace,n);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+N1(n.getShaderSource(e),a)}else return r}function O1(n,e){const t=U1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const F1={[tu]:"Linear",[nu]:"Reinhard",[iu]:"Cineon",[tl]:"ACESFilmic",[ru]:"AgX",[ou]:"Neutral",[su]:"Custom"};function z1(n,e){const t=F1[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new H;function k1(){gt.getLuminanceCoefficients(qo);const n=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function V1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ir(n){return n!==""}function gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(H1,q1)}const W1=new Map;function q1(n,e){let t=at[e];if(t===void 0){const i=W1.get(e);if(i!==void 0)t=at[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kc(t)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(X1,Y1)}function Y1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const $1={[er]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function J1(n){return $1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z1={[is]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE_UV"};function K1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Z1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q1={[Ts]:"ENVMAP_MODE_REFRACTION"};function j1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Q1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ex={[eu]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function tx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ex[n.combine]||"ENVMAP_BLENDING_NONE"}function nx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ix(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=J1(t),c=K1(t),u=j1(t),g=tx(t),h=nx(t),d=B1(t),p=V1(r),_=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ir).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ir).join(`
`),f.length>0&&(f+=`
`)):(m=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),f=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?at.tonemapping_pars_fragment:"",t.toneMapping!==Qn?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,O1("linearToOutputTexel",t.outputColorSpace),k1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=kc(o),o=gd(o,t),o=_d(o,t),a=kc(a),a=gd(a,t),a=_d(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=M+m+o,x=M+f+a,b=fd(s,s.VERTEX_SHADER,w),S=fd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(O){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(S)||"",I=U.trim(),F=V.trim(),B=z.trim();let J=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,S);else{const W=md(s,b,"vertex"),ne=md(s,S,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+I+`
`+W+`
`+ne)}else I!==""?tt("WebGLProgram: Program Info Log:",I):(F===""||B==="")&&(Y=!1);Y&&(O.diagnostics={runnable:J,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(b),s.deleteShader(S),v=new jo(s,_),P=G1(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let P;this.getAttributes=function(){return P===void 0&&T(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,I1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}let sx=0;class rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ox(e),t.set(e,i)),i}}class ox{constructor(e){this.id=sx++,this.code=e,this.usedTimes=0}}function ax(n){return n===ss||n===Xr||n===Yr}function lx(n,e,t,i,s,r){const o=new dl,a=new rx,l=new Set,c=[],u=new Map,g=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,P,C,O,U,V){const z=O.fog,I=U.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||F,B),Y=J&&J.mapping===io?J.image.height:null,W=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=ne!==void 0?ne.length:0;let ue=0;I.morphAttributes.position!==void 0&&(ue=1),I.morphAttributes.normal!==void 0&&(ue=2),I.morphAttributes.color!==void 0&&(ue=3);let ee,ae,N,y;if(W){const It=Jn[W];ee=It.vertexShader,ae=It.fragmentShader}else{ee=v.vertexShader,ae=v.fragmentShader;const It=a.getVertexShaderStage(v),Et=a.getFragmentShaderStage(v);a.update(v,It,Et),N=It.id,y=Et.id}const L=n.getRenderTarget(),Z=n.state.buffers.depth.getReversed(),K=U.isInstancedMesh===!0,A=U.isBatchedMesh===!0,R=!!v.map,G=!!v.matcap,q=!!J,ie=!!v.aoMap,k=!!v.lightMap,te=!!v.bumpMap&&v.wireframe===!1,se=!!v.normalMap,$=!!v.displacementMap,ce=!!v.emissiveMap,ye=!!v.metalnessMap,be=!!v.roughnessMap,Q=v.anisotropy>0,ze=v.clearcoat>0,Ae=v.dispersion>0,X=v.retroreflectivity>0,E=v.iridescence>0,le=v.sheen>0,he=v.transmission>0,pe=Q&&!!v.anisotropyMap,Ee=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,_e=ze&&!!v.clearcoatRoughnessMap,xe=E&&!!v.iridescenceMap,Re=E&&!!v.iridescenceThicknessMap,$e=le&&!!v.sheenColorMap,Ne=le&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Je=!!v.specularColorMap,et=!!v.specularIntensityMap,ot=he&&!!v.transmissionMap,oe=he&&!!v.thicknessMap,Le=!!v.gradientMap,ve=!!v.alphaMap,Ie=v.alphaTest>0,ke=!!v.alphaHash,Me=!!v.extensions;let Ze=Qn;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Xe={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:ae,defines:v.defines,customVertexShaderID:N,customFragmentShaderID:y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:A,batchingColor:A&&U._colorsTexture!==null,instancing:K,instancingColor:K&&U.instanceColor!==null,instancingMorph:K&&U.morphTexture!==null,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:R,matcap:G,envMap:q,envMapMode:q&&J.mapping,envMapCubeUVHeight:Y,aoMap:ie,lightMap:k,bumpMap:te,normalMap:se,displacementMap:$,emissiveMap:ce,normalMapObjectSpace:se&&v.normalMapType===ff,normalMapTangentSpace:se&&v.normalMapType===Wa,packedNormalMap:se&&v.normalMapType===Wa&&ax(v.normalMap.format),metalnessMap:ye,roughnessMap:be,anisotropy:Q,anisotropyMap:pe,clearcoat:ze,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:_e,dispersion:Ae,retroreflection:X,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:le,sheenColorMap:$e,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:Je,specularIntensityMap:et,transmission:he,transmissionMap:ot,thicknessMap:oe,gradientMap:Le,opaque:v.transparent===!1&&v.blending===tr&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:ke,combine:v.combine,mapUv:R&&p(v.map.channel),aoMapUv:ie&&p(v.aoMap.channel),lightMapUv:k&&p(v.lightMap.channel),bumpMapUv:te&&p(v.bumpMap.channel),normalMapUv:se&&p(v.normalMap.channel),displacementMapUv:$&&p(v.displacementMap.channel),emissiveMapUv:ce&&p(v.emissiveMap.channel),metalnessMapUv:ye&&p(v.metalnessMap.channel),roughnessMapUv:be&&p(v.roughnessMap.channel),anisotropyMapUv:pe&&p(v.anisotropyMap.channel),clearcoatMapUv:Ee&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&p(v.sheenRoughnessMap.channel),specularMapUv:Pe&&p(v.specularMap.channel),specularColorMapUv:Je&&p(v.specularColorMap.channel),specularIntensityMapUv:et&&p(v.specularIntensityMap.channel),transmissionMapUv:ot&&p(v.transmissionMap.channel),thicknessMapUv:oe&&p(v.thicknessMap.channel),alphaMapUv:ve&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(se||Q),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(R||ve),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&se===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Z,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ue,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:R&&v.map.isVideoTexture===!0&&gt.getTransfer(v.map.colorSpace)===Tt,decodeVideoTextureEmissive:ce&&v.emissiveMap.isVideoTexture===!0&&gt.getTransfer(v.emissiveMap.colorSpace)===Tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||A)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(v){const P=[];if(v.shaderID?P.push(v.shaderID):(P.push(v.customVertexShaderID),P.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)P.push(C),P.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(f(P,v),M(P,v),P.push(n.outputColorSpace)),P.push(v.customProgramCacheKey),P.join()}function f(v,P){v.push(P.precision),v.push(P.outputColorSpace),v.push(P.envMapMode),v.push(P.envMapCubeUVHeight),v.push(P.mapUv),v.push(P.alphaMapUv),v.push(P.lightMapUv),v.push(P.aoMapUv),v.push(P.bumpMapUv),v.push(P.normalMapUv),v.push(P.displacementMapUv),v.push(P.emissiveMapUv),v.push(P.metalnessMapUv),v.push(P.roughnessMapUv),v.push(P.anisotropyMapUv),v.push(P.clearcoatMapUv),v.push(P.clearcoatNormalMapUv),v.push(P.clearcoatRoughnessMapUv),v.push(P.iridescenceMapUv),v.push(P.iridescenceThicknessMapUv),v.push(P.sheenColorMapUv),v.push(P.sheenRoughnessMapUv),v.push(P.specularMapUv),v.push(P.specularColorMapUv),v.push(P.specularIntensityMapUv),v.push(P.transmissionMapUv),v.push(P.thicknessMapUv),v.push(P.combine),v.push(P.fogExp2),v.push(P.sizeAttenuation),v.push(P.morphTargetsCount),v.push(P.morphAttributeCount),v.push(P.numSunLights),v.push(P.numDirLights),v.push(P.numPointLights),v.push(P.numSpotLights),v.push(P.numSpotLightMaps),v.push(P.numHemiLights),v.push(P.numRectAreaLights),v.push(P.numSunLightShadows),v.push(P.numDirLightShadows),v.push(P.numPointLightShadows),v.push(P.numSpotLightShadows),v.push(P.numSpotLightShadowsWithMaps),v.push(P.numLightProbes),v.push(P.shadowMapType),v.push(P.toneMapping),v.push(P.numClippingPlanes),v.push(P.numClipIntersection),v.push(P.depthPacking)}function M(v,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function w(v){const P=d[v.type];let C;if(P){const O=Jn[P];C=Bf.clone(O.uniforms)}else C=v.uniforms;return C}function x(v,P){let C=u.get(P);return C!==void 0?++C.usedTimes:(C=new ix(n,P,v,s),c.push(C),u.set(P,C)),C}function b(v){if(--v.usedTimes===0){const P=c.indexOf(v);c[P]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:T}}function cx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ux(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Md(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,_,m,f){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:f},n[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=p,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=f),e++,M}function l(h,d,p,_,m,f,M){M.reversedDepth===!0&&(m=-m);const w=a(h,d,p,_,m,f);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(h,d,p,_,m,f){const M=a(h,d,p,_,m,f);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,d){t.length>1&&t.sort(h||ux),i.length>1&&i.sort(d||yd),s.length>1&&s.sort(d||yd)}function g(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function hx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Md,n.set(i,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new ht};break;case"SpotLight":t={position:new H,direction:new H,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function fx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let px=0;function mx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gx(n){const e=new dx,t=fx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new xt,o=new xt;function a(c){let u=0,g=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,p=0,_=0,m=0,f=0,M=0,w=0,x=0,b=0,S=0,T=0,v=0,P=0,C=0;c.sort(mx);for(let U=0,V=c.length;U<V;U++){const z=c[U],I=z.color,F=z.intensity,B=z.distance;let J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ss?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=I.r*F,g+=I.g*F,h+=I.b*F;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(z.sh.coefficients[Y],F);C++}else if(z.isSunLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const W=z.shadow,ne=t.get(z);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[p]=ne,i.sunShadowMap[p]=J;const j=W.getViewportCount();for(let ue=0;ue<j;ue++)i.sunShadowMatrix[_+ue]=W.getMatrix(ue),i.sunShadowCascade[_+ue]=W._cascadeData[ue];_+=j,p++}i.sun[d]=Y,d++}else if(z.isDirectionalLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const W=z.shadow,ne=t.get(z);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=z.shadow.matrix,b++}i.directional[m]=Y,m++}else if(z.isSpotLight){const Y=e.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(I).multiplyScalar(F),Y.distance=B,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,i.spot[M]=Y;const W=z.shadow;if(z.map&&(i.spotLightMap[v]=z.map,v++,W.updateMatrices(z),z.castShadow&&P++),i.spotLightMatrix[M]=W.matrix,z.castShadow){const ne=t.get(z);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,i.spotShadow[M]=ne,i.spotShadowMap[M]=J,T++}M++}else if(z.isRectAreaLight){const Y=e.get(z);Y.color.copy(I).multiplyScalar(F),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),i.rectArea[w]=Y,w++}else if(z.isPointLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const W=z.shadow,ne=t.get(z);ne.shadowIntensity=W.intensity,ne.shadowBias=W.bias,ne.shadowNormalBias=W.normalBias,ne.shadowRadius=W.radius,ne.shadowMapSize=W.mapSize,ne.shadowCameraNear=W.camera.near,ne.shadowCameraFar=W.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=z.shadow.matrix,S++}i.point[f]=Y,f++}else if(z.isHemisphereLight){const Y=e.get(z);Y.skyColor.copy(z.color).multiplyScalar(F),Y.groundColor.copy(z.groundColor).multiplyScalar(F),i.hemi[x]=Y,x++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=h;const O=i.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==f||O.spotLength!==M||O.rectAreaLength!==w||O.hemiLength!==x||O.numSunShadows!==p||O.numDirectionalShadows!==b||O.numPointShadows!==S||O.numSpotShadows!==T||O.numSpotMaps!==v||O.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=f,i.hemi.length=x,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+v-P,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,O.sunLength=d,O.directionalLength=m,O.pointLength=f,O.spotLength=M,O.rectAreaLength=w,O.hemiLength=x,O.numSunShadows=p,O.numDirectionalShadows=b,O.numPointShadows=S,O.numSpotShadows=T,O.numSpotMaps=v,O.numLightProbes=C,i.version=px++)}function l(c,u){let g=0,h=0,d=0,p=0,_=0,m=0;const f=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const x=c[M];if(x.isSunLight){const b=i.sun[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),g++}else if(x.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(x.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(x.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function Sd(n){const e=new gx(n),t=[],i=[],s=[];function r(h){g.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _x(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sd(n),e.set(s,[a])):r>=o.length?(a=new Sd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,yx=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Mx=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],bd=new xt,Tr=new H,hc=new H;function Sx(n,e,t){let i=new pl;const s=new Te,r=new Te,o=new Ft,a=new Gf,l=new Hf,c={},u=t.maxTextureSize,g={[ns]:gn,[gn]:ns,[Dn]:Dn},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:vx,fragmentShader:xx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Wt;p.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let f=this.type;this.render=function(S,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Hd&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const P=n.getRenderTarget(),C=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),U=n.state;U.setBlending(mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=f!==this.type;V&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(I=>I.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,I=S.length;z<I;z++){const F=S[z],B=F.shadow;if(B===void 0){tt("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();s.multiply(J),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,B.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Zs){if(F.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new zn(s.x,s.y,{format:ss,type:ni,minFilter:tn,magFilter:tn,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new cr(s.x,s.y,On),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=vi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt}else F.isPointLight?(B.map=new Nu(s.x),B.map.depthTexture=new Pf(s.x,ti)):(B.map=new zn(s.x,s.y),B.map.depthTexture=new cr(s.x,s.y,ti)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=vi,this.type===er?(B.map.depthTexture.compareFunction=Y?ul:cl,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();F.isPointLight!==!0&&B.updateMatrices(F,v);for(let ne=0;ne<W;ne++){const j=B.getCamera(ne);if(F.isPointLight){const ue=B.camera,ee=B.matrix,ae=F.distance||ue.far;ae!==ue.far&&(ue.far=ae,ue.updateProjectionMatrix()),Tr.setFromMatrixPosition(F.matrixWorld),ue.position.copy(Tr),hc.copy(ue.position),hc.add(yx[ne]),ue.up.copy(Mx[ne]),ue.lookAt(hc),ue.updateMatrixWorld(),ee.makeTranslation(-Tr.x,-Tr.y,-Tr.z),bd.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bd,ue.coordinateSystem,ue.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(B.map),n.clear());const ue=B.getViewport(ne);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),U.viewport(o)}i=B.getFrustum(ne),x(T,v,j,F,this.type)}B.isPointLightShadow!==!0&&this.type===Zs&&M(B,v),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(P,C,O)};function M(S,T){const v=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new zn(s.x,s.y,{format:ss,type:ni}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,v,h,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,v,d,_,null)}function w(S,T,v,P){let C=null;const O=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)C=O;else if(C=v.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=C.uuid,V=T.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let I=z[V];I===void 0&&(I=C.clone(),z[V]=I,T.addEventListener("dispose",b)),C=I}if(C.visible=T.visible,C.wireframe=T.wireframe,P===Zs?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:g[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=v}return C}function x(S,T,v,P,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Zs)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const V=e.update(S),z=S.material;if(Array.isArray(z)){const I=V.groups;for(let F=0,B=I.length;F<B;F++){const J=I[F],Y=z[J.materialIndex];if(Y&&Y.visible){const W=w(S,Y,P,C);S.onBeforeShadow(n,S,T,v,V,W,J),n.renderBufferDirect(v,null,V,W,S,J),S.onAfterShadow(n,S,T,v,V,W,J)}}}else if(z.visible){const I=w(S,z,P,C);S.onBeforeShadow(n,S,T,v,V,I,null),n.renderBufferDirect(v,null,V,I,S,null),S.onAfterShadow(n,S,T,v,V,I,null)}}const U=S.children;for(let V=0,z=U.length;V<z;V++)x(U[V],T,v,P,C)}function b(S){S.target.removeEventListener("dispose",b);for(const v in c){const P=c[v],C=S.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function bx(n,e){function t(){let oe=!1;const Le=new Ft;let ve=null;const Ie=new Ft(0,0,0,0);return{setMask:function(ke){ve!==ke&&!oe&&(n.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){oe=ke},setClear:function(ke,Me,Ze,Xe,It){It===!0&&(ke*=Xe,Me*=Xe,Ze*=Xe),Le.set(ke,Me,Ze,Xe),Ie.equals(Le)===!1&&(n.clearColor(ke,Me,Ze,Xe),Ie.copy(Le))},reset:function(){oe=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let oe=!1,Le=!1,ve=null,Ie=null,ke=null;return{setReversed:function(Me){if(Le!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=ke;ke=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?L(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!oe&&(n.depthMask(Me),ve=Me)},setFunc:function(Me){if(Le&&(Me=Sm[Me]),Ie!==Me){switch(Me){case oa:n.depthFunc(n.NEVER);break;case aa:n.depthFunc(n.ALWAYS);break;case la:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case ca:n.depthFunc(n.EQUAL);break;case ua:n.depthFunc(n.GEQUAL);break;case ha:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){oe=Me},setClear:function(Me){ke!==Me&&(ke=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){oe=!1,ve=null,Ie=null,ke=null,Le=!1}}}function s(){let oe=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Ze=null,Xe=null,It=null;return{setTest:function(Et){oe||(Et?L(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!oe&&(n.stencilMask(Et),Le=Et)},setFunc:function(Et,Hn,ri){(ve!==Et||Ie!==Hn||ke!==ri)&&(n.stencilFunc(Et,Hn,ri),ve=Et,Ie=Hn,ke=ri)},setOp:function(Et,Hn,ri){(Me!==Et||Ze!==Hn||Xe!==ri)&&(n.stencilOp(Et,Hn,ri),Me=Et,Ze=Hn,Xe=ri)},setLocked:function(Et){oe=Et},setClear:function(Et){It!==Et&&(n.clearStencil(Et),It=Et)},reset:function(){oe=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Ze=null,Xe=null,It=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},g={},h={},d=new WeakMap,p=[],_=null,m=!1,f=null,M=null,w=null,x=null,b=null,S=null,T=null,v=new ht(0,0,0),P=0,C=!1,O=null,U=null,V=null,z=null,I=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=J>=2);let W=null,ne={};const j=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),ee=new Ft().fromArray(j),ae=new Ft().fromArray(ue);function N(oe,Le,ve,Ie){const ke=new Uint8Array(4),Me=n.createTexture();n.bindTexture(oe,Me),n.texParameteri(oe,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(oe,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ve;Ze++)oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Le+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Me}const y={};y[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),y[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),y[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),y[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(rr),te(!1),se(Sc),L(n.CULL_FACE),ie(mi);function L(oe){u[oe]!==!0&&(n.enable(oe),u[oe]=!0)}function Z(oe){u[oe]!==!1&&(n.disable(oe),u[oe]=!1)}function K(oe,Le){return h[oe]!==Le?(n.bindFramebuffer(oe,Le),h[oe]=Le,oe===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),oe===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function A(oe,Le){let ve=p,Ie=!1;if(oe){ve=d.get(Le),ve===void 0&&(ve=[],d.set(Le,ve));const ke=oe.textures;if(ve.length!==ke.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ze=ke.length;Me<Ze;Me++)ve[Me]=n.COLOR_ATTACHMENT0+Me;ve.length=ke.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function R(oe){return _!==oe?(n.useProgram(oe),_=oe,!0):!1}const G={[vs]:n.FUNC_ADD,[qd]:n.FUNC_SUBTRACT,[Xd]:n.FUNC_REVERSE_SUBTRACT};G[Yd]=n.MIN,G[$d]=n.MAX;const q={[Jd]:n.ZERO,[Zd]:n.ONE,[Kd]:n.SRC_COLOR,[Qc]:n.SRC_ALPHA,[sf]:n.SRC_ALPHA_SATURATE,[tf]:n.DST_COLOR,[jd]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[jc]:n.ONE_MINUS_SRC_ALPHA,[nf]:n.ONE_MINUS_DST_COLOR,[ef]:n.ONE_MINUS_DST_ALPHA,[rf]:n.CONSTANT_COLOR,[of]:n.ONE_MINUS_CONSTANT_COLOR,[af]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(oe,Le,ve,Ie,ke,Me,Ze,Xe,It,Et){if(oe===mi){m===!0&&(Z(n.BLEND),m=!1);return}if(m===!1&&(L(n.BLEND),m=!0),oe!==Wd){if(oe!==f||Et!==C){if((M!==vs||b!==vs)&&(n.blendEquation(n.FUNC_ADD),M=vs,b=vs),Et)switch(oe){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",oe);break}else switch(oe){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ec:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",oe);break}w=null,x=null,S=null,T=null,v.set(0,0,0),P=0,f=oe,C=Et}return}ke=ke||Le,Me=Me||ve,Ze=Ze||Ie,(Le!==M||ke!==b)&&(n.blendEquationSeparate(G[Le],G[ke]),M=Le,b=ke),(ve!==w||Ie!==x||Me!==S||Ze!==T)&&(n.blendFuncSeparate(q[ve],q[Ie],q[Me],q[Ze]),w=ve,x=Ie,S=Me,T=Ze),(Xe.equals(v)===!1||It!==P)&&(n.blendColor(Xe.r,Xe.g,Xe.b,It),v.copy(Xe),P=It),f=oe,C=!1}function k(oe,Le){oe.side===Dn?Z(n.CULL_FACE):L(n.CULL_FACE);let ve=oe.side===gn;Le&&(ve=!ve),te(ve),oe.blending===tr&&oe.transparent===!1?ie(mi):ie(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.blendColor,oe.blendAlpha,oe.premultipliedAlpha),o.setFunc(oe.depthFunc),o.setTest(oe.depthTest),o.setMask(oe.depthWrite),r.setMask(oe.colorWrite);const Ie=oe.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(oe.stencilWriteMask),a.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),a.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),ce(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(oe){O!==oe&&(oe?n.frontFace(n.CW):n.frontFace(n.CCW),O=oe)}function se(oe){oe!==Vd?(L(n.CULL_FACE),oe!==U&&(oe===Sc?n.cullFace(n.BACK):oe===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),U=oe}function $(oe){oe!==V&&(B&&n.lineWidth(oe),V=oe)}function ce(oe,Le,ve){oe?(L(n.POLYGON_OFFSET_FILL),(z!==Le||I!==ve)&&(z=Le,I=ve,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ve))):Z(n.POLYGON_OFFSET_FILL)}function ye(oe){oe?L(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function be(oe){oe===void 0&&(oe=n.TEXTURE0+F-1),W!==oe&&(n.activeTexture(oe),W=oe)}function Q(oe,Le,ve){ve===void 0&&(W===null?ve=n.TEXTURE0+F-1:ve=W);let Ie=ne[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},ne[ve]=Ie),(Ie.type!==oe||Ie.texture!==Le)&&(W!==ve&&(n.activeTexture(ve),W=ve),n.bindTexture(oe,Le||y[oe]),Ie.type=oe,Ie.texture=Le)}function ze(){const oe=ne[W];oe!==void 0&&oe.type!==void 0&&(n.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function E(){try{n.texSubImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function le(){try{n.texSubImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function he(){try{n.compressedTexSubImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ee(){try{n.texStorage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ce(){try{n.texStorage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function _e(){try{n.texImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function xe(){try{n.texImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Re(oe){return g[oe]!==void 0?g[oe]:n.getParameter(oe)}function $e(oe,Le){g[oe]!==Le&&(n.pixelStorei(oe,Le),g[oe]=Le)}function Ne(oe){ee.equals(oe)===!1&&(n.scissor(oe.x,oe.y,oe.z,oe.w),ee.copy(oe))}function Pe(oe){ae.equals(oe)===!1&&(n.viewport(oe.x,oe.y,oe.z,oe.w),ae.copy(oe))}function Je(oe,Le){let ve=c.get(Le);ve===void 0&&(ve=new WeakMap,c.set(Le,ve));let Ie=ve.get(oe);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,oe.name),ve.set(oe,Ie))}function et(oe,Le){const Ie=c.get(Le).get(oe);l.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,oe.__bindingPointIndex),l.set(Le,Ie))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},g={},W=null,ne={},h={},d=new WeakMap,p=[],_=null,m=!1,f=null,M=null,w=null,x=null,b=null,S=null,T=null,v=new ht(0,0,0),P=0,C=!1,O=null,U=null,V=null,z=null,I=null,ee.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:Z,bindFramebuffer:K,drawBuffers:A,useProgram:R,setBlending:ie,setMaterial:k,setFlipSided:te,setCullFace:se,setLineWidth:$,setPolygonOffset:ce,setScissorTest:ye,activeTexture:be,bindTexture:Q,unbindTexture:ze,compressedTexImage2D:Ae,compressedTexImage3D:X,texImage2D:_e,texImage3D:xe,pixelStorei:$e,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:E,texSubImage3D:le,compressedTexSubImage2D:he,compressedTexSubImage3D:pe,scissor:Ne,viewport:Pe,reset:ot}}function Ex(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,g=new Set;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(X,E){return p?new OffscreenCanvas(X,E):qa("canvas")}function m(X,E,le){let he=1;const pe=Ae(X);if((pe.width>le||pe.height>le)&&(he=le/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){const Ee=Math.floor(he*pe.width),Ce=Math.floor(he*pe.height);h===void 0&&(h=_(Ee,Ce));const _e=E?_(Ee,Ce):h;return _e.width=Ee,_e.height=Ce,_e.getContext("2d").drawImage(X,0,0,Ee,Ce),tt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ee+"x"+Ce+")."),_e}else return"data"in X&&tt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),X;return X}function f(X){return X.generateMipmaps}function M(X){n.generateMipmap(X)}function w(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(X,E,le,he,pe,Ee=!1){if(X!==null){if(n[X]!==void 0)return n[X];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Ce;he&&(Ce=e.get("EXT_texture_norm16"),Ce||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=E;if(E===n.RED&&(le===n.FLOAT&&(_e=n.R32F),le===n.HALF_FLOAT&&(_e=n.R16F),le===n.UNSIGNED_BYTE&&(_e=n.R8),le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.R16_EXT),le===n.SHORT&&Ce&&(_e=Ce.R16_SNORM_EXT)),E===n.RED_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.R8UI),le===n.UNSIGNED_SHORT&&(_e=n.R16UI),le===n.UNSIGNED_INT&&(_e=n.R32UI),le===n.BYTE&&(_e=n.R8I),le===n.SHORT&&(_e=n.R16I),le===n.INT&&(_e=n.R32I)),E===n.RG&&(le===n.FLOAT&&(_e=n.RG32F),le===n.HALF_FLOAT&&(_e=n.RG16F),le===n.UNSIGNED_BYTE&&(_e=n.RG8),le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RG16_EXT),le===n.SHORT&&Ce&&(_e=Ce.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.RG8UI),le===n.UNSIGNED_SHORT&&(_e=n.RG16UI),le===n.UNSIGNED_INT&&(_e=n.RG32UI),le===n.BYTE&&(_e=n.RG8I),le===n.SHORT&&(_e=n.RG16I),le===n.INT&&(_e=n.RG32I)),E===n.RGB_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),le===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),le===n.UNSIGNED_INT&&(_e=n.RGB32UI),le===n.BYTE&&(_e=n.RGB8I),le===n.SHORT&&(_e=n.RGB16I),le===n.INT&&(_e=n.RGB32I)),E===n.RGBA_INTEGER&&(le===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),le===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),le===n.UNSIGNED_INT&&(_e=n.RGBA32UI),le===n.BYTE&&(_e=n.RGBA8I),le===n.SHORT&&(_e=n.RGBA16I),le===n.INT&&(_e=n.RGBA32I)),E===n.RGB&&(le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGB16_EXT),le===n.SHORT&&Ce&&(_e=Ce.RGB16_SNORM_EXT),le===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),le===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),E===n.RGBA){const xe=Ee?Jr:gt.getTransfer(pe);le===n.FLOAT&&(_e=n.RGBA32F),le===n.HALF_FLOAT&&(_e=n.RGBA16F),le===n.UNSIGNED_BYTE&&(_e=xe===Tt?n.SRGB8_ALPHA8:n.RGBA8),le===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGBA16_EXT),le===n.SHORT&&Ce&&(_e=Ce.RGBA16_SNORM_EXT),le===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),le===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function b(X,E){let le;return X?E===null||E===ti||E===ar?le=n.DEPTH24_STENCIL8:E===On?le=n.DEPTH32F_STENCIL8:E===or&&(le=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ti||E===ar?le=n.DEPTH_COMPONENT24:E===On?le=n.DEPTH_COMPONENT32F:E===or&&(le=n.DEPTH_COMPONENT16),le}function S(X,E){return f(X)===!0||X.isFramebufferTexture&&X.minFilter!==jt&&X.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?E.mipmaps.length:1}function T(X){const E=X.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&g.delete(E)}function v(X){const E=X.target;E.removeEventListener("dispose",v),O(E)}function P(X){const E=i.get(X);if(E.__webglInit===void 0)return;const le=X.source,he=d.get(le);if(he){const pe=he[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(X),Object.keys(he).length===0&&d.delete(le)}i.remove(X)}function C(X){const E=i.get(X);n.deleteTexture(E.__webglTexture);const le=X.source,he=d.get(le);delete he[E.__cacheKey],o.memory.textures--}function O(X){const E=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let pe=0;pe<E.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[he][pe]);else n.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)n.deleteFramebuffer(E.__webglFramebuffer[he]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const le=X.textures;for(let he=0,pe=le.length;he<pe;he++){const Ee=i.get(le[he]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(le[he])}i.remove(X)}let U=0;function V(){U=0}function z(){return U}function I(X){U=X}function F(){const X=U;return X>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,X}function B(X){const E=[];return E.push(X.wrapS),E.push(X.wrapT),E.push(X.wrapR||0),E.push(X.magFilter),E.push(X.minFilter),E.push(X.anisotropy),E.push(X.internalFormat),E.push(X.format),E.push(X.type),E.push(X.generateMipmaps),E.push(X.premultiplyAlpha),E.push(X.flipY),E.push(X.unpackAlignment),E.push(X.colorSpace),E.join()}function J(X,E){const le=i.get(X);if(X.isVideoTexture&&Q(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&le.__version!==X.version){const he=X.image;if(he===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(le,X,E);return}}else X.isExternalTexture&&(le.__webglTexture=X.sourceTexture?X.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,le.__webglTexture,n.TEXTURE0+E)}function Y(X,E){const le=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&le.__version!==X.version){Z(le,X,E);return}else X.isExternalTexture&&(le.__webglTexture=X.sourceTexture?X.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,le.__webglTexture,n.TEXTURE0+E)}function W(X,E){const le=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&le.__version!==X.version){Z(le,X,E);return}t.bindTexture(n.TEXTURE_3D,le.__webglTexture,n.TEXTURE0+E)}function ne(X,E){const le=i.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&le.__version!==X.version){K(le,X,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture,n.TEXTURE0+E)}const j={[qr]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},ue={[jt]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Zo]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},ee={[mf]:n.NEVER,[yf]:n.ALWAYS,[gf]:n.LESS,[cl]:n.LEQUAL,[_f]:n.EQUAL,[ul]:n.GEQUAL,[vf]:n.GREATER,[xf]:n.NOTEQUAL};function ae(X,E){if(E.type===On&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tn||E.magFilter===Zo||E.magFilter===Pr||E.magFilter===Ji||E.minFilter===tn||E.minFilter===Zo||E.minFilter===Pr||E.minFilter===Ji)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,j[E.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,j[E.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,j[E.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,ue[E.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==Pr&&E.minFilter!==Ji||E.type===On&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const le=e.get("EXT_texture_filter_anisotropic");n.texParameterf(X,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function N(X,E){let le=!1;X.__webglInit===void 0&&(X.__webglInit=!0,E.addEventListener("dispose",T));const he=E.source;let pe=d.get(he);pe===void 0&&(pe={},d.set(he,pe));const Ee=B(E);if(Ee!==X.__cacheKey){pe[Ee]===void 0&&(pe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,le=!0),pe[Ee].usedTimes++;const Ce=pe[X.__cacheKey];Ce!==void 0&&(pe[X.__cacheKey].usedTimes--,Ce.usedTimes===0&&C(E)),X.__cacheKey=Ee,X.__webglTexture=pe[Ee].texture}return le}function y(X,E,le){return Math.floor(Math.floor(X/le)/E)}function L(X,E,le,he){const Ee=X.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,le,he,E.data);else{Ee.sort(($e,Ne)=>$e.start-Ne.start);let Ce=0;for(let $e=1;$e<Ee.length;$e++){const Ne=Ee[Ce],Pe=Ee[$e],Je=Ne.start+Ne.count,et=y(Pe.start,E.width,4),ot=y(Ne.start,E.width,4);Pe.start<=Je+1&&et===ot&&y(Pe.start+Pe.count-1,E.width,4)===et?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,Ee[Ce]=Pe)}Ee.length=Ce+1;const _e=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let $e=0,Ne=Ee.length;$e<Ne;$e++){const Pe=Ee[$e],Je=Math.floor(Pe.start/4),et=Math.ceil(Pe.count/4),ot=Je%E.width,oe=Math.floor(Je/E.width),Le=et,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe),t.texSubImage2D(n.TEXTURE_2D,0,ot,oe,Le,ve,le,he,E.data)}X.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Z(X,E,le){let he=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=n.TEXTURE_3D);const pe=N(X,E),Ee=E.source;t.bindTexture(he,X.__webglTexture,n.TEXTURE0+le);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+le),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=gt.getPrimaries(gt.workingColorSpace),Ie=E.colorSpace===Ei?null:gt.getPrimaries(E.colorSpace),ke=E.colorSpace===Ei||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=m(E.image,!1,s.maxTextureSize);xe=ze(E,xe);const Re=r.convert(E.format,E.colorSpace),$e=r.convert(E.type);let Ne=x(E.internalFormat,Re,$e,E.normalized,E.colorSpace,E.isVideoTexture);ae(he,E);let Pe;const Je=E.mipmaps,et=E.isVideoTexture!==!0,ot=Ce.__version===void 0||pe===!0,oe=Ee.dataReady,Le=S(E,xe);if(E.isDepthTexture)Ne=b(E.format===Zi,E.type),ot&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,$e,null));else if(E.isDataTexture)if(Je.length>0){et&&ot&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],et?oe&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,$e,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,$e,Pe.data);E.generateMipmaps=!1}else et?(ot&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height),oe&&L(E,xe,Re,$e)):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,$e,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,Je[0].width,Je[0].height,xe.depth);for(let ve=0,Ie=Je.length;ve<Ie;ve++)if(Pe=Je[ve],E.format!==Fn)if(Re!==null)if(et){if(oe)if(E.layerUpdates.size>0){const ke=nd(Pe.width,Pe.height,E.format,E.type);for(const Me of E.layerUpdates){const Ze=Pe.data.subarray(Me*ke/Pe.data.BYTES_PER_ELEMENT,(Me+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Me,Pe.width,Pe.height,1,Re,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,$e,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Re,$e,Pe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{et&&ot&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],E.format!==Fn?Re!==null?et?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Pe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?oe&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,$e,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,$e,Pe.data)}else if(E.isDataArrayTexture)if(et){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,xe.width,xe.height,xe.depth),oe)if(E.layerUpdates.size>0){const ve=nd(xe.width,xe.height,E.format,E.type);for(const Ie of E.layerUpdates){const ke=xe.data.subarray(Ie*ve/xe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,$e,ke)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,$e,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,$e,xe.data);else if(E.isData3DTexture)et?(ot&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,xe.width,xe.height,xe.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,$e,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,$e,xe.data);else if(E.isFramebufferTexture){if(ot)if(et)t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height);else{let ve=xe.width,Ie=xe.height;for(let ke=0;ke<Le;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ne,ve,Ie,0,Re,$e,null),ve>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),g.add(E),ve.onpaint=Ie=>{const ke=Ie.changedElements;for(const Me of g)ke.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const ke=n.RGBA,Me=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,Me,Ze,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&ot){const ve=Ae(Je[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],et?oe&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,$e,Pe):t.texImage2D(n.TEXTURE_2D,ve,Ne,Re,$e,Pe);E.generateMipmaps=!1}else if(et){if(ot){const ve=Ae(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,$e,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,$e,xe);f(E)&&M(he),Ce.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}X.__version=E.version}function K(X,E,le){if(E.image.length!==6)return;const he=N(X,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+le);const Ee=i.get(pe);if(pe.version!==Ee.__version||he===!0){t.activeTexture(n.TEXTURE0+le);const Ce=gt.getPrimaries(gt.workingColorSpace),_e=E.colorSpace===Ei?null:gt.getPrimaries(E.colorSpace),xe=E.colorSpace===Ei||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,$e=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!$e?Ne[Me]=m(E.image[Me],!0,s.maxCubemapSize):Ne[Me]=$e?E.image[Me].image:E.image[Me],Ne[Me]=ze(E,Ne[Me]);const Pe=Ne[0],Je=r.convert(E.format,E.colorSpace),et=r.convert(E.type),ot=x(E.internalFormat,Je,et,E.normalized,E.colorSpace),oe=E.isVideoTexture!==!0,Le=Ee.__version===void 0||he===!0,ve=pe.dataReady;let Ie=S(E,Pe);ae(n.TEXTURE_CUBE_MAP,E);let ke;if(Re){oe&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ot,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){ke=Ne[Me].mipmaps;for(let Ze=0;Ze<ke.length;Ze++){const Xe=ke[Ze];E.format!==Fn?Je!==null?oe?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,Je,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,ot,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,Je,et,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,ot,Xe.width,Xe.height,0,Je,et,Xe.data)}}}else{if(ke=E.mipmaps,oe&&Le){ke.length>0&&Ie++;const Me=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ot,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if($e){oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,Je,et,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,Ne[Me].width,Ne[Me].height,0,Je,et,Ne[Me].data);for(let Ze=0;Ze<ke.length;Ze++){const It=ke[Ze].image[Me].image;oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,It.width,It.height,Je,et,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,ot,It.width,It.height,0,Je,et,It.data)}}else{oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,et,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,Je,et,Ne[Me]);for(let Ze=0;Ze<ke.length;Ze++){const Xe=ke[Ze];oe?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Je,et,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,ot,Je,et,Xe.image[Me])}}}f(E)&&M(n.TEXTURE_CUBE_MAP),Ee.__version=pe.version,E.onUpdate&&E.onUpdate(E)}X.__version=E.version}function A(X,E,le,he,pe,Ee){const Ce=r.convert(le.format,le.colorSpace),_e=r.convert(le.type),xe=x(le.internalFormat,Ce,_e,le.normalized,le.colorSpace),Re=i.get(E),$e=i.get(le);if($e.__renderTarget=E,!Re.__hasExternalTextures){const Ne=Math.max(1,E.width>>Ee),Pe=Math.max(1,E.height>>Ee);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ee,xe,Ne,Pe,E.depth,0,Ce,_e,null):t.texImage2D(pe,Ee,xe,Ne,Pe,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,X),be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,pe,$e.__webglTexture,0,ye(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,pe,$e.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(X,E,le){if(n.bindRenderbuffer(n.RENDERBUFFER,X),E.depthBuffer){const he=E.depthTexture,pe=he&&he.isDepthTexture?he.type:null,Ee=b(E.stencilBuffer,pe),Ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(E),Ee,E.width,E.height):le?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(E),Ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,X)}else{const he=E.textures;for(let pe=0;pe<he.length;pe++){const Ee=he[pe],Ce=r.convert(Ee.format,Ee.colorSpace),_e=r.convert(Ee.type),xe=x(Ee.internalFormat,Ce,_e,Ee.normalized,Ee.colorSpace);be(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(E),xe,E.width,E.height):le?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(E),xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(X,E,le){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,X),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=i.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ae(n.TEXTURE_CUBE_MAP,E.depthTexture);const Re=r.convert(E.depthTexture.format),$e=r.convert(E.depthTexture.type);let Ne;E.depthTexture.format===vi?Ne=n.DEPTH_COMPONENT24:E.depthTexture.format===Zi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,E.width,E.height,0,Re,$e,null)}}else J(E.depthTexture,0);const Ee=pe.__webglTexture,Ce=ye(E),_e=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+le:n.TEXTURE_2D,xe=E.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===vi)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else if(E.depthTexture.format===Zi)be(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(X){const E=i.get(X),le=X.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==X.depthTexture){const he=X.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=he}if(X.depthTexture&&!E.__autoAllocateDepthBuffer)if(le)for(let he=0;he<6;he++)G(E.__webglFramebuffer[he],X,he);else{const he=X.texture.mipmaps;he&&he.length>0?G(E.__webglFramebuffer[0],X,0):G(E.__webglFramebuffer,X,0)}else if(le){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=n.createRenderbuffer(),R(E.__webglDepthbuffer[he],X,!1);else{const pe=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}else{const he=X.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),R(E.__webglDepthbuffer,X,!1);else{const pe=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(X,E,le){const he=i.get(X);E!==void 0&&A(he.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),le!==void 0&&q(X)}function k(X){const E=X.texture,le=i.get(X),he=i.get(E);X.addEventListener("dispose",v);const pe=X.textures,Ee=X.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=E.version,o.memory.textures++),Ee){le.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){le.__webglFramebuffer[_e]=[];for(let xe=0;xe<E.mipmaps.length;xe++)le.__webglFramebuffer[_e][xe]=n.createFramebuffer()}else le.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){le.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)le.__webglFramebuffer[_e]=n.createFramebuffer()}else le.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=i.get(pe[_e]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(X.samples>0&&be(X)===!1){le.__webglMultisampledFramebuffer=n.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const xe=pe[_e];le.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,le.__webglColorRenderbuffer[_e]);const Re=r.convert(xe.format,xe.colorSpace),$e=r.convert(xe.type),Ne=x(xe.internalFormat,Re,$e,xe.normalized,xe.colorSpace,X.isXRRenderTarget===!0),Pe=ye(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,le.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(le.__webglDepthRenderbuffer=n.createRenderbuffer(),R(le.__webglDepthRenderbuffer,X,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),ae(n.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)A(le.__webglFramebuffer[_e][xe],X,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else A(le.__webglFramebuffer[_e],X,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);f(E)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=pe[_e],$e=i.get(Re);let Ne=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(Ne=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,$e.__webglTexture),ae(Ne,Re),A(le.__webglFramebuffer,X,Re,n.COLOR_ATTACHMENT0+_e,Ne,0),f(Re)&&M(Ne)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(_e=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,he.__webglTexture),ae(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)A(le.__webglFramebuffer[xe],X,E,n.COLOR_ATTACHMENT0,_e,xe);else A(le.__webglFramebuffer,X,E,n.COLOR_ATTACHMENT0,_e,0);f(E)&&M(_e),t.unbindTexture()}X.depthBuffer&&q(X)}function te(X){const E=X.textures;for(let le=0,he=E.length;le<he;le++){const pe=E[le];if(f(pe)){const Ee=w(X),Ce=i.get(pe).__webglTexture;t.bindTexture(Ee,Ce),M(Ee),t.unbindTexture()}}}const se=[],$=[];function ce(X){if(X.samples>0){if(be(X)===!1){const E=X.textures,le=X.width,he=X.height;let pe=n.COLOR_BUFFER_BIT;const Ee=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(X),_e=E.length>1;if(_e)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=X.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const $e=i.get(E[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,le,he,0,0,le,he,pe,n.NEAREST),l===!0&&(se.length=0,$.length=0,se.push(n.COLOR_ATTACHMENT0+Re),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(se.push(Ee),$.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const $e=i.get(E[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&l){const E=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ye(X){return Math.min(s.maxSamples,X.samples)}function be(X){const E=i.get(X);return X.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(X){const E=o.render.frame;u.get(X)!==E&&(u.set(X,E),X.update())}function ze(X,E){const le=X.colorSpace,he=X.format,pe=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||le!==$r&&le!==Ei&&(gt.getTransfer(le)===Tt?(he!==Fn||pe!==yn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",le)),E}function Ae(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(c.width=X.naturalWidth||X.width,c.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(c.width=X.displayWidth,c.height=X.displayHeight):(c.width=X.width,c.height=X.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.getTextureUnits=z,this.setTextureUnits=I,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=ie,this.setupRenderTarget=k,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=A,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tp(n,e){function t(i,s=Ei){let r;const o=gt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lu)return n.BYTE;if(i===cu)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===nl)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===du)return n.ALPHA;if(i===fu)return n.RGB;if(i===Fn)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===rl)return n.RED;if(i===ol)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===al)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===Fr||i===zr||i===kr||i===Br)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pa||i===ma||i===ga||i===_a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===xa||i===ya||i===Ma||i===Sa||i===Xr||i===ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===va||i===xa)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ya)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ma)return r.COMPRESSED_R11_EAC;if(i===Sa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Xr)return r.COMPRESSED_RG11_EAC;if(i===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Ia||i===Da||i===Na||i===Ua||i===Oa||i===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ea)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wa)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ta)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Aa)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ra)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pa)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ia)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Da)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Na)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ua)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oa)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fa)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===ka||i===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Va||i===Ga||i===Yr||i===Ha)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
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

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vn({vertexShader:wx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cx extends zi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,g=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Ax,f={},M=t.getContextAttributes();let w=null,x=null;const b=[],S=[],T=new Te;let v=null,P=null;const C=new wn;C.viewport=new Ft;const O=new wn;O.viewport=new Ft;const U=[C,O],V=new Xf;let z=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let L=b[y];return L===void 0&&(L=new Qo,b[y]=L),L.getTargetRaySpace()},this.getControllerGrip=function(y){let L=b[y];return L===void 0&&(L=new Qo,b[y]=L),L.getGripSpace()},this.getHand=function(y){let L=b[y];return L===void 0&&(L=new Qo,b[y]=L),L.getHandSpace()};function F(y){const L=S.indexOf(y.inputSource);if(L===-1)return;const Z=b[L];Z!==void 0&&(Z.update(y.inputSource,y.frame,c||o),Z.dispatchEvent({type:y.type,data:y.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",J);for(let y=0;y<b.length;y++){const L=S[y];L!==null&&(S[y]=null,b[y].disconnect(L))}z=null,I=null,m.reset();for(const y in f)delete f[y];if(e.setRenderTarget(w),d=null,h=null,g=null,s=null,x=null,N.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),P!==null){const y=P.camera;y.fov=P.fov,y.zoom=P.zoom,y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){r=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){a=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(y){c=y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(y){if(s=y,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,K=null,A=null;M.depth&&(A=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=M.stencil?Zi:vi,K=M.stencil?ar:ti);const R={colorFormat:t.RGBA8,depthFormat:A,scaleFactor:r};g=this.getBinding(),h=g.createProjectionLayer(R),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new zn(h.textureWidth,h.textureHeight,{format:Fn,type:yn,depthTexture:new cr(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new zn(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),N.setContext(s),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(y){for(let L=0;L<y.removed.length;L++){const Z=y.removed[L],K=S.indexOf(Z);K>=0&&(S[K]=null,b[K].disconnect(Z))}for(let L=0;L<y.added.length;L++){const Z=y.added[L];let K=S.indexOf(Z);if(K===-1){for(let R=0;R<b.length;R++)if(R>=S.length){S.push(Z),K=R;break}else if(S[R]===null){S[R]=Z,K=R;break}if(K===-1)break}const A=b[K];A&&A.connect(Z)}}const Y=new H,W=new H;function ne(y,L,Z){Y.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(Z.matrixWorld);const K=Y.distanceTo(W),A=L.projectionMatrix.elements,R=Z.projectionMatrix.elements,G=A[14]/(A[10]-1),q=A[14]/(A[10]+1),ie=(A[9]+1)/A[5],k=(A[9]-1)/A[5],te=(A[8]-1)/A[0],se=(R[8]+1)/R[0],$=G*te,ce=G*se,ye=K/(-te+se),be=ye*-te;if(L.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(be),y.translateZ(ye),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),A[10]===-1)y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const Q=G+ye,ze=q+ye,Ae=$-be,X=ce+(K-be),E=ie*q/ze*Q,le=k*q/ze*Q;y.projectionMatrix.makePerspective(Ae,X,E,le,Q,ze),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function j(y,L){L===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(L.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(s===null)return;let L=y.near,Z=y.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),V.near=O.near=C.near=L,V.far=O.far=C.far=Z,(z!==V.near||I!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,I=V.far),V.layers.mask=y.layers.mask|6,C.layers.mask=V.layers.mask&-5,O.layers.mask=V.layers.mask&-3;const K=y.parent,A=V.cameras;j(V,K);for(let R=0;R<A.length;R++)j(A[R],K);A.length===2?ne(V,C,O):V.projectionMatrix.copy(C.projectionMatrix),P===null&&y.isPerspectiveCamera&&(P={camera:y,fov:y.fov,zoom:y.zoom}),ue(y,V,K)};function ue(y,L,Z){Z===null?y.matrix.copy(L.matrixWorld):(y.matrix.copy(Z.matrixWorld),y.matrix.invert(),y.matrix.multiply(L.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=Zr*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(y){l=y,h!==null&&(h.fixedFoveation=y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(y){return f[y]};let ee=null;function ae(y,L){if(u=L.getViewerPose(c||o),p=L,u!==null){const Z=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let K=!1;Z.length!==V.cameras.length&&(V.cameras.length=0,K=!0);for(let q=0;q<Z.length;q++){const ie=Z[q];let k=null;if(d!==null)k=d.getViewport(ie);else{const se=g.getViewSubImage(h,ie);k=se.viewport,q===0&&(e.setRenderTargetTextures(x,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(x))}let te=U[q];te===void 0&&(te=new wn,te.layers.enable(q),te.viewport=new Ft,U[q]=te),te.matrix.fromArray(ie.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ie.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(k.x,k.y,k.width,k.height),q===0&&(V.matrix.copy(te.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),K===!0&&V.cameras.push(te)}const A=s.enabledFeatures;if(A&&A.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){g=i.getBinding();const q=g.getDepthInformation(Z[0]);q&&q.isValid&&q.texture&&m.init(q,s.renderState)}if(A&&A.includes("camera-access")&&_){e.state.unbindTexture(),g=i.getBinding();for(let q=0;q<Z.length;q++){const ie=Z[q].camera;if(ie){let k=f[ie];k||(k=new bu,f[ie]=k);const te=g.getCameraImage(ie);k.sourceTexture=te}}}}for(let Z=0;Z<b.length;Z++){const K=S[Z],A=b[Z];K!==null&&A!==void 0&&A.update(K,L,c||o)}ee&&ee(y,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),p=null}const N=new Jf;N.setAnimationLoop(ae),this.setAnimationLoop=function(y){ee=y},this.dispose=function(){}}}const Rx=new xt,np=new it;np.set(-1,0,0,0,1,0,0,0,1);function Px(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,w,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),g(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),p(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(np),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function g(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const S=b.program;i.uniformBlockBinding(x,S)}function c(x,b){let S=s[x.id];S===void 0&&(m(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",M));const T=b.program;i.updateUBOMapping(x,T);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const b=g();x.__bindingPointIndex=b;const S=n.createBuffer(),T=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function g(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=s[x.id],S=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,P=S.length;v<P;v++){const C=S[v];if(Array.isArray(C))for(let O=0,U=C.length;O<U;O++)d(C[O],v,O,T);else d(C,v,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,b,S,T){if(_(x,b,S,T)===!0){const v=x.__offset,P=x.value;if(Array.isArray(P)){let C=0;for(let O=0;O<P.length;O++){const U=P[O],V=f(U);p(U,x.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(P,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function p(x,b,S){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,S)}function _(x,b,S,T){const v=x.value,P=b+"_"+S;if(T[P]===void 0)return typeof v=="number"||typeof v=="boolean"?T[P]=v:ArrayBuffer.isView(v)?T[P]=v.slice():T[P]=v.clone(),!0;{const C=T[P];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return T[P]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function m(x){const b=x.uniforms;let S=0;const T=16;for(let P=0,C=b.length;P<C;P++){const O=Array.isArray(b[P])?b[P]:[b[P]];for(let U=0,V=O.length;U<V;U++){const z=O[U],I=Array.isArray(z.value)?z.value:[z.value];for(let F=0,B=I.length;F<B;F++){const J=I[F],Y=f(J),W=S%T,ne=W%Y.boundary,j=W+ne;S+=ne,j!==0&&T-j<Y.storage&&(S+=T-j),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Y.storage}}}const v=S%T;return v>0&&(S+=T-v),x.__size=S,x.__cache={},this}function f(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){const b=x.target;b.removeEventListener("dispose",M);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const Ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function Dx(){return li===null&&(li=new vu(Ix,16,16,ss,ni),li.name="DFG_LUT",li.minFilter=tn,li.magFilter=tn,li.wrapS=hi,li.wrapT=hi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class ip{constructor(e={}){const{canvas:t=Sf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=d,m=new Set([ll,al,ol]),f=new Set([yn,ti,or,ar,il,sl]),M=new Uint32Array(4),w=new Int32Array(4),x=new H;let b=null,S=null;const T=[],v=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let O=!1,U=null,V=null,z=null,I=null;this._outputColorSpace=cn;let F=0,B=0,J=null,Y=-1,W=null;const ne=new Ft,j=new Ft;let ue=null;const ee=new ht(0);let ae=0,N=t.width,y=t.height,L=1,Z=null,K=null;const A=new Ft(0,0,N,y),R=new Ft(0,0,N,y);let G=!1;const q=new pl;let ie=!1,k=!1;const te=new xt,se=new H,$=new Ft,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function be(){return J===null?L:1}let Q=i;function ze(D,re){return t.getContext(D,re)}let Ae,X,E,le,he,pe,Ee,Ce,_e,xe,Re,$e,Ne,Pe,Je,et,ot,oe,Le,ve,Ie,ke,Me;try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),Q===null){const re="webgl2";if(Q=ze(re,D),Q===null)throw ze(re)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(D){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),_t("WebGLRenderer: "+D.message),D}function Ze(){Ae=new Nv(Q),Ae.init(),Ie=new tp(Q,Ae),X=new Ev(Q,Ae,e,Ie),E=new bx(Q,Ae),X.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),V=Q.createFramebuffer(),z=Q.createFramebuffer(),I=Q.createFramebuffer(),le=new Fv(Q),he=new cx,pe=new Ex(Q,Ae,E,he,X,Ie,le),Ee=new Dv(C),Ce=new k0(Q),ke=new Sv(Q,Ce),_e=new Uv(Q,Ce,le,ke),xe=new kv(Q,_e,Ce,ke,le),oe=new zv(Q,X,pe),Je=new wv(he),Re=new lx(C,Ee,Ae,X,ke,Je),$e=new Px(C,he),Ne=new hx,Pe=new _x(Ae),ot=new Mv(C,Ee,E,xe,p,l),et=new Sx(C,xe,X),Me=new Lx(Q,le,X,E),Le=new bv(Q,Ae,le),ve=new Ov(Q,Ae,le),le.programs=Re.programs,C.capabilities=X,C.extensions=Ae,C.properties=he,C.renderLists=Ne,C.shadowMap=et,C.state=E,C.info=le}_!==yn&&(P=new Vv(_,t.width,t.height,a,s,r));const Xe=new Cx(C,Q);this.xr=Xe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const D=Ae.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ae.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(D){D!==void 0&&(L=D,this.setSize(N,y,!1))},this.getSize=function(D){return D.set(N,y)},this.setSize=function(D,re,me=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=D,y=re,t.width=Math.floor(D*L),t.height=Math.floor(re*L),me===!0&&(t.style.width=D+"px",t.style.height=re+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,D,re)},this.getDrawingBufferSize=function(D){return D.set(N*L,y*L).floor()},this.setDrawingBufferSize=function(D,re,me){N=D,y=re,L=me,t.width=Math.floor(D*me),t.height=Math.floor(re*me),this.setViewport(0,0,D,re)},this.setEffects=function(D){if(_===yn){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let re=0;re<D.length;re++)if(D[re].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(ne)},this.getViewport=function(D){return D.copy(A)},this.setViewport=function(D,re,me,de){D.isVector4?A.set(D.x,D.y,D.z,D.w):A.set(D,re,me,de),E.viewport(ne.copy(A).multiplyScalar(L).round())},this.getScissor=function(D){return D.copy(R)},this.setScissor=function(D,re,me,de){D.isVector4?R.set(D.x,D.y,D.z,D.w):R.set(D,re,me,de),E.scissor(j.copy(R).multiplyScalar(L).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(D){E.setScissorTest(G=D)},this.setOpaqueSort=function(D){Z=D},this.setTransparentSort=function(D){K=D},this.getClearColor=function(D){return D.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(D=!0,re=!0,me=!0){let de=0;if(D){let fe=!1;if(J!==null){const Fe=J.texture.format;fe=m.has(Fe)}if(fe){const Fe=J.texture.type,Ge=f.has(Fe),Ue=ot.getClearColor(),We=ot.getClearAlpha(),Ye=Ue.r,ct=Ue.g,pt=Ue.b;Ge?(M[0]=Ye,M[1]=ct,M[2]=pt,M[3]=We,Q.clearBufferuiv(Q.COLOR,0,M)):(w[0]=Ye,w[1]=ct,w[2]=pt,w[3]=We,Q.clearBufferiv(Q.COLOR,0,w))}else de|=Q.COLOR_BUFFER_BIT}re&&(de|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(de|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&Q.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),U=D},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),ot.dispose(),Ne.dispose(),Pe.dispose(),he.dispose(),Ee.dispose(),xe.dispose(),ke.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",sh),Xe.removeEventListener("sessionend",rh),us.stop()};function It(D){D.preventDefault(),Ac("WebGLRenderer: Context Lost."),O=!0}function Et(){Ac("WebGLRenderer: Context Restored."),O=!1;const D=le.autoReset,re=et.enabled,me=et.autoUpdate,de=et.needsUpdate,fe=et.type;Ze(),le.autoReset=D,et.enabled=re,et.autoUpdate=me,et.needsUpdate=de,et.type=fe}function Hn(D){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ri(D){const re=D.target;re.removeEventListener("dispose",ri),Up(re)}function Up(D){Op(D),he.remove(D)}function Op(D){const re=he.get(D).programs;re!==void 0&&(re.forEach(function(me){Re.releaseProgram(me)}),D.isShaderMaterial&&Re.releaseShaderCache(D))}this.renderBufferDirect=function(D,re,me,de,fe,Fe){re===null&&(re=ce);const Ge=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,Ue=kp(D,re,me,de,fe);E.setMaterial(de,Ge);let We=me.index,Ye=1;if(de.wireframe===!0){if(We=_e.getWireframeAttribute(me),We===void 0)return;Ye=2}const ct=me.drawRange,pt=me.attributes.position;let qe=ct.start*Ye,wt=(ct.start+ct.count)*Ye;Fe!==null&&(qe=Math.max(qe,Fe.start*Ye),wt=Math.min(wt,(Fe.start+Fe.count)*Ye)),We!==null?(qe=Math.max(qe,0),wt=Math.min(wt,We.count)):pt!=null&&(qe=Math.max(qe,0),wt=Math.min(wt,pt.count));const qt=wt-qe;if(qt<0||qt===1/0)return;ke.setup(fe,de,Ue,me,We);let Nt,Lt=Le;if(We!==null&&(Nt=Ce.get(We),Lt=ve,Lt.setIndex(Nt)),fe.isMesh)de.wireframe===!0?(E.setLineWidth(de.wireframeLinewidth*be()),Lt.setMode(Q.LINES)):Lt.setMode(Q.TRIANGLES);else if(fe.isLine){let on=de.linewidth;on===void 0&&(on=1),E.setLineWidth(on*be()),fe.isLineSegments?Lt.setMode(Q.LINES):fe.isLineLoop?Lt.setMode(Q.LINE_LOOP):Lt.setMode(Q.LINE_STRIP)}else fe.isPoints?Lt.setMode(Q.POINTS):fe.isSprite&&Lt.setMode(Q.TRIANGLES);if(fe.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Lt.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const on=fe._multiDrawStarts,Ve=fe._multiDrawCounts,hn=fe._multiDrawCount,vt=We?Ce.get(We).bytesPerElement:1,Cn=he.get(de).currentProgram.getUniforms();for(let oi=0;oi<hn;oi++)Cn.setValue(Q,"_gl_DrawID",oi),Lt.render(on[oi]/vt,Ve[oi])}else if(fe.isInstancedMesh)Lt.renderInstances(qe,qt,fe.count);else if(me.isInstancedBufferGeometry){const on=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ve=Math.min(me.instanceCount,on);Lt.renderInstances(qe,qt,Ve)}else Lt.render(qe,qt)};function ih(D,re,me,de){U!==null&&D.isNodeMaterial&&U.setObject(de,D),ie===!0&&Je.setState(D,me,!1),D.transparent===!0&&D.side===Dn&&D.forceSinglePass===!1?(D.side=gn,D.needsUpdate=!0,_o(D,re,de),D.side=ns,D.needsUpdate=!0,_o(D,re,de),D.side=Dn):_o(D,re,de)}this.compile=function(D,re,me=null){me===null&&(me=D),U!==null&&U.renderStart(D,re,me),S=Pe.get(me),S.init(re),v.push(S),me.traverseVisible(function(fe){fe.isLight&&fe.layers.test(re.layers)&&(S.pushLight(fe),fe.castShadow&&S.pushShadow(fe))}),D!==me&&D.traverseVisible(function(fe){fe.isLight&&fe.layers.test(re.layers)&&(S.pushLight(fe),fe.castShadow&&S.pushShadow(fe))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),k=this.localClippingEnabled,ie=Je.init(this.clippingPlanes,k),ie===!0&&Je.setGlobalState(this.clippingPlanes,re),U!==null&&et.render(S.state.shadowsArray,me,re);const de=new Set;return D.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Fe=fe.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ue=Fe[Ge];ih(Ue,me,re,fe),de.add(Ue)}else ih(Fe,me,re,fe),de.add(Fe)}),S=v.pop(),U!==null&&U.renderEnd(),de},this.compileAsync=function(D,re,me=null){const de=this.compile(D,re,me);return new Promise(fe=>{function Fe(){if(de.forEach(function(Ge){const We=he.get(Ge).currentProgram;(We===void 0||We.isReady())&&de.delete(Ge)}),de.size===0){fe(D);return}setTimeout(Fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Il=null;function Fp(D){Il&&Il(D)}function sh(){us.stop()}function rh(){us.start()}const us=new Jf;us.setAnimationLoop(Fp),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(D){Il=D,Xe.setAnimationLoop(D),D===null?us.stop():us.start()},Xe.addEventListener("sessionstart",sh),Xe.addEventListener("sessionend",rh),this.render=function(D,re){if(re!==void 0&&re.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;U!==null&&U.renderStart(D,re);const me=Xe.enabled===!0&&Xe.isPresenting===!0,de=P!==null&&(J===null||me)&&P.begin(C,J);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(re),re=Xe.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,re,J),S=Pe.get(D,v.length),S.init(re),S.state.textureUnits=pe.getTextureUnits(),v.push(S),te.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),q.setFromProjectionMatrix(te,Kn,re.reversedDepth),k=this.localClippingEnabled,ie=Je.init(this.clippingPlanes,k),b=Ne.get(D,T.length),b.init(),T.push(b),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=C.xr.getDepthSensingMesh();Ge!==null&&Dl(Ge,re,-1/0,C.sortObjects)}Dl(D,re,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(S.state.lightsArray),C.sortObjects===!0&&b.sort(Z,K),ye=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ye&&ot.addToRenderList(b,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Je.beginShadows();const fe=S.state.shadowsArray;if(et.render(fe,D,re),ie===!0&&Je.endShadows(),(de&&P.hasRenderPass())===!1){const Ge=b.opaque,Ue=b.transmissive;if(S.setupLights(),re.isArrayCamera){const We=re.cameras;if(Ue.length>0)for(let Ye=0,ct=We.length;Ye<ct;Ye++){const pt=We[Ye];ah(Ge,Ue,D,pt)}ye&&ot.render(D);for(let Ye=0,ct=We.length;Ye<ct;Ye++){const pt=We[Ye];oh(b,D,pt,pt.viewport)}}else Ue.length>0&&ah(Ge,Ue,D,re),ye&&ot.render(D),oh(b,D,re)}J!==null&&B===0&&(pe.updateMultisampleRenderTarget(J),pe.updateRenderTargetMipmap(J)),de&&P.end(C),D.isScene===!0&&D.onAfterRender(C,D,re),ke.resetDefaultState(),Y=-1,W=null,v.pop(),v.length>0?(S=v[v.length-1],pe.setTextureUnits(S.state.textureUnits),ie===!0&&Je.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?b=T[T.length-1]:b=null,U!==null&&U.renderEnd()};function Dl(D,re,me,de){if(D.visible===!1)return;if(D.layers.test(re.layers)){if(D.isGroup)me=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(re);else if(D.isLightProbeGrid)S.pushLightProbeGrid(D);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(q)){de&&$.setFromMatrixPosition(D.matrixWorld).applyMatrix4(te);const Ge=xe.update(D),Ue=D.material;Ue.visible&&b.push(D,Ge,Ue,me,$.z,null,re)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(q))){const Ge=xe.update(D),Ue=D.material;if(de&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),$.copy(D.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),$.copy(Ge.boundingSphere.center)),$.applyMatrix4(D.matrixWorld).applyMatrix4(te)),Array.isArray(Ue)){const We=Ge.groups;for(let Ye=0,ct=We.length;Ye<ct;Ye++){const pt=We[Ye],qe=Ue[pt.materialIndex];qe&&qe.visible&&b.push(D,Ge,qe,me,$.z,pt,re)}}else Ue.visible&&b.push(D,Ge,Ue,me,$.z,null,re)}}const Fe=D.children;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++)Dl(Fe[Ge],re,me,de)}function oh(D,re,me,de){const{opaque:fe,transmissive:Fe,transparent:Ge}=D;S.setupLightsView(me),ie===!0&&Je.setGlobalState(C.clippingPlanes,me),de&&E.viewport(ne.copy(de)),fe.length>0&&go(fe,re,me),Fe.length>0&&go(Fe,re,me),Ge.length>0&&go(Ge,re,me),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ah(D,re,me,de){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[de.id]===void 0){const qe=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[de.id]=new zn(1,1,{generateMipmaps:!0,type:qe?ni:yn,minFilter:Ji,samples:Math.max(4,X.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Fe=S.state.transmissionRenderTarget[de.id],Ge=de.viewport||ne;Fe.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Ue=C.getRenderTarget(),We=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(Fe),C.getClearColor(ee),ae=C.getClearAlpha(),ae<1&&C.setClearColor(16777215,.5),C.clear(),ye&&ot.render(me);const ct=C.toneMapping;C.toneMapping=Qn;const pt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),S.setupLightsView(de),ie===!0&&Je.setGlobalState(C.clippingPlanes,de),go(D,me,de),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let wt=0,qt=re.length;wt<qt;wt++){const Nt=re[wt],{object:Lt,geometry:on,material:Ve,group:hn}=Nt;if(Ve.side===Dn&&Lt.layers.test(de.layers)){const vt=Ve.side;Ve.side=gn,Ve.needsUpdate=!0,lh(Lt,me,de,on,Ve,hn),Ve.side=vt,Ve.needsUpdate=!0,qe=!0}}qe===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}C.setRenderTarget(Ue,We,Ye),C.setClearColor(ee,ae),pt!==void 0&&(de.viewport=pt),C.toneMapping=ct}function go(D,re,me){const de=re.isScene===!0?re.overrideMaterial:null;for(let fe=0,Fe=D.length;fe<Fe;fe++){const Ge=D[fe],{object:Ue,geometry:We,group:Ye}=Ge;let ct=Ge.material;ct.allowOverride===!0&&de!==null&&(ct=de),Ue.layers.test(me.layers)&&lh(Ue,re,me,We,ct,Ye)}}function lh(D,re,me,de,fe,Fe){U!==null&&fe.isNodeMaterial&&U.setObject(D,fe),D.onBeforeRender(C,re,me,de,fe,Fe),D.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),fe.onBeforeRender(C,re,me,de,D,Fe),fe.transparent===!0&&fe.side===Dn&&fe.forceSinglePass===!1?(fe.side=gn,fe.needsUpdate=!0,C.renderBufferDirect(me,re,de,fe,D,Fe),fe.side=ns,fe.needsUpdate=!0,C.renderBufferDirect(me,re,de,fe,D,Fe),fe.side=Dn):C.renderBufferDirect(me,re,de,fe,D,Fe),D.onAfterRender(C,re,me,de,fe,Fe)}function _o(D,re,me){re.isScene!==!0&&(re=ce);const de=he.get(D),fe=S.state.lights,Fe=S.state.shadowsArray,Ge=fe.state.version,Ue=Re.getParameters(D,fe.state,Fe,re,me,S.state.lightProbeGridArray),We=Re.getProgramCacheKey(Ue);let Ye=de.programs;de.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?re.environment:null,de.fog=re.fog;const ct=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;de.envMap=Ee.get(D.envMap||de.environment,ct),de.envMapRotation=de.environment!==null&&D.envMap===null?re.environmentRotation:D.envMapRotation,Ye===void 0&&(D.addEventListener("dispose",ri),Ye=new Map,de.programs=Ye);let pt=Ye.get(We);if(pt!==void 0){if(de.currentProgram===pt&&de.lightsStateVersion===Ge)return uh(D,Ue),pt}else Ue.uniforms=Re.getUniforms(D),U!==null&&D.isNodeMaterial&&U.build(D,me,Ue),D.onBeforeCompile(Ue,C),pt=Re.acquireProgram(Ue,We),Ye.set(We,pt),de.uniforms=Ue.uniforms;const qe=de.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qe.clippingPlanes=Je.uniform),uh(D,Ue),de.needsLights=Vp(D),de.lightsStateVersion=Ge,de.needsLights&&(qe.ambientLightColor.value=fe.state.ambient,qe.lightProbe.value=fe.state.probe,qe.sunLights.value=fe.state.sun,qe.sunLightShadows.value=fe.state.sunShadow,qe.directionalLights.value=fe.state.directional,qe.directionalLightShadows.value=fe.state.directionalShadow,qe.spotLights.value=fe.state.spot,qe.spotLightShadows.value=fe.state.spotShadow,qe.rectAreaLights.value=fe.state.rectArea,qe.ltc_1.value=fe.state.rectAreaLTC1,qe.ltc_2.value=fe.state.rectAreaLTC2,qe.pointLights.value=fe.state.point,qe.pointLightShadows.value=fe.state.pointShadow,qe.hemisphereLights.value=fe.state.hemi,qe.sunShadowMatrix.value=fe.state.sunShadowMatrix,qe.sunShadowCascade.value=fe.state.sunShadowCascade,qe.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,qe.spotLightMatrix.value=fe.state.spotLightMatrix,qe.spotLightMap.value=fe.state.spotLightMap,qe.pointShadowMatrix.value=fe.state.pointShadowMatrix),de.lightProbeGrid=S.state.lightProbeGridArray.length>0,de.currentProgram=pt,de.uniformsList=null,pt}function ch(D){if(D.uniformsList===null){const re=D.currentProgram.getUniforms();D.uniformsList=jo.seqWithValue(re.seq,D.uniforms)}return D.uniformsList}function uh(D,re){const me=he.get(D);me.outputColorSpace=re.outputColorSpace,me.batching=re.batching,me.batchingColor=re.batchingColor,me.instancing=re.instancing,me.instancingColor=re.instancingColor,me.instancingMorph=re.instancingMorph,me.skinning=re.skinning,me.morphTargets=re.morphTargets,me.morphNormals=re.morphNormals,me.morphColors=re.morphColors,me.morphTargetsCount=re.morphTargetsCount,me.numClippingPlanes=re.numClippingPlanes,me.numIntersection=re.numClipIntersection,me.vertexAlphas=re.vertexAlphas,me.vertexTangents=re.vertexTangents,me.toneMapping=re.toneMapping}function zp(D,re){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;x.setFromMatrixPosition(re.matrixWorld);for(let me=0,de=D.length;me<de;me++){const fe=D[me];if(fe.texture!==null&&fe.boundingBox.containsPoint(x))return fe}return null}function kp(D,re,me,de,fe){re.isScene!==!0&&(re=ce),pe.resetTextureUnits();const Fe=re.fog,Ge=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?re.environment:null,Ue=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:gt.workingColorSpace,We=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,Ye=Ee.get(de.envMap||Ge,We),ct=de.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pt=!!me.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),qe=!!me.morphAttributes.position,wt=!!me.morphAttributes.normal,qt=!!me.morphAttributes.color;let Nt=Qn;de.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Nt=C.toneMapping);const Lt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,on=Lt!==void 0?Lt.length:0,Ve=he.get(de),hn=S.state.lights;if(ie===!0&&(k===!0||D!==W)){const Dt=D===W&&de.id===Y;Je.setState(de,D,Dt)}let vt=!1;de.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==hn.state.version||Ve.outputColorSpace!==Ue||fe.isBatchedMesh&&Ve.batching===!1||!fe.isBatchedMesh&&Ve.batching===!0||fe.isBatchedMesh&&Ve.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&Ve.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&Ve.instancing===!1||!fe.isInstancedMesh&&Ve.instancing===!0||fe.isSkinnedMesh&&Ve.skinning===!1||!fe.isSkinnedMesh&&Ve.skinning===!0||fe.isInstancedMesh&&Ve.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&Ve.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&Ve.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&Ve.instancingMorph===!1&&fe.morphTexture!==null||Ve.envMap!==Ye||de.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Je.numPlanes||Ve.numIntersection!==Je.numIntersection)||Ve.vertexAlphas!==ct||Ve.vertexTangents!==pt||Ve.morphTargets!==qe||Ve.morphNormals!==wt||Ve.morphColors!==qt||Ve.toneMapping!==Nt||Ve.morphTargetsCount!==on||!!Ve.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ve.__version=de.version);let Cn=Ve.currentProgram;vt===!0&&(Cn=_o(de,re,fe),U&&de.isNodeMaterial&&U.onUpdateProgram(de,Cn,Ve));let oi=!1,Vi=!1,Is=!1;const Rt=Cn.getUniforms(),Gt=Ve.uniforms;if(E.useProgram(Cn.program)&&(oi=!0,Vi=!0,Is=!0),de.id!==Y&&(Y=de.id,Vi=!0),Ve.needsLights){const Dt=zp(S.state.lightProbeGridArray,fe);Ve.lightProbeGrid!==Dt&&(Ve.lightProbeGrid=Dt,Vi=!0)}if(oi||W!==D){E.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Rt.setValue(Q,"projectionMatrix",D.projectionMatrix),Rt.setValue(Q,"viewMatrix",D.matrixWorldInverse);const Hi=Rt.map.cameraPosition;Hi!==void 0&&Hi.setValue(Q,se.setFromMatrixPosition(D.matrixWorld)),X.logarithmicDepthBuffer&&Rt.setValue(Q,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Rt.setValue(Q,"isOrthographic",D.isOrthographicCamera===!0),W!==D&&(W=D,Vi=!0,Is=!0)}if(Ve.needsLights&&(hn.state.sunShadowMap.length>0&&Rt.setValue(Q,"sunShadowMap",hn.state.sunShadowMap,pe),hn.state.directionalShadowMap.length>0&&Rt.setValue(Q,"directionalShadowMap",hn.state.directionalShadowMap,pe),hn.state.spotShadowMap.length>0&&Rt.setValue(Q,"spotShadowMap",hn.state.spotShadowMap,pe),hn.state.pointShadowMap.length>0&&Rt.setValue(Q,"pointShadowMap",hn.state.pointShadowMap,pe)),fe.isSkinnedMesh){Rt.setOptional(Q,fe,"bindMatrix"),Rt.setOptional(Q,fe,"bindMatrixInverse");const Dt=fe.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(Q,"boneTexture",Dt.boneTexture,pe))}fe.isBatchedMesh&&(Rt.setOptional(Q,fe,"batchingTexture"),Rt.setValue(Q,"batchingTexture",fe._matricesTexture,pe),Rt.setOptional(Q,fe,"batchingIdTexture"),Rt.setValue(Q,"batchingIdTexture",fe._indirectTexture,pe),Rt.setOptional(Q,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Rt.setValue(Q,"batchingColorTexture",fe._colorsTexture,pe));const Gi=me.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&oe.update(fe,me,Cn),(Vi||Ve.receiveShadow!==fe.receiveShadow)&&(Ve.receiveShadow=fe.receiveShadow,Rt.setValue(Q,"receiveShadow",fe.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&re.environment!==null&&(Gt.envMapIntensity.value=re.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Dx()),Vi){if(Rt.setValue(Q,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&Bp(Gt,Is),Fe&&de.fog===!0&&$e.refreshFogUniforms(Gt,Fe),$e.refreshMaterialUniforms(Gt,de,L,y,S.state.transmissionRenderTarget[D.id]),Ve.needsLights&&Ve.lightProbeGrid){const Dt=Ve.lightProbeGrid;Gt.probesSH.value=Dt.texture,Gt.probesMin.value.copy(Dt.boundingBox.min),Gt.probesMax.value.copy(Dt.boundingBox.max),Gt.probesResolution.value.copy(Dt.resolution)}jo.upload(Q,ch(Ve),Gt,pe)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(jo.upload(Q,ch(Ve),Gt,pe),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Rt.setValue(Q,"center",fe.center),Rt.setValue(Q,"modelViewMatrix",fe.modelViewMatrix),Rt.setValue(Q,"normalMatrix",fe.normalMatrix),Rt.setValue(Q,"modelMatrix",fe.matrixWorld),de.uniformsGroups!==void 0){const Dt=de.uniformsGroups;for(let Hi=0,Ds=Dt.length;Hi<Ds;Hi++){const dh=Dt[Hi];Me.update(dh,Cn),Me.bind(dh,Cn)}}return Cn}function Bp(D,re){D.ambientLightColor.needsUpdate=re,D.lightProbe.needsUpdate=re,D.sunLights.needsUpdate=re,D.sunLightShadows.needsUpdate=re,D.directionalLights.needsUpdate=re,D.directionalLightShadows.needsUpdate=re,D.pointLights.needsUpdate=re,D.pointLightShadows.needsUpdate=re,D.spotLights.needsUpdate=re,D.spotLightShadows.needsUpdate=re,D.rectAreaLights.needsUpdate=re,D.hemisphereLights.needsUpdate=re}function Vp(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(D,re,me){const de=he.get(D);de.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),he.get(D.texture).__webglTexture=re,he.get(D.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:me,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,re){const me=he.get(D);me.__webglFramebuffer=re,me.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(D,re=0,me=0){J=D,F=re,B=me;let de=null,fe=!1,Fe=!1;if(D){const Ue=he.get(D);if(Ue.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,Ue.__webglFramebuffer),ne.copy(D.viewport),j.copy(D.scissor),ue=D.scissorTest,E.viewport(ne),E.scissor(j),E.setScissorTest(ue),Y=-1;return}else if(Ue.__webglFramebuffer===void 0)pe.setupRenderTarget(D);else if(Ue.__hasExternalTextures)pe.rebindTextures(D,he.get(D.texture).__webglTexture,he.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ct=D.depthTexture;if(Ue.__boundDepthTexture!==ct){if(ct!==null&&he.has(ct)&&(D.width!==ct.image.width||D.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(D)}}const We=D.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const Ye=he.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ye[re])?de=Ye[re][me]:de=Ye[re],fe=!0):D.samples>0&&pe.useMultisampledRTT(D)===!1?de=he.get(D).__webglMultisampledFramebuffer:Array.isArray(Ye)?de=Ye[me]:de=Ye,ne.copy(D.viewport),j.copy(D.scissor),ue=D.scissorTest}else ne.copy(A).multiplyScalar(L).floor(),j.copy(R).multiplyScalar(L).floor(),ue=G;if(me!==0&&(de=V),E.bindFramebuffer(Q.FRAMEBUFFER,de)&&E.drawBuffers(D,de),E.viewport(ne),E.scissor(j),E.setScissorTest(ue),fe){const Ue=he.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue.__webglTexture,me)}else if(Fe){const Ue=re;for(let We=0;We<D.textures.length;We++){const Ye=he.get(D.textures[We]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+We,Ye.__webglTexture,me,Ue)}}else if(D!==null&&me!==0){const Ue=he.get(D.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ue.__webglTexture,me)}Y=-1};function hh(D){const re=he.get(D);return(re.__readFormat!==D.format||re.__readType!==D.type)&&(re.__readFormat=D.format,re.__readType=D.type,re.__formatReadable=X.textureFormatReadable(D.format),re.__typeReadable=X.textureTypeReadable(D.type)),re}this.readRenderTargetPixels=function(D,re,me,de,fe,Fe,Ge,Ue=0){if(!(D&&D.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=he.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){E.bindFramebuffer(Q.FRAMEBUFFER,We);try{const Ye=D.textures[Ue],ct=Ye.format,pt=Ye.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ue);const qe=hh(Ye);if(qe.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=D.width-de&&me>=0&&me<=D.height-fe&&Q.readPixels(re,me,de,fe,Ie.convert(ct),Ie.convert(pt),Fe)}finally{const Ye=J!==null?he.get(J).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(D,re,me,de,fe,Fe,Ge,Ue=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=he.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(re>=0&&re<=D.width-de&&me>=0&&me<=D.height-fe){E.bindFramebuffer(Q.FRAMEBUFFER,We);const Ye=D.textures[Ue],ct=Ye.format,pt=Ye.type;D.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ue);const qe=hh(Ye);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,wt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Fe.byteLength,Q.STREAM_READ),Q.readPixels(re,me,de,fe,Ie.convert(ct),Ie.convert(pt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const qt=J!==null?he.get(J).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,qt);const Nt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Mm(Q,Nt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,wt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Fe),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(wt),Q.deleteSync(Nt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,re=null,me=0){const de=Math.pow(2,-me),fe=Math.floor(D.image.width*de),Fe=Math.floor(D.image.height*de),Ge=re!==null?re.x:0,Ue=re!==null?re.y:0;pe.setTexture2D(D,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,me,0,0,Ge,Ue,fe,Fe),E.unbindTexture()},this.copyTextureToTexture=function(D,re,me=null,de=null,fe=0,Fe=0){let Ge,Ue,We,Ye,ct,pt,qe,wt,qt;const Nt=D.isCompressedTexture?D.mipmaps[Fe]:D.image;if(me!==null)Ge=me.max.x-me.min.x,Ue=me.max.y-me.min.y,We=me.isBox3?me.max.z-me.min.z:1,Ye=me.min.x,ct=me.min.y,pt=me.isBox3?me.min.z:0;else{const Gt=Math.pow(2,-fe);Ge=Math.floor(Nt.width*Gt),Ue=Math.floor(Nt.height*Gt),D.isDataArrayTexture?We=Nt.depth:D.isData3DTexture?We=Math.floor(Nt.depth*Gt):We=1,Ye=0,ct=0,pt=0}de!==null?(qe=de.x,wt=de.y,qt=de.z):(qe=0,wt=0,qt=0);const Lt=Ie.convert(re.format),on=Ie.convert(re.type);let Ve;re.isData3DTexture?(pe.setTexture3D(re,0),Ve=Q.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(pe.setTexture2DArray(re,0),Ve=Q.TEXTURE_2D_ARRAY):(pe.setTexture2D(re,0),Ve=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,re.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,re.unpackAlignment);const hn=E.getParameter(Q.UNPACK_ROW_LENGTH),vt=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),Cn=E.getParameter(Q.UNPACK_SKIP_PIXELS),oi=E.getParameter(Q.UNPACK_SKIP_ROWS),Vi=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,Nt.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Nt.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ye),E.pixelStorei(Q.UNPACK_SKIP_ROWS,ct),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,pt);const Is=D.isDataArrayTexture||D.isData3DTexture,Rt=re.isDataArrayTexture||re.isData3DTexture;if(D.isDepthTexture){const Gt=he.get(D),Gi=he.get(re),Dt=he.get(Gt.__renderTarget),Hi=he.get(Gi.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,Dt.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ds=0;Ds<We;Ds++)Is&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,he.get(D).__webglTexture,fe,pt+Ds),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,he.get(re).__webglTexture,Fe,qt+Ds)),Q.blitFramebuffer(Ye,ct,Ge,Ue,qe,wt,Ge,Ue,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(fe!==0||D.isRenderTargetTexture||he.has(D)){const Gt=he.get(D),Gi=he.get(re);E.bindFramebuffer(Q.READ_FRAMEBUFFER,z),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,I);for(let Dt=0;Dt<We;Dt++)Is?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Gt.__webglTexture,fe,pt+Dt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Gt.__webglTexture,fe),Rt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Gi.__webglTexture,Fe,qt+Dt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Gi.__webglTexture,Fe),fe!==0?Q.blitFramebuffer(Ye,ct,Ge,Ue,qe,wt,Ge,Ue,Q.COLOR_BUFFER_BIT,Q.NEAREST):Rt?Q.copyTexSubImage3D(Ve,Fe,qe,wt,qt+Dt,Ye,ct,Ge,Ue):Q.copyTexSubImage2D(Ve,Fe,qe,wt,Ye,ct,Ge,Ue);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Rt?D.isDataTexture||D.isData3DTexture?Q.texSubImage3D(Ve,Fe,qe,wt,qt,Ge,Ue,We,Lt,on,Nt.data):re.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ve,Fe,qe,wt,qt,Ge,Ue,We,Lt,Nt.data):Q.texSubImage3D(Ve,Fe,qe,wt,qt,Ge,Ue,We,Lt,on,Nt):D.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Fe,qe,wt,Ge,Ue,Lt,on,Nt.data):D.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Fe,qe,wt,Nt.width,Nt.height,Lt,Nt.data):Q.texSubImage2D(Q.TEXTURE_2D,Fe,qe,wt,Ge,Ue,Lt,on,Nt);E.pixelStorei(Q.UNPACK_ROW_LENGTH,hn),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,vt),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Cn),E.pixelStorei(Q.UNPACK_SKIP_ROWS,oi),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,Vi),Fe===0&&re.generateMipmaps&&Q.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(D){he.get(D).__webglFramebuffer===void 0&&pe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?pe.setTextureCube(D,0):D.isData3DTexture?pe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?pe.setTexture2DArray(D,0):pe.setTexture2D(D,0),E.unbindTexture()},this.resetState=function(){F=0,B=0,J=null,E.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const Vt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:tl,AddEquation:vs,AddOperation:uf,AdditiveBlending:bc,AgXToneMapping:ru,AlphaFormat:du,AlwaysCompare:yf,AlwaysDepth:aa,AlwaysStencilFunc:pf,ArcCurve:Lf,ArrayCamera:Xf,BackSide:gn,BasicDepthPacking:df,Box3:os,BoxGeometry:ki,BufferAttribute:kn,BufferGeometry:Wt,ByteType:lu,Camera:Iu,CanvasTexture:Su,CatmullRomCurve3:wu,CineonToneMapping:iu,CircleGeometry:ml,ClampToEdgeWrapping:hi,Color:ht,ColorManagement:gt,ConeGeometry:Rs,ConstantAlphaFactor:af,ConstantColorFactor:rf,Controls:$f,CubeCamera:qf,CubeDepthTexture:Pf,CubeReflectionMapping:is,CubeRefractionMapping:Ts,CubeTexture:Mu,CubeUVReflectionMapping:io,CubicBezierCurve:Tu,CubicBezierCurve3:If,CullFaceBack:Sc,CullFaceFront:Gd,CullFaceNone:Vd,Curve:ii,CurvePath:Nf,CustomBlending:Wd,CustomToneMapping:su,CylinderGeometry:ro,Data3DTexture:Tf,DataArrayTexture:mu,DataTexture:vu,DepthFormat:vi,DepthStencilFormat:Zi,DepthTexture:cr,DirectionalLight:Du,DoubleSide:Dn,DstAlphaFactor:jd,DstColorFactor:tf,EllipseCurve:_l,EqualCompare:_f,EqualDepth:ca,EquirectangularReflectionMapping:$o,EquirectangularRefractionMapping:Jo,Euler:Fi,EventDispatcher:zi,ExternalTexture:bu,ExtrudeGeometry:pr,Float32BufferAttribute:bt,FloatType:On,FogExp2:fl,FrontSide:ns,Frustum:pl,GLSL3:Tc,GreaterCompare:vf,GreaterDepth:ha,GreaterEqualCompare:ul,GreaterEqualDepth:ua,Group:Ki,HalfFloatType:ni,HemisphereLight:Wf,IcosahedronGeometry:ao,ImageUtils:Ef,InstancedBufferAttribute:Cc,InstancedMesh:Rc,IntType:nl,KeepStencilOp:Ko,Layers:dl,LessCompare:gf,LessDepth:la,LessEqualCompare:cl,LessEqualDepth:rr,Light:Ml,LightShadow:Lu,Line:s0,LineBasicMaterial:xu,LineCurve:Au,LineCurve3:Df,LineDashedMaterial:U0,LinearFilter:tn,LinearMipmapLinearFilter:Ji,LinearMipmapNearestFilter:Zo,LinearSRGBColorSpace:$r,LinearToneMapping:tu,LinearTransfer:Jr,MOUSE:Ai,Material:ls,MathUtils:xn,Matrix2:Oc,Matrix3:it,Matrix4:xt,MaxEquation:$d,Mesh:_n,MeshBasicMaterial:so,MeshDepthMaterial:Gf,MeshDistanceMaterial:Hf,MeshStandardMaterial:Ks,MinEquation:Yd,MirroredRepeatWrapping:fa,MixOperation:cf,MultiplyBlending:wc,MultiplyOperation:eu,NearestFilter:jt,NearestMipmapLinearFilter:Pr,NearestMipmapNearestFilter:hf,NeutralToneMapping:ou,NeverCompare:mf,NeverDepth:oa,NoBlending:mi,NoColorSpace:Ei,NoToneMapping:Qn,NormalBlending:tr,NotEqualCompare:xf,NotEqualDepth:da,Object3D:Ht,ObjectSpaceNormalMap:ff,OneFactor:Zd,OneMinusConstantAlphaFactor:lf,OneMinusConstantColorFactor:of,OneMinusDstAlphaFactor:ef,OneMinusDstColorFactor:nf,OneMinusSrcAlphaFactor:jc,OneMinusSrcColorFactor:Qd,OrthographicCamera:lo,PCFShadowMap:er,PCFSoftShadowMap:Hd,PMREMGenerator:Fc,Path:Lc,PerspectiveCamera:wn,Plane:ui,PlaneGeometry:Ps,PointLight:Sl,Points:Rf,PointsMaterial:yu,PolyhedronGeometry:gl,QuadraticBezierCurve:Cu,QuadraticBezierCurve3:Ru,Quaternion:Oi,R11_EAC_Format:Ma,RED_GREEN_RGTC2_Format:Yr,RED_RGTC1_Format:Va,REVISION:el,RG11_EAC_Format:Xr,RGBAFormat:Fn,RGBAIntegerFormat:ll,RGBA_ASTC_10x10_Format:Ua,RGBA_ASTC_10x5_Format:Ia,RGBA_ASTC_10x6_Format:Da,RGBA_ASTC_10x8_Format:Na,RGBA_ASTC_12x10_Format:Oa,RGBA_ASTC_12x12_Format:Fa,RGBA_ASTC_4x4_Format:Ea,RGBA_ASTC_5x4_Format:wa,RGBA_ASTC_5x5_Format:Ta,RGBA_ASTC_6x5_Format:Aa,RGBA_ASTC_6x6_Format:Ca,RGBA_ASTC_8x5_Format:Ra,RGBA_ASTC_8x6_Format:Pa,RGBA_ASTC_8x8_Format:La,RGBA_BPTC_Format:za,RGBA_ETC2_EAC_Format:ya,RGBA_PVRTC_2BPPV1_Format:_a,RGBA_PVRTC_4BPPV1_Format:ga,RGBA_S3TC_DXT1_Format:zr,RGBA_S3TC_DXT3_Format:kr,RGBA_S3TC_DXT5_Format:Br,RGBFormat:fu,RGB_BPTC_SIGNED_Format:ka,RGB_BPTC_UNSIGNED_Format:Ba,RGB_ETC1_Format:va,RGB_ETC2_Format:xa,RGB_PVRTC_2BPPV1_Format:ma,RGB_PVRTC_4BPPV1_Format:pa,RGB_S3TC_DXT1_Format:Fr,RGFormat:ss,RGIntegerFormat:al,RawShaderMaterial:Vf,Ray:fr,Raycaster:Yf,RedFormat:rl,RedIntegerFormat:ol,ReinhardToneMapping:nu,RenderTarget:wf,RepeatWrapping:qr,ReverseSubtractEquation:Xd,SIGNED_R11_EAC_Format:Sa,SIGNED_RED_GREEN_RGTC2_Format:Ha,SIGNED_RED_RGTC1_Format:Ga,SIGNED_RG11_EAC_Format:ba,SRGBColorSpace:cn,SRGBTransfer:Tt,Scene:Cf,ShaderChunk:at,ShaderLib:Jn,ShaderMaterial:Vn,Shape:oo,ShapeUtils:bs,ShortType:cu,Sphere:as,SphereGeometry:vl,Spherical:Uc,SplineCurve:Pu,SrcAlphaFactor:Qc,SrcAlphaSaturateFactor:sf,SrcColorFactor:Kd,StaticDrawUsage:Mf,SubtractEquation:qd,SubtractiveBlending:Ec,TOUCH:wi,TangentSpaceNormalMap:Wa,Texture:sn,TextureSource:hl,TorusGeometry:xl,Triangle:Nn,TubeGeometry:yl,UVMapping:au,Uint16BufferAttribute:gu,Uint32BufferAttribute:_u,UniformsLib:De,UniformsUtils:Bf,UnsignedByteType:yn,UnsignedInt101111Type:hu,UnsignedInt248Type:ar,UnsignedInt5999Type:uu,UnsignedIntType:ti,UnsignedShort4444Type:il,UnsignedShort5551Type:sl,UnsignedShortType:or,VSMShadowMap:Zs,Vector2:Te,Vector3:H,Vector4:Ft,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:Nu,WebGLRenderTarget:zn,WebGLRenderer:ip,WebGLUtils:tp,WebGPUCoordinateSystem:lr,WebXRController:Qo,ZeroFactor:Jd,createCanvasElement:Sf,error:_t,log:Ac,warn:tt,warnOnce:Es},Symbol.toStringTag,{value:"Module"})),Ed={type:"change"},Uu={type:"start"},sp={type:"end"},Xo=new fr,wd=new ui,Nx=Math.cos(70*xn.DEG2RAD),Yt=new H,vn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dc=1e-6;class Ux extends $f{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Oi,this._lastTargetPosition=new H,this._quat=new Oi().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new H,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new H,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=zx.bind(this),this._onContextMenu=qx.bind(this),this._onMouseWheel=Vx.bind(this),this._onKeyDown=Gx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=kx.bind(this),this._onMouseMove=Bx.bind(this),this._interceptControlDown=Xx.bind(this),this._interceptControlUp=Yx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ed),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Yt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xo.origin.copy(this.object.position),Xo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xo.direction))<Nx?this.object.lookAt(this.target):(wd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xo.intersectPlane(wd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dc||this._lastTargetPosition.distanceToSquared(this.target)>dc?(this.dispatchEvent(Ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ox(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Fx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sp),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case Ai.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case Ai.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Uu)}function Bx(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vx(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Uu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sp))}function Gx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Hx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Uu)}function Wx(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function qx(n){this.enabled!==!1&&n.preventDefault()}function Xx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ar=new H;function Pn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ar.copy(e),Ar[i]=0,Ar.normalize();const c=.5*o/(o+a),u=1-Ar.angleTo(n)/l;return Math.sign(Ar[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Ou extends ki{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new H,c=new H,u=new H(e,t,i).divideScalar(2).subScalar(r),g=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=g.length/6,_=new H,m=.5/o;for(let f=0,M=0;f<g.length;f+=3,M+=2)switch(l.fromArray(g,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),g[f+0]=u.x*Math.sign(l.x)+c.x*r,g[f+1]=u.y*Math.sign(l.y)+c.y*r,g[f+2]=u.z*Math.sign(l.z)+c.z*r,h[f+0]=c.x,h[f+1]=c.y,h[f+2]=c.z,Math.floor(f/p)){case 0:_.set(1,0,0),d[M+0]=Pn(_,c,"z","y",r,i),d[M+1]=1-Pn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[M+0]=1-Pn(_,c,"z","y",r,i),d[M+1]=1-Pn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[M+0]=1-Pn(_,c,"x","z",r,e),d[M+1]=Pn(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),d[M+0]=1-Pn(_,c,"x","z",r,e),d[M+1]=1-Pn(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),d[M+0]=1-Pn(_,c,"x","y",r,e),d[M+1]=1-Pn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[M+0]=Pn(_,c,"x","y",r,e),d[M+1]=1-Pn(_,c,"y","x",r,t);break}}static fromJSON(e){return new Ou(e.width,e.height,e.depth,e.segments,e.radius)}}function $x(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Wt;let c=0;for(let u=0;u<n.length;++u){const g=n[u];let h=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in g.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(g.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in g.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(g.morphAttributes[d])}if(e){let d;if(t)d=g.index.count;else if(g.attributes.position!==void 0)d=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const g=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let p=0;p<d.count;++p)g.push(d.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(g)}for(const u in r){const g=Td(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,g)}for(const u in o){const g=o[u][0].length;if(g!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<g;++h){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);const p=Td(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Td(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new kn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const g=l/t;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<t;p++){const _=u.getComponent(h,p);a.setComponent(h+g,p,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Jx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:l,sphere:c,cyl:u,torus:g,rod:h,sign:d,paperBoat:p,batchStatic:_,persist:m,say:f,refresh:M,chime:w,reduced:x}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],T=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),g([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const P=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],P),g([0,0,0],.36,.015,s.copper,P,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),g([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const C=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,C);for(const[A,R,G]of[[-.17,.23,-.5],[.17,.41,.5]]){const q=c([A,R,0],[.24,.035,.085],s.mint,C);q.rotation.z=G}const O=o([0,.95,0],C);c([0,0,0],.115,s.light,O),g([0,0,0],.28,.021,s.cream,O,[0,0,0]),g([0,0,0],.27,.021,s.copper,O,[0,Math.PI/2,0]);const U=[];for(let A=0;A<4;A++){const R=A*Math.PI/2,G=o([Math.cos(R)*.3,.13+Math.sin(R)*.12,Math.sin(R)*.3],C);h([0,-.15,0],[0,.2,0],.012,s.copper,G),c([0,.23,0],.065,s.cream,G),_(G,[]),U.push(G)}l([-.46,.2,.32],[.68,.12,.47],s.dark,v);const V=o([-.46,.29,.32],v);l([0,0,0],[.5,.025,.32],s.cream,V);for(const A of[-.23,.23])h([A,.016,-.14],[0,.016,.06],.009,s.copper,V);c([0,.027,.06],[.04,.015,.04],s.rust,V),d("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(P,[]),_(O,[]),_(C,[O,...U]),_(V,[]),_(v,[P,C,V]);const z=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);z.castShadow=!1;const I=o([0,0,0],e),F=p(I,[8.3,.14,3.5],1.05),B=o([0,.36,0],F),J=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],B),Y=c([0,.12,0],[.085,.13,.085],s.light,B),W=l([0,.09,0],[.23,.025,.16],s.cream,B);W.rotation.z=.2;const ne=[J,Y,W];_(F,[B]);const j=new n.Vector3(8.3,.14,3.5),ue=new n.Vector3(8.45,.14,3.65),ee=new n.Vector3(9.2,-2.7,6.5);let ae=-1,N=i.dockTrips>=2?1:.02;function y(){P.visible=i.dockTrips>=1,C.visible=i.dockTrips>=2,V.visible=i.dockTrips>=3,U.forEach((A,R)=>A.visible=i.dockTrips>=5+R*3),B.visible=i.dockPending,ne.forEach((A,R)=>A.visible=R===i.dockTrips%3),F.position.copy(i.dockPending?ue:j)}y();function L(){if(!(i.boat>0))if(i.dockPending){const A=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(N=.02),m(),y(),f(A.line),w(330),M()}else i.boat=18,ae=-1,ne.forEach((A,R)=>A.visible=R===i.dockTrips%3),B.visible=!1,f("ну плыви. я тут."),M()}function Z(A,R){if(i.boat>0){i.boat=Math.max(0,i.boat-A);const G=18-i.boat,q=G<7?0:G<11?1:2;q!==ae&&(ae=q,M()),G<2?F.position.lerpVectors(j,ue,n.MathUtils.smoothstep(G,0,2)):G<7?F.position.lerpVectors(ue,ee,n.MathUtils.smoothstep(G,2,7)):G<11?F.position.copy(ee):G<16?F.position.lerpVectors(ee,ue,n.MathUtils.smoothstep(G,11,16)):F.position.copy(ue),F.visible=G<7||G>=11,B.visible=G>=11,F.rotation.y=G>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),F.visible=!0,y(),f("вернулся. с чем-то."),w(554),M())}F.rotation.z=x?0:Math.sin(R*1.7)*.035,i.boat===0&&(F.visible=!0,F.position.y=(i.dockPending?ue.y:j.y)+Math.sin(R*1.2)*.02,F.rotation.y=i.dockPending?Math.PI+.2:0),P.position.y=.97+Math.sin(R*.9)*.055,P.rotation.y=R*.15,N=n.MathUtils.damp(N,1,1.1,A),C.scale.setScalar(N),O.rotation.y=x?0:R*.23,z.material.emissiveIntensity=i.dockPending?1.5+Math.sin(R*4)*1.1:1.2}function K(){if(i.boat>0){const A=18-i.boat;return{disabled:!0,action:A<7?"плывёт…":A<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const A=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:A===2?`${S[A].description} ${T[Math.floor((i.dockTrips-1)/3)%T.length]}`:S[A].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:I,gallery:v,beacon:z,launchOrCollect:L,update:Z,card:K,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:F.position.toArray(),visible:F.visible,cargo:B.visible,stone:P.visible,plant:C.visible,plantScale:N,letter:V.visible,buds:U.filter(A=>A.visible).length})}}async function rp(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function Zx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),l="beznogim-public-notes-v1";let c="all",u=!s.matches,g=!1,h=!1,d=!1,p=!1,_=!1,m=0,f=null,M=0,w=0,x=0,b=!1;try{const $=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");$!==null&&(u=$==="open")}catch{}const S=($,ce,ye)=>{const be=document.createElement($);return ce&&(be.className=ce),ye&&(be.textContent=ye),be},T=S("aside","resident-history");T.id="resident-history",T.setAttribute("aria-label","История мыслей и действий Головы");const v=S("div","history-heading"),P=S("div"),C=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),O=S("h3","","на полях"),U=S("span","history-eyes");U.setAttribute("aria-hidden","true"),O.append(U),P.append(C,O,S("p","history-subtitle","мысли, дела и прочее"));const V=S("button","history-close","−");V.type="button",V.setAttribute("aria-label","Свернуть историю"),V.title="Свернуть историю",v.append(P,V);const z=S("div","history-filters");z.setAttribute("role","group"),z.setAttribute("aria-label","Показывать в истории");const I=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[$,ce]of I){const ye=S("button","",ce);ye.type="button",ye.dataset.filter=$,ye.setAttribute("aria-pressed",String(c===$)),ye.onclick=()=>{c=$,R(!1),B.scrollTop=0;for(const be of z.children)be.setAttribute("aria-pressed",String(be.dataset.filter===c))},z.append(ye)}const F=S("button","history-new");F.type="button",F.hidden=!0;const B=S("div","history-scroll");B.tabIndex=0,B.setAttribute("aria-label","Записи, от новых к старым");const J=S("ol","history-list"),Y=S("p","history-empty","собираю заметки…");B.append(J,Y);const W=S("div","history-foot"),ne=S("span","history-live","подключаюсь…"),j=S("span","history-count"),ue=S("button","history-retry","повторить подключение");ue.type="button",ue.hidden=!0,ue.onclick=()=>{k(),window.dispatchEvent(new Event("beznogim:retry"))},W.append(ne,j,ue),T.append(v,z,F,B,W);const ee=S("button","history-toggle");ee.type="button",ee.setAttribute("aria-controls",T.id);const ae=S("span","","на полях"),N=S("span","history-badge");N.hidden=!0,ee.append(S("span","history-toggle-icon","◌"),ae,N),document.body.append(T),document.querySelector(".footer-actions").append(ee);function y($,ce=!0){if(u=$,T.hidden=!u,ee.hidden=u,ee.setAttribute("aria-expanded",String(u)),ce)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(B.scrollTop<30?L():Z(),V.focus({preventScroll:!0})):ce&&ee.focus({preventScroll:!0})}T.hidden=!u,ee.hidden=u,ee.setAttribute("aria-expanded",String(u)),ee.onclick=()=>{y(!0),(p||!h)&&k()},V.onclick=()=>y(!1),s.addEventListener("change",()=>{let $=!s.matches;try{const ce=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ce!==null&&($=ce==="open")}catch{}y($,!1)}),document.addEventListener("keydown",$=>{$.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&y(!1)});function L(){m=0,N.hidden=!0,F.hidden=!0}function Z(){N.textContent=String(m),N.hidden=!m,F.textContent=`↑ к новым · ${m}`,F.hidden=!(u&&m)}F.onclick=()=>{B.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),L()},B.addEventListener("scroll",()=>{B.scrollTop<30&&L()},{passive:!0});function K($){return c==="all"||(c==="thoughts"?$.type==="muse"||$.type==="say":$.type!=="muse"&&$.type!=="say")}function A($,ce){const ye=$.type==="muse"||$.type==="say",be=S("li",`history-entry ${ye?"history-thought":"history-action"}${ce?" is-new":""}`);be.dataset.eventId=String($.id),be.dataset.type=$.type;const Q=S("div","history-meta"),ze=S("time","",r.format($.time*1e3));ze.dateTime=new Date($.time*1e3).toISOString(),ze.title=o.format($.time*1e3)+" · "+ze.textContent+" мск";const Ae={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return Q.append(S("span","",Ae[$.type]||"во дворе"),ze),be.append(Q,S("p","",$.text)),be}function R($,ce=new Set){const ye=B.scrollTop>30,be=B.getBoundingClientRect().top,Q=ye?[...J.querySelectorAll("[data-event-id]")].find(pe=>pe.getBoundingClientRect().bottom>be):null,ze=Q==null?void 0:Q.dataset.eventId,Ae=Q==null?void 0:Q.getBoundingClientRect().top,X=B.scrollTop,E=document.createDocumentFragment();let le="";const he=[...i.values()].sort((pe,Ee)=>Ee.id-pe.id).filter(K);for(const pe of he){const Ee=o.format(pe.time*1e3);if(Ee!==le){const Ce=S("li","history-day",Ee);E.append(Ce),le=Ee}E.append(A(pe,$&&ce.has(pe.id)&&!ye))}if(J.replaceChildren(E),Y.hidden=he.length>0,Y.textContent=p?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!he.length&&(Y.textContent="в этом фильтре пока нет записей."),j.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",ue.hidden=!(p||!h&&!d),ue.disabled=d,ze){const pe=J.querySelector(`[data-event-id="${ze}"]`);B.scrollTop=X+(pe?pe.getBoundingClientRect().top-Ae:0)}else ye||(B.scrollTop=0)}function G($,ce=!1){if(!$||!Array.isArray($.entries))return!1;const ye=Math.max(0,...i.keys()),be=new Set;let Q=0,ze=0;for(const Ae of $.entries)!Ae||typeof Ae!="object"||!Number.isSafeInteger(Ae.id)||Ae.id<1||!Number.isFinite(Ae.time)||Math.abs(Ae.time)>864e10||!a.has(Ae.type)||typeof Ae.text!="string"||!Ae.text.trim()||(ze++,i.has(Ae.id)||(b=!0,i.set(Ae.id,{id:Ae.id,time:Ae.time,type:Ae.type,text:Ae.text.slice(0,280)}),be.add(Ae.id),Ae.id>ye&&K(Ae)&&Q++));if($.entries.length&&!ze)return!1;if(_=_||!!$.has_older||!!$.has_more||i.size>t,i.size>t){const Ae=[...i.keys()].sort((X,E)=>X-E);for(const X of Ae.slice(0,i.size-t))i.delete(X)}return g&&!ce&&Q&&(!u||B.scrollTop>30)&&(m+=Q,Z()),(be.size||!g)&&R(g&&!ce,be),!0}function q(){if(!(!i.size||!b)){b=!1,w=Date.now();try{localStorage.setItem(l,JSON.stringify({version:1,saved_at:w,has_older:_,entries:[...i.values()]}))}catch{}}}function ie(){try{const $=localStorage.getItem(l);if(!$||$.length>1e6)return;const ce=JSON.parse($);if(ce.version!==1||!Number.isFinite(ce.saved_at)||ce.saved_at<=0)return;G(ce,!0),w=ce.saved_at,g=i.size>0,b=!1}catch{}}async function k(){if(!d){d=!0,x=performance.now(),ue.disabled=!0;try{const $=await rp(n+"/api/history");if(!G($,!0))throw Error("invalid-public-history");h=!0,g=!0,p=!1,q(),R(!1)}catch{p=!0,R(!1)}finally{d=!1,ue.disabled=!1,te()}}}function te(){var ye;const $=!f||performance.now()-M>35e3||f.server_time-f.heartbeat>60||f.resident_status==="stopped";T.classList.toggle("history-offline",$);const ce=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";ne.textContent=$?i.size?"связи нет":"нет связи с живым сервером":f.resident_status==="sleeping"?"голова спит · дневник открыт":f.resident_status==="paused"?"голова отдыхает":"жизнь идёт",$&&i.size&&(ne.textContent+=ce),!$&&p&&(ne.textContent+=" · архив не дошёл"),ne.title=((ye=f==null?void 0:f.action)==null?void 0:ye.label)||""}function se($){var ze;const ce=Math.max(0,...i.keys()),ye=Array.isArray((ze=$.history)==null?void 0:ze.entries)?$.history.entries:[];f=$,M=performance.now(),G($.history)&&i.size&&(g=!0,q()),te();const be=ye.filter(Ae=>Ae&&Number.isSafeInteger(Ae.id)).map(Ae=>Ae.id);(ce&&be.length&&Math.min(...be)>ce&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&k()}window.addEventListener("beznogim:state",$=>se($.detail)),window.__beznogimState&&se(window.__beznogimState),ie(),R(!1),te(),k(),window.addEventListener("online",()=>{(p||!h)&&k()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(p||!h)&&k()}),setInterval(()=>{te(),(p||!h)&&k()},15e3)}function Kx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:l}){let c=null,u=0,g=0,h=!1,d=!1,p=!1,_=0,m=null,f=null,M=null,w="",x=!0;const b=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const T=document.createElement("span");T.className="thought-kicker",T.textContent="про себя";const v=document.createElement("p");S.append(T,v),document.body.append(S);const P=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),C=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";Zx({api:C,enabled:P});const O=document.querySelector(".territory-nav"),U=document.createElement("div");U.className="resident-strip",U.hidden=!0;const V=document.createElement("span");V.className="resident-status",V.textContent="подключаюсь к голове";const z=document.createElement("div");z.className="resident-vitals",z.hidden=!0,z.setAttribute("aria-label","Самочувствие Головы");const F=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(A=>{const R=document.createElement("div");return R.className="need-meter",R.dataset.need=A.key,R.style.setProperty("--need-color",A.color),R.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${A.icon}</svg><div class="need-detail"><div class="need-heading"><b>${A.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${A.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,z.append(R),{key:A.key,card:R,value:R.querySelector(".need-value"),bar:R.querySelector(".need-track")}}),B=document.createElement("button");B.type="button",B.textContent="к голове",B.onclick=()=>{d=!1,p=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),ee()};const J=document.createElement("button");J.type="button",J.textContent="поиграть самому",J.onclick=()=>{d=!d,p=!1,ee()};const Y=document.createElement("button");Y.type="button",Y.textContent="мысли",Y.setAttribute("aria-pressed","true"),Y.onclick=()=>{x=!x,Y.setAttribute("aria-pressed",String(x))},U.append(V,z,B,J,Y),O.append(U);function W(){return Date.now()/1e3+g}function ne(){return c&&W()-c.heartbeat<60&&c.resident_status!=="stopped"}function j(){return h&&c&&!d}function ue(){var G,q;const A=(q=(G=c==null?void 0:c.mechanics)==null?void 0:G.vitals)==null?void 0:q.public;if(!A){z.hidden=!0;return}const R=ie=>Math.max(0,Math.min(100,Math.round(Number(ie)||0)));z.hidden=!1;for(const ie of F){const k=R(A[ie.key]);ie.value.textContent=String(k),ie.bar.setAttribute("aria-valuenow",String(k)),ie.card.style.setProperty("--need-fill",String(k/100)),ie.card.dataset.low=String(k<=20)}}function ee(){const A=d?"ты в песочнице":h?ne()?c!=null&&c.action&&c.action.ends>W()?c.action.label:(c==null?void 0:c.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";A!==w&&(w=A,V.textContent=A),J.textContent=d?"вернуться к голове":"поиграть самому",B.setAttribute("aria-pressed",String(p))}function ae(A){var G,q;if(!A||A.version!==1||!Array.isArray(A.position)||A.position.length!==3||!A.position.every(Number.isFinite)||!A.objects||!Number.isFinite(A.server_time)||!Number.isFinite(A.heartbeat)||c&&(A.server_time<c.server_time||A.server_time===c.server_time&&Number.isFinite(A.revision)&&Number.isFinite(c.revision)&&A.revision<c.revision))return;if(g=A.server_time-Date.now()/1e3,c=A,u=performance.now(),h=!0,U.hidden=!1,m&&((G=A.release)!=null&&G.commit)&&m!==A.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((q=A.release)==null?void 0:q.commit)||m;const R=A.speech;R&&R.time>_&&R.until>W()&&(_=R.time,d||a(R.text)),window.__beznogimState=A,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:A})),ue(),ee()}function N(){const A=c.action;if((A==null?void 0:A.kind)==="move"){const R=Math.max(0,Math.min(1,(W()-A.started)/Math.max(.001,A.ends-A.started)));return A.from.map((G,q)=>G+(A.to[q]-G)*R)}return c.position}function y(){if(!j())return;const A=c.objects;A.engine&&(t.running=!!A.engine.running),A.workshop&&(t.roof=A.workshop.roof_open?1:0),A.radio&&(t.radio=A.radio.station,f!==t.radio&&(f=t.radio,o())),A.garden&&(t.harvest=A.garden.harvest,M!==null&&t.harvest>M&&l(),M=t.harvest);const R=c.action;t.brew=(R==null?void 0:R.effect)==="brew"?Math.max(0,R.ends-W()):0,t.loop=0,ee()}function L(){if(!j()){S.hidden=!0;return}const A=N();n.position.set(A[0],A[1]+Math.sin(W()*1.4)*.1,A[2]),e.set(...A),p&&i.target.lerp(n.position,.08);const R=c.musing;if(x&&ne()&&(R!=null&&R.text)&&R.until>W()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==R.text&&(v.textContent=R.text),b.copy(n.position),b.y+=1.8,b.project(s),b.z>=-1&&b.z<=1&&Math.abs(b.x)<1&&Math.abs(b.y)<1){S.hidden=!1;const G=S.offsetWidth,q=S.offsetHeight,ie=Math.max(G/2+12,Math.min(innerWidth-G/2-12,(b.x+1)*innerWidth/2));let k=(1-b.y)*innerHeight/2-18;const te=O.getBoundingClientRect(),se=ie-G/2<te.right&&ie+G/2>te.left?te.bottom+12:18,$=k-q<se;$&&(k=Math.max(se+q,(1-b.y)*innerHeight/2+70+q)),k=Math.min(innerHeight-70,Math.max(q+18,k)),S.classList.toggle("below-head",$),S.style.transform=`translate3d(${Math.round(ie)}px,${Math.round(k)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function Z(){j()&&(d=!0,p=!1,ee())}function K(){if(!P)return;U.hidden=!1;let A=!1;async function R(){if(!A){A=!0;try{const q=await rp(C+"/api/state");ae(q),c&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!c||performance.now()-u>35e3)&&(h=!1),ee()}finally{A=!1}}}try{const q=new EventSource(C+"/api/events");q.addEventListener("state",ie=>{try{ae(JSON.parse(ie.data))}catch{}}),q.onerror=()=>{h=!1,ee()}}catch{h=!1,ee()}R();function G(){(!h||!c||performance.now()-u>3e4)&&R()}window.addEventListener("online",G),window.addEventListener("beznogim:retry",R),document.addEventListener("visibilitychange",()=>{document.hidden||G()}),setInterval(()=>{c&&performance.now()-u>35e3&&(h=!1),ee(),G()},15e3)}return i.addEventListener("start",()=>{p=!1,ee()}),K(),{sync:y,place:L,localPlay:Z,unfollow:()=>{p=!1},watching:j,inspect:()=>{var A;return{connected:h,sandbox:d,follow:p,alive:!!ne(),revision:c==null?void 0:c.revision,release:(A=c==null?void 0:c.release)==null?void 0:A.commit,action:c==null?void 0:c.action,musing:c==null?void 0:c.musing,thoughtVisible:!S.hidden,position:c?N():null}}}}const Qx=120,jx=24,ey=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"settled",name:"шовная"},{id:"0:-2",x:0,z:-48,status:"settled",name:"малый передатчик"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"settled",name:"облачная перегонная"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Yn={size:Qx,sectorSize:jx,sectors:ey};function ty({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const l=new Ki;l.name="unsettled-territory",n.add(l);const c=Yn.size/2,u=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],g=new oo;u.forEach(([C,O],U)=>U?g.lineTo(C,-O):g.moveTo(C,-O)),g.closePath();const h=new pr(g,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const d=new _n(h,new Ks({color:"#233e35",roughness:1}));d.receiveShadow=!0,l.add(d);let p=8409;const _=()=>(p=p*1664525+1013904223>>>0)/4294967296,m=new Rc(new ao(1,0),new Ks({color:"#8a9980",roughness:1}),150),f=new Rc(new Rs(1,1,4),new Ks({color:"#9aa880",roughness:1}),850),M=new Ht;for(const[C,O,U]of[[m,150,!0],[f,850,!1]]){for(let V=0;V<O;V++){let z,I;do z=(_()-.5)*(Yn.size-10),I=(_()-.5)*(Yn.size-10);while(Math.abs(z)<11&&Math.abs(I)<9);const F=U?.15+_()*.48:.12+_()*.42;M.position.set(z,-1.7+F*.25,I),M.rotation.set(0,_()*6.28,U?_()*.25:0),M.scale.set(U?F*1.3:.07,F,U?F:.07),M.updateMatrix(),C.setMatrixAt(V,M.matrix)}C.instanceMatrix.needsUpdate=!0,l.add(C)}const w=new Ks({color:"#c1b692",roughness:1});for(let C=0;C<16;C++){const O=new _n(new ki(1.15,.12,.65),w);O.position.set(-.6,-.06-C*.105,5.8+C*.7),O.receiveShadow=!0,l.add(O)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const b=document.createElement("dialog");b.id="territory-dialog",b.setAttribute("aria-labelledby","territory-title"),b.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. К востоку от почтового моста четыре карты переливают облако за шестнадцать игровых часов. Севернее вилки шовная держит голову по швам; к востоку от неё малый передатчик выводит самомнение через HDMI. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(b);const S=b.querySelector("#territory-grid");for(const C of Yn.sectors){const O=document.createElement("button");O.type="button",O.dataset.sector=C.id,O.className=C.status==="settled"?"settled":"",O.textContent=C.status==="settled"?`● ${C.id==="0:0"?"двор":C.name}`:`· ${C.id}`,O.setAttribute("aria-label",`${C.name}, ${C.id}`),O.onclick=()=>{b.close(),s(C.x,C.z,C.status==="settled")},S.append(O)}document.querySelector("#territory-map").onclick=()=>b.showModal(),document.querySelector("#world-overview").onclick=r,b.querySelector("#territory-close").onclick=()=>b.close(),b.querySelector("#territory-home").onclick=()=>{b.close(),o()};const T=x.querySelector("#territory-location");let v="";function P(){const C=a()||t.target,O=Math.round(C.x/Yn.sectorSize),U=Math.round(C.z/Yn.sectorSize),V=`${O}:${U}`;if(V!==v){v=V;const z=Yn.sectors.find(I=>I.id===V);T.textContent=`${(z==null?void 0:z.status)==="settled"?z.name:"свободная земля"} · ${V}`;for(const I of S.children)I.classList.toggle("current",I.dataset.sector===V)}}return{half:c,update:P,inspect:()=>({size:Yn.size,sectorSize:Yn.sectorSize,sectors:Yn.sectors.length,settled:Yn.sectors.filter(C=>C.status==="settled").length,visible:n.visible,sector:v})}}function ny({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:g,sign:h,paperBoat:d,batchStatic:p,changed:_,chime:m}){let f={};try{f=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(f.wins)||0))),trace:f.trace===!0},w=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const b=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,b),a([0,.46,0],[1.22,.08,1.3],s.dark,b);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const $ of[-.62,.62])for(const ce of[-.64,.64])u([$,.46,ce],[$,1.45,ce],.024,s.copper,b);for(const $ of[-.62,.62])a([$,.96,0],[.018,.95,1.28],S,b);a([0,.96,-.64],[1.24,.95,.018],S,b);const T=o([0,1.45,-.64],b);for(const $ of[-.62,.62])u([$,0,0],[$,.36,.64],.026,s.copper,T);for(const $ of[-.62,.62])u([$,.36,.64],[$,0,1.28],.026,s.copper,T);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,T);const v=a([0,.18,.32],[1.26,.025,.72],S,T);v.rotation.x=-.51;const P=a([0,.18,.96],[1.26,.025,.72],S,T);P.rotation.x=.51;const C=o([0,.52,0],b);c([0,.2,0],.026,.4,s.leaf,C);for(const $ of[-1,1]){const ce=l([$*.15,.27,0],[.22,.055,.09],s.leaf,C);ce.rotation.z=$*.35}const O=l([0,.25,.12],[.23,.16,.27],s.copper,C),U=l([.42,.58,.46],[.15,.1,.18],s.copper,b);U.visible=M.wins>0;const V=o([-.76,.7,.69],b);a([0,.28,0],[.13,.66,.06],s.cream,V);const z=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),V);l([0,-.06,.04],.065,s.rust,V),h("ПАРНИК",[0,.3,.716],.93,.22,b,{size:49});const I=g([0,2.05,0],.46,.016,s.mint,b);I.visible=M.trace;const F=[];for(let $=0;$<6;$++)F.push(l([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),b));p(b,[T,C,V,I,U,...F]),p(T,[]),p(C,[O]),p(V,[z]);let B=0,J=0;function Y(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),B=0,_()}function W($){if(M.mode!=="playing")return;const ce={heat:2,wait:0,vent:-2};$ in ce&&(M.temp+=w[M.turn]+ce[$],M.turn++,M.temp>6?(M.mode="hot",B=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),U.visible=!0,x(),m(660)),_())}function ne(){let $="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&($=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${w[M.turn]>0?"+":""}${w[M.turn]}. Выбери один ход.`),M.mode==="hot"&&($=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&($=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&($="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:$,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const j=o([0,0,0],t);j.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,j),a([0,-.42,0],[6.8,.08,5.6],s.dark,j);for(const $ of[-3.2,3.2])for(const ce of[-2.6,2.6])u([$,-.4,ce],[$,4,ce],.055,s.copper,j);for(const $ of[-3.2,3.2])u([$,4,-2.6],[$,5.7,0],.055,s.copper,j),u([$,5.7,0],[$,4,2.6],.055,s.copper,j);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,j),a([-3.2,1.8,0],[.025,4.4,5.2],S,j),a([0,1.8,-2.6],[6.4,4.4,.025],S,j),h("СОН / 01",[0,-.12,2.93],2.2,.38,j,{size:52});const ue=o([0,1.6,0],j);l([0,0,0],1.16,r("#5f9c85"),ue);for(let $=0;$<10;$++){let ce=$*2.4;const ye=l([Math.sin(ce)*.95,Math.cos($*1.2)*.6,Math.cos(ce)*.95],[.35,.2,.3],s.leaf,ue);ye.rotation.y=ce}g([0,0,0],1.32,.028,s.copper,ue,[.4,0,.2]);const ee=o([0,1.6,0],j),ae=[];for(let $=0;$<28;$++){const ce=a([0,0,0],[.53,.11,.32],$%4?s.cream:s.concrete,ee);ae.push(ce)}const N=d(j,[1.7,-.05,1],1.65),y=l([0,.65,0],.13,s.cream,N),L=o([0,.65,0],N);L.visible=!1;for(let $=0;$<8;$++){let ce=$/8*Math.PI*2;u([Math.sin(ce)*.27,Math.cos(ce)*.27,0],[Math.sin(ce)*.5,Math.cos(ce)*.5,0],.026,s.light,L)}const Z=i.clone(!0);j.add(Z),Z.scale.setScalar(.72),Z.position.set(-2,1,1.3),Z.rotation.z=-.25;const K=o([-2,-.05,1.3],j);c([0,0,0],.55,.3,s.cream,K),g([.58,0,0],.25,.04,s.copper,K,[0,0,0]);const A=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,j);A.rotation.y=.2;let R=0,G=0,q=!1;p(j,[ue,ee,N,Z]),p(ue,[]);function ie(){q=!0,R=0,G=0,j.visible=!0,e.visible=!1,_()}function k(){q=!1,j.visible=!1,e.visible=!0,_()}function te(){q&&(R===3?(R=0,G=0):(R++,m(220+R*110),R===3&&(M.trace=!0,I.visible=!0,x())),_())}function se($,ce){J=n.MathUtils.damp(J,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,$),T.rotation.x=J,C.scale.y=n.MathUtils.damp(C.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,$),O.visible=M.mode==="won",z.scale.y=.3*Math.max(.05,M.temp/8),z.position.y=-.015+M.temp/8*.15,I.rotation.z=Math.sin(ce*.3)*.15,B=Math.max(0,B-$),F.forEach((ye,be)=>{ye.visible=B>0;const Q=(3-B+be*.18)%1.5;ye.position.set(Math.sin(be*2)*Q*.35,1.5+Q,Math.cos(be*2)*Q*.35),ye.scale.setScalar(.1*(.4+Q))}),q&&(G=n.MathUtils.damp(G,R,2,$),ue.rotation.y=ce*.08,ae.forEach((ye,be)=>{const Q=be/28*Math.PI*2+ce*.055*Math.min(1,G),ze=Math.min(1,G);ye.position.set(Math.sin(Q)*(1.8+ze*.35),Math.cos(Q)*(1.8-ze*1.5),Math.cos(Q)*ze*1.5),ye.rotation.set(0,-Q*ze,Math.PI/2-Q*(1-ze))}),ee.rotation.y=G*.32,N.position.y=-.05+G*1.12,N.position.x=1.7-G*.32,N.rotation.y=.2+G*.35,y.scale.setScalar(.13*(1+Math.max(0,G-2)*2)),L.visible=G>2.2,L.rotation.z=ce*.22,Z.position.y=1+Math.sin(ce*.8)*.06)}return{house:b,start:Y,step:W,card:ne,update:se,enter:ie,exit:k,breathe:te,inspect:()=>({...M,weather:[...w],dream:q,dreamStep:R,phase:G,lidAngle:J,rootVisible:e.visible,dreamVisible:j.visible,boatY:N.position.y,rays:L.visible})}}function iy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,batchStatic:p,chime:_}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const f=r("#c39860"),M=r("#e0c58b"),w=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),b=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),f,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let N=0;N<13;N++){const y=.15+N/12*Math.PI*1.42,L=Math.sin(y)*3.65,Z=Math.cos(y)*3.65,K=l([L,.48,Z],[.75,1.08,.19],M,m);K.rotation.y=y,N%3===0&&h([L,.48,Z],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,y,0)}d("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const S=a([1.08,.12,.4],m);l([0,0,0],[2.55,.22,1.55],w,S);for(let N of[-1.15,1.15])for(let y of[-.63,.63])l([N,-.23,y],[.12,.5,.12],s.copper,S);for(let N of[-.79,.79])l([0,.36,N],[2.72,.65,.14],b,S);for(let N of[-1.32,1.32])l([N,.38,0],[.14,.68,1.55],b,S);const T=l([0,.18,0],[2.49,.045,1.49],x,S),v=c([-.84,.38,0],[.34,.14,.54],s.cream,S),P=i.clone(!0);m.add(P),P.scale.setScalar(.54),P.position.set(.3,.83,.45),P.rotation.z=-.35;const C=a([0,0,0],P);for(const N of[-.23,.23])c([N,.2,.611],[.15,.11,.025],s.black,C),l([N,.2,.64],[.2,.018,.012],s.copper,C);const O=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,O),u([0,.29,0],.44,.022,w,O),h([.55,0,0],.24,.055,s.copper,O,[0,0,0]),d("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const U=[];for(let N=0;N<7;N++){const y=a([-1.92+N*.33,.2+N*.29,1.45-N*.29],m);l([0,0,0],[.7,.13,.42],s.cream,y);for(let L of[-.2,.2])l([0,.07,L],[.7,.12,.05],s.copper,y);U.push(y)}const V=Array.from({length:16},()=>c([0,0,0],[.07,.1,.07],x,m)),z=Array.from({length:3},(N,y)=>{const L=h([.65,.2,0],.23+y*.16,.012,s.mint,S);return L.scale.z=.6,L}),I=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,I),I.rotation.z=.55;const F=[];for(let N=0;N<9;N++){const y=N*2.4;F.push(c([Math.sin(y)*3,3.2+N%3*.28,Math.cos(y)*2],.025,s.cream,m))}let B=!1,J=0,Y=0,W=!1;try{W=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const ne=a([26.6,-.86,.65],t);ne.visible=W,u([0,0,0],.15,.2,s.cream,ne),u([0,.104,0],.125,.014,x,ne),h([.16,0,0],.07,.02,s.copper,ne,[0,0,0]),p(m,[S,P,O,...U,...V,...F,I]),p(S,[T,v,...z]),p(O,[]),p(ne,[]),U.forEach(N=>p(N,[]));function j(){B=!0,J=0,Y=0,m.visible=!0,t.visible=!1,ae(0,0)}function ue(){B=!1,m.visible=!1,t.visible=!0}function ee(){if(B&&(J=J===3?0:J+1,_(165+J*55),J===3)){W=!0,ne.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function ae(N,y){B&&(Y=n.MathUtils.damp(Y,J,2.4,N),U.forEach((L,Z)=>{const K=Math.min(1,Y/2),A=-1.92+Z*.33,R=.2+Z*.29,G=1.45-Z*.29;L.position.set(n.MathUtils.lerp(A,-1.72+Z*.39,K),n.MathUtils.lerp(R,1.95-Z*.22,K),n.MathUtils.lerp(G,-.32+Z*.055,K)),L.rotation.z=-K*.21}),T.position.y=.18+Y*.09,v.position.y=.38+Y*.09,P.position.y=.83+Y*.09+Math.sin(y*.6)*.025,P.rotation.z=-.35-Y*.13,O.rotation.z=-Math.min(1,Y)*.45,V.forEach((L,Z)=>{const K=(y*.16+Z/16)%1;L.visible=Y>.05,L.position.set(-1.7+K*3,2.14-K*1.62,-.32+K*.25),L.scale.set(.07,.1+Math.sin(K*Math.PI)*.04,.07)}),z.forEach((L,Z)=>{L.visible=Y>.4,L.position.y=T.position.y+.034,L.scale.setScalar(1+Math.sin(y*.5+Z)*.08),L.scale.z*=.6}),I.rotation.z=.55+Y*.21,C.visible=Y>1.8)}return{enter:j,exit:ue,pour:ee,update:ae,inspect:()=>({active:B,step:J,phase:Y,trace:W,roomVisible:m.visible,rootVisible:t.visible,waterY:T.position.y,sleeperY:P.position.y,channel:U.map(N=>N.position.toArray()),droplets:V.filter(N=>N.visible).length})}}function sy({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const l=e([0,0,0],n);l.visible=!1;for(const d of[-.23,.23])t([d,.2,.611],[.15,.11,.025],r.black,l),i([d,.2,.64],[.2,.018,.012],r.copper,l);let c=null,u=0;function g(d){c=d,u=Number(d.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:d})=>g(d)),window.__beznogimState&&g(window.__beznogimState);function h(d){const p=c==null?void 0:c.action;a.visible=!!d&&(p==null?void 0:p.kind)==="sleep"&&Number(p.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),l.visible=a.visible}return{update:h,inspect:()=>{var d;return{visible:a.visible,ends:((d=c==null?void 0:c.action)==null?void 0:d.kind)==="sleep"?c.action.ends:null}}}}const Dr=Object.freeze([1,2,3,4,5,7]),Bc=()=>({phase:"sorting",places:[0,0,0,0,0,0],progress:0});function Ja(n){return[1,2].map(e=>n.places.reduce((t,i,s)=>t+(i===e?Dr[s]:0),0))}function Vc(n){const[e,t]=Ja(n);return n.places.every(i=>i!==0)&&e===t}function ry(n,e){return n.phase==="sorting"&&Number.isInteger(e)&&e>=0&&e<6?{...n,places:n.places.map((t,i)=>i===e?(t+1)%3:t)}:n}function oy(n){return n.phase==="flying"?Bc():n.phase==="sorting"&&Vc(n)?{...n,phase:"unfolding",progress:0}:n}function ay(n,e){if(n.phase!=="unfolding"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return{...n,progress:t,phase:t===1?"flying":"unfolding"}}function Gc(n){const e=n.phase==="flying"?1:n.phase==="unfolding"?n.progress:0,t=e*e*(3-2*e),[i,s]=Ja(n);return{open:t,headY:.85+t*2.25,waterTilt:t*Math.PI/2,waterY:-.3+t*2.5,lean:(s-i)/22*.18}}function ly(n,e){const t=n.places[e],i=Gc(n).open;return t===0?[-3+e*1.2,.15,2.85]:[(t===1?-2.1:2.1)+(e%3-1)*.35,.9+Math.floor(e/3)*.45+i*(2.1+e*.12),.5+e%2*.35-i*.8]}function cy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,tube:u,torus:g,sign:h,batchStatic:d,chime:p,changed:_}){const m=o([0,0,0],e);m.name="dream09-ears-for-the-shore",m.visible=!1;const f=r("#cb9e8d"),M=r("#936e73"),w=r("#e6d5ad"),x=r("#649a9a",{metalness:.25,roughness:.3}),b=r("#334e59"),S=o([0,-.3,-.9],m);a([0,-.16,0],[8.1,.2,4.7],b,S),a([0,0,0],[7.8,.09,4.4],x,S);for(let ee=0;ee<7;ee++)g([0,.07,0],.35+ee*.325,.016,w,S);function T(ee,ae,N,y){const L=document.createElement("canvas");L.width=L.height=128;const Z=L.getContext("2d");Z.fillStyle="#e4d8b7",Z.fillRect(0,0,128,128),Z.fillStyle="#334e59",Z.font="bold 96px monospace",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(ee,64,68);const K=new n.CanvasTexture(L);K.colorSpace=n.SRGBColorSpace;const A=new n.Mesh(new n.PlaneGeometry(N,N),new n.MeshBasicMaterial({map:K,side:n.DoubleSide}));return A.position.set(...ae),A.rotation.y=Math.PI/4,y.add(A),A}const v=[];for(const ee of[-1,1]){const ae=o([ee*2.1,1.9,0],m);v.push(ae);const N=o([0,0,0],ae);N.scale.x=ee,l([0,0,0],[.87,1.67,.24],f,N),l([0,.1,.2],[.65,1.33,.17],M,N),u([[.2,-1.4,.18],[.7,-.9,.2],[.8,.45,.18],[.55,1.4,.14],[-.35,1.5,.12],[-.7,.7,.2],[-.6,-.25,.3],[-.15,-.55,.4],[.2,-1.4,.18]],.1,w,N),u([[.22,-.55,.45],[.42,.1,.4],[.28,.9,.4],[-.23,1.02,.4],[-.4,.45,.43],[-.1,.1,.48],[.2,.22,.5]],.095,f,N),l([-.13,-.4,.45],[.23,.34,.07],s.black,N),l([-.45,-.5,.5],[.19,.28,.12],f,N),c([0,-1.8,0],.38,.25,s.copper,ae),T(ee===-1?"Л":"П",[0,-1.5,.6],.34,ae)}const P=i.clone(!0);P.scale.setScalar(.57),m.add(P);const C=[],O=[],U=[],V=[];for(let ee=0;ee<6;ee++){const ae=o([0,0,0],m);C.push(ae),V.push(new n.Vector3),l([0,0,0],[.19+Dr[ee]*.023,.16,.23],ee%2?s.concrete:s.copper,ae);const N=T(String(Dr[ee]),[0,.43,.1],.42,ae);O.push(N);const y=o([0,-.2,0],ae);U.push(y);for(let L=0;L<Dr[ee];L++)g([0,L*.045,0],.32,.012,w,y)}const z=l([0,.1,-1],.28,s.mint,m);h("НЕ ПО ТЕГАМ",[0,-.05,3.4],2.2,.3,m,{size:46});const I=o([3.15,.2,3.2],t);g([0,.12,0],.12,.035,w,I,[0,0,0]),l([0,0,0],[.12,.09,.1],s.concrete,I),I.visible=!1,d(S,[]),v.forEach(ee=>d(ee,[])),C.forEach((ee,ae)=>d(ee,[O[ae],U[ae]])),U.forEach(ee=>d(ee,[])),d(I,[]);let F=Bc(),B=!1,J=!1;try{J=JSON.parse(localStorage.getItem("beznogim-dream09-v1")||"{}").trace===!0}catch{}I.visible=J;function Y(){F=Bc(),B=!0,t.visible=!1,m.visible=!0,ue(0,0,!0)}function W(){B=!1,t.visible=!0,m.visible=!1}function ne(ee){if(!B)return;const ae=ry(F,ee);ae!==F&&(F=ae,p(150+Dr[ee]*35),_())}function j(){if(!B)return;const ee=oy(F);ee!==F&&(F=ee,p(F.phase==="unfolding"?510:160),_())}function ue(ee,ae,N=!1){if(!B)return;const y=F.phase;F=ay(F,ee);const L=Gc(F),Z=Number.isFinite(ee)?Math.min(.1,Math.max(0,ee)):0;if(v.forEach((K,A)=>{const R=A===0?-1:1;K.rotation.z=L.lean*(1-L.open)-R*L.open*Math.PI/2,K.position.y=1.9+L.open*.8}),P.position.set(0,L.headY,1.7-L.open*.8),P.rotation.x=F.places.some(K=>K===0)?Math.sin(ae*2.2)*.13:0,S.rotation.x=L.waterTilt,S.position.y=L.waterY,C.forEach((K,A)=>{V[A].set(...ly(F,A)),N?K.position.copy(V[A]):K.position.lerp(V[A],1-Math.exp(-9*Z)),O[A].visible=F.places[A]===0,U[A].rotation.y=ae*.2}),z.position.y=.1+L.open*4.7,z.scale.setScalar(.28*(1+L.open*.6)),F.phase==="flying"&&!J){J=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream09-v1",JSON.stringify({trace:!0}))}catch{}}y!==F.phase&&_()}return{enter:Y,exit:W,move:ne,act:j,update:ue,ready:()=>Vc(F),busy:()=>F.phase==="unfolding",text:()=>F.phase==="flying"?"Уши раскрылись крыльями. Вода встала стеной, а камень наконец утонул в небе. Теперь я хотя бы молчу с ушами.":F.phase==="unfolding"?"Ярлыки закончились. Берег поднимает уши, вода слушает стоя.":`Каждый камень: полка → левое → правое → полка. Разложи все шесть поровну. Сейчас ${Ja(F).join(" : ")}.`,button:()=>F.phase==="flying"?"увидеть сон снова":F.phase==="unfolding"?"берег слушает…":"услышать тишину · 11 : 11",inspect:()=>({...F,active:B,trace:J,loads:Ja(F),ready:Vc(F),pose:Gc(F),earAngles:v.map(ee=>ee.rotation.z),stones:C.map(ee=>ee.position.toArray()),tags:O.map(ee=>ee.visible),head:P.position.toArray(),moon:z.position.toArray(),moonScale:z.scale.x,waterTilt:S.rotation.x,rootVisible:t.visible,roomVisible:m.visible,landmarks:[[-4.2,.1,0],[4.2,.1,0],[0,4.9,-1],[0,.1,3.5]]})}}const Hc=Object.freeze([1,3,2]),Wc=()=>({phase:"tuning",turns:[0,0,0],progress:0,trace:!1}),ea=n=>n.turns.map((e,t)=>e===Hc[t]);function uy(n,e){return n.phase==="tuning"&&Number.isInteger(e)&&e>=0&&e<3?{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t)}:n}function hy(n){return n.phase==="sky"?Wc():n.phase==="tuning"&&ea(n).every(Boolean)?{...n,phase:"releasing",progress:0}:n}function dy(n,e){if(n.phase!=="releasing"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return t<1?{...n,progress:t}:{...n,progress:1,phase:"sky",trace:!0}}function Ad(n,e){const t=n.phase==="sky"?1:n.phase==="releasing"?n.progress:0,i=t*t*(3-2*t),s=e*Math.PI/5;return{x:Math.cos(s)*(3.05+i*.25),y:.65+i*(2.5+e%3*.65),z:Math.sin(s)*(3.05+i*.25),lift:i,diskScale:1-i*.78,diskTilt:i*Math.PI/2}}function fy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:g,sign:h,batchStatic:d,chime:p,changed:_}){const m=o([0,0,0],e);m.name="dream08-ten-torches",m.visible=!1;const f=r("#344c5d"),M=r("#647c83"),w=r("#ddc999"),x=["#d38d6d","#81beca","#d6c56e"],b=x.map(N=>r(N)),S=x.map(N=>r(N,{emissive:N,emissiveIntensity:1.4}));c([0,-.4,0],4.15,.22,f,m),g([0,-.27,0],4,.035,s.copper,m);const T=o([0,.18,0],m);c([0,0,0],2.6,.18,s.black,T),c([0,.105,0],.49,.015,w,T);const v=[],P=[];for(let N=0;N<3;N++){const y=.9+N*.6,L=o([0,.12,0],T);v.push(L),g([0,0,0],y,.035,b[N],L),g([0,-.02,0],y+.09,.008,M,L),l([y,.04,0],.13,S[N],L);for(let K=0;K<4;K++){const A=K*Math.PI/2;a([Math.cos(A)*y,.025,Math.sin(A)*y],[.1,.07,.1],K===Hc[N]?b[N]:M,T)}const Z=Hc[N]*Math.PI/2;P.push(u([Math.cos(Z)*y,.18,Math.sin(Z)*y],[0,.18,0],.018,S[N],T))}h("1 / 3 / 2",[0,.09,2.82],1.7,.35,m,{size:68}).rotation.x=-Math.PI/2;const C=[],O=[],U=[];for(let N=0;N<10;N++){const y=o([0,0,0],m),L=N%3;U.push(L),C.push(y),c([0,-.34,0],.055,.7,s.copper,y),c([0,0,0],.14,.14,b[L],y);const Z=l([0,.26,0],[.12,.3,.12],S[L],y);O.push(Z),g([0,-.16,0],.17,.018,b[L],y)}const V=i.clone(!0);V.position.set(0,.65,3.1),V.scale.setScalar(.4),m.add(V);const z=[];for(const N of[-1,1]){const y=o([N*.16,-.08,.7],V);u([0,0,0],[N*.85,-.12,0],.055,s.black,y),l([N*.8,-.12,0],[.19,.08,.08],s.black,y),z.push(y)}const I=o([-5.05,.15,1.55],t);c([0,0,0],.13,.06,s.black,I),l([0,.15,0],[.045,.095,.045],s.light,I),I.visible=!1,d(m,[T,...C,V]),d(T,[...v,...P]),v.forEach(N=>d(N,[])),C.forEach((N,y)=>d(N,[O[y]])),d(I,[]);let F=Wc(),B=!1,J=!1;const Y=[0,0,0],W=[0,0,0];try{J=JSON.parse(localStorage.getItem("beznogim-dream08-v1")||"{}").trace===!0}catch{}I.visible=J;function ne(){F=Wc(),Y.fill(0),W.fill(0),B=!0,t.visible=!1,m.visible=!0,ae(0,0)}function j(){B=!1,t.visible=!0,m.visible=!1}function ue(N){if(!B)return;const y=uy(F,N);y!==F&&(F=y,W[N]+=Math.PI/2,p(180+N*85+F.turns[N]*20),_())}function ee(){if(!B)return;const N=hy(F);N!==F&&(F=N,F.phase==="tuning"&&(Y.fill(0),W.fill(0)),p(F.phase==="releasing"?440:165),_())}function ae(N,y){if(!B)return;const L=F.phase;F=dy(F,N);const Z=ea(F),K=Ad(F,0),A=Number.isFinite(N)?Math.max(0,Math.min(.1,N)):0;if(v.forEach((R,G)=>{Y[G]=n.MathUtils.damp(Y[G],W[G],9,A),R.rotation.y=-Y[G],P[G].visible=Z[G]}),T.scale.setScalar(K.diskScale),T.rotation.x=K.diskTilt,T.position.y=.18+K.lift*2.7,C.forEach((R,G)=>{const q=Ad(F,G);R.position.set(q.x,q.y,q.z),R.rotation.z=K.lift*Math.sin(y*.7+G)*.1,O[G].visible=Z[U[G]],O[G].scale.y=1+Math.sin(y*5+G)*.1}),z.forEach((R,G)=>R.rotation.z=Math.sin(y*2+G*Math.PI)*.3),V.rotation.y=Math.sin(y*.3)*.12,F.trace&&!J){J=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream08-v1",JSON.stringify({trace:!0}))}catch{}}L!==F.phase&&_()}return{enter:ne,exit:j,turn:ue,act:ee,update:ae,busy:()=>F.phase==="releasing",canRelease:()=>F.phase!=="tuning"||ea(F).every(Boolean),text:()=>F.phase==="sky"?"Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.":F.phase==="releasing"?"Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.":"Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.",button:()=>F.phase==="sky"?"увидеть сон снова":F.phase==="releasing"?"факелы уходят в небо…":"освободить место ↑",inspect:()=>({...F,active:B,trace:J,aligned:ea(F),ringAngles:v.map(N=>N.rotation.y),flames:O.map(N=>N.visible),torches:C.map(N=>N.position.toArray()),diskScale:T.scale.x,diskTilt:T.rotation.x,diskY:T.position.y,rootVisible:t.visible,roomVisible:m.visible,whiskers:z.map(N=>N.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})}}const qc=()=>({phase:"flat",progress:0,trace:!1}),op=n=>["folding","falling","turning"].includes(n.phase);function py(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?qc():n}function my(n,e){if(!op(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function Cd(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function gy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,sign:g,batchStatic:h,chime:d,changed:p}){const _=new n.Group;e.add(_),_.visible=!1;const m=r("#e9dbb7"),f=r("#405e62"),M=r("#c87e68"),w=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],f,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],m,x);const b=[];for(let N=0;N<4;N++){const y=o([0,0,0],x);y.rotation.y=N*Math.PI/2;const L=o([0,0,1.25],y);a([0,0,.8],[2.5,.05,1.6],m,L),a([0,.032,.76],[.022,.015,1.3],M,L),a([0,.035,.1],[2.3,.015,.018],M,L),b.push(L)}const S=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],f,S),a([0,.12,0],[2.15,.08,2.15],s.concrete,S);const T=o([-.45,.18,-.3],S);a([0,.33,0],[.8,.66,.7],m,T),a([0,.4,.36],[.25,.28,.025],w,T),a([0,.73,0],[1.05,.12,.9],M,T);const v=o([.65,.72,-.5],S);u([-.25,-.5,0],[-.25,.4,0],.03,f,v),u([.25,-.5,0],[.25,.4,0],.03,f,v),u([-.25,.4,0],[.25,.4,0],.03,f,v);const P=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,M,P),l([0,-.67,0],.14,s.copper,P);for(let N=0;N<4;N++)a([-.7+N*.42,.23,.66],[.28,.13,.36],m,S);const C=[];for(const N of[-1.05,1.05])for(const y of[-1.05,1.05])C.push(u([N,4.45,y],[N,5.25,y],.012,s.copper,_));for(const N of[-2.8,2.8])u([N,0,-1.6],[N,5.3,-1.6],.06,f,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,f,_);const O=(N,y=_)=>{const L=o(N,y);a([0,.4,0],[.55,.1,.55],M,L),a([0,.73,-.24],[.55,.65,.08],M,L);for(const Z of[-.2,.2])for(const K of[-.2,.2])u([Z,0,K],[Z,.4,K],.025,f,L);return L},U=[O([-2.6,0,1.1]),O([-2.6,0,2.1]),O([-1.65,0,2.1]),O([-.7,0,2.1])],V=o([0,2,0],_);l([0,0,0],[.15,.27,.15],w,V),u([0,.18,0],[.19,.35,0],.018,s.copper,V);const z=i.clone(!0);z.scale.setScalar(.35),z.position.set(2.8,.78,1.65),_.add(z),g("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const I=O([-30.6,-1.3,-20.8],t);I.scale.setScalar(.35),I.visible=!1,h(_,[x,S,...C,...U,V,z]),h(x,b.map(N=>N.parent)),b.forEach(N=>h(N,[])),h(S,[T,v]),h(T,[]),h(v,[P]),h(P,[]),U.forEach(N=>h(N,[])),h(V,[]),h(I,[]);const F=new n.Vector3,B=new n.Vector3(1,0,-1).normalize();let J=qc(),Y=!1,W=!1;try{W=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}I.visible=W;function ne(){J=qc(),Y=!0,_.visible=!0,t.visible=!1,ee(0,0)}function j(){Y=!1,_.visible=!1,t.visible=!0}function ue(){const N=py(J);N!==J&&(J=N,d(J.phase==="falling"?165:J.phase==="turning"?440:330),p())}function ee(N,y){if(!Y)return;const L=J.phase;J=my(J,N);const{fold:Z,fall:K,turn:A}=Cd(J);if(b.forEach(R=>R.rotation.x=-Z*.92*(1-A)),x.quaternion.setFromAxisAngle(B,A*2.2),x.position.y=.12+A*3.9,S.position.set(0,4.4-3.65*K,0),S.quaternion.identity(),A>0&&(F.set(0,.63,0).applyAxisAngle(B,A*2.2),S.position.copy(F).add(x.position),S.quaternion.copy(x.quaternion)),C.forEach(R=>R.visible=K===0),P.rotation.z=Math.sin(y*2.1)*.5,V.position.set(-2.6*A,2-1.34*A,1.1*A),V.rotation.z=Math.sin(y)*.1,U.forEach((R,G)=>{G>0&&(R.position.y=A*.15*Math.sin(y+G),R.rotation.z=A*Math.sin(y+G)*.035)}),J.trace&&!W){W=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}J.phase!==L&&p()}return{enter:ne,exit:j,act:ue,update:ee,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[J.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[J.phase],busy:()=>op(J),inspect:()=>({...J,...Cd(J),active:Y,trace:W,rootVisible:t.visible,roomVisible:_.visible,leafAngles:b.map(N=>N.rotation.x),yard:S.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(S.quaternion.w))),yardQuaternion:S.quaternion.toArray(),pocket:x.position.toArray(),seed:V.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const Xc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function _y(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function vy(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?Xc():n}function xy(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function yy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:g,sign:h,batchStatic:d,chime:p,changed:_}){const m=o([0,0,0],e);m.name="dream-06-cloud-heating",m.visible=!1;const f=r("#203f49"),M=r("#dce6d7"),w=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),b=r("#598e9d"),S=r("#ede1c3");c([0,-.3,0],4,.4,f,m),g([0,-.06,0],3.85,.045,w,m);for(let G=0;G<8;G++)u([-3+G*.85,-.06,-2.5],[-3+G*.85,-.06,2.5],.012,b,m);const T=o([-2.35,0,.2],m);a([0,.2,0],[1.7,.35,1.3],s.concrete,T);for(let G=0;G<6;G++){const q=-.65+G*.26;a([q,1.2,0],[.16,1.8,.66],w,T),g([q,2.12,0],.27,.065,w,T,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,w,T),u([-.8,1.95,.2],[.8,1.95,.2],.11,w,T);const v=l([-2.35,1.15,.87],.42,b,m);g([-2.35,1.15,.87],.48,.024,S,m,[.5,.3,0]);const P=["ЗЕМЛЯ","ОБЛАКО"].map((G,q)=>{const ie=o([-3+q*1.3,.4,2.1],m);a([0,0,0],[.87,.14,1.13],f,ie);for(let k=0;k<4;k++)a([-.27+k*.18,.09,-.28],[.08,.03,.25],x,ie);return h(G,[0,.12,.32],.78,.22,ie,{size:52}).rotation.x=-Math.PI/2,ie}),C=g([-2.8,.57,2.1],.5,.035,x,m);C.rotation.x=Math.PI/2;const O=o([0,0,0],m);u([-1.5,.45,.2],[-.7,.45,.2],.09,w,O),u([-.7,.45,.2],[-.7,3.7,.2],.09,w,O),u([-.7,3.7,.2],[1.2,3.7,.2],.09,w,O);const U=Array.from({length:7},(G,q)=>l([.1+q*.45,3.8+q%2*.22,-.8],[.65,.45,.63],M,m)),V=o([1.25,3.1,-.8],m);a([0,.2,0],[2.6,.1,1.7],S,V);for(const G of[-1.15,1.15])for(const q of[-.7,.7])u([G,.2,q],[G,1.28,q],.045,w,V);const z=o([0,1.26,0],V);a([-.61,.15,0],[1.45,.12,1.95],M,z).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,z).rotation.z=-.35;const I=[a([-.68,.8,.72],[.48,.57,.06],x,V),a([.68,.8,.72],[.48,.57,.06],x,V)],F=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],B=[],J=[];F.forEach(([G,q,ie],k)=>{const te=o([G,q,ie],m);B.push(te),a([0,.05,0],[1.2,.13,1.1],s.concrete,te);for(const $ of[-.5,.5])u([$,.1,-.38],[$,1.1,-.38],.045,w,te);u([-.5,1.1,-.38],[0,1.5,-.38],.045,w,te),u([0,1.5,-.38],[.5,1.1,-.38],.045,w,te);const se=o([1.25,3.9,-.05],m);J.push(se),a([0,0,0],[.65,.72,.12],S,se),a([0,0,.071],[.48,.55,.035],x,se),u([0,-.28,.1],[0,.28,.1],.018,w,se),u([-.23,0,.1],[.23,0,.1],.018,w,se)});const Y=Array.from({length:10},()=>l([0,0,0],.065,x,m)),W=i.clone(!0);W.scale.setScalar(.4),W.position.set(-2,.9,-1.7),m.add(W),h("СОН / 06",[0,-.04,3.3],1.5,.29,m,{size:52}).rotation.x=-Math.PI/2;const ne=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],w,ne),a([0,0,.04],[.13,.22,.02],x,ne),ne.visible=!1,d(m,[T,v,...P,C,O,...U,V,...B,...J,...Y,W]),d(T,[]),d(O,[]),d(V,[z,...I]),d(z,[]),B.forEach(G=>d(G,[])),J.forEach(G=>d(G,[])),P.forEach(G=>d(G,[]));let j=Xc(),ue=!1,ee=0,ae=0,N=!1;try{N=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}ne.visible=N;function y(){j=Xc(),ee=0,ae=0,ue=!0,m.visible=!0,t.visible=!1,A(0,0)}function L(){ue=!1,m.visible=!1,t.visible=!0}function Z(G){j=_y(j,G),p(G==="sky"?330:165),_()}function K(){j=vy(j),p(j.phase==="raining"?440:220),_()}function A(G,q){if(!ue)return;const ie=j.phase;j=xy(j,G);const k=j.phase==="heating",te=j.target==="sky",se=te?k?j.progress:["cloud","raining","settled"].includes(j.phase)?1:0:0;if(ee=se,ae=j.phase==="raining"?j.progress:j.phase==="settled"?1:0,V.visible=se>.02,V.scale.setScalar(Math.max(.001,se)),V.position.y=3.1+Math.sin(q*.9)*.05,U.forEach(($,ce)=>{$.position.y=3.8+ce%2*.22+se*.5-ae*.25,$.scale.set(.65+se*.12,.45*(1-se*.6),.63)}),v.scale.setScalar(.42*(k&&!te?1+Math.sin(j.progress*Math.PI)*.75:1)),v.rotation.y=q*.2,J.forEach(($,ce)=>{const ye=Math.max(0,Math.min(1,ae*1.6-ce*.3)),be=ye*ye*(3-2*ye),Q=F[ce];$.position.set(1.25+(Q[0]-1.25)*be,3.9+(Q[1]+.8-3.9)*be,-.05+(Q[2]+.06+.05)*be),$.rotation.z=(1-be)*Math.sin(q+ce)*.1,$.visible=["cloud","raining","settled"].includes(j.phase)}),I.forEach($=>$.visible=j.phase==="cloud"||k),C.position.x=te?-1.7:-3,Y.forEach(($,ce)=>{$.visible=k;const ye=(q*.7+ce/10)%1;te?ye<.72?$.position.set(-.7,.45+ye/.72*3.25,.2):$.position.set(-.7+(ye-.72)/.28*1.9,3.7,.2):$.position.set(-2.35+Math.sin(ye*Math.PI*2)*.6,.5+ye*1.8,.87)}),j.trace&&!N){N=!0,ne.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}j.phase!==ie&&_()}return{enter:y,exit:L,choose:Z,act:K,update:A,text:()=>({ready:j.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:j.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[j.phase],button:()=>j.phase==="raining"?"окна падают…":j.phase==="heating"?"тепло идёт…":j.phase==="settled"?"увидеть сон снова":j.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...j,active:ue,trace:N,warmth:ee,spent:ae,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:m.visible,houseVisible:V.visible,windows:J.map(G=>G.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...F.map(G=>[G[0],.8,G[2]])]})}}function Yc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function My(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function Sy(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Yc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function by(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function Ey({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,batchStatic:p,chime:_,changed:m}){const f=a([0,0,0],e);f.name="dream-05-self-measuring-instrument",f.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),w=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),b=r("#1c4147"),S=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,b,f),u([0,-.16,0],3.45,.08,S,f),h([0,-.1,0],3.65,.07,s.copper,f);for(let $=0;$<5;$++)h([0,-.1+$*.006,0],.7+$*.52,.009,w,f);const T=a([0,0,0],f);l([0,.12,-1.6],[3,.34,1.3],s.concrete,T),g([0,.3,-1.65],[0,3.75,-1.65],.12,M,T);const v=a([0,3.7,-1.4],f),P=u([0,0,-.12],1.05,.2,b,v);P.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const C=a([-.85,0,.02],v),O=a([.85,0,.02],v);l([.425,0,0],[.85,1.72,.1],x,C),l([-.425,0,0],[.85,1.72,.1],x,O);for(let $=0;$<12;$++){const ce=$*Math.PI/6;g([Math.sin(ce)*.78,Math.cos(ce)*.78,.09],[Math.sin(ce)*.91,Math.cos(ce)*.91,.09],.016,s.copper,v)}const U=a([0,0,.14],v);g([0,-.15,0],[0,.69,0],.025,b,U),c([0,0,0],.065,s.copper,U);const V=[a([-2.35,1.65,0],f),a([2.35,1.65,0],f)];for(const[$,ce]of V.entries())l([0,0,0],[.24,1.65,.38],M,ce),l([$===0?.38:-.38,-.76,0],[.95,.18,.38],w,ce),c([0,.84,0],.19,s.copper,ce);const z=[],I=[],F=[];for(let $=0;$<12;$++){const ce=-2.45+$*.445;I.push(new n.Vector3(ce,2.52,0));const ye=$/11,be=ye*Math.PI*1.35;F.push(new n.Vector3(2.35*Math.cos(be)*(1-ye*.85),.24+ye*3,2.05-ye*3.2));const Q=a(I[$].toArray(),f);z.push(Q),l([0,0,0],[.42,.16,.57],M,Q),l([0,.09,.15],[.03,.012,.2],s.copper,Q)}const B=c([0,.7,0],[.45,.64,.45],w,f),J=i.clone(!0);f.add(J),J.scale.setScalar(.43);const Y=new n.Vector3(2.8,.65,2.15);J.position.copy(Y);function W($,ce){const ye=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Ae],X)=>X?ye.lineTo(ze,Ae):ye.moveTo(ze,Ae)),ye.closePath();const be=new n.ExtrudeGeometry(ye,{depth:.07,bevelEnabled:!1}),Q=a([0,0,0],$);return o(be,x,null,null,Q),Q.scale.setScalar(ce),Q}const ne=W(v,.88);ne.position.set(0,.1,.2),ne.visible=!1;const j=W(ne,.22);j.position.set(-.03,-.2,.12);const ue=l([-.03,-.2,.085],[.34,.44,.01],b,ne),ee=W(t,.17);ee.position.set(2.8,1.14,-2.75),ee.rotation.y=Math.PI/4,d("СОН / 05",[0,-.055,2.94],1.65,.3,f,{size:48}).rotation.x=-Math.PI/2,d("СЕБЯ?",[0,.36,-.88],1.05,.26,f,{size:52});const ae=d("?",[-1.6,.65,1.5],.48,.65,f,{size:84,bg:"#1c4147"}),N=h([0,.12,0],.68,.035,s.light,f);p(f,[T,v,...z,...V,B,J,ae,N]),p(T,[]),p(v,[C,O,U,ne]),p(C,[]),p(O,[]),p(U,[]),p(ne,[j,ue]),p(j,[]),z.forEach($=>p($,[])),V.forEach($=>p($,[]));let y=Yc(),L=!1,Z=0,K=0,A=!1;try{A=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}ee.visible=A;function R(){y=Yc(),Z=0,K=0,L=!0,f.visible=!0,t.visible=!1,k(0,0)}function G(){L=!1,f.visible=!1,t.visible=!0}function q($){y=My(y,$),_($==="self"?330:165),m()}function ie(){y=Sy(y),_(y.phase==="climbing"?440:220),m()}function k($,ce){if(!L)return;const ye=y.phase;y=by(y,$);const be=y.phase==="unfolding"?y.progress:["stairs","climbing","inside"].includes(y.phase)?1:0;Z=be*be*(3-2*be),K=n.MathUtils.damp(K,y.phase==="inside"?1:0,3,$),z.forEach((ze,Ae)=>{ze.position.lerpVectors(I[Ae],F[Ae],Z),ze.rotation.y=Z*(-Ae*.07)});const Q=y.phase==="measuring"?Math.sin(y.progress*Math.PI):0;if(V.forEach((ze,Ae)=>{const X=Ae===0?-1:1;ze.position.set(X*(2.35-Q*1.55),1.65+Z*.4,-Z*.85),ze.rotation.z=X*Z*.65}),U.rotation.z=y.phase==="measuring"?Math.sin(y.progress*35)*.8:y.phase==="refused"?Math.sin(ce*6)*.25:-Z*Math.PI*1.75,B.position.y=.7+(y.phase==="measuring"?Math.sin(y.progress*Math.PI)*1.5:Math.sin(ce*1.3)*.05),B.scale.set(.45*(1-Q*.16),.64*(1+Q*.3),.45*(1-Q*.16)),ae.visible=y.phase==="refused",ae.position.y=.65+Math.sin(ce*2)*.1,C.rotation.y=K*1.7,O.rotation.y=-K*1.7,U.visible=K<.2,ne.visible=y.phase==="inside",ne.rotation.z=Math.sin(ce*.7)*.04,j.rotation.z=-ce*.12,J.position.copy(Y),J.scale.setScalar(.43),J.visible=y.phase!=="inside",["climbing","inside"].includes(y.phase)){const ze=y.phase==="inside"?1:y.progress,Ae=[Y,...F.map(le=>le.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],X=ze*(Ae.length-1),E=Math.min(Ae.length-2,Math.floor(X));J.position.lerpVectors(Ae[E],Ae[E+1],Math.min(1,X-E)),J.scale.setScalar(.43*(1-ze*.8))}if(N.position.set((y.target==="self",0),y.target==="self"?3.7:.12,y.target==="self"?-1.4:0),N.rotation.x=y.target==="self"?0:Math.PI/2,N.visible=["ready","refused","measuring","unfolding"].includes(y.phase),y.trace&&!A){A=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ye!==y.phase&&m()}function te(){return{ready:y.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[y.phase]}return{enter:R,exit:G,choose:q,act:ie,update:k,text:te,button:()=>y.phase==="inside"?"увидеть сон снова":y.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...y,active:L,trace:A,unfold:Z,opened:K,rootVisible:t.visible,roomVisible:f.visible,steps:z.map($=>$.position.toArray()),jaws:V.map($=>$.position.toArray()),drop:B.position.toArray(),head:J.position.toArray(),cursorVisible:ne.visible,cursorPosition:ne.getWorldPosition(new n.Vector3).toArray(),faceAngles:[C.rotation.y,O.rotation.y],nestedVisible:ne.visible&&j.visible,landmarks:[B.position.toArray(),[0,3.7,-1.4],Y.toArray(),F[0].toArray()]})}}const wy=["восток","юг","запад","север"],ap=[0,2,3];function fc(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function Ty(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Ay(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==ap[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function Cy(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Ry({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,batchStatic:p,chime:_,changed:m}){const f=a([0,0,0],e);f.name="dream-04-letter-above-roof",f.visible=!1;const M=r("#355b62"),w=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,f),h([0,-.26,0],3.78,.024,s.copper,f);for(let A=0;A<4;A++){const R=A*Math.PI/2,G=Math.cos(R)*3.05,q=Math.sin(R)*3.05;d(["В","Ю","З","С"][A],[G,-.23,q],.38,.28,f).rotation.x=-Math.PI/2}const b=[],S=[],T=[];for(let A=0;A<3;A++){const R=1.05+A*1.4,G=2.05-A*.27,q=a([0,R,0],f);b.push(q);for(let ce=1;ce<4;ce++){const ye=ce*Math.PI/2,be=Math.cos(ye),Q=Math.sin(ye),ze=[[.3,.3,-.3],[.3,.3,.3],[G,.04,G],[G,.04,-G]],Ae=new n.BufferGeometry,X=[];for(const le of[0,1,2,0,2,3]){const[he,pe,Ee]=ze[le];X.push(he*be-Ee*Q,pe,he*Q+Ee*be)}Ae.setAttribute("position",new n.Float32BufferAttribute(X,3)),Ae.computeVertexNormals();const E=w.clone();E.side=n.DoubleSide,o(Ae,E,null,null,q),g([G*be-G*Q,.04,G*Q+G*be],[G*be+G*Q,.04,G*Q-G*be],.035,s.copper,q);for(const le of[-1,1])g([G*be-G*Q*le,.04,G*Q+G*be*le],[(G+.16)*be-(G+.16)*Q*le,.2,(G+.16)*Q+(G+.16)*be*le],.035,s.copper,q)}const ie=a([G*.67,.045,0],q);g([-.32,0,0],[.3,0,0],.026,s.mint,ie),g([.3,0,0],[.1,0,.13],.026,s.mint,ie),g([.3,0,0],[.1,0,-.13],.026,s.mint,ie),S.push(ie);const k=ap[A]*Math.PI/2,te=Math.cos(k)*G*.63,se=Math.sin(k)*G*.63,$=h([te,R+.09,se],.16,.025,s.light,f);T.push($),d(`${A+1}`,[G+.26,R+.14,.2],.36,.29,f,{bg:"#355b62",fg:"#f0e4b8"});for(const ce of[-1,1])g([ce*.3,R-.32,-.3],[ce*.3,R-.03,-.3],.018,s.copper,f)}const v=a([-2.6,.16,1.5],f);l([0,0,0],[1.1,.62,.7],s.cream,v),l([0,.16,.361],[.72,.07,.025],M,v),d("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,f,{size:40});const P=i.clone(!0);f.add(P),P.scale.setScalar(.53),P.position.set(-2.6,1,1.5),P.rotation.z=-.12,d("СОН / 04",[0,-.12,3.34],1.8,.32,f,{size:48}).rotation.x=-Math.PI/2;const C=a([-1.1,.12,1.5],f);l([0,0,0],[.52,.025,.36],x,C);const O=a([-.26,.016,0],C),U=a([.26,.016,0],C);l([.13,0,0],[.26,.022,.36],x,O),l([-.13,0,0],[.26,.022,.36],x,U),g([-.25,.04,-.17],[0,.04,.1],.009,s.copper,C),g([.25,.04,-.17],[0,.04,.1],.009,s.copper,C);const V=c([0,.045,0],.055,s.light,C),z=a([0,5.3,0],f);h([0,0,0],.55,.025,s.copper,z),g([0,-.3,0],[0,.22,0],.018,s.copper,z);const I=Array.from({length:6},(A,R)=>{const G=R*Math.PI/3,q=c([Math.cos(G)*.29,0,Math.sin(G)*.29],[.21,.065,.11],x,z);return q.rotation.y=-G,q});z.visible=!1;const F=[new n.Vector3(-1.1,.12,1.5),...T.map(A=>A.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],B=new n.BufferGeometry().setFromPoints(F),J=new n.Line(B,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));J.computeLineDistances(),f.add(J);let Y=fc(),W=!1,ne=0,j=!1,ue=[Math.PI/2,Math.PI/2,Math.PI/2];try{j=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const ee=a([-3.75,1.17,-2.95],t);ee.visible=j,l([0,0,0],[.23,.012,.16],x,ee),g([-.11,.016,-.07],[0,.016,.04],.005,s.copper,ee),g([.11,.016,-.07],[0,.016,.04],.005,s.copper,ee),p(f,[...b,...T,v,P,C,z,J]),b.forEach((A,R)=>p(A,[S[R]])),p(C,[O,U,V]),p(O,[]),p(U,[]),p(v,[]),p(z,I),p(ee,[]);function ae(){W=!0,Y=fc(),ne=0,ue=Y.turns.map(A=>A*Math.PI/2),f.visible=!0,t.visible=!1,Z(0,0)}function N(){W=!1,f.visible=!1,t.visible=!0}function y(A){Y=Ty(Y,A),_(165+A*55+Y.turns[A]*22),m()}function L(){Y.phase==="delivered"?(Y=fc(),ne=0):Y=Ay(Y),_(220),m()}function Z(A,R){if(!W)return;const G=Y.phase;Y=Cy(Y,A),ne=n.MathUtils.damp(ne,Y.phase==="delivered"?1:0,2.4,A),b.forEach((se,$)=>{const ce=Y.turns[$]*Math.PI/2,ye=Math.atan2(Math.sin(ce-ue[$]),Math.cos(ce-ue[$]));ue[$]+=ye*(A===0?1:1-Math.exp(-A*7)),se.rotation.y=-ue[$],se.position.x=ne*[-2.15,1.85,0][$],se.position.z=ne*[.45,-.65,-2.1][$],se.rotation.z=ne*($===0?-.16:.13)});const q=Math.min(4,Y.progress),ie=Math.min(3,Math.floor(q)),k=Math.min(1,q-ie),te=k*k*(3-2*k);if(C.position.lerpVectors(F[ie],F[ie+1],te),C.rotation.y=R*.16,O.rotation.z=-ne*1.1,U.rotation.z=ne*1.1,V.position.y=.045+ne*.18,z.visible=Y.phase==="delivered",z.rotation.y=R*.22,I.forEach((se,$)=>{se.position.y=Math.sin(R*.7+$)*.035}),J.visible=Y.phase!=="delivered",Y.trace&&!j){j=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}G!==Y.phase&&m()}function K(){return Y.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":Y.phase==="caught"?`Поймала крыша ${Y.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:Y.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:ae,exit:N,turn:y,send:L,update:Z,text:K,directions:wy,inspect:()=>({...Y,turns:[...Y.turns],active:W,trace:j,open:ne,roomVisible:f.visible,rootVisible:t.visible,roofs:b.map(A=>({position:A.position.toArray(),rotation:A.rotation.toArray().slice(0,3)})),letter:C.position.toArray(),goals:T.map(A=>A.position.toArray()),crown:z.visible})}}function Py({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:g,torus:h,sign:d,paperBoat:p,batchStatic:_,chime:m}){const f=a([0,0,0],e);f.name="dream-03-silent-dock",f.visible=!1;const M=r("#526b79"),w=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,f),u([0,-.23,0],4,.055,w,f),h([0,-.18,0],4.08,.04,s.copper,f),l([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,f);for(let R of[-.1,.55,1.2,1.85])l([-2.85,.07,R],[1.38,.045,.025],M,f);for(let R of[-3.4,-2.3])g([R,-.3,1.9],[R,.48,1.9],.035,s.copper,f);d("СОН / 03",[-2.85,.13,2.4],1.6,.28,f,{size:48}).rotation.x=-Math.PI/2;const b=i.clone(!0);b.position.set(-2.8,1.27,.75),b.scale.setScalar(.65),f.add(b);const S=[];for(const R of[-1,1]){const G=a([R*.12,-.04,.68],b);g([0,0,0],[R*.64,-.2,.05],.06,s.black,G),c([R*.62,-.18,.05],[.19,.095,.07],s.black,G),g([R*.58,-.18,.06],[R*.58,-.7,.06],.015,s.copper,G),c([R*.58,-.76,.06],.075,s.copper,G),_(G,[]),S.push(G)}const T=Array.from({length:3},(R,G)=>h([-1.2+G*1.25,-.17,-.25],.72,.035,G===1?s.cream:s.copper,f)),v=Array.from({length:3},(R,G)=>h([-1.2+G*1.25,-.165,-.25],.72,.013,x,f)),P=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,f),C=p(f,[-1.9,-.13,-.25],.9),O=c([0,.53,0],[.065,.09,.065],s.light,C),U=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,f);U.rotation.z=.65;const V=[];for(let R=0;R<5;R++){const G=-1.6+R*.85;g([G,-.2,-2.9],[G,1.1+R%2*.4,-2.9],.025,M,f),V.push(c([G,1.12+R%2*.4,-2.9],.035,s.light,f))}let z=!1,I=0,F=1,B=[1,1,1],J=[0,0,0],Y=0,W=0,ne=!1;try{ne=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const j=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);j.visible=ne;const ue=Array.from({length:5},()=>new n.Vector3),ee=new n.CatmullRomCurve3(ue),ae=new n.Vector3,N=new n.Vector3;_(f,[b,...T,...v,P,C,U,...V]),_(b,S),_(C,[O]);function y(R){F=n.MathUtils.clamp(Math.round(Number(R)||1),1,3)}function L(){z=!0,I=0,B=[1,1,1],J=[0,0,0],Y=0,W=0,f.visible=!0,t.visible=!1,A(0,0)}function Z(){z=!1,f.visible=!1,t.visible=!0}function K(){if(z){if(I===3){I=0,B=[1,1,1],J=[0,0,0],W=0;return}if(B[I]=F,I++,Y=0,m(110+F*55),I===3){ne=!0,j.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function A(R,G){if(!z)return;W+=Math.min(R,.15),Y+=Math.min(R,.15);for(let te=0;te<3;te++){J[te]=n.MathUtils.damp(J[te],te<I?1:0,3,R);const se=-.17+J[te]*(.95+B[te]*.42),$=.72+B[te]*.12;T[te].position.y=se,T[te].rotation.set(Math.PI/2*(1-J[te]),Math.PI/2*J[te],0),T[te].scale.setScalar($/.72),v[te].scale.setScalar($/.72*(1+Math.sin(W*.9+te)*.045)),ue[te+1].set(T[te].position.x,Math.max(-.1,se),-.25)}ue[0].set(-2,-.1,-.25),ue[4].set(2.5,-.1,-.25);const q=(1-Math.cos(W*.55))*.5;ee.getPoint(q,ae),ee.getPoint(Math.min(.999,q+.012),N),C.position.copy(ae),C.rotation.z=n.MathUtils.clamp(Math.atan2(N.y-ae.y,N.x-ae.x),-.45,.45),C.rotation.y=0,P.visible=I>0;const ie=Math.min(1,Y/1.8),k=Math.max(0,I-1);P.position.set(n.MathUtils.lerp(-2.5,-1.2+k*1.25,ie),.35+ie*(2.1+B[k]*.35),n.MathUtils.lerp(1.4,-.25,ie)),P.rotation.y=W*.4,S.forEach((te,se)=>te.rotation.z=Math.sin(W*1.2+se*Math.PI)*(.06+I*.04)),O.position.y=.53+Math.sin(G)*.02}return{enter:L,exit:Z,toss:K,choose:y,update:A,inspect:()=>({active:z,step:I,force:F,forces:[...B],lift:[...J],trace:ne,roomVisible:f.visible,rootVisible:t.visible,boat:C.position.toArray(),ringY:T.map(R=>R.position.y),ringRotation:T.map(R=>R.rotation.toArray().slice(0,3)),stone:P.position.toArray()})}}function Rd(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(c=>Number(c.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const c=t.batch,u=Math.min(i,Math.max(0,360-c.age));c.age+=u,c.exposure[c.face]+=u,c[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const c=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:c.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:c.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=c.air,t.batch&&t.batch.age<360&&c.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(c.id),g=t.shelf.findIndex(h=>h.id===u);if(g<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(g,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",d={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(d),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:d,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,l={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:l,result:s,seconds:o,label:r}}const Ly={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Iy({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,mesh:u,sign:g,batchStatic:h,changed:d,watching:p,localPlay:_}){var G,q,ie;const m=s([24,-1.55,0]);m.name="cheese-cellar";const f=i("#697b70"),M=i("#b4b89b"),w=i("#936c4d"),x=i("#e1b064"),b=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],f,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let k=-4;k<=4;k+=2)r([k,1.5,-3.43],[.16,3,.1],f,m);for(let k of[-4.4,4.4])l([k,0,-3.3],[k,3.6,-3.3],.09,t.copper,m),l([k,3.6,-3.3],[k,3.6,2.5],.09,t.copper,m),l([k,3.6,2.5],[k,0,2.5],.09,t.copper,m);g("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let k of[-3.8,3.8])r([k,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,t.copper,m),c([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,S,m),l([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let k of[2.8,3.5])a([k,.28,1.8],.26,.56,t.cream,m),a([k,.59,1.8],.12,.1,t.copper,m);const T=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let k=0;k<4;k++)r([2.25+k*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const v=s([.5,1.02,.25],m),P=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),C=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),b,[0,0,0],null,v),O=c([0,.33,0],.35,.026,t.cream,v),U=s([.5,.65,2.3],m),V=[];for(let k=0;k<6;k++)V.push(o([-1.25+k*.5,0,0],.08,t.mint,U));const z=g("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});z.rotation.x=-Math.PI/2;function I(k){const te=s(k,m),se=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,te),$=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),b.clone(),[0,0,0],null,te),ce=s([0,-.14,.09],te);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ce);const ye=o([.09,.16,.27],.04,t.mint,ce),be=u(new n.IcosahedronGeometry(.21,0),f,[.13,.02,.23],null,te),Q=s([0,0,0],te);for(const[ze,Ae,X]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Ae,X],[.05,.05,.025],t.dark,Q);return{g:te,body:se,crust:$,steps:ce,crystal:be,holes:Q,pearl:ye}}const F=Array.from({length:6},(k,te)=>I([-3.15+te*1.26,1.42,-2.6])),B=s([0,0,0],e);for(let k=0;k<24;k++){const te=k/23;r([8.3+te*11.2,-.15-te*1.32,1.4+Math.sin(te*Math.PI)*2],[.85,.15,.75],f,B)}for(let k=0;k<5;k++)r([20+k*.7,-1.46,1.4-k*.22],[.75,.13,.7],f,B);g("СЫР →",[10.2,.35,2.4],1.5,.4,B,{size:44}),l([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,B),h(B,[]),h(m,[v,T,U,z,...F.map(k=>k.g)]);for(const k of F)h(k.steps,[k.pearl]),h(k.holes,[]);let J=null,Y=null,W=0,ne=null,j="",ue=0;try{const k=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");J=(k==null?void 0:k.state)||k,W=Number(k==null?void 0:k.clockOffset)||0}catch{}const ee=()=>Date.now()/1e3+W;function ae(k,te,se={}){const $=Rd({state:J,mode:k,tool:te,args:se,now:ee()});J=$.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:J,clockOffset:W}))}catch{}return $}ae("migrate");const N=document.createElement("div");N.id="cellar-controls",N.hidden=!0,N.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(N);function y(){return Y&&p()?Y:Rd({mode:"migrate",state:J,now:J.updated}).public}function L(k){ne=k;const te=k.batch;if(v.visible=!!te,z.visible=!te,T.rotation.y=k.air==="dry"?-.8:0,te){v.rotation.z=te.face?Math.PI:0;const se=te.age/360;P.material.color.set(te.culture==="moon"?"#e9cf8b":"#c8bc88"),C.material.color.set(k.air==="damp"?"#8b9f78":"#b87a48"),O.scale.setScalar(1+se*.15)}for(let se=0;se<6;se++)V[se].visible=!!te&&te.age>=(se+1)*60;F.forEach((se,$)=>{const ce=k.shelf[$];se.g.visible=!!ce,ce&&(se.g.rotation.z=ce.kind==="lopsided"?.22:0,se.crust.material.color.set(ce.wet>=180?"#8b9f78":"#b87a48"),se.steps.visible=ce.kind==="moon_stair",se.crystal.visible=ce.kind==="stone",se.holes.visible=ce.kind==="holes"||ce.kind==="lopsided")})}function Z(k,te){_();const se=ae("action",k,te);return j="",R(0),d(),se}for(const k of N.querySelectorAll("[data-culture]"))k.onclick=()=>Z("set_batch",{culture:k.dataset.culture});N.querySelector("#cellar-turn").onclick=()=>Z("tend",{air:J.air,turn:!0}),N.querySelector("#cellar-air").onclick=()=>Z("tend",{air:J.air==="damp"?"dry":"damp",turn:!1}),N.querySelector("#cellar-wait").onclick=()=>{_(),W+=60,ae("tick"),j="",R(0),d()};function K(){const k=ne||y(),te=k.batch,se=Y&&p()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",$=te?te.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(te.age)}/360 с. Корка: ${Math.floor(te.exposure[0])}/${Math.floor(te.exposure[1])} с.`:k.shelf.length?`На полке: ${k.shelf.map(ce=>Ly[ce.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:Y&&p()?"войти в свою сыроварню":te?te.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(Y&&p())&&!!te&&!te.ready,description:se+" "+$}}function A(){const k=ne||y(),te=k.batch;N.querySelector("#cellar-readout").textContent=`${k.air==="damp"?"сыро":"сухо"} · ${te?te.ready?"готово":`ещё ${Math.ceil(te.remaining)} с`:"нет колеса"} · полка ${k.shelf.length}/6`;for(const se of N.querySelectorAll("[data-culture]"))se.disabled=!!te;N.querySelector("#cellar-turn").disabled=!te||te.ready,N.querySelector("#cellar-air").textContent=k.air==="damp"?"сделать суше":"вернуть сырость"}function R(k){k-ue>=1&&(ue=k,ae("tick"));const te=y(),se=JSON.stringify(te);se!==j&&(j=se,L(te),A(),d())}return window.addEventListener("beznogim:state",({detail:k})=>{var se,$;const te=($=(se=k.mechanics)==null?void 0:se.cellar)==null?void 0:$.public;te&&(Y=te,j="")}),Y=((ie=(q=(G=window.__beznogimState)==null?void 0:G.mechanics)==null?void 0:q.cellar)==null?void 0:ie.public)||null,L(y()),A(),{house:m,controls:N,update:R,card:K,run:()=>Z(J.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:Y&&p()?"resident":"sandbox",...ne,wheelVisible:v.visible,shelfVisible:F.filter(k=>k.g.visible).length,stairsVisible:F.filter(k=>k.g.visible&&k.steps.visible).length,shutter:T.rotation.y})}}function Dy({entries:n,elements:e,layer:t,camera:i}){const s=new xt,r=new xt,o=new H,a=Object.entries(n).map(([g,h])=>({element:e[g],anchor:h.point,x:NaN,y:NaN,visible:null}));let l=0,c=0,u=!1;return{update(g,h,d){if(t.hidden===g&&(t.hidden=!g),!g){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const p=!u||l!==h||c!==d||!s.equals(r);l=h,c=d,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!p)continue;o.copy(_.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,f=(1-o.y)*d*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&f>=10&&f<=d-55;if(M!==_.visible&&(_.visible=M,_.element.classList.toggle("hidden",!M)),!M)continue;const w=Math.round(m*10)/10,x=Math.round(f*10)/10;(w!==_.x||x!==_.y)&&(_.x=w,_.y=x,_.element.style.transform=`translate3d(${w}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Ny(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,g=Math.max(12,u?0:a.bottom+12,u?c.bottom+12:0),h=Math.max(64,innerHeight-l.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(g)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Se=n=>document.querySelector(n),en=()=>innerWidth<700,lp=matchMedia("(prefers-reduced-motion: reduce)").matches;let Nr={};try{Nr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!Nr.running,harvest:Math.min(99,Math.max(0,Number(Nr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Nr.dockTrips)||0))),dockPending:Nr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function dr(){return we.roof===null?we.running||we.loop>0:!!we.roof}function $c(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const st=new ip({antialias:!0,alpha:!1,powerPreference:"high-performance"});st.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2));st.setSize(innerWidth,innerHeight,!1);st.shadowMap.enabled=!0;st.shadowMap.type=er;st.shadowMap.autoUpdate=!1;st.shadowMap.needsUpdate=!0;st.outputColorSpace=cn;st.toneMapping=tl;st.toneMappingExposure=1.22;Se("#world").append(st.domElement);const Kt=new Cf;Kt.background=new ht("#182e32");Kt.fog=new fl("#182e32",8e-4);const Oe=new lo(-10,10,10,-10,.1,600),Fu=new H(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(Fu);const je=new Ux(Oe,st.domElement);je.target.copy(Fu);je.enableDamping=!0;je.enableRotate=!1;je.enablePan=!0;je.minZoom=.075;je.maxZoom=2.5;je.screenSpacePanning=!1;je.mouseButtons.LEFT=Ai.PAN;je.mouseButtons.RIGHT=Ai.PAN;je.touches.ONE=wi.PAN;je.touches.TWO=wi.DOLLY_PAN;Kt.add(new Wf("#d9eedc","#334d53",2.3));const Ls=new Du("#ffe2ac",3.3);Ls.position.set(-7,14,6);Ls.castShadow=!0;Ls.shadow.mapSize.set(en()?512:1024,en()?512:1024);Object.assign(Ls.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});Ls.shadow.bias=-4e-4;Ls.shadow.normalBias=.025;Kt.add(Ls);const cp=new Du("#8ad5d8",1.3);cp.position.set(5,7,-8);Kt.add(cp);const dt=new Ki;Kt.add(dt);const pc={};function Ke(n,e={}){const t=n+JSON.stringify(e);return pc[t]||(pc[t]=new Ks({color:n,roughness:.8,...e}))}const ci={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},ge={concrete:Ke(ci.concrete),cream:Ke(ci.cream),dark:Ke(ci.dark),metal:Ke(ci.metal,{metalness:.5,roughness:.4}),copper:Ke(ci.copper,{metalness:.6,roughness:.35}),rust:Ke(ci.rust),black:Ke(ci.black),leaf:Ke(ci.leaf),light:Ke("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:Ke("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},gr={box:new ki(1,1,1),sphere:new vl(1,12,8),ico:new ao(1,1),cyl:new ro(1,1,1,16),cone:new Rs(1,1,8)};function kt(n,e,t,i,s=dt){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Be=(n,e,t,i=dt)=>kt(gr.box,t,n,e,i),nt=(n,e,t,i=dt)=>kt(gr.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),ft=(n,e,t,i,s=dt)=>kt(gr.cyl,i,n,[e,t,e],s);function co(n,e,t,i=dt,s=.08){return kt(new Ou(...e,1,s),t,n,null,i)}function lt(n=[0,0,0],e=dt){const t=new Ki;return t.position.set(...n),e.add(t),t}function cs(n,e,t,i=dt){const s=new wu(n.map(r=>new H(...r)));return kt(new yl(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function mt(n,e,t,i,s=dt){const r=new H(...n),o=new H(...e),a=o.clone().sub(r),l=ft(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return l.quaternion.setFromUnitVectors(new H(0,1,0),a.normalize()),l}function yt(n,e,t,i,s=dt,r=[Math.PI/2,0,0]){const o=kt(new xl(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Pt(n,e,t,i,s=dt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const l=new Su(o);l.colorSpace=cn;const c=kt(new Ps(t,i),new so({map:l,side:Dn}),e,null,s);return c.castShadow=!1,c}let mc=179;function Ct(){return mc=mc*1664525+1013904223>>>0,mc/4294967296}const Za=document.createElement("canvas");Za.width=Za.height=256;const Ka=Za.getContext("2d");Ka.fillStyle="#b4bcaa";Ka.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Ka.fillStyle=`rgba(${Ct()>.5?"60,82,64":"235,229,201"},${Ct()*.08})`,Ka.fillRect(Ct()*256,Ct()*256,1+Ct()*3,1+Ct()*3);const eo=new Su(Za);eo.wrapS=eo.wrapT=qr;eo.repeat.set(5,5);eo.colorSpace=cn;const Uy=Ke("#c2c6b1",{map:eo,roughness:.97});function zu(n,e,t,i,s=dt){const r=new oo;n.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new pr(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),kt(o,i,null,null,s)}const ku=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];zu(ku,0,.82,ge.concrete);zu(ku,.06,.14,Uy);zu(ku.map(([n,e])=>[n*.97,e*.97]),-.8,.6,Ke("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Ct()*10.9,t=Ct()>.5?5.15:-5.2,i=kt(gr.ico,Ke(n%3?"#557469":"#668477"),[e,-1.15-Ct()*.5,t],[.25+Ct()*.8,.2+Ct()*.55,.35+Ct()*.3]);i.rotation.y=Ct()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Be([e,-.37,5.61],[.48,.19,.025],n%2?ge.copper:ge.dark),n%2===0&&cs([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,ge.metal)}Pt("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,dt,{size:32});const Ot=lt([-3.2,.08,-2.5]),pn=lt([0,0,0],Ot);Be([0,.08,0],[4.5,.15,3.6],ge.dark,Ot);Be([0,1.2,-1.68],[4.5,2.4,.18],ge.cream,Ot);Be([-2.15,1,0],[.18,2,3.6],ge.cream,Ot);for(let n=0;n<5;n++){Be([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],ge.concrete,Ot),Be([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],ge.metal,Ot);for(let e=0;e<3;e++)Be([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],ge.copper,Ot)}Be([0,2.47,-.2],[4.8,.14,3.7],ge.rust,pn);for(let n=0;n<23;n++){const e=Be([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],Ke("#d09062"),pn);e.rotation.x=-.015}Be([0,2.35,1.62],[4.8,.14,.18],ge.dark,Ot);mt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,ge.copper,Ot);mt([2.3,.12,1.62],[2.3,2.4,1.62],.055,ge.copper,Ot);Pt("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Ot,{size:37});Be([.1,.85,-.84],[3.8,.13,.87],ge.rust,Ot);for(const n of[-1.5,1.65])Be([n,.44,-.84],[.12,.85,.65],ge.metal,Ot);for(let n=0;n<3;n++)Be([-1.15+n*.95,.51,-.85],[.82,.47,.75],ge.concrete,Ot),Be([-1.15+n*.95,.5,-.44],[.18,.04,.03],ge.copper,Ot);for(let n=0;n<6;n++)Be([-1.6+n*.48,2.07,-1.48],[.28,.16+Ct()*.16,.17],Ke(["#9fba95","#cb9b70","#667f71"][n%3]),Ot);ft([0,.5,.7],.32,.12,ge.rust,Ot);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;mt([e,.06,t],[e,.5,t],.04,ge.metal,Ot)}for(let n=0;n<4;n++)yt([-1.5,.06,1],.3-n*.045,.025,ge.black,Ot);ft([-1.5,3,-.9],.16,.9,ge.metal,pn);ft([-1.5,3.47,-.9],.24,.08,ge.rust,pn);Be([1.4,2.9,-.4],[.8,.5,.6],ge.concrete,pn);for(let n=0;n<5;n++)Be([1.1+n*.15,2.94,-.085],[.035,.32,.03],ge.dark,pn);const Bu=new Sl("#ffca86",5,5,2);Bu.position.set(-3,1.7,-1.1);dt.add(Bu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=co([n,.1,e],[.74,.05,.74],Ke(Ct()>.3?"#b3baa6":"#a5b5a4"),dt,.018);t.rotation.y=(Ct()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Ct()*12,t=-5.1+Ct()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=kt(gr.cone,ge.leaf,[e,.1,t],[.022,.12+Ct()*.12,.022]);i.rotation.z=(Ct()-.5)*.7}const Jc=new Vn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Dn});Be([3.7,.12,3.6],[4.9,.24,2.7],ge.dark);kt(new Ps(4.5,2.4),Jc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Be([3.7,.29,n],[5,.38,.16],ge.cream);for(const n of[1.18,6.2])Be([n,.29,3.6],[.16,.38,2.85],ge.cream);for(let n=0;n<13;n++)Be([1.85,.5,2.15+n*.235],[1.08,.09,.22],Ke(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])ft([e,.88,n],.045,.8,ge.copper);for(const n of[1.31,2.4])cs([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,ge.cream);const Vu=[];for(let n=0;n<6;n++){let e=Be([4+n*.095,-1.25,5.56],[.055,2.4,.03],Ke("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Vu.push(e)}for(let n=0;n<4;n++)Be([3.96+n*.17,.31,5.31],[.055,.08,.6],ge.dark);const $t=lt([3.7,.1,-2.6]);co([0,.14,0],[3.7,.27,3.5],ge.cream,$t,.09);for(const n of[-1.55,1.55])Be([n,1.76,0],[.17,3.25,.2],ge.metal,$t),Be([n,.38,0],[.45,.2,.6],ge.copper,$t),mt([n,.36,-1.2],[n,2.9,0],.045,ge.copper,$t),mt([n,.36,1.2],[n,2.9,0],.045,ge.copper,$t);Be([0,3.38,0],[3.5,.18,.26],ge.copper,$t);const Oy=yt([0,2.7,-.5],1.83,.035,ge.copper,$t,[0,0,0]);Oy.scale.y=.85;const uo=[];for(let n=0;n<5;n++){const e=lt([-1.18+n*.59,3.24,0],$t),t=1.8+n*.12;mt([0,0,-.08],[0,-t,0],.015,ge.dark,e),mt([0,0,.08],[0,-t,0],.015,ge.dark,e),nt([0,-t,0],.205,ge.copper,e),yt([0,-t,0],.211,.012,ge.light,e,[0,0,0]),uo.push({group:e,len:t,phase:n})}Be([0,.6,1.3],[1.45,.8,.4],ge.metal,$t);Pt("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,$t,{size:40});const Fy=ft([-.43,.97,1.3],.19,.07,ge.cream,$t);Fy.rotation.x=Math.PI/2;const Gu=Be([-.43,.99,1.342],[.015,.22,.008],ge.rust,$t);Gu.rotation.z=-.7;const up=nt([.53,.93,1.52],.09,ge.light,$t),wl=lt([.15,.4,1.59],$t);yt([0,0,0],.19,.023,ge.rust,wl,[0,0,0]);for(let n=0;n<3;n++)mt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,ge.rust,wl);cs([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,ge.copper);const hp=[];function Hu(n,e,t=1.5){ft([n,t/2,e],.038,t,ge.metal),Be([n,t,e],[.27,.11,.27],ge.dark),Be([n,t-.18,e],[.17,.25,.17],ge.light),Be([n,t-.34,e],[.25,.08,.25],ge.copper);const i=new Sl("#ffbe70",1.8,3);i.position.set(n,t-.16,e),hp.push(i)}Hu(-5.9,3.9,1.3);Hu(.3,-4.8,1.7);Hu(5.8,1.25,1.35);const un=lt([-3.6,.08,3.55]),Zc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;co([0,.14,e],[3.6,.3,1.14],ge.rust,un,.06),Be([0,.305,e],[3.36,.04,.92],Ke(ci.soil),un);for(let t=0;t<4;t++){const i=lt([-1.26+t*.84,.33,e],un);ft([0,.14,0],.026,.28,ge.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=nt([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],Ke(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){nt([0,.17,0],[.25,.18,.25],Ke("#b6c58a"),i);for(let s=0;s<6;s++){const r=nt([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],ge.leaf,i);r.rotation.y=s}Zc.push(i)}else{const s=nt([.05,.22,0],[.1,.21,.12],Ke(ci.purple,{roughness:.35}),i);s.rotation.z=-.25,nt([.05,.41,0],[.075,.025,.07],ge.leaf,i),Zc.push(i)}}}const dp=lt([-1.72,.1,.8],un);for(let n=0;n<2;n++)Be([n*3.45,.6,0],[.04,1.3,.04],ge.copper,dp);mt([0,1.25,0],[3.45,1.25,0],.022,ge.copper,dp);Pt("КОБАЧКИ",[-.45,.68,1.64],1,.26,un,{bg:"#c2c7a3",fg:"#445e45",size:42});ft([1.9,.23,.7],.18,.34,Ke("#6b9389"),un);mt([2.04,.25,.7],[2.4,.46,.7],.045,Ke("#6b9389"),un);yt([1.8,.48,.7],.16,.02,ge.copper,un,[0,0,0]);Be([-1.6,.2,1.47],[.65,.4,.45],ge.rust,un);for(let n=0;n<3;n++)Be([-1.6,.12+n*.11,1.71],[.7,.05,.025],ge.copper,un);const Mn=lt([-3.8,.08,.35]);ft([0,.73,0],.58,.1,ge.rust,Mn);ft([0,.35,0],.045,.7,ge.metal,Mn);for(let n=0;n<3;n++)mt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,ge.metal,Mn);const ho=lt([.1,.81,0],Mn);nt([0,.2,0],[.23,.22,.23],ge.cream,ho);ft([0,.37,0],.14,.06,ge.copper,ho);nt([0,.42,0],.045,ge.dark,ho);mt([.15,.18,0],[.33,.32,0],.07,ge.cream,ho);yt([-.15,.25,0],.18,.035,ge.dark,ho,[0,0,0]);for(const n of[-.35,.38])ft([n,.84,.24],.082,.15,ge.cream,Mn),yt([n,.92,.24],.084,.012,ge.copper,Mn),ft([n,.921,.24],.063,.006,Ke("#67513b"),Mn),yt([n+.09,.86,.24],.045,.011,ge.cream,Mn,[0,0,0]);const Tl=[];for(let n=0;n<9;n++){const e=nt([0,0,0],.07,Ke("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,Tl.push(e)}const jn=lt([-5.65,.09,1.1]);Be([0,.3,0],[.7,.6,.7],ge.concrete,jn);co([0,.8,0],[.68,.45,.35],ge.dark,jn,.05);for(let n=0;n<6;n++)Be([-.2+n*.05,.8,.18],[.022,.27,.018],ge.copper,jn);Be([.18,.85,.184],[.16,.075,.02],ge.light,jn);nt([.18,.72,.19],.05,ge.cream,jn);mt([.18,1,0],[.48,1.6,0],.012,ge.copper,jn);const fp=lt([-.5,.1,-4.6]);ft([0,1.75,0],.055,3.5,ge.metal,fp);nt([0,3.55,0],.09,ge.copper,fp);cs([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,ge.dark);for(let n=0;n<8;n++){let e=n/8;const t=kt(new Rs(.13,.3,3),Ke(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const Al=lt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Be([0,0,0],[.55,.09,.025],ge.rust,Al);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}nt([0,0,.05],.08,ge.copper,Al);const rn=lt([7.25,-.03,1.5]);Be([0,-.12,0],[2.25,.3,2.5],ge.metal,rn);for(let n=0;n<10;n++)Be([-.99+n*.22,.08,0],[.2,.08,2.6],ge.rust,rn);Be([-.95,.2,-.95],[.35,.15,.35],ge.dark,rn);ft([.87,.34,.75],.075,.5,ge.copper,rn);ft([.87,.59,.75],.13,.05,ge.cream,rn);mt([.87,.1,-.7],[.87,2.3,-.7],.035,ge.copper,rn);cs([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,ge.copper,rn);Be([.17,2.09,-.7],[.25,.4,.25],Ke("#ffd591"),rn);Be([.17,2.32,-.7],[.34,.08,.34],ge.dark,rn);for(let n=0;n<4;n++)yt([.87,.15,.75],.24-n*.025,.024,Ke("#b8ad86"),rn);Be([6.7,.07,1.5],[1.4,.13,.8],ge.rust);Pt("НИКУДА",[.05,.28,1.36],1.3,.29,rn,{bg:"#c2c7a3",fg:"#445e45",size:45});const Wu=[];function Cl(n,e,t=1){const i=lt(e,n),s=new oo;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),kt(new pr(s,{depth:.19,bevelEnabled:!1}),Ke("#dfc99a"),[0,.15,-.1],null,i);const r=kt(new Rs(.23,.36,3),ge.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=Cl(dt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);Wu.push(e)}const ei=Jx({THREE:Vt,root:dt,dock:rn,state:we,M:ge,mat:Ke,group:lt,mesh:kt,box:Be,sphere:nt,cyl:ft,torus:yt,rod:mt,sign:Pt,paperBoat:Cl,batchStatic:Mt,persist:$c,say:Ln,refresh:Ut,chime:An,reduced:lp}),Qe=lt([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const qu=Ke("#233a39",{metalness:.42,roughness:.32});nt([0,.1,0],[.62,.8,.55],qu,Qe);nt([0,-.36,.1],[.44,.43,.43],qu,Qe);nt([-.61,.03,.03],[.1,.2,.12],ge.copper,Qe);nt([.61,.03,.03],[.1,.2,.12],ge.copper,Qe);for(const n of[-.23,.23]){nt([n,.2,.485],[.17,.13,.057],ge.black,Qe),yt([n,.2,.541],.078,.02,ge.copper,Qe,[0,0,0]),nt([n,.2,.56],.041,ge.light,Qe);const e=Be([n,.38,.48],[.24,.045,.06],ge.cream,Qe);e.rotation.z=n>0?-.13:.13}nt([0,.04,.51],[.09,.17,.11],qu,Qe);nt([0,-.2,.44],[.31,.16,.11],ge.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=co([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],ge.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=nt([t,i,-.04],[.18,.18,.48],ge.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;cs([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,Ke("#f2edda"),Qe)}for(let n=0;n<3;n++)nt([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],ge.cream,Qe);const Xu=yt([0,1.05,0],.77,.019,ge.copper,Qe);Xu.rotation.z=.14;const zy=new Sl("#ffbb62",.9,3);zy.position.set(0,.2,.9);const ta=yt([-.15,.26,.85],.7,.018,ge.copper),to=kt(new ml(.64,32),new so({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);to.rotation.x=-Math.PI/2;to.castShadow=!1;const Ti=new H(-.15,1.9,.85),Bn=lt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Be([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?ge.cream:ge.concrete,Bn);t.rotation.x=Math.PI/2-e,n%3===0&&mt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,ge.copper,Bn)}for(const n of[-.45,.45])yt([n,0,0],2.07,.025,ge.copper,Bn,[0,Math.PI/2,0]);for(const n of[-.34,.34])yt([n,0,0],1.7,.075,ge.concrete,Bn,[0,Math.PI/2,0]);mt([0,-2.15,-1.2],[0,-1.58,-.8],.07,ge.metal,Bn);mt([0,-2.15,1.2],[0,-1.58,.8],.07,ge.metal,Bn);Pt("ОБРАТНО",[.49,-.55,.2],1.15,.3,Bn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Ct()*20,t=-8+Ct()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||kt(gr.ico,Ke("#47675f"),[e,-1.3-Ct()*2,t],[.22+Ct()*.55,.19+Ct()*.4,.27+Ct()*.4])}const pp=new Wt,mp=[];for(let n=0;n<75;n++)mp.push((Ct()-.5)*25,Ct()*9-2,(Ct()-.5)*22);pp.setAttribute("position",new bt(mp,3));const gp=new Rf(pp,new yu({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));Kt.add(gp);function Mt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new xt().multiplyMatrices(i,r.matrixWorld));let l=t.get(o);l||t.set(o,l={material:r.material,geos:[]}),l.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=$x(o,!1);a&&kt(a,r,null,null,n),o.forEach(l=>l.dispose())}}Mt(dt,[Qe,un,$t,Mn,jn,rn,Ot,Bn,Al,...Wu,...Tl,...Vu,ta,to,ei.travel]);Mt(Ot,[pn]);Mt(pn,[]);Mt(Bn,[]);Mt(Qe,[Xu]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});Mt(Mn,[...Tl]);Mt(jn,[]);Mt(rn,[ei.gallery,ei.beacon]);Mt($t,[...uo.map(n=>n.group),wl,Gu,up]);uo.forEach(n=>Mt(n.group,[]));const no=lt([0,.33,0],un);Zc.forEach(n=>{no.add(n),n.position.y-=.33});Mt(no,[]);Mt(un,[no]);const Sn=ny({THREE:Vt,root:dt,scene:Kt,head:Qe,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,paperBoat:Cl,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},chime:An}),Ri=Iy({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,mesh:kt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Qi=xm({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Pi=_m({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Li=am({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),Ii=tm({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),Di=qp({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),Ni=hm({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},localPlay:()=>rt.localPlay()}),gi=fm({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Ui=mm({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),_i=gm({THREE:Vt,root:dt,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),ji=vm({THREE:Vt,workshop:Ot,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,changed:()=>{Ut(),st.shadowMap.needsUpdate=!0},watching:()=>rt==null?void 0:rt.watching(),localPlay:()=>rt.localPlay()}),Rl=iy({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,mesh:kt,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,chime:An}),fo=Py({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,mesh:kt,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,paperBoat:Cl,batchStatic:Mt,chime:An}),Un=Ry({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,mesh:kt,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}}),_p=sy({head:Qe,group:lt,sphere:nt,box:Be,torus:yt,M:ge,mat:Ke}),di=Ey({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,mesh:kt,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}}),fi=Zp({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,tube:cs,torus:yt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}}),In=cy({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,tube:cs,torus:yt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}}),Zn=fy({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}}),es=gy({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}}),pi=yy({THREE:Vt,scene:Kt,root:dt,head:Qe,M:ge,mat:Ke,group:lt,box:Be,sphere:nt,cyl:ft,rod:mt,torus:yt,sign:Pt,batchStatic:Mt,chime:An,changed:()=>{Bi(),st.shadowMap.needsUpdate=!0}});let nn=null,He=1;const Gn={ego:{n:"20",label:"самомнение / HDMI",title:"малый передатчик",description:"Двенадцать пикселей себя.",action:"передать",point:new H(3.5,.6,-45.2),position:new H(0,.6,-48),run:()=>Di.run()},seams:{n:"19",label:"шовная",title:"голова по швам",description:"Три сцепленных кольца держат лицо.",action:"испытать инструкцией",point:new H(-20.4,.7,-45.4),position:new H(-24,.6,-48),run:()=>Ii.run()},still:{n:"18",label:"облачная перегонная",title:"16 часов на облако",description:"Четыре карты переливают одно облако.",action:"перелить облако",point:new H(28.4,.7,-19.8),position:new H(24,.5,-24),run:()=>Li.run()},fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new H(-26.4,.7,-34.3),position:new H(-23,.1,-32),run:()=>Ni.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new H(-32,.6,-20.6),position:new H(-24,.6,-24),run:()=>gi.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new H(24,.9,29.7),position:new H(24,.6,24),run:()=>Ui.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new H(-6.9,1.9,-20.1),position:new H(0,.6,-24),run:()=>_i.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new H(-17.5,1.3,3.4),position:new H(-24,.6,0),run:()=>Pi.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new H(-1.4,1.5,-1.1),position:new H(-3.2,1.25,-2.2),run:()=>ji.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new H(4.7,.8,25.8),position:new H(0,.4,24),run:()=>Qi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new H(28.4,2.2,2.5),position:new H(24,.4,0),run:()=>Ri.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new H(-.1,2.15,4.3),position:new H(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new H(-6,4.55,-3.25),position:new H(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,xp.copy(Qe.position),Ln("ноги не понадобились"),Ut())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new H(-3.2,3.15,-2.5),position:new H(-3.2,1.1,-2.5),run:()=>{we.roof=dr()?0:1,Ln(dr()?"заходи":"прикрыл"),Ut()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new H(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Ln(n[ky++%n.length]),Ti.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new H(3.7,3.85,-2.6),position:new H(3.7,1,-2.6),run:()=>{we.running=!we.running,$c(),Ln(we.running?"ну пошло":"можно и полежать"),Ut()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new H(-3.7,1.65,.35),position:new H(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,Ti.set(-2.65,1.7,.65),Ln("щас, чайник поставлю"),Ut())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new H(-3.4,1,3.8),position:new H(-3.6,1,3.55),run:()=>{we.harvest++,ir=.15,$c(),Ti.set(-1.6,1.6,2.3),Ln(we.harvest===1?"о, урожай":"кабачки опять победили"),Ut()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new H(-5.65,1.75,1.1),position:new H(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,Yu(),Ln(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Ut()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new H(7.4,2.75,1.1),position:new H(7.25,.9,1.5),run:()=>{ei.launchOrCollect(),we.dockPending===!1&&we.boat===0&&Ti.set(5.85,1.7,1.05)}}};let ky=0,ir=1,vp=0,ws=0;const xp=new H;let yp=()=>{rs("engine"),Gn.engine.run()};const Pl={};for(const[n,e]of Object.entries(Gn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>rs(n),Se("#hotspots").append(t),Pl[n]=t}const Mp=Se("#hotspots"),gc=Se("#speech"),xs={width:innerWidth,height:innerHeight},By=Dy({entries:Gn,elements:Pl,layer:Mp,camera:Oe});let _c=!1,Pd=NaN,Ld=NaN;const Cr=new H;function rs(n){we.selected=n,Se("#inspector").classList.remove("collapsed");const e=Gn[n];Se("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Se("#object-title").textContent=e.title,Se("#object-description").textContent=e.description,yp=e.run,Se("#focus-object").hidden=!1,Se("#focus-object").textContent=Bt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ut();for(const[t,i]of Object.entries(Pl))i.classList.toggle("selected",t===n)}function Ut(){const n=we.selected,e=Gn[n];if(Se("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=dr()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=ei.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Ri.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Qi.card();t=r.action,i=r.description}if(n==="bench"){const r=ji.card();t=r.action,i=r.description}if(n==="drydock"){const r=Pi.card();t=r.action,i=r.description}if(n==="dash"){const r=_i.card();t=r.action,i=r.description}if(n==="quotes"){const r=Ui.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=gi.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Ni.card();t=r.action,i=r.description,s=r.disabled}if(n==="seams"){const r=Ii.card();t=r.action,i=r.description,s=r.disabled}if(n==="still"){const r=Li.card();t=r.action,i=r.description,s=r.disabled}if(n==="ego"){const r=Di.card();t=r.action,i=r.description,s=r.disabled}Di.controls.hidden=n!=="ego",Ii.controls.hidden=n!=="seams",Li.controls.hidden=n!=="still",Ni.controls.hidden=n!=="fork",gi.controls.hidden=n!=="garage",Ui.controls.hidden=n!=="quotes",_i.controls.hidden=n!=="dash",Pi.controls.hidden=n!=="drydock",ji.controls.hidden=n!=="bench",Qi.controls.hidden=n!=="amnesty",Ri.controls.hidden=n!=="cellar",Se("#enter-bench")&&(Se("#enter-bench").hidden=n!=="workshop"),Se("#enter-dream08").hidden=n!=="radio",Se("#enter-dream07").hidden=n!=="garage",Se("#enter-dream06").hidden=n!=="radio",Se("#enter-dream05").hidden=n!=="stair",Se("#enter-dream10").hidden=n!=="tea",Se("#enter-dream09").hidden=n!=="dock",Se("#enter-dream03").hidden=n!=="dock",Se("#enter-dream04").hidden=n!=="workshop",Se("#greenhouse-controls").hidden=n!=="greenhouse",Se("#thermal-moves").hidden=Sn.inspect().mode!=="playing",Se("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,Se("#object-description").textContent=i,Se("#object-action").innerHTML=t+" <span>↗</span>",Se("#object-action").disabled=s}Se("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&rt.watching()){rt.localPlay();return}rt.localPlay(),yp(),ws=performance.now()+2200};Se("#close-card").onclick=()=>Se("#inspector").classList.add("collapsed");function Ln(n){Se("#speech").textContent=n,vp=performance.now()+4e3,Se("#speech").classList.add("visible")}Se("#markers").onclick=()=>{we.markers=!we.markers,Se("#markers").setAttribute("aria-pressed",we.markers),Mp.hidden=!we.markers||!!nn||Oe.zoom<.4};let Bt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function Sp(){xs.width=innerWidth,xs.height=innerHeight;const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(en()?2.8:0),Oe.bottom=-e-(en()?2.8:0),Oe.updateProjectionMatrix(),st.setSize(innerWidth,innerHeight,!1),st.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2))}function _r(){if(rt==null||rt.unfollow(),nn){po();return}Bt=null,document.body.classList.remove("close-look"),Se("#focus-object").textContent="осмотреть ближе ⊕",je.enableDamping=!1,je.update(),je.enableDamping=!0,je.maxZoom=2.5,Oe.zoom=1,je.target.copy(Fu),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Se("#focus-object").onclick=()=>{if(we.selected){if(Bt===we.selected){_r();return}Bt=we.selected,document.body.classList.add("close-look"),Se("#focus-object").textContent="весь двор ⌂",je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.copy(Gn[we.selected].position),en()&&(je.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams","ego"].includes(Bt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams","ego"].includes(Bt)?en()?1.8:1.6:en()?2.5:2.1,Bt==="bench"?(je.maxZoom=4.5,Oe.zoom=en()?3.8:3.4,je.target.y+=en()?-.15:0,je.target.x+=.3,je.target.z-=.2):je.maxZoom=2.5,Oe.updateProjectionMatrix()}};Se("#home").onclick=_r;Se("#zoom-in").onclick=()=>{Oe.zoom=Math.min(je.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Se("#zoom-out").onclick=()=>{Oe.zoom=Math.max(je.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Se("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",Sp);Sp();function bp(n,e,t=!1){nn&&po(),_r(),je.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Se("#inspector").classList.add("collapsed")}function Vy(){bp(0,0);const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.zoom=Math.min(e*n/(sr.half*1.57),e/(sr.half*1.3)),Oe.updateProjectionMatrix()}const sr=ty({root:dt,camera:Oe,controls:je,mobile:en,go:bp,overview:Vy,home:_r,locationTarget:()=>["dash","quotes","garage","fork","still","seams","ego"].includes(Bt)&&we.selected===Bt?Gn[Bt].position:null}),ts=document.createElement("select");ts.id="world-places";ts.setAttribute("aria-label","Открыть место");ts.append(new Option("места",""));for(const[n,e]of Object.entries(Gn))ts.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(ts,document.querySelector("#territory-location"));ts.onchange=()=>{const n=ts.value;Gn[n]&&(_r(),je.target.copy(Gn[n].position),rs(n),ts.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Id=new Yf,Dd=new Te;let gs=null;st.domElement.addEventListener("pointerdown",n=>{gs={x:n.clientX,y:n.clientY,time:performance.now()}});st.domElement.addEventListener("pointerup",n=>{if(!gs||Math.hypot(n.clientX-gs.x,n.clientY-gs.y)>7||performance.now()-gs.time>550){gs=null;return}if(gs=null,Dd.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Id.setFromCamera(Dd,Oe),nn)return;const e=Id.intersectObjects([Di.house,Ii.house,Li.house,Ni.house,gi.house,Ui.house,_i.house,Pi.house,ji.house,Qi.house,Ri.house,Sn.house,Qe,$t,un,Mn,jn,rn,Ot,Bn,ei.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Di.house,Ii.house,Li.house,Ni.house,gi.house,Ui.house,_i.house,Pi.house,ji.house,Qi.house,Ri.house,Sn.house,Qe,$t,un,Mn,jn,rn,Ot,Bn,ei.travel].includes(t);)t=t.parent;const i=new Map([[Di.house,"ego"],[Ii.house,"seams"],[Li.house,"still"],[Ni.house,"fork"],[gi.house,"garage"],[Ui.house,"quotes"],[_i.house,"dash"],[Pi.house,"drydock"],[ji.house,"bench"],[Qi.house,"amnesty"],[Ri.house,"cellar"],[Sn.house,"greenhouse"],[Qe,"head"],[$t,"engine"],[un,"garden"],[Mn,"tea"],[jn,"radio"],[rn,"dock"],[Ot,"workshop"],[Bn,"stair"],[ei.travel,"dock"]]).get(t);i&&rs(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Gn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&rs(t)}});let Tn=null;function Gy(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(o),c.start(),c});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Yu(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}Se("#sound").onclick=async()=>{try{Tn||(Tn=Gy()),await Tn.ctx.resume(),we.sound=!we.sound,Tn.gain.gain.setTargetAtTime(we.sound?.08:0,Tn.ctx.currentTime,.3),Se("#sound").textContent=we.sound?"звук включён":"звук выключен",Se("#sound").setAttribute("aria-pressed",we.sound),Yu(),Ut()}catch{Ln("со звуком не сложилось")}};function An(n=330){if(!Tn||!we.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}Se("#about").onclick=()=>Se("#about-dialog").showModal();Se("#close-about").onclick=Se("#back-to-yard").onclick=()=>Se("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&nn){po();return}n.key==="Escape"&&Se("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Se("#zoom-in").click(),n.key==="-"&&Se("#zoom-out").click(),n.key.toLowerCase()==="r"&&Se("#rotate").click(),n.key.toLowerCase()==="h"&&_r()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{rt.localPlay(),Sn.step(n.dataset.thermal),ws=performance.now()+2200};const Hy={10:{title:"час дождя без грома",lines:[],verb:"согнуть"},9:{title:"уши для берега",lines:[],verb:"слушать"},8:{title:"десять факелов на диске",lines:[],verb:"настроить"},7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function $u(){return He===10?fi:He===1?Sn:He===2?Rl:He===3?fo:He===4?Un:He===5?di:He===6?pi:He===7?es:He===8?Zn:In}function Bi(){const n=He===1?Sn.inspect().dreamStep:$u().inspect().step,e=Hy[He];if(Se("#exit-ear-dream").hidden=![9,10].includes(He),Se("#dream-rain").hidden=He!==10,Se("#dream-ears").hidden=He!==9,Se("#dream-torches").hidden=He!==8,Se("#dream-cloud").hidden=He!==6,Se("#dream-force").hidden=He!==3,Se("#dream-roofs").hidden=He!==4,Se("#dream-meter").hidden=He!==5,Se("#dream-panel .object-kicker").textContent=`СОН ${String(He).padStart(2,"0")} / БЕЗНОГИМ`,Se("#dream-panel h2").textContent=e.title,Se("#dream-text").textContent=He===10?fi.text():He===9?In.text():He===8?Zn.text():He===7?es.text():He===6?pi.text():He===5?di.text():He===4?Un.text():e.lines[n],Se("#dream-breathe").textContent=He===10?fi.button():He===9?In.button():He===8?Zn.button():He===7?es.button():He===6?pi.button():He===5?di.button():He===4?Un.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Se("#dream-breathe").disabled=He===10&&fi.busy()||He===9&&(In.busy()||!In.ready()&&In.inspect().phase==="sorting")||He===8&&(Zn.busy()||!Zn.canRelease())||He===7&&es.busy()||He===6&&["heating","raining"].includes(pi.inspect().phase)||He===4&&Un.inspect().phase==="flying"||He===5&&["measuring","unfolding","climbing"].includes(di.inspect().phase),He===10){const t=fi.inspect();for(const i of document.querySelectorAll("[data-rain-fold]")){const s=Number(i.dataset.rainFold);i.textContent=s+1+" · "+(t.folds[s]?"желоб":"лист"),i.setAttribute("aria-pressed",t.folds[s]),i.disabled=t.phase!=="folding"}}if(He===9){const t=In.inspect();for(const i of document.querySelectorAll("[data-ear-stone]")){const s=Number(i.dataset.earStone);i.textContent=[1,2,3,4,5,7][s]+" · "+["полка","левое","правое"][t.places[s]],i.setAttribute("aria-label","камень "+[1,2,3,4,5,7][s]+": "+["на полке","в левом ухе","в правом ухе"][t.places[s]]),i.disabled=t.phase!=="sorting"}}if(He===8){const t=Zn.inspect();for(const i of document.querySelectorAll("[data-torch-turn]")){const s=Number(i.dataset.torchTurn);i.textContent=["птица","вода","ветер"][s]+" · "+t.turns[s]+" ↻",i.setAttribute("aria-pressed",t.aligned[s]),i.disabled=t.phase!=="tuning"}}if(He===6){const t=pi.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(He===5){const t=di.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(He===4){const t=Un.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Un.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function si(n=1){nn||(He=n,nn={target:je.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:Bt,returnId:n===10?"tea":n===9?"dock":n===8?"radio":n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},$u().enter(),je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.set(0,en()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?en()?1.65:1.75:en()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7||n===8||n===9||n===10),Qa="",Se("#dream-panel").hidden=!1,Bi(),st.shadowMap.needsUpdate=!0)}function po(){if(!nn)return;const n=nn;nn=null,$u().exit(),je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,Bt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Qa="",Se("#dream-panel").hidden=!0,st.shadowMap.needsUpdate=!0,rs(n.returnId)}Se("#enter-dream").onclick=()=>si(1);Se("#exit-dream").onclick=po;Se("#dream-breathe").onclick=()=>{He===1?Sn.breathe():He===2?Rl.pour():He===3?fo.toss():He===4?Un.send():He===5?di.act():He===6?pi.act():He===7?es.act():He===8?Zn.act():He===9?In.act():fi.act(),ws=performance.now()+2200,Bi(),st.shadowMap.needsUpdate=!0};const mo=document.createElement("button");mo.id="enter-bench";mo.hidden=!0;mo.textContent="собрать механический монитор ↗";mo.onclick=()=>{rs("bench"),Se("#focus-object").click()};Se("#focus-object").before(mo);const Ll=document.createElement("button");Ll.id="enter-dream02";Ll.textContent="сон 02 / вода спит ↗";Ll.onclick=()=>si(2);Ri.controls.append(Ll);Se("#exit-ear-dream").onclick=po;Se("#enter-dream10").onclick=()=>si(10);for(const n of document.querySelectorAll("[data-rain-fold]"))n.onclick=()=>fi.fold(Number(n.dataset.rainFold));Se("#enter-dream09").onclick=()=>si(9);for(const n of document.querySelectorAll("[data-ear-stone]"))n.onclick=()=>In.move(Number(n.dataset.earStone));Se("#enter-dream03").onclick=()=>si(3);Se("#enter-dream04").onclick=()=>si(4);Se("#enter-dream08").onclick=()=>si(8);for(const n of document.querySelectorAll("[data-torch-turn]"))n.onclick=()=>Zn.turn(Number(n.dataset.torchTurn));Se("#enter-dream07").onclick=()=>si(7);Se("#enter-dream06").onclick=()=>si(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>pi.choose(n.dataset.cloudTarget);Se("#enter-dream05").onclick=()=>si(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>di.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Un.turn(Number(n.dataset.roofTurn)),ws=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{fo.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Se("#dream-archive").onclick=()=>Se("#dream-archive-dialog").showModal();Se("#close-dream-archive").onclick=()=>Se("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Se("#dream-archive-dialog").close(),si(Number(n.dataset.dreamId))};const rt=Kx({head:Qe,headDestination:Ti,state:we,controls:je,camera:Oe,refresh:Ut,setAudioTone:Yu,say:Ln,onHarvest:()=>{ir=.15}});let vc="";const Ep=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Ep.push(new H(n,e,t));const Ju=[];for(const n of[-4.2,4.2])for(const e of[-1.65,4.5])for(const t of[-51.5,-43.6])Ju.push(new H(n,e,t));const Zu=[];for(const n of[-28,-20])for(const e of[-1.65,3.75])for(const t of[-51.4,-43.6])Zu.push(new H(n,e,t));const Ku=[];for(const n of[19.3,28.7])for(const e of[-1.65,3.1])for(const t of[-27.2,-19.5])Ku.push(new H(n,e,t));const wp=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])wp.push(new H(n,e,t));const Tp=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])Tp.push(new H(n,e,t));const Ap=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])Ap.push(new H(n,e,t));const Cp=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Cp.push(new H(n,e,t));function Wy(){var P,C;const n=Bt==="ego"&&we.selected==="ego",e=Bt==="seams"&&we.selected==="seams",t=Bt==="still"&&we.selected==="still",i=Bt==="fork"&&we.selected==="fork",s=Bt==="garage"&&we.selected==="garage",r=Bt==="quotes"&&we.selected==="quotes",o=Bt==="dash"&&we.selected==="dash",a=Bt==="drydock"&&we.selected==="drydock"||o||r||s||i||t||e||n,l=(Bt==="bench"&&we.selected==="bench"||a)&&!Se("#inspector").classList.contains("collapsed")&&!nn;if(document.body.classList.toggle("ego-look",l&&n),document.body.classList.toggle("seams-look",l&&e),document.body.classList.toggle("still-look",l&&t),document.body.classList.toggle("fork-look",l&&i),document.body.classList.toggle("garage-look",l&&s),document.body.classList.toggle("quotes-look",l&&r),document.body.classList.toggle("dash-look",l&&(o||r||s||i||t||e||n)),document.body.classList.toggle("bench-look",l&&!a),document.body.classList.toggle("drydock-look",l&&a),!l){vc="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const c=Se("#inspector").getBoundingClientRect(),u=Se(".territory-nav").getBoundingClientRect(),g=Se(".toolbar").getBoundingClientRect(),h=innerWidth<=900&&innerHeight>innerWidth,d=h?{left:14,right:g.left-10,top:u.bottom+(t||e||n?6:14),bottom:c.top-(t||e||n?6:14)}:{left:Math.max(c.right+18,u.right+18),right:g.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!h&&(d.left=u.right+12,d.right=innerWidth-16,d.top=g.bottom+10,d.bottom=c.top-10),(o||r||s||i||t||e||n)&&innerWidth<=900&&!h&&(d.left=12,d.right=c.left-12,d.top=u.bottom+10,d.bottom=Se("footer").getBoundingClientRect().top-12);const p=Se(".resident-history");a&&innerWidth>900&&p&&!p.hidden&&(d.right=Math.min(d.right,p.getBoundingClientRect().left-18));const _=s?gi.inspect():null,m=[];if(_){const O=Math.max(_.gap,_.range,((P=_.flight)==null?void 0:P.range)||0),U=Math.max(_.apex,((C=_.flight)==null?void 0:C.apex)||0);for(const V of[-34,-32+.7*O+1.6])for(const z of[-1.3,Math.max(1.5,.8+.5*U)])for(const I of[-26,-19.8])m.push(new H(V,z,I))}const f=[(_==null?void 0:_.gap)||0,(_==null?void 0:_.range)||0,(_==null?void 0:_.apex)||0,n?20:e?19:t?18:i?17:s?16:r?15:o?14:a?13:12,innerWidth,innerHeight,d.left,d.right,d.top,d.bottom,mn.targetAngle].map(O=>Math.round(O*10)/10).join(":");if(f===vc||d.bottom-d.top<35||d.right-d.left<50)return;vc=f;const M=()=>{Oe.updateMatrixWorld();const O=(n?Ju:e?Zu:t?Ku:i?wp:s?m:r?Tp:o?Ap:a?Cp:Ep).map(U=>St(U.clone()));return{l:Math.min(...O.map(U=>U.x)),r:Math.max(...O.map(U=>U.x)),t:Math.min(...O.map(U=>U.y)),b:Math.max(...O.map(U=>U.y))}};let w=M();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((d.right-d.left)/(w.r-w.l),(d.bottom-d.top)/(w.b-w.t))),Oe.updateProjectionMatrix(),w=M();const x=(d.left+d.right-w.l-w.r)/2,b=(d.top+d.bottom-w.t-w.b)/2,S=new H().setFromMatrixColumn(Oe.matrixWorld,0),T=new H().setFromMatrixColumn(Oe.matrixWorld,1),v=S.multiplyScalar(-x*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(T.multiplyScalar(b*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));je.target.add(v),Oe.position.add(v),Oe.lookAt(je.target),Oe.updateMatrixWorld()}let Qa="";const Rp=[];for(const n of[-4.1,4.1])for(const e of[-.4,5.8])for(const t of[-3.4,3.4])Rp.push(new H(n,e,t));const Pp=[];for(const n of[-4.5,4.5])for(const e of[-.6,5.3])for(const t of[-3.3,3.7])Pp.push(new H(n,e,t));const Lp=[];for(const n of[-3.6,3.6])for(const e of[-.65,4.8])for(const t of[-3.6,3.6])Lp.push(new H(n,e,t));const Ip=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])Ip.push(new H(n,e,t));const Dp=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Dp.push(new H(n,e,t));const Np=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Np.push(new H(n,e,t));function qy(){if(!nn||![4,5,6,7,8,9,10].includes(He))return;const n=Se("#dream-panel").getBoundingClientRect(),e=Se("footer").getBoundingClientRect(),t=Se(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===Qa||r.right-r.left<60||r.bottom-r.top<80)return;Qa=o;const a=()=>{Oe.updateMatrixWorld();const p=(He===10?Rp:He===9?Pp:He===8?Lp:He===7?Ip:He===5?Dp:Np).map(_=>St(_.clone()));return{l:Math.min(...p.map(_=>_.x)),r:Math.max(...p.map(_=>_.x)),t:Math.min(...p.map(_=>_.y)),b:Math.max(...p.map(_=>_.y))}};let l=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(l.r-l.l),(r.bottom-r.top)/(l.b-l.t))),Oe.updateProjectionMatrix(),l=a();const c=(r.left+r.right-l.l-l.r)/2,u=(r.top+r.bottom-l.t-l.b)/2,g=new H().setFromMatrixColumn(Oe.matrixWorld,0),h=new H().setFromMatrixColumn(Oe.matrixWorld,1),d=g.multiplyScalar(-c*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));je.target.add(d),Oe.position.add(d),Oe.lookAt(je.target),Oe.updateMatrixWorld()}let Nd=performance.now(),Yo=0,Ud=0;function St(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function Xy(){rt.sync();const n=performance.now(),e=(n-Nd)/1e3;Nd=n,Yo+=e,we.energy=xn.damp(we.energy,we.running?1:0,1.6,e);const t=lp?Yo*.2:Yo;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(je.target.x+Math.sin(mn.angle)*i,je.target.y+i*Math.SQRT1_2,je.target.z+Math.cos(mn.angle)*i),Oe.lookAt(je.target),je.update(),nn||(je.target.x=xn.clamp(je.target.x,-62,sr.half+2),je.target.z=xn.clamp(je.target.z,-62,sr.half+2)),sr.update(),Wy(),qy();for(const s of uo)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(pn.position.z=xn.damp(pn.position.z,dr()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,dr()?.4:0,2,e),wl.rotation.z=t*we.energy*.28,Gu.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,up.material.emissiveIntensity=.45+we.energy*1.5,Jc.uniforms.uTime.value=t,Jc.uniforms.uEnergy.value=we.energy,Al.rotation.z=t*(.09+we.energy*.23),hp.forEach(s=>s.intensity=.65+we.energy*1.5),Bu.intensity=2+we.energy*4,Qe.position.x=xn.damp(Qe.position.x,Ti.x,1.6,e),Qe.position.z=xn.damp(Qe.position.z,Ti.z,1.6,e),Qe.position.y=xn.damp(Qe.position.y,Ti.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=xn.smoothstep(s,0,2);Qe.position.lerpVectors(xp,new H(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Qe.position.lerpVectors(new H(-6,.65,-3.25),Ti,r),Qe.rotation.x=(1-r)*Math.PI*2}we.loop||(Qe.rotation.x=0,Ln("ну вот и дома"),Ut())}if(rt.place(),Qe.rotation.y=Math.sin(t*.3)*.12,Xu.rotation.y=t*.13,ta.position.x=Qe.position.x,ta.position.z=Qe.position.z,ta.rotation.z=.04*Math.sin(t),to.position.x=Qe.position.x,to.position.z=Qe.position.z,ir=xn.damp(ir,1,.85,e),no.scale.y=ir,no.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Ln("чай готов. живём."),Ut(),An(440))),Tl.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),Wu.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),_p.update(rt.watching()),Rl.update(e,t),fo.update(e,t),Un.update(e,t),di.update(e,t),pi.update(e,t),es.update(e,t),Zn.update(e,t),In.update(e,t),fi.update(e,t),Di.update(e),Ii.update(e),Li.update(e,t),Ni.update(e),gi.update(e),Ui.update(e),_i.update(e),Pi.update(e),ji.update(e),pn.visible=!(Bt==="bench"&&we.selected==="bench"&&!Se("#inspector").classList.contains("collapsed")&&!nn),Qi.update(e),Ri.update(Yo),Sn.update(e,t),ei.update(e,t),_c!==we.dockPending&&(_c=we.dockPending,Pl.dock.classList.toggle("waiting",_c)),Vu.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),gp.rotation.y=t*.003,we.running&&t-Ud>3.5&&(Ud=t,An([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),By.update(!nn&&Oe.zoom>=.4&&we.markers,xs.width,xs.height),nn||n>vp)gc.classList.contains("visible")&&gc.classList.remove("visible");else{Cr.copy(Qe.position),Cr.y+=1.52,Cr.project(Oe);const s=Math.round(Math.max(85,Math.min(xs.width-85,(Cr.x+1)*xs.width*.5))*10)/10,r=Math.round((1-Cr.y)*xs.height*.5*10)/10;(s!==Pd||r!==Ld)&&(Pd=s,Ld=r,gc.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}ws&&performance.now()>ws&&(st.shadowMap.needsUpdate=!0,ws=0),st.render(Kt,Oe)}we.running&&(Se("#object-action").innerHTML="остановить двор <span>↗</span>");Ut();st.setAnimationLoop(Xy);requestAnimationFrame(()=>Se("#loading").classList.add("done"));window.__yard={state:we,select:rs,inspect:()=>({resident:rt.inspect(),territory:sr.inspect(),sleepBody:_p.inspect(),sleepDream:Rl.inspect(),quietDream:fo.inspect(),rainDream:fi.inspect(),rainDreamScreen:fi.inspect().landmarks.map(n=>St(new H(...n))),earDream:In.inspect(),earDreamScreen:In.inspect().landmarks.map(n=>St(new H(...n))),torchDream:Zn.inspect(),torchDreamScreen:Zn.inspect().landmarks.map(n=>St(new H(...n))),pocketDream:es.inspect(),pocketDreamScreen:es.inspect().landmarks.map(n=>St(new H(...n))),cloudDream:pi.inspect(),cloudDreamScreen:pi.inspect().landmarks.map(n=>St(new H(...n))),meterDream:di.inspect(),meterDreamScreen:di.inspect().landmarks.map(n=>St(new H(...n))),roofDream:Un.inspect(),roofDreamGoalScreen:Un.inspect().goals.map(n=>St(new H(...n))),roofDreamLetterScreen:St(new H(...Un.inspect().letter)),dreamId:nn?He:null,ego:Di.inspect(),egoBounds:Ju.map(n=>St(n.clone())),egoScreen:St(new H(.6,2,-48.7)),egoScreens:Di.inspect().landmarks.map(n=>St(new H(...n))),seams:Ii.inspect(),seamsBounds:Zu.map(n=>St(n.clone())),seamsScreen:St(new H(-24,1,-48)),seamsScreens:Ii.inspect().landmarks.map(n=>St(new H(...n))),still:Li.inspect(),stillBounds:Ku.map(n=>St(n.clone())),stillScreen:St(new H(24,.3,-24)),stillScreens:Li.inspect().landmarks.map(n=>St(new H(...n))),fork:Ni.inspect(),forkScreen:St(new H(-23,.1,-32)),forkScreens:Ni.inspect().landmarks.map(n=>St(new H(...n))),garage:gi.inspect(),garageScreen:St(new H(...gi.inspect().garage).add(new H(-24,-.7,-24))),garageCarScreen:St(new H(-32,-.7,-24)),quotes:Ui.inspect(),quoteScreens:Ui.inspect().quotePositions.map(n=>St(new H(...n).add(new H(24,-1.05,24)))),dash:_i.inspect(),dashSnailScreen:St(new H(..._i.inspect().snail).add(new H(0,-1,-24))),dashBeamScreen:St(new H(..._i.inspect().beam).add(new H(0,-1.5,-24))),drydock:Pi.inspect(),drydockShipScreen:St(new H(...Pi.inspect().ship).add(new H(-24,-.5,0))),bench:ji.inspect(),benchScreen:St(new H(-2.65,1.58,-3.18)),benchBucketScreen:St(new H(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:Qi.inspect(),amnestyScreen:St(new H(0,-.3,24)),cellar:Ri.inspect(),cellarScreen:St(new H(24,-.3,.25)),objects:Object.keys(Gn),greenhouse:Sn.inspect(),dock:ei.inspect(),boatScreen:St(new H(...ei.inspect().boat).add(new H(0,.2,0))),drawCalls:st.info.render.calls,triangles:st.info.render.triangles,gpuGeometries:st.info.memory.geometries,zoom:Oe.zoom,target:je.target.toArray(),angle:mn.angle,head:Qe.position.toArray(),roof:pn.position.toArray(),roofOpen:dr(),roofMode:we.roof===null?"auto":"manual",pendulums:uo.map(n=>n.group.rotation.x),growth:ir,meshes:(()=>{let n=0;return Kt.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[st.domElement.width,st.domElement.height]})};Ny();
