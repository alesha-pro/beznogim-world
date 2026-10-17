(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const qn=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],br=[1,1,2],tc=n=>n===1?1:0;function ks(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min(qn[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===qn[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return tc((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(br[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Er(n){const e=tc(n[0]);return{bay:2*e+tc(n[e+1]),side:e}}function sp(n){const e=n.slice(),t=Er(e).side;return e[0]^=1,e[t+1]^=1,e}function gl(n){return qn.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function rd(n,e,t){const i=ks(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:ks({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:ks({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<br[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Er(i.switches),c=qn[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:c,success:o===c,before:i.switches.slice()},i.switches=sp(i.switches),s={ok:!0,bay:o,target:c,success:r.success},r.success?(i.cursor++,i.cursor===qn[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function rp(n){const e=ks(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,c)=>a.cost-c.cost||a.path.length-c.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,c]of[["release",null],["flip",0],["flip",1],["flip",2]]){const l=rd(r,a,c);!l.result.ok||l.state.phase==="spilled"||t.push({s:l.state,path:[...s.path,{action:a,index:c}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function op(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),c=o-a;return s[a].map((l,u)=>l+(s[a+1][u]-l)*c+(u===1&&a===3?.5*Math.sin(c*Math.PI):0))}function ap({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,localPlay:p}){const g=s([-23,-1.1,-32],e);g.name="backup-fork";const _=i("#263f46"),m=i("#c5ccbe",{metalness:.65,roughness:.3}),f=i("#e4bc77"),M=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(V=>i(V,{emissive:V,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,g),r([0,-.01,0],[6.6,.1,5.8],_,g);for(const V of[-2.8,2.8])for(const I of[-2.4,2.4])r([V,-.6,I],[.14,1.2,.14],t.metal,g);function E(V,I,J,ae,se){const R=u(V,I,J,ae,se),L=R.material.map.image;L.width=L.height=128;const k=L.getContext("2d");return k.fillStyle="#29464b",k.fillRect(0,0,128,128),k.strokeStyle="#e4dfc8",k.lineWidth=3,k.strokeRect(5,5,118,118),k.fillStyle="#fff1c9",k.font="bold 90px monospace",k.textAlign="center",k.textBaseline="middle",k.fillText(V,64,68),R.material.map.needsUpdate=!0,R}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],S=[-2.8,-.9,.9,2.8],b=(V,I)=>{c(V,I,.075,m,g);for(const J of[-.14,.14])c([V[0]+J,V[1]+.08,V[2]],[I[0]+J,I[1]+.08,I[2]],.025,t.copper,g)};b([0,1.4,-2.5],x[0]);for(let V=0;V<2;V++){b(x[0],x[V+1]);for(let I=0;I<2;I++)b(x[V+1],[S[V*2+I],.4,2])}const T=x.map((V,I)=>{const J=s(V,g);a([0,0,0],.24,.13,t.copper,J);const ae=s([0,.13,0],J);return c([0,0,0],[0,.07,.66],.055,f,ae),o([0,.07,.66],.14,m,ae),E(["А","Б","В"][I],[.48,.38,-.08],.55,.5,J),ae}),v=S.map((V,I)=>(a([V,.15,2],.29,.32,t.copper,g),l([V,.37,2],.27,.04,M[I],g),E(String(I+1),[V,.74,2.65],.7,.65,g),o([V,.49,2],[.16,.2,.16],M[I],g))),w=S.map((V,I)=>{const J=s([V,.22,2],g);return r([0,0,0],[.66,.06,.7],M[I],J),J}),A=o([0,1.57,-2.5],.18,M[0],g),D=o([0,1.57,-2.5],.18,M[0],g),G=s([4,-.3,2.5],g);a([0,0,0],.4,.55,_,G),l([0,.28,0],.4,.045,m,G);const q=o([0,.21,0],.18,f,G);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,g);const z=Array.from({length:12},(V,I)=>{const J=s([3.6+I%2*.57,.18,-1.9+Math.floor(I/2)*.48],g);return a([0,0,0],.12,.14,_,J),o([0,.16,0],.13,M[qn.flat()[I]],J)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,g,{size:42});for(let V=0;V<4;V++)r([-25,-1.42,-28.7-V*.62],[.7,.1,.44],t.cream,e);d(g,[...T.map(V=>V.parent),...v,...w,A,D,G,...z]);let N;try{N=ks(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{N=ks()}let Y=null,W=1,Z="",X=null;const K=document.createElement("div");K.id="fork-controls",K.hidden=!0,K.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((V,I)=>`<button id="fork-flip-${I}" aria-label="Переключить развилку ${V}">${V} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before(K);function Q(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(N))}catch{}}const j=()=>W<1;function he(){const V=qn[N.wave].slice(N.cursor).map(ae=>ae+1).join(" → ")||"всё на месте";K.querySelector("#fork-readout").textContent=`волна ${N.wave+1}/3 · сохранено ${gl(N)}/12
очередь: ${V}
ручные щелчки ${N.used}/${br[N.wave]} · путь сейчас → ${Er(N.switches).bay+1}`,K.querySelector("#fork-notice").textContent=j()?"катится…":Z;const I=j()&&Y?Y.before:N.switches;T.forEach((ae,se)=>{ae.rotation.y=(I[se]?1:-1)*.68;const R=K.querySelector("#fork-flip-"+se);R.textContent=["А","Б","В"][se]+(N.switches[se]?" →":" ←"),R.setAttribute("aria-pressed",String(!!N.switches[se])),R.disabled=j()||N.phase!=="ready"||N.used>=br[N.wave],R.classList.toggle("hinted",(X==null?void 0:X.action)==="flip"&&X.index===se)});for(const ae of K.querySelectorAll(".fork-tools button"))ae.disabled=j();A.visible=N.phase==="ready"&&!j(),A.material=M[qn[N.wave][N.cursor]||0];const J=N.cursor-(j()&&(Y!=null&&Y.success)?1:0);v.forEach((ae,se)=>ae.visible=qn[N.wave].slice(0,J).includes(se)),w.forEach((ae,se)=>ae.visible=Er(I).bay===se),z.forEach((ae,se)=>ae.visible=se<gl(N)-(j()&&(Y!=null&&Y.success)?1:0)),q.visible=N.phase==="spilled"&&!j(),q.material=M[qn[N.wave][N.cursor]||0],D.visible=j()}function ge(V,I){if(j())return;p(),X=null;const J=rd(N,V,I);return N=J.state,Y=J.shot,W=Y?0:1,Z=J.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":N.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":N.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":N.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",Q(),he(),h(),J}["А","Б","В"].forEach((V,I)=>K.querySelector("#fork-flip-"+I).onclick=()=>ge("flip",I)),K.querySelector("#fork-reset").onclick=()=>ge("restart"),K.querySelector("#fork-all").onclick=()=>ge("all"),K.querySelector("#fork-hint").onclick=()=>{if(j())return;const V=rp(N);X=(V==null?void 0:V[0])||null,Z=X?X.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][X.index]}.`:N.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",he(),h()};function ye(V){if(!j())return;const I=W;W=Math.min(1,W+Math.min(.1,Math.max(0,V))/2.8),D.position.set(...op(Y,W)),D.position.y+=.17,D.material=M[Y.target],W===1&&I<1&&(he(),h())}return he(),Q(),{house:g,controls:K,update:ye,run:()=>ge(N.phase==="complete"?"all":N.phase==="rounddone"?"next":N.phase==="spilled"?"restart":"release"),card:()=>({action:j()?"лампочка катится…":N.phase==="complete"?"новая серия ↺":N.phase==="rounddone"?"следующая волна →":N.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:j(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...N,saved:gl(N),queue:qn[N.wave],limit:br[N.wave],path:Er(N.switches).bay,progress:W,shot:Y,notice:Z,hinted:X,rolling:D.position.toArray(),archive:z.map(V=>V.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function lp(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function zu(n){const e=n.state||{},t=(l,u,d,h)=>Number.isFinite(l)?Math.max(u,Math.min(d,Math.floor(l))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=l=>l&&typeof l=="object"?{seq:t(l.seq,1,999999,1),range:t(l.range,1,18,3),apex:Number.isFinite(l.apex)?Math.max(.5,Math.min(9,l.apex)):.5,end:Number.isFinite(l.end)?Math.max(0,Math.min(18,l.end)):0,outcome:["landed","short","far","bumped"].includes(l.outcome)?l.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const l=n.args||{};if(n.tool==="launch"&&l.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&l.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(l.power)||l.power<1||l.power>6||!Number.isInteger(l.angle)||l.angle<1||l.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=l.power,r.angle=l.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&l.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],d=r.power*(4-r.angle),h=r.power*r.angle/2,p=u.gap/2/d,g=p<=1?4*h*p*(1-p):0,_=p<=1&&g<u.barrier?"bumped":d<u.gap?"short":d>u.gap?"far":"landed";r.flight={seq:r.seq,range:d,apex:h,end:_==="bumped"?u.gap/2:d,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:d,apex:h,clearance:g,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],c={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:c[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function cp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:p}){var k,U,ee;const g=s([-24,-1.5,-24],e);g.name="pneumatic-garage-range";const _=i("#eee0b7"),m=i("#29464b"),f=i("#d87b4d"),M=i("#94b9a0"),E=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,g),r([0,.24,0],[20,.1,5],m,g);for(let P=-9;P<10;P++)r([P,.31,2],[.55,.03,.06],_,g);const x=s([-8,.45,0],g);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],E,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const P of[-.35,.35])for(const $ of[-.35,.35])o([P,.04,$],[.16,.16,.1],m,x);const S=s([-8,.37,0],g);S.name="flying-garage";for(const P of[-.9,.9])r([P,.74,0],[.12,1.5,1.6],M,S);r([0,.74,-.75],[1.8,1.5,.12],M,S),r([0,1.35,.76],[1.7,.27,.12],_,S);for(const P of[-1,1]){const $=r([P*.49,1.69,0],[1.16,.13,1.95],f,S);$.rotation.z=P*-.32}l("Г",[0,1.4,.86],.42,.29,S,{size:70});const b=[];for(const P of[-.74,.74])for(const $ of[-.59,.59])a([P,-.04,$],.15,.23,t.metal,S),b.push(r([P,-.32,$],[.12,.5,.12],_,S));const T=s([0,.35,0],g);r([0,0,0],[2.5,.12,2.2],_,T),r([0,.07,0],[1.95,.035,1.65],M,T),l("ПОСАДКА",[0,.24,1.18],2.2,.3,T,{size:50});const v=s([0,.34,0],g),w=r([0,.5,0],[.32,1,2.1],f,v);for(const P of[-1.2,1.2])c([0,0,P],[0,3.4,P],.04,t.metal,v);const A=l("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),D=s([0,.33,0],g);r([0,0,0],[1.6,.12,2],t.copper,D);for(let P=0;P<5;P++)r([0,.1+P*.12,0],[1.1,.04,1.4],_,D);const G=s([-8,.6,3.4],g);a([0,.65,0],.4,1.3,t.copper,G),c([0,1.3,0],[0,1.8,0],.07,m,G),c([-.5,1.8,0],[.5,1.8,0],.07,m,G);const q=Array.from({length:6},(P,$)=>r([.7,.14+$*.24,0],[.24,.17,.12],M,G)),z=s([3,.6,3.7],g);r([0,0,0],[3.8,.2,.9],t.copper,z);const N=Array.from({length:3},(P,$)=>{const te=s([-1.1+$*1.1,.2,0],z);return r([0,.1,0],[.65,.2,.55],m,te),o([0,.56,0],[.3,.34,.27],_,te),r([0,.57,.22],[.39,.19,.08],m,te),te});l("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,g,{size:55}),l("МАШИНА ДОМА",[-8,.9,2],2.8,.32,g,{size:50});for(let P=0;P<21;P++)r([-24,-1.42,-6-P*.65],[.9,.12,.49],t.cream,e);u(S,b),u(g,[x,S,T,v,D,G,z]);let Y=null,W=((ee=(U=(k=window.__beznogimState)==null?void 0:k.mechanics)==null?void 0:U.garage)==null?void 0:ee.public)||null,Z,X="",K="",Q=null,j=1,he="";try{Y=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function ge(P,$,te={}){const B=zu({mode:P,tool:$,args:te,state:Y});Y=B.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(Y))}catch{}return B}ge("migrate");const ye=document.createElement("div");ye.id="garage-controls",ye.hidden=!0,ye.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(P=>`<option>${P}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(P=>`<option>${P}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(ye);const V=()=>W&&h()?W:zu({mode:"migrate",state:Y}).public,I=()=>W&&h()?"resident":"sandbox";function J(P,$){var B;if(j<1)return;p();const te=ge("action",P,$);return he=((B=te.result)==null?void 0:B.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",R(0),d(),te}ye.querySelector("#garage-pump").onclick=()=>J("pump",{power:Number(ye.querySelector("#garage-power").value),angle:Number(ye.querySelector("#garage-angle").value)}),ye.querySelector("#garage-reset").onclick=()=>J("launch",{mode:"restart"});function ae(){if(!Z)return;const P=Z;ye.querySelector("#garage-readout").textContent=`испытание ${P.level}/3 · пролёт ${P.gap} · пробка ${P.barrier}
воздух ${P.air}/6 · дальность ${P.range} · вершина ${P.apex}
посадки ${P.landed}/3 · попытки ${P.attempts}`,ye.querySelector("#garage-notice").textContent=he;for(const $ of ye.querySelectorAll("select,#garage-pump"))$.disabled=j<1||["landed","complete"].includes(P.phase);ye.querySelector("#garage-reset").disabled=j<1}function se(P){const $=!Z||K!==I()||Z.run!==P.run;K=I(),$?(Q=P.flight,j=1,he=""):P.flight&&(!Z.flight||Z.flight.seq!==P.flight.seq)?(Q=P.flight,j=0):P.flight||(Q=null,j=1),Z=P,ye.querySelector("#garage-power").value=P.power,ye.querySelector("#garage-angle").value=P.angle,T.position.x=-8+P.gap*.7,v.position.x=-8+P.gap*.35,w.scale.y=P.barrier*.5,w.position.y=P.barrier*.25,A.position.y=P.barrier*.5+.4,N.forEach((te,B)=>te.visible=B<P.landed),q.forEach((te,B)=>te.visible=B<P.air),ae()}function R(P){P=Math.min(.1,Math.max(0,P));const $=V(),te=I()+":"+JSON.stringify($);te!==X&&(X=te,se($),d());const B=j;j=Math.min(1,j+P/3.6);const{x:oe,y:xe}=lp(Q,j);S.position.set(-8+oe*.7,.37+xe*.5,0),S.rotation.z=j<1?Math.sin(j*Math.PI*2)*.045:0,D.visible=!!Q&&["short","far"].includes(Q.outcome),D.position.x=-8+((Q==null?void 0:Q.range)||0)*.7,b.forEach(Se=>Se.visible=j>0&&j<.65),B<1&&j===1&&(ae(),d())}const L=()=>({action:I()==="resident"?"попробовать свой гараж":j<1?"гараж в воздухе…":Z.phase==="complete"?"новая серия ↺":Z.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(I()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+Z.message,disabled:j<1});return window.addEventListener("beznogim:state",({detail:P})=>{var te,B;const $=(B=(te=P.mechanics)==null?void 0:te.garage)==null?void 0:B.public;$&&(W=$)}),se(V()),X=I()+":"+JSON.stringify(V()),R(0),{house:g,controls:ye,update:R,card:L,run:()=>J("launch",{mode:Z.phase==="complete"?"restart":Z.phase==="landed"?"next":"jump"}),inspect:()=>({source:I(),...Z,progress:j,notice:he,garage:S.position.toArray(),car:x.position.toArray(),trophies:N.map(P=>P.visible)})}}const vr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function _l(n){const e=n.state||{},t=(u,d,h,p)=>Number.isFinite(u)?Math.max(d,Math.min(h,Math.floor(u))):p,i=t(e.planted,0,3,0),s=Math.min(2,i),r=vr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let c=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",c={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")c={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:vr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),c={ok:!0};else if(n.tool==="hint")c=up(a);else if(!["slide","plant"].includes(n.tool))c={ok:!1,reason:"unknown_tool"};else if(a.planted===3)c={ok:!1,reason:"complete"};else if(n.tool==="slide"){const d={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(d,u.direction))c={ok:!1,reason:"invalid_arguments"};else{const[h,p]=d[u.direction],g=a.positions[u.piece];let _=g%5,m=Math.floor(g/5);for(;_+h>=0&&_+h<5&&m+p>=0&&m+p<5&&!r.rocks.includes((m+p)*5+_+h)&&(m+p)*5+_+h!==a.positions[1-u.piece];)_+=h,m+=p;const f=m*5+_;a.positions[u.piece]=f,f!==g?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",c={ok:f!==g,from:g,to:f,reason:f===g?"blocked":"slid"}}}else a.positions.some((d,h)=>d!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",c={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=vr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",c={ok:!0,trees:a.planted*2})}const l=vr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:l.rocks,goals:l.goals,size:5},result:c,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function up(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=vr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((c,l)=>c===e.goals[l]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let c=0;c<2;c++)for(const[l,[u,d]]of Object.entries(s)){let h=o[c]%5,p=Math.floor(o[c]/5);for(;h+u>=0&&h+u<5&&p+d>=0&&p+d<5&&!e.rocks.includes((p+d)*5+h+u)&&(p+d)*5+h+u!==o[1-c];)h+=u,p+=d;const g=o.slice();g[c]=p*5+h;const _=g.join(",");i.has(_)||(i.add(_),t.push([g,[...a,{piece:c,direction:l}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function hp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:p}){var R,L,k;const g=s([24,-1.5,24],e);g.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),m=i("#274644"),f=i("#f2e3b9"),M=i("#dfaf57"),E=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,g),r([0,.17,1.5],[7.25,.14,7.25],m,g);const S=U=>[(U%5-2)*1.35,.46,(Math.floor(U/5)-2)*1.35+1.5],b=[];for(let U=0;U<25;U++){const[ee,,P]=S(U);b.push(r([ee,.27,P],[1.27,.12,1.27],_,g))}const T=Array.from({length:6},()=>{const U=s([0,0,0],g);return r([0,.24,0],[1.05,.42,1.05],t.concrete,U),r([0,.49,0],[.9,.08,.9],t.metal,U),U}),v=[1,3].map((U,ee)=>{const P=S(U),$=s([P[0],.4,P[2]],g);return r([0,-.02,0],[1.23,.07,1.23],ee?E:M,$),r([0,.025,0],[1.03,.04,1.03],f,$),l(ee?"»":"«",[0,.14,.38],.72,.55,$,{size:105}),$});function w(U){const ee=s(S(U?24:20),g);for(let P=0;P<2;P++){const $=(P-.5)*.34,te=U?-1:1;c([$+te*.22,.92,0],[$-te*.16,.5,0],.065,U?E:M,ee),c([$-te*.16,.5,0],[$+te*.22,.08,0],.065,U?E:M,ee)}return r([0,-.07,0],[.98,.09,.5],t.metal,ee),ee}const A=[w(0),w(1)],D=A.map(U=>r([0,-.13,0],[1.1,.04,.67],f,U));for(const U of[-3.9,0,3.9])r([U,.75,-2.05],[.18,1.25,.18],t.copper,g),r([U,1.39,-2.05],[.32,.12,.32],f,g);for(const U of[-2.8,2.8])r([U,.8,-2.05],[1.85,.14,.14],t.copper,g);const G=Array.from({length:6},(U,ee)=>{const P=s([-3.5+ee%3*3.5,.3,-3.5-Math.floor(ee/3)*1.9],g);a([0,.45,0],.12,.9,t.copper,P);for(let $=0;$<3;$++){const te=new n.Mesh(new n.ConeGeometry(.87-$*.17,1.3,5),x);te.position.y=.95+$*.56,te.castShadow=!0,P.add(te)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,P),P});l("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,g,{size:44}),l("СЕВЕР",[0,1.52,-2.05],1.45,.33,g,{size:60});for(let U=0;U<23;U++)r([24,-1.42,6.6+U*.54],[1,.13,.43],t.cream,e);u(g,[...T,...A,...v,...G]);let q=null,z=((k=(L=(R=window.__beznogimState)==null?void 0:R.mechanics)==null?void 0:L.quotes)==null?void 0:k.public)||null,N,Y="",W="",Z=0,X="",K=0,Q=Array(6).fill(0),j=[null,null];try{q=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function he(U,ee,P={}){const $=_l({mode:U,tool:ee,args:P,state:q});q=$.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(q))}catch{}return $}he("migrate");const ge=document.createElement("div");ge.id="quotes-controls",ge.hidden=!0,ge.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(ge);const ye=()=>z&&h()?z:_l({mode:"migrate",state:q}).public;function V(U,ee={}){if(K>0)return;p(),X="";const P=he("action",U,ee);return Y="",ae(0),d(),P}for(const U of ge.querySelectorAll("[data-quote]"))U.onclick=()=>{Z=Number(U.dataset.quote),X="",I()};for(const U of ge.querySelectorAll("[data-slide]"))U.onclick=()=>V("slide",{piece:Z,direction:U.dataset.slide});ge.querySelector("#quotes-pair").onclick=()=>V("restart",{scope:"pair"}),ge.querySelector("#quotes-hint").onclick=()=>{const U=_l({mode:"action",tool:"hint",state:ye()}).result;X=U.status==="route"?`${U.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[U.next.direction]} · осталось ходов: ${U.remaining}`:U.status==="aligned"?"Обе на месте. Выпускай.":U.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",I()};function I(){if(N){ge.querySelector("#quotes-readout").textContent=`пара ${N.level}/3 · ели ${N.trees}/6 · ходы ${N.moves}`,ge.querySelector("#quotes-hint-text").textContent=X;for(const U of ge.querySelectorAll("[data-quote]"))U.setAttribute("aria-pressed",Number(U.dataset.quote)===Z);for(const U of ge.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))U.disabled=K>0||N.phase==="complete";D.forEach((U,ee)=>U.visible=ee===Z&&N.phase!=="complete")}}function J(U){const ee=z&&h()?"resident":"sandbox",P=N,$=!P||P.run!==U.run||ee!==W;W=ee,$?(A.forEach((te,B)=>te.position.set(...S(U.positions[B]))),Q=G.map((te,B)=>B<U.trees?1:0),j=[null,null],K=0):U.planted>P.planted?(K=1.4,j=A.map((te,B)=>({from:te.position.clone(),to:G[(U.planted-1)*2+B].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):U.planted!==P.planted&&(Q=G.map((te,B)=>B<U.trees?1:0)),N=U,T.forEach((te,B)=>{if(te.visible=B<U.rocks.length,te.visible){const oe=S(U.rocks[B]);te.position.set(oe[0],.3,oe[2])}}),I()}function ae(U){U=Math.min(.1,Math.max(0,U));const ee=ye(),P=(z&&h()?"resident:":"sandbox:")+JSON.stringify(ee);P!==Y&&(Y=P,J(ee),d());const $=K>0;K=Math.max(0,K-U);for(let te=0;te<2;te++){const B=A[te],oe=j[te];if(oe&&K>0)oe.t=Math.min(1,oe.t+U/1.4),B.position.lerpVectors(oe.from,oe.to,oe.t*oe.t*(3-2*oe.t)),B.position.y+=Math.sin(oe.t*Math.PI)*.9,B.scale.setScalar(1-oe.t*.8);else{j[te]=null,B.scale.setScalar(1);const xe=S(ee.positions[te]);B.position.x=n.MathUtils.damp(B.position.x,xe[0],12,U),B.position.y=.46,B.position.z=n.MathUtils.damp(B.position.z,xe[2],12,U)}B.visible=!!j[te]||ee.phase!=="complete"}G.forEach((te,B)=>{const oe=B<ee.trees?1:0;Q[B]=n.MathUtils.damp(Q[B],oe,K>0?1:5,U),te.visible=Q[B]>.003,te.scale.setScalar(Math.max(.001,Q[B]))}),$&&K===0&&(I(),d())}const se=()=>({action:z&&h()?"попробовать свои ёлочки":N.phase==="complete"?"новый питомник ↺":K>0?"пролезают…":"выпустить пару",description:(z&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+N.message,disabled:K>0});return window.addEventListener("beznogim:state",({detail:U})=>{var P,$;const ee=($=(P=U.mechanics)==null?void 0:P.quotes)==null?void 0:$.public;ee&&(z=ee)}),J(ye()),Y=(z&&h()?"resident:":"sandbox:")+JSON.stringify(ye()),ae(0),{house:g,controls:ge,update:ae,card:se,run:()=>V(N.phase==="complete"?"restart":"plant",N.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:z&&h()?"resident":"sandbox",...N,busy:K,selected:Z,hint:X,quotePositions:A.map(U=>U.position.toArray()),treeScales:Q.slice(),visibleTrees:G.filter(U=>U.visible).length})}}function Bu(n){const e=n.state||{},t=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function dp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:p}){var J,ae,se;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const _=i("#28464d"),m=i("#eee4c9"),f=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],f,g);const M=s([0,0,0],g),E=s([0,0,0],g);for(const[R,L]of[[M,"ОТ"],[E,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,R),r([0,1.32,0],[2.12,.12,3.3],m,R),l(L,[0,.9,1.66],1,.36,R,{size:60});const x=s([0,1.43,0],g),S=s([0,0,0],x),b=s([0,0,0],x),T=r([-.5,0,0],[1,.15,.56],_,S),v=r([.5,0,0],[1,.15,.56],_,b),w=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),A=s([0,1.47,0],g);A.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,A),o([-.08,.46,0],[.39,.42,.29],t.copper,A),c([-.08,.47,.3],.23,.033,m,A,[0,0,0]),c([-.08,.47,.315],.12,.03,m,A,[0,0,0]);for(const R of[-.13,.13])a([.4,.17,R],[.62,.46,R],.02,t.leaf,A),o([.62,.46,R],[.055,.065,.055],_,A);r([-.16,.92,0],[.46,.32,.065],m,A),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,A),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,A);const D=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,D);const G=[".","?","!"].map((R,L)=>{const k=s([-1.1+L*1.1,.42,0],D);return r([0,0,0],[.8,.65,.11],m,k),l(R,[0,.02,.075],.55,.5,k,{size:100}),k});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const q=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,q);for(let R=-4;R<=4;R++)r([R,.07,0],[.035,.025,.26],_,q),l(String(R),[R,.08,.32],.4,.28,q,{size:45});for(let R=0;R<16;R++)r([1.5,-.1-R*.09,-5.9-R*.72],[1.05,.14,.65],t.cream,e);for(let R=0;R<8;R++)r([1.5,-1.45,-17.6-R*.5],[1.05,.14,.45],t.cream,e);const z=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,z),r([0,2.7,0],[.8,.14,.8],t.metal,z),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),z),u(A,[]),u(M,[]),u(E,[]),u(g,[M,E,x,...w,A,D]);let N=null,Y=((se=(ae=(J=window.__beznogimState)==null?void 0:J.mechanics)==null?void 0:ae.dash)==null?void 0:se.public)||null,W,Z="",X=1,K=0;try{N=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function Q(R,L,k={}){const U=Bu({mode:R,tool:L,args:k,state:N});N=U.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(N))}catch{}return U}Q("migrate");const j=document.createElement("div");j.id="dash-controls",j.hidden=!0,j.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(R,L)=>`<option value="${L+1}">${L+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(R=>`<option value="${R}">${R>0?"+":""}${R}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(j);const he=()=>Y&&h()?Y:Bu({mode:"migrate",state:N}).public;function ge(R,L){p(),Q("action",R,L),Z="",V(0),d()}j.querySelector("#dash-tune").onclick=()=>ge("tune",{span:Number(j.querySelector("#dash-span").value),shift:Number(j.querySelector("#dash-shift").value)}),j.querySelector("#dash-reset").onclick=()=>ge("reset");function ye(R){const L=["delivered","complete"].includes(R.phase);L?!W||W.run!==R.run||W.round!==R.round?X=1:["delivered","complete"].includes(W.phase)||(X=0):X=0,W=R,j.querySelector("#dash-readout").textContent=`почта ${R.delivered}/3 · пролёт ${R.gap} · центр ${R.center>0?"+":""}${R.center} · попытки ${R.attempts}`,j.querySelector("#dash-span").value=R.span,j.querySelector("#dash-shift").value=R.shift;for(const k of j.querySelectorAll("select,#dash-tune"))k.disabled=L;M.position.x=R.center-R.gap/2-1,E.position.x=R.center+R.gap/2+1,w[0].position.x=R.center-R.gap/2,w[1].position.x=R.center+R.gap/2,x.position.x=R.shift,T.scale.x=v.scale.x=R.span/2,T.position.x=-R.span/4,v.position.x=R.span/4,G.forEach((k,U)=>k.visible=U<R.delivered)}function V(R){const L=he(),k=JSON.stringify(L);k!==Z&&(Z=k,ye(L),d()),X=["delivered","complete"].includes(L.phase)?Math.min(1,X+R/4):0,K=n.MathUtils.damp(K,L.phase==="bent"?.22:0,6,R),S.rotation.z=K,b.rotation.z=-K,x.position.y=1.43-Math.sin(K)*L.span/2,A.position.x=M.position.x+(E.position.x-M.position.x)*(X*X*(3-2*X)),A.position.y=1.47,A.rotation.z=X>0&&X<1?Math.sin(X*30)*.025:0}const I=()=>{const R=W||he();return{action:Y&&h()?"попробовать свою почту":R.phase==="complete"?"новая почта ↺":R.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(Y&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+R.message}};return window.addEventListener("beznogim:state",({detail:R})=>{var k,U;const L=(U=(k=R.mechanics)==null?void 0:k.dash)==null?void 0:U.public;L&&(Y=L)}),ye(he()),Z=JSON.stringify(he()),A.position.x=X===1?E.position.x:M.position.x,{house:g,controls:j,update:V,card:I,run:()=>{if(X>0&&X<1)return;const R=he().phase;ge(R==="complete"?"reset":R==="delivered"?"next":"cross")},inspect:()=>({source:Y&&h()?"resident":"sandbox",...W,walk:X,bend:K,snail:A.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:E.position.x,stamps:G.map(R=>R.visible)})}}function ku(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function fp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:p,localPlay:g}){var ae,se,R;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const m=i("#d0b987"),f=i("#556f7f"),M=i("#a65d42"),E=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const L of[-2,2])r([.5,.96,L],[12.9,1.1,.22],t.copper,_);for(const L of[-6,7])r([L,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(L,k)=>r([-4+k*2,.98,0],[1.9,1,3.7],m,_)),S=r([.5,.54,0],[12.6,.04,3.75],E,_);S.castShadow=!1;const b=Array.from({length:3},(L,k)=>{const U=s([-4+k*2,.35,3.05],_);for(let ee=0;ee<5;ee++)o([(ee-2)*.27,.16+ee%2*.1,0],[.32,.22,.4],m,U);return U}),T=s([-2,1.3,0],_);T.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([L,k],U)=>U?v.lineTo(L,-k):v.moveTo(L,-k)),v.closePath();const w=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});w.rotateX(-Math.PI/2);const A=new n.Mesh(w,f);A.castShadow=!0,A.receiveShadow=!0,T.add(A),r([-.45,.7,0],[4.9,.09,1.4],t.cream,T);for(let L=0;L<3;L++){r([-.95+L*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][L],T);for(const k of[-.601,.601])for(let U=0;U<4;U++)r([-.95+L*.92-.3+U*.2,1.03,k],[.024,.5,.025],t.dark,T)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,T),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,T);for(const L of[-.63,.63])r([-2.25,1.6,L],[.73,.16,.03],t.dark,T);a([-2.45,1.98,0],.15,.43,M,T),a([-2.45,2.21,0],.15,.05,t.dark,T),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,T),r([2.55,1.7,0],[.48,.26,.03],t.cream,T);for(const L of[-2.9,2.1])for(const k of[-.7,.7])c([L,.7,k],[L,1,k],.025,t.cream,T);for(const L of[-.7,.7])c([-2.9,1,L],[2.1,1,L],.025,t.cream,T);const D=s([5.9,1.1,3.4],_);l([0,0,0],.4,.04,t.copper,D,[0,0,0]);for(let L=0;L<4;L++){const k=L*Math.PI/2;c([0,0,0],[.4*Math.cos(k),.4*Math.sin(k),0],.025,t.copper,D)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const G=r([5.9,.8,1.75],[.19,.55,.19],E,_);G.castShadow=!1;const q=s([0,.29,0],_);for(const L of[-2.9,2.9])r([.5,0,L],[13,.02,1.1],E,q);for(let L=0;L<3;L++)u(["КОРМА","ТРЮМ","НОС"][L],[-4+L*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const L of[-6.6,6.6])c([L,.3,-3.8],[L,3.6,-3.8],.08,t.metal,_),r([L,3.6,-3.5],[.55,.16,.8],t.metal,_),r([L,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let L=0;L<15;L++)r([-7.2-L*.72,-.03-L*.09,1.2],[.65,.14,1.12],t.cream,e);const z=s([-6.5,.5,3.3],_);c([0,0,0],[0,1.5,0],.045,t.copper,z),r([0,.1,0],[.32,.35,.08],t.metal,z),l([0,1.53,0],.1,.025,t.metal,z,[0,0,0]),d(T,[]),d(_,[...x,...b,S,T,D,G,q]);let N=null,Y=((R=(se=(ae=window.__beznogimState)==null?void 0:ae.mechanics)==null?void 0:se.drydock)==null?void 0:R.public)||null,W,Z="",X=0,K=0,Q=0;try{N=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function j(L,k,U={}){const ee=ku({mode:L,tool:k,args:U,state:N});N=ee.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(N))}catch{}return ee}j("migrate");const he=document.createElement("div");he.id="drydock-controls",he.hidden=!0,he.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(he);function ge(){return Y&&p()?Y:ku({mode:"migrate",state:N}).public}function ye(L,k){g(),j("action",L,k),Z="",J(0),h()}he.querySelectorAll("[data-dig]").forEach(L=>L.onclick=()=>ye("dig",{channel:Number(L.dataset.dig)})),he.querySelector("#drydock-fill").onclick=()=>ye("pump",{direction:"fill"}),he.querySelector("#drydock-drain").onclick=()=>ye("pump",{direction:"drain"}),he.querySelector("#drydock-reset").onclick=()=>ye("reset");function V(L){W?(W.water!==L.water&&(X=2),W.floods!==L.floods&&(K=3),!W.launched&&L.launched&&(Q=0)):Q=L.launched?1:0,W=L,he.querySelector("#drydock-readout").textContent=`каналы ${L.depths.join(" / ")} · вода ${L.water}/2 · переливы ${L.floods}`,he.querySelectorAll("[data-dig]").forEach(k=>{k.disabled=L.launched||L.water>0||L.depths[Number(k.dataset.dig)]===2}),he.querySelector("#drydock-fill").disabled=L.launched,he.querySelector("#drydock-drain").disabled=L.launched||L.water===0,x.forEach((k,U)=>{const ee=1-L.depths[U]*.4;k.scale.y=ee,k.position.y=.48+ee/2,b[U].scale.setScalar(.45+L.depths[U]*.4)}),S.visible=L.water>0,S.position.y=.49+L.water*.39}function I(){const L=W||ge();return{action:Y&&p()?"попробовать свой спуск":L.launched?"корабль в песок ↺":"спустить корабль",description:(Y&&p()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+L.message}}function J(L){const k=ge(),U=JSON.stringify(k);U!==Z&&(Z=U,V(k),h()),X=Math.max(0,X-L),K=Math.max(0,K-L),G.visible=X>0&&k.water>0,q.visible=K>0,D.rotation.z+=X>0?L*3:0,Q=k.launched?Math.min(1,Q+L/5):0;const ee=Q*Q*(3-2*Q);T.position.x=-2+ee*5.6;const P=Math.min(...k.depths),$=k.afloat?.94:1.15-P*.32;T.position.y=n.MathUtils.damp(T.position.y,$,4,L),T.rotation.z=n.MathUtils.damp(T.rotation.z,k.afloat?0:(k.depths[2]-k.depths[0])*.085,4,L)}return window.addEventListener("beznogim:state",({detail:L})=>{var U,ee;const k=(ee=(U=L.mechanics)==null?void 0:U.drydock)==null?void 0:ee.public;k&&(Y=k,Z="")}),V(ge()),T.position.x=ge().launched?3.6:-2,{house:_,controls:he,update:J,card:I,run:()=>ye(ge().launched?"reset":"launch"),inspect:()=>({source:Y&&p()?"resident":"sandbox",...W,ship:T.position.toArray(),pitch:T.rotation.z,waterY:S.position.y,voyage:Q,sandHeights:x.map(L=>L.scale.y),floodVisible:q.visible})}}function Gu(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function pp({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,changed:d,watching:h,localPlay:p}){var he,ge,ye;const g=s([0,0,0],e);g.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],_,g),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const f=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let V=0;V<7;V++)for(let I=0;I<9;I++)M.push(r([.55+(I-4)*.145,1.5+(3-V)*.14,-.683],[.13,.12,.02],m,g));const E=s([-1.05,1.24,-.38],g);E.name="core-gear",a([0,0,0],.3,.11,t.copper,E).rotation.x=Math.PI/2;const x=[];for(let V=0;V<12;V++){const I=V/12*Math.PI*2;let J=r([Math.cos(I)*.33,Math.sin(I)*.33,0],[.13,.13,.12],t.copper,E);J.rotation.z=I,x.push(J)}l([0,0,.06],.13,.025,t.dark,E,[0,0,0]);const S=s([-.4,1.12,-.38],g);l([0,0,0],.19,.035,t.dark,S,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,S);const b=s([0,0,0],g);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,b),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,b);const T=s([-1.5,1,-.05],g);c([0,0,0],[.23,0,0],.04,t.metal,T),c([.23,0,0],[.23,.23,0],.04,t.copper,T),o([.23,.23,0],.08,t.rust,T);const v=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),l([0,.29,0],.33,.025,t.copper,v),l([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const w=Array.from({length:3},(V,I)=>o([.17+I*.3,2.23,-.82],.06,t.mint,g));let A=null,D=((ye=(ge=(he=window.__beznogimState)==null?void 0:he.mechanics)==null?void 0:ge.bench)==null?void 0:ye.public)||null,G,q="",z=0;try{A=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function N(V,I,J={}){const ae=Gu({mode:V,tool:I,args:J,state:A});A=ae.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(A))}catch{}return ae}N("migrate");const Y=document.createElement("div");Y.id="bench-controls",Y.hidden=!0,Y.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(Y);function W(){return D&&h()?D:Gu({mode:"migrate",state:A}).public}function Z(V,I){p(),N("action",V,I),q="",j(0),d()}Y.querySelectorAll("[data-part]").forEach(V=>V.onclick=()=>Z("fit",{part:V.dataset.part,value:Number(V.dataset.value)})),Y.querySelector("#bench-salvage").onclick=()=>Z("salvage"),Y.querySelector("#bench-restart").onclick=()=>Z("restart");function X(V){G&&G.attempts!==V.attempts&&(z=3),G=V,Y.querySelector("#bench-readout").textContent=`экран ${V.round+1}/3 · скорость ${V.speed} / нужно ${V.target}`,Y.querySelectorAll("[data-part]").forEach(I=>{I.setAttribute("aria-pressed",String(V[I.dataset.part]===Number(I.dataset.value))),I.disabled=V.phase!=="ready"}),Y.querySelector("#bench-salvage").disabled=!V.bucket,_.color.set(V.picture?"#16362c":"#e9e4cc"),_.emissive.set(V.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=V.picture?.1:.6,M.forEach((I,J)=>I.visible=!!V.picture&&f[V.picture-1][J]==="1"),x.forEach((I,J)=>I.visible=J<V.core*3),S.scale.setScalar(.75+V.belt*.25),b.visible=!V.bucket,w.forEach((I,J)=>I.visible=J<V.repairs)}const K={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function Q(){const V=G||W();return{action:D&&h()?"собрать свой монитор":V.phase==="ejected"?"достать ядро":V.phase==="repaired"?V.round===2?"закончить работу":"следующий экран":V.phase==="complete"?"ещё раз":"крутить рукоятку",description:(D&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+K[V.phase]}}function j(V){const I=W(),J=JSON.stringify(I);J!==q&&(q=J,X(I),d()),z=Math.max(0,z-V);const ae=Math.min(1,V*7),se=I.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];E.position.lerp(new n.Vector3(...se),ae),E.rotation.x=n.MathUtils.lerp(E.rotation.x,I.bucket?-Math.PI/2:0,ae);const R=z>0?I.core*2:I.picture?.4:0;E.rotation.z+=V*R,S.rotation.z-=V*R*I.belt,T.rotation.z+=V*R}return window.addEventListener("beznogim:state",({detail:V})=>{var J,ae;const I=(ae=(J=V.mechanics)==null?void 0:J.bench)==null?void 0:ae.public;I&&(D=I,q="")}),X(W()),E.position.set(...W().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:Y,update:j,card:Q,run:()=>{const V=W();Z(V.phase==="ejected"?"salvage":V.phase==="repaired"?"next":V.phase==="complete"?"restart":"crank")},inspect:()=>({source:D&&h()?"resident":"sandbox",...G,corePosition:E.position.toArray(),coreAngle:E.rotation.z,driveAngle:S.rotation.z,litPixels:M.filter(V=>V.visible).length})}}const Vu=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function Hu(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function Wu(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):Hu();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,Hu(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const u=Vu[e.round],d=u.weights.reduce((h,p,g)=>h+(e.loaded[g]?p+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,d!==u.target?(e.status=d<u.target?"under":"over",i={ok:!1,reason:e.status,total:d,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,p)=>{e.loaded[p]&&e.delivered.push({id:`${e.run}:${e.round}:${p}`,weight:h})}),i={ok:!0,total:d,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Vu[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,u)=>c+(e.loaded[u]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function mp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:p,localPlay:g}){var I,J,ae;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const m=i("#9d8560"),f=i("#a1b56f"),M=i("#f1d29a"),E=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],E,_),r([3.65,-.14,0],[3.3,.5,7],E,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const se of[-4.9,4.9])c([se,0,-3],[se,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,_);const x=s([0,.2,1.15],_);for(let se=0;se<11;se++)r([-2+se*.4,0,0],[.38,.16,1.65],m,x);for(const se of[-.72,.72])c([-2.2,.22,se],[2.2,.22,se],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const S=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,S);for(const se of[-.52,.52])for(const R of[-.58,.58]){const L=l([se,0,R],.17,.05,t.dark,S,[0,0,0]);L.rotation.y=Math.PI/2}const b=s([-4.7,.8,1.4],_);c([0,-.5,0],[0,.2,0],.1,t.metal,b);const T=s([0,0,0],b);c([0,0,0],[0,.8,0],.065,t.copper,T),o([0,.8,0],.14,t.rust,T),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const w=a([0,.7,0],.57,1.1,t.copper,v);l([0,1.28,0],.25,.045,t.dark,v);const A=Array.from({length:3},(se,R)=>o([1.75+R*.34,2.15,-3.05],.095,t.mint,_)),D=Array.from({length:3},(se,R)=>{const L=s([-3.6,.72,-2.1+R*1.08],_),k=o([0,0,0],[.28,.23,.57],f,L);k.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,L);const U=s([.45,.28,0],L);return r([0,0,0],[.29,.57,.4],M,U),r([0,0,.21],[.18,.045,.012],t.rust,U),{g:L,tax:U}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],m,_);const G=Array.from({length:6},(se,R)=>o([2.75+R%3*.7,1,-2.1+Math.floor(R/3)*.83],[.2,.19,.38],f,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const q=s([0,0,0],e);for(let se=0;se<15;se++){const R=se/14;r([-.6+Math.sin(R*Math.PI)*1.5,-1.55,17+se*.3],[.9,.12,.65],E,q)}for(let se=0;se<5;se++)r([-.8-se*.6,-1.55,21.5],[.75,.12,.75],E,q);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,q,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,q),d(q,[]),d(_,[x,S,b,v,...D.map(se=>se.g),...G,...A]),d(x,[]),d(S,[]);let z=null,N=((ae=(J=(I=window.__beznogimState)==null?void 0:I.mechanics)==null?void 0:J.amnesty)==null?void 0:ae.public)||null,Y,W="",Z=0;try{z=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function X(se,R,L={}){const k=Wu({state:z,mode:se,tool:R,args:L});z=k.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(z))}catch{}return k}X("migrate");const K=document.createElement("div");K.id="amnesty-controls",K.hidden=!0,K.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(K);function Q(){return N&&p()?N:Wu({state:z,mode:"migrate"}).public}function j(se,R){g(),X("action",se,R),W="",V(0),h()}for(const se of K.querySelectorAll("[data-load]"))se.onclick=()=>j("load",{index:Number(se.dataset.load)});K.querySelector("#amnesty-pardon").onclick=()=>j("amnesty"),K.querySelector("#amnesty-restart").onclick=()=>j("restart");const he={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function ge(se){Y=se;const R=se.status==="delivered"||se.status==="complete";K.querySelector("#amnesty-readout").textContent=`рейс ${se.round+1}/3 · груз ${se.total} / нужно ${se.target}`,K.querySelectorAll("[data-load]").forEach((L,k)=>{L.textContent=`${["A","B","C"][k]} · ${se.weights[k]}${se.debt[k]?` + ${se.debt[k]} бумага`:""}`,L.setAttribute("aria-pressed",String(se.loaded[k])),L.disabled=R}),K.querySelector("#amnesty-pardon").disabled=se.pardoned||R,K.querySelector("#amnesty-pardon").textContent=se.pardoned?"налог отменён":"отменить налог",w.scale.y=se.target/4,A.forEach((L,k)=>L.visible=k<(se.status==="complete"?3:se.round)),G.forEach((L,k)=>L.visible=k<se.delivered.length),D.forEach((L,k)=>{L.tax.visible=!se.pardoned||Z<.99,L.g.visible=!R||!se.loaded[k],L.g.scale.setScalar(.8+se.weights[k]*.08)})}function ye(){const se=Y||Q();return{action:N&&p()?"войти в свою амнистию":se.status==="delivered"?"следующий рейс":se.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(N&&p()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+he[se.status]}}function V(se,R){const L=Q(),k=JSON.stringify(L);k!==W&&(W=k,ge(L),h());const U=L.status==="delivered"||L.status==="complete",ee=(P,$)=>n.MathUtils.lerp(P,$,Math.min(1,se*5));x.rotation.z=ee(x.rotation.z,L.tilt),S.position.x=ee(S.position.x,U?3:-2.55),T.rotation.z=ee(T.rotation.z,L.pardoned?-.65:0),Z=ee(Z,L.pardoned?1:0),D.forEach(P=>{P.tax.position.y=.28+Z*2.5,P.tax.rotation.z=Z*.8,P.tax.visible=!L.pardoned||Z<.99}),G.forEach((P,$)=>P.visible=$<L.delivered.length-(U&&S.position.x<2.9?2:0)),D.forEach((P,$)=>{const te=L.loaded[$];P.g.visible=!U||!te||S.position.x<2.9,P.g.position.x=ee(P.g.position.x,te?S.position.x+($-1)*.42:-3.6),P.g.position.y=ee(P.g.position.y,te?.86:.72),P.g.position.z=ee(P.g.position.z,te?1.15:-2.1+$*1.08)})}return window.addEventListener("beznogim:state",({detail:se})=>{var L,k;const R=(k=(L=se.mechanics)==null?void 0:L.amnesty)==null?void 0:k.public;R&&(N=R,W="")}),Z=Q().pardoned?1:0,ge(Q()),{house:_,controls:K,update:V,card:ye,run:()=>j(Y.status==="delivered"?"next":Y.status==="complete"?"restart":"dispatch"),inspect:()=>({source:N&&p()?"resident":"sandbox",...Y,bridgeTilt:x.rotation.z,cartX:S.position.x,cargoPositions:D.map(se=>se.g.position.toArray()),taxVisible:D.map(se=>se.tax.visible),paperY:D.map(se=>se.tax.position.y),handleAngle:T.rotation.z,deliveredVisible:G.filter(se=>se.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="186",bi={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,nc=1,ad=2,Gs=1,ld=2,Fs=3,$i=0,gn=1,Ln=2,ui=0,Vs=1,ic=2,sc=3,rc=4,cd=5,cs=100,ud=101,hd=102,dd=103,fd=104,pd=200,md=201,gd=202,_d=203,Tc=204,Ac=205,vd=206,xd=207,yd=208,Md=209,Sd=210,bd=211,Ed=212,wd=213,Td=214,Vo=0,Ho=1,Wo=2,qs=3,Xo=4,qo=5,Yo=6,$o=7,Cc=0,Ad=1,Cd=2,Zn=0,Rc=1,Pc=2,Lc=3,Oa=4,Ic=5,Dc=6,Nc=7,Uc=300,Zi=301,ps=302,Uo=303,Oo=304,Xr=306,Dr=1e3,ai=1001,Zo=1002,Kt=1003,Rd=1004,xr=1005,jt=1006,Fo=1007,Gi=1008,yn=1009,Oc=1010,Fc=1011,Ys=1012,Fa=1013,Qn=1014,Nn=1015,jn=1016,za=1017,Ba=1018,$s=1020,zc=35902,Bc=35899,kc=1021,Gc=1022,Un=1023,fi=1026,Vi=1027,ka=1028,Ga=1029,Ji=1030,Va=1031,Ha=1033,wr=33776,Tr=33777,Ar=33778,Cr=33779,Jo=35840,Ko=35841,Qo=35842,jo=35843,ea=36196,ta=37492,na=37496,ia=37488,sa=37489,Nr=37490,ra=37491,oa=37808,aa=37809,la=37810,ca=37811,ua=37812,ha=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,va=37820,xa=37821,ya=36492,Ma=36494,Sa=36495,ba=36283,Ea=36284,Ur=36285,wa=36286,Pd=3200,Ta=0,Ld=1,yi="",an="srgb",Or="srgb-linear",Fr="linear",bt="srgb",zo=7680,Id=519,Dd=512,Nd=513,Ud=514,Wa=515,Od=516,Fd=517,Xa=518,zd=519,Bd=35044,oc="300 es",$n=2e3,Zs=2001;function gp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){const n=Aa("canvas");return n.style.display="block",n}const Xu={};function ac(...n){const e="THREE."+n.shift();console.log(e,...n)}function Gd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=Gd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ft(...n){n=Gd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ds(...n){const e=n.join(" ");e in Xu||(Xu[e]=!0,je(...n))}function _p(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const vp={[Vo]:Ho,[Wo]:Yo,[Xo]:$o,[qs]:qo,[Ho]:Vo,[Yo]:Wo,[$o]:Xo,[qo]:qs};class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const Rr=Math.PI/180,zr=180/Math.PI;function gs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Vc(n,e){return(n%e+e)%e}function xp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function yp(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function Mp(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function Sp(n,e=1){return e-Math.abs(Vc(n,e*2)-e)}function bp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tp(n,e){return n+Math.random()*(e-n)}function Ap(n){return n*(.5-Math.random())}function Cp(n){n!==void 0&&(qu=n);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rp(n){return n*Rr}function Pp(n){return n*zr}function Lp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ip(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Np(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:Rr,RAD2DEG:zr,generateUUID:gs,clamp:rt,euclideanModulo:Vc,mapLinear:xp,inverseLerp:yp,lerp:Pr,damp:Mp,pingpong:Sp,smoothstep:bp,smootherstep:Ep,randInt:wp,randFloat:Tp,randFloatSpread:Ap,seededRandom:Cp,degToRad:Rp,radToDeg:Pp,isPowerOfTwo:Lp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Dp,setQuaternionFromProperEuler:Np,normalize:dn,denormalize:Os},bu=class bu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bu.prototype.isVector2=!0;let Ee=bu;class Ri{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==p||u!==g){let m=c*h+l*p+u*g+d*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let f=1-a;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);f=Math.sin(f*M)/E,a=Math.sin(a*M)/E,c=c*f+h*a,l=l*f+p*a,u=u*f+g*a,d=d*f+_*a}else{c=c*f+h*a,l=l*f+p*a,u=u*f+g*a,d=d*f+_*a;const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Eu=class Eu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eu.prototype.isVector3=!0;let O=Eu;const vl=new O,Yu=new Ri,wu=class wu{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],M=s[1],E=s[4],x=s[7],S=s[2],b=s[5],T=s[8];return r[0]=o*_+a*M+c*S,r[3]=o*m+a*E+c*b,r[6]=o*f+a*x+c*T,r[1]=l*_+u*M+d*S,r[4]=l*m+u*E+d*b,r[7]=l*f+u*x+d*T,r[2]=h*_+p*M+g*S,r[5]=h*m+p*E+g*b,r[8]=h*f+p*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=t*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xl.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wu.prototype.isMatrix3=!0;let tt=wu;const xl=new tt,$u=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){const n={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Or]:{primaries:e,whitePoint:i,transfer:Fr,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const dt=Up();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ss;class Vd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=Aa("canvas")),Ss.width=e.width,Ss.height=e.height;const s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Op=0;class qa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yl(s[o].image)):r.push(yl(s[o]))}else r=yl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Fp=0;const Ml=new O;class tn extends Li{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=ai,s=ai,r=jt,o=Gi,a=Un,c=yn,l=tn.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=gs(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Uc;tn.DEFAULT_ANISOTROPY=1;const Tu=class Tu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,x=(p+1)/2,S=(f+1)/2,b=(u+h)/4,T=(d+_)/4,v=(g+m)/4;return E>x&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=T/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=T/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tu.prototype.isVector4=!0;let Nt=Tu;class Hd extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Hd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hc extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wd extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Na=class Na{constructor(e,t,i,s,r,o,a,c,l,u,d,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Bp)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Oi.crossVectors(i,bn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Oi.crossVectors(i,bn)),Oi.normalize(),so.crossVectors(bn,Oi),s[0]=Oi.x,s[4]=so.x,s[8]=bn.x,s[1]=Oi.y,s[5]=so.y,s[9]=bn.y,s[2]=Oi.z,s[6]=so.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],M=i[3],E=i[7],x=i[11],S=i[15],b=s[0],T=s[4],v=s[8],w=s[12],A=s[1],D=s[5],G=s[9],q=s[13],z=s[2],N=s[6],Y=s[10],W=s[14],Z=s[3],X=s[7],K=s[11],Q=s[15];return r[0]=o*b+a*A+c*z+l*Z,r[4]=o*T+a*D+c*N+l*X,r[8]=o*v+a*G+c*Y+l*K,r[12]=o*w+a*q+c*W+l*Q,r[1]=u*b+d*A+h*z+p*Z,r[5]=u*T+d*D+h*N+p*X,r[9]=u*v+d*G+h*Y+p*K,r[13]=u*w+d*q+h*W+p*Q,r[2]=g*b+_*A+m*z+f*Z,r[6]=g*T+_*D+m*N+f*X,r[10]=g*v+_*G+m*Y+f*K,r[14]=g*w+_*q+m*W+f*Q,r[3]=M*b+E*A+x*z+S*Z,r[7]=M*T+E*D+x*N+S*X,r[11]=M*v+E*G+x*Y+S*K,r[15]=M*w+E*q+x*W+S*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],M=c*p-l*h,E=a*p-l*d,x=a*h-c*d,S=o*p-l*u,b=o*h-c*u,T=o*d-a*u;return t*(_*M-m*E+f*x)-i*(g*M-m*S+f*b)+s*(g*E-_*S+f*T)-r*(g*x-_*b+m*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=t*a-i*o,E=t*c-s*o,x=t*l-r*o,S=i*c-s*a,b=i*l-r*a,T=s*l-r*c,v=u*_-d*g,w=u*m-h*g,A=u*f-p*g,D=d*m-h*_,G=d*f-p*_,q=h*f-p*m,z=M*q-E*G+x*D+S*A-b*w+T*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=(a*q-c*G+l*D)*N,e[1]=(s*G-i*q-r*D)*N,e[2]=(_*T-m*b+f*S)*N,e[3]=(h*b-d*T-p*S)*N,e[4]=(c*A-o*q-l*w)*N,e[5]=(t*q-s*A+r*w)*N,e[6]=(m*x-g*T-f*E)*N,e[7]=(u*T-h*x+p*E)*N,e[8]=(o*G-a*A+l*v)*N,e[9]=(i*A-t*G-r*v)*N,e[10]=(g*b-_*x+f*M)*N,e[11]=(d*x-u*b-p*M)*N,e[12]=(a*w-o*D-c*v)*N,e[13]=(t*D-i*w+s*v)*N,e[14]=(_*E-g*S-m*M)*N,e[15]=(u*S-d*E+h*M)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,p=r*u,g=r*d,_=o*u,m=o*d,f=a*d,M=c*l,E=c*u,x=c*d,S=i.x,b=i.y,T=i.z;return s[0]=(1-(_+f))*S,s[1]=(p+x)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(h+f))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+E)*T,s[9]=(m-M)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=bs.set(s[0],s[1],s[2]).length();const a=bs.set(s[4],s[5],s[6]).length(),c=bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const l=1/o,u=1/a,d=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=$n,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===$n)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Zs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Na.prototype.isMatrix4=!0;let gt=Na;const bs=new O,Vn=new gt,zp=new O(0,0,0),Bp=new O(1,1,1),Oi=new O,so=new O,bn=new O,Ju=new gt,Ku=new Ri;class Pi{constructor(e=0,t=0,i=0,s=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kp=0;const Qu=new O,Es=new Ri,mi=new gt,ro=new O,ar=new O,Gp=new O,Vp=new Ri,ju=new O(1,0,0),eh=new O(0,1,0),th=new O(0,0,1),nh={type:"added"},Hp={type:"removed"},ws={type:"childadded",child:null},Sl={type:"childremoved",child:null};class kt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new O,t=new Pi,i=new Ri,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new tt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ar,ro,this.up):mi.lookAt(ro,ar,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(mi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nh),ws.child=e,this.dispatchEvent(ws),ws.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new O(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Vc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bl(o,r,e+1/3),this.g=bl(o,r,e),this.b=bl(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=Xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return dt.workingToColorSpace(on.copy(this),e),Math.round(rt(on.r*255,0,255))*65536+Math.round(rt(on.g*255,0,255))*256+Math.round(rt(on.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(on.copy(this),t);const i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=an){dt.workingToColorSpace(on.copy(this),e);const t=on.r,i=on.g,s=on.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(oo);const i=Pr(Fi.h,oo.h,t),s=Pr(Fi.s,oo.s,t),r=Pr(Fi.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ct;ct.NAMES=Xd;class $a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new $a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qd extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new O,gi=new O,El=new O,_i=new O,Ts=new O,As=new O,ih=new O,wl=new O,Tl=new O,Al=new O,Cl=new Nt,Rl=new Nt,Pl=new Nt;class In{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),gi.subVectors(i,t),El.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(gi),c=Hn.dot(El),l=gi.dot(gi),u=gi.dot(El),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,i),Pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Cl,r.x),o.addScaledVector(Rl,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),gi.subVectors(e,t),Hn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Hn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ts.subVectors(s,i),As.subVectors(r,i),wl.subVectors(e,i);const c=Ts.dot(wl),l=As.dot(wl);if(c<=0&&l<=0)return t.copy(i);Tl.subVectors(e,s);const u=Ts.dot(Tl),d=As.dot(Tl);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ts,o);Al.subVectors(e,r);const p=Ts.dot(Al),g=As.dot(Al);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(As,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return ih.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(ih,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),lo.subVectors(this.max,lr),Cs.subVectors(e.a,lr),Rs.subVectors(e.b,lr),Ps.subVectors(e.c,lr),zi.subVectors(Rs,Cs),Bi.subVectors(Ps,Rs),is.subVectors(Cs,Ps);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-is.z,is.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!Ll(t,Cs,Rs,Ps,lo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Cs,Rs,Ps,lo))?!1:(co.crossVectors(zi,Bi),t=[co.x,co.y,co.z],Ll(t,Cs,Rs,Ps,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,ao=new Qi,Cs=new O,Rs=new O,Ps=new O,zi=new O,Bi=new O,is=new O,lr=new O,lo=new O,co=new O,ss=new O;function Ll(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);const a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ht=new O,uo=new Ee;let Xp=0;class Fn extends Li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xc extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const qp=new Qi,cr=new O,Il=new O;class ji{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Il)),this.expandByPoint(cr.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yp=0;const Cn=new gt,Dl=new kt,Ls=new O,En=new Qi,ur=new Qi,Jt=new O;class Gt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Xc:Wc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(En.min,ur.min),En.expandByPoint(Jt),Jt.addVectors(En.max,ur.max),En.expandByPoint(Jt)):(En.expandByPoint(ur.min),En.expandByPoint(ur.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Jt.fromBufferAttribute(a,l),c&&(Ls.fromBufferAttribute(e,l),Jt.add(Ls)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new O,c[v]=new O;const l=new O,u=new O,d=new O,h=new Ee,p=new Ee,g=new Ee,_=new O,m=new O;function f(v,w,A){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,A),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[A].add(_),c[v].add(m),c[w].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,w=M.length;v<w;++v){const A=M[v],D=A.start,G=A.count;for(let q=D,z=D+G;q<z;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new O,x=new O,S=new O,b=new O;function T(v){S.fromBufferAttribute(s,v),b.copy(S);const w=a[v];E.copy(w),E.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(b,w);const D=x.dot(c[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,w=M.length;v<w;++v){const A=M[v],D=A.start,G=A.count;for(let q=D,z=D+G;q<z;q+=3)T(e.getX(q+0)),T(e.getX(q+1)),T(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new Fn(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new O,$p=new O,Zp=new tt;class oi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Nl.subVectors(i,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Jp=0;class es extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Vs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new O,Ul=new O,ho=new O,fo=new O;class er{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ul.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),fo.copy(this.origin).sub(Ul);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=fo.dot(this.direction),c=-fo.dot(ho),l=fo.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ul).addScaledVector(ho,h),p}intersectSphere(e,t){if(e.radius<0)return null;xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,f=i.x-o.x,M=i.y-o.y,E=i.z-o.z,x=Math.abs(c),S=Math.abs(l),b=Math.abs(u);let T,v,w,A,D,G,q,z,N,Y,W,Z;if(x>=S&&x>=b?(w=c,G=d,N=g,Z=f,c>=0?(T=l,v=u,A=h,D=p,q=_,z=m,Y=M,W=E):(T=u,v=l,A=p,D=h,q=m,z=_,Y=E,W=M)):S>=b?(w=l,G=h,N=_,Z=M,l>=0?(T=u,v=c,A=p,D=d,q=m,z=g,Y=E,W=f):(T=c,v=u,A=d,D=p,q=g,z=m,Y=f,W=E)):(w=u,G=p,N=m,Z=E,u>=0?(T=c,v=l,A=d,D=h,q=g,z=_,Y=f,W=M):(T=l,v=c,A=h,D=d,q=_,z=g,Y=M,W=f)),w===0)return null;const X=T/w,K=v/w,Q=1/w,j=A-X*G,he=D-K*G,ge=q-X*N,ye=z-K*N,V=Y-X*Z,I=W-K*Z,J=V*ye-I*ge,ae=j*I-he*V,se=ge*he-ye*j;if(s){if(J<0||ae<0||se<0)return null}else if((J<0||ae<0||se<0)&&(J>0||ae>0||se>0))return null;const R=J+ae+se;if(R===0)return null;const L=Q*(J*G+ae*N+se*Z);return(R>0?L<0:L>0)?null:this.at(L/R,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qr extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sh=new gt,rs=new er,po=new ji,rh=new O,mo=new O,go=new O,_o=new O,Ol=new O,vo=new O,oh=new O,xo=new O;class _n extends kt{constructor(e=new Gt,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Ol.fromBufferAttribute(d,e),o?vo.addScaledVector(Ol,u):vo.addScaledVector(Ol.sub(t),u))}t.add(vo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(po.containsPoint(rs.origin)===!1&&(rs.intersectSphere(po,rh)===null||rs.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(sh.copy(r).invert(),rs.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,S=E;x<S;x+=3){const b=a.getX(x),T=a.getX(x+1),v=a.getX(x+2);s=yo(this,f,e,i,l,u,d,b,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=yo(this,o,e,i,l,u,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,S=E;x<S;x+=3){const b=x,T=x+1,v=x+2;s=yo(this,f,e,i,l,u,d,b,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,E=m+1,x=m+2;s=yo(this,o,e,i,l,u,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Kp(n,e,t,i,s,r,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===$i,a),c===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:n}}function yo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,mo),n.getVertexPosition(c,go),n.getVertexPosition(l,_o);const u=Kp(n,e,t,i,mo,go,_o,oh);if(u){const d=new O;In.getBarycoord(oh,mo,go,_o,d),s&&(u.uv=In.getInterpolatedAttribute(s,a,c,l,d,new Ee)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,c,l,d,new Ee)),o&&(u.normal=In.getInterpolatedAttribute(o,a,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};In.getNormal(mo,go,_o,h.normal),u.face=h,u.barycoord=d}return u}class qc extends tn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Kt,u=Kt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lc extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new gt,ah=new gt,Mo=[],lh=new Qi,Qp=new gt,hr=new _n,dr=new ji;class cc extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),lh.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),dr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(i),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),ah.multiplyMatrices(i,Is),hr.matrixWorld=ah,hr.raycast(e,Mo);for(let o=0,a=Mo.length;o<a;o++){const c=Mo[o];c.instanceId=r,c.object=this,t.push(c)}Mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(s*this.count),s,this.count,ka,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const os=new ji,jp=new Ee(.5,.5),So=new O;class Za{constructor(e=new oi,t=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],M=r[12],E=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,p-u,f-g,S-M).normalize(),s[1].setComponents(l+o,p+u,f+g,S+M).normalize(),s[2].setComponents(l+a,p+d,f+_,S+E).normalize(),s[3].setComponents(l-a,p-d,f-_,S-E).normalize(),i)s[4].setComponents(c,h,m,x).normalize(),s[5].setComponents(l-c,p-h,f-m,S-x).normalize();else if(s[4].setComponents(l-c,p-h,f-m,S-x).normalize(),t===$n)s[5].setComponents(l+c,p+h,f+m,S+x).normalize();else if(t===Zs)s[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=jp.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yc extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new O,Ra=new O,ch=new gt,fr=new er,bo=new ji,Fl=new O,uh=new O;class em extends kt{constructor(e=new Gt,t=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ca.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Ra);e.setAttribute("lineDistance",new xt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;ch.copy(s).invert(),fr.copy(e.ray).applyMatrix4(ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),M=u.getX(_+1),E=Eo(this,e,fr,c,f,M,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Eo(this,e,fr,c,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Eo(this,e,fr,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Eo(this,e,fr,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ca.fromBufferAttribute(a,s),Ra.fromBufferAttribute(a,r),t.distanceSqToSegment(Ca,Ra,Fl,uh)>i)return;Fl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Fl);if(!(l<e.near||l>e.far))return{distance:l,point:uh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class $c extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hh=new gt,uc=new er,wo=new ji,To=new O;class Yd extends kt{constructor(e=new Gt,t=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;hh.copy(s).invert(),uc.copy(e.ray).applyMatrix4(hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=l.getX(g);To.fromBufferAttribute(d,m),dh(To,m,c,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,_=p;g<_;g++)To.fromBufferAttribute(d,g),dh(To,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dh(n,e,t,i,s,r,o){const a=uc.distanceSqToPoint(n);if(a<t){const c=new O;uc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zc extends tn{constructor(e=[],t=Zi,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jc extends tn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends tn{constructor(e,t,i=Qn,s,r,o,a=Kt,c=Kt,l,u=fi,d=1){if(u!==fi&&u!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $d extends Js{constructor(e,t=Qn,i=Zi,s,r,o=Kt,a=Kt,c,l=fi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kc extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function g(_,m,f,M,E,x,S,b,T,v,w){const A=x/T,D=S/v,G=x/2,q=S/2,z=b/2,N=T+1,Y=v+1;let W=0,Z=0;const X=new O;for(let K=0;K<Y;K++){const Q=K*D-q;for(let j=0;j<N;j++){const he=j*A-G;X[_]=he*M,X[m]=Q*E,X[f]=z,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[f]=b>0?1:-1,u.push(X.x,X.y,X.z),d.push(j/T),d.push(1-K/v),W+=1}}for(let K=0;K<v;K++)for(let Q=0;Q<T;Q++){const j=h+Q+N*K,he=h+Q+N*(K+1),ge=h+(Q+1)+N*(K+1),ye=h+(Q+1)+N*K;c.push(j,he,ye),c.push(he,ge,ye),Z+=6}a.addGroup(p,Z,w),p+=Z,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ja extends Gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new O,u=new Ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yr extends Gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=i/2;let f=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function M(){const x=new O,S=new O;let b=0;const T=(t-e)/i;for(let v=0;v<=r;v++){const w=[],A=v/r,D=A*(t-e)+e;for(let G=0;G<=s;G++){const q=G/s,z=q*c+a,N=Math.sin(z),Y=Math.cos(z);S.x=D*N,S.y=-A*i+m,S.z=D*Y,d.push(S.x,S.y,S.z),x.set(N,T,Y).normalize(),h.push(x.x,x.y,x.z),p.push(q,1-A),w.push(g++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const A=_[w][v],D=_[w+1][v],G=_[w+1][v+1],q=_[w][v+1];(e>0||w!==0)&&(u.push(A,D,q),b+=3),(t>0||w!==r-1)&&(u.push(D,G,q),b+=3)}l.addGroup(f,b,0),f+=b}function E(x){const S=g,b=new Ee,T=new O;let v=0;const w=x===!0?e:t,A=x===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*A,0),h.push(0,A,0),p.push(.5,.5),g++;const D=g;for(let G=0;G<=s;G++){const z=G/s*c+a,N=Math.cos(z),Y=Math.sin(z);T.x=w*Y,T.y=m*A,T.z=w*N,d.push(T.x,T.y,T.z),h.push(0,A,0),b.x=N*.5+.5,b.y=Y*.5*A+.5,p.push(b.x,b.y),g++}for(let G=0;G<s;G++){const q=S+G,z=D+G;x===!0?u.push(z,z+1,q):u.push(z+1,z,q),v+=3}l.addGroup(f,v,x===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _s extends Yr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ka extends Gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const E=new O,x=new O,S=new O;for(let b=0;b<t.length;b+=3)p(t[b+0],E),p(t[b+1],x),p(t[b+2],S),c(E,x,S,M)}function c(M,E,x,S){const b=S+1,T=[];for(let v=0;v<=b;v++){T[v]=[];const w=M.clone().lerp(x,v/b),A=E.clone().lerp(x,v/b),D=b-v;for(let G=0;G<=D;G++)G===0&&v===b?T[v][G]=w:T[v][G]=w.clone().lerp(A,G/D)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){const A=Math.floor(w/2);w%2===0?(h(T[v][A+1]),h(T[v+1][A]),h(T[v][A])):(h(T[v][A+1]),h(T[v+1][A+1]),h(T[v+1][A]))}}function l(M){const E=new O;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(M),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function u(){const M=new O;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];const x=m(M)/2/Math.PI+.5,S=f(M)/Math.PI+.5;o.push(x,1-S)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const E=o[M+0],x=o[M+2],S=o[M+4],b=Math.max(E,x,S),T=Math.min(E,x,S);b>.9&&T<.1&&(E<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function p(M,E){const x=M*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){const M=new O,E=new O,x=new O,S=new O,b=new Ee,T=new Ee,v=new Ee;for(let w=0,A=0;w<r.length;w+=9,A+=6){M.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),S.copy(M).add(E).add(x).divideScalar(3);const D=m(S);_(b,A+0,M,D),_(T,A+2,E,D),_(v,A+4,x,D)}}function _(M,E,x,S){S<0&&M.x===1&&(o[E]=M.x-1),x.x===0&&x.z===0&&(o[E]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.vertices,e.indices,e.radius,e.detail)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ee:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],o=[],a=new O,c=new gt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(rt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qa extends ei{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*d+this.aX,l=h*d+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zd extends Qa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const fh=new O,ph=new O,zl=new Qc,Bl=new Qc,kl=new Qc;class jc extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ph.subVectors(s[0],s[1]).add(s[0]),l=ph);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fh),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),zl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),Bl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),kl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Bl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),kl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(zl.calc(c),Bl.calc(c),kl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function tm(n,e){const t=1-n;return t*t*e}function nm(n,e){return 2*(1-n)*n*e}function im(n,e){return n*n*e}function Lr(n,e,t,i){return tm(n,e)+nm(n,t)+im(n,i)}function sm(n,e){const t=1-n;return t*t*t*e}function rm(n,e){const t=1-n;return 3*t*t*n*e}function om(n,e){return 3*(1-n)*n*n*e}function am(n,e){return n*n*n*e}function Ir(n,e,t,i,s){return sm(n,e)+rm(n,t)+om(n,i)+am(n,s)}class eu extends ei{constructor(e=new Ee,t=new Ee,i=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ir(e,s.x,r.x,o.x,a.x),Ir(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jd extends ei{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ir(e,s.x,r.x,o.x,a.x),Ir(e,s.y,r.y,o.y,a.y),Ir(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tu extends ei{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends ei{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nu extends ei{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iu extends ei{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y),Lr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class su extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(mh(a,c.x,l.x,u.x,d.x),mh(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:Zd,CatmullRomCurve3:jc,CubicBezierCurve:eu,CubicBezierCurve3:Jd,EllipseCurve:Qa,LineCurve:tu,LineCurve3:Kd,QuadraticBezierCurve:nu,QuadraticBezierCurve3:iu,SplineCurve:su});class Qd extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Pa[s.type]().fromJSON(s))}return this}}class hc extends Qd{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new tu(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new nu(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new eu(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new su(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Qa(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $r extends hc{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new hc().fromJSON(s))}return this}}function lm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=jd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=fm(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){const p=n[h],g=n[h+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Br(r,o,t,a,c,l,0),o}function jd(n,e,t,i,s){let r;if(s===Em(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=gh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=gh(o/i|0,n[o],n[o+1],r);return r&&Ks(r,r.next)&&(Gr(r),r=r.next),r}function ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ks(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Br(n,e,t,i,s,r,o){if(!n)return;!o&&r&&vm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?um(n,i,s,r):cm(n)){e.push(c.i,n.i,l.i),Gr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=hm(ms(n),e),Br(n,e,t,i,s,r,2)):o===2&&dm(n,e,t,i,s,r):Br(ms(n),e,t,i,s,r,1);break}}}function cm(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&yr(s,a,r,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function um(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ut(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),f=dc(p,g,e,t,i),M=dc(_,m,e,t,i);let E=n.prevZ,x=n.nextZ;for(;E&&E.z>=f&&x&&x.z<=M;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&yr(a,u,c,d,l,h,E.x,E.y)&&Ut(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&yr(a,u,c,d,l,h,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&yr(a,u,c,d,l,h,E.x,E.y)&&Ut(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&yr(a,u,c,d,l,h,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ks(i,s)&&tf(i,t,t.next,s)&&kr(i,s)&&kr(s,i)&&(e.push(i.i,t.i,s.i),Gr(t),Gr(t.next),t=n=s),t=t.next}while(t!==n);return ms(t)}function dm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mm(o,a)){let c=nf(o,a);o=ms(o,o.next),c=ms(c,c.next),Br(o,e,t,i,s,r,0),Br(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function fm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=jd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(ym(l))}s.sort(pm);for(let r=0;r<s.length;r++)t=mm(s[r],t);return t}function pm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function mm(n,e){const t=gm(n,e);if(!t)return e;const i=nf(t,n);return ms(i,i.next),ms(t,t.next)}function gm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ks(n,t))return t;do{if(Ks(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&ef(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);kr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&_m(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function _m(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function vm(n,e,t,i){let s=n;do s.z===0&&(s.z=dc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function dc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ym(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ef(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function yr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&ef(n,e,t,i,s,r,o,a)}function Mm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Sm(n,e)&&(kr(n,e)&&kr(e,n)&&bm(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||Ks(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ks(n,e){return n.x===e.x&&n.y===e.y}function tf(n,e,t,i){const s=Co(Ut(n,e,t)),r=Co(Ut(n,e,i)),o=Co(Ut(t,i,n)),a=Co(Ut(t,i,e));return!!(s!==r&&o!==a||s===0&&Ao(n,t,e)||r===0&&Ao(n,i,e)||o===0&&Ao(t,n,i)||a===0&&Ao(t,e,i))}function Ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Co(n){return n>0?1:n<0?-1:0}function Sm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function kr(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function bm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function nf(n,e){const t=fc(n.i,n.x,n.y),i=fc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function gh(n,e,t,i){const s=fc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Em(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class wm{static triangulate(e,t,i=2){return lm(e,t,i)}}class hs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return hs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];_h(e),vh(i,e);let o=e.length;t.forEach(_h);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,vh(i,t[c]);const a=wm.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function _h(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function vh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class tr extends Gt{constructor(e=new $r([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Tm;let E,x=!1,S,b,T,v;if(f){E=f.getSpacedPoints(u),x=!0,h=!1;const U=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(u,U),b=new O,T=new O,v=new O}h||(m=0,p=0,g=0,_=0);const w=a.extractPoints(l);let A=w.shape;const D=w.holes;if(!hs.isClockWise(A)){A=A.reverse();for(let U=0,ee=D.length;U<ee;U++){const P=D[U];hs.isClockWise(P)&&(D[U]=P.reverse())}}function q(U){const P=10000000000000001e-36;let $=U[0];for(let te=1;te<=U.length;te++){const B=te%U.length,oe=U[B],xe=oe.x-$.x,Se=oe.y-$.y,H=xe*xe+Se*Se,ze=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs($.x),Math.abs($.y)),Ae=P*ze*ze;if(H<=Ae){U.splice(B,1),te--;continue}$=oe}}q(A),D.forEach(q);const z=D.length,N=A;for(let U=0;U<z;U++){const ee=D[U];A=A.concat(ee)}function Y(U,ee,P){return ee||ft("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ee,P)}const W=A.length;function Z(U,ee,P){let $,te,B;const oe=U.x-ee.x,xe=U.y-ee.y,Se=P.x-U.x,H=P.y-U.y,ze=oe*oe+xe*xe,Ae=oe*H-xe*Se;if(Math.abs(Ae)>Number.EPSILON){const F=Math.sqrt(ze),y=Math.sqrt(Se*Se+H*H),re=ee.x-xe/F,le=ee.y+oe/F,de=P.x-H/y,be=P.y+Se/y,Ce=((de-re)*H-(be-le)*Se)/(oe*H-xe*Se);$=re+oe*Ce-U.x,te=le+xe*Ce-U.y;const me=$*$+te*te;if(me<=2)return new Ee($,te);B=Math.sqrt(me/2)}else{let F=!1;oe>Number.EPSILON?Se>Number.EPSILON&&(F=!0):oe<-Number.EPSILON?Se<-Number.EPSILON&&(F=!0):Math.sign(xe)===Math.sign(H)&&(F=!0),F?($=-xe,te=oe,B=Math.sqrt(ze)):($=oe,te=xe,B=Math.sqrt(ze/2))}return new Ee($/B,te/B)}const X=[];for(let U=0,ee=N.length,P=ee-1,$=U+1;U<ee;U++,P++,$++)P===ee&&(P=0),$===ee&&($=0),X[U]=Z(N[U],N[P],N[$]);const K=[];let Q,j=X.concat();for(let U=0,ee=z;U<ee;U++){const P=D[U];Q=[];for(let $=0,te=P.length,B=te-1,oe=$+1;$<te;$++,B++,oe++)B===te&&(B=0),oe===te&&(oe=0),Q[$]=Z(P[$],P[B],P[oe]);K.push(Q),j=j.concat(Q)}let he;if(m===0)he=hs.triangulateShape(N,D);else{const U=[],ee=[];for(let P=0;P<m;P++){const $=P/m,te=p*Math.cos($*Math.PI/2),B=g*Math.sin($*Math.PI/2)+_;for(let oe=0,xe=N.length;oe<xe;oe++){const Se=Y(N[oe],X[oe],B);ae(Se.x,Se.y,-te),$===0&&U.push(Se)}for(let oe=0,xe=z;oe<xe;oe++){const Se=D[oe];Q=K[oe];const H=[];for(let ze=0,Ae=Se.length;ze<Ae;ze++){const F=Y(Se[ze],Q[ze],B);ae(F.x,F.y,-te),$===0&&H.push(F)}$===0&&ee.push(H)}}he=hs.triangulateShape(U,ee)}const ge=he.length,ye=g+_;for(let U=0;U<W;U++){const ee=h?Y(A[U],j[U],ye):A[U];x?(T.copy(S.normals[0]).multiplyScalar(ee.x),b.copy(S.binormals[0]).multiplyScalar(ee.y),v.copy(E[0]).add(T).add(b),ae(v.x,v.y,v.z)):ae(ee.x,ee.y,0)}for(let U=1;U<=u;U++)for(let ee=0;ee<W;ee++){const P=h?Y(A[ee],j[ee],ye):A[ee];x?(T.copy(S.normals[U]).multiplyScalar(P.x),b.copy(S.binormals[U]).multiplyScalar(P.y),v.copy(E[U]).add(T).add(b),ae(v.x,v.y,v.z)):ae(P.x,P.y,d/u*U)}for(let U=m-1;U>=0;U--){const ee=U/m,P=p*Math.cos(ee*Math.PI/2),$=g*Math.sin(ee*Math.PI/2)+_;for(let te=0,B=N.length;te<B;te++){const oe=Y(N[te],X[te],$);ae(oe.x,oe.y,d+P)}for(let te=0,B=D.length;te<B;te++){const oe=D[te];Q=K[te];for(let xe=0,Se=oe.length;xe<Se;xe++){const H=Y(oe[xe],Q[xe],$);x?ae(H.x,H.y+E[u-1].y,E[u-1].x+P):ae(H.x,H.y,d+P)}}}V(),I();function V(){const U=s.length/3;if(h){let ee=0,P=W*ee;for(let $=0;$<ge;$++){const te=he[$];se(te[2]+P,te[1]+P,te[0]+P)}ee=u+m*2,P=W*ee;for(let $=0;$<ge;$++){const te=he[$];se(te[0]+P,te[1]+P,te[2]+P)}}else{for(let ee=0;ee<ge;ee++){const P=he[ee];se(P[2],P[1],P[0])}for(let ee=0;ee<ge;ee++){const P=he[ee];se(P[0]+W*u,P[1]+W*u,P[2]+W*u)}}i.addGroup(U,s.length/3-U,0)}function I(){const U=s.length/3;let ee=0;J(N,ee),ee+=N.length;for(let P=0,$=D.length;P<$;P++){const te=D[P];J(te,ee),ee+=te.length}i.addGroup(U,s.length/3-U,1)}function J(U,ee){let P=U.length;for(;--P>=0;){const $=P;let te=P-1;te<0&&(te=U.length-1);for(let B=0,oe=u+m*2;B<oe;B++){const xe=W*B,Se=W*(B+1),H=ee+$+xe,ze=ee+te+xe,Ae=ee+te+Se,F=ee+$+Se;R(H,ze,Ae,F)}}}function ae(U,ee,P){c.push(U),c.push(ee),c.push(P)}function se(U,ee,P){L(U),L(ee),L(P);const $=s.length/3,te=M.generateTopUV(i,s,$-3,$-2,$-1);k(te[0]),k(te[1]),k(te[2])}function R(U,ee,P,$){L(U),L(ee),L($),L(ee),L(P),L($);const te=s.length/3,B=M.generateSideWallUV(i,s,te-6,te-3,te-2,te-1);k(B[0]),k(B[1]),k(B[3]),k(B[1]),k(B[2]),k(B[3])}function L(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function k(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Am(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pa[s.type]().fromJSON(s)),new tr(i,e.options)}}const Tm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Ee(r,o),new Ee(a,c),new Ee(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ee(o,1-c),new Ee(l,1-d),new Ee(h,1-g),new Ee(_,1-f)]:[new Ee(a,1-c),new Ee(u,1-d),new Ee(p,1-g),new Ee(m,1-f)]}};function Am(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zr extends Ka{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zr(e.radius,e.detail)}}class vs extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*h-o;for(let E=0;E<l;E++){const x=E*d-r;g.push(x,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const E=M+l*f,x=M+l*(f+1),S=M+1+l*(f+1),b=M+1+l*f;p.push(E,x,b),p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ja extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new O,h=new O,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const M=[],E=f/i,x=o+E*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S);let T=0;f===0&&o===0?T=.5/t:f===i&&c===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){const w=v/t,A=s+w*r;d.x=-b*Math.cos(A),d.y=S,d.z=b*Math.sin(A),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+T,1-E),M.push(l++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const E=u[f][M+1],x=u[f][M],S=u[f+1][M],b=u[f+1][M+1];(f!==0||o>0)&&p.push(E,x,b),(f!==i-1||c<Math.PI)&&p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class el extends Gt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new O,p=new O,g=new O;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let f=0;f<=s;f++){const M=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const f=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,x=(s+1)*_+m;c.push(f,M,x),c.push(M,E,x)}this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class tl extends Gt{constructor(e=new iu(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new O,c=new O,l=new Ee;let u=new O;const d=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function _(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),f()}function m(E){u=e.getPointAt(E/t,u);const x=o.normals[E],S=o.binormals[E];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,v=Math.sin(T),w=-Math.cos(T);c.x=w*x.x+v*S.x,c.y=w*x.y+v*S.y,c.z=w*x.z+v*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function f(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){const S=(s+1)*(E-1)+(x-1),b=(s+1)*E+(x-1),T=(s+1)*E+x,v=(s+1)*(E-1)+x;g.push(S,b,v),g.push(b,T,v)}}function M(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)l.x=E/t,l.y=x/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tl(new Pa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(xh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(xh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const s in i)e[s]=i[s]}return e}function xh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const rf={clone:Qs,merge:fn};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class of extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zs extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class af extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lf extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lm extends Yc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class nl extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cf extends nl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gl=new gt,yh=new O,Mh=new O;class ru{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Gl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Zs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ro=new O,Po=new Ri,ii=new O;class ou extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ro,Po,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ro,Po,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new O,Sh=new Ee,bh=new Ee;class wn extends ou{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,bh),t.subVectors(bh,Sh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Im extends ru{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class il extends nl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Jr extends ou{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dm extends ru{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Dm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ds=-90,Ns=1;class uf extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Ds,Ns,e,t);s.layers=this.layers,this.add(s);const r=new wn(Ds,Ns,e,t);r.layers=this.layers,this.add(r);const o=new wn(Ds,Ns,e,t);o.layers=this.layers,this.add(o);const a=new wn(Ds,Ns,e,t);a.layers=this.layers,this.add(a);const c=new wn(Ds,Ns,e,t);c.layers=this.layers,this.add(c);const l=new wn(Ds,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hf extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Eh=new gt;class df{constructor(e,t,i=0,s=1/0){this.ray=new er(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(e,t=!0,i=[]){return pc(e,this,i,t),i.sort(wh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)pc(e[s],this,i,t);return i.sort(wh),i}}function wh(n,e){return n.distance-e.distance}function pc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],e,t,!0)}}class mc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Au=class Au{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Au.prototype.isMatrix2=!0;let gc=Au;class ff extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Th(n,e,t,i){const s=Nm(i);switch(t){case kc:return n*e;case ka:return n*e/s.components*s.byteLength;case Ga:return n*e/s.components*s.byteLength;case Ji:return n*e*2/s.components*s.byteLength;case Va:return n*e*2/s.components*s.byteLength;case Gc:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Ha:return n*e*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ko:case jo:return Math.max(n,16)*Math.max(e,8)/4;case Jo:case Qo:return Math.max(n,8)*Math.max(e,8)/2;case ea:case ta:case ia:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case Nr:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ya:case Ma:case Sa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ba:case Ea:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ur:case wa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nm(n){switch(n){case yn:case Oc:return{byteLength:1,components:1};case Ys:case Fc:case jn:return{byteLength:2,components:1};case za:case Ba:return{byteLength:2,components:4};case Qn:case Fa:case Nn:return{byteLength:4,components:1};case zc:case Bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Um(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#endif`,N0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Qg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,o_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,c_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Om,alphahash_pars_fragment:Fm,alphamap_fragment:zm,alphamap_pars_fragment:Bm,alphatest_fragment:km,alphatest_pars_fragment:Gm,aomap_fragment:Vm,aomap_pars_fragment:Hm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:$m,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:u0,emissivemap_pars_fragment:h0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:x0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:E0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:O0,lights_fragment_end:F0,lightprobes_pars_fragment:z0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:$0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:K0,morphtarget_pars_vertex:Q0,morphtarget_vertex:j0,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:ug,packing:hg,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:xg,shadowmap_vertex:yg,shadowmask_pars_fragment:Mg,skinbase_vertex:Sg,skinning_pars_vertex:bg,skinning_vertex:Eg,skinnormal_vertex:wg,specularmap_fragment:Tg,specularmap_pars_fragment:Ag,tonemapping_fragment:Cg,tonemapping_pars_fragment:Rg,transmission_fragment:Pg,transmission_pars_fragment:Lg,uv_pars_fragment:Ig,uv_pars_vertex:Dg,uv_vertex:Ng,worldpos_vertex:Ug,background_vert:Og,background_frag:Fg,backgroundCube_vert:zg,backgroundCube_frag:Bg,cube_vert:kg,cube_frag:Gg,depth_vert:Vg,depth_frag:Hg,distance_vert:Wg,distance_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:$g,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:Kg,meshlambert_vert:Qg,meshlambert_frag:jg,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:o_,meshphysical_frag:a_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:u_,points_frag:h_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},De={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Yn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ct(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Yn.physical={uniforms:fn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Lo={r:0,b:0,g:0},g_=new gt,mf=new tt;mf.set(-1,0,0,0,1,0,0,0,1);function __(n,e,t,i,s,r){const o=new ct(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function p(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(M){let E=!1;const x=p(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,E){const x=p(E);x&&(x.isCubeTexture||x.mapping===Xr)?(l===void 0&&(l=new _n(new Ii(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Qs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(mf),l.material.toneMapped=dt.getTransfer(x.colorSpace)!==bt,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new vs(2,2),new Bn({name:"BackgroundMaterial",uniforms:Qs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(Lo,sf(n)),t.buffers.color.setClear(Lo.r,Lo.g,Lo.b,E,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:_,dispose:f}}function v_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,G,q,z,N){let Y=!1;const W=d(D,z,q,G);r!==W&&(r=W,l(r.object)),Y=p(D,z,q,N),Y&&g(D,z,q,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(D,G,q,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,G,q,z){const N=z.wireframe===!0;let Y=i[G.id];Y===void 0&&(Y={},i[G.id]=Y);const W=D.isInstancedMesh===!0?D.id:0;let Z=Y[W];Z===void 0&&(Z={},Y[W]=Z);let X=Z[q.id];X===void 0&&(X={},Z[q.id]=X);let K=X[N];return K===void 0&&(K=h(c()),X[N]=K),K}function h(D){const G=[],q=[],z=[];for(let N=0;N<t;N++)G[N]=0,q[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:z,object:D,attributes:{},index:null}}function p(D,G,q,z){const N=r.attributes,Y=G.attributes;let W=0;const Z=q.getAttributes();for(const X in Z)if(Z[X].location>=0){const Q=N[X];let j=Y[X];if(j===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),Q===void 0||Q.attribute!==j||j&&Q.data!==j.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(D,G,q,z){const N={},Y=G.attributes;let W=0;const Z=q.getAttributes();for(const X in Z)if(Z[X].location>=0){let Q=Y[X];Q===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const j={};j.attribute=Q,Q&&Q.data&&(j.data=Q.data),N[X]=j,W++}r.attributes=N,r.attributesNum=W,r.index=z}function _(){const D=r.newAttributes;for(let G=0,q=D.length;G<q;G++)D[G]=0}function m(D){f(D,0)}function f(D,G){const q=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;q[D]=1,z[D]===0&&(n.enableVertexAttribArray(D),z[D]=1),N[D]!==G&&(n.vertexAttribDivisor(D,G),N[D]=G)}function M(){const D=r.newAttributes,G=r.enabledAttributes;for(let q=0,z=G.length;q<z;q++)G[q]!==D[q]&&(n.disableVertexAttribArray(q),G[q]=0)}function E(D,G,q,z,N,Y,W){W===!0?n.vertexAttribIPointer(D,G,q,N,Y):n.vertexAttribPointer(D,G,q,z,N,Y)}function x(D,G,q,z){_();const N=z.attributes,Y=q.getAttributes(),W=G.defaultAttributeValues;for(const Z in Y){const X=Y[Z];if(X.location>=0){let K=N[Z];if(K===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const Q=K.normalized,j=K.itemSize,he=e.get(K);if(he===void 0)continue;const ge=he.buffer,ye=he.type,V=he.bytesPerElement,I=ye===n.INT||ye===n.UNSIGNED_INT||K.gpuType===Fa;if(K.isInterleavedBufferAttribute){const J=K.data,ae=J.stride,se=K.offset;if(J.isInstancedInterleavedBuffer){for(let R=0;R<X.locationSize;R++)f(X.location+R,J.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let R=0;R<X.locationSize;R++)m(X.location+R);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let R=0;R<X.locationSize;R++)E(X.location+R,j/X.locationSize,ye,Q,ae*V,(se+j/X.locationSize*R)*V,I)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)f(X.location+J,K.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<X.locationSize;J++)m(X.location+J);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let J=0;J<X.locationSize;J++)E(X.location+J,j/X.locationSize,ye,Q,j*V,j/X.locationSize*J*V,I)}}else if(W!==void 0){const Q=W[Z];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(X.location,Q);break;case 3:n.vertexAttrib3fv(X.location,Q);break;case 4:n.vertexAttrib4fv(X.location,Q);break;default:n.vertexAttrib1fv(X.location,Q)}}}}M()}function S(){w();for(const D in i){const G=i[D];for(const q in G){const z=G[q];for(const N in z){const Y=z[N];for(const W in Y)u(Y[W].object),delete Y[W];delete z[N]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const G=i[D.id];for(const q in G){const z=G[q];for(const N in z){const Y=z[N];for(const W in Y)u(Y[W].object),delete Y[W];delete z[N]}}delete i[D.id]}function T(D){for(const G in i){const q=i[G];for(const z in q){const N=q[z];if(N[D.id]===void 0)continue;const Y=N[D.id];for(const W in Y)u(Y[W].object),delete Y[W];delete N[D.id]}}}function v(D){for(const G in i){const q=i[G],z=D.isInstancedMesh===!0?D.id:0,N=q[z];if(N!==void 0){for(const Y in N){const W=N[Y];for(const Z in W)u(W[Z].object),delete W[Z];delete N[Y]}delete q[z],Object.keys(q).length===0&&delete i[G]}}}function w(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function x_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function y_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const v=T===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&T!==Nn&&!v&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:b}}function M_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new oi,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,E=M*4;let x=f.clippingState||null;c.value=x,x=u(g,h,E,p);for(let S=0;S!==E;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,x=p;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Bs=4,S_=6,b_=20,E_=256,pr=new Jr,Ah=new ct;let Vl=null,Hl=0,Wl=0,Xl=!1;const w_=new O,as=new O;class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=w_}=r;Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Hl,Wl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:jn,format:Un,colorSpace:Or,depthBuffer:!1},s=Ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=T_(r)),this._blurMaterial=C_(r,e,t),this._ggxMaterial=A_(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Gt,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,s,r){const c=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ah),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Ii,new qr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,f=!0):(m.color.copy(Ah),f=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));const S=this._cubeSize;Us(s,x*S,E>2?S:0,S,S),d.setRenderTarget(s),f&&d.render(_,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zi||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Us(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,p=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Bs?i-g+Bs:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Us(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(a,pr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Us(e,m,f,3*_,2*_),s.setRenderTarget(e),s.render(a,pr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-Bs?s-this._lodMax+Bs:0),h=4*(this._cubeSize-u);Us(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(c,pr)}}function T_(n){const e=[],t=[];let i=n;const s=n-Bs+1+S_;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,p=3,g=new Float32Array(p*h*d),_=new Float32Array(p*h*d);for(let f=0;f<d;f++){const M=f%3*2/3-1,E=f>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(x,p*h*f);for(let S=0;S<h;S++){const b=u[S*2]*2-1,T=u[S*2+1]*2-1;f===0?as.set(1,T,b):f===1?as.set(-b,1,-T):f===2?as.set(-b,T,1):f===3?as.set(-1,T,-b):f===4?as.set(-b,-1,T):as.set(b,T,-1),as.toArray(_,(f*h+S)*p)}}const m=new Gt;m.setAttribute("position",new Fn(g,p)),m.setAttribute("outputDirection",new Fn(_,p)),t.push(new _n(m,null)),i>Bs&&i--}return{lodMeshes:t,sizeLods:e}}function Ch(n,e,t){const i=new On(n,e,t);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function A_(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function C_(n,e,t){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:b_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Rh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ph(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lu extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ui});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=jt),new uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function R_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Uo||p===Oo)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new lu(g.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,g=p===Uo||p===Oo,_=p===Zi||p===ps;if(g||_){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new _c(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new _c(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Uo?h.mapping=Zi:p===Oo&&(h.mapping=ps),h}function c(h){let p=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function P_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ds("WebGLRenderer: "+i+" extension not supported."),s}}}function L_(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(p!==null){const M=p.array;_=p.version;for(let E=0,x=M.length;E<x;E+=3){const S=M[E+0],b=M[E+1],T=M[E+2];h.push(S,b,b,T,T,S)}}else{const M=g.array;_=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const S=E+0,b=E+1,T=E+2;h.push(S,b,b,T,T,S)}}const m=new(g.count>=65535?Xc:Wc)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function I_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function D_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function N_(n,e,t){const i=new WeakMap,s=new Nt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let A=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var p=A;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*b*4*d),v=new Hc(T,S,b,d);v.type=Nn,v.needsUpdate=!0;const w=x*4;for(let D=0;D<d;D++){const G=f[D],q=M[D],z=E[D],N=S*b*4*D;for(let Y=0;Y<G.count;Y++){const W=Y*w;g===!0&&(s.fromBufferAttribute(G,Y),T[N+W+0]=s.x,T[N+W+1]=s.y,T[N+W+2]=s.z,T[N+W+3]=0),_===!0&&(s.fromBufferAttribute(q,Y),T[N+W+4]=s.x,T[N+W+5]=s.y,T[N+W+6]=s.z,T[N+W+7]=0),m===!0&&(s.fromBufferAttribute(z,Y),T[N+W+8]=s.x,T[N+W+9]=s.y,T[N+W+10]=s.z,T[N+W+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Ee(S,b)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function U_(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const O_={[Rc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[Dc]:"AGX_TONE_MAPPING",[Nc]:"NEUTRAL_TONE_MAPPING",[Ic]:"CUSTOM_TONE_MAPPING"};function F_(n,e,t,i,s,r){const o=new On(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Gt;l.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xt([0,2,0,0,2,0],2));const u=new of({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _n(l,u),h=new Jr(-1,1,1,-1,0,1);let p=null,g=null,_=!1,m,f=null,M=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),c!==null&&c.setSize(x,S);for(let b=0;b<M.length;b++){const T=M[b];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new On(S,b,{type:jn,depthBuffer:!1,stencilBuffer:!1}),c=new On(S,b,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const v=M[T];v.setSize&&v.setSize(S,b)}},this.begin=function(x,S){if(_||x.toneMapping===Zn&&M.length===0)return!1;if(f=S,S!==null){const b=S.width,T=S.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,_=!0;let b=o,T=a;for(let v=0;v<M.length;v++){const w=M[v];w.enabled!==!1&&(w.render(x,T,b,S),w.needsSwap!==!1&&(b=T,T=T===a?c:a))}if(p!==x.outputColorSpace||g!==x.toneMapping){p=x.outputColorSpace,g=x.toneMapping,u.defines={},dt.getTransfer(p)===bt&&(u.defines.SRGB_TRANSFER="");const v=O_[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(f),x.render(d,h),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const gf=new tn,vc=new Js(1,1),_f=new Hc,vf=new Wd,xf=new Zc,Lh=[],Ih=[],Dh=new Float32Array(16),Nh=new Float32Array(9),Uh=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rl(n,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function k_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function G_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function V_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;Uh.set(i),n.uniformMatrix2fv(this.addr,!1,Uh),Zt(t,i)}}function H_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;Nh.set(i),n.uniformMatrix3fv(this.addr,!1,Nh),Zt(t,i)}}function W_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;Dh.set(i),n.uniformMatrix4fv(this.addr,!1,Dh),Zt(t,i)}}function X_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function $_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Z_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function K_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function j_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vc.compareFunction=t.isReversedDepthBuffer()?Xa:Wa,r=vc):r=gf,t.setTexture2D(e||r,s)}function ev(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vf,s)}function tv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xf,s)}function nv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_f,s)}function iv(n){switch(n){case 5126:return z_;case 35664:return B_;case 35665:return k_;case 35666:return G_;case 35674:return V_;case 35675:return H_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return Z_;case 36294:return J_;case 36295:return K_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function sv(n,e){n.uniform1fv(this.addr,e)}function rv(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function ov(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function av(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function lv(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cv(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uv(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hv(n,e){n.uniform1iv(this.addr,e)}function dv(n,e){n.uniform2iv(this.addr,e)}function fv(n,e){n.uniform3iv(this.addr,e)}function pv(n,e){n.uniform4iv(this.addr,e)}function mv(n,e){n.uniform1uiv(this.addr,e)}function gv(n,e){n.uniform2uiv(this.addr,e)}function _v(n,e){n.uniform3uiv(this.addr,e)}function vv(n,e){n.uniform4uiv(this.addr,e)}function xv(n,e,t){const i=this.cache,s=e.length,r=rl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=vc:o=gf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function yv(n,e,t){const i=this.cache,s=e.length,r=rl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vf,r[o])}function Mv(n,e,t){const i=this.cache,s=e.length,r=rl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xf,r[o])}function Sv(n,e,t){const i=this.cache,s=e.length,r=rl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_f,r[o])}function bv(n){switch(n){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Ev{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iv(t.type)}}class wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Oh(n,e){n.seq.push(e),n.map[e.id]=e}function Av(n,e,t){const i=n.name,s=i.length;for(ql.lastIndex=0;;){const r=ql.exec(i),o=ql.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Oh(t,l===void 0?new Ev(a,n,e):new wv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Tv(a),Oh(t,d)),t=d}}}class ko{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Av(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Fh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cv=37297;let Rv=0;function Pv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const zh=new tt;function Lv(n){dt._getMatrix(zh,dt.workingColorSpace,n);const e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Fr:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Pv(n.getShaderSource(e),a)}else return r}function Iv(n,e){const t=Lv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Dv={[Rc]:"Linear",[Pc]:"Reinhard",[Lc]:"Cineon",[Oa]:"ACESFilmic",[Dc]:"AgX",[Nc]:"Neutral",[Ic]:"Custom"};function Nv(n,e){const t=Dv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Io=new O;function Uv(){dt.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Fv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mr(n){return n!==""}function kh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(Bv,Gv)}const kv=new Map;function Gv(n,e){let t=it[e];if(t===void 0){const i=kv.get(e);if(i!==void 0)t=it[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xc(t)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(n){return n.replace(Vv,Hv)}function Hv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Wv={[Gs]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Xv(n){return Wv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qv={[Zi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE_UV"};function Yv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $v={[ps]:"ENVMAP_MODE_REFRACTION"};function Zv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$v[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jv={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function Kv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Jv[n.combine]||"ENVMAP_BLENDING_NONE"}function Qv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Xv(t),l=Yv(t),u=Zv(t),d=Kv(t),h=Qv(t),p=Ov(t),g=Fv(r),_=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?it.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),Uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=xc(o),o=kh(o,t),o=Gh(o,t),a=xc(a),a=kh(a,t),a=Gh(a,t),o=Vh(o),a=Vh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=M+m+o,x=M+f+a,S=Fh(s,s.VERTEX_SHADER,E),b=Fh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(D){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(b)||"",N=G.trim(),Y=q.trim(),W=z.trim();let Z=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,b);else{const K=Bh(s,S,"vertex"),Q=Bh(s,b,"fragment");ft("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+K+`
`+Q)}else N!==""?je("WebGLProgram: Program Info Log:",N):(Y===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:Z,programLog:N,vertexShader:{log:Y,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(S),s.deleteShader(b),v=new ko(s,_),w=zv(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Cv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let ex=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nx(e),t.set(e,i)),i}}class nx{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}}function ix(n){return n===Ji||n===Nr||n===Ur}function sx(n,e,t,i,s,r){const o=new Ya,a=new tx,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,A,D,G,q){const z=D.fog,N=G.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||Y,W),X=Z&&Z.mapping===Xr?Z.image.height:null,K=p[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=Q!==void 0?Q.length:0;let he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let ge,ye,V,I;if(K){const Pt=Yn[K];ge=Pt.vertexShader,ye=Pt.fragmentShader}else{ge=v.vertexShader,ye=v.fragmentShader;const Pt=a.getVertexShaderStage(v),Mt=a.getFragmentShaderStage(v);a.update(v,Pt,Mt),V=Pt.id,I=Mt.id}const J=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),se=G.isInstancedMesh===!0,R=G.isBatchedMesh===!0,L=!!v.map,k=!!v.matcap,U=!!Z,ee=!!v.aoMap,P=!!v.lightMap,$=!!v.bumpMap&&v.wireframe===!1,te=!!v.normalMap,B=!!v.displacementMap,oe=!!v.emissiveMap,xe=!!v.metalnessMap,Se=!!v.roughnessMap,H=v.anisotropy>0,ze=v.clearcoat>0,Ae=v.dispersion>0,F=v.retroreflectivity>0,y=v.iridescence>0,re=v.sheen>0,le=v.transmission>0,de=H&&!!v.anisotropyMap,be=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,me=ze&&!!v.clearcoatRoughnessMap,ve=y&&!!v.iridescenceMap,Re=y&&!!v.iridescenceThicknessMap,Ye=re&&!!v.sheenColorMap,Ne=re&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,$e=!!v.specularColorMap,Qe=!!v.specularIntensityMap,nt=le&&!!v.transmissionMap,ie=le&&!!v.thicknessMap,Le=!!v.gradientMap,_e=!!v.alphaMap,Ie=v.alphaTest>0,Be=!!v.alphaHash,Me=!!v.extensions;let Ze=Zn;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Xe={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:ye,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:I,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:R,batchingColor:R&&G._colorsTexture!==null,instancing:se,instancingColor:se&&G.instanceColor!==null,instancingMorph:se&&G.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:L,matcap:k,envMap:U,envMapMode:U&&Z.mapping,envMapCubeUVHeight:X,aoMap:ee,lightMap:P,bumpMap:$,normalMap:te,displacementMap:B,emissiveMap:oe,normalMapObjectSpace:te&&v.normalMapType===Ld,normalMapTangentSpace:te&&v.normalMapType===Ta,packedNormalMap:te&&v.normalMapType===Ta&&ix(v.normalMap.format),metalnessMap:xe,roughnessMap:Se,anisotropy:H,anisotropyMap:de,clearcoat:ze,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:me,dispersion:Ae,retroreflection:F,iridescence:y,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:re,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:$e,specularIntensityMap:Qe,transmission:le,transmissionMap:nt,thicknessMap:ie,gradientMap:Le,opaque:v.transparent===!1&&v.blending===Vs&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ie,alphaHash:Be,combine:v.combine,mapUv:L&&g(v.map.channel),aoMapUv:ee&&g(v.aoMap.channel),lightMapUv:P&&g(v.lightMap.channel),bumpMapUv:$&&g(v.bumpMap.channel),normalMapUv:te&&g(v.normalMap.channel),displacementMapUv:B&&g(v.displacementMap.channel),emissiveMapUv:oe&&g(v.emissiveMap.channel),metalnessMapUv:xe&&g(v.metalnessMap.channel),roughnessMapUv:Se&&g(v.roughnessMap.channel),anisotropyMapUv:de&&g(v.anisotropyMap.channel),clearcoatMapUv:be&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(v.sheenRoughnessMap.channel),specularMapUv:Pe&&g(v.specularMap.channel),specularColorMapUv:$e&&g(v.specularColorMap.channel),specularIntensityMapUv:Qe&&g(v.specularIntensityMap.channel),transmissionMapUv:nt&&g(v.transmissionMap.channel),thicknessMapUv:ie&&g(v.thicknessMap.channel),alphaMapUv:_e&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(te||H),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!N.attributes.uv&&(L||_e),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&te===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:L&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:oe&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||R)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)w.push(A),w.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(f(w,v),M(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function f(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){const w=p[v.type];let A;if(w){const D=Yn[w];A=rf.clone(D.uniforms)}else A=v.uniforms;return A}function x(v,w){let A=u.get(w);return A!==void 0?++A.usedTimes:(A=new jv(n,w,v,s),l.push(A),u.set(w,A)),A}function S(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:T}}function rx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Wh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,_,m,f){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:f},n[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=f),e++,M}function c(h,p,g,_,m,f,M){M.reversedDepth===!0&&(m=-m);const E=a(h,p,g,_,m,f);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function l(h,p,g,_,m,f){const M=a(h,p,g,_,m,f);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||ox),i.length>1&&i.sort(p||Wh),s.length>1&&s.sort(p||Wh)}function d(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function ax(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xh,n.set(i,[o])):s>=r.length?(o=new Xh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ct};break;case"SpotLight":t={position:new O,direction:new O,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ux=0;function hx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dx(n){const e=new lx,t=cx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const s=new O,r=new gt,o=new gt;function a(l){let u=0,d=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,E=0,x=0,S=0,b=0,T=0,v=0,w=0,A=0;l.sort(hx);for(let G=0,q=l.length;G<q;G++){const z=l[G],N=z.color,Y=z.intensity,W=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ji?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=N.r*Y,d+=N.g*Y,h+=N.b*Y;else if(z.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(z.sh.coefficients[X],Y);A++}else if(z.isSunLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,Q=t.get(z);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=Z;const j=K.getViewportCount();for(let he=0;he<j;he++)i.sunShadowMatrix[_+he]=K.getMatrix(he),i.sunShadowCascade[_+he]=K._cascadeData[he];_+=j,g++}i.sun[p]=X,p++}else if(z.isDirectionalLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,Q=t.get(z);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=z.shadow.matrix,S++}i.directional[m]=X,m++}else if(z.isSpotLight){const X=e.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(N).multiplyScalar(Y),X.distance=W,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,i.spot[M]=X;const K=z.shadow;if(z.map&&(i.spotLightMap[v]=z.map,v++,K.updateMatrices(z),z.castShadow&&w++),i.spotLightMatrix[M]=K.matrix,z.castShadow){const Q=t.get(z);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[M]=Q,i.spotShadowMap[M]=Z,T++}M++}else if(z.isRectAreaLight){const X=e.get(z);X.color.copy(N).multiplyScalar(Y),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),i.rectArea[E]=X,E++}else if(z.isPointLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){const K=z.shadow,Q=t.get(z);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=z.shadow.matrix,b++}i.point[f]=X,f++}else if(z.isHemisphereLight){const X=e.get(z);X.skyColor.copy(z.color).multiplyScalar(Y),X.groundColor.copy(z.groundColor).multiplyScalar(Y),i.hemi[x]=X,x++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==v||D.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=E,i.point.length=f,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=v,D.numLightProbes=A,i.version=ux++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){const x=l[M];if(x.isSunLight){const S=i.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),d++}else if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(x.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:a,setupView:c,state:i}}function qh(n){const e=new dx(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function fx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qh(n),e.set(s,[a])):r>=o.length?(a=new qh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`,gx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],_x=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Yh=new gt,mr=new O,Yl=new O;function vx(n,e,t){let i=new Za;const s=new Ee,r=new Ee,o=new Nt,a=new af,c=new lf,l={},u=t.maxTextureSize,d={[$i]:gn,[gn]:$i,[Ln]:Ln},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:px,fragmentShader:mx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let f=this.type;this.render=function(b,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ld&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);const w=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ui),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=f!==this.type;q&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=b.length;z<N;z++){const Y=b[z],W=Y.shadow;if(W===void 0){je("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Z=W.getFrameExtents();s.multiply(Z),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,W.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Fs){if(Y.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new On(s.x,s.y,{format:Ji,type:jn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new Js(s.x,s.y,Nn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=fi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt}else Y.isPointLight?(W.map=new lu(s.x),W.map.depthTexture=new $d(s.x,Qn)):(W.map=new On(s.x,s.y),W.map.depthTexture=new Js(s.x,s.y,Qn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=fi,this.type===Gs?(W.map.depthTexture.compareFunction=X?Xa:Wa,W.map.depthTexture.minFilter=jt,W.map.depthTexture.magFilter=jt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,v);for(let Q=0;Q<K;Q++){const j=W.getCamera(Q);if(Y.isPointLight){const he=W.camera,ge=W.matrix,ye=Y.distance||he.far;ye!==he.far&&(he.far=ye,he.updateProjectionMatrix()),mr.setFromMatrixPosition(Y.matrixWorld),he.position.copy(mr),Yl.copy(he.position),Yl.add(gx[Q]),he.up.copy(_x[Q]),he.lookAt(Yl),he.updateMatrixWorld(),ge.makeTranslation(-mr.x,-mr.y,-mr.z),Yh.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Yh,he.coordinateSystem,he.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(W.map),n.clear());const he=W.getViewport(Q);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),G.viewport(o)}i=W.getFrustum(Q),x(T,v,j,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Fs&&M(W,v),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,A,D)};function M(b,T){const v=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new On(s.x,s.y,{format:Ji,type:jn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,v,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,v,p,_,null)}function E(b,T,v,w){let A=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)A=D;else if(A=v.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const G=A.uuid,q=T.uuid;let z=l[G];z===void 0&&(z={},l[G]=z);let N=z[q];N===void 0&&(N=A.clone(),z[q]=N,T.addEventListener("dispose",S)),A=N}if(A.visible=T.visible,A.wireframe=T.wireframe,w===Fs?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=n.properties.get(A);G.light=v}return A}function x(b,T,v,w,A){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Fs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const q=e.update(b),z=b.material;if(Array.isArray(z)){const N=q.groups;for(let Y=0,W=N.length;Y<W;Y++){const Z=N[Y],X=z[Z.materialIndex];if(X&&X.visible){const K=E(b,X,w,A);b.onBeforeShadow(n,b,T,v,q,K,Z),n.renderBufferDirect(v,null,q,K,b,Z),b.onAfterShadow(n,b,T,v,q,K,Z)}}}else if(z.visible){const N=E(b,z,w,A);b.onBeforeShadow(n,b,T,v,q,N,null),n.renderBufferDirect(v,null,q,N,b,null),b.onAfterShadow(n,b,T,v,q,N,null)}}const G=b.children;for(let q=0,z=G.length;q<z;q++)x(G[q],T,v,w,A)}function S(b){b.target.removeEventListener("dispose",S);for(const v in l){const w=l[v],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function xx(n,e){function t(){let ie=!1;const Le=new Nt;let _e=null;const Ie=new Nt(0,0,0,0);return{setMask:function(Be){_e!==Be&&!ie&&(n.colorMask(Be,Be,Be,Be),_e=Be)},setLocked:function(Be){ie=Be},setClear:function(Be,Me,Ze,Xe,Pt){Pt===!0&&(Be*=Xe,Me*=Xe,Ze*=Xe),Le.set(Be,Me,Ze,Xe),Ie.equals(Le)===!1&&(n.clearColor(Be,Me,Ze,Xe),Ie.copy(Le))},reset:function(){ie=!1,_e=null,Ie.set(-1,0,0,0)}}}function i(){let ie=!1,Le=!1,_e=null,Ie=null,Be=null;return{setReversed:function(Me){if(Le!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=Be;Be=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?J(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Me){_e!==Me&&!ie&&(n.depthMask(Me),_e=Me)},setFunc:function(Me){if(Le&&(Me=vp[Me]),Ie!==Me){switch(Me){case Vo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Wo:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case $o:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){ie=Me},setClear:function(Me){Be!==Me&&(Be=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){ie=!1,_e=null,Ie=null,Be=null,Le=!1}}}function s(){let ie=!1,Le=null,_e=null,Ie=null,Be=null,Me=null,Ze=null,Xe=null,Pt=null;return{setTest:function(Mt){ie||(Mt?J(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!ie&&(n.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Gn,ti){(_e!==Mt||Ie!==Gn||Be!==ti)&&(n.stencilFunc(Mt,Gn,ti),_e=Mt,Ie=Gn,Be=ti)},setOp:function(Mt,Gn,ti){(Me!==Mt||Ze!==Gn||Xe!==ti)&&(n.stencilOp(Mt,Gn,ti),Me=Mt,Ze=Gn,Xe=ti)},setLocked:function(Mt){ie=Mt},setClear:function(Mt){Pt!==Mt&&(n.clearStencil(Mt),Pt=Mt)},reset:function(){ie=!1,Le=null,_e=null,Ie=null,Be=null,Me=null,Ze=null,Xe=null,Pt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,E=null,x=null,S=null,b=null,T=null,v=new ct(0,0,0),w=0,A=!1,D=null,G=null,q=null,z=null,N=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Z>=2);let K=null,Q={};const j=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),ge=new Nt().fromArray(j),ye=new Nt().fromArray(he);function V(ie,Le,_e,Ie){const Be=new Uint8Array(4),Me=n.createTexture();n.bindTexture(ie,Me),n.texParameteri(ie,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ie,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<_e;Ze++)ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return Me}const I={};I[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),I[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),I[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(qs),$(!1),te(nc),J(n.CULL_FACE),ee(ui);function J(ie){u[ie]!==!0&&(n.enable(ie),u[ie]=!0)}function ae(ie){u[ie]!==!1&&(n.disable(ie),u[ie]=!1)}function se(ie,Le){return h[ie]!==Le?(n.bindFramebuffer(ie,Le),h[ie]=Le,ie===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),ie===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function R(ie,Le){let _e=g,Ie=!1;if(ie){_e=p.get(Le),_e===void 0&&(_e=[],p.set(Le,_e));const Be=ie.textures;if(_e.length!==Be.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ze=Be.length;Me<Ze;Me++)_e[Me]=n.COLOR_ATTACHMENT0+Me;_e.length=Be.length,Ie=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(_e)}function L(ie){return _!==ie?(n.useProgram(ie),_=ie,!0):!1}const k={[cs]:n.FUNC_ADD,[ud]:n.FUNC_SUBTRACT,[hd]:n.FUNC_REVERSE_SUBTRACT};k[dd]=n.MIN,k[fd]=n.MAX;const U={[pd]:n.ZERO,[md]:n.ONE,[gd]:n.SRC_COLOR,[Tc]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[yd]:n.DST_COLOR,[vd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[Ac]:n.ONE_MINUS_SRC_ALPHA,[Md]:n.ONE_MINUS_DST_COLOR,[xd]:n.ONE_MINUS_DST_ALPHA,[bd]:n.CONSTANT_COLOR,[Ed]:n.ONE_MINUS_CONSTANT_COLOR,[wd]:n.CONSTANT_ALPHA,[Td]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(ie,Le,_e,Ie,Be,Me,Ze,Xe,Pt,Mt){if(ie===ui){m===!0&&(ae(n.BLEND),m=!1);return}if(m===!1&&(J(n.BLEND),m=!0),ie!==cd){if(ie!==f||Mt!==A){if((M!==cs||S!==cs)&&(n.blendEquation(n.FUNC_ADD),M=cs,S=cs),Mt)switch(ie){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ft("WebGLState: Invalid blending: ",ie);break}else switch(ie){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sc:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",ie);break}E=null,x=null,b=null,T=null,v.set(0,0,0),w=0,f=ie,A=Mt}return}Be=Be||Le,Me=Me||_e,Ze=Ze||Ie,(Le!==M||Be!==S)&&(n.blendEquationSeparate(k[Le],k[Be]),M=Le,S=Be),(_e!==E||Ie!==x||Me!==b||Ze!==T)&&(n.blendFuncSeparate(U[_e],U[Ie],U[Me],U[Ze]),E=_e,x=Ie,b=Me,T=Ze),(Xe.equals(v)===!1||Pt!==w)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Pt),v.copy(Xe),w=Pt),f=ie,A=!1}function P(ie,Le){ie.side===Ln?ae(n.CULL_FACE):J(n.CULL_FACE);let _e=ie.side===gn;Le&&(_e=!_e),$(_e),ie.blending===Vs&&ie.transparent===!1?ee(ui):ee(ie.blending,ie.blendEquation,ie.blendSrc,ie.blendDst,ie.blendEquationAlpha,ie.blendSrcAlpha,ie.blendDstAlpha,ie.blendColor,ie.blendAlpha,ie.premultipliedAlpha),o.setFunc(ie.depthFunc),o.setTest(ie.depthTest),o.setMask(ie.depthWrite),r.setMask(ie.colorWrite);const Ie=ie.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(ie.stencilWriteMask),a.setFunc(ie.stencilFunc,ie.stencilRef,ie.stencilFuncMask),a.setOp(ie.stencilFail,ie.stencilZFail,ie.stencilZPass)),oe(ie.polygonOffset,ie.polygonOffsetFactor,ie.polygonOffsetUnits),ie.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(ie){D!==ie&&(ie?n.frontFace(n.CW):n.frontFace(n.CCW),D=ie)}function te(ie){ie!==od?(J(n.CULL_FACE),ie!==G&&(ie===nc?n.cullFace(n.BACK):ie===ad?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),G=ie}function B(ie){ie!==q&&(W&&n.lineWidth(ie),q=ie)}function oe(ie,Le,_e){ie?(J(n.POLYGON_OFFSET_FILL),(z!==Le||N!==_e)&&(z=Le,N=_e,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,_e))):ae(n.POLYGON_OFFSET_FILL)}function xe(ie){ie?J(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function Se(ie){ie===void 0&&(ie=n.TEXTURE0+Y-1),K!==ie&&(n.activeTexture(ie),K=ie)}function H(ie,Le,_e){_e===void 0&&(K===null?_e=n.TEXTURE0+Y-1:_e=K);let Ie=Q[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},Q[_e]=Ie),(Ie.type!==ie||Ie.texture!==Le)&&(K!==_e&&(n.activeTexture(_e),K=_e),n.bindTexture(ie,Le||I[ie]),Ie.type=ie,Ie.texture=Le)}function ze(){const ie=Q[K];ie!==void 0&&ie.type!==void 0&&(n.bindTexture(ie.type,null),ie.type=void 0,ie.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function y(){try{n.texSubImage2D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function re(){try{n.texSubImage3D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function be(){try{n.texStorage2D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function Ce(){try{n.texStorage3D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function me(){try{n.texImage2D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function ve(){try{n.texImage3D(...arguments)}catch(ie){ft("WebGLState:",ie)}}function Re(ie){return d[ie]!==void 0?d[ie]:n.getParameter(ie)}function Ye(ie,Le){d[ie]!==Le&&(n.pixelStorei(ie,Le),d[ie]=Le)}function Ne(ie){ge.equals(ie)===!1&&(n.scissor(ie.x,ie.y,ie.z,ie.w),ge.copy(ie))}function Pe(ie){ye.equals(ie)===!1&&(n.viewport(ie.x,ie.y,ie.z,ie.w),ye.copy(ie))}function $e(ie,Le){let _e=l.get(Le);_e===void 0&&(_e=new WeakMap,l.set(Le,_e));let Ie=_e.get(ie);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,ie.name),_e.set(ie,Ie))}function Qe(ie,Le){const Ie=l.get(Le).get(ie);c.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,ie.__bindingPointIndex),c.set(Le,Ie))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,Q={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,M=null,E=null,x=null,S=null,b=null,T=null,v=new ct(0,0,0),w=0,A=!1,D=null,G=null,q=null,z=null,N=null,ge.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ae,bindFramebuffer:se,drawBuffers:R,useProgram:L,setBlending:ee,setMaterial:P,setFlipSided:$,setCullFace:te,setLineWidth:B,setPolygonOffset:oe,setScissorTest:xe,activeTexture:Se,bindTexture:H,unbindTexture:ze,compressedTexImage2D:Ae,compressedTexImage3D:F,texImage2D:me,texImage3D:ve,pixelStorei:Ye,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:Qe,texStorage2D:be,texStorage3D:Ce,texSubImage2D:y,texSubImage3D:re,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Ne,viewport:Pe,reset:nt}}function yx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ee,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,y){return g?new OffscreenCanvas(F,y):Aa("canvas")}function m(F,y,re){let le=1;const de=Ae(F);if((de.width>re||de.height>re)&&(le=re/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const be=Math.floor(le*de.width),Ce=Math.floor(le*de.height);h===void 0&&(h=_(be,Ce));const me=y?_(be,Ce):h;return me.width=be,me.height=Ce,me.getContext("2d").drawImage(F,0,0,be,Ce),je("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+be+"x"+Ce+")."),me}else return"data"in F&&je("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),F;return F}function f(F){return F.generateMipmaps}function M(F){n.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(F,y,re,le,de,be=!1){if(F!==null){if(n[F]!==void 0)return n[F];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ce;le&&(Ce=e.get("EXT_texture_norm16"),Ce||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=y;if(y===n.RED&&(re===n.FLOAT&&(me=n.R32F),re===n.HALF_FLOAT&&(me=n.R16F),re===n.UNSIGNED_BYTE&&(me=n.R8),re===n.UNSIGNED_SHORT&&Ce&&(me=Ce.R16_EXT),re===n.SHORT&&Ce&&(me=Ce.R16_SNORM_EXT)),y===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.R8UI),re===n.UNSIGNED_SHORT&&(me=n.R16UI),re===n.UNSIGNED_INT&&(me=n.R32UI),re===n.BYTE&&(me=n.R8I),re===n.SHORT&&(me=n.R16I),re===n.INT&&(me=n.R32I)),y===n.RG&&(re===n.FLOAT&&(me=n.RG32F),re===n.HALF_FLOAT&&(me=n.RG16F),re===n.UNSIGNED_BYTE&&(me=n.RG8),re===n.UNSIGNED_SHORT&&Ce&&(me=Ce.RG16_EXT),re===n.SHORT&&Ce&&(me=Ce.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RG8UI),re===n.UNSIGNED_SHORT&&(me=n.RG16UI),re===n.UNSIGNED_INT&&(me=n.RG32UI),re===n.BYTE&&(me=n.RG8I),re===n.SHORT&&(me=n.RG16I),re===n.INT&&(me=n.RG32I)),y===n.RGB_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RGB8UI),re===n.UNSIGNED_SHORT&&(me=n.RGB16UI),re===n.UNSIGNED_INT&&(me=n.RGB32UI),re===n.BYTE&&(me=n.RGB8I),re===n.SHORT&&(me=n.RGB16I),re===n.INT&&(me=n.RGB32I)),y===n.RGBA_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),re===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),re===n.UNSIGNED_INT&&(me=n.RGBA32UI),re===n.BYTE&&(me=n.RGBA8I),re===n.SHORT&&(me=n.RGBA16I),re===n.INT&&(me=n.RGBA32I)),y===n.RGB&&(re===n.UNSIGNED_SHORT&&Ce&&(me=Ce.RGB16_EXT),re===n.SHORT&&Ce&&(me=Ce.RGB16_SNORM_EXT),re===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),re===n.UNSIGNED_INT_10F_11F_11F_REV&&(me=n.R11F_G11F_B10F)),y===n.RGBA){const ve=be?Fr:dt.getTransfer(de);re===n.FLOAT&&(me=n.RGBA32F),re===n.HALF_FLOAT&&(me=n.RGBA16F),re===n.UNSIGNED_BYTE&&(me=ve===bt?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT&&Ce&&(me=Ce.RGBA16_EXT),re===n.SHORT&&Ce&&(me=Ce.RGBA16_SNORM_EXT),re===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function S(F,y){let re;return F?y===null||y===Qn||y===$s?re=n.DEPTH24_STENCIL8:y===Nn?re=n.DEPTH32F_STENCIL8:y===Ys&&(re=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qn||y===$s?re=n.DEPTH_COMPONENT24:y===Nn?re=n.DEPTH_COMPONENT32F:y===Ys&&(re=n.DEPTH_COMPONENT16),re}function b(F,y){return f(F)===!0||F.isFramebufferTexture&&F.minFilter!==Kt&&F.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function T(F){const y=F.target;y.removeEventListener("dispose",T),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function v(F){const y=F.target;y.removeEventListener("dispose",v),D(y)}function w(F){const y=i.get(F);if(y.__webglInit===void 0)return;const re=F.source,le=p.get(re);if(le){const de=le[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(F),Object.keys(le).length===0&&p.delete(re)}i.remove(F)}function A(F){const y=i.get(F);n.deleteTexture(y.__webglTexture);const re=F.source,le=p.get(re);delete le[y.__cacheKey],o.memory.textures--}function D(F){const y=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(y.__webglFramebuffer[le]))for(let de=0;de<y.__webglFramebuffer[le].length;de++)n.deleteFramebuffer(y.__webglFramebuffer[le][de]);else n.deleteFramebuffer(y.__webglFramebuffer[le]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[le])}else{if(Array.isArray(y.__webglFramebuffer))for(let le=0;le<y.__webglFramebuffer.length;le++)n.deleteFramebuffer(y.__webglFramebuffer[le]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let le=0;le<y.__webglColorRenderbuffer.length;le++)y.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[le]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const re=F.textures;for(let le=0,de=re.length;le<de;le++){const be=i.get(re[le]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(re[le])}i.remove(F)}let G=0;function q(){G=0}function z(){return G}function N(F){G=F}function Y(){const F=G;return F>=s.maxTextures&&je("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,F}function W(F){const y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function Z(F,y){const re=i.get(F);if(F.isVideoTexture&&H(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&re.__version!==F.version){const le=F.image;if(le===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(re,F,y);return}}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+y)}function X(F,y){const re=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){ae(re,F,y);return}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+y)}function K(F,y){const re=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){ae(re,F,y);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+y)}function Q(F,y){const re=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&re.__version!==F.version){se(re,F,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+y)}const j={[Dr]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},he={[Kt]:n.NEAREST,[Rd]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},ge={[Dd]:n.NEVER,[zd]:n.ALWAYS,[Nd]:n.LESS,[Wa]:n.LEQUAL,[Ud]:n.EQUAL,[Xa]:n.GEQUAL,[Od]:n.GREATER,[Fd]:n.NOTEQUAL};function ye(F,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===Fo||y.magFilter===xr||y.magFilter===Gi||y.minFilter===jt||y.minFilter===Fo||y.minFilter===xr||y.minFilter===Gi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,j[y.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,j[y.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,j[y.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==xr&&y.minFilter!==Gi||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function V(F,y){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",T));const le=y.source;let de=p.get(le);de===void 0&&(de={},p.set(le,de));const be=W(y);if(be!==F.__cacheKey){de[be]===void 0&&(de[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,re=!0),de[be].usedTimes++;const Ce=de[F.__cacheKey];Ce!==void 0&&(de[F.__cacheKey].usedTimes--,Ce.usedTimes===0&&A(y)),F.__cacheKey=be,F.__webglTexture=de[be].texture}return re}function I(F,y,re){return Math.floor(Math.floor(F/re)/y)}function J(F,y,re,le){const be=F.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,re,le,y.data);else{be.sort((Ye,Ne)=>Ye.start-Ne.start);let Ce=0;for(let Ye=1;Ye<be.length;Ye++){const Ne=be[Ce],Pe=be[Ye],$e=Ne.start+Ne.count,Qe=I(Pe.start,y.width,4),nt=I(Ne.start,y.width,4);Pe.start<=$e+1&&Qe===nt&&I(Pe.start+Pe.count-1,y.width,4)===Qe?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,be[Ce]=Pe)}be.length=Ce+1;const me=t.getParameter(n.UNPACK_ROW_LENGTH),ve=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ye=0,Ne=be.length;Ye<Ne;Ye++){const Pe=be[Ye],$e=Math.floor(Pe.start/4),Qe=Math.ceil(Pe.count/4),nt=$e%y.width,ie=Math.floor($e/y.width),Le=Qe,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,ie),t.texSubImage2D(n.TEXTURE_2D,0,nt,ie,Le,_e,re,le,y.data)}F.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,me),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function ae(F,y,re){let le=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(le=n.TEXTURE_3D);const de=V(F,y),be=y.source;t.bindTexture(le,F.__webglTexture,n.TEXTURE0+re);const Ce=i.get(be);if(be.version!==Ce.__version||de===!0){if(t.activeTexture(n.TEXTURE0+re),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const _e=dt.getPrimaries(dt.workingColorSpace),Ie=y.colorSpace===yi?null:dt.getPrimaries(y.colorSpace),Be=y.colorSpace===yi||_e===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ve=m(y.image,!1,s.maxTextureSize);ve=ze(y,ve);const Re=r.convert(y.format,y.colorSpace),Ye=r.convert(y.type);let Ne=x(y.internalFormat,Re,Ye,y.normalized,y.colorSpace,y.isVideoTexture);ye(le,y);let Pe;const $e=y.mipmaps,Qe=y.isVideoTexture!==!0,nt=Ce.__version===void 0||de===!0,ie=be.dataReady,Le=b(y,ve);if(y.isDepthTexture)Ne=S(y.format===Vi,y.type),nt&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Re,Ye,null));else if(y.isDataTexture)if($e.length>0){Qe&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let _e=0,Ie=$e.length;_e<Ie;_e++)Pe=$e[_e],Qe?ie&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data);y.generateMipmaps=!1}else Qe?(nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height),ie&&J(y,ve,Re,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Re,Ye,ve.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,$e[0].width,$e[0].height,ve.depth);for(let _e=0,Ie=$e.length;_e<Ie;_e++)if(Pe=$e[_e],y.format!==Un)if(Re!==null)if(Qe){if(ie)if(y.layerUpdates.size>0){const Be=Th(Pe.width,Pe.height,y.format,y.type);for(const Me of y.layerUpdates){const Ze=Pe.data.subarray(Me*Be/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Me,Pe.width,Pe.height,1,Re,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ve.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ve.depth,Re,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Pe.width,Pe.height,ve.depth,0,Re,Ye,Pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Qe&&nt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let _e=0,Ie=$e.length;_e<Ie;_e++)Pe=$e[_e],y.format!==Un?Re!==null?Qe?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Pe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?ie&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data)}else if(y.isDataArrayTexture)if(Qe){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,ve.width,ve.height,ve.depth),ie)if(y.layerUpdates.size>0){const _e=Th(ve.width,ve.height,y.format,y.type);for(const Ie of y.layerUpdates){const Be=ve.data.subarray(Ie*_e/ve.data.BYTES_PER_ELEMENT,(Ie+1)*_e/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,ve.width,ve.height,1,Re,Ye,Be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Re,Ye,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Re,Ye,ve.data);else if(y.isData3DTexture)Qe?(nt&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,ve.width,ve.height,ve.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Re,Ye,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Re,Ye,ve.data);else if(y.isFramebufferTexture){if(nt)if(Qe)t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height);else{let _e=ve.width,Ie=ve.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ne,_e,Ie,0,Re,Ye,null),_e>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ve.parentNode!==_e){_e.appendChild(ve),d.add(y),_e.onpaint=Ie=>{const Be=Ie.changedElements;for(const Me of d)Be.includes(Me.image)&&(Me.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ve);else{const Be=n.RGBA,Me=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,Me,Ze,ve)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(Qe&&nt){const _e=Ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height)}for(let _e=0,Ie=$e.length;_e<Ie;_e++)Pe=$e[_e],Qe?ie&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re,Ye,Pe):t.texImage2D(n.TEXTURE_2D,_e,Ne,Re,Ye,Pe);y.generateMipmaps=!1}else if(Qe){if(nt){const _e=Ae(ve);t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ye,ve)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,Ye,ve);f(y)&&M(le),Ce.__version=be.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function se(F,y,re){if(y.image.length!==6)return;const le=V(F,y),de=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+re);const be=i.get(de);if(de.version!==be.__version||le===!0){t.activeTexture(n.TEXTURE0+re);const Ce=dt.getPrimaries(dt.workingColorSpace),me=y.colorSpace===yi?null:dt.getPrimaries(y.colorSpace),ve=y.colorSpace===yi||Ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,Ye=y.image[0]&&y.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!Ye?Ne[Me]=m(y.image[Me],!0,s.maxCubemapSize):Ne[Me]=Ye?y.image[Me].image:y.image[Me],Ne[Me]=ze(y,Ne[Me]);const Pe=Ne[0],$e=r.convert(y.format,y.colorSpace),Qe=r.convert(y.type),nt=x(y.internalFormat,$e,Qe,y.normalized,y.colorSpace),ie=y.isVideoTexture!==!0,Le=be.__version===void 0||le===!0,_e=de.dataReady;let Ie=b(y,Pe);ye(n.TEXTURE_CUBE_MAP,y);let Be;if(Re){ie&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){Be=Ne[Me].mipmaps;for(let Ze=0;Ze<Be.length;Ze++){const Xe=Be[Ze];y.format!==Un?$e!==null?ie?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,$e,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,nt,Xe.width,Xe.height,0,Xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,$e,Qe,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,nt,Xe.width,Xe.height,0,$e,Qe,Xe.data)}}}else{if(Be=y.mipmaps,ie&&Le){Be.length>0&&Ie++;const Me=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,nt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ye){ie?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,$e,Qe,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,nt,Ne[Me].width,Ne[Me].height,0,$e,Qe,Ne[Me].data);for(let Ze=0;Ze<Be.length;Ze++){const Pt=Be[Ze].image[Me].image;ie?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Pt.width,Pt.height,$e,Qe,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,nt,Pt.width,Pt.height,0,$e,Qe,Pt.data)}}else{ie?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$e,Qe,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,nt,$e,Qe,Ne[Me]);for(let Ze=0;Ze<Be.length;Ze++){const Xe=Be[Ze];ie?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,$e,Qe,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,nt,$e,Qe,Xe.image[Me])}}}f(y)&&M(n.TEXTURE_CUBE_MAP),be.__version=de.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function R(F,y,re,le,de,be){const Ce=r.convert(re.format,re.colorSpace),me=r.convert(re.type),ve=x(re.internalFormat,Ce,me,re.normalized,re.colorSpace),Re=i.get(y),Ye=i.get(re);if(Ye.__renderTarget=y,!Re.__hasExternalTextures){const Ne=Math.max(1,y.width>>be),Pe=Math.max(1,y.height>>be);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,be,ve,Ne,Pe,y.depth,0,Ce,me,null):t.texImage2D(de,be,ve,Ne,Pe,0,Ce,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,F),Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,de,Ye.__webglTexture,0,xe(y)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,de,Ye.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(F,y,re){if(n.bindRenderbuffer(n.RENDERBUFFER,F),y.depthBuffer){const le=y.depthTexture,de=le&&le.isDepthTexture?le.type:null,be=S(y.stencilBuffer,de),Ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(y),be,y.width,y.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(y),be,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,be,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,F)}else{const le=y.textures;for(let de=0;de<le.length;de++){const be=le[de],Ce=r.convert(be.format,be.colorSpace),me=r.convert(be.type),ve=x(be.internalFormat,Ce,me,be.normalized,be.colorSpace);Se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(y),ve,y.width,y.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(y),ve,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ve,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function k(F,y,re){const le=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),le){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),de.__webglTexture===void 0){de.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),ye(n.TEXTURE_CUBE_MAP,y.depthTexture);const Re=r.convert(y.depthTexture.format),Ye=r.convert(y.depthTexture.type);let Ne;y.depthTexture.format===fi?Ne=n.DEPTH_COMPONENT24:y.depthTexture.format===Vi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,y.width,y.height,0,Re,Ye,null)}}else Z(y.depthTexture,0);const be=de.__webglTexture,Ce=xe(y),me=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+re:n.TEXTURE_2D,ve=y.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===fi)Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,me,be,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ve,me,be,0);else if(y.depthTexture.format===Vi)Se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,me,be,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ve,me,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(F){const y=i.get(F),re=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){const le=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),le){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=le}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(re)for(let le=0;le<6;le++)k(y.__webglFramebuffer[le],F,le);else{const le=F.texture.mipmaps;le&&le.length>0?k(y.__webglFramebuffer[0],F,0):k(y.__webglFramebuffer,F,0)}else if(re){y.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[le]),y.__webglDepthbuffer[le]===void 0)y.__webglDepthbuffer[le]=n.createRenderbuffer(),L(y.__webglDepthbuffer[le],F,!1);else{const de=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=y.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}else{const le=F.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),L(y.__webglDepthbuffer,F,!1);else{const de=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(F,y,re){const le=i.get(F);y!==void 0&&R(le.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&U(F)}function P(F){const y=F.texture,re=i.get(F),le=i.get(y);F.addEventListener("dispose",v);const de=F.textures,be=F.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=y.version,o.memory.textures++),be){re.__webglFramebuffer=[];for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0){re.__webglFramebuffer[me]=[];for(let ve=0;ve<y.mipmaps.length;ve++)re.__webglFramebuffer[me][ve]=n.createFramebuffer()}else re.__webglFramebuffer[me]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){re.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)re.__webglFramebuffer[me]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let me=0,ve=de.length;me<ve;me++){const Re=i.get(de[me]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Se(F)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const ve=de[me];re.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[me]);const Re=r.convert(ve.format,ve.colorSpace),Ye=r.convert(ve.type),Ne=x(ve.internalFormat,Re,Ye,ve.normalized,ve.colorSpace,F.isXRRenderTarget===!0),Pe=xe(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,re.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),L(re.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ye(n.TEXTURE_CUBE_MAP,y);for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)R(re.__webglFramebuffer[me][ve],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else R(re.__webglFramebuffer[me],F,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);f(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,ve=de.length;me<ve;me++){const Re=de[me],Ye=i.get(Re);let Ne=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),ye(Ne,Re),R(re.__webglFramebuffer,F,Re,n.COLOR_ATTACHMENT0+me,Ne,0),f(Re)&&M(Ne)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(me=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,le.__webglTexture),ye(me,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)R(re.__webglFramebuffer[ve],F,y,n.COLOR_ATTACHMENT0,me,ve);else R(re.__webglFramebuffer,F,y,n.COLOR_ATTACHMENT0,me,0);f(y)&&M(me),t.unbindTexture()}F.depthBuffer&&U(F)}function $(F){const y=F.textures;for(let re=0,le=y.length;re<le;re++){const de=y[re];if(f(de)){const be=E(F),Ce=i.get(de).__webglTexture;t.bindTexture(be,Ce),M(be),t.unbindTexture()}}}const te=[],B=[];function oe(F){if(F.samples>0){if(Se(F)===!1){const y=F.textures,re=F.width,le=F.height;let de=n.COLOR_BUFFER_BIT;const be=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(F),me=y.length>1;if(me)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(y[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,re,le,0,0,re,le,de,n.NEAREST),c===!0&&(te.length=0,B.length=0,te.push(n.COLOR_ATTACHMENT0+Re),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(te.push(be),B.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(y[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){const y=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function xe(F){return Math.min(s.maxSamples,F.samples)}function Se(F){const y=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(F){const y=o.render.frame;u.get(F)!==y&&(u.set(F,y),F.update())}function ze(F,y){const re=F.colorSpace,le=F.format,de=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==Or&&re!==yi&&(dt.getTransfer(re)===bt?(le!==Un||de!==yn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",re)),y}function Ae(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=ee,this.setupRenderTarget=P,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=R,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yf(n,e){function t(i,s=yi){let r;const o=dt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ba)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===Fa)return n.INT;if(i===Qn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===jn)return n.HALF_FLOAT;if(i===kc)return n.ALPHA;if(i===Gc)return n.RGB;if(i===Un)return n.RGBA;if(i===fi)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===ka)return n.RED;if(i===Ga)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===Va)return n.RG_INTEGER;if(i===Ha)return n.RGBA_INTEGER;if(i===wr||i===Tr||i===Ar||i===Cr)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jo||i===Ko||i===Qo||i===jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ea||i===ta||i===na||i===ia||i===sa||i===Nr||i===ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ea||i===ta)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===na)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ia)return r.COMPRESSED_R11_EAC;if(i===sa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Nr)return r.COMPRESSED_RG11_EAC;if(i===ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===oa||i===aa||i===la||i===ca||i===ua||i===ha||i===da||i===fa||i===pa||i===ma||i===ga||i===_a||i===va||i===xa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===aa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===la)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ca)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ua)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ha)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===da)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ma)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_a)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===va)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ya||i===Ma||i===Sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ya)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ba||i===Ea||i===Ur||i===wa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:Mx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends Li{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new bx,f={},M=t.getContextAttributes();let E=null,x=null;const S=[],b=[],T=new Ee;let v=null,w=null;const A=new wn;A.viewport=new Nt;const D=new wn;D.viewport=new Nt;const G=[A,D],q=new hf;let z=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let J=S[I];return J===void 0&&(J=new Bo,S[I]=J),J.getTargetRaySpace()},this.getControllerGrip=function(I){let J=S[I];return J===void 0&&(J=new Bo,S[I]=J),J.getGripSpace()},this.getHand=function(I){let J=S[I];return J===void 0&&(J=new Bo,S[I]=J),J.getHandSpace()};function Y(I){const J=b.indexOf(I.inputSource);if(J===-1)return;const ae=S[J];ae!==void 0&&(ae.update(I.inputSource,I.frame,l||o),ae.dispatchEvent({type:I.type,data:I.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let I=0;I<S.length;I++){const J=b[I];J!==null&&(b[I]=null,S[I].disconnect(J))}z=null,N=null,m.reset();for(const I in f)delete f[I];if(e.setRenderTarget(E),p=null,h=null,d=null,s=null,x=null,V.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),w!==null){const I=w.camera;I.fov=w.fov,I.zoom=w.zoom,I.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,se=null,R=null;M.depth&&(R=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?Vi:fi,se=M.stencil?$s:Qn);const L={colorFormat:t.RGBA8,depthFormat:R,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(L),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new On(h.textureWidth,h.textureHeight,{format:Un,type:yn,depthTexture:new Js(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new On(p.framebufferWidth,p.framebufferHeight,{format:Un,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),V.setContext(s),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(I){for(let J=0;J<I.removed.length;J++){const ae=I.removed[J],se=b.indexOf(ae);se>=0&&(b[se]=null,S[se].disconnect(ae))}for(let J=0;J<I.added.length;J++){const ae=I.added[J];let se=b.indexOf(ae);if(se===-1){for(let L=0;L<S.length;L++)if(L>=b.length){b.push(ae),se=L;break}else if(b[L]===null){b[L]=ae,se=L;break}if(se===-1)break}const R=S[se];R&&R.connect(ae)}}const X=new O,K=new O;function Q(I,J,ae){X.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const se=X.distanceTo(K),R=J.projectionMatrix.elements,L=ae.projectionMatrix.elements,k=R[14]/(R[10]-1),U=R[14]/(R[10]+1),ee=(R[9]+1)/R[5],P=(R[9]-1)/R[5],$=(R[8]-1)/R[0],te=(L[8]+1)/L[0],B=k*$,oe=k*te,xe=se/(-$+te),Se=xe*-$;if(J.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Se),I.translateZ(xe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),R[10]===-1)I.projectionMatrix.copy(J.projectionMatrix),I.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const H=k+xe,ze=U+xe,Ae=B-Se,F=oe+(se-Se),y=ee*U/ze*H,re=P*U/ze*H;I.projectionMatrix.makePerspective(Ae,F,y,re,H,ze),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function j(I,J){J===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(J.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let J=I.near,ae=I.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),q.near=D.near=A.near=J,q.far=D.far=A.far=ae,(z!==q.near||N!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,N=q.far),q.layers.mask=I.layers.mask|6,A.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;const se=I.parent,R=q.cameras;j(q,se);for(let L=0;L<R.length;L++)j(R[L],se);R.length===2?Q(q,A,D):q.projectionMatrix.copy(A.projectionMatrix),w===null&&I.isPerspectiveCamera&&(w={camera:I,fov:I.fov,zoom:I.zoom}),he(I,q,se)};function he(I,J,ae){ae===null?I.matrix.copy(J.matrixWorld):(I.matrix.copy(ae.matrixWorld),I.matrix.invert(),I.matrix.multiply(J.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(J.projectionMatrix),I.projectionMatrixInverse.copy(J.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=zr*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(I){c=I,h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(I){return f[I]};let ge=null;function ye(I,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let se=!1;ae.length!==q.cameras.length&&(q.cameras.length=0,se=!0);for(let U=0;U<ae.length;U++){const ee=ae[U];let P=null;if(p!==null)P=p.getViewport(ee);else{const te=d.getViewSubImage(h,ee);P=te.viewport,U===0&&(e.setRenderTargetTextures(x,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(x))}let $=G[U];$===void 0&&($=new wn,$.layers.enable(U),$.viewport=new Nt,G[U]=$),$.matrix.fromArray(ee.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ee.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(P.x,P.y,P.width,P.height),U===0&&(q.matrix.copy($.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),se===!0&&q.cameras.push($)}const R=s.enabledFeatures;if(R&&R.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const U=d.getDepthInformation(ae[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(R&&R.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let U=0;U<ae.length;U++){const ee=ae[U].camera;if(ee){let P=f[ee];P||(P=new Kc,f[ee]=P);const $=d.getCameraImage(ee);P.sourceTexture=$}}}}for(let ae=0;ae<S.length;ae++){const se=b[ae],R=S[ae];se!==null&&R!==void 0&&R.update(se,J,l||o)}ge&&ge(I,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const V=new pf;V.setAnimationLoop(ye),this.setAnimationLoop=function(I){ge=I},this.dispose=function(){}}}const wx=new gt,Mf=new tt;Mf.set(-1,0,0,0,1,0,0,0,1);function Tx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,sf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,E,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ax(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const b=S.program;i.uniformBlockBinding(x,b)}function l(x,S){let b=s[x.id];b===void 0&&(m(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",M));const T=S.program;i.updateUBOMapping(x,T);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const S=d();x.__bindingPointIndex=S;const b=n.createBuffer(),T=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=s[x.id],b=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,w=b.length;v<w;v++){const A=b[v];if(Array.isArray(A))for(let D=0,G=A.length;D<G;D++)p(A[D],v,D,T);else p(A,v,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,S,b,T){if(_(x,S,b,T)===!0){const v=x.__offset,w=x.value;if(Array.isArray(w)){let A=0;for(let D=0;D<w.length;D++){const G=w[D],q=f(G);g(G,x.__data,A),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(A+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function g(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function _(x,S,b,T){const v=x.value,w=S+"_"+b;if(T[w]===void 0)return typeof v=="number"||typeof v=="boolean"?T[w]=v:ArrayBuffer.isView(v)?T[w]=v.slice():T[w]=v.clone(),!0;{const A=T[w];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return T[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(x){const S=x.uniforms;let b=0;const T=16;for(let w=0,A=S.length;w<A;w++){const D=Array.isArray(S[w])?S[w]:[S[w]];for(let G=0,q=D.length;G<q;G++){const z=D[G],N=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,W=N.length;Y<W;Y++){const Z=N[Y],X=f(Z),K=b%T,Q=K%X.boundary,j=K+Q;b+=Q,j!==0&&T-j<X.storage&&(b+=T-j),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=X.storage}}}const v=b%T;return v>0&&(b+=T-v),x.__size=b,x.__cache={},this}function f(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):je("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){const S=x.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:E}}const Cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Rx(){return si===null&&(si=new qc(Cx,16,16,Ji,jn),si.name="DFG_LUT",si.minFilter=jt,si.magFilter=jt,si.wrapS=ai,si.wrapT=ai,si.generateMipmaps=!1,si.needsUpdate=!0),si}class Sf{constructor(e={}){const{canvas:t=kd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=p,m=new Set([Ha,Va,Ga]),f=new Set([yn,Qn,Ys,$s,za,Ba]),M=new Uint32Array(4),E=new Int32Array(4),x=new O;let S=null,b=null;const T=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1,G=null,q=null,z=null,N=null;this._outputColorSpace=an;let Y=0,W=0,Z=null,X=-1,K=null;const Q=new Nt,j=new Nt;let he=null;const ge=new ct(0);let ye=0,V=t.width,I=t.height,J=1,ae=null,se=null;const R=new Nt(0,0,V,I),L=new Nt(0,0,V,I);let k=!1;const U=new Za;let ee=!1,P=!1;const $=new gt,te=new O,B=new Nt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Se(){return Z===null?J:1}let H=i;function ze(C,ne){return t.getContext(C,ne)}let Ae,F,y,re,le,de,be,Ce,me,ve,Re,Ye,Ne,Pe,$e,Qe,nt,ie,Le,_e,Ie,Be,Me;try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),H===null){const ne="webgl2";if(H=ze(ne,C),H===null)throw ze(ne)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(C){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),ft("WebGLRenderer: "+C.message),C}function Ze(){Ae=new P_(H),Ae.init(),Ie=new yf(H,Ae),F=new y_(H,Ae,e,Ie),y=new xx(H,Ae),F.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),q=H.createFramebuffer(),z=H.createFramebuffer(),N=H.createFramebuffer(),re=new D_(H),le=new rx,de=new yx(H,Ae,y,le,F,Ie,re),be=new R_(A),Ce=new Um(H),Be=new v_(H,Ce),me=new L_(H,Ce,re,Be),ve=new U_(H,me,Ce,Be,re),ie=new N_(H,F,de),$e=new M_(le),Re=new sx(A,be,Ae,F,Be,$e),Ye=new Tx(A,le),Ne=new ax,Pe=new fx(Ae),nt=new __(A,be,y,ve,g,c),Qe=new vx(A,ve,F),Me=new Ax(H,re,F,y),Le=new x_(H,Ae,re),_e=new I_(H,Ae,re),re.programs=Re.programs,A.capabilities=F,A.extensions=Ae,A.properties=le,A.renderLists=Ne,A.shadowMap=Qe,A.state=y,A.info=re}_!==yn&&(w=new F_(_,t.width,t.height,a,s,r));const Xe=new Ex(A,H);this.xr=Xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(V,I,!1))},this.getSize=function(C){return C.set(V,I)},this.setSize=function(C,ne,fe=!0){if(Xe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,I=ne,t.width=Math.floor(C*J),t.height=Math.floor(ne*J),fe===!0&&(t.style.width=C+"px",t.style.height=ne+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,ne)},this.getDrawingBufferSize=function(C){return C.set(V*J,I*J).floor()},this.setDrawingBufferSize=function(C,ne,fe){V=C,I=ne,J=fe,t.width=Math.floor(C*fe),t.height=Math.floor(ne*fe),this.setViewport(0,0,C,ne)},this.setEffects=function(C){if(_===yn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ne=0;ne<C.length;ne++)if(C[ne].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Q)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,ne,fe,ce){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,ne,fe,ce),y.viewport(Q.copy(R).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(L)},this.setScissor=function(C,ne,fe,ce){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,ne,fe,ce),y.scissor(j.copy(L).multiplyScalar(J).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(C){y.setScissorTest(k=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(C=!0,ne=!0,fe=!0){let ce=0;if(C){let ue=!1;if(Z!==null){const Fe=Z.texture.format;ue=m.has(Fe)}if(ue){const Fe=Z.texture.type,Ge=f.has(Fe),Ue=nt.getClearColor(),He=nt.getClearAlpha(),qe=Ue.r,st=Ue.g,ht=Ue.b;Ge?(M[0]=qe,M[1]=st,M[2]=ht,M[3]=He,H.clearBufferuiv(H.COLOR,0,M)):(E[0]=qe,E[1]=st,E[2]=ht,E[3]=He,H.clearBufferiv(H.COLOR,0,E))}else ce|=H.COLOR_BUFFER_BIT}ne&&(ce|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&H.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),G=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),nt.dispose(),Ne.dispose(),Pe.dispose(),le.dispose(),be.dispose(),ve.dispose(),Be.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Ru),Xe.removeEventListener("sessionend",Pu),ns.stop()};function Pt(C){C.preventDefault(),ac("WebGLRenderer: Context Lost."),D=!0}function Mt(){ac("WebGLRenderer: Context Restored."),D=!1;const C=re.autoReset,ne=Qe.enabled,fe=Qe.autoUpdate,ce=Qe.needsUpdate,ue=Qe.type;Ze(),re.autoReset=C,Qe.enabled=ne,Qe.autoUpdate=fe,Qe.needsUpdate=ce,Qe.type=ue}function Gn(C){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){const ne=C.target;ne.removeEventListener("dispose",ti),Kf(ne)}function Kf(C){Qf(C),le.remove(C)}function Qf(C){const ne=le.get(C).programs;ne!==void 0&&(ne.forEach(function(fe){Re.releaseProgram(fe)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,ne,fe,ce,ue,Fe){ne===null&&(ne=oe);const Ge=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Ue=tp(C,ne,fe,ce,ue);y.setMaterial(ce,Ge);let He=fe.index,qe=1;if(ce.wireframe===!0){if(He=me.getWireframeAttribute(fe),He===void 0)return;qe=2}const st=fe.drawRange,ht=fe.attributes.position;let We=st.start*qe,St=(st.start+st.count)*qe;Fe!==null&&(We=Math.max(We,Fe.start*qe),St=Math.min(St,(Fe.start+Fe.count)*qe)),He!==null?(We=Math.max(We,0),St=Math.min(St,He.count)):ht!=null&&(We=Math.max(We,0),St=Math.min(St,ht.count));const Vt=St-We;if(Vt<0||Vt===1/0)return;Be.setup(ue,ce,Ue,fe,He);let It,Ct=Le;if(He!==null&&(It=Ce.get(He),Ct=_e,Ct.setIndex(It)),ue.isMesh)ce.wireframe===!0?(y.setLineWidth(ce.wireframeLinewidth*Se()),Ct.setMode(H.LINES)):Ct.setMode(H.TRIANGLES);else if(ue.isLine){let sn=ce.linewidth;sn===void 0&&(sn=1),y.setLineWidth(sn*Se()),ue.isLineSegments?Ct.setMode(H.LINES):ue.isLineLoop?Ct.setMode(H.LINE_LOOP):Ct.setMode(H.LINE_STRIP)}else ue.isPoints?Ct.setMode(H.POINTS):ue.isSprite&&Ct.setMode(H.TRIANGLES);if(ue.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const sn=ue._multiDrawStarts,ke=ue._multiDrawCounts,hn=ue._multiDrawCount,mt=He?Ce.get(He).bytesPerElement:1,An=le.get(ce).currentProgram.getUniforms();for(let ni=0;ni<hn;ni++)An.setValue(H,"_gl_DrawID",ni),Ct.render(sn[ni]/mt,ke[ni])}else if(ue.isInstancedMesh)Ct.renderInstances(We,Vt,ue.count);else if(fe.isInstancedBufferGeometry){const sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,ke=Math.min(fe.instanceCount,sn);Ct.renderInstances(We,Vt,ke)}else Ct.render(We,Vt)};function Cu(C,ne,fe,ce){G!==null&&C.isNodeMaterial&&G.setObject(ce,C),ee===!0&&$e.setState(C,fe,!1),C.transparent===!0&&C.side===Ln&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,io(C,ne,ce),C.side=$i,C.needsUpdate=!0,io(C,ne,ce),C.side=Ln):io(C,ne,ce)}this.compile=function(C,ne,fe=null){fe===null&&(fe=C),G!==null&&G.renderStart(C,ne,fe),b=Pe.get(fe),b.init(ne),v.push(b),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ne.layers)&&(b.pushLight(ue),ue.castShadow&&b.pushShadow(ue))}),C!==fe&&C.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ne.layers)&&(b.pushLight(ue),ue.castShadow&&b.pushShadow(ue))}),b.setupLights(),G!==null&&G.updateLights(b.state.lightsArray),P=this.localClippingEnabled,ee=$e.init(this.clippingPlanes,P),ee===!0&&$e.setGlobalState(this.clippingPlanes,ne),G!==null&&Qe.render(b.state.shadowsArray,fe,ne);const ce=new Set;return C.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Fe=ue.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ue=Fe[Ge];Cu(Ue,fe,ne,ue),ce.add(Ue)}else Cu(Fe,fe,ne,ue),ce.add(Fe)}),b=v.pop(),G!==null&&G.renderEnd(),ce},this.compileAsync=function(C,ne,fe=null){const ce=this.compile(C,ne,fe);return new Promise(ue=>{function Fe(){if(ce.forEach(function(Ge){const He=le.get(Ge).currentProgram;(He===void 0||He.isReady())&&ce.delete(Ge)}),ce.size===0){ue(C);return}setTimeout(Fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let pl=null;function jf(C){pl&&pl(C)}function Ru(){ns.stop()}function Pu(){ns.start()}const ns=new pf;ns.setAnimationLoop(jf),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(C){pl=C,Xe.setAnimationLoop(C),C===null?ns.stop():ns.start()},Xe.addEventListener("sessionstart",Ru),Xe.addEventListener("sessionend",Pu),this.render=function(C,ne){if(ne!==void 0&&ne.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(C,ne);const fe=Xe.enabled===!0&&Xe.isPresenting===!0,ce=w!==null&&(Z===null||fe)&&w.begin(A,Z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(ne),ne=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,ne,Z),b=Pe.get(C,v.length),b.init(ne),b.state.textureUnits=de.getTextureUnits(),v.push(b),$.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),U.setFromProjectionMatrix($,$n,ne.reversedDepth),P=this.localClippingEnabled,ee=$e.init(this.clippingPlanes,P),S=Ne.get(C,T.length),S.init(),T.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=A.xr.getDepthSensingMesh();Ge!==null&&ml(Ge,ne,-1/0,A.sortObjects)}ml(C,ne,0,A.sortObjects),S.finish(),G!==null&&G.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(ae,se),xe=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,xe&&nt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&$e.beginShadows();const ue=b.state.shadowsArray;if(Qe.render(ue,C,ne),ee===!0&&$e.endShadows(),(ce&&w.hasRenderPass())===!1){const Ge=S.opaque,Ue=S.transmissive;if(b.setupLights(),ne.isArrayCamera){const He=ne.cameras;if(Ue.length>0)for(let qe=0,st=He.length;qe<st;qe++){const ht=He[qe];Iu(Ge,Ue,C,ht)}xe&&nt.render(C);for(let qe=0,st=He.length;qe<st;qe++){const ht=He[qe];Lu(S,C,ht,ht.viewport)}}else Ue.length>0&&Iu(Ge,Ue,C,ne),xe&&nt.render(C),Lu(S,C,ne)}Z!==null&&W===0&&(de.updateMultisampleRenderTarget(Z),de.updateRenderTargetMipmap(Z)),ce&&w.end(A),C.isScene===!0&&C.onAfterRender(A,C,ne),Be.resetDefaultState(),X=-1,K=null,v.pop(),v.length>0?(b=v[v.length-1],de.setTextureUnits(b.state.textureUnits),ee===!0&&$e.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,G!==null&&G.renderEnd()};function ml(C,ne,fe,ce){if(C.visible===!1)return;if(C.layers.test(ne.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ne);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(U)){ce&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Ge=ve.update(C),Ue=C.material;Ue.visible&&S.push(C,Ge,Ue,fe,B.z,null,ne)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(U))){const Ge=ve.update(C),Ue=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),B.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),B.copy(Ge.boundingSphere.center)),B.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(Ue)){const He=Ge.groups;for(let qe=0,st=He.length;qe<st;qe++){const ht=He[qe],We=Ue[ht.materialIndex];We&&We.visible&&S.push(C,Ge,We,fe,B.z,ht,ne)}}else Ue.visible&&S.push(C,Ge,Ue,fe,B.z,null,ne)}}const Fe=C.children;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++)ml(Fe[Ge],ne,fe,ce)}function Lu(C,ne,fe,ce){const{opaque:ue,transmissive:Fe,transparent:Ge}=C;b.setupLightsView(fe),ee===!0&&$e.setGlobalState(A.clippingPlanes,fe),ce&&y.viewport(Q.copy(ce)),ue.length>0&&no(ue,ne,fe),Fe.length>0&&no(Fe,ne,fe),Ge.length>0&&no(Ge,ne,fe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Iu(C,ne,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ce.id]===void 0){const We=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ce.id]=new On(1,1,{generateMipmaps:!0,type:We?jn:yn,minFilter:Gi,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Fe=b.state.transmissionRenderTarget[ce.id],Ge=ce.viewport||Q;Fe.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget(),He=A.getActiveCubeFace(),qe=A.getActiveMipmapLevel();A.setRenderTarget(Fe),A.getClearColor(ge),ye=A.getClearAlpha(),ye<1&&A.setClearColor(16777215,.5),A.clear(),xe&&nt.render(fe);const st=A.toneMapping;A.toneMapping=Zn;const ht=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),b.setupLightsView(ce),ee===!0&&$e.setGlobalState(A.clippingPlanes,ce),no(C,fe,ce),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let St=0,Vt=ne.length;St<Vt;St++){const It=ne[St],{object:Ct,geometry:sn,material:ke,group:hn}=It;if(ke.side===Ln&&Ct.layers.test(ce.layers)){const mt=ke.side;ke.side=gn,ke.needsUpdate=!0,Du(Ct,fe,ce,sn,ke,hn),ke.side=mt,ke.needsUpdate=!0,We=!0}}We===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}A.setRenderTarget(Ue,He,qe),A.setClearColor(ge,ye),ht!==void 0&&(ce.viewport=ht),A.toneMapping=st}function no(C,ne,fe){const ce=ne.isScene===!0?ne.overrideMaterial:null;for(let ue=0,Fe=C.length;ue<Fe;ue++){const Ge=C[ue],{object:Ue,geometry:He,group:qe}=Ge;let st=Ge.material;st.allowOverride===!0&&ce!==null&&(st=ce),Ue.layers.test(fe.layers)&&Du(Ue,ne,fe,He,st,qe)}}function Du(C,ne,fe,ce,ue,Fe){G!==null&&ue.isNodeMaterial&&G.setObject(C,ue),C.onBeforeRender(A,ne,fe,ce,ue,Fe),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(A,ne,fe,ce,C,Fe),ue.transparent===!0&&ue.side===Ln&&ue.forceSinglePass===!1?(ue.side=gn,ue.needsUpdate=!0,A.renderBufferDirect(fe,ne,ce,ue,C,Fe),ue.side=$i,ue.needsUpdate=!0,A.renderBufferDirect(fe,ne,ce,ue,C,Fe),ue.side=Ln):A.renderBufferDirect(fe,ne,ce,ue,C,Fe),C.onAfterRender(A,ne,fe,ce,ue,Fe)}function io(C,ne,fe){ne.isScene!==!0&&(ne=oe);const ce=le.get(C),ue=b.state.lights,Fe=b.state.shadowsArray,Ge=ue.state.version,Ue=Re.getParameters(C,ue.state,Fe,ne,fe,b.state.lightProbeGridArray),He=Re.getProgramCacheKey(Ue);let qe=ce.programs;ce.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ne.environment:null,ce.fog=ne.fog;const st=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ce.envMap=be.get(C.envMap||ce.environment,st),ce.envMapRotation=ce.environment!==null&&C.envMap===null?ne.environmentRotation:C.envMapRotation,qe===void 0&&(C.addEventListener("dispose",ti),qe=new Map,ce.programs=qe);let ht=qe.get(He);if(ht!==void 0){if(ce.currentProgram===ht&&ce.lightsStateVersion===Ge)return Uu(C,Ue),ht}else Ue.uniforms=Re.getUniforms(C),G!==null&&C.isNodeMaterial&&G.build(C,fe,Ue),C.onBeforeCompile(Ue,A),ht=Re.acquireProgram(Ue,He),qe.set(He,ht),ce.uniforms=Ue.uniforms;const We=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=$e.uniform),Uu(C,Ue),ce.needsLights=ip(C),ce.lightsStateVersion=Ge,ce.needsLights&&(We.ambientLightColor.value=ue.state.ambient,We.lightProbe.value=ue.state.probe,We.sunLights.value=ue.state.sun,We.sunLightShadows.value=ue.state.sunShadow,We.directionalLights.value=ue.state.directional,We.directionalLightShadows.value=ue.state.directionalShadow,We.spotLights.value=ue.state.spot,We.spotLightShadows.value=ue.state.spotShadow,We.rectAreaLights.value=ue.state.rectArea,We.ltc_1.value=ue.state.rectAreaLTC1,We.ltc_2.value=ue.state.rectAreaLTC2,We.pointLights.value=ue.state.point,We.pointLightShadows.value=ue.state.pointShadow,We.hemisphereLights.value=ue.state.hemi,We.sunShadowMatrix.value=ue.state.sunShadowMatrix,We.sunShadowCascade.value=ue.state.sunShadowCascade,We.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,We.spotLightMatrix.value=ue.state.spotLightMatrix,We.spotLightMap.value=ue.state.spotLightMap,We.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=b.state.lightProbeGridArray.length>0,ce.currentProgram=ht,ce.uniformsList=null,ht}function Nu(C){if(C.uniformsList===null){const ne=C.currentProgram.getUniforms();C.uniformsList=ko.seqWithValue(ne.seq,C.uniforms)}return C.uniformsList}function Uu(C,ne){const fe=le.get(C);fe.outputColorSpace=ne.outputColorSpace,fe.batching=ne.batching,fe.batchingColor=ne.batchingColor,fe.instancing=ne.instancing,fe.instancingColor=ne.instancingColor,fe.instancingMorph=ne.instancingMorph,fe.skinning=ne.skinning,fe.morphTargets=ne.morphTargets,fe.morphNormals=ne.morphNormals,fe.morphColors=ne.morphColors,fe.morphTargetsCount=ne.morphTargetsCount,fe.numClippingPlanes=ne.numClippingPlanes,fe.numIntersection=ne.numClipIntersection,fe.vertexAlphas=ne.vertexAlphas,fe.vertexTangents=ne.vertexTangents,fe.toneMapping=ne.toneMapping}function ep(C,ne){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(ne.matrixWorld);for(let fe=0,ce=C.length;fe<ce;fe++){const ue=C[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(x))return ue}return null}function tp(C,ne,fe,ce,ue){ne.isScene!==!0&&(ne=oe),de.resetTextureUnits();const Fe=ne.fog,Ge=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?ne.environment:null,Ue=Z===null?A.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:dt.workingColorSpace,He=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,qe=be.get(ce.envMap||Ge,He),st=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!fe.morphAttributes.position,St=!!fe.morphAttributes.normal,Vt=!!fe.morphAttributes.color;let It=Zn;ce.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(It=A.toneMapping);const Ct=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,sn=Ct!==void 0?Ct.length:0,ke=le.get(ce),hn=b.state.lights;if(ee===!0&&(P===!0||C!==K)){const Lt=C===K&&ce.id===X;$e.setState(ce,C,Lt)}let mt=!1;ce.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==hn.state.version||ke.outputColorSpace!==Ue||ue.isBatchedMesh&&ke.batching===!1||!ue.isBatchedMesh&&ke.batching===!0||ue.isBatchedMesh&&ke.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&ke.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&ke.instancing===!1||!ue.isInstancedMesh&&ke.instancing===!0||ue.isSkinnedMesh&&ke.skinning===!1||!ue.isSkinnedMesh&&ke.skinning===!0||ue.isInstancedMesh&&ke.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&ke.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&ke.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&ke.instancingMorph===!1&&ue.morphTexture!==null||ke.envMap!==qe||ce.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==$e.numPlanes||ke.numIntersection!==$e.numIntersection)||ke.vertexAlphas!==st||ke.vertexTangents!==ht||ke.morphTargets!==We||ke.morphNormals!==St||ke.morphColors!==Vt||ke.toneMapping!==It||ke.morphTargetsCount!==sn||!!ke.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,ke.__version=ce.version);let An=ke.currentProgram;mt===!0&&(An=io(ce,ne,ue),G&&ce.isNodeMaterial&&G.onUpdateProgram(ce,An,ke));let ni=!1,Di=!1,ys=!1;const Tt=An.getUniforms(),Bt=ke.uniforms;if(y.useProgram(An.program)&&(ni=!0,Di=!0,ys=!0),ce.id!==X&&(X=ce.id,Di=!0),ke.needsLights){const Lt=ep(b.state.lightProbeGridArray,ue);ke.lightProbeGrid!==Lt&&(ke.lightProbeGrid=Lt,Di=!0)}if(ni||K!==C){y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Tt.setValue(H,"projectionMatrix",C.projectionMatrix),Tt.setValue(H,"viewMatrix",C.matrixWorldInverse);const Ui=Tt.map.cameraPosition;Ui!==void 0&&Ui.setValue(H,te.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&Tt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Tt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,Di=!0,ys=!0)}if(ke.needsLights&&(hn.state.sunShadowMap.length>0&&Tt.setValue(H,"sunShadowMap",hn.state.sunShadowMap,de),hn.state.directionalShadowMap.length>0&&Tt.setValue(H,"directionalShadowMap",hn.state.directionalShadowMap,de),hn.state.spotShadowMap.length>0&&Tt.setValue(H,"spotShadowMap",hn.state.spotShadowMap,de),hn.state.pointShadowMap.length>0&&Tt.setValue(H,"pointShadowMap",hn.state.pointShadowMap,de)),ue.isSkinnedMesh){Tt.setOptional(H,ue,"bindMatrix"),Tt.setOptional(H,ue,"bindMatrixInverse");const Lt=ue.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Tt.setValue(H,"boneTexture",Lt.boneTexture,de))}ue.isBatchedMesh&&(Tt.setOptional(H,ue,"batchingTexture"),Tt.setValue(H,"batchingTexture",ue._matricesTexture,de),Tt.setOptional(H,ue,"batchingIdTexture"),Tt.setValue(H,"batchingIdTexture",ue._indirectTexture,de),Tt.setOptional(H,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Tt.setValue(H,"batchingColorTexture",ue._colorsTexture,de));const Ni=fe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&ie.update(ue,fe,An),(Di||ke.receiveShadow!==ue.receiveShadow)&&(ke.receiveShadow=ue.receiveShadow,Tt.setValue(H,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&ne.environment!==null&&(Bt.envMapIntensity.value=ne.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Rx()),Di){if(Tt.setValue(H,"toneMappingExposure",A.toneMappingExposure),ke.needsLights&&np(Bt,ys),Fe&&ce.fog===!0&&Ye.refreshFogUniforms(Bt,Fe),Ye.refreshMaterialUniforms(Bt,ce,J,I,b.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){const Lt=ke.lightProbeGrid;Bt.probesSH.value=Lt.texture,Bt.probesMin.value.copy(Lt.boundingBox.min),Bt.probesMax.value.copy(Lt.boundingBox.max),Bt.probesResolution.value.copy(Lt.resolution)}ko.upload(H,Nu(ke),Bt,de)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ko.upload(H,Nu(ke),Bt,de),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Tt.setValue(H,"center",ue.center),Tt.setValue(H,"modelViewMatrix",ue.modelViewMatrix),Tt.setValue(H,"normalMatrix",ue.normalMatrix),Tt.setValue(H,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Lt=ce.uniformsGroups;for(let Ui=0,Ms=Lt.length;Ui<Ms;Ui++){const Fu=Lt[Ui];Me.update(Fu,An),Me.bind(Fu,An)}}return An}function np(C,ne){C.ambientLightColor.needsUpdate=ne,C.lightProbe.needsUpdate=ne,C.sunLights.needsUpdate=ne,C.sunLightShadows.needsUpdate=ne,C.directionalLights.needsUpdate=ne,C.directionalLightShadows.needsUpdate=ne,C.pointLights.needsUpdate=ne,C.pointLightShadows.needsUpdate=ne,C.spotLights.needsUpdate=ne,C.spotLightShadows.needsUpdate=ne,C.rectAreaLights.needsUpdate=ne,C.hemisphereLights.needsUpdate=ne}function ip(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,ne,fe){const ce=le.get(C);ce.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),le.get(C.texture).__webglTexture=ne,le.get(C.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ne){const fe=le.get(C);fe.__webglFramebuffer=ne,fe.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(C,ne=0,fe=0){Z=C,Y=ne,W=fe;let ce=null,ue=!1,Fe=!1;if(C){const Ue=le.get(C);if(Ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Ue.__webglFramebuffer),Q.copy(C.viewport),j.copy(C.scissor),he=C.scissorTest,y.viewport(Q),y.scissor(j),y.setScissorTest(he),X=-1;return}else if(Ue.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if(Ue.__hasExternalTextures)de.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const st=C.depthTexture;if(Ue.__boundDepthTexture!==st){if(st!==null&&le.has(st)&&(C.width!==st.image.width||C.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);const qe=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[ne])?ce=qe[ne][fe]:ce=qe[ne],ue=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?ce=le.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?ce=qe[fe]:ce=qe,Q.copy(C.viewport),j.copy(C.scissor),he=C.scissorTest}else Q.copy(R).multiplyScalar(J).floor(),j.copy(L).multiplyScalar(J).floor(),he=k;if(fe!==0&&(ce=q),y.bindFramebuffer(H.FRAMEBUFFER,ce)&&y.drawBuffers(C,ce),y.viewport(Q),y.scissor(j),y.setScissorTest(he),ue){const Ue=le.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue.__webglTexture,fe)}else if(Fe){const Ue=ne;for(let He=0;He<C.textures.length;He++){const qe=le.get(C.textures[He]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+He,qe.__webglTexture,fe,Ue)}}else if(C!==null&&fe!==0){const Ue=le.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ue.__webglTexture,fe)}X=-1};function Ou(C){const ne=le.get(C);return(ne.__readFormat!==C.format||ne.__readType!==C.type)&&(ne.__readFormat=C.format,ne.__readType=C.type,ne.__formatReadable=F.textureFormatReadable(C.format),ne.__typeReadable=F.textureTypeReadable(C.type)),ne}this.readRenderTargetPixels=function(C,ne,fe,ce,ue,Fe,Ge,Ue=0){if(!(C&&C.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(He=He[Ge]),He){y.bindFramebuffer(H.FRAMEBUFFER,He);try{const qe=C.textures[Ue],st=qe.format,ht=qe.type;C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ue);const We=Ou(qe);if(We.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=C.width-ce&&fe>=0&&fe<=C.height-ue&&H.readPixels(ne,fe,ce,ue,Ie.convert(st),Ie.convert(ht),Fe)}finally{const qe=Z!==null?le.get(Z).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(C,ne,fe,ce,ue,Fe,Ge,Ue=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(He=He[Ge]),He)if(ne>=0&&ne<=C.width-ce&&fe>=0&&fe<=C.height-ue){y.bindFramebuffer(H.FRAMEBUFFER,He);const qe=C.textures[Ue],st=qe.format,ht=qe.type;C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ue);const We=Ou(qe);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,St),H.bufferData(H.PIXEL_PACK_BUFFER,Fe.byteLength,H.STREAM_READ),H.readPixels(ne,fe,ce,ue,Ie.convert(st),Ie.convert(ht),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Vt=Z!==null?le.get(Z).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Vt);const It=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _p(H,It,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,St),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Fe),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(St),H.deleteSync(It),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ne=null,fe=0){const ce=Math.pow(2,-fe),ue=Math.floor(C.image.width*ce),Fe=Math.floor(C.image.height*ce),Ge=ne!==null?ne.x:0,Ue=ne!==null?ne.y:0;de.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,Ge,Ue,ue,Fe),y.unbindTexture()},this.copyTextureToTexture=function(C,ne,fe=null,ce=null,ue=0,Fe=0){let Ge,Ue,He,qe,st,ht,We,St,Vt;const It=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(fe!==null)Ge=fe.max.x-fe.min.x,Ue=fe.max.y-fe.min.y,He=fe.isBox3?fe.max.z-fe.min.z:1,qe=fe.min.x,st=fe.min.y,ht=fe.isBox3?fe.min.z:0;else{const Bt=Math.pow(2,-ue);Ge=Math.floor(It.width*Bt),Ue=Math.floor(It.height*Bt),C.isDataArrayTexture?He=It.depth:C.isData3DTexture?He=Math.floor(It.depth*Bt):He=1,qe=0,st=0,ht=0}ce!==null?(We=ce.x,St=ce.y,Vt=ce.z):(We=0,St=0,Vt=0);const Ct=Ie.convert(ne.format),sn=Ie.convert(ne.type);let ke;ne.isData3DTexture?(de.setTexture3D(ne,0),ke=H.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(de.setTexture2DArray(ne,0),ke=H.TEXTURE_2D_ARRAY):(de.setTexture2D(ne,0),ke=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ne.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,ne.unpackAlignment);const hn=y.getParameter(H.UNPACK_ROW_LENGTH),mt=y.getParameter(H.UNPACK_IMAGE_HEIGHT),An=y.getParameter(H.UNPACK_SKIP_PIXELS),ni=y.getParameter(H.UNPACK_SKIP_ROWS),Di=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,It.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,qe),y.pixelStorei(H.UNPACK_SKIP_ROWS,st),y.pixelStorei(H.UNPACK_SKIP_IMAGES,ht);const ys=C.isDataArrayTexture||C.isData3DTexture,Tt=ne.isDataArrayTexture||ne.isData3DTexture;if(C.isDepthTexture){const Bt=le.get(C),Ni=le.get(ne),Lt=le.get(Bt.__renderTarget),Ui=le.get(Ni.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Lt.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ms=0;Ms<He;Ms++)ys&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,le.get(C).__webglTexture,ue,ht+Ms),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,le.get(ne).__webglTexture,Fe,Vt+Ms)),H.blitFramebuffer(qe,st,Ge,Ue,We,St,Ge,Ue,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ue!==0||C.isRenderTargetTexture||le.has(C)){const Bt=le.get(C),Ni=le.get(ne);y.bindFramebuffer(H.READ_FRAMEBUFFER,z),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,N);for(let Lt=0;Lt<He;Lt++)ys?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,ue,ht+Lt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,ue),Tt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ni.__webglTexture,Fe,Vt+Lt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ni.__webglTexture,Fe),ue!==0?H.blitFramebuffer(qe,st,Ge,Ue,We,St,Ge,Ue,H.COLOR_BUFFER_BIT,H.NEAREST):Tt?H.copyTexSubImage3D(ke,Fe,We,St,Vt+Lt,qe,st,Ge,Ue):H.copyTexSubImage2D(ke,Fe,We,St,qe,st,Ge,Ue);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tt?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(ke,Fe,We,St,Vt,Ge,Ue,He,Ct,sn,It.data):ne.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,Fe,We,St,Vt,Ge,Ue,He,Ct,It.data):H.texSubImage3D(ke,Fe,We,St,Vt,Ge,Ue,He,Ct,sn,It):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Fe,We,St,Ge,Ue,Ct,sn,It.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Fe,We,St,It.width,It.height,Ct,It.data):H.texSubImage2D(H.TEXTURE_2D,Fe,We,St,Ge,Ue,Ct,sn,It);y.pixelStorei(H.UNPACK_ROW_LENGTH,hn),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),y.pixelStorei(H.UNPACK_SKIP_PIXELS,An),y.pixelStorei(H.UNPACK_SKIP_ROWS,ni),y.pixelStorei(H.UNPACK_SKIP_IMAGES,Di),Fe===0&&ne.generateMipmaps&&H.generateMipmap(ke),y.unbindTexture()},this.initRenderTarget=function(C){le.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),y.unbindTexture()},this.resetState=function(){Y=0,W=0,Z=null,y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const cn=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Oa,AddEquation:cs,AddOperation:Cd,AdditiveBlending:ic,AgXToneMapping:Dc,AlphaFormat:kc,AlwaysCompare:zd,AlwaysDepth:Ho,AlwaysStencilFunc:Id,ArcCurve:Zd,ArrayCamera:hf,BackSide:gn,BasicDepthPacking:Pd,Box3:Qi,BoxGeometry:Ii,BufferAttribute:Fn,BufferGeometry:Gt,ByteType:Oc,Camera:ou,CanvasTexture:Jc,CatmullRomCurve3:jc,CineonToneMapping:Lc,CircleGeometry:Ja,ClampToEdgeWrapping:ai,Color:ct,ColorManagement:dt,ConeGeometry:_s,ConstantAlphaFactor:wd,ConstantColorFactor:bd,Controls:ff,CubeCamera:uf,CubeDepthTexture:$d,CubeReflectionMapping:Zi,CubeRefractionMapping:ps,CubeTexture:Zc,CubeUVReflectionMapping:Xr,CubicBezierCurve:eu,CubicBezierCurve3:Jd,CullFaceBack:nc,CullFaceFront:ad,CullFaceNone:od,Curve:ei,CurvePath:Qd,CustomBlending:cd,CustomToneMapping:Ic,CylinderGeometry:Yr,Data3DTexture:Wd,DataArrayTexture:Hc,DataTexture:qc,DepthFormat:fi,DepthStencilFormat:Vi,DepthTexture:Js,DirectionalLight:au,DoubleSide:Ln,DstAlphaFactor:vd,DstColorFactor:yd,EllipseCurve:Qa,EqualCompare:Ud,EqualDepth:Xo,EquirectangularReflectionMapping:Uo,EquirectangularRefractionMapping:Oo,Euler:Pi,EventDispatcher:Li,ExternalTexture:Kc,ExtrudeGeometry:tr,Float32BufferAttribute:xt,FloatType:Nn,FogExp2:$a,FrontSide:$i,Frustum:Za,GLSL3:oc,GreaterCompare:Od,GreaterDepth:Yo,GreaterEqualCompare:Xa,GreaterEqualDepth:qo,Group:Hi,HalfFloatType:jn,HemisphereLight:cf,IcosahedronGeometry:Zr,ImageUtils:Vd,InstancedBufferAttribute:lc,InstancedMesh:cc,IntType:Fa,KeepStencilOp:zo,Layers:Ya,LessCompare:Nd,LessDepth:Wo,LessEqualCompare:Wa,LessEqualDepth:qs,Light:nl,LightShadow:ru,Line:em,LineBasicMaterial:Yc,LineCurve:tu,LineCurve3:Kd,LineDashedMaterial:Lm,LinearFilter:jt,LinearMipmapLinearFilter:Gi,LinearMipmapNearestFilter:Fo,LinearSRGBColorSpace:Or,LinearToneMapping:Rc,LinearTransfer:Fr,MOUSE:bi,Material:es,MathUtils:xn,Matrix2:gc,Matrix3:tt,Matrix4:gt,MaxEquation:fd,Mesh:_n,MeshBasicMaterial:qr,MeshDepthMaterial:af,MeshDistanceMaterial:lf,MeshStandardMaterial:zs,MinEquation:dd,MirroredRepeatWrapping:Zo,MixOperation:Ad,MultiplyBlending:rc,MultiplyOperation:Cc,NearestFilter:Kt,NearestMipmapLinearFilter:xr,NearestMipmapNearestFilter:Rd,NeutralToneMapping:Nc,NeverCompare:Dd,NeverDepth:Vo,NoBlending:ui,NoColorSpace:yi,NoToneMapping:Zn,NormalBlending:Vs,NotEqualCompare:Fd,NotEqualDepth:$o,Object3D:kt,ObjectSpaceNormalMap:Ld,OneFactor:md,OneMinusConstantAlphaFactor:Td,OneMinusConstantColorFactor:Ed,OneMinusDstAlphaFactor:xd,OneMinusDstColorFactor:Md,OneMinusSrcAlphaFactor:Ac,OneMinusSrcColorFactor:_d,OrthographicCamera:Jr,PCFShadowMap:Gs,PCFSoftShadowMap:ld,PMREMGenerator:_c,Path:hc,PerspectiveCamera:wn,Plane:oi,PlaneGeometry:vs,PointLight:il,Points:Yd,PointsMaterial:$c,PolyhedronGeometry:Ka,QuadraticBezierCurve:nu,QuadraticBezierCurve3:iu,Quaternion:Ri,R11_EAC_Format:ia,RED_GREEN_RGTC2_Format:Ur,RED_RGTC1_Format:ba,REVISION:Ua,RG11_EAC_Format:Nr,RGBAFormat:Un,RGBAIntegerFormat:Ha,RGBA_ASTC_10x10_Format:_a,RGBA_ASTC_10x5_Format:pa,RGBA_ASTC_10x6_Format:ma,RGBA_ASTC_10x8_Format:ga,RGBA_ASTC_12x10_Format:va,RGBA_ASTC_12x12_Format:xa,RGBA_ASTC_4x4_Format:oa,RGBA_ASTC_5x4_Format:aa,RGBA_ASTC_5x5_Format:la,RGBA_ASTC_6x5_Format:ca,RGBA_ASTC_6x6_Format:ua,RGBA_ASTC_8x5_Format:ha,RGBA_ASTC_8x6_Format:da,RGBA_ASTC_8x8_Format:fa,RGBA_BPTC_Format:ya,RGBA_ETC2_EAC_Format:na,RGBA_PVRTC_2BPPV1_Format:jo,RGBA_PVRTC_4BPPV1_Format:Qo,RGBA_S3TC_DXT1_Format:Tr,RGBA_S3TC_DXT3_Format:Ar,RGBA_S3TC_DXT5_Format:Cr,RGBFormat:Gc,RGB_BPTC_SIGNED_Format:Ma,RGB_BPTC_UNSIGNED_Format:Sa,RGB_ETC1_Format:ea,RGB_ETC2_Format:ta,RGB_PVRTC_2BPPV1_Format:Ko,RGB_PVRTC_4BPPV1_Format:Jo,RGB_S3TC_DXT1_Format:wr,RGFormat:Ji,RGIntegerFormat:Va,RawShaderMaterial:of,Ray:er,Raycaster:df,RedFormat:ka,RedIntegerFormat:Ga,ReinhardToneMapping:Pc,RenderTarget:Hd,RepeatWrapping:Dr,ReverseSubtractEquation:hd,SIGNED_R11_EAC_Format:sa,SIGNED_RED_GREEN_RGTC2_Format:wa,SIGNED_RED_RGTC1_Format:Ea,SIGNED_RG11_EAC_Format:ra,SRGBColorSpace:an,SRGBTransfer:bt,Scene:qd,ShaderChunk:it,ShaderLib:Yn,ShaderMaterial:Bn,Shape:$r,ShapeUtils:hs,ShortType:Fc,Sphere:ji,SphereGeometry:ja,Spherical:mc,SplineCurve:su,SrcAlphaFactor:Tc,SrcAlphaSaturateFactor:Sd,SrcColorFactor:gd,StaticDrawUsage:Bd,SubtractEquation:ud,SubtractiveBlending:sc,TOUCH:Mi,TangentSpaceNormalMap:Ta,Texture:tn,TextureSource:qa,TorusGeometry:el,Triangle:In,TubeGeometry:tl,UVMapping:Uc,Uint16BufferAttribute:Wc,Uint32BufferAttribute:Xc,UniformsLib:De,UniformsUtils:rf,UnsignedByteType:yn,UnsignedInt101111Type:Bc,UnsignedInt248Type:$s,UnsignedInt5999Type:zc,UnsignedIntType:Qn,UnsignedShort4444Type:za,UnsignedShort5551Type:Ba,UnsignedShortType:Ys,VSMShadowMap:Fs,Vector2:Ee,Vector3:O,Vector4:Nt,WebGLCoordinateSystem:$n,WebGLCubeRenderTarget:lu,WebGLRenderTarget:On,WebGLRenderer:Sf,WebGLUtils:yf,WebGPUCoordinateSystem:Zs,WebXRController:Bo,ZeroFactor:pd,createCanvasElement:kd,error:ft,log:ac,warn:je,warnOnce:ds},Symbol.toStringTag,{value:"Module"})),$h={type:"change"},cu={type:"start"},bf={type:"end"},Do=new er,Zh=new oi,Px=Math.cos(70*xn.DEG2RAD),Xt=new O,vn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$l=1e-6;class Lx extends ff{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bi.ROTATE,MIDDLE:bi.DOLLY,RIGHT:bi.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ri,this._lastTargetPosition=new O,this._quat=new Ri().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mc,this._sphericalDelta=new mc,this._scale=1,this._panOffset=new O,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new O,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Ix.bind(this),this._onPointerUp=Nx.bind(this),this._onContextMenu=Gx.bind(this),this._onMouseWheel=Fx.bind(this),this._onKeyDown=zx.bind(this),this._onTouchStart=Bx.bind(this),this._onTouchMove=kx.bind(this),this._onMouseDown=Ux.bind(this),this._onMouseMove=Ox.bind(this),this._interceptControlDown=Vx.bind(this),this._interceptControlUp=Hx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($h),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Xt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<Px?this.object.lookAt(this.target):(Zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(Zh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$l||this._lastTargetPosition.distanceToSquared(this.target)>$l?(this.dispatchEvent($h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Xt.copy(s).sub(this.target);let r=Xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ix(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Dx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Nx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bf),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ux(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Et.DOLLY;break;case bi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}break;case bi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(cu)}function Ox(n){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Fx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(n.preventDefault(),this.dispatchEvent(cu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bf))}function zx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Bx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Et.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Et.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(cu)}function kx(n){switch(this._trackPointer(n),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Et.NONE}}function Gx(n){this.enabled!==!1&&n.preventDefault()}function Vx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gr=new O;function Rn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;gr.copy(e),gr[i]=0,gr.normalize();const l=.5*o/(o+a),u=1-gr.angleTo(n)/c;return Math.sign(gr[t])===1?u*l:a/(o+a)+l+l*(1-u)}class uu extends Ii{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new O,l=new O,u=new O(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,_=new O,m=.5/o;for(let f=0,M=0;f<d.length;f+=3,M+=2)switch(c.fromArray(d,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[f+0]=u.x*Math.sign(c.x)+l.x*r,d[f+1]=u.y*Math.sign(c.y)+l.y*r,d[f+2]=u.z*Math.sign(c.z)+l.z*r,h[f+0]=l.x,h[f+1]=l.y,h[f+2]=l.z,Math.floor(f/g)){case 0:_.set(1,0,0),p[M+0]=Rn(_,l,"z","y",r,i),p[M+1]=1-Rn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[M+0]=1-Rn(_,l,"z","y",r,i),p[M+1]=1-Rn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[M+0]=1-Rn(_,l,"x","z",r,e),p[M+1]=Rn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),p[M+0]=1-Rn(_,l,"x","z",r,e),p[M+1]=1-Rn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),p[M+0]=1-Rn(_,l,"x","y",r,e),p[M+1]=1-Rn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[M+0]=Rn(_,l,"x","y",r,e),p[M+1]=1-Rn(_,l,"y","x",r,t);break}}static fromJSON(e){return new uu(e.width,e.height,e.depth,e.segments,e.radius)}}function Wx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Gt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Jh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][h]);const g=Jh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Jh(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Fn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<t;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Xx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:u,torus:d,rod:h,sign:p,paperBoat:g,batchStatic:_,persist:m,say:f,refresh:M,chime:E,reduced:x}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],T=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),d([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const w=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],w),d([0,0,0],.36,.015,s.copper,w,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),d([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const A=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,A);for(const[R,L,k]of[[-.17,.23,-.5],[.17,.41,.5]]){const U=l([R,L,0],[.24,.035,.085],s.mint,A);U.rotation.z=k}const D=o([0,.95,0],A);l([0,0,0],.115,s.light,D),d([0,0,0],.28,.021,s.cream,D,[0,0,0]),d([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const G=[];for(let R=0;R<4;R++){const L=R*Math.PI/2,k=o([Math.cos(L)*.3,.13+Math.sin(L)*.12,Math.sin(L)*.3],A);h([0,-.15,0],[0,.2,0],.012,s.copper,k),l([0,.23,0],.065,s.cream,k),_(k,[]),G.push(k)}c([-.46,.2,.32],[.68,.12,.47],s.dark,v);const q=o([-.46,.29,.32],v);c([0,0,0],[.5,.025,.32],s.cream,q);for(const R of[-.23,.23])h([R,.016,-.14],[0,.016,.06],.009,s.copper,q);l([0,.027,.06],[.04,.015,.04],s.rust,q),p("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(w,[]),_(D,[]),_(A,[D,...G]),_(q,[]),_(v,[w,A,q]);const z=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);z.castShadow=!1;const N=o([0,0,0],e),Y=g(N,[8.3,.14,3.5],1.05),W=o([0,.36,0],Y),Z=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],W),X=l([0,.12,0],[.085,.13,.085],s.light,W),K=c([0,.09,0],[.23,.025,.16],s.cream,W);K.rotation.z=.2;const Q=[Z,X,K];_(Y,[W]);const j=new n.Vector3(8.3,.14,3.5),he=new n.Vector3(8.45,.14,3.65),ge=new n.Vector3(9.2,-2.7,6.5);let ye=-1,V=i.dockTrips>=2?1:.02;function I(){w.visible=i.dockTrips>=1,A.visible=i.dockTrips>=2,q.visible=i.dockTrips>=3,G.forEach((R,L)=>R.visible=i.dockTrips>=5+L*3),W.visible=i.dockPending,Q.forEach((R,L)=>R.visible=L===i.dockTrips%3),Y.position.copy(i.dockPending?he:j)}I();function J(){if(!(i.boat>0))if(i.dockPending){const R=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(V=.02),m(),I(),f(R.line),E(330),M()}else i.boat=18,ye=-1,Q.forEach((R,L)=>R.visible=L===i.dockTrips%3),W.visible=!1,f("ну плыви. я тут."),M()}function ae(R,L){if(i.boat>0){i.boat=Math.max(0,i.boat-R);const k=18-i.boat,U=k<7?0:k<11?1:2;U!==ye&&(ye=U,M()),k<2?Y.position.lerpVectors(j,he,n.MathUtils.smoothstep(k,0,2)):k<7?Y.position.lerpVectors(he,ge,n.MathUtils.smoothstep(k,2,7)):k<11?Y.position.copy(ge):k<16?Y.position.lerpVectors(ge,he,n.MathUtils.smoothstep(k,11,16)):Y.position.copy(he),Y.visible=k<7||k>=11,W.visible=k>=11,Y.rotation.y=k>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),Y.visible=!0,I(),f("вернулся. с чем-то."),E(554),M())}Y.rotation.z=x?0:Math.sin(L*1.7)*.035,i.boat===0&&(Y.visible=!0,Y.position.y=(i.dockPending?he.y:j.y)+Math.sin(L*1.2)*.02,Y.rotation.y=i.dockPending?Math.PI+.2:0),w.position.y=.97+Math.sin(L*.9)*.055,w.rotation.y=L*.15,V=n.MathUtils.damp(V,1,1.1,R),A.scale.setScalar(V),D.rotation.y=x?0:L*.23,z.material.emissiveIntensity=i.dockPending?1.5+Math.sin(L*4)*1.1:1.2}function se(){if(i.boat>0){const R=18-i.boat;return{disabled:!0,action:R<7?"плывёт…":R<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const R=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:R===2?`${b[R].description} ${T[Math.floor((i.dockTrips-1)/3)%T.length]}`:b[R].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:N,gallery:v,beacon:z,launchOrCollect:J,update:ae,card:se,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:Y.position.toArray(),visible:Y.visible,cargo:W.visible,stone:w.visible,plant:A.visible,plantScale:V,letter:q.visible,buds:G.filter(R=>R.visible).length})}}async function Ef(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function qx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",u=!s.matches,d=!1,h=!1,p=!1,g=!1,_=!1,m=0,f=null,M=0,E=0,x=0,S=!1;try{const B=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");B!==null&&(u=B==="open")}catch{}const b=(B,oe,xe)=>{const Se=document.createElement(B);return oe&&(Se.className=oe),xe&&(Se.textContent=xe),Se},T=b("aside","resident-history");T.id="resident-history",T.setAttribute("aria-label","История мыслей и действий Головы");const v=b("div","history-heading"),w=b("div"),A=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),D=b("h3","","на полях"),G=b("span","history-eyes");G.setAttribute("aria-hidden","true"),D.append(G),w.append(A,D,b("p","history-subtitle","мысли, дела и прочее"));const q=b("button","history-close","−");q.type="button",q.setAttribute("aria-label","Свернуть историю"),q.title="Свернуть историю",v.append(w,q);const z=b("div","history-filters");z.setAttribute("role","group"),z.setAttribute("aria-label","Показывать в истории");const N=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[B,oe]of N){const xe=b("button","",oe);xe.type="button",xe.dataset.filter=B,xe.setAttribute("aria-pressed",String(l===B)),xe.onclick=()=>{l=B,L(!1),W.scrollTop=0;for(const Se of z.children)Se.setAttribute("aria-pressed",String(Se.dataset.filter===l))},z.append(xe)}const Y=b("button","history-new");Y.type="button",Y.hidden=!0;const W=b("div","history-scroll");W.tabIndex=0,W.setAttribute("aria-label","Записи, от новых к старым");const Z=b("ol","history-list"),X=b("p","history-empty","собираю заметки…");W.append(Z,X);const K=b("div","history-foot"),Q=b("span","history-live","подключаюсь…"),j=b("span","history-count"),he=b("button","history-retry","повторить подключение");he.type="button",he.hidden=!0,he.onclick=()=>{P(),window.dispatchEvent(new Event("beznogim:retry"))},K.append(Q,j,he),T.append(v,z,Y,W,K);const ge=b("button","history-toggle");ge.type="button",ge.setAttribute("aria-controls",T.id);const ye=b("span","","на полях"),V=b("span","history-badge");V.hidden=!0,ge.append(b("span","history-toggle-icon","◌"),ye,V),document.body.append(T),document.querySelector(".footer-actions").append(ge);function I(B,oe=!0){if(u=B,T.hidden=!u,ge.hidden=u,ge.setAttribute("aria-expanded",String(u)),oe)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(W.scrollTop<30?J():ae(),q.focus({preventScroll:!0})):oe&&ge.focus({preventScroll:!0})}T.hidden=!u,ge.hidden=u,ge.setAttribute("aria-expanded",String(u)),ge.onclick=()=>{I(!0),(g||!h)&&P()},q.onclick=()=>I(!1),s.addEventListener("change",()=>{let B=!s.matches;try{const oe=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");oe!==null&&(B=oe==="open")}catch{}I(B,!1)}),document.addEventListener("keydown",B=>{B.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&I(!1)});function J(){m=0,V.hidden=!0,Y.hidden=!0}function ae(){V.textContent=String(m),V.hidden=!m,Y.textContent=`↑ к новым · ${m}`,Y.hidden=!(u&&m)}Y.onclick=()=>{W.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),J()},W.addEventListener("scroll",()=>{W.scrollTop<30&&J()},{passive:!0});function se(B){return l==="all"||(l==="thoughts"?B.type==="muse"||B.type==="say":B.type!=="muse"&&B.type!=="say")}function R(B,oe){const xe=B.type==="muse"||B.type==="say",Se=b("li",`history-entry ${xe?"history-thought":"history-action"}${oe?" is-new":""}`);Se.dataset.eventId=String(B.id),Se.dataset.type=B.type;const H=b("div","history-meta"),ze=b("time","",r.format(B.time*1e3));ze.dateTime=new Date(B.time*1e3).toISOString(),ze.title=o.format(B.time*1e3)+" · "+ze.textContent+" мск";const Ae={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return H.append(b("span","",Ae[B.type]||"во дворе"),ze),Se.append(H,b("p","",B.text)),Se}function L(B,oe=new Set){const xe=W.scrollTop>30,Se=W.getBoundingClientRect().top,H=xe?[...Z.querySelectorAll("[data-event-id]")].find(de=>de.getBoundingClientRect().bottom>Se):null,ze=H==null?void 0:H.dataset.eventId,Ae=H==null?void 0:H.getBoundingClientRect().top,F=W.scrollTop,y=document.createDocumentFragment();let re="";const le=[...i.values()].sort((de,be)=>be.id-de.id).filter(se);for(const de of le){const be=o.format(de.time*1e3);if(be!==re){const Ce=b("li","history-day",be);y.append(Ce),re=be}y.append(R(de,B&&oe.has(de.id)&&!xe))}if(Z.replaceChildren(y),X.hidden=le.length>0,X.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!le.length&&(X.textContent="в этом фильтре пока нет записей."),j.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",he.hidden=!(g||!h&&!p),he.disabled=p,ze){const de=Z.querySelector(`[data-event-id="${ze}"]`);W.scrollTop=F+(de?de.getBoundingClientRect().top-Ae:0)}else xe||(W.scrollTop=0)}function k(B,oe=!1){if(!B||!Array.isArray(B.entries))return!1;const xe=Math.max(0,...i.keys()),Se=new Set;let H=0,ze=0;for(const Ae of B.entries)!Ae||typeof Ae!="object"||!Number.isSafeInteger(Ae.id)||Ae.id<1||!Number.isFinite(Ae.time)||Math.abs(Ae.time)>864e10||!a.has(Ae.type)||typeof Ae.text!="string"||!Ae.text.trim()||(ze++,i.has(Ae.id)||(S=!0,i.set(Ae.id,{id:Ae.id,time:Ae.time,type:Ae.type,text:Ae.text.slice(0,280)}),Se.add(Ae.id),Ae.id>xe&&se(Ae)&&H++));if(B.entries.length&&!ze)return!1;if(_=_||!!B.has_older||!!B.has_more||i.size>t,i.size>t){const Ae=[...i.keys()].sort((F,y)=>F-y);for(const F of Ae.slice(0,i.size-t))i.delete(F)}return d&&!oe&&H&&(!u||W.scrollTop>30)&&(m+=H,ae()),(Se.size||!d)&&L(d&&!oe,Se),!0}function U(){if(!(!i.size||!S)){S=!1,E=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:E,has_older:_,entries:[...i.values()]}))}catch{}}}function ee(){try{const B=localStorage.getItem(c);if(!B||B.length>1e6)return;const oe=JSON.parse(B);if(oe.version!==1||!Number.isFinite(oe.saved_at)||oe.saved_at<=0)return;k(oe,!0),E=oe.saved_at,d=i.size>0,S=!1}catch{}}async function P(){if(!p){p=!0,x=performance.now(),he.disabled=!0;try{const B=await Ef(n+"/api/history");if(!k(B,!0))throw Error("invalid-public-history");h=!0,d=!0,g=!1,U(),L(!1)}catch{g=!0,L(!1)}finally{p=!1,he.disabled=!1,$()}}}function $(){var xe;const B=!f||performance.now()-M>35e3||f.server_time-f.heartbeat>60||f.resident_status==="stopped";T.classList.toggle("history-offline",B);const oe=E?` · сохранено ${r.format(E)} мск`:" · записи на устройстве";Q.textContent=B?i.size?"связи нет":"нет связи с живым сервером":f.resident_status==="sleeping"?"голова спит · дневник открыт":f.resident_status==="paused"?"голова отдыхает":"жизнь идёт",B&&i.size&&(Q.textContent+=oe),!B&&g&&(Q.textContent+=" · архив не дошёл"),Q.title=((xe=f==null?void 0:f.action)==null?void 0:xe.label)||""}function te(B){var ze;const oe=Math.max(0,...i.keys()),xe=Array.isArray((ze=B.history)==null?void 0:ze.entries)?B.history.entries:[];f=B,M=performance.now(),k(B.history)&&i.size&&(d=!0,U()),$();const Se=xe.filter(Ae=>Ae&&Number.isSafeInteger(Ae.id)).map(Ae=>Ae.id);(oe&&Se.length&&Math.min(...Se)>oe&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&P()}window.addEventListener("beznogim:state",B=>te(B.detail)),window.__beznogimState&&te(window.__beznogimState),ee(),L(!1),$(),P(),window.addEventListener("online",()=>{(g||!h)&&P()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&P()}),setInterval(()=>{$(),(g||!h)&&P()},15e3)}function Yx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,u=0,d=0,h=!1,p=!1,g=!1,_=0,m=null,f=null,M=null,E="",x=!0;const S=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const T=document.createElement("span");T.className="thought-kicker",T.textContent="про себя";const v=document.createElement("p");b.append(T,v),document.body.append(b);const w=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),A=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";qx({api:A,enabled:w});const D=document.querySelector(".territory-nav"),G=document.createElement("div");G.className="resident-strip",G.hidden=!0;const q=document.createElement("span");q.className="resident-status",q.textContent="подключаюсь к голове";const z=document.createElement("div");z.className="resident-vitals",z.hidden=!0,z.setAttribute("aria-label","Самочувствие Головы");const Y=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(R=>{const L=document.createElement("div");return L.className="need-meter",L.dataset.need=R.key,L.style.setProperty("--need-color",R.color),L.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${R.icon}</svg><div class="need-detail"><div class="need-heading"><b>${R.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${R.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,z.append(L),{key:R.key,card:L,value:L.querySelector(".need-value"),bar:L.querySelector(".need-track")}}),W=document.createElement("button");W.type="button",W.textContent="к голове",W.onclick=()=>{p=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),ge()};const Z=document.createElement("button");Z.type="button",Z.textContent="поиграть самому",Z.onclick=()=>{p=!p,g=!1,ge()};const X=document.createElement("button");X.type="button",X.textContent="мысли",X.setAttribute("aria-pressed","true"),X.onclick=()=>{x=!x,X.setAttribute("aria-pressed",String(x))},G.append(q,z,W,Z,X),D.append(G);function K(){return Date.now()/1e3+d}function Q(){return l&&K()-l.heartbeat<60&&l.resident_status!=="stopped"}function j(){return h&&l&&!p}function he(){var k,U;const R=(U=(k=l==null?void 0:l.mechanics)==null?void 0:k.vitals)==null?void 0:U.public;if(!R){z.hidden=!0;return}const L=ee=>Math.max(0,Math.min(100,Math.round(Number(ee)||0)));z.hidden=!1;for(const ee of Y){const P=L(R[ee.key]);ee.value.textContent=String(P),ee.bar.setAttribute("aria-valuenow",String(P)),ee.card.style.setProperty("--need-fill",String(P/100)),ee.card.dataset.low=String(P<=20)}}function ge(){const R=p?"ты в песочнице":h?Q()?l!=null&&l.action&&l.action.ends>K()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";R!==E&&(E=R,q.textContent=R),Z.textContent=p?"вернуться к голове":"поиграть самому",W.setAttribute("aria-pressed",String(g))}function ye(R){var k,U;if(!R||R.version!==1||!Array.isArray(R.position)||R.position.length!==3||!R.position.every(Number.isFinite)||!R.objects||!Number.isFinite(R.server_time)||!Number.isFinite(R.heartbeat)||l&&(R.server_time<l.server_time||R.server_time===l.server_time&&Number.isFinite(R.revision)&&Number.isFinite(l.revision)&&R.revision<l.revision))return;if(d=R.server_time-Date.now()/1e3,l=R,u=performance.now(),h=!0,G.hidden=!1,m&&((k=R.release)!=null&&k.commit)&&m!==R.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((U=R.release)==null?void 0:U.commit)||m;const L=R.speech;L&&L.time>_&&L.until>K()&&(_=L.time,p||a(L.text)),window.__beznogimState=R,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:R})),he(),ge()}function V(){const R=l.action;if((R==null?void 0:R.kind)==="move"){const L=Math.max(0,Math.min(1,(K()-R.started)/Math.max(.001,R.ends-R.started)));return R.from.map((k,U)=>k+(R.to[U]-k)*L)}return l.position}function I(){if(!j())return;const R=l.objects;R.engine&&(t.running=!!R.engine.running),R.workshop&&(t.roof=R.workshop.roof_open?1:0),R.radio&&(t.radio=R.radio.station,f!==t.radio&&(f=t.radio,o())),R.garden&&(t.harvest=R.garden.harvest,M!==null&&t.harvest>M&&c(),M=t.harvest);const L=l.action;t.brew=(L==null?void 0:L.effect)==="brew"?Math.max(0,L.ends-K()):0,t.loop=0,ge()}function J(){if(!j()){b.hidden=!0;return}const R=V();n.position.set(R[0],R[1]+Math.sin(K()*1.4)*.1,R[2]),e.set(...R),g&&i.target.lerp(n.position,.08);const L=l.musing;if(x&&Q()&&(L!=null&&L.text)&&L.until>K()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==L.text&&(v.textContent=L.text),S.copy(n.position),S.y+=1.8,S.project(s),S.z>=-1&&S.z<=1&&Math.abs(S.x)<1&&Math.abs(S.y)<1){b.hidden=!1;const k=b.offsetWidth,U=b.offsetHeight,ee=Math.max(k/2+12,Math.min(innerWidth-k/2-12,(S.x+1)*innerWidth/2));let P=(1-S.y)*innerHeight/2-18;const $=D.getBoundingClientRect(),te=ee-k/2<$.right&&ee+k/2>$.left?$.bottom+12:18,B=P-U<te;B&&(P=Math.max(te+U,(1-S.y)*innerHeight/2+70+U)),P=Math.min(innerHeight-70,Math.max(U+18,P)),b.classList.toggle("below-head",B),b.style.transform=`translate3d(${Math.round(ee)}px,${Math.round(P)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function ae(){j()&&(p=!0,g=!1,ge())}function se(){if(!w)return;G.hidden=!1;let R=!1;async function L(){if(!R){R=!0;try{const U=await Ef(A+"/api/state");ye(U),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-u>35e3)&&(h=!1),ge()}finally{R=!1}}}try{const U=new EventSource(A+"/api/events");U.addEventListener("state",ee=>{try{ye(JSON.parse(ee.data))}catch{}}),U.onerror=()=>{h=!1,ge()}}catch{h=!1,ge()}L();function k(){(!h||!l||performance.now()-u>3e4)&&L()}window.addEventListener("online",k),window.addEventListener("beznogim:retry",L),document.addEventListener("visibilitychange",()=>{document.hidden||k()}),setInterval(()=>{l&&performance.now()-u>35e3&&(h=!1),ge(),k()},15e3)}return i.addEventListener("start",()=>{g=!1,ge()}),se(),{sync:I,place:J,localPlay:ae,unfollow:()=>{g=!1},watching:j,inspect:()=>{var R;return{connected:h,sandbox:p,follow:g,alive:!!Q(),revision:l==null?void 0:l.revision,release:(R=l==null?void 0:l.release)==null?void 0:R.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!b.hidden,position:l?V():null}}}}const $x=120,Zx=24,Jx=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Xn={size:$x,sectorSize:Zx,sectors:Jx};function Kx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new Hi;c.name="unsettled-territory",n.add(c);const l=Xn.size/2,u=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],d=new $r;u.forEach(([A,D],G)=>G?d.lineTo(A,-D):d.moveTo(A,-D)),d.closePath();const h=new tr(d,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const p=new _n(h,new zs({color:"#233e35",roughness:1}));p.receiveShadow=!0,c.add(p);let g=8409;const _=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new cc(new Zr(1,0),new zs({color:"#8a9980",roughness:1}),150),f=new cc(new _s(1,1,4),new zs({color:"#9aa880",roughness:1}),850),M=new kt;for(const[A,D,G]of[[m,150,!0],[f,850,!1]]){for(let q=0;q<D;q++){let z,N;do z=(_()-.5)*(Xn.size-10),N=(_()-.5)*(Xn.size-10);while(Math.abs(z)<11&&Math.abs(N)<9);const Y=G?.15+_()*.48:.12+_()*.42;M.position.set(z,-1.7+Y*.25,N),M.rotation.set(0,_()*6.28,G?_()*.25:0),M.scale.set(G?Y*1.3:.07,Y,G?Y:.07),M.updateMatrix(),A.setMatrixAt(q,M.matrix)}A.instanceMatrix.needsUpdate=!0,c.add(A)}const E=new zs({color:"#c1b692",roughness:1});for(let A=0;A<16;A++){const D=new _n(new Ii(1.15,.12,.65),E);D.position.set(-.6,-.06-A*.105,5.8+A*.7),D.receiveShadow=!0,c.add(D)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const S=document.createElement("dialog");S.id="territory-dialog",S.setAttribute("aria-labelledby","territory-title"),S.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(S);const b=S.querySelector("#territory-grid");for(const A of Xn.sectors){const D=document.createElement("button");D.type="button",D.dataset.sector=A.id,D.className=A.status==="settled"?"settled":"",D.textContent=A.status==="settled"?`● ${A.id==="0:0"?"двор":A.name}`:`· ${A.id}`,D.setAttribute("aria-label",`${A.name}, ${A.id}`),D.onclick=()=>{S.close(),s(A.x,A.z,A.status==="settled")},b.append(D)}document.querySelector("#territory-map").onclick=()=>S.showModal(),document.querySelector("#world-overview").onclick=r,S.querySelector("#territory-close").onclick=()=>S.close(),S.querySelector("#territory-home").onclick=()=>{S.close(),o()};const T=x.querySelector("#territory-location");let v="";function w(){const A=a()||t.target,D=Math.round(A.x/Xn.sectorSize),G=Math.round(A.z/Xn.sectorSize),q=`${D}:${G}`;if(q!==v){v=q;const z=Xn.sectors.find(N=>N.id===q);T.textContent=`${(z==null?void 0:z.status)==="settled"?z.name:"свободная земля"} · ${q}`;for(const N of b.children)N.classList.toggle("current",N.dataset.sector===q)}}return{half:l,update:w,inspect:()=>({size:Xn.size,sectorSize:Xn.sectorSize,sectors:Xn.sectors.length,settled:Xn.sectors.filter(A=>A.status==="settled").length,visible:n.visible,sector:v})}}function Qx({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,paperBoat:p,batchStatic:g,changed:_,chime:m}){let f={};try{f=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(f.wins)||0))),trace:f.trace===!0},E=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const S=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,S),a([0,.46,0],[1.22,.08,1.3],s.dark,S);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const B of[-.62,.62])for(const oe of[-.64,.64])u([B,.46,oe],[B,1.45,oe],.024,s.copper,S);for(const B of[-.62,.62])a([B,.96,0],[.018,.95,1.28],b,S);a([0,.96,-.64],[1.24,.95,.018],b,S);const T=o([0,1.45,-.64],S);for(const B of[-.62,.62])u([B,0,0],[B,.36,.64],.026,s.copper,T);for(const B of[-.62,.62])u([B,.36,.64],[B,0,1.28],.026,s.copper,T);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,T);const v=a([0,.18,.32],[1.26,.025,.72],b,T);v.rotation.x=-.51;const w=a([0,.18,.96],[1.26,.025,.72],b,T);w.rotation.x=.51;const A=o([0,.52,0],S);l([0,.2,0],.026,.4,s.leaf,A);for(const B of[-1,1]){const oe=c([B*.15,.27,0],[.22,.055,.09],s.leaf,A);oe.rotation.z=B*.35}const D=c([0,.25,.12],[.23,.16,.27],s.copper,A),G=c([.42,.58,.46],[.15,.1,.18],s.copper,S);G.visible=M.wins>0;const q=o([-.76,.7,.69],S);a([0,.28,0],[.13,.66,.06],s.cream,q);const z=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),q);c([0,-.06,.04],.065,s.rust,q),h("ПАРНИК",[0,.3,.716],.93,.22,S,{size:49});const N=d([0,2.05,0],.46,.016,s.mint,S);N.visible=M.trace;const Y=[];for(let B=0;B<6;B++)Y.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),S));g(S,[T,A,q,N,G,...Y]),g(T,[]),g(A,[D]),g(q,[z]);let W=0,Z=0;function X(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),W=0,_()}function K(B){if(M.mode!=="playing")return;const oe={heat:2,wait:0,vent:-2};B in oe&&(M.temp+=E[M.turn]+oe[B],M.turn++,M.temp>6?(M.mode="hot",W=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),G.visible=!0,x(),m(660)),_())}function Q(){let B="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(B=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${E[M.turn]>0?"+":""}${E[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(B=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(B=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(B="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:B,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const j=o([0,0,0],t);j.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,j),a([0,-.42,0],[6.8,.08,5.6],s.dark,j);for(const B of[-3.2,3.2])for(const oe of[-2.6,2.6])u([B,-.4,oe],[B,4,oe],.055,s.copper,j);for(const B of[-3.2,3.2])u([B,4,-2.6],[B,5.7,0],.055,s.copper,j),u([B,5.7,0],[B,4,2.6],.055,s.copper,j);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,j),a([-3.2,1.8,0],[.025,4.4,5.2],b,j),a([0,1.8,-2.6],[6.4,4.4,.025],b,j),h("СОН / 01",[0,-.12,2.93],2.2,.38,j,{size:52});const he=o([0,1.6,0],j);c([0,0,0],1.16,r("#5f9c85"),he);for(let B=0;B<10;B++){let oe=B*2.4;const xe=c([Math.sin(oe)*.95,Math.cos(B*1.2)*.6,Math.cos(oe)*.95],[.35,.2,.3],s.leaf,he);xe.rotation.y=oe}d([0,0,0],1.32,.028,s.copper,he,[.4,0,.2]);const ge=o([0,1.6,0],j),ye=[];for(let B=0;B<28;B++){const oe=a([0,0,0],[.53,.11,.32],B%4?s.cream:s.concrete,ge);ye.push(oe)}const V=p(j,[1.7,-.05,1],1.65),I=c([0,.65,0],.13,s.cream,V),J=o([0,.65,0],V);J.visible=!1;for(let B=0;B<8;B++){let oe=B/8*Math.PI*2;u([Math.sin(oe)*.27,Math.cos(oe)*.27,0],[Math.sin(oe)*.5,Math.cos(oe)*.5,0],.026,s.light,J)}const ae=i.clone(!0);j.add(ae),ae.scale.setScalar(.72),ae.position.set(-2,1,1.3),ae.rotation.z=-.25;const se=o([-2,-.05,1.3],j);l([0,0,0],.55,.3,s.cream,se),d([.58,0,0],.25,.04,s.copper,se,[0,0,0]);const R=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,j);R.rotation.y=.2;let L=0,k=0,U=!1;g(j,[he,ge,V,ae]),g(he,[]);function ee(){U=!0,L=0,k=0,j.visible=!0,e.visible=!1,_()}function P(){U=!1,j.visible=!1,e.visible=!0,_()}function $(){U&&(L===3?(L=0,k=0):(L++,m(220+L*110),L===3&&(M.trace=!0,N.visible=!0,x())),_())}function te(B,oe){Z=n.MathUtils.damp(Z,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,B),T.rotation.x=Z,A.scale.y=n.MathUtils.damp(A.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,B),D.visible=M.mode==="won",z.scale.y=.3*Math.max(.05,M.temp/8),z.position.y=-.015+M.temp/8*.15,N.rotation.z=Math.sin(oe*.3)*.15,W=Math.max(0,W-B),Y.forEach((xe,Se)=>{xe.visible=W>0;const H=(3-W+Se*.18)%1.5;xe.position.set(Math.sin(Se*2)*H*.35,1.5+H,Math.cos(Se*2)*H*.35),xe.scale.setScalar(.1*(.4+H))}),U&&(k=n.MathUtils.damp(k,L,2,B),he.rotation.y=oe*.08,ye.forEach((xe,Se)=>{const H=Se/28*Math.PI*2+oe*.055*Math.min(1,k),ze=Math.min(1,k);xe.position.set(Math.sin(H)*(1.8+ze*.35),Math.cos(H)*(1.8-ze*1.5),Math.cos(H)*ze*1.5),xe.rotation.set(0,-H*ze,Math.PI/2-H*(1-ze))}),ge.rotation.y=k*.32,V.position.y=-.05+k*1.12,V.position.x=1.7-k*.32,V.rotation.y=.2+k*.35,I.scale.setScalar(.13*(1+Math.max(0,k-2)*2)),J.visible=k>2.2,J.rotation.z=oe*.22,ae.position.y=1+Math.sin(oe*.8)*.06)}return{house:S,start:X,step:K,card:Q,update:te,enter:ee,exit:P,breathe:$,inspect:()=>({...M,weather:[...E],dream:U,dreamStep:L,phase:k,lidAngle:Z,rootVisible:e.visible,dreamVisible:j.visible,boatY:V.position.y,rays:J.visible})}}function jx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:p,batchStatic:g,chime:_}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const f=r("#c39860"),M=r("#e0c58b"),E=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),S=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),f,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let V=0;V<13;V++){const I=.15+V/12*Math.PI*1.42,J=Math.sin(I)*3.65,ae=Math.cos(I)*3.65,se=c([J,.48,ae],[.75,1.08,.19],M,m);se.rotation.y=I,V%3===0&&h([J,.48,ae],.15,.048,E,m,[Math.PI/2,0,0]).rotation.set(0,I,0)}p("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const b=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],E,b);for(let V of[-1.15,1.15])for(let I of[-.63,.63])c([V,-.23,I],[.12,.5,.12],s.copper,b);for(let V of[-.79,.79])c([0,.36,V],[2.72,.65,.14],S,b);for(let V of[-1.32,1.32])c([V,.38,0],[.14,.68,1.55],S,b);const T=c([0,.18,0],[2.49,.045,1.49],x,b),v=l([-.84,.38,0],[.34,.14,.54],s.cream,b),w=i.clone(!0);m.add(w),w.scale.setScalar(.54),w.position.set(.3,.83,.45),w.rotation.z=-.35;const A=a([0,0,0],w);for(const V of[-.23,.23])l([V,.2,.611],[.15,.11,.025],s.black,A),c([V,.2,.64],[.2,.018,.012],s.copper,A);const D=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,D),u([0,.29,0],.44,.022,E,D),h([.55,0,0],.24,.055,s.copper,D,[0,0,0]),p("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const G=[];for(let V=0;V<7;V++){const I=a([-1.92+V*.33,.2+V*.29,1.45-V*.29],m);c([0,0,0],[.7,.13,.42],s.cream,I);for(let J of[-.2,.2])c([0,.07,J],[.7,.12,.05],s.copper,I);G.push(I)}const q=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],x,m)),z=Array.from({length:3},(V,I)=>{const J=h([.65,.2,0],.23+I*.16,.012,s.mint,b);return J.scale.z=.6,J}),N=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,N),N.rotation.z=.55;const Y=[];for(let V=0;V<9;V++){const I=V*2.4;Y.push(l([Math.sin(I)*3,3.2+V%3*.28,Math.cos(I)*2],.025,s.cream,m))}let W=!1,Z=0,X=0,K=!1;try{K=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const Q=a([26.6,-.86,.65],t);Q.visible=K,u([0,0,0],.15,.2,s.cream,Q),u([0,.104,0],.125,.014,x,Q),h([.16,0,0],.07,.02,s.copper,Q,[0,0,0]),g(m,[b,w,D,...G,...q,...Y,N]),g(b,[T,v,...z]),g(D,[]),g(Q,[]),G.forEach(V=>g(V,[]));function j(){W=!0,Z=0,X=0,m.visible=!0,t.visible=!1,ye(0,0)}function he(){W=!1,m.visible=!1,t.visible=!0}function ge(){if(W&&(Z=Z===3?0:Z+1,_(165+Z*55),Z===3)){K=!0,Q.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function ye(V,I){W&&(X=n.MathUtils.damp(X,Z,2.4,V),G.forEach((J,ae)=>{const se=Math.min(1,X/2),R=-1.92+ae*.33,L=.2+ae*.29,k=1.45-ae*.29;J.position.set(n.MathUtils.lerp(R,-1.72+ae*.39,se),n.MathUtils.lerp(L,1.95-ae*.22,se),n.MathUtils.lerp(k,-.32+ae*.055,se)),J.rotation.z=-se*.21}),T.position.y=.18+X*.09,v.position.y=.38+X*.09,w.position.y=.83+X*.09+Math.sin(I*.6)*.025,w.rotation.z=-.35-X*.13,D.rotation.z=-Math.min(1,X)*.45,q.forEach((J,ae)=>{const se=(I*.16+ae/16)%1;J.visible=X>.05,J.position.set(-1.7+se*3,2.14-se*1.62,-.32+se*.25),J.scale.set(.07,.1+Math.sin(se*Math.PI)*.04,.07)}),z.forEach((J,ae)=>{J.visible=X>.4,J.position.y=T.position.y+.034,J.scale.setScalar(1+Math.sin(I*.5+ae)*.08),J.scale.z*=.6}),N.rotation.z=.55+X*.21,A.visible=X>1.8)}return{enter:j,exit:he,pour:ge,update:ye,inspect:()=>({active:W,step:Z,phase:X,trace:K,roomVisible:m.visible,rootVisible:t.visible,waterY:T.position.y,sleeperY:w.position.y,channel:G.map(V=>V.position.toArray()),droplets:q.filter(V=>V.visible).length})}}function e1({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const p of[-.23,.23])t([p,.2,.611],[.15,.11,.025],r.black,c),i([p,.2,.64],[.2,.018,.012],r.copper,c);let l=null,u=0;function d(p){l=p,u=Number(p.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:p})=>d(p)),window.__beznogimState&&d(window.__beznogimState);function h(p){const g=l==null?void 0:l.action;a.visible=!!p&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),c.visible=a.visible}return{update:h,inspect:()=>{var p;return{visible:a.visible,ends:((p=l==null?void 0:l.action)==null?void 0:p.kind)==="sleep"?l.action.ends:null}}}}const yc=()=>({phase:"flat",progress:0,trace:!1}),wf=n=>["folding","falling","turning"].includes(n.phase);function t1(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?yc():n}function n1(n,e){if(!wf(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function Kh(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function i1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,sign:d,batchStatic:h,chime:p,changed:g}){const _=new n.Group;e.add(_),_.visible=!1;const m=r("#e9dbb7"),f=r("#405e62"),M=r("#c87e68"),E=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],f,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],m,x);const S=[];for(let V=0;V<4;V++){const I=o([0,0,0],x);I.rotation.y=V*Math.PI/2;const J=o([0,0,1.25],I);a([0,0,.8],[2.5,.05,1.6],m,J),a([0,.032,.76],[.022,.015,1.3],M,J),a([0,.035,.1],[2.3,.015,.018],M,J),S.push(J)}const b=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],f,b),a([0,.12,0],[2.15,.08,2.15],s.concrete,b);const T=o([-.45,.18,-.3],b);a([0,.33,0],[.8,.66,.7],m,T),a([0,.4,.36],[.25,.28,.025],E,T),a([0,.73,0],[1.05,.12,.9],M,T);const v=o([.65,.72,-.5],b);u([-.25,-.5,0],[-.25,.4,0],.03,f,v),u([.25,-.5,0],[.25,.4,0],.03,f,v),u([-.25,.4,0],[.25,.4,0],.03,f,v);const w=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,M,w),c([0,-.67,0],.14,s.copper,w);for(let V=0;V<4;V++)a([-.7+V*.42,.23,.66],[.28,.13,.36],m,b);const A=[];for(const V of[-1.05,1.05])for(const I of[-1.05,1.05])A.push(u([V,4.45,I],[V,5.25,I],.012,s.copper,_));for(const V of[-2.8,2.8])u([V,0,-1.6],[V,5.3,-1.6],.06,f,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,f,_);const D=(V,I=_)=>{const J=o(V,I);a([0,.4,0],[.55,.1,.55],M,J),a([0,.73,-.24],[.55,.65,.08],M,J);for(const ae of[-.2,.2])for(const se of[-.2,.2])u([ae,0,se],[ae,.4,se],.025,f,J);return J},G=[D([-2.6,0,1.1]),D([-2.6,0,2.1]),D([-1.65,0,2.1]),D([-.7,0,2.1])],q=o([0,2,0],_);c([0,0,0],[.15,.27,.15],E,q),u([0,.18,0],[.19,.35,0],.018,s.copper,q);const z=i.clone(!0);z.scale.setScalar(.35),z.position.set(2.8,.78,1.65),_.add(z),d("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const N=D([-30.6,-1.3,-20.8],t);N.scale.setScalar(.35),N.visible=!1,h(_,[x,b,...A,...G,q,z]),h(x,S.map(V=>V.parent)),S.forEach(V=>h(V,[])),h(b,[T,v]),h(T,[]),h(v,[w]),h(w,[]),G.forEach(V=>h(V,[])),h(q,[]),h(N,[]);const Y=new n.Vector3,W=new n.Vector3(1,0,-1).normalize();let Z=yc(),X=!1,K=!1;try{K=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}N.visible=K;function Q(){Z=yc(),X=!0,_.visible=!0,t.visible=!1,ge(0,0)}function j(){X=!1,_.visible=!1,t.visible=!0}function he(){const V=t1(Z);V!==Z&&(Z=V,p(Z.phase==="falling"?165:Z.phase==="turning"?440:330),g())}function ge(V,I){if(!X)return;const J=Z.phase;Z=n1(Z,V);const{fold:ae,fall:se,turn:R}=Kh(Z);if(S.forEach(L=>L.rotation.x=-ae*.92*(1-R)),x.quaternion.setFromAxisAngle(W,R*2.2),x.position.y=.12+R*3.9,b.position.set(0,4.4-3.65*se,0),b.quaternion.identity(),R>0&&(Y.set(0,.63,0).applyAxisAngle(W,R*2.2),b.position.copy(Y).add(x.position),b.quaternion.copy(x.quaternion)),A.forEach(L=>L.visible=se===0),w.rotation.z=Math.sin(I*2.1)*.5,q.position.set(-2.6*R,2-1.34*R,1.1*R),q.rotation.z=Math.sin(I)*.1,G.forEach((L,k)=>{k>0&&(L.position.y=R*.15*Math.sin(I+k),L.rotation.z=R*Math.sin(I+k)*.035)}),Z.trace&&!K){K=!0,N.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}Z.phase!==J&&g()}return{enter:Q,exit:j,act:he,update:ge,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[Z.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[Z.phase],busy:()=>wf(Z),inspect:()=>({...Z,...Kh(Z),active:X,trace:K,rootVisible:t.visible,roomVisible:_.visible,leafAngles:S.map(V=>V.rotation.x),yard:b.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(b.quaternion.w))),yardQuaternion:b.quaternion.toArray(),pocket:x.position.toArray(),seed:q.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const Mc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function s1(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function r1(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?Mc():n}function o1(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function a1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,batchStatic:p,chime:g,changed:_}){const m=o([0,0,0],e);m.name="dream-06-cloud-heating",m.visible=!1;const f=r("#203f49"),M=r("#dce6d7"),E=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),S=r("#598e9d"),b=r("#ede1c3");l([0,-.3,0],4,.4,f,m),d([0,-.06,0],3.85,.045,E,m);for(let k=0;k<8;k++)u([-3+k*.85,-.06,-2.5],[-3+k*.85,-.06,2.5],.012,S,m);const T=o([-2.35,0,.2],m);a([0,.2,0],[1.7,.35,1.3],s.concrete,T);for(let k=0;k<6;k++){const U=-.65+k*.26;a([U,1.2,0],[.16,1.8,.66],E,T),d([U,2.12,0],.27,.065,E,T,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,E,T),u([-.8,1.95,.2],[.8,1.95,.2],.11,E,T);const v=c([-2.35,1.15,.87],.42,S,m);d([-2.35,1.15,.87],.48,.024,b,m,[.5,.3,0]);const w=["ЗЕМЛЯ","ОБЛАКО"].map((k,U)=>{const ee=o([-3+U*1.3,.4,2.1],m);a([0,0,0],[.87,.14,1.13],f,ee);for(let P=0;P<4;P++)a([-.27+P*.18,.09,-.28],[.08,.03,.25],x,ee);return h(k,[0,.12,.32],.78,.22,ee,{size:52}).rotation.x=-Math.PI/2,ee}),A=d([-2.8,.57,2.1],.5,.035,x,m);A.rotation.x=Math.PI/2;const D=o([0,0,0],m);u([-1.5,.45,.2],[-.7,.45,.2],.09,E,D),u([-.7,.45,.2],[-.7,3.7,.2],.09,E,D),u([-.7,3.7,.2],[1.2,3.7,.2],.09,E,D);const G=Array.from({length:7},(k,U)=>c([.1+U*.45,3.8+U%2*.22,-.8],[.65,.45,.63],M,m)),q=o([1.25,3.1,-.8],m);a([0,.2,0],[2.6,.1,1.7],b,q);for(const k of[-1.15,1.15])for(const U of[-.7,.7])u([k,.2,U],[k,1.28,U],.045,E,q);const z=o([0,1.26,0],q);a([-.61,.15,0],[1.45,.12,1.95],M,z).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,z).rotation.z=-.35;const N=[a([-.68,.8,.72],[.48,.57,.06],x,q),a([.68,.8,.72],[.48,.57,.06],x,q)],Y=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],W=[],Z=[];Y.forEach(([k,U,ee],P)=>{const $=o([k,U,ee],m);W.push($),a([0,.05,0],[1.2,.13,1.1],s.concrete,$);for(const B of[-.5,.5])u([B,.1,-.38],[B,1.1,-.38],.045,E,$);u([-.5,1.1,-.38],[0,1.5,-.38],.045,E,$),u([0,1.5,-.38],[.5,1.1,-.38],.045,E,$);const te=o([1.25,3.9,-.05],m);Z.push(te),a([0,0,0],[.65,.72,.12],b,te),a([0,0,.071],[.48,.55,.035],x,te),u([0,-.28,.1],[0,.28,.1],.018,E,te),u([-.23,0,.1],[.23,0,.1],.018,E,te)});const X=Array.from({length:10},()=>c([0,0,0],.065,x,m)),K=i.clone(!0);K.scale.setScalar(.4),K.position.set(-2,.9,-1.7),m.add(K),h("СОН / 06",[0,-.04,3.3],1.5,.29,m,{size:52}).rotation.x=-Math.PI/2;const Q=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],E,Q),a([0,0,.04],[.13,.22,.02],x,Q),Q.visible=!1,p(m,[T,v,...w,A,D,...G,q,...W,...Z,...X,K]),p(T,[]),p(D,[]),p(q,[z,...N]),p(z,[]),W.forEach(k=>p(k,[])),Z.forEach(k=>p(k,[])),w.forEach(k=>p(k,[]));let j=Mc(),he=!1,ge=0,ye=0,V=!1;try{V=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}Q.visible=V;function I(){j=Mc(),ge=0,ye=0,he=!0,m.visible=!0,t.visible=!1,R(0,0)}function J(){he=!1,m.visible=!1,t.visible=!0}function ae(k){j=s1(j,k),g(k==="sky"?330:165),_()}function se(){j=r1(j),g(j.phase==="raining"?440:220),_()}function R(k,U){if(!he)return;const ee=j.phase;j=o1(j,k);const P=j.phase==="heating",$=j.target==="sky",te=$?P?j.progress:["cloud","raining","settled"].includes(j.phase)?1:0:0;if(ge=te,ye=j.phase==="raining"?j.progress:j.phase==="settled"?1:0,q.visible=te>.02,q.scale.setScalar(Math.max(.001,te)),q.position.y=3.1+Math.sin(U*.9)*.05,G.forEach((B,oe)=>{B.position.y=3.8+oe%2*.22+te*.5-ye*.25,B.scale.set(.65+te*.12,.45*(1-te*.6),.63)}),v.scale.setScalar(.42*(P&&!$?1+Math.sin(j.progress*Math.PI)*.75:1)),v.rotation.y=U*.2,Z.forEach((B,oe)=>{const xe=Math.max(0,Math.min(1,ye*1.6-oe*.3)),Se=xe*xe*(3-2*xe),H=Y[oe];B.position.set(1.25+(H[0]-1.25)*Se,3.9+(H[1]+.8-3.9)*Se,-.05+(H[2]+.06+.05)*Se),B.rotation.z=(1-Se)*Math.sin(U+oe)*.1,B.visible=["cloud","raining","settled"].includes(j.phase)}),N.forEach(B=>B.visible=j.phase==="cloud"||P),A.position.x=$?-1.7:-3,X.forEach((B,oe)=>{B.visible=P;const xe=(U*.7+oe/10)%1;$?xe<.72?B.position.set(-.7,.45+xe/.72*3.25,.2):B.position.set(-.7+(xe-.72)/.28*1.9,3.7,.2):B.position.set(-2.35+Math.sin(xe*Math.PI*2)*.6,.5+xe*1.8,.87)}),j.trace&&!V){V=!0,Q.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}j.phase!==ee&&_()}return{enter:I,exit:J,choose:ae,act:se,update:R,text:()=>({ready:j.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:j.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[j.phase],button:()=>j.phase==="raining"?"окна падают…":j.phase==="heating"?"тепло идёт…":j.phase==="settled"?"увидеть сон снова":j.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...j,active:he,trace:V,warmth:ge,spent:ye,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:m.visible,houseVisible:q.visible,windows:Z.map(k=>k.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...Y.map(k=>[k[0],.8,k[2]])]})}}function Sc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function l1(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function c1(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Sc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function u1(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function h1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:p,batchStatic:g,chime:_,changed:m}){const f=a([0,0,0],e);f.name="dream-05-self-measuring-instrument",f.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),E=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),S=r("#1c4147"),b=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,S,f),u([0,-.16,0],3.45,.08,b,f),h([0,-.1,0],3.65,.07,s.copper,f);for(let B=0;B<5;B++)h([0,-.1+B*.006,0],.7+B*.52,.009,E,f);const T=a([0,0,0],f);c([0,.12,-1.6],[3,.34,1.3],s.concrete,T),d([0,.3,-1.65],[0,3.75,-1.65],.12,M,T);const v=a([0,3.7,-1.4],f),w=u([0,0,-.12],1.05,.2,S,v);w.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const A=a([-.85,0,.02],v),D=a([.85,0,.02],v);c([.425,0,0],[.85,1.72,.1],x,A),c([-.425,0,0],[.85,1.72,.1],x,D);for(let B=0;B<12;B++){const oe=B*Math.PI/6;d([Math.sin(oe)*.78,Math.cos(oe)*.78,.09],[Math.sin(oe)*.91,Math.cos(oe)*.91,.09],.016,s.copper,v)}const G=a([0,0,.14],v);d([0,-.15,0],[0,.69,0],.025,S,G),l([0,0,0],.065,s.copper,G);const q=[a([-2.35,1.65,0],f),a([2.35,1.65,0],f)];for(const[B,oe]of q.entries())c([0,0,0],[.24,1.65,.38],M,oe),c([B===0?.38:-.38,-.76,0],[.95,.18,.38],E,oe),l([0,.84,0],.19,s.copper,oe);const z=[],N=[],Y=[];for(let B=0;B<12;B++){const oe=-2.45+B*.445;N.push(new n.Vector3(oe,2.52,0));const xe=B/11,Se=xe*Math.PI*1.35;Y.push(new n.Vector3(2.35*Math.cos(Se)*(1-xe*.85),.24+xe*3,2.05-xe*3.2));const H=a(N[B].toArray(),f);z.push(H),c([0,0,0],[.42,.16,.57],M,H),c([0,.09,.15],[.03,.012,.2],s.copper,H)}const W=l([0,.7,0],[.45,.64,.45],E,f),Z=i.clone(!0);f.add(Z),Z.scale.setScalar(.43);const X=new n.Vector3(2.8,.65,2.15);Z.position.copy(X);function K(B,oe){const xe=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Ae],F)=>F?xe.lineTo(ze,Ae):xe.moveTo(ze,Ae)),xe.closePath();const Se=new n.ExtrudeGeometry(xe,{depth:.07,bevelEnabled:!1}),H=a([0,0,0],B);return o(Se,x,null,null,H),H.scale.setScalar(oe),H}const Q=K(v,.88);Q.position.set(0,.1,.2),Q.visible=!1;const j=K(Q,.22);j.position.set(-.03,-.2,.12);const he=c([-.03,-.2,.085],[.34,.44,.01],S,Q),ge=K(t,.17);ge.position.set(2.8,1.14,-2.75),ge.rotation.y=Math.PI/4,p("СОН / 05",[0,-.055,2.94],1.65,.3,f,{size:48}).rotation.x=-Math.PI/2,p("СЕБЯ?",[0,.36,-.88],1.05,.26,f,{size:52});const ye=p("?",[-1.6,.65,1.5],.48,.65,f,{size:84,bg:"#1c4147"}),V=h([0,.12,0],.68,.035,s.light,f);g(f,[T,v,...z,...q,W,Z,ye,V]),g(T,[]),g(v,[A,D,G,Q]),g(A,[]),g(D,[]),g(G,[]),g(Q,[j,he]),g(j,[]),z.forEach(B=>g(B,[])),q.forEach(B=>g(B,[]));let I=Sc(),J=!1,ae=0,se=0,R=!1;try{R=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}ge.visible=R;function L(){I=Sc(),ae=0,se=0,J=!0,f.visible=!0,t.visible=!1,P(0,0)}function k(){J=!1,f.visible=!1,t.visible=!0}function U(B){I=l1(I,B),_(B==="self"?330:165),m()}function ee(){I=c1(I),_(I.phase==="climbing"?440:220),m()}function P(B,oe){if(!J)return;const xe=I.phase;I=u1(I,B);const Se=I.phase==="unfolding"?I.progress:["stairs","climbing","inside"].includes(I.phase)?1:0;ae=Se*Se*(3-2*Se),se=n.MathUtils.damp(se,I.phase==="inside"?1:0,3,B),z.forEach((ze,Ae)=>{ze.position.lerpVectors(N[Ae],Y[Ae],ae),ze.rotation.y=ae*(-Ae*.07)});const H=I.phase==="measuring"?Math.sin(I.progress*Math.PI):0;if(q.forEach((ze,Ae)=>{const F=Ae===0?-1:1;ze.position.set(F*(2.35-H*1.55),1.65+ae*.4,-ae*.85),ze.rotation.z=F*ae*.65}),G.rotation.z=I.phase==="measuring"?Math.sin(I.progress*35)*.8:I.phase==="refused"?Math.sin(oe*6)*.25:-ae*Math.PI*1.75,W.position.y=.7+(I.phase==="measuring"?Math.sin(I.progress*Math.PI)*1.5:Math.sin(oe*1.3)*.05),W.scale.set(.45*(1-H*.16),.64*(1+H*.3),.45*(1-H*.16)),ye.visible=I.phase==="refused",ye.position.y=.65+Math.sin(oe*2)*.1,A.rotation.y=se*1.7,D.rotation.y=-se*1.7,G.visible=se<.2,Q.visible=I.phase==="inside",Q.rotation.z=Math.sin(oe*.7)*.04,j.rotation.z=-oe*.12,Z.position.copy(X),Z.scale.setScalar(.43),Z.visible=I.phase!=="inside",["climbing","inside"].includes(I.phase)){const ze=I.phase==="inside"?1:I.progress,Ae=[X,...Y.map(re=>re.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],F=ze*(Ae.length-1),y=Math.min(Ae.length-2,Math.floor(F));Z.position.lerpVectors(Ae[y],Ae[y+1],Math.min(1,F-y)),Z.scale.setScalar(.43*(1-ze*.8))}if(V.position.set((I.target==="self",0),I.target==="self"?3.7:.12,I.target==="self"?-1.4:0),V.rotation.x=I.target==="self"?0:Math.PI/2,V.visible=["ready","refused","measuring","unfolding"].includes(I.phase),I.trace&&!R){R=!0,ge.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}xe!==I.phase&&m()}function $(){return{ready:I.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[I.phase]}return{enter:L,exit:k,choose:U,act:ee,update:P,text:$,button:()=>I.phase==="inside"?"увидеть сон снова":I.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...I,active:J,trace:R,unfold:ae,opened:se,rootVisible:t.visible,roomVisible:f.visible,steps:z.map(B=>B.position.toArray()),jaws:q.map(B=>B.position.toArray()),drop:W.position.toArray(),head:Z.position.toArray(),cursorVisible:Q.visible,cursorPosition:Q.getWorldPosition(new n.Vector3).toArray(),faceAngles:[A.rotation.y,D.rotation.y],nestedVisible:Q.visible&&j.visible,landmarks:[W.position.toArray(),[0,3.7,-1.4],X.toArray(),Y[0].toArray()]})}}const d1=["восток","юг","запад","север"],Tf=[0,2,3];function Zl(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function f1(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function p1(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==Tf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function m1(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function g1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:p,batchStatic:g,chime:_,changed:m}){const f=a([0,0,0],e);f.name="dream-04-letter-above-roof",f.visible=!1;const M=r("#355b62"),E=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,f),h([0,-.26,0],3.78,.024,s.copper,f);for(let R=0;R<4;R++){const L=R*Math.PI/2,k=Math.cos(L)*3.05,U=Math.sin(L)*3.05;p(["В","Ю","З","С"][R],[k,-.23,U],.38,.28,f).rotation.x=-Math.PI/2}const S=[],b=[],T=[];for(let R=0;R<3;R++){const L=1.05+R*1.4,k=2.05-R*.27,U=a([0,L,0],f);S.push(U);for(let oe=1;oe<4;oe++){const xe=oe*Math.PI/2,Se=Math.cos(xe),H=Math.sin(xe),ze=[[.3,.3,-.3],[.3,.3,.3],[k,.04,k],[k,.04,-k]],Ae=new n.BufferGeometry,F=[];for(const re of[0,1,2,0,2,3]){const[le,de,be]=ze[re];F.push(le*Se-be*H,de,le*H+be*Se)}Ae.setAttribute("position",new n.Float32BufferAttribute(F,3)),Ae.computeVertexNormals();const y=E.clone();y.side=n.DoubleSide,o(Ae,y,null,null,U),d([k*Se-k*H,.04,k*H+k*Se],[k*Se+k*H,.04,k*H-k*Se],.035,s.copper,U);for(const re of[-1,1])d([k*Se-k*H*re,.04,k*H+k*Se*re],[(k+.16)*Se-(k+.16)*H*re,.2,(k+.16)*H+(k+.16)*Se*re],.035,s.copper,U)}const ee=a([k*.67,.045,0],U);d([-.32,0,0],[.3,0,0],.026,s.mint,ee),d([.3,0,0],[.1,0,.13],.026,s.mint,ee),d([.3,0,0],[.1,0,-.13],.026,s.mint,ee),b.push(ee);const P=Tf[R]*Math.PI/2,$=Math.cos(P)*k*.63,te=Math.sin(P)*k*.63,B=h([$,L+.09,te],.16,.025,s.light,f);T.push(B),p(`${R+1}`,[k+.26,L+.14,.2],.36,.29,f,{bg:"#355b62",fg:"#f0e4b8"});for(const oe of[-1,1])d([oe*.3,L-.32,-.3],[oe*.3,L-.03,-.3],.018,s.copper,f)}const v=a([-2.6,.16,1.5],f);c([0,0,0],[1.1,.62,.7],s.cream,v),c([0,.16,.361],[.72,.07,.025],M,v),p("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,f,{size:40});const w=i.clone(!0);f.add(w),w.scale.setScalar(.53),w.position.set(-2.6,1,1.5),w.rotation.z=-.12,p("СОН / 04",[0,-.12,3.34],1.8,.32,f,{size:48}).rotation.x=-Math.PI/2;const A=a([-1.1,.12,1.5],f);c([0,0,0],[.52,.025,.36],x,A);const D=a([-.26,.016,0],A),G=a([.26,.016,0],A);c([.13,0,0],[.26,.022,.36],x,D),c([-.13,0,0],[.26,.022,.36],x,G),d([-.25,.04,-.17],[0,.04,.1],.009,s.copper,A),d([.25,.04,-.17],[0,.04,.1],.009,s.copper,A);const q=l([0,.045,0],.055,s.light,A),z=a([0,5.3,0],f);h([0,0,0],.55,.025,s.copper,z),d([0,-.3,0],[0,.22,0],.018,s.copper,z);const N=Array.from({length:6},(R,L)=>{const k=L*Math.PI/3,U=l([Math.cos(k)*.29,0,Math.sin(k)*.29],[.21,.065,.11],x,z);return U.rotation.y=-k,U});z.visible=!1;const Y=[new n.Vector3(-1.1,.12,1.5),...T.map(R=>R.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],W=new n.BufferGeometry().setFromPoints(Y),Z=new n.Line(W,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));Z.computeLineDistances(),f.add(Z);let X=Zl(),K=!1,Q=0,j=!1,he=[Math.PI/2,Math.PI/2,Math.PI/2];try{j=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const ge=a([-3.75,1.17,-2.95],t);ge.visible=j,c([0,0,0],[.23,.012,.16],x,ge),d([-.11,.016,-.07],[0,.016,.04],.005,s.copper,ge),d([.11,.016,-.07],[0,.016,.04],.005,s.copper,ge),g(f,[...S,...T,v,w,A,z,Z]),S.forEach((R,L)=>g(R,[b[L]])),g(A,[D,G,q]),g(D,[]),g(G,[]),g(v,[]),g(z,N),g(ge,[]);function ye(){K=!0,X=Zl(),Q=0,he=X.turns.map(R=>R*Math.PI/2),f.visible=!0,t.visible=!1,ae(0,0)}function V(){K=!1,f.visible=!1,t.visible=!0}function I(R){X=f1(X,R),_(165+R*55+X.turns[R]*22),m()}function J(){X.phase==="delivered"?(X=Zl(),Q=0):X=p1(X),_(220),m()}function ae(R,L){if(!K)return;const k=X.phase;X=m1(X,R),Q=n.MathUtils.damp(Q,X.phase==="delivered"?1:0,2.4,R),S.forEach((te,B)=>{const oe=X.turns[B]*Math.PI/2,xe=Math.atan2(Math.sin(oe-he[B]),Math.cos(oe-he[B]));he[B]+=xe*(R===0?1:1-Math.exp(-R*7)),te.rotation.y=-he[B],te.position.x=Q*[-2.15,1.85,0][B],te.position.z=Q*[.45,-.65,-2.1][B],te.rotation.z=Q*(B===0?-.16:.13)});const U=Math.min(4,X.progress),ee=Math.min(3,Math.floor(U)),P=Math.min(1,U-ee),$=P*P*(3-2*P);if(A.position.lerpVectors(Y[ee],Y[ee+1],$),A.rotation.y=L*.16,D.rotation.z=-Q*1.1,G.rotation.z=Q*1.1,q.position.y=.045+Q*.18,z.visible=X.phase==="delivered",z.rotation.y=L*.22,N.forEach((te,B)=>{te.position.y=Math.sin(L*.7+B)*.035}),Z.visible=X.phase!=="delivered",X.trace&&!j){j=!0,ge.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}k!==X.phase&&m()}function se(){return X.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":X.phase==="caught"?`Поймала крыша ${X.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:X.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:ye,exit:V,turn:I,send:J,update:ae,text:se,directions:d1,inspect:()=>({...X,turns:[...X.turns],active:K,trace:j,open:Q,roomVisible:f.visible,rootVisible:t.visible,roofs:S.map(R=>({position:R.position.toArray(),rotation:R.rotation.toArray().slice(0,3)})),letter:A.position.toArray(),goals:T.map(R=>R.position.toArray()),crown:z.visible})}}function _1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:p,paperBoat:g,batchStatic:_,chime:m}){const f=a([0,0,0],e);f.name="dream-03-silent-dock",f.visible=!1;const M=r("#526b79"),E=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,f),u([0,-.23,0],4,.055,E,f),h([0,-.18,0],4.08,.04,s.copper,f),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,f);for(let L of[-.1,.55,1.2,1.85])c([-2.85,.07,L],[1.38,.045,.025],M,f);for(let L of[-3.4,-2.3])d([L,-.3,1.9],[L,.48,1.9],.035,s.copper,f);p("СОН / 03",[-2.85,.13,2.4],1.6,.28,f,{size:48}).rotation.x=-Math.PI/2;const S=i.clone(!0);S.position.set(-2.8,1.27,.75),S.scale.setScalar(.65),f.add(S);const b=[];for(const L of[-1,1]){const k=a([L*.12,-.04,.68],S);d([0,0,0],[L*.64,-.2,.05],.06,s.black,k),l([L*.62,-.18,.05],[.19,.095,.07],s.black,k),d([L*.58,-.18,.06],[L*.58,-.7,.06],.015,s.copper,k),l([L*.58,-.76,.06],.075,s.copper,k),_(k,[]),b.push(k)}const T=Array.from({length:3},(L,k)=>h([-1.2+k*1.25,-.17,-.25],.72,.035,k===1?s.cream:s.copper,f)),v=Array.from({length:3},(L,k)=>h([-1.2+k*1.25,-.165,-.25],.72,.013,x,f)),w=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,f),A=g(f,[-1.9,-.13,-.25],.9),D=l([0,.53,0],[.065,.09,.065],s.light,A),G=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,f);G.rotation.z=.65;const q=[];for(let L=0;L<5;L++){const k=-1.6+L*.85;d([k,-.2,-2.9],[k,1.1+L%2*.4,-2.9],.025,M,f),q.push(l([k,1.12+L%2*.4,-2.9],.035,s.light,f))}let z=!1,N=0,Y=1,W=[1,1,1],Z=[0,0,0],X=0,K=0,Q=!1;try{Q=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const j=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);j.visible=Q;const he=Array.from({length:5},()=>new n.Vector3),ge=new n.CatmullRomCurve3(he),ye=new n.Vector3,V=new n.Vector3;_(f,[S,...T,...v,w,A,G,...q]),_(S,b),_(A,[D]);function I(L){Y=n.MathUtils.clamp(Math.round(Number(L)||1),1,3)}function J(){z=!0,N=0,W=[1,1,1],Z=[0,0,0],X=0,K=0,f.visible=!0,t.visible=!1,R(0,0)}function ae(){z=!1,f.visible=!1,t.visible=!0}function se(){if(z){if(N===3){N=0,W=[1,1,1],Z=[0,0,0],K=0;return}if(W[N]=Y,N++,X=0,m(110+Y*55),N===3){Q=!0,j.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function R(L,k){if(!z)return;K+=Math.min(L,.15),X+=Math.min(L,.15);for(let $=0;$<3;$++){Z[$]=n.MathUtils.damp(Z[$],$<N?1:0,3,L);const te=-.17+Z[$]*(.95+W[$]*.42),B=.72+W[$]*.12;T[$].position.y=te,T[$].rotation.set(Math.PI/2*(1-Z[$]),Math.PI/2*Z[$],0),T[$].scale.setScalar(B/.72),v[$].scale.setScalar(B/.72*(1+Math.sin(K*.9+$)*.045)),he[$+1].set(T[$].position.x,Math.max(-.1,te),-.25)}he[0].set(-2,-.1,-.25),he[4].set(2.5,-.1,-.25);const U=(1-Math.cos(K*.55))*.5;ge.getPoint(U,ye),ge.getPoint(Math.min(.999,U+.012),V),A.position.copy(ye),A.rotation.z=n.MathUtils.clamp(Math.atan2(V.y-ye.y,V.x-ye.x),-.45,.45),A.rotation.y=0,w.visible=N>0;const ee=Math.min(1,X/1.8),P=Math.max(0,N-1);w.position.set(n.MathUtils.lerp(-2.5,-1.2+P*1.25,ee),.35+ee*(2.1+W[P]*.35),n.MathUtils.lerp(1.4,-.25,ee)),w.rotation.y=K*.4,b.forEach(($,te)=>$.rotation.z=Math.sin(K*1.2+te*Math.PI)*(.06+N*.04)),D.position.y=.53+Math.sin(k)*.02}return{enter:J,exit:ae,toss:se,choose:I,update:R,inspect:()=>({active:z,step:N,force:Y,forces:[...W],lift:[...Z],trace:Q,roomVisible:f.visible,rootVisible:t.visible,boat:A.position.toArray(),ringY:T.map(L=>L.position.y),ringRotation:T.map(L=>L.rotation.toArray().slice(0,3)),stone:w.position.toArray()})}}function Qh(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,u=Math.min(i,Math.max(0,360-l.age));l.age+=u,l.exposure[l.face]+=u,l[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(l.id),d=t.shelf.findIndex(h=>h.id===u);if(d<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(d,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",p={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(p),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:p,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const v1={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function x1({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:u,sign:d,batchStatic:h,changed:p,watching:g,localPlay:_}){var k,U,ee;const m=s([24,-1.55,0]);m.name="cheese-cellar";const f=i("#697b70"),M=i("#b4b89b"),E=i("#936c4d"),x=i("#e1b064"),S=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],f,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let P=-4;P<=4;P+=2)r([P,1.5,-3.43],[.16,3,.1],f,m);for(let P of[-4.4,4.4])c([P,0,-3.3],[P,3.6,-3.3],.09,t.copper,m),c([P,3.6,-3.3],[P,3.6,2.5],.09,t.copper,m),c([P,3.6,2.5],[P,0,2.5],.09,t.copper,m);d("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],E,m),r([0,0,-2.7],[7.9,.14,1.05],E,m);for(let P of[-3.8,3.8])r([P,.6,-2.7],[.14,1.4,1.05],E,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,b,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,E,m);for(let P of[2.8,3.5])a([P,.28,1.8],.26,.56,t.cream,m),a([P,.59,1.8],.12,.1,t.copper,m);const T=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let P=0;P<4;P++)r([2.25+P*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],E,m);const v=s([.5,1.02,.25],m),w=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),A=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),S,[0,0,0],null,v),D=l([0,.33,0],.35,.026,t.cream,v),G=s([.5,.65,2.3],m),q=[];for(let P=0;P<6;P++)q.push(o([-1.25+P*.5,0,0],.08,t.mint,G));const z=d("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});z.rotation.x=-Math.PI/2;function N(P){const $=s(P,m),te=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,$),B=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),S.clone(),[0,0,0],null,$),oe=s([0,-.14,.09],$);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,oe);const xe=o([.09,.16,.27],.04,t.mint,oe),Se=u(new n.IcosahedronGeometry(.21,0),f,[.13,.02,.23],null,$),H=s([0,0,0],$);for(const[ze,Ae,F]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Ae,F],[.05,.05,.025],t.dark,H);return{g:$,body:te,crust:B,steps:oe,crystal:Se,holes:H,pearl:xe}}const Y=Array.from({length:6},(P,$)=>N([-3.15+$*1.26,1.42,-2.6])),W=s([0,0,0],e);for(let P=0;P<24;P++){const $=P/23;r([8.3+$*11.2,-.15-$*1.32,1.4+Math.sin($*Math.PI)*2],[.85,.15,.75],f,W)}for(let P=0;P<5;P++)r([20+P*.7,-1.46,1.4-P*.22],[.75,.13,.7],f,W);d("СЫР →",[10.2,.35,2.4],1.5,.4,W,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,W),h(W,[]),h(m,[v,T,G,z,...Y.map(P=>P.g)]);for(const P of Y)h(P.steps,[P.pearl]),h(P.holes,[]);let Z=null,X=null,K=0,Q=null,j="",he=0;try{const P=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");Z=(P==null?void 0:P.state)||P,K=Number(P==null?void 0:P.clockOffset)||0}catch{}const ge=()=>Date.now()/1e3+K;function ye(P,$,te={}){const B=Qh({state:Z,mode:P,tool:$,args:te,now:ge()});Z=B.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:Z,clockOffset:K}))}catch{}return B}ye("migrate");const V=document.createElement("div");V.id="cellar-controls",V.hidden=!0,V.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(V);function I(){return X&&g()?X:Qh({mode:"migrate",state:Z,now:Z.updated}).public}function J(P){Q=P;const $=P.batch;if(v.visible=!!$,z.visible=!$,T.rotation.y=P.air==="dry"?-.8:0,$){v.rotation.z=$.face?Math.PI:0;const te=$.age/360;w.material.color.set($.culture==="moon"?"#e9cf8b":"#c8bc88"),A.material.color.set(P.air==="damp"?"#8b9f78":"#b87a48"),D.scale.setScalar(1+te*.15)}for(let te=0;te<6;te++)q[te].visible=!!$&&$.age>=(te+1)*60;Y.forEach((te,B)=>{const oe=P.shelf[B];te.g.visible=!!oe,oe&&(te.g.rotation.z=oe.kind==="lopsided"?.22:0,te.crust.material.color.set(oe.wet>=180?"#8b9f78":"#b87a48"),te.steps.visible=oe.kind==="moon_stair",te.crystal.visible=oe.kind==="stone",te.holes.visible=oe.kind==="holes"||oe.kind==="lopsided")})}function ae(P,$){_();const te=ye("action",P,$);return j="",L(0),p(),te}for(const P of V.querySelectorAll("[data-culture]"))P.onclick=()=>ae("set_batch",{culture:P.dataset.culture});V.querySelector("#cellar-turn").onclick=()=>ae("tend",{air:Z.air,turn:!0}),V.querySelector("#cellar-air").onclick=()=>ae("tend",{air:Z.air==="damp"?"dry":"damp",turn:!1}),V.querySelector("#cellar-wait").onclick=()=>{_(),K+=60,ye("tick"),j="",L(0),p()};function se(){const P=Q||I(),$=P.batch,te=X&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",B=$?$.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor($.age)}/360 с. Корка: ${Math.floor($.exposure[0])}/${Math.floor($.exposure[1])} с.`:P.shelf.length?`На полке: ${P.shelf.map(oe=>v1[oe.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:X&&g()?"войти в свою сыроварню":$?$.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(X&&g())&&!!$&&!$.ready,description:te+" "+B}}function R(){const P=Q||I(),$=P.batch;V.querySelector("#cellar-readout").textContent=`${P.air==="damp"?"сыро":"сухо"} · ${$?$.ready?"готово":`ещё ${Math.ceil($.remaining)} с`:"нет колеса"} · полка ${P.shelf.length}/6`;for(const te of V.querySelectorAll("[data-culture]"))te.disabled=!!$;V.querySelector("#cellar-turn").disabled=!$||$.ready,V.querySelector("#cellar-air").textContent=P.air==="damp"?"сделать суше":"вернуть сырость"}function L(P){P-he>=1&&(he=P,ye("tick"));const $=I(),te=JSON.stringify($);te!==j&&(j=te,J($),R(),p())}return window.addEventListener("beznogim:state",({detail:P})=>{var te,B;const $=(B=(te=P.mechanics)==null?void 0:te.cellar)==null?void 0:B.public;$&&(X=$,j="")}),X=((ee=(U=(k=window.__beznogimState)==null?void 0:k.mechanics)==null?void 0:U.cellar)==null?void 0:ee.public)||null,J(I()),R(),{house:m,controls:V,update:L,card:se,run:()=>ae(Z.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:X&&g()?"resident":"sandbox",...Q,wheelVisible:v.visible,shelfVisible:Y.filter(P=>P.g.visible).length,stairsVisible:Y.filter(P=>P.g.visible&&P.steps.visible).length,shutter:T.rotation.y})}}function y1({entries:n,elements:e,layer:t,camera:i}){const s=new gt,r=new gt,o=new O,a=Object.entries(n).map(([d,h])=>({element:e[d],anchor:h.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,u=!1;return{update(d,h,p){if(t.hidden===d&&(t.hidden=!d),!d){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||c!==h||l!==p||!s.equals(r);c=h,l=p,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!g)continue;o.copy(_.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,f=(1-o.y)*p*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&f>=10&&f<=p-55;if(M!==_.visible&&(_.visible=M,_.element.classList.toggle("hidden",!M)),!M)continue;const E=Math.round(m*10)/10,x=Math.round(f*10)/10;(E!==_.x||x!==_.y)&&(_.x=E,_.y=x,_.element.style.transform=`translate3d(${E}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function M1(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,d=Math.max(12,u?0:a.bottom+12,u?l.bottom+12:0),h=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(d)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Te=n=>document.querySelector(n),Qt=()=>innerWidth<700,Af=matchMedia("(prefers-reduced-motion: reduce)").matches;let Sr={};try{Sr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!Sr.running,harvest:Math.min(99,Math.max(0,Number(Sr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Sr.dockTrips)||0))),dockPending:Sr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function js(){return we.roof===null?we.running||we.loop>0:!!we.roof}function bc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const ut=new Sf({antialias:!0,alpha:!1,powerPreference:"high-performance"});ut.setPixelRatio(Math.min(devicePixelRatio,Qt()?1.5:2));ut.setSize(innerWidth,innerHeight,!1);ut.shadowMap.enabled=!0;ut.shadowMap.type=Gs;ut.shadowMap.autoUpdate=!1;ut.shadowMap.needsUpdate=!0;ut.outputColorSpace=an;ut.toneMapping=Oa;ut.toneMappingExposure=1.22;Te("#world").append(ut.domElement);const un=new qd;un.background=new ct("#182e32");un.fog=new $a("#182e32",8e-4);const Oe=new Jr(-10,10,10,-10,.1,600),hu=new O(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(hu);const Je=new Lx(Oe,ut.domElement);Je.target.copy(hu);Je.enableDamping=!0;Je.enableRotate=!1;Je.enablePan=!0;Je.minZoom=.075;Je.maxZoom=2.5;Je.screenSpacePanning=!1;Je.mouseButtons.LEFT=bi.PAN;Je.mouseButtons.RIGHT=bi.PAN;Je.touches.ONE=Mi.PAN;Je.touches.TWO=Mi.DOLLY_PAN;un.add(new cf("#d9eedc","#334d53",2.3));const xs=new au("#ffe2ac",3.3);xs.position.set(-7,14,6);xs.castShadow=!0;xs.shadow.mapSize.set(Qt()?512:1024,Qt()?512:1024);Object.assign(xs.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});xs.shadow.bias=-4e-4;xs.shadow.normalBias=.025;un.add(xs);const Cf=new au("#8ad5d8",1.3);Cf.position.set(5,7,-8);un.add(Cf);const vt=new Hi;un.add(vt);const Jl={};function et(n,e={}){const t=n+JSON.stringify(e);return Jl[t]||(Jl[t]=new zs({color:n,roughness:.8,...e}))}const ri={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},pe={concrete:et(ri.concrete),cream:et(ri.cream),dark:et(ri.dark),metal:et(ri.metal,{metalness:.5,roughness:.4}),copper:et(ri.copper,{metalness:.6,roughness:.35}),rust:et(ri.rust),black:et(ri.black),leaf:et(ri.leaf),light:et("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:et("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},ir={box:new Ii(1,1,1),sphere:new ja(1,12,8),ico:new Zr(1,1),cyl:new Yr(1,1,1,16),cone:new _s(1,1,8)};function Ot(n,e,t,i,s=vt){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Ve=(n,e,t,i=vt)=>Ot(ir.box,t,n,e,i),ot=(n,e,t,i=vt)=>Ot(ir.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),yt=(n,e,t,i,s=vt)=>Ot(ir.cyl,i,n,[e,t,e],s);function Kr(n,e,t,i=vt,s=.08){return Ot(new uu(...e,1,s),t,n,null,i)}function pt(n=[0,0,0],e=vt){const t=new Hi;return t.position.set(...n),e.add(t),t}function sr(n,e,t,i=vt){const s=new jc(n.map(r=>new O(...r)));return Ot(new tl(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function _t(n,e,t,i,s=vt){const r=new O(...n),o=new O(...e),a=o.clone().sub(r),c=yt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new O(0,1,0),a.normalize()),c}function At(n,e,t,i,s=vt,r=[Math.PI/2,0,0]){const o=Ot(new el(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function zt(n,e,t,i,s=vt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new Jc(o);c.colorSpace=an;const l=Ot(new vs(t,i),new qr({map:c,side:Ln}),e,null,s);return l.castShadow=!1,l}let Kl=179;function wt(){return Kl=Kl*1664525+1013904223>>>0,Kl/4294967296}const La=document.createElement("canvas");La.width=La.height=256;const Ia=La.getContext("2d");Ia.fillStyle="#b4bcaa";Ia.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Ia.fillStyle=`rgba(${wt()>.5?"60,82,64":"235,229,201"},${wt()*.08})`,Ia.fillRect(wt()*256,wt()*256,1+wt()*3,1+wt()*3);const Vr=new Jc(La);Vr.wrapS=Vr.wrapT=Dr;Vr.repeat.set(5,5);Vr.colorSpace=an;const S1=et("#c2c6b1",{map:Vr,roughness:.97});function du(n,e,t,i,s=vt){const r=new $r;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new tr(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),Ot(o,i,null,null,s)}const fu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];du(fu,0,.82,pe.concrete);du(fu,.06,.14,S1);du(fu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,et("#47665e"));for(let n=0;n<28;n++){const e=-5.4+wt()*10.9,t=wt()>.5?5.15:-5.2,i=Ot(ir.ico,et(n%3?"#557469":"#668477"),[e,-1.15-wt()*.5,t],[.25+wt()*.8,.2+wt()*.55,.35+wt()*.3]);i.rotation.y=wt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Ve([e,-.37,5.61],[.48,.19,.025],n%2?pe.copper:pe.dark),n%2===0&&sr([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,pe.metal)}zt("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,vt,{size:32});const Dt=pt([-3.2,.08,-2.5]),pn=pt([0,0,0],Dt);Ve([0,.08,0],[4.5,.15,3.6],pe.dark,Dt);Ve([0,1.2,-1.68],[4.5,2.4,.18],pe.cream,Dt);Ve([-2.15,1,0],[.18,2,3.6],pe.cream,Dt);for(let n=0;n<5;n++){Ve([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],pe.concrete,Dt),Ve([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],pe.metal,Dt);for(let e=0;e<3;e++)Ve([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],pe.copper,Dt)}Ve([0,2.47,-.2],[4.8,.14,3.7],pe.rust,pn);for(let n=0;n<23;n++){const e=Ve([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],et("#d09062"),pn);e.rotation.x=-.015}Ve([0,2.35,1.62],[4.8,.14,.18],pe.dark,Dt);_t([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,pe.copper,Dt);_t([2.3,.12,1.62],[2.3,2.4,1.62],.055,pe.copper,Dt);zt("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Dt,{size:37});Ve([.1,.85,-.84],[3.8,.13,.87],pe.rust,Dt);for(const n of[-1.5,1.65])Ve([n,.44,-.84],[.12,.85,.65],pe.metal,Dt);for(let n=0;n<3;n++)Ve([-1.15+n*.95,.51,-.85],[.82,.47,.75],pe.concrete,Dt),Ve([-1.15+n*.95,.5,-.44],[.18,.04,.03],pe.copper,Dt);for(let n=0;n<6;n++)Ve([-1.6+n*.48,2.07,-1.48],[.28,.16+wt()*.16,.17],et(["#9fba95","#cb9b70","#667f71"][n%3]),Dt);yt([0,.5,.7],.32,.12,pe.rust,Dt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;_t([e,.06,t],[e,.5,t],.04,pe.metal,Dt)}for(let n=0;n<4;n++)At([-1.5,.06,1],.3-n*.045,.025,pe.black,Dt);yt([-1.5,3,-.9],.16,.9,pe.metal,pn);yt([-1.5,3.47,-.9],.24,.08,pe.rust,pn);Ve([1.4,2.9,-.4],[.8,.5,.6],pe.concrete,pn);for(let n=0;n<5;n++)Ve([1.1+n*.15,2.94,-.085],[.035,.32,.03],pe.dark,pn);const pu=new il("#ffca86",5,5,2);pu.position.set(-3,1.7,-1.1);vt.add(pu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=Kr([n,.1,e],[.74,.05,.74],et(wt()>.3?"#b3baa6":"#a5b5a4"),vt,.018);t.rotation.y=(wt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+wt()*12,t=-5.1+wt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=Ot(ir.cone,pe.leaf,[e,.1,t],[.022,.12+wt()*.12,.022]);i.rotation.z=(wt()-.5)*.7}const Ec=new Bn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Ln});Ve([3.7,.12,3.6],[4.9,.24,2.7],pe.dark);Ot(new vs(4.5,2.4),Ec,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Ve([3.7,.29,n],[5,.38,.16],pe.cream);for(const n of[1.18,6.2])Ve([n,.29,3.6],[.16,.38,2.85],pe.cream);for(let n=0;n<13;n++)Ve([1.85,.5,2.15+n*.235],[1.08,.09,.22],et(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])yt([e,.88,n],.045,.8,pe.copper);for(const n of[1.31,2.4])sr([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,pe.cream);const mu=[];for(let n=0;n<6;n++){let e=Ve([4+n*.095,-1.25,5.56],[.055,2.4,.03],et("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));mu.push(e)}for(let n=0;n<4;n++)Ve([3.96+n*.17,.31,5.31],[.055,.08,.6],pe.dark);const Yt=pt([3.7,.1,-2.6]);Kr([0,.14,0],[3.7,.27,3.5],pe.cream,Yt,.09);for(const n of[-1.55,1.55])Ve([n,1.76,0],[.17,3.25,.2],pe.metal,Yt),Ve([n,.38,0],[.45,.2,.6],pe.copper,Yt),_t([n,.36,-1.2],[n,2.9,0],.045,pe.copper,Yt),_t([n,.36,1.2],[n,2.9,0],.045,pe.copper,Yt);Ve([0,3.38,0],[3.5,.18,.26],pe.copper,Yt);const b1=At([0,2.7,-.5],1.83,.035,pe.copper,Yt,[0,0,0]);b1.scale.y=.85;const Qr=[];for(let n=0;n<5;n++){const e=pt([-1.18+n*.59,3.24,0],Yt),t=1.8+n*.12;_t([0,0,-.08],[0,-t,0],.015,pe.dark,e),_t([0,0,.08],[0,-t,0],.015,pe.dark,e),ot([0,-t,0],.205,pe.copper,e),At([0,-t,0],.211,.012,pe.light,e,[0,0,0]),Qr.push({group:e,len:t,phase:n})}Ve([0,.6,1.3],[1.45,.8,.4],pe.metal,Yt);zt("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Yt,{size:40});const E1=yt([-.43,.97,1.3],.19,.07,pe.cream,Yt);E1.rotation.x=Math.PI/2;const gu=Ve([-.43,.99,1.342],[.015,.22,.008],pe.rust,Yt);gu.rotation.z=-.7;const Rf=ot([.53,.93,1.52],.09,pe.light,Yt),ol=pt([.15,.4,1.59],Yt);At([0,0,0],.19,.023,pe.rust,ol,[0,0,0]);for(let n=0;n<3;n++)_t([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,pe.rust,ol);sr([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,pe.copper);const Pf=[];function _u(n,e,t=1.5){yt([n,t/2,e],.038,t,pe.metal),Ve([n,t,e],[.27,.11,.27],pe.dark),Ve([n,t-.18,e],[.17,.25,.17],pe.light),Ve([n,t-.34,e],[.25,.08,.25],pe.copper);const i=new il("#ffbe70",1.8,3);i.position.set(n,t-.16,e),Pf.push(i)}_u(-5.9,3.9,1.3);_u(.3,-4.8,1.7);_u(5.8,1.25,1.35);const ln=pt([-3.6,.08,3.55]),wc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;Kr([0,.14,e],[3.6,.3,1.14],pe.rust,ln,.06),Ve([0,.305,e],[3.36,.04,.92],et(ri.soil),ln);for(let t=0;t<4;t++){const i=pt([-1.26+t*.84,.33,e],ln);yt([0,.14,0],.026,.28,pe.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=ot([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],et(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){ot([0,.17,0],[.25,.18,.25],et("#b6c58a"),i);for(let s=0;s<6;s++){const r=ot([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],pe.leaf,i);r.rotation.y=s}wc.push(i)}else{const s=ot([.05,.22,0],[.1,.21,.12],et(ri.purple,{roughness:.35}),i);s.rotation.z=-.25,ot([.05,.41,0],[.075,.025,.07],pe.leaf,i),wc.push(i)}}}const Lf=pt([-1.72,.1,.8],ln);for(let n=0;n<2;n++)Ve([n*3.45,.6,0],[.04,1.3,.04],pe.copper,Lf);_t([0,1.25,0],[3.45,1.25,0],.022,pe.copper,Lf);zt("КОБАЧКИ",[-.45,.68,1.64],1,.26,ln,{bg:"#c2c7a3",fg:"#445e45",size:42});yt([1.9,.23,.7],.18,.34,et("#6b9389"),ln);_t([2.04,.25,.7],[2.4,.46,.7],.045,et("#6b9389"),ln);At([1.8,.48,.7],.16,.02,pe.copper,ln,[0,0,0]);Ve([-1.6,.2,1.47],[.65,.4,.45],pe.rust,ln);for(let n=0;n<3;n++)Ve([-1.6,.12+n*.11,1.71],[.7,.05,.025],pe.copper,ln);const Mn=pt([-3.8,.08,.35]);yt([0,.73,0],.58,.1,pe.rust,Mn);yt([0,.35,0],.045,.7,pe.metal,Mn);for(let n=0;n<3;n++)_t([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,pe.metal,Mn);const jr=pt([.1,.81,0],Mn);ot([0,.2,0],[.23,.22,.23],pe.cream,jr);yt([0,.37,0],.14,.06,pe.copper,jr);ot([0,.42,0],.045,pe.dark,jr);_t([.15,.18,0],[.33,.32,0],.07,pe.cream,jr);At([-.15,.25,0],.18,.035,pe.dark,jr,[0,0,0]);for(const n of[-.35,.38])yt([n,.84,.24],.082,.15,pe.cream,Mn),At([n,.92,.24],.084,.012,pe.copper,Mn),yt([n,.921,.24],.063,.006,et("#67513b"),Mn),At([n+.09,.86,.24],.045,.011,pe.cream,Mn,[0,0,0]);const al=[];for(let n=0;n<9;n++){const e=ot([0,0,0],.07,et("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,al.push(e)}const Jn=pt([-5.65,.09,1.1]);Ve([0,.3,0],[.7,.6,.7],pe.concrete,Jn);Kr([0,.8,0],[.68,.45,.35],pe.dark,Jn,.05);for(let n=0;n<6;n++)Ve([-.2+n*.05,.8,.18],[.022,.27,.018],pe.copper,Jn);Ve([.18,.85,.184],[.16,.075,.02],pe.light,Jn);ot([.18,.72,.19],.05,pe.cream,Jn);_t([.18,1,0],[.48,1.6,0],.012,pe.copper,Jn);const If=pt([-.5,.1,-4.6]);yt([0,1.75,0],.055,3.5,pe.metal,If);ot([0,3.55,0],.09,pe.copper,If);sr([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,pe.dark);for(let n=0;n<8;n++){let e=n/8;const t=Ot(new _s(.13,.3,3),et(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const ll=pt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Ve([0,0,0],[.55,.09,.025],pe.rust,ll);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}ot([0,0,.05],.08,pe.copper,ll);const nn=pt([7.25,-.03,1.5]);Ve([0,-.12,0],[2.25,.3,2.5],pe.metal,nn);for(let n=0;n<10;n++)Ve([-.99+n*.22,.08,0],[.2,.08,2.6],pe.rust,nn);Ve([-.95,.2,-.95],[.35,.15,.35],pe.dark,nn);yt([.87,.34,.75],.075,.5,pe.copper,nn);yt([.87,.59,.75],.13,.05,pe.cream,nn);_t([.87,.1,-.7],[.87,2.3,-.7],.035,pe.copper,nn);sr([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,pe.copper,nn);Ve([.17,2.09,-.7],[.25,.4,.25],et("#ffd591"),nn);Ve([.17,2.32,-.7],[.34,.08,.34],pe.dark,nn);for(let n=0;n<4;n++)At([.87,.15,.75],.24-n*.025,.024,et("#b8ad86"),nn);Ve([6.7,.07,1.5],[1.4,.13,.8],pe.rust);zt("НИКУДА",[.05,.28,1.36],1.3,.29,nn,{bg:"#c2c7a3",fg:"#445e45",size:45});const vu=[];function cl(n,e,t=1){const i=pt(e,n),s=new $r;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Ot(new tr(s,{depth:.19,bevelEnabled:!1}),et("#dfc99a"),[0,.15,-.1],null,i);const r=Ot(new _s(.23,.36,3),pe.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=cl(vt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);vu.push(e)}const Kn=Xx({THREE:cn,root:vt,dock:nn,state:we,M:pe,mat:et,group:pt,mesh:Ot,box:Ve,sphere:ot,cyl:yt,torus:At,rod:_t,sign:zt,paperBoat:cl,batchStatic:Rt,persist:bc,say:Pn,refresh:Ft,chime:pi,reduced:Af}),Ke=pt([-.15,1.9,.85]);Ke.scale.setScalar(1.18);const xu=et("#233a39",{metalness:.42,roughness:.32});ot([0,.1,0],[.62,.8,.55],xu,Ke);ot([0,-.36,.1],[.44,.43,.43],xu,Ke);ot([-.61,.03,.03],[.1,.2,.12],pe.copper,Ke);ot([.61,.03,.03],[.1,.2,.12],pe.copper,Ke);for(const n of[-.23,.23]){ot([n,.2,.485],[.17,.13,.057],pe.black,Ke),At([n,.2,.541],.078,.02,pe.copper,Ke,[0,0,0]),ot([n,.2,.56],.041,pe.light,Ke);const e=Ve([n,.38,.48],[.24,.045,.06],pe.cream,Ke);e.rotation.z=n>0?-.13:.13}ot([0,.04,.51],[.09,.17,.11],xu,Ke);ot([0,-.2,.44],[.31,.16,.11],pe.black,Ke);for(let n=0;n<7;n++){const e=(n-3)*.073,t=Kr([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],pe.cream,Ke,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=ot([t,i,-.04],[.18,.18,.48],pe.cream,Ke);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;sr([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,et("#f2edda"),Ke)}for(let n=0;n<3;n++)ot([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],pe.cream,Ke);const yu=At([0,1.05,0],.77,.019,pe.copper,Ke);yu.rotation.z=.14;const w1=new il("#ffbb62",.9,3);w1.position.set(0,.2,.9);const Go=At([-.15,.26,.85],.7,.018,pe.copper),Hr=Ot(new Ja(.64,32),new qr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Hr.rotation.x=-Math.PI/2;Hr.castShadow=!1;const Si=new O(-.15,1.9,.85),zn=pt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Ve([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?pe.cream:pe.concrete,zn);t.rotation.x=Math.PI/2-e,n%3===0&&_t([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,pe.copper,zn)}for(const n of[-.45,.45])At([n,0,0],2.07,.025,pe.copper,zn,[0,Math.PI/2,0]);for(const n of[-.34,.34])At([n,0,0],1.7,.075,pe.concrete,zn,[0,Math.PI/2,0]);_t([0,-2.15,-1.2],[0,-1.58,-.8],.07,pe.metal,zn);_t([0,-2.15,1.2],[0,-1.58,.8],.07,pe.metal,zn);zt("ОБРАТНО",[.49,-.55,.2],1.15,.3,zn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+wt()*20,t=-8+wt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||Ot(ir.ico,et("#47675f"),[e,-1.3-wt()*2,t],[.22+wt()*.55,.19+wt()*.4,.27+wt()*.4])}const Df=new Gt,Nf=[];for(let n=0;n<75;n++)Nf.push((wt()-.5)*25,wt()*9-2,(wt()-.5)*22);Df.setAttribute("position",new xt(Nf,3));const Uf=new Yd(Df,new $c({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));un.add(Uf);function Rt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new gt().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=Wx(o,!1);a&&Ot(a,r,null,null,n),o.forEach(c=>c.dispose())}}Rt(vt,[Ke,ln,Yt,Mn,Jn,nn,Dt,zn,ll,...vu,...al,...mu,Go,Hr,Kn.travel]);Rt(Dt,[pn]);Rt(pn,[]);Rt(zn,[]);Rt(Ke,[yu]);Ke.traverse(n=>{n.isMesh&&(n.castShadow=!1)});Rt(Mn,[...al]);Rt(Jn,[]);Rt(nn,[Kn.gallery,Kn.beacon]);Rt(Yt,[...Qr.map(n=>n.group),ol,gu,Rf]);Qr.forEach(n=>Rt(n.group,[]));const Wr=pt([0,.33,0],ln);wc.forEach(n=>{Wr.add(n),n.position.y-=.33});Rt(Wr,[]);Rt(ln,[Wr]);const Sn=Qx({THREE:cn,root:vt,scene:un,head:Ke,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,paperBoat:cl,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},chime:pi}),wi=x1({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,mesh:Ot,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Wi=mp({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ti=fp({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ai=ap({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},localPlay:()=>at.localPlay()}),hi=cp({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ci=hp({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),di=dp({THREE:cn,root:vt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,rod:_t,torus:At,sign:zt,batchStatic:Rt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Xi=pp({THREE:cn,workshop:Dt,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,changed:()=>{Ft(),ut.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),ul=jx({THREE:cn,scene:un,root:vt,head:Ke,M:pe,mat:et,mesh:Ot,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,chime:pi}),eo=_1({THREE:cn,scene:un,root:vt,head:Ke,M:pe,mat:et,mesh:Ot,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,paperBoat:cl,batchStatic:Rt,chime:pi}),Dn=g1({THREE:cn,scene:un,root:vt,head:Ke,M:pe,mat:et,mesh:Ot,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,chime:pi,changed:()=>{or(),ut.shadowMap.needsUpdate=!0}}),Of=e1({head:Ke,group:pt,sphere:ot,box:Ve,torus:At,M:pe,mat:et}),li=h1({THREE:cn,scene:un,root:vt,head:Ke,M:pe,mat:et,mesh:Ot,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,chime:pi,changed:()=>{or(),ut.shadowMap.needsUpdate=!0}}),qi=i1({THREE:cn,scene:un,root:vt,head:Ke,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,sign:zt,batchStatic:Rt,chime:pi,changed:()=>{or(),ut.shadowMap.needsUpdate=!0}}),ci=a1({THREE:cn,scene:un,root:vt,head:Ke,M:pe,mat:et,group:pt,box:Ve,sphere:ot,cyl:yt,rod:_t,torus:At,sign:zt,batchStatic:Rt,chime:pi,changed:()=>{or(),ut.shadowMap.needsUpdate=!0}});let en=null,lt=1;const kn={fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new O(-26.4,.7,-34.3),position:new O(-23,.1,-32),run:()=>Ai.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new O(-32,.6,-20.6),position:new O(-24,.6,-24),run:()=>hi.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new O(24,.9,29.7),position:new O(24,.6,24),run:()=>Ci.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new O(-6.9,1.9,-20.1),position:new O(0,.6,-24),run:()=>di.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new O(-17.5,1.3,3.4),position:new O(-24,.6,0),run:()=>Ti.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new O(-1.4,1.5,-1.1),position:new O(-3.2,1.25,-2.2),run:()=>Xi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new O(4.7,.8,25.8),position:new O(0,.4,24),run:()=>Wi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new O(28.4,2.2,2.5),position:new O(24,.4,0),run:()=>wi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new O(-.1,2.15,4.3),position:new O(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new O(-6,4.55,-3.25),position:new O(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,zf.copy(Ke.position),Pn("ноги не понадобились"),Ft())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new O(-3.2,3.15,-2.5),position:new O(-3.2,1.1,-2.5),run:()=>{we.roof=js()?0:1,Pn(js()?"заходи":"прикрыл"),Ft()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Ke.position),n.y+=1.35},position:new O(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Pn(n[T1++%n.length]),Si.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new O(3.7,3.85,-2.6),position:new O(3.7,1,-2.6),run:()=>{we.running=!we.running,bc(),Pn(we.running?"ну пошло":"можно и полежать"),Ft()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new O(-3.7,1.65,.35),position:new O(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,Si.set(-2.65,1.7,.65),Pn("щас, чайник поставлю"),Ft())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new O(-3.4,1,3.8),position:new O(-3.6,1,3.55),run:()=>{we.harvest++,Ws=.15,bc(),Si.set(-1.6,1.6,2.3),Pn(we.harvest===1?"о, урожай":"кабачки опять победили"),Ft()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new O(-5.65,1.75,1.1),position:new O(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,Mu(),Pn(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Ft()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new O(7.4,2.75,1.1),position:new O(7.25,.9,1.5),run:()=>{Kn.launchOrCollect(),we.dockPending===!1&&we.boat===0&&Si.set(5.85,1.7,1.05)}}};let T1=0,Ws=1,Ff=0,fs=0;const zf=new O;let Bf=()=>{Ki("engine"),kn.engine.run()};const hl={};for(const[n,e]of Object.entries(kn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>Ki(n),Te("#hotspots").append(t),hl[n]=t}const kf=Te("#hotspots"),Ql=Te("#speech"),us={width:innerWidth,height:innerHeight},A1=y1({entries:kn,elements:hl,layer:kf,camera:Oe});let jl=!1,jh=NaN,ed=NaN;const _r=new O;function Ki(n){we.selected=n,Te("#inspector").classList.remove("collapsed");const e=kn[n];Te("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Te("#object-title").textContent=e.title,Te("#object-description").textContent=e.description,Bf=e.run,Te("#focus-object").hidden=!1,Te("#focus-object").textContent=qt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ft();for(const[t,i]of Object.entries(hl))i.classList.toggle("selected",t===n)}function Ft(){const n=we.selected,e=kn[n];if(Te("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=js()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Kn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=wi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Wi.card();t=r.action,i=r.description}if(n==="bench"){const r=Xi.card();t=r.action,i=r.description}if(n==="drydock"){const r=Ti.card();t=r.action,i=r.description}if(n==="dash"){const r=di.card();t=r.action,i=r.description}if(n==="quotes"){const r=Ci.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=hi.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Ai.card();t=r.action,i=r.description,s=r.disabled}Ai.controls.hidden=n!=="fork",hi.controls.hidden=n!=="garage",Ci.controls.hidden=n!=="quotes",di.controls.hidden=n!=="dash",Ti.controls.hidden=n!=="drydock",Xi.controls.hidden=n!=="bench",Wi.controls.hidden=n!=="amnesty",wi.controls.hidden=n!=="cellar",Te("#enter-bench")&&(Te("#enter-bench").hidden=n!=="workshop"),Te("#enter-dream07").hidden=n!=="garage",Te("#enter-dream06").hidden=n!=="radio",Te("#enter-dream05").hidden=n!=="stair",Te("#enter-dream03").hidden=n!=="dock",Te("#enter-dream04").hidden=n!=="workshop",Te("#greenhouse-controls").hidden=n!=="greenhouse",Te("#thermal-moves").hidden=Sn.inspect().mode!=="playing",Te("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,Te("#object-description").textContent=i,Te("#object-action").innerHTML=t+" <span>↗</span>",Te("#object-action").disabled=s}Te("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&at.watching()){at.localPlay();return}at.localPlay(),Bf(),fs=performance.now()+2200};Te("#close-card").onclick=()=>Te("#inspector").classList.add("collapsed");function Pn(n){Te("#speech").textContent=n,Ff=performance.now()+4e3,Te("#speech").classList.add("visible")}Te("#markers").onclick=()=>{we.markers=!we.markers,Te("#markers").setAttribute("aria-pressed",we.markers),kf.hidden=!we.markers||!!en||Oe.zoom<.4};let qt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function Gf(){us.width=innerWidth,us.height=innerHeight;const n=innerWidth/innerHeight,e=Qt()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(Qt()?2.8:0),Oe.bottom=-e-(Qt()?2.8:0),Oe.updateProjectionMatrix(),ut.setSize(innerWidth,innerHeight,!1),ut.setPixelRatio(Math.min(devicePixelRatio,Qt()?1.5:2))}function rr(){if(at==null||at.unfollow(),en){dl();return}qt=null,document.body.classList.remove("close-look"),Te("#focus-object").textContent="осмотреть ближе ⊕",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.maxZoom=2.5,Oe.zoom=1,Je.target.copy(hu),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Te("#focus-object").onclick=()=>{if(we.selected){if(qt===we.selected){rr();return}qt=we.selected,document.body.classList.add("close-look"),Te("#focus-object").textContent="весь двор ⌂",Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(kn[we.selected].position),Qt()&&(Je.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork"].includes(qt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork"].includes(qt)?Qt()?1.8:1.6:Qt()?2.5:2.1,qt==="bench"?(Je.maxZoom=4.5,Oe.zoom=Qt()?3.8:3.4,Je.target.y+=Qt()?-.15:0,Je.target.x+=.3,Je.target.z-=.2):Je.maxZoom=2.5,Oe.updateProjectionMatrix()}};Te("#home").onclick=rr;Te("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Je.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Te("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Je.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Te("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",Gf);Gf();function Vf(n,e,t=!1){en&&dl(),rr(),Je.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Te("#inspector").classList.add("collapsed")}function C1(){Vf(0,0);const n=innerWidth/innerHeight,e=Qt()?19.6:9.6;Oe.zoom=Math.min(e*n/(Xs.half*1.57),e/(Xs.half*1.3)),Oe.updateProjectionMatrix()}const Xs=Kx({root:vt,camera:Oe,controls:Je,mobile:Qt,go:Vf,overview:C1,home:rr,locationTarget:()=>["dash","quotes","garage","fork"].includes(qt)&&we.selected===qt?kn[qt].position:null}),Yi=document.createElement("select");Yi.id="world-places";Yi.setAttribute("aria-label","Открыть место");Yi.append(new Option("места",""));for(const[n,e]of Object.entries(kn))Yi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Yi,document.querySelector("#territory-location"));Yi.onchange=()=>{const n=Yi.value;kn[n]&&(rr(),Je.target.copy(kn[n].position),Ki(n),Yi.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const td=new df,nd=new Ee;let ls=null;ut.domElement.addEventListener("pointerdown",n=>{ls={x:n.clientX,y:n.clientY,time:performance.now()}});ut.domElement.addEventListener("pointerup",n=>{if(!ls||Math.hypot(n.clientX-ls.x,n.clientY-ls.y)>7||performance.now()-ls.time>550){ls=null;return}if(ls=null,nd.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),td.setFromCamera(nd,Oe),en)return;const e=td.intersectObjects([Ai.house,hi.house,Ci.house,di.house,Ti.house,Xi.house,Wi.house,wi.house,Sn.house,Ke,Yt,ln,Mn,Jn,nn,Dt,zn,Kn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Ai.house,hi.house,Ci.house,di.house,Ti.house,Xi.house,Wi.house,wi.house,Sn.house,Ke,Yt,ln,Mn,Jn,nn,Dt,zn,Kn.travel].includes(t);)t=t.parent;const i=new Map([[Ai.house,"fork"],[hi.house,"garage"],[Ci.house,"quotes"],[di.house,"dash"],[Ti.house,"drydock"],[Xi.house,"bench"],[Wi.house,"amnesty"],[wi.house,"cellar"],[Sn.house,"greenhouse"],[Ke,"head"],[Yt,"engine"],[ln,"garden"],[Mn,"tea"],[Jn,"radio"],[nn,"dock"],[Dt,"workshop"],[zn,"stair"],[Kn.travel,"dock"]]).get(t);i&&Ki(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(kn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&Ki(t)}});let Tn=null;function R1(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Mu(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}Te("#sound").onclick=async()=>{try{Tn||(Tn=R1()),await Tn.ctx.resume(),we.sound=!we.sound,Tn.gain.gain.setTargetAtTime(we.sound?.08:0,Tn.ctx.currentTime,.3),Te("#sound").textContent=we.sound?"звук включён":"звук выключен",Te("#sound").setAttribute("aria-pressed",we.sound),Mu(),Ft()}catch{Pn("со звуком не сложилось")}};function pi(n=330){if(!Tn||!we.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}Te("#about").onclick=()=>Te("#about-dialog").showModal();Te("#close-about").onclick=Te("#back-to-yard").onclick=()=>Te("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&en){dl();return}n.key==="Escape"&&Te("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Te("#zoom-in").click(),n.key==="-"&&Te("#zoom-out").click(),n.key.toLowerCase()==="r"&&Te("#rotate").click(),n.key.toLowerCase()==="h"&&rr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{at.localPlay(),Sn.step(n.dataset.thermal),fs=performance.now()+2200};const P1={7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Su(){return lt===1?Sn:lt===2?ul:lt===3?eo:lt===4?Dn:lt===5?li:lt===6?ci:qi}function or(){const n=lt===1?Sn.inspect().dreamStep:Su().inspect().step,e=P1[lt];if(Te("#dream-cloud").hidden=lt!==6,Te("#dream-force").hidden=lt!==3,Te("#dream-roofs").hidden=lt!==4,Te("#dream-meter").hidden=lt!==5,Te("#dream-panel .object-kicker").textContent=`СОН 0${lt} / БЕЗНОГИМ`,Te("#dream-panel h2").textContent=e.title,Te("#dream-text").textContent=lt===7?qi.text():lt===6?ci.text():lt===5?li.text():lt===4?Dn.text():e.lines[n],Te("#dream-breathe").textContent=lt===7?qi.button():lt===6?ci.button():lt===5?li.button():lt===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Te("#dream-breathe").disabled=lt===7&&qi.busy()||lt===6&&["heating","raining"].includes(ci.inspect().phase)||lt===4&&Dn.inspect().phase==="flying"||lt===5&&["measuring","unfolding","climbing"].includes(li.inspect().phase),lt===6){const t=ci.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(lt===5){const t=li.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(lt===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function ts(n=1){en||(lt=n,en={target:Je.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:qt,returnId:n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},Su().enter(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.set(0,Qt()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?Qt()?1.65:1.75:Qt()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7),Da="",Te("#dream-panel").hidden=!1,or(),ut.shadowMap.needsUpdate=!0)}function dl(){if(!en)return;const n=en;en=null,Su().exit(),Je.enableDamping=!1,Je.update(),Je.enableDamping=!0,Je.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,qt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Da="",Te("#dream-panel").hidden=!0,ut.shadowMap.needsUpdate=!0,Ki(n.returnId)}Te("#enter-dream").onclick=()=>ts(1);Te("#exit-dream").onclick=dl;Te("#dream-breathe").onclick=()=>{lt===1?Sn.breathe():lt===2?ul.pour():lt===3?eo.toss():lt===4?Dn.send():lt===5?li.act():lt===6?ci.act():qi.act(),fs=performance.now()+2200,or(),ut.shadowMap.needsUpdate=!0};const to=document.createElement("button");to.id="enter-bench";to.hidden=!0;to.textContent="собрать механический монитор ↗";to.onclick=()=>{Ki("bench"),Te("#focus-object").click()};Te("#focus-object").before(to);const fl=document.createElement("button");fl.id="enter-dream02";fl.textContent="сон 02 / вода спит ↗";fl.onclick=()=>ts(2);wi.controls.append(fl);Te("#enter-dream03").onclick=()=>ts(3);Te("#enter-dream04").onclick=()=>ts(4);Te("#enter-dream07").onclick=()=>ts(7);Te("#enter-dream06").onclick=()=>ts(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>ci.choose(n.dataset.cloudTarget);Te("#enter-dream05").onclick=()=>ts(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>li.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),fs=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{eo.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Te("#dream-archive").onclick=()=>Te("#dream-archive-dialog").showModal();Te("#close-dream-archive").onclick=()=>Te("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Te("#dream-archive-dialog").close(),ts(Number(n.dataset.dreamId))};const at=Yx({head:Ke,headDestination:Si,state:we,controls:Je,camera:Oe,refresh:Ft,setAudioTone:Mu,say:Pn,onHarvest:()=>{Ws=.15}});let ec="";const Hf=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])Hf.push(new O(n,e,t));const Wf=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])Wf.push(new O(n,e,t));const Xf=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])Xf.push(new O(n,e,t));const qf=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])qf.push(new O(n,e,t));const Yf=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Yf.push(new O(n,e,t));function L1(){var b,T;const n=qt==="fork"&&we.selected==="fork",e=qt==="garage"&&we.selected==="garage",t=qt==="quotes"&&we.selected==="quotes",i=qt==="dash"&&we.selected==="dash",s=qt==="drydock"&&we.selected==="drydock"||i||t||e||n,r=(qt==="bench"&&we.selected==="bench"||s)&&!Te("#inspector").classList.contains("collapsed")&&!en;if(document.body.classList.toggle("fork-look",r&&n),document.body.classList.toggle("garage-look",r&&e),document.body.classList.toggle("quotes-look",r&&t),document.body.classList.toggle("dash-look",r&&(i||t||e||n)),document.body.classList.toggle("bench-look",r&&!s),document.body.classList.toggle("drydock-look",r&&s),!r){ec="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const o=Te("#inspector").getBoundingClientRect(),a=Te(".territory-nav").getBoundingClientRect(),c=Te(".toolbar").getBoundingClientRect(),l=innerWidth<=900&&innerHeight>innerWidth,u=l?{left:14,right:c.left-10,top:a.bottom+14,bottom:o.top-14}:{left:Math.max(o.right+18,a.right+18),right:c.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!l&&(u.left=a.right+12,u.right=innerWidth-16,u.top=c.bottom+10,u.bottom=o.top-10),(i||t||e||n)&&innerWidth<=900&&!l&&(u.left=12,u.right=o.left-12,u.top=a.bottom+10,u.bottom=Te("footer").getBoundingClientRect().top-12);const d=Te(".resident-history");s&&innerWidth>900&&d&&!d.hidden&&(u.right=Math.min(u.right,d.getBoundingClientRect().left-18));const h=e?hi.inspect():null,p=[];if(h){const v=Math.max(h.gap,h.range,((b=h.flight)==null?void 0:b.range)||0),w=Math.max(h.apex,((T=h.flight)==null?void 0:T.apex)||0);for(const A of[-34,-32+.7*v+1.6])for(const D of[-1.3,Math.max(1.5,.8+.5*w)])for(const G of[-26,-19.8])p.push(new O(A,D,G))}const g=[(h==null?void 0:h.gap)||0,(h==null?void 0:h.range)||0,(h==null?void 0:h.apex)||0,n?17:e?16:t?15:i?14:s?13:12,innerWidth,innerHeight,u.left,u.right,u.top,u.bottom,mn.targetAngle].map(v=>Math.round(v*10)/10).join(":");if(g===ec||u.bottom-u.top<35||u.right-u.left<50)return;ec=g;const _=()=>{Oe.updateMatrixWorld();const v=(n?Wf:e?p:t?Xf:i?qf:s?Yf:Hf).map(w=>Wt(w.clone()));return{l:Math.min(...v.map(w=>w.x)),r:Math.max(...v.map(w=>w.x)),t:Math.min(...v.map(w=>w.y)),b:Math.max(...v.map(w=>w.y))}};let m=_();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((u.right-u.left)/(m.r-m.l),(u.bottom-u.top)/(m.b-m.t))),Oe.updateProjectionMatrix(),m=_();const f=(u.left+u.right-m.l-m.r)/2,M=(u.top+u.bottom-m.t-m.b)/2,E=new O().setFromMatrixColumn(Oe.matrixWorld,0),x=new O().setFromMatrixColumn(Oe.matrixWorld,1),S=E.multiplyScalar(-f*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(x.multiplyScalar(M*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(S),Oe.position.add(S),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let Da="";const $f=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])$f.push(new O(n,e,t));const Zf=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Zf.push(new O(n,e,t));const Jf=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Jf.push(new O(n,e,t));function I1(){if(!en||![4,5,6,7].includes(lt))return;const n=Te("#dream-panel").getBoundingClientRect(),e=Te("footer").getBoundingClientRect(),t=Te(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===Da||r.right-r.left<60||r.bottom-r.top<80)return;Da=o;const a=()=>{Oe.updateMatrixWorld();const g=(lt===7?$f:lt===5?Zf:Jf).map(_=>Wt(_.clone()));return{l:Math.min(...g.map(_=>_.x)),r:Math.max(...g.map(_=>_.x)),t:Math.min(...g.map(_=>_.y)),b:Math.max(...g.map(_=>_.y))}};let c=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Oe.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,u=(r.top+r.bottom-c.t-c.b)/2,d=new O().setFromMatrixColumn(Oe.matrixWorld,0),h=new O().setFromMatrixColumn(Oe.matrixWorld,1),p=d.multiplyScalar(-l*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Je.target.add(p),Oe.position.add(p),Oe.lookAt(Je.target),Oe.updateMatrixWorld()}let id=performance.now(),No=0,sd=0;function Wt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function D1(){at.sync();const n=performance.now(),e=(n-id)/1e3;id=n,No+=e,we.energy=xn.damp(we.energy,we.running?1:0,1.6,e);const t=Af?No*.2:No;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(Je.target.x+Math.sin(mn.angle)*i,Je.target.y+i*Math.SQRT1_2,Je.target.z+Math.cos(mn.angle)*i),Oe.lookAt(Je.target),Je.update(),en||(Je.target.x=xn.clamp(Je.target.x,-62,Xs.half+2),Je.target.z=xn.clamp(Je.target.z,-62,Xs.half+2)),Xs.update(),L1(),I1();for(const s of Qr)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(pn.position.z=xn.damp(pn.position.z,js()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,js()?.4:0,2,e),ol.rotation.z=t*we.energy*.28,gu.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,Rf.material.emissiveIntensity=.45+we.energy*1.5,Ec.uniforms.uTime.value=t,Ec.uniforms.uEnergy.value=we.energy,ll.rotation.z=t*(.09+we.energy*.23),Pf.forEach(s=>s.intensity=.65+we.energy*1.5),pu.intensity=2+we.energy*4,Ke.position.x=xn.damp(Ke.position.x,Si.x,1.6,e),Ke.position.z=xn.damp(Ke.position.z,Si.z,1.6,e),Ke.position.y=xn.damp(Ke.position.y,Si.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=xn.smoothstep(s,0,2);Ke.position.lerpVectors(zf,new O(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Ke.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Ke.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Ke.position.lerpVectors(new O(-6,.65,-3.25),Si,r),Ke.rotation.x=(1-r)*Math.PI*2}we.loop||(Ke.rotation.x=0,Pn("ну вот и дома"),Ft())}if(at.place(),Ke.rotation.y=Math.sin(t*.3)*.12,yu.rotation.y=t*.13,Go.position.x=Ke.position.x,Go.position.z=Ke.position.z,Go.rotation.z=.04*Math.sin(t),Hr.position.x=Ke.position.x,Hr.position.z=Ke.position.z,Ws=xn.damp(Ws,1,.85,e),Wr.scale.y=Ws,Wr.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Pn("чай готов. живём."),Ft(),pi(440))),al.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),vu.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),Of.update(at.watching()),ul.update(e,t),eo.update(e,t),Dn.update(e,t),li.update(e,t),ci.update(e,t),qi.update(e,t),Ai.update(e),hi.update(e),Ci.update(e),di.update(e),Ti.update(e),Xi.update(e),pn.visible=!(qt==="bench"&&we.selected==="bench"&&!Te("#inspector").classList.contains("collapsed")&&!en),Wi.update(e),wi.update(No),Sn.update(e,t),Kn.update(e,t),jl!==we.dockPending&&(jl=we.dockPending,hl.dock.classList.toggle("waiting",jl)),mu.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),Uf.rotation.y=t*.003,we.running&&t-sd>3.5&&(sd=t,pi([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),A1.update(!en&&Oe.zoom>=.4&&we.markers,us.width,us.height),en||n>Ff)Ql.classList.contains("visible")&&Ql.classList.remove("visible");else{_r.copy(Ke.position),_r.y+=1.52,_r.project(Oe);const s=Math.round(Math.max(85,Math.min(us.width-85,(_r.x+1)*us.width*.5))*10)/10,r=Math.round((1-_r.y)*us.height*.5*10)/10;(s!==jh||r!==ed)&&(jh=s,ed=r,Ql.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}fs&&performance.now()>fs&&(ut.shadowMap.needsUpdate=!0,fs=0),ut.render(un,Oe)}we.running&&(Te("#object-action").innerHTML="остановить двор <span>↗</span>");Ft();ut.setAnimationLoop(D1);requestAnimationFrame(()=>Te("#loading").classList.add("done"));window.__yard={state:we,select:Ki,inspect:()=>({resident:at.inspect(),territory:Xs.inspect(),sleepBody:Of.inspect(),sleepDream:ul.inspect(),quietDream:eo.inspect(),pocketDream:qi.inspect(),pocketDreamScreen:qi.inspect().landmarks.map(n=>Wt(new O(...n))),cloudDream:ci.inspect(),cloudDreamScreen:ci.inspect().landmarks.map(n=>Wt(new O(...n))),meterDream:li.inspect(),meterDreamScreen:li.inspect().landmarks.map(n=>Wt(new O(...n))),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>Wt(new O(...n))),roofDreamLetterScreen:Wt(new O(...Dn.inspect().letter)),dreamId:en?lt:null,fork:Ai.inspect(),forkScreen:Wt(new O(-23,.1,-32)),forkScreens:Ai.inspect().landmarks.map(n=>Wt(new O(...n))),garage:hi.inspect(),garageScreen:Wt(new O(...hi.inspect().garage).add(new O(-24,-.7,-24))),garageCarScreen:Wt(new O(-32,-.7,-24)),quotes:Ci.inspect(),quoteScreens:Ci.inspect().quotePositions.map(n=>Wt(new O(...n).add(new O(24,-1.05,24)))),dash:di.inspect(),dashSnailScreen:Wt(new O(...di.inspect().snail).add(new O(0,-1,-24))),dashBeamScreen:Wt(new O(...di.inspect().beam).add(new O(0,-1.5,-24))),drydock:Ti.inspect(),drydockShipScreen:Wt(new O(...Ti.inspect().ship).add(new O(-24,-.5,0))),bench:Xi.inspect(),benchScreen:Wt(new O(-2.65,1.58,-3.18)),benchBucketScreen:Wt(new O(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:Wi.inspect(),amnestyScreen:Wt(new O(0,-.3,24)),cellar:wi.inspect(),cellarScreen:Wt(new O(24,-.3,.25)),objects:Object.keys(kn),greenhouse:Sn.inspect(),dock:Kn.inspect(),boatScreen:Wt(new O(...Kn.inspect().boat).add(new O(0,.2,0))),drawCalls:ut.info.render.calls,triangles:ut.info.render.triangles,gpuGeometries:ut.info.memory.geometries,zoom:Oe.zoom,target:Je.target.toArray(),angle:mn.angle,head:Ke.position.toArray(),roof:pn.position.toArray(),roofOpen:js(),roofMode:we.roof===null?"auto":"manual",pendulums:Qr.map(n=>n.group.rotation.x),growth:Ws,meshes:(()=>{let n=0;return un.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ut.domElement.width,ut.domElement.height]})};M1();
