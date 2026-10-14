(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Mh(n){const e=n.state||{},t=(a,c,l,h)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):h,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function If({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:h,changed:d,watching:u,localPlay:f}){var K,fe,oe;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const v=i("#28464d"),m=i("#eee4c9"),p=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],p,g);const M=s([0,0,0],g),w=s([0,0,0],g);for(const[P,C]of[[M,"ОТ"],[w,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,P),r([0,1.32,0],[2.12,.12,3.3],m,P),l(C,[0,.9,1.66],1,.36,P,{size:60});const y=s([0,1.43,0],g),b=s([0,0,0],y),S=s([0,0,0],y),R=r([-.5,0,0],[1,.15,.56],v,b),_=r([.5,0,0],[1,.15,.56],v,S),T=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),A=s([0,1.47,0],g);A.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,A),o([-.08,.46,0],[.39,.42,.29],t.copper,A),c([-.08,.47,.3],.23,.033,m,A,[0,0,0]),c([-.08,.47,.315],.12,.03,m,A,[0,0,0]);for(const P of[-.13,.13])a([.4,.17,P],[.62,.46,P],.02,t.leaf,A),o([.62,.46,P],[.055,.065,.055],v,A);r([-.16,.92,0],[.46,.32,.065],m,A),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,A),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,A);const I=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,I);const F=[".","?","!"].map((P,C)=>{const V=s([-1.1+C*1.1,.42,0],I);return r([0,0,0],[.8,.65,.11],m,V),l(P,[0,.02,.075],.55,.5,V,{size:100}),V});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const k=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,k);for(let P=-4;P<=4;P++)r([P,.07,0],[.035,.025,.26],v,k),l(String(P),[P,.08,.32],.4,.28,k,{size:45});for(let P=0;P<16;P++)r([1.5,-.1-P*.09,-5.9-P*.72],[1.05,.14,.65],t.cream,e);for(let P=0;P<8;P++)r([1.5,-1.45,-17.6-P*.5],[1.05,.14,.45],t.cream,e);const N=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,N),r([0,2.7,0],[.8,.14,.8],t.metal,N),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),N),h(A,[]),h(M,[]),h(w,[]),h(g,[M,w,y,...T,A,I]);let z=null,H=((oe=(fe=(K=window.__beznogimState)==null?void 0:K.mechanics)==null?void 0:fe.dash)==null?void 0:oe.public)||null,O,j="",B=1,Q=0;try{z=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function ee(P,C,V={}){const X=Mh({mode:P,tool:C,args:V,state:z});z=X.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(z))}catch{}return X}ee("migrate");const ue=document.createElement("div");ue.id="dash-controls",ue.hidden=!0,ue.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(P,C)=>`<option value="${C+1}">${C+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(P=>`<option value="${P}">${P>0?"+":""}${P}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(ue);const de=()=>H&&u()?H:Mh({mode:"migrate",state:z}).public;function Me(P,C){f(),ee("action",P,C),j="",te(0),d()}ue.querySelector("#dash-tune").onclick=()=>Me("tune",{span:Number(ue.querySelector("#dash-span").value),shift:Number(ue.querySelector("#dash-shift").value)}),ue.querySelector("#dash-reset").onclick=()=>Me("reset");function Ae(P){const C=["delivered","complete"].includes(P.phase);C?!O||O.run!==P.run||O.round!==P.round?B=1:["delivered","complete"].includes(O.phase)||(B=0):B=0,O=P,ue.querySelector("#dash-readout").textContent=`почта ${P.delivered}/3 · пролёт ${P.gap} · центр ${P.center>0?"+":""}${P.center} · попытки ${P.attempts}`,ue.querySelector("#dash-span").value=P.span,ue.querySelector("#dash-shift").value=P.shift;for(const V of ue.querySelectorAll("select,#dash-tune"))V.disabled=C;M.position.x=P.center-P.gap/2-1,w.position.x=P.center+P.gap/2+1,T[0].position.x=P.center-P.gap/2,T[1].position.x=P.center+P.gap/2,y.position.x=P.shift,R.scale.x=_.scale.x=P.span/2,R.position.x=-P.span/4,_.position.x=P.span/4,F.forEach((V,X)=>V.visible=X<P.delivered)}function te(P){const C=de(),V=JSON.stringify(C);V!==j&&(j=V,Ae(C),d()),B=["delivered","complete"].includes(C.phase)?Math.min(1,B+P/4):0,Q=n.MathUtils.damp(Q,C.phase==="bent"?.22:0,6,P),b.rotation.z=Q,S.rotation.z=-Q,y.position.y=1.43-Math.sin(Q)*C.span/2,A.position.x=M.position.x+(w.position.x-M.position.x)*(B*B*(3-2*B)),A.position.y=1.47,A.rotation.z=B>0&&B<1?Math.sin(B*30)*.025:0}const W=()=>{const P=O||de();return{action:H&&u()?"попробовать свою почту":P.phase==="complete"?"новая почта ↺":P.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(H&&u()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+P.message}};return window.addEventListener("beznogim:state",({detail:P})=>{var V,X;const C=(X=(V=P.mechanics)==null?void 0:V.dash)==null?void 0:X.public;C&&(H=C)}),Ae(de()),j=JSON.stringify(de()),A.position.x=B===1?w.position.x:M.position.x,{house:g,controls:ue,update:te,card:W,run:()=>{if(B>0&&B<1)return;const P=de().phase;Me(P==="complete"?"reset":P==="delivered"?"next":"cross")},inspect:()=>({source:H&&u()?"resident":"sandbox",...O,walk:B,bend:Q,snail:A.position.toArray(),beam:y.position.toArray(),left:M.position.x,right:w.position.x,stamps:F.map(P=>P.visible)})}}function Sh(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Nf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:h,batchStatic:d,changed:u,watching:f,localPlay:g}){var fe,oe,P;const v=s([-24,-1.5,0],e);v.name="sandbox-drydock";const m=i("#d0b987"),p=i("#556f7f"),M=i("#a65d42"),w=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,v),r([0,.2,0],[15.7,.12,9.7],t.dark,v),r([.5,.38,0],[12.6,.26,3.9],t.dark,v);for(const C of[-2,2])r([.5,.96,C],[12.9,1.1,.22],t.copper,v);for(const C of[-6,7])r([C,.96,0],[.22,1.1,4.1],t.copper,v);const y=Array.from({length:3},(C,V)=>r([-4+V*2,.98,0],[1.9,1,3.7],m,v)),b=r([.5,.54,0],[12.6,.04,3.75],w,v);b.castShadow=!1;const S=Array.from({length:3},(C,V)=>{const X=s([-4+V*2,.35,3.05],v);for(let re=0;re<5;re++)o([(re-2)*.27,.16+re%2*.1,0],[.32,.22,.4],m,X);return X}),R=s([-2,1.3,0],v);R.name="sandbox-cargo-ship";const _=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([C,V],X)=>X?_.lineTo(C,-V):_.moveTo(C,-V)),_.closePath();const T=new n.ExtrudeGeometry(_,{depth:.67,bevelEnabled:!1});T.rotateX(-Math.PI/2);const A=new n.Mesh(T,p);A.castShadow=!0,A.receiveShadow=!0,R.add(A),r([-.45,.7,0],[4.9,.09,1.4],t.cream,R);for(let C=0;C<3;C++){r([-.95+C*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][C],R);for(const V of[-.601,.601])for(let X=0;X<4;X++)r([-.95+C*.92-.3+X*.2,1.03,V],[.024,.5,.025],t.dark,R)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,R),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,R);for(const C of[-.63,.63])r([-2.25,1.6,C],[.73,.16,.03],t.dark,R);a([-2.45,1.98,0],.15,.43,M,R),a([-2.45,2.21,0],.15,.05,t.dark,R),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,R),r([2.55,1.7,0],[.48,.26,.03],t.cream,R);for(const C of[-2.9,2.1])for(const V of[-.7,.7])c([C,.7,V],[C,1,V],.025,t.cream,R);for(const C of[-.7,.7])c([-2.9,1,C],[2.1,1,C],.025,t.cream,R);const I=s([5.9,1.1,3.4],v);l([0,0,0],.4,.04,t.copper,I,[0,0,0]);for(let C=0;C<4;C++){const V=C*Math.PI/2;c([0,0,0],[.4*Math.cos(V),.4*Math.sin(V),0],.025,t.copper,I)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,v),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,v);const F=r([5.9,.8,1.75],[.19,.55,.19],w,v);F.castShadow=!1;const k=s([0,.29,0],v);for(const C of[-2.9,2.9])r([.5,0,C],[13,.02,1.1],w,k);for(let C=0;C<3;C++)h(["КОРМА","ТРЮМ","НОС"][C],[-4+C*2,.7,2.15],1.55,.28,v,{size:45});h("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,v,{size:44}),h("ВЫХОД",[5.5,.8,-2.15],1.5,.35,v,{size:42});for(const C of[-6.6,6.6])c([C,.3,-3.8],[C,3.6,-3.8],.08,t.metal,v),r([C,3.6,-3.5],[.55,.16,.8],t.metal,v),r([C,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),v);for(let C=0;C<15;C++)r([-7.2-C*.72,-.03-C*.09,1.2],[.65,.14,1.12],t.cream,e);const N=s([-6.5,.5,3.3],v);c([0,0,0],[0,1.5,0],.045,t.copper,N),r([0,.1,0],[.32,.35,.08],t.metal,N),l([0,1.53,0],.1,.025,t.metal,N,[0,0,0]),d(R,[]),d(v,[...y,...S,b,R,I,F,k]);let z=null,H=((P=(oe=(fe=window.__beznogimState)==null?void 0:fe.mechanics)==null?void 0:oe.drydock)==null?void 0:P.public)||null,O,j="",B=0,Q=0,ee=0;try{z=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function ue(C,V,X={}){const re=Sh({mode:C,tool:V,args:X,state:z});z=re.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(z))}catch{}return re}ue("migrate");const de=document.createElement("div");de.id="drydock-controls",de.hidden=!0,de.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(de);function Me(){return H&&f()?H:Sh({mode:"migrate",state:z}).public}function Ae(C,V){g(),ue("action",C,V),j="",K(0),u()}de.querySelectorAll("[data-dig]").forEach(C=>C.onclick=()=>Ae("dig",{channel:Number(C.dataset.dig)})),de.querySelector("#drydock-fill").onclick=()=>Ae("pump",{direction:"fill"}),de.querySelector("#drydock-drain").onclick=()=>Ae("pump",{direction:"drain"}),de.querySelector("#drydock-reset").onclick=()=>Ae("reset");function te(C){O?(O.water!==C.water&&(B=2),O.floods!==C.floods&&(Q=3),!O.launched&&C.launched&&(ee=0)):ee=C.launched?1:0,O=C,de.querySelector("#drydock-readout").textContent=`каналы ${C.depths.join(" / ")} · вода ${C.water}/2 · переливы ${C.floods}`,de.querySelectorAll("[data-dig]").forEach(V=>{V.disabled=C.launched||C.water>0||C.depths[Number(V.dataset.dig)]===2}),de.querySelector("#drydock-fill").disabled=C.launched,de.querySelector("#drydock-drain").disabled=C.launched||C.water===0,y.forEach((V,X)=>{const re=1-C.depths[X]*.4;V.scale.y=re,V.position.y=.48+re/2,S[X].scale.setScalar(.45+C.depths[X]*.4)}),b.visible=C.water>0,b.position.y=.49+C.water*.39}function W(){const C=O||Me();return{action:H&&f()?"попробовать свой спуск":C.launched?"корабль в песок ↺":"спустить корабль",description:(H&&f()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+C.message}}function K(C){const V=Me(),X=JSON.stringify(V);X!==j&&(j=X,te(V),u()),B=Math.max(0,B-C),Q=Math.max(0,Q-C),F.visible=B>0&&V.water>0,k.visible=Q>0,I.rotation.z+=B>0?C*3:0,ee=V.launched?Math.min(1,ee+C/5):0;const re=ee*ee*(3-2*ee);R.position.x=-2+re*5.6;const G=Math.min(...V.depths),$=V.afloat?.94:1.15-G*.32;R.position.y=n.MathUtils.damp(R.position.y,$,4,C),R.rotation.z=n.MathUtils.damp(R.rotation.z,V.afloat?0:(V.depths[2]-V.depths[0])*.085,4,C)}return window.addEventListener("beznogim:state",({detail:C})=>{var X,re;const V=(re=(X=C.mechanics)==null?void 0:X.drydock)==null?void 0:re.public;V&&(H=V,j="")}),te(Me()),R.position.x=Me().launched?3.6:-2,{house:v,controls:de,update:K,card:W,run:()=>Ae(Me().launched?"reset":"launch"),inspect:()=>({source:H&&f()?"resident":"sandbox",...O,ship:R.position.toArray(),pitch:R.rotation.z,waterY:b.position.y,voyage:ee,sandHeights:y.map(C=>C.scale.y),floodVisible:k.visible})}}function bh(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,h)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):h;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Uf({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:h,changed:d,watching:u,localPlay:f}){var de,Me,Ae;const g=s([0,0,0],e);g.name="mechanical-bench";const v=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],v,g),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const p=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let te=0;te<7;te++)for(let W=0;W<9;W++)M.push(r([.55+(W-4)*.145,1.5+(3-te)*.14,-.683],[.13,.12,.02],m,g));const w=s([-1.05,1.24,-.38],g);w.name="core-gear",a([0,0,0],.3,.11,t.copper,w).rotation.x=Math.PI/2;const y=[];for(let te=0;te<12;te++){const W=te/12*Math.PI*2;let K=r([Math.cos(W)*.33,Math.sin(W)*.33,0],[.13,.13,.12],t.copper,w);K.rotation.z=W,y.push(K)}l([0,0,.06],.13,.025,t.dark,w,[0,0,0]);const b=s([-.4,1.12,-.38],g);l([0,0,0],.19,.035,t.dark,b,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,b);const S=s([0,0,0],g);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const R=s([-1.5,1,-.05],g);c([0,0,0],[.23,0,0],.04,t.metal,R),c([.23,0,0],[.23,.23,0],.04,t.copper,R),o([.23,.23,0],.08,t.rust,R);const _=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,_),a([0,.281,0],.29,.015,t.dark,_),l([0,.29,0],.33,.025,t.copper,_),l([0,.36,0],.33,.025,t.metal,_,[0,Math.PI/2,0]),h("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const T=Array.from({length:3},(te,W)=>o([.17+W*.3,2.23,-.82],.06,t.mint,g));let A=null,I=((Ae=(Me=(de=window.__beznogimState)==null?void 0:de.mechanics)==null?void 0:Me.bench)==null?void 0:Ae.public)||null,F,k="",N=0;try{A=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function z(te,W,K={}){const fe=bh({mode:te,tool:W,args:K,state:A});A=fe.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(A))}catch{}return fe}z("migrate");const H=document.createElement("div");H.id="bench-controls",H.hidden=!0,H.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(H);function O(){return I&&u()?I:bh({mode:"migrate",state:A}).public}function j(te,W){f(),z("action",te,W),k="",ue(0),d()}H.querySelectorAll("[data-part]").forEach(te=>te.onclick=()=>j("fit",{part:te.dataset.part,value:Number(te.dataset.value)})),H.querySelector("#bench-salvage").onclick=()=>j("salvage"),H.querySelector("#bench-restart").onclick=()=>j("restart");function B(te){F&&F.attempts!==te.attempts&&(N=3),F=te,H.querySelector("#bench-readout").textContent=`экран ${te.round+1}/3 · скорость ${te.speed} / нужно ${te.target}`,H.querySelectorAll("[data-part]").forEach(W=>{W.setAttribute("aria-pressed",String(te[W.dataset.part]===Number(W.dataset.value))),W.disabled=te.phase!=="ready"}),H.querySelector("#bench-salvage").disabled=!te.bucket,v.color.set(te.picture?"#16362c":"#e9e4cc"),v.emissive.set(te.picture?"#20382b":"#e9e4cc"),v.emissiveIntensity=te.picture?.1:.6,M.forEach((W,K)=>W.visible=!!te.picture&&p[te.picture-1][K]==="1"),y.forEach((W,K)=>W.visible=K<te.core*3),b.scale.setScalar(.75+te.belt*.25),S.visible=!te.bucket,T.forEach((W,K)=>W.visible=K<te.repairs)}const Q={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function ee(){const te=F||O();return{action:I&&u()?"собрать свой монитор":te.phase==="ejected"?"достать ядро":te.phase==="repaired"?te.round===2?"закончить работу":"следующий экран":te.phase==="complete"?"ещё раз":"крутить рукоятку",description:(I&&u()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+Q[te.phase]}}function ue(te){const W=O(),K=JSON.stringify(W);K!==k&&(k=K,B(W),d()),N=Math.max(0,N-te);const fe=Math.min(1,te*7),oe=W.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];w.position.lerp(new n.Vector3(...oe),fe),w.rotation.x=n.MathUtils.lerp(w.rotation.x,W.bucket?-Math.PI/2:0,fe);const P=N>0?W.core*2:W.picture?.4:0;w.rotation.z+=te*P,b.rotation.z-=te*P*W.belt,R.rotation.z+=te*P}return window.addEventListener("beznogim:state",({detail:te})=>{var K,fe;const W=(fe=(K=te.mechanics)==null?void 0:K.bench)==null?void 0:fe.public;W&&(I=W,k="")}),B(O()),w.position.set(...O().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:H,update:ue,card:ee,run:()=>{const te=O();j(te.phase==="ejected"?"salvage":te.phase==="repaired"?"next":te.phase==="complete"?"restart":"crank")},inspect:()=>({source:I&&u()?"resident":"sandbox",...F,corePosition:w.position.toArray(),coreAngle:w.rotation.z,driveAngle:b.rotation.z,litPixels:M.filter(te=>te.visible).length})}}const Eh=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function wh(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Th(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):wh();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,wh(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const h=Eh[e.round],d=h.weights.reduce((u,f,g)=>u+(e.loaded[g]?f+(e.pardoned?0:h.debt[g]):0),0);e.attempts++,d!==h.target?(e.status=d<h.target?"under":"over",i={ok:!1,reason:e.status,total:d,target:h.target}):(e.status=e.round===2?"complete":"delivered",h.weights.forEach((u,f)=>{e.loaded[f]&&e.delivered.push({id:`${e.run}:${e.round}:${f}`,weight:u})}),i={ok:!0,total:d,target:h.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Eh[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,h)=>c+(e.loaded[h]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Ff({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:h,batchStatic:d,changed:u,watching:f,localPlay:g}){var W,K,fe;const v=s([0,-1.5,24]);v.name="amnesty-bureau";const m=i("#9d8560"),p=i("#a1b56f"),M=i("#f1d29a"),w=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],w,v),r([3.65,-.14,0],[3.3,.5,7],w,v),r([0,-.8,0],[4.2,.1,6.7],t.dark,v);for(const oe of[-4.9,4.9])c([oe,0,-3],[oe,3.3,-3],.06,t.copper,v);h("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,v,{size:31}),h("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,v,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,v);const y=s([0,.2,1.15],v);for(let oe=0;oe<11;oe++)r([-2+oe*.4,0,0],[.38,.16,1.65],m,y);for(const oe of[-.72,.72])c([-2.2,.22,oe],[2.2,.22,oe],.045,t.copper,y);a([0,-.22,1.15],.32,.6,t.metal,v);const b=s([-2.55,.32,1.15],v);r([0,.12,0],[1.5,.18,1.35],t.metal,b);for(const oe of[-.52,.52])for(const P of[-.58,.58]){const C=l([oe,0,P],.17,.05,t.dark,b,[0,0,0]);C.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],v);c([0,-.5,0],[0,.2,0],.1,t.metal,S);const R=s([0,0,0],S);c([0,0,0],[0,.8,0],.065,t.copper,R),o([0,.8,0],.14,t.rust,R),h("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,v,{size:35});const _=s([.1,.1,-2.3],v);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const T=a([0,.7,0],.57,1.1,t.copper,_);l([0,1.28,0],.25,.045,t.dark,_);const A=Array.from({length:3},(oe,P)=>o([1.75+P*.34,2.15,-3.05],.095,t.mint,v)),I=Array.from({length:3},(oe,P)=>{const C=s([-3.6,.72,-2.1+P*1.08],v),V=o([0,0,0],[.28,.23,.57],p,C);V.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,C);const X=s([.45,.28,0],C);return r([0,0,0],[.29,.57,.4],M,X),r([0,0,.21],[.18,.045,.012],t.rust,X),{g:C,tax:X}});h("A",[-4.35,.75,-2.1],.28,.28,v),h("B",[-4.35,.75,-1.02],.28,.28,v),h("C",[-4.35,.75,.06],.28,.28,v),r([3.55,.8,-1.7],[2.75,.13,2.2],m,v);const F=Array.from({length:6},(oe,P)=>o([2.75+P%3*.7,1,-2.1+Math.floor(P/3)*.83],[.2,.19,.38],p,v));h("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,v,{size:39});const k=s([0,0,0],e);for(let oe=0;oe<15;oe++){const P=oe/14;r([-.6+Math.sin(P*Math.PI)*1.5,-1.55,17+oe*.3],[.9,.12,.65],w,k)}for(let oe=0;oe<5;oe++)r([-.8-oe*.6,-1.55,21.5],[.75,.12,.75],w,k);h("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,k,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,k),d(k,[]),d(v,[y,b,S,_,...I.map(oe=>oe.g),...F,...A]),d(y,[]),d(b,[]);let N=null,z=((fe=(K=(W=window.__beznogimState)==null?void 0:W.mechanics)==null?void 0:K.amnesty)==null?void 0:fe.public)||null,H,O="",j=0;try{N=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function B(oe,P,C={}){const V=Th({state:N,mode:oe,tool:P,args:C});N=V.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(N))}catch{}return V}B("migrate");const Q=document.createElement("div");Q.id="amnesty-controls",Q.hidden=!0,Q.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(Q);function ee(){return z&&f()?z:Th({state:N,mode:"migrate"}).public}function ue(oe,P){g(),B("action",oe,P),O="",te(0),u()}for(const oe of Q.querySelectorAll("[data-load]"))oe.onclick=()=>ue("load",{index:Number(oe.dataset.load)});Q.querySelector("#amnesty-pardon").onclick=()=>ue("amnesty"),Q.querySelector("#amnesty-restart").onclick=()=>ue("restart");const de={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function Me(oe){H=oe;const P=oe.status==="delivered"||oe.status==="complete";Q.querySelector("#amnesty-readout").textContent=`рейс ${oe.round+1}/3 · груз ${oe.total} / нужно ${oe.target}`,Q.querySelectorAll("[data-load]").forEach((C,V)=>{C.textContent=`${["A","B","C"][V]} · ${oe.weights[V]}${oe.debt[V]?` + ${oe.debt[V]} бумага`:""}`,C.setAttribute("aria-pressed",String(oe.loaded[V])),C.disabled=P}),Q.querySelector("#amnesty-pardon").disabled=oe.pardoned||P,Q.querySelector("#amnesty-pardon").textContent=oe.pardoned?"налог отменён":"отменить налог",T.scale.y=oe.target/4,A.forEach((C,V)=>C.visible=V<(oe.status==="complete"?3:oe.round)),F.forEach((C,V)=>C.visible=V<oe.delivered.length),I.forEach((C,V)=>{C.tax.visible=!oe.pardoned||j<.99,C.g.visible=!P||!oe.loaded[V],C.g.scale.setScalar(.8+oe.weights[V]*.08)})}function Ae(){const oe=H||ee();return{action:z&&f()?"войти в свою амнистию":oe.status==="delivered"?"следующий рейс":oe.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(z&&f()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+de[oe.status]}}function te(oe,P){const C=ee(),V=JSON.stringify(C);V!==O&&(O=V,Me(C),u());const X=C.status==="delivered"||C.status==="complete",re=(G,$)=>n.MathUtils.lerp(G,$,Math.min(1,oe*5));y.rotation.z=re(y.rotation.z,C.tilt),b.position.x=re(b.position.x,X?3:-2.55),R.rotation.z=re(R.rotation.z,C.pardoned?-.65:0),j=re(j,C.pardoned?1:0),I.forEach(G=>{G.tax.position.y=.28+j*2.5,G.tax.rotation.z=j*.8,G.tax.visible=!C.pardoned||j<.99}),F.forEach((G,$)=>G.visible=$<C.delivered.length-(X&&b.position.x<2.9?2:0)),I.forEach((G,$)=>{const ce=C.loaded[$];G.g.visible=!X||!ce||b.position.x<2.9,G.g.position.x=re(G.g.position.x,ce?b.position.x+($-1)*.42:-3.6),G.g.position.y=re(G.g.position.y,ce?.86:.72),G.g.position.z=re(G.g.position.z,ce?1.15:-2.1+$*1.08)})}return window.addEventListener("beznogim:state",({detail:oe})=>{var C,V;const P=(V=(C=oe.mechanics)==null?void 0:C.amnesty)==null?void 0:V.public;P&&(z=P,O="")}),j=ee().pardoned?1:0,Me(ee()),{house:v,controls:Q,update:te,card:Ae,run:()=>ue(H.status==="delivered"?"next":H.status==="complete"?"restart":"dispatch"),inspect:()=>({source:z&&f()?"resident":"sandbox",...H,bridgeTilt:y.rotation.z,cartX:b.position.x,cargoPositions:I.map(oe=>oe.g.position.toArray()),taxVisible:I.map(oe=>oe.tax.visible),paperY:I.map(oe=>oe.tax.position.y),handleAngle:R.rotation.z,deliveredVisible:F.filter(oe=>oe.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="186",vi={ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ku=0,Gl=1,Gu=2,Ds=1,Vu=2,Cs=3,ki=0,dn=1,Pn=2,oi=0,Is=1,Vl=2,Hl=3,Wl=4,Hu=5,es=100,Wu=101,Xu=102,qu=103,Yu=104,Zu=200,$u=201,Ju=202,Ku=203,lc=204,cc=205,Qu=206,ju=207,ed=208,td=209,nd=210,id=211,sd=212,rd=213,od=214,Po=0,Lo=1,Do=2,Os=3,Io=4,No=5,Uo=6,Fo=7,hc=0,ad=1,ld=2,Yn=0,uc=1,dc=2,fc=3,Ea=4,pc=5,mc=6,gc=7,_c=300,Gi=301,rs=302,bo=303,Eo=304,Dr=306,yr=1e3,ri=1001,Oo=1002,Zt=1003,cd=1004,lr=1005,Jt=1006,wo=1007,Ni=1008,gn=1009,vc=1010,xc=1011,zs=1012,wa=1013,Jn=1014,In=1015,Kn=1016,Ta=1017,Aa=1018,Bs=1020,yc=35902,Mc=35899,Sc=1021,bc=1022,Nn=1023,li=1026,Ui=1027,Ra=1028,Ca=1029,Vi=1030,Pa=1031,La=1033,dr=33776,fr=33777,pr=33778,mr=33779,zo=35840,Bo=35841,ko=35842,Go=35843,Vo=36196,Ho=37492,Wo=37496,Xo=37488,qo=37489,Mr=37490,Yo=37491,Zo=37808,$o=37809,Jo=37810,Ko=37811,Qo=37812,jo=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,oa=37820,aa=37821,la=36492,ca=36494,ha=36495,ua=36283,da=36284,Sr=36285,fa=36286,hd=3200,pa=0,ud=1,mi="",sn="srgb",br="srgb-linear",Er="linear",vt="srgb",To=7680,dd=519,fd=512,pd=513,md=514,Da=515,gd=516,_d=517,Ia=518,vd=519,xd=35044,Xl="300 es",qn=2e3,ks=2001;function Of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yd(){const n=ma("canvas");return n.style.display="block",n}const Ah={};function ql(...n){const e="THREE."+n.shift();console.log(e,...n)}function Md(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=Md(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=Md(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function is(...n){const e=n.join(" ");e in Ah||(Ah[e]=!0,Qe(...n))}function zf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Bf={[Po]:Lo,[Do]:Uo,[Io]:Fo,[Os]:No,[Lo]:Po,[Uo]:Do,[Fo]:Io,[No]:Os};class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rh=1234567;const gr=Math.PI/180,wr=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ec(n,e){return(n%e+e)%e}function kf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Gf(n,e,t){return n!==e?(t-n)/(e-n):0}function _r(n,e,t){return(1-t)*n+t*e}function Vf(n,e,t,i){return _r(n,e,1-Math.exp(-t*i))}function Hf(n,e=1){return e-Math.abs(Ec(n,e*2)-e)}function Wf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yf(n,e){return n+Math.random()*(e-n)}function Zf(n){return n*(.5-Math.random())}function $f(n){n!==void 0&&(Rh=n);let e=Rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jf(n){return n*gr}function Kf(n){return n*wr}function Qf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function jf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ep(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mn={DEG2RAD:gr,RAD2DEG:wr,generateUUID:ls,clamp:rt,euclideanModulo:Ec,mapLinear:kf,inverseLerp:Gf,lerp:_r,damp:Vf,pingpong:Hf,smoothstep:Wf,smootherstep:Xf,randInt:qf,randFloat:Yf,randFloatSpread:Zf,seededRandom:$f,degToRad:Jf,radToDeg:Kf,isPowerOfTwo:Qf,ceilPowerOfTwo:jf,floorPowerOfTwo:ep,setQuaternionFromProperEuler:tp,normalize:ln,denormalize:Rs},oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;let ye=oh;class Si{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+v*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+v*a;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-a*f,e[t+2]=l*g+h*f+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ah=class ah{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;let D=ah;const sl=new D,Ch=new Si,lh=class lh{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],w=s[4],y=s[7],b=s[2],S=s[5],R=s[8];return r[0]=o*v+a*M+c*b,r[3]=o*m+a*w+c*S,r[6]=o*p+a*y+c*R,r[1]=l*v+h*M+d*b,r[4]=l*m+h*w+d*S,r[7]=l*p+h*y+d*R,r[2]=u*v+f*M+g*b,r[5]=u*m+f*w+g*S,r[8]=u*p+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(e,t)),this}rotate(e){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;let et=lh;const rl=new et,Ph=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function np(){const n={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[br]:{primaries:e,whitePoint:i,transfer:Er,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const lt=np();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ps;class Sd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=ma("canvas")),ps.width=e.width,ps.height=e.height;const s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ip=0;class Na{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let sp=0;const al=new D;class Qt extends Ei{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=ri,s=ri,r=Jt,o=Ni,a=Nn,c=gn,l=Qt.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ls(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=_c;Qt.DEFAULT_ANISOTROPY=1;const ch=class ch{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(f+1)/2,b=(p+1)/2,S=(h+u)/4,R=(d+v)/4,_=(g+m)/4;return w>y&&w>b?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=R/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;let Dt=ch;class bd extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Qt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Na(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends bd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wc extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Sa=class Sa{constructor(e,t,i,s,r,o,a,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,v,m)}set(e,t,i,s,r,o,a,c,l,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;t[0]=u-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,op)}lookAt(e,t,i){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ci.crossVectors(i,yn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ci.crossVectors(i,yn)),Ci.normalize(),qr.crossVectors(yn,Ci),s[0]=Ci.x,s[4]=qr.x,s[8]=yn.x,s[1]=Ci.y,s[5]=qr.y,s[9]=yn.y,s[2]=Ci.z,s[6]=qr.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],w=i[7],y=i[11],b=i[15],S=s[0],R=s[4],_=s[8],T=s[12],A=s[1],I=s[5],F=s[9],k=s[13],N=s[2],z=s[6],H=s[10],O=s[14],j=s[3],B=s[7],Q=s[11],ee=s[15];return r[0]=o*S+a*A+c*N+l*j,r[4]=o*R+a*I+c*z+l*B,r[8]=o*_+a*F+c*H+l*Q,r[12]=o*T+a*k+c*O+l*ee,r[1]=h*S+d*A+u*N+f*j,r[5]=h*R+d*I+u*z+f*B,r[9]=h*_+d*F+u*H+f*Q,r[13]=h*T+d*k+u*O+f*ee,r[2]=g*S+v*A+m*N+p*j,r[6]=g*R+v*I+m*z+p*B,r[10]=g*_+v*F+m*H+p*Q,r[14]=g*T+v*k+m*O+p*ee,r[3]=M*S+w*A+y*N+b*j,r[7]=M*R+w*I+y*z+b*B,r[11]=M*_+w*F+y*H+b*Q,r[15]=M*T+w*k+y*O+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*f-l*u,w=a*f-l*d,y=a*u-c*d,b=o*f-l*h,S=o*u-c*h,R=o*d-a*h;return t*(v*M-m*w+p*y)-i*(g*M-m*b+p*S)+s*(g*w-v*b+p*R)-r*(g*y-v*S+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*a-i*o,w=t*c-s*o,y=t*l-r*o,b=i*c-s*a,S=i*l-r*a,R=s*l-r*c,_=h*v-d*g,T=h*m-u*g,A=h*p-f*g,I=d*m-u*v,F=d*p-f*v,k=u*p-f*m,N=M*k-w*F+y*I+b*A-S*T+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=(a*k-c*F+l*I)*z,e[1]=(s*F-i*k-r*I)*z,e[2]=(v*R-m*S+p*b)*z,e[3]=(u*S-d*R-f*b)*z,e[4]=(c*A-o*k-l*T)*z,e[5]=(t*k-s*A+r*T)*z,e[6]=(m*y-g*R-p*w)*z,e[7]=(h*R-u*y+f*w)*z,e[8]=(o*F-a*A+l*_)*z,e[9]=(i*A-t*F-r*_)*z,e[10]=(g*S-v*y+p*M)*z,e[11]=(d*y-h*S-f*M)*z,e[12]=(a*T-o*I-c*_)*z,e[13]=(t*I-i*T+s*_)*z,e[14]=(v*w-g*b-m*M)*z,e[15]=(h*b-d*w+u*M)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,v=o*h,m=o*d,p=a*d,M=c*l,w=c*h,y=c*d,b=i.x,S=i.y,R=i.z;return s[0]=(1-(v+p))*b,s[1]=(f+y)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(u+p))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ms.set(s[0],s[1],s[2]).length();const a=ms.set(s[4],s[5],s[6]).length(),c=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);const l=1/o,h=1/a,d=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=qn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ks)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===qn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ks)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sa.prototype.isMatrix4=!0;let ft=Sa;const ms=new D,Gn=new ft,rp=new D(0,0,0),op=new D(1,1,1),Ci=new D,qr=new D,yn=new D,Dh=new ft,Ih=new Si;class bi{constructor(e=0,t=0,i=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Ua{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const Nh=new D,gs=new Si,hi=new ft,Yr=new D,Ks=new D,lp=new D,cp=new Si,Uh=new D(1,0,0),Fh=new D(0,1,0),Oh=new D(0,0,1),zh={type:"added"},hp={type:"removed"},_s={type:"childadded",child:null},ll={type:"childremoved",child:null};class Ft extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new D,t=new bi,i=new Si,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new et}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ks,Yr,this.up):hi.lookAt(Yr,Ks,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(hi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),_s.child=e,this.dispatchEvent(_s),_s.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Ec(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=cl(o,r,e+1/3),this.g=cl(o,r,e),this.b=cl(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return lt.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,r=nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=sn){lt.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Zr);const i=_r(Pi.h,Zr.h,t),s=_r(Pi.s,Zr.s,t),r=_r(Pi.l,Zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ot;ot.NAMES=wd;class Fa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Td extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vn=new D,ui=new D,hl=new D,di=new D,vs=new D,xs=new D,Bh=new D,ul=new D,dl=new D,fl=new D,pl=new Dt,ml=new Dt,gl=new Dt;class Ln{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),ui.subVectors(i,t),hl.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(ui),c=Vn.dot(hl),l=ui.dot(ui),h=ui.dot(hl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),ui.subVectors(e,t),Vn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Vn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;vs.subVectors(s,i),xs.subVectors(r,i),ul.subVectors(e,i);const c=vs.dot(ul),l=xs.dot(ul);if(c<=0&&l<=0)return t.copy(i);dl.subVectors(e,s);const h=vs.dot(dl),d=xs.dot(dl);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(vs,o);fl.subVectors(e,r);const f=vs.dot(fl),g=xs.dot(fl);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(xs,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Bh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Bh,a);const p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(vs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Jr.subVectors(this.max,Qs),ys.subVectors(e.a,Qs),Ms.subVectors(e.b,Qs),Ss.subVectors(e.c,Qs),Li.subVectors(Ms,ys),Di.subVectors(Ss,Ms),Zi.subVectors(ys,Ss);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Zi.y,Zi.x,0];return!_l(t,ys,Ms,Ss,Jr)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,ys,Ms,Ss,Jr))?!1:(Kr.crossVectors(Li,Di),t=[Kr.x,Kr.y,Kr.z],_l(t,ys,Ms,Ss,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,$r=new Wi,ys=new D,Ms=new D,Ss=new D,Li=new D,Di=new D,Zi=new D,Qs=new D,Jr=new D,Kr=new D,$i=new D;function _l(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$i.fromArray(n,r);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const kt=new D,Qr=new ye;let dp=0;class Fn extends Ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xd,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ac extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const fp=new Wi,js=new D,vl=new D;class Xi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(vl)),this.expandByPoint(js.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pp=0;const Tn=new ft,xl=new Ft,bs=new D,Mn=new Wi,er=new Wi,qt=new D;class Ot extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Ac:Tc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Mn.min,er.min),Mn.expandByPoint(qt),qt.addVectors(Mn.max,er.max),Mn.expandByPoint(qt)):(Mn.expandByPoint(er.min),Mn.expandByPoint(er.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(e,l),qt.add(bs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new D,c[_]=new D;const l=new D,h=new D,d=new D,u=new ye,f=new ye,g=new ye,v=new D,m=new D;function p(_,T,A){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[_].add(v),a[T].add(v),a[A].add(v),c[_].add(m),c[T].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){const A=M[_],I=A.start,F=A.count;for(let k=I,N=I+F;k<N;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new D,y=new D,b=new D,S=new D;function R(_){b.fromBufferAttribute(s,_),S.copy(b);const T=a[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(S,T);const I=y.dot(c[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,T=M.length;_<T;++_){const A=M[_],I=A.start,F=A.count;for(let k=I,N=I+F;k<N;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Fn(u,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new D,mp=new D,gp=new et;class si{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=yl.subVectors(i,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gp.getNormalMatrix(e),s=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _p=0;class qi extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Is,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pi=new D,Ml=new D,jr=new D,eo=new D;class Xs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ml.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),eo.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=eo.dot(this.direction),c=-eo.dot(jr),l=eo.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ml).addScaledVector(jr,u),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,p=i.x-o.x,M=i.y-o.y,w=i.z-o.z,y=Math.abs(c),b=Math.abs(l),S=Math.abs(h);let R,_,T,A,I,F,k,N,z,H,O,j;if(y>=b&&y>=S?(T=c,F=d,z=g,j=p,c>=0?(R=l,_=h,A=u,I=f,k=v,N=m,H=M,O=w):(R=h,_=l,A=f,I=u,k=m,N=v,H=w,O=M)):b>=S?(T=l,F=u,z=v,j=M,l>=0?(R=h,_=c,A=f,I=d,k=m,N=g,H=w,O=p):(R=c,_=h,A=d,I=f,k=g,N=m,H=p,O=w)):(T=h,F=f,z=m,j=w,h>=0?(R=c,_=l,A=d,I=u,k=g,N=v,H=p,O=M):(R=l,_=c,A=u,I=d,k=v,N=g,H=M,O=p)),T===0)return null;const B=R/T,Q=_/T,ee=1/T,ue=A-B*F,de=I-Q*F,Me=k-B*z,Ae=N-Q*z,te=H-B*j,W=O-Q*j,K=te*Ae-W*Me,fe=ue*W-de*te,oe=Me*de-Ae*ue;if(s){if(K<0||fe<0||oe<0)return null}else if((K<0||fe<0||oe<0)&&(K>0||fe>0||oe>0))return null;const P=K+fe+oe;if(P===0)return null;const C=ee*(K*F+fe*z+oe*j);return(P>0?C<0:C>0)?null:this.at(C/P,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ir extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kh=new ft,Ji=new Xs,to=new Xi,Gh=new D,no=new D,io=new D,so=new D,Sl=new D,ro=new D,Vh=new D,oo=new D;class fn extends Ft{constructor(e=new Ot,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Sl.fromBufferAttribute(d,e),o?ro.addScaledVector(Sl,h):ro.addScaledVector(Sl.sub(t),h))}t.add(ro)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(to.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(to,Gh)===null||Ji.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){const S=a.getX(y),R=a.getX(y+1),_=a.getX(y+2);s=ao(this,p,e,i,l,h,d,S,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=ao(this,o,e,i,l,h,d,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){const S=y,R=y+1,_=y+2;s=ao(this,p,e,i,l,h,d,S,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,w=m+1,y=m+2;s=ao(this,o,e,i,l,h,d,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function vp(n,e,t,i,s,r,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ki,a),c===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(oo);return l<t.near||l>t.far?null:{distance:l,point:oo.clone(),object:n}}function ao(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,no),n.getVertexPosition(c,io),n.getVertexPosition(l,so);const h=vp(n,e,t,i,no,io,so,Vh);if(h){const d=new D;Ln.getBarycoord(Vh,no,io,so,d),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,c,l,d,new ye)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,c,l,d,new ye)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};Ln.getNormal(no,io,so,u.normal),h.face=u,h.barycoord=d}return h}class Rc extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Zt,h=Zt,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new ft,Hh=new ft,lo=[],Wh=new Wi,xp=new ft,tr=new fn,nr=new Xi;class Zl extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),Wh.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(Wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),nr.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Hh.multiplyMatrices(i,Es),tr.matrixWorld=Hh,tr.raycast(e,lo);for(let o=0,a=lo.length;o<a;o++){const c=lo[o];c.instanceId=r,c.object=this,t.push(c)}lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rc(new Float32Array(s*this.count),s,this.count,Ra,In));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ki=new Xi,yp=new ye(.5,.5),co=new D;class Oa{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,o=new si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],w=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-o,f-h,p-g,b-M).normalize(),s[1].setComponents(l+o,f+h,p+g,b+M).normalize(),s[2].setComponents(l+a,f+d,p+v,b+w).normalize(),s[3].setComponents(l-a,f-d,p-v,b-w).normalize(),i)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,f-u,p-m,b-y).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-y).normalize(),t===qn)s[5].setComponents(l+c,f+u,p+m,b+y).normalize();else if(t===ks)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);const t=yp.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cc extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ga=new D,_a=new D,Xh=new ft,ir=new Xs,ho=new Xi,bl=new D,qh=new D;class Mp extends Ft{constructor(e=new Ot,t=new Cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ga.fromBufferAttribute(t,s-1),_a.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ga.distanceTo(_a);e.setAttribute("lineDistance",new pt(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;Xh.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=h.getX(v),M=h.getX(v+1),w=uo(this,e,ir,c,p,M,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=uo(this,e,ir,c,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=uo(this,e,ir,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=uo(this,e,ir,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ga.fromBufferAttribute(a,s),_a.fromBufferAttribute(a,r),t.distanceSqToSegment(ga,_a,bl,qh)>i)return;bl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(bl);if(!(l<e.near||l>e.far))return{distance:l,point:qh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Pc extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yh=new ft,$l=new Xs,fo=new Xi,po=new D;class Ad extends Ft{constructor(e=new Ot,t=new Pc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Yh.copy(s).invert(),$l.copy(e.ray).applyMatrix4(Yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);po.fromBufferAttribute(d,m),Zh(po,m,c,s,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)po.fromBufferAttribute(d,g),Zh(po,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zh(n,e,t,i,s,r,o){const a=$l.distanceSqToPoint(n);if(a<t){const c=new D;$l.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Lc extends Qt{constructor(e=[],t=Gi,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dc extends Qt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gs extends Qt{constructor(e,t,i=Jn,s,r,o,a=Zt,c=Zt,l,h=li,d=1){if(h!==li&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rd extends Gs{constructor(e,t=Jn,i=Gi,s,r,o=Zt,a=Zt,c,l=li){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ic extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wi extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function g(v,m,p,M,w,y,b,S,R,_,T){const A=y/R,I=b/_,F=y/2,k=b/2,N=S/2,z=R+1,H=_+1;let O=0,j=0;const B=new D;for(let Q=0;Q<H;Q++){const ee=Q*I-k;for(let ue=0;ue<z;ue++){const de=ue*A-F;B[v]=de*M,B[m]=ee*w,B[p]=N,l.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[p]=S>0?1:-1,h.push(B.x,B.y,B.z),d.push(ue/R),d.push(1-Q/_),O+=1}}for(let Q=0;Q<_;Q++)for(let ee=0;ee<R;ee++){const ue=u+ee+z*Q,de=u+ee+z*(Q+1),Me=u+(ee+1)+z*(Q+1),Ae=u+(ee+1)+z*Q;c.push(ue,de,Ae),c.push(de,Me,Ae),j+=6}a.addGroup(f,j,T),f+=j,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class za extends Ot{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nr extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function M(){const y=new D,b=new D;let S=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const T=[],A=_/r,I=A*(t-e)+e;for(let F=0;F<=s;F++){const k=F/s,N=k*c+a,z=Math.sin(N),H=Math.cos(N);b.x=I*z,b.y=-A*i+m,b.z=I*H,d.push(b.x,b.y,b.z),y.set(z,R,H).normalize(),u.push(y.x,y.y,y.z),f.push(k,1-A),T.push(g++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const A=v[T][_],I=v[T+1][_],F=v[T+1][_+1],k=v[T][_+1];(e>0||T!==0)&&(h.push(A,I,k),S+=3),(t>0||T!==r-1)&&(h.push(I,F,k),S+=3)}l.addGroup(p,S,0),p+=S}function w(y){const b=g,S=new ye,R=new D;let _=0;const T=y===!0?e:t,A=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=s;F++){const N=F/s*c+a,z=Math.cos(N),H=Math.sin(N);R.x=T*H,R.y=m*A,R.z=T*z,d.push(R.x,R.y,R.z),u.push(0,A,0),S.x=z*.5+.5,S.y=H*.5*A+.5,f.push(S.x,S.y),g++}for(let F=0;F<s;F++){const k=b+F,N=I+F;y===!0?h.push(N,N+1,k):h.push(N+1,N,k),_+=3}l.addGroup(p,_,y===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cs extends Nr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new cs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ba extends Ot{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new D,y=new D,b=new D;for(let S=0;S<t.length;S+=3)f(t[S+0],w),f(t[S+1],y),f(t[S+2],b),c(w,y,b,M)}function c(M,w,y,b){const S=b+1,R=[];for(let _=0;_<=S;_++){R[_]=[];const T=M.clone().lerp(y,_/S),A=w.clone().lerp(y,_/S),I=S-_;for(let F=0;F<=I;F++)F===0&&_===S?R[_][F]=T:R[_][F]=T.clone().lerp(A,F/I)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){const A=Math.floor(T/2);T%2===0?(u(R[_][A+1]),u(R[_+1][A]),u(R[_][A])):(u(R[_][A+1]),u(R[_+1][A+1]),u(R[_+1][A]))}}function l(M){const w=new D;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const M=new D;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const y=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(y,1-b)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const w=o[M+0],y=o[M+2],b=o[M+4],S=Math.max(w,y,b),R=Math.min(w,y,b);S>.9&&R<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){const y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const M=new D,w=new D,y=new D,b=new D,S=new ye,R=new ye,_=new ye;for(let T=0,A=0;T<r.length;T+=9,A+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),S.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),b.copy(M).add(w).add(y).divideScalar(3);const I=m(b);v(S,A+0,M,I),v(R,A+2,w,I),v(_,A+4,y,I)}}function v(M,w,y,b){b<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.vertices,e.indices,e.radius,e.detail)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,s=[],r=[],o=[],a=new D,c=new ft;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ka extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cd extends ka{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const $h=new D,Jh=new D,El=new Nc,wl=new Nc,Tl=new Nc;class Uc extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Jh.subVectors(s[0],s[1]).add(s[0]),l=Jh);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$h),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),El.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),wl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),Tl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(El.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),wl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Tl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(El.calc(c),wl.calc(c),Tl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Sp(n,e){const t=1-n;return t*t*e}function bp(n,e){return 2*(1-n)*n*e}function Ep(n,e){return n*n*e}function vr(n,e,t,i){return Sp(n,e)+bp(n,t)+Ep(n,i)}function wp(n,e){const t=1-n;return t*t*t*e}function Tp(n,e){const t=1-n;return 3*t*t*n*e}function Ap(n,e){return 3*(1-n)*n*n*e}function Rp(n,e){return n*n*n*e}function xr(n,e,t,i,s){return wp(n,e)+Tp(n,t)+Ap(n,i)+Rp(n,s)}class Fc extends Qn{constructor(e=new ye,t=new ye,i=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ye){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pd extends Qn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Oc extends Qn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ld extends Qn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zc extends Qn{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends Qn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y),vr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kc extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Kh(a,c.x,l.x,h.x,d.x),Kh(a,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var va=Object.freeze({__proto__:null,ArcCurve:Cd,CatmullRomCurve3:Uc,CubicBezierCurve:Fc,CubicBezierCurve3:Pd,EllipseCurve:ka,LineCurve:Oc,LineCurve3:Ld,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Bc,SplineCurve:kc});class Dd extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new va[s.type]().fromJSON(s))}return this}}class Jl extends Dd{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Oc(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new zc(this.currentPoint.clone(),new ye(e,t),new ye(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Fc(this.currentPoint.clone(),new ye(e,t),new ye(i,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new kc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new ka(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ur extends Jl{constructor(e){super(e),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Jl().fromJSON(s))}return this}}function Cp(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Id(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Np(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let h=a,d=c;for(let u=t;u<s;u+=t){const f=n[u],g=n[u+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return Tr(r,o,t,a,c,l,0),o}function Id(n,e,t,i,s){let r;if(s===Xp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Qh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Qh(o/i|0,n[o],n[o+1],r);return r&&Vs(r,r.next)&&(Rr(r),r=r.next),r}function os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vs(t,t.next)||It(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Tr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Bp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Lp(n,i,s,r):Pp(n)){e.push(c.i,n.i,l.i),Rr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Dp(os(n),e),Tr(n,e,t,i,s,r,2)):o===2&&Ip(n,e,t,i,s,r):Tr(os(n),e,t,i,s,r,1);break}}}function Pp(n){const e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&cr(s,a,r,c,o,l,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,c,l),g=Math.min(h,d,u),v=Math.max(a,c,l),m=Math.max(h,d,u),p=Kl(f,g,e,t,i),M=Kl(v,m,e,t,i);let w=n.prevZ,y=n.nextZ;for(;w&&w.z>=p&&y&&y.z<=M;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&cr(a,h,c,d,l,u,w.x,w.y)&&It(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&cr(a,h,c,d,l,u,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&cr(a,h,c,d,l,u,w.x,w.y)&&It(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&cr(a,h,c,d,l,u,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Dp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Vs(i,s)&&Ud(i,t,t.next,s)&&Ar(i,s)&&Ar(s,i)&&(e.push(i.i,t.i,s.i),Rr(t),Rr(t.next),t=n=s),t=t.next}while(t!==n);return os(t)}function Ip(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vp(o,a)){let c=Fd(o,a);o=os(o,o.next),c=os(c,c.next),Tr(o,e,t,i,s,r,0),Tr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Np(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Id(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Gp(l))}s.sort(Up);for(let r=0;r<s.length;r++)t=Fp(s[r],t);return t}function Up(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Fp(n,e){const t=Op(n,e);if(!t)return e;const i=Fd(t,n);return os(i,i.next),os(t,t.next)}function Op(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Vs(n,t))return t;do{if(Vs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Nd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);Ar(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&zp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function zp(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function Bp(n,e,t,i){let s=n;do s.z===0&&(s.z=Kl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kp(s)}function kp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Kl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Gp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Nd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function cr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Nd(n,e,t,i,s,r,o,a)}function Vp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Hp(n,e)&&(Ar(n,e)&&Ar(e,n)&&Wp(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||Vs(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vs(n,e){return n.x===e.x&&n.y===e.y}function Ud(n,e,t,i){const s=go(It(n,e,t)),r=go(It(n,e,i)),o=go(It(t,i,n)),a=go(It(t,i,e));return!!(s!==r&&o!==a||s===0&&mo(n,t,e)||r===0&&mo(n,i,e)||o===0&&mo(t,n,i)||a===0&&mo(t,e,i))}function mo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function go(n){return n>0?1:n<0?-1:0}function Hp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ar(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function Wp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Fd(n,e){const t=Ql(n.i,n.x,n.y),i=Ql(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Qh(n,e,t,i){const s=Ql(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Rr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ql(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class qp{static triangulate(e,t,i=2){return Cp(e,t,i)}}class ns{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ns.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];jh(e),eu(i,e);let o=e.length;t.forEach(jh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,eu(i,t[c]);const a=qp.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function jh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function eu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class qs extends Ot{constructor(e=new Ur([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Yp;let w,y=!1,b,S,R,_;if(p){w=p.getSpacedPoints(h),y=!0,u=!1;const X=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,X),S=new D,R=new D,_=new D}u||(m=0,f=0,g=0,v=0);const T=a.extractPoints(l);let A=T.shape;const I=T.holes;if(!ns.isClockWise(A)){A=A.reverse();for(let X=0,re=I.length;X<re;X++){const G=I[X];ns.isClockWise(G)&&(I[X]=G.reverse())}}function k(X){const G=10000000000000001e-36;let $=X[0];for(let ce=1;ce<=X.length;ce++){const Z=ce%X.length,he=X[Z],be=he.x-$.x,Ee=he.y-$.y,U=be*be+Ee*Ee,He=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs($.x),Math.abs($.y)),Fe=G*He*He;if(U<=Fe){X.splice(Z,1),ce--;continue}$=he}}k(A),I.forEach(k);const N=I.length,z=A;for(let X=0;X<N;X++){const re=I[X];A=A.concat(re)}function H(X,re,G){return re||ct("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(re,G)}const O=A.length;function j(X,re,G){let $,ce,Z;const he=X.x-re.x,be=X.y-re.y,Ee=G.x-X.x,U=G.y-X.y,He=he*he+be*be,Fe=he*U-be*Ee;if(Math.abs(Fe)>Number.EPSILON){const L=Math.sqrt(He),x=Math.sqrt(Ee*Ee+U*U),J=re.x-be/L,ne=re.y+he/L,ae=G.x-U/x,xe=G.y+Ee/x,we=((ae-J)*U-(xe-ne)*Ee)/(he*U-be*Ee);$=J+he*we-X.x,ce=ne+be*we-X.y;const pe=$*$+ce*ce;if(pe<=2)return new ye($,ce);Z=Math.sqrt(pe/2)}else{let L=!1;he>Number.EPSILON?Ee>Number.EPSILON&&(L=!0):he<-Number.EPSILON?Ee<-Number.EPSILON&&(L=!0):Math.sign(be)===Math.sign(U)&&(L=!0),L?($=-be,ce=he,Z=Math.sqrt(He)):($=he,ce=be,Z=Math.sqrt(He/2))}return new ye($/Z,ce/Z)}const B=[];for(let X=0,re=z.length,G=re-1,$=X+1;X<re;X++,G++,$++)G===re&&(G=0),$===re&&($=0),B[X]=j(z[X],z[G],z[$]);const Q=[];let ee,ue=B.concat();for(let X=0,re=N;X<re;X++){const G=I[X];ee=[];for(let $=0,ce=G.length,Z=ce-1,he=$+1;$<ce;$++,Z++,he++)Z===ce&&(Z=0),he===ce&&(he=0),ee[$]=j(G[$],G[Z],G[he]);Q.push(ee),ue=ue.concat(ee)}let de;if(m===0)de=ns.triangulateShape(z,I);else{const X=[],re=[];for(let G=0;G<m;G++){const $=G/m,ce=f*Math.cos($*Math.PI/2),Z=g*Math.sin($*Math.PI/2)+v;for(let he=0,be=z.length;he<be;he++){const Ee=H(z[he],B[he],Z);fe(Ee.x,Ee.y,-ce),$===0&&X.push(Ee)}for(let he=0,be=N;he<be;he++){const Ee=I[he];ee=Q[he];const U=[];for(let He=0,Fe=Ee.length;He<Fe;He++){const L=H(Ee[He],ee[He],Z);fe(L.x,L.y,-ce),$===0&&U.push(L)}$===0&&re.push(U)}}de=ns.triangulateShape(X,re)}const Me=de.length,Ae=g+v;for(let X=0;X<O;X++){const re=u?H(A[X],ue[X],Ae):A[X];y?(R.copy(b.normals[0]).multiplyScalar(re.x),S.copy(b.binormals[0]).multiplyScalar(re.y),_.copy(w[0]).add(R).add(S),fe(_.x,_.y,_.z)):fe(re.x,re.y,0)}for(let X=1;X<=h;X++)for(let re=0;re<O;re++){const G=u?H(A[re],ue[re],Ae):A[re];y?(R.copy(b.normals[X]).multiplyScalar(G.x),S.copy(b.binormals[X]).multiplyScalar(G.y),_.copy(w[X]).add(R).add(S),fe(_.x,_.y,_.z)):fe(G.x,G.y,d/h*X)}for(let X=m-1;X>=0;X--){const re=X/m,G=f*Math.cos(re*Math.PI/2),$=g*Math.sin(re*Math.PI/2)+v;for(let ce=0,Z=z.length;ce<Z;ce++){const he=H(z[ce],B[ce],$);fe(he.x,he.y,d+G)}for(let ce=0,Z=I.length;ce<Z;ce++){const he=I[ce];ee=Q[ce];for(let be=0,Ee=he.length;be<Ee;be++){const U=H(he[be],ee[be],$);y?fe(U.x,U.y+w[h-1].y,w[h-1].x+G):fe(U.x,U.y,d+G)}}}te(),W();function te(){const X=s.length/3;if(u){let re=0,G=O*re;for(let $=0;$<Me;$++){const ce=de[$];oe(ce[2]+G,ce[1]+G,ce[0]+G)}re=h+m*2,G=O*re;for(let $=0;$<Me;$++){const ce=de[$];oe(ce[0]+G,ce[1]+G,ce[2]+G)}}else{for(let re=0;re<Me;re++){const G=de[re];oe(G[2],G[1],G[0])}for(let re=0;re<Me;re++){const G=de[re];oe(G[0]+O*h,G[1]+O*h,G[2]+O*h)}}i.addGroup(X,s.length/3-X,0)}function W(){const X=s.length/3;let re=0;K(z,re),re+=z.length;for(let G=0,$=I.length;G<$;G++){const ce=I[G];K(ce,re),re+=ce.length}i.addGroup(X,s.length/3-X,1)}function K(X,re){let G=X.length;for(;--G>=0;){const $=G;let ce=G-1;ce<0&&(ce=X.length-1);for(let Z=0,he=h+m*2;Z<he;Z++){const be=O*Z,Ee=O*(Z+1),U=re+$+be,He=re+ce+be,Fe=re+ce+Ee,L=re+$+Ee;P(U,He,Fe,L)}}}function fe(X,re,G){c.push(X),c.push(re),c.push(G)}function oe(X,re,G){C(X),C(re),C(G);const $=s.length/3,ce=M.generateTopUV(i,s,$-3,$-2,$-1);V(ce[0]),V(ce[1]),V(ce[2])}function P(X,re,G,$){C(X),C(re),C($),C(re),C(G),C($);const ce=s.length/3,Z=M.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);V(Z[0]),V(Z[1]),V(Z[3]),V(Z[1]),V(Z[2]),V(Z[3])}function C(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function V(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Zp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new va[s.type]().fromJSON(s)),new qs(i,e.options)}}const Yp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-d),new ye(u,1-g),new ye(v,1-p)]:[new ye(a,1-c),new ye(h,1-d),new ye(f,1-g),new ye(m,1-p)]}};function Zp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fr extends Ba{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fr(e.radius,e.detail)}}class hs extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*u-o;for(let w=0;w<l;w++){const y=w*d-r;g.push(y,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const w=M+l*p,y=M+l*(p+1),b=M+1+l*(p+1),S=M+1+l*p;f.push(w,y,S),f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ga extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const M=[],w=p/i,y=o+w*a,b=e*Math.cos(y),S=Math.sqrt(e*e-b*b);let R=0;p===0&&o===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,A=s+T*r;d.x=-S*Math.cos(A),d.y=b,d.z=S*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+R,1-w),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const w=h[p][M+1],y=h[p][M],b=h[p+1][M],S=h[p+1][M+1];(p!==0||o>0)&&f.push(w,y,S),(p!==i-1||c<Math.PI)&&f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Va extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new D,f=new D,g=new D;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,y=(s+1)*v+m;c.push(p,M,y),c.push(M,w,y)}this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ha extends Ot{constructor(e=new Bc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ye;let h=new D;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function v(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),p()}function m(w){h=e.getPointAt(w/t,h);const y=o.normals[w],b=o.binormals[w];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,_=Math.sin(R),T=-Math.cos(R);c.x=T*y.x+_*b.x,c.y=T*y.y+_*b.y,c.z=T*y.z+_*b.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){const b=(s+1)*(w-1)+(y-1),S=(s+1)*w+(y-1),R=(s+1)*w+y,_=(s+1)*(w-1)+y;g.push(b,S,_),g.push(S,R,_)}}function M(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)l.x=w/t,l.y=y/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ha(new va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(tu(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(tu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const s in i)e[s]=i[s]}return e}function tu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $p(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const zd={clone:Hs,merge:cn};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bd extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ps extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kd extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gd extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qp extends Cc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Wa extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Vd extends Wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Al=new ft,nu=new D,iu=new D;class Gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _o=new D,vo=new Si,ti=new D;class Vc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_o,vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new D,su=new ye,ru=new ye;class Sn extends Vc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,su,ru),t.subVectors(ru,su)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jp extends Gc{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Xa extends Wa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Or extends Vc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class em extends Gc{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hc extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new em}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ws=-90,Ts=1;class Hd extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(ws,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Sn(ws,Ts,e,t);r.layers=this.layers,this.add(r);const o=new Sn(ws,Ts,e,t);o.layers=this.layers,this.add(o);const a=new Sn(ws,Ts,e,t);a.layers=this.layers,this.add(a);const c=new Sn(ws,Ts,e,t);c.layers=this.layers,this.add(c);const l=new Sn(ws,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Wd extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ou=new ft;class Xd{constructor(e,t,i=0,s=1/0){this.ray=new Xs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,i=[]){return jl(e,this,i,t),i.sort(au),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jl(e[s],this,i,t);return i.sort(au),i}}function au(n,e){return n.distance-e.distance}function jl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)jl(r[o],e,t,!0)}}class ec{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const hh=class hh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};hh.prototype.isMatrix2=!0;let tc=hh;class qd extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lu(n,e,t,i){const s=tm(i);switch(t){case Sc:return n*e;case Ra:return n*e/s.components*s.byteLength;case Ca:return n*e/s.components*s.byteLength;case Vi:return n*e*2/s.components*s.byteLength;case Pa:return n*e*2/s.components*s.byteLength;case bc:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case La:return n*e*4/s.components*s.byteLength;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:case Go:return Math.max(n,16)*Math.max(e,8)/4;case zo:case ko:return Math.max(n,8)*Math.max(e,8)/2;case Vo:case Ho:case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Mr:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case aa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case la:case ca:case ha:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ua:case da:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sr:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tm(n){switch(n){case gn:case vc:return{byteLength:1,components:1};case zs:case xc:case Kn:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case Jn:case wa:case In:return{byteLength:4,components:1};case yc:case Mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yd(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function nm(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,t0=`uniform sampler2D dfgLUT;
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
}`,n0=`
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:Em,color_vertex:wm,common:Tm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Im,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Om,envmap_pars_vertex:zm,envmap_physical_pars_fragment:$m,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Zm,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:Qm,lights_phong_pars_fragment:jm,lights_physical_fragment:e0,lights_physical_pars_fragment:t0,lights_fragment_begin:n0,lights_fragment_maps:i0,lights_fragment_end:s0,lightprobes_pars_fragment:r0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:d0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:E0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:I0,project_vertex:N0,dithering_fragment:U0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:k0,shadowmap_vertex:G0,shadowmask_pars_fragment:V0,skinbase_vertex:H0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:Z0,tonemapping_fragment:$0,tonemapping_pars_fragment:J0,transmission_fragment:K0,transmission_pars_fragment:Q0,uv_pars_fragment:j0,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:lg,depth_vert:cg,depth_frag:hg,distance_vert:ug,distance_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:vg,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:bg,meshnormal_frag:Eg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ig,shadow_frag:Ng,sprite_vert:Ug,sprite_frag:Fg},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Xn={basic:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:cn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:cn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:cn([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:cn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:cn([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:cn([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:cn([De.common,De.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:cn([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Xn.physical={uniforms:cn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const xo={r:0,b:0,g:0},Og=new ft,Zd=new et;Zd.set(-1,0,0,0,1,0,0,0,1);function zg(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(M){let w=!1;const y=f(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,w){const y=f(w);y&&(y.isCubeTexture||y.mapping===Dr)?(l===void 0&&(l=new fn(new wi(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Hs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zd),l.material.toneMapped=lt.getTransfer(y.colorSpace)!==vt,(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fn(new hs(2,2),new zn({name:"BackgroundMaterial",uniforms:Hs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(xo,Od(n)),t.buffers.color.setClear(xo.r,xo.g,xo.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function Bg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(I,F,k,N,z){let H=!1;const O=d(I,N,k,F);r!==O&&(r=O,l(r.object)),H=f(I,N,k,z),H&&g(I,N,k,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(I,F,k,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function h(I){return n.deleteVertexArray(I)}function d(I,F,k,N){const z=N.wireframe===!0;let H=i[F.id];H===void 0&&(H={},i[F.id]=H);const O=I.isInstancedMesh===!0?I.id:0;let j=H[O];j===void 0&&(j={},H[O]=j);let B=j[k.id];B===void 0&&(B={},j[k.id]=B);let Q=B[z];return Q===void 0&&(Q=u(c()),B[z]=Q),Q}function u(I){const F=[],k=[],N=[];for(let z=0;z<t;z++)F[z]=0,k[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:N,object:I,attributes:{},index:null}}function f(I,F,k,N){const z=r.attributes,H=F.attributes;let O=0;const j=k.getAttributes();for(const B in j)if(j[B].location>=0){const ee=z[B];let ue=H[B];if(ue===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ee===void 0||ee.attribute!==ue||ue&&ee.data!==ue.data)return!0;O++}return r.attributesNum!==O||r.index!==N}function g(I,F,k,N){const z={},H=F.attributes;let O=0;const j=k.getAttributes();for(const B in j)if(j[B].location>=0){let ee=H[B];ee===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ue={};ue.attribute=ee,ee&&ee.data&&(ue.data=ee.data),z[B]=ue,O++}r.attributes=z,r.attributesNum=O,r.index=N}function v(){const I=r.newAttributes;for(let F=0,k=I.length;F<k;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const k=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;k[I]=1,N[I]===0&&(n.enableVertexAttribArray(I),N[I]=1),z[I]!==F&&(n.vertexAttribDivisor(I,F),z[I]=F)}function M(){const I=r.newAttributes,F=r.enabledAttributes;for(let k=0,N=F.length;k<N;k++)F[k]!==I[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function w(I,F,k,N,z,H,O){O===!0?n.vertexAttribIPointer(I,F,k,z,H):n.vertexAttribPointer(I,F,k,N,z,H)}function y(I,F,k,N){v();const z=N.attributes,H=k.getAttributes(),O=F.defaultAttributeValues;for(const j in H){const B=H[j];if(B.location>=0){let Q=z[j];if(Q===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const ee=Q.normalized,ue=Q.itemSize,de=e.get(Q);if(de===void 0)continue;const Me=de.buffer,Ae=de.type,te=de.bytesPerElement,W=Ae===n.INT||Ae===n.UNSIGNED_INT||Q.gpuType===wa;if(Q.isInterleavedBufferAttribute){const K=Q.data,fe=K.stride,oe=Q.offset;if(K.isInstancedInterleavedBuffer){for(let P=0;P<B.locationSize;P++)p(B.location+P,K.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let P=0;P<B.locationSize;P++)m(B.location+P);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let P=0;P<B.locationSize;P++)w(B.location+P,ue/B.locationSize,Ae,ee,fe*te,(oe+ue/B.locationSize*P)*te,W)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<B.locationSize;K++)p(B.location+K,Q.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<B.locationSize;K++)m(B.location+K);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let K=0;K<B.locationSize;K++)w(B.location+K,ue/B.locationSize,Ae,ee,ue*te,ue/B.locationSize*K*te,W)}}else if(O!==void 0){const ee=O[j];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(B.location,ee);break;case 3:n.vertexAttrib3fv(B.location,ee);break;case 4:n.vertexAttrib4fv(B.location,ee);break;default:n.vertexAttrib1fv(B.location,ee)}}}}M()}function b(){T();for(const I in i){const F=i[I];for(const k in F){const N=F[k];for(const z in N){const H=N[z];for(const O in H)h(H[O].object),delete H[O];delete N[z]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const k in F){const N=F[k];for(const z in N){const H=N[z];for(const O in H)h(H[O].object),delete H[O];delete N[z]}}delete i[I.id]}function R(I){for(const F in i){const k=i[F];for(const N in k){const z=k[N];if(z[I.id]===void 0)continue;const H=z[I.id];for(const O in H)h(H[O].object),delete H[O];delete z[I.id]}}}function _(I){for(const F in i){const k=i[F],N=I.isInstancedMesh===!0?I.id:0,z=k[N];if(z!==void 0){for(const H in z){const O=z[H];for(const j in O)h(O[j].object),delete O[j];delete z[H]}delete k[N],Object.keys(k).length===0&&delete i[F]}}}function T(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function kg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Gg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&R!==In&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:S}}function Vg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new si,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:i,w=M*4;let y=p.clippingState||null;c.value=y,y=h(g,u,w,f);for(let b=0;b!==w;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==v;++w,y+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Ls=4,Hg=6,Wg=20,Xg=256,sr=new Or,cu=new ot;let Rl=null,Cl=0,Pl=0,Ll=!1;const qg=new D,Qi=new D;class nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=qg}=r;Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Cl,Pl),this._renderer.xr.enabled=Ll,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:br,depthBuffer:!1},s=hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yg(r)),this._blurMaterial=$g(r,e,t),this._ggxMaterial=Zg(r,e,t)}return s}_compileMaterial(e){const t=new fn(new Ot,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,s,r){const c=new Sn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(cu),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new wi,new Ir({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(cu),p=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const b=this._cubeSize;As(s,y*b,w>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Gi||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;As(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ls?i-g+Ls:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,As(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,sr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,As(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,sr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),u=4*(this._cubeSize-h);As(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(c,sr)}}function Yg(n){const e=[],t=[];let i=n;const s=n-Ls+1+Hg;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,w=p>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(y,f*u*p);for(let b=0;b<u;b++){const S=h[b*2]*2-1,R=h[b*2+1]*2-1;p===0?Qi.set(1,R,S):p===1?Qi.set(-S,1,-R):p===2?Qi.set(-S,R,1):p===3?Qi.set(-1,R,-S):p===4?Qi.set(-S,-1,R):Qi.set(S,R,-1),Qi.toArray(v,(p*u+b)*f)}}const m=new Ot;m.setAttribute("position",new Fn(g,f)),m.setAttribute("outputDirection",new Fn(v,f)),t.push(new fn(m,null)),i>Ls&&i--}return{lodMeshes:t,sizeLods:e}}function hu(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=Dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zg(n,e,t){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function $g(n,e,t){return new zn({name:"SphericalGaussianBlur",defines:{SAMPLES:Wg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function uu(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function du(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Lc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wi(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:oi});r.uniforms.tEquirect.value=t;const o=new fn(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Jt),new Hd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Jg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===bo||f===Eo)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Wc(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===bo||f===Eo,v=f===Gi||f===rs;if(g||v){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new nc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new nc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===bo?u.mapping=Gi:f===Eo&&(u.mapping=rs),u}function c(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Kg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&is("WebGLRenderer: "+i+" extension not supported."),s}}}function Qg(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let w=0,y=M.length;w<y;w+=3){const b=M[w+0],S=M[w+1],R=M[w+2];u.push(b,S,S,R,R,b)}}else{const M=g.array;v=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const b=w+0,S=w+1,R=w+2;u.push(b,S,S,R,R,b)}}const m=new(g.count>=65535?Ac:Tc)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function jg(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function l(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function e_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function t_(n,e,t){const i=new WeakMap,s=new Dt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let A=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var f=A;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*S*4*d),_=new wc(R,b,S,d);_.type=In,_.needsUpdate=!0;const T=y*4;for(let I=0;I<d;I++){const F=p[I],k=M[I],N=w[I],z=b*S*4*I;for(let H=0;H<F.count;H++){const O=H*T;g===!0&&(s.fromBufferAttribute(F,H),R[z+O+0]=s.x,R[z+O+1]=s.y,R[z+O+2]=s.z,R[z+O+3]=0),v===!0&&(s.fromBufferAttribute(k,H),R[z+O+4]=s.x,R[z+O+5]=s.y,R[z+O+6]=s.z,R[z+O+7]=0),m===!0&&(s.fromBufferAttribute(N,H),R[z+O+8]=s.x,R[z+O+9]=s.y,R[z+O+10]=s.z,R[z+O+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new ye(b,S)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function n_(n,e,t,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const i_={[uc]:"LINEAR_TONE_MAPPING",[dc]:"REINHARD_TONE_MAPPING",[fc]:"CINEON_TONE_MAPPING",[Ea]:"ACES_FILMIC_TONE_MAPPING",[mc]:"AGX_TONE_MAPPING",[gc]:"NEUTRAL_TONE_MAPPING",[pc]:"CUSTOM_TONE_MAPPING"};function s_(n,e,t,i,s,r){const o=new Un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Ot;l.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pt([0,2,0,0,2,0],2));const h=new Bd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new fn(l,h),u=new Or(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,M=[],w=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),c!==null&&c.setSize(y,b);for(let S=0;S<M.length;S++){const R=M[S];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;const b=o.width,S=o.height;M.length>0&&a===null&&(a=new Un(b,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new Un(b,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(b,S)}},this.begin=function(y,b){if(v||y.toneMapping===Yn&&M.length===0)return!1;if(p=b,b!==null){const S=b.width,R=b.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return w===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,v=!0;let S=o,R=a;for(let _=0;_<M.length;_++){const T=M[_];T.enabled!==!1&&(T.render(y,R,S,b),T.needsSwap!==!1&&(S=R,R=R===a?c:a))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},lt.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");const _=i_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const $d=new Qt,ic=new Gs(1,1),Jd=new wc,Kd=new Ed,Qd=new Lc,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function c_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),Xt(t,i)}}function h_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;gu.set(i),n.uniformMatrix3fv(this.addr,!1,gu),Xt(t,i)}}function u_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;mu.set(i),n.uniformMatrix4fv(this.addr,!1,mu),Xt(t,i)}}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function y_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ic.compareFunction=t.isReversedDepthBuffer()?Ia:Da,r=ic):r=$d,t.setTexture2D(e||r,s)}function M_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kd,s)}function S_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qd,s)}function b_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jd,s)}function E_(n){switch(n){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return v_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function w_(n,e){n.uniform1fv(this.addr,e)}function T_(n,e){const t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function A_(n,e){const t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function R_(n,e){const t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function C_(n,e){const t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P_(n,e){const t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L_(n,e){const t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D_(n,e){n.uniform1iv(this.addr,e)}function I_(n,e){n.uniform2iv(this.addr,e)}function N_(n,e){n.uniform3iv(this.addr,e)}function U_(n,e){n.uniform4iv(this.addr,e)}function F_(n,e){n.uniform1uiv(this.addr,e)}function O_(n,e){n.uniform2uiv(this.addr,e)}function z_(n,e){n.uniform3uiv(this.addr,e)}function B_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ic:o=$d;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function G_(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kd,r[o])}function V_(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,r[o])}function H_(n,e,t){const i=this.cache,s=e.length,r=Ya(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jd,r[o])}function W_(n){switch(n){case 5126:return w_;case 35664:return T_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return P_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return I_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return z_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return H_}}class X_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E_(t.type)}}class q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=W_(t.type)}}class Y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function vu(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){const i=n.name,s=i.length;for(Dl.lastIndex=0;;){const r=Dl.exec(i),o=Dl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vu(t,l===void 0?new X_(a,n,e):new q_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Y_(a),vu(t,d)),t=d}}}class Ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Z_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $_=37297;let J_=0;function K_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yu=new et;function Q_(n){lt._getMatrix(yu,lt.workingColorSpace,n);const e=`mat3( ${yu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Er:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+K_(n.getShaderSource(e),a)}else return r}function j_(n,e){const t=Q_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ev={[uc]:"Linear",[dc]:"Reinhard",[fc]:"Cineon",[Ea]:"ACESFilmic",[mc]:"AgX",[gc]:"Neutral",[pc]:"Custom"};function tv(n,e){const t=ev[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new D;function nv(){lt.getLuminanceCoefficients(yo);const n=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function sv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hr(n){return n!==""}function Su(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(n){return n.replace(ov,lv)}const av=new Map;function lv(n,e){let t=it[e];if(t===void 0){const i=av.get(e);if(i!==void 0)t=it[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sc(t)}const cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(n){return n.replace(cv,hv)}function hv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const uv={[Ds]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function dv(n){return uv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fv={[Gi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function pv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const mv={[rs]:"ENVMAP_MODE_REFRACTION"};function gv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _v={[hc]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[ld]:"ENVMAP_BLENDING_ADD"};function vv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_v[n.combine]||"ENVMAP_BLENDING_NONE"}function xv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=dv(t),l=pv(t),h=gv(t),d=vv(t),u=xv(t),f=iv(t),g=sv(r),v=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?it.tonemapping_pars_fragment:"",t.toneMapping!==Yn?tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=sc(o),o=Su(o,t),o=bu(o,t),a=sc(a),a=Su(a,t),a=bu(a,t),o=Eu(o),a=Eu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+o,y=M+p+a,b=xu(s,s.VERTEX_SHADER,w),S=xu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,b),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(S)||"",z=F.trim(),H=k.trim(),O=N.trim();let j=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,S);else{const Q=Mu(s,b,"vertex"),ee=Mu(s,S,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Q+`
`+ee)}else z!==""?Qe("WebGLProgram: Program Info Log:",z):(H===""||O==="")&&(B=!1);B&&(I.diagnostics={runnable:j,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(b),s.deleteShader(S),_=new Ro(s,v),T=rv(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,$_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=S,this}let Mv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bv(e),t.set(e,i)),i}}class bv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function Ev(n){return n===Vi||n===Mr||n===Sr}function wv(n,e,t,i,s,r){const o=new Ua,a=new Sv,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,A,I,F,k){const N=I.fog,z=F.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||H,O),B=j&&j.mapping===Dr?j.image.height:null,Q=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=ee!==void 0?ee.length:0;let de=0;z.morphAttributes.position!==void 0&&(de=1),z.morphAttributes.normal!==void 0&&(de=2),z.morphAttributes.color!==void 0&&(de=3);let Me,Ae,te,W;if(Q){const Tt=Xn[Q];Me=Tt.vertexShader,Ae=Tt.fragmentShader}else{Me=_.vertexShader,Ae=_.fragmentShader;const Tt=a.getVertexShaderStage(_),gt=a.getFragmentShaderStage(_);a.update(_,Tt,gt),te=Tt.id,W=gt.id}const K=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),oe=F.isInstancedMesh===!0,P=F.isBatchedMesh===!0,C=!!_.map,V=!!_.matcap,X=!!j,re=!!_.aoMap,G=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,Z=!!_.displacementMap,he=!!_.emissiveMap,be=!!_.metalnessMap,Ee=!!_.roughnessMap,U=_.anisotropy>0,He=_.clearcoat>0,Fe=_.dispersion>0,L=_.retroreflectivity>0,x=_.iridescence>0,J=_.sheen>0,ne=_.transmission>0,ae=U&&!!_.anisotropyMap,xe=He&&!!_.clearcoatMap,we=He&&!!_.clearcoatNormalMap,pe=He&&!!_.clearcoatRoughnessMap,_e=x&&!!_.iridescenceMap,Re=x&&!!_.iridescenceThicknessMap,Ye=J&&!!_.sheenColorMap,Ie=J&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,Ze=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=ne&&!!_.transmissionMap,Y=ne&&!!_.thicknessMap,Pe=!!_.gradientMap,ge=!!_.alphaMap,Le=_.alphaTest>0,ze=!!_.alphaHash,ve=!!_.extensions;let $e=Yn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($e=n.toneMapping);const We={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Me,fragmentShader:Ae,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:P,batchingColor:P&&F._colorsTexture!==null,instancing:oe,instancingColor:oe&&F.instanceColor!==null,instancingMorph:oe&&F.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:C,matcap:V,envMap:X,envMapMode:X&&j.mapping,envMapCubeUVHeight:B,aoMap:re,lightMap:G,bumpMap:$,normalMap:ce,displacementMap:Z,emissiveMap:he,normalMapObjectSpace:ce&&_.normalMapType===ud,normalMapTangentSpace:ce&&_.normalMapType===pa,packedNormalMap:ce&&_.normalMapType===pa&&Ev(_.normalMap.format),metalnessMap:be,roughnessMap:Ee,anisotropy:U,anisotropyMap:ae,clearcoat:He,clearcoatMap:xe,clearcoatNormalMap:we,clearcoatRoughnessMap:pe,dispersion:Fe,retroreflection:L,iridescence:x,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:J,sheenColorMap:Ye,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:Ze,specularIntensityMap:Ke,transmission:ne,transmissionMap:nt,thicknessMap:Y,gradientMap:Pe,opaque:_.transparent===!1&&_.blending===Is&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Le,alphaHash:ze,combine:_.combine,mapUv:C&&g(_.map.channel),aoMapUv:re&&g(_.aoMap.channel),lightMapUv:G&&g(_.lightMap.channel),bumpMapUv:$&&g(_.bumpMap.channel),normalMapUv:ce&&g(_.normalMap.channel),displacementMapUv:Z&&g(_.displacementMap.channel),emissiveMapUv:he&&g(_.emissiveMap.channel),metalnessMapUv:be&&g(_.metalnessMap.channel),roughnessMapUv:Ee&&g(_.roughnessMap.channel),anisotropyMapUv:ae&&g(_.anisotropyMap.channel),clearcoatMapUv:xe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(_.sheenRoughnessMap.channel),specularMapUv:Ce&&g(_.specularMap.channel),specularColorMapUv:Ze&&g(_.specularColorMap.channel),specularIntensityMapUv:Ke&&g(_.specularIntensityMap.channel),transmissionMapUv:nt&&g(_.transmissionMap.channel),thicknessMapUv:Y&&g(_.thicknessMap.channel),alphaMapUv:ge&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ce||U),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(C||ge),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:de,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:C&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||P)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const T=f[_.type];let A;if(T){const I=Xn[T];A=zd.clone(I.uniforms)}else A=_.uniforms;return A}function y(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new yv(n,T,_,s),l.push(A),h.set(T,A)),A}function b(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:R}}function Tv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Av(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Au(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,m,p){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);const w=a(u,f,g,v,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(u,f,g,v,m,p){const M=a(u,f,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||Av),i.length>1&&i.sort(f||Tu),s.length>1&&s.sort(f||Tu)}function d(){for(let u=e,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Rv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Au,n.set(i,[o])):s>=r.length?(o=new Au,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ot};break;case"SpotLight":t={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lv=0;function Dv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iv(n){const e=new Cv,t=Pv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new ft,o=new ft;function a(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,w=0,y=0,b=0,S=0,R=0,_=0,T=0,A=0;l.sort(Dv);for(let F=0,k=l.length;F<k;F++){const N=l[F],z=N.color,H=N.intensity,O=N.distance;let j=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Vi?j=N.shadow.map.texture:j=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(N.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(N.sh.coefficients[B],H);A++}else if(N.isSunLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,ee=t.get(N);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=j;const ue=Q.getViewportCount();for(let de=0;de<ue;de++)i.sunShadowMatrix[v+de]=Q.getMatrix(de),i.sunShadowCascade[v+de]=Q._cascadeData[de];v+=ue,g++}i.sun[f]=B,f++}else if(N.isDirectionalLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,ee=t.get(N);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=N.shadow.matrix,b++}i.directional[m]=B,m++}else if(N.isSpotLight){const B=e.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(z).multiplyScalar(H),B.distance=O,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,i.spot[M]=B;const Q=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[M]=Q.matrix,N.castShadow){const ee=t.get(N);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.spotShadow[M]=ee,i.spotShadowMap[M]=j,R++}M++}else if(N.isRectAreaLight){const B=e.get(N);B.color.copy(z).multiplyScalar(H),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=B,w++}else if(N.isPointLight){const B=e.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){const Q=N.shadow,ee=t.get(N);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=N.shadow.matrix,S++}i.point[p]=B,p++}else if(N.isHemisphereLight){const B=e.get(N);B.skyColor.copy(N.color).multiplyScalar(H),B.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[y]=B,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==R||I.numSpotMaps!==_||I.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=R,I.numSpotMaps=_,I.numLightProbes=A,i.version=Lv++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const y=l[M];if(y.isSunLight){const b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Ru(n){const e=new Iv(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Nv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ru(n),e.set(s,[a])):r>=o.length?(a=new Ru(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`,Ov=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],zv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Cu=new ft,rr=new D,Il=new D;function Bv(n,e,t){let i=new Oa;const s=new ye,r=new ye,o=new Dt,a=new kd,c=new Gd,l={},h=t.maxTextureSize,d={[ki]:dn,[dn]:ki,[Pn]:Pn},u=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Uv,fragmentShader:Fv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let p=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Vu&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);const T=n.getRenderTarget(),A=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(oi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=S.length;N<z;N++){const H=S[N],O=H.shadow;if(O===void 0){Qe("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const j=O.getFrameExtents();s.multiply(j),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,O.mapSize.y=r.y));const B=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Cs){if(H.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Un(s.x,s.y,{format:Vi,type:Kn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Gs(s.x,s.y,In),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=li,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt}else H.isPointLight?(O.map=new Wc(s.x),O.map.depthTexture=new Rd(s.x,Jn)):(O.map=new Un(s.x,s.y),O.map.depthTexture=new Gs(s.x,s.y,Jn)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=li,this.type===Ds?(O.map.depthTexture.compareFunction=B?Ia:Da,O.map.depthTexture.minFilter=Jt,O.map.depthTexture.magFilter=Jt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const Q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,_);for(let ee=0;ee<Q;ee++){const ue=O.getCamera(ee);if(H.isPointLight){const de=O.camera,Me=O.matrix,Ae=H.distance||de.far;Ae!==de.far&&(de.far=Ae,de.updateProjectionMatrix()),rr.setFromMatrixPosition(H.matrixWorld),de.position.copy(rr),Il.copy(de.position),Il.add(Ov[ee]),de.up.copy(zv[ee]),de.lookAt(Il),de.updateMatrixWorld(),Me.makeTranslation(-rr.x,-rr.y,-rr.z),Cu.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Cu,de.coordinateSystem,de.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(O.map),n.clear());const de=O.getViewport(ee);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),F.viewport(o)}i=O.getFrustum(ee),y(R,_,ue,H,this.type)}O.isPointLightShadow!==!0&&this.type===Cs&&M(O,_),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,A,I)};function M(S,R){const _=e.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Un(s.x,s.y,{format:Vi,type:Kn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,_,f,v,null)}function w(S,R,_,T){let A=null;const I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)A=I;else if(A=_.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=A.uuid,k=R.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let z=N[k];z===void 0&&(z=A.clone(),N[k]=z,R.addEventListener("dispose",b)),A=z}if(A.visible=R.visible,A.wireframe=R.wireframe,T===Cs?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:d[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const F=n.properties.get(A);F.light=_}return A}function y(S,R,_,T,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Cs)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const k=e.update(S),N=S.material;if(Array.isArray(N)){const z=k.groups;for(let H=0,O=z.length;H<O;H++){const j=z[H],B=N[j.materialIndex];if(B&&B.visible){const Q=w(S,B,T,A);S.onBeforeShadow(n,S,R,_,k,Q,j),n.renderBufferDirect(_,null,k,Q,S,j),S.onAfterShadow(n,S,R,_,k,Q,j)}}}else if(N.visible){const z=w(S,N,T,A);S.onBeforeShadow(n,S,R,_,k,z,null),n.renderBufferDirect(_,null,k,z,S,null),S.onAfterShadow(n,S,R,_,k,z,null)}}const F=S.children;for(let k=0,N=F.length;k<N;k++)y(F[k],R,_,T,A)}function b(S){S.target.removeEventListener("dispose",b);for(const _ in l){const T=l[_],A=S.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function kv(n,e){function t(){let Y=!1;const Pe=new Dt;let ge=null;const Le=new Dt(0,0,0,0);return{setMask:function(ze){ge!==ze&&!Y&&(n.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,ve,$e,We,Tt){Tt===!0&&(ze*=We,ve*=We,$e*=We),Pe.set(ze,ve,$e,We),Le.equals(Pe)===!1&&(n.clearColor(ze,ve,$e,We),Le.copy(Pe))},reset:function(){Y=!1,ge=null,Le.set(-1,0,0,0)}}}function i(){let Y=!1,Pe=!1,ge=null,Le=null,ze=null;return{setReversed:function(ve){if(Pe!==ve){const $e=e.get("EXT_clip_control");ve?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Pe=ve;const We=ze;ze=null,this.setClear(We)}},getReversed:function(){return Pe},setTest:function(ve){ve?K(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!Y&&(n.depthMask(ve),ge=ve)},setFunc:function(ve){if(Pe&&(ve=Bf[ve]),Le!==ve){switch(ve){case Po:n.depthFunc(n.NEVER);break;case Lo:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case Io:n.depthFunc(n.EQUAL);break;case No:n.depthFunc(n.GEQUAL);break;case Uo:n.depthFunc(n.GREATER);break;case Fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=ve}},setLocked:function(ve){Y=ve},setClear:function(ve){ze!==ve&&(ze=ve,Pe&&(ve=1-ve),n.clearDepth(ve))},reset:function(){Y=!1,ge=null,Le=null,ze=null,Pe=!1}}}function s(){let Y=!1,Pe=null,ge=null,Le=null,ze=null,ve=null,$e=null,We=null,Tt=null;return{setTest:function(gt){Y||(gt?K(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(gt){Pe!==gt&&!Y&&(n.stencilMask(gt),Pe=gt)},setFunc:function(gt,kn,jn){(ge!==gt||Le!==kn||ze!==jn)&&(n.stencilFunc(gt,kn,jn),ge=gt,Le=kn,ze=jn)},setOp:function(gt,kn,jn){(ve!==gt||$e!==kn||We!==jn)&&(n.stencilOp(gt,kn,jn),ve=gt,$e=kn,We=jn)},setLocked:function(gt){Y=gt},setClear:function(gt){Tt!==gt&&(n.clearStencil(gt),Tt=gt)},reset:function(){Y=!1,Pe=null,ge=null,Le=null,ze=null,ve=null,$e=null,We=null,Tt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,y=null,b=null,S=null,R=null,_=new ot(0,0,0),T=0,A=!1,I=null,F=null,k=null,N=null,z=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=j>=2);let Q=null,ee={};const ue=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Me=new Dt().fromArray(ue),Ae=new Dt().fromArray(de);function te(Y,Pe,ge,Le){const ze=new Uint8Array(4),ve=n.createTexture();n.bindTexture(Y,ve),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ge;$e++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Pe,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Pe+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return ve}const W={};W[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Os),$(!1),ce(Gl),K(n.CULL_FACE),re(oi);function K(Y){h[Y]!==!0&&(n.enable(Y),h[Y]=!0)}function fe(Y){h[Y]!==!1&&(n.disable(Y),h[Y]=!1)}function oe(Y,Pe){return u[Y]!==Pe?(n.bindFramebuffer(Y,Pe),u[Y]=Pe,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Pe),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Pe),!0):!1}function P(Y,Pe){let ge=g,Le=!1;if(Y){ge=f.get(Pe),ge===void 0&&(ge=[],f.set(Pe,ge));const ze=Y.textures;if(ge.length!==ze.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,$e=ze.length;ve<$e;ve++)ge[ve]=n.COLOR_ATTACHMENT0+ve;ge.length=ze.length,Le=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Le=!0);Le&&n.drawBuffers(ge)}function C(Y){return v!==Y?(n.useProgram(Y),v=Y,!0):!1}const V={[es]:n.FUNC_ADD,[Wu]:n.FUNC_SUBTRACT,[Xu]:n.FUNC_REVERSE_SUBTRACT};V[qu]=n.MIN,V[Yu]=n.MAX;const X={[Zu]:n.ZERO,[$u]:n.ONE,[Ju]:n.SRC_COLOR,[lc]:n.SRC_ALPHA,[nd]:n.SRC_ALPHA_SATURATE,[ed]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[Ku]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[td]:n.ONE_MINUS_DST_COLOR,[ju]:n.ONE_MINUS_DST_ALPHA,[id]:n.CONSTANT_COLOR,[sd]:n.ONE_MINUS_CONSTANT_COLOR,[rd]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function re(Y,Pe,ge,Le,ze,ve,$e,We,Tt,gt){if(Y===oi){m===!0&&(fe(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),Y!==Hu){if(Y!==p||gt!==A){if((M!==es||b!==es)&&(n.blendEquation(n.FUNC_ADD),M=es,b=es),gt)switch(Y){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",Y);break}w=null,y=null,S=null,R=null,_.set(0,0,0),T=0,p=Y,A=gt}return}ze=ze||Pe,ve=ve||ge,$e=$e||Le,(Pe!==M||ze!==b)&&(n.blendEquationSeparate(V[Pe],V[ze]),M=Pe,b=ze),(ge!==w||Le!==y||ve!==S||$e!==R)&&(n.blendFuncSeparate(X[ge],X[Le],X[ve],X[$e]),w=ge,y=Le,S=ve,R=$e),(We.equals(_)===!1||Tt!==T)&&(n.blendColor(We.r,We.g,We.b,Tt),_.copy(We),T=Tt),p=Y,A=!1}function G(Y,Pe){Y.side===Pn?fe(n.CULL_FACE):K(n.CULL_FACE);let ge=Y.side===dn;Pe&&(ge=!ge),$(ge),Y.blending===Is&&Y.transparent===!1?re(oi):re(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Le=Y.stencilWrite;a.setTest(Le),Le&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),he(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(Y){I!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),I=Y)}function ce(Y){Y!==ku?(K(n.CULL_FACE),Y!==F&&(Y===Gl?n.cullFace(n.BACK):Y===Gu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),F=Y}function Z(Y){Y!==k&&(O&&n.lineWidth(Y),k=Y)}function he(Y,Pe,ge){Y?(K(n.POLYGON_OFFSET_FILL),(N!==Pe||z!==ge)&&(N=Pe,z=ge,o.getReversed()&&(Pe=-Pe),n.polygonOffset(Pe,ge))):fe(n.POLYGON_OFFSET_FILL)}function be(Y){Y?K(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Ee(Y){Y===void 0&&(Y=n.TEXTURE0+H-1),Q!==Y&&(n.activeTexture(Y),Q=Y)}function U(Y,Pe,ge){ge===void 0&&(Q===null?ge=n.TEXTURE0+H-1:ge=Q);let Le=ee[ge];Le===void 0&&(Le={type:void 0,texture:void 0},ee[ge]=Le),(Le.type!==Y||Le.texture!==Pe)&&(Q!==ge&&(n.activeTexture(ge),Q=ge),n.bindTexture(Y,Pe||W[Y]),Le.type=Y,Le.texture=Pe)}function He(){const Y=ee[Q];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Fe(){try{n.compressedTexImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function x(){try{n.texSubImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function J(){try{n.texSubImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function ae(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function xe(){try{n.texStorage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function we(){try{n.texStorage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function pe(){try{n.texImage2D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function _e(){try{n.texImage3D(...arguments)}catch(Y){ct("WebGLState:",Y)}}function Re(Y){return d[Y]!==void 0?d[Y]:n.getParameter(Y)}function Ye(Y,Pe){d[Y]!==Pe&&(n.pixelStorei(Y,Pe),d[Y]=Pe)}function Ie(Y){Me.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Ce(Y){Ae.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),Ae.copy(Y))}function Ze(Y,Pe){let ge=l.get(Pe);ge===void 0&&(ge=new WeakMap,l.set(Pe,ge));let Le=ge.get(Y);Le===void 0&&(Le=n.getUniformBlockIndex(Pe,Y.name),ge.set(Y,Le))}function Ke(Y,Pe){const Le=l.get(Pe).get(Y);c.get(Pe)!==Le&&(n.uniformBlockBinding(Pe,Le,Y.__bindingPointIndex),c.set(Pe,Le))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,ee={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,w=null,y=null,b=null,S=null,R=null,_=new ot(0,0,0),T=0,A=!1,I=null,F=null,k=null,N=null,z=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:fe,bindFramebuffer:oe,drawBuffers:P,useProgram:C,setBlending:re,setMaterial:G,setFlipSided:$,setCullFace:ce,setLineWidth:Z,setPolygonOffset:he,setScissorTest:be,activeTexture:Ee,bindTexture:U,unbindTexture:He,compressedTexImage2D:Fe,compressedTexImage3D:L,texImage2D:pe,texImage3D:_e,pixelStorei:Ye,getParameter:Re,updateUBOMapping:Ze,uniformBlockBinding:Ke,texStorage2D:xe,texStorage3D:we,texSubImage2D:x,texSubImage3D:J,compressedTexSubImage2D:ne,compressedTexSubImage3D:ae,scissor:Ie,viewport:Ce,reset:nt}}function Gv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,x){return g?new OffscreenCanvas(L,x):ma("canvas")}function m(L,x,J){let ne=1;const ae=Fe(L);if((ae.width>J||ae.height>J)&&(ne=J/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const xe=Math.floor(ne*ae.width),we=Math.floor(ne*ae.height);u===void 0&&(u=v(xe,we));const pe=x?v(xe,we):u;return pe.width=xe,pe.height=we,pe.getContext("2d").drawImage(L,0,0,xe,we),Qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+xe+"x"+we+")."),pe}else return"data"in L&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function p(L){return L.generateMipmaps}function M(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,x,J,ne,ae,xe=!1){if(L!==null){if(n[L]!==void 0)return n[L];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let we;ne&&(we=e.get("EXT_texture_norm16"),we||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=x;if(x===n.RED&&(J===n.FLOAT&&(pe=n.R32F),J===n.HALF_FLOAT&&(pe=n.R16F),J===n.UNSIGNED_BYTE&&(pe=n.R8),J===n.UNSIGNED_SHORT&&we&&(pe=we.R16_EXT),J===n.SHORT&&we&&(pe=we.R16_SNORM_EXT)),x===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.R8UI),J===n.UNSIGNED_SHORT&&(pe=n.R16UI),J===n.UNSIGNED_INT&&(pe=n.R32UI),J===n.BYTE&&(pe=n.R8I),J===n.SHORT&&(pe=n.R16I),J===n.INT&&(pe=n.R32I)),x===n.RG&&(J===n.FLOAT&&(pe=n.RG32F),J===n.HALF_FLOAT&&(pe=n.RG16F),J===n.UNSIGNED_BYTE&&(pe=n.RG8),J===n.UNSIGNED_SHORT&&we&&(pe=we.RG16_EXT),J===n.SHORT&&we&&(pe=we.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RG8UI),J===n.UNSIGNED_SHORT&&(pe=n.RG16UI),J===n.UNSIGNED_INT&&(pe=n.RG32UI),J===n.BYTE&&(pe=n.RG8I),J===n.SHORT&&(pe=n.RG16I),J===n.INT&&(pe=n.RG32I)),x===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),J===n.UNSIGNED_INT&&(pe=n.RGB32UI),J===n.BYTE&&(pe=n.RGB8I),J===n.SHORT&&(pe=n.RGB16I),J===n.INT&&(pe=n.RGB32I)),x===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),J===n.UNSIGNED_INT&&(pe=n.RGBA32UI),J===n.BYTE&&(pe=n.RGBA8I),J===n.SHORT&&(pe=n.RGBA16I),J===n.INT&&(pe=n.RGBA32I)),x===n.RGB&&(J===n.UNSIGNED_SHORT&&we&&(pe=we.RGB16_EXT),J===n.SHORT&&we&&(pe=we.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),x===n.RGBA){const _e=xe?Er:lt.getTransfer(ae);J===n.FLOAT&&(pe=n.RGBA32F),J===n.HALF_FLOAT&&(pe=n.RGBA16F),J===n.UNSIGNED_BYTE&&(pe=_e===vt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&we&&(pe=we.RGBA16_EXT),J===n.SHORT&&we&&(pe=we.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(L,x){let J;return L?x===null||x===Jn||x===Bs?J=n.DEPTH24_STENCIL8:x===In?J=n.DEPTH32F_STENCIL8:x===zs&&(J=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Bs?J=n.DEPTH_COMPONENT24:x===In?J=n.DEPTH_COMPONENT32F:x===zs&&(J=n.DEPTH_COMPONENT16),J}function S(L,x){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function R(L){const x=L.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(L){const x=L.target;x.removeEventListener("dispose",_),I(x)}function T(L){const x=i.get(L);if(x.__webglInit===void 0)return;const J=L.source,ne=f.get(J);if(ne){const ae=ne[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(L),Object.keys(ne).length===0&&f.delete(J)}i.remove(L)}function A(L){const x=i.get(L);n.deleteTexture(x.__webglTexture);const J=L.source,ne=f.get(J);delete ne[x.__cacheKey],o.memory.textures--}function I(L){const x=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let ae=0;ae<x.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(x.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(x.__webglFramebuffer[ne]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[ne]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)x.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const J=L.textures;for(let ne=0,ae=J.length;ne<ae;ne++){const xe=i.get(J[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(J[ne])}i.remove(L)}let F=0;function k(){F=0}function N(){return F}function z(L){F=L}function H(){const L=F;return L>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,L}function O(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function j(L,x){const J=i.get(L);if(L.isVideoTexture&&U(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ne=L.image;if(ne===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(J,L,x);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+x)}function B(L,x){const J=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){fe(J,L,x);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+x)}function Q(L,x){const J=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){fe(J,L,x);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+x)}function ee(L,x){const J=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&J.__version!==L.version){oe(J,L,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+x)}const ue={[yr]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},de={[Zt]:n.NEAREST,[cd]:n.NEAREST_MIPMAP_NEAREST,[lr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[wo]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Me={[fd]:n.NEVER,[vd]:n.ALWAYS,[pd]:n.LESS,[Da]:n.LEQUAL,[md]:n.EQUAL,[Ia]:n.GEQUAL,[gd]:n.GREATER,[_d]:n.NOTEQUAL};function Ae(L,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===wo||x.magFilter===lr||x.magFilter===Ni||x.minFilter===Jt||x.minFilter===wo||x.minFilter===lr||x.minFilter===Ni)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ue[x.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ue[x.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ue[x.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,de[x.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==lr&&x.minFilter!==Ni||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(L,x){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",R));const ne=x.source;let ae=f.get(ne);ae===void 0&&(ae={},f.set(ne,ae));const xe=O(x);if(xe!==L.__cacheKey){ae[xe]===void 0&&(ae[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ae[xe].usedTimes++;const we=ae[L.__cacheKey];we!==void 0&&(ae[L.__cacheKey].usedTimes--,we.usedTimes===0&&A(x)),L.__cacheKey=xe,L.__webglTexture=ae[xe].texture}return J}function W(L,x,J){return Math.floor(Math.floor(L/J)/x)}function K(L,x,J,ne){const xe=L.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,J,ne,x.data);else{xe.sort((Ye,Ie)=>Ye.start-Ie.start);let we=0;for(let Ye=1;Ye<xe.length;Ye++){const Ie=xe[we],Ce=xe[Ye],Ze=Ie.start+Ie.count,Ke=W(Ce.start,x.width,4),nt=W(Ie.start,x.width,4);Ce.start<=Ze+1&&Ke===nt&&W(Ce.start+Ce.count-1,x.width,4)===Ke?Ie.count=Math.max(Ie.count,Ce.start+Ce.count-Ie.start):(++we,xe[we]=Ce)}xe.length=we+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ye=0,Ie=xe.length;Ye<Ie;Ye++){const Ce=xe[Ye],Ze=Math.floor(Ce.start/4),Ke=Math.ceil(Ce.count/4),nt=Ze%x.width,Y=Math.floor(Ze/x.width),Pe=Ke,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,nt,Y,Pe,ge,J,ne,x.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function fe(L,x,J){let ne=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=n.TEXTURE_3D);const ae=te(L,x),xe=x.source;t.bindTexture(ne,L.__webglTexture,n.TEXTURE0+J);const we=i.get(xe);if(xe.version!==we.__version||ae===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ge=lt.getPrimaries(lt.workingColorSpace),Le=x.colorSpace===mi?null:lt.getPrimaries(x.colorSpace),ze=x.colorSpace===mi||ge===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let _e=m(x.image,!1,s.maxTextureSize);_e=He(x,_e);const Re=r.convert(x.format,x.colorSpace),Ye=r.convert(x.type);let Ie=y(x.internalFormat,Re,Ye,x.normalized,x.colorSpace,x.isVideoTexture);Ae(ne,x);let Ce;const Ze=x.mipmaps,Ke=x.isVideoTexture!==!0,nt=we.__version===void 0||ae===!0,Y=xe.dataReady,Pe=S(x,_e);if(x.isDepthTexture)Ie=b(x.format===Ui,x.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ie,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Re,Ye,null));else if(x.isDataTexture)if(Ze.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Pe,Ie,Ze[0].width,Ze[0].height);for(let ge=0,Le=Ze.length;ge<Le;ge++)Ce=Ze[ge],Ke?Y&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Re,Ye,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Re,Ye,Ce.data);x.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,Pe,Ie,_e.width,_e.height),Y&&K(x,_e,Re,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Re,Ye,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ie,Ze[0].width,Ze[0].height,_e.depth);for(let ge=0,Le=Ze.length;ge<Le;ge++)if(Ce=Ze[ge],x.format!==Nn)if(Re!==null)if(Ke){if(Y)if(x.layerUpdates.size>0){const ze=lu(Ce.width,Ce.height,x.format,x.type);for(const ve of x.layerUpdates){const $e=Ce.data.subarray(ve*ze/Ce.data.BYTES_PER_ELEMENT,(ve+1)*ze/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ve,Ce.width,Ce.height,1,Re,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,_e.depth,Re,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ie,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,_e.depth,Re,Ye,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ie,Ce.width,Ce.height,_e.depth,0,Re,Ye,Ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Pe,Ie,Ze[0].width,Ze[0].height);for(let ge=0,Le=Ze.length;ge<Le;ge++)Ce=Ze[ge],x.format!==Nn?Re!==null?Ke?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Y&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Re,Ye,Ce.data):t.texImage2D(n.TEXTURE_2D,ge,Ie,Ce.width,Ce.height,0,Re,Ye,Ce.data)}else if(x.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ie,_e.width,_e.height,_e.depth),Y)if(x.layerUpdates.size>0){const ge=lu(_e.width,_e.height,x.format,x.type);for(const Le of x.layerUpdates){const ze=_e.data.subarray(Le*ge/_e.data.BYTES_PER_ELEMENT,(Le+1)*ge/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Le,_e.width,_e.height,1,Re,Ye,ze)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,Ye,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,_e.width,_e.height,_e.depth,0,Re,Ye,_e.data);else if(x.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,Pe,Ie,_e.width,_e.height,_e.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,Ye,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,_e.width,_e.height,_e.depth,0,Re,Ye,_e.data);else if(x.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Pe,Ie,_e.width,_e.height);else{let ge=_e.width,Le=_e.height;for(let ze=0;ze<Pe;ze++)t.texImage2D(n.TEXTURE_2D,ze,Ie,ge,Le,0,Re,Ye,null),ge>>=1,Le>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),_e.parentNode!==ge){ge.appendChild(_e),d.add(x),ge.onpaint=Le=>{const ze=Le.changedElements;for(const ve of d)ze.includes(ve.image)&&(ve.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const ze=n.RGBA,ve=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,ve,$e,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Ke&&nt){const ge=Fe(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Ie,ge.width,ge.height)}for(let ge=0,Le=Ze.length;ge<Le;ge++)Ce=Ze[ge],Ke?Y&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re,Ye,Ce):t.texImage2D(n.TEXTURE_2D,ge,Ie,Re,Ye,Ce);x.generateMipmaps=!1}else if(Ke){if(nt){const ge=Fe(_e);t.texStorage2D(n.TEXTURE_2D,Pe,Ie,ge.width,ge.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ye,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Re,Ye,_e);p(x)&&M(ne),we.__version=xe.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function oe(L,x,J){if(x.image.length!==6)return;const ne=te(L,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+J);const xe=i.get(ae);if(ae.version!==xe.__version||ne===!0){t.activeTexture(n.TEXTURE0+J);const we=lt.getPrimaries(lt.workingColorSpace),pe=x.colorSpace===mi?null:lt.getPrimaries(x.colorSpace),_e=x.colorSpace===mi||we===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,Ye=x.image[0]&&x.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!Re&&!Ye?Ie[ve]=m(x.image[ve],!0,s.maxCubemapSize):Ie[ve]=Ye?x.image[ve].image:x.image[ve],Ie[ve]=He(x,Ie[ve]);const Ce=Ie[0],Ze=r.convert(x.format,x.colorSpace),Ke=r.convert(x.type),nt=y(x.internalFormat,Ze,Ke,x.normalized,x.colorSpace),Y=x.isVideoTexture!==!0,Pe=xe.__version===void 0||ne===!0,ge=ae.dataReady;let Le=S(x,Ce);Ae(n.TEXTURE_CUBE_MAP,x);let ze;if(Re){Y&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,nt,Ce.width,Ce.height);for(let ve=0;ve<6;ve++){ze=Ie[ve].mipmaps;for(let $e=0;$e<ze.length;$e++){const We=ze[$e];x.format!==Nn?Ze!==null?Y?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,0,0,We.width,We.height,Ze,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,nt,We.width,We.height,0,We.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,0,0,We.width,We.height,Ze,Ke,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,nt,We.width,We.height,0,Ze,Ke,We.data)}}}else{if(ze=x.mipmaps,Y&&Pe){ze.length>0&&Le++;const ve=Fe(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ye){Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,Ze,Ke,Ie[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ie[ve].width,Ie[ve].height,0,Ze,Ke,Ie[ve].data);for(let $e=0;$e<ze.length;$e++){const Tt=ze[$e].image[ve].image;Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,0,0,Tt.width,Tt.height,Ze,Ke,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,nt,Tt.width,Tt.height,0,Ze,Ke,Tt.data)}}else{Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,Ke,Ie[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ze,Ke,Ie[ve]);for(let $e=0;$e<ze.length;$e++){const We=ze[$e];Y?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,0,0,Ze,Ke,We.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,nt,Ze,Ke,We.image[ve])}}}p(x)&&M(n.TEXTURE_CUBE_MAP),xe.__version=ae.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function P(L,x,J,ne,ae,xe){const we=r.convert(J.format,J.colorSpace),pe=r.convert(J.type),_e=y(J.internalFormat,we,pe,J.normalized,J.colorSpace),Re=i.get(x),Ye=i.get(J);if(Ye.__renderTarget=x,!Re.__hasExternalTextures){const Ie=Math.max(1,x.width>>xe),Ce=Math.max(1,x.height>>xe);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,xe,_e,Ie,Ce,x.depth,0,we,pe,null):t.texImage2D(ae,xe,_e,Ie,Ce,0,we,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,Ye.__webglTexture,0,be(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,Ye.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(L,x,J){if(n.bindRenderbuffer(n.RENDERBUFFER,L),x.depthBuffer){const ne=x.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,xe=b(x.stencilBuffer,ae),we=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(x),xe,x.width,x.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(x),xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,L)}else{const ne=x.textures;for(let ae=0;ae<ne.length;ae++){const xe=ne[ae],we=r.convert(xe.format,xe.colorSpace),pe=r.convert(xe.type),_e=y(xe.internalFormat,we,pe,xe.normalized,xe.colorSpace);Ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(x),_e,x.width,x.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(x),_e,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_e,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(L,x,J){const ne=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=i.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ne){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,x.depthTexture);const Re=r.convert(x.depthTexture.format),Ye=r.convert(x.depthTexture.type);let Ie;x.depthTexture.format===li?Ie=n.DEPTH_COMPONENT24:x.depthTexture.format===Ui&&(Ie=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ie,x.width,x.height,0,Re,Ye,null)}}else j(x.depthTexture,0);const xe=ae.__webglTexture,we=be(x),pe=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,_e=x.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===li)Ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,xe,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,xe,0);else if(x.depthTexture.format===Ui)Ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,xe,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(L){const x=i.get(L),J=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const ne=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){const ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=ne}if(L.depthTexture&&!x.__autoAllocateDepthBuffer)if(J)for(let ne=0;ne<6;ne++)V(x.__webglFramebuffer[ne],L,ne);else{const ne=L.texture.mipmaps;ne&&ne.length>0?V(x.__webglFramebuffer[0],L,0):V(x.__webglFramebuffer,L,0)}else if(J){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=n.createRenderbuffer(),C(x.__webglDepthbuffer[ne],L,!1);else{const ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=x.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,xe)}}else{const ne=L.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),C(x.__webglDepthbuffer,L,!1);else{const ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(L,x,J){const ne=i.get(L);x!==void 0&&P(ne.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&X(L)}function G(L){const x=L.texture,J=i.get(L),ne=i.get(x);L.addEventListener("dispose",_);const ae=L.textures,xe=L.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=x.version,o.memory.textures++),xe){J.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){J.__webglFramebuffer[pe]=[];for(let _e=0;_e<x.mipmaps.length;_e++)J.__webglFramebuffer[pe][_e]=n.createFramebuffer()}else J.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){J.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)J.__webglFramebuffer[pe]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(we)for(let pe=0,_e=ae.length;pe<_e;pe++){const Re=i.get(ae[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Ee(L)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const _e=ae[pe];J.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[pe]);const Re=r.convert(_e.format,_e.colorSpace),Ye=r.convert(_e.type),Ie=y(_e.internalFormat,Re,Ye,_e.normalized,_e.colorSpace,L.isXRRenderTarget===!0),Ce=be(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ie,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,J.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),C(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)P(J.__webglFramebuffer[pe][_e],L,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else P(J.__webglFramebuffer[pe],L,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(x)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let pe=0,_e=ae.length;pe<_e;pe++){const Re=ae[pe],Ye=i.get(Re);let Ie=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ye.__webglTexture),Ae(Ie,Re),P(J.__webglFramebuffer,L,Re,n.COLOR_ATTACHMENT0+pe,Ie,0),p(Re)&&M(Ie)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),Ae(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)P(J.__webglFramebuffer[_e],L,x,n.COLOR_ATTACHMENT0,pe,_e);else P(J.__webglFramebuffer,L,x,n.COLOR_ATTACHMENT0,pe,0);p(x)&&M(pe),t.unbindTexture()}L.depthBuffer&&X(L)}function $(L){const x=L.textures;for(let J=0,ne=x.length;J<ne;J++){const ae=x[J];if(p(ae)){const xe=w(L),we=i.get(ae).__webglTexture;t.bindTexture(xe,we),M(xe),t.unbindTexture()}}}const ce=[],Z=[];function he(L){if(L.samples>0){if(Ee(L)===!1){const x=L.textures,J=L.width,ne=L.height;let ae=n.COLOR_BUFFER_BIT;const xe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(L),pe=x.length>1;if(pe)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const _e=L.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);const Ye=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,J,ne,0,0,J,ne,ae,n.NEAREST),c===!0&&(ce.length=0,Z.length=0,ce.push(n.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(ce.push(xe),Z.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,we.__webglColorRenderbuffer[Re]);const Ye=i.get(x[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const x=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function be(L){return Math.min(s.maxSamples,L.samples)}function Ee(L){const x=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(L){const x=o.render.frame;h.get(L)!==x&&(h.set(L,x),L.update())}function He(L,x){const J=L.colorSpace,ne=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==br&&J!==mi&&(lt.getTransfer(J)===vt?(ne!==Nn||ae!==gn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",J)),x}function Fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=re,this.setupRenderTarget=G,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=P,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jd(n,e){function t(i,s=mi){let r;const o=lt.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Ta)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Aa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vc)return n.BYTE;if(i===xc)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===wa)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===Sc)return n.ALPHA;if(i===bc)return n.RGB;if(i===Nn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===Ra)return n.RED;if(i===Ca)return n.RED_INTEGER;if(i===Vi)return n.RG;if(i===Pa)return n.RG_INTEGER;if(i===La)return n.RGBA_INTEGER;if(i===dr||i===fr||i===pr||i===mr)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Bo||i===ko||i===Go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vo||i===Ho||i===Wo||i===Xo||i===qo||i===Mr||i===Yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vo||i===Ho)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xo)return r.COMPRESSED_R11_EAC;if(i===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Mr)return r.COMPRESSED_RG11_EAC;if(i===Yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zo||i===$o||i===Jo||i===Ko||i===Qo||i===jo||i===ea||i===ta||i===na||i===ia||i===sa||i===ra||i===oa||i===aa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$o)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ko)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ea)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ta)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===na)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ia)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ra)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===aa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===ca||i===ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===la)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ua||i===da||i===Sr||i===fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`;class Wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ic(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zn({vertexShader:Vv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xv extends Ei{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Wv,p={},M=t.getContextAttributes();let w=null,y=null;const b=[],S=[],R=new ye;let _=null,T=null;const A=new Sn;A.viewport=new Dt;const I=new Sn;I.viewport=new Dt;const F=[A,I],k=new Wd;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=b[W];return K===void 0&&(K=new Ao,b[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=b[W];return K===void 0&&(K=new Ao,b[W]=K),K.getGripSpace()},this.getHand=function(W){let K=b[W];return K===void 0&&(K=new Ao,b[W]=K),K.getHandSpace()};function H(W){const K=S.indexOf(W.inputSource);if(K===-1)return;const fe=b[K];fe!==void 0&&(fe.update(W.inputSource,W.frame,l||o),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let W=0;W<b.length;W++){const K=S[W];K!==null&&(S[W]=null,b[W].disconnect(K))}N=null,z=null,m.reset();for(const W in p)delete p[W];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,oe=null,P=null;M.depth&&(P=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Ui:li,oe=M.stencil?Bs:Jn);const C={colorFormat:t.RGBA8,depthFormat:P,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(C),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Un(u.textureWidth,u.textureHeight,{format:Nn,type:gn,depthTexture:new Gs(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Un(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(W){for(let K=0;K<W.removed.length;K++){const fe=W.removed[K],oe=S.indexOf(fe);oe>=0&&(S[oe]=null,b[oe].disconnect(fe))}for(let K=0;K<W.added.length;K++){const fe=W.added[K];let oe=S.indexOf(fe);if(oe===-1){for(let C=0;C<b.length;C++)if(C>=S.length){S.push(fe),oe=C;break}else if(S[C]===null){S[C]=fe,oe=C;break}if(oe===-1)break}const P=b[oe];P&&P.connect(fe)}}const B=new D,Q=new D;function ee(W,K,fe){B.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const oe=B.distanceTo(Q),P=K.projectionMatrix.elements,C=fe.projectionMatrix.elements,V=P[14]/(P[10]-1),X=P[14]/(P[10]+1),re=(P[9]+1)/P[5],G=(P[9]-1)/P[5],$=(P[8]-1)/P[0],ce=(C[8]+1)/C[0],Z=V*$,he=V*ce,be=oe/(-$+ce),Ee=be*-$;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ee),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),P[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const U=V+be,He=X+be,Fe=Z-Ee,L=he+(oe-Ee),x=re*X/He*U,J=G*X/He*U;W.projectionMatrix.makePerspective(Fe,L,x,J,U,He),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ue(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let K=W.near,fe=W.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),k.near=I.near=A.near=K,k.far=I.far=A.far=fe,(N!==k.near||z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,z=k.far),k.layers.mask=W.layers.mask|6,A.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;const oe=W.parent,P=k.cameras;ue(k,oe);for(let C=0;C<P.length;C++)ue(P[C],oe);P.length===2?ee(k,A,I):k.projectionMatrix.copy(A.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),de(W,k,oe)};function de(W,K,fe){fe===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=wr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(W){return p[W]};let Me=null;function Ae(W,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;fe.length!==k.cameras.length&&(k.cameras.length=0,oe=!0);for(let X=0;X<fe.length;X++){const re=fe[X];let G=null;if(f!==null)G=f.getViewport(re);else{const ce=d.getViewSubImage(u,re);G=ce.viewport,X===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let $=F[X];$===void 0&&($=new Sn,$.layers.enable(X),$.viewport=new Dt,F[X]=$),$.matrix.fromArray(re.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(re.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(G.x,G.y,G.width,G.height),X===0&&(k.matrix.copy($.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),oe===!0&&k.cameras.push($)}const P=s.enabledFeatures;if(P&&P.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const X=d.getDepthInformation(fe[0]);X&&X.isValid&&X.texture&&m.init(X,s.renderState)}if(P&&P.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let X=0;X<fe.length;X++){const re=fe[X].camera;if(re){let G=p[re];G||(G=new Ic,p[re]=G);const $=d.getCameraImage(re);G.sourceTexture=$}}}}for(let fe=0;fe<b.length;fe++){const oe=S[fe],P=b[fe];oe!==null&&P!==void 0&&P.update(oe,K,l||o)}Me&&Me(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const te=new Yd;te.setAnimationLoop(Ae),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const qv=new ft,ef=new et;ef.set(-1,0,0,0,1,0,0,0,1);function Yv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Od(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ef),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const S=b.program;i.uniformBlockBinding(y,S)}function l(y,b){let S=s[y.id];S===void 0&&(m(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",M));const R=b.program;i.updateUBOMapping(y,R);const _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){const b=d();y.__bindingPointIndex=b;const S=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=s[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,T=S.length;_<T;_++){const A=S[_];if(Array.isArray(A))for(let I=0,F=A.length;I<F;I++)f(A[I],_,I,R);else f(A,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,b,S,R){if(v(y,b,S,R)===!0){const _=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let I=0;I<T.length;I++){const F=T[I],k=p(F);g(F,y.__data,A),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(A+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function v(y,b,S,R){const _=y.value,T=b+"_"+S;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const A=R[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(y){const b=y.uniforms;let S=0;const R=16;for(let T=0,A=b.length;T<A;T++){const I=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,k=I.length;F<k;F++){const N=I[F],z=Array.isArray(N.value)?N.value:[N.value];for(let H=0,O=z.length;H<O;H++){const j=z[H],B=p(j),Q=S%R,ee=Q%B.boundary,ue=Q+ee;S+=ee,ue!==0&&R-ue<B.storage&&(S+=R-ue),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=B.storage}}}const _=S%R;return _>0&&(S+=R-_),y.__size=S,y.__cache={},this}function p(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){const b=y.target;b.removeEventListener("dispose",M);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}const $v=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function Jv(){return ni===null&&(ni=new Rc($v,16,16,Vi,Kn),ni.name="DFG_LUT",ni.minFilter=Jt,ni.magFilter=Jt,ni.wrapS=ri,ni.wrapT=ri,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class tf{constructor(e={}){const{canvas:t=yd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,m=new Set([La,Pa,Ca]),p=new Set([gn,Jn,zs,Bs,Ta,Aa]),M=new Uint32Array(4),w=new Int32Array(4),y=new D;let b=null,S=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let I=!1,F=null,k=null,N=null,z=null;this._outputColorSpace=sn;let H=0,O=0,j=null,B=-1,Q=null;const ee=new Dt,ue=new Dt;let de=null;const Me=new ot(0);let Ae=0,te=t.width,W=t.height,K=1,fe=null,oe=null;const P=new Dt(0,0,te,W),C=new Dt(0,0,te,W);let V=!1;const X=new Oa;let re=!1,G=!1;const $=new ft,ce=new D,Z=new Dt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ee(){return j===null?K:1}let U=i;function He(E,q){return t.getContext(E,q)}let Fe,L,x,J,ne,ae,xe,we,pe,_e,Re,Ye,Ie,Ce,Ze,Ke,nt,Y,Pe,ge,Le,ze,ve;try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",kn,!1),U===null){const q="webgl2";if(U=He(q,E),U===null)throw He(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(E){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),ct("WebGLRenderer: "+E.message),E}function $e(){Fe=new Kg(U),Fe.init(),Le=new jd(U,Fe),L=new Gg(U,Fe,e,Le),x=new kv(U,Fe),L.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),k=U.createFramebuffer(),N=U.createFramebuffer(),z=U.createFramebuffer(),J=new e_(U),ne=new Tv,ae=new Gv(U,Fe,x,ne,L,Le,J),xe=new Jg(A),we=new nm(U),ze=new Bg(U,we),pe=new Qg(U,we,J,ze),_e=new n_(U,pe,we,ze,J),Y=new t_(U,L,ae),Ze=new Vg(ne),Re=new wv(A,xe,Fe,L,ze,Ze),Ye=new Yv(A,ne),Ie=new Rv,Ce=new Nv(Fe),nt=new zg(A,xe,x,_e,g,c),Ke=new Bv(A,_e,L),ve=new Zv(U,J,L,x),Pe=new kg(U,Fe,J),ge=new jg(U,Fe,J),J.programs=Re.programs,A.capabilities=L,A.extensions=Fe,A.properties=ne,A.renderLists=Ie,A.shadowMap=Ke,A.state=x,A.info=J}v!==gn&&(T=new s_(v,t.width,t.height,a,s,r));const We=new Xv(A,U);this.xr=We,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(te,W,!1))},this.getSize=function(E){return E.set(te,W)},this.setSize=function(E,q,le=!0){if(We.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,W=q,t.width=Math.floor(E*K),t.height=Math.floor(q*K),le===!0&&(t.style.width=E+"px",t.style.height=q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,q)},this.getDrawingBufferSize=function(E){return E.set(te*K,W*K).floor()},this.setDrawingBufferSize=function(E,q,le){te=E,W=q,K=le,t.width=Math.floor(E*le),t.height=Math.floor(q*le),this.setViewport(0,0,E,q)},this.setEffects=function(E){if(v===gn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let q=0;q<E.length;q++)if(E[q].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(P)},this.setViewport=function(E,q,le,ie){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,q,le,ie),x.viewport(ee.copy(P).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(C)},this.setScissor=function(E,q,le,ie){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,q,le,ie),x.scissor(ue.copy(C).multiplyScalar(K).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){x.setScissorTest(V=E)},this.setOpaqueSort=function(E){fe=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(E=!0,q=!0,le=!0){let ie=0;if(E){let se=!1;if(j!==null){const Oe=j.texture.format;se=m.has(Oe)}if(se){const Oe=j.texture.type,ke=p.has(Oe),Ne=nt.getClearColor(),Ge=nt.getClearAlpha(),Xe=Ne.r,st=Ne.g,at=Ne.b;ke?(M[0]=Xe,M[1]=st,M[2]=at,M[3]=Ge,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=Xe,w[1]=st,w[2]=at,w[3]=Ge,U.clearBufferiv(U.COLOR,0,w))}else ie|=U.COLOR_BUFFER_BIT}q&&(ie|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&U.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),nt.dispose(),Ie.dispose(),Ce.dispose(),ne.dispose(),xe.dispose(),_e.dispose(),ze.dispose(),ve.dispose(),Re.dispose(),We.dispose(),We.removeEventListener("sessionstart",dh),We.removeEventListener("sessionend",fh),Yi.stop()};function Tt(E){E.preventDefault(),ql("WebGLRenderer: Context Lost."),I=!0}function gt(){ql("WebGLRenderer: Context Restored."),I=!1;const E=J.autoReset,q=Ke.enabled,le=Ke.autoUpdate,ie=Ke.needsUpdate,se=Ke.type;$e(),J.autoReset=E,Ke.enabled=q,Ke.autoUpdate=le,Ke.needsUpdate=ie,Ke.type=se}function kn(E){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jn(E){const q=E.target;q.removeEventListener("dispose",jn),Tf(q)}function Tf(E){Af(E),ne.remove(E)}function Af(E){const q=ne.get(E).programs;q!==void 0&&(q.forEach(function(le){Re.releaseProgram(le)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,q,le,ie,se,Oe){q===null&&(q=he);const ke=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ne=Pf(E,q,le,ie,se);x.setMaterial(ie,ke);let Ge=le.index,Xe=1;if(ie.wireframe===!0){if(Ge=pe.getWireframeAttribute(le),Ge===void 0)return;Xe=2}const st=le.drawRange,at=le.attributes.position;let Ve=st.start*Xe,_t=(st.start+st.count)*Xe;Oe!==null&&(Ve=Math.max(Ve,Oe.start*Xe),_t=Math.min(_t,(Oe.start+Oe.count)*Xe)),Ge!==null?(Ve=Math.max(Ve,0),_t=Math.min(_t,Ge.count)):at!=null&&(Ve=Math.max(Ve,0),_t=Math.min(_t,at.count));const Bt=_t-Ve;if(Bt<0||Bt===1/0)return;ze.setup(se,ie,Ne,le,Ge);let Ct,bt=Pe;if(Ge!==null&&(Ct=we.get(Ge),bt=ge,bt.setIndex(Ct)),se.isMesh)ie.wireframe===!0?(x.setLineWidth(ie.wireframeLinewidth*Ee()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(se.isLine){let en=ie.linewidth;en===void 0&&(en=1),x.setLineWidth(en*Ee()),se.isLineSegments?bt.setMode(U.LINES):se.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else se.isPoints?bt.setMode(U.POINTS):se.isSprite&&bt.setMode(U.TRIANGLES);if(se.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))bt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const en=se._multiDrawStarts,Be=se._multiDrawCounts,an=se._multiDrawCount,ut=Ge?we.get(Ge).bytesPerElement:1,wn=ne.get(ie).currentProgram.getUniforms();for(let ei=0;ei<an;ei++)wn.setValue(U,"_gl_DrawID",ei),bt.render(en[ei]/ut,Be[ei])}else if(se.isInstancedMesh)bt.renderInstances(Ve,Bt,se.count);else if(le.isInstancedBufferGeometry){const en=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Be=Math.min(le.instanceCount,en);bt.renderInstances(Ve,Bt,Be)}else bt.render(Ve,Bt)};function uh(E,q,le,ie){F!==null&&E.isNodeMaterial&&F.setObject(ie,E),re===!0&&Ze.setState(E,le,!1),E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,Xr(E,q,ie),E.side=ki,E.needsUpdate=!0,Xr(E,q,ie),E.side=Pn):Xr(E,q,ie)}this.compile=function(E,q,le=null){le===null&&(le=E),F!==null&&F.renderStart(E,q,le),S=Ce.get(le),S.init(q),_.push(S),le.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),E!==le&&E.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(S.pushLight(se),se.castShadow&&S.pushShadow(se))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),G=this.localClippingEnabled,re=Ze.init(this.clippingPlanes,G),re===!0&&Ze.setGlobalState(this.clippingPlanes,q),F!==null&&Ke.render(S.state.shadowsArray,le,q);const ie=new Set;return E.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Ne=Oe[ke];uh(Ne,le,q,se),ie.add(Ne)}else uh(Oe,le,q,se),ie.add(Oe)}),S=_.pop(),F!==null&&F.renderEnd(),ie},this.compileAsync=function(E,q,le=null){const ie=this.compile(E,q,le);return new Promise(se=>{function Oe(){if(ie.forEach(function(ke){const Ge=ne.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&ie.delete(ke)}),ie.size===0){se(E);return}setTimeout(Oe,10)}Fe.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let nl=null;function Rf(E){nl&&nl(E)}function dh(){Yi.stop()}function fh(){Yi.start()}const Yi=new Yd;Yi.setAnimationLoop(Rf),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(E){nl=E,We.setAnimationLoop(E),E===null?Yi.stop():Yi.start()},We.addEventListener("sessionstart",dh),We.addEventListener("sessionend",fh),this.render=function(E,q){if(q!==void 0&&q.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(E,q);const le=We.enabled===!0&&We.isPresenting===!0,ie=T!==null&&(j===null||le)&&T.begin(A,j);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(q),q=We.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,q,j),S=Ce.get(E,_.length),S.init(q),S.state.textureUnits=ae.getTextureUnits(),_.push(S),$.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix($,qn,q.reversedDepth),G=this.localClippingEnabled,re=Ze.init(this.clippingPlanes,G),b=Ie.get(E,R.length),b.init(),R.push(b),We.enabled===!0&&We.isPresenting===!0){const ke=A.xr.getDepthSensingMesh();ke!==null&&il(ke,q,-1/0,A.sortObjects)}il(E,q,0,A.sortObjects),b.finish(),F!==null&&F.updateLights(S.state.lightsArray),A.sortObjects===!0&&b.sort(fe,oe),be=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,be&&nt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ze.beginShadows();const se=S.state.shadowsArray;if(Ke.render(se,E,q),re===!0&&Ze.endShadows(),(ie&&T.hasRenderPass())===!1){const ke=b.opaque,Ne=b.transmissive;if(S.setupLights(),q.isArrayCamera){const Ge=q.cameras;if(Ne.length>0)for(let Xe=0,st=Ge.length;Xe<st;Xe++){const at=Ge[Xe];mh(ke,Ne,E,at)}be&&nt.render(E);for(let Xe=0,st=Ge.length;Xe<st;Xe++){const at=Ge[Xe];ph(b,E,at,at.viewport)}}else Ne.length>0&&mh(ke,Ne,E,q),be&&nt.render(E),ph(b,E,q)}j!==null&&O===0&&(ae.updateMultisampleRenderTarget(j),ae.updateRenderTargetMipmap(j)),ie&&T.end(A),E.isScene===!0&&E.onAfterRender(A,E,q),ze.resetDefaultState(),B=-1,Q=null,_.pop(),_.length>0?(S=_[_.length-1],ae.setTextureUnits(S.state.textureUnits),re===!0&&Ze.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,F!==null&&F.renderEnd()};function il(E,q,le,ie){if(E.visible===!1)return;if(E.layers.test(q.layers)){if(E.isGroup)le=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(q);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(X)){ie&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const ke=_e.update(E),Ne=E.material;Ne.visible&&b.push(E,ke,Ne,le,Z.z,null,q)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(X))){const ke=_e.update(E),Ne=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Z.copy(E.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Z.copy(ke.boundingSphere.center)),Z.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Ne)){const Ge=ke.groups;for(let Xe=0,st=Ge.length;Xe<st;Xe++){const at=Ge[Xe],Ve=Ne[at.materialIndex];Ve&&Ve.visible&&b.push(E,ke,Ve,le,Z.z,at,q)}}else Ne.visible&&b.push(E,ke,Ne,le,Z.z,null,q)}}const Oe=E.children;for(let ke=0,Ne=Oe.length;ke<Ne;ke++)il(Oe[ke],q,le,ie)}function ph(E,q,le,ie){const{opaque:se,transmissive:Oe,transparent:ke}=E;S.setupLightsView(le),re===!0&&Ze.setGlobalState(A.clippingPlanes,le),ie&&x.viewport(ee.copy(ie)),se.length>0&&Wr(se,q,le),Oe.length>0&&Wr(Oe,q,le),ke.length>0&&Wr(ke,q,le),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function mh(E,q,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){const Ve=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new Un(1,1,{generateMipmaps:!0,type:Ve?Kn:gn,minFilter:Ni,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Oe=S.state.transmissionRenderTarget[ie.id],ke=ie.viewport||ee;Oe.setSize(ke.z*A.transmissionResolutionScale,ke.w*A.transmissionResolutionScale);const Ne=A.getRenderTarget(),Ge=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(Oe),A.getClearColor(Me),Ae=A.getClearAlpha(),Ae<1&&A.setClearColor(16777215,.5),A.clear(),be&&nt.render(le);const st=A.toneMapping;A.toneMapping=Yn;const at=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),re===!0&&Ze.setGlobalState(A.clippingPlanes,ie),Wr(E,le,ie),ae.updateMultisampleRenderTarget(Oe),ae.updateRenderTargetMipmap(Oe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let _t=0,Bt=q.length;_t<Bt;_t++){const Ct=q[_t],{object:bt,geometry:en,material:Be,group:an}=Ct;if(Be.side===Pn&&bt.layers.test(ie.layers)){const ut=Be.side;Be.side=dn,Be.needsUpdate=!0,gh(bt,le,ie,en,Be,an),Be.side=ut,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(ae.updateMultisampleRenderTarget(Oe),ae.updateRenderTargetMipmap(Oe))}A.setRenderTarget(Ne,Ge,Xe),A.setClearColor(Me,Ae),at!==void 0&&(ie.viewport=at),A.toneMapping=st}function Wr(E,q,le){const ie=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Oe=E.length;se<Oe;se++){const ke=E[se],{object:Ne,geometry:Ge,group:Xe}=ke;let st=ke.material;st.allowOverride===!0&&ie!==null&&(st=ie),Ne.layers.test(le.layers)&&gh(Ne,q,le,Ge,st,Xe)}}function gh(E,q,le,ie,se,Oe){F!==null&&se.isNodeMaterial&&F.setObject(E,se),E.onBeforeRender(A,q,le,ie,se,Oe),E.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),se.onBeforeRender(A,q,le,ie,E,Oe),se.transparent===!0&&se.side===Pn&&se.forceSinglePass===!1?(se.side=dn,se.needsUpdate=!0,A.renderBufferDirect(le,q,ie,se,E,Oe),se.side=ki,se.needsUpdate=!0,A.renderBufferDirect(le,q,ie,se,E,Oe),se.side=Pn):A.renderBufferDirect(le,q,ie,se,E,Oe),E.onAfterRender(A,q,le,ie,se,Oe)}function Xr(E,q,le){q.isScene!==!0&&(q=he);const ie=ne.get(E),se=S.state.lights,Oe=S.state.shadowsArray,ke=se.state.version,Ne=Re.getParameters(E,se.state,Oe,q,le,S.state.lightProbeGridArray),Ge=Re.getProgramCacheKey(Ne);let Xe=ie.programs;ie.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ie.envMap=xe.get(E.envMap||ie.environment,st),ie.envMapRotation=ie.environment!==null&&E.envMap===null?q.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",jn),Xe=new Map,ie.programs=Xe);let at=Xe.get(Ge);if(at!==void 0){if(ie.currentProgram===at&&ie.lightsStateVersion===ke)return vh(E,Ne),at}else Ne.uniforms=Re.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,le,Ne),E.onBeforeCompile(Ne,A),at=Re.acquireProgram(Ne,Ge),Xe.set(Ge,at),ie.uniforms=Ne.uniforms;const Ve=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=Ze.uniform),vh(E,Ne),ie.needsLights=Df(E),ie.lightsStateVersion=ke,ie.needsLights&&(Ve.ambientLightColor.value=se.state.ambient,Ve.lightProbe.value=se.state.probe,Ve.sunLights.value=se.state.sun,Ve.sunLightShadows.value=se.state.sunShadow,Ve.directionalLights.value=se.state.directional,Ve.directionalLightShadows.value=se.state.directionalShadow,Ve.spotLights.value=se.state.spot,Ve.spotLightShadows.value=se.state.spotShadow,Ve.rectAreaLights.value=se.state.rectArea,Ve.ltc_1.value=se.state.rectAreaLTC1,Ve.ltc_2.value=se.state.rectAreaLTC2,Ve.pointLights.value=se.state.point,Ve.pointLightShadows.value=se.state.pointShadow,Ve.hemisphereLights.value=se.state.hemi,Ve.sunShadowMatrix.value=se.state.sunShadowMatrix,Ve.sunShadowCascade.value=se.state.sunShadowCascade,Ve.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ve.spotLightMatrix.value=se.state.spotLightMatrix,Ve.spotLightMap.value=se.state.spotLightMap,Ve.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.lightProbeGrid=S.state.lightProbeGridArray.length>0,ie.currentProgram=at,ie.uniformsList=null,at}function _h(E){if(E.uniformsList===null){const q=E.currentProgram.getUniforms();E.uniformsList=Ro.seqWithValue(q.seq,E.uniforms)}return E.uniformsList}function vh(E,q){const le=ne.get(E);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function Cf(E,q){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let le=0,ie=E.length;le<ie;le++){const se=E[le];if(se.texture!==null&&se.boundingBox.containsPoint(y))return se}return null}function Pf(E,q,le,ie,se){q.isScene!==!0&&(q=he),ae.resetTextureUnits();const Oe=q.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Ne=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:lt.workingColorSpace,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Xe=xe.get(ie.envMap||ke,Ge),st=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!le.morphAttributes.position,_t=!!le.morphAttributes.normal,Bt=!!le.morphAttributes.color;let Ct=Yn;ie.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ct=A.toneMapping);const bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,en=bt!==void 0?bt.length:0,Be=ne.get(ie),an=S.state.lights;if(re===!0&&(G===!0||E!==Q)){const At=E===Q&&ie.id===B;Ze.setState(ie,E,At)}let ut=!1;ie.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==an.state.version||Be.outputColorSpace!==Ne||se.isBatchedMesh&&Be.batching===!1||!se.isBatchedMesh&&Be.batching===!0||se.isBatchedMesh&&Be.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Be.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Be.instancing===!1||!se.isInstancedMesh&&Be.instancing===!0||se.isSkinnedMesh&&Be.skinning===!1||!se.isSkinnedMesh&&Be.skinning===!0||se.isInstancedMesh&&Be.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Be.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Be.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Be.instancingMorph===!1&&se.morphTexture!==null||Be.envMap!==Xe||ie.fog===!0&&Be.fog!==Oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ze.numPlanes||Be.numIntersection!==Ze.numIntersection)||Be.vertexAlphas!==st||Be.vertexTangents!==at||Be.morphTargets!==Ve||Be.morphNormals!==_t||Be.morphColors!==Bt||Be.toneMapping!==Ct||Be.morphTargetsCount!==en||!!Be.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Be.__version=ie.version);let wn=Be.currentProgram;ut===!0&&(wn=Xr(ie,q,se),F&&ie.isNodeMaterial&&F.onUpdateProgram(ie,wn,Be));let ei=!1,Ti=!1,ds=!1;const St=wn.getUniforms(),Ut=Be.uniforms;if(x.useProgram(wn.program)&&(ei=!0,Ti=!0,ds=!0),ie.id!==B&&(B=ie.id,Ti=!0),Be.needsLights){const At=Cf(S.state.lightProbeGridArray,se);Be.lightProbeGrid!==At&&(Be.lightProbeGrid=At,Ti=!0)}if(ei||Q!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(U,"projectionMatrix",E.projectionMatrix),St.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ri=St.map.cameraPosition;Ri!==void 0&&Ri.setValue(U,ce.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&St.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Ti=!0,ds=!0)}if(Be.needsLights&&(an.state.sunShadowMap.length>0&&St.setValue(U,"sunShadowMap",an.state.sunShadowMap,ae),an.state.directionalShadowMap.length>0&&St.setValue(U,"directionalShadowMap",an.state.directionalShadowMap,ae),an.state.spotShadowMap.length>0&&St.setValue(U,"spotShadowMap",an.state.spotShadowMap,ae),an.state.pointShadowMap.length>0&&St.setValue(U,"pointShadowMap",an.state.pointShadowMap,ae)),se.isSkinnedMesh){St.setOptional(U,se,"bindMatrix"),St.setOptional(U,se,"bindMatrixInverse");const At=se.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),St.setValue(U,"boneTexture",At.boneTexture,ae))}se.isBatchedMesh&&(St.setOptional(U,se,"batchingTexture"),St.setValue(U,"batchingTexture",se._matricesTexture,ae),St.setOptional(U,se,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",se._indirectTexture,ae),St.setOptional(U,se,"batchingColorTexture"),se._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",se._colorsTexture,ae));const Ai=le.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Y.update(se,le,wn),(Ti||Be.receiveShadow!==se.receiveShadow)&&(Be.receiveShadow=se.receiveShadow,St.setValue(U,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Ut.envMapIntensity.value=q.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Jv()),Ti){if(St.setValue(U,"toneMappingExposure",A.toneMappingExposure),Be.needsLights&&Lf(Ut,ds),Oe&&ie.fog===!0&&Ye.refreshFogUniforms(Ut,Oe),Ye.refreshMaterialUniforms(Ut,ie,K,W,S.state.transmissionRenderTarget[E.id]),Be.needsLights&&Be.lightProbeGrid){const At=Be.lightProbeGrid;Ut.probesSH.value=At.texture,Ut.probesMin.value.copy(At.boundingBox.min),Ut.probesMax.value.copy(At.boundingBox.max),Ut.probesResolution.value.copy(At.resolution)}Ro.upload(U,_h(Be),Ut,ae)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ro.upload(U,_h(Be),Ut,ae),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&St.setValue(U,"center",se.center),St.setValue(U,"modelViewMatrix",se.modelViewMatrix),St.setValue(U,"normalMatrix",se.normalMatrix),St.setValue(U,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){const At=ie.uniformsGroups;for(let Ri=0,fs=At.length;Ri<fs;Ri++){const yh=At[Ri];ve.update(yh,wn),ve.bind(yh,wn)}}return wn}function Lf(E,q){E.ambientLightColor.needsUpdate=q,E.lightProbe.needsUpdate=q,E.sunLights.needsUpdate=q,E.sunLightShadows.needsUpdate=q,E.directionalLights.needsUpdate=q,E.directionalLightShadows.needsUpdate=q,E.pointLights.needsUpdate=q,E.pointLightShadows.needsUpdate=q,E.spotLights.needsUpdate=q,E.spotLightShadows.needsUpdate=q,E.rectAreaLights.needsUpdate=q,E.hemisphereLights.needsUpdate=q}function Df(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(E,q,le){const ie=ne.get(E);ie.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ne.get(E.texture).__webglTexture=q,ne.get(E.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,q){const le=ne.get(E);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(E,q=0,le=0){j=E,H=q,O=le;let ie=null,se=!1,Oe=!1;if(E){const Ne=ne.get(E);if(Ne.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Ne.__webglFramebuffer),ee.copy(E.viewport),ue.copy(E.scissor),de=E.scissorTest,x.viewport(ee),x.scissor(ue),x.setScissorTest(de),B=-1;return}else if(Ne.__webglFramebuffer===void 0)ae.setupRenderTarget(E);else if(Ne.__hasExternalTextures)ae.rebindTextures(E,ne.get(E.texture).__webglTexture,ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const st=E.depthTexture;if(Ne.__boundDepthTexture!==st){if(st!==null&&ne.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Oe=!0);const Xe=ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ie=Xe[q][le]:ie=Xe[q],se=!0):E.samples>0&&ae.useMultisampledRTT(E)===!1?ie=ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[le]:ie=Xe,ee.copy(E.viewport),ue.copy(E.scissor),de=E.scissorTest}else ee.copy(P).multiplyScalar(K).floor(),ue.copy(C).multiplyScalar(K).floor(),de=V;if(le!==0&&(ie=k),x.bindFramebuffer(U.FRAMEBUFFER,ie)&&x.drawBuffers(E,ie),x.viewport(ee),x.scissor(ue),x.setScissorTest(de),se){const Ne=ne.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,le)}else if(Oe){const Ne=q;for(let Ge=0;Ge<E.textures.length;Ge++){const Xe=ne.get(E.textures[Ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,le,Ne)}}else if(E!==null&&le!==0){const Ne=ne.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,le)}B=-1};function xh(E){const q=ne.get(E);return(q.__readFormat!==E.format||q.__readType!==E.type)&&(q.__readFormat=E.format,q.__readType=E.type,q.__formatReadable=L.textureFormatReadable(E.format),q.__typeReadable=L.textureTypeReadable(E.type)),q}this.readRenderTargetPixels=function(E,q,le,ie,se,Oe,ke,Ne=0){if(!(E&&E.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){x.bindFramebuffer(U.FRAMEBUFFER,Ge);try{const Xe=E.textures[Ne],st=Xe.format,at=Xe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne);const Ve=xh(Xe);if(Ve.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=E.width-ie&&le>=0&&le<=E.height-se&&U.readPixels(q,le,ie,se,Le.convert(st),Le.convert(at),Oe)}finally{const Xe=j!==null?ne.get(j).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(E,q,le,ie,se,Oe,ke,Ne=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(q>=0&&q<=E.width-ie&&le>=0&&le<=E.height-se){x.bindFramebuffer(U.FRAMEBUFFER,Ge);const Xe=E.textures[Ne],st=Xe.format,at=Xe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ne);const Ve=xh(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,Oe.byteLength,U.STREAM_READ),U.readPixels(q,le,ie,se,Le.convert(st),Le.convert(at),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Bt=j!==null?ne.get(j).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Bt);const Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zf(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Oe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(_t),U.deleteSync(Ct),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,q=null,le=0){const ie=Math.pow(2,-le),se=Math.floor(E.image.width*ie),Oe=Math.floor(E.image.height*ie),ke=q!==null?q.x:0,Ne=q!==null?q.y:0;ae.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,le,0,0,ke,Ne,se,Oe),x.unbindTexture()},this.copyTextureToTexture=function(E,q,le=null,ie=null,se=0,Oe=0){let ke,Ne,Ge,Xe,st,at,Ve,_t,Bt;const Ct=E.isCompressedTexture?E.mipmaps[Oe]:E.image;if(le!==null)ke=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Ge=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,st=le.min.y,at=le.isBox3?le.min.z:0;else{const Ut=Math.pow(2,-se);ke=Math.floor(Ct.width*Ut),Ne=Math.floor(Ct.height*Ut),E.isDataArrayTexture?Ge=Ct.depth:E.isData3DTexture?Ge=Math.floor(Ct.depth*Ut):Ge=1,Xe=0,st=0,at=0}ie!==null?(Ve=ie.x,_t=ie.y,Bt=ie.z):(Ve=0,_t=0,Bt=0);const bt=Le.convert(q.format),en=Le.convert(q.type);let Be;q.isData3DTexture?(ae.setTexture3D(q,0),Be=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),Be=U.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),Be=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const an=x.getParameter(U.UNPACK_ROW_LENGTH),ut=x.getParameter(U.UNPACK_IMAGE_HEIGHT),wn=x.getParameter(U.UNPACK_SKIP_PIXELS),ei=x.getParameter(U.UNPACK_SKIP_ROWS),Ti=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),x.pixelStorei(U.UNPACK_SKIP_ROWS,st),x.pixelStorei(U.UNPACK_SKIP_IMAGES,at);const ds=E.isDataArrayTexture||E.isData3DTexture,St=q.isDataArrayTexture||q.isData3DTexture;if(E.isDepthTexture){const Ut=ne.get(E),Ai=ne.get(q),At=ne.get(Ut.__renderTarget),Ri=ne.get(Ai.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,At.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let fs=0;fs<Ge;fs++)ds&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ne.get(E).__webglTexture,se,at+fs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ne.get(q).__webglTexture,Oe,Bt+fs)),U.blitFramebuffer(Xe,st,ke,Ne,Ve,_t,ke,Ne,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(se!==0||E.isRenderTargetTexture||ne.has(E)){const Ut=ne.get(E),Ai=ne.get(q);x.bindFramebuffer(U.READ_FRAMEBUFFER,N),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let At=0;At<Ge;At++)ds?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,se,at+At):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,se),St?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ai.__webglTexture,Oe,Bt+At):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ai.__webglTexture,Oe),se!==0?U.blitFramebuffer(Xe,st,ke,Ne,Ve,_t,ke,Ne,U.COLOR_BUFFER_BIT,U.NEAREST):St?U.copyTexSubImage3D(Be,Oe,Ve,_t,Bt+At,Xe,st,ke,Ne):U.copyTexSubImage2D(Be,Oe,Ve,_t,Xe,st,ke,Ne);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Be,Oe,Ve,_t,Bt,ke,Ne,Ge,bt,en,Ct.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Be,Oe,Ve,_t,Bt,ke,Ne,Ge,bt,Ct.data):U.texSubImage3D(Be,Oe,Ve,_t,Bt,ke,Ne,Ge,bt,en,Ct):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Oe,Ve,_t,ke,Ne,bt,en,Ct.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Oe,Ve,_t,Ct.width,Ct.height,bt,Ct.data):U.texSubImage2D(U.TEXTURE_2D,Oe,Ve,_t,ke,Ne,bt,en,Ct);x.pixelStorei(U.UNPACK_ROW_LENGTH,an),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut),x.pixelStorei(U.UNPACK_SKIP_PIXELS,wn),x.pixelStorei(U.UNPACK_SKIP_ROWS,ei),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ti),Oe===0&&q.generateMipmaps&&U.generateMipmap(Be),x.unbindTexture()},this.initRenderTarget=function(E){ne.get(E).__webglFramebuffer===void 0&&ae.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ae.setTextureCube(E,0):E.isData3DTexture?ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ae.setTexture2DArray(E,0):ae.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){H=0,O=0,j=null,x.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const ci=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ea,AddEquation:es,AddOperation:ld,AdditiveBlending:Vl,AgXToneMapping:mc,AlphaFormat:Sc,AlwaysCompare:vd,AlwaysDepth:Lo,AlwaysStencilFunc:dd,ArcCurve:Cd,ArrayCamera:Wd,BackSide:dn,BasicDepthPacking:hd,Box3:Wi,BoxGeometry:wi,BufferAttribute:Fn,BufferGeometry:Ot,ByteType:vc,Camera:Vc,CanvasTexture:Dc,CatmullRomCurve3:Uc,CineonToneMapping:fc,CircleGeometry:za,ClampToEdgeWrapping:ri,Color:ot,ColorManagement:lt,ConeGeometry:cs,ConstantAlphaFactor:rd,ConstantColorFactor:id,Controls:qd,CubeCamera:Hd,CubeDepthTexture:Rd,CubeReflectionMapping:Gi,CubeRefractionMapping:rs,CubeTexture:Lc,CubeUVReflectionMapping:Dr,CubicBezierCurve:Fc,CubicBezierCurve3:Pd,CullFaceBack:Gl,CullFaceFront:Gu,CullFaceNone:ku,Curve:Qn,CurvePath:Dd,CustomBlending:Hu,CustomToneMapping:pc,CylinderGeometry:Nr,Data3DTexture:Ed,DataArrayTexture:wc,DataTexture:Rc,DepthFormat:li,DepthStencilFormat:Ui,DepthTexture:Gs,DirectionalLight:Hc,DoubleSide:Pn,DstAlphaFactor:Qu,DstColorFactor:ed,EllipseCurve:ka,EqualCompare:md,EqualDepth:Io,EquirectangularReflectionMapping:bo,EquirectangularRefractionMapping:Eo,Euler:bi,EventDispatcher:Ei,ExternalTexture:Ic,ExtrudeGeometry:qs,Float32BufferAttribute:pt,FloatType:In,FogExp2:Fa,FrontSide:ki,Frustum:Oa,GLSL3:Xl,GreaterCompare:gd,GreaterDepth:Uo,GreaterEqualCompare:Ia,GreaterEqualDepth:No,Group:Fi,HalfFloatType:Kn,HemisphereLight:Vd,IcosahedronGeometry:Fr,ImageUtils:Sd,InstancedBufferAttribute:Yl,InstancedMesh:Zl,IntType:wa,KeepStencilOp:To,Layers:Ua,LessCompare:pd,LessDepth:Do,LessEqualCompare:Da,LessEqualDepth:Os,Light:Wa,LightShadow:Gc,Line:Mp,LineBasicMaterial:Cc,LineCurve:Oc,LineCurve3:Ld,LineDashedMaterial:Qp,LinearFilter:Jt,LinearMipmapLinearFilter:Ni,LinearMipmapNearestFilter:wo,LinearSRGBColorSpace:br,LinearToneMapping:uc,LinearTransfer:Er,MOUSE:vi,Material:qi,MathUtils:mn,Matrix2:tc,Matrix3:et,Matrix4:ft,MaxEquation:Yu,Mesh:fn,MeshBasicMaterial:Ir,MeshDepthMaterial:kd,MeshDistanceMaterial:Gd,MeshStandardMaterial:Ps,MinEquation:qu,MirroredRepeatWrapping:Oo,MixOperation:ad,MultiplyBlending:Wl,MultiplyOperation:hc,NearestFilter:Zt,NearestMipmapLinearFilter:lr,NearestMipmapNearestFilter:cd,NeutralToneMapping:gc,NeverCompare:fd,NeverDepth:Po,NoBlending:oi,NoColorSpace:mi,NoToneMapping:Yn,NormalBlending:Is,NotEqualCompare:_d,NotEqualDepth:Fo,Object3D:Ft,ObjectSpaceNormalMap:ud,OneFactor:$u,OneMinusConstantAlphaFactor:od,OneMinusConstantColorFactor:sd,OneMinusDstAlphaFactor:ju,OneMinusDstColorFactor:td,OneMinusSrcAlphaFactor:cc,OneMinusSrcColorFactor:Ku,OrthographicCamera:Or,PCFShadowMap:Ds,PCFSoftShadowMap:Vu,PMREMGenerator:nc,Path:Jl,PerspectiveCamera:Sn,Plane:si,PlaneGeometry:hs,PointLight:Xa,Points:Ad,PointsMaterial:Pc,PolyhedronGeometry:Ba,QuadraticBezierCurve:zc,QuadraticBezierCurve3:Bc,Quaternion:Si,R11_EAC_Format:Xo,RED_GREEN_RGTC2_Format:Sr,RED_RGTC1_Format:ua,REVISION:ba,RG11_EAC_Format:Mr,RGBAFormat:Nn,RGBAIntegerFormat:La,RGBA_ASTC_10x10_Format:ra,RGBA_ASTC_10x5_Format:na,RGBA_ASTC_10x6_Format:ia,RGBA_ASTC_10x8_Format:sa,RGBA_ASTC_12x10_Format:oa,RGBA_ASTC_12x12_Format:aa,RGBA_ASTC_4x4_Format:Zo,RGBA_ASTC_5x4_Format:$o,RGBA_ASTC_5x5_Format:Jo,RGBA_ASTC_6x5_Format:Ko,RGBA_ASTC_6x6_Format:Qo,RGBA_ASTC_8x5_Format:jo,RGBA_ASTC_8x6_Format:ea,RGBA_ASTC_8x8_Format:ta,RGBA_BPTC_Format:la,RGBA_ETC2_EAC_Format:Wo,RGBA_PVRTC_2BPPV1_Format:Go,RGBA_PVRTC_4BPPV1_Format:ko,RGBA_S3TC_DXT1_Format:fr,RGBA_S3TC_DXT3_Format:pr,RGBA_S3TC_DXT5_Format:mr,RGBFormat:bc,RGB_BPTC_SIGNED_Format:ca,RGB_BPTC_UNSIGNED_Format:ha,RGB_ETC1_Format:Vo,RGB_ETC2_Format:Ho,RGB_PVRTC_2BPPV1_Format:Bo,RGB_PVRTC_4BPPV1_Format:zo,RGB_S3TC_DXT1_Format:dr,RGFormat:Vi,RGIntegerFormat:Pa,RawShaderMaterial:Bd,Ray:Xs,Raycaster:Xd,RedFormat:Ra,RedIntegerFormat:Ca,ReinhardToneMapping:dc,RenderTarget:bd,RepeatWrapping:yr,ReverseSubtractEquation:Xu,SIGNED_R11_EAC_Format:qo,SIGNED_RED_GREEN_RGTC2_Format:fa,SIGNED_RED_RGTC1_Format:da,SIGNED_RG11_EAC_Format:Yo,SRGBColorSpace:sn,SRGBTransfer:vt,Scene:Td,ShaderChunk:it,ShaderLib:Xn,ShaderMaterial:zn,Shape:Ur,ShapeUtils:ns,ShortType:xc,Sphere:Xi,SphereGeometry:Ga,Spherical:ec,SplineCurve:kc,SrcAlphaFactor:lc,SrcAlphaSaturateFactor:nd,SrcColorFactor:Ju,StaticDrawUsage:xd,SubtractEquation:Wu,SubtractiveBlending:Hl,TOUCH:gi,TangentSpaceNormalMap:pa,Texture:Qt,TextureSource:Na,TorusGeometry:Va,Triangle:Ln,TubeGeometry:Ha,UVMapping:_c,Uint16BufferAttribute:Tc,Uint32BufferAttribute:Ac,UniformsLib:De,UniformsUtils:zd,UnsignedByteType:gn,UnsignedInt101111Type:Mc,UnsignedInt248Type:Bs,UnsignedInt5999Type:yc,UnsignedIntType:Jn,UnsignedShort4444Type:Ta,UnsignedShort5551Type:Aa,UnsignedShortType:zs,VSMShadowMap:Cs,Vector2:ye,Vector3:D,Vector4:Dt,WebGLCoordinateSystem:qn,WebGLCubeRenderTarget:Wc,WebGLRenderTarget:Un,WebGLRenderer:tf,WebGLUtils:jd,WebGPUCoordinateSystem:ks,WebXRController:Ao,ZeroFactor:Zu,createCanvasElement:yd,error:ct,log:ql,warn:Qe,warnOnce:is},Symbol.toStringTag,{value:"Module"})),Pu={type:"change"},Xc={type:"start"},nf={type:"end"},Mo=new Xs,Lu=new si,Kv=Math.cos(70*mn.DEG2RAD),Gt=new D,pn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nl=1e-6;class Qv extends qd{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Si,this._lastTargetPosition=new D,this._quat=new Si().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ec,this._sphericalDelta=new ec,this._scale=1,this._panOffset=new D,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new D,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ex.bind(this),this._onPointerDown=jv.bind(this),this._onPointerUp=tx.bind(this),this._onContextMenu=lx.bind(this),this._onMouseWheel=sx.bind(this),this._onKeyDown=rx.bind(this),this._onTouchStart=ox.bind(this),this._onTouchMove=ax.bind(this),this._onMouseDown=nx.bind(this),this._onMouseMove=ix.bind(this),this._interceptControlDown=cx.bind(this),this._interceptControlUp=hx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pu),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Gt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mo.origin.copy(this.object.position),Mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mo.direction))<Kv?this.object.lookAt(this.target):(Lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mo.intersectPlane(Lu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nl||this._lastTargetPosition.distanceToSquared(this.target)>Nl?(this.dispatchEvent(Pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function jv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ex(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nf),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case vi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case vi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Xc)}function ix(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sx(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nf))}function rx(n){this.enabled!==!1&&this._handleKeyDown(n)}function ox(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Xc)}function ax(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function lx(n){this.enabled!==!1&&n.preventDefault()}function cx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const or=new D;function An(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;or.copy(e),or[i]=0,or.normalize();const l=.5*o/(o+a),h=1-or.angleTo(n)/c;return Math.sign(or[t])===1?h*l:a/(o+a)+l+l*(1-h)}class qc extends wi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new D,l=new D,h=new D(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new D,m=.5/o;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[M+0]=An(v,l,"z","y",r,i),f[M+1]=1-An(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[M+0]=1-An(v,l,"z","y",r,i),f[M+1]=1-An(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[M+0]=1-An(v,l,"x","z",r,e),f[M+1]=An(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),f[M+0]=1-An(v,l,"x","z",r,e),f[M+1]=1-An(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),f[M+0]=1-An(v,l,"x","y",r,e),f[M+1]=1-An(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[M+0]=An(v,l,"x","y",r,e),f[M+1]=1-An(v,l,"y","x",r,t);break}}static fromJSON(e){return new qc(e.width,e.height,e.depth,e.segments,e.radius)}}function ux(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Ot;let l=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const d=[];for(let u=0;u<n.length;++u){const f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Du(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=Du(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Du(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Fn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function dx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:h,torus:d,rod:u,sign:f,paperBoat:g,batchStatic:v,persist:m,say:p,refresh:M,chime:w,reduced:y}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],R=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);h([-.7,.3,-.83],.3,.38,s.concrete,_),d([-.7,.51,-.83],.31,.035,s.copper,_),h([-.7,.49,-.83],.26,.045,s.dark,_);const T=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],T),d([0,0,0],.36,.015,s.copper,T,[0,0,.35]),h([.66,.34,-.22],.27,.45,s.rust,_),d([.66,.56,-.22],.28,.028,s.copper,_),h([.66,.55,-.22],.24,.03,r("#495441"),_);const A=o([.66,.56,-.22],_);u([0,0,0],[0,.83,0],.026,s.copper,A);for(const[P,C,V]of[[-.17,.23,-.5],[.17,.41,.5]]){const X=l([P,C,0],[.24,.035,.085],s.mint,A);X.rotation.z=V}const I=o([0,.95,0],A);l([0,0,0],.115,s.light,I),d([0,0,0],.28,.021,s.cream,I,[0,0,0]),d([0,0,0],.27,.021,s.copper,I,[0,Math.PI/2,0]);const F=[];for(let P=0;P<4;P++){const C=P*Math.PI/2,V=o([Math.cos(C)*.3,.13+Math.sin(C)*.12,Math.sin(C)*.3],A);u([0,-.15,0],[0,.2,0],.012,s.copper,V),l([0,.23,0],.065,s.cream,V),v(V,[]),F.push(V)}c([-.46,.2,.32],[.68,.12,.47],s.dark,_);const k=o([-.46,.29,.32],_);c([0,0,0],[.5,.025,.32],s.cream,k);for(const P of[-.23,.23])u([P,.016,-.14],[0,.016,.06],.009,s.copper,k);l([0,.027,.06],[.04,.015,.04],s.rust,k),f("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),v(T,[]),v(I,[]),v(A,[I,...F]),v(k,[]),v(_,[T,A,k]);const N=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);N.castShadow=!1;const z=o([0,0,0],e),H=g(z,[8.3,.14,3.5],1.05),O=o([0,.36,0],H),j=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],O),B=l([0,.12,0],[.085,.13,.085],s.light,O),Q=c([0,.09,0],[.23,.025,.16],s.cream,O);Q.rotation.z=.2;const ee=[j,B,Q];v(H,[O]);const ue=new n.Vector3(8.3,.14,3.5),de=new n.Vector3(8.45,.14,3.65),Me=new n.Vector3(9.2,-2.7,6.5);let Ae=-1,te=i.dockTrips>=2?1:.02;function W(){T.visible=i.dockTrips>=1,A.visible=i.dockTrips>=2,k.visible=i.dockTrips>=3,F.forEach((P,C)=>P.visible=i.dockTrips>=5+C*3),O.visible=i.dockPending,ee.forEach((P,C)=>P.visible=C===i.dockTrips%3),H.position.copy(i.dockPending?de:ue)}W();function K(){if(!(i.boat>0))if(i.dockPending){const P=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(te=.02),m(),W(),p(P.line),w(330),M()}else i.boat=18,Ae=-1,ee.forEach((P,C)=>P.visible=C===i.dockTrips%3),O.visible=!1,p("ну плыви. я тут."),M()}function fe(P,C){if(i.boat>0){i.boat=Math.max(0,i.boat-P);const V=18-i.boat,X=V<7?0:V<11?1:2;X!==Ae&&(Ae=X,M()),V<2?H.position.lerpVectors(ue,de,n.MathUtils.smoothstep(V,0,2)):V<7?H.position.lerpVectors(de,Me,n.MathUtils.smoothstep(V,2,7)):V<11?H.position.copy(Me):V<16?H.position.lerpVectors(Me,de,n.MathUtils.smoothstep(V,11,16)):H.position.copy(de),H.visible=V<7||V>=11,O.visible=V>=11,H.rotation.y=V>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),H.visible=!0,W(),p("вернулся. с чем-то."),w(554),M())}H.rotation.z=y?0:Math.sin(C*1.7)*.035,i.boat===0&&(H.visible=!0,H.position.y=(i.dockPending?de.y:ue.y)+Math.sin(C*1.2)*.02,H.rotation.y=i.dockPending?Math.PI+.2:0),T.position.y=.97+Math.sin(C*.9)*.055,T.rotation.y=C*.15,te=n.MathUtils.damp(te,1,1.1,P),A.scale.setScalar(te),I.rotation.y=y?0:C*.23,N.material.emissiveIntensity=i.dockPending?1.5+Math.sin(C*4)*1.1:1.2}function oe(){if(i.boat>0){const P=18-i.boat;return{disabled:!0,action:P<7?"плывёт…":P<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const P=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:P===2?`${S[P].description} ${R[Math.floor((i.dockTrips-1)/3)%R.length]}`:S[P].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:z,gallery:_,beacon:N,launchOrCollect:K,update:fe,card:oe,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:H.position.toArray(),visible:H.visible,cargo:O.visible,stone:T.visible,plant:A.visible,plantScale:te,letter:k.visible,buds:F.filter(P=>P.visible).length})}}async function sf(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function fx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",h=!s.matches,d=!1,u=!1,f=!1,g=!1,v=!1,m=0,p=null,M=0,w=0,y=0,b=!1;try{const Z=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");Z!==null&&(h=Z==="open")}catch{}const S=(Z,he,be)=>{const Ee=document.createElement(Z);return he&&(Ee.className=he),be&&(Ee.textContent=be),Ee},R=S("aside","resident-history");R.id="resident-history",R.setAttribute("aria-label","История мыслей и действий Головы");const _=S("div","history-heading"),T=S("div"),A=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),I=S("h3","","на полях"),F=S("span","history-eyes");F.setAttribute("aria-hidden","true"),I.append(F),T.append(A,I,S("p","history-subtitle","мысли, дела и прочее"));const k=S("button","history-close","−");k.type="button",k.setAttribute("aria-label","Свернуть историю"),k.title="Свернуть историю",_.append(T,k);const N=S("div","history-filters");N.setAttribute("role","group"),N.setAttribute("aria-label","Показывать в истории");const z=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[Z,he]of z){const be=S("button","",he);be.type="button",be.dataset.filter=Z,be.setAttribute("aria-pressed",String(l===Z)),be.onclick=()=>{l=Z,C(!1),O.scrollTop=0;for(const Ee of N.children)Ee.setAttribute("aria-pressed",String(Ee.dataset.filter===l))},N.append(be)}const H=S("button","history-new");H.type="button",H.hidden=!0;const O=S("div","history-scroll");O.tabIndex=0,O.setAttribute("aria-label","Записи, от новых к старым");const j=S("ol","history-list"),B=S("p","history-empty","собираю заметки…");O.append(j,B);const Q=S("div","history-foot"),ee=S("span","history-live","подключаюсь…"),ue=S("span","history-count"),de=S("button","history-retry","повторить подключение");de.type="button",de.hidden=!0,de.onclick=()=>{G(),window.dispatchEvent(new Event("beznogim:retry"))},Q.append(ee,ue,de),R.append(_,N,H,O,Q);const Me=S("button","history-toggle");Me.type="button",Me.setAttribute("aria-controls",R.id);const Ae=S("span","","на полях"),te=S("span","history-badge");te.hidden=!0,Me.append(S("span","history-toggle-icon","◌"),Ae,te),document.body.append(R),document.querySelector(".footer-actions").append(Me);function W(Z,he=!0){if(h=Z,R.hidden=!h,Me.hidden=h,Me.setAttribute("aria-expanded",String(h)),he)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",h?"open":"closed")}catch{}h?(O.scrollTop<30?K():fe(),k.focus({preventScroll:!0})):he&&Me.focus({preventScroll:!0})}R.hidden=!h,Me.hidden=h,Me.setAttribute("aria-expanded",String(h)),Me.onclick=()=>{W(!0),(g||!u)&&G()},k.onclick=()=>W(!1),s.addEventListener("change",()=>{let Z=!s.matches;try{const he=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");he!==null&&(Z=he==="open")}catch{}W(Z,!1)}),document.addEventListener("keydown",Z=>{Z.key==="Escape"&&h&&!document.querySelector("dialog[open]")&&W(!1)});function K(){m=0,te.hidden=!0,H.hidden=!0}function fe(){te.textContent=String(m),te.hidden=!m,H.textContent=`↑ к новым · ${m}`,H.hidden=!(h&&m)}H.onclick=()=>{O.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),K()},O.addEventListener("scroll",()=>{O.scrollTop<30&&K()},{passive:!0});function oe(Z){return l==="all"||(l==="thoughts"?Z.type==="muse"||Z.type==="say":Z.type!=="muse"&&Z.type!=="say")}function P(Z,he){const be=Z.type==="muse"||Z.type==="say",Ee=S("li",`history-entry ${be?"history-thought":"history-action"}${he?" is-new":""}`);Ee.dataset.eventId=String(Z.id),Ee.dataset.type=Z.type;const U=S("div","history-meta"),He=S("time","",r.format(Z.time*1e3));He.dateTime=new Date(Z.time*1e3).toISOString(),He.title=o.format(Z.time*1e3)+" · "+He.textContent+" мск";const Fe={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return U.append(S("span","",Fe[Z.type]||"во дворе"),He),Ee.append(U,S("p","",Z.text)),Ee}function C(Z,he=new Set){const be=O.scrollTop>30,Ee=O.getBoundingClientRect().top,U=be?[...j.querySelectorAll("[data-event-id]")].find(ae=>ae.getBoundingClientRect().bottom>Ee):null,He=U==null?void 0:U.dataset.eventId,Fe=U==null?void 0:U.getBoundingClientRect().top,L=O.scrollTop,x=document.createDocumentFragment();let J="";const ne=[...i.values()].sort((ae,xe)=>xe.id-ae.id).filter(oe);for(const ae of ne){const xe=o.format(ae.time*1e3);if(xe!==J){const we=S("li","history-day",xe);x.append(we),J=xe}x.append(P(ae,Z&&he.has(ae.id)&&!be))}if(j.replaceChildren(x),B.hidden=ne.length>0,B.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":u?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ne.length&&(B.textContent="в этом фильтре пока нет записей."),ue.textContent=i.size?v?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:u?"записей: 0 · мск":"записи ещё не загружены",de.hidden=!(g||!u&&!f),de.disabled=f,He){const ae=j.querySelector(`[data-event-id="${He}"]`);O.scrollTop=L+(ae?ae.getBoundingClientRect().top-Fe:0)}else be||(O.scrollTop=0)}function V(Z,he=!1){if(!Z||!Array.isArray(Z.entries))return!1;const be=Math.max(0,...i.keys()),Ee=new Set;let U=0,He=0;for(const Fe of Z.entries)!Fe||typeof Fe!="object"||!Number.isSafeInteger(Fe.id)||Fe.id<1||!Number.isFinite(Fe.time)||Math.abs(Fe.time)>864e10||!a.has(Fe.type)||typeof Fe.text!="string"||!Fe.text.trim()||(He++,i.has(Fe.id)||(b=!0,i.set(Fe.id,{id:Fe.id,time:Fe.time,type:Fe.type,text:Fe.text.slice(0,280)}),Ee.add(Fe.id),Fe.id>be&&oe(Fe)&&U++));if(Z.entries.length&&!He)return!1;if(v=v||!!Z.has_older||!!Z.has_more||i.size>t,i.size>t){const Fe=[...i.keys()].sort((L,x)=>L-x);for(const L of Fe.slice(0,i.size-t))i.delete(L)}return d&&!he&&U&&(!h||O.scrollTop>30)&&(m+=U,fe()),(Ee.size||!d)&&C(d&&!he,Ee),!0}function X(){if(!(!i.size||!b)){b=!1,w=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:w,has_older:v,entries:[...i.values()]}))}catch{}}}function re(){try{const Z=localStorage.getItem(c);if(!Z||Z.length>1e6)return;const he=JSON.parse(Z);if(he.version!==1||!Number.isFinite(he.saved_at)||he.saved_at<=0)return;V(he,!0),w=he.saved_at,d=i.size>0,b=!1}catch{}}async function G(){if(!f){f=!0,y=performance.now(),de.disabled=!0;try{const Z=await sf(n+"/api/history");if(!V(Z,!0))throw Error("invalid-public-history");u=!0,d=!0,g=!1,X(),C(!1)}catch{g=!0,C(!1)}finally{f=!1,de.disabled=!1,$()}}}function $(){var be;const Z=!p||performance.now()-M>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";R.classList.toggle("history-offline",Z);const he=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";ee.textContent=Z?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",Z&&i.size&&(ee.textContent+=he),!Z&&g&&(ee.textContent+=" · архив не дошёл"),ee.title=((be=p==null?void 0:p.action)==null?void 0:be.label)||""}function ce(Z){var He;const he=Math.max(0,...i.keys()),be=Array.isArray((He=Z.history)==null?void 0:He.entries)?Z.history.entries:[];p=Z,M=performance.now(),V(Z.history)&&i.size&&(d=!0,X()),$();const Ee=be.filter(Fe=>Fe&&Number.isSafeInteger(Fe.id)).map(Fe=>Fe.id);(he&&Ee.length&&Math.min(...Ee)>he&&performance.now()-y>1e3||!u&&performance.now()-y>15e3)&&G()}window.addEventListener("beznogim:state",Z=>ce(Z.detail)),window.__beznogimState&&ce(window.__beznogimState),re(),C(!1),$(),G(),window.addEventListener("online",()=>{(g||!u)&&G()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!u)&&G()}),setInterval(()=>{$(),(g||!u)&&G()},15e3)}function px({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,h=0,d=0,u=!1,f=!1,g=!1,v=0,m=null,p=null,M=null,w="",y=!0;const b=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const R=document.createElement("span");R.className="thought-kicker",R.textContent="про себя";const _=document.createElement("p");S.append(R,_),document.body.append(S);const T=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),A=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";fx({api:A,enabled:T});const I=document.querySelector(".territory-nav"),F=document.createElement("div");F.className="resident-strip",F.hidden=!0;const k=document.createElement("span");k.className="resident-status",k.textContent="подключаюсь к голове";const N=document.createElement("div");N.className="resident-vitals",N.hidden=!0,N.setAttribute("aria-label","Самочувствие Головы");const H=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(P=>{const C=document.createElement("div");return C.className="need-meter",C.dataset.need=P.key,C.style.setProperty("--need-color",P.color),C.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${P.icon}</svg><div class="need-detail"><div class="need-heading"><b>${P.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${P.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,N.append(C),{key:P.key,card:C,value:C.querySelector(".need-value"),bar:C.querySelector(".need-track")}}),O=document.createElement("button");O.type="button",O.textContent="к голове",O.onclick=()=>{f=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),Me()};const j=document.createElement("button");j.type="button",j.textContent="поиграть самому",j.onclick=()=>{f=!f,g=!1,Me()};const B=document.createElement("button");B.type="button",B.textContent="мысли",B.setAttribute("aria-pressed","true"),B.onclick=()=>{y=!y,B.setAttribute("aria-pressed",String(y))},F.append(k,N,O,j,B),I.append(F);function Q(){return Date.now()/1e3+d}function ee(){return l&&Q()-l.heartbeat<60&&l.resident_status!=="stopped"}function ue(){return u&&l&&!f}function de(){var V,X;const P=(X=(V=l==null?void 0:l.mechanics)==null?void 0:V.vitals)==null?void 0:X.public;if(!P){N.hidden=!0;return}const C=re=>Math.max(0,Math.min(100,Math.round(Number(re)||0)));N.hidden=!1;for(const re of H){const G=C(P[re.key]);re.value.textContent=String(G),re.bar.setAttribute("aria-valuenow",String(G)),re.card.style.setProperty("--need-fill",String(G/100)),re.card.dataset.low=String(G<=20)}}function Me(){const P=f?"ты в песочнице":u?ee()?l!=null&&l.action&&l.action.ends>Q()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";P!==w&&(w=P,k.textContent=P),j.textContent=f?"вернуться к голове":"поиграть самому",O.setAttribute("aria-pressed",String(g))}function Ae(P){var V,X;if(!P||P.version!==1||!Array.isArray(P.position)||P.position.length!==3||!P.position.every(Number.isFinite)||!P.objects||!Number.isFinite(P.server_time)||!Number.isFinite(P.heartbeat)||l&&(P.server_time<l.server_time||P.server_time===l.server_time&&Number.isFinite(P.revision)&&Number.isFinite(l.revision)&&P.revision<l.revision))return;if(d=P.server_time-Date.now()/1e3,l=P,h=performance.now(),u=!0,F.hidden=!1,m&&((V=P.release)!=null&&V.commit)&&m!==P.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((X=P.release)==null?void 0:X.commit)||m;const C=P.speech;C&&C.time>v&&C.until>Q()&&(v=C.time,f||a(C.text)),window.__beznogimState=P,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:P})),de(),Me()}function te(){const P=l.action;if((P==null?void 0:P.kind)==="move"){const C=Math.max(0,Math.min(1,(Q()-P.started)/Math.max(.001,P.ends-P.started)));return P.from.map((V,X)=>V+(P.to[X]-V)*C)}return l.position}function W(){if(!ue())return;const P=l.objects;P.engine&&(t.running=!!P.engine.running),P.workshop&&(t.roof=P.workshop.roof_open?1:0),P.radio&&(t.radio=P.radio.station,p!==t.radio&&(p=t.radio,o())),P.garden&&(t.harvest=P.garden.harvest,M!==null&&t.harvest>M&&c(),M=t.harvest);const C=l.action;t.brew=(C==null?void 0:C.effect)==="brew"?Math.max(0,C.ends-Q()):0,t.loop=0,Me()}function K(){if(!ue()){S.hidden=!0;return}const P=te();n.position.set(P[0],P[1]+Math.sin(Q()*1.4)*.1,P[2]),e.set(...P),g&&i.target.lerp(n.position,.08);const C=l.musing;if(y&&ee()&&(C!=null&&C.text)&&C.until>Q()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==C.text&&(_.textContent=C.text),b.copy(n.position),b.y+=1.8,b.project(s),b.z>=-1&&b.z<=1&&Math.abs(b.x)<1&&Math.abs(b.y)<1){S.hidden=!1;const V=S.offsetWidth,X=S.offsetHeight,re=Math.max(V/2+12,Math.min(innerWidth-V/2-12,(b.x+1)*innerWidth/2));let G=(1-b.y)*innerHeight/2-18;const $=I.getBoundingClientRect(),ce=re-V/2<$.right&&re+V/2>$.left?$.bottom+12:18,Z=G-X<ce;Z&&(G=Math.max(ce+X,(1-b.y)*innerHeight/2+70+X)),G=Math.min(innerHeight-70,Math.max(X+18,G)),S.classList.toggle("below-head",Z),S.style.transform=`translate3d(${Math.round(re)}px,${Math.round(G)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function fe(){ue()&&(f=!0,g=!1,Me())}function oe(){if(!T)return;F.hidden=!1;let P=!1;async function C(){if(!P){P=!0;try{const X=await sf(A+"/api/state");Ae(X),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-h>35e3)&&(u=!1),Me()}finally{P=!1}}}try{const X=new EventSource(A+"/api/events");X.addEventListener("state",re=>{try{Ae(JSON.parse(re.data))}catch{}}),X.onerror=()=>{u=!1,Me()}}catch{u=!1,Me()}C();function V(){(!u||!l||performance.now()-h>3e4)&&C()}window.addEventListener("online",V),window.addEventListener("beznogim:retry",C),document.addEventListener("visibilitychange",()=>{document.hidden||V()}),setInterval(()=>{l&&performance.now()-h>35e3&&(u=!1),Me(),V()},15e3)}return i.addEventListener("start",()=>{g=!1,Me()}),oe(),{sync:W,place:K,localPlay:fe,unfollow:()=>{g=!1},watching:ue,inspect:()=>{var P;return{connected:u,sandbox:f,follow:g,alive:!!ee(),revision:l==null?void 0:l.revision,release:(P=l==null?void 0:l.release)==null?void 0:P.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!S.hidden,position:l?te():null}}}}const mx=120,gx=24,_x=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"frontier",name:"свободная земля"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Wn={size:mx,sectorSize:gx,sectors:_x};function vx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new Fi;c.name="unsettled-territory",n.add(c);const l=Wn.size/2,h=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],d=new Ur;h.forEach(([A,I],F)=>F?d.lineTo(A,-I):d.moveTo(A,-I)),d.closePath();const u=new qs(d,{depth:1.8,bevelEnabled:!1});u.rotateX(-Math.PI/2),u.translate(0,-3.5,0);const f=new fn(u,new Ps({color:"#233e35",roughness:1}));f.receiveShadow=!0,c.add(f);let g=8409;const v=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new Zl(new Fr(1,0),new Ps({color:"#8a9980",roughness:1}),150),p=new Zl(new cs(1,1,4),new Ps({color:"#9aa880",roughness:1}),850),M=new Ft;for(const[A,I,F]of[[m,150,!0],[p,850,!1]]){for(let k=0;k<I;k++){let N,z;do N=(v()-.5)*(Wn.size-10),z=(v()-.5)*(Wn.size-10);while(Math.abs(N)<11&&Math.abs(z)<9);const H=F?.15+v()*.48:.12+v()*.42;M.position.set(N,-1.7+H*.25,z),M.rotation.set(0,v()*6.28,F?v()*.25:0),M.scale.set(F?H*1.3:.07,H,F?H:.07),M.updateMatrix(),A.setMatrixAt(k,M.matrix)}A.instanceMatrix.needsUpdate=!0,c.add(A)}const w=new Ps({color:"#c1b692",roughness:1});for(let A=0;A<16;A++){const I=new fn(new wi(1.15,.12,.65),w);I.position.set(-.6,-.06-A*.105,5.8+A*.7),I.receiveShadow=!0,c.add(I)}const y=document.createElement("nav");y.className="territory-nav",y.setAttribute("aria-label","Путешествие по миру"),y.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(y);const b=document.createElement("dialog");b.id="territory-dialog",b.setAttribute("aria-labelledby","territory-title"),b.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(b);const S=b.querySelector("#territory-grid");for(const A of Wn.sectors){const I=document.createElement("button");I.type="button",I.dataset.sector=A.id,I.className=A.status==="settled"?"settled":"",I.textContent=A.status==="settled"?`● ${A.id==="0:0"?"двор":A.name}`:`· ${A.id}`,I.setAttribute("aria-label",`${A.name}, ${A.id}`),I.onclick=()=>{b.close(),s(A.x,A.z,A.status==="settled")},S.append(I)}document.querySelector("#territory-map").onclick=()=>b.showModal(),document.querySelector("#world-overview").onclick=r,b.querySelector("#territory-close").onclick=()=>b.close(),b.querySelector("#territory-home").onclick=()=>{b.close(),o()};const R=y.querySelector("#territory-location");let _="";function T(){const A=a()||t.target,I=Math.round(A.x/Wn.sectorSize),F=Math.round(A.z/Wn.sectorSize),k=`${I}:${F}`;if(k!==_){_=k;const N=Wn.sectors.find(z=>z.id===k);R.textContent=`${(N==null?void 0:N.status)==="settled"?N.name:"свободная земля"} · ${k}`;for(const z of S.children)z.classList.toggle("current",z.dataset.sector===k)}}return{half:l,update:T,inspect:()=>({size:Wn.size,sectorSize:Wn.sectorSize,sectors:Wn.sectors.length,settled:Wn.sectors.filter(A=>A.status==="settled").length,visible:n.visible,sector:_})}}function xx({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:h,torus:d,sign:u,paperBoat:f,batchStatic:g,changed:v,chime:m}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},w=[1,2,-1,1,2,-1];function y(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const b=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,b),a([0,.46,0],[1.22,.08,1.3],s.dark,b);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const Z of[-.62,.62])for(const he of[-.64,.64])h([Z,.46,he],[Z,1.45,he],.024,s.copper,b);for(const Z of[-.62,.62])a([Z,.96,0],[.018,.95,1.28],S,b);a([0,.96,-.64],[1.24,.95,.018],S,b);const R=o([0,1.45,-.64],b);for(const Z of[-.62,.62])h([Z,0,0],[Z,.36,.64],.026,s.copper,R);for(const Z of[-.62,.62])h([Z,.36,.64],[Z,0,1.28],.026,s.copper,R);h([-.62,.36,.64],[.62,.36,.64],.026,s.copper,R);const _=a([0,.18,.32],[1.26,.025,.72],S,R);_.rotation.x=-.51;const T=a([0,.18,.96],[1.26,.025,.72],S,R);T.rotation.x=.51;const A=o([0,.52,0],b);l([0,.2,0],.026,.4,s.leaf,A);for(const Z of[-1,1]){const he=c([Z*.15,.27,0],[.22,.055,.09],s.leaf,A);he.rotation.z=Z*.35}const I=c([0,.25,.12],[.23,.16,.27],s.copper,A),F=c([.42,.58,.46],[.15,.1,.18],s.copper,b);F.visible=M.wins>0;const k=o([-.76,.7,.69],b);a([0,.28,0],[.13,.66,.06],s.cream,k);const N=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),k);c([0,-.06,.04],.065,s.rust,k),u("ПАРНИК",[0,.3,.716],.93,.22,b,{size:49});const z=d([0,2.05,0],.46,.016,s.mint,b);z.visible=M.trace;const H=[];for(let Z=0;Z<6;Z++)H.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),b));g(b,[R,A,k,z,F,...H]),g(R,[]),g(A,[I]),g(k,[N]);let O=0,j=0;function B(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),O=0,v()}function Q(Z){if(M.mode!=="playing")return;const he={heat:2,wait:0,vent:-2};Z in he&&(M.temp+=w[M.turn]+he[Z],M.turn++,M.temp>6?(M.mode="hot",O=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),F.visible=!0,y(),m(660)),v())}function ee(){let Z="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(Z=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${w[M.turn]>0?"+":""}${w[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(Z=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(Z=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(Z="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:Z,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const ue=o([0,0,0],t);ue.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ue),a([0,-.42,0],[6.8,.08,5.6],s.dark,ue);for(const Z of[-3.2,3.2])for(const he of[-2.6,2.6])h([Z,-.4,he],[Z,4,he],.055,s.copper,ue);for(const Z of[-3.2,3.2])h([Z,4,-2.6],[Z,5.7,0],.055,s.copper,ue),h([Z,5.7,0],[Z,4,2.6],.055,s.copper,ue);h([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ue),a([-3.2,1.8,0],[.025,4.4,5.2],S,ue),a([0,1.8,-2.6],[6.4,4.4,.025],S,ue),u("СОН / 01",[0,-.12,2.93],2.2,.38,ue,{size:52});const de=o([0,1.6,0],ue);c([0,0,0],1.16,r("#5f9c85"),de);for(let Z=0;Z<10;Z++){let he=Z*2.4;const be=c([Math.sin(he)*.95,Math.cos(Z*1.2)*.6,Math.cos(he)*.95],[.35,.2,.3],s.leaf,de);be.rotation.y=he}d([0,0,0],1.32,.028,s.copper,de,[.4,0,.2]);const Me=o([0,1.6,0],ue),Ae=[];for(let Z=0;Z<28;Z++){const he=a([0,0,0],[.53,.11,.32],Z%4?s.cream:s.concrete,Me);Ae.push(he)}const te=f(ue,[1.7,-.05,1],1.65),W=c([0,.65,0],.13,s.cream,te),K=o([0,.65,0],te);K.visible=!1;for(let Z=0;Z<8;Z++){let he=Z/8*Math.PI*2;h([Math.sin(he)*.27,Math.cos(he)*.27,0],[Math.sin(he)*.5,Math.cos(he)*.5,0],.026,s.light,K)}const fe=i.clone(!0);ue.add(fe),fe.scale.setScalar(.72),fe.position.set(-2,1,1.3),fe.rotation.z=-.25;const oe=o([-2,-.05,1.3],ue);l([0,0,0],.55,.3,s.cream,oe),d([.58,0,0],.25,.04,s.copper,oe,[0,0,0]);const P=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ue);P.rotation.y=.2;let C=0,V=0,X=!1;g(ue,[de,Me,te,fe]),g(de,[]);function re(){X=!0,C=0,V=0,ue.visible=!0,e.visible=!1,v()}function G(){X=!1,ue.visible=!1,e.visible=!0,v()}function $(){X&&(C===3?(C=0,V=0):(C++,m(220+C*110),C===3&&(M.trace=!0,z.visible=!0,y())),v())}function ce(Z,he){j=n.MathUtils.damp(j,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,Z),R.rotation.x=j,A.scale.y=n.MathUtils.damp(A.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,Z),I.visible=M.mode==="won",N.scale.y=.3*Math.max(.05,M.temp/8),N.position.y=-.015+M.temp/8*.15,z.rotation.z=Math.sin(he*.3)*.15,O=Math.max(0,O-Z),H.forEach((be,Ee)=>{be.visible=O>0;const U=(3-O+Ee*.18)%1.5;be.position.set(Math.sin(Ee*2)*U*.35,1.5+U,Math.cos(Ee*2)*U*.35),be.scale.setScalar(.1*(.4+U))}),X&&(V=n.MathUtils.damp(V,C,2,Z),de.rotation.y=he*.08,Ae.forEach((be,Ee)=>{const U=Ee/28*Math.PI*2+he*.055*Math.min(1,V),He=Math.min(1,V);be.position.set(Math.sin(U)*(1.8+He*.35),Math.cos(U)*(1.8-He*1.5),Math.cos(U)*He*1.5),be.rotation.set(0,-U*He,Math.PI/2-U*(1-He))}),Me.rotation.y=V*.32,te.position.y=-.05+V*1.12,te.position.x=1.7-V*.32,te.rotation.y=.2+V*.35,W.scale.setScalar(.13*(1+Math.max(0,V-2)*2)),K.visible=V>2.2,K.rotation.z=he*.22,fe.position.y=1+Math.sin(he*.8)*.06)}return{house:b,start:B,step:Q,card:ee,update:ce,enter:re,exit:G,breathe:$,inspect:()=>({...M,weather:[...w],dream:X,dreamStep:C,phase:V,lidAngle:j,rootVisible:e.visible,dreamVisible:ue.visible,boatY:te.position.y,rays:K.visible})}}function yx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:d,torus:u,sign:f,batchStatic:g,chime:v}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const p=r("#c39860"),M=r("#e0c58b"),w=r("#465c63"),y=r("#80b9be",{metalness:.15,roughness:.35}),b=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let te=0;te<13;te++){const W=.15+te/12*Math.PI*1.42,K=Math.sin(W)*3.65,fe=Math.cos(W)*3.65,oe=c([K,.48,fe],[.75,1.08,.19],M,m);oe.rotation.y=W,te%3===0&&u([K,.48,fe],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,W,0)}f("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const S=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],w,S);for(let te of[-1.15,1.15])for(let W of[-.63,.63])c([te,-.23,W],[.12,.5,.12],s.copper,S);for(let te of[-.79,.79])c([0,.36,te],[2.72,.65,.14],b,S);for(let te of[-1.32,1.32])c([te,.38,0],[.14,.68,1.55],b,S);const R=c([0,.18,0],[2.49,.045,1.49],y,S),_=l([-.84,.38,0],[.34,.14,.54],s.cream,S),T=i.clone(!0);m.add(T),T.scale.setScalar(.54),T.position.set(.3,.83,.45),T.rotation.z=-.35;const A=a([0,0,0],T);for(const te of[-.23,.23])l([te,.2,.611],[.15,.11,.025],s.black,A),c([te,.2,.64],[.2,.018,.012],s.copper,A);const I=a([-2.05,2.35,-.38],m);h([0,0,0],.52,.56,s.cream,I),h([0,.29,0],.44,.022,w,I),u([.55,0,0],.24,.055,s.copper,I,[0,0,0]),f("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const F=[];for(let te=0;te<7;te++){const W=a([-1.92+te*.33,.2+te*.29,1.45-te*.29],m);c([0,0,0],[.7,.13,.42],s.cream,W);for(let K of[-.2,.2])c([0,.07,K],[.7,.12,.05],s.copper,W);F.push(W)}const k=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],y,m)),N=Array.from({length:3},(te,W)=>{const K=u([.65,.2,0],.23+W*.16,.012,s.mint,S);return K.scale.z=.6,K}),z=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,z),z.rotation.z=.55;const H=[];for(let te=0;te<9;te++){const W=te*2.4;H.push(l([Math.sin(W)*3,3.2+te%3*.28,Math.cos(W)*2],.025,s.cream,m))}let O=!1,j=0,B=0,Q=!1;try{Q=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const ee=a([26.6,-.86,.65],t);ee.visible=Q,h([0,0,0],.15,.2,s.cream,ee),h([0,.104,0],.125,.014,y,ee),u([.16,0,0],.07,.02,s.copper,ee,[0,0,0]),g(m,[S,T,I,...F,...k,...H,z]),g(S,[R,_,...N]),g(I,[]),g(ee,[]),F.forEach(te=>g(te,[]));function ue(){O=!0,j=0,B=0,m.visible=!0,t.visible=!1,Ae(0,0)}function de(){O=!1,m.visible=!1,t.visible=!0}function Me(){if(O&&(j=j===3?0:j+1,v(165+j*55),j===3)){Q=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function Ae(te,W){O&&(B=n.MathUtils.damp(B,j,2.4,te),F.forEach((K,fe)=>{const oe=Math.min(1,B/2),P=-1.92+fe*.33,C=.2+fe*.29,V=1.45-fe*.29;K.position.set(n.MathUtils.lerp(P,-1.72+fe*.39,oe),n.MathUtils.lerp(C,1.95-fe*.22,oe),n.MathUtils.lerp(V,-.32+fe*.055,oe)),K.rotation.z=-oe*.21}),R.position.y=.18+B*.09,_.position.y=.38+B*.09,T.position.y=.83+B*.09+Math.sin(W*.6)*.025,T.rotation.z=-.35-B*.13,I.rotation.z=-Math.min(1,B)*.45,k.forEach((K,fe)=>{const oe=(W*.16+fe/16)%1;K.visible=B>.05,K.position.set(-1.7+oe*3,2.14-oe*1.62,-.32+oe*.25),K.scale.set(.07,.1+Math.sin(oe*Math.PI)*.04,.07)}),N.forEach((K,fe)=>{K.visible=B>.4,K.position.y=R.position.y+.034,K.scale.setScalar(1+Math.sin(W*.5+fe)*.08),K.scale.z*=.6}),z.rotation.z=.55+B*.21,A.visible=B>1.8)}return{enter:ue,exit:de,pour:Me,update:Ae,inspect:()=>({active:O,step:j,phase:B,trace:Q,roomVisible:m.visible,rootVisible:t.visible,waterY:R.position.y,sleeperY:T.position.y,channel:F.map(te=>te.position.toArray()),droplets:k.filter(te=>te.visible).length})}}function Mx({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const f of[-.23,.23])t([f,.2,.611],[.15,.11,.025],r.black,c),i([f,.2,.64],[.2,.018,.012],r.copper,c);let l=null,h=0;function d(f){l=f,h=Number(f.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:f})=>d(f)),window.__beznogimState&&d(window.__beznogimState);function u(f){const g=l==null?void 0:l.action;a.visible=!!f&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(h)?h:0),c.visible=a.visible}return{update:u,inspect:()=>{var f;return{visible:a.visible,ends:((f=l==null?void 0:l.action)==null?void 0:f.kind)==="sleep"?l.action.ends:null}}}}const Sx=["восток","юг","запад","север"],rf=[0,2,3];function Ul(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function bx(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Ex(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==rf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function wx(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Tx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:d,torus:u,sign:f,batchStatic:g,chime:v,changed:m}){const p=a([0,0,0],e);p.name="dream-04-letter-above-roof",p.visible=!1;const M=r("#355b62"),w=r("#72a49c",{metalness:.25,roughness:.5}),y=r("#eee3bd");r("#96c9c2"),h([0,-.45,0],3.9,.32,M,p),u([0,-.26,0],3.78,.024,s.copper,p);for(let P=0;P<4;P++){const C=P*Math.PI/2,V=Math.cos(C)*3.05,X=Math.sin(C)*3.05;f(["В","Ю","З","С"][P],[V,-.23,X],.38,.28,p).rotation.x=-Math.PI/2}const b=[],S=[],R=[];for(let P=0;P<3;P++){const C=1.05+P*1.4,V=2.05-P*.27,X=a([0,C,0],p);b.push(X);for(let he=1;he<4;he++){const be=he*Math.PI/2,Ee=Math.cos(be),U=Math.sin(be),He=[[.3,.3,-.3],[.3,.3,.3],[V,.04,V],[V,.04,-V]],Fe=new n.BufferGeometry,L=[];for(const J of[0,1,2,0,2,3]){const[ne,ae,xe]=He[J];L.push(ne*Ee-xe*U,ae,ne*U+xe*Ee)}Fe.setAttribute("position",new n.Float32BufferAttribute(L,3)),Fe.computeVertexNormals();const x=w.clone();x.side=n.DoubleSide,o(Fe,x,null,null,X),d([V*Ee-V*U,.04,V*U+V*Ee],[V*Ee+V*U,.04,V*U-V*Ee],.035,s.copper,X);for(const J of[-1,1])d([V*Ee-V*U*J,.04,V*U+V*Ee*J],[(V+.16)*Ee-(V+.16)*U*J,.2,(V+.16)*U+(V+.16)*Ee*J],.035,s.copper,X)}const re=a([V*.67,.045,0],X);d([-.32,0,0],[.3,0,0],.026,s.mint,re),d([.3,0,0],[.1,0,.13],.026,s.mint,re),d([.3,0,0],[.1,0,-.13],.026,s.mint,re),S.push(re);const G=rf[P]*Math.PI/2,$=Math.cos(G)*V*.63,ce=Math.sin(G)*V*.63,Z=u([$,C+.09,ce],.16,.025,s.light,p);R.push(Z),f(`${P+1}`,[V+.26,C+.14,.2],.36,.29,p,{bg:"#355b62",fg:"#f0e4b8"});for(const he of[-1,1])d([he*.3,C-.32,-.3],[he*.3,C-.03,-.3],.018,s.copper,p)}const _=a([-2.6,.16,1.5],p);c([0,0,0],[1.1,.62,.7],s.cream,_),c([0,.16,.361],[.72,.07,.025],M,_),f("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,p,{size:40});const T=i.clone(!0);p.add(T),T.scale.setScalar(.53),T.position.set(-2.6,1,1.5),T.rotation.z=-.12,f("СОН / 04",[0,-.12,3.34],1.8,.32,p,{size:48}).rotation.x=-Math.PI/2;const A=a([-1.1,.12,1.5],p);c([0,0,0],[.52,.025,.36],y,A);const I=a([-.26,.016,0],A),F=a([.26,.016,0],A);c([.13,0,0],[.26,.022,.36],y,I),c([-.13,0,0],[.26,.022,.36],y,F),d([-.25,.04,-.17],[0,.04,.1],.009,s.copper,A),d([.25,.04,-.17],[0,.04,.1],.009,s.copper,A);const k=l([0,.045,0],.055,s.light,A),N=a([0,5.3,0],p);u([0,0,0],.55,.025,s.copper,N),d([0,-.3,0],[0,.22,0],.018,s.copper,N);const z=Array.from({length:6},(P,C)=>{const V=C*Math.PI/3,X=l([Math.cos(V)*.29,0,Math.sin(V)*.29],[.21,.065,.11],y,N);return X.rotation.y=-V,X});N.visible=!1;const H=[new n.Vector3(-1.1,.12,1.5),...R.map(P=>P.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],O=new n.BufferGeometry().setFromPoints(H),j=new n.Line(O,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));j.computeLineDistances(),p.add(j);let B=Ul(),Q=!1,ee=0,ue=!1,de=[Math.PI/2,Math.PI/2,Math.PI/2];try{ue=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const Me=a([-3.75,1.17,-2.95],t);Me.visible=ue,c([0,0,0],[.23,.012,.16],y,Me),d([-.11,.016,-.07],[0,.016,.04],.005,s.copper,Me),d([.11,.016,-.07],[0,.016,.04],.005,s.copper,Me),g(p,[...b,...R,_,T,A,N,j]),b.forEach((P,C)=>g(P,[S[C]])),g(A,[I,F,k]),g(I,[]),g(F,[]),g(_,[]),g(N,z),g(Me,[]);function Ae(){Q=!0,B=Ul(),ee=0,de=B.turns.map(P=>P*Math.PI/2),p.visible=!0,t.visible=!1,fe(0,0)}function te(){Q=!1,p.visible=!1,t.visible=!0}function W(P){B=bx(B,P),v(165+P*55+B.turns[P]*22),m()}function K(){B.phase==="delivered"?(B=Ul(),ee=0):B=Ex(B),v(220),m()}function fe(P,C){if(!Q)return;const V=B.phase;B=wx(B,P),ee=n.MathUtils.damp(ee,B.phase==="delivered"?1:0,2.4,P),b.forEach((ce,Z)=>{const he=B.turns[Z]*Math.PI/2,be=Math.atan2(Math.sin(he-de[Z]),Math.cos(he-de[Z]));de[Z]+=be*(P===0?1:1-Math.exp(-P*7)),ce.rotation.y=-de[Z],ce.position.x=ee*[-2.15,1.85,0][Z],ce.position.z=ee*[.45,-.65,-2.1][Z],ce.rotation.z=ee*(Z===0?-.16:.13)});const X=Math.min(4,B.progress),re=Math.min(3,Math.floor(X)),G=Math.min(1,X-re),$=G*G*(3-2*G);if(A.position.lerpVectors(H[re],H[re+1],$),A.rotation.y=C*.16,I.rotation.z=-ee*1.1,F.rotation.z=ee*1.1,k.position.y=.045+ee*.18,N.visible=B.phase==="delivered",N.rotation.y=C*.22,z.forEach((ce,Z)=>{ce.position.y=Math.sin(C*.7+Z)*.035}),j.visible=B.phase!=="delivered",B.trace&&!ue){ue=!0,Me.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}V!==B.phase&&m()}function oe(){return B.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":B.phase==="caught"?`Поймала крыша ${B.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:B.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:Ae,exit:te,turn:W,send:K,update:fe,text:oe,directions:Sx,inspect:()=>({...B,turns:[...B.turns],active:Q,trace:ue,open:ee,roomVisible:p.visible,rootVisible:t.visible,roofs:b.map(P=>({position:P.position.toArray(),rotation:P.rotation.toArray().slice(0,3)})),letter:A.position.toArray(),goals:R.map(P=>P.position.toArray()),crown:N.visible})}}function Ax({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:d,torus:u,sign:f,paperBoat:g,batchStatic:v,chime:m}){const p=a([0,0,0],e);p.name="dream-03-silent-dock",p.visible=!1;const M=r("#526b79"),w=r("#375d69",{metalness:.35,roughness:.27}),y=r("#c7cdb3");h([0,-.45,0],4.15,.38,M,p),h([0,-.23,0],4,.055,w,p),u([0,-.18,0],4.08,.04,s.copper,p),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,p);for(let C of[-.1,.55,1.2,1.85])c([-2.85,.07,C],[1.38,.045,.025],M,p);for(let C of[-3.4,-2.3])d([C,-.3,1.9],[C,.48,1.9],.035,s.copper,p);f("СОН / 03",[-2.85,.13,2.4],1.6,.28,p,{size:48}).rotation.x=-Math.PI/2;const b=i.clone(!0);b.position.set(-2.8,1.27,.75),b.scale.setScalar(.65),p.add(b);const S=[];for(const C of[-1,1]){const V=a([C*.12,-.04,.68],b);d([0,0,0],[C*.64,-.2,.05],.06,s.black,V),l([C*.62,-.18,.05],[.19,.095,.07],s.black,V),d([C*.58,-.18,.06],[C*.58,-.7,.06],.015,s.copper,V),l([C*.58,-.76,.06],.075,s.copper,V),v(V,[]),S.push(V)}const R=Array.from({length:3},(C,V)=>u([-1.2+V*1.25,-.17,-.25],.72,.035,V===1?s.cream:s.copper,p)),_=Array.from({length:3},(C,V)=>u([-1.2+V*1.25,-.165,-.25],.72,.013,y,p)),T=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,p),A=g(p,[-1.9,-.13,-.25],.9),I=l([0,.53,0],[.065,.09,.065],s.light,A),F=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,p);F.rotation.z=.65;const k=[];for(let C=0;C<5;C++){const V=-1.6+C*.85;d([V,-.2,-2.9],[V,1.1+C%2*.4,-2.9],.025,M,p),k.push(l([V,1.12+C%2*.4,-2.9],.035,s.light,p))}let N=!1,z=0,H=1,O=[1,1,1],j=[0,0,0],B=0,Q=0,ee=!1;try{ee=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ue=u([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ue.visible=ee;const de=Array.from({length:5},()=>new n.Vector3),Me=new n.CatmullRomCurve3(de),Ae=new n.Vector3,te=new n.Vector3;v(p,[b,...R,..._,T,A,F,...k]),v(b,S),v(A,[I]);function W(C){H=n.MathUtils.clamp(Math.round(Number(C)||1),1,3)}function K(){N=!0,z=0,O=[1,1,1],j=[0,0,0],B=0,Q=0,p.visible=!0,t.visible=!1,P(0,0)}function fe(){N=!1,p.visible=!1,t.visible=!0}function oe(){if(N){if(z===3){z=0,O=[1,1,1],j=[0,0,0],Q=0;return}if(O[z]=H,z++,B=0,m(110+H*55),z===3){ee=!0,ue.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function P(C,V){if(!N)return;Q+=Math.min(C,.15),B+=Math.min(C,.15);for(let $=0;$<3;$++){j[$]=n.MathUtils.damp(j[$],$<z?1:0,3,C);const ce=-.17+j[$]*(.95+O[$]*.42),Z=.72+O[$]*.12;R[$].position.y=ce,R[$].rotation.set(Math.PI/2*(1-j[$]),Math.PI/2*j[$],0),R[$].scale.setScalar(Z/.72),_[$].scale.setScalar(Z/.72*(1+Math.sin(Q*.9+$)*.045)),de[$+1].set(R[$].position.x,Math.max(-.1,ce),-.25)}de[0].set(-2,-.1,-.25),de[4].set(2.5,-.1,-.25);const X=(1-Math.cos(Q*.55))*.5;Me.getPoint(X,Ae),Me.getPoint(Math.min(.999,X+.012),te),A.position.copy(Ae),A.rotation.z=n.MathUtils.clamp(Math.atan2(te.y-Ae.y,te.x-Ae.x),-.45,.45),A.rotation.y=0,T.visible=z>0;const re=Math.min(1,B/1.8),G=Math.max(0,z-1);T.position.set(n.MathUtils.lerp(-2.5,-1.2+G*1.25,re),.35+re*(2.1+O[G]*.35),n.MathUtils.lerp(1.4,-.25,re)),T.rotation.y=Q*.4,S.forEach(($,ce)=>$.rotation.z=Math.sin(Q*1.2+ce*Math.PI)*(.06+z*.04)),I.position.y=.53+Math.sin(V)*.02}return{enter:K,exit:fe,toss:oe,choose:W,update:P,inspect:()=>({active:N,step:z,force:H,forces:[...O],lift:[...j],trace:ee,roomVisible:p.visible,rootVisible:t.visible,boat:A.position.toArray(),ringY:R.map(C=>C.position.y),ringRotation:R.map(C=>C.rotation.toArray().slice(0,3)),stone:T.position.toArray()})}}function Iu(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,h=Math.min(i,Math.max(0,360-l.age));l.age+=h,l.exposure[l.face]+=h,l[t.air==="damp"?"wet":"dry"]+=h}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const h=Number(l.id),d=t.shelf.findIndex(u=>u.id===h);if(d<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const u=t.shelf.splice(d,1)[0];t.lastMeal={id:u.id,at:n.now,kind:u.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const h=t.batch;if(!h||h.age<360)s={ok:!1,reason:h?"not_ready":"no_wheel",remaining:h?360-h.age:0};else{const u=Math.abs(h.exposure[0]-h.exposure[1])<=120?h.culture==="moon"&&h.wet>=180?"moon_stair":h.culture==="stone"&&h.dry>=180?"stone":"holes":"lopsided",f={id:h.id,culture:h.culture,kind:u,exposure:h.exposure.slice(),wet:h.wet,dry:h.dry,turns:h.turns};t.shelf.push(f),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:f,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const Rx={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Cx({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:h,sign:d,batchStatic:u,changed:f,watching:g,localPlay:v}){var V,X,re;const m=s([24,-1.55,0]);m.name="cheese-cellar";const p=i("#697b70"),M=i("#b4b89b"),w=i("#936c4d"),y=i("#e1b064"),b=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],p,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let G=-4;G<=4;G+=2)r([G,1.5,-3.43],[.16,3,.1],p,m);for(let G of[-4.4,4.4])c([G,0,-3.3],[G,3.6,-3.3],.09,t.copper,m),c([G,3.6,-3.3],[G,3.6,2.5],.09,t.copper,m),c([G,3.6,2.5],[G,0,2.5],.09,t.copper,m);d("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let G of[-3.8,3.8])r([G,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,S,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let G of[2.8,3.5])a([G,.28,1.8],.26,.56,t.cream,m),a([G,.59,1.8],.12,.1,t.copper,m);const R=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let G=0;G<4;G++)r([2.25+G*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const _=s([.5,1.02,.25],m),T=h(new n.CylinderGeometry(1.2,1.2,.62,40),y,[0,0,0],null,_),A=h(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),b,[0,0,0],null,_),I=l([0,.33,0],.35,.026,t.cream,_),F=s([.5,.65,2.3],m),k=[];for(let G=0;G<6;G++)k.push(o([-1.25+G*.5,0,0],.08,t.mint,F));const N=d("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});N.rotation.x=-Math.PI/2;function z(G){const $=s(G,m),ce=h(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,$),Z=h(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),b.clone(),[0,0,0],null,$),he=s([0,-.14,.09],$);for(let He=0;He<4;He++)r([.05+He*.085,.04+He*.05,.15+He*.03],[.12,.06,.2],t.cream,he);const be=o([.09,.16,.27],.04,t.mint,he),Ee=h(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,$),U=s([0,0,0],$);for(const[He,Fe,L]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([He,Fe,L],[.05,.05,.025],t.dark,U);return{g:$,body:ce,crust:Z,steps:he,crystal:Ee,holes:U,pearl:be}}const H=Array.from({length:6},(G,$)=>z([-3.15+$*1.26,1.42,-2.6])),O=s([0,0,0],e);for(let G=0;G<24;G++){const $=G/23;r([8.3+$*11.2,-.15-$*1.32,1.4+Math.sin($*Math.PI)*2],[.85,.15,.75],p,O)}for(let G=0;G<5;G++)r([20+G*.7,-1.46,1.4-G*.22],[.75,.13,.7],p,O);d("СЫР →",[10.2,.35,2.4],1.5,.4,O,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,O),u(O,[]),u(m,[_,R,F,N,...H.map(G=>G.g)]);for(const G of H)u(G.steps,[G.pearl]),u(G.holes,[]);let j=null,B=null,Q=0,ee=null,ue="",de=0;try{const G=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");j=(G==null?void 0:G.state)||G,Q=Number(G==null?void 0:G.clockOffset)||0}catch{}const Me=()=>Date.now()/1e3+Q;function Ae(G,$,ce={}){const Z=Iu({state:j,mode:G,tool:$,args:ce,now:Me()});j=Z.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:j,clockOffset:Q}))}catch{}return Z}Ae("migrate");const te=document.createElement("div");te.id="cellar-controls",te.hidden=!0,te.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(te);function W(){return B&&g()?B:Iu({mode:"migrate",state:j,now:j.updated}).public}function K(G){ee=G;const $=G.batch;if(_.visible=!!$,N.visible=!$,R.rotation.y=G.air==="dry"?-.8:0,$){_.rotation.z=$.face?Math.PI:0;const ce=$.age/360;T.material.color.set($.culture==="moon"?"#e9cf8b":"#c8bc88"),A.material.color.set(G.air==="damp"?"#8b9f78":"#b87a48"),I.scale.setScalar(1+ce*.15)}for(let ce=0;ce<6;ce++)k[ce].visible=!!$&&$.age>=(ce+1)*60;H.forEach((ce,Z)=>{const he=G.shelf[Z];ce.g.visible=!!he,he&&(ce.g.rotation.z=he.kind==="lopsided"?.22:0,ce.crust.material.color.set(he.wet>=180?"#8b9f78":"#b87a48"),ce.steps.visible=he.kind==="moon_stair",ce.crystal.visible=he.kind==="stone",ce.holes.visible=he.kind==="holes"||he.kind==="lopsided")})}function fe(G,$){v();const ce=Ae("action",G,$);return ue="",C(0),f(),ce}for(const G of te.querySelectorAll("[data-culture]"))G.onclick=()=>fe("set_batch",{culture:G.dataset.culture});te.querySelector("#cellar-turn").onclick=()=>fe("tend",{air:j.air,turn:!0}),te.querySelector("#cellar-air").onclick=()=>fe("tend",{air:j.air==="damp"?"dry":"damp",turn:!1}),te.querySelector("#cellar-wait").onclick=()=>{v(),Q+=60,Ae("tick"),ue="",C(0),f()};function oe(){const G=ee||W(),$=G.batch,ce=B&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",Z=$?$.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor($.age)}/360 с. Корка: ${Math.floor($.exposure[0])}/${Math.floor($.exposure[1])} с.`:G.shelf.length?`На полке: ${G.shelf.map(he=>Rx[he.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:B&&g()?"войти в свою сыроварню":$?$.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(B&&g())&&!!$&&!$.ready,description:ce+" "+Z}}function P(){const G=ee||W(),$=G.batch;te.querySelector("#cellar-readout").textContent=`${G.air==="damp"?"сыро":"сухо"} · ${$?$.ready?"готово":`ещё ${Math.ceil($.remaining)} с`:"нет колеса"} · полка ${G.shelf.length}/6`;for(const ce of te.querySelectorAll("[data-culture]"))ce.disabled=!!$;te.querySelector("#cellar-turn").disabled=!$||$.ready,te.querySelector("#cellar-air").textContent=G.air==="damp"?"сделать суше":"вернуть сырость"}function C(G){G-de>=1&&(de=G,Ae("tick"));const $=W(),ce=JSON.stringify($);ce!==ue&&(ue=ce,K($),P(),f())}return window.addEventListener("beznogim:state",({detail:G})=>{var ce,Z;const $=(Z=(ce=G.mechanics)==null?void 0:ce.cellar)==null?void 0:Z.public;$&&(B=$,ue="")}),B=((re=(X=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:X.cellar)==null?void 0:re.public)||null,K(W()),P(),{house:m,controls:te,update:C,card:oe,run:()=>fe(j.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:B&&g()?"resident":"sandbox",...ee,wheelVisible:_.visible,shelfVisible:H.filter(G=>G.g.visible).length,stairsVisible:H.filter(G=>G.g.visible&&G.steps.visible).length,shutter:R.rotation.y})}}function Px({entries:n,elements:e,layer:t,camera:i}){const s=new ft,r=new ft,o=new D,a=Object.entries(n).map(([d,u])=>({element:e[d],anchor:u.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,h=!1;return{update(d,u,f){if(t.hidden===d&&(t.hidden=!d),!d){h=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!h||c!==u||l!==f||!s.equals(r);c=u,l=f,h=!0;for(const v of a){if(typeof v.anchor=="function")v.anchor(o);else{if(!g)continue;o.copy(v.anchor)}o.applyMatrix4(s);const m=(o.x+1)*u*.5,p=(1-o.y)*f*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=u-10&&p>=10&&p<=f-55;if(M!==v.visible&&(v.visible=M,v.element.classList.toggle("hidden",!M)),!M)continue;const w=Math.round(m*10)/10,y=Math.round(p*10)/10;(w!==v.x||y!==v.y)&&(v.x=w,v.y=y,v.element.style.transform=`translate3d(${w}px,${y}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Lx(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),h=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,d=Math.max(12,h?0:a.bottom+12,h?l.bottom+12:0),u=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(d)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(u)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Te=n=>document.querySelector(n),$t=()=>innerWidth<700,of=matchMedia("(prefers-reduced-motion: reduce)").matches;let ur={};try{ur=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Se={loop:0,roof:null,running:!!ur.running,harvest:Math.min(99,Math.max(0,Number(ur.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(ur.dockTrips)||0))),dockPending:ur.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Ws(){return Se.roof===null?Se.running||Se.loop>0:!!Se.roof}function rc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Se.running,harvest:Se.harvest,dockTrips:Se.dockTrips,dockPending:Se.dockPending}))}catch{}}const dt=new tf({antialias:!0,alpha:!1,powerPreference:"high-performance"});dt.setPixelRatio(Math.min(devicePixelRatio,$t()?1.5:2));dt.setSize(innerWidth,innerHeight,!1);dt.shadowMap.enabled=!0;dt.shadowMap.type=Ds;dt.shadowMap.autoUpdate=!1;dt.shadowMap.needsUpdate=!0;dt.outputColorSpace=sn;dt.toneMapping=Ea;dt.toneMappingExposure=1.22;Te("#world").append(dt.domElement);const En=new Td;En.background=new ot("#182e32");En.fog=new Fa("#182e32",8e-4);const Ue=new Or(-10,10,10,-10,.1,600),Yc=new D(0,1,0);Ue.position.set(20,20,24);Ue.lookAt(Yc);const Je=new Qv(Ue,dt.domElement);Je.target.copy(Yc);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=vi.PAN;Je.mouseButtons.RIGHT=vi.PAN;Je.touches.ONE=gi.PAN;Je.touches.TWO=gi.DOLLY_PAN;En.add(new Vd("#d9eedc","#334d53",2.3));const us=new Hc("#ffe2ac",3.3);us.position.set(-7,14,6);us.castShadow=!0;us.shadow.mapSize.set($t()?512:1024,$t()?512:1024);Object.assign(us.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});us.shadow.bias=-4e-4;us.shadow.normalBias=.025;En.add(us);const af=new Hc("#8ad5d8",1.3);af.position.set(5,7,-8);En.add(af);const wt=new Fi;En.add(wt);const Fl={};function tt(n,e={}){const t=n+JSON.stringify(e);return Fl[t]||(Fl[t]=new Ps({color:n,roughness:.8,...e}))}const ii={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},me={concrete:tt(ii.concrete),cream:tt(ii.cream),dark:tt(ii.dark),metal:tt(ii.metal,{metalness:.5,roughness:.4}),copper:tt(ii.copper,{metalness:.6,roughness:.35}),rust:tt(ii.rust),black:tt(ii.black),leaf:tt(ii.leaf),light:tt("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:tt("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Zs={box:new wi(1,1,1),sphere:new Ga(1,12,8),ico:new Fr(1,1),cyl:new Nr(1,1,1,16),cone:new cs(1,1,8)};function Nt(n,e,t,i,s=wt){const r=new fn(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const qe=(n,e,t,i=wt)=>Nt(Zs.box,t,n,e,i),ht=(n,e,t,i=wt)=>Nt(Zs.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),Rt=(n,e,t,i,s=wt)=>Nt(Zs.cyl,i,n,[e,t,e],s);function zr(n,e,t,i=wt,s=.08){return Nt(new qc(...e,1,s),t,n,null,i)}function Mt(n=[0,0,0],e=wt){const t=new Fi;return t.position.set(...n),e.add(t),t}function $s(n,e,t,i=wt){const s=new Uc(n.map(r=>new D(...r)));return Nt(new Ha(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function Et(n,e,t,i,s=wt){const r=new D(...n),o=new D(...e),a=o.clone().sub(r),c=Rt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new D(0,1,0),a.normalize()),c}function Lt(n,e,t,i,s=wt,r=[Math.PI/2,0,0]){const o=Nt(new Va(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function on(n,e,t,i,s=wt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new Dc(o);c.colorSpace=sn;const l=Nt(new hs(t,i),new Ir({map:c,side:Pn}),e,null,s);return l.castShadow=!1,l}let Ol=179;function yt(){return Ol=Ol*1664525+1013904223>>>0,Ol/4294967296}const xa=document.createElement("canvas");xa.width=xa.height=256;const ya=xa.getContext("2d");ya.fillStyle="#b4bcaa";ya.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)ya.fillStyle=`rgba(${yt()>.5?"60,82,64":"235,229,201"},${yt()*.08})`,ya.fillRect(yt()*256,yt()*256,1+yt()*3,1+yt()*3);const Cr=new Dc(xa);Cr.wrapS=Cr.wrapT=yr;Cr.repeat.set(5,5);Cr.colorSpace=sn;const Dx=tt("#c2c6b1",{map:Cr,roughness:.97});function Zc(n,e,t,i,s=wt){const r=new Ur;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new qs(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Nt(o,i,null,null,s)}const $c=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Zc($c,0,.82,me.concrete);Zc($c,.06,.14,Dx);Zc($c.map(([n,e])=>[n*.97,e*.97]),-.8,.6,tt("#47665e"));for(let n=0;n<28;n++){const e=-5.4+yt()*10.9,t=yt()>.5?5.15:-5.2,i=Nt(Zs.ico,tt(n%3?"#557469":"#668477"),[e,-1.15-yt()*.5,t],[.25+yt()*.8,.2+yt()*.55,.35+yt()*.3]);i.rotation.y=yt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;qe([e,-.37,5.61],[.48,.19,.025],n%2?me.copper:me.dark),n%2===0&&$s([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,me.metal)}on("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,wt,{size:32});const Pt=Mt([-3.2,.08,-2.5]),hn=Mt([0,0,0],Pt);qe([0,.08,0],[4.5,.15,3.6],me.dark,Pt);qe([0,1.2,-1.68],[4.5,2.4,.18],me.cream,Pt);qe([-2.15,1,0],[.18,2,3.6],me.cream,Pt);for(let n=0;n<5;n++){qe([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],me.concrete,Pt),qe([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],me.metal,Pt);for(let e=0;e<3;e++)qe([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],me.copper,Pt)}qe([0,2.47,-.2],[4.8,.14,3.7],me.rust,hn);for(let n=0;n<23;n++){const e=qe([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],tt("#d09062"),hn);e.rotation.x=-.015}qe([0,2.35,1.62],[4.8,.14,.18],me.dark,Pt);Et([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,me.copper,Pt);Et([2.3,.12,1.62],[2.3,2.4,1.62],.055,me.copper,Pt);on("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Pt,{size:37});qe([.1,.85,-.84],[3.8,.13,.87],me.rust,Pt);for(const n of[-1.5,1.65])qe([n,.44,-.84],[.12,.85,.65],me.metal,Pt);for(let n=0;n<3;n++)qe([-1.15+n*.95,.51,-.85],[.82,.47,.75],me.concrete,Pt),qe([-1.15+n*.95,.5,-.44],[.18,.04,.03],me.copper,Pt);for(let n=0;n<6;n++)qe([-1.6+n*.48,2.07,-1.48],[.28,.16+yt()*.16,.17],tt(["#9fba95","#cb9b70","#667f71"][n%3]),Pt);Rt([0,.5,.7],.32,.12,me.rust,Pt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;Et([e,.06,t],[e,.5,t],.04,me.metal,Pt)}for(let n=0;n<4;n++)Lt([-1.5,.06,1],.3-n*.045,.025,me.black,Pt);Rt([-1.5,3,-.9],.16,.9,me.metal,hn);Rt([-1.5,3.47,-.9],.24,.08,me.rust,hn);qe([1.4,2.9,-.4],[.8,.5,.6],me.concrete,hn);for(let n=0;n<5;n++)qe([1.1+n*.15,2.94,-.085],[.035,.32,.03],me.dark,hn);const Jc=new Xa("#ffca86",5,5,2);Jc.position.set(-3,1.7,-1.1);wt.add(Jc);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=zr([n,.1,e],[.74,.05,.74],tt(yt()>.3?"#b3baa6":"#a5b5a4"),wt,.018);t.rotation.y=(yt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+yt()*12,t=-5.1+yt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Nt(Zs.cone,me.leaf,[e,.1,t],[.022,.12+yt()*.12,.022]);i.rotation.z=(yt()-.5)*.7}const oc=new zn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Pn});qe([3.7,.12,3.6],[4.9,.24,2.7],me.dark);Nt(new hs(4.5,2.4),oc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])qe([3.7,.29,n],[5,.38,.16],me.cream);for(const n of[1.18,6.2])qe([n,.29,3.6],[.16,.38,2.85],me.cream);for(let n=0;n<13;n++)qe([1.85,.5,2.15+n*.235],[1.08,.09,.22],tt(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])Rt([e,.88,n],.045,.8,me.copper);for(const n of[1.31,2.4])$s([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,me.cream);const Kc=[];for(let n=0;n<6;n++){let e=qe([4+n*.095,-1.25,5.56],[.055,2.4,.03],tt("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Kc.push(e)}for(let n=0;n<4;n++)qe([3.96+n*.17,.31,5.31],[.055,.08,.6],me.dark);const Ht=Mt([3.7,.1,-2.6]);zr([0,.14,0],[3.7,.27,3.5],me.cream,Ht,.09);for(const n of[-1.55,1.55])qe([n,1.76,0],[.17,3.25,.2],me.metal,Ht),qe([n,.38,0],[.45,.2,.6],me.copper,Ht),Et([n,.36,-1.2],[n,2.9,0],.045,me.copper,Ht),Et([n,.36,1.2],[n,2.9,0],.045,me.copper,Ht);qe([0,3.38,0],[3.5,.18,.26],me.copper,Ht);const Ix=Lt([0,2.7,-.5],1.83,.035,me.copper,Ht,[0,0,0]);Ix.scale.y=.85;const Br=[];for(let n=0;n<5;n++){const e=Mt([-1.18+n*.59,3.24,0],Ht),t=1.8+n*.12;Et([0,0,-.08],[0,-t,0],.015,me.dark,e),Et([0,0,.08],[0,-t,0],.015,me.dark,e),ht([0,-t,0],.205,me.copper,e),Lt([0,-t,0],.211,.012,me.light,e,[0,0,0]),Br.push({group:e,len:t,phase:n})}qe([0,.6,1.3],[1.45,.8,.4],me.metal,Ht);on("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Ht,{size:40});const Nx=Rt([-.43,.97,1.3],.19,.07,me.cream,Ht);Nx.rotation.x=Math.PI/2;const Qc=qe([-.43,.99,1.342],[.015,.22,.008],me.rust,Ht);Qc.rotation.z=-.7;const lf=ht([.53,.93,1.52],.09,me.light,Ht),Za=Mt([.15,.4,1.59],Ht);Lt([0,0,0],.19,.023,me.rust,Za,[0,0,0]);for(let n=0;n<3;n++)Et([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,me.rust,Za);$s([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,me.copper);const cf=[];function jc(n,e,t=1.5){Rt([n,t/2,e],.038,t,me.metal),qe([n,t,e],[.27,.11,.27],me.dark),qe([n,t-.18,e],[.17,.25,.17],me.light),qe([n,t-.34,e],[.25,.08,.25],me.copper);const i=new Xa("#ffbe70",1.8,3);i.position.set(n,t-.16,e),cf.push(i)}jc(-5.9,3.9,1.3);jc(.3,-4.8,1.7);jc(5.8,1.25,1.35);const rn=Mt([-3.6,.08,3.55]),ac=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;zr([0,.14,e],[3.6,.3,1.14],me.rust,rn,.06),qe([0,.305,e],[3.36,.04,.92],tt(ii.soil),rn);for(let t=0;t<4;t++){const i=Mt([-1.26+t*.84,.33,e],rn);Rt([0,.14,0],.026,.28,me.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=ht([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],tt(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){ht([0,.17,0],[.25,.18,.25],tt("#b6c58a"),i);for(let s=0;s<6;s++){const r=ht([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],me.leaf,i);r.rotation.y=s}ac.push(i)}else{const s=ht([.05,.22,0],[.1,.21,.12],tt(ii.purple,{roughness:.35}),i);s.rotation.z=-.25,ht([.05,.41,0],[.075,.025,.07],me.leaf,i),ac.push(i)}}}const hf=Mt([-1.72,.1,.8],rn);for(let n=0;n<2;n++)qe([n*3.45,.6,0],[.04,1.3,.04],me.copper,hf);Et([0,1.25,0],[3.45,1.25,0],.022,me.copper,hf);on("КОБАЧКИ",[-.45,.68,1.64],1,.26,rn,{bg:"#c2c7a3",fg:"#445e45",size:42});Rt([1.9,.23,.7],.18,.34,tt("#6b9389"),rn);Et([2.04,.25,.7],[2.4,.46,.7],.045,tt("#6b9389"),rn);Lt([1.8,.48,.7],.16,.02,me.copper,rn,[0,0,0]);qe([-1.6,.2,1.47],[.65,.4,.45],me.rust,rn);for(let n=0;n<3;n++)qe([-1.6,.12+n*.11,1.71],[.7,.05,.025],me.copper,rn);const vn=Mt([-3.8,.08,.35]);Rt([0,.73,0],.58,.1,me.rust,vn);Rt([0,.35,0],.045,.7,me.metal,vn);for(let n=0;n<3;n++)Et([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,me.metal,vn);const kr=Mt([.1,.81,0],vn);ht([0,.2,0],[.23,.22,.23],me.cream,kr);Rt([0,.37,0],.14,.06,me.copper,kr);ht([0,.42,0],.045,me.dark,kr);Et([.15,.18,0],[.33,.32,0],.07,me.cream,kr);Lt([-.15,.25,0],.18,.035,me.dark,kr,[0,0,0]);for(const n of[-.35,.38])Rt([n,.84,.24],.082,.15,me.cream,vn),Lt([n,.92,.24],.084,.012,me.copper,vn),Rt([n,.921,.24],.063,.006,tt("#67513b"),vn),Lt([n+.09,.86,.24],.045,.011,me.cream,vn,[0,0,0]);const $a=[];for(let n=0;n<9;n++){const e=ht([0,0,0],.07,tt("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),vn);e.castShadow=!1,$a.push(e)}const Zn=Mt([-5.65,.09,1.1]);qe([0,.3,0],[.7,.6,.7],me.concrete,Zn);zr([0,.8,0],[.68,.45,.35],me.dark,Zn,.05);for(let n=0;n<6;n++)qe([-.2+n*.05,.8,.18],[.022,.27,.018],me.copper,Zn);qe([.18,.85,.184],[.16,.075,.02],me.light,Zn);ht([.18,.72,.19],.05,me.cream,Zn);Et([.18,1,0],[.48,1.6,0],.012,me.copper,Zn);const uf=Mt([-.5,.1,-4.6]);Rt([0,1.75,0],.055,3.5,me.metal,uf);ht([0,3.55,0],.09,me.copper,uf);$s([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,me.dark);for(let n=0;n<8;n++){let e=n/8;const t=Nt(new cs(.13,.3,3),tt(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const Ja=Mt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=qe([0,0,0],[.55,.09,.025],me.rust,Ja);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}ht([0,0,.05],.08,me.copper,Ja);const jt=Mt([7.25,-.03,1.5]);qe([0,-.12,0],[2.25,.3,2.5],me.metal,jt);for(let n=0;n<10;n++)qe([-.99+n*.22,.08,0],[.2,.08,2.6],me.rust,jt);qe([-.95,.2,-.95],[.35,.15,.35],me.dark,jt);Rt([.87,.34,.75],.075,.5,me.copper,jt);Rt([.87,.59,.75],.13,.05,me.cream,jt);Et([.87,.1,-.7],[.87,2.3,-.7],.035,me.copper,jt);$s([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,me.copper,jt);qe([.17,2.09,-.7],[.25,.4,.25],tt("#ffd591"),jt);qe([.17,2.32,-.7],[.34,.08,.34],me.dark,jt);for(let n=0;n<4;n++)Lt([.87,.15,.75],.24-n*.025,.024,tt("#b8ad86"),jt);qe([6.7,.07,1.5],[1.4,.13,.8],me.rust);on("НИКУДА",[.05,.28,1.36],1.3,.29,jt,{bg:"#c2c7a3",fg:"#445e45",size:45});const eh=[];function Ka(n,e,t=1){const i=Mt(e,n),s=new Ur;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Nt(new qs(s,{depth:.19,bevelEnabled:!1}),tt("#dfc99a"),[0,.15,-.1],null,i);const r=Nt(new cs(.23,.36,3),me.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=Ka(wt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);eh.push(e)}const $n=dx({THREE:ci,root:wt,dock:jt,state:Se,M:me,mat:tt,group:Mt,mesh:Nt,box:qe,sphere:ht,cyl:Rt,torus:Lt,rod:Et,sign:on,paperBoat:Ka,batchStatic:zt,persist:rc,say:Cn,refresh:Vt,chime:as,reduced:of}),je=Mt([-.15,1.9,.85]);je.scale.setScalar(1.18);const th=tt("#233a39",{metalness:.42,roughness:.32});ht([0,.1,0],[.62,.8,.55],th,je);ht([0,-.36,.1],[.44,.43,.43],th,je);ht([-.61,.03,.03],[.1,.2,.12],me.copper,je);ht([.61,.03,.03],[.1,.2,.12],me.copper,je);for(const n of[-.23,.23]){ht([n,.2,.485],[.17,.13,.057],me.black,je),Lt([n,.2,.541],.078,.02,me.copper,je,[0,0,0]),ht([n,.2,.56],.041,me.light,je);const e=qe([n,.38,.48],[.24,.045,.06],me.cream,je);e.rotation.z=n>0?-.13:.13}ht([0,.04,.51],[.09,.17,.11],th,je);ht([0,-.2,.44],[.31,.16,.11],me.black,je);for(let n=0;n<7;n++){const e=(n-3)*.073,t=zr([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],me.cream,je,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=ht([t,i,-.04],[.18,.18,.48],me.cream,je);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;$s([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,tt("#f2edda"),je)}for(let n=0;n<3;n++)ht([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],me.cream,je);const nh=Lt([0,1.05,0],.77,.019,me.copper,je);nh.rotation.z=.14;const Ux=new Xa("#ffbb62",.9,3);Ux.position.set(0,.2,.9);const Co=Lt([-.15,.26,.85],.7,.018,me.copper),Pr=Nt(new za(.64,32),new Ir({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Pr.rotation.x=-Math.PI/2;Pr.castShadow=!1;const _i=new D(-.15,1.9,.85),On=Mt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=qe([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?me.cream:me.concrete,On);t.rotation.x=Math.PI/2-e,n%3===0&&Et([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,me.copper,On)}for(const n of[-.45,.45])Lt([n,0,0],2.07,.025,me.copper,On,[0,Math.PI/2,0]);for(const n of[-.34,.34])Lt([n,0,0],1.7,.075,me.concrete,On,[0,Math.PI/2,0]);Et([0,-2.15,-1.2],[0,-1.58,-.8],.07,me.metal,On);Et([0,-2.15,1.2],[0,-1.58,.8],.07,me.metal,On);on("ОБРАТНО",[.49,-.55,.2],1.15,.3,On,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+yt()*20,t=-8+yt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Nt(Zs.ico,tt("#47675f"),[e,-1.3-yt()*2,t],[.22+yt()*.55,.19+yt()*.4,.27+yt()*.4])}const df=new Ot,ff=[];for(let n=0;n<75;n++)ff.push((yt()-.5)*25,yt()*9-2,(yt()-.5)*22);df.setAttribute("position",new pt(ff,3));const pf=new Ad(df,new Pc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));En.add(pf);function zt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new ft().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=ux(o,!1);a&&Nt(a,r,null,null,n),o.forEach(c=>c.dispose())}}zt(wt,[je,rn,Ht,vn,Zn,jt,Pt,On,Ja,...eh,...$a,...Kc,Co,Pr,$n.travel]);zt(Pt,[hn]);zt(hn,[]);zt(On,[]);zt(je,[nh]);je.traverse(n=>{n.isMesh&&(n.castShadow=!1)});zt(vn,[...$a]);zt(Zn,[]);zt(jt,[$n.gallery,$n.beacon]);zt(Ht,[...Br.map(n=>n.group),Za,Qc,lf]);Br.forEach(n=>zt(n.group,[]));const Lr=Mt([0,.33,0],rn);ac.forEach(n=>{Lr.add(n),n.position.y-=.33});zt(Lr,[]);zt(rn,[Lr]);const xn=xx({THREE:ci,root:wt,scene:En,head:je,M:me,mat:tt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,paperBoat:Ka,batchStatic:zt,changed:()=>{Vt(),dt.shadowMap.needsUpdate=!0},chime:as}),yi=Cx({THREE:ci,root:wt,M:me,mat:tt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,mesh:Nt,sign:on,batchStatic:zt,changed:()=>{Vt(),dt.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),Oi=Ff({THREE:ci,root:wt,M:me,mat:tt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,batchStatic:zt,changed:()=>{Vt(),dt.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),Mi=Nf({THREE:ci,root:wt,M:me,mat:tt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,batchStatic:zt,changed:()=>{Vt(),dt.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),ai=If({THREE:ci,root:wt,M:me,mat:tt,group:Mt,box:qe,sphere:ht,rod:Et,torus:Lt,sign:on,batchStatic:zt,changed:()=>{Vt(),dt.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),zi=Uf({THREE:ci,workshop:Pt,M:me,mat:tt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,changed:()=>{Vt(),dt.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),Qa=yx({THREE:ci,scene:En,root:wt,head:je,M:me,mat:tt,mesh:Nt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,batchStatic:zt,chime:as}),Gr=Ax({THREE:ci,scene:En,root:wt,head:je,M:me,mat:tt,mesh:Nt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,paperBoat:Ka,batchStatic:zt,chime:as}),Dn=Tx({THREE:ci,scene:En,root:wt,head:je,M:me,mat:tt,mesh:Nt,group:Mt,box:qe,sphere:ht,cyl:Rt,rod:Et,torus:Lt,sign:on,batchStatic:zt,chime:as,changed:()=>{rh(),dt.shadowMap.needsUpdate=!0}}),mf=Mx({head:je,group:Mt,sphere:ht,box:qe,torus:Lt,M:me,mat:tt});let Kt=null,Yt=1;const Bn={dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new D(-6.9,1.9,-20.1),position:new D(0,.6,-24),run:()=>ai.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new D(-17.5,1.3,3.4),position:new D(-24,.6,0),run:()=>Mi.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new D(-1.4,1.5,-1.1),position:new D(-3.2,1.25,-2.2),run:()=>zi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new D(4.7,.8,25.8),position:new D(0,.4,24),run:()=>Oi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new D(28.4,2.2,2.5),position:new D(24,.4,0),run:()=>yi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new D(-.1,2.15,4.3),position:new D(-.1,1,4.3),run:()=>xn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new D(-6,4.55,-3.25),position:new D(-6,2.2,-3.25),run:()=>{Se.loop>0||(Se.loop=12,_f.copy(je.position),Cn("ноги не понадобились"),Vt())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new D(-3.2,3.15,-2.5),position:new D(-3.2,1.1,-2.5),run:()=>{Se.roof=Ws()?0:1,Cn(Ws()?"заходи":"прикрыл"),Vt()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(je.position),n.y+=1.35},position:new D(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Cn(n[Fx++%n.length]),_i.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new D(3.7,3.85,-2.6),position:new D(3.7,1,-2.6),run:()=>{Se.running=!Se.running,rc(),Cn(Se.running?"ну пошло":"можно и полежать"),Vt()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new D(-3.7,1.65,.35),position:new D(-3.8,1,.35),run:()=>{Se.brew>0||(Se.brew=8,Se.teaCount++,_i.set(-2.65,1.7,.65),Cn("щас, чайник поставлю"),Vt())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new D(-3.4,1,3.8),position:new D(-3.6,1,3.55),run:()=>{Se.harvest++,Us=.15,rc(),_i.set(-1.6,1.6,2.3),Cn(Se.harvest===1?"о, урожай":"кабачки опять победили"),Vt()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new D(-5.65,1.75,1.1),position:new D(-5.65,1,1.1),run:()=>{Se.radio=(Se.radio+1)%3,ih(),Cn(["тишина. нормально.","дождь поймал","провода поют"][Se.radio]),Vt()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new D(7.4,2.75,1.1),position:new D(7.25,.9,1.5),run:()=>{$n.launchOrCollect(),Se.dockPending===!1&&Se.boat===0&&_i.set(5.85,1.7,1.05)}}};let Fx=0,Us=1,gf=0,ss=0;const _f=new D;let vf=()=>{Hi("engine"),Bn.engine.run()};const ja={};for(const[n,e]of Object.entries(Bn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>Hi(n),Te("#hotspots").append(t),ja[n]=t}const xf=Te("#hotspots"),zl=Te("#speech"),ts={width:innerWidth,height:innerHeight},Ox=Px({entries:Bn,elements:ja,layer:xf,camera:Ue});let Bl=!1,Nu=NaN,Uu=NaN;const ar=new D;function Hi(n){Se.selected=n,Te("#inspector").classList.remove("collapsed");const e=Bn[n];Te("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Te("#object-title").textContent=e.title,Te("#object-description").textContent=e.description,vf=e.run,Te("#focus-object").hidden=!1,Te("#focus-object").textContent=_n===n?"весь двор ⌂":"осмотреть ближе ⊕",Vt();for(const[t,i]of Object.entries(ja))i.classList.toggle("selected",t===n)}function Vt(){const n=Se.selected,e=Bn[n];if(Te("#status").textContent=Se.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=Se.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=Ws()?"закрыть крышу":e.action),n==="engine"&&(t=Se.running?"остановить и отдохнуть":"запустить маятники",i=Se.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=Se.brew>0,t=s?"чай заваривается…":e.action,i=Se.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&Se.harvest&&(i=`Уже собрано: ${Se.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Se.radio]}. ${Se.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=$n.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=xn.card();t=r.action,i=r.description}if(n==="cellar"){const r=yi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Oi.card();t=r.action,i=r.description}if(n==="bench"){const r=zi.card();t=r.action,i=r.description}if(n==="drydock"){const r=Mi.card();t=r.action,i=r.description}if(n==="dash"){const r=ai.card();t=r.action,i=r.description}ai.controls.hidden=n!=="dash",Mi.controls.hidden=n!=="drydock",zi.controls.hidden=n!=="bench",Oi.controls.hidden=n!=="amnesty",yi.controls.hidden=n!=="cellar",Te("#enter-bench")&&(Te("#enter-bench").hidden=n!=="workshop"),Te("#enter-dream03").hidden=n!=="dock",Te("#enter-dream04").hidden=n!=="workshop",Te("#greenhouse-controls").hidden=n!=="greenhouse",Te("#thermal-moves").hidden=xn.inspect().mode!=="playing",Te("#thermal-readout").textContent=`тепло ${xn.inspect().temp} · такты ${xn.inspect().turn}/6`,Te("#object-description").textContent=i,Te("#object-action").innerHTML=t+" <span>↗</span>",Te("#object-action").disabled=s}Te("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash"].includes(Se.selected)&&mt.watching()){mt.localPlay();return}mt.localPlay(),vf(),ss=performance.now()+2200};Te("#close-card").onclick=()=>Te("#inspector").classList.add("collapsed");function Cn(n){Te("#speech").textContent=n,gf=performance.now()+4e3,Te("#speech").classList.add("visible")}Te("#markers").onclick=()=>{Se.markers=!Se.markers,Te("#markers").setAttribute("aria-pressed",Se.markers),xf.hidden=!Se.markers||!!Kt||Ue.zoom<.4};let _n=null;const un={angle:Math.PI/4,targetAngle:Math.PI/4};function yf(){ts.width=innerWidth,ts.height=innerHeight;const n=innerWidth/innerHeight,e=$t()?19.6:9.6;Ue.left=-e*n,Ue.right=e*n,Ue.top=e-($t()?2.8:0),Ue.bottom=-e-($t()?2.8:0),Ue.updateProjectionMatrix(),dt.setSize(innerWidth,innerHeight,!1),dt.setPixelRatio(Math.min(devicePixelRatio,$t()?1.5:2))}function Js(){if(mt==null||mt.unfollow(),Kt){el();return}_n=null,document.body.classList.remove("close-look"),Te("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Ue.zoom=1,Je.target.copy(Yc),un.targetAngle=Math.PI/4,Ue.updateProjectionMatrix()}Te("#focus-object").onclick=()=>{if(Se.selected){if(_n===Se.selected){Js();return}_n=Se.selected,document.body.classList.add("close-look"),Te("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(Bn[Se.selected].position),$t()&&(Je.target.y+=["cellar","amnesty","drydock","dash"].includes(_n)?-.7:1.6),Ue.zoom=["cellar","amnesty","drydock","dash"].includes(_n)?$t()?1.8:1.6:$t()?2.5:2.1,_n==="bench"?(Je.maxZoom=4.5,Ue.zoom=$t()?3.8:3.4,Je.target.y+=$t()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Ue.updateProjectionMatrix()}};Te("#home").onclick=Js;Te("#zoom-in").onclick=()=>{Ue.zoom=Math.min(Je.maxZoom,Ue.zoom*1.2),Ue.updateProjectionMatrix()};Te("#zoom-out").onclick=()=>{Ue.zoom=Math.max(Je.minZoom,Ue.zoom/1.2),Ue.updateProjectionMatrix()};Te("#rotate").onclick=()=>un.targetAngle+=Math.PI/2;addEventListener("resize",yf);yf();function Mf(n,e,t=!1){Kt&&el(),Js(),Je.target.set(n,1,e),Ue.zoom=t?1:.65,Ue.updateProjectionMatrix(),Te("#inspector").classList.add("collapsed")}function zx(){Mf(0,0);const n=innerWidth/innerHeight,e=$t()?19.6:9.6;Ue.zoom=Math.min(e*n/(Fs.half*1.57),e/(Fs.half*1.3)),Ue.updateProjectionMatrix()}const Fs=vx({root:wt,camera:Ue,controls:Je,mobile:$t,go:Mf,overview:zx,home:Js,locationTarget:()=>_n==="dash"&&Se.selected==="dash"?Bn.dash.position:null}),Bi=document.createElement("select");Bi.id="world-places";Bi.setAttribute("aria-label","Открыть место");Bi.append(new Option("места",""));for(const[n,e]of Object.entries(Bn))Bi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Bi,document.querySelector("#territory-location"));Bi.onchange=()=>{const n=Bi.value;Bn[n]&&(Js(),Je.target.copy(Bn[n].position),Hi(n),Bi.value="")};Ue.zoom=.72;Ue.updateProjectionMatrix();const Fu=new Xd,Ou=new ye;let ji=null;dt.domElement.addEventListener("pointerdown",n=>{ji={x:n.clientX,y:n.clientY,time:performance.now()}});dt.domElement.addEventListener("pointerup",n=>{if(!ji||Math.hypot(n.clientX-ji.x,n.clientY-ji.y)>7||performance.now()-ji.time>550){ji=null;return}if(ji=null,Ou.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Fu.setFromCamera(Ou,Ue),Kt)return;const e=Fu.intersectObjects([ai.house,Mi.house,zi.house,Oi.house,yi.house,xn.house,je,Ht,rn,vn,Zn,jt,Pt,On,$n.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![ai.house,Mi.house,zi.house,Oi.house,yi.house,xn.house,je,Ht,rn,vn,Zn,jt,Pt,On,$n.travel].includes(t);)t=t.parent;const i=new Map([[ai.house,"dash"],[Mi.house,"drydock"],[zi.house,"bench"],[Oi.house,"amnesty"],[yi.house,"cellar"],[xn.house,"greenhouse"],[je,"head"],[Ht,"engine"],[rn,"garden"],[vn,"tea"],[Zn,"radio"],[jt,"dock"],[Pt,"workshop"],[On,"stair"],[$n.travel,"dock"]]).get(t);i&&Hi(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Bn)){const o=r.position.clone().project(Ue);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&Hi(t)}});let bn=null;function Bx(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function ih(){if(!bn)return;const n=bn.ctx.currentTime;bn.filter.frequency.setTargetAtTime([160,1100,260][Se.radio],n,.4),bn.toneGain.gain.setTargetAtTime([.05,.025,.3][Se.radio],n,.4)}Te("#sound").onclick=async()=>{try{bn||(bn=Bx()),await bn.ctx.resume(),Se.sound=!Se.sound,bn.gain.gain.setTargetAtTime(Se.sound?.08:0,bn.ctx.currentTime,.3),Te("#sound").textContent=Se.sound?"звук включён":"звук выключен",Te("#sound").setAttribute("aria-pressed",Se.sound),ih(),Vt()}catch{Cn("со звуком не сложилось")}};function as(n=330){if(!bn||!Se.sound)return;const e=bn.ctx.currentTime,t=bn.ctx.createOscillator(),i=bn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(bn.gain),t.start(e),t.stop(e+1.1)}Te("#about").onclick=()=>Te("#about-dialog").showModal();Te("#close-about").onclick=Te("#back-to-yard").onclick=()=>Te("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&Kt){el();return}n.key==="Escape"&&Te("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Te("#zoom-in").click(),n.key==="-"&&Te("#zoom-out").click(),n.key.toLowerCase()==="r"&&Te("#rotate").click(),n.key.toLowerCase()==="h"&&Js()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{mt.localPlay(),xn.step(n.dataset.thermal),ss=performance.now()+2200};const kx={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function sh(){return Yt===1?xn:Yt===2?Qa:Yt===3?Gr:Dn}function rh(){const n=Yt===1?xn.inspect().dreamStep:sh().inspect().step,e=kx[Yt];if(Te("#dream-force").hidden=Yt!==3,Te("#dream-roofs").hidden=Yt!==4,Te("#dream-panel .object-kicker").textContent=`СОН 0${Yt} / БЕЗНОГИМ`,Te("#dream-panel h2").textContent=e.title,Te("#dream-text").textContent=Yt===4?Dn.text():e.lines[n],Te("#dream-breathe").textContent=Yt===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Te("#dream-breathe").disabled=Yt===4&&Dn.inspect().phase==="flying",Yt===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function Vr(n=1){Kt||(Yt=n,Kt={target:Je.target.clone(),zoom:Ue.zoom,angle:un.targetAngle,focused:_n,returnId:n===1?"greenhouse":n===2?"cellar":n===3?"dock":"workshop"},sh().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,$t()?n===1?3:2.4:n===1?2:1.5,0),Ue.zoom=n===1?$t()?1.65:1.75:$t()?1.45:1.55,Ue.updateProjectionMatrix(),un.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4),Ma="",Te("#dream-panel").hidden=!1,rh(),dt.shadowMap.needsUpdate=!0)}function el(){if(!Kt)return;const n=Kt;Kt=null,sh().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Ue.zoom=n.zoom,un.targetAngle=n.angle,_n=n.focused,Ue.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Ma="",Te("#dream-panel").hidden=!0,dt.shadowMap.needsUpdate=!0,Hi(n.returnId)}Te("#enter-dream").onclick=()=>Vr(1);Te("#exit-dream").onclick=el;Te("#dream-breathe").onclick=()=>{Yt===1?xn.breathe():Yt===2?Qa.pour():Yt===3?Gr.toss():Dn.send(),ss=performance.now()+2200,rh(),dt.shadowMap.needsUpdate=!0};const Hr=document.createElement("button");Hr.id="enter-bench";Hr.hidden=!0;Hr.textContent="собрать механический монитор ↗";Hr.onclick=()=>{Hi("bench"),Te("#focus-object").click()};Te("#focus-object").before(Hr);const tl=document.createElement("button");tl.id="enter-dream02";tl.textContent="сон 02 / вода спит ↗";tl.onclick=()=>Vr(2);yi.controls.append(tl);Te("#enter-dream03").onclick=()=>Vr(3);Te("#enter-dream04").onclick=()=>Vr(4);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),ss=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{Gr.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Te("#dream-archive").onclick=()=>Te("#dream-archive-dialog").showModal();Te("#close-dream-archive").onclick=()=>Te("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Te("#dream-archive-dialog").close(),Vr(Number(n.dataset.dreamId))};const mt=px({head:je,headDestination:_i,state:Se,controls:Je,camera:Ue,refresh:Vt,setAudioTone:ih,say:Cn,onHarvest:()=>{Us=.15}});let kl="";const Sf=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Sf.push(new D(n,e,t));const bf=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])bf.push(new D(n,e,t));const Ef=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Ef.push(new D(n,e,t));function Gx(){const n=_n==="dash"&&Se.selected==="dash",e=_n==="drydock"&&Se.selected==="drydock"||n,t=(_n==="bench"&&Se.selected==="bench"||e)&&!Te("#inspector").classList.contains("collapsed")&&!Kt;if(document.body.classList.toggle("dash-look",t&&n),document.body.classList.toggle("bench-look",t&&!e),document.body.classList.toggle("drydock-look",t&&e),!t){kl="";return}if(Math.abs(un.angle-un.targetAngle)>.01)return;const i=Te("#inspector").getBoundingClientRect(),s=Te(".territory-nav").getBoundingClientRect(),r=Te(".toolbar").getBoundingClientRect(),o=innerWidth<=900&&innerHeight>innerWidth,a=o?{left:14,right:r.left-10,top:s.bottom+14,bottom:i.top-14}:{left:Math.max(i.right+18,s.right+18),right:r.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!o&&(a.left=s.right+12,a.right=innerWidth-16,a.top=r.bottom+10,a.bottom=i.top-10),n&&innerWidth<=900&&!o&&(a.left=12,a.right=i.left-12,a.top=s.bottom+10,a.bottom=Te("footer").getBoundingClientRect().top-12);const c=Te(".resident-history");e&&innerWidth>900&&c&&!c.hidden&&(a.right=Math.min(a.right,c.getBoundingClientRect().left-18));const l=[n?14:e?13:12,innerWidth,innerHeight,a.left,a.right,a.top,a.bottom,un.targetAngle].map(p=>Math.round(p*10)/10).join(":");if(l===kl||a.bottom-a.top<35||a.right-a.left<50)return;kl=l;const h=()=>{Ue.updateMatrixWorld();const p=(n?bf:e?Ef:Sf).map(M=>Rn(M.clone()));return{l:Math.min(...p.map(M=>M.x)),r:Math.max(...p.map(M=>M.x)),t:Math.min(...p.map(M=>M.y)),b:Math.max(...p.map(M=>M.y))}};let d=h();Ue.zoom=Math.min(4.5,Ue.zoom*Math.min((a.right-a.left)/(d.r-d.l),(a.bottom-a.top)/(d.b-d.t))),Ue.updateProjectionMatrix(),d=h();const u=(a.left+a.right-d.l-d.r)/2,f=(a.top+a.bottom-d.t-d.b)/2,g=new D().setFromMatrixColumn(Ue.matrixWorld,0),v=new D().setFromMatrixColumn(Ue.matrixWorld,1),m=g.multiplyScalar(-u*(Ue.right-Ue.left)/Ue.zoom/innerWidth).add(v.multiplyScalar(f*(Ue.top-Ue.bottom)/Ue.zoom/innerHeight));Je.target.add(m),Ue.position.add(m),Ue.lookAt(Je.target),Ue.updateMatrixWorld()}let Ma="";const wf=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])wf.push(new D(n,e,t));function Vx(){if(!Kt||Yt!==4)return;const n=Te("#dream-panel").getBoundingClientRect(),e=Te("footer").getBoundingClientRect(),t=Te(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(un.angle*100)].join(":");if(o===Ma||r.right-r.left<60||r.bottom-r.top<80)return;Ma=o;const a=()=>{Ue.updateMatrixWorld();const g=wf.map(v=>Rn(v.clone()));return{l:Math.min(...g.map(v=>v.x)),r:Math.max(...g.map(v=>v.x)),t:Math.min(...g.map(v=>v.y)),b:Math.max(...g.map(v=>v.y))}};let c=a();Ue.zoom=Math.min(4.5,Ue.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Ue.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,h=(r.top+r.bottom-c.t-c.b)/2,d=new D().setFromMatrixColumn(Ue.matrixWorld,0),u=new D().setFromMatrixColumn(Ue.matrixWorld,1),f=d.multiplyScalar(-l*(Ue.right-Ue.left)/Ue.zoom/innerWidth).add(u.multiplyScalar(h*(Ue.top-Ue.bottom)/Ue.zoom/innerHeight));Je.target.add(f),Ue.position.add(f),Ue.lookAt(Je.target),Ue.updateMatrixWorld()}let zu=performance.now(),So=0,Bu=0;function Rn(n){return n.project(Ue),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function Hx(){mt.sync();const n=performance.now(),e=(n-zu)/1e3;zu=n,So+=e,Se.energy=mn.damp(Se.energy,Se.running?1:0,1.6,e);const t=of?So*.2:So;un.angle=mn.damp(un.angle,un.targetAngle,5,e);const i=160;Ue.position.set(Je.target.x+Math.sin(un.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(un.angle)*i),Ue.lookAt(Je.target),Je.update(),Kt||(Je.target.x=mn.clamp(Je.target.x,-62,Fs.half+2),Je.target.z=mn.clamp(Je.target.z,-62,Fs.half+2)),Fs.update(),Gx(),Vx();for(const s of Br)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*Se.energy*.45;if(hn.position.z=mn.damp(hn.position.z,Ws()?-2.5:0,2,e),hn.position.y=mn.damp(hn.position.y,Ws()?.4:0,2,e),Za.rotation.z=t*Se.energy*.28,Qc.rotation.z=-.7+Se.energy*1.35+Math.sin(t*4)*Se.energy*.08,lf.material.emissiveIntensity=.45+Se.energy*1.5,oc.uniforms.uTime.value=t,oc.uniforms.uEnergy.value=Se.energy,Ja.rotation.z=t*(.09+Se.energy*.23),cf.forEach(s=>s.intensity=.65+Se.energy*1.5),Jc.intensity=2+Se.energy*4,je.position.x=mn.damp(je.position.x,_i.x,1.6,e),je.position.z=mn.damp(je.position.z,_i.z,1.6,e),je.position.y=mn.damp(je.position.y,_i.y+Math.sin(t*1.4)*.1,2,e),Se.loop>0){Se.loop=Math.max(0,Se.loop-e);const s=12-Se.loop;if(s<2){const r=mn.smoothstep(s,0,2);je.position.lerpVectors(_f,new D(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;je.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),je.rotation.x=(s-2)/8*Math.PI*2}else{const r=mn.smoothstep(s,10,12);je.position.lerpVectors(new D(-6,.65,-3.25),_i,r),je.rotation.x=(1-r)*Math.PI*2}Se.loop||(je.rotation.x=0,Cn("ну вот и дома"),Vt())}if(mt.place(),je.rotation.y=Math.sin(t*.3)*.12,nh.rotation.y=t*.13,Co.position.x=je.position.x,Co.position.z=je.position.z,Co.rotation.z=.04*Math.sin(t),Pr.position.x=je.position.x,Pr.position.z=je.position.z,Us=mn.damp(Us,1,.85,e),Lr.scale.y=Us,Lr.rotation.z=Math.sin(t*.9)*.009,Se.brew>0&&(Se.brew=Math.max(0,Se.brew-e),Se.brew===0&&(Cn("чай готов. живём."),Vt(),as(440))),$a.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=Se.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),eh.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),mf.update(mt.watching()),Qa.update(e,t),Gr.update(e,t),Dn.update(e,t),ai.update(e),Mi.update(e),zi.update(e),hn.visible=!(_n==="bench"&&Se.selected==="bench"&&!Te("#inspector").classList.contains("collapsed")&&!Kt),Oi.update(e),yi.update(So),xn.update(e,t),$n.update(e,t),Bl!==Se.dockPending&&(Bl=Se.dockPending,ja.dock.classList.toggle("waiting",Bl)),Kc.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+Se.energy*.23}),pf.rotation.y=t*.003,Se.running&&t-Bu>3.5&&(Bu=t,as([220,277,330,415,440][Math.floor(t)%5])),Ue.updateMatrixWorld(),Ox.update(!Kt&&Ue.zoom>=.4&&Se.markers,ts.width,ts.height),Kt||n>gf)zl.classList.contains("visible")&&zl.classList.remove("visible");else{ar.copy(je.position),ar.y+=1.52,ar.project(Ue);const s=Math.round(Math.max(85,Math.min(ts.width-85,(ar.x+1)*ts.width*.5))*10)/10,r=Math.round((1-ar.y)*ts.height*.5*10)/10;(s!==Nu||r!==Uu)&&(Nu=s,Uu=r,zl.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}ss&&performance.now()>ss&&(dt.shadowMap.needsUpdate=!0,ss=0),dt.render(En,Ue)}Se.running&&(Te("#object-action").innerHTML="остановить двор <span>↗</span>");Vt();dt.setAnimationLoop(Hx);requestAnimationFrame(()=>Te("#loading").classList.add("done"));window.__yard={state:Se,select:Hi,inspect:()=>({resident:mt.inspect(),territory:Fs.inspect(),sleepBody:mf.inspect(),sleepDream:Qa.inspect(),quietDream:Gr.inspect(),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>Rn(new D(...n))),roofDreamLetterScreen:Rn(new D(...Dn.inspect().letter)),dreamId:Kt?Yt:null,dash:ai.inspect(),dashSnailScreen:Rn(new D(...ai.inspect().snail).add(new D(0,-1,-24))),dashBeamScreen:Rn(new D(...ai.inspect().beam).add(new D(0,-1.5,-24))),drydock:Mi.inspect(),drydockShipScreen:Rn(new D(...Mi.inspect().ship).add(new D(-24,-.5,0))),bench:zi.inspect(),benchScreen:Rn(new D(-2.65,1.58,-3.18)),benchBucketScreen:Rn(new D(-4.75,1.51,-3.63)),roofVisible:hn.visible,amnesty:Oi.inspect(),amnestyScreen:Rn(new D(0,-.3,24)),cellar:yi.inspect(),cellarScreen:Rn(new D(24,-.3,.25)),objects:Object.keys(Bn),greenhouse:xn.inspect(),dock:$n.inspect(),boatScreen:Rn(new D(...$n.inspect().boat).add(new D(0,.2,0))),drawCalls:dt.info.render.calls,triangles:dt.info.render.triangles,gpuGeometries:dt.info.memory.geometries,zoom:Ue.zoom,target:Je.target.toArray(),angle:un.angle,head:je.position.toArray(),roof:hn.position.toArray(),roofOpen:Ws(),roofMode:Se.roof===null?"auto":"manual",pendulums:Br.map(n=>n.group.rotation.x),growth:Us,meshes:(()=>{let n=0;return En.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[dt.domElement.width,dt.domElement.height]})};Lx();
