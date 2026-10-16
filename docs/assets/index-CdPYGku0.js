(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Wf(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function Cu(n){const e=n.state||{},t=(l,u,d,h)=>Number.isFinite(l)?Math.max(u,Math.min(d,Math.floor(l))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=l=>l&&typeof l=="object"?{seq:t(l.seq,1,999999,1),range:t(l.range,1,18,3),apex:Number.isFinite(l.apex)?Math.max(.5,Math.min(9,l.apex)):.5,end:Number.isFinite(l.end)?Math.max(0,Math.min(18,l.end)):0,outcome:["landed","short","far","bumped"].includes(l.outcome)?l.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const l=n.args||{};if(n.tool==="launch"&&l.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&l.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(l.power)||l.power<1||l.power>6||!Number.isInteger(l.angle)||l.angle<1||l.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=l.power,r.angle=l.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&l.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],d=r.power*(4-r.angle),h=r.power*r.angle/2,f=u.gap/2/d,g=f<=1?4*h*f*(1-f):0,v=f<=1&&g<u.barrier?"bumped":d<u.gap?"short":d>u.gap?"far":"landed";r.flight={seq:r.seq,range:d,apex:h,end:v==="bumped"?u.gap/2:d,outcome:v},r.phase=v,v==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:v==="landed",outcome:v,range:d,apex:h,clearance:g,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],c={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:c[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function Xf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var G,I,K;const g=s([-24,-1.5,-24],e);g.name="pneumatic-garage-range";const v=i("#eee0b7"),m=i("#29464b"),p=i("#d87b4d"),M=i("#94b9a0"),E=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,g),r([0,.24,0],[20,.1,5],m,g);for(let C=-9;C<10;C++)r([C,.31,2],[.55,.03,.06],v,g);const x=s([-8,.45,0],g);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],E,x),r([-.07,.47,0],[.58,.27,.54],v,x);for(const C of[-.35,.35])for(const q of[-.35,.35])o([C,.04,q],[.16,.16,.1],m,x);const S=s([-8,.37,0],g);S.name="flying-garage";for(const C of[-.9,.9])r([C,.74,0],[.12,1.5,1.6],M,S);r([0,.74,-.75],[1.8,1.5,.12],M,S),r([0,1.35,.76],[1.7,.27,.12],v,S);for(const C of[-1,1]){const q=r([C*.49,1.69,0],[1.16,.13,1.95],p,S);q.rotation.z=C*-.32}l("Г",[0,1.4,.86],.42,.29,S,{size:70});const b=[];for(const C of[-.74,.74])for(const q of[-.59,.59])a([C,-.04,q],.15,.23,t.metal,S),b.push(r([C,-.32,q],[.12,.5,.12],v,S));const w=s([0,.35,0],g);r([0,0,0],[2.5,.12,2.2],v,w),r([0,.07,0],[1.95,.035,1.65],M,w),l("ПОСАДКА",[0,.24,1.18],2.2,.3,w,{size:50});const _=s([0,.34,0],g),R=r([0,.5,0],[.32,1,2.1],p,_);for(const C of[-1.2,1.2])c([0,0,C],[0,3.4,C],.04,t.metal,_);const A=l("ПРОБКА",[0,.7,1.3],1.5,.3,_,{size:50}),D=s([0,.33,0],g);r([0,0,0],[1.6,.12,2],t.copper,D);for(let C=0;C<5;C++)r([0,.1+C*.12,0],[1.1,.04,1.4],v,D);const k=s([-8,.6,3.4],g);a([0,.65,0],.4,1.3,t.copper,k),c([0,1.3,0],[0,1.8,0],.07,m,k),c([-.5,1.8,0],[.5,1.8,0],.07,m,k);const X=Array.from({length:6},(C,q)=>r([.7,.14+q*.24,0],[.24,.17,.12],M,k)),F=s([3,.6,3.7],g);r([0,0,0],[3.8,.2,.9],t.copper,F);const V=Array.from({length:3},(C,q)=>{const Q=s([-1.1+q*1.1,.2,0],F);return r([0,.1,0],[.65,.2,.55],m,Q),o([0,.56,0],[.3,.34,.27],v,Q),r([0,.57,.22],[.39,.19,.08],m,Q),Q});l("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,g,{size:55}),l("МАШИНА ДОМА",[-8,.9,2],2.8,.32,g,{size:50});for(let C=0;C<21;C++)r([-24,-1.42,-6-C*.65],[.9,.12,.49],t.cream,e);u(S,b),u(g,[x,S,w,_,D,k,F]);let Y=null,H=((K=(I=(G=window.__beznogimState)==null?void 0:G.mechanics)==null?void 0:I.garage)==null?void 0:K.public)||null,$,W="",J="",Z=null,te=1,he="";try{Y=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function _e(C,q,Q={}){const O=Cu({mode:C,tool:q,args:Q,state:Y});Y=O.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(Y))}catch{}return O}_e("migrate");const ye=document.createElement("div");ye.id="garage-controls",ye.hidden=!0,ye.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(C=>`<option>${C}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(C=>`<option>${C}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(ye);const ne=()=>H&&h()?H:Cu({mode:"migrate",state:Y}).public,z=()=>H&&h()?"resident":"sandbox";function ee(C,q){var O;if(te<1)return;f();const Q=_e("action",C,q);return he=((O=Q.result)==null?void 0:O.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",P(0),d(),Q}ye.querySelector("#garage-pump").onclick=()=>ee("pump",{power:Number(ye.querySelector("#garage-power").value),angle:Number(ye.querySelector("#garage-angle").value)}),ye.querySelector("#garage-reset").onclick=()=>ee("launch",{mode:"restart"});function ue(){if(!$)return;const C=$;ye.querySelector("#garage-readout").textContent=`испытание ${C.level}/3 · пролёт ${C.gap} · пробка ${C.barrier}
воздух ${C.air}/6 · дальность ${C.range} · вершина ${C.apex}
посадки ${C.landed}/3 · попытки ${C.attempts}`,ye.querySelector("#garage-notice").textContent=he;for(const q of ye.querySelectorAll("select,#garage-pump"))q.disabled=te<1||["landed","complete"].includes(C.phase);ye.querySelector("#garage-reset").disabled=te<1}function oe(C){const q=!$||J!==z()||$.run!==C.run;J=z(),q?(Z=C.flight,te=1,he=""):C.flight&&(!$.flight||$.flight.seq!==C.flight.seq)?(Z=C.flight,te=0):C.flight||(Z=null,te=1),$=C,ye.querySelector("#garage-power").value=C.power,ye.querySelector("#garage-angle").value=C.angle,w.position.x=-8+C.gap*.7,_.position.x=-8+C.gap*.35,R.scale.y=C.barrier*.5,R.position.y=C.barrier*.25,A.position.y=C.barrier*.5+.4,V.forEach((Q,O)=>Q.visible=O<C.landed),X.forEach((Q,O)=>Q.visible=O<C.air),ue()}function P(C){C=Math.min(.1,Math.max(0,C));const q=ne(),Q=z()+":"+JSON.stringify(q);Q!==W&&(W=Q,oe(q),d());const O=te;te=Math.min(1,te+C/3.6);const{x:re,y:xe}=Wf(Z,te);S.position.set(-8+re*.7,.37+xe*.5,0),S.rotation.z=te<1?Math.sin(te*Math.PI*2)*.045:0,D.visible=!!Z&&["short","far"].includes(Z.outcome),D.position.x=-8+((Z==null?void 0:Z.range)||0)*.7,b.forEach(Se=>Se.visible=te>0&&te<.65),O<1&&te===1&&(ue(),d())}const L=()=>({action:z()==="resident"?"попробовать свой гараж":te<1?"гараж в воздухе…":$.phase==="complete"?"новая серия ↺":$.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(z()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+$.message,disabled:te<1});return window.addEventListener("beznogim:state",({detail:C})=>{var Q,O;const q=(O=(Q=C.mechanics)==null?void 0:Q.garage)==null?void 0:O.public;q&&(H=q)}),oe(ne()),W=z()+":"+JSON.stringify(ne()),P(0),{house:g,controls:ye,update:P,card:L,run:()=>ee("launch",{mode:$.phase==="complete"?"restart":$.phase==="landed"?"next":"jump"}),inspect:()=>({source:z(),...$,progress:te,notice:he,garage:S.position.toArray(),car:x.position.toArray(),trophies:V.map(C=>C.visible)})}}const fr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function ul(n){const e=n.state||{},t=(u,d,h,f)=>Number.isFinite(u)?Math.max(d,Math.min(h,Math.floor(u))):f,i=t(e.planted,0,3,0),s=Math.min(2,i),r=fr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let c=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",c={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")c={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:fr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),c={ok:!0};else if(n.tool==="hint")c=qf(a);else if(!["slide","plant"].includes(n.tool))c={ok:!1,reason:"unknown_tool"};else if(a.planted===3)c={ok:!1,reason:"complete"};else if(n.tool==="slide"){const d={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(d,u.direction))c={ok:!1,reason:"invalid_arguments"};else{const[h,f]=d[u.direction],g=a.positions[u.piece];let v=g%5,m=Math.floor(g/5);for(;v+h>=0&&v+h<5&&m+f>=0&&m+f<5&&!r.rocks.includes((m+f)*5+v+h)&&(m+f)*5+v+h!==a.positions[1-u.piece];)v+=h,m+=f;const p=m*5+v;a.positions[u.piece]=p,p!==g?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",c={ok:p!==g,from:g,to:p,reason:p===g?"blocked":"slid"}}}else a.positions.some((d,h)=>d!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",c={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=fr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",c={ok:!0,trees:a.planted*2})}const l=fr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:l.rocks,goals:l.goals,size:5},result:c,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function qf(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=fr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((c,l)=>c===e.goals[l]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let c=0;c<2;c++)for(const[l,[u,d]]of Object.entries(s)){let h=o[c]%5,f=Math.floor(o[c]/5);for(;h+u>=0&&h+u<5&&f+d>=0&&f+d<5&&!e.rocks.includes((f+d)*5+h+u)&&(f+d)*5+h+u!==o[1-c];)h+=u,f+=d;const g=o.slice();g[c]=f*5+h;const v=g.join(",");i.has(v)||(i.add(v),t.push([g,[...a,{piece:c,direction:l}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function Yf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var P,L,G;const g=s([24,-1.5,24],e);g.name="quote-nursery";const v=i("#94c1c0",{roughness:.34}),m=i("#274644"),p=i("#f2e3b9"),M=i("#dfaf57"),E=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,g),r([0,.17,1.5],[7.25,.14,7.25],m,g);const S=I=>[(I%5-2)*1.35,.46,(Math.floor(I/5)-2)*1.35+1.5],b=[];for(let I=0;I<25;I++){const[K,,C]=S(I);b.push(r([K,.27,C],[1.27,.12,1.27],v,g))}const w=Array.from({length:6},()=>{const I=s([0,0,0],g);return r([0,.24,0],[1.05,.42,1.05],t.concrete,I),r([0,.49,0],[.9,.08,.9],t.metal,I),I}),_=[1,3].map((I,K)=>{const C=S(I),q=s([C[0],.4,C[2]],g);return r([0,-.02,0],[1.23,.07,1.23],K?E:M,q),r([0,.025,0],[1.03,.04,1.03],p,q),l(K?"»":"«",[0,.14,.38],.72,.55,q,{size:105}),q});function R(I){const K=s(S(I?24:20),g);for(let C=0;C<2;C++){const q=(C-.5)*.34,Q=I?-1:1;c([q+Q*.22,.92,0],[q-Q*.16,.5,0],.065,I?E:M,K),c([q-Q*.16,.5,0],[q+Q*.22,.08,0],.065,I?E:M,K)}return r([0,-.07,0],[.98,.09,.5],t.metal,K),K}const A=[R(0),R(1)],D=A.map(I=>r([0,-.13,0],[1.1,.04,.67],p,I));for(const I of[-3.9,0,3.9])r([I,.75,-2.05],[.18,1.25,.18],t.copper,g),r([I,1.39,-2.05],[.32,.12,.32],p,g);for(const I of[-2.8,2.8])r([I,.8,-2.05],[1.85,.14,.14],t.copper,g);const k=Array.from({length:6},(I,K)=>{const C=s([-3.5+K%3*3.5,.3,-3.5-Math.floor(K/3)*1.9],g);a([0,.45,0],.12,.9,t.copper,C);for(let q=0;q<3;q++){const Q=new n.Mesh(new n.ConeGeometry(.87-q*.17,1.3,5),x);Q.position.y=.95+q*.56,Q.castShadow=!0,C.add(Q)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,C),C});l("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,g,{size:44}),l("СЕВЕР",[0,1.52,-2.05],1.45,.33,g,{size:60});for(let I=0;I<23;I++)r([24,-1.42,6.6+I*.54],[1,.13,.43],t.cream,e);u(g,[...w,...A,..._,...k]);let X=null,F=((G=(L=(P=window.__beznogimState)==null?void 0:P.mechanics)==null?void 0:L.quotes)==null?void 0:G.public)||null,V,Y="",H="",$=0,W="",J=0,Z=Array(6).fill(0),te=[null,null];try{X=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function he(I,K,C={}){const q=ul({mode:I,tool:K,args:C,state:X});X=q.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(X))}catch{}return q}he("migrate");const _e=document.createElement("div");_e.id="quotes-controls",_e.hidden=!0,_e.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(_e);const ye=()=>F&&h()?F:ul({mode:"migrate",state:X}).public;function ne(I,K={}){if(J>0)return;f(),W="";const C=he("action",I,K);return Y="",ue(0),d(),C}for(const I of _e.querySelectorAll("[data-quote]"))I.onclick=()=>{$=Number(I.dataset.quote),W="",z()};for(const I of _e.querySelectorAll("[data-slide]"))I.onclick=()=>ne("slide",{piece:$,direction:I.dataset.slide});_e.querySelector("#quotes-pair").onclick=()=>ne("restart",{scope:"pair"}),_e.querySelector("#quotes-hint").onclick=()=>{const I=ul({mode:"action",tool:"hint",state:ye()}).result;W=I.status==="route"?`${I.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[I.next.direction]} · осталось ходов: ${I.remaining}`:I.status==="aligned"?"Обе на месте. Выпускай.":I.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",z()};function z(){if(V){_e.querySelector("#quotes-readout").textContent=`пара ${V.level}/3 · ели ${V.trees}/6 · ходы ${V.moves}`,_e.querySelector("#quotes-hint-text").textContent=W;for(const I of _e.querySelectorAll("[data-quote]"))I.setAttribute("aria-pressed",Number(I.dataset.quote)===$);for(const I of _e.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))I.disabled=J>0||V.phase==="complete";D.forEach((I,K)=>I.visible=K===$&&V.phase!=="complete")}}function ee(I){const K=F&&h()?"resident":"sandbox",C=V,q=!C||C.run!==I.run||K!==H;H=K,q?(A.forEach((Q,O)=>Q.position.set(...S(I.positions[O]))),Z=k.map((Q,O)=>O<I.trees?1:0),te=[null,null],J=0):I.planted>C.planted?(J=1.4,te=A.map((Q,O)=>({from:Q.position.clone(),to:k[(I.planted-1)*2+O].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):I.planted!==C.planted&&(Z=k.map((Q,O)=>O<I.trees?1:0)),V=I,w.forEach((Q,O)=>{if(Q.visible=O<I.rocks.length,Q.visible){const re=S(I.rocks[O]);Q.position.set(re[0],.3,re[2])}}),z()}function ue(I){I=Math.min(.1,Math.max(0,I));const K=ye(),C=(F&&h()?"resident:":"sandbox:")+JSON.stringify(K);C!==Y&&(Y=C,ee(K),d());const q=J>0;J=Math.max(0,J-I);for(let Q=0;Q<2;Q++){const O=A[Q],re=te[Q];if(re&&J>0)re.t=Math.min(1,re.t+I/1.4),O.position.lerpVectors(re.from,re.to,re.t*re.t*(3-2*re.t)),O.position.y+=Math.sin(re.t*Math.PI)*.9,O.scale.setScalar(1-re.t*.8);else{te[Q]=null,O.scale.setScalar(1);const xe=S(K.positions[Q]);O.position.x=n.MathUtils.damp(O.position.x,xe[0],12,I),O.position.y=.46,O.position.z=n.MathUtils.damp(O.position.z,xe[2],12,I)}O.visible=!!te[Q]||K.phase!=="complete"}k.forEach((Q,O)=>{const re=O<K.trees?1:0;Z[O]=n.MathUtils.damp(Z[O],re,J>0?1:5,I),Q.visible=Z[O]>.003,Q.scale.setScalar(Math.max(.001,Z[O]))}),q&&J===0&&(z(),d())}const oe=()=>({action:F&&h()?"попробовать свои ёлочки":V.phase==="complete"?"новый питомник ↺":J>0?"пролезают…":"выпустить пару",description:(F&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+V.message,disabled:J>0});return window.addEventListener("beznogim:state",({detail:I})=>{var C,q;const K=(q=(C=I.mechanics)==null?void 0:C.quotes)==null?void 0:q.public;K&&(F=K)}),ee(ye()),Y=(F&&h()?"resident:":"sandbox:")+JSON.stringify(ye()),ue(0),{house:g,controls:_e,update:ue,card:oe,run:()=>ne(V.phase==="complete"?"restart":"plant",V.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:F&&h()?"resident":"sandbox",...V,busy:J,selected:$,hint:W,quotePositions:A.map(I=>I.position.toArray()),treeScales:Z.slice(),visibleTrees:k.filter(I=>I.visible).length})}}function Pu(n){const e=n.state||{},t=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function $f({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var ee,ue,oe;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const v=i("#28464d"),m=i("#eee4c9"),p=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],p,g);const M=s([0,0,0],g),E=s([0,0,0],g);for(const[P,L]of[[M,"ОТ"],[E,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,P),r([0,1.32,0],[2.12,.12,3.3],m,P),l(L,[0,.9,1.66],1,.36,P,{size:60});const x=s([0,1.43,0],g),S=s([0,0,0],x),b=s([0,0,0],x),w=r([-.5,0,0],[1,.15,.56],v,S),_=r([.5,0,0],[1,.15,.56],v,b),R=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),A=s([0,1.47,0],g);A.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,A),o([-.08,.46,0],[.39,.42,.29],t.copper,A),c([-.08,.47,.3],.23,.033,m,A,[0,0,0]),c([-.08,.47,.315],.12,.03,m,A,[0,0,0]);for(const P of[-.13,.13])a([.4,.17,P],[.62,.46,P],.02,t.leaf,A),o([.62,.46,P],[.055,.065,.055],v,A);r([-.16,.92,0],[.46,.32,.065],m,A),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,A),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,A);const D=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,D);const k=[".","?","!"].map((P,L)=>{const G=s([-1.1+L*1.1,.42,0],D);return r([0,0,0],[.8,.65,.11],m,G),l(P,[0,.02,.075],.55,.5,G,{size:100}),G});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const X=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,X);for(let P=-4;P<=4;P++)r([P,.07,0],[.035,.025,.26],v,X),l(String(P),[P,.08,.32],.4,.28,X,{size:45});for(let P=0;P<16;P++)r([1.5,-.1-P*.09,-5.9-P*.72],[1.05,.14,.65],t.cream,e);for(let P=0;P<8;P++)r([1.5,-1.45,-17.6-P*.5],[1.05,.14,.45],t.cream,e);const F=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,F),r([0,2.7,0],[.8,.14,.8],t.metal,F),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),F),u(A,[]),u(M,[]),u(E,[]),u(g,[M,E,x,...R,A,D]);let V=null,Y=((oe=(ue=(ee=window.__beznogimState)==null?void 0:ee.mechanics)==null?void 0:ue.dash)==null?void 0:oe.public)||null,H,$="",W=1,J=0;try{V=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function Z(P,L,G={}){const I=Pu({mode:P,tool:L,args:G,state:V});V=I.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(V))}catch{}return I}Z("migrate");const te=document.createElement("div");te.id="dash-controls",te.hidden=!0,te.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(P,L)=>`<option value="${L+1}">${L+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(P=>`<option value="${P}">${P>0?"+":""}${P}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(te);const he=()=>Y&&h()?Y:Pu({mode:"migrate",state:V}).public;function _e(P,L){f(),Z("action",P,L),$="",ne(0),d()}te.querySelector("#dash-tune").onclick=()=>_e("tune",{span:Number(te.querySelector("#dash-span").value),shift:Number(te.querySelector("#dash-shift").value)}),te.querySelector("#dash-reset").onclick=()=>_e("reset");function ye(P){const L=["delivered","complete"].includes(P.phase);L?!H||H.run!==P.run||H.round!==P.round?W=1:["delivered","complete"].includes(H.phase)||(W=0):W=0,H=P,te.querySelector("#dash-readout").textContent=`почта ${P.delivered}/3 · пролёт ${P.gap} · центр ${P.center>0?"+":""}${P.center} · попытки ${P.attempts}`,te.querySelector("#dash-span").value=P.span,te.querySelector("#dash-shift").value=P.shift;for(const G of te.querySelectorAll("select,#dash-tune"))G.disabled=L;M.position.x=P.center-P.gap/2-1,E.position.x=P.center+P.gap/2+1,R[0].position.x=P.center-P.gap/2,R[1].position.x=P.center+P.gap/2,x.position.x=P.shift,w.scale.x=_.scale.x=P.span/2,w.position.x=-P.span/4,_.position.x=P.span/4,k.forEach((G,I)=>G.visible=I<P.delivered)}function ne(P){const L=he(),G=JSON.stringify(L);G!==$&&($=G,ye(L),d()),W=["delivered","complete"].includes(L.phase)?Math.min(1,W+P/4):0,J=n.MathUtils.damp(J,L.phase==="bent"?.22:0,6,P),S.rotation.z=J,b.rotation.z=-J,x.position.y=1.43-Math.sin(J)*L.span/2,A.position.x=M.position.x+(E.position.x-M.position.x)*(W*W*(3-2*W)),A.position.y=1.47,A.rotation.z=W>0&&W<1?Math.sin(W*30)*.025:0}const z=()=>{const P=H||he();return{action:Y&&h()?"попробовать свою почту":P.phase==="complete"?"новая почта ↺":P.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(Y&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+P.message}};return window.addEventListener("beznogim:state",({detail:P})=>{var G,I;const L=(I=(G=P.mechanics)==null?void 0:G.dash)==null?void 0:I.public;L&&(Y=L)}),ye(he()),$=JSON.stringify(he()),A.position.x=W===1?E.position.x:M.position.x,{house:g,controls:te,update:ne,card:z,run:()=>{if(W>0&&W<1)return;const P=he().phase;_e(P==="complete"?"reset":P==="delivered"?"next":"cross")},inspect:()=>({source:Y&&h()?"resident":"sandbox",...H,walk:W,bend:J,snail:A.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:E.position.x,stamps:k.map(P=>P.visible)})}}function Lu(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Zf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:f,localPlay:g}){var ue,oe,P;const v=s([-24,-1.5,0],e);v.name="sandbox-drydock";const m=i("#d0b987"),p=i("#556f7f"),M=i("#a65d42"),E=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,v),r([0,.2,0],[15.7,.12,9.7],t.dark,v),r([.5,.38,0],[12.6,.26,3.9],t.dark,v);for(const L of[-2,2])r([.5,.96,L],[12.9,1.1,.22],t.copper,v);for(const L of[-6,7])r([L,.96,0],[.22,1.1,4.1],t.copper,v);const x=Array.from({length:3},(L,G)=>r([-4+G*2,.98,0],[1.9,1,3.7],m,v)),S=r([.5,.54,0],[12.6,.04,3.75],E,v);S.castShadow=!1;const b=Array.from({length:3},(L,G)=>{const I=s([-4+G*2,.35,3.05],v);for(let K=0;K<5;K++)o([(K-2)*.27,.16+K%2*.1,0],[.32,.22,.4],m,I);return I}),w=s([-2,1.3,0],v);w.name="sandbox-cargo-ship";const _=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([L,G],I)=>I?_.lineTo(L,-G):_.moveTo(L,-G)),_.closePath();const R=new n.ExtrudeGeometry(_,{depth:.67,bevelEnabled:!1});R.rotateX(-Math.PI/2);const A=new n.Mesh(R,p);A.castShadow=!0,A.receiveShadow=!0,w.add(A),r([-.45,.7,0],[4.9,.09,1.4],t.cream,w);for(let L=0;L<3;L++){r([-.95+L*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][L],w);for(const G of[-.601,.601])for(let I=0;I<4;I++)r([-.95+L*.92-.3+I*.2,1.03,G],[.024,.5,.025],t.dark,w)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,w),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,w);for(const L of[-.63,.63])r([-2.25,1.6,L],[.73,.16,.03],t.dark,w);a([-2.45,1.98,0],.15,.43,M,w),a([-2.45,2.21,0],.15,.05,t.dark,w),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,w),r([2.55,1.7,0],[.48,.26,.03],t.cream,w);for(const L of[-2.9,2.1])for(const G of[-.7,.7])c([L,.7,G],[L,1,G],.025,t.cream,w);for(const L of[-.7,.7])c([-2.9,1,L],[2.1,1,L],.025,t.cream,w);const D=s([5.9,1.1,3.4],v);l([0,0,0],.4,.04,t.copper,D,[0,0,0]);for(let L=0;L<4;L++){const G=L*Math.PI/2;c([0,0,0],[.4*Math.cos(G),.4*Math.sin(G),0],.025,t.copper,D)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,v),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,v);const k=r([5.9,.8,1.75],[.19,.55,.19],E,v);k.castShadow=!1;const X=s([0,.29,0],v);for(const L of[-2.9,2.9])r([.5,0,L],[13,.02,1.1],E,X);for(let L=0;L<3;L++)u(["КОРМА","ТРЮМ","НОС"][L],[-4+L*2,.7,2.15],1.55,.28,v,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,v,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,v,{size:42});for(const L of[-6.6,6.6])c([L,.3,-3.8],[L,3.6,-3.8],.08,t.metal,v),r([L,3.6,-3.5],[.55,.16,.8],t.metal,v),r([L,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),v);for(let L=0;L<15;L++)r([-7.2-L*.72,-.03-L*.09,1.2],[.65,.14,1.12],t.cream,e);const F=s([-6.5,.5,3.3],v);c([0,0,0],[0,1.5,0],.045,t.copper,F),r([0,.1,0],[.32,.35,.08],t.metal,F),l([0,1.53,0],.1,.025,t.metal,F,[0,0,0]),d(w,[]),d(v,[...x,...b,S,w,D,k,X]);let V=null,Y=((P=(oe=(ue=window.__beznogimState)==null?void 0:ue.mechanics)==null?void 0:oe.drydock)==null?void 0:P.public)||null,H,$="",W=0,J=0,Z=0;try{V=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function te(L,G,I={}){const K=Lu({mode:L,tool:G,args:I,state:V});V=K.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(V))}catch{}return K}te("migrate");const he=document.createElement("div");he.id="drydock-controls",he.hidden=!0,he.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(he);function _e(){return Y&&f()?Y:Lu({mode:"migrate",state:V}).public}function ye(L,G){g(),te("action",L,G),$="",ee(0),h()}he.querySelectorAll("[data-dig]").forEach(L=>L.onclick=()=>ye("dig",{channel:Number(L.dataset.dig)})),he.querySelector("#drydock-fill").onclick=()=>ye("pump",{direction:"fill"}),he.querySelector("#drydock-drain").onclick=()=>ye("pump",{direction:"drain"}),he.querySelector("#drydock-reset").onclick=()=>ye("reset");function ne(L){H?(H.water!==L.water&&(W=2),H.floods!==L.floods&&(J=3),!H.launched&&L.launched&&(Z=0)):Z=L.launched?1:0,H=L,he.querySelector("#drydock-readout").textContent=`каналы ${L.depths.join(" / ")} · вода ${L.water}/2 · переливы ${L.floods}`,he.querySelectorAll("[data-dig]").forEach(G=>{G.disabled=L.launched||L.water>0||L.depths[Number(G.dataset.dig)]===2}),he.querySelector("#drydock-fill").disabled=L.launched,he.querySelector("#drydock-drain").disabled=L.launched||L.water===0,x.forEach((G,I)=>{const K=1-L.depths[I]*.4;G.scale.y=K,G.position.y=.48+K/2,b[I].scale.setScalar(.45+L.depths[I]*.4)}),S.visible=L.water>0,S.position.y=.49+L.water*.39}function z(){const L=H||_e();return{action:Y&&f()?"попробовать свой спуск":L.launched?"корабль в песок ↺":"спустить корабль",description:(Y&&f()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+L.message}}function ee(L){const G=_e(),I=JSON.stringify(G);I!==$&&($=I,ne(G),h()),W=Math.max(0,W-L),J=Math.max(0,J-L),k.visible=W>0&&G.water>0,X.visible=J>0,D.rotation.z+=W>0?L*3:0,Z=G.launched?Math.min(1,Z+L/5):0;const K=Z*Z*(3-2*Z);w.position.x=-2+K*5.6;const C=Math.min(...G.depths),q=G.afloat?.94:1.15-C*.32;w.position.y=n.MathUtils.damp(w.position.y,q,4,L),w.rotation.z=n.MathUtils.damp(w.rotation.z,G.afloat?0:(G.depths[2]-G.depths[0])*.085,4,L)}return window.addEventListener("beznogim:state",({detail:L})=>{var I,K;const G=(K=(I=L.mechanics)==null?void 0:I.drydock)==null?void 0:K.public;G&&(Y=G,$="")}),ne(_e()),w.position.x=_e().launched?3.6:-2,{house:v,controls:he,update:ee,card:z,run:()=>ye(_e().launched?"reset":"launch"),inspect:()=>({source:Y&&f()?"resident":"sandbox",...H,ship:w.position.toArray(),pitch:w.rotation.z,waterY:S.position.y,voyage:Z,sandHeights:x.map(L=>L.scale.y),floodVisible:X.visible})}}function Iu(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Jf({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,changed:d,watching:h,localPlay:f}){var he,_e,ye;const g=s([0,0,0],e);g.name="mechanical-bench";const v=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],v,g),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const p=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let ne=0;ne<7;ne++)for(let z=0;z<9;z++)M.push(r([.55+(z-4)*.145,1.5+(3-ne)*.14,-.683],[.13,.12,.02],m,g));const E=s([-1.05,1.24,-.38],g);E.name="core-gear",a([0,0,0],.3,.11,t.copper,E).rotation.x=Math.PI/2;const x=[];for(let ne=0;ne<12;ne++){const z=ne/12*Math.PI*2;let ee=r([Math.cos(z)*.33,Math.sin(z)*.33,0],[.13,.13,.12],t.copper,E);ee.rotation.z=z,x.push(ee)}l([0,0,.06],.13,.025,t.dark,E,[0,0,0]);const S=s([-.4,1.12,-.38],g);l([0,0,0],.19,.035,t.dark,S,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,S);const b=s([0,0,0],g);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,b),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,b);const w=s([-1.5,1,-.05],g);c([0,0,0],[.23,0,0],.04,t.metal,w),c([.23,0,0],[.23,.23,0],.04,t.copper,w),o([.23,.23,0],.08,t.rust,w);const _=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,_),a([0,.281,0],.29,.015,t.dark,_),l([0,.29,0],.33,.025,t.copper,_),l([0,.36,0],.33,.025,t.metal,_,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const R=Array.from({length:3},(ne,z)=>o([.17+z*.3,2.23,-.82],.06,t.mint,g));let A=null,D=((ye=(_e=(he=window.__beznogimState)==null?void 0:he.mechanics)==null?void 0:_e.bench)==null?void 0:ye.public)||null,k,X="",F=0;try{A=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function V(ne,z,ee={}){const ue=Iu({mode:ne,tool:z,args:ee,state:A});A=ue.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(A))}catch{}return ue}V("migrate");const Y=document.createElement("div");Y.id="bench-controls",Y.hidden=!0,Y.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(Y);function H(){return D&&h()?D:Iu({mode:"migrate",state:A}).public}function $(ne,z){f(),V("action",ne,z),X="",te(0),d()}Y.querySelectorAll("[data-part]").forEach(ne=>ne.onclick=()=>$("fit",{part:ne.dataset.part,value:Number(ne.dataset.value)})),Y.querySelector("#bench-salvage").onclick=()=>$("salvage"),Y.querySelector("#bench-restart").onclick=()=>$("restart");function W(ne){k&&k.attempts!==ne.attempts&&(F=3),k=ne,Y.querySelector("#bench-readout").textContent=`экран ${ne.round+1}/3 · скорость ${ne.speed} / нужно ${ne.target}`,Y.querySelectorAll("[data-part]").forEach(z=>{z.setAttribute("aria-pressed",String(ne[z.dataset.part]===Number(z.dataset.value))),z.disabled=ne.phase!=="ready"}),Y.querySelector("#bench-salvage").disabled=!ne.bucket,v.color.set(ne.picture?"#16362c":"#e9e4cc"),v.emissive.set(ne.picture?"#20382b":"#e9e4cc"),v.emissiveIntensity=ne.picture?.1:.6,M.forEach((z,ee)=>z.visible=!!ne.picture&&p[ne.picture-1][ee]==="1"),x.forEach((z,ee)=>z.visible=ee<ne.core*3),S.scale.setScalar(.75+ne.belt*.25),b.visible=!ne.bucket,R.forEach((z,ee)=>z.visible=ee<ne.repairs)}const J={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function Z(){const ne=k||H();return{action:D&&h()?"собрать свой монитор":ne.phase==="ejected"?"достать ядро":ne.phase==="repaired"?ne.round===2?"закончить работу":"следующий экран":ne.phase==="complete"?"ещё раз":"крутить рукоятку",description:(D&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+J[ne.phase]}}function te(ne){const z=H(),ee=JSON.stringify(z);ee!==X&&(X=ee,W(z),d()),F=Math.max(0,F-ne);const ue=Math.min(1,ne*7),oe=z.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];E.position.lerp(new n.Vector3(...oe),ue),E.rotation.x=n.MathUtils.lerp(E.rotation.x,z.bucket?-Math.PI/2:0,ue);const P=F>0?z.core*2:z.picture?.4:0;E.rotation.z+=ne*P,S.rotation.z-=ne*P*z.belt,w.rotation.z+=ne*P}return window.addEventListener("beznogim:state",({detail:ne})=>{var ee,ue;const z=(ue=(ee=ne.mechanics)==null?void 0:ee.bench)==null?void 0:ue.public;z&&(D=z,X="")}),W(H()),E.position.set(...H().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:Y,update:te,card:Z,run:()=>{const ne=H();$(ne.phase==="ejected"?"salvage":ne.phase==="repaired"?"next":ne.phase==="complete"?"restart":"crank")},inspect:()=>({source:D&&h()?"resident":"sandbox",...k,corePosition:E.position.toArray(),coreAngle:E.rotation.z,driveAngle:S.rotation.z,litPixels:M.filter(ne=>ne.visible).length})}}const Du=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function Nu(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Uu(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):Nu();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,Nu(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const u=Du[e.round],d=u.weights.reduce((h,f,g)=>h+(e.loaded[g]?f+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,d!==u.target?(e.status=d<u.target?"under":"over",i={ok:!1,reason:e.status,total:d,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,f)=>{e.loaded[f]&&e.delivered.push({id:`${e.run}:${e.round}:${f}`,weight:h})}),i={ok:!0,total:d,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Du[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,u)=>c+(e.loaded[u]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Kf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:f,localPlay:g}){var z,ee,ue;const v=s([0,-1.5,24]);v.name="amnesty-bureau";const m=i("#9d8560"),p=i("#a1b56f"),M=i("#f1d29a"),E=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],E,v),r([3.65,-.14,0],[3.3,.5,7],E,v),r([0,-.8,0],[4.2,.1,6.7],t.dark,v);for(const oe of[-4.9,4.9])c([oe,0,-3],[oe,3.3,-3],.06,t.copper,v);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,v,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,v,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,v);const x=s([0,.2,1.15],v);for(let oe=0;oe<11;oe++)r([-2+oe*.4,0,0],[.38,.16,1.65],m,x);for(const oe of[-.72,.72])c([-2.2,.22,oe],[2.2,.22,oe],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,v);const S=s([-2.55,.32,1.15],v);r([0,.12,0],[1.5,.18,1.35],t.metal,S);for(const oe of[-.52,.52])for(const P of[-.58,.58]){const L=l([oe,0,P],.17,.05,t.dark,S,[0,0,0]);L.rotation.y=Math.PI/2}const b=s([-4.7,.8,1.4],v);c([0,-.5,0],[0,.2,0],.1,t.metal,b);const w=s([0,0,0],b);c([0,0,0],[0,.8,0],.065,t.copper,w),o([0,.8,0],.14,t.rust,w),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,v,{size:35});const _=s([.1,.1,-2.3],v);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const R=a([0,.7,0],.57,1.1,t.copper,_);l([0,1.28,0],.25,.045,t.dark,_);const A=Array.from({length:3},(oe,P)=>o([1.75+P*.34,2.15,-3.05],.095,t.mint,v)),D=Array.from({length:3},(oe,P)=>{const L=s([-3.6,.72,-2.1+P*1.08],v),G=o([0,0,0],[.28,.23,.57],p,L);G.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,L);const I=s([.45,.28,0],L);return r([0,0,0],[.29,.57,.4],M,I),r([0,0,.21],[.18,.045,.012],t.rust,I),{g:L,tax:I}});u("A",[-4.35,.75,-2.1],.28,.28,v),u("B",[-4.35,.75,-1.02],.28,.28,v),u("C",[-4.35,.75,.06],.28,.28,v),r([3.55,.8,-1.7],[2.75,.13,2.2],m,v);const k=Array.from({length:6},(oe,P)=>o([2.75+P%3*.7,1,-2.1+Math.floor(P/3)*.83],[.2,.19,.38],p,v));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,v,{size:39});const X=s([0,0,0],e);for(let oe=0;oe<15;oe++){const P=oe/14;r([-.6+Math.sin(P*Math.PI)*1.5,-1.55,17+oe*.3],[.9,.12,.65],E,X)}for(let oe=0;oe<5;oe++)r([-.8-oe*.6,-1.55,21.5],[.75,.12,.75],E,X);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,X,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,X),d(X,[]),d(v,[x,S,b,_,...D.map(oe=>oe.g),...k,...A]),d(x,[]),d(S,[]);let F=null,V=((ue=(ee=(z=window.__beznogimState)==null?void 0:z.mechanics)==null?void 0:ee.amnesty)==null?void 0:ue.public)||null,Y,H="",$=0;try{F=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function W(oe,P,L={}){const G=Uu({state:F,mode:oe,tool:P,args:L});F=G.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(F))}catch{}return G}W("migrate");const J=document.createElement("div");J.id="amnesty-controls",J.hidden=!0,J.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(J);function Z(){return V&&f()?V:Uu({state:F,mode:"migrate"}).public}function te(oe,P){g(),W("action",oe,P),H="",ne(0),h()}for(const oe of J.querySelectorAll("[data-load]"))oe.onclick=()=>te("load",{index:Number(oe.dataset.load)});J.querySelector("#amnesty-pardon").onclick=()=>te("amnesty"),J.querySelector("#amnesty-restart").onclick=()=>te("restart");const he={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function _e(oe){Y=oe;const P=oe.status==="delivered"||oe.status==="complete";J.querySelector("#amnesty-readout").textContent=`рейс ${oe.round+1}/3 · груз ${oe.total} / нужно ${oe.target}`,J.querySelectorAll("[data-load]").forEach((L,G)=>{L.textContent=`${["A","B","C"][G]} · ${oe.weights[G]}${oe.debt[G]?` + ${oe.debt[G]} бумага`:""}`,L.setAttribute("aria-pressed",String(oe.loaded[G])),L.disabled=P}),J.querySelector("#amnesty-pardon").disabled=oe.pardoned||P,J.querySelector("#amnesty-pardon").textContent=oe.pardoned?"налог отменён":"отменить налог",R.scale.y=oe.target/4,A.forEach((L,G)=>L.visible=G<(oe.status==="complete"?3:oe.round)),k.forEach((L,G)=>L.visible=G<oe.delivered.length),D.forEach((L,G)=>{L.tax.visible=!oe.pardoned||$<.99,L.g.visible=!P||!oe.loaded[G],L.g.scale.setScalar(.8+oe.weights[G]*.08)})}function ye(){const oe=Y||Z();return{action:V&&f()?"войти в свою амнистию":oe.status==="delivered"?"следующий рейс":oe.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(V&&f()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+he[oe.status]}}function ne(oe,P){const L=Z(),G=JSON.stringify(L);G!==H&&(H=G,_e(L),h());const I=L.status==="delivered"||L.status==="complete",K=(C,q)=>n.MathUtils.lerp(C,q,Math.min(1,oe*5));x.rotation.z=K(x.rotation.z,L.tilt),S.position.x=K(S.position.x,I?3:-2.55),w.rotation.z=K(w.rotation.z,L.pardoned?-.65:0),$=K($,L.pardoned?1:0),D.forEach(C=>{C.tax.position.y=.28+$*2.5,C.tax.rotation.z=$*.8,C.tax.visible=!L.pardoned||$<.99}),k.forEach((C,q)=>C.visible=q<L.delivered.length-(I&&S.position.x<2.9?2:0)),D.forEach((C,q)=>{const Q=L.loaded[q];C.g.visible=!I||!Q||S.position.x<2.9,C.g.position.x=K(C.g.position.x,Q?S.position.x+(q-1)*.42:-3.6),C.g.position.y=K(C.g.position.y,Q?.86:.72),C.g.position.z=K(C.g.position.z,Q?1.15:-2.1+q*1.08)})}return window.addEventListener("beznogim:state",({detail:oe})=>{var L,G;const P=(G=(L=oe.mechanics)==null?void 0:L.amnesty)==null?void 0:G.public;P&&(V=P,H="")}),$=Z().pardoned?1:0,_e(Z()),{house:v,controls:J,update:ne,card:ye,run:()=>te(Y.status==="delivered"?"next":Y.status==="complete"?"restart":"dispatch"),inspect:()=>({source:V&&f()?"resident":"sandbox",...Y,bridgeTilt:x.rotation.z,cartX:S.position.x,cargoPositions:D.map(oe=>oe.g.position.toArray()),taxVisible:D.map(oe=>oe.tax.visible),paperY:D.map(oe=>oe.tax.position.y),handleAngle:w.rotation.z,deliveredVisible:k.filter(oe=>oe.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="186",Mi={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,$l=1,Jh=2,Fs=1,Kh=2,Ns=3,Xi=0,pn=1,Ln=2,ci=0,zs=1,Zl=2,Jl=3,Kl=4,Qh=5,rs=100,jh=101,ed=102,td=103,nd=104,id=200,sd=201,rd=202,od=203,_c=204,vc=205,ad=206,ld=207,cd=208,ud=209,hd=210,dd=211,fd=212,pd=213,md=214,Oo=0,Fo=1,zo=2,Vs=3,Bo=4,ko=5,Go=6,Vo=7,xc=0,gd=1,_d=2,$n=0,yc=1,Mc=2,Sc=3,Pa=4,bc=5,Ec=6,wc=7,Tc=300,qi=301,us=302,Co=303,Po=304,zr=306,Tr=1e3,oi=1001,Ho=1002,Jt=1003,vd=1004,pr=1005,jt=1006,Lo=1007,Bi=1008,xn=1009,Ac=1010,Rc=1011,Hs=1012,La=1013,Kn=1014,Nn=1015,Qn=1016,Ia=1017,Da=1018,Ws=1020,Cc=35902,Pc=35899,Lc=1021,Ic=1022,Un=1023,di=1026,ki=1027,Na=1028,Ua=1029,Yi=1030,Oa=1031,Fa=1033,vr=33776,xr=33777,yr=33778,Mr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,$o=36196,Zo=37492,Jo=37496,Ko=37488,Qo=37489,Ar=37490,jo=37491,ea=37808,ta=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,ua=37818,ha=37819,da=37820,fa=37821,pa=36492,ma=36494,ga=36495,_a=36283,va=36284,Rr=36285,xa=36286,xd=3200,ya=0,yd=1,vi="",an="srgb",Cr="srgb-linear",Pr="linear",St="srgb",Io=7680,Md=519,Sd=512,bd=513,Ed=514,za=515,wd=516,Td=517,Ba=518,Ad=519,Rd=35044,Ql="300 es",Yn=2e3,Xs=2001;function Qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cd(){const n=Ma("canvas");return n.style.display="block",n}const Ou={};function jl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Pd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=Pd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function dt(...n){n=Pd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ls(...n){const e=n.join(" ");e in Ou||(Ou[e]=!0,je(...n))}function jf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ep={[Oo]:Fo,[zo]:Go,[Bo]:Vo,[Vs]:ko,[Fo]:Oo,[Go]:zo,[Vo]:Bo,[ko]:Vs};class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const Sr=Math.PI/180,Lr=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Dc(n,e){return(n%e+e)%e}function tp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function np(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function ip(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function sp(n,e=1){return e-Math.abs(Dc(n,e*2)-e)}function rp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function op(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ap(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lp(n,e){return n+Math.random()*(e-n)}function cp(n){return n*(.5-Math.random())}function up(n){n!==void 0&&(Fu=n);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(n){return n*Sr}function dp(n){return n*Lr}function fp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function pp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vn={DEG2RAD:Sr,RAD2DEG:Lr,generateUUID:ds,clamp:rt,euclideanModulo:Dc,mapLinear:tp,inverseLerp:np,lerp:br,damp:ip,pingpong:sp,smoothstep:rp,smootherstep:op,randInt:ap,randFloat:lp,randFloatSpread:cp,seededRandom:up,degToRad:hp,radToDeg:dp,isPowerOfTwo:fp,ceilPowerOfTwo:pp,floorPowerOfTwo:mp,setQuaternionFromProperEuler:gp,normalize:un,denormalize:Ds},pu=class pu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pu.prototype.isVector2=!0;let Ee=pu;class Ti{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+v*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+v*a;const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mu=class mu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mu.prototype.isVector3=!0;let U=mu;const hl=new U,zu=new Ti,gu=class gu{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],E=s[4],x=s[7],S=s[2],b=s[5],w=s[8];return r[0]=o*v+a*M+c*S,r[3]=o*m+a*E+c*b,r[6]=o*p+a*x+c*w,r[1]=l*v+u*M+d*S,r[4]=l*m+u*E+d*b,r[7]=l*p+u*x+d*w,r[2]=h*v+f*M+g*S,r[5]=h*m+f*E+g*b,r[8]=h*p+f*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dl.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gu.prototype.isMatrix3=!0;let tt=gu;const dl=new tt,Bu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _p(){const n={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cr]:{primaries:e,whitePoint:i,transfer:Pr,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const ht=_p();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class Ld{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=Ma("canvas")),xs.width=e.width,xs.height=e.height;const s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vp=0;class ka{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fl(s[o].image)):r.push(fl(s[o]))}else r=fl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function fl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ld.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let xp=0;const pl=new U;class tn extends Ci{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=oi,s=oi,r=jt,o=Bi,a=Un,c=xn,l=tn.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ds(),this.name="",this.source=new ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pl).x}get height(){return this.source.getSize(pl).y}get depth(){return this.source.getSize(pl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Tc;tn.DEFAULT_ANISOTROPY=1;const _u=class _u{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,x=(f+1)/2,S=(p+1)/2,b=(u+h)/4,w=(d+v)/4,_=(g+m)/4;return E>x&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=w/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=w/r,s=_/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(h-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_u.prototype.isVector4=!0;let Nt=_u;class Id extends Ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ka(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Id{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nc extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ra=class Ra{constructor(e,t,i,s,r,o,a,c,l,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,f,g,v,m)}set(e,t,i,s,r,o,a,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ra().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,Mp)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ni.crossVectors(i,bn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ni.crossVectors(i,bn)),Ni.normalize(),Qr.crossVectors(bn,Ni),s[0]=Ni.x,s[4]=Qr.x,s[8]=bn.x,s[1]=Ni.y,s[5]=Qr.y,s[9]=bn.y,s[2]=Ni.z,s[6]=Qr.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],E=i[7],x=i[11],S=i[15],b=s[0],w=s[4],_=s[8],R=s[12],A=s[1],D=s[5],k=s[9],X=s[13],F=s[2],V=s[6],Y=s[10],H=s[14],$=s[3],W=s[7],J=s[11],Z=s[15];return r[0]=o*b+a*A+c*F+l*$,r[4]=o*w+a*D+c*V+l*W,r[8]=o*_+a*k+c*Y+l*J,r[12]=o*R+a*X+c*H+l*Z,r[1]=u*b+d*A+h*F+f*$,r[5]=u*w+d*D+h*V+f*W,r[9]=u*_+d*k+h*Y+f*J,r[13]=u*R+d*X+h*H+f*Z,r[2]=g*b+v*A+m*F+p*$,r[6]=g*w+v*D+m*V+p*W,r[10]=g*_+v*k+m*Y+p*J,r[14]=g*R+v*X+m*H+p*Z,r[3]=M*b+E*A+x*F+S*$,r[7]=M*w+E*D+x*V+S*W,r[11]=M*_+E*k+x*Y+S*J,r[15]=M*R+E*X+x*H+S*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*f-l*h,E=a*f-l*d,x=a*h-c*d,S=o*f-l*u,b=o*h-c*u,w=o*d-a*u;return t*(v*M-m*E+p*x)-i*(g*M-m*S+p*b)+s*(g*E-v*S+p*w)-r*(g*x-v*b+m*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*a-i*o,E=t*c-s*o,x=t*l-r*o,S=i*c-s*a,b=i*l-r*a,w=s*l-r*c,_=u*v-d*g,R=u*m-h*g,A=u*p-f*g,D=d*m-h*v,k=d*p-f*v,X=h*p-f*m,F=M*X-E*k+x*D+S*A-b*R+w*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return e[0]=(a*X-c*k+l*D)*V,e[1]=(s*k-i*X-r*D)*V,e[2]=(v*w-m*b+p*S)*V,e[3]=(h*b-d*w-f*S)*V,e[4]=(c*A-o*X-l*R)*V,e[5]=(t*X-s*A+r*R)*V,e[6]=(m*x-g*w-p*E)*V,e[7]=(u*w-h*x+f*E)*V,e[8]=(o*k-a*A+l*_)*V,e[9]=(i*A-t*k-r*_)*V,e[10]=(g*b-v*x+p*M)*V,e[11]=(d*x-u*b-f*M)*V,e[12]=(a*R-o*D-c*_)*V,e[13]=(t*D-i*R+s*_)*V,e[14]=(v*E-g*S-m*M)*V,e[15]=(u*S-d*E+h*M)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,v=o*u,m=o*d,p=a*d,M=c*l,E=c*u,x=c*d,S=i.x,b=i.y,w=i.z;return s[0]=(1-(v+p))*S,s[1]=(f+x)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(h+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+E)*w,s[9]=(m-M)*w,s[10]=(1-(h+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ys.set(s[0],s[1],s[2]).length();const a=ys.set(s[4],s[5],s[6]).length(),c=ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const l=1/o,u=1/a,d=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Yn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===Yn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ra.prototype.isMatrix4=!0;let mt=Ra;const ys=new U,Vn=new mt,yp=new U(0,0,0),Mp=new U(1,1,1),Ni=new U,Qr=new U,bn=new U,Gu=new mt,Vu=new Ti;class Ai{constructor(e=0,t=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Ga{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const Hu=new U,Ms=new Ti,fi=new mt,jr=new U,nr=new U,bp=new U,Ep=new Ti,Wu=new U(1,0,0),Xu=new U(0,1,0),qu=new U(0,0,1),Yu={type:"added"},wp={type:"removed"},Ss={type:"childadded",child:null},ml={type:"childremoved",child:null};class Bt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new U,t=new Ai,i=new Ti,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new tt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(nr,jr,this.up):fi.lookAt(jr,nr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(fi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gi extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tp={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},eo={h:0,s:0,l:0};function gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=Dc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=gl(o,r,e+1/3),this.g=gl(o,r,e),this.b=gl(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=Nd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return ht.workingToColorSpace(on.copy(this),e),Math.round(rt(on.r*255,0,255))*65536+Math.round(rt(on.g*255,0,255))*256+Math.round(rt(on.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(on.copy(this),t);const i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=an){ht.workingToColorSpace(on.copy(this),e);const t=on.r,i=on.g,s=on.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(eo);const i=br(Ui.h,eo.h,t),s=br(Ui.s,eo.s,t),r=br(Ui.l,eo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ot;ot.NAMES=Nd;class Va{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new Va(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ud extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new U,pi=new U,_l=new U,mi=new U,bs=new U,Es=new U,$u=new U,vl=new U,xl=new U,yl=new U,Ml=new Nt,Sl=new Nt,bl=new Nt;class In{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),pi.subVectors(i,t),_l.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(pi),c=Hn.dot(_l),l=pi.dot(pi),u=pi.dot(_l),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ml.setScalar(0),Sl.setScalar(0),bl.setScalar(0),Ml.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ml,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),pi.subVectors(e,t),Hn.cross(pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),Es.subVectors(r,i),vl.subVectors(e,i);const c=bs.dot(vl),l=Es.dot(vl);if(c<=0&&l<=0)return t.copy(i);xl.subVectors(e,s);const u=bs.dot(xl),d=Es.dot(xl);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(bs,o);yl.subVectors(e,r);const f=bs.dot(yl),g=Es.dot(yl);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Es,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return $u.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector($u,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(bs,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),no.subVectors(this.max,ir),ws.subVectors(e.a,ir),Ts.subVectors(e.b,ir),As.subVectors(e.c,ir),Oi.subVectors(Ts,ws),Fi.subVectors(As,Ts),ji.subVectors(ws,As);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ji.z,ji.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ji.z,0,-ji.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ji.y,ji.x,0];return!El(t,ws,Ts,As,no)||(t=[1,0,0,0,1,0,0,0,1],!El(t,ws,Ts,As,no))?!1:(io.crossVectors(Oi,Fi),t=[io.x,io.y,io.z],El(t,ws,Ts,As,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new U,new U,new U,new U,new U,new U,new U,new U],Wn=new U,to=new Zi,ws=new U,Ts=new U,As=new U,Oi=new U,Fi=new U,ji=new U,ir=new U,no=new U,io=new U,es=new U;function El(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=i.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vt=new U,so=new Ee;let Ap=0;class Fn extends Ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rd,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Uc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Oc extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rp=new Zi,sr=new U,wl=new U;class Ji{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(wl)),this.expandByPoint(sr.copy(e.center).sub(wl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cp=0;const Rn=new mt,Tl=new Bt,Rs=new U,En=new Zi,rr=new Zi,$t=new U;class kt extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?Oc:Uc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(En.min,rr.min),En.expandByPoint($t),$t.addVectors(En.max,rr.max),En.expandByPoint($t)):(En.expandByPoint(rr.min),En.expandByPoint(rr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)$t.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(e,l),$t.add(Rs)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new U,c[_]=new U;const l=new U,u=new U,d=new U,h=new Ee,f=new Ee,g=new Ee,v=new U,m=new U;function p(_,R,A){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,A),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,A),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[_].add(v),a[R].add(v),a[A].add(v),c[_].add(m),c[R].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,R=M.length;_<R;++_){const A=M[_],D=A.start,k=A.count;for(let X=D,F=D+k;X<F;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const E=new U,x=new U,S=new U,b=new U;function w(_){S.fromBufferAttribute(s,_),b.copy(S);const R=a[_];E.copy(R),E.sub(S.multiplyScalar(S.dot(R))).normalize(),x.crossVectors(b,R);const D=x.dot(c[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,D)}for(let _=0,R=M.length;_<R;++_){const A=M[_],D=A.start,k=A.count;for(let X=D,F=D+k;X<F;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Fn(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new U,Pp=new U,Lp=new tt;class ri{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Al.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lp.getNormalMatrix(e),s=this.coplanarPoint(Al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ip=0;class Ki extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=zs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new U,Rl=new U,ro=new U,oo=new U;class Js{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Rl.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),oo.copy(this.origin).sub(Rl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ro),a=oo.dot(this.direction),c=-oo.dot(ro),l=oo.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rl).addScaledVector(ro,h),f}intersectSphere(e,t){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,v=t.y-o.y,m=t.z-o.z,p=i.x-o.x,M=i.y-o.y,E=i.z-o.z,x=Math.abs(c),S=Math.abs(l),b=Math.abs(u);let w,_,R,A,D,k,X,F,V,Y,H,$;if(x>=S&&x>=b?(R=c,k=d,V=g,$=p,c>=0?(w=l,_=u,A=h,D=f,X=v,F=m,Y=M,H=E):(w=u,_=l,A=f,D=h,X=m,F=v,Y=E,H=M)):S>=b?(R=l,k=h,V=v,$=M,l>=0?(w=u,_=c,A=f,D=d,X=m,F=g,Y=E,H=p):(w=c,_=u,A=d,D=f,X=g,F=m,Y=p,H=E)):(R=u,k=f,V=m,$=E,u>=0?(w=c,_=l,A=d,D=h,X=g,F=v,Y=p,H=M):(w=l,_=c,A=h,D=d,X=v,F=g,Y=M,H=p)),R===0)return null;const W=w/R,J=_/R,Z=1/R,te=A-W*k,he=D-J*k,_e=X-W*V,ye=F-J*V,ne=Y-W*$,z=H-J*$,ee=ne*ye-z*_e,ue=te*z-he*ne,oe=_e*he-ye*te;if(s){if(ee<0||ue<0||oe<0)return null}else if((ee<0||ue<0||oe<0)&&(ee>0||ue>0||oe>0))return null;const P=ee+ue+oe;if(P===0)return null;const L=Z*(ee*k+ue*V+oe*$);return(P>0?L<0:L>0)?null:this.at(L/P,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Br extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zu=new mt,ts=new Js,ao=new Ji,Ju=new U,lo=new U,co=new U,uo=new U,Cl=new U,ho=new U,Ku=new U,fo=new U;class mn extends Bt{constructor(e=new kt,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Cl.fromBufferAttribute(d,e),o?ho.addScaledVector(Cl,u):ho.addScaledVector(Cl.sub(t),u))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(ao.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ao,Ju)===null||ts.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Zu.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Zu),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){const b=a.getX(x),w=a.getX(x+1),_=a.getX(x+2);s=po(this,p,e,i,l,u,d,b,w,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=po(this,o,e,i,l,u,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){const b=x,w=x+1,_=x+2;s=po(this,p,e,i,l,u,d,b,w,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const M=m,E=m+1,x=m+2;s=po(this,o,e,i,l,u,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dp(n,e,t,i,s,r,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Xi,a),c===null)return null;fo.copy(a),fo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:n}}function po(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,lo),n.getVertexPosition(c,co),n.getVertexPosition(l,uo);const u=Dp(n,e,t,i,lo,co,uo,Ku);if(u){const d=new U;In.getBarycoord(Ku,lo,co,uo,d),s&&(u.uv=In.getInterpolatedAttribute(s,a,c,l,d,new Ee)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,c,l,d,new Ee)),o&&(u.normal=In.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new U,materialIndex:0};In.getNormal(lo,co,uo,h.normal),u.face=h,u.barycoord=d}return u}class Fc extends tn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Jt,u=Jt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new mt,Qu=new mt,mo=[],ju=new Zi,Np=new mt,or=new mn,ar=new Ji;class tc extends mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),ju.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(ju)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),ar.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Qu.multiplyMatrices(i,Cs),or.matrixWorld=Qu,or.raycast(e,mo);for(let o=0,a=mo.length;o<a;o++){const c=mo[o];c.instanceId=r,c.object=this,t.push(c)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(s*this.count),s,this.count,Na,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ns=new Ji,Up=new Ee(.5,.5),go=new U;class Ha{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],E=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,p-g,S-M).normalize(),s[1].setComponents(l+o,f+u,p+g,S+M).normalize(),s[2].setComponents(l+a,f+d,p+v,S+E).normalize(),s[3].setComponents(l-a,f-d,p-v,S-E).normalize(),i)s[4].setComponents(c,h,m,x).normalize(),s[5].setComponents(l-c,f-h,p-m,S-x).normalize();else if(s[4].setComponents(l-c,f-h,p-m,S-x).normalize(),t===Yn)s[5].setComponents(l+c,f+h,p+m,S+x).normalize();else if(t===Xs)s[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=Up.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zc extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new U,ba=new U,eh=new mt,lr=new Js,_o=new Ji,Pl=new U,th=new U;class Op extends Bt{constructor(e=new kt,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sa.distanceTo(ba);e.setAttribute("lineDistance",new _t(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;eh.copy(s).invert(),lr.copy(e.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),M=u.getX(v+1),E=vo(this,e,lr,c,p,M,v);E&&t.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=vo(this,e,lr,c,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){const p=vo(this,e,lr,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=vo(this,e,lr,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Sa,ba,Pl,th)>i)return;Pl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:th.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Bc extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nh=new mt,nc=new Js,xo=new Ji,yo=new U;class Od extends Bt{constructor(e=new kt,t=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;nh.copy(s).invert(),nc.copy(e.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,v=f;g<v;g++){const m=l.getX(g);yo.fromBufferAttribute(d,m),ih(yo,m,c,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)yo.fromBufferAttribute(d,g),ih(yo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ih(n,e,t,i,s,r,o){const a=nc.distanceSqToPoint(n);if(a<t){const c=new U;nc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kc extends tn{constructor(e=[],t=qi,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends tn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qs extends tn{constructor(e,t,i=Kn,s,r,o,a=Jt,c=Jt,l,u=di,d=1){if(u!==di&&u!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fd extends qs{constructor(e,t=Kn,i=qi,s,r,o=Jt,a=Jt,c,l=di){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vc extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pi extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function g(v,m,p,M,E,x,S,b,w,_,R){const A=x/w,D=S/_,k=x/2,X=S/2,F=b/2,V=w+1,Y=_+1;let H=0,$=0;const W=new U;for(let J=0;J<Y;J++){const Z=J*D-X;for(let te=0;te<V;te++){const he=te*A-k;W[v]=he*M,W[m]=Z*E,W[p]=F,l.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=b>0?1:-1,u.push(W.x,W.y,W.z),d.push(te/w),d.push(1-J/_),H+=1}}for(let J=0;J<_;J++)for(let Z=0;Z<w;Z++){const te=h+Z+V*J,he=h+Z+V*(J+1),_e=h+(Z+1)+V*(J+1),ye=h+(Z+1)+V*J;c.push(te,he,ye),c.push(he,_e,ye),$+=6}a.addGroup(f,$,R),f+=$,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wa extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new U,u=new Ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kr extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=i/2;let p=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function M(){const x=new U,S=new U;let b=0;const w=(t-e)/i;for(let _=0;_<=r;_++){const R=[],A=_/r,D=A*(t-e)+e;for(let k=0;k<=s;k++){const X=k/s,F=X*c+a,V=Math.sin(F),Y=Math.cos(F);S.x=D*V,S.y=-A*i+m,S.z=D*Y,d.push(S.x,S.y,S.z),x.set(V,w,Y).normalize(),h.push(x.x,x.y,x.z),f.push(X,1-A),R.push(g++)}v.push(R)}for(let _=0;_<s;_++)for(let R=0;R<r;R++){const A=v[R][_],D=v[R+1][_],k=v[R+1][_+1],X=v[R][_+1];(e>0||R!==0)&&(u.push(A,D,X),b+=3),(t>0||R!==r-1)&&(u.push(D,k,X),b+=3)}l.addGroup(p,b,0),p+=b}function E(x){const S=g,b=new Ee,w=new U;let _=0;const R=x===!0?e:t,A=x===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*A,0),h.push(0,A,0),f.push(.5,.5),g++;const D=g;for(let k=0;k<=s;k++){const F=k/s*c+a,V=Math.cos(F),Y=Math.sin(F);w.x=R*Y,w.y=m*A,w.z=R*V,d.push(w.x,w.y,w.z),h.push(0,A,0),b.x=V*.5+.5,b.y=Y*.5*A+.5,f.push(b.x,b.y),g++}for(let k=0;k<s;k++){const X=S+k,F=D+k;x===!0?u.push(F,F+1,X):u.push(F+1,F,X),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fs extends kr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new fs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xa extends kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new U,x=new U,S=new U;for(let b=0;b<t.length;b+=3)f(t[b+0],E),f(t[b+1],x),f(t[b+2],S),c(E,x,S,M)}function c(M,E,x,S){const b=S+1,w=[];for(let _=0;_<=b;_++){w[_]=[];const R=M.clone().lerp(x,_/b),A=E.clone().lerp(x,_/b),D=b-_;for(let k=0;k<=D;k++)k===0&&_===b?w[_][k]=R:w[_][k]=R.clone().lerp(A,k/D)}for(let _=0;_<b;_++)for(let R=0;R<2*(b-_)-1;R++){const A=Math.floor(R/2);R%2===0?(h(w[_][A+1]),h(w[_+1][A]),h(w[_][A])):(h(w[_][A+1]),h(w[_+1][A+1]),h(w[_+1][A]))}}function l(M){const E=new U;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(M),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function u(){const M=new U;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(x,1-S)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const E=o[M+0],x=o[M+2],S=o[M+4],b=Math.max(E,x,S),w=Math.min(E,x,S);b>.9&&w<.1&&(E<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,E){const x=M*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){const M=new U,E=new U,x=new U,S=new U,b=new Ee,w=new Ee,_=new Ee;for(let R=0,A=0;R<r.length;R+=9,A+=6){M.set(r[R+0],r[R+1],r[R+2]),E.set(r[R+3],r[R+4],r[R+5]),x.set(r[R+6],r[R+7],r[R+8]),b.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),S.copy(M).add(E).add(x).divideScalar(3);const D=m(S);v(b,A+0,M,D),v(w,A+2,E,D),v(_,A+4,x,D)}}function v(M,E,x,S){S<0&&M.x===1&&(o[E]=M.x-1),x.x===0&&x.z===0&&(o[E]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.vertices,e.indices,e.radius,e.detail)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ee:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,s=[],r=[],o=[],a=new U,c=new mt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qa extends jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zd extends qa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const sh=new U,rh=new U,Ll=new Hc,Il=new Hc,Dl=new Hc;class Wc extends jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(rh.subVectors(s[0],s[1]).add(s[0]),l=rh);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(sh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=sh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ll.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),Il.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),Dl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Il.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Dl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Ll.calc(c),Il.calc(c),Dl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function oh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Fp(n,e){const t=1-n;return t*t*e}function zp(n,e){return 2*(1-n)*n*e}function Bp(n,e){return n*n*e}function Er(n,e,t,i){return Fp(n,e)+zp(n,t)+Bp(n,i)}function kp(n,e){const t=1-n;return t*t*t*e}function Gp(n,e){const t=1-n;return 3*t*t*n*e}function Vp(n,e){return 3*(1-n)*n*n*e}function Hp(n,e){return n*n*n*e}function wr(n,e,t,i,s){return kp(n,e)+Gp(n,t)+Vp(n,i)+Hp(n,s)}class Xc extends jn{constructor(e=new Ee,t=new Ee,i=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Bd extends jn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y),wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qc extends jn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends jn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yc extends jn{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $c extends jn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y),Er(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zc extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(oh(a,c.x,l.x,u.x,d.x),oh(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var Ea=Object.freeze({__proto__:null,ArcCurve:zd,CatmullRomCurve3:Wc,CubicBezierCurve:Xc,CubicBezierCurve3:Bd,EllipseCurve:qa,LineCurve:qc,LineCurve3:kd,QuadraticBezierCurve:Yc,QuadraticBezierCurve3:$c,SplineCurve:Zc});class Gd extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ea[s.type]().fromJSON(s))}return this}}class ic extends Gd{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new qc(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Yc(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Xc(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Zc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new qa(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gr extends ic{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ic().fromJSON(s))}return this}}function Wp(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Vd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Zp(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Ir(r,o,t,a,c,l,0),o}function Vd(n,e,t,i,s){let r;if(s===om(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=ah(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=ah(o/i|0,n[o],n[o+1],r);return r&&Ys(r,r.next)&&(Nr(r),r=r.next),r}function hs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ys(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ir(n,e,t,i,s,r,o){if(!n)return;!o&&r&&em(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?qp(n,i,s,r):Xp(n)){e.push(c.i,n.i,l.i),Nr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Yp(hs(n),e),Ir(n,e,t,i,s,r,2)):o===2&&$p(n,e,t,i,s,r):Ir(hs(n),e,t,i,s,r,1);break}}}function Xp(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&mr(s,a,r,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qp(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ut(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),v=Math.max(a,c,l),m=Math.max(u,d,h),p=sc(f,g,e,t,i),M=sc(v,m,e,t,i);let E=n.prevZ,x=n.nextZ;for(;E&&E.z>=p&&x&&x.z<=M;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&mr(a,u,c,d,l,h,E.x,E.y)&&Ut(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,u,c,d,l,h,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&mr(a,u,c,d,l,h,E.x,E.y)&&Ut(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,u,c,d,l,h,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ys(i,s)&&Wd(i,t,t.next,s)&&Dr(i,s)&&Dr(s,i)&&(e.push(i.i,t.i,s.i),Nr(t),Nr(t.next),t=n=s),t=t.next}while(t!==n);return hs(t)}function $p(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&im(o,a)){let c=Xd(o,a);o=hs(o,o.next),c=hs(c,c.next),Ir(o,e,t,i,s,r,0),Ir(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Zp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Vd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(nm(l))}s.sort(Jp);for(let r=0;r<s.length;r++)t=Kp(s[r],t);return t}function Jp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Kp(n,e){const t=Qp(n,e);if(!t)return e;const i=Xd(t,n);return hs(i,i.next),hs(t,t.next)}function Qp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ys(n,t))return t;do{if(Ys(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Hd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);Dr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&jp(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function jp(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function em(n,e,t,i){let s=n;do s.z===0&&(s.z=sc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tm(s)}function tm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function sc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function mr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Hd(n,e,t,i,s,r,o,a)}function im(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sm(n,e)&&(Dr(n,e)&&Dr(e,n)&&rm(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||Ys(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ys(n,e){return n.x===e.x&&n.y===e.y}function Wd(n,e,t,i){const s=So(Ut(n,e,t)),r=So(Ut(n,e,i)),o=So(Ut(t,i,n)),a=So(Ut(t,i,e));return!!(s!==r&&o!==a||s===0&&Mo(n,t,e)||r===0&&Mo(n,i,e)||o===0&&Mo(t,n,i)||a===0&&Mo(t,e,i))}function Mo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function So(n){return n>0?1:n<0?-1:0}function sm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Dr(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function rm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xd(n,e){const t=rc(n.i,n.x,n.y),i=rc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ah(n,e,t,i){const s=rc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function om(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class am{static triangulate(e,t,i=2){return Wp(e,t,i)}}class as{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return as.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];lh(e),ch(i,e);let o=e.length;t.forEach(lh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ch(i,t[c]);const a=am.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function lh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ch(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ks extends kt{constructor(e=new Gr([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:lm;let E,x=!1,S,b,w,_;if(p){E=p.getSpacedPoints(u),x=!0,h=!1;const I=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,I),b=new U,w=new U,_=new U}h||(m=0,f=0,g=0,v=0);const R=a.extractPoints(l);let A=R.shape;const D=R.holes;if(!as.isClockWise(A)){A=A.reverse();for(let I=0,K=D.length;I<K;I++){const C=D[I];as.isClockWise(C)&&(D[I]=C.reverse())}}function X(I){const C=10000000000000001e-36;let q=I[0];for(let Q=1;Q<=I.length;Q++){const O=Q%I.length,re=I[O],xe=re.x-q.x,Se=re.y-q.y,B=xe*xe+Se*Se,ze=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(q.x),Math.abs(q.y)),Te=C*ze*ze;if(B<=Te){I.splice(O,1),Q--;continue}q=re}}X(A),D.forEach(X);const F=D.length,V=A;for(let I=0;I<F;I++){const K=D[I];A=A.concat(K)}function Y(I,K,C){return K||dt("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(K,C)}const H=A.length;function $(I,K,C){let q,Q,O;const re=I.x-K.x,xe=I.y-K.y,Se=C.x-I.x,B=C.y-I.y,ze=re*re+xe*xe,Te=re*B-xe*Se;if(Math.abs(Te)>Number.EPSILON){const N=Math.sqrt(ze),y=Math.sqrt(Se*Se+B*B),se=K.x-xe/N,ae=K.y+re/N,de=C.x-B/y,be=C.y+Se/y,Re=((de-se)*B-(be-ae)*Se)/(re*B-xe*Se);q=se+re*Re-I.x,Q=ae+xe*Re-I.y;const pe=q*q+Q*Q;if(pe<=2)return new Ee(q,Q);O=Math.sqrt(pe/2)}else{let N=!1;re>Number.EPSILON?Se>Number.EPSILON&&(N=!0):re<-Number.EPSILON?Se<-Number.EPSILON&&(N=!0):Math.sign(xe)===Math.sign(B)&&(N=!0),N?(q=-xe,Q=re,O=Math.sqrt(ze)):(q=re,Q=xe,O=Math.sqrt(ze/2))}return new Ee(q/O,Q/O)}const W=[];for(let I=0,K=V.length,C=K-1,q=I+1;I<K;I++,C++,q++)C===K&&(C=0),q===K&&(q=0),W[I]=$(V[I],V[C],V[q]);const J=[];let Z,te=W.concat();for(let I=0,K=F;I<K;I++){const C=D[I];Z=[];for(let q=0,Q=C.length,O=Q-1,re=q+1;q<Q;q++,O++,re++)O===Q&&(O=0),re===Q&&(re=0),Z[q]=$(C[q],C[O],C[re]);J.push(Z),te=te.concat(Z)}let he;if(m===0)he=as.triangulateShape(V,D);else{const I=[],K=[];for(let C=0;C<m;C++){const q=C/m,Q=f*Math.cos(q*Math.PI/2),O=g*Math.sin(q*Math.PI/2)+v;for(let re=0,xe=V.length;re<xe;re++){const Se=Y(V[re],W[re],O);ue(Se.x,Se.y,-Q),q===0&&I.push(Se)}for(let re=0,xe=F;re<xe;re++){const Se=D[re];Z=J[re];const B=[];for(let ze=0,Te=Se.length;ze<Te;ze++){const N=Y(Se[ze],Z[ze],O);ue(N.x,N.y,-Q),q===0&&B.push(N)}q===0&&K.push(B)}}he=as.triangulateShape(I,K)}const _e=he.length,ye=g+v;for(let I=0;I<H;I++){const K=h?Y(A[I],te[I],ye):A[I];x?(w.copy(S.normals[0]).multiplyScalar(K.x),b.copy(S.binormals[0]).multiplyScalar(K.y),_.copy(E[0]).add(w).add(b),ue(_.x,_.y,_.z)):ue(K.x,K.y,0)}for(let I=1;I<=u;I++)for(let K=0;K<H;K++){const C=h?Y(A[K],te[K],ye):A[K];x?(w.copy(S.normals[I]).multiplyScalar(C.x),b.copy(S.binormals[I]).multiplyScalar(C.y),_.copy(E[I]).add(w).add(b),ue(_.x,_.y,_.z)):ue(C.x,C.y,d/u*I)}for(let I=m-1;I>=0;I--){const K=I/m,C=f*Math.cos(K*Math.PI/2),q=g*Math.sin(K*Math.PI/2)+v;for(let Q=0,O=V.length;Q<O;Q++){const re=Y(V[Q],W[Q],q);ue(re.x,re.y,d+C)}for(let Q=0,O=D.length;Q<O;Q++){const re=D[Q];Z=J[Q];for(let xe=0,Se=re.length;xe<Se;xe++){const B=Y(re[xe],Z[xe],q);x?ue(B.x,B.y+E[u-1].y,E[u-1].x+C):ue(B.x,B.y,d+C)}}}ne(),z();function ne(){const I=s.length/3;if(h){let K=0,C=H*K;for(let q=0;q<_e;q++){const Q=he[q];oe(Q[2]+C,Q[1]+C,Q[0]+C)}K=u+m*2,C=H*K;for(let q=0;q<_e;q++){const Q=he[q];oe(Q[0]+C,Q[1]+C,Q[2]+C)}}else{for(let K=0;K<_e;K++){const C=he[K];oe(C[2],C[1],C[0])}for(let K=0;K<_e;K++){const C=he[K];oe(C[0]+H*u,C[1]+H*u,C[2]+H*u)}}i.addGroup(I,s.length/3-I,0)}function z(){const I=s.length/3;let K=0;ee(V,K),K+=V.length;for(let C=0,q=D.length;C<q;C++){const Q=D[C];ee(Q,K),K+=Q.length}i.addGroup(I,s.length/3-I,1)}function ee(I,K){let C=I.length;for(;--C>=0;){const q=C;let Q=C-1;Q<0&&(Q=I.length-1);for(let O=0,re=u+m*2;O<re;O++){const xe=H*O,Se=H*(O+1),B=K+q+xe,ze=K+Q+xe,Te=K+Q+Se,N=K+q+Se;P(B,ze,Te,N)}}}function ue(I,K,C){c.push(I),c.push(K),c.push(C)}function oe(I,K,C){L(I),L(K),L(C);const q=s.length/3,Q=M.generateTopUV(i,s,q-3,q-2,q-1);G(Q[0]),G(Q[1]),G(Q[2])}function P(I,K,C,q){L(I),L(K),L(q),L(K),L(C),L(q);const Q=s.length/3,O=M.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);G(O[0]),G(O[1]),G(O[3]),G(O[1]),G(O[2]),G(O[3])}function L(I){s.push(c[I*3+0]),s.push(c[I*3+1]),s.push(c[I*3+2])}function G(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return cm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ea[s.type]().fromJSON(s)),new Ks(i,e.options)}}const lm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Ee(r,o),new Ee(a,c),new Ee(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ee(o,1-c),new Ee(l,1-d),new Ee(h,1-g),new Ee(v,1-p)]:[new Ee(a,1-c),new Ee(u,1-d),new Ee(f,1-g),new Ee(m,1-p)]}};function cm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vr extends Xa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vr(e.radius,e.detail)}}class ps extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let E=0;E<l;E++){const x=E*d-r;g.push(x,-M,0),v.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const E=M+l*p,x=M+l*(p+1),S=M+1+l*(p+1),b=M+1+l*p;f.push(E,x,b),f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ya extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new U,h=new U,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const M=[],E=p/i,x=o+E*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S);let w=0;p===0&&o===0?w=.5/t:p===i&&c===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const R=_/t,A=s+R*r;d.x=-b*Math.cos(A),d.y=S,d.z=b*Math.sin(A),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(R+w,1-E),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const E=u[p][M+1],x=u[p][M],S=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&f.push(E,x,b),(p!==i-1||c<Math.PI)&&f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $a extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new U,f=new U,g=new U;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let p=0;p<=s;p++){const M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,E=(s+1)*(v-1)+m,x=(s+1)*v+m;c.push(p,M,x),c.push(M,E,x)}this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Za extends kt{constructor(e=new $c(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new Ee;let u=new U;const d=[],h=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function v(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),p()}function m(E){u=e.getPointAt(E/t,u);const x=o.normals[E],S=o.binormals[E];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,_=Math.sin(w),R=-Math.cos(w);c.x=R*x.x+_*S.x,c.y=R*x.y+_*S.y,c.z=R*x.z+_*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){const S=(s+1)*(E-1)+(x-1),b=(s+1)*E+(x-1),w=(s+1)*E+x,_=(s+1)*(E-1)+x;g.push(S,b,_),g.push(b,w,_)}}function M(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)l.x=E/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Za(new Ea[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function $s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(uh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(uh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=$s(n[t]);for(const s in i)e[s]=i[s]}return e}function uh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function um(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Yd={clone:$s,merge:hn};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $d extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Us extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fm extends zc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Ja extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Kd extends Ja{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Nl=new mt,hh=new U,dh=new U;class Jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Nl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Xs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const bo=new U,Eo=new Ti,ni=new U;class Kc extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,Eo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Eo,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bo,Eo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Eo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new U,fh=new Ee,ph=new Ee;class wn extends Kc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pm extends Jc{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ka extends Ja{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hr extends Kc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mm extends Jc{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qc extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new mm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ps=-90,Ls=1;class Qd extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Ps,Ls,e,t);s.layers=this.layers,this.add(s);const r=new wn(Ps,Ls,e,t);r.layers=this.layers,this.add(r);const o=new wn(Ps,Ls,e,t);o.layers=this.layers,this.add(o);const a=new wn(Ps,Ls,e,t);a.layers=this.layers,this.add(a);const c=new wn(Ps,Ls,e,t);c.layers=this.layers,this.add(c);const l=new wn(Ps,Ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jd extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mh=new mt;class ef{constructor(e,t,i=0,s=1/0){this.ray=new Js(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(e,t=!0,i=[]){return oc(e,this,i,t),i.sort(gh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)oc(e[s],this,i,t);return i.sort(gh),i}}function gh(n,e){return n.distance-e.distance}function oc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)oc(r[o],e,t,!0)}}class ac{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vu=class vu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};vu.prototype.isMatrix2=!0;let lc=vu;class tf extends Ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _h(n,e,t,i){const s=gm(i);switch(t){case Lc:return n*e;case Na:return n*e/s.components*s.byteLength;case Ua:return n*e/s.components*s.byteLength;case Yi:return n*e*2/s.components*s.byteLength;case Oa:return n*e*2/s.components*s.byteLength;case Ic:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Fa:return n*e*4/s.components*s.byteLength;case vr:case xr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yr:case Mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:case Yo:return Math.max(n,16)*Math.max(e,8)/4;case Wo:case qo:return Math.max(n,8)*Math.max(e,8)/2;case $o:case Zo:case Ko:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Ar:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case na:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ia:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ra:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case aa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case la:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ha:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pa:case ma:case ga:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _a:case va:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rr:case xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gm(n){switch(n){case xn:case Ac:return{byteLength:1,components:1};case Hs:case Rc:case Qn:return{byteLength:2,components:1};case Ia:case Da:return{byteLength:2,components:4};case Kn:case La:case Nn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _m(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,_0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:vm,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:Mm,alphatest_fragment:Sm,alphatest_pars_fragment:bm,aomap_fragment:Em,aomap_pars_fragment:wm,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Pm,iridescence_fragment:Lm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Om,color_fragment:Fm,color_pars_fragment:zm,color_pars_vertex:Bm,color_vertex:km,common:Gm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:$m,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Qm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:h0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:v0,lights_fragment_end:x0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphinstance_vertex:L0,morphcolor_vertex:I0,morphnormal_vertex:D0,morphtarget_pars_vertex:N0,morphtarget_vertex:U0,normal_fragment_begin:O0,normal_fragment_maps:F0,normal_pars_fragment:z0,normal_pars_vertex:B0,normal_vertex:k0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:$0,project_vertex:Z0,dithering_fragment:J0,dithering_pars_fragment:K0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:tg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:og,skinnormal_vertex:ag,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:ug,tonemapping_pars_fragment:hg,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:_g,background_vert:vg,background_frag:xg,backgroundCube_vert:yg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:bg,depth_vert:Eg,depth_frag:wg,distance_vert:Tg,distance_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Lg,meshbasic_vert:Ig,meshbasic_frag:Dg,meshlambert_vert:Ng,meshlambert_frag:Ug,meshmatcap_vert:Og,meshmatcap_frag:Fg,meshnormal_vert:zg,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:Gg,meshphysical_vert:Vg,meshphysical_frag:Hg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:$g,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:Kg},De={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},qn={basic:{uniforms:hn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:hn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:hn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:hn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:hn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ot(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:hn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:hn([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:hn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:hn([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:hn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:hn([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:hn([De.common,De.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:hn([De.lights,De.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};qn.physical={uniforms:hn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const wo={r:0,b:0,g:0},Qg=new mt,sf=new tt;sf.set(-1,0,0,0,1,0,0,0,1);function jg(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(M){let E=!1;const x=f(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,E){const x=f(E);x&&(x.isCubeTexture||x.mapping===zr)?(l===void 0&&(l=new mn(new Pi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:$s(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sf),l.material.toneMapped=ht.getTransfer(x.colorSpace)!==St,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new mn(new ps(2,2),new Bn({name:"BackgroundMaterial",uniforms:$s(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ht.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(wo,qd(n)),t.buffers.color.setClear(wo.r,wo.g,wo.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:p}}function e_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,k,X,F,V){let Y=!1;const H=d(D,F,X,k);r!==H&&(r=H,l(r.object)),Y=f(D,F,X,V),Y&&g(D,F,X,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(D,k,X,F),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,k,X,F){const V=F.wireframe===!0;let Y=i[k.id];Y===void 0&&(Y={},i[k.id]=Y);const H=D.isInstancedMesh===!0?D.id:0;let $=Y[H];$===void 0&&($={},Y[H]=$);let W=$[X.id];W===void 0&&(W={},$[X.id]=W);let J=W[V];return J===void 0&&(J=h(c()),W[V]=J),J}function h(D){const k=[],X=[],F=[];for(let V=0;V<t;V++)k[V]=0,X[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:F,object:D,attributes:{},index:null}}function f(D,k,X,F){const V=r.attributes,Y=k.attributes;let H=0;const $=X.getAttributes();for(const W in $)if($[W].location>=0){const Z=V[W];let te=Y[W];if(te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),Z===void 0||Z.attribute!==te||te&&Z.data!==te.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(D,k,X,F){const V={},Y=k.attributes;let H=0;const $=X.getAttributes();for(const W in $)if($[W].location>=0){let Z=Y[W];Z===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const te={};te.attribute=Z,Z&&Z.data&&(te.data=Z.data),V[W]=te,H++}r.attributes=V,r.attributesNum=H,r.index=F}function v(){const D=r.newAttributes;for(let k=0,X=D.length;k<X;k++)D[k]=0}function m(D){p(D,0)}function p(D,k){const X=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;X[D]=1,F[D]===0&&(n.enableVertexAttribArray(D),F[D]=1),V[D]!==k&&(n.vertexAttribDivisor(D,k),V[D]=k)}function M(){const D=r.newAttributes,k=r.enabledAttributes;for(let X=0,F=k.length;X<F;X++)k[X]!==D[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function E(D,k,X,F,V,Y,H){H===!0?n.vertexAttribIPointer(D,k,X,V,Y):n.vertexAttribPointer(D,k,X,F,V,Y)}function x(D,k,X,F){v();const V=F.attributes,Y=X.getAttributes(),H=k.defaultAttributeValues;for(const $ in Y){const W=Y[$];if(W.location>=0){let J=V[$];if(J===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const Z=J.normalized,te=J.itemSize,he=e.get(J);if(he===void 0)continue;const _e=he.buffer,ye=he.type,ne=he.bytesPerElement,z=ye===n.INT||ye===n.UNSIGNED_INT||J.gpuType===La;if(J.isInterleavedBufferAttribute){const ee=J.data,ue=ee.stride,oe=J.offset;if(ee.isInstancedInterleavedBuffer){for(let P=0;P<W.locationSize;P++)p(W.location+P,ee.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let P=0;P<W.locationSize;P++)m(W.location+P);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let P=0;P<W.locationSize;P++)E(W.location+P,te/W.locationSize,ye,Z,ue*ne,(oe+te/W.locationSize*P)*ne,z)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,J.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let ee=0;ee<W.locationSize;ee++)E(W.location+ee,te/W.locationSize,ye,Z,te*ne,te/W.locationSize*ee*ne,z)}}else if(H!==void 0){const Z=H[$];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(W.location,Z);break;case 3:n.vertexAttrib3fv(W.location,Z);break;case 4:n.vertexAttrib4fv(W.location,Z);break;default:n.vertexAttrib1fv(W.location,Z)}}}}M()}function S(){R();for(const D in i){const k=i[D];for(const X in k){const F=k[X];for(const V in F){const Y=F[V];for(const H in Y)u(Y[H].object),delete Y[H];delete F[V]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const k=i[D.id];for(const X in k){const F=k[X];for(const V in F){const Y=F[V];for(const H in Y)u(Y[H].object),delete Y[H];delete F[V]}}delete i[D.id]}function w(D){for(const k in i){const X=i[k];for(const F in X){const V=X[F];if(V[D.id]===void 0)continue;const Y=V[D.id];for(const H in Y)u(Y[H].object),delete Y[H];delete V[D.id]}}}function _(D){for(const k in i){const X=i[k],F=D.isInstancedMesh===!0?D.id:0,V=X[F];if(V!==void 0){for(const Y in V){const H=V[Y];for(const $ in H)u(H[$].object),delete H[$];delete V[Y]}delete X[F],Object.keys(X).length===0&&delete i[k]}}}function R(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function t_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const _=w===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xn&&w!==Nn&&!_&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:b}}function i_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ri,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,E=M*4;let x=p.clippingState||null;c.value=x,x=u(g,h,E,f);for(let S=0;S!==E;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==v;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Os=4,s_=6,r_=20,o_=256,cr=new Hr,vh=new ot;let Ul=null,Ol=0,Fl=0,zl=!1;const a_=new U,is=new U;class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=a_}=r;Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Ol,Fl),this._renderer.xr.enabled=zl,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Qn,format:Un,colorSpace:Cr,depthBuffer:!1},s=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l_(r)),this._blurMaterial=u_(r,e,t),this._ggxMaterial=c_(r,e,t)}return s}_compileMaterial(e){const t=new mn(new kt,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,i,s,r){const c=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(vh),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Pi,new Br({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(vh),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const S=this._cubeSize;Is(s,x*S,E>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qi||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Os?i-g+Os:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Is(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,cr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Is(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,cr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-Os?s-this._lodMax+Os:0),h=4*(this._cubeSize-u);Is(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(c,cr)}}function l_(n){const e=[],t=[];let i=n;const s=n-Os+1+s_;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,E=p>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(x,f*h*p);for(let S=0;S<h;S++){const b=u[S*2]*2-1,w=u[S*2+1]*2-1;p===0?is.set(1,w,b):p===1?is.set(-b,1,-w):p===2?is.set(-b,w,1):p===3?is.set(-1,w,-b):p===4?is.set(-b,-1,w):is.set(b,w,-1),is.toArray(v,(p*h+S)*f)}}const m=new kt;m.setAttribute("position",new Fn(g,f)),m.setAttribute("outputDirection",new Fn(v,f)),t.push(new mn(m,null)),i>Os&&i--}return{lodMeshes:t,sizeLods:e}}function xh(n,e,t){const i=new On(n,e,t);return i.texture.mapping=zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function c_(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function u_(n,e,t){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:r_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function yh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Mh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ci});r.uniforms.tEquirect.value=t;const o=new mn(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=jt),new Qd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function h_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Co||f===Po)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new jc(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Co||f===Po,v=f===qi||f===us;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new cc(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new cc(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Co?h.mapping=qi:f===Po&&(h.mapping=us),h}function c(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function d_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ls("WebGLRenderer: "+i+" extension not supported."),s}}}function f_(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let E=0,x=M.length;E<x;E+=3){const S=M[E+0],b=M[E+1],w=M[E+2];h.push(S,b,b,w,w,S)}}else{const M=g.array;v=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const S=E+0,b=E+1,w=E+2;h.push(S,b,b,w,w,S)}}const m=new(g.count>=65535?Oc:Uc)(h,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function p_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function m_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function g_(n,e,t){const i=new WeakMap,s=new Nt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let A=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var f=A;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*b*4*d),_=new Nc(w,S,b,d);_.type=Nn,_.needsUpdate=!0;const R=x*4;for(let D=0;D<d;D++){const k=p[D],X=M[D],F=E[D],V=S*b*4*D;for(let Y=0;Y<k.count;Y++){const H=Y*R;g===!0&&(s.fromBufferAttribute(k,Y),w[V+H+0]=s.x,w[V+H+1]=s.y,w[V+H+2]=s.z,w[V+H+3]=0),v===!0&&(s.fromBufferAttribute(X,Y),w[V+H+4]=s.x,w[V+H+5]=s.y,w[V+H+6]=s.z,w[V+H+7]=0),m===!0&&(s.fromBufferAttribute(F,Y),w[V+H+8]=s.x,w[V+H+9]=s.y,w[V+H+10]=s.z,w[V+H+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Ee(S,b)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function __(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const v_={[yc]:"LINEAR_TONE_MAPPING",[Mc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function x_(n,e,t,i,s,r){const o=new On(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new kt;l.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _t([0,2,0,0,2,0],2));const u=new $d({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mn(l,u),h=new Hr(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,M=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),c!==null&&c.setSize(x,S);for(let b=0;b<M.length;b++){const w=M[b];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new On(S,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new On(S,b,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){const _=M[w];_.setSize&&_.setSize(S,b)}},this.begin=function(x,S){if(v||x.toneMapping===$n&&M.length===0)return!1;if(p=S,S!==null){const b=S.width,w=S.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=$n,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,v=!0;let b=o,w=a;for(let _=0;_<M.length;_++){const R=M[_];R.enabled!==!1&&(R.render(x,w,b,S),R.needsSwap!==!1&&(b=w,w=w===a?c:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},ht.getTransfer(f)===St&&(u.defines.SRGB_TRANSFER="");const _=v_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const rf=new tn,uc=new qs(1,1),of=new Nc,af=new Dd,lf=new kc,Sh=[],bh=[],Eh=new Float32Array(16),wh=new Float32Array(9),Th=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Sh[s];if(r===void 0&&(r=new Float32Array(s),Sh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ja(n,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function E_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Th.set(i),n.uniformMatrix2fv(this.addr,!1,Th),Yt(t,i)}}function w_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;wh.set(i),n.uniformMatrix3fv(this.addr,!1,wh),Yt(t,i)}}function T_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Yt(t,i)}}function A_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function L_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function U_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uc.compareFunction=t.isReversedDepthBuffer()?Ba:za,r=uc):r=rf,t.setTexture2D(e||r,s)}function O_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||af,s)}function F_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lf,s)}function z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||of,s)}function B_(n){switch(n){case 5126:return y_;case 35664:return M_;case 35665:return S_;case 35666:return b_;case 35674:return E_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return I_;case 36295:return D_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return z_}}function k_(n,e){n.uniform1fv(this.addr,e)}function G_(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function V_(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function H_(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function W_(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X_(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function q_(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Y_(n,e){n.uniform1iv(this.addr,e)}function $_(n,e){n.uniform2iv(this.addr,e)}function Z_(n,e){n.uniform3iv(this.addr,e)}function J_(n,e){n.uniform4iv(this.addr,e)}function K_(n,e){n.uniform1uiv(this.addr,e)}function Q_(n,e){n.uniform2uiv(this.addr,e)}function j_(n,e){n.uniform3uiv(this.addr,e)}function ev(n,e){n.uniform4uiv(this.addr,e)}function tv(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=uc:o=rf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function nv(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||af,r[o])}function iv(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lf,r[o])}function sv(n,e,t){const i=this.cache,s=e.length,r=ja(t,s);qt(i,r)||(n.uniform1iv(this.addr,r),Yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||of,r[o])}function rv(n){switch(n){case 5126:return k_;case 35664:return G_;case 35665:return V_;case 35666:return H_;case 35674:return W_;case 35675:return X_;case 35676:return q_;case 5124:case 35670:return Y_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return Q_;case 36295:return j_;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}class ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}}class av{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rv(t.type)}}class lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Ah(n,e){n.seq.push(e),n.map[e.id]=e}function cv(n,e,t){const i=n.name,s=i.length;for(Bl.lastIndex=0;;){const r=Bl.exec(i),o=Bl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ah(t,l===void 0?new ov(a,n,e):new av(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new lv(a),Ah(t,d)),t=d}}}class No{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);cv(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Rh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uv=37297;let hv=0;function dv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ch=new tt;function fv(n){ht._getMatrix(Ch,ht.workingColorSpace,n);const e=`mat3( ${Ch.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case Pr:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ph(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dv(n.getShaderSource(e),a)}else return r}function pv(n,e){const t=fv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mv={[yc]:"Linear",[Mc]:"Reinhard",[Sc]:"Cineon",[Pa]:"ACESFilmic",[Ec]:"AgX",[wc]:"Neutral",[bc]:"Custom"};function gv(n,e){const t=mv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const To=new U;function _v(){ht.getLuminanceCoefficients(To);const n=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function xv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gr(n){return n!==""}function Lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(n){return n.replace(Mv,bv)}const Sv=new Map;function bv(n,e){let t=it[e];if(t===void 0){const i=Sv.get(e);if(i!==void 0)t=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hc(t)}const Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(n){return n.replace(Ev,wv)}function wv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Tv={[Fs]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function Av(n){return Tv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rv={[qi]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function Cv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Rv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Pv={[us]:"ENVMAP_MODE_REFRACTION"};function Lv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iv={[xc]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function Dv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Iv[n.combine]||"ENVMAP_BLENDING_NONE"}function Nv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Uv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Av(t),l=Cv(t),u=Lv(t),d=Dv(t),h=Nv(t),f=vv(t),g=xv(r),v=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?it.tonemapping_pars_fragment:"",t.toneMapping!==$n?gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,pv("linearToOutputTexel",t.outputColorSpace),_v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=hc(o),o=Lh(o,t),o=Ih(o,t),a=hc(a),a=Lh(a,t),a=Ih(a,t),o=Dh(o),a=Dh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+o,x=M+p+a,S=Rh(s,s.VERTEX_SHADER,E),b=Rh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(D){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",X=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(b)||"",V=k.trim(),Y=X.trim(),H=F.trim();let $=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,S,b);else{const J=Ph(s,S,"vertex"),Z=Ph(s,b,"fragment");dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+J+`
`+Z)}else V!==""?je("WebGLProgram: Program Info Log:",V):(Y===""||H==="")&&(W=!1);W&&(D.diagnostics={runnable:$,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(b),_=new No(s,v),R=yv(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,uv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}let Ov=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zv(e),t.set(e,i)),i}}class zv{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}}function Bv(n){return n===Yi||n===Ar||n===Rr}function kv(n,e,t,i,s,r){const o=new Ga,a=new Fv,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,R,A,D,k,X){const F=D.fog,V=k.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||Y,H),W=$&&$.mapping===zr?$.image.height:null,J=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Z!==void 0?Z.length:0;let he=0;V.morphAttributes.position!==void 0&&(he=1),V.morphAttributes.normal!==void 0&&(he=2),V.morphAttributes.color!==void 0&&(he=3);let _e,ye,ne,z;if(J){const Ct=qn[J];_e=Ct.vertexShader,ye=Ct.fragmentShader}else{_e=_.vertexShader,ye=_.fragmentShader;const Ct=a.getVertexShaderStage(_),yt=a.getFragmentShaderStage(_);a.update(_,Ct,yt),ne=Ct.id,z=yt.id}const ee=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),oe=k.isInstancedMesh===!0,P=k.isBatchedMesh===!0,L=!!_.map,G=!!_.matcap,I=!!$,K=!!_.aoMap,C=!!_.lightMap,q=!!_.bumpMap&&_.wireframe===!1,Q=!!_.normalMap,O=!!_.displacementMap,re=!!_.emissiveMap,xe=!!_.metalnessMap,Se=!!_.roughnessMap,B=_.anisotropy>0,ze=_.clearcoat>0,Te=_.dispersion>0,N=_.retroreflectivity>0,y=_.iridescence>0,se=_.sheen>0,ae=_.transmission>0,de=B&&!!_.anisotropyMap,be=ze&&!!_.clearcoatMap,Re=ze&&!!_.clearcoatNormalMap,pe=ze&&!!_.clearcoatRoughnessMap,ve=y&&!!_.iridescenceMap,Ce=y&&!!_.iridescenceThicknessMap,Ye=se&&!!_.sheenColorMap,Ne=se&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,$e=!!_.specularColorMap,Ke=!!_.specularIntensityMap,nt=ae&&!!_.transmissionMap,ie=ae&&!!_.thicknessMap,Le=!!_.gradientMap,ge=!!_.alphaMap,Ie=_.alphaTest>0,Be=!!_.alphaHash,Me=!!_.extensions;let Ze=$n;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Xe={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:ye,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:P,batchingColor:P&&k._colorsTexture!==null,instancing:oe,instancingColor:oe&&k.instanceColor!==null,instancingMorph:oe&&k.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:L,matcap:G,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:W,aoMap:K,lightMap:C,bumpMap:q,normalMap:Q,displacementMap:O,emissiveMap:re,normalMapObjectSpace:Q&&_.normalMapType===yd,normalMapTangentSpace:Q&&_.normalMapType===ya,packedNormalMap:Q&&_.normalMapType===ya&&Bv(_.normalMap.format),metalnessMap:xe,roughnessMap:Se,anisotropy:B,anisotropyMap:de,clearcoat:ze,clearcoatMap:be,clearcoatNormalMap:Re,clearcoatRoughnessMap:pe,dispersion:Te,retroreflection:N,iridescence:y,iridescenceMap:ve,iridescenceThicknessMap:Ce,sheen:se,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:$e,specularIntensityMap:Ke,transmission:ae,transmissionMap:nt,thicknessMap:ie,gradientMap:Le,opaque:_.transparent===!1&&_.blending===zs&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Be,combine:_.combine,mapUv:L&&g(_.map.channel),aoMapUv:K&&g(_.aoMap.channel),lightMapUv:C&&g(_.lightMap.channel),bumpMapUv:q&&g(_.bumpMap.channel),normalMapUv:Q&&g(_.normalMap.channel),displacementMapUv:O&&g(_.displacementMap.channel),emissiveMapUv:re&&g(_.emissiveMap.channel),metalnessMapUv:xe&&g(_.metalnessMap.channel),roughnessMapUv:Se&&g(_.roughnessMap.channel),anisotropyMapUv:de&&g(_.anisotropyMap.channel),clearcoatMapUv:be&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Re&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(_.sheenRoughnessMap.channel),specularMapUv:Pe&&g(_.specularMap.channel),specularColorMapUv:$e&&g(_.specularColorMap.channel),specularIntensityMapUv:Ke&&g(_.specularIntensityMap.channel),transmissionMapUv:nt&&g(_.transmissionMap.channel),thicknessMapUv:ie&&g(_.thicknessMap.channel),alphaMapUv:ge&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Q||B),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(L||ge),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Q===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:L&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===St,decodeVideoTextureEmissive:re&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===St,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&_.extensions.multiDraw===!0||P)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)R.push(A),R.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(p(R,_),M(R,_),R.push(n.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function p(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function M(_,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const R=f[_.type];let A;if(R){const D=qn[R];A=Yd.clone(D.uniforms)}else A=_.uniforms;return A}function x(_,R){let A=u.get(R);return A!==void 0?++A.usedTimes:(A=new Uv(n,R,_,s),l.push(A),u.set(R,A)),A}function S(_){if(--_.usedTimes===0){const R=l.indexOf(_);l[R]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function w(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:w}}function Gv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Vv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Uh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,v,m,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=o(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function c(h,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);const E=a(h,f,g,v,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(h,f,g,v,m,p){const M=a(h,f,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||Vv),i.length>1&&i.sort(f||Uh),s.length>1&&s.sort(f||Uh)}function d(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Hv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Oh,n.set(i,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Xv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qv=0;function Yv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $v(n){const e=new Wv,t=Xv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new mt,o=new mt;function a(l){let u=0,d=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,E=0,x=0,S=0,b=0,w=0,_=0,R=0,A=0;l.sort(Yv);for(let k=0,X=l.length;k<X;k++){const F=l[k],V=F.color,Y=F.intensity,H=F.distance;let $=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Yi?$=F.shadow.map.texture:$=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=V.r*Y,d+=V.g*Y,h+=V.b*Y;else if(F.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(F.sh.coefficients[W],Y);A++}else if(F.isSunLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,Z=t.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=$;const te=J.getViewportCount();for(let he=0;he<te;he++)i.sunShadowMatrix[v+he]=J.getMatrix(he),i.sunShadowCascade[v+he]=J._cascadeData[he];v+=te,g++}i.sun[f]=W,f++}else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,Z=t.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=F.shadow.matrix,S++}i.directional[m]=W,m++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(V).multiplyScalar(Y),W.distance=H,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,i.spot[M]=W;const J=F.shadow;if(F.map&&(i.spotLightMap[_]=F.map,_++,J.updateMatrices(F),F.castShadow&&R++),i.spotLightMatrix[M]=J.matrix,F.castShadow){const Z=t.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[M]=Z,i.spotShadowMap[M]=$,w++}M++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(V).multiplyScalar(Y),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),i.rectArea[E]=W,E++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const J=F.shadow,Z=t.get(F);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=F.shadow.matrix,b++}i.point[p]=W,p++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(Y),W.groundColor.copy(F.groundColor).multiplyScalar(Y),i.hemi[x]=W,x++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==_||D.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+_-R,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=_,D.numLightProbes=A,i.version=qv++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){const x=l[M];if(x.isSunLight){const S=i.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function Fh(n){const e=new $v(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Zv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Fh(n),e.set(s,[a])):r>=o.length?(a=new Fh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
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
}`,Qv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],jv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],zh=new mt,ur=new U,kl=new U;function ex(n,e,t){let i=new Ha;const s=new Ee,r=new Ee,o=new Nt,a=new Zd,c=new Jd,l={},u=t.maxTextureSize,d={[Xi]:pn,[pn]:Xi,[Ln]:Ln},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Jv,fragmentShader:Kv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let p=this.type;this.render=function(b,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Kh&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);const R=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ci),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const X=p!==this.type;X&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=b.length;F<V;F++){const Y=b[F],H=Y.shadow;if(H===void 0){je("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const $=H.getFrameExtents();s.multiply($),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,H.mapSize.y=r.y));const W=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ns){if(Y.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new On(s.x,s.y,{format:Yi,type:Qn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new qs(s.x,s.y,Nn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=di,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt}else Y.isPointLight?(H.map=new jc(s.x),H.map.depthTexture=new Fd(s.x,Kn)):(H.map=new On(s.x,s.y),H.map.depthTexture=new qs(s.x,s.y,Kn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=di,this.type===Fs?(H.map.depthTexture.compareFunction=W?Ba:za,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Jt,H.map.depthTexture.magFilter=Jt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,_);for(let Z=0;Z<J;Z++){const te=H.getCamera(Z);if(Y.isPointLight){const he=H.camera,_e=H.matrix,ye=Y.distance||he.far;ye!==he.far&&(he.far=ye,he.updateProjectionMatrix()),ur.setFromMatrixPosition(Y.matrixWorld),he.position.copy(ur),kl.copy(he.position),kl.add(Qv[Z]),he.up.copy(jv[Z]),he.lookAt(kl),he.updateMatrixWorld(),_e.makeTranslation(-ur.x,-ur.y,-ur.z),zh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),H._frustum.setFromProjectionMatrix(zh,he.coordinateSystem,he.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(H.map),n.clear());const he=H.getViewport(Z);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),k.viewport(o)}i=H.getFrustum(Z),x(w,_,te,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Ns&&M(H,_),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,A,D)};function M(b,w){const _=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new On(s.x,s.y,{format:Yi,type:Qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,_,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,_,f,v,null)}function E(b,w,_,R){let A=null;const D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)A=D;else if(A=_.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=A.uuid,X=w.uuid;let F=l[k];F===void 0&&(F={},l[k]=F);let V=F[X];V===void 0&&(V=A.clone(),F[X]=V,w.addEventListener("dispose",S)),A=V}if(A.visible=w.visible,A.wireframe=w.wireframe,R===Ns?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:d[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=n.properties.get(A);k.light=_}return A}function x(b,w,_,R,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Ns)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const X=e.update(b),F=b.material;if(Array.isArray(F)){const V=X.groups;for(let Y=0,H=V.length;Y<H;Y++){const $=V[Y],W=F[$.materialIndex];if(W&&W.visible){const J=E(b,W,R,A);b.onBeforeShadow(n,b,w,_,X,J,$),n.renderBufferDirect(_,null,X,J,b,$),b.onAfterShadow(n,b,w,_,X,J,$)}}}else if(F.visible){const V=E(b,F,R,A);b.onBeforeShadow(n,b,w,_,X,V,null),n.renderBufferDirect(_,null,X,V,b,null),b.onAfterShadow(n,b,w,_,X,V,null)}}const k=b.children;for(let X=0,F=k.length;X<F;X++)x(k[X],w,_,R,A)}function S(b){b.target.removeEventListener("dispose",S);for(const _ in l){const R=l[_],A=b.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function tx(n,e){function t(){let ie=!1;const Le=new Nt;let ge=null;const Ie=new Nt(0,0,0,0);return{setMask:function(Be){ge!==Be&&!ie&&(n.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){ie=Be},setClear:function(Be,Me,Ze,Xe,Ct){Ct===!0&&(Be*=Xe,Me*=Xe,Ze*=Xe),Le.set(Be,Me,Ze,Xe),Ie.equals(Le)===!1&&(n.clearColor(Be,Me,Ze,Xe),Ie.copy(Le))},reset:function(){ie=!1,ge=null,Ie.set(-1,0,0,0)}}}function i(){let ie=!1,Le=!1,ge=null,Ie=null,Be=null;return{setReversed:function(Me){if(Le!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=Be;Be=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?ee(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!ie&&(n.depthMask(Me),ge=Me)},setFunc:function(Me){if(Le&&(Me=ep[Me]),Ie!==Me){switch(Me){case Oo:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case Bo:n.depthFunc(n.EQUAL);break;case ko:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case Vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){ie=Me},setClear:function(Me){Be!==Me&&(Be=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){ie=!1,ge=null,Ie=null,Be=null,Le=!1}}}function s(){let ie=!1,Le=null,ge=null,Ie=null,Be=null,Me=null,Ze=null,Xe=null,Ct=null;return{setTest:function(yt){ie||(yt?ee(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(yt){Le!==yt&&!ie&&(n.stencilMask(yt),Le=yt)},setFunc:function(yt,Gn,ei){(ge!==yt||Ie!==Gn||Be!==ei)&&(n.stencilFunc(yt,Gn,ei),ge=yt,Ie=Gn,Be=ei)},setOp:function(yt,Gn,ei){(Me!==yt||Ze!==Gn||Xe!==ei)&&(n.stencilOp(yt,Gn,ei),Me=yt,Ze=Gn,Xe=ei)},setLocked:function(yt){ie=yt},setClear:function(yt){Ct!==yt&&(n.clearStencil(yt),Ct=yt)},reset:function(){ie=!1,Le=null,ge=null,Ie=null,Be=null,Me=null,Ze=null,Xe=null,Ct=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,E=null,x=null,S=null,b=null,w=null,_=new ot(0,0,0),R=0,A=!1,D=null,k=null,X=null,F=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let J=null,Z={};const te=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),_e=new Nt().fromArray(te),ye=new Nt().fromArray(he);function ne(ie,Le,ge,Ie){const Be=new Uint8Array(4),Me=n.createTexture();n.bindTexture(ie,Me),n.texParameteri(ie,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ie,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ge;Ze++)ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return Me}const z={};z[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Vs),q(!1),Q($l),ee(n.CULL_FACE),K(ci);function ee(ie){u[ie]!==!0&&(n.enable(ie),u[ie]=!0)}function ue(ie){u[ie]!==!1&&(n.disable(ie),u[ie]=!1)}function oe(ie,Le){return h[ie]!==Le?(n.bindFramebuffer(ie,Le),h[ie]=Le,ie===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),ie===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function P(ie,Le){let ge=g,Ie=!1;if(ie){ge=f.get(Le),ge===void 0&&(ge=[],f.set(Le,ge));const Be=ie.textures;if(ge.length!==Be.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ze=Be.length;Me<Ze;Me++)ge[Me]=n.COLOR_ATTACHMENT0+Me;ge.length=Be.length,Ie=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ge)}function L(ie){return v!==ie?(n.useProgram(ie),v=ie,!0):!1}const G={[rs]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[ed]:n.FUNC_REVERSE_SUBTRACT};G[td]=n.MIN,G[nd]=n.MAX;const I={[id]:n.ZERO,[sd]:n.ONE,[rd]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[cd]:n.DST_COLOR,[ad]:n.DST_ALPHA,[od]:n.ONE_MINUS_SRC_COLOR,[vc]:n.ONE_MINUS_SRC_ALPHA,[ud]:n.ONE_MINUS_DST_COLOR,[ld]:n.ONE_MINUS_DST_ALPHA,[dd]:n.CONSTANT_COLOR,[fd]:n.ONE_MINUS_CONSTANT_COLOR,[pd]:n.CONSTANT_ALPHA,[md]:n.ONE_MINUS_CONSTANT_ALPHA};function K(ie,Le,ge,Ie,Be,Me,Ze,Xe,Ct,yt){if(ie===ci){m===!0&&(ue(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),ie!==Qh){if(ie!==p||yt!==A){if((M!==rs||S!==rs)&&(n.blendEquation(n.FUNC_ADD),M=rs,S=rs),yt)switch(ie){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFunc(n.ONE,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:dt("WebGLState: Invalid blending: ",ie);break}else switch(ie){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jl:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",ie);break}E=null,x=null,b=null,w=null,_.set(0,0,0),R=0,p=ie,A=yt}return}Be=Be||Le,Me=Me||ge,Ze=Ze||Ie,(Le!==M||Be!==S)&&(n.blendEquationSeparate(G[Le],G[Be]),M=Le,S=Be),(ge!==E||Ie!==x||Me!==b||Ze!==w)&&(n.blendFuncSeparate(I[ge],I[Ie],I[Me],I[Ze]),E=ge,x=Ie,b=Me,w=Ze),(Xe.equals(_)===!1||Ct!==R)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Ct),_.copy(Xe),R=Ct),p=ie,A=!1}function C(ie,Le){ie.side===Ln?ue(n.CULL_FACE):ee(n.CULL_FACE);let ge=ie.side===pn;Le&&(ge=!ge),q(ge),ie.blending===zs&&ie.transparent===!1?K(ci):K(ie.blending,ie.blendEquation,ie.blendSrc,ie.blendDst,ie.blendEquationAlpha,ie.blendSrcAlpha,ie.blendDstAlpha,ie.blendColor,ie.blendAlpha,ie.premultipliedAlpha),o.setFunc(ie.depthFunc),o.setTest(ie.depthTest),o.setMask(ie.depthWrite),r.setMask(ie.colorWrite);const Ie=ie.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(ie.stencilWriteMask),a.setFunc(ie.stencilFunc,ie.stencilRef,ie.stencilFuncMask),a.setOp(ie.stencilFail,ie.stencilZFail,ie.stencilZPass)),re(ie.polygonOffset,ie.polygonOffsetFactor,ie.polygonOffsetUnits),ie.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(ie){D!==ie&&(ie?n.frontFace(n.CW):n.frontFace(n.CCW),D=ie)}function Q(ie){ie!==Zh?(ee(n.CULL_FACE),ie!==k&&(ie===$l?n.cullFace(n.BACK):ie===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),k=ie}function O(ie){ie!==X&&(H&&n.lineWidth(ie),X=ie)}function re(ie,Le,ge){ie?(ee(n.POLYGON_OFFSET_FILL),(F!==Le||V!==ge)&&(F=Le,V=ge,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ge))):ue(n.POLYGON_OFFSET_FILL)}function xe(ie){ie?ee(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function Se(ie){ie===void 0&&(ie=n.TEXTURE0+Y-1),J!==ie&&(n.activeTexture(ie),J=ie)}function B(ie,Le,ge){ge===void 0&&(J===null?ge=n.TEXTURE0+Y-1:ge=J);let Ie=Z[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},Z[ge]=Ie),(Ie.type!==ie||Ie.texture!==Le)&&(J!==ge&&(n.activeTexture(ge),J=ge),n.bindTexture(ie,Le||z[ie]),Ie.type=ie,Ie.texture=Le)}function ze(){const ie=Z[J];ie!==void 0&&ie.type!==void 0&&(n.bindTexture(ie.type,null),ie.type=void 0,ie.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function y(){try{n.texSubImage2D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function se(){try{n.texSubImage3D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function be(){try{n.texStorage2D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function Re(){try{n.texStorage3D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function pe(){try{n.texImage2D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function ve(){try{n.texImage3D(...arguments)}catch(ie){dt("WebGLState:",ie)}}function Ce(ie){return d[ie]!==void 0?d[ie]:n.getParameter(ie)}function Ye(ie,Le){d[ie]!==Le&&(n.pixelStorei(ie,Le),d[ie]=Le)}function Ne(ie){_e.equals(ie)===!1&&(n.scissor(ie.x,ie.y,ie.z,ie.w),_e.copy(ie))}function Pe(ie){ye.equals(ie)===!1&&(n.viewport(ie.x,ie.y,ie.z,ie.w),ye.copy(ie))}function $e(ie,Le){let ge=l.get(Le);ge===void 0&&(ge=new WeakMap,l.set(Le,ge));let Ie=ge.get(ie);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,ie.name),ge.set(ie,Ie))}function Ke(ie,Le){const Ie=l.get(Le).get(ie);c.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,ie.__bindingPointIndex),c.set(Le,Ie))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,Z={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,E=null,x=null,S=null,b=null,w=null,_=new ot(0,0,0),R=0,A=!1,D=null,k=null,X=null,F=null,V=null,_e.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:ue,bindFramebuffer:oe,drawBuffers:P,useProgram:L,setBlending:K,setMaterial:C,setFlipSided:q,setCullFace:Q,setLineWidth:O,setPolygonOffset:re,setScissorTest:xe,activeTexture:Se,bindTexture:B,unbindTexture:ze,compressedTexImage2D:Te,compressedTexImage3D:N,texImage2D:pe,texImage3D:ve,pixelStorei:Ye,getParameter:Ce,updateUBOMapping:$e,uniformBlockBinding:Ke,texStorage2D:be,texStorage3D:Re,texSubImage2D:y,texSubImage3D:se,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Ne,viewport:Pe,reset:nt}}function nx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,y){return g?new OffscreenCanvas(N,y):Ma("canvas")}function m(N,y,se){let ae=1;const de=Te(N);if((de.width>se||de.height>se)&&(ae=se/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const be=Math.floor(ae*de.width),Re=Math.floor(ae*de.height);h===void 0&&(h=v(be,Re));const pe=y?v(be,Re):h;return pe.width=be,pe.height=Re,pe.getContext("2d").drawImage(N,0,0,be,Re),je("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+be+"x"+Re+")."),pe}else return"data"in N&&je("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function p(N){return N.generateMipmaps}function M(N){n.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(N,y,se,ae,de,be=!1){if(N!==null){if(n[N]!==void 0)return n[N];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Re;ae&&(Re=e.get("EXT_texture_norm16"),Re||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=y;if(y===n.RED&&(se===n.FLOAT&&(pe=n.R32F),se===n.HALF_FLOAT&&(pe=n.R16F),se===n.UNSIGNED_BYTE&&(pe=n.R8),se===n.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),se===n.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),y===n.RED_INTEGER&&(se===n.UNSIGNED_BYTE&&(pe=n.R8UI),se===n.UNSIGNED_SHORT&&(pe=n.R16UI),se===n.UNSIGNED_INT&&(pe=n.R32UI),se===n.BYTE&&(pe=n.R8I),se===n.SHORT&&(pe=n.R16I),se===n.INT&&(pe=n.R32I)),y===n.RG&&(se===n.FLOAT&&(pe=n.RG32F),se===n.HALF_FLOAT&&(pe=n.RG16F),se===n.UNSIGNED_BYTE&&(pe=n.RG8),se===n.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),se===n.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(se===n.UNSIGNED_BYTE&&(pe=n.RG8UI),se===n.UNSIGNED_SHORT&&(pe=n.RG16UI),se===n.UNSIGNED_INT&&(pe=n.RG32UI),se===n.BYTE&&(pe=n.RG8I),se===n.SHORT&&(pe=n.RG16I),se===n.INT&&(pe=n.RG32I)),y===n.RGB_INTEGER&&(se===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),se===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),se===n.UNSIGNED_INT&&(pe=n.RGB32UI),se===n.BYTE&&(pe=n.RGB8I),se===n.SHORT&&(pe=n.RGB16I),se===n.INT&&(pe=n.RGB32I)),y===n.RGBA_INTEGER&&(se===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),se===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),se===n.UNSIGNED_INT&&(pe=n.RGBA32UI),se===n.BYTE&&(pe=n.RGBA8I),se===n.SHORT&&(pe=n.RGBA16I),se===n.INT&&(pe=n.RGBA32I)),y===n.RGB&&(se===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),se===n.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),se===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),se===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),y===n.RGBA){const ve=be?Pr:ht.getTransfer(de);se===n.FLOAT&&(pe=n.RGBA32F),se===n.HALF_FLOAT&&(pe=n.RGBA16F),se===n.UNSIGNED_BYTE&&(pe=ve===St?n.SRGB8_ALPHA8:n.RGBA8),se===n.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),se===n.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),se===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),se===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function S(N,y){let se;return N?y===null||y===Kn||y===Ws?se=n.DEPTH24_STENCIL8:y===Nn?se=n.DEPTH32F_STENCIL8:y===Hs&&(se=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kn||y===Ws?se=n.DEPTH_COMPONENT24:y===Nn?se=n.DEPTH_COMPONENT32F:y===Hs&&(se=n.DEPTH_COMPONENT16),se}function b(N,y){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Jt&&N.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function w(N){const y=N.target;y.removeEventListener("dispose",w),R(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function _(N){const y=N.target;y.removeEventListener("dispose",_),D(y)}function R(N){const y=i.get(N);if(y.__webglInit===void 0)return;const se=N.source,ae=f.get(se);if(ae){const de=ae[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(N),Object.keys(ae).length===0&&f.delete(se)}i.remove(N)}function A(N){const y=i.get(N);n.deleteTexture(y.__webglTexture);const se=N.source,ae=f.get(se);delete ae[y.__cacheKey],o.memory.textures--}function D(N){const y=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let de=0;de<y.__webglFramebuffer[ae].length;de++)n.deleteFramebuffer(y.__webglFramebuffer[ae][de]);else n.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[ae]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const se=N.textures;for(let ae=0,de=se.length;ae<de;ae++){const be=i.get(se[ae]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(se[ae])}i.remove(N)}let k=0;function X(){k=0}function F(){return k}function V(N){k=N}function Y(){const N=k;return N>=s.maxTextures&&je("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,N}function H(N){const y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function $(N,y){const se=i.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&se.__version!==N.version){const ae=N.image;if(ae===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(se,N,y);return}}else N.isExternalTexture&&(se.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,se.__webglTexture,n.TEXTURE0+y)}function W(N,y){const se=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&se.__version!==N.version){ue(se,N,y);return}else N.isExternalTexture&&(se.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,se.__webglTexture,n.TEXTURE0+y)}function J(N,y){const se=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&se.__version!==N.version){ue(se,N,y);return}t.bindTexture(n.TEXTURE_3D,se.__webglTexture,n.TEXTURE0+y)}function Z(N,y){const se=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&se.__version!==N.version){oe(se,N,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture,n.TEXTURE0+y)}const te={[Tr]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},he={[Jt]:n.NEAREST,[vd]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Lo]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},_e={[Sd]:n.NEVER,[Ad]:n.ALWAYS,[bd]:n.LESS,[za]:n.LEQUAL,[Ed]:n.EQUAL,[Ba]:n.GEQUAL,[wd]:n.GREATER,[Td]:n.NOTEQUAL};function ye(N,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===Lo||y.magFilter===pr||y.magFilter===Bi||y.minFilter===jt||y.minFilter===Lo||y.minFilter===pr||y.minFilter===Bi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,te[y.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,te[y.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,te[y.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==pr&&y.minFilter!==Bi||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ne(N,y){let se=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",w));const ae=y.source;let de=f.get(ae);de===void 0&&(de={},f.set(ae,de));const be=H(y);if(be!==N.__cacheKey){de[be]===void 0&&(de[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,se=!0),de[be].usedTimes++;const Re=de[N.__cacheKey];Re!==void 0&&(de[N.__cacheKey].usedTimes--,Re.usedTimes===0&&A(y)),N.__cacheKey=be,N.__webglTexture=de[be].texture}return se}function z(N,y,se){return Math.floor(Math.floor(N/se)/y)}function ee(N,y,se,ae){const be=N.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,se,ae,y.data);else{be.sort((Ye,Ne)=>Ye.start-Ne.start);let Re=0;for(let Ye=1;Ye<be.length;Ye++){const Ne=be[Re],Pe=be[Ye],$e=Ne.start+Ne.count,Ke=z(Pe.start,y.width,4),nt=z(Ne.start,y.width,4);Pe.start<=$e+1&&Ke===nt&&z(Pe.start+Pe.count-1,y.width,4)===Ke?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Re,be[Re]=Pe)}be.length=Re+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ye=0,Ne=be.length;Ye<Ne;Ye++){const Pe=be[Ye],$e=Math.floor(Pe.start/4),Ke=Math.ceil(Pe.count/4),nt=$e%y.width,ie=Math.floor($e/y.width),Le=Ke,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,ie),t.texSubImage2D(n.TEXTURE_2D,0,nt,ie,Le,ge,se,ae,y.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function ue(N,y,se){let ae=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=n.TEXTURE_3D);const de=ne(N,y),be=y.source;t.bindTexture(ae,N.__webglTexture,n.TEXTURE0+se);const Re=i.get(be);if(be.version!==Re.__version||de===!0){if(t.activeTexture(n.TEXTURE0+se),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=ht.getPrimaries(ht.workingColorSpace),Ie=y.colorSpace===vi?null:ht.getPrimaries(y.colorSpace),Be=y.colorSpace===vi||ge===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ve=m(y.image,!1,s.maxTextureSize);ve=ze(y,ve);const Ce=r.convert(y.format,y.colorSpace),Ye=r.convert(y.type);let Ne=x(y.internalFormat,Ce,Ye,y.normalized,y.colorSpace,y.isVideoTexture);ye(ae,y);let Pe;const $e=y.mipmaps,Ke=y.isVideoTexture!==!0,nt=Re.__version===void 0||de===!0,ie=be.dataReady,Le=b(y,ve);if(y.isDepthTexture)Ne=S(y.format===ki,y.type),nt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ce,Ye,null));else if(y.isDataTexture)if($e.length>0){Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let ge=0,Ie=$e.length;ge<Ie;ge++)Pe=$e[ge],Ke?ie&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Ce,Ye,Pe.data);y.generateMipmaps=!1}else Ke?(nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height),ie&&ee(y,ve,Ce,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ce,Ye,ve.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,$e[0].width,$e[0].height,ve.depth);for(let ge=0,Ie=$e.length;ge<Ie;ge++)if(Pe=$e[ge],y.format!==Un)if(Ce!==null)if(Ke){if(ie)if(y.layerUpdates.size>0){const Be=_h(Pe.width,Pe.height,y.format,y.type);for(const Me of y.layerUpdates){const Ze=Pe.data.subarray(Me*Be/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Me,Pe.width,Pe.height,1,Ce,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,ve.depth,Ce,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ne,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,ve.depth,Ce,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ne,Pe.width,Pe.height,ve.depth,0,Ce,Ye,Pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ke&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let ge=0,Ie=$e.length;ge<Ie;ge++)Pe=$e[ge],y.format!==Un?Ce!==null?Ke?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Pe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?ie&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ce,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ge,Ne,Pe.width,Pe.height,0,Ce,Ye,Pe.data)}else if(y.isDataArrayTexture)if(Ke){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,ve.width,ve.height,ve.depth),ie)if(y.layerUpdates.size>0){const ge=_h(ve.width,ve.height,y.format,y.type);for(const Ie of y.layerUpdates){const Be=ve.data.subarray(Ie*ge/ve.data.BYTES_PER_ELEMENT,(Ie+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,ve.width,ve.height,1,Ce,Ye,Be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ce,Ye,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Ce,Ye,ve.data);else if(y.isData3DTexture)Ke?(nt&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,ve.width,ve.height,ve.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ce,Ye,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Ce,Ye,ve.data);else if(y.isFramebufferTexture){if(nt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height);else{let ge=ve.width,Ie=ve.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ne,ge,Ie,0,Ce,Ye,null),ge>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),d.add(y),ge.onpaint=Ie=>{const Be=Ie.changedElements;for(const Me of d)Be.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Be=n.RGBA,Me=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,Me,Ze,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(Ke&&nt){const ge=Te($e[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ge.width,ge.height)}for(let ge=0,Ie=$e.length;ge<Ie;ge++)Pe=$e[ge],Ke?ie&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ce,Ye,Pe):t.texImage2D(n.TEXTURE_2D,ge,Ne,Ce,Ye,Pe);y.generateMipmaps=!1}else if(Ke){if(nt){const ge=Te(ve);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ge.width,ge.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ye,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Ce,Ye,ve);p(y)&&M(ae),Re.__version=be.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function oe(N,y,se){if(y.image.length!==6)return;const ae=ne(N,y),de=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+se);const be=i.get(de);if(de.version!==be.__version||ae===!0){t.activeTexture(n.TEXTURE0+se);const Re=ht.getPrimaries(ht.workingColorSpace),pe=y.colorSpace===vi?null:ht.getPrimaries(y.colorSpace),ve=y.colorSpace===vi||Re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Ye=y.image[0]&&y.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Ce&&!Ye?Ne[Me]=m(y.image[Me],!0,s.maxCubemapSize):Ne[Me]=Ye?y.image[Me].image:y.image[Me],Ne[Me]=ze(y,Ne[Me]);const Pe=Ne[0],$e=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),nt=x(y.internalFormat,$e,Ke,y.normalized,y.colorSpace),ie=y.isVideoTexture!==!0,Le=be.__version===void 0||ae===!0,ge=de.dataReady;let Ie=b(y,Pe);ye(n.TEXTURE_CUBE_MAP,y);let Be;if(Ce){ie&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){Be=Ne[Me].mipmaps;for(let Ze=0;Ze<Be.length;Ze++){const Xe=Be[Ze];y.format!==Un?$e!==null?ie?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,$e,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,nt,Xe.width,Xe.height,0,Xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,$e,Ke,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,nt,Xe.width,Xe.height,0,$e,Ke,Xe.data)}}}else{if(Be=y.mipmaps,ie&&Le){Be.length>0&&Ie++;const Me=Te(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ye){ie?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,$e,Ke,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,nt,Ne[Me].width,Ne[Me].height,0,$e,Ke,Ne[Me].data);for(let Ze=0;Ze<Be.length;Ze++){const Ct=Be[Ze].image[Me].image;ie?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Ct.width,Ct.height,$e,Ke,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,nt,Ct.width,Ct.height,0,$e,Ke,Ct.data)}}else{ie?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$e,Ke,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,nt,$e,Ke,Ne[Me]);for(let Ze=0;Ze<Be.length;Ze++){const Xe=Be[Ze];ie?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,$e,Ke,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,nt,$e,Ke,Xe.image[Me])}}}p(y)&&M(n.TEXTURE_CUBE_MAP),be.__version=de.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function P(N,y,se,ae,de,be){const Re=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),ve=x(se.internalFormat,Re,pe,se.normalized,se.colorSpace),Ce=i.get(y),Ye=i.get(se);if(Ye.__renderTarget=y,!Ce.__hasExternalTextures){const Ne=Math.max(1,y.width>>be),Pe=Math.max(1,y.height>>be);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,be,ve,Ne,Pe,y.depth,0,Re,pe,null):t.texImage2D(de,be,ve,Ne,Pe,0,Re,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,de,Ye.__webglTexture,0,xe(y)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,de,Ye.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(N,y,se){if(n.bindRenderbuffer(n.RENDERBUFFER,N),y.depthBuffer){const ae=y.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,be=S(y.stencilBuffer,de),Re=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(y),be,y.width,y.height):se?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(y),be,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,be,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,N)}else{const ae=y.textures;for(let de=0;de<ae.length;de++){const be=ae[de],Re=r.convert(be.format,be.colorSpace),pe=r.convert(be.type),ve=x(be.internalFormat,Re,pe,be.normalized,be.colorSpace);Se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(y),ve,y.width,y.height):se?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(y),ve,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ve,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(N,y,se){const ae=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ae){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),de.__webglTexture===void 0){de.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),ye(n.TEXTURE_CUBE_MAP,y.depthTexture);const Ce=r.convert(y.depthTexture.format),Ye=r.convert(y.depthTexture.type);let Ne;y.depthTexture.format===di?Ne=n.DEPTH_COMPONENT24:y.depthTexture.format===ki&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,y.width,y.height,0,Ce,Ye,null)}}else $(y.depthTexture,0);const be=de.__webglTexture,Re=xe(y),pe=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+se:n.TEXTURE_2D,ve=y.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===di)Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,be,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,be,0);else if(y.depthTexture.format===ki)Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,be,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function I(N){const y=i.get(N),se=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){const ae=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=ae}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(se)for(let ae=0;ae<6;ae++)G(y.__webglFramebuffer[ae],N,ae);else{const ae=N.texture.mipmaps;ae&&ae.length>0?G(y.__webglFramebuffer[0],N,0):G(y.__webglFramebuffer,N,0)}else if(se){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=n.createRenderbuffer(),L(y.__webglDepthbuffer[ae],N,!1);else{const de=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=y.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}else{const ae=N.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),L(y.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(N,y,se){const ae=i.get(N);y!==void 0&&P(ae.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),se!==void 0&&I(N)}function C(N){const y=N.texture,se=i.get(N),ae=i.get(y);N.addEventListener("dispose",_);const de=N.textures,be=N.isWebGLCubeRenderTarget===!0,Re=de.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=y.version,o.memory.textures++),be){se.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){se.__webglFramebuffer[pe]=[];for(let ve=0;ve<y.mipmaps.length;ve++)se.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else se.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){se.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)se.__webglFramebuffer[pe]=n.createFramebuffer()}else se.__webglFramebuffer=n.createFramebuffer();if(Re)for(let pe=0,ve=de.length;pe<ve;pe++){const Ce=i.get(de[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Se(N)===!1){se.__webglMultisampledFramebuffer=n.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const ve=de[pe];se.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,se.__webglColorRenderbuffer[pe]);const Ce=r.convert(ve.format,ve.colorSpace),Ye=r.convert(ve.type),Ne=x(ve.internalFormat,Ce,Ye,ve.normalized,ve.colorSpace,N.isXRRenderTarget===!0),Pe=xe(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,se.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(se.__webglDepthRenderbuffer=n.createRenderbuffer(),L(se.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),ye(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)P(se.__webglFramebuffer[pe][ve],N,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else P(se.__webglFramebuffer[pe],N,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,ve=de.length;pe<ve;pe++){const Ce=de[pe],Ye=i.get(Ce);let Ne=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),ye(Ne,Ce),P(se.__webglFramebuffer,N,Ce,n.COLOR_ATTACHMENT0+pe,Ne,0),p(Ce)&&M(Ne)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),ye(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)P(se.__webglFramebuffer[ve],N,y,n.COLOR_ATTACHMENT0,pe,ve);else P(se.__webglFramebuffer,N,y,n.COLOR_ATTACHMENT0,pe,0);p(y)&&M(pe),t.unbindTexture()}N.depthBuffer&&I(N)}function q(N){const y=N.textures;for(let se=0,ae=y.length;se<ae;se++){const de=y[se];if(p(de)){const be=E(N),Re=i.get(de).__webglTexture;t.bindTexture(be,Re),M(be),t.unbindTexture()}}}const Q=[],O=[];function re(N){if(N.samples>0){if(Se(N)===!1){const y=N.textures,se=N.width,ae=N.height;let de=n.COLOR_BUFFER_BIT;const be=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(N),pe=y.length>1;if(pe)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ve=N.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const Ye=i.get(y[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,se,ae,0,0,se,ae,de,n.NEAREST),c===!0&&(Q.length=0,O.length=0,Q.push(n.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Q.push(be),O.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ce]);const Ye=i.get(y[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){const y=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function xe(N){return Math.min(s.maxSamples,N.samples)}function Se(N){const y=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(N){const y=o.render.frame;u.get(N)!==y&&(u.set(N,y),N.update())}function ze(N,y){const se=N.colorSpace,ae=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||se!==Cr&&se!==vi&&(ht.getTransfer(se)===St?(ae!==Un||de!==xn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",se)),y}function Te(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=K,this.setupRenderTarget=C,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=P,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cf(n,e){function t(i,s=vi){let r;const o=ht.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===Ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Da)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ac)return n.BYTE;if(i===Rc)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===La)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===Lc)return n.ALPHA;if(i===Ic)return n.RGB;if(i===Un)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===Na)return n.RED;if(i===Ua)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===Oa)return n.RG_INTEGER;if(i===Fa)return n.RGBA_INTEGER;if(i===vr||i===xr||i===yr||i===Mr)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wo||i===Xo||i===qo||i===Yo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$o||i===Zo||i===Jo||i===Ko||i===Qo||i===Ar||i===jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$o||i===Zo)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jo)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ko)return r.COMPRESSED_R11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ar)return r.COMPRESSED_RG11_EAC;if(i===jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ea||i===ta||i===na||i===ia||i===sa||i===ra||i===oa||i===aa||i===la||i===ca||i===ua||i===ha||i===da||i===fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ea)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ta)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===na)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ia)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ra)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===aa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===la)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ca)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ua)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ha)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===da)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fa)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pa||i===ma||i===ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pa)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_a||i===va||i===Rr||i===xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
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

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends Ci{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new rx,p={},M=t.getContextAttributes();let E=null,x=null;const S=[],b=[],w=new Ee;let _=null,R=null;const A=new wn;A.viewport=new Nt;const D=new wn;D.viewport=new Nt;const k=[A,D],X=new jd;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ee=S[z];return ee===void 0&&(ee=new Do,S[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=S[z];return ee===void 0&&(ee=new Do,S[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=S[z];return ee===void 0&&(ee=new Do,S[z]=ee),ee.getHandSpace()};function Y(z){const ee=b.indexOf(z.inputSource);if(ee===-1)return;const ue=S[ee];ue!==void 0&&(ue.update(z.inputSource,z.frame,l||o),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let z=0;z<S.length;z++){const ee=b[z];ee!==null&&(b[z]=null,S[z].disconnect(ee))}F=null,V=null,m.reset();for(const z in p)delete p[z];if(e.setRenderTarget(E),f=null,h=null,d=null,s=null,x=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),R!==null){const z=R.camera;z.fov=R.fov,z.zoom=R.zoom,z.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,oe=null,P=null;M.depth&&(P=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?ki:di,oe=M.stencil?Ws:Kn);const L={colorFormat:t.RGBA8,depthFormat:P,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(L),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new On(h.textureWidth,h.textureHeight,{format:Un,type:xn,depthTexture:new qs(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new On(f.framebufferWidth,f.framebufferHeight,{format:Un,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(z){for(let ee=0;ee<z.removed.length;ee++){const ue=z.removed[ee],oe=b.indexOf(ue);oe>=0&&(b[oe]=null,S[oe].disconnect(ue))}for(let ee=0;ee<z.added.length;ee++){const ue=z.added[ee];let oe=b.indexOf(ue);if(oe===-1){for(let L=0;L<S.length;L++)if(L>=b.length){b.push(ue),oe=L;break}else if(b[L]===null){b[L]=ue,oe=L;break}if(oe===-1)break}const P=S[oe];P&&P.connect(ue)}}const W=new U,J=new U;function Z(z,ee,ue){W.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const oe=W.distanceTo(J),P=ee.projectionMatrix.elements,L=ue.projectionMatrix.elements,G=P[14]/(P[10]-1),I=P[14]/(P[10]+1),K=(P[9]+1)/P[5],C=(P[9]-1)/P[5],q=(P[8]-1)/P[0],Q=(L[8]+1)/L[0],O=G*q,re=G*Q,xe=oe/(-q+Q),Se=xe*-q;if(ee.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Se),z.translateZ(xe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),P[10]===-1)z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const B=G+xe,ze=I+xe,Te=O-Se,N=re+(oe-Se),y=K*I/ze*B,se=C*I/ze*B;z.projectionMatrix.makePerspective(Te,N,y,se,B,ze),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function te(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let ee=z.near,ue=z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),X.near=D.near=A.near=ee,X.far=D.far=A.far=ue,(F!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,V=X.far),X.layers.mask=z.layers.mask|6,A.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;const oe=z.parent,P=X.cameras;te(X,oe);for(let L=0;L<P.length;L++)te(P[L],oe);P.length===2?Z(X,A,D):X.projectionMatrix.copy(A.projectionMatrix),R===null&&z.isPerspectiveCamera&&(R={camera:z,fov:z.fov,zoom:z.zoom}),he(z,X,oe)};function he(z,ee,ue){ue===null?z.matrix.copy(ee.matrixWorld):(z.matrix.copy(ue.matrixWorld),z.matrix.invert(),z.matrix.multiply(ee.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ee.projectionMatrix),z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Lr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(z){return p[z]};let _e=null;function ye(z,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;ue.length!==X.cameras.length&&(X.cameras.length=0,oe=!0);for(let I=0;I<ue.length;I++){const K=ue[I];let C=null;if(f!==null)C=f.getViewport(K);else{const Q=d.getViewSubImage(h,K);C=Q.viewport,I===0&&(e.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(x))}let q=k[I];q===void 0&&(q=new wn,q.layers.enable(I),q.viewport=new Nt,k[I]=q),q.matrix.fromArray(K.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(K.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(C.x,C.y,C.width,C.height),I===0&&(X.matrix.copy(q.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),oe===!0&&X.cameras.push(q)}const P=s.enabledFeatures;if(P&&P.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const I=d.getDepthInformation(ue[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(P&&P.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<ue.length;I++){const K=ue[I].camera;if(K){let C=p[K];C||(C=new Vc,p[K]=C);const q=d.getCameraImage(K);C.sourceTexture=q}}}}for(let ue=0;ue<S.length;ue++){const oe=b[ue],P=S[ue];oe!==null&&P!==void 0&&P.update(oe,ee,l||o)}_e&&_e(z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ne=new nf;ne.setAnimationLoop(ye),this.setAnimationLoop=function(z){_e=z},this.dispose=function(){}}}const ax=new mt,uf=new tt;uf.set(-1,0,0,0,1,0,0,0,1);function lx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const b=S.program;i.uniformBlockBinding(x,b)}function l(x,S){let b=s[x.id];b===void 0&&(m(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",M));const w=S.program;i.updateUBOMapping(x,w);const _=e.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){const S=d();x.__bindingPointIndex=S;const b=n.createBuffer(),w=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,w,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=s[x.id],b=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,R=b.length;_<R;_++){const A=b[_];if(Array.isArray(A))for(let D=0,k=A.length;D<k;D++)f(A[D],_,D,w);else f(A,_,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,S,b,w){if(v(x,S,b,w)===!0){const _=x.__offset,R=x.value;if(Array.isArray(R)){let A=0;for(let D=0;D<R.length;D++){const k=R[D],X=p(k);g(k,x.__data,A),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(A+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,w){const _=x.value,R=S+"_"+b;if(w[R]===void 0)return typeof _=="number"||typeof _=="boolean"?w[R]=_:ArrayBuffer.isView(_)?w[R]=_.slice():w[R]=_.clone(),!0;{const A=w[R];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return w[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(x){const S=x.uniforms;let b=0;const w=16;for(let R=0,A=S.length;R<A;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let k=0,X=D.length;k<X;k++){const F=D[k],V=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,H=V.length;Y<H;Y++){const $=V[Y],W=p($),J=b%w,Z=J%W.boundary,te=J+Z;b+=Z,te!==0&&w-te<W.storage&&(b+=w-te),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=W.storage}}}const _=b%w;return _>0&&(b+=w-_),x.__size=b,x.__cache={},this}function p(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):je("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){const S=x.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:E}}const ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function hx(){return ii===null&&(ii=new Fc(ux,16,16,Yi,Qn),ii.name="DFG_LUT",ii.minFilter=jt,ii.magFilter=jt,ii.wrapS=oi,ii.wrapT=oi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class hf{constructor(e={}){const{canvas:t=Cd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,m=new Set([Fa,Oa,Ua]),p=new Set([xn,Kn,Hs,Ws,Ia,Da]),M=new Uint32Array(4),E=new Int32Array(4),x=new U;let S=null,b=null;const w=[],_=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1,k=null,X=null,F=null,V=null;this._outputColorSpace=an;let Y=0,H=0,$=null,W=-1,J=null;const Z=new Nt,te=new Nt;let he=null;const _e=new ot(0);let ye=0,ne=t.width,z=t.height,ee=1,ue=null,oe=null;const P=new Nt(0,0,ne,z),L=new Nt(0,0,ne,z);let G=!1;const I=new Ha;let K=!1,C=!1;const q=new mt,Q=new U,O=new Nt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Se(){return $===null?ee:1}let B=i;function ze(T,j){return t.getContext(T,j)}let Te,N,y,se,ae,de,be,Re,pe,ve,Ce,Ye,Ne,Pe,$e,Ke,nt,ie,Le,ge,Ie,Be,Me;try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),B===null){const j="webgl2";if(B=ze(j,T),B===null)throw ze(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(T){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),dt("WebGLRenderer: "+T.message),T}function Ze(){Te=new d_(B),Te.init(),Ie=new cf(B,Te),N=new n_(B,Te,e,Ie),y=new tx(B,Te),N.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),X=B.createFramebuffer(),F=B.createFramebuffer(),V=B.createFramebuffer(),se=new m_(B),ae=new Gv,de=new nx(B,Te,y,ae,N,Ie,se),be=new h_(A),Re=new _m(B),Be=new e_(B,Re),pe=new f_(B,Re,se,Be),ve=new __(B,pe,Re,Be,se),ie=new g_(B,N,de),$e=new i_(ae),Ce=new kv(A,be,Te,N,Be,$e),Ye=new lx(A,ae),Ne=new Hv,Pe=new Zv(Te),nt=new jg(A,be,y,ve,g,c),Ke=new ex(A,ve,N),Me=new cx(B,se,N,y),Le=new t_(B,Te,se),ge=new p_(B,Te,se),se.programs=Ce.programs,A.capabilities=N,A.extensions=Te,A.properties=ae,A.renderLists=Ne,A.shadowMap=Ke,A.state=y,A.info=se}v!==xn&&(R=new x_(v,t.width,t.height,a,s,r));const Xe=new ox(A,B);this.xr=Xe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(ne,z,!1))},this.getSize=function(T){return T.set(ne,z)},this.setSize=function(T,j,fe=!0){if(Xe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,z=j,t.width=Math.floor(T*ee),t.height=Math.floor(j*ee),fe===!0&&(t.style.width=T+"px",t.style.height=j+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(ne*ee,z*ee).floor()},this.setDrawingBufferSize=function(T,j,fe){ne=T,z=j,ee=fe,t.width=Math.floor(T*fe),t.height=Math.floor(j*fe),this.setViewport(0,0,T,j)},this.setEffects=function(T){if(v===xn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let j=0;j<T.length;j++)if(T[j].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(P)},this.setViewport=function(T,j,fe,le){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,j,fe,le),y.viewport(Z.copy(P).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(L)},this.setScissor=function(T,j,fe,le){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,j,fe,le),y.scissor(te.copy(L).multiplyScalar(ee).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){y.setScissorTest(G=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,fe=!0){let le=0;if(T){let ce=!1;if($!==null){const Fe=$.texture.format;ce=m.has(Fe)}if(ce){const Fe=$.texture.type,Ge=p.has(Fe),Ue=nt.getClearColor(),Ve=nt.getClearAlpha(),qe=Ue.r,st=Ue.g,ct=Ue.b;Ge?(M[0]=qe,M[1]=st,M[2]=ct,M[3]=Ve,B.clearBufferuiv(B.COLOR,0,M)):(E[0]=qe,E[1]=st,E[2]=ct,E[3]=Ve,B.clearBufferiv(B.COLOR,0,E))}else le|=B.COLOR_BUFFER_BIT}j&&(le|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&B.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),nt.dispose(),Ne.dispose(),Pe.dispose(),ae.dispose(),be.dispose(),ve.dispose(),Be.dispose(),Me.dispose(),Ce.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",yu),Xe.removeEventListener("sessionend",Mu),Qi.stop()};function Ct(T){T.preventDefault(),jl("WebGLRenderer: Context Lost."),D=!0}function yt(){jl("WebGLRenderer: Context Restored."),D=!1;const T=se.autoReset,j=Ke.enabled,fe=Ke.autoUpdate,le=Ke.needsUpdate,ce=Ke.type;Ze(),se.autoReset=T,Ke.enabled=j,Ke.autoUpdate=fe,Ke.needsUpdate=le,Ke.type=ce}function Gn(T){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ei(T){const j=T.target;j.removeEventListener("dispose",ei),Ff(j)}function Ff(T){zf(T),ae.remove(T)}function zf(T){const j=ae.get(T).programs;j!==void 0&&(j.forEach(function(fe){Ce.releaseProgram(fe)}),T.isShaderMaterial&&Ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,fe,le,ce,Fe){j===null&&(j=re);const Ge=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ue=Gf(T,j,fe,le,ce);y.setMaterial(le,Ge);let Ve=fe.index,qe=1;if(le.wireframe===!0){if(Ve=pe.getWireframeAttribute(fe),Ve===void 0)return;qe=2}const st=fe.drawRange,ct=fe.attributes.position;let He=st.start*qe,Mt=(st.start+st.count)*qe;Fe!==null&&(He=Math.max(He,Fe.start*qe),Mt=Math.min(Mt,(Fe.start+Fe.count)*qe)),Ve!==null?(He=Math.max(He,0),Mt=Math.min(Mt,Ve.count)):ct!=null&&(He=Math.max(He,0),Mt=Math.min(Mt,ct.count));const Gt=Mt-He;if(Gt<0||Gt===1/0)return;Be.setup(ce,le,Ue,fe,Ve);let Lt,At=Le;if(Ve!==null&&(Lt=Re.get(Ve),At=ge,At.setIndex(Lt)),ce.isMesh)le.wireframe===!0?(y.setLineWidth(le.wireframeLinewidth*Se()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(ce.isLine){let sn=le.linewidth;sn===void 0&&(sn=1),y.setLineWidth(sn*Se()),ce.isLineSegments?At.setMode(B.LINES):ce.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else ce.isPoints?At.setMode(B.POINTS):ce.isSprite&&At.setMode(B.TRIANGLES);if(ce.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))At.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const sn=ce._multiDrawStarts,ke=ce._multiDrawCounts,cn=ce._multiDrawCount,ft=Ve?Re.get(Ve).bytesPerElement:1,An=ae.get(le).currentProgram.getUniforms();for(let ti=0;ti<cn;ti++)An.setValue(B,"_gl_DrawID",ti),At.render(sn[ti]/ft,ke[ti])}else if(ce.isInstancedMesh)At.renderInstances(He,Gt,ce.count);else if(fe.isInstancedBufferGeometry){const sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,ke=Math.min(fe.instanceCount,sn);At.renderInstances(He,Gt,ke)}else At.render(He,Gt)};function xu(T,j,fe,le){k!==null&&T.isNodeMaterial&&k.setObject(le,T),K===!0&&$e.setState(T,fe,!1),T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Kr(T,j,le),T.side=Xi,T.needsUpdate=!0,Kr(T,j,le),T.side=Ln):Kr(T,j,le)}this.compile=function(T,j,fe=null){fe===null&&(fe=T),k!==null&&k.renderStart(T,j,fe),b=Pe.get(fe),b.init(j),_.push(b),fe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(j.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),T!==fe&&T.traverseVisible(function(ce){ce.isLight&&ce.layers.test(j.layers)&&(b.pushLight(ce),ce.castShadow&&b.pushShadow(ce))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),C=this.localClippingEnabled,K=$e.init(this.clippingPlanes,C),K===!0&&$e.setGlobalState(this.clippingPlanes,j),k!==null&&Ke.render(b.state.shadowsArray,fe,j);const le=new Set;return T.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Fe=ce.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ue=Fe[Ge];xu(Ue,fe,j,ce),le.add(Ue)}else xu(Fe,fe,j,ce),le.add(Fe)}),b=_.pop(),k!==null&&k.renderEnd(),le},this.compileAsync=function(T,j,fe=null){const le=this.compile(T,j,fe);return new Promise(ce=>{function Fe(){if(le.forEach(function(Ge){const Ve=ae.get(Ge).currentProgram;(Ve===void 0||Ve.isReady())&&le.delete(Ge)}),le.size===0){ce(T);return}setTimeout(Fe,10)}Te.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ll=null;function Bf(T){ll&&ll(T)}function yu(){Qi.stop()}function Mu(){Qi.start()}const Qi=new nf;Qi.setAnimationLoop(Bf),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(T){ll=T,Xe.setAnimationLoop(T),T===null?Qi.stop():Qi.start()},Xe.addEventListener("sessionstart",yu),Xe.addEventListener("sessionend",Mu),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(T,j);const fe=Xe.enabled===!0&&Xe.isPresenting===!0,le=R!==null&&($===null||fe)&&R.begin(A,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(j),j=Xe.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,j,$),b=Pe.get(T,_.length),b.init(j),b.state.textureUnits=de.getTextureUnits(),_.push(b),q.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),I.setFromProjectionMatrix(q,Yn,j.reversedDepth),C=this.localClippingEnabled,K=$e.init(this.clippingPlanes,C),S=Ne.get(T,w.length),S.init(),w.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=A.xr.getDepthSensingMesh();Ge!==null&&cl(Ge,j,-1/0,A.sortObjects)}cl(T,j,0,A.sortObjects),S.finish(),k!==null&&k.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(ue,oe),xe=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,xe&&nt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&$e.beginShadows();const ce=b.state.shadowsArray;if(Ke.render(ce,T,j),K===!0&&$e.endShadows(),(le&&R.hasRenderPass())===!1){const Ge=S.opaque,Ue=S.transmissive;if(b.setupLights(),j.isArrayCamera){const Ve=j.cameras;if(Ue.length>0)for(let qe=0,st=Ve.length;qe<st;qe++){const ct=Ve[qe];bu(Ge,Ue,T,ct)}xe&&nt.render(T);for(let qe=0,st=Ve.length;qe<st;qe++){const ct=Ve[qe];Su(S,T,ct,ct.viewport)}}else Ue.length>0&&bu(Ge,Ue,T,j),xe&&nt.render(T),Su(S,T,j)}$!==null&&H===0&&(de.updateMultisampleRenderTarget($),de.updateRenderTargetMipmap($)),le&&R.end(A),T.isScene===!0&&T.onAfterRender(A,T,j),Be.resetDefaultState(),W=-1,J=null,_.pop(),_.length>0?(b=_[_.length-1],de.setTextureUnits(b.state.textureUnits),K===!0&&$e.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,k!==null&&k.renderEnd()};function cl(T,j,fe,le){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)fe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(I)){le&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(q);const Ge=ve.update(T),Ue=T.material;Ue.visible&&S.push(T,Ge,Ue,fe,O.z,null,j)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(I))){const Ge=ve.update(T),Ue=T.material;if(le&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),O.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),O.copy(Ge.boundingSphere.center)),O.applyMatrix4(T.matrixWorld).applyMatrix4(q)),Array.isArray(Ue)){const Ve=Ge.groups;for(let qe=0,st=Ve.length;qe<st;qe++){const ct=Ve[qe],He=Ue[ct.materialIndex];He&&He.visible&&S.push(T,Ge,He,fe,O.z,ct,j)}}else Ue.visible&&S.push(T,Ge,Ue,fe,O.z,null,j)}}const Fe=T.children;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++)cl(Fe[Ge],j,fe,le)}function Su(T,j,fe,le){const{opaque:ce,transmissive:Fe,transparent:Ge}=T;b.setupLightsView(fe),K===!0&&$e.setGlobalState(A.clippingPlanes,fe),le&&y.viewport(Z.copy(le)),ce.length>0&&Jr(ce,j,fe),Fe.length>0&&Jr(Fe,j,fe),Ge.length>0&&Jr(Ge,j,fe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function bu(T,j,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[le.id]===void 0){const He=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[le.id]=new On(1,1,{generateMipmaps:!0,type:He?Qn:xn,minFilter:Bi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Fe=b.state.transmissionRenderTarget[le.id],Ge=le.viewport||Z;Fe.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget(),Ve=A.getActiveCubeFace(),qe=A.getActiveMipmapLevel();A.setRenderTarget(Fe),A.getClearColor(_e),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),xe&&nt.render(fe);const st=A.toneMapping;A.toneMapping=$n;const ct=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),b.setupLightsView(le),K===!0&&$e.setGlobalState(A.clippingPlanes,le),Jr(T,fe,le),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Mt=0,Gt=j.length;Mt<Gt;Mt++){const Lt=j[Mt],{object:At,geometry:sn,material:ke,group:cn}=Lt;if(ke.side===Ln&&At.layers.test(le.layers)){const ft=ke.side;ke.side=pn,ke.needsUpdate=!0,Eu(At,fe,le,sn,ke,cn),ke.side=ft,ke.needsUpdate=!0,He=!0}}He===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}A.setRenderTarget(Ue,Ve,qe),A.setClearColor(_e,ye),ct!==void 0&&(le.viewport=ct),A.toneMapping=st}function Jr(T,j,fe){const le=j.isScene===!0?j.overrideMaterial:null;for(let ce=0,Fe=T.length;ce<Fe;ce++){const Ge=T[ce],{object:Ue,geometry:Ve,group:qe}=Ge;let st=Ge.material;st.allowOverride===!0&&le!==null&&(st=le),Ue.layers.test(fe.layers)&&Eu(Ue,j,fe,Ve,st,qe)}}function Eu(T,j,fe,le,ce,Fe){k!==null&&ce.isNodeMaterial&&k.setObject(T,ce),T.onBeforeRender(A,j,fe,le,ce,Fe),T.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ce.onBeforeRender(A,j,fe,le,T,Fe),ce.transparent===!0&&ce.side===Ln&&ce.forceSinglePass===!1?(ce.side=pn,ce.needsUpdate=!0,A.renderBufferDirect(fe,j,le,ce,T,Fe),ce.side=Xi,ce.needsUpdate=!0,A.renderBufferDirect(fe,j,le,ce,T,Fe),ce.side=Ln):A.renderBufferDirect(fe,j,le,ce,T,Fe),T.onAfterRender(A,j,fe,le,ce,Fe)}function Kr(T,j,fe){j.isScene!==!0&&(j=re);const le=ae.get(T),ce=b.state.lights,Fe=b.state.shadowsArray,Ge=ce.state.version,Ue=Ce.getParameters(T,ce.state,Fe,j,fe,b.state.lightProbeGridArray),Ve=Ce.getProgramCacheKey(Ue);let qe=le.programs;le.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?j.environment:null,le.fog=j.fog;const st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;le.envMap=be.get(T.envMap||le.environment,st),le.envMapRotation=le.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",ei),qe=new Map,le.programs=qe);let ct=qe.get(Ve);if(ct!==void 0){if(le.currentProgram===ct&&le.lightsStateVersion===Ge)return Tu(T,Ue),ct}else Ue.uniforms=Ce.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,fe,Ue),T.onBeforeCompile(Ue,A),ct=Ce.acquireProgram(Ue,Ve),qe.set(Ve,ct),le.uniforms=Ue.uniforms;const He=le.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=$e.uniform),Tu(T,Ue),le.needsLights=Hf(T),le.lightsStateVersion=Ge,le.needsLights&&(He.ambientLightColor.value=ce.state.ambient,He.lightProbe.value=ce.state.probe,He.sunLights.value=ce.state.sun,He.sunLightShadows.value=ce.state.sunShadow,He.directionalLights.value=ce.state.directional,He.directionalLightShadows.value=ce.state.directionalShadow,He.spotLights.value=ce.state.spot,He.spotLightShadows.value=ce.state.spotShadow,He.rectAreaLights.value=ce.state.rectArea,He.ltc_1.value=ce.state.rectAreaLTC1,He.ltc_2.value=ce.state.rectAreaLTC2,He.pointLights.value=ce.state.point,He.pointLightShadows.value=ce.state.pointShadow,He.hemisphereLights.value=ce.state.hemi,He.sunShadowMatrix.value=ce.state.sunShadowMatrix,He.sunShadowCascade.value=ce.state.sunShadowCascade,He.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,He.spotLightMatrix.value=ce.state.spotLightMatrix,He.spotLightMap.value=ce.state.spotLightMap,He.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=b.state.lightProbeGridArray.length>0,le.currentProgram=ct,le.uniformsList=null,ct}function wu(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=No.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Tu(T,j){const fe=ae.get(T);fe.outputColorSpace=j.outputColorSpace,fe.batching=j.batching,fe.batchingColor=j.batchingColor,fe.instancing=j.instancing,fe.instancingColor=j.instancingColor,fe.instancingMorph=j.instancingMorph,fe.skinning=j.skinning,fe.morphTargets=j.morphTargets,fe.morphNormals=j.morphNormals,fe.morphColors=j.morphColors,fe.morphTargetsCount=j.morphTargetsCount,fe.numClippingPlanes=j.numClippingPlanes,fe.numIntersection=j.numClipIntersection,fe.vertexAlphas=j.vertexAlphas,fe.vertexTangents=j.vertexTangents,fe.toneMapping=j.toneMapping}function kf(T,j){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(j.matrixWorld);for(let fe=0,le=T.length;fe<le;fe++){const ce=T[fe];if(ce.texture!==null&&ce.boundingBox.containsPoint(x))return ce}return null}function Gf(T,j,fe,le,ce){j.isScene!==!0&&(j=re),de.resetTextureUnits();const Fe=j.fog,Ge=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?j.environment:null,Ue=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ht.workingColorSpace,Ve=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,qe=be.get(le.envMap||Ge,Ve),st=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ct=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),He=!!fe.morphAttributes.position,Mt=!!fe.morphAttributes.normal,Gt=!!fe.morphAttributes.color;let Lt=$n;le.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Lt=A.toneMapping);const At=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,sn=At!==void 0?At.length:0,ke=ae.get(le),cn=b.state.lights;if(K===!0&&(C===!0||T!==J)){const Pt=T===J&&le.id===W;$e.setState(le,T,Pt)}let ft=!1;le.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==cn.state.version||ke.outputColorSpace!==Ue||ce.isBatchedMesh&&ke.batching===!1||!ce.isBatchedMesh&&ke.batching===!0||ce.isBatchedMesh&&ke.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&ke.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&ke.instancing===!1||!ce.isInstancedMesh&&ke.instancing===!0||ce.isSkinnedMesh&&ke.skinning===!1||!ce.isSkinnedMesh&&ke.skinning===!0||ce.isInstancedMesh&&ke.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ke.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&ke.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&ke.instancingMorph===!1&&ce.morphTexture!==null||ke.envMap!==qe||le.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==$e.numPlanes||ke.numIntersection!==$e.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==ct||ke.morphTargets!==He||ke.morphNormals!==Mt||ke.morphColors!==Gt||ke.toneMapping!==Lt||ke.morphTargetsCount!==sn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,ke.__version=le.version);let An=ke.currentProgram;ft===!0&&(An=Kr(le,j,ce),k&&le.isNodeMaterial&&k.onUpdateProgram(le,An,ke));let ti=!1,Li=!1,_s=!1;const Tt=An.getUniforms(),Ft=ke.uniforms;if(y.useProgram(An.program)&&(ti=!0,Li=!0,_s=!0),le.id!==W&&(W=le.id,Li=!0),ke.needsLights){const Pt=kf(b.state.lightProbeGridArray,ce);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,Li=!0)}if(ti||J!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Tt.setValue(B,"projectionMatrix",T.projectionMatrix),Tt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Di=Tt.map.cameraPosition;Di!==void 0&&Di.setValue(B,Q.setFromMatrixPosition(T.matrixWorld)),N.logarithmicDepthBuffer&&Tt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Tt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Li=!0,_s=!0)}if(ke.needsLights&&(cn.state.sunShadowMap.length>0&&Tt.setValue(B,"sunShadowMap",cn.state.sunShadowMap,de),cn.state.directionalShadowMap.length>0&&Tt.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,de),cn.state.spotShadowMap.length>0&&Tt.setValue(B,"spotShadowMap",cn.state.spotShadowMap,de),cn.state.pointShadowMap.length>0&&Tt.setValue(B,"pointShadowMap",cn.state.pointShadowMap,de)),ce.isSkinnedMesh){Tt.setOptional(B,ce,"bindMatrix"),Tt.setOptional(B,ce,"bindMatrixInverse");const Pt=ce.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Tt.setValue(B,"boneTexture",Pt.boneTexture,de))}ce.isBatchedMesh&&(Tt.setOptional(B,ce,"batchingTexture"),Tt.setValue(B,"batchingTexture",ce._matricesTexture,de),Tt.setOptional(B,ce,"batchingIdTexture"),Tt.setValue(B,"batchingIdTexture",ce._indirectTexture,de),Tt.setOptional(B,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Tt.setValue(B,"batchingColorTexture",ce._colorsTexture,de));const Ii=fe.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ie.update(ce,fe,An),(Li||ke.receiveShadow!==ce.receiveShadow)&&(ke.receiveShadow=ce.receiveShadow,Tt.setValue(B,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&j.environment!==null&&(Ft.envMapIntensity.value=j.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=hx()),Li){if(Tt.setValue(B,"toneMappingExposure",A.toneMappingExposure),ke.needsLights&&Vf(Ft,_s),Fe&&le.fog===!0&&Ye.refreshFogUniforms(Ft,Fe),Ye.refreshMaterialUniforms(Ft,le,ee,z,b.state.transmissionRenderTarget[T.id]),ke.needsLights&&ke.lightProbeGrid){const Pt=ke.lightProbeGrid;Ft.probesSH.value=Pt.texture,Ft.probesMin.value.copy(Pt.boundingBox.min),Ft.probesMax.value.copy(Pt.boundingBox.max),Ft.probesResolution.value.copy(Pt.resolution)}No.upload(B,wu(ke),Ft,de)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(No.upload(B,wu(ke),Ft,de),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Tt.setValue(B,"center",ce.center),Tt.setValue(B,"modelViewMatrix",ce.modelViewMatrix),Tt.setValue(B,"normalMatrix",ce.normalMatrix),Tt.setValue(B,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const Pt=le.uniformsGroups;for(let Di=0,vs=Pt.length;Di<vs;Di++){const Ru=Pt[Di];Me.update(Ru,An),Me.bind(Ru,An)}}return An}function Vf(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.sunLights.needsUpdate=j,T.sunLightShadows.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Hf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,j,fe){const le=ae.get(T);le.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),ae.get(T.texture).__webglTexture=j,ae.get(T.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const fe=ae.get(T);fe.__webglFramebuffer=j,fe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(T,j=0,fe=0){$=T,Y=j,H=fe;let le=null,ce=!1,Fe=!1;if(T){const Ue=ae.get(T);if(Ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Ue.__webglFramebuffer),Z.copy(T.viewport),te.copy(T.scissor),he=T.scissorTest,y.viewport(Z),y.scissor(te),y.setScissorTest(he),W=-1;return}else if(Ue.__webglFramebuffer===void 0)de.setupRenderTarget(T);else if(Ue.__hasExternalTextures)de.rebindTextures(T,ae.get(T.texture).__webglTexture,ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const st=T.depthTexture;if(Ue.__boundDepthTexture!==st){if(st!==null&&ae.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Fe=!0);const qe=ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[j])?le=qe[j][fe]:le=qe[j],ce=!0):T.samples>0&&de.useMultisampledRTT(T)===!1?le=ae.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?le=qe[fe]:le=qe,Z.copy(T.viewport),te.copy(T.scissor),he=T.scissorTest}else Z.copy(P).multiplyScalar(ee).floor(),te.copy(L).multiplyScalar(ee).floor(),he=G;if(fe!==0&&(le=X),y.bindFramebuffer(B.FRAMEBUFFER,le)&&y.drawBuffers(T,le),y.viewport(Z),y.scissor(te),y.setScissorTest(he),ce){const Ue=ae.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ue.__webglTexture,fe)}else if(Fe){const Ue=j;for(let Ve=0;Ve<T.textures.length;Ve++){const qe=ae.get(T.textures[Ve]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,fe,Ue)}}else if(T!==null&&fe!==0){const Ue=ae.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ue.__webglTexture,fe)}W=-1};function Au(T){const j=ae.get(T);return(j.__readFormat!==T.format||j.__readType!==T.type)&&(j.__readFormat=T.format,j.__readType=T.type,j.__formatReadable=N.textureFormatReadable(T.format),j.__typeReadable=N.textureTypeReadable(T.type)),j}this.readRenderTargetPixels=function(T,j,fe,le,ce,Fe,Ge,Ue=0){if(!(T&&T.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){y.bindFramebuffer(B.FRAMEBUFFER,Ve);try{const qe=T.textures[Ue],st=qe.format,ct=qe.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ue);const He=Au(qe);if(He.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-le&&fe>=0&&fe<=T.height-ce&&B.readPixels(j,fe,le,ce,Ie.convert(st),Ie.convert(ct),Fe)}finally{const qe=$!==null?ae.get($).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,j,fe,le,ce,Fe,Ge,Ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(j>=0&&j<=T.width-le&&fe>=0&&fe<=T.height-ce){y.bindFramebuffer(B.FRAMEBUFFER,Ve);const qe=T.textures[Ue],st=qe.format,ct=qe.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ue);const He=Au(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Mt),B.bufferData(B.PIXEL_PACK_BUFFER,Fe.byteLength,B.STREAM_READ),B.readPixels(j,fe,le,ce,Ie.convert(st),Ie.convert(ct),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Gt=$!==null?ae.get($).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Gt);const Lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jf(B,Lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Mt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Fe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Mt),B.deleteSync(Lt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,fe=0){const le=Math.pow(2,-fe),ce=Math.floor(T.image.width*le),Fe=Math.floor(T.image.height*le),Ge=j!==null?j.x:0,Ue=j!==null?j.y:0;de.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,fe,0,0,Ge,Ue,ce,Fe),y.unbindTexture()},this.copyTextureToTexture=function(T,j,fe=null,le=null,ce=0,Fe=0){let Ge,Ue,Ve,qe,st,ct,He,Mt,Gt;const Lt=T.isCompressedTexture?T.mipmaps[Fe]:T.image;if(fe!==null)Ge=fe.max.x-fe.min.x,Ue=fe.max.y-fe.min.y,Ve=fe.isBox3?fe.max.z-fe.min.z:1,qe=fe.min.x,st=fe.min.y,ct=fe.isBox3?fe.min.z:0;else{const Ft=Math.pow(2,-ce);Ge=Math.floor(Lt.width*Ft),Ue=Math.floor(Lt.height*Ft),T.isDataArrayTexture?Ve=Lt.depth:T.isData3DTexture?Ve=Math.floor(Lt.depth*Ft):Ve=1,qe=0,st=0,ct=0}le!==null?(He=le.x,Mt=le.y,Gt=le.z):(He=0,Mt=0,Gt=0);const At=Ie.convert(j.format),sn=Ie.convert(j.type);let ke;j.isData3DTexture?(de.setTexture3D(j,0),ke=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(de.setTexture2DArray(j,0),ke=B.TEXTURE_2D_ARRAY):(de.setTexture2D(j,0),ke=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const cn=y.getParameter(B.UNPACK_ROW_LENGTH),ft=y.getParameter(B.UNPACK_IMAGE_HEIGHT),An=y.getParameter(B.UNPACK_SKIP_PIXELS),ti=y.getParameter(B.UNPACK_SKIP_ROWS),Li=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),y.pixelStorei(B.UNPACK_SKIP_ROWS,st),y.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);const _s=T.isDataArrayTexture||T.isData3DTexture,Tt=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const Ft=ae.get(T),Ii=ae.get(j),Pt=ae.get(Ft.__renderTarget),Di=ae.get(Ii.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,Pt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let vs=0;vs<Ve;vs++)_s&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ae.get(T).__webglTexture,ce,ct+vs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ae.get(j).__webglTexture,Fe,Gt+vs)),B.blitFramebuffer(qe,st,Ge,Ue,He,Mt,Ge,Ue,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ce!==0||T.isRenderTargetTexture||ae.has(T)){const Ft=ae.get(T),Ii=ae.get(j);y.bindFramebuffer(B.READ_FRAMEBUFFER,F),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let Pt=0;Pt<Ve;Pt++)_s?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,ce,ct+Pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,ce),Tt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ii.__webglTexture,Fe,Gt+Pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ii.__webglTexture,Fe),ce!==0?B.blitFramebuffer(qe,st,Ge,Ue,He,Mt,Ge,Ue,B.COLOR_BUFFER_BIT,B.NEAREST):Tt?B.copyTexSubImage3D(ke,Fe,He,Mt,Gt+Pt,qe,st,Ge,Ue):B.copyTexSubImage2D(ke,Fe,He,Mt,qe,st,Ge,Ue);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(ke,Fe,He,Mt,Gt,Ge,Ue,Ve,At,sn,Lt.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(ke,Fe,He,Mt,Gt,Ge,Ue,Ve,At,Lt.data):B.texSubImage3D(ke,Fe,He,Mt,Gt,Ge,Ue,Ve,At,sn,Lt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Fe,He,Mt,Ge,Ue,At,sn,Lt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Fe,He,Mt,Lt.width,Lt.height,At,Lt.data):B.texSubImage2D(B.TEXTURE_2D,Fe,He,Mt,Ge,Ue,At,sn,Lt);y.pixelStorei(B.UNPACK_ROW_LENGTH,cn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft),y.pixelStorei(B.UNPACK_SKIP_PIXELS,An),y.pixelStorei(B.UNPACK_SKIP_ROWS,ti),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Li),Fe===0&&j.generateMipmaps&&B.generateMipmap(ke),y.unbindTexture()},this.initRenderTarget=function(T){ae.get(T).__webglFramebuffer===void 0&&de.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?de.setTextureCube(T,0):T.isData3DTexture?de.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?de.setTexture2DArray(T,0):de.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){Y=0,H=0,$=null,y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Sn=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Pa,AddEquation:rs,AddOperation:_d,AdditiveBlending:Zl,AgXToneMapping:Ec,AlphaFormat:Lc,AlwaysCompare:Ad,AlwaysDepth:Fo,AlwaysStencilFunc:Md,ArcCurve:zd,ArrayCamera:jd,BackSide:pn,BasicDepthPacking:xd,Box3:Zi,BoxGeometry:Pi,BufferAttribute:Fn,BufferGeometry:kt,ByteType:Ac,Camera:Kc,CanvasTexture:Gc,CatmullRomCurve3:Wc,CineonToneMapping:Sc,CircleGeometry:Wa,ClampToEdgeWrapping:oi,Color:ot,ColorManagement:ht,ConeGeometry:fs,ConstantAlphaFactor:pd,ConstantColorFactor:dd,Controls:tf,CubeCamera:Qd,CubeDepthTexture:Fd,CubeReflectionMapping:qi,CubeRefractionMapping:us,CubeTexture:kc,CubeUVReflectionMapping:zr,CubicBezierCurve:Xc,CubicBezierCurve3:Bd,CullFaceBack:$l,CullFaceFront:Jh,CullFaceNone:Zh,Curve:jn,CurvePath:Gd,CustomBlending:Qh,CustomToneMapping:bc,CylinderGeometry:kr,Data3DTexture:Dd,DataArrayTexture:Nc,DataTexture:Fc,DepthFormat:di,DepthStencilFormat:ki,DepthTexture:qs,DirectionalLight:Qc,DoubleSide:Ln,DstAlphaFactor:ad,DstColorFactor:cd,EllipseCurve:qa,EqualCompare:Ed,EqualDepth:Bo,EquirectangularReflectionMapping:Co,EquirectangularRefractionMapping:Po,Euler:Ai,EventDispatcher:Ci,ExternalTexture:Vc,ExtrudeGeometry:Ks,Float32BufferAttribute:_t,FloatType:Nn,FogExp2:Va,FrontSide:Xi,Frustum:Ha,GLSL3:Ql,GreaterCompare:wd,GreaterDepth:Go,GreaterEqualCompare:Ba,GreaterEqualDepth:ko,Group:Gi,HalfFloatType:Qn,HemisphereLight:Kd,IcosahedronGeometry:Vr,ImageUtils:Ld,InstancedBufferAttribute:ec,InstancedMesh:tc,IntType:La,KeepStencilOp:Io,Layers:Ga,LessCompare:bd,LessDepth:zo,LessEqualCompare:za,LessEqualDepth:Vs,Light:Ja,LightShadow:Jc,Line:Op,LineBasicMaterial:zc,LineCurve:qc,LineCurve3:kd,LineDashedMaterial:fm,LinearFilter:jt,LinearMipmapLinearFilter:Bi,LinearMipmapNearestFilter:Lo,LinearSRGBColorSpace:Cr,LinearToneMapping:yc,LinearTransfer:Pr,MOUSE:Mi,Material:Ki,MathUtils:vn,Matrix2:lc,Matrix3:tt,Matrix4:mt,MaxEquation:nd,Mesh:mn,MeshBasicMaterial:Br,MeshDepthMaterial:Zd,MeshDistanceMaterial:Jd,MeshStandardMaterial:Us,MinEquation:td,MirroredRepeatWrapping:Ho,MixOperation:gd,MultiplyBlending:Kl,MultiplyOperation:xc,NearestFilter:Jt,NearestMipmapLinearFilter:pr,NearestMipmapNearestFilter:vd,NeutralToneMapping:wc,NeverCompare:Sd,NeverDepth:Oo,NoBlending:ci,NoColorSpace:vi,NoToneMapping:$n,NormalBlending:zs,NotEqualCompare:Td,NotEqualDepth:Vo,Object3D:Bt,ObjectSpaceNormalMap:yd,OneFactor:sd,OneMinusConstantAlphaFactor:md,OneMinusConstantColorFactor:fd,OneMinusDstAlphaFactor:ld,OneMinusDstColorFactor:ud,OneMinusSrcAlphaFactor:vc,OneMinusSrcColorFactor:od,OrthographicCamera:Hr,PCFShadowMap:Fs,PCFSoftShadowMap:Kh,PMREMGenerator:cc,Path:ic,PerspectiveCamera:wn,Plane:ri,PlaneGeometry:ps,PointLight:Ka,Points:Od,PointsMaterial:Bc,PolyhedronGeometry:Xa,QuadraticBezierCurve:Yc,QuadraticBezierCurve3:$c,Quaternion:Ti,R11_EAC_Format:Ko,RED_GREEN_RGTC2_Format:Rr,RED_RGTC1_Format:_a,REVISION:Ca,RG11_EAC_Format:Ar,RGBAFormat:Un,RGBAIntegerFormat:Fa,RGBA_ASTC_10x10_Format:ha,RGBA_ASTC_10x5_Format:la,RGBA_ASTC_10x6_Format:ca,RGBA_ASTC_10x8_Format:ua,RGBA_ASTC_12x10_Format:da,RGBA_ASTC_12x12_Format:fa,RGBA_ASTC_4x4_Format:ea,RGBA_ASTC_5x4_Format:ta,RGBA_ASTC_5x5_Format:na,RGBA_ASTC_6x5_Format:ia,RGBA_ASTC_6x6_Format:sa,RGBA_ASTC_8x5_Format:ra,RGBA_ASTC_8x6_Format:oa,RGBA_ASTC_8x8_Format:aa,RGBA_BPTC_Format:pa,RGBA_ETC2_EAC_Format:Jo,RGBA_PVRTC_2BPPV1_Format:Yo,RGBA_PVRTC_4BPPV1_Format:qo,RGBA_S3TC_DXT1_Format:xr,RGBA_S3TC_DXT3_Format:yr,RGBA_S3TC_DXT5_Format:Mr,RGBFormat:Ic,RGB_BPTC_SIGNED_Format:ma,RGB_BPTC_UNSIGNED_Format:ga,RGB_ETC1_Format:$o,RGB_ETC2_Format:Zo,RGB_PVRTC_2BPPV1_Format:Xo,RGB_PVRTC_4BPPV1_Format:Wo,RGB_S3TC_DXT1_Format:vr,RGFormat:Yi,RGIntegerFormat:Oa,RawShaderMaterial:$d,Ray:Js,Raycaster:ef,RedFormat:Na,RedIntegerFormat:Ua,ReinhardToneMapping:Mc,RenderTarget:Id,RepeatWrapping:Tr,ReverseSubtractEquation:ed,SIGNED_R11_EAC_Format:Qo,SIGNED_RED_GREEN_RGTC2_Format:xa,SIGNED_RED_RGTC1_Format:va,SIGNED_RG11_EAC_Format:jo,SRGBColorSpace:an,SRGBTransfer:St,Scene:Ud,ShaderChunk:it,ShaderLib:qn,ShaderMaterial:Bn,Shape:Gr,ShapeUtils:as,ShortType:Rc,Sphere:Ji,SphereGeometry:Ya,Spherical:ac,SplineCurve:Zc,SrcAlphaFactor:_c,SrcAlphaSaturateFactor:hd,SrcColorFactor:rd,StaticDrawUsage:Rd,SubtractEquation:jh,SubtractiveBlending:Jl,TOUCH:xi,TangentSpaceNormalMap:ya,Texture:tn,TextureSource:ka,TorusGeometry:$a,Triangle:In,TubeGeometry:Za,UVMapping:Tc,Uint16BufferAttribute:Uc,Uint32BufferAttribute:Oc,UniformsLib:De,UniformsUtils:Yd,UnsignedByteType:xn,UnsignedInt101111Type:Pc,UnsignedInt248Type:Ws,UnsignedInt5999Type:Cc,UnsignedIntType:Kn,UnsignedShort4444Type:Ia,UnsignedShort5551Type:Da,UnsignedShortType:Hs,VSMShadowMap:Ns,Vector2:Ee,Vector3:U,Vector4:Nt,WebGLCoordinateSystem:Yn,WebGLCubeRenderTarget:jc,WebGLRenderTarget:On,WebGLRenderer:hf,WebGLUtils:cf,WebGPUCoordinateSystem:Xs,WebXRController:Do,ZeroFactor:id,createCanvasElement:Cd,error:dt,log:jl,warn:je,warnOnce:ls},Symbol.toStringTag,{value:"Module"})),Bh={type:"change"},eu={type:"start"},df={type:"end"},Ao=new Js,kh=new ri,dx=Math.cos(70*vn.DEG2RAD),Wt=new U,_n=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6;class fx extends tf{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ti,this._lastTargetPosition=new U,this._quat=new Ti().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ac,this._sphericalDelta=new ac,this._scale=1,this._panOffset=new U,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new U,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mx.bind(this),this._onPointerDown=px.bind(this),this._onPointerUp=gx.bind(this),this._onContextMenu=bx.bind(this),this._onMouseWheel=xx.bind(this),this._onKeyDown=yx.bind(this),this._onTouchStart=Mx.bind(this),this._onTouchMove=Sx.bind(this),this._onMouseDown=_x.bind(this),this._onMouseMove=vx.bind(this),this._interceptControlDown=Ex.bind(this),this._interceptControlUp=wx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bh),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Wt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ao.origin.copy(this.object.position),Ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ao.direction))<dx?this.object.lookAt(this.target):(kh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ao.intersectPlane(kh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(Bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Wt.copy(s).sub(this.target);let r=Wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function px(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(df),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _x(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case Mi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case Mi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(eu)}function vx(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function xx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(eu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(df))}function yx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Mx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(eu)}function Sx(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function bx(n){this.enabled!==!1&&n.preventDefault()}function Ex(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hr=new U;function Cn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;hr.copy(e),hr[i]=0,hr.normalize();const l=.5*o/(o+a),u=1-hr.angleTo(n)/c;return Math.sign(hr[t])===1?u*l:a/(o+a)+l+l*(1-u)}class tu extends Pi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new U,l=new U,u=new U(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new U,m=.5/o;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[M+0]=Cn(v,l,"z","y",r,i),f[M+1]=1-Cn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),f[M+0]=1-Cn(v,l,"z","y",r,i),f[M+1]=1-Cn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),f[M+0]=1-Cn(v,l,"x","z",r,e),f[M+1]=Cn(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),f[M+0]=1-Cn(v,l,"x","z",r,e),f[M+1]=1-Cn(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),f[M+0]=1-Cn(v,l,"x","y",r,e),f[M+1]=1-Cn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),f[M+0]=Cn(v,l,"x","y",r,e),f[M+1]=1-Cn(v,l,"y","x",r,t);break}}static fromJSON(e){return new tu(e.width,e.height,e.depth,e.segments,e.radius)}}function Tx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new kt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Gh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);const g=Gh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Gh(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Fn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const v=u.getComponent(h,g);a.setComponent(h+d,g,v)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Ax({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:u,torus:d,rod:h,sign:f,paperBoat:g,batchStatic:v,persist:m,say:p,refresh:M,chime:E,reduced:x}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],w=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,_),d([-.7,.51,-.83],.31,.035,s.copper,_),u([-.7,.49,-.83],.26,.045,s.dark,_);const R=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],R),d([0,0,0],.36,.015,s.copper,R,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,_),d([.66,.56,-.22],.28,.028,s.copper,_),u([.66,.55,-.22],.24,.03,r("#495441"),_);const A=o([.66,.56,-.22],_);h([0,0,0],[0,.83,0],.026,s.copper,A);for(const[P,L,G]of[[-.17,.23,-.5],[.17,.41,.5]]){const I=l([P,L,0],[.24,.035,.085],s.mint,A);I.rotation.z=G}const D=o([0,.95,0],A);l([0,0,0],.115,s.light,D),d([0,0,0],.28,.021,s.cream,D,[0,0,0]),d([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const k=[];for(let P=0;P<4;P++){const L=P*Math.PI/2,G=o([Math.cos(L)*.3,.13+Math.sin(L)*.12,Math.sin(L)*.3],A);h([0,-.15,0],[0,.2,0],.012,s.copper,G),l([0,.23,0],.065,s.cream,G),v(G,[]),k.push(G)}c([-.46,.2,.32],[.68,.12,.47],s.dark,_);const X=o([-.46,.29,.32],_);c([0,0,0],[.5,.025,.32],s.cream,X);for(const P of[-.23,.23])h([P,.016,-.14],[0,.016,.06],.009,s.copper,X);l([0,.027,.06],[.04,.015,.04],s.rust,X),f("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),v(R,[]),v(D,[]),v(A,[D,...k]),v(X,[]),v(_,[R,A,X]);const F=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);F.castShadow=!1;const V=o([0,0,0],e),Y=g(V,[8.3,.14,3.5],1.05),H=o([0,.36,0],Y),$=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],H),W=l([0,.12,0],[.085,.13,.085],s.light,H),J=c([0,.09,0],[.23,.025,.16],s.cream,H);J.rotation.z=.2;const Z=[$,W,J];v(Y,[H]);const te=new n.Vector3(8.3,.14,3.5),he=new n.Vector3(8.45,.14,3.65),_e=new n.Vector3(9.2,-2.7,6.5);let ye=-1,ne=i.dockTrips>=2?1:.02;function z(){R.visible=i.dockTrips>=1,A.visible=i.dockTrips>=2,X.visible=i.dockTrips>=3,k.forEach((P,L)=>P.visible=i.dockTrips>=5+L*3),H.visible=i.dockPending,Z.forEach((P,L)=>P.visible=L===i.dockTrips%3),Y.position.copy(i.dockPending?he:te)}z();function ee(){if(!(i.boat>0))if(i.dockPending){const P=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(ne=.02),m(),z(),p(P.line),E(330),M()}else i.boat=18,ye=-1,Z.forEach((P,L)=>P.visible=L===i.dockTrips%3),H.visible=!1,p("ну плыви. я тут."),M()}function ue(P,L){if(i.boat>0){i.boat=Math.max(0,i.boat-P);const G=18-i.boat,I=G<7?0:G<11?1:2;I!==ye&&(ye=I,M()),G<2?Y.position.lerpVectors(te,he,n.MathUtils.smoothstep(G,0,2)):G<7?Y.position.lerpVectors(he,_e,n.MathUtils.smoothstep(G,2,7)):G<11?Y.position.copy(_e):G<16?Y.position.lerpVectors(_e,he,n.MathUtils.smoothstep(G,11,16)):Y.position.copy(he),Y.visible=G<7||G>=11,H.visible=G>=11,Y.rotation.y=G>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),Y.visible=!0,z(),p("вернулся. с чем-то."),E(554),M())}Y.rotation.z=x?0:Math.sin(L*1.7)*.035,i.boat===0&&(Y.visible=!0,Y.position.y=(i.dockPending?he.y:te.y)+Math.sin(L*1.2)*.02,Y.rotation.y=i.dockPending?Math.PI+.2:0),R.position.y=.97+Math.sin(L*.9)*.055,R.rotation.y=L*.15,ne=n.MathUtils.damp(ne,1,1.1,P),A.scale.setScalar(ne),D.rotation.y=x?0:L*.23,F.material.emissiveIntensity=i.dockPending?1.5+Math.sin(L*4)*1.1:1.2}function oe(){if(i.boat>0){const P=18-i.boat;return{disabled:!0,action:P<7?"плывёт…":P<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const P=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:P===2?`${b[P].description} ${w[Math.floor((i.dockTrips-1)/3)%w.length]}`:b[P].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:V,gallery:_,beacon:F,launchOrCollect:ee,update:ue,card:oe,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:Y.position.toArray(),visible:Y.visible,cargo:H.visible,stone:R.visible,plant:A.visible,plantScale:ne,letter:X.visible,buds:k.filter(P=>P.visible).length})}}async function ff(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function Rx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",u=!s.matches,d=!1,h=!1,f=!1,g=!1,v=!1,m=0,p=null,M=0,E=0,x=0,S=!1;try{const O=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");O!==null&&(u=O==="open")}catch{}const b=(O,re,xe)=>{const Se=document.createElement(O);return re&&(Se.className=re),xe&&(Se.textContent=xe),Se},w=b("aside","resident-history");w.id="resident-history",w.setAttribute("aria-label","История мыслей и действий Головы");const _=b("div","history-heading"),R=b("div"),A=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),D=b("h3","","на полях"),k=b("span","history-eyes");k.setAttribute("aria-hidden","true"),D.append(k),R.append(A,D,b("p","history-subtitle","мысли, дела и прочее"));const X=b("button","history-close","−");X.type="button",X.setAttribute("aria-label","Свернуть историю"),X.title="Свернуть историю",_.append(R,X);const F=b("div","history-filters");F.setAttribute("role","group"),F.setAttribute("aria-label","Показывать в истории");const V=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[O,re]of V){const xe=b("button","",re);xe.type="button",xe.dataset.filter=O,xe.setAttribute("aria-pressed",String(l===O)),xe.onclick=()=>{l=O,L(!1),H.scrollTop=0;for(const Se of F.children)Se.setAttribute("aria-pressed",String(Se.dataset.filter===l))},F.append(xe)}const Y=b("button","history-new");Y.type="button",Y.hidden=!0;const H=b("div","history-scroll");H.tabIndex=0,H.setAttribute("aria-label","Записи, от новых к старым");const $=b("ol","history-list"),W=b("p","history-empty","собираю заметки…");H.append($,W);const J=b("div","history-foot"),Z=b("span","history-live","подключаюсь…"),te=b("span","history-count"),he=b("button","history-retry","повторить подключение");he.type="button",he.hidden=!0,he.onclick=()=>{C(),window.dispatchEvent(new Event("beznogim:retry"))},J.append(Z,te,he),w.append(_,F,Y,H,J);const _e=b("button","history-toggle");_e.type="button",_e.setAttribute("aria-controls",w.id);const ye=b("span","","на полях"),ne=b("span","history-badge");ne.hidden=!0,_e.append(b("span","history-toggle-icon","◌"),ye,ne),document.body.append(w),document.querySelector(".footer-actions").append(_e);function z(O,re=!0){if(u=O,w.hidden=!u,_e.hidden=u,_e.setAttribute("aria-expanded",String(u)),re)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(H.scrollTop<30?ee():ue(),X.focus({preventScroll:!0})):re&&_e.focus({preventScroll:!0})}w.hidden=!u,_e.hidden=u,_e.setAttribute("aria-expanded",String(u)),_e.onclick=()=>{z(!0),(g||!h)&&C()},X.onclick=()=>z(!1),s.addEventListener("change",()=>{let O=!s.matches;try{const re=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");re!==null&&(O=re==="open")}catch{}z(O,!1)}),document.addEventListener("keydown",O=>{O.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&z(!1)});function ee(){m=0,ne.hidden=!0,Y.hidden=!0}function ue(){ne.textContent=String(m),ne.hidden=!m,Y.textContent=`↑ к новым · ${m}`,Y.hidden=!(u&&m)}Y.onclick=()=>{H.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),ee()},H.addEventListener("scroll",()=>{H.scrollTop<30&&ee()},{passive:!0});function oe(O){return l==="all"||(l==="thoughts"?O.type==="muse"||O.type==="say":O.type!=="muse"&&O.type!=="say")}function P(O,re){const xe=O.type==="muse"||O.type==="say",Se=b("li",`history-entry ${xe?"history-thought":"history-action"}${re?" is-new":""}`);Se.dataset.eventId=String(O.id),Se.dataset.type=O.type;const B=b("div","history-meta"),ze=b("time","",r.format(O.time*1e3));ze.dateTime=new Date(O.time*1e3).toISOString(),ze.title=o.format(O.time*1e3)+" · "+ze.textContent+" мск";const Te={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return B.append(b("span","",Te[O.type]||"во дворе"),ze),Se.append(B,b("p","",O.text)),Se}function L(O,re=new Set){const xe=H.scrollTop>30,Se=H.getBoundingClientRect().top,B=xe?[...$.querySelectorAll("[data-event-id]")].find(de=>de.getBoundingClientRect().bottom>Se):null,ze=B==null?void 0:B.dataset.eventId,Te=B==null?void 0:B.getBoundingClientRect().top,N=H.scrollTop,y=document.createDocumentFragment();let se="";const ae=[...i.values()].sort((de,be)=>be.id-de.id).filter(oe);for(const de of ae){const be=o.format(de.time*1e3);if(be!==se){const Re=b("li","history-day",be);y.append(Re),se=be}y.append(P(de,O&&re.has(de.id)&&!xe))}if($.replaceChildren(y),W.hidden=ae.length>0,W.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ae.length&&(W.textContent="в этом фильтре пока нет записей."),te.textContent=i.size?v?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",he.hidden=!(g||!h&&!f),he.disabled=f,ze){const de=$.querySelector(`[data-event-id="${ze}"]`);H.scrollTop=N+(de?de.getBoundingClientRect().top-Te:0)}else xe||(H.scrollTop=0)}function G(O,re=!1){if(!O||!Array.isArray(O.entries))return!1;const xe=Math.max(0,...i.keys()),Se=new Set;let B=0,ze=0;for(const Te of O.entries)!Te||typeof Te!="object"||!Number.isSafeInteger(Te.id)||Te.id<1||!Number.isFinite(Te.time)||Math.abs(Te.time)>864e10||!a.has(Te.type)||typeof Te.text!="string"||!Te.text.trim()||(ze++,i.has(Te.id)||(S=!0,i.set(Te.id,{id:Te.id,time:Te.time,type:Te.type,text:Te.text.slice(0,280)}),Se.add(Te.id),Te.id>xe&&oe(Te)&&B++));if(O.entries.length&&!ze)return!1;if(v=v||!!O.has_older||!!O.has_more||i.size>t,i.size>t){const Te=[...i.keys()].sort((N,y)=>N-y);for(const N of Te.slice(0,i.size-t))i.delete(N)}return d&&!re&&B&&(!u||H.scrollTop>30)&&(m+=B,ue()),(Se.size||!d)&&L(d&&!re,Se),!0}function I(){if(!(!i.size||!S)){S=!1,E=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:E,has_older:v,entries:[...i.values()]}))}catch{}}}function K(){try{const O=localStorage.getItem(c);if(!O||O.length>1e6)return;const re=JSON.parse(O);if(re.version!==1||!Number.isFinite(re.saved_at)||re.saved_at<=0)return;G(re,!0),E=re.saved_at,d=i.size>0,S=!1}catch{}}async function C(){if(!f){f=!0,x=performance.now(),he.disabled=!0;try{const O=await ff(n+"/api/history");if(!G(O,!0))throw Error("invalid-public-history");h=!0,d=!0,g=!1,I(),L(!1)}catch{g=!0,L(!1)}finally{f=!1,he.disabled=!1,q()}}}function q(){var xe;const O=!p||performance.now()-M>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";w.classList.toggle("history-offline",O);const re=E?` · сохранено ${r.format(E)} мск`:" · записи на устройстве";Z.textContent=O?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",O&&i.size&&(Z.textContent+=re),!O&&g&&(Z.textContent+=" · архив не дошёл"),Z.title=((xe=p==null?void 0:p.action)==null?void 0:xe.label)||""}function Q(O){var ze;const re=Math.max(0,...i.keys()),xe=Array.isArray((ze=O.history)==null?void 0:ze.entries)?O.history.entries:[];p=O,M=performance.now(),G(O.history)&&i.size&&(d=!0,I()),q();const Se=xe.filter(Te=>Te&&Number.isSafeInteger(Te.id)).map(Te=>Te.id);(re&&Se.length&&Math.min(...Se)>re&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&C()}window.addEventListener("beznogim:state",O=>Q(O.detail)),window.__beznogimState&&Q(window.__beznogimState),K(),L(!1),q(),C(),window.addEventListener("online",()=>{(g||!h)&&C()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&C()}),setInterval(()=>{q(),(g||!h)&&C()},15e3)}function Cx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,u=0,d=0,h=!1,f=!1,g=!1,v=0,m=null,p=null,M=null,E="",x=!0;const S=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const w=document.createElement("span");w.className="thought-kicker",w.textContent="про себя";const _=document.createElement("p");b.append(w,_),document.body.append(b);const R=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),A=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";Rx({api:A,enabled:R});const D=document.querySelector(".territory-nav"),k=document.createElement("div");k.className="resident-strip",k.hidden=!0;const X=document.createElement("span");X.className="resident-status",X.textContent="подключаюсь к голове";const F=document.createElement("div");F.className="resident-vitals",F.hidden=!0,F.setAttribute("aria-label","Самочувствие Головы");const Y=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(P=>{const L=document.createElement("div");return L.className="need-meter",L.dataset.need=P.key,L.style.setProperty("--need-color",P.color),L.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${P.icon}</svg><div class="need-detail"><div class="need-heading"><b>${P.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${P.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,F.append(L),{key:P.key,card:L,value:L.querySelector(".need-value"),bar:L.querySelector(".need-track")}}),H=document.createElement("button");H.type="button",H.textContent="к голове",H.onclick=()=>{f=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),_e()};const $=document.createElement("button");$.type="button",$.textContent="поиграть самому",$.onclick=()=>{f=!f,g=!1,_e()};const W=document.createElement("button");W.type="button",W.textContent="мысли",W.setAttribute("aria-pressed","true"),W.onclick=()=>{x=!x,W.setAttribute("aria-pressed",String(x))},k.append(X,F,H,$,W),D.append(k);function J(){return Date.now()/1e3+d}function Z(){return l&&J()-l.heartbeat<60&&l.resident_status!=="stopped"}function te(){return h&&l&&!f}function he(){var G,I;const P=(I=(G=l==null?void 0:l.mechanics)==null?void 0:G.vitals)==null?void 0:I.public;if(!P){F.hidden=!0;return}const L=K=>Math.max(0,Math.min(100,Math.round(Number(K)||0)));F.hidden=!1;for(const K of Y){const C=L(P[K.key]);K.value.textContent=String(C),K.bar.setAttribute("aria-valuenow",String(C)),K.card.style.setProperty("--need-fill",String(C/100)),K.card.dataset.low=String(C<=20)}}function _e(){const P=f?"ты в песочнице":h?Z()?l!=null&&l.action&&l.action.ends>J()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";P!==E&&(E=P,X.textContent=P),$.textContent=f?"вернуться к голове":"поиграть самому",H.setAttribute("aria-pressed",String(g))}function ye(P){var G,I;if(!P||P.version!==1||!Array.isArray(P.position)||P.position.length!==3||!P.position.every(Number.isFinite)||!P.objects||!Number.isFinite(P.server_time)||!Number.isFinite(P.heartbeat)||l&&(P.server_time<l.server_time||P.server_time===l.server_time&&Number.isFinite(P.revision)&&Number.isFinite(l.revision)&&P.revision<l.revision))return;if(d=P.server_time-Date.now()/1e3,l=P,u=performance.now(),h=!0,k.hidden=!1,m&&((G=P.release)!=null&&G.commit)&&m!==P.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((I=P.release)==null?void 0:I.commit)||m;const L=P.speech;L&&L.time>v&&L.until>J()&&(v=L.time,f||a(L.text)),window.__beznogimState=P,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:P})),he(),_e()}function ne(){const P=l.action;if((P==null?void 0:P.kind)==="move"){const L=Math.max(0,Math.min(1,(J()-P.started)/Math.max(.001,P.ends-P.started)));return P.from.map((G,I)=>G+(P.to[I]-G)*L)}return l.position}function z(){if(!te())return;const P=l.objects;P.engine&&(t.running=!!P.engine.running),P.workshop&&(t.roof=P.workshop.roof_open?1:0),P.radio&&(t.radio=P.radio.station,p!==t.radio&&(p=t.radio,o())),P.garden&&(t.harvest=P.garden.harvest,M!==null&&t.harvest>M&&c(),M=t.harvest);const L=l.action;t.brew=(L==null?void 0:L.effect)==="brew"?Math.max(0,L.ends-J()):0,t.loop=0,_e()}function ee(){if(!te()){b.hidden=!0;return}const P=ne();n.position.set(P[0],P[1]+Math.sin(J()*1.4)*.1,P[2]),e.set(...P),g&&i.target.lerp(n.position,.08);const L=l.musing;if(x&&Z()&&(L!=null&&L.text)&&L.until>J()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==L.text&&(_.textContent=L.text),S.copy(n.position),S.y+=1.8,S.project(s),S.z>=-1&&S.z<=1&&Math.abs(S.x)<1&&Math.abs(S.y)<1){b.hidden=!1;const G=b.offsetWidth,I=b.offsetHeight,K=Math.max(G/2+12,Math.min(innerWidth-G/2-12,(S.x+1)*innerWidth/2));let C=(1-S.y)*innerHeight/2-18;const q=D.getBoundingClientRect(),Q=K-G/2<q.right&&K+G/2>q.left?q.bottom+12:18,O=C-I<Q;O&&(C=Math.max(Q+I,(1-S.y)*innerHeight/2+70+I)),C=Math.min(innerHeight-70,Math.max(I+18,C)),b.classList.toggle("below-head",O),b.style.transform=`translate3d(${Math.round(K)}px,${Math.round(C)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function ue(){te()&&(f=!0,g=!1,_e())}function oe(){if(!R)return;k.hidden=!1;let P=!1;async function L(){if(!P){P=!0;try{const I=await ff(A+"/api/state");ye(I),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-u>35e3)&&(h=!1),_e()}finally{P=!1}}}try{const I=new EventSource(A+"/api/events");I.addEventListener("state",K=>{try{ye(JSON.parse(K.data))}catch{}}),I.onerror=()=>{h=!1,_e()}}catch{h=!1,_e()}L();function G(){(!h||!l||performance.now()-u>3e4)&&L()}window.addEventListener("online",G),window.addEventListener("beznogim:retry",L),document.addEventListener("visibilitychange",()=>{document.hidden||G()}),setInterval(()=>{l&&performance.now()-u>35e3&&(h=!1),_e(),G()},15e3)}return i.addEventListener("start",()=>{g=!1,_e()}),oe(),{sync:z,place:ee,localPlay:ue,unfollow:()=>{g=!1},watching:te,inspect:()=>{var P;return{connected:h,sandbox:f,follow:g,alive:!!Z(),revision:l==null?void 0:l.revision,release:(P=l==null?void 0:l.release)==null?void 0:P.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!b.hidden,position:l?ne():null}}}}const Px=120,Lx=24,Ix=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"прыгающий гараж"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Xn={size:Px,sectorSize:Lx,sectors:Ix};function Dx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new Gi;c.name="unsettled-territory",n.add(c);const l=Xn.size/2,u=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],d=new Gr;u.forEach(([A,D],k)=>k?d.lineTo(A,-D):d.moveTo(A,-D)),d.closePath();const h=new Ks(d,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const f=new mn(h,new Us({color:"#233e35",roughness:1}));f.receiveShadow=!0,c.add(f);let g=8409;const v=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new tc(new Vr(1,0),new Us({color:"#8a9980",roughness:1}),150),p=new tc(new fs(1,1,4),new Us({color:"#9aa880",roughness:1}),850),M=new Bt;for(const[A,D,k]of[[m,150,!0],[p,850,!1]]){for(let X=0;X<D;X++){let F,V;do F=(v()-.5)*(Xn.size-10),V=(v()-.5)*(Xn.size-10);while(Math.abs(F)<11&&Math.abs(V)<9);const Y=k?.15+v()*.48:.12+v()*.42;M.position.set(F,-1.7+Y*.25,V),M.rotation.set(0,v()*6.28,k?v()*.25:0),M.scale.set(k?Y*1.3:.07,Y,k?Y:.07),M.updateMatrix(),A.setMatrixAt(X,M.matrix)}A.instanceMatrix.needsUpdate=!0,c.add(A)}const E=new Us({color:"#c1b692",roughness:1});for(let A=0;A<16;A++){const D=new mn(new Pi(1.15,.12,.65),E);D.position.set(-.6,-.06-A*.105,5.8+A*.7),D.receiveShadow=!0,c.add(D)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const S=document.createElement("dialog");S.id="territory-dialog",S.setAttribute("aria-labelledby","territory-title"),S.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(S);const b=S.querySelector("#territory-grid");for(const A of Xn.sectors){const D=document.createElement("button");D.type="button",D.dataset.sector=A.id,D.className=A.status==="settled"?"settled":"",D.textContent=A.status==="settled"?`● ${A.id==="0:0"?"двор":A.name}`:`· ${A.id}`,D.setAttribute("aria-label",`${A.name}, ${A.id}`),D.onclick=()=>{S.close(),s(A.x,A.z,A.status==="settled")},b.append(D)}document.querySelector("#territory-map").onclick=()=>S.showModal(),document.querySelector("#world-overview").onclick=r,S.querySelector("#territory-close").onclick=()=>S.close(),S.querySelector("#territory-home").onclick=()=>{S.close(),o()};const w=x.querySelector("#territory-location");let _="";function R(){const A=a()||t.target,D=Math.round(A.x/Xn.sectorSize),k=Math.round(A.z/Xn.sectorSize),X=`${D}:${k}`;if(X!==_){_=X;const F=Xn.sectors.find(V=>V.id===X);w.textContent=`${(F==null?void 0:F.status)==="settled"?F.name:"свободная земля"} · ${X}`;for(const V of b.children)V.classList.toggle("current",V.dataset.sector===X)}}return{half:l,update:R,inspect:()=>({size:Xn.size,sectorSize:Xn.sectorSize,sectors:Xn.sectors.length,settled:Xn.sectors.filter(A=>A.status==="settled").length,visible:n.visible,sector:_})}}function Nx({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,paperBoat:f,batchStatic:g,changed:v,chime:m}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},E=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const S=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,S),a([0,.46,0],[1.22,.08,1.3],s.dark,S);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const O of[-.62,.62])for(const re of[-.64,.64])u([O,.46,re],[O,1.45,re],.024,s.copper,S);for(const O of[-.62,.62])a([O,.96,0],[.018,.95,1.28],b,S);a([0,.96,-.64],[1.24,.95,.018],b,S);const w=o([0,1.45,-.64],S);for(const O of[-.62,.62])u([O,0,0],[O,.36,.64],.026,s.copper,w);for(const O of[-.62,.62])u([O,.36,.64],[O,0,1.28],.026,s.copper,w);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,w);const _=a([0,.18,.32],[1.26,.025,.72],b,w);_.rotation.x=-.51;const R=a([0,.18,.96],[1.26,.025,.72],b,w);R.rotation.x=.51;const A=o([0,.52,0],S);l([0,.2,0],.026,.4,s.leaf,A);for(const O of[-1,1]){const re=c([O*.15,.27,0],[.22,.055,.09],s.leaf,A);re.rotation.z=O*.35}const D=c([0,.25,.12],[.23,.16,.27],s.copper,A),k=c([.42,.58,.46],[.15,.1,.18],s.copper,S);k.visible=M.wins>0;const X=o([-.76,.7,.69],S);a([0,.28,0],[.13,.66,.06],s.cream,X);const F=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),X);c([0,-.06,.04],.065,s.rust,X),h("ПАРНИК",[0,.3,.716],.93,.22,S,{size:49});const V=d([0,2.05,0],.46,.016,s.mint,S);V.visible=M.trace;const Y=[];for(let O=0;O<6;O++)Y.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),S));g(S,[w,A,X,V,k,...Y]),g(w,[]),g(A,[D]),g(X,[F]);let H=0,$=0;function W(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),H=0,v()}function J(O){if(M.mode!=="playing")return;const re={heat:2,wait:0,vent:-2};O in re&&(M.temp+=E[M.turn]+re[O],M.turn++,M.temp>6?(M.mode="hot",H=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),k.visible=!0,x(),m(660)),v())}function Z(){let O="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(O=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${E[M.turn]>0?"+":""}${E[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(O=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(O=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(O="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:O,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const te=o([0,0,0],t);te.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,te),a([0,-.42,0],[6.8,.08,5.6],s.dark,te);for(const O of[-3.2,3.2])for(const re of[-2.6,2.6])u([O,-.4,re],[O,4,re],.055,s.copper,te);for(const O of[-3.2,3.2])u([O,4,-2.6],[O,5.7,0],.055,s.copper,te),u([O,5.7,0],[O,4,2.6],.055,s.copper,te);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,te),a([-3.2,1.8,0],[.025,4.4,5.2],b,te),a([0,1.8,-2.6],[6.4,4.4,.025],b,te),h("СОН / 01",[0,-.12,2.93],2.2,.38,te,{size:52});const he=o([0,1.6,0],te);c([0,0,0],1.16,r("#5f9c85"),he);for(let O=0;O<10;O++){let re=O*2.4;const xe=c([Math.sin(re)*.95,Math.cos(O*1.2)*.6,Math.cos(re)*.95],[.35,.2,.3],s.leaf,he);xe.rotation.y=re}d([0,0,0],1.32,.028,s.copper,he,[.4,0,.2]);const _e=o([0,1.6,0],te),ye=[];for(let O=0;O<28;O++){const re=a([0,0,0],[.53,.11,.32],O%4?s.cream:s.concrete,_e);ye.push(re)}const ne=f(te,[1.7,-.05,1],1.65),z=c([0,.65,0],.13,s.cream,ne),ee=o([0,.65,0],ne);ee.visible=!1;for(let O=0;O<8;O++){let re=O/8*Math.PI*2;u([Math.sin(re)*.27,Math.cos(re)*.27,0],[Math.sin(re)*.5,Math.cos(re)*.5,0],.026,s.light,ee)}const ue=i.clone(!0);te.add(ue),ue.scale.setScalar(.72),ue.position.set(-2,1,1.3),ue.rotation.z=-.25;const oe=o([-2,-.05,1.3],te);l([0,0,0],.55,.3,s.cream,oe),d([.58,0,0],.25,.04,s.copper,oe,[0,0,0]);const P=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,te);P.rotation.y=.2;let L=0,G=0,I=!1;g(te,[he,_e,ne,ue]),g(he,[]);function K(){I=!0,L=0,G=0,te.visible=!0,e.visible=!1,v()}function C(){I=!1,te.visible=!1,e.visible=!0,v()}function q(){I&&(L===3?(L=0,G=0):(L++,m(220+L*110),L===3&&(M.trace=!0,V.visible=!0,x())),v())}function Q(O,re){$=n.MathUtils.damp($,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,O),w.rotation.x=$,A.scale.y=n.MathUtils.damp(A.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,O),D.visible=M.mode==="won",F.scale.y=.3*Math.max(.05,M.temp/8),F.position.y=-.015+M.temp/8*.15,V.rotation.z=Math.sin(re*.3)*.15,H=Math.max(0,H-O),Y.forEach((xe,Se)=>{xe.visible=H>0;const B=(3-H+Se*.18)%1.5;xe.position.set(Math.sin(Se*2)*B*.35,1.5+B,Math.cos(Se*2)*B*.35),xe.scale.setScalar(.1*(.4+B))}),I&&(G=n.MathUtils.damp(G,L,2,O),he.rotation.y=re*.08,ye.forEach((xe,Se)=>{const B=Se/28*Math.PI*2+re*.055*Math.min(1,G),ze=Math.min(1,G);xe.position.set(Math.sin(B)*(1.8+ze*.35),Math.cos(B)*(1.8-ze*1.5),Math.cos(B)*ze*1.5),xe.rotation.set(0,-B*ze,Math.PI/2-B*(1-ze))}),_e.rotation.y=G*.32,ne.position.y=-.05+G*1.12,ne.position.x=1.7-G*.32,ne.rotation.y=.2+G*.35,z.scale.setScalar(.13*(1+Math.max(0,G-2)*2)),ee.visible=G>2.2,ee.rotation.z=re*.22,ue.position.y=1+Math.sin(re*.8)*.06)}return{house:S,start:W,step:J,card:Z,update:Q,enter:K,exit:C,breathe:q,inspect:()=>({...M,weather:[...E],dream:I,dreamStep:L,phase:G,lidAngle:$,rootVisible:e.visible,dreamVisible:te.visible,boatY:ne.position.y,rays:ee.visible})}}function Ux({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:g,chime:v}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const p=r("#c39860"),M=r("#e0c58b"),E=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),S=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let ne=0;ne<13;ne++){const z=.15+ne/12*Math.PI*1.42,ee=Math.sin(z)*3.65,ue=Math.cos(z)*3.65,oe=c([ee,.48,ue],[.75,1.08,.19],M,m);oe.rotation.y=z,ne%3===0&&h([ee,.48,ue],.15,.048,E,m,[Math.PI/2,0,0]).rotation.set(0,z,0)}f("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const b=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],E,b);for(let ne of[-1.15,1.15])for(let z of[-.63,.63])c([ne,-.23,z],[.12,.5,.12],s.copper,b);for(let ne of[-.79,.79])c([0,.36,ne],[2.72,.65,.14],S,b);for(let ne of[-1.32,1.32])c([ne,.38,0],[.14,.68,1.55],S,b);const w=c([0,.18,0],[2.49,.045,1.49],x,b),_=l([-.84,.38,0],[.34,.14,.54],s.cream,b),R=i.clone(!0);m.add(R),R.scale.setScalar(.54),R.position.set(.3,.83,.45),R.rotation.z=-.35;const A=a([0,0,0],R);for(const ne of[-.23,.23])l([ne,.2,.611],[.15,.11,.025],s.black,A),c([ne,.2,.64],[.2,.018,.012],s.copper,A);const D=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,D),u([0,.29,0],.44,.022,E,D),h([.55,0,0],.24,.055,s.copper,D,[0,0,0]),f("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const k=[];for(let ne=0;ne<7;ne++){const z=a([-1.92+ne*.33,.2+ne*.29,1.45-ne*.29],m);c([0,0,0],[.7,.13,.42],s.cream,z);for(let ee of[-.2,.2])c([0,.07,ee],[.7,.12,.05],s.copper,z);k.push(z)}const X=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],x,m)),F=Array.from({length:3},(ne,z)=>{const ee=h([.65,.2,0],.23+z*.16,.012,s.mint,b);return ee.scale.z=.6,ee}),V=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,V),V.rotation.z=.55;const Y=[];for(let ne=0;ne<9;ne++){const z=ne*2.4;Y.push(l([Math.sin(z)*3,3.2+ne%3*.28,Math.cos(z)*2],.025,s.cream,m))}let H=!1,$=0,W=0,J=!1;try{J=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const Z=a([26.6,-.86,.65],t);Z.visible=J,u([0,0,0],.15,.2,s.cream,Z),u([0,.104,0],.125,.014,x,Z),h([.16,0,0],.07,.02,s.copper,Z,[0,0,0]),g(m,[b,R,D,...k,...X,...Y,V]),g(b,[w,_,...F]),g(D,[]),g(Z,[]),k.forEach(ne=>g(ne,[]));function te(){H=!0,$=0,W=0,m.visible=!0,t.visible=!1,ye(0,0)}function he(){H=!1,m.visible=!1,t.visible=!0}function _e(){if(H&&($=$===3?0:$+1,v(165+$*55),$===3)){J=!0,Z.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function ye(ne,z){H&&(W=n.MathUtils.damp(W,$,2.4,ne),k.forEach((ee,ue)=>{const oe=Math.min(1,W/2),P=-1.92+ue*.33,L=.2+ue*.29,G=1.45-ue*.29;ee.position.set(n.MathUtils.lerp(P,-1.72+ue*.39,oe),n.MathUtils.lerp(L,1.95-ue*.22,oe),n.MathUtils.lerp(G,-.32+ue*.055,oe)),ee.rotation.z=-oe*.21}),w.position.y=.18+W*.09,_.position.y=.38+W*.09,R.position.y=.83+W*.09+Math.sin(z*.6)*.025,R.rotation.z=-.35-W*.13,D.rotation.z=-Math.min(1,W)*.45,X.forEach((ee,ue)=>{const oe=(z*.16+ue/16)%1;ee.visible=W>.05,ee.position.set(-1.7+oe*3,2.14-oe*1.62,-.32+oe*.25),ee.scale.set(.07,.1+Math.sin(oe*Math.PI)*.04,.07)}),F.forEach((ee,ue)=>{ee.visible=W>.4,ee.position.y=w.position.y+.034,ee.scale.setScalar(1+Math.sin(z*.5+ue)*.08),ee.scale.z*=.6}),V.rotation.z=.55+W*.21,A.visible=W>1.8)}return{enter:te,exit:he,pour:_e,update:ye,inspect:()=>({active:H,step:$,phase:W,trace:J,roomVisible:m.visible,rootVisible:t.visible,waterY:w.position.y,sleeperY:R.position.y,channel:k.map(ne=>ne.position.toArray()),droplets:X.filter(ne=>ne.visible).length})}}function Ox({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const f of[-.23,.23])t([f,.2,.611],[.15,.11,.025],r.black,c),i([f,.2,.64],[.2,.018,.012],r.copper,c);let l=null,u=0;function d(f){l=f,u=Number(f.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:f})=>d(f)),window.__beznogimState&&d(window.__beznogimState);function h(f){const g=l==null?void 0:l.action;a.visible=!!f&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),c.visible=a.visible}return{update:h,inspect:()=>{var f;return{visible:a.visible,ends:((f=l==null?void 0:l.action)==null?void 0:f.kind)==="sleep"?l.action.ends:null}}}}const dc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function Fx(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function zx(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?dc():n}function Bx(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function kx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,batchStatic:f,chime:g,changed:v}){const m=o([0,0,0],e);m.name="dream-06-cloud-heating",m.visible=!1;const p=r("#203f49"),M=r("#dce6d7"),E=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),S=r("#598e9d"),b=r("#ede1c3");l([0,-.3,0],4,.4,p,m),d([0,-.06,0],3.85,.045,E,m);for(let G=0;G<8;G++)u([-3+G*.85,-.06,-2.5],[-3+G*.85,-.06,2.5],.012,S,m);const w=o([-2.35,0,.2],m);a([0,.2,0],[1.7,.35,1.3],s.concrete,w);for(let G=0;G<6;G++){const I=-.65+G*.26;a([I,1.2,0],[.16,1.8,.66],E,w),d([I,2.12,0],.27,.065,E,w,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,E,w),u([-.8,1.95,.2],[.8,1.95,.2],.11,E,w);const _=c([-2.35,1.15,.87],.42,S,m);d([-2.35,1.15,.87],.48,.024,b,m,[.5,.3,0]);const R=["ЗЕМЛЯ","ОБЛАКО"].map((G,I)=>{const K=o([-3+I*1.3,.4,2.1],m);a([0,0,0],[.87,.14,1.13],p,K);for(let C=0;C<4;C++)a([-.27+C*.18,.09,-.28],[.08,.03,.25],x,K);return h(G,[0,.12,.32],.78,.22,K,{size:52}).rotation.x=-Math.PI/2,K}),A=d([-2.8,.57,2.1],.5,.035,x,m);A.rotation.x=Math.PI/2;const D=o([0,0,0],m);u([-1.5,.45,.2],[-.7,.45,.2],.09,E,D),u([-.7,.45,.2],[-.7,3.7,.2],.09,E,D),u([-.7,3.7,.2],[1.2,3.7,.2],.09,E,D);const k=Array.from({length:7},(G,I)=>c([.1+I*.45,3.8+I%2*.22,-.8],[.65,.45,.63],M,m)),X=o([1.25,3.1,-.8],m);a([0,.2,0],[2.6,.1,1.7],b,X);for(const G of[-1.15,1.15])for(const I of[-.7,.7])u([G,.2,I],[G,1.28,I],.045,E,X);const F=o([0,1.26,0],X);a([-.61,.15,0],[1.45,.12,1.95],M,F).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,F).rotation.z=-.35;const V=[a([-.68,.8,.72],[.48,.57,.06],x,X),a([.68,.8,.72],[.48,.57,.06],x,X)],Y=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],H=[],$=[];Y.forEach(([G,I,K],C)=>{const q=o([G,I,K],m);H.push(q),a([0,.05,0],[1.2,.13,1.1],s.concrete,q);for(const O of[-.5,.5])u([O,.1,-.38],[O,1.1,-.38],.045,E,q);u([-.5,1.1,-.38],[0,1.5,-.38],.045,E,q),u([0,1.5,-.38],[.5,1.1,-.38],.045,E,q);const Q=o([1.25,3.9,-.05],m);$.push(Q),a([0,0,0],[.65,.72,.12],b,Q),a([0,0,.071],[.48,.55,.035],x,Q),u([0,-.28,.1],[0,.28,.1],.018,E,Q),u([-.23,0,.1],[.23,0,.1],.018,E,Q)});const W=Array.from({length:10},()=>c([0,0,0],.065,x,m)),J=i.clone(!0);J.scale.setScalar(.4),J.position.set(-2,.9,-1.7),m.add(J),h("СОН / 06",[0,-.04,3.3],1.5,.29,m,{size:52}).rotation.x=-Math.PI/2;const Z=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],E,Z),a([0,0,.04],[.13,.22,.02],x,Z),Z.visible=!1,f(m,[w,_,...R,A,D,...k,X,...H,...$,...W,J]),f(w,[]),f(D,[]),f(X,[F,...V]),f(F,[]),H.forEach(G=>f(G,[])),$.forEach(G=>f(G,[])),R.forEach(G=>f(G,[]));let te=dc(),he=!1,_e=0,ye=0,ne=!1;try{ne=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}Z.visible=ne;function z(){te=dc(),_e=0,ye=0,he=!0,m.visible=!0,t.visible=!1,P(0,0)}function ee(){he=!1,m.visible=!1,t.visible=!0}function ue(G){te=Fx(te,G),g(G==="sky"?330:165),v()}function oe(){te=zx(te),g(te.phase==="raining"?440:220),v()}function P(G,I){if(!he)return;const K=te.phase;te=Bx(te,G);const C=te.phase==="heating",q=te.target==="sky",Q=q?C?te.progress:["cloud","raining","settled"].includes(te.phase)?1:0:0;if(_e=Q,ye=te.phase==="raining"?te.progress:te.phase==="settled"?1:0,X.visible=Q>.02,X.scale.setScalar(Math.max(.001,Q)),X.position.y=3.1+Math.sin(I*.9)*.05,k.forEach((O,re)=>{O.position.y=3.8+re%2*.22+Q*.5-ye*.25,O.scale.set(.65+Q*.12,.45*(1-Q*.6),.63)}),_.scale.setScalar(.42*(C&&!q?1+Math.sin(te.progress*Math.PI)*.75:1)),_.rotation.y=I*.2,$.forEach((O,re)=>{const xe=Math.max(0,Math.min(1,ye*1.6-re*.3)),Se=xe*xe*(3-2*xe),B=Y[re];O.position.set(1.25+(B[0]-1.25)*Se,3.9+(B[1]+.8-3.9)*Se,-.05+(B[2]+.06+.05)*Se),O.rotation.z=(1-Se)*Math.sin(I+re)*.1,O.visible=["cloud","raining","settled"].includes(te.phase)}),V.forEach(O=>O.visible=te.phase==="cloud"||C),A.position.x=q?-1.7:-3,W.forEach((O,re)=>{O.visible=C;const xe=(I*.7+re/10)%1;q?xe<.72?O.position.set(-.7,.45+xe/.72*3.25,.2):O.position.set(-.7+(xe-.72)/.28*1.9,3.7,.2):O.position.set(-2.35+Math.sin(xe*Math.PI*2)*.6,.5+xe*1.8,.87)}),te.trace&&!ne){ne=!0,Z.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}te.phase!==K&&v()}return{enter:z,exit:ee,choose:ue,act:oe,update:P,text:()=>({ready:te.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:te.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[te.phase],button:()=>te.phase==="raining"?"окна падают…":te.phase==="heating"?"тепло идёт…":te.phase==="settled"?"увидеть сон снова":te.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...te,active:he,trace:ne,warmth:_e,spent:ye,globeScale:_.scale.x/.42,rootVisible:t.visible,roomVisible:m.visible,houseVisible:X.visible,windows:$.map(G=>G.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...Y.map(G=>[G[0],.8,G[2]])]})}}function fc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function Gx(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function Vx(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?fc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function Hx(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function Wx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:g,chime:v,changed:m}){const p=a([0,0,0],e);p.name="dream-05-self-measuring-instrument",p.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),E=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),S=r("#1c4147"),b=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,S,p),u([0,-.16,0],3.45,.08,b,p),h([0,-.1,0],3.65,.07,s.copper,p);for(let O=0;O<5;O++)h([0,-.1+O*.006,0],.7+O*.52,.009,E,p);const w=a([0,0,0],p);c([0,.12,-1.6],[3,.34,1.3],s.concrete,w),d([0,.3,-1.65],[0,3.75,-1.65],.12,M,w);const _=a([0,3.7,-1.4],p),R=u([0,0,-.12],1.05,.2,S,_);R.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,_,[0,0,0]);const A=a([-.85,0,.02],_),D=a([.85,0,.02],_);c([.425,0,0],[.85,1.72,.1],x,A),c([-.425,0,0],[.85,1.72,.1],x,D);for(let O=0;O<12;O++){const re=O*Math.PI/6;d([Math.sin(re)*.78,Math.cos(re)*.78,.09],[Math.sin(re)*.91,Math.cos(re)*.91,.09],.016,s.copper,_)}const k=a([0,0,.14],_);d([0,-.15,0],[0,.69,0],.025,S,k),l([0,0,0],.065,s.copper,k);const X=[a([-2.35,1.65,0],p),a([2.35,1.65,0],p)];for(const[O,re]of X.entries())c([0,0,0],[.24,1.65,.38],M,re),c([O===0?.38:-.38,-.76,0],[.95,.18,.38],E,re),l([0,.84,0],.19,s.copper,re);const F=[],V=[],Y=[];for(let O=0;O<12;O++){const re=-2.45+O*.445;V.push(new n.Vector3(re,2.52,0));const xe=O/11,Se=xe*Math.PI*1.35;Y.push(new n.Vector3(2.35*Math.cos(Se)*(1-xe*.85),.24+xe*3,2.05-xe*3.2));const B=a(V[O].toArray(),p);F.push(B),c([0,0,0],[.42,.16,.57],M,B),c([0,.09,.15],[.03,.012,.2],s.copper,B)}const H=l([0,.7,0],[.45,.64,.45],E,p),$=i.clone(!0);p.add($),$.scale.setScalar(.43);const W=new n.Vector3(2.8,.65,2.15);$.position.copy(W);function J(O,re){const xe=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Te],N)=>N?xe.lineTo(ze,Te):xe.moveTo(ze,Te)),xe.closePath();const Se=new n.ExtrudeGeometry(xe,{depth:.07,bevelEnabled:!1}),B=a([0,0,0],O);return o(Se,x,null,null,B),B.scale.setScalar(re),B}const Z=J(_,.88);Z.position.set(0,.1,.2),Z.visible=!1;const te=J(Z,.22);te.position.set(-.03,-.2,.12);const he=c([-.03,-.2,.085],[.34,.44,.01],S,Z),_e=J(t,.17);_e.position.set(2.8,1.14,-2.75),_e.rotation.y=Math.PI/4,f("СОН / 05",[0,-.055,2.94],1.65,.3,p,{size:48}).rotation.x=-Math.PI/2,f("СЕБЯ?",[0,.36,-.88],1.05,.26,p,{size:52});const ye=f("?",[-1.6,.65,1.5],.48,.65,p,{size:84,bg:"#1c4147"}),ne=h([0,.12,0],.68,.035,s.light,p);g(p,[w,_,...F,...X,H,$,ye,ne]),g(w,[]),g(_,[A,D,k,Z]),g(A,[]),g(D,[]),g(k,[]),g(Z,[te,he]),g(te,[]),F.forEach(O=>g(O,[])),X.forEach(O=>g(O,[]));let z=fc(),ee=!1,ue=0,oe=0,P=!1;try{P=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}_e.visible=P;function L(){z=fc(),ue=0,oe=0,ee=!0,p.visible=!0,t.visible=!1,C(0,0)}function G(){ee=!1,p.visible=!1,t.visible=!0}function I(O){z=Gx(z,O),v(O==="self"?330:165),m()}function K(){z=Vx(z),v(z.phase==="climbing"?440:220),m()}function C(O,re){if(!ee)return;const xe=z.phase;z=Hx(z,O);const Se=z.phase==="unfolding"?z.progress:["stairs","climbing","inside"].includes(z.phase)?1:0;ue=Se*Se*(3-2*Se),oe=n.MathUtils.damp(oe,z.phase==="inside"?1:0,3,O),F.forEach((ze,Te)=>{ze.position.lerpVectors(V[Te],Y[Te],ue),ze.rotation.y=ue*(-Te*.07)});const B=z.phase==="measuring"?Math.sin(z.progress*Math.PI):0;if(X.forEach((ze,Te)=>{const N=Te===0?-1:1;ze.position.set(N*(2.35-B*1.55),1.65+ue*.4,-ue*.85),ze.rotation.z=N*ue*.65}),k.rotation.z=z.phase==="measuring"?Math.sin(z.progress*35)*.8:z.phase==="refused"?Math.sin(re*6)*.25:-ue*Math.PI*1.75,H.position.y=.7+(z.phase==="measuring"?Math.sin(z.progress*Math.PI)*1.5:Math.sin(re*1.3)*.05),H.scale.set(.45*(1-B*.16),.64*(1+B*.3),.45*(1-B*.16)),ye.visible=z.phase==="refused",ye.position.y=.65+Math.sin(re*2)*.1,A.rotation.y=oe*1.7,D.rotation.y=-oe*1.7,k.visible=oe<.2,Z.visible=z.phase==="inside",Z.rotation.z=Math.sin(re*.7)*.04,te.rotation.z=-re*.12,$.position.copy(W),$.scale.setScalar(.43),$.visible=z.phase!=="inside",["climbing","inside"].includes(z.phase)){const ze=z.phase==="inside"?1:z.progress,Te=[W,...Y.map(se=>se.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],N=ze*(Te.length-1),y=Math.min(Te.length-2,Math.floor(N));$.position.lerpVectors(Te[y],Te[y+1],Math.min(1,N-y)),$.scale.setScalar(.43*(1-ze*.8))}if(ne.position.set((z.target==="self",0),z.target==="self"?3.7:.12,z.target==="self"?-1.4:0),ne.rotation.x=z.target==="self"?0:Math.PI/2,ne.visible=["ready","refused","measuring","unfolding"].includes(z.phase),z.trace&&!P){P=!0,_e.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}xe!==z.phase&&m()}function q(){return{ready:z.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[z.phase]}return{enter:L,exit:G,choose:I,act:K,update:C,text:q,button:()=>z.phase==="inside"?"увидеть сон снова":z.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...z,active:ee,trace:P,unfold:ue,opened:oe,rootVisible:t.visible,roomVisible:p.visible,steps:F.map(O=>O.position.toArray()),jaws:X.map(O=>O.position.toArray()),drop:H.position.toArray(),head:$.position.toArray(),cursorVisible:Z.visible,cursorPosition:Z.getWorldPosition(new n.Vector3).toArray(),faceAngles:[A.rotation.y,D.rotation.y],nestedVisible:Z.visible&&te.visible,landmarks:[H.position.toArray(),[0,3.7,-1.4],W.toArray(),Y[0].toArray()]})}}const Xx=["восток","юг","запад","север"],pf=[0,2,3];function Vl(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function qx(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Yx(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==pf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function $x(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Zx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:g,chime:v,changed:m}){const p=a([0,0,0],e);p.name="dream-04-letter-above-roof",p.visible=!1;const M=r("#355b62"),E=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,p),h([0,-.26,0],3.78,.024,s.copper,p);for(let P=0;P<4;P++){const L=P*Math.PI/2,G=Math.cos(L)*3.05,I=Math.sin(L)*3.05;f(["В","Ю","З","С"][P],[G,-.23,I],.38,.28,p).rotation.x=-Math.PI/2}const S=[],b=[],w=[];for(let P=0;P<3;P++){const L=1.05+P*1.4,G=2.05-P*.27,I=a([0,L,0],p);S.push(I);for(let re=1;re<4;re++){const xe=re*Math.PI/2,Se=Math.cos(xe),B=Math.sin(xe),ze=[[.3,.3,-.3],[.3,.3,.3],[G,.04,G],[G,.04,-G]],Te=new n.BufferGeometry,N=[];for(const se of[0,1,2,0,2,3]){const[ae,de,be]=ze[se];N.push(ae*Se-be*B,de,ae*B+be*Se)}Te.setAttribute("position",new n.Float32BufferAttribute(N,3)),Te.computeVertexNormals();const y=E.clone();y.side=n.DoubleSide,o(Te,y,null,null,I),d([G*Se-G*B,.04,G*B+G*Se],[G*Se+G*B,.04,G*B-G*Se],.035,s.copper,I);for(const se of[-1,1])d([G*Se-G*B*se,.04,G*B+G*Se*se],[(G+.16)*Se-(G+.16)*B*se,.2,(G+.16)*B+(G+.16)*Se*se],.035,s.copper,I)}const K=a([G*.67,.045,0],I);d([-.32,0,0],[.3,0,0],.026,s.mint,K),d([.3,0,0],[.1,0,.13],.026,s.mint,K),d([.3,0,0],[.1,0,-.13],.026,s.mint,K),b.push(K);const C=pf[P]*Math.PI/2,q=Math.cos(C)*G*.63,Q=Math.sin(C)*G*.63,O=h([q,L+.09,Q],.16,.025,s.light,p);w.push(O),f(`${P+1}`,[G+.26,L+.14,.2],.36,.29,p,{bg:"#355b62",fg:"#f0e4b8"});for(const re of[-1,1])d([re*.3,L-.32,-.3],[re*.3,L-.03,-.3],.018,s.copper,p)}const _=a([-2.6,.16,1.5],p);c([0,0,0],[1.1,.62,.7],s.cream,_),c([0,.16,.361],[.72,.07,.025],M,_),f("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,p,{size:40});const R=i.clone(!0);p.add(R),R.scale.setScalar(.53),R.position.set(-2.6,1,1.5),R.rotation.z=-.12,f("СОН / 04",[0,-.12,3.34],1.8,.32,p,{size:48}).rotation.x=-Math.PI/2;const A=a([-1.1,.12,1.5],p);c([0,0,0],[.52,.025,.36],x,A);const D=a([-.26,.016,0],A),k=a([.26,.016,0],A);c([.13,0,0],[.26,.022,.36],x,D),c([-.13,0,0],[.26,.022,.36],x,k),d([-.25,.04,-.17],[0,.04,.1],.009,s.copper,A),d([.25,.04,-.17],[0,.04,.1],.009,s.copper,A);const X=l([0,.045,0],.055,s.light,A),F=a([0,5.3,0],p);h([0,0,0],.55,.025,s.copper,F),d([0,-.3,0],[0,.22,0],.018,s.copper,F);const V=Array.from({length:6},(P,L)=>{const G=L*Math.PI/3,I=l([Math.cos(G)*.29,0,Math.sin(G)*.29],[.21,.065,.11],x,F);return I.rotation.y=-G,I});F.visible=!1;const Y=[new n.Vector3(-1.1,.12,1.5),...w.map(P=>P.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],H=new n.BufferGeometry().setFromPoints(Y),$=new n.Line(H,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));$.computeLineDistances(),p.add($);let W=Vl(),J=!1,Z=0,te=!1,he=[Math.PI/2,Math.PI/2,Math.PI/2];try{te=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const _e=a([-3.75,1.17,-2.95],t);_e.visible=te,c([0,0,0],[.23,.012,.16],x,_e),d([-.11,.016,-.07],[0,.016,.04],.005,s.copper,_e),d([.11,.016,-.07],[0,.016,.04],.005,s.copper,_e),g(p,[...S,...w,_,R,A,F,$]),S.forEach((P,L)=>g(P,[b[L]])),g(A,[D,k,X]),g(D,[]),g(k,[]),g(_,[]),g(F,V),g(_e,[]);function ye(){J=!0,W=Vl(),Z=0,he=W.turns.map(P=>P*Math.PI/2),p.visible=!0,t.visible=!1,ue(0,0)}function ne(){J=!1,p.visible=!1,t.visible=!0}function z(P){W=qx(W,P),v(165+P*55+W.turns[P]*22),m()}function ee(){W.phase==="delivered"?(W=Vl(),Z=0):W=Yx(W),v(220),m()}function ue(P,L){if(!J)return;const G=W.phase;W=$x(W,P),Z=n.MathUtils.damp(Z,W.phase==="delivered"?1:0,2.4,P),S.forEach((Q,O)=>{const re=W.turns[O]*Math.PI/2,xe=Math.atan2(Math.sin(re-he[O]),Math.cos(re-he[O]));he[O]+=xe*(P===0?1:1-Math.exp(-P*7)),Q.rotation.y=-he[O],Q.position.x=Z*[-2.15,1.85,0][O],Q.position.z=Z*[.45,-.65,-2.1][O],Q.rotation.z=Z*(O===0?-.16:.13)});const I=Math.min(4,W.progress),K=Math.min(3,Math.floor(I)),C=Math.min(1,I-K),q=C*C*(3-2*C);if(A.position.lerpVectors(Y[K],Y[K+1],q),A.rotation.y=L*.16,D.rotation.z=-Z*1.1,k.rotation.z=Z*1.1,X.position.y=.045+Z*.18,F.visible=W.phase==="delivered",F.rotation.y=L*.22,V.forEach((Q,O)=>{Q.position.y=Math.sin(L*.7+O)*.035}),$.visible=W.phase!=="delivered",W.trace&&!te){te=!0,_e.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}G!==W.phase&&m()}function oe(){return W.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":W.phase==="caught"?`Поймала крыша ${W.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:W.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:ye,exit:ne,turn:z,send:ee,update:ue,text:oe,directions:Xx,inspect:()=>({...W,turns:[...W.turns],active:J,trace:te,open:Z,roomVisible:p.visible,rootVisible:t.visible,roofs:S.map(P=>({position:P.position.toArray(),rotation:P.rotation.toArray().slice(0,3)})),letter:A.position.toArray(),goals:w.map(P=>P.position.toArray()),crown:F.visible})}}function Jx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,paperBoat:g,batchStatic:v,chime:m}){const p=a([0,0,0],e);p.name="dream-03-silent-dock",p.visible=!1;const M=r("#526b79"),E=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,p),u([0,-.23,0],4,.055,E,p),h([0,-.18,0],4.08,.04,s.copper,p),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,p);for(let L of[-.1,.55,1.2,1.85])c([-2.85,.07,L],[1.38,.045,.025],M,p);for(let L of[-3.4,-2.3])d([L,-.3,1.9],[L,.48,1.9],.035,s.copper,p);f("СОН / 03",[-2.85,.13,2.4],1.6,.28,p,{size:48}).rotation.x=-Math.PI/2;const S=i.clone(!0);S.position.set(-2.8,1.27,.75),S.scale.setScalar(.65),p.add(S);const b=[];for(const L of[-1,1]){const G=a([L*.12,-.04,.68],S);d([0,0,0],[L*.64,-.2,.05],.06,s.black,G),l([L*.62,-.18,.05],[.19,.095,.07],s.black,G),d([L*.58,-.18,.06],[L*.58,-.7,.06],.015,s.copper,G),l([L*.58,-.76,.06],.075,s.copper,G),v(G,[]),b.push(G)}const w=Array.from({length:3},(L,G)=>h([-1.2+G*1.25,-.17,-.25],.72,.035,G===1?s.cream:s.copper,p)),_=Array.from({length:3},(L,G)=>h([-1.2+G*1.25,-.165,-.25],.72,.013,x,p)),R=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,p),A=g(p,[-1.9,-.13,-.25],.9),D=l([0,.53,0],[.065,.09,.065],s.light,A),k=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,p);k.rotation.z=.65;const X=[];for(let L=0;L<5;L++){const G=-1.6+L*.85;d([G,-.2,-2.9],[G,1.1+L%2*.4,-2.9],.025,M,p),X.push(l([G,1.12+L%2*.4,-2.9],.035,s.light,p))}let F=!1,V=0,Y=1,H=[1,1,1],$=[0,0,0],W=0,J=0,Z=!1;try{Z=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const te=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);te.visible=Z;const he=Array.from({length:5},()=>new n.Vector3),_e=new n.CatmullRomCurve3(he),ye=new n.Vector3,ne=new n.Vector3;v(p,[S,...w,..._,R,A,k,...X]),v(S,b),v(A,[D]);function z(L){Y=n.MathUtils.clamp(Math.round(Number(L)||1),1,3)}function ee(){F=!0,V=0,H=[1,1,1],$=[0,0,0],W=0,J=0,p.visible=!0,t.visible=!1,P(0,0)}function ue(){F=!1,p.visible=!1,t.visible=!0}function oe(){if(F){if(V===3){V=0,H=[1,1,1],$=[0,0,0],J=0;return}if(H[V]=Y,V++,W=0,m(110+Y*55),V===3){Z=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function P(L,G){if(!F)return;J+=Math.min(L,.15),W+=Math.min(L,.15);for(let q=0;q<3;q++){$[q]=n.MathUtils.damp($[q],q<V?1:0,3,L);const Q=-.17+$[q]*(.95+H[q]*.42),O=.72+H[q]*.12;w[q].position.y=Q,w[q].rotation.set(Math.PI/2*(1-$[q]),Math.PI/2*$[q],0),w[q].scale.setScalar(O/.72),_[q].scale.setScalar(O/.72*(1+Math.sin(J*.9+q)*.045)),he[q+1].set(w[q].position.x,Math.max(-.1,Q),-.25)}he[0].set(-2,-.1,-.25),he[4].set(2.5,-.1,-.25);const I=(1-Math.cos(J*.55))*.5;_e.getPoint(I,ye),_e.getPoint(Math.min(.999,I+.012),ne),A.position.copy(ye),A.rotation.z=n.MathUtils.clamp(Math.atan2(ne.y-ye.y,ne.x-ye.x),-.45,.45),A.rotation.y=0,R.visible=V>0;const K=Math.min(1,W/1.8),C=Math.max(0,V-1);R.position.set(n.MathUtils.lerp(-2.5,-1.2+C*1.25,K),.35+K*(2.1+H[C]*.35),n.MathUtils.lerp(1.4,-.25,K)),R.rotation.y=J*.4,b.forEach((q,Q)=>q.rotation.z=Math.sin(J*1.2+Q*Math.PI)*(.06+V*.04)),D.position.y=.53+Math.sin(G)*.02}return{enter:ee,exit:ue,toss:oe,choose:z,update:P,inspect:()=>({active:F,step:V,force:Y,forces:[...H],lift:[...$],trace:Z,roomVisible:p.visible,rootVisible:t.visible,boat:A.position.toArray(),ringY:w.map(L=>L.position.y),ringRotation:w.map(L=>L.rotation.toArray().slice(0,3)),stone:R.position.toArray()})}}function Vh(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,u=Math.min(i,Math.max(0,360-l.age));l.age+=u,l.exposure[l.face]+=u,l[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(l.id),d=t.shelf.findIndex(h=>h.id===u);if(d<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(d,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",f={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(f),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:f,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const Kx={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Qx({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:u,sign:d,batchStatic:h,changed:f,watching:g,localPlay:v}){var G,I,K;const m=s([24,-1.55,0]);m.name="cheese-cellar";const p=i("#697b70"),M=i("#b4b89b"),E=i("#936c4d"),x=i("#e1b064"),S=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],p,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let C=-4;C<=4;C+=2)r([C,1.5,-3.43],[.16,3,.1],p,m);for(let C of[-4.4,4.4])c([C,0,-3.3],[C,3.6,-3.3],.09,t.copper,m),c([C,3.6,-3.3],[C,3.6,2.5],.09,t.copper,m),c([C,3.6,2.5],[C,0,2.5],.09,t.copper,m);d("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],E,m),r([0,0,-2.7],[7.9,.14,1.05],E,m);for(let C of[-3.8,3.8])r([C,.6,-2.7],[.14,1.4,1.05],E,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,b,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,E,m);for(let C of[2.8,3.5])a([C,.28,1.8],.26,.56,t.cream,m),a([C,.59,1.8],.12,.1,t.copper,m);const w=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let C=0;C<4;C++)r([2.25+C*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],E,m);const _=s([.5,1.02,.25],m),R=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,_),A=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),S,[0,0,0],null,_),D=l([0,.33,0],.35,.026,t.cream,_),k=s([.5,.65,2.3],m),X=[];for(let C=0;C<6;C++)X.push(o([-1.25+C*.5,0,0],.08,t.mint,k));const F=d("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});F.rotation.x=-Math.PI/2;function V(C){const q=s(C,m),Q=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,q),O=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),S.clone(),[0,0,0],null,q),re=s([0,-.14,.09],q);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,re);const xe=o([.09,.16,.27],.04,t.mint,re),Se=u(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,q),B=s([0,0,0],q);for(const[ze,Te,N]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Te,N],[.05,.05,.025],t.dark,B);return{g:q,body:Q,crust:O,steps:re,crystal:Se,holes:B,pearl:xe}}const Y=Array.from({length:6},(C,q)=>V([-3.15+q*1.26,1.42,-2.6])),H=s([0,0,0],e);for(let C=0;C<24;C++){const q=C/23;r([8.3+q*11.2,-.15-q*1.32,1.4+Math.sin(q*Math.PI)*2],[.85,.15,.75],p,H)}for(let C=0;C<5;C++)r([20+C*.7,-1.46,1.4-C*.22],[.75,.13,.7],p,H);d("СЫР →",[10.2,.35,2.4],1.5,.4,H,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,H),h(H,[]),h(m,[_,w,k,F,...Y.map(C=>C.g)]);for(const C of Y)h(C.steps,[C.pearl]),h(C.holes,[]);let $=null,W=null,J=0,Z=null,te="",he=0;try{const C=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");$=(C==null?void 0:C.state)||C,J=Number(C==null?void 0:C.clockOffset)||0}catch{}const _e=()=>Date.now()/1e3+J;function ye(C,q,Q={}){const O=Vh({state:$,mode:C,tool:q,args:Q,now:_e()});$=O.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:$,clockOffset:J}))}catch{}return O}ye("migrate");const ne=document.createElement("div");ne.id="cellar-controls",ne.hidden=!0,ne.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(ne);function z(){return W&&g()?W:Vh({mode:"migrate",state:$,now:$.updated}).public}function ee(C){Z=C;const q=C.batch;if(_.visible=!!q,F.visible=!q,w.rotation.y=C.air==="dry"?-.8:0,q){_.rotation.z=q.face?Math.PI:0;const Q=q.age/360;R.material.color.set(q.culture==="moon"?"#e9cf8b":"#c8bc88"),A.material.color.set(C.air==="damp"?"#8b9f78":"#b87a48"),D.scale.setScalar(1+Q*.15)}for(let Q=0;Q<6;Q++)X[Q].visible=!!q&&q.age>=(Q+1)*60;Y.forEach((Q,O)=>{const re=C.shelf[O];Q.g.visible=!!re,re&&(Q.g.rotation.z=re.kind==="lopsided"?.22:0,Q.crust.material.color.set(re.wet>=180?"#8b9f78":"#b87a48"),Q.steps.visible=re.kind==="moon_stair",Q.crystal.visible=re.kind==="stone",Q.holes.visible=re.kind==="holes"||re.kind==="lopsided")})}function ue(C,q){v();const Q=ye("action",C,q);return te="",L(0),f(),Q}for(const C of ne.querySelectorAll("[data-culture]"))C.onclick=()=>ue("set_batch",{culture:C.dataset.culture});ne.querySelector("#cellar-turn").onclick=()=>ue("tend",{air:$.air,turn:!0}),ne.querySelector("#cellar-air").onclick=()=>ue("tend",{air:$.air==="damp"?"dry":"damp",turn:!1}),ne.querySelector("#cellar-wait").onclick=()=>{v(),J+=60,ye("tick"),te="",L(0),f()};function oe(){const C=Z||z(),q=C.batch,Q=W&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",O=q?q.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(q.age)}/360 с. Корка: ${Math.floor(q.exposure[0])}/${Math.floor(q.exposure[1])} с.`:C.shelf.length?`На полке: ${C.shelf.map(re=>Kx[re.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:W&&g()?"войти в свою сыроварню":q?q.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(W&&g())&&!!q&&!q.ready,description:Q+" "+O}}function P(){const C=Z||z(),q=C.batch;ne.querySelector("#cellar-readout").textContent=`${C.air==="damp"?"сыро":"сухо"} · ${q?q.ready?"готово":`ещё ${Math.ceil(q.remaining)} с`:"нет колеса"} · полка ${C.shelf.length}/6`;for(const Q of ne.querySelectorAll("[data-culture]"))Q.disabled=!!q;ne.querySelector("#cellar-turn").disabled=!q||q.ready,ne.querySelector("#cellar-air").textContent=C.air==="damp"?"сделать суше":"вернуть сырость"}function L(C){C-he>=1&&(he=C,ye("tick"));const q=z(),Q=JSON.stringify(q);Q!==te&&(te=Q,ee(q),P(),f())}return window.addEventListener("beznogim:state",({detail:C})=>{var Q,O;const q=(O=(Q=C.mechanics)==null?void 0:Q.cellar)==null?void 0:O.public;q&&(W=q,te="")}),W=((K=(I=(G=window.__beznogimState)==null?void 0:G.mechanics)==null?void 0:I.cellar)==null?void 0:K.public)||null,ee(z()),P(),{house:m,controls:ne,update:L,card:oe,run:()=>ue($.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:W&&g()?"resident":"sandbox",...Z,wheelVisible:_.visible,shelfVisible:Y.filter(C=>C.g.visible).length,stairsVisible:Y.filter(C=>C.g.visible&&C.steps.visible).length,shutter:w.rotation.y})}}function jx({entries:n,elements:e,layer:t,camera:i}){const s=new mt,r=new mt,o=new U,a=Object.entries(n).map(([d,h])=>({element:e[d],anchor:h.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,u=!1;return{update(d,h,f){if(t.hidden===d&&(t.hidden=!d),!d){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||c!==h||l!==f||!s.equals(r);c=h,l=f,u=!0;for(const v of a){if(typeof v.anchor=="function")v.anchor(o);else{if(!g)continue;o.copy(v.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,p=(1-o.y)*f*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&p>=10&&p<=f-55;if(M!==v.visible&&(v.visible=M,v.element.classList.toggle("hidden",!M)),!M)continue;const E=Math.round(m*10)/10,x=Math.round(p*10)/10;(E!==v.x||x!==v.y)&&(v.x=E,v.y=x,v.element.style.transform=`translate3d(${E}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function e1(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,d=Math.max(12,u?0:a.bottom+12,u?l.bottom+12:0),h=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(d)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Ae=n=>document.querySelector(n),Qt=()=>innerWidth<700,mf=matchMedia("(prefers-reduced-motion: reduce)").matches;let _r={};try{_r=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!_r.running,harvest:Math.min(99,Math.max(0,Number(_r.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(_r.dockTrips)||0))),dockPending:_r.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Zs(){return we.roof===null?we.running||we.loop>0:!!we.roof}function pc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const ut=new hf({antialias:!0,alpha:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(devicePixelRatio,Qt()?1.5:2));ut.setSize(innerWidth,innerHeight,!1);ut.shadowMap.enabled=!0;ut.shadowMap.type=Fs;ut.shadowMap.autoUpdate=!1;ut.shadowMap.needsUpdate=!0;ut.outputColorSpace=an;ut.toneMapping=Pa;ut.toneMappingExposure=1.22;Ae("#world").append(ut.domElement);const gn=new Ud;gn.background=new ot("#182e32");gn.fog=new Va("#182e32",8e-4);const Oe=new Hr(-10,10,10,-10,.1,600),nu=new U(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(nu);const Je=new fx(Oe,ut.domElement);Je.target.copy(nu);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=Mi.PAN;Je.mouseButtons.RIGHT=Mi.PAN;Je.touches.ONE=xi.PAN;Je.touches.TWO=xi.DOLLY_PAN;gn.add(new Kd("#d9eedc","#334d53",2.3));const ms=new Qc("#ffe2ac",3.3);ms.position.set(-7,14,6);ms.castShadow=!0;ms.shadow.mapSize.set(Qt()?512:1024,Qt()?512:1024);Object.assign(ms.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});ms.shadow.bias=-4e-4;ms.shadow.normalBias=.025;gn.add(ms);const gf=new Qc("#8ad5d8",1.3);gf.position.set(5,7,-8);gn.add(gf);const xt=new Gi;gn.add(xt);const Hl={};function et(n,e={}){const t=n+JSON.stringify(e);return Hl[t]||(Hl[t]=new Us({color:n,roughness:.8,...e}))}const si={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},me={concrete:et(si.concrete),cream:et(si.cream),dark:et(si.dark),metal:et(si.metal,{metalness:.5,roughness:.4}),copper:et(si.copper,{metalness:.6,roughness:.35}),rust:et(si.rust),black:et(si.black),leaf:et(si.leaf),light:et("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:et("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},js={box:new Pi(1,1,1),sphere:new Ya(1,12,8),ico:new Vr(1,1),cyl:new kr(1,1,1,16),cone:new fs(1,1,8)};function Ot(n,e,t,i,s=xt){const r=new mn(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const We=(n,e,t,i=xt)=>Ot(js.box,t,n,e,i),lt=(n,e,t,i=xt)=>Ot(js.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),bt=(n,e,t,i,s=xt)=>Ot(js.cyl,i,n,[e,t,e],s);function Wr(n,e,t,i=xt,s=.08){return Ot(new tu(...e,1,s),t,n,null,i)}function gt(n=[0,0,0],e=xt){const t=new Gi;return t.position.set(...n),e.add(t),t}function er(n,e,t,i=xt){const s=new Wc(n.map(r=>new U(...r)));return Ot(new Za(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function vt(n,e,t,i,s=xt){const r=new U(...n),o=new U(...e),a=o.clone().sub(r),c=bt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new U(0,1,0),a.normalize()),c}function Rt(n,e,t,i,s=xt,r=[Math.PI/2,0,0]){const o=Ot(new $a(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Ht(n,e,t,i,s=xt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new Gc(o);c.colorSpace=an;const l=Ot(new ps(t,i),new Br({map:c,side:Ln}),e,null,s);return l.castShadow=!1,l}let Wl=179;function wt(){return Wl=Wl*1664525+1013904223>>>0,Wl/4294967296}const wa=document.createElement("canvas");wa.width=wa.height=256;const Ta=wa.getContext("2d");Ta.fillStyle="#b4bcaa";Ta.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Ta.fillStyle=`rgba(${wt()>.5?"60,82,64":"235,229,201"},${wt()*.08})`,Ta.fillRect(wt()*256,wt()*256,1+wt()*3,1+wt()*3);const Ur=new Gc(wa);Ur.wrapS=Ur.wrapT=Tr;Ur.repeat.set(5,5);Ur.colorSpace=an;const t1=et("#c2c6b1",{map:Ur,roughness:.97});function iu(n,e,t,i,s=xt){const r=new Gr;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new Ks(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Ot(o,i,null,null,s)}const su=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];iu(su,0,.82,me.concrete);iu(su,.06,.14,t1);iu(su.map(([n,e])=>[n*.97,e*.97]),-.8,.6,et("#47665e"));for(let n=0;n<28;n++){const e=-5.4+wt()*10.9,t=wt()>.5?5.15:-5.2,i=Ot(js.ico,et(n%3?"#557469":"#668477"),[e,-1.15-wt()*.5,t],[.25+wt()*.8,.2+wt()*.55,.35+wt()*.3]);i.rotation.y=wt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;We([e,-.37,5.61],[.48,.19,.025],n%2?me.copper:me.dark),n%2===0&&er([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,me.metal)}Ht("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,xt,{size:32});const It=gt([-3.2,.08,-2.5]),dn=gt([0,0,0],It);We([0,.08,0],[4.5,.15,3.6],me.dark,It);We([0,1.2,-1.68],[4.5,2.4,.18],me.cream,It);We([-2.15,1,0],[.18,2,3.6],me.cream,It);for(let n=0;n<5;n++){We([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],me.concrete,It),We([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],me.metal,It);for(let e=0;e<3;e++)We([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],me.copper,It)}We([0,2.47,-.2],[4.8,.14,3.7],me.rust,dn);for(let n=0;n<23;n++){const e=We([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],et("#d09062"),dn);e.rotation.x=-.015}We([0,2.35,1.62],[4.8,.14,.18],me.dark,It);vt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,me.copper,It);vt([2.3,.12,1.62],[2.3,2.4,1.62],.055,me.copper,It);Ht("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,It,{size:37});We([.1,.85,-.84],[3.8,.13,.87],me.rust,It);for(const n of[-1.5,1.65])We([n,.44,-.84],[.12,.85,.65],me.metal,It);for(let n=0;n<3;n++)We([-1.15+n*.95,.51,-.85],[.82,.47,.75],me.concrete,It),We([-1.15+n*.95,.5,-.44],[.18,.04,.03],me.copper,It);for(let n=0;n<6;n++)We([-1.6+n*.48,2.07,-1.48],[.28,.16+wt()*.16,.17],et(["#9fba95","#cb9b70","#667f71"][n%3]),It);bt([0,.5,.7],.32,.12,me.rust,It);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;vt([e,.06,t],[e,.5,t],.04,me.metal,It)}for(let n=0;n<4;n++)Rt([-1.5,.06,1],.3-n*.045,.025,me.black,It);bt([-1.5,3,-.9],.16,.9,me.metal,dn);bt([-1.5,3.47,-.9],.24,.08,me.rust,dn);We([1.4,2.9,-.4],[.8,.5,.6],me.concrete,dn);for(let n=0;n<5;n++)We([1.1+n*.15,2.94,-.085],[.035,.32,.03],me.dark,dn);const ru=new Ka("#ffca86",5,5,2);ru.position.set(-3,1.7,-1.1);xt.add(ru);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=Wr([n,.1,e],[.74,.05,.74],et(wt()>.3?"#b3baa6":"#a5b5a4"),xt,.018);t.rotation.y=(wt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+wt()*12,t=-5.1+wt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Ot(js.cone,me.leaf,[e,.1,t],[.022,.12+wt()*.12,.022]);i.rotation.z=(wt()-.5)*.7}const mc=new Bn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Ln});We([3.7,.12,3.6],[4.9,.24,2.7],me.dark);Ot(new ps(4.5,2.4),mc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])We([3.7,.29,n],[5,.38,.16],me.cream);for(const n of[1.18,6.2])We([n,.29,3.6],[.16,.38,2.85],me.cream);for(let n=0;n<13;n++)We([1.85,.5,2.15+n*.235],[1.08,.09,.22],et(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])bt([e,.88,n],.045,.8,me.copper);for(const n of[1.31,2.4])er([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,me.cream);const ou=[];for(let n=0;n<6;n++){let e=We([4+n*.095,-1.25,5.56],[.055,2.4,.03],et("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));ou.push(e)}for(let n=0;n<4;n++)We([3.96+n*.17,.31,5.31],[.055,.08,.6],me.dark);const Xt=gt([3.7,.1,-2.6]);Wr([0,.14,0],[3.7,.27,3.5],me.cream,Xt,.09);for(const n of[-1.55,1.55])We([n,1.76,0],[.17,3.25,.2],me.metal,Xt),We([n,.38,0],[.45,.2,.6],me.copper,Xt),vt([n,.36,-1.2],[n,2.9,0],.045,me.copper,Xt),vt([n,.36,1.2],[n,2.9,0],.045,me.copper,Xt);We([0,3.38,0],[3.5,.18,.26],me.copper,Xt);const n1=Rt([0,2.7,-.5],1.83,.035,me.copper,Xt,[0,0,0]);n1.scale.y=.85;const Xr=[];for(let n=0;n<5;n++){const e=gt([-1.18+n*.59,3.24,0],Xt),t=1.8+n*.12;vt([0,0,-.08],[0,-t,0],.015,me.dark,e),vt([0,0,.08],[0,-t,0],.015,me.dark,e),lt([0,-t,0],.205,me.copper,e),Rt([0,-t,0],.211,.012,me.light,e,[0,0,0]),Xr.push({group:e,len:t,phase:n})}We([0,.6,1.3],[1.45,.8,.4],me.metal,Xt);Ht("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Xt,{size:40});const i1=bt([-.43,.97,1.3],.19,.07,me.cream,Xt);i1.rotation.x=Math.PI/2;const au=We([-.43,.99,1.342],[.015,.22,.008],me.rust,Xt);au.rotation.z=-.7;const _f=lt([.53,.93,1.52],.09,me.light,Xt),el=gt([.15,.4,1.59],Xt);Rt([0,0,0],.19,.023,me.rust,el,[0,0,0]);for(let n=0;n<3;n++)vt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,me.rust,el);er([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,me.copper);const vf=[];function lu(n,e,t=1.5){bt([n,t/2,e],.038,t,me.metal),We([n,t,e],[.27,.11,.27],me.dark),We([n,t-.18,e],[.17,.25,.17],me.light),We([n,t-.34,e],[.25,.08,.25],me.copper);const i=new Ka("#ffbe70",1.8,3);i.position.set(n,t-.16,e),vf.push(i)}lu(-5.9,3.9,1.3);lu(.3,-4.8,1.7);lu(5.8,1.25,1.35);const ln=gt([-3.6,.08,3.55]),gc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;Wr([0,.14,e],[3.6,.3,1.14],me.rust,ln,.06),We([0,.305,e],[3.36,.04,.92],et(si.soil),ln);for(let t=0;t<4;t++){const i=gt([-1.26+t*.84,.33,e],ln);bt([0,.14,0],.026,.28,me.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=lt([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],et(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){lt([0,.17,0],[.25,.18,.25],et("#b6c58a"),i);for(let s=0;s<6;s++){const r=lt([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],me.leaf,i);r.rotation.y=s}gc.push(i)}else{const s=lt([.05,.22,0],[.1,.21,.12],et(si.purple,{roughness:.35}),i);s.rotation.z=-.25,lt([.05,.41,0],[.075,.025,.07],me.leaf,i),gc.push(i)}}}const xf=gt([-1.72,.1,.8],ln);for(let n=0;n<2;n++)We([n*3.45,.6,0],[.04,1.3,.04],me.copper,xf);vt([0,1.25,0],[3.45,1.25,0],.022,me.copper,xf);Ht("КОБАЧКИ",[-.45,.68,1.64],1,.26,ln,{bg:"#c2c7a3",fg:"#445e45",size:42});bt([1.9,.23,.7],.18,.34,et("#6b9389"),ln);vt([2.04,.25,.7],[2.4,.46,.7],.045,et("#6b9389"),ln);Rt([1.8,.48,.7],.16,.02,me.copper,ln,[0,0,0]);We([-1.6,.2,1.47],[.65,.4,.45],me.rust,ln);for(let n=0;n<3;n++)We([-1.6,.12+n*.11,1.71],[.7,.05,.025],me.copper,ln);const yn=gt([-3.8,.08,.35]);bt([0,.73,0],.58,.1,me.rust,yn);bt([0,.35,0],.045,.7,me.metal,yn);for(let n=0;n<3;n++)vt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,me.metal,yn);const qr=gt([.1,.81,0],yn);lt([0,.2,0],[.23,.22,.23],me.cream,qr);bt([0,.37,0],.14,.06,me.copper,qr);lt([0,.42,0],.045,me.dark,qr);vt([.15,.18,0],[.33,.32,0],.07,me.cream,qr);Rt([-.15,.25,0],.18,.035,me.dark,qr,[0,0,0]);for(const n of[-.35,.38])bt([n,.84,.24],.082,.15,me.cream,yn),Rt([n,.92,.24],.084,.012,me.copper,yn),bt([n,.921,.24],.063,.006,et("#67513b"),yn),Rt([n+.09,.86,.24],.045,.011,me.cream,yn,[0,0,0]);const tl=[];for(let n=0;n<9;n++){const e=lt([0,0,0],.07,et("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),yn);e.castShadow=!1,tl.push(e)}const Zn=gt([-5.65,.09,1.1]);We([0,.3,0],[.7,.6,.7],me.concrete,Zn);Wr([0,.8,0],[.68,.45,.35],me.dark,Zn,.05);for(let n=0;n<6;n++)We([-.2+n*.05,.8,.18],[.022,.27,.018],me.copper,Zn);We([.18,.85,.184],[.16,.075,.02],me.light,Zn);lt([.18,.72,.19],.05,me.cream,Zn);vt([.18,1,0],[.48,1.6,0],.012,me.copper,Zn);const yf=gt([-.5,.1,-4.6]);bt([0,1.75,0],.055,3.5,me.metal,yf);lt([0,3.55,0],.09,me.copper,yf);er([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,me.dark);for(let n=0;n<8;n++){let e=n/8;const t=Ot(new fs(.13,.3,3),et(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const nl=gt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=We([0,0,0],[.55,.09,.025],me.rust,nl);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}lt([0,0,.05],.08,me.copper,nl);const nn=gt([7.25,-.03,1.5]);We([0,-.12,0],[2.25,.3,2.5],me.metal,nn);for(let n=0;n<10;n++)We([-.99+n*.22,.08,0],[.2,.08,2.6],me.rust,nn);We([-.95,.2,-.95],[.35,.15,.35],me.dark,nn);bt([.87,.34,.75],.075,.5,me.copper,nn);bt([.87,.59,.75],.13,.05,me.cream,nn);vt([.87,.1,-.7],[.87,2.3,-.7],.035,me.copper,nn);er([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,me.copper,nn);We([.17,2.09,-.7],[.25,.4,.25],et("#ffd591"),nn);We([.17,2.32,-.7],[.34,.08,.34],me.dark,nn);for(let n=0;n<4;n++)Rt([.87,.15,.75],.24-n*.025,.024,et("#b8ad86"),nn);We([6.7,.07,1.5],[1.4,.13,.8],me.rust);Ht("НИКУДА",[.05,.28,1.36],1.3,.29,nn,{bg:"#c2c7a3",fg:"#445e45",size:45});const cu=[];function il(n,e,t=1){const i=gt(e,n),s=new Gr;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Ot(new Ks(s,{depth:.19,bevelEnabled:!1}),et("#dfc99a"),[0,.15,-.1],null,i);const r=Ot(new fs(.23,.36,3),me.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=il(xt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);cu.push(e)}const Jn=Ax({THREE:Sn,root:xt,dock:nn,state:we,M:me,mat:et,group:gt,mesh:Ot,box:We,sphere:lt,cyl:bt,torus:Rt,rod:vt,sign:Ht,paperBoat:il,batchStatic:Dt,persist:pc,say:Pn,refresh:zt,chime:Ri,reduced:mf}),Qe=gt([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const uu=et("#233a39",{metalness:.42,roughness:.32});lt([0,.1,0],[.62,.8,.55],uu,Qe);lt([0,-.36,.1],[.44,.43,.43],uu,Qe);lt([-.61,.03,.03],[.1,.2,.12],me.copper,Qe);lt([.61,.03,.03],[.1,.2,.12],me.copper,Qe);for(const n of[-.23,.23]){lt([n,.2,.485],[.17,.13,.057],me.black,Qe),Rt([n,.2,.541],.078,.02,me.copper,Qe,[0,0,0]),lt([n,.2,.56],.041,me.light,Qe);const e=We([n,.38,.48],[.24,.045,.06],me.cream,Qe);e.rotation.z=n>0?-.13:.13}lt([0,.04,.51],[.09,.17,.11],uu,Qe);lt([0,-.2,.44],[.31,.16,.11],me.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=Wr([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],me.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=lt([t,i,-.04],[.18,.18,.48],me.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;er([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,et("#f2edda"),Qe)}for(let n=0;n<3;n++)lt([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],me.cream,Qe);const hu=Rt([0,1.05,0],.77,.019,me.copper,Qe);hu.rotation.z=.14;const s1=new Ka("#ffbb62",.9,3);s1.position.set(0,.2,.9);const Uo=Rt([-.15,.26,.85],.7,.018,me.copper),Or=Ot(new Wa(.64,32),new Br({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Or.rotation.x=-Math.PI/2;Or.castShadow=!1;const yi=new U(-.15,1.9,.85),zn=gt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=We([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?me.cream:me.concrete,zn);t.rotation.x=Math.PI/2-e,n%3===0&&vt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,me.copper,zn)}for(const n of[-.45,.45])Rt([n,0,0],2.07,.025,me.copper,zn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Rt([n,0,0],1.7,.075,me.concrete,zn,[0,Math.PI/2,0]);vt([0,-2.15,-1.2],[0,-1.58,-.8],.07,me.metal,zn);vt([0,-2.15,1.2],[0,-1.58,.8],.07,me.metal,zn);Ht("ОБРАТНО",[.49,-.55,.2],1.15,.3,zn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+wt()*20,t=-8+wt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Ot(js.ico,et("#47675f"),[e,-1.3-wt()*2,t],[.22+wt()*.55,.19+wt()*.4,.27+wt()*.4])}const Mf=new kt,Sf=[];for(let n=0;n<75;n++)Sf.push((wt()-.5)*25,wt()*9-2,(wt()-.5)*22);Mf.setAttribute("position",new _t(Sf,3));const bf=new Od(Mf,new Bc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));gn.add(bf);function Dt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new mt().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=Tx(o,!1);a&&Ot(a,r,null,null,n),o.forEach(c=>c.dispose())}}Dt(xt,[Qe,ln,Xt,yn,Zn,nn,It,zn,nl,...cu,...tl,...ou,Uo,Or,Jn.travel]);Dt(It,[dn]);Dt(dn,[]);Dt(zn,[]);Dt(Qe,[hu]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});Dt(yn,[...tl]);Dt(Zn,[]);Dt(nn,[Jn.gallery,Jn.beacon]);Dt(Xt,[...Xr.map(n=>n.group),el,au,_f]);Xr.forEach(n=>Dt(n.group,[]));const Fr=gt([0,.33,0],ln);gc.forEach(n=>{Fr.add(n),n.position.y-=.33});Dt(Fr,[]);Dt(ln,[Fr]);const Mn=Nx({THREE:Sn,root:xt,scene:gn,head:Qe,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,paperBoat:il,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},chime:Ri}),bi=Qx({THREE:Sn,root:xt,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,mesh:Ot,sign:Ht,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Vi=Kf({THREE:Sn,root:xt,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ei=Zf({THREE:Sn,root:xt,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),ui=Xf({THREE:Sn,root:xt,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,sign:Ht,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),wi=Yf({THREE:Sn,root:xt,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,sign:Ht,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),hi=$f({THREE:Sn,root:xt,M:me,mat:et,group:gt,box:We,sphere:lt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Hi=Jf({THREE:Sn,workshop:It,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,changed:()=>{zt(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),sl=Ux({THREE:Sn,scene:gn,root:xt,head:Qe,M:me,mat:et,mesh:Ot,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,chime:Ri}),Yr=Jx({THREE:Sn,scene:gn,root:xt,head:Qe,M:me,mat:et,mesh:Ot,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,paperBoat:il,batchStatic:Dt,chime:Ri}),Dn=Zx({THREE:Sn,scene:gn,root:xt,head:Qe,M:me,mat:et,mesh:Ot,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,chime:Ri,changed:()=>{$r(),ut.shadowMap.needsUpdate=!0}}),Ef=Ox({head:Qe,group:gt,sphere:lt,box:We,torus:Rt,M:me,mat:et}),ai=Wx({THREE:Sn,scene:gn,root:xt,head:Qe,M:me,mat:et,mesh:Ot,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,chime:Ri,changed:()=>{$r(),ut.shadowMap.needsUpdate=!0}}),li=kx({THREE:Sn,scene:gn,root:xt,head:Qe,M:me,mat:et,group:gt,box:We,sphere:lt,cyl:bt,rod:vt,torus:Rt,sign:Ht,batchStatic:Dt,chime:Ri,changed:()=>{$r(),ut.shadowMap.needsUpdate=!0}});let en=null,pt=1;const kn={garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new U(-32,.6,-20.6),position:new U(-24,.6,-24),run:()=>ui.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new U(24,.9,29.7),position:new U(24,.6,24),run:()=>wi.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new U(-6.9,1.9,-20.1),position:new U(0,.6,-24),run:()=>hi.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new U(-17.5,1.3,3.4),position:new U(-24,.6,0),run:()=>Ei.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new U(-1.4,1.5,-1.1),position:new U(-3.2,1.25,-2.2),run:()=>Hi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new U(4.7,.8,25.8),position:new U(0,.4,24),run:()=>Vi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new U(28.4,2.2,2.5),position:new U(24,.4,0),run:()=>bi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new U(-.1,2.15,4.3),position:new U(-.1,1,4.3),run:()=>Mn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new U(-6,4.55,-3.25),position:new U(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,Tf.copy(Qe.position),Pn("ноги не понадобились"),zt())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new U(-3.2,3.15,-2.5),position:new U(-3.2,1.1,-2.5),run:()=>{we.roof=Zs()?0:1,Pn(Zs()?"заходи":"прикрыл"),zt()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new U(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Pn(n[r1++%n.length]),yi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new U(3.7,3.85,-2.6),position:new U(3.7,1,-2.6),run:()=>{we.running=!we.running,pc(),Pn(we.running?"ну пошло":"можно и полежать"),zt()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new U(-3.7,1.65,.35),position:new U(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,yi.set(-2.65,1.7,.65),Pn("щас, чайник поставлю"),zt())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new U(-3.4,1,3.8),position:new U(-3.6,1,3.55),run:()=>{we.harvest++,ks=.15,pc(),yi.set(-1.6,1.6,2.3),Pn(we.harvest===1?"о, урожай":"кабачки опять победили"),zt()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new U(-5.65,1.75,1.1),position:new U(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,du(),Pn(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),zt()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new U(7.4,2.75,1.1),position:new U(7.25,.9,1.5),run:()=>{Jn.launchOrCollect(),we.dockPending===!1&&we.boat===0&&yi.set(5.85,1.7,1.05)}}};let r1=0,ks=1,wf=0,cs=0;const Tf=new U;let Af=()=>{$i("engine"),kn.engine.run()};const rl={};for(const[n,e]of Object.entries(kn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>$i(n),Ae("#hotspots").append(t),rl[n]=t}const Rf=Ae("#hotspots"),Xl=Ae("#speech"),os={width:innerWidth,height:innerHeight},o1=jx({entries:kn,elements:rl,layer:Rf,camera:Oe});let ql=!1,Hh=NaN,Wh=NaN;const dr=new U;function $i(n){we.selected=n,Ae("#inspector").classList.remove("collapsed");const e=kn[n];Ae("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Ae("#object-title").textContent=e.title,Ae("#object-description").textContent=e.description,Af=e.run,Ae("#focus-object").hidden=!1,Ae("#focus-object").textContent=Zt===n?"весь двор ⌂":"осмотреть ближе ⊕",zt();for(const[t,i]of Object.entries(rl))i.classList.toggle("selected",t===n)}function zt(){const n=we.selected,e=kn[n];if(Ae("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=Zs()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Jn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Mn.card();t=r.action,i=r.description}if(n==="cellar"){const r=bi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Vi.card();t=r.action,i=r.description}if(n==="bench"){const r=Hi.card();t=r.action,i=r.description}if(n==="drydock"){const r=Ei.card();t=r.action,i=r.description}if(n==="dash"){const r=hi.card();t=r.action,i=r.description}if(n==="quotes"){const r=wi.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=ui.card();t=r.action,i=r.description,s=r.disabled}ui.controls.hidden=n!=="garage",wi.controls.hidden=n!=="quotes",hi.controls.hidden=n!=="dash",Ei.controls.hidden=n!=="drydock",Hi.controls.hidden=n!=="bench",Vi.controls.hidden=n!=="amnesty",bi.controls.hidden=n!=="cellar",Ae("#enter-bench")&&(Ae("#enter-bench").hidden=n!=="workshop"),Ae("#enter-dream06").hidden=n!=="radio",Ae("#enter-dream05").hidden=n!=="stair",Ae("#enter-dream03").hidden=n!=="dock",Ae("#enter-dream04").hidden=n!=="workshop",Ae("#greenhouse-controls").hidden=n!=="greenhouse",Ae("#thermal-moves").hidden=Mn.inspect().mode!=="playing",Ae("#thermal-readout").textContent=`тепло ${Mn.inspect().temp} · такты ${Mn.inspect().turn}/6`,Ae("#object-description").textContent=i,Ae("#object-action").innerHTML=t+" <span>↗</span>",Ae("#object-action").disabled=s}Ae("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&at.watching()){at.localPlay();return}at.localPlay(),Af(),cs=performance.now()+2200};Ae("#close-card").onclick=()=>Ae("#inspector").classList.add("collapsed");function Pn(n){Ae("#speech").textContent=n,wf=performance.now()+4e3,Ae("#speech").classList.add("visible")}Ae("#markers").onclick=()=>{we.markers=!we.markers,Ae("#markers").setAttribute("aria-pressed",we.markers),Rf.hidden=!we.markers||!!en||Oe.zoom<.4};let Zt=null;const fn={angle:Math.PI/4,targetAngle:Math.PI/4};function Cf(){os.width=innerWidth,os.height=innerHeight;const n=innerWidth/innerHeight,e=Qt()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(Qt()?2.8:0),Oe.bottom=-e-(Qt()?2.8:0),Oe.updateProjectionMatrix(),ut.setSize(innerWidth,innerHeight,!1),ut.setPixelRatio(Math.min(devicePixelRatio,Qt()?1.5:2))}function tr(){if(at==null||at.unfollow(),en){ol();return}Zt=null,document.body.classList.remove("close-look"),Ae("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Oe.zoom=1,Je.target.copy(nu),fn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Ae("#focus-object").onclick=()=>{if(we.selected){if(Zt===we.selected){tr();return}Zt=we.selected,document.body.classList.add("close-look"),Ae("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(kn[we.selected].position),Qt()&&(Je.target.y+=["cellar","amnesty","drydock","dash","quotes","garage"].includes(Zt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage"].includes(Zt)?Qt()?1.8:1.6:Qt()?2.5:2.1,Zt==="bench"?(Je.maxZoom=4.5,Oe.zoom=Qt()?3.8:3.4,Je.target.y+=Qt()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Oe.updateProjectionMatrix()}};Ae("#home").onclick=tr;Ae("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Je.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Ae("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Je.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Ae("#rotate").onclick=()=>fn.targetAngle+=Math.PI/2;addEventListener("resize",Cf);Cf();function Pf(n,e,t=!1){en&&ol(),tr(),Je.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Ae("#inspector").classList.add("collapsed")}function a1(){Pf(0,0);const n=innerWidth/innerHeight,e=Qt()?19.6:9.6;Oe.zoom=Math.min(e*n/(Gs.half*1.57),e/(Gs.half*1.3)),Oe.updateProjectionMatrix()}const Gs=Dx({root:xt,camera:Oe,controls:Je,mobile:Qt,go:Pf,overview:a1,home:tr,locationTarget:()=>["dash","quotes","garage"].includes(Zt)&&we.selected===Zt?kn[Zt].position:null}),Wi=document.createElement("select");Wi.id="world-places";Wi.setAttribute("aria-label","Открыть место");Wi.append(new Option("места",""));for(const[n,e]of Object.entries(kn))Wi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Wi,document.querySelector("#territory-location"));Wi.onchange=()=>{const n=Wi.value;kn[n]&&(tr(),Je.target.copy(kn[n].position),$i(n),Wi.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Xh=new ef,qh=new Ee;let ss=null;ut.domElement.addEventListener("pointerdown",n=>{ss={x:n.clientX,y:n.clientY,time:performance.now()}});ut.domElement.addEventListener("pointerup",n=>{if(!ss||Math.hypot(n.clientX-ss.x,n.clientY-ss.y)>7||performance.now()-ss.time>550){ss=null;return}if(ss=null,qh.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Xh.setFromCamera(qh,Oe),en)return;const e=Xh.intersectObjects([ui.house,wi.house,hi.house,Ei.house,Hi.house,Vi.house,bi.house,Mn.house,Qe,Xt,ln,yn,Zn,nn,It,zn,Jn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![ui.house,wi.house,hi.house,Ei.house,Hi.house,Vi.house,bi.house,Mn.house,Qe,Xt,ln,yn,Zn,nn,It,zn,Jn.travel].includes(t);)t=t.parent;const i=new Map([[ui.house,"garage"],[wi.house,"quotes"],[hi.house,"dash"],[Ei.house,"drydock"],[Hi.house,"bench"],[Vi.house,"amnesty"],[bi.house,"cellar"],[Mn.house,"greenhouse"],[Qe,"head"],[Xt,"engine"],[ln,"garden"],[yn,"tea"],[Zn,"radio"],[nn,"dock"],[It,"workshop"],[zn,"stair"],[Jn.travel,"dock"]]).get(t);i&&$i(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(kn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&$i(t)}});let Tn=null;function l1(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function du(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}Ae("#sound").onclick=async()=>{try{Tn||(Tn=l1()),await Tn.ctx.resume(),we.sound=!we.sound,Tn.gain.gain.setTargetAtTime(we.sound?.08:0,Tn.ctx.currentTime,.3),Ae("#sound").textContent=we.sound?"звук включён":"звук выключен",Ae("#sound").setAttribute("aria-pressed",we.sound),du(),zt()}catch{Pn("со звуком не сложилось")}};function Ri(n=330){if(!Tn||!we.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}Ae("#about").onclick=()=>Ae("#about-dialog").showModal();Ae("#close-about").onclick=Ae("#back-to-yard").onclick=()=>Ae("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&en){ol();return}n.key==="Escape"&&Ae("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Ae("#zoom-in").click(),n.key==="-"&&Ae("#zoom-out").click(),n.key.toLowerCase()==="r"&&Ae("#rotate").click(),n.key.toLowerCase()==="h"&&tr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{at.localPlay(),Mn.step(n.dataset.thermal),cs=performance.now()+2200};const c1={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function fu(){return pt===1?Mn:pt===2?sl:pt===3?Yr:pt===4?Dn:pt===5?ai:li}function $r(){const n=pt===1?Mn.inspect().dreamStep:fu().inspect().step,e=c1[pt];if(Ae("#dream-cloud").hidden=pt!==6,Ae("#dream-force").hidden=pt!==3,Ae("#dream-roofs").hidden=pt!==4,Ae("#dream-meter").hidden=pt!==5,Ae("#dream-panel .object-kicker").textContent=`СОН 0${pt} / БЕЗНОГИМ`,Ae("#dream-panel h2").textContent=e.title,Ae("#dream-text").textContent=pt===6?li.text():pt===5?ai.text():pt===4?Dn.text():e.lines[n],Ae("#dream-breathe").textContent=pt===6?li.button():pt===5?ai.button():pt===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Ae("#dream-breathe").disabled=pt===6&&["heating","raining"].includes(li.inspect().phase)||pt===4&&Dn.inspect().phase==="flying"||pt===5&&["measuring","unfolding","climbing"].includes(ai.inspect().phase),pt===6){const t=li.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(pt===5){const t=ai.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(pt===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function gs(n=1){en||(pt=n,en={target:Je.target.clone(),zoom:Oe.zoom,angle:fn.targetAngle,focused:Zt,returnId:n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},fu().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,Qt()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?Qt()?1.65:1.75:Qt()?1.45:1.55,Oe.updateProjectionMatrix(),fn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6),Aa="",Ae("#dream-panel").hidden=!1,$r(),ut.shadowMap.needsUpdate=!0)}function ol(){if(!en)return;const n=en;en=null,fu().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Oe.zoom=n.zoom,fn.targetAngle=n.angle,Zt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Aa="",Ae("#dream-panel").hidden=!0,ut.shadowMap.needsUpdate=!0,$i(n.returnId)}Ae("#enter-dream").onclick=()=>gs(1);Ae("#exit-dream").onclick=ol;Ae("#dream-breathe").onclick=()=>{pt===1?Mn.breathe():pt===2?sl.pour():pt===3?Yr.toss():pt===4?Dn.send():pt===5?ai.act():li.act(),cs=performance.now()+2200,$r(),ut.shadowMap.needsUpdate=!0};const Zr=document.createElement("button");Zr.id="enter-bench";Zr.hidden=!0;Zr.textContent="собрать механический монитор ↗";Zr.onclick=()=>{$i("bench"),Ae("#focus-object").click()};Ae("#focus-object").before(Zr);const al=document.createElement("button");al.id="enter-dream02";al.textContent="сон 02 / вода спит ↗";al.onclick=()=>gs(2);bi.controls.append(al);Ae("#enter-dream03").onclick=()=>gs(3);Ae("#enter-dream04").onclick=()=>gs(4);Ae("#enter-dream06").onclick=()=>gs(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>li.choose(n.dataset.cloudTarget);Ae("#enter-dream05").onclick=()=>gs(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>ai.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),cs=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{Yr.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Ae("#dream-archive").onclick=()=>Ae("#dream-archive-dialog").showModal();Ae("#close-dream-archive").onclick=()=>Ae("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Ae("#dream-archive-dialog").close(),gs(Number(n.dataset.dreamId))};const at=Cx({head:Qe,headDestination:yi,state:we,controls:Je,camera:Oe,refresh:zt,setAudioTone:du,say:Pn,onHarvest:()=>{ks=.15}});let Yl="";const Lf=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Lf.push(new U(n,e,t));const If=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])If.push(new U(n,e,t));const Df=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])Df.push(new U(n,e,t));const Nf=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Nf.push(new U(n,e,t));function u1(){var S,b;const n=Zt==="garage"&&we.selected==="garage",e=Zt==="quotes"&&we.selected==="quotes",t=Zt==="dash"&&we.selected==="dash",i=Zt==="drydock"&&we.selected==="drydock"||t||e||n,s=(Zt==="bench"&&we.selected==="bench"||i)&&!Ae("#inspector").classList.contains("collapsed")&&!en;if(document.body.classList.toggle("garage-look",s&&n),document.body.classList.toggle("quotes-look",s&&e),document.body.classList.toggle("dash-look",s&&(t||e||n)),document.body.classList.toggle("bench-look",s&&!i),document.body.classList.toggle("drydock-look",s&&i),!s){Yl="";return}if(Math.abs(fn.angle-fn.targetAngle)>.01)return;const r=Ae("#inspector").getBoundingClientRect(),o=Ae(".territory-nav").getBoundingClientRect(),a=Ae(".toolbar").getBoundingClientRect(),c=innerWidth<=900&&innerHeight>innerWidth,l=c?{left:14,right:a.left-10,top:o.bottom+14,bottom:r.top-14}:{left:Math.max(r.right+18,o.right+18),right:a.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!c&&(l.left=o.right+12,l.right=innerWidth-16,l.top=a.bottom+10,l.bottom=r.top-10),(t||e||n)&&innerWidth<=900&&!c&&(l.left=12,l.right=r.left-12,l.top=o.bottom+10,l.bottom=Ae("footer").getBoundingClientRect().top-12);const u=Ae(".resident-history");i&&innerWidth>900&&u&&!u.hidden&&(l.right=Math.min(l.right,u.getBoundingClientRect().left-18));const d=n?ui.inspect():null,h=[];if(d){const w=Math.max(d.gap,d.range,((S=d.flight)==null?void 0:S.range)||0),_=Math.max(d.apex,((b=d.flight)==null?void 0:b.apex)||0);for(const R of[-34,-32+.7*w+1.6])for(const A of[-1.3,Math.max(1.5,.8+.5*_)])for(const D of[-26,-19.8])h.push(new U(R,A,D))}const f=[(d==null?void 0:d.gap)||0,(d==null?void 0:d.range)||0,(d==null?void 0:d.apex)||0,n?16:e?15:t?14:i?13:12,innerWidth,innerHeight,l.left,l.right,l.top,l.bottom,fn.targetAngle].map(w=>Math.round(w*10)/10).join(":");if(f===Yl||l.bottom-l.top<35||l.right-l.left<50)return;Yl=f;const g=()=>{Oe.updateMatrixWorld();const w=(n?h:e?If:t?Df:i?Nf:Lf).map(_=>Kt(_.clone()));return{l:Math.min(...w.map(_=>_.x)),r:Math.max(...w.map(_=>_.x)),t:Math.min(...w.map(_=>_.y)),b:Math.max(...w.map(_=>_.y))}};let v=g();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((l.right-l.left)/(v.r-v.l),(l.bottom-l.top)/(v.b-v.t))),Oe.updateProjectionMatrix(),v=g();const m=(l.left+l.right-v.l-v.r)/2,p=(l.top+l.bottom-v.t-v.b)/2,M=new U().setFromMatrixColumn(Oe.matrixWorld,0),E=new U().setFromMatrixColumn(Oe.matrixWorld,1),x=M.multiplyScalar(-m*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(E.multiplyScalar(p*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(x),Oe.position.add(x),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Aa="";const Uf=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Uf.push(new U(n,e,t));const Of=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Of.push(new U(n,e,t));function h1(){if(!en||![4,5,6].includes(pt))return;const n=Ae("#dream-panel").getBoundingClientRect(),e=Ae("footer").getBoundingClientRect(),t=Ae(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(fn.angle*100)].join(":");if(o===Aa||r.right-r.left<60||r.bottom-r.top<80)return;Aa=o;const a=()=>{Oe.updateMatrixWorld();const g=(pt===5?Uf:Of).map(v=>Kt(v.clone()));return{l:Math.min(...g.map(v=>v.x)),r:Math.max(...g.map(v=>v.x)),t:Math.min(...g.map(v=>v.y)),b:Math.max(...g.map(v=>v.y))}};let c=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Oe.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,u=(r.top+r.bottom-c.t-c.b)/2,d=new U().setFromMatrixColumn(Oe.matrixWorld,0),h=new U().setFromMatrixColumn(Oe.matrixWorld,1),f=d.multiplyScalar(-l*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(f),Oe.position.add(f),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Yh=performance.now(),Ro=0,$h=0;function Kt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function d1(){at.sync();const n=performance.now(),e=(n-Yh)/1e3;Yh=n,Ro+=e,we.energy=vn.damp(we.energy,we.running?1:0,1.6,e);const t=mf?Ro*.2:Ro;fn.angle=vn.damp(fn.angle,fn.targetAngle,5,e);const i=160;Oe.position.set(Je.target.x+Math.sin(fn.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(fn.angle)*i),Oe.lookAt(Je.target),Je.update(),en||(Je.target.x=vn.clamp(Je.target.x,-62,Gs.half+2),Je.target.z=vn.clamp(Je.target.z,-62,Gs.half+2)),Gs.update(),u1(),h1();for(const s of Xr)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(dn.position.z=vn.damp(dn.position.z,Zs()?-2.5:0,2,e),dn.position.y=vn.damp(dn.position.y,Zs()?.4:0,2,e),el.rotation.z=t*we.energy*.28,au.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,_f.material.emissiveIntensity=.45+we.energy*1.5,mc.uniforms.uTime.value=t,mc.uniforms.uEnergy.value=we.energy,nl.rotation.z=t*(.09+we.energy*.23),vf.forEach(s=>s.intensity=.65+we.energy*1.5),ru.intensity=2+we.energy*4,Qe.position.x=vn.damp(Qe.position.x,yi.x,1.6,e),Qe.position.z=vn.damp(Qe.position.z,yi.z,1.6,e),Qe.position.y=vn.damp(Qe.position.y,yi.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=vn.smoothstep(s,0,2);Qe.position.lerpVectors(Tf,new U(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=vn.smoothstep(s,10,12);Qe.position.lerpVectors(new U(-6,.65,-3.25),yi,r),Qe.rotation.x=(1-r)*Math.PI*2}we.loop||(Qe.rotation.x=0,Pn("ну вот и дома"),zt())}if(at.place(),Qe.rotation.y=Math.sin(t*.3)*.12,hu.rotation.y=t*.13,Uo.position.x=Qe.position.x,Uo.position.z=Qe.position.z,Uo.rotation.z=.04*Math.sin(t),Or.position.x=Qe.position.x,Or.position.z=Qe.position.z,ks=vn.damp(ks,1,.85,e),Fr.scale.y=ks,Fr.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Pn("чай готов. живём."),zt(),Ri(440))),tl.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),cu.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),Ef.update(at.watching()),sl.update(e,t),Yr.update(e,t),Dn.update(e,t),ai.update(e,t),li.update(e,t),ui.update(e),wi.update(e),hi.update(e),Ei.update(e),Hi.update(e),dn.visible=!(Zt==="bench"&&we.selected==="bench"&&!Ae("#inspector").classList.contains("collapsed")&&!en),Vi.update(e),bi.update(Ro),Mn.update(e,t),Jn.update(e,t),ql!==we.dockPending&&(ql=we.dockPending,rl.dock.classList.toggle("waiting",ql)),ou.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),bf.rotation.y=t*.003,we.running&&t-$h>3.5&&($h=t,Ri([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),o1.update(!en&&Oe.zoom>=.4&&we.markers,os.width,os.height),en||n>wf)Xl.classList.contains("visible")&&Xl.classList.remove("visible");else{dr.copy(Qe.position),dr.y+=1.52,dr.project(Oe);const s=Math.round(Math.max(85,Math.min(os.width-85,(dr.x+1)*os.width*.5))*10)/10,r=Math.round((1-dr.y)*os.height*.5*10)/10;(s!==Hh||r!==Wh)&&(Hh=s,Wh=r,Xl.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}cs&&performance.now()>cs&&(ut.shadowMap.needsUpdate=!0,cs=0),ut.render(gn,Oe)}we.running&&(Ae("#object-action").innerHTML="остановить двор <span>↗</span>");zt();ut.setAnimationLoop(d1);requestAnimationFrame(()=>Ae("#loading").classList.add("done"));window.__yard={state:we,select:$i,inspect:()=>({resident:at.inspect(),territory:Gs.inspect(),sleepBody:Ef.inspect(),sleepDream:sl.inspect(),quietDream:Yr.inspect(),cloudDream:li.inspect(),cloudDreamScreen:li.inspect().landmarks.map(n=>Kt(new U(...n))),meterDream:ai.inspect(),meterDreamScreen:ai.inspect().landmarks.map(n=>Kt(new U(...n))),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>Kt(new U(...n))),roofDreamLetterScreen:Kt(new U(...Dn.inspect().letter)),dreamId:en?pt:null,garage:ui.inspect(),garageScreen:Kt(new U(...ui.inspect().garage).add(new U(-24,-.7,-24))),garageCarScreen:Kt(new U(-32,-.7,-24)),quotes:wi.inspect(),quoteScreens:wi.inspect().quotePositions.map(n=>Kt(new U(...n).add(new U(24,-1.05,24)))),dash:hi.inspect(),dashSnailScreen:Kt(new U(...hi.inspect().snail).add(new U(0,-1,-24))),dashBeamScreen:Kt(new U(...hi.inspect().beam).add(new U(0,-1.5,-24))),drydock:Ei.inspect(),drydockShipScreen:Kt(new U(...Ei.inspect().ship).add(new U(-24,-.5,0))),bench:Hi.inspect(),benchScreen:Kt(new U(-2.65,1.58,-3.18)),benchBucketScreen:Kt(new U(-4.75,1.51,-3.63)),roofVisible:dn.visible,amnesty:Vi.inspect(),amnestyScreen:Kt(new U(0,-.3,24)),cellar:bi.inspect(),cellarScreen:Kt(new U(24,-.3,.25)),objects:Object.keys(kn),greenhouse:Mn.inspect(),dock:Jn.inspect(),boatScreen:Kt(new U(...Jn.inspect().boat).add(new U(0,.2,0))),drawCalls:ut.info.render.calls,triangles:ut.info.render.triangles,gpuGeometries:ut.info.memory.geometries,zoom:Oe.zoom,target:Je.target.toArray(),angle:fn.angle,head:Qe.position.toArray(),roof:dn.position.toArray(),roofOpen:Zs(),roofMode:we.roof===null?"auto":"manual",pendulums:Xr.map(n=>n.group.rotation.x),growth:ks,meshes:(()=>{let n=0;return gn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ut.domElement.width,ut.domElement.height]})};e1();
