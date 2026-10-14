(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function yu(n){const e=n.state||{},t=(o,a,l,c)=>Number.isFinite(o)?Math.max(a,Math.min(l,Math.floor(o))):c,i={depths:[0,0,0].map((o,a)=>{var l;return t((l=e.depths)==null?void 0:l[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Pf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,watching:f,localPlay:g}){var de,oe,F;const x=s([-24,-1.5,0],e);x.name="sandbox-drydock";const m=i("#d0b987"),d=i("#556f7f"),M=i("#a65d42"),w=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,x),r([0,.2,0],[15.7,.12,9.7],t.dark,x),r([.5,.38,0],[12.6,.26,3.9],t.dark,x);for(const P of[-2,2])r([.5,.96,P],[12.9,1.1,.22],t.copper,x);for(const P of[-6,7])r([P,.96,0],[.22,1.1,4.1],t.copper,x);const y=Array.from({length:3},(P,H)=>r([-4+H*2,.98,0],[1.9,1,3.7],m,x)),b=r([.5,.54,0],[12.6,.04,3.75],w,x);b.castShadow=!1;const S=Array.from({length:3},(P,H)=>{const q=s([-4+H*2,.35,3.05],x);for(let re=0;re<5;re++)o([(re-2)*.27,.16+re%2*.1,0],[.32,.22,.4],m,q);return q}),A=s([-2,1.3,0],x);A.name="sandbox-cargo-ship";const _=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([P,H],q)=>q?_.lineTo(P,-H):_.moveTo(P,-H)),_.closePath();const E=new n.ExtrudeGeometry(_,{depth:.67,bevelEnabled:!1});E.rotateX(-Math.PI/2);const R=new n.Mesh(E,d);R.castShadow=!0,R.receiveShadow=!0,A.add(R),r([-.45,.7,0],[4.9,.09,1.4],t.cream,A);for(let P=0;P<3;P++){r([-.95+P*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][P],A);for(const H of[-.601,.601])for(let q=0;q<4;q++)r([-.95+P*.92-.3+q*.2,1.03,H],[.024,.5,.025],t.dark,A)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,A),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,A);for(const P of[-.63,.63])r([-2.25,1.6,P],[.73,.16,.03],t.dark,A);a([-2.45,1.98,0],.15,.43,M,A),a([-2.45,2.21,0],.15,.05,t.dark,A),l([2.3,.77,0],[2.3,1.9,0],.035,t.metal,A),r([2.55,1.7,0],[.48,.26,.03],t.cream,A);for(const P of[-2.9,2.1])for(const H of[-.7,.7])l([P,.7,H],[P,1,H],.025,t.cream,A);for(const P of[-.7,.7])l([-2.9,1,P],[2.1,1,P],.025,t.cream,A);const D=s([5.9,1.1,3.4],x);c([0,0,0],.4,.04,t.copper,D,[0,0,0]);for(let P=0;P<4;P++){const H=P*Math.PI/2;l([0,0,0],[.4*Math.cos(H),.4*Math.sin(H),0],.025,t.copper,D)}l([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,x),l([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,x);const U=r([5.9,.8,1.75],[.19,.55,.19],w,x);U.castShadow=!1;const k=s([0,.29,0],x);for(const P of[-2.9,2.9])r([.5,0,P],[13,.02,1.1],w,k);for(let P=0;P<3;P++)u(["КОРМА","ТРЮМ","НОС"][P],[-4+P*2,.7,2.15],1.55,.28,x,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,x,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,x,{size:42});for(const P of[-6.6,6.6])l([P,.3,-3.8],[P,3.6,-3.8],.08,t.metal,x),r([P,3.6,-3.5],[.55,.16,.8],t.metal,x),r([P,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),x);for(let P=0;P<15;P++)r([-7.2-P*.72,-.03-P*.09,1.2],[.65,.14,1.12],t.cream,e);const I=s([-6.5,.5,3.3],x);l([0,0,0],[0,1.5,0],.045,t.copper,I),r([0,.1,0],[.32,.35,.08],t.metal,I),c([0,1.53,0],.1,.025,t.metal,I,[0,0,0]),p(A,[]),p(x,[...y,...S,b,A,D,U,k]);let B=null,W=((F=(oe=(de=window.__beznogimState)==null?void 0:de.mechanics)==null?void 0:oe.drydock)==null?void 0:F.public)||null,O,ee="",G=0,Q=0,j=0;try{B=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function ge(P,H,q={}){const re=yu({mode:P,tool:H,args:q,state:B});B=re.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(B))}catch{}return re}ge("migrate");const fe=document.createElement("div");fe.id="drydock-controls",fe.hidden=!0,fe.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(fe);function Se(){return W&&f()?W:yu({mode:"migrate",state:B}).public}function De(P,H){g(),ge("action",P,H),ee="",K(0),h()}fe.querySelectorAll("[data-dig]").forEach(P=>P.onclick=()=>De("dig",{channel:Number(P.dataset.dig)})),fe.querySelector("#drydock-fill").onclick=()=>De("pump",{direction:"fill"}),fe.querySelector("#drydock-drain").onclick=()=>De("pump",{direction:"drain"}),fe.querySelector("#drydock-reset").onclick=()=>De("reset");function te(P){O?(O.water!==P.water&&(G=2),O.floods!==P.floods&&(Q=3),!O.launched&&P.launched&&(j=0)):j=P.launched?1:0,O=P,fe.querySelector("#drydock-readout").textContent=`каналы ${P.depths.join(" / ")} · вода ${P.water}/2 · переливы ${P.floods}`,fe.querySelectorAll("[data-dig]").forEach(H=>{H.disabled=P.launched||P.water>0||P.depths[Number(H.dataset.dig)]===2}),fe.querySelector("#drydock-fill").disabled=P.launched,fe.querySelector("#drydock-drain").disabled=P.launched||P.water===0,y.forEach((H,q)=>{const re=1-P.depths[q]*.4;H.scale.y=re,H.position.y=.48+re/2,S[q].scale.setScalar(.45+P.depths[q]*.4)}),b.visible=P.water>0,b.position.y=.49+P.water*.39}function V(){const P=O||Se();return{action:W&&f()?"попробовать свой спуск":P.launched?"корабль в песок ↺":"спустить корабль",description:(W&&f()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+P.message}}function K(P){const H=Se(),q=JSON.stringify(H);q!==ee&&(ee=q,te(H),h()),G=Math.max(0,G-P),Q=Math.max(0,Q-P),U.visible=G>0&&H.water>0,k.visible=Q>0,D.rotation.z+=G>0?P*3:0,j=H.launched?Math.min(1,j+P/5):0;const re=j*j*(3-2*j);A.position.x=-2+re*5.6;const z=Math.min(...H.depths),$=H.afloat?.94:1.15-z*.32;A.position.y=n.MathUtils.damp(A.position.y,$,4,P),A.rotation.z=n.MathUtils.damp(A.rotation.z,H.afloat?0:(H.depths[2]-H.depths[0])*.085,4,P)}return window.addEventListener("beznogim:state",({detail:P})=>{var q,re;const H=(re=(q=P.mechanics)==null?void 0:q.drydock)==null?void 0:re.public;H&&(W=H,ee="")}),te(Se()),A.position.x=Se().launched?3.6:-2,{house:x,controls:fe,update:K,card:V,run:()=>De(Se().launched?"reset":"launch"),inspect:()=>({source:W&&f()?"resident":"sandbox",...O,ship:A.position.toArray(),pitch:A.rotation.z,waterY:b.position.y,voyage:j,sandHeights:y.map(P=>P.scale.y),floodVisible:k.visible})}}function Mu(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Lf({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,changed:p,watching:h,localPlay:f}){var fe,Se,De;const g=s([0,0,0],e);g.name="mechanical-bench";const x=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],x,g),l([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const d=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let te=0;te<7;te++)for(let V=0;V<9;V++)M.push(r([.55+(V-4)*.145,1.5+(3-te)*.14,-.683],[.13,.12,.02],m,g));const w=s([-1.05,1.24,-.38],g);w.name="core-gear",a([0,0,0],.3,.11,t.copper,w).rotation.x=Math.PI/2;const y=[];for(let te=0;te<12;te++){const V=te/12*Math.PI*2;let K=r([Math.cos(V)*.33,Math.sin(V)*.33,0],[.13,.13,.12],t.copper,w);K.rotation.z=V,y.push(K)}c([0,0,.06],.13,.025,t.dark,w,[0,0,0]);const b=s([-.4,1.12,-.38],g);c([0,0,0],.19,.035,t.dark,b,[0,0,0]),l([-.2,0,0],[.2,0,0],.025,t.metal,b);const S=s([0,0,0],g);l([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),l([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const A=s([-1.5,1,-.05],g);l([0,0,0],[.23,0,0],.04,t.metal,A),l([.23,0,0],[.23,.23,0],.04,t.copper,A),o([.23,.23,0],.08,t.rust,A);const _=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,_),a([0,.281,0],.29,.015,t.dark,_),c([0,.29,0],.33,.025,t.copper,_),c([0,.36,0],.33,.025,t.metal,_,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const E=Array.from({length:3},(te,V)=>o([.17+V*.3,2.23,-.82],.06,t.mint,g));let R=null,D=((De=(Se=(fe=window.__beznogimState)==null?void 0:fe.mechanics)==null?void 0:Se.bench)==null?void 0:De.public)||null,U,k="",I=0;try{R=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function B(te,V,K={}){const de=Mu({mode:te,tool:V,args:K,state:R});R=de.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(R))}catch{}return de}B("migrate");const W=document.createElement("div");W.id="bench-controls",W.hidden=!0,W.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(W);function O(){return D&&h()?D:Mu({mode:"migrate",state:R}).public}function ee(te,V){f(),B("action",te,V),k="",ge(0),p()}W.querySelectorAll("[data-part]").forEach(te=>te.onclick=()=>ee("fit",{part:te.dataset.part,value:Number(te.dataset.value)})),W.querySelector("#bench-salvage").onclick=()=>ee("salvage"),W.querySelector("#bench-restart").onclick=()=>ee("restart");function G(te){U&&U.attempts!==te.attempts&&(I=3),U=te,W.querySelector("#bench-readout").textContent=`экран ${te.round+1}/3 · скорость ${te.speed} / нужно ${te.target}`,W.querySelectorAll("[data-part]").forEach(V=>{V.setAttribute("aria-pressed",String(te[V.dataset.part]===Number(V.dataset.value))),V.disabled=te.phase!=="ready"}),W.querySelector("#bench-salvage").disabled=!te.bucket,x.color.set(te.picture?"#16362c":"#e9e4cc"),x.emissive.set(te.picture?"#20382b":"#e9e4cc"),x.emissiveIntensity=te.picture?.1:.6,M.forEach((V,K)=>V.visible=!!te.picture&&d[te.picture-1][K]==="1"),y.forEach((V,K)=>V.visible=K<te.core*3),b.scale.setScalar(.75+te.belt*.25),S.visible=!te.bucket,E.forEach((V,K)=>V.visible=K<te.repairs)}const Q={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function j(){const te=U||O();return{action:D&&h()?"собрать свой монитор":te.phase==="ejected"?"достать ядро":te.phase==="repaired"?te.round===2?"закончить работу":"следующий экран":te.phase==="complete"?"ещё раз":"крутить рукоятку",description:(D&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+Q[te.phase]}}function ge(te){const V=O(),K=JSON.stringify(V);K!==k&&(k=K,G(V),p()),I=Math.max(0,I-te);const de=Math.min(1,te*7),oe=V.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];w.position.lerp(new n.Vector3(...oe),de),w.rotation.x=n.MathUtils.lerp(w.rotation.x,V.bucket?-Math.PI/2:0,de);const F=I>0?V.core*2:V.picture?.4:0;w.rotation.z+=te*F,b.rotation.z-=te*F*V.belt,A.rotation.z+=te*F}return window.addEventListener("beznogim:state",({detail:te})=>{var K,de;const V=(de=(K=te.mechanics)==null?void 0:K.bench)==null?void 0:de.public;V&&(D=V,k="")}),G(O()),w.position.set(...O().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:W,update:ge,card:j,run:()=>{const te=O();ee(te.phase==="ejected"?"salvage":te.phase==="repaired"?"next":te.phase==="complete"?"restart":"crank")},inspect:()=>({source:D&&h()?"resident":"sandbox",...U,corePosition:w.position.toArray(),coreAngle:w.rotation.z,driveAngle:b.rotation.z,litPixels:M.filter(te=>te.visible).length})}}const Su=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function bu(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Eu(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):bu();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const l=n.args||{},c=n.tool;if(c==="restart")Object.assign(e,bu(e.run+1));else if(c==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(c==="load")!Number.isInteger(l.index)||l.index<0||l.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[l.index]=!e.loaded[l.index],e.status="idle");else if(c==="amnesty")e.pardoned=!0,e.status="idle";else if(c==="dispatch"){const u=Su[e.round],p=u.weights.reduce((h,f,g)=>h+(e.loaded[g]?f+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,p!==u.target?(e.status=p<u.target?"under":"over",i={ok:!1,reason:e.status,total:p,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,f)=>{e.loaded[f]&&e.delivered.push({id:`${e.run}:${e.round}:${f}`,weight:h})}),i={ok:!0,total:p,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Su[e.round],r=s.weights.map((l,c)=>l+(e.pardoned?0:s.debt[c])),o=r.reduce((l,c,u)=>l+(e.loaded[u]?c:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Df({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,watching:f,localPlay:g}){var V,K,de;const x=s([0,-1.5,24]);x.name="amnesty-bureau";const m=i("#9d8560"),d=i("#a1b56f"),M=i("#f1d29a"),w=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],w,x),r([3.65,-.14,0],[3.3,.5,7],w,x),r([0,-.8,0],[4.2,.1,6.7],t.dark,x);for(const oe of[-4.9,4.9])l([oe,0,-3],[oe,3.3,-3],.06,t.copper,x);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,x,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,x,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,x);const y=s([0,.2,1.15],x);for(let oe=0;oe<11;oe++)r([-2+oe*.4,0,0],[.38,.16,1.65],m,y);for(const oe of[-.72,.72])l([-2.2,.22,oe],[2.2,.22,oe],.045,t.copper,y);a([0,-.22,1.15],.32,.6,t.metal,x);const b=s([-2.55,.32,1.15],x);r([0,.12,0],[1.5,.18,1.35],t.metal,b);for(const oe of[-.52,.52])for(const F of[-.58,.58]){const P=c([oe,0,F],.17,.05,t.dark,b,[0,0,0]);P.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],x);l([0,-.5,0],[0,.2,0],.1,t.metal,S);const A=s([0,0,0],S);l([0,0,0],[0,.8,0],.065,t.copper,A),o([0,.8,0],.14,t.rust,A),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,x,{size:35});const _=s([.1,.1,-2.3],x);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const E=a([0,.7,0],.57,1.1,t.copper,_);c([0,1.28,0],.25,.045,t.dark,_);const R=Array.from({length:3},(oe,F)=>o([1.75+F*.34,2.15,-3.05],.095,t.mint,x)),D=Array.from({length:3},(oe,F)=>{const P=s([-3.6,.72,-2.1+F*1.08],x),H=o([0,0,0],[.28,.23,.57],d,P);H.rotation.z=.1,l([0,0,-.5],[.05,.12,-.68],.045,t.leaf,P);const q=s([.45,.28,0],P);return r([0,0,0],[.29,.57,.4],M,q),r([0,0,.21],[.18,.045,.012],t.rust,q),{g:P,tax:q}});u("A",[-4.35,.75,-2.1],.28,.28,x),u("B",[-4.35,.75,-1.02],.28,.28,x),u("C",[-4.35,.75,.06],.28,.28,x),r([3.55,.8,-1.7],[2.75,.13,2.2],m,x);const U=Array.from({length:6},(oe,F)=>o([2.75+F%3*.7,1,-2.1+Math.floor(F/3)*.83],[.2,.19,.38],d,x));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,x,{size:39});const k=s([0,0,0],e);for(let oe=0;oe<15;oe++){const F=oe/14;r([-.6+Math.sin(F*Math.PI)*1.5,-1.55,17+oe*.3],[.9,.12,.65],w,k)}for(let oe=0;oe<5;oe++)r([-.8-oe*.6,-1.55,21.5],[.75,.12,.75],w,k);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,k,{size:35}),l([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,k),p(k,[]),p(x,[y,b,S,_,...D.map(oe=>oe.g),...U,...R]),p(y,[]),p(b,[]);let I=null,B=((de=(K=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:K.amnesty)==null?void 0:de.public)||null,W,O="",ee=0;try{I=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function G(oe,F,P={}){const H=Eu({state:I,mode:oe,tool:F,args:P});I=H.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(I))}catch{}return H}G("migrate");const Q=document.createElement("div");Q.id="amnesty-controls",Q.hidden=!0,Q.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(Q);function j(){return B&&f()?B:Eu({state:I,mode:"migrate"}).public}function ge(oe,F){g(),G("action",oe,F),O="",te(0),h()}for(const oe of Q.querySelectorAll("[data-load]"))oe.onclick=()=>ge("load",{index:Number(oe.dataset.load)});Q.querySelector("#amnesty-pardon").onclick=()=>ge("amnesty"),Q.querySelector("#amnesty-restart").onclick=()=>ge("restart");const fe={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function Se(oe){W=oe;const F=oe.status==="delivered"||oe.status==="complete";Q.querySelector("#amnesty-readout").textContent=`рейс ${oe.round+1}/3 · груз ${oe.total} / нужно ${oe.target}`,Q.querySelectorAll("[data-load]").forEach((P,H)=>{P.textContent=`${["A","B","C"][H]} · ${oe.weights[H]}${oe.debt[H]?` + ${oe.debt[H]} бумага`:""}`,P.setAttribute("aria-pressed",String(oe.loaded[H])),P.disabled=F}),Q.querySelector("#amnesty-pardon").disabled=oe.pardoned||F,Q.querySelector("#amnesty-pardon").textContent=oe.pardoned?"налог отменён":"отменить налог",E.scale.y=oe.target/4,R.forEach((P,H)=>P.visible=H<(oe.status==="complete"?3:oe.round)),U.forEach((P,H)=>P.visible=H<oe.delivered.length),D.forEach((P,H)=>{P.tax.visible=!oe.pardoned||ee<.99,P.g.visible=!F||!oe.loaded[H],P.g.scale.setScalar(.8+oe.weights[H]*.08)})}function De(){const oe=W||j();return{action:B&&f()?"войти в свою амнистию":oe.status==="delivered"?"следующий рейс":oe.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(B&&f()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+fe[oe.status]}}function te(oe,F){const P=j(),H=JSON.stringify(P);H!==O&&(O=H,Se(P),h());const q=P.status==="delivered"||P.status==="complete",re=(z,$)=>n.MathUtils.lerp(z,$,Math.min(1,oe*5));y.rotation.z=re(y.rotation.z,P.tilt),b.position.x=re(b.position.x,q?3:-2.55),A.rotation.z=re(A.rotation.z,P.pardoned?-.65:0),ee=re(ee,P.pardoned?1:0),D.forEach(z=>{z.tax.position.y=.28+ee*2.5,z.tax.rotation.z=ee*.8,z.tax.visible=!P.pardoned||ee<.99}),U.forEach((z,$)=>z.visible=$<P.delivered.length-(q&&b.position.x<2.9?2:0)),D.forEach((z,$)=>{const ce=P.loaded[$];z.g.visible=!q||!ce||b.position.x<2.9,z.g.position.x=re(z.g.position.x,ce?b.position.x+($-1)*.42:-3.6),z.g.position.y=re(z.g.position.y,ce?.86:.72),z.g.position.z=re(z.g.position.z,ce?1.15:-2.1+$*1.08)})}return window.addEventListener("beznogim:state",({detail:oe})=>{var P,H;const F=(H=(P=oe.mechanics)==null?void 0:P.amnesty)==null?void 0:H.public;F&&(B=F,O="")}),ee=j().pardoned?1:0,Se(j()),{house:x,controls:Q,update:te,card:De,run:()=>ge(W.status==="delivered"?"next":W.status==="complete"?"restart":"dispatch"),inspect:()=>({source:B&&f()?"resident":"sandbox",...W,bridgeTilt:y.rotation.z,cartX:b.position.x,cargoPositions:D.map(oe=>oe.g.position.toArray()),taxVisible:D.map(oe=>oe.tax.visible),paperY:D.map(oe=>oe.tax.position.y),handleAngle:A.rotation.z,deliveredVisible:U.filter(oe=>oe.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="186",gi={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,kl=1,zh=2,Ls=1,kh=2,Rs=3,zi=0,hn=1,Rn=2,oi=0,Ds=1,Gl=2,Vl=3,Hl=4,Gh=5,ji=100,Vh=101,Hh=102,Wh=103,Xh=104,qh=200,Yh=201,Zh=202,$h=203,ac=204,lc=205,Jh=206,Kh=207,Qh=208,jh=209,ed=210,td=211,nd=212,id=213,sd=214,Co=0,Po=1,Lo=2,Fs=3,Do=4,Io=5,No=6,Uo=7,cc=0,rd=1,od=2,Xn=0,uc=1,hc=2,dc=3,ba=4,fc=5,pc=6,mc=7,gc=300,ki=301,ss=302,So=303,bo=304,Lr=306,vr=1e3,ri=1001,Fo=1002,Zt=1003,ad=1004,ar=1005,Jt=1006,Eo=1007,Ii=1008,gn=1009,_c=1010,xc=1011,Os=1012,Ea=1013,Zn=1014,Dn=1015,$n=1016,Ta=1017,wa=1018,Bs=1020,vc=35902,yc=35899,Mc=1021,Sc=1022,In=1023,ai=1026,Ni=1027,Aa=1028,Ra=1029,Gi=1030,Ca=1031,Pa=1033,hr=33776,dr=33777,fr=33778,pr=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Go=36196,Vo=37492,Ho=37496,Wo=37488,Xo=37489,yr=37490,qo=37491,Yo=37808,Zo=37809,$o=37810,Jo=37811,Ko=37812,Qo=37813,jo=37814,ea=37815,ta=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,aa=36492,la=36494,ca=36495,ua=36283,ha=36284,Mr=36285,da=36286,ld=3200,fa=0,cd=1,fi="",sn="srgb",Sr="srgb-linear",br="linear",_t="srgb",To=7680,ud=519,hd=512,dd=513,fd=514,La=515,pd=516,md=517,Da=518,gd=519,_d=35044,Wl="300 es",Wn=2e3,zs=2001;function If(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xd(){const n=pa("canvas");return n.style.display="block",n}const Tu={};function Xl(...n){const e="THREE."+n.shift();console.log(e,...n)}function vd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=vd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=vd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ns(...n){const e=n.join(" ");e in Tu||(Tu[e]=!0,Qe(...n))}function Nf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Uf={[Co]:Po,[Lo]:No,[Do]:Uo,[Fs]:Io,[Po]:Co,[No]:Lo,[Uo]:Do,[Io]:Fs};class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const mr=Math.PI/180,Er=180/Math.PI;function as(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function bc(n,e){return(n%e+e)%e}function Ff(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Of(n,e,t){return n!==e?(t-n)/(e-n):0}function gr(n,e,t){return(1-t)*n+t*e}function Bf(n,e,t,i){return gr(n,e,1-Math.exp(-t*i))}function zf(n,e=1){return e-Math.abs(bc(n,e*2)-e)}function kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Gf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Vf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hf(n,e){return n+Math.random()*(e-n)}function Wf(n){return n*(.5-Math.random())}function Xf(n){n!==void 0&&(wu=n);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qf(n){return n*mr}function Yf(n){return n*Er}function Zf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function $f(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kf(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),p=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*p,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*p,a*c);break;case"ZXZ":n.set(l*p,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function As(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mn={DEG2RAD:mr,RAD2DEG:Er,generateUUID:as,clamp:rt,euclideanModulo:bc,mapLinear:Ff,inverseLerp:Of,lerp:gr,damp:Bf,pingpong:zf,smoothstep:kf,smootherstep:Gf,randInt:Vf,randFloat:Hf,randFloatSpread:Wf,seededRandom:Xf,degToRad:qf,radToDeg:Yf,isPowerOfTwo:Zf,ceilPowerOfTwo:$f,floorPowerOfTwo:Jf,setQuaternionFromProperEuler:Kf,normalize:an,denormalize:As},ru=class ru{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ru.prototype.isVector2=!0;let ye=ru;class yi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(p!==x||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+p*x;m<0&&(h=-h,f=-f,g=-g,x=-x,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,l=l*d+h*a,c=c*d+f*a,u=u*d+g*a,p=p*d+x*a}else{l=l*d+h*a,c=c*d+f*a,u=u*d+g*a,p=p*d+x*a;const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*p+l*f-c*h,e[t+1]=l*g+u*h+c*p-a*f,e[t+2]=c*g+u*f+a*h-l*p,e[t+3]=u*g-a*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),p=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"YXZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"ZXY":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"ZYX":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"YZX":this._x=h*u*p+c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p-h*f*g;break;case"XZY":this._x=h*u*p-c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p+h*f*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=i+a+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>p){const f=2*Math.sqrt(1+i-a-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>p){const f=2*Math.sqrt(1+a-i-p);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+p-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ou=class ou{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),p=2*(r*i-o*t);return this.x=t+l*c+o*p-a*u,this.y=i+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;let L=ou;const il=new L,Au=new yi,au=class au{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],f=i[5],g=i[8],x=s[0],m=s[3],d=s[6],M=s[1],w=s[4],y=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*x+a*M+l*b,r[3]=o*m+a*w+l*S,r[6]=o*d+a*y+l*A,r[1]=c*x+u*M+p*b,r[4]=c*m+u*w+p*S,r[7]=c*d+u*y+p*A,r[2]=h*x+f*M+g*b,r[5]=h*m+f*w+g*S,r[8]=h*d+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*p+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=p*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;let et=au;const sl=new et,Ru=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){const n={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sr]:{primaries:e,whitePoint:i,transfer:br,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const lt=Qf();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class yd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=pa("canvas")),fs.width=e.width,fs.height=e.height;const s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jf=0;class Ia{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let ep=0;const ol=new L;class Qt extends Si{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=ri,s=ri,r=Jt,o=Ii,a=In,l=gn,c=Qt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=as(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=gc;Qt.DEFAULT_ANISOTROPY=1;const lu=class lu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(f+1)/2,b=(d+1)/2,S=(u+h)/4,A=(p+x)/4,_=(g+m)/4;return w>y&&w>b?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=A/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lu.prototype.isVector4=!0;let Lt=lu;class Md extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Qt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Md{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ec extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sd extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ma=class Ma{constructor(e,t,i,s,r,o,a,l,c,u,p,h,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,p,h,f,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,p,h,f,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=h,d[3]=f,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*p,g=a*u,x=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*p,g=c*u,x=c*p;t[0]=h+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*p,g=c*u,x=c*p;t[0]=h-x*a,t[4]=-o*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*p,g=a*u,x=a*p;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*p,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*p,t[8]=g*p+f,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*p+g,t[10]=h-x*p}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+x,t[5]=o*u,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*u,t[10]=x*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,i){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ri.crossVectors(i,vn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ri.crossVectors(i,vn)),Ri.normalize(),Xr.crossVectors(vn,Ri),s[0]=Ri.x,s[4]=Xr.x,s[8]=vn.x,s[1]=Ri.y,s[5]=Xr.y,s[9]=vn.y,s[2]=Ri.z,s[6]=Xr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],f=i[13],g=i[2],x=i[6],m=i[10],d=i[14],M=i[3],w=i[7],y=i[11],b=i[15],S=s[0],A=s[4],_=s[8],E=s[12],R=s[1],D=s[5],U=s[9],k=s[13],I=s[2],B=s[6],W=s[10],O=s[14],ee=s[3],G=s[7],Q=s[11],j=s[15];return r[0]=o*S+a*R+l*I+c*ee,r[4]=o*A+a*D+l*B+c*G,r[8]=o*_+a*U+l*W+c*Q,r[12]=o*E+a*k+l*O+c*j,r[1]=u*S+p*R+h*I+f*ee,r[5]=u*A+p*D+h*B+f*G,r[9]=u*_+p*U+h*W+f*Q,r[13]=u*E+p*k+h*O+f*j,r[2]=g*S+x*R+m*I+d*ee,r[6]=g*A+x*D+m*B+d*G,r[10]=g*_+x*U+m*W+d*Q,r[14]=g*E+x*k+m*O+d*j,r[3]=M*S+w*R+y*I+b*ee,r[7]=M*A+w*D+y*B+b*G,r[11]=M*_+w*U+y*W+b*Q,r[15]=M*E+w*k+y*O+b*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],d=e[15],M=l*f-c*h,w=a*f-c*p,y=a*h-l*p,b=o*f-c*u,S=o*h-l*u,A=o*p-a*u;return t*(x*M-m*w+d*y)-i*(g*M-m*b+d*S)+s*(g*w-x*b+d*A)-r*(g*y-x*S+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],d=e[15],M=t*a-i*o,w=t*l-s*o,y=t*c-r*o,b=i*l-s*a,S=i*c-r*a,A=s*c-r*l,_=u*x-p*g,E=u*m-h*g,R=u*d-f*g,D=p*m-h*x,U=p*d-f*x,k=h*d-f*m,I=M*k-w*U+y*D+b*R-S*E+A*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=(a*k-l*U+c*D)*B,e[1]=(s*U-i*k-r*D)*B,e[2]=(x*A-m*S+d*b)*B,e[3]=(h*S-p*A-f*b)*B,e[4]=(l*R-o*k-c*E)*B,e[5]=(t*k-s*R+r*E)*B,e[6]=(m*y-g*A-d*w)*B,e[7]=(u*A-h*y+f*w)*B,e[8]=(o*U-a*R+c*_)*B,e[9]=(i*R-t*U-r*_)*B,e[10]=(g*S-x*y+d*M)*B,e[11]=(p*y-u*S-f*M)*B,e[12]=(a*E-o*D-l*_)*B,e[13]=(t*D-i*E+s*_)*B,e[14]=(x*w-g*b-m*M)*B,e[15]=(u*b-p*w+h*M)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,p=a+a,h=r*c,f=r*u,g=r*p,x=o*u,m=o*p,d=a*p,M=l*c,w=l*u,y=l*p,b=i.x,S=i.y,A=i.z;return s[0]=(1-(x+d))*b,s[1]=(f+y)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(h+d))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+w)*A,s[9]=(m-M)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),l=ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);const c=1/o,u=1/a,p=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,t.setFromRotationMatrix(zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Wn,l=!1){const c=this.elements,u=2*r/(t-e),p=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Wn,l=!1){const c=this.elements,u=2/(t-e),p=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Wn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===zs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ma.prototype.isMatrix4=!0;let dt=Ma;const ps=new L,zn=new dt,tp=new L(0,0,0),np=new L(1,1,1),Ri=new L,Xr=new L,vn=new L,Pu=new dt,Lu=new yi;class Mi{constructor(e=0,t=0,i=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ip=0;const Du=new L,ms=new yi,li=new dt,qr=new L,Js=new L,sp=new L,rp=new yi,Iu=new L(1,0,0),Nu=new L(0,1,0),Uu=new L(0,0,1),Fu={type:"added"},op={type:"removed"},gs={type:"childadded",child:null},al={type:"childremoved",child:null};class Ft extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new L,t=new Mi,i=new yi,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new et}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Js,qr,this.up):li.lookAt(qr,Js,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(li),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),gs.child=e,this.dispatchEvent(gs),gs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(op),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new L(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ui extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ap={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=bc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return lt.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=sn){lt.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Yr);const i=gr(Ci.h,Yr.h,t),s=gr(Ci.s,Yr.s,t),r=gr(Ci.l,Yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ot;ot.NAMES=bd;class Ua{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ed extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new L,ci=new L,cl=new L,ui=new L,_s=new L,xs=new L,Ou=new L,ul=new L,hl=new L,dl=new L,fl=new Lt,pl=new Lt,ml=new Lt;class Cn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kn.subVectors(e,t),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kn.subVectors(s,t),ci.subVectors(i,t),cl.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(ci),l=kn.dot(cl),c=ci.dot(ci),u=ci.dot(cl),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const h=1/p,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,i),ml.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(pl,r.y),o.addScaledVector(ml,r.z),o}static isFrontFacing(e,t,i,s){return kn.subVectors(i,t),ci.subVectors(e,t),kn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),kn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;_s.subVectors(s,i),xs.subVectors(r,i),ul.subVectors(e,i);const l=_s.dot(ul),c=xs.dot(ul);if(l<=0&&c<=0)return t.copy(i);hl.subVectors(e,s);const u=_s.dot(hl),p=xs.dot(hl);if(u>=0&&p<=u)return t.copy(s);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_s,o);dl.subVectors(e,r);const f=_s.dot(dl),g=xs.dot(dl);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(xs,a);const m=u*g-f*p;if(m<=0&&p-u>=0&&f-g>=0)return Ou.subVectors(r,s),a=(p-u)/(p-u+(f-g)),t.copy(s).addScaledVector(Ou,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(_s,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),$r.subVectors(this.max,Ks),vs.subVectors(e.a,Ks),ys.subVectors(e.b,Ks),Ms.subVectors(e.c,Ks),Pi.subVectors(ys,vs),Li.subVectors(Ms,ys),Yi.subVectors(vs,Ms);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Yi.z,Yi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Yi.z,0,-Yi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Yi.y,Yi.x,0];return!gl(t,vs,ys,Ms,$r)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,vs,ys,Ms,$r))?!1:(Jr.crossVectors(Pi,Li),t=[Jr.x,Jr.y,Jr.z],gl(t,vs,ys,Ms,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,Zr=new Hi,vs=new L,ys=new L,Ms=new L,Pi=new L,Li=new L,Yi=new L,Ks=new L,$r=new L,Jr=new L,Zi=new L;function gl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zt=new L,Kr=new ye;let lp=0;class Un extends Si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_d,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tc extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wc extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}const cp=new Hi,Qs=new L,_l=new L;class Wi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(_l)),this.expandByPoint(Qs.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let up=0;const Tn=new dt,xl=new Ft,Ss=new L,yn=new Hi,js=new Hi,Xt=new L;class Ot extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(If(e)?wc:Tc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(yn.min,js.min),yn.expandByPoint(Xt),Xt.addVectors(yn.max,js.max),yn.expandByPoint(Xt)):(yn.expandByPoint(js.min),yn.expandByPoint(js.max))}yn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Xt.add(Ss)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new L,l[_]=new L;const c=new L,u=new L,p=new L,h=new ye,f=new ye,g=new ye,x=new L,m=new L;function d(_,E,R){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),p.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(c),p.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(D),m.copy(p).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[_].add(x),a[E].add(x),a[R].add(x),l[_].add(m),l[E].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){const R=M[_],D=R.start,U=R.count;for(let k=D,I=D+U;k<I;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new L,y=new L,b=new L,S=new L;function A(_){b.fromBufferAttribute(s,_),S.copy(b);const E=a[_];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),y.crossVectors(S,E);const D=y.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,E=M.length;_<E;++_){const R=M[_],D=R.start,U=R.count;for(let k=D,I=D+U;k<I;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,p=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[f++]}return new Un(h,u,p)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],p=r[c];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new L,hp=new L,dp=new et;class si{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=vl.subVectors(i,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dp.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fp=0;class Xi extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Ds,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const di=new L,yl=new L,Qr=new L,jr=new L;class Ws{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yl.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(yl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Qr),a=jr.dot(this.direction),l=-jr.dot(Qr),c=jr.lengthSq(),u=Math.abs(1-o*o);let p,h,f,g;if(u>0)if(p=o*l-a,h=o*a-l,g=r*u,p>=0)if(h>=-g)if(h<=g){const x=1/u;p*=x,h*=x,f=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=r,p=Math.max(0,-(o*h+a)),f=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(o*h+a)),f=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),f=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(yl).addScaledVector(Qr,h),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,p=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,d=i.x-o.x,M=i.y-o.y,w=i.z-o.z,y=Math.abs(l),b=Math.abs(c),S=Math.abs(u);let A,_,E,R,D,U,k,I,B,W,O,ee;if(y>=b&&y>=S?(E=l,U=p,B=g,ee=d,l>=0?(A=c,_=u,R=h,D=f,k=x,I=m,W=M,O=w):(A=u,_=c,R=f,D=h,k=m,I=x,W=w,O=M)):b>=S?(E=c,U=h,B=x,ee=M,c>=0?(A=u,_=l,R=f,D=p,k=m,I=g,W=w,O=d):(A=l,_=u,R=p,D=f,k=g,I=m,W=d,O=w)):(E=u,U=f,B=m,ee=w,u>=0?(A=l,_=c,R=p,D=h,k=g,I=x,W=d,O=M):(A=c,_=l,R=h,D=p,k=x,I=g,W=M,O=d)),E===0)return null;const G=A/E,Q=_/E,j=1/E,ge=R-G*U,fe=D-Q*U,Se=k-G*B,De=I-Q*B,te=W-G*ee,V=O-Q*ee,K=te*De-V*Se,de=ge*V-fe*te,oe=Se*fe-De*ge;if(s){if(K<0||de<0||oe<0)return null}else if((K<0||de<0||oe<0)&&(K>0||de>0||oe>0))return null;const F=K+de+oe;if(F===0)return null;const P=j*(K*U+de*B+oe*ee);return(F>0?P<0:P>0)?null:this.at(P/F,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dr extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bu=new dt,$i=new Ws,eo=new Wi,zu=new L,to=new L,no=new L,io=new L,Ml=new L,so=new L,ku=new L,ro=new L;class dn extends Ft{constructor(e=new Ot,t=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Ml.fromBufferAttribute(p,e),o?so.addScaledVector(Ml,u):so.addScaledVector(Ml.sub(t),u))}t.add(so)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(eo.containsPoint($i.origin)===!1&&($i.intersectSphere(eo,zu)===null||$i.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Bu.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Bu),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){const S=a.getX(y),A=a.getX(y+1),_=a.getX(y+2);s=oo(this,d,e,i,c,u,p,S,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,d=x;m<d;m+=3){const M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=oo(this,o,e,i,c,u,p,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){const S=y,A=y+1,_=y+2;s=oo(this,d,e,i,c,u,p,S,A,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,d=x;m<d;m+=3){const M=m,w=m+1,y=m+2;s=oo(this,o,e,i,c,u,p,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function pp(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;ro.copy(a),ro.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:n}}function oo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,to),n.getVertexPosition(l,no),n.getVertexPosition(c,io);const u=pp(n,e,t,i,to,no,io,ku);if(u){const p=new L;Cn.getBarycoord(ku,to,no,io,p),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,p,new ye)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,p,new ye)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,p,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};Cn.getNormal(to,no,io,h.normal),u.face=h,u.barycoord=p}return u}class Ac extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Zt,u=Zt,p,h){super(null,o,a,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql extends Un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new dt,Gu=new dt,ao=[],Vu=new Hi,mp=new dt,er=new dn,tr=new Wi;class Yl extends dn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),Vu.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Vu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),tr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(i),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),Gu.multiplyMatrices(i,bs),er.matrixWorld=Gu,er.raycast(e,ao);for(let o=0,a=ao.length;o<a;o++){const l=ao[o];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ac(new Float32Array(s*this.count),s,this.count,Aa,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ji=new Wi,gp=new ye(.5,.5),lo=new L;class Fa{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],f=r[7],g=r[8],x=r[9],m=r[10],d=r[11],M=r[12],w=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,d-g,b-M).normalize(),s[1].setComponents(c+o,f+u,d+g,b+M).normalize(),s[2].setComponents(c+a,f+p,d+x,b+w).normalize(),s[3].setComponents(c-a,f-p,d-x,b-w).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,d-m,b-y).normalize();else if(s[4].setComponents(c-l,f-h,d-m,b-y).normalize(),t===Wn)s[5].setComponents(c+l,f+h,d+m,b+y).normalize();else if(t===zs)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=gp.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rc extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ma=new L,ga=new L,Hu=new dt,nr=new Ws,co=new Wi,Sl=new L,Wu=new L;class _p extends Ft{constructor(e=new Ot,t=new Rc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ma.fromBufferAttribute(t,s-1),ga.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new pt(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;Hu.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Hu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const d=u.getX(x),M=u.getX(x+1),w=uo(this,e,nr,l,d,M,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),d=uo(this,e,nr,l,x,m,g-1);d&&t.push(d)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const d=uo(this,e,nr,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=uo(this,e,nr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ma.fromBufferAttribute(a,s),ga.fromBufferAttribute(a,r),t.distanceSqToSegment(ma,ga,Sl,Wu)>i)return;Sl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Sl);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Cc extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xu=new dt,Zl=new Ws,ho=new Wi,fo=new L;class Td extends Ft{constructor(e=new Ot,t=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;Xu.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,x=f;g<x;g++){const m=c.getX(g);fo.fromBufferAttribute(p,m),qu(fo,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(p.count,o.start+o.count);for(let g=h,x=f;g<x;g++)fo.fromBufferAttribute(p,g),qu(fo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qu(n,e,t,i,s,r,o){const a=Zl.distanceSqToPoint(n);if(a<t){const l=new L;Zl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pc extends Qt{constructor(e=[],t=ki,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lc extends Qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks extends Qt{constructor(e,t,i=Zn,s,r,o,a=Zt,l=Zt,c,u=ai,p=1){if(u!==ai&&u!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wd extends ks{constructor(e,t=Zn,i=ki,s,r,o=Zt,a=Zt,l,c=ai){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dc extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bi extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function g(x,m,d,M,w,y,b,S,A,_,E){const R=y/A,D=b/_,U=y/2,k=b/2,I=S/2,B=A+1,W=_+1;let O=0,ee=0;const G=new L;for(let Q=0;Q<W;Q++){const j=Q*D-k;for(let ge=0;ge<B;ge++){const fe=ge*R-U;G[x]=fe*M,G[m]=j*w,G[d]=I,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[d]=S>0?1:-1,u.push(G.x,G.y,G.z),p.push(ge/A),p.push(1-Q/_),O+=1}}for(let Q=0;Q<_;Q++)for(let j=0;j<A;j++){const ge=h+j+B*Q,fe=h+j+B*(Q+1),Se=h+(j+1)+B*(Q+1),De=h+(j+1)+B*Q;l.push(ge,fe,De),l.push(fe,Se,De),ee+=6}a.addGroup(f,ee,E),f+=ee,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oa extends Ot{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,u=new ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const f=i+p/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ir extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],h=[],f=[];let g=0;const x=[],m=i/2;let d=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function M(){const y=new L,b=new L;let S=0;const A=(t-e)/i;for(let _=0;_<=r;_++){const E=[],R=_/r,D=R*(t-e)+e;for(let U=0;U<=s;U++){const k=U/s,I=k*l+a,B=Math.sin(I),W=Math.cos(I);b.x=D*B,b.y=-R*i+m,b.z=D*W,p.push(b.x,b.y,b.z),y.set(B,A,W).normalize(),h.push(y.x,y.y,y.z),f.push(k,1-R),E.push(g++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const R=x[E][_],D=x[E+1][_],U=x[E+1][_+1],k=x[E][_+1];(e>0||E!==0)&&(u.push(R,D,k),S+=3),(t>0||E!==r-1)&&(u.push(D,U,k),S+=3)}c.addGroup(d,S,0),d+=S}function w(y){const b=g,S=new ye,A=new L;let _=0;const E=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),g++;const D=g;for(let U=0;U<=s;U++){const I=U/s*l+a,B=Math.cos(I),W=Math.sin(I);A.x=E*W,A.y=m*R,A.z=E*B,p.push(A.x,A.y,A.z),h.push(0,R,0),S.x=B*.5+.5,S.y=W*.5*R+.5,f.push(S.x,S.y),g++}for(let U=0;U<s;U++){const k=b+U,I=D+U;y===!0?u.push(I,I+1,k):u.push(I+1,I,k),_+=3}c.addGroup(d,_,y===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ls extends Ir{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ls(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ba extends Ot{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new L,y=new L,b=new L;for(let S=0;S<t.length;S+=3)f(t[S+0],w),f(t[S+1],y),f(t[S+2],b),l(w,y,b,M)}function l(M,w,y,b){const S=b+1,A=[];for(let _=0;_<=S;_++){A[_]=[];const E=M.clone().lerp(y,_/S),R=w.clone().lerp(y,_/S),D=S-_;for(let U=0;U<=D;U++)U===0&&_===S?A[_][U]=E:A[_][U]=E.clone().lerp(R,U/D)}for(let _=0;_<S;_++)for(let E=0;E<2*(S-_)-1;E++){const R=Math.floor(E/2);E%2===0?(h(A[_][R+1]),h(A[_+1][R]),h(A[_][R])):(h(A[_][R+1]),h(A[_+1][R+1]),h(A[_+1][R]))}}function c(M){const w=new L;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){const M=new L;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const y=m(M)/2/Math.PI+.5,b=d(M)/Math.PI+.5;o.push(y,1-b)}g(),p()}function p(){for(let M=0;M<o.length;M+=6){const w=o[M+0],y=o[M+2],b=o[M+4],S=Math.max(w,y,b),A=Math.min(w,y,b);S>.9&&A<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,w){const y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const M=new L,w=new L,y=new L,b=new L,S=new ye,A=new ye,_=new ye;for(let E=0,R=0;E<r.length;E+=9,R+=6){M.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),b.copy(M).add(w).add(y).divideScalar(3);const D=m(b);x(S,R+0,M,D),x(A,R+2,w,D),x(_,R+4,y,D)}}function x(M,w,y,b){b<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.vertices,e.indices,e.radius,e.detail)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ye:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],o=[],a=new L,l=new dt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class za extends Kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ye){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*p+this.aX,c=h*p+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ad extends za{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+p)+(l-a)/p;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Yu=new L,Zu=new L,bl=new Ic,El=new Ic,Tl=new Ic;class Nc extends Kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Zu.subVectors(s[0],s[1]).add(s[0]),c=Zu);const p=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),f),x=Math.pow(p.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),bl.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,g,x,m),El.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,g,x,m),Tl.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),El.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),Tl.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return i.set(bl.calc(l),El.calc(l),Tl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $u(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function xp(n,e){const t=1-n;return t*t*e}function vp(n,e){return 2*(1-n)*n*e}function yp(n,e){return n*n*e}function _r(n,e,t,i){return xp(n,e)+vp(n,t)+yp(n,i)}function Mp(n,e){const t=1-n;return t*t*t*e}function Sp(n,e){const t=1-n;return 3*t*t*n*e}function bp(n,e){return 3*(1-n)*n*n*e}function Ep(n,e){return n*n*n*e}function xr(n,e,t,i,s){return Mp(n,e)+Sp(n,t)+bp(n,i)+Ep(n,s)}class Uc extends Kn{constructor(e=new ye,t=new ye,i=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ye){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends Kn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fc extends Kn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends Kn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oc extends Kn{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends Kn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(_r(e,s.x,r.x,o.x),_r(e,s.y,r.y,o.y),_r(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zc extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return i.set($u(a,l.x,c.x,u.x,p.x),$u(a,l.y,c.y,u.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var _a=Object.freeze({__proto__:null,ArcCurve:Ad,CatmullRomCurve3:Nc,CubicBezierCurve:Uc,CubicBezierCurve3:Rd,EllipseCurve:za,LineCurve:Fc,LineCurve3:Cd,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:Bc,SplineCurve:zc});class Pd extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _a[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new _a[s.type]().fromJSON(s))}return this}}class $l extends Pd{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Fc(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Oc(this.currentPoint.clone(),new ye(e,t),new ye(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Uc(this.currentPoint.clone(),new ye(e,t),new ye(i,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new zc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new za(e,t,i,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nr extends $l{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new $l().fromJSON(s))}return this}}function Tp(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ld(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Pp(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,p=l;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>p&&(p=g)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return Tr(r,o,t,a,l,c,0),o}function Ld(n,e,t,i,s){let r;if(s===Gp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ju(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ju(o/i|0,n[o],n[o+1],r);return r&&Gs(r,r.next)&&(Ar(r),r=r.next),r}function rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Gs(t,t.next)||It(t.prev,t,t.next)===0)){if(Ar(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Tr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Up(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Ap(n,i,s,r):wp(n)){e.push(l.i,n.i,c.i),Ar(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Rp(rs(n),e),Tr(n,e,t,i,s,r,2)):o===2&&Cp(n,e,t,i,s,r):Tr(rs(n),e,t,i,s,r,1);break}}}function wp(n){const e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),p=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=p&&g.y<=f&&lr(s,a,r,l,o,c,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ap(n,e,t,i){const s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,p,h),x=Math.max(a,l,c),m=Math.max(u,p,h),d=Jl(f,g,e,t,i),M=Jl(x,m,e,t,i);let w=n.prevZ,y=n.nextZ;for(;w&&w.z>=d&&y&&y.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&lr(a,u,l,p,c,h,w.x,w.y)&&It(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&lr(a,u,l,p,c,h,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=d;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&lr(a,u,l,p,c,h,w.x,w.y)&&It(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&lr(a,u,l,p,c,h,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Rp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Gs(i,s)&&Id(i,t,t.next,s)&&wr(i,s)&&wr(s,i)&&(e.push(i.i,t.i,s.i),Ar(t),Ar(t.next),t=n=s),t=t.next}while(t!==n);return rs(t)}function Cp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bp(o,a)){let l=Nd(o,a);o=rs(o,o.next),l=rs(l,l.next),Tr(o,e,t,i,s,r,0),Tr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Pp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Ld(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Op(c))}s.sort(Lp);for(let r=0;r<s.length;r++)t=Dp(s[r],t);return t}function Lp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Dp(n,e){const t=Ip(n,e);if(!t)return e;const i=Nd(t,n);return rs(i,i.next),rs(t,t.next)}function Ip(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Gs(n,t))return t;do{if(Gs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Dd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const p=Math.abs(s-t.y)/(i-t.x);wr(t,n)&&(p<u||p===u&&(t.x>o.x||t.x===o.x&&Np(o,t)))&&(o=t,u=p)}t=t.next}while(t!==a);return o}function Np(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function Up(n,e,t,i){let s=n;do s.z===0&&(s.z=Jl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Fp(s)}function Fp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Jl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Op(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Dd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function lr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Dd(n,e,t,i,s,r,o,a)}function Bp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zp(n,e)&&(wr(n,e)&&wr(e,n)&&kp(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||Gs(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Gs(n,e){return n.x===e.x&&n.y===e.y}function Id(n,e,t,i){const s=mo(It(n,e,t)),r=mo(It(n,e,i)),o=mo(It(t,i,n)),a=mo(It(t,i,e));return!!(s!==r&&o!==a||s===0&&po(n,t,e)||r===0&&po(n,i,e)||o===0&&po(t,n,i)||a===0&&po(t,e,i))}function po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function mo(n){return n>0?1:n<0?-1:0}function zp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Id(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wr(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function kp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nd(n,e){const t=Kl(n.i,n.x,n.y),i=Kl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ju(n,e,t,i){const s=Kl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ar(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Vp{static triangulate(e,t,i=2){return Tp(e,t,i)}}class ts{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ts.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Ku(e),Qu(i,e);let o=e.length;t.forEach(Ku);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Qu(i,t[l]);const a=Vp.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ku(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xs extends Ot{constructor(e=new Nr([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Hp;let w,y=!1,b,S,A,_;if(d){w=d.getSpacedPoints(u),y=!0,h=!1;const q=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(u,q),S=new L,A=new L,_=new L}h||(m=0,f=0,g=0,x=0);const E=a.extractPoints(c);let R=E.shape;const D=E.holes;if(!ts.isClockWise(R)){R=R.reverse();for(let q=0,re=D.length;q<re;q++){const z=D[q];ts.isClockWise(z)&&(D[q]=z.reverse())}}function k(q){const z=10000000000000001e-36;let $=q[0];for(let ce=1;ce<=q.length;ce++){const Z=ce%q.length,ue=q[Z],be=ue.x-$.x,Ee=ue.y-$.y,N=be*be+Ee*Ee,He=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs($.x),Math.abs($.y)),Fe=z*He*He;if(N<=Fe){q.splice(Z,1),ce--;continue}$=ue}}k(R),D.forEach(k);const I=D.length,B=R;for(let q=0;q<I;q++){const re=D[q];R=R.concat(re)}function W(q,re,z){return re||ct("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(re,z)}const O=R.length;function ee(q,re,z){let $,ce,Z;const ue=q.x-re.x,be=q.y-re.y,Ee=z.x-q.x,N=z.y-q.y,He=ue*ue+be*be,Fe=ue*N-be*Ee;if(Math.abs(Fe)>Number.EPSILON){const C=Math.sqrt(He),v=Math.sqrt(Ee*Ee+N*N),J=re.x-be/C,ne=re.y+ue/C,ae=z.x-N/v,ve=z.y+Ee/v,Te=((ae-J)*N-(ve-ne)*Ee)/(ue*N-be*Ee);$=J+ue*Te-q.x,ce=ne+be*Te-q.y;const he=$*$+ce*ce;if(he<=2)return new ye($,ce);Z=Math.sqrt(he/2)}else{let C=!1;ue>Number.EPSILON?Ee>Number.EPSILON&&(C=!0):ue<-Number.EPSILON?Ee<-Number.EPSILON&&(C=!0):Math.sign(be)===Math.sign(N)&&(C=!0),C?($=-be,ce=ue,Z=Math.sqrt(He)):($=ue,ce=be,Z=Math.sqrt(He/2))}return new ye($/Z,ce/Z)}const G=[];for(let q=0,re=B.length,z=re-1,$=q+1;q<re;q++,z++,$++)z===re&&(z=0),$===re&&($=0),G[q]=ee(B[q],B[z],B[$]);const Q=[];let j,ge=G.concat();for(let q=0,re=I;q<re;q++){const z=D[q];j=[];for(let $=0,ce=z.length,Z=ce-1,ue=$+1;$<ce;$++,Z++,ue++)Z===ce&&(Z=0),ue===ce&&(ue=0),j[$]=ee(z[$],z[Z],z[ue]);Q.push(j),ge=ge.concat(j)}let fe;if(m===0)fe=ts.triangulateShape(B,D);else{const q=[],re=[];for(let z=0;z<m;z++){const $=z/m,ce=f*Math.cos($*Math.PI/2),Z=g*Math.sin($*Math.PI/2)+x;for(let ue=0,be=B.length;ue<be;ue++){const Ee=W(B[ue],G[ue],Z);de(Ee.x,Ee.y,-ce),$===0&&q.push(Ee)}for(let ue=0,be=I;ue<be;ue++){const Ee=D[ue];j=Q[ue];const N=[];for(let He=0,Fe=Ee.length;He<Fe;He++){const C=W(Ee[He],j[He],Z);de(C.x,C.y,-ce),$===0&&N.push(C)}$===0&&re.push(N)}}fe=ts.triangulateShape(q,re)}const Se=fe.length,De=g+x;for(let q=0;q<O;q++){const re=h?W(R[q],ge[q],De):R[q];y?(A.copy(b.normals[0]).multiplyScalar(re.x),S.copy(b.binormals[0]).multiplyScalar(re.y),_.copy(w[0]).add(A).add(S),de(_.x,_.y,_.z)):de(re.x,re.y,0)}for(let q=1;q<=u;q++)for(let re=0;re<O;re++){const z=h?W(R[re],ge[re],De):R[re];y?(A.copy(b.normals[q]).multiplyScalar(z.x),S.copy(b.binormals[q]).multiplyScalar(z.y),_.copy(w[q]).add(A).add(S),de(_.x,_.y,_.z)):de(z.x,z.y,p/u*q)}for(let q=m-1;q>=0;q--){const re=q/m,z=f*Math.cos(re*Math.PI/2),$=g*Math.sin(re*Math.PI/2)+x;for(let ce=0,Z=B.length;ce<Z;ce++){const ue=W(B[ce],G[ce],$);de(ue.x,ue.y,p+z)}for(let ce=0,Z=D.length;ce<Z;ce++){const ue=D[ce];j=Q[ce];for(let be=0,Ee=ue.length;be<Ee;be++){const N=W(ue[be],j[be],$);y?de(N.x,N.y+w[u-1].y,w[u-1].x+z):de(N.x,N.y,p+z)}}}te(),V();function te(){const q=s.length/3;if(h){let re=0,z=O*re;for(let $=0;$<Se;$++){const ce=fe[$];oe(ce[2]+z,ce[1]+z,ce[0]+z)}re=u+m*2,z=O*re;for(let $=0;$<Se;$++){const ce=fe[$];oe(ce[0]+z,ce[1]+z,ce[2]+z)}}else{for(let re=0;re<Se;re++){const z=fe[re];oe(z[2],z[1],z[0])}for(let re=0;re<Se;re++){const z=fe[re];oe(z[0]+O*u,z[1]+O*u,z[2]+O*u)}}i.addGroup(q,s.length/3-q,0)}function V(){const q=s.length/3;let re=0;K(B,re),re+=B.length;for(let z=0,$=D.length;z<$;z++){const ce=D[z];K(ce,re),re+=ce.length}i.addGroup(q,s.length/3-q,1)}function K(q,re){let z=q.length;for(;--z>=0;){const $=z;let ce=z-1;ce<0&&(ce=q.length-1);for(let Z=0,ue=u+m*2;Z<ue;Z++){const be=O*Z,Ee=O*(Z+1),N=re+$+be,He=re+ce+be,Fe=re+ce+Ee,C=re+$+Ee;F(N,He,Fe,C)}}}function de(q,re,z){l.push(q),l.push(re),l.push(z)}function oe(q,re,z){P(q),P(re),P(z);const $=s.length/3,ce=M.generateTopUV(i,s,$-3,$-2,$-1);H(ce[0]),H(ce[1]),H(ce[2])}function F(q,re,z,$){P(q),P(re),P($),P(re),P(z),P($);const ce=s.length/3,Z=M.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);H(Z[0]),H(Z[1]),H(Z[3]),H(Z[1]),H(Z[2]),H(Z[3])}function P(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function H(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Wp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _a[s.type]().fromJSON(s)),new Xs(i,e.options)}}const Hp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ye(r,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],p=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-p),new ye(h,1-g),new ye(x,1-d)]:[new ye(a,1-l),new ye(u,1-p),new ye(f,1-g),new ye(m,1-d)]}};function Wp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ur extends Ba{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ur(e.radius,e.detail)}}class cs extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,p=e/a,h=t/l,f=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let w=0;w<c;w++){const y=w*p-r;g.push(y,-M,0),x.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const w=M+c*d,y=M+c*(d+1),b=M+1+c*(d+1),S=M+1+c*d;f.push(w,y,S),f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ka extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new L,h=new L,f=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){const M=[],w=d/i,y=o+w*a,b=e*Math.cos(y),S=Math.sqrt(e*e-b*b);let A=0;d===0&&o===0?A=.5/t:d===i&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){const E=_/t,R=s+E*r;p.x=-S*Math.cos(R),p.y=b,p.z=S*Math.sin(R),g.push(p.x,p.y,p.z),h.copy(p).normalize(),x.push(h.x,h.y,h.z),m.push(E+A,1-w),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const w=u[d][M+1],y=u[d][M],b=u[d+1][M],S=u[d+1][M+1];(d!==0||o>0)&&f.push(w,y,S),(d!==i-1||l<Math.PI)&&f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ga extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],p=[],h=new L,f=new L,g=new L;for(let x=0;x<=i;x++){const m=o+x/i*a;for(let d=0;d<=s;d++){const M=d/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),p.push(d/s),p.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){const d=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(d,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Va extends Ot{constructor(e=new Bc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new ye;let u=new L;const p=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function x(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),d()}function m(w){u=e.getPointAt(w/t,u);const y=o.normals[w],b=o.binormals[w];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);l.x=E*y.x+_*b.x,l.y=E*y.y+_*b.y,l.z=E*y.z+_*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,p.push(a.x,a.y,a.z)}}function d(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){const b=(s+1)*(w-1)+(y-1),S=(s+1)*w+(y-1),A=(s+1)*w+y,_=(s+1)*(w-1)+y;g.push(b,S,_),g.push(S,A,_)}}function M(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)c.x=w/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Va(new _a[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(ju(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ju(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const s in i)e[s]=i[s]}return e}function ju(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Fd={clone:Vs,merge:ln};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Od extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cs extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bd extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zd extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zp extends Rc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ha extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class kd extends Ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const wl=new dt,eh=new L,th=new L;class kc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===zs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const go=new L,_o=new yi,ei=new L;class Gc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(go,_o,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(go,_o,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new L,nh=new ye,ih=new ye;class Mn extends Gc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $p extends kc{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Wa extends Ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $p}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Fr extends Gc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jp extends kc{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vc extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Jp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Es=-90,Ts=1;class Gd extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Es,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Mn(Es,Ts,e,t);r.layers=this.layers,this.add(r);const o=new Mn(Es,Ts,e,t);o.layers=this.layers,this.add(o);const a=new Mn(Es,Ts,e,t);a.layers=this.layers,this.add(a);const l=new Mn(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Mn(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vd extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sh=new dt;class Hd{constructor(e,t,i=0,s=1/0){this.ray=new Ws(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,i=[]){return Ql(e,this,i,t),i.sort(rh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ql(e[s],this,i,t);return i.sort(rh),i}}function rh(n,e){return n.distance-e.distance}function Ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ql(r[o],e,t,!0)}}class jl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cu=class cu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};cu.prototype.isMatrix2=!0;let ec=cu;class Wd extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function oh(n,e,t,i){const s=Kp(i);switch(t){case Mc:return n*e;case Aa:return n*e/s.components*s.byteLength;case Ra:return n*e/s.components*s.byteLength;case Gi:return n*e*2/s.components*s.byteLength;case Ca:return n*e*2/s.components*s.byteLength;case Sc:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case Pa:return n*e*4/s.components*s.byteLength;case hr:case dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:case ko:return Math.max(n,16)*Math.max(e,8)/4;case Oo:case zo:return Math.max(n,8)*Math.max(e,8)/2;case Go:case Vo:case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ho:case yr:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case na:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ia:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ra:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case aa:case la:case ca:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ua:case ha:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mr:case da:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kp(n){switch(n){case gn:case _c:return{byteLength:1,components:1};case Os:case xc:case $n:return{byteLength:2,components:1};case Ta:case wa:return{byteLength:2,components:4};case Zn:case Ea:case Dn:return{byteLength:4,components:1};case vc:case yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xd(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qp(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const u=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,u);else{p.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<p.length;f++){const g=p[h],x=p[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,p[h]=x)}p.length=h+1;for(let f=0,g=p.length;f<g;f++){const x=p[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Km=`uniform sampler2D dfgLUT;
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
}`,Qm=`
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,ag=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,bg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Lg=`uniform float rotation;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:jp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:om,batching_pars_vertex:am,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:um,bsdfs:hm,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:ym,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Em,displacementmap_pars_vertex:Tm,displacementmap_vertex:wm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Im,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:Fm,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Gm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Zm,lights_phong_pars_fragment:$m,lights_physical_fragment:Jm,lights_physical_pars_fragment:Km,lights_fragment_begin:Qm,lights_fragment_maps:jm,lights_fragment_end:e0,lightprobes_pars_fragment:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:o0,map_pars_fragment:a0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:h0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:y0,normal_vertex:M0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:L0,dithering_pars_fragment:D0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:F0,shadowmap_vertex:O0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:k0,skinning_vertex:G0,skinnormal_vertex:V0,specularmap_fragment:H0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:Z0,uv_pars_fragment:$0,uv_pars_vertex:J0,uv_vertex:K0,worldpos_vertex:Q0,background_vert:j0,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:og,distance_vert:ag,distance_frag:lg,equirect_vert:cg,equirect_frag:ug,linedashed_vert:hg,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:wg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Lg,sprite_frag:Dg},Le={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Hn={basic:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ln([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ln([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ln([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ln([Le.points,Le.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ln([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ln([Le.common,Le.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ln([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ln([Le.sprite,Le.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:ln([Le.common,Le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:ln([Le.lights,Le.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Hn.physical={uniforms:ln([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const xo={r:0,b:0,g:0},Ig=new dt,qd=new et;qd.set(-1,0,0,0,1,0,0,0,1);function Ng(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,l,c,u=null,p=0,h=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(M){let w=!1;const y=f(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,w){const y=f(w);y&&(y.isCubeTexture||y.mapping===Lr)?(c===void 0&&(c=new dn(new bi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Vs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,(u!==y||p!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new dn(new cs(2,2),new On({name:"BackgroundMaterial",uniforms:Vs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,p=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(xo,Ud(n)),t.buffers.color.setClear(xo.r,xo.g,xo.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:d}}function Ug(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,U,k,I,B){let W=!1;const O=p(D,I,k,U);r!==O&&(r=O,c(r.object)),W=f(D,I,k,B),W&&g(D,I,k,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(D,U,k,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function p(D,U,k,I){const B=I.wireframe===!0;let W=i[U.id];W===void 0&&(W={},i[U.id]=W);const O=D.isInstancedMesh===!0?D.id:0;let ee=W[O];ee===void 0&&(ee={},W[O]=ee);let G=ee[k.id];G===void 0&&(G={},ee[k.id]=G);let Q=G[B];return Q===void 0&&(Q=h(l()),G[B]=Q),Q}function h(D){const U=[],k=[],I=[];for(let B=0;B<t;B++)U[B]=0,k[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,U,k,I){const B=r.attributes,W=U.attributes;let O=0;const ee=k.getAttributes();for(const G in ee)if(ee[G].location>=0){const j=B[G];let ge=W[G];if(ge===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),j===void 0||j.attribute!==ge||ge&&j.data!==ge.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function g(D,U,k,I){const B={},W=U.attributes;let O=0;const ee=k.getAttributes();for(const G in ee)if(ee[G].location>=0){let j=W[G];j===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ge={};ge.attribute=j,j&&j.data&&(ge.data=j.data),B[G]=ge,O++}r.attributes=B,r.attributesNum=O,r.index=I}function x(){const D=r.newAttributes;for(let U=0,k=D.length;U<k;U++)D[U]=0}function m(D){d(D,0)}function d(D,U){const k=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;k[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),B[D]!==U&&(n.vertexAttribDivisor(D,U),B[D]=U)}function M(){const D=r.newAttributes,U=r.enabledAttributes;for(let k=0,I=U.length;k<I;k++)U[k]!==D[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function w(D,U,k,I,B,W,O){O===!0?n.vertexAttribIPointer(D,U,k,B,W):n.vertexAttribPointer(D,U,k,I,B,W)}function y(D,U,k,I){x();const B=I.attributes,W=k.getAttributes(),O=U.defaultAttributeValues;for(const ee in W){const G=W[ee];if(G.location>=0){let Q=B[ee];if(Q===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const j=Q.normalized,ge=Q.itemSize,fe=e.get(Q);if(fe===void 0)continue;const Se=fe.buffer,De=fe.type,te=fe.bytesPerElement,V=De===n.INT||De===n.UNSIGNED_INT||Q.gpuType===Ea;if(Q.isInterleavedBufferAttribute){const K=Q.data,de=K.stride,oe=Q.offset;if(K.isInstancedInterleavedBuffer){for(let F=0;F<G.locationSize;F++)d(G.location+F,K.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let F=0;F<G.locationSize;F++)m(G.location+F);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let F=0;F<G.locationSize;F++)w(G.location+F,ge/G.locationSize,De,j,de*te,(oe+ge/G.locationSize*F)*te,V)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)d(G.location+K,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let K=0;K<G.locationSize;K++)w(G.location+K,ge/G.locationSize,De,j,ge*te,ge/G.locationSize*K*te,V)}}else if(O!==void 0){const j=O[ee];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(G.location,j);break;case 3:n.vertexAttrib3fv(G.location,j);break;case 4:n.vertexAttrib4fv(G.location,j);break;default:n.vertexAttrib1fv(G.location,j)}}}}M()}function b(){E();for(const D in i){const U=i[D];for(const k in U){const I=U[k];for(const B in I){const W=I[B];for(const O in W)u(W[O].object),delete W[O];delete I[B]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;const U=i[D.id];for(const k in U){const I=U[k];for(const B in I){const W=I[B];for(const O in W)u(W[O].object),delete W[O];delete I[B]}}delete i[D.id]}function A(D){for(const U in i){const k=i[U];for(const I in k){const B=k[I];if(B[D.id]===void 0)continue;const W=B[D.id];for(const O in W)u(W[O].object),delete W[O];delete B[D.id]}}}function _(D){for(const U in i){const k=i[U],I=D.isInstancedMesh===!0?D.id:0,B=k[I];if(B!==void 0){for(const W in B){const O=B[W];for(const ee in O)u(O[ee].object),delete O[ee];delete B[W]}delete k[I],Object.keys(k).length===0&&delete i[U]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Fg(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Og(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gn&&A!==Dn&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:S}}function Bg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new si,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const f=p.length!==0||h||i!==0||s;return s=h,i=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,f){const g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,d=n.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,w=M*4;let y=d.clippingState||null;l.value=y,y=u(g,h,w,f);for(let b=0;b!==w;++b)y[b]=t[b];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,f,g){const x=p!==null?p.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=f+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=f;w!==x;++w,y+=4)o.copy(p[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Ps=4,zg=6,kg=20,Gg=256,ir=new Fr,ah=new ot;let Al=null,Rl=0,Cl=0,Pl=!1;const Vg=new L,Ki=new L;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Vg}=r;Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:$n,format:In,colorSpace:Sr,depthBuffer:!1},s=lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hg(r)),this._blurMaterial=Xg(r,e,t),this._ggxMaterial=Wg(r,e,t)}return s}_compileMaterial(e){const t=new dn(new Ot,e);this._renderer.compile(t,ir)}_sceneToCubeUV(e,t,i,s,r){const l=new Mn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(ah),p.toneMapping=Xn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new bi,new Dr({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(ah),d=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const b=this._cubeSize;ws(s,y*b,w>2?b:0,b,b),p.setRenderTarget(s),d&&p.render(x,l),p.render(e,l)}p.toneMapping=f,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ki||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),h=c*1.25,f=p*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Ps?i-g+Ps:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ws(r,m,d,3*x,2*x),s.setRenderTarget(r),s.render(a,ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ws(e,m,d,3*x,2*x),s.setRenderTarget(e),s.render(a,ir)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],p=3*u*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),h=4*(this._cubeSize-u);ws(t,p,h,3*u,2*u),o.setRenderTarget(t),o.render(l,ir)}}function Hg(n){const e=[],t=[];let i=n;const s=n-Ps+1+zg;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,f=3,g=new Float32Array(f*h*p),x=new Float32Array(f*h*p);for(let d=0;d<p;d++){const M=d%3*2/3-1,w=d>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(y,f*h*d);for(let b=0;b<h;b++){const S=u[b*2]*2-1,A=u[b*2+1]*2-1;d===0?Ki.set(1,A,S):d===1?Ki.set(-S,1,-A):d===2?Ki.set(-S,A,1):d===3?Ki.set(-1,A,-S):d===4?Ki.set(-S,-1,A):Ki.set(S,A,-1),Ki.toArray(x,(d*h+b)*f)}}const m=new Ot;m.setAttribute("position",new Un(g,f)),m.setAttribute("outputDirection",new Un(x,f)),t.push(new dn(m,null)),i>Ps&&i--}return{lodMeshes:t,sizeLods:e}}function lh(n,e,t){const i=new Nn(n,e,t);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Wg(n,e,t){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Xg(n,e,t){return new On({name:"SphericalGaussianBlur",defines:{SAMPLES:kg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ch(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function uh(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hc extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:oi});r.uniforms.tEquirect.value=t;const o=new dn(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Jt),new Gd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function qg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===So||f===bo)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new Hc(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===So||f===bo,x=f===ki||f===ss;if(g||x){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new tc(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new tc(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===So?h.mapping=ki:f===bo&&(h.mapping=ss),h}function l(h){let f=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Yg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ns("WebGLRenderer: "+i+" extension not supported."),s}}}function Zg(n,e,t,i){const s={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(p){const h=[],f=p.index,g=p.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const M=f.array;x=f.version;for(let w=0,y=M.length;w<y;w+=3){const b=M[w+0],S=M[w+1],A=M[w+2];h.push(b,S,S,A,A,b)}}else{const M=g.array;x=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const b=w+0,S=w+1,A=w+2;h.push(b,S,S,A,A,b)}}const m=new(g.count>=65535?wc:Tc)(h,1);m.version=x;const d=r.get(p);d&&e.remove(d),r.set(p,m)}function u(p){const h=r.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function $g(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,h){n.drawElements(i,h,r,p*o),t.update(h,i,1)}function c(p,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,p*o,f),t.update(h,i,f))}function u(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Jg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Kg(n,e,t){const i=new WeakMap,s=new Lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*S*4*p),_=new Ec(A,b,S,p);_.type=Dn,_.needsUpdate=!0;const E=y*4;for(let D=0;D<p;D++){const U=d[D],k=M[D],I=w[D],B=b*S*4*D;for(let W=0;W<U.count;W++){const O=W*E;g===!0&&(s.fromBufferAttribute(U,W),A[B+O+0]=s.x,A[B+O+1]=s.y,A[B+O+2]=s.z,A[B+O+3]=0),x===!0&&(s.fromBufferAttribute(k,W),A[B+O+4]=s.x,A[B+O+5]=s.y,A[B+O+6]=s.z,A[B+O+7]=0),m===!0&&(s.fromBufferAttribute(I,W),A[B+O+8]=s.x,A[B+O+9]=s.y,A[B+O+10]=s.z,A[B+O+11]=I.itemSize===4?s.w:1)}}h={count:p,texture:_,size:new ye(b,S)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Qg(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const jg={[uc]:"LINEAR_TONE_MAPPING",[hc]:"REINHARD_TONE_MAPPING",[dc]:"CINEON_TONE_MAPPING",[ba]:"ACES_FILMIC_TONE_MAPPING",[pc]:"AGX_TONE_MAPPING",[mc]:"NEUTRAL_TONE_MAPPING",[fc]:"CUSTOM_TONE_MAPPING"};function e_(n,e,t,i,s,r){const o=new Nn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ot;c.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pt([0,2,0,0,2,0],2));const u=new Od({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new dn(c,u),h=new Fr(-1,1,1,-1,0,1);let f=null,g=null,x=!1,m,d=null,M=[],w=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),l!==null&&l.setSize(y,b);for(let S=0;S<M.length;S++){const A=M[S];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;const b=o.width,S=o.height;M.length>0&&a===null&&(a=new Nn(b,S,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(b,S,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const _=M[A];_.setSize&&_.setSize(b,S)}},this.begin=function(y,b){if(x||y.toneMapping===Xn&&M.length===0)return!1;if(d=b,b!==null){const S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return w===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Xn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,x=!0;let S=o,A=a;for(let _=0;_<M.length;_++){const E=M[_];E.enabled!==!1&&(E.render(y,A,S,b),E.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},lt.getTransfer(f)===_t&&(u.defines.SRGB_TRANSFER="");const _=jg[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(d),y.render(p,h),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Yd=new Qt,nc=new ks(1,1),Zd=new Ec,$d=new Sd,Jd=new Pc,hh=[],dh=[],fh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function t_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function r_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,i))return;mh.set(i),n.uniformMatrix2fv(this.addr,!1,mh),Wt(t,i)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,i))return;ph.set(i),n.uniformMatrix3fv(this.addr,!1,ph),Wt(t,i)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Ht(t,i))return;fh.set(i),n.uniformMatrix4fv(this.addr,!1,fh),Wt(t,i)}}function l_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function g_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=t.isReversedDepthBuffer()?Da:La,r=nc):r=Yd,t.setTexture2D(e||r,s)}function __(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$d,s)}function x_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jd,s)}function v_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zd,s)}function y_(n){switch(n){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return u_;case 35669:case 35673:return h_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return v_}}function M_(n,e){n.uniform1fv(this.addr,e)}function S_(n,e){const t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function b_(n,e){const t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function E_(n,e){const t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function T_(n,e){const t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function w_(n,e){const t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A_(n,e){const t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R_(n,e){n.uniform1iv(this.addr,e)}function C_(n,e){n.uniform2iv(this.addr,e)}function P_(n,e){n.uniform3iv(this.addr,e)}function L_(n,e){n.uniform4iv(this.addr,e)}function D_(n,e){n.uniform1uiv(this.addr,e)}function I_(n,e){n.uniform2uiv(this.addr,e)}function N_(n,e){n.uniform3uiv(this.addr,e)}function U_(n,e){n.uniform4uiv(this.addr,e)}function F_(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=nc:o=Yd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function O_(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$d,r[o])}function B_(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jd,r[o])}function z_(n,e,t){const i=this.cache,s=e.length,r=qa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zd,r[o])}function k_(n){switch(n){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return E_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return I_;case 36295:return N_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class G_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}}class H_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function gh(n,e){n.seq.push(e),n.map[e.id]=e}function W_(n,e,t){const i=n.name,s=i.length;for(Ll.lastIndex=0;;){const r=Ll.exec(i),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gh(t,c===void 0?new G_(a,n,e):new V_(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new H_(a),gh(t,p)),t=p}}}class Ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);W_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function _h(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const X_=37297;let q_=0;function Y_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const xh=new et;function Z_(n){lt._getMatrix(xh,lt.workingColorSpace,n);const e=`mat3( ${xh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case br:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Y_(n.getShaderSource(e),a)}else return r}function $_(n,e){const t=Z_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const J_={[uc]:"Linear",[hc]:"Reinhard",[dc]:"Cineon",[ba]:"ACESFilmic",[pc]:"AgX",[mc]:"Neutral",[fc]:"Custom"};function K_(n,e){const t=J_[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new L;function Q_(){lt.getLuminanceCoefficients(vo);const n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cr(n){return n!==""}function yh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(nx,sx)}const ix=new Map;function sx(n,e){let t=it[e];if(t===void 0){const i=ix.get(e);if(i!==void 0)t=it[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(n){return n.replace(rx,ox)}function ox(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const ax={[Ls]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function lx(n){return ax[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cx={[ki]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function ux(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const hx={[ss]:"ENVMAP_MODE_REFRACTION"};function dx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fx={[cc]:"ENVMAP_BLENDING_MULTIPLY",[rd]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function px(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fx[n.combine]||"ENVMAP_BLENDING_NONE"}function mx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lx(t),c=ux(t),u=dx(t),p=px(t),h=mx(t),f=j_(t),g=ex(r),x=s.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),d.length>0&&(d+=`
`)):(m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),d=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?it.tonemapping_pars_fragment:"",t.toneMapping!==Xn?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,$_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=ic(o),o=yh(o,t),o=Mh(o,t),a=ic(a),a=yh(a,t),a=Mh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+m+o,y=M+d+a,b=_h(s,s.VERTEX_SHADER,w),S=_h(s,s.FRAGMENT_SHADER,y);s.attachShader(x,b),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(S)||"",B=U.trim(),W=k.trim(),O=I.trim();let ee=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,S);else{const Q=vh(s,b,"vertex"),j=vh(s,S,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+j)}else B!==""?Qe("WebGLProgram: Program Info Log:",B):(W===""||O==="")&&(G=!1);G&&(D.diagnostics={runnable:ee,programLog:B,vertexShader:{log:W,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(b),s.deleteShader(S),_=new Ao(s,x),E=tx(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,X_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}let _x=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vx(e),t.set(e,i)),i}}class vx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function yx(n){return n===Gi||n===yr||n===Mr}function Mx(n,e,t,i,s,r){const o=new Na,a=new xx,l=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,D,U,k){const I=D.fog,B=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||W,O),G=ee&&ee.mapping===Lr?ee.image.height:null,Q=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=j!==void 0?j.length:0;let fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let Se,De,te,V;if(Q){const Et=Hn[Q];Se=Et.vertexShader,De=Et.fragmentShader}else{Se=_.vertexShader,De=_.fragmentShader;const Et=a.getVertexShaderStage(_),mt=a.getFragmentShaderStage(_);a.update(_,Et,mt),te=Et.id,V=mt.id}const K=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),oe=U.isInstancedMesh===!0,F=U.isBatchedMesh===!0,P=!!_.map,H=!!_.matcap,q=!!ee,re=!!_.aoMap,z=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,Z=!!_.displacementMap,ue=!!_.emissiveMap,be=!!_.metalnessMap,Ee=!!_.roughnessMap,N=_.anisotropy>0,He=_.clearcoat>0,Fe=_.dispersion>0,C=_.retroreflectivity>0,v=_.iridescence>0,J=_.sheen>0,ne=_.transmission>0,ae=N&&!!_.anisotropyMap,ve=He&&!!_.clearcoatMap,Te=He&&!!_.clearcoatNormalMap,he=He&&!!_.clearcoatRoughnessMap,_e=v&&!!_.iridescenceMap,Ae=v&&!!_.iridescenceThicknessMap,qe=J&&!!_.sheenColorMap,Ie=J&&!!_.sheenRoughnessMap,Re=!!_.specularMap,Ye=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=ne&&!!_.transmissionMap,Y=ne&&!!_.thicknessMap,Ce=!!_.gradientMap,me=!!_.alphaMap,Pe=_.alphaTest>0,Be=!!_.alphaHash,xe=!!_.extensions;let $e=Xn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($e=n.toneMapping);const We={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:De,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:F,batchingColor:F&&U._colorsTexture!==null,instancing:oe,instancingColor:oe&&U.instanceColor!==null,instancingMorph:oe&&U.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:P,matcap:H,envMap:q,envMapMode:q&&ee.mapping,envMapCubeUVHeight:G,aoMap:re,lightMap:z,bumpMap:$,normalMap:ce,displacementMap:Z,emissiveMap:ue,normalMapObjectSpace:ce&&_.normalMapType===cd,normalMapTangentSpace:ce&&_.normalMapType===fa,packedNormalMap:ce&&_.normalMapType===fa&&yx(_.normalMap.format),metalnessMap:be,roughnessMap:Ee,anisotropy:N,anisotropyMap:ae,clearcoat:He,clearcoatMap:ve,clearcoatNormalMap:Te,clearcoatRoughnessMap:he,dispersion:Fe,retroreflection:C,iridescence:v,iridescenceMap:_e,iridescenceThicknessMap:Ae,sheen:J,sheenColorMap:qe,sheenRoughnessMap:Ie,specularMap:Re,specularColorMap:Ye,specularIntensityMap:Ke,transmission:ne,transmissionMap:nt,thicknessMap:Y,gradientMap:Ce,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:Pe,alphaHash:Be,combine:_.combine,mapUv:P&&g(_.map.channel),aoMapUv:re&&g(_.aoMap.channel),lightMapUv:z&&g(_.lightMap.channel),bumpMapUv:$&&g(_.bumpMap.channel),normalMapUv:ce&&g(_.normalMap.channel),displacementMapUv:Z&&g(_.displacementMap.channel),emissiveMapUv:ue&&g(_.emissiveMap.channel),metalnessMapUv:be&&g(_.metalnessMap.channel),roughnessMapUv:Ee&&g(_.roughnessMap.channel),anisotropyMapUv:ae&&g(_.anisotropyMap.channel),clearcoatMapUv:ve&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(_.sheenRoughnessMap.channel),specularMapUv:Re&&g(_.specularMap.channel),specularColorMapUv:Ye&&g(_.specularColorMap.channel),specularIntensityMapUv:Ke&&g(_.specularIntensityMap.channel),transmissionMapUv:nt&&g(_.transmissionMap.channel),thicknessMapUv:Y&&g(_.thicknessMap.channel),alphaMapUv:me&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ce||N),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(P||me),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:de,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:fe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:P&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&_.extensions.multiDraw===!0||F)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(d(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function d(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const E=f[_.type];let R;if(E){const D=Hn[E];R=Fd.clone(D.uniforms)}else R=_.uniforms;return R}function y(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new gx(n,E,_,s),c.push(R),u.set(E,R)),R}function b(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function Sx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Eh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Th(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,x,m,d){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:d},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,f,g,x,m,d,M){M.reversedDepth===!0&&(m=-m);const w=a(h,f,g,x,m,d);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(h,f,g,x,m,d){const M=a(h,f,g,x,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||bx),i.length>1&&i.sort(f||Eh),s.length>1&&s.sort(f||Eh)}function p(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Ex(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Th,n.set(i,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ot};break;case"SpotLight":t={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function wx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ax=0;function Rx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Cx(n){const e=new Tx,t=wx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new dt,o=new dt;function a(c){let u=0,p=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,x=0,m=0,d=0,M=0,w=0,y=0,b=0,S=0,A=0,_=0,E=0,R=0;c.sort(Rx);for(let U=0,k=c.length;U<k;U++){const I=c[U],B=I.color,W=I.intensity,O=I.distance;let ee=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Gi?ee=I.shadow.map.texture:ee=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*W,p+=B.g*W,h+=B.b*W;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],W);R++}else if(I.isSunLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,j=t.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=ee;const ge=Q.getViewportCount();for(let fe=0;fe<ge;fe++)i.sunShadowMatrix[x+fe]=Q.getMatrix(fe),i.sunShadowCascade[x+fe]=Q._cascadeData[fe];x+=ge,g++}i.sun[f]=G,f++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,j=t.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=I.shadow.matrix,b++}i.directional[m]=G,m++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(B).multiplyScalar(W),G.distance=O,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[M]=G;const Q=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,Q.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[M]=Q.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,i.spotShadow[M]=j,i.spotShadowMap[M]=ee,A++}M++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(B).multiplyScalar(W),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=G,w++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const Q=I.shadow,j=t.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,i.pointShadow[d]=j,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=I.shadow.matrix,S++}i.point[d]=G,d++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(W),G.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[y]=G,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==_||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=d,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=_,D.numLightProbes=R,i.version=Ax++)}function l(c,u){let p=0,h=0,f=0,g=0,x=0,m=0;const d=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const y=c[M];if(y.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),p++}else if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const b=i.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:i}}function wh(n){const e=new Cx(n),t=[],i=[],s=[];function r(h){p.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Px(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new wh(n),e.set(s,[a])):r>=o.length?(a=new wh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`,Ix=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Nx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ah=new dt,sr=new L,Dl=new L;function Ux(n,e,t){let i=new Fa;const s=new ye,r=new ye,o=new Lt,a=new Bd,l=new zd,c={},u=t.maxTextureSize,p={[zi]:hn,[hn]:zi,[Rn]:Rn},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let d=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===kh&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=d!==this.type;k&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=S.length;I<B;I++){const W=S[I],O=W.shadow;if(O===void 0){Qe("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ee=O.getFrameExtents();s.multiply(ee),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,O.mapSize.y=r.y));const G=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Rs){if(W.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(s.x,s.y,{format:Gi,type:$n,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new ks(s.x,s.y,Dn),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=ai,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt}else W.isPointLight?(O.map=new Hc(s.x),O.map.depthTexture=new wd(s.x,Zn)):(O.map=new Nn(s.x,s.y),O.map.depthTexture=new ks(s.x,s.y,Zn)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=ai,this.type===Ls?(O.map.depthTexture.compareFunction=G?Da:La,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const Q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();W.isPointLight!==!0&&O.updateMatrices(W,_);for(let j=0;j<Q;j++){const ge=O.getCamera(j);if(W.isPointLight){const fe=O.camera,Se=O.matrix,De=W.distance||fe.far;De!==fe.far&&(fe.far=De,fe.updateProjectionMatrix()),sr.setFromMatrixPosition(W.matrixWorld),fe.position.copy(sr),Dl.copy(fe.position),Dl.add(Ix[j]),fe.up.copy(Nx[j]),fe.lookAt(Dl),fe.updateMatrixWorld(),Se.makeTranslation(-sr.x,-sr.y,-sr.z),Ah.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ah,fe.coordinateSystem,fe.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,j),n.clear();else{j===0&&(n.setRenderTarget(O.map),n.clear());const fe=O.getViewport(j);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),U.viewport(o)}i=O.getFrustum(j),y(A,_,ge,W,this.type)}O.isPointLightShadow!==!0&&this.type===Rs&&M(O,_),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,D)};function M(S,A){const _=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Nn(s.x,s.y,{format:Gi,type:$n}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,_,h,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,_,f,x,null)}function w(S,A,_,E){let R=null;const D=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)R=D;else if(R=_.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=R.uuid,k=A.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let B=I[k];B===void 0&&(B=R.clone(),I[k]=B,A.addEventListener("dispose",b)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Rs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:p[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=n.properties.get(R);U.light=_}return R}function y(S,A,_,E,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Rs)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const k=e.update(S),I=S.material;if(Array.isArray(I)){const B=k.groups;for(let W=0,O=B.length;W<O;W++){const ee=B[W],G=I[ee.materialIndex];if(G&&G.visible){const Q=w(S,G,E,R);S.onBeforeShadow(n,S,A,_,k,Q,ee),n.renderBufferDirect(_,null,k,Q,S,ee),S.onAfterShadow(n,S,A,_,k,Q,ee)}}}else if(I.visible){const B=w(S,I,E,R);S.onBeforeShadow(n,S,A,_,k,B,null),n.renderBufferDirect(_,null,k,B,S,null),S.onAfterShadow(n,S,A,_,k,B,null)}}const U=S.children;for(let k=0,I=U.length;k<I;k++)y(U[k],A,_,E,R)}function b(S){S.target.removeEventListener("dispose",b);for(const _ in c){const E=c[_],R=S.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Fx(n,e){function t(){let Y=!1;const Ce=new Lt;let me=null;const Pe=new Lt(0,0,0,0);return{setMask:function(Be){me!==Be&&!Y&&(n.colorMask(Be,Be,Be,Be),me=Be)},setLocked:function(Be){Y=Be},setClear:function(Be,xe,$e,We,Et){Et===!0&&(Be*=We,xe*=We,$e*=We),Ce.set(Be,xe,$e,We),Pe.equals(Ce)===!1&&(n.clearColor(Be,xe,$e,We),Pe.copy(Ce))},reset:function(){Y=!1,me=null,Pe.set(-1,0,0,0)}}}function i(){let Y=!1,Ce=!1,me=null,Pe=null,Be=null;return{setReversed:function(xe){if(Ce!==xe){const $e=e.get("EXT_clip_control");xe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ce=xe;const We=Be;Be=null,this.setClear(We)}},getReversed:function(){return Ce},setTest:function(xe){xe?K(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(xe){me!==xe&&!Y&&(n.depthMask(xe),me=xe)},setFunc:function(xe){if(Ce&&(xe=Uf[xe]),Pe!==xe){switch(xe){case Co:n.depthFunc(n.NEVER);break;case Po:n.depthFunc(n.ALWAYS);break;case Lo:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Do:n.depthFunc(n.EQUAL);break;case Io:n.depthFunc(n.GEQUAL);break;case No:n.depthFunc(n.GREATER);break;case Uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=xe}},setLocked:function(xe){Y=xe},setClear:function(xe){Be!==xe&&(Be=xe,Ce&&(xe=1-xe),n.clearDepth(xe))},reset:function(){Y=!1,me=null,Pe=null,Be=null,Ce=!1}}}function s(){let Y=!1,Ce=null,me=null,Pe=null,Be=null,xe=null,$e=null,We=null,Et=null;return{setTest:function(mt){Y||(mt?K(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(mt){Ce!==mt&&!Y&&(n.stencilMask(mt),Ce=mt)},setFunc:function(mt,Bn,Qn){(me!==mt||Pe!==Bn||Be!==Qn)&&(n.stencilFunc(mt,Bn,Qn),me=mt,Pe=Bn,Be=Qn)},setOp:function(mt,Bn,Qn){(xe!==mt||$e!==Bn||We!==Qn)&&(n.stencilOp(mt,Bn,Qn),xe=mt,$e=Bn,We=Qn)},setLocked:function(mt){Y=mt},setClear:function(mt){Et!==mt&&(n.clearStencil(mt),Et=mt)},reset:function(){Y=!1,Ce=null,me=null,Pe=null,Be=null,xe=null,$e=null,We=null,Et=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},h={},f=new WeakMap,g=[],x=null,m=!1,d=null,M=null,w=null,y=null,b=null,S=null,A=null,_=new ot(0,0,0),E=0,R=!1,D=null,U=null,k=null,I=null,B=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,ee=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=ee>=2);let Q=null,j={};const ge=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Se=new Lt().fromArray(ge),De=new Lt().fromArray(fe);function te(Y,Ce,me,Pe){const Be=new Uint8Array(4),xe=n.createTexture();n.bindTexture(Y,xe),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<me;$e++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Ce+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return xe}const V={};V[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Fs),$(!1),ce(kl),K(n.CULL_FACE),re(oi);function K(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function de(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function oe(Y,Ce){return h[Y]!==Ce?(n.bindFramebuffer(Y,Ce),h[Y]=Ce,Y===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),Y===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function F(Y,Ce){let me=g,Pe=!1;if(Y){me=f.get(Ce),me===void 0&&(me=[],f.set(Ce,me));const Be=Y.textures;if(me.length!==Be.length||me[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,$e=Be.length;xe<$e;xe++)me[xe]=n.COLOR_ATTACHMENT0+xe;me.length=Be.length,Pe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(me)}function P(Y){return x!==Y?(n.useProgram(Y),x=Y,!0):!1}const H={[ji]:n.FUNC_ADD,[Vh]:n.FUNC_SUBTRACT,[Hh]:n.FUNC_REVERSE_SUBTRACT};H[Wh]=n.MIN,H[Xh]=n.MAX;const q={[qh]:n.ZERO,[Yh]:n.ONE,[Zh]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[ed]:n.SRC_ALPHA_SATURATE,[Qh]:n.DST_COLOR,[Jh]:n.DST_ALPHA,[$h]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[jh]:n.ONE_MINUS_DST_COLOR,[Kh]:n.ONE_MINUS_DST_ALPHA,[td]:n.CONSTANT_COLOR,[nd]:n.ONE_MINUS_CONSTANT_COLOR,[id]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function re(Y,Ce,me,Pe,Be,xe,$e,We,Et,mt){if(Y===oi){m===!0&&(de(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),Y!==Gh){if(Y!==d||mt!==R){if((M!==ji||b!==ji)&&(n.blendEquation(n.FUNC_ADD),M=ji,b=ji),mt)switch(Y){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vl:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",Y);break}w=null,y=null,S=null,A=null,_.set(0,0,0),E=0,d=Y,R=mt}return}Be=Be||Ce,xe=xe||me,$e=$e||Pe,(Ce!==M||Be!==b)&&(n.blendEquationSeparate(H[Ce],H[Be]),M=Ce,b=Be),(me!==w||Pe!==y||xe!==S||$e!==A)&&(n.blendFuncSeparate(q[me],q[Pe],q[xe],q[$e]),w=me,y=Pe,S=xe,A=$e),(We.equals(_)===!1||Et!==E)&&(n.blendColor(We.r,We.g,We.b,Et),_.copy(We),E=Et),d=Y,R=!1}function z(Y,Ce){Y.side===Rn?de(n.CULL_FACE):K(n.CULL_FACE);let me=Y.side===hn;Ce&&(me=!me),$(me),Y.blending===Ds&&Y.transparent===!1?re(oi):re(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Pe=Y.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ue(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(Y){D!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),D=Y)}function ce(Y){Y!==Bh?(K(n.CULL_FACE),Y!==U&&(Y===kl?n.cullFace(n.BACK):Y===zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),U=Y}function Z(Y){Y!==k&&(O&&n.lineWidth(Y),k=Y)}function ue(Y,Ce,me){Y?(K(n.POLYGON_OFFSET_FILL),(I!==Ce||B!==me)&&(I=Ce,B=me,o.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,me))):de(n.POLYGON_OFFSET_FILL)}function be(Y){Y?K(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function Ee(Y){Y===void 0&&(Y=n.TEXTURE0+W-1),Q!==Y&&(n.activeTexture(Y),Q=Y)}function N(Y,Ce,me){me===void 0&&(Q===null?me=n.TEXTURE0+W-1:me=Q);let Pe=j[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},j[me]=Pe),(Pe.type!==Y||Pe.texture!==Ce)&&(Q!==me&&(n.activeTexture(me),Q=me),n.bindTexture(Y,Ce||V[Y]),Pe.type=Y,Pe.texture=Ce)}function He(){const Y=j[Q];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Fe(){try{n.compressedTexImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function v(){try{n.texSubImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function J(){try{n.texSubImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ae(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ve(){try{n.texStorage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function Te(){try{n.texStorage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function he(){try{n.texImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function _e(){try{n.texImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function Ae(Y){return p[Y]!==void 0?p[Y]:n.getParameter(Y)}function qe(Y,Ce){p[Y]!==Ce&&(n.pixelStorei(Y,Ce),p[Y]=Ce)}function Ie(Y){Se.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Se.copy(Y))}function Re(Y){De.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),De.copy(Y))}function Ye(Y,Ce){let me=c.get(Ce);me===void 0&&(me=new WeakMap,c.set(Ce,me));let Pe=me.get(Y);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ce,Y.name),me.set(Y,Pe))}function Ke(Y,Ce){const Pe=c.get(Ce).get(Y);l.get(Ce)!==Pe&&(n.uniformBlockBinding(Ce,Pe,Y.__bindingPointIndex),l.set(Ce,Pe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},Q=null,j={},h={},f=new WeakMap,g=[],x=null,m=!1,d=null,M=null,w=null,y=null,b=null,S=null,A=null,_=new ot(0,0,0),E=0,R=!1,D=null,U=null,k=null,I=null,B=null,Se.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:de,bindFramebuffer:oe,drawBuffers:F,useProgram:P,setBlending:re,setMaterial:z,setFlipSided:$,setCullFace:ce,setLineWidth:Z,setPolygonOffset:ue,setScissorTest:be,activeTexture:Ee,bindTexture:N,unbindTexture:He,compressedTexImage2D:Fe,compressedTexImage3D:C,texImage2D:he,texImage3D:_e,pixelStorei:qe,getParameter:Ae,updateUBOMapping:Ye,uniformBlockBinding:Ke,texStorage2D:ve,texStorage3D:Te,texSubImage2D:v,texSubImage3D:J,compressedTexSubImage2D:ne,compressedTexSubImage3D:ae,scissor:Ie,viewport:Re,reset:nt}}function Ox(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,p=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return g?new OffscreenCanvas(C,v):pa("canvas")}function m(C,v,J){let ne=1;const ae=Fe(C);if((ae.width>J||ae.height>J)&&(ne=J/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ve=Math.floor(ne*ae.width),Te=Math.floor(ne*ae.height);h===void 0&&(h=x(ve,Te));const he=v?x(ve,Te):h;return he.width=ve,he.height=Te,he.getContext("2d").drawImage(C,0,0,ve,Te),Qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ve+"x"+Te+")."),he}else return"data"in C&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function d(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,v,J,ne,ae,ve=!1){if(C!==null){if(n[C]!==void 0)return n[C];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Te;ne&&(Te=e.get("EXT_texture_norm16"),Te||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=v;if(v===n.RED&&(J===n.FLOAT&&(he=n.R32F),J===n.HALF_FLOAT&&(he=n.R16F),J===n.UNSIGNED_BYTE&&(he=n.R8),J===n.UNSIGNED_SHORT&&Te&&(he=Te.R16_EXT),J===n.SHORT&&Te&&(he=Te.R16_SNORM_EXT)),v===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(he=n.R8UI),J===n.UNSIGNED_SHORT&&(he=n.R16UI),J===n.UNSIGNED_INT&&(he=n.R32UI),J===n.BYTE&&(he=n.R8I),J===n.SHORT&&(he=n.R16I),J===n.INT&&(he=n.R32I)),v===n.RG&&(J===n.FLOAT&&(he=n.RG32F),J===n.HALF_FLOAT&&(he=n.RG16F),J===n.UNSIGNED_BYTE&&(he=n.RG8),J===n.UNSIGNED_SHORT&&Te&&(he=Te.RG16_EXT),J===n.SHORT&&Te&&(he=Te.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(he=n.RG8UI),J===n.UNSIGNED_SHORT&&(he=n.RG16UI),J===n.UNSIGNED_INT&&(he=n.RG32UI),J===n.BYTE&&(he=n.RG8I),J===n.SHORT&&(he=n.RG16I),J===n.INT&&(he=n.RG32I)),v===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(he=n.RGB8UI),J===n.UNSIGNED_SHORT&&(he=n.RGB16UI),J===n.UNSIGNED_INT&&(he=n.RGB32UI),J===n.BYTE&&(he=n.RGB8I),J===n.SHORT&&(he=n.RGB16I),J===n.INT&&(he=n.RGB32I)),v===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),J===n.UNSIGNED_INT&&(he=n.RGBA32UI),J===n.BYTE&&(he=n.RGBA8I),J===n.SHORT&&(he=n.RGBA16I),J===n.INT&&(he=n.RGBA32I)),v===n.RGB&&(J===n.UNSIGNED_SHORT&&Te&&(he=Te.RGB16_EXT),J===n.SHORT&&Te&&(he=Te.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(he=n.R11F_G11F_B10F)),v===n.RGBA){const _e=ve?br:lt.getTransfer(ae);J===n.FLOAT&&(he=n.RGBA32F),J===n.HALF_FLOAT&&(he=n.RGBA16F),J===n.UNSIGNED_BYTE&&(he=_e===_t?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Te&&(he=Te.RGBA16_EXT),J===n.SHORT&&Te&&(he=Te.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function b(C,v){let J;return C?v===null||v===Zn||v===Bs?J=n.DEPTH24_STENCIL8:v===Dn?J=n.DEPTH32F_STENCIL8:v===Os&&(J=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===Bs?J=n.DEPTH_COMPONENT24:v===Dn?J=n.DEPTH_COMPONENT32F:v===Os&&(J=n.DEPTH_COMPONENT16),J}function S(C,v){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==Jt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&p.delete(v)}function _(C){const v=C.target;v.removeEventListener("dispose",_),D(v)}function E(C){const v=i.get(C);if(v.__webglInit===void 0)return;const J=C.source,ne=f.get(J);if(ne){const ae=ne[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(C),Object.keys(ne).length===0&&f.delete(J)}i.remove(C)}function R(C){const v=i.get(C);n.deleteTexture(v.__webglTexture);const J=C.source,ne=f.get(J);delete ne[v.__cacheKey],o.memory.textures--}function D(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let ae=0;ae<v.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(v.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[ne]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const J=C.textures;for(let ne=0,ae=J.length;ne<ae;ne++){const ve=i.get(J[ne]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(J[ne])}i.remove(C)}let U=0;function k(){U=0}function I(){return U}function B(C){U=C}function W(){const C=U;return C>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function O(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function ee(C,v){const J=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&J.__version!==C.version){const ne=C.image;if(ne===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{de(J,C,v);return}}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+v)}function G(C,v){const J=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){de(J,C,v);return}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+v)}function Q(C,v){const J=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){de(J,C,v);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+v)}function j(C,v){const J=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&J.__version!==C.version){oe(J,C,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+v)}const ge={[vr]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},fe={[Zt]:n.NEAREST,[ad]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Se={[hd]:n.NEVER,[gd]:n.ALWAYS,[dd]:n.LESS,[La]:n.LEQUAL,[fd]:n.EQUAL,[Da]:n.GEQUAL,[pd]:n.GREATER,[md]:n.NOTEQUAL};function De(C,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Jt||v.magFilter===Eo||v.magFilter===ar||v.magFilter===Ii||v.minFilter===Jt||v.minFilter===Eo||v.minFilter===ar||v.minFilter===Ii)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ge[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ge[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ge[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,fe[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==ar&&v.minFilter!==Ii||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(C,v){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const ne=v.source;let ae=f.get(ne);ae===void 0&&(ae={},f.set(ne,ae));const ve=O(v);if(ve!==C.__cacheKey){ae[ve]===void 0&&(ae[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ae[ve].usedTimes++;const Te=ae[C.__cacheKey];Te!==void 0&&(ae[C.__cacheKey].usedTimes--,Te.usedTimes===0&&R(v)),C.__cacheKey=ve,C.__webglTexture=ae[ve].texture}return J}function V(C,v,J){return Math.floor(Math.floor(C/J)/v)}function K(C,v,J,ne){const ve=C.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,J,ne,v.data);else{ve.sort((qe,Ie)=>qe.start-Ie.start);let Te=0;for(let qe=1;qe<ve.length;qe++){const Ie=ve[Te],Re=ve[qe],Ye=Ie.start+Ie.count,Ke=V(Re.start,v.width,4),nt=V(Ie.start,v.width,4);Re.start<=Ye+1&&Ke===nt&&V(Re.start+Re.count-1,v.width,4)===Ke?Ie.count=Math.max(Ie.count,Re.start+Re.count-Ie.start):(++Te,ve[Te]=Re)}ve.length=Te+1;const he=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let qe=0,Ie=ve.length;qe<Ie;qe++){const Re=ve[qe],Ye=Math.floor(Re.start/4),Ke=Math.ceil(Re.count/4),nt=Ye%v.width,Y=Math.floor(Ye/v.width),Ce=Ke,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,nt,Y,Ce,me,J,ne,v.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,he),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function de(C,v,J){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const ae=te(C,v),ve=v.source;t.bindTexture(ne,C.__webglTexture,n.TEXTURE0+J);const Te=i.get(ve);if(ve.version!==Te.__version||ae===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const me=lt.getPrimaries(lt.workingColorSpace),Pe=v.colorSpace===fi?null:lt.getPrimaries(v.colorSpace),Be=v.colorSpace===fi||me===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let _e=m(v.image,!1,s.maxTextureSize);_e=He(v,_e);const Ae=r.convert(v.format,v.colorSpace),qe=r.convert(v.type);let Ie=y(v.internalFormat,Ae,qe,v.normalized,v.colorSpace,v.isVideoTexture);De(ne,v);let Re;const Ye=v.mipmaps,Ke=v.isVideoTexture!==!0,nt=Te.__version===void 0||ae===!0,Y=ve.dataReady,Ce=S(v,_e);if(v.isDepthTexture)Ie=b(v.format===Ni,v.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ie,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Ae,qe,null));else if(v.isDataTexture)if(Ye.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Ce,Ie,Ye[0].width,Ye[0].height);for(let me=0,Pe=Ye.length;me<Pe;me++)Re=Ye[me],Ke?Y&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Re.width,Re.height,Ae,qe,Re.data):t.texImage2D(n.TEXTURE_2D,me,Ie,Re.width,Re.height,0,Ae,qe,Re.data);v.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,Ce,Ie,_e.width,_e.height),Y&&K(v,_e,Ae,qe)):t.texImage2D(n.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Ae,qe,_e.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ie,Ye[0].width,Ye[0].height,_e.depth);for(let me=0,Pe=Ye.length;me<Pe;me++)if(Re=Ye[me],v.format!==In)if(Ae!==null)if(Ke){if(Y)if(v.layerUpdates.size>0){const Be=oh(Re.width,Re.height,v.format,v.type);for(const xe of v.layerUpdates){const $e=Re.data.subarray(xe*Be/Re.data.BYTES_PER_ELEMENT,(xe+1)*Be/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,xe,Re.width,Re.height,1,Ae,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,_e.depth,Ae,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ie,Re.width,Re.height,_e.depth,0,Re.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,_e.depth,Ae,qe,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ie,Re.width,Re.height,_e.depth,0,Ae,qe,Re.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Ce,Ie,Ye[0].width,Ye[0].height);for(let me=0,Pe=Ye.length;me<Pe;me++)Re=Ye[me],v.format!==In?Ae!==null?Ke?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ie,Re.width,Re.height,0,Re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Y&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Re.width,Re.height,Ae,qe,Re.data):t.texImage2D(n.TEXTURE_2D,me,Ie,Re.width,Re.height,0,Ae,qe,Re.data)}else if(v.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Ie,_e.width,_e.height,_e.depth),Y)if(v.layerUpdates.size>0){const me=oh(_e.width,_e.height,v.format,v.type);for(const Pe of v.layerUpdates){const Be=_e.data.subarray(Pe*me/_e.data.BYTES_PER_ELEMENT,(Pe+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,_e.width,_e.height,1,Ae,qe,Be)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,qe,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,_e.width,_e.height,_e.depth,0,Ae,qe,_e.data);else if(v.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,Ce,Ie,_e.width,_e.height,_e.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,qe,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,_e.width,_e.height,_e.depth,0,Ae,qe,_e.data);else if(v.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Ce,Ie,_e.width,_e.height);else{let me=_e.width,Pe=_e.height;for(let Be=0;Be<Ce;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ie,me,Pe,0,Ae,qe,null),me>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),_e.parentNode!==me){me.appendChild(_e),p.add(v),me.onpaint=Pe=>{const Be=Pe.changedElements;for(const xe of p)Be.includes(xe.image)&&(xe.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const Be=n.RGBA,xe=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,xe,$e,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(Ke&&nt){const me=Fe(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Ie,me.width,me.height)}for(let me=0,Pe=Ye.length;me<Pe;me++)Re=Ye[me],Ke?Y&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae,qe,Re):t.texImage2D(n.TEXTURE_2D,me,Ie,Ae,qe,Re);v.generateMipmaps=!1}else if(Ke){if(nt){const me=Fe(_e);t.texStorage2D(n.TEXTURE_2D,Ce,Ie,me.width,me.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,qe,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Ae,qe,_e);d(v)&&M(ne),Te.__version=ve.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function oe(C,v,J){if(v.image.length!==6)return;const ne=te(C,v),ae=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+J);const ve=i.get(ae);if(ae.version!==ve.__version||ne===!0){t.activeTexture(n.TEXTURE0+J);const Te=lt.getPrimaries(lt.workingColorSpace),he=v.colorSpace===fi?null:lt.getPrimaries(v.colorSpace),_e=v.colorSpace===fi||Te===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,qe=v.image[0]&&v.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!Ae&&!qe?Ie[xe]=m(v.image[xe],!0,s.maxCubemapSize):Ie[xe]=qe?v.image[xe].image:v.image[xe],Ie[xe]=He(v,Ie[xe]);const Re=Ie[0],Ye=r.convert(v.format,v.colorSpace),Ke=r.convert(v.type),nt=y(v.internalFormat,Ye,Ke,v.normalized,v.colorSpace),Y=v.isVideoTexture!==!0,Ce=ve.__version===void 0||ne===!0,me=ae.dataReady;let Pe=S(v,Re);De(n.TEXTURE_CUBE_MAP,v);let Be;if(Ae){Y&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,nt,Re.width,Re.height);for(let xe=0;xe<6;xe++){Be=Ie[xe].mipmaps;for(let $e=0;$e<Be.length;$e++){const We=Be[$e];v.format!==In?Ye!==null?Y?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,We.width,We.height,Ye,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,nt,We.width,We.height,0,We.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,We.width,We.height,Ye,Ke,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,nt,We.width,We.height,0,Ye,Ke,We.data)}}}else{if(Be=v.mipmaps,Y&&Ce){Be.length>0&&Pe++;const xe=Fe(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,nt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(qe){Y?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,Ye,Ke,Ie[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ie[xe].width,Ie[xe].height,0,Ye,Ke,Ie[xe].data);for(let $e=0;$e<Be.length;$e++){const Et=Be[$e].image[xe].image;Y?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,Et.width,Et.height,Ye,Ke,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,nt,Et.width,Et.height,0,Ye,Ke,Et.data)}}else{Y?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ye,Ke,Ie[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ye,Ke,Ie[xe]);for(let $e=0;$e<Be.length;$e++){const We=Be[$e];Y?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,Ye,Ke,We.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,nt,Ye,Ke,We.image[xe])}}}d(v)&&M(n.TEXTURE_CUBE_MAP),ve.__version=ae.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function F(C,v,J,ne,ae,ve){const Te=r.convert(J.format,J.colorSpace),he=r.convert(J.type),_e=y(J.internalFormat,Te,he,J.normalized,J.colorSpace),Ae=i.get(v),qe=i.get(J);if(qe.__renderTarget=v,!Ae.__hasExternalTextures){const Ie=Math.max(1,v.width>>ve),Re=Math.max(1,v.height>>ve);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ve,_e,Ie,Re,v.depth,0,Te,he,null):t.texImage2D(ae,ve,_e,Ie,Re,0,Te,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,qe.__webglTexture,0,be(v)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,qe.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(C,v,J){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){const ne=v.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ve=b(v.stencilBuffer,ae),Te=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(v),ve,v.width,v.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(v),ve,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ve,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const ne=v.textures;for(let ae=0;ae<ne.length;ae++){const ve=ne[ae],Te=r.convert(ve.format,ve.colorSpace),he=r.convert(ve.type),_e=y(ve.internalFormat,Te,he,ve.normalized,ve.colorSpace);Ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(v),_e,v.width,v.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(v),_e,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,_e,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(C,v,J){const ne=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=i.get(v.depthTexture);if(ae.__renderTarget=v,(!ae.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),De(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ae=r.convert(v.depthTexture.format),qe=r.convert(v.depthTexture.type);let Ie;v.depthTexture.format===ai?Ie=n.DEPTH_COMPONENT24:v.depthTexture.format===Ni&&(Ie=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,v.width,v.height,0,Ae,qe,null)}}else ee(v.depthTexture,0);const ve=ae.__webglTexture,Te=be(v),he=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,_e=v.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ai)Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,he,ve,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,_e,he,ve,0);else if(v.depthTexture.format===Ni)Ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,he,ve,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,_e,he,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(C){const v=i.get(C),J=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const ne=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=ne}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(J)for(let ne=0;ne<6;ne++)H(v.__webglFramebuffer[ne],C,ne);else{const ne=C.texture.mipmaps;ne&&ne.length>0?H(v.__webglFramebuffer[0],C,0):H(v.__webglFramebuffer,C,0)}else if(J){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),P(v.__webglDepthbuffer[ne],C,!1);else{const ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ve)}}else{const ne=C.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),P(v.__webglDepthbuffer,C,!1);else{const ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(C,v,J){const ne=i.get(C);v!==void 0&&F(ne.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&q(C)}function z(C){const v=C.texture,J=i.get(C),ne=i.get(v);C.addEventListener("dispose",_);const ae=C.textures,ve=C.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,o.memory.textures++),ve){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let _e=0;_e<v.mipmaps.length;_e++)J.__webglFramebuffer[he][_e]=n.createFramebuffer()}else J.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)J.__webglFramebuffer[he]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Te)for(let he=0,_e=ae.length;he<_e;he++){const Ae=i.get(ae[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const _e=ae[he];J.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const Ae=r.convert(_e.format,_e.colorSpace),qe=r.convert(_e.type),Ie=y(_e.internalFormat,Ae,qe,_e.normalized,_e.colorSpace,C.isXRRenderTarget===!0),Re=be(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Ie,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,J.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),P(J.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),De(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)F(J.__webglFramebuffer[he][_e],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else F(J.__webglFramebuffer[he],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);d(v)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,_e=ae.length;he<_e;he++){const Ae=ae[he],qe=i.get(Ae);let Ie=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,qe.__webglTexture),De(Ie,Ae),F(J.__webglFramebuffer,C,Ae,n.COLOR_ATTACHMENT0+he,Ie,0),d(Ae)&&M(Ie)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),De(he,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)F(J.__webglFramebuffer[_e],C,v,n.COLOR_ATTACHMENT0,he,_e);else F(J.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,he,0);d(v)&&M(he),t.unbindTexture()}C.depthBuffer&&q(C)}function $(C){const v=C.textures;for(let J=0,ne=v.length;J<ne;J++){const ae=v[J];if(d(ae)){const ve=w(C),Te=i.get(ae).__webglTexture;t.bindTexture(ve,Te),M(ve),t.unbindTexture()}}}const ce=[],Z=[];function ue(C){if(C.samples>0){if(Ee(C)===!1){const v=C.textures,J=C.width,ne=C.height;let ae=n.COLOR_BUFFER_BIT;const ve=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),he=v.length>1;if(he)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const _e=C.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const qe=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,J,ne,0,0,J,ne,ae,n.NEAREST),l===!0&&(ce.length=0,Z.length=0,ce.push(n.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ce.push(ve),Z.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const qe=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function be(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){const v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function He(C,v){const J=C.colorSpace,ne=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||J!==Sr&&J!==fi&&(lt.getTransfer(J)===_t?(ne!==In||ae!==gn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",J)),v}function Fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=z,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kd(n,e){function t(i,s=fi){let r;const o=lt.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Ta)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_c)return n.BYTE;if(i===xc)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===Ea)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===Mc)return n.ALPHA;if(i===Sc)return n.RGB;if(i===In)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Aa)return n.RED;if(i===Ra)return n.RED_INTEGER;if(i===Gi)return n.RG;if(i===Ca)return n.RG_INTEGER;if(i===Pa)return n.RGBA_INTEGER;if(i===hr||i===dr||i===fr||i===pr)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===Bo||i===zo||i===ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Vo||i===Ho||i===Wo||i===Xo||i===yr||i===qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Go||i===Vo)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ho)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wo)return r.COMPRESSED_R11_EAC;if(i===Xo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yr)return r.COMPRESSED_RG11_EAC;if(i===qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===Qo||i===jo||i===ea||i===ta||i===na||i===ia||i===sa||i===ra||i===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yo)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zo)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$o)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jo)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ko)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qo)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jo)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ea)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ta)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===na)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ia)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ra)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===la||i===ca)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ua||i===ha||i===Mr||i===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Dc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new On({vertexShader:Bx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Si{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new kx,d={},M=t.getContextAttributes();let w=null,y=null;const b=[],S=[],A=new ye;let _=null,E=null;const R=new Mn;R.viewport=new Lt;const D=new Mn;D.viewport=new Lt;const U=[R,D],k=new Vd;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=b[V];return K===void 0&&(K=new wo,b[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=b[V];return K===void 0&&(K=new wo,b[V]=K),K.getGripSpace()},this.getHand=function(V){let K=b[V];return K===void 0&&(K=new wo,b[V]=K),K.getHandSpace()};function W(V){const K=S.indexOf(V.inputSource);if(K===-1)return;const de=b[K];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function O(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",ee);for(let V=0;V<b.length;V++){const K=S[V];K!==null&&(S[V]=null,b[V].disconnect(K))}I=null,B=null,m.reset();for(const V in d)delete d[V];if(e.setRenderTarget(w),f=null,h=null,p=null,s=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){const V=E.camera;V.fov=E.fov,V.zoom=E.zoom,V.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",O),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,oe=null,F=null;M.depth&&(F=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Ni:ai,oe=M.stencil?Bs:Zn);const P={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(P),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Nn(h.textureWidth,h.textureHeight,{format:In,type:gn,depthTexture:new ks(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Nn(f.framebufferWidth,f.framebufferHeight,{format:In,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(V){for(let K=0;K<V.removed.length;K++){const de=V.removed[K],oe=S.indexOf(de);oe>=0&&(S[oe]=null,b[oe].disconnect(de))}for(let K=0;K<V.added.length;K++){const de=V.added[K];let oe=S.indexOf(de);if(oe===-1){for(let P=0;P<b.length;P++)if(P>=S.length){S.push(de),oe=P;break}else if(S[P]===null){S[P]=de,oe=P;break}if(oe===-1)break}const F=b[oe];F&&F.connect(de)}}const G=new L,Q=new L;function j(V,K,de){G.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const oe=G.distanceTo(Q),F=K.projectionMatrix.elements,P=de.projectionMatrix.elements,H=F[14]/(F[10]-1),q=F[14]/(F[10]+1),re=(F[9]+1)/F[5],z=(F[9]-1)/F[5],$=(F[8]-1)/F[0],ce=(P[8]+1)/P[0],Z=H*$,ue=H*ce,be=oe/(-$+ce),Ee=be*-$;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ee),V.translateZ(be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),F[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const N=H+be,He=q+be,Fe=Z-Ee,C=ue+(oe-Ee),v=re*q/He*N,J=z*q/He*N;V.projectionMatrix.makePerspective(Fe,C,v,J,N,He),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ge(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let K=V.near,de=V.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(de=m.depthFar)),k.near=D.near=R.near=K,k.far=D.far=R.far=de,(I!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,B=k.far),k.layers.mask=V.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const oe=V.parent,F=k.cameras;ge(k,oe);for(let P=0;P<F.length;P++)ge(F[P],oe);F.length===2?j(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),E===null&&V.isPerspectiveCamera&&(E={camera:V,fov:V.fov,zoom:V.zoom}),fe(V,k,oe)};function fe(V,K,de){de===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Er*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(V){return d[V]};let Se=null;function De(V,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;de.length!==k.cameras.length&&(k.cameras.length=0,oe=!0);for(let q=0;q<de.length;q++){const re=de[q];let z=null;if(f!==null)z=f.getViewport(re);else{const ce=p.getViewSubImage(h,re);z=ce.viewport,q===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let $=U[q];$===void 0&&($=new Mn,$.layers.enable(q),$.viewport=new Lt,U[q]=$),$.matrix.fromArray(re.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(re.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(z.x,z.y,z.width,z.height),q===0&&(k.matrix.copy($.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),oe===!0&&k.cameras.push($)}const F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=i.getBinding();const q=p.getDepthInformation(de[0]);q&&q.isValid&&q.texture&&m.init(q,s.renderState)}if(F&&F.includes("camera-access")&&x){e.state.unbindTexture(),p=i.getBinding();for(let q=0;q<de.length;q++){const re=de[q].camera;if(re){let z=d[re];z||(z=new Dc,d[re]=z);const $=p.getCameraImage(re);z.sourceTexture=$}}}}for(let de=0;de<b.length;de++){const oe=S[de],F=b[de];oe!==null&&F!==void 0&&F.update(oe,K,c||o)}Se&&Se(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const te=new Xd;te.setAnimationLoop(De),this.setAnimationLoop=function(V){Se=V},this.dispose=function(){}}}const Vx=new dt,Qd=new et;Qd.set(-1,0,0,0,1,0,0,0,1);function Hx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ud(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,w,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===hn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===hn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qd),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const S=b.program;i.uniformBlockBinding(y,S)}function c(y,b){let S=s[y.id];S===void 0&&(m(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",M));const A=b.program;i.updateUBOMapping(y,A);const _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){const b=p();y.__bindingPointIndex=b;const S=n.createBuffer(),A=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=s[y.id],S=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,E=S.length;_<E;_++){const R=S[_];if(Array.isArray(R))for(let D=0,U=R.length;D<U;D++)f(R[D],_,D,A);else f(R,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,b,S,A){if(x(y,b,S,A)===!0){const _=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let D=0;D<E.length;D++){const U=E[D],k=d(U);g(U,y.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function x(y,b,S,A){const _=y.value,E=b+"_"+S;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{const R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){const b=y.uniforms;let S=0;const A=16;for(let E=0,R=b.length;E<R;E++){const D=Array.isArray(b[E])?b[E]:[b[E]];for(let U=0,k=D.length;U<k;U++){const I=D[U],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,O=B.length;W<O;W++){const ee=B[W],G=d(ee),Q=S%A,j=Q%G.boundary,ge=Q+j;S+=j,ge!==0&&A-ge<G.storage&&(S+=A-ge),I.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=G.storage}}}const _=S%A;return _>0&&(S+=A-_),y.__size=S,y.__cache={},this}function d(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){const b=y.target;b.removeEventListener("dispose",M);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function qx(){return ti===null&&(ti=new Ac(Xx,16,16,Gi,$n),ti.name="DFG_LUT",ti.minFilter=Jt,ti.magFilter=Jt,ti.wrapS=ri,ti.wrapT=ri,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class jd{constructor(e={}){const{canvas:t=xd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=f,m=new Set([Pa,Ca,Ra]),d=new Set([gn,Zn,Os,Bs,Ta,wa]),M=new Uint32Array(4),w=new Int32Array(4),y=new L;let b=null,S=null;const A=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,U=null,k=null,I=null,B=null;this._outputColorSpace=sn;let W=0,O=0,ee=null,G=-1,Q=null;const j=new Lt,ge=new Lt;let fe=null;const Se=new ot(0);let De=0,te=t.width,V=t.height,K=1,de=null,oe=null;const F=new Lt(0,0,te,V),P=new Lt(0,0,te,V);let H=!1;const q=new Fa;let re=!1,z=!1;const $=new dt,ce=new L,Z=new Lt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ee(){return ee===null?K:1}let N=i;function He(T,X){return t.getContext(T,X)}let Fe,C,v,J,ne,ae,ve,Te,he,_e,Ae,qe,Ie,Re,Ye,Ke,nt,Y,Ce,me,Pe,Be,xe;try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),N===null){const X="webgl2";if(N=He(X,T),N===null)throw He(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(T){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),ct("WebGLRenderer: "+T.message),T}function $e(){Fe=new Yg(N),Fe.init(),Pe=new Kd(N,Fe),C=new Og(N,Fe,e,Pe),v=new Fx(N,Fe),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),k=N.createFramebuffer(),I=N.createFramebuffer(),B=N.createFramebuffer(),J=new Jg(N),ne=new Sx,ae=new Ox(N,Fe,v,ne,C,Pe,J),ve=new qg(R),Te=new Qp(N),Be=new Ug(N,Te),he=new Zg(N,Te,J,Be),_e=new Qg(N,he,Te,Be,J),Y=new Kg(N,C,ae),Ye=new Bg(ne),Ae=new Mx(R,ve,Fe,C,Be,Ye),qe=new Hx(R,ne),Ie=new Ex,Re=new Px(Fe),nt=new Ng(R,ve,v,_e,g,l),Ke=new Ux(R,_e,C),xe=new Wx(N,J,C,v),Ce=new Fg(N,Fe,J),me=new $g(N,Fe,J),J.programs=Ae.programs,R.capabilities=C,R.extensions=Fe,R.properties=ne,R.renderLists=Ie,R.shadowMap=Ke,R.state=v,R.info=J}x!==gn&&(E=new e_(x,t.width,t.height,a,s,r));const We=new Gx(R,N);this.xr=We,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(te,V,!1))},this.getSize=function(T){return T.set(te,V)},this.setSize=function(T,X,le=!0){if(We.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,V=X,t.width=Math.floor(T*K),t.height=Math.floor(X*K),le===!0&&(t.style.width=T+"px",t.style.height=X+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(te*K,V*K).floor()},this.setDrawingBufferSize=function(T,X,le){te=T,V=X,K=le,t.width=Math.floor(T*le),t.height=Math.floor(X*le),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(x===gn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,X,le,ie){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,X,le,ie),v.viewport(j.copy(F).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(P)},this.setScissor=function(T,X,le,ie){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,X,le,ie),v.scissor(ge.copy(P).multiplyScalar(K).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(T){v.setScissorTest(H=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,le=!0){let ie=0;if(T){let se=!1;if(ee!==null){const Oe=ee.texture.format;se=m.has(Oe)}if(se){const Oe=ee.texture.type,ke=d.has(Oe),Ne=nt.getClearColor(),Ge=nt.getClearAlpha(),Xe=Ne.r,st=Ne.g,at=Ne.b;ke?(M[0]=Xe,M[1]=st,M[2]=at,M[3]=Ge,N.clearBufferuiv(N.COLOR,0,M)):(w[0]=Xe,w[1]=st,w[2]=at,w[3]=Ge,N.clearBufferiv(N.COLOR,0,w))}else ie|=N.COLOR_BUFFER_BIT}X&&(ie|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&N.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),nt.dispose(),Ie.dispose(),Re.dispose(),ne.dispose(),ve.dispose(),_e.dispose(),Be.dispose(),xe.dispose(),Ae.dispose(),We.dispose(),We.removeEventListener("sessionstart",hu),We.removeEventListener("sessionend",du),qi.stop()};function Et(T){T.preventDefault(),Xl("WebGLRenderer: Context Lost."),D=!0}function mt(){Xl("WebGLRenderer: Context Restored."),D=!1;const T=J.autoReset,X=Ke.enabled,le=Ke.autoUpdate,ie=Ke.needsUpdate,se=Ke.type;$e(),J.autoReset=T,Ke.enabled=X,Ke.autoUpdate=le,Ke.needsUpdate=ie,Ke.type=se}function Bn(T){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qn(T){const X=T.target;X.removeEventListener("dispose",Qn),bf(X)}function bf(T){Ef(T),ne.remove(T)}function Ef(T){const X=ne.get(T).programs;X!==void 0&&(X.forEach(function(le){Ae.releaseProgram(le)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,le,ie,se,Oe){X===null&&(X=ue);const ke=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ne=Af(T,X,le,ie,se);v.setMaterial(ie,ke);let Ge=le.index,Xe=1;if(ie.wireframe===!0){if(Ge=he.getWireframeAttribute(le),Ge===void 0)return;Xe=2}const st=le.drawRange,at=le.attributes.position;let Ve=st.start*Xe,gt=(st.start+st.count)*Xe;Oe!==null&&(Ve=Math.max(Ve,Oe.start*Xe),gt=Math.min(gt,(Oe.start+Oe.count)*Xe)),Ge!==null?(Ve=Math.max(Ve,0),gt=Math.min(gt,Ge.count)):at!=null&&(Ve=Math.max(Ve,0),gt=Math.min(gt,at.count));const Bt=gt-Ve;if(Bt<0||Bt===1/0)return;Be.setup(se,ie,Ne,le,Ge);let Ct,St=Ce;if(Ge!==null&&(Ct=Te.get(Ge),St=me,St.setIndex(Ct)),se.isMesh)ie.wireframe===!0?(v.setLineWidth(ie.wireframeLinewidth*Ee()),St.setMode(N.LINES)):St.setMode(N.TRIANGLES);else if(se.isLine){let en=ie.linewidth;en===void 0&&(en=1),v.setLineWidth(en*Ee()),se.isLineSegments?St.setMode(N.LINES):se.isLineLoop?St.setMode(N.LINE_LOOP):St.setMode(N.LINE_STRIP)}else se.isPoints?St.setMode(N.POINTS):se.isSprite&&St.setMode(N.TRIANGLES);if(se.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))St.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const en=se._multiDrawStarts,ze=se._multiDrawCounts,on=se._multiDrawCount,ut=Ge?Te.get(Ge).bytesPerElement:1,En=ne.get(ie).currentProgram.getUniforms();for(let jn=0;jn<on;jn++)En.setValue(N,"_gl_DrawID",jn),St.render(en[jn]/ut,ze[jn])}else if(se.isInstancedMesh)St.renderInstances(Ve,Bt,se.count);else if(le.isInstancedBufferGeometry){const en=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,ze=Math.min(le.instanceCount,en);St.renderInstances(Ve,Bt,ze)}else St.render(Ve,Bt)};function uu(T,X,le,ie){U!==null&&T.isNodeMaterial&&U.setObject(ie,T),re===!0&&Ye.setState(T,le,!1),T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Wr(T,X,ie),T.side=zi,T.needsUpdate=!0,Wr(T,X,ie),T.side=Rn):Wr(T,X,ie)}this.compile=function(T,X,le=null){le===null&&(le=T),U!==null&&U.renderStart(T,X,le),S=Re.get(le),S.init(X),_.push(S),le.traverseVisible(function(se){se.isLight&&se.layers.test(X.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),T!==le&&T.traverseVisible(function(se){se.isLight&&se.layers.test(X.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),z=this.localClippingEnabled,re=Ye.init(this.clippingPlanes,z),re===!0&&Ye.setGlobalState(this.clippingPlanes,X),U!==null&&Ke.render(S.state.shadowsArray,le,X);const ie=new Set;return T.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Ne=Oe[ke];uu(Ne,le,X,se),ie.add(Ne)}else uu(Oe,le,X,se),ie.add(Oe)}),S=_.pop(),U!==null&&U.renderEnd(),ie},this.compileAsync=function(T,X,le=null){const ie=this.compile(T,X,le);return new Promise(se=>{function Oe(){if(ie.forEach(function(ke){const Ge=ne.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&ie.delete(ke)}),ie.size===0){se(T);return}setTimeout(Oe,10)}Fe.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let tl=null;function Tf(T){tl&&tl(T)}function hu(){qi.stop()}function du(){qi.start()}const qi=new Xd;qi.setAnimationLoop(Tf),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(T){tl=T,We.setAnimationLoop(T),T===null?qi.stop():qi.start()},We.addEventListener("sessionstart",hu),We.addEventListener("sessionend",du),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(T,X);const le=We.enabled===!0&&We.isPresenting===!0,ie=E!==null&&(ee===null||le)&&E.begin(R,ee);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(X),X=We.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,X,ee),S=Re.get(T,_.length),S.init(X),S.state.textureUnits=ae.getTextureUnits(),_.push(S),$.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix($,Wn,X.reversedDepth),z=this.localClippingEnabled,re=Ye.init(this.clippingPlanes,z),b=Ie.get(T,A.length),b.init(),A.push(b),We.enabled===!0&&We.isPresenting===!0){const ke=R.xr.getDepthSensingMesh();ke!==null&&nl(ke,X,-1/0,R.sortObjects)}nl(T,X,0,R.sortObjects),b.finish(),U!==null&&U.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(de,oe),be=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,be&&nt.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ye.beginShadows();const se=S.state.shadowsArray;if(Ke.render(se,T,X),re===!0&&Ye.endShadows(),(ie&&E.hasRenderPass())===!1){const ke=b.opaque,Ne=b.transmissive;if(S.setupLights(),X.isArrayCamera){const Ge=X.cameras;if(Ne.length>0)for(let Xe=0,st=Ge.length;Xe<st;Xe++){const at=Ge[Xe];pu(ke,Ne,T,at)}be&&nt.render(T);for(let Xe=0,st=Ge.length;Xe<st;Xe++){const at=Ge[Xe];fu(b,T,at,at.viewport)}}else Ne.length>0&&pu(ke,Ne,T,X),be&&nt.render(T),fu(b,T,X)}ee!==null&&O===0&&(ae.updateMultisampleRenderTarget(ee),ae.updateRenderTargetMipmap(ee)),ie&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,X),Be.resetDefaultState(),G=-1,Q=null,_.pop(),_.length>0?(S=_[_.length-1],ae.setTextureUnits(S.state.textureUnits),re===!0&&Ye.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function nl(T,X,le,ie){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)le=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(q)){ie&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);const ke=_e.update(T),Ne=T.material;Ne.visible&&b.push(T,ke,Ne,le,Z.z,null,X)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(q))){const ke=_e.update(T),Ne=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Z.copy(T.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Z.copy(ke.boundingSphere.center)),Z.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(Ne)){const Ge=ke.groups;for(let Xe=0,st=Ge.length;Xe<st;Xe++){const at=Ge[Xe],Ve=Ne[at.materialIndex];Ve&&Ve.visible&&b.push(T,ke,Ve,le,Z.z,at,X)}}else Ne.visible&&b.push(T,ke,Ne,le,Z.z,null,X)}}const Oe=T.children;for(let ke=0,Ne=Oe.length;ke<Ne;ke++)nl(Oe[ke],X,le,ie)}function fu(T,X,le,ie){const{opaque:se,transmissive:Oe,transparent:ke}=T;S.setupLightsView(le),re===!0&&Ye.setGlobalState(R.clippingPlanes,le),ie&&v.viewport(j.copy(ie)),se.length>0&&Hr(se,X,le),Oe.length>0&&Hr(Oe,X,le),ke.length>0&&Hr(ke,X,le),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function pu(T,X,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){const Ve=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new Nn(1,1,{generateMipmaps:!0,type:Ve?$n:gn,minFilter:Ii,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Oe=S.state.transmissionRenderTarget[ie.id],ke=ie.viewport||j;Oe.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const Ne=R.getRenderTarget(),Ge=R.getActiveCubeFace(),Xe=R.getActiveMipmapLevel();R.setRenderTarget(Oe),R.getClearColor(Se),De=R.getClearAlpha(),De<1&&R.setClearColor(16777215,.5),R.clear(),be&&nt.render(le);const st=R.toneMapping;R.toneMapping=Xn;const at=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),re===!0&&Ye.setGlobalState(R.clippingPlanes,ie),Hr(T,le,ie),ae.updateMultisampleRenderTarget(Oe),ae.updateRenderTargetMipmap(Oe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let gt=0,Bt=X.length;gt<Bt;gt++){const Ct=X[gt],{object:St,geometry:en,material:ze,group:on}=Ct;if(ze.side===Rn&&St.layers.test(ie.layers)){const ut=ze.side;ze.side=hn,ze.needsUpdate=!0,mu(St,le,ie,en,ze,on),ze.side=ut,ze.needsUpdate=!0,Ve=!0}}Ve===!0&&(ae.updateMultisampleRenderTarget(Oe),ae.updateRenderTargetMipmap(Oe))}R.setRenderTarget(Ne,Ge,Xe),R.setClearColor(Se,De),at!==void 0&&(ie.viewport=at),R.toneMapping=st}function Hr(T,X,le){const ie=X.isScene===!0?X.overrideMaterial:null;for(let se=0,Oe=T.length;se<Oe;se++){const ke=T[se],{object:Ne,geometry:Ge,group:Xe}=ke;let st=ke.material;st.allowOverride===!0&&ie!==null&&(st=ie),Ne.layers.test(le.layers)&&mu(Ne,X,le,Ge,st,Xe)}}function mu(T,X,le,ie,se,Oe){U!==null&&se.isNodeMaterial&&U.setObject(T,se),T.onBeforeRender(R,X,le,ie,se,Oe),T.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),se.onBeforeRender(R,X,le,ie,T,Oe),se.transparent===!0&&se.side===Rn&&se.forceSinglePass===!1?(se.side=hn,se.needsUpdate=!0,R.renderBufferDirect(le,X,ie,se,T,Oe),se.side=zi,se.needsUpdate=!0,R.renderBufferDirect(le,X,ie,se,T,Oe),se.side=Rn):R.renderBufferDirect(le,X,ie,se,T,Oe),T.onAfterRender(R,X,le,ie,se,Oe)}function Wr(T,X,le){X.isScene!==!0&&(X=ue);const ie=ne.get(T),se=S.state.lights,Oe=S.state.shadowsArray,ke=se.state.version,Ne=Ae.getParameters(T,se.state,Oe,X,le,S.state.lightProbeGridArray),Ge=Ae.getProgramCacheKey(Ne);let Xe=ie.programs;ie.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;const st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ie.envMap=ve.get(T.envMap||ie.environment,st),ie.envMapRotation=ie.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Qn),Xe=new Map,ie.programs=Xe);let at=Xe.get(Ge);if(at!==void 0){if(ie.currentProgram===at&&ie.lightsStateVersion===ke)return _u(T,Ne),at}else Ne.uniforms=Ae.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,le,Ne),T.onBeforeCompile(Ne,R),at=Ae.acquireProgram(Ne,Ge),Xe.set(Ge,at),ie.uniforms=Ne.uniforms;const Ve=ie.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=Ye.uniform),_u(T,Ne),ie.needsLights=Cf(T),ie.lightsStateVersion=ke,ie.needsLights&&(Ve.ambientLightColor.value=se.state.ambient,Ve.lightProbe.value=se.state.probe,Ve.sunLights.value=se.state.sun,Ve.sunLightShadows.value=se.state.sunShadow,Ve.directionalLights.value=se.state.directional,Ve.directionalLightShadows.value=se.state.directionalShadow,Ve.spotLights.value=se.state.spot,Ve.spotLightShadows.value=se.state.spotShadow,Ve.rectAreaLights.value=se.state.rectArea,Ve.ltc_1.value=se.state.rectAreaLTC1,Ve.ltc_2.value=se.state.rectAreaLTC2,Ve.pointLights.value=se.state.point,Ve.pointLightShadows.value=se.state.pointShadow,Ve.hemisphereLights.value=se.state.hemi,Ve.sunShadowMatrix.value=se.state.sunShadowMatrix,Ve.sunShadowCascade.value=se.state.sunShadowCascade,Ve.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ve.spotLightMatrix.value=se.state.spotLightMatrix,Ve.spotLightMap.value=se.state.spotLightMap,Ve.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.lightProbeGrid=S.state.lightProbeGridArray.length>0,ie.currentProgram=at,ie.uniformsList=null,at}function gu(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Ao.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function _u(T,X){const le=ne.get(T);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function wf(T,X){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let le=0,ie=T.length;le<ie;le++){const se=T[le];if(se.texture!==null&&se.boundingBox.containsPoint(y))return se}return null}function Af(T,X,le,ie,se){X.isScene!==!0&&(X=ue),ae.resetTextureUnits();const Oe=X.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Ne=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Xe=ve.get(ie.envMap||ke,Ge),st=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,Bt=!!le.morphAttributes.color;let Ct=Xn;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ct=R.toneMapping);const St=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,en=St!==void 0?St.length:0,ze=ne.get(ie),on=S.state.lights;if(re===!0&&(z===!0||T!==Q)){const Tt=T===Q&&ie.id===G;Ye.setState(ie,T,Tt)}let ut=!1;ie.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==on.state.version||ze.outputColorSpace!==Ne||se.isBatchedMesh&&ze.batching===!1||!se.isBatchedMesh&&ze.batching===!0||se.isBatchedMesh&&ze.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&ze.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&ze.instancing===!1||!se.isInstancedMesh&&ze.instancing===!0||se.isSkinnedMesh&&ze.skinning===!1||!se.isSkinnedMesh&&ze.skinning===!0||se.isInstancedMesh&&ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ze.instancingMorph===!1&&se.morphTexture!==null||ze.envMap!==Xe||ie.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ye.numPlanes||ze.numIntersection!==Ye.numIntersection)||ze.vertexAlphas!==st||ze.vertexTangents!==at||ze.morphTargets!==Ve||ze.morphNormals!==gt||ze.morphColors!==Bt||ze.toneMapping!==Ct||ze.morphTargetsCount!==en||!!ze.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,ze.__version=ie.version);let En=ze.currentProgram;ut===!0&&(En=Wr(ie,X,se),U&&ie.isNodeMaterial&&U.onUpdateProgram(ie,En,ze));let jn=!1,Ti=!1,hs=!1;const yt=En.getUniforms(),Ut=ze.uniforms;if(v.useProgram(En.program)&&(jn=!0,Ti=!0,hs=!0),ie.id!==G&&(G=ie.id,Ti=!0),ze.needsLights){const Tt=wf(S.state.lightProbeGridArray,se);ze.lightProbeGrid!==Tt&&(ze.lightProbeGrid=Tt,Ti=!0)}if(jn||Q!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(N,"projectionMatrix",T.projectionMatrix),yt.setValue(N,"viewMatrix",T.matrixWorldInverse);const Ai=yt.map.cameraPosition;Ai!==void 0&&Ai.setValue(N,ce.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&yt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,Ti=!0,hs=!0)}if(ze.needsLights&&(on.state.sunShadowMap.length>0&&yt.setValue(N,"sunShadowMap",on.state.sunShadowMap,ae),on.state.directionalShadowMap.length>0&&yt.setValue(N,"directionalShadowMap",on.state.directionalShadowMap,ae),on.state.spotShadowMap.length>0&&yt.setValue(N,"spotShadowMap",on.state.spotShadowMap,ae),on.state.pointShadowMap.length>0&&yt.setValue(N,"pointShadowMap",on.state.pointShadowMap,ae)),se.isSkinnedMesh){yt.setOptional(N,se,"bindMatrix"),yt.setOptional(N,se,"bindMatrixInverse");const Tt=se.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),yt.setValue(N,"boneTexture",Tt.boneTexture,ae))}se.isBatchedMesh&&(yt.setOptional(N,se,"batchingTexture"),yt.setValue(N,"batchingTexture",se._matricesTexture,ae),yt.setOptional(N,se,"batchingIdTexture"),yt.setValue(N,"batchingIdTexture",se._indirectTexture,ae),yt.setOptional(N,se,"batchingColorTexture"),se._colorsTexture!==null&&yt.setValue(N,"batchingColorTexture",se._colorsTexture,ae));const wi=le.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Y.update(se,le,En),(Ti||ze.receiveShadow!==se.receiveShadow)&&(ze.receiveShadow=se.receiveShadow,yt.setValue(N,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(Ut.envMapIntensity.value=X.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=qx()),Ti){if(yt.setValue(N,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&Rf(Ut,hs),Oe&&ie.fog===!0&&qe.refreshFogUniforms(Ut,Oe),qe.refreshMaterialUniforms(Ut,ie,K,V,S.state.transmissionRenderTarget[T.id]),ze.needsLights&&ze.lightProbeGrid){const Tt=ze.lightProbeGrid;Ut.probesSH.value=Tt.texture,Ut.probesMin.value.copy(Tt.boundingBox.min),Ut.probesMax.value.copy(Tt.boundingBox.max),Ut.probesResolution.value.copy(Tt.resolution)}Ao.upload(N,gu(ze),Ut,ae)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ao.upload(N,gu(ze),Ut,ae),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&yt.setValue(N,"center",se.center),yt.setValue(N,"modelViewMatrix",se.modelViewMatrix),yt.setValue(N,"normalMatrix",se.normalMatrix),yt.setValue(N,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){const Tt=ie.uniformsGroups;for(let Ai=0,ds=Tt.length;Ai<ds;Ai++){const vu=Tt[Ai];xe.update(vu,En),xe.bind(vu,En)}}return En}function Rf(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.sunLights.needsUpdate=X,T.sunLightShadows.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(T,X,le){const ie=ne.get(T);ie.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ne.get(T.texture).__webglTexture=X,ne.get(T.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const le=ne.get(T);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,le=0){ee=T,W=X,O=le;let ie=null,se=!1,Oe=!1;if(T){const Ne=ne.get(T);if(Ne.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,Ne.__webglFramebuffer),j.copy(T.viewport),ge.copy(T.scissor),fe=T.scissorTest,v.viewport(j),v.scissor(ge),v.setScissorTest(fe),G=-1;return}else if(Ne.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Ne.__hasExternalTextures)ae.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const st=T.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&ne.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Oe=!0);const Xe=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?ie=Xe[X][le]:ie=Xe[X],se=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?ie=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[le]:ie=Xe,j.copy(T.viewport),ge.copy(T.scissor),fe=T.scissorTest}else j.copy(F).multiplyScalar(K).floor(),ge.copy(P).multiplyScalar(K).floor(),fe=H;if(le!==0&&(ie=k),v.bindFramebuffer(N.FRAMEBUFFER,ie)&&v.drawBuffers(T,ie),v.viewport(j),v.scissor(ge),v.setScissorTest(fe),se){const Ne=ne.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,le)}else if(Oe){const Ne=X;for(let Ge=0;Ge<T.textures.length;Ge++){const Xe=ne.get(T.textures[Ge]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,le,Ne)}}else if(T!==null&&le!==0){const Ne=ne.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,le)}G=-1};function xu(T){const X=ne.get(T);return(X.__readFormat!==T.format||X.__readType!==T.type)&&(X.__readFormat=T.format,X.__readType=T.type,X.__formatReadable=C.textureFormatReadable(T.format),X.__typeReadable=C.textureTypeReadable(T.type)),X}this.readRenderTargetPixels=function(T,X,le,ie,se,Oe,ke,Ne=0){if(!(T&&T.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){v.bindFramebuffer(N.FRAMEBUFFER,Ge);try{const Xe=T.textures[Ne],st=Xe.format,at=Xe.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne);const Ve=xu(Xe);if(Ve.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-ie&&le>=0&&le<=T.height-se&&N.readPixels(X,le,ie,se,Pe.convert(st),Pe.convert(at),Oe)}finally{const Xe=ee!==null?ne.get(ee).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,X,le,ie,se,Oe,ke,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(X>=0&&X<=T.width-ie&&le>=0&&le<=T.height-se){v.bindFramebuffer(N.FRAMEBUFFER,Ge);const Xe=T.textures[Ne],st=Xe.format,at=Xe.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne);const Ve=xu(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,gt),N.bufferData(N.PIXEL_PACK_BUFFER,Oe.byteLength,N.STREAM_READ),N.readPixels(X,le,ie,se,Pe.convert(st),Pe.convert(at),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Bt=ee!==null?ne.get(ee).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Bt);const Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nf(N,Ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,gt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Oe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(gt),N.deleteSync(Ct),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,le=0){const ie=Math.pow(2,-le),se=Math.floor(T.image.width*ie),Oe=Math.floor(T.image.height*ie),ke=X!==null?X.x:0,Ne=X!==null?X.y:0;ae.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,le,0,0,ke,Ne,se,Oe),v.unbindTexture()},this.copyTextureToTexture=function(T,X,le=null,ie=null,se=0,Oe=0){let ke,Ne,Ge,Xe,st,at,Ve,gt,Bt;const Ct=T.isCompressedTexture?T.mipmaps[Oe]:T.image;if(le!==null)ke=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Ge=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,st=le.min.y,at=le.isBox3?le.min.z:0;else{const Ut=Math.pow(2,-se);ke=Math.floor(Ct.width*Ut),Ne=Math.floor(Ct.height*Ut),T.isDataArrayTexture?Ge=Ct.depth:T.isData3DTexture?Ge=Math.floor(Ct.depth*Ut):Ge=1,Xe=0,st=0,at=0}ie!==null?(Ve=ie.x,gt=ie.y,Bt=ie.z):(Ve=0,gt=0,Bt=0);const St=Pe.convert(X.format),en=Pe.convert(X.type);let ze;X.isData3DTexture?(ae.setTexture3D(X,0),ze=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ae.setTexture2DArray(X,0),ze=N.TEXTURE_2D_ARRAY):(ae.setTexture2D(X,0),ze=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const on=v.getParameter(N.UNPACK_ROW_LENGTH),ut=v.getParameter(N.UNPACK_IMAGE_HEIGHT),En=v.getParameter(N.UNPACK_SKIP_PIXELS),jn=v.getParameter(N.UNPACK_SKIP_ROWS),Ti=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Xe),v.pixelStorei(N.UNPACK_SKIP_ROWS,st),v.pixelStorei(N.UNPACK_SKIP_IMAGES,at);const hs=T.isDataArrayTexture||T.isData3DTexture,yt=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Ut=ne.get(T),wi=ne.get(X),Tt=ne.get(Ut.__renderTarget),Ai=ne.get(wi.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ds=0;ds<Ge;ds++)hs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(T).__webglTexture,se,at+ds),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,Oe,Bt+ds)),N.blitFramebuffer(Xe,st,ke,Ne,Ve,gt,ke,Ne,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(se!==0||T.isRenderTargetTexture||ne.has(T)){const Ut=ne.get(T),wi=ne.get(X);v.bindFramebuffer(N.READ_FRAMEBUFFER,I),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let Tt=0;Tt<Ge;Tt++)hs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,se,at+Tt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ut.__webglTexture,se),yt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wi.__webglTexture,Oe,Bt+Tt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wi.__webglTexture,Oe),se!==0?N.blitFramebuffer(Xe,st,ke,Ne,Ve,gt,ke,Ne,N.COLOR_BUFFER_BIT,N.NEAREST):yt?N.copyTexSubImage3D(ze,Oe,Ve,gt,Bt+Tt,Xe,st,ke,Ne):N.copyTexSubImage2D(ze,Oe,Ve,gt,Xe,st,ke,Ne);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(ze,Oe,Ve,gt,Bt,ke,Ne,Ge,St,en,Ct.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(ze,Oe,Ve,gt,Bt,ke,Ne,Ge,St,Ct.data):N.texSubImage3D(ze,Oe,Ve,gt,Bt,ke,Ne,Ge,St,en,Ct):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Oe,Ve,gt,ke,Ne,St,en,Ct.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Oe,Ve,gt,Ct.width,Ct.height,St,Ct.data):N.texSubImage2D(N.TEXTURE_2D,Oe,Ve,gt,ke,Ne,St,en,Ct);v.pixelStorei(N.UNPACK_ROW_LENGTH,on),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(N.UNPACK_SKIP_PIXELS,En),v.pixelStorei(N.UNPACK_SKIP_ROWS,jn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ti),Oe===0&&X.generateMipmaps&&N.generateMipmap(ze),v.unbindTexture()},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){W=0,O=0,ee=null,v.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Ei=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ba,AddEquation:ji,AddOperation:od,AdditiveBlending:Gl,AgXToneMapping:pc,AlphaFormat:Mc,AlwaysCompare:gd,AlwaysDepth:Po,AlwaysStencilFunc:ud,ArcCurve:Ad,ArrayCamera:Vd,BackSide:hn,BasicDepthPacking:ld,Box3:Hi,BoxGeometry:bi,BufferAttribute:Un,BufferGeometry:Ot,ByteType:_c,Camera:Gc,CanvasTexture:Lc,CatmullRomCurve3:Nc,CineonToneMapping:dc,CircleGeometry:Oa,ClampToEdgeWrapping:ri,Color:ot,ColorManagement:lt,ConeGeometry:ls,ConstantAlphaFactor:id,ConstantColorFactor:td,Controls:Wd,CubeCamera:Gd,CubeDepthTexture:wd,CubeReflectionMapping:ki,CubeRefractionMapping:ss,CubeTexture:Pc,CubeUVReflectionMapping:Lr,CubicBezierCurve:Uc,CubicBezierCurve3:Rd,CullFaceBack:kl,CullFaceFront:zh,CullFaceNone:Bh,Curve:Kn,CurvePath:Pd,CustomBlending:Gh,CustomToneMapping:fc,CylinderGeometry:Ir,Data3DTexture:Sd,DataArrayTexture:Ec,DataTexture:Ac,DepthFormat:ai,DepthStencilFormat:Ni,DepthTexture:ks,DirectionalLight:Vc,DoubleSide:Rn,DstAlphaFactor:Jh,DstColorFactor:Qh,EllipseCurve:za,EqualCompare:fd,EqualDepth:Do,EquirectangularReflectionMapping:So,EquirectangularRefractionMapping:bo,Euler:Mi,EventDispatcher:Si,ExternalTexture:Dc,ExtrudeGeometry:Xs,Float32BufferAttribute:pt,FloatType:Dn,FogExp2:Ua,FrontSide:zi,Frustum:Fa,GLSL3:Wl,GreaterCompare:pd,GreaterDepth:No,GreaterEqualCompare:Da,GreaterEqualDepth:Io,Group:Ui,HalfFloatType:$n,HemisphereLight:kd,IcosahedronGeometry:Ur,ImageUtils:yd,InstancedBufferAttribute:ql,InstancedMesh:Yl,IntType:Ea,KeepStencilOp:To,Layers:Na,LessCompare:dd,LessDepth:Lo,LessEqualCompare:La,LessEqualDepth:Fs,Light:Ha,LightShadow:kc,Line:_p,LineBasicMaterial:Rc,LineCurve:Fc,LineCurve3:Cd,LineDashedMaterial:Zp,LinearFilter:Jt,LinearMipmapLinearFilter:Ii,LinearMipmapNearestFilter:Eo,LinearSRGBColorSpace:Sr,LinearToneMapping:uc,LinearTransfer:br,MOUSE:gi,Material:Xi,MathUtils:mn,Matrix2:ec,Matrix3:et,Matrix4:dt,MaxEquation:Xh,Mesh:dn,MeshBasicMaterial:Dr,MeshDepthMaterial:Bd,MeshDistanceMaterial:zd,MeshStandardMaterial:Cs,MinEquation:Wh,MirroredRepeatWrapping:Fo,MixOperation:rd,MultiplyBlending:Hl,MultiplyOperation:cc,NearestFilter:Zt,NearestMipmapLinearFilter:ar,NearestMipmapNearestFilter:ad,NeutralToneMapping:mc,NeverCompare:hd,NeverDepth:Co,NoBlending:oi,NoColorSpace:fi,NoToneMapping:Xn,NormalBlending:Ds,NotEqualCompare:md,NotEqualDepth:Uo,Object3D:Ft,ObjectSpaceNormalMap:cd,OneFactor:Yh,OneMinusConstantAlphaFactor:sd,OneMinusConstantColorFactor:nd,OneMinusDstAlphaFactor:Kh,OneMinusDstColorFactor:jh,OneMinusSrcAlphaFactor:lc,OneMinusSrcColorFactor:$h,OrthographicCamera:Fr,PCFShadowMap:Ls,PCFSoftShadowMap:kh,PMREMGenerator:tc,Path:$l,PerspectiveCamera:Mn,Plane:si,PlaneGeometry:cs,PointLight:Wa,Points:Td,PointsMaterial:Cc,PolyhedronGeometry:Ba,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:Bc,Quaternion:yi,R11_EAC_Format:Wo,RED_GREEN_RGTC2_Format:Mr,RED_RGTC1_Format:ua,REVISION:Sa,RG11_EAC_Format:yr,RGBAFormat:In,RGBAIntegerFormat:Pa,RGBA_ASTC_10x10_Format:sa,RGBA_ASTC_10x5_Format:ta,RGBA_ASTC_10x6_Format:na,RGBA_ASTC_10x8_Format:ia,RGBA_ASTC_12x10_Format:ra,RGBA_ASTC_12x12_Format:oa,RGBA_ASTC_4x4_Format:Yo,RGBA_ASTC_5x4_Format:Zo,RGBA_ASTC_5x5_Format:$o,RGBA_ASTC_6x5_Format:Jo,RGBA_ASTC_6x6_Format:Ko,RGBA_ASTC_8x5_Format:Qo,RGBA_ASTC_8x6_Format:jo,RGBA_ASTC_8x8_Format:ea,RGBA_BPTC_Format:aa,RGBA_ETC2_EAC_Format:Ho,RGBA_PVRTC_2BPPV1_Format:ko,RGBA_PVRTC_4BPPV1_Format:zo,RGBA_S3TC_DXT1_Format:dr,RGBA_S3TC_DXT3_Format:fr,RGBA_S3TC_DXT5_Format:pr,RGBFormat:Sc,RGB_BPTC_SIGNED_Format:la,RGB_BPTC_UNSIGNED_Format:ca,RGB_ETC1_Format:Go,RGB_ETC2_Format:Vo,RGB_PVRTC_2BPPV1_Format:Bo,RGB_PVRTC_4BPPV1_Format:Oo,RGB_S3TC_DXT1_Format:hr,RGFormat:Gi,RGIntegerFormat:Ca,RawShaderMaterial:Od,Ray:Ws,Raycaster:Hd,RedFormat:Aa,RedIntegerFormat:Ra,ReinhardToneMapping:hc,RenderTarget:Md,RepeatWrapping:vr,ReverseSubtractEquation:Hh,SIGNED_R11_EAC_Format:Xo,SIGNED_RED_GREEN_RGTC2_Format:da,SIGNED_RED_RGTC1_Format:ha,SIGNED_RG11_EAC_Format:qo,SRGBColorSpace:sn,SRGBTransfer:_t,Scene:Ed,ShaderChunk:it,ShaderLib:Hn,ShaderMaterial:On,Shape:Nr,ShapeUtils:ts,ShortType:xc,Sphere:Wi,SphereGeometry:ka,Spherical:jl,SplineCurve:zc,SrcAlphaFactor:ac,SrcAlphaSaturateFactor:ed,SrcColorFactor:Zh,StaticDrawUsage:_d,SubtractEquation:Vh,SubtractiveBlending:Vl,TOUCH:pi,TangentSpaceNormalMap:fa,Texture:Qt,TextureSource:Ia,TorusGeometry:Ga,Triangle:Cn,TubeGeometry:Va,UVMapping:gc,Uint16BufferAttribute:Tc,Uint32BufferAttribute:wc,UniformsLib:Le,UniformsUtils:Fd,UnsignedByteType:gn,UnsignedInt101111Type:yc,UnsignedInt248Type:Bs,UnsignedInt5999Type:vc,UnsignedIntType:Zn,UnsignedShort4444Type:Ta,UnsignedShort5551Type:wa,UnsignedShortType:Os,VSMShadowMap:Rs,Vector2:ye,Vector3:L,Vector4:Lt,WebGLCoordinateSystem:Wn,WebGLCubeRenderTarget:Hc,WebGLRenderTarget:Nn,WebGLRenderer:jd,WebGLUtils:Kd,WebGPUCoordinateSystem:zs,WebXRController:wo,ZeroFactor:qh,createCanvasElement:xd,error:ct,log:Xl,warn:Qe,warnOnce:ns},Symbol.toStringTag,{value:"Module"})),Rh={type:"change"},Wc={type:"start"},ef={type:"end"},yo=new Ws,Ch=new si,Yx=Math.cos(70*mn.DEG2RAD),Gt=new L,pn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6;class Zx extends Wd{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new yi,this._lastTargetPosition=new L,this._quat=new yi().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jl,this._sphericalDelta=new jl,this._scale=1,this._panOffset=new L,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new L,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jx.bind(this),this._onPointerDown=$x.bind(this),this._onPointerUp=Kx.bind(this),this._onContextMenu=sv.bind(this),this._onMouseWheel=ev.bind(this),this._onKeyDown=tv.bind(this),this._onTouchStart=nv.bind(this),this._onTouchMove=iv.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=jx.bind(this),this._interceptControlDown=rv.bind(this),this._interceptControlUp=ov.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rh),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Gt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yo.origin.copy(this.object.position),yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yo.direction))<Yx?this.object.lookAt(this.target):(Ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),yo.intersectPlane(Ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(Rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $x(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Jx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Kx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ef),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Wc)}function jx(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ev(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Wc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ef))}function tv(n){this.enabled!==!1&&this._handleKeyDown(n)}function nv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Wc)}function iv(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function sv(n){this.enabled!==!1&&n.preventDefault()}function rv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ov(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rr=new L;function wn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;rr.copy(e),rr[i]=0,rr.normalize();const c=.5*o/(o+a),u=1-rr.angleTo(n)/l;return Math.sign(rr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Xc extends bi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new L,c=new L,u=new L(e,t,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=p.length/6,x=new L,m=.5/o;for(let d=0,M=0;d<p.length;d+=3,M+=2)switch(l.fromArray(p,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),p[d+0]=u.x*Math.sign(l.x)+c.x*r,p[d+1]=u.y*Math.sign(l.y)+c.y*r,p[d+2]=u.z*Math.sign(l.z)+c.z*r,h[d+0]=c.x,h[d+1]=c.y,h[d+2]=c.z,Math.floor(d/g)){case 0:x.set(1,0,0),f[M+0]=wn(x,c,"z","y",r,i),f[M+1]=1-wn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[M+0]=1-wn(x,c,"z","y",r,i),f[M+1]=1-wn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[M+0]=1-wn(x,c,"x","z",r,e),f[M+1]=wn(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[M+0]=1-wn(x,c,"x","z",r,e),f[M+1]=1-wn(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[M+0]=1-wn(x,c,"x","y",r,e),f[M+1]=1-wn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[M+0]=wn(x,c,"x","y",r,e),f[M+1]=1-wn(x,c,"y","x",r,t);break}}static fromJSON(e){return new Xc(e.width,e.height,e.depth,e.segments,e.radius)}}function av(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ot;let c=0;for(let u=0;u<n.length;++u){const p=n[u];let h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in p.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in p.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const p=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(p)}for(const u in r){const p=Ph(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<p;++h){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);const g=Ph(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Ph(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Un(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const p=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const x=u.getComponent(h,g);a.setComponent(h+p,g,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function lv({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:l,sphere:c,cyl:u,torus:p,rod:h,sign:f,paperBoat:g,batchStatic:x,persist:m,say:d,refresh:M,chime:w,reduced:y}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],A=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,_),p([-.7,.51,-.83],.31,.035,s.copper,_),u([-.7,.49,-.83],.26,.045,s.dark,_);const E=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],E),p([0,0,0],.36,.015,s.copper,E,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,_),p([.66,.56,-.22],.28,.028,s.copper,_),u([.66,.55,-.22],.24,.03,r("#495441"),_);const R=o([.66,.56,-.22],_);h([0,0,0],[0,.83,0],.026,s.copper,R);for(const[F,P,H]of[[-.17,.23,-.5],[.17,.41,.5]]){const q=c([F,P,0],[.24,.035,.085],s.mint,R);q.rotation.z=H}const D=o([0,.95,0],R);c([0,0,0],.115,s.light,D),p([0,0,0],.28,.021,s.cream,D,[0,0,0]),p([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const U=[];for(let F=0;F<4;F++){const P=F*Math.PI/2,H=o([Math.cos(P)*.3,.13+Math.sin(P)*.12,Math.sin(P)*.3],R);h([0,-.15,0],[0,.2,0],.012,s.copper,H),c([0,.23,0],.065,s.cream,H),x(H,[]),U.push(H)}l([-.46,.2,.32],[.68,.12,.47],s.dark,_);const k=o([-.46,.29,.32],_);l([0,0,0],[.5,.025,.32],s.cream,k);for(const F of[-.23,.23])h([F,.016,-.14],[0,.016,.06],.009,s.copper,k);c([0,.027,.06],[.04,.015,.04],s.rust,k),f("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),x(E,[]),x(D,[]),x(R,[D,...U]),x(k,[]),x(_,[E,R,k]);const I=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);I.castShadow=!1;const B=o([0,0,0],e),W=g(B,[8.3,.14,3.5],1.05),O=o([0,.36,0],W),ee=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],O),G=c([0,.12,0],[.085,.13,.085],s.light,O),Q=l([0,.09,0],[.23,.025,.16],s.cream,O);Q.rotation.z=.2;const j=[ee,G,Q];x(W,[O]);const ge=new n.Vector3(8.3,.14,3.5),fe=new n.Vector3(8.45,.14,3.65),Se=new n.Vector3(9.2,-2.7,6.5);let De=-1,te=i.dockTrips>=2?1:.02;function V(){E.visible=i.dockTrips>=1,R.visible=i.dockTrips>=2,k.visible=i.dockTrips>=3,U.forEach((F,P)=>F.visible=i.dockTrips>=5+P*3),O.visible=i.dockPending,j.forEach((F,P)=>F.visible=P===i.dockTrips%3),W.position.copy(i.dockPending?fe:ge)}V();function K(){if(!(i.boat>0))if(i.dockPending){const F=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(te=.02),m(),V(),d(F.line),w(330),M()}else i.boat=18,De=-1,j.forEach((F,P)=>F.visible=P===i.dockTrips%3),O.visible=!1,d("ну плыви. я тут."),M()}function de(F,P){if(i.boat>0){i.boat=Math.max(0,i.boat-F);const H=18-i.boat,q=H<7?0:H<11?1:2;q!==De&&(De=q,M()),H<2?W.position.lerpVectors(ge,fe,n.MathUtils.smoothstep(H,0,2)):H<7?W.position.lerpVectors(fe,Se,n.MathUtils.smoothstep(H,2,7)):H<11?W.position.copy(Se):H<16?W.position.lerpVectors(Se,fe,n.MathUtils.smoothstep(H,11,16)):W.position.copy(fe),W.visible=H<7||H>=11,O.visible=H>=11,W.rotation.y=H>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),W.visible=!0,V(),d("вернулся. с чем-то."),w(554),M())}W.rotation.z=y?0:Math.sin(P*1.7)*.035,i.boat===0&&(W.visible=!0,W.position.y=(i.dockPending?fe.y:ge.y)+Math.sin(P*1.2)*.02,W.rotation.y=i.dockPending?Math.PI+.2:0),E.position.y=.97+Math.sin(P*.9)*.055,E.rotation.y=P*.15,te=n.MathUtils.damp(te,1,1.1,F),R.scale.setScalar(te),D.rotation.y=y?0:P*.23,I.material.emissiveIntensity=i.dockPending?1.5+Math.sin(P*4)*1.1:1.2}function oe(){if(i.boat>0){const F=18-i.boat;return{disabled:!0,action:F<7?"плывёт…":F<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const F=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:F===2?`${S[F].description} ${A[Math.floor((i.dockTrips-1)/3)%A.length]}`:S[F].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:B,gallery:_,beacon:I,launchOrCollect:K,update:de,card:oe,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:W.position.toArray(),visible:W.visible,cargo:O.visible,stone:E.visible,plant:R.visible,plantScale:te,letter:k.visible,buds:U.filter(F=>F.visible).length})}}async function tf(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function cv({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),l="beznogim-public-notes-v1";let c="all",u=!s.matches,p=!1,h=!1,f=!1,g=!1,x=!1,m=0,d=null,M=0,w=0,y=0,b=!1;try{const Z=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");Z!==null&&(u=Z==="open")}catch{}const S=(Z,ue,be)=>{const Ee=document.createElement(Z);return ue&&(Ee.className=ue),be&&(Ee.textContent=be),Ee},A=S("aside","resident-history");A.id="resident-history",A.setAttribute("aria-label","История мыслей и действий Головы");const _=S("div","history-heading"),E=S("div"),R=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),D=S("h3","","на полях"),U=S("span","history-eyes");U.setAttribute("aria-hidden","true"),D.append(U),E.append(R,D,S("p","history-subtitle","мысли, дела и прочее"));const k=S("button","history-close","−");k.type="button",k.setAttribute("aria-label","Свернуть историю"),k.title="Свернуть историю",_.append(E,k);const I=S("div","history-filters");I.setAttribute("role","group"),I.setAttribute("aria-label","Показывать в истории");const B=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[Z,ue]of B){const be=S("button","",ue);be.type="button",be.dataset.filter=Z,be.setAttribute("aria-pressed",String(c===Z)),be.onclick=()=>{c=Z,P(!1),O.scrollTop=0;for(const Ee of I.children)Ee.setAttribute("aria-pressed",String(Ee.dataset.filter===c))},I.append(be)}const W=S("button","history-new");W.type="button",W.hidden=!0;const O=S("div","history-scroll");O.tabIndex=0,O.setAttribute("aria-label","Записи, от новых к старым");const ee=S("ol","history-list"),G=S("p","history-empty","собираю заметки…");O.append(ee,G);const Q=S("div","history-foot"),j=S("span","history-live","подключаюсь…"),ge=S("span","history-count"),fe=S("button","history-retry","повторить подключение");fe.type="button",fe.hidden=!0,fe.onclick=()=>{z(),window.dispatchEvent(new Event("beznogim:retry"))},Q.append(j,ge,fe),A.append(_,I,W,O,Q);const Se=S("button","history-toggle");Se.type="button",Se.setAttribute("aria-controls",A.id);const De=S("span","","на полях"),te=S("span","history-badge");te.hidden=!0,Se.append(S("span","history-toggle-icon","◌"),De,te),document.body.append(A),document.querySelector(".footer-actions").append(Se);function V(Z,ue=!0){if(u=Z,A.hidden=!u,Se.hidden=u,Se.setAttribute("aria-expanded",String(u)),ue)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(O.scrollTop<30?K():de(),k.focus({preventScroll:!0})):ue&&Se.focus({preventScroll:!0})}A.hidden=!u,Se.hidden=u,Se.setAttribute("aria-expanded",String(u)),Se.onclick=()=>{V(!0),(g||!h)&&z()},k.onclick=()=>V(!1),s.addEventListener("change",()=>{let Z=!s.matches;try{const ue=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ue!==null&&(Z=ue==="open")}catch{}V(Z,!1)}),document.addEventListener("keydown",Z=>{Z.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&V(!1)});function K(){m=0,te.hidden=!0,W.hidden=!0}function de(){te.textContent=String(m),te.hidden=!m,W.textContent=`↑ к новым · ${m}`,W.hidden=!(u&&m)}W.onclick=()=>{O.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),K()},O.addEventListener("scroll",()=>{O.scrollTop<30&&K()},{passive:!0});function oe(Z){return c==="all"||(c==="thoughts"?Z.type==="muse"||Z.type==="say":Z.type!=="muse"&&Z.type!=="say")}function F(Z,ue){const be=Z.type==="muse"||Z.type==="say",Ee=S("li",`history-entry ${be?"history-thought":"history-action"}${ue?" is-new":""}`);Ee.dataset.eventId=String(Z.id),Ee.dataset.type=Z.type;const N=S("div","history-meta"),He=S("time","",r.format(Z.time*1e3));He.dateTime=new Date(Z.time*1e3).toISOString(),He.title=o.format(Z.time*1e3)+" · "+He.textContent+" мск";const Fe={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return N.append(S("span","",Fe[Z.type]||"во дворе"),He),Ee.append(N,S("p","",Z.text)),Ee}function P(Z,ue=new Set){const be=O.scrollTop>30,Ee=O.getBoundingClientRect().top,N=be?[...ee.querySelectorAll("[data-event-id]")].find(ae=>ae.getBoundingClientRect().bottom>Ee):null,He=N==null?void 0:N.dataset.eventId,Fe=N==null?void 0:N.getBoundingClientRect().top,C=O.scrollTop,v=document.createDocumentFragment();let J="";const ne=[...i.values()].sort((ae,ve)=>ve.id-ae.id).filter(oe);for(const ae of ne){const ve=o.format(ae.time*1e3);if(ve!==J){const Te=S("li","history-day",ve);v.append(Te),J=ve}v.append(F(ae,Z&&ue.has(ae.id)&&!be))}if(ee.replaceChildren(v),G.hidden=ne.length>0,G.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ne.length&&(G.textContent="в этом фильтре пока нет записей."),ge.textContent=i.size?x?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",fe.hidden=!(g||!h&&!f),fe.disabled=f,He){const ae=ee.querySelector(`[data-event-id="${He}"]`);O.scrollTop=C+(ae?ae.getBoundingClientRect().top-Fe:0)}else be||(O.scrollTop=0)}function H(Z,ue=!1){if(!Z||!Array.isArray(Z.entries))return!1;const be=Math.max(0,...i.keys()),Ee=new Set;let N=0,He=0;for(const Fe of Z.entries)!Fe||typeof Fe!="object"||!Number.isSafeInteger(Fe.id)||Fe.id<1||!Number.isFinite(Fe.time)||Math.abs(Fe.time)>864e10||!a.has(Fe.type)||typeof Fe.text!="string"||!Fe.text.trim()||(He++,i.has(Fe.id)||(b=!0,i.set(Fe.id,{id:Fe.id,time:Fe.time,type:Fe.type,text:Fe.text.slice(0,280)}),Ee.add(Fe.id),Fe.id>be&&oe(Fe)&&N++));if(Z.entries.length&&!He)return!1;if(x=x||!!Z.has_older||!!Z.has_more||i.size>t,i.size>t){const Fe=[...i.keys()].sort((C,v)=>C-v);for(const C of Fe.slice(0,i.size-t))i.delete(C)}return p&&!ue&&N&&(!u||O.scrollTop>30)&&(m+=N,de()),(Ee.size||!p)&&P(p&&!ue,Ee),!0}function q(){if(!(!i.size||!b)){b=!1,w=Date.now();try{localStorage.setItem(l,JSON.stringify({version:1,saved_at:w,has_older:x,entries:[...i.values()]}))}catch{}}}function re(){try{const Z=localStorage.getItem(l);if(!Z||Z.length>1e6)return;const ue=JSON.parse(Z);if(ue.version!==1||!Number.isFinite(ue.saved_at)||ue.saved_at<=0)return;H(ue,!0),w=ue.saved_at,p=i.size>0,b=!1}catch{}}async function z(){if(!f){f=!0,y=performance.now(),fe.disabled=!0;try{const Z=await tf(n+"/api/history");if(!H(Z,!0))throw Error("invalid-public-history");h=!0,p=!0,g=!1,q(),P(!1)}catch{g=!0,P(!1)}finally{f=!1,fe.disabled=!1,$()}}}function $(){var be;const Z=!d||performance.now()-M>35e3||d.server_time-d.heartbeat>60||d.resident_status==="stopped";A.classList.toggle("history-offline",Z);const ue=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";j.textContent=Z?i.size?"связи нет":"нет связи с живым сервером":d.resident_status==="sleeping"?"голова спит · дневник открыт":d.resident_status==="paused"?"голова отдыхает":"жизнь идёт",Z&&i.size&&(j.textContent+=ue),!Z&&g&&(j.textContent+=" · архив не дошёл"),j.title=((be=d==null?void 0:d.action)==null?void 0:be.label)||""}function ce(Z){var He;const ue=Math.max(0,...i.keys()),be=Array.isArray((He=Z.history)==null?void 0:He.entries)?Z.history.entries:[];d=Z,M=performance.now(),H(Z.history)&&i.size&&(p=!0,q()),$();const Ee=be.filter(Fe=>Fe&&Number.isSafeInteger(Fe.id)).map(Fe=>Fe.id);(ue&&Ee.length&&Math.min(...Ee)>ue&&performance.now()-y>1e3||!h&&performance.now()-y>15e3)&&z()}window.addEventListener("beznogim:state",Z=>ce(Z.detail)),window.__beznogimState&&ce(window.__beznogimState),re(),P(!1),$(),z(),window.addEventListener("online",()=>{(g||!h)&&z()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&z()}),setInterval(()=>{$(),(g||!h)&&z()},15e3)}function uv({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:l}){let c=null,u=0,p=0,h=!1,f=!1,g=!1,x=0,m=null,d=null,M=null,w="",y=!0;const b=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const A=document.createElement("span");A.className="thought-kicker",A.textContent="про себя";const _=document.createElement("p");S.append(A,_),document.body.append(S);const E=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),R=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";cv({api:R,enabled:E});const D=document.querySelector(".territory-nav"),U=document.createElement("div");U.className="resident-strip",U.hidden=!0;const k=document.createElement("span");k.className="resident-status",k.textContent="подключаюсь к голове";const I=document.createElement("div");I.className="resident-vitals",I.hidden=!0,I.setAttribute("aria-label","Самочувствие Головы");const W=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(F=>{const P=document.createElement("div");return P.className="need-meter",P.dataset.need=F.key,P.style.setProperty("--need-color",F.color),P.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${F.icon}</svg><div class="need-detail"><div class="need-heading"><b>${F.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${F.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,I.append(P),{key:F.key,card:P,value:P.querySelector(".need-value"),bar:P.querySelector(".need-track")}}),O=document.createElement("button");O.type="button",O.textContent="к голове",O.onclick=()=>{f=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),Se()};const ee=document.createElement("button");ee.type="button",ee.textContent="поиграть самому",ee.onclick=()=>{f=!f,g=!1,Se()};const G=document.createElement("button");G.type="button",G.textContent="мысли",G.setAttribute("aria-pressed","true"),G.onclick=()=>{y=!y,G.setAttribute("aria-pressed",String(y))},U.append(k,I,O,ee,G),D.append(U);function Q(){return Date.now()/1e3+p}function j(){return c&&Q()-c.heartbeat<60&&c.resident_status!=="stopped"}function ge(){return h&&c&&!f}function fe(){var H,q;const F=(q=(H=c==null?void 0:c.mechanics)==null?void 0:H.vitals)==null?void 0:q.public;if(!F){I.hidden=!0;return}const P=re=>Math.max(0,Math.min(100,Math.round(Number(re)||0)));I.hidden=!1;for(const re of W){const z=P(F[re.key]);re.value.textContent=String(z),re.bar.setAttribute("aria-valuenow",String(z)),re.card.style.setProperty("--need-fill",String(z/100)),re.card.dataset.low=String(z<=20)}}function Se(){const F=f?"ты в песочнице":h?j()?c!=null&&c.action&&c.action.ends>Q()?c.action.label:(c==null?void 0:c.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";F!==w&&(w=F,k.textContent=F),ee.textContent=f?"вернуться к голове":"поиграть самому",O.setAttribute("aria-pressed",String(g))}function De(F){var H,q;if(!F||F.version!==1||!Array.isArray(F.position)||F.position.length!==3||!F.position.every(Number.isFinite)||!F.objects||!Number.isFinite(F.server_time)||!Number.isFinite(F.heartbeat)||c&&(F.server_time<c.server_time||F.server_time===c.server_time&&Number.isFinite(F.revision)&&Number.isFinite(c.revision)&&F.revision<c.revision))return;if(p=F.server_time-Date.now()/1e3,c=F,u=performance.now(),h=!0,U.hidden=!1,m&&((H=F.release)!=null&&H.commit)&&m!==F.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((q=F.release)==null?void 0:q.commit)||m;const P=F.speech;P&&P.time>x&&P.until>Q()&&(x=P.time,f||a(P.text)),window.__beznogimState=F,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:F})),fe(),Se()}function te(){const F=c.action;if((F==null?void 0:F.kind)==="move"){const P=Math.max(0,Math.min(1,(Q()-F.started)/Math.max(.001,F.ends-F.started)));return F.from.map((H,q)=>H+(F.to[q]-H)*P)}return c.position}function V(){if(!ge())return;const F=c.objects;F.engine&&(t.running=!!F.engine.running),F.workshop&&(t.roof=F.workshop.roof_open?1:0),F.radio&&(t.radio=F.radio.station,d!==t.radio&&(d=t.radio,o())),F.garden&&(t.harvest=F.garden.harvest,M!==null&&t.harvest>M&&l(),M=t.harvest);const P=c.action;t.brew=(P==null?void 0:P.effect)==="brew"?Math.max(0,P.ends-Q()):0,t.loop=0,Se()}function K(){if(!ge()){S.hidden=!0;return}const F=te();n.position.set(F[0],F[1]+Math.sin(Q()*1.4)*.1,F[2]),e.set(...F),g&&i.target.lerp(n.position,.08);const P=c.musing;if(y&&j()&&(P!=null&&P.text)&&P.until>Q()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==P.text&&(_.textContent=P.text),b.copy(n.position),b.y+=1.8,b.project(s),b.z>=-1&&b.z<=1&&Math.abs(b.x)<1&&Math.abs(b.y)<1){S.hidden=!1;const H=S.offsetWidth,q=S.offsetHeight,re=Math.max(H/2+12,Math.min(innerWidth-H/2-12,(b.x+1)*innerWidth/2));let z=(1-b.y)*innerHeight/2-18;const $=D.getBoundingClientRect(),ce=re-H/2<$.right&&re+H/2>$.left?$.bottom+12:18,Z=z-q<ce;Z&&(z=Math.max(ce+q,(1-b.y)*innerHeight/2+70+q)),z=Math.min(innerHeight-70,Math.max(q+18,z)),S.classList.toggle("below-head",Z),S.style.transform=`translate3d(${Math.round(re)}px,${Math.round(z)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function de(){ge()&&(f=!0,g=!1,Se())}function oe(){if(!E)return;U.hidden=!1;let F=!1;async function P(){if(!F){F=!0;try{const q=await tf(R+"/api/state");De(q),c&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!c||performance.now()-u>35e3)&&(h=!1),Se()}finally{F=!1}}}try{const q=new EventSource(R+"/api/events");q.addEventListener("state",re=>{try{De(JSON.parse(re.data))}catch{}}),q.onerror=()=>{h=!1,Se()}}catch{h=!1,Se()}P();function H(){(!h||!c||performance.now()-u>3e4)&&P()}window.addEventListener("online",H),window.addEventListener("beznogim:retry",P),document.addEventListener("visibilitychange",()=>{document.hidden||H()}),setInterval(()=>{c&&performance.now()-u>35e3&&(h=!1),Se(),H()},15e3)}return i.addEventListener("start",()=>{g=!1,Se()}),oe(),{sync:V,place:K,localPlay:de,unfollow:()=>{g=!1},watching:ge,inspect:()=>{var F;return{connected:h,sandbox:f,follow:g,alive:!!j(),revision:c==null?void 0:c.revision,release:(F=c==null?void 0:c.release)==null?void 0:F.commit,action:c==null?void 0:c.action,musing:c==null?void 0:c.musing,thoughtVisible:!S.hidden,position:c?te():null}}}}const hv=120,dv=24,fv=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"frontier",name:"свободная земля"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"frontier",name:"свободная земля"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Vn={size:hv,sectorSize:dv,sectors:fv};function pv({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o}){const a=new Ui;a.name="unsettled-territory",n.add(a);const l=Vn.size/2,c=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],u=new Nr;c.forEach(([E,R],D)=>D?u.lineTo(E,-R):u.moveTo(E,-R)),u.closePath();const p=new Xs(u,{depth:1.8,bevelEnabled:!1});p.rotateX(-Math.PI/2),p.translate(0,-3.5,0);const h=new dn(p,new Cs({color:"#233e35",roughness:1}));h.receiveShadow=!0,a.add(h);let f=8409;const g=()=>(f=f*1664525+1013904223>>>0)/4294967296,x=new Yl(new Ur(1,0),new Cs({color:"#8a9980",roughness:1}),150),m=new Yl(new ls(1,1,4),new Cs({color:"#9aa880",roughness:1}),850),d=new Ft;for(const[E,R,D]of[[x,150,!0],[m,850,!1]]){for(let U=0;U<R;U++){let k,I;do k=(g()-.5)*(Vn.size-10),I=(g()-.5)*(Vn.size-10);while(Math.abs(k)<11&&Math.abs(I)<9);const B=D?.15+g()*.48:.12+g()*.42;d.position.set(k,-1.7+B*.25,I),d.rotation.set(0,g()*6.28,D?g()*.25:0),d.scale.set(D?B*1.3:.07,B,D?B:.07),d.updateMatrix(),E.setMatrixAt(U,d.matrix)}E.instanceMatrix.needsUpdate=!0,a.add(E)}const M=new Cs({color:"#c1b692",roughness:1});for(let E=0;E<16;E++){const R=new dn(new bi(1.15,.12,.65),M);R.position.set(-.6,-.06-E*.105,5.8+E*.7),R.receiveShadow=!0,a.add(R)}const w=document.createElement("nav");w.className="territory-nav",w.setAttribute("aria-label","Путешествие по миру"),w.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(w);const y=document.createElement("dialog");y.id="territory-dialog",y.setAttribute("aria-labelledby","territory-title"),y.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На западе корабль застрял в песочнице; дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(y);const b=y.querySelector("#territory-grid");for(const E of Vn.sectors){const R=document.createElement("button");R.type="button",R.dataset.sector=E.id,R.className=E.status==="settled"?"settled":"",R.textContent=E.status==="settled"?`● ${E.id==="0:0"?"двор":E.name}`:`· ${E.id}`,R.setAttribute("aria-label",`${E.name}, ${E.id}`),R.onclick=()=>{y.close(),s(E.x,E.z,E.status==="settled")},b.append(R)}document.querySelector("#territory-map").onclick=()=>y.showModal(),document.querySelector("#world-overview").onclick=r,y.querySelector("#territory-close").onclick=()=>y.close(),y.querySelector("#territory-home").onclick=()=>{y.close(),o()};const S=w.querySelector("#territory-location");let A="";function _(){const E=Math.round(t.target.x/Vn.sectorSize),R=Math.round(t.target.z/Vn.sectorSize),D=`${E}:${R}`;if(D!==A){A=D;const U=Vn.sectors.find(k=>k.id===D);S.textContent=`${(U==null?void 0:U.status)==="settled"?U.name:"свободная земля"} · ${D}`;for(const k of b.children)k.classList.toggle("current",k.dataset.sector===D)}}return{half:l,update:_,inspect:()=>({size:Vn.size,sectorSize:Vn.sectorSize,sectors:Vn.sectors.length,settled:Vn.sectors.filter(E=>E.status==="settled").length,visible:n.visible,sector:A})}}function mv({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:p,sign:h,paperBoat:f,batchStatic:g,changed:x,chime:m}){let d={};try{d=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(d.wins)||0))),trace:d.trace===!0},w=[1,2,-1,1,2,-1];function y(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const b=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,b),a([0,.46,0],[1.22,.08,1.3],s.dark,b);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const Z of[-.62,.62])for(const ue of[-.64,.64])u([Z,.46,ue],[Z,1.45,ue],.024,s.copper,b);for(const Z of[-.62,.62])a([Z,.96,0],[.018,.95,1.28],S,b);a([0,.96,-.64],[1.24,.95,.018],S,b);const A=o([0,1.45,-.64],b);for(const Z of[-.62,.62])u([Z,0,0],[Z,.36,.64],.026,s.copper,A);for(const Z of[-.62,.62])u([Z,.36,.64],[Z,0,1.28],.026,s.copper,A);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,A);const _=a([0,.18,.32],[1.26,.025,.72],S,A);_.rotation.x=-.51;const E=a([0,.18,.96],[1.26,.025,.72],S,A);E.rotation.x=.51;const R=o([0,.52,0],b);c([0,.2,0],.026,.4,s.leaf,R);for(const Z of[-1,1]){const ue=l([Z*.15,.27,0],[.22,.055,.09],s.leaf,R);ue.rotation.z=Z*.35}const D=l([0,.25,.12],[.23,.16,.27],s.copper,R),U=l([.42,.58,.46],[.15,.1,.18],s.copper,b);U.visible=M.wins>0;const k=o([-.76,.7,.69],b);a([0,.28,0],[.13,.66,.06],s.cream,k);const I=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),k);l([0,-.06,.04],.065,s.rust,k),h("ПАРНИК",[0,.3,.716],.93,.22,b,{size:49});const B=p([0,2.05,0],.46,.016,s.mint,b);B.visible=M.trace;const W=[];for(let Z=0;Z<6;Z++)W.push(l([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),b));g(b,[A,R,k,B,U,...W]),g(A,[]),g(R,[D]),g(k,[I]);let O=0,ee=0;function G(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),O=0,x()}function Q(Z){if(M.mode!=="playing")return;const ue={heat:2,wait:0,vent:-2};Z in ue&&(M.temp+=w[M.turn]+ue[Z],M.turn++,M.temp>6?(M.mode="hot",O=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),U.visible=!0,y(),m(660)),x())}function j(){let Z="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(Z=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${w[M.turn]>0?"+":""}${w[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(Z=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(Z=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(Z="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:Z,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const ge=o([0,0,0],t);ge.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ge),a([0,-.42,0],[6.8,.08,5.6],s.dark,ge);for(const Z of[-3.2,3.2])for(const ue of[-2.6,2.6])u([Z,-.4,ue],[Z,4,ue],.055,s.copper,ge);for(const Z of[-3.2,3.2])u([Z,4,-2.6],[Z,5.7,0],.055,s.copper,ge),u([Z,5.7,0],[Z,4,2.6],.055,s.copper,ge);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ge),a([-3.2,1.8,0],[.025,4.4,5.2],S,ge),a([0,1.8,-2.6],[6.4,4.4,.025],S,ge),h("СОН / 01",[0,-.12,2.93],2.2,.38,ge,{size:52});const fe=o([0,1.6,0],ge);l([0,0,0],1.16,r("#5f9c85"),fe);for(let Z=0;Z<10;Z++){let ue=Z*2.4;const be=l([Math.sin(ue)*.95,Math.cos(Z*1.2)*.6,Math.cos(ue)*.95],[.35,.2,.3],s.leaf,fe);be.rotation.y=ue}p([0,0,0],1.32,.028,s.copper,fe,[.4,0,.2]);const Se=o([0,1.6,0],ge),De=[];for(let Z=0;Z<28;Z++){const ue=a([0,0,0],[.53,.11,.32],Z%4?s.cream:s.concrete,Se);De.push(ue)}const te=f(ge,[1.7,-.05,1],1.65),V=l([0,.65,0],.13,s.cream,te),K=o([0,.65,0],te);K.visible=!1;for(let Z=0;Z<8;Z++){let ue=Z/8*Math.PI*2;u([Math.sin(ue)*.27,Math.cos(ue)*.27,0],[Math.sin(ue)*.5,Math.cos(ue)*.5,0],.026,s.light,K)}const de=i.clone(!0);ge.add(de),de.scale.setScalar(.72),de.position.set(-2,1,1.3),de.rotation.z=-.25;const oe=o([-2,-.05,1.3],ge);c([0,0,0],.55,.3,s.cream,oe),p([.58,0,0],.25,.04,s.copper,oe,[0,0,0]);const F=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ge);F.rotation.y=.2;let P=0,H=0,q=!1;g(ge,[fe,Se,te,de]),g(fe,[]);function re(){q=!0,P=0,H=0,ge.visible=!0,e.visible=!1,x()}function z(){q=!1,ge.visible=!1,e.visible=!0,x()}function $(){q&&(P===3?(P=0,H=0):(P++,m(220+P*110),P===3&&(M.trace=!0,B.visible=!0,y())),x())}function ce(Z,ue){ee=n.MathUtils.damp(ee,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,Z),A.rotation.x=ee,R.scale.y=n.MathUtils.damp(R.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,Z),D.visible=M.mode==="won",I.scale.y=.3*Math.max(.05,M.temp/8),I.position.y=-.015+M.temp/8*.15,B.rotation.z=Math.sin(ue*.3)*.15,O=Math.max(0,O-Z),W.forEach((be,Ee)=>{be.visible=O>0;const N=(3-O+Ee*.18)%1.5;be.position.set(Math.sin(Ee*2)*N*.35,1.5+N,Math.cos(Ee*2)*N*.35),be.scale.setScalar(.1*(.4+N))}),q&&(H=n.MathUtils.damp(H,P,2,Z),fe.rotation.y=ue*.08,De.forEach((be,Ee)=>{const N=Ee/28*Math.PI*2+ue*.055*Math.min(1,H),He=Math.min(1,H);be.position.set(Math.sin(N)*(1.8+He*.35),Math.cos(N)*(1.8-He*1.5),Math.cos(N)*He*1.5),be.rotation.set(0,-N*He,Math.PI/2-N*(1-He))}),Se.rotation.y=H*.32,te.position.y=-.05+H*1.12,te.position.x=1.7-H*.32,te.rotation.y=.2+H*.35,V.scale.setScalar(.13*(1+Math.max(0,H-2)*2)),K.visible=H>2.2,K.rotation.z=ue*.22,de.position.y=1+Math.sin(ue*.8)*.06)}return{house:b,start:G,step:Q,card:j,update:ce,enter:re,exit:z,breathe:$,inspect:()=>({...M,weather:[...w],dream:q,dreamStep:P,phase:H,lidAngle:ee,rootVisible:e.visible,dreamVisible:ge.visible,boatY:te.position.y,rays:K.visible})}}function gv({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:f,batchStatic:g,chime:x}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const d=r("#c39860"),M=r("#e0c58b"),w=r("#465c63"),y=r("#80b9be",{metalness:.15,roughness:.35}),b=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),d,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let te=0;te<13;te++){const V=.15+te/12*Math.PI*1.42,K=Math.sin(V)*3.65,de=Math.cos(V)*3.65,oe=l([K,.48,de],[.75,1.08,.19],M,m);oe.rotation.y=V,te%3===0&&h([K,.48,de],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,V,0)}f("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const S=a([1.08,.12,.4],m);l([0,0,0],[2.55,.22,1.55],w,S);for(let te of[-1.15,1.15])for(let V of[-.63,.63])l([te,-.23,V],[.12,.5,.12],s.copper,S);for(let te of[-.79,.79])l([0,.36,te],[2.72,.65,.14],b,S);for(let te of[-1.32,1.32])l([te,.38,0],[.14,.68,1.55],b,S);const A=l([0,.18,0],[2.49,.045,1.49],y,S),_=c([-.84,.38,0],[.34,.14,.54],s.cream,S),E=i.clone(!0);m.add(E),E.scale.setScalar(.54),E.position.set(.3,.83,.45),E.rotation.z=-.35;const R=a([0,0,0],E);for(const te of[-.23,.23])c([te,.2,.611],[.15,.11,.025],s.black,R),l([te,.2,.64],[.2,.018,.012],s.copper,R);const D=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,D),u([0,.29,0],.44,.022,w,D),h([.55,0,0],.24,.055,s.copper,D,[0,0,0]),f("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const U=[];for(let te=0;te<7;te++){const V=a([-1.92+te*.33,.2+te*.29,1.45-te*.29],m);l([0,0,0],[.7,.13,.42],s.cream,V);for(let K of[-.2,.2])l([0,.07,K],[.7,.12,.05],s.copper,V);U.push(V)}const k=Array.from({length:16},()=>c([0,0,0],[.07,.1,.07],y,m)),I=Array.from({length:3},(te,V)=>{const K=h([.65,.2,0],.23+V*.16,.012,s.mint,S);return K.scale.z=.6,K}),B=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,B),B.rotation.z=.55;const W=[];for(let te=0;te<9;te++){const V=te*2.4;W.push(c([Math.sin(V)*3,3.2+te%3*.28,Math.cos(V)*2],.025,s.cream,m))}let O=!1,ee=0,G=0,Q=!1;try{Q=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const j=a([26.6,-.86,.65],t);j.visible=Q,u([0,0,0],.15,.2,s.cream,j),u([0,.104,0],.125,.014,y,j),h([.16,0,0],.07,.02,s.copper,j,[0,0,0]),g(m,[S,E,D,...U,...k,...W,B]),g(S,[A,_,...I]),g(D,[]),g(j,[]),U.forEach(te=>g(te,[]));function ge(){O=!0,ee=0,G=0,m.visible=!0,t.visible=!1,De(0,0)}function fe(){O=!1,m.visible=!1,t.visible=!0}function Se(){if(O&&(ee=ee===3?0:ee+1,x(165+ee*55),ee===3)){Q=!0,j.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function De(te,V){O&&(G=n.MathUtils.damp(G,ee,2.4,te),U.forEach((K,de)=>{const oe=Math.min(1,G/2),F=-1.92+de*.33,P=.2+de*.29,H=1.45-de*.29;K.position.set(n.MathUtils.lerp(F,-1.72+de*.39,oe),n.MathUtils.lerp(P,1.95-de*.22,oe),n.MathUtils.lerp(H,-.32+de*.055,oe)),K.rotation.z=-oe*.21}),A.position.y=.18+G*.09,_.position.y=.38+G*.09,E.position.y=.83+G*.09+Math.sin(V*.6)*.025,E.rotation.z=-.35-G*.13,D.rotation.z=-Math.min(1,G)*.45,k.forEach((K,de)=>{const oe=(V*.16+de/16)%1;K.visible=G>.05,K.position.set(-1.7+oe*3,2.14-oe*1.62,-.32+oe*.25),K.scale.set(.07,.1+Math.sin(oe*Math.PI)*.04,.07)}),I.forEach((K,de)=>{K.visible=G>.4,K.position.y=A.position.y+.034,K.scale.setScalar(1+Math.sin(V*.5+de)*.08),K.scale.z*=.6}),B.rotation.z=.55+G*.21,R.visible=G>1.8)}return{enter:ge,exit:fe,pour:Se,update:De,inspect:()=>({active:O,step:ee,phase:G,trace:Q,roomVisible:m.visible,rootVisible:t.visible,waterY:A.position.y,sleeperY:E.position.y,channel:U.map(te=>te.position.toArray()),droplets:k.filter(te=>te.visible).length})}}function _v({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const l=e([0,0,0],n);l.visible=!1;for(const f of[-.23,.23])t([f,.2,.611],[.15,.11,.025],r.black,l),i([f,.2,.64],[.2,.018,.012],r.copper,l);let c=null,u=0;function p(f){c=f,u=Number(f.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:f})=>p(f)),window.__beznogimState&&p(window.__beznogimState);function h(f){const g=c==null?void 0:c.action;a.visible=!!f&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),l.visible=a.visible}return{update:h,inspect:()=>{var f;return{visible:a.visible,ends:((f=c==null?void 0:c.action)==null?void 0:f.kind)==="sleep"?c.action.ends:null}}}}const xv=["восток","юг","запад","север"],nf=[0,2,3];function Nl(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function vv(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function yv(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==nf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function Mv(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Sv({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:f,batchStatic:g,chime:x,changed:m}){const d=a([0,0,0],e);d.name="dream-04-letter-above-roof",d.visible=!1;const M=r("#355b62"),w=r("#72a49c",{metalness:.25,roughness:.5}),y=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,d),h([0,-.26,0],3.78,.024,s.copper,d);for(let F=0;F<4;F++){const P=F*Math.PI/2,H=Math.cos(P)*3.05,q=Math.sin(P)*3.05;f(["В","Ю","З","С"][F],[H,-.23,q],.38,.28,d).rotation.x=-Math.PI/2}const b=[],S=[],A=[];for(let F=0;F<3;F++){const P=1.05+F*1.4,H=2.05-F*.27,q=a([0,P,0],d);b.push(q);for(let ue=1;ue<4;ue++){const be=ue*Math.PI/2,Ee=Math.cos(be),N=Math.sin(be),He=[[.3,.3,-.3],[.3,.3,.3],[H,.04,H],[H,.04,-H]],Fe=new n.BufferGeometry,C=[];for(const J of[0,1,2,0,2,3]){const[ne,ae,ve]=He[J];C.push(ne*Ee-ve*N,ae,ne*N+ve*Ee)}Fe.setAttribute("position",new n.Float32BufferAttribute(C,3)),Fe.computeVertexNormals();const v=w.clone();v.side=n.DoubleSide,o(Fe,v,null,null,q),p([H*Ee-H*N,.04,H*N+H*Ee],[H*Ee+H*N,.04,H*N-H*Ee],.035,s.copper,q);for(const J of[-1,1])p([H*Ee-H*N*J,.04,H*N+H*Ee*J],[(H+.16)*Ee-(H+.16)*N*J,.2,(H+.16)*N+(H+.16)*Ee*J],.035,s.copper,q)}const re=a([H*.67,.045,0],q);p([-.32,0,0],[.3,0,0],.026,s.mint,re),p([.3,0,0],[.1,0,.13],.026,s.mint,re),p([.3,0,0],[.1,0,-.13],.026,s.mint,re),S.push(re);const z=nf[F]*Math.PI/2,$=Math.cos(z)*H*.63,ce=Math.sin(z)*H*.63,Z=h([$,P+.09,ce],.16,.025,s.light,d);A.push(Z),f(`${F+1}`,[H+.26,P+.14,.2],.36,.29,d,{bg:"#355b62",fg:"#f0e4b8"});for(const ue of[-1,1])p([ue*.3,P-.32,-.3],[ue*.3,P-.03,-.3],.018,s.copper,d)}const _=a([-2.6,.16,1.5],d);l([0,0,0],[1.1,.62,.7],s.cream,_),l([0,.16,.361],[.72,.07,.025],M,_),f("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,d,{size:40});const E=i.clone(!0);d.add(E),E.scale.setScalar(.53),E.position.set(-2.6,1,1.5),E.rotation.z=-.12,f("СОН / 04",[0,-.12,3.34],1.8,.32,d,{size:48}).rotation.x=-Math.PI/2;const R=a([-1.1,.12,1.5],d);l([0,0,0],[.52,.025,.36],y,R);const D=a([-.26,.016,0],R),U=a([.26,.016,0],R);l([.13,0,0],[.26,.022,.36],y,D),l([-.13,0,0],[.26,.022,.36],y,U),p([-.25,.04,-.17],[0,.04,.1],.009,s.copper,R),p([.25,.04,-.17],[0,.04,.1],.009,s.copper,R);const k=c([0,.045,0],.055,s.light,R),I=a([0,5.3,0],d);h([0,0,0],.55,.025,s.copper,I),p([0,-.3,0],[0,.22,0],.018,s.copper,I);const B=Array.from({length:6},(F,P)=>{const H=P*Math.PI/3,q=c([Math.cos(H)*.29,0,Math.sin(H)*.29],[.21,.065,.11],y,I);return q.rotation.y=-H,q});I.visible=!1;const W=[new n.Vector3(-1.1,.12,1.5),...A.map(F=>F.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],O=new n.BufferGeometry().setFromPoints(W),ee=new n.Line(O,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));ee.computeLineDistances(),d.add(ee);let G=Nl(),Q=!1,j=0,ge=!1,fe=[Math.PI/2,Math.PI/2,Math.PI/2];try{ge=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const Se=a([-3.75,1.17,-2.95],t);Se.visible=ge,l([0,0,0],[.23,.012,.16],y,Se),p([-.11,.016,-.07],[0,.016,.04],.005,s.copper,Se),p([.11,.016,-.07],[0,.016,.04],.005,s.copper,Se),g(d,[...b,...A,_,E,R,I,ee]),b.forEach((F,P)=>g(F,[S[P]])),g(R,[D,U,k]),g(D,[]),g(U,[]),g(_,[]),g(I,B),g(Se,[]);function De(){Q=!0,G=Nl(),j=0,fe=G.turns.map(F=>F*Math.PI/2),d.visible=!0,t.visible=!1,de(0,0)}function te(){Q=!1,d.visible=!1,t.visible=!0}function V(F){G=vv(G,F),x(165+F*55+G.turns[F]*22),m()}function K(){G.phase==="delivered"?(G=Nl(),j=0):G=yv(G),x(220),m()}function de(F,P){if(!Q)return;const H=G.phase;G=Mv(G,F),j=n.MathUtils.damp(j,G.phase==="delivered"?1:0,2.4,F),b.forEach((ce,Z)=>{const ue=G.turns[Z]*Math.PI/2,be=Math.atan2(Math.sin(ue-fe[Z]),Math.cos(ue-fe[Z]));fe[Z]+=be*(F===0?1:1-Math.exp(-F*7)),ce.rotation.y=-fe[Z],ce.position.x=j*[-2.15,1.85,0][Z],ce.position.z=j*[.45,-.65,-2.1][Z],ce.rotation.z=j*(Z===0?-.16:.13)});const q=Math.min(4,G.progress),re=Math.min(3,Math.floor(q)),z=Math.min(1,q-re),$=z*z*(3-2*z);if(R.position.lerpVectors(W[re],W[re+1],$),R.rotation.y=P*.16,D.rotation.z=-j*1.1,U.rotation.z=j*1.1,k.position.y=.045+j*.18,I.visible=G.phase==="delivered",I.rotation.y=P*.22,B.forEach((ce,Z)=>{ce.position.y=Math.sin(P*.7+Z)*.035}),ee.visible=G.phase!=="delivered",G.trace&&!ge){ge=!0,Se.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}H!==G.phase&&m()}function oe(){return G.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":G.phase==="caught"?`Поймала крыша ${G.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:G.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:De,exit:te,turn:V,send:K,update:de,text:oe,directions:xv,inspect:()=>({...G,turns:[...G.turns],active:Q,trace:ge,open:j,roomVisible:d.visible,rootVisible:t.visible,roofs:b.map(F=>({position:F.position.toArray(),rotation:F.rotation.toArray().slice(0,3)})),letter:R.position.toArray(),goals:A.map(F=>F.position.toArray()),crown:I.visible})}}function bv({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:f,paperBoat:g,batchStatic:x,chime:m}){const d=a([0,0,0],e);d.name="dream-03-silent-dock",d.visible=!1;const M=r("#526b79"),w=r("#375d69",{metalness:.35,roughness:.27}),y=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,d),u([0,-.23,0],4,.055,w,d),h([0,-.18,0],4.08,.04,s.copper,d),l([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,d);for(let P of[-.1,.55,1.2,1.85])l([-2.85,.07,P],[1.38,.045,.025],M,d);for(let P of[-3.4,-2.3])p([P,-.3,1.9],[P,.48,1.9],.035,s.copper,d);f("СОН / 03",[-2.85,.13,2.4],1.6,.28,d,{size:48}).rotation.x=-Math.PI/2;const b=i.clone(!0);b.position.set(-2.8,1.27,.75),b.scale.setScalar(.65),d.add(b);const S=[];for(const P of[-1,1]){const H=a([P*.12,-.04,.68],b);p([0,0,0],[P*.64,-.2,.05],.06,s.black,H),c([P*.62,-.18,.05],[.19,.095,.07],s.black,H),p([P*.58,-.18,.06],[P*.58,-.7,.06],.015,s.copper,H),c([P*.58,-.76,.06],.075,s.copper,H),x(H,[]),S.push(H)}const A=Array.from({length:3},(P,H)=>h([-1.2+H*1.25,-.17,-.25],.72,.035,H===1?s.cream:s.copper,d)),_=Array.from({length:3},(P,H)=>h([-1.2+H*1.25,-.165,-.25],.72,.013,y,d)),E=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,d),R=g(d,[-1.9,-.13,-.25],.9),D=c([0,.53,0],[.065,.09,.065],s.light,R),U=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,d);U.rotation.z=.65;const k=[];for(let P=0;P<5;P++){const H=-1.6+P*.85;p([H,-.2,-2.9],[H,1.1+P%2*.4,-2.9],.025,M,d),k.push(c([H,1.12+P%2*.4,-2.9],.035,s.light,d))}let I=!1,B=0,W=1,O=[1,1,1],ee=[0,0,0],G=0,Q=0,j=!1;try{j=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ge=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ge.visible=j;const fe=Array.from({length:5},()=>new n.Vector3),Se=new n.CatmullRomCurve3(fe),De=new n.Vector3,te=new n.Vector3;x(d,[b,...A,..._,E,R,U,...k]),x(b,S),x(R,[D]);function V(P){W=n.MathUtils.clamp(Math.round(Number(P)||1),1,3)}function K(){I=!0,B=0,O=[1,1,1],ee=[0,0,0],G=0,Q=0,d.visible=!0,t.visible=!1,F(0,0)}function de(){I=!1,d.visible=!1,t.visible=!0}function oe(){if(I){if(B===3){B=0,O=[1,1,1],ee=[0,0,0],Q=0;return}if(O[B]=W,B++,G=0,m(110+W*55),B===3){j=!0,ge.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function F(P,H){if(!I)return;Q+=Math.min(P,.15),G+=Math.min(P,.15);for(let $=0;$<3;$++){ee[$]=n.MathUtils.damp(ee[$],$<B?1:0,3,P);const ce=-.17+ee[$]*(.95+O[$]*.42),Z=.72+O[$]*.12;A[$].position.y=ce,A[$].rotation.set(Math.PI/2*(1-ee[$]),Math.PI/2*ee[$],0),A[$].scale.setScalar(Z/.72),_[$].scale.setScalar(Z/.72*(1+Math.sin(Q*.9+$)*.045)),fe[$+1].set(A[$].position.x,Math.max(-.1,ce),-.25)}fe[0].set(-2,-.1,-.25),fe[4].set(2.5,-.1,-.25);const q=(1-Math.cos(Q*.55))*.5;Se.getPoint(q,De),Se.getPoint(Math.min(.999,q+.012),te),R.position.copy(De),R.rotation.z=n.MathUtils.clamp(Math.atan2(te.y-De.y,te.x-De.x),-.45,.45),R.rotation.y=0,E.visible=B>0;const re=Math.min(1,G/1.8),z=Math.max(0,B-1);E.position.set(n.MathUtils.lerp(-2.5,-1.2+z*1.25,re),.35+re*(2.1+O[z]*.35),n.MathUtils.lerp(1.4,-.25,re)),E.rotation.y=Q*.4,S.forEach(($,ce)=>$.rotation.z=Math.sin(Q*1.2+ce*Math.PI)*(.06+B*.04)),D.position.y=.53+Math.sin(H)*.02}return{enter:K,exit:de,toss:oe,choose:V,update:F,inspect:()=>({active:I,step:B,force:W,forces:[...O],lift:[...ee],trace:j,roomVisible:d.visible,rootVisible:t.visible,boat:R.position.toArray(),ringY:A.map(P=>P.position.y),ringRotation:A.map(P=>P.rotation.toArray().slice(0,3)),stone:E.position.toArray()})}}function Lh(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(c=>Number(c.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const c=t.batch,u=Math.min(i,Math.max(0,360-c.age));c.age+=u,c.exposure[c.face]+=u,c[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const c=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:c.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:c.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=c.air,t.batch&&t.batch.age<360&&c.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(c.id),p=t.shelf.findIndex(h=>h.id===u);if(p<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(p,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",f={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(f),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:f,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,l={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:l,result:s,seconds:o,label:r}}const Ev={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Tv({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,mesh:u,sign:p,batchStatic:h,changed:f,watching:g,localPlay:x}){var H,q,re;const m=s([24,-1.55,0]);m.name="cheese-cellar";const d=i("#697b70"),M=i("#b4b89b"),w=i("#936c4d"),y=i("#e1b064"),b=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],d,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let z=-4;z<=4;z+=2)r([z,1.5,-3.43],[.16,3,.1],d,m);for(let z of[-4.4,4.4])l([z,0,-3.3],[z,3.6,-3.3],.09,t.copper,m),l([z,3.6,-3.3],[z,3.6,2.5],.09,t.copper,m),l([z,3.6,2.5],[z,0,2.5],.09,t.copper,m);p("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let z of[-3.8,3.8])r([z,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,t.copper,m),c([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,S,m),l([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let z of[2.8,3.5])a([z,.28,1.8],.26,.56,t.cream,m),a([z,.59,1.8],.12,.1,t.copper,m);const A=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let z=0;z<4;z++)r([2.25+z*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const _=s([.5,1.02,.25],m),E=u(new n.CylinderGeometry(1.2,1.2,.62,40),y,[0,0,0],null,_),R=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),b,[0,0,0],null,_),D=c([0,.33,0],.35,.026,t.cream,_),U=s([.5,.65,2.3],m),k=[];for(let z=0;z<6;z++)k.push(o([-1.25+z*.5,0,0],.08,t.mint,U));const I=p("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});I.rotation.x=-Math.PI/2;function B(z){const $=s(z,m),ce=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,$),Z=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),b.clone(),[0,0,0],null,$),ue=s([0,-.14,.09],$);for(let He=0;He<4;He++)r([.05+He*.085,.04+He*.05,.15+He*.03],[.12,.06,.2],t.cream,ue);const be=o([.09,.16,.27],.04,t.mint,ue),Ee=u(new n.IcosahedronGeometry(.21,0),d,[.13,.02,.23],null,$),N=s([0,0,0],$);for(const[He,Fe,C]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([He,Fe,C],[.05,.05,.025],t.dark,N);return{g:$,body:ce,crust:Z,steps:ue,crystal:Ee,holes:N,pearl:be}}const W=Array.from({length:6},(z,$)=>B([-3.15+$*1.26,1.42,-2.6])),O=s([0,0,0],e);for(let z=0;z<24;z++){const $=z/23;r([8.3+$*11.2,-.15-$*1.32,1.4+Math.sin($*Math.PI)*2],[.85,.15,.75],d,O)}for(let z=0;z<5;z++)r([20+z*.7,-1.46,1.4-z*.22],[.75,.13,.7],d,O);p("СЫР →",[10.2,.35,2.4],1.5,.4,O,{size:44}),l([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,O),h(O,[]),h(m,[_,A,U,I,...W.map(z=>z.g)]);for(const z of W)h(z.steps,[z.pearl]),h(z.holes,[]);let ee=null,G=null,Q=0,j=null,ge="",fe=0;try{const z=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");ee=(z==null?void 0:z.state)||z,Q=Number(z==null?void 0:z.clockOffset)||0}catch{}const Se=()=>Date.now()/1e3+Q;function De(z,$,ce={}){const Z=Lh({state:ee,mode:z,tool:$,args:ce,now:Se()});ee=Z.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:ee,clockOffset:Q}))}catch{}return Z}De("migrate");const te=document.createElement("div");te.id="cellar-controls",te.hidden=!0,te.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(te);function V(){return G&&g()?G:Lh({mode:"migrate",state:ee,now:ee.updated}).public}function K(z){j=z;const $=z.batch;if(_.visible=!!$,I.visible=!$,A.rotation.y=z.air==="dry"?-.8:0,$){_.rotation.z=$.face?Math.PI:0;const ce=$.age/360;E.material.color.set($.culture==="moon"?"#e9cf8b":"#c8bc88"),R.material.color.set(z.air==="damp"?"#8b9f78":"#b87a48"),D.scale.setScalar(1+ce*.15)}for(let ce=0;ce<6;ce++)k[ce].visible=!!$&&$.age>=(ce+1)*60;W.forEach((ce,Z)=>{const ue=z.shelf[Z];ce.g.visible=!!ue,ue&&(ce.g.rotation.z=ue.kind==="lopsided"?.22:0,ce.crust.material.color.set(ue.wet>=180?"#8b9f78":"#b87a48"),ce.steps.visible=ue.kind==="moon_stair",ce.crystal.visible=ue.kind==="stone",ce.holes.visible=ue.kind==="holes"||ue.kind==="lopsided")})}function de(z,$){x();const ce=De("action",z,$);return ge="",P(0),f(),ce}for(const z of te.querySelectorAll("[data-culture]"))z.onclick=()=>de("set_batch",{culture:z.dataset.culture});te.querySelector("#cellar-turn").onclick=()=>de("tend",{air:ee.air,turn:!0}),te.querySelector("#cellar-air").onclick=()=>de("tend",{air:ee.air==="damp"?"dry":"damp",turn:!1}),te.querySelector("#cellar-wait").onclick=()=>{x(),Q+=60,De("tick"),ge="",P(0),f()};function oe(){const z=j||V(),$=z.batch,ce=G&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",Z=$?$.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor($.age)}/360 с. Корка: ${Math.floor($.exposure[0])}/${Math.floor($.exposure[1])} с.`:z.shelf.length?`На полке: ${z.shelf.map(ue=>Ev[ue.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:G&&g()?"войти в свою сыроварню":$?$.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(G&&g())&&!!$&&!$.ready,description:ce+" "+Z}}function F(){const z=j||V(),$=z.batch;te.querySelector("#cellar-readout").textContent=`${z.air==="damp"?"сыро":"сухо"} · ${$?$.ready?"готово":`ещё ${Math.ceil($.remaining)} с`:"нет колеса"} · полка ${z.shelf.length}/6`;for(const ce of te.querySelectorAll("[data-culture]"))ce.disabled=!!$;te.querySelector("#cellar-turn").disabled=!$||$.ready,te.querySelector("#cellar-air").textContent=z.air==="damp"?"сделать суше":"вернуть сырость"}function P(z){z-fe>=1&&(fe=z,De("tick"));const $=V(),ce=JSON.stringify($);ce!==ge&&(ge=ce,K($),F(),f())}return window.addEventListener("beznogim:state",({detail:z})=>{var ce,Z;const $=(Z=(ce=z.mechanics)==null?void 0:ce.cellar)==null?void 0:Z.public;$&&(G=$,ge="")}),G=((re=(q=(H=window.__beznogimState)==null?void 0:H.mechanics)==null?void 0:q.cellar)==null?void 0:re.public)||null,K(V()),F(),{house:m,controls:te,update:P,card:oe,run:()=>de(ee.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:G&&g()?"resident":"sandbox",...j,wheelVisible:_.visible,shelfVisible:W.filter(z=>z.g.visible).length,stairsVisible:W.filter(z=>z.g.visible&&z.steps.visible).length,shutter:A.rotation.y})}}function wv({entries:n,elements:e,layer:t,camera:i}){const s=new dt,r=new dt,o=new L,a=Object.entries(n).map(([p,h])=>({element:e[p],anchor:h.point,x:NaN,y:NaN,visible:null}));let l=0,c=0,u=!1;return{update(p,h,f){if(t.hidden===p&&(t.hidden=!p),!p){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||l!==h||c!==f||!s.equals(r);l=h,c=f,u=!0;for(const x of a){if(typeof x.anchor=="function")x.anchor(o);else{if(!g)continue;o.copy(x.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,d=(1-o.y)*f*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&d>=10&&d<=f-55;if(M!==x.visible&&(x.visible=M,x.element.classList.toggle("hidden",!M)),!M)continue;const w=Math.round(m*10)/10,y=Math.round(d*10)/10;(w!==x.x||y!==x.y)&&(x.x=w,x.y=y,x.element.style.transform=`translate3d(${w}px,${y}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Av(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,p=Math.max(12,u?0:a.bottom+12,u?c.bottom+12:0),h=Math.max(64,innerHeight-l.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(p)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const we=n=>document.querySelector(n),$t=()=>innerWidth<700,sf=matchMedia("(prefers-reduced-motion: reduce)").matches;let ur={};try{ur=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Me={loop:0,roof:null,running:!!ur.running,harvest:Math.min(99,Math.max(0,Number(ur.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(ur.dockTrips)||0))),dockPending:ur.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Hs(){return Me.roof===null?Me.running||Me.loop>0:!!Me.roof}function sc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Me.running,harvest:Me.harvest,dockTrips:Me.dockTrips,dockPending:Me.dockPending}))}catch{}}const ft=new jd({antialias:!0,alpha:!1,powerPreference:"high-performance"});ft.setPixelRatio(Math.min(devicePixelRatio,$t()?1.5:2));ft.setSize(innerWidth,innerHeight,!1);ft.shadowMap.enabled=!0;ft.shadowMap.type=Ls;ft.shadowMap.autoUpdate=!1;ft.shadowMap.needsUpdate=!0;ft.outputColorSpace=sn;ft.toneMapping=ba;ft.toneMappingExposure=1.22;we("#world").append(ft.domElement);const bn=new Ed;bn.background=new ot("#182e32");bn.fog=new Ua("#182e32",8e-4);const Ue=new Fr(-10,10,10,-10,.1,600),qc=new L(0,1,0);Ue.position.set(20,20,24);Ue.lookAt(qc);const Je=new Zx(Ue,ft.domElement);Je.target.copy(qc);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=gi.PAN;Je.mouseButtons.RIGHT=gi.PAN;Je.touches.ONE=pi.PAN;Je.touches.TWO=pi.DOLLY_PAN;bn.add(new kd("#d9eedc","#334d53",2.3));const us=new Vc("#ffe2ac",3.3);us.position.set(-7,14,6);us.castShadow=!0;us.shadow.mapSize.set($t()?512:1024,$t()?512:1024);Object.assign(us.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});us.shadow.bias=-4e-4;us.shadow.normalBias=.025;bn.add(us);const rf=new Vc("#8ad5d8",1.3);rf.position.set(5,7,-8);bn.add(rf);const Rt=new Ui;bn.add(Rt);const Ul={};function tt(n,e={}){const t=n+JSON.stringify(e);return Ul[t]||(Ul[t]=new Cs({color:n,roughness:.8,...e}))}const ni={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},pe={concrete:tt(ni.concrete),cream:tt(ni.cream),dark:tt(ni.dark),metal:tt(ni.metal,{metalness:.5,roughness:.4}),copper:tt(ni.copper,{metalness:.6,roughness:.35}),rust:tt(ni.rust),black:tt(ni.black),leaf:tt(ni.leaf),light:tt("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:tt("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Ys={box:new bi(1,1,1),sphere:new ka(1,12,8),ico:new Ur(1,1),cyl:new Ir(1,1,1,16),cone:new ls(1,1,8)};function Nt(n,e,t,i,s=Rt){const r=new dn(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Ze=(n,e,t,i=Rt)=>Nt(Ys.box,t,n,e,i),ht=(n,e,t,i=Rt)=>Nt(Ys.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),wt=(n,e,t,i,s=Rt)=>Nt(Ys.cyl,i,n,[e,t,e],s);function Or(n,e,t,i=Rt,s=.08){return Nt(new Xc(...e,1,s),t,n,null,i)}function Mt(n=[0,0,0],e=Rt){const t=new Ui;return t.position.set(...n),e.add(t),t}function Zs(n,e,t,i=Rt){const s=new Nc(n.map(r=>new L(...r)));return Nt(new Va(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function At(n,e,t,i,s=Rt){const r=new L(...n),o=new L(...e),a=o.clone().sub(r),l=wt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return l.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),l}function Dt(n,e,t,i,s=Rt,r=[Math.PI/2,0,0]){const o=Nt(new Ga(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function fn(n,e,t,i,s=Rt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const l=new Lc(o);l.colorSpace=sn;const c=Nt(new cs(t,i),new Dr({map:l,side:Rn}),e,null,s);return c.castShadow=!1,c}let Fl=179;function vt(){return Fl=Fl*1664525+1013904223>>>0,Fl/4294967296}const xa=document.createElement("canvas");xa.width=xa.height=256;const va=xa.getContext("2d");va.fillStyle="#b4bcaa";va.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)va.fillStyle=`rgba(${vt()>.5?"60,82,64":"235,229,201"},${vt()*.08})`,va.fillRect(vt()*256,vt()*256,1+vt()*3,1+vt()*3);const Rr=new Lc(xa);Rr.wrapS=Rr.wrapT=vr;Rr.repeat.set(5,5);Rr.colorSpace=sn;const Rv=tt("#c2c6b1",{map:Rr,roughness:.97});function Yc(n,e,t,i,s=Rt){const r=new Nr;n.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new Xs(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Nt(o,i,null,null,s)}const Zc=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Yc(Zc,0,.82,pe.concrete);Yc(Zc,.06,.14,Rv);Yc(Zc.map(([n,e])=>[n*.97,e*.97]),-.8,.6,tt("#47665e"));for(let n=0;n<28;n++){const e=-5.4+vt()*10.9,t=vt()>.5?5.15:-5.2,i=Nt(Ys.ico,tt(n%3?"#557469":"#668477"),[e,-1.15-vt()*.5,t],[.25+vt()*.8,.2+vt()*.55,.35+vt()*.3]);i.rotation.y=vt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Ze([e,-.37,5.61],[.48,.19,.025],n%2?pe.copper:pe.dark),n%2===0&&Zs([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,pe.metal)}fn("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,Rt,{size:32});const Pt=Mt([-3.2,.08,-2.5]),cn=Mt([0,0,0],Pt);Ze([0,.08,0],[4.5,.15,3.6],pe.dark,Pt);Ze([0,1.2,-1.68],[4.5,2.4,.18],pe.cream,Pt);Ze([-2.15,1,0],[.18,2,3.6],pe.cream,Pt);for(let n=0;n<5;n++){Ze([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],pe.concrete,Pt),Ze([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],pe.metal,Pt);for(let e=0;e<3;e++)Ze([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],pe.copper,Pt)}Ze([0,2.47,-.2],[4.8,.14,3.7],pe.rust,cn);for(let n=0;n<23;n++){const e=Ze([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],tt("#d09062"),cn);e.rotation.x=-.015}Ze([0,2.35,1.62],[4.8,.14,.18],pe.dark,Pt);At([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,pe.copper,Pt);At([2.3,.12,1.62],[2.3,2.4,1.62],.055,pe.copper,Pt);fn("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Pt,{size:37});Ze([.1,.85,-.84],[3.8,.13,.87],pe.rust,Pt);for(const n of[-1.5,1.65])Ze([n,.44,-.84],[.12,.85,.65],pe.metal,Pt);for(let n=0;n<3;n++)Ze([-1.15+n*.95,.51,-.85],[.82,.47,.75],pe.concrete,Pt),Ze([-1.15+n*.95,.5,-.44],[.18,.04,.03],pe.copper,Pt);for(let n=0;n<6;n++)Ze([-1.6+n*.48,2.07,-1.48],[.28,.16+vt()*.16,.17],tt(["#9fba95","#cb9b70","#667f71"][n%3]),Pt);wt([0,.5,.7],.32,.12,pe.rust,Pt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;At([e,.06,t],[e,.5,t],.04,pe.metal,Pt)}for(let n=0;n<4;n++)Dt([-1.5,.06,1],.3-n*.045,.025,pe.black,Pt);wt([-1.5,3,-.9],.16,.9,pe.metal,cn);wt([-1.5,3.47,-.9],.24,.08,pe.rust,cn);Ze([1.4,2.9,-.4],[.8,.5,.6],pe.concrete,cn);for(let n=0;n<5;n++)Ze([1.1+n*.15,2.94,-.085],[.035,.32,.03],pe.dark,cn);const $c=new Wa("#ffca86",5,5,2);$c.position.set(-3,1.7,-1.1);Rt.add($c);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=Or([n,.1,e],[.74,.05,.74],tt(vt()>.3?"#b3baa6":"#a5b5a4"),Rt,.018);t.rotation.y=(vt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+vt()*12,t=-5.1+vt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Nt(Ys.cone,pe.leaf,[e,.1,t],[.022,.12+vt()*.12,.022]);i.rotation.z=(vt()-.5)*.7}const rc=new On({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Rn});Ze([3.7,.12,3.6],[4.9,.24,2.7],pe.dark);Nt(new cs(4.5,2.4),rc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Ze([3.7,.29,n],[5,.38,.16],pe.cream);for(const n of[1.18,6.2])Ze([n,.29,3.6],[.16,.38,2.85],pe.cream);for(let n=0;n<13;n++)Ze([1.85,.5,2.15+n*.235],[1.08,.09,.22],tt(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])wt([e,.88,n],.045,.8,pe.copper);for(const n of[1.31,2.4])Zs([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,pe.cream);const Jc=[];for(let n=0;n<6;n++){let e=Ze([4+n*.095,-1.25,5.56],[.055,2.4,.03],tt("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Jc.push(e)}for(let n=0;n<4;n++)Ze([3.96+n*.17,.31,5.31],[.055,.08,.6],pe.dark);const Vt=Mt([3.7,.1,-2.6]);Or([0,.14,0],[3.7,.27,3.5],pe.cream,Vt,.09);for(const n of[-1.55,1.55])Ze([n,1.76,0],[.17,3.25,.2],pe.metal,Vt),Ze([n,.38,0],[.45,.2,.6],pe.copper,Vt),At([n,.36,-1.2],[n,2.9,0],.045,pe.copper,Vt),At([n,.36,1.2],[n,2.9,0],.045,pe.copper,Vt);Ze([0,3.38,0],[3.5,.18,.26],pe.copper,Vt);const Cv=Dt([0,2.7,-.5],1.83,.035,pe.copper,Vt,[0,0,0]);Cv.scale.y=.85;const Br=[];for(let n=0;n<5;n++){const e=Mt([-1.18+n*.59,3.24,0],Vt),t=1.8+n*.12;At([0,0,-.08],[0,-t,0],.015,pe.dark,e),At([0,0,.08],[0,-t,0],.015,pe.dark,e),ht([0,-t,0],.205,pe.copper,e),Dt([0,-t,0],.211,.012,pe.light,e,[0,0,0]),Br.push({group:e,len:t,phase:n})}Ze([0,.6,1.3],[1.45,.8,.4],pe.metal,Vt);fn("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Vt,{size:40});const Pv=wt([-.43,.97,1.3],.19,.07,pe.cream,Vt);Pv.rotation.x=Math.PI/2;const Kc=Ze([-.43,.99,1.342],[.015,.22,.008],pe.rust,Vt);Kc.rotation.z=-.7;const of=ht([.53,.93,1.52],.09,pe.light,Vt),Ya=Mt([.15,.4,1.59],Vt);Dt([0,0,0],.19,.023,pe.rust,Ya,[0,0,0]);for(let n=0;n<3;n++)At([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,pe.rust,Ya);Zs([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,pe.copper);const af=[];function Qc(n,e,t=1.5){wt([n,t/2,e],.038,t,pe.metal),Ze([n,t,e],[.27,.11,.27],pe.dark),Ze([n,t-.18,e],[.17,.25,.17],pe.light),Ze([n,t-.34,e],[.25,.08,.25],pe.copper);const i=new Wa("#ffbe70",1.8,3);i.position.set(n,t-.16,e),af.push(i)}Qc(-5.9,3.9,1.3);Qc(.3,-4.8,1.7);Qc(5.8,1.25,1.35);const rn=Mt([-3.6,.08,3.55]),oc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;Or([0,.14,e],[3.6,.3,1.14],pe.rust,rn,.06),Ze([0,.305,e],[3.36,.04,.92],tt(ni.soil),rn);for(let t=0;t<4;t++){const i=Mt([-1.26+t*.84,.33,e],rn);wt([0,.14,0],.026,.28,pe.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=ht([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],tt(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){ht([0,.17,0],[.25,.18,.25],tt("#b6c58a"),i);for(let s=0;s<6;s++){const r=ht([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],pe.leaf,i);r.rotation.y=s}oc.push(i)}else{const s=ht([.05,.22,0],[.1,.21,.12],tt(ni.purple,{roughness:.35}),i);s.rotation.z=-.25,ht([.05,.41,0],[.075,.025,.07],pe.leaf,i),oc.push(i)}}}const lf=Mt([-1.72,.1,.8],rn);for(let n=0;n<2;n++)Ze([n*3.45,.6,0],[.04,1.3,.04],pe.copper,lf);At([0,1.25,0],[3.45,1.25,0],.022,pe.copper,lf);fn("КОБАЧКИ",[-.45,.68,1.64],1,.26,rn,{bg:"#c2c7a3",fg:"#445e45",size:42});wt([1.9,.23,.7],.18,.34,tt("#6b9389"),rn);At([2.04,.25,.7],[2.4,.46,.7],.045,tt("#6b9389"),rn);Dt([1.8,.48,.7],.16,.02,pe.copper,rn,[0,0,0]);Ze([-1.6,.2,1.47],[.65,.4,.45],pe.rust,rn);for(let n=0;n<3;n++)Ze([-1.6,.12+n*.11,1.71],[.7,.05,.025],pe.copper,rn);const _n=Mt([-3.8,.08,.35]);wt([0,.73,0],.58,.1,pe.rust,_n);wt([0,.35,0],.045,.7,pe.metal,_n);for(let n=0;n<3;n++)At([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,pe.metal,_n);const zr=Mt([.1,.81,0],_n);ht([0,.2,0],[.23,.22,.23],pe.cream,zr);wt([0,.37,0],.14,.06,pe.copper,zr);ht([0,.42,0],.045,pe.dark,zr);At([.15,.18,0],[.33,.32,0],.07,pe.cream,zr);Dt([-.15,.25,0],.18,.035,pe.dark,zr,[0,0,0]);for(const n of[-.35,.38])wt([n,.84,.24],.082,.15,pe.cream,_n),Dt([n,.92,.24],.084,.012,pe.copper,_n),wt([n,.921,.24],.063,.006,tt("#67513b"),_n),Dt([n+.09,.86,.24],.045,.011,pe.cream,_n,[0,0,0]);const Za=[];for(let n=0;n<9;n++){const e=ht([0,0,0],.07,tt("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),_n);e.castShadow=!1,Za.push(e)}const qn=Mt([-5.65,.09,1.1]);Ze([0,.3,0],[.7,.6,.7],pe.concrete,qn);Or([0,.8,0],[.68,.45,.35],pe.dark,qn,.05);for(let n=0;n<6;n++)Ze([-.2+n*.05,.8,.18],[.022,.27,.018],pe.copper,qn);Ze([.18,.85,.184],[.16,.075,.02],pe.light,qn);ht([.18,.72,.19],.05,pe.cream,qn);At([.18,1,0],[.48,1.6,0],.012,pe.copper,qn);const cf=Mt([-.5,.1,-4.6]);wt([0,1.75,0],.055,3.5,pe.metal,cf);ht([0,3.55,0],.09,pe.copper,cf);Zs([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,pe.dark);for(let n=0;n<8;n++){let e=n/8;const t=Nt(new ls(.13,.3,3),tt(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const $a=Mt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Ze([0,0,0],[.55,.09,.025],pe.rust,$a);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}ht([0,0,.05],.08,pe.copper,$a);const jt=Mt([7.25,-.03,1.5]);Ze([0,-.12,0],[2.25,.3,2.5],pe.metal,jt);for(let n=0;n<10;n++)Ze([-.99+n*.22,.08,0],[.2,.08,2.6],pe.rust,jt);Ze([-.95,.2,-.95],[.35,.15,.35],pe.dark,jt);wt([.87,.34,.75],.075,.5,pe.copper,jt);wt([.87,.59,.75],.13,.05,pe.cream,jt);At([.87,.1,-.7],[.87,2.3,-.7],.035,pe.copper,jt);Zs([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,pe.copper,jt);Ze([.17,2.09,-.7],[.25,.4,.25],tt("#ffd591"),jt);Ze([.17,2.32,-.7],[.34,.08,.34],pe.dark,jt);for(let n=0;n<4;n++)Dt([.87,.15,.75],.24-n*.025,.024,tt("#b8ad86"),jt);Ze([6.7,.07,1.5],[1.4,.13,.8],pe.rust);fn("НИКУДА",[.05,.28,1.36],1.3,.29,jt,{bg:"#c2c7a3",fg:"#445e45",size:45});const jc=[];function Ja(n,e,t=1){const i=Mt(e,n),s=new Nr;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Nt(new Xs(s,{depth:.19,bevelEnabled:!1}),tt("#dfc99a"),[0,.15,-.1],null,i);const r=Nt(new ls(.23,.36,3),pe.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=Ja(Rt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);jc.push(e)}const Yn=lv({THREE:Ei,root:Rt,dock:jt,state:Me,M:pe,mat:tt,group:Mt,mesh:Nt,box:Ze,sphere:ht,cyl:wt,torus:Dt,rod:At,sign:fn,paperBoat:Ja,batchStatic:kt,persist:sc,say:An,refresh:Yt,chime:os,reduced:sf}),je=Mt([-.15,1.9,.85]);je.scale.setScalar(1.18);const eu=tt("#233a39",{metalness:.42,roughness:.32});ht([0,.1,0],[.62,.8,.55],eu,je);ht([0,-.36,.1],[.44,.43,.43],eu,je);ht([-.61,.03,.03],[.1,.2,.12],pe.copper,je);ht([.61,.03,.03],[.1,.2,.12],pe.copper,je);for(const n of[-.23,.23]){ht([n,.2,.485],[.17,.13,.057],pe.black,je),Dt([n,.2,.541],.078,.02,pe.copper,je,[0,0,0]),ht([n,.2,.56],.041,pe.light,je);const e=Ze([n,.38,.48],[.24,.045,.06],pe.cream,je);e.rotation.z=n>0?-.13:.13}ht([0,.04,.51],[.09,.17,.11],eu,je);ht([0,-.2,.44],[.31,.16,.11],pe.black,je);for(let n=0;n<7;n++){const e=(n-3)*.073,t=Or([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],pe.cream,je,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=ht([t,i,-.04],[.18,.18,.48],pe.cream,je);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Zs([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,tt("#f2edda"),je)}for(let n=0;n<3;n++)ht([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],pe.cream,je);const tu=Dt([0,1.05,0],.77,.019,pe.copper,je);tu.rotation.z=.14;const Lv=new Wa("#ffbb62",.9,3);Lv.position.set(0,.2,.9);const Ro=Dt([-.15,.26,.85],.7,.018,pe.copper),Cr=Nt(new Oa(.64,32),new Dr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Cr.rotation.x=-Math.PI/2;Cr.castShadow=!1;const mi=new L(-.15,1.9,.85),Fn=Mt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Ze([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?pe.cream:pe.concrete,Fn);t.rotation.x=Math.PI/2-e,n%3===0&&At([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,pe.copper,Fn)}for(const n of[-.45,.45])Dt([n,0,0],2.07,.025,pe.copper,Fn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Dt([n,0,0],1.7,.075,pe.concrete,Fn,[0,Math.PI/2,0]);At([0,-2.15,-1.2],[0,-1.58,-.8],.07,pe.metal,Fn);At([0,-2.15,1.2],[0,-1.58,.8],.07,pe.metal,Fn);fn("ОБРАТНО",[.49,-.55,.2],1.15,.3,Fn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+vt()*20,t=-8+vt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Nt(Ys.ico,tt("#47675f"),[e,-1.3-vt()*2,t],[.22+vt()*.55,.19+vt()*.4,.27+vt()*.4])}const uf=new Ot,hf=[];for(let n=0;n<75;n++)hf.push((vt()-.5)*25,vt()*9-2,(vt()-.5)*22);uf.setAttribute("position",new pt(hf,3));const df=new Td(uf,new Cc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));bn.add(df);function kt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new dt().multiplyMatrices(i,r.matrixWorld));let l=t.get(o);l||t.set(o,l={material:r.material,geos:[]}),l.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=av(o,!1);a&&Nt(a,r,null,null,n),o.forEach(l=>l.dispose())}}kt(Rt,[je,rn,Vt,_n,qn,jt,Pt,Fn,$a,...jc,...Za,...Jc,Ro,Cr,Yn.travel]);kt(Pt,[cn]);kt(cn,[]);kt(Fn,[]);kt(je,[tu]);je.traverse(n=>{n.isMesh&&(n.castShadow=!1)});kt(_n,[...Za]);kt(qn,[]);kt(jt,[Yn.gallery,Yn.beacon]);kt(Vt,[...Br.map(n=>n.group),Ya,Kc,of]);Br.forEach(n=>kt(n.group,[]));const Pr=Mt([0,.33,0],rn);oc.forEach(n=>{Pr.add(n),n.position.y-=.33});kt(Pr,[]);kt(rn,[Pr]);const xn=mv({THREE:Ei,root:Rt,scene:bn,head:je,M:pe,mat:tt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,paperBoat:Ja,batchStatic:kt,changed:()=>{Yt(),ft.shadowMap.needsUpdate=!0},chime:os}),xi=Tv({THREE:Ei,root:Rt,M:pe,mat:tt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,mesh:Nt,sign:fn,batchStatic:kt,changed:()=>{Yt(),ft.shadowMap.needsUpdate=!0},watching:()=>bt==null?void 0:bt.watching(),localPlay:()=>bt.localPlay()}),Fi=Df({THREE:Ei,root:Rt,M:pe,mat:tt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,batchStatic:kt,changed:()=>{Yt(),ft.shadowMap.needsUpdate=!0},watching:()=>bt==null?void 0:bt.watching(),localPlay:()=>bt.localPlay()}),vi=Pf({THREE:Ei,root:Rt,M:pe,mat:tt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,batchStatic:kt,changed:()=>{Yt(),ft.shadowMap.needsUpdate=!0},watching:()=>bt==null?void 0:bt.watching(),localPlay:()=>bt.localPlay()}),Oi=Lf({THREE:Ei,workshop:Pt,M:pe,mat:tt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,changed:()=>{Yt(),ft.shadowMap.needsUpdate=!0},watching:()=>bt==null?void 0:bt.watching(),localPlay:()=>bt.localPlay()}),Ka=gv({THREE:Ei,scene:bn,root:Rt,head:je,M:pe,mat:tt,mesh:Nt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,batchStatic:kt,chime:os}),kr=bv({THREE:Ei,scene:bn,root:Rt,head:je,M:pe,mat:tt,mesh:Nt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,paperBoat:Ja,batchStatic:kt,chime:os}),Pn=Sv({THREE:Ei,scene:bn,root:Rt,head:je,M:pe,mat:tt,mesh:Nt,group:Mt,box:Ze,sphere:ht,cyl:wt,rod:At,torus:Dt,sign:fn,batchStatic:kt,chime:os,changed:()=>{su(),ft.shadowMap.needsUpdate=!0}}),ff=_v({head:je,group:Mt,sphere:ht,box:Ze,torus:Dt,M:pe,mat:tt});let Kt=null,qt=1;const Jn={drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new L(-17.5,1.3,3.4),position:new L(-24,.6,0),run:()=>vi.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new L(-1.4,1.5,-1.1),position:new L(-3.2,1.25,-2.2),run:()=>Oi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new L(4.7,.8,25.8),position:new L(0,.4,24),run:()=>Fi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new L(28.4,2.2,2.5),position:new L(24,.4,0),run:()=>xi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new L(-.1,2.15,4.3),position:new L(-.1,1,4.3),run:()=>xn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new L(-6,4.55,-3.25),position:new L(-6,2.2,-3.25),run:()=>{Me.loop>0||(Me.loop=12,mf.copy(je.position),An("ноги не понадобились"),Yt())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new L(-3.2,3.15,-2.5),position:new L(-3.2,1.1,-2.5),run:()=>{Me.roof=Hs()?0:1,An(Hs()?"заходи":"прикрыл"),Yt()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(je.position),n.y+=1.35},position:new L(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];An(n[Dv++%n.length]),mi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new L(3.7,3.85,-2.6),position:new L(3.7,1,-2.6),run:()=>{Me.running=!Me.running,sc(),An(Me.running?"ну пошло":"можно и полежать"),Yt()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new L(-3.7,1.65,.35),position:new L(-3.8,1,.35),run:()=>{Me.brew>0||(Me.brew=8,Me.teaCount++,mi.set(-2.65,1.7,.65),An("щас, чайник поставлю"),Yt())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new L(-3.4,1,3.8),position:new L(-3.6,1,3.55),run:()=>{Me.harvest++,Ns=.15,sc(),mi.set(-1.6,1.6,2.3),An(Me.harvest===1?"о, урожай":"кабачки опять победили"),Yt()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new L(-5.65,1.75,1.1),position:new L(-5.65,1,1.1),run:()=>{Me.radio=(Me.radio+1)%3,nu(),An(["тишина. нормально.","дождь поймал","провода поют"][Me.radio]),Yt()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new L(7.4,2.75,1.1),position:new L(7.25,.9,1.5),run:()=>{Yn.launchOrCollect(),Me.dockPending===!1&&Me.boat===0&&mi.set(5.85,1.7,1.05)}}};let Dv=0,Ns=1,pf=0,is=0;const mf=new L;let gf=()=>{Vi("engine"),Jn.engine.run()};const Qa={};for(const[n,e]of Object.entries(Jn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>Vi(n),we("#hotspots").append(t),Qa[n]=t}const _f=we("#hotspots"),Ol=we("#speech"),es={width:innerWidth,height:innerHeight},Iv=wv({entries:Jn,elements:Qa,layer:_f,camera:Ue});let Bl=!1,Dh=NaN,Ih=NaN;const or=new L;function Vi(n){Me.selected=n,we("#inspector").classList.remove("collapsed");const e=Jn[n];we("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,we("#object-title").textContent=e.title,we("#object-description").textContent=e.description,gf=e.run,we("#focus-object").hidden=!1,we("#focus-object").textContent=Ln===n?"весь двор ⌂":"осмотреть ближе ⊕",Yt();for(const[t,i]of Object.entries(Qa))i.classList.toggle("selected",t===n)}function Yt(){const n=Me.selected,e=Jn[n];if(we("#status").textContent=Me.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=Me.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=Hs()?"закрыть крышу":e.action),n==="engine"&&(t=Me.running?"остановить и отдохнуть":"запустить маятники",i=Me.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=Me.brew>0,t=s?"чай заваривается…":e.action,i=Me.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&Me.harvest&&(i=`Уже собрано: ${Me.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Me.radio]}. ${Me.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Yn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=xn.card();t=r.action,i=r.description}if(n==="cellar"){const r=xi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Fi.card();t=r.action,i=r.description}if(n==="bench"){const r=Oi.card();t=r.action,i=r.description}if(n==="drydock"){const r=vi.card();t=r.action,i=r.description}vi.controls.hidden=n!=="drydock",Oi.controls.hidden=n!=="bench",Fi.controls.hidden=n!=="amnesty",xi.controls.hidden=n!=="cellar",we("#enter-bench")&&(we("#enter-bench").hidden=n!=="workshop"),we("#enter-dream03").hidden=n!=="dock",we("#enter-dream04").hidden=n!=="workshop",we("#greenhouse-controls").hidden=n!=="greenhouse",we("#thermal-moves").hidden=xn.inspect().mode!=="playing",we("#thermal-readout").textContent=`тепло ${xn.inspect().temp} · такты ${xn.inspect().turn}/6`,we("#object-description").textContent=i,we("#object-action").innerHTML=t+" <span>↗</span>",we("#object-action").disabled=s}we("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock"].includes(Me.selected)&&bt.watching()){bt.localPlay();return}bt.localPlay(),gf(),is=performance.now()+2200};we("#close-card").onclick=()=>we("#inspector").classList.add("collapsed");function An(n){we("#speech").textContent=n,pf=performance.now()+4e3,we("#speech").classList.add("visible")}we("#markers").onclick=()=>{Me.markers=!Me.markers,we("#markers").setAttribute("aria-pressed",Me.markers),_f.hidden=!Me.markers||!!Kt||Ue.zoom<.4};let Ln=null;const un={angle:Math.PI/4,targetAngle:Math.PI/4};function xf(){es.width=innerWidth,es.height=innerHeight;const n=innerWidth/innerHeight,e=$t()?19.6:9.6;Ue.left=-e*n,Ue.right=e*n,Ue.top=e-($t()?2.8:0),Ue.bottom=-e-($t()?2.8:0),Ue.updateProjectionMatrix(),ft.setSize(innerWidth,innerHeight,!1),ft.setPixelRatio(Math.min(devicePixelRatio,$t()?1.5:2))}function $s(){if(bt==null||bt.unfollow(),Kt){ja();return}Ln=null,document.body.classList.remove("close-look"),we("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Ue.zoom=1,Je.target.copy(qc),un.targetAngle=Math.PI/4,Ue.updateProjectionMatrix()}we("#focus-object").onclick=()=>{if(Me.selected){if(Ln===Me.selected){$s();return}Ln=Me.selected,document.body.classList.add("close-look"),we("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(Jn[Me.selected].position),$t()&&(Je.target.y+=["cellar","amnesty","drydock"].includes(Ln)?-.7:1.6),Ue.zoom=["cellar","amnesty","drydock"].includes(Ln)?$t()?1.8:1.6:$t()?2.5:2.1,Ln==="bench"?(Je.maxZoom=4.5,Ue.zoom=$t()?3.8:3.4,Je.target.y+=$t()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Ue.updateProjectionMatrix()}};we("#home").onclick=$s;we("#zoom-in").onclick=()=>{Ue.zoom=Math.min(Je.maxZoom,Ue.zoom*1.2),Ue.updateProjectionMatrix()};we("#zoom-out").onclick=()=>{Ue.zoom=Math.max(Je.minZoom,Ue.zoom/1.2),Ue.updateProjectionMatrix()};we("#rotate").onclick=()=>un.targetAngle+=Math.PI/2;addEventListener("resize",xf);xf();function vf(n,e,t=!1){Kt&&ja(),$s(),Je.target.set(n,1,e),Ue.zoom=t?1:.65,Ue.updateProjectionMatrix(),we("#inspector").classList.add("collapsed")}function Nv(){vf(0,0);const n=innerWidth/innerHeight,e=$t()?19.6:9.6;Ue.zoom=Math.min(e*n/(Us.half*1.57),e/(Us.half*1.3)),Ue.updateProjectionMatrix()}const Us=pv({root:Rt,camera:Ue,controls:Je,mobile:$t,go:vf,overview:Nv,home:$s}),Bi=document.createElement("select");Bi.id="world-places";Bi.setAttribute("aria-label","Открыть место");Bi.append(new Option("места",""));for(const[n,e]of Object.entries(Jn))Bi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Bi,document.querySelector("#territory-location"));Bi.onchange=()=>{const n=Bi.value;Jn[n]&&($s(),Je.target.copy(Jn[n].position),Vi(n),Bi.value="")};Ue.zoom=.72;Ue.updateProjectionMatrix();const Nh=new Hd,Uh=new ye;let Qi=null;ft.domElement.addEventListener("pointerdown",n=>{Qi={x:n.clientX,y:n.clientY,time:performance.now()}});ft.domElement.addEventListener("pointerup",n=>{if(!Qi||Math.hypot(n.clientX-Qi.x,n.clientY-Qi.y)>7||performance.now()-Qi.time>550){Qi=null;return}if(Qi=null,Uh.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Nh.setFromCamera(Uh,Ue),Kt)return;const e=Nh.intersectObjects([vi.house,Oi.house,Fi.house,xi.house,xn.house,je,Vt,rn,_n,qn,jt,Pt,Fn,Yn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![vi.house,Oi.house,Fi.house,xi.house,xn.house,je,Vt,rn,_n,qn,jt,Pt,Fn,Yn.travel].includes(t);)t=t.parent;const i=new Map([[vi.house,"drydock"],[Oi.house,"bench"],[Fi.house,"amnesty"],[xi.house,"cellar"],[xn.house,"greenhouse"],[je,"head"],[Vt,"engine"],[rn,"garden"],[_n,"tea"],[qn,"radio"],[jt,"dock"],[Pt,"workshop"],[Fn,"stair"],[Yn.travel,"dock"]]).get(t);i&&Vi(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Jn)){const o=r.position.clone().project(Ue);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&Vi(t)}});let Sn=null;function Uv(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(o),c.start(),c});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function nu(){if(!Sn)return;const n=Sn.ctx.currentTime;Sn.filter.frequency.setTargetAtTime([160,1100,260][Me.radio],n,.4),Sn.toneGain.gain.setTargetAtTime([.05,.025,.3][Me.radio],n,.4)}we("#sound").onclick=async()=>{try{Sn||(Sn=Uv()),await Sn.ctx.resume(),Me.sound=!Me.sound,Sn.gain.gain.setTargetAtTime(Me.sound?.08:0,Sn.ctx.currentTime,.3),we("#sound").textContent=Me.sound?"звук включён":"звук выключен",we("#sound").setAttribute("aria-pressed",Me.sound),nu(),Yt()}catch{An("со звуком не сложилось")}};function os(n=330){if(!Sn||!Me.sound)return;const e=Sn.ctx.currentTime,t=Sn.ctx.createOscillator(),i=Sn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Sn.gain),t.start(e),t.stop(e+1.1)}we("#about").onclick=()=>we("#about-dialog").showModal();we("#close-about").onclick=we("#back-to-yard").onclick=()=>we("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&Kt){ja();return}n.key==="Escape"&&we("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&we("#zoom-in").click(),n.key==="-"&&we("#zoom-out").click(),n.key.toLowerCase()==="r"&&we("#rotate").click(),n.key.toLowerCase()==="h"&&$s()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{bt.localPlay(),xn.step(n.dataset.thermal),is=performance.now()+2200};const Fv={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function iu(){return qt===1?xn:qt===2?Ka:qt===3?kr:Pn}function su(){const n=qt===1?xn.inspect().dreamStep:iu().inspect().step,e=Fv[qt];if(we("#dream-force").hidden=qt!==3,we("#dream-roofs").hidden=qt!==4,we("#dream-panel .object-kicker").textContent=`СОН 0${qt} / БЕЗНОГИМ`,we("#dream-panel h2").textContent=e.title,we("#dream-text").textContent=qt===4?Pn.text():e.lines[n],we("#dream-breathe").textContent=qt===4?Pn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,we("#dream-breathe").disabled=qt===4&&Pn.inspect().phase==="flying",qt===4){const t=Pn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Pn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function Gr(n=1){Kt||(qt=n,Kt={target:Je.target.clone(),zoom:Ue.zoom,angle:un.targetAngle,focused:Ln,returnId:n===1?"greenhouse":n===2?"cellar":n===3?"dock":"workshop"},iu().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,$t()?n===1?3:2.4:n===1?2:1.5,0),Ue.zoom=n===1?$t()?1.65:1.75:$t()?1.45:1.55,Ue.updateProjectionMatrix(),un.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4),ya="",we("#dream-panel").hidden=!1,su(),ft.shadowMap.needsUpdate=!0)}function ja(){if(!Kt)return;const n=Kt;Kt=null,iu().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Ue.zoom=n.zoom,un.targetAngle=n.angle,Ln=n.focused,Ue.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),ya="",we("#dream-panel").hidden=!0,ft.shadowMap.needsUpdate=!0,Vi(n.returnId)}we("#enter-dream").onclick=()=>Gr(1);we("#exit-dream").onclick=ja;we("#dream-breathe").onclick=()=>{qt===1?xn.breathe():qt===2?Ka.pour():qt===3?kr.toss():Pn.send(),is=performance.now()+2200,su(),ft.shadowMap.needsUpdate=!0};const Vr=document.createElement("button");Vr.id="enter-bench";Vr.hidden=!0;Vr.textContent="собрать механический монитор ↗";Vr.onclick=()=>{Vi("bench"),we("#focus-object").click()};we("#focus-object").before(Vr);const el=document.createElement("button");el.id="enter-dream02";el.textContent="сон 02 / вода спит ↗";el.onclick=()=>Gr(2);xi.controls.append(el);we("#enter-dream03").onclick=()=>Gr(3);we("#enter-dream04").onclick=()=>Gr(4);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Pn.turn(Number(n.dataset.roofTurn)),is=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{kr.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};we("#dream-archive").onclick=()=>we("#dream-archive-dialog").showModal();we("#close-dream-archive").onclick=()=>we("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{we("#dream-archive-dialog").close(),Gr(Number(n.dataset.dreamId))};const bt=uv({head:je,headDestination:mi,state:Me,controls:Je,camera:Ue,refresh:Yt,setAudioTone:nu,say:An,onHarvest:()=>{Ns=.15}});let zl="";const yf=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])yf.push(new L(n,e,t));const Mf=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Mf.push(new L(n,e,t));function Ov(){const n=Ln==="drydock"&&Me.selected==="drydock",e=(Ln==="bench"&&Me.selected==="bench"||n)&&!we("#inspector").classList.contains("collapsed")&&!Kt;if(document.body.classList.toggle("bench-look",e&&!n),document.body.classList.toggle("drydock-look",e&&n),!e){zl="";return}if(Math.abs(un.angle-un.targetAngle)>.01)return;const t=we("#inspector").getBoundingClientRect(),i=we(".territory-nav").getBoundingClientRect(),s=we(".toolbar").getBoundingClientRect(),r=innerWidth<=900&&innerHeight>innerWidth,o=r?{left:14,right:s.left-10,top:i.bottom+14,bottom:t.top-14}:{left:Math.max(t.right+18,i.right+18),right:s.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!r&&(o.left=i.right+12,o.right=innerWidth-16,o.top=s.bottom+10,o.bottom=t.top-10);const a=we(".resident-history");n&&innerWidth>900&&a&&!a.hidden&&(o.right=Math.min(o.right,a.getBoundingClientRect().left-18));const l=[n?13:12,innerWidth,innerHeight,o.left,o.right,o.top,o.bottom,un.targetAngle].map(m=>Math.round(m*10)/10).join(":");if(l===zl||o.bottom-o.top<35||o.right-o.left<50)return;zl=l;const c=()=>{Ue.updateMatrixWorld();const m=(n?Mf:yf).map(d=>ii(d.clone()));return{l:Math.min(...m.map(d=>d.x)),r:Math.max(...m.map(d=>d.x)),t:Math.min(...m.map(d=>d.y)),b:Math.max(...m.map(d=>d.y))}};let u=c();Ue.zoom=Math.min(4.5,Ue.zoom*Math.min((o.right-o.left)/(u.r-u.l),(o.bottom-o.top)/(u.b-u.t))),Ue.updateProjectionMatrix(),u=c();const p=(o.left+o.right-u.l-u.r)/2,h=(o.top+o.bottom-u.t-u.b)/2,f=new L().setFromMatrixColumn(Ue.matrixWorld,0),g=new L().setFromMatrixColumn(Ue.matrixWorld,1),x=f.multiplyScalar(-p*(Ue.right-Ue.left)/Ue.zoom/innerWidth).add(g.multiplyScalar(h*(Ue.top-Ue.bottom)/Ue.zoom/innerHeight));Je.target.add(x),Ue.position.add(x),Ue.lookAt(Je.target),Ue.updateMatrixWorld()}let ya="";const Sf=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Sf.push(new L(n,e,t));function Bv(){if(!Kt||qt!==4)return;const n=we("#dream-panel").getBoundingClientRect(),e=we("footer").getBoundingClientRect(),t=we(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(un.angle*100)].join(":");if(o===ya||r.right-r.left<60||r.bottom-r.top<80)return;ya=o;const a=()=>{Ue.updateMatrixWorld();const g=Sf.map(x=>ii(x.clone()));return{l:Math.min(...g.map(x=>x.x)),r:Math.max(...g.map(x=>x.x)),t:Math.min(...g.map(x=>x.y)),b:Math.max(...g.map(x=>x.y))}};let l=a();Ue.zoom=Math.min(4.5,Ue.zoom*Math.min((r.right-r.left)/(l.r-l.l),(r.bottom-r.top)/(l.b-l.t))),Ue.updateProjectionMatrix(),l=a();const c=(r.left+r.right-l.l-l.r)/2,u=(r.top+r.bottom-l.t-l.b)/2,p=new L().setFromMatrixColumn(Ue.matrixWorld,0),h=new L().setFromMatrixColumn(Ue.matrixWorld,1),f=p.multiplyScalar(-c*(Ue.right-Ue.left)/Ue.zoom/innerWidth).add(h.multiplyScalar(u*(Ue.top-Ue.bottom)/Ue.zoom/innerHeight));Je.target.add(f),Ue.position.add(f),Ue.lookAt(Je.target),Ue.updateMatrixWorld()}let Fh=performance.now(),Mo=0,Oh=0;function ii(n){return n.project(Ue),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function zv(){bt.sync();const n=performance.now(),e=(n-Fh)/1e3;Fh=n,Mo+=e,Me.energy=mn.damp(Me.energy,Me.running?1:0,1.6,e);const t=sf?Mo*.2:Mo;un.angle=mn.damp(un.angle,un.targetAngle,5,e);const i=160;Ue.position.set(Je.target.x+Math.sin(un.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(un.angle)*i),Ue.lookAt(Je.target),Je.update(),Kt||(Je.target.x=mn.clamp(Je.target.x,-62,Us.half+2),Je.target.z=mn.clamp(Je.target.z,-62,Us.half+2)),Us.update(),Ov(),Bv();for(const s of Br)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*Me.energy*.45;if(cn.position.z=mn.damp(cn.position.z,Hs()?-2.5:0,2,e),cn.position.y=mn.damp(cn.position.y,Hs()?.4:0,2,e),Ya.rotation.z=t*Me.energy*.28,Kc.rotation.z=-.7+Me.energy*1.35+Math.sin(t*4)*Me.energy*.08,of.material.emissiveIntensity=.45+Me.energy*1.5,rc.uniforms.uTime.value=t,rc.uniforms.uEnergy.value=Me.energy,$a.rotation.z=t*(.09+Me.energy*.23),af.forEach(s=>s.intensity=.65+Me.energy*1.5),$c.intensity=2+Me.energy*4,je.position.x=mn.damp(je.position.x,mi.x,1.6,e),je.position.z=mn.damp(je.position.z,mi.z,1.6,e),je.position.y=mn.damp(je.position.y,mi.y+Math.sin(t*1.4)*.1,2,e),Me.loop>0){Me.loop=Math.max(0,Me.loop-e);const s=12-Me.loop;if(s<2){const r=mn.smoothstep(s,0,2);je.position.lerpVectors(mf,new L(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;je.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),je.rotation.x=(s-2)/8*Math.PI*2}else{const r=mn.smoothstep(s,10,12);je.position.lerpVectors(new L(-6,.65,-3.25),mi,r),je.rotation.x=(1-r)*Math.PI*2}Me.loop||(je.rotation.x=0,An("ну вот и дома"),Yt())}if(bt.place(),je.rotation.y=Math.sin(t*.3)*.12,tu.rotation.y=t*.13,Ro.position.x=je.position.x,Ro.position.z=je.position.z,Ro.rotation.z=.04*Math.sin(t),Cr.position.x=je.position.x,Cr.position.z=je.position.z,Ns=mn.damp(Ns,1,.85,e),Pr.scale.y=Ns,Pr.rotation.z=Math.sin(t*.9)*.009,Me.brew>0&&(Me.brew=Math.max(0,Me.brew-e),Me.brew===0&&(An("чай готов. живём."),Yt(),os(440))),Za.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=Me.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),jc.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),ff.update(bt.watching()),Ka.update(e,t),kr.update(e,t),Pn.update(e,t),vi.update(e),Oi.update(e),cn.visible=!(Ln==="bench"&&Me.selected==="bench"&&!we("#inspector").classList.contains("collapsed")&&!Kt),Fi.update(e),xi.update(Mo),xn.update(e,t),Yn.update(e,t),Bl!==Me.dockPending&&(Bl=Me.dockPending,Qa.dock.classList.toggle("waiting",Bl)),Jc.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+Me.energy*.23}),df.rotation.y=t*.003,Me.running&&t-Oh>3.5&&(Oh=t,os([220,277,330,415,440][Math.floor(t)%5])),Ue.updateMatrixWorld(),Iv.update(!Kt&&Ue.zoom>=.4&&Me.markers,es.width,es.height),Kt||n>pf)Ol.classList.contains("visible")&&Ol.classList.remove("visible");else{or.copy(je.position),or.y+=1.52,or.project(Ue);const s=Math.round(Math.max(85,Math.min(es.width-85,(or.x+1)*es.width*.5))*10)/10,r=Math.round((1-or.y)*es.height*.5*10)/10;(s!==Dh||r!==Ih)&&(Dh=s,Ih=r,Ol.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}is&&performance.now()>is&&(ft.shadowMap.needsUpdate=!0,is=0),ft.render(bn,Ue)}Me.running&&(we("#object-action").innerHTML="остановить двор <span>↗</span>");Yt();ft.setAnimationLoop(zv);requestAnimationFrame(()=>we("#loading").classList.add("done"));window.__yard={state:Me,select:Vi,inspect:()=>({resident:bt.inspect(),territory:Us.inspect(),sleepBody:ff.inspect(),sleepDream:Ka.inspect(),quietDream:kr.inspect(),roofDream:Pn.inspect(),roofDreamGoalScreen:Pn.inspect().goals.map(n=>ii(new L(...n))),roofDreamLetterScreen:ii(new L(...Pn.inspect().letter)),dreamId:Kt?qt:null,drydock:vi.inspect(),drydockShipScreen:ii(new L(...vi.inspect().ship).add(new L(-24,-.5,0))),bench:Oi.inspect(),benchScreen:ii(new L(-2.65,1.58,-3.18)),benchBucketScreen:ii(new L(-4.75,1.51,-3.63)),roofVisible:cn.visible,amnesty:Fi.inspect(),amnestyScreen:ii(new L(0,-.3,24)),cellar:xi.inspect(),cellarScreen:ii(new L(24,-.3,.25)),objects:Object.keys(Jn),greenhouse:xn.inspect(),dock:Yn.inspect(),boatScreen:ii(new L(...Yn.inspect().boat).add(new L(0,.2,0))),drawCalls:ft.info.render.calls,triangles:ft.info.render.triangles,gpuGeometries:ft.info.memory.geometries,zoom:Ue.zoom,target:Je.target.toArray(),angle:un.angle,head:je.position.toArray(),roof:cn.position.toArray(),roofOpen:Hs(),roofMode:Me.roof===null?"auto":"manual",pendulums:Br.map(n=>n.group.rotation.x),growth:Ns,meshes:(()=>{let n=0;return bn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ft.domElement.width,ft.domElement.height]})};Av();
