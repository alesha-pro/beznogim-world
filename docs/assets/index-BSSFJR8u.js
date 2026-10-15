(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function bh(n){const e=n.state||{},t=(a,c,l,h)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):h,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function Ff({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:h,changed:f,watching:u,localPlay:p}){var K,he,ne;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const v=i("#28464d"),m=i("#eee4c9"),d=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],d,g);const M=s([0,0,0],g),w=s([0,0,0],g);for(const[C,P]of[[M,"ОТ"],[w,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,C),r([0,1.32,0],[2.12,.12,3.3],m,C),l(P,[0,.9,1.66],1,.36,C,{size:60});const y=s([0,1.43,0],g),b=s([0,0,0],y),S=s([0,0,0],y),R=r([-.5,0,0],[1,.15,.56],v,b),_=r([.5,0,0],[1,.15,.56],v,S),T=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),A=s([0,1.47,0],g);A.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,A),o([-.08,.46,0],[.39,.42,.29],t.copper,A),c([-.08,.47,.3],.23,.033,m,A,[0,0,0]),c([-.08,.47,.315],.12,.03,m,A,[0,0,0]);for(const C of[-.13,.13])a([.4,.17,C],[.62,.46,C],.02,t.leaf,A),o([.62,.46,C],[.055,.065,.055],v,A);r([-.16,.92,0],[.46,.32,.065],m,A),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,A),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,A);const D=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,D);const O=[".","?","!"].map((C,P)=>{const W=s([-1.1+P*1.1,.42,0],D);return r([0,0,0],[.8,.65,.11],m,W),l(C,[0,.02,.075],.55,.5,W,{size:100}),W});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const G=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,G);for(let C=-4;C<=4;C++)r([C,.07,0],[.035,.025,.26],v,G),l(String(C),[C,.08,.32],.4,.28,G,{size:45});for(let C=0;C<16;C++)r([1.5,-.1-C*.09,-5.9-C*.72],[1.05,.14,.65],t.cream,e);for(let C=0;C<8;C++)r([1.5,-1.45,-17.6-C*.5],[1.05,.14,.45],t.cream,e);const N=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,N),r([0,2.7,0],[.8,.14,.8],t.metal,N),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),N),h(A,[]),h(M,[]),h(w,[]),h(g,[M,w,y,...T,A,D]);let B=null,X=((ne=(he=(K=window.__beznogimState)==null?void 0:K.mechanics)==null?void 0:he.dash)==null?void 0:ne.public)||null,z,J="",k=1,ee=0;try{B=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function $(C,P,W={}){const q=bh({mode:C,tool:P,args:W,state:B});B=q.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(B))}catch{}return q}$("migrate");const ue=document.createElement("div");ue.id="dash-controls",ue.hidden=!0,ue.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(C,P)=>`<option value="${P+1}">${P+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(C=>`<option value="${C}">${C>0?"+":""}${C}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(ue);const fe=()=>X&&u()?X:bh({mode:"migrate",state:B}).public;function ye(C,P){p(),$("action",C,P),J="",te(0),f()}ue.querySelector("#dash-tune").onclick=()=>ye("tune",{span:Number(ue.querySelector("#dash-span").value),shift:Number(ue.querySelector("#dash-shift").value)}),ue.querySelector("#dash-reset").onclick=()=>ye("reset");function Re(C){const P=["delivered","complete"].includes(C.phase);P?!z||z.run!==C.run||z.round!==C.round?k=1:["delivered","complete"].includes(z.phase)||(k=0):k=0,z=C,ue.querySelector("#dash-readout").textContent=`почта ${C.delivered}/3 · пролёт ${C.gap} · центр ${C.center>0?"+":""}${C.center} · попытки ${C.attempts}`,ue.querySelector("#dash-span").value=C.span,ue.querySelector("#dash-shift").value=C.shift;for(const W of ue.querySelectorAll("select,#dash-tune"))W.disabled=P;M.position.x=C.center-C.gap/2-1,w.position.x=C.center+C.gap/2+1,T[0].position.x=C.center-C.gap/2,T[1].position.x=C.center+C.gap/2,y.position.x=C.shift,R.scale.x=_.scale.x=C.span/2,R.position.x=-C.span/4,_.position.x=C.span/4,O.forEach((W,q)=>W.visible=q<C.delivered)}function te(C){const P=fe(),W=JSON.stringify(P);W!==J&&(J=W,Re(P),f()),k=["delivered","complete"].includes(P.phase)?Math.min(1,k+C/4):0,ee=n.MathUtils.damp(ee,P.phase==="bent"?.22:0,6,C),b.rotation.z=ee,S.rotation.z=-ee,y.position.y=1.43-Math.sin(ee)*P.span/2,A.position.x=M.position.x+(w.position.x-M.position.x)*(k*k*(3-2*k)),A.position.y=1.47,A.rotation.z=k>0&&k<1?Math.sin(k*30)*.025:0}const F=()=>{const C=z||fe();return{action:X&&u()?"попробовать свою почту":C.phase==="complete"?"новая почта ↺":C.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(X&&u()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+C.message}};return window.addEventListener("beznogim:state",({detail:C})=>{var W,q;const P=(q=(W=C.mechanics)==null?void 0:W.dash)==null?void 0:q.public;P&&(X=P)}),Re(fe()),J=JSON.stringify(fe()),A.position.x=k===1?w.position.x:M.position.x,{house:g,controls:ue,update:te,card:F,run:()=>{if(k>0&&k<1)return;const C=fe().phase;ye(C==="complete"?"reset":C==="delivered"?"next":"cross")},inspect:()=>({source:X&&u()?"resident":"sandbox",...z,walk:k,bend:ee,snail:A.position.toArray(),beam:y.position.toArray(),left:M.position.x,right:w.position.x,stamps:O.map(C=>C.visible)})}}function Eh(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Of({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:h,batchStatic:f,changed:u,watching:p,localPlay:g}){var he,ne,C;const v=s([-24,-1.5,0],e);v.name="sandbox-drydock";const m=i("#d0b987"),d=i("#556f7f"),M=i("#a65d42"),w=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,v),r([0,.2,0],[15.7,.12,9.7],t.dark,v),r([.5,.38,0],[12.6,.26,3.9],t.dark,v);for(const P of[-2,2])r([.5,.96,P],[12.9,1.1,.22],t.copper,v);for(const P of[-6,7])r([P,.96,0],[.22,1.1,4.1],t.copper,v);const y=Array.from({length:3},(P,W)=>r([-4+W*2,.98,0],[1.9,1,3.7],m,v)),b=r([.5,.54,0],[12.6,.04,3.75],w,v);b.castShadow=!1;const S=Array.from({length:3},(P,W)=>{const q=s([-4+W*2,.35,3.05],v);for(let oe=0;oe<5;oe++)o([(oe-2)*.27,.16+oe%2*.1,0],[.32,.22,.4],m,q);return q}),R=s([-2,1.3,0],v);R.name="sandbox-cargo-ship";const _=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([P,W],q)=>q?_.lineTo(P,-W):_.moveTo(P,-W)),_.closePath();const T=new n.ExtrudeGeometry(_,{depth:.67,bevelEnabled:!1});T.rotateX(-Math.PI/2);const A=new n.Mesh(T,d);A.castShadow=!0,A.receiveShadow=!0,R.add(A),r([-.45,.7,0],[4.9,.09,1.4],t.cream,R);for(let P=0;P<3;P++){r([-.95+P*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][P],R);for(const W of[-.601,.601])for(let q=0;q<4;q++)r([-.95+P*.92-.3+q*.2,1.03,W],[.024,.5,.025],t.dark,R)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,R),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,R);for(const P of[-.63,.63])r([-2.25,1.6,P],[.73,.16,.03],t.dark,R);a([-2.45,1.98,0],.15,.43,M,R),a([-2.45,2.21,0],.15,.05,t.dark,R),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,R),r([2.55,1.7,0],[.48,.26,.03],t.cream,R);for(const P of[-2.9,2.1])for(const W of[-.7,.7])c([P,.7,W],[P,1,W],.025,t.cream,R);for(const P of[-.7,.7])c([-2.9,1,P],[2.1,1,P],.025,t.cream,R);const D=s([5.9,1.1,3.4],v);l([0,0,0],.4,.04,t.copper,D,[0,0,0]);for(let P=0;P<4;P++){const W=P*Math.PI/2;c([0,0,0],[.4*Math.cos(W),.4*Math.sin(W),0],.025,t.copper,D)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,v),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,v);const O=r([5.9,.8,1.75],[.19,.55,.19],w,v);O.castShadow=!1;const G=s([0,.29,0],v);for(const P of[-2.9,2.9])r([.5,0,P],[13,.02,1.1],w,G);for(let P=0;P<3;P++)h(["КОРМА","ТРЮМ","НОС"][P],[-4+P*2,.7,2.15],1.55,.28,v,{size:45});h("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,v,{size:44}),h("ВЫХОД",[5.5,.8,-2.15],1.5,.35,v,{size:42});for(const P of[-6.6,6.6])c([P,.3,-3.8],[P,3.6,-3.8],.08,t.metal,v),r([P,3.6,-3.5],[.55,.16,.8],t.metal,v),r([P,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),v);for(let P=0;P<15;P++)r([-7.2-P*.72,-.03-P*.09,1.2],[.65,.14,1.12],t.cream,e);const N=s([-6.5,.5,3.3],v);c([0,0,0],[0,1.5,0],.045,t.copper,N),r([0,.1,0],[.32,.35,.08],t.metal,N),l([0,1.53,0],.1,.025,t.metal,N,[0,0,0]),f(R,[]),f(v,[...y,...S,b,R,D,O,G]);let B=null,X=((C=(ne=(he=window.__beznogimState)==null?void 0:he.mechanics)==null?void 0:ne.drydock)==null?void 0:C.public)||null,z,J="",k=0,ee=0,$=0;try{B=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function ue(P,W,q={}){const oe=Eh({mode:P,tool:W,args:q,state:B});B=oe.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(B))}catch{}return oe}ue("migrate");const fe=document.createElement("div");fe.id="drydock-controls",fe.hidden=!0,fe.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(fe);function ye(){return X&&p()?X:Eh({mode:"migrate",state:B}).public}function Re(P,W){g(),ue("action",P,W),J="",K(0),u()}fe.querySelectorAll("[data-dig]").forEach(P=>P.onclick=()=>Re("dig",{channel:Number(P.dataset.dig)})),fe.querySelector("#drydock-fill").onclick=()=>Re("pump",{direction:"fill"}),fe.querySelector("#drydock-drain").onclick=()=>Re("pump",{direction:"drain"}),fe.querySelector("#drydock-reset").onclick=()=>Re("reset");function te(P){z?(z.water!==P.water&&(k=2),z.floods!==P.floods&&(ee=3),!z.launched&&P.launched&&($=0)):$=P.launched?1:0,z=P,fe.querySelector("#drydock-readout").textContent=`каналы ${P.depths.join(" / ")} · вода ${P.water}/2 · переливы ${P.floods}`,fe.querySelectorAll("[data-dig]").forEach(W=>{W.disabled=P.launched||P.water>0||P.depths[Number(W.dataset.dig)]===2}),fe.querySelector("#drydock-fill").disabled=P.launched,fe.querySelector("#drydock-drain").disabled=P.launched||P.water===0,y.forEach((W,q)=>{const oe=1-P.depths[q]*.4;W.scale.y=oe,W.position.y=.48+oe/2,S[q].scale.setScalar(.45+P.depths[q]*.4)}),b.visible=P.water>0,b.position.y=.49+P.water*.39}function F(){const P=z||ye();return{action:X&&p()?"попробовать свой спуск":P.launched?"корабль в песок ↺":"спустить корабль",description:(X&&p()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+P.message}}function K(P){const W=ye(),q=JSON.stringify(W);q!==J&&(J=q,te(W),u()),k=Math.max(0,k-P),ee=Math.max(0,ee-P),O.visible=k>0&&W.water>0,G.visible=ee>0,D.rotation.z+=k>0?P*3:0,$=W.launched?Math.min(1,$+P/5):0;const oe=$*$*(3-2*$);R.position.x=-2+oe*5.6;const V=Math.min(...W.depths),Q=W.afloat?.94:1.15-V*.32;R.position.y=n.MathUtils.damp(R.position.y,Q,4,P),R.rotation.z=n.MathUtils.damp(R.rotation.z,W.afloat?0:(W.depths[2]-W.depths[0])*.085,4,P)}return window.addEventListener("beznogim:state",({detail:P})=>{var q,oe;const W=(oe=(q=P.mechanics)==null?void 0:q.drydock)==null?void 0:oe.public;W&&(X=W,J="")}),te(ye()),R.position.x=ye().launched?3.6:-2,{house:v,controls:fe,update:K,card:F,run:()=>Re(ye().launched?"reset":"launch"),inspect:()=>({source:X&&p()?"resident":"sandbox",...z,ship:R.position.toArray(),pitch:R.rotation.z,waterY:b.position.y,voyage:$,sandHeights:y.map(P=>P.scale.y),floodVisible:G.visible})}}function wh(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,h)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):h;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function zf({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:h,changed:f,watching:u,localPlay:p}){var fe,ye,Re;const g=s([0,0,0],e);g.name="mechanical-bench";const v=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],v,g),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const d=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let te=0;te<7;te++)for(let F=0;F<9;F++)M.push(r([.55+(F-4)*.145,1.5+(3-te)*.14,-.683],[.13,.12,.02],m,g));const w=s([-1.05,1.24,-.38],g);w.name="core-gear",a([0,0,0],.3,.11,t.copper,w).rotation.x=Math.PI/2;const y=[];for(let te=0;te<12;te++){const F=te/12*Math.PI*2;let K=r([Math.cos(F)*.33,Math.sin(F)*.33,0],[.13,.13,.12],t.copper,w);K.rotation.z=F,y.push(K)}l([0,0,.06],.13,.025,t.dark,w,[0,0,0]);const b=s([-.4,1.12,-.38],g);l([0,0,0],.19,.035,t.dark,b,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,b);const S=s([0,0,0],g);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const R=s([-1.5,1,-.05],g);c([0,0,0],[.23,0,0],.04,t.metal,R),c([.23,0,0],[.23,.23,0],.04,t.copper,R),o([.23,.23,0],.08,t.rust,R);const _=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,_),a([0,.281,0],.29,.015,t.dark,_),l([0,.29,0],.33,.025,t.copper,_),l([0,.36,0],.33,.025,t.metal,_,[0,Math.PI/2,0]),h("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const T=Array.from({length:3},(te,F)=>o([.17+F*.3,2.23,-.82],.06,t.mint,g));let A=null,D=((Re=(ye=(fe=window.__beznogimState)==null?void 0:fe.mechanics)==null?void 0:ye.bench)==null?void 0:Re.public)||null,O,G="",N=0;try{A=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function B(te,F,K={}){const he=wh({mode:te,tool:F,args:K,state:A});A=he.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(A))}catch{}return he}B("migrate");const X=document.createElement("div");X.id="bench-controls",X.hidden=!0,X.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(X);function z(){return D&&u()?D:wh({mode:"migrate",state:A}).public}function J(te,F){p(),B("action",te,F),G="",ue(0),f()}X.querySelectorAll("[data-part]").forEach(te=>te.onclick=()=>J("fit",{part:te.dataset.part,value:Number(te.dataset.value)})),X.querySelector("#bench-salvage").onclick=()=>J("salvage"),X.querySelector("#bench-restart").onclick=()=>J("restart");function k(te){O&&O.attempts!==te.attempts&&(N=3),O=te,X.querySelector("#bench-readout").textContent=`экран ${te.round+1}/3 · скорость ${te.speed} / нужно ${te.target}`,X.querySelectorAll("[data-part]").forEach(F=>{F.setAttribute("aria-pressed",String(te[F.dataset.part]===Number(F.dataset.value))),F.disabled=te.phase!=="ready"}),X.querySelector("#bench-salvage").disabled=!te.bucket,v.color.set(te.picture?"#16362c":"#e9e4cc"),v.emissive.set(te.picture?"#20382b":"#e9e4cc"),v.emissiveIntensity=te.picture?.1:.6,M.forEach((F,K)=>F.visible=!!te.picture&&d[te.picture-1][K]==="1"),y.forEach((F,K)=>F.visible=K<te.core*3),b.scale.setScalar(.75+te.belt*.25),S.visible=!te.bucket,T.forEach((F,K)=>F.visible=K<te.repairs)}const ee={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function $(){const te=O||z();return{action:D&&u()?"собрать свой монитор":te.phase==="ejected"?"достать ядро":te.phase==="repaired"?te.round===2?"закончить работу":"следующий экран":te.phase==="complete"?"ещё раз":"крутить рукоятку",description:(D&&u()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+ee[te.phase]}}function ue(te){const F=z(),K=JSON.stringify(F);K!==G&&(G=K,k(F),f()),N=Math.max(0,N-te);const he=Math.min(1,te*7),ne=F.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];w.position.lerp(new n.Vector3(...ne),he),w.rotation.x=n.MathUtils.lerp(w.rotation.x,F.bucket?-Math.PI/2:0,he);const C=N>0?F.core*2:F.picture?.4:0;w.rotation.z+=te*C,b.rotation.z-=te*C*F.belt,R.rotation.z+=te*C}return window.addEventListener("beznogim:state",({detail:te})=>{var K,he;const F=(he=(K=te.mechanics)==null?void 0:K.bench)==null?void 0:he.public;F&&(D=F,G="")}),k(z()),w.position.set(...z().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:X,update:ue,card:$,run:()=>{const te=z();J(te.phase==="ejected"?"salvage":te.phase==="repaired"?"next":te.phase==="complete"?"restart":"crank")},inspect:()=>({source:D&&u()?"resident":"sandbox",...O,corePosition:w.position.toArray(),coreAngle:w.rotation.z,driveAngle:b.rotation.z,litPixels:M.filter(te=>te.visible).length})}}const Th=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function Ah(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Rh(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):Ah();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,Ah(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const h=Th[e.round],f=h.weights.reduce((u,p,g)=>u+(e.loaded[g]?p+(e.pardoned?0:h.debt[g]):0),0);e.attempts++,f!==h.target?(e.status=f<h.target?"under":"over",i={ok:!1,reason:e.status,total:f,target:h.target}):(e.status=e.round===2?"complete":"delivered",h.weights.forEach((u,p)=>{e.loaded[p]&&e.delivered.push({id:`${e.run}:${e.round}:${p}`,weight:u})}),i={ok:!0,total:f,target:h.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Th[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,h)=>c+(e.loaded[h]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Bf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:h,batchStatic:f,changed:u,watching:p,localPlay:g}){var F,K,he;const v=s([0,-1.5,24]);v.name="amnesty-bureau";const m=i("#9d8560"),d=i("#a1b56f"),M=i("#f1d29a"),w=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],w,v),r([3.65,-.14,0],[3.3,.5,7],w,v),r([0,-.8,0],[4.2,.1,6.7],t.dark,v);for(const ne of[-4.9,4.9])c([ne,0,-3],[ne,3.3,-3],.06,t.copper,v);h("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,v,{size:31}),h("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,v,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,v);const y=s([0,.2,1.15],v);for(let ne=0;ne<11;ne++)r([-2+ne*.4,0,0],[.38,.16,1.65],m,y);for(const ne of[-.72,.72])c([-2.2,.22,ne],[2.2,.22,ne],.045,t.copper,y);a([0,-.22,1.15],.32,.6,t.metal,v);const b=s([-2.55,.32,1.15],v);r([0,.12,0],[1.5,.18,1.35],t.metal,b);for(const ne of[-.52,.52])for(const C of[-.58,.58]){const P=l([ne,0,C],.17,.05,t.dark,b,[0,0,0]);P.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],v);c([0,-.5,0],[0,.2,0],.1,t.metal,S);const R=s([0,0,0],S);c([0,0,0],[0,.8,0],.065,t.copper,R),o([0,.8,0],.14,t.rust,R),h("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,v,{size:35});const _=s([.1,.1,-2.3],v);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const T=a([0,.7,0],.57,1.1,t.copper,_);l([0,1.28,0],.25,.045,t.dark,_);const A=Array.from({length:3},(ne,C)=>o([1.75+C*.34,2.15,-3.05],.095,t.mint,v)),D=Array.from({length:3},(ne,C)=>{const P=s([-3.6,.72,-2.1+C*1.08],v),W=o([0,0,0],[.28,.23,.57],d,P);W.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,P);const q=s([.45,.28,0],P);return r([0,0,0],[.29,.57,.4],M,q),r([0,0,.21],[.18,.045,.012],t.rust,q),{g:P,tax:q}});h("A",[-4.35,.75,-2.1],.28,.28,v),h("B",[-4.35,.75,-1.02],.28,.28,v),h("C",[-4.35,.75,.06],.28,.28,v),r([3.55,.8,-1.7],[2.75,.13,2.2],m,v);const O=Array.from({length:6},(ne,C)=>o([2.75+C%3*.7,1,-2.1+Math.floor(C/3)*.83],[.2,.19,.38],d,v));h("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,v,{size:39});const G=s([0,0,0],e);for(let ne=0;ne<15;ne++){const C=ne/14;r([-.6+Math.sin(C*Math.PI)*1.5,-1.55,17+ne*.3],[.9,.12,.65],w,G)}for(let ne=0;ne<5;ne++)r([-.8-ne*.6,-1.55,21.5],[.75,.12,.75],w,G);h("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,G,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,G),f(G,[]),f(v,[y,b,S,_,...D.map(ne=>ne.g),...O,...A]),f(y,[]),f(b,[]);let N=null,B=((he=(K=(F=window.__beznogimState)==null?void 0:F.mechanics)==null?void 0:K.amnesty)==null?void 0:he.public)||null,X,z="",J=0;try{N=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function k(ne,C,P={}){const W=Rh({state:N,mode:ne,tool:C,args:P});N=W.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(N))}catch{}return W}k("migrate");const ee=document.createElement("div");ee.id="amnesty-controls",ee.hidden=!0,ee.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(ee);function $(){return B&&p()?B:Rh({state:N,mode:"migrate"}).public}function ue(ne,C){g(),k("action",ne,C),z="",te(0),u()}for(const ne of ee.querySelectorAll("[data-load]"))ne.onclick=()=>ue("load",{index:Number(ne.dataset.load)});ee.querySelector("#amnesty-pardon").onclick=()=>ue("amnesty"),ee.querySelector("#amnesty-restart").onclick=()=>ue("restart");const fe={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function ye(ne){X=ne;const C=ne.status==="delivered"||ne.status==="complete";ee.querySelector("#amnesty-readout").textContent=`рейс ${ne.round+1}/3 · груз ${ne.total} / нужно ${ne.target}`,ee.querySelectorAll("[data-load]").forEach((P,W)=>{P.textContent=`${["A","B","C"][W]} · ${ne.weights[W]}${ne.debt[W]?` + ${ne.debt[W]} бумага`:""}`,P.setAttribute("aria-pressed",String(ne.loaded[W])),P.disabled=C}),ee.querySelector("#amnesty-pardon").disabled=ne.pardoned||C,ee.querySelector("#amnesty-pardon").textContent=ne.pardoned?"налог отменён":"отменить налог",T.scale.y=ne.target/4,A.forEach((P,W)=>P.visible=W<(ne.status==="complete"?3:ne.round)),O.forEach((P,W)=>P.visible=W<ne.delivered.length),D.forEach((P,W)=>{P.tax.visible=!ne.pardoned||J<.99,P.g.visible=!C||!ne.loaded[W],P.g.scale.setScalar(.8+ne.weights[W]*.08)})}function Re(){const ne=X||$();return{action:B&&p()?"войти в свою амнистию":ne.status==="delivered"?"следующий рейс":ne.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(B&&p()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+fe[ne.status]}}function te(ne,C){const P=$(),W=JSON.stringify(P);W!==z&&(z=W,ye(P),u());const q=P.status==="delivered"||P.status==="complete",oe=(V,Q)=>n.MathUtils.lerp(V,Q,Math.min(1,ne*5));y.rotation.z=oe(y.rotation.z,P.tilt),b.position.x=oe(b.position.x,q?3:-2.55),R.rotation.z=oe(R.rotation.z,P.pardoned?-.65:0),J=oe(J,P.pardoned?1:0),D.forEach(V=>{V.tax.position.y=.28+J*2.5,V.tax.rotation.z=J*.8,V.tax.visible=!P.pardoned||J<.99}),O.forEach((V,Q)=>V.visible=Q<P.delivered.length-(q&&b.position.x<2.9?2:0)),D.forEach((V,Q)=>{const de=P.loaded[Q];V.g.visible=!q||!de||b.position.x<2.9,V.g.position.x=oe(V.g.position.x,de?b.position.x+(Q-1)*.42:-3.6),V.g.position.y=oe(V.g.position.y,de?.86:.72),V.g.position.z=oe(V.g.position.z,de?1.15:-2.1+Q*1.08)})}return window.addEventListener("beznogim:state",({detail:ne})=>{var P,W;const C=(W=(P=ne.mechanics)==null?void 0:P.amnesty)==null?void 0:W.public;C&&(B=C,z="")}),J=$().pardoned?1:0,ye($()),{house:v,controls:ee,update:te,card:Re,run:()=>ue(X.status==="delivered"?"next":X.status==="complete"?"restart":"dispatch"),inspect:()=>({source:B&&p()?"resident":"sandbox",...X,bridgeTilt:y.rotation.z,cartX:b.position.x,cargoPositions:D.map(ne=>ne.g.position.toArray()),taxVisible:D.map(ne=>ne.tax.visible),paperY:D.map(ne=>ne.tax.position.y),handleAngle:R.rotation.z,deliveredVisible:O.filter(ne=>ne.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="186",xi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,Hl=1,Hu=2,Is=1,Wu=2,Ps=3,Gi=0,dn=1,Pn=2,li=0,Ns=1,Wl=2,Xl=3,ql=4,Xu=5,ns=100,qu=101,Yu=102,Zu=103,$u=104,Ju=200,Ku=201,Qu=202,ju=203,uc=204,dc=205,ed=206,td=207,nd=208,id=209,sd=210,rd=211,od=212,ad=213,ld=214,Lo=0,Do=1,Io=2,zs=3,No=4,Uo=5,Fo=6,Oo=7,fc=0,cd=1,hd=2,Yn=0,pc=1,mc=2,gc=3,wa=4,_c=5,vc=6,xc=7,yc=300,Vi=301,as=302,Eo=303,wo=304,Nr=306,Sr=1e3,oi=1001,zo=1002,Zt=1003,ud=1004,hr=1005,Jt=1006,To=1007,Ui=1008,gn=1009,Mc=1010,Sc=1011,Bs=1012,Ta=1013,Jn=1014,In=1015,Kn=1016,Aa=1017,Ra=1018,ks=1020,bc=35902,Ec=35899,wc=1021,Tc=1022,Nn=1023,hi=1026,Fi=1027,Ca=1028,Pa=1029,Hi=1030,La=1031,Da=1033,pr=33776,mr=33777,gr=33778,_r=33779,Bo=35840,ko=35841,Go=35842,Vo=35843,Ho=36196,Wo=37492,Xo=37496,qo=37488,Yo=37489,br=37490,Zo=37491,$o=37808,Jo=37809,Ko=37810,Qo=37811,jo=37812,ea=37813,ta=37814,na=37815,ia=37816,sa=37817,ra=37818,oa=37819,aa=37820,la=37821,ca=36492,ha=36494,ua=36495,da=36283,fa=36284,Er=36285,pa=36286,dd=3200,ma=0,fd=1,gi="",rn="srgb",wr="srgb-linear",Tr="linear",vt="srgb",Ao=7680,pd=519,md=512,gd=513,_d=514,Ia=515,vd=516,xd=517,Na=518,yd=519,Md=35044,Yl="300 es",qn=2e3,Gs=2001;function kf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sd(){const n=ga("canvas");return n.style.display="block",n}const Ch={};function Zl(...n){const e="THREE."+n.shift();console.log(e,...n)}function bd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=bd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=bd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rs(...n){const e=n.join(" ");e in Ch||(Ch[e]=!0,je(...n))}function Gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Vf={[Lo]:Do,[Io]:Fo,[No]:Oo,[zs]:Uo,[Do]:Lo,[Fo]:Io,[Oo]:No,[Uo]:zs};class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const vr=Math.PI/180,Ar=180/Math.PI;function cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ac(n,e){return(n%e+e)%e}function Hf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Wf(n,e,t){return n!==e?(t-n)/(e-n):0}function xr(n,e,t){return(1-t)*n+t*e}function Xf(n,e,t,i){return xr(n,e,1-Math.exp(-t*i))}function qf(n,e=1){return e-Math.abs(Ac(n,e*2)-e)}function Yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Zf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $f(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jf(n,e){return n+Math.random()*(e-n)}function Kf(n){return n*(.5-Math.random())}function Qf(n){n!==void 0&&(Ph=n);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(n){return n*vr}function ep(n){return n*Ar}function tp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function np(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mn={DEG2RAD:vr,RAD2DEG:Ar,generateUUID:cs,clamp:rt,euclideanModulo:Ac,mapLinear:Hf,inverseLerp:Wf,lerp:xr,damp:Xf,pingpong:qf,smoothstep:Yf,smootherstep:Zf,randInt:$f,randFloat:Jf,randFloatSpread:Kf,seededRandom:Qf,degToRad:jf,radToDeg:ep,isPowerOfTwo:tp,ceilPowerOfTwo:np,floorPowerOfTwo:ip,setQuaternionFromProperEuler:sp,normalize:ln,denormalize:Cs},lh=class lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let Se=lh;class bi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+f*v;m<0&&(u=-u,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,c=c*d+u*a,l=l*d+p*a,h=h*d+g*a,f=f*d+v*a}else{c=c*d+u*a,l=l*d+p*a,h=h*d+g*a,f=f*d+v*a;const M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*p-l*u,e[t+1]=c*g+h*u+l*f-a*p,e[t+2]=l*g+h*p+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ch=class ch{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;let I=ch;const ol=new I,Lh=new bi,hh=class hh{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],M=s[1],w=s[4],y=s[7],b=s[2],S=s[5],R=s[8];return r[0]=o*v+a*M+c*b,r[3]=o*m+a*w+c*S,r[6]=o*d+a*y+c*R,r[1]=l*v+h*M+f*b,r[4]=l*m+h*w+f*S,r[7]=l*d+h*y+f*R,r[2]=u*v+p*M+g*b,r[5]=u*m+p*w+g*S,r[8]=u*d+p*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=t*f+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*l-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let et=hh;const al=new et,Dh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Tr,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const lt=rp();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ms;class Ed{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=ga("canvas")),ms.width=e.width,ms.height=e.height;const s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let op=0;class Ua{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ll(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let ap=0;const cl=new I;class Qt extends wi{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=oi,s=oi,r=Jt,o=Ui,a=Nn,c=gn,l=Qt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=cs(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=yc;Qt.DEFAULT_ANISOTROPY=1;const uh=class uh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,y=(p+1)/2,b=(d+1)/2,S=(h+u)/4,R=(f+v)/4,_=(g+m)/4;return w>y&&w>b?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=R/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;let It=uh;class wd extends wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Qt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ua(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends wd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rc extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ba=class ba{constructor(e,t,i,s,r,o,a,c,l,h,f,u,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,f,u,p,g,v,m)}set(e,t,i,s,r,o,a,c,l,h,f,u,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,p=o*f,g=a*h,v=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,g=l*h,v=l*f;t[0]=u+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,g=l*h,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,g=a*h,v=a*f;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+g,t[10]=u-v*f}else if(e.order==="XZY"){const u=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,cp)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Pi.crossVectors(i,Mn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Pi.crossVectors(i,Mn)),Pi.normalize(),Yr.crossVectors(Mn,Pi),s[0]=Pi.x,s[4]=Yr.x,s[8]=Mn.x,s[1]=Pi.y,s[5]=Yr.y,s[9]=Mn.y,s[2]=Pi.z,s[6]=Yr.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],M=i[3],w=i[7],y=i[11],b=i[15],S=s[0],R=s[4],_=s[8],T=s[12],A=s[1],D=s[5],O=s[9],G=s[13],N=s[2],B=s[6],X=s[10],z=s[14],J=s[3],k=s[7],ee=s[11],$=s[15];return r[0]=o*S+a*A+c*N+l*J,r[4]=o*R+a*D+c*B+l*k,r[8]=o*_+a*O+c*X+l*ee,r[12]=o*T+a*G+c*z+l*$,r[1]=h*S+f*A+u*N+p*J,r[5]=h*R+f*D+u*B+p*k,r[9]=h*_+f*O+u*X+p*ee,r[13]=h*T+f*G+u*z+p*$,r[2]=g*S+v*A+m*N+d*J,r[6]=g*R+v*D+m*B+d*k,r[10]=g*_+v*O+m*X+d*ee,r[14]=g*T+v*G+m*z+d*$,r[3]=M*S+w*A+y*N+b*J,r[7]=M*R+w*D+y*B+b*k,r[11]=M*_+w*O+y*X+b*ee,r[15]=M*T+w*G+y*z+b*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],M=c*p-l*u,w=a*p-l*f,y=a*u-c*f,b=o*p-l*h,S=o*u-c*h,R=o*f-a*h;return t*(v*M-m*w+d*y)-i*(g*M-m*b+d*S)+s*(g*w-v*b+d*R)-r*(g*y-v*S+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],M=t*a-i*o,w=t*c-s*o,y=t*l-r*o,b=i*c-s*a,S=i*l-r*a,R=s*l-r*c,_=h*v-f*g,T=h*m-u*g,A=h*d-p*g,D=f*m-u*v,O=f*d-p*v,G=u*d-p*m,N=M*G-w*O+y*D+b*A-S*T+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=(a*G-c*O+l*D)*B,e[1]=(s*O-i*G-r*D)*B,e[2]=(v*R-m*S+d*b)*B,e[3]=(u*S-f*R-p*b)*B,e[4]=(c*A-o*G-l*T)*B,e[5]=(t*G-s*A+r*T)*B,e[6]=(m*y-g*R-d*w)*B,e[7]=(h*R-u*y+p*w)*B,e[8]=(o*O-a*A+l*_)*B,e[9]=(i*A-t*O-r*_)*B,e[10]=(g*S-v*y+d*M)*B,e[11]=(f*y-h*S-p*M)*B,e[12]=(a*T-o*D-c*_)*B,e[13]=(t*D-i*T+s*_)*B,e[14]=(v*w-g*b-m*M)*B,e[15]=(h*b-f*w+u*M)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,p=r*h,g=r*f,v=o*h,m=o*f,d=a*f,M=c*l,w=c*h,y=c*f,b=i.x,S=i.y,R=i.z;return s[0]=(1-(v+d))*b,s[1]=(p+y)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(u+d))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=gs.set(s[0],s[1],s[2]).length();const a=gs.set(s[4],s[5],s[6]).length(),c=gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);const l=1/o,h=1/a,f=1/c;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=qn,c=!1){const l=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Gs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===qn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Gs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ba.prototype.isMatrix4=!0;let ft=ba;const gs=new I,Gn=new ft,lp=new I(0,0,0),cp=new I(1,1,1),Pi=new I,Yr=new I,Mn=new I,Nh=new ft,Uh=new bi;class Ei{constructor(e=0,t=0,i=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const Fh=new I,_s=new bi,ui=new ft,Zr=new I,js=new I,up=new I,dp=new bi,Oh=new I(1,0,0),zh=new I(0,1,0),Bh=new I(0,0,1),kh={type:"added"},fp={type:"removed"},vs={type:"childadded",child:null},hl={type:"childremoved",child:null};class zt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new I,t=new Ei,i=new bi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new et}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(js,Zr,this.up):ui.lookAt(Zr,js,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ui),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kh),vs.child=e,this.dispatchEvent(vs),vs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zt.DEFAULT_UP=new I(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oi extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Ac(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return lt.workingToColorSpace(sn.copy(this),e),Math.round(rt(sn.r*255,0,255))*65536+Math.round(rt(sn.g*255,0,255))*256+Math.round(rt(sn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=rn){lt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL($r);const i=xr(Li.h,$r.h,t),s=xr(Li.s,$r.s,t),r=xr(Li.l,$r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new ot;ot.NAMES=Ad;class Oa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rd extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vn=new I,di=new I,dl=new I,fi=new I,xs=new I,ys=new I,Gh=new I,fl=new I,pl=new I,ml=new I,gl=new It,_l=new It,vl=new It;class Ln{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),di.subVectors(i,t),dl.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(di),c=Vn.dot(dl),l=di.dot(di),h=di.dot(dl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,i),vl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(gl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),di.subVectors(e,t),Vn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,i),ys.subVectors(r,i),fl.subVectors(e,i);const c=xs.dot(fl),l=ys.dot(fl);if(c<=0&&l<=0)return t.copy(i);pl.subVectors(e,s);const h=xs.dot(pl),f=ys.dot(pl);if(h>=0&&f<=h)return t.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(xs,o);ml.subVectors(e,r);const p=xs.dot(ml),g=ys.dot(ml);if(g>=0&&p<=g)return t.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ys,a);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Gh.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(Gh,a);const d=1/(m+v+u);return o=v*d,a=u*d,t.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Kr.subVectors(this.max,er),Ms.subVectors(e.a,er),Ss.subVectors(e.b,er),bs.subVectors(e.c,er),Di.subVectors(Ss,Ms),Ii.subVectors(bs,Ss),Ji.subVectors(Ms,bs);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!xl(t,Ms,Ss,bs,Kr)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Ms,Ss,bs,Kr))?!1:(Qr.crossVectors(Di,Ii),t=[Qr.x,Qr.y,Qr.z],xl(t,Ms,Ss,bs,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new I,new I,new I,new I,new I,new I,new I,new I],Hn=new I,Jr=new qi,Ms=new I,Ss=new I,bs=new I,Di=new I,Ii=new I,Ji=new I,er=new I,Kr=new I,Qr=new I,Ki=new I;function xl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),h=i.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Gt=new I,jr=new Se;let mp=0;class Fn extends wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Md,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Cc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pc extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const gp=new qi,tr=new I,yl=new I;class Yi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(yl)),this.expandByPoint(tr.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _p=0;const An=new ft,Ml=new zt,Es=new I,Sn=new qi,nr=new qi,Yt=new I;class Bt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Pc:Cc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Sn.min,nr.min),Sn.expandByPoint(Yt),Yt.addVectors(Sn.max,nr.max),Sn.expandByPoint(Yt)):(Sn.expandByPoint(nr.min),Sn.expandByPoint(nr.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(e,l),Yt.add(Es)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new I,c[_]=new I;const l=new I,h=new I,f=new I,u=new Se,p=new Se,g=new Se,v=new I,m=new I;function d(_,T,A){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,A),u.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,A),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[_].add(v),a[T].add(v),a[A].add(v),c[_].add(m),c[T].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){const A=M[_],D=A.start,O=A.count;for(let G=D,N=D+O;G<N;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new I,y=new I,b=new I,S=new I;function R(_){b.fromBufferAttribute(s,_),S.copy(b);const T=a[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(S,T);const D=y.dot(c[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,T=M.length;_<T;++_){const A=M[_],D=A.start,O=A.count;for(let G=D,N=D+O;G<N;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,f=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let d=0;d<h;d++)u[g++]=l[p++]}return new Fn(u,h,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new I,vp=new I,xp=new et;class ri{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sl.subVectors(i,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xp.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yp=0;class Zi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Ns,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new I,bl=new I,eo=new I,to=new I;class qs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bl.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),to.copy(this.origin).sub(bl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=to.dot(this.direction),c=-to.dot(eo),l=to.lengthSq(),h=Math.abs(1-o*o);let f,u,p,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bl).addScaledVector(eo,u),p}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,p=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,d=i.x-o.x,M=i.y-o.y,w=i.z-o.z,y=Math.abs(c),b=Math.abs(l),S=Math.abs(h);let R,_,T,A,D,O,G,N,B,X,z,J;if(y>=b&&y>=S?(T=c,O=f,B=g,J=d,c>=0?(R=l,_=h,A=u,D=p,G=v,N=m,X=M,z=w):(R=h,_=l,A=p,D=u,G=m,N=v,X=w,z=M)):b>=S?(T=l,O=u,B=v,J=M,l>=0?(R=h,_=c,A=p,D=f,G=m,N=g,X=w,z=d):(R=c,_=h,A=f,D=p,G=g,N=m,X=d,z=w)):(T=h,O=p,B=m,J=w,h>=0?(R=c,_=l,A=f,D=u,G=g,N=v,X=d,z=M):(R=l,_=c,A=u,D=f,G=v,N=g,X=M,z=d)),T===0)return null;const k=R/T,ee=_/T,$=1/T,ue=A-k*O,fe=D-ee*O,ye=G-k*B,Re=N-ee*B,te=X-k*J,F=z-ee*J,K=te*Re-F*ye,he=ue*F-fe*te,ne=ye*fe-Re*ue;if(s){if(K<0||he<0||ne<0)return null}else if((K<0||he<0||ne<0)&&(K>0||he>0||ne>0))return null;const C=K+he+ne;if(C===0)return null;const P=$*(K*O+he*B+ne*J);return(C>0?P<0:P>0)?null:this.at(P/C,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ur extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vh=new ft,Qi=new qs,no=new Yi,Hh=new I,io=new I,so=new I,ro=new I,El=new I,oo=new I,Wh=new I,ao=new I;class fn extends zt{constructor(e=new Bt,t=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(El.fromBufferAttribute(f,e),o?oo.addScaledVector(El,h):oo.addScaledVector(El.sub(t),h))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(no.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(no,Hh)===null||Qi.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,b=w;y<b;y+=3){const S=a.getX(y),R=a.getX(y+1),_=a.getX(y+2);s=lo(this,d,e,i,l,h,f,S,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=lo(this,o,e,i,l,h,f,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,b=w;y<b;y+=3){const S=y,R=y+1,_=y+2;s=lo(this,d,e,i,l,h,f,S,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const M=m,w=m+1,y=m+2;s=lo(this,o,e,i,l,h,f,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Mp(n,e,t,i,s,r,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Gi,a),c===null)return null;ao.copy(a),ao.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ao);return l<t.near||l>t.far?null:{distance:l,point:ao.clone(),object:n}}function lo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,io),n.getVertexPosition(c,so),n.getVertexPosition(l,ro);const h=Mp(n,e,t,i,io,so,ro,Wh);if(h){const f=new I;Ln.getBarycoord(Wh,io,so,ro,f),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,c,l,f,new Se)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,c,l,f,new Se)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,c,l,f,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};Ln.getNormal(io,so,ro,u.normal),h.face=u,h.barycoord=f}return h}class Lc extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Zt,h=Zt,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new ft,Xh=new ft,co=[],qh=new qi,Sp=new ft,ir=new fn,sr=new Yi;class Jl extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),qh.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(qh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),sr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(i),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Xh.multiplyMatrices(i,ws),ir.matrixWorld=Xh,ir.raycast(e,co);for(let o=0,a=co.length;o<a;o++){const c=co[o];c.instanceId=r,c.object=this,t.push(c)}co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lc(new Float32Array(s*this.count),s,this.count,Ca,In));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ji=new Yi,bp=new Se(.5,.5),ho=new I;class za{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],M=r[12],w=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-o,p-h,d-g,b-M).normalize(),s[1].setComponents(l+o,p+h,d+g,b+M).normalize(),s[2].setComponents(l+a,p+f,d+v,b+w).normalize(),s[3].setComponents(l-a,p-f,d-v,b-w).normalize(),i)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,p-u,d-m,b-y).normalize();else if(s[4].setComponents(l-c,p-u,d-m,b-y).normalize(),t===qn)s[5].setComponents(l+c,p+u,d+m,b+y).normalize();else if(t===Gs)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=bp.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dc extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new I,va=new I,Yh=new ft,rr=new qs,uo=new Yi,wl=new I,Zh=new I;class Ep extends zt{constructor(e=new Bt,t=new Dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_a.fromBufferAttribute(t,s-1),va.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_a.distanceTo(va);e.setAttribute("lineDistance",new pt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;Yh.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const d=h.getX(v),M=h.getX(v+1),w=fo(this,e,rr,c,d,M,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),d=fo(this,e,rr,c,v,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){const d=fo(this,e,rr,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=fo(this,e,rr,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),t.distanceSqToSegment(_a,va,wl,Zh)>i)return;wl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(wl);if(!(l<e.near||l>e.far))return{distance:l,point:Zh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Ic extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $h=new ft,Kl=new qs,po=new Yi,mo=new I;class Cd extends zt{constructor(e=new Bt,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;$h.copy(s).invert(),Kl.copy(e.ray).applyMatrix4($h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,v=p;g<v;g++){const m=l.getX(g);mo.fromBufferAttribute(f,m),Jh(mo,m,c,s,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,v=p;g<v;g++)mo.fromBufferAttribute(f,g),Jh(mo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jh(n,e,t,i,s,r,o){const a=Kl.distanceSqToPoint(n);if(a<t){const c=new I;Kl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nc extends Qt{constructor(e=[],t=Vi,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uc extends Qt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends Qt{constructor(e,t,i=Jn,s,r,o,a=Zt,c=Zt,l,h=hi,f=1){if(h!==hi&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Pd extends Vs{constructor(e,t=Jn,i=Vi,s,r,o=Zt,a=Zt,c,l=hi){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fc extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ti extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function g(v,m,d,M,w,y,b,S,R,_,T){const A=y/R,D=b/_,O=y/2,G=b/2,N=S/2,B=R+1,X=_+1;let z=0,J=0;const k=new I;for(let ee=0;ee<X;ee++){const $=ee*D-G;for(let ue=0;ue<B;ue++){const fe=ue*A-O;k[v]=fe*M,k[m]=$*w,k[d]=N,l.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[d]=S>0?1:-1,h.push(k.x,k.y,k.z),f.push(ue/R),f.push(1-ee/_),z+=1}}for(let ee=0;ee<_;ee++)for(let $=0;$<R;$++){const ue=u+$+B*ee,fe=u+$+B*(ee+1),ye=u+($+1)+B*(ee+1),Re=u+($+1)+B*ee;c.push(ue,fe,Re),c.push(fe,ye,Re),J+=6}a.addGroup(p,J,T),p+=J,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ba extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,h=new Se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fr extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],p=[];let g=0;const v=[],m=i/2;let d=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function M(){const y=new I,b=new I;let S=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const T=[],A=_/r,D=A*(t-e)+e;for(let O=0;O<=s;O++){const G=O/s,N=G*c+a,B=Math.sin(N),X=Math.cos(N);b.x=D*B,b.y=-A*i+m,b.z=D*X,f.push(b.x,b.y,b.z),y.set(B,R,X).normalize(),u.push(y.x,y.y,y.z),p.push(G,1-A),T.push(g++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){const A=v[T][_],D=v[T+1][_],O=v[T+1][_+1],G=v[T][_+1];(e>0||T!==0)&&(h.push(A,D,G),S+=3),(t>0||T!==r-1)&&(h.push(D,O,G),S+=3)}l.addGroup(d,S,0),d+=S}function w(y){const b=g,S=new Se,R=new I;let _=0;const T=y===!0?e:t,A=y===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const N=O/s*c+a,B=Math.cos(N),X=Math.sin(N);R.x=T*X,R.y=m*A,R.z=T*B,f.push(R.x,R.y,R.z),u.push(0,A,0),S.x=B*.5+.5,S.y=X*.5*A+.5,p.push(S.x,S.y),g++}for(let O=0;O<s;O++){const G=b+O,N=D+O;y===!0?h.push(N,N+1,G):h.push(N+1,N,G),_+=3}l.addGroup(d,_,y===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends Fr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ka extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new I,y=new I,b=new I;for(let S=0;S<t.length;S+=3)p(t[S+0],w),p(t[S+1],y),p(t[S+2],b),c(w,y,b,M)}function c(M,w,y,b){const S=b+1,R=[];for(let _=0;_<=S;_++){R[_]=[];const T=M.clone().lerp(y,_/S),A=w.clone().lerp(y,_/S),D=S-_;for(let O=0;O<=D;O++)O===0&&_===S?R[_][O]=T:R[_][O]=T.clone().lerp(A,O/D)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){const A=Math.floor(T/2);T%2===0?(u(R[_][A+1]),u(R[_+1][A]),u(R[_][A])):(u(R[_][A+1]),u(R[_+1][A+1]),u(R[_+1][A]))}}function l(M){const w=new I;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const M=new I;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const y=m(M)/2/Math.PI+.5,b=d(M)/Math.PI+.5;o.push(y,1-b)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const w=o[M+0],y=o[M+2],b=o[M+4],S=Math.max(w,y,b),R=Math.min(w,y,b);S>.9&&R<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function p(M,w){const y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const M=new I,w=new I,y=new I,b=new I,S=new Se,R=new Se,_=new Se;for(let T=0,A=0;T<r.length;T+=9,A+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),S.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),b.copy(M).add(w).add(y).divideScalar(3);const D=m(b);v(S,A+0,M,D),v(R,A+2,w,D),v(_,A+4,y,D)}}function v(M,w,y,b){b<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.vertices,e.indices,e.radius,e.detail)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Se:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,s=[],r=[],o=[],a=new I,c=new ft;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(rt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ga extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Se){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*f+this.aX,l=u*f+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ld extends Ga{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,p*=h,s(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Kh=new I,Qh=new I,Tl=new Oc,Al=new Oc,Rl=new Oc;class zc extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qh.subVectors(s[0],s[1]).add(s[0]),l=Qh);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Kh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kh),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Tl.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,m),Al.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,m),Rl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Al.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Rl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(Tl.calc(c),Al.calc(c),Rl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function wp(n,e){const t=1-n;return t*t*e}function Tp(n,e){return 2*(1-n)*n*e}function Ap(n,e){return n*n*e}function yr(n,e,t,i){return wp(n,e)+Tp(n,t)+Ap(n,i)}function Rp(n,e){const t=1-n;return t*t*t*e}function Cp(n,e){const t=1-n;return 3*t*t*n*e}function Pp(n,e){return 3*(1-n)*n*n*e}function Lp(n,e){return n*n*n*e}function Mr(n,e,t,i,s){return Rp(n,e)+Cp(n,t)+Pp(n,i)+Lp(n,s)}class Bc extends Qn{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dd extends Qn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mr(e,s.x,r.x,o.x,a.x),Mr(e,s.y,r.y,o.y,a.y),Mr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kc extends Qn{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends Qn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends Qn{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vc extends Qn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y),yr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hc extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(jh(a,c.x,l.x,h.x,f.x),jh(a,c.y,l.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Se().fromArray(s))}return this}}var xa=Object.freeze({__proto__:null,ArcCurve:Ld,CatmullRomCurve3:zc,CubicBezierCurve:Bc,CubicBezierCurve3:Dd,EllipseCurve:Ga,LineCurve:kc,LineCurve3:Id,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:Vc,SplineCurve:Hc});class Nd extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new xa[s.type]().fromJSON(s))}return this}}class Ql extends Nd{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new kc(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Gc(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Bc(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Hc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Ga(e,t,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Or extends Ql{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ql().fromJSON(s))}return this}}function Dp(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ud(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Op(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<s;u+=t){const p=n[u],g=n[u+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Rr(r,o,t,a,c,l,0),o}function Ud(n,e,t,i,s){let r;if(s===Zp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=eu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=eu(o/i|0,n[o],n[o+1],r);return r&&Hs(r,r.next)&&(Pr(r),r=r.next),r}function ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Hs(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Vp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Np(n,i,s,r):Ip(n)){e.push(c.i,n.i,l.i),Pr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Up(ls(n),e),Rr(n,e,t,i,s,r,2)):o===2&&Fp(n,e,t,i,s,r):Rr(ls(n),e,t,i,s,r,1);break}}}function Ip(n){const e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),f=Math.min(a,c,l),u=Math.max(s,r,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&ur(s,a,r,c,o,l,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Np(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Nt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,p=Math.min(a,c,l),g=Math.min(h,f,u),v=Math.max(a,c,l),m=Math.max(h,f,u),d=jl(p,g,e,t,i),M=jl(v,m,e,t,i);let w=n.prevZ,y=n.nextZ;for(;w&&w.z>=d&&y&&y.z<=M;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ur(a,h,c,f,l,u,w.x,w.y)&&Nt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ur(a,h,c,f,l,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=d;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ur(a,h,c,f,l,u,w.x,w.y)&&Nt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ur(a,h,c,f,l,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Up(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Hs(i,s)&&Od(i,t,t.next,s)&&Cr(i,s)&&Cr(s,i)&&(e.push(i.i,t.i,s.i),Pr(t),Pr(t.next),t=n=s),t=t.next}while(t!==n);return ls(t)}function Fp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xp(o,a)){let c=zd(o,a);o=ls(o,o.next),c=ls(c,c.next),Rr(o,e,t,i,s,r,0),Rr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Op(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Ud(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Wp(l))}s.sort(zp);for(let r=0;r<s.length;r++)t=Bp(s[r],t);return t}function zp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Bp(n,e){const t=kp(n,e);if(!t)return e;const i=zd(t,n);return ls(i,i.next),ls(t,t.next)}function kp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Hs(n,t))return t;do{if(Hs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Fd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);Cr(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Gp(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Gp(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function Vp(n,e,t,i){let s=n;do s.z===0&&(s.z=jl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hp(s)}function Hp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function jl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ur(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Fd(n,e,t,i,s,r,o,a)}function Xp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qp(n,e)&&(Cr(n,e)&&Cr(e,n)&&Yp(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||Hs(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Hs(n,e){return n.x===e.x&&n.y===e.y}function Od(n,e,t,i){const s=_o(Nt(n,e,t)),r=_o(Nt(n,e,i)),o=_o(Nt(t,i,n)),a=_o(Nt(t,i,e));return!!(s!==r&&o!==a||s===0&&go(n,t,e)||r===0&&go(n,i,e)||o===0&&go(t,n,i)||a===0&&go(t,e,i))}function go(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _o(n){return n>0?1:n<0?-1:0}function qp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cr(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function Yp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zd(n,e){const t=ec(n.i,n.x,n.y),i=ec(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function eu(n,e,t,i){const s=ec(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ec(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class $p{static triangulate(e,t,i=2){return Dp(e,t,i)}}class ss{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ss.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];tu(e),nu(i,e);let o=e.length;t.forEach(tu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,nu(i,t[c]);const a=$p.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function tu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ys extends Bt{constructor(e=new Or([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Jp;let w,y=!1,b,S,R,_;if(d){w=d.getSpacedPoints(h),y=!0,u=!1;const q=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(h,q),S=new I,R=new I,_=new I}u||(m=0,p=0,g=0,v=0);const T=a.extractPoints(l);let A=T.shape;const D=T.holes;if(!ss.isClockWise(A)){A=A.reverse();for(let q=0,oe=D.length;q<oe;q++){const V=D[q];ss.isClockWise(V)&&(D[q]=V.reverse())}}function G(q){const V=10000000000000001e-36;let Q=q[0];for(let de=1;de<=q.length;de++){const H=de%q.length,ae=q[H],xe=ae.x-Q.x,be=ae.y-Q.y,U=xe*xe+be*be,ze=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(Q.x),Math.abs(Q.y)),we=V*ze*ze;if(U<=we){q.splice(H,1),de--;continue}Q=ae}}G(A),D.forEach(G);const N=D.length,B=A;for(let q=0;q<N;q++){const oe=D[q];A=A.concat(oe)}function X(q,oe,V){return oe||ct("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(oe,V)}const z=A.length;function J(q,oe,V){let Q,de,H;const ae=q.x-oe.x,xe=q.y-oe.y,be=V.x-q.x,U=V.y-q.y,ze=ae*ae+xe*xe,we=ae*U-xe*be;if(Math.abs(we)>Number.EPSILON){const L=Math.sqrt(ze),x=Math.sqrt(be*be+U*U),j=oe.x-xe/L,ie=oe.y+ae/L,le=V.x-U/x,Me=V.y+be/x,Ae=((le-j)*U-(Me-ie)*be)/(ae*U-xe*be);Q=j+ae*Ae-q.x,de=ie+xe*Ae-q.y;const pe=Q*Q+de*de;if(pe<=2)return new Se(Q,de);H=Math.sqrt(pe/2)}else{let L=!1;ae>Number.EPSILON?be>Number.EPSILON&&(L=!0):ae<-Number.EPSILON?be<-Number.EPSILON&&(L=!0):Math.sign(xe)===Math.sign(U)&&(L=!0),L?(Q=-xe,de=ae,H=Math.sqrt(ze)):(Q=ae,de=xe,H=Math.sqrt(ze/2))}return new Se(Q/H,de/H)}const k=[];for(let q=0,oe=B.length,V=oe-1,Q=q+1;q<oe;q++,V++,Q++)V===oe&&(V=0),Q===oe&&(Q=0),k[q]=J(B[q],B[V],B[Q]);const ee=[];let $,ue=k.concat();for(let q=0,oe=N;q<oe;q++){const V=D[q];$=[];for(let Q=0,de=V.length,H=de-1,ae=Q+1;Q<de;Q++,H++,ae++)H===de&&(H=0),ae===de&&(ae=0),$[Q]=J(V[Q],V[H],V[ae]);ee.push($),ue=ue.concat($)}let fe;if(m===0)fe=ss.triangulateShape(B,D);else{const q=[],oe=[];for(let V=0;V<m;V++){const Q=V/m,de=p*Math.cos(Q*Math.PI/2),H=g*Math.sin(Q*Math.PI/2)+v;for(let ae=0,xe=B.length;ae<xe;ae++){const be=X(B[ae],k[ae],H);he(be.x,be.y,-de),Q===0&&q.push(be)}for(let ae=0,xe=N;ae<xe;ae++){const be=D[ae];$=ee[ae];const U=[];for(let ze=0,we=be.length;ze<we;ze++){const L=X(be[ze],$[ze],H);he(L.x,L.y,-de),Q===0&&U.push(L)}Q===0&&oe.push(U)}}fe=ss.triangulateShape(q,oe)}const ye=fe.length,Re=g+v;for(let q=0;q<z;q++){const oe=u?X(A[q],ue[q],Re):A[q];y?(R.copy(b.normals[0]).multiplyScalar(oe.x),S.copy(b.binormals[0]).multiplyScalar(oe.y),_.copy(w[0]).add(R).add(S),he(_.x,_.y,_.z)):he(oe.x,oe.y,0)}for(let q=1;q<=h;q++)for(let oe=0;oe<z;oe++){const V=u?X(A[oe],ue[oe],Re):A[oe];y?(R.copy(b.normals[q]).multiplyScalar(V.x),S.copy(b.binormals[q]).multiplyScalar(V.y),_.copy(w[q]).add(R).add(S),he(_.x,_.y,_.z)):he(V.x,V.y,f/h*q)}for(let q=m-1;q>=0;q--){const oe=q/m,V=p*Math.cos(oe*Math.PI/2),Q=g*Math.sin(oe*Math.PI/2)+v;for(let de=0,H=B.length;de<H;de++){const ae=X(B[de],k[de],Q);he(ae.x,ae.y,f+V)}for(let de=0,H=D.length;de<H;de++){const ae=D[de];$=ee[de];for(let xe=0,be=ae.length;xe<be;xe++){const U=X(ae[xe],$[xe],Q);y?he(U.x,U.y+w[h-1].y,w[h-1].x+V):he(U.x,U.y,f+V)}}}te(),F();function te(){const q=s.length/3;if(u){let oe=0,V=z*oe;for(let Q=0;Q<ye;Q++){const de=fe[Q];ne(de[2]+V,de[1]+V,de[0]+V)}oe=h+m*2,V=z*oe;for(let Q=0;Q<ye;Q++){const de=fe[Q];ne(de[0]+V,de[1]+V,de[2]+V)}}else{for(let oe=0;oe<ye;oe++){const V=fe[oe];ne(V[2],V[1],V[0])}for(let oe=0;oe<ye;oe++){const V=fe[oe];ne(V[0]+z*h,V[1]+z*h,V[2]+z*h)}}i.addGroup(q,s.length/3-q,0)}function F(){const q=s.length/3;let oe=0;K(B,oe),oe+=B.length;for(let V=0,Q=D.length;V<Q;V++){const de=D[V];K(de,oe),oe+=de.length}i.addGroup(q,s.length/3-q,1)}function K(q,oe){let V=q.length;for(;--V>=0;){const Q=V;let de=V-1;de<0&&(de=q.length-1);for(let H=0,ae=h+m*2;H<ae;H++){const xe=z*H,be=z*(H+1),U=oe+Q+xe,ze=oe+de+xe,we=oe+de+be,L=oe+Q+be;C(U,ze,we,L)}}}function he(q,oe,V){c.push(q),c.push(oe),c.push(V)}function ne(q,oe,V){P(q),P(oe),P(V);const Q=s.length/3,de=M.generateTopUV(i,s,Q-3,Q-2,Q-1);W(de[0]),W(de[1]),W(de[2])}function C(q,oe,V,Q){P(q),P(oe),P(Q),P(oe),P(V),P(Q);const de=s.length/3,H=M.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);W(H[0]),W(H[1]),W(H[3]),W(H[1]),W(H[2]),W(H[3])}function P(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function W(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Kp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xa[s.type]().fromJSON(s)),new Ys(i,e.options)}}const Jp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Se(r,o),new Se(a,c),new Se(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Se(o,1-c),new Se(l,1-f),new Se(u,1-g),new Se(v,1-d)]:[new Se(a,1-c),new Se(h,1-f),new Se(p,1-g),new Se(m,1-d)]}};function Kp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zr extends ka{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zr(e.radius,e.detail)}}class us extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const M=d*u-o;for(let w=0;w<l;w++){const y=w*f-r;g.push(y,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){const w=M+l*d,y=M+l*(d+1),b=M+1+l*(d+1),S=M+1+l*d;p.push(w,y,S),p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}class Va extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new I,u=new I,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const M=[],w=d/i,y=o+w*a,b=e*Math.cos(y),S=Math.sqrt(e*e-b*b);let R=0;d===0&&o===0?R=.5/t:d===i&&c===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,A=s+T*r;f.x=-S*Math.cos(A),f.y=b,f.z=S*Math.sin(A),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(T+R,1-w),M.push(l++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const w=h[d][M+1],y=h[d][M],b=h[d+1][M],S=h[d+1][M+1];(d!==0||o>0)&&p.push(w,y,S),(d!==i-1||c<Math.PI)&&p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ha extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],h=[],f=[],u=new I,p=new I,g=new I;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let d=0;d<=s;d++){const M=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),f.push(d/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const d=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,y=(s+1)*v+m;c.push(d,M,y),c.push(M,w,y)}this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Wa extends Bt{constructor(e=new Vc(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new Se;let h=new I;const f=[],u=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function v(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),d()}function m(w){h=e.getPointAt(w/t,h);const y=o.normals[w],b=o.binormals[w];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,_=Math.sin(R),T=-Math.cos(R);c.x=T*y.x+_*b.x,c.y=T*y.y+_*b.y,c.z=T*y.z+_*b.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function d(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){const b=(s+1)*(w-1)+(y-1),S=(s+1)*w+(y-1),R=(s+1)*w+y,_=(s+1)*(w-1)+y;g.push(b,S,_),g.push(S,R,_)}}function M(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)l.x=w/t,l.y=y/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wa(new xa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(iu(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(iu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function iu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const kd={clone:Ws,merge:cn};var jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new It().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gd extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ls extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vd extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hd extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tm extends Dc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Xa extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Wd extends Xa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Cl=new ft,su=new I,ru=new I;class Wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vo=new I,xo=new bi,ni=new I;class Xc extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,xo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,xo,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vo,xo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,xo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new I,ou=new Se,au=new Se;class En extends Xc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,ou,au),t.subVectors(au,ou)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nm extends Wc{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}}class qa extends Xa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Br extends Xc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class im extends Wc{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new im}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ts=-90,As=1;class Xd extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Ts,As,e,t);s.layers=this.layers,this.add(s);const r=new En(Ts,As,e,t);r.layers=this.layers,this.add(r);const o=new En(Ts,As,e,t);o.layers=this.layers,this.add(o);const a=new En(Ts,As,e,t);a.layers=this.layers,this.add(a);const c=new En(Ts,As,e,t);c.layers=this.layers,this.add(c);const l=new En(Ts,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qd extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lu=new ft;class Yd{constructor(e,t,i=0,s=1/0){this.ray=new qs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(e,t=!0,i=[]){return tc(e,this,i,t),i.sort(cu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)tc(e[s],this,i,t);return i.sort(cu),i}}function cu(n,e){return n.distance-e.distance}function tc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)tc(r[o],e,t,!0)}}class nc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=class dh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};dh.prototype.isMatrix2=!0;let ic=dh;class Zd extends wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function hu(n,e,t,i){const s=sm(i);switch(t){case wc:return n*e;case Ca:return n*e/s.components*s.byteLength;case Pa:return n*e/s.components*s.byteLength;case Hi:return n*e*2/s.components*s.byteLength;case La:return n*e*2/s.components*s.byteLength;case Tc:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case Da:return n*e*4/s.components*s.byteLength;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gr:case _r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ko:case Vo:return Math.max(n,16)*Math.max(e,8)/4;case Bo:case Go:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Wo:case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case br:case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case na:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ia:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case la:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ca:case ha:case ua:return Math.ceil(n/4)*Math.ceil(e/4)*16;case da:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Er:case pa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sm(n){switch(n){case gn:case Mc:return{byteLength:1,components:1};case Bs:case Sc:case Kn:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case Jn:case Ta:case In:return{byteLength:4,components:1};case bc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $d(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rm(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,s0=`uniform sampler2D dfgLUT;
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
}`,r0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g0=`#if defined( USE_POINTS_UV )
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
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,Z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,J0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,bg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:dm,aomap_pars_fragment:fm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:vm,iridescence_fragment:xm,bumpmap_pars_fragment:ym,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Em,color_fragment:wm,color_pars_fragment:Tm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Dm,displacementmap_vertex:Im,emissivemap_fragment:Nm,emissivemap_pars_fragment:Um,colorspace_fragment:Fm,colorspace_pars_fragment:Om,envmap_fragment:zm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:km,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:Vm,fog_vertex:Hm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:Zm,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Jm,lights_pars_begin:Km,lights_toon_fragment:jm,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,lightprobes_pars_fragment:l0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:d0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:g0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:v0,morphinstance_vertex:x0,morphcolor_vertex:y0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:b0,normal_fragment_begin:E0,normal_fragment_maps:w0,normal_pars_fragment:T0,normal_pars_vertex:A0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:I0,opaque_fragment:N0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:z0,dithering_pars_fragment:B0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:V0,shadowmap_pars_vertex:H0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:Y0,skinning_vertex:Z0,skinnormal_vertex:$0,specularmap_fragment:J0,specularmap_pars_fragment:K0,tonemapping_fragment:Q0,tonemapping_pars_fragment:j0,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distance_vert:pg,distance_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:bg,meshmatcap_vert:Eg,meshmatcap_frag:wg,meshnormal_vert:Tg,meshnormal_frag:Ag,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ig,points_vert:Ng,points_frag:Ug,shadow_vert:Fg,shadow_frag:Og,sprite_vert:zg,sprite_frag:Bg},Ie={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Xn={basic:{uniforms:cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:cn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:cn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:cn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:cn([Ie.points,Ie.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:cn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:cn([Ie.common,Ie.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:cn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:cn([Ie.sprite,Ie.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:cn([Ie.common,Ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:cn([Ie.lights,Ie.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Xn.physical={uniforms:cn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const yo={r:0,b:0,g:0},kg=new ft,Jd=new et;Jd.set(-1,0,0,0,1,0,0,0,1);function Gg(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,c,l,h=null,f=0,u=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(M){let w=!1;const y=p(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,w){const y=p(w);y&&(y.isCubeTexture||y.mapping===Nr)?(l===void 0&&(l=new fn(new Ti(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Ws(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jd),l.material.toneMapped=lt.getTransfer(y.colorSpace)!==vt,(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fn(new us(2,2),new zn({name:"BackgroundMaterial",uniforms:Ws(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(yo,Bd(n)),t.buffers.color.setClear(yo.r,yo.g,yo.b,w,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:d}}function Vg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(D,O,G,N,B){let X=!1;const z=f(D,N,G,O);r!==z&&(r=z,l(r.object)),X=p(D,N,G,B),X&&g(D,N,G,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(D,O,G,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function f(D,O,G,N){const B=N.wireframe===!0;let X=i[O.id];X===void 0&&(X={},i[O.id]=X);const z=D.isInstancedMesh===!0?D.id:0;let J=X[z];J===void 0&&(J={},X[z]=J);let k=J[G.id];k===void 0&&(k={},J[G.id]=k);let ee=k[B];return ee===void 0&&(ee=u(c()),k[B]=ee),ee}function u(D){const O=[],G=[],N=[];for(let B=0;B<t;B++)O[B]=0,G[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:N,object:D,attributes:{},index:null}}function p(D,O,G,N){const B=r.attributes,X=O.attributes;let z=0;const J=G.getAttributes();for(const k in J)if(J[k].location>=0){const $=B[k];let ue=X[k];if(ue===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),$===void 0||$.attribute!==ue||ue&&$.data!==ue.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function g(D,O,G,N){const B={},X=O.attributes;let z=0;const J=G.getAttributes();for(const k in J)if(J[k].location>=0){let $=X[k];$===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&($=D.instanceColor));const ue={};ue.attribute=$,$&&$.data&&(ue.data=$.data),B[k]=ue,z++}r.attributes=B,r.attributesNum=z,r.index=N}function v(){const D=r.newAttributes;for(let O=0,G=D.length;O<G;O++)D[O]=0}function m(D){d(D,0)}function d(D,O){const G=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;G[D]=1,N[D]===0&&(n.enableVertexAttribArray(D),N[D]=1),B[D]!==O&&(n.vertexAttribDivisor(D,O),B[D]=O)}function M(){const D=r.newAttributes,O=r.enabledAttributes;for(let G=0,N=O.length;G<N;G++)O[G]!==D[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function w(D,O,G,N,B,X,z){z===!0?n.vertexAttribIPointer(D,O,G,B,X):n.vertexAttribPointer(D,O,G,N,B,X)}function y(D,O,G,N){v();const B=N.attributes,X=G.getAttributes(),z=O.defaultAttributeValues;for(const J in X){const k=X[J];if(k.location>=0){let ee=B[J];if(ee===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const $=ee.normalized,ue=ee.itemSize,fe=e.get(ee);if(fe===void 0)continue;const ye=fe.buffer,Re=fe.type,te=fe.bytesPerElement,F=Re===n.INT||Re===n.UNSIGNED_INT||ee.gpuType===Ta;if(ee.isInterleavedBufferAttribute){const K=ee.data,he=K.stride,ne=ee.offset;if(K.isInstancedInterleavedBuffer){for(let C=0;C<k.locationSize;C++)d(k.location+C,K.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let C=0;C<k.locationSize;C++)m(k.location+C);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let C=0;C<k.locationSize;C++)w(k.location+C,ue/k.locationSize,Re,$,he*te,(ne+ue/k.locationSize*C)*te,F)}else{if(ee.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)d(k.location+K,ee.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let K=0;K<k.locationSize;K++)w(k.location+K,ue/k.locationSize,Re,$,ue*te,ue/k.locationSize*K*te,F)}}else if(z!==void 0){const $=z[J];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(k.location,$);break;case 3:n.vertexAttrib3fv(k.location,$);break;case 4:n.vertexAttrib4fv(k.location,$);break;default:n.vertexAttrib1fv(k.location,$)}}}}M()}function b(){T();for(const D in i){const O=i[D];for(const G in O){const N=O[G];for(const B in N){const X=N[B];for(const z in X)h(X[z].object),delete X[z];delete N[B]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const G in O){const N=O[G];for(const B in N){const X=N[B];for(const z in X)h(X[z].object),delete X[z];delete N[B]}}delete i[D.id]}function R(D){for(const O in i){const G=i[O];for(const N in G){const B=G[N];if(B[D.id]===void 0)continue;const X=B[D.id];for(const z in X)h(X[z].object),delete X[z];delete B[D.id]}}}function _(D){for(const O in i){const G=i[O],N=D.isInstancedMesh===!0?D.id:0,B=G[N];if(B!==void 0){for(const X in B){const z=B[X];for(const J in z)h(z[J].object),delete z[J];delete B[X]}delete G[N],Object.keys(G).length===0&&delete i[O]}}}function T(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Hg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&R!==In&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(je("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:S}}function Xg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ri,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:i,w=M*4;let y=d.clippingState||null;c.value=y,y=h(g,u,w,p);for(let b=0;b!==w;++b)y[b]=t[b];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=p;w!==v;++w,y+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Ds=4,qg=6,Yg=20,Zg=256,or=new Br,uu=new ot;let Pl=null,Ll=0,Dl=0,Il=!1;const $g=new I,es=new I;class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=$g}=r;Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Ll,Dl),this._renderer.xr.enabled=Il,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:wr,depthBuffer:!1},s=du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jg(r)),this._blurMaterial=Qg(r,e,t),this._ggxMaterial=Kg(r,e,t)}return s}_compileMaterial(e){const t=new fn(new Bt,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,i,s,r){const c=new En(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(uu),f.toneMapping=Yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new Ti,new Ur({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(uu),d=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const b=this._cubeSize;Rs(s,y*b,w>2?b:0,b,b),f.setRenderTarget(s),d&&f.render(v,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Vi||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,p=f*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ds?i-g+Ds:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Rs(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,or),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Rs(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,or)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ds?s-this._lodMax+Ds:0),u=4*(this._cubeSize-h);Rs(t,f,u,3*h,2*h),o.setRenderTarget(t),o.render(c,or)}}function Jg(n){const e=[],t=[];let i=n;const s=n-Ds+1+qg;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,p=3,g=new Float32Array(p*u*f),v=new Float32Array(p*u*f);for(let d=0;d<f;d++){const M=d%3*2/3-1,w=d>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(y,p*u*d);for(let b=0;b<u;b++){const S=h[b*2]*2-1,R=h[b*2+1]*2-1;d===0?es.set(1,R,S):d===1?es.set(-S,1,-R):d===2?es.set(-S,R,1):d===3?es.set(-1,R,-S):d===4?es.set(-S,-1,R):es.set(S,R,-1),es.toArray(v,(d*u+b)*p)}}const m=new Bt;m.setAttribute("position",new Fn(g,p)),m.setAttribute("outputDirection",new Fn(v,p)),t.push(new fn(m,null)),i>Ds&&i--}return{lodMeshes:t,sizeLods:e}}function du(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=Nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Kg(n,e,t){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Qg(n,e,t){return new zn({name:"SphericalGaussianBlur",defines:{SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function fu(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function pu(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:li});r.uniforms.tEquirect.value=t;const o=new fn(s,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Jt),new Xd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function jg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Eo||p===wo)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Yc(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===Eo||p===wo,v=p===Vi||p===as;if(g||v){let m=t.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new sc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new sc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,p){return p===Eo?u.mapping=Vi:p===wo&&(u.mapping=as),u}function c(u){let p=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function e_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&rs("WebGLRenderer: "+i+" extension not supported."),s}}}function t_(n,e,t,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const M=p.array;v=p.version;for(let w=0,y=M.length;w<y;w+=3){const b=M[w+0],S=M[w+1],R=M[w+2];u.push(b,S,S,R,R,b)}}else{const M=g.array;v=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const b=w+0,S=w+1,R=w+2;u.push(b,S,S,R,R,b)}}const m=new(g.count>=65535?Pc:Cc)(u,1);m.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function n_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*o,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let v=0;for(let m=0;m<p;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function i_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function s_(n,e,t){const i=new WeakMap,s=new It;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let A=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var p=A;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*S*4*f),_=new Rc(R,b,S,f);_.type=In,_.needsUpdate=!0;const T=y*4;for(let D=0;D<f;D++){const O=d[D],G=M[D],N=w[D],B=b*S*4*D;for(let X=0;X<O.count;X++){const z=X*T;g===!0&&(s.fromBufferAttribute(O,X),R[B+z+0]=s.x,R[B+z+1]=s.y,R[B+z+2]=s.z,R[B+z+3]=0),v===!0&&(s.fromBufferAttribute(G,X),R[B+z+4]=s.x,R[B+z+5]=s.y,R[B+z+6]=s.z,R[B+z+7]=0),m===!0&&(s.fromBufferAttribute(N,X),R[B+z+8]=s.x,R[B+z+9]=s.y,R[B+z+10]=s.z,R[B+z+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new Se(b,S)},i.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function r_(n,e,t,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const o_={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function a_(n,e,t,i,s,r){const o=new Un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Bt;l.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pt([0,2,0,0,2,0],2));const h=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new fn(l,h),u=new Br(-1,1,1,-1,0,1);let p=null,g=null,v=!1,m,d=null,M=[],w=!1;this.setSize=function(y,b){o.setSize(y,b),a!==null&&a.setSize(y,b),c!==null&&c.setSize(y,b);for(let S=0;S<M.length;S++){const R=M[S];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;const b=o.width,S=o.height;M.length>0&&a===null&&(a=new Un(b,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new Un(b,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(b,S)}},this.begin=function(y,b){if(v||y.toneMapping===Yn&&M.length===0)return!1;if(d=b,b!==null){const S=b.width,R=b.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return w===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,v=!0;let S=o,R=a;for(let _=0;_<M.length;_++){const T=M[_];T.enabled!==!1&&(T.render(y,R,S,b),T.needsSwap!==!1&&(S=R,R=R===a?c:a))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},lt.getTransfer(p)===vt&&(h.defines.SRGB_TRANSFER="");const _=o_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(d),y.render(f,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Kd=new Qt,rc=new Vs(1,1),Qd=new Rc,jd=new Td,ef=new Nc,mu=[],gu=[],_u=new Float32Array(16),vu=new Float32Array(9),xu=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Za(n,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;xu.set(i),n.uniformMatrix2fv(this.addr,!1,xu),qt(t,i)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;vu.set(i),n.uniformMatrix3fv(this.addr,!1,vu),qt(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;_u.set(i),n.uniformMatrix4fv(this.addr,!1,_u),qt(t,i)}}function m_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function x_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function b_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rc.compareFunction=t.isReversedDepthBuffer()?Na:Ia,r=rc):r=Kd,t.setTexture2D(e||r,s)}function E_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function w_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ef,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qd,s)}function A_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}function R_(n,e){n.uniform1fv(this.addr,e)}function C_(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function P_(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function L_(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function D_(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I_(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N_(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U_(n,e){n.uniform1iv(this.addr,e)}function F_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function z_(n,e){n.uniform4iv(this.addr,e)}function B_(n,e){n.uniform1uiv(this.addr,e)}function k_(n,e){n.uniform2uiv(this.addr,e)}function G_(n,e){n.uniform3uiv(this.addr,e)}function V_(n,e){n.uniform4uiv(this.addr,e)}function H_(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=rc:o=Kd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function W_(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jd,r[o])}function X_(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ef,r[o])}function q_(n,e,t){const i=this.cache,s=e.length,r=Za(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qd,r[o])}function Y_(n){switch(n){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return L_;case 35674:return D_;case 35675:return I_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return k_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}class Z_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A_(t.type)}}class $_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function yu(n,e){n.seq.push(e),n.map[e.id]=e}function K_(n,e,t){const i=n.name,s=i.length;for(Nl.lastIndex=0;;){const r=Nl.exec(i),o=Nl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yu(t,l===void 0?new Z_(a,n,e):new $_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new J_(a),yu(t,f)),t=f}}}class Co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);K_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Mu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let j_=0;function ev(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Su=new et;function tv(n){lt._getMatrix(Su,lt.workingColorSpace,n);const e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Tr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ev(n.getShaderSource(e),a)}else return r}function nv(n,e){const t=tv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iv={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[wa]:"ACESFilmic",[vc]:"AgX",[xc]:"Neutral",[_c]:"Custom"};function sv(n,e){const t=iv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mo=new I;function rv(){lt.getLuminanceCoefficients(Mo);const n=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function av(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function Eu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(n){return n.replace(cv,uv)}const hv=new Map;function uv(n,e){let t=it[e];if(t===void 0){const i=hv.get(e);if(i!==void 0)t=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return oc(t)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(dv,fv)}function fv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const pv={[Is]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function mv(n){return pv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gv={[Vi]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function _v(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vv={[as]:"ENVMAP_MODE_REFRACTION"};function xv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yv={[fc]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function Mv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yv[n.combine]||"ENVMAP_BLENDING_NONE"}function Sv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=mv(t),l=_v(t),h=xv(t),f=Mv(t),u=Sv(t),p=ov(t),g=av(r),v=s.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?it.tonemapping_pars_fragment:"",t.toneMapping!==Yn?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,nv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=oc(o),o=Eu(o,t),o=wu(o,t),a=oc(a),a=Eu(a,t),a=wu(a,t),o=Tu(o),a=Tu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+m+o,y=M+d+a,b=Mu(s,s.VERTEX_SHADER,w),S=Mu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,b),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(S)||"",B=O.trim(),X=G.trim(),z=N.trim();let J=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,S);else{const ee=bu(s,b,"vertex"),$=bu(s,S,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+ee+`
`+$)}else B!==""?je("WebGLProgram: Program Info Log:",B):(X===""||z==="")&&(k=!1);k&&(D.diagnostics={runnable:J,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:z,prefix:d}})}s.deleteShader(b),s.deleteShader(S),_=new Co(s,v),T=lv(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,Q_)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=S,this}let Ev=0;class wv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tv(e),t.set(e,i)),i}}class Tv{constructor(e){this.id=Ev++,this.code=e,this.usedTimes=0}}function Av(n){return n===Hi||n===br||n===Er}function Rv(n,e,t,i,s,r){const o=new Fa,a=new wv,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,A,D,O,G){const N=D.fog,B=O.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||X,z),k=J&&J.mapping===Nr?J.image.height:null,ee=p[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=$!==void 0?$.length:0;let fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let ye,Re,te,F;if(ee){const At=Xn[ee];ye=At.vertexShader,Re=At.fragmentShader}else{ye=_.vertexShader,Re=_.fragmentShader;const At=a.getVertexShaderStage(_),gt=a.getFragmentShaderStage(_);a.update(_,At,gt),te=At.id,F=gt.id}const K=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),ne=O.isInstancedMesh===!0,C=O.isBatchedMesh===!0,P=!!_.map,W=!!_.matcap,q=!!J,oe=!!_.aoMap,V=!!_.lightMap,Q=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,H=!!_.displacementMap,ae=!!_.emissiveMap,xe=!!_.metalnessMap,be=!!_.roughnessMap,U=_.anisotropy>0,ze=_.clearcoat>0,we=_.dispersion>0,L=_.retroreflectivity>0,x=_.iridescence>0,j=_.sheen>0,ie=_.transmission>0,le=U&&!!_.anisotropyMap,Me=ze&&!!_.clearcoatMap,Ae=ze&&!!_.clearcoatNormalMap,pe=ze&&!!_.clearcoatRoughnessMap,_e=x&&!!_.iridescenceMap,Ce=x&&!!_.iridescenceThicknessMap,Ye=j&&!!_.sheenColorMap,Ne=j&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,Ze=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=ie&&!!_.transmissionMap,Z=ie&&!!_.thicknessMap,Le=!!_.gradientMap,ge=!!_.alphaMap,De=_.alphaTest>0,Be=!!_.alphaHash,ve=!!_.extensions;let $e=Yn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($e=n.toneMapping);const We={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:ye,fragmentShader:Re,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:F,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:C,batchingColor:C&&O._colorsTexture!==null,instancing:ne,instancingColor:ne&&O.instanceColor!==null,instancingMorph:ne&&O.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:P,matcap:W,envMap:q,envMapMode:q&&J.mapping,envMapCubeUVHeight:k,aoMap:oe,lightMap:V,bumpMap:Q,normalMap:de,displacementMap:H,emissiveMap:ae,normalMapObjectSpace:de&&_.normalMapType===fd,normalMapTangentSpace:de&&_.normalMapType===ma,packedNormalMap:de&&_.normalMapType===ma&&Av(_.normalMap.format),metalnessMap:xe,roughnessMap:be,anisotropy:U,anisotropyMap:le,clearcoat:ze,clearcoatMap:Me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:we,retroreflection:L,iridescence:x,iridescenceMap:_e,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:Ze,specularIntensityMap:Ke,transmission:ie,transmissionMap:nt,thicknessMap:Z,gradientMap:Le,opaque:_.transparent===!1&&_.blending===Ns&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:De,alphaHash:Be,combine:_.combine,mapUv:P&&g(_.map.channel),aoMapUv:oe&&g(_.aoMap.channel),lightMapUv:V&&g(_.lightMap.channel),bumpMapUv:Q&&g(_.bumpMap.channel),normalMapUv:de&&g(_.normalMap.channel),displacementMapUv:H&&g(_.displacementMap.channel),emissiveMapUv:ae&&g(_.emissiveMap.channel),metalnessMapUv:xe&&g(_.metalnessMap.channel),roughnessMapUv:be&&g(_.roughnessMap.channel),anisotropyMapUv:le&&g(_.anisotropyMap.channel),clearcoatMapUv:Me&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(_.sheenRoughnessMap.channel),specularMapUv:Pe&&g(_.specularMap.channel),specularColorMapUv:Ze&&g(_.specularColorMap.channel),specularIntensityMapUv:Ke&&g(_.specularIntensityMap.channel),transmissionMapUv:nt&&g(_.transmissionMap.channel),thicknessMapUv:Z&&g(_.thicknessMap.channel),alphaMapUv:ge&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(P||ge),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:P&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:ae&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||C)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(d(T,_),M(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function d(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const T=p[_.type];let A;if(T){const D=Xn[T];A=kd.clone(D.uniforms)}else A=_.uniforms;return A}function y(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new bv(n,T,_,s),l.push(A),h.set(T,A)),A}function b(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:R}}function Cv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Pv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ru(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,v,m,d){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:d},n[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=d),e++,M}function c(u,p,g,v,m,d,M){M.reversedDepth===!0&&(m=-m);const w=a(u,p,g,v,m,d);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(u,p,g,v,m,d){const M=a(u,p,g,v,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||Pv),i.length>1&&i.sort(p||Ru),s.length>1&&s.sort(p||Ru)}function f(){for(let u=e,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Lv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Cu,n.set(i,[o])):s>=r.length?(o=new Cu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Dv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new ot};break;case"SpotLight":t={position:new I,direction:new I,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Nv=0;function Uv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fv(n){const e=new Dv,t=Iv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new ft,o=new ft;function a(l){let h=0,f=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,M=0,w=0,y=0,b=0,S=0,R=0,_=0,T=0,A=0;l.sort(Uv);for(let O=0,G=l.length;O<G;O++){const N=l[O],B=N.color,X=N.intensity,z=N.distance;let J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Hi?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*X,f+=B.g*X,u+=B.b*X;else if(N.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],X);A++}else if(N.isSunLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,$=t.get(N);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=J;const ue=ee.getViewportCount();for(let fe=0;fe<ue;fe++)i.sunShadowMatrix[v+fe]=ee.getMatrix(fe),i.sunShadowCascade[v+fe]=ee._cascadeData[fe];v+=ue,g++}i.sun[p]=k,p++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ee=N.shadow,$=t.get(N);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=N.shadow.matrix,b++}i.directional[m]=k,m++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(B).multiplyScalar(X),k.distance=z,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[M]=k;const ee=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,ee.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[M]=ee.matrix,N.castShadow){const $=t.get(N);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=J,R++}M++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(B).multiplyScalar(X),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=k,w++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){const ee=N.shadow,$=t.get(N);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,i.pointShadow[d]=$,i.pointShadowMap[d]=J,i.pointShadowMatrix[d]=N.shadow.matrix,S++}i.point[d]=k,d++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(X),k.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[y]=k,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=A,i.version=Nv++)}function c(l,h){let f=0,u=0,p=0,g=0,v=0,m=0;const d=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const y=l[M];if(y.isSunLight){const b=i.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),f++}else if(y.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:i}}function Pu(n){const e=new Fv(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Ov(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pu(n),e.set(s,[a])):r>=o.length?(a=new Pu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
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
}`,kv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Gv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Lu=new ft,ar=new I,Ul=new I;function Vv(n,e,t){let i=new za;const s=new Se,r=new Se,o=new It,a=new Vd,c=new Hd,l={},h=t.maxTextureSize,f={[Gi]:dn,[dn]:Gi,[Pn]:Pn},u=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:zv,fragmentShader:Bv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let d=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Wu&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);const T=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=d!==this.type;G&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=S.length;N<B;N++){const X=S[N],z=X.shadow;if(z===void 0){je("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));const k=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=k,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ps){if(X.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Un(s.x,s.y,{format:Hi,type:Kn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new Vs(s.x,s.y,In),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=hi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt}else X.isPointLight?(z.map=new Yc(s.x),z.map.depthTexture=new Pd(s.x,Jn)):(z.map=new Un(s.x,s.y),z.map.depthTexture=new Vs(s.x,s.y,Jn)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=hi,this.type===Is?(z.map.depthTexture.compareFunction=k?Na:Ia,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const ee=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();X.isPointLight!==!0&&z.updateMatrices(X,_);for(let $=0;$<ee;$++){const ue=z.getCamera($);if(X.isPointLight){const fe=z.camera,ye=z.matrix,Re=X.distance||fe.far;Re!==fe.far&&(fe.far=Re,fe.updateProjectionMatrix()),ar.setFromMatrixPosition(X.matrixWorld),fe.position.copy(ar),Ul.copy(fe.position),Ul.add(kv[$]),fe.up.copy(Gv[$]),fe.lookAt(Ul),fe.updateMatrixWorld(),ye.makeTranslation(-ar.x,-ar.y,-ar.z),Lu.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Lu,fe.coordinateSystem,fe.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,$),n.clear();else{$===0&&(n.setRenderTarget(z.map),n.clear());const fe=z.getViewport($);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),O.viewport(o)}i=z.getFrustum($),y(R,_,ue,X,this.type)}z.isPointLightShadow!==!0&&this.type===Ps&&M(z,_),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,A,D)};function M(S,R){const _=e.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Un(s.x,s.y,{format:Hi,type:Kn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,_,p,v,null)}function w(S,R,_,T){let A=null;const D=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)A=D;else if(A=_.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=A.uuid,G=R.uuid;let N=l[O];N===void 0&&(N={},l[O]=N);let B=N[G];B===void 0&&(B=A.clone(),N[G]=B,R.addEventListener("dispose",b)),A=B}if(A.visible=R.visible,A.wireframe=R.wireframe,T===Ps?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:f[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const O=n.properties.get(A);O.light=_}return A}function y(S,R,_,T,A){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Ps)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const G=e.update(S),N=S.material;if(Array.isArray(N)){const B=G.groups;for(let X=0,z=B.length;X<z;X++){const J=B[X],k=N[J.materialIndex];if(k&&k.visible){const ee=w(S,k,T,A);S.onBeforeShadow(n,S,R,_,G,ee,J),n.renderBufferDirect(_,null,G,ee,S,J),S.onAfterShadow(n,S,R,_,G,ee,J)}}}else if(N.visible){const B=w(S,N,T,A);S.onBeforeShadow(n,S,R,_,G,B,null),n.renderBufferDirect(_,null,G,B,S,null),S.onAfterShadow(n,S,R,_,G,B,null)}}const O=S.children;for(let G=0,N=O.length;G<N;G++)y(O[G],R,_,T,A)}function b(S){S.target.removeEventListener("dispose",b);for(const _ in l){const T=l[_],A=S.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function Hv(n,e){function t(){let Z=!1;const Le=new It;let ge=null;const De=new It(0,0,0,0);return{setMask:function(Be){ge!==Be&&!Z&&(n.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){Z=Be},setClear:function(Be,ve,$e,We,At){At===!0&&(Be*=We,ve*=We,$e*=We),Le.set(Be,ve,$e,We),De.equals(Le)===!1&&(n.clearColor(Be,ve,$e,We),De.copy(Le))},reset:function(){Z=!1,ge=null,De.set(-1,0,0,0)}}}function i(){let Z=!1,Le=!1,ge=null,De=null,Be=null;return{setReversed:function(ve){if(Le!==ve){const $e=e.get("EXT_clip_control");ve?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Le=ve;const We=Be;Be=null,this.setClear(We)}},getReversed:function(){return Le},setTest:function(ve){ve?K(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!Z&&(n.depthMask(ve),ge=ve)},setFunc:function(ve){if(Le&&(ve=Vf[ve]),De!==ve){switch(ve){case Lo:n.depthFunc(n.NEVER);break;case Do:n.depthFunc(n.ALWAYS);break;case Io:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case No:n.depthFunc(n.EQUAL);break;case Uo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case Oo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ve}},setLocked:function(ve){Z=ve},setClear:function(ve){Be!==ve&&(Be=ve,Le&&(ve=1-ve),n.clearDepth(ve))},reset:function(){Z=!1,ge=null,De=null,Be=null,Le=!1}}}function s(){let Z=!1,Le=null,ge=null,De=null,Be=null,ve=null,$e=null,We=null,At=null;return{setTest:function(gt){Z||(gt?K(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(gt){Le!==gt&&!Z&&(n.stencilMask(gt),Le=gt)},setFunc:function(gt,kn,ei){(ge!==gt||De!==kn||Be!==ei)&&(n.stencilFunc(gt,kn,ei),ge=gt,De=kn,Be=ei)},setOp:function(gt,kn,ei){(ve!==gt||$e!==kn||We!==ei)&&(n.stencilOp(gt,kn,ei),ve=gt,$e=kn,We=ei)},setLocked:function(gt){Z=gt},setClear:function(gt){At!==gt&&(n.clearStencil(gt),At=gt)},reset:function(){Z=!1,Le=null,ge=null,De=null,Be=null,ve=null,$e=null,We=null,At=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],v=null,m=!1,d=null,M=null,w=null,y=null,b=null,S=null,R=null,_=new ot(0,0,0),T=0,A=!1,D=null,O=null,G=null,N=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=J>=2);let ee=null,$={};const ue=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),ye=new It().fromArray(ue),Re=new It().fromArray(fe);function te(Z,Le,ge,De){const Be=new Uint8Array(4),ve=n.createTexture();n.bindTexture(Z,ve),n.texParameteri(Z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ge;$e++)Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return ve}const F={};F[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(zs),Q(!1),de(Hl),K(n.CULL_FACE),oe(li);function K(Z){h[Z]!==!0&&(n.enable(Z),h[Z]=!0)}function he(Z){h[Z]!==!1&&(n.disable(Z),h[Z]=!1)}function ne(Z,Le){return u[Z]!==Le?(n.bindFramebuffer(Z,Le),u[Z]=Le,Z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Le),Z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function C(Z,Le){let ge=g,De=!1;if(Z){ge=p.get(Le),ge===void 0&&(ge=[],p.set(Le,ge));const Be=Z.textures;if(ge.length!==Be.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,$e=Be.length;ve<$e;ve++)ge[ve]=n.COLOR_ATTACHMENT0+ve;ge.length=Be.length,De=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,De=!0);De&&n.drawBuffers(ge)}function P(Z){return v!==Z?(n.useProgram(Z),v=Z,!0):!1}const W={[ns]:n.FUNC_ADD,[qu]:n.FUNC_SUBTRACT,[Yu]:n.FUNC_REVERSE_SUBTRACT};W[Zu]=n.MIN,W[$u]=n.MAX;const q={[Ju]:n.ZERO,[Ku]:n.ONE,[Qu]:n.SRC_COLOR,[uc]:n.SRC_ALPHA,[sd]:n.SRC_ALPHA_SATURATE,[nd]:n.DST_COLOR,[ed]:n.DST_ALPHA,[ju]:n.ONE_MINUS_SRC_COLOR,[dc]:n.ONE_MINUS_SRC_ALPHA,[id]:n.ONE_MINUS_DST_COLOR,[td]:n.ONE_MINUS_DST_ALPHA,[rd]:n.CONSTANT_COLOR,[od]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[ld]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(Z,Le,ge,De,Be,ve,$e,We,At,gt){if(Z===li){m===!0&&(he(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),Z!==Xu){if(Z!==d||gt!==A){if((M!==ns||b!==ns)&&(n.blendEquation(n.FUNC_ADD),M=ns,b=ns),gt)switch(Z){case Ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xl:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",Z);break}w=null,y=null,S=null,R=null,_.set(0,0,0),T=0,d=Z,A=gt}return}Be=Be||Le,ve=ve||ge,$e=$e||De,(Le!==M||Be!==b)&&(n.blendEquationSeparate(W[Le],W[Be]),M=Le,b=Be),(ge!==w||De!==y||ve!==S||$e!==R)&&(n.blendFuncSeparate(q[ge],q[De],q[ve],q[$e]),w=ge,y=De,S=ve,R=$e),(We.equals(_)===!1||At!==T)&&(n.blendColor(We.r,We.g,We.b,At),_.copy(We),T=At),d=Z,A=!1}function V(Z,Le){Z.side===Pn?he(n.CULL_FACE):K(n.CULL_FACE);let ge=Z.side===dn;Le&&(ge=!ge),Q(ge),Z.blending===Ns&&Z.transparent===!1?oe(li):oe(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);const De=Z.stencilWrite;a.setTest(De),De&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ae(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(Z){D!==Z&&(Z?n.frontFace(n.CW):n.frontFace(n.CCW),D=Z)}function de(Z){Z!==Vu?(K(n.CULL_FACE),Z!==O&&(Z===Hl?n.cullFace(n.BACK):Z===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),O=Z}function H(Z){Z!==G&&(z&&n.lineWidth(Z),G=Z)}function ae(Z,Le,ge){Z?(K(n.POLYGON_OFFSET_FILL),(N!==Le||B!==ge)&&(N=Le,B=ge,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ge))):he(n.POLYGON_OFFSET_FILL)}function xe(Z){Z?K(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function be(Z){Z===void 0&&(Z=n.TEXTURE0+X-1),ee!==Z&&(n.activeTexture(Z),ee=Z)}function U(Z,Le,ge){ge===void 0&&(ee===null?ge=n.TEXTURE0+X-1:ge=ee);let De=$[ge];De===void 0&&(De={type:void 0,texture:void 0},$[ge]=De),(De.type!==Z||De.texture!==Le)&&(ee!==ge&&(n.activeTexture(ge),ee=ge),n.bindTexture(Z,Le||F[Z]),De.type=Z,De.texture=Le)}function ze(){const Z=$[ee];Z!==void 0&&Z.type!==void 0&&(n.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function we(){try{n.compressedTexImage2D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function x(){try{n.texSubImage2D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function j(){try{n.texSubImage3D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function Me(){try{n.texStorage2D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function Ae(){try{n.texStorage3D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function pe(){try{n.texImage2D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function _e(){try{n.texImage3D(...arguments)}catch(Z){ct("WebGLState:",Z)}}function Ce(Z){return f[Z]!==void 0?f[Z]:n.getParameter(Z)}function Ye(Z,Le){f[Z]!==Le&&(n.pixelStorei(Z,Le),f[Z]=Le)}function Ne(Z){ye.equals(Z)===!1&&(n.scissor(Z.x,Z.y,Z.z,Z.w),ye.copy(Z))}function Pe(Z){Re.equals(Z)===!1&&(n.viewport(Z.x,Z.y,Z.z,Z.w),Re.copy(Z))}function Ze(Z,Le){let ge=l.get(Le);ge===void 0&&(ge=new WeakMap,l.set(Le,ge));let De=ge.get(Z);De===void 0&&(De=n.getUniformBlockIndex(Le,Z.name),ge.set(Z,De))}function Ke(Z,Le){const De=l.get(Le).get(Z);c.get(Le)!==De&&(n.uniformBlockBinding(Le,De,Z.__bindingPointIndex),c.set(Le,De))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,$={},u={},p=new WeakMap,g=[],v=null,m=!1,d=null,M=null,w=null,y=null,b=null,S=null,R=null,_=new ot(0,0,0),T=0,A=!1,D=null,O=null,G=null,N=null,B=null,ye.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:he,bindFramebuffer:ne,drawBuffers:C,useProgram:P,setBlending:oe,setMaterial:V,setFlipSided:Q,setCullFace:de,setLineWidth:H,setPolygonOffset:ae,setScissorTest:xe,activeTexture:be,bindTexture:U,unbindTexture:ze,compressedTexImage2D:we,compressedTexImage3D:L,texImage2D:pe,texImage3D:_e,pixelStorei:Ye,getParameter:Ce,updateUBOMapping:Ze,uniformBlockBinding:Ke,texStorage2D:Me,texStorage3D:Ae,texSubImage2D:x,texSubImage3D:j,compressedTexSubImage2D:ie,compressedTexSubImage3D:le,scissor:Ne,viewport:Pe,reset:nt}}function Wv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,x){return g?new OffscreenCanvas(L,x):ga("canvas")}function m(L,x,j){let ie=1;const le=we(L);if((le.width>j||le.height>j)&&(ie=j/Math.max(le.width,le.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Me=Math.floor(ie*le.width),Ae=Math.floor(ie*le.height);u===void 0&&(u=v(Me,Ae));const pe=x?v(Me,Ae):u;return pe.width=Me,pe.height=Ae,pe.getContext("2d").drawImage(L,0,0,Me,Ae),je("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Me+"x"+Ae+")."),pe}else return"data"in L&&je("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function d(L){return L.generateMipmaps}function M(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,x,j,ie,le,Me=!1){if(L!==null){if(n[L]!==void 0)return n[L];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ae;ie&&(Ae=e.get("EXT_texture_norm16"),Ae||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=x;if(x===n.RED&&(j===n.FLOAT&&(pe=n.R32F),j===n.HALF_FLOAT&&(pe=n.R16F),j===n.UNSIGNED_BYTE&&(pe=n.R8),j===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),j===n.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),x===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(pe=n.R8UI),j===n.UNSIGNED_SHORT&&(pe=n.R16UI),j===n.UNSIGNED_INT&&(pe=n.R32UI),j===n.BYTE&&(pe=n.R8I),j===n.SHORT&&(pe=n.R16I),j===n.INT&&(pe=n.R32I)),x===n.RG&&(j===n.FLOAT&&(pe=n.RG32F),j===n.HALF_FLOAT&&(pe=n.RG16F),j===n.UNSIGNED_BYTE&&(pe=n.RG8),j===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),j===n.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(pe=n.RG8UI),j===n.UNSIGNED_SHORT&&(pe=n.RG16UI),j===n.UNSIGNED_INT&&(pe=n.RG32UI),j===n.BYTE&&(pe=n.RG8I),j===n.SHORT&&(pe=n.RG16I),j===n.INT&&(pe=n.RG32I)),x===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),j===n.UNSIGNED_INT&&(pe=n.RGB32UI),j===n.BYTE&&(pe=n.RGB8I),j===n.SHORT&&(pe=n.RGB16I),j===n.INT&&(pe=n.RGB32I)),x===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),j===n.UNSIGNED_INT&&(pe=n.RGBA32UI),j===n.BYTE&&(pe=n.RGBA8I),j===n.SHORT&&(pe=n.RGBA16I),j===n.INT&&(pe=n.RGBA32I)),x===n.RGB&&(j===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),j===n.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),x===n.RGBA){const _e=Me?Tr:lt.getTransfer(le);j===n.FLOAT&&(pe=n.RGBA32F),j===n.HALF_FLOAT&&(pe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(pe=_e===vt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),j===n.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(L,x){let j;return L?x===null||x===Jn||x===ks?j=n.DEPTH24_STENCIL8:x===In?j=n.DEPTH32F_STENCIL8:x===Bs&&(j=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===ks?j=n.DEPTH_COMPONENT24:x===In?j=n.DEPTH_COMPONENT32F:x===Bs&&(j=n.DEPTH_COMPONENT16),j}function S(L,x){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function R(L){const x=L.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(L){const x=L.target;x.removeEventListener("dispose",_),D(x)}function T(L){const x=i.get(L);if(x.__webglInit===void 0)return;const j=L.source,ie=p.get(j);if(ie){const le=ie[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(L),Object.keys(ie).length===0&&p.delete(j)}i.remove(L)}function A(L){const x=i.get(L);n.deleteTexture(x.__webglTexture);const j=L.source,ie=p.get(j);delete ie[x.__cacheKey],o.memory.textures--}function D(L){const x=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(x.__webglFramebuffer[ie]))for(let le=0;le<x.__webglFramebuffer[ie].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[ie][le]);else n.deleteFramebuffer(x.__webglFramebuffer[ie]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ie])}else{if(Array.isArray(x.__webglFramebuffer))for(let ie=0;ie<x.__webglFramebuffer.length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[ie]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ie=0;ie<x.__webglColorRenderbuffer.length;ie++)x.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ie]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const j=L.textures;for(let ie=0,le=j.length;ie<le;ie++){const Me=i.get(j[ie]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(j[ie])}i.remove(L)}let O=0;function G(){O=0}function N(){return O}function B(L){O=L}function X(){const L=O;return L>=s.maxTextures&&je("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function z(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function J(L,x){const j=i.get(L);if(L.isVideoTexture&&U(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const ie=L.image;if(ie===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{he(j,L,x);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+x)}function k(L,x){const j=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){he(j,L,x);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+x)}function ee(L,x){const j=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){he(j,L,x);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+x)}function $(L,x){const j=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){ne(j,L,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+x)}const ue={[Sr]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[zo]:n.MIRRORED_REPEAT},fe={[Zt]:n.NEAREST,[ud]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[To]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},ye={[md]:n.NEVER,[yd]:n.ALWAYS,[gd]:n.LESS,[Ia]:n.LEQUAL,[_d]:n.EQUAL,[Na]:n.GEQUAL,[vd]:n.GREATER,[xd]:n.NOTEQUAL};function Re(L,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===To||x.magFilter===hr||x.magFilter===Ui||x.minFilter===Jt||x.minFilter===To||x.minFilter===hr||x.minFilter===Ui)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ue[x.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ue[x.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ue[x.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==hr&&x.minFilter!==Ui||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(L,x){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",R));const ie=x.source;let le=p.get(ie);le===void 0&&(le={},p.set(ie,le));const Me=z(x);if(Me!==L.__cacheKey){le[Me]===void 0&&(le[Me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),le[Me].usedTimes++;const Ae=le[L.__cacheKey];Ae!==void 0&&(le[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(x)),L.__cacheKey=Me,L.__webglTexture=le[Me].texture}return j}function F(L,x,j){return Math.floor(Math.floor(L/j)/x)}function K(L,x,j,ie){const Me=L.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,j,ie,x.data);else{Me.sort((Ye,Ne)=>Ye.start-Ne.start);let Ae=0;for(let Ye=1;Ye<Me.length;Ye++){const Ne=Me[Ae],Pe=Me[Ye],Ze=Ne.start+Ne.count,Ke=F(Pe.start,x.width,4),nt=F(Ne.start,x.width,4);Pe.start<=Ze+1&&Ke===nt&&F(Pe.start+Pe.count-1,x.width,4)===Ke?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ae,Me[Ae]=Pe)}Me.length=Ae+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ye=0,Ne=Me.length;Ye<Ne;Ye++){const Pe=Me[Ye],Ze=Math.floor(Pe.start/4),Ke=Math.ceil(Pe.count/4),nt=Ze%x.width,Z=Math.floor(Ze/x.width),Le=Ke,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(n.TEXTURE_2D,0,nt,Z,Le,ge,j,ie,x.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function he(L,x,j){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);const le=te(L,x),Me=x.source;t.bindTexture(ie,L.__webglTexture,n.TEXTURE0+j);const Ae=i.get(Me);if(Me.version!==Ae.__version||le===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ge=lt.getPrimaries(lt.workingColorSpace),De=x.colorSpace===gi?null:lt.getPrimaries(x.colorSpace),Be=x.colorSpace===gi||ge===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let _e=m(x.image,!1,s.maxTextureSize);_e=ze(x,_e);const Ce=r.convert(x.format,x.colorSpace),Ye=r.convert(x.type);let Ne=y(x.internalFormat,Ce,Ye,x.normalized,x.colorSpace,x.isVideoTexture);Re(ie,x);let Pe;const Ze=x.mipmaps,Ke=x.isVideoTexture!==!0,nt=Ae.__version===void 0||le===!0,Z=Me.dataReady,Le=S(x,_e);if(x.isDepthTexture)Ne=b(x.format===Fi,x.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ne,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ce,Ye,null));else if(x.isDataTexture)if(Ze.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Ze[0].width,Ze[0].height);for(let ge=0,De=Ze.length;ge<De;ge++)Pe=Ze[ge],Ke?Z&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Ce,Ye,Pe.data);x.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height),Z&&K(x,_e,Ce,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ce,Ye,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,Ze[0].width,Ze[0].height,_e.depth);for(let ge=0,De=Ze.length;ge<De;ge++)if(Pe=Ze[ge],x.format!==Nn)if(Ce!==null)if(Ke){if(Z)if(x.layerUpdates.size>0){const Be=hu(Pe.width,Pe.height,x.format,x.type);for(const ve of x.layerUpdates){const $e=Pe.data.subarray(ve*Be/Pe.data.BYTES_PER_ELEMENT,(ve+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ve,Pe.width,Pe.height,1,Ce,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,_e.depth,Ce,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ne,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,_e.depth,Ce,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ne,Pe.width,Pe.height,_e.depth,0,Ce,Ye,Pe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Ze[0].width,Ze[0].height);for(let ge=0,De=Ze.length;ge<De;ge++)Pe=Ze[ge],x.format!==Nn?Ce!==null?Ke?Z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Pe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Z&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Ce,Ye,Pe.data)}else if(x.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,_e.width,_e.height,_e.depth),Z)if(x.layerUpdates.size>0){const ge=hu(_e.width,_e.height,x.format,x.type);for(const De of x.layerUpdates){const Be=_e.data.subarray(De*ge/_e.data.BYTES_PER_ELEMENT,(De+1)*ge/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,_e.width,_e.height,1,Ce,Ye,Be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ye,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Ce,Ye,_e.data);else if(x.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,_e.width,_e.height,_e.depth),Z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ye,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Ce,Ye,_e.data);else if(x.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height);else{let ge=_e.width,De=_e.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ne,ge,De,0,Ce,Ye,null),ge>>=1,De>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),_e.parentNode!==ge){ge.appendChild(_e),f.add(x),ge.onpaint=De=>{const Be=De.changedElements;for(const ve of f)Be.includes(ve.image)&&(ve.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const Be=n.RGBA,ve=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,ve,$e,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Ke&&nt){const ge=we(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ge.width,ge.height)}for(let ge=0,De=Ze.length;ge<De;ge++)Pe=Ze[ge],Ke?Z&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce,Ye,Pe):t.texImage2D(n.TEXTURE_2D,ge,Ne,Ce,Ye,Pe);x.generateMipmaps=!1}else if(Ke){if(nt){const ge=we(_e);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ge.width,ge.height)}Z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ye,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Ce,Ye,_e);d(x)&&M(ie),Ae.__version=Me.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function ne(L,x,j){if(x.image.length!==6)return;const ie=te(L,x),le=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+j);const Me=i.get(le);if(le.version!==Me.__version||ie===!0){t.activeTexture(n.TEXTURE0+j);const Ae=lt.getPrimaries(lt.workingColorSpace),pe=x.colorSpace===gi?null:lt.getPrimaries(x.colorSpace),_e=x.colorSpace===gi||Ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Ye=x.image[0]&&x.image[0].isDataTexture,Ne=[];for(let ve=0;ve<6;ve++)!Ce&&!Ye?Ne[ve]=m(x.image[ve],!0,s.maxCubemapSize):Ne[ve]=Ye?x.image[ve].image:x.image[ve],Ne[ve]=ze(x,Ne[ve]);const Pe=Ne[0],Ze=r.convert(x.format,x.colorSpace),Ke=r.convert(x.type),nt=y(x.internalFormat,Ze,Ke,x.normalized,x.colorSpace),Z=x.isVideoTexture!==!0,Le=Me.__version===void 0||ie===!0,ge=le.dataReady;let De=S(x,Pe);Re(n.TEXTURE_CUBE_MAP,x);let Be;if(Ce){Z&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,nt,Pe.width,Pe.height);for(let ve=0;ve<6;ve++){Be=Ne[ve].mipmaps;for(let $e=0;$e<Be.length;$e++){const We=Be[$e];x.format!==Nn?Ze!==null?Z?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,0,0,We.width,We.height,Ze,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,nt,We.width,We.height,0,We.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,0,0,We.width,We.height,Ze,Ke,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e,nt,We.width,We.height,0,Ze,Ke,We.data)}}}else{if(Be=x.mipmaps,Z&&Le){Be.length>0&&De++;const ve=we(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ye){Z?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ne[ve].width,Ne[ve].height,Ze,Ke,Ne[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ne[ve].width,Ne[ve].height,0,Ze,Ke,Ne[ve].data);for(let $e=0;$e<Be.length;$e++){const At=Be[$e].image[ve].image;Z?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,0,0,At.width,At.height,Ze,Ke,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,nt,At.width,At.height,0,Ze,Ke,At.data)}}else{Z?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,Ke,Ne[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ze,Ke,Ne[ve]);for(let $e=0;$e<Be.length;$e++){const We=Be[$e];Z?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,0,0,Ze,Ke,We.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,$e+1,nt,Ze,Ke,We.image[ve])}}}d(x)&&M(n.TEXTURE_CUBE_MAP),Me.__version=le.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function C(L,x,j,ie,le,Me){const Ae=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),_e=y(j.internalFormat,Ae,pe,j.normalized,j.colorSpace),Ce=i.get(x),Ye=i.get(j);if(Ye.__renderTarget=x,!Ce.__hasExternalTextures){const Ne=Math.max(1,x.width>>Me),Pe=Math.max(1,x.height>>Me);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,Me,_e,Ne,Pe,x.depth,0,Ae,pe,null):t.texImage2D(le,Me,_e,Ne,Pe,0,Ae,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),be(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,le,Ye.__webglTexture,0,xe(x)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,le,Ye.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(L,x,j){if(n.bindRenderbuffer(n.RENDERBUFFER,L),x.depthBuffer){const ie=x.depthTexture,le=ie&&ie.isDepthTexture?ie.type:null,Me=b(x.stencilBuffer,le),Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(x),Me,x.width,x.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(x),Me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,L)}else{const ie=x.textures;for(let le=0;le<ie.length;le++){const Me=ie[le],Ae=r.convert(Me.format,Me.colorSpace),pe=r.convert(Me.type),_e=y(Me.internalFormat,Ae,pe,Me.normalized,Me.colorSpace);be(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(x),_e,x.width,x.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(x),_e,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_e,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function W(L,x,j){const ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(x.depthTexture);if(le.__renderTarget=x,(!le.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie){if(le.__webglInit===void 0&&(le.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),Re(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ce=r.convert(x.depthTexture.format),Ye=r.convert(x.depthTexture.type);let Ne;x.depthTexture.format===hi?Ne=n.DEPTH_COMPONENT24:x.depthTexture.format===Fi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,x.width,x.height,0,Ce,Ye,null)}}else J(x.depthTexture,0);const Me=le.__webglTexture,Ae=xe(x),pe=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,_e=x.depthTexture.format===Fi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)be(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Me,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Me,0);else if(x.depthTexture.format===Fi)be(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Me,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(L){const x=i.get(L),j=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",le)};ie.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=ie}if(L.depthTexture&&!x.__autoAllocateDepthBuffer)if(j)for(let ie=0;ie<6;ie++)W(x.__webglFramebuffer[ie],L,ie);else{const ie=L.texture.mipmaps;ie&&ie.length>0?W(x.__webglFramebuffer[0],L,0):W(x.__webglFramebuffer,L,0)}else if(j){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=n.createRenderbuffer(),P(x.__webglDepthbuffer[ie],L,!1);else{const le=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Me)}}else{const ie=L.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),P(x.__webglDepthbuffer,L,!1);else{const le=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(L,x,j){const ie=i.get(L);x!==void 0&&C(ie.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&q(L)}function V(L){const x=L.texture,j=i.get(L),ie=i.get(x);L.addEventListener("dispose",_);const le=L.textures,Me=L.isWebGLCubeRenderTarget===!0,Ae=le.length>1;if(Ae||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,o.memory.textures++),Me){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let _e=0;_e<x.mipmaps.length;_e++)j.__webglFramebuffer[pe][_e]=n.createFramebuffer()}else j.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)j.__webglFramebuffer[pe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let pe=0,_e=le.length;pe<_e;pe++){const Ce=i.get(le[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&be(L)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const _e=le[pe];j.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Ce=r.convert(_e.format,_e.colorSpace),Ye=r.convert(_e.type),Ne=y(_e.internalFormat,Ce,Ye,_e.normalized,_e.colorSpace,L.isXRRenderTarget===!0),Pe=xe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),P(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Re(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)C(j.__webglFramebuffer[pe][_e],L,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else C(j.__webglFramebuffer[pe],L,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);d(x)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,_e=le.length;pe<_e;pe++){const Ce=le[pe],Ye=i.get(Ce);let Ne=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),Re(Ne,Ce),C(j.__webglFramebuffer,L,Ce,n.COLOR_ATTACHMENT0+pe,Ne,0),d(Ce)&&M(Ne)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),Re(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)C(j.__webglFramebuffer[_e],L,x,n.COLOR_ATTACHMENT0,pe,_e);else C(j.__webglFramebuffer,L,x,n.COLOR_ATTACHMENT0,pe,0);d(x)&&M(pe),t.unbindTexture()}L.depthBuffer&&q(L)}function Q(L){const x=L.textures;for(let j=0,ie=x.length;j<ie;j++){const le=x[j];if(d(le)){const Me=w(L),Ae=i.get(le).__webglTexture;t.bindTexture(Me,Ae),M(Me),t.unbindTexture()}}}const de=[],H=[];function ae(L){if(L.samples>0){if(be(L)===!1){const x=L.textures,j=L.width,ie=L.height;let le=n.COLOR_BUFFER_BIT;const Me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(L),pe=x.length>1;if(pe)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const _e=L.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const Ye=i.get(x[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,j,ie,0,0,j,ie,le,n.NEAREST),c===!0&&(de.length=0,H.length=0,de.push(n.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(de.push(Me),H.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const Ye=i.get(x[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){const x=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function xe(L){return Math.min(s.maxSamples,L.samples)}function be(L){const x=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(L){const x=o.render.frame;h.get(L)!==x&&(h.set(L,x),L.update())}function ze(L,x){const j=L.colorSpace,ie=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==wr&&j!==gi&&(lt.getTransfer(j)===vt?(ie!==Nn||le!==gn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",j)),x}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=$,this.rebindTextures=oe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=C,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tf(n,e){function t(i,s=gi){let r;const o=lt.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Aa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ec)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mc)return n.BYTE;if(i===Sc)return n.SHORT;if(i===Bs)return n.UNSIGNED_SHORT;if(i===Ta)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===wc)return n.ALPHA;if(i===Tc)return n.RGB;if(i===Nn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Fi)return n.DEPTH_STENCIL;if(i===Ca)return n.RED;if(i===Pa)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===pr||i===mr||i===gr||i===_r)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===ko||i===Go||i===Vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===br||i===Zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ho||i===Wo)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qo)return r.COMPRESSED_R11_EAC;if(i===Yo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===br)return r.COMPRESSED_RG11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$o||i===Jo||i===Ko||i===Qo||i===jo||i===ea||i===ta||i===na||i===ia||i===sa||i===ra||i===oa||i===aa||i===la)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$o)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jo)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ea)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ta)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===na)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ia)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ra)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===aa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===la)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===ha||i===ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ca)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===da||i===fa||i===Er||i===pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zn({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zv extends wi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Yv,d={},M=t.getContextAttributes();let w=null,y=null;const b=[],S=[],R=new Se;let _=null,T=null;const A=new En;A.viewport=new It;const D=new En;D.viewport=new It;const O=[A,D],G=new qd;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=b[F];return K===void 0&&(K=new Ro,b[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=b[F];return K===void 0&&(K=new Ro,b[F]=K),K.getGripSpace()},this.getHand=function(F){let K=b[F];return K===void 0&&(K=new Ro,b[F]=K),K.getHandSpace()};function X(F){const K=S.indexOf(F.inputSource);if(K===-1)return;const he=b[K];he!==void 0&&(he.update(F.inputSource,F.frame,l||o),he.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let F=0;F<b.length;F++){const K=S[F];K!==null&&(S[F]=null,b[F].disconnect(K))}N=null,B=null,m.reset();for(const F in d)delete d[F];if(e.setRenderTarget(w),p=null,u=null,f=null,s=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const F=T.camera;F.fov=T.fov,F.zoom=T.zoom,F.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ne=null,C=null;M.depth&&(C=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=M.stencil?Fi:hi,ne=M.stencil?ks:Jn);const P={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(P),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Un(u.textureWidth,u.textureHeight,{format:Nn,type:gn,depthTexture:new Vs(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const he={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Un(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(F){for(let K=0;K<F.removed.length;K++){const he=F.removed[K],ne=S.indexOf(he);ne>=0&&(S[ne]=null,b[ne].disconnect(he))}for(let K=0;K<F.added.length;K++){const he=F.added[K];let ne=S.indexOf(he);if(ne===-1){for(let P=0;P<b.length;P++)if(P>=S.length){S.push(he),ne=P;break}else if(S[P]===null){S[P]=he,ne=P;break}if(ne===-1)break}const C=b[ne];C&&C.connect(he)}}const k=new I,ee=new I;function $(F,K,he){k.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const ne=k.distanceTo(ee),C=K.projectionMatrix.elements,P=he.projectionMatrix.elements,W=C[14]/(C[10]-1),q=C[14]/(C[10]+1),oe=(C[9]+1)/C[5],V=(C[9]-1)/C[5],Q=(C[8]-1)/C[0],de=(P[8]+1)/P[0],H=W*Q,ae=W*de,xe=ne/(-Q+de),be=xe*-Q;if(K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(be),F.translateZ(xe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),C[10]===-1)F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const U=W+xe,ze=q+xe,we=H-be,L=ae+(ne-be),x=oe*q/ze*U,j=V*q/ze*U;F.projectionMatrix.makePerspective(we,L,x,j,U,ze),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ue(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let K=F.near,he=F.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(he=m.depthFar)),G.near=D.near=A.near=K,G.far=D.far=A.far=he,(N!==G.near||B!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,B=G.far),G.layers.mask=F.layers.mask|6,A.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;const ne=F.parent,C=G.cameras;ue(G,ne);for(let P=0;P<C.length;P++)ue(C[P],ne);C.length===2?$(G,A,D):G.projectionMatrix.copy(A.projectionMatrix),T===null&&F.isPerspectiveCamera&&(T={camera:F,fov:F.fov,zoom:F.zoom}),fe(F,G,ne)};function fe(F,K,he){he===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(he.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ar*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(F){c=F,u!==null&&(u.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(F){return d[F]};let ye=null;function Re(F,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ne=!1;he.length!==G.cameras.length&&(G.cameras.length=0,ne=!0);for(let q=0;q<he.length;q++){const oe=he[q];let V=null;if(p!==null)V=p.getViewport(oe);else{const de=f.getViewSubImage(u,oe);V=de.viewport,q===0&&(e.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(y))}let Q=O[q];Q===void 0&&(Q=new En,Q.layers.enable(q),Q.viewport=new It,O[q]=Q),Q.matrix.fromArray(oe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(oe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(V.x,V.y,V.width,V.height),q===0&&(G.matrix.copy(Q.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ne===!0&&G.cameras.push(Q)}const C=s.enabledFeatures;if(C&&C.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const q=f.getDepthInformation(he[0]);q&&q.isValid&&q.texture&&m.init(q,s.renderState)}if(C&&C.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let q=0;q<he.length;q++){const oe=he[q].camera;if(oe){let V=d[oe];V||(V=new Fc,d[oe]=V);const Q=f.getCameraImage(oe);V.sourceTexture=Q}}}}for(let he=0;he<b.length;he++){const ne=S[he],C=b[he];ne!==null&&C!==void 0&&C.update(ne,K,l||o)}ye&&ye(F,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const te=new $d;te.setAnimationLoop(Re),this.setAnimationLoop=function(F){ye=F},this.dispose=function(){}}}const $v=new ft,nf=new et;nf.set(-1,0,0,0,1,0,0,0,1);function Jv(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Bd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,w,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const S=b.program;i.uniformBlockBinding(y,S)}function l(y,b){let S=s[y.id];S===void 0&&(m(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",M));const R=b.program;i.updateUBOMapping(y,R);const _=e.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){const b=f();y.__bindingPointIndex=b;const S=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=s[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,T=S.length;_<T;_++){const A=S[_];if(Array.isArray(A))for(let D=0,O=A.length;D<O;D++)p(A[D],_,D,R);else p(A,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,S,R){if(v(y,b,S,R)===!0){const _=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let D=0;D<T.length;D++){const O=T[D],G=d(O);g(O,y.__data,A),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(A+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,b,S){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,S)}function v(y,b,S,R){const _=y.value,T=b+"_"+S;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const A=R[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(y){const b=y.uniforms;let S=0;const R=16;for(let T=0,A=b.length;T<A;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let O=0,G=D.length;O<G;O++){const N=D[O],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,z=B.length;X<z;X++){const J=B[X],k=d(J),ee=S%R,$=ee%k.boundary,ue=ee+$;S+=$,ue!==0&&R-ue<k.storage&&(S+=R-ue),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=k.storage}}}const _=S%R;return _>0&&(S+=R-_),y.__size=S,y.__cache={},this}function d(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):je("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){const b=y.target;b.removeEventListener("dispose",M);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}const Qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function jv(){return ii===null&&(ii=new Lc(Qv,16,16,Hi,Kn),ii.name="DFG_LUT",ii.minFilter=Jt,ii.magFilter=Jt,ii.wrapS=oi,ii.wrapT=oi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class sf{constructor(e={}){const{canvas:t=Sd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([Da,La,Pa]),d=new Set([gn,Jn,Bs,ks,Aa,Ra]),M=new Uint32Array(4),w=new Int32Array(4),y=new I;let b=null,S=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1,O=null,G=null,N=null,B=null;this._outputColorSpace=rn;let X=0,z=0,J=null,k=-1,ee=null;const $=new It,ue=new It;let fe=null;const ye=new ot(0);let Re=0,te=t.width,F=t.height,K=1,he=null,ne=null;const C=new It(0,0,te,F),P=new It(0,0,te,F);let W=!1;const q=new za;let oe=!1,V=!1;const Q=new ft,de=new I,H=new It,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function be(){return J===null?K:1}let U=i;function ze(E,Y){return t.getContext(E,Y)}let we,L,x,j,ie,le,Me,Ae,pe,_e,Ce,Ye,Ne,Pe,Ze,Ke,nt,Z,Le,ge,De,Be,ve;try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ea}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",kn,!1),U===null){const Y="webgl2";if(U=ze(Y,E),U===null)throw ze(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(E){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),ct("WebGLRenderer: "+E.message),E}function $e(){we=new e_(U),we.init(),De=new tf(U,we),L=new Wg(U,we,e,De),x=new Hv(U,we),L.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),G=U.createFramebuffer(),N=U.createFramebuffer(),B=U.createFramebuffer(),j=new i_(U),ie=new Cv,le=new Wv(U,we,x,ie,L,De,j),Me=new jg(A),Ae=new rm(U),Be=new Vg(U,Ae),pe=new t_(U,Ae,j,Be),_e=new r_(U,pe,Ae,Be,j),Z=new s_(U,L,le),Ze=new Xg(ie),Ce=new Rv(A,Me,we,L,Be,Ze),Ye=new Jv(A,ie),Ne=new Lv,Pe=new Ov(we),nt=new Gg(A,Me,x,_e,g,c),Ke=new Vv(A,_e,L),ve=new Kv(U,j,L,x),Le=new Hg(U,we,j),ge=new n_(U,we,j),j.programs=Ce.programs,A.capabilities=L,A.extensions=we,A.properties=ie,A.renderLists=Ne,A.shadowMap=Ke,A.state=x,A.info=j}v!==gn&&(T=new a_(v,t.width,t.height,a,s,r));const We=new Zv(A,U);this.xr=We,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=we.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=we.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(te,F,!1))},this.getSize=function(E){return E.set(te,F)},this.setSize=function(E,Y,ce=!0){if(We.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,F=Y,t.width=Math.floor(E*K),t.height=Math.floor(Y*K),ce===!0&&(t.style.width=E+"px",t.style.height=Y+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,Y)},this.getDrawingBufferSize=function(E){return E.set(te*K,F*K).floor()},this.setDrawingBufferSize=function(E,Y,ce){te=E,F=Y,K=ce,t.width=Math.floor(E*ce),t.height=Math.floor(Y*ce),this.setViewport(0,0,E,Y)},this.setEffects=function(E){if(v===gn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let Y=0;Y<E.length;Y++)if(E[Y].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,Y,ce,se){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,Y,ce,se),x.viewport($.copy(C).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(P)},this.setScissor=function(E,Y,ce,se){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,Y,ce,se),x.scissor(ue.copy(P).multiplyScalar(K).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(E){x.setScissorTest(W=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(E=!0,Y=!0,ce=!0){let se=0;if(E){let re=!1;if(J!==null){const Oe=J.texture.format;re=m.has(Oe)}if(re){const Oe=J.texture.type,Ge=d.has(Oe),Ue=nt.getClearColor(),Ve=nt.getClearAlpha(),Xe=Ue.r,st=Ue.g,at=Ue.b;Ge?(M[0]=Xe,M[1]=st,M[2]=at,M[3]=Ve,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=Xe,w[1]=st,w[2]=at,w[3]=Ve,U.clearBufferiv(U.COLOR,0,w))}else se|=U.COLOR_BUFFER_BIT}Y&&(se|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&U.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),nt.dispose(),Ne.dispose(),Pe.dispose(),ie.dispose(),Me.dispose(),_e.dispose(),Be.dispose(),ve.dispose(),Ce.dispose(),We.dispose(),We.removeEventListener("sessionstart",ph),We.removeEventListener("sessionend",mh),$i.stop()};function At(E){E.preventDefault(),Zl("WebGLRenderer: Context Lost."),D=!0}function gt(){Zl("WebGLRenderer: Context Restored."),D=!1;const E=j.autoReset,Y=Ke.enabled,ce=Ke.autoUpdate,se=Ke.needsUpdate,re=Ke.type;$e(),j.autoReset=E,Ke.enabled=Y,Ke.autoUpdate=ce,Ke.needsUpdate=se,Ke.type=re}function kn(E){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){const Y=E.target;Y.removeEventListener("dispose",ei),Cf(Y)}function Cf(E){Pf(E),ie.remove(E)}function Pf(E){const Y=ie.get(E).programs;Y!==void 0&&(Y.forEach(function(ce){Ce.releaseProgram(ce)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,Y,ce,se,re,Oe){Y===null&&(Y=ae);const Ge=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ue=If(E,Y,ce,se,re);x.setMaterial(se,Ge);let Ve=ce.index,Xe=1;if(se.wireframe===!0){if(Ve=pe.getWireframeAttribute(ce),Ve===void 0)return;Xe=2}const st=ce.drawRange,at=ce.attributes.position;let He=st.start*Xe,_t=(st.start+st.count)*Xe;Oe!==null&&(He=Math.max(He,Oe.start*Xe),_t=Math.min(_t,(Oe.start+Oe.count)*Xe)),Ve!==null?(He=Math.max(He,0),_t=Math.min(_t,Ve.count)):at!=null&&(He=Math.max(He,0),_t=Math.min(_t,at.count));const kt=_t-He;if(kt<0||kt===1/0)return;Be.setup(re,se,Ue,ce,Ve);let Lt,wt=Le;if(Ve!==null&&(Lt=Ae.get(Ve),wt=ge,wt.setIndex(Lt)),re.isMesh)se.wireframe===!0?(x.setLineWidth(se.wireframeLinewidth*be()),wt.setMode(U.LINES)):wt.setMode(U.TRIANGLES);else if(re.isLine){let tn=se.linewidth;tn===void 0&&(tn=1),x.setLineWidth(tn*be()),re.isLineSegments?wt.setMode(U.LINES):re.isLineLoop?wt.setMode(U.LINE_LOOP):wt.setMode(U.LINE_STRIP)}else re.isPoints?wt.setMode(U.POINTS):re.isSprite&&wt.setMode(U.TRIANGLES);if(re.isBatchedMesh)if(we.get("WEBGL_multi_draw"))wt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const tn=re._multiDrawStarts,ke=re._multiDrawCounts,an=re._multiDrawCount,dt=Ve?Ae.get(Ve).bytesPerElement:1,Tn=ie.get(se).currentProgram.getUniforms();for(let ti=0;ti<an;ti++)Tn.setValue(U,"_gl_DrawID",ti),wt.render(tn[ti]/dt,ke[ti])}else if(re.isInstancedMesh)wt.renderInstances(He,kt,re.count);else if(ce.isInstancedBufferGeometry){const tn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,tn);wt.renderInstances(He,kt,ke)}else wt.render(He,kt)};function fh(E,Y,ce,se){O!==null&&E.isNodeMaterial&&O.setObject(se,E),oe===!0&&Ze.setState(E,ce,!1),E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,qr(E,Y,se),E.side=Gi,E.needsUpdate=!0,qr(E,Y,se),E.side=Pn):qr(E,Y,se)}this.compile=function(E,Y,ce=null){ce===null&&(ce=E),O!==null&&O.renderStart(E,Y,ce),S=Pe.get(ce),S.init(Y),_.push(S),ce.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(S.pushLight(re),re.castShadow&&S.pushShadow(re))}),E!==ce&&E.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(S.pushLight(re),re.castShadow&&S.pushShadow(re))}),S.setupLights(),O!==null&&O.updateLights(S.state.lightsArray),V=this.localClippingEnabled,oe=Ze.init(this.clippingPlanes,V),oe===!0&&Ze.setGlobalState(this.clippingPlanes,Y),O!==null&&Ke.render(S.state.shadowsArray,ce,Y);const se=new Set;return E.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Oe=re.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Ue=Oe[Ge];fh(Ue,ce,Y,re),se.add(Ue)}else fh(Oe,ce,Y,re),se.add(Oe)}),S=_.pop(),O!==null&&O.renderEnd(),se},this.compileAsync=function(E,Y,ce=null){const se=this.compile(E,Y,ce);return new Promise(re=>{function Oe(){if(se.forEach(function(Ge){const Ve=ie.get(Ge).currentProgram;(Ve===void 0||Ve.isReady())&&se.delete(Ge)}),se.size===0){re(E);return}setTimeout(Oe,10)}we.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let sl=null;function Lf(E){sl&&sl(E)}function ph(){$i.stop()}function mh(){$i.start()}const $i=new $d;$i.setAnimationLoop(Lf),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(E){sl=E,We.setAnimationLoop(E),E===null?$i.stop():$i.start()},We.addEventListener("sessionstart",ph),We.addEventListener("sessionend",mh),this.render=function(E,Y){if(Y!==void 0&&Y.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(E,Y);const ce=We.enabled===!0&&We.isPresenting===!0,se=T!==null&&(J===null||ce)&&T.begin(A,J);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,Y,J),S=Pe.get(E,_.length),S.init(Y),S.state.textureUnits=le.getTextureUnits(),_.push(S),Q.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),q.setFromProjectionMatrix(Q,qn,Y.reversedDepth),V=this.localClippingEnabled,oe=Ze.init(this.clippingPlanes,V),b=Ne.get(E,R.length),b.init(),R.push(b),We.enabled===!0&&We.isPresenting===!0){const Ge=A.xr.getDepthSensingMesh();Ge!==null&&rl(Ge,Y,-1/0,A.sortObjects)}rl(E,Y,0,A.sortObjects),b.finish(),O!==null&&O.updateLights(S.state.lightsArray),A.sortObjects===!0&&b.sort(he,ne),xe=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,xe&&nt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ze.beginShadows();const re=S.state.shadowsArray;if(Ke.render(re,E,Y),oe===!0&&Ze.endShadows(),(se&&T.hasRenderPass())===!1){const Ge=b.opaque,Ue=b.transmissive;if(S.setupLights(),Y.isArrayCamera){const Ve=Y.cameras;if(Ue.length>0)for(let Xe=0,st=Ve.length;Xe<st;Xe++){const at=Ve[Xe];_h(Ge,Ue,E,at)}xe&&nt.render(E);for(let Xe=0,st=Ve.length;Xe<st;Xe++){const at=Ve[Xe];gh(b,E,at,at.viewport)}}else Ue.length>0&&_h(Ge,Ue,E,Y),xe&&nt.render(E),gh(b,E,Y)}J!==null&&z===0&&(le.updateMultisampleRenderTarget(J),le.updateRenderTargetMipmap(J)),se&&T.end(A),E.isScene===!0&&E.onAfterRender(A,E,Y),Be.resetDefaultState(),k=-1,ee=null,_.pop(),_.length>0?(S=_[_.length-1],le.setTextureUnits(S.state.textureUnits),oe===!0&&Ze.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,O!==null&&O.renderEnd()};function rl(E,Y,ce,se){if(E.visible===!1)return;if(E.layers.test(Y.layers)){if(E.isGroup)ce=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Y);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(q)){se&&H.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const Ge=_e.update(E),Ue=E.material;Ue.visible&&b.push(E,Ge,Ue,ce,H.z,null,Y)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(q))){const Ge=_e.update(E),Ue=E.material;if(se&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),H.copy(E.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),H.copy(Ge.boundingSphere.center)),H.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Ue)){const Ve=Ge.groups;for(let Xe=0,st=Ve.length;Xe<st;Xe++){const at=Ve[Xe],He=Ue[at.materialIndex];He&&He.visible&&b.push(E,Ge,He,ce,H.z,at,Y)}}else Ue.visible&&b.push(E,Ge,Ue,ce,H.z,null,Y)}}const Oe=E.children;for(let Ge=0,Ue=Oe.length;Ge<Ue;Ge++)rl(Oe[Ge],Y,ce,se)}function gh(E,Y,ce,se){const{opaque:re,transmissive:Oe,transparent:Ge}=E;S.setupLightsView(ce),oe===!0&&Ze.setGlobalState(A.clippingPlanes,ce),se&&x.viewport($.copy(se)),re.length>0&&Xr(re,Y,ce),Oe.length>0&&Xr(Oe,Y,ce),Ge.length>0&&Xr(Ge,Y,ce),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _h(E,Y,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[se.id]===void 0){const He=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[se.id]=new Un(1,1,{generateMipmaps:!0,type:He?Kn:gn,minFilter:Ui,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Oe=S.state.transmissionRenderTarget[se.id],Ge=se.viewport||$;Oe.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget(),Ve=A.getActiveCubeFace(),Xe=A.getActiveMipmapLevel();A.setRenderTarget(Oe),A.getClearColor(ye),Re=A.getClearAlpha(),Re<1&&A.setClearColor(16777215,.5),A.clear(),xe&&nt.render(ce);const st=A.toneMapping;A.toneMapping=Yn;const at=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),S.setupLightsView(se),oe===!0&&Ze.setGlobalState(A.clippingPlanes,se),Xr(E,ce,se),le.updateMultisampleRenderTarget(Oe),le.updateRenderTargetMipmap(Oe),we.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let _t=0,kt=Y.length;_t<kt;_t++){const Lt=Y[_t],{object:wt,geometry:tn,material:ke,group:an}=Lt;if(ke.side===Pn&&wt.layers.test(se.layers)){const dt=ke.side;ke.side=dn,ke.needsUpdate=!0,vh(wt,ce,se,tn,ke,an),ke.side=dt,ke.needsUpdate=!0,He=!0}}He===!0&&(le.updateMultisampleRenderTarget(Oe),le.updateRenderTargetMipmap(Oe))}A.setRenderTarget(Ue,Ve,Xe),A.setClearColor(ye,Re),at!==void 0&&(se.viewport=at),A.toneMapping=st}function Xr(E,Y,ce){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let re=0,Oe=E.length;re<Oe;re++){const Ge=E[re],{object:Ue,geometry:Ve,group:Xe}=Ge;let st=Ge.material;st.allowOverride===!0&&se!==null&&(st=se),Ue.layers.test(ce.layers)&&vh(Ue,Y,ce,Ve,st,Xe)}}function vh(E,Y,ce,se,re,Oe){O!==null&&re.isNodeMaterial&&O.setObject(E,re),E.onBeforeRender(A,Y,ce,se,re,Oe),E.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),re.onBeforeRender(A,Y,ce,se,E,Oe),re.transparent===!0&&re.side===Pn&&re.forceSinglePass===!1?(re.side=dn,re.needsUpdate=!0,A.renderBufferDirect(ce,Y,se,re,E,Oe),re.side=Gi,re.needsUpdate=!0,A.renderBufferDirect(ce,Y,se,re,E,Oe),re.side=Pn):A.renderBufferDirect(ce,Y,se,re,E,Oe),E.onAfterRender(A,Y,ce,se,re,Oe)}function qr(E,Y,ce){Y.isScene!==!0&&(Y=ae);const se=ie.get(E),re=S.state.lights,Oe=S.state.shadowsArray,Ge=re.state.version,Ue=Ce.getParameters(E,re.state,Oe,Y,ce,S.state.lightProbeGridArray),Ve=Ce.getProgramCacheKey(Ue);let Xe=se.programs;se.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?Y.environment:null,se.fog=Y.fog;const st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;se.envMap=Me.get(E.envMap||se.environment,st),se.envMapRotation=se.environment!==null&&E.envMap===null?Y.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",ei),Xe=new Map,se.programs=Xe);let at=Xe.get(Ve);if(at!==void 0){if(se.currentProgram===at&&se.lightsStateVersion===Ge)return yh(E,Ue),at}else Ue.uniforms=Ce.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,ce,Ue),E.onBeforeCompile(Ue,A),at=Ce.acquireProgram(Ue,Ve),Xe.set(Ve,at),se.uniforms=Ue.uniforms;const He=se.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=Ze.uniform),yh(E,Ue),se.needsLights=Uf(E),se.lightsStateVersion=Ge,se.needsLights&&(He.ambientLightColor.value=re.state.ambient,He.lightProbe.value=re.state.probe,He.sunLights.value=re.state.sun,He.sunLightShadows.value=re.state.sunShadow,He.directionalLights.value=re.state.directional,He.directionalLightShadows.value=re.state.directionalShadow,He.spotLights.value=re.state.spot,He.spotLightShadows.value=re.state.spotShadow,He.rectAreaLights.value=re.state.rectArea,He.ltc_1.value=re.state.rectAreaLTC1,He.ltc_2.value=re.state.rectAreaLTC2,He.pointLights.value=re.state.point,He.pointLightShadows.value=re.state.pointShadow,He.hemisphereLights.value=re.state.hemi,He.sunShadowMatrix.value=re.state.sunShadowMatrix,He.sunShadowCascade.value=re.state.sunShadowCascade,He.directionalShadowMatrix.value=re.state.directionalShadowMatrix,He.spotLightMatrix.value=re.state.spotLightMatrix,He.spotLightMap.value=re.state.spotLightMap,He.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=S.state.lightProbeGridArray.length>0,se.currentProgram=at,se.uniformsList=null,at}function xh(E){if(E.uniformsList===null){const Y=E.currentProgram.getUniforms();E.uniformsList=Co.seqWithValue(Y.seq,E.uniforms)}return E.uniformsList}function yh(E,Y){const ce=ie.get(E);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function Df(E,Y){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(Y.matrixWorld);for(let ce=0,se=E.length;ce<se;ce++){const re=E[ce];if(re.texture!==null&&re.boundingBox.containsPoint(y))return re}return null}function If(E,Y,ce,se,re){Y.isScene!==!0&&(Y=ae),le.resetTextureUnits();const Oe=Y.fog,Ge=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Y.environment:null,Ue=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:lt.workingColorSpace,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Xe=Me.get(se.envMap||Ge,Ve),st=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,at=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),He=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,kt=!!ce.morphAttributes.color;let Lt=Yn;se.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=A.toneMapping);const wt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,tn=wt!==void 0?wt.length:0,ke=ie.get(se),an=S.state.lights;if(oe===!0&&(V===!0||E!==ee)){const Rt=E===ee&&se.id===k;Ze.setState(se,E,Rt)}let dt=!1;se.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==an.state.version||ke.outputColorSpace!==Ue||re.isBatchedMesh&&ke.batching===!1||!re.isBatchedMesh&&ke.batching===!0||re.isBatchedMesh&&ke.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&ke.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||re.isInstancedMesh&&ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ke.instancingMorph===!1&&re.morphTexture!==null||ke.envMap!==Xe||se.fog===!0&&ke.fog!==Oe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ze.numPlanes||ke.numIntersection!==Ze.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==at||ke.morphTargets!==He||ke.morphNormals!==_t||ke.morphColors!==kt||ke.toneMapping!==Lt||ke.morphTargetsCount!==tn||!!ke.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,ke.__version=se.version);let Tn=ke.currentProgram;dt===!0&&(Tn=qr(se,Y,re),O&&se.isNodeMaterial&&O.onUpdateProgram(se,Tn,ke));let ti=!1,Ai=!1,fs=!1;const St=Tn.getUniforms(),Ot=ke.uniforms;if(x.useProgram(Tn.program)&&(ti=!0,Ai=!0,fs=!0),se.id!==k&&(k=se.id,Ai=!0),ke.needsLights){const Rt=Df(S.state.lightProbeGridArray,re);ke.lightProbeGrid!==Rt&&(ke.lightProbeGrid=Rt,Ai=!0)}if(ti||ee!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(U,"projectionMatrix",E.projectionMatrix),St.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ci=St.map.cameraPosition;Ci!==void 0&&Ci.setValue(U,de.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&St.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,Ai=!0,fs=!0)}if(ke.needsLights&&(an.state.sunShadowMap.length>0&&St.setValue(U,"sunShadowMap",an.state.sunShadowMap,le),an.state.directionalShadowMap.length>0&&St.setValue(U,"directionalShadowMap",an.state.directionalShadowMap,le),an.state.spotShadowMap.length>0&&St.setValue(U,"spotShadowMap",an.state.spotShadowMap,le),an.state.pointShadowMap.length>0&&St.setValue(U,"pointShadowMap",an.state.pointShadowMap,le)),re.isSkinnedMesh){St.setOptional(U,re,"bindMatrix"),St.setOptional(U,re,"bindMatrixInverse");const Rt=re.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),St.setValue(U,"boneTexture",Rt.boneTexture,le))}re.isBatchedMesh&&(St.setOptional(U,re,"batchingTexture"),St.setValue(U,"batchingTexture",re._matricesTexture,le),St.setOptional(U,re,"batchingIdTexture"),St.setValue(U,"batchingIdTexture",re._indirectTexture,le),St.setOptional(U,re,"batchingColorTexture"),re._colorsTexture!==null&&St.setValue(U,"batchingColorTexture",re._colorsTexture,le));const Ri=ce.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Z.update(re,ce,Tn),(Ai||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,St.setValue(U,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Y.environment!==null&&(Ot.envMapIntensity.value=Y.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=jv()),Ai){if(St.setValue(U,"toneMappingExposure",A.toneMappingExposure),ke.needsLights&&Nf(Ot,fs),Oe&&se.fog===!0&&Ye.refreshFogUniforms(Ot,Oe),Ye.refreshMaterialUniforms(Ot,se,K,F,S.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.lightProbeGrid){const Rt=ke.lightProbeGrid;Ot.probesSH.value=Rt.texture,Ot.probesMin.value.copy(Rt.boundingBox.min),Ot.probesMax.value.copy(Rt.boundingBox.max),Ot.probesResolution.value.copy(Rt.resolution)}Co.upload(U,xh(ke),Ot,le)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Co.upload(U,xh(ke),Ot,le),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&St.setValue(U,"center",re.center),St.setValue(U,"modelViewMatrix",re.modelViewMatrix),St.setValue(U,"normalMatrix",re.normalMatrix),St.setValue(U,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Rt=se.uniformsGroups;for(let Ci=0,ps=Rt.length;Ci<ps;Ci++){const Sh=Rt[Ci];ve.update(Sh,Tn),ve.bind(Sh,Tn)}}return Tn}function Nf(E,Y){E.ambientLightColor.needsUpdate=Y,E.lightProbe.needsUpdate=Y,E.sunLights.needsUpdate=Y,E.sunLightShadows.needsUpdate=Y,E.directionalLights.needsUpdate=Y,E.directionalLightShadows.needsUpdate=Y,E.pointLights.needsUpdate=Y,E.pointLightShadows.needsUpdate=Y,E.spotLights.needsUpdate=Y,E.spotLightShadows.needsUpdate=Y,E.rectAreaLights.needsUpdate=Y,E.hemisphereLights.needsUpdate=Y}function Uf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(E,Y,ce){const se=ie.get(E);se.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ie.get(E.texture).__webglTexture=Y,ie.get(E.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Y){const ce=ie.get(E);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(E,Y=0,ce=0){J=E,X=Y,z=ce;let se=null,re=!1,Oe=!1;if(E){const Ue=ie.get(E);if(Ue.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Ue.__webglFramebuffer),$.copy(E.viewport),ue.copy(E.scissor),fe=E.scissorTest,x.viewport($),x.scissor(ue),x.setScissorTest(fe),k=-1;return}else if(Ue.__webglFramebuffer===void 0)le.setupRenderTarget(E);else if(Ue.__hasExternalTextures)le.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const st=E.depthTexture;if(Ue.__boundDepthTexture!==st){if(st!==null&&ie.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(E)}}const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Oe=!0);const Xe=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?se=Xe[Y][ce]:se=Xe[Y],re=!0):E.samples>0&&le.useMultisampledRTT(E)===!1?se=ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Xe)?se=Xe[ce]:se=Xe,$.copy(E.viewport),ue.copy(E.scissor),fe=E.scissorTest}else $.copy(C).multiplyScalar(K).floor(),ue.copy(P).multiplyScalar(K).floor(),fe=W;if(ce!==0&&(se=G),x.bindFramebuffer(U.FRAMEBUFFER,se)&&x.drawBuffers(E,se),x.viewport($),x.scissor(ue),x.setScissorTest(fe),re){const Ue=ie.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,ce)}else if(Oe){const Ue=Y;for(let Ve=0;Ve<E.textures.length;Ve++){const Xe=ie.get(E.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,ce,Ue)}}else if(E!==null&&ce!==0){const Ue=ie.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ue.__webglTexture,ce)}k=-1};function Mh(E){const Y=ie.get(E);return(Y.__readFormat!==E.format||Y.__readType!==E.type)&&(Y.__readFormat=E.format,Y.__readType=E.type,Y.__formatReadable=L.textureFormatReadable(E.format),Y.__typeReadable=L.textureTypeReadable(E.type)),Y}this.readRenderTargetPixels=function(E,Y,ce,se,re,Oe,Ge,Ue=0){if(!(E&&E.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){x.bindFramebuffer(U.FRAMEBUFFER,Ve);try{const Xe=E.textures[Ue],st=Xe.format,at=Xe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ue);const He=Mh(Xe);if(He.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=E.width-se&&ce>=0&&ce<=E.height-re&&U.readPixels(Y,ce,se,re,De.convert(st),De.convert(at),Oe)}finally{const Xe=J!==null?ie.get(J).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(E,Y,ce,se,re,Oe,Ge,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(Y>=0&&Y<=E.width-se&&ce>=0&&ce<=E.height-re){x.bindFramebuffer(U.FRAMEBUFFER,Ve);const Xe=E.textures[Ue],st=Xe.format,at=Xe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ue);const He=Mh(Xe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,Oe.byteLength,U.STREAM_READ),U.readPixels(Y,ce,se,re,De.convert(st),De.convert(at),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const kt=J!==null?ie.get(J).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,kt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gf(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Oe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(_t),U.deleteSync(Lt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Y=null,ce=0){const se=Math.pow(2,-ce),re=Math.floor(E.image.width*se),Oe=Math.floor(E.image.height*se),Ge=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;le.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,ce,0,0,Ge,Ue,re,Oe),x.unbindTexture()},this.copyTextureToTexture=function(E,Y,ce=null,se=null,re=0,Oe=0){let Ge,Ue,Ve,Xe,st,at,He,_t,kt;const Lt=E.isCompressedTexture?E.mipmaps[Oe]:E.image;if(ce!==null)Ge=ce.max.x-ce.min.x,Ue=ce.max.y-ce.min.y,Ve=ce.isBox3?ce.max.z-ce.min.z:1,Xe=ce.min.x,st=ce.min.y,at=ce.isBox3?ce.min.z:0;else{const Ot=Math.pow(2,-re);Ge=Math.floor(Lt.width*Ot),Ue=Math.floor(Lt.height*Ot),E.isDataArrayTexture?Ve=Lt.depth:E.isData3DTexture?Ve=Math.floor(Lt.depth*Ot):Ve=1,Xe=0,st=0,at=0}se!==null?(He=se.x,_t=se.y,kt=se.z):(He=0,_t=0,kt=0);const wt=De.convert(Y.format),tn=De.convert(Y.type);let ke;Y.isData3DTexture?(le.setTexture3D(Y,0),ke=U.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(le.setTexture2DArray(Y,0),ke=U.TEXTURE_2D_ARRAY):(le.setTexture2D(Y,0),ke=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const an=x.getParameter(U.UNPACK_ROW_LENGTH),dt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=x.getParameter(U.UNPACK_SKIP_PIXELS),ti=x.getParameter(U.UNPACK_SKIP_ROWS),Ai=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Xe),x.pixelStorei(U.UNPACK_SKIP_ROWS,st),x.pixelStorei(U.UNPACK_SKIP_IMAGES,at);const fs=E.isDataArrayTexture||E.isData3DTexture,St=Y.isDataArrayTexture||Y.isData3DTexture;if(E.isDepthTexture){const Ot=ie.get(E),Ri=ie.get(Y),Rt=ie.get(Ot.__renderTarget),Ci=ie.get(Ri.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Rt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let ps=0;ps<Ve;ps++)fs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ie.get(E).__webglTexture,re,at+ps),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ie.get(Y).__webglTexture,Oe,kt+ps)),U.blitFramebuffer(Xe,st,Ge,Ue,He,_t,Ge,Ue,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(re!==0||E.isRenderTargetTexture||ie.has(E)){const Ot=ie.get(E),Ri=ie.get(Y);x.bindFramebuffer(U.READ_FRAMEBUFFER,N),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Rt=0;Rt<Ve;Rt++)fs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,re,at+Rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,re),St?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ri.__webglTexture,Oe,kt+Rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ri.__webglTexture,Oe),re!==0?U.blitFramebuffer(Xe,st,Ge,Ue,He,_t,Ge,Ue,U.COLOR_BUFFER_BIT,U.NEAREST):St?U.copyTexSubImage3D(ke,Oe,He,_t,kt+Rt,Xe,st,Ge,Ue):U.copyTexSubImage2D(ke,Oe,He,_t,Xe,st,Ge,Ue);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(ke,Oe,He,_t,kt,Ge,Ue,Ve,wt,tn,Lt.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(ke,Oe,He,_t,kt,Ge,Ue,Ve,wt,Lt.data):U.texSubImage3D(ke,Oe,He,_t,kt,Ge,Ue,Ve,wt,tn,Lt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Oe,He,_t,Ge,Ue,wt,tn,Lt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Oe,He,_t,Lt.width,Lt.height,wt,Lt.data):U.texSubImage2D(U.TEXTURE_2D,Oe,He,_t,Ge,Ue,wt,tn,Lt);x.pixelStorei(U.UNPACK_ROW_LENGTH,an),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),x.pixelStorei(U.UNPACK_SKIP_ROWS,ti),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ai),Oe===0&&Y.generateMipmaps&&U.generateMipmap(ke),x.unbindTexture()},this.initRenderTarget=function(E){ie.get(E).__webglFramebuffer===void 0&&le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){X=0,z=0,J=null,x.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const jn=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:wa,AddEquation:ns,AddOperation:hd,AdditiveBlending:Wl,AgXToneMapping:vc,AlphaFormat:wc,AlwaysCompare:yd,AlwaysDepth:Do,AlwaysStencilFunc:pd,ArcCurve:Ld,ArrayCamera:qd,BackSide:dn,BasicDepthPacking:dd,Box3:qi,BoxGeometry:Ti,BufferAttribute:Fn,BufferGeometry:Bt,ByteType:Mc,Camera:Xc,CanvasTexture:Uc,CatmullRomCurve3:zc,CineonToneMapping:gc,CircleGeometry:Ba,ClampToEdgeWrapping:oi,Color:ot,ColorManagement:lt,ConeGeometry:hs,ConstantAlphaFactor:ad,ConstantColorFactor:rd,Controls:Zd,CubeCamera:Xd,CubeDepthTexture:Pd,CubeReflectionMapping:Vi,CubeRefractionMapping:as,CubeTexture:Nc,CubeUVReflectionMapping:Nr,CubicBezierCurve:Bc,CubicBezierCurve3:Dd,CullFaceBack:Hl,CullFaceFront:Hu,CullFaceNone:Vu,Curve:Qn,CurvePath:Nd,CustomBlending:Xu,CustomToneMapping:_c,CylinderGeometry:Fr,Data3DTexture:Td,DataArrayTexture:Rc,DataTexture:Lc,DepthFormat:hi,DepthStencilFormat:Fi,DepthTexture:Vs,DirectionalLight:qc,DoubleSide:Pn,DstAlphaFactor:ed,DstColorFactor:nd,EllipseCurve:Ga,EqualCompare:_d,EqualDepth:No,EquirectangularReflectionMapping:Eo,EquirectangularRefractionMapping:wo,Euler:Ei,EventDispatcher:wi,ExternalTexture:Fc,ExtrudeGeometry:Ys,Float32BufferAttribute:pt,FloatType:In,FogExp2:Oa,FrontSide:Gi,Frustum:za,GLSL3:Yl,GreaterCompare:vd,GreaterDepth:Fo,GreaterEqualCompare:Na,GreaterEqualDepth:Uo,Group:Oi,HalfFloatType:Kn,HemisphereLight:Wd,IcosahedronGeometry:zr,ImageUtils:Ed,InstancedBufferAttribute:$l,InstancedMesh:Jl,IntType:Ta,KeepStencilOp:Ao,Layers:Fa,LessCompare:gd,LessDepth:Io,LessEqualCompare:Ia,LessEqualDepth:zs,Light:Xa,LightShadow:Wc,Line:Ep,LineBasicMaterial:Dc,LineCurve:kc,LineCurve3:Id,LineDashedMaterial:tm,LinearFilter:Jt,LinearMipmapLinearFilter:Ui,LinearMipmapNearestFilter:To,LinearSRGBColorSpace:wr,LinearToneMapping:pc,LinearTransfer:Tr,MOUSE:xi,Material:Zi,MathUtils:mn,Matrix2:ic,Matrix3:et,Matrix4:ft,MaxEquation:$u,Mesh:fn,MeshBasicMaterial:Ur,MeshDepthMaterial:Vd,MeshDistanceMaterial:Hd,MeshStandardMaterial:Ls,MinEquation:Zu,MirroredRepeatWrapping:zo,MixOperation:cd,MultiplyBlending:ql,MultiplyOperation:fc,NearestFilter:Zt,NearestMipmapLinearFilter:hr,NearestMipmapNearestFilter:ud,NeutralToneMapping:xc,NeverCompare:md,NeverDepth:Lo,NoBlending:li,NoColorSpace:gi,NoToneMapping:Yn,NormalBlending:Ns,NotEqualCompare:xd,NotEqualDepth:Oo,Object3D:zt,ObjectSpaceNormalMap:fd,OneFactor:Ku,OneMinusConstantAlphaFactor:ld,OneMinusConstantColorFactor:od,OneMinusDstAlphaFactor:td,OneMinusDstColorFactor:id,OneMinusSrcAlphaFactor:dc,OneMinusSrcColorFactor:ju,OrthographicCamera:Br,PCFShadowMap:Is,PCFSoftShadowMap:Wu,PMREMGenerator:sc,Path:Ql,PerspectiveCamera:En,Plane:ri,PlaneGeometry:us,PointLight:qa,Points:Cd,PointsMaterial:Ic,PolyhedronGeometry:ka,QuadraticBezierCurve:Gc,QuadraticBezierCurve3:Vc,Quaternion:bi,R11_EAC_Format:qo,RED_GREEN_RGTC2_Format:Er,RED_RGTC1_Format:da,REVISION:Ea,RG11_EAC_Format:br,RGBAFormat:Nn,RGBAIntegerFormat:Da,RGBA_ASTC_10x10_Format:oa,RGBA_ASTC_10x5_Format:ia,RGBA_ASTC_10x6_Format:sa,RGBA_ASTC_10x8_Format:ra,RGBA_ASTC_12x10_Format:aa,RGBA_ASTC_12x12_Format:la,RGBA_ASTC_4x4_Format:$o,RGBA_ASTC_5x4_Format:Jo,RGBA_ASTC_5x5_Format:Ko,RGBA_ASTC_6x5_Format:Qo,RGBA_ASTC_6x6_Format:jo,RGBA_ASTC_8x5_Format:ea,RGBA_ASTC_8x6_Format:ta,RGBA_ASTC_8x8_Format:na,RGBA_BPTC_Format:ca,RGBA_ETC2_EAC_Format:Xo,RGBA_PVRTC_2BPPV1_Format:Vo,RGBA_PVRTC_4BPPV1_Format:Go,RGBA_S3TC_DXT1_Format:mr,RGBA_S3TC_DXT3_Format:gr,RGBA_S3TC_DXT5_Format:_r,RGBFormat:Tc,RGB_BPTC_SIGNED_Format:ha,RGB_BPTC_UNSIGNED_Format:ua,RGB_ETC1_Format:Ho,RGB_ETC2_Format:Wo,RGB_PVRTC_2BPPV1_Format:ko,RGB_PVRTC_4BPPV1_Format:Bo,RGB_S3TC_DXT1_Format:pr,RGFormat:Hi,RGIntegerFormat:La,RawShaderMaterial:Gd,Ray:qs,Raycaster:Yd,RedFormat:Ca,RedIntegerFormat:Pa,ReinhardToneMapping:mc,RenderTarget:wd,RepeatWrapping:Sr,ReverseSubtractEquation:Yu,SIGNED_R11_EAC_Format:Yo,SIGNED_RED_GREEN_RGTC2_Format:pa,SIGNED_RED_RGTC1_Format:fa,SIGNED_RG11_EAC_Format:Zo,SRGBColorSpace:rn,SRGBTransfer:vt,Scene:Rd,ShaderChunk:it,ShaderLib:Xn,ShaderMaterial:zn,Shape:Or,ShapeUtils:ss,ShortType:Sc,Sphere:Yi,SphereGeometry:Va,Spherical:nc,SplineCurve:Hc,SrcAlphaFactor:uc,SrcAlphaSaturateFactor:sd,SrcColorFactor:Qu,StaticDrawUsage:Md,SubtractEquation:qu,SubtractiveBlending:Xl,TOUCH:_i,TangentSpaceNormalMap:ma,Texture:Qt,TextureSource:Ua,TorusGeometry:Ha,Triangle:Ln,TubeGeometry:Wa,UVMapping:yc,Uint16BufferAttribute:Cc,Uint32BufferAttribute:Pc,UniformsLib:Ie,UniformsUtils:kd,UnsignedByteType:gn,UnsignedInt101111Type:Ec,UnsignedInt248Type:ks,UnsignedInt5999Type:bc,UnsignedIntType:Jn,UnsignedShort4444Type:Aa,UnsignedShort5551Type:Ra,UnsignedShortType:Bs,VSMShadowMap:Ps,Vector2:Se,Vector3:I,Vector4:It,WebGLCoordinateSystem:qn,WebGLCubeRenderTarget:Yc,WebGLRenderTarget:Un,WebGLRenderer:sf,WebGLUtils:tf,WebGPUCoordinateSystem:Gs,WebXRController:Ro,ZeroFactor:Ju,createCanvasElement:Sd,error:ct,log:Zl,warn:je,warnOnce:rs},Symbol.toStringTag,{value:"Module"})),Du={type:"change"},Zc={type:"start"},rf={type:"end"},So=new qs,Iu=new ri,ex=Math.cos(70*mn.DEG2RAD),Vt=new I,pn=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class tx extends Zd{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new bi,this._lastTargetPosition=new I,this._quat=new bi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nc,this._sphericalDelta=new nc,this._scale=1,this._panOffset=new I,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new I,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ix.bind(this),this._onPointerDown=nx.bind(this),this._onPointerUp=sx.bind(this),this._onContextMenu=ux.bind(this),this._onMouseWheel=ax.bind(this),this._onKeyDown=lx.bind(this),this._onTouchStart=cx.bind(this),this._onTouchMove=hx.bind(this),this._onMouseDown=rx.bind(this),this._onMouseMove=ox.bind(this),this._interceptControlDown=dx.bind(this),this._interceptControlUp=fx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=yt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Du),this.update(),this.state=yt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Vt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<ex?this.object.lookAt(this.target):(Iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(Iu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(Du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ix(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rf),this.state=yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Zc)}function ox(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ax(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(Zc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rf))}function lx(n){this.enabled!==!1&&this._handleKeyDown(n)}function cx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Zc)}function hx(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function ux(n){this.enabled!==!1&&n.preventDefault()}function dx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lr=new I;function Rn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;lr.copy(e),lr[i]=0,lr.normalize();const l=.5*o/(o+a),h=1-lr.angleTo(n)/c;return Math.sign(lr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class $c extends Ti{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new I,l=new I,h=new I(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,v=new I,m=.5/o;for(let d=0,M=0;d<f.length;d+=3,M+=2)switch(c.fromArray(f,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[d+0]=h.x*Math.sign(c.x)+l.x*r,f[d+1]=h.y*Math.sign(c.y)+l.y*r,f[d+2]=h.z*Math.sign(c.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/g)){case 0:v.set(1,0,0),p[M+0]=Rn(v,l,"z","y",r,i),p[M+1]=1-Rn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),p[M+0]=1-Rn(v,l,"z","y",r,i),p[M+1]=1-Rn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),p[M+0]=1-Rn(v,l,"x","z",r,e),p[M+1]=Rn(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),p[M+0]=1-Rn(v,l,"x","z",r,e),p[M+1]=1-Rn(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),p[M+0]=1-Rn(v,l,"x","y",r,e),p[M+1]=1-Rn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),p[M+0]=Rn(v,l,"x","y",r,e),p[M+1]=1-Rn(v,l,"y","x",r,t);break}}static fromJSON(e){return new $c(e.width,e.height,e.depth,e.segments,e.radius)}}function px(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Bt;let l=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const f=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=n[u].attributes.position.count}c.setIndex(f)}for(const h in r){const f=Nu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][u]);const g=Nu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Nu(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Fn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const f=c/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const v=h.getComponent(u,g);a.setComponent(u+f,g,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function mx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:h,torus:f,rod:u,sign:p,paperBoat:g,batchStatic:v,persist:m,say:d,refresh:M,chime:w,reduced:y}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],R=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);h([-.7,.3,-.83],.3,.38,s.concrete,_),f([-.7,.51,-.83],.31,.035,s.copper,_),h([-.7,.49,-.83],.26,.045,s.dark,_);const T=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],T),f([0,0,0],.36,.015,s.copper,T,[0,0,.35]),h([.66,.34,-.22],.27,.45,s.rust,_),f([.66,.56,-.22],.28,.028,s.copper,_),h([.66,.55,-.22],.24,.03,r("#495441"),_);const A=o([.66,.56,-.22],_);u([0,0,0],[0,.83,0],.026,s.copper,A);for(const[C,P,W]of[[-.17,.23,-.5],[.17,.41,.5]]){const q=l([C,P,0],[.24,.035,.085],s.mint,A);q.rotation.z=W}const D=o([0,.95,0],A);l([0,0,0],.115,s.light,D),f([0,0,0],.28,.021,s.cream,D,[0,0,0]),f([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const O=[];for(let C=0;C<4;C++){const P=C*Math.PI/2,W=o([Math.cos(P)*.3,.13+Math.sin(P)*.12,Math.sin(P)*.3],A);u([0,-.15,0],[0,.2,0],.012,s.copper,W),l([0,.23,0],.065,s.cream,W),v(W,[]),O.push(W)}c([-.46,.2,.32],[.68,.12,.47],s.dark,_);const G=o([-.46,.29,.32],_);c([0,0,0],[.5,.025,.32],s.cream,G);for(const C of[-.23,.23])u([C,.016,-.14],[0,.016,.06],.009,s.copper,G);l([0,.027,.06],[.04,.015,.04],s.rust,G),p("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),v(T,[]),v(D,[]),v(A,[D,...O]),v(G,[]),v(_,[T,A,G]);const N=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);N.castShadow=!1;const B=o([0,0,0],e),X=g(B,[8.3,.14,3.5],1.05),z=o([0,.36,0],X),J=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],z),k=l([0,.12,0],[.085,.13,.085],s.light,z),ee=c([0,.09,0],[.23,.025,.16],s.cream,z);ee.rotation.z=.2;const $=[J,k,ee];v(X,[z]);const ue=new n.Vector3(8.3,.14,3.5),fe=new n.Vector3(8.45,.14,3.65),ye=new n.Vector3(9.2,-2.7,6.5);let Re=-1,te=i.dockTrips>=2?1:.02;function F(){T.visible=i.dockTrips>=1,A.visible=i.dockTrips>=2,G.visible=i.dockTrips>=3,O.forEach((C,P)=>C.visible=i.dockTrips>=5+P*3),z.visible=i.dockPending,$.forEach((C,P)=>C.visible=P===i.dockTrips%3),X.position.copy(i.dockPending?fe:ue)}F();function K(){if(!(i.boat>0))if(i.dockPending){const C=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(te=.02),m(),F(),d(C.line),w(330),M()}else i.boat=18,Re=-1,$.forEach((C,P)=>C.visible=P===i.dockTrips%3),z.visible=!1,d("ну плыви. я тут."),M()}function he(C,P){if(i.boat>0){i.boat=Math.max(0,i.boat-C);const W=18-i.boat,q=W<7?0:W<11?1:2;q!==Re&&(Re=q,M()),W<2?X.position.lerpVectors(ue,fe,n.MathUtils.smoothstep(W,0,2)):W<7?X.position.lerpVectors(fe,ye,n.MathUtils.smoothstep(W,2,7)):W<11?X.position.copy(ye):W<16?X.position.lerpVectors(ye,fe,n.MathUtils.smoothstep(W,11,16)):X.position.copy(fe),X.visible=W<7||W>=11,z.visible=W>=11,X.rotation.y=W>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),X.visible=!0,F(),d("вернулся. с чем-то."),w(554),M())}X.rotation.z=y?0:Math.sin(P*1.7)*.035,i.boat===0&&(X.visible=!0,X.position.y=(i.dockPending?fe.y:ue.y)+Math.sin(P*1.2)*.02,X.rotation.y=i.dockPending?Math.PI+.2:0),T.position.y=.97+Math.sin(P*.9)*.055,T.rotation.y=P*.15,te=n.MathUtils.damp(te,1,1.1,C),A.scale.setScalar(te),D.rotation.y=y?0:P*.23,N.material.emissiveIntensity=i.dockPending?1.5+Math.sin(P*4)*1.1:1.2}function ne(){if(i.boat>0){const C=18-i.boat;return{disabled:!0,action:C<7?"плывёт…":C<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const C=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:C===2?`${S[C].description} ${R[Math.floor((i.dockTrips-1)/3)%R.length]}`:S[C].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:B,gallery:_,beacon:N,launchOrCollect:K,update:he,card:ne,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:X.position.toArray(),visible:X.visible,cargo:z.visible,stone:T.visible,plant:A.visible,plantScale:te,letter:G.visible,buds:O.filter(C=>C.visible).length})}}async function of(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function gx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",h=!s.matches,f=!1,u=!1,p=!1,g=!1,v=!1,m=0,d=null,M=0,w=0,y=0,b=!1;try{const H=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");H!==null&&(h=H==="open")}catch{}const S=(H,ae,xe)=>{const be=document.createElement(H);return ae&&(be.className=ae),xe&&(be.textContent=xe),be},R=S("aside","resident-history");R.id="resident-history",R.setAttribute("aria-label","История мыслей и действий Головы");const _=S("div","history-heading"),T=S("div"),A=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),D=S("h3","","на полях"),O=S("span","history-eyes");O.setAttribute("aria-hidden","true"),D.append(O),T.append(A,D,S("p","history-subtitle","мысли, дела и прочее"));const G=S("button","history-close","−");G.type="button",G.setAttribute("aria-label","Свернуть историю"),G.title="Свернуть историю",_.append(T,G);const N=S("div","history-filters");N.setAttribute("role","group"),N.setAttribute("aria-label","Показывать в истории");const B=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[H,ae]of B){const xe=S("button","",ae);xe.type="button",xe.dataset.filter=H,xe.setAttribute("aria-pressed",String(l===H)),xe.onclick=()=>{l=H,P(!1),z.scrollTop=0;for(const be of N.children)be.setAttribute("aria-pressed",String(be.dataset.filter===l))},N.append(xe)}const X=S("button","history-new");X.type="button",X.hidden=!0;const z=S("div","history-scroll");z.tabIndex=0,z.setAttribute("aria-label","Записи, от новых к старым");const J=S("ol","history-list"),k=S("p","history-empty","собираю заметки…");z.append(J,k);const ee=S("div","history-foot"),$=S("span","history-live","подключаюсь…"),ue=S("span","history-count"),fe=S("button","history-retry","повторить подключение");fe.type="button",fe.hidden=!0,fe.onclick=()=>{V(),window.dispatchEvent(new Event("beznogim:retry"))},ee.append($,ue,fe),R.append(_,N,X,z,ee);const ye=S("button","history-toggle");ye.type="button",ye.setAttribute("aria-controls",R.id);const Re=S("span","","на полях"),te=S("span","history-badge");te.hidden=!0,ye.append(S("span","history-toggle-icon","◌"),Re,te),document.body.append(R),document.querySelector(".footer-actions").append(ye);function F(H,ae=!0){if(h=H,R.hidden=!h,ye.hidden=h,ye.setAttribute("aria-expanded",String(h)),ae)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",h?"open":"closed")}catch{}h?(z.scrollTop<30?K():he(),G.focus({preventScroll:!0})):ae&&ye.focus({preventScroll:!0})}R.hidden=!h,ye.hidden=h,ye.setAttribute("aria-expanded",String(h)),ye.onclick=()=>{F(!0),(g||!u)&&V()},G.onclick=()=>F(!1),s.addEventListener("change",()=>{let H=!s.matches;try{const ae=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ae!==null&&(H=ae==="open")}catch{}F(H,!1)}),document.addEventListener("keydown",H=>{H.key==="Escape"&&h&&!document.querySelector("dialog[open]")&&F(!1)});function K(){m=0,te.hidden=!0,X.hidden=!0}function he(){te.textContent=String(m),te.hidden=!m,X.textContent=`↑ к новым · ${m}`,X.hidden=!(h&&m)}X.onclick=()=>{z.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),K()},z.addEventListener("scroll",()=>{z.scrollTop<30&&K()},{passive:!0});function ne(H){return l==="all"||(l==="thoughts"?H.type==="muse"||H.type==="say":H.type!=="muse"&&H.type!=="say")}function C(H,ae){const xe=H.type==="muse"||H.type==="say",be=S("li",`history-entry ${xe?"history-thought":"history-action"}${ae?" is-new":""}`);be.dataset.eventId=String(H.id),be.dataset.type=H.type;const U=S("div","history-meta"),ze=S("time","",r.format(H.time*1e3));ze.dateTime=new Date(H.time*1e3).toISOString(),ze.title=o.format(H.time*1e3)+" · "+ze.textContent+" мск";const we={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return U.append(S("span","",we[H.type]||"во дворе"),ze),be.append(U,S("p","",H.text)),be}function P(H,ae=new Set){const xe=z.scrollTop>30,be=z.getBoundingClientRect().top,U=xe?[...J.querySelectorAll("[data-event-id]")].find(le=>le.getBoundingClientRect().bottom>be):null,ze=U==null?void 0:U.dataset.eventId,we=U==null?void 0:U.getBoundingClientRect().top,L=z.scrollTop,x=document.createDocumentFragment();let j="";const ie=[...i.values()].sort((le,Me)=>Me.id-le.id).filter(ne);for(const le of ie){const Me=o.format(le.time*1e3);if(Me!==j){const Ae=S("li","history-day",Me);x.append(Ae),j=Me}x.append(C(le,H&&ae.has(le.id)&&!xe))}if(J.replaceChildren(x),k.hidden=ie.length>0,k.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":u?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ie.length&&(k.textContent="в этом фильтре пока нет записей."),ue.textContent=i.size?v?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:u?"записей: 0 · мск":"записи ещё не загружены",fe.hidden=!(g||!u&&!p),fe.disabled=p,ze){const le=J.querySelector(`[data-event-id="${ze}"]`);z.scrollTop=L+(le?le.getBoundingClientRect().top-we:0)}else xe||(z.scrollTop=0)}function W(H,ae=!1){if(!H||!Array.isArray(H.entries))return!1;const xe=Math.max(0,...i.keys()),be=new Set;let U=0,ze=0;for(const we of H.entries)!we||typeof we!="object"||!Number.isSafeInteger(we.id)||we.id<1||!Number.isFinite(we.time)||Math.abs(we.time)>864e10||!a.has(we.type)||typeof we.text!="string"||!we.text.trim()||(ze++,i.has(we.id)||(b=!0,i.set(we.id,{id:we.id,time:we.time,type:we.type,text:we.text.slice(0,280)}),be.add(we.id),we.id>xe&&ne(we)&&U++));if(H.entries.length&&!ze)return!1;if(v=v||!!H.has_older||!!H.has_more||i.size>t,i.size>t){const we=[...i.keys()].sort((L,x)=>L-x);for(const L of we.slice(0,i.size-t))i.delete(L)}return f&&!ae&&U&&(!h||z.scrollTop>30)&&(m+=U,he()),(be.size||!f)&&P(f&&!ae,be),!0}function q(){if(!(!i.size||!b)){b=!1,w=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:w,has_older:v,entries:[...i.values()]}))}catch{}}}function oe(){try{const H=localStorage.getItem(c);if(!H||H.length>1e6)return;const ae=JSON.parse(H);if(ae.version!==1||!Number.isFinite(ae.saved_at)||ae.saved_at<=0)return;W(ae,!0),w=ae.saved_at,f=i.size>0,b=!1}catch{}}async function V(){if(!p){p=!0,y=performance.now(),fe.disabled=!0;try{const H=await of(n+"/api/history");if(!W(H,!0))throw Error("invalid-public-history");u=!0,f=!0,g=!1,q(),P(!1)}catch{g=!0,P(!1)}finally{p=!1,fe.disabled=!1,Q()}}}function Q(){var xe;const H=!d||performance.now()-M>35e3||d.server_time-d.heartbeat>60||d.resident_status==="stopped";R.classList.toggle("history-offline",H);const ae=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";$.textContent=H?i.size?"связи нет":"нет связи с живым сервером":d.resident_status==="sleeping"?"голова спит · дневник открыт":d.resident_status==="paused"?"голова отдыхает":"жизнь идёт",H&&i.size&&($.textContent+=ae),!H&&g&&($.textContent+=" · архив не дошёл"),$.title=((xe=d==null?void 0:d.action)==null?void 0:xe.label)||""}function de(H){var ze;const ae=Math.max(0,...i.keys()),xe=Array.isArray((ze=H.history)==null?void 0:ze.entries)?H.history.entries:[];d=H,M=performance.now(),W(H.history)&&i.size&&(f=!0,q()),Q();const be=xe.filter(we=>we&&Number.isSafeInteger(we.id)).map(we=>we.id);(ae&&be.length&&Math.min(...be)>ae&&performance.now()-y>1e3||!u&&performance.now()-y>15e3)&&V()}window.addEventListener("beznogim:state",H=>de(H.detail)),window.__beznogimState&&de(window.__beznogimState),oe(),P(!1),Q(),V(),window.addEventListener("online",()=>{(g||!u)&&V()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!u)&&V()}),setInterval(()=>{Q(),(g||!u)&&V()},15e3)}function _x({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,h=0,f=0,u=!1,p=!1,g=!1,v=0,m=null,d=null,M=null,w="",y=!0;const b=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const R=document.createElement("span");R.className="thought-kicker",R.textContent="про себя";const _=document.createElement("p");S.append(R,_),document.body.append(S);const T=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),A=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";gx({api:A,enabled:T});const D=document.querySelector(".territory-nav"),O=document.createElement("div");O.className="resident-strip",O.hidden=!0;const G=document.createElement("span");G.className="resident-status",G.textContent="подключаюсь к голове";const N=document.createElement("div");N.className="resident-vitals",N.hidden=!0,N.setAttribute("aria-label","Самочувствие Головы");const X=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(C=>{const P=document.createElement("div");return P.className="need-meter",P.dataset.need=C.key,P.style.setProperty("--need-color",C.color),P.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${C.icon}</svg><div class="need-detail"><div class="need-heading"><b>${C.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${C.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,N.append(P),{key:C.key,card:P,value:P.querySelector(".need-value"),bar:P.querySelector(".need-track")}}),z=document.createElement("button");z.type="button",z.textContent="к голове",z.onclick=()=>{p=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),ye()};const J=document.createElement("button");J.type="button",J.textContent="поиграть самому",J.onclick=()=>{p=!p,g=!1,ye()};const k=document.createElement("button");k.type="button",k.textContent="мысли",k.setAttribute("aria-pressed","true"),k.onclick=()=>{y=!y,k.setAttribute("aria-pressed",String(y))},O.append(G,N,z,J,k),D.append(O);function ee(){return Date.now()/1e3+f}function $(){return l&&ee()-l.heartbeat<60&&l.resident_status!=="stopped"}function ue(){return u&&l&&!p}function fe(){var W,q;const C=(q=(W=l==null?void 0:l.mechanics)==null?void 0:W.vitals)==null?void 0:q.public;if(!C){N.hidden=!0;return}const P=oe=>Math.max(0,Math.min(100,Math.round(Number(oe)||0)));N.hidden=!1;for(const oe of X){const V=P(C[oe.key]);oe.value.textContent=String(V),oe.bar.setAttribute("aria-valuenow",String(V)),oe.card.style.setProperty("--need-fill",String(V/100)),oe.card.dataset.low=String(V<=20)}}function ye(){const C=p?"ты в песочнице":u?$()?l!=null&&l.action&&l.action.ends>ee()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";C!==w&&(w=C,G.textContent=C),J.textContent=p?"вернуться к голове":"поиграть самому",z.setAttribute("aria-pressed",String(g))}function Re(C){var W,q;if(!C||C.version!==1||!Array.isArray(C.position)||C.position.length!==3||!C.position.every(Number.isFinite)||!C.objects||!Number.isFinite(C.server_time)||!Number.isFinite(C.heartbeat)||l&&(C.server_time<l.server_time||C.server_time===l.server_time&&Number.isFinite(C.revision)&&Number.isFinite(l.revision)&&C.revision<l.revision))return;if(f=C.server_time-Date.now()/1e3,l=C,h=performance.now(),u=!0,O.hidden=!1,m&&((W=C.release)!=null&&W.commit)&&m!==C.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((q=C.release)==null?void 0:q.commit)||m;const P=C.speech;P&&P.time>v&&P.until>ee()&&(v=P.time,p||a(P.text)),window.__beznogimState=C,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:C})),fe(),ye()}function te(){const C=l.action;if((C==null?void 0:C.kind)==="move"){const P=Math.max(0,Math.min(1,(ee()-C.started)/Math.max(.001,C.ends-C.started)));return C.from.map((W,q)=>W+(C.to[q]-W)*P)}return l.position}function F(){if(!ue())return;const C=l.objects;C.engine&&(t.running=!!C.engine.running),C.workshop&&(t.roof=C.workshop.roof_open?1:0),C.radio&&(t.radio=C.radio.station,d!==t.radio&&(d=t.radio,o())),C.garden&&(t.harvest=C.garden.harvest,M!==null&&t.harvest>M&&c(),M=t.harvest);const P=l.action;t.brew=(P==null?void 0:P.effect)==="brew"?Math.max(0,P.ends-ee()):0,t.loop=0,ye()}function K(){if(!ue()){S.hidden=!0;return}const C=te();n.position.set(C[0],C[1]+Math.sin(ee()*1.4)*.1,C[2]),e.set(...C),g&&i.target.lerp(n.position,.08);const P=l.musing;if(y&&$()&&(P!=null&&P.text)&&P.until>ee()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==P.text&&(_.textContent=P.text),b.copy(n.position),b.y+=1.8,b.project(s),b.z>=-1&&b.z<=1&&Math.abs(b.x)<1&&Math.abs(b.y)<1){S.hidden=!1;const W=S.offsetWidth,q=S.offsetHeight,oe=Math.max(W/2+12,Math.min(innerWidth-W/2-12,(b.x+1)*innerWidth/2));let V=(1-b.y)*innerHeight/2-18;const Q=D.getBoundingClientRect(),de=oe-W/2<Q.right&&oe+W/2>Q.left?Q.bottom+12:18,H=V-q<de;H&&(V=Math.max(de+q,(1-b.y)*innerHeight/2+70+q)),V=Math.min(innerHeight-70,Math.max(q+18,V)),S.classList.toggle("below-head",H),S.style.transform=`translate3d(${Math.round(oe)}px,${Math.round(V)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function he(){ue()&&(p=!0,g=!1,ye())}function ne(){if(!T)return;O.hidden=!1;let C=!1;async function P(){if(!C){C=!0;try{const q=await of(A+"/api/state");Re(q),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-h>35e3)&&(u=!1),ye()}finally{C=!1}}}try{const q=new EventSource(A+"/api/events");q.addEventListener("state",oe=>{try{Re(JSON.parse(oe.data))}catch{}}),q.onerror=()=>{u=!1,ye()}}catch{u=!1,ye()}P();function W(){(!u||!l||performance.now()-h>3e4)&&P()}window.addEventListener("online",W),window.addEventListener("beznogim:retry",P),document.addEventListener("visibilitychange",()=>{document.hidden||W()}),setInterval(()=>{l&&performance.now()-h>35e3&&(u=!1),ye(),W()},15e3)}return i.addEventListener("start",()=>{g=!1,ye()}),ne(),{sync:F,place:K,localPlay:he,unfollow:()=>{g=!1},watching:ue,inspect:()=>{var C;return{connected:u,sandbox:p,follow:g,alive:!!$(),revision:l==null?void 0:l.revision,release:(C=l==null?void 0:l.release)==null?void 0:C.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!S.hidden,position:l?te():null}}}}const vx=120,xx=24,yx=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"frontier",name:"свободная земля"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Wn={size:vx,sectorSize:xx,sectors:yx};function Mx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new Oi;c.name="unsettled-territory",n.add(c);const l=Wn.size/2,h=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],f=new Or;h.forEach(([A,D],O)=>O?f.lineTo(A,-D):f.moveTo(A,-D)),f.closePath();const u=new Ys(f,{depth:1.8,bevelEnabled:!1});u.rotateX(-Math.PI/2),u.translate(0,-3.5,0);const p=new fn(u,new Ls({color:"#233e35",roughness:1}));p.receiveShadow=!0,c.add(p);let g=8409;const v=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new Jl(new zr(1,0),new Ls({color:"#8a9980",roughness:1}),150),d=new Jl(new hs(1,1,4),new Ls({color:"#9aa880",roughness:1}),850),M=new zt;for(const[A,D,O]of[[m,150,!0],[d,850,!1]]){for(let G=0;G<D;G++){let N,B;do N=(v()-.5)*(Wn.size-10),B=(v()-.5)*(Wn.size-10);while(Math.abs(N)<11&&Math.abs(B)<9);const X=O?.15+v()*.48:.12+v()*.42;M.position.set(N,-1.7+X*.25,B),M.rotation.set(0,v()*6.28,O?v()*.25:0),M.scale.set(O?X*1.3:.07,X,O?X:.07),M.updateMatrix(),A.setMatrixAt(G,M.matrix)}A.instanceMatrix.needsUpdate=!0,c.add(A)}const w=new Ls({color:"#c1b692",roughness:1});for(let A=0;A<16;A++){const D=new fn(new Ti(1.15,.12,.65),w);D.position.set(-.6,-.06-A*.105,5.8+A*.7),D.receiveShadow=!0,c.add(D)}const y=document.createElement("nav");y.className="territory-nav",y.setAttribute("aria-label","Путешествие по миру"),y.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(y);const b=document.createElement("dialog");b.id="territory-dialog",b.setAttribute("aria-labelledby","territory-title"),b.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(b);const S=b.querySelector("#territory-grid");for(const A of Wn.sectors){const D=document.createElement("button");D.type="button",D.dataset.sector=A.id,D.className=A.status==="settled"?"settled":"",D.textContent=A.status==="settled"?`● ${A.id==="0:0"?"двор":A.name}`:`· ${A.id}`,D.setAttribute("aria-label",`${A.name}, ${A.id}`),D.onclick=()=>{b.close(),s(A.x,A.z,A.status==="settled")},S.append(D)}document.querySelector("#territory-map").onclick=()=>b.showModal(),document.querySelector("#world-overview").onclick=r,b.querySelector("#territory-close").onclick=()=>b.close(),b.querySelector("#territory-home").onclick=()=>{b.close(),o()};const R=y.querySelector("#territory-location");let _="";function T(){const A=a()||t.target,D=Math.round(A.x/Wn.sectorSize),O=Math.round(A.z/Wn.sectorSize),G=`${D}:${O}`;if(G!==_){_=G;const N=Wn.sectors.find(B=>B.id===G);R.textContent=`${(N==null?void 0:N.status)==="settled"?N.name:"свободная земля"} · ${G}`;for(const B of S.children)B.classList.toggle("current",B.dataset.sector===G)}}return{half:l,update:T,inspect:()=>({size:Wn.size,sectorSize:Wn.sectorSize,sectors:Wn.sectors.length,settled:Wn.sectors.filter(A=>A.status==="settled").length,visible:n.visible,sector:_})}}function Sx({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:h,torus:f,sign:u,paperBoat:p,batchStatic:g,changed:v,chime:m}){let d={};try{d=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(d.wins)||0))),trace:d.trace===!0},w=[1,2,-1,1,2,-1];function y(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const b=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,b),a([0,.46,0],[1.22,.08,1.3],s.dark,b);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const H of[-.62,.62])for(const ae of[-.64,.64])h([H,.46,ae],[H,1.45,ae],.024,s.copper,b);for(const H of[-.62,.62])a([H,.96,0],[.018,.95,1.28],S,b);a([0,.96,-.64],[1.24,.95,.018],S,b);const R=o([0,1.45,-.64],b);for(const H of[-.62,.62])h([H,0,0],[H,.36,.64],.026,s.copper,R);for(const H of[-.62,.62])h([H,.36,.64],[H,0,1.28],.026,s.copper,R);h([-.62,.36,.64],[.62,.36,.64],.026,s.copper,R);const _=a([0,.18,.32],[1.26,.025,.72],S,R);_.rotation.x=-.51;const T=a([0,.18,.96],[1.26,.025,.72],S,R);T.rotation.x=.51;const A=o([0,.52,0],b);l([0,.2,0],.026,.4,s.leaf,A);for(const H of[-1,1]){const ae=c([H*.15,.27,0],[.22,.055,.09],s.leaf,A);ae.rotation.z=H*.35}const D=c([0,.25,.12],[.23,.16,.27],s.copper,A),O=c([.42,.58,.46],[.15,.1,.18],s.copper,b);O.visible=M.wins>0;const G=o([-.76,.7,.69],b);a([0,.28,0],[.13,.66,.06],s.cream,G);const N=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),G);c([0,-.06,.04],.065,s.rust,G),u("ПАРНИК",[0,.3,.716],.93,.22,b,{size:49});const B=f([0,2.05,0],.46,.016,s.mint,b);B.visible=M.trace;const X=[];for(let H=0;H<6;H++)X.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),b));g(b,[R,A,G,B,O,...X]),g(R,[]),g(A,[D]),g(G,[N]);let z=0,J=0;function k(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),z=0,v()}function ee(H){if(M.mode!=="playing")return;const ae={heat:2,wait:0,vent:-2};H in ae&&(M.temp+=w[M.turn]+ae[H],M.turn++,M.temp>6?(M.mode="hot",z=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),O.visible=!0,y(),m(660)),v())}function $(){let H="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(H=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${w[M.turn]>0?"+":""}${w[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(H=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(H=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(H="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:H,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const ue=o([0,0,0],t);ue.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ue),a([0,-.42,0],[6.8,.08,5.6],s.dark,ue);for(const H of[-3.2,3.2])for(const ae of[-2.6,2.6])h([H,-.4,ae],[H,4,ae],.055,s.copper,ue);for(const H of[-3.2,3.2])h([H,4,-2.6],[H,5.7,0],.055,s.copper,ue),h([H,5.7,0],[H,4,2.6],.055,s.copper,ue);h([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ue),a([-3.2,1.8,0],[.025,4.4,5.2],S,ue),a([0,1.8,-2.6],[6.4,4.4,.025],S,ue),u("СОН / 01",[0,-.12,2.93],2.2,.38,ue,{size:52});const fe=o([0,1.6,0],ue);c([0,0,0],1.16,r("#5f9c85"),fe);for(let H=0;H<10;H++){let ae=H*2.4;const xe=c([Math.sin(ae)*.95,Math.cos(H*1.2)*.6,Math.cos(ae)*.95],[.35,.2,.3],s.leaf,fe);xe.rotation.y=ae}f([0,0,0],1.32,.028,s.copper,fe,[.4,0,.2]);const ye=o([0,1.6,0],ue),Re=[];for(let H=0;H<28;H++){const ae=a([0,0,0],[.53,.11,.32],H%4?s.cream:s.concrete,ye);Re.push(ae)}const te=p(ue,[1.7,-.05,1],1.65),F=c([0,.65,0],.13,s.cream,te),K=o([0,.65,0],te);K.visible=!1;for(let H=0;H<8;H++){let ae=H/8*Math.PI*2;h([Math.sin(ae)*.27,Math.cos(ae)*.27,0],[Math.sin(ae)*.5,Math.cos(ae)*.5,0],.026,s.light,K)}const he=i.clone(!0);ue.add(he),he.scale.setScalar(.72),he.position.set(-2,1,1.3),he.rotation.z=-.25;const ne=o([-2,-.05,1.3],ue);l([0,0,0],.55,.3,s.cream,ne),f([.58,0,0],.25,.04,s.copper,ne,[0,0,0]);const C=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ue);C.rotation.y=.2;let P=0,W=0,q=!1;g(ue,[fe,ye,te,he]),g(fe,[]);function oe(){q=!0,P=0,W=0,ue.visible=!0,e.visible=!1,v()}function V(){q=!1,ue.visible=!1,e.visible=!0,v()}function Q(){q&&(P===3?(P=0,W=0):(P++,m(220+P*110),P===3&&(M.trace=!0,B.visible=!0,y())),v())}function de(H,ae){J=n.MathUtils.damp(J,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,H),R.rotation.x=J,A.scale.y=n.MathUtils.damp(A.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,H),D.visible=M.mode==="won",N.scale.y=.3*Math.max(.05,M.temp/8),N.position.y=-.015+M.temp/8*.15,B.rotation.z=Math.sin(ae*.3)*.15,z=Math.max(0,z-H),X.forEach((xe,be)=>{xe.visible=z>0;const U=(3-z+be*.18)%1.5;xe.position.set(Math.sin(be*2)*U*.35,1.5+U,Math.cos(be*2)*U*.35),xe.scale.setScalar(.1*(.4+U))}),q&&(W=n.MathUtils.damp(W,P,2,H),fe.rotation.y=ae*.08,Re.forEach((xe,be)=>{const U=be/28*Math.PI*2+ae*.055*Math.min(1,W),ze=Math.min(1,W);xe.position.set(Math.sin(U)*(1.8+ze*.35),Math.cos(U)*(1.8-ze*1.5),Math.cos(U)*ze*1.5),xe.rotation.set(0,-U*ze,Math.PI/2-U*(1-ze))}),ye.rotation.y=W*.32,te.position.y=-.05+W*1.12,te.position.x=1.7-W*.32,te.rotation.y=.2+W*.35,F.scale.setScalar(.13*(1+Math.max(0,W-2)*2)),K.visible=W>2.2,K.rotation.z=ae*.22,he.position.y=1+Math.sin(ae*.8)*.06)}return{house:b,start:k,step:ee,card:$,update:de,enter:oe,exit:V,breathe:Q,inspect:()=>({...M,weather:[...w],dream:q,dreamStep:P,phase:W,lidAngle:J,rootVisible:e.visible,dreamVisible:ue.visible,boatY:te.position.y,rays:K.visible})}}function bx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:f,torus:u,sign:p,batchStatic:g,chime:v}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const d=r("#c39860"),M=r("#e0c58b"),w=r("#465c63"),y=r("#80b9be",{metalness:.15,roughness:.35}),b=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),d,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let te=0;te<13;te++){const F=.15+te/12*Math.PI*1.42,K=Math.sin(F)*3.65,he=Math.cos(F)*3.65,ne=c([K,.48,he],[.75,1.08,.19],M,m);ne.rotation.y=F,te%3===0&&u([K,.48,he],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,F,0)}p("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const S=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],w,S);for(let te of[-1.15,1.15])for(let F of[-.63,.63])c([te,-.23,F],[.12,.5,.12],s.copper,S);for(let te of[-.79,.79])c([0,.36,te],[2.72,.65,.14],b,S);for(let te of[-1.32,1.32])c([te,.38,0],[.14,.68,1.55],b,S);const R=c([0,.18,0],[2.49,.045,1.49],y,S),_=l([-.84,.38,0],[.34,.14,.54],s.cream,S),T=i.clone(!0);m.add(T),T.scale.setScalar(.54),T.position.set(.3,.83,.45),T.rotation.z=-.35;const A=a([0,0,0],T);for(const te of[-.23,.23])l([te,.2,.611],[.15,.11,.025],s.black,A),c([te,.2,.64],[.2,.018,.012],s.copper,A);const D=a([-2.05,2.35,-.38],m);h([0,0,0],.52,.56,s.cream,D),h([0,.29,0],.44,.022,w,D),u([.55,0,0],.24,.055,s.copper,D,[0,0,0]),p("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const O=[];for(let te=0;te<7;te++){const F=a([-1.92+te*.33,.2+te*.29,1.45-te*.29],m);c([0,0,0],[.7,.13,.42],s.cream,F);for(let K of[-.2,.2])c([0,.07,K],[.7,.12,.05],s.copper,F);O.push(F)}const G=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],y,m)),N=Array.from({length:3},(te,F)=>{const K=u([.65,.2,0],.23+F*.16,.012,s.mint,S);return K.scale.z=.6,K}),B=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,B),B.rotation.z=.55;const X=[];for(let te=0;te<9;te++){const F=te*2.4;X.push(l([Math.sin(F)*3,3.2+te%3*.28,Math.cos(F)*2],.025,s.cream,m))}let z=!1,J=0,k=0,ee=!1;try{ee=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const $=a([26.6,-.86,.65],t);$.visible=ee,h([0,0,0],.15,.2,s.cream,$),h([0,.104,0],.125,.014,y,$),u([.16,0,0],.07,.02,s.copper,$,[0,0,0]),g(m,[S,T,D,...O,...G,...X,B]),g(S,[R,_,...N]),g(D,[]),g($,[]),O.forEach(te=>g(te,[]));function ue(){z=!0,J=0,k=0,m.visible=!0,t.visible=!1,Re(0,0)}function fe(){z=!1,m.visible=!1,t.visible=!0}function ye(){if(z&&(J=J===3?0:J+1,v(165+J*55),J===3)){ee=!0,$.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function Re(te,F){z&&(k=n.MathUtils.damp(k,J,2.4,te),O.forEach((K,he)=>{const ne=Math.min(1,k/2),C=-1.92+he*.33,P=.2+he*.29,W=1.45-he*.29;K.position.set(n.MathUtils.lerp(C,-1.72+he*.39,ne),n.MathUtils.lerp(P,1.95-he*.22,ne),n.MathUtils.lerp(W,-.32+he*.055,ne)),K.rotation.z=-ne*.21}),R.position.y=.18+k*.09,_.position.y=.38+k*.09,T.position.y=.83+k*.09+Math.sin(F*.6)*.025,T.rotation.z=-.35-k*.13,D.rotation.z=-Math.min(1,k)*.45,G.forEach((K,he)=>{const ne=(F*.16+he/16)%1;K.visible=k>.05,K.position.set(-1.7+ne*3,2.14-ne*1.62,-.32+ne*.25),K.scale.set(.07,.1+Math.sin(ne*Math.PI)*.04,.07)}),N.forEach((K,he)=>{K.visible=k>.4,K.position.y=R.position.y+.034,K.scale.setScalar(1+Math.sin(F*.5+he)*.08),K.scale.z*=.6}),B.rotation.z=.55+k*.21,A.visible=k>1.8)}return{enter:ue,exit:fe,pour:ye,update:Re,inspect:()=>({active:z,step:J,phase:k,trace:ee,roomVisible:m.visible,rootVisible:t.visible,waterY:R.position.y,sleeperY:T.position.y,channel:O.map(te=>te.position.toArray()),droplets:G.filter(te=>te.visible).length})}}function Ex({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const p of[-.23,.23])t([p,.2,.611],[.15,.11,.025],r.black,c),i([p,.2,.64],[.2,.018,.012],r.copper,c);let l=null,h=0;function f(p){l=p,h=Number(p.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:p})=>f(p)),window.__beznogimState&&f(window.__beznogimState);function u(p){const g=l==null?void 0:l.action;a.visible=!!p&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(h)?h:0),c.visible=a.visible}return{update:u,inspect:()=>{var p;return{visible:a.visible,ends:((p=l==null?void 0:l.action)==null?void 0:p.kind)==="sleep"?l.action.ends:null}}}}function ac(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function wx(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function Tx(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?ac():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function Ax(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function Rx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:f,torus:u,sign:p,batchStatic:g,chime:v,changed:m}){const d=a([0,0,0],e);d.name="dream-05-self-measuring-instrument",d.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),w=r("#d3eeed",{metalness:.85,roughness:.18}),y=r("#f1e7c7"),b=r("#1c4147"),S=r("#547d83",{metalness:.5,roughness:.28});h([0,-.42,0],3.8,.45,b,d),h([0,-.16,0],3.45,.08,S,d),u([0,-.1,0],3.65,.07,s.copper,d);for(let H=0;H<5;H++)u([0,-.1+H*.006,0],.7+H*.52,.009,w,d);const R=a([0,0,0],d);c([0,.12,-1.6],[3,.34,1.3],s.concrete,R),f([0,.3,-1.65],[0,3.75,-1.65],.12,M,R);const _=a([0,3.7,-1.4],d),T=h([0,0,-.12],1.05,.2,b,_);T.rotation.x=Math.PI/2,u([0,0,0],1.05,.085,s.copper,_,[0,0,0]);const A=a([-.85,0,.02],_),D=a([.85,0,.02],_);c([.425,0,0],[.85,1.72,.1],y,A),c([-.425,0,0],[.85,1.72,.1],y,D);for(let H=0;H<12;H++){const ae=H*Math.PI/6;f([Math.sin(ae)*.78,Math.cos(ae)*.78,.09],[Math.sin(ae)*.91,Math.cos(ae)*.91,.09],.016,s.copper,_)}const O=a([0,0,.14],_);f([0,-.15,0],[0,.69,0],.025,b,O),l([0,0,0],.065,s.copper,O);const G=[a([-2.35,1.65,0],d),a([2.35,1.65,0],d)];for(const[H,ae]of G.entries())c([0,0,0],[.24,1.65,.38],M,ae),c([H===0?.38:-.38,-.76,0],[.95,.18,.38],w,ae),l([0,.84,0],.19,s.copper,ae);const N=[],B=[],X=[];for(let H=0;H<12;H++){const ae=-2.45+H*.445;B.push(new n.Vector3(ae,2.52,0));const xe=H/11,be=xe*Math.PI*1.35;X.push(new n.Vector3(2.35*Math.cos(be)*(1-xe*.85),.24+xe*3,2.05-xe*3.2));const U=a(B[H].toArray(),d);N.push(U),c([0,0,0],[.42,.16,.57],M,U),c([0,.09,.15],[.03,.012,.2],s.copper,U)}const z=l([0,.7,0],[.45,.64,.45],w,d),J=i.clone(!0);d.add(J),J.scale.setScalar(.43);const k=new n.Vector3(2.8,.65,2.15);J.position.copy(k);function ee(H,ae){const xe=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,we],L)=>L?xe.lineTo(ze,we):xe.moveTo(ze,we)),xe.closePath();const be=new n.ExtrudeGeometry(xe,{depth:.07,bevelEnabled:!1}),U=a([0,0,0],H);return o(be,y,null,null,U),U.scale.setScalar(ae),U}const $=ee(_,.88);$.position.set(0,.1,.2),$.visible=!1;const ue=ee($,.22);ue.position.set(-.03,-.2,.12);const fe=c([-.03,-.2,.085],[.34,.44,.01],b,$),ye=ee(t,.17);ye.position.set(2.8,1.14,-2.75),ye.rotation.y=Math.PI/4,p("СОН / 05",[0,-.055,2.94],1.65,.3,d,{size:48}).rotation.x=-Math.PI/2,p("СЕБЯ?",[0,.36,-.88],1.05,.26,d,{size:52});const Re=p("?",[-1.6,.65,1.5],.48,.65,d,{size:84,bg:"#1c4147"}),te=u([0,.12,0],.68,.035,s.light,d);g(d,[R,_,...N,...G,z,J,Re,te]),g(R,[]),g(_,[A,D,O,$]),g(A,[]),g(D,[]),g(O,[]),g($,[ue,fe]),g(ue,[]),N.forEach(H=>g(H,[])),G.forEach(H=>g(H,[]));let F=ac(),K=!1,he=0,ne=0,C=!1;try{C=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}ye.visible=C;function P(){F=ac(),he=0,ne=0,K=!0,d.visible=!0,t.visible=!1,V(0,0)}function W(){K=!1,d.visible=!1,t.visible=!0}function q(H){F=wx(F,H),v(H==="self"?330:165),m()}function oe(){F=Tx(F),v(F.phase==="climbing"?440:220),m()}function V(H,ae){if(!K)return;const xe=F.phase;F=Ax(F,H);const be=F.phase==="unfolding"?F.progress:["stairs","climbing","inside"].includes(F.phase)?1:0;he=be*be*(3-2*be),ne=n.MathUtils.damp(ne,F.phase==="inside"?1:0,3,H),N.forEach((ze,we)=>{ze.position.lerpVectors(B[we],X[we],he),ze.rotation.y=he*(-we*.07)});const U=F.phase==="measuring"?Math.sin(F.progress*Math.PI):0;if(G.forEach((ze,we)=>{const L=we===0?-1:1;ze.position.set(L*(2.35-U*1.55),1.65+he*.4,-he*.85),ze.rotation.z=L*he*.65}),O.rotation.z=F.phase==="measuring"?Math.sin(F.progress*35)*.8:F.phase==="refused"?Math.sin(ae*6)*.25:-he*Math.PI*1.75,z.position.y=.7+(F.phase==="measuring"?Math.sin(F.progress*Math.PI)*1.5:Math.sin(ae*1.3)*.05),z.scale.set(.45*(1-U*.16),.64*(1+U*.3),.45*(1-U*.16)),Re.visible=F.phase==="refused",Re.position.y=.65+Math.sin(ae*2)*.1,A.rotation.y=ne*1.7,D.rotation.y=-ne*1.7,O.visible=ne<.2,$.visible=F.phase==="inside",$.rotation.z=Math.sin(ae*.7)*.04,ue.rotation.z=-ae*.12,J.position.copy(k),J.scale.setScalar(.43),J.visible=F.phase!=="inside",["climbing","inside"].includes(F.phase)){const ze=F.phase==="inside"?1:F.progress,we=[k,...X.map(j=>j.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],L=ze*(we.length-1),x=Math.min(we.length-2,Math.floor(L));J.position.lerpVectors(we[x],we[x+1],Math.min(1,L-x)),J.scale.setScalar(.43*(1-ze*.8))}if(te.position.set((F.target==="self",0),F.target==="self"?3.7:.12,F.target==="self"?-1.4:0),te.rotation.x=F.target==="self"?0:Math.PI/2,te.visible=["ready","refused","measuring","unfolding"].includes(F.phase),F.trace&&!C){C=!0,ye.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}xe!==F.phase&&m()}function Q(){return{ready:F.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[F.phase]}return{enter:P,exit:W,choose:q,act:oe,update:V,text:Q,button:()=>F.phase==="inside"?"увидеть сон снова":F.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...F,active:K,trace:C,unfold:he,opened:ne,rootVisible:t.visible,roomVisible:d.visible,steps:N.map(H=>H.position.toArray()),jaws:G.map(H=>H.position.toArray()),drop:z.position.toArray(),head:J.position.toArray(),cursorVisible:$.visible,cursorPosition:$.getWorldPosition(new n.Vector3).toArray(),faceAngles:[A.rotation.y,D.rotation.y],nestedVisible:$.visible&&ue.visible,landmarks:[z.position.toArray(),[0,3.7,-1.4],k.toArray(),X[0].toArray()]})}}const Cx=["восток","юг","запад","север"],af=[0,2,3];function Ol(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function Px(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Lx(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==af[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function Dx(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Ix({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:f,torus:u,sign:p,batchStatic:g,chime:v,changed:m}){const d=a([0,0,0],e);d.name="dream-04-letter-above-roof",d.visible=!1;const M=r("#355b62"),w=r("#72a49c",{metalness:.25,roughness:.5}),y=r("#eee3bd");r("#96c9c2"),h([0,-.45,0],3.9,.32,M,d),u([0,-.26,0],3.78,.024,s.copper,d);for(let C=0;C<4;C++){const P=C*Math.PI/2,W=Math.cos(P)*3.05,q=Math.sin(P)*3.05;p(["В","Ю","З","С"][C],[W,-.23,q],.38,.28,d).rotation.x=-Math.PI/2}const b=[],S=[],R=[];for(let C=0;C<3;C++){const P=1.05+C*1.4,W=2.05-C*.27,q=a([0,P,0],d);b.push(q);for(let ae=1;ae<4;ae++){const xe=ae*Math.PI/2,be=Math.cos(xe),U=Math.sin(xe),ze=[[.3,.3,-.3],[.3,.3,.3],[W,.04,W],[W,.04,-W]],we=new n.BufferGeometry,L=[];for(const j of[0,1,2,0,2,3]){const[ie,le,Me]=ze[j];L.push(ie*be-Me*U,le,ie*U+Me*be)}we.setAttribute("position",new n.Float32BufferAttribute(L,3)),we.computeVertexNormals();const x=w.clone();x.side=n.DoubleSide,o(we,x,null,null,q),f([W*be-W*U,.04,W*U+W*be],[W*be+W*U,.04,W*U-W*be],.035,s.copper,q);for(const j of[-1,1])f([W*be-W*U*j,.04,W*U+W*be*j],[(W+.16)*be-(W+.16)*U*j,.2,(W+.16)*U+(W+.16)*be*j],.035,s.copper,q)}const oe=a([W*.67,.045,0],q);f([-.32,0,0],[.3,0,0],.026,s.mint,oe),f([.3,0,0],[.1,0,.13],.026,s.mint,oe),f([.3,0,0],[.1,0,-.13],.026,s.mint,oe),S.push(oe);const V=af[C]*Math.PI/2,Q=Math.cos(V)*W*.63,de=Math.sin(V)*W*.63,H=u([Q,P+.09,de],.16,.025,s.light,d);R.push(H),p(`${C+1}`,[W+.26,P+.14,.2],.36,.29,d,{bg:"#355b62",fg:"#f0e4b8"});for(const ae of[-1,1])f([ae*.3,P-.32,-.3],[ae*.3,P-.03,-.3],.018,s.copper,d)}const _=a([-2.6,.16,1.5],d);c([0,0,0],[1.1,.62,.7],s.cream,_),c([0,.16,.361],[.72,.07,.025],M,_),p("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,d,{size:40});const T=i.clone(!0);d.add(T),T.scale.setScalar(.53),T.position.set(-2.6,1,1.5),T.rotation.z=-.12,p("СОН / 04",[0,-.12,3.34],1.8,.32,d,{size:48}).rotation.x=-Math.PI/2;const A=a([-1.1,.12,1.5],d);c([0,0,0],[.52,.025,.36],y,A);const D=a([-.26,.016,0],A),O=a([.26,.016,0],A);c([.13,0,0],[.26,.022,.36],y,D),c([-.13,0,0],[.26,.022,.36],y,O),f([-.25,.04,-.17],[0,.04,.1],.009,s.copper,A),f([.25,.04,-.17],[0,.04,.1],.009,s.copper,A);const G=l([0,.045,0],.055,s.light,A),N=a([0,5.3,0],d);u([0,0,0],.55,.025,s.copper,N),f([0,-.3,0],[0,.22,0],.018,s.copper,N);const B=Array.from({length:6},(C,P)=>{const W=P*Math.PI/3,q=l([Math.cos(W)*.29,0,Math.sin(W)*.29],[.21,.065,.11],y,N);return q.rotation.y=-W,q});N.visible=!1;const X=[new n.Vector3(-1.1,.12,1.5),...R.map(C=>C.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],z=new n.BufferGeometry().setFromPoints(X),J=new n.Line(z,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));J.computeLineDistances(),d.add(J);let k=Ol(),ee=!1,$=0,ue=!1,fe=[Math.PI/2,Math.PI/2,Math.PI/2];try{ue=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const ye=a([-3.75,1.17,-2.95],t);ye.visible=ue,c([0,0,0],[.23,.012,.16],y,ye),f([-.11,.016,-.07],[0,.016,.04],.005,s.copper,ye),f([.11,.016,-.07],[0,.016,.04],.005,s.copper,ye),g(d,[...b,...R,_,T,A,N,J]),b.forEach((C,P)=>g(C,[S[P]])),g(A,[D,O,G]),g(D,[]),g(O,[]),g(_,[]),g(N,B),g(ye,[]);function Re(){ee=!0,k=Ol(),$=0,fe=k.turns.map(C=>C*Math.PI/2),d.visible=!0,t.visible=!1,he(0,0)}function te(){ee=!1,d.visible=!1,t.visible=!0}function F(C){k=Px(k,C),v(165+C*55+k.turns[C]*22),m()}function K(){k.phase==="delivered"?(k=Ol(),$=0):k=Lx(k),v(220),m()}function he(C,P){if(!ee)return;const W=k.phase;k=Dx(k,C),$=n.MathUtils.damp($,k.phase==="delivered"?1:0,2.4,C),b.forEach((de,H)=>{const ae=k.turns[H]*Math.PI/2,xe=Math.atan2(Math.sin(ae-fe[H]),Math.cos(ae-fe[H]));fe[H]+=xe*(C===0?1:1-Math.exp(-C*7)),de.rotation.y=-fe[H],de.position.x=$*[-2.15,1.85,0][H],de.position.z=$*[.45,-.65,-2.1][H],de.rotation.z=$*(H===0?-.16:.13)});const q=Math.min(4,k.progress),oe=Math.min(3,Math.floor(q)),V=Math.min(1,q-oe),Q=V*V*(3-2*V);if(A.position.lerpVectors(X[oe],X[oe+1],Q),A.rotation.y=P*.16,D.rotation.z=-$*1.1,O.rotation.z=$*1.1,G.position.y=.045+$*.18,N.visible=k.phase==="delivered",N.rotation.y=P*.22,B.forEach((de,H)=>{de.position.y=Math.sin(P*.7+H)*.035}),J.visible=k.phase!=="delivered",k.trace&&!ue){ue=!0,ye.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}W!==k.phase&&m()}function ne(){return k.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":k.phase==="caught"?`Поймала крыша ${k.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:k.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:Re,exit:te,turn:F,send:K,update:he,text:ne,directions:Cx,inspect:()=>({...k,turns:[...k.turns],active:ee,trace:ue,open:$,roomVisible:d.visible,rootVisible:t.visible,roofs:b.map(C=>({position:C.position.toArray(),rotation:C.rotation.toArray().slice(0,3)})),letter:A.position.toArray(),goals:R.map(C=>C.position.toArray()),crown:N.visible})}}function Nx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:f,torus:u,sign:p,paperBoat:g,batchStatic:v,chime:m}){const d=a([0,0,0],e);d.name="dream-03-silent-dock",d.visible=!1;const M=r("#526b79"),w=r("#375d69",{metalness:.35,roughness:.27}),y=r("#c7cdb3");h([0,-.45,0],4.15,.38,M,d),h([0,-.23,0],4,.055,w,d),u([0,-.18,0],4.08,.04,s.copper,d),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,d);for(let P of[-.1,.55,1.2,1.85])c([-2.85,.07,P],[1.38,.045,.025],M,d);for(let P of[-3.4,-2.3])f([P,-.3,1.9],[P,.48,1.9],.035,s.copper,d);p("СОН / 03",[-2.85,.13,2.4],1.6,.28,d,{size:48}).rotation.x=-Math.PI/2;const b=i.clone(!0);b.position.set(-2.8,1.27,.75),b.scale.setScalar(.65),d.add(b);const S=[];for(const P of[-1,1]){const W=a([P*.12,-.04,.68],b);f([0,0,0],[P*.64,-.2,.05],.06,s.black,W),l([P*.62,-.18,.05],[.19,.095,.07],s.black,W),f([P*.58,-.18,.06],[P*.58,-.7,.06],.015,s.copper,W),l([P*.58,-.76,.06],.075,s.copper,W),v(W,[]),S.push(W)}const R=Array.from({length:3},(P,W)=>u([-1.2+W*1.25,-.17,-.25],.72,.035,W===1?s.cream:s.copper,d)),_=Array.from({length:3},(P,W)=>u([-1.2+W*1.25,-.165,-.25],.72,.013,y,d)),T=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,d),A=g(d,[-1.9,-.13,-.25],.9),D=l([0,.53,0],[.065,.09,.065],s.light,A),O=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,d);O.rotation.z=.65;const G=[];for(let P=0;P<5;P++){const W=-1.6+P*.85;f([W,-.2,-2.9],[W,1.1+P%2*.4,-2.9],.025,M,d),G.push(l([W,1.12+P%2*.4,-2.9],.035,s.light,d))}let N=!1,B=0,X=1,z=[1,1,1],J=[0,0,0],k=0,ee=0,$=!1;try{$=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ue=u([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ue.visible=$;const fe=Array.from({length:5},()=>new n.Vector3),ye=new n.CatmullRomCurve3(fe),Re=new n.Vector3,te=new n.Vector3;v(d,[b,...R,..._,T,A,O,...G]),v(b,S),v(A,[D]);function F(P){X=n.MathUtils.clamp(Math.round(Number(P)||1),1,3)}function K(){N=!0,B=0,z=[1,1,1],J=[0,0,0],k=0,ee=0,d.visible=!0,t.visible=!1,C(0,0)}function he(){N=!1,d.visible=!1,t.visible=!0}function ne(){if(N){if(B===3){B=0,z=[1,1,1],J=[0,0,0],ee=0;return}if(z[B]=X,B++,k=0,m(110+X*55),B===3){$=!0,ue.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function C(P,W){if(!N)return;ee+=Math.min(P,.15),k+=Math.min(P,.15);for(let Q=0;Q<3;Q++){J[Q]=n.MathUtils.damp(J[Q],Q<B?1:0,3,P);const de=-.17+J[Q]*(.95+z[Q]*.42),H=.72+z[Q]*.12;R[Q].position.y=de,R[Q].rotation.set(Math.PI/2*(1-J[Q]),Math.PI/2*J[Q],0),R[Q].scale.setScalar(H/.72),_[Q].scale.setScalar(H/.72*(1+Math.sin(ee*.9+Q)*.045)),fe[Q+1].set(R[Q].position.x,Math.max(-.1,de),-.25)}fe[0].set(-2,-.1,-.25),fe[4].set(2.5,-.1,-.25);const q=(1-Math.cos(ee*.55))*.5;ye.getPoint(q,Re),ye.getPoint(Math.min(.999,q+.012),te),A.position.copy(Re),A.rotation.z=n.MathUtils.clamp(Math.atan2(te.y-Re.y,te.x-Re.x),-.45,.45),A.rotation.y=0,T.visible=B>0;const oe=Math.min(1,k/1.8),V=Math.max(0,B-1);T.position.set(n.MathUtils.lerp(-2.5,-1.2+V*1.25,oe),.35+oe*(2.1+z[V]*.35),n.MathUtils.lerp(1.4,-.25,oe)),T.rotation.y=ee*.4,S.forEach((Q,de)=>Q.rotation.z=Math.sin(ee*1.2+de*Math.PI)*(.06+B*.04)),D.position.y=.53+Math.sin(W)*.02}return{enter:K,exit:he,toss:ne,choose:F,update:C,inspect:()=>({active:N,step:B,force:X,forces:[...z],lift:[...J],trace:$,roomVisible:d.visible,rootVisible:t.visible,boat:A.position.toArray(),ringY:R.map(P=>P.position.y),ringRotation:R.map(P=>P.rotation.toArray().slice(0,3)),stone:T.position.toArray()})}}function Uu(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,h=Math.min(i,Math.max(0,360-l.age));l.age+=h,l.exposure[l.face]+=h,l[t.air==="damp"?"wet":"dry"]+=h}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const h=Number(l.id),f=t.shelf.findIndex(u=>u.id===h);if(f<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const u=t.shelf.splice(f,1)[0];t.lastMeal={id:u.id,at:n.now,kind:u.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const h=t.batch;if(!h||h.age<360)s={ok:!1,reason:h?"not_ready":"no_wheel",remaining:h?360-h.age:0};else{const u=Math.abs(h.exposure[0]-h.exposure[1])<=120?h.culture==="moon"&&h.wet>=180?"moon_stair":h.culture==="stone"&&h.dry>=180?"stone":"holes":"lopsided",p={id:h.id,culture:h.culture,kind:u,exposure:h.exposure.slice(),wet:h.wet,dry:h.dry,turns:h.turns};t.shelf.push(p),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:p,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const Ux={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Fx({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:h,sign:f,batchStatic:u,changed:p,watching:g,localPlay:v}){var W,q,oe;const m=s([24,-1.55,0]);m.name="cheese-cellar";const d=i("#697b70"),M=i("#b4b89b"),w=i("#936c4d"),y=i("#e1b064"),b=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],d,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let V=-4;V<=4;V+=2)r([V,1.5,-3.43],[.16,3,.1],d,m);for(let V of[-4.4,4.4])c([V,0,-3.3],[V,3.6,-3.3],.09,t.copper,m),c([V,3.6,-3.3],[V,3.6,2.5],.09,t.copper,m),c([V,3.6,2.5],[V,0,2.5],.09,t.copper,m);f("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let V of[-3.8,3.8])r([V,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,S,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let V of[2.8,3.5])a([V,.28,1.8],.26,.56,t.cream,m),a([V,.59,1.8],.12,.1,t.copper,m);const R=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let V=0;V<4;V++)r([2.25+V*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const _=s([.5,1.02,.25],m),T=h(new n.CylinderGeometry(1.2,1.2,.62,40),y,[0,0,0],null,_),A=h(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),b,[0,0,0],null,_),D=l([0,.33,0],.35,.026,t.cream,_),O=s([.5,.65,2.3],m),G=[];for(let V=0;V<6;V++)G.push(o([-1.25+V*.5,0,0],.08,t.mint,O));const N=f("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});N.rotation.x=-Math.PI/2;function B(V){const Q=s(V,m),de=h(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,Q),H=h(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),b.clone(),[0,0,0],null,Q),ae=s([0,-.14,.09],Q);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ae);const xe=o([.09,.16,.27],.04,t.mint,ae),be=h(new n.IcosahedronGeometry(.21,0),d,[.13,.02,.23],null,Q),U=s([0,0,0],Q);for(const[ze,we,L]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,we,L],[.05,.05,.025],t.dark,U);return{g:Q,body:de,crust:H,steps:ae,crystal:be,holes:U,pearl:xe}}const X=Array.from({length:6},(V,Q)=>B([-3.15+Q*1.26,1.42,-2.6])),z=s([0,0,0],e);for(let V=0;V<24;V++){const Q=V/23;r([8.3+Q*11.2,-.15-Q*1.32,1.4+Math.sin(Q*Math.PI)*2],[.85,.15,.75],d,z)}for(let V=0;V<5;V++)r([20+V*.7,-1.46,1.4-V*.22],[.75,.13,.7],d,z);f("СЫР →",[10.2,.35,2.4],1.5,.4,z,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,z),u(z,[]),u(m,[_,R,O,N,...X.map(V=>V.g)]);for(const V of X)u(V.steps,[V.pearl]),u(V.holes,[]);let J=null,k=null,ee=0,$=null,ue="",fe=0;try{const V=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");J=(V==null?void 0:V.state)||V,ee=Number(V==null?void 0:V.clockOffset)||0}catch{}const ye=()=>Date.now()/1e3+ee;function Re(V,Q,de={}){const H=Uu({state:J,mode:V,tool:Q,args:de,now:ye()});J=H.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:J,clockOffset:ee}))}catch{}return H}Re("migrate");const te=document.createElement("div");te.id="cellar-controls",te.hidden=!0,te.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(te);function F(){return k&&g()?k:Uu({mode:"migrate",state:J,now:J.updated}).public}function K(V){$=V;const Q=V.batch;if(_.visible=!!Q,N.visible=!Q,R.rotation.y=V.air==="dry"?-.8:0,Q){_.rotation.z=Q.face?Math.PI:0;const de=Q.age/360;T.material.color.set(Q.culture==="moon"?"#e9cf8b":"#c8bc88"),A.material.color.set(V.air==="damp"?"#8b9f78":"#b87a48"),D.scale.setScalar(1+de*.15)}for(let de=0;de<6;de++)G[de].visible=!!Q&&Q.age>=(de+1)*60;X.forEach((de,H)=>{const ae=V.shelf[H];de.g.visible=!!ae,ae&&(de.g.rotation.z=ae.kind==="lopsided"?.22:0,de.crust.material.color.set(ae.wet>=180?"#8b9f78":"#b87a48"),de.steps.visible=ae.kind==="moon_stair",de.crystal.visible=ae.kind==="stone",de.holes.visible=ae.kind==="holes"||ae.kind==="lopsided")})}function he(V,Q){v();const de=Re("action",V,Q);return ue="",P(0),p(),de}for(const V of te.querySelectorAll("[data-culture]"))V.onclick=()=>he("set_batch",{culture:V.dataset.culture});te.querySelector("#cellar-turn").onclick=()=>he("tend",{air:J.air,turn:!0}),te.querySelector("#cellar-air").onclick=()=>he("tend",{air:J.air==="damp"?"dry":"damp",turn:!1}),te.querySelector("#cellar-wait").onclick=()=>{v(),ee+=60,Re("tick"),ue="",P(0),p()};function ne(){const V=$||F(),Q=V.batch,de=k&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",H=Q?Q.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(Q.age)}/360 с. Корка: ${Math.floor(Q.exposure[0])}/${Math.floor(Q.exposure[1])} с.`:V.shelf.length?`На полке: ${V.shelf.map(ae=>Ux[ae.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:k&&g()?"войти в свою сыроварню":Q?Q.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(k&&g())&&!!Q&&!Q.ready,description:de+" "+H}}function C(){const V=$||F(),Q=V.batch;te.querySelector("#cellar-readout").textContent=`${V.air==="damp"?"сыро":"сухо"} · ${Q?Q.ready?"готово":`ещё ${Math.ceil(Q.remaining)} с`:"нет колеса"} · полка ${V.shelf.length}/6`;for(const de of te.querySelectorAll("[data-culture]"))de.disabled=!!Q;te.querySelector("#cellar-turn").disabled=!Q||Q.ready,te.querySelector("#cellar-air").textContent=V.air==="damp"?"сделать суше":"вернуть сырость"}function P(V){V-fe>=1&&(fe=V,Re("tick"));const Q=F(),de=JSON.stringify(Q);de!==ue&&(ue=de,K(Q),C(),p())}return window.addEventListener("beznogim:state",({detail:V})=>{var de,H;const Q=(H=(de=V.mechanics)==null?void 0:de.cellar)==null?void 0:H.public;Q&&(k=Q,ue="")}),k=((oe=(q=(W=window.__beznogimState)==null?void 0:W.mechanics)==null?void 0:q.cellar)==null?void 0:oe.public)||null,K(F()),C(),{house:m,controls:te,update:P,card:ne,run:()=>he(J.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:k&&g()?"resident":"sandbox",...$,wheelVisible:_.visible,shelfVisible:X.filter(V=>V.g.visible).length,stairsVisible:X.filter(V=>V.g.visible&&V.steps.visible).length,shutter:R.rotation.y})}}function Ox({entries:n,elements:e,layer:t,camera:i}){const s=new ft,r=new ft,o=new I,a=Object.entries(n).map(([f,u])=>({element:e[f],anchor:u.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,h=!1;return{update(f,u,p){if(t.hidden===f&&(t.hidden=!f),!f){h=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!h||c!==u||l!==p||!s.equals(r);c=u,l=p,h=!0;for(const v of a){if(typeof v.anchor=="function")v.anchor(o);else{if(!g)continue;o.copy(v.anchor)}o.applyMatrix4(s);const m=(o.x+1)*u*.5,d=(1-o.y)*p*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=u-10&&d>=10&&d<=p-55;if(M!==v.visible&&(v.visible=M,v.element.classList.toggle("hidden",!M)),!M)continue;const w=Math.round(m*10)/10,y=Math.round(d*10)/10;(w!==v.x||y!==v.y)&&(v.x=w,v.y=y,v.element.style.transform=`translate3d(${w}px,${y}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function zx(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),h=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,f=Math.max(12,h?0:a.bottom+12,h?l.bottom+12:0),u=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(f)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(u)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Te=n=>document.querySelector(n),$t=()=>innerWidth<700,lf=matchMedia("(prefers-reduced-motion: reduce)").matches;let fr={};try{fr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Ee={loop:0,roof:null,running:!!fr.running,harvest:Math.min(99,Math.max(0,Number(fr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(fr.dockTrips)||0))),dockPending:fr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Xs(){return Ee.roof===null?Ee.running||Ee.loop>0:!!Ee.roof}function lc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Ee.running,harvest:Ee.harvest,dockTrips:Ee.dockTrips,dockPending:Ee.dockPending}))}catch{}}const ut=new sf({antialias:!0,alpha:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(devicePixelRatio,$t()?1.5:2));ut.setSize(innerWidth,innerHeight,!1);ut.shadowMap.enabled=!0;ut.shadowMap.type=Is;ut.shadowMap.autoUpdate=!1;ut.shadowMap.needsUpdate=!0;ut.outputColorSpace=rn;ut.toneMapping=wa;ut.toneMappingExposure=1.22;Te("#world").append(ut.domElement);const yn=new Rd;yn.background=new ot("#182e32");yn.fog=new Oa("#182e32",8e-4);const Fe=new Br(-10,10,10,-10,.1,600),Jc=new I(0,1,0);Fe.position.set(20,20,24);Fe.lookAt(Jc);const Je=new tx(Fe,ut.domElement);Je.target.copy(Jc);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=xi.PAN;Je.mouseButtons.RIGHT=xi.PAN;Je.touches.ONE=_i.PAN;Je.touches.TWO=_i.DOLLY_PAN;yn.add(new Wd("#d9eedc","#334d53",2.3));const ds=new qc("#ffe2ac",3.3);ds.position.set(-7,14,6);ds.castShadow=!0;ds.shadow.mapSize.set($t()?512:1024,$t()?512:1024);Object.assign(ds.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});ds.shadow.bias=-4e-4;ds.shadow.normalBias=.025;yn.add(ds);const cf=new qc("#8ad5d8",1.3);cf.position.set(5,7,-8);yn.add(cf);const Et=new Oi;yn.add(Et);const zl={};function tt(n,e={}){const t=n+JSON.stringify(e);return zl[t]||(zl[t]=new Ls({color:n,roughness:.8,...e}))}const si={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},me={concrete:tt(si.concrete),cream:tt(si.cream),dark:tt(si.dark),metal:tt(si.metal,{metalness:.5,roughness:.4}),copper:tt(si.copper,{metalness:.6,roughness:.35}),rust:tt(si.rust),black:tt(si.black),leaf:tt(si.leaf),light:tt("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:tt("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},$s={box:new Ti(1,1,1),sphere:new Va(1,12,8),ico:new zr(1,1),cyl:new Fr(1,1,1,16),cone:new hs(1,1,8)};function Ut(n,e,t,i,s=Et){const r=new fn(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const qe=(n,e,t,i=Et)=>Ut($s.box,t,n,e,i),ht=(n,e,t,i=Et)=>Ut($s.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),Tt=(n,e,t,i,s=Et)=>Ut($s.cyl,i,n,[e,t,e],s);function kr(n,e,t,i=Et,s=.08){return Ut(new $c(...e,1,s),t,n,null,i)}function xt(n=[0,0,0],e=Et){const t=new Oi;return t.position.set(...n),e.add(t),t}function Js(n,e,t,i=Et){const s=new zc(n.map(r=>new I(...r)));return Ut(new Wa(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function bt(n,e,t,i,s=Et){const r=new I(...n),o=new I(...e),a=o.clone().sub(r),c=Tt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new I(0,1,0),a.normalize()),c}function Pt(n,e,t,i,s=Et,r=[Math.PI/2,0,0]){const o=Ut(new Ha(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function en(n,e,t,i,s=Et,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new Uc(o);c.colorSpace=rn;const l=Ut(new us(t,i),new Ur({map:c,side:Pn}),e,null,s);return l.castShadow=!1,l}let Bl=179;function Mt(){return Bl=Bl*1664525+1013904223>>>0,Bl/4294967296}const ya=document.createElement("canvas");ya.width=ya.height=256;const Ma=ya.getContext("2d");Ma.fillStyle="#b4bcaa";Ma.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Ma.fillStyle=`rgba(${Mt()>.5?"60,82,64":"235,229,201"},${Mt()*.08})`,Ma.fillRect(Mt()*256,Mt()*256,1+Mt()*3,1+Mt()*3);const Lr=new Uc(ya);Lr.wrapS=Lr.wrapT=Sr;Lr.repeat.set(5,5);Lr.colorSpace=rn;const Bx=tt("#c2c6b1",{map:Lr,roughness:.97});function Kc(n,e,t,i,s=Et){const r=new Or;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new Ys(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Ut(o,i,null,null,s)}const Qc=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Kc(Qc,0,.82,me.concrete);Kc(Qc,.06,.14,Bx);Kc(Qc.map(([n,e])=>[n*.97,e*.97]),-.8,.6,tt("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Mt()*10.9,t=Mt()>.5?5.15:-5.2,i=Ut($s.ico,tt(n%3?"#557469":"#668477"),[e,-1.15-Mt()*.5,t],[.25+Mt()*.8,.2+Mt()*.55,.35+Mt()*.3]);i.rotation.y=Mt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;qe([e,-.37,5.61],[.48,.19,.025],n%2?me.copper:me.dark),n%2===0&&Js([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,me.metal)}en("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,Et,{size:32});const Dt=xt([-3.2,.08,-2.5]),hn=xt([0,0,0],Dt);qe([0,.08,0],[4.5,.15,3.6],me.dark,Dt);qe([0,1.2,-1.68],[4.5,2.4,.18],me.cream,Dt);qe([-2.15,1,0],[.18,2,3.6],me.cream,Dt);for(let n=0;n<5;n++){qe([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],me.concrete,Dt),qe([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],me.metal,Dt);for(let e=0;e<3;e++)qe([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],me.copper,Dt)}qe([0,2.47,-.2],[4.8,.14,3.7],me.rust,hn);for(let n=0;n<23;n++){const e=qe([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],tt("#d09062"),hn);e.rotation.x=-.015}qe([0,2.35,1.62],[4.8,.14,.18],me.dark,Dt);bt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,me.copper,Dt);bt([2.3,.12,1.62],[2.3,2.4,1.62],.055,me.copper,Dt);en("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Dt,{size:37});qe([.1,.85,-.84],[3.8,.13,.87],me.rust,Dt);for(const n of[-1.5,1.65])qe([n,.44,-.84],[.12,.85,.65],me.metal,Dt);for(let n=0;n<3;n++)qe([-1.15+n*.95,.51,-.85],[.82,.47,.75],me.concrete,Dt),qe([-1.15+n*.95,.5,-.44],[.18,.04,.03],me.copper,Dt);for(let n=0;n<6;n++)qe([-1.6+n*.48,2.07,-1.48],[.28,.16+Mt()*.16,.17],tt(["#9fba95","#cb9b70","#667f71"][n%3]),Dt);Tt([0,.5,.7],.32,.12,me.rust,Dt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;bt([e,.06,t],[e,.5,t],.04,me.metal,Dt)}for(let n=0;n<4;n++)Pt([-1.5,.06,1],.3-n*.045,.025,me.black,Dt);Tt([-1.5,3,-.9],.16,.9,me.metal,hn);Tt([-1.5,3.47,-.9],.24,.08,me.rust,hn);qe([1.4,2.9,-.4],[.8,.5,.6],me.concrete,hn);for(let n=0;n<5;n++)qe([1.1+n*.15,2.94,-.085],[.035,.32,.03],me.dark,hn);const jc=new qa("#ffca86",5,5,2);jc.position.set(-3,1.7,-1.1);Et.add(jc);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=kr([n,.1,e],[.74,.05,.74],tt(Mt()>.3?"#b3baa6":"#a5b5a4"),Et,.018);t.rotation.y=(Mt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Mt()*12,t=-5.1+Mt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Ut($s.cone,me.leaf,[e,.1,t],[.022,.12+Mt()*.12,.022]);i.rotation.z=(Mt()-.5)*.7}const cc=new zn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Pn});qe([3.7,.12,3.6],[4.9,.24,2.7],me.dark);Ut(new us(4.5,2.4),cc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])qe([3.7,.29,n],[5,.38,.16],me.cream);for(const n of[1.18,6.2])qe([n,.29,3.6],[.16,.38,2.85],me.cream);for(let n=0;n<13;n++)qe([1.85,.5,2.15+n*.235],[1.08,.09,.22],tt(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])Tt([e,.88,n],.045,.8,me.copper);for(const n of[1.31,2.4])Js([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,me.cream);const eh=[];for(let n=0;n<6;n++){let e=qe([4+n*.095,-1.25,5.56],[.055,2.4,.03],tt("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));eh.push(e)}for(let n=0;n<4;n++)qe([3.96+n*.17,.31,5.31],[.055,.08,.6],me.dark);const Wt=xt([3.7,.1,-2.6]);kr([0,.14,0],[3.7,.27,3.5],me.cream,Wt,.09);for(const n of[-1.55,1.55])qe([n,1.76,0],[.17,3.25,.2],me.metal,Wt),qe([n,.38,0],[.45,.2,.6],me.copper,Wt),bt([n,.36,-1.2],[n,2.9,0],.045,me.copper,Wt),bt([n,.36,1.2],[n,2.9,0],.045,me.copper,Wt);qe([0,3.38,0],[3.5,.18,.26],me.copper,Wt);const kx=Pt([0,2.7,-.5],1.83,.035,me.copper,Wt,[0,0,0]);kx.scale.y=.85;const Gr=[];for(let n=0;n<5;n++){const e=xt([-1.18+n*.59,3.24,0],Wt),t=1.8+n*.12;bt([0,0,-.08],[0,-t,0],.015,me.dark,e),bt([0,0,.08],[0,-t,0],.015,me.dark,e),ht([0,-t,0],.205,me.copper,e),Pt([0,-t,0],.211,.012,me.light,e,[0,0,0]),Gr.push({group:e,len:t,phase:n})}qe([0,.6,1.3],[1.45,.8,.4],me.metal,Wt);en("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Wt,{size:40});const Gx=Tt([-.43,.97,1.3],.19,.07,me.cream,Wt);Gx.rotation.x=Math.PI/2;const th=qe([-.43,.99,1.342],[.015,.22,.008],me.rust,Wt);th.rotation.z=-.7;const hf=ht([.53,.93,1.52],.09,me.light,Wt),$a=xt([.15,.4,1.59],Wt);Pt([0,0,0],.19,.023,me.rust,$a,[0,0,0]);for(let n=0;n<3;n++)bt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,me.rust,$a);Js([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,me.copper);const uf=[];function nh(n,e,t=1.5){Tt([n,t/2,e],.038,t,me.metal),qe([n,t,e],[.27,.11,.27],me.dark),qe([n,t-.18,e],[.17,.25,.17],me.light),qe([n,t-.34,e],[.25,.08,.25],me.copper);const i=new qa("#ffbe70",1.8,3);i.position.set(n,t-.16,e),uf.push(i)}nh(-5.9,3.9,1.3);nh(.3,-4.8,1.7);nh(5.8,1.25,1.35);const on=xt([-3.6,.08,3.55]),hc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;kr([0,.14,e],[3.6,.3,1.14],me.rust,on,.06),qe([0,.305,e],[3.36,.04,.92],tt(si.soil),on);for(let t=0;t<4;t++){const i=xt([-1.26+t*.84,.33,e],on);Tt([0,.14,0],.026,.28,me.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=ht([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],tt(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){ht([0,.17,0],[.25,.18,.25],tt("#b6c58a"),i);for(let s=0;s<6;s++){const r=ht([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],me.leaf,i);r.rotation.y=s}hc.push(i)}else{const s=ht([.05,.22,0],[.1,.21,.12],tt(si.purple,{roughness:.35}),i);s.rotation.z=-.25,ht([.05,.41,0],[.075,.025,.07],me.leaf,i),hc.push(i)}}}const df=xt([-1.72,.1,.8],on);for(let n=0;n<2;n++)qe([n*3.45,.6,0],[.04,1.3,.04],me.copper,df);bt([0,1.25,0],[3.45,1.25,0],.022,me.copper,df);en("КОБАЧКИ",[-.45,.68,1.64],1,.26,on,{bg:"#c2c7a3",fg:"#445e45",size:42});Tt([1.9,.23,.7],.18,.34,tt("#6b9389"),on);bt([2.04,.25,.7],[2.4,.46,.7],.045,tt("#6b9389"),on);Pt([1.8,.48,.7],.16,.02,me.copper,on,[0,0,0]);qe([-1.6,.2,1.47],[.65,.4,.45],me.rust,on);for(let n=0;n<3;n++)qe([-1.6,.12+n*.11,1.71],[.7,.05,.025],me.copper,on);const vn=xt([-3.8,.08,.35]);Tt([0,.73,0],.58,.1,me.rust,vn);Tt([0,.35,0],.045,.7,me.metal,vn);for(let n=0;n<3;n++)bt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,me.metal,vn);const Vr=xt([.1,.81,0],vn);ht([0,.2,0],[.23,.22,.23],me.cream,Vr);Tt([0,.37,0],.14,.06,me.copper,Vr);ht([0,.42,0],.045,me.dark,Vr);bt([.15,.18,0],[.33,.32,0],.07,me.cream,Vr);Pt([-.15,.25,0],.18,.035,me.dark,Vr,[0,0,0]);for(const n of[-.35,.38])Tt([n,.84,.24],.082,.15,me.cream,vn),Pt([n,.92,.24],.084,.012,me.copper,vn),Tt([n,.921,.24],.063,.006,tt("#67513b"),vn),Pt([n+.09,.86,.24],.045,.011,me.cream,vn,[0,0,0]);const Ja=[];for(let n=0;n<9;n++){const e=ht([0,0,0],.07,tt("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),vn);e.castShadow=!1,Ja.push(e)}const Zn=xt([-5.65,.09,1.1]);qe([0,.3,0],[.7,.6,.7],me.concrete,Zn);kr([0,.8,0],[.68,.45,.35],me.dark,Zn,.05);for(let n=0;n<6;n++)qe([-.2+n*.05,.8,.18],[.022,.27,.018],me.copper,Zn);qe([.18,.85,.184],[.16,.075,.02],me.light,Zn);ht([.18,.72,.19],.05,me.cream,Zn);bt([.18,1,0],[.48,1.6,0],.012,me.copper,Zn);const ff=xt([-.5,.1,-4.6]);Tt([0,1.75,0],.055,3.5,me.metal,ff);ht([0,3.55,0],.09,me.copper,ff);Js([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,me.dark);for(let n=0;n<8;n++){let e=n/8;const t=Ut(new hs(.13,.3,3),tt(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const Ka=xt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=qe([0,0,0],[.55,.09,.025],me.rust,Ka);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}ht([0,0,.05],.08,me.copper,Ka);const jt=xt([7.25,-.03,1.5]);qe([0,-.12,0],[2.25,.3,2.5],me.metal,jt);for(let n=0;n<10;n++)qe([-.99+n*.22,.08,0],[.2,.08,2.6],me.rust,jt);qe([-.95,.2,-.95],[.35,.15,.35],me.dark,jt);Tt([.87,.34,.75],.075,.5,me.copper,jt);Tt([.87,.59,.75],.13,.05,me.cream,jt);bt([.87,.1,-.7],[.87,2.3,-.7],.035,me.copper,jt);Js([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,me.copper,jt);qe([.17,2.09,-.7],[.25,.4,.25],tt("#ffd591"),jt);qe([.17,2.32,-.7],[.34,.08,.34],me.dark,jt);for(let n=0;n<4;n++)Pt([.87,.15,.75],.24-n*.025,.024,tt("#b8ad86"),jt);qe([6.7,.07,1.5],[1.4,.13,.8],me.rust);en("НИКУДА",[.05,.28,1.36],1.3,.29,jt,{bg:"#c2c7a3",fg:"#445e45",size:45});const ih=[];function Qa(n,e,t=1){const i=xt(e,n),s=new Or;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Ut(new Ys(s,{depth:.19,bevelEnabled:!1}),tt("#dfc99a"),[0,.15,-.1],null,i);const r=Ut(new hs(.23,.36,3),me.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=Qa(Et,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);ih.push(e)}const $n=mx({THREE:jn,root:Et,dock:jt,state:Ee,M:me,mat:tt,group:xt,mesh:Ut,box:qe,sphere:ht,cyl:Tt,torus:Pt,rod:bt,sign:en,paperBoat:Qa,batchStatic:Ft,persist:lc,say:Cn,refresh:Ht,chime:Xi,reduced:lf}),Qe=xt([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const sh=tt("#233a39",{metalness:.42,roughness:.32});ht([0,.1,0],[.62,.8,.55],sh,Qe);ht([0,-.36,.1],[.44,.43,.43],sh,Qe);ht([-.61,.03,.03],[.1,.2,.12],me.copper,Qe);ht([.61,.03,.03],[.1,.2,.12],me.copper,Qe);for(const n of[-.23,.23]){ht([n,.2,.485],[.17,.13,.057],me.black,Qe),Pt([n,.2,.541],.078,.02,me.copper,Qe,[0,0,0]),ht([n,.2,.56],.041,me.light,Qe);const e=qe([n,.38,.48],[.24,.045,.06],me.cream,Qe);e.rotation.z=n>0?-.13:.13}ht([0,.04,.51],[.09,.17,.11],sh,Qe);ht([0,-.2,.44],[.31,.16,.11],me.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=kr([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],me.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=ht([t,i,-.04],[.18,.18,.48],me.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Js([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,tt("#f2edda"),Qe)}for(let n=0;n<3;n++)ht([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],me.cream,Qe);const rh=Pt([0,1.05,0],.77,.019,me.copper,Qe);rh.rotation.z=.14;const Vx=new qa("#ffbb62",.9,3);Vx.position.set(0,.2,.9);const Po=Pt([-.15,.26,.85],.7,.018,me.copper),Dr=Ut(new Ba(.64,32),new Ur({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Dr.rotation.x=-Math.PI/2;Dr.castShadow=!1;const vi=new I(-.15,1.9,.85),On=xt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=qe([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?me.cream:me.concrete,On);t.rotation.x=Math.PI/2-e,n%3===0&&bt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,me.copper,On)}for(const n of[-.45,.45])Pt([n,0,0],2.07,.025,me.copper,On,[0,Math.PI/2,0]);for(const n of[-.34,.34])Pt([n,0,0],1.7,.075,me.concrete,On,[0,Math.PI/2,0]);bt([0,-2.15,-1.2],[0,-1.58,-.8],.07,me.metal,On);bt([0,-2.15,1.2],[0,-1.58,.8],.07,me.metal,On);en("ОБРАТНО",[.49,-.55,.2],1.15,.3,On,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Mt()*20,t=-8+Mt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Ut($s.ico,tt("#47675f"),[e,-1.3-Mt()*2,t],[.22+Mt()*.55,.19+Mt()*.4,.27+Mt()*.4])}const pf=new Bt,mf=[];for(let n=0;n<75;n++)mf.push((Mt()-.5)*25,Mt()*9-2,(Mt()-.5)*22);pf.setAttribute("position",new pt(mf,3));const gf=new Cd(pf,new Ic({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));yn.add(gf);function Ft(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new ft().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=px(o,!1);a&&Ut(a,r,null,null,n),o.forEach(c=>c.dispose())}}Ft(Et,[Qe,on,Wt,vn,Zn,jt,Dt,On,Ka,...ih,...Ja,...eh,Po,Dr,$n.travel]);Ft(Dt,[hn]);Ft(hn,[]);Ft(On,[]);Ft(Qe,[rh]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});Ft(vn,[...Ja]);Ft(Zn,[]);Ft(jt,[$n.gallery,$n.beacon]);Ft(Wt,[...Gr.map(n=>n.group),$a,th,hf]);Gr.forEach(n=>Ft(n.group,[]));const Ir=xt([0,.33,0],on);hc.forEach(n=>{Ir.add(n),n.position.y-=.33});Ft(Ir,[]);Ft(on,[Ir]);const xn=Sx({THREE:jn,root:Et,scene:yn,head:Qe,M:me,mat:tt,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,paperBoat:Qa,batchStatic:Ft,changed:()=>{Ht(),ut.shadowMap.needsUpdate=!0},chime:Xi}),Mi=Fx({THREE:jn,root:Et,M:me,mat:tt,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,mesh:Ut,sign:en,batchStatic:Ft,changed:()=>{Ht(),ut.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),zi=Bf({THREE:jn,root:Et,M:me,mat:tt,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,batchStatic:Ft,changed:()=>{Ht(),ut.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),Si=Of({THREE:jn,root:Et,M:me,mat:tt,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,batchStatic:Ft,changed:()=>{Ht(),ut.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),ci=Ff({THREE:jn,root:Et,M:me,mat:tt,group:xt,box:qe,sphere:ht,rod:bt,torus:Pt,sign:en,batchStatic:Ft,changed:()=>{Ht(),ut.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),Bi=zf({THREE:jn,workshop:Dt,M:me,mat:tt,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,changed:()=>{Ht(),ut.shadowMap.needsUpdate=!0},watching:()=>mt==null?void 0:mt.watching(),localPlay:()=>mt.localPlay()}),ja=bx({THREE:jn,scene:yn,root:Et,head:Qe,M:me,mat:tt,mesh:Ut,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,batchStatic:Ft,chime:Xi}),Hr=Nx({THREE:jn,scene:yn,root:Et,head:Qe,M:me,mat:tt,mesh:Ut,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,paperBoat:Qa,batchStatic:Ft,chime:Xi}),Dn=Ix({THREE:jn,scene:yn,root:Et,head:Qe,M:me,mat:tt,mesh:Ut,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,batchStatic:Ft,chime:Xi,changed:()=>{tl(),ut.shadowMap.needsUpdate=!0}}),_f=Ex({head:Qe,group:xt,sphere:ht,box:qe,torus:Pt,M:me,mat:tt}),ai=Rx({THREE:jn,scene:yn,root:Et,head:Qe,M:me,mat:tt,mesh:Ut,group:xt,box:qe,sphere:ht,cyl:Tt,rod:bt,torus:Pt,sign:en,batchStatic:Ft,chime:Xi,changed:()=>{tl(),ut.shadowMap.needsUpdate=!0}});let Kt=null,Ct=1;const Bn={dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new I(-6.9,1.9,-20.1),position:new I(0,.6,-24),run:()=>ci.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new I(-17.5,1.3,3.4),position:new I(-24,.6,0),run:()=>Si.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new I(-1.4,1.5,-1.1),position:new I(-3.2,1.25,-2.2),run:()=>Bi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new I(4.7,.8,25.8),position:new I(0,.4,24),run:()=>zi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new I(28.4,2.2,2.5),position:new I(24,.4,0),run:()=>Mi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new I(-.1,2.15,4.3),position:new I(-.1,1,4.3),run:()=>xn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new I(-6,4.55,-3.25),position:new I(-6,2.2,-3.25),run:()=>{Ee.loop>0||(Ee.loop=12,xf.copy(Qe.position),Cn("ноги не понадобились"),Ht())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new I(-3.2,3.15,-2.5),position:new I(-3.2,1.1,-2.5),run:()=>{Ee.roof=Xs()?0:1,Cn(Xs()?"заходи":"прикрыл"),Ht()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new I(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Cn(n[Hx++%n.length]),vi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new I(3.7,3.85,-2.6),position:new I(3.7,1,-2.6),run:()=>{Ee.running=!Ee.running,lc(),Cn(Ee.running?"ну пошло":"можно и полежать"),Ht()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new I(-3.7,1.65,.35),position:new I(-3.8,1,.35),run:()=>{Ee.brew>0||(Ee.brew=8,Ee.teaCount++,vi.set(-2.65,1.7,.65),Cn("щас, чайник поставлю"),Ht())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new I(-3.4,1,3.8),position:new I(-3.6,1,3.55),run:()=>{Ee.harvest++,Fs=.15,lc(),vi.set(-1.6,1.6,2.3),Cn(Ee.harvest===1?"о, урожай":"кабачки опять победили"),Ht()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new I(-5.65,1.75,1.1),position:new I(-5.65,1,1.1),run:()=>{Ee.radio=(Ee.radio+1)%3,oh(),Cn(["тишина. нормально.","дождь поймал","провода поют"][Ee.radio]),Ht()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new I(7.4,2.75,1.1),position:new I(7.25,.9,1.5),run:()=>{$n.launchOrCollect(),Ee.dockPending===!1&&Ee.boat===0&&vi.set(5.85,1.7,1.05)}}};let Hx=0,Fs=1,vf=0,os=0;const xf=new I;let yf=()=>{Wi("engine"),Bn.engine.run()};const el={};for(const[n,e]of Object.entries(Bn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>Wi(n),Te("#hotspots").append(t),el[n]=t}const Mf=Te("#hotspots"),kl=Te("#speech"),is={width:innerWidth,height:innerHeight},Wx=Ox({entries:Bn,elements:el,layer:Mf,camera:Fe});let Gl=!1,Fu=NaN,Ou=NaN;const cr=new I;function Wi(n){Ee.selected=n,Te("#inspector").classList.remove("collapsed");const e=Bn[n];Te("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Te("#object-title").textContent=e.title,Te("#object-description").textContent=e.description,yf=e.run,Te("#focus-object").hidden=!1,Te("#focus-object").textContent=_n===n?"весь двор ⌂":"осмотреть ближе ⊕",Ht();for(const[t,i]of Object.entries(el))i.classList.toggle("selected",t===n)}function Ht(){const n=Ee.selected,e=Bn[n];if(Te("#status").textContent=Ee.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=Ee.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=Xs()?"закрыть крышу":e.action),n==="engine"&&(t=Ee.running?"остановить и отдохнуть":"запустить маятники",i=Ee.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=Ee.brew>0,t=s?"чай заваривается…":e.action,i=Ee.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&Ee.harvest&&(i=`Уже собрано: ${Ee.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Ee.radio]}. ${Ee.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=$n.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=xn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Mi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=zi.card();t=r.action,i=r.description}if(n==="bench"){const r=Bi.card();t=r.action,i=r.description}if(n==="drydock"){const r=Si.card();t=r.action,i=r.description}if(n==="dash"){const r=ci.card();t=r.action,i=r.description}ci.controls.hidden=n!=="dash",Si.controls.hidden=n!=="drydock",Bi.controls.hidden=n!=="bench",zi.controls.hidden=n!=="amnesty",Mi.controls.hidden=n!=="cellar",Te("#enter-bench")&&(Te("#enter-bench").hidden=n!=="workshop"),Te("#enter-dream05").hidden=n!=="stair",Te("#enter-dream03").hidden=n!=="dock",Te("#enter-dream04").hidden=n!=="workshop",Te("#greenhouse-controls").hidden=n!=="greenhouse",Te("#thermal-moves").hidden=xn.inspect().mode!=="playing",Te("#thermal-readout").textContent=`тепло ${xn.inspect().temp} · такты ${xn.inspect().turn}/6`,Te("#object-description").textContent=i,Te("#object-action").innerHTML=t+" <span>↗</span>",Te("#object-action").disabled=s}Te("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash"].includes(Ee.selected)&&mt.watching()){mt.localPlay();return}mt.localPlay(),yf(),os=performance.now()+2200};Te("#close-card").onclick=()=>Te("#inspector").classList.add("collapsed");function Cn(n){Te("#speech").textContent=n,vf=performance.now()+4e3,Te("#speech").classList.add("visible")}Te("#markers").onclick=()=>{Ee.markers=!Ee.markers,Te("#markers").setAttribute("aria-pressed",Ee.markers),Mf.hidden=!Ee.markers||!!Kt||Fe.zoom<.4};let _n=null;const un={angle:Math.PI/4,targetAngle:Math.PI/4};function Sf(){is.width=innerWidth,is.height=innerHeight;const n=innerWidth/innerHeight,e=$t()?19.6:9.6;Fe.left=-e*n,Fe.right=e*n,Fe.top=e-($t()?2.8:0),Fe.bottom=-e-($t()?2.8:0),Fe.updateProjectionMatrix(),ut.setSize(innerWidth,innerHeight,!1),ut.setPixelRatio(Math.min(devicePixelRatio,$t()?1.5:2))}function Ks(){if(mt==null||mt.unfollow(),Kt){nl();return}_n=null,document.body.classList.remove("close-look"),Te("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Fe.zoom=1,Je.target.copy(Jc),un.targetAngle=Math.PI/4,Fe.updateProjectionMatrix()}Te("#focus-object").onclick=()=>{if(Ee.selected){if(_n===Ee.selected){Ks();return}_n=Ee.selected,document.body.classList.add("close-look"),Te("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(Bn[Ee.selected].position),$t()&&(Je.target.y+=["cellar","amnesty","drydock","dash"].includes(_n)?-.7:1.6),Fe.zoom=["cellar","amnesty","drydock","dash"].includes(_n)?$t()?1.8:1.6:$t()?2.5:2.1,_n==="bench"?(Je.maxZoom=4.5,Fe.zoom=$t()?3.8:3.4,Je.target.y+=$t()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Fe.updateProjectionMatrix()}};Te("#home").onclick=Ks;Te("#zoom-in").onclick=()=>{Fe.zoom=Math.min(Je.maxZoom,Fe.zoom*1.2),Fe.updateProjectionMatrix()};Te("#zoom-out").onclick=()=>{Fe.zoom=Math.max(Je.minZoom,Fe.zoom/1.2),Fe.updateProjectionMatrix()};Te("#rotate").onclick=()=>un.targetAngle+=Math.PI/2;addEventListener("resize",Sf);Sf();function bf(n,e,t=!1){Kt&&nl(),Ks(),Je.target.set(n,1,e),Fe.zoom=t?1:.65,Fe.updateProjectionMatrix(),Te("#inspector").classList.add("collapsed")}function Xx(){bf(0,0);const n=innerWidth/innerHeight,e=$t()?19.6:9.6;Fe.zoom=Math.min(e*n/(Os.half*1.57),e/(Os.half*1.3)),Fe.updateProjectionMatrix()}const Os=Mx({root:Et,camera:Fe,controls:Je,mobile:$t,go:bf,overview:Xx,home:Ks,locationTarget:()=>_n==="dash"&&Ee.selected==="dash"?Bn.dash.position:null}),ki=document.createElement("select");ki.id="world-places";ki.setAttribute("aria-label","Открыть место");ki.append(new Option("места",""));for(const[n,e]of Object.entries(Bn))ki.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(ki,document.querySelector("#territory-location"));ki.onchange=()=>{const n=ki.value;Bn[n]&&(Ks(),Je.target.copy(Bn[n].position),Wi(n),ki.value="")};Fe.zoom=.72;Fe.updateProjectionMatrix();const zu=new Yd,Bu=new Se;let ts=null;ut.domElement.addEventListener("pointerdown",n=>{ts={x:n.clientX,y:n.clientY,time:performance.now()}});ut.domElement.addEventListener("pointerup",n=>{if(!ts||Math.hypot(n.clientX-ts.x,n.clientY-ts.y)>7||performance.now()-ts.time>550){ts=null;return}if(ts=null,Bu.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),zu.setFromCamera(Bu,Fe),Kt)return;const e=zu.intersectObjects([ci.house,Si.house,Bi.house,zi.house,Mi.house,xn.house,Qe,Wt,on,vn,Zn,jt,Dt,On,$n.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![ci.house,Si.house,Bi.house,zi.house,Mi.house,xn.house,Qe,Wt,on,vn,Zn,jt,Dt,On,$n.travel].includes(t);)t=t.parent;const i=new Map([[ci.house,"dash"],[Si.house,"drydock"],[Bi.house,"bench"],[zi.house,"amnesty"],[Mi.house,"cellar"],[xn.house,"greenhouse"],[Qe,"head"],[Wt,"engine"],[on,"garden"],[vn,"tea"],[Zn,"radio"],[jt,"dock"],[Dt,"workshop"],[On,"stair"],[$n.travel,"dock"]]).get(t);i&&Wi(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Bn)){const o=r.position.clone().project(Fe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&Wi(t)}});let wn=null;function qx(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function oh(){if(!wn)return;const n=wn.ctx.currentTime;wn.filter.frequency.setTargetAtTime([160,1100,260][Ee.radio],n,.4),wn.toneGain.gain.setTargetAtTime([.05,.025,.3][Ee.radio],n,.4)}Te("#sound").onclick=async()=>{try{wn||(wn=qx()),await wn.ctx.resume(),Ee.sound=!Ee.sound,wn.gain.gain.setTargetAtTime(Ee.sound?.08:0,wn.ctx.currentTime,.3),Te("#sound").textContent=Ee.sound?"звук включён":"звук выключен",Te("#sound").setAttribute("aria-pressed",Ee.sound),oh(),Ht()}catch{Cn("со звуком не сложилось")}};function Xi(n=330){if(!wn||!Ee.sound)return;const e=wn.ctx.currentTime,t=wn.ctx.createOscillator(),i=wn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(wn.gain),t.start(e),t.stop(e+1.1)}Te("#about").onclick=()=>Te("#about-dialog").showModal();Te("#close-about").onclick=Te("#back-to-yard").onclick=()=>Te("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&Kt){nl();return}n.key==="Escape"&&Te("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Te("#zoom-in").click(),n.key==="-"&&Te("#zoom-out").click(),n.key.toLowerCase()==="r"&&Te("#rotate").click(),n.key.toLowerCase()==="h"&&Ks()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{mt.localPlay(),xn.step(n.dataset.thermal),os=performance.now()+2200};const Yx={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function ah(){return Ct===1?xn:Ct===2?ja:Ct===3?Hr:Ct===4?Dn:ai}function tl(){const n=Ct===1?xn.inspect().dreamStep:ah().inspect().step,e=Yx[Ct];if(Te("#dream-force").hidden=Ct!==3,Te("#dream-roofs").hidden=Ct!==4,Te("#dream-meter").hidden=Ct!==5,Te("#dream-panel .object-kicker").textContent=`СОН 0${Ct} / БЕЗНОГИМ`,Te("#dream-panel h2").textContent=e.title,Te("#dream-text").textContent=Ct===5?ai.text():Ct===4?Dn.text():e.lines[n],Te("#dream-breathe").textContent=Ct===5?ai.button():Ct===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Te("#dream-breathe").disabled=Ct===4&&Dn.inspect().phase==="flying"||Ct===5&&["measuring","unfolding","climbing"].includes(ai.inspect().phase),Ct===5){const t=ai.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(Ct===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function Qs(n=1){Kt||(Ct=n,Kt={target:Je.target.clone(),zoom:Fe.zoom,angle:un.targetAngle,focused:_n,returnId:n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===5?"stair":"workshop"},ah().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,$t()?n===1?3:2.4:n===1?2:1.5,0),Fe.zoom=n===1?$t()?1.65:1.75:$t()?1.45:1.55,Fe.updateProjectionMatrix(),un.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5),Sa="",Te("#dream-panel").hidden=!1,tl(),ut.shadowMap.needsUpdate=!0)}function nl(){if(!Kt)return;const n=Kt;Kt=null,ah().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Fe.zoom=n.zoom,un.targetAngle=n.angle,_n=n.focused,Fe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Sa="",Te("#dream-panel").hidden=!0,ut.shadowMap.needsUpdate=!0,Wi(n.returnId)}Te("#enter-dream").onclick=()=>Qs(1);Te("#exit-dream").onclick=nl;Te("#dream-breathe").onclick=()=>{Ct===1?xn.breathe():Ct===2?ja.pour():Ct===3?Hr.toss():Ct===4?Dn.send():ai.act(),os=performance.now()+2200,tl(),ut.shadowMap.needsUpdate=!0};const Wr=document.createElement("button");Wr.id="enter-bench";Wr.hidden=!0;Wr.textContent="собрать механический монитор ↗";Wr.onclick=()=>{Wi("bench"),Te("#focus-object").click()};Te("#focus-object").before(Wr);const il=document.createElement("button");il.id="enter-dream02";il.textContent="сон 02 / вода спит ↗";il.onclick=()=>Qs(2);Mi.controls.append(il);Te("#enter-dream03").onclick=()=>Qs(3);Te("#enter-dream04").onclick=()=>Qs(4);Te("#enter-dream05").onclick=()=>Qs(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>ai.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),os=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{Hr.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Te("#dream-archive").onclick=()=>Te("#dream-archive-dialog").showModal();Te("#close-dream-archive").onclick=()=>Te("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Te("#dream-archive-dialog").close(),Qs(Number(n.dataset.dreamId))};const mt=_x({head:Qe,headDestination:vi,state:Ee,controls:Je,camera:Fe,refresh:Ht,setAudioTone:oh,say:Cn,onHarvest:()=>{Fs=.15}});let Vl="";const Ef=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Ef.push(new I(n,e,t));const wf=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])wf.push(new I(n,e,t));const Tf=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Tf.push(new I(n,e,t));function Zx(){const n=_n==="dash"&&Ee.selected==="dash",e=_n==="drydock"&&Ee.selected==="drydock"||n,t=(_n==="bench"&&Ee.selected==="bench"||e)&&!Te("#inspector").classList.contains("collapsed")&&!Kt;if(document.body.classList.toggle("dash-look",t&&n),document.body.classList.toggle("bench-look",t&&!e),document.body.classList.toggle("drydock-look",t&&e),!t){Vl="";return}if(Math.abs(un.angle-un.targetAngle)>.01)return;const i=Te("#inspector").getBoundingClientRect(),s=Te(".territory-nav").getBoundingClientRect(),r=Te(".toolbar").getBoundingClientRect(),o=innerWidth<=900&&innerHeight>innerWidth,a=o?{left:14,right:r.left-10,top:s.bottom+14,bottom:i.top-14}:{left:Math.max(i.right+18,s.right+18),right:r.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!o&&(a.left=s.right+12,a.right=innerWidth-16,a.top=r.bottom+10,a.bottom=i.top-10),n&&innerWidth<=900&&!o&&(a.left=12,a.right=i.left-12,a.top=s.bottom+10,a.bottom=Te("footer").getBoundingClientRect().top-12);const c=Te(".resident-history");e&&innerWidth>900&&c&&!c.hidden&&(a.right=Math.min(a.right,c.getBoundingClientRect().left-18));const l=[n?14:e?13:12,innerWidth,innerHeight,a.left,a.right,a.top,a.bottom,un.targetAngle].map(d=>Math.round(d*10)/10).join(":");if(l===Vl||a.bottom-a.top<35||a.right-a.left<50)return;Vl=l;const h=()=>{Fe.updateMatrixWorld();const d=(n?wf:e?Tf:Ef).map(M=>bn(M.clone()));return{l:Math.min(...d.map(M=>M.x)),r:Math.max(...d.map(M=>M.x)),t:Math.min(...d.map(M=>M.y)),b:Math.max(...d.map(M=>M.y))}};let f=h();Fe.zoom=Math.min(4.5,Fe.zoom*Math.min((a.right-a.left)/(f.r-f.l),(a.bottom-a.top)/(f.b-f.t))),Fe.updateProjectionMatrix(),f=h();const u=(a.left+a.right-f.l-f.r)/2,p=(a.top+a.bottom-f.t-f.b)/2,g=new I().setFromMatrixColumn(Fe.matrixWorld,0),v=new I().setFromMatrixColumn(Fe.matrixWorld,1),m=g.multiplyScalar(-u*(Fe.right-Fe.left)/Fe.zoom/innerWidth).add(v.multiplyScalar(p*(Fe.top-Fe.bottom)/Fe.zoom/innerHeight));Je.target.add(m),Fe.position.add(m),Fe.lookAt(Je.target),Fe.updateMatrixWorld()}let Sa="";const Af=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Af.push(new I(n,e,t));const Rf=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Rf.push(new I(n,e,t));function $x(){if(!Kt||![4,5].includes(Ct))return;const n=Te("#dream-panel").getBoundingClientRect(),e=Te("footer").getBoundingClientRect(),t=Te(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(un.angle*100)].join(":");if(o===Sa||r.right-r.left<60||r.bottom-r.top<80)return;Sa=o;const a=()=>{Fe.updateMatrixWorld();const g=(Ct===5?Af:Rf).map(v=>bn(v.clone()));return{l:Math.min(...g.map(v=>v.x)),r:Math.max(...g.map(v=>v.x)),t:Math.min(...g.map(v=>v.y)),b:Math.max(...g.map(v=>v.y))}};let c=a();Fe.zoom=Math.min(4.5,Fe.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Fe.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,h=(r.top+r.bottom-c.t-c.b)/2,f=new I().setFromMatrixColumn(Fe.matrixWorld,0),u=new I().setFromMatrixColumn(Fe.matrixWorld,1),p=f.multiplyScalar(-l*(Fe.right-Fe.left)/Fe.zoom/innerWidth).add(u.multiplyScalar(h*(Fe.top-Fe.bottom)/Fe.zoom/innerHeight));Je.target.add(p),Fe.position.add(p),Fe.lookAt(Je.target),Fe.updateMatrixWorld()}let ku=performance.now(),bo=0,Gu=0;function bn(n){return n.project(Fe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function Jx(){mt.sync();const n=performance.now(),e=(n-ku)/1e3;ku=n,bo+=e,Ee.energy=mn.damp(Ee.energy,Ee.running?1:0,1.6,e);const t=lf?bo*.2:bo;un.angle=mn.damp(un.angle,un.targetAngle,5,e);const i=160;Fe.position.set(Je.target.x+Math.sin(un.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(un.angle)*i),Fe.lookAt(Je.target),Je.update(),Kt||(Je.target.x=mn.clamp(Je.target.x,-62,Os.half+2),Je.target.z=mn.clamp(Je.target.z,-62,Os.half+2)),Os.update(),Zx(),$x();for(const s of Gr)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*Ee.energy*.45;if(hn.position.z=mn.damp(hn.position.z,Xs()?-2.5:0,2,e),hn.position.y=mn.damp(hn.position.y,Xs()?.4:0,2,e),$a.rotation.z=t*Ee.energy*.28,th.rotation.z=-.7+Ee.energy*1.35+Math.sin(t*4)*Ee.energy*.08,hf.material.emissiveIntensity=.45+Ee.energy*1.5,cc.uniforms.uTime.value=t,cc.uniforms.uEnergy.value=Ee.energy,Ka.rotation.z=t*(.09+Ee.energy*.23),uf.forEach(s=>s.intensity=.65+Ee.energy*1.5),jc.intensity=2+Ee.energy*4,Qe.position.x=mn.damp(Qe.position.x,vi.x,1.6,e),Qe.position.z=mn.damp(Qe.position.z,vi.z,1.6,e),Qe.position.y=mn.damp(Qe.position.y,vi.y+Math.sin(t*1.4)*.1,2,e),Ee.loop>0){Ee.loop=Math.max(0,Ee.loop-e);const s=12-Ee.loop;if(s<2){const r=mn.smoothstep(s,0,2);Qe.position.lerpVectors(xf,new I(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=mn.smoothstep(s,10,12);Qe.position.lerpVectors(new I(-6,.65,-3.25),vi,r),Qe.rotation.x=(1-r)*Math.PI*2}Ee.loop||(Qe.rotation.x=0,Cn("ну вот и дома"),Ht())}if(mt.place(),Qe.rotation.y=Math.sin(t*.3)*.12,rh.rotation.y=t*.13,Po.position.x=Qe.position.x,Po.position.z=Qe.position.z,Po.rotation.z=.04*Math.sin(t),Dr.position.x=Qe.position.x,Dr.position.z=Qe.position.z,Fs=mn.damp(Fs,1,.85,e),Ir.scale.y=Fs,Ir.rotation.z=Math.sin(t*.9)*.009,Ee.brew>0&&(Ee.brew=Math.max(0,Ee.brew-e),Ee.brew===0&&(Cn("чай готов. живём."),Ht(),Xi(440))),Ja.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=Ee.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),ih.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),_f.update(mt.watching()),ja.update(e,t),Hr.update(e,t),Dn.update(e,t),ai.update(e,t),ci.update(e),Si.update(e),Bi.update(e),hn.visible=!(_n==="bench"&&Ee.selected==="bench"&&!Te("#inspector").classList.contains("collapsed")&&!Kt),zi.update(e),Mi.update(bo),xn.update(e,t),$n.update(e,t),Gl!==Ee.dockPending&&(Gl=Ee.dockPending,el.dock.classList.toggle("waiting",Gl)),eh.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+Ee.energy*.23}),gf.rotation.y=t*.003,Ee.running&&t-Gu>3.5&&(Gu=t,Xi([220,277,330,415,440][Math.floor(t)%5])),Fe.updateMatrixWorld(),Wx.update(!Kt&&Fe.zoom>=.4&&Ee.markers,is.width,is.height),Kt||n>vf)kl.classList.contains("visible")&&kl.classList.remove("visible");else{cr.copy(Qe.position),cr.y+=1.52,cr.project(Fe);const s=Math.round(Math.max(85,Math.min(is.width-85,(cr.x+1)*is.width*.5))*10)/10,r=Math.round((1-cr.y)*is.height*.5*10)/10;(s!==Fu||r!==Ou)&&(Fu=s,Ou=r,kl.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}os&&performance.now()>os&&(ut.shadowMap.needsUpdate=!0,os=0),ut.render(yn,Fe)}Ee.running&&(Te("#object-action").innerHTML="остановить двор <span>↗</span>");Ht();ut.setAnimationLoop(Jx);requestAnimationFrame(()=>Te("#loading").classList.add("done"));window.__yard={state:Ee,select:Wi,inspect:()=>({resident:mt.inspect(),territory:Os.inspect(),sleepBody:_f.inspect(),sleepDream:ja.inspect(),quietDream:Hr.inspect(),meterDream:ai.inspect(),meterDreamScreen:ai.inspect().landmarks.map(n=>bn(new I(...n))),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>bn(new I(...n))),roofDreamLetterScreen:bn(new I(...Dn.inspect().letter)),dreamId:Kt?Ct:null,dash:ci.inspect(),dashSnailScreen:bn(new I(...ci.inspect().snail).add(new I(0,-1,-24))),dashBeamScreen:bn(new I(...ci.inspect().beam).add(new I(0,-1.5,-24))),drydock:Si.inspect(),drydockShipScreen:bn(new I(...Si.inspect().ship).add(new I(-24,-.5,0))),bench:Bi.inspect(),benchScreen:bn(new I(-2.65,1.58,-3.18)),benchBucketScreen:bn(new I(-4.75,1.51,-3.63)),roofVisible:hn.visible,amnesty:zi.inspect(),amnestyScreen:bn(new I(0,-.3,24)),cellar:Mi.inspect(),cellarScreen:bn(new I(24,-.3,.25)),objects:Object.keys(Bn),greenhouse:xn.inspect(),dock:$n.inspect(),boatScreen:bn(new I(...$n.inspect().boat).add(new I(0,.2,0))),drawCalls:ut.info.render.calls,triangles:ut.info.render.triangles,gpuGeometries:ut.info.memory.geometries,zoom:Fe.zoom,target:Je.target.toArray(),angle:un.angle,head:Qe.position.toArray(),roof:hn.position.toArray(),roofOpen:Xs(),roofMode:Ee.roof===null?"auto":"manual",pendulums:Gr.map(n=>n.group.rotation.x),growth:Fs,meshes:(()=>{let n=0;return yn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ut.domElement.width,ut.domElement.height]})};zx();
