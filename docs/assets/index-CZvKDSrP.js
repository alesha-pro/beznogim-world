(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const dr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function cl(n){const e=n.state||{},t=(u,p,h,d)=>Number.isFinite(u)?Math.max(p,Math.min(h,Math.floor(u))):d,i=t(e.planted,0,3,0),s=Math.min(2,i),r=dr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let l=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",l={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")l={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:dr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),l={ok:!0};else if(n.tool==="hint")l=Vf(a);else if(!["slide","plant"].includes(n.tool))l={ok:!1,reason:"unknown_tool"};else if(a.planted===3)l={ok:!1,reason:"complete"};else if(n.tool==="slide"){const p={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(p,u.direction))l={ok:!1,reason:"invalid_arguments"};else{const[h,d]=p[u.direction],g=a.positions[u.piece];let v=g%5,m=Math.floor(g/5);for(;v+h>=0&&v+h<5&&m+d>=0&&m+d<5&&!r.rocks.includes((m+d)*5+v+h)&&(m+d)*5+v+h!==a.positions[1-u.piece];)v+=h,m+=d;const f=m*5+v;a.positions[u.piece]=f,f!==g?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",l={ok:f!==g,from:g,to:f,reason:f===g?"blocked":"slid"}}}else a.positions.some((p,h)=>p!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",l={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=dr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",l={ok:!0,trees:a.planted*2})}const c=dr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:c.rocks,goals:c.goals,size:5},result:l,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function Vf(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=dr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((l,c)=>l===e.goals[c]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let l=0;l<2;l++)for(const[c,[u,p]]of Object.entries(s)){let h=o[l]%5,d=Math.floor(o[l]/5);for(;h+u>=0&&h+u<5&&d+p>=0&&d+p<5&&!e.rocks.includes((d+p)*5+h+u)&&(d+p)*5+h+u!==o[1-l];)h+=u,d+=p;const g=o.slice();g[l]=d*5+h;const v=g.join(",");i.has(v)||(i.add(v),t.push([g,[...a,{piece:l,direction:c}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function Hf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:p,watching:h,localPlay:d}){var C,P,k;const g=s([24,-1.5,24],e);g.name="quote-nursery";const v=i("#94c1c0",{roughness:.34}),m=i("#274644"),f=i("#f2e3b9"),M=i("#dfaf57"),E=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,g),r([0,.17,1.5],[7.25,.14,7.25],m,g);const S=L=>[(L%5-2)*1.35,.46,(Math.floor(L/5)-2)*1.35+1.5],b=[];for(let L=0;L<25;L++){const[K,,z]=S(L);b.push(r([K,.27,z],[1.27,.12,1.27],v,g))}const R=Array.from({length:6},()=>{const L=s([0,0,0],g);return r([0,.24,0],[1.05,.42,1.05],t.concrete,L),r([0,.49,0],[.9,.08,.9],t.metal,L),L}),_=[1,3].map((L,K)=>{const z=S(L),Y=s([z[0],.4,z[2]],g);return r([0,-.02,0],[1.23,.07,1.23],K?E:M,Y),r([0,.025,0],[1.03,.04,1.03],f,Y),c(K?"»":"«",[0,.14,.38],.72,.55,Y,{size:105}),Y});function A(L){const K=s(S(L?24:20),g);for(let z=0;z<2;z++){const Y=(z-.5)*.34,ie=L?-1:1;l([Y+ie*.22,.92,0],[Y-ie*.16,.5,0],.065,L?E:M,K),l([Y-ie*.16,.5,0],[Y+ie*.22,.08,0],.065,L?E:M,K)}return r([0,-.07,0],[.98,.09,.5],t.metal,K),K}const T=[A(0),A(1)],D=T.map(L=>r([0,-.13,0],[1.1,.04,.67],f,L));for(const L of[-3.9,0,3.9])r([L,.75,-2.05],[.18,1.25,.18],t.copper,g),r([L,1.39,-2.05],[.32,.12,.32],f,g);for(const L of[-2.8,2.8])r([L,.8,-2.05],[1.85,.14,.14],t.copper,g);const G=Array.from({length:6},(L,K)=>{const z=s([-3.5+K%3*3.5,.3,-3.5-Math.floor(K/3)*1.9],g);a([0,.45,0],.12,.9,t.copper,z);for(let Y=0;Y<3;Y++){const ie=new n.Mesh(new n.ConeGeometry(.87-Y*.17,1.3,5),x);ie.position.y=.95+Y*.56,ie.castShadow=!0,z.add(ie)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,z),z});c("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,g,{size:44}),c("СЕВЕР",[0,1.52,-2.05],1.45,.33,g,{size:60});for(let L=0;L<23;L++)r([24,-1.42,6.6+L*.54],[1,.13,.43],t.cream,e);u(g,[...R,...T,..._,...G]);let W=null,U=((k=(P=(C=window.__beznogimState)==null?void 0:C.mechanics)==null?void 0:P.quotes)==null?void 0:k.public)||null,V,q="",H="",J=0,X="",Z=0,$=Array(6).fill(0),re=[null,null];try{W=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function fe(L,K,z={}){const Y=cl({mode:L,tool:K,args:z,state:W});W=Y.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(W))}catch{}return Y}fe("migrate");const ve=document.createElement("div");ve.id="quotes-controls",ve.hidden=!0,ve.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(ve);const Ee=()=>U&&h()?U:cl({mode:"migrate",state:W}).public;function te(L,K={}){if(Z>0)return;d(),X="";const z=fe("action",L,K);return q="",ue(0),p(),z}for(const L of ve.querySelectorAll("[data-quote]"))L.onclick=()=>{J=Number(L.dataset.quote),X="",B()};for(const L of ve.querySelectorAll("[data-slide]"))L.onclick=()=>te("slide",{piece:J,direction:L.dataset.slide});ve.querySelector("#quotes-pair").onclick=()=>te("restart",{scope:"pair"}),ve.querySelector("#quotes-hint").onclick=()=>{const L=cl({mode:"action",tool:"hint",state:Ee()}).result;X=L.status==="route"?`${L.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[L.next.direction]} · осталось ходов: ${L.remaining}`:L.status==="aligned"?"Обе на месте. Выпускай.":L.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",B()};function B(){if(V){ve.querySelector("#quotes-readout").textContent=`пара ${V.level}/3 · ели ${V.trees}/6 · ходы ${V.moves}`,ve.querySelector("#quotes-hint-text").textContent=X;for(const L of ve.querySelectorAll("[data-quote]"))L.setAttribute("aria-pressed",Number(L.dataset.quote)===J);for(const L of ve.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))L.disabled=Z>0||V.phase==="complete";D.forEach((L,K)=>L.visible=K===J&&V.phase!=="complete")}}function ee(L){const K=U&&h()?"resident":"sandbox",z=V,Y=!z||z.run!==L.run||K!==H;H=K,Y?(T.forEach((ie,O)=>ie.position.set(...S(L.positions[O]))),$=G.map((ie,O)=>O<L.trees?1:0),re=[null,null],Z=0):L.planted>z.planted?(Z=1.4,re=T.map((ie,O)=>({from:ie.position.clone(),to:G[(L.planted-1)*2+O].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):L.planted!==z.planted&&($=G.map((ie,O)=>O<L.trees?1:0)),V=L,R.forEach((ie,O)=>{if(ie.visible=O<L.rocks.length,ie.visible){const se=S(L.rocks[O]);ie.position.set(se[0],.3,se[2])}}),B()}function ue(L){L=Math.min(.1,Math.max(0,L));const K=Ee(),z=(U&&h()?"resident:":"sandbox:")+JSON.stringify(K);z!==q&&(q=z,ee(K),p());const Y=Z>0;Z=Math.max(0,Z-L);for(let ie=0;ie<2;ie++){const O=T[ie],se=re[ie];if(se&&Z>0)se.t=Math.min(1,se.t+L/1.4),O.position.lerpVectors(se.from,se.to,se.t*se.t*(3-2*se.t)),O.position.y+=Math.sin(se.t*Math.PI)*.9,O.scale.setScalar(1-se.t*.8);else{re[ie]=null,O.scale.setScalar(1);const xe=S(K.positions[ie]);O.position.x=n.MathUtils.damp(O.position.x,xe[0],12,L),O.position.y=.46,O.position.z=n.MathUtils.damp(O.position.z,xe[2],12,L)}O.visible=!!re[ie]||K.phase!=="complete"}G.forEach((ie,O)=>{const se=O<K.trees?1:0;$[O]=n.MathUtils.damp($[O],se,Z>0?1:5,L),ie.visible=$[O]>.003,ie.scale.setScalar(Math.max(.001,$[O]))}),Y&&Z===0&&(B(),p())}const oe=()=>({action:U&&h()?"попробовать свои ёлочки":V.phase==="complete"?"новый питомник ↺":Z>0?"пролезают…":"выпустить пару",description:(U&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+V.message,disabled:Z>0});return window.addEventListener("beznogim:state",({detail:L})=>{var z,Y;const K=(Y=(z=L.mechanics)==null?void 0:z.quotes)==null?void 0:Y.public;K&&(U=K)}),ee(Ee()),q=(U&&h()?"resident:":"sandbox:")+JSON.stringify(Ee()),ue(0),{house:g,controls:ve,update:ue,card:oe,run:()=>te(V.phase==="complete"?"restart":"plant",V.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:U&&h()?"resident":"sandbox",...V,busy:Z,selected:J,hint:X,quotePositions:T.map(L=>L.position.toArray()),treeScales:$.slice(),visibleTrees:G.filter(L=>L.visible).length})}}function Ru(n){const e=n.state||{},t=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function Wf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:l,sign:c,batchStatic:u,changed:p,watching:h,localPlay:d}){var ee,ue,oe;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const v=i("#28464d"),m=i("#eee4c9"),f=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],f,g);const M=s([0,0,0],g),E=s([0,0,0],g);for(const[C,P]of[[M,"ОТ"],[E,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,C),r([0,1.32,0],[2.12,.12,3.3],m,C),c(P,[0,.9,1.66],1,.36,C,{size:60});const x=s([0,1.43,0],g),S=s([0,0,0],x),b=s([0,0,0],x),R=r([-.5,0,0],[1,.15,.56],v,S),_=r([.5,0,0],[1,.15,.56],v,b),A=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),T=s([0,1.47,0],g);T.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,T),o([-.08,.46,0],[.39,.42,.29],t.copper,T),l([-.08,.47,.3],.23,.033,m,T,[0,0,0]),l([-.08,.47,.315],.12,.03,m,T,[0,0,0]);for(const C of[-.13,.13])a([.4,.17,C],[.62,.46,C],.02,t.leaf,T),o([.62,.46,C],[.055,.065,.055],v,T);r([-.16,.92,0],[.46,.32,.065],m,T),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,T),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,T);const D=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,D);const G=[".","?","!"].map((C,P)=>{const k=s([-1.1+P*1.1,.42,0],D);return r([0,0,0],[.8,.65,.11],m,k),c(C,[0,.02,.075],.55,.5,k,{size:100}),k});c("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const W=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,W);for(let C=-4;C<=4;C++)r([C,.07,0],[.035,.025,.26],v,W),c(String(C),[C,.08,.32],.4,.28,W,{size:45});for(let C=0;C<16;C++)r([1.5,-.1-C*.09,-5.9-C*.72],[1.05,.14,.65],t.cream,e);for(let C=0;C<8;C++)r([1.5,-1.45,-17.6-C*.5],[1.05,.14,.45],t.cream,e);const U=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,U),r([0,2.7,0],[.8,.14,.8],t.metal,U),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),U),u(T,[]),u(M,[]),u(E,[]),u(g,[M,E,x,...A,T,D]);let V=null,q=((oe=(ue=(ee=window.__beznogimState)==null?void 0:ee.mechanics)==null?void 0:ue.dash)==null?void 0:oe.public)||null,H,J="",X=1,Z=0;try{V=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function $(C,P,k={}){const L=Ru({mode:C,tool:P,args:k,state:V});V=L.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(V))}catch{}return L}$("migrate");const re=document.createElement("div");re.id="dash-controls",re.hidden=!0,re.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(C,P)=>`<option value="${P+1}">${P+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(C=>`<option value="${C}">${C>0?"+":""}${C}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(re);const fe=()=>q&&h()?q:Ru({mode:"migrate",state:V}).public;function ve(C,P){d(),$("action",C,P),J="",te(0),p()}re.querySelector("#dash-tune").onclick=()=>ve("tune",{span:Number(re.querySelector("#dash-span").value),shift:Number(re.querySelector("#dash-shift").value)}),re.querySelector("#dash-reset").onclick=()=>ve("reset");function Ee(C){const P=["delivered","complete"].includes(C.phase);P?!H||H.run!==C.run||H.round!==C.round?X=1:["delivered","complete"].includes(H.phase)||(X=0):X=0,H=C,re.querySelector("#dash-readout").textContent=`почта ${C.delivered}/3 · пролёт ${C.gap} · центр ${C.center>0?"+":""}${C.center} · попытки ${C.attempts}`,re.querySelector("#dash-span").value=C.span,re.querySelector("#dash-shift").value=C.shift;for(const k of re.querySelectorAll("select,#dash-tune"))k.disabled=P;M.position.x=C.center-C.gap/2-1,E.position.x=C.center+C.gap/2+1,A[0].position.x=C.center-C.gap/2,A[1].position.x=C.center+C.gap/2,x.position.x=C.shift,R.scale.x=_.scale.x=C.span/2,R.position.x=-C.span/4,_.position.x=C.span/4,G.forEach((k,L)=>k.visible=L<C.delivered)}function te(C){const P=fe(),k=JSON.stringify(P);k!==J&&(J=k,Ee(P),p()),X=["delivered","complete"].includes(P.phase)?Math.min(1,X+C/4):0,Z=n.MathUtils.damp(Z,P.phase==="bent"?.22:0,6,C),S.rotation.z=Z,b.rotation.z=-Z,x.position.y=1.43-Math.sin(Z)*P.span/2,T.position.x=M.position.x+(E.position.x-M.position.x)*(X*X*(3-2*X)),T.position.y=1.47,T.rotation.z=X>0&&X<1?Math.sin(X*30)*.025:0}const B=()=>{const C=H||fe();return{action:q&&h()?"попробовать свою почту":C.phase==="complete"?"новая почта ↺":C.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(q&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+C.message}};return window.addEventListener("beznogim:state",({detail:C})=>{var k,L;const P=(L=(k=C.mechanics)==null?void 0:k.dash)==null?void 0:L.public;P&&(q=P)}),Ee(fe()),J=JSON.stringify(fe()),T.position.x=X===1?E.position.x:M.position.x,{house:g,controls:re,update:te,card:B,run:()=>{if(X>0&&X<1)return;const C=fe().phase;ve(C==="complete"?"reset":C==="delivered"?"next":"cross")},inspect:()=>({source:q&&h()?"resident":"sandbox",...H,walk:X,bend:Z,snail:T.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:E.position.x,stamps:G.map(C=>C.visible)})}}function Cu(n){const e=n.state||{},t=(o,a,l,c)=>Number.isFinite(o)?Math.max(a,Math.min(l,Math.floor(o))):c,i={depths:[0,0,0].map((o,a)=>{var l;return t((l=e.depths)==null?void 0:l[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Xf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,watching:d,localPlay:g}){var ue,oe,C;const v=s([-24,-1.5,0],e);v.name="sandbox-drydock";const m=i("#d0b987"),f=i("#556f7f"),M=i("#a65d42"),E=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,v),r([0,.2,0],[15.7,.12,9.7],t.dark,v),r([.5,.38,0],[12.6,.26,3.9],t.dark,v);for(const P of[-2,2])r([.5,.96,P],[12.9,1.1,.22],t.copper,v);for(const P of[-6,7])r([P,.96,0],[.22,1.1,4.1],t.copper,v);const x=Array.from({length:3},(P,k)=>r([-4+k*2,.98,0],[1.9,1,3.7],m,v)),S=r([.5,.54,0],[12.6,.04,3.75],E,v);S.castShadow=!1;const b=Array.from({length:3},(P,k)=>{const L=s([-4+k*2,.35,3.05],v);for(let K=0;K<5;K++)o([(K-2)*.27,.16+K%2*.1,0],[.32,.22,.4],m,L);return L}),R=s([-2,1.3,0],v);R.name="sandbox-cargo-ship";const _=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([P,k],L)=>L?_.lineTo(P,-k):_.moveTo(P,-k)),_.closePath();const A=new n.ExtrudeGeometry(_,{depth:.67,bevelEnabled:!1});A.rotateX(-Math.PI/2);const T=new n.Mesh(A,f);T.castShadow=!0,T.receiveShadow=!0,R.add(T),r([-.45,.7,0],[4.9,.09,1.4],t.cream,R);for(let P=0;P<3;P++){r([-.95+P*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][P],R);for(const k of[-.601,.601])for(let L=0;L<4;L++)r([-.95+P*.92-.3+L*.2,1.03,k],[.024,.5,.025],t.dark,R)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,R),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,R);for(const P of[-.63,.63])r([-2.25,1.6,P],[.73,.16,.03],t.dark,R);a([-2.45,1.98,0],.15,.43,M,R),a([-2.45,2.21,0],.15,.05,t.dark,R),l([2.3,.77,0],[2.3,1.9,0],.035,t.metal,R),r([2.55,1.7,0],[.48,.26,.03],t.cream,R);for(const P of[-2.9,2.1])for(const k of[-.7,.7])l([P,.7,k],[P,1,k],.025,t.cream,R);for(const P of[-.7,.7])l([-2.9,1,P],[2.1,1,P],.025,t.cream,R);const D=s([5.9,1.1,3.4],v);c([0,0,0],.4,.04,t.copper,D,[0,0,0]);for(let P=0;P<4;P++){const k=P*Math.PI/2;l([0,0,0],[.4*Math.cos(k),.4*Math.sin(k),0],.025,t.copper,D)}l([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,v),l([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,v);const G=r([5.9,.8,1.75],[.19,.55,.19],E,v);G.castShadow=!1;const W=s([0,.29,0],v);for(const P of[-2.9,2.9])r([.5,0,P],[13,.02,1.1],E,W);for(let P=0;P<3;P++)u(["КОРМА","ТРЮМ","НОС"][P],[-4+P*2,.7,2.15],1.55,.28,v,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,v,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,v,{size:42});for(const P of[-6.6,6.6])l([P,.3,-3.8],[P,3.6,-3.8],.08,t.metal,v),r([P,3.6,-3.5],[.55,.16,.8],t.metal,v),r([P,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),v);for(let P=0;P<15;P++)r([-7.2-P*.72,-.03-P*.09,1.2],[.65,.14,1.12],t.cream,e);const U=s([-6.5,.5,3.3],v);l([0,0,0],[0,1.5,0],.045,t.copper,U),r([0,.1,0],[.32,.35,.08],t.metal,U),c([0,1.53,0],.1,.025,t.metal,U,[0,0,0]),p(R,[]),p(v,[...x,...b,S,R,D,G,W]);let V=null,q=((C=(oe=(ue=window.__beznogimState)==null?void 0:ue.mechanics)==null?void 0:oe.drydock)==null?void 0:C.public)||null,H,J="",X=0,Z=0,$=0;try{V=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function re(P,k,L={}){const K=Cu({mode:P,tool:k,args:L,state:V});V=K.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(V))}catch{}return K}re("migrate");const fe=document.createElement("div");fe.id="drydock-controls",fe.hidden=!0,fe.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(fe);function ve(){return q&&d()?q:Cu({mode:"migrate",state:V}).public}function Ee(P,k){g(),re("action",P,k),J="",ee(0),h()}fe.querySelectorAll("[data-dig]").forEach(P=>P.onclick=()=>Ee("dig",{channel:Number(P.dataset.dig)})),fe.querySelector("#drydock-fill").onclick=()=>Ee("pump",{direction:"fill"}),fe.querySelector("#drydock-drain").onclick=()=>Ee("pump",{direction:"drain"}),fe.querySelector("#drydock-reset").onclick=()=>Ee("reset");function te(P){H?(H.water!==P.water&&(X=2),H.floods!==P.floods&&(Z=3),!H.launched&&P.launched&&($=0)):$=P.launched?1:0,H=P,fe.querySelector("#drydock-readout").textContent=`каналы ${P.depths.join(" / ")} · вода ${P.water}/2 · переливы ${P.floods}`,fe.querySelectorAll("[data-dig]").forEach(k=>{k.disabled=P.launched||P.water>0||P.depths[Number(k.dataset.dig)]===2}),fe.querySelector("#drydock-fill").disabled=P.launched,fe.querySelector("#drydock-drain").disabled=P.launched||P.water===0,x.forEach((k,L)=>{const K=1-P.depths[L]*.4;k.scale.y=K,k.position.y=.48+K/2,b[L].scale.setScalar(.45+P.depths[L]*.4)}),S.visible=P.water>0,S.position.y=.49+P.water*.39}function B(){const P=H||ve();return{action:q&&d()?"попробовать свой спуск":P.launched?"корабль в песок ↺":"спустить корабль",description:(q&&d()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+P.message}}function ee(P){const k=ve(),L=JSON.stringify(k);L!==J&&(J=L,te(k),h()),X=Math.max(0,X-P),Z=Math.max(0,Z-P),G.visible=X>0&&k.water>0,W.visible=Z>0,D.rotation.z+=X>0?P*3:0,$=k.launched?Math.min(1,$+P/5):0;const K=$*$*(3-2*$);R.position.x=-2+K*5.6;const z=Math.min(...k.depths),Y=k.afloat?.94:1.15-z*.32;R.position.y=n.MathUtils.damp(R.position.y,Y,4,P),R.rotation.z=n.MathUtils.damp(R.rotation.z,k.afloat?0:(k.depths[2]-k.depths[0])*.085,4,P)}return window.addEventListener("beznogim:state",({detail:P})=>{var L,K;const k=(K=(L=P.mechanics)==null?void 0:L.drydock)==null?void 0:K.public;k&&(q=k,J="")}),te(ve()),R.position.x=ve().launched?3.6:-2,{house:v,controls:fe,update:ee,card:B,run:()=>Ee(ve().launched?"reset":"launch"),inspect:()=>({source:q&&d()?"resident":"sandbox",...H,ship:R.position.toArray(),pitch:R.rotation.z,waterY:S.position.y,voyage:$,sandHeights:x.map(P=>P.scale.y),floodVisible:W.visible})}}function Pu(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function qf({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,changed:p,watching:h,localPlay:d}){var fe,ve,Ee;const g=s([0,0,0],e);g.name="mechanical-bench";const v=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],v,g),l([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const f=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let te=0;te<7;te++)for(let B=0;B<9;B++)M.push(r([.55+(B-4)*.145,1.5+(3-te)*.14,-.683],[.13,.12,.02],m,g));const E=s([-1.05,1.24,-.38],g);E.name="core-gear",a([0,0,0],.3,.11,t.copper,E).rotation.x=Math.PI/2;const x=[];for(let te=0;te<12;te++){const B=te/12*Math.PI*2;let ee=r([Math.cos(B)*.33,Math.sin(B)*.33,0],[.13,.13,.12],t.copper,E);ee.rotation.z=B,x.push(ee)}c([0,0,.06],.13,.025,t.dark,E,[0,0,0]);const S=s([-.4,1.12,-.38],g);c([0,0,0],.19,.035,t.dark,S,[0,0,0]),l([-.2,0,0],[.2,0,0],.025,t.metal,S);const b=s([0,0,0],g);l([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,b),l([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,b);const R=s([-1.5,1,-.05],g);l([0,0,0],[.23,0,0],.04,t.metal,R),l([.23,0,0],[.23,.23,0],.04,t.copper,R),o([.23,.23,0],.08,t.rust,R);const _=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,_),a([0,.281,0],.29,.015,t.dark,_),c([0,.29,0],.33,.025,t.copper,_),c([0,.36,0],.33,.025,t.metal,_,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const A=Array.from({length:3},(te,B)=>o([.17+B*.3,2.23,-.82],.06,t.mint,g));let T=null,D=((Ee=(ve=(fe=window.__beznogimState)==null?void 0:fe.mechanics)==null?void 0:ve.bench)==null?void 0:Ee.public)||null,G,W="",U=0;try{T=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function V(te,B,ee={}){const ue=Pu({mode:te,tool:B,args:ee,state:T});T=ue.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(T))}catch{}return ue}V("migrate");const q=document.createElement("div");q.id="bench-controls",q.hidden=!0,q.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(q);function H(){return D&&h()?D:Pu({mode:"migrate",state:T}).public}function J(te,B){d(),V("action",te,B),W="",re(0),p()}q.querySelectorAll("[data-part]").forEach(te=>te.onclick=()=>J("fit",{part:te.dataset.part,value:Number(te.dataset.value)})),q.querySelector("#bench-salvage").onclick=()=>J("salvage"),q.querySelector("#bench-restart").onclick=()=>J("restart");function X(te){G&&G.attempts!==te.attempts&&(U=3),G=te,q.querySelector("#bench-readout").textContent=`экран ${te.round+1}/3 · скорость ${te.speed} / нужно ${te.target}`,q.querySelectorAll("[data-part]").forEach(B=>{B.setAttribute("aria-pressed",String(te[B.dataset.part]===Number(B.dataset.value))),B.disabled=te.phase!=="ready"}),q.querySelector("#bench-salvage").disabled=!te.bucket,v.color.set(te.picture?"#16362c":"#e9e4cc"),v.emissive.set(te.picture?"#20382b":"#e9e4cc"),v.emissiveIntensity=te.picture?.1:.6,M.forEach((B,ee)=>B.visible=!!te.picture&&f[te.picture-1][ee]==="1"),x.forEach((B,ee)=>B.visible=ee<te.core*3),S.scale.setScalar(.75+te.belt*.25),b.visible=!te.bucket,A.forEach((B,ee)=>B.visible=ee<te.repairs)}const Z={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function $(){const te=G||H();return{action:D&&h()?"собрать свой монитор":te.phase==="ejected"?"достать ядро":te.phase==="repaired"?te.round===2?"закончить работу":"следующий экран":te.phase==="complete"?"ещё раз":"крутить рукоятку",description:(D&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+Z[te.phase]}}function re(te){const B=H(),ee=JSON.stringify(B);ee!==W&&(W=ee,X(B),p()),U=Math.max(0,U-te);const ue=Math.min(1,te*7),oe=B.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];E.position.lerp(new n.Vector3(...oe),ue),E.rotation.x=n.MathUtils.lerp(E.rotation.x,B.bucket?-Math.PI/2:0,ue);const C=U>0?B.core*2:B.picture?.4:0;E.rotation.z+=te*C,S.rotation.z-=te*C*B.belt,R.rotation.z+=te*C}return window.addEventListener("beznogim:state",({detail:te})=>{var ee,ue;const B=(ue=(ee=te.mechanics)==null?void 0:ee.bench)==null?void 0:ue.public;B&&(D=B,W="")}),X(H()),E.position.set(...H().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:q,update:re,card:$,run:()=>{const te=H();J(te.phase==="ejected"?"salvage":te.phase==="repaired"?"next":te.phase==="complete"?"restart":"crank")},inspect:()=>({source:D&&h()?"resident":"sandbox",...G,corePosition:E.position.toArray(),coreAngle:E.rotation.z,driveAngle:S.rotation.z,litPixels:M.filter(te=>te.visible).length})}}const Lu=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function Iu(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Du(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):Iu();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const l=n.args||{},c=n.tool;if(c==="restart")Object.assign(e,Iu(e.run+1));else if(c==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(c==="load")!Number.isInteger(l.index)||l.index<0||l.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[l.index]=!e.loaded[l.index],e.status="idle");else if(c==="amnesty")e.pardoned=!0,e.status="idle";else if(c==="dispatch"){const u=Lu[e.round],p=u.weights.reduce((h,d,g)=>h+(e.loaded[g]?d+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,p!==u.target?(e.status=p<u.target?"under":"over",i={ok:!1,reason:e.status,total:p,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,d)=>{e.loaded[d]&&e.delivered.push({id:`${e.run}:${e.round}:${d}`,weight:h})}),i={ok:!0,total:p,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Lu[e.round],r=s.weights.map((l,c)=>l+(e.pardoned?0:s.debt[c])),o=r.reduce((l,c,u)=>l+(e.loaded[u]?c:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Yf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,watching:d,localPlay:g}){var B,ee,ue;const v=s([0,-1.5,24]);v.name="amnesty-bureau";const m=i("#9d8560"),f=i("#a1b56f"),M=i("#f1d29a"),E=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],E,v),r([3.65,-.14,0],[3.3,.5,7],E,v),r([0,-.8,0],[4.2,.1,6.7],t.dark,v);for(const oe of[-4.9,4.9])l([oe,0,-3],[oe,3.3,-3],.06,t.copper,v);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,v,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,v,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,v);const x=s([0,.2,1.15],v);for(let oe=0;oe<11;oe++)r([-2+oe*.4,0,0],[.38,.16,1.65],m,x);for(const oe of[-.72,.72])l([-2.2,.22,oe],[2.2,.22,oe],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,v);const S=s([-2.55,.32,1.15],v);r([0,.12,0],[1.5,.18,1.35],t.metal,S);for(const oe of[-.52,.52])for(const C of[-.58,.58]){const P=c([oe,0,C],.17,.05,t.dark,S,[0,0,0]);P.rotation.y=Math.PI/2}const b=s([-4.7,.8,1.4],v);l([0,-.5,0],[0,.2,0],.1,t.metal,b);const R=s([0,0,0],b);l([0,0,0],[0,.8,0],.065,t.copper,R),o([0,.8,0],.14,t.rust,R),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,v,{size:35});const _=s([.1,.1,-2.3],v);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const A=a([0,.7,0],.57,1.1,t.copper,_);c([0,1.28,0],.25,.045,t.dark,_);const T=Array.from({length:3},(oe,C)=>o([1.75+C*.34,2.15,-3.05],.095,t.mint,v)),D=Array.from({length:3},(oe,C)=>{const P=s([-3.6,.72,-2.1+C*1.08],v),k=o([0,0,0],[.28,.23,.57],f,P);k.rotation.z=.1,l([0,0,-.5],[.05,.12,-.68],.045,t.leaf,P);const L=s([.45,.28,0],P);return r([0,0,0],[.29,.57,.4],M,L),r([0,0,.21],[.18,.045,.012],t.rust,L),{g:P,tax:L}});u("A",[-4.35,.75,-2.1],.28,.28,v),u("B",[-4.35,.75,-1.02],.28,.28,v),u("C",[-4.35,.75,.06],.28,.28,v),r([3.55,.8,-1.7],[2.75,.13,2.2],m,v);const G=Array.from({length:6},(oe,C)=>o([2.75+C%3*.7,1,-2.1+Math.floor(C/3)*.83],[.2,.19,.38],f,v));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,v,{size:39});const W=s([0,0,0],e);for(let oe=0;oe<15;oe++){const C=oe/14;r([-.6+Math.sin(C*Math.PI)*1.5,-1.55,17+oe*.3],[.9,.12,.65],E,W)}for(let oe=0;oe<5;oe++)r([-.8-oe*.6,-1.55,21.5],[.75,.12,.75],E,W);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,W,{size:35}),l([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,W),p(W,[]),p(v,[x,S,b,_,...D.map(oe=>oe.g),...G,...T]),p(x,[]),p(S,[]);let U=null,V=((ue=(ee=(B=window.__beznogimState)==null?void 0:B.mechanics)==null?void 0:ee.amnesty)==null?void 0:ue.public)||null,q,H="",J=0;try{U=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function X(oe,C,P={}){const k=Du({state:U,mode:oe,tool:C,args:P});U=k.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(U))}catch{}return k}X("migrate");const Z=document.createElement("div");Z.id="amnesty-controls",Z.hidden=!0,Z.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(Z);function $(){return V&&d()?V:Du({state:U,mode:"migrate"}).public}function re(oe,C){g(),X("action",oe,C),H="",te(0),h()}for(const oe of Z.querySelectorAll("[data-load]"))oe.onclick=()=>re("load",{index:Number(oe.dataset.load)});Z.querySelector("#amnesty-pardon").onclick=()=>re("amnesty"),Z.querySelector("#amnesty-restart").onclick=()=>re("restart");const fe={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function ve(oe){q=oe;const C=oe.status==="delivered"||oe.status==="complete";Z.querySelector("#amnesty-readout").textContent=`рейс ${oe.round+1}/3 · груз ${oe.total} / нужно ${oe.target}`,Z.querySelectorAll("[data-load]").forEach((P,k)=>{P.textContent=`${["A","B","C"][k]} · ${oe.weights[k]}${oe.debt[k]?` + ${oe.debt[k]} бумага`:""}`,P.setAttribute("aria-pressed",String(oe.loaded[k])),P.disabled=C}),Z.querySelector("#amnesty-pardon").disabled=oe.pardoned||C,Z.querySelector("#amnesty-pardon").textContent=oe.pardoned?"налог отменён":"отменить налог",A.scale.y=oe.target/4,T.forEach((P,k)=>P.visible=k<(oe.status==="complete"?3:oe.round)),G.forEach((P,k)=>P.visible=k<oe.delivered.length),D.forEach((P,k)=>{P.tax.visible=!oe.pardoned||J<.99,P.g.visible=!C||!oe.loaded[k],P.g.scale.setScalar(.8+oe.weights[k]*.08)})}function Ee(){const oe=q||$();return{action:V&&d()?"войти в свою амнистию":oe.status==="delivered"?"следующий рейс":oe.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(V&&d()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+fe[oe.status]}}function te(oe,C){const P=$(),k=JSON.stringify(P);k!==H&&(H=k,ve(P),h());const L=P.status==="delivered"||P.status==="complete",K=(z,Y)=>n.MathUtils.lerp(z,Y,Math.min(1,oe*5));x.rotation.z=K(x.rotation.z,P.tilt),S.position.x=K(S.position.x,L?3:-2.55),R.rotation.z=K(R.rotation.z,P.pardoned?-.65:0),J=K(J,P.pardoned?1:0),D.forEach(z=>{z.tax.position.y=.28+J*2.5,z.tax.rotation.z=J*.8,z.tax.visible=!P.pardoned||J<.99}),G.forEach((z,Y)=>z.visible=Y<P.delivered.length-(L&&S.position.x<2.9?2:0)),D.forEach((z,Y)=>{const ie=P.loaded[Y];z.g.visible=!L||!ie||S.position.x<2.9,z.g.position.x=K(z.g.position.x,ie?S.position.x+(Y-1)*.42:-3.6),z.g.position.y=K(z.g.position.y,ie?.86:.72),z.g.position.z=K(z.g.position.z,ie?1.15:-2.1+Y*1.08)})}return window.addEventListener("beznogim:state",({detail:oe})=>{var P,k;const C=(k=(P=oe.mechanics)==null?void 0:P.amnesty)==null?void 0:k.public;C&&(V=C,H="")}),J=$().pardoned?1:0,ve($()),{house:v,controls:Z,update:te,card:Ee,run:()=>re(q.status==="delivered"?"next":q.status==="complete"?"restart":"dispatch"),inspect:()=>({source:V&&d()?"resident":"sandbox",...q,bridgeTilt:x.rotation.z,cartX:S.position.x,cargoPositions:D.map(oe=>oe.g.position.toArray()),taxVisible:D.map(oe=>oe.tax.visible),paperY:D.map(oe=>oe.tax.position.y),handleAngle:R.rotation.z,deliveredVisible:G.filter(oe=>oe.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="186",yi={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yh=0,Yl=1,Zh=2,Os=1,$h=2,Ds=3,Wi=0,pn=1,Ln=2,ci=0,Fs=1,Zl=2,$l=3,Jl=4,Jh=5,ss=100,Kh=101,Qh=102,jh=103,ed=104,td=200,nd=201,id=202,sd=203,gc=204,_c=205,rd=206,od=207,ad=208,ld=209,cd=210,ud=211,hd=212,dd=213,fd=214,Uo=0,Oo=1,Fo=2,Gs=3,zo=4,Bo=5,ko=6,Go=7,vc=0,pd=1,md=2,Zn=0,xc=1,yc=2,Mc=3,Ca=4,Sc=5,bc=6,Ec=7,wc=300,Xi=301,cs=302,Ro=303,Co=304,Fr=306,wr=1e3,oi=1001,Vo=1002,$t=1003,gd=1004,fr=1005,Qt=1006,Po=1007,zi=1008,xn=1009,Tc=1010,Ac=1011,Vs=1012,Pa=1013,Kn=1014,Nn=1015,Qn=1016,La=1017,Ia=1018,Hs=1020,Rc=35902,Cc=35899,Pc=1021,Lc=1022,Un=1023,hi=1026,Bi=1027,Da=1028,Na=1029,qi=1030,Ua=1031,Oa=1033,_r=33776,vr=33777,xr=33778,yr=33779,Ho=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,Zo=37492,$o=37496,Jo=37488,Ko=37489,Tr=37490,Qo=37491,jo=37808,ea=37809,ta=37810,na=37811,ia=37812,sa=37813,ra=37814,oa=37815,aa=37816,la=37817,ca=37818,ua=37819,ha=37820,da=37821,fa=36492,pa=36494,ma=36495,ga=36283,_a=36284,Ar=36285,va=36286,_d=3200,xa=0,vd=1,_i="",on="srgb",Rr="srgb-linear",Cr="linear",yt="srgb",Lo=7680,xd=519,yd=512,Md=513,Sd=514,Fa=515,bd=516,Ed=517,za=518,wd=519,Td=35044,Kl="300 es",Yn=2e3,Ws=2001;function Zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ad(){const n=ya("canvas");return n.style.display="block",n}const Nu={};function Ql(...n){const e="THREE."+n.shift();console.log(e,...n)}function Rd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=Rd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ht(...n){n=Rd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function as(...n){const e=n.join(" ");e in Nu||(Nu[e]=!0,je(...n))}function $f(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Jf={[Uo]:Oo,[Fo]:ko,[zo]:Go,[Gs]:Bo,[Oo]:Uo,[ko]:Fo,[Go]:zo,[Bo]:Gs};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const Mr=Math.PI/180,Pr=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ic(n,e){return(n%e+e)%e}function Kf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Qf(n,e,t){return n!==e?(t-n)/(e-n):0}function Sr(n,e,t){return(1-t)*n+t*e}function jf(n,e,t,i){return Sr(n,e,1-Math.exp(-t*i))}function ep(n,e=1){return e-Math.abs(Ic(n,e*2)-e)}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ip(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sp(n,e){return n+Math.random()*(e-n)}function rp(n){return n*(.5-Math.random())}function op(n){n!==void 0&&(Uu=n);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(n){return n*Mr}function lp(n){return n*Pr}function cp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function up(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),p=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*p,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*p,a*c);break;case"ZXZ":n.set(l*p,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vn={DEG2RAD:Mr,RAD2DEG:Pr,generateUUID:hs,clamp:rt,euclideanModulo:Ic,mapLinear:Kf,inverseLerp:Qf,lerp:Sr,damp:jf,pingpong:ep,smoothstep:tp,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:op,degToRad:ap,radToDeg:lp,isPowerOfTwo:cp,ceilPowerOfTwo:up,floorPowerOfTwo:hp,setQuaternionFromProperEuler:dp,normalize:cn,denormalize:Is},fu=class fu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fu.prototype.isVector2=!0;let be=fu;class wi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],h=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(p!==v||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+p*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let f=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);f=Math.sin(f*M)/E,a=Math.sin(a*M)/E,l=l*f+h*a,c=c*f+d*a,u=u*f+g*a,p=p*f+v*a}else{l=l*f+h*a,c=c*f+d*a,u=u*f+g*a,p=p*f+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*p+l*d-c*h,e[t+1]=l*g+u*h+c*p-a*d,e[t+2]=c*g+u*d+a*h-l*p,e[t+3]=u*g-a*p-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),p=a(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*p+c*d*g,this._y=c*d*p-h*u*g,this._z=c*u*g+h*d*p,this._w=c*u*p-h*d*g;break;case"YXZ":this._x=h*u*p+c*d*g,this._y=c*d*p-h*u*g,this._z=c*u*g-h*d*p,this._w=c*u*p+h*d*g;break;case"ZXY":this._x=h*u*p-c*d*g,this._y=c*d*p+h*u*g,this._z=c*u*g+h*d*p,this._w=c*u*p-h*d*g;break;case"ZYX":this._x=h*u*p-c*d*g,this._y=c*d*p+h*u*g,this._z=c*u*g-h*d*p,this._w=c*u*p+h*d*g;break;case"YZX":this._x=h*u*p+c*d*g,this._y=c*d*p+h*u*g,this._z=c*u*g-h*d*p,this._w=c*u*p-h*d*g;break;case"XZY":this._x=h*u*p-c*d*g,this._y=c*d*p-h*u*g,this._z=c*u*g+h*d*p,this._w=c*u*p+h*d*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=i+a+p;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>p){const d=2*Math.sqrt(1+i-a-p);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>p){const d=2*Math.sqrt(1+a-i-p);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+p-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pu=class pu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),p=2*(r*i-o*t);return this.x=t+l*c+o*p-a*u,this.y=i+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;let N=pu;const ul=new N,Ou=new wi,mu=class mu{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],f=s[6],M=s[1],E=s[4],x=s[7],S=s[2],b=s[5],R=s[8];return r[0]=o*v+a*M+l*S,r[3]=o*m+a*E+l*b,r[6]=o*f+a*x+l*R,r[1]=c*v+u*M+p*S,r[4]=c*m+u*E+p*b,r[7]=c*f+u*x+p*R,r[2]=h*v+d*M+g*S,r[5]=h*m+d*E+g*b,r[8]=h*f+d*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=t*p+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;let tt=mu;const hl=new tt,Fu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){const n={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rr]:{primaries:e,whitePoint:i,transfer:Cr,toXYZ:Fu,fromXYZ:zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Fu,fromXYZ:zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const ct=fp();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class Cd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=ya("canvas")),vs.width=e.width,vs.height=e.height;const s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pp=0;class Ba{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let mp=0;const fl=new N;class en extends Ri{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=oi,s=oi,r=Qt,o=zi,a=Un,l=xn,c=en.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=hs(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=wc;en.DEFAULT_ANISOTROPY=1;const gu=class gu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(d+1)/2,S=(f+1)/2,b=(u+h)/4,R=(p+v)/4,_=(g+m)/4;return E>x&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=R/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;let Dt=gu;class Pd extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ba(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Pd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dc extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ld extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Aa=class Aa{constructor(e,t,i,s,r,o,a,l,c,u,p,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,p,h,d,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,p,h,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*p,g=a*u,v=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*p,g=c*u,v=c*p;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*p,g=c*u,v=c*p;t[0]=h-v*a,t[4]=-o*p,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*p,g=a*u,v=a*p;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*p,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*p,t[8]=g*p+d,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*p+g,t[10]=h-v*p}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+v,t[5]=o*u,t[9]=d*p-g,t[2]=g*p-d,t[6]=a*u,t[10]=v*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Di.crossVectors(i,Sn),Di.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Di.crossVectors(i,Sn)),Di.normalize(),Kr.crossVectors(Sn,Di),s[0]=Di.x,s[4]=Kr.x,s[8]=Sn.x,s[1]=Di.y,s[5]=Kr.y,s[9]=Sn.y,s[2]=Di.z,s[6]=Kr.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],f=i[14],M=i[3],E=i[7],x=i[11],S=i[15],b=s[0],R=s[4],_=s[8],A=s[12],T=s[1],D=s[5],G=s[9],W=s[13],U=s[2],V=s[6],q=s[10],H=s[14],J=s[3],X=s[7],Z=s[11],$=s[15];return r[0]=o*b+a*T+l*U+c*J,r[4]=o*R+a*D+l*V+c*X,r[8]=o*_+a*G+l*q+c*Z,r[12]=o*A+a*W+l*H+c*$,r[1]=u*b+p*T+h*U+d*J,r[5]=u*R+p*D+h*V+d*X,r[9]=u*_+p*G+h*q+d*Z,r[13]=u*A+p*W+h*H+d*$,r[2]=g*b+v*T+m*U+f*J,r[6]=g*R+v*D+m*V+f*X,r[10]=g*_+v*G+m*q+f*Z,r[14]=g*A+v*W+m*H+f*$,r[3]=M*b+E*T+x*U+S*J,r[7]=M*R+E*D+x*V+S*X,r[11]=M*_+E*G+x*q+S*Z,r[15]=M*A+E*W+x*H+S*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15],M=l*d-c*h,E=a*d-c*p,x=a*h-l*p,S=o*d-c*u,b=o*h-l*u,R=o*p-a*u;return t*(v*M-m*E+f*x)-i*(g*M-m*S+f*b)+s*(g*E-v*S+f*R)-r*(g*x-v*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=t*a-i*o,E=t*l-s*o,x=t*c-r*o,S=i*l-s*a,b=i*c-r*a,R=s*c-r*l,_=u*v-p*g,A=u*m-h*g,T=u*f-d*g,D=p*m-h*v,G=p*f-d*v,W=h*f-d*m,U=M*W-E*G+x*D+S*T-b*A+R*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/U;return e[0]=(a*W-l*G+c*D)*V,e[1]=(s*G-i*W-r*D)*V,e[2]=(v*R-m*b+f*S)*V,e[3]=(h*b-p*R-d*S)*V,e[4]=(l*T-o*W-c*A)*V,e[5]=(t*W-s*T+r*A)*V,e[6]=(m*x-g*R-f*E)*V,e[7]=(u*R-h*x+d*E)*V,e[8]=(o*G-a*T+c*_)*V,e[9]=(i*T-t*G-r*_)*V,e[10]=(g*b-v*x+f*M)*V,e[11]=(p*x-u*b-d*M)*V,e[12]=(a*A-o*D-l*_)*V,e[13]=(t*D-i*A+s*_)*V,e[14]=(v*E-g*S-m*M)*V,e[15]=(u*S-p*E+h*M)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,p=a+a,h=r*c,d=r*u,g=r*p,v=o*u,m=o*p,f=a*p,M=l*c,E=l*u,x=l*p,S=i.x,b=i.y,R=i.z;return s[0]=(1-(v+f))*S,s[1]=(d+x)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(h+f))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+E)*R,s[9]=(m-M)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const c=1/o,u=1/a,p=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=p,Vn.elements[9]*=p,Vn.elements[10]*=p,t.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2*r/(t-e),p=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ws)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2/(t-e),p=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Yn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ws)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Aa.prototype.isMatrix4=!0;let mt=Aa;const xs=new N,Vn=new mt,gp=new N(0,0,0),_p=new N(1,1,1),Di=new N,Kr=new N,Sn=new N,Bu=new mt,ku=new wi;class Ti{constructor(e=0,t=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const Gu=new N,ys=new wi,di=new mt,Qr=new N,tr=new N,xp=new N,yp=new wi,Vu=new N(1,0,0),Hu=new N(0,1,0),Wu=new N(0,0,1),Xu={type:"added"},Mp={type:"removed"},Ms={type:"childadded",child:null},pl={type:"childremoved",child:null};class zt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new N,t=new Ti,i=new wi,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new tt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(tr,Qr,this.up):di.lookAt(Qr,tr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(di),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zt.DEFAULT_UP=new N(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ki extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ki;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=Ic(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ml(o,r,e+1/3),this.g=ml(o,r,e),this.b=ml(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ct.workingToColorSpace(rn.copy(this),e),Math.round(rt(rn.r*255,0,255))*65536+Math.round(rt(rn.g*255,0,255))*256+Math.round(rt(rn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(rn.copy(this),t);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=on){ct.workingToColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,s=rn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(jr);const i=Sr(Ni.h,jr.h,t),s=Sr(Ni.s,jr.s,t),r=Sr(Ni.l,jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ot;ot.NAMES=Id;class Ga{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Ga(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dd extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new N,fi=new N,gl=new N,pi=new N,Ss=new N,bs=new N,qu=new N,_l=new N,vl=new N,xl=new N,yl=new Dt,Ml=new Dt,Sl=new Dt;class In{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),fi.subVectors(i,t),gl.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(fi),l=Hn.dot(gl),c=fi.dot(fi),u=fi.dot(gl),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const h=1/p,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),Sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),fi.subVectors(e,t),Hn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Hn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,i),bs.subVectors(r,i),_l.subVectors(e,i);const l=Ss.dot(_l),c=bs.dot(_l);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,s);const u=Ss.dot(vl),p=bs.dot(vl);if(u>=0&&p<=u)return t.copy(s);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ss,o);xl.subVectors(e,r);const d=Ss.dot(xl),g=bs.dot(xl);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bs,a);const m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return qu.subVectors(r,s),a=(p-u)/(p-u+(d-g)),t.copy(s).addScaledVector(qu,a);const f=1/(m+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(Ss,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),to.subVectors(this.max,nr),Es.subVectors(e.a,nr),ws.subVectors(e.b,nr),Ts.subVectors(e.c,nr),Ui.subVectors(ws,Es),Oi.subVectors(Ts,ws),Qi.subVectors(Es,Ts);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-Qi.z,Qi.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,Qi.z,0,-Qi.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-Qi.y,Qi.x,0];return!bl(t,Es,ws,Ts,to)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Es,ws,Ts,to))?!1:(no.crossVectors(Ui,Oi),t=[no.x,no.y,no.z],bl(t,Es,ws,Ts,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],Wn=new N,eo=new Zi,Es=new N,ws=new N,Ts=new N,Ui=new N,Oi=new N,Qi=new N,nr=new N,to=new N,no=new N,ji=new N;function bl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gt=new N,io=new be;let bp=0;class Fn extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Td,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ep=new Zi,ir=new N,El=new N;class $i{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ep.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(El)),this.expandByPoint(ir.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wp=0;const Rn=new mt,wl=new zt,As=new N,bn=new Zi,sr=new Zi,Zt=new N;class Bt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?Uc:Nc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(bn.min,sr.min),bn.expandByPoint(Zt),Zt.addVectors(bn.max,sr.max),bn.expandByPoint(Zt)):(bn.expandByPoint(sr.min),bn.expandByPoint(sr.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Zt.add(As)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new N,l[_]=new N;const c=new N,u=new N,p=new N,h=new be,d=new be,g=new be,v=new N,m=new N;function f(_,A,T){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),p.fromBufferAttribute(i,T),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,T),u.sub(c),p.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(D),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[_].add(v),a[A].add(v),a[T].add(v),l[_].add(m),l[A].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){const T=M[_],D=T.start,G=T.count;for(let W=D,U=D+G;W<U;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new N,x=new N,S=new N,b=new N;function R(_){S.fromBufferAttribute(s,_),b.copy(S);const A=a[_];E.copy(A),E.sub(S.multiplyScalar(S.dot(A))).normalize(),x.crossVectors(b,A);const D=x.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,D)}for(let _=0,A=M.length;_<A;++_){const T=M[_],D=T.start,G=T.count;for(let W=D,U=D+G;W<U;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,p=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[d++]}return new Fn(h,u,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const d=c[p];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],p=r[c];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new N,Tp=new N,Ap=new tt;class ri{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Tl.subVectors(i,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ap.getNormalMatrix(e),s=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Rp=0;class Ji extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Fs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new N,Al=new N,so=new N,ro=new N;class $s{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Al.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(Al);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),u=Math.abs(1-o*o);let p,h,d,g;if(u>0)if(p=o*l-a,h=o*a-l,g=r*u,p>=0)if(h>=-g)if(h<=g){const v=1/u;p*=v,h*=v,d=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=r,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+h*(h+2*l)+c);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),d=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Al).addScaledVector(so,h),d}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,p=e.x-o.x,h=e.y-o.y,d=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,f=i.x-o.x,M=i.y-o.y,E=i.z-o.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(u);let R,_,A,T,D,G,W,U,V,q,H,J;if(x>=S&&x>=b?(A=l,G=p,V=g,J=f,l>=0?(R=c,_=u,T=h,D=d,W=v,U=m,q=M,H=E):(R=u,_=c,T=d,D=h,W=m,U=v,q=E,H=M)):S>=b?(A=c,G=h,V=v,J=M,c>=0?(R=u,_=l,T=d,D=p,W=m,U=g,q=E,H=f):(R=l,_=u,T=p,D=d,W=g,U=m,q=f,H=E)):(A=u,G=d,V=m,J=E,u>=0?(R=l,_=c,T=p,D=h,W=g,U=v,q=f,H=M):(R=c,_=l,T=h,D=p,W=v,U=g,q=M,H=f)),A===0)return null;const X=R/A,Z=_/A,$=1/A,re=T-X*G,fe=D-Z*G,ve=W-X*V,Ee=U-Z*V,te=q-X*J,B=H-Z*J,ee=te*Ee-B*ve,ue=re*B-fe*te,oe=ve*fe-Ee*re;if(s){if(ee<0||ue<0||oe<0)return null}else if((ee<0||ue<0||oe<0)&&(ee>0||ue>0||oe>0))return null;const C=ee+ue+oe;if(C===0)return null;const P=$*(ee*G+ue*V+oe*J);return(C>0?P<0:P>0)?null:this.at(P/C,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zr extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yu=new mt,es=new $s,oo=new $i,Zu=new N,ao=new N,lo=new N,co=new N,Rl=new N,uo=new N,$u=new N,ho=new N;class mn extends zt{constructor(e=new Bt,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Rl.fromBufferAttribute(p,e),o?uo.addScaledVector(Rl,u):uo.addScaledVector(Rl.sub(t),u))}t.add(uo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(oo.containsPoint(es.origin)===!1&&(es.intersectSphere(oo,Zu)===null||es.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Yu.copy(r).invert(),es.copy(e.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,S=E;x<S;x+=3){const b=a.getX(x),R=a.getX(x+1),_=a.getX(x+2);s=fo(this,f,e,i,c,u,p,b,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=fo(this,o,e,i,c,u,p,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,S=E;x<S;x+=3){const b=x,R=x+1,_=x+2;s=fo(this,f,e,i,c,u,p,b,R,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const M=m,E=m+1,x=m+2;s=fo(this,o,e,i,c,u,p,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Cp(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Wi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:n}}function fo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ao),n.getVertexPosition(l,lo),n.getVertexPosition(c,co);const u=Cp(n,e,t,i,ao,lo,co,$u);if(u){const p=new N;In.getBarycoord($u,ao,lo,co,p),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,p,new be)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,p,new be)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,p,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};In.getNormal(ao,lo,co,h.normal),u.face=h,u.barycoord=p}return u}class Oc extends en{constructor(e=null,t=1,i=1,s,r,o,a,l,c=$t,u=$t,p,h){super(null,o,a,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new mt,Ju=new mt,po=[],Ku=new Zi,Pp=new mt,rr=new mn,or=new $i;class ec extends mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Pp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),Ku.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),or.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),e.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),Ju.multiplyMatrices(i,Rs),rr.matrixWorld=Ju,rr.raycast(e,po);for(let o=0,a=po.length;o<a;o++){const l=po[o];l.instanceId=r,l.object=this,t.push(l)}po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(s*this.count),s,this.count,Da,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ts=new $i,Lp=new be(.5,.5),mo=new N;class Va{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],f=r[11],M=r[12],E=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,d-u,f-g,S-M).normalize(),s[1].setComponents(c+o,d+u,f+g,S+M).normalize(),s[2].setComponents(c+a,d+p,f+v,S+E).normalize(),s[3].setComponents(c-a,d-p,f-v,S-E).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,d-h,f-m,S-x).normalize();else if(s[4].setComponents(c-l,d-h,f-m,S-x).normalize(),t===Yn)s[5].setComponents(c+l,d+h,f+m,S+x).normalize();else if(t===Ws)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=Lp.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fc extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ma=new N,Sa=new N,Qu=new mt,ar=new $s,go=new $i,Cl=new N,ju=new N;class Ip extends zt{constructor(e=new Bt,t=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ma.fromBufferAttribute(t,s-1),Sa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ma.distanceTo(Sa);e.setAttribute("lineDistance",new gt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Qu.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const f=u.getX(v),M=u.getX(v+1),E=_o(this,e,ar,l,f,M,v);E&&t.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),f=_o(this,e,ar,l,v,m,g-1);f&&t.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const f=_o(this,e,ar,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=_o(this,e,ar,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _o(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ma.fromBufferAttribute(a,s),Sa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ma,Sa,Cl,ju)>i)return;Cl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:ju.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class zc extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const eh=new mt,tc=new $s,vo=new $i,xo=new N;class Nd extends zt{constructor(e=new Bt,t=new zc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;eh.copy(s).invert(),tc.copy(e.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const m=c.getX(g);xo.fromBufferAttribute(p,m),th(xo,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(p.count,o.start+o.count);for(let g=h,v=d;g<v;g++)xo.fromBufferAttribute(p,g),th(xo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function th(n,e,t,i,s,r,o){const a=tc.distanceSqToPoint(n);if(a<t){const l=new N;tc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Bc extends en{constructor(e=[],t=Xi,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kc extends en{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends en{constructor(e,t,i=Kn,s,r,o,a=$t,l=$t,c,u=hi,p=1){if(u!==hi&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ud extends Xs{constructor(e,t=Kn,i=Xi,s,r,o=$t,a=$t,l,c=hi){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gc extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(p,2));function g(v,m,f,M,E,x,S,b,R,_,A){const T=x/R,D=S/_,G=x/2,W=S/2,U=b/2,V=R+1,q=_+1;let H=0,J=0;const X=new N;for(let Z=0;Z<q;Z++){const $=Z*D-W;for(let re=0;re<V;re++){const fe=re*T-G;X[v]=fe*M,X[m]=$*E,X[f]=U,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[f]=b>0?1:-1,u.push(X.x,X.y,X.z),p.push(re/R),p.push(1-Z/_),H+=1}}for(let Z=0;Z<_;Z++)for(let $=0;$<R;$++){const re=h+$+V*Z,fe=h+$+V*(Z+1),ve=h+($+1)+V*(Z+1),Ee=h+($+1)+V*Z;l.push(re,fe,Ee),l.push(fe,ve,Ee),J+=6}a.addGroup(d,J,A),d+=J,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ha extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new N,u=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const d=i+p/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Br extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],h=[],d=[];let g=0;const v=[],m=i/2;let f=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function M(){const x=new N,S=new N;let b=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const A=[],T=_/r,D=T*(t-e)+e;for(let G=0;G<=s;G++){const W=G/s,U=W*l+a,V=Math.sin(U),q=Math.cos(U);S.x=D*V,S.y=-T*i+m,S.z=D*q,p.push(S.x,S.y,S.z),x.set(V,R,q).normalize(),h.push(x.x,x.y,x.z),d.push(W,1-T),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){const T=v[A][_],D=v[A+1][_],G=v[A+1][_+1],W=v[A][_+1];(e>0||A!==0)&&(u.push(T,D,W),b+=3),(t>0||A!==r-1)&&(u.push(D,G,W),b+=3)}c.addGroup(f,b,0),f+=b}function E(x){const S=g,b=new be,R=new N;let _=0;const A=x===!0?e:t,T=x===!0?1:-1;for(let G=1;G<=s;G++)p.push(0,m*T,0),h.push(0,T,0),d.push(.5,.5),g++;const D=g;for(let G=0;G<=s;G++){const U=G/s*l+a,V=Math.cos(U),q=Math.sin(U);R.x=A*q,R.y=m*T,R.z=A*V,p.push(R.x,R.y,R.z),h.push(0,T,0),b.x=V*.5+.5,b.y=q*.5*T+.5,d.push(b.x,b.y),g++}for(let G=0;G<s;G++){const W=S+G,U=D+G;x===!0?u.push(U,U+1,W):u.push(U+1,U,W),_+=3}c.addGroup(f,_,x===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends Br{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wa extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new N,x=new N,S=new N;for(let b=0;b<t.length;b+=3)d(t[b+0],E),d(t[b+1],x),d(t[b+2],S),l(E,x,S,M)}function l(M,E,x,S){const b=S+1,R=[];for(let _=0;_<=b;_++){R[_]=[];const A=M.clone().lerp(x,_/b),T=E.clone().lerp(x,_/b),D=b-_;for(let G=0;G<=D;G++)G===0&&_===b?R[_][G]=A:R[_][G]=A.clone().lerp(T,G/D)}for(let _=0;_<b;_++)for(let A=0;A<2*(b-_)-1;A++){const T=Math.floor(A/2);A%2===0?(h(R[_][T+1]),h(R[_+1][T]),h(R[_][T])):(h(R[_][T+1]),h(R[_+1][T+1]),h(R[_+1][T]))}}function c(M){const E=new N;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(M),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function u(){const M=new N;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const x=m(M)/2/Math.PI+.5,S=f(M)/Math.PI+.5;o.push(x,1-S)}g(),p()}function p(){for(let M=0;M<o.length;M+=6){const E=o[M+0],x=o[M+2],S=o[M+4],b=Math.max(E,x,S),R=Math.min(E,x,S);b>.9&&R<.1&&(E<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,E){const x=M*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){const M=new N,E=new N,x=new N,S=new N,b=new be,R=new be,_=new be;for(let A=0,T=0;A<r.length;A+=9,T+=6){M.set(r[A+0],r[A+1],r[A+2]),E.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),b.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),_.set(o[T+4],o[T+5]),S.copy(M).add(E).add(x).divideScalar(3);const D=m(S);v(b,T+0,M,D),v(R,T+2,E,D),v(_,T+4,x,D)}}function v(M,E,x,S){S<0&&M.x===1&&(o[E]=M.x-1),x.x===0&&x.z===0&&(o[E]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.vertices,e.indices,e.radius,e.detail)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new be:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,s=[],r=[],o=[],a=new N,l=new mt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xa extends jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*p+this.aX,c=h*p+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Od extends Xa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+p)+(l-a)/p;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const nh=new N,ih=new N,Pl=new Vc,Ll=new Vc,Il=new Vc;class Hc extends jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ih.subVectors(s[0],s[1]).add(s[0]),c=ih);const p=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(nh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),d),v=Math.pow(p.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Pl.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,g,v,m),Ll.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,g,v,m),Il.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),Ll.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),Il.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return i.set(Pl.calc(l),Ll.calc(l),Il.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Dp(n,e){const t=1-n;return t*t*e}function Np(n,e){return 2*(1-n)*n*e}function Up(n,e){return n*n*e}function br(n,e,t,i){return Dp(n,e)+Np(n,t)+Up(n,i)}function Op(n,e){const t=1-n;return t*t*t*e}function Fp(n,e){const t=1-n;return 3*t*t*n*e}function zp(n,e){return 3*(1-n)*n*n*e}function Bp(n,e){return n*n*n*e}function Er(n,e,t,i,s){return Op(n,e)+Fp(n,t)+zp(n,i)+Bp(n,s)}class Wc extends jn{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends jn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y),Er(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xc extends jn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends jn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qc extends jn{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yc extends jn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zc extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return i.set(sh(a,l.x,c.x,u.x,p.x),sh(a,l.y,c.y,u.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var ba=Object.freeze({__proto__:null,ArcCurve:Od,CatmullRomCurve3:Hc,CubicBezierCurve:Wc,CubicBezierCurve3:Fd,EllipseCurve:Xa,LineCurve:Xc,LineCurve3:zd,QuadraticBezierCurve:qc,QuadraticBezierCurve3:Yc,SplineCurve:Zc});class Bd extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ba[s.type]().fromJSON(s))}return this}}class nc extends Bd{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Xc(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new qc(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Wc(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Zc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Xa(e,t,i,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kr extends nc{constructor(e){super(e),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new nc().fromJSON(s))}return this}}function kp(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=kd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Xp(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,p=l;for(let h=t;h<s;h+=t){const d=n[h],g=n[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>p&&(p=g)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return Lr(r,o,t,a,l,c,0),o}function kd(n,e,t,i,s){let r;if(s===nm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=rh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=rh(o/i|0,n[o],n[o+1],r);return r&&qs(r,r.next)&&(Dr(r),r=r.next),r}function us(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(qs(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Dr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Lr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Jp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Vp(n,i,s,r):Gp(n)){e.push(l.i,n.i,c.i),Dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Hp(us(n),e),Lr(n,e,t,i,s,r,2)):o===2&&Wp(n,e,t,i,s,r):Lr(us(n),e,t,i,s,r,1);break}}}function Gp(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),p=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=p&&g.y<=d&&pr(s,a,r,l,o,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ut(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,p,h),v=Math.max(a,l,c),m=Math.max(u,p,h),f=ic(d,g,e,t,i),M=ic(v,m,e,t,i);let E=n.prevZ,x=n.nextZ;for(;E&&E.z>=f&&x&&x.z<=M;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&pr(a,u,l,p,c,h,E.x,E.y)&&Ut(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&pr(a,u,l,p,c,h,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=f;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&pr(a,u,l,p,c,h,E.x,E.y)&&Ut(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&pr(a,u,l,p,c,h,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!qs(i,s)&&Vd(i,t,t.next,s)&&Ir(i,s)&&Ir(s,i)&&(e.push(i.i,t.i,s.i),Dr(t),Dr(t.next),t=n=s),t=t.next}while(t!==n);return us(t)}function Wp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jp(o,a)){let l=Hd(o,a);o=us(o,o.next),l=us(l,l.next),Lr(o,e,t,i,s,r,0),Lr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Xp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=kd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Qp(c))}s.sort(qp);for(let r=0;r<s.length;r++)t=Yp(s[r],t);return t}function qp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Yp(n,e){const t=Zp(n,e);if(!t)return e;const i=Hd(t,n);return us(i,i.next),us(t,t.next)}function Zp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(qs(n,t))return t;do{if(qs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Gd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const p=Math.abs(s-t.y)/(i-t.x);Ir(t,n)&&(p<u||p===u&&(t.x>o.x||t.x===o.x&&$p(o,t)))&&(o=t,u=p)}t=t.next}while(t!==a);return o}function $p(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function Jp(n,e,t,i){let s=n;do s.z===0&&(s.z=ic(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Kp(s)}function Kp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function ic(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Qp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Gd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function pr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Gd(n,e,t,i,s,r,o,a)}function jp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!em(n,e)&&(Ir(n,e)&&Ir(e,n)&&tm(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||qs(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function qs(n,e){return n.x===e.x&&n.y===e.y}function Vd(n,e,t,i){const s=Mo(Ut(n,e,t)),r=Mo(Ut(n,e,i)),o=Mo(Ut(t,i,n)),a=Mo(Ut(t,i,e));return!!(s!==r&&o!==a||s===0&&yo(n,t,e)||r===0&&yo(n,i,e)||o===0&&yo(t,n,i)||a===0&&yo(t,e,i))}function yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Mo(n){return n>0?1:n<0?-1:0}function em(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ir(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function tm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Hd(n,e){const t=sc(n.i,n.x,n.y),i=sc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function rh(n,e,t,i){const s=sc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class im{static triangulate(e,t,i=2){return kp(e,t,i)}}class os{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return os.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];oh(e),ah(i,e);let o=e.length;t.forEach(oh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ah(i,t[l]);const a=im.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function oh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ah(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Js extends Bt{constructor(e=new kr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:sm;let E,x=!1,S,b,R,_;if(f){E=f.getSpacedPoints(u),x=!0,h=!1;const L=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(u,L),b=new N,R=new N,_=new N}h||(m=0,d=0,g=0,v=0);const A=a.extractPoints(c);let T=A.shape;const D=A.holes;if(!os.isClockWise(T)){T=T.reverse();for(let L=0,K=D.length;L<K;L++){const z=D[L];os.isClockWise(z)&&(D[L]=z.reverse())}}function W(L){const z=10000000000000001e-36;let Y=L[0];for(let ie=1;ie<=L.length;ie++){const O=ie%L.length,se=L[O],xe=se.x-Y.x,Me=se.y-Y.y,F=xe*xe+Me*Me,ze=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(Y.x),Math.abs(Y.y)),Te=z*ze*ze;if(F<=Te){L.splice(O,1),ie--;continue}Y=se}}W(T),D.forEach(W);const U=D.length,V=T;for(let L=0;L<U;L++){const K=D[L];T=T.concat(K)}function q(L,K,z){return K||ht("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(K,z)}const H=T.length;function J(L,K,z){let Y,ie,O;const se=L.x-K.x,xe=L.y-K.y,Me=z.x-L.x,F=z.y-L.y,ze=se*se+xe*xe,Te=se*F-xe*Me;if(Math.abs(Te)>Number.EPSILON){const I=Math.sqrt(ze),y=Math.sqrt(Me*Me+F*F),ne=K.x-xe/I,ae=K.y+se/I,he=z.x-F/y,Se=z.y+Me/y,Re=((he-ne)*F-(Se-ae)*Me)/(se*F-xe*Me);Y=ne+se*Re-L.x,ie=ae+xe*Re-L.y;const pe=Y*Y+ie*ie;if(pe<=2)return new be(Y,ie);O=Math.sqrt(pe/2)}else{let I=!1;se>Number.EPSILON?Me>Number.EPSILON&&(I=!0):se<-Number.EPSILON?Me<-Number.EPSILON&&(I=!0):Math.sign(xe)===Math.sign(F)&&(I=!0),I?(Y=-xe,ie=se,O=Math.sqrt(ze)):(Y=se,ie=xe,O=Math.sqrt(ze/2))}return new be(Y/O,ie/O)}const X=[];for(let L=0,K=V.length,z=K-1,Y=L+1;L<K;L++,z++,Y++)z===K&&(z=0),Y===K&&(Y=0),X[L]=J(V[L],V[z],V[Y]);const Z=[];let $,re=X.concat();for(let L=0,K=U;L<K;L++){const z=D[L];$=[];for(let Y=0,ie=z.length,O=ie-1,se=Y+1;Y<ie;Y++,O++,se++)O===ie&&(O=0),se===ie&&(se=0),$[Y]=J(z[Y],z[O],z[se]);Z.push($),re=re.concat($)}let fe;if(m===0)fe=os.triangulateShape(V,D);else{const L=[],K=[];for(let z=0;z<m;z++){const Y=z/m,ie=d*Math.cos(Y*Math.PI/2),O=g*Math.sin(Y*Math.PI/2)+v;for(let se=0,xe=V.length;se<xe;se++){const Me=q(V[se],X[se],O);ue(Me.x,Me.y,-ie),Y===0&&L.push(Me)}for(let se=0,xe=U;se<xe;se++){const Me=D[se];$=Z[se];const F=[];for(let ze=0,Te=Me.length;ze<Te;ze++){const I=q(Me[ze],$[ze],O);ue(I.x,I.y,-ie),Y===0&&F.push(I)}Y===0&&K.push(F)}}fe=os.triangulateShape(L,K)}const ve=fe.length,Ee=g+v;for(let L=0;L<H;L++){const K=h?q(T[L],re[L],Ee):T[L];x?(R.copy(S.normals[0]).multiplyScalar(K.x),b.copy(S.binormals[0]).multiplyScalar(K.y),_.copy(E[0]).add(R).add(b),ue(_.x,_.y,_.z)):ue(K.x,K.y,0)}for(let L=1;L<=u;L++)for(let K=0;K<H;K++){const z=h?q(T[K],re[K],Ee):T[K];x?(R.copy(S.normals[L]).multiplyScalar(z.x),b.copy(S.binormals[L]).multiplyScalar(z.y),_.copy(E[L]).add(R).add(b),ue(_.x,_.y,_.z)):ue(z.x,z.y,p/u*L)}for(let L=m-1;L>=0;L--){const K=L/m,z=d*Math.cos(K*Math.PI/2),Y=g*Math.sin(K*Math.PI/2)+v;for(let ie=0,O=V.length;ie<O;ie++){const se=q(V[ie],X[ie],Y);ue(se.x,se.y,p+z)}for(let ie=0,O=D.length;ie<O;ie++){const se=D[ie];$=Z[ie];for(let xe=0,Me=se.length;xe<Me;xe++){const F=q(se[xe],$[xe],Y);x?ue(F.x,F.y+E[u-1].y,E[u-1].x+z):ue(F.x,F.y,p+z)}}}te(),B();function te(){const L=s.length/3;if(h){let K=0,z=H*K;for(let Y=0;Y<ve;Y++){const ie=fe[Y];oe(ie[2]+z,ie[1]+z,ie[0]+z)}K=u+m*2,z=H*K;for(let Y=0;Y<ve;Y++){const ie=fe[Y];oe(ie[0]+z,ie[1]+z,ie[2]+z)}}else{for(let K=0;K<ve;K++){const z=fe[K];oe(z[2],z[1],z[0])}for(let K=0;K<ve;K++){const z=fe[K];oe(z[0]+H*u,z[1]+H*u,z[2]+H*u)}}i.addGroup(L,s.length/3-L,0)}function B(){const L=s.length/3;let K=0;ee(V,K),K+=V.length;for(let z=0,Y=D.length;z<Y;z++){const ie=D[z];ee(ie,K),K+=ie.length}i.addGroup(L,s.length/3-L,1)}function ee(L,K){let z=L.length;for(;--z>=0;){const Y=z;let ie=z-1;ie<0&&(ie=L.length-1);for(let O=0,se=u+m*2;O<se;O++){const xe=H*O,Me=H*(O+1),F=K+Y+xe,ze=K+ie+xe,Te=K+ie+Me,I=K+Y+Me;C(F,ze,Te,I)}}}function ue(L,K,z){l.push(L),l.push(K),l.push(z)}function oe(L,K,z){P(L),P(K),P(z);const Y=s.length/3,ie=M.generateTopUV(i,s,Y-3,Y-2,Y-1);k(ie[0]),k(ie[1]),k(ie[2])}function C(L,K,z,Y){P(L),P(K),P(Y),P(K),P(z),P(Y);const ie=s.length/3,O=M.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);k(O[0]),k(O[1]),k(O[3]),k(O[1]),k(O[2]),k(O[3])}function P(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function k(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return rm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ba[s.type]().fromJSON(s)),new Js(i,e.options)}}const sm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new be(r,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],p=e[i*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-p),new be(h,1-g),new be(v,1-f)]:[new be(a,1-l),new be(u,1-p),new be(d,1-g),new be(m,1-f)]}};function rm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Gr extends Wa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gr(e.radius,e.detail)}}class fs extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,p=e/a,h=t/l,d=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const M=f*h-o;for(let E=0;E<c;E++){const x=E*p-r;g.push(x,-M,0),v.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const E=M+c*f,x=M+c*(f+1),S=M+1+c*(f+1),b=M+1+c*f;d.push(E,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class qa extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new N,h=new N,d=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const M=[],E=f/i,x=o+E*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S);let R=0;f===0&&o===0?R=.5/t:f===i&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const A=_/t,T=s+A*r;p.x=-b*Math.cos(T),p.y=S,p.z=b*Math.sin(T),g.push(p.x,p.y,p.z),h.copy(p).normalize(),v.push(h.x,h.y,h.z),m.push(A+R,1-E),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const E=u[f][M+1],x=u[f][M],S=u[f+1][M],b=u[f+1][M+1];(f!==0||o>0)&&d.push(E,x,b),(f!==i-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ya extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],p=[],h=new N,d=new N,g=new N;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let f=0;f<=s;f++){const M=f/s*r;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),p.push(f/s),p.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const f=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(f,M,x),l.push(M,E,x)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Za extends Bt{constructor(e=new Yc(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new be;let u=new N;const p=[],h=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),f()}function m(E){u=e.getPointAt(E/t,u);const x=o.normals[E],S=o.binormals[E];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,_=Math.sin(R),A=-Math.cos(R);l.x=A*x.x+_*S.x,l.y=A*x.y+_*S.y,l.z=A*x.z+_*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){const S=(s+1)*(E-1)+(x-1),b=(s+1)*E+(x-1),R=(s+1)*E+x,_=(s+1)*(E-1)+x;g.push(S,b,_),g.push(b,R,_)}}function M(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)c.x=E/t,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Za(new ba[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(lh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(lh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Ys(n[t]);for(const s in i)e[s]=i[s]}return e}function lh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function om(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Xd={clone:Ys,merge:un};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qd extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ns extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yd extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zd extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cm extends Fc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class $a extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $d extends $a{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Dl=new mt,ch=new N,uh=new N;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Va,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ws||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const So=new N,bo=new wi,ni=new N;class Jc extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,bo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,bo,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(So,bo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,bo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new N,hh=new be,dh=new be;class En extends Jc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,hh,dh),t.subVectors(dh,hh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class um extends $c{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}}class Ja extends $a{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new um}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vr extends Jc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hm extends $c{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kc extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new hm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Cs=-90,Ps=1;class Jd extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Cs,Ps,e,t);s.layers=this.layers,this.add(s);const r=new En(Cs,Ps,e,t);r.layers=this.layers,this.add(r);const o=new En(Cs,Ps,e,t);o.layers=this.layers,this.add(o);const a=new En(Cs,Ps,e,t);a.layers=this.layers,this.add(a);const l=new En(Cs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new En(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kd extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fh=new mt;class Qd{constructor(e,t,i=0,s=1/0){this.ray=new $s(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fh),this}intersectObject(e,t=!0,i=[]){return rc(e,this,i,t),i.sort(ph),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)rc(e[s],this,i,t);return i.sort(ph),i}}function ph(n,e){return n.distance-e.distance}function rc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)rc(r[o],e,t,!0)}}class oc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _u=class _u{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};_u.prototype.isMatrix2=!0;let ac=_u;class jd extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mh(n,e,t,i){const s=dm(i);switch(t){case Pc:return n*e;case Da:return n*e/s.components*s.byteLength;case Na:return n*e/s.components*s.byteLength;case qi:return n*e*2/s.components*s.byteLength;case Ua:return n*e*2/s.components*s.byteLength;case Lc:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Oa:return n*e*4/s.components*s.byteLength;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xr:case yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:case qo:return Math.max(n,16)*Math.max(e,8)/4;case Ho:case Xo:return Math.max(n,8)*Math.max(e,8)/2;case Yo:case Zo:case Jo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case Tr:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ta:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case na:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ha:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fa:case pa:case ma:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ga:case _a:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ar:case va:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(n){switch(n){case xn:case Tc:return{byteLength:1,components:1};case Vs:case Ac:case Qn:return{byteLength:2,components:1};case La:case Ia:return{byteLength:2,components:4};case Kn:case Pa:case Nn:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ef(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fm(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const u=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,u);else{p.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<p.length;d++){const g=p[h],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,p[h]=v)}p.length=h+1;for(let d=0,g=p.length;d<g;d++){const v=p[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,d0=`uniform sampler2D dfgLUT;
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
}`,f0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Lg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Og=`#define PHONG
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
}`,Fg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:ym,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:bm,begin_vertex:Em,beginnormal_vertex:wm,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Im,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Om,common:Fm,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:km,displacementmap_vertex:Gm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Hm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Zm,envmap_pars_vertex:$m,envmap_physical_pars_fragment:o0,envmap_vertex:Jm,fog_vertex:Km,fog_pars_vertex:Qm,fog_fragment:jm,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:a0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:u0,lights_physical_fragment:h0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:y0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:b0,map_particle_pars_fragment:E0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:L0,normal_fragment_begin:I0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:O0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:G0,opaque_fragment:V0,packing:H0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:K0,shadowmap_vertex:Q0,shadowmask_pars_fragment:j0,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:og,tonemapping_pars_fragment:ag,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:ug,uv_pars_vertex:hg,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:vg,cube_frag:xg,depth_vert:yg,depth_frag:Mg,distance_vert:Sg,distance_frag:bg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Tg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Lg,meshmatcap_vert:Ig,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Og,meshphong_frag:Fg,meshphysical_vert:zg,meshphysical_frag:Bg,meshtoon_vert:kg,meshtoon_frag:Gg,points_vert:Vg,points_frag:Hg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},qn={basic:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([De.common,De.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};qn.physical={uniforms:un([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Eo={r:0,b:0,g:0},Zg=new mt,tf=new tt;tf.set(-1,0,0,0,1,0,0,0,1);function $g(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,l,c,u=null,p=0,h=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(M){let E=!1;const x=d(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,E){const x=d(E);x&&(x.isCubeTexture||x.mapping===Fr)?(c===void 0&&(c=new mn(new Ci(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ys(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tf),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==yt,(u!==x||p!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new mn(new fs(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ys(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Eo,Wd(n)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,E,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:f}}function Jg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,G,W,U,V){let q=!1;const H=p(D,U,W,G);r!==H&&(r=H,c(r.object)),q=d(D,U,W,V),q&&g(D,U,W,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(D,G,W,U),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function p(D,G,W,U){const V=U.wireframe===!0;let q=i[G.id];q===void 0&&(q={},i[G.id]=q);const H=D.isInstancedMesh===!0?D.id:0;let J=q[H];J===void 0&&(J={},q[H]=J);let X=J[W.id];X===void 0&&(X={},J[W.id]=X);let Z=X[V];return Z===void 0&&(Z=h(l()),X[V]=Z),Z}function h(D){const G=[],W=[],U=[];for(let V=0;V<t;V++)G[V]=0,W[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:U,object:D,attributes:{},index:null}}function d(D,G,W,U){const V=r.attributes,q=G.attributes;let H=0;const J=W.getAttributes();for(const X in J)if(J[X].location>=0){const $=V[X];let re=q[X];if(re===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function g(D,G,W,U){const V={},q=G.attributes;let H=0;const J=W.getAttributes();for(const X in J)if(J[X].location>=0){let $=q[X];$===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&($=D.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),V[X]=re,H++}r.attributes=V,r.attributesNum=H,r.index=U}function v(){const D=r.newAttributes;for(let G=0,W=D.length;G<W;G++)D[G]=0}function m(D){f(D,0)}function f(D,G){const W=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;W[D]=1,U[D]===0&&(n.enableVertexAttribArray(D),U[D]=1),V[D]!==G&&(n.vertexAttribDivisor(D,G),V[D]=G)}function M(){const D=r.newAttributes,G=r.enabledAttributes;for(let W=0,U=G.length;W<U;W++)G[W]!==D[W]&&(n.disableVertexAttribArray(W),G[W]=0)}function E(D,G,W,U,V,q,H){H===!0?n.vertexAttribIPointer(D,G,W,V,q):n.vertexAttribPointer(D,G,W,U,V,q)}function x(D,G,W,U){v();const V=U.attributes,q=W.getAttributes(),H=G.defaultAttributeValues;for(const J in q){const X=q[J];if(X.location>=0){let Z=V[J];if(Z===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const $=Z.normalized,re=Z.itemSize,fe=e.get(Z);if(fe===void 0)continue;const ve=fe.buffer,Ee=fe.type,te=fe.bytesPerElement,B=Ee===n.INT||Ee===n.UNSIGNED_INT||Z.gpuType===Pa;if(Z.isInterleavedBufferAttribute){const ee=Z.data,ue=ee.stride,oe=Z.offset;if(ee.isInstancedInterleavedBuffer){for(let C=0;C<X.locationSize;C++)f(X.location+C,ee.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let C=0;C<X.locationSize;C++)m(X.location+C);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let C=0;C<X.locationSize;C++)E(X.location+C,re/X.locationSize,Ee,$,ue*te,(oe+re/X.locationSize*C)*te,B)}else{if(Z.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)f(X.location+ee,Z.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ee=0;ee<X.locationSize;ee++)E(X.location+ee,re/X.locationSize,Ee,$,re*te,re/X.locationSize*ee*te,B)}}else if(H!==void 0){const $=H[J];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(X.location,$);break;case 3:n.vertexAttrib3fv(X.location,$);break;case 4:n.vertexAttrib4fv(X.location,$);break;default:n.vertexAttrib1fv(X.location,$)}}}}M()}function S(){A();for(const D in i){const G=i[D];for(const W in G){const U=G[W];for(const V in U){const q=U[V];for(const H in q)u(q[H].object),delete q[H];delete U[V]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const G=i[D.id];for(const W in G){const U=G[W];for(const V in U){const q=U[V];for(const H in q)u(q[H].object),delete q[H];delete U[V]}}delete i[D.id]}function R(D){for(const G in i){const W=i[G];for(const U in W){const V=W[U];if(V[D.id]===void 0)continue;const q=V[D.id];for(const H in q)u(q[H].object),delete q[H];delete V[D.id]}}}function _(D){for(const G in i){const W=i[G],U=D.isInstancedMesh===!0?D.id:0,V=W[U];if(V!==void 0){for(const q in V){const H=V[q];for(const J in H)u(H[J].object),delete H[J];delete V[q]}delete W[U],Object.keys(W).length===0&&delete i[G]}}}function A(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Kg(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Un&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xn&&R!==Nn&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:b}}function jg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ri,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const d=p.length!==0||h||i!==0||s;return s=h,i=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,d){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,f=n.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,E=M*4;let x=f.clippingState||null;l.value=x,x=u(g,h,E,d);for(let S=0;S!==E;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,d,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=d+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,x=d;E!==v;++E,x+=4)o.copy(p[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Us=4,e_=6,t_=20,n_=256,lr=new Vr,gh=new ot;let Nl=null,Ul=0,Ol=0,Fl=!1;const i_=new N,ns=new N;class lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=i_}=r;Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Ul,Ol),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Qn,format:Un,colorSpace:Rr,depthBuffer:!1},s=_h(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s_(r)),this._blurMaterial=o_(r,e,t),this._ggxMaterial=r_(r,e,t)}return s}_compileMaterial(e){const t=new mn(new Bt,e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,i,s,r){const l=new En(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,d=p.toneMapping;p.getClearColor(gh),p.toneMapping=Zn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Ci,new zr({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(gh),f=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const S=this._cubeSize;Ls(s,x*S,E>2?S:0,S,S),p.setRenderTarget(s),f&&p.render(v,l),p.render(e,l)}p.toneMapping=d,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Xi||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,lr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),h=c*1.25,d=p*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Us?i-g+Us:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ls(r,m,f,3*v,2*v),s.setRenderTarget(r),s.render(a,lr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Ls(e,m,f,3*v,2*v),s.setRenderTarget(e),s.render(a,lr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],p=3*u*(s>this._lodMax-Us?s-this._lodMax+Us:0),h=4*(this._cubeSize-u);Ls(t,p,h,3*u,2*u),o.setRenderTarget(t),o.render(l,lr)}}function s_(n){const e=[],t=[];let i=n;const s=n-Us+1+e_;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,d=3,g=new Float32Array(d*h*p),v=new Float32Array(d*h*p);for(let f=0;f<p;f++){const M=f%3*2/3-1,E=f>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(x,d*h*f);for(let S=0;S<h;S++){const b=u[S*2]*2-1,R=u[S*2+1]*2-1;f===0?ns.set(1,R,b):f===1?ns.set(-b,1,-R):f===2?ns.set(-b,R,1):f===3?ns.set(-1,R,-b):f===4?ns.set(-b,-1,R):ns.set(b,R,-1),ns.toArray(v,(f*h+S)*d)}}const m=new Bt;m.setAttribute("position",new Fn(g,d)),m.setAttribute("outputDirection",new Fn(v,d)),t.push(new mn(m,null)),i>Us&&i--}return{lodMeshes:t,sizeLods:e}}function _h(n,e,t){const i=new On(n,e,t);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function r_(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function o_(n,e,t){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function vh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function xh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ci});r.uniforms.tEquirect.value=t;const o=new mn(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Qt),new Jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function a_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ro||d===Co)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Qc(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===Ro||d===Co,v=d===Xi||d===cs;if(g||v){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new lc(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new lc(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Ro?h.mapping=Xi:d===Co&&(h.mapping=cs),h}function l(h){let d=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function l_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&as("WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,e,t,i){const s={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(p){const h=[],d=p.index,g=p.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const M=d.array;v=d.version;for(let E=0,x=M.length;E<x;E+=3){const S=M[E+0],b=M[E+1],R=M[E+2];h.push(S,b,b,R,R,S)}}else{const M=g.array;v=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const S=E+0,b=E+1,R=E+2;h.push(S,b,b,R,R,S)}}const m=new(g.count>=65535?Uc:Nc)(h,1);m.version=v;const f=r.get(p);f&&e.remove(f),r.set(p,m)}function u(p){const h=r.get(p);if(h){const d=p.index;d!==null&&h.version<d.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function u_(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,h){n.drawElements(i,h,r,p*o),t.update(h,i,1)}function c(p,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,p*o,d),t.update(h,i,d))}function u(p,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function h_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function d_(n,e,t){const i=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let T=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var d=T;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*b*4*p),_=new Dc(R,S,b,p);_.type=Nn,_.needsUpdate=!0;const A=x*4;for(let D=0;D<p;D++){const G=f[D],W=M[D],U=E[D],V=S*b*4*D;for(let q=0;q<G.count;q++){const H=q*A;g===!0&&(s.fromBufferAttribute(G,q),R[V+H+0]=s.x,R[V+H+1]=s.y,R[V+H+2]=s.z,R[V+H+3]=0),v===!0&&(s.fromBufferAttribute(W,q),R[V+H+4]=s.x,R[V+H+5]=s.y,R[V+H+6]=s.z,R[V+H+7]=0),m===!0&&(s.fromBufferAttribute(U,q),R[V+H+8]=s.x,R[V+H+9]=s.y,R[V+H+10]=s.z,R[V+H+11]=U.itemSize===4?s.w:1)}}h={count:p,texture:_,size:new be(S,b)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function f_(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const p_={[xc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[Sc]:"CUSTOM_TONE_MAPPING"};function m_(n,e,t,i,s,r){const o=new On(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Bt;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));const u=new qd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new mn(c,u),h=new Vr(-1,1,1,-1,0,1);let d=null,g=null,v=!1,m,f=null,M=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<M.length;b++){const R=M[b];R.setSize&&R.setSize(x,S)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new On(S,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new On(S,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(S,b)}},this.begin=function(x,S){if(v||x.toneMapping===Zn&&M.length===0)return!1;if(f=S,S!==null){const b=S.width,R=S.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,v=!0;let b=o,R=a;for(let _=0;_<M.length;_++){const A=M[_];A.enabled!==!1&&(A.render(x,R,b,S),A.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,u.defines={},ct.getTransfer(d)===yt&&(u.defines.SRGB_TRANSFER="");const _=p_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(f),x.render(p,h),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const nf=new en,cc=new Xs(1,1),sf=new Dc,rf=new Ld,of=new Bc,yh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),Eh=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yh[s];if(r===void 0&&(r=new Float32Array(s),yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qa(n,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Eh.set(i),n.uniformMatrix2fv(this.addr,!1,Eh),qt(t,i)}}function M_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;bh.set(i),n.uniformMatrix3fv(this.addr,!1,bh),qt(t,i)}}function S_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Sh.set(i),n.uniformMatrix4fv(this.addr,!1,Sh),qt(t,i)}}function b_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function A_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function L_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cc.compareFunction=t.isReversedDepthBuffer()?za:Fa,r=cc):r=nf,t.setTexture2D(e||r,s)}function I_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rf,s)}function D_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||of,s)}function N_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sf,s)}function U_(n){switch(n){case 5126:return g_;case 35664:return __;case 35665:return v_;case 35666:return x_;case 35674:return y_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function O_(n,e){n.uniform1fv(this.addr,e)}function F_(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function z_(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function B_(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function k_(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function G_(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V_(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function X_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function Y_(n,e){n.uniform1uiv(this.addr,e)}function Z_(n,e){n.uniform2uiv(this.addr,e)}function $_(n,e){n.uniform3uiv(this.addr,e)}function J_(n,e){n.uniform4uiv(this.addr,e)}function K_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=cc:o=nf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Q_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rf,r[o])}function j_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||of,r[o])}function ev(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sf,r[o])}function tv(n){switch(n){case 5126:return O_;case 35664:return F_;case 35665:return z_;case 35666:return B_;case 35674:return k_;case 35675:return G_;case 35676:return V_;case 5124:case 35670:return H_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return Z_;case 36295:return $_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return ev}}class nv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}}class iv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tv(t.type)}}class sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function wh(n,e){n.seq.push(e),n.map[e.id]=e}function rv(n,e,t){const i=n.name,s=i.length;for(zl.lastIndex=0;;){const r=zl.exec(i),o=zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wh(t,c===void 0?new nv(a,n,e):new iv(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new sv(a),wh(t,p)),t=p}}}class Do{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);rv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Th(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ov=37297;let av=0;function lv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ah=new tt;function cv(n){ct._getMatrix(Ah,ct.workingColorSpace,n);const e=`mat3( ${Ah.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Cr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+lv(n.getShaderSource(e),a)}else return r}function uv(n,e){const t=cv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hv={[xc]:"Linear",[yc]:"Reinhard",[Mc]:"Cineon",[Ca]:"ACESFilmic",[bc]:"AgX",[Ec]:"Neutral",[Sc]:"Custom"};function dv(n,e){const t=hv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wo=new N;function fv(){ct.getLuminanceCoefficients(wo);const n=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function mv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function Ch(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(_v,xv)}const vv=new Map;function xv(n,e){let t=it[e];if(t===void 0){const i=vv.get(e);if(i!==void 0)t=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return uc(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(n){return n.replace(yv,Mv)}function Mv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Sv={[Os]:"SHADOWMAP_TYPE_PCF",[Ds]:"SHADOWMAP_TYPE_VSM"};function bv(n){return Sv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ev={[Xi]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function wv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Ev[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Tv={[cs]:"ENVMAP_MODE_REFRACTION"};function Av(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Tv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rv={[vc]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function Cv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Rv[n.combine]||"ENVMAP_BLENDING_NONE"}function Pv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bv(t),c=wv(t),u=Av(t),p=Cv(t),h=Pv(t),d=pv(t),g=mv(r),v=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),f=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?it.tonemapping_pars_fragment:"",t.toneMapping!==Zn?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,uv("linearToOutputTexel",t.outputColorSpace),fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=uc(o),o=Ch(o,t),o=Ph(o,t),a=uc(a),a=Ch(a,t),a=Ph(a,t),o=Lh(o),a=Lh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=M+m+o,x=M+f+a,S=Th(s,s.VERTEX_SHADER,E),b=Th(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(b)||"",V=G.trim(),q=W.trim(),H=U.trim();let J=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,b);else{const Z=Rh(s,S,"vertex"),$=Rh(s,b,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+Z+`
`+$)}else V!==""?je("WebGLProgram: Program Info Log:",V):(q===""||H==="")&&(X=!1);X&&(D.diagnostics={runnable:J,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(S),s.deleteShader(b),_=new Do(s,v),A=gv(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,ov)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=av++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}let Iv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Nv(e),t.set(e,i)),i}}class Nv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Uv(n){return n===qi||n===Tr||n===Ar}function Ov(n,e,t,i,s,r){const o=new ka,a=new Dv,l=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,T,D,G,W){const U=D.fog,V=G.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||q,H),X=J&&J.mapping===Fr?J.image.height:null,Z=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=$!==void 0?$.length:0;let fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let ve,Ee,te,B;if(Z){const Ct=qn[Z];ve=Ct.vertexShader,Ee=Ct.fragmentShader}else{ve=_.vertexShader,Ee=_.fragmentShader;const Ct=a.getVertexShaderStage(_),vt=a.getFragmentShaderStage(_);a.update(_,Ct,vt),te=Ct.id,B=vt.id}const ee=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),oe=G.isInstancedMesh===!0,C=G.isBatchedMesh===!0,P=!!_.map,k=!!_.matcap,L=!!J,K=!!_.aoMap,z=!!_.lightMap,Y=!!_.bumpMap&&_.wireframe===!1,ie=!!_.normalMap,O=!!_.displacementMap,se=!!_.emissiveMap,xe=!!_.metalnessMap,Me=!!_.roughnessMap,F=_.anisotropy>0,ze=_.clearcoat>0,Te=_.dispersion>0,I=_.retroreflectivity>0,y=_.iridescence>0,ne=_.sheen>0,ae=_.transmission>0,he=F&&!!_.anisotropyMap,Se=ze&&!!_.clearcoatMap,Re=ze&&!!_.clearcoatNormalMap,pe=ze&&!!_.clearcoatRoughnessMap,_e=y&&!!_.iridescenceMap,Ce=y&&!!_.iridescenceThicknessMap,Ye=ne&&!!_.sheenColorMap,Ne=ne&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,Ze=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=ae&&!!_.transmissionMap,j=ae&&!!_.thicknessMap,Le=!!_.gradientMap,ge=!!_.alphaMap,Ie=_.alphaTest>0,Be=!!_.alphaHash,ye=!!_.extensions;let $e=Zn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&($e=n.toneMapping);const Xe={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:Ee,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:B,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:C,batchingColor:C&&G._colorsTexture!==null,instancing:oe,instancingColor:oe&&G.instanceColor!==null,instancingMorph:oe&&G.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:P,matcap:k,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:X,aoMap:K,lightMap:z,bumpMap:Y,normalMap:ie,displacementMap:O,emissiveMap:se,normalMapObjectSpace:ie&&_.normalMapType===vd,normalMapTangentSpace:ie&&_.normalMapType===xa,packedNormalMap:ie&&_.normalMapType===xa&&Uv(_.normalMap.format),metalnessMap:xe,roughnessMap:Me,anisotropy:F,anisotropyMap:he,clearcoat:ze,clearcoatMap:Se,clearcoatNormalMap:Re,clearcoatRoughnessMap:pe,dispersion:Te,retroreflection:I,iridescence:y,iridescenceMap:_e,iridescenceThicknessMap:Ce,sheen:ne,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:Ze,specularIntensityMap:Ke,transmission:ae,transmissionMap:nt,thicknessMap:j,gradientMap:Le,opaque:_.transparent===!1&&_.blending===Fs&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Be,combine:_.combine,mapUv:P&&g(_.map.channel),aoMapUv:K&&g(_.aoMap.channel),lightMapUv:z&&g(_.lightMap.channel),bumpMapUv:Y&&g(_.bumpMap.channel),normalMapUv:ie&&g(_.normalMap.channel),displacementMapUv:O&&g(_.displacementMap.channel),emissiveMapUv:se&&g(_.emissiveMap.channel),metalnessMapUv:xe&&g(_.metalnessMap.channel),roughnessMapUv:Me&&g(_.roughnessMap.channel),anisotropyMapUv:he&&g(_.anisotropyMap.channel),clearcoatMapUv:Se&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(_.sheenRoughnessMap.channel),specularMapUv:Pe&&g(_.specularMap.channel),specularColorMapUv:Ze&&g(_.specularColorMap.channel),specularIntensityMapUv:Ke&&g(_.specularIntensityMap.channel),transmissionMapUv:nt&&g(_.transmissionMap.channel),thicknessMapUv:j&&g(_.thicknessMap.channel),alphaMapUv:ge&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||F),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(P||ge),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&ie===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:fe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:P&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:se&&_.emissiveMap.isVideoTexture===!0&&ct.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||C)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)A.push(T),A.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(f(A,_),M(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const A=d[_.type];let T;if(A){const D=qn[A];T=Xd.clone(D.uniforms)}else T=_.uniforms;return T}function x(_,A){let T=u.get(A);return T!==void 0?++T.usedTimes:(T=new Lv(n,A,_,s),c.push(T),u.set(A,T)),T}function S(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function Fv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,v,m,f){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:f},n[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=m,M.group=f),e++,M}function l(h,d,g,v,m,f,M){M.reversedDepth===!0&&(m=-m);const E=a(h,d,g,v,m,f);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(h,d,g,v,m,f){const M=a(h,d,g,v,m,f);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,d){t.length>1&&t.sort(h||zv),i.length>1&&i.sort(d||Dh),s.length>1&&s.sort(d||Dh)}function p(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Bv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Nh,n.set(i,[o])):s>=r.length?(o=new Nh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new ot};break;case"SpotLight":t={position:new N,direction:new N,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Gv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Vv=0;function Hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Wv(n){const e=new kv,t=Gv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new mt,o=new mt;function a(c){let u=0,p=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,M=0,E=0,x=0,S=0,b=0,R=0,_=0,A=0,T=0;c.sort(Hv);for(let G=0,W=c.length;G<W;G++){const U=c[G],V=U.color,q=U.intensity,H=U.distance;let J=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===qi?J=U.shadow.map.texture:J=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=V.r*q,p+=V.g*q,h+=V.b*q;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],q);T++}else if(U.isSunLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Z=U.shadow,$=t.get(U);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=J;const re=Z.getViewportCount();for(let fe=0;fe<re;fe++)i.sunShadowMatrix[v+fe]=Z.getMatrix(fe),i.sunShadowCascade[v+fe]=Z._cascadeData[fe];v+=re,g++}i.sun[d]=X,d++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Z=U.shadow,$=t.get(U);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=U.shadow.matrix,S++}i.directional[m]=X,m++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(V).multiplyScalar(q),X.distance=H,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[M]=X;const Z=U.shadow;if(U.map&&(i.spotLightMap[_]=U.map,_++,Z.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[M]=Z.matrix,U.castShadow){const $=t.get(U);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=J,R++}M++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(V).multiplyScalar(q),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[E]=X,E++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Z=U.shadow,$=t.get(U);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[f]=$,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=U.shadow.matrix,b++}i.point[f]=X,f++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(q),X.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[x]=X,x++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==T)&&(i.sun.length=d,i.directional.length=m,i.spot.length=M,i.rectArea.length=E,i.point.length=f,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,D.sunLength=d,D.directionalLength=m,D.pointLength=f,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=T,i.version=Vv++)}function l(c,u){let p=0,h=0,d=0,g=0,v=0,m=0;const f=u.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const x=c[M];if(x.isSunLight){const S=i.sun[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),p++}else if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(x.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:i}}function Uh(n){const e=new Wv(n),t=[],i=[],s=[];function r(h){p.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Xv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Uh(n),e.set(s,[a])):r>=o.length?(a=new Uh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`,Zv=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],$v=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Oh=new mt,cr=new N,Bl=new N;function Jv(n,e,t){let i=new Va;const s=new be,r=new be,o=new Dt,a=new Yd,l=new Zd,c={},u=t.maxTextureSize,p={[Wi]:pn,[pn]:Wi,[Ln]:Ln},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let f=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===$h&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);const A=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ci),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=f!==this.type;W&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=b.length;U<V;U++){const q=b[U],H=q.shadow;if(H===void 0){je("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ds){if(q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new On(s.x,s.y,{format:qi,type:Qn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new Xs(s.x,s.y,Nn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=hi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=$t,H.map.depthTexture.magFilter=$t}else q.isPointLight?(H.map=new Qc(s.x),H.map.depthTexture=new Ud(s.x,Kn)):(H.map=new On(s.x,s.y),H.map.depthTexture=new Xs(s.x,s.y,Kn)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=hi,this.type===Os?(H.map.depthTexture.compareFunction=X?za:Fa,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=$t,H.map.depthTexture.magFilter=$t);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,_);for(let $=0;$<Z;$++){const re=H.getCamera($);if(q.isPointLight){const fe=H.camera,ve=H.matrix,Ee=q.distance||fe.far;Ee!==fe.far&&(fe.far=Ee,fe.updateProjectionMatrix()),cr.setFromMatrixPosition(q.matrixWorld),fe.position.copy(cr),Bl.copy(fe.position),Bl.add(Zv[$]),fe.up.copy($v[$]),fe.lookAt(Bl),fe.updateMatrixWorld(),ve.makeTranslation(-cr.x,-cr.y,-cr.z),Oh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oh,fe.coordinateSystem,fe.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,$),n.clear();else{$===0&&(n.setRenderTarget(H.map),n.clear());const fe=H.getViewport($);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),G.viewport(o)}i=H.getFrustum($),x(R,_,re,q,this.type)}H.isPointLightShadow!==!0&&this.type===Ds&&M(H,_),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(A,T,D)};function M(b,R){const _=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new On(s.x,s.y,{format:qi,type:Qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,_,d,v,null)}function E(b,R,_,A){let T=null;const D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)T=D;else if(T=_.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const G=T.uuid,W=R.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let V=U[W];V===void 0&&(V=T.clone(),U[W]=V,R.addEventListener("dispose",S)),T=V}if(T.visible=R.visible,T.wireframe=R.wireframe,A===Ds?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:p[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=n.properties.get(T);G.light=_}return T}function x(b,R,_,A,T){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Ds)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const W=e.update(b),U=b.material;if(Array.isArray(U)){const V=W.groups;for(let q=0,H=V.length;q<H;q++){const J=V[q],X=U[J.materialIndex];if(X&&X.visible){const Z=E(b,X,A,T);b.onBeforeShadow(n,b,R,_,W,Z,J),n.renderBufferDirect(_,null,W,Z,b,J),b.onAfterShadow(n,b,R,_,W,Z,J)}}}else if(U.visible){const V=E(b,U,A,T);b.onBeforeShadow(n,b,R,_,W,V,null),n.renderBufferDirect(_,null,W,V,b,null),b.onAfterShadow(n,b,R,_,W,V,null)}}const G=b.children;for(let W=0,U=G.length;W<U;W++)x(G[W],R,_,A,T)}function S(b){b.target.removeEventListener("dispose",S);for(const _ in c){const A=c[_],T=b.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function Kv(n,e){function t(){let j=!1;const Le=new Dt;let ge=null;const Ie=new Dt(0,0,0,0);return{setMask:function(Be){ge!==Be&&!j&&(n.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){j=Be},setClear:function(Be,ye,$e,Xe,Ct){Ct===!0&&(Be*=Xe,ye*=Xe,$e*=Xe),Le.set(Be,ye,$e,Xe),Ie.equals(Le)===!1&&(n.clearColor(Be,ye,$e,Xe),Ie.copy(Le))},reset:function(){j=!1,ge=null,Ie.set(-1,0,0,0)}}}function i(){let j=!1,Le=!1,ge=null,Ie=null,Be=null;return{setReversed:function(ye){if(Le!==ye){const $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Le=ye;const Xe=Be;Be=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(ye){ye?ee(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ye){ge!==ye&&!j&&(n.depthMask(ye),ge=ye)},setFunc:function(ye){if(Le&&(ye=Jf[ye]),Ie!==ye){switch(ye){case Uo:n.depthFunc(n.NEVER);break;case Oo:n.depthFunc(n.ALWAYS);break;case Fo:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case zo:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case ko:n.depthFunc(n.GREATER);break;case Go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ye}},setLocked:function(ye){j=ye},setClear:function(ye){Be!==ye&&(Be=ye,Le&&(ye=1-ye),n.clearDepth(ye))},reset:function(){j=!1,ge=null,Ie=null,Be=null,Le=!1}}}function s(){let j=!1,Le=null,ge=null,Ie=null,Be=null,ye=null,$e=null,Xe=null,Ct=null;return{setTest:function(vt){j||(vt?ee(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(vt){Le!==vt&&!j&&(n.stencilMask(vt),Le=vt)},setFunc:function(vt,Gn,ei){(ge!==vt||Ie!==Gn||Be!==ei)&&(n.stencilFunc(vt,Gn,ei),ge=vt,Ie=Gn,Be=ei)},setOp:function(vt,Gn,ei){(ye!==vt||$e!==Gn||Xe!==ei)&&(n.stencilOp(vt,Gn,ei),ye=vt,$e=Gn,Xe=ei)},setLocked:function(vt){j=vt},setClear:function(vt){Ct!==vt&&(n.clearStencil(vt),Ct=vt)},reset:function(){j=!1,Le=null,ge=null,Ie=null,Be=null,ye=null,$e=null,Xe=null,Ct=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},h={},d=new WeakMap,g=[],v=null,m=!1,f=null,M=null,E=null,x=null,S=null,b=null,R=null,_=new ot(0,0,0),A=0,T=!1,D=null,G=null,W=null,U=null,V=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let Z=null,$={};const re=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),ve=new Dt().fromArray(re),Ee=new Dt().fromArray(fe);function te(j,Le,ge,Ie){const Be=new Uint8Array(4),ye=n.createTexture();n.bindTexture(j,ye),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<ge;$e++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return ye}const B={};B[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Gs),Y(!1),ie(Yl),ee(n.CULL_FACE),K(ci);function ee(j){u[j]!==!0&&(n.enable(j),u[j]=!0)}function ue(j){u[j]!==!1&&(n.disable(j),u[j]=!1)}function oe(j,Le){return h[j]!==Le?(n.bindFramebuffer(j,Le),h[j]=Le,j===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),j===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function C(j,Le){let ge=g,Ie=!1;if(j){ge=d.get(Le),ge===void 0&&(ge=[],d.set(Le,ge));const Be=j.textures;if(ge.length!==Be.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,$e=Be.length;ye<$e;ye++)ge[ye]=n.COLOR_ATTACHMENT0+ye;ge.length=Be.length,Ie=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ge)}function P(j){return v!==j?(n.useProgram(j),v=j,!0):!1}const k={[ss]:n.FUNC_ADD,[Kh]:n.FUNC_SUBTRACT,[Qh]:n.FUNC_REVERSE_SUBTRACT};k[jh]=n.MIN,k[ed]=n.MAX;const L={[td]:n.ZERO,[nd]:n.ONE,[id]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[cd]:n.SRC_ALPHA_SATURATE,[ad]:n.DST_COLOR,[rd]:n.DST_ALPHA,[sd]:n.ONE_MINUS_SRC_COLOR,[_c]:n.ONE_MINUS_SRC_ALPHA,[ld]:n.ONE_MINUS_DST_COLOR,[od]:n.ONE_MINUS_DST_ALPHA,[ud]:n.CONSTANT_COLOR,[hd]:n.ONE_MINUS_CONSTANT_COLOR,[dd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function K(j,Le,ge,Ie,Be,ye,$e,Xe,Ct,vt){if(j===ci){m===!0&&(ue(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),j!==Jh){if(j!==f||vt!==T){if((M!==ss||S!==ss)&&(n.blendEquation(n.FUNC_ADD),M=ss,S=ss),vt)switch(j){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ht("WebGLState: Invalid blending: ",j);break}else switch(j){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",j);break}E=null,x=null,b=null,R=null,_.set(0,0,0),A=0,f=j,T=vt}return}Be=Be||Le,ye=ye||ge,$e=$e||Ie,(Le!==M||Be!==S)&&(n.blendEquationSeparate(k[Le],k[Be]),M=Le,S=Be),(ge!==E||Ie!==x||ye!==b||$e!==R)&&(n.blendFuncSeparate(L[ge],L[Ie],L[ye],L[$e]),E=ge,x=Ie,b=ye,R=$e),(Xe.equals(_)===!1||Ct!==A)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Ct),_.copy(Xe),A=Ct),f=j,T=!1}function z(j,Le){j.side===Ln?ue(n.CULL_FACE):ee(n.CULL_FACE);let ge=j.side===pn;Le&&(ge=!ge),Y(ge),j.blending===Fs&&j.transparent===!1?K(ci):K(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const Ie=j.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),se(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(j){D!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),D=j)}function ie(j){j!==Yh?(ee(n.CULL_FACE),j!==G&&(j===Yl?n.cullFace(n.BACK):j===Zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),G=j}function O(j){j!==W&&(H&&n.lineWidth(j),W=j)}function se(j,Le,ge){j?(ee(n.POLYGON_OFFSET_FILL),(U!==Le||V!==ge)&&(U=Le,V=ge,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ge))):ue(n.POLYGON_OFFSET_FILL)}function xe(j){j?ee(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function Me(j){j===void 0&&(j=n.TEXTURE0+q-1),Z!==j&&(n.activeTexture(j),Z=j)}function F(j,Le,ge){ge===void 0&&(Z===null?ge=n.TEXTURE0+q-1:ge=Z);let Ie=$[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},$[ge]=Ie),(Ie.type!==j||Ie.texture!==Le)&&(Z!==ge&&(n.activeTexture(ge),Z=ge),n.bindTexture(j,Le||B[j]),Ie.type=j,Ie.texture=Le)}function ze(){const j=$[Z];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(j){ht("WebGLState:",j)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(j){ht("WebGLState:",j)}}function y(){try{n.texSubImage2D(...arguments)}catch(j){ht("WebGLState:",j)}}function ne(){try{n.texSubImage3D(...arguments)}catch(j){ht("WebGLState:",j)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(j){ht("WebGLState:",j)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(j){ht("WebGLState:",j)}}function Se(){try{n.texStorage2D(...arguments)}catch(j){ht("WebGLState:",j)}}function Re(){try{n.texStorage3D(...arguments)}catch(j){ht("WebGLState:",j)}}function pe(){try{n.texImage2D(...arguments)}catch(j){ht("WebGLState:",j)}}function _e(){try{n.texImage3D(...arguments)}catch(j){ht("WebGLState:",j)}}function Ce(j){return p[j]!==void 0?p[j]:n.getParameter(j)}function Ye(j,Le){p[j]!==Le&&(n.pixelStorei(j,Le),p[j]=Le)}function Ne(j){ve.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),ve.copy(j))}function Pe(j){Ee.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),Ee.copy(j))}function Ze(j,Le){let ge=c.get(Le);ge===void 0&&(ge=new WeakMap,c.set(Le,ge));let Ie=ge.get(j);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,j.name),ge.set(j,Ie))}function Ke(j,Le){const Ie=c.get(Le).get(j);l.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,j.__bindingPointIndex),l.set(Le,Ie))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},Z=null,$={},h={},d=new WeakMap,g=[],v=null,m=!1,f=null,M=null,E=null,x=null,S=null,b=null,R=null,_=new ot(0,0,0),A=0,T=!1,D=null,G=null,W=null,U=null,V=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:ue,bindFramebuffer:oe,drawBuffers:C,useProgram:P,setBlending:K,setMaterial:z,setFlipSided:Y,setCullFace:ie,setLineWidth:O,setPolygonOffset:se,setScissorTest:xe,activeTexture:Me,bindTexture:F,unbindTexture:ze,compressedTexImage2D:Te,compressedTexImage3D:I,texImage2D:pe,texImage3D:_e,pixelStorei:Ye,getParameter:Ce,updateUBOMapping:Ze,uniformBlockBinding:Ke,texStorage2D:Se,texStorage3D:Re,texSubImage2D:y,texSubImage3D:ne,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Ne,viewport:Pe,reset:nt}}function Qv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,p=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,y){return g?new OffscreenCanvas(I,y):ya("canvas")}function m(I,y,ne){let ae=1;const he=Te(I);if((he.width>ne||he.height>ne)&&(ae=ne/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Se=Math.floor(ae*he.width),Re=Math.floor(ae*he.height);h===void 0&&(h=v(Se,Re));const pe=y?v(Se,Re):h;return pe.width=Se,pe.height=Re,pe.getContext("2d").drawImage(I,0,0,Se,Re),je("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Se+"x"+Re+")."),pe}else return"data"in I&&je("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function f(I){return I.generateMipmaps}function M(I){n.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(I,y,ne,ae,he,Se=!1){if(I!==null){if(n[I]!==void 0)return n[I];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=y;if(y===n.RED&&(ne===n.FLOAT&&(pe=n.R32F),ne===n.HALF_FLOAT&&(pe=n.R16F),ne===n.UNSIGNED_BYTE&&(pe=n.R8),ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),ne===n.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),y===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.R8UI),ne===n.UNSIGNED_SHORT&&(pe=n.R16UI),ne===n.UNSIGNED_INT&&(pe=n.R32UI),ne===n.BYTE&&(pe=n.R8I),ne===n.SHORT&&(pe=n.R16I),ne===n.INT&&(pe=n.R32I)),y===n.RG&&(ne===n.FLOAT&&(pe=n.RG32F),ne===n.HALF_FLOAT&&(pe=n.RG16F),ne===n.UNSIGNED_BYTE&&(pe=n.RG8),ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),ne===n.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RG8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RG16UI),ne===n.UNSIGNED_INT&&(pe=n.RG32UI),ne===n.BYTE&&(pe=n.RG8I),ne===n.SHORT&&(pe=n.RG16I),ne===n.INT&&(pe=n.RG32I)),y===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),ne===n.UNSIGNED_INT&&(pe=n.RGB32UI),ne===n.BYTE&&(pe=n.RGB8I),ne===n.SHORT&&(pe=n.RGB16I),ne===n.INT&&(pe=n.RGB32I)),y===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),ne===n.UNSIGNED_INT&&(pe=n.RGBA32UI),ne===n.BYTE&&(pe=n.RGBA8I),ne===n.SHORT&&(pe=n.RGBA16I),ne===n.INT&&(pe=n.RGBA32I)),y===n.RGB&&(ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),ne===n.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),y===n.RGBA){const _e=Se?Cr:ct.getTransfer(he);ne===n.FLOAT&&(pe=n.RGBA32F),ne===n.HALF_FLOAT&&(pe=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(pe=_e===yt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),ne===n.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function S(I,y){let ne;return I?y===null||y===Kn||y===Hs?ne=n.DEPTH24_STENCIL8:y===Nn?ne=n.DEPTH32F_STENCIL8:y===Vs&&(ne=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kn||y===Hs?ne=n.DEPTH_COMPONENT24:y===Nn?ne=n.DEPTH_COMPONENT32F:y===Vs&&(ne=n.DEPTH_COMPONENT16),ne}function b(I,y){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==$t&&I.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function R(I){const y=I.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&p.delete(y)}function _(I){const y=I.target;y.removeEventListener("dispose",_),D(y)}function A(I){const y=i.get(I);if(y.__webglInit===void 0)return;const ne=I.source,ae=d.get(ne);if(ae){const he=ae[y.__cacheKey];he.usedTimes--,he.usedTimes===0&&T(I),Object.keys(ae).length===0&&d.delete(ne)}i.remove(I)}function T(I){const y=i.get(I);n.deleteTexture(y.__webglTexture);const ne=I.source,ae=d.get(ne);delete ae[y.__cacheKey],o.memory.textures--}function D(I){const y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let he=0;he<y.__webglFramebuffer[ae].length;he++)n.deleteFramebuffer(y.__webglFramebuffer[ae][he]);else n.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[ae]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ne=I.textures;for(let ae=0,he=ne.length;ae<he;ae++){const Se=i.get(ne[ae]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(ne[ae])}i.remove(I)}let G=0;function W(){G=0}function U(){return G}function V(I){G=I}function q(){const I=G;return I>=s.maxTextures&&je("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,I}function H(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function J(I,y){const ne=i.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){const ae=I.image;if(ae===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(ne,I,y);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+y)}function X(I,y){const ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){ue(ne,I,y);return}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+y)}function Z(I,y){const ne=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){ue(ne,I,y);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+y)}function $(I,y){const ne=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ne.__version!==I.version){oe(ne,I,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+y)}const re={[wr]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},fe={[$t]:n.NEAREST,[gd]:n.NEAREST_MIPMAP_NEAREST,[fr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},ve={[yd]:n.NEVER,[wd]:n.ALWAYS,[Md]:n.LESS,[Fa]:n.LEQUAL,[Sd]:n.EQUAL,[za]:n.GEQUAL,[bd]:n.GREATER,[Ed]:n.NOTEQUAL};function Ee(I,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===Po||y.magFilter===fr||y.magFilter===zi||y.minFilter===Qt||y.minFilter===Po||y.minFilter===fr||y.minFilter===zi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,re[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,re[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,re[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,fe[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$t||y.minFilter!==fr&&y.minFilter!==zi||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function te(I,y){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",R));const ae=y.source;let he=d.get(ae);he===void 0&&(he={},d.set(ae,he));const Se=H(y);if(Se!==I.__cacheKey){he[Se]===void 0&&(he[Se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),he[Se].usedTimes++;const Re=he[I.__cacheKey];Re!==void 0&&(he[I.__cacheKey].usedTimes--,Re.usedTimes===0&&T(y)),I.__cacheKey=Se,I.__webglTexture=he[Se].texture}return ne}function B(I,y,ne){return Math.floor(Math.floor(I/ne)/y)}function ee(I,y,ne,ae){const Se=I.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,ne,ae,y.data);else{Se.sort((Ye,Ne)=>Ye.start-Ne.start);let Re=0;for(let Ye=1;Ye<Se.length;Ye++){const Ne=Se[Re],Pe=Se[Ye],Ze=Ne.start+Ne.count,Ke=B(Pe.start,y.width,4),nt=B(Ne.start,y.width,4);Pe.start<=Ze+1&&Ke===nt&&B(Pe.start+Pe.count-1,y.width,4)===Ke?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Re,Se[Re]=Pe)}Se.length=Re+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ye=0,Ne=Se.length;Ye<Ne;Ye++){const Pe=Se[Ye],Ze=Math.floor(Pe.start/4),Ke=Math.ceil(Pe.count/4),nt=Ze%y.width,j=Math.floor(Ze/y.width),Le=Ke,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,j),t.texSubImage2D(n.TEXTURE_2D,0,nt,j,Le,ge,ne,ae,y.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function ue(I,y,ne){let ae=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=n.TEXTURE_3D);const he=te(I,y),Se=y.source;t.bindTexture(ae,I.__webglTexture,n.TEXTURE0+ne);const Re=i.get(Se);if(Se.version!==Re.__version||he===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=ct.getPrimaries(ct.workingColorSpace),Ie=y.colorSpace===_i?null:ct.getPrimaries(y.colorSpace),Be=y.colorSpace===_i||ge===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let _e=m(y.image,!1,s.maxTextureSize);_e=ze(y,_e);const Ce=r.convert(y.format,y.colorSpace),Ye=r.convert(y.type);let Ne=x(y.internalFormat,Ce,Ye,y.normalized,y.colorSpace,y.isVideoTexture);Ee(ae,y);let Pe;const Ze=y.mipmaps,Ke=y.isVideoTexture!==!0,nt=Re.__version===void 0||he===!0,j=Se.dataReady,Le=b(y,_e);if(y.isDepthTexture)Ne=S(y.format===Bi,y.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ne,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ce,Ye,null));else if(y.isDataTexture)if(Ze.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Ze[0].width,Ze[0].height);for(let ge=0,Ie=Ze.length;ge<Ie;ge++)Pe=Ze[ge],Ke?j&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Ce,Ye,Pe.data);y.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height),j&&ee(y,_e,Ce,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ce,Ye,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,Ze[0].width,Ze[0].height,_e.depth);for(let ge=0,Ie=Ze.length;ge<Ie;ge++)if(Pe=Ze[ge],y.format!==Un)if(Ce!==null)if(Ke){if(j)if(y.layerUpdates.size>0){const Be=mh(Pe.width,Pe.height,y.format,y.type);for(const ye of y.layerUpdates){const $e=Pe.data.subarray(ye*Be/Pe.data.BYTES_PER_ELEMENT,(ye+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ye,Pe.width,Pe.height,1,Ce,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,_e.depth,Ce,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ne,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?j&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,_e.depth,Ce,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ne,Pe.width,Pe.height,_e.depth,0,Ce,Ye,Pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Ze[0].width,Ze[0].height);for(let ge=0,Ie=Ze.length;ge<Ie;ge++)Pe=Ze[ge],y.format!==Un?Ce!==null?Ke?j&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Pe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?j&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Ce,Ye,Pe.data)}else if(y.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,_e.width,_e.height,_e.depth),j)if(y.layerUpdates.size>0){const ge=mh(_e.width,_e.height,y.format,y.type);for(const Ie of y.layerUpdates){const Be=_e.data.subarray(Ie*ge/_e.data.BYTES_PER_ELEMENT,(Ie+1)*ge/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,_e.width,_e.height,1,Ce,Ye,Be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ye,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Ce,Ye,_e.data);else if(y.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,_e.width,_e.height,_e.depth),j&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ye,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Ce,Ye,_e.data);else if(y.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height);else{let ge=_e.width,Ie=_e.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ne,ge,Ie,0,Ce,Ye,null),ge>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),_e.parentNode!==ge){ge.appendChild(_e),p.add(y),ge.onpaint=Ie=>{const Be=Ie.changedElements;for(const ye of p)Be.includes(ye.image)&&(ye.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const Be=n.RGBA,ye=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,ye,$e,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Ke&&nt){const ge=Te(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ge.width,ge.height)}for(let ge=0,Ie=Ze.length;ge<Ie;ge++)Pe=Ze[ge],Ke?j&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce,Ye,Pe):t.texImage2D(n.TEXTURE_2D,ge,Ne,Ce,Ye,Pe);y.generateMipmaps=!1}else if(Ke){if(nt){const ge=Te(_e);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ge.width,ge.height)}j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ye,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Ce,Ye,_e);f(y)&&M(ae),Re.__version=Se.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function oe(I,y,ne){if(y.image.length!==6)return;const ae=te(I,y),he=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+ne);const Se=i.get(he);if(he.version!==Se.__version||ae===!0){t.activeTexture(n.TEXTURE0+ne);const Re=ct.getPrimaries(ct.workingColorSpace),pe=y.colorSpace===_i?null:ct.getPrimaries(y.colorSpace),_e=y.colorSpace===_i||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Ye=y.image[0]&&y.image[0].isDataTexture,Ne=[];for(let ye=0;ye<6;ye++)!Ce&&!Ye?Ne[ye]=m(y.image[ye],!0,s.maxCubemapSize):Ne[ye]=Ye?y.image[ye].image:y.image[ye],Ne[ye]=ze(y,Ne[ye]);const Pe=Ne[0],Ze=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),nt=x(y.internalFormat,Ze,Ke,y.normalized,y.colorSpace),j=y.isVideoTexture!==!0,Le=Se.__version===void 0||ae===!0,ge=he.dataReady;let Ie=b(y,Pe);Ee(n.TEXTURE_CUBE_MAP,y);let Be;if(Ce){j&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Pe.width,Pe.height);for(let ye=0;ye<6;ye++){Be=Ne[ye].mipmaps;for(let $e=0;$e<Be.length;$e++){const Xe=Be[$e];y.format!==Un?Ze!==null?j?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,Xe.width,Xe.height,Ze,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,nt,Xe.width,Xe.height,0,Xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,Xe.width,Xe.height,Ze,Ke,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,nt,Xe.width,Xe.height,0,Ze,Ke,Xe.data)}}}else{if(Be=y.mipmaps,j&&Le){Be.length>0&&Ie++;const ye=Te(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ye){j?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne[ye].width,Ne[ye].height,Ze,Ke,Ne[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,nt,Ne[ye].width,Ne[ye].height,0,Ze,Ke,Ne[ye].data);for(let $e=0;$e<Be.length;$e++){const Ct=Be[$e].image[ye].image;j?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,Ct.width,Ct.height,Ze,Ke,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,nt,Ct.width,Ct.height,0,Ze,Ke,Ct.data)}}else{j?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ze,Ke,Ne[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,nt,Ze,Ke,Ne[ye]);for(let $e=0;$e<Be.length;$e++){const Xe=Be[$e];j?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,Ze,Ke,Xe.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,nt,Ze,Ke,Xe.image[ye])}}}f(y)&&M(n.TEXTURE_CUBE_MAP),Se.__version=he.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function C(I,y,ne,ae,he,Se){const Re=r.convert(ne.format,ne.colorSpace),pe=r.convert(ne.type),_e=x(ne.internalFormat,Re,pe,ne.normalized,ne.colorSpace),Ce=i.get(y),Ye=i.get(ne);if(Ye.__renderTarget=y,!Ce.__hasExternalTextures){const Ne=Math.max(1,y.width>>Se),Pe=Math.max(1,y.height>>Se);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Se,_e,Ne,Pe,y.depth,0,Re,pe,null):t.texImage2D(he,Se,_e,Ne,Pe,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,he,Ye.__webglTexture,0,xe(y)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,he,Ye.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(I,y,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){const ae=y.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Se=S(y.stencilBuffer,he),Re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(y),Se,y.width,y.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(y),Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,I)}else{const ae=y.textures;for(let he=0;he<ae.length;he++){const Se=ae[he],Re=r.convert(Se.format,Se.colorSpace),pe=r.convert(Se.type),_e=x(Se.internalFormat,Re,pe,Se.normalized,Se.colorSpace);Me(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(y),_e,y.width,y.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(y),_e,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_e,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function k(I,y,ne){const ae=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(y.depthTexture);if(he.__renderTarget=y,(!he.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,y.depthTexture);const Ce=r.convert(y.depthTexture.format),Ye=r.convert(y.depthTexture.type);let Ne;y.depthTexture.format===hi?Ne=n.DEPTH_COMPONENT24:y.depthTexture.format===Bi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,y.width,y.height,0,Ce,Ye,null)}}else J(y.depthTexture,0);const Se=he.__webglTexture,Re=xe(y),pe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,_e=y.depthTexture.format===Bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===hi)Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Se,0);else if(y.depthTexture.format===Bi)Me(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,pe,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,_e,pe,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function L(I){const y=i.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){const he=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),y.__depthDisposeCallback=he}y.__boundDepthTexture=ae}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(ne)for(let ae=0;ae<6;ae++)k(y.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?k(y.__webglFramebuffer[0],I,0):k(y.__webglFramebuffer,I,0)}else if(ne){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=n.createRenderbuffer(),P(y.__webglDepthbuffer[ae],I,!1);else{const he=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Se)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),P(y.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(I,y,ne){const ae=i.get(I);y!==void 0&&C(ae.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&L(I)}function z(I){const y=I.texture,ne=i.get(I),ae=i.get(y);I.addEventListener("dispose",_);const he=I.textures,Se=I.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=y.version,o.memory.textures++),Se){ne.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){ne.__webglFramebuffer[pe]=[];for(let _e=0;_e<y.mipmaps.length;_e++)ne.__webglFramebuffer[pe][_e]=n.createFramebuffer()}else ne.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){ne.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)ne.__webglFramebuffer[pe]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,_e=he.length;pe<_e;pe++){const Ce=i.get(he[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Me(I)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const _e=he[pe];ne.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]);const Ce=r.convert(_e.format,_e.colorSpace),Ye=r.convert(_e.type),Ne=x(_e.internalFormat,Ce,Ye,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),Pe=xe(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,ne.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),P(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)C(ne.__webglFramebuffer[pe][_e],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else C(ne.__webglFramebuffer[pe],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);f(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,_e=he.length;pe<_e;pe++){const Ce=he[pe],Ye=i.get(Ce);let Ne=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),Ee(Ne,Ce),C(ne.__webglFramebuffer,I,Ce,n.COLOR_ATTACHMENT0+pe,Ne,0),f(Ce)&&M(Ne)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Ee(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)C(ne.__webglFramebuffer[_e],I,y,n.COLOR_ATTACHMENT0,pe,_e);else C(ne.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,pe,0);f(y)&&M(pe),t.unbindTexture()}I.depthBuffer&&L(I)}function Y(I){const y=I.textures;for(let ne=0,ae=y.length;ne<ae;ne++){const he=y[ne];if(f(he)){const Se=E(I),Re=i.get(he).__webglTexture;t.bindTexture(Se,Re),M(Se),t.unbindTexture()}}}const ie=[],O=[];function se(I){if(I.samples>0){if(Me(I)===!1){const y=I.textures,ne=I.width,ae=I.height;let he=n.COLOR_BUFFER_BIT;const Se=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(I),pe=y.length>1;if(pe)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const _e=I.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const Ye=i.get(y[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,ne,ae,0,0,ne,ae,he,n.NEAREST),l===!0&&(ie.length=0,O.length=0,ie.push(n.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ie.push(Se),O.push(Se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const Ye=i.get(y[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function xe(I){return Math.min(s.maxSamples,I.samples)}function Me(I){const y=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(I){const y=o.render.frame;u.get(I)!==y&&(u.set(I,y),I.update())}function ze(I,y){const ne=I.colorSpace,ae=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==Rr&&ne!==_i&&(ct.getTransfer(ne)===yt?(ae!==Un||he!==xn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",ne)),y}function Te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=U,this.setTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=K,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=C,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function af(n,e){function t(i,s=_i){let r;const o=ct.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===La)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ia)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tc)return n.BYTE;if(i===Ac)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===Pa)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===Pc)return n.ALPHA;if(i===Lc)return n.RGB;if(i===Un)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===Bi)return n.DEPTH_STENCIL;if(i===Da)return n.RED;if(i===Na)return n.RED_INTEGER;if(i===qi)return n.RG;if(i===Ua)return n.RG_INTEGER;if(i===Oa)return n.RGBA_INTEGER;if(i===_r||i===vr||i===xr||i===yr)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ho||i===Wo||i===Xo||i===qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yo||i===Zo||i===$o||i===Jo||i===Ko||i===Tr||i===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yo||i===Zo)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$o)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jo)return r.COMPRESSED_R11_EAC;if(i===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Tr)return r.COMPRESSED_RG11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jo||i===ea||i===ta||i===na||i===ia||i===sa||i===ra||i===oa||i===aa||i===la||i===ca||i===ua||i===ha||i===da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jo)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ea)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ta)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===na)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ia)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ra)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===aa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===la)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ca)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ua)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ha)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===da)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===pa||i===ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===fa)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ga||i===_a||i===Ar||i===va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:jv,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends Ri{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",m=new tx,f={},M=t.getContextAttributes();let E=null,x=null;const S=[],b=[],R=new be;let _=null,A=null;const T=new En;T.viewport=new Dt;const D=new En;D.viewport=new Dt;const G=[T,D],W=new Kd;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ee=S[B];return ee===void 0&&(ee=new Io,S[B]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(B){let ee=S[B];return ee===void 0&&(ee=new Io,S[B]=ee),ee.getGripSpace()},this.getHand=function(B){let ee=S[B];return ee===void 0&&(ee=new Io,S[B]=ee),ee.getHandSpace()};function q(B){const ee=b.indexOf(B.inputSource);if(ee===-1)return;const ue=S[ee];ue!==void 0&&(ue.update(B.inputSource,B.frame,c||o),ue.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let B=0;B<S.length;B++){const ee=b[B];ee!==null&&(b[B]=null,S[B].disconnect(ee))}U=null,V=null,m.reset();for(const B in f)delete f[B];if(e.setRenderTarget(E),d=null,h=null,p=null,s=null,x=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),A!==null){const B=A.camera;B.fov=A.fov,B.zoom=A.zoom,B.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,oe=null,C=null;M.depth&&(C=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?Bi:hi,oe=M.stencil?Hs:Kn);const P={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(P),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new On(h.textureWidth,h.textureHeight,{format:Un,type:xn,depthTexture:new Xs(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new On(d.framebufferWidth,d.framebufferHeight,{format:Un,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(B){for(let ee=0;ee<B.removed.length;ee++){const ue=B.removed[ee],oe=b.indexOf(ue);oe>=0&&(b[oe]=null,S[oe].disconnect(ue))}for(let ee=0;ee<B.added.length;ee++){const ue=B.added[ee];let oe=b.indexOf(ue);if(oe===-1){for(let P=0;P<S.length;P++)if(P>=b.length){b.push(ue),oe=P;break}else if(b[P]===null){b[P]=ue,oe=P;break}if(oe===-1)break}const C=S[oe];C&&C.connect(ue)}}const X=new N,Z=new N;function $(B,ee,ue){X.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const oe=X.distanceTo(Z),C=ee.projectionMatrix.elements,P=ue.projectionMatrix.elements,k=C[14]/(C[10]-1),L=C[14]/(C[10]+1),K=(C[9]+1)/C[5],z=(C[9]-1)/C[5],Y=(C[8]-1)/C[0],ie=(P[8]+1)/P[0],O=k*Y,se=k*ie,xe=oe/(-Y+ie),Me=xe*-Y;if(ee.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Me),B.translateZ(xe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),C[10]===-1)B.projectionMatrix.copy(ee.projectionMatrix),B.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const F=k+xe,ze=L+xe,Te=O-Me,I=se+(oe-Me),y=K*L/ze*F,ne=z*L/ze*F;B.projectionMatrix.makePerspective(Te,I,y,ne,F,ze),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function re(B,ee){ee===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ee.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let ee=B.near,ue=B.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),W.near=D.near=T.near=ee,W.far=D.far=T.far=ue,(U!==W.near||V!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,V=W.far),W.layers.mask=B.layers.mask|6,T.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;const oe=B.parent,C=W.cameras;re(W,oe);for(let P=0;P<C.length;P++)re(C[P],oe);C.length===2?$(W,T,D):W.projectionMatrix.copy(T.projectionMatrix),A===null&&B.isPerspectiveCamera&&(A={camera:B,fov:B.fov,zoom:B.zoom}),fe(B,W,oe)};function fe(B,ee,ue){ue===null?B.matrix.copy(ee.matrixWorld):(B.matrix.copy(ue.matrixWorld),B.matrix.invert(),B.matrix.multiply(ee.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ee.projectionMatrix),B.projectionMatrixInverse.copy(ee.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Pr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(B){return f[B]};let ve=null;function Ee(B,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let oe=!1;ue.length!==W.cameras.length&&(W.cameras.length=0,oe=!0);for(let L=0;L<ue.length;L++){const K=ue[L];let z=null;if(d!==null)z=d.getViewport(K);else{const ie=p.getViewSubImage(h,K);z=ie.viewport,L===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let Y=G[L];Y===void 0&&(Y=new En,Y.layers.enable(L),Y.viewport=new Dt,G[L]=Y),Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(K.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(z.x,z.y,z.width,z.height),L===0&&(W.matrix.copy(Y.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),oe===!0&&W.cameras.push(Y)}const C=s.enabledFeatures;if(C&&C.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=i.getBinding();const L=p.getDepthInformation(ue[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(C&&C.includes("camera-access")&&v){e.state.unbindTexture(),p=i.getBinding();for(let L=0;L<ue.length;L++){const K=ue[L].camera;if(K){let z=f[K];z||(z=new Gc,f[K]=z);const Y=p.getCameraImage(K);z.sourceTexture=Y}}}}for(let ue=0;ue<S.length;ue++){const oe=b[ue],C=S[ue];oe!==null&&C!==void 0&&C.update(oe,ee,c||o)}ve&&ve(B,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const te=new ef;te.setAnimationLoop(Ee),this.setAnimationLoop=function(B){ve=B},this.dispose=function(){}}}const ix=new mt,lf=new tt;lf.set(-1,0,0,0,1,0,0,0,1);function sx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Wd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,E,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;i.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(m(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",M));const R=S.program;i.updateUBOMapping(x,R);const _=e.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){const S=p();x.__bindingPointIndex=S;const b=n.createBuffer(),R=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=s[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,A=b.length;_<A;_++){const T=b[_];if(Array.isArray(T))for(let D=0,G=T.length;D<G;D++)d(T[D],_,D,R);else d(T,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,S,b,R){if(v(x,S,b,R)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let T=0;for(let D=0;D<A.length;D++){const G=A[D],W=f(G);g(G,x.__data,T),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(T+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,R){const _=x.value,A=S+"_"+b;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const T=R[A];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(x){const S=x.uniforms;let b=0;const R=16;for(let A=0,T=S.length;A<T;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let G=0,W=D.length;G<W;G++){const U=D[G],V=Array.isArray(U.value)?U.value:[U.value];for(let q=0,H=V.length;q<H;q++){const J=V[q],X=f(J),Z=b%R,$=Z%X.boundary,re=Z+$;b+=$,re!==0&&R-re<X.storage&&(b+=R-re),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=X.storage}}}const _=b%R;return _>0&&(b+=R-_),x.__size=b,x.__cache={},this}function f(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):je("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){const S=x.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function ax(){return ii===null&&(ii=new Oc(ox,16,16,qi,Qn),ii.name="DFG_LUT",ii.minFilter=Qt,ii.magFilter=Qt,ii.wrapS=oi,ii.wrapT=oi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class cf{constructor(e={}){const{canvas:t=Ad(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:d=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=d,m=new Set([Oa,Ua,Na]),f=new Set([xn,Kn,Vs,Hs,La,Ia]),M=new Uint32Array(4),E=new Int32Array(4),x=new N;let S=null,b=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1,G=null,W=null,U=null,V=null;this._outputColorSpace=on;let q=0,H=0,J=null,X=-1,Z=null;const $=new Dt,re=new Dt;let fe=null;const ve=new ot(0);let Ee=0,te=t.width,B=t.height,ee=1,ue=null,oe=null;const C=new Dt(0,0,te,B),P=new Dt(0,0,te,B);let k=!1;const L=new Va;let K=!1,z=!1;const Y=new mt,ie=new N,O=new Dt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Me(){return J===null?ee:1}let F=i;function ze(w,Q){return t.getContext(w,Q)}let Te,I,y,ne,ae,he,Se,Re,pe,_e,Ce,Ye,Ne,Pe,Ze,Ke,nt,j,Le,ge,Ie,Be,ye;try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),F===null){const Q="webgl2";if(F=ze(Q,w),F===null)throw ze(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(w){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),ht("WebGLRenderer: "+w.message),w}function $e(){Te=new l_(F),Te.init(),Ie=new af(F,Te),I=new Qg(F,Te,e,Ie),y=new Kv(F,Te),I.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),W=F.createFramebuffer(),U=F.createFramebuffer(),V=F.createFramebuffer(),ne=new h_(F),ae=new Fv,he=new Qv(F,Te,y,ae,I,Ie,ne),Se=new a_(T),Re=new fm(F),Be=new Jg(F,Re),pe=new c_(F,Re,ne,Be),_e=new f_(F,pe,Re,Be,ne),j=new d_(F,I,he),Ze=new jg(ae),Ce=new Ov(T,Se,Te,I,Be,Ze),Ye=new sx(T,ae),Ne=new Bv,Pe=new Xv(Te),nt=new $g(T,Se,y,_e,g,l),Ke=new Jv(T,_e,I),ye=new rx(F,ne,I,y),Le=new Kg(F,Te,ne),ge=new u_(F,Te,ne),ne.programs=Ce.programs,T.capabilities=I,T.extensions=Te,T.properties=ae,T.renderLists=Ne,T.shadowMap=Ke,T.state=y,T.info=ne}v!==xn&&(A=new m_(v,t.width,t.height,a,s,r));const Xe=new nx(T,F);this.xr=Xe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(te,B,!1))},this.getSize=function(w){return w.set(te,B)},this.setSize=function(w,Q,de=!0){if(Xe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,B=Q,t.width=Math.floor(w*ee),t.height=Math.floor(Q*ee),de===!0&&(t.style.width=w+"px",t.style.height=Q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(te*ee,B*ee).floor()},this.setDrawingBufferSize=function(w,Q,de){te=w,B=Q,ee=de,t.width=Math.floor(w*de),t.height=Math.floor(Q*de),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(v===xn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy($)},this.getViewport=function(w){return w.copy(C)},this.setViewport=function(w,Q,de,le){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,Q,de,le),y.viewport($.copy(C).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(P)},this.setScissor=function(w,Q,de,le){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,Q,de,le),y.scissor(re.copy(P).multiplyScalar(ee).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(w){y.setScissorTest(k=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,de=!0){let le=0;if(w){let ce=!1;if(J!==null){const Fe=J.texture.format;ce=m.has(Fe)}if(ce){const Fe=J.texture.type,Ge=f.has(Fe),Ue=nt.getClearColor(),Ve=nt.getClearAlpha(),qe=Ue.r,st=Ue.g,at=Ue.b;Ge?(M[0]=qe,M[1]=st,M[2]=at,M[3]=Ve,F.clearBufferuiv(F.COLOR,0,M)):(E[0]=qe,E[1]=st,E[2]=at,E[3]=Ve,F.clearBufferiv(F.COLOR,0,E))}else le|=F.COLOR_BUFFER_BIT}Q&&(le|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),G=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),nt.dispose(),Ne.dispose(),Pe.dispose(),ae.dispose(),Se.dispose(),_e.dispose(),Be.dispose(),ye.dispose(),Ce.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",xu),Xe.removeEventListener("sessionend",yu),Ki.stop()};function Ct(w){w.preventDefault(),Ql("WebGLRenderer: Context Lost."),D=!0}function vt(){Ql("WebGLRenderer: Context Restored."),D=!1;const w=ne.autoReset,Q=Ke.enabled,de=Ke.autoUpdate,le=Ke.needsUpdate,ce=Ke.type;$e(),ne.autoReset=w,Ke.enabled=Q,Ke.autoUpdate=de,Ke.needsUpdate=le,Ke.type=ce}function Gn(w){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ei(w){const Q=w.target;Q.removeEventListener("dispose",ei),Uf(Q)}function Uf(w){Of(w),ae.remove(w)}function Of(w){const Q=ae.get(w).programs;Q!==void 0&&(Q.forEach(function(de){Ce.releaseProgram(de)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,de,le,ce,Fe){Q===null&&(Q=se);const Ge=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ue=Bf(w,Q,de,le,ce);y.setMaterial(le,Ge);let Ve=de.index,qe=1;if(le.wireframe===!0){if(Ve=pe.getWireframeAttribute(de),Ve===void 0)return;qe=2}const st=de.drawRange,at=de.attributes.position;let He=st.start*qe,xt=(st.start+st.count)*qe;Fe!==null&&(He=Math.max(He,Fe.start*qe),xt=Math.min(xt,(Fe.start+Fe.count)*qe)),Ve!==null?(He=Math.max(He,0),xt=Math.min(xt,Ve.count)):at!=null&&(He=Math.max(He,0),xt=Math.min(xt,at.count));const kt=xt-He;if(kt<0||kt===1/0)return;Be.setup(ce,le,Ue,de,Ve);let Lt,At=Le;if(Ve!==null&&(Lt=Re.get(Ve),At=ge,At.setIndex(Lt)),ce.isMesh)le.wireframe===!0?(y.setLineWidth(le.wireframeLinewidth*Me()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(ce.isLine){let nn=le.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*Me()),ce.isLineSegments?At.setMode(F.LINES):ce.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else ce.isPoints?At.setMode(F.POINTS):ce.isSprite&&At.setMode(F.TRIANGLES);if(ce.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))At.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const nn=ce._multiDrawStarts,ke=ce._multiDrawCounts,ln=ce._multiDrawCount,ft=Ve?Re.get(Ve).bytesPerElement:1,An=ae.get(le).currentProgram.getUniforms();for(let ti=0;ti<ln;ti++)An.setValue(F,"_gl_DrawID",ti),At.render(nn[ti]/ft,ke[ti])}else if(ce.isInstancedMesh)At.renderInstances(He,kt,ce.count);else if(de.isInstancedBufferGeometry){const nn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ke=Math.min(de.instanceCount,nn);At.renderInstances(He,kt,ke)}else At.render(He,kt)};function vu(w,Q,de,le){G!==null&&w.isNodeMaterial&&G.setObject(le,w),K===!0&&Ze.setState(w,de,!1),w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,Jr(w,Q,le),w.side=Wi,w.needsUpdate=!0,Jr(w,Q,le),w.side=Ln):Jr(w,Q,le)}this.compile=function(w,Q,de=null){de===null&&(de=w),G!==null&&G.renderStart(w,Q,de),b=Pe.get(de),b.init(Q),_.push(b),de.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),w!==de&&w.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),b.setupLights(),G!==null&&G.updateLights(b.state.lightsArray),z=this.localClippingEnabled,K=Ze.init(this.clippingPlanes,z),K===!0&&Ze.setGlobalState(this.clippingPlanes,Q),G!==null&&Ke.render(b.state.shadowsArray,de,Q);const le=new Set;return w.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Fe=ce.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ue=Fe[Ge];vu(Ue,de,Q,ce),le.add(Ue)}else vu(Fe,de,Q,ce),le.add(Fe)}),b=_.pop(),G!==null&&G.renderEnd(),le},this.compileAsync=function(w,Q,de=null){const le=this.compile(w,Q,de);return new Promise(ce=>{function Fe(){if(le.forEach(function(Ge){const Ve=ae.get(Ge).currentProgram;(Ve===void 0||Ve.isReady())&&le.delete(Ge)}),le.size===0){ce(w);return}setTimeout(Fe,10)}Te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let al=null;function Ff(w){al&&al(w)}function xu(){Ki.stop()}function yu(){Ki.start()}const Ki=new ef;Ki.setAnimationLoop(Ff),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){al=w,Xe.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},Xe.addEventListener("sessionstart",xu),Xe.addEventListener("sessionend",yu),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(w,Q);const de=Xe.enabled===!0&&Xe.isPresenting===!0,le=A!==null&&(J===null||de)&&A.begin(T,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(Q),Q=Xe.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,Q,J),b=Pe.get(w,_.length),b.init(Q),b.state.textureUnits=he.getTextureUnits(),_.push(b),Y.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),L.setFromProjectionMatrix(Y,Yn,Q.reversedDepth),z=this.localClippingEnabled,K=Ze.init(this.clippingPlanes,z),S=Ne.get(w,R.length),S.init(),R.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=T.xr.getDepthSensingMesh();Ge!==null&&ll(Ge,Q,-1/0,T.sortObjects)}ll(w,Q,0,T.sortObjects),S.finish(),G!==null&&G.updateLights(b.state.lightsArray),T.sortObjects===!0&&S.sort(ue,oe),xe=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,xe&&nt.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&Ze.beginShadows();const ce=b.state.shadowsArray;if(Ke.render(ce,w,Q),K===!0&&Ze.endShadows(),(le&&A.hasRenderPass())===!1){const Ge=S.opaque,Ue=S.transmissive;if(b.setupLights(),Q.isArrayCamera){const Ve=Q.cameras;if(Ue.length>0)for(let qe=0,st=Ve.length;qe<st;qe++){const at=Ve[qe];Su(Ge,Ue,w,at)}xe&&nt.render(w);for(let qe=0,st=Ve.length;qe<st;qe++){const at=Ve[qe];Mu(S,w,at,at.viewport)}}else Ue.length>0&&Su(Ge,Ue,w,Q),xe&&nt.render(w),Mu(S,w,Q)}J!==null&&H===0&&(he.updateMultisampleRenderTarget(J),he.updateRenderTargetMipmap(J)),le&&A.end(T),w.isScene===!0&&w.onAfterRender(T,w,Q),Be.resetDefaultState(),X=-1,Z=null,_.pop(),_.length>0?(b=_[_.length-1],he.setTextureUnits(b.state.textureUnits),K===!0&&Ze.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,G!==null&&G.renderEnd()};function ll(w,Q,de,le){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(L)){le&&O.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Y);const Ge=_e.update(w),Ue=w.material;Ue.visible&&S.push(w,Ge,Ue,de,O.z,null,Q)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(L))){const Ge=_e.update(w),Ue=w.material;if(le&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),O.copy(w.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),O.copy(Ge.boundingSphere.center)),O.applyMatrix4(w.matrixWorld).applyMatrix4(Y)),Array.isArray(Ue)){const Ve=Ge.groups;for(let qe=0,st=Ve.length;qe<st;qe++){const at=Ve[qe],He=Ue[at.materialIndex];He&&He.visible&&S.push(w,Ge,He,de,O.z,at,Q)}}else Ue.visible&&S.push(w,Ge,Ue,de,O.z,null,Q)}}const Fe=w.children;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++)ll(Fe[Ge],Q,de,le)}function Mu(w,Q,de,le){const{opaque:ce,transmissive:Fe,transparent:Ge}=w;b.setupLightsView(de),K===!0&&Ze.setGlobalState(T.clippingPlanes,de),le&&y.viewport($.copy(le)),ce.length>0&&$r(ce,Q,de),Fe.length>0&&$r(Fe,Q,de),Ge.length>0&&$r(Ge,Q,de),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Su(w,Q,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[le.id]===void 0){const He=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[le.id]=new On(1,1,{generateMipmaps:!0,type:He?Qn:xn,minFilter:zi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Fe=b.state.transmissionRenderTarget[le.id],Ge=le.viewport||$;Fe.setSize(Ge.z*T.transmissionResolutionScale,Ge.w*T.transmissionResolutionScale);const Ue=T.getRenderTarget(),Ve=T.getActiveCubeFace(),qe=T.getActiveMipmapLevel();T.setRenderTarget(Fe),T.getClearColor(ve),Ee=T.getClearAlpha(),Ee<1&&T.setClearColor(16777215,.5),T.clear(),xe&&nt.render(de);const st=T.toneMapping;T.toneMapping=Zn;const at=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),b.setupLightsView(le),K===!0&&Ze.setGlobalState(T.clippingPlanes,le),$r(w,de,le),he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let xt=0,kt=Q.length;xt<kt;xt++){const Lt=Q[xt],{object:At,geometry:nn,material:ke,group:ln}=Lt;if(ke.side===Ln&&At.layers.test(le.layers)){const ft=ke.side;ke.side=pn,ke.needsUpdate=!0,bu(At,de,le,nn,ke,ln),ke.side=ft,ke.needsUpdate=!0,He=!0}}He===!0&&(he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe))}T.setRenderTarget(Ue,Ve,qe),T.setClearColor(ve,Ee),at!==void 0&&(le.viewport=at),T.toneMapping=st}function $r(w,Q,de){const le=Q.isScene===!0?Q.overrideMaterial:null;for(let ce=0,Fe=w.length;ce<Fe;ce++){const Ge=w[ce],{object:Ue,geometry:Ve,group:qe}=Ge;let st=Ge.material;st.allowOverride===!0&&le!==null&&(st=le),Ue.layers.test(de.layers)&&bu(Ue,Q,de,Ve,st,qe)}}function bu(w,Q,de,le,ce,Fe){G!==null&&ce.isNodeMaterial&&G.setObject(w,ce),w.onBeforeRender(T,Q,de,le,ce,Fe),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ce.onBeforeRender(T,Q,de,le,w,Fe),ce.transparent===!0&&ce.side===Ln&&ce.forceSinglePass===!1?(ce.side=pn,ce.needsUpdate=!0,T.renderBufferDirect(de,Q,le,ce,w,Fe),ce.side=Wi,ce.needsUpdate=!0,T.renderBufferDirect(de,Q,le,ce,w,Fe),ce.side=Ln):T.renderBufferDirect(de,Q,le,ce,w,Fe),w.onAfterRender(T,Q,de,le,ce,Fe)}function Jr(w,Q,de){Q.isScene!==!0&&(Q=se);const le=ae.get(w),ce=b.state.lights,Fe=b.state.shadowsArray,Ge=ce.state.version,Ue=Ce.getParameters(w,ce.state,Fe,Q,de,b.state.lightProbeGridArray),Ve=Ce.getProgramCacheKey(Ue);let qe=le.programs;le.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Q.environment:null,le.fog=Q.fog;const st=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;le.envMap=Se.get(w.envMap||le.environment,st),le.envMapRotation=le.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",ei),qe=new Map,le.programs=qe);let at=qe.get(Ve);if(at!==void 0){if(le.currentProgram===at&&le.lightsStateVersion===Ge)return wu(w,Ue),at}else Ue.uniforms=Ce.getUniforms(w),G!==null&&w.isNodeMaterial&&G.build(w,de,Ue),w.onBeforeCompile(Ue,T),at=Ce.acquireProgram(Ue,Ve),qe.set(Ve,at),le.uniforms=Ue.uniforms;const He=le.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Ze.uniform),wu(w,Ue),le.needsLights=Gf(w),le.lightsStateVersion=Ge,le.needsLights&&(He.ambientLightColor.value=ce.state.ambient,He.lightProbe.value=ce.state.probe,He.sunLights.value=ce.state.sun,He.sunLightShadows.value=ce.state.sunShadow,He.directionalLights.value=ce.state.directional,He.directionalLightShadows.value=ce.state.directionalShadow,He.spotLights.value=ce.state.spot,He.spotLightShadows.value=ce.state.spotShadow,He.rectAreaLights.value=ce.state.rectArea,He.ltc_1.value=ce.state.rectAreaLTC1,He.ltc_2.value=ce.state.rectAreaLTC2,He.pointLights.value=ce.state.point,He.pointLightShadows.value=ce.state.pointShadow,He.hemisphereLights.value=ce.state.hemi,He.sunShadowMatrix.value=ce.state.sunShadowMatrix,He.sunShadowCascade.value=ce.state.sunShadowCascade,He.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,He.spotLightMatrix.value=ce.state.spotLightMatrix,He.spotLightMap.value=ce.state.spotLightMap,He.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=b.state.lightProbeGridArray.length>0,le.currentProgram=at,le.uniformsList=null,at}function Eu(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Do.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function wu(w,Q){const de=ae.get(w);de.outputColorSpace=Q.outputColorSpace,de.batching=Q.batching,de.batchingColor=Q.batchingColor,de.instancing=Q.instancing,de.instancingColor=Q.instancingColor,de.instancingMorph=Q.instancingMorph,de.skinning=Q.skinning,de.morphTargets=Q.morphTargets,de.morphNormals=Q.morphNormals,de.morphColors=Q.morphColors,de.morphTargetsCount=Q.morphTargetsCount,de.numClippingPlanes=Q.numClippingPlanes,de.numIntersection=Q.numClipIntersection,de.vertexAlphas=Q.vertexAlphas,de.vertexTangents=Q.vertexTangents,de.toneMapping=Q.toneMapping}function zf(w,Q){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(Q.matrixWorld);for(let de=0,le=w.length;de<le;de++){const ce=w[de];if(ce.texture!==null&&ce.boundingBox.containsPoint(x))return ce}return null}function Bf(w,Q,de,le,ce){Q.isScene!==!0&&(Q=se),he.resetTextureUnits();const Fe=Q.fog,Ge=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?Q.environment:null,Ue=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ct.workingColorSpace,Ve=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,qe=Se.get(le.envMap||Ge,Ve),st=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,at=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),He=!!de.morphAttributes.position,xt=!!de.morphAttributes.normal,kt=!!de.morphAttributes.color;let Lt=Zn;le.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=T.toneMapping);const At=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,nn=At!==void 0?At.length:0,ke=ae.get(le),ln=b.state.lights;if(K===!0&&(z===!0||w!==Z)){const Pt=w===Z&&le.id===X;Ze.setState(le,w,Pt)}let ft=!1;le.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ln.state.version||ke.outputColorSpace!==Ue||ce.isBatchedMesh&&ke.batching===!1||!ce.isBatchedMesh&&ke.batching===!0||ce.isBatchedMesh&&ke.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&ke.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&ke.instancing===!1||!ce.isInstancedMesh&&ke.instancing===!0||ce.isSkinnedMesh&&ke.skinning===!1||!ce.isSkinnedMesh&&ke.skinning===!0||ce.isInstancedMesh&&ke.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ke.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&ke.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&ke.instancingMorph===!1&&ce.morphTexture!==null||ke.envMap!==qe||le.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ze.numPlanes||ke.numIntersection!==Ze.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==at||ke.morphTargets!==He||ke.morphNormals!==xt||ke.morphColors!==kt||ke.toneMapping!==Lt||ke.morphTargetsCount!==nn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,ke.__version=le.version);let An=ke.currentProgram;ft===!0&&(An=Jr(le,Q,ce),G&&le.isNodeMaterial&&G.onUpdateProgram(le,An,ke));let ti=!1,Pi=!1,gs=!1;const Tt=An.getUniforms(),Ft=ke.uniforms;if(y.useProgram(An.program)&&(ti=!0,Pi=!0,gs=!0),le.id!==X&&(X=le.id,Pi=!0),ke.needsLights){const Pt=zf(b.state.lightProbeGridArray,ce);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,Pi=!0)}if(ti||Z!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(F,"projectionMatrix",w.projectionMatrix),Tt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Ii=Tt.map.cameraPosition;Ii!==void 0&&Ii.setValue(F,ie.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Tt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Tt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Pi=!0,gs=!0)}if(ke.needsLights&&(ln.state.sunShadowMap.length>0&&Tt.setValue(F,"sunShadowMap",ln.state.sunShadowMap,he),ln.state.directionalShadowMap.length>0&&Tt.setValue(F,"directionalShadowMap",ln.state.directionalShadowMap,he),ln.state.spotShadowMap.length>0&&Tt.setValue(F,"spotShadowMap",ln.state.spotShadowMap,he),ln.state.pointShadowMap.length>0&&Tt.setValue(F,"pointShadowMap",ln.state.pointShadowMap,he)),ce.isSkinnedMesh){Tt.setOptional(F,ce,"bindMatrix"),Tt.setOptional(F,ce,"bindMatrixInverse");const Pt=ce.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Tt.setValue(F,"boneTexture",Pt.boneTexture,he))}ce.isBatchedMesh&&(Tt.setOptional(F,ce,"batchingTexture"),Tt.setValue(F,"batchingTexture",ce._matricesTexture,he),Tt.setOptional(F,ce,"batchingIdTexture"),Tt.setValue(F,"batchingIdTexture",ce._indirectTexture,he),Tt.setOptional(F,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Tt.setValue(F,"batchingColorTexture",ce._colorsTexture,he));const Li=de.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&j.update(ce,de,An),(Pi||ke.receiveShadow!==ce.receiveShadow)&&(ke.receiveShadow=ce.receiveShadow,Tt.setValue(F,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&Q.environment!==null&&(Ft.envMapIntensity.value=Q.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=ax()),Pi){if(Tt.setValue(F,"toneMappingExposure",T.toneMappingExposure),ke.needsLights&&kf(Ft,gs),Fe&&le.fog===!0&&Ye.refreshFogUniforms(Ft,Fe),Ye.refreshMaterialUniforms(Ft,le,ee,B,b.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.lightProbeGrid){const Pt=ke.lightProbeGrid;Ft.probesSH.value=Pt.texture,Ft.probesMin.value.copy(Pt.boundingBox.min),Ft.probesMax.value.copy(Pt.boundingBox.max),Ft.probesResolution.value.copy(Pt.resolution)}Do.upload(F,Eu(ke),Ft,he)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Do.upload(F,Eu(ke),Ft,he),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Tt.setValue(F,"center",ce.center),Tt.setValue(F,"modelViewMatrix",ce.modelViewMatrix),Tt.setValue(F,"normalMatrix",ce.normalMatrix),Tt.setValue(F,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const Pt=le.uniformsGroups;for(let Ii=0,_s=Pt.length;Ii<_s;Ii++){const Au=Pt[Ii];ye.update(Au,An),ye.bind(Au,An)}}return An}function kf(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.sunLights.needsUpdate=Q,w.sunLightShadows.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function Gf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Q,de){const le=ae.get(w);le.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ae.get(w.texture).__webglTexture=Q,ae.get(w.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const de=ae.get(w);de.__webglFramebuffer=Q,de.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(w,Q=0,de=0){J=w,q=Q,H=de;let le=null,ce=!1,Fe=!1;if(w){const Ue=ae.get(w);if(Ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Ue.__webglFramebuffer),$.copy(w.viewport),re.copy(w.scissor),fe=w.scissorTest,y.viewport($),y.scissor(re),y.setScissorTest(fe),X=-1;return}else if(Ue.__webglFramebuffer===void 0)he.setupRenderTarget(w);else if(Ue.__hasExternalTextures)he.rebindTextures(w,ae.get(w.texture).__webglTexture,ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const st=w.depthTexture;if(Ue.__boundDepthTexture!==st){if(st!==null&&ae.has(st)&&(w.width!==st.image.width||w.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Fe=!0);const qe=ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[Q])?le=qe[Q][de]:le=qe[Q],ce=!0):w.samples>0&&he.useMultisampledRTT(w)===!1?le=ae.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?le=qe[de]:le=qe,$.copy(w.viewport),re.copy(w.scissor),fe=w.scissorTest}else $.copy(C).multiplyScalar(ee).floor(),re.copy(P).multiplyScalar(ee).floor(),fe=k;if(de!==0&&(le=W),y.bindFramebuffer(F.FRAMEBUFFER,le)&&y.drawBuffers(w,le),y.viewport($),y.scissor(re),y.setScissorTest(fe),ce){const Ue=ae.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ue.__webglTexture,de)}else if(Fe){const Ue=Q;for(let Ve=0;Ve<w.textures.length;Ve++){const qe=ae.get(w.textures[Ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,de,Ue)}}else if(w!==null&&de!==0){const Ue=ae.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ue.__webglTexture,de)}X=-1};function Tu(w){const Q=ae.get(w);return(Q.__readFormat!==w.format||Q.__readType!==w.type)&&(Q.__readFormat=w.format,Q.__readType=w.type,Q.__formatReadable=I.textureFormatReadable(w.format),Q.__typeReadable=I.textureTypeReadable(w.type)),Q}this.readRenderTargetPixels=function(w,Q,de,le,ce,Fe,Ge,Ue=0){if(!(w&&w.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){y.bindFramebuffer(F.FRAMEBUFFER,Ve);try{const qe=w.textures[Ue],st=qe.format,at=qe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ue);const He=Tu(qe);if(He.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-le&&de>=0&&de<=w.height-ce&&F.readPixels(Q,de,le,ce,Ie.convert(st),Ie.convert(at),Fe)}finally{const qe=J!==null?ae.get(J).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,Q,de,le,ce,Fe,Ge,Ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(Q>=0&&Q<=w.width-le&&de>=0&&de<=w.height-ce){y.bindFramebuffer(F.FRAMEBUFFER,Ve);const qe=w.textures[Ue],st=qe.format,at=qe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ue);const He=Tu(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,Fe.byteLength,F.STREAM_READ),F.readPixels(Q,de,le,ce,Ie.convert(st),Ie.convert(at),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const kt=J!==null?ae.get(J).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,kt);const Lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $f(F,Lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Fe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(xt),F.deleteSync(Lt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,de=0){const le=Math.pow(2,-de),ce=Math.floor(w.image.width*le),Fe=Math.floor(w.image.height*le),Ge=Q!==null?Q.x:0,Ue=Q!==null?Q.y:0;he.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,de,0,0,Ge,Ue,ce,Fe),y.unbindTexture()},this.copyTextureToTexture=function(w,Q,de=null,le=null,ce=0,Fe=0){let Ge,Ue,Ve,qe,st,at,He,xt,kt;const Lt=w.isCompressedTexture?w.mipmaps[Fe]:w.image;if(de!==null)Ge=de.max.x-de.min.x,Ue=de.max.y-de.min.y,Ve=de.isBox3?de.max.z-de.min.z:1,qe=de.min.x,st=de.min.y,at=de.isBox3?de.min.z:0;else{const Ft=Math.pow(2,-ce);Ge=Math.floor(Lt.width*Ft),Ue=Math.floor(Lt.height*Ft),w.isDataArrayTexture?Ve=Lt.depth:w.isData3DTexture?Ve=Math.floor(Lt.depth*Ft):Ve=1,qe=0,st=0,at=0}le!==null?(He=le.x,xt=le.y,kt=le.z):(He=0,xt=0,kt=0);const At=Ie.convert(Q.format),nn=Ie.convert(Q.type);let ke;Q.isData3DTexture?(he.setTexture3D(Q,0),ke=F.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(he.setTexture2DArray(Q,0),ke=F.TEXTURE_2D_ARRAY):(he.setTexture2D(Q,0),ke=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Q.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,Q.unpackAlignment);const ln=y.getParameter(F.UNPACK_ROW_LENGTH),ft=y.getParameter(F.UNPACK_IMAGE_HEIGHT),An=y.getParameter(F.UNPACK_SKIP_PIXELS),ti=y.getParameter(F.UNPACK_SKIP_ROWS),Pi=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Lt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),y.pixelStorei(F.UNPACK_SKIP_ROWS,st),y.pixelStorei(F.UNPACK_SKIP_IMAGES,at);const gs=w.isDataArrayTexture||w.isData3DTexture,Tt=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const Ft=ae.get(w),Li=ae.get(Q),Pt=ae.get(Ft.__renderTarget),Ii=ae.get(Li.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Pt.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let _s=0;_s<Ve;_s++)gs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.get(w).__webglTexture,ce,at+_s),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ae.get(Q).__webglTexture,Fe,kt+_s)),F.blitFramebuffer(qe,st,Ge,Ue,He,xt,Ge,Ue,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ce!==0||w.isRenderTargetTexture||ae.has(w)){const Ft=ae.get(w),Li=ae.get(Q);y.bindFramebuffer(F.READ_FRAMEBUFFER,U),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Pt=0;Pt<Ve;Pt++)gs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,ce,at+Pt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,ce),Tt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Li.__webglTexture,Fe,kt+Pt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Li.__webglTexture,Fe),ce!==0?F.blitFramebuffer(qe,st,Ge,Ue,He,xt,Ge,Ue,F.COLOR_BUFFER_BIT,F.NEAREST):Tt?F.copyTexSubImage3D(ke,Fe,He,xt,kt+Pt,qe,st,Ge,Ue):F.copyTexSubImage2D(ke,Fe,He,xt,qe,st,Ge,Ue);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(ke,Fe,He,xt,kt,Ge,Ue,Ve,At,nn,Lt.data):Q.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,Fe,He,xt,kt,Ge,Ue,Ve,At,Lt.data):F.texSubImage3D(ke,Fe,He,xt,kt,Ge,Ue,Ve,At,nn,Lt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Fe,He,xt,Ge,Ue,At,nn,Lt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Fe,He,xt,Lt.width,Lt.height,At,Lt.data):F.texSubImage2D(F.TEXTURE_2D,Fe,He,xt,Ge,Ue,At,nn,Lt);y.pixelStorei(F.UNPACK_ROW_LENGTH,ln),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),y.pixelStorei(F.UNPACK_SKIP_PIXELS,An),y.pixelStorei(F.UNPACK_SKIP_ROWS,ti),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Pi),Fe===0&&Q.generateMipmaps&&F.generateMipmap(ke),y.unbindTexture()},this.initRenderTarget=function(w){ae.get(w).__webglFramebuffer===void 0&&he.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?he.setTextureCube(w,0):w.isData3DTexture?he.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?he.setTexture2DArray(w,0):he.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){q=0,H=0,J=null,y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Tn=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ca,AddEquation:ss,AddOperation:md,AdditiveBlending:Zl,AgXToneMapping:bc,AlphaFormat:Pc,AlwaysCompare:wd,AlwaysDepth:Oo,AlwaysStencilFunc:xd,ArcCurve:Od,ArrayCamera:Kd,BackSide:pn,BasicDepthPacking:_d,Box3:Zi,BoxGeometry:Ci,BufferAttribute:Fn,BufferGeometry:Bt,ByteType:Tc,Camera:Jc,CanvasTexture:kc,CatmullRomCurve3:Hc,CineonToneMapping:Mc,CircleGeometry:Ha,ClampToEdgeWrapping:oi,Color:ot,ColorManagement:ct,ConeGeometry:ds,ConstantAlphaFactor:dd,ConstantColorFactor:ud,Controls:jd,CubeCamera:Jd,CubeDepthTexture:Ud,CubeReflectionMapping:Xi,CubeRefractionMapping:cs,CubeTexture:Bc,CubeUVReflectionMapping:Fr,CubicBezierCurve:Wc,CubicBezierCurve3:Fd,CullFaceBack:Yl,CullFaceFront:Zh,CullFaceNone:Yh,Curve:jn,CurvePath:Bd,CustomBlending:Jh,CustomToneMapping:Sc,CylinderGeometry:Br,Data3DTexture:Ld,DataArrayTexture:Dc,DataTexture:Oc,DepthFormat:hi,DepthStencilFormat:Bi,DepthTexture:Xs,DirectionalLight:Kc,DoubleSide:Ln,DstAlphaFactor:rd,DstColorFactor:ad,EllipseCurve:Xa,EqualCompare:Sd,EqualDepth:zo,EquirectangularReflectionMapping:Ro,EquirectangularRefractionMapping:Co,Euler:Ti,EventDispatcher:Ri,ExternalTexture:Gc,ExtrudeGeometry:Js,Float32BufferAttribute:gt,FloatType:Nn,FogExp2:Ga,FrontSide:Wi,Frustum:Va,GLSL3:Kl,GreaterCompare:bd,GreaterDepth:ko,GreaterEqualCompare:za,GreaterEqualDepth:Bo,Group:ki,HalfFloatType:Qn,HemisphereLight:$d,IcosahedronGeometry:Gr,ImageUtils:Cd,InstancedBufferAttribute:jl,InstancedMesh:ec,IntType:Pa,KeepStencilOp:Lo,Layers:ka,LessCompare:Md,LessDepth:Fo,LessEqualCompare:Fa,LessEqualDepth:Gs,Light:$a,LightShadow:$c,Line:Ip,LineBasicMaterial:Fc,LineCurve:Xc,LineCurve3:zd,LineDashedMaterial:cm,LinearFilter:Qt,LinearMipmapLinearFilter:zi,LinearMipmapNearestFilter:Po,LinearSRGBColorSpace:Rr,LinearToneMapping:xc,LinearTransfer:Cr,MOUSE:yi,Material:Ji,MathUtils:vn,Matrix2:ac,Matrix3:tt,Matrix4:mt,MaxEquation:ed,Mesh:mn,MeshBasicMaterial:zr,MeshDepthMaterial:Yd,MeshDistanceMaterial:Zd,MeshStandardMaterial:Ns,MinEquation:jh,MirroredRepeatWrapping:Vo,MixOperation:pd,MultiplyBlending:Jl,MultiplyOperation:vc,NearestFilter:$t,NearestMipmapLinearFilter:fr,NearestMipmapNearestFilter:gd,NeutralToneMapping:Ec,NeverCompare:yd,NeverDepth:Uo,NoBlending:ci,NoColorSpace:_i,NoToneMapping:Zn,NormalBlending:Fs,NotEqualCompare:Ed,NotEqualDepth:Go,Object3D:zt,ObjectSpaceNormalMap:vd,OneFactor:nd,OneMinusConstantAlphaFactor:fd,OneMinusConstantColorFactor:hd,OneMinusDstAlphaFactor:od,OneMinusDstColorFactor:ld,OneMinusSrcAlphaFactor:_c,OneMinusSrcColorFactor:sd,OrthographicCamera:Vr,PCFShadowMap:Os,PCFSoftShadowMap:$h,PMREMGenerator:lc,Path:nc,PerspectiveCamera:En,Plane:ri,PlaneGeometry:fs,PointLight:Ja,Points:Nd,PointsMaterial:zc,PolyhedronGeometry:Wa,QuadraticBezierCurve:qc,QuadraticBezierCurve3:Yc,Quaternion:wi,R11_EAC_Format:Jo,RED_GREEN_RGTC2_Format:Ar,RED_RGTC1_Format:ga,REVISION:Ra,RG11_EAC_Format:Tr,RGBAFormat:Un,RGBAIntegerFormat:Oa,RGBA_ASTC_10x10_Format:ua,RGBA_ASTC_10x5_Format:aa,RGBA_ASTC_10x6_Format:la,RGBA_ASTC_10x8_Format:ca,RGBA_ASTC_12x10_Format:ha,RGBA_ASTC_12x12_Format:da,RGBA_ASTC_4x4_Format:jo,RGBA_ASTC_5x4_Format:ea,RGBA_ASTC_5x5_Format:ta,RGBA_ASTC_6x5_Format:na,RGBA_ASTC_6x6_Format:ia,RGBA_ASTC_8x5_Format:sa,RGBA_ASTC_8x6_Format:ra,RGBA_ASTC_8x8_Format:oa,RGBA_BPTC_Format:fa,RGBA_ETC2_EAC_Format:$o,RGBA_PVRTC_2BPPV1_Format:qo,RGBA_PVRTC_4BPPV1_Format:Xo,RGBA_S3TC_DXT1_Format:vr,RGBA_S3TC_DXT3_Format:xr,RGBA_S3TC_DXT5_Format:yr,RGBFormat:Lc,RGB_BPTC_SIGNED_Format:pa,RGB_BPTC_UNSIGNED_Format:ma,RGB_ETC1_Format:Yo,RGB_ETC2_Format:Zo,RGB_PVRTC_2BPPV1_Format:Wo,RGB_PVRTC_4BPPV1_Format:Ho,RGB_S3TC_DXT1_Format:_r,RGFormat:qi,RGIntegerFormat:Ua,RawShaderMaterial:qd,Ray:$s,Raycaster:Qd,RedFormat:Da,RedIntegerFormat:Na,ReinhardToneMapping:yc,RenderTarget:Pd,RepeatWrapping:wr,ReverseSubtractEquation:Qh,SIGNED_R11_EAC_Format:Ko,SIGNED_RED_GREEN_RGTC2_Format:va,SIGNED_RED_RGTC1_Format:_a,SIGNED_RG11_EAC_Format:Qo,SRGBColorSpace:on,SRGBTransfer:yt,Scene:Dd,ShaderChunk:it,ShaderLib:qn,ShaderMaterial:Bn,Shape:kr,ShapeUtils:os,ShortType:Ac,Sphere:$i,SphereGeometry:qa,Spherical:oc,SplineCurve:Zc,SrcAlphaFactor:gc,SrcAlphaSaturateFactor:cd,SrcColorFactor:id,StaticDrawUsage:Td,SubtractEquation:Kh,SubtractiveBlending:$l,TOUCH:vi,TangentSpaceNormalMap:xa,Texture:en,TextureSource:Ba,TorusGeometry:Ya,Triangle:In,TubeGeometry:Za,UVMapping:wc,Uint16BufferAttribute:Nc,Uint32BufferAttribute:Uc,UniformsLib:De,UniformsUtils:Xd,UnsignedByteType:xn,UnsignedInt101111Type:Cc,UnsignedInt248Type:Hs,UnsignedInt5999Type:Rc,UnsignedIntType:Kn,UnsignedShort4444Type:La,UnsignedShort5551Type:Ia,UnsignedShortType:Vs,VSMShadowMap:Ds,Vector2:be,Vector3:N,Vector4:Dt,WebGLCoordinateSystem:Yn,WebGLCubeRenderTarget:Qc,WebGLRenderTarget:On,WebGLRenderer:cf,WebGLUtils:af,WebGPUCoordinateSystem:Ws,WebXRController:Io,ZeroFactor:td,createCanvasElement:Ad,error:ht,log:Ql,warn:je,warnOnce:as},Symbol.toStringTag,{value:"Module"})),Fh={type:"change"},jc={type:"start"},uf={type:"end"},To=new $s,zh=new ri,lx=Math.cos(70*vn.DEG2RAD),Ht=new N,_n=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kl=1e-6;class cx extends jd{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new wi,this._lastTargetPosition=new N,this._quat=new wi().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oc,this._sphericalDelta=new oc,this._scale=1,this._panOffset=new N,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new N,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hx.bind(this),this._onPointerDown=ux.bind(this),this._onPointerUp=dx.bind(this),this._onContextMenu=xx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=gx.bind(this),this._onTouchStart=_x.bind(this),this._onTouchMove=vx.bind(this),this._onMouseDown=fx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=yx.bind(this),this._interceptControlUp=Mx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fh),this.update(),this.state=bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<lx?this.object.lookAt(this.target):(zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(zh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kl||this._lastTargetPosition.distanceToSquared(this.target)>kl?(this.dispatchEvent(Fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ux(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uf),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=bt.DOLLY;break;case yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}break;case yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(jc)}function px(n){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mx(n){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(n.preventDefault(),this.dispatchEvent(jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(uf))}function gx(n){this.enabled!==!1&&this._handleKeyDown(n)}function _x(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=bt.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=bt.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(jc)}function vx(n){switch(this._trackPointer(n),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=bt.NONE}}function xx(n){this.enabled!==!1&&n.preventDefault()}function yx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ur=new N;function Cn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ur.copy(e),ur[i]=0,ur.normalize();const c=.5*o/(o+a),u=1-ur.angleTo(n)/l;return Math.sign(ur[t])===1?u*c:a/(o+a)+c+c*(1-u)}class eu extends Ci{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new N,c=new N,u=new N(e,t,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=p.length/6,v=new N,m=.5/o;for(let f=0,M=0;f<p.length;f+=3,M+=2)switch(l.fromArray(p,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),p[f+0]=u.x*Math.sign(l.x)+c.x*r,p[f+1]=u.y*Math.sign(l.y)+c.y*r,p[f+2]=u.z*Math.sign(l.z)+c.z*r,h[f+0]=c.x,h[f+1]=c.y,h[f+2]=c.z,Math.floor(f/g)){case 0:v.set(1,0,0),d[M+0]=Cn(v,c,"z","y",r,i),d[M+1]=1-Cn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[M+0]=1-Cn(v,c,"z","y",r,i),d[M+1]=1-Cn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[M+0]=1-Cn(v,c,"x","z",r,e),d[M+1]=Cn(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),d[M+0]=1-Cn(v,c,"x","z",r,e),d[M+1]=1-Cn(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),d[M+0]=1-Cn(v,c,"x","y",r,e),d[M+1]=1-Cn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[M+0]=Cn(v,c,"x","y",r,e),d[M+1]=1-Cn(v,c,"y","x",r,t);break}}static fromJSON(e){return new eu(e.width,e.height,e.depth,e.segments,e.radius)}}function Sx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Bt;let c=0;for(let u=0;u<n.length;++u){const p=n[u];let h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in p.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(p.morphAttributes[d])}if(e){let d;if(t)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const p=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)p.push(d.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(p)}for(const u in r){const p=Bh(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<p;++h){const d=[];for(let v=0;v<o[u].length;++v)d.push(o[u][v][h]);const g=Bh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Bh(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Fn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const p=l/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){const v=u.getComponent(h,g);a.setComponent(h+p,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function bx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:l,sphere:c,cyl:u,torus:p,rod:h,sign:d,paperBoat:g,batchStatic:v,persist:m,say:f,refresh:M,chime:E,reduced:x}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],R=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,_),p([-.7,.51,-.83],.31,.035,s.copper,_),u([-.7,.49,-.83],.26,.045,s.dark,_);const A=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],A),p([0,0,0],.36,.015,s.copper,A,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,_),p([.66,.56,-.22],.28,.028,s.copper,_),u([.66,.55,-.22],.24,.03,r("#495441"),_);const T=o([.66,.56,-.22],_);h([0,0,0],[0,.83,0],.026,s.copper,T);for(const[C,P,k]of[[-.17,.23,-.5],[.17,.41,.5]]){const L=c([C,P,0],[.24,.035,.085],s.mint,T);L.rotation.z=k}const D=o([0,.95,0],T);c([0,0,0],.115,s.light,D),p([0,0,0],.28,.021,s.cream,D,[0,0,0]),p([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const G=[];for(let C=0;C<4;C++){const P=C*Math.PI/2,k=o([Math.cos(P)*.3,.13+Math.sin(P)*.12,Math.sin(P)*.3],T);h([0,-.15,0],[0,.2,0],.012,s.copper,k),c([0,.23,0],.065,s.cream,k),v(k,[]),G.push(k)}l([-.46,.2,.32],[.68,.12,.47],s.dark,_);const W=o([-.46,.29,.32],_);l([0,0,0],[.5,.025,.32],s.cream,W);for(const C of[-.23,.23])h([C,.016,-.14],[0,.016,.06],.009,s.copper,W);c([0,.027,.06],[.04,.015,.04],s.rust,W),d("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),v(A,[]),v(D,[]),v(T,[D,...G]),v(W,[]),v(_,[A,T,W]);const U=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);U.castShadow=!1;const V=o([0,0,0],e),q=g(V,[8.3,.14,3.5],1.05),H=o([0,.36,0],q),J=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],H),X=c([0,.12,0],[.085,.13,.085],s.light,H),Z=l([0,.09,0],[.23,.025,.16],s.cream,H);Z.rotation.z=.2;const $=[J,X,Z];v(q,[H]);const re=new n.Vector3(8.3,.14,3.5),fe=new n.Vector3(8.45,.14,3.65),ve=new n.Vector3(9.2,-2.7,6.5);let Ee=-1,te=i.dockTrips>=2?1:.02;function B(){A.visible=i.dockTrips>=1,T.visible=i.dockTrips>=2,W.visible=i.dockTrips>=3,G.forEach((C,P)=>C.visible=i.dockTrips>=5+P*3),H.visible=i.dockPending,$.forEach((C,P)=>C.visible=P===i.dockTrips%3),q.position.copy(i.dockPending?fe:re)}B();function ee(){if(!(i.boat>0))if(i.dockPending){const C=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(te=.02),m(),B(),f(C.line),E(330),M()}else i.boat=18,Ee=-1,$.forEach((C,P)=>C.visible=P===i.dockTrips%3),H.visible=!1,f("ну плыви. я тут."),M()}function ue(C,P){if(i.boat>0){i.boat=Math.max(0,i.boat-C);const k=18-i.boat,L=k<7?0:k<11?1:2;L!==Ee&&(Ee=L,M()),k<2?q.position.lerpVectors(re,fe,n.MathUtils.smoothstep(k,0,2)):k<7?q.position.lerpVectors(fe,ve,n.MathUtils.smoothstep(k,2,7)):k<11?q.position.copy(ve):k<16?q.position.lerpVectors(ve,fe,n.MathUtils.smoothstep(k,11,16)):q.position.copy(fe),q.visible=k<7||k>=11,H.visible=k>=11,q.rotation.y=k>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),q.visible=!0,B(),f("вернулся. с чем-то."),E(554),M())}q.rotation.z=x?0:Math.sin(P*1.7)*.035,i.boat===0&&(q.visible=!0,q.position.y=(i.dockPending?fe.y:re.y)+Math.sin(P*1.2)*.02,q.rotation.y=i.dockPending?Math.PI+.2:0),A.position.y=.97+Math.sin(P*.9)*.055,A.rotation.y=P*.15,te=n.MathUtils.damp(te,1,1.1,C),T.scale.setScalar(te),D.rotation.y=x?0:P*.23,U.material.emissiveIntensity=i.dockPending?1.5+Math.sin(P*4)*1.1:1.2}function oe(){if(i.boat>0){const C=18-i.boat;return{disabled:!0,action:C<7?"плывёт…":C<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const C=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:C===2?`${b[C].description} ${R[Math.floor((i.dockTrips-1)/3)%R.length]}`:b[C].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:V,gallery:_,beacon:U,launchOrCollect:ee,update:ue,card:oe,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:q.position.toArray(),visible:q.visible,cargo:H.visible,stone:A.visible,plant:T.visible,plantScale:te,letter:W.visible,buds:G.filter(C=>C.visible).length})}}async function hf(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function Ex({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),l="beznogim-public-notes-v1";let c="all",u=!s.matches,p=!1,h=!1,d=!1,g=!1,v=!1,m=0,f=null,M=0,E=0,x=0,S=!1;try{const O=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");O!==null&&(u=O==="open")}catch{}const b=(O,se,xe)=>{const Me=document.createElement(O);return se&&(Me.className=se),xe&&(Me.textContent=xe),Me},R=b("aside","resident-history");R.id="resident-history",R.setAttribute("aria-label","История мыслей и действий Головы");const _=b("div","history-heading"),A=b("div"),T=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),D=b("h3","","на полях"),G=b("span","history-eyes");G.setAttribute("aria-hidden","true"),D.append(G),A.append(T,D,b("p","history-subtitle","мысли, дела и прочее"));const W=b("button","history-close","−");W.type="button",W.setAttribute("aria-label","Свернуть историю"),W.title="Свернуть историю",_.append(A,W);const U=b("div","history-filters");U.setAttribute("role","group"),U.setAttribute("aria-label","Показывать в истории");const V=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[O,se]of V){const xe=b("button","",se);xe.type="button",xe.dataset.filter=O,xe.setAttribute("aria-pressed",String(c===O)),xe.onclick=()=>{c=O,P(!1),H.scrollTop=0;for(const Me of U.children)Me.setAttribute("aria-pressed",String(Me.dataset.filter===c))},U.append(xe)}const q=b("button","history-new");q.type="button",q.hidden=!0;const H=b("div","history-scroll");H.tabIndex=0,H.setAttribute("aria-label","Записи, от новых к старым");const J=b("ol","history-list"),X=b("p","history-empty","собираю заметки…");H.append(J,X);const Z=b("div","history-foot"),$=b("span","history-live","подключаюсь…"),re=b("span","history-count"),fe=b("button","history-retry","повторить подключение");fe.type="button",fe.hidden=!0,fe.onclick=()=>{z(),window.dispatchEvent(new Event("beznogim:retry"))},Z.append($,re,fe),R.append(_,U,q,H,Z);const ve=b("button","history-toggle");ve.type="button",ve.setAttribute("aria-controls",R.id);const Ee=b("span","","на полях"),te=b("span","history-badge");te.hidden=!0,ve.append(b("span","history-toggle-icon","◌"),Ee,te),document.body.append(R),document.querySelector(".footer-actions").append(ve);function B(O,se=!0){if(u=O,R.hidden=!u,ve.hidden=u,ve.setAttribute("aria-expanded",String(u)),se)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(H.scrollTop<30?ee():ue(),W.focus({preventScroll:!0})):se&&ve.focus({preventScroll:!0})}R.hidden=!u,ve.hidden=u,ve.setAttribute("aria-expanded",String(u)),ve.onclick=()=>{B(!0),(g||!h)&&z()},W.onclick=()=>B(!1),s.addEventListener("change",()=>{let O=!s.matches;try{const se=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");se!==null&&(O=se==="open")}catch{}B(O,!1)}),document.addEventListener("keydown",O=>{O.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&B(!1)});function ee(){m=0,te.hidden=!0,q.hidden=!0}function ue(){te.textContent=String(m),te.hidden=!m,q.textContent=`↑ к новым · ${m}`,q.hidden=!(u&&m)}q.onclick=()=>{H.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),ee()},H.addEventListener("scroll",()=>{H.scrollTop<30&&ee()},{passive:!0});function oe(O){return c==="all"||(c==="thoughts"?O.type==="muse"||O.type==="say":O.type!=="muse"&&O.type!=="say")}function C(O,se){const xe=O.type==="muse"||O.type==="say",Me=b("li",`history-entry ${xe?"history-thought":"history-action"}${se?" is-new":""}`);Me.dataset.eventId=String(O.id),Me.dataset.type=O.type;const F=b("div","history-meta"),ze=b("time","",r.format(O.time*1e3));ze.dateTime=new Date(O.time*1e3).toISOString(),ze.title=o.format(O.time*1e3)+" · "+ze.textContent+" мск";const Te={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return F.append(b("span","",Te[O.type]||"во дворе"),ze),Me.append(F,b("p","",O.text)),Me}function P(O,se=new Set){const xe=H.scrollTop>30,Me=H.getBoundingClientRect().top,F=xe?[...J.querySelectorAll("[data-event-id]")].find(he=>he.getBoundingClientRect().bottom>Me):null,ze=F==null?void 0:F.dataset.eventId,Te=F==null?void 0:F.getBoundingClientRect().top,I=H.scrollTop,y=document.createDocumentFragment();let ne="";const ae=[...i.values()].sort((he,Se)=>Se.id-he.id).filter(oe);for(const he of ae){const Se=o.format(he.time*1e3);if(Se!==ne){const Re=b("li","history-day",Se);y.append(Re),ne=Se}y.append(C(he,O&&se.has(he.id)&&!xe))}if(J.replaceChildren(y),X.hidden=ae.length>0,X.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ae.length&&(X.textContent="в этом фильтре пока нет записей."),re.textContent=i.size?v?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",fe.hidden=!(g||!h&&!d),fe.disabled=d,ze){const he=J.querySelector(`[data-event-id="${ze}"]`);H.scrollTop=I+(he?he.getBoundingClientRect().top-Te:0)}else xe||(H.scrollTop=0)}function k(O,se=!1){if(!O||!Array.isArray(O.entries))return!1;const xe=Math.max(0,...i.keys()),Me=new Set;let F=0,ze=0;for(const Te of O.entries)!Te||typeof Te!="object"||!Number.isSafeInteger(Te.id)||Te.id<1||!Number.isFinite(Te.time)||Math.abs(Te.time)>864e10||!a.has(Te.type)||typeof Te.text!="string"||!Te.text.trim()||(ze++,i.has(Te.id)||(S=!0,i.set(Te.id,{id:Te.id,time:Te.time,type:Te.type,text:Te.text.slice(0,280)}),Me.add(Te.id),Te.id>xe&&oe(Te)&&F++));if(O.entries.length&&!ze)return!1;if(v=v||!!O.has_older||!!O.has_more||i.size>t,i.size>t){const Te=[...i.keys()].sort((I,y)=>I-y);for(const I of Te.slice(0,i.size-t))i.delete(I)}return p&&!se&&F&&(!u||H.scrollTop>30)&&(m+=F,ue()),(Me.size||!p)&&P(p&&!se,Me),!0}function L(){if(!(!i.size||!S)){S=!1,E=Date.now();try{localStorage.setItem(l,JSON.stringify({version:1,saved_at:E,has_older:v,entries:[...i.values()]}))}catch{}}}function K(){try{const O=localStorage.getItem(l);if(!O||O.length>1e6)return;const se=JSON.parse(O);if(se.version!==1||!Number.isFinite(se.saved_at)||se.saved_at<=0)return;k(se,!0),E=se.saved_at,p=i.size>0,S=!1}catch{}}async function z(){if(!d){d=!0,x=performance.now(),fe.disabled=!0;try{const O=await hf(n+"/api/history");if(!k(O,!0))throw Error("invalid-public-history");h=!0,p=!0,g=!1,L(),P(!1)}catch{g=!0,P(!1)}finally{d=!1,fe.disabled=!1,Y()}}}function Y(){var xe;const O=!f||performance.now()-M>35e3||f.server_time-f.heartbeat>60||f.resident_status==="stopped";R.classList.toggle("history-offline",O);const se=E?` · сохранено ${r.format(E)} мск`:" · записи на устройстве";$.textContent=O?i.size?"связи нет":"нет связи с живым сервером":f.resident_status==="sleeping"?"голова спит · дневник открыт":f.resident_status==="paused"?"голова отдыхает":"жизнь идёт",O&&i.size&&($.textContent+=se),!O&&g&&($.textContent+=" · архив не дошёл"),$.title=((xe=f==null?void 0:f.action)==null?void 0:xe.label)||""}function ie(O){var ze;const se=Math.max(0,...i.keys()),xe=Array.isArray((ze=O.history)==null?void 0:ze.entries)?O.history.entries:[];f=O,M=performance.now(),k(O.history)&&i.size&&(p=!0,L()),Y();const Me=xe.filter(Te=>Te&&Number.isSafeInteger(Te.id)).map(Te=>Te.id);(se&&Me.length&&Math.min(...Me)>se&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&z()}window.addEventListener("beznogim:state",O=>ie(O.detail)),window.__beznogimState&&ie(window.__beznogimState),K(),P(!1),Y(),z(),window.addEventListener("online",()=>{(g||!h)&&z()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&z()}),setInterval(()=>{Y(),(g||!h)&&z()},15e3)}function wx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:l}){let c=null,u=0,p=0,h=!1,d=!1,g=!1,v=0,m=null,f=null,M=null,E="",x=!0;const S=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const R=document.createElement("span");R.className="thought-kicker",R.textContent="про себя";const _=document.createElement("p");b.append(R,_),document.body.append(b);const A=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),T=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";Ex({api:T,enabled:A});const D=document.querySelector(".territory-nav"),G=document.createElement("div");G.className="resident-strip",G.hidden=!0;const W=document.createElement("span");W.className="resident-status",W.textContent="подключаюсь к голове";const U=document.createElement("div");U.className="resident-vitals",U.hidden=!0,U.setAttribute("aria-label","Самочувствие Головы");const q=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(C=>{const P=document.createElement("div");return P.className="need-meter",P.dataset.need=C.key,P.style.setProperty("--need-color",C.color),P.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${C.icon}</svg><div class="need-detail"><div class="need-heading"><b>${C.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${C.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,U.append(P),{key:C.key,card:P,value:P.querySelector(".need-value"),bar:P.querySelector(".need-track")}}),H=document.createElement("button");H.type="button",H.textContent="к голове",H.onclick=()=>{d=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),ve()};const J=document.createElement("button");J.type="button",J.textContent="поиграть самому",J.onclick=()=>{d=!d,g=!1,ve()};const X=document.createElement("button");X.type="button",X.textContent="мысли",X.setAttribute("aria-pressed","true"),X.onclick=()=>{x=!x,X.setAttribute("aria-pressed",String(x))},G.append(W,U,H,J,X),D.append(G);function Z(){return Date.now()/1e3+p}function $(){return c&&Z()-c.heartbeat<60&&c.resident_status!=="stopped"}function re(){return h&&c&&!d}function fe(){var k,L;const C=(L=(k=c==null?void 0:c.mechanics)==null?void 0:k.vitals)==null?void 0:L.public;if(!C){U.hidden=!0;return}const P=K=>Math.max(0,Math.min(100,Math.round(Number(K)||0)));U.hidden=!1;for(const K of q){const z=P(C[K.key]);K.value.textContent=String(z),K.bar.setAttribute("aria-valuenow",String(z)),K.card.style.setProperty("--need-fill",String(z/100)),K.card.dataset.low=String(z<=20)}}function ve(){const C=d?"ты в песочнице":h?$()?c!=null&&c.action&&c.action.ends>Z()?c.action.label:(c==null?void 0:c.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";C!==E&&(E=C,W.textContent=C),J.textContent=d?"вернуться к голове":"поиграть самому",H.setAttribute("aria-pressed",String(g))}function Ee(C){var k,L;if(!C||C.version!==1||!Array.isArray(C.position)||C.position.length!==3||!C.position.every(Number.isFinite)||!C.objects||!Number.isFinite(C.server_time)||!Number.isFinite(C.heartbeat)||c&&(C.server_time<c.server_time||C.server_time===c.server_time&&Number.isFinite(C.revision)&&Number.isFinite(c.revision)&&C.revision<c.revision))return;if(p=C.server_time-Date.now()/1e3,c=C,u=performance.now(),h=!0,G.hidden=!1,m&&((k=C.release)!=null&&k.commit)&&m!==C.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((L=C.release)==null?void 0:L.commit)||m;const P=C.speech;P&&P.time>v&&P.until>Z()&&(v=P.time,d||a(P.text)),window.__beznogimState=C,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:C})),fe(),ve()}function te(){const C=c.action;if((C==null?void 0:C.kind)==="move"){const P=Math.max(0,Math.min(1,(Z()-C.started)/Math.max(.001,C.ends-C.started)));return C.from.map((k,L)=>k+(C.to[L]-k)*P)}return c.position}function B(){if(!re())return;const C=c.objects;C.engine&&(t.running=!!C.engine.running),C.workshop&&(t.roof=C.workshop.roof_open?1:0),C.radio&&(t.radio=C.radio.station,f!==t.radio&&(f=t.radio,o())),C.garden&&(t.harvest=C.garden.harvest,M!==null&&t.harvest>M&&l(),M=t.harvest);const P=c.action;t.brew=(P==null?void 0:P.effect)==="brew"?Math.max(0,P.ends-Z()):0,t.loop=0,ve()}function ee(){if(!re()){b.hidden=!0;return}const C=te();n.position.set(C[0],C[1]+Math.sin(Z()*1.4)*.1,C[2]),e.set(...C),g&&i.target.lerp(n.position,.08);const P=c.musing;if(x&&$()&&(P!=null&&P.text)&&P.until>Z()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==P.text&&(_.textContent=P.text),S.copy(n.position),S.y+=1.8,S.project(s),S.z>=-1&&S.z<=1&&Math.abs(S.x)<1&&Math.abs(S.y)<1){b.hidden=!1;const k=b.offsetWidth,L=b.offsetHeight,K=Math.max(k/2+12,Math.min(innerWidth-k/2-12,(S.x+1)*innerWidth/2));let z=(1-S.y)*innerHeight/2-18;const Y=D.getBoundingClientRect(),ie=K-k/2<Y.right&&K+k/2>Y.left?Y.bottom+12:18,O=z-L<ie;O&&(z=Math.max(ie+L,(1-S.y)*innerHeight/2+70+L)),z=Math.min(innerHeight-70,Math.max(L+18,z)),b.classList.toggle("below-head",O),b.style.transform=`translate3d(${Math.round(K)}px,${Math.round(z)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function ue(){re()&&(d=!0,g=!1,ve())}function oe(){if(!A)return;G.hidden=!1;let C=!1;async function P(){if(!C){C=!0;try{const L=await hf(T+"/api/state");Ee(L),c&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!c||performance.now()-u>35e3)&&(h=!1),ve()}finally{C=!1}}}try{const L=new EventSource(T+"/api/events");L.addEventListener("state",K=>{try{Ee(JSON.parse(K.data))}catch{}}),L.onerror=()=>{h=!1,ve()}}catch{h=!1,ve()}P();function k(){(!h||!c||performance.now()-u>3e4)&&P()}window.addEventListener("online",k),window.addEventListener("beznogim:retry",P),document.addEventListener("visibilitychange",()=>{document.hidden||k()}),setInterval(()=>{c&&performance.now()-u>35e3&&(h=!1),ve(),k()},15e3)}return i.addEventListener("start",()=>{g=!1,ve()}),oe(),{sync:B,place:ee,localPlay:ue,unfollow:()=>{g=!1},watching:re,inspect:()=>{var C;return{connected:h,sandbox:d,follow:g,alive:!!$(),revision:c==null?void 0:c.revision,release:(C=c==null?void 0:c.release)==null?void 0:C.commit,action:c==null?void 0:c.action,musing:c==null?void 0:c.musing,thoughtVisible:!b.hidden,position:c?te():null}}}}const Tx=120,Ax=24,Rx=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Xn={size:Tx,sectorSize:Ax,sectors:Rx};function Cx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const l=new ki;l.name="unsettled-territory",n.add(l);const c=Xn.size/2,u=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],p=new kr;u.forEach(([T,D],G)=>G?p.lineTo(T,-D):p.moveTo(T,-D)),p.closePath();const h=new Js(p,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const d=new mn(h,new Ns({color:"#233e35",roughness:1}));d.receiveShadow=!0,l.add(d);let g=8409;const v=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new ec(new Gr(1,0),new Ns({color:"#8a9980",roughness:1}),150),f=new ec(new ds(1,1,4),new Ns({color:"#9aa880",roughness:1}),850),M=new zt;for(const[T,D,G]of[[m,150,!0],[f,850,!1]]){for(let W=0;W<D;W++){let U,V;do U=(v()-.5)*(Xn.size-10),V=(v()-.5)*(Xn.size-10);while(Math.abs(U)<11&&Math.abs(V)<9);const q=G?.15+v()*.48:.12+v()*.42;M.position.set(U,-1.7+q*.25,V),M.rotation.set(0,v()*6.28,G?v()*.25:0),M.scale.set(G?q*1.3:.07,q,G?q:.07),M.updateMatrix(),T.setMatrixAt(W,M.matrix)}T.instanceMatrix.needsUpdate=!0,l.add(T)}const E=new Ns({color:"#c1b692",roughness:1});for(let T=0;T<16;T++){const D=new mn(new Ci(1.15,.12,.65),E);D.position.set(-.6,-.06-T*.105,5.8+T*.7),D.receiveShadow=!0,l.add(D)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const S=document.createElement("dialog");S.id="territory-dialog",S.setAttribute("aria-labelledby","territory-title"),S.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(S);const b=S.querySelector("#territory-grid");for(const T of Xn.sectors){const D=document.createElement("button");D.type="button",D.dataset.sector=T.id,D.className=T.status==="settled"?"settled":"",D.textContent=T.status==="settled"?`● ${T.id==="0:0"?"двор":T.name}`:`· ${T.id}`,D.setAttribute("aria-label",`${T.name}, ${T.id}`),D.onclick=()=>{S.close(),s(T.x,T.z,T.status==="settled")},b.append(D)}document.querySelector("#territory-map").onclick=()=>S.showModal(),document.querySelector("#world-overview").onclick=r,S.querySelector("#territory-close").onclick=()=>S.close(),S.querySelector("#territory-home").onclick=()=>{S.close(),o()};const R=x.querySelector("#territory-location");let _="";function A(){const T=a()||t.target,D=Math.round(T.x/Xn.sectorSize),G=Math.round(T.z/Xn.sectorSize),W=`${D}:${G}`;if(W!==_){_=W;const U=Xn.sectors.find(V=>V.id===W);R.textContent=`${(U==null?void 0:U.status)==="settled"?U.name:"свободная земля"} · ${W}`;for(const V of b.children)V.classList.toggle("current",V.dataset.sector===W)}}return{half:c,update:A,inspect:()=>({size:Xn.size,sectorSize:Xn.sectorSize,sectors:Xn.sectors.length,settled:Xn.sectors.filter(T=>T.status==="settled").length,visible:n.visible,sector:_})}}function Px({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:p,sign:h,paperBoat:d,batchStatic:g,changed:v,chime:m}){let f={};try{f=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(f.wins)||0))),trace:f.trace===!0},E=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const S=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,S),a([0,.46,0],[1.22,.08,1.3],s.dark,S);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const O of[-.62,.62])for(const se of[-.64,.64])u([O,.46,se],[O,1.45,se],.024,s.copper,S);for(const O of[-.62,.62])a([O,.96,0],[.018,.95,1.28],b,S);a([0,.96,-.64],[1.24,.95,.018],b,S);const R=o([0,1.45,-.64],S);for(const O of[-.62,.62])u([O,0,0],[O,.36,.64],.026,s.copper,R);for(const O of[-.62,.62])u([O,.36,.64],[O,0,1.28],.026,s.copper,R);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,R);const _=a([0,.18,.32],[1.26,.025,.72],b,R);_.rotation.x=-.51;const A=a([0,.18,.96],[1.26,.025,.72],b,R);A.rotation.x=.51;const T=o([0,.52,0],S);c([0,.2,0],.026,.4,s.leaf,T);for(const O of[-1,1]){const se=l([O*.15,.27,0],[.22,.055,.09],s.leaf,T);se.rotation.z=O*.35}const D=l([0,.25,.12],[.23,.16,.27],s.copper,T),G=l([.42,.58,.46],[.15,.1,.18],s.copper,S);G.visible=M.wins>0;const W=o([-.76,.7,.69],S);a([0,.28,0],[.13,.66,.06],s.cream,W);const U=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),W);l([0,-.06,.04],.065,s.rust,W),h("ПАРНИК",[0,.3,.716],.93,.22,S,{size:49});const V=p([0,2.05,0],.46,.016,s.mint,S);V.visible=M.trace;const q=[];for(let O=0;O<6;O++)q.push(l([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),S));g(S,[R,T,W,V,G,...q]),g(R,[]),g(T,[D]),g(W,[U]);let H=0,J=0;function X(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),H=0,v()}function Z(O){if(M.mode!=="playing")return;const se={heat:2,wait:0,vent:-2};O in se&&(M.temp+=E[M.turn]+se[O],M.turn++,M.temp>6?(M.mode="hot",H=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),G.visible=!0,x(),m(660)),v())}function $(){let O="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(O=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${E[M.turn]>0?"+":""}${E[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(O=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(O=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(O="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:O,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const re=o([0,0,0],t);re.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,re),a([0,-.42,0],[6.8,.08,5.6],s.dark,re);for(const O of[-3.2,3.2])for(const se of[-2.6,2.6])u([O,-.4,se],[O,4,se],.055,s.copper,re);for(const O of[-3.2,3.2])u([O,4,-2.6],[O,5.7,0],.055,s.copper,re),u([O,5.7,0],[O,4,2.6],.055,s.copper,re);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,re),a([-3.2,1.8,0],[.025,4.4,5.2],b,re),a([0,1.8,-2.6],[6.4,4.4,.025],b,re),h("СОН / 01",[0,-.12,2.93],2.2,.38,re,{size:52});const fe=o([0,1.6,0],re);l([0,0,0],1.16,r("#5f9c85"),fe);for(let O=0;O<10;O++){let se=O*2.4;const xe=l([Math.sin(se)*.95,Math.cos(O*1.2)*.6,Math.cos(se)*.95],[.35,.2,.3],s.leaf,fe);xe.rotation.y=se}p([0,0,0],1.32,.028,s.copper,fe,[.4,0,.2]);const ve=o([0,1.6,0],re),Ee=[];for(let O=0;O<28;O++){const se=a([0,0,0],[.53,.11,.32],O%4?s.cream:s.concrete,ve);Ee.push(se)}const te=d(re,[1.7,-.05,1],1.65),B=l([0,.65,0],.13,s.cream,te),ee=o([0,.65,0],te);ee.visible=!1;for(let O=0;O<8;O++){let se=O/8*Math.PI*2;u([Math.sin(se)*.27,Math.cos(se)*.27,0],[Math.sin(se)*.5,Math.cos(se)*.5,0],.026,s.light,ee)}const ue=i.clone(!0);re.add(ue),ue.scale.setScalar(.72),ue.position.set(-2,1,1.3),ue.rotation.z=-.25;const oe=o([-2,-.05,1.3],re);c([0,0,0],.55,.3,s.cream,oe),p([.58,0,0],.25,.04,s.copper,oe,[0,0,0]);const C=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,re);C.rotation.y=.2;let P=0,k=0,L=!1;g(re,[fe,ve,te,ue]),g(fe,[]);function K(){L=!0,P=0,k=0,re.visible=!0,e.visible=!1,v()}function z(){L=!1,re.visible=!1,e.visible=!0,v()}function Y(){L&&(P===3?(P=0,k=0):(P++,m(220+P*110),P===3&&(M.trace=!0,V.visible=!0,x())),v())}function ie(O,se){J=n.MathUtils.damp(J,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,O),R.rotation.x=J,T.scale.y=n.MathUtils.damp(T.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,O),D.visible=M.mode==="won",U.scale.y=.3*Math.max(.05,M.temp/8),U.position.y=-.015+M.temp/8*.15,V.rotation.z=Math.sin(se*.3)*.15,H=Math.max(0,H-O),q.forEach((xe,Me)=>{xe.visible=H>0;const F=(3-H+Me*.18)%1.5;xe.position.set(Math.sin(Me*2)*F*.35,1.5+F,Math.cos(Me*2)*F*.35),xe.scale.setScalar(.1*(.4+F))}),L&&(k=n.MathUtils.damp(k,P,2,O),fe.rotation.y=se*.08,Ee.forEach((xe,Me)=>{const F=Me/28*Math.PI*2+se*.055*Math.min(1,k),ze=Math.min(1,k);xe.position.set(Math.sin(F)*(1.8+ze*.35),Math.cos(F)*(1.8-ze*1.5),Math.cos(F)*ze*1.5),xe.rotation.set(0,-F*ze,Math.PI/2-F*(1-ze))}),ve.rotation.y=k*.32,te.position.y=-.05+k*1.12,te.position.x=1.7-k*.32,te.rotation.y=.2+k*.35,B.scale.setScalar(.13*(1+Math.max(0,k-2)*2)),ee.visible=k>2.2,ee.rotation.z=se*.22,ue.position.y=1+Math.sin(se*.8)*.06)}return{house:S,start:X,step:Z,card:$,update:ie,enter:K,exit:z,breathe:Y,inspect:()=>({...M,weather:[...E],dream:L,dreamStep:P,phase:k,lidAngle:J,rootVisible:e.visible,dreamVisible:re.visible,boatY:te.position.y,rays:ee.visible})}}function Lx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:d,batchStatic:g,chime:v}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const f=r("#c39860"),M=r("#e0c58b"),E=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),S=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),f,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let te=0;te<13;te++){const B=.15+te/12*Math.PI*1.42,ee=Math.sin(B)*3.65,ue=Math.cos(B)*3.65,oe=l([ee,.48,ue],[.75,1.08,.19],M,m);oe.rotation.y=B,te%3===0&&h([ee,.48,ue],.15,.048,E,m,[Math.PI/2,0,0]).rotation.set(0,B,0)}d("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const b=a([1.08,.12,.4],m);l([0,0,0],[2.55,.22,1.55],E,b);for(let te of[-1.15,1.15])for(let B of[-.63,.63])l([te,-.23,B],[.12,.5,.12],s.copper,b);for(let te of[-.79,.79])l([0,.36,te],[2.72,.65,.14],S,b);for(let te of[-1.32,1.32])l([te,.38,0],[.14,.68,1.55],S,b);const R=l([0,.18,0],[2.49,.045,1.49],x,b),_=c([-.84,.38,0],[.34,.14,.54],s.cream,b),A=i.clone(!0);m.add(A),A.scale.setScalar(.54),A.position.set(.3,.83,.45),A.rotation.z=-.35;const T=a([0,0,0],A);for(const te of[-.23,.23])c([te,.2,.611],[.15,.11,.025],s.black,T),l([te,.2,.64],[.2,.018,.012],s.copper,T);const D=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,D),u([0,.29,0],.44,.022,E,D),h([.55,0,0],.24,.055,s.copper,D,[0,0,0]),d("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const G=[];for(let te=0;te<7;te++){const B=a([-1.92+te*.33,.2+te*.29,1.45-te*.29],m);l([0,0,0],[.7,.13,.42],s.cream,B);for(let ee of[-.2,.2])l([0,.07,ee],[.7,.12,.05],s.copper,B);G.push(B)}const W=Array.from({length:16},()=>c([0,0,0],[.07,.1,.07],x,m)),U=Array.from({length:3},(te,B)=>{const ee=h([.65,.2,0],.23+B*.16,.012,s.mint,b);return ee.scale.z=.6,ee}),V=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,V),V.rotation.z=.55;const q=[];for(let te=0;te<9;te++){const B=te*2.4;q.push(c([Math.sin(B)*3,3.2+te%3*.28,Math.cos(B)*2],.025,s.cream,m))}let H=!1,J=0,X=0,Z=!1;try{Z=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const $=a([26.6,-.86,.65],t);$.visible=Z,u([0,0,0],.15,.2,s.cream,$),u([0,.104,0],.125,.014,x,$),h([.16,0,0],.07,.02,s.copper,$,[0,0,0]),g(m,[b,A,D,...G,...W,...q,V]),g(b,[R,_,...U]),g(D,[]),g($,[]),G.forEach(te=>g(te,[]));function re(){H=!0,J=0,X=0,m.visible=!0,t.visible=!1,Ee(0,0)}function fe(){H=!1,m.visible=!1,t.visible=!0}function ve(){if(H&&(J=J===3?0:J+1,v(165+J*55),J===3)){Z=!0,$.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function Ee(te,B){H&&(X=n.MathUtils.damp(X,J,2.4,te),G.forEach((ee,ue)=>{const oe=Math.min(1,X/2),C=-1.92+ue*.33,P=.2+ue*.29,k=1.45-ue*.29;ee.position.set(n.MathUtils.lerp(C,-1.72+ue*.39,oe),n.MathUtils.lerp(P,1.95-ue*.22,oe),n.MathUtils.lerp(k,-.32+ue*.055,oe)),ee.rotation.z=-oe*.21}),R.position.y=.18+X*.09,_.position.y=.38+X*.09,A.position.y=.83+X*.09+Math.sin(B*.6)*.025,A.rotation.z=-.35-X*.13,D.rotation.z=-Math.min(1,X)*.45,W.forEach((ee,ue)=>{const oe=(B*.16+ue/16)%1;ee.visible=X>.05,ee.position.set(-1.7+oe*3,2.14-oe*1.62,-.32+oe*.25),ee.scale.set(.07,.1+Math.sin(oe*Math.PI)*.04,.07)}),U.forEach((ee,ue)=>{ee.visible=X>.4,ee.position.y=R.position.y+.034,ee.scale.setScalar(1+Math.sin(B*.5+ue)*.08),ee.scale.z*=.6}),V.rotation.z=.55+X*.21,T.visible=X>1.8)}return{enter:re,exit:fe,pour:ve,update:Ee,inspect:()=>({active:H,step:J,phase:X,trace:Z,roomVisible:m.visible,rootVisible:t.visible,waterY:R.position.y,sleeperY:A.position.y,channel:G.map(te=>te.position.toArray()),droplets:W.filter(te=>te.visible).length})}}function Ix({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const l=e([0,0,0],n);l.visible=!1;for(const d of[-.23,.23])t([d,.2,.611],[.15,.11,.025],r.black,l),i([d,.2,.64],[.2,.018,.012],r.copper,l);let c=null,u=0;function p(d){c=d,u=Number(d.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:d})=>p(d)),window.__beznogimState&&p(window.__beznogimState);function h(d){const g=c==null?void 0:c.action;a.visible=!!d&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),l.visible=a.visible}return{update:h,inspect:()=>{var d;return{visible:a.visible,ends:((d=c==null?void 0:c.action)==null?void 0:d.kind)==="sleep"?c.action.ends:null}}}}const hc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function Dx(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function Nx(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?hc():n}function Ux(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function Ox({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:p,sign:h,batchStatic:d,chime:g,changed:v}){const m=o([0,0,0],e);m.name="dream-06-cloud-heating",m.visible=!1;const f=r("#203f49"),M=r("#dce6d7"),E=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),S=r("#598e9d"),b=r("#ede1c3");c([0,-.3,0],4,.4,f,m),p([0,-.06,0],3.85,.045,E,m);for(let k=0;k<8;k++)u([-3+k*.85,-.06,-2.5],[-3+k*.85,-.06,2.5],.012,S,m);const R=o([-2.35,0,.2],m);a([0,.2,0],[1.7,.35,1.3],s.concrete,R);for(let k=0;k<6;k++){const L=-.65+k*.26;a([L,1.2,0],[.16,1.8,.66],E,R),p([L,2.12,0],.27,.065,E,R,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,E,R),u([-.8,1.95,.2],[.8,1.95,.2],.11,E,R);const _=l([-2.35,1.15,.87],.42,S,m);p([-2.35,1.15,.87],.48,.024,b,m,[.5,.3,0]);const A=["ЗЕМЛЯ","ОБЛАКО"].map((k,L)=>{const K=o([-3+L*1.3,.4,2.1],m);a([0,0,0],[.87,.14,1.13],f,K);for(let z=0;z<4;z++)a([-.27+z*.18,.09,-.28],[.08,.03,.25],x,K);return h(k,[0,.12,.32],.78,.22,K,{size:52}).rotation.x=-Math.PI/2,K}),T=p([-2.8,.57,2.1],.5,.035,x,m);T.rotation.x=Math.PI/2;const D=o([0,0,0],m);u([-1.5,.45,.2],[-.7,.45,.2],.09,E,D),u([-.7,.45,.2],[-.7,3.7,.2],.09,E,D),u([-.7,3.7,.2],[1.2,3.7,.2],.09,E,D);const G=Array.from({length:7},(k,L)=>l([.1+L*.45,3.8+L%2*.22,-.8],[.65,.45,.63],M,m)),W=o([1.25,3.1,-.8],m);a([0,.2,0],[2.6,.1,1.7],b,W);for(const k of[-1.15,1.15])for(const L of[-.7,.7])u([k,.2,L],[k,1.28,L],.045,E,W);const U=o([0,1.26,0],W);a([-.61,.15,0],[1.45,.12,1.95],M,U).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,U).rotation.z=-.35;const V=[a([-.68,.8,.72],[.48,.57,.06],x,W),a([.68,.8,.72],[.48,.57,.06],x,W)],q=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],H=[],J=[];q.forEach(([k,L,K],z)=>{const Y=o([k,L,K],m);H.push(Y),a([0,.05,0],[1.2,.13,1.1],s.concrete,Y);for(const O of[-.5,.5])u([O,.1,-.38],[O,1.1,-.38],.045,E,Y);u([-.5,1.1,-.38],[0,1.5,-.38],.045,E,Y),u([0,1.5,-.38],[.5,1.1,-.38],.045,E,Y);const ie=o([1.25,3.9,-.05],m);J.push(ie),a([0,0,0],[.65,.72,.12],b,ie),a([0,0,.071],[.48,.55,.035],x,ie),u([0,-.28,.1],[0,.28,.1],.018,E,ie),u([-.23,0,.1],[.23,0,.1],.018,E,ie)});const X=Array.from({length:10},()=>l([0,0,0],.065,x,m)),Z=i.clone(!0);Z.scale.setScalar(.4),Z.position.set(-2,.9,-1.7),m.add(Z),h("СОН / 06",[0,-.04,3.3],1.5,.29,m,{size:52}).rotation.x=-Math.PI/2;const $=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],E,$),a([0,0,.04],[.13,.22,.02],x,$),$.visible=!1,d(m,[R,_,...A,T,D,...G,W,...H,...J,...X,Z]),d(R,[]),d(D,[]),d(W,[U,...V]),d(U,[]),H.forEach(k=>d(k,[])),J.forEach(k=>d(k,[])),A.forEach(k=>d(k,[]));let re=hc(),fe=!1,ve=0,Ee=0,te=!1;try{te=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}$.visible=te;function B(){re=hc(),ve=0,Ee=0,fe=!0,m.visible=!0,t.visible=!1,C(0,0)}function ee(){fe=!1,m.visible=!1,t.visible=!0}function ue(k){re=Dx(re,k),g(k==="sky"?330:165),v()}function oe(){re=Nx(re),g(re.phase==="raining"?440:220),v()}function C(k,L){if(!fe)return;const K=re.phase;re=Ux(re,k);const z=re.phase==="heating",Y=re.target==="sky",ie=Y?z?re.progress:["cloud","raining","settled"].includes(re.phase)?1:0:0;if(ve=ie,Ee=re.phase==="raining"?re.progress:re.phase==="settled"?1:0,W.visible=ie>.02,W.scale.setScalar(Math.max(.001,ie)),W.position.y=3.1+Math.sin(L*.9)*.05,G.forEach((O,se)=>{O.position.y=3.8+se%2*.22+ie*.5-Ee*.25,O.scale.set(.65+ie*.12,.45*(1-ie*.6),.63)}),_.scale.setScalar(.42*(z&&!Y?1+Math.sin(re.progress*Math.PI)*.75:1)),_.rotation.y=L*.2,J.forEach((O,se)=>{const xe=Math.max(0,Math.min(1,Ee*1.6-se*.3)),Me=xe*xe*(3-2*xe),F=q[se];O.position.set(1.25+(F[0]-1.25)*Me,3.9+(F[1]+.8-3.9)*Me,-.05+(F[2]+.06+.05)*Me),O.rotation.z=(1-Me)*Math.sin(L+se)*.1,O.visible=["cloud","raining","settled"].includes(re.phase)}),V.forEach(O=>O.visible=re.phase==="cloud"||z),T.position.x=Y?-1.7:-3,X.forEach((O,se)=>{O.visible=z;const xe=(L*.7+se/10)%1;Y?xe<.72?O.position.set(-.7,.45+xe/.72*3.25,.2):O.position.set(-.7+(xe-.72)/.28*1.9,3.7,.2):O.position.set(-2.35+Math.sin(xe*Math.PI*2)*.6,.5+xe*1.8,.87)}),re.trace&&!te){te=!0,$.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}re.phase!==K&&v()}return{enter:B,exit:ee,choose:ue,act:oe,update:C,text:()=>({ready:re.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:re.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[re.phase],button:()=>re.phase==="raining"?"окна падают…":re.phase==="heating"?"тепло идёт…":re.phase==="settled"?"увидеть сон снова":re.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...re,active:fe,trace:te,warmth:ve,spent:Ee,globeScale:_.scale.x/.42,rootVisible:t.visible,roomVisible:m.visible,houseVisible:W.visible,windows:J.map(k=>k.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...q.map(k=>[k[0],.8,k[2]])]})}}function dc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function Fx(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function zx(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?dc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function Bx(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function kx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:d,batchStatic:g,chime:v,changed:m}){const f=a([0,0,0],e);f.name="dream-05-self-measuring-instrument",f.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),E=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),S=r("#1c4147"),b=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,S,f),u([0,-.16,0],3.45,.08,b,f),h([0,-.1,0],3.65,.07,s.copper,f);for(let O=0;O<5;O++)h([0,-.1+O*.006,0],.7+O*.52,.009,E,f);const R=a([0,0,0],f);l([0,.12,-1.6],[3,.34,1.3],s.concrete,R),p([0,.3,-1.65],[0,3.75,-1.65],.12,M,R);const _=a([0,3.7,-1.4],f),A=u([0,0,-.12],1.05,.2,S,_);A.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,_,[0,0,0]);const T=a([-.85,0,.02],_),D=a([.85,0,.02],_);l([.425,0,0],[.85,1.72,.1],x,T),l([-.425,0,0],[.85,1.72,.1],x,D);for(let O=0;O<12;O++){const se=O*Math.PI/6;p([Math.sin(se)*.78,Math.cos(se)*.78,.09],[Math.sin(se)*.91,Math.cos(se)*.91,.09],.016,s.copper,_)}const G=a([0,0,.14],_);p([0,-.15,0],[0,.69,0],.025,S,G),c([0,0,0],.065,s.copper,G);const W=[a([-2.35,1.65,0],f),a([2.35,1.65,0],f)];for(const[O,se]of W.entries())l([0,0,0],[.24,1.65,.38],M,se),l([O===0?.38:-.38,-.76,0],[.95,.18,.38],E,se),c([0,.84,0],.19,s.copper,se);const U=[],V=[],q=[];for(let O=0;O<12;O++){const se=-2.45+O*.445;V.push(new n.Vector3(se,2.52,0));const xe=O/11,Me=xe*Math.PI*1.35;q.push(new n.Vector3(2.35*Math.cos(Me)*(1-xe*.85),.24+xe*3,2.05-xe*3.2));const F=a(V[O].toArray(),f);U.push(F),l([0,0,0],[.42,.16,.57],M,F),l([0,.09,.15],[.03,.012,.2],s.copper,F)}const H=c([0,.7,0],[.45,.64,.45],E,f),J=i.clone(!0);f.add(J),J.scale.setScalar(.43);const X=new n.Vector3(2.8,.65,2.15);J.position.copy(X);function Z(O,se){const xe=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Te],I)=>I?xe.lineTo(ze,Te):xe.moveTo(ze,Te)),xe.closePath();const Me=new n.ExtrudeGeometry(xe,{depth:.07,bevelEnabled:!1}),F=a([0,0,0],O);return o(Me,x,null,null,F),F.scale.setScalar(se),F}const $=Z(_,.88);$.position.set(0,.1,.2),$.visible=!1;const re=Z($,.22);re.position.set(-.03,-.2,.12);const fe=l([-.03,-.2,.085],[.34,.44,.01],S,$),ve=Z(t,.17);ve.position.set(2.8,1.14,-2.75),ve.rotation.y=Math.PI/4,d("СОН / 05",[0,-.055,2.94],1.65,.3,f,{size:48}).rotation.x=-Math.PI/2,d("СЕБЯ?",[0,.36,-.88],1.05,.26,f,{size:52});const Ee=d("?",[-1.6,.65,1.5],.48,.65,f,{size:84,bg:"#1c4147"}),te=h([0,.12,0],.68,.035,s.light,f);g(f,[R,_,...U,...W,H,J,Ee,te]),g(R,[]),g(_,[T,D,G,$]),g(T,[]),g(D,[]),g(G,[]),g($,[re,fe]),g(re,[]),U.forEach(O=>g(O,[])),W.forEach(O=>g(O,[]));let B=dc(),ee=!1,ue=0,oe=0,C=!1;try{C=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}ve.visible=C;function P(){B=dc(),ue=0,oe=0,ee=!0,f.visible=!0,t.visible=!1,z(0,0)}function k(){ee=!1,f.visible=!1,t.visible=!0}function L(O){B=Fx(B,O),v(O==="self"?330:165),m()}function K(){B=zx(B),v(B.phase==="climbing"?440:220),m()}function z(O,se){if(!ee)return;const xe=B.phase;B=Bx(B,O);const Me=B.phase==="unfolding"?B.progress:["stairs","climbing","inside"].includes(B.phase)?1:0;ue=Me*Me*(3-2*Me),oe=n.MathUtils.damp(oe,B.phase==="inside"?1:0,3,O),U.forEach((ze,Te)=>{ze.position.lerpVectors(V[Te],q[Te],ue),ze.rotation.y=ue*(-Te*.07)});const F=B.phase==="measuring"?Math.sin(B.progress*Math.PI):0;if(W.forEach((ze,Te)=>{const I=Te===0?-1:1;ze.position.set(I*(2.35-F*1.55),1.65+ue*.4,-ue*.85),ze.rotation.z=I*ue*.65}),G.rotation.z=B.phase==="measuring"?Math.sin(B.progress*35)*.8:B.phase==="refused"?Math.sin(se*6)*.25:-ue*Math.PI*1.75,H.position.y=.7+(B.phase==="measuring"?Math.sin(B.progress*Math.PI)*1.5:Math.sin(se*1.3)*.05),H.scale.set(.45*(1-F*.16),.64*(1+F*.3),.45*(1-F*.16)),Ee.visible=B.phase==="refused",Ee.position.y=.65+Math.sin(se*2)*.1,T.rotation.y=oe*1.7,D.rotation.y=-oe*1.7,G.visible=oe<.2,$.visible=B.phase==="inside",$.rotation.z=Math.sin(se*.7)*.04,re.rotation.z=-se*.12,J.position.copy(X),J.scale.setScalar(.43),J.visible=B.phase!=="inside",["climbing","inside"].includes(B.phase)){const ze=B.phase==="inside"?1:B.progress,Te=[X,...q.map(ne=>ne.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],I=ze*(Te.length-1),y=Math.min(Te.length-2,Math.floor(I));J.position.lerpVectors(Te[y],Te[y+1],Math.min(1,I-y)),J.scale.setScalar(.43*(1-ze*.8))}if(te.position.set((B.target==="self",0),B.target==="self"?3.7:.12,B.target==="self"?-1.4:0),te.rotation.x=B.target==="self"?0:Math.PI/2,te.visible=["ready","refused","measuring","unfolding"].includes(B.phase),B.trace&&!C){C=!0,ve.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}xe!==B.phase&&m()}function Y(){return{ready:B.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[B.phase]}return{enter:P,exit:k,choose:L,act:K,update:z,text:Y,button:()=>B.phase==="inside"?"увидеть сон снова":B.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...B,active:ee,trace:C,unfold:ue,opened:oe,rootVisible:t.visible,roomVisible:f.visible,steps:U.map(O=>O.position.toArray()),jaws:W.map(O=>O.position.toArray()),drop:H.position.toArray(),head:J.position.toArray(),cursorVisible:$.visible,cursorPosition:$.getWorldPosition(new n.Vector3).toArray(),faceAngles:[T.rotation.y,D.rotation.y],nestedVisible:$.visible&&re.visible,landmarks:[H.position.toArray(),[0,3.7,-1.4],X.toArray(),q[0].toArray()]})}}const Gx=["восток","юг","запад","север"],df=[0,2,3];function Gl(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function Vx(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Hx(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==df[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function Wx(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Xx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:d,batchStatic:g,chime:v,changed:m}){const f=a([0,0,0],e);f.name="dream-04-letter-above-roof",f.visible=!1;const M=r("#355b62"),E=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,f),h([0,-.26,0],3.78,.024,s.copper,f);for(let C=0;C<4;C++){const P=C*Math.PI/2,k=Math.cos(P)*3.05,L=Math.sin(P)*3.05;d(["В","Ю","З","С"][C],[k,-.23,L],.38,.28,f).rotation.x=-Math.PI/2}const S=[],b=[],R=[];for(let C=0;C<3;C++){const P=1.05+C*1.4,k=2.05-C*.27,L=a([0,P,0],f);S.push(L);for(let se=1;se<4;se++){const xe=se*Math.PI/2,Me=Math.cos(xe),F=Math.sin(xe),ze=[[.3,.3,-.3],[.3,.3,.3],[k,.04,k],[k,.04,-k]],Te=new n.BufferGeometry,I=[];for(const ne of[0,1,2,0,2,3]){const[ae,he,Se]=ze[ne];I.push(ae*Me-Se*F,he,ae*F+Se*Me)}Te.setAttribute("position",new n.Float32BufferAttribute(I,3)),Te.computeVertexNormals();const y=E.clone();y.side=n.DoubleSide,o(Te,y,null,null,L),p([k*Me-k*F,.04,k*F+k*Me],[k*Me+k*F,.04,k*F-k*Me],.035,s.copper,L);for(const ne of[-1,1])p([k*Me-k*F*ne,.04,k*F+k*Me*ne],[(k+.16)*Me-(k+.16)*F*ne,.2,(k+.16)*F+(k+.16)*Me*ne],.035,s.copper,L)}const K=a([k*.67,.045,0],L);p([-.32,0,0],[.3,0,0],.026,s.mint,K),p([.3,0,0],[.1,0,.13],.026,s.mint,K),p([.3,0,0],[.1,0,-.13],.026,s.mint,K),b.push(K);const z=df[C]*Math.PI/2,Y=Math.cos(z)*k*.63,ie=Math.sin(z)*k*.63,O=h([Y,P+.09,ie],.16,.025,s.light,f);R.push(O),d(`${C+1}`,[k+.26,P+.14,.2],.36,.29,f,{bg:"#355b62",fg:"#f0e4b8"});for(const se of[-1,1])p([se*.3,P-.32,-.3],[se*.3,P-.03,-.3],.018,s.copper,f)}const _=a([-2.6,.16,1.5],f);l([0,0,0],[1.1,.62,.7],s.cream,_),l([0,.16,.361],[.72,.07,.025],M,_),d("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,f,{size:40});const A=i.clone(!0);f.add(A),A.scale.setScalar(.53),A.position.set(-2.6,1,1.5),A.rotation.z=-.12,d("СОН / 04",[0,-.12,3.34],1.8,.32,f,{size:48}).rotation.x=-Math.PI/2;const T=a([-1.1,.12,1.5],f);l([0,0,0],[.52,.025,.36],x,T);const D=a([-.26,.016,0],T),G=a([.26,.016,0],T);l([.13,0,0],[.26,.022,.36],x,D),l([-.13,0,0],[.26,.022,.36],x,G),p([-.25,.04,-.17],[0,.04,.1],.009,s.copper,T),p([.25,.04,-.17],[0,.04,.1],.009,s.copper,T);const W=c([0,.045,0],.055,s.light,T),U=a([0,5.3,0],f);h([0,0,0],.55,.025,s.copper,U),p([0,-.3,0],[0,.22,0],.018,s.copper,U);const V=Array.from({length:6},(C,P)=>{const k=P*Math.PI/3,L=c([Math.cos(k)*.29,0,Math.sin(k)*.29],[.21,.065,.11],x,U);return L.rotation.y=-k,L});U.visible=!1;const q=[new n.Vector3(-1.1,.12,1.5),...R.map(C=>C.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],H=new n.BufferGeometry().setFromPoints(q),J=new n.Line(H,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));J.computeLineDistances(),f.add(J);let X=Gl(),Z=!1,$=0,re=!1,fe=[Math.PI/2,Math.PI/2,Math.PI/2];try{re=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const ve=a([-3.75,1.17,-2.95],t);ve.visible=re,l([0,0,0],[.23,.012,.16],x,ve),p([-.11,.016,-.07],[0,.016,.04],.005,s.copper,ve),p([.11,.016,-.07],[0,.016,.04],.005,s.copper,ve),g(f,[...S,...R,_,A,T,U,J]),S.forEach((C,P)=>g(C,[b[P]])),g(T,[D,G,W]),g(D,[]),g(G,[]),g(_,[]),g(U,V),g(ve,[]);function Ee(){Z=!0,X=Gl(),$=0,fe=X.turns.map(C=>C*Math.PI/2),f.visible=!0,t.visible=!1,ue(0,0)}function te(){Z=!1,f.visible=!1,t.visible=!0}function B(C){X=Vx(X,C),v(165+C*55+X.turns[C]*22),m()}function ee(){X.phase==="delivered"?(X=Gl(),$=0):X=Hx(X),v(220),m()}function ue(C,P){if(!Z)return;const k=X.phase;X=Wx(X,C),$=n.MathUtils.damp($,X.phase==="delivered"?1:0,2.4,C),S.forEach((ie,O)=>{const se=X.turns[O]*Math.PI/2,xe=Math.atan2(Math.sin(se-fe[O]),Math.cos(se-fe[O]));fe[O]+=xe*(C===0?1:1-Math.exp(-C*7)),ie.rotation.y=-fe[O],ie.position.x=$*[-2.15,1.85,0][O],ie.position.z=$*[.45,-.65,-2.1][O],ie.rotation.z=$*(O===0?-.16:.13)});const L=Math.min(4,X.progress),K=Math.min(3,Math.floor(L)),z=Math.min(1,L-K),Y=z*z*(3-2*z);if(T.position.lerpVectors(q[K],q[K+1],Y),T.rotation.y=P*.16,D.rotation.z=-$*1.1,G.rotation.z=$*1.1,W.position.y=.045+$*.18,U.visible=X.phase==="delivered",U.rotation.y=P*.22,V.forEach((ie,O)=>{ie.position.y=Math.sin(P*.7+O)*.035}),J.visible=X.phase!=="delivered",X.trace&&!re){re=!0,ve.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}k!==X.phase&&m()}function oe(){return X.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":X.phase==="caught"?`Поймала крыша ${X.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:X.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:Ee,exit:te,turn:B,send:ee,update:ue,text:oe,directions:Gx,inspect:()=>({...X,turns:[...X.turns],active:Z,trace:re,open:$,roomVisible:f.visible,rootVisible:t.visible,roofs:S.map(C=>({position:C.position.toArray(),rotation:C.rotation.toArray().slice(0,3)})),letter:T.position.toArray(),goals:R.map(C=>C.position.toArray()),crown:U.visible})}}function qx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:d,paperBoat:g,batchStatic:v,chime:m}){const f=a([0,0,0],e);f.name="dream-03-silent-dock",f.visible=!1;const M=r("#526b79"),E=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,f),u([0,-.23,0],4,.055,E,f),h([0,-.18,0],4.08,.04,s.copper,f),l([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,f);for(let P of[-.1,.55,1.2,1.85])l([-2.85,.07,P],[1.38,.045,.025],M,f);for(let P of[-3.4,-2.3])p([P,-.3,1.9],[P,.48,1.9],.035,s.copper,f);d("СОН / 03",[-2.85,.13,2.4],1.6,.28,f,{size:48}).rotation.x=-Math.PI/2;const S=i.clone(!0);S.position.set(-2.8,1.27,.75),S.scale.setScalar(.65),f.add(S);const b=[];for(const P of[-1,1]){const k=a([P*.12,-.04,.68],S);p([0,0,0],[P*.64,-.2,.05],.06,s.black,k),c([P*.62,-.18,.05],[.19,.095,.07],s.black,k),p([P*.58,-.18,.06],[P*.58,-.7,.06],.015,s.copper,k),c([P*.58,-.76,.06],.075,s.copper,k),v(k,[]),b.push(k)}const R=Array.from({length:3},(P,k)=>h([-1.2+k*1.25,-.17,-.25],.72,.035,k===1?s.cream:s.copper,f)),_=Array.from({length:3},(P,k)=>h([-1.2+k*1.25,-.165,-.25],.72,.013,x,f)),A=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,f),T=g(f,[-1.9,-.13,-.25],.9),D=c([0,.53,0],[.065,.09,.065],s.light,T),G=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,f);G.rotation.z=.65;const W=[];for(let P=0;P<5;P++){const k=-1.6+P*.85;p([k,-.2,-2.9],[k,1.1+P%2*.4,-2.9],.025,M,f),W.push(c([k,1.12+P%2*.4,-2.9],.035,s.light,f))}let U=!1,V=0,q=1,H=[1,1,1],J=[0,0,0],X=0,Z=0,$=!1;try{$=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const re=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);re.visible=$;const fe=Array.from({length:5},()=>new n.Vector3),ve=new n.CatmullRomCurve3(fe),Ee=new n.Vector3,te=new n.Vector3;v(f,[S,...R,..._,A,T,G,...W]),v(S,b),v(T,[D]);function B(P){q=n.MathUtils.clamp(Math.round(Number(P)||1),1,3)}function ee(){U=!0,V=0,H=[1,1,1],J=[0,0,0],X=0,Z=0,f.visible=!0,t.visible=!1,C(0,0)}function ue(){U=!1,f.visible=!1,t.visible=!0}function oe(){if(U){if(V===3){V=0,H=[1,1,1],J=[0,0,0],Z=0;return}if(H[V]=q,V++,X=0,m(110+q*55),V===3){$=!0,re.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function C(P,k){if(!U)return;Z+=Math.min(P,.15),X+=Math.min(P,.15);for(let Y=0;Y<3;Y++){J[Y]=n.MathUtils.damp(J[Y],Y<V?1:0,3,P);const ie=-.17+J[Y]*(.95+H[Y]*.42),O=.72+H[Y]*.12;R[Y].position.y=ie,R[Y].rotation.set(Math.PI/2*(1-J[Y]),Math.PI/2*J[Y],0),R[Y].scale.setScalar(O/.72),_[Y].scale.setScalar(O/.72*(1+Math.sin(Z*.9+Y)*.045)),fe[Y+1].set(R[Y].position.x,Math.max(-.1,ie),-.25)}fe[0].set(-2,-.1,-.25),fe[4].set(2.5,-.1,-.25);const L=(1-Math.cos(Z*.55))*.5;ve.getPoint(L,Ee),ve.getPoint(Math.min(.999,L+.012),te),T.position.copy(Ee),T.rotation.z=n.MathUtils.clamp(Math.atan2(te.y-Ee.y,te.x-Ee.x),-.45,.45),T.rotation.y=0,A.visible=V>0;const K=Math.min(1,X/1.8),z=Math.max(0,V-1);A.position.set(n.MathUtils.lerp(-2.5,-1.2+z*1.25,K),.35+K*(2.1+H[z]*.35),n.MathUtils.lerp(1.4,-.25,K)),A.rotation.y=Z*.4,b.forEach((Y,ie)=>Y.rotation.z=Math.sin(Z*1.2+ie*Math.PI)*(.06+V*.04)),D.position.y=.53+Math.sin(k)*.02}return{enter:ee,exit:ue,toss:oe,choose:B,update:C,inspect:()=>({active:U,step:V,force:q,forces:[...H],lift:[...J],trace:$,roomVisible:f.visible,rootVisible:t.visible,boat:T.position.toArray(),ringY:R.map(P=>P.position.y),ringRotation:R.map(P=>P.rotation.toArray().slice(0,3)),stone:A.position.toArray()})}}function kh(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(c=>Number(c.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const c=t.batch,u=Math.min(i,Math.max(0,360-c.age));c.age+=u,c.exposure[c.face]+=u,c[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const c=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:c.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:c.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=c.air,t.batch&&t.batch.age<360&&c.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(c.id),p=t.shelf.findIndex(h=>h.id===u);if(p<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(p,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",d={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(d),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:d,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,l={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:l,result:s,seconds:o,label:r}}const Yx={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Zx({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,mesh:u,sign:p,batchStatic:h,changed:d,watching:g,localPlay:v}){var k,L,K;const m=s([24,-1.55,0]);m.name="cheese-cellar";const f=i("#697b70"),M=i("#b4b89b"),E=i("#936c4d"),x=i("#e1b064"),S=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],f,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let z=-4;z<=4;z+=2)r([z,1.5,-3.43],[.16,3,.1],f,m);for(let z of[-4.4,4.4])l([z,0,-3.3],[z,3.6,-3.3],.09,t.copper,m),l([z,3.6,-3.3],[z,3.6,2.5],.09,t.copper,m),l([z,3.6,2.5],[z,0,2.5],.09,t.copper,m);p("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],E,m),r([0,0,-2.7],[7.9,.14,1.05],E,m);for(let z of[-3.8,3.8])r([z,.6,-2.7],[.14,1.4,1.05],E,m);a([-3,.55,1.1],.75,1.1,t.copper,m),c([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,b,m),l([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,E,m);for(let z of[2.8,3.5])a([z,.28,1.8],.26,.56,t.cream,m),a([z,.59,1.8],.12,.1,t.copper,m);const R=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let z=0;z<4;z++)r([2.25+z*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],E,m);const _=s([.5,1.02,.25],m),A=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,_),T=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),S,[0,0,0],null,_),D=c([0,.33,0],.35,.026,t.cream,_),G=s([.5,.65,2.3],m),W=[];for(let z=0;z<6;z++)W.push(o([-1.25+z*.5,0,0],.08,t.mint,G));const U=p("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});U.rotation.x=-Math.PI/2;function V(z){const Y=s(z,m),ie=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,Y),O=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),S.clone(),[0,0,0],null,Y),se=s([0,-.14,.09],Y);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,se);const xe=o([.09,.16,.27],.04,t.mint,se),Me=u(new n.IcosahedronGeometry(.21,0),f,[.13,.02,.23],null,Y),F=s([0,0,0],Y);for(const[ze,Te,I]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Te,I],[.05,.05,.025],t.dark,F);return{g:Y,body:ie,crust:O,steps:se,crystal:Me,holes:F,pearl:xe}}const q=Array.from({length:6},(z,Y)=>V([-3.15+Y*1.26,1.42,-2.6])),H=s([0,0,0],e);for(let z=0;z<24;z++){const Y=z/23;r([8.3+Y*11.2,-.15-Y*1.32,1.4+Math.sin(Y*Math.PI)*2],[.85,.15,.75],f,H)}for(let z=0;z<5;z++)r([20+z*.7,-1.46,1.4-z*.22],[.75,.13,.7],f,H);p("СЫР →",[10.2,.35,2.4],1.5,.4,H,{size:44}),l([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,H),h(H,[]),h(m,[_,R,G,U,...q.map(z=>z.g)]);for(const z of q)h(z.steps,[z.pearl]),h(z.holes,[]);let J=null,X=null,Z=0,$=null,re="",fe=0;try{const z=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");J=(z==null?void 0:z.state)||z,Z=Number(z==null?void 0:z.clockOffset)||0}catch{}const ve=()=>Date.now()/1e3+Z;function Ee(z,Y,ie={}){const O=kh({state:J,mode:z,tool:Y,args:ie,now:ve()});J=O.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:J,clockOffset:Z}))}catch{}return O}Ee("migrate");const te=document.createElement("div");te.id="cellar-controls",te.hidden=!0,te.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(te);function B(){return X&&g()?X:kh({mode:"migrate",state:J,now:J.updated}).public}function ee(z){$=z;const Y=z.batch;if(_.visible=!!Y,U.visible=!Y,R.rotation.y=z.air==="dry"?-.8:0,Y){_.rotation.z=Y.face?Math.PI:0;const ie=Y.age/360;A.material.color.set(Y.culture==="moon"?"#e9cf8b":"#c8bc88"),T.material.color.set(z.air==="damp"?"#8b9f78":"#b87a48"),D.scale.setScalar(1+ie*.15)}for(let ie=0;ie<6;ie++)W[ie].visible=!!Y&&Y.age>=(ie+1)*60;q.forEach((ie,O)=>{const se=z.shelf[O];ie.g.visible=!!se,se&&(ie.g.rotation.z=se.kind==="lopsided"?.22:0,ie.crust.material.color.set(se.wet>=180?"#8b9f78":"#b87a48"),ie.steps.visible=se.kind==="moon_stair",ie.crystal.visible=se.kind==="stone",ie.holes.visible=se.kind==="holes"||se.kind==="lopsided")})}function ue(z,Y){v();const ie=Ee("action",z,Y);return re="",P(0),d(),ie}for(const z of te.querySelectorAll("[data-culture]"))z.onclick=()=>ue("set_batch",{culture:z.dataset.culture});te.querySelector("#cellar-turn").onclick=()=>ue("tend",{air:J.air,turn:!0}),te.querySelector("#cellar-air").onclick=()=>ue("tend",{air:J.air==="damp"?"dry":"damp",turn:!1}),te.querySelector("#cellar-wait").onclick=()=>{v(),Z+=60,Ee("tick"),re="",P(0),d()};function oe(){const z=$||B(),Y=z.batch,ie=X&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",O=Y?Y.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(Y.age)}/360 с. Корка: ${Math.floor(Y.exposure[0])}/${Math.floor(Y.exposure[1])} с.`:z.shelf.length?`На полке: ${z.shelf.map(se=>Yx[se.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:X&&g()?"войти в свою сыроварню":Y?Y.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(X&&g())&&!!Y&&!Y.ready,description:ie+" "+O}}function C(){const z=$||B(),Y=z.batch;te.querySelector("#cellar-readout").textContent=`${z.air==="damp"?"сыро":"сухо"} · ${Y?Y.ready?"готово":`ещё ${Math.ceil(Y.remaining)} с`:"нет колеса"} · полка ${z.shelf.length}/6`;for(const ie of te.querySelectorAll("[data-culture]"))ie.disabled=!!Y;te.querySelector("#cellar-turn").disabled=!Y||Y.ready,te.querySelector("#cellar-air").textContent=z.air==="damp"?"сделать суше":"вернуть сырость"}function P(z){z-fe>=1&&(fe=z,Ee("tick"));const Y=B(),ie=JSON.stringify(Y);ie!==re&&(re=ie,ee(Y),C(),d())}return window.addEventListener("beznogim:state",({detail:z})=>{var ie,O;const Y=(O=(ie=z.mechanics)==null?void 0:ie.cellar)==null?void 0:O.public;Y&&(X=Y,re="")}),X=((K=(L=(k=window.__beznogimState)==null?void 0:k.mechanics)==null?void 0:L.cellar)==null?void 0:K.public)||null,ee(B()),C(),{house:m,controls:te,update:P,card:oe,run:()=>ue(J.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:X&&g()?"resident":"sandbox",...$,wheelVisible:_.visible,shelfVisible:q.filter(z=>z.g.visible).length,stairsVisible:q.filter(z=>z.g.visible&&z.steps.visible).length,shutter:R.rotation.y})}}function $x({entries:n,elements:e,layer:t,camera:i}){const s=new mt,r=new mt,o=new N,a=Object.entries(n).map(([p,h])=>({element:e[p],anchor:h.point,x:NaN,y:NaN,visible:null}));let l=0,c=0,u=!1;return{update(p,h,d){if(t.hidden===p&&(t.hidden=!p),!p){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||l!==h||c!==d||!s.equals(r);l=h,c=d,u=!0;for(const v of a){if(typeof v.anchor=="function")v.anchor(o);else{if(!g)continue;o.copy(v.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,f=(1-o.y)*d*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&f>=10&&f<=d-55;if(M!==v.visible&&(v.visible=M,v.element.classList.toggle("hidden",!M)),!M)continue;const E=Math.round(m*10)/10,x=Math.round(f*10)/10;(E!==v.x||x!==v.y)&&(v.x=E,v.y=x,v.element.style.transform=`translate3d(${E}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Jx(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,p=Math.max(12,u?0:a.bottom+12,u?c.bottom+12:0),h=Math.max(64,innerHeight-l.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(p)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Ae=n=>document.querySelector(n),Jt=()=>innerWidth<700,ff=matchMedia("(prefers-reduced-motion: reduce)").matches;let gr={};try{gr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!gr.running,harvest:Math.min(99,Math.max(0,Number(gr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(gr.dockTrips)||0))),dockPending:gr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Zs(){return we.roof===null?we.running||we.loop>0:!!we.roof}function fc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const ut=new cf({antialias:!0,alpha:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(devicePixelRatio,Jt()?1.5:2));ut.setSize(innerWidth,innerHeight,!1);ut.shadowMap.enabled=!0;ut.shadowMap.type=Os;ut.shadowMap.autoUpdate=!1;ut.shadowMap.needsUpdate=!0;ut.outputColorSpace=on;ut.toneMapping=Ca;ut.toneMappingExposure=1.22;Ae("#world").append(ut.domElement);const gn=new Dd;gn.background=new ot("#182e32");gn.fog=new Ga("#182e32",8e-4);const Oe=new Vr(-10,10,10,-10,.1,600),tu=new N(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(tu);const Je=new cx(Oe,ut.domElement);Je.target.copy(tu);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=yi.PAN;Je.mouseButtons.RIGHT=yi.PAN;Je.touches.ONE=vi.PAN;Je.touches.TWO=vi.DOLLY_PAN;gn.add(new $d("#d9eedc","#334d53",2.3));const ps=new Kc("#ffe2ac",3.3);ps.position.set(-7,14,6);ps.castShadow=!0;ps.shadow.mapSize.set(Jt()?512:1024,Jt()?512:1024);Object.assign(ps.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});ps.shadow.bias=-4e-4;ps.shadow.normalBias=.025;gn.add(ps);const pf=new Kc("#8ad5d8",1.3);pf.position.set(5,7,-8);gn.add(pf);const St=new ki;gn.add(St);const Vl={};function et(n,e={}){const t=n+JSON.stringify(e);return Vl[t]||(Vl[t]=new Ns({color:n,roughness:.8,...e}))}const si={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},me={concrete:et(si.concrete),cream:et(si.cream),dark:et(si.dark),metal:et(si.metal,{metalness:.5,roughness:.4}),copper:et(si.copper,{metalness:.6,roughness:.35}),rust:et(si.rust),black:et(si.black),leaf:et(si.leaf),light:et("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:et("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Qs={box:new Ci(1,1,1),sphere:new qa(1,12,8),ico:new Gr(1,1),cyl:new Br(1,1,1,16),cone:new ds(1,1,8)};function Ot(n,e,t,i,s=St){const r=new mn(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const We=(n,e,t,i=St)=>Ot(Qs.box,t,n,e,i),lt=(n,e,t,i=St)=>Ot(Qs.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),wt=(n,e,t,i,s=St)=>Ot(Qs.cyl,i,n,[e,t,e],s);function Hr(n,e,t,i=St,s=.08){return Ot(new eu(...e,1,s),t,n,null,i)}function _t(n=[0,0,0],e=St){const t=new ki;return t.position.set(...n),e.add(t),t}function js(n,e,t,i=St){const s=new Hc(n.map(r=>new N(...r)));return Ot(new Za(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function Mt(n,e,t,i,s=St){const r=new N(...n),o=new N(...e),a=o.clone().sub(r),l=wt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return l.quaternion.setFromUnitVectors(new N(0,1,0),a.normalize()),l}function Rt(n,e,t,i,s=St,r=[Math.PI/2,0,0]){const o=Ot(new Ya(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Yt(n,e,t,i,s=St,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const l=new kc(o);l.colorSpace=on;const c=Ot(new fs(t,i),new zr({map:l,side:Ln}),e,null,s);return c.castShadow=!1,c}let Hl=179;function Et(){return Hl=Hl*1664525+1013904223>>>0,Hl/4294967296}const Ea=document.createElement("canvas");Ea.width=Ea.height=256;const wa=Ea.getContext("2d");wa.fillStyle="#b4bcaa";wa.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)wa.fillStyle=`rgba(${Et()>.5?"60,82,64":"235,229,201"},${Et()*.08})`,wa.fillRect(Et()*256,Et()*256,1+Et()*3,1+Et()*3);const Nr=new kc(Ea);Nr.wrapS=Nr.wrapT=wr;Nr.repeat.set(5,5);Nr.colorSpace=on;const Kx=et("#c2c6b1",{map:Nr,roughness:.97});function nu(n,e,t,i,s=St){const r=new kr;n.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new Js(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Ot(o,i,null,null,s)}const iu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];nu(iu,0,.82,me.concrete);nu(iu,.06,.14,Kx);nu(iu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,et("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Et()*10.9,t=Et()>.5?5.15:-5.2,i=Ot(Qs.ico,et(n%3?"#557469":"#668477"),[e,-1.15-Et()*.5,t],[.25+Et()*.8,.2+Et()*.55,.35+Et()*.3]);i.rotation.y=Et()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;We([e,-.37,5.61],[.48,.19,.025],n%2?me.copper:me.dark),n%2===0&&js([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,me.metal)}Yt("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,St,{size:32});const It=_t([-3.2,.08,-2.5]),dn=_t([0,0,0],It);We([0,.08,0],[4.5,.15,3.6],me.dark,It);We([0,1.2,-1.68],[4.5,2.4,.18],me.cream,It);We([-2.15,1,0],[.18,2,3.6],me.cream,It);for(let n=0;n<5;n++){We([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],me.concrete,It),We([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],me.metal,It);for(let e=0;e<3;e++)We([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],me.copper,It)}We([0,2.47,-.2],[4.8,.14,3.7],me.rust,dn);for(let n=0;n<23;n++){const e=We([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],et("#d09062"),dn);e.rotation.x=-.015}We([0,2.35,1.62],[4.8,.14,.18],me.dark,It);Mt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,me.copper,It);Mt([2.3,.12,1.62],[2.3,2.4,1.62],.055,me.copper,It);Yt("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,It,{size:37});We([.1,.85,-.84],[3.8,.13,.87],me.rust,It);for(const n of[-1.5,1.65])We([n,.44,-.84],[.12,.85,.65],me.metal,It);for(let n=0;n<3;n++)We([-1.15+n*.95,.51,-.85],[.82,.47,.75],me.concrete,It),We([-1.15+n*.95,.5,-.44],[.18,.04,.03],me.copper,It);for(let n=0;n<6;n++)We([-1.6+n*.48,2.07,-1.48],[.28,.16+Et()*.16,.17],et(["#9fba95","#cb9b70","#667f71"][n%3]),It);wt([0,.5,.7],.32,.12,me.rust,It);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;Mt([e,.06,t],[e,.5,t],.04,me.metal,It)}for(let n=0;n<4;n++)Rt([-1.5,.06,1],.3-n*.045,.025,me.black,It);wt([-1.5,3,-.9],.16,.9,me.metal,dn);wt([-1.5,3.47,-.9],.24,.08,me.rust,dn);We([1.4,2.9,-.4],[.8,.5,.6],me.concrete,dn);for(let n=0;n<5;n++)We([1.1+n*.15,2.94,-.085],[.035,.32,.03],me.dark,dn);const su=new Ja("#ffca86",5,5,2);su.position.set(-3,1.7,-1.1);St.add(su);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=Hr([n,.1,e],[.74,.05,.74],et(Et()>.3?"#b3baa6":"#a5b5a4"),St,.018);t.rotation.y=(Et()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Et()*12,t=-5.1+Et()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Ot(Qs.cone,me.leaf,[e,.1,t],[.022,.12+Et()*.12,.022]);i.rotation.z=(Et()-.5)*.7}const pc=new Bn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Ln});We([3.7,.12,3.6],[4.9,.24,2.7],me.dark);Ot(new fs(4.5,2.4),pc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])We([3.7,.29,n],[5,.38,.16],me.cream);for(const n of[1.18,6.2])We([n,.29,3.6],[.16,.38,2.85],me.cream);for(let n=0;n<13;n++)We([1.85,.5,2.15+n*.235],[1.08,.09,.22],et(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])wt([e,.88,n],.045,.8,me.copper);for(const n of[1.31,2.4])js([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,me.cream);const ru=[];for(let n=0;n<6;n++){let e=We([4+n*.095,-1.25,5.56],[.055,2.4,.03],et("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));ru.push(e)}for(let n=0;n<4;n++)We([3.96+n*.17,.31,5.31],[.055,.08,.6],me.dark);const Wt=_t([3.7,.1,-2.6]);Hr([0,.14,0],[3.7,.27,3.5],me.cream,Wt,.09);for(const n of[-1.55,1.55])We([n,1.76,0],[.17,3.25,.2],me.metal,Wt),We([n,.38,0],[.45,.2,.6],me.copper,Wt),Mt([n,.36,-1.2],[n,2.9,0],.045,me.copper,Wt),Mt([n,.36,1.2],[n,2.9,0],.045,me.copper,Wt);We([0,3.38,0],[3.5,.18,.26],me.copper,Wt);const Qx=Rt([0,2.7,-.5],1.83,.035,me.copper,Wt,[0,0,0]);Qx.scale.y=.85;const Wr=[];for(let n=0;n<5;n++){const e=_t([-1.18+n*.59,3.24,0],Wt),t=1.8+n*.12;Mt([0,0,-.08],[0,-t,0],.015,me.dark,e),Mt([0,0,.08],[0,-t,0],.015,me.dark,e),lt([0,-t,0],.205,me.copper,e),Rt([0,-t,0],.211,.012,me.light,e,[0,0,0]),Wr.push({group:e,len:t,phase:n})}We([0,.6,1.3],[1.45,.8,.4],me.metal,Wt);Yt("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Wt,{size:40});const jx=wt([-.43,.97,1.3],.19,.07,me.cream,Wt);jx.rotation.x=Math.PI/2;const ou=We([-.43,.99,1.342],[.015,.22,.008],me.rust,Wt);ou.rotation.z=-.7;const mf=lt([.53,.93,1.52],.09,me.light,Wt),ja=_t([.15,.4,1.59],Wt);Rt([0,0,0],.19,.023,me.rust,ja,[0,0,0]);for(let n=0;n<3;n++)Mt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,me.rust,ja);js([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,me.copper);const gf=[];function au(n,e,t=1.5){wt([n,t/2,e],.038,t,me.metal),We([n,t,e],[.27,.11,.27],me.dark),We([n,t-.18,e],[.17,.25,.17],me.light),We([n,t-.34,e],[.25,.08,.25],me.copper);const i=new Ja("#ffbe70",1.8,3);i.position.set(n,t-.16,e),gf.push(i)}au(-5.9,3.9,1.3);au(.3,-4.8,1.7);au(5.8,1.25,1.35);const an=_t([-3.6,.08,3.55]),mc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;Hr([0,.14,e],[3.6,.3,1.14],me.rust,an,.06),We([0,.305,e],[3.36,.04,.92],et(si.soil),an);for(let t=0;t<4;t++){const i=_t([-1.26+t*.84,.33,e],an);wt([0,.14,0],.026,.28,me.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=lt([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],et(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){lt([0,.17,0],[.25,.18,.25],et("#b6c58a"),i);for(let s=0;s<6;s++){const r=lt([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],me.leaf,i);r.rotation.y=s}mc.push(i)}else{const s=lt([.05,.22,0],[.1,.21,.12],et(si.purple,{roughness:.35}),i);s.rotation.z=-.25,lt([.05,.41,0],[.075,.025,.07],me.leaf,i),mc.push(i)}}}const _f=_t([-1.72,.1,.8],an);for(let n=0;n<2;n++)We([n*3.45,.6,0],[.04,1.3,.04],me.copper,_f);Mt([0,1.25,0],[3.45,1.25,0],.022,me.copper,_f);Yt("КОБАЧКИ",[-.45,.68,1.64],1,.26,an,{bg:"#c2c7a3",fg:"#445e45",size:42});wt([1.9,.23,.7],.18,.34,et("#6b9389"),an);Mt([2.04,.25,.7],[2.4,.46,.7],.045,et("#6b9389"),an);Rt([1.8,.48,.7],.16,.02,me.copper,an,[0,0,0]);We([-1.6,.2,1.47],[.65,.4,.45],me.rust,an);for(let n=0;n<3;n++)We([-1.6,.12+n*.11,1.71],[.7,.05,.025],me.copper,an);const yn=_t([-3.8,.08,.35]);wt([0,.73,0],.58,.1,me.rust,yn);wt([0,.35,0],.045,.7,me.metal,yn);for(let n=0;n<3;n++)Mt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,me.metal,yn);const Xr=_t([.1,.81,0],yn);lt([0,.2,0],[.23,.22,.23],me.cream,Xr);wt([0,.37,0],.14,.06,me.copper,Xr);lt([0,.42,0],.045,me.dark,Xr);Mt([.15,.18,0],[.33,.32,0],.07,me.cream,Xr);Rt([-.15,.25,0],.18,.035,me.dark,Xr,[0,0,0]);for(const n of[-.35,.38])wt([n,.84,.24],.082,.15,me.cream,yn),Rt([n,.92,.24],.084,.012,me.copper,yn),wt([n,.921,.24],.063,.006,et("#67513b"),yn),Rt([n+.09,.86,.24],.045,.011,me.cream,yn,[0,0,0]);const el=[];for(let n=0;n<9;n++){const e=lt([0,0,0],.07,et("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),yn);e.castShadow=!1,el.push(e)}const $n=_t([-5.65,.09,1.1]);We([0,.3,0],[.7,.6,.7],me.concrete,$n);Hr([0,.8,0],[.68,.45,.35],me.dark,$n,.05);for(let n=0;n<6;n++)We([-.2+n*.05,.8,.18],[.022,.27,.018],me.copper,$n);We([.18,.85,.184],[.16,.075,.02],me.light,$n);lt([.18,.72,.19],.05,me.cream,$n);Mt([.18,1,0],[.48,1.6,0],.012,me.copper,$n);const vf=_t([-.5,.1,-4.6]);wt([0,1.75,0],.055,3.5,me.metal,vf);lt([0,3.55,0],.09,me.copper,vf);js([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,me.dark);for(let n=0;n<8;n++){let e=n/8;const t=Ot(new ds(.13,.3,3),et(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const tl=_t([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=We([0,0,0],[.55,.09,.025],me.rust,tl);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}lt([0,0,.05],.08,me.copper,tl);const tn=_t([7.25,-.03,1.5]);We([0,-.12,0],[2.25,.3,2.5],me.metal,tn);for(let n=0;n<10;n++)We([-.99+n*.22,.08,0],[.2,.08,2.6],me.rust,tn);We([-.95,.2,-.95],[.35,.15,.35],me.dark,tn);wt([.87,.34,.75],.075,.5,me.copper,tn);wt([.87,.59,.75],.13,.05,me.cream,tn);Mt([.87,.1,-.7],[.87,2.3,-.7],.035,me.copper,tn);js([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,me.copper,tn);We([.17,2.09,-.7],[.25,.4,.25],et("#ffd591"),tn);We([.17,2.32,-.7],[.34,.08,.34],me.dark,tn);for(let n=0;n<4;n++)Rt([.87,.15,.75],.24-n*.025,.024,et("#b8ad86"),tn);We([6.7,.07,1.5],[1.4,.13,.8],me.rust);Yt("НИКУДА",[.05,.28,1.36],1.3,.29,tn,{bg:"#c2c7a3",fg:"#445e45",size:45});const lu=[];function nl(n,e,t=1){const i=_t(e,n),s=new kr;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Ot(new Js(s,{depth:.19,bevelEnabled:!1}),et("#dfc99a"),[0,.15,-.1],null,i);const r=Ot(new ds(.23,.36,3),me.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=nl(St,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);lu.push(e)}const Jn=bx({THREE:Tn,root:St,dock:tn,state:we,M:me,mat:et,group:_t,mesh:Ot,box:We,sphere:lt,cyl:wt,torus:Rt,rod:Mt,sign:Yt,paperBoat:nl,batchStatic:Nt,persist:fc,say:Pn,refresh:Vt,chime:Ai,reduced:ff}),Qe=_t([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const cu=et("#233a39",{metalness:.42,roughness:.32});lt([0,.1,0],[.62,.8,.55],cu,Qe);lt([0,-.36,.1],[.44,.43,.43],cu,Qe);lt([-.61,.03,.03],[.1,.2,.12],me.copper,Qe);lt([.61,.03,.03],[.1,.2,.12],me.copper,Qe);for(const n of[-.23,.23]){lt([n,.2,.485],[.17,.13,.057],me.black,Qe),Rt([n,.2,.541],.078,.02,me.copper,Qe,[0,0,0]),lt([n,.2,.56],.041,me.light,Qe);const e=We([n,.38,.48],[.24,.045,.06],me.cream,Qe);e.rotation.z=n>0?-.13:.13}lt([0,.04,.51],[.09,.17,.11],cu,Qe);lt([0,-.2,.44],[.31,.16,.11],me.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=Hr([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],me.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=lt([t,i,-.04],[.18,.18,.48],me.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;js([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,et("#f2edda"),Qe)}for(let n=0;n<3;n++)lt([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],me.cream,Qe);const uu=Rt([0,1.05,0],.77,.019,me.copper,Qe);uu.rotation.z=.14;const e1=new Ja("#ffbb62",.9,3);e1.position.set(0,.2,.9);const No=Rt([-.15,.26,.85],.7,.018,me.copper),Ur=Ot(new Ha(.64,32),new zr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Ur.rotation.x=-Math.PI/2;Ur.castShadow=!1;const xi=new N(-.15,1.9,.85),zn=_t([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=We([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?me.cream:me.concrete,zn);t.rotation.x=Math.PI/2-e,n%3===0&&Mt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,me.copper,zn)}for(const n of[-.45,.45])Rt([n,0,0],2.07,.025,me.copper,zn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Rt([n,0,0],1.7,.075,me.concrete,zn,[0,Math.PI/2,0]);Mt([0,-2.15,-1.2],[0,-1.58,-.8],.07,me.metal,zn);Mt([0,-2.15,1.2],[0,-1.58,.8],.07,me.metal,zn);Yt("ОБРАТНО",[.49,-.55,.2],1.15,.3,zn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Et()*20,t=-8+Et()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Ot(Qs.ico,et("#47675f"),[e,-1.3-Et()*2,t],[.22+Et()*.55,.19+Et()*.4,.27+Et()*.4])}const xf=new Bt,yf=[];for(let n=0;n<75;n++)yf.push((Et()-.5)*25,Et()*9-2,(Et()-.5)*22);xf.setAttribute("position",new gt(yf,3));const Mf=new Nd(xf,new zc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));gn.add(Mf);function Nt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new mt().multiplyMatrices(i,r.matrixWorld));let l=t.get(o);l||t.set(o,l={material:r.material,geos:[]}),l.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=Sx(o,!1);a&&Ot(a,r,null,null,n),o.forEach(l=>l.dispose())}}Nt(St,[Qe,an,Wt,yn,$n,tn,It,zn,tl,...lu,...el,...ru,No,Ur,Jn.travel]);Nt(It,[dn]);Nt(dn,[]);Nt(zn,[]);Nt(Qe,[uu]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});Nt(yn,[...el]);Nt($n,[]);Nt(tn,[Jn.gallery,Jn.beacon]);Nt(Wt,[...Wr.map(n=>n.group),ja,ou,mf]);Wr.forEach(n=>Nt(n.group,[]));const Or=_t([0,.33,0],an);mc.forEach(n=>{Or.add(n),n.position.y-=.33});Nt(Or,[]);Nt(an,[Or]);const Mn=Px({THREE:Tn,root:St,scene:gn,head:Qe,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,paperBoat:nl,batchStatic:Nt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},chime:Ai}),Si=Zx({THREE:Tn,root:St,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,mesh:Ot,sign:Yt,batchStatic:Nt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),Gi=Yf({THREE:Tn,root:St,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),bi=Xf({THREE:Tn,root:St,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),Ei=Hf({THREE:Tn,root:St,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,sign:Yt,batchStatic:Nt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),ui=Wf({THREE:Tn,root:St,M:me,mat:et,group:_t,box:We,sphere:lt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),Vi=qf({THREE:Tn,workshop:It,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,changed:()=>{Vt(),ut.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),il=Lx({THREE:Tn,scene:gn,root:St,head:Qe,M:me,mat:et,mesh:Ot,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,chime:Ai}),qr=qx({THREE:Tn,scene:gn,root:St,head:Qe,M:me,mat:et,mesh:Ot,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,paperBoat:nl,batchStatic:Nt,chime:Ai}),Dn=Xx({THREE:Tn,scene:gn,root:St,head:Qe,M:me,mat:et,mesh:Ot,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,chime:Ai,changed:()=>{Yr(),ut.shadowMap.needsUpdate=!0}}),Sf=Ix({head:Qe,group:_t,sphere:lt,box:We,torus:Rt,M:me,mat:et}),ai=kx({THREE:Tn,scene:gn,root:St,head:Qe,M:me,mat:et,mesh:Ot,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,chime:Ai,changed:()=>{Yr(),ut.shadowMap.needsUpdate=!0}}),li=Ox({THREE:Tn,scene:gn,root:St,head:Qe,M:me,mat:et,group:_t,box:We,sphere:lt,cyl:wt,rod:Mt,torus:Rt,sign:Yt,batchStatic:Nt,chime:Ai,changed:()=>{Yr(),ut.shadowMap.needsUpdate=!0}});let jt=null,pt=1;const kn={quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new N(24,.9,29.7),position:new N(24,.6,24),run:()=>Ei.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new N(-6.9,1.9,-20.1),position:new N(0,.6,-24),run:()=>ui.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new N(-17.5,1.3,3.4),position:new N(-24,.6,0),run:()=>bi.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new N(-1.4,1.5,-1.1),position:new N(-3.2,1.25,-2.2),run:()=>Vi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new N(4.7,.8,25.8),position:new N(0,.4,24),run:()=>Gi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new N(28.4,2.2,2.5),position:new N(24,.4,0),run:()=>Si.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new N(-.1,2.15,4.3),position:new N(-.1,1,4.3),run:()=>Mn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new N(-6,4.55,-3.25),position:new N(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,Ef.copy(Qe.position),Pn("ноги не понадобились"),Vt())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new N(-3.2,3.15,-2.5),position:new N(-3.2,1.1,-2.5),run:()=>{we.roof=Zs()?0:1,Pn(Zs()?"заходи":"прикрыл"),Vt()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new N(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Pn(n[t1++%n.length]),xi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new N(3.7,3.85,-2.6),position:new N(3.7,1,-2.6),run:()=>{we.running=!we.running,fc(),Pn(we.running?"ну пошло":"можно и полежать"),Vt()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new N(-3.7,1.65,.35),position:new N(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,xi.set(-2.65,1.7,.65),Pn("щас, чайник поставлю"),Vt())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new N(-3.4,1,3.8),position:new N(-3.6,1,3.55),run:()=>{we.harvest++,Bs=.15,fc(),xi.set(-1.6,1.6,2.3),Pn(we.harvest===1?"о, урожай":"кабачки опять победили"),Vt()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new N(-5.65,1.75,1.1),position:new N(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,hu(),Pn(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Vt()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new N(7.4,2.75,1.1),position:new N(7.25,.9,1.5),run:()=>{Jn.launchOrCollect(),we.dockPending===!1&&we.boat===0&&xi.set(5.85,1.7,1.05)}}};let t1=0,Bs=1,bf=0,ls=0;const Ef=new N;let wf=()=>{Yi("engine"),kn.engine.run()};const sl={};for(const[n,e]of Object.entries(kn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>Yi(n),Ae("#hotspots").append(t),sl[n]=t}const Tf=Ae("#hotspots"),Wl=Ae("#speech"),rs={width:innerWidth,height:innerHeight},n1=$x({entries:kn,elements:sl,layer:Tf,camera:Oe});let Xl=!1,Gh=NaN,Vh=NaN;const hr=new N;function Yi(n){we.selected=n,Ae("#inspector").classList.remove("collapsed");const e=kn[n];Ae("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Ae("#object-title").textContent=e.title,Ae("#object-description").textContent=e.description,wf=e.run,Ae("#focus-object").hidden=!1,Ae("#focus-object").textContent=Kt===n?"весь двор ⌂":"осмотреть ближе ⊕",Vt();for(const[t,i]of Object.entries(sl))i.classList.toggle("selected",t===n)}function Vt(){const n=we.selected,e=kn[n];if(Ae("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=Zs()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Jn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Mn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Si.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Gi.card();t=r.action,i=r.description}if(n==="bench"){const r=Vi.card();t=r.action,i=r.description}if(n==="drydock"){const r=bi.card();t=r.action,i=r.description}if(n==="dash"){const r=ui.card();t=r.action,i=r.description}if(n==="quotes"){const r=Ei.card();t=r.action,i=r.description,s=r.disabled}Ei.controls.hidden=n!=="quotes",ui.controls.hidden=n!=="dash",bi.controls.hidden=n!=="drydock",Vi.controls.hidden=n!=="bench",Gi.controls.hidden=n!=="amnesty",Si.controls.hidden=n!=="cellar",Ae("#enter-bench")&&(Ae("#enter-bench").hidden=n!=="workshop"),Ae("#enter-dream06").hidden=n!=="radio",Ae("#enter-dream05").hidden=n!=="stair",Ae("#enter-dream03").hidden=n!=="dock",Ae("#enter-dream04").hidden=n!=="workshop",Ae("#greenhouse-controls").hidden=n!=="greenhouse",Ae("#thermal-moves").hidden=Mn.inspect().mode!=="playing",Ae("#thermal-readout").textContent=`тепло ${Mn.inspect().temp} · такты ${Mn.inspect().turn}/6`,Ae("#object-description").textContent=i,Ae("#object-action").innerHTML=t+" <span>↗</span>",Ae("#object-action").disabled=s}Ae("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes"].includes(we.selected)&&dt.watching()){dt.localPlay();return}dt.localPlay(),wf(),ls=performance.now()+2200};Ae("#close-card").onclick=()=>Ae("#inspector").classList.add("collapsed");function Pn(n){Ae("#speech").textContent=n,bf=performance.now()+4e3,Ae("#speech").classList.add("visible")}Ae("#markers").onclick=()=>{we.markers=!we.markers,Ae("#markers").setAttribute("aria-pressed",we.markers),Tf.hidden=!we.markers||!!jt||Oe.zoom<.4};let Kt=null;const fn={angle:Math.PI/4,targetAngle:Math.PI/4};function Af(){rs.width=innerWidth,rs.height=innerHeight;const n=innerWidth/innerHeight,e=Jt()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(Jt()?2.8:0),Oe.bottom=-e-(Jt()?2.8:0),Oe.updateProjectionMatrix(),ut.setSize(innerWidth,innerHeight,!1),ut.setPixelRatio(Math.min(devicePixelRatio,Jt()?1.5:2))}function er(){if(dt==null||dt.unfollow(),jt){rl();return}Kt=null,document.body.classList.remove("close-look"),Ae("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Oe.zoom=1,Je.target.copy(tu),fn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Ae("#focus-object").onclick=()=>{if(we.selected){if(Kt===we.selected){er();return}Kt=we.selected,document.body.classList.add("close-look"),Ae("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(kn[we.selected].position),Jt()&&(Je.target.y+=["cellar","amnesty","drydock","dash","quotes"].includes(Kt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes"].includes(Kt)?Jt()?1.8:1.6:Jt()?2.5:2.1,Kt==="bench"?(Je.maxZoom=4.5,Oe.zoom=Jt()?3.8:3.4,Je.target.y+=Jt()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Oe.updateProjectionMatrix()}};Ae("#home").onclick=er;Ae("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Je.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Ae("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Je.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Ae("#rotate").onclick=()=>fn.targetAngle+=Math.PI/2;addEventListener("resize",Af);Af();function Rf(n,e,t=!1){jt&&rl(),er(),Je.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Ae("#inspector").classList.add("collapsed")}function i1(){Rf(0,0);const n=innerWidth/innerHeight,e=Jt()?19.6:9.6;Oe.zoom=Math.min(e*n/(ks.half*1.57),e/(ks.half*1.3)),Oe.updateProjectionMatrix()}const ks=Cx({root:St,camera:Oe,controls:Je,mobile:Jt,go:Rf,overview:i1,home:er,locationTarget:()=>["dash","quotes"].includes(Kt)&&we.selected===Kt?kn[Kt].position:null}),Hi=document.createElement("select");Hi.id="world-places";Hi.setAttribute("aria-label","Открыть место");Hi.append(new Option("места",""));for(const[n,e]of Object.entries(kn))Hi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Hi,document.querySelector("#territory-location"));Hi.onchange=()=>{const n=Hi.value;kn[n]&&(er(),Je.target.copy(kn[n].position),Yi(n),Hi.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Hh=new Qd,Wh=new be;let is=null;ut.domElement.addEventListener("pointerdown",n=>{is={x:n.clientX,y:n.clientY,time:performance.now()}});ut.domElement.addEventListener("pointerup",n=>{if(!is||Math.hypot(n.clientX-is.x,n.clientY-is.y)>7||performance.now()-is.time>550){is=null;return}if(is=null,Wh.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Hh.setFromCamera(Wh,Oe),jt)return;const e=Hh.intersectObjects([Ei.house,ui.house,bi.house,Vi.house,Gi.house,Si.house,Mn.house,Qe,Wt,an,yn,$n,tn,It,zn,Jn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Ei.house,ui.house,bi.house,Vi.house,Gi.house,Si.house,Mn.house,Qe,Wt,an,yn,$n,tn,It,zn,Jn.travel].includes(t);)t=t.parent;const i=new Map([[Ei.house,"quotes"],[ui.house,"dash"],[bi.house,"drydock"],[Vi.house,"bench"],[Gi.house,"amnesty"],[Si.house,"cellar"],[Mn.house,"greenhouse"],[Qe,"head"],[Wt,"engine"],[an,"garden"],[yn,"tea"],[$n,"radio"],[tn,"dock"],[It,"workshop"],[zn,"stair"],[Jn.travel,"dock"]]).get(t);i&&Yi(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(kn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&Yi(t)}});let wn=null;function s1(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(o),c.start(),c});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function hu(){if(!wn)return;const n=wn.ctx.currentTime;wn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),wn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}Ae("#sound").onclick=async()=>{try{wn||(wn=s1()),await wn.ctx.resume(),we.sound=!we.sound,wn.gain.gain.setTargetAtTime(we.sound?.08:0,wn.ctx.currentTime,.3),Ae("#sound").textContent=we.sound?"звук включён":"звук выключен",Ae("#sound").setAttribute("aria-pressed",we.sound),hu(),Vt()}catch{Pn("со звуком не сложилось")}};function Ai(n=330){if(!wn||!we.sound)return;const e=wn.ctx.currentTime,t=wn.ctx.createOscillator(),i=wn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(wn.gain),t.start(e),t.stop(e+1.1)}Ae("#about").onclick=()=>Ae("#about-dialog").showModal();Ae("#close-about").onclick=Ae("#back-to-yard").onclick=()=>Ae("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&jt){rl();return}n.key==="Escape"&&Ae("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Ae("#zoom-in").click(),n.key==="-"&&Ae("#zoom-out").click(),n.key.toLowerCase()==="r"&&Ae("#rotate").click(),n.key.toLowerCase()==="h"&&er()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{dt.localPlay(),Mn.step(n.dataset.thermal),ls=performance.now()+2200};const r1={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function du(){return pt===1?Mn:pt===2?il:pt===3?qr:pt===4?Dn:pt===5?ai:li}function Yr(){const n=pt===1?Mn.inspect().dreamStep:du().inspect().step,e=r1[pt];if(Ae("#dream-cloud").hidden=pt!==6,Ae("#dream-force").hidden=pt!==3,Ae("#dream-roofs").hidden=pt!==4,Ae("#dream-meter").hidden=pt!==5,Ae("#dream-panel .object-kicker").textContent=`СОН 0${pt} / БЕЗНОГИМ`,Ae("#dream-panel h2").textContent=e.title,Ae("#dream-text").textContent=pt===6?li.text():pt===5?ai.text():pt===4?Dn.text():e.lines[n],Ae("#dream-breathe").textContent=pt===6?li.button():pt===5?ai.button():pt===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Ae("#dream-breathe").disabled=pt===6&&["heating","raining"].includes(li.inspect().phase)||pt===4&&Dn.inspect().phase==="flying"||pt===5&&["measuring","unfolding","climbing"].includes(ai.inspect().phase),pt===6){const t=li.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(pt===5){const t=ai.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(pt===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function ms(n=1){jt||(pt=n,jt={target:Je.target.clone(),zoom:Oe.zoom,angle:fn.targetAngle,focused:Kt,returnId:n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},du().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,Jt()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?Jt()?1.65:1.75:Jt()?1.45:1.55,Oe.updateProjectionMatrix(),fn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6),Ta="",Ae("#dream-panel").hidden=!1,Yr(),ut.shadowMap.needsUpdate=!0)}function rl(){if(!jt)return;const n=jt;jt=null,du().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Oe.zoom=n.zoom,fn.targetAngle=n.angle,Kt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Ta="",Ae("#dream-panel").hidden=!0,ut.shadowMap.needsUpdate=!0,Yi(n.returnId)}Ae("#enter-dream").onclick=()=>ms(1);Ae("#exit-dream").onclick=rl;Ae("#dream-breathe").onclick=()=>{pt===1?Mn.breathe():pt===2?il.pour():pt===3?qr.toss():pt===4?Dn.send():pt===5?ai.act():li.act(),ls=performance.now()+2200,Yr(),ut.shadowMap.needsUpdate=!0};const Zr=document.createElement("button");Zr.id="enter-bench";Zr.hidden=!0;Zr.textContent="собрать механический монитор ↗";Zr.onclick=()=>{Yi("bench"),Ae("#focus-object").click()};Ae("#focus-object").before(Zr);const ol=document.createElement("button");ol.id="enter-dream02";ol.textContent="сон 02 / вода спит ↗";ol.onclick=()=>ms(2);Si.controls.append(ol);Ae("#enter-dream03").onclick=()=>ms(3);Ae("#enter-dream04").onclick=()=>ms(4);Ae("#enter-dream06").onclick=()=>ms(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>li.choose(n.dataset.cloudTarget);Ae("#enter-dream05").onclick=()=>ms(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>ai.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),ls=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{qr.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Ae("#dream-archive").onclick=()=>Ae("#dream-archive-dialog").showModal();Ae("#close-dream-archive").onclick=()=>Ae("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Ae("#dream-archive-dialog").close(),ms(Number(n.dataset.dreamId))};const dt=wx({head:Qe,headDestination:xi,state:we,controls:Je,camera:Oe,refresh:Vt,setAudioTone:hu,say:Pn,onHarvest:()=>{Bs=.15}});let ql="";const Cf=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Cf.push(new N(n,e,t));const Pf=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])Pf.push(new N(n,e,t));const Lf=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])Lf.push(new N(n,e,t));const If=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])If.push(new N(n,e,t));function o1(){const n=Kt==="quotes"&&we.selected==="quotes",e=Kt==="dash"&&we.selected==="dash",t=Kt==="drydock"&&we.selected==="drydock"||e||n,i=(Kt==="bench"&&we.selected==="bench"||t)&&!Ae("#inspector").classList.contains("collapsed")&&!jt;if(document.body.classList.toggle("quotes-look",i&&n),document.body.classList.toggle("dash-look",i&&(e||n)),document.body.classList.toggle("bench-look",i&&!t),document.body.classList.toggle("drydock-look",i&&t),!i){ql="";return}if(Math.abs(fn.angle-fn.targetAngle)>.01)return;const s=Ae("#inspector").getBoundingClientRect(),r=Ae(".territory-nav").getBoundingClientRect(),o=Ae(".toolbar").getBoundingClientRect(),a=innerWidth<=900&&innerHeight>innerWidth,l=a?{left:14,right:o.left-10,top:r.bottom+14,bottom:s.top-14}:{left:Math.max(s.right+18,r.right+18),right:o.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!a&&(l.left=r.right+12,l.right=innerWidth-16,l.top=o.bottom+10,l.bottom=s.top-10),(e||n)&&innerWidth<=900&&!a&&(l.left=12,l.right=s.left-12,l.top=r.bottom+10,l.bottom=Ae("footer").getBoundingClientRect().top-12);const c=Ae(".resident-history");t&&innerWidth>900&&c&&!c.hidden&&(l.right=Math.min(l.right,c.getBoundingClientRect().left-18));const u=[n?15:e?14:t?13:12,innerWidth,innerHeight,l.left,l.right,l.top,l.bottom,fn.targetAngle].map(M=>Math.round(M*10)/10).join(":");if(u===ql||l.bottom-l.top<35||l.right-l.left<50)return;ql=u;const p=()=>{Oe.updateMatrixWorld();const M=(n?Pf:e?Lf:t?If:Cf).map(E=>hn(E.clone()));return{l:Math.min(...M.map(E=>E.x)),r:Math.max(...M.map(E=>E.x)),t:Math.min(...M.map(E=>E.y)),b:Math.max(...M.map(E=>E.y))}};let h=p();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((l.right-l.left)/(h.r-h.l),(l.bottom-l.top)/(h.b-h.t))),Oe.updateProjectionMatrix(),h=p();const d=(l.left+l.right-h.l-h.r)/2,g=(l.top+l.bottom-h.t-h.b)/2,v=new N().setFromMatrixColumn(Oe.matrixWorld,0),m=new N().setFromMatrixColumn(Oe.matrixWorld,1),f=v.multiplyScalar(-d*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(m.multiplyScalar(g*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(f),Oe.position.add(f),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Ta="";const Df=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Df.push(new N(n,e,t));const Nf=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Nf.push(new N(n,e,t));function a1(){if(!jt||![4,5,6].includes(pt))return;const n=Ae("#dream-panel").getBoundingClientRect(),e=Ae("footer").getBoundingClientRect(),t=Ae(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(fn.angle*100)].join(":");if(o===Ta||r.right-r.left<60||r.bottom-r.top<80)return;Ta=o;const a=()=>{Oe.updateMatrixWorld();const g=(pt===5?Df:Nf).map(v=>hn(v.clone()));return{l:Math.min(...g.map(v=>v.x)),r:Math.max(...g.map(v=>v.x)),t:Math.min(...g.map(v=>v.y)),b:Math.max(...g.map(v=>v.y))}};let l=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(l.r-l.l),(r.bottom-r.top)/(l.b-l.t))),Oe.updateProjectionMatrix(),l=a();const c=(r.left+r.right-l.l-l.r)/2,u=(r.top+r.bottom-l.t-l.b)/2,p=new N().setFromMatrixColumn(Oe.matrixWorld,0),h=new N().setFromMatrixColumn(Oe.matrixWorld,1),d=p.multiplyScalar(-c*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(d),Oe.position.add(d),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Xh=performance.now(),Ao=0,qh=0;function hn(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function l1(){dt.sync();const n=performance.now(),e=(n-Xh)/1e3;Xh=n,Ao+=e,we.energy=vn.damp(we.energy,we.running?1:0,1.6,e);const t=ff?Ao*.2:Ao;fn.angle=vn.damp(fn.angle,fn.targetAngle,5,e);const i=160;Oe.position.set(Je.target.x+Math.sin(fn.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(fn.angle)*i),Oe.lookAt(Je.target),Je.update(),jt||(Je.target.x=vn.clamp(Je.target.x,-62,ks.half+2),Je.target.z=vn.clamp(Je.target.z,-62,ks.half+2)),ks.update(),o1(),a1();for(const s of Wr)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(dn.position.z=vn.damp(dn.position.z,Zs()?-2.5:0,2,e),dn.position.y=vn.damp(dn.position.y,Zs()?.4:0,2,e),ja.rotation.z=t*we.energy*.28,ou.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,mf.material.emissiveIntensity=.45+we.energy*1.5,pc.uniforms.uTime.value=t,pc.uniforms.uEnergy.value=we.energy,tl.rotation.z=t*(.09+we.energy*.23),gf.forEach(s=>s.intensity=.65+we.energy*1.5),su.intensity=2+we.energy*4,Qe.position.x=vn.damp(Qe.position.x,xi.x,1.6,e),Qe.position.z=vn.damp(Qe.position.z,xi.z,1.6,e),Qe.position.y=vn.damp(Qe.position.y,xi.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=vn.smoothstep(s,0,2);Qe.position.lerpVectors(Ef,new N(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=vn.smoothstep(s,10,12);Qe.position.lerpVectors(new N(-6,.65,-3.25),xi,r),Qe.rotation.x=(1-r)*Math.PI*2}we.loop||(Qe.rotation.x=0,Pn("ну вот и дома"),Vt())}if(dt.place(),Qe.rotation.y=Math.sin(t*.3)*.12,uu.rotation.y=t*.13,No.position.x=Qe.position.x,No.position.z=Qe.position.z,No.rotation.z=.04*Math.sin(t),Ur.position.x=Qe.position.x,Ur.position.z=Qe.position.z,Bs=vn.damp(Bs,1,.85,e),Or.scale.y=Bs,Or.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Pn("чай готов. живём."),Vt(),Ai(440))),el.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),lu.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),Sf.update(dt.watching()),il.update(e,t),qr.update(e,t),Dn.update(e,t),ai.update(e,t),li.update(e,t),Ei.update(e),ui.update(e),bi.update(e),Vi.update(e),dn.visible=!(Kt==="bench"&&we.selected==="bench"&&!Ae("#inspector").classList.contains("collapsed")&&!jt),Gi.update(e),Si.update(Ao),Mn.update(e,t),Jn.update(e,t),Xl!==we.dockPending&&(Xl=we.dockPending,sl.dock.classList.toggle("waiting",Xl)),ru.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),Mf.rotation.y=t*.003,we.running&&t-qh>3.5&&(qh=t,Ai([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),n1.update(!jt&&Oe.zoom>=.4&&we.markers,rs.width,rs.height),jt||n>bf)Wl.classList.contains("visible")&&Wl.classList.remove("visible");else{hr.copy(Qe.position),hr.y+=1.52,hr.project(Oe);const s=Math.round(Math.max(85,Math.min(rs.width-85,(hr.x+1)*rs.width*.5))*10)/10,r=Math.round((1-hr.y)*rs.height*.5*10)/10;(s!==Gh||r!==Vh)&&(Gh=s,Vh=r,Wl.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}ls&&performance.now()>ls&&(ut.shadowMap.needsUpdate=!0,ls=0),ut.render(gn,Oe)}we.running&&(Ae("#object-action").innerHTML="остановить двор <span>↗</span>");Vt();ut.setAnimationLoop(l1);requestAnimationFrame(()=>Ae("#loading").classList.add("done"));window.__yard={state:we,select:Yi,inspect:()=>({resident:dt.inspect(),territory:ks.inspect(),sleepBody:Sf.inspect(),sleepDream:il.inspect(),quietDream:qr.inspect(),cloudDream:li.inspect(),cloudDreamScreen:li.inspect().landmarks.map(n=>hn(new N(...n))),meterDream:ai.inspect(),meterDreamScreen:ai.inspect().landmarks.map(n=>hn(new N(...n))),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>hn(new N(...n))),roofDreamLetterScreen:hn(new N(...Dn.inspect().letter)),dreamId:jt?pt:null,quotes:Ei.inspect(),quoteScreens:Ei.inspect().quotePositions.map(n=>hn(new N(...n).add(new N(24,-1.05,24)))),dash:ui.inspect(),dashSnailScreen:hn(new N(...ui.inspect().snail).add(new N(0,-1,-24))),dashBeamScreen:hn(new N(...ui.inspect().beam).add(new N(0,-1.5,-24))),drydock:bi.inspect(),drydockShipScreen:hn(new N(...bi.inspect().ship).add(new N(-24,-.5,0))),bench:Vi.inspect(),benchScreen:hn(new N(-2.65,1.58,-3.18)),benchBucketScreen:hn(new N(-4.75,1.51,-3.63)),roofVisible:dn.visible,amnesty:Gi.inspect(),amnestyScreen:hn(new N(0,-.3,24)),cellar:Si.inspect(),cellarScreen:hn(new N(24,-.3,.25)),objects:Object.keys(kn),greenhouse:Mn.inspect(),dock:Jn.inspect(),boatScreen:hn(new N(...Jn.inspect().boat).add(new N(0,.2,0))),drawCalls:ut.info.render.calls,triangles:ut.info.render.triangles,gpuGeometries:ut.info.memory.geometries,zoom:Oe.zoom,target:Je.target.toArray(),angle:fn.angle,head:Qe.position.toArray(),roof:dn.position.toArray(),roofOpen:Zs(),roofMode:we.roof===null?"auto":"manual",pendulums:Wr.map(n=>n.group.rotation.x),growth:Bs,meshes:(()=>{let n=0;return gn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ut.domElement.width,ut.domElement.height]})};Jx();
