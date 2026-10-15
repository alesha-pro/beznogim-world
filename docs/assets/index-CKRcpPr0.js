(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Zr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function ll(n){const e=n.state||{},t=(u,f,h,p)=>Number.isFinite(u)?Math.max(f,Math.min(h,Math.floor(u))):p,i=t(e.planted,0,3,0),s=Math.min(2,i),r=Zr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let l=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",l={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")l={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:Zr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),l={ok:!0};else if(!["slide","plant"].includes(n.tool))l={ok:!1,reason:"unknown_tool"};else if(a.planted===3)l={ok:!1,reason:"complete"};else if(n.tool==="slide"){const f={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(f,u.direction))l={ok:!1,reason:"invalid_arguments"};else{const[h,p]=f[u.direction],g=a.positions[u.piece];let v=g%5,m=Math.floor(g/5);for(;v+h>=0&&v+h<5&&m+p>=0&&m+p<5&&!r.rocks.includes((m+p)*5+v+h)&&(m+p)*5+v+h!==a.positions[1-u.piece];)v+=h,m+=p;const d=m*5+v;a.positions[u.piece]=d,d!==g?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",l={ok:d!==g,from:g,to:d,reason:d===g?"blocked":"slid"}}}else a.positions.some((f,h)=>f!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",l={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=Zr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",l={ok:!0,trees:a.planted*2})}const c=Zr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:c.rocks,goals:c.goals,size:5},result:l,seconds:n.tool==="plant"?40:15,label:n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function kf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:f,watching:h,localPlay:p}){var P,X,Z;const g=s([24,-1.5,24],e);g.name="quote-nursery";const v=i("#94c1c0",{roughness:.34}),m=i("#274644"),d=i("#f2e3b9"),M=i("#dfaf57"),w=i("#c7674e"),y=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,g),r([0,.17,1.5],[7.25,.14,7.25],m,g);const S=V=>[(V%5-2)*1.35,.46,(Math.floor(V/5)-2)*1.35+1.5],b=[];for(let V=0;V<25;V++){const[F,,Y]=S(V);b.push(r([F,.27,Y],[1.27,.12,1.27],v,g))}const R=Array.from({length:6},()=>{const V=s([0,0,0],g);return r([0,.24,0],[1.05,.42,1.05],t.concrete,V),r([0,.49,0],[.9,.08,.9],t.metal,V),V}),_=[1,3].map((V,F)=>{const Y=S(V),se=s([Y[0],.4,Y[2]],g);return r([0,-.02,0],[1.23,.07,1.23],F?w:M,se),r([0,.025,0],[1.03,.04,1.03],d,se),c(F?"»":"«",[0,.14,.38],.72,.55,se,{size:105}),se});function A(V){const F=s(S(V?24:20),g);for(let Y=0;Y<2;Y++){const se=(Y-.5)*.34,O=V?-1:1;l([se+O*.22,.92,0],[se-O*.16,.5,0],.065,V?w:M,F),l([se-O*.16,.5,0],[se+O*.22,.08,0],.065,V?w:M,F)}return r([0,-.07,0],[.98,.09,.5],t.metal,F),F}const T=[A(0),A(1)],I=T.map(V=>r([0,-.13,0],[1.1,.04,.67],d,V));for(const V of[-3.9,0,3.9])r([V,.75,-2.05],[.18,1.25,.18],t.copper,g),r([V,1.39,-2.05],[.32,.12,.32],d,g);for(const V of[-2.8,2.8])r([V,.8,-2.05],[1.85,.14,.14],t.copper,g);const B=Array.from({length:6},(V,F)=>{const Y=s([-3.5+F%3*3.5,.3,-3.5-Math.floor(F/3)*1.9],g);a([0,.45,0],.12,.9,t.copper,Y);for(let se=0;se<3;se++){const O=new n.Mesh(new n.ConeGeometry(.87-se*.17,1.3,5),y);O.position.y=.95+se*.56,O.castShadow=!0,Y.add(O)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,Y),Y});c("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,g,{size:44}),c("СЕВЕР",[0,1.52,-2.05],1.45,.33,g,{size:60});for(let V=0;V<23;V++)r([24,-1.42,6.6+V*.54],[1,.13,.43],t.cream,e);u(g,[...R,...T,..._,...B]);let W=null,N=((Z=(X=(P=window.__beznogimState)==null?void 0:P.mechanics)==null?void 0:X.quotes)==null?void 0:Z.public)||null,k,q="",G="",Q=0,H="",$=0,K=Array(6).fill(0),ce=[null,null];try{W=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function fe(V,F,Y={}){const se=ll({mode:V,tool:F,args:Y,state:W});W=se.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(W))}catch{}return se}fe("migrate");const xe=document.createElement("div");xe.id="quotes-controls",xe.hidden=!0,xe.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(xe);const we=()=>N&&h()?N:ll({mode:"migrate",state:W}).public;function ie(V,F={}){if($>0)return;p(),H="";const Y=fe("action",V,F);return q="",re(0),f(),Y}for(const V of xe.querySelectorAll("[data-quote]"))V.onclick=()=>{Q=Number(V.dataset.quote),H="",ee()};for(const V of xe.querySelectorAll("[data-slide]"))V.onclick=()=>ie("slide",{piece:Q,direction:V.dataset.slide});xe.querySelector("#quotes-pair").onclick=()=>ie("restart",{scope:"pair"});function z(V){if(V.phase==="complete")return null;const F=[[V.positions,[]]],Y=new Set([V.positions.join(",")]);for(let se=0;se<F.length;se++){const[O,te]=F[se];if(O.every((ge,Me)=>ge===V.goals[Me]))return te;for(let ge=0;ge<2;ge++)for(const Me of["north","east","south","west"]){const U=ll({mode:"action",tool:"slide",args:{piece:ge,direction:Me},state:{...V,positions:O}}),Ne=U.state.positions.join(",");Y.has(Ne)||(Y.add(Ne),F.push([U.state.positions,[...te,{piece:ge,direction:Me}]]))}}return null}xe.querySelector("#quotes-hint").onclick=()=>{const V=z(we());H=V!=null&&V.length?`${V[0].piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[V[0].direction]} · осталось ходов: ${V.length}`:V?"Обе на месте. Выпускай.":"Здесь застряли. Верни пару на старт.",ee()};function ee(){if(k){xe.querySelector("#quotes-readout").textContent=`пара ${k.level}/3 · ели ${k.trees}/6 · ходы ${k.moves}`,xe.querySelector("#quotes-hint-text").textContent=H;for(const V of xe.querySelectorAll("[data-quote]"))V.setAttribute("aria-pressed",Number(V.dataset.quote)===Q);for(const V of xe.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))V.disabled=$>0||k.phase==="complete";I.forEach((V,F)=>V.visible=F===Q&&k.phase!=="complete")}}function de(V){const F=N&&h()?"resident":"sandbox",Y=k,se=!Y||Y.run!==V.run||F!==G;G=F,se?(T.forEach((O,te)=>O.position.set(...S(V.positions[te]))),K=B.map((O,te)=>te<V.trees?1:0),ce=[null,null],$=0):V.planted>Y.planted?($=1.4,ce=T.map((O,te)=>({from:O.position.clone(),to:B[(V.planted-1)*2+te].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):V.planted!==Y.planted&&(K=B.map((O,te)=>te<V.trees?1:0)),k=V,R.forEach((O,te)=>{if(O.visible=te<V.rocks.length,O.visible){const ge=S(V.rocks[te]);O.position.set(ge[0],.3,ge[2])}}),ee()}function re(V){V=Math.min(.1,Math.max(0,V));const F=we(),Y=(N&&h()?"resident:":"sandbox:")+JSON.stringify(F);Y!==q&&(q=Y,de(F),f());const se=$>0;$=Math.max(0,$-V);for(let O=0;O<2;O++){const te=T[O],ge=ce[O];if(ge&&$>0)ge.t=Math.min(1,ge.t+V/1.4),te.position.lerpVectors(ge.from,ge.to,ge.t*ge.t*(3-2*ge.t)),te.position.y+=Math.sin(ge.t*Math.PI)*.9,te.scale.setScalar(1-ge.t*.8);else{ce[O]=null,te.scale.setScalar(1);const Me=S(F.positions[O]);te.position.x=n.MathUtils.damp(te.position.x,Me[0],12,V),te.position.y=.46,te.position.z=n.MathUtils.damp(te.position.z,Me[2],12,V)}te.visible=!!ce[O]||F.phase!=="complete"}B.forEach((O,te)=>{const ge=te<F.trees?1:0;K[te]=n.MathUtils.damp(K[te],ge,$>0?1:5,V),O.visible=K[te]>.003,O.scale.setScalar(Math.max(.001,K[te]))}),se&&$===0&&(ee(),f())}const C=()=>({action:N&&h()?"попробовать свои ёлочки":k.phase==="complete"?"новый питомник ↺":$>0?"пролезают…":"выпустить пару",description:(N&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+k.message,disabled:$>0});return window.addEventListener("beznogim:state",({detail:V})=>{var Y,se;const F=(se=(Y=V.mechanics)==null?void 0:Y.quotes)==null?void 0:se.public;F&&(N=F)}),de(we()),q=(N&&h()?"resident:":"sandbox:")+JSON.stringify(we()),re(0),{house:g,controls:xe,update:re,card:C,run:()=>ie(k.phase==="complete"?"restart":"plant",k.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:N&&h()?"resident":"sandbox",...k,busy:$,selected:Q,hint:H,quotePositions:T.map(V=>V.position.toArray()),treeScales:K.slice(),visibleTrees:B.filter(V=>V.visible).length})}}function Tu(n){const e=n.state||{},t=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function Gf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:l,sign:c,batchStatic:u,changed:f,watching:h,localPlay:p}){var ee,de,re;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const v=i("#28464d"),m=i("#eee4c9"),d=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],d,g);const M=s([0,0,0],g),w=s([0,0,0],g);for(const[C,P]of[[M,"ОТ"],[w,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,C),r([0,1.32,0],[2.12,.12,3.3],m,C),c(P,[0,.9,1.66],1,.36,C,{size:60});const y=s([0,1.43,0],g),S=s([0,0,0],y),b=s([0,0,0],y),R=r([-.5,0,0],[1,.15,.56],v,S),_=r([.5,0,0],[1,.15,.56],v,b),A=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),T=s([0,1.47,0],g);T.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,T),o([-.08,.46,0],[.39,.42,.29],t.copper,T),l([-.08,.47,.3],.23,.033,m,T,[0,0,0]),l([-.08,.47,.315],.12,.03,m,T,[0,0,0]);for(const C of[-.13,.13])a([.4,.17,C],[.62,.46,C],.02,t.leaf,T),o([.62,.46,C],[.055,.065,.055],v,T);r([-.16,.92,0],[.46,.32,.065],m,T),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,T),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,T);const I=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,I);const B=[".","?","!"].map((C,P)=>{const X=s([-1.1+P*1.1,.42,0],I);return r([0,0,0],[.8,.65,.11],m,X),c(C,[0,.02,.075],.55,.5,X,{size:100}),X});c("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const W=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,W);for(let C=-4;C<=4;C++)r([C,.07,0],[.035,.025,.26],v,W),c(String(C),[C,.08,.32],.4,.28,W,{size:45});for(let C=0;C<16;C++)r([1.5,-.1-C*.09,-5.9-C*.72],[1.05,.14,.65],t.cream,e);for(let C=0;C<8;C++)r([1.5,-1.45,-17.6-C*.5],[1.05,.14,.45],t.cream,e);const N=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,N),r([0,2.7,0],[.8,.14,.8],t.metal,N),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),N),u(T,[]),u(M,[]),u(w,[]),u(g,[M,w,y,...A,T,I]);let k=null,q=((re=(de=(ee=window.__beznogimState)==null?void 0:ee.mechanics)==null?void 0:de.dash)==null?void 0:re.public)||null,G,Q="",H=1,$=0;try{k=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function K(C,P,X={}){const Z=Tu({mode:C,tool:P,args:X,state:k});k=Z.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(k))}catch{}return Z}K("migrate");const ce=document.createElement("div");ce.id="dash-controls",ce.hidden=!0,ce.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(C,P)=>`<option value="${P+1}">${P+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(C=>`<option value="${C}">${C>0?"+":""}${C}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(ce);const fe=()=>q&&h()?q:Tu({mode:"migrate",state:k}).public;function xe(C,P){p(),K("action",C,P),Q="",ie(0),f()}ce.querySelector("#dash-tune").onclick=()=>xe("tune",{span:Number(ce.querySelector("#dash-span").value),shift:Number(ce.querySelector("#dash-shift").value)}),ce.querySelector("#dash-reset").onclick=()=>xe("reset");function we(C){const P=["delivered","complete"].includes(C.phase);P?!G||G.run!==C.run||G.round!==C.round?H=1:["delivered","complete"].includes(G.phase)||(H=0):H=0,G=C,ce.querySelector("#dash-readout").textContent=`почта ${C.delivered}/3 · пролёт ${C.gap} · центр ${C.center>0?"+":""}${C.center} · попытки ${C.attempts}`,ce.querySelector("#dash-span").value=C.span,ce.querySelector("#dash-shift").value=C.shift;for(const X of ce.querySelectorAll("select,#dash-tune"))X.disabled=P;M.position.x=C.center-C.gap/2-1,w.position.x=C.center+C.gap/2+1,A[0].position.x=C.center-C.gap/2,A[1].position.x=C.center+C.gap/2,y.position.x=C.shift,R.scale.x=_.scale.x=C.span/2,R.position.x=-C.span/4,_.position.x=C.span/4,B.forEach((X,Z)=>X.visible=Z<C.delivered)}function ie(C){const P=fe(),X=JSON.stringify(P);X!==Q&&(Q=X,we(P),f()),H=["delivered","complete"].includes(P.phase)?Math.min(1,H+C/4):0,$=n.MathUtils.damp($,P.phase==="bent"?.22:0,6,C),S.rotation.z=$,b.rotation.z=-$,y.position.y=1.43-Math.sin($)*P.span/2,T.position.x=M.position.x+(w.position.x-M.position.x)*(H*H*(3-2*H)),T.position.y=1.47,T.rotation.z=H>0&&H<1?Math.sin(H*30)*.025:0}const z=()=>{const C=G||fe();return{action:q&&h()?"попробовать свою почту":C.phase==="complete"?"новая почта ↺":C.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(q&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+C.message}};return window.addEventListener("beznogim:state",({detail:C})=>{var X,Z;const P=(Z=(X=C.mechanics)==null?void 0:X.dash)==null?void 0:Z.public;P&&(q=P)}),we(fe()),Q=JSON.stringify(fe()),T.position.x=H===1?w.position.x:M.position.x,{house:g,controls:ce,update:ie,card:z,run:()=>{if(H>0&&H<1)return;const C=fe().phase;xe(C==="complete"?"reset":C==="delivered"?"next":"cross")},inspect:()=>({source:q&&h()?"resident":"sandbox",...G,walk:H,bend:$,snail:T.position.toArray(),beam:y.position.toArray(),left:M.position.x,right:w.position.x,stamps:B.map(C=>C.visible)})}}function Au(n){const e=n.state||{},t=(o,a,l,c)=>Number.isFinite(o)?Math.max(a,Math.min(l,Math.floor(o))):c,i={depths:[0,0,0].map((o,a)=>{var l;return t((l=e.depths)==null?void 0:l[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Vf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:f,changed:h,watching:p,localPlay:g}){var de,re,C;const v=s([-24,-1.5,0],e);v.name="sandbox-drydock";const m=i("#d0b987"),d=i("#556f7f"),M=i("#a65d42"),w=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,v),r([0,.2,0],[15.7,.12,9.7],t.dark,v),r([.5,.38,0],[12.6,.26,3.9],t.dark,v);for(const P of[-2,2])r([.5,.96,P],[12.9,1.1,.22],t.copper,v);for(const P of[-6,7])r([P,.96,0],[.22,1.1,4.1],t.copper,v);const y=Array.from({length:3},(P,X)=>r([-4+X*2,.98,0],[1.9,1,3.7],m,v)),S=r([.5,.54,0],[12.6,.04,3.75],w,v);S.castShadow=!1;const b=Array.from({length:3},(P,X)=>{const Z=s([-4+X*2,.35,3.05],v);for(let V=0;V<5;V++)o([(V-2)*.27,.16+V%2*.1,0],[.32,.22,.4],m,Z);return Z}),R=s([-2,1.3,0],v);R.name="sandbox-cargo-ship";const _=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([P,X],Z)=>Z?_.lineTo(P,-X):_.moveTo(P,-X)),_.closePath();const A=new n.ExtrudeGeometry(_,{depth:.67,bevelEnabled:!1});A.rotateX(-Math.PI/2);const T=new n.Mesh(A,d);T.castShadow=!0,T.receiveShadow=!0,R.add(T),r([-.45,.7,0],[4.9,.09,1.4],t.cream,R);for(let P=0;P<3;P++){r([-.95+P*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][P],R);for(const X of[-.601,.601])for(let Z=0;Z<4;Z++)r([-.95+P*.92-.3+Z*.2,1.03,X],[.024,.5,.025],t.dark,R)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,R),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,R);for(const P of[-.63,.63])r([-2.25,1.6,P],[.73,.16,.03],t.dark,R);a([-2.45,1.98,0],.15,.43,M,R),a([-2.45,2.21,0],.15,.05,t.dark,R),l([2.3,.77,0],[2.3,1.9,0],.035,t.metal,R),r([2.55,1.7,0],[.48,.26,.03],t.cream,R);for(const P of[-2.9,2.1])for(const X of[-.7,.7])l([P,.7,X],[P,1,X],.025,t.cream,R);for(const P of[-.7,.7])l([-2.9,1,P],[2.1,1,P],.025,t.cream,R);const I=s([5.9,1.1,3.4],v);c([0,0,0],.4,.04,t.copper,I,[0,0,0]);for(let P=0;P<4;P++){const X=P*Math.PI/2;l([0,0,0],[.4*Math.cos(X),.4*Math.sin(X),0],.025,t.copper,I)}l([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,v),l([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,v);const B=r([5.9,.8,1.75],[.19,.55,.19],w,v);B.castShadow=!1;const W=s([0,.29,0],v);for(const P of[-2.9,2.9])r([.5,0,P],[13,.02,1.1],w,W);for(let P=0;P<3;P++)u(["КОРМА","ТРЮМ","НОС"][P],[-4+P*2,.7,2.15],1.55,.28,v,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,v,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,v,{size:42});for(const P of[-6.6,6.6])l([P,.3,-3.8],[P,3.6,-3.8],.08,t.metal,v),r([P,3.6,-3.5],[.55,.16,.8],t.metal,v),r([P,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),v);for(let P=0;P<15;P++)r([-7.2-P*.72,-.03-P*.09,1.2],[.65,.14,1.12],t.cream,e);const N=s([-6.5,.5,3.3],v);l([0,0,0],[0,1.5,0],.045,t.copper,N),r([0,.1,0],[.32,.35,.08],t.metal,N),c([0,1.53,0],.1,.025,t.metal,N,[0,0,0]),f(R,[]),f(v,[...y,...b,S,R,I,B,W]);let k=null,q=((C=(re=(de=window.__beznogimState)==null?void 0:de.mechanics)==null?void 0:re.drydock)==null?void 0:C.public)||null,G,Q="",H=0,$=0,K=0;try{k=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function ce(P,X,Z={}){const V=Au({mode:P,tool:X,args:Z,state:k});k=V.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(k))}catch{}return V}ce("migrate");const fe=document.createElement("div");fe.id="drydock-controls",fe.hidden=!0,fe.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(fe);function xe(){return q&&p()?q:Au({mode:"migrate",state:k}).public}function we(P,X){g(),ce("action",P,X),Q="",ee(0),h()}fe.querySelectorAll("[data-dig]").forEach(P=>P.onclick=()=>we("dig",{channel:Number(P.dataset.dig)})),fe.querySelector("#drydock-fill").onclick=()=>we("pump",{direction:"fill"}),fe.querySelector("#drydock-drain").onclick=()=>we("pump",{direction:"drain"}),fe.querySelector("#drydock-reset").onclick=()=>we("reset");function ie(P){G?(G.water!==P.water&&(H=2),G.floods!==P.floods&&($=3),!G.launched&&P.launched&&(K=0)):K=P.launched?1:0,G=P,fe.querySelector("#drydock-readout").textContent=`каналы ${P.depths.join(" / ")} · вода ${P.water}/2 · переливы ${P.floods}`,fe.querySelectorAll("[data-dig]").forEach(X=>{X.disabled=P.launched||P.water>0||P.depths[Number(X.dataset.dig)]===2}),fe.querySelector("#drydock-fill").disabled=P.launched,fe.querySelector("#drydock-drain").disabled=P.launched||P.water===0,y.forEach((X,Z)=>{const V=1-P.depths[Z]*.4;X.scale.y=V,X.position.y=.48+V/2,b[Z].scale.setScalar(.45+P.depths[Z]*.4)}),S.visible=P.water>0,S.position.y=.49+P.water*.39}function z(){const P=G||xe();return{action:q&&p()?"попробовать свой спуск":P.launched?"корабль в песок ↺":"спустить корабль",description:(q&&p()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+P.message}}function ee(P){const X=xe(),Z=JSON.stringify(X);Z!==Q&&(Q=Z,ie(X),h()),H=Math.max(0,H-P),$=Math.max(0,$-P),B.visible=H>0&&X.water>0,W.visible=$>0,I.rotation.z+=H>0?P*3:0,K=X.launched?Math.min(1,K+P/5):0;const V=K*K*(3-2*K);R.position.x=-2+V*5.6;const F=Math.min(...X.depths),Y=X.afloat?.94:1.15-F*.32;R.position.y=n.MathUtils.damp(R.position.y,Y,4,P),R.rotation.z=n.MathUtils.damp(R.rotation.z,X.afloat?0:(X.depths[2]-X.depths[0])*.085,4,P)}return window.addEventListener("beznogim:state",({detail:P})=>{var Z,V;const X=(V=(Z=P.mechanics)==null?void 0:Z.drydock)==null?void 0:V.public;X&&(q=X,Q="")}),ie(xe()),R.position.x=xe().launched?3.6:-2,{house:v,controls:fe,update:ee,card:z,run:()=>we(xe().launched?"reset":"launch"),inspect:()=>({source:q&&p()?"resident":"sandbox",...G,ship:R.position.toArray(),pitch:R.rotation.z,waterY:S.position.y,voyage:K,sandHeights:y.map(P=>P.scale.y),floodVisible:W.visible})}}function Ru(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Hf({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,changed:f,watching:h,localPlay:p}){var fe,xe,we;const g=s([0,0,0],e);g.name="mechanical-bench";const v=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],v,g),l([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const d=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let ie=0;ie<7;ie++)for(let z=0;z<9;z++)M.push(r([.55+(z-4)*.145,1.5+(3-ie)*.14,-.683],[.13,.12,.02],m,g));const w=s([-1.05,1.24,-.38],g);w.name="core-gear",a([0,0,0],.3,.11,t.copper,w).rotation.x=Math.PI/2;const y=[];for(let ie=0;ie<12;ie++){const z=ie/12*Math.PI*2;let ee=r([Math.cos(z)*.33,Math.sin(z)*.33,0],[.13,.13,.12],t.copper,w);ee.rotation.z=z,y.push(ee)}c([0,0,.06],.13,.025,t.dark,w,[0,0,0]);const S=s([-.4,1.12,-.38],g);c([0,0,0],.19,.035,t.dark,S,[0,0,0]),l([-.2,0,0],[.2,0,0],.025,t.metal,S);const b=s([0,0,0],g);l([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,b),l([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,b);const R=s([-1.5,1,-.05],g);l([0,0,0],[.23,0,0],.04,t.metal,R),l([.23,0,0],[.23,.23,0],.04,t.copper,R),o([.23,.23,0],.08,t.rust,R);const _=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,_),a([0,.281,0],.29,.015,t.dark,_),c([0,.29,0],.33,.025,t.copper,_),c([0,.36,0],.33,.025,t.metal,_,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const A=Array.from({length:3},(ie,z)=>o([.17+z*.3,2.23,-.82],.06,t.mint,g));let T=null,I=((we=(xe=(fe=window.__beznogimState)==null?void 0:fe.mechanics)==null?void 0:xe.bench)==null?void 0:we.public)||null,B,W="",N=0;try{T=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function k(ie,z,ee={}){const de=Ru({mode:ie,tool:z,args:ee,state:T});T=de.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(T))}catch{}return de}k("migrate");const q=document.createElement("div");q.id="bench-controls",q.hidden=!0,q.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(q);function G(){return I&&h()?I:Ru({mode:"migrate",state:T}).public}function Q(ie,z){p(),k("action",ie,z),W="",ce(0),f()}q.querySelectorAll("[data-part]").forEach(ie=>ie.onclick=()=>Q("fit",{part:ie.dataset.part,value:Number(ie.dataset.value)})),q.querySelector("#bench-salvage").onclick=()=>Q("salvage"),q.querySelector("#bench-restart").onclick=()=>Q("restart");function H(ie){B&&B.attempts!==ie.attempts&&(N=3),B=ie,q.querySelector("#bench-readout").textContent=`экран ${ie.round+1}/3 · скорость ${ie.speed} / нужно ${ie.target}`,q.querySelectorAll("[data-part]").forEach(z=>{z.setAttribute("aria-pressed",String(ie[z.dataset.part]===Number(z.dataset.value))),z.disabled=ie.phase!=="ready"}),q.querySelector("#bench-salvage").disabled=!ie.bucket,v.color.set(ie.picture?"#16362c":"#e9e4cc"),v.emissive.set(ie.picture?"#20382b":"#e9e4cc"),v.emissiveIntensity=ie.picture?.1:.6,M.forEach((z,ee)=>z.visible=!!ie.picture&&d[ie.picture-1][ee]==="1"),y.forEach((z,ee)=>z.visible=ee<ie.core*3),S.scale.setScalar(.75+ie.belt*.25),b.visible=!ie.bucket,A.forEach((z,ee)=>z.visible=ee<ie.repairs)}const $={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function K(){const ie=B||G();return{action:I&&h()?"собрать свой монитор":ie.phase==="ejected"?"достать ядро":ie.phase==="repaired"?ie.round===2?"закончить работу":"следующий экран":ie.phase==="complete"?"ещё раз":"крутить рукоятку",description:(I&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+$[ie.phase]}}function ce(ie){const z=G(),ee=JSON.stringify(z);ee!==W&&(W=ee,H(z),f()),N=Math.max(0,N-ie);const de=Math.min(1,ie*7),re=z.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];w.position.lerp(new n.Vector3(...re),de),w.rotation.x=n.MathUtils.lerp(w.rotation.x,z.bucket?-Math.PI/2:0,de);const C=N>0?z.core*2:z.picture?.4:0;w.rotation.z+=ie*C,S.rotation.z-=ie*C*z.belt,R.rotation.z+=ie*C}return window.addEventListener("beznogim:state",({detail:ie})=>{var ee,de;const z=(de=(ee=ie.mechanics)==null?void 0:ee.bench)==null?void 0:de.public;z&&(I=z,W="")}),H(G()),w.position.set(...G().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:q,update:ce,card:K,run:()=>{const ie=G();Q(ie.phase==="ejected"?"salvage":ie.phase==="repaired"?"next":ie.phase==="complete"?"restart":"crank")},inspect:()=>({source:I&&h()?"resident":"sandbox",...B,corePosition:w.position.toArray(),coreAngle:w.rotation.z,driveAngle:S.rotation.z,litPixels:M.filter(ie=>ie.visible).length})}}const Cu=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function Pu(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Lu(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):Pu();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const l=n.args||{},c=n.tool;if(c==="restart")Object.assign(e,Pu(e.run+1));else if(c==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(c==="load")!Number.isInteger(l.index)||l.index<0||l.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[l.index]=!e.loaded[l.index],e.status="idle");else if(c==="amnesty")e.pardoned=!0,e.status="idle";else if(c==="dispatch"){const u=Cu[e.round],f=u.weights.reduce((h,p,g)=>h+(e.loaded[g]?p+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,f!==u.target?(e.status=f<u.target?"under":"over",i={ok:!1,reason:e.status,total:f,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,p)=>{e.loaded[p]&&e.delivered.push({id:`${e.run}:${e.round}:${p}`,weight:h})}),i={ok:!0,total:f,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Cu[e.round],r=s.weights.map((l,c)=>l+(e.pardoned?0:s.debt[c])),o=r.reduce((l,c,u)=>l+(e.loaded[u]?c:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Wf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:f,changed:h,watching:p,localPlay:g}){var z,ee,de;const v=s([0,-1.5,24]);v.name="amnesty-bureau";const m=i("#9d8560"),d=i("#a1b56f"),M=i("#f1d29a"),w=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],w,v),r([3.65,-.14,0],[3.3,.5,7],w,v),r([0,-.8,0],[4.2,.1,6.7],t.dark,v);for(const re of[-4.9,4.9])l([re,0,-3],[re,3.3,-3],.06,t.copper,v);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,v,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,v,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,v);const y=s([0,.2,1.15],v);for(let re=0;re<11;re++)r([-2+re*.4,0,0],[.38,.16,1.65],m,y);for(const re of[-.72,.72])l([-2.2,.22,re],[2.2,.22,re],.045,t.copper,y);a([0,-.22,1.15],.32,.6,t.metal,v);const S=s([-2.55,.32,1.15],v);r([0,.12,0],[1.5,.18,1.35],t.metal,S);for(const re of[-.52,.52])for(const C of[-.58,.58]){const P=c([re,0,C],.17,.05,t.dark,S,[0,0,0]);P.rotation.y=Math.PI/2}const b=s([-4.7,.8,1.4],v);l([0,-.5,0],[0,.2,0],.1,t.metal,b);const R=s([0,0,0],b);l([0,0,0],[0,.8,0],.065,t.copper,R),o([0,.8,0],.14,t.rust,R),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,v,{size:35});const _=s([.1,.1,-2.3],v);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const A=a([0,.7,0],.57,1.1,t.copper,_);c([0,1.28,0],.25,.045,t.dark,_);const T=Array.from({length:3},(re,C)=>o([1.75+C*.34,2.15,-3.05],.095,t.mint,v)),I=Array.from({length:3},(re,C)=>{const P=s([-3.6,.72,-2.1+C*1.08],v),X=o([0,0,0],[.28,.23,.57],d,P);X.rotation.z=.1,l([0,0,-.5],[.05,.12,-.68],.045,t.leaf,P);const Z=s([.45,.28,0],P);return r([0,0,0],[.29,.57,.4],M,Z),r([0,0,.21],[.18,.045,.012],t.rust,Z),{g:P,tax:Z}});u("A",[-4.35,.75,-2.1],.28,.28,v),u("B",[-4.35,.75,-1.02],.28,.28,v),u("C",[-4.35,.75,.06],.28,.28,v),r([3.55,.8,-1.7],[2.75,.13,2.2],m,v);const B=Array.from({length:6},(re,C)=>o([2.75+C%3*.7,1,-2.1+Math.floor(C/3)*.83],[.2,.19,.38],d,v));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,v,{size:39});const W=s([0,0,0],e);for(let re=0;re<15;re++){const C=re/14;r([-.6+Math.sin(C*Math.PI)*1.5,-1.55,17+re*.3],[.9,.12,.65],w,W)}for(let re=0;re<5;re++)r([-.8-re*.6,-1.55,21.5],[.75,.12,.75],w,W);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,W,{size:35}),l([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,W),f(W,[]),f(v,[y,S,b,_,...I.map(re=>re.g),...B,...T]),f(y,[]),f(S,[]);let N=null,k=((de=(ee=(z=window.__beznogimState)==null?void 0:z.mechanics)==null?void 0:ee.amnesty)==null?void 0:de.public)||null,q,G="",Q=0;try{N=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function H(re,C,P={}){const X=Lu({state:N,mode:re,tool:C,args:P});N=X.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(N))}catch{}return X}H("migrate");const $=document.createElement("div");$.id="amnesty-controls",$.hidden=!0,$.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before($);function K(){return k&&p()?k:Lu({state:N,mode:"migrate"}).public}function ce(re,C){g(),H("action",re,C),G="",ie(0),h()}for(const re of $.querySelectorAll("[data-load]"))re.onclick=()=>ce("load",{index:Number(re.dataset.load)});$.querySelector("#amnesty-pardon").onclick=()=>ce("amnesty"),$.querySelector("#amnesty-restart").onclick=()=>ce("restart");const fe={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function xe(re){q=re;const C=re.status==="delivered"||re.status==="complete";$.querySelector("#amnesty-readout").textContent=`рейс ${re.round+1}/3 · груз ${re.total} / нужно ${re.target}`,$.querySelectorAll("[data-load]").forEach((P,X)=>{P.textContent=`${["A","B","C"][X]} · ${re.weights[X]}${re.debt[X]?` + ${re.debt[X]} бумага`:""}`,P.setAttribute("aria-pressed",String(re.loaded[X])),P.disabled=C}),$.querySelector("#amnesty-pardon").disabled=re.pardoned||C,$.querySelector("#amnesty-pardon").textContent=re.pardoned?"налог отменён":"отменить налог",A.scale.y=re.target/4,T.forEach((P,X)=>P.visible=X<(re.status==="complete"?3:re.round)),B.forEach((P,X)=>P.visible=X<re.delivered.length),I.forEach((P,X)=>{P.tax.visible=!re.pardoned||Q<.99,P.g.visible=!C||!re.loaded[X],P.g.scale.setScalar(.8+re.weights[X]*.08)})}function we(){const re=q||K();return{action:k&&p()?"войти в свою амнистию":re.status==="delivered"?"следующий рейс":re.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(k&&p()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+fe[re.status]}}function ie(re,C){const P=K(),X=JSON.stringify(P);X!==G&&(G=X,xe(P),h());const Z=P.status==="delivered"||P.status==="complete",V=(F,Y)=>n.MathUtils.lerp(F,Y,Math.min(1,re*5));y.rotation.z=V(y.rotation.z,P.tilt),S.position.x=V(S.position.x,Z?3:-2.55),R.rotation.z=V(R.rotation.z,P.pardoned?-.65:0),Q=V(Q,P.pardoned?1:0),I.forEach(F=>{F.tax.position.y=.28+Q*2.5,F.tax.rotation.z=Q*.8,F.tax.visible=!P.pardoned||Q<.99}),B.forEach((F,Y)=>F.visible=Y<P.delivered.length-(Z&&S.position.x<2.9?2:0)),I.forEach((F,Y)=>{const se=P.loaded[Y];F.g.visible=!Z||!se||S.position.x<2.9,F.g.position.x=V(F.g.position.x,se?S.position.x+(Y-1)*.42:-3.6),F.g.position.y=V(F.g.position.y,se?.86:.72),F.g.position.z=V(F.g.position.z,se?1.15:-2.1+Y*1.08)})}return window.addEventListener("beznogim:state",({detail:re})=>{var P,X;const C=(X=(P=re.mechanics)==null?void 0:P.amnesty)==null?void 0:X.public;C&&(k=C,G="")}),Q=K().pardoned?1:0,xe(K()),{house:v,controls:$,update:ie,card:we,run:()=>ce(q.status==="delivered"?"next":q.status==="complete"?"restart":"dispatch"),inspect:()=>({source:k&&p()?"resident":"sandbox",...q,bridgeTilt:y.rotation.z,cartX:S.position.x,cargoPositions:I.map(re=>re.g.position.toArray()),taxVisible:I.map(re=>re.tax.visible),paperY:I.map(re=>re.tax.position.y),handleAngle:R.rotation.z,deliveredVisible:B.filter(re=>re.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="186",xi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xh=0,ql=1,qh=2,Ns=1,Yh=2,Ls=3,Vi=0,fn=1,Pn=2,li=0,Us=1,Yl=2,Zl=3,$l=4,Zh=5,is=100,$h=101,Jh=102,Kh=103,Qh=104,jh=200,ed=201,td=202,nd=203,pc=204,mc=205,id=206,sd=207,rd=208,od=209,ad=210,ld=211,cd=212,ud=213,hd=214,Io=0,No=1,Uo=2,Bs=3,Fo=4,Oo=5,zo=6,Bo=7,gc=0,dd=1,fd=2,Zn=0,_c=1,vc=2,xc=3,Aa=4,yc=5,Mc=6,Sc=7,bc=300,Hi=301,ls=302,To=303,Ao=304,Ur=306,br=1e3,oi=1001,ko=1002,Zt=1003,pd=1004,hr=1005,Qt=1006,Ro=1007,Fi=1008,vn=1009,Ec=1010,wc=1011,ks=1012,Ra=1013,Kn=1014,In=1015,Qn=1016,Ca=1017,Pa=1018,Gs=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,Nn=1023,ui=1026,Oi=1027,La=1028,Da=1029,Wi=1030,Ia=1031,Na=1033,mr=33776,gr=33777,_r=33778,vr=33779,Go=35840,Vo=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,$o=37489,Er=37490,Jo=37491,Ko=37808,Qo=37809,jo=37810,ea=37811,ta=37812,na=37813,ia=37814,sa=37815,ra=37816,oa=37817,aa=37818,la=37819,ca=37820,ua=37821,ha=36492,da=36494,fa=36495,pa=36283,ma=36284,wr=36285,ga=36286,md=3200,_a=0,gd=1,gi="",on="srgb",Tr="srgb-linear",Ar="linear",xt="srgb",Co=7680,_d=519,vd=512,xd=513,yd=514,Ua=515,Md=516,Sd=517,Fa=518,bd=519,Ed=35044,Jl="300 es",Yn=2e3,Vs=2001;function Xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wd(){const n=va("canvas");return n.style.display="block",n}const Du={};function Kl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Td(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=Td(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ut(...n){n=Td(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function os(...n){const e=n.join(" ");e in Du||(Du[e]=!0,je(...n))}function qf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Yf={[Io]:No,[Uo]:zo,[Fo]:Bo,[Bs]:Oo,[No]:Io,[zo]:Uo,[Bo]:Fo,[Oo]:Bs};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iu=1234567;const xr=Math.PI/180,Rr=180/Math.PI;function us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Pc(n,e){return(n%e+e)%e}function Zf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $f(n,e,t){return n!==e?(t-n)/(e-n):0}function yr(n,e,t){return(1-t)*n+t*e}function Jf(n,e,t,i){return yr(n,e,1-Math.exp(-t*i))}function Kf(n,e=1){return e-Math.abs(Pc(n,e*2)-e)}function Qf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ep(n,e){return n+Math.floor(Math.random()*(e-n+1))}function tp(n,e){return n+Math.random()*(e-n)}function np(n){return n*(.5-Math.random())}function ip(n){n!==void 0&&(Iu=n);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sp(n){return n*xr}function rp(n){return n*Rr}function op(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ap(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gn={DEG2RAD:xr,RAD2DEG:Rr,generateUUID:us,clamp:rt,euclideanModulo:Pc,mapLinear:Zf,inverseLerp:$f,lerp:yr,damp:Jf,pingpong:Kf,smoothstep:Qf,smootherstep:jf,randInt:ep,randFloat:tp,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:op,ceilPowerOfTwo:ap,floorPowerOfTwo:lp,setQuaternionFromProperEuler:cp,normalize:cn,denormalize:Ps},hu=class hu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hu.prototype.isVector2=!0;let be=hu;class Ei{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(f!==v||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*v;m<0&&(h=-h,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+v*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+v*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const du=class du{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};du.prototype.isVector3=!0;let D=du;const cl=new D,Nu=new Ei,fu=class fu{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],M=s[1],w=s[4],y=s[7],S=s[2],b=s[5],R=s[8];return r[0]=o*v+a*M+l*S,r[3]=o*m+a*w+l*b,r[6]=o*d+a*y+l*R,r[1]=c*v+u*M+f*S,r[4]=c*m+u*w+f*b,r[7]=c*d+u*y+f*R,r[2]=h*v+p*M+g*S,r[5]=h*m+p*w+g*b,r[8]=h*d+p*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ul.makeScale(e,t)),this}rotate(e){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fu.prototype.isMatrix3=!0;let tt=fu;const ul=new tt,Uu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){const n={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Tr]:{primaries:e,whitePoint:i,transfer:Ar,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const lt=up();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gs;class Ad{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gs===void 0&&(gs=va("canvas")),gs.width=e.width,gs.height=e.height;const s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class Oa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ad.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let dp=0;const dl=new D;class en extends Ti{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=oi,s=oi,r=Qt,o=Fi,a=Nn,l=vn,c=en.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=us(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dl).x}get height(){return this.source.getSize(dl).y}get depth(){return this.source.getSize(dl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=bc;en.DEFAULT_ANISOTROPY=1;const pu=class pu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(p+1)/2,S=(d+1)/2,b=(u+h)/4,R=(f+v)/4,_=(g+m)/4;return w>y&&w>S?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=R/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pu.prototype.isVector4=!0;let It=pu;class Rd extends Ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Rd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lc extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cd extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wa=class wa{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Li.crossVectors(i,Sn),Li.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Li.crossVectors(i,Sn)),Li.normalize(),$r.crossVectors(Sn,Li),s[0]=Li.x,s[4]=$r.x,s[8]=Sn.x,s[1]=Li.y,s[5]=$r.y,s[9]=Sn.y,s[2]=Li.z,s[6]=$r.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],M=i[3],w=i[7],y=i[11],S=i[15],b=s[0],R=s[4],_=s[8],A=s[12],T=s[1],I=s[5],B=s[9],W=s[13],N=s[2],k=s[6],q=s[10],G=s[14],Q=s[3],H=s[7],$=s[11],K=s[15];return r[0]=o*b+a*T+l*N+c*Q,r[4]=o*R+a*I+l*k+c*H,r[8]=o*_+a*B+l*q+c*$,r[12]=o*A+a*W+l*G+c*K,r[1]=u*b+f*T+h*N+p*Q,r[5]=u*R+f*I+h*k+p*H,r[9]=u*_+f*B+h*q+p*$,r[13]=u*A+f*W+h*G+p*K,r[2]=g*b+v*T+m*N+d*Q,r[6]=g*R+v*I+m*k+d*H,r[10]=g*_+v*B+m*q+d*$,r[14]=g*A+v*W+m*G+d*K,r[3]=M*b+w*T+y*N+S*Q,r[7]=M*R+w*I+y*k+S*H,r[11]=M*_+w*B+y*q+S*$,r[15]=M*A+w*W+y*G+S*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],M=l*p-c*h,w=a*p-c*f,y=a*h-l*f,S=o*p-c*u,b=o*h-l*u,R=o*f-a*u;return t*(v*M-m*w+d*y)-i*(g*M-m*S+d*b)+s*(g*w-v*S+d*R)-r*(g*y-v*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],M=t*a-i*o,w=t*l-s*o,y=t*c-r*o,S=i*l-s*a,b=i*c-r*a,R=s*c-r*l,_=u*v-f*g,A=u*m-h*g,T=u*d-p*g,I=f*m-h*v,B=f*d-p*v,W=h*d-p*m,N=M*W-w*B+y*I+S*T-b*A+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=(a*W-l*B+c*I)*k,e[1]=(s*B-i*W-r*I)*k,e[2]=(v*R-m*b+d*S)*k,e[3]=(h*b-f*R-p*S)*k,e[4]=(l*T-o*W-c*A)*k,e[5]=(t*W-s*T+r*A)*k,e[6]=(m*y-g*R-d*w)*k,e[7]=(u*R-h*y+p*w)*k,e[8]=(o*B-a*T+c*_)*k,e[9]=(i*T-t*B-r*_)*k,e[10]=(g*b-v*y+d*M)*k,e[11]=(f*y-u*b-p*M)*k,e[12]=(a*A-o*I-l*_)*k,e[13]=(t*I-i*A+s*_)*k,e[14]=(v*w-g*S-m*M)*k,e[15]=(u*S-f*w+h*M)*k,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,v=o*u,m=o*f,d=a*f,M=l*c,w=l*u,y=l*f,S=i.x,b=i.y,R=i.z;return s[0]=(1-(v+d))*S,s[1]=(p+y)*S,s[2]=(g-w)*S,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(h+d))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=_s.set(s[0],s[1],s[2]).length();const a=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const c=1/o,u=1/a,f=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Vs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Yn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Vs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};wa.prototype.isMatrix4=!0;let pt=wa;const _s=new D,Vn=new pt,fp=new D(0,0,0),pp=new D(1,1,1),Li=new D,$r=new D,Sn=new D,Ou=new pt,zu=new Ei;class wi{constructor(e=0,t=0,i=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mp=0;const Bu=new D,vs=new Ei,hi=new pt,Jr=new D,er=new D,gp=new D,_p=new Ei,ku=new D(1,0,0),Gu=new D(0,1,0),Vu=new D(0,0,1),Hu={type:"added"},vp={type:"removed"},xs={type:"childadded",child:null},fl={type:"childremoved",child:null};class zt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new D,t=new wi,i=new Ei,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new tt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(er,Jr,this.up):hi.lookAt(Jr,er,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(hi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hu),xs.child=e,this.dispatchEvent(xs),xs.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hu),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zi extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Pc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=pl(o,r,e+1/3),this.g=pl(o,r,e),this.b=pl(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=on){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Pd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return lt.workingToColorSpace(rn.copy(this),e),Math.round(rt(rn.r*255,0,255))*65536+Math.round(rt(rn.g*255,0,255))*256+Math.round(rt(rn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(rn.copy(this),t);const i=rn.r,s=rn.g,r=rn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=on){lt.workingToColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,s=rn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Kr);const i=yr(Di.h,Kr.h,t),s=yr(Di.s,Kr.s,t),r=yr(Di.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ot;ot.NAMES=Pd;class Ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ld extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new D,di=new D,ml=new D,fi=new D,ys=new D,Ms=new D,Wu=new D,gl=new D,_l=new D,vl=new D,xl=new It,yl=new It,Ml=new It;class Ln{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),di.subVectors(i,t),ml.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(di),l=Hn.dot(ml),c=di.dot(di),u=di.dot(ml),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return xl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),xl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),di.subVectors(e,t),Hn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Hn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ms.subVectors(r,i),gl.subVectors(e,i);const l=ys.dot(gl),c=Ms.dot(gl);if(l<=0&&c<=0)return t.copy(i);_l.subVectors(e,s);const u=ys.dot(_l),f=Ms.dot(_l);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ys,o);vl.subVectors(e,r);const p=ys.dot(vl),g=Ms.dot(vl);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ms,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Wu.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Wu,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),jr.subVectors(this.max,tr),Ss.subVectors(e.a,tr),bs.subVectors(e.b,tr),Es.subVectors(e.c,tr),Ii.subVectors(bs,Ss),Ni.subVectors(Es,bs),Ki.subVectors(Ss,Es);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-Ki.z,Ki.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,Ki.z,0,-Ki.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-Ki.y,Ki.x,0];return!Sl(t,Ss,bs,Es,jr)||(t=[1,0,0,0,1,0,0,0,1],!Sl(t,Ss,bs,Es,jr))?!1:(eo.crossVectors(Ii,Ni),t=[eo.x,eo.y,eo.z],Sl(t,Ss,bs,Es,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],Wn=new D,Qr=new Yi,Ss=new D,bs=new D,Es=new D,Ii=new D,Ni=new D,Ki=new D,tr=new D,jr=new D,eo=new D,Qi=new D;function Sl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gt=new D,to=new be;let yp=0;class Fn extends Ti{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ed,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Dc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ic extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Mp=new Yi,nr=new D,bl=new D;class Zi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(bl)),this.expandByPoint(nr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sp=0;const An=new pt,El=new zt,ws=new D,bn=new Yi,ir=new Yi,Yt=new D;class Bt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Ic:Dc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(bn.min,ir.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,ir.max),bn.expandByPoint(Yt)):(bn.expandByPoint(ir.min),bn.expandByPoint(ir.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(e,c),Yt.add(ws)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new D,l[_]=new D;const c=new D,u=new D,f=new D,h=new be,p=new be,g=new be,v=new D,m=new D;function d(_,A,T){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,T),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,T),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[_].add(v),a[A].add(v),a[T].add(v),l[_].add(m),l[A].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){const T=M[_],I=T.start,B=T.count;for(let W=I,N=I+B;W<N;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new D,y=new D,S=new D,b=new D;function R(_){S.fromBufferAttribute(s,_),b.copy(S);const A=a[_];w.copy(A),w.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(b,A);const I=y.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,A=M.length;_<A;++_){const T=M[_],I=T.start,B=T.count;for(let W=I,N=I+B;W<N;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Fn(h,u,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new D,bp=new D,Ep=new tt;class ri{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wl.subVectors(i,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ep.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let wp=0;class $i extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Us,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new D,Tl=new D,no=new D,io=new D;class Ys{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Tl.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),io.copy(this.origin).sub(Tl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=io.dot(this.direction),l=-io.dot(no),c=io.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Tl).addScaledVector(no,h),p}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,p=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,d=i.x-o.x,M=i.y-o.y,w=i.z-o.z,y=Math.abs(l),S=Math.abs(c),b=Math.abs(u);let R,_,A,T,I,B,W,N,k,q,G,Q;if(y>=S&&y>=b?(A=l,B=f,k=g,Q=d,l>=0?(R=c,_=u,T=h,I=p,W=v,N=m,q=M,G=w):(R=u,_=c,T=p,I=h,W=m,N=v,q=w,G=M)):S>=b?(A=c,B=h,k=v,Q=M,c>=0?(R=u,_=l,T=p,I=f,W=m,N=g,q=w,G=d):(R=l,_=u,T=f,I=p,W=g,N=m,q=d,G=w)):(A=u,B=p,k=m,Q=w,u>=0?(R=l,_=c,T=f,I=h,W=g,N=v,q=d,G=M):(R=c,_=l,T=h,I=f,W=v,N=g,q=M,G=d)),A===0)return null;const H=R/A,$=_/A,K=1/A,ce=T-H*B,fe=I-$*B,xe=W-H*k,we=N-$*k,ie=q-H*Q,z=G-$*Q,ee=ie*we-z*xe,de=ce*z-fe*ie,re=xe*fe-we*ce;if(s){if(ee<0||de<0||re<0)return null}else if((ee<0||de<0||re<0)&&(ee>0||de>0||re>0))return null;const C=ee+de+re;if(C===0)return null;const P=K*(ee*B+de*k+re*Q);return(C>0?P<0:P>0)?null:this.at(P/C,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fr extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xu=new pt,ji=new Ys,so=new Zi,qu=new D,ro=new D,oo=new D,ao=new D,Al=new D,lo=new D,Yu=new D,co=new D;class pn extends zt{constructor(e=new Bt,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Al.fromBufferAttribute(f,e),o?lo.addScaledVector(Al,u):lo.addScaledVector(Al.sub(t),u))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(so.containsPoint(ji.origin)===!1&&(ji.intersectSphere(so,qu)===null||ji.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,S=w;y<S;y+=3){const b=a.getX(y),R=a.getX(y+1),_=a.getX(y+2);s=uo(this,d,e,i,c,u,f,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=uo(this,o,e,i,c,u,f,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=M,S=w;y<S;y+=3){const b=y,R=y+1,_=y+2;s=uo(this,d,e,i,c,u,f,b,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const M=m,w=m+1,y=m+2;s=uo(this,o,e,i,c,u,f,M,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Tp(n,e,t,i,s,r,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ro),n.getVertexPosition(l,oo),n.getVertexPosition(c,ao);const u=Tp(n,e,t,i,ro,oo,ao,Yu);if(u){const f=new D;Ln.getBarycoord(Yu,ro,oo,ao,f),s&&(u.uv=Ln.getInterpolatedAttribute(s,a,l,c,f,new be)),r&&(u.uv1=Ln.getInterpolatedAttribute(r,a,l,c,f,new be)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};Ln.getNormal(ro,oo,ao,h.normal),u.face=h,u.barycoord=f}return u}class Nc extends en{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Zt,u=Zt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new pt,Zu=new pt,ho=[],$u=new Yi,Ap=new pt,sr=new pn,rr=new Zi;class jl extends pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ap)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),$u.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union($u)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),rr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(i),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Zu.multiplyMatrices(i,Ts),sr.matrixWorld=Zu,sr.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Nc(new Float32Array(s*this.count),s,this.count,La,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const es=new Zi,Rp=new be(.5,.5),fo=new D;class ka{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],M=r[12],w=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,p-u,d-g,S-M).normalize(),s[1].setComponents(c+o,p+u,d+g,S+M).normalize(),s[2].setComponents(c+a,p+f,d+v,S+w).normalize(),s[3].setComponents(c-a,p-f,d-v,S-w).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,d-m,S-y).normalize();else if(s[4].setComponents(c-l,p-h,d-m,S-y).normalize(),t===Yn)s[5].setComponents(c+l,p+h,d+m,S+y).normalize();else if(t===Vs)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Rp.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uc extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new D,ya=new D,Ju=new pt,or=new Ys,po=new Zi,Rl=new D,Ku=new D;class Cp extends zt{constructor(e=new Bt,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xa.fromBufferAttribute(t,s-1),ya.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xa.distanceTo(ya);e.setAttribute("lineDistance",new mt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Ju.copy(s).invert(),or.copy(e.ray).applyMatrix4(Ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),M=u.getX(v+1),w=mo(this,e,or,l,d,M,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=mo(this,e,or,l,v,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=mo(this,e,or,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=mo(this,e,or,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(xa.fromBufferAttribute(a,s),ya.fromBufferAttribute(a,r),t.distanceSqToSegment(xa,ya,Rl,Ku)>i)return;Rl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Rl);if(!(c<e.near||c>e.far))return{distance:c,point:Ku.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Fc extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new pt,ec=new Ys,go=new Zi,_o=new D;class Dd extends zt{constructor(e=new Bt,t=new Fc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Qu.copy(s).invert(),ec.copy(e.ray).applyMatrix4(Qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,v=p;g<v;g++){const m=c.getX(g);_o.fromBufferAttribute(f,m),ju(_o,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,v=p;g<v;g++)_o.fromBufferAttribute(f,g),ju(_o,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ju(n,e,t,i,s,r,o){const a=ec.distanceSqToPoint(n);if(a<t){const l=new D;ec.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Oc extends en{constructor(e=[],t=Hi,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zc extends en{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends en{constructor(e,t,i=Kn,s,r,o,a=Zt,l=Zt,c,u=ui,f=1){if(u!==ui&&u!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Id extends Hs{constructor(e,t=Kn,i=Hi,s,r,o=Zt,a=Zt,l,c=ui){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bc extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ai extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function g(v,m,d,M,w,y,S,b,R,_,A){const T=y/R,I=S/_,B=y/2,W=S/2,N=b/2,k=R+1,q=_+1;let G=0,Q=0;const H=new D;for(let $=0;$<q;$++){const K=$*I-W;for(let ce=0;ce<k;ce++){const fe=ce*T-B;H[v]=fe*M,H[m]=K*w,H[d]=N,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[d]=b>0?1:-1,u.push(H.x,H.y,H.z),f.push(ce/R),f.push(1-$/_),G+=1}}for(let $=0;$<_;$++)for(let K=0;K<R;K++){const ce=h+K+k*$,fe=h+K+k*($+1),xe=h+(K+1)+k*($+1),we=h+(K+1)+k*$;l.push(ce,fe,we),l.push(fe,xe,we),Q+=6}a.addGroup(p,Q,A),p+=Q,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ga extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,u=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Or extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const v=[],m=i/2;let d=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(p,2));function M(){const y=new D,S=new D;let b=0;const R=(t-e)/i;for(let _=0;_<=r;_++){const A=[],T=_/r,I=T*(t-e)+e;for(let B=0;B<=s;B++){const W=B/s,N=W*l+a,k=Math.sin(N),q=Math.cos(N);S.x=I*k,S.y=-T*i+m,S.z=I*q,f.push(S.x,S.y,S.z),y.set(k,R,q).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-T),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){const T=v[A][_],I=v[A+1][_],B=v[A+1][_+1],W=v[A][_+1];(e>0||A!==0)&&(u.push(T,I,W),b+=3),(t>0||A!==r-1)&&(u.push(I,B,W),b+=3)}c.addGroup(d,b,0),d+=b}function w(y){const S=g,b=new be,R=new D;let _=0;const A=y===!0?e:t,T=y===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),g++;const I=g;for(let B=0;B<=s;B++){const N=B/s*l+a,k=Math.cos(N),q=Math.sin(N);R.x=A*q,R.y=m*T,R.z=A*k,f.push(R.x,R.y,R.z),h.push(0,T,0),b.x=k*.5+.5,b.y=q*.5*T+.5,p.push(b.x,b.y),g++}for(let B=0;B<s;B++){const W=S+B,N=I+B;y===!0?u.push(N,N+1,W):u.push(N+1,N,W),_+=3}c.addGroup(d,_,y===!0?1:2),d+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends Or{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Va extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new D,y=new D,S=new D;for(let b=0;b<t.length;b+=3)p(t[b+0],w),p(t[b+1],y),p(t[b+2],S),l(w,y,S,M)}function l(M,w,y,S){const b=S+1,R=[];for(let _=0;_<=b;_++){R[_]=[];const A=M.clone().lerp(y,_/b),T=w.clone().lerp(y,_/b),I=b-_;for(let B=0;B<=I;B++)B===0&&_===b?R[_][B]=A:R[_][B]=A.clone().lerp(T,B/I)}for(let _=0;_<b;_++)for(let A=0;A<2*(b-_)-1;A++){const T=Math.floor(A/2);A%2===0?(h(R[_][T+1]),h(R[_+1][T]),h(R[_][T])):(h(R[_][T+1]),h(R[_+1][T+1]),h(R[_+1][T]))}}function c(M){const w=new D;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){const M=new D;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const y=m(M)/2/Math.PI+.5,S=d(M)/Math.PI+.5;o.push(y,1-S)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const w=o[M+0],y=o[M+2],S=o[M+4],b=Math.max(w,y,S),R=Math.min(w,y,S);b>.9&&R<.1&&(w<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function p(M,w){const y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const M=new D,w=new D,y=new D,S=new D,b=new be,R=new be,_=new be;for(let A=0,T=0;A<r.length;A+=9,T+=6){M.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),b.set(o[T+0],o[T+1]),R.set(o[T+2],o[T+3]),_.set(o[T+4],o[T+5]),S.copy(M).add(w).add(y).divideScalar(3);const I=m(S);v(b,T+0,M,I),v(R,T+2,w,I),v(_,T+4,y,I)}}function v(M,w,y,S){S<0&&M.x===1&&(o[w]=M.x-1),y.x===0&&y.z===0&&(o[w]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.vertices,e.indices,e.radius,e.detail)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new be:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,s=[],r=[],o=[],a=new D,l=new pt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(rt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ha extends jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nd extends Ha{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const eh=new D,th=new D,Cl=new kc,Pl=new kc,Ll=new kc;class Gc extends jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(th.subVectors(s[0],s[1]).add(s[0]),c=th);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(eh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=eh),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Cl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,m),Pl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,m),Ll.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Pl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ll.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Cl.calc(l),Pl.calc(l),Ll.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Pp(n,e){const t=1-n;return t*t*e}function Lp(n,e){return 2*(1-n)*n*e}function Dp(n,e){return n*n*e}function Mr(n,e,t,i){return Pp(n,e)+Lp(n,t)+Dp(n,i)}function Ip(n,e){const t=1-n;return t*t*t*e}function Np(n,e){const t=1-n;return 3*t*t*n*e}function Up(n,e){return 3*(1-n)*n*n*e}function Fp(n,e){return n*n*n*e}function Sr(n,e,t,i,s){return Ip(n,e)+Np(n,t)+Up(n,i)+Fp(n,s)}class Vc extends jn{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ud extends jn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Sr(e,s.x,r.x,o.x,a.x),Sr(e,s.y,r.y,o.y,a.y),Sr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hc extends jn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fd extends jn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wc extends jn{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xc extends jn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Mr(e,s.x,r.x,o.x),Mr(e,s.y,r.y,o.y),Mr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qc extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(nh(a,l.x,c.x,u.x,f.x),nh(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var Ma=Object.freeze({__proto__:null,ArcCurve:Nd,CatmullRomCurve3:Gc,CubicBezierCurve:Vc,CubicBezierCurve3:Ud,EllipseCurve:Ha,LineCurve:Hc,LineCurve3:Fd,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:Xc,SplineCurve:qc});class Od extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ma[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ma[s.type]().fromJSON(s))}return this}}class tc extends Od{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Hc(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Wc(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Vc(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Ha(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zr extends tc{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new tc().fromJSON(s))}return this}}function Op(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=zd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Vp(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,f=l;for(let h=t;h<s;h+=t){const p=n[h],g=n[h+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Cr(r,o,t,a,l,c,0),o}function zd(n,e,t,i,s){let r;if(s===jp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=ih(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=ih(o/i|0,n[o],n[o+1],r);return r&&Ws(r,r.next)&&(Lr(r),r=r.next),r}function cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ws(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Cr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Yp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Bp(n,i,s,r):zp(n)){e.push(l.i,n.i,c.i),Lr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=kp(cs(n),e),Cr(n,e,t,i,s,r,2)):o===2&&Gp(n,e,t,i,s,r):Cr(cs(n),e,t,i,s,r,1);break}}}function zp(n){const e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&dr(s,a,r,l,o,c,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Nt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,p=Math.min(a,l,c),g=Math.min(u,f,h),v=Math.max(a,l,c),m=Math.max(u,f,h),d=nc(p,g,e,t,i),M=nc(v,m,e,t,i);let w=n.prevZ,y=n.nextZ;for(;w&&w.z>=d&&y&&y.z<=M;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&dr(a,u,l,f,c,h,w.x,w.y)&&Nt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&dr(a,u,l,f,c,h,y.x,y.y)&&Nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=d;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&dr(a,u,l,f,c,h,w.x,w.y)&&Nt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&dr(a,u,l,f,c,h,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ws(i,s)&&kd(i,t,t.next,s)&&Pr(i,s)&&Pr(s,i)&&(e.push(i.i,t.i,s.i),Lr(t),Lr(t.next),t=n=s),t=t.next}while(t!==n);return cs(t)}function Gp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jp(o,a)){let l=Gd(o,a);o=cs(o,o.next),l=cs(l,l.next),Cr(o,e,t,i,s,r,0),Cr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Vp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=zd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push($p(c))}s.sort(Hp);for(let r=0;r<s.length;r++)t=Wp(s[r],t);return t}function Hp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Wp(n,e){const t=Xp(n,e);if(!t)return e;const i=Gd(t,n);return cs(i,i.next),cs(t,t.next)}function Xp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ws(n,t))return t;do{if(Ws(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Bd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);Pr(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&qp(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function qp(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function Yp(n,e,t,i){let s=n;do s.z===0&&(s.z=nc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function nc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $p(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function dr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Bd(n,e,t,i,s,r,o,a)}function Jp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Kp(n,e)&&(Pr(n,e)&&Pr(e,n)&&Qp(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||Ws(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ws(n,e){return n.x===e.x&&n.y===e.y}function kd(n,e,t,i){const s=xo(Nt(n,e,t)),r=xo(Nt(n,e,i)),o=xo(Nt(t,i,n)),a=xo(Nt(t,i,e));return!!(s!==r&&o!==a||s===0&&vo(n,t,e)||r===0&&vo(n,i,e)||o===0&&vo(t,n,i)||a===0&&vo(t,e,i))}function vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xo(n){return n>0?1:n<0?-1:0}function Kp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&kd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pr(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function Qp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Gd(n,e){const t=ic(n.i,n.x,n.y),i=ic(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ih(n,e,t,i){const s=ic(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ic(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class em{static triangulate(e,t,i=2){return Op(e,t,i)}}class rs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return rs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];sh(e),rh(i,e);let o=e.length;t.forEach(sh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rh(i,t[l]);const a=em.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function sh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Zs extends Bt{constructor(e=new zr([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:tm;let w,y=!1,S,b,R,_;if(d){w=d.getSpacedPoints(u),y=!0,h=!1;const Z=d.isCatmullRomCurve3?d.closed:!1;S=d.computeFrenetFrames(u,Z),b=new D,R=new D,_=new D}h||(m=0,p=0,g=0,v=0);const A=a.extractPoints(c);let T=A.shape;const I=A.holes;if(!rs.isClockWise(T)){T=T.reverse();for(let Z=0,V=I.length;Z<V;Z++){const F=I[Z];rs.isClockWise(F)&&(I[Z]=F.reverse())}}function W(Z){const F=10000000000000001e-36;let Y=Z[0];for(let se=1;se<=Z.length;se++){const O=se%Z.length,te=Z[O],ge=te.x-Y.x,Me=te.y-Y.y,U=ge*ge+Me*Me,Ne=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(Y.x),Math.abs(Y.y)),Te=F*Ne*Ne;if(U<=Te){Z.splice(O,1),se--;continue}Y=te}}W(T),I.forEach(W);const N=I.length,k=T;for(let Z=0;Z<N;Z++){const V=I[Z];T=T.concat(V)}function q(Z,V,F){return V||ut("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(V,F)}const G=T.length;function Q(Z,V,F){let Y,se,O;const te=Z.x-V.x,ge=Z.y-V.y,Me=F.x-Z.x,U=F.y-Z.y,Ne=te*te+ge*ge,Te=te*U-ge*Me;if(Math.abs(Te)>Number.EPSILON){const L=Math.sqrt(Ne),x=Math.sqrt(Me*Me+U*U),ne=V.x-ge/L,oe=V.y+te/L,ue=F.x-U/x,Se=F.y+Me/x,Re=((ue-ne)*U-(Se-oe)*Me)/(te*U-ge*Me);Y=ne+te*Re-Z.x,se=oe+ge*Re-Z.y;const pe=Y*Y+se*se;if(pe<=2)return new be(Y,se);O=Math.sqrt(pe/2)}else{let L=!1;te>Number.EPSILON?Me>Number.EPSILON&&(L=!0):te<-Number.EPSILON?Me<-Number.EPSILON&&(L=!0):Math.sign(ge)===Math.sign(U)&&(L=!0),L?(Y=-ge,se=te,O=Math.sqrt(Ne)):(Y=te,se=ge,O=Math.sqrt(Ne/2))}return new be(Y/O,se/O)}const H=[];for(let Z=0,V=k.length,F=V-1,Y=Z+1;Z<V;Z++,F++,Y++)F===V&&(F=0),Y===V&&(Y=0),H[Z]=Q(k[Z],k[F],k[Y]);const $=[];let K,ce=H.concat();for(let Z=0,V=N;Z<V;Z++){const F=I[Z];K=[];for(let Y=0,se=F.length,O=se-1,te=Y+1;Y<se;Y++,O++,te++)O===se&&(O=0),te===se&&(te=0),K[Y]=Q(F[Y],F[O],F[te]);$.push(K),ce=ce.concat(K)}let fe;if(m===0)fe=rs.triangulateShape(k,I);else{const Z=[],V=[];for(let F=0;F<m;F++){const Y=F/m,se=p*Math.cos(Y*Math.PI/2),O=g*Math.sin(Y*Math.PI/2)+v;for(let te=0,ge=k.length;te<ge;te++){const Me=q(k[te],H[te],O);de(Me.x,Me.y,-se),Y===0&&Z.push(Me)}for(let te=0,ge=N;te<ge;te++){const Me=I[te];K=$[te];const U=[];for(let Ne=0,Te=Me.length;Ne<Te;Ne++){const L=q(Me[Ne],K[Ne],O);de(L.x,L.y,-se),Y===0&&U.push(L)}Y===0&&V.push(U)}}fe=rs.triangulateShape(Z,V)}const xe=fe.length,we=g+v;for(let Z=0;Z<G;Z++){const V=h?q(T[Z],ce[Z],we):T[Z];y?(R.copy(S.normals[0]).multiplyScalar(V.x),b.copy(S.binormals[0]).multiplyScalar(V.y),_.copy(w[0]).add(R).add(b),de(_.x,_.y,_.z)):de(V.x,V.y,0)}for(let Z=1;Z<=u;Z++)for(let V=0;V<G;V++){const F=h?q(T[V],ce[V],we):T[V];y?(R.copy(S.normals[Z]).multiplyScalar(F.x),b.copy(S.binormals[Z]).multiplyScalar(F.y),_.copy(w[Z]).add(R).add(b),de(_.x,_.y,_.z)):de(F.x,F.y,f/u*Z)}for(let Z=m-1;Z>=0;Z--){const V=Z/m,F=p*Math.cos(V*Math.PI/2),Y=g*Math.sin(V*Math.PI/2)+v;for(let se=0,O=k.length;se<O;se++){const te=q(k[se],H[se],Y);de(te.x,te.y,f+F)}for(let se=0,O=I.length;se<O;se++){const te=I[se];K=$[se];for(let ge=0,Me=te.length;ge<Me;ge++){const U=q(te[ge],K[ge],Y);y?de(U.x,U.y+w[u-1].y,w[u-1].x+F):de(U.x,U.y,f+F)}}}ie(),z();function ie(){const Z=s.length/3;if(h){let V=0,F=G*V;for(let Y=0;Y<xe;Y++){const se=fe[Y];re(se[2]+F,se[1]+F,se[0]+F)}V=u+m*2,F=G*V;for(let Y=0;Y<xe;Y++){const se=fe[Y];re(se[0]+F,se[1]+F,se[2]+F)}}else{for(let V=0;V<xe;V++){const F=fe[V];re(F[2],F[1],F[0])}for(let V=0;V<xe;V++){const F=fe[V];re(F[0]+G*u,F[1]+G*u,F[2]+G*u)}}i.addGroup(Z,s.length/3-Z,0)}function z(){const Z=s.length/3;let V=0;ee(k,V),V+=k.length;for(let F=0,Y=I.length;F<Y;F++){const se=I[F];ee(se,V),V+=se.length}i.addGroup(Z,s.length/3-Z,1)}function ee(Z,V){let F=Z.length;for(;--F>=0;){const Y=F;let se=F-1;se<0&&(se=Z.length-1);for(let O=0,te=u+m*2;O<te;O++){const ge=G*O,Me=G*(O+1),U=V+Y+ge,Ne=V+se+ge,Te=V+se+Me,L=V+Y+Me;C(U,Ne,Te,L)}}}function de(Z,V,F){l.push(Z),l.push(V),l.push(F)}function re(Z,V,F){P(Z),P(V),P(F);const Y=s.length/3,se=M.generateTopUV(i,s,Y-3,Y-2,Y-1);X(se[0]),X(se[1]),X(se[2])}function C(Z,V,F,Y){P(Z),P(V),P(Y),P(V),P(F),P(Y);const se=s.length/3,O=M.generateSideWallUV(i,s,se-6,se-3,se-2,se-1);X(O[0]),X(O[1]),X(O[3]),X(O[1]),X(O[2]),X(O[3])}function P(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function X(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return nm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ma[s.type]().fromJSON(s)),new Zs(i,e.options)}}const tm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new be(r,o),new be(a,l),new be(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-f),new be(h,1-g),new be(v,1-d)]:[new be(a,1-l),new be(u,1-f),new be(p,1-g),new be(m,1-d)]}};function nm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Br extends Va{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Br(e.radius,e.detail)}}class ds extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let w=0;w<c;w++){const y=w*f-r;g.push(y,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const w=M+c*d,y=M+c*(d+1),S=M+1+c*(d+1),b=M+1+c*d;p.push(w,y,b),p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wa extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new D,h=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const M=[],w=d/i,y=o+w*a,S=e*Math.cos(y),b=Math.sqrt(e*e-S*S);let R=0;d===0&&o===0?R=.5/t:d===i&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const A=_/t,T=s+A*r;f.x=-b*Math.cos(T),f.y=S,f.z=b*Math.sin(T),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(A+R,1-w),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const w=u[d][M+1],y=u[d][M],S=u[d+1][M],b=u[d+1][M+1];(d!==0||o>0)&&p.push(w,y,b),(d!==i-1||l<Math.PI)&&p.push(y,S,b)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xa extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new D,p=new D,g=new D;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let d=0;d<=s;d++){const M=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),f.push(d/s),f.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const d=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(d,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class qa extends Bt{constructor(e=new Xc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new be;let u=new D;const f=[],h=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(p,2));function v(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),M(),d()}function m(w){u=e.getPointAt(w/t,u);const y=o.normals[w],S=o.binormals[w];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,_=Math.sin(R),A=-Math.cos(R);l.x=A*y.x+_*S.x,l.y=A*y.y+_*S.y,l.z=A*y.z+_*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function d(){for(let w=1;w<=t;w++)for(let y=1;y<=s;y++){const S=(s+1)*(w-1)+(y-1),b=(s+1)*w+(y-1),R=(s+1)*w+y,_=(s+1)*(w-1)+y;g.push(S,b,_),g.push(b,R,_)}}function M(){for(let w=0;w<=t;w++)for(let y=0;y<=s;y++)c.x=w/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qa(new Ma[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Xs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(oh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(oh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Xs(n[t]);for(const s in i)e[s]=i[s]}return e}function oh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function im(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Hd={clone:Xs,merge:un};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new It().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Wd extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ds extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xd extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qd extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class om extends Uc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ya extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Yd extends Ya{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Dl=new pt,ah=new D,lh=new D;class Yc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Vs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yo=new D,Mo=new Ei,ni=new D;class Zc extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,Mo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(yo,Mo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new D,ch=new be,uh=new be;class En extends Zc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,ch,uh),t.subVectors(uh,ch)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class am extends Yc{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}}class Za extends Ya{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new am}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kr extends Zc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lm extends Yc{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new lm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const As=-90,Rs=1;class Zd extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(As,Rs,e,t);s.layers=this.layers,this.add(s);const r=new En(As,Rs,e,t);r.layers=this.layers,this.add(r);const o=new En(As,Rs,e,t);o.layers=this.layers,this.add(o);const a=new En(As,Rs,e,t);a.layers=this.layers,this.add(a);const l=new En(As,Rs,e,t);l.layers=this.layers,this.add(l);const c=new En(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $d extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hh=new pt;class Jd{constructor(e,t,i=0,s=1/0){this.ray=new Ys(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(e,t=!0,i=[]){return sc(e,this,i,t),i.sort(dh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)sc(e[s],this,i,t);return i.sort(dh),i}}function dh(n,e){return n.distance-e.distance}function sc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)sc(r[o],e,t,!0)}}class rc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const mu=class mu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};mu.prototype.isMatrix2=!0;let oc=mu;class Kd extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fh(n,e,t,i){const s=cm(i);switch(t){case Rc:return n*e;case La:return n*e/s.components*s.byteLength;case Da:return n*e/s.components*s.byteLength;case Wi:return n*e*2/s.components*s.byteLength;case Ia:return n*e*2/s.components*s.byteLength;case Cc:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case Na:return n*e*4/s.components*s.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Wo:return Math.max(n,16)*Math.max(e,8)/4;case Go:case Ho:return Math.max(n,8)*Math.max(e,8)/2;case Xo:case qo:case Zo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Er:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ea:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ta:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case na:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ha:case da:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pa:case ma:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wr:case ga:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cm(n){switch(n){case vn:case Ec:return{byteLength:1,components:1};case ks:case wc:case Qn:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case Kn:case Ra:case In:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qd(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function um(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Em=`#ifdef USE_IRIDESCENCE
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
#endif`,wm=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
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
#endif`,c0=`uniform sampler2D dfgLUT;
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
}`,u0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,vg=`#if DEPTH_PACKING == 3200
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
}`,xg=`#define DISTANCE
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
}`,yg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Ig=`#define PHONG
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
}`,Ng=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
}`,Og=`#define TOON
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
}`,zg=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:hm,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:vm,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:bm,iridescence_fragment:Em,bumpmap_pars_fragment:wm,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Im,common:Nm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Om,displacementmap_vertex:zm,emissivemap_fragment:Bm,emissivemap_pars_fragment:km,colorspace_fragment:Gm,colorspace_pars_fragment:Vm,envmap_fragment:Hm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i0,envmap_vertex:Ym,fog_vertex:Zm,fog_pars_vertex:$m,fog_fragment:Jm,fog_pars_fragment:Km,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:jm,lights_lambert_fragment:e0,lights_lambert_pars_fragment:t0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:o0,lights_phong_pars_fragment:a0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:u0,lights_fragment_maps:h0,lights_fragment_end:d0,lightprobes_pars_fragment:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:b0,morphinstance_vertex:E0,morphcolor_vertex:w0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:I0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:z0,opaque_fragment:B0,packing:k0,premultiplied_alpha_fragment:G0,project_vertex:V0,dithering_fragment:H0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:Z0,shadowmap_vertex:$0,shadowmask_pars_fragment:J0,skinbase_vertex:K0,skinning_pars_vertex:Q0,skinning_vertex:j0,skinnormal_vertex:eg,specularmap_fragment:tg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:sg,transmission_fragment:rg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:lg,uv_vertex:cg,worldpos_vertex:ug,background_vert:hg,background_frag:dg,backgroundCube_vert:fg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:vg,distance_vert:xg,distance_frag:yg,equirect_vert:Mg,equirect_frag:Sg,linedashed_vert:bg,linedashed_frag:Eg,meshbasic_vert:wg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Ig,meshphong_frag:Ng,meshphysical_vert:Ug,meshphysical_frag:Fg,meshtoon_vert:Og,meshtoon_frag:zg,points_vert:Bg,points_frag:kg,shadow_vert:Gg,shadow_frag:Vg,sprite_vert:Hg,sprite_frag:Wg},Ie={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},qn={basic:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([Ie.points,Ie.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([Ie.common,Ie.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([Ie.sprite,Ie.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([Ie.lights,Ie.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};qn.physical={uniforms:un([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const So={r:0,b:0,g:0},Xg=new pt,jd=new tt;jd.set(-1,0,0,0,1,0,0,0,1);function qg(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(M){let w=!1;const y=p(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,w){const y=p(w);y&&(y.isCubeTexture||y.mapping===Ur)?(c===void 0&&(c=new pn(new Ai(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Xs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jd),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new pn(new ds(2,2),new zn({name:"BackgroundMaterial",uniforms:Xs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(So,Vd(n)),t.buffers.color.setClear(So.r,So.g,So.b,w,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:d}}function Yg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(I,B,W,N,k){let q=!1;const G=f(I,N,W,B);r!==G&&(r=G,c(r.object)),q=p(I,N,W,k),q&&g(I,N,W,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(I,B,W,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,B,W,N){const k=N.wireframe===!0;let q=i[B.id];q===void 0&&(q={},i[B.id]=q);const G=I.isInstancedMesh===!0?I.id:0;let Q=q[G];Q===void 0&&(Q={},q[G]=Q);let H=Q[W.id];H===void 0&&(H={},Q[W.id]=H);let $=H[k];return $===void 0&&($=h(l()),H[k]=$),$}function h(I){const B=[],W=[],N=[];for(let k=0;k<t;k++)B[k]=0,W[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:N,object:I,attributes:{},index:null}}function p(I,B,W,N){const k=r.attributes,q=B.attributes;let G=0;const Q=W.getAttributes();for(const H in Q)if(Q[H].location>=0){const K=k[H];let ce=q[H];if(ce===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function g(I,B,W,N){const k={},q=B.attributes;let G=0;const Q=W.getAttributes();for(const H in Q)if(Q[H].location>=0){let K=q[H];K===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),k[H]=ce,G++}r.attributes=k,r.attributesNum=G,r.index=N}function v(){const I=r.newAttributes;for(let B=0,W=I.length;B<W;B++)I[B]=0}function m(I){d(I,0)}function d(I,B){const W=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;W[I]=1,N[I]===0&&(n.enableVertexAttribArray(I),N[I]=1),k[I]!==B&&(n.vertexAttribDivisor(I,B),k[I]=B)}function M(){const I=r.newAttributes,B=r.enabledAttributes;for(let W=0,N=B.length;W<N;W++)B[W]!==I[W]&&(n.disableVertexAttribArray(W),B[W]=0)}function w(I,B,W,N,k,q,G){G===!0?n.vertexAttribIPointer(I,B,W,k,q):n.vertexAttribPointer(I,B,W,N,k,q)}function y(I,B,W,N){v();const k=N.attributes,q=W.getAttributes(),G=B.defaultAttributeValues;for(const Q in q){const H=q[Q];if(H.location>=0){let $=k[Q];if($===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const K=$.normalized,ce=$.itemSize,fe=e.get($);if(fe===void 0)continue;const xe=fe.buffer,we=fe.type,ie=fe.bytesPerElement,z=we===n.INT||we===n.UNSIGNED_INT||$.gpuType===Ra;if($.isInterleavedBufferAttribute){const ee=$.data,de=ee.stride,re=$.offset;if(ee.isInstancedInterleavedBuffer){for(let C=0;C<H.locationSize;C++)d(H.location+C,ee.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let C=0;C<H.locationSize;C++)m(H.location+C);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let C=0;C<H.locationSize;C++)w(H.location+C,ce/H.locationSize,we,K,de*ie,(re+ce/H.locationSize*C)*ie,z)}else{if($.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)d(H.location+ee,$.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ee=0;ee<H.locationSize;ee++)w(H.location+ee,ce/H.locationSize,we,K,ce*ie,ce/H.locationSize*ee*ie,z)}}else if(G!==void 0){const K=G[Q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(H.location,K);break;case 3:n.vertexAttrib3fv(H.location,K);break;case 4:n.vertexAttrib4fv(H.location,K);break;default:n.vertexAttrib1fv(H.location,K)}}}}M()}function S(){A();for(const I in i){const B=i[I];for(const W in B){const N=B[W];for(const k in N){const q=N[k];for(const G in q)u(q[G].object),delete q[G];delete N[k]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;const B=i[I.id];for(const W in B){const N=B[W];for(const k in N){const q=N[k];for(const G in q)u(q[G].object),delete q[G];delete N[k]}}delete i[I.id]}function R(I){for(const B in i){const W=i[B];for(const N in W){const k=W[N];if(k[I.id]===void 0)continue;const q=k[I.id];for(const G in q)u(q[G].object),delete q[G];delete k[I.id]}}}function _(I){for(const B in i){const W=i[B],N=I.isInstancedMesh===!0?I.id:0,k=W[N];if(k!==void 0){for(const q in k){const G=k[q];for(const Q in G)u(G[Q].object),delete G[Q];delete k[q]}delete W[N],Object.keys(W).length===0&&delete i[B]}}}function A(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Zg(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $g(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&R!==In&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:b}}function Jg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ri,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,w=M*4;let y=d.clippingState||null;l.value=y,y=u(g,h,w,p);for(let S=0;S!==w;++S)y[S]=t[S];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=p;w!==v;++w,y+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Is=4,Kg=6,Qg=20,jg=256,ar=new kr,ph=new ot;let Il=null,Nl=0,Ul=0,Fl=!1;const e_=new D,ts=new D;class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=e_}=r;Il=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Nl,Ul),this._renderer.xr.enabled=Fl,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Qn,format:Nn,colorSpace:Tr,depthBuffer:!1},s=mh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=t_(r)),this._blurMaterial=i_(r,e,t),this._ggxMaterial=n_(r,e,t)}return s}_compileMaterial(e){const t=new pn(new Bt,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,i,s,r){const l=new En(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(ph),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new Ai,new Fr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(ph),d=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const S=this._cubeSize;Cs(s,y*S,w>2?S:0,S,S),f.setRenderTarget(s),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Hi||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Is?i-g+Is:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Cs(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Cs(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,ar)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-Is?s-this._lodMax+Is:0),h=4*(this._cubeSize-u);Cs(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,ar)}}function t_(n){const e=[],t=[];let i=n;const s=n-Is+1+Kg;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,g=new Float32Array(p*h*f),v=new Float32Array(p*h*f);for(let d=0;d<f;d++){const M=d%3*2/3-1,w=d>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(y,p*h*d);for(let S=0;S<h;S++){const b=u[S*2]*2-1,R=u[S*2+1]*2-1;d===0?ts.set(1,R,b):d===1?ts.set(-b,1,-R):d===2?ts.set(-b,R,1):d===3?ts.set(-1,R,-b):d===4?ts.set(-b,-1,R):ts.set(b,R,-1),ts.toArray(v,(d*h+S)*p)}}const m=new Bt;m.setAttribute("position",new Fn(g,p)),m.setAttribute("outputDirection",new Fn(v,p)),t.push(new pn(m,null)),i>Is&&i--}return{lodMeshes:t,sizeLods:e}}function mh(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=Ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function n_(n,e,t){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function i_(n,e,t){return new zn({name:"SphericalGaussianBlur",defines:{SAMPLES:Qg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function gh(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function _h(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jc extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Oc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:li});r.uniforms.tEquirect.value=t;const o=new pn(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Qt),new Zd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function s_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===To||p===Ao)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Jc(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,g=p===To||p===Ao,v=p===Hi||p===ls;if(g||v){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new ac(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new ac(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===To?h.mapping=Hi:p===Ao&&(h.mapping=ls),h}function l(h){let p=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function r_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&os("WebGLRenderer: "+i+" extension not supported."),s}}}function o_(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const M=p.array;v=p.version;for(let w=0,y=M.length;w<y;w+=3){const S=M[w+0],b=M[w+1],R=M[w+2];h.push(S,b,b,R,R,S)}}else{const M=g.array;v=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const S=w+0,b=w+1,R=w+2;h.push(S,b,b,R,R,S)}}const m=new(g.count>=65535?Ic:Dc)(h,1);m.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function a_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,f*o,p),t.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function l_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c_(n,e,t){const i=new WeakMap,s=new It;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let S=a.attributes.position.count*y,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*b*4*f),_=new Lc(R,S,b,f);_.type=In,_.needsUpdate=!0;const A=y*4;for(let I=0;I<f;I++){const B=d[I],W=M[I],N=w[I],k=S*b*4*I;for(let q=0;q<B.count;q++){const G=q*A;g===!0&&(s.fromBufferAttribute(B,q),R[k+G+0]=s.x,R[k+G+1]=s.y,R[k+G+2]=s.z,R[k+G+3]=0),v===!0&&(s.fromBufferAttribute(W,q),R[k+G+4]=s.x,R[k+G+5]=s.y,R[k+G+6]=s.z,R[k+G+7]=0),m===!0&&(s.fromBufferAttribute(N,q),R[k+G+8]=s.x,R[k+G+9]=s.y,R[k+G+10]=s.z,R[k+G+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new be(S,b)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function u_(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const h_={[_c]:"LINEAR_TONE_MAPPING",[vc]:"REINHARD_TONE_MAPPING",[xc]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function d_(n,e,t,i,s,r){const o=new Un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Bt;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new Wd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pn(c,u),h=new kr(-1,1,1,-1,0,1);let p=null,g=null,v=!1,m,d=null,M=[],w=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<M.length;b++){const R=M[b];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new Un(S,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(S,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(S,b)}},this.begin=function(y,S){if(v||y.toneMapping===Zn&&M.length===0)return!1;if(d=S,S!==null){const b=S.width,R=S.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return w===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Zn,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=m,v=!0;let b=o,R=a;for(let _=0;_<M.length;_++){const A=M[_];A.enabled!==!1&&(A.render(y,R,b,S),A.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,u.defines={},lt.getTransfer(p)===xt&&(u.defines.SRGB_TRANSFER="");const _=h_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(f,h),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const ef=new en,lc=new Hs(1,1),tf=new Lc,nf=new Cd,sf=new Oc,vh=[],xh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function __(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),qt(t,i)}}function v_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),qt(t,i)}}function x_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),qt(t,i)}}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function E_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function R_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lc.compareFunction=t.isReversedDepthBuffer()?Fa:Ua,r=lc):r=ef,t.setTexture2D(e||r,s)}function C_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nf,s)}function P_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sf,s)}function L_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tf,s)}function D_(n){switch(n){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return b_;case 5125:return E_;case 36294:return w_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}function I_(n,e){n.uniform1fv(this.addr,e)}function N_(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function U_(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function F_(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function O_(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z_(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B_(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k_(n,e){n.uniform1iv(this.addr,e)}function G_(n,e){n.uniform2iv(this.addr,e)}function V_(n,e){n.uniform3iv(this.addr,e)}function H_(n,e){n.uniform4iv(this.addr,e)}function W_(n,e){n.uniform1uiv(this.addr,e)}function X_(n,e){n.uniform2uiv(this.addr,e)}function q_(n,e){n.uniform3uiv(this.addr,e)}function Y_(n,e){n.uniform4uiv(this.addr,e)}function Z_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=lc:o=ef;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nf,r[o])}function J_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sf,r[o])}function K_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tf,r[o])}function Q_(n){switch(n){case 5126:return I_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return z_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}}class ev{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q_(t.type)}}class tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function bh(n,e){n.seq.push(e),n.map[e.id]=e}function nv(n,e,t){const i=n.name,s=i.length;for(Ol.lastIndex=0;;){const r=Ol.exec(i),o=Ol.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bh(t,c===void 0?new j_(a,n,e):new ev(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new tv(a),bh(t,f)),t=f}}}class Lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);nv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Eh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iv=37297;let sv=0;function rv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const wh=new tt;function ov(n){lt._getMatrix(wh,lt.workingColorSpace,n);const e=`mat3( ${wh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Ar:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Th(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rv(n.getShaderSource(e),a)}else return r}function av(n,e){const t=ov(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lv={[_c]:"Linear",[vc]:"Reinhard",[xc]:"Cineon",[Aa]:"ACESFilmic",[Mc]:"AgX",[Sc]:"Neutral",[yc]:"Custom"};function cv(n,e){const t=lv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new D;function uv(){lt.getLuminanceCoefficients(bo);const n=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function dv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fr(n){return n!==""}function Ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(pv,gv)}const mv=new Map;function gv(n,e){let t=it[e];if(t===void 0){const i=mv.get(e);if(i!==void 0)t=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cc(t)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(_v,vv)}function vv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const xv={[Ns]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function yv(n){return xv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mv={[Hi]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function Sv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Mv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const bv={[ls]:"ENVMAP_MODE_REFRACTION"};function Ev(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wv={[gc]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function Tv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wv[n.combine]||"ENVMAP_BLENDING_NONE"}function Av(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Rv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yv(t),c=Sv(t),u=Ev(t),f=Tv(t),h=Av(t),p=hv(t),g=dv(r),v=s.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),d=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?it.tonemapping_pars_fragment:"",t.toneMapping!==Zn?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,av("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=cc(o),o=Ah(o,t),o=Rh(o,t),a=cc(a),a=Ah(a,t),a=Rh(a,t),o=Ch(o),a=Ch(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=M+m+o,y=M+d+a,S=Eh(s,s.VERTEX_SHADER,w),b=Eh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(I){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(b)||"",k=B.trim(),q=W.trim(),G=N.trim();let Q=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,b);else{const $=Th(s,S,"vertex"),K=Th(s,b,"fragment");ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+$+`
`+K)}else k!==""?je("WebGLProgram: Program Info Log:",k):(q===""||G==="")&&(H=!1);H&&(I.diagnostics={runnable:Q,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(S),s.deleteShader(b),_=new Lo(s,v),A=fv(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,iv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}let Cv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lv(e),t.set(e,i)),i}}class Lv{constructor(e){this.id=Cv++,this.code=e,this.usedTimes=0}}function Dv(n){return n===Wi||n===Er||n===wr}function Iv(n,e,t,i,s,r){const o=new za,a=new Pv,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,T,I,B,W){const N=I.fog,k=B.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Q=e.get(_.envMap||q,G),H=Q&&Q.mapping===Ur?Q.image.height:null,$=p[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=K!==void 0?K.length:0;let fe=0;k.morphAttributes.position!==void 0&&(fe=1),k.morphAttributes.normal!==void 0&&(fe=2),k.morphAttributes.color!==void 0&&(fe=3);let xe,we,ie,z;if($){const At=qn[$];xe=At.vertexShader,we=At.fragmentShader}else{xe=_.vertexShader,we=_.fragmentShader;const At=a.getVertexShaderStage(_),_t=a.getFragmentShaderStage(_);a.update(_,At,_t),ie=At.id,z=_t.id}const ee=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),re=B.isInstancedMesh===!0,C=B.isBatchedMesh===!0,P=!!_.map,X=!!_.matcap,Z=!!Q,V=!!_.aoMap,F=!!_.lightMap,Y=!!_.bumpMap&&_.wireframe===!1,se=!!_.normalMap,O=!!_.displacementMap,te=!!_.emissiveMap,ge=!!_.metalnessMap,Me=!!_.roughnessMap,U=_.anisotropy>0,Ne=_.clearcoat>0,Te=_.dispersion>0,L=_.retroreflectivity>0,x=_.iridescence>0,ne=_.sheen>0,oe=_.transmission>0,ue=U&&!!_.anisotropyMap,Se=Ne&&!!_.clearcoatMap,Re=Ne&&!!_.clearcoatNormalMap,pe=Ne&&!!_.clearcoatRoughnessMap,ve=x&&!!_.iridescenceMap,Ce=x&&!!_.iridescenceThicknessMap,Ye=ne&&!!_.sheenColorMap,Ue=ne&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,Ze=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=oe&&!!_.transmissionMap,j=oe&&!!_.thicknessMap,Le=!!_.gradientMap,_e=!!_.alphaMap,De=_.alphaTest>0,Be=!!_.alphaHash,ye=!!_.extensions;let $e=Zn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&($e=n.toneMapping);const We={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:xe,fragmentShader:we,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:C,batchingColor:C&&B._colorsTexture!==null,instancing:re,instancingColor:re&&B.instanceColor!==null,instancingMorph:re&&B.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:P,matcap:X,envMap:Z,envMapMode:Z&&Q.mapping,envMapCubeUVHeight:H,aoMap:V,lightMap:F,bumpMap:Y,normalMap:se,displacementMap:O,emissiveMap:te,normalMapObjectSpace:se&&_.normalMapType===gd,normalMapTangentSpace:se&&_.normalMapType===_a,packedNormalMap:se&&_.normalMapType===_a&&Dv(_.normalMap.format),metalnessMap:ge,roughnessMap:Me,anisotropy:U,anisotropyMap:ue,clearcoat:Ne,clearcoatMap:Se,clearcoatNormalMap:Re,clearcoatRoughnessMap:pe,dispersion:Te,retroreflection:L,iridescence:x,iridescenceMap:ve,iridescenceThicknessMap:Ce,sheen:ne,sheenColorMap:Ye,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:Ze,specularIntensityMap:Ke,transmission:oe,transmissionMap:nt,thicknessMap:j,gradientMap:Le,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:De,alphaHash:Be,combine:_.combine,mapUv:P&&g(_.map.channel),aoMapUv:V&&g(_.aoMap.channel),lightMapUv:F&&g(_.lightMap.channel),bumpMapUv:Y&&g(_.bumpMap.channel),normalMapUv:se&&g(_.normalMap.channel),displacementMapUv:O&&g(_.displacementMap.channel),emissiveMapUv:te&&g(_.emissiveMap.channel),metalnessMapUv:ge&&g(_.metalnessMap.channel),roughnessMapUv:Me&&g(_.roughnessMap.channel),anisotropyMapUv:ue&&g(_.anisotropyMap.channel),clearcoatMapUv:Se&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(_.sheenRoughnessMap.channel),specularMapUv:Pe&&g(_.specularMap.channel),specularColorMapUv:Ze&&g(_.specularColorMap.channel),specularIntensityMapUv:Ke&&g(_.specularIntensityMap.channel),transmissionMapUv:nt&&g(_.transmissionMap.channel),thicknessMapUv:j&&g(_.thicknessMap.channel),alphaMapUv:_e&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(se||U),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(P||_e),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:fe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:P&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:te&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||C)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)A.push(T),A.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(d(A,_),M(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function d(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const A=p[_.type];let T;if(A){const I=qn[A];T=Hd.clone(I.uniforms)}else T=_.uniforms;return T}function y(_,A){let T=u.get(A);return T!==void 0?++T.usedTimes:(T=new Rv(n,A,_,s),c.push(T),u.set(A,T)),T}function S(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function Nv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,v,m,d){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:d},n[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=o(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,p,g,v,m,d,M){M.reversedDepth===!0&&(m=-m);const w=a(h,p,g,v,m,d);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(h,p,g,v,m,d){const M=a(h,p,g,v,m,d);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||Uv),i.length>1&&i.sort(p||Lh),s.length>1&&s.sort(p||Lh)}function f(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Fv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Dh,n.set(i,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ov(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ot};break;case"SpotLight":t={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function zv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Bv=0;function kv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gv(n){const e=new Ov,t=zv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new pt,o=new pt;function a(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,M=0,w=0,y=0,S=0,b=0,R=0,_=0,A=0,T=0;c.sort(kv);for(let B=0,W=c.length;B<W;B++){const N=c[B],k=N.color,q=N.intensity,G=N.distance;let Q=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Wi?Q=N.shadow.map.texture:Q=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*q,f+=k.g*q,h+=k.b*q;else if(N.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],q);T++}else if(N.isSunLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,K=t.get(N);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=Q;const ce=$.getViewportCount();for(let fe=0;fe<ce;fe++)i.sunShadowMatrix[v+fe]=$.getMatrix(fe),i.sunShadowCascade[v+fe]=$._cascadeData[fe];v+=ce,g++}i.sun[p]=H,p++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,K=t.get(N);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=N.shadow.matrix,S++}i.directional[m]=H,m++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(k).multiplyScalar(q),H.distance=G,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[M]=H;const $=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,$.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[M]=$.matrix,N.castShadow){const K=t.get(N);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.spotShadow[M]=K,i.spotShadowMap[M]=Q,R++}M++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(k).multiplyScalar(q),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=H,w++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const $=N.shadow,K=t.get(N);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=N.shadow.matrix,b++}i.point[d]=H,d++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(q),H.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[y]=H,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==d||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==R||I.numSpotMaps!==_||I.numLightProbes!==T)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,I.sunLength=p,I.directionalLength=m,I.pointLength=d,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=R,I.numSpotMaps=_,I.numLightProbes=T,i.version=Bv++)}function l(c,u){let f=0,h=0,p=0,g=0,v=0,m=0;const d=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const y=c[M];if(y.isSunLight){const S=i.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),f++}else if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:i}}function Ih(n){const e=new Gv(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Vv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ih(n),e.set(s,[a])):r>=o.length?(a=new Ih(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`,Xv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],qv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Nh=new pt,lr=new D,zl=new D;function Yv(n,e,t){let i=new ka;const s=new be,r=new be,o=new It,a=new Xd,l=new qd,c={},u=t.maxTextureSize,f={[Vi]:fn,[fn]:Vi,[Pn]:Pn},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Hv,fragmentShader:Wv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let d=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Yh&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);const A=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(li),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=d!==this.type;W&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=b.length;N<k;N++){const q=b[N],G=q.shadow;if(G===void 0){je("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();s.multiply(Q),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y));const H=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ls){if(q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Un(s.x,s.y,{format:Wi,type:Qn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Hs(s.x,s.y,In),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=ui,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Zt,G.map.depthTexture.magFilter=Zt}else q.isPointLight?(G.map=new Jc(s.x),G.map.depthTexture=new Id(s.x,Kn)):(G.map=new Un(s.x,s.y),G.map.depthTexture=new Hs(s.x,s.y,Kn)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=ui,this.type===Ns?(G.map.depthTexture.compareFunction=H?Fa:Ua,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Zt,G.map.depthTexture.magFilter=Zt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,_);for(let K=0;K<$;K++){const ce=G.getCamera(K);if(q.isPointLight){const fe=G.camera,xe=G.matrix,we=q.distance||fe.far;we!==fe.far&&(fe.far=we,fe.updateProjectionMatrix()),lr.setFromMatrixPosition(q.matrixWorld),fe.position.copy(lr),zl.copy(fe.position),zl.add(Xv[K]),fe.up.copy(qv[K]),fe.lookAt(zl),fe.updateMatrixWorld(),xe.makeTranslation(-lr.x,-lr.y,-lr.z),Nh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Nh,fe.coordinateSystem,fe.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,K),n.clear();else{K===0&&(n.setRenderTarget(G.map),n.clear());const fe=G.getViewport(K);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),B.viewport(o)}i=G.getFrustum(K),y(R,_,ce,q,this.type)}G.isPointLightShadow!==!0&&this.type===Ls&&M(G,_),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(A,T,I)};function M(b,R){const _=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Un(s.x,s.y,{format:Wi,type:Qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,_,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,_,p,v,null)}function w(b,R,_,A){let T=null;const I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)T=I;else if(T=_.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=T.uuid,W=R.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let k=N[W];k===void 0&&(k=T.clone(),N[W]=k,R.addEventListener("dispose",S)),T=k}if(T.visible=R.visible,T.wireframe=R.wireframe,A===Ls?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const B=n.properties.get(T);B.light=_}return T}function y(b,R,_,A,T){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Ls)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const W=e.update(b),N=b.material;if(Array.isArray(N)){const k=W.groups;for(let q=0,G=k.length;q<G;q++){const Q=k[q],H=N[Q.materialIndex];if(H&&H.visible){const $=w(b,H,A,T);b.onBeforeShadow(n,b,R,_,W,$,Q),n.renderBufferDirect(_,null,W,$,b,Q),b.onAfterShadow(n,b,R,_,W,$,Q)}}}else if(N.visible){const k=w(b,N,A,T);b.onBeforeShadow(n,b,R,_,W,k,null),n.renderBufferDirect(_,null,W,k,b,null),b.onAfterShadow(n,b,R,_,W,k,null)}}const B=b.children;for(let W=0,N=B.length;W<N;W++)y(B[W],R,_,A,T)}function S(b){b.target.removeEventListener("dispose",S);for(const _ in c){const A=c[_],T=b.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function Zv(n,e){function t(){let j=!1;const Le=new It;let _e=null;const De=new It(0,0,0,0);return{setMask:function(Be){_e!==Be&&!j&&(n.colorMask(Be,Be,Be,Be),_e=Be)},setLocked:function(Be){j=Be},setClear:function(Be,ye,$e,We,At){At===!0&&(Be*=We,ye*=We,$e*=We),Le.set(Be,ye,$e,We),De.equals(Le)===!1&&(n.clearColor(Be,ye,$e,We),De.copy(Le))},reset:function(){j=!1,_e=null,De.set(-1,0,0,0)}}}function i(){let j=!1,Le=!1,_e=null,De=null,Be=null;return{setReversed:function(ye){if(Le!==ye){const $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Le=ye;const We=Be;Be=null,this.setClear(We)}},getReversed:function(){return Le},setTest:function(ye){ye?ee(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ye){_e!==ye&&!j&&(n.depthMask(ye),_e=ye)},setFunc:function(ye){if(Le&&(ye=Yf[ye]),De!==ye){switch(ye){case Io:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Uo:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case zo:n.depthFunc(n.GREATER);break;case Bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ye}},setLocked:function(ye){j=ye},setClear:function(ye){Be!==ye&&(Be=ye,Le&&(ye=1-ye),n.clearDepth(ye))},reset:function(){j=!1,_e=null,De=null,Be=null,Le=!1}}}function s(){let j=!1,Le=null,_e=null,De=null,Be=null,ye=null,$e=null,We=null,At=null;return{setTest:function(_t){j||(_t?ee(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!j&&(n.stencilMask(_t),Le=_t)},setFunc:function(_t,Gn,ei){(_e!==_t||De!==Gn||Be!==ei)&&(n.stencilFunc(_t,Gn,ei),_e=_t,De=Gn,Be=ei)},setOp:function(_t,Gn,ei){(ye!==_t||$e!==Gn||We!==ei)&&(n.stencilOp(_t,Gn,ei),ye=_t,$e=Gn,We=ei)},setLocked:function(_t){j=_t},setClear:function(_t){At!==_t&&(n.clearStencil(_t),At=_t)},reset:function(){j=!1,Le=null,_e=null,De=null,Be=null,ye=null,$e=null,We=null,At=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,g=[],v=null,m=!1,d=null,M=null,w=null,y=null,S=null,b=null,R=null,_=new ot(0,0,0),A=0,T=!1,I=null,B=null,W=null,N=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Q>=2);let $=null,K={};const ce=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),xe=new It().fromArray(ce),we=new It().fromArray(fe);function ie(j,Le,_e,De){const Be=new Uint8Array(4),ye=n.createTexture();n.bindTexture(j,ye),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<_e;$e++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return ye}const z={};z[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Bs),Y(!1),se(ql),ee(n.CULL_FACE),V(li);function ee(j){u[j]!==!0&&(n.enable(j),u[j]=!0)}function de(j){u[j]!==!1&&(n.disable(j),u[j]=!1)}function re(j,Le){return h[j]!==Le?(n.bindFramebuffer(j,Le),h[j]=Le,j===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),j===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function C(j,Le){let _e=g,De=!1;if(j){_e=p.get(Le),_e===void 0&&(_e=[],p.set(Le,_e));const Be=j.textures;if(_e.length!==Be.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,$e=Be.length;ye<$e;ye++)_e[ye]=n.COLOR_ATTACHMENT0+ye;_e.length=Be.length,De=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,De=!0);De&&n.drawBuffers(_e)}function P(j){return v!==j?(n.useProgram(j),v=j,!0):!1}const X={[is]:n.FUNC_ADD,[$h]:n.FUNC_SUBTRACT,[Jh]:n.FUNC_REVERSE_SUBTRACT};X[Kh]=n.MIN,X[Qh]=n.MAX;const Z={[jh]:n.ZERO,[ed]:n.ONE,[td]:n.SRC_COLOR,[pc]:n.SRC_ALPHA,[ad]:n.SRC_ALPHA_SATURATE,[rd]:n.DST_COLOR,[id]:n.DST_ALPHA,[nd]:n.ONE_MINUS_SRC_COLOR,[mc]:n.ONE_MINUS_SRC_ALPHA,[od]:n.ONE_MINUS_DST_COLOR,[sd]:n.ONE_MINUS_DST_ALPHA,[ld]:n.CONSTANT_COLOR,[cd]:n.ONE_MINUS_CONSTANT_COLOR,[ud]:n.CONSTANT_ALPHA,[hd]:n.ONE_MINUS_CONSTANT_ALPHA};function V(j,Le,_e,De,Be,ye,$e,We,At,_t){if(j===li){m===!0&&(de(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),j!==Zh){if(j!==d||_t!==T){if((M!==is||S!==is)&&(n.blendEquation(n.FUNC_ADD),M=is,S=is),_t)switch(j){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yl:n.blendFunc(n.ONE,n.ONE);break;case Zl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ut("WebGLState: Invalid blending: ",j);break}else switch(j){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zl:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",j);break}w=null,y=null,b=null,R=null,_.set(0,0,0),A=0,d=j,T=_t}return}Be=Be||Le,ye=ye||_e,$e=$e||De,(Le!==M||Be!==S)&&(n.blendEquationSeparate(X[Le],X[Be]),M=Le,S=Be),(_e!==w||De!==y||ye!==b||$e!==R)&&(n.blendFuncSeparate(Z[_e],Z[De],Z[ye],Z[$e]),w=_e,y=De,b=ye,R=$e),(We.equals(_)===!1||At!==A)&&(n.blendColor(We.r,We.g,We.b,At),_.copy(We),A=At),d=j,T=!1}function F(j,Le){j.side===Pn?de(n.CULL_FACE):ee(n.CULL_FACE);let _e=j.side===fn;Le&&(_e=!_e),Y(_e),j.blending===Us&&j.transparent===!1?V(li):V(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const De=j.stencilWrite;a.setTest(De),De&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),te(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(j){I!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),I=j)}function se(j){j!==Xh?(ee(n.CULL_FACE),j!==B&&(j===ql?n.cullFace(n.BACK):j===qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),B=j}function O(j){j!==W&&(G&&n.lineWidth(j),W=j)}function te(j,Le,_e){j?(ee(n.POLYGON_OFFSET_FILL),(N!==Le||k!==_e)&&(N=Le,k=_e,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,_e))):de(n.POLYGON_OFFSET_FILL)}function ge(j){j?ee(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function Me(j){j===void 0&&(j=n.TEXTURE0+q-1),$!==j&&(n.activeTexture(j),$=j)}function U(j,Le,_e){_e===void 0&&($===null?_e=n.TEXTURE0+q-1:_e=$);let De=K[_e];De===void 0&&(De={type:void 0,texture:void 0},K[_e]=De),(De.type!==j||De.texture!==Le)&&($!==_e&&(n.activeTexture(_e),$=_e),n.bindTexture(j,Le||z[j]),De.type=j,De.texture=Le)}function Ne(){const j=K[$];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(j){ut("WebGLState:",j)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(j){ut("WebGLState:",j)}}function x(){try{n.texSubImage2D(...arguments)}catch(j){ut("WebGLState:",j)}}function ne(){try{n.texSubImage3D(...arguments)}catch(j){ut("WebGLState:",j)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(j){ut("WebGLState:",j)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(j){ut("WebGLState:",j)}}function Se(){try{n.texStorage2D(...arguments)}catch(j){ut("WebGLState:",j)}}function Re(){try{n.texStorage3D(...arguments)}catch(j){ut("WebGLState:",j)}}function pe(){try{n.texImage2D(...arguments)}catch(j){ut("WebGLState:",j)}}function ve(){try{n.texImage3D(...arguments)}catch(j){ut("WebGLState:",j)}}function Ce(j){return f[j]!==void 0?f[j]:n.getParameter(j)}function Ye(j,Le){f[j]!==Le&&(n.pixelStorei(j,Le),f[j]=Le)}function Ue(j){xe.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),xe.copy(j))}function Pe(j){we.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),we.copy(j))}function Ze(j,Le){let _e=c.get(Le);_e===void 0&&(_e=new WeakMap,c.set(Le,_e));let De=_e.get(j);De===void 0&&(De=n.getUniformBlockIndex(Le,j.name),_e.set(j,De))}function Ke(j,Le){const De=c.get(Le).get(j);l.get(Le)!==De&&(n.uniformBlockBinding(Le,De,j.__bindingPointIndex),l.set(Le,De))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,K={},h={},p=new WeakMap,g=[],v=null,m=!1,d=null,M=null,w=null,y=null,S=null,b=null,R=null,_=new ot(0,0,0),A=0,T=!1,I=null,B=null,W=null,N=null,k=null,xe.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:de,bindFramebuffer:re,drawBuffers:C,useProgram:P,setBlending:V,setMaterial:F,setFlipSided:Y,setCullFace:se,setLineWidth:O,setPolygonOffset:te,setScissorTest:ge,activeTexture:Me,bindTexture:U,unbindTexture:Ne,compressedTexImage2D:Te,compressedTexImage3D:L,texImage2D:pe,texImage3D:ve,pixelStorei:Ye,getParameter:Ce,updateUBOMapping:Ze,uniformBlockBinding:Ke,texStorage2D:Se,texStorage3D:Re,texSubImage2D:x,texSubImage3D:ne,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ue,viewport:Pe,reset:nt}}function $v(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,x){return g?new OffscreenCanvas(L,x):va("canvas")}function m(L,x,ne){let oe=1;const ue=Te(L);if((ue.width>ne||ue.height>ne)&&(oe=ne/Math.max(ue.width,ue.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Se=Math.floor(oe*ue.width),Re=Math.floor(oe*ue.height);h===void 0&&(h=v(Se,Re));const pe=x?v(Se,Re):h;return pe.width=Se,pe.height=Re,pe.getContext("2d").drawImage(L,0,0,Se,Re),je("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Se+"x"+Re+")."),pe}else return"data"in L&&je("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function d(L){return L.generateMipmaps}function M(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,x,ne,oe,ue,Se=!1){if(L!==null){if(n[L]!==void 0)return n[L];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Re;oe&&(Re=e.get("EXT_texture_norm16"),Re||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=x;if(x===n.RED&&(ne===n.FLOAT&&(pe=n.R32F),ne===n.HALF_FLOAT&&(pe=n.R16F),ne===n.UNSIGNED_BYTE&&(pe=n.R8),ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),ne===n.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),x===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.R8UI),ne===n.UNSIGNED_SHORT&&(pe=n.R16UI),ne===n.UNSIGNED_INT&&(pe=n.R32UI),ne===n.BYTE&&(pe=n.R8I),ne===n.SHORT&&(pe=n.R16I),ne===n.INT&&(pe=n.R32I)),x===n.RG&&(ne===n.FLOAT&&(pe=n.RG32F),ne===n.HALF_FLOAT&&(pe=n.RG16F),ne===n.UNSIGNED_BYTE&&(pe=n.RG8),ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),ne===n.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RG8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RG16UI),ne===n.UNSIGNED_INT&&(pe=n.RG32UI),ne===n.BYTE&&(pe=n.RG8I),ne===n.SHORT&&(pe=n.RG16I),ne===n.INT&&(pe=n.RG32I)),x===n.RGB_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),ne===n.UNSIGNED_INT&&(pe=n.RGB32UI),ne===n.BYTE&&(pe=n.RGB8I),ne===n.SHORT&&(pe=n.RGB16I),ne===n.INT&&(pe=n.RGB32I)),x===n.RGBA_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),ne===n.UNSIGNED_INT&&(pe=n.RGBA32UI),ne===n.BYTE&&(pe=n.RGBA8I),ne===n.SHORT&&(pe=n.RGBA16I),ne===n.INT&&(pe=n.RGBA32I)),x===n.RGB&&(ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),ne===n.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),ne===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),ne===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),x===n.RGBA){const ve=Se?Ar:lt.getTransfer(ue);ne===n.FLOAT&&(pe=n.RGBA32F),ne===n.HALF_FLOAT&&(pe=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(pe=ve===xt?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),ne===n.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),ne===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function S(L,x){let ne;return L?x===null||x===Kn||x===Gs?ne=n.DEPTH24_STENCIL8:x===In?ne=n.DEPTH32F_STENCIL8:x===ks&&(ne=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===Gs?ne=n.DEPTH_COMPONENT24:x===In?ne=n.DEPTH_COMPONENT32F:x===ks&&(ne=n.DEPTH_COMPONENT16),ne}function b(L,x){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?x.mipmaps.length:1}function R(L){const x=L.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function _(L){const x=L.target;x.removeEventListener("dispose",_),I(x)}function A(L){const x=i.get(L);if(x.__webglInit===void 0)return;const ne=L.source,oe=p.get(ne);if(oe){const ue=oe[x.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&T(L),Object.keys(oe).length===0&&p.delete(ne)}i.remove(L)}function T(L){const x=i.get(L);n.deleteTexture(x.__webglTexture);const ne=L.source,oe=p.get(ne);delete oe[x.__cacheKey],o.memory.textures--}function I(L){const x=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(x.__webglFramebuffer[oe]))for(let ue=0;ue<x.__webglFramebuffer[oe].length;ue++)n.deleteFramebuffer(x.__webglFramebuffer[oe][ue]);else n.deleteFramebuffer(x.__webglFramebuffer[oe]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[oe])}else{if(Array.isArray(x.__webglFramebuffer))for(let oe=0;oe<x.__webglFramebuffer.length;oe++)n.deleteFramebuffer(x.__webglFramebuffer[oe]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let oe=0;oe<x.__webglColorRenderbuffer.length;oe++)x.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[oe]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const ne=L.textures;for(let oe=0,ue=ne.length;oe<ue;oe++){const Se=i.get(ne[oe]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(ne[oe])}i.remove(L)}let B=0;function W(){B=0}function N(){return B}function k(L){B=L}function q(){const L=B;return L>=s.maxTextures&&je("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,L}function G(L){const x=[];return x.push(L.wrapS),x.push(L.wrapT),x.push(L.wrapR||0),x.push(L.magFilter),x.push(L.minFilter),x.push(L.anisotropy),x.push(L.internalFormat),x.push(L.format),x.push(L.type),x.push(L.generateMipmaps),x.push(L.premultiplyAlpha),x.push(L.flipY),x.push(L.unpackAlignment),x.push(L.colorSpace),x.join()}function Q(L,x){const ne=i.get(L);if(L.isVideoTexture&&U(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const oe=L.image;if(oe===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{de(ne,L,x);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+x)}function H(L,x){const ne=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){de(ne,L,x);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+x)}function $(L,x){const ne=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){de(ne,L,x);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+x)}function K(L,x){const ne=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ne.__version!==L.version){re(ne,L,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+x)}const ce={[br]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[ko]:n.MIRRORED_REPEAT},fe={[Zt]:n.NEAREST,[pd]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Ro]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},xe={[vd]:n.NEVER,[bd]:n.ALWAYS,[xd]:n.LESS,[Ua]:n.LEQUAL,[yd]:n.EQUAL,[Fa]:n.GEQUAL,[Md]:n.GREATER,[Sd]:n.NOTEQUAL};function we(L,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===Ro||x.magFilter===hr||x.magFilter===Fi||x.minFilter===Qt||x.minFilter===Ro||x.minFilter===hr||x.minFilter===Fi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ce[x.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ce[x.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ce[x.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==hr&&x.minFilter!==Fi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ie(L,x){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,x.addEventListener("dispose",R));const oe=x.source;let ue=p.get(oe);ue===void 0&&(ue={},p.set(oe,ue));const Se=G(x);if(Se!==L.__cacheKey){ue[Se]===void 0&&(ue[Se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),ue[Se].usedTimes++;const Re=ue[L.__cacheKey];Re!==void 0&&(ue[L.__cacheKey].usedTimes--,Re.usedTimes===0&&T(x)),L.__cacheKey=Se,L.__webglTexture=ue[Se].texture}return ne}function z(L,x,ne){return Math.floor(Math.floor(L/ne)/x)}function ee(L,x,ne,oe){const Se=L.updateRanges;if(Se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,ne,oe,x.data);else{Se.sort((Ye,Ue)=>Ye.start-Ue.start);let Re=0;for(let Ye=1;Ye<Se.length;Ye++){const Ue=Se[Re],Pe=Se[Ye],Ze=Ue.start+Ue.count,Ke=z(Pe.start,x.width,4),nt=z(Ue.start,x.width,4);Pe.start<=Ze+1&&Ke===nt&&z(Pe.start+Pe.count-1,x.width,4)===Ke?Ue.count=Math.max(Ue.count,Pe.start+Pe.count-Ue.start):(++Re,Se[Re]=Pe)}Se.length=Re+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ye=0,Ue=Se.length;Ye<Ue;Ye++){const Pe=Se[Ye],Ze=Math.floor(Pe.start/4),Ke=Math.ceil(Pe.count/4),nt=Ze%x.width,j=Math.floor(Ze/x.width),Le=Ke,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,j),t.texSubImage2D(n.TEXTURE_2D,0,nt,j,Le,_e,ne,oe,x.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function de(L,x,ne){let oe=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(oe=n.TEXTURE_3D);const ue=ie(L,x),Se=x.source;t.bindTexture(oe,L.__webglTexture,n.TEXTURE0+ne);const Re=i.get(Se);if(Se.version!==Re.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+ne),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const _e=lt.getPrimaries(lt.workingColorSpace),De=x.colorSpace===gi?null:lt.getPrimaries(x.colorSpace),Be=x.colorSpace===gi||_e===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ve=m(x.image,!1,s.maxTextureSize);ve=Ne(x,ve);const Ce=r.convert(x.format,x.colorSpace),Ye=r.convert(x.type);let Ue=y(x.internalFormat,Ce,Ye,x.normalized,x.colorSpace,x.isVideoTexture);we(oe,x);let Pe;const Ze=x.mipmaps,Ke=x.isVideoTexture!==!0,nt=Re.__version===void 0||ue===!0,j=Se.dataReady,Le=b(x,ve);if(x.isDepthTexture)Ue=S(x.format===Oi,x.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ue,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ce,Ye,null));else if(x.isDataTexture)if(Ze.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,Ze[0].width,Ze[0].height);for(let _e=0,De=Ze.length;_e<De;_e++)Pe=Ze[_e],Ke?j&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,_e,Ue,Pe.width,Pe.height,0,Ce,Ye,Pe.data);x.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,ve.width,ve.height),j&&ee(x,ve,Ce,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ce,Ye,ve.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,Ze[0].width,Ze[0].height,ve.depth);for(let _e=0,De=Ze.length;_e<De;_e++)if(Pe=Ze[_e],x.format!==Nn)if(Ce!==null)if(Ke){if(j)if(x.layerUpdates.size>0){const Be=fh(Pe.width,Pe.height,x.format,x.type);for(const ye of x.layerUpdates){const $e=Pe.data.subarray(ye*Be/Pe.data.BYTES_PER_ELEMENT,(ye+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,ye,Pe.width,Pe.height,1,Ce,$e)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ve.depth,Ce,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ue,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?j&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ve.depth,Ce,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ue,Pe.width,Pe.height,ve.depth,0,Ce,Ye,Pe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,Ze[0].width,Ze[0].height);for(let _e=0,De=Ze.length;_e<De;_e++)Pe=Ze[_e],x.format!==Nn?Ce!==null?Ke?j&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ue,Pe.width,Pe.height,0,Pe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?j&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,_e,Ue,Pe.width,Pe.height,0,Ce,Ye,Pe.data)}else if(x.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,ve.width,ve.height,ve.depth),j)if(x.layerUpdates.size>0){const _e=fh(ve.width,ve.height,x.format,x.type);for(const De of x.layerUpdates){const Be=ve.data.subarray(De*_e/ve.data.BYTES_PER_ELEMENT,(De+1)*_e/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,ve.width,ve.height,1,Ce,Ye,Be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ce,Ye,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ve.width,ve.height,ve.depth,0,Ce,Ye,ve.data);else if(x.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,Le,Ue,ve.width,ve.height,ve.depth),j&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ce,Ye,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ve.width,ve.height,ve.depth,0,Ce,Ye,ve.data);else if(x.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Le,Ue,ve.width,ve.height);else{let _e=ve.width,De=ve.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ue,_e,De,0,Ce,Ye,null),_e>>=1,De>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ve.parentNode!==_e){_e.appendChild(ve),f.add(x),_e.onpaint=De=>{const Be=De.changedElements;for(const ye of f)Be.includes(ye.image)&&(ye.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Be=n.RGBA,ye=n.RGBA,$e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,ye,$e,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(Ke&&nt){const _e=Te(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height)}for(let _e=0,De=Ze.length;_e<De;_e++)Pe=Ze[_e],Ke?j&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce,Ye,Pe):t.texImage2D(n.TEXTURE_2D,_e,Ue,Ce,Ye,Pe);x.generateMipmaps=!1}else if(Ke){if(nt){const _e=Te(ve);t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height)}j&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ye,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Ce,Ye,ve);d(x)&&M(oe),Re.__version=Se.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function re(L,x,ne){if(x.image.length!==6)return;const oe=ie(L,x),ue=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+ne);const Se=i.get(ue);if(ue.version!==Se.__version||oe===!0){t.activeTexture(n.TEXTURE0+ne);const Re=lt.getPrimaries(lt.workingColorSpace),pe=x.colorSpace===gi?null:lt.getPrimaries(x.colorSpace),ve=x.colorSpace===gi||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,Ye=x.image[0]&&x.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Ce&&!Ye?Ue[ye]=m(x.image[ye],!0,s.maxCubemapSize):Ue[ye]=Ye?x.image[ye].image:x.image[ye],Ue[ye]=Ne(x,Ue[ye]);const Pe=Ue[0],Ze=r.convert(x.format,x.colorSpace),Ke=r.convert(x.type),nt=y(x.internalFormat,Ze,Ke,x.normalized,x.colorSpace),j=x.isVideoTexture!==!0,Le=Se.__version===void 0||oe===!0,_e=ue.dataReady;let De=b(x,Pe);we(n.TEXTURE_CUBE_MAP,x);let Be;if(Ce){j&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,nt,Pe.width,Pe.height);for(let ye=0;ye<6;ye++){Be=Ue[ye].mipmaps;for(let $e=0;$e<Be.length;$e++){const We=Be[$e];x.format!==Nn?Ze!==null?j?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,We.width,We.height,Ze,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,nt,We.width,We.height,0,We.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,We.width,We.height,Ze,Ke,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,nt,We.width,We.height,0,Ze,Ke,We.data)}}}else{if(Be=x.mipmaps,j&&Le){Be.length>0&&De++;const ye=Te(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,nt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ye){j?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,Ze,Ke,Ue[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,nt,Ue[ye].width,Ue[ye].height,0,Ze,Ke,Ue[ye].data);for(let $e=0;$e<Be.length;$e++){const At=Be[$e].image[ye].image;j?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,At.width,At.height,Ze,Ke,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,nt,At.width,At.height,0,Ze,Ke,At.data)}}else{j?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ze,Ke,Ue[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,nt,Ze,Ke,Ue[ye]);for(let $e=0;$e<Be.length;$e++){const We=Be[$e];j?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,Ze,Ke,We.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,nt,Ze,Ke,We.image[ye])}}}d(x)&&M(n.TEXTURE_CUBE_MAP),Se.__version=ue.version,x.onUpdate&&x.onUpdate(x)}L.__version=x.version}function C(L,x,ne,oe,ue,Se){const Re=r.convert(ne.format,ne.colorSpace),pe=r.convert(ne.type),ve=y(ne.internalFormat,Re,pe,ne.normalized,ne.colorSpace),Ce=i.get(x),Ye=i.get(ne);if(Ye.__renderTarget=x,!Ce.__hasExternalTextures){const Ue=Math.max(1,x.width>>Se),Pe=Math.max(1,x.height>>Se);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,Se,ve,Ue,Pe,x.depth,0,Re,pe,null):t.texImage2D(ue,Se,ve,Ue,Pe,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Me(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ue,Ye.__webglTexture,0,ge(x)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ue,Ye.__webglTexture,Se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(L,x,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,L),x.depthBuffer){const oe=x.depthTexture,ue=oe&&oe.isDepthTexture?oe.type:null,Se=S(x.stencilBuffer,ue),Re=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Me(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(x),Se,x.width,x.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(x),Se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,L)}else{const oe=x.textures;for(let ue=0;ue<oe.length;ue++){const Se=oe[ue],Re=r.convert(Se.format,Se.colorSpace),pe=r.convert(Se.type),ve=y(Se.internalFormat,Re,pe,Se.normalized,Se.colorSpace);Me(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(x),ve,x.width,x.height):ne?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(x),ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(L,x,ne){const oe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=i.get(x.depthTexture);if(ue.__renderTarget=x,(!ue.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),we(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ce=r.convert(x.depthTexture.format),Ye=r.convert(x.depthTexture.type);let Ue;x.depthTexture.format===ui?Ue=n.DEPTH_COMPONENT24:x.depthTexture.format===Oi&&(Ue=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ue,x.width,x.height,0,Ce,Ye,null)}}else Q(x.depthTexture,0);const Se=ue.__webglTexture,Re=ge(x),pe=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+ne:n.TEXTURE_2D,ve=x.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ui)Me(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Se,0);else if(x.depthTexture.format===Oi)Me(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,Se,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(L){const x=i.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==L.depthTexture){const oe=L.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),oe){const ue=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,oe.removeEventListener("dispose",ue)};oe.addEventListener("dispose",ue),x.__depthDisposeCallback=ue}x.__boundDepthTexture=oe}if(L.depthTexture&&!x.__autoAllocateDepthBuffer)if(ne)for(let oe=0;oe<6;oe++)X(x.__webglFramebuffer[oe],L,oe);else{const oe=L.texture.mipmaps;oe&&oe.length>0?X(x.__webglFramebuffer[0],L,0):X(x.__webglFramebuffer,L,0)}else if(ne){x.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[oe]),x.__webglDepthbuffer[oe]===void 0)x.__webglDepthbuffer[oe]=n.createRenderbuffer(),P(x.__webglDepthbuffer[oe],L,!1);else{const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=x.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Se)}}else{const oe=L.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),P(x.__webglDepthbuffer,L,!1);else{const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(L,x,ne){const oe=i.get(L);x!==void 0&&C(oe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&Z(L)}function F(L){const x=L.texture,ne=i.get(L),oe=i.get(x);L.addEventListener("dispose",_);const ue=L.textures,Se=L.isWebGLCubeRenderTarget===!0,Re=ue.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=x.version,o.memory.textures++),Se){ne.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){ne.__webglFramebuffer[pe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)ne.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else ne.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){ne.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)ne.__webglFramebuffer[pe]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,ve=ue.length;pe<ve;pe++){const Ce=i.get(ue[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Me(L)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){const ve=ue[pe];ne.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]);const Ce=r.convert(ve.format,ve.colorSpace),Ye=r.convert(ve.type),Ue=y(ve.internalFormat,Ce,Ye,ve.normalized,ve.colorSpace,L.isXRRenderTarget===!0),Pe=ge(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ue,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,ne.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),P(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Se){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),we(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)C(ne.__webglFramebuffer[pe][ve],L,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else C(ne.__webglFramebuffer[pe],L,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);d(x)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,ve=ue.length;pe<ve;pe++){const Ce=ue[pe],Ye=i.get(Ce);let Ue=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ye.__webglTexture),we(Ue,Ce),C(ne.__webglFramebuffer,L,Ce,n.COLOR_ATTACHMENT0+pe,Ue,0),d(Ce)&&M(Ue)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),we(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)C(ne.__webglFramebuffer[ve],L,x,n.COLOR_ATTACHMENT0,pe,ve);else C(ne.__webglFramebuffer,L,x,n.COLOR_ATTACHMENT0,pe,0);d(x)&&M(pe),t.unbindTexture()}L.depthBuffer&&Z(L)}function Y(L){const x=L.textures;for(let ne=0,oe=x.length;ne<oe;ne++){const ue=x[ne];if(d(ue)){const Se=w(L),Re=i.get(ue).__webglTexture;t.bindTexture(Se,Re),M(Se),t.unbindTexture()}}}const se=[],O=[];function te(L){if(L.samples>0){if(Me(L)===!1){const x=L.textures,ne=L.width,oe=L.height;let ue=n.COLOR_BUFFER_BIT;const Se=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(L),pe=x.length>1;if(pe)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ve=L.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const Ye=i.get(x[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,ne,oe,0,0,ne,oe,ue,n.NEAREST),l===!0&&(se.length=0,O.length=0,se.push(n.COLOR_ATTACHMENT0+Ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(se.push(Se),O.push(Se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const Ye=i.get(x[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const x=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ge(L){return Math.min(s.maxSamples,L.samples)}function Me(L){const x=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(L){const x=o.render.frame;u.get(L)!==x&&(u.set(L,x),L.update())}function Ne(L,x){const ne=L.colorSpace,oe=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==Tr&&ne!==gi&&(lt.getTransfer(ne)===xt?(oe!==Nn||ue!==vn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",ne)),x}function Te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=V,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=C,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rf(n,e){function t(i,s=gi){let r;const o=lt.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return n.BYTE;if(i===wc)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===Ra)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===Rc)return n.ALPHA;if(i===Cc)return n.RGB;if(i===Nn)return n.RGBA;if(i===ui)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===La)return n.RED;if(i===Da)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===Ia)return n.RG_INTEGER;if(i===Na)return n.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===vr)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Go||i===Vo||i===Ho||i===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xo||i===qo||i===Yo||i===Zo||i===$o||i===Er||i===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xo||i===qo)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zo)return r.COMPRESSED_R11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Er)return r.COMPRESSED_RG11_EAC;if(i===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ko||i===Qo||i===jo||i===ea||i===ta||i===na||i===ia||i===sa||i===ra||i===oa||i===aa||i===la||i===ca||i===ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ko)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ea)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ta)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===na)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ia)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ra)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===aa)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===la)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ca)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ua)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ha||i===da||i===fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ha)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pa||i===ma||i===wr||i===ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kv=`
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

}`;class Qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zn({vertexShader:Jv,fragmentShader:Kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jv extends Ti{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Qv,d={},M=t.getContextAttributes();let w=null,y=null;const S=[],b=[],R=new be;let _=null,A=null;const T=new En;T.viewport=new It;const I=new En;I.viewport=new It;const B=[T,I],W=new $d;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ee=S[z];return ee===void 0&&(ee=new Po,S[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=S[z];return ee===void 0&&(ee=new Po,S[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=S[z];return ee===void 0&&(ee=new Po,S[z]=ee),ee.getHandSpace()};function q(z){const ee=b.indexOf(z.inputSource);if(ee===-1)return;const de=S[ee];de!==void 0&&(de.update(z.inputSource,z.frame,c||o),de.dispatchEvent({type:z.type,data:z.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let z=0;z<S.length;z++){const ee=b[z];ee!==null&&(b[z]=null,S[z].disconnect(ee))}N=null,k=null,m.reset();for(const z in d)delete d[z];if(e.setRenderTarget(w),p=null,h=null,f=null,s=null,y=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),A!==null){const z=A.camera;z.fov=A.fov,z.zoom=A.zoom,z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,re=null,C=null;M.depth&&(C=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=M.stencil?Oi:ui,re=M.stencil?Gs:Kn);const P={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(P),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Un(h.textureWidth,h.textureHeight,{format:Nn,type:vn,depthTexture:new Hs(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Un(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(z){for(let ee=0;ee<z.removed.length;ee++){const de=z.removed[ee],re=b.indexOf(de);re>=0&&(b[re]=null,S[re].disconnect(de))}for(let ee=0;ee<z.added.length;ee++){const de=z.added[ee];let re=b.indexOf(de);if(re===-1){for(let P=0;P<S.length;P++)if(P>=b.length){b.push(de),re=P;break}else if(b[P]===null){b[P]=de,re=P;break}if(re===-1)break}const C=S[re];C&&C.connect(de)}}const H=new D,$=new D;function K(z,ee,de){H.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const re=H.distanceTo($),C=ee.projectionMatrix.elements,P=de.projectionMatrix.elements,X=C[14]/(C[10]-1),Z=C[14]/(C[10]+1),V=(C[9]+1)/C[5],F=(C[9]-1)/C[5],Y=(C[8]-1)/C[0],se=(P[8]+1)/P[0],O=X*Y,te=X*se,ge=re/(-Y+se),Me=ge*-Y;if(ee.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Me),z.translateZ(ge),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),C[10]===-1)z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const U=X+ge,Ne=Z+ge,Te=O-Me,L=te+(re-Me),x=V*Z/Ne*U,ne=F*Z/Ne*U;z.projectionMatrix.makePerspective(Te,L,x,ne,U,Ne),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ce(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let ee=z.near,de=z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(de=m.depthFar)),W.near=I.near=T.near=ee,W.far=I.far=T.far=de,(N!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,k=W.far),W.layers.mask=z.layers.mask|6,T.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const re=z.parent,C=W.cameras;ce(W,re);for(let P=0;P<C.length;P++)ce(C[P],re);C.length===2?K(W,T,I):W.projectionMatrix.copy(T.projectionMatrix),A===null&&z.isPerspectiveCamera&&(A={camera:z,fov:z.fov,zoom:z.zoom}),fe(z,W,re)};function fe(z,ee,de){de===null?z.matrix.copy(ee.matrixWorld):(z.matrix.copy(de.matrixWorld),z.matrix.invert(),z.matrix.multiply(ee.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Rr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(z){return d[z]};let xe=null;function we(z,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let re=!1;de.length!==W.cameras.length&&(W.cameras.length=0,re=!0);for(let Z=0;Z<de.length;Z++){const V=de[Z];let F=null;if(p!==null)F=p.getViewport(V);else{const se=f.getViewSubImage(h,V);F=se.viewport,Z===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let Y=B[Z];Y===void 0&&(Y=new En,Y.layers.enable(Z),Y.viewport=new It,B[Z]=Y),Y.matrix.fromArray(V.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(V.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(F.x,F.y,F.width,F.height),Z===0&&(W.matrix.copy(Y.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),re===!0&&W.cameras.push(Y)}const C=s.enabledFeatures;if(C&&C.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Z=f.getDepthInformation(de[0]);Z&&Z.isValid&&Z.texture&&m.init(Z,s.renderState)}if(C&&C.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Z=0;Z<de.length;Z++){const V=de[Z].camera;if(V){let F=d[V];F||(F=new Bc,d[V]=F);const Y=f.getCameraImage(V);F.sourceTexture=Y}}}}for(let de=0;de<S.length;de++){const re=b[de],C=S[de];re!==null&&C!==void 0&&C.update(re,ee,c||o)}xe&&xe(z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ie=new Qd;ie.setAnimationLoop(we),this.setAnimationLoop=function(z){xe=z},this.dispose=function(){}}}const ex=new pt,of=new tt;of.set(-1,0,0,0,1,0,0,0,1);function tx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Vd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,w,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(of),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const b=S.program;i.uniformBlockBinding(y,b)}function c(y,S){let b=s[y.id];b===void 0&&(m(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",M));const R=S.program;i.updateUBOMapping(y,R);const _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){const S=f();y.__bindingPointIndex=S;const b=n.createBuffer(),R=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=s[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,A=b.length;_<A;_++){const T=b[_];if(Array.isArray(T))for(let I=0,B=T.length;I<B;I++)p(T[I],_,I,R);else p(T,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,b,R){if(v(y,S,b,R)===!0){const _=y.__offset,A=y.value;if(Array.isArray(A)){let T=0;for(let I=0;I<A.length;I++){const B=A[I],W=d(B);g(B,y.__data,T),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(T+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function g(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function v(y,S,b,R){const _=y.value,A=S+"_"+b;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const T=R[A];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function m(y){const S=y.uniforms;let b=0;const R=16;for(let A=0,T=S.length;A<T;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let B=0,W=I.length;B<W;B++){const N=I[B],k=Array.isArray(N.value)?N.value:[N.value];for(let q=0,G=k.length;q<G;q++){const Q=k[q],H=d(Q),$=b%R,K=$%H.boundary,ce=$+K;b+=K,ce!==0&&R-ce<H.storage&&(b+=R-ce),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=H.storage}}}const _=b%R;return _>0&&(b+=R-_),y.__size=b,y.__cache={},this}function d(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):je("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){const S=y.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function sx(){return ii===null&&(ii=new Nc(ix,16,16,Wi,Qn),ii.name="DFG_LUT",ii.minFilter=Qt,ii.magFilter=Qt,ii.wrapS=oi,ii.wrapT=oi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class af{constructor(e={}){const{canvas:t=wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([Na,Ia,Da]),d=new Set([vn,Kn,ks,Gs,Ca,Pa]),M=new Uint32Array(4),w=new Int32Array(4),y=new D;let S=null,b=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let I=!1,B=null,W=null,N=null,k=null;this._outputColorSpace=on;let q=0,G=0,Q=null,H=-1,$=null;const K=new It,ce=new It;let fe=null;const xe=new ot(0);let we=0,ie=t.width,z=t.height,ee=1,de=null,re=null;const C=new It(0,0,ie,z),P=new It(0,0,ie,z);let X=!1;const Z=new ka;let V=!1,F=!1;const Y=new pt,se=new D,O=new It,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Me(){return Q===null?ee:1}let U=i;function Ne(E,J){return t.getContext(E,J)}let Te,L,x,ne,oe,ue,Se,Re,pe,ve,Ce,Ye,Ue,Pe,Ze,Ke,nt,j,Le,_e,De,Be,ye;try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ta}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),U===null){const J="webgl2";if(U=Ne(J,E),U===null)throw Ne(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(E){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),ut("WebGLRenderer: "+E.message),E}function $e(){Te=new r_(U),Te.init(),De=new rf(U,Te),L=new $g(U,Te,e,De),x=new Zv(U,Te),L.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),W=U.createFramebuffer(),N=U.createFramebuffer(),k=U.createFramebuffer(),ne=new l_(U),oe=new Nv,ue=new $v(U,Te,x,oe,L,De,ne),Se=new s_(T),Re=new um(U),Be=new Yg(U,Re),pe=new o_(U,Re,ne,Be),ve=new u_(U,pe,Re,Be,ne),j=new c_(U,L,ue),Ze=new Jg(oe),Ce=new Iv(T,Se,Te,L,Be,Ze),Ye=new tx(T,oe),Ue=new Fv,Pe=new Vv(Te),nt=new qg(T,Se,x,ve,g,l),Ke=new Yv(T,ve,L),ye=new nx(U,ne,L,x),Le=new Zg(U,Te,ne),_e=new a_(U,Te,ne),ne.programs=Ce.programs,T.capabilities=L,T.extensions=Te,T.properties=oe,T.renderLists=Ue,T.shadowMap=Ke,T.state=x,T.info=ne}v!==vn&&(A=new d_(v,t.width,t.height,a,s,r));const We=new jv(T,U);this.xr=We,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(ie,z,!1))},this.getSize=function(E){return E.set(ie,z)},this.setSize=function(E,J,he=!0){if(We.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,z=J,t.width=Math.floor(E*ee),t.height=Math.floor(J*ee),he===!0&&(t.style.width=E+"px",t.style.height=J+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,J)},this.getDrawingBufferSize=function(E){return E.set(ie*ee,z*ee).floor()},this.setDrawingBufferSize=function(E,J,he){ie=E,z=J,ee=he,t.width=Math.floor(E*he),t.height=Math.floor(J*he),this.setViewport(0,0,E,J)},this.setEffects=function(E){if(v===vn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let J=0;J<E.length;J++)if(E[J].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,J,he,ae){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,J,he,ae),x.viewport(K.copy(C).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(P)},this.setScissor=function(E,J,he,ae){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,J,he,ae),x.scissor(ce.copy(P).multiplyScalar(ee).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){x.setScissorTest(X=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(E=!0,J=!0,he=!0){let ae=0;if(E){let le=!1;if(Q!==null){const ze=Q.texture.format;le=m.has(ze)}if(le){const ze=Q.texture.type,Ge=d.has(ze),Fe=nt.getClearColor(),Ve=nt.getClearAlpha(),qe=Fe.r,st=Fe.g,at=Fe.b;Ge?(M[0]=qe,M[1]=st,M[2]=at,M[3]=Ve,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=qe,w[1]=st,w[2]=at,w[3]=Ve,U.clearBufferiv(U.COLOR,0,w))}else ae|=U.COLOR_BUFFER_BIT}J&&(ae|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ae|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&U.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),nt.dispose(),Ue.dispose(),Pe.dispose(),oe.dispose(),Se.dispose(),ve.dispose(),Be.dispose(),ye.dispose(),Ce.dispose(),We.dispose(),We.removeEventListener("sessionstart",_u),We.removeEventListener("sessionend",vu),Ji.stop()};function At(E){E.preventDefault(),Kl("WebGLRenderer: Context Lost."),I=!0}function _t(){Kl("WebGLRenderer: Context Restored."),I=!1;const E=ne.autoReset,J=Ke.enabled,he=Ke.autoUpdate,ae=Ke.needsUpdate,le=Ke.type;$e(),ne.autoReset=E,Ke.enabled=J,Ke.autoUpdate=he,Ke.needsUpdate=ae,Ke.type=le}function Gn(E){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){const J=E.target;J.removeEventListener("dispose",ei),If(J)}function If(E){Nf(E),oe.remove(E)}function Nf(E){const J=oe.get(E).programs;J!==void 0&&(J.forEach(function(he){Ce.releaseProgram(he)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,J,he,ae,le,ze){J===null&&(J=te);const Ge=le.isMesh&&le.matrixWorld.determinantAffine()<0,Fe=Of(E,J,he,ae,le);x.setMaterial(ae,Ge);let Ve=he.index,qe=1;if(ae.wireframe===!0){if(Ve=pe.getWireframeAttribute(he),Ve===void 0)return;qe=2}const st=he.drawRange,at=he.attributes.position;let He=st.start*qe,vt=(st.start+st.count)*qe;ze!==null&&(He=Math.max(He,ze.start*qe),vt=Math.min(vt,(ze.start+ze.count)*qe)),Ve!==null?(He=Math.max(He,0),vt=Math.min(vt,Ve.count)):at!=null&&(He=Math.max(He,0),vt=Math.min(vt,at.count));const kt=vt-He;if(kt<0||kt===1/0)return;Be.setup(le,ae,Fe,he,Ve);let Lt,Tt=Le;if(Ve!==null&&(Lt=Re.get(Ve),Tt=_e,Tt.setIndex(Lt)),le.isMesh)ae.wireframe===!0?(x.setLineWidth(ae.wireframeLinewidth*Me()),Tt.setMode(U.LINES)):Tt.setMode(U.TRIANGLES);else if(le.isLine){let nn=ae.linewidth;nn===void 0&&(nn=1),x.setLineWidth(nn*Me()),le.isLineSegments?Tt.setMode(U.LINES):le.isLineLoop?Tt.setMode(U.LINE_LOOP):Tt.setMode(U.LINE_STRIP)}else le.isPoints?Tt.setMode(U.POINTS):le.isSprite&&Tt.setMode(U.TRIANGLES);if(le.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))Tt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const nn=le._multiDrawStarts,ke=le._multiDrawCounts,ln=le._multiDrawCount,ft=Ve?Re.get(Ve).bytesPerElement:1,Tn=oe.get(ae).currentProgram.getUniforms();for(let ti=0;ti<ln;ti++)Tn.setValue(U,"_gl_DrawID",ti),Tt.render(nn[ti]/ft,ke[ti])}else if(le.isInstancedMesh)Tt.renderInstances(He,kt,le.count);else if(he.isInstancedBufferGeometry){const nn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,ke=Math.min(he.instanceCount,nn);Tt.renderInstances(He,kt,ke)}else Tt.render(He,kt)};function gu(E,J,he,ae){B!==null&&E.isNodeMaterial&&B.setObject(ae,E),V===!0&&Ze.setState(E,he,!1),E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,Yr(E,J,ae),E.side=Vi,E.needsUpdate=!0,Yr(E,J,ae),E.side=Pn):Yr(E,J,ae)}this.compile=function(E,J,he=null){he===null&&(he=E),B!==null&&B.renderStart(E,J,he),b=Pe.get(he),b.init(J),_.push(b),he.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(b.pushLight(le),le.castShadow&&b.pushShadow(le))}),E!==he&&E.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(b.pushLight(le),le.castShadow&&b.pushShadow(le))}),b.setupLights(),B!==null&&B.updateLights(b.state.lightsArray),F=this.localClippingEnabled,V=Ze.init(this.clippingPlanes,F),V===!0&&Ze.setGlobalState(this.clippingPlanes,J),B!==null&&Ke.render(b.state.shadowsArray,he,J);const ae=new Set;return E.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const ze=le.material;if(ze)if(Array.isArray(ze))for(let Ge=0;Ge<ze.length;Ge++){const Fe=ze[Ge];gu(Fe,he,J,le),ae.add(Fe)}else gu(ze,he,J,le),ae.add(ze)}),b=_.pop(),B!==null&&B.renderEnd(),ae},this.compileAsync=function(E,J,he=null){const ae=this.compile(E,J,he);return new Promise(le=>{function ze(){if(ae.forEach(function(Ge){const Ve=oe.get(Ge).currentProgram;(Ve===void 0||Ve.isReady())&&ae.delete(Ge)}),ae.size===0){le(E);return}setTimeout(ze,10)}Te.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let ol=null;function Uf(E){ol&&ol(E)}function _u(){Ji.stop()}function vu(){Ji.start()}const Ji=new Qd;Ji.setAnimationLoop(Uf),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(E){ol=E,We.setAnimationLoop(E),E===null?Ji.stop():Ji.start()},We.addEventListener("sessionstart",_u),We.addEventListener("sessionend",vu),this.render=function(E,J){if(J!==void 0&&J.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(E,J);const he=We.enabled===!0&&We.isPresenting===!0,ae=A!==null&&(Q===null||he)&&A.begin(T,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(J),J=We.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,J,Q),b=Pe.get(E,_.length),b.init(J),b.state.textureUnits=ue.getTextureUnits(),_.push(b),Y.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z.setFromProjectionMatrix(Y,Yn,J.reversedDepth),F=this.localClippingEnabled,V=Ze.init(this.clippingPlanes,F),S=Ue.get(E,R.length),S.init(),R.push(S),We.enabled===!0&&We.isPresenting===!0){const Ge=T.xr.getDepthSensingMesh();Ge!==null&&al(Ge,J,-1/0,T.sortObjects)}al(E,J,0,T.sortObjects),S.finish(),B!==null&&B.updateLights(b.state.lightsArray),T.sortObjects===!0&&S.sort(de,re),ge=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,ge&&nt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),V===!0&&Ze.beginShadows();const le=b.state.shadowsArray;if(Ke.render(le,E,J),V===!0&&Ze.endShadows(),(ae&&A.hasRenderPass())===!1){const Ge=S.opaque,Fe=S.transmissive;if(b.setupLights(),J.isArrayCamera){const Ve=J.cameras;if(Fe.length>0)for(let qe=0,st=Ve.length;qe<st;qe++){const at=Ve[qe];yu(Ge,Fe,E,at)}ge&&nt.render(E);for(let qe=0,st=Ve.length;qe<st;qe++){const at=Ve[qe];xu(S,E,at,at.viewport)}}else Fe.length>0&&yu(Ge,Fe,E,J),ge&&nt.render(E),xu(S,E,J)}Q!==null&&G===0&&(ue.updateMultisampleRenderTarget(Q),ue.updateRenderTargetMipmap(Q)),ae&&A.end(T),E.isScene===!0&&E.onAfterRender(T,E,J),Be.resetDefaultState(),H=-1,$=null,_.pop(),_.length>0?(b=_[_.length-1],ue.setTextureUnits(b.state.textureUnits),V===!0&&Ze.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,B!==null&&B.renderEnd()};function al(E,J,he,ae){if(E.visible===!1)return;if(E.layers.test(J.layers)){if(E.isGroup)he=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(J);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Z)){ae&&O.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const Ge=ve.update(E),Fe=E.material;Fe.visible&&S.push(E,Ge,Fe,he,O.z,null,J)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Z))){const Ge=ve.update(E),Fe=E.material;if(ae&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),O.copy(E.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),O.copy(Ge.boundingSphere.center)),O.applyMatrix4(E.matrixWorld).applyMatrix4(Y)),Array.isArray(Fe)){const Ve=Ge.groups;for(let qe=0,st=Ve.length;qe<st;qe++){const at=Ve[qe],He=Fe[at.materialIndex];He&&He.visible&&S.push(E,Ge,He,he,O.z,at,J)}}else Fe.visible&&S.push(E,Ge,Fe,he,O.z,null,J)}}const ze=E.children;for(let Ge=0,Fe=ze.length;Ge<Fe;Ge++)al(ze[Ge],J,he,ae)}function xu(E,J,he,ae){const{opaque:le,transmissive:ze,transparent:Ge}=E;b.setupLightsView(he),V===!0&&Ze.setGlobalState(T.clippingPlanes,he),ae&&x.viewport(K.copy(ae)),le.length>0&&qr(le,J,he),ze.length>0&&qr(ze,J,he),Ge.length>0&&qr(Ge,J,he),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function yu(E,J,he,ae){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ae.id]===void 0){const He=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ae.id]=new Un(1,1,{generateMipmaps:!0,type:He?Qn:vn,minFilter:Fi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const ze=b.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||K;ze.setSize(Ge.z*T.transmissionResolutionScale,Ge.w*T.transmissionResolutionScale);const Fe=T.getRenderTarget(),Ve=T.getActiveCubeFace(),qe=T.getActiveMipmapLevel();T.setRenderTarget(ze),T.getClearColor(xe),we=T.getClearAlpha(),we<1&&T.setClearColor(16777215,.5),T.clear(),ge&&nt.render(he);const st=T.toneMapping;T.toneMapping=Zn;const at=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),b.setupLightsView(ae),V===!0&&Ze.setGlobalState(T.clippingPlanes,ae),qr(E,he,ae),ue.updateMultisampleRenderTarget(ze),ue.updateRenderTargetMipmap(ze),Te.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let vt=0,kt=J.length;vt<kt;vt++){const Lt=J[vt],{object:Tt,geometry:nn,material:ke,group:ln}=Lt;if(ke.side===Pn&&Tt.layers.test(ae.layers)){const ft=ke.side;ke.side=fn,ke.needsUpdate=!0,Mu(Tt,he,ae,nn,ke,ln),ke.side=ft,ke.needsUpdate=!0,He=!0}}He===!0&&(ue.updateMultisampleRenderTarget(ze),ue.updateRenderTargetMipmap(ze))}T.setRenderTarget(Fe,Ve,qe),T.setClearColor(xe,we),at!==void 0&&(ae.viewport=at),T.toneMapping=st}function qr(E,J,he){const ae=J.isScene===!0?J.overrideMaterial:null;for(let le=0,ze=E.length;le<ze;le++){const Ge=E[le],{object:Fe,geometry:Ve,group:qe}=Ge;let st=Ge.material;st.allowOverride===!0&&ae!==null&&(st=ae),Fe.layers.test(he.layers)&&Mu(Fe,J,he,Ve,st,qe)}}function Mu(E,J,he,ae,le,ze){B!==null&&le.isNodeMaterial&&B.setObject(E,le),E.onBeforeRender(T,J,he,ae,le,ze),E.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),le.onBeforeRender(T,J,he,ae,E,ze),le.transparent===!0&&le.side===Pn&&le.forceSinglePass===!1?(le.side=fn,le.needsUpdate=!0,T.renderBufferDirect(he,J,ae,le,E,ze),le.side=Vi,le.needsUpdate=!0,T.renderBufferDirect(he,J,ae,le,E,ze),le.side=Pn):T.renderBufferDirect(he,J,ae,le,E,ze),E.onAfterRender(T,J,he,ae,le,ze)}function Yr(E,J,he){J.isScene!==!0&&(J=te);const ae=oe.get(E),le=b.state.lights,ze=b.state.shadowsArray,Ge=le.state.version,Fe=Ce.getParameters(E,le.state,ze,J,he,b.state.lightProbeGridArray),Ve=Ce.getProgramCacheKey(Fe);let qe=ae.programs;ae.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?J.environment:null,ae.fog=J.fog;const st=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ae.envMap=Se.get(E.envMap||ae.environment,st),ae.envMapRotation=ae.environment!==null&&E.envMap===null?J.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",ei),qe=new Map,ae.programs=qe);let at=qe.get(Ve);if(at!==void 0){if(ae.currentProgram===at&&ae.lightsStateVersion===Ge)return bu(E,Fe),at}else Fe.uniforms=Ce.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,he,Fe),E.onBeforeCompile(Fe,T),at=Ce.acquireProgram(Fe,Ve),qe.set(Ve,at),ae.uniforms=Fe.uniforms;const He=ae.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=Ze.uniform),bu(E,Fe),ae.needsLights=Bf(E),ae.lightsStateVersion=Ge,ae.needsLights&&(He.ambientLightColor.value=le.state.ambient,He.lightProbe.value=le.state.probe,He.sunLights.value=le.state.sun,He.sunLightShadows.value=le.state.sunShadow,He.directionalLights.value=le.state.directional,He.directionalLightShadows.value=le.state.directionalShadow,He.spotLights.value=le.state.spot,He.spotLightShadows.value=le.state.spotShadow,He.rectAreaLights.value=le.state.rectArea,He.ltc_1.value=le.state.rectAreaLTC1,He.ltc_2.value=le.state.rectAreaLTC2,He.pointLights.value=le.state.point,He.pointLightShadows.value=le.state.pointShadow,He.hemisphereLights.value=le.state.hemi,He.sunShadowMatrix.value=le.state.sunShadowMatrix,He.sunShadowCascade.value=le.state.sunShadowCascade,He.directionalShadowMatrix.value=le.state.directionalShadowMatrix,He.spotLightMatrix.value=le.state.spotLightMatrix,He.spotLightMap.value=le.state.spotLightMap,He.pointShadowMatrix.value=le.state.pointShadowMatrix),ae.lightProbeGrid=b.state.lightProbeGridArray.length>0,ae.currentProgram=at,ae.uniformsList=null,at}function Su(E){if(E.uniformsList===null){const J=E.currentProgram.getUniforms();E.uniformsList=Lo.seqWithValue(J.seq,E.uniforms)}return E.uniformsList}function bu(E,J){const he=oe.get(E);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function Ff(E,J){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(J.matrixWorld);for(let he=0,ae=E.length;he<ae;he++){const le=E[he];if(le.texture!==null&&le.boundingBox.containsPoint(y))return le}return null}function Of(E,J,he,ae,le){J.isScene!==!0&&(J=te),ue.resetTextureUnits();const ze=J.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?J.environment:null,Fe=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:lt.workingColorSpace,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=Se.get(ae.envMap||Ge,Ve),st=ae.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,at=!!he.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),He=!!he.morphAttributes.position,vt=!!he.morphAttributes.normal,kt=!!he.morphAttributes.color;let Lt=Zn;ae.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Lt=T.toneMapping);const Tt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,nn=Tt!==void 0?Tt.length:0,ke=oe.get(ae),ln=b.state.lights;if(V===!0&&(F===!0||E!==$)){const Rt=E===$&&ae.id===H;Ze.setState(ae,E,Rt)}let ft=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ln.state.version||ke.outputColorSpace!==Fe||le.isBatchedMesh&&ke.batching===!1||!le.isBatchedMesh&&ke.batching===!0||le.isBatchedMesh&&ke.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&ke.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&ke.instancing===!1||!le.isInstancedMesh&&ke.instancing===!0||le.isSkinnedMesh&&ke.skinning===!1||!le.isSkinnedMesh&&ke.skinning===!0||le.isInstancedMesh&&ke.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&ke.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&ke.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&ke.instancingMorph===!1&&le.morphTexture!==null||ke.envMap!==qe||ae.fog===!0&&ke.fog!==ze||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ze.numPlanes||ke.numIntersection!==Ze.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==at||ke.morphTargets!==He||ke.morphNormals!==vt||ke.morphColors!==kt||ke.toneMapping!==Lt||ke.morphTargetsCount!==nn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,ke.__version=ae.version);let Tn=ke.currentProgram;ft===!0&&(Tn=Yr(ae,J,le),B&&ae.isNodeMaterial&&B.onUpdateProgram(ae,Tn,ke));let ti=!1,Ri=!1,ps=!1;const Et=Tn.getUniforms(),Ot=ke.uniforms;if(x.useProgram(Tn.program)&&(ti=!0,Ri=!0,ps=!0),ae.id!==H&&(H=ae.id,Ri=!0),ke.needsLights){const Rt=Ff(b.state.lightProbeGridArray,le);ke.lightProbeGrid!==Rt&&(ke.lightProbeGrid=Rt,Ri=!0)}if(ti||$!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(U,"projectionMatrix",E.projectionMatrix),Et.setValue(U,"viewMatrix",E.matrixWorldInverse);const Pi=Et.map.cameraPosition;Pi!==void 0&&Pi.setValue(U,se.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&Et.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Et.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,Ri=!0,ps=!0)}if(ke.needsLights&&(ln.state.sunShadowMap.length>0&&Et.setValue(U,"sunShadowMap",ln.state.sunShadowMap,ue),ln.state.directionalShadowMap.length>0&&Et.setValue(U,"directionalShadowMap",ln.state.directionalShadowMap,ue),ln.state.spotShadowMap.length>0&&Et.setValue(U,"spotShadowMap",ln.state.spotShadowMap,ue),ln.state.pointShadowMap.length>0&&Et.setValue(U,"pointShadowMap",ln.state.pointShadowMap,ue)),le.isSkinnedMesh){Et.setOptional(U,le,"bindMatrix"),Et.setOptional(U,le,"bindMatrixInverse");const Rt=le.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Et.setValue(U,"boneTexture",Rt.boneTexture,ue))}le.isBatchedMesh&&(Et.setOptional(U,le,"batchingTexture"),Et.setValue(U,"batchingTexture",le._matricesTexture,ue),Et.setOptional(U,le,"batchingIdTexture"),Et.setValue(U,"batchingIdTexture",le._indirectTexture,ue),Et.setOptional(U,le,"batchingColorTexture"),le._colorsTexture!==null&&Et.setValue(U,"batchingColorTexture",le._colorsTexture,ue));const Ci=he.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&j.update(le,he,Tn),(Ri||ke.receiveShadow!==le.receiveShadow)&&(ke.receiveShadow=le.receiveShadow,Et.setValue(U,"receiveShadow",le.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&J.environment!==null&&(Ot.envMapIntensity.value=J.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=sx()),Ri){if(Et.setValue(U,"toneMappingExposure",T.toneMappingExposure),ke.needsLights&&zf(Ot,ps),ze&&ae.fog===!0&&Ye.refreshFogUniforms(Ot,ze),Ye.refreshMaterialUniforms(Ot,ae,ee,z,b.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.lightProbeGrid){const Rt=ke.lightProbeGrid;Ot.probesSH.value=Rt.texture,Ot.probesMin.value.copy(Rt.boundingBox.min),Ot.probesMax.value.copy(Rt.boundingBox.max),Ot.probesResolution.value.copy(Rt.resolution)}Lo.upload(U,Su(ke),Ot,ue)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Lo.upload(U,Su(ke),Ot,ue),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Et.setValue(U,"center",le.center),Et.setValue(U,"modelViewMatrix",le.modelViewMatrix),Et.setValue(U,"normalMatrix",le.normalMatrix),Et.setValue(U,"modelMatrix",le.matrixWorld),ae.uniformsGroups!==void 0){const Rt=ae.uniformsGroups;for(let Pi=0,ms=Rt.length;Pi<ms;Pi++){const wu=Rt[Pi];ye.update(wu,Tn),ye.bind(wu,Tn)}}return Tn}function zf(E,J){E.ambientLightColor.needsUpdate=J,E.lightProbe.needsUpdate=J,E.sunLights.needsUpdate=J,E.sunLightShadows.needsUpdate=J,E.directionalLights.needsUpdate=J,E.directionalLightShadows.needsUpdate=J,E.pointLights.needsUpdate=J,E.pointLightShadows.needsUpdate=J,E.spotLights.needsUpdate=J,E.spotLightShadows.needsUpdate=J,E.rectAreaLights.needsUpdate=J,E.hemisphereLights.needsUpdate=J}function Bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,J,he){const ae=oe.get(E);ae.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(E.texture).__webglTexture=J,oe.get(E.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:he,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,J){const he=oe.get(E);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(E,J=0,he=0){Q=E,q=J,G=he;let ae=null,le=!1,ze=!1;if(E){const Fe=oe.get(E);if(Fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,Fe.__webglFramebuffer),K.copy(E.viewport),ce.copy(E.scissor),fe=E.scissorTest,x.viewport(K),x.scissor(ce),x.setScissorTest(fe),H=-1;return}else if(Fe.__webglFramebuffer===void 0)ue.setupRenderTarget(E);else if(Fe.__hasExternalTextures)ue.rebindTextures(E,oe.get(E.texture).__webglTexture,oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const st=E.depthTexture;if(Fe.__boundDepthTexture!==st){if(st!==null&&oe.has(st)&&(E.width!==st.image.width||E.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(E)}}const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const qe=oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[J])?ae=qe[J][he]:ae=qe[J],le=!0):E.samples>0&&ue.useMultisampledRTT(E)===!1?ae=oe.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[he]:ae=qe,K.copy(E.viewport),ce.copy(E.scissor),fe=E.scissorTest}else K.copy(C).multiplyScalar(ee).floor(),ce.copy(P).multiplyScalar(ee).floor(),fe=X;if(he!==0&&(ae=W),x.bindFramebuffer(U.FRAMEBUFFER,ae)&&x.drawBuffers(E,ae),x.viewport(K),x.scissor(ce),x.setScissorTest(fe),le){const Fe=oe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+J,Fe.__webglTexture,he)}else if(ze){const Fe=J;for(let Ve=0;Ve<E.textures.length;Ve++){const qe=oe.get(E.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,he,Fe)}}else if(E!==null&&he!==0){const Fe=oe.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,he)}H=-1};function Eu(E){const J=oe.get(E);return(J.__readFormat!==E.format||J.__readType!==E.type)&&(J.__readFormat=E.format,J.__readType=E.type,J.__formatReadable=L.textureFormatReadable(E.format),J.__typeReadable=L.textureTypeReadable(E.type)),J}this.readRenderTargetPixels=function(E,J,he,ae,le,ze,Ge,Fe=0){if(!(E&&E.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){x.bindFramebuffer(U.FRAMEBUFFER,Ve);try{const qe=E.textures[Fe],st=qe.format,at=qe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Fe);const He=Eu(qe);if(He.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=E.width-ae&&he>=0&&he<=E.height-le&&U.readPixels(J,he,ae,le,De.convert(st),De.convert(at),ze)}finally{const qe=Q!==null?oe.get(Q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,J,he,ae,le,ze,Ge,Fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(J>=0&&J<=E.width-ae&&he>=0&&he<=E.height-le){x.bindFramebuffer(U.FRAMEBUFFER,Ve);const qe=E.textures[Fe],st=qe.format,at=qe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Fe);const He=Eu(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,ze.byteLength,U.STREAM_READ),U.readPixels(J,he,ae,le,De.convert(st),De.convert(at),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const kt=Q!==null?oe.get(Q).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,kt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qf(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ze),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(vt),U.deleteSync(Lt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,J=null,he=0){const ae=Math.pow(2,-he),le=Math.floor(E.image.width*ae),ze=Math.floor(E.image.height*ae),Ge=J!==null?J.x:0,Fe=J!==null?J.y:0;ue.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,he,0,0,Ge,Fe,le,ze),x.unbindTexture()},this.copyTextureToTexture=function(E,J,he=null,ae=null,le=0,ze=0){let Ge,Fe,Ve,qe,st,at,He,vt,kt;const Lt=E.isCompressedTexture?E.mipmaps[ze]:E.image;if(he!==null)Ge=he.max.x-he.min.x,Fe=he.max.y-he.min.y,Ve=he.isBox3?he.max.z-he.min.z:1,qe=he.min.x,st=he.min.y,at=he.isBox3?he.min.z:0;else{const Ot=Math.pow(2,-le);Ge=Math.floor(Lt.width*Ot),Fe=Math.floor(Lt.height*Ot),E.isDataArrayTexture?Ve=Lt.depth:E.isData3DTexture?Ve=Math.floor(Lt.depth*Ot):Ve=1,qe=0,st=0,at=0}ae!==null?(He=ae.x,vt=ae.y,kt=ae.z):(He=0,vt=0,kt=0);const Tt=De.convert(J.format),nn=De.convert(J.type);let ke;J.isData3DTexture?(ue.setTexture3D(J,0),ke=U.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ue.setTexture2DArray(J,0),ke=U.TEXTURE_2D_ARRAY):(ue.setTexture2D(J,0),ke=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);const ln=x.getParameter(U.UNPACK_ROW_LENGTH),ft=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=x.getParameter(U.UNPACK_SKIP_PIXELS),ti=x.getParameter(U.UNPACK_SKIP_ROWS),Ri=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,qe),x.pixelStorei(U.UNPACK_SKIP_ROWS,st),x.pixelStorei(U.UNPACK_SKIP_IMAGES,at);const ps=E.isDataArrayTexture||E.isData3DTexture,Et=J.isDataArrayTexture||J.isData3DTexture;if(E.isDepthTexture){const Ot=oe.get(E),Ci=oe.get(J),Rt=oe.get(Ot.__renderTarget),Pi=oe.get(Ci.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Rt.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let ms=0;ms<Ve;ms++)ps&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,oe.get(E).__webglTexture,le,at+ms),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,oe.get(J).__webglTexture,ze,kt+ms)),U.blitFramebuffer(qe,st,Ge,Fe,He,vt,Ge,Fe,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(le!==0||E.isRenderTargetTexture||oe.has(E)){const Ot=oe.get(E),Ci=oe.get(J);x.bindFramebuffer(U.READ_FRAMEBUFFER,N),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let Rt=0;Rt<Ve;Rt++)ps?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,le,at+Rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ot.__webglTexture,le),Et?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ci.__webglTexture,ze,kt+Rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ci.__webglTexture,ze),le!==0?U.blitFramebuffer(qe,st,Ge,Fe,He,vt,Ge,Fe,U.COLOR_BUFFER_BIT,U.NEAREST):Et?U.copyTexSubImage3D(ke,ze,He,vt,kt+Rt,qe,st,Ge,Fe):U.copyTexSubImage2D(ke,ze,He,vt,qe,st,Ge,Fe);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Et?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(ke,ze,He,vt,kt,Ge,Fe,Ve,Tt,nn,Lt.data):J.isCompressedArrayTexture?U.compressedTexSubImage3D(ke,ze,He,vt,kt,Ge,Fe,Ve,Tt,Lt.data):U.texSubImage3D(ke,ze,He,vt,kt,Ge,Fe,Ve,Tt,nn,Lt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ze,He,vt,Ge,Fe,Tt,nn,Lt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ze,He,vt,Lt.width,Lt.height,Tt,Lt.data):U.texSubImage2D(U.TEXTURE_2D,ze,He,vt,Ge,Fe,Tt,nn,Lt);x.pixelStorei(U.UNPACK_ROW_LENGTH,ln),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),x.pixelStorei(U.UNPACK_SKIP_ROWS,ti),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ri),ze===0&&J.generateMipmaps&&U.generateMipmap(ke),x.unbindTexture()},this.initRenderTarget=function(E){oe.get(E).__webglFramebuffer===void 0&&ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ue.setTextureCube(E,0):E.isData3DTexture?ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ue.setTexture2DArray(E,0):ue.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){q=0,G=0,Q=null,x.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const kn=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Aa,AddEquation:is,AddOperation:fd,AdditiveBlending:Yl,AgXToneMapping:Mc,AlphaFormat:Rc,AlwaysCompare:bd,AlwaysDepth:No,AlwaysStencilFunc:_d,ArcCurve:Nd,ArrayCamera:$d,BackSide:fn,BasicDepthPacking:md,Box3:Yi,BoxGeometry:Ai,BufferAttribute:Fn,BufferGeometry:Bt,ByteType:Ec,Camera:Zc,CanvasTexture:zc,CatmullRomCurve3:Gc,CineonToneMapping:xc,CircleGeometry:Ga,ClampToEdgeWrapping:oi,Color:ot,ColorManagement:lt,ConeGeometry:hs,ConstantAlphaFactor:ud,ConstantColorFactor:ld,Controls:Kd,CubeCamera:Zd,CubeDepthTexture:Id,CubeReflectionMapping:Hi,CubeRefractionMapping:ls,CubeTexture:Oc,CubeUVReflectionMapping:Ur,CubicBezierCurve:Vc,CubicBezierCurve3:Ud,CullFaceBack:ql,CullFaceFront:qh,CullFaceNone:Xh,Curve:jn,CurvePath:Od,CustomBlending:Zh,CustomToneMapping:yc,CylinderGeometry:Or,Data3DTexture:Cd,DataArrayTexture:Lc,DataTexture:Nc,DepthFormat:ui,DepthStencilFormat:Oi,DepthTexture:Hs,DirectionalLight:$c,DoubleSide:Pn,DstAlphaFactor:id,DstColorFactor:rd,EllipseCurve:Ha,EqualCompare:yd,EqualDepth:Fo,EquirectangularReflectionMapping:To,EquirectangularRefractionMapping:Ao,Euler:wi,EventDispatcher:Ti,ExternalTexture:Bc,ExtrudeGeometry:Zs,Float32BufferAttribute:mt,FloatType:In,FogExp2:Ba,FrontSide:Vi,Frustum:ka,GLSL3:Jl,GreaterCompare:Md,GreaterDepth:zo,GreaterEqualCompare:Fa,GreaterEqualDepth:Oo,Group:zi,HalfFloatType:Qn,HemisphereLight:Yd,IcosahedronGeometry:Br,ImageUtils:Ad,InstancedBufferAttribute:Ql,InstancedMesh:jl,IntType:Ra,KeepStencilOp:Co,Layers:za,LessCompare:xd,LessDepth:Uo,LessEqualCompare:Ua,LessEqualDepth:Bs,Light:Ya,LightShadow:Yc,Line:Cp,LineBasicMaterial:Uc,LineCurve:Hc,LineCurve3:Fd,LineDashedMaterial:om,LinearFilter:Qt,LinearMipmapLinearFilter:Fi,LinearMipmapNearestFilter:Ro,LinearSRGBColorSpace:Tr,LinearToneMapping:_c,LinearTransfer:Ar,MOUSE:xi,Material:$i,MathUtils:gn,Matrix2:oc,Matrix3:tt,Matrix4:pt,MaxEquation:Qh,Mesh:pn,MeshBasicMaterial:Fr,MeshDepthMaterial:Xd,MeshDistanceMaterial:qd,MeshStandardMaterial:Ds,MinEquation:Kh,MirroredRepeatWrapping:ko,MixOperation:dd,MultiplyBlending:$l,MultiplyOperation:gc,NearestFilter:Zt,NearestMipmapLinearFilter:hr,NearestMipmapNearestFilter:pd,NeutralToneMapping:Sc,NeverCompare:vd,NeverDepth:Io,NoBlending:li,NoColorSpace:gi,NoToneMapping:Zn,NormalBlending:Us,NotEqualCompare:Sd,NotEqualDepth:Bo,Object3D:zt,ObjectSpaceNormalMap:gd,OneFactor:ed,OneMinusConstantAlphaFactor:hd,OneMinusConstantColorFactor:cd,OneMinusDstAlphaFactor:sd,OneMinusDstColorFactor:od,OneMinusSrcAlphaFactor:mc,OneMinusSrcColorFactor:nd,OrthographicCamera:kr,PCFShadowMap:Ns,PCFSoftShadowMap:Yh,PMREMGenerator:ac,Path:tc,PerspectiveCamera:En,Plane:ri,PlaneGeometry:ds,PointLight:Za,Points:Dd,PointsMaterial:Fc,PolyhedronGeometry:Va,QuadraticBezierCurve:Wc,QuadraticBezierCurve3:Xc,Quaternion:Ei,R11_EAC_Format:Zo,RED_GREEN_RGTC2_Format:wr,RED_RGTC1_Format:pa,REVISION:Ta,RG11_EAC_Format:Er,RGBAFormat:Nn,RGBAIntegerFormat:Na,RGBA_ASTC_10x10_Format:la,RGBA_ASTC_10x5_Format:ra,RGBA_ASTC_10x6_Format:oa,RGBA_ASTC_10x8_Format:aa,RGBA_ASTC_12x10_Format:ca,RGBA_ASTC_12x12_Format:ua,RGBA_ASTC_4x4_Format:Ko,RGBA_ASTC_5x4_Format:Qo,RGBA_ASTC_5x5_Format:jo,RGBA_ASTC_6x5_Format:ea,RGBA_ASTC_6x6_Format:ta,RGBA_ASTC_8x5_Format:na,RGBA_ASTC_8x6_Format:ia,RGBA_ASTC_8x8_Format:sa,RGBA_BPTC_Format:ha,RGBA_ETC2_EAC_Format:Yo,RGBA_PVRTC_2BPPV1_Format:Wo,RGBA_PVRTC_4BPPV1_Format:Ho,RGBA_S3TC_DXT1_Format:gr,RGBA_S3TC_DXT3_Format:_r,RGBA_S3TC_DXT5_Format:vr,RGBFormat:Cc,RGB_BPTC_SIGNED_Format:da,RGB_BPTC_UNSIGNED_Format:fa,RGB_ETC1_Format:Xo,RGB_ETC2_Format:qo,RGB_PVRTC_2BPPV1_Format:Vo,RGB_PVRTC_4BPPV1_Format:Go,RGB_S3TC_DXT1_Format:mr,RGFormat:Wi,RGIntegerFormat:Ia,RawShaderMaterial:Wd,Ray:Ys,Raycaster:Jd,RedFormat:La,RedIntegerFormat:Da,ReinhardToneMapping:vc,RenderTarget:Rd,RepeatWrapping:br,ReverseSubtractEquation:Jh,SIGNED_R11_EAC_Format:$o,SIGNED_RED_GREEN_RGTC2_Format:ga,SIGNED_RED_RGTC1_Format:ma,SIGNED_RG11_EAC_Format:Jo,SRGBColorSpace:on,SRGBTransfer:xt,Scene:Ld,ShaderChunk:it,ShaderLib:qn,ShaderMaterial:zn,Shape:zr,ShapeUtils:rs,ShortType:wc,Sphere:Zi,SphereGeometry:Wa,Spherical:rc,SplineCurve:qc,SrcAlphaFactor:pc,SrcAlphaSaturateFactor:ad,SrcColorFactor:td,StaticDrawUsage:Ed,SubtractEquation:$h,SubtractiveBlending:Zl,TOUCH:_i,TangentSpaceNormalMap:_a,Texture:en,TextureSource:Oa,TorusGeometry:Xa,Triangle:Ln,TubeGeometry:qa,UVMapping:bc,Uint16BufferAttribute:Dc,Uint32BufferAttribute:Ic,UniformsLib:Ie,UniformsUtils:Hd,UnsignedByteType:vn,UnsignedInt101111Type:Ac,UnsignedInt248Type:Gs,UnsignedInt5999Type:Tc,UnsignedIntType:Kn,UnsignedShort4444Type:Ca,UnsignedShort5551Type:Pa,UnsignedShortType:ks,VSMShadowMap:Ls,Vector2:be,Vector3:D,Vector4:It,WebGLCoordinateSystem:Yn,WebGLCubeRenderTarget:Jc,WebGLRenderTarget:Un,WebGLRenderer:af,WebGLUtils:rf,WebGPUCoordinateSystem:Vs,WebXRController:Po,ZeroFactor:jh,createCanvasElement:wd,error:ut,log:Kl,warn:je,warnOnce:os},Symbol.toStringTag,{value:"Module"})),Uh={type:"change"},Kc={type:"start"},lf={type:"end"},Eo=new Ys,Fh=new ri,rx=Math.cos(70*gn.DEG2RAD),Ht=new D,mn=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class ox extends Kd{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ei,this._lastTargetPosition=new D,this._quat=new Ei().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rc,this._sphericalDelta=new rc,this._scale=1,this._panOffset=new D,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new D,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lx.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=cx.bind(this),this._onContextMenu=gx.bind(this),this._onMouseWheel=dx.bind(this),this._onKeyDown=fx.bind(this),this._onTouchStart=px.bind(this),this._onTouchMove=mx.bind(this),this._onMouseDown=ux.bind(this),this._onMouseMove=hx.bind(this),this._interceptControlDown=_x.bind(this),this._interceptControlUp=vx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=yt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uh),this.update(),this.state=yt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<rx?this.object.lookAt(this.target):(Fh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(Fh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ax(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ux(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Kc)}function hx(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dx(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(Kc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lf))}function fx(n){this.enabled!==!1&&this._handleKeyDown(n)}function px(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Kc)}function mx(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function gx(n){this.enabled!==!1&&n.preventDefault()}function _x(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cr=new D;function Rn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;cr.copy(e),cr[i]=0,cr.normalize();const c=.5*o/(o+a),u=1-cr.angleTo(n)/l;return Math.sign(cr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Qc extends Ai{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new D,c=new D,u=new D(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=f.length/6,v=new D,m=.5/o;for(let d=0,M=0;d<f.length;d+=3,M+=2)switch(l.fromArray(f,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[d+0]=u.x*Math.sign(l.x)+c.x*r,f[d+1]=u.y*Math.sign(l.y)+c.y*r,f[d+2]=u.z*Math.sign(l.z)+c.z*r,h[d+0]=c.x,h[d+1]=c.y,h[d+2]=c.z,Math.floor(d/g)){case 0:v.set(1,0,0),p[M+0]=Rn(v,c,"z","y",r,i),p[M+1]=1-Rn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),p[M+0]=1-Rn(v,c,"z","y",r,i),p[M+1]=1-Rn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),p[M+0]=1-Rn(v,c,"x","z",r,e),p[M+1]=Rn(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),p[M+0]=1-Rn(v,c,"x","z",r,e),p[M+1]=1-Rn(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),p[M+0]=1-Rn(v,c,"x","y",r,e),p[M+1]=1-Rn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),p[M+0]=Rn(v,c,"x","y",r,e),p[M+1]=1-Rn(v,c,"y","x",r,t);break}}static fromJSON(e){return new Qc(e.width,e.height,e.depth,e.segments,e.radius)}}function xx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Bt;let c=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const f=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(f)}for(const u in r){const f=Oh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][h]);const g=Oh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Oh(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Fn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<t;g++){const v=u.getComponent(h,g);a.setComponent(h+f,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function yx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:l,sphere:c,cyl:u,torus:f,rod:h,sign:p,paperBoat:g,batchStatic:v,persist:m,say:d,refresh:M,chime:w,reduced:y}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],R=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,_),f([-.7,.51,-.83],.31,.035,s.copper,_),u([-.7,.49,-.83],.26,.045,s.dark,_);const A=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],A),f([0,0,0],.36,.015,s.copper,A,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,_),f([.66,.56,-.22],.28,.028,s.copper,_),u([.66,.55,-.22],.24,.03,r("#495441"),_);const T=o([.66,.56,-.22],_);h([0,0,0],[0,.83,0],.026,s.copper,T);for(const[C,P,X]of[[-.17,.23,-.5],[.17,.41,.5]]){const Z=c([C,P,0],[.24,.035,.085],s.mint,T);Z.rotation.z=X}const I=o([0,.95,0],T);c([0,0,0],.115,s.light,I),f([0,0,0],.28,.021,s.cream,I,[0,0,0]),f([0,0,0],.27,.021,s.copper,I,[0,Math.PI/2,0]);const B=[];for(let C=0;C<4;C++){const P=C*Math.PI/2,X=o([Math.cos(P)*.3,.13+Math.sin(P)*.12,Math.sin(P)*.3],T);h([0,-.15,0],[0,.2,0],.012,s.copper,X),c([0,.23,0],.065,s.cream,X),v(X,[]),B.push(X)}l([-.46,.2,.32],[.68,.12,.47],s.dark,_);const W=o([-.46,.29,.32],_);l([0,0,0],[.5,.025,.32],s.cream,W);for(const C of[-.23,.23])h([C,.016,-.14],[0,.016,.06],.009,s.copper,W);c([0,.027,.06],[.04,.015,.04],s.rust,W),p("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),v(A,[]),v(I,[]),v(T,[I,...B]),v(W,[]),v(_,[A,T,W]);const N=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);N.castShadow=!1;const k=o([0,0,0],e),q=g(k,[8.3,.14,3.5],1.05),G=o([0,.36,0],q),Q=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],G),H=c([0,.12,0],[.085,.13,.085],s.light,G),$=l([0,.09,0],[.23,.025,.16],s.cream,G);$.rotation.z=.2;const K=[Q,H,$];v(q,[G]);const ce=new n.Vector3(8.3,.14,3.5),fe=new n.Vector3(8.45,.14,3.65),xe=new n.Vector3(9.2,-2.7,6.5);let we=-1,ie=i.dockTrips>=2?1:.02;function z(){A.visible=i.dockTrips>=1,T.visible=i.dockTrips>=2,W.visible=i.dockTrips>=3,B.forEach((C,P)=>C.visible=i.dockTrips>=5+P*3),G.visible=i.dockPending,K.forEach((C,P)=>C.visible=P===i.dockTrips%3),q.position.copy(i.dockPending?fe:ce)}z();function ee(){if(!(i.boat>0))if(i.dockPending){const C=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(ie=.02),m(),z(),d(C.line),w(330),M()}else i.boat=18,we=-1,K.forEach((C,P)=>C.visible=P===i.dockTrips%3),G.visible=!1,d("ну плыви. я тут."),M()}function de(C,P){if(i.boat>0){i.boat=Math.max(0,i.boat-C);const X=18-i.boat,Z=X<7?0:X<11?1:2;Z!==we&&(we=Z,M()),X<2?q.position.lerpVectors(ce,fe,n.MathUtils.smoothstep(X,0,2)):X<7?q.position.lerpVectors(fe,xe,n.MathUtils.smoothstep(X,2,7)):X<11?q.position.copy(xe):X<16?q.position.lerpVectors(xe,fe,n.MathUtils.smoothstep(X,11,16)):q.position.copy(fe),q.visible=X<7||X>=11,G.visible=X>=11,q.rotation.y=X>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),q.visible=!0,z(),d("вернулся. с чем-то."),w(554),M())}q.rotation.z=y?0:Math.sin(P*1.7)*.035,i.boat===0&&(q.visible=!0,q.position.y=(i.dockPending?fe.y:ce.y)+Math.sin(P*1.2)*.02,q.rotation.y=i.dockPending?Math.PI+.2:0),A.position.y=.97+Math.sin(P*.9)*.055,A.rotation.y=P*.15,ie=n.MathUtils.damp(ie,1,1.1,C),T.scale.setScalar(ie),I.rotation.y=y?0:P*.23,N.material.emissiveIntensity=i.dockPending?1.5+Math.sin(P*4)*1.1:1.2}function re(){if(i.boat>0){const C=18-i.boat;return{disabled:!0,action:C<7?"плывёт…":C<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const C=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:C===2?`${b[C].description} ${R[Math.floor((i.dockTrips-1)/3)%R.length]}`:b[C].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:k,gallery:_,beacon:N,launchOrCollect:ee,update:de,card:re,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:q.position.toArray(),visible:q.visible,cargo:G.visible,stone:A.visible,plant:T.visible,plantScale:ie,letter:W.visible,buds:B.filter(C=>C.visible).length})}}async function cf(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function Mx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),l="beznogim-public-notes-v1";let c="all",u=!s.matches,f=!1,h=!1,p=!1,g=!1,v=!1,m=0,d=null,M=0,w=0,y=0,S=!1;try{const O=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");O!==null&&(u=O==="open")}catch{}const b=(O,te,ge)=>{const Me=document.createElement(O);return te&&(Me.className=te),ge&&(Me.textContent=ge),Me},R=b("aside","resident-history");R.id="resident-history",R.setAttribute("aria-label","История мыслей и действий Головы");const _=b("div","history-heading"),A=b("div"),T=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),I=b("h3","","на полях"),B=b("span","history-eyes");B.setAttribute("aria-hidden","true"),I.append(B),A.append(T,I,b("p","history-subtitle","мысли, дела и прочее"));const W=b("button","history-close","−");W.type="button",W.setAttribute("aria-label","Свернуть историю"),W.title="Свернуть историю",_.append(A,W);const N=b("div","history-filters");N.setAttribute("role","group"),N.setAttribute("aria-label","Показывать в истории");const k=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[O,te]of k){const ge=b("button","",te);ge.type="button",ge.dataset.filter=O,ge.setAttribute("aria-pressed",String(c===O)),ge.onclick=()=>{c=O,P(!1),G.scrollTop=0;for(const Me of N.children)Me.setAttribute("aria-pressed",String(Me.dataset.filter===c))},N.append(ge)}const q=b("button","history-new");q.type="button",q.hidden=!0;const G=b("div","history-scroll");G.tabIndex=0,G.setAttribute("aria-label","Записи, от новых к старым");const Q=b("ol","history-list"),H=b("p","history-empty","собираю заметки…");G.append(Q,H);const $=b("div","history-foot"),K=b("span","history-live","подключаюсь…"),ce=b("span","history-count"),fe=b("button","history-retry","повторить подключение");fe.type="button",fe.hidden=!0,fe.onclick=()=>{F(),window.dispatchEvent(new Event("beznogim:retry"))},$.append(K,ce,fe),R.append(_,N,q,G,$);const xe=b("button","history-toggle");xe.type="button",xe.setAttribute("aria-controls",R.id);const we=b("span","","на полях"),ie=b("span","history-badge");ie.hidden=!0,xe.append(b("span","history-toggle-icon","◌"),we,ie),document.body.append(R),document.querySelector(".footer-actions").append(xe);function z(O,te=!0){if(u=O,R.hidden=!u,xe.hidden=u,xe.setAttribute("aria-expanded",String(u)),te)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(G.scrollTop<30?ee():de(),W.focus({preventScroll:!0})):te&&xe.focus({preventScroll:!0})}R.hidden=!u,xe.hidden=u,xe.setAttribute("aria-expanded",String(u)),xe.onclick=()=>{z(!0),(g||!h)&&F()},W.onclick=()=>z(!1),s.addEventListener("change",()=>{let O=!s.matches;try{const te=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");te!==null&&(O=te==="open")}catch{}z(O,!1)}),document.addEventListener("keydown",O=>{O.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&z(!1)});function ee(){m=0,ie.hidden=!0,q.hidden=!0}function de(){ie.textContent=String(m),ie.hidden=!m,q.textContent=`↑ к новым · ${m}`,q.hidden=!(u&&m)}q.onclick=()=>{G.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),ee()},G.addEventListener("scroll",()=>{G.scrollTop<30&&ee()},{passive:!0});function re(O){return c==="all"||(c==="thoughts"?O.type==="muse"||O.type==="say":O.type!=="muse"&&O.type!=="say")}function C(O,te){const ge=O.type==="muse"||O.type==="say",Me=b("li",`history-entry ${ge?"history-thought":"history-action"}${te?" is-new":""}`);Me.dataset.eventId=String(O.id),Me.dataset.type=O.type;const U=b("div","history-meta"),Ne=b("time","",r.format(O.time*1e3));Ne.dateTime=new Date(O.time*1e3).toISOString(),Ne.title=o.format(O.time*1e3)+" · "+Ne.textContent+" мск";const Te={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return U.append(b("span","",Te[O.type]||"во дворе"),Ne),Me.append(U,b("p","",O.text)),Me}function P(O,te=new Set){const ge=G.scrollTop>30,Me=G.getBoundingClientRect().top,U=ge?[...Q.querySelectorAll("[data-event-id]")].find(ue=>ue.getBoundingClientRect().bottom>Me):null,Ne=U==null?void 0:U.dataset.eventId,Te=U==null?void 0:U.getBoundingClientRect().top,L=G.scrollTop,x=document.createDocumentFragment();let ne="";const oe=[...i.values()].sort((ue,Se)=>Se.id-ue.id).filter(re);for(const ue of oe){const Se=o.format(ue.time*1e3);if(Se!==ne){const Re=b("li","history-day",Se);x.append(Re),ne=Se}x.append(C(ue,O&&te.has(ue.id)&&!ge))}if(Q.replaceChildren(x),H.hidden=oe.length>0,H.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!oe.length&&(H.textContent="в этом фильтре пока нет записей."),ce.textContent=i.size?v?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",fe.hidden=!(g||!h&&!p),fe.disabled=p,Ne){const ue=Q.querySelector(`[data-event-id="${Ne}"]`);G.scrollTop=L+(ue?ue.getBoundingClientRect().top-Te:0)}else ge||(G.scrollTop=0)}function X(O,te=!1){if(!O||!Array.isArray(O.entries))return!1;const ge=Math.max(0,...i.keys()),Me=new Set;let U=0,Ne=0;for(const Te of O.entries)!Te||typeof Te!="object"||!Number.isSafeInteger(Te.id)||Te.id<1||!Number.isFinite(Te.time)||Math.abs(Te.time)>864e10||!a.has(Te.type)||typeof Te.text!="string"||!Te.text.trim()||(Ne++,i.has(Te.id)||(S=!0,i.set(Te.id,{id:Te.id,time:Te.time,type:Te.type,text:Te.text.slice(0,280)}),Me.add(Te.id),Te.id>ge&&re(Te)&&U++));if(O.entries.length&&!Ne)return!1;if(v=v||!!O.has_older||!!O.has_more||i.size>t,i.size>t){const Te=[...i.keys()].sort((L,x)=>L-x);for(const L of Te.slice(0,i.size-t))i.delete(L)}return f&&!te&&U&&(!u||G.scrollTop>30)&&(m+=U,de()),(Me.size||!f)&&P(f&&!te,Me),!0}function Z(){if(!(!i.size||!S)){S=!1,w=Date.now();try{localStorage.setItem(l,JSON.stringify({version:1,saved_at:w,has_older:v,entries:[...i.values()]}))}catch{}}}function V(){try{const O=localStorage.getItem(l);if(!O||O.length>1e6)return;const te=JSON.parse(O);if(te.version!==1||!Number.isFinite(te.saved_at)||te.saved_at<=0)return;X(te,!0),w=te.saved_at,f=i.size>0,S=!1}catch{}}async function F(){if(!p){p=!0,y=performance.now(),fe.disabled=!0;try{const O=await cf(n+"/api/history");if(!X(O,!0))throw Error("invalid-public-history");h=!0,f=!0,g=!1,Z(),P(!1)}catch{g=!0,P(!1)}finally{p=!1,fe.disabled=!1,Y()}}}function Y(){var ge;const O=!d||performance.now()-M>35e3||d.server_time-d.heartbeat>60||d.resident_status==="stopped";R.classList.toggle("history-offline",O);const te=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";K.textContent=O?i.size?"связи нет":"нет связи с живым сервером":d.resident_status==="sleeping"?"голова спит · дневник открыт":d.resident_status==="paused"?"голова отдыхает":"жизнь идёт",O&&i.size&&(K.textContent+=te),!O&&g&&(K.textContent+=" · архив не дошёл"),K.title=((ge=d==null?void 0:d.action)==null?void 0:ge.label)||""}function se(O){var Ne;const te=Math.max(0,...i.keys()),ge=Array.isArray((Ne=O.history)==null?void 0:Ne.entries)?O.history.entries:[];d=O,M=performance.now(),X(O.history)&&i.size&&(f=!0,Z()),Y();const Me=ge.filter(Te=>Te&&Number.isSafeInteger(Te.id)).map(Te=>Te.id);(te&&Me.length&&Math.min(...Me)>te&&performance.now()-y>1e3||!h&&performance.now()-y>15e3)&&F()}window.addEventListener("beznogim:state",O=>se(O.detail)),window.__beznogimState&&se(window.__beznogimState),V(),P(!1),Y(),F(),window.addEventListener("online",()=>{(g||!h)&&F()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&F()}),setInterval(()=>{Y(),(g||!h)&&F()},15e3)}function Sx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:l}){let c=null,u=0,f=0,h=!1,p=!1,g=!1,v=0,m=null,d=null,M=null,w="",y=!0;const S=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const R=document.createElement("span");R.className="thought-kicker",R.textContent="про себя";const _=document.createElement("p");b.append(R,_),document.body.append(b);const A=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),T=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";Mx({api:T,enabled:A});const I=document.querySelector(".territory-nav"),B=document.createElement("div");B.className="resident-strip",B.hidden=!0;const W=document.createElement("span");W.className="resident-status",W.textContent="подключаюсь к голове";const N=document.createElement("div");N.className="resident-vitals",N.hidden=!0,N.setAttribute("aria-label","Самочувствие Головы");const q=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(C=>{const P=document.createElement("div");return P.className="need-meter",P.dataset.need=C.key,P.style.setProperty("--need-color",C.color),P.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${C.icon}</svg><div class="need-detail"><div class="need-heading"><b>${C.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${C.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,N.append(P),{key:C.key,card:P,value:P.querySelector(".need-value"),bar:P.querySelector(".need-track")}}),G=document.createElement("button");G.type="button",G.textContent="к голове",G.onclick=()=>{p=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),xe()};const Q=document.createElement("button");Q.type="button",Q.textContent="поиграть самому",Q.onclick=()=>{p=!p,g=!1,xe()};const H=document.createElement("button");H.type="button",H.textContent="мысли",H.setAttribute("aria-pressed","true"),H.onclick=()=>{y=!y,H.setAttribute("aria-pressed",String(y))},B.append(W,N,G,Q,H),I.append(B);function $(){return Date.now()/1e3+f}function K(){return c&&$()-c.heartbeat<60&&c.resident_status!=="stopped"}function ce(){return h&&c&&!p}function fe(){var X,Z;const C=(Z=(X=c==null?void 0:c.mechanics)==null?void 0:X.vitals)==null?void 0:Z.public;if(!C){N.hidden=!0;return}const P=V=>Math.max(0,Math.min(100,Math.round(Number(V)||0)));N.hidden=!1;for(const V of q){const F=P(C[V.key]);V.value.textContent=String(F),V.bar.setAttribute("aria-valuenow",String(F)),V.card.style.setProperty("--need-fill",String(F/100)),V.card.dataset.low=String(F<=20)}}function xe(){const C=p?"ты в песочнице":h?K()?c!=null&&c.action&&c.action.ends>$()?c.action.label:(c==null?void 0:c.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";C!==w&&(w=C,W.textContent=C),Q.textContent=p?"вернуться к голове":"поиграть самому",G.setAttribute("aria-pressed",String(g))}function we(C){var X,Z;if(!C||C.version!==1||!Array.isArray(C.position)||C.position.length!==3||!C.position.every(Number.isFinite)||!C.objects||!Number.isFinite(C.server_time)||!Number.isFinite(C.heartbeat)||c&&(C.server_time<c.server_time||C.server_time===c.server_time&&Number.isFinite(C.revision)&&Number.isFinite(c.revision)&&C.revision<c.revision))return;if(f=C.server_time-Date.now()/1e3,c=C,u=performance.now(),h=!0,B.hidden=!1,m&&((X=C.release)!=null&&X.commit)&&m!==C.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((Z=C.release)==null?void 0:Z.commit)||m;const P=C.speech;P&&P.time>v&&P.until>$()&&(v=P.time,p||a(P.text)),window.__beznogimState=C,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:C})),fe(),xe()}function ie(){const C=c.action;if((C==null?void 0:C.kind)==="move"){const P=Math.max(0,Math.min(1,($()-C.started)/Math.max(.001,C.ends-C.started)));return C.from.map((X,Z)=>X+(C.to[Z]-X)*P)}return c.position}function z(){if(!ce())return;const C=c.objects;C.engine&&(t.running=!!C.engine.running),C.workshop&&(t.roof=C.workshop.roof_open?1:0),C.radio&&(t.radio=C.radio.station,d!==t.radio&&(d=t.radio,o())),C.garden&&(t.harvest=C.garden.harvest,M!==null&&t.harvest>M&&l(),M=t.harvest);const P=c.action;t.brew=(P==null?void 0:P.effect)==="brew"?Math.max(0,P.ends-$()):0,t.loop=0,xe()}function ee(){if(!ce()){b.hidden=!0;return}const C=ie();n.position.set(C[0],C[1]+Math.sin($()*1.4)*.1,C[2]),e.set(...C),g&&i.target.lerp(n.position,.08);const P=c.musing;if(y&&K()&&(P!=null&&P.text)&&P.until>$()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==P.text&&(_.textContent=P.text),S.copy(n.position),S.y+=1.8,S.project(s),S.z>=-1&&S.z<=1&&Math.abs(S.x)<1&&Math.abs(S.y)<1){b.hidden=!1;const X=b.offsetWidth,Z=b.offsetHeight,V=Math.max(X/2+12,Math.min(innerWidth-X/2-12,(S.x+1)*innerWidth/2));let F=(1-S.y)*innerHeight/2-18;const Y=I.getBoundingClientRect(),se=V-X/2<Y.right&&V+X/2>Y.left?Y.bottom+12:18,O=F-Z<se;O&&(F=Math.max(se+Z,(1-S.y)*innerHeight/2+70+Z)),F=Math.min(innerHeight-70,Math.max(Z+18,F)),b.classList.toggle("below-head",O),b.style.transform=`translate3d(${Math.round(V)}px,${Math.round(F)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function de(){ce()&&(p=!0,g=!1,xe())}function re(){if(!A)return;B.hidden=!1;let C=!1;async function P(){if(!C){C=!0;try{const Z=await cf(T+"/api/state");we(Z),c&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!c||performance.now()-u>35e3)&&(h=!1),xe()}finally{C=!1}}}try{const Z=new EventSource(T+"/api/events");Z.addEventListener("state",V=>{try{we(JSON.parse(V.data))}catch{}}),Z.onerror=()=>{h=!1,xe()}}catch{h=!1,xe()}P();function X(){(!h||!c||performance.now()-u>3e4)&&P()}window.addEventListener("online",X),window.addEventListener("beznogim:retry",P),document.addEventListener("visibilitychange",()=>{document.hidden||X()}),setInterval(()=>{c&&performance.now()-u>35e3&&(h=!1),xe(),X()},15e3)}return i.addEventListener("start",()=>{g=!1,xe()}),re(),{sync:z,place:ee,localPlay:de,unfollow:()=>{g=!1},watching:ce,inspect:()=>{var C;return{connected:h,sandbox:p,follow:g,alive:!!K(),revision:c==null?void 0:c.revision,release:(C=c==null?void 0:c.release)==null?void 0:C.commit,action:c==null?void 0:c.action,musing:c==null?void 0:c.musing,thoughtVisible:!b.hidden,position:c?ie():null}}}}const bx=120,Ex=24,wx=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Xn={size:bx,sectorSize:Ex,sectors:wx};function Tx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const l=new zi;l.name="unsettled-territory",n.add(l);const c=Xn.size/2,u=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],f=new zr;u.forEach(([T,I],B)=>B?f.lineTo(T,-I):f.moveTo(T,-I)),f.closePath();const h=new Zs(f,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const p=new pn(h,new Ds({color:"#233e35",roughness:1}));p.receiveShadow=!0,l.add(p);let g=8409;const v=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new jl(new Br(1,0),new Ds({color:"#8a9980",roughness:1}),150),d=new jl(new hs(1,1,4),new Ds({color:"#9aa880",roughness:1}),850),M=new zt;for(const[T,I,B]of[[m,150,!0],[d,850,!1]]){for(let W=0;W<I;W++){let N,k;do N=(v()-.5)*(Xn.size-10),k=(v()-.5)*(Xn.size-10);while(Math.abs(N)<11&&Math.abs(k)<9);const q=B?.15+v()*.48:.12+v()*.42;M.position.set(N,-1.7+q*.25,k),M.rotation.set(0,v()*6.28,B?v()*.25:0),M.scale.set(B?q*1.3:.07,q,B?q:.07),M.updateMatrix(),T.setMatrixAt(W,M.matrix)}T.instanceMatrix.needsUpdate=!0,l.add(T)}const w=new Ds({color:"#c1b692",roughness:1});for(let T=0;T<16;T++){const I=new pn(new Ai(1.15,.12,.65),w);I.position.set(-.6,-.06-T*.105,5.8+T*.7),I.receiveShadow=!0,l.add(I)}const y=document.createElement("nav");y.className="territory-nav",y.setAttribute("aria-label","Путешествие по миру"),y.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(y);const S=document.createElement("dialog");S.id="territory-dialog",S.setAttribute("aria-labelledby","territory-title"),S.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(S);const b=S.querySelector("#territory-grid");for(const T of Xn.sectors){const I=document.createElement("button");I.type="button",I.dataset.sector=T.id,I.className=T.status==="settled"?"settled":"",I.textContent=T.status==="settled"?`● ${T.id==="0:0"?"двор":T.name}`:`· ${T.id}`,I.setAttribute("aria-label",`${T.name}, ${T.id}`),I.onclick=()=>{S.close(),s(T.x,T.z,T.status==="settled")},b.append(I)}document.querySelector("#territory-map").onclick=()=>S.showModal(),document.querySelector("#world-overview").onclick=r,S.querySelector("#territory-close").onclick=()=>S.close(),S.querySelector("#territory-home").onclick=()=>{S.close(),o()};const R=y.querySelector("#territory-location");let _="";function A(){const T=a()||t.target,I=Math.round(T.x/Xn.sectorSize),B=Math.round(T.z/Xn.sectorSize),W=`${I}:${B}`;if(W!==_){_=W;const N=Xn.sectors.find(k=>k.id===W);R.textContent=`${(N==null?void 0:N.status)==="settled"?N.name:"свободная земля"} · ${W}`;for(const k of b.children)k.classList.toggle("current",k.dataset.sector===W)}}return{half:c,update:A,inspect:()=>({size:Xn.size,sectorSize:Xn.sectorSize,sectors:Xn.sectors.length,settled:Xn.sectors.filter(T=>T.status==="settled").length,visible:n.visible,sector:_})}}function Ax({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:f,sign:h,paperBoat:p,batchStatic:g,changed:v,chime:m}){let d={};try{d=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(d.wins)||0))),trace:d.trace===!0},w=[1,2,-1,1,2,-1];function y(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const S=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,S),a([0,.46,0],[1.22,.08,1.3],s.dark,S);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const O of[-.62,.62])for(const te of[-.64,.64])u([O,.46,te],[O,1.45,te],.024,s.copper,S);for(const O of[-.62,.62])a([O,.96,0],[.018,.95,1.28],b,S);a([0,.96,-.64],[1.24,.95,.018],b,S);const R=o([0,1.45,-.64],S);for(const O of[-.62,.62])u([O,0,0],[O,.36,.64],.026,s.copper,R);for(const O of[-.62,.62])u([O,.36,.64],[O,0,1.28],.026,s.copper,R);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,R);const _=a([0,.18,.32],[1.26,.025,.72],b,R);_.rotation.x=-.51;const A=a([0,.18,.96],[1.26,.025,.72],b,R);A.rotation.x=.51;const T=o([0,.52,0],S);c([0,.2,0],.026,.4,s.leaf,T);for(const O of[-1,1]){const te=l([O*.15,.27,0],[.22,.055,.09],s.leaf,T);te.rotation.z=O*.35}const I=l([0,.25,.12],[.23,.16,.27],s.copper,T),B=l([.42,.58,.46],[.15,.1,.18],s.copper,S);B.visible=M.wins>0;const W=o([-.76,.7,.69],S);a([0,.28,0],[.13,.66,.06],s.cream,W);const N=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),W);l([0,-.06,.04],.065,s.rust,W),h("ПАРНИК",[0,.3,.716],.93,.22,S,{size:49});const k=f([0,2.05,0],.46,.016,s.mint,S);k.visible=M.trace;const q=[];for(let O=0;O<6;O++)q.push(l([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),S));g(S,[R,T,W,k,B,...q]),g(R,[]),g(T,[I]),g(W,[N]);let G=0,Q=0;function H(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),G=0,v()}function $(O){if(M.mode!=="playing")return;const te={heat:2,wait:0,vent:-2};O in te&&(M.temp+=w[M.turn]+te[O],M.turn++,M.temp>6?(M.mode="hot",G=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),B.visible=!0,y(),m(660)),v())}function K(){let O="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(O=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${w[M.turn]>0?"+":""}${w[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(O=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(O=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(O="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:O,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const ce=o([0,0,0],t);ce.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ce),a([0,-.42,0],[6.8,.08,5.6],s.dark,ce);for(const O of[-3.2,3.2])for(const te of[-2.6,2.6])u([O,-.4,te],[O,4,te],.055,s.copper,ce);for(const O of[-3.2,3.2])u([O,4,-2.6],[O,5.7,0],.055,s.copper,ce),u([O,5.7,0],[O,4,2.6],.055,s.copper,ce);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ce),a([-3.2,1.8,0],[.025,4.4,5.2],b,ce),a([0,1.8,-2.6],[6.4,4.4,.025],b,ce),h("СОН / 01",[0,-.12,2.93],2.2,.38,ce,{size:52});const fe=o([0,1.6,0],ce);l([0,0,0],1.16,r("#5f9c85"),fe);for(let O=0;O<10;O++){let te=O*2.4;const ge=l([Math.sin(te)*.95,Math.cos(O*1.2)*.6,Math.cos(te)*.95],[.35,.2,.3],s.leaf,fe);ge.rotation.y=te}f([0,0,0],1.32,.028,s.copper,fe,[.4,0,.2]);const xe=o([0,1.6,0],ce),we=[];for(let O=0;O<28;O++){const te=a([0,0,0],[.53,.11,.32],O%4?s.cream:s.concrete,xe);we.push(te)}const ie=p(ce,[1.7,-.05,1],1.65),z=l([0,.65,0],.13,s.cream,ie),ee=o([0,.65,0],ie);ee.visible=!1;for(let O=0;O<8;O++){let te=O/8*Math.PI*2;u([Math.sin(te)*.27,Math.cos(te)*.27,0],[Math.sin(te)*.5,Math.cos(te)*.5,0],.026,s.light,ee)}const de=i.clone(!0);ce.add(de),de.scale.setScalar(.72),de.position.set(-2,1,1.3),de.rotation.z=-.25;const re=o([-2,-.05,1.3],ce);c([0,0,0],.55,.3,s.cream,re),f([.58,0,0],.25,.04,s.copper,re,[0,0,0]);const C=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ce);C.rotation.y=.2;let P=0,X=0,Z=!1;g(ce,[fe,xe,ie,de]),g(fe,[]);function V(){Z=!0,P=0,X=0,ce.visible=!0,e.visible=!1,v()}function F(){Z=!1,ce.visible=!1,e.visible=!0,v()}function Y(){Z&&(P===3?(P=0,X=0):(P++,m(220+P*110),P===3&&(M.trace=!0,k.visible=!0,y())),v())}function se(O,te){Q=n.MathUtils.damp(Q,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,O),R.rotation.x=Q,T.scale.y=n.MathUtils.damp(T.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,O),I.visible=M.mode==="won",N.scale.y=.3*Math.max(.05,M.temp/8),N.position.y=-.015+M.temp/8*.15,k.rotation.z=Math.sin(te*.3)*.15,G=Math.max(0,G-O),q.forEach((ge,Me)=>{ge.visible=G>0;const U=(3-G+Me*.18)%1.5;ge.position.set(Math.sin(Me*2)*U*.35,1.5+U,Math.cos(Me*2)*U*.35),ge.scale.setScalar(.1*(.4+U))}),Z&&(X=n.MathUtils.damp(X,P,2,O),fe.rotation.y=te*.08,we.forEach((ge,Me)=>{const U=Me/28*Math.PI*2+te*.055*Math.min(1,X),Ne=Math.min(1,X);ge.position.set(Math.sin(U)*(1.8+Ne*.35),Math.cos(U)*(1.8-Ne*1.5),Math.cos(U)*Ne*1.5),ge.rotation.set(0,-U*Ne,Math.PI/2-U*(1-Ne))}),xe.rotation.y=X*.32,ie.position.y=-.05+X*1.12,ie.position.x=1.7-X*.32,ie.rotation.y=.2+X*.35,z.scale.setScalar(.13*(1+Math.max(0,X-2)*2)),ee.visible=X>2.2,ee.rotation.z=te*.22,de.position.y=1+Math.sin(te*.8)*.06)}return{house:S,start:H,step:$,card:K,update:se,enter:V,exit:F,breathe:Y,inspect:()=>({...M,weather:[...w],dream:Z,dreamStep:P,phase:X,lidAngle:Q,rootVisible:e.visible,dreamVisible:ce.visible,boatY:ie.position.y,rays:ee.visible})}}function Rx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:f,torus:h,sign:p,batchStatic:g,chime:v}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const d=r("#c39860"),M=r("#e0c58b"),w=r("#465c63"),y=r("#80b9be",{metalness:.15,roughness:.35}),S=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),d,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let ie=0;ie<13;ie++){const z=.15+ie/12*Math.PI*1.42,ee=Math.sin(z)*3.65,de=Math.cos(z)*3.65,re=l([ee,.48,de],[.75,1.08,.19],M,m);re.rotation.y=z,ie%3===0&&h([ee,.48,de],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,z,0)}p("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const b=a([1.08,.12,.4],m);l([0,0,0],[2.55,.22,1.55],w,b);for(let ie of[-1.15,1.15])for(let z of[-.63,.63])l([ie,-.23,z],[.12,.5,.12],s.copper,b);for(let ie of[-.79,.79])l([0,.36,ie],[2.72,.65,.14],S,b);for(let ie of[-1.32,1.32])l([ie,.38,0],[.14,.68,1.55],S,b);const R=l([0,.18,0],[2.49,.045,1.49],y,b),_=c([-.84,.38,0],[.34,.14,.54],s.cream,b),A=i.clone(!0);m.add(A),A.scale.setScalar(.54),A.position.set(.3,.83,.45),A.rotation.z=-.35;const T=a([0,0,0],A);for(const ie of[-.23,.23])c([ie,.2,.611],[.15,.11,.025],s.black,T),l([ie,.2,.64],[.2,.018,.012],s.copper,T);const I=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,I),u([0,.29,0],.44,.022,w,I),h([.55,0,0],.24,.055,s.copper,I,[0,0,0]),p("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const B=[];for(let ie=0;ie<7;ie++){const z=a([-1.92+ie*.33,.2+ie*.29,1.45-ie*.29],m);l([0,0,0],[.7,.13,.42],s.cream,z);for(let ee of[-.2,.2])l([0,.07,ee],[.7,.12,.05],s.copper,z);B.push(z)}const W=Array.from({length:16},()=>c([0,0,0],[.07,.1,.07],y,m)),N=Array.from({length:3},(ie,z)=>{const ee=h([.65,.2,0],.23+z*.16,.012,s.mint,b);return ee.scale.z=.6,ee}),k=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,k),k.rotation.z=.55;const q=[];for(let ie=0;ie<9;ie++){const z=ie*2.4;q.push(c([Math.sin(z)*3,3.2+ie%3*.28,Math.cos(z)*2],.025,s.cream,m))}let G=!1,Q=0,H=0,$=!1;try{$=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const K=a([26.6,-.86,.65],t);K.visible=$,u([0,0,0],.15,.2,s.cream,K),u([0,.104,0],.125,.014,y,K),h([.16,0,0],.07,.02,s.copper,K,[0,0,0]),g(m,[b,A,I,...B,...W,...q,k]),g(b,[R,_,...N]),g(I,[]),g(K,[]),B.forEach(ie=>g(ie,[]));function ce(){G=!0,Q=0,H=0,m.visible=!0,t.visible=!1,we(0,0)}function fe(){G=!1,m.visible=!1,t.visible=!0}function xe(){if(G&&(Q=Q===3?0:Q+1,v(165+Q*55),Q===3)){$=!0,K.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function we(ie,z){G&&(H=n.MathUtils.damp(H,Q,2.4,ie),B.forEach((ee,de)=>{const re=Math.min(1,H/2),C=-1.92+de*.33,P=.2+de*.29,X=1.45-de*.29;ee.position.set(n.MathUtils.lerp(C,-1.72+de*.39,re),n.MathUtils.lerp(P,1.95-de*.22,re),n.MathUtils.lerp(X,-.32+de*.055,re)),ee.rotation.z=-re*.21}),R.position.y=.18+H*.09,_.position.y=.38+H*.09,A.position.y=.83+H*.09+Math.sin(z*.6)*.025,A.rotation.z=-.35-H*.13,I.rotation.z=-Math.min(1,H)*.45,W.forEach((ee,de)=>{const re=(z*.16+de/16)%1;ee.visible=H>.05,ee.position.set(-1.7+re*3,2.14-re*1.62,-.32+re*.25),ee.scale.set(.07,.1+Math.sin(re*Math.PI)*.04,.07)}),N.forEach((ee,de)=>{ee.visible=H>.4,ee.position.y=R.position.y+.034,ee.scale.setScalar(1+Math.sin(z*.5+de)*.08),ee.scale.z*=.6}),k.rotation.z=.55+H*.21,T.visible=H>1.8)}return{enter:ce,exit:fe,pour:xe,update:we,inspect:()=>({active:G,step:Q,phase:H,trace:$,roomVisible:m.visible,rootVisible:t.visible,waterY:R.position.y,sleeperY:A.position.y,channel:B.map(ie=>ie.position.toArray()),droplets:W.filter(ie=>ie.visible).length})}}function Cx({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const l=e([0,0,0],n);l.visible=!1;for(const p of[-.23,.23])t([p,.2,.611],[.15,.11,.025],r.black,l),i([p,.2,.64],[.2,.018,.012],r.copper,l);let c=null,u=0;function f(p){c=p,u=Number(p.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:p})=>f(p)),window.__beznogimState&&f(window.__beznogimState);function h(p){const g=c==null?void 0:c.action;a.visible=!!p&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),l.visible=a.visible}return{update:h,inspect:()=>{var p;return{visible:a.visible,ends:((p=c==null?void 0:c.action)==null?void 0:p.kind)==="sleep"?c.action.ends:null}}}}function uc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function Px(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function Lx(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?uc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function Dx(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function Ix({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:f,torus:h,sign:p,batchStatic:g,chime:v,changed:m}){const d=a([0,0,0],e);d.name="dream-05-self-measuring-instrument",d.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),w=r("#d3eeed",{metalness:.85,roughness:.18}),y=r("#f1e7c7"),S=r("#1c4147"),b=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,S,d),u([0,-.16,0],3.45,.08,b,d),h([0,-.1,0],3.65,.07,s.copper,d);for(let O=0;O<5;O++)h([0,-.1+O*.006,0],.7+O*.52,.009,w,d);const R=a([0,0,0],d);l([0,.12,-1.6],[3,.34,1.3],s.concrete,R),f([0,.3,-1.65],[0,3.75,-1.65],.12,M,R);const _=a([0,3.7,-1.4],d),A=u([0,0,-.12],1.05,.2,S,_);A.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,_,[0,0,0]);const T=a([-.85,0,.02],_),I=a([.85,0,.02],_);l([.425,0,0],[.85,1.72,.1],y,T),l([-.425,0,0],[.85,1.72,.1],y,I);for(let O=0;O<12;O++){const te=O*Math.PI/6;f([Math.sin(te)*.78,Math.cos(te)*.78,.09],[Math.sin(te)*.91,Math.cos(te)*.91,.09],.016,s.copper,_)}const B=a([0,0,.14],_);f([0,-.15,0],[0,.69,0],.025,S,B),c([0,0,0],.065,s.copper,B);const W=[a([-2.35,1.65,0],d),a([2.35,1.65,0],d)];for(const[O,te]of W.entries())l([0,0,0],[.24,1.65,.38],M,te),l([O===0?.38:-.38,-.76,0],[.95,.18,.38],w,te),c([0,.84,0],.19,s.copper,te);const N=[],k=[],q=[];for(let O=0;O<12;O++){const te=-2.45+O*.445;k.push(new n.Vector3(te,2.52,0));const ge=O/11,Me=ge*Math.PI*1.35;q.push(new n.Vector3(2.35*Math.cos(Me)*(1-ge*.85),.24+ge*3,2.05-ge*3.2));const U=a(k[O].toArray(),d);N.push(U),l([0,0,0],[.42,.16,.57],M,U),l([0,.09,.15],[.03,.012,.2],s.copper,U)}const G=c([0,.7,0],[.45,.64,.45],w,d),Q=i.clone(!0);d.add(Q),Q.scale.setScalar(.43);const H=new n.Vector3(2.8,.65,2.15);Q.position.copy(H);function $(O,te){const ge=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([Ne,Te],L)=>L?ge.lineTo(Ne,Te):ge.moveTo(Ne,Te)),ge.closePath();const Me=new n.ExtrudeGeometry(ge,{depth:.07,bevelEnabled:!1}),U=a([0,0,0],O);return o(Me,y,null,null,U),U.scale.setScalar(te),U}const K=$(_,.88);K.position.set(0,.1,.2),K.visible=!1;const ce=$(K,.22);ce.position.set(-.03,-.2,.12);const fe=l([-.03,-.2,.085],[.34,.44,.01],S,K),xe=$(t,.17);xe.position.set(2.8,1.14,-2.75),xe.rotation.y=Math.PI/4,p("СОН / 05",[0,-.055,2.94],1.65,.3,d,{size:48}).rotation.x=-Math.PI/2,p("СЕБЯ?",[0,.36,-.88],1.05,.26,d,{size:52});const we=p("?",[-1.6,.65,1.5],.48,.65,d,{size:84,bg:"#1c4147"}),ie=h([0,.12,0],.68,.035,s.light,d);g(d,[R,_,...N,...W,G,Q,we,ie]),g(R,[]),g(_,[T,I,B,K]),g(T,[]),g(I,[]),g(B,[]),g(K,[ce,fe]),g(ce,[]),N.forEach(O=>g(O,[])),W.forEach(O=>g(O,[]));let z=uc(),ee=!1,de=0,re=0,C=!1;try{C=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}xe.visible=C;function P(){z=uc(),de=0,re=0,ee=!0,d.visible=!0,t.visible=!1,F(0,0)}function X(){ee=!1,d.visible=!1,t.visible=!0}function Z(O){z=Px(z,O),v(O==="self"?330:165),m()}function V(){z=Lx(z),v(z.phase==="climbing"?440:220),m()}function F(O,te){if(!ee)return;const ge=z.phase;z=Dx(z,O);const Me=z.phase==="unfolding"?z.progress:["stairs","climbing","inside"].includes(z.phase)?1:0;de=Me*Me*(3-2*Me),re=n.MathUtils.damp(re,z.phase==="inside"?1:0,3,O),N.forEach((Ne,Te)=>{Ne.position.lerpVectors(k[Te],q[Te],de),Ne.rotation.y=de*(-Te*.07)});const U=z.phase==="measuring"?Math.sin(z.progress*Math.PI):0;if(W.forEach((Ne,Te)=>{const L=Te===0?-1:1;Ne.position.set(L*(2.35-U*1.55),1.65+de*.4,-de*.85),Ne.rotation.z=L*de*.65}),B.rotation.z=z.phase==="measuring"?Math.sin(z.progress*35)*.8:z.phase==="refused"?Math.sin(te*6)*.25:-de*Math.PI*1.75,G.position.y=.7+(z.phase==="measuring"?Math.sin(z.progress*Math.PI)*1.5:Math.sin(te*1.3)*.05),G.scale.set(.45*(1-U*.16),.64*(1+U*.3),.45*(1-U*.16)),we.visible=z.phase==="refused",we.position.y=.65+Math.sin(te*2)*.1,T.rotation.y=re*1.7,I.rotation.y=-re*1.7,B.visible=re<.2,K.visible=z.phase==="inside",K.rotation.z=Math.sin(te*.7)*.04,ce.rotation.z=-te*.12,Q.position.copy(H),Q.scale.setScalar(.43),Q.visible=z.phase!=="inside",["climbing","inside"].includes(z.phase)){const Ne=z.phase==="inside"?1:z.progress,Te=[H,...q.map(ne=>ne.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],L=Ne*(Te.length-1),x=Math.min(Te.length-2,Math.floor(L));Q.position.lerpVectors(Te[x],Te[x+1],Math.min(1,L-x)),Q.scale.setScalar(.43*(1-Ne*.8))}if(ie.position.set((z.target==="self",0),z.target==="self"?3.7:.12,z.target==="self"?-1.4:0),ie.rotation.x=z.target==="self"?0:Math.PI/2,ie.visible=["ready","refused","measuring","unfolding"].includes(z.phase),z.trace&&!C){C=!0,xe.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ge!==z.phase&&m()}function Y(){return{ready:z.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[z.phase]}return{enter:P,exit:X,choose:Z,act:V,update:F,text:Y,button:()=>z.phase==="inside"?"увидеть сон снова":z.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...z,active:ee,trace:C,unfold:de,opened:re,rootVisible:t.visible,roomVisible:d.visible,steps:N.map(O=>O.position.toArray()),jaws:W.map(O=>O.position.toArray()),drop:G.position.toArray(),head:Q.position.toArray(),cursorVisible:K.visible,cursorPosition:K.getWorldPosition(new n.Vector3).toArray(),faceAngles:[T.rotation.y,I.rotation.y],nestedVisible:K.visible&&ce.visible,landmarks:[G.position.toArray(),[0,3.7,-1.4],H.toArray(),q[0].toArray()]})}}const Nx=["восток","юг","запад","север"],uf=[0,2,3];function kl(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function Ux(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Fx(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==uf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function Ox(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function zx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:f,torus:h,sign:p,batchStatic:g,chime:v,changed:m}){const d=a([0,0,0],e);d.name="dream-04-letter-above-roof",d.visible=!1;const M=r("#355b62"),w=r("#72a49c",{metalness:.25,roughness:.5}),y=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,d),h([0,-.26,0],3.78,.024,s.copper,d);for(let C=0;C<4;C++){const P=C*Math.PI/2,X=Math.cos(P)*3.05,Z=Math.sin(P)*3.05;p(["В","Ю","З","С"][C],[X,-.23,Z],.38,.28,d).rotation.x=-Math.PI/2}const S=[],b=[],R=[];for(let C=0;C<3;C++){const P=1.05+C*1.4,X=2.05-C*.27,Z=a([0,P,0],d);S.push(Z);for(let te=1;te<4;te++){const ge=te*Math.PI/2,Me=Math.cos(ge),U=Math.sin(ge),Ne=[[.3,.3,-.3],[.3,.3,.3],[X,.04,X],[X,.04,-X]],Te=new n.BufferGeometry,L=[];for(const ne of[0,1,2,0,2,3]){const[oe,ue,Se]=Ne[ne];L.push(oe*Me-Se*U,ue,oe*U+Se*Me)}Te.setAttribute("position",new n.Float32BufferAttribute(L,3)),Te.computeVertexNormals();const x=w.clone();x.side=n.DoubleSide,o(Te,x,null,null,Z),f([X*Me-X*U,.04,X*U+X*Me],[X*Me+X*U,.04,X*U-X*Me],.035,s.copper,Z);for(const ne of[-1,1])f([X*Me-X*U*ne,.04,X*U+X*Me*ne],[(X+.16)*Me-(X+.16)*U*ne,.2,(X+.16)*U+(X+.16)*Me*ne],.035,s.copper,Z)}const V=a([X*.67,.045,0],Z);f([-.32,0,0],[.3,0,0],.026,s.mint,V),f([.3,0,0],[.1,0,.13],.026,s.mint,V),f([.3,0,0],[.1,0,-.13],.026,s.mint,V),b.push(V);const F=uf[C]*Math.PI/2,Y=Math.cos(F)*X*.63,se=Math.sin(F)*X*.63,O=h([Y,P+.09,se],.16,.025,s.light,d);R.push(O),p(`${C+1}`,[X+.26,P+.14,.2],.36,.29,d,{bg:"#355b62",fg:"#f0e4b8"});for(const te of[-1,1])f([te*.3,P-.32,-.3],[te*.3,P-.03,-.3],.018,s.copper,d)}const _=a([-2.6,.16,1.5],d);l([0,0,0],[1.1,.62,.7],s.cream,_),l([0,.16,.361],[.72,.07,.025],M,_),p("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,d,{size:40});const A=i.clone(!0);d.add(A),A.scale.setScalar(.53),A.position.set(-2.6,1,1.5),A.rotation.z=-.12,p("СОН / 04",[0,-.12,3.34],1.8,.32,d,{size:48}).rotation.x=-Math.PI/2;const T=a([-1.1,.12,1.5],d);l([0,0,0],[.52,.025,.36],y,T);const I=a([-.26,.016,0],T),B=a([.26,.016,0],T);l([.13,0,0],[.26,.022,.36],y,I),l([-.13,0,0],[.26,.022,.36],y,B),f([-.25,.04,-.17],[0,.04,.1],.009,s.copper,T),f([.25,.04,-.17],[0,.04,.1],.009,s.copper,T);const W=c([0,.045,0],.055,s.light,T),N=a([0,5.3,0],d);h([0,0,0],.55,.025,s.copper,N),f([0,-.3,0],[0,.22,0],.018,s.copper,N);const k=Array.from({length:6},(C,P)=>{const X=P*Math.PI/3,Z=c([Math.cos(X)*.29,0,Math.sin(X)*.29],[.21,.065,.11],y,N);return Z.rotation.y=-X,Z});N.visible=!1;const q=[new n.Vector3(-1.1,.12,1.5),...R.map(C=>C.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],G=new n.BufferGeometry().setFromPoints(q),Q=new n.Line(G,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));Q.computeLineDistances(),d.add(Q);let H=kl(),$=!1,K=0,ce=!1,fe=[Math.PI/2,Math.PI/2,Math.PI/2];try{ce=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const xe=a([-3.75,1.17,-2.95],t);xe.visible=ce,l([0,0,0],[.23,.012,.16],y,xe),f([-.11,.016,-.07],[0,.016,.04],.005,s.copper,xe),f([.11,.016,-.07],[0,.016,.04],.005,s.copper,xe),g(d,[...S,...R,_,A,T,N,Q]),S.forEach((C,P)=>g(C,[b[P]])),g(T,[I,B,W]),g(I,[]),g(B,[]),g(_,[]),g(N,k),g(xe,[]);function we(){$=!0,H=kl(),K=0,fe=H.turns.map(C=>C*Math.PI/2),d.visible=!0,t.visible=!1,de(0,0)}function ie(){$=!1,d.visible=!1,t.visible=!0}function z(C){H=Ux(H,C),v(165+C*55+H.turns[C]*22),m()}function ee(){H.phase==="delivered"?(H=kl(),K=0):H=Fx(H),v(220),m()}function de(C,P){if(!$)return;const X=H.phase;H=Ox(H,C),K=n.MathUtils.damp(K,H.phase==="delivered"?1:0,2.4,C),S.forEach((se,O)=>{const te=H.turns[O]*Math.PI/2,ge=Math.atan2(Math.sin(te-fe[O]),Math.cos(te-fe[O]));fe[O]+=ge*(C===0?1:1-Math.exp(-C*7)),se.rotation.y=-fe[O],se.position.x=K*[-2.15,1.85,0][O],se.position.z=K*[.45,-.65,-2.1][O],se.rotation.z=K*(O===0?-.16:.13)});const Z=Math.min(4,H.progress),V=Math.min(3,Math.floor(Z)),F=Math.min(1,Z-V),Y=F*F*(3-2*F);if(T.position.lerpVectors(q[V],q[V+1],Y),T.rotation.y=P*.16,I.rotation.z=-K*1.1,B.rotation.z=K*1.1,W.position.y=.045+K*.18,N.visible=H.phase==="delivered",N.rotation.y=P*.22,k.forEach((se,O)=>{se.position.y=Math.sin(P*.7+O)*.035}),Q.visible=H.phase!=="delivered",H.trace&&!ce){ce=!0,xe.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}X!==H.phase&&m()}function re(){return H.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":H.phase==="caught"?`Поймала крыша ${H.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:H.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:we,exit:ie,turn:z,send:ee,update:de,text:re,directions:Nx,inspect:()=>({...H,turns:[...H.turns],active:$,trace:ce,open:K,roomVisible:d.visible,rootVisible:t.visible,roofs:S.map(C=>({position:C.position.toArray(),rotation:C.rotation.toArray().slice(0,3)})),letter:T.position.toArray(),goals:R.map(C=>C.position.toArray()),crown:N.visible})}}function Bx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:f,torus:h,sign:p,paperBoat:g,batchStatic:v,chime:m}){const d=a([0,0,0],e);d.name="dream-03-silent-dock",d.visible=!1;const M=r("#526b79"),w=r("#375d69",{metalness:.35,roughness:.27}),y=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,d),u([0,-.23,0],4,.055,w,d),h([0,-.18,0],4.08,.04,s.copper,d),l([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,d);for(let P of[-.1,.55,1.2,1.85])l([-2.85,.07,P],[1.38,.045,.025],M,d);for(let P of[-3.4,-2.3])f([P,-.3,1.9],[P,.48,1.9],.035,s.copper,d);p("СОН / 03",[-2.85,.13,2.4],1.6,.28,d,{size:48}).rotation.x=-Math.PI/2;const S=i.clone(!0);S.position.set(-2.8,1.27,.75),S.scale.setScalar(.65),d.add(S);const b=[];for(const P of[-1,1]){const X=a([P*.12,-.04,.68],S);f([0,0,0],[P*.64,-.2,.05],.06,s.black,X),c([P*.62,-.18,.05],[.19,.095,.07],s.black,X),f([P*.58,-.18,.06],[P*.58,-.7,.06],.015,s.copper,X),c([P*.58,-.76,.06],.075,s.copper,X),v(X,[]),b.push(X)}const R=Array.from({length:3},(P,X)=>h([-1.2+X*1.25,-.17,-.25],.72,.035,X===1?s.cream:s.copper,d)),_=Array.from({length:3},(P,X)=>h([-1.2+X*1.25,-.165,-.25],.72,.013,y,d)),A=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,d),T=g(d,[-1.9,-.13,-.25],.9),I=c([0,.53,0],[.065,.09,.065],s.light,T),B=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,d);B.rotation.z=.65;const W=[];for(let P=0;P<5;P++){const X=-1.6+P*.85;f([X,-.2,-2.9],[X,1.1+P%2*.4,-2.9],.025,M,d),W.push(c([X,1.12+P%2*.4,-2.9],.035,s.light,d))}let N=!1,k=0,q=1,G=[1,1,1],Q=[0,0,0],H=0,$=0,K=!1;try{K=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ce=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ce.visible=K;const fe=Array.from({length:5},()=>new n.Vector3),xe=new n.CatmullRomCurve3(fe),we=new n.Vector3,ie=new n.Vector3;v(d,[S,...R,..._,A,T,B,...W]),v(S,b),v(T,[I]);function z(P){q=n.MathUtils.clamp(Math.round(Number(P)||1),1,3)}function ee(){N=!0,k=0,G=[1,1,1],Q=[0,0,0],H=0,$=0,d.visible=!0,t.visible=!1,C(0,0)}function de(){N=!1,d.visible=!1,t.visible=!0}function re(){if(N){if(k===3){k=0,G=[1,1,1],Q=[0,0,0],$=0;return}if(G[k]=q,k++,H=0,m(110+q*55),k===3){K=!0,ce.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function C(P,X){if(!N)return;$+=Math.min(P,.15),H+=Math.min(P,.15);for(let Y=0;Y<3;Y++){Q[Y]=n.MathUtils.damp(Q[Y],Y<k?1:0,3,P);const se=-.17+Q[Y]*(.95+G[Y]*.42),O=.72+G[Y]*.12;R[Y].position.y=se,R[Y].rotation.set(Math.PI/2*(1-Q[Y]),Math.PI/2*Q[Y],0),R[Y].scale.setScalar(O/.72),_[Y].scale.setScalar(O/.72*(1+Math.sin($*.9+Y)*.045)),fe[Y+1].set(R[Y].position.x,Math.max(-.1,se),-.25)}fe[0].set(-2,-.1,-.25),fe[4].set(2.5,-.1,-.25);const Z=(1-Math.cos($*.55))*.5;xe.getPoint(Z,we),xe.getPoint(Math.min(.999,Z+.012),ie),T.position.copy(we),T.rotation.z=n.MathUtils.clamp(Math.atan2(ie.y-we.y,ie.x-we.x),-.45,.45),T.rotation.y=0,A.visible=k>0;const V=Math.min(1,H/1.8),F=Math.max(0,k-1);A.position.set(n.MathUtils.lerp(-2.5,-1.2+F*1.25,V),.35+V*(2.1+G[F]*.35),n.MathUtils.lerp(1.4,-.25,V)),A.rotation.y=$*.4,b.forEach((Y,se)=>Y.rotation.z=Math.sin($*1.2+se*Math.PI)*(.06+k*.04)),I.position.y=.53+Math.sin(X)*.02}return{enter:ee,exit:de,toss:re,choose:z,update:C,inspect:()=>({active:N,step:k,force:q,forces:[...G],lift:[...Q],trace:K,roomVisible:d.visible,rootVisible:t.visible,boat:T.position.toArray(),ringY:R.map(P=>P.position.y),ringRotation:R.map(P=>P.rotation.toArray().slice(0,3)),stone:A.position.toArray()})}}function zh(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(c=>Number(c.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const c=t.batch,u=Math.min(i,Math.max(0,360-c.age));c.age+=u,c.exposure[c.face]+=u,c[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const c=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:c.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:c.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=c.air,t.batch&&t.batch.age<360&&c.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(c.id),f=t.shelf.findIndex(h=>h.id===u);if(f<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(f,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",p={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(p),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:p,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,l={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:l,result:s,seconds:o,label:r}}const kx={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Gx({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,mesh:u,sign:f,batchStatic:h,changed:p,watching:g,localPlay:v}){var X,Z,V;const m=s([24,-1.55,0]);m.name="cheese-cellar";const d=i("#697b70"),M=i("#b4b89b"),w=i("#936c4d"),y=i("#e1b064"),S=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],d,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let F=-4;F<=4;F+=2)r([F,1.5,-3.43],[.16,3,.1],d,m);for(let F of[-4.4,4.4])l([F,0,-3.3],[F,3.6,-3.3],.09,t.copper,m),l([F,3.6,-3.3],[F,3.6,2.5],.09,t.copper,m),l([F,3.6,2.5],[F,0,2.5],.09,t.copper,m);f("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let F of[-3.8,3.8])r([F,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,t.copper,m),c([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,b,m),l([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let F of[2.8,3.5])a([F,.28,1.8],.26,.56,t.cream,m),a([F,.59,1.8],.12,.1,t.copper,m);const R=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let F=0;F<4;F++)r([2.25+F*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const _=s([.5,1.02,.25],m),A=u(new n.CylinderGeometry(1.2,1.2,.62,40),y,[0,0,0],null,_),T=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),S,[0,0,0],null,_),I=c([0,.33,0],.35,.026,t.cream,_),B=s([.5,.65,2.3],m),W=[];for(let F=0;F<6;F++)W.push(o([-1.25+F*.5,0,0],.08,t.mint,B));const N=f("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});N.rotation.x=-Math.PI/2;function k(F){const Y=s(F,m),se=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,Y),O=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),S.clone(),[0,0,0],null,Y),te=s([0,-.14,.09],Y);for(let Ne=0;Ne<4;Ne++)r([.05+Ne*.085,.04+Ne*.05,.15+Ne*.03],[.12,.06,.2],t.cream,te);const ge=o([.09,.16,.27],.04,t.mint,te),Me=u(new n.IcosahedronGeometry(.21,0),d,[.13,.02,.23],null,Y),U=s([0,0,0],Y);for(const[Ne,Te,L]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([Ne,Te,L],[.05,.05,.025],t.dark,U);return{g:Y,body:se,crust:O,steps:te,crystal:Me,holes:U,pearl:ge}}const q=Array.from({length:6},(F,Y)=>k([-3.15+Y*1.26,1.42,-2.6])),G=s([0,0,0],e);for(let F=0;F<24;F++){const Y=F/23;r([8.3+Y*11.2,-.15-Y*1.32,1.4+Math.sin(Y*Math.PI)*2],[.85,.15,.75],d,G)}for(let F=0;F<5;F++)r([20+F*.7,-1.46,1.4-F*.22],[.75,.13,.7],d,G);f("СЫР →",[10.2,.35,2.4],1.5,.4,G,{size:44}),l([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,G),h(G,[]),h(m,[_,R,B,N,...q.map(F=>F.g)]);for(const F of q)h(F.steps,[F.pearl]),h(F.holes,[]);let Q=null,H=null,$=0,K=null,ce="",fe=0;try{const F=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");Q=(F==null?void 0:F.state)||F,$=Number(F==null?void 0:F.clockOffset)||0}catch{}const xe=()=>Date.now()/1e3+$;function we(F,Y,se={}){const O=zh({state:Q,mode:F,tool:Y,args:se,now:xe()});Q=O.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:Q,clockOffset:$}))}catch{}return O}we("migrate");const ie=document.createElement("div");ie.id="cellar-controls",ie.hidden=!0,ie.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(ie);function z(){return H&&g()?H:zh({mode:"migrate",state:Q,now:Q.updated}).public}function ee(F){K=F;const Y=F.batch;if(_.visible=!!Y,N.visible=!Y,R.rotation.y=F.air==="dry"?-.8:0,Y){_.rotation.z=Y.face?Math.PI:0;const se=Y.age/360;A.material.color.set(Y.culture==="moon"?"#e9cf8b":"#c8bc88"),T.material.color.set(F.air==="damp"?"#8b9f78":"#b87a48"),I.scale.setScalar(1+se*.15)}for(let se=0;se<6;se++)W[se].visible=!!Y&&Y.age>=(se+1)*60;q.forEach((se,O)=>{const te=F.shelf[O];se.g.visible=!!te,te&&(se.g.rotation.z=te.kind==="lopsided"?.22:0,se.crust.material.color.set(te.wet>=180?"#8b9f78":"#b87a48"),se.steps.visible=te.kind==="moon_stair",se.crystal.visible=te.kind==="stone",se.holes.visible=te.kind==="holes"||te.kind==="lopsided")})}function de(F,Y){v();const se=we("action",F,Y);return ce="",P(0),p(),se}for(const F of ie.querySelectorAll("[data-culture]"))F.onclick=()=>de("set_batch",{culture:F.dataset.culture});ie.querySelector("#cellar-turn").onclick=()=>de("tend",{air:Q.air,turn:!0}),ie.querySelector("#cellar-air").onclick=()=>de("tend",{air:Q.air==="damp"?"dry":"damp",turn:!1}),ie.querySelector("#cellar-wait").onclick=()=>{v(),$+=60,we("tick"),ce="",P(0),p()};function re(){const F=K||z(),Y=F.batch,se=H&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",O=Y?Y.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(Y.age)}/360 с. Корка: ${Math.floor(Y.exposure[0])}/${Math.floor(Y.exposure[1])} с.`:F.shelf.length?`На полке: ${F.shelf.map(te=>kx[te.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:H&&g()?"войти в свою сыроварню":Y?Y.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(H&&g())&&!!Y&&!Y.ready,description:se+" "+O}}function C(){const F=K||z(),Y=F.batch;ie.querySelector("#cellar-readout").textContent=`${F.air==="damp"?"сыро":"сухо"} · ${Y?Y.ready?"готово":`ещё ${Math.ceil(Y.remaining)} с`:"нет колеса"} · полка ${F.shelf.length}/6`;for(const se of ie.querySelectorAll("[data-culture]"))se.disabled=!!Y;ie.querySelector("#cellar-turn").disabled=!Y||Y.ready,ie.querySelector("#cellar-air").textContent=F.air==="damp"?"сделать суше":"вернуть сырость"}function P(F){F-fe>=1&&(fe=F,we("tick"));const Y=z(),se=JSON.stringify(Y);se!==ce&&(ce=se,ee(Y),C(),p())}return window.addEventListener("beznogim:state",({detail:F})=>{var se,O;const Y=(O=(se=F.mechanics)==null?void 0:se.cellar)==null?void 0:O.public;Y&&(H=Y,ce="")}),H=((V=(Z=(X=window.__beznogimState)==null?void 0:X.mechanics)==null?void 0:Z.cellar)==null?void 0:V.public)||null,ee(z()),C(),{house:m,controls:ie,update:P,card:re,run:()=>de(Q.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:H&&g()?"resident":"sandbox",...K,wheelVisible:_.visible,shelfVisible:q.filter(F=>F.g.visible).length,stairsVisible:q.filter(F=>F.g.visible&&F.steps.visible).length,shutter:R.rotation.y})}}function Vx({entries:n,elements:e,layer:t,camera:i}){const s=new pt,r=new pt,o=new D,a=Object.entries(n).map(([f,h])=>({element:e[f],anchor:h.point,x:NaN,y:NaN,visible:null}));let l=0,c=0,u=!1;return{update(f,h,p){if(t.hidden===f&&(t.hidden=!f),!f){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||l!==h||c!==p||!s.equals(r);l=h,c=p,u=!0;for(const v of a){if(typeof v.anchor=="function")v.anchor(o);else{if(!g)continue;o.copy(v.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,d=(1-o.y)*p*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&d>=10&&d<=p-55;if(M!==v.visible&&(v.visible=M,v.element.classList.toggle("hidden",!M)),!M)continue;const w=Math.round(m*10)/10,y=Math.round(d*10)/10;(w!==v.x||y!==v.y)&&(v.x=w,v.y=y,v.element.style.transform=`translate3d(${w}px,${y}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Hx(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,f=Math.max(12,u?0:a.bottom+12,u?c.bottom+12:0),h=Math.max(64,innerHeight-l.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(f)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Ae=n=>document.querySelector(n),Jt=()=>innerWidth<700,hf=matchMedia("(prefers-reduced-motion: reduce)").matches;let pr={};try{pr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Ee={loop:0,roof:null,running:!!pr.running,harvest:Math.min(99,Math.max(0,Number(pr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(pr.dockTrips)||0))),dockPending:pr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function qs(){return Ee.roof===null?Ee.running||Ee.loop>0:!!Ee.roof}function hc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Ee.running,harvest:Ee.harvest,dockTrips:Ee.dockTrips,dockPending:Ee.dockPending}))}catch{}}const ht=new af({antialias:!0,alpha:!1,powerPreference:"high-performance"});ht.setPixelRatio(Math.min(devicePixelRatio,Jt()?1.5:2));ht.setSize(innerWidth,innerHeight,!1);ht.shadowMap.enabled=!0;ht.shadowMap.type=Ns;ht.shadowMap.autoUpdate=!1;ht.shadowMap.needsUpdate=!0;ht.outputColorSpace=on;ht.toneMapping=Aa;ht.toneMappingExposure=1.22;Ae("#world").append(ht.domElement);const Mn=new Ld;Mn.background=new ot("#182e32");Mn.fog=new Ba("#182e32",8e-4);const Oe=new kr(-10,10,10,-10,.1,600),jc=new D(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(jc);const Je=new ox(Oe,ht.domElement);Je.target.copy(jc);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=xi.PAN;Je.mouseButtons.RIGHT=xi.PAN;Je.touches.ONE=_i.PAN;Je.touches.TWO=_i.DOLLY_PAN;Mn.add(new Yd("#d9eedc","#334d53",2.3));const fs=new $c("#ffe2ac",3.3);fs.position.set(-7,14,6);fs.castShadow=!0;fs.shadow.mapSize.set(Jt()?512:1024,Jt()?512:1024);Object.assign(fs.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});fs.shadow.bias=-4e-4;fs.shadow.normalBias=.025;Mn.add(fs);const df=new $c("#8ad5d8",1.3);df.position.set(5,7,-8);Mn.add(df);const bt=new zi;Mn.add(bt);const Gl={};function et(n,e={}){const t=n+JSON.stringify(e);return Gl[t]||(Gl[t]=new Ds({color:n,roughness:.8,...e}))}const si={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},me={concrete:et(si.concrete),cream:et(si.cream),dark:et(si.dark),metal:et(si.metal,{metalness:.5,roughness:.4}),copper:et(si.copper,{metalness:.6,roughness:.35}),rust:et(si.rust),black:et(si.black),leaf:et(si.leaf),light:et("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:et("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Js={box:new Ai(1,1,1),sphere:new Wa(1,12,8),ico:new Br(1,1),cyl:new Or(1,1,1,16),cone:new hs(1,1,8)};function Ut(n,e,t,i,s=bt){const r=new pn(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Xe=(n,e,t,i=bt)=>Ut(Js.box,t,n,e,i),ct=(n,e,t,i=bt)=>Ut(Js.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),wt=(n,e,t,i,s=bt)=>Ut(Js.cyl,i,n,[e,t,e],s);function Gr(n,e,t,i=bt,s=.08){return Ut(new Qc(...e,1,s),t,n,null,i)}function gt(n=[0,0,0],e=bt){const t=new zi;return t.position.set(...n),e.add(t),t}function Ks(n,e,t,i=bt){const s=new Gc(n.map(r=>new D(...r)));return Ut(new qa(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function St(n,e,t,i,s=bt){const r=new D(...n),o=new D(...e),a=o.clone().sub(r),l=wt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return l.quaternion.setFromUnitVectors(new D(0,1,0),a.normalize()),l}function Pt(n,e,t,i,s=bt,r=[Math.PI/2,0,0]){const o=Ut(new Xa(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function $t(n,e,t,i,s=bt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const l=new zc(o);l.colorSpace=on;const c=Ut(new ds(t,i),new Fr({map:l,side:Pn}),e,null,s);return c.castShadow=!1,c}let Vl=179;function Mt(){return Vl=Vl*1664525+1013904223>>>0,Vl/4294967296}const Sa=document.createElement("canvas");Sa.width=Sa.height=256;const ba=Sa.getContext("2d");ba.fillStyle="#b4bcaa";ba.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)ba.fillStyle=`rgba(${Mt()>.5?"60,82,64":"235,229,201"},${Mt()*.08})`,ba.fillRect(Mt()*256,Mt()*256,1+Mt()*3,1+Mt()*3);const Dr=new zc(Sa);Dr.wrapS=Dr.wrapT=br;Dr.repeat.set(5,5);Dr.colorSpace=on;const Wx=et("#c2c6b1",{map:Dr,roughness:.97});function eu(n,e,t,i,s=bt){const r=new zr;n.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new Zs(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Ut(o,i,null,null,s)}const tu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];eu(tu,0,.82,me.concrete);eu(tu,.06,.14,Wx);eu(tu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,et("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Mt()*10.9,t=Mt()>.5?5.15:-5.2,i=Ut(Js.ico,et(n%3?"#557469":"#668477"),[e,-1.15-Mt()*.5,t],[.25+Mt()*.8,.2+Mt()*.55,.35+Mt()*.3]);i.rotation.y=Mt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Xe([e,-.37,5.61],[.48,.19,.025],n%2?me.copper:me.dark),n%2===0&&Ks([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,me.metal)}$t("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,bt,{size:32});const Dt=gt([-3.2,.08,-2.5]),hn=gt([0,0,0],Dt);Xe([0,.08,0],[4.5,.15,3.6],me.dark,Dt);Xe([0,1.2,-1.68],[4.5,2.4,.18],me.cream,Dt);Xe([-2.15,1,0],[.18,2,3.6],me.cream,Dt);for(let n=0;n<5;n++){Xe([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],me.concrete,Dt),Xe([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],me.metal,Dt);for(let e=0;e<3;e++)Xe([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],me.copper,Dt)}Xe([0,2.47,-.2],[4.8,.14,3.7],me.rust,hn);for(let n=0;n<23;n++){const e=Xe([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],et("#d09062"),hn);e.rotation.x=-.015}Xe([0,2.35,1.62],[4.8,.14,.18],me.dark,Dt);St([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,me.copper,Dt);St([2.3,.12,1.62],[2.3,2.4,1.62],.055,me.copper,Dt);$t("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Dt,{size:37});Xe([.1,.85,-.84],[3.8,.13,.87],me.rust,Dt);for(const n of[-1.5,1.65])Xe([n,.44,-.84],[.12,.85,.65],me.metal,Dt);for(let n=0;n<3;n++)Xe([-1.15+n*.95,.51,-.85],[.82,.47,.75],me.concrete,Dt),Xe([-1.15+n*.95,.5,-.44],[.18,.04,.03],me.copper,Dt);for(let n=0;n<6;n++)Xe([-1.6+n*.48,2.07,-1.48],[.28,.16+Mt()*.16,.17],et(["#9fba95","#cb9b70","#667f71"][n%3]),Dt);wt([0,.5,.7],.32,.12,me.rust,Dt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;St([e,.06,t],[e,.5,t],.04,me.metal,Dt)}for(let n=0;n<4;n++)Pt([-1.5,.06,1],.3-n*.045,.025,me.black,Dt);wt([-1.5,3,-.9],.16,.9,me.metal,hn);wt([-1.5,3.47,-.9],.24,.08,me.rust,hn);Xe([1.4,2.9,-.4],[.8,.5,.6],me.concrete,hn);for(let n=0;n<5;n++)Xe([1.1+n*.15,2.94,-.085],[.035,.32,.03],me.dark,hn);const nu=new Za("#ffca86",5,5,2);nu.position.set(-3,1.7,-1.1);bt.add(nu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=Gr([n,.1,e],[.74,.05,.74],et(Mt()>.3?"#b3baa6":"#a5b5a4"),bt,.018);t.rotation.y=(Mt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Mt()*12,t=-5.1+Mt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Ut(Js.cone,me.leaf,[e,.1,t],[.022,.12+Mt()*.12,.022]);i.rotation.z=(Mt()-.5)*.7}const dc=new zn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Pn});Xe([3.7,.12,3.6],[4.9,.24,2.7],me.dark);Ut(new ds(4.5,2.4),dc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Xe([3.7,.29,n],[5,.38,.16],me.cream);for(const n of[1.18,6.2])Xe([n,.29,3.6],[.16,.38,2.85],me.cream);for(let n=0;n<13;n++)Xe([1.85,.5,2.15+n*.235],[1.08,.09,.22],et(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])wt([e,.88,n],.045,.8,me.copper);for(const n of[1.31,2.4])Ks([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,me.cream);const iu=[];for(let n=0;n<6;n++){let e=Xe([4+n*.095,-1.25,5.56],[.055,2.4,.03],et("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));iu.push(e)}for(let n=0;n<4;n++)Xe([3.96+n*.17,.31,5.31],[.055,.08,.6],me.dark);const Wt=gt([3.7,.1,-2.6]);Gr([0,.14,0],[3.7,.27,3.5],me.cream,Wt,.09);for(const n of[-1.55,1.55])Xe([n,1.76,0],[.17,3.25,.2],me.metal,Wt),Xe([n,.38,0],[.45,.2,.6],me.copper,Wt),St([n,.36,-1.2],[n,2.9,0],.045,me.copper,Wt),St([n,.36,1.2],[n,2.9,0],.045,me.copper,Wt);Xe([0,3.38,0],[3.5,.18,.26],me.copper,Wt);const Xx=Pt([0,2.7,-.5],1.83,.035,me.copper,Wt,[0,0,0]);Xx.scale.y=.85;const Vr=[];for(let n=0;n<5;n++){const e=gt([-1.18+n*.59,3.24,0],Wt),t=1.8+n*.12;St([0,0,-.08],[0,-t,0],.015,me.dark,e),St([0,0,.08],[0,-t,0],.015,me.dark,e),ct([0,-t,0],.205,me.copper,e),Pt([0,-t,0],.211,.012,me.light,e,[0,0,0]),Vr.push({group:e,len:t,phase:n})}Xe([0,.6,1.3],[1.45,.8,.4],me.metal,Wt);$t("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Wt,{size:40});const qx=wt([-.43,.97,1.3],.19,.07,me.cream,Wt);qx.rotation.x=Math.PI/2;const su=Xe([-.43,.99,1.342],[.015,.22,.008],me.rust,Wt);su.rotation.z=-.7;const ff=ct([.53,.93,1.52],.09,me.light,Wt),Ka=gt([.15,.4,1.59],Wt);Pt([0,0,0],.19,.023,me.rust,Ka,[0,0,0]);for(let n=0;n<3;n++)St([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,me.rust,Ka);Ks([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,me.copper);const pf=[];function ru(n,e,t=1.5){wt([n,t/2,e],.038,t,me.metal),Xe([n,t,e],[.27,.11,.27],me.dark),Xe([n,t-.18,e],[.17,.25,.17],me.light),Xe([n,t-.34,e],[.25,.08,.25],me.copper);const i=new Za("#ffbe70",1.8,3);i.position.set(n,t-.16,e),pf.push(i)}ru(-5.9,3.9,1.3);ru(.3,-4.8,1.7);ru(5.8,1.25,1.35);const an=gt([-3.6,.08,3.55]),fc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;Gr([0,.14,e],[3.6,.3,1.14],me.rust,an,.06),Xe([0,.305,e],[3.36,.04,.92],et(si.soil),an);for(let t=0;t<4;t++){const i=gt([-1.26+t*.84,.33,e],an);wt([0,.14,0],.026,.28,me.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=ct([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],et(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){ct([0,.17,0],[.25,.18,.25],et("#b6c58a"),i);for(let s=0;s<6;s++){const r=ct([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],me.leaf,i);r.rotation.y=s}fc.push(i)}else{const s=ct([.05,.22,0],[.1,.21,.12],et(si.purple,{roughness:.35}),i);s.rotation.z=-.25,ct([.05,.41,0],[.075,.025,.07],me.leaf,i),fc.push(i)}}}const mf=gt([-1.72,.1,.8],an);for(let n=0;n<2;n++)Xe([n*3.45,.6,0],[.04,1.3,.04],me.copper,mf);St([0,1.25,0],[3.45,1.25,0],.022,me.copper,mf);$t("КОБАЧКИ",[-.45,.68,1.64],1,.26,an,{bg:"#c2c7a3",fg:"#445e45",size:42});wt([1.9,.23,.7],.18,.34,et("#6b9389"),an);St([2.04,.25,.7],[2.4,.46,.7],.045,et("#6b9389"),an);Pt([1.8,.48,.7],.16,.02,me.copper,an,[0,0,0]);Xe([-1.6,.2,1.47],[.65,.4,.45],me.rust,an);for(let n=0;n<3;n++)Xe([-1.6,.12+n*.11,1.71],[.7,.05,.025],me.copper,an);const xn=gt([-3.8,.08,.35]);wt([0,.73,0],.58,.1,me.rust,xn);wt([0,.35,0],.045,.7,me.metal,xn);for(let n=0;n<3;n++)St([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,me.metal,xn);const Hr=gt([.1,.81,0],xn);ct([0,.2,0],[.23,.22,.23],me.cream,Hr);wt([0,.37,0],.14,.06,me.copper,Hr);ct([0,.42,0],.045,me.dark,Hr);St([.15,.18,0],[.33,.32,0],.07,me.cream,Hr);Pt([-.15,.25,0],.18,.035,me.dark,Hr,[0,0,0]);for(const n of[-.35,.38])wt([n,.84,.24],.082,.15,me.cream,xn),Pt([n,.92,.24],.084,.012,me.copper,xn),wt([n,.921,.24],.063,.006,et("#67513b"),xn),Pt([n+.09,.86,.24],.045,.011,me.cream,xn,[0,0,0]);const Qa=[];for(let n=0;n<9;n++){const e=ct([0,0,0],.07,et("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),xn);e.castShadow=!1,Qa.push(e)}const $n=gt([-5.65,.09,1.1]);Xe([0,.3,0],[.7,.6,.7],me.concrete,$n);Gr([0,.8,0],[.68,.45,.35],me.dark,$n,.05);for(let n=0;n<6;n++)Xe([-.2+n*.05,.8,.18],[.022,.27,.018],me.copper,$n);Xe([.18,.85,.184],[.16,.075,.02],me.light,$n);ct([.18,.72,.19],.05,me.cream,$n);St([.18,1,0],[.48,1.6,0],.012,me.copper,$n);const gf=gt([-.5,.1,-4.6]);wt([0,1.75,0],.055,3.5,me.metal,gf);ct([0,3.55,0],.09,me.copper,gf);Ks([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,me.dark);for(let n=0;n<8;n++){let e=n/8;const t=Ut(new hs(.13,.3,3),et(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const ja=gt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Xe([0,0,0],[.55,.09,.025],me.rust,ja);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}ct([0,0,.05],.08,me.copper,ja);const tn=gt([7.25,-.03,1.5]);Xe([0,-.12,0],[2.25,.3,2.5],me.metal,tn);for(let n=0;n<10;n++)Xe([-.99+n*.22,.08,0],[.2,.08,2.6],me.rust,tn);Xe([-.95,.2,-.95],[.35,.15,.35],me.dark,tn);wt([.87,.34,.75],.075,.5,me.copper,tn);wt([.87,.59,.75],.13,.05,me.cream,tn);St([.87,.1,-.7],[.87,2.3,-.7],.035,me.copper,tn);Ks([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,me.copper,tn);Xe([.17,2.09,-.7],[.25,.4,.25],et("#ffd591"),tn);Xe([.17,2.32,-.7],[.34,.08,.34],me.dark,tn);for(let n=0;n<4;n++)Pt([.87,.15,.75],.24-n*.025,.024,et("#b8ad86"),tn);Xe([6.7,.07,1.5],[1.4,.13,.8],me.rust);$t("НИКУДА",[.05,.28,1.36],1.3,.29,tn,{bg:"#c2c7a3",fg:"#445e45",size:45});const ou=[];function el(n,e,t=1){const i=gt(e,n),s=new zr;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Ut(new Zs(s,{depth:.19,bevelEnabled:!1}),et("#dfc99a"),[0,.15,-.1],null,i);const r=Ut(new hs(.23,.36,3),me.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=el(bt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);ou.push(e)}const Jn=yx({THREE:kn,root:bt,dock:tn,state:Ee,M:me,mat:et,group:gt,mesh:Ut,box:Xe,sphere:ct,cyl:wt,torus:Pt,rod:St,sign:$t,paperBoat:el,batchStatic:Ft,persist:hc,say:Cn,refresh:Vt,chime:qi,reduced:hf}),Qe=gt([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const au=et("#233a39",{metalness:.42,roughness:.32});ct([0,.1,0],[.62,.8,.55],au,Qe);ct([0,-.36,.1],[.44,.43,.43],au,Qe);ct([-.61,.03,.03],[.1,.2,.12],me.copper,Qe);ct([.61,.03,.03],[.1,.2,.12],me.copper,Qe);for(const n of[-.23,.23]){ct([n,.2,.485],[.17,.13,.057],me.black,Qe),Pt([n,.2,.541],.078,.02,me.copper,Qe,[0,0,0]),ct([n,.2,.56],.041,me.light,Qe);const e=Xe([n,.38,.48],[.24,.045,.06],me.cream,Qe);e.rotation.z=n>0?-.13:.13}ct([0,.04,.51],[.09,.17,.11],au,Qe);ct([0,-.2,.44],[.31,.16,.11],me.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=Gr([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],me.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=ct([t,i,-.04],[.18,.18,.48],me.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Ks([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,et("#f2edda"),Qe)}for(let n=0;n<3;n++)ct([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],me.cream,Qe);const lu=Pt([0,1.05,0],.77,.019,me.copper,Qe);lu.rotation.z=.14;const Yx=new Za("#ffbb62",.9,3);Yx.position.set(0,.2,.9);const Do=Pt([-.15,.26,.85],.7,.018,me.copper),Ir=Ut(new Ga(.64,32),new Fr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Ir.rotation.x=-Math.PI/2;Ir.castShadow=!1;const vi=new D(-.15,1.9,.85),On=gt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Xe([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?me.cream:me.concrete,On);t.rotation.x=Math.PI/2-e,n%3===0&&St([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,me.copper,On)}for(const n of[-.45,.45])Pt([n,0,0],2.07,.025,me.copper,On,[0,Math.PI/2,0]);for(const n of[-.34,.34])Pt([n,0,0],1.7,.075,me.concrete,On,[0,Math.PI/2,0]);St([0,-2.15,-1.2],[0,-1.58,-.8],.07,me.metal,On);St([0,-2.15,1.2],[0,-1.58,.8],.07,me.metal,On);$t("ОБРАТНО",[.49,-.55,.2],1.15,.3,On,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Mt()*20,t=-8+Mt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Ut(Js.ico,et("#47675f"),[e,-1.3-Mt()*2,t],[.22+Mt()*.55,.19+Mt()*.4,.27+Mt()*.4])}const _f=new Bt,vf=[];for(let n=0;n<75;n++)vf.push((Mt()-.5)*25,Mt()*9-2,(Mt()-.5)*22);_f.setAttribute("position",new mt(vf,3));const xf=new Dd(_f,new Fc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));Mn.add(xf);function Ft(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new pt().multiplyMatrices(i,r.matrixWorld));let l=t.get(o);l||t.set(o,l={material:r.material,geos:[]}),l.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=xx(o,!1);a&&Ut(a,r,null,null,n),o.forEach(l=>l.dispose())}}Ft(bt,[Qe,an,Wt,xn,$n,tn,Dt,On,ja,...ou,...Qa,...iu,Do,Ir,Jn.travel]);Ft(Dt,[hn]);Ft(hn,[]);Ft(On,[]);Ft(Qe,[lu]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});Ft(xn,[...Qa]);Ft($n,[]);Ft(tn,[Jn.gallery,Jn.beacon]);Ft(Wt,[...Vr.map(n=>n.group),Ka,su,ff]);Vr.forEach(n=>Ft(n.group,[]));const Nr=gt([0,.33,0],an);fc.forEach(n=>{Nr.add(n),n.position.y-=.33});Ft(Nr,[]);Ft(an,[Nr]);const yn=Ax({THREE:kn,root:bt,scene:Mn,head:Qe,M:me,mat:et,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,paperBoat:el,batchStatic:Ft,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},chime:qi}),Mi=Gx({THREE:kn,root:bt,M:me,mat:et,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,mesh:Ut,sign:$t,batchStatic:Ft,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),Bi=Wf({THREE:kn,root:bt,M:me,mat:et,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,batchStatic:Ft,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),Si=Vf({THREE:kn,root:bt,M:me,mat:et,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,batchStatic:Ft,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),bi=kf({THREE:kn,root:bt,M:me,mat:et,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,sign:$t,batchStatic:Ft,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),ci=Gf({THREE:kn,root:bt,M:me,mat:et,group:gt,box:Xe,sphere:ct,rod:St,torus:Pt,sign:$t,batchStatic:Ft,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),ki=Hf({THREE:kn,workshop:Dt,M:me,mat:et,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,changed:()=>{Vt(),ht.shadowMap.needsUpdate=!0},watching:()=>dt==null?void 0:dt.watching(),localPlay:()=>dt.localPlay()}),tl=Rx({THREE:kn,scene:Mn,root:bt,head:Qe,M:me,mat:et,mesh:Ut,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,batchStatic:Ft,chime:qi}),Wr=Bx({THREE:kn,scene:Mn,root:bt,head:Qe,M:me,mat:et,mesh:Ut,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,paperBoat:el,batchStatic:Ft,chime:qi}),Dn=zx({THREE:kn,scene:Mn,root:bt,head:Qe,M:me,mat:et,mesh:Ut,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,batchStatic:Ft,chime:qi,changed:()=>{il(),ht.shadowMap.needsUpdate=!0}}),yf=Cx({head:Qe,group:gt,sphere:ct,box:Xe,torus:Pt,M:me,mat:et}),ai=Ix({THREE:kn,scene:Mn,root:bt,head:Qe,M:me,mat:et,mesh:Ut,group:gt,box:Xe,sphere:ct,cyl:wt,rod:St,torus:Pt,sign:$t,batchStatic:Ft,chime:qi,changed:()=>{il(),ht.shadowMap.needsUpdate=!0}});let jt=null,Ct=1;const Bn={quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new D(24,.9,29.7),position:new D(24,.6,24),run:()=>bi.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new D(-6.9,1.9,-20.1),position:new D(0,.6,-24),run:()=>ci.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new D(-17.5,1.3,3.4),position:new D(-24,.6,0),run:()=>Si.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new D(-1.4,1.5,-1.1),position:new D(-3.2,1.25,-2.2),run:()=>ki.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new D(4.7,.8,25.8),position:new D(0,.4,24),run:()=>Bi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new D(28.4,2.2,2.5),position:new D(24,.4,0),run:()=>Mi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new D(-.1,2.15,4.3),position:new D(-.1,1,4.3),run:()=>yn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new D(-6,4.55,-3.25),position:new D(-6,2.2,-3.25),run:()=>{Ee.loop>0||(Ee.loop=12,Sf.copy(Qe.position),Cn("ноги не понадобились"),Vt())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new D(-3.2,3.15,-2.5),position:new D(-3.2,1.1,-2.5),run:()=>{Ee.roof=qs()?0:1,Cn(qs()?"заходи":"прикрыл"),Vt()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new D(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Cn(n[Zx++%n.length]),vi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new D(3.7,3.85,-2.6),position:new D(3.7,1,-2.6),run:()=>{Ee.running=!Ee.running,hc(),Cn(Ee.running?"ну пошло":"можно и полежать"),Vt()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new D(-3.7,1.65,.35),position:new D(-3.8,1,.35),run:()=>{Ee.brew>0||(Ee.brew=8,Ee.teaCount++,vi.set(-2.65,1.7,.65),Cn("щас, чайник поставлю"),Vt())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new D(-3.4,1,3.8),position:new D(-3.6,1,3.55),run:()=>{Ee.harvest++,Os=.15,hc(),vi.set(-1.6,1.6,2.3),Cn(Ee.harvest===1?"о, урожай":"кабачки опять победили"),Vt()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new D(-5.65,1.75,1.1),position:new D(-5.65,1,1.1),run:()=>{Ee.radio=(Ee.radio+1)%3,cu(),Cn(["тишина. нормально.","дождь поймал","провода поют"][Ee.radio]),Vt()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new D(7.4,2.75,1.1),position:new D(7.25,.9,1.5),run:()=>{Jn.launchOrCollect(),Ee.dockPending===!1&&Ee.boat===0&&vi.set(5.85,1.7,1.05)}}};let Zx=0,Os=1,Mf=0,as=0;const Sf=new D;let bf=()=>{Xi("engine"),Bn.engine.run()};const nl={};for(const[n,e]of Object.entries(Bn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>Xi(n),Ae("#hotspots").append(t),nl[n]=t}const Ef=Ae("#hotspots"),Hl=Ae("#speech"),ss={width:innerWidth,height:innerHeight},$x=Vx({entries:Bn,elements:nl,layer:Ef,camera:Oe});let Wl=!1,Bh=NaN,kh=NaN;const ur=new D;function Xi(n){Ee.selected=n,Ae("#inspector").classList.remove("collapsed");const e=Bn[n];Ae("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Ae("#object-title").textContent=e.title,Ae("#object-description").textContent=e.description,bf=e.run,Ae("#focus-object").hidden=!1,Ae("#focus-object").textContent=Kt===n?"весь двор ⌂":"осмотреть ближе ⊕",Vt();for(const[t,i]of Object.entries(nl))i.classList.toggle("selected",t===n)}function Vt(){const n=Ee.selected,e=Bn[n];if(Ae("#status").textContent=Ee.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=Ee.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=qs()?"закрыть крышу":e.action),n==="engine"&&(t=Ee.running?"остановить и отдохнуть":"запустить маятники",i=Ee.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=Ee.brew>0,t=s?"чай заваривается…":e.action,i=Ee.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&Ee.harvest&&(i=`Уже собрано: ${Ee.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Ee.radio]}. ${Ee.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Jn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=yn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Mi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Bi.card();t=r.action,i=r.description}if(n==="bench"){const r=ki.card();t=r.action,i=r.description}if(n==="drydock"){const r=Si.card();t=r.action,i=r.description}if(n==="dash"){const r=ci.card();t=r.action,i=r.description}if(n==="quotes"){const r=bi.card();t=r.action,i=r.description,s=r.disabled}bi.controls.hidden=n!=="quotes",ci.controls.hidden=n!=="dash",Si.controls.hidden=n!=="drydock",ki.controls.hidden=n!=="bench",Bi.controls.hidden=n!=="amnesty",Mi.controls.hidden=n!=="cellar",Ae("#enter-bench")&&(Ae("#enter-bench").hidden=n!=="workshop"),Ae("#enter-dream05").hidden=n!=="stair",Ae("#enter-dream03").hidden=n!=="dock",Ae("#enter-dream04").hidden=n!=="workshop",Ae("#greenhouse-controls").hidden=n!=="greenhouse",Ae("#thermal-moves").hidden=yn.inspect().mode!=="playing",Ae("#thermal-readout").textContent=`тепло ${yn.inspect().temp} · такты ${yn.inspect().turn}/6`,Ae("#object-description").textContent=i,Ae("#object-action").innerHTML=t+" <span>↗</span>",Ae("#object-action").disabled=s}Ae("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes"].includes(Ee.selected)&&dt.watching()){dt.localPlay();return}dt.localPlay(),bf(),as=performance.now()+2200};Ae("#close-card").onclick=()=>Ae("#inspector").classList.add("collapsed");function Cn(n){Ae("#speech").textContent=n,Mf=performance.now()+4e3,Ae("#speech").classList.add("visible")}Ae("#markers").onclick=()=>{Ee.markers=!Ee.markers,Ae("#markers").setAttribute("aria-pressed",Ee.markers),Ef.hidden=!Ee.markers||!!jt||Oe.zoom<.4};let Kt=null;const dn={angle:Math.PI/4,targetAngle:Math.PI/4};function wf(){ss.width=innerWidth,ss.height=innerHeight;const n=innerWidth/innerHeight,e=Jt()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(Jt()?2.8:0),Oe.bottom=-e-(Jt()?2.8:0),Oe.updateProjectionMatrix(),ht.setSize(innerWidth,innerHeight,!1),ht.setPixelRatio(Math.min(devicePixelRatio,Jt()?1.5:2))}function Qs(){if(dt==null||dt.unfollow(),jt){sl();return}Kt=null,document.body.classList.remove("close-look"),Ae("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Oe.zoom=1,Je.target.copy(jc),dn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Ae("#focus-object").onclick=()=>{if(Ee.selected){if(Kt===Ee.selected){Qs();return}Kt=Ee.selected,document.body.classList.add("close-look"),Ae("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(Bn[Ee.selected].position),Jt()&&(Je.target.y+=["cellar","amnesty","drydock","dash","quotes"].includes(Kt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes"].includes(Kt)?Jt()?1.8:1.6:Jt()?2.5:2.1,Kt==="bench"?(Je.maxZoom=4.5,Oe.zoom=Jt()?3.8:3.4,Je.target.y+=Jt()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Oe.updateProjectionMatrix()}};Ae("#home").onclick=Qs;Ae("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Je.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Ae("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Je.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Ae("#rotate").onclick=()=>dn.targetAngle+=Math.PI/2;addEventListener("resize",wf);wf();function Tf(n,e,t=!1){jt&&sl(),Qs(),Je.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Ae("#inspector").classList.add("collapsed")}function Jx(){Tf(0,0);const n=innerWidth/innerHeight,e=Jt()?19.6:9.6;Oe.zoom=Math.min(e*n/(zs.half*1.57),e/(zs.half*1.3)),Oe.updateProjectionMatrix()}const zs=Tx({root:bt,camera:Oe,controls:Je,mobile:Jt,go:Tf,overview:Jx,home:Qs,locationTarget:()=>["dash","quotes"].includes(Kt)&&Ee.selected===Kt?Bn[Kt].position:null}),Gi=document.createElement("select");Gi.id="world-places";Gi.setAttribute("aria-label","Открыть место");Gi.append(new Option("места",""));for(const[n,e]of Object.entries(Bn))Gi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Gi,document.querySelector("#territory-location"));Gi.onchange=()=>{const n=Gi.value;Bn[n]&&(Qs(),Je.target.copy(Bn[n].position),Xi(n),Gi.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Gh=new Jd,Vh=new be;let ns=null;ht.domElement.addEventListener("pointerdown",n=>{ns={x:n.clientX,y:n.clientY,time:performance.now()}});ht.domElement.addEventListener("pointerup",n=>{if(!ns||Math.hypot(n.clientX-ns.x,n.clientY-ns.y)>7||performance.now()-ns.time>550){ns=null;return}if(ns=null,Vh.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Gh.setFromCamera(Vh,Oe),jt)return;const e=Gh.intersectObjects([bi.house,ci.house,Si.house,ki.house,Bi.house,Mi.house,yn.house,Qe,Wt,an,xn,$n,tn,Dt,On,Jn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![bi.house,ci.house,Si.house,ki.house,Bi.house,Mi.house,yn.house,Qe,Wt,an,xn,$n,tn,Dt,On,Jn.travel].includes(t);)t=t.parent;const i=new Map([[bi.house,"quotes"],[ci.house,"dash"],[Si.house,"drydock"],[ki.house,"bench"],[Bi.house,"amnesty"],[Mi.house,"cellar"],[yn.house,"greenhouse"],[Qe,"head"],[Wt,"engine"],[an,"garden"],[xn,"tea"],[$n,"radio"],[tn,"dock"],[Dt,"workshop"],[On,"stair"],[Jn.travel,"dock"]]).get(t);i&&Xi(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Bn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&Xi(t)}});let wn=null;function Kx(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(o),c.start(),c});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function cu(){if(!wn)return;const n=wn.ctx.currentTime;wn.filter.frequency.setTargetAtTime([160,1100,260][Ee.radio],n,.4),wn.toneGain.gain.setTargetAtTime([.05,.025,.3][Ee.radio],n,.4)}Ae("#sound").onclick=async()=>{try{wn||(wn=Kx()),await wn.ctx.resume(),Ee.sound=!Ee.sound,wn.gain.gain.setTargetAtTime(Ee.sound?.08:0,wn.ctx.currentTime,.3),Ae("#sound").textContent=Ee.sound?"звук включён":"звук выключен",Ae("#sound").setAttribute("aria-pressed",Ee.sound),cu(),Vt()}catch{Cn("со звуком не сложилось")}};function qi(n=330){if(!wn||!Ee.sound)return;const e=wn.ctx.currentTime,t=wn.ctx.createOscillator(),i=wn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(wn.gain),t.start(e),t.stop(e+1.1)}Ae("#about").onclick=()=>Ae("#about-dialog").showModal();Ae("#close-about").onclick=Ae("#back-to-yard").onclick=()=>Ae("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&jt){sl();return}n.key==="Escape"&&Ae("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Ae("#zoom-in").click(),n.key==="-"&&Ae("#zoom-out").click(),n.key.toLowerCase()==="r"&&Ae("#rotate").click(),n.key.toLowerCase()==="h"&&Qs()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{dt.localPlay(),yn.step(n.dataset.thermal),as=performance.now()+2200};const Qx={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function uu(){return Ct===1?yn:Ct===2?tl:Ct===3?Wr:Ct===4?Dn:ai}function il(){const n=Ct===1?yn.inspect().dreamStep:uu().inspect().step,e=Qx[Ct];if(Ae("#dream-force").hidden=Ct!==3,Ae("#dream-roofs").hidden=Ct!==4,Ae("#dream-meter").hidden=Ct!==5,Ae("#dream-panel .object-kicker").textContent=`СОН 0${Ct} / БЕЗНОГИМ`,Ae("#dream-panel h2").textContent=e.title,Ae("#dream-text").textContent=Ct===5?ai.text():Ct===4?Dn.text():e.lines[n],Ae("#dream-breathe").textContent=Ct===5?ai.button():Ct===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Ae("#dream-breathe").disabled=Ct===4&&Dn.inspect().phase==="flying"||Ct===5&&["measuring","unfolding","climbing"].includes(ai.inspect().phase),Ct===5){const t=ai.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(Ct===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function js(n=1){jt||(Ct=n,jt={target:Je.target.clone(),zoom:Oe.zoom,angle:dn.targetAngle,focused:Kt,returnId:n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===5?"stair":"workshop"},uu().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,Jt()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?Jt()?1.65:1.75:Jt()?1.45:1.55,Oe.updateProjectionMatrix(),dn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5),Ea="",Ae("#dream-panel").hidden=!1,il(),ht.shadowMap.needsUpdate=!0)}function sl(){if(!jt)return;const n=jt;jt=null,uu().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Oe.zoom=n.zoom,dn.targetAngle=n.angle,Kt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Ea="",Ae("#dream-panel").hidden=!0,ht.shadowMap.needsUpdate=!0,Xi(n.returnId)}Ae("#enter-dream").onclick=()=>js(1);Ae("#exit-dream").onclick=sl;Ae("#dream-breathe").onclick=()=>{Ct===1?yn.breathe():Ct===2?tl.pour():Ct===3?Wr.toss():Ct===4?Dn.send():ai.act(),as=performance.now()+2200,il(),ht.shadowMap.needsUpdate=!0};const Xr=document.createElement("button");Xr.id="enter-bench";Xr.hidden=!0;Xr.textContent="собрать механический монитор ↗";Xr.onclick=()=>{Xi("bench"),Ae("#focus-object").click()};Ae("#focus-object").before(Xr);const rl=document.createElement("button");rl.id="enter-dream02";rl.textContent="сон 02 / вода спит ↗";rl.onclick=()=>js(2);Mi.controls.append(rl);Ae("#enter-dream03").onclick=()=>js(3);Ae("#enter-dream04").onclick=()=>js(4);Ae("#enter-dream05").onclick=()=>js(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>ai.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),as=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{Wr.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Ae("#dream-archive").onclick=()=>Ae("#dream-archive-dialog").showModal();Ae("#close-dream-archive").onclick=()=>Ae("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Ae("#dream-archive-dialog").close(),js(Number(n.dataset.dreamId))};const dt=Sx({head:Qe,headDestination:vi,state:Ee,controls:Je,camera:Oe,refresh:Vt,setAudioTone:cu,say:Cn,onHarvest:()=>{Os=.15}});let Xl="";const Af=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Af.push(new D(n,e,t));const Rf=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])Rf.push(new D(n,e,t));const Cf=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])Cf.push(new D(n,e,t));const Pf=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Pf.push(new D(n,e,t));function jx(){const n=Kt==="quotes"&&Ee.selected==="quotes",e=Kt==="dash"&&Ee.selected==="dash",t=Kt==="drydock"&&Ee.selected==="drydock"||e||n,i=(Kt==="bench"&&Ee.selected==="bench"||t)&&!Ae("#inspector").classList.contains("collapsed")&&!jt;if(document.body.classList.toggle("quotes-look",i&&n),document.body.classList.toggle("dash-look",i&&(e||n)),document.body.classList.toggle("bench-look",i&&!t),document.body.classList.toggle("drydock-look",i&&t),!i){Xl="";return}if(Math.abs(dn.angle-dn.targetAngle)>.01)return;const s=Ae("#inspector").getBoundingClientRect(),r=Ae(".territory-nav").getBoundingClientRect(),o=Ae(".toolbar").getBoundingClientRect(),a=innerWidth<=900&&innerHeight>innerWidth,l=a?{left:14,right:o.left-10,top:r.bottom+14,bottom:s.top-14}:{left:Math.max(s.right+18,r.right+18),right:o.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!a&&(l.left=r.right+12,l.right=innerWidth-16,l.top=o.bottom+10,l.bottom=s.top-10),(e||n)&&innerWidth<=900&&!a&&(l.left=12,l.right=s.left-12,l.top=r.bottom+10,l.bottom=Ae("footer").getBoundingClientRect().top-12);const c=Ae(".resident-history");t&&innerWidth>900&&c&&!c.hidden&&(l.right=Math.min(l.right,c.getBoundingClientRect().left-18));const u=[n?15:e?14:t?13:12,innerWidth,innerHeight,l.left,l.right,l.top,l.bottom,dn.targetAngle].map(M=>Math.round(M*10)/10).join(":");if(u===Xl||l.bottom-l.top<35||l.right-l.left<50)return;Xl=u;const f=()=>{Oe.updateMatrixWorld();const M=(n?Rf:e?Cf:t?Pf:Af).map(w=>_n(w.clone()));return{l:Math.min(...M.map(w=>w.x)),r:Math.max(...M.map(w=>w.x)),t:Math.min(...M.map(w=>w.y)),b:Math.max(...M.map(w=>w.y))}};let h=f();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((l.right-l.left)/(h.r-h.l),(l.bottom-l.top)/(h.b-h.t))),Oe.updateProjectionMatrix(),h=f();const p=(l.left+l.right-h.l-h.r)/2,g=(l.top+l.bottom-h.t-h.b)/2,v=new D().setFromMatrixColumn(Oe.matrixWorld,0),m=new D().setFromMatrixColumn(Oe.matrixWorld,1),d=v.multiplyScalar(-p*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(m.multiplyScalar(g*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(d),Oe.position.add(d),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Ea="";const Lf=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Lf.push(new D(n,e,t));const Df=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Df.push(new D(n,e,t));function ey(){if(!jt||![4,5].includes(Ct))return;const n=Ae("#dream-panel").getBoundingClientRect(),e=Ae("footer").getBoundingClientRect(),t=Ae(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(dn.angle*100)].join(":");if(o===Ea||r.right-r.left<60||r.bottom-r.top<80)return;Ea=o;const a=()=>{Oe.updateMatrixWorld();const g=(Ct===5?Lf:Df).map(v=>_n(v.clone()));return{l:Math.min(...g.map(v=>v.x)),r:Math.max(...g.map(v=>v.x)),t:Math.min(...g.map(v=>v.y)),b:Math.max(...g.map(v=>v.y))}};let l=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(l.r-l.l),(r.bottom-r.top)/(l.b-l.t))),Oe.updateProjectionMatrix(),l=a();const c=(r.left+r.right-l.l-l.r)/2,u=(r.top+r.bottom-l.t-l.b)/2,f=new D().setFromMatrixColumn(Oe.matrixWorld,0),h=new D().setFromMatrixColumn(Oe.matrixWorld,1),p=f.multiplyScalar(-c*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(p),Oe.position.add(p),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Hh=performance.now(),wo=0,Wh=0;function _n(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function ty(){dt.sync();const n=performance.now(),e=(n-Hh)/1e3;Hh=n,wo+=e,Ee.energy=gn.damp(Ee.energy,Ee.running?1:0,1.6,e);const t=hf?wo*.2:wo;dn.angle=gn.damp(dn.angle,dn.targetAngle,5,e);const i=160;Oe.position.set(Je.target.x+Math.sin(dn.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(dn.angle)*i),Oe.lookAt(Je.target),Je.update(),jt||(Je.target.x=gn.clamp(Je.target.x,-62,zs.half+2),Je.target.z=gn.clamp(Je.target.z,-62,zs.half+2)),zs.update(),jx(),ey();for(const s of Vr)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*Ee.energy*.45;if(hn.position.z=gn.damp(hn.position.z,qs()?-2.5:0,2,e),hn.position.y=gn.damp(hn.position.y,qs()?.4:0,2,e),Ka.rotation.z=t*Ee.energy*.28,su.rotation.z=-.7+Ee.energy*1.35+Math.sin(t*4)*Ee.energy*.08,ff.material.emissiveIntensity=.45+Ee.energy*1.5,dc.uniforms.uTime.value=t,dc.uniforms.uEnergy.value=Ee.energy,ja.rotation.z=t*(.09+Ee.energy*.23),pf.forEach(s=>s.intensity=.65+Ee.energy*1.5),nu.intensity=2+Ee.energy*4,Qe.position.x=gn.damp(Qe.position.x,vi.x,1.6,e),Qe.position.z=gn.damp(Qe.position.z,vi.z,1.6,e),Qe.position.y=gn.damp(Qe.position.y,vi.y+Math.sin(t*1.4)*.1,2,e),Ee.loop>0){Ee.loop=Math.max(0,Ee.loop-e);const s=12-Ee.loop;if(s<2){const r=gn.smoothstep(s,0,2);Qe.position.lerpVectors(Sf,new D(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=gn.smoothstep(s,10,12);Qe.position.lerpVectors(new D(-6,.65,-3.25),vi,r),Qe.rotation.x=(1-r)*Math.PI*2}Ee.loop||(Qe.rotation.x=0,Cn("ну вот и дома"),Vt())}if(dt.place(),Qe.rotation.y=Math.sin(t*.3)*.12,lu.rotation.y=t*.13,Do.position.x=Qe.position.x,Do.position.z=Qe.position.z,Do.rotation.z=.04*Math.sin(t),Ir.position.x=Qe.position.x,Ir.position.z=Qe.position.z,Os=gn.damp(Os,1,.85,e),Nr.scale.y=Os,Nr.rotation.z=Math.sin(t*.9)*.009,Ee.brew>0&&(Ee.brew=Math.max(0,Ee.brew-e),Ee.brew===0&&(Cn("чай готов. живём."),Vt(),qi(440))),Qa.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=Ee.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),ou.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),yf.update(dt.watching()),tl.update(e,t),Wr.update(e,t),Dn.update(e,t),ai.update(e,t),bi.update(e),ci.update(e),Si.update(e),ki.update(e),hn.visible=!(Kt==="bench"&&Ee.selected==="bench"&&!Ae("#inspector").classList.contains("collapsed")&&!jt),Bi.update(e),Mi.update(wo),yn.update(e,t),Jn.update(e,t),Wl!==Ee.dockPending&&(Wl=Ee.dockPending,nl.dock.classList.toggle("waiting",Wl)),iu.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+Ee.energy*.23}),xf.rotation.y=t*.003,Ee.running&&t-Wh>3.5&&(Wh=t,qi([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),$x.update(!jt&&Oe.zoom>=.4&&Ee.markers,ss.width,ss.height),jt||n>Mf)Hl.classList.contains("visible")&&Hl.classList.remove("visible");else{ur.copy(Qe.position),ur.y+=1.52,ur.project(Oe);const s=Math.round(Math.max(85,Math.min(ss.width-85,(ur.x+1)*ss.width*.5))*10)/10,r=Math.round((1-ur.y)*ss.height*.5*10)/10;(s!==Bh||r!==kh)&&(Bh=s,kh=r,Hl.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}as&&performance.now()>as&&(ht.shadowMap.needsUpdate=!0,as=0),ht.render(Mn,Oe)}Ee.running&&(Ae("#object-action").innerHTML="остановить двор <span>↗</span>");Vt();ht.setAnimationLoop(ty);requestAnimationFrame(()=>Ae("#loading").classList.add("done"));window.__yard={state:Ee,select:Xi,inspect:()=>({resident:dt.inspect(),territory:zs.inspect(),sleepBody:yf.inspect(),sleepDream:tl.inspect(),quietDream:Wr.inspect(),meterDream:ai.inspect(),meterDreamScreen:ai.inspect().landmarks.map(n=>_n(new D(...n))),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>_n(new D(...n))),roofDreamLetterScreen:_n(new D(...Dn.inspect().letter)),dreamId:jt?Ct:null,quotes:bi.inspect(),quoteScreens:bi.inspect().quotePositions.map(n=>_n(new D(...n).add(new D(24,-1.05,24)))),dash:ci.inspect(),dashSnailScreen:_n(new D(...ci.inspect().snail).add(new D(0,-1,-24))),dashBeamScreen:_n(new D(...ci.inspect().beam).add(new D(0,-1.5,-24))),drydock:Si.inspect(),drydockShipScreen:_n(new D(...Si.inspect().ship).add(new D(-24,-.5,0))),bench:ki.inspect(),benchScreen:_n(new D(-2.65,1.58,-3.18)),benchBucketScreen:_n(new D(-4.75,1.51,-3.63)),roofVisible:hn.visible,amnesty:Bi.inspect(),amnestyScreen:_n(new D(0,-.3,24)),cellar:Mi.inspect(),cellarScreen:_n(new D(24,-.3,.25)),objects:Object.keys(Bn),greenhouse:yn.inspect(),dock:Jn.inspect(),boatScreen:_n(new D(...Jn.inspect().boat).add(new D(0,.2,0))),drawCalls:ht.info.render.calls,triangles:ht.info.render.triangles,gpuGeometries:ht.info.memory.geometries,zoom:Oe.zoom,target:Je.target.toArray(),angle:dn.angle,head:Qe.position.toArray(),roof:hn.position.toArray(),roofOpen:qs(),roofMode:Ee.roof===null?"auto":"manual",pendulums:Vr.map(n=>n.group.rotation.x),growth:Os,meshes:(()=>{let n=0;return Mn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ht.domElement.width,ht.domElement.height]})};Hx();
