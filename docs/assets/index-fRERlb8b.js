(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const fs=[3,5,7,9],wp=[3,5,7,1],Zo=16,Ko=[[2,1,4,9],[3,4,1,8],[3,1,5,7]],Tp=["улитка","чайник","кит"],Sd=(n,e)=>n.every((t,i)=>t===e[i]);function gs(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.volumes)&&e.volumes.length===4&&e.volumes.every((a,c)=>Number.isInteger(a)&&a>=0&&a<=fs[c])&&e.volumes.reduce((a,c)=>a+c,0)===16,s=i?e.volumes.slice():wp.slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(Zo,e.used)):0,o=Sd(s,Ko[t])?t===2?"complete":"won":r>=Zo?"spent":"ready";return{round:t,volumes:s,used:r,phase:o,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function bd(n,e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>3||t<0||t>3||e===t)return null;const i=Math.min(n[e],fs[t]-n[t]);if(i<=0)return null;const s=n.slice();return s[e]-=i,s[t]+=i,{volumes:s,amount:i}}function Ap(n,e,t,i){const s=gs(n);let r={ok:!1,reason:"locked"},o=null;if(e==="reset"||e==="all")return{state:gs({round:e==="all"?0:s.round,run:s.run+(e==="all"?1:0),seq:s.seq}),result:{ok:!0},pour:o};if(e==="next"&&s.phase==="won")return{state:gs({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:!0},pour:o};if(e==="pour"&&s.phase==="ready"){const a=bd(s.volumes,t,i);if(!a)return{state:s,result:{ok:!1,reason:"empty"},pour:o};o={a:t,b:i,amount:a.amount,before:s.volumes.slice(),after:a.volumes.slice(),seq:s.seq+1},s.volumes=a.volumes,s.used++,s.seq++,r={ok:!0,amount:a.amount}}return{state:gs(s),result:r,pour:o}}function Cp(n){const e=gs(n);if(e.phase!=="ready")return[];const t=[{v:e.volumes,path:[]}],i=new Set([e.volumes.join(",")]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(Sd(r,Ko[e.round]))return o;if(!(o.length>=Zo-e.used))for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=bd(r,a,c);if(!l)continue;const u=l.volumes.join(",");i.has(u)||(i.add(u),t.push({v:l.volumes,path:[...o,{a,b:c}]}))}}return null}function Rp(n,e,t){return t=Math.max(0,Math.min(1,Number(t)||0)),[-3+2*n+2*(e-n)*t,2.95+Math.sin(t*Math.PI)*1.15,0]}function Pp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,localPlay:f}){const g=s([24,-1.1,-24],e);g.name="cloud-still";const _=i("#45626b",{metalness:.55,roughness:.35}),m=i("#cf9671",{metalness:.6,roughness:.3}),p=i("#e6e5d2"),y=i("#8dd8d4",{emissive:"#8dd8d4",emissiveIntensity:.28}),T=i("#233f49");r([0,-.25,.6],[9.1,.5,7.4],t.concrete,g),r([0,.04,.1],[8.7,.12,3.3],T,g);function x(E,V,te=.6,Q=.5){const R=u(E,V,te,Q,g),L=R.material.map.image;L.width=L.height=128;const k=L.getContext("2d"),F=ne=>{k.fillStyle="#294c52",k.fillRect(0,0,128,128),k.strokeStyle="#e8d7ae",k.lineWidth=4,k.strokeRect(5,5,118,118),k.font="bold 76px monospace",k.fillStyle="#fff3ce",k.textAlign="center",k.textBaseline="middle",k.fillText(ne,64,68),R.material.map.needsUpdate=!0};return F(E),{o:R,draw:F}}const b=[],S=[],A=[];for(let E=0;E<4;E++){const V=-3+2*E,te=fs[E]*.26+.4;r([V,.23,0],[1.45,.36,1.25],_,g);for(let L of[-.5,.5])for(let k of[-.57,.57])c([V+k,.4,L],[V+k,te,L],.025,m,g);r([V,te,0],[1.3,.09,1.15],_,g),l([V,te+.12,0],.23,.04,m,g);for(let L=0;L<fs[E];L++)r([V-.73,.5+L*.26,.4],[.16,.025,.12],y,g);const Q=s([V,.4,0],g);for(let L=0;L<fs[E];L++){const k=s([0,.15+L*.26,0],Q);o([0,0,0],[.4,.17,.28],p,k),o([.2,.04,.12],.15,p,k),o([-.22,0,-.12],.14,y,k),S.push({o:k,i:E,n:L})}b.push(x(""+fs[E],[V,.3,1],.72,.65)),x(""+(E+1),[V,te+.4,0],.5,.45);const R=r([V,.05,.05],[1.7,.06,1.55],y,g);A.push(R)}const v=Array.from({length:16},(E,V)=>o([-3.75+V*.5,.14,1.8],.11,m,g));u("16 ЧАСОВ / ОБЛАКО",[0,.45,-2.7],4.8,.48,g,{size:42});const C=[];for(let E=0;E<3;E++){const V=s([-2.7+E*2.7,.6,3.15],g);a([0,-.2,0],.75,.2,_,V);const te=s([0,.2,0],V);if(C.push(te),E===0){o([0,.3,0],[.5,.43,.35],p,te),o([.45,.05,0],[.7,.17,.25],p,te),o([.96,.28,0],.15,y,te);for(const Q of[-.12,.12])c([.96,.32,Q],[1.02,.65,Q],.035,m,te)}if(E===1){o([0,.3,0],[.5,.4,.45],p,te),a([0,.72,0],.25,.1,y,te),o([0,.83,0],.09,m,te),c([-.3,.35,0],[-.8,.67,0],.15,p,te);const Q=l([.5,.4,0],.3,.08,y,te);Q.rotation.x=Math.PI/2}E===2&&(o([0,.3,0],[.8,.4,.35],p,te),o([-.7,.45,0],[.3,.12,.45],y,te),o([.5,.37,.29],.06,T,te),c([0,.6,0],[0,.95,0],.045,y,te),o([0,1,0],[.28,.08,.15],p,te))}const w=s([0,0,0],g),U=Array.from({length:7},()=>o([0,0,0],[.17,.13,.17],p,w)),X=s([0,0,0],e);for(let E=0;E<19;E++)r([7.8+E*.68,-1.48,-24+Math.sin(E*.33)*.3],[.48,.13,.85],t.cream,X);d(X,[]),d(g,[...S.map(E=>E.o),...b.map(E=>E.o),...A,...v,...C,w]);let G;try{G=gs(JSON.parse(localStorage.getItem("beznogim-still-v1")||"null"))}catch{G=gs()}let z=0,N=1,O=1,W=null,J="",Y=null;const Z=document.createElement("div");Z.id="still-controls",Z.hidden=!0,Z.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>',document.querySelector("#focus-object").before(Z);for(const E of Z.querySelectorAll("select"))for(let V=0;V<4;V++)E.add(new Option("карта "+(V+1),""+V));Z.querySelector("#still-to").value="1";const ee=()=>{try{localStorage.setItem("beznogim-still-v1",JSON.stringify(G))}catch{}},j=()=>O<1;function ce(E=1){const V=j()?W.before.map((Q,R)=>Q+(W.after[R]-Q)*E):G.volumes;for(const Q of S){const R=Math.max(0,Math.min(1,V[Q.i]-Q.n));Q.o.visible=R>.01,Q.o.scale.setScalar(Math.max(.01,R))}w.visible=j(),U.forEach((Q,R)=>{const L=Math.max(0,Math.min(1,E*1.65-R*.09));Q.visible=j()&&L>0&&L<1,Q.position.set(...Rp((W==null?void 0:W.a)||0,(W==null?void 0:W.b)||0,L))});const te=G.round+(G.phase==="won"||G.phase==="complete"?1:0)-(j()&&(G.phase==="won"||G.phase==="complete")?1:0);C.forEach((Q,R)=>Q.visible=R<te),v.forEach((Q,R)=>Q.material=R<G.used?T:m),A.forEach((Q,R)=>{Q.visible=R===z||R===N,Q.material=R===z?m:y})}function le(){Z.querySelector("#still-readout").textContent=`заказ ${G.round+1}/3 · ${Tp[G.round]} · ${G.used}/${Zo} ч
есть: ${G.volumes.join(" / ")}
надо: ${Ko[G.round].join(" / ")}`,Z.querySelector("#still-notice").textContent=j()?"облако переливается…":J,Z.querySelectorAll("select").forEach(E=>E.disabled=j()||G.phase!=="ready"),Z.querySelectorAll("button").forEach(E=>E.disabled=j()),b.forEach((E,V)=>E.draw(""+G.volumes[V]));for(const E of Z.querySelectorAll("select"))for(let V=0;V<4;V++)E.options[V].textContent=`${V+1}: ${G.volumes[V]}/${fs[V]}`;ce(j()?0:1)}function me(E){if(j())return;f(),Y=null;const V=Ap(G,E,z,N);return G=V.state,W=V.pour,O=W?0:1,J=V.result.ok?G.phase==="spent"?"Шестнадцать часов ушли. Облако ещё не то; повтори заказ.":G.phase==="complete"?"Три облака готовы. Кит никуда не торопится.":G.phase==="won"?"Облако собрано. Следующий заказ?":"":"Нечего переливать. Выбери другую пару; час не потрачен.",ee(),le(),h(),V}Z.querySelector("#still-from").onchange=E=>{z=+E.target.value,ce(),h()},Z.querySelector("#still-to").onchange=E=>{N=+E.target.value,ce(),h()},Z.querySelector("#still-reset").onclick=()=>me("reset"),Z.querySelector("#still-all").onclick=()=>me("all"),Z.querySelector("#still-hint").onclick=()=>{if(j())return;const E=Cp(G);Y=(E==null?void 0:E[0])||null,Y?(z=Y.a,N=Y.b,Z.querySelector("#still-from").value=""+z,Z.querySelector("#still-to").value=""+N,J=`Перелей ${z+1} → ${N+1}. До заказа ${E.length} переливов.`):J=G.phase==="ready"?"Часов на этот путь уже не хватит. Повтори заказ.":"Этот заказ окончен.",le(),h()};function I(E,V){j()&&(O=Math.min(1,O+Math.max(0,Math.min(.1,E))/1.65),ce(O),O===1&&(le(),h())),C.forEach((te,Q)=>{te.position.y=.2+Math.sin(V*.7+Q)*.07})}return le(),ee(),{house:g,controls:Z,update:I,run:()=>me(G.phase==="ready"?"pour":G.phase==="won"?"next":G.phase==="complete"?"all":"reset"),card:()=>({action:j()?"облако в трубе…":G.phase==="ready"?`перелить ${z+1} → ${N+1}`:G.phase==="won"?"следующий заказ →":G.phase==="complete"?"новая серия ↺":"повторить заказ ↺",disabled:j(),description:"Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов."}),inspect:()=>({...G,a:z,b:N,progress:O,pour:W,hint:Y,notice:J,goal:Ko[G.round],trophies:C.map(E=>E.visible),puffs:S.map(E=>({visible:E.o.visible,scale:E.o.scale.x})),flow:U.map(E=>E.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})}}const $n=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],Rr=[1,1,2],hc=n=>n===1?1:0;function Ys(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min($n[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===$n[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return hc((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(Rr[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Pr(n){const e=hc(n[0]);return{bay:2*e+hc(n[e+1]),side:e}}function Lp(n){const e=n.slice(),t=Pr(e).side;return e[0]^=1,e[t+1]^=1,e}function Tl(n){return $n.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function Ed(n,e,t){const i=Ys(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:Ys({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:Ys({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<Rr[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Pr(i.switches),c=$n[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:c,success:o===c,before:i.switches.slice()},i.switches=Lp(i.switches),s={ok:!0,bay:o,target:c,success:r.success},r.success?(i.cursor++,i.cursor===$n[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function Ip(n){const e=Ys(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,c)=>a.cost-c.cost||a.path.length-c.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,c]of[["release",null],["flip",0],["flip",1],["flip",2]]){const l=Ed(r,a,c);!l.result.ok||l.state.phase==="spilled"||t.push({s:l.state,path:[...s.path,{action:a,index:c}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function Dp(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),c=o-a;return s[a].map((l,u)=>l+(s[a+1][u]-l)*c+(u===1&&a===3?.5*Math.sin(c*Math.PI):0))}function Np({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,localPlay:f}){const g=s([-23,-1.1,-32],e);g.name="backup-fork";const _=i("#263f46"),m=i("#c5ccbe",{metalness:.65,roughness:.3}),p=i("#e4bc77"),y=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(I=>i(I,{emissive:I,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,g),r([0,-.01,0],[6.6,.1,5.8],_,g);for(const I of[-2.8,2.8])for(const E of[-2.4,2.4])r([I,-.6,E],[.14,1.2,.14],t.metal,g);function T(I,E,V,te,Q){const R=u(I,E,V,te,Q),L=R.material.map.image;L.width=L.height=128;const k=L.getContext("2d");return k.fillStyle="#29464b",k.fillRect(0,0,128,128),k.strokeStyle="#e4dfc8",k.lineWidth=3,k.strokeRect(5,5,118,118),k.fillStyle="#fff1c9",k.font="bold 90px monospace",k.textAlign="center",k.textBaseline="middle",k.fillText(I,64,68),R.material.map.needsUpdate=!0,R}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],b=[-2.8,-.9,.9,2.8],S=(I,E)=>{c(I,E,.075,m,g);for(const V of[-.14,.14])c([I[0]+V,I[1]+.08,I[2]],[E[0]+V,E[1]+.08,E[2]],.025,t.copper,g)};S([0,1.4,-2.5],x[0]);for(let I=0;I<2;I++){S(x[0],x[I+1]);for(let E=0;E<2;E++)S(x[I+1],[b[I*2+E],.4,2])}const A=x.map((I,E)=>{const V=s(I,g);a([0,0,0],.24,.13,t.copper,V);const te=s([0,.13,0],V);return c([0,0,0],[0,.07,.66],.055,p,te),o([0,.07,.66],.14,m,te),T(["А","Б","В"][E],[.48,.38,-.08],.55,.5,V),te}),v=b.map((I,E)=>(a([I,.15,2],.29,.32,t.copper,g),l([I,.37,2],.27,.04,y[E],g),T(String(E+1),[I,.74,2.65],.7,.65,g),o([I,.49,2],[.16,.2,.16],y[E],g))),C=b.map((I,E)=>{const V=s([I,.22,2],g);return r([0,0,0],[.66,.06,.7],y[E],V),V}),w=o([0,1.57,-2.5],.18,y[0],g),U=o([0,1.57,-2.5],.18,y[0],g),X=s([4,-.3,2.5],g);a([0,0,0],.4,.55,_,X),l([0,.28,0],.4,.045,m,X);const G=o([0,.21,0],.18,p,X);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,g);const z=Array.from({length:12},(I,E)=>{const V=s([3.6+E%2*.57,.18,-1.9+Math.floor(E/2)*.48],g);return a([0,0,0],.12,.14,_,V),o([0,.16,0],.13,y[$n.flat()[E]],V)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,g,{size:42});for(let I=0;I<4;I++)r([-25,-1.42,-28.7-I*.62],[.7,.1,.44],t.cream,e);d(g,[...A.map(I=>I.parent),...v,...C,w,U,X,...z]);let N;try{N=Ys(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{N=Ys()}let O=null,W=1,J="",Y=null;const Z=document.createElement("div");Z.id="fork-controls",Z.hidden=!0,Z.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((I,E)=>`<button id="fork-flip-${E}" aria-label="Переключить развилку ${I}">${I} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before(Z);function ee(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(N))}catch{}}const j=()=>W<1;function ce(){const I=$n[N.wave].slice(N.cursor).map(te=>te+1).join(" → ")||"всё на месте";Z.querySelector("#fork-readout").textContent=`волна ${N.wave+1}/3 · сохранено ${Tl(N)}/12
очередь: ${I}
ручные щелчки ${N.used}/${Rr[N.wave]} · путь сейчас → ${Pr(N.switches).bay+1}`,Z.querySelector("#fork-notice").textContent=j()?"катится…":J;const E=j()&&O?O.before:N.switches;A.forEach((te,Q)=>{te.rotation.y=(E[Q]?1:-1)*.68;const R=Z.querySelector("#fork-flip-"+Q);R.textContent=["А","Б","В"][Q]+(N.switches[Q]?" →":" ←"),R.setAttribute("aria-pressed",String(!!N.switches[Q])),R.disabled=j()||N.phase!=="ready"||N.used>=Rr[N.wave],R.classList.toggle("hinted",(Y==null?void 0:Y.action)==="flip"&&Y.index===Q)});for(const te of Z.querySelectorAll(".fork-tools button"))te.disabled=j();w.visible=N.phase==="ready"&&!j(),w.material=y[$n[N.wave][N.cursor]||0];const V=N.cursor-(j()&&(O!=null&&O.success)?1:0);v.forEach((te,Q)=>te.visible=$n[N.wave].slice(0,V).includes(Q)),C.forEach((te,Q)=>te.visible=Pr(E).bay===Q),z.forEach((te,Q)=>te.visible=Q<Tl(N)-(j()&&(O!=null&&O.success)?1:0)),G.visible=N.phase==="spilled"&&!j(),G.material=y[$n[N.wave][N.cursor]||0],U.visible=j()}function le(I,E){if(j())return;f(),Y=null;const V=Ed(N,I,E);return N=V.state,O=V.shot,W=O?0:1,J=V.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":N.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":N.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":N.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",ee(),ce(),h(),V}["А","Б","В"].forEach((I,E)=>Z.querySelector("#fork-flip-"+E).onclick=()=>le("flip",E)),Z.querySelector("#fork-reset").onclick=()=>le("restart"),Z.querySelector("#fork-all").onclick=()=>le("all"),Z.querySelector("#fork-hint").onclick=()=>{if(j())return;const I=Ip(N);Y=(I==null?void 0:I[0])||null,J=Y?Y.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][Y.index]}.`:N.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",ce(),h()};function me(I){if(!j())return;const E=W;W=Math.min(1,W+Math.min(.1,Math.max(0,I))/2.8),U.position.set(...Dp(O,W)),U.position.y+=.17,U.material=y[O.target],W===1&&E<1&&(ce(),h())}return ce(),ee(),{house:g,controls:Z,update:me,run:()=>le(N.phase==="complete"?"all":N.phase==="rounddone"?"next":N.phase==="spilled"?"restart":"release"),card:()=>({action:j()?"лампочка катится…":N.phase==="complete"?"новая серия ↺":N.phase==="rounddone"?"следующая волна →":N.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:j(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...N,saved:Tl(N),queue:$n[N.wave],limit:Rr[N.wave],path:Pr(N.switches).bay,progress:W,shot:O,notice:J,hinted:Y,rolling:U.position.toArray(),archive:z.map(I=>I.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function Up(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function eh(n){const e=n.state||{},t=(l,u,d,h)=>Number.isFinite(l)?Math.max(u,Math.min(d,Math.floor(l))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=l=>l&&typeof l=="object"?{seq:t(l.seq,1,999999,1),range:t(l.range,1,18,3),apex:Number.isFinite(l.apex)?Math.max(.5,Math.min(9,l.apex)):.5,end:Number.isFinite(l.end)?Math.max(0,Math.min(18,l.end)):0,outcome:["landed","short","far","bumped"].includes(l.outcome)?l.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const l=n.args||{};if(n.tool==="launch"&&l.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&l.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(l.power)||l.power<1||l.power>6||!Number.isInteger(l.angle)||l.angle<1||l.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=l.power,r.angle=l.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&l.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],d=r.power*(4-r.angle),h=r.power*r.angle/2,f=u.gap/2/d,g=f<=1?4*h*f*(1-f):0,_=f<=1&&g<u.barrier?"bumped":d<u.gap?"short":d>u.gap?"far":"landed";r.flight={seq:r.seq,range:d,apex:h,end:_==="bumped"?u.gap/2:d,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:d,apex:h,clearance:g,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],c={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:c[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function Op({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var k,F,ne;const g=s([-24,-1.5,-24],e);g.name="pneumatic-garage-range";const _=i("#eee0b7"),m=i("#29464b"),p=i("#d87b4d"),y=i("#94b9a0"),T=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,g),r([0,.24,0],[20,.1,5],m,g);for(let D=-9;D<10;D++)r([D,.31,2],[.55,.03,.06],_,g);const x=s([-8,.45,0],g);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],T,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const D of[-.35,.35])for(const K of[-.35,.35])o([D,.04,K],[.16,.16,.1],m,x);const b=s([-8,.37,0],g);b.name="flying-garage";for(const D of[-.9,.9])r([D,.74,0],[.12,1.5,1.6],y,b);r([0,.74,-.75],[1.8,1.5,.12],y,b),r([0,1.35,.76],[1.7,.27,.12],_,b);for(const D of[-1,1]){const K=r([D*.49,1.69,0],[1.16,.13,1.95],p,b);K.rotation.z=D*-.32}l("Г",[0,1.4,.86],.42,.29,b,{size:70});const S=[];for(const D of[-.74,.74])for(const K of[-.59,.59])a([D,-.04,K],.15,.23,t.metal,b),S.push(r([D,-.32,K],[.12,.5,.12],_,b));const A=s([0,.35,0],g);r([0,0,0],[2.5,.12,2.2],_,A),r([0,.07,0],[1.95,.035,1.65],y,A),l("ПОСАДКА",[0,.24,1.18],2.2,.3,A,{size:50});const v=s([0,.34,0],g),C=r([0,.5,0],[.32,1,2.1],p,v);for(const D of[-1.2,1.2])c([0,0,D],[0,3.4,D],.04,t.metal,v);const w=l("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),U=s([0,.33,0],g);r([0,0,0],[1.6,.12,2],t.copper,U);for(let D=0;D<5;D++)r([0,.1+D*.12,0],[1.1,.04,1.4],_,U);const X=s([-8,.6,3.4],g);a([0,.65,0],.4,1.3,t.copper,X),c([0,1.3,0],[0,1.8,0],.07,m,X),c([-.5,1.8,0],[.5,1.8,0],.07,m,X);const G=Array.from({length:6},(D,K)=>r([.7,.14+K*.24,0],[.24,.17,.12],y,X)),z=s([3,.6,3.7],g);r([0,0,0],[3.8,.2,.9],t.copper,z);const N=Array.from({length:3},(D,K)=>{const ie=s([-1.1+K*1.1,.2,0],z);return r([0,.1,0],[.65,.2,.55],m,ie),o([0,.56,0],[.3,.34,.27],_,ie),r([0,.57,.22],[.39,.19,.08],m,ie),ie});l("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,g,{size:55}),l("МАШИНА ДОМА",[-8,.9,2],2.8,.32,g,{size:50});for(let D=0;D<21;D++)r([-24,-1.42,-6-D*.65],[.9,.12,.49],t.cream,e);u(b,S),u(g,[x,b,A,v,U,X,z]);let O=null,W=((ne=(F=(k=window.__beznogimState)==null?void 0:k.mechanics)==null?void 0:F.garage)==null?void 0:ne.public)||null,J,Y="",Z="",ee=null,j=1,ce="";try{O=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function le(D,K,ie={}){const q=eh({mode:D,tool:K,args:ie,state:O});O=q.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(O))}catch{}return q}le("migrate");const me=document.createElement("div");me.id="garage-controls",me.hidden=!0,me.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(D=>`<option>${D}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(D=>`<option>${D}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(me);const I=()=>W&&h()?W:eh({mode:"migrate",state:O}).public,E=()=>W&&h()?"resident":"sandbox";function V(D,K){var q;if(j<1)return;f();const ie=le("action",D,K);return ce=((q=ie.result)==null?void 0:q.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",R(0),d(),ie}me.querySelector("#garage-pump").onclick=()=>V("pump",{power:Number(me.querySelector("#garage-power").value),angle:Number(me.querySelector("#garage-angle").value)}),me.querySelector("#garage-reset").onclick=()=>V("launch",{mode:"restart"});function te(){if(!J)return;const D=J;me.querySelector("#garage-readout").textContent=`испытание ${D.level}/3 · пролёт ${D.gap} · пробка ${D.barrier}
воздух ${D.air}/6 · дальность ${D.range} · вершина ${D.apex}
посадки ${D.landed}/3 · попытки ${D.attempts}`,me.querySelector("#garage-notice").textContent=ce;for(const K of me.querySelectorAll("select,#garage-pump"))K.disabled=j<1||["landed","complete"].includes(D.phase);me.querySelector("#garage-reset").disabled=j<1}function Q(D){const K=!J||Z!==E()||J.run!==D.run;Z=E(),K?(ee=D.flight,j=1,ce=""):D.flight&&(!J.flight||J.flight.seq!==D.flight.seq)?(ee=D.flight,j=0):D.flight||(ee=null,j=1),J=D,me.querySelector("#garage-power").value=D.power,me.querySelector("#garage-angle").value=D.angle,A.position.x=-8+D.gap*.7,v.position.x=-8+D.gap*.35,C.scale.y=D.barrier*.5,C.position.y=D.barrier*.25,w.position.y=D.barrier*.5+.4,N.forEach((ie,q)=>ie.visible=q<D.landed),G.forEach((ie,q)=>ie.visible=q<D.air),te()}function R(D){D=Math.min(.1,Math.max(0,D));const K=I(),ie=E()+":"+JSON.stringify(K);ie!==Y&&(Y=ie,Q(K),d());const q=j;j=Math.min(1,j+D/3.6);const{x:ae,y:ye}=Up(ee,j);b.position.set(-8+ae*.7,.37+ye*.5,0),b.rotation.z=j<1?Math.sin(j*Math.PI*2)*.045:0,U.visible=!!ee&&["short","far"].includes(ee.outcome),U.position.x=-8+((ee==null?void 0:ee.range)||0)*.7,S.forEach(Se=>Se.visible=j>0&&j<.65),q<1&&j===1&&(te(),d())}const L=()=>({action:E()==="resident"?"попробовать свой гараж":j<1?"гараж в воздухе…":J.phase==="complete"?"новая серия ↺":J.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(E()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+J.message,disabled:j<1});return window.addEventListener("beznogim:state",({detail:D})=>{var ie,q;const K=(q=(ie=D.mechanics)==null?void 0:ie.garage)==null?void 0:q.public;K&&(W=K)}),Q(I()),Y=E()+":"+JSON.stringify(I()),R(0),{house:g,controls:me,update:R,card:L,run:()=>V("launch",{mode:J.phase==="complete"?"restart":J.phase==="landed"?"next":"jump"}),inspect:()=>({source:E(),...J,progress:j,notice:ce,garage:b.position.toArray(),car:x.position.toArray(),trophies:N.map(D=>D.visible)})}}const br=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function Al(n){const e=n.state||{},t=(u,d,h,f)=>Number.isFinite(u)?Math.max(d,Math.min(h,Math.floor(u))):f,i=t(e.planted,0,3,0),s=Math.min(2,i),r=br[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let c=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",c={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")c={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:br[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),c={ok:!0};else if(n.tool==="hint")c=Fp(a);else if(!["slide","plant"].includes(n.tool))c={ok:!1,reason:"unknown_tool"};else if(a.planted===3)c={ok:!1,reason:"complete"};else if(n.tool==="slide"){const d={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(d,u.direction))c={ok:!1,reason:"invalid_arguments"};else{const[h,f]=d[u.direction],g=a.positions[u.piece];let _=g%5,m=Math.floor(g/5);for(;_+h>=0&&_+h<5&&m+f>=0&&m+f<5&&!r.rocks.includes((m+f)*5+_+h)&&(m+f)*5+_+h!==a.positions[1-u.piece];)_+=h,m+=f;const p=m*5+_;a.positions[u.piece]=p,p!==g?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",c={ok:p!==g,from:g,to:p,reason:p===g?"blocked":"slid"}}}else a.positions.some((d,h)=>d!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",c={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=br[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",c={ok:!0,trees:a.planted*2})}const l=br[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:l.rocks,goals:l.goals,size:5},result:c,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function Fp(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=br[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((c,l)=>c===e.goals[l]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let c=0;c<2;c++)for(const[l,[u,d]]of Object.entries(s)){let h=o[c]%5,f=Math.floor(o[c]/5);for(;h+u>=0&&h+u<5&&f+d>=0&&f+d<5&&!e.rocks.includes((f+d)*5+h+u)&&(f+d)*5+h+u!==o[1-c];)h+=u,f+=d;const g=o.slice();g[c]=f*5+h;const _=g.join(",");i.has(_)||(i.add(_),t.push([g,[...a,{piece:c,direction:l}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function zp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var R,L,k;const g=s([24,-1.5,24],e);g.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),m=i("#274644"),p=i("#f2e3b9"),y=i("#dfaf57"),T=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,g),r([0,.17,1.5],[7.25,.14,7.25],m,g);const b=F=>[(F%5-2)*1.35,.46,(Math.floor(F/5)-2)*1.35+1.5],S=[];for(let F=0;F<25;F++){const[ne,,D]=b(F);S.push(r([ne,.27,D],[1.27,.12,1.27],_,g))}const A=Array.from({length:6},()=>{const F=s([0,0,0],g);return r([0,.24,0],[1.05,.42,1.05],t.concrete,F),r([0,.49,0],[.9,.08,.9],t.metal,F),F}),v=[1,3].map((F,ne)=>{const D=b(F),K=s([D[0],.4,D[2]],g);return r([0,-.02,0],[1.23,.07,1.23],ne?T:y,K),r([0,.025,0],[1.03,.04,1.03],p,K),l(ne?"»":"«",[0,.14,.38],.72,.55,K,{size:105}),K});function C(F){const ne=s(b(F?24:20),g);for(let D=0;D<2;D++){const K=(D-.5)*.34,ie=F?-1:1;c([K+ie*.22,.92,0],[K-ie*.16,.5,0],.065,F?T:y,ne),c([K-ie*.16,.5,0],[K+ie*.22,.08,0],.065,F?T:y,ne)}return r([0,-.07,0],[.98,.09,.5],t.metal,ne),ne}const w=[C(0),C(1)],U=w.map(F=>r([0,-.13,0],[1.1,.04,.67],p,F));for(const F of[-3.9,0,3.9])r([F,.75,-2.05],[.18,1.25,.18],t.copper,g),r([F,1.39,-2.05],[.32,.12,.32],p,g);for(const F of[-2.8,2.8])r([F,.8,-2.05],[1.85,.14,.14],t.copper,g);const X=Array.from({length:6},(F,ne)=>{const D=s([-3.5+ne%3*3.5,.3,-3.5-Math.floor(ne/3)*1.9],g);a([0,.45,0],.12,.9,t.copper,D);for(let K=0;K<3;K++){const ie=new n.Mesh(new n.ConeGeometry(.87-K*.17,1.3,5),x);ie.position.y=.95+K*.56,ie.castShadow=!0,D.add(ie)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,D),D});l("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,g,{size:44}),l("СЕВЕР",[0,1.52,-2.05],1.45,.33,g,{size:60});for(let F=0;F<23;F++)r([24,-1.42,6.6+F*.54],[1,.13,.43],t.cream,e);u(g,[...A,...w,...v,...X]);let G=null,z=((k=(L=(R=window.__beznogimState)==null?void 0:R.mechanics)==null?void 0:L.quotes)==null?void 0:k.public)||null,N,O="",W="",J=0,Y="",Z=0,ee=Array(6).fill(0),j=[null,null];try{G=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function ce(F,ne,D={}){const K=Al({mode:F,tool:ne,args:D,state:G});G=K.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(G))}catch{}return K}ce("migrate");const le=document.createElement("div");le.id="quotes-controls",le.hidden=!0,le.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(le);const me=()=>z&&h()?z:Al({mode:"migrate",state:G}).public;function I(F,ne={}){if(Z>0)return;f(),Y="";const D=ce("action",F,ne);return O="",te(0),d(),D}for(const F of le.querySelectorAll("[data-quote]"))F.onclick=()=>{J=Number(F.dataset.quote),Y="",E()};for(const F of le.querySelectorAll("[data-slide]"))F.onclick=()=>I("slide",{piece:J,direction:F.dataset.slide});le.querySelector("#quotes-pair").onclick=()=>I("restart",{scope:"pair"}),le.querySelector("#quotes-hint").onclick=()=>{const F=Al({mode:"action",tool:"hint",state:me()}).result;Y=F.status==="route"?`${F.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[F.next.direction]} · осталось ходов: ${F.remaining}`:F.status==="aligned"?"Обе на месте. Выпускай.":F.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",E()};function E(){if(N){le.querySelector("#quotes-readout").textContent=`пара ${N.level}/3 · ели ${N.trees}/6 · ходы ${N.moves}`,le.querySelector("#quotes-hint-text").textContent=Y;for(const F of le.querySelectorAll("[data-quote]"))F.setAttribute("aria-pressed",Number(F.dataset.quote)===J);for(const F of le.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))F.disabled=Z>0||N.phase==="complete";U.forEach((F,ne)=>F.visible=ne===J&&N.phase!=="complete")}}function V(F){const ne=z&&h()?"resident":"sandbox",D=N,K=!D||D.run!==F.run||ne!==W;W=ne,K?(w.forEach((ie,q)=>ie.position.set(...b(F.positions[q]))),ee=X.map((ie,q)=>q<F.trees?1:0),j=[null,null],Z=0):F.planted>D.planted?(Z=1.4,j=w.map((ie,q)=>({from:ie.position.clone(),to:X[(F.planted-1)*2+q].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):F.planted!==D.planted&&(ee=X.map((ie,q)=>q<F.trees?1:0)),N=F,A.forEach((ie,q)=>{if(ie.visible=q<F.rocks.length,ie.visible){const ae=b(F.rocks[q]);ie.position.set(ae[0],.3,ae[2])}}),E()}function te(F){F=Math.min(.1,Math.max(0,F));const ne=me(),D=(z&&h()?"resident:":"sandbox:")+JSON.stringify(ne);D!==O&&(O=D,V(ne),d());const K=Z>0;Z=Math.max(0,Z-F);for(let ie=0;ie<2;ie++){const q=w[ie],ae=j[ie];if(ae&&Z>0)ae.t=Math.min(1,ae.t+F/1.4),q.position.lerpVectors(ae.from,ae.to,ae.t*ae.t*(3-2*ae.t)),q.position.y+=Math.sin(ae.t*Math.PI)*.9,q.scale.setScalar(1-ae.t*.8);else{j[ie]=null,q.scale.setScalar(1);const ye=b(ne.positions[ie]);q.position.x=n.MathUtils.damp(q.position.x,ye[0],12,F),q.position.y=.46,q.position.z=n.MathUtils.damp(q.position.z,ye[2],12,F)}q.visible=!!j[ie]||ne.phase!=="complete"}X.forEach((ie,q)=>{const ae=q<ne.trees?1:0;ee[q]=n.MathUtils.damp(ee[q],ae,Z>0?1:5,F),ie.visible=ee[q]>.003,ie.scale.setScalar(Math.max(.001,ee[q]))}),K&&Z===0&&(E(),d())}const Q=()=>({action:z&&h()?"попробовать свои ёлочки":N.phase==="complete"?"новый питомник ↺":Z>0?"пролезают…":"выпустить пару",description:(z&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+N.message,disabled:Z>0});return window.addEventListener("beznogim:state",({detail:F})=>{var D,K;const ne=(K=(D=F.mechanics)==null?void 0:D.quotes)==null?void 0:K.public;ne&&(z=ne)}),V(me()),O=(z&&h()?"resident:":"sandbox:")+JSON.stringify(me()),te(0),{house:g,controls:le,update:te,card:Q,run:()=>I(N.phase==="complete"?"restart":"plant",N.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:z&&h()?"resident":"sandbox",...N,busy:Z,selected:J,hint:Y,quotePositions:w.map(F=>F.position.toArray()),treeScales:ee.slice(),visibleTrees:X.filter(F=>F.visible).length})}}function th(n){const e=n.state||{},t=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function kp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var V,te,Q;const g=s([0,-1.5,-24],e);g.name="punctuation-post";const _=i("#28464d"),m=i("#eee4c9"),p=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,g),r([0,.2,0],[14,.14,7],t.dark,g),r([0,.3,0],[13.6,.04,6.6],p,g);const y=s([0,0,0],g),T=s([0,0,0],g);for(const[R,L]of[[y,"ОТ"],[T,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,R),r([0,1.32,0],[2.12,.12,3.3],m,R),l(L,[0,.9,1.66],1,.36,R,{size:60});const x=s([0,1.43,0],g),b=s([0,0,0],x),S=s([0,0,0],x),A=r([-.5,0,0],[1,.15,.56],_,b),v=r([.5,0,0],[1,.15,.56],_,S),C=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,g)),w=s([0,1.47,0],g);w.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,w),o([-.08,.46,0],[.39,.42,.29],t.copper,w),c([-.08,.47,.3],.23,.033,m,w,[0,0,0]),c([-.08,.47,.315],.12,.03,m,w,[0,0,0]);for(const R of[-.13,.13])a([.4,.17,R],[.62,.46,R],.02,t.leaf,w),o([.62,.46,R],[.055,.065,.055],_,w);r([-.16,.92,0],[.46,.32,.065],m,w),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,w),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,w);const U=s([0,.4,3.9],g);r([0,0,0],[3.6,.22,1],t.copper,U);const X=[".","?","!"].map((R,L)=>{const k=s([-1.1+L*1.1,.42,0],U);return r([0,0,0],[.8,.65,.11],m,k),l(R,[0,.02,.075],.55,.5,k,{size:100}),k});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,g,{size:52});const G=s([0,.55,2.5],g);r([0,0,0],[10,.1,.4],t.copper,G);for(let R=-4;R<=4;R++)r([R,.07,0],[.035,.025,.26],_,G),l(String(R),[R,.08,.32],.4,.28,G,{size:45});for(let R=0;R<16;R++)r([1.5,-.1-R*.09,-5.9-R*.72],[1.05,.14,.65],t.cream,e);for(let R=0;R<8;R++)r([1.5,-1.45,-17.6-R*.5],[1.05,.14,.45],t.cream,e);const z=s([-6.9,.3,3.9],g);a([0,0,0],[0,2.7,0],.07,t.metal,z),r([0,2.7,0],[.8,.14,.8],t.metal,z),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),z),u(w,[]),u(y,[]),u(T,[]),u(g,[y,T,x,...C,w,U]);let N=null,O=((Q=(te=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:te.dash)==null?void 0:Q.public)||null,W,J="",Y=1,Z=0;try{N=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function ee(R,L,k={}){const F=th({mode:R,tool:L,args:k,state:N});N=F.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(N))}catch{}return F}ee("migrate");const j=document.createElement("div");j.id="dash-controls",j.hidden=!0,j.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(R,L)=>`<option value="${L+1}">${L+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(R=>`<option value="${R}">${R>0?"+":""}${R}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(j);const ce=()=>O&&h()?O:th({mode:"migrate",state:N}).public;function le(R,L){f(),ee("action",R,L),J="",I(0),d()}j.querySelector("#dash-tune").onclick=()=>le("tune",{span:Number(j.querySelector("#dash-span").value),shift:Number(j.querySelector("#dash-shift").value)}),j.querySelector("#dash-reset").onclick=()=>le("reset");function me(R){const L=["delivered","complete"].includes(R.phase);L?!W||W.run!==R.run||W.round!==R.round?Y=1:["delivered","complete"].includes(W.phase)||(Y=0):Y=0,W=R,j.querySelector("#dash-readout").textContent=`почта ${R.delivered}/3 · пролёт ${R.gap} · центр ${R.center>0?"+":""}${R.center} · попытки ${R.attempts}`,j.querySelector("#dash-span").value=R.span,j.querySelector("#dash-shift").value=R.shift;for(const k of j.querySelectorAll("select,#dash-tune"))k.disabled=L;y.position.x=R.center-R.gap/2-1,T.position.x=R.center+R.gap/2+1,C[0].position.x=R.center-R.gap/2,C[1].position.x=R.center+R.gap/2,x.position.x=R.shift,A.scale.x=v.scale.x=R.span/2,A.position.x=-R.span/4,v.position.x=R.span/4,X.forEach((k,F)=>k.visible=F<R.delivered)}function I(R){const L=ce(),k=JSON.stringify(L);k!==J&&(J=k,me(L),d()),Y=["delivered","complete"].includes(L.phase)?Math.min(1,Y+R/4):0,Z=n.MathUtils.damp(Z,L.phase==="bent"?.22:0,6,R),b.rotation.z=Z,S.rotation.z=-Z,x.position.y=1.43-Math.sin(Z)*L.span/2,w.position.x=y.position.x+(T.position.x-y.position.x)*(Y*Y*(3-2*Y)),w.position.y=1.47,w.rotation.z=Y>0&&Y<1?Math.sin(Y*30)*.025:0}const E=()=>{const R=W||ce();return{action:O&&h()?"попробовать свою почту":R.phase==="complete"?"новая почта ↺":R.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(O&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+R.message}};return window.addEventListener("beznogim:state",({detail:R})=>{var k,F;const L=(F=(k=R.mechanics)==null?void 0:k.dash)==null?void 0:F.public;L&&(O=L)}),me(ce()),J=JSON.stringify(ce()),w.position.x=Y===1?T.position.x:y.position.x,{house:g,controls:j,update:I,card:E,run:()=>{if(Y>0&&Y<1)return;const R=ce().phase;le(R==="complete"?"reset":R==="delivered"?"next":"cross")},inspect:()=>({source:O&&h()?"resident":"sandbox",...W,walk:Y,bend:Z,snail:w.position.toArray(),beam:x.position.toArray(),left:y.position.x,right:T.position.x,stamps:X.map(R=>R.visible)})}}function nh(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Bp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:f,localPlay:g}){var te,Q,R;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const m=i("#d0b987"),p=i("#556f7f"),y=i("#a65d42"),T=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const L of[-2,2])r([.5,.96,L],[12.9,1.1,.22],t.copper,_);for(const L of[-6,7])r([L,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(L,k)=>r([-4+k*2,.98,0],[1.9,1,3.7],m,_)),b=r([.5,.54,0],[12.6,.04,3.75],T,_);b.castShadow=!1;const S=Array.from({length:3},(L,k)=>{const F=s([-4+k*2,.35,3.05],_);for(let ne=0;ne<5;ne++)o([(ne-2)*.27,.16+ne%2*.1,0],[.32,.22,.4],m,F);return F}),A=s([-2,1.3,0],_);A.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([L,k],F)=>F?v.lineTo(L,-k):v.moveTo(L,-k)),v.closePath();const C=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});C.rotateX(-Math.PI/2);const w=new n.Mesh(C,p);w.castShadow=!0,w.receiveShadow=!0,A.add(w),r([-.45,.7,0],[4.9,.09,1.4],t.cream,A);for(let L=0;L<3;L++){r([-.95+L*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][L],A);for(const k of[-.601,.601])for(let F=0;F<4;F++)r([-.95+L*.92-.3+F*.2,1.03,k],[.024,.5,.025],t.dark,A)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,A),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,A);for(const L of[-.63,.63])r([-2.25,1.6,L],[.73,.16,.03],t.dark,A);a([-2.45,1.98,0],.15,.43,y,A),a([-2.45,2.21,0],.15,.05,t.dark,A),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,A),r([2.55,1.7,0],[.48,.26,.03],t.cream,A);for(const L of[-2.9,2.1])for(const k of[-.7,.7])c([L,.7,k],[L,1,k],.025,t.cream,A);for(const L of[-.7,.7])c([-2.9,1,L],[2.1,1,L],.025,t.cream,A);const U=s([5.9,1.1,3.4],_);l([0,0,0],.4,.04,t.copper,U,[0,0,0]);for(let L=0;L<4;L++){const k=L*Math.PI/2;c([0,0,0],[.4*Math.cos(k),.4*Math.sin(k),0],.025,t.copper,U)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const X=r([5.9,.8,1.75],[.19,.55,.19],T,_);X.castShadow=!1;const G=s([0,.29,0],_);for(const L of[-2.9,2.9])r([.5,0,L],[13,.02,1.1],T,G);for(let L=0;L<3;L++)u(["КОРМА","ТРЮМ","НОС"][L],[-4+L*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const L of[-6.6,6.6])c([L,.3,-3.8],[L,3.6,-3.8],.08,t.metal,_),r([L,3.6,-3.5],[.55,.16,.8],t.metal,_),r([L,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let L=0;L<15;L++)r([-7.2-L*.72,-.03-L*.09,1.2],[.65,.14,1.12],t.cream,e);const z=s([-6.5,.5,3.3],_);c([0,0,0],[0,1.5,0],.045,t.copper,z),r([0,.1,0],[.32,.35,.08],t.metal,z),l([0,1.53,0],.1,.025,t.metal,z,[0,0,0]),d(A,[]),d(_,[...x,...S,b,A,U,X,G]);let N=null,O=((R=(Q=(te=window.__beznogimState)==null?void 0:te.mechanics)==null?void 0:Q.drydock)==null?void 0:R.public)||null,W,J="",Y=0,Z=0,ee=0;try{N=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function j(L,k,F={}){const ne=nh({mode:L,tool:k,args:F,state:N});N=ne.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(N))}catch{}return ne}j("migrate");const ce=document.createElement("div");ce.id="drydock-controls",ce.hidden=!0,ce.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(ce);function le(){return O&&f()?O:nh({mode:"migrate",state:N}).public}function me(L,k){g(),j("action",L,k),J="",V(0),h()}ce.querySelectorAll("[data-dig]").forEach(L=>L.onclick=()=>me("dig",{channel:Number(L.dataset.dig)})),ce.querySelector("#drydock-fill").onclick=()=>me("pump",{direction:"fill"}),ce.querySelector("#drydock-drain").onclick=()=>me("pump",{direction:"drain"}),ce.querySelector("#drydock-reset").onclick=()=>me("reset");function I(L){W?(W.water!==L.water&&(Y=2),W.floods!==L.floods&&(Z=3),!W.launched&&L.launched&&(ee=0)):ee=L.launched?1:0,W=L,ce.querySelector("#drydock-readout").textContent=`каналы ${L.depths.join(" / ")} · вода ${L.water}/2 · переливы ${L.floods}`,ce.querySelectorAll("[data-dig]").forEach(k=>{k.disabled=L.launched||L.water>0||L.depths[Number(k.dataset.dig)]===2}),ce.querySelector("#drydock-fill").disabled=L.launched,ce.querySelector("#drydock-drain").disabled=L.launched||L.water===0,x.forEach((k,F)=>{const ne=1-L.depths[F]*.4;k.scale.y=ne,k.position.y=.48+ne/2,S[F].scale.setScalar(.45+L.depths[F]*.4)}),b.visible=L.water>0,b.position.y=.49+L.water*.39}function E(){const L=W||le();return{action:O&&f()?"попробовать свой спуск":L.launched?"корабль в песок ↺":"спустить корабль",description:(O&&f()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+L.message}}function V(L){const k=le(),F=JSON.stringify(k);F!==J&&(J=F,I(k),h()),Y=Math.max(0,Y-L),Z=Math.max(0,Z-L),X.visible=Y>0&&k.water>0,G.visible=Z>0,U.rotation.z+=Y>0?L*3:0,ee=k.launched?Math.min(1,ee+L/5):0;const ne=ee*ee*(3-2*ee);A.position.x=-2+ne*5.6;const D=Math.min(...k.depths),K=k.afloat?.94:1.15-D*.32;A.position.y=n.MathUtils.damp(A.position.y,K,4,L),A.rotation.z=n.MathUtils.damp(A.rotation.z,k.afloat?0:(k.depths[2]-k.depths[0])*.085,4,L)}return window.addEventListener("beznogim:state",({detail:L})=>{var F,ne;const k=(ne=(F=L.mechanics)==null?void 0:F.drydock)==null?void 0:ne.public;k&&(O=k,J="")}),I(le()),A.position.x=le().launched?3.6:-2,{house:_,controls:ce,update:V,card:E,run:()=>me(le().launched?"reset":"launch"),inspect:()=>({source:O&&f()?"resident":"sandbox",...W,ship:A.position.toArray(),pitch:A.rotation.z,waterY:b.position.y,voyage:ee,sandHeights:x.map(L=>L.scale.y),floodVisible:G.visible})}}function ih(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Gp({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,changed:d,watching:h,localPlay:f}){var ce,le,me;const g=s([0,0,0],e);g.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,g),r([.55,1.5,-.713],[1.42,1.04,.035],_,g),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,g);const p=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],y=[];for(let I=0;I<7;I++)for(let E=0;E<9;E++)y.push(r([.55+(E-4)*.145,1.5+(3-I)*.14,-.683],[.13,.12,.02],m,g));const T=s([-1.05,1.24,-.38],g);T.name="core-gear",a([0,0,0],.3,.11,t.copper,T).rotation.x=Math.PI/2;const x=[];for(let I=0;I<12;I++){const E=I/12*Math.PI*2;let V=r([Math.cos(E)*.33,Math.sin(E)*.33,0],[.13,.13,.12],t.copper,T);V.rotation.z=E,x.push(V)}l([0,0,.06],.13,.025,t.dark,T,[0,0,0]);const b=s([-.4,1.12,-.38],g);l([0,0,0],.19,.035,t.dark,b,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,b);const S=s([0,0,0],g);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const A=s([-1.5,1,-.05],g);c([0,0,0],[.23,0,0],.04,t.metal,A),c([.23,0,0],[.23,.23,0],.04,t.copper,A),o([.23,.23,0],.08,t.rust,A);const v=s([-1.55,1.18,-1.13],g);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),l([0,.29,0],.33,.025,t.copper,v),l([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,g,{size:37});const C=Array.from({length:3},(I,E)=>o([.17+E*.3,2.23,-.82],.06,t.mint,g));let w=null,U=((me=(le=(ce=window.__beznogimState)==null?void 0:ce.mechanics)==null?void 0:le.bench)==null?void 0:me.public)||null,X,G="",z=0;try{w=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function N(I,E,V={}){const te=ih({mode:I,tool:E,args:V,state:w});w=te.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(w))}catch{}return te}N("migrate");const O=document.createElement("div");O.id="bench-controls",O.hidden=!0,O.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(O);function W(){return U&&h()?U:ih({mode:"migrate",state:w}).public}function J(I,E){f(),N("action",I,E),G="",j(0),d()}O.querySelectorAll("[data-part]").forEach(I=>I.onclick=()=>J("fit",{part:I.dataset.part,value:Number(I.dataset.value)})),O.querySelector("#bench-salvage").onclick=()=>J("salvage"),O.querySelector("#bench-restart").onclick=()=>J("restart");function Y(I){X&&X.attempts!==I.attempts&&(z=3),X=I,O.querySelector("#bench-readout").textContent=`экран ${I.round+1}/3 · скорость ${I.speed} / нужно ${I.target}`,O.querySelectorAll("[data-part]").forEach(E=>{E.setAttribute("aria-pressed",String(I[E.dataset.part]===Number(E.dataset.value))),E.disabled=I.phase!=="ready"}),O.querySelector("#bench-salvage").disabled=!I.bucket,_.color.set(I.picture?"#16362c":"#e9e4cc"),_.emissive.set(I.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=I.picture?.1:.6,y.forEach((E,V)=>E.visible=!!I.picture&&p[I.picture-1][V]==="1"),x.forEach((E,V)=>E.visible=V<I.core*3),b.scale.setScalar(.75+I.belt*.25),S.visible=!I.bucket,C.forEach((E,V)=>E.visible=V<I.repairs)}const Z={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function ee(){const I=X||W();return{action:U&&h()?"собрать свой монитор":I.phase==="ejected"?"достать ядро":I.phase==="repaired"?I.round===2?"закончить работу":"следующий экран":I.phase==="complete"?"ещё раз":"крутить рукоятку",description:(U&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+Z[I.phase]}}function j(I){const E=W(),V=JSON.stringify(E);V!==G&&(G=V,Y(E),d()),z=Math.max(0,z-I);const te=Math.min(1,I*7),Q=E.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];T.position.lerp(new n.Vector3(...Q),te),T.rotation.x=n.MathUtils.lerp(T.rotation.x,E.bucket?-Math.PI/2:0,te);const R=z>0?E.core*2:E.picture?.4:0;T.rotation.z+=I*R,b.rotation.z-=I*R*E.belt,A.rotation.z+=I*R}return window.addEventListener("beznogim:state",({detail:I})=>{var V,te;const E=(te=(V=I.mechanics)==null?void 0:V.bench)==null?void 0:te.public;E&&(U=E,G="")}),Y(W()),T.position.set(...W().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:g,controls:O,update:j,card:ee,run:()=>{const I=W();J(I.phase==="ejected"?"salvage":I.phase==="repaired"?"next":I.phase==="complete"?"restart":"crank")},inspect:()=>({source:U&&h()?"resident":"sandbox",...X,corePosition:T.position.toArray(),coreAngle:T.rotation.z,driveAngle:b.rotation.z,litPixels:y.filter(I=>I.visible).length})}}const sh=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function rh(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function oh(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):rh();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,rh(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const u=sh[e.round],d=u.weights.reduce((h,f,g)=>h+(e.loaded[g]?f+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,d!==u.target?(e.status=d<u.target?"under":"over",i={ok:!1,reason:e.status,total:d,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,f)=>{e.loaded[f]&&e.delivered.push({id:`${e.run}:${e.round}:${f}`,weight:h})}),i={ok:!0,total:d,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=sh[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,u)=>c+(e.loaded[u]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Vp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:f,localPlay:g}){var E,V,te;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const m=i("#9d8560"),p=i("#a1b56f"),y=i("#f1d29a"),T=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],T,_),r([3.65,-.14,0],[3.3,.5,7],T,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const Q of[-4.9,4.9])c([Q,0,-3],[Q,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,_);const x=s([0,.2,1.15],_);for(let Q=0;Q<11;Q++)r([-2+Q*.4,0,0],[.38,.16,1.65],m,x);for(const Q of[-.72,.72])c([-2.2,.22,Q],[2.2,.22,Q],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const b=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,b);for(const Q of[-.52,.52])for(const R of[-.58,.58]){const L=l([Q,0,R],.17,.05,t.dark,b,[0,0,0]);L.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],_);c([0,-.5,0],[0,.2,0],.1,t.metal,S);const A=s([0,0,0],S);c([0,0,0],[0,.8,0],.065,t.copper,A),o([0,.8,0],.14,t.rust,A),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const C=a([0,.7,0],.57,1.1,t.copper,v);l([0,1.28,0],.25,.045,t.dark,v);const w=Array.from({length:3},(Q,R)=>o([1.75+R*.34,2.15,-3.05],.095,t.mint,_)),U=Array.from({length:3},(Q,R)=>{const L=s([-3.6,.72,-2.1+R*1.08],_),k=o([0,0,0],[.28,.23,.57],p,L);k.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,L);const F=s([.45,.28,0],L);return r([0,0,0],[.29,.57,.4],y,F),r([0,0,.21],[.18,.045,.012],t.rust,F),{g:L,tax:F}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],m,_);const X=Array.from({length:6},(Q,R)=>o([2.75+R%3*.7,1,-2.1+Math.floor(R/3)*.83],[.2,.19,.38],p,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const G=s([0,0,0],e);for(let Q=0;Q<15;Q++){const R=Q/14;r([-.6+Math.sin(R*Math.PI)*1.5,-1.55,17+Q*.3],[.9,.12,.65],T,G)}for(let Q=0;Q<5;Q++)r([-.8-Q*.6,-1.55,21.5],[.75,.12,.75],T,G);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,G,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,G),d(G,[]),d(_,[x,b,S,v,...U.map(Q=>Q.g),...X,...w]),d(x,[]),d(b,[]);let z=null,N=((te=(V=(E=window.__beznogimState)==null?void 0:E.mechanics)==null?void 0:V.amnesty)==null?void 0:te.public)||null,O,W="",J=0;try{z=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function Y(Q,R,L={}){const k=oh({state:z,mode:Q,tool:R,args:L});z=k.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(z))}catch{}return k}Y("migrate");const Z=document.createElement("div");Z.id="amnesty-controls",Z.hidden=!0,Z.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(Z);function ee(){return N&&f()?N:oh({state:z,mode:"migrate"}).public}function j(Q,R){g(),Y("action",Q,R),W="",I(0),h()}for(const Q of Z.querySelectorAll("[data-load]"))Q.onclick=()=>j("load",{index:Number(Q.dataset.load)});Z.querySelector("#amnesty-pardon").onclick=()=>j("amnesty"),Z.querySelector("#amnesty-restart").onclick=()=>j("restart");const ce={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function le(Q){O=Q;const R=Q.status==="delivered"||Q.status==="complete";Z.querySelector("#amnesty-readout").textContent=`рейс ${Q.round+1}/3 · груз ${Q.total} / нужно ${Q.target}`,Z.querySelectorAll("[data-load]").forEach((L,k)=>{L.textContent=`${["A","B","C"][k]} · ${Q.weights[k]}${Q.debt[k]?` + ${Q.debt[k]} бумага`:""}`,L.setAttribute("aria-pressed",String(Q.loaded[k])),L.disabled=R}),Z.querySelector("#amnesty-pardon").disabled=Q.pardoned||R,Z.querySelector("#amnesty-pardon").textContent=Q.pardoned?"налог отменён":"отменить налог",C.scale.y=Q.target/4,w.forEach((L,k)=>L.visible=k<(Q.status==="complete"?3:Q.round)),X.forEach((L,k)=>L.visible=k<Q.delivered.length),U.forEach((L,k)=>{L.tax.visible=!Q.pardoned||J<.99,L.g.visible=!R||!Q.loaded[k],L.g.scale.setScalar(.8+Q.weights[k]*.08)})}function me(){const Q=O||ee();return{action:N&&f()?"войти в свою амнистию":Q.status==="delivered"?"следующий рейс":Q.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(N&&f()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+ce[Q.status]}}function I(Q,R){const L=ee(),k=JSON.stringify(L);k!==W&&(W=k,le(L),h());const F=L.status==="delivered"||L.status==="complete",ne=(D,K)=>n.MathUtils.lerp(D,K,Math.min(1,Q*5));x.rotation.z=ne(x.rotation.z,L.tilt),b.position.x=ne(b.position.x,F?3:-2.55),A.rotation.z=ne(A.rotation.z,L.pardoned?-.65:0),J=ne(J,L.pardoned?1:0),U.forEach(D=>{D.tax.position.y=.28+J*2.5,D.tax.rotation.z=J*.8,D.tax.visible=!L.pardoned||J<.99}),X.forEach((D,K)=>D.visible=K<L.delivered.length-(F&&b.position.x<2.9?2:0)),U.forEach((D,K)=>{const ie=L.loaded[K];D.g.visible=!F||!ie||b.position.x<2.9,D.g.position.x=ne(D.g.position.x,ie?b.position.x+(K-1)*.42:-3.6),D.g.position.y=ne(D.g.position.y,ie?.86:.72),D.g.position.z=ne(D.g.position.z,ie?1.15:-2.1+K*1.08)})}return window.addEventListener("beznogim:state",({detail:Q})=>{var L,k;const R=(k=(L=Q.mechanics)==null?void 0:L.amnesty)==null?void 0:k.public;R&&(N=R,W="")}),J=ee().pardoned?1:0,le(ee()),{house:_,controls:Z,update:I,card:me,run:()=>j(O.status==="delivered"?"next":O.status==="complete"?"restart":"dispatch"),inspect:()=>({source:N&&f()?"resident":"sandbox",...O,bridgeTilt:x.rotation.z,cartX:b.position.x,cargoPositions:U.map(Q=>Q.g.position.toArray()),taxVisible:U.map(Q=>Q.tax.visible),paperY:U.map(Q=>Q.tax.position.y),handleAngle:A.rotation.z,deliveredVisible:X.filter(Q=>Q.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="186",Ti={ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,dc=1,Td=2,$s=1,Ad=2,Ws=3,Qi=0,gn=1,In=2,fi=0,Js=1,fc=2,pc=3,mc=4,Cd=5,ps=100,Rd=101,Pd=102,Ld=103,Id=104,Dd=200,Nd=201,Ud=202,Od=203,Gc=204,Vc=205,Fd=206,zd=207,kd=208,Bd=209,Gd=210,Vd=211,Hd=212,Wd=213,Xd=214,Qo=0,jo=1,ea=2,js=3,ta=4,na=5,ia=6,sa=7,Hc=0,qd=1,Yd=2,Qn=0,Wc=1,Xc=2,qc=3,Ya=4,Yc=5,$c=6,Jc=7,Zc=300,ji=301,ys=302,Vo=303,Ho=304,Kr=306,kr=1e3,ui=1001,ra=1002,Qt=1003,$d=1004,Er=1005,tn=1006,Wo=1007,Xi=1008,yn=1009,Kc=1010,Qc=1011,er=1012,$a=1013,ti=1014,Un=1015,ni=1016,Ja=1017,Za=1018,tr=1020,jc=35902,eu=35899,tu=1021,nu=1022,On=1023,gi=1026,qi=1027,Ka=1028,Qa=1029,es=1030,ja=1031,el=1033,Lr=33776,Ir=33777,Dr=33778,Nr=33779,oa=35840,aa=35841,la=35842,ca=35843,ua=36196,ha=37492,da=37496,fa=37488,pa=37489,Br=37490,ma=37491,ga=37808,_a=37809,va=37810,xa=37811,ya=37812,Ma=37813,Sa=37814,ba=37815,Ea=37816,wa=37817,Ta=37818,Aa=37819,Ca=37820,Ra=37821,Pa=36492,La=36494,Ia=36495,Da=36283,Na=36284,Gr=36285,Ua=36286,Jd=3200,Oa=0,Zd=1,bi="",cn="srgb",Vr="srgb-linear",Hr="linear",Et="srgb",Xo=7680,Kd=519,Qd=512,jd=513,ef=514,tl=515,tf=516,nf=517,nl=518,sf=519,rf=35044,gc="300 es",Kn=2e3,nr=2001;function Hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function of(){const n=Fa("canvas");return n.style.display="block",n}const ah={};function _c(...n){const e="THREE."+n.shift();console.log(e,...n)}function af(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=af(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=af(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vs(...n){const e=n.join(" ");e in ah||(ah[e]=!0,tt(...n))}function Wp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Xp={[Qo]:jo,[ea]:ia,[ta]:sa,[js]:na,[jo]:Qo,[ia]:ea,[sa]:ta,[na]:js};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const Ur=Math.PI/180,Wr=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function iu(n,e){return(n%e+e)%e}function qp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yp(n,e,t){return n!==e?(t-n)/(e-n):0}function Or(n,e,t){return(1-t)*n+t*e}function $p(n,e,t,i){return Or(n,e,1-Math.exp(-t*i))}function Jp(n,e=1){return e-Math.abs(iu(n,e*2)-e)}function Zp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jp(n,e){return n+Math.random()*(e-n)}function em(n){return n*(.5-Math.random())}function tm(n){n!==void 0&&(lh=n);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nm(n){return n*Ur}function im(n){return n*Wr}function sm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function rm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function om(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function am(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:Ur,RAD2DEG:Wr,generateUUID:Ss,clamp:ct,euclideanModulo:iu,mapLinear:qp,inverseLerp:Yp,lerp:Or,damp:$p,pingpong:Jp,smoothstep:Zp,smootherstep:Kp,randInt:Qp,randFloat:jp,randFloatSpread:em,seededRandom:tm,degToRad:nm,radToDeg:im,isPowerOfTwo:sm,ceilPowerOfTwo:rm,floorPowerOfTwo:om,setQuaternionFromProperEuler:am,normalize:dn,denormalize:Hs},ku=class ku{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ku.prototype.isVector2=!0;let Te=ku;class Di{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,a=Math.sin(a*y)/T,c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+g*a,d=d*p+_*a;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-a*f,e[t+2]=l*g+u*f+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bu=class Bu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bu.prototype.isVector3=!0;let B=Bu;const Cl=new B,ch=new Di,Gu=class Gu{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],T=s[4],x=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*_+a*y+c*b,r[3]=o*m+a*T+c*S,r[6]=o*p+a*x+c*A,r[1]=l*_+u*y+d*b,r[4]=l*m+u*T+d*S,r[7]=l*p+u*x+d*A,r[2]=h*_+f*y+g*b,r[5]=h*m+f*T+g*S,r[8]=h*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gu.prototype.isMatrix3=!0;let nt=Gu;const Rl=new nt,uh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){const n={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vr]:{primaries:e,whitePoint:i,transfer:Hr,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const ft=lm();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class lf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rs===void 0&&(Rs=Fa("canvas")),Rs.width=e.width,Rs.height=e.height;const s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cm=0;class il{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let um=0;const Ll=new B;class sn extends Ui{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=ui,s=ui,r=tn,o=Xi,a=On,c=yn,l=sn.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ss(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Zc;sn.DEFAULT_ANISOTROPY=1;const Vu=class Vu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,x=(f+1)/2,b=(p+1)/2,S=(u+h)/4,A=(d+_)/4,v=(g+m)/4;return T>x&&T>b?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=S/i,r=A/i):x>b?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=v/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vu.prototype.isVector4=!0;let Ot=Vu;class cf extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new il(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends cf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class su extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xa=class Xa{constructor(e,t,i,s,r,o,a,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hm,e,dm)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Bi.crossVectors(i,bn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Bi.crossVectors(i,bn)),Bi.normalize(),ho.crossVectors(bn,Bi),s[0]=Bi.x,s[4]=ho.x,s[8]=bn.x,s[1]=Bi.y,s[5]=ho.y,s[9]=bn.y,s[2]=Bi.z,s[6]=ho.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],T=i[7],x=i[11],b=i[15],S=s[0],A=s[4],v=s[8],C=s[12],w=s[1],U=s[5],X=s[9],G=s[13],z=s[2],N=s[6],O=s[10],W=s[14],J=s[3],Y=s[7],Z=s[11],ee=s[15];return r[0]=o*S+a*w+c*z+l*J,r[4]=o*A+a*U+c*N+l*Y,r[8]=o*v+a*X+c*O+l*Z,r[12]=o*C+a*G+c*W+l*ee,r[1]=u*S+d*w+h*z+f*J,r[5]=u*A+d*U+h*N+f*Y,r[9]=u*v+d*X+h*O+f*Z,r[13]=u*C+d*G+h*W+f*ee,r[2]=g*S+_*w+m*z+p*J,r[6]=g*A+_*U+m*N+p*Y,r[10]=g*v+_*X+m*O+p*Z,r[14]=g*C+_*G+m*W+p*ee,r[3]=y*S+T*w+x*z+b*J,r[7]=y*A+T*U+x*N+b*Y,r[11]=y*v+T*X+x*O+b*Z,r[15]=y*C+T*G+x*W+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=c*f-l*h,T=a*f-l*d,x=a*h-c*d,b=o*f-l*u,S=o*h-c*u,A=o*d-a*u;return t*(_*y-m*T+p*x)-i*(g*y-m*b+p*S)+s*(g*T-_*b+p*A)-r*(g*x-_*S+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*a-i*o,T=t*c-s*o,x=t*l-r*o,b=i*c-s*a,S=i*l-r*a,A=s*l-r*c,v=u*_-d*g,C=u*m-h*g,w=u*p-f*g,U=d*m-h*_,X=d*p-f*_,G=h*p-f*m,z=y*G-T*X+x*U+b*w-S*C+A*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=(a*G-c*X+l*U)*N,e[1]=(s*X-i*G-r*U)*N,e[2]=(_*A-m*S+p*b)*N,e[3]=(h*S-d*A-f*b)*N,e[4]=(c*w-o*G-l*C)*N,e[5]=(t*G-s*w+r*C)*N,e[6]=(m*x-g*A-p*T)*N,e[7]=(u*A-h*x+f*T)*N,e[8]=(o*X-a*w+l*v)*N,e[9]=(i*w-t*X-r*v)*N,e[10]=(g*S-_*x+p*y)*N,e[11]=(d*x-u*S-f*y)*N,e[12]=(a*C-o*U-c*v)*N,e[13]=(t*U-i*C+s*v)*N,e[14]=(_*T-g*b-m*y)*N,e[15]=(u*b-d*T+h*y)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,_=o*u,m=o*d,p=a*d,y=c*l,T=c*u,x=c*d,b=i.x,S=i.y,A=i.z;return s[0]=(1-(_+p))*b,s[1]=(f+x)*b,s[2]=(g-T)*b,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(h+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+T)*A,s[9]=(m-y)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ps.set(s[0],s[1],s[2]).length();const a=Ps.set(s[4],s[5],s[6]).length(),c=Ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);const l=1/o,u=1/a,d=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Kn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Kn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===nr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Kn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===nr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xa.prototype.isMatrix4=!0;let xt=Xa;const Ps=new B,Wn=new xt,hm=new B(0,0,0),dm=new B(1,1,1),Bi=new B,ho=new B,bn=new B,dh=new xt,fh=new Di;class Ni{constructor(e=0,t=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const ph=new B,Ls=new Di,vi=new xt,fo=new B,dr=new B,pm=new B,mm=new Di,mh=new B(1,0,0),gh=new B(0,1,0),_h=new B(0,0,1),vh={type:"added"},gm={type:"removed"},Is={type:"childadded",child:null},Il={type:"childremoved",child:null};class Gt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,t=new Ni,i=new Di,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new nt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fo.copy(e):fo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(dr,fo,this.up):vi.lookAt(fo,dr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(vi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),Is.child=e,this.dispatchEvent(Is),Is.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=iu(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dl(o,r,e+1/3),this.g=Dl(o,r,e),this.b=Dl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ft.workingToColorSpace(ln.copy(this),e),Math.round(ct(ln.r*255,0,255))*65536+Math.round(ct(ln.g*255,0,255))*256+Math.round(ct(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){ft.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(po);const i=Or(Gi.h,po.h,t),s=Or(Gi.s,po.s,t),r=Or(Gi.l,po.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ut;ut.NAMES=hf;class rl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class df extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new B,xi=new B,Nl=new B,yi=new B,Ds=new B,Ns=new B,xh=new B,Ul=new B,Ol=new B,Fl=new B,zl=new Ot,kl=new Ot,Bl=new Ot;class Dn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),xi.subVectors(i,t),Nl.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(xi),c=Xn.dot(Nl),l=xi.dot(xi),u=xi.dot(Nl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return zl.setScalar(0),kl.setScalar(0),Bl.setScalar(0),zl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,i),Bl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(Bl,r.z),o}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),xi.subVectors(e,t),Xn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,i),Ns.subVectors(r,i),Ul.subVectors(e,i);const c=Ds.dot(Ul),l=Ns.dot(Ul);if(c<=0&&l<=0)return t.copy(i);Ol.subVectors(e,s);const u=Ds.dot(Ol),d=Ns.dot(Ol);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ds,o);Fl.subVectors(e,r);const f=Ds.dot(Fl),g=Ns.dot(Fl);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ns,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return xh.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(xh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Ds,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ns{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),go.subVectors(this.max,fr),Us.subVectors(e.a,fr),Os.subVectors(e.b,fr),Fs.subVectors(e.c,fr),Vi.subVectors(Os,Us),Hi.subVectors(Fs,Os),as.subVectors(Us,Fs);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-as.z,as.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,as.z,0,-as.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-as.y,as.x,0];return!Gl(t,Us,Os,Fs,go)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,Us,Os,Fs,go))?!1:(_o.crossVectors(Vi,Hi),t=[_o.x,_o.y,_o.z],Gl(t,Us,Os,Fs,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new B,new B,new B,new B,new B,new B,new B,new B],qn=new B,mo=new ns,Us=new B,Os=new B,Fs=new B,Vi=new B,Hi=new B,as=new B,fr=new B,go=new B,_o=new B,ls=new B;function Gl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ls.fromArray(n,r);const a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),u=i.dot(ls);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Wt=new B,vo=new Te;let vm=0;class zn extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rf,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ru extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ou extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xm=new ns,pr=new B,Vl=new B;class is{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Vl)),this.expandByPoint(pr.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ym=0;const Cn=new xt,Hl=new Gt,zs=new B,En=new ns,mr=new ns,Kt=new B;class Vt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?ou:ru)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(En.min,mr.min),En.expandByPoint(Kt),Kt.addVectors(En.max,mr.max),En.expandByPoint(Kt)):(En.expandByPoint(mr.min),En.expandByPoint(mr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Kt.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),Kt.add(zs)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new zn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new B,c[v]=new B;const l=new B,u=new B,d=new B,h=new Te,f=new Te,g=new Te,_=new B,m=new B;function p(v,C,w){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,w),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),a[v].add(_),a[C].add(_),a[w].add(_),c[v].add(m),c[C].add(m),c[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,C=y.length;v<C;++v){const w=y[v],U=w.start,X=w.count;for(let G=U,z=U+X;G<z;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new B,x=new B,b=new B,S=new B;function A(v){b.fromBufferAttribute(s,v),S.copy(b);const C=a[v];T.copy(C),T.sub(b.multiplyScalar(b.dot(C))).normalize(),x.crossVectors(S,C);const U=x.dot(c[v])<0?-1:1;o.setXYZW(v,T.x,T.y,T.z,U)}for(let v=0,C=y.length;v<C;++v){const w=y[v],U=w.start,X=w.count;for(let G=U,z=U+X;G<z;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new zn(h,u,d)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new B,Mm=new B,Sm=new nt;class ci{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wl.subVectors(i,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sm.getNormalMatrix(e),s=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bm=0;class ss extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Js,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Vc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new B,Xl=new B,xo=new B,yo=new B;class ar{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xl.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(Xl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=yo.dot(this.direction),c=-yo.dot(xo),l=yo.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xl).addScaledVector(xo,h),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,p=i.x-o.x,y=i.y-o.y,T=i.z-o.z,x=Math.abs(c),b=Math.abs(l),S=Math.abs(u);let A,v,C,w,U,X,G,z,N,O,W,J;if(x>=b&&x>=S?(C=c,X=d,N=g,J=p,c>=0?(A=l,v=u,w=h,U=f,G=_,z=m,O=y,W=T):(A=u,v=l,w=f,U=h,G=m,z=_,O=T,W=y)):b>=S?(C=l,X=h,N=_,J=y,l>=0?(A=u,v=c,w=f,U=d,G=m,z=g,O=T,W=p):(A=c,v=u,w=d,U=f,G=g,z=m,O=p,W=T)):(C=u,X=f,N=m,J=T,u>=0?(A=c,v=l,w=d,U=h,G=g,z=_,O=p,W=y):(A=l,v=c,w=h,U=d,G=_,z=g,O=y,W=p)),C===0)return null;const Y=A/C,Z=v/C,ee=1/C,j=w-Y*X,ce=U-Z*X,le=G-Y*N,me=z-Z*N,I=O-Y*J,E=W-Z*J,V=I*me-E*le,te=j*E-ce*I,Q=le*ce-me*j;if(s){if(V<0||te<0||Q<0)return null}else if((V<0||te<0||Q<0)&&(V>0||te>0||Q>0))return null;const R=V+te+Q;if(R===0)return null;const L=ee*(V*X+te*N+Q*J);return(R>0?L<0:L>0)?null:this.at(L/R,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qr extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yh=new xt,cs=new ar,Mo=new is,Mh=new B,So=new B,bo=new B,Eo=new B,ql=new B,wo=new B,Sh=new B,To=new B;class _n extends Gt{constructor(e=new Vt,t=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ql.fromBufferAttribute(d,e),o?wo.addScaledVector(ql,u):wo.addScaledVector(ql.sub(t),u))}t.add(wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Mo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Mo,Mh)===null||cs.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(yh),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,b=T;x<b;x+=3){const S=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);s=Ao(this,p,e,i,l,u,d,S,A,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);s=Ao(this,o,e,i,l,u,d,y,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,b=T;x<b;x+=3){const S=x,A=x+1,v=x+2;s=Ao(this,p,e,i,l,u,d,S,A,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,T=m+1,x=m+2;s=Ao(this,o,e,i,l,u,d,y,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Em(n,e,t,i,s,r,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Qi,a),c===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(To);return l<t.near||l>t.far?null:{distance:l,point:To.clone(),object:n}}function Ao(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,So),n.getVertexPosition(c,bo),n.getVertexPosition(l,Eo);const u=Em(n,e,t,i,So,bo,Eo,Sh);if(u){const d=new B;Dn.getBarycoord(Sh,So,bo,Eo,d),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,c,l,d,new Te)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,c,l,d,new Te)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,c,l,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new B,materialIndex:0};Dn.getNormal(So,bo,Eo,h.normal),u.face=h,u.barycoord=d}return u}class au extends sn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Qt,u=Qt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends zn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ks=new xt,bh=new xt,Co=[],Eh=new ns,wm=new xt,gr=new _n,_r=new is;class xc extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Eh.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Eh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),_r.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(i),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),bh.multiplyMatrices(i,ks),gr.matrixWorld=bh,gr.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){const c=Co[o];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new au(new Float32Array(s*this.count),s,this.count,Ka,Un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const us=new is,Tm=new Te(.5,.5),Ro=new B;class ol{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],T=r[13],x=r[14],b=r[15];if(s[0].setComponents(l-o,f-u,p-g,b-y).normalize(),s[1].setComponents(l+o,f+u,p+g,b+y).normalize(),s[2].setComponents(l+a,f+d,p+_,b+T).normalize(),s[3].setComponents(l-a,f-d,p-_,b-T).normalize(),i)s[4].setComponents(c,h,m,x).normalize(),s[5].setComponents(l-c,f-h,p-m,b-x).normalize();else if(s[4].setComponents(l-c,f-h,p-m,b-x).normalize(),t===Kn)s[5].setComponents(l+c,f+h,p+m,b+x).normalize();else if(t===nr)s[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=Tm.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new B,ka=new B,wh=new xt,vr=new ar,Po=new is,Yl=new B,Th=new B;class Am extends Gt{constructor(e=new Vt,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),ka.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=za.distanceTo(ka);e.setAttribute("lineDistance",new yt(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;wh.copy(s).invert(),vr.copy(e.ray).applyMatrix4(wh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),y=u.getX(_+1),T=Lo(this,e,vr,c,p,y,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Lo(this,e,vr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Lo(this,e,vr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Lo(this,e,vr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(za.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),t.distanceSqToSegment(za,ka,Yl,Th)>i)return;Yl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Yl);if(!(l<e.near||l>e.far))return{distance:l,point:Th.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class cu extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ah=new xt,yc=new ar,Io=new is,Do=new B;class ff extends Gt{constructor(e=new Vt,t=new cu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;Ah.copy(s).invert(),yc.copy(e.ray).applyMatrix4(Ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=l.getX(g);Do.fromBufferAttribute(d,m),Ch(Do,m,c,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Do.fromBufferAttribute(d,g),Ch(Do,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ch(n,e,t,i,s,r,o){const a=yc.distanceSqToPoint(n);if(a<t){const c=new B;yc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class uu extends sn{constructor(e=[],t=ji,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hu extends sn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends sn{constructor(e,t,i=ti,s,r,o,a=Qt,c=Qt,l,u=gi,d=1){if(u!==gi&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class pf extends ir{constructor(e,t=ti,i=ji,s,r,o=Qt,a=Qt,c,l=gi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class du extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oi extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function g(_,m,p,y,T,x,b,S,A,v,C){const w=x/A,U=b/v,X=x/2,G=b/2,z=S/2,N=A+1,O=v+1;let W=0,J=0;const Y=new B;for(let Z=0;Z<O;Z++){const ee=Z*U-G;for(let j=0;j<N;j++){const ce=j*w-X;Y[_]=ce*y,Y[m]=ee*T,Y[p]=z,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(j/A),d.push(1-Z/v),W+=1}}for(let Z=0;Z<v;Z++)for(let ee=0;ee<A;ee++){const j=h+ee+N*Z,ce=h+ee+N*(Z+1),le=h+(ee+1)+N*(Z+1),me=h+(ee+1)+N*Z;c.push(j,ce,me),c.push(ce,le,me),J+=6}a.addGroup(f,J,C),f+=J,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class al extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new B,u=new Te;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jr extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function y(){const x=new B,b=new B;let S=0;const A=(t-e)/i;for(let v=0;v<=r;v++){const C=[],w=v/r,U=w*(t-e)+e;for(let X=0;X<=s;X++){const G=X/s,z=G*c+a,N=Math.sin(z),O=Math.cos(z);b.x=U*N,b.y=-w*i+m,b.z=U*O,d.push(b.x,b.y,b.z),x.set(N,A,O).normalize(),h.push(x.x,x.y,x.z),f.push(G,1-w),C.push(g++)}_.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){const w=_[C][v],U=_[C+1][v],X=_[C+1][v+1],G=_[C][v+1];(e>0||C!==0)&&(u.push(w,U,G),S+=3),(t>0||C!==r-1)&&(u.push(U,X,G),S+=3)}l.addGroup(p,S,0),p+=S}function T(x){const b=g,S=new Te,A=new B;let v=0;const C=x===!0?e:t,w=x===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,m*w,0),h.push(0,w,0),f.push(.5,.5),g++;const U=g;for(let X=0;X<=s;X++){const z=X/s*c+a,N=Math.cos(z),O=Math.sin(z);A.x=C*O,A.y=m*w,A.z=C*N,d.push(A.x,A.y,A.z),h.push(0,w,0),S.x=N*.5+.5,S.y=O*.5*w+.5,f.push(S.x,S.y),g++}for(let X=0;X<s;X++){const G=b+X,z=U+X;x===!0?u.push(z,z+1,G):u.push(z+1,z,G),v+=3}l.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bs extends jr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends Vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new B,x=new B,b=new B;for(let S=0;S<t.length;S+=3)f(t[S+0],T),f(t[S+1],x),f(t[S+2],b),c(T,x,b,y)}function c(y,T,x,b){const S=b+1,A=[];for(let v=0;v<=S;v++){A[v]=[];const C=y.clone().lerp(x,v/S),w=T.clone().lerp(x,v/S),U=S-v;for(let X=0;X<=U;X++)X===0&&v===S?A[v][X]=C:A[v][X]=C.clone().lerp(w,X/U)}for(let v=0;v<S;v++)for(let C=0;C<2*(S-v)-1;C++){const w=Math.floor(C/2);C%2===0?(h(A[v][w+1]),h(A[v+1][w]),h(A[v][w])):(h(A[v][w+1]),h(A[v+1][w+1]),h(A[v+1][w]))}}function l(y){const T=new B;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(y),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function u(){const y=new B;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];const x=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;o.push(x,1-b)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const T=o[y+0],x=o[y+2],b=o[y+4],S=Math.max(T,x,b),A=Math.min(T,x,b);S>.9&&A<.1&&(T<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,T){const x=y*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function g(){const y=new B,T=new B,x=new B,b=new B,S=new Te,A=new Te,v=new Te;for(let C=0,w=0;C<r.length;C+=9,w+=6){y.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),x.set(r[C+6],r[C+7],r[C+8]),S.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),v.set(o[w+4],o[w+5]),b.copy(y).add(T).add(x).divideScalar(3);const U=m(b);_(S,w+0,y,U),_(A,w+2,T,U),_(v,w+4,x,U)}}function _(y,T,x,b){b<0&&y.x===1&&(o[T]=y.x-1),x.x===0&&x.z===0&&(o[T]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.vertices,e.indices,e.radius,e.detail)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Te:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new B,s=[],r=[],o=[],a=new B,c=new xt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cl extends ii{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mf extends cl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fu(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Rh=new B,Ph=new B,$l=new fu,Jl=new fu,Zl=new fu;class pu extends ii{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ph.subVectors(s[0],s[1]).add(s[0]),l=Ph);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),$l.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),Jl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),Zl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&($l.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Jl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Zl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set($l.calc(c),Jl.calc(c),Zl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Cm(n,e){const t=1-n;return t*t*e}function Rm(n,e){return 2*(1-n)*n*e}function Pm(n,e){return n*n*e}function Fr(n,e,t,i){return Cm(n,e)+Rm(n,t)+Pm(n,i)}function Lm(n,e){const t=1-n;return t*t*t*e}function Im(n,e){const t=1-n;return 3*t*t*n*e}function Dm(n,e){return 3*(1-n)*n*n*e}function Nm(n,e){return n*n*n*e}function zr(n,e,t,i,s){return Lm(n,e)+Im(n,t)+Dm(n,i)+Nm(n,s)}class mu extends ii{constructor(e=new Te,t=new Te,i=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gf extends ii{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y),zr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gu extends ii{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _f extends ii{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends ii{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vu extends ii{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xu extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Lh(a,c.x,l.x,u.x,d.x),Lh(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Te().fromArray(s))}return this}}var Ba=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:pu,CubicBezierCurve:mu,CubicBezierCurve3:gf,EllipseCurve:cl,LineCurve:gu,LineCurve3:_f,QuadraticBezierCurve:_u,QuadraticBezierCurve3:vu,SplineCurve:xu});class vf extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ba[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ba[s.type]().fromJSON(s))}return this}}class Mc extends vf{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new gu(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new _u(this.currentPoint.clone(),new Te(e,t),new Te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new mu(this.currentPoint.clone(),new Te(e,t),new Te(i,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new cl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class eo extends Mc{constructor(e){super(e),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Mc().fromJSON(s))}return this}}function Um(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=xf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Bm(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Xr(r,o,t,a,c,l,0),o}function xf(n,e,t,i,s){let r;if(s===Km(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ih(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ih(o/i|0,n[o],n[o+1],r);return r&&sr(r,r.next)&&(Yr(r),r=r.next),r}function Ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(sr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Xr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Xm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Fm(n,i,s,r):Om(n)){e.push(c.i,n.i,l.i),Yr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=zm(Ms(n),e),Xr(n,e,t,i,s,r,2)):o===2&&km(n,e,t,i,s,r):Xr(Ms(n),e,t,i,s,r,1);break}}}function Om(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&wr(s,a,r,c,o,l,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),_=Math.max(a,c,l),m=Math.max(u,d,h),p=Sc(f,g,e,t,i),y=Sc(_,m,e,t,i);let T=n.prevZ,x=n.nextZ;for(;T&&T.z>=p&&x&&x.z<=y;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&wr(a,u,c,d,l,h,T.x,T.y)&&zt(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&wr(a,u,c,d,l,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=_&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&wr(a,u,c,d,l,h,T.x,T.y)&&zt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&wr(a,u,c,d,l,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function zm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!sr(i,s)&&Mf(i,t,t.next,s)&&qr(i,s)&&qr(s,i)&&(e.push(i.i,t.i,s.i),Yr(t),Yr(t.next),t=n=s),t=t.next}while(t!==n);return Ms(t)}function km(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$m(o,a)){let c=Sf(o,a);o=Ms(o,o.next),c=Ms(c,c.next),Xr(o,e,t,i,s,r,0),Xr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Bm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=xf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Ym(l))}s.sort(Gm);for(let r=0;r<s.length;r++)t=Vm(s[r],t);return t}function Gm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Vm(n,e){const t=Hm(n,e);if(!t)return e;const i=Sf(t,n);return Ms(i,i.next),Ms(t,t.next)}function Hm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(sr(n,t))return t;do{if(sr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&yf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);qr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Wm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Wm(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function Xm(n,e,t,i){let s=n;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,qm(s)}function qm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Sc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ym(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function yf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function wr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&yf(n,e,t,i,s,r,o,a)}function $m(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Jm(n,e)&&(qr(n,e)&&qr(e,n)&&Zm(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||sr(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function sr(n,e){return n.x===e.x&&n.y===e.y}function Mf(n,e,t,i){const s=Uo(zt(n,e,t)),r=Uo(zt(n,e,i)),o=Uo(zt(t,i,n)),a=Uo(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&No(n,t,e)||r===0&&No(n,i,e)||o===0&&No(t,n,i)||a===0&&No(t,e,i))}function No(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Uo(n){return n>0?1:n<0?-1:0}function Jm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Mf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function qr(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function Zm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sf(n,e){const t=bc(n.i,n.x,n.y),i=bc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ih(n,e,t,i){const s=bc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Km(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Qm{static triangulate(e,t,i=2){return Um(e,t,i)}}class _s{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return _s.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Dh(e),Nh(i,e);let o=e.length;t.forEach(Dh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Nh(i,t[c]);const a=Qm.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Dh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Nh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class lr extends Vt{constructor(e=new eo([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:jm;let T,x=!1,b,S,A,v;if(p){T=p.getSpacedPoints(u),x=!0,h=!1;const F=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,F),S=new B,A=new B,v=new B}h||(m=0,f=0,g=0,_=0);const C=a.extractPoints(l);let w=C.shape;const U=C.holes;if(!_s.isClockWise(w)){w=w.reverse();for(let F=0,ne=U.length;F<ne;F++){const D=U[F];_s.isClockWise(D)&&(U[F]=D.reverse())}}function G(F){const D=10000000000000001e-36;let K=F[0];for(let ie=1;ie<=F.length;ie++){const q=ie%F.length,ae=F[q],ye=ae.x-K.x,Se=ae.y-K.y,$=ye*ye+Se*Se,ze=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(K.x),Math.abs(K.y)),Ae=D*ze*ze;if($<=Ae){F.splice(q,1),ie--;continue}K=ae}}G(w),U.forEach(G);const z=U.length,N=w;for(let F=0;F<z;F++){const ne=U[F];w=w.concat(ne)}function O(F,ne,D){return ne||mt("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(ne,D)}const W=w.length;function J(F,ne,D){let K,ie,q;const ae=F.x-ne.x,ye=F.y-ne.y,Se=D.x-F.x,$=D.y-F.y,ze=ae*ae+ye*ye,Ae=ae*$-ye*Se;if(Math.abs(Ae)>Number.EPSILON){const H=Math.sqrt(ze),M=Math.sqrt(Se*Se+$*$),oe=ne.x-ye/H,ue=ne.y+ae/H,fe=D.x-$/M,Ee=D.y+Se/M,Ce=((fe-oe)*$-(Ee-ue)*Se)/(ae*$-ye*Se);K=oe+ae*Ce-F.x,ie=ue+ye*Ce-F.y;const _e=K*K+ie*ie;if(_e<=2)return new Te(K,ie);q=Math.sqrt(_e/2)}else{let H=!1;ae>Number.EPSILON?Se>Number.EPSILON&&(H=!0):ae<-Number.EPSILON?Se<-Number.EPSILON&&(H=!0):Math.sign(ye)===Math.sign($)&&(H=!0),H?(K=-ye,ie=ae,q=Math.sqrt(ze)):(K=ae,ie=ye,q=Math.sqrt(ze/2))}return new Te(K/q,ie/q)}const Y=[];for(let F=0,ne=N.length,D=ne-1,K=F+1;F<ne;F++,D++,K++)D===ne&&(D=0),K===ne&&(K=0),Y[F]=J(N[F],N[D],N[K]);const Z=[];let ee,j=Y.concat();for(let F=0,ne=z;F<ne;F++){const D=U[F];ee=[];for(let K=0,ie=D.length,q=ie-1,ae=K+1;K<ie;K++,q++,ae++)q===ie&&(q=0),ae===ie&&(ae=0),ee[K]=J(D[K],D[q],D[ae]);Z.push(ee),j=j.concat(ee)}let ce;if(m===0)ce=_s.triangulateShape(N,U);else{const F=[],ne=[];for(let D=0;D<m;D++){const K=D/m,ie=f*Math.cos(K*Math.PI/2),q=g*Math.sin(K*Math.PI/2)+_;for(let ae=0,ye=N.length;ae<ye;ae++){const Se=O(N[ae],Y[ae],q);te(Se.x,Se.y,-ie),K===0&&F.push(Se)}for(let ae=0,ye=z;ae<ye;ae++){const Se=U[ae];ee=Z[ae];const $=[];for(let ze=0,Ae=Se.length;ze<Ae;ze++){const H=O(Se[ze],ee[ze],q);te(H.x,H.y,-ie),K===0&&$.push(H)}K===0&&ne.push($)}}ce=_s.triangulateShape(F,ne)}const le=ce.length,me=g+_;for(let F=0;F<W;F++){const ne=h?O(w[F],j[F],me):w[F];x?(A.copy(b.normals[0]).multiplyScalar(ne.x),S.copy(b.binormals[0]).multiplyScalar(ne.y),v.copy(T[0]).add(A).add(S),te(v.x,v.y,v.z)):te(ne.x,ne.y,0)}for(let F=1;F<=u;F++)for(let ne=0;ne<W;ne++){const D=h?O(w[ne],j[ne],me):w[ne];x?(A.copy(b.normals[F]).multiplyScalar(D.x),S.copy(b.binormals[F]).multiplyScalar(D.y),v.copy(T[F]).add(A).add(S),te(v.x,v.y,v.z)):te(D.x,D.y,d/u*F)}for(let F=m-1;F>=0;F--){const ne=F/m,D=f*Math.cos(ne*Math.PI/2),K=g*Math.sin(ne*Math.PI/2)+_;for(let ie=0,q=N.length;ie<q;ie++){const ae=O(N[ie],Y[ie],K);te(ae.x,ae.y,d+D)}for(let ie=0,q=U.length;ie<q;ie++){const ae=U[ie];ee=Z[ie];for(let ye=0,Se=ae.length;ye<Se;ye++){const $=O(ae[ye],ee[ye],K);x?te($.x,$.y+T[u-1].y,T[u-1].x+D):te($.x,$.y,d+D)}}}I(),E();function I(){const F=s.length/3;if(h){let ne=0,D=W*ne;for(let K=0;K<le;K++){const ie=ce[K];Q(ie[2]+D,ie[1]+D,ie[0]+D)}ne=u+m*2,D=W*ne;for(let K=0;K<le;K++){const ie=ce[K];Q(ie[0]+D,ie[1]+D,ie[2]+D)}}else{for(let ne=0;ne<le;ne++){const D=ce[ne];Q(D[2],D[1],D[0])}for(let ne=0;ne<le;ne++){const D=ce[ne];Q(D[0]+W*u,D[1]+W*u,D[2]+W*u)}}i.addGroup(F,s.length/3-F,0)}function E(){const F=s.length/3;let ne=0;V(N,ne),ne+=N.length;for(let D=0,K=U.length;D<K;D++){const ie=U[D];V(ie,ne),ne+=ie.length}i.addGroup(F,s.length/3-F,1)}function V(F,ne){let D=F.length;for(;--D>=0;){const K=D;let ie=D-1;ie<0&&(ie=F.length-1);for(let q=0,ae=u+m*2;q<ae;q++){const ye=W*q,Se=W*(q+1),$=ne+K+ye,ze=ne+ie+ye,Ae=ne+ie+Se,H=ne+K+Se;R($,ze,Ae,H)}}}function te(F,ne,D){c.push(F),c.push(ne),c.push(D)}function Q(F,ne,D){L(F),L(ne),L(D);const K=s.length/3,ie=y.generateTopUV(i,s,K-3,K-2,K-1);k(ie[0]),k(ie[1]),k(ie[2])}function R(F,ne,D,K){L(F),L(ne),L(K),L(ne),L(D),L(K);const ie=s.length/3,q=y.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);k(q[0]),k(q[1]),k(q[3]),k(q[1]),k(q[2]),k(q[3])}function L(F){s.push(c[F*3+0]),s.push(c[F*3+1]),s.push(c[F*3+2])}function k(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return e0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ba[s.type]().fromJSON(s)),new lr(i,e.options)}}const jm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,c),new Te(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Te(o,1-c),new Te(l,1-d),new Te(h,1-g),new Te(_,1-p)]:[new Te(a,1-c),new Te(u,1-d),new Te(f,1-g),new Te(m,1-p)]}};function e0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class to extends ll{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new to(e.radius,e.detail)}}class Es extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let T=0;T<l;T++){const x=T*d-r;g.push(x,-y,0),_.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const T=y+l*p,x=y+l*(p+1),b=y+1+l*(p+1),S=y+1+l*p;f.push(T,x,S),f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}class ul extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new B,h=new B,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],T=p/i,x=o+T*a,b=e*Math.cos(x),S=Math.sqrt(e*e-b*b);let A=0;p===0&&o===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const C=v/t,w=s+C*r;d.x=-S*Math.cos(w),d.y=b,d.z=S*Math.sin(w),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(C+A,1-T),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const T=u[p][y+1],x=u[p][y],b=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&f.push(T,x,S),(p!==i-1||c<Math.PI)&&f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hl extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new B,f=new B,g=new B;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,T=(s+1)*(_-1)+m,x=(s+1)*_+m;c.push(p,y,x),c.push(y,T,x)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class dl extends Vt{constructor(e=new vu(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,c=new B,l=new Te;let u=new B;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function _(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),y(),p()}function m(T){u=e.getPointAt(T/t,u);const x=o.normals[T],b=o.binormals[T];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,v=Math.sin(A),C=-Math.cos(A);c.x=C*x.x+v*b.x,c.y=C*x.y+v*b.y,c.z=C*x.z+v*b.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=t;T++)for(let x=1;x<=s;x++){const b=(s+1)*(T-1)+(x-1),S=(s+1)*T+(x-1),A=(s+1)*T+x,v=(s+1)*(T-1)+x;g.push(b,S,v),g.push(S,A,v)}}function y(){for(let T=0;T<=t;T++)for(let x=0;x<=s;x++)l.x=T/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new dl(new Ba[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Uh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const s in i)e[s]=i[s]}return e}function Uh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function t0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Ef={clone:rr,merge:fn};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wf extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xs extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tf extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Af extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class s0 extends lu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class fl extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Cf extends fl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Kl=new xt,Oh=new B,Fh=new B;class yu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Kl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===nr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oo=new B,Fo=new Di,oi=new B;class Mu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,Fo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Fo,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Oo,Fo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Fo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new B,zh=new Te,kh=new Te;class wn extends Mu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,kh),t.subVectors(kh,zh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class r0 extends yu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class pl extends fl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new r0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class no extends Mu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o0 extends yu{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Su extends fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new o0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bs=-90,Gs=1;class Rf extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Bs,Gs,e,t);s.layers=this.layers,this.add(s);const r=new wn(Bs,Gs,e,t);r.layers=this.layers,this.add(r);const o=new wn(Bs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new wn(Bs,Gs,e,t);a.layers=this.layers,this.add(a);const c=new wn(Bs,Gs,e,t);c.layers=this.layers,this.add(c);const l=new wn(Bs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pf extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bh=new xt;class Lf{constructor(e,t,i=0,s=1/0){this.ray=new ar(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,i=[]){return Ec(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ec(e[s],this,i,t);return i.sort(Gh),i}}function Gh(n,e){return n.distance-e.distance}function Ec(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ec(r[o],e,t,!0)}}class wc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hu=class Hu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Hu.prototype.isMatrix2=!0;let Tc=Hu;class If extends Ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vh(n,e,t,i){const s=a0(i);switch(t){case tu:return n*e;case Ka:return n*e/s.components*s.byteLength;case Qa:return n*e/s.components*s.byteLength;case es:return n*e*2/s.components*s.byteLength;case ja:return n*e*2/s.components*s.byteLength;case nu:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case el:return n*e*4/s.components*s.byteLength;case Lr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case aa:case ca:return Math.max(n,16)*Math.max(e,8)/4;case oa:case la:return Math.max(n,8)*Math.max(e,8)/2;case ua:case ha:case fa:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case Br:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pa:case La:case Ia:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Da:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gr:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a0(n){switch(n){case yn:case Kc:return{byteLength:1,components:1};case er:case Qc:case ni:return{byteLength:2,components:1};case Ja:case Za:return{byteLength:2,components:4};case ti:case $a:case Un:return{byteLength:4,components:1};case jc:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Df(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,ag=`uniform sampler2D dfgLUT;
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
}`,lg=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
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
}`,g_=`#if DEPTH_PACKING == 3200
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
}`,__=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,E_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,T_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,C_=`#define MATCAP
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
}`,R_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,L_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,D_=`#define STANDARD
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
}`,N_=`#define STANDARD
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
}`,U_=`#define TOON
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
}`,O_=`#define TOON
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
}`,F_=`uniform float size;
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
}`,z_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,B_=`uniform vec3 color;
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
}`,G_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:c0,alphahash_pars_fragment:u0,alphamap_fragment:h0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:_0,batching_vertex:v0,begin_vertex:x0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:b0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:C0,color_pars_fragment:R0,color_pars_vertex:P0,color_vertex:L0,common:I0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:N0,displacementmap_pars_vertex:U0,displacementmap_vertex:O0,emissivemap_fragment:F0,emissivemap_pars_fragment:z0,colorspace_fragment:k0,colorspace_pars_fragment:B0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:H0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tg,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:$0,fog_pars_fragment:J0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:K0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:j0,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:sg,lights_phong_pars_fragment:rg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:lg,lights_fragment_maps:cg,lights_fragment_end:ug,lightprobes_pars_fragment:hg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:Sg,morphcolor_vertex:bg,morphnormal_vertex:Eg,morphtarget_pars_vertex:wg,morphtarget_vertex:Tg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Rg,normal_pars_vertex:Pg,normal_vertex:Lg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Dg,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Ug,iridescence_pars_fragment:Og,opaque_fragment:Fg,packing:zg,premultiplied_alpha_fragment:kg,project_vertex:Bg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:$g,skinbase_vertex:Jg,skinning_pars_vertex:Zg,skinning_vertex:Kg,skinnormal_vertex:Qg,specularmap_fragment:jg,specularmap_pars_fragment:e_,tonemapping_fragment:t_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:o_,uv_vertex:a_,worldpos_vertex:l_,background_vert:c_,background_frag:u_,backgroundCube_vert:h_,backgroundCube_frag:d_,cube_vert:f_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distance_vert:__,distance_frag:v_,equirect_vert:x_,equirect_frag:y_,linedashed_vert:M_,linedashed_frag:S_,meshbasic_vert:b_,meshbasic_frag:E_,meshlambert_vert:w_,meshlambert_frag:T_,meshmatcap_vert:A_,meshmatcap_frag:C_,meshnormal_vert:R_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:I_,meshphysical_vert:D_,meshphysical_frag:N_,meshtoon_vert:U_,meshtoon_frag:O_,points_vert:F_,points_frag:z_,shadow_vert:k_,shadow_frag:B_,sprite_vert:G_,sprite_frag:V_},De={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Jn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ut(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Jn.physical={uniforms:fn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const zo={r:0,b:0,g:0},H_=new xt,Nf=new nt;Nf.set(-1,0,0,0,1,0,0,0,1);function W_(n,e,t,i,s,r){const o=new ut(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const x=y.backgroundBlurriness>0;T=e.get(T,x)}return T}function g(y){let T=!1;const x=f(y);x===null?m(o,a):x&&x.isColor&&(m(x,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,T){const x=f(T);x&&(x.isCubeTexture||x.mapping===Kr)?(l===void 0&&(l=new _n(new Oi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:rr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Nf),l.material.toneMapped=ft.getTransfer(x.colorSpace)!==Et,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new Es(2,2),new Bn({name:"BackgroundMaterial",uniforms:rr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,T){y.getRGB(zo,bf(n)),t.buffers.color.setClear(zo.r,zo.g,zo.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function X_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(U,X,G,z,N){let O=!1;const W=d(U,z,G,X);r!==W&&(r=W,l(r.object)),O=f(U,z,G,N),O&&g(U,z,G,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(U,X,G,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,X,G,z){const N=z.wireframe===!0;let O=i[X.id];O===void 0&&(O={},i[X.id]=O);const W=U.isInstancedMesh===!0?U.id:0;let J=O[W];J===void 0&&(J={},O[W]=J);let Y=J[G.id];Y===void 0&&(Y={},J[G.id]=Y);let Z=Y[N];return Z===void 0&&(Z=h(c()),Y[N]=Z),Z}function h(U){const X=[],G=[],z=[];for(let N=0;N<t;N++)X[N]=0,G[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:G,attributeDivisors:z,object:U,attributes:{},index:null}}function f(U,X,G,z){const N=r.attributes,O=X.attributes;let W=0;const J=G.getAttributes();for(const Y in J)if(J[Y].location>=0){const ee=N[Y];let j=O[Y];if(j===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),ee===void 0||ee.attribute!==j||j&&ee.data!==j.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(U,X,G,z){const N={},O=X.attributes;let W=0;const J=G.getAttributes();for(const Y in J)if(J[Y].location>=0){let ee=O[Y];ee===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));const j={};j.attribute=ee,ee&&ee.data&&(j.data=ee.data),N[Y]=j,W++}r.attributes=N,r.attributesNum=W,r.index=z}function _(){const U=r.newAttributes;for(let X=0,G=U.length;X<G;X++)U[X]=0}function m(U){p(U,0)}function p(U,X){const G=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;G[U]=1,z[U]===0&&(n.enableVertexAttribArray(U),z[U]=1),N[U]!==X&&(n.vertexAttribDivisor(U,X),N[U]=X)}function y(){const U=r.newAttributes,X=r.enabledAttributes;for(let G=0,z=X.length;G<z;G++)X[G]!==U[G]&&(n.disableVertexAttribArray(G),X[G]=0)}function T(U,X,G,z,N,O,W){W===!0?n.vertexAttribIPointer(U,X,G,N,O):n.vertexAttribPointer(U,X,G,z,N,O)}function x(U,X,G,z){_();const N=z.attributes,O=G.getAttributes(),W=X.defaultAttributeValues;for(const J in O){const Y=O[J];if(Y.location>=0){let Z=N[J];if(Z===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){const ee=Z.normalized,j=Z.itemSize,ce=e.get(Z);if(ce===void 0)continue;const le=ce.buffer,me=ce.type,I=ce.bytesPerElement,E=me===n.INT||me===n.UNSIGNED_INT||Z.gpuType===$a;if(Z.isInterleavedBufferAttribute){const V=Z.data,te=V.stride,Q=Z.offset;if(V.isInstancedInterleavedBuffer){for(let R=0;R<Y.locationSize;R++)p(Y.location+R,V.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let R=0;R<Y.locationSize;R++)m(Y.location+R);n.bindBuffer(n.ARRAY_BUFFER,le);for(let R=0;R<Y.locationSize;R++)T(Y.location+R,j/Y.locationSize,me,ee,te*I,(Q+j/Y.locationSize*R)*I,E)}else{if(Z.isInstancedBufferAttribute){for(let V=0;V<Y.locationSize;V++)p(Y.location+V,Z.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let V=0;V<Y.locationSize;V++)m(Y.location+V);n.bindBuffer(n.ARRAY_BUFFER,le);for(let V=0;V<Y.locationSize;V++)T(Y.location+V,j/Y.locationSize,me,ee,j*I,j/Y.locationSize*V*I,E)}}else if(W!==void 0){const ee=W[J];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Y.location,ee);break;case 3:n.vertexAttrib3fv(Y.location,ee);break;case 4:n.vertexAttrib4fv(Y.location,ee);break;default:n.vertexAttrib1fv(Y.location,ee)}}}}y()}function b(){C();for(const U in i){const X=i[U];for(const G in X){const z=X[G];for(const N in z){const O=z[N];for(const W in O)u(O[W].object),delete O[W];delete z[N]}}delete i[U]}}function S(U){if(i[U.id]===void 0)return;const X=i[U.id];for(const G in X){const z=X[G];for(const N in z){const O=z[N];for(const W in O)u(O[W].object),delete O[W];delete z[N]}}delete i[U.id]}function A(U){for(const X in i){const G=i[X];for(const z in G){const N=G[z];if(N[U.id]===void 0)continue;const O=N[U.id];for(const W in O)u(O[W].object),delete O[W];delete N[U.id]}}}function v(U){for(const X in i){const G=i[X],z=U.isInstancedMesh===!0?U.id:0,N=G[z];if(N!==void 0){for(const O in N){const W=N[O];for(const J in W)u(W[J].object),delete W[J];delete N[O]}delete G[z],Object.keys(G).length===0&&delete i[X]}}}function C(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function q_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Y_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==On&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const v=A===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yn&&A!==Un&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(tt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:x,maxSamples:b,samples:S}}function $_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ci,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:i,T=y*4;let x=p.clippingState||null;c.value=x,x=u(g,h,T,f);for(let b=0;b!==T;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==_;++T,x+=4)o.copy(d[T]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const qs=4,J_=6,Z_=20,K_=256,xr=new no,Hh=new ut;let Ql=null,jl=0,ec=0,tc=!1;const Q_=new B,hs=new B;class Ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Q_}=r;Ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,jl,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ni,format:On,colorSpace:Vr,depthBuffer:!1},s=Wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=j_(r)),this._blurMaterial=tv(r,e,t),this._ggxMaterial=ev(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Vt,e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,i,s,r){const c=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Hh),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Oi,new Qr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Hh),p=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):x===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const b=this._cubeSize;Vs(s,x*b,T>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ji||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Vs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-qs?i-g+qs:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Vs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Vs(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,xr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-qs?s-this._lodMax+qs:0),h=4*(this._cubeSize-u);Vs(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(c,xr)}}function j_(n){const e=[],t=[];let i=n;const s=n-qs+1+J_;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,T=p>2?0:-1,x=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];g.set(x,f*h*p);for(let b=0;b<h;b++){const S=u[b*2]*2-1,A=u[b*2+1]*2-1;p===0?hs.set(1,A,S):p===1?hs.set(-S,1,-A):p===2?hs.set(-S,A,1):p===3?hs.set(-1,A,-S):p===4?hs.set(-S,-1,A):hs.set(S,A,-1),hs.toArray(_,(p*h+b)*f)}}const m=new Vt;m.setAttribute("position",new zn(g,f)),m.setAttribute("outputDirection",new zn(_,f)),t.push(new _n(m,null)),i>qs&&i--}return{lodMeshes:t,sizeLods:e}}function Wh(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ev(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function tv(n,e,t){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Z_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Xh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function qh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bu extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:fi});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=tn),new Rf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function nv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Vo||f===Ho)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new bu(g.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Vo||f===Ho,_=f===ji||f===ys;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ac(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||_&&y&&c(y)?(i===null&&(i=new Ac(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Vo?h.mapping=ji:f===Ho&&(h.mapping=ys),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function iv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&vs("WebGLRenderer: "+i+" extension not supported."),s}}}function sv(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let T=0,x=y.length;T<x;T+=3){const b=y[T+0],S=y[T+1],A=y[T+2];h.push(b,S,S,A,A,b)}}else{const y=g.array;_=g.version;for(let T=0,x=y.length/3-1;T<x;T+=3){const b=T+0,S=T+1,A=T+2;h.push(b,S,S,A,A,b)}}const m=new(g.count>=65535?ou:ru)(h,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function rv(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ov(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function av(n,e,t){const i=new WeakMap,s=new Ot;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let w=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var f=w;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*S*4*d),v=new su(A,b,S,d);v.type=Un,v.needsUpdate=!0;const C=x*4;for(let U=0;U<d;U++){const X=p[U],G=y[U],z=T[U],N=b*S*4*U;for(let O=0;O<X.count;O++){const W=O*C;g===!0&&(s.fromBufferAttribute(X,O),A[N+W+0]=s.x,A[N+W+1]=s.y,A[N+W+2]=s.z,A[N+W+3]=0),_===!0&&(s.fromBufferAttribute(G,O),A[N+W+4]=s.x,A[N+W+5]=s.y,A[N+W+6]=s.z,A[N+W+7]=0),m===!0&&(s.fromBufferAttribute(z,O),A[N+W+8]=s.x,A[N+W+9]=s.y,A[N+W+10]=s.z,A[N+W+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Te(b,S)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function lv(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const cv={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[qc]:"CINEON_TONE_MAPPING",[Ya]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function uv(n,e,t,i,s,r){const o=new Fn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Vt;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new wf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _n(l,u),h=new no(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,y=[],T=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),c!==null&&c.setSize(x,b);for(let S=0;S<y.length;S++){const A=y[S];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){y=x,T=y.length>0&&y[0].isRenderPass===!0;const b=o.width,S=o.height;y.length>0&&a===null&&(a=new Fn(b,S,{type:ni,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(b,S,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){const v=y[A];v.setSize&&v.setSize(b,S)}},this.begin=function(x,b){if(_||x.toneMapping===Qn&&y.length===0)return!1;if(p=b,b!==null){const S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return T===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return T},this.end=function(x,b){x.toneMapping=m,_=!0;let S=o,A=a;for(let v=0;v<y.length;v++){const C=y[v];C.enabled!==!1&&(C.render(x,A,S,b),C.needsSwap!==!1&&(S=A,A=A===a?c:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},ft.getTransfer(f)===Et&&(u.defines.SRGB_TRANSFER="");const v=cv[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Uf=new sn,Cc=new ir(1,1),Of=new su,Ff=new uf,zf=new uu,Yh=[],$h=[],Jh=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gl(n,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Kh.set(i),n.uniformMatrix2fv(this.addr,!1,Kh),Jt(t,i)}}function gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),Jt(t,i)}}function _v(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),Jt(t,i)}}function vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Tv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cc.compareFunction=t.isReversedDepthBuffer()?nl:tl,r=Cc):r=Uf,t.setTexture2D(e||r,s)}function Av(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ff,s)}function Cv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||zf,s)}function Rv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Of,s)}function Pv(n){switch(n){case 5126:return hv;case 35664:return dv;case 35665:return fv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return bv;case 36295:return Ev;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Lv(n,e){n.uniform1fv(this.addr,e)}function Iv(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dv(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Nv(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Uv(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ov(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fv(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zv(n,e){n.uniform1iv(this.addr,e)}function kv(n,e){n.uniform2iv(this.addr,e)}function Bv(n,e){n.uniform3iv(this.addr,e)}function Gv(n,e){n.uniform4iv(this.addr,e)}function Vv(n,e){n.uniform1uiv(this.addr,e)}function Hv(n,e){n.uniform2uiv(this.addr,e)}function Wv(n,e){n.uniform3uiv(this.addr,e)}function Xv(n,e){n.uniform4uiv(this.addr,e)}function qv(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Cc:o=Uf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Yv(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ff,r[o])}function $v(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zf,r[o])}function Jv(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Of,r[o])}function Zv(n){switch(n){case 5126:return Lv;case 35664:return Iv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return Hv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Jv}}class Kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}}class Qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zv(t.type)}}class jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Qh(n,e){n.seq.push(e),n.map[e.id]=e}function ex(n,e,t){const i=n.name,s=i.length;for(nc.lastIndex=0;;){const r=nc.exec(i),o=nc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qh(t,l===void 0?new Kv(a,n,e):new Qv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jv(a),Qh(t,d)),t=d}}}class Yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);ex(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function jh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tx=37297;let nx=0;function ix(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ed=new nt;function sx(n){ft._getMatrix(ed,ft.workingColorSpace,n);const e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Hr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function td(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ix(n.getShaderSource(e),a)}else return r}function rx(n,e){const t=sx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ox={[Wc]:"Linear",[Xc]:"Reinhard",[qc]:"Cineon",[Ya]:"ACESFilmic",[$c]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function ax(n,e){const t=ox[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ko=new B;function lx(){ft.getLuminanceCoefficients(ko);const n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function ux(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Tr(n){return n!==""}function nd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(dx,px)}const fx=new Map;function px(n,e){let t=ot[e];if(t===void 0){const i=fx.get(e);if(i!==void 0)t=ot[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rc(t)}const mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(n){return n.replace(mx,gx)}function gx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const _x={[$s]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function vx(n){return _x[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xx={[ji]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function yx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mx={[ys]:"ENVMAP_MODE_REFRACTION"};function Sx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bx={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function Ex(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bx[n.combine]||"ENVMAP_BLENDING_NONE"}function wx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Tx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=vx(t),l=yx(t),u=Sx(t),d=Ex(t),h=wx(t),f=cx(t),g=ux(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Qn?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Rc(o),o=nd(o,t),o=id(o,t),a=Rc(a),a=nd(a,t),a=id(a,t),o=sd(o),a=sd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+m+o,x=y+p+a,b=jh(s,s.VERTEX_SHADER,T),S=jh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(U){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(S)||"",N=X.trim(),O=G.trim(),W=z.trim();let J=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,S);else{const Z=td(s,b,"vertex"),ee=td(s,S,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+Z+`
`+ee)}else N!==""?tt("WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(Y=!1);Y&&(U.diagnostics={runnable:J,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(b),s.deleteShader(S),v=new Yo(s,_),C=hx(s,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,tx)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}let Ax=0;class Cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rx(e),t.set(e,i)),i}}class Rx{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}}function Px(n){return n===es||n===Br||n===Gr}function Lx(n,e,t,i,s,r){const o=new sl,a=new Cx,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,C,w,U,X,G){const z=U.fog,N=X.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||O,W),Y=J&&J.mapping===Kr?J.image.height:null,Z=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=ee!==void 0?ee.length:0;let ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let le,me,I,E;if(Z){const Pt=Jn[Z];le=Pt.vertexShader,me=Pt.fragmentShader}else{le=v.vertexShader,me=v.fragmentShader;const Pt=a.getVertexShaderStage(v),St=a.getFragmentShaderStage(v);a.update(v,Pt,St),I=Pt.id,E=St.id}const V=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Q=X.isInstancedMesh===!0,R=X.isBatchedMesh===!0,L=!!v.map,k=!!v.matcap,F=!!J,ne=!!v.aoMap,D=!!v.lightMap,K=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,q=!!v.displacementMap,ae=!!v.emissiveMap,ye=!!v.metalnessMap,Se=!!v.roughnessMap,$=v.anisotropy>0,ze=v.clearcoat>0,Ae=v.dispersion>0,H=v.retroreflectivity>0,M=v.iridescence>0,oe=v.sheen>0,ue=v.transmission>0,fe=$&&!!v.anisotropyMap,Ee=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,_e=ze&&!!v.clearcoatRoughnessMap,xe=M&&!!v.iridescenceMap,Re=M&&!!v.iridescenceThicknessMap,Ye=oe&&!!v.sheenColorMap,Ne=oe&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,$e=!!v.specularColorMap,et=!!v.specularIntensityMap,st=ue&&!!v.transmissionMap,re=ue&&!!v.thicknessMap,Le=!!v.gradientMap,ve=!!v.alphaMap,Ie=v.alphaTest>0,ke=!!v.alphaHash,Me=!!v.extensions;let Je=Qn;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Je=n.toneMapping);const Xe={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:me,defines:v.defines,customVertexShaderID:I,customFragmentShaderID:E,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:R,batchingColor:R&&X._colorsTexture!==null,instancing:Q,instancingColor:Q&&X.instanceColor!==null,instancingMorph:Q&&X.morphTexture!==null,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:L,matcap:k,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:Y,aoMap:ne,lightMap:D,bumpMap:K,normalMap:ie,displacementMap:q,emissiveMap:ae,normalMapObjectSpace:ie&&v.normalMapType===Zd,normalMapTangentSpace:ie&&v.normalMapType===Oa,packedNormalMap:ie&&v.normalMapType===Oa&&Px(v.normalMap.format),metalnessMap:ye,roughnessMap:Se,anisotropy:$,anisotropyMap:fe,clearcoat:ze,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:_e,dispersion:Ae,retroreflection:H,iridescence:M,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:oe,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:$e,specularIntensityMap:et,transmission:ue,transmissionMap:st,thicknessMap:re,gradientMap:Le,opaque:v.transparent===!1&&v.blending===Js&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:ke,combine:v.combine,mapUv:L&&g(v.map.channel),aoMapUv:ne&&g(v.aoMap.channel),lightMapUv:D&&g(v.lightMap.channel),bumpMapUv:K&&g(v.bumpMap.channel),normalMapUv:ie&&g(v.normalMap.channel),displacementMapUv:q&&g(v.displacementMap.channel),emissiveMapUv:ae&&g(v.emissiveMap.channel),metalnessMapUv:ye&&g(v.metalnessMap.channel),roughnessMapUv:Se&&g(v.roughnessMap.channel),anisotropyMapUv:fe&&g(v.anisotropyMap.channel),clearcoatMapUv:Ee&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(v.sheenRoughnessMap.channel),specularMapUv:Pe&&g(v.specularMap.channel),specularColorMapUv:$e&&g(v.specularColorMap.channel),specularIntensityMapUv:et&&g(v.specularIntensityMap.channel),transmissionMapUv:st&&g(v.transmissionMap.channel),thicknessMapUv:re&&g(v.thicknessMap.channel),alphaMapUv:ve&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ie||$),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!N.attributes.uv&&(L||ve),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ce,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:L&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===Et,decodeVideoTextureEmissive:ae&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===In,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||R)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)C.push(w),C.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(p(C,v),y(C,v),C.push(n.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function p(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function y(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function T(v){const C=f[v.type];let w;if(C){const U=Jn[C];w=Ef.clone(U.uniforms)}else w=v.uniforms;return w}function x(v,C){let w=u.get(C);return w!==void 0?++w.usedTimes:(w=new Tx(n,C,v,s),l.push(w),u.set(C,w)),w}function b(v){if(--v.usedTimes===0){const C=l.indexOf(v);l[C]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:A}}function Ix(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Dx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function od(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ad(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,m,p){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function c(h,f,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);const T=a(h,f,g,_,m,p);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(h,f,g,_,m,p){const y=a(h,f,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||Dx),i.length>1&&i.sort(f||od),s.length>1&&s.sort(f||od)}function d(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Nx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ad,n.set(i,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ux(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new ut};break;case"SpotLight":t={position:new B,direction:new B,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fx=0;function zx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kx(n){const e=new Ux,t=Ox(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new xt,o=new xt;function a(l){let u=0,d=0,h=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,T=0,x=0,b=0,S=0,A=0,v=0,C=0,w=0;l.sort(zx);for(let X=0,G=l.length;X<G;X++){const z=l[X],N=z.color,O=z.intensity,W=z.distance;let J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===es?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=N.r*O,d+=N.g*O,h+=N.b*O;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(z.sh.coefficients[Y],O);w++}else if(z.isSunLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,ee=t.get(z);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=J;const j=Z.getViewportCount();for(let ce=0;ce<j;ce++)i.sunShadowMatrix[_+ce]=Z.getMatrix(ce),i.sunShadowCascade[_+ce]=Z._cascadeData[ce];_+=j,g++}i.sun[f]=Y,f++}else if(z.isDirectionalLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,ee=t.get(z);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=z.shadow.matrix,b++}i.directional[m]=Y,m++}else if(z.isSpotLight){const Y=e.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(N).multiplyScalar(O),Y.distance=W,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,i.spot[y]=Y;const Z=z.shadow;if(z.map&&(i.spotLightMap[v]=z.map,v++,Z.updateMatrices(z),z.castShadow&&C++),i.spotLightMatrix[y]=Z.matrix,z.castShadow){const ee=t.get(z);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[y]=ee,i.spotShadowMap[y]=J,A++}y++}else if(z.isRectAreaLight){const Y=e.get(z);Y.color.copy(N).multiplyScalar(O),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),i.rectArea[T]=Y,T++}else if(z.isPointLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const Z=z.shadow,ee=t.get(z);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=z.shadow.matrix,S++}i.point[p]=Y,p++}else if(z.isHemisphereLight){const Y=e.get(z);Y.skyColor.copy(z.color).multiplyScalar(O),Y.groundColor.copy(z.groundColor).multiplyScalar(O),i.hemi[x]=Y,x++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==T||U.hemiLength!==x||U.numSunShadows!==g||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==A||U.numSpotMaps!==v||U.numLightProbes!==w)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=T,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=y,U.rectAreaLength=T,U.hemiLength=x,U.numSunShadows=g,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=A,U.numSpotMaps=v,U.numLightProbes=w,i.version=Fx++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){const x=l[y];if(x.isSunLight){const b=i.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(x.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function ld(n){const e=new kx(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Bx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ld(n),e.set(s,[a])):r>=o.length?(a=new ld(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`,Hx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Wx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],cd=new xt,yr=new B,ic=new B;function Xx(n,e,t){let i=new ol;const s=new Te,r=new Te,o=new Ot,a=new Tf,c=new Af,l={},u=t.maxTextureSize,d={[Qi]:gn,[gn]:Qi,[In]:In},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Gx,fragmentShader:Vx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let p=this.type;this.render=function(S,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ad&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);const C=n.getRenderTarget(),w=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),X=n.state;X.setBlending(fi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=p!==this.type;G&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=S.length;z<N;z++){const O=S[z],W=O.shadow;if(W===void 0){tt("WebGLShadowMap:",O,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const J=W.getFrameExtents();s.multiply(J),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,W.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ws){if(O.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Fn(s.x,s.y,{format:es,type:ni,minFilter:tn,magFilter:tn,generateMipmaps:!1}),W.map.texture.name=O.name+".shadowMap",W.map.depthTexture=new ir(s.x,s.y,Un),W.map.depthTexture.name=O.name+".shadowMapDepth",W.map.depthTexture.format=gi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt}else O.isPointLight?(W.map=new bu(s.x),W.map.depthTexture=new pf(s.x,ti)):(W.map=new Fn(s.x,s.y),W.map.depthTexture=new ir(s.x,s.y,ti)),W.map.depthTexture.name=O.name+".shadowMap",W.map.depthTexture.format=gi,this.type===$s?(W.map.depthTexture.compareFunction=Y?nl:tl,W.map.depthTexture.minFilter=tn,W.map.depthTexture.magFilter=tn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();O.isPointLight!==!0&&W.updateMatrices(O,v);for(let ee=0;ee<Z;ee++){const j=W.getCamera(ee);if(O.isPointLight){const ce=W.camera,le=W.matrix,me=O.distance||ce.far;me!==ce.far&&(ce.far=me,ce.updateProjectionMatrix()),yr.setFromMatrixPosition(O.matrixWorld),ce.position.copy(yr),ic.copy(ce.position),ic.add(Hx[ee]),ce.up.copy(Wx[ee]),ce.lookAt(ic),ce.updateMatrixWorld(),le.makeTranslation(-yr.x,-yr.y,-yr.z),cd.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),W._frustum.setFromProjectionMatrix(cd,ce.coordinateSystem,ce.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(W.map),n.clear());const ce=W.getViewport(ee);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),X.viewport(o)}i=W.getFrustum(ee),x(A,v,j,O,this.type)}W.isPointLightShadow!==!0&&this.type===Ws&&y(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,w,U)};function y(S,A){const v=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Fn(s.x,s.y,{format:es,type:ni}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,v,h,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,v,f,_,null)}function T(S,A,v,C){let w=null;const U=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)w=U;else if(w=v.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const X=w.uuid,G=A.uuid;let z=l[X];z===void 0&&(z={},l[X]=z);let N=z[G];N===void 0&&(N=w.clone(),z[G]=N,A.addEventListener("dispose",b)),w=N}if(w.visible=A.visible,w.wireframe=A.wireframe,C===Ws?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=n.properties.get(w);X.light=v}return w}function x(S,A,v,C,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Ws)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const G=e.update(S),z=S.material;if(Array.isArray(z)){const N=G.groups;for(let O=0,W=N.length;O<W;O++){const J=N[O],Y=z[J.materialIndex];if(Y&&Y.visible){const Z=T(S,Y,C,w);S.onBeforeShadow(n,S,A,v,G,Z,J),n.renderBufferDirect(v,null,G,Z,S,J),S.onAfterShadow(n,S,A,v,G,Z,J)}}}else if(z.visible){const N=T(S,z,C,w);S.onBeforeShadow(n,S,A,v,G,N,null),n.renderBufferDirect(v,null,G,N,S,null),S.onAfterShadow(n,S,A,v,G,N,null)}}const X=S.children;for(let G=0,z=X.length;G<z;G++)x(X[G],A,v,C,w)}function b(S){S.target.removeEventListener("dispose",b);for(const v in l){const C=l[v],w=S.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}function qx(n,e){function t(){let re=!1;const Le=new Ot;let ve=null;const Ie=new Ot(0,0,0,0);return{setMask:function(ke){ve!==ke&&!re&&(n.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){re=ke},setClear:function(ke,Me,Je,Xe,Pt){Pt===!0&&(ke*=Xe,Me*=Xe,Je*=Xe),Le.set(ke,Me,Je,Xe),Ie.equals(Le)===!1&&(n.clearColor(ke,Me,Je,Xe),Ie.copy(Le))},reset:function(){re=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let re=!1,Le=!1,ve=null,Ie=null,ke=null;return{setReversed:function(Me){if(Le!==Me){const Je=e.get("EXT_clip_control");Me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=ke;ke=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?V(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!re&&(n.depthMask(Me),ve=Me)},setFunc:function(Me){if(Le&&(Me=Xp[Me]),Ie!==Me){switch(Me){case Qo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case ea:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case ta:n.depthFunc(n.EQUAL);break;case na:n.depthFunc(n.GEQUAL);break;case ia:n.depthFunc(n.GREATER);break;case sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){re=Me},setClear:function(Me){ke!==Me&&(ke=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){re=!1,ve=null,Ie=null,ke=null,Le=!1}}}function s(){let re=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Je=null,Xe=null,Pt=null;return{setTest:function(St){re||(St?V(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(St){Le!==St&&!re&&(n.stencilMask(St),Le=St)},setFunc:function(St,Hn,si){(ve!==St||Ie!==Hn||ke!==si)&&(n.stencilFunc(St,Hn,si),ve=St,Ie=Hn,ke=si)},setOp:function(St,Hn,si){(Me!==St||Je!==Hn||Xe!==si)&&(n.stencilOp(St,Hn,si),Me=St,Je=Hn,Xe=si)},setLocked:function(St){re=St},setClear:function(St){Pt!==St&&(n.clearStencil(St),Pt=St)},reset:function(){re=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Je=null,Xe=null,Pt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,T=null,x=null,b=null,S=null,A=null,v=new ut(0,0,0),C=0,w=!1,U=null,X=null,G=null,z=null,N=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=J>=2);let Z=null,ee={};const j=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),le=new Ot().fromArray(j),me=new Ot().fromArray(ce);function I(re,Le,ve,Ie){const ke=new Uint8Array(4),Me=n.createTexture();n.bindTexture(re,Me),n.texParameteri(re,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(re,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<ve;Je++)re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Le+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Me}const E={};E[n.TEXTURE_2D]=I(n.TEXTURE_2D,n.TEXTURE_2D,1),E[n.TEXTURE_CUBE_MAP]=I(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[n.TEXTURE_2D_ARRAY]=I(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),E[n.TEXTURE_3D]=I(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(js),K(!1),ie(dc),V(n.CULL_FACE),ne(fi);function V(re){u[re]!==!0&&(n.enable(re),u[re]=!0)}function te(re){u[re]!==!1&&(n.disable(re),u[re]=!1)}function Q(re,Le){return h[re]!==Le?(n.bindFramebuffer(re,Le),h[re]=Le,re===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),re===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function R(re,Le){let ve=g,Ie=!1;if(re){ve=f.get(Le),ve===void 0&&(ve=[],f.set(Le,ve));const ke=re.textures;if(ve.length!==ke.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Je=ke.length;Me<Je;Me++)ve[Me]=n.COLOR_ATTACHMENT0+Me;ve.length=ke.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function L(re){return _!==re?(n.useProgram(re),_=re,!0):!1}const k={[ps]:n.FUNC_ADD,[Rd]:n.FUNC_SUBTRACT,[Pd]:n.FUNC_REVERSE_SUBTRACT};k[Ld]=n.MIN,k[Id]=n.MAX;const F={[Dd]:n.ZERO,[Nd]:n.ONE,[Ud]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[Gd]:n.SRC_ALPHA_SATURATE,[kd]:n.DST_COLOR,[Fd]:n.DST_ALPHA,[Od]:n.ONE_MINUS_SRC_COLOR,[Vc]:n.ONE_MINUS_SRC_ALPHA,[Bd]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Vd]:n.CONSTANT_COLOR,[Hd]:n.ONE_MINUS_CONSTANT_COLOR,[Wd]:n.CONSTANT_ALPHA,[Xd]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(re,Le,ve,Ie,ke,Me,Je,Xe,Pt,St){if(re===fi){m===!0&&(te(n.BLEND),m=!1);return}if(m===!1&&(V(n.BLEND),m=!0),re!==Cd){if(re!==p||St!==w){if((y!==ps||b!==ps)&&(n.blendEquation(n.FUNC_ADD),y=ps,b=ps),St)switch(re){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",re);break}else switch(re){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pc:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",re);break}T=null,x=null,S=null,A=null,v.set(0,0,0),C=0,p=re,w=St}return}ke=ke||Le,Me=Me||ve,Je=Je||Ie,(Le!==y||ke!==b)&&(n.blendEquationSeparate(k[Le],k[ke]),y=Le,b=ke),(ve!==T||Ie!==x||Me!==S||Je!==A)&&(n.blendFuncSeparate(F[ve],F[Ie],F[Me],F[Je]),T=ve,x=Ie,S=Me,A=Je),(Xe.equals(v)===!1||Pt!==C)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Pt),v.copy(Xe),C=Pt),p=re,w=!1}function D(re,Le){re.side===In?te(n.CULL_FACE):V(n.CULL_FACE);let ve=re.side===gn;Le&&(ve=!ve),K(ve),re.blending===Js&&re.transparent===!1?ne(fi):ne(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),o.setFunc(re.depthFunc),o.setTest(re.depthTest),o.setMask(re.depthWrite),r.setMask(re.colorWrite);const Ie=re.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(re.stencilWriteMask),a.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),a.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),ae(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(re){U!==re&&(re?n.frontFace(n.CW):n.frontFace(n.CCW),U=re)}function ie(re){re!==wd?(V(n.CULL_FACE),re!==X&&(re===dc?n.cullFace(n.BACK):re===Td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),X=re}function q(re){re!==G&&(W&&n.lineWidth(re),G=re)}function ae(re,Le,ve){re?(V(n.POLYGON_OFFSET_FILL),(z!==Le||N!==ve)&&(z=Le,N=ve,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ve))):te(n.POLYGON_OFFSET_FILL)}function ye(re){re?V(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function Se(re){re===void 0&&(re=n.TEXTURE0+O-1),Z!==re&&(n.activeTexture(re),Z=re)}function $(re,Le,ve){ve===void 0&&(Z===null?ve=n.TEXTURE0+O-1:ve=Z);let Ie=ee[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},ee[ve]=Ie),(Ie.type!==re||Ie.texture!==Le)&&(Z!==ve&&(n.activeTexture(ve),Z=ve),n.bindTexture(re,Le||E[re]),Ie.type=re,Ie.texture=Le)}function ze(){const re=ee[Z];re!==void 0&&re.type!==void 0&&(n.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(re){mt("WebGLState:",re)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(re){mt("WebGLState:",re)}}function M(){try{n.texSubImage2D(...arguments)}catch(re){mt("WebGLState:",re)}}function oe(){try{n.texSubImage3D(...arguments)}catch(re){mt("WebGLState:",re)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(re){mt("WebGLState:",re)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(re){mt("WebGLState:",re)}}function Ee(){try{n.texStorage2D(...arguments)}catch(re){mt("WebGLState:",re)}}function Ce(){try{n.texStorage3D(...arguments)}catch(re){mt("WebGLState:",re)}}function _e(){try{n.texImage2D(...arguments)}catch(re){mt("WebGLState:",re)}}function xe(){try{n.texImage3D(...arguments)}catch(re){mt("WebGLState:",re)}}function Re(re){return d[re]!==void 0?d[re]:n.getParameter(re)}function Ye(re,Le){d[re]!==Le&&(n.pixelStorei(re,Le),d[re]=Le)}function Ne(re){le.equals(re)===!1&&(n.scissor(re.x,re.y,re.z,re.w),le.copy(re))}function Pe(re){me.equals(re)===!1&&(n.viewport(re.x,re.y,re.z,re.w),me.copy(re))}function $e(re,Le){let ve=l.get(Le);ve===void 0&&(ve=new WeakMap,l.set(Le,ve));let Ie=ve.get(re);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,re.name),ve.set(re,Ie))}function et(re,Le){const Ie=l.get(Le).get(re);c.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,re.__bindingPointIndex),c.set(Le,Ie))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,ee={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,T=null,x=null,b=null,S=null,A=null,v=new ut(0,0,0),C=0,w=!1,U=null,X=null,G=null,z=null,N=null,le.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:te,bindFramebuffer:Q,drawBuffers:R,useProgram:L,setBlending:ne,setMaterial:D,setFlipSided:K,setCullFace:ie,setLineWidth:q,setPolygonOffset:ae,setScissorTest:ye,activeTexture:Se,bindTexture:$,unbindTexture:ze,compressedTexImage2D:Ae,compressedTexImage3D:H,texImage2D:_e,texImage3D:xe,pixelStorei:Ye,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:M,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:Ne,viewport:Pe,reset:st}}function Yx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(H,M){return g?new OffscreenCanvas(H,M):Fa("canvas")}function m(H,M,oe){let ue=1;const fe=Ae(H);if((fe.width>oe||fe.height>oe)&&(ue=oe/Math.max(fe.width,fe.height)),ue<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const Ee=Math.floor(ue*fe.width),Ce=Math.floor(ue*fe.height);h===void 0&&(h=_(Ee,Ce));const _e=M?_(Ee,Ce):h;return _e.width=Ee,_e.height=Ce,_e.getContext("2d").drawImage(H,0,0,Ee,Ce),tt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ee+"x"+Ce+")."),_e}else return"data"in H&&tt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),H;return H}function p(H){return H.generateMipmaps}function y(H){n.generateMipmap(H)}function T(H){return H.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?n.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(H,M,oe,ue,fe,Ee=!1){if(H!==null){if(n[H]!==void 0)return n[H];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let Ce;ue&&(Ce=e.get("EXT_texture_norm16"),Ce||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=M;if(M===n.RED&&(oe===n.FLOAT&&(_e=n.R32F),oe===n.HALF_FLOAT&&(_e=n.R16F),oe===n.UNSIGNED_BYTE&&(_e=n.R8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.R16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.R16_SNORM_EXT)),M===n.RED_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.R8UI),oe===n.UNSIGNED_SHORT&&(_e=n.R16UI),oe===n.UNSIGNED_INT&&(_e=n.R32UI),oe===n.BYTE&&(_e=n.R8I),oe===n.SHORT&&(_e=n.R16I),oe===n.INT&&(_e=n.R32I)),M===n.RG&&(oe===n.FLOAT&&(_e=n.RG32F),oe===n.HALF_FLOAT&&(_e=n.RG16F),oe===n.UNSIGNED_BYTE&&(_e=n.RG8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RG16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RG8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RG16UI),oe===n.UNSIGNED_INT&&(_e=n.RG32UI),oe===n.BYTE&&(_e=n.RG8I),oe===n.SHORT&&(_e=n.RG16I),oe===n.INT&&(_e=n.RG32I)),M===n.RGB_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),oe===n.UNSIGNED_INT&&(_e=n.RGB32UI),oe===n.BYTE&&(_e=n.RGB8I),oe===n.SHORT&&(_e=n.RGB16I),oe===n.INT&&(_e=n.RGB32I)),M===n.RGBA_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),oe===n.UNSIGNED_INT&&(_e=n.RGBA32UI),oe===n.BYTE&&(_e=n.RGBA8I),oe===n.SHORT&&(_e=n.RGBA16I),oe===n.INT&&(_e=n.RGBA32I)),M===n.RGB&&(oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGB16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RGB16_SNORM_EXT),oe===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),oe===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),M===n.RGBA){const xe=Ee?Hr:ft.getTransfer(fe);oe===n.FLOAT&&(_e=n.RGBA32F),oe===n.HALF_FLOAT&&(_e=n.RGBA16F),oe===n.UNSIGNED_BYTE&&(_e=xe===Et?n.SRGB8_ALPHA8:n.RGBA8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGBA16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RGBA16_SNORM_EXT),oe===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),oe===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function b(H,M){let oe;return H?M===null||M===ti||M===tr?oe=n.DEPTH24_STENCIL8:M===Un?oe=n.DEPTH32F_STENCIL8:M===er&&(oe=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===tr?oe=n.DEPTH_COMPONENT24:M===Un?oe=n.DEPTH_COMPONENT32F:M===er&&(oe=n.DEPTH_COMPONENT16),oe}function S(H,M){return p(H)===!0||H.isFramebufferTexture&&H.minFilter!==Qt&&H.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?M.mipmaps.length:1}function A(H){const M=H.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function v(H){const M=H.target;M.removeEventListener("dispose",v),U(M)}function C(H){const M=i.get(H);if(M.__webglInit===void 0)return;const oe=H.source,ue=f.get(oe);if(ue){const fe=ue[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&w(H),Object.keys(ue).length===0&&f.delete(oe)}i.remove(H)}function w(H){const M=i.get(H);n.deleteTexture(M.__webglTexture);const oe=H.source,ue=f.get(oe);delete ue[M.__cacheKey],o.memory.textures--}function U(H){const M=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(M.__webglFramebuffer[ue]))for(let fe=0;fe<M.__webglFramebuffer[ue].length;fe++)n.deleteFramebuffer(M.__webglFramebuffer[ue][fe]);else n.deleteFramebuffer(M.__webglFramebuffer[ue]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ue])}else{if(Array.isArray(M.__webglFramebuffer))for(let ue=0;ue<M.__webglFramebuffer.length;ue++)n.deleteFramebuffer(M.__webglFramebuffer[ue]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ue=0;ue<M.__webglColorRenderbuffer.length;ue++)M.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ue]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const oe=H.textures;for(let ue=0,fe=oe.length;ue<fe;ue++){const Ee=i.get(oe[ue]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(oe[ue])}i.remove(H)}let X=0;function G(){X=0}function z(){return X}function N(H){X=H}function O(){const H=X;return H>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,H}function W(H){const M=[];return M.push(H.wrapS),M.push(H.wrapT),M.push(H.wrapR||0),M.push(H.magFilter),M.push(H.minFilter),M.push(H.anisotropy),M.push(H.internalFormat),M.push(H.format),M.push(H.type),M.push(H.generateMipmaps),M.push(H.premultiplyAlpha),M.push(H.flipY),M.push(H.unpackAlignment),M.push(H.colorSpace),M.join()}function J(H,M){const oe=i.get(H);if(H.isVideoTexture&&$(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&oe.__version!==H.version){const ue=H.image;if(ue===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(oe,H,M);return}}else H.isExternalTexture&&(oe.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture,n.TEXTURE0+M)}function Y(H,M){const oe=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&oe.__version!==H.version){te(oe,H,M);return}else H.isExternalTexture&&(oe.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,oe.__webglTexture,n.TEXTURE0+M)}function Z(H,M){const oe=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&oe.__version!==H.version){te(oe,H,M);return}t.bindTexture(n.TEXTURE_3D,oe.__webglTexture,n.TEXTURE0+M)}function ee(H,M){const oe=i.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&oe.__version!==H.version){Q(oe,H,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture,n.TEXTURE0+M)}const j={[kr]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[ra]:n.MIRRORED_REPEAT},ce={[Qt]:n.NEAREST,[$d]:n.NEAREST_MIPMAP_NEAREST,[Er]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},le={[Qd]:n.NEVER,[sf]:n.ALWAYS,[jd]:n.LESS,[tl]:n.LEQUAL,[ef]:n.EQUAL,[nl]:n.GEQUAL,[tf]:n.GREATER,[nf]:n.NOTEQUAL};function me(H,M){if(M.type===Un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===Wo||M.magFilter===Er||M.magFilter===Xi||M.minFilter===tn||M.minFilter===Wo||M.minFilter===Er||M.minFilter===Xi)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(H,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(H,n.TEXTURE_WRAP_T,j[M.wrapT]),(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)&&n.texParameteri(H,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(H,n.TEXTURE_MAG_FILTER,ce[M.magFilter]),n.texParameteri(H,n.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(n.texParameteri(H,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(H,n.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Er&&M.minFilter!==Xi||M.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");n.texParameterf(H,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function I(H,M){let oe=!1;H.__webglInit===void 0&&(H.__webglInit=!0,M.addEventListener("dispose",A));const ue=M.source;let fe=f.get(ue);fe===void 0&&(fe={},f.set(ue,fe));const Ee=W(M);if(Ee!==H.__cacheKey){fe[Ee]===void 0&&(fe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),fe[Ee].usedTimes++;const Ce=fe[H.__cacheKey];Ce!==void 0&&(fe[H.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(M)),H.__cacheKey=Ee,H.__webglTexture=fe[Ee].texture}return oe}function E(H,M,oe){return Math.floor(Math.floor(H/oe)/M)}function V(H,M,oe,ue){const Ee=H.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,oe,ue,M.data);else{Ee.sort((Ye,Ne)=>Ye.start-Ne.start);let Ce=0;for(let Ye=1;Ye<Ee.length;Ye++){const Ne=Ee[Ce],Pe=Ee[Ye],$e=Ne.start+Ne.count,et=E(Pe.start,M.width,4),st=E(Ne.start,M.width,4);Pe.start<=$e+1&&et===st&&E(Pe.start+Pe.count-1,M.width,4)===et?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,Ee[Ce]=Pe)}Ee.length=Ce+1;const _e=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ye=0,Ne=Ee.length;Ye<Ne;Ye++){const Pe=Ee[Ye],$e=Math.floor(Pe.start/4),et=Math.ceil(Pe.count/4),st=$e%M.width,re=Math.floor($e/M.width),Le=et,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,re),t.texSubImage2D(n.TEXTURE_2D,0,st,re,Le,ve,oe,ue,M.data)}H.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function te(H,M,oe){let ue=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=n.TEXTURE_3D);const fe=I(H,M),Ee=M.source;t.bindTexture(ue,H.__webglTexture,n.TEXTURE0+oe);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+oe),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=ft.getPrimaries(ft.workingColorSpace),Ie=M.colorSpace===bi?null:ft.getPrimaries(M.colorSpace),ke=M.colorSpace===bi||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let xe=m(M.image,!1,s.maxTextureSize);xe=ze(M,xe);const Re=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type);let Ne=x(M.internalFormat,Re,Ye,M.normalized,M.colorSpace,M.isVideoTexture);me(ue,M);let Pe;const $e=M.mipmaps,et=M.isVideoTexture!==!0,st=Ce.__version===void 0||fe===!0,re=Ee.dataReady,Le=S(M,xe);if(M.isDepthTexture)Ne=b(M.format===qi,M.type),st&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ye,null));else if(M.isDataTexture)if($e.length>0){et&&st&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let ve=0,Ie=$e.length;ve<Ie;ve++)Pe=$e[ve],et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data);M.generateMipmaps=!1}else et?(st&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height),re&&V(M,xe,Re,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ye,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,$e[0].width,$e[0].height,xe.depth);for(let ve=0,Ie=$e.length;ve<Ie;ve++)if(Pe=$e[ve],M.format!==On)if(Re!==null)if(et){if(re)if(M.layerUpdates.size>0){const ke=Vh(Pe.width,Pe.height,M.format,M.type);for(const Me of M.layerUpdates){const Je=Pe.data.subarray(Me*ke/Pe.data.BYTES_PER_ELEMENT,(Me+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Me,Pe.width,Pe.height,1,Re,Je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Re,Ye,Pe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{et&&st&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let ve=0,Ie=$e.length;ve<Ie;ve++)Pe=$e[ve],M.format!==On?Re!==null?et?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Pe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data)}else if(M.isDataArrayTexture)if(et){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,xe.width,xe.height,xe.depth),re)if(M.layerUpdates.size>0){const ve=Vh(xe.width,xe.height,M.format,M.type);for(const Ie of M.layerUpdates){const ke=xe.data.subarray(Ie*ve/xe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,Ye,ke)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(M.isData3DTexture)et?(st&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,xe.width,xe.height,xe.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(M.isFramebufferTexture){if(st)if(et)t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height);else{let ve=xe.width,Ie=xe.height;for(let ke=0;ke<Le;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ne,ve,Ie,0,Re,Ye,null),ve>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),d.add(M),ve.onpaint=Ie=>{const ke=Ie.changedElements;for(const Me of d)ke.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const ke=n.RGBA,Me=n.RGBA,Je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,Me,Je,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&st){const ve=Ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}for(let ve=0,Ie=$e.length;ve<Ie;ve++)Pe=$e[ve],et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,Ye,Pe):t.texImage2D(n.TEXTURE_2D,ve,Ne,Re,Ye,Pe);M.generateMipmaps=!1}else if(et){if(st){const ve=Ae(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ye,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,Ye,xe);p(M)&&y(ue),Ce.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}H.__version=M.version}function Q(H,M,oe){if(M.image.length!==6)return;const ue=I(H,M),fe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+oe);const Ee=i.get(fe);if(fe.version!==Ee.__version||ue===!0){t.activeTexture(n.TEXTURE0+oe);const Ce=ft.getPrimaries(ft.workingColorSpace),_e=M.colorSpace===bi?null:ft.getPrimaries(M.colorSpace),xe=M.colorSpace===bi||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Ye=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!Ye?Ne[Me]=m(M.image[Me],!0,s.maxCubemapSize):Ne[Me]=Ye?M.image[Me].image:M.image[Me],Ne[Me]=ze(M,Ne[Me]);const Pe=Ne[0],$e=r.convert(M.format,M.colorSpace),et=r.convert(M.type),st=x(M.internalFormat,$e,et,M.normalized,M.colorSpace),re=M.isVideoTexture!==!0,Le=Ee.__version===void 0||ue===!0,ve=fe.dataReady;let Ie=S(M,Pe);me(n.TEXTURE_CUBE_MAP,M);let ke;if(Re){re&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,st,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){ke=Ne[Me].mipmaps;for(let Je=0;Je<ke.length;Je++){const Xe=ke[Je];M.format!==On?$e!==null?re?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Xe.width,Xe.height,$e,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,st,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Xe.width,Xe.height,$e,et,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,st,Xe.width,Xe.height,0,$e,et,Xe.data)}}}else{if(ke=M.mipmaps,re&&Le){ke.length>0&&Ie++;const Me=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,st,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ye){re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,$e,et,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,Ne[Me].width,Ne[Me].height,0,$e,et,Ne[Me].data);for(let Je=0;Je<ke.length;Je++){const Pt=ke[Je].image[Me].image;re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Pt.width,Pt.height,$e,et,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,st,Pt.width,Pt.height,0,$e,et,Pt.data)}}else{re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$e,et,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,st,$e,et,Ne[Me]);for(let Je=0;Je<ke.length;Je++){const Xe=ke[Je];re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,$e,et,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,st,$e,et,Xe.image[Me])}}}p(M)&&y(n.TEXTURE_CUBE_MAP),Ee.__version=fe.version,M.onUpdate&&M.onUpdate(M)}H.__version=M.version}function R(H,M,oe,ue,fe,Ee){const Ce=r.convert(oe.format,oe.colorSpace),_e=r.convert(oe.type),xe=x(oe.internalFormat,Ce,_e,oe.normalized,oe.colorSpace),Re=i.get(M),Ye=i.get(oe);if(Ye.__renderTarget=M,!Re.__hasExternalTextures){const Ne=Math.max(1,M.width>>Ee),Pe=Math.max(1,M.height>>Ee);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,Ee,xe,Ne,Pe,M.depth,0,Ce,_e,null):t.texImage2D(fe,Ee,xe,Ne,Pe,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,H),Se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,fe,Ye.__webglTexture,0,ye(M)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,fe,Ye.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(H,M,oe){if(n.bindRenderbuffer(n.RENDERBUFFER,H),M.depthBuffer){const ue=M.depthTexture,fe=ue&&ue.isDepthTexture?ue.type:null,Ee=b(M.stencilBuffer,fe),Ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(M),Ee,M.width,M.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(M),Ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,H)}else{const ue=M.textures;for(let fe=0;fe<ue.length;fe++){const Ee=ue[fe],Ce=r.convert(Ee.format,Ee.colorSpace),_e=r.convert(Ee.type),xe=x(Ee.internalFormat,Ce,_e,Ee.normalized,Ee.colorSpace);Se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(M),xe,M.width,M.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(M),xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function k(H,M,oe){const ue=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,H),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=i.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ue){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),fe.__webglTexture===void 0){fe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),me(n.TEXTURE_CUBE_MAP,M.depthTexture);const Re=r.convert(M.depthTexture.format),Ye=r.convert(M.depthTexture.type);let Ne;M.depthTexture.format===gi?Ne=n.DEPTH_COMPONENT24:M.depthTexture.format===qi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,M.width,M.height,0,Re,Ye,null)}}else J(M.depthTexture,0);const Ee=fe.__webglTexture,Ce=ye(M),_e=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+oe:n.TEXTURE_2D,xe=M.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===gi)Se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else if(M.depthTexture.format===qi)Se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(H){const M=i.get(H),oe=H.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==H.depthTexture){const ue=H.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ue){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ue.removeEventListener("dispose",fe)};ue.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=ue}if(H.depthTexture&&!M.__autoAllocateDepthBuffer)if(oe)for(let ue=0;ue<6;ue++)k(M.__webglFramebuffer[ue],H,ue);else{const ue=H.texture.mipmaps;ue&&ue.length>0?k(M.__webglFramebuffer[0],H,0):k(M.__webglFramebuffer,H,0)}else if(oe){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]===void 0)M.__webglDepthbuffer[ue]=n.createRenderbuffer(),L(M.__webglDepthbuffer[ue],H,!1);else{const fe=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Ee)}}else{const ue=H.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),L(M.__webglDepthbuffer,H,!1);else{const fe=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(H,M,oe){const ue=i.get(H);M!==void 0&&R(ue.__webglFramebuffer,H,H.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),oe!==void 0&&F(H)}function D(H){const M=H.texture,oe=i.get(H),ue=i.get(M);H.addEventListener("dispose",v);const fe=H.textures,Ee=H.isWebGLCubeRenderTarget===!0,Ce=fe.length>1;if(Ce||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=M.version,o.memory.textures++),Ee){oe.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){oe.__webglFramebuffer[_e]=[];for(let xe=0;xe<M.mipmaps.length;xe++)oe.__webglFramebuffer[_e][xe]=n.createFramebuffer()}else oe.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){oe.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)oe.__webglFramebuffer[_e]=n.createFramebuffer()}else oe.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let _e=0,xe=fe.length;_e<xe;_e++){const Re=i.get(fe[_e]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(H.samples>0&&Se(H)===!1){oe.__webglMultisampledFramebuffer=n.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const xe=fe[_e];oe.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]);const Re=r.convert(xe.format,xe.colorSpace),Ye=r.convert(xe.type),Ne=x(xe.internalFormat,Re,Ye,xe.normalized,xe.colorSpace,H.isXRRenderTarget===!0),Pe=ye(H);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,H.width,H.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,oe.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),H.depthBuffer&&(oe.__webglDepthRenderbuffer=n.createRenderbuffer(),L(oe.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),me(n.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)R(oe.__webglFramebuffer[_e][xe],H,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else R(oe.__webglFramebuffer[_e],H,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(M)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let _e=0,xe=fe.length;_e<xe;_e++){const Re=fe[_e],Ye=i.get(Re);let Ne=n.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ne=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),me(Ne,Re),R(oe.__webglFramebuffer,H,Re,n.COLOR_ATTACHMENT0+_e,Ne,0),p(Re)&&y(Ne)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(_e=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),me(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)R(oe.__webglFramebuffer[xe],H,M,n.COLOR_ATTACHMENT0,_e,xe);else R(oe.__webglFramebuffer,H,M,n.COLOR_ATTACHMENT0,_e,0);p(M)&&y(_e),t.unbindTexture()}H.depthBuffer&&F(H)}function K(H){const M=H.textures;for(let oe=0,ue=M.length;oe<ue;oe++){const fe=M[oe];if(p(fe)){const Ee=T(H),Ce=i.get(fe).__webglTexture;t.bindTexture(Ee,Ce),y(Ee),t.unbindTexture()}}}const ie=[],q=[];function ae(H){if(H.samples>0){if(Se(H)===!1){const M=H.textures,oe=H.width,ue=H.height;let fe=n.COLOR_BUFFER_BIT;const Ee=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(H),_e=M.length>1;if(_e)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=H.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(M[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,oe,ue,0,0,oe,ue,fe,n.NEAREST),c===!0&&(ie.length=0,q.length=0,ie.push(n.COLOR_ATTACHMENT0+Re),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(ie.push(Ee),q.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(M[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){const M=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ye(H){return Math.min(s.maxSamples,H.samples)}function Se(H){const M=i.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $(H){const M=o.render.frame;u.get(H)!==M&&(u.set(H,M),H.update())}function ze(H,M){const oe=H.colorSpace,ue=H.format,fe=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||oe!==Vr&&oe!==bi&&(ft.getTransfer(oe)===Et?(ue!==On||fe!==yn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",oe)),M}function Ae(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(l.width=H.naturalWidth||H.width,l.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(l.width=H.displayWidth,l.height=H.displayHeight):(l.width=H.width,l.height=H.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=ne,this.setupRenderTarget=D,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=R,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kf(n,e){function t(i,s=bi){let r;const o=ft.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Ja)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kc)return n.BYTE;if(i===Qc)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===$a)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===tu)return n.ALPHA;if(i===nu)return n.RGB;if(i===On)return n.RGBA;if(i===gi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===Ka)return n.RED;if(i===Qa)return n.RED_INTEGER;if(i===es)return n.RG;if(i===ja)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===Lr||i===Ir||i===Dr||i===Nr)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oa||i===aa||i===la||i===ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ua||i===ha||i===da||i===fa||i===pa||i===Br||i===ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ua||i===ha)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===da)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fa)return r.COMPRESSED_R11_EAC;if(i===pa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Br)return r.COMPRESSED_RG11_EAC;if(i===ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ga||i===_a||i===va||i===xa||i===ya||i===Ma||i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ga)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_a)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===va)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ba)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ea)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ta)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ca)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ra)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===La||i===Ia)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Da||i===Na||i===Gr||i===Ua)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
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

}`;class Zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:$x,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kx extends Ui{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Zx,p={},y=t.getContextAttributes();let T=null,x=null;const b=[],S=[],A=new Te;let v=null,C=null;const w=new wn;w.viewport=new Ot;const U=new wn;U.viewport=new Ot;const X=[w,U],G=new Pf;let z=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let V=b[E];return V===void 0&&(V=new qo,b[E]=V),V.getTargetRaySpace()},this.getControllerGrip=function(E){let V=b[E];return V===void 0&&(V=new qo,b[E]=V),V.getGripSpace()},this.getHand=function(E){let V=b[E];return V===void 0&&(V=new qo,b[E]=V),V.getHandSpace()};function O(E){const V=S.indexOf(E.inputSource);if(V===-1)return;const te=b[V];te!==void 0&&(te.update(E.inputSource,E.frame,l||o),te.dispatchEvent({type:E.type,data:E.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let E=0;E<b.length;E++){const V=S[E];V!==null&&(S[E]=null,b[E].disconnect(V))}z=null,N=null,m.reset();for(const E in p)delete p[E];if(e.setRenderTarget(T),f=null,h=null,d=null,s=null,x=null,I.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),C!==null){const E=C.camera;E.fov=C.fov,E.zoom=C.zoom,E.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Q=null,R=null;y.depth&&(R=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=y.stencil?qi:gi,Q=y.stencil?tr:ti);const L={colorFormat:t.RGBA8,depthFormat:R,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(L),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Fn(h.textureWidth,h.textureHeight,{format:On,type:yn,depthTexture:new ir(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Fn(f.framebufferWidth,f.framebufferHeight,{format:On,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),I.setContext(s),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(E){for(let V=0;V<E.removed.length;V++){const te=E.removed[V],Q=S.indexOf(te);Q>=0&&(S[Q]=null,b[Q].disconnect(te))}for(let V=0;V<E.added.length;V++){const te=E.added[V];let Q=S.indexOf(te);if(Q===-1){for(let L=0;L<b.length;L++)if(L>=S.length){S.push(te),Q=L;break}else if(S[L]===null){S[L]=te,Q=L;break}if(Q===-1)break}const R=b[Q];R&&R.connect(te)}}const Y=new B,Z=new B;function ee(E,V,te){Y.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(te.matrixWorld);const Q=Y.distanceTo(Z),R=V.projectionMatrix.elements,L=te.projectionMatrix.elements,k=R[14]/(R[10]-1),F=R[14]/(R[10]+1),ne=(R[9]+1)/R[5],D=(R[9]-1)/R[5],K=(R[8]-1)/R[0],ie=(L[8]+1)/L[0],q=k*K,ae=k*ie,ye=Q/(-K+ie),Se=ye*-K;if(V.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Se),E.translateZ(ye),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),R[10]===-1)E.projectionMatrix.copy(V.projectionMatrix),E.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const $=k+ye,ze=F+ye,Ae=q-Se,H=ae+(Q-Se),M=ne*F/ze*$,oe=D*F/ze*$;E.projectionMatrix.makePerspective(Ae,H,M,oe,$,ze),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function j(E,V){V===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(V.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let V=E.near,te=E.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(te=m.depthFar)),G.near=U.near=w.near=V,G.far=U.far=w.far=te,(z!==G.near||N!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),z=G.near,N=G.far),G.layers.mask=E.layers.mask|6,w.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;const Q=E.parent,R=G.cameras;j(G,Q);for(let L=0;L<R.length;L++)j(R[L],Q);R.length===2?ee(G,w,U):G.projectionMatrix.copy(w.projectionMatrix),C===null&&E.isPerspectiveCamera&&(C={camera:E,fov:E.fov,zoom:E.zoom}),ce(E,G,Q)};function ce(E,V,te){te===null?E.matrix.copy(V.matrixWorld):(E.matrix.copy(te.matrixWorld),E.matrix.invert(),E.matrix.multiply(V.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(V.projectionMatrix),E.projectionMatrixInverse.copy(V.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Wr*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(E){c=E,h!==null&&(h.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(E){return p[E]};let le=null;function me(E,V){if(u=V.getViewerPose(l||o),g=V,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Q=!1;te.length!==G.cameras.length&&(G.cameras.length=0,Q=!0);for(let F=0;F<te.length;F++){const ne=te[F];let D=null;if(f!==null)D=f.getViewport(ne);else{const ie=d.getViewSubImage(h,ne);D=ie.viewport,F===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let K=X[F];K===void 0&&(K=new wn,K.layers.enable(F),K.viewport=new Ot,X[F]=K),K.matrix.fromArray(ne.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ne.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(D.x,D.y,D.width,D.height),F===0&&(G.matrix.copy(K.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Q===!0&&G.cameras.push(K)}const R=s.enabledFeatures;if(R&&R.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const F=d.getDepthInformation(te[0]);F&&F.isValid&&F.texture&&m.init(F,s.renderState)}if(R&&R.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let F=0;F<te.length;F++){const ne=te[F].camera;if(ne){let D=p[ne];D||(D=new du,p[ne]=D);const K=d.getCameraImage(ne);D.sourceTexture=K}}}}for(let te=0;te<b.length;te++){const Q=S[te],R=b[te];Q!==null&&R!==void 0&&R.update(Q,V,l||o)}le&&le(E,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const I=new Df;I.setAnimationLoop(me),this.setAnimationLoop=function(E){le=E},this.dispose=function(){}}}const Qx=new xt,Bf=new nt;Bf.set(-1,0,0,0,1,0,0,0,1);function jx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,x=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function e1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const S=b.program;i.uniformBlockBinding(x,S)}function l(x,b){let S=s[x.id];S===void 0&&(m(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",y));const A=b.program;i.updateUBOMapping(x,A);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const b=d();x.__bindingPointIndex=b;const S=n.createBuffer(),A=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=s[x.id],S=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,C=S.length;v<C;v++){const w=S[v];if(Array.isArray(w))for(let U=0,X=w.length;U<X;U++)f(w[U],v,U,A);else f(w,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,b,S,A){if(_(x,b,S,A)===!0){const v=x.__offset,C=x.value;if(Array.isArray(C)){let w=0;for(let U=0;U<C.length;U++){const X=C[U],G=p(X);g(X,x.__data,w),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(w+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function g(x,b,S){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,S)}function _(x,b,S,A){const v=x.value,C=b+"_"+S;if(A[C]===void 0)return typeof v=="number"||typeof v=="boolean"?A[C]=v:ArrayBuffer.isView(v)?A[C]=v.slice():A[C]=v.clone(),!0;{const w=A[C];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return A[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function m(x){const b=x.uniforms;let S=0;const A=16;for(let C=0,w=b.length;C<w;C++){const U=Array.isArray(b[C])?b[C]:[b[C]];for(let X=0,G=U.length;X<G;X++){const z=U[X],N=Array.isArray(z.value)?z.value:[z.value];for(let O=0,W=N.length;O<W;O++){const J=N[O],Y=p(J),Z=S%A,ee=Z%Y.boundary,j=Z+ee;S+=ee,j!==0&&A-j<Y.storage&&(S+=A-j),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Y.storage}}}const v=S%A;return v>0&&(S+=A-v),x.__size=S,x.__cache={},this}function p(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",x),b}function y(x){const b=x.target;b.removeEventListener("dispose",y);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function T(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}const t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function n1(){return ai===null&&(ai=new au(t1,16,16,es,ni),ai.name="DFG_LUT",ai.minFilter=tn,ai.magFilter=tn,ai.wrapS=ui,ai.wrapT=ui,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class Gf{constructor(e={}){const{canvas:t=of(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([el,ja,Qa]),p=new Set([yn,ti,er,tr,Ja,Za]),y=new Uint32Array(4),T=new Int32Array(4),x=new B;let b=null,S=null;const A=[],v=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1,X=null,G=null,z=null,N=null;this._outputColorSpace=cn;let O=0,W=0,J=null,Y=-1,Z=null;const ee=new Ot,j=new Ot;let ce=null;const le=new ut(0);let me=0,I=t.width,E=t.height,V=1,te=null,Q=null;const R=new Ot(0,0,I,E),L=new Ot(0,0,I,E);let k=!1;const F=new ol;let ne=!1,D=!1;const K=new xt,ie=new B,q=new Ot,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Se(){return J===null?V:1}let $=i;function ze(P,se){return t.getContext(P,se)}let Ae,H,M,oe,ue,fe,Ee,Ce,_e,xe,Re,Ye,Ne,Pe,$e,et,st,re,Le,ve,Ie,ke,Me;try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),$===null){const se="webgl2";if($=ze(se,P),$===null)throw ze(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(P){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),mt("WebGLRenderer: "+P.message),P}function Je(){Ae=new iv($),Ae.init(),Ie=new kf($,Ae),H=new Y_($,Ae,e,Ie),M=new qx($,Ae),H.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),G=$.createFramebuffer(),z=$.createFramebuffer(),N=$.createFramebuffer(),oe=new ov($),ue=new Ix,fe=new Yx($,Ae,M,ue,H,Ie,oe),Ee=new nv(w),Ce=new l0($),ke=new X_($,Ce),_e=new sv($,Ce,oe,ke),xe=new lv($,_e,Ce,ke,oe),re=new av($,H,fe),$e=new $_(ue),Re=new Lx(w,Ee,Ae,H,ke,$e),Ye=new jx(w,ue),Ne=new Nx,Pe=new Bx(Ae),st=new W_(w,Ee,M,xe,g,c),et=new Xx(w,xe,H),Me=new e1($,oe,H,M),Le=new q_($,Ae,oe),ve=new rv($,Ae,oe),oe.programs=Re.programs,w.capabilities=H,w.extensions=Ae,w.properties=ue,w.renderLists=Ne,w.shadowMap=et,w.state=M,w.info=oe}_!==yn&&(C=new uv(_,t.width,t.height,a,s,r));const Xe=new Kx(w,$);this.xr=Xe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(I,E,!1))},this.getSize=function(P){return P.set(I,E)},this.setSize=function(P,se,pe=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,E=se,t.width=Math.floor(P*V),t.height=Math.floor(se*V),pe===!0&&(t.style.width=P+"px",t.style.height=se+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(I*V,E*V).floor()},this.setDrawingBufferSize=function(P,se,pe){I=P,E=se,V=pe,t.width=Math.floor(P*pe),t.height=Math.floor(se*pe),this.setViewport(0,0,P,se)},this.setEffects=function(P){if(_===yn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let se=0;se<P.length;se++)if(P[se].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ee)},this.getViewport=function(P){return P.copy(R)},this.setViewport=function(P,se,pe,he){P.isVector4?R.set(P.x,P.y,P.z,P.w):R.set(P,se,pe,he),M.viewport(ee.copy(R).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(L)},this.setScissor=function(P,se,pe,he){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,se,pe,he),M.scissor(j.copy(L).multiplyScalar(V).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(P){M.setScissorTest(k=P)},this.setOpaqueSort=function(P){te=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(P=!0,se=!0,pe=!0){let he=0;if(P){let de=!1;if(J!==null){const Fe=J.texture.format;de=m.has(Fe)}if(de){const Fe=J.texture.type,Ve=p.has(Fe),Ue=st.getClearColor(),He=st.getClearAlpha(),qe=Ue.r,lt=Ue.g,dt=Ue.b;Ve?(y[0]=qe,y[1]=lt,y[2]=dt,y[3]=He,$.clearBufferuiv($.COLOR,0,y)):(T[0]=qe,T[1]=lt,T[2]=dt,T[3]=He,$.clearBufferiv($.COLOR,0,T))}else he|=$.COLOR_BUFFER_BIT}se&&(he|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(he|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&$.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),X=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),st.dispose(),Ne.dispose(),Pe.dispose(),ue.dispose(),Ee.dispose(),xe.dispose(),ke.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Xu),Xe.removeEventListener("sessionend",qu),os.stop()};function Pt(P){P.preventDefault(),_c("WebGLRenderer: Context Lost."),U=!0}function St(){_c("WebGLRenderer: Context Restored."),U=!1;const P=oe.autoReset,se=et.enabled,pe=et.autoUpdate,he=et.needsUpdate,de=et.type;Je(),oe.autoReset=P,et.enabled=se,et.autoUpdate=pe,et.needsUpdate=he,et.type=de}function Hn(P){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function si(P){const se=P.target;se.removeEventListener("dispose",si),vp(se)}function vp(P){xp(P),ue.remove(P)}function xp(P){const se=ue.get(P).programs;se!==void 0&&(se.forEach(function(pe){Re.releaseProgram(pe)}),P.isShaderMaterial&&Re.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,pe,he,de,Fe){se===null&&(se=ae);const Ve=de.isMesh&&de.matrixWorld.determinantAffine()<0,Ue=Sp(P,se,pe,he,de);M.setMaterial(he,Ve);let He=pe.index,qe=1;if(he.wireframe===!0){if(He=_e.getWireframeAttribute(pe),He===void 0)return;qe=2}const lt=pe.drawRange,dt=pe.attributes.position;let We=lt.start*qe,bt=(lt.start+lt.count)*qe;Fe!==null&&(We=Math.max(We,Fe.start*qe),bt=Math.min(bt,(Fe.start+Fe.count)*qe)),He!==null?(We=Math.max(We,0),bt=Math.min(bt,He.count)):dt!=null&&(We=Math.max(We,0),bt=Math.min(bt,dt.count));const Ht=bt-We;if(Ht<0||Ht===1/0)return;ke.setup(de,he,Ue,pe,He);let It,Rt=Le;if(He!==null&&(It=Ce.get(He),Rt=ve,Rt.setIndex(It)),de.isMesh)he.wireframe===!0?(M.setLineWidth(he.wireframeLinewidth*Se()),Rt.setMode($.LINES)):Rt.setMode($.TRIANGLES);else if(de.isLine){let on=he.linewidth;on===void 0&&(on=1),M.setLineWidth(on*Se()),de.isLineSegments?Rt.setMode($.LINES):de.isLineLoop?Rt.setMode($.LINE_LOOP):Rt.setMode($.LINE_STRIP)}else de.isPoints?Rt.setMode($.POINTS):de.isSprite&&Rt.setMode($.TRIANGLES);if(de.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Rt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const on=de._multiDrawStarts,Be=de._multiDrawCounts,hn=de._multiDrawCount,vt=He?Ce.get(He).bytesPerElement:1,An=ue.get(he).currentProgram.getUniforms();for(let ri=0;ri<hn;ri++)An.setValue($,"_gl_DrawID",ri),Rt.render(on[ri]/vt,Be[ri])}else if(de.isInstancedMesh)Rt.renderInstances(We,Ht,de.count);else if(pe.isInstancedBufferGeometry){const on=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Be=Math.min(pe.instanceCount,on);Rt.renderInstances(We,Ht,Be)}else Rt.render(We,Ht)};function Wu(P,se,pe,he){X!==null&&P.isNodeMaterial&&X.setObject(he,P),ne===!0&&$e.setState(P,pe,!1),P.transparent===!0&&P.side===In&&P.forceSinglePass===!1?(P.side=gn,P.needsUpdate=!0,uo(P,se,he),P.side=Qi,P.needsUpdate=!0,uo(P,se,he),P.side=In):uo(P,se,he)}this.compile=function(P,se,pe=null){pe===null&&(pe=P),X!==null&&X.renderStart(P,se,pe),S=Pe.get(pe),S.init(se),v.push(S),pe.traverseVisible(function(de){de.isLight&&de.layers.test(se.layers)&&(S.pushLight(de),de.castShadow&&S.pushShadow(de))}),P!==pe&&P.traverseVisible(function(de){de.isLight&&de.layers.test(se.layers)&&(S.pushLight(de),de.castShadow&&S.pushShadow(de))}),S.setupLights(),X!==null&&X.updateLights(S.state.lightsArray),D=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,D),ne===!0&&$e.setGlobalState(this.clippingPlanes,se),X!==null&&et.render(S.state.shadowsArray,pe,se);const he=new Set;return P.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const Fe=de.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Ue=Fe[Ve];Wu(Ue,pe,se,de),he.add(Ue)}else Wu(Fe,pe,se,de),he.add(Fe)}),S=v.pop(),X!==null&&X.renderEnd(),he},this.compileAsync=function(P,se,pe=null){const he=this.compile(P,se,pe);return new Promise(de=>{function Fe(){if(he.forEach(function(Ve){const He=ue.get(Ve).currentProgram;(He===void 0||He.isReady())&&he.delete(Ve)}),he.size===0){de(P);return}setTimeout(Fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let El=null;function yp(P){El&&El(P)}function Xu(){os.stop()}function qu(){os.start()}const os=new Df;os.setAnimationLoop(yp),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(P){El=P,Xe.setAnimationLoop(P),P===null?os.stop():os.start()},Xe.addEventListener("sessionstart",Xu),Xe.addEventListener("sessionend",qu),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;X!==null&&X.renderStart(P,se);const pe=Xe.enabled===!0&&Xe.isPresenting===!0,he=C!==null&&(J===null||pe)&&C.begin(w,J);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(se),se=Xe.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,se,J),S=Pe.get(P,v.length),S.init(se),S.state.textureUnits=fe.getTextureUnits(),v.push(S),K.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F.setFromProjectionMatrix(K,Kn,se.reversedDepth),D=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,D),b=Ne.get(P,A.length),b.init(),A.push(b),Xe.enabled===!0&&Xe.isPresenting===!0){const Ve=w.xr.getDepthSensingMesh();Ve!==null&&wl(Ve,se,-1/0,w.sortObjects)}wl(P,se,0,w.sortObjects),b.finish(),X!==null&&X.updateLights(S.state.lightsArray),w.sortObjects===!0&&b.sort(te,Q),ye=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ye&&st.addToRenderList(b,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&$e.beginShadows();const de=S.state.shadowsArray;if(et.render(de,P,se),ne===!0&&$e.endShadows(),(he&&C.hasRenderPass())===!1){const Ve=b.opaque,Ue=b.transmissive;if(S.setupLights(),se.isArrayCamera){const He=se.cameras;if(Ue.length>0)for(let qe=0,lt=He.length;qe<lt;qe++){const dt=He[qe];$u(Ve,Ue,P,dt)}ye&&st.render(P);for(let qe=0,lt=He.length;qe<lt;qe++){const dt=He[qe];Yu(b,P,dt,dt.viewport)}}else Ue.length>0&&$u(Ve,Ue,P,se),ye&&st.render(P),Yu(b,P,se)}J!==null&&W===0&&(fe.updateMultisampleRenderTarget(J),fe.updateRenderTargetMipmap(J)),he&&C.end(w),P.isScene===!0&&P.onAfterRender(w,P,se),ke.resetDefaultState(),Y=-1,Z=null,v.pop(),v.length>0?(S=v[v.length-1],fe.setTextureUnits(S.state.textureUnits),ne===!0&&$e.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,X!==null&&X.renderEnd()};function wl(P,se,pe,he){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)pe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(F)){he&&q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const Ve=xe.update(P),Ue=P.material;Ue.visible&&b.push(P,Ve,Ue,pe,q.z,null,se)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(F))){const Ve=xe.update(P),Ue=P.material;if(he&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),q.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),q.copy(Ve.boundingSphere.center)),q.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Ue)){const He=Ve.groups;for(let qe=0,lt=He.length;qe<lt;qe++){const dt=He[qe],We=Ue[dt.materialIndex];We&&We.visible&&b.push(P,Ve,We,pe,q.z,dt,se)}}else Ue.visible&&b.push(P,Ve,Ue,pe,q.z,null,se)}}const Fe=P.children;for(let Ve=0,Ue=Fe.length;Ve<Ue;Ve++)wl(Fe[Ve],se,pe,he)}function Yu(P,se,pe,he){const{opaque:de,transmissive:Fe,transparent:Ve}=P;S.setupLightsView(pe),ne===!0&&$e.setGlobalState(w.clippingPlanes,pe),he&&M.viewport(ee.copy(he)),de.length>0&&co(de,se,pe),Fe.length>0&&co(Fe,se,pe),Ve.length>0&&co(Ve,se,pe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function $u(P,se,pe,he){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[he.id]===void 0){const We=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[he.id]=new Fn(1,1,{generateMipmaps:!0,type:We?ni:yn,minFilter:Xi,samples:Math.max(4,H.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Fe=S.state.transmissionRenderTarget[he.id],Ve=he.viewport||ee;Fe.setSize(Ve.z*w.transmissionResolutionScale,Ve.w*w.transmissionResolutionScale);const Ue=w.getRenderTarget(),He=w.getActiveCubeFace(),qe=w.getActiveMipmapLevel();w.setRenderTarget(Fe),w.getClearColor(le),me=w.getClearAlpha(),me<1&&w.setClearColor(16777215,.5),w.clear(),ye&&st.render(pe);const lt=w.toneMapping;w.toneMapping=Qn;const dt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),S.setupLightsView(he),ne===!0&&$e.setGlobalState(w.clippingPlanes,he),co(P,pe,he),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let bt=0,Ht=se.length;bt<Ht;bt++){const It=se[bt],{object:Rt,geometry:on,material:Be,group:hn}=It;if(Be.side===In&&Rt.layers.test(he.layers)){const vt=Be.side;Be.side=gn,Be.needsUpdate=!0,Ju(Rt,pe,he,on,Be,hn),Be.side=vt,Be.needsUpdate=!0,We=!0}}We===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}w.setRenderTarget(Ue,He,qe),w.setClearColor(le,me),dt!==void 0&&(he.viewport=dt),w.toneMapping=lt}function co(P,se,pe){const he=se.isScene===!0?se.overrideMaterial:null;for(let de=0,Fe=P.length;de<Fe;de++){const Ve=P[de],{object:Ue,geometry:He,group:qe}=Ve;let lt=Ve.material;lt.allowOverride===!0&&he!==null&&(lt=he),Ue.layers.test(pe.layers)&&Ju(Ue,se,pe,He,lt,qe)}}function Ju(P,se,pe,he,de,Fe){X!==null&&de.isNodeMaterial&&X.setObject(P,de),P.onBeforeRender(w,se,pe,he,de,Fe),P.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),de.onBeforeRender(w,se,pe,he,P,Fe),de.transparent===!0&&de.side===In&&de.forceSinglePass===!1?(de.side=gn,de.needsUpdate=!0,w.renderBufferDirect(pe,se,he,de,P,Fe),de.side=Qi,de.needsUpdate=!0,w.renderBufferDirect(pe,se,he,de,P,Fe),de.side=In):w.renderBufferDirect(pe,se,he,de,P,Fe),P.onAfterRender(w,se,pe,he,de,Fe)}function uo(P,se,pe){se.isScene!==!0&&(se=ae);const he=ue.get(P),de=S.state.lights,Fe=S.state.shadowsArray,Ve=de.state.version,Ue=Re.getParameters(P,de.state,Fe,se,pe,S.state.lightProbeGridArray),He=Re.getProgramCacheKey(Ue);let qe=he.programs;he.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?se.environment:null,he.fog=se.fog;const lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;he.envMap=Ee.get(P.envMap||he.environment,lt),he.envMapRotation=he.environment!==null&&P.envMap===null?se.environmentRotation:P.envMapRotation,qe===void 0&&(P.addEventListener("dispose",si),qe=new Map,he.programs=qe);let dt=qe.get(He);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===Ve)return Ku(P,Ue),dt}else Ue.uniforms=Re.getUniforms(P),X!==null&&P.isNodeMaterial&&X.build(P,pe,Ue),P.onBeforeCompile(Ue,w),dt=Re.acquireProgram(Ue,He),qe.set(He,dt),he.uniforms=Ue.uniforms;const We=he.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(We.clippingPlanes=$e.uniform),Ku(P,Ue),he.needsLights=Ep(P),he.lightsStateVersion=Ve,he.needsLights&&(We.ambientLightColor.value=de.state.ambient,We.lightProbe.value=de.state.probe,We.sunLights.value=de.state.sun,We.sunLightShadows.value=de.state.sunShadow,We.directionalLights.value=de.state.directional,We.directionalLightShadows.value=de.state.directionalShadow,We.spotLights.value=de.state.spot,We.spotLightShadows.value=de.state.spotShadow,We.rectAreaLights.value=de.state.rectArea,We.ltc_1.value=de.state.rectAreaLTC1,We.ltc_2.value=de.state.rectAreaLTC2,We.pointLights.value=de.state.point,We.pointLightShadows.value=de.state.pointShadow,We.hemisphereLights.value=de.state.hemi,We.sunShadowMatrix.value=de.state.sunShadowMatrix,We.sunShadowCascade.value=de.state.sunShadowCascade,We.directionalShadowMatrix.value=de.state.directionalShadowMatrix,We.spotLightMatrix.value=de.state.spotLightMatrix,We.spotLightMap.value=de.state.spotLightMap,We.pointShadowMatrix.value=de.state.pointShadowMatrix),he.lightProbeGrid=S.state.lightProbeGridArray.length>0,he.currentProgram=dt,he.uniformsList=null,dt}function Zu(P){if(P.uniformsList===null){const se=P.currentProgram.getUniforms();P.uniformsList=Yo.seqWithValue(se.seq,P.uniforms)}return P.uniformsList}function Ku(P,se){const pe=ue.get(P);pe.outputColorSpace=se.outputColorSpace,pe.batching=se.batching,pe.batchingColor=se.batchingColor,pe.instancing=se.instancing,pe.instancingColor=se.instancingColor,pe.instancingMorph=se.instancingMorph,pe.skinning=se.skinning,pe.morphTargets=se.morphTargets,pe.morphNormals=se.morphNormals,pe.morphColors=se.morphColors,pe.morphTargetsCount=se.morphTargetsCount,pe.numClippingPlanes=se.numClippingPlanes,pe.numIntersection=se.numClipIntersection,pe.vertexAlphas=se.vertexAlphas,pe.vertexTangents=se.vertexTangents,pe.toneMapping=se.toneMapping}function Mp(P,se){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;x.setFromMatrixPosition(se.matrixWorld);for(let pe=0,he=P.length;pe<he;pe++){const de=P[pe];if(de.texture!==null&&de.boundingBox.containsPoint(x))return de}return null}function Sp(P,se,pe,he,de){se.isScene!==!0&&(se=ae),fe.resetTextureUnits();const Fe=se.fog,Ve=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?se.environment:null,Ue=J===null?w.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ft.workingColorSpace,He=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,qe=Ee.get(he.envMap||Ve,He),lt=he.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,dt=!!pe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),We=!!pe.morphAttributes.position,bt=!!pe.morphAttributes.normal,Ht=!!pe.morphAttributes.color;let It=Qn;he.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(It=w.toneMapping);const Rt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,on=Rt!==void 0?Rt.length:0,Be=ue.get(he),hn=S.state.lights;if(ne===!0&&(D===!0||P!==Z)){const Lt=P===Z&&he.id===Y;$e.setState(he,P,Lt)}let vt=!1;he.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==hn.state.version||Be.outputColorSpace!==Ue||de.isBatchedMesh&&Be.batching===!1||!de.isBatchedMesh&&Be.batching===!0||de.isBatchedMesh&&Be.batchingColor===!0&&de._colorsTexture===null||de.isBatchedMesh&&Be.batchingColor===!1&&de._colorsTexture!==null||de.isInstancedMesh&&Be.instancing===!1||!de.isInstancedMesh&&Be.instancing===!0||de.isSkinnedMesh&&Be.skinning===!1||!de.isSkinnedMesh&&Be.skinning===!0||de.isInstancedMesh&&Be.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&Be.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&Be.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&Be.instancingMorph===!1&&de.morphTexture!==null||Be.envMap!==qe||he.fog===!0&&Be.fog!==Fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==$e.numPlanes||Be.numIntersection!==$e.numIntersection)||Be.vertexAlphas!==lt||Be.vertexTangents!==dt||Be.morphTargets!==We||Be.morphNormals!==bt||Be.morphColors!==Ht||Be.toneMapping!==It||Be.morphTargetsCount!==on||!!Be.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Be.__version=he.version);let An=Be.currentProgram;vt===!0&&(An=uo(he,se,de),X&&he.isNodeMaterial&&X.onUpdateProgram(he,An,Be));let ri=!1,Fi=!1,As=!1;const Ct=An.getUniforms(),Bt=Be.uniforms;if(M.useProgram(An.program)&&(ri=!0,Fi=!0,As=!0),he.id!==Y&&(Y=he.id,Fi=!0),Be.needsLights){const Lt=Mp(S.state.lightProbeGridArray,de);Be.lightProbeGrid!==Lt&&(Be.lightProbeGrid=Lt,Fi=!0)}if(ri||Z!==P){M.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ct.setValue($,"projectionMatrix",P.projectionMatrix),Ct.setValue($,"viewMatrix",P.matrixWorldInverse);const ki=Ct.map.cameraPosition;ki!==void 0&&ki.setValue($,ie.setFromMatrixPosition(P.matrixWorld)),H.logarithmicDepthBuffer&&Ct.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Ct.setValue($,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,Fi=!0,As=!0)}if(Be.needsLights&&(hn.state.sunShadowMap.length>0&&Ct.setValue($,"sunShadowMap",hn.state.sunShadowMap,fe),hn.state.directionalShadowMap.length>0&&Ct.setValue($,"directionalShadowMap",hn.state.directionalShadowMap,fe),hn.state.spotShadowMap.length>0&&Ct.setValue($,"spotShadowMap",hn.state.spotShadowMap,fe),hn.state.pointShadowMap.length>0&&Ct.setValue($,"pointShadowMap",hn.state.pointShadowMap,fe)),de.isSkinnedMesh){Ct.setOptional($,de,"bindMatrix"),Ct.setOptional($,de,"bindMatrixInverse");const Lt=de.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue($,"boneTexture",Lt.boneTexture,fe))}de.isBatchedMesh&&(Ct.setOptional($,de,"batchingTexture"),Ct.setValue($,"batchingTexture",de._matricesTexture,fe),Ct.setOptional($,de,"batchingIdTexture"),Ct.setValue($,"batchingIdTexture",de._indirectTexture,fe),Ct.setOptional($,de,"batchingColorTexture"),de._colorsTexture!==null&&Ct.setValue($,"batchingColorTexture",de._colorsTexture,fe));const zi=pe.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&re.update(de,pe,An),(Fi||Be.receiveShadow!==de.receiveShadow)&&(Be.receiveShadow=de.receiveShadow,Ct.setValue($,"receiveShadow",de.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&se.environment!==null&&(Bt.envMapIntensity.value=se.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=n1()),Fi){if(Ct.setValue($,"toneMappingExposure",w.toneMappingExposure),Be.needsLights&&bp(Bt,As),Fe&&he.fog===!0&&Ye.refreshFogUniforms(Bt,Fe),Ye.refreshMaterialUniforms(Bt,he,V,E,S.state.transmissionRenderTarget[P.id]),Be.needsLights&&Be.lightProbeGrid){const Lt=Be.lightProbeGrid;Bt.probesSH.value=Lt.texture,Bt.probesMin.value.copy(Lt.boundingBox.min),Bt.probesMax.value.copy(Lt.boundingBox.max),Bt.probesResolution.value.copy(Lt.resolution)}Yo.upload($,Zu(Be),Bt,fe)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Yo.upload($,Zu(Be),Bt,fe),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Ct.setValue($,"center",de.center),Ct.setValue($,"modelViewMatrix",de.modelViewMatrix),Ct.setValue($,"normalMatrix",de.normalMatrix),Ct.setValue($,"modelMatrix",de.matrixWorld),he.uniformsGroups!==void 0){const Lt=he.uniformsGroups;for(let ki=0,Cs=Lt.length;ki<Cs;ki++){const ju=Lt[ki];Me.update(ju,An),Me.bind(ju,An)}}return An}function bp(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.sunLights.needsUpdate=se,P.sunLightShadows.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function Ep(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(P,se,pe){const he=ue.get(P);he.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),ue.get(P.texture).__webglTexture=se,ue.get(P.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:pe,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,se){const pe=ue.get(P);pe.__webglFramebuffer=se,pe.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(P,se=0,pe=0){J=P,O=se,W=pe;let he=null,de=!1,Fe=!1;if(P){const Ue=ue.get(P);if(Ue.__useDefaultFramebuffer!==void 0){M.bindFramebuffer($.FRAMEBUFFER,Ue.__webglFramebuffer),ee.copy(P.viewport),j.copy(P.scissor),ce=P.scissorTest,M.viewport(ee),M.scissor(j),M.setScissorTest(ce),Y=-1;return}else if(Ue.__webglFramebuffer===void 0)fe.setupRenderTarget(P);else if(Ue.__hasExternalTextures)fe.rebindTextures(P,ue.get(P.texture).__webglTexture,ue.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const lt=P.depthTexture;if(Ue.__boundDepthTexture!==lt){if(lt!==null&&ue.has(lt)&&(P.width!==lt.image.width||P.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(P)}}const He=P.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);const qe=ue.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[se])?he=qe[se][pe]:he=qe[se],de=!0):P.samples>0&&fe.useMultisampledRTT(P)===!1?he=ue.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?he=qe[pe]:he=qe,ee.copy(P.viewport),j.copy(P.scissor),ce=P.scissorTest}else ee.copy(R).multiplyScalar(V).floor(),j.copy(L).multiplyScalar(V).floor(),ce=k;if(pe!==0&&(he=G),M.bindFramebuffer($.FRAMEBUFFER,he)&&M.drawBuffers(P,he),M.viewport(ee),M.scissor(j),M.setScissorTest(ce),de){const Ue=ue.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue.__webglTexture,pe)}else if(Fe){const Ue=se;for(let He=0;He<P.textures.length;He++){const qe=ue.get(P.textures[He]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+He,qe.__webglTexture,pe,Ue)}}else if(P!==null&&pe!==0){const Ue=ue.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ue.__webglTexture,pe)}Y=-1};function Qu(P){const se=ue.get(P);return(se.__readFormat!==P.format||se.__readType!==P.type)&&(se.__readFormat=P.format,se.__readType=P.type,se.__formatReadable=H.textureFormatReadable(P.format),se.__typeReadable=H.textureTypeReadable(P.type)),se}this.readRenderTargetPixels=function(P,se,pe,he,de,Fe,Ve,Ue=0){if(!(P&&P.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He){M.bindFramebuffer($.FRAMEBUFFER,He);try{const qe=P.textures[Ue],lt=qe.format,dt=qe.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ue);const We=Qu(qe);if(We.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-he&&pe>=0&&pe<=P.height-de&&$.readPixels(se,pe,he,de,Ie.convert(lt),Ie.convert(dt),Fe)}finally{const qe=J!==null?ue.get(J).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(P,se,pe,he,de,Fe,Ve,Ue=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ue.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He)if(se>=0&&se<=P.width-he&&pe>=0&&pe<=P.height-de){M.bindFramebuffer($.FRAMEBUFFER,He);const qe=P.textures[Ue],lt=qe.format,dt=qe.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ue);const We=Qu(qe);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,bt),$.bufferData($.PIXEL_PACK_BUFFER,Fe.byteLength,$.STREAM_READ),$.readPixels(se,pe,he,de,Ie.convert(lt),Ie.convert(dt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Ht=J!==null?ue.get(J).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,Ht);const It=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Wp($,It,4),$.bindBuffer($.PIXEL_PACK_BUFFER,bt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Fe),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(bt),$.deleteSync(It),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,se=null,pe=0){const he=Math.pow(2,-pe),de=Math.floor(P.image.width*he),Fe=Math.floor(P.image.height*he),Ve=se!==null?se.x:0,Ue=se!==null?se.y:0;fe.setTexture2D(P,0),$.copyTexSubImage2D($.TEXTURE_2D,pe,0,0,Ve,Ue,de,Fe),M.unbindTexture()},this.copyTextureToTexture=function(P,se,pe=null,he=null,de=0,Fe=0){let Ve,Ue,He,qe,lt,dt,We,bt,Ht;const It=P.isCompressedTexture?P.mipmaps[Fe]:P.image;if(pe!==null)Ve=pe.max.x-pe.min.x,Ue=pe.max.y-pe.min.y,He=pe.isBox3?pe.max.z-pe.min.z:1,qe=pe.min.x,lt=pe.min.y,dt=pe.isBox3?pe.min.z:0;else{const Bt=Math.pow(2,-de);Ve=Math.floor(It.width*Bt),Ue=Math.floor(It.height*Bt),P.isDataArrayTexture?He=It.depth:P.isData3DTexture?He=Math.floor(It.depth*Bt):He=1,qe=0,lt=0,dt=0}he!==null?(We=he.x,bt=he.y,Ht=he.z):(We=0,bt=0,Ht=0);const Rt=Ie.convert(se.format),on=Ie.convert(se.type);let Be;se.isData3DTexture?(fe.setTexture3D(se,0),Be=$.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(fe.setTexture2DArray(se,0),Be=$.TEXTURE_2D_ARRAY):(fe.setTexture2D(se,0),Be=$.TEXTURE_2D),M.activeTexture($.TEXTURE0),M.pixelStorei($.UNPACK_FLIP_Y_WEBGL,se.flipY),M.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),M.pixelStorei($.UNPACK_ALIGNMENT,se.unpackAlignment);const hn=M.getParameter($.UNPACK_ROW_LENGTH),vt=M.getParameter($.UNPACK_IMAGE_HEIGHT),An=M.getParameter($.UNPACK_SKIP_PIXELS),ri=M.getParameter($.UNPACK_SKIP_ROWS),Fi=M.getParameter($.UNPACK_SKIP_IMAGES);M.pixelStorei($.UNPACK_ROW_LENGTH,It.width),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,It.height),M.pixelStorei($.UNPACK_SKIP_PIXELS,qe),M.pixelStorei($.UNPACK_SKIP_ROWS,lt),M.pixelStorei($.UNPACK_SKIP_IMAGES,dt);const As=P.isDataArrayTexture||P.isData3DTexture,Ct=se.isDataArrayTexture||se.isData3DTexture;if(P.isDepthTexture){const Bt=ue.get(P),zi=ue.get(se),Lt=ue.get(Bt.__renderTarget),ki=ue.get(zi.__renderTarget);M.bindFramebuffer($.READ_FRAMEBUFFER,Lt.__webglFramebuffer),M.bindFramebuffer($.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Cs=0;Cs<He;Cs++)As&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(P).__webglTexture,de,dt+Cs),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.get(se).__webglTexture,Fe,Ht+Cs)),$.blitFramebuffer(qe,lt,Ve,Ue,We,bt,Ve,Ue,$.DEPTH_BUFFER_BIT,$.NEAREST);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(de!==0||P.isRenderTargetTexture||ue.has(P)){const Bt=ue.get(P),zi=ue.get(se);M.bindFramebuffer($.READ_FRAMEBUFFER,z),M.bindFramebuffer($.DRAW_FRAMEBUFFER,N);for(let Lt=0;Lt<He;Lt++)As?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Bt.__webglTexture,de,dt+Lt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Bt.__webglTexture,de),Ct?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,zi.__webglTexture,Fe,Ht+Lt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,zi.__webglTexture,Fe),de!==0?$.blitFramebuffer(qe,lt,Ve,Ue,We,bt,Ve,Ue,$.COLOR_BUFFER_BIT,$.NEAREST):Ct?$.copyTexSubImage3D(Be,Fe,We,bt,Ht+Lt,qe,lt,Ve,Ue):$.copyTexSubImage2D(Be,Fe,We,bt,qe,lt,Ve,Ue);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ct?P.isDataTexture||P.isData3DTexture?$.texSubImage3D(Be,Fe,We,bt,Ht,Ve,Ue,He,Rt,on,It.data):se.isCompressedArrayTexture?$.compressedTexSubImage3D(Be,Fe,We,bt,Ht,Ve,Ue,He,Rt,It.data):$.texSubImage3D(Be,Fe,We,bt,Ht,Ve,Ue,He,Rt,on,It):P.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Fe,We,bt,Ve,Ue,Rt,on,It.data):P.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Fe,We,bt,It.width,It.height,Rt,It.data):$.texSubImage2D($.TEXTURE_2D,Fe,We,bt,Ve,Ue,Rt,on,It);M.pixelStorei($.UNPACK_ROW_LENGTH,hn),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,vt),M.pixelStorei($.UNPACK_SKIP_PIXELS,An),M.pixelStorei($.UNPACK_SKIP_ROWS,ri),M.pixelStorei($.UNPACK_SKIP_IMAGES,Fi),Fe===0&&se.generateMipmaps&&$.generateMipmap(Be),M.unbindTexture()},this.initRenderTarget=function(P){ue.get(P).__webglFramebuffer===void 0&&fe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?fe.setTextureCube(P,0):P.isData3DTexture?fe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?fe.setTexture2DArray(P,0):fe.setTexture2D(P,0),M.unbindTexture()},this.resetState=function(){O=0,W=0,J=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Zt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ya,AddEquation:ps,AddOperation:Yd,AdditiveBlending:fc,AgXToneMapping:$c,AlphaFormat:tu,AlwaysCompare:sf,AlwaysDepth:jo,AlwaysStencilFunc:Kd,ArcCurve:mf,ArrayCamera:Pf,BackSide:gn,BasicDepthPacking:Jd,Box3:ns,BoxGeometry:Oi,BufferAttribute:zn,BufferGeometry:Vt,ByteType:Kc,Camera:Mu,CanvasTexture:hu,CatmullRomCurve3:pu,CineonToneMapping:qc,CircleGeometry:al,ClampToEdgeWrapping:ui,Color:ut,ColorManagement:ft,ConeGeometry:bs,ConstantAlphaFactor:Wd,ConstantColorFactor:Vd,Controls:If,CubeCamera:Rf,CubeDepthTexture:pf,CubeReflectionMapping:ji,CubeRefractionMapping:ys,CubeTexture:uu,CubeUVReflectionMapping:Kr,CubicBezierCurve:mu,CubicBezierCurve3:gf,CullFaceBack:dc,CullFaceFront:Td,CullFaceNone:wd,Curve:ii,CurvePath:vf,CustomBlending:Cd,CustomToneMapping:Yc,CylinderGeometry:jr,Data3DTexture:uf,DataArrayTexture:su,DataTexture:au,DepthFormat:gi,DepthStencilFormat:qi,DepthTexture:ir,DirectionalLight:Su,DoubleSide:In,DstAlphaFactor:Fd,DstColorFactor:kd,EllipseCurve:cl,EqualCompare:ef,EqualDepth:ta,EquirectangularReflectionMapping:Vo,EquirectangularRefractionMapping:Ho,Euler:Ni,EventDispatcher:Ui,ExternalTexture:du,ExtrudeGeometry:lr,Float32BufferAttribute:yt,FloatType:Un,FogExp2:rl,FrontSide:Qi,Frustum:ol,GLSL3:gc,GreaterCompare:tf,GreaterDepth:ia,GreaterEqualCompare:nl,GreaterEqualDepth:na,Group:Yi,HalfFloatType:ni,HemisphereLight:Cf,IcosahedronGeometry:to,ImageUtils:lf,InstancedBufferAttribute:vc,InstancedMesh:xc,IntType:$a,KeepStencilOp:Xo,Layers:sl,LessCompare:jd,LessDepth:ea,LessEqualCompare:tl,LessEqualDepth:js,Light:fl,LightShadow:yu,Line:Am,LineBasicMaterial:lu,LineCurve:gu,LineCurve3:_f,LineDashedMaterial:s0,LinearFilter:tn,LinearMipmapLinearFilter:Xi,LinearMipmapNearestFilter:Wo,LinearSRGBColorSpace:Vr,LinearToneMapping:Wc,LinearTransfer:Hr,MOUSE:Ti,Material:ss,MathUtils:xn,Matrix2:Tc,Matrix3:nt,Matrix4:xt,MaxEquation:Id,Mesh:_n,MeshBasicMaterial:Qr,MeshDepthMaterial:Tf,MeshDistanceMaterial:Af,MeshStandardMaterial:Xs,MinEquation:Ld,MirroredRepeatWrapping:ra,MixOperation:qd,MultiplyBlending:mc,MultiplyOperation:Hc,NearestFilter:Qt,NearestMipmapLinearFilter:Er,NearestMipmapNearestFilter:$d,NeutralToneMapping:Jc,NeverCompare:Qd,NeverDepth:Qo,NoBlending:fi,NoColorSpace:bi,NoToneMapping:Qn,NormalBlending:Js,NotEqualCompare:nf,NotEqualDepth:sa,Object3D:Gt,ObjectSpaceNormalMap:Zd,OneFactor:Nd,OneMinusConstantAlphaFactor:Xd,OneMinusConstantColorFactor:Hd,OneMinusDstAlphaFactor:zd,OneMinusDstColorFactor:Bd,OneMinusSrcAlphaFactor:Vc,OneMinusSrcColorFactor:Od,OrthographicCamera:no,PCFShadowMap:$s,PCFSoftShadowMap:Ad,PMREMGenerator:Ac,Path:Mc,PerspectiveCamera:wn,Plane:ci,PlaneGeometry:Es,PointLight:pl,Points:ff,PointsMaterial:cu,PolyhedronGeometry:ll,QuadraticBezierCurve:_u,QuadraticBezierCurve3:vu,Quaternion:Di,R11_EAC_Format:fa,RED_GREEN_RGTC2_Format:Gr,RED_RGTC1_Format:Da,REVISION:qa,RG11_EAC_Format:Br,RGBAFormat:On,RGBAIntegerFormat:el,RGBA_ASTC_10x10_Format:Aa,RGBA_ASTC_10x5_Format:Ea,RGBA_ASTC_10x6_Format:wa,RGBA_ASTC_10x8_Format:Ta,RGBA_ASTC_12x10_Format:Ca,RGBA_ASTC_12x12_Format:Ra,RGBA_ASTC_4x4_Format:ga,RGBA_ASTC_5x4_Format:_a,RGBA_ASTC_5x5_Format:va,RGBA_ASTC_6x5_Format:xa,RGBA_ASTC_6x6_Format:ya,RGBA_ASTC_8x5_Format:Ma,RGBA_ASTC_8x6_Format:Sa,RGBA_ASTC_8x8_Format:ba,RGBA_BPTC_Format:Pa,RGBA_ETC2_EAC_Format:da,RGBA_PVRTC_2BPPV1_Format:ca,RGBA_PVRTC_4BPPV1_Format:la,RGBA_S3TC_DXT1_Format:Ir,RGBA_S3TC_DXT3_Format:Dr,RGBA_S3TC_DXT5_Format:Nr,RGBFormat:nu,RGB_BPTC_SIGNED_Format:La,RGB_BPTC_UNSIGNED_Format:Ia,RGB_ETC1_Format:ua,RGB_ETC2_Format:ha,RGB_PVRTC_2BPPV1_Format:aa,RGB_PVRTC_4BPPV1_Format:oa,RGB_S3TC_DXT1_Format:Lr,RGFormat:es,RGIntegerFormat:ja,RawShaderMaterial:wf,Ray:ar,Raycaster:Lf,RedFormat:Ka,RedIntegerFormat:Qa,ReinhardToneMapping:Xc,RenderTarget:cf,RepeatWrapping:kr,ReverseSubtractEquation:Pd,SIGNED_R11_EAC_Format:pa,SIGNED_RED_GREEN_RGTC2_Format:Ua,SIGNED_RED_RGTC1_Format:Na,SIGNED_RG11_EAC_Format:ma,SRGBColorSpace:cn,SRGBTransfer:Et,Scene:df,ShaderChunk:ot,ShaderLib:Jn,ShaderMaterial:Bn,Shape:eo,ShapeUtils:_s,ShortType:Qc,Sphere:is,SphereGeometry:ul,Spherical:wc,SplineCurve:xu,SrcAlphaFactor:Gc,SrcAlphaSaturateFactor:Gd,SrcColorFactor:Ud,StaticDrawUsage:rf,SubtractEquation:Rd,SubtractiveBlending:pc,TOUCH:Ei,TangentSpaceNormalMap:Oa,Texture:sn,TextureSource:il,TorusGeometry:hl,Triangle:Dn,TubeGeometry:dl,UVMapping:Zc,Uint16BufferAttribute:ru,Uint32BufferAttribute:ou,UniformsLib:De,UniformsUtils:Ef,UnsignedByteType:yn,UnsignedInt101111Type:eu,UnsignedInt248Type:tr,UnsignedInt5999Type:jc,UnsignedIntType:ti,UnsignedShort4444Type:Ja,UnsignedShort5551Type:Za,UnsignedShortType:er,VSMShadowMap:Ws,Vector2:Te,Vector3:B,Vector4:Ot,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:bu,WebGLRenderTarget:Fn,WebGLRenderer:Gf,WebGLUtils:kf,WebGPUCoordinateSystem:nr,WebXRController:qo,ZeroFactor:Dd,createCanvasElement:of,error:mt,log:_c,warn:tt,warnOnce:vs},Symbol.toStringTag,{value:"Module"})),ud={type:"change"},Eu={type:"start"},Vf={type:"end"},Bo=new ar,hd=new ci,i1=Math.cos(70*xn.DEG2RAD),qt=new B,vn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sc=1e-6;class s1 extends If{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Di,this._lastTargetPosition=new B,this._quat=new Di().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wc,this._sphericalDelta=new wc,this._scale=1,this._panOffset=new B,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new B,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o1.bind(this),this._onPointerDown=r1.bind(this),this._onPointerUp=a1.bind(this),this._onContextMenu=p1.bind(this),this._onMouseWheel=u1.bind(this),this._onKeyDown=h1.bind(this),this._onTouchStart=d1.bind(this),this._onTouchMove=f1.bind(this),this._onMouseDown=l1.bind(this),this._onMouseMove=c1.bind(this),this._interceptControlDown=m1.bind(this),this._interceptControlUp=g1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=qt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<i1?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sc||this._lastTargetPosition.distanceToSquared(this.target)>sc?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qt.copy(s).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function r1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function o1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function a1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vf),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function l1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Eu)}function c1(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function u1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(Eu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vf))}function h1(n){this.enabled!==!1&&this._handleKeyDown(n)}function d1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Eu)}function f1(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function p1(n){this.enabled!==!1&&n.preventDefault()}function m1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mr=new B;function Rn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Mr.copy(e),Mr[i]=0,Mr.normalize();const l=.5*o/(o+a),u=1-Mr.angleTo(n)/c;return Math.sign(Mr[t])===1?u*l:a/(o+a)+l+l*(1-u)}class wu extends Oi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new B,l=new B,u=new B(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new B,m=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[y+0]=Rn(_,l,"z","y",r,i),f[y+1]=1-Rn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[y+0]=1-Rn(_,l,"z","y",r,i),f[y+1]=1-Rn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[y+0]=1-Rn(_,l,"x","z",r,e),f[y+1]=Rn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),f[y+0]=1-Rn(_,l,"x","z",r,e),f[y+1]=1-Rn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),f[y+0]=1-Rn(_,l,"x","y",r,e),f[y+1]=1-Rn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[y+0]=Rn(_,l,"x","y",r,e),f[y+1]=1-Rn(_,l,"y","x",r,t);break}}static fromJSON(e){return new wu(e.width,e.height,e.depth,e.segments,e.radius)}}function _1(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Vt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=dd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);const g=dd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function dd(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new zn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){const _=u.getComponent(h,g);a.setComponent(h+d,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function v1({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:u,torus:d,rod:h,sign:f,paperBoat:g,batchStatic:_,persist:m,say:p,refresh:y,chime:T,reduced:x}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],A=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),d([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const C=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],C),d([0,0,0],.36,.015,s.copper,C,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),d([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const w=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,w);for(const[R,L,k]of[[-.17,.23,-.5],[.17,.41,.5]]){const F=l([R,L,0],[.24,.035,.085],s.mint,w);F.rotation.z=k}const U=o([0,.95,0],w);l([0,0,0],.115,s.light,U),d([0,0,0],.28,.021,s.cream,U,[0,0,0]),d([0,0,0],.27,.021,s.copper,U,[0,Math.PI/2,0]);const X=[];for(let R=0;R<4;R++){const L=R*Math.PI/2,k=o([Math.cos(L)*.3,.13+Math.sin(L)*.12,Math.sin(L)*.3],w);h([0,-.15,0],[0,.2,0],.012,s.copper,k),l([0,.23,0],.065,s.cream,k),_(k,[]),X.push(k)}c([-.46,.2,.32],[.68,.12,.47],s.dark,v);const G=o([-.46,.29,.32],v);c([0,0,0],[.5,.025,.32],s.cream,G);for(const R of[-.23,.23])h([R,.016,-.14],[0,.016,.06],.009,s.copper,G);l([0,.027,.06],[.04,.015,.04],s.rust,G),f("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(C,[]),_(U,[]),_(w,[U,...X]),_(G,[]),_(v,[C,w,G]);const z=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);z.castShadow=!1;const N=o([0,0,0],e),O=g(N,[8.3,.14,3.5],1.05),W=o([0,.36,0],O),J=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],W),Y=l([0,.12,0],[.085,.13,.085],s.light,W),Z=c([0,.09,0],[.23,.025,.16],s.cream,W);Z.rotation.z=.2;const ee=[J,Y,Z];_(O,[W]);const j=new n.Vector3(8.3,.14,3.5),ce=new n.Vector3(8.45,.14,3.65),le=new n.Vector3(9.2,-2.7,6.5);let me=-1,I=i.dockTrips>=2?1:.02;function E(){C.visible=i.dockTrips>=1,w.visible=i.dockTrips>=2,G.visible=i.dockTrips>=3,X.forEach((R,L)=>R.visible=i.dockTrips>=5+L*3),W.visible=i.dockPending,ee.forEach((R,L)=>R.visible=L===i.dockTrips%3),O.position.copy(i.dockPending?ce:j)}E();function V(){if(!(i.boat>0))if(i.dockPending){const R=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(I=.02),m(),E(),p(R.line),T(330),y()}else i.boat=18,me=-1,ee.forEach((R,L)=>R.visible=L===i.dockTrips%3),W.visible=!1,p("ну плыви. я тут."),y()}function te(R,L){if(i.boat>0){i.boat=Math.max(0,i.boat-R);const k=18-i.boat,F=k<7?0:k<11?1:2;F!==me&&(me=F,y()),k<2?O.position.lerpVectors(j,ce,n.MathUtils.smoothstep(k,0,2)):k<7?O.position.lerpVectors(ce,le,n.MathUtils.smoothstep(k,2,7)):k<11?O.position.copy(le):k<16?O.position.lerpVectors(le,ce,n.MathUtils.smoothstep(k,11,16)):O.position.copy(ce),O.visible=k<7||k>=11,W.visible=k>=11,O.rotation.y=k>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),O.visible=!0,E(),p("вернулся. с чем-то."),T(554),y())}O.rotation.z=x?0:Math.sin(L*1.7)*.035,i.boat===0&&(O.visible=!0,O.position.y=(i.dockPending?ce.y:j.y)+Math.sin(L*1.2)*.02,O.rotation.y=i.dockPending?Math.PI+.2:0),C.position.y=.97+Math.sin(L*.9)*.055,C.rotation.y=L*.15,I=n.MathUtils.damp(I,1,1.1,R),w.scale.setScalar(I),U.rotation.y=x?0:L*.23,z.material.emissiveIntensity=i.dockPending?1.5+Math.sin(L*4)*1.1:1.2}function Q(){if(i.boat>0){const R=18-i.boat;return{disabled:!0,action:R<7?"плывёт…":R<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const R=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:R===2?`${S[R].description} ${A[Math.floor((i.dockTrips-1)/3)%A.length]}`:S[R].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:N,gallery:v,beacon:z,launchOrCollect:V,update:te,card:Q,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:O.position.toArray(),visible:O.visible,cargo:W.visible,stone:C.visible,plant:w.visible,plantScale:I,letter:G.visible,buds:X.filter(R=>R.visible).length})}}async function Hf(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function x1({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",u=!s.matches,d=!1,h=!1,f=!1,g=!1,_=!1,m=0,p=null,y=0,T=0,x=0,b=!1;try{const q=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");q!==null&&(u=q==="open")}catch{}const S=(q,ae,ye)=>{const Se=document.createElement(q);return ae&&(Se.className=ae),ye&&(Se.textContent=ye),Se},A=S("aside","resident-history");A.id="resident-history",A.setAttribute("aria-label","История мыслей и действий Головы");const v=S("div","history-heading"),C=S("div"),w=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),U=S("h3","","на полях"),X=S("span","history-eyes");X.setAttribute("aria-hidden","true"),U.append(X),C.append(w,U,S("p","history-subtitle","мысли, дела и прочее"));const G=S("button","history-close","−");G.type="button",G.setAttribute("aria-label","Свернуть историю"),G.title="Свернуть историю",v.append(C,G);const z=S("div","history-filters");z.setAttribute("role","group"),z.setAttribute("aria-label","Показывать в истории");const N=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[q,ae]of N){const ye=S("button","",ae);ye.type="button",ye.dataset.filter=q,ye.setAttribute("aria-pressed",String(l===q)),ye.onclick=()=>{l=q,L(!1),W.scrollTop=0;for(const Se of z.children)Se.setAttribute("aria-pressed",String(Se.dataset.filter===l))},z.append(ye)}const O=S("button","history-new");O.type="button",O.hidden=!0;const W=S("div","history-scroll");W.tabIndex=0,W.setAttribute("aria-label","Записи, от новых к старым");const J=S("ol","history-list"),Y=S("p","history-empty","собираю заметки…");W.append(J,Y);const Z=S("div","history-foot"),ee=S("span","history-live","подключаюсь…"),j=S("span","history-count"),ce=S("button","history-retry","повторить подключение");ce.type="button",ce.hidden=!0,ce.onclick=()=>{D(),window.dispatchEvent(new Event("beznogim:retry"))},Z.append(ee,j,ce),A.append(v,z,O,W,Z);const le=S("button","history-toggle");le.type="button",le.setAttribute("aria-controls",A.id);const me=S("span","","на полях"),I=S("span","history-badge");I.hidden=!0,le.append(S("span","history-toggle-icon","◌"),me,I),document.body.append(A),document.querySelector(".footer-actions").append(le);function E(q,ae=!0){if(u=q,A.hidden=!u,le.hidden=u,le.setAttribute("aria-expanded",String(u)),ae)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(W.scrollTop<30?V():te(),G.focus({preventScroll:!0})):ae&&le.focus({preventScroll:!0})}A.hidden=!u,le.hidden=u,le.setAttribute("aria-expanded",String(u)),le.onclick=()=>{E(!0),(g||!h)&&D()},G.onclick=()=>E(!1),s.addEventListener("change",()=>{let q=!s.matches;try{const ae=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ae!==null&&(q=ae==="open")}catch{}E(q,!1)}),document.addEventListener("keydown",q=>{q.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&E(!1)});function V(){m=0,I.hidden=!0,O.hidden=!0}function te(){I.textContent=String(m),I.hidden=!m,O.textContent=`↑ к новым · ${m}`,O.hidden=!(u&&m)}O.onclick=()=>{W.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),V()},W.addEventListener("scroll",()=>{W.scrollTop<30&&V()},{passive:!0});function Q(q){return l==="all"||(l==="thoughts"?q.type==="muse"||q.type==="say":q.type!=="muse"&&q.type!=="say")}function R(q,ae){const ye=q.type==="muse"||q.type==="say",Se=S("li",`history-entry ${ye?"history-thought":"history-action"}${ae?" is-new":""}`);Se.dataset.eventId=String(q.id),Se.dataset.type=q.type;const $=S("div","history-meta"),ze=S("time","",r.format(q.time*1e3));ze.dateTime=new Date(q.time*1e3).toISOString(),ze.title=o.format(q.time*1e3)+" · "+ze.textContent+" мск";const Ae={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return $.append(S("span","",Ae[q.type]||"во дворе"),ze),Se.append($,S("p","",q.text)),Se}function L(q,ae=new Set){const ye=W.scrollTop>30,Se=W.getBoundingClientRect().top,$=ye?[...J.querySelectorAll("[data-event-id]")].find(fe=>fe.getBoundingClientRect().bottom>Se):null,ze=$==null?void 0:$.dataset.eventId,Ae=$==null?void 0:$.getBoundingClientRect().top,H=W.scrollTop,M=document.createDocumentFragment();let oe="";const ue=[...i.values()].sort((fe,Ee)=>Ee.id-fe.id).filter(Q);for(const fe of ue){const Ee=o.format(fe.time*1e3);if(Ee!==oe){const Ce=S("li","history-day",Ee);M.append(Ce),oe=Ee}M.append(R(fe,q&&ae.has(fe.id)&&!ye))}if(J.replaceChildren(M),Y.hidden=ue.length>0,Y.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ue.length&&(Y.textContent="в этом фильтре пока нет записей."),j.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",ce.hidden=!(g||!h&&!f),ce.disabled=f,ze){const fe=J.querySelector(`[data-event-id="${ze}"]`);W.scrollTop=H+(fe?fe.getBoundingClientRect().top-Ae:0)}else ye||(W.scrollTop=0)}function k(q,ae=!1){if(!q||!Array.isArray(q.entries))return!1;const ye=Math.max(0,...i.keys()),Se=new Set;let $=0,ze=0;for(const Ae of q.entries)!Ae||typeof Ae!="object"||!Number.isSafeInteger(Ae.id)||Ae.id<1||!Number.isFinite(Ae.time)||Math.abs(Ae.time)>864e10||!a.has(Ae.type)||typeof Ae.text!="string"||!Ae.text.trim()||(ze++,i.has(Ae.id)||(b=!0,i.set(Ae.id,{id:Ae.id,time:Ae.time,type:Ae.type,text:Ae.text.slice(0,280)}),Se.add(Ae.id),Ae.id>ye&&Q(Ae)&&$++));if(q.entries.length&&!ze)return!1;if(_=_||!!q.has_older||!!q.has_more||i.size>t,i.size>t){const Ae=[...i.keys()].sort((H,M)=>H-M);for(const H of Ae.slice(0,i.size-t))i.delete(H)}return d&&!ae&&$&&(!u||W.scrollTop>30)&&(m+=$,te()),(Se.size||!d)&&L(d&&!ae,Se),!0}function F(){if(!(!i.size||!b)){b=!1,T=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:T,has_older:_,entries:[...i.values()]}))}catch{}}}function ne(){try{const q=localStorage.getItem(c);if(!q||q.length>1e6)return;const ae=JSON.parse(q);if(ae.version!==1||!Number.isFinite(ae.saved_at)||ae.saved_at<=0)return;k(ae,!0),T=ae.saved_at,d=i.size>0,b=!1}catch{}}async function D(){if(!f){f=!0,x=performance.now(),ce.disabled=!0;try{const q=await Hf(n+"/api/history");if(!k(q,!0))throw Error("invalid-public-history");h=!0,d=!0,g=!1,F(),L(!1)}catch{g=!0,L(!1)}finally{f=!1,ce.disabled=!1,K()}}}function K(){var ye;const q=!p||performance.now()-y>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";A.classList.toggle("history-offline",q);const ae=T?` · сохранено ${r.format(T)} мск`:" · записи на устройстве";ee.textContent=q?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",q&&i.size&&(ee.textContent+=ae),!q&&g&&(ee.textContent+=" · архив не дошёл"),ee.title=((ye=p==null?void 0:p.action)==null?void 0:ye.label)||""}function ie(q){var ze;const ae=Math.max(0,...i.keys()),ye=Array.isArray((ze=q.history)==null?void 0:ze.entries)?q.history.entries:[];p=q,y=performance.now(),k(q.history)&&i.size&&(d=!0,F()),K();const Se=ye.filter(Ae=>Ae&&Number.isSafeInteger(Ae.id)).map(Ae=>Ae.id);(ae&&Se.length&&Math.min(...Se)>ae&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&D()}window.addEventListener("beznogim:state",q=>ie(q.detail)),window.__beznogimState&&ie(window.__beznogimState),ne(),L(!1),K(),D(),window.addEventListener("online",()=>{(g||!h)&&D()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&D()}),setInterval(()=>{K(),(g||!h)&&D()},15e3)}function y1({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,u=0,d=0,h=!1,f=!1,g=!1,_=0,m=null,p=null,y=null,T="",x=!0;const b=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const A=document.createElement("span");A.className="thought-kicker",A.textContent="про себя";const v=document.createElement("p");S.append(A,v),document.body.append(S);const C=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),w=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";x1({api:w,enabled:C});const U=document.querySelector(".territory-nav"),X=document.createElement("div");X.className="resident-strip",X.hidden=!0;const G=document.createElement("span");G.className="resident-status",G.textContent="подключаюсь к голове";const z=document.createElement("div");z.className="resident-vitals",z.hidden=!0,z.setAttribute("aria-label","Самочувствие Головы");const O=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(R=>{const L=document.createElement("div");return L.className="need-meter",L.dataset.need=R.key,L.style.setProperty("--need-color",R.color),L.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${R.icon}</svg><div class="need-detail"><div class="need-heading"><b>${R.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${R.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,z.append(L),{key:R.key,card:L,value:L.querySelector(".need-value"),bar:L.querySelector(".need-track")}}),W=document.createElement("button");W.type="button",W.textContent="к голове",W.onclick=()=>{f=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),le()};const J=document.createElement("button");J.type="button",J.textContent="поиграть самому",J.onclick=()=>{f=!f,g=!1,le()};const Y=document.createElement("button");Y.type="button",Y.textContent="мысли",Y.setAttribute("aria-pressed","true"),Y.onclick=()=>{x=!x,Y.setAttribute("aria-pressed",String(x))},X.append(G,z,W,J,Y),U.append(X);function Z(){return Date.now()/1e3+d}function ee(){return l&&Z()-l.heartbeat<60&&l.resident_status!=="stopped"}function j(){return h&&l&&!f}function ce(){var k,F;const R=(F=(k=l==null?void 0:l.mechanics)==null?void 0:k.vitals)==null?void 0:F.public;if(!R){z.hidden=!0;return}const L=ne=>Math.max(0,Math.min(100,Math.round(Number(ne)||0)));z.hidden=!1;for(const ne of O){const D=L(R[ne.key]);ne.value.textContent=String(D),ne.bar.setAttribute("aria-valuenow",String(D)),ne.card.style.setProperty("--need-fill",String(D/100)),ne.card.dataset.low=String(D<=20)}}function le(){const R=f?"ты в песочнице":h?ee()?l!=null&&l.action&&l.action.ends>Z()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";R!==T&&(T=R,G.textContent=R),J.textContent=f?"вернуться к голове":"поиграть самому",W.setAttribute("aria-pressed",String(g))}function me(R){var k,F;if(!R||R.version!==1||!Array.isArray(R.position)||R.position.length!==3||!R.position.every(Number.isFinite)||!R.objects||!Number.isFinite(R.server_time)||!Number.isFinite(R.heartbeat)||l&&(R.server_time<l.server_time||R.server_time===l.server_time&&Number.isFinite(R.revision)&&Number.isFinite(l.revision)&&R.revision<l.revision))return;if(d=R.server_time-Date.now()/1e3,l=R,u=performance.now(),h=!0,X.hidden=!1,m&&((k=R.release)!=null&&k.commit)&&m!==R.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((F=R.release)==null?void 0:F.commit)||m;const L=R.speech;L&&L.time>_&&L.until>Z()&&(_=L.time,f||a(L.text)),window.__beznogimState=R,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:R})),ce(),le()}function I(){const R=l.action;if((R==null?void 0:R.kind)==="move"){const L=Math.max(0,Math.min(1,(Z()-R.started)/Math.max(.001,R.ends-R.started)));return R.from.map((k,F)=>k+(R.to[F]-k)*L)}return l.position}function E(){if(!j())return;const R=l.objects;R.engine&&(t.running=!!R.engine.running),R.workshop&&(t.roof=R.workshop.roof_open?1:0),R.radio&&(t.radio=R.radio.station,p!==t.radio&&(p=t.radio,o())),R.garden&&(t.harvest=R.garden.harvest,y!==null&&t.harvest>y&&c(),y=t.harvest);const L=l.action;t.brew=(L==null?void 0:L.effect)==="brew"?Math.max(0,L.ends-Z()):0,t.loop=0,le()}function V(){if(!j()){S.hidden=!0;return}const R=I();n.position.set(R[0],R[1]+Math.sin(Z()*1.4)*.1,R[2]),e.set(...R),g&&i.target.lerp(n.position,.08);const L=l.musing;if(x&&ee()&&(L!=null&&L.text)&&L.until>Z()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==L.text&&(v.textContent=L.text),b.copy(n.position),b.y+=1.8,b.project(s),b.z>=-1&&b.z<=1&&Math.abs(b.x)<1&&Math.abs(b.y)<1){S.hidden=!1;const k=S.offsetWidth,F=S.offsetHeight,ne=Math.max(k/2+12,Math.min(innerWidth-k/2-12,(b.x+1)*innerWidth/2));let D=(1-b.y)*innerHeight/2-18;const K=U.getBoundingClientRect(),ie=ne-k/2<K.right&&ne+k/2>K.left?K.bottom+12:18,q=D-F<ie;q&&(D=Math.max(ie+F,(1-b.y)*innerHeight/2+70+F)),D=Math.min(innerHeight-70,Math.max(F+18,D)),S.classList.toggle("below-head",q),S.style.transform=`translate3d(${Math.round(ne)}px,${Math.round(D)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function te(){j()&&(f=!0,g=!1,le())}function Q(){if(!C)return;X.hidden=!1;let R=!1;async function L(){if(!R){R=!0;try{const F=await Hf(w+"/api/state");me(F),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-u>35e3)&&(h=!1),le()}finally{R=!1}}}try{const F=new EventSource(w+"/api/events");F.addEventListener("state",ne=>{try{me(JSON.parse(ne.data))}catch{}}),F.onerror=()=>{h=!1,le()}}catch{h=!1,le()}L();function k(){(!h||!l||performance.now()-u>3e4)&&L()}window.addEventListener("online",k),window.addEventListener("beznogim:retry",L),document.addEventListener("visibilitychange",()=>{document.hidden||k()}),setInterval(()=>{l&&performance.now()-u>35e3&&(h=!1),le(),k()},15e3)}return i.addEventListener("start",()=>{g=!1,le()}),Q(),{sync:E,place:V,localPlay:te,unfollow:()=>{g=!1},watching:j,inspect:()=>{var R;return{connected:h,sandbox:f,follow:g,alive:!!ee(),revision:l==null?void 0:l.revision,release:(R=l==null?void 0:l.release)==null?void 0:R.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!S.hidden,position:l?I():null}}}}const M1=120,S1=24,b1=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"settled",name:"облачная перегонная"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Yn={size:M1,sectorSize:S1,sectors:b1};function E1({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new Yi;c.name="unsettled-territory",n.add(c);const l=Yn.size/2,u=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],d=new eo;u.forEach(([w,U],X)=>X?d.lineTo(w,-U):d.moveTo(w,-U)),d.closePath();const h=new lr(d,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const f=new _n(h,new Xs({color:"#233e35",roughness:1}));f.receiveShadow=!0,c.add(f);let g=8409;const _=()=>(g=g*1664525+1013904223>>>0)/4294967296,m=new xc(new to(1,0),new Xs({color:"#8a9980",roughness:1}),150),p=new xc(new bs(1,1,4),new Xs({color:"#9aa880",roughness:1}),850),y=new Gt;for(const[w,U,X]of[[m,150,!0],[p,850,!1]]){for(let G=0;G<U;G++){let z,N;do z=(_()-.5)*(Yn.size-10),N=(_()-.5)*(Yn.size-10);while(Math.abs(z)<11&&Math.abs(N)<9);const O=X?.15+_()*.48:.12+_()*.42;y.position.set(z,-1.7+O*.25,N),y.rotation.set(0,_()*6.28,X?_()*.25:0),y.scale.set(X?O*1.3:.07,O,X?O:.07),y.updateMatrix(),w.setMatrixAt(G,y.matrix)}w.instanceMatrix.needsUpdate=!0,c.add(w)}const T=new Xs({color:"#c1b692",roughness:1});for(let w=0;w<16;w++){const U=new _n(new Oi(1.15,.12,.65),T);U.position.set(-.6,-.06-w*.105,5.8+w*.7),U.receiveShadow=!0,c.add(U)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const b=document.createElement("dialog");b.id="territory-dialog",b.setAttribute("aria-labelledby","territory-title"),b.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. К востоку от почтового моста четыре карты переливают облако за шестнадцать игровых часов. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(b);const S=b.querySelector("#territory-grid");for(const w of Yn.sectors){const U=document.createElement("button");U.type="button",U.dataset.sector=w.id,U.className=w.status==="settled"?"settled":"",U.textContent=w.status==="settled"?`● ${w.id==="0:0"?"двор":w.name}`:`· ${w.id}`,U.setAttribute("aria-label",`${w.name}, ${w.id}`),U.onclick=()=>{b.close(),s(w.x,w.z,w.status==="settled")},S.append(U)}document.querySelector("#territory-map").onclick=()=>b.showModal(),document.querySelector("#world-overview").onclick=r,b.querySelector("#territory-close").onclick=()=>b.close(),b.querySelector("#territory-home").onclick=()=>{b.close(),o()};const A=x.querySelector("#territory-location");let v="";function C(){const w=a()||t.target,U=Math.round(w.x/Yn.sectorSize),X=Math.round(w.z/Yn.sectorSize),G=`${U}:${X}`;if(G!==v){v=G;const z=Yn.sectors.find(N=>N.id===G);A.textContent=`${(z==null?void 0:z.status)==="settled"?z.name:"свободная земля"} · ${G}`;for(const N of S.children)N.classList.toggle("current",N.dataset.sector===G)}}return{half:l,update:C,inspect:()=>({size:Yn.size,sectorSize:Yn.sectorSize,sectors:Yn.sectors.length,settled:Yn.sectors.filter(w=>w.status==="settled").length,visible:n.visible,sector:v})}}function w1({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,paperBoat:f,batchStatic:g,changed:_,chime:m}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const y={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},T=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:y.wins,trace:y.trace}))}catch{}}const b=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,b),a([0,.46,0],[1.22,.08,1.3],s.dark,b);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const q of[-.62,.62])for(const ae of[-.64,.64])u([q,.46,ae],[q,1.45,ae],.024,s.copper,b);for(const q of[-.62,.62])a([q,.96,0],[.018,.95,1.28],S,b);a([0,.96,-.64],[1.24,.95,.018],S,b);const A=o([0,1.45,-.64],b);for(const q of[-.62,.62])u([q,0,0],[q,.36,.64],.026,s.copper,A);for(const q of[-.62,.62])u([q,.36,.64],[q,0,1.28],.026,s.copper,A);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,A);const v=a([0,.18,.32],[1.26,.025,.72],S,A);v.rotation.x=-.51;const C=a([0,.18,.96],[1.26,.025,.72],S,A);C.rotation.x=.51;const w=o([0,.52,0],b);l([0,.2,0],.026,.4,s.leaf,w);for(const q of[-1,1]){const ae=c([q*.15,.27,0],[.22,.055,.09],s.leaf,w);ae.rotation.z=q*.35}const U=c([0,.25,.12],[.23,.16,.27],s.copper,w),X=c([.42,.58,.46],[.15,.1,.18],s.copper,b);X.visible=y.wins>0;const G=o([-.76,.7,.69],b);a([0,.28,0],[.13,.66,.06],s.cream,G);const z=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),G);c([0,-.06,.04],.065,s.rust,G),h("ПАРНИК",[0,.3,.716],.93,.22,b,{size:49});const N=d([0,2.05,0],.46,.016,s.mint,b);N.visible=y.trace;const O=[];for(let q=0;q<6;q++)O.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),b));g(b,[A,w,G,N,X,...O]),g(A,[]),g(w,[U]),g(G,[z]);let W=0,J=0;function Y(){Object.assign(y,{temp:4,turn:0,mode:"playing"}),W=0,_()}function Z(q){if(y.mode!=="playing")return;const ae={heat:2,wait:0,vent:-2};q in ae&&(y.temp+=T[y.turn]+ae[q],y.turn++,y.temp>6?(y.mode="hot",W=3,m(110)):y.temp<3?(y.mode="cold",m(165)):y.turn===6&&(y.mode="won",y.wins=Math.min(99,y.wins+1),X.visible=!0,x(),m(660)),_())}function ee(){let q="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return y.mode==="playing"&&(q=`Тепло ${y.temp} / норма 3–6. Такт ${y.turn+1} из 6. Следующее солнце: ${T[y.turn]>0?"+":""}${T[y.turn]}. Выбери один ход.`),y.mode==="hot"&&(q=`Тепло ${y.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),y.mode==="cold"&&(q=`Тепло ${y.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),y.mode==="won"&&(q="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:q,action:y.mode==="idle"?"вырастить вычисление":"начать заново"}}const j=o([0,0,0],t);j.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,j),a([0,-.42,0],[6.8,.08,5.6],s.dark,j);for(const q of[-3.2,3.2])for(const ae of[-2.6,2.6])u([q,-.4,ae],[q,4,ae],.055,s.copper,j);for(const q of[-3.2,3.2])u([q,4,-2.6],[q,5.7,0],.055,s.copper,j),u([q,5.7,0],[q,4,2.6],.055,s.copper,j);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,j),a([-3.2,1.8,0],[.025,4.4,5.2],S,j),a([0,1.8,-2.6],[6.4,4.4,.025],S,j),h("СОН / 01",[0,-.12,2.93],2.2,.38,j,{size:52});const ce=o([0,1.6,0],j);c([0,0,0],1.16,r("#5f9c85"),ce);for(let q=0;q<10;q++){let ae=q*2.4;const ye=c([Math.sin(ae)*.95,Math.cos(q*1.2)*.6,Math.cos(ae)*.95],[.35,.2,.3],s.leaf,ce);ye.rotation.y=ae}d([0,0,0],1.32,.028,s.copper,ce,[.4,0,.2]);const le=o([0,1.6,0],j),me=[];for(let q=0;q<28;q++){const ae=a([0,0,0],[.53,.11,.32],q%4?s.cream:s.concrete,le);me.push(ae)}const I=f(j,[1.7,-.05,1],1.65),E=c([0,.65,0],.13,s.cream,I),V=o([0,.65,0],I);V.visible=!1;for(let q=0;q<8;q++){let ae=q/8*Math.PI*2;u([Math.sin(ae)*.27,Math.cos(ae)*.27,0],[Math.sin(ae)*.5,Math.cos(ae)*.5,0],.026,s.light,V)}const te=i.clone(!0);j.add(te),te.scale.setScalar(.72),te.position.set(-2,1,1.3),te.rotation.z=-.25;const Q=o([-2,-.05,1.3],j);l([0,0,0],.55,.3,s.cream,Q),d([.58,0,0],.25,.04,s.copper,Q,[0,0,0]);const R=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,j);R.rotation.y=.2;let L=0,k=0,F=!1;g(j,[ce,le,I,te]),g(ce,[]);function ne(){F=!0,L=0,k=0,j.visible=!0,e.visible=!1,_()}function D(){F=!1,j.visible=!1,e.visible=!0,_()}function K(){F&&(L===3?(L=0,k=0):(L++,m(220+L*110),L===3&&(y.trace=!0,N.visible=!0,x())),_())}function ie(q,ae){J=n.MathUtils.damp(J,y.mode==="hot"?-1.1:y.mode==="playing"?-.08:0,4,q),A.rotation.x=J,w.scale.y=n.MathUtils.damp(w.scale.y,y.mode==="hot"?.2:y.mode==="cold"?.45:y.mode==="won"?1.25:.6+y.turn*.08,4,q),U.visible=y.mode==="won",z.scale.y=.3*Math.max(.05,y.temp/8),z.position.y=-.015+y.temp/8*.15,N.rotation.z=Math.sin(ae*.3)*.15,W=Math.max(0,W-q),O.forEach((ye,Se)=>{ye.visible=W>0;const $=(3-W+Se*.18)%1.5;ye.position.set(Math.sin(Se*2)*$*.35,1.5+$,Math.cos(Se*2)*$*.35),ye.scale.setScalar(.1*(.4+$))}),F&&(k=n.MathUtils.damp(k,L,2,q),ce.rotation.y=ae*.08,me.forEach((ye,Se)=>{const $=Se/28*Math.PI*2+ae*.055*Math.min(1,k),ze=Math.min(1,k);ye.position.set(Math.sin($)*(1.8+ze*.35),Math.cos($)*(1.8-ze*1.5),Math.cos($)*ze*1.5),ye.rotation.set(0,-$*ze,Math.PI/2-$*(1-ze))}),le.rotation.y=k*.32,I.position.y=-.05+k*1.12,I.position.x=1.7-k*.32,I.rotation.y=.2+k*.35,E.scale.setScalar(.13*(1+Math.max(0,k-2)*2)),V.visible=k>2.2,V.rotation.z=ae*.22,te.position.y=1+Math.sin(ae*.8)*.06)}return{house:b,start:Y,step:Z,card:ee,update:ie,enter:ne,exit:D,breathe:K,inspect:()=>({...y,weather:[...T],dream:F,dreamStep:L,phase:k,lidAngle:J,rootVisible:e.visible,dreamVisible:j.visible,boatY:I.position.y,rays:V.visible})}}function T1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:g,chime:_}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const p=r("#c39860"),y=r("#e0c58b"),T=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),b=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),y,[0,-.11,0],null,m);for(let I=0;I<13;I++){const E=.15+I/12*Math.PI*1.42,V=Math.sin(E)*3.65,te=Math.cos(E)*3.65,Q=c([V,.48,te],[.75,1.08,.19],y,m);Q.rotation.y=E,I%3===0&&h([V,.48,te],.15,.048,T,m,[Math.PI/2,0,0]).rotation.set(0,E,0)}f("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const S=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],T,S);for(let I of[-1.15,1.15])for(let E of[-.63,.63])c([I,-.23,E],[.12,.5,.12],s.copper,S);for(let I of[-.79,.79])c([0,.36,I],[2.72,.65,.14],b,S);for(let I of[-1.32,1.32])c([I,.38,0],[.14,.68,1.55],b,S);const A=c([0,.18,0],[2.49,.045,1.49],x,S),v=l([-.84,.38,0],[.34,.14,.54],s.cream,S),C=i.clone(!0);m.add(C),C.scale.setScalar(.54),C.position.set(.3,.83,.45),C.rotation.z=-.35;const w=a([0,0,0],C);for(const I of[-.23,.23])l([I,.2,.611],[.15,.11,.025],s.black,w),c([I,.2,.64],[.2,.018,.012],s.copper,w);const U=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,U),u([0,.29,0],.44,.022,T,U),h([.55,0,0],.24,.055,s.copper,U,[0,0,0]),f("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const X=[];for(let I=0;I<7;I++){const E=a([-1.92+I*.33,.2+I*.29,1.45-I*.29],m);c([0,0,0],[.7,.13,.42],s.cream,E);for(let V of[-.2,.2])c([0,.07,V],[.7,.12,.05],s.copper,E);X.push(E)}const G=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],x,m)),z=Array.from({length:3},(I,E)=>{const V=h([.65,.2,0],.23+E*.16,.012,s.mint,S);return V.scale.z=.6,V}),N=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,N),N.rotation.z=.55;const O=[];for(let I=0;I<9;I++){const E=I*2.4;O.push(l([Math.sin(E)*3,3.2+I%3*.28,Math.cos(E)*2],.025,s.cream,m))}let W=!1,J=0,Y=0,Z=!1;try{Z=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const ee=a([26.6,-.86,.65],t);ee.visible=Z,u([0,0,0],.15,.2,s.cream,ee),u([0,.104,0],.125,.014,x,ee),h([.16,0,0],.07,.02,s.copper,ee,[0,0,0]),g(m,[S,C,U,...X,...G,...O,N]),g(S,[A,v,...z]),g(U,[]),g(ee,[]),X.forEach(I=>g(I,[]));function j(){W=!0,J=0,Y=0,m.visible=!0,t.visible=!1,me(0,0)}function ce(){W=!1,m.visible=!1,t.visible=!0}function le(){if(W&&(J=J===3?0:J+1,_(165+J*55),J===3)){Z=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function me(I,E){W&&(Y=n.MathUtils.damp(Y,J,2.4,I),X.forEach((V,te)=>{const Q=Math.min(1,Y/2),R=-1.92+te*.33,L=.2+te*.29,k=1.45-te*.29;V.position.set(n.MathUtils.lerp(R,-1.72+te*.39,Q),n.MathUtils.lerp(L,1.95-te*.22,Q),n.MathUtils.lerp(k,-.32+te*.055,Q)),V.rotation.z=-Q*.21}),A.position.y=.18+Y*.09,v.position.y=.38+Y*.09,C.position.y=.83+Y*.09+Math.sin(E*.6)*.025,C.rotation.z=-.35-Y*.13,U.rotation.z=-Math.min(1,Y)*.45,G.forEach((V,te)=>{const Q=(E*.16+te/16)%1;V.visible=Y>.05,V.position.set(-1.7+Q*3,2.14-Q*1.62,-.32+Q*.25),V.scale.set(.07,.1+Math.sin(Q*Math.PI)*.04,.07)}),z.forEach((V,te)=>{V.visible=Y>.4,V.position.y=A.position.y+.034,V.scale.setScalar(1+Math.sin(E*.5+te)*.08),V.scale.z*=.6}),N.rotation.z=.55+Y*.21,w.visible=Y>1.8)}return{enter:j,exit:ce,pour:le,update:me,inspect:()=>({active:W,step:J,phase:Y,trace:Z,roomVisible:m.visible,rootVisible:t.visible,waterY:A.position.y,sleeperY:C.position.y,channel:X.map(I=>I.position.toArray()),droplets:G.filter(I=>I.visible).length})}}function A1({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const f of[-.23,.23])t([f,.2,.611],[.15,.11,.025],r.black,c),i([f,.2,.64],[.2,.018,.012],r.copper,c);let l=null,u=0;function d(f){l=f,u=Number(f.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:f})=>d(f)),window.__beznogimState&&d(window.__beznogimState);function h(f){const g=l==null?void 0:l.action;a.visible=!!f&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),c.visible=a.visible}return{update:h,inspect:()=>{var f;return{visible:a.visible,ends:((f=l==null?void 0:l.action)==null?void 0:f.kind)==="sleep"?l.action.ends:null}}}}const Ar=Object.freeze([1,2,3,4,5,7]),Pc=()=>({phase:"sorting",places:[0,0,0,0,0,0],progress:0});function Ga(n){return[1,2].map(e=>n.places.reduce((t,i,s)=>t+(i===e?Ar[s]:0),0))}function Lc(n){const[e,t]=Ga(n);return n.places.every(i=>i!==0)&&e===t}function C1(n,e){return n.phase==="sorting"&&Number.isInteger(e)&&e>=0&&e<6?{...n,places:n.places.map((t,i)=>i===e?(t+1)%3:t)}:n}function R1(n){return n.phase==="flying"?Pc():n.phase==="sorting"&&Lc(n)?{...n,phase:"unfolding",progress:0}:n}function P1(n,e){if(n.phase!=="unfolding"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return{...n,progress:t,phase:t===1?"flying":"unfolding"}}function Ic(n){const e=n.phase==="flying"?1:n.phase==="unfolding"?n.progress:0,t=e*e*(3-2*e),[i,s]=Ga(n);return{open:t,headY:.85+t*2.25,waterTilt:t*Math.PI/2,waterY:-.3+t*2.5,lean:(s-i)/22*.18}}function L1(n,e){const t=n.places[e],i=Ic(n).open;return t===0?[-3+e*1.2,.15,2.85]:[(t===1?-2.1:2.1)+(e%3-1)*.35,.9+Math.floor(e/3)*.45+i*(2.1+e*.12),.5+e%2*.35-i*.8]}function I1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,tube:u,torus:d,sign:h,batchStatic:f,chime:g,changed:_}){const m=o([0,0,0],e);m.name="dream09-ears-for-the-shore",m.visible=!1;const p=r("#cb9e8d"),y=r("#936e73"),T=r("#e6d5ad"),x=r("#649a9a",{metalness:.25,roughness:.3}),b=r("#334e59"),S=o([0,-.3,-.9],m);a([0,-.16,0],[8.1,.2,4.7],b,S),a([0,0,0],[7.8,.09,4.4],x,S);for(let le=0;le<7;le++)d([0,.07,0],.35+le*.325,.016,T,S);function A(le,me,I,E){const V=document.createElement("canvas");V.width=V.height=128;const te=V.getContext("2d");te.fillStyle="#e4d8b7",te.fillRect(0,0,128,128),te.fillStyle="#334e59",te.font="bold 96px monospace",te.textAlign="center",te.textBaseline="middle",te.fillText(le,64,68);const Q=new n.CanvasTexture(V);Q.colorSpace=n.SRGBColorSpace;const R=new n.Mesh(new n.PlaneGeometry(I,I),new n.MeshBasicMaterial({map:Q,side:n.DoubleSide}));return R.position.set(...me),R.rotation.y=Math.PI/4,E.add(R),R}const v=[];for(const le of[-1,1]){const me=o([le*2.1,1.9,0],m);v.push(me);const I=o([0,0,0],me);I.scale.x=le,c([0,0,0],[.87,1.67,.24],p,I),c([0,.1,.2],[.65,1.33,.17],y,I),u([[.2,-1.4,.18],[.7,-.9,.2],[.8,.45,.18],[.55,1.4,.14],[-.35,1.5,.12],[-.7,.7,.2],[-.6,-.25,.3],[-.15,-.55,.4],[.2,-1.4,.18]],.1,T,I),u([[.22,-.55,.45],[.42,.1,.4],[.28,.9,.4],[-.23,1.02,.4],[-.4,.45,.43],[-.1,.1,.48],[.2,.22,.5]],.095,p,I),c([-.13,-.4,.45],[.23,.34,.07],s.black,I),c([-.45,-.5,.5],[.19,.28,.12],p,I),l([0,-1.8,0],.38,.25,s.copper,me),A(le===-1?"Л":"П",[0,-1.5,.6],.34,me)}const C=i.clone(!0);C.scale.setScalar(.57),m.add(C);const w=[],U=[],X=[],G=[];for(let le=0;le<6;le++){const me=o([0,0,0],m);w.push(me),G.push(new n.Vector3),c([0,0,0],[.19+Ar[le]*.023,.16,.23],le%2?s.concrete:s.copper,me);const I=A(String(Ar[le]),[0,.43,.1],.42,me);U.push(I);const E=o([0,-.2,0],me);X.push(E);for(let V=0;V<Ar[le];V++)d([0,V*.045,0],.32,.012,T,E)}const z=c([0,.1,-1],.28,s.mint,m);h("НЕ ПО ТЕГАМ",[0,-.05,3.4],2.2,.3,m,{size:46});const N=o([3.15,.2,3.2],t);d([0,.12,0],.12,.035,T,N,[0,0,0]),c([0,0,0],[.12,.09,.1],s.concrete,N),N.visible=!1,f(S,[]),v.forEach(le=>f(le,[])),w.forEach((le,me)=>f(le,[U[me],X[me]])),X.forEach(le=>f(le,[])),f(N,[]);let O=Pc(),W=!1,J=!1;try{J=JSON.parse(localStorage.getItem("beznogim-dream09-v1")||"{}").trace===!0}catch{}N.visible=J;function Y(){O=Pc(),W=!0,t.visible=!1,m.visible=!0,ce(0,0,!0)}function Z(){W=!1,t.visible=!0,m.visible=!1}function ee(le){if(!W)return;const me=C1(O,le);me!==O&&(O=me,g(150+Ar[le]*35),_())}function j(){if(!W)return;const le=R1(O);le!==O&&(O=le,g(O.phase==="unfolding"?510:160),_())}function ce(le,me,I=!1){if(!W)return;const E=O.phase;O=P1(O,le);const V=Ic(O),te=Number.isFinite(le)?Math.min(.1,Math.max(0,le)):0;if(v.forEach((Q,R)=>{const L=R===0?-1:1;Q.rotation.z=V.lean*(1-V.open)-L*V.open*Math.PI/2,Q.position.y=1.9+V.open*.8}),C.position.set(0,V.headY,1.7-V.open*.8),C.rotation.x=O.places.some(Q=>Q===0)?Math.sin(me*2.2)*.13:0,S.rotation.x=V.waterTilt,S.position.y=V.waterY,w.forEach((Q,R)=>{G[R].set(...L1(O,R)),I?Q.position.copy(G[R]):Q.position.lerp(G[R],1-Math.exp(-9*te)),U[R].visible=O.places[R]===0,X[R].rotation.y=me*.2}),z.position.y=.1+V.open*4.7,z.scale.setScalar(.28*(1+V.open*.6)),O.phase==="flying"&&!J){J=!0,N.visible=!0;try{localStorage.setItem("beznogim-dream09-v1",JSON.stringify({trace:!0}))}catch{}}E!==O.phase&&_()}return{enter:Y,exit:Z,move:ee,act:j,update:ce,ready:()=>Lc(O),busy:()=>O.phase==="unfolding",text:()=>O.phase==="flying"?"Уши раскрылись крыльями. Вода встала стеной, а камень наконец утонул в небе. Теперь я хотя бы молчу с ушами.":O.phase==="unfolding"?"Ярлыки закончились. Берег поднимает уши, вода слушает стоя.":`Каждый камень: полка → левое → правое → полка. Разложи все шесть поровну. Сейчас ${Ga(O).join(" : ")}.`,button:()=>O.phase==="flying"?"увидеть сон снова":O.phase==="unfolding"?"берег слушает…":"услышать тишину · 11 : 11",inspect:()=>({...O,active:W,trace:J,loads:Ga(O),ready:Lc(O),pose:Ic(O),earAngles:v.map(le=>le.rotation.z),stones:w.map(le=>le.position.toArray()),tags:U.map(le=>le.visible),head:C.position.toArray(),moon:z.position.toArray(),moonScale:z.scale.x,waterTilt:S.rotation.x,rootVisible:t.visible,roomVisible:m.visible,landmarks:[[-4.2,.1,0],[4.2,.1,0],[0,4.9,-1],[0,.1,3.5]]})}}const Dc=Object.freeze([1,3,2]),Nc=()=>({phase:"tuning",turns:[0,0,0],progress:0,trace:!1}),$o=n=>n.turns.map((e,t)=>e===Dc[t]);function D1(n,e){return n.phase==="tuning"&&Number.isInteger(e)&&e>=0&&e<3?{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t)}:n}function N1(n){return n.phase==="sky"?Nc():n.phase==="tuning"&&$o(n).every(Boolean)?{...n,phase:"releasing",progress:0}:n}function U1(n,e){if(n.phase!=="releasing"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return t<1?{...n,progress:t}:{...n,progress:1,phase:"sky",trace:!0}}function fd(n,e){const t=n.phase==="sky"?1:n.phase==="releasing"?n.progress:0,i=t*t*(3-2*t),s=e*Math.PI/5;return{x:Math.cos(s)*(3.05+i*.25),y:.65+i*(2.5+e%3*.65),z:Math.sin(s)*(3.05+i*.25),lift:i,diskScale:1-i*.78,diskTilt:i*Math.PI/2}}function O1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,batchStatic:f,chime:g,changed:_}){const m=o([0,0,0],e);m.name="dream08-ten-torches",m.visible=!1;const p=r("#344c5d"),y=r("#647c83"),T=r("#ddc999"),x=["#d38d6d","#81beca","#d6c56e"],b=x.map(I=>r(I)),S=x.map(I=>r(I,{emissive:I,emissiveIntensity:1.4}));l([0,-.4,0],4.15,.22,p,m),d([0,-.27,0],4,.035,s.copper,m);const A=o([0,.18,0],m);l([0,0,0],2.6,.18,s.black,A),l([0,.105,0],.49,.015,T,A);const v=[],C=[];for(let I=0;I<3;I++){const E=.9+I*.6,V=o([0,.12,0],A);v.push(V),d([0,0,0],E,.035,b[I],V),d([0,-.02,0],E+.09,.008,y,V),c([E,.04,0],.13,S[I],V);for(let Q=0;Q<4;Q++){const R=Q*Math.PI/2;a([Math.cos(R)*E,.025,Math.sin(R)*E],[.1,.07,.1],Q===Dc[I]?b[I]:y,A)}const te=Dc[I]*Math.PI/2;C.push(u([Math.cos(te)*E,.18,Math.sin(te)*E],[0,.18,0],.018,S[I],A))}h("1 / 3 / 2",[0,.09,2.82],1.7,.35,m,{size:68}).rotation.x=-Math.PI/2;const w=[],U=[],X=[];for(let I=0;I<10;I++){const E=o([0,0,0],m),V=I%3;X.push(V),w.push(E),l([0,-.34,0],.055,.7,s.copper,E),l([0,0,0],.14,.14,b[V],E);const te=c([0,.26,0],[.12,.3,.12],S[V],E);U.push(te),d([0,-.16,0],.17,.018,b[V],E)}const G=i.clone(!0);G.position.set(0,.65,3.1),G.scale.setScalar(.4),m.add(G);const z=[];for(const I of[-1,1]){const E=o([I*.16,-.08,.7],G);u([0,0,0],[I*.85,-.12,0],.055,s.black,E),c([I*.8,-.12,0],[.19,.08,.08],s.black,E),z.push(E)}const N=o([-5.05,.15,1.55],t);l([0,0,0],.13,.06,s.black,N),c([0,.15,0],[.045,.095,.045],s.light,N),N.visible=!1,f(m,[A,...w,G]),f(A,[...v,...C]),v.forEach(I=>f(I,[])),w.forEach((I,E)=>f(I,[U[E]])),f(N,[]);let O=Nc(),W=!1,J=!1;const Y=[0,0,0],Z=[0,0,0];try{J=JSON.parse(localStorage.getItem("beznogim-dream08-v1")||"{}").trace===!0}catch{}N.visible=J;function ee(){O=Nc(),Y.fill(0),Z.fill(0),W=!0,t.visible=!1,m.visible=!0,me(0,0)}function j(){W=!1,t.visible=!0,m.visible=!1}function ce(I){if(!W)return;const E=D1(O,I);E!==O&&(O=E,Z[I]+=Math.PI/2,g(180+I*85+O.turns[I]*20),_())}function le(){if(!W)return;const I=N1(O);I!==O&&(O=I,O.phase==="tuning"&&(Y.fill(0),Z.fill(0)),g(O.phase==="releasing"?440:165),_())}function me(I,E){if(!W)return;const V=O.phase;O=U1(O,I);const te=$o(O),Q=fd(O,0),R=Number.isFinite(I)?Math.max(0,Math.min(.1,I)):0;if(v.forEach((L,k)=>{Y[k]=n.MathUtils.damp(Y[k],Z[k],9,R),L.rotation.y=-Y[k],C[k].visible=te[k]}),A.scale.setScalar(Q.diskScale),A.rotation.x=Q.diskTilt,A.position.y=.18+Q.lift*2.7,w.forEach((L,k)=>{const F=fd(O,k);L.position.set(F.x,F.y,F.z),L.rotation.z=Q.lift*Math.sin(E*.7+k)*.1,U[k].visible=te[X[k]],U[k].scale.y=1+Math.sin(E*5+k)*.1}),z.forEach((L,k)=>L.rotation.z=Math.sin(E*2+k*Math.PI)*.3),G.rotation.y=Math.sin(E*.3)*.12,O.trace&&!J){J=!0,N.visible=!0;try{localStorage.setItem("beznogim-dream08-v1",JSON.stringify({trace:!0}))}catch{}}V!==O.phase&&_()}return{enter:ee,exit:j,turn:ce,act:le,update:me,busy:()=>O.phase==="releasing",canRelease:()=>O.phase!=="tuning"||$o(O).every(Boolean),text:()=>O.phase==="sky"?"Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.":O.phase==="releasing"?"Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.":"Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.",button:()=>O.phase==="sky"?"увидеть сон снова":O.phase==="releasing"?"факелы уходят в небо…":"освободить место ↑",inspect:()=>({...O,active:W,trace:J,aligned:$o(O),ringAngles:v.map(I=>I.rotation.y),flames:U.map(I=>I.visible),torches:w.map(I=>I.position.toArray()),diskScale:A.scale.x,diskTilt:A.rotation.x,diskY:A.position.y,rootVisible:t.visible,roomVisible:m.visible,whiskers:z.map(I=>I.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})}}const Uc=()=>({phase:"flat",progress:0,trace:!1}),Wf=n=>["folding","falling","turning"].includes(n.phase);function F1(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?Uc():n}function z1(n,e){if(!Wf(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function pd(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function k1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,sign:d,batchStatic:h,chime:f,changed:g}){const _=new n.Group;e.add(_),_.visible=!1;const m=r("#e9dbb7"),p=r("#405e62"),y=r("#c87e68"),T=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],p,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],m,x);const b=[];for(let I=0;I<4;I++){const E=o([0,0,0],x);E.rotation.y=I*Math.PI/2;const V=o([0,0,1.25],E);a([0,0,.8],[2.5,.05,1.6],m,V),a([0,.032,.76],[.022,.015,1.3],y,V),a([0,.035,.1],[2.3,.015,.018],y,V),b.push(V)}const S=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],p,S),a([0,.12,0],[2.15,.08,2.15],s.concrete,S);const A=o([-.45,.18,-.3],S);a([0,.33,0],[.8,.66,.7],m,A),a([0,.4,.36],[.25,.28,.025],T,A),a([0,.73,0],[1.05,.12,.9],y,A);const v=o([.65,.72,-.5],S);u([-.25,-.5,0],[-.25,.4,0],.03,p,v),u([.25,-.5,0],[.25,.4,0],.03,p,v),u([-.25,.4,0],[.25,.4,0],.03,p,v);const C=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,y,C),c([0,-.67,0],.14,s.copper,C);for(let I=0;I<4;I++)a([-.7+I*.42,.23,.66],[.28,.13,.36],m,S);const w=[];for(const I of[-1.05,1.05])for(const E of[-1.05,1.05])w.push(u([I,4.45,E],[I,5.25,E],.012,s.copper,_));for(const I of[-2.8,2.8])u([I,0,-1.6],[I,5.3,-1.6],.06,p,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,p,_);const U=(I,E=_)=>{const V=o(I,E);a([0,.4,0],[.55,.1,.55],y,V),a([0,.73,-.24],[.55,.65,.08],y,V);for(const te of[-.2,.2])for(const Q of[-.2,.2])u([te,0,Q],[te,.4,Q],.025,p,V);return V},X=[U([-2.6,0,1.1]),U([-2.6,0,2.1]),U([-1.65,0,2.1]),U([-.7,0,2.1])],G=o([0,2,0],_);c([0,0,0],[.15,.27,.15],T,G),u([0,.18,0],[.19,.35,0],.018,s.copper,G);const z=i.clone(!0);z.scale.setScalar(.35),z.position.set(2.8,.78,1.65),_.add(z),d("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const N=U([-30.6,-1.3,-20.8],t);N.scale.setScalar(.35),N.visible=!1,h(_,[x,S,...w,...X,G,z]),h(x,b.map(I=>I.parent)),b.forEach(I=>h(I,[])),h(S,[A,v]),h(A,[]),h(v,[C]),h(C,[]),X.forEach(I=>h(I,[])),h(G,[]),h(N,[]);const O=new n.Vector3,W=new n.Vector3(1,0,-1).normalize();let J=Uc(),Y=!1,Z=!1;try{Z=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}N.visible=Z;function ee(){J=Uc(),Y=!0,_.visible=!0,t.visible=!1,le(0,0)}function j(){Y=!1,_.visible=!1,t.visible=!0}function ce(){const I=F1(J);I!==J&&(J=I,f(J.phase==="falling"?165:J.phase==="turning"?440:330),g())}function le(I,E){if(!Y)return;const V=J.phase;J=z1(J,I);const{fold:te,fall:Q,turn:R}=pd(J);if(b.forEach(L=>L.rotation.x=-te*.92*(1-R)),x.quaternion.setFromAxisAngle(W,R*2.2),x.position.y=.12+R*3.9,S.position.set(0,4.4-3.65*Q,0),S.quaternion.identity(),R>0&&(O.set(0,.63,0).applyAxisAngle(W,R*2.2),S.position.copy(O).add(x.position),S.quaternion.copy(x.quaternion)),w.forEach(L=>L.visible=Q===0),C.rotation.z=Math.sin(E*2.1)*.5,G.position.set(-2.6*R,2-1.34*R,1.1*R),G.rotation.z=Math.sin(E)*.1,X.forEach((L,k)=>{k>0&&(L.position.y=R*.15*Math.sin(E+k),L.rotation.z=R*Math.sin(E+k)*.035)}),J.trace&&!Z){Z=!0,N.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}J.phase!==V&&g()}return{enter:ee,exit:j,act:ce,update:le,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[J.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[J.phase],busy:()=>Wf(J),inspect:()=>({...J,...pd(J),active:Y,trace:Z,rootVisible:t.visible,roomVisible:_.visible,leafAngles:b.map(I=>I.rotation.x),yard:S.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(S.quaternion.w))),yardQuaternion:S.quaternion.toArray(),pocket:x.position.toArray(),seed:G.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const Oc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function B1(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function G1(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?Oc():n}function V1(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function H1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,batchStatic:f,chime:g,changed:_}){const m=o([0,0,0],e);m.name="dream-06-cloud-heating",m.visible=!1;const p=r("#203f49"),y=r("#dce6d7"),T=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),b=r("#598e9d"),S=r("#ede1c3");l([0,-.3,0],4,.4,p,m),d([0,-.06,0],3.85,.045,T,m);for(let k=0;k<8;k++)u([-3+k*.85,-.06,-2.5],[-3+k*.85,-.06,2.5],.012,b,m);const A=o([-2.35,0,.2],m);a([0,.2,0],[1.7,.35,1.3],s.concrete,A);for(let k=0;k<6;k++){const F=-.65+k*.26;a([F,1.2,0],[.16,1.8,.66],T,A),d([F,2.12,0],.27,.065,T,A,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,T,A),u([-.8,1.95,.2],[.8,1.95,.2],.11,T,A);const v=c([-2.35,1.15,.87],.42,b,m);d([-2.35,1.15,.87],.48,.024,S,m,[.5,.3,0]);const C=["ЗЕМЛЯ","ОБЛАКО"].map((k,F)=>{const ne=o([-3+F*1.3,.4,2.1],m);a([0,0,0],[.87,.14,1.13],p,ne);for(let D=0;D<4;D++)a([-.27+D*.18,.09,-.28],[.08,.03,.25],x,ne);return h(k,[0,.12,.32],.78,.22,ne,{size:52}).rotation.x=-Math.PI/2,ne}),w=d([-2.8,.57,2.1],.5,.035,x,m);w.rotation.x=Math.PI/2;const U=o([0,0,0],m);u([-1.5,.45,.2],[-.7,.45,.2],.09,T,U),u([-.7,.45,.2],[-.7,3.7,.2],.09,T,U),u([-.7,3.7,.2],[1.2,3.7,.2],.09,T,U);const X=Array.from({length:7},(k,F)=>c([.1+F*.45,3.8+F%2*.22,-.8],[.65,.45,.63],y,m)),G=o([1.25,3.1,-.8],m);a([0,.2,0],[2.6,.1,1.7],S,G);for(const k of[-1.15,1.15])for(const F of[-.7,.7])u([k,.2,F],[k,1.28,F],.045,T,G);const z=o([0,1.26,0],G);a([-.61,.15,0],[1.45,.12,1.95],y,z).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],y,z).rotation.z=-.35;const N=[a([-.68,.8,.72],[.48,.57,.06],x,G),a([.68,.8,.72],[.48,.57,.06],x,G)],O=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],W=[],J=[];O.forEach(([k,F,ne],D)=>{const K=o([k,F,ne],m);W.push(K),a([0,.05,0],[1.2,.13,1.1],s.concrete,K);for(const q of[-.5,.5])u([q,.1,-.38],[q,1.1,-.38],.045,T,K);u([-.5,1.1,-.38],[0,1.5,-.38],.045,T,K),u([0,1.5,-.38],[.5,1.1,-.38],.045,T,K);const ie=o([1.25,3.9,-.05],m);J.push(ie),a([0,0,0],[.65,.72,.12],S,ie),a([0,0,.071],[.48,.55,.035],x,ie),u([0,-.28,.1],[0,.28,.1],.018,T,ie),u([-.23,0,.1],[.23,0,.1],.018,T,ie)});const Y=Array.from({length:10},()=>c([0,0,0],.065,x,m)),Z=i.clone(!0);Z.scale.setScalar(.4),Z.position.set(-2,.9,-1.7),m.add(Z),h("СОН / 06",[0,-.04,3.3],1.5,.29,m,{size:52}).rotation.x=-Math.PI/2;const ee=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],T,ee),a([0,0,.04],[.13,.22,.02],x,ee),ee.visible=!1,f(m,[A,v,...C,w,U,...X,G,...W,...J,...Y,Z]),f(A,[]),f(U,[]),f(G,[z,...N]),f(z,[]),W.forEach(k=>f(k,[])),J.forEach(k=>f(k,[])),C.forEach(k=>f(k,[]));let j=Oc(),ce=!1,le=0,me=0,I=!1;try{I=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}ee.visible=I;function E(){j=Oc(),le=0,me=0,ce=!0,m.visible=!0,t.visible=!1,R(0,0)}function V(){ce=!1,m.visible=!1,t.visible=!0}function te(k){j=B1(j,k),g(k==="sky"?330:165),_()}function Q(){j=G1(j),g(j.phase==="raining"?440:220),_()}function R(k,F){if(!ce)return;const ne=j.phase;j=V1(j,k);const D=j.phase==="heating",K=j.target==="sky",ie=K?D?j.progress:["cloud","raining","settled"].includes(j.phase)?1:0:0;if(le=ie,me=j.phase==="raining"?j.progress:j.phase==="settled"?1:0,G.visible=ie>.02,G.scale.setScalar(Math.max(.001,ie)),G.position.y=3.1+Math.sin(F*.9)*.05,X.forEach((q,ae)=>{q.position.y=3.8+ae%2*.22+ie*.5-me*.25,q.scale.set(.65+ie*.12,.45*(1-ie*.6),.63)}),v.scale.setScalar(.42*(D&&!K?1+Math.sin(j.progress*Math.PI)*.75:1)),v.rotation.y=F*.2,J.forEach((q,ae)=>{const ye=Math.max(0,Math.min(1,me*1.6-ae*.3)),Se=ye*ye*(3-2*ye),$=O[ae];q.position.set(1.25+($[0]-1.25)*Se,3.9+($[1]+.8-3.9)*Se,-.05+($[2]+.06+.05)*Se),q.rotation.z=(1-Se)*Math.sin(F+ae)*.1,q.visible=["cloud","raining","settled"].includes(j.phase)}),N.forEach(q=>q.visible=j.phase==="cloud"||D),w.position.x=K?-1.7:-3,Y.forEach((q,ae)=>{q.visible=D;const ye=(F*.7+ae/10)%1;K?ye<.72?q.position.set(-.7,.45+ye/.72*3.25,.2):q.position.set(-.7+(ye-.72)/.28*1.9,3.7,.2):q.position.set(-2.35+Math.sin(ye*Math.PI*2)*.6,.5+ye*1.8,.87)}),j.trace&&!I){I=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}j.phase!==ne&&_()}return{enter:E,exit:V,choose:te,act:Q,update:R,text:()=>({ready:j.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:j.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[j.phase],button:()=>j.phase==="raining"?"окна падают…":j.phase==="heating"?"тепло идёт…":j.phase==="settled"?"увидеть сон снова":j.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...j,active:ce,trace:I,warmth:le,spent:me,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:m.visible,houseVisible:G.visible,windows:J.map(k=>k.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...O.map(k=>[k[0],.8,k[2]])]})}}function Fc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function W1(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function X1(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Fc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function q1(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function Y1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:g,chime:_,changed:m}){const p=a([0,0,0],e);p.name="dream-05-self-measuring-instrument",p.visible=!1;const y=r("#8ebcb2",{metalness:.35,roughness:.38}),T=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),b=r("#1c4147"),S=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,b,p),u([0,-.16,0],3.45,.08,S,p),h([0,-.1,0],3.65,.07,s.copper,p);for(let q=0;q<5;q++)h([0,-.1+q*.006,0],.7+q*.52,.009,T,p);const A=a([0,0,0],p);c([0,.12,-1.6],[3,.34,1.3],s.concrete,A),d([0,.3,-1.65],[0,3.75,-1.65],.12,y,A);const v=a([0,3.7,-1.4],p),C=u([0,0,-.12],1.05,.2,b,v);C.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const w=a([-.85,0,.02],v),U=a([.85,0,.02],v);c([.425,0,0],[.85,1.72,.1],x,w),c([-.425,0,0],[.85,1.72,.1],x,U);for(let q=0;q<12;q++){const ae=q*Math.PI/6;d([Math.sin(ae)*.78,Math.cos(ae)*.78,.09],[Math.sin(ae)*.91,Math.cos(ae)*.91,.09],.016,s.copper,v)}const X=a([0,0,.14],v);d([0,-.15,0],[0,.69,0],.025,b,X),l([0,0,0],.065,s.copper,X);const G=[a([-2.35,1.65,0],p),a([2.35,1.65,0],p)];for(const[q,ae]of G.entries())c([0,0,0],[.24,1.65,.38],y,ae),c([q===0?.38:-.38,-.76,0],[.95,.18,.38],T,ae),l([0,.84,0],.19,s.copper,ae);const z=[],N=[],O=[];for(let q=0;q<12;q++){const ae=-2.45+q*.445;N.push(new n.Vector3(ae,2.52,0));const ye=q/11,Se=ye*Math.PI*1.35;O.push(new n.Vector3(2.35*Math.cos(Se)*(1-ye*.85),.24+ye*3,2.05-ye*3.2));const $=a(N[q].toArray(),p);z.push($),c([0,0,0],[.42,.16,.57],y,$),c([0,.09,.15],[.03,.012,.2],s.copper,$)}const W=l([0,.7,0],[.45,.64,.45],T,p),J=i.clone(!0);p.add(J),J.scale.setScalar(.43);const Y=new n.Vector3(2.8,.65,2.15);J.position.copy(Y);function Z(q,ae){const ye=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Ae],H)=>H?ye.lineTo(ze,Ae):ye.moveTo(ze,Ae)),ye.closePath();const Se=new n.ExtrudeGeometry(ye,{depth:.07,bevelEnabled:!1}),$=a([0,0,0],q);return o(Se,x,null,null,$),$.scale.setScalar(ae),$}const ee=Z(v,.88);ee.position.set(0,.1,.2),ee.visible=!1;const j=Z(ee,.22);j.position.set(-.03,-.2,.12);const ce=c([-.03,-.2,.085],[.34,.44,.01],b,ee),le=Z(t,.17);le.position.set(2.8,1.14,-2.75),le.rotation.y=Math.PI/4,f("СОН / 05",[0,-.055,2.94],1.65,.3,p,{size:48}).rotation.x=-Math.PI/2,f("СЕБЯ?",[0,.36,-.88],1.05,.26,p,{size:52});const me=f("?",[-1.6,.65,1.5],.48,.65,p,{size:84,bg:"#1c4147"}),I=h([0,.12,0],.68,.035,s.light,p);g(p,[A,v,...z,...G,W,J,me,I]),g(A,[]),g(v,[w,U,X,ee]),g(w,[]),g(U,[]),g(X,[]),g(ee,[j,ce]),g(j,[]),z.forEach(q=>g(q,[])),G.forEach(q=>g(q,[]));let E=Fc(),V=!1,te=0,Q=0,R=!1;try{R=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}le.visible=R;function L(){E=Fc(),te=0,Q=0,V=!0,p.visible=!0,t.visible=!1,D(0,0)}function k(){V=!1,p.visible=!1,t.visible=!0}function F(q){E=W1(E,q),_(q==="self"?330:165),m()}function ne(){E=X1(E),_(E.phase==="climbing"?440:220),m()}function D(q,ae){if(!V)return;const ye=E.phase;E=q1(E,q);const Se=E.phase==="unfolding"?E.progress:["stairs","climbing","inside"].includes(E.phase)?1:0;te=Se*Se*(3-2*Se),Q=n.MathUtils.damp(Q,E.phase==="inside"?1:0,3,q),z.forEach((ze,Ae)=>{ze.position.lerpVectors(N[Ae],O[Ae],te),ze.rotation.y=te*(-Ae*.07)});const $=E.phase==="measuring"?Math.sin(E.progress*Math.PI):0;if(G.forEach((ze,Ae)=>{const H=Ae===0?-1:1;ze.position.set(H*(2.35-$*1.55),1.65+te*.4,-te*.85),ze.rotation.z=H*te*.65}),X.rotation.z=E.phase==="measuring"?Math.sin(E.progress*35)*.8:E.phase==="refused"?Math.sin(ae*6)*.25:-te*Math.PI*1.75,W.position.y=.7+(E.phase==="measuring"?Math.sin(E.progress*Math.PI)*1.5:Math.sin(ae*1.3)*.05),W.scale.set(.45*(1-$*.16),.64*(1+$*.3),.45*(1-$*.16)),me.visible=E.phase==="refused",me.position.y=.65+Math.sin(ae*2)*.1,w.rotation.y=Q*1.7,U.rotation.y=-Q*1.7,X.visible=Q<.2,ee.visible=E.phase==="inside",ee.rotation.z=Math.sin(ae*.7)*.04,j.rotation.z=-ae*.12,J.position.copy(Y),J.scale.setScalar(.43),J.visible=E.phase!=="inside",["climbing","inside"].includes(E.phase)){const ze=E.phase==="inside"?1:E.progress,Ae=[Y,...O.map(oe=>oe.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],H=ze*(Ae.length-1),M=Math.min(Ae.length-2,Math.floor(H));J.position.lerpVectors(Ae[M],Ae[M+1],Math.min(1,H-M)),J.scale.setScalar(.43*(1-ze*.8))}if(I.position.set((E.target==="self",0),E.target==="self"?3.7:.12,E.target==="self"?-1.4:0),I.rotation.x=E.target==="self"?0:Math.PI/2,I.visible=["ready","refused","measuring","unfolding"].includes(E.phase),E.trace&&!R){R=!0,le.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ye!==E.phase&&m()}function K(){return{ready:E.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[E.phase]}return{enter:L,exit:k,choose:F,act:ne,update:D,text:K,button:()=>E.phase==="inside"?"увидеть сон снова":E.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...E,active:V,trace:R,unfold:te,opened:Q,rootVisible:t.visible,roomVisible:p.visible,steps:z.map(q=>q.position.toArray()),jaws:G.map(q=>q.position.toArray()),drop:W.position.toArray(),head:J.position.toArray(),cursorVisible:ee.visible,cursorPosition:ee.getWorldPosition(new n.Vector3).toArray(),faceAngles:[w.rotation.y,U.rotation.y],nestedVisible:ee.visible&&j.visible,landmarks:[W.position.toArray(),[0,3.7,-1.4],Y.toArray(),O[0].toArray()]})}}const $1=["восток","юг","запад","север"],Xf=[0,2,3];function rc(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function J1(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function Z1(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==Xf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function K1(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function Q1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:g,chime:_,changed:m}){const p=a([0,0,0],e);p.name="dream-04-letter-above-roof",p.visible=!1;const y=r("#355b62"),T=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,y,p),h([0,-.26,0],3.78,.024,s.copper,p);for(let R=0;R<4;R++){const L=R*Math.PI/2,k=Math.cos(L)*3.05,F=Math.sin(L)*3.05;f(["В","Ю","З","С"][R],[k,-.23,F],.38,.28,p).rotation.x=-Math.PI/2}const b=[],S=[],A=[];for(let R=0;R<3;R++){const L=1.05+R*1.4,k=2.05-R*.27,F=a([0,L,0],p);b.push(F);for(let ae=1;ae<4;ae++){const ye=ae*Math.PI/2,Se=Math.cos(ye),$=Math.sin(ye),ze=[[.3,.3,-.3],[.3,.3,.3],[k,.04,k],[k,.04,-k]],Ae=new n.BufferGeometry,H=[];for(const oe of[0,1,2,0,2,3]){const[ue,fe,Ee]=ze[oe];H.push(ue*Se-Ee*$,fe,ue*$+Ee*Se)}Ae.setAttribute("position",new n.Float32BufferAttribute(H,3)),Ae.computeVertexNormals();const M=T.clone();M.side=n.DoubleSide,o(Ae,M,null,null,F),d([k*Se-k*$,.04,k*$+k*Se],[k*Se+k*$,.04,k*$-k*Se],.035,s.copper,F);for(const oe of[-1,1])d([k*Se-k*$*oe,.04,k*$+k*Se*oe],[(k+.16)*Se-(k+.16)*$*oe,.2,(k+.16)*$+(k+.16)*Se*oe],.035,s.copper,F)}const ne=a([k*.67,.045,0],F);d([-.32,0,0],[.3,0,0],.026,s.mint,ne),d([.3,0,0],[.1,0,.13],.026,s.mint,ne),d([.3,0,0],[.1,0,-.13],.026,s.mint,ne),S.push(ne);const D=Xf[R]*Math.PI/2,K=Math.cos(D)*k*.63,ie=Math.sin(D)*k*.63,q=h([K,L+.09,ie],.16,.025,s.light,p);A.push(q),f(`${R+1}`,[k+.26,L+.14,.2],.36,.29,p,{bg:"#355b62",fg:"#f0e4b8"});for(const ae of[-1,1])d([ae*.3,L-.32,-.3],[ae*.3,L-.03,-.3],.018,s.copper,p)}const v=a([-2.6,.16,1.5],p);c([0,0,0],[1.1,.62,.7],s.cream,v),c([0,.16,.361],[.72,.07,.025],y,v),f("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,p,{size:40});const C=i.clone(!0);p.add(C),C.scale.setScalar(.53),C.position.set(-2.6,1,1.5),C.rotation.z=-.12,f("СОН / 04",[0,-.12,3.34],1.8,.32,p,{size:48}).rotation.x=-Math.PI/2;const w=a([-1.1,.12,1.5],p);c([0,0,0],[.52,.025,.36],x,w);const U=a([-.26,.016,0],w),X=a([.26,.016,0],w);c([.13,0,0],[.26,.022,.36],x,U),c([-.13,0,0],[.26,.022,.36],x,X),d([-.25,.04,-.17],[0,.04,.1],.009,s.copper,w),d([.25,.04,-.17],[0,.04,.1],.009,s.copper,w);const G=l([0,.045,0],.055,s.light,w),z=a([0,5.3,0],p);h([0,0,0],.55,.025,s.copper,z),d([0,-.3,0],[0,.22,0],.018,s.copper,z);const N=Array.from({length:6},(R,L)=>{const k=L*Math.PI/3,F=l([Math.cos(k)*.29,0,Math.sin(k)*.29],[.21,.065,.11],x,z);return F.rotation.y=-k,F});z.visible=!1;const O=[new n.Vector3(-1.1,.12,1.5),...A.map(R=>R.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],W=new n.BufferGeometry().setFromPoints(O),J=new n.Line(W,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));J.computeLineDistances(),p.add(J);let Y=rc(),Z=!1,ee=0,j=!1,ce=[Math.PI/2,Math.PI/2,Math.PI/2];try{j=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const le=a([-3.75,1.17,-2.95],t);le.visible=j,c([0,0,0],[.23,.012,.16],x,le),d([-.11,.016,-.07],[0,.016,.04],.005,s.copper,le),d([.11,.016,-.07],[0,.016,.04],.005,s.copper,le),g(p,[...b,...A,v,C,w,z,J]),b.forEach((R,L)=>g(R,[S[L]])),g(w,[U,X,G]),g(U,[]),g(X,[]),g(v,[]),g(z,N),g(le,[]);function me(){Z=!0,Y=rc(),ee=0,ce=Y.turns.map(R=>R*Math.PI/2),p.visible=!0,t.visible=!1,te(0,0)}function I(){Z=!1,p.visible=!1,t.visible=!0}function E(R){Y=J1(Y,R),_(165+R*55+Y.turns[R]*22),m()}function V(){Y.phase==="delivered"?(Y=rc(),ee=0):Y=Z1(Y),_(220),m()}function te(R,L){if(!Z)return;const k=Y.phase;Y=K1(Y,R),ee=n.MathUtils.damp(ee,Y.phase==="delivered"?1:0,2.4,R),b.forEach((ie,q)=>{const ae=Y.turns[q]*Math.PI/2,ye=Math.atan2(Math.sin(ae-ce[q]),Math.cos(ae-ce[q]));ce[q]+=ye*(R===0?1:1-Math.exp(-R*7)),ie.rotation.y=-ce[q],ie.position.x=ee*[-2.15,1.85,0][q],ie.position.z=ee*[.45,-.65,-2.1][q],ie.rotation.z=ee*(q===0?-.16:.13)});const F=Math.min(4,Y.progress),ne=Math.min(3,Math.floor(F)),D=Math.min(1,F-ne),K=D*D*(3-2*D);if(w.position.lerpVectors(O[ne],O[ne+1],K),w.rotation.y=L*.16,U.rotation.z=-ee*1.1,X.rotation.z=ee*1.1,G.position.y=.045+ee*.18,z.visible=Y.phase==="delivered",z.rotation.y=L*.22,N.forEach((ie,q)=>{ie.position.y=Math.sin(L*.7+q)*.035}),J.visible=Y.phase!=="delivered",Y.trace&&!j){j=!0,le.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}k!==Y.phase&&m()}function Q(){return Y.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":Y.phase==="caught"?`Поймала крыша ${Y.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:Y.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:me,exit:I,turn:E,send:V,update:te,text:Q,directions:$1,inspect:()=>({...Y,turns:[...Y.turns],active:Z,trace:j,open:ee,roomVisible:p.visible,rootVisible:t.visible,roofs:b.map(R=>({position:R.position.toArray(),rotation:R.rotation.toArray().slice(0,3)})),letter:w.position.toArray(),goals:A.map(R=>R.position.toArray()),crown:z.visible})}}function j1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,paperBoat:g,batchStatic:_,chime:m}){const p=a([0,0,0],e);p.name="dream-03-silent-dock",p.visible=!1;const y=r("#526b79"),T=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,y,p),u([0,-.23,0],4,.055,T,p),h([0,-.18,0],4.08,.04,s.copper,p),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,p);for(let L of[-.1,.55,1.2,1.85])c([-2.85,.07,L],[1.38,.045,.025],y,p);for(let L of[-3.4,-2.3])d([L,-.3,1.9],[L,.48,1.9],.035,s.copper,p);f("СОН / 03",[-2.85,.13,2.4],1.6,.28,p,{size:48}).rotation.x=-Math.PI/2;const b=i.clone(!0);b.position.set(-2.8,1.27,.75),b.scale.setScalar(.65),p.add(b);const S=[];for(const L of[-1,1]){const k=a([L*.12,-.04,.68],b);d([0,0,0],[L*.64,-.2,.05],.06,s.black,k),l([L*.62,-.18,.05],[.19,.095,.07],s.black,k),d([L*.58,-.18,.06],[L*.58,-.7,.06],.015,s.copper,k),l([L*.58,-.76,.06],.075,s.copper,k),_(k,[]),S.push(k)}const A=Array.from({length:3},(L,k)=>h([-1.2+k*1.25,-.17,-.25],.72,.035,k===1?s.cream:s.copper,p)),v=Array.from({length:3},(L,k)=>h([-1.2+k*1.25,-.165,-.25],.72,.013,x,p)),C=o(new n.IcosahedronGeometry(.12,1),y,[-2.6,.35,1.5],null,p),w=g(p,[-1.9,-.13,-.25],.9),U=l([0,.53,0],[.065,.09,.065],s.light,w),X=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,p);X.rotation.z=.65;const G=[];for(let L=0;L<5;L++){const k=-1.6+L*.85;d([k,-.2,-2.9],[k,1.1+L%2*.4,-2.9],.025,y,p),G.push(l([k,1.12+L%2*.4,-2.9],.035,s.light,p))}let z=!1,N=0,O=1,W=[1,1,1],J=[0,0,0],Y=0,Z=0,ee=!1;try{ee=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const j=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);j.visible=ee;const ce=Array.from({length:5},()=>new n.Vector3),le=new n.CatmullRomCurve3(ce),me=new n.Vector3,I=new n.Vector3;_(p,[b,...A,...v,C,w,X,...G]),_(b,S),_(w,[U]);function E(L){O=n.MathUtils.clamp(Math.round(Number(L)||1),1,3)}function V(){z=!0,N=0,W=[1,1,1],J=[0,0,0],Y=0,Z=0,p.visible=!0,t.visible=!1,R(0,0)}function te(){z=!1,p.visible=!1,t.visible=!0}function Q(){if(z){if(N===3){N=0,W=[1,1,1],J=[0,0,0],Z=0;return}if(W[N]=O,N++,Y=0,m(110+O*55),N===3){ee=!0,j.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function R(L,k){if(!z)return;Z+=Math.min(L,.15),Y+=Math.min(L,.15);for(let K=0;K<3;K++){J[K]=n.MathUtils.damp(J[K],K<N?1:0,3,L);const ie=-.17+J[K]*(.95+W[K]*.42),q=.72+W[K]*.12;A[K].position.y=ie,A[K].rotation.set(Math.PI/2*(1-J[K]),Math.PI/2*J[K],0),A[K].scale.setScalar(q/.72),v[K].scale.setScalar(q/.72*(1+Math.sin(Z*.9+K)*.045)),ce[K+1].set(A[K].position.x,Math.max(-.1,ie),-.25)}ce[0].set(-2,-.1,-.25),ce[4].set(2.5,-.1,-.25);const F=(1-Math.cos(Z*.55))*.5;le.getPoint(F,me),le.getPoint(Math.min(.999,F+.012),I),w.position.copy(me),w.rotation.z=n.MathUtils.clamp(Math.atan2(I.y-me.y,I.x-me.x),-.45,.45),w.rotation.y=0,C.visible=N>0;const ne=Math.min(1,Y/1.8),D=Math.max(0,N-1);C.position.set(n.MathUtils.lerp(-2.5,-1.2+D*1.25,ne),.35+ne*(2.1+W[D]*.35),n.MathUtils.lerp(1.4,-.25,ne)),C.rotation.y=Z*.4,S.forEach((K,ie)=>K.rotation.z=Math.sin(Z*1.2+ie*Math.PI)*(.06+N*.04)),U.position.y=.53+Math.sin(k)*.02}return{enter:V,exit:te,toss:Q,choose:E,update:R,inspect:()=>({active:z,step:N,force:O,forces:[...W],lift:[...J],trace:ee,roomVisible:p.visible,rootVisible:t.visible,boat:w.position.toArray(),ringY:A.map(L=>L.position.y),ringRotation:A.map(L=>L.rotation.toArray().slice(0,3)),stone:C.position.toArray()})}}function md(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,u=Math.min(i,Math.max(0,360-l.age));l.age+=u,l.exposure[l.face]+=u,l[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(l.id),d=t.shelf.findIndex(h=>h.id===u);if(d<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(d,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",f={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(f),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:f,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const ey={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function ty({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:u,sign:d,batchStatic:h,changed:f,watching:g,localPlay:_}){var k,F,ne;const m=s([24,-1.55,0]);m.name="cheese-cellar";const p=i("#697b70"),y=i("#b4b89b"),T=i("#936c4d"),x=i("#e1b064"),b=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],p,m),r([0,1.6,-3.65],[10,3.2,.3],y,m),r([-4.85,1.3,0],[.3,2.6,7.3],y,m);for(let D=-4;D<=4;D+=2)r([D,1.5,-3.43],[.16,3,.1],p,m);for(let D of[-4.4,4.4])c([D,0,-3.3],[D,3.6,-3.3],.09,t.copper,m),c([D,3.6,-3.3],[D,3.6,2.5],.09,t.copper,m),c([D,3.6,2.5],[D,0,2.5],.09,t.copper,m);d("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],T,m),r([0,0,-2.7],[7.9,.14,1.05],T,m);for(let D of[-3.8,3.8])r([D,.6,-2.7],[.14,1.4,1.05],T,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,S,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,T,m);for(let D of[2.8,3.5])a([D,.28,1.8],.26,.56,t.cream,m),a([D,.59,1.8],.12,.1,t.copper,m);const A=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let D=0;D<4;D++)r([2.25+D*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],T,m);const v=s([.5,1.02,.25],m),C=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),w=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),b,[0,0,0],null,v),U=l([0,.33,0],.35,.026,t.cream,v),X=s([.5,.65,2.3],m),G=[];for(let D=0;D<6;D++)G.push(o([-1.25+D*.5,0,0],.08,t.mint,X));const z=d("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});z.rotation.x=-Math.PI/2;function N(D){const K=s(D,m),ie=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,K),q=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),b.clone(),[0,0,0],null,K),ae=s([0,-.14,.09],K);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ae);const ye=o([.09,.16,.27],.04,t.mint,ae),Se=u(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,K),$=s([0,0,0],K);for(const[ze,Ae,H]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Ae,H],[.05,.05,.025],t.dark,$);return{g:K,body:ie,crust:q,steps:ae,crystal:Se,holes:$,pearl:ye}}const O=Array.from({length:6},(D,K)=>N([-3.15+K*1.26,1.42,-2.6])),W=s([0,0,0],e);for(let D=0;D<24;D++){const K=D/23;r([8.3+K*11.2,-.15-K*1.32,1.4+Math.sin(K*Math.PI)*2],[.85,.15,.75],p,W)}for(let D=0;D<5;D++)r([20+D*.7,-1.46,1.4-D*.22],[.75,.13,.7],p,W);d("СЫР →",[10.2,.35,2.4],1.5,.4,W,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,W),h(W,[]),h(m,[v,A,X,z,...O.map(D=>D.g)]);for(const D of O)h(D.steps,[D.pearl]),h(D.holes,[]);let J=null,Y=null,Z=0,ee=null,j="",ce=0;try{const D=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");J=(D==null?void 0:D.state)||D,Z=Number(D==null?void 0:D.clockOffset)||0}catch{}const le=()=>Date.now()/1e3+Z;function me(D,K,ie={}){const q=md({state:J,mode:D,tool:K,args:ie,now:le()});J=q.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:J,clockOffset:Z}))}catch{}return q}me("migrate");const I=document.createElement("div");I.id="cellar-controls",I.hidden=!0,I.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(I);function E(){return Y&&g()?Y:md({mode:"migrate",state:J,now:J.updated}).public}function V(D){ee=D;const K=D.batch;if(v.visible=!!K,z.visible=!K,A.rotation.y=D.air==="dry"?-.8:0,K){v.rotation.z=K.face?Math.PI:0;const ie=K.age/360;C.material.color.set(K.culture==="moon"?"#e9cf8b":"#c8bc88"),w.material.color.set(D.air==="damp"?"#8b9f78":"#b87a48"),U.scale.setScalar(1+ie*.15)}for(let ie=0;ie<6;ie++)G[ie].visible=!!K&&K.age>=(ie+1)*60;O.forEach((ie,q)=>{const ae=D.shelf[q];ie.g.visible=!!ae,ae&&(ie.g.rotation.z=ae.kind==="lopsided"?.22:0,ie.crust.material.color.set(ae.wet>=180?"#8b9f78":"#b87a48"),ie.steps.visible=ae.kind==="moon_stair",ie.crystal.visible=ae.kind==="stone",ie.holes.visible=ae.kind==="holes"||ae.kind==="lopsided")})}function te(D,K){_();const ie=me("action",D,K);return j="",L(0),f(),ie}for(const D of I.querySelectorAll("[data-culture]"))D.onclick=()=>te("set_batch",{culture:D.dataset.culture});I.querySelector("#cellar-turn").onclick=()=>te("tend",{air:J.air,turn:!0}),I.querySelector("#cellar-air").onclick=()=>te("tend",{air:J.air==="damp"?"dry":"damp",turn:!1}),I.querySelector("#cellar-wait").onclick=()=>{_(),Z+=60,me("tick"),j="",L(0),f()};function Q(){const D=ee||E(),K=D.batch,ie=Y&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",q=K?K.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(K.age)}/360 с. Корка: ${Math.floor(K.exposure[0])}/${Math.floor(K.exposure[1])} с.`:D.shelf.length?`На полке: ${D.shelf.map(ae=>ey[ae.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:Y&&g()?"войти в свою сыроварню":K?K.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(Y&&g())&&!!K&&!K.ready,description:ie+" "+q}}function R(){const D=ee||E(),K=D.batch;I.querySelector("#cellar-readout").textContent=`${D.air==="damp"?"сыро":"сухо"} · ${K?K.ready?"готово":`ещё ${Math.ceil(K.remaining)} с`:"нет колеса"} · полка ${D.shelf.length}/6`;for(const ie of I.querySelectorAll("[data-culture]"))ie.disabled=!!K;I.querySelector("#cellar-turn").disabled=!K||K.ready,I.querySelector("#cellar-air").textContent=D.air==="damp"?"сделать суше":"вернуть сырость"}function L(D){D-ce>=1&&(ce=D,me("tick"));const K=E(),ie=JSON.stringify(K);ie!==j&&(j=ie,V(K),R(),f())}return window.addEventListener("beznogim:state",({detail:D})=>{var ie,q;const K=(q=(ie=D.mechanics)==null?void 0:ie.cellar)==null?void 0:q.public;K&&(Y=K,j="")}),Y=((ne=(F=(k=window.__beznogimState)==null?void 0:k.mechanics)==null?void 0:F.cellar)==null?void 0:ne.public)||null,V(E()),R(),{house:m,controls:I,update:L,card:Q,run:()=>te(J.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:Y&&g()?"resident":"sandbox",...ee,wheelVisible:v.visible,shelfVisible:O.filter(D=>D.g.visible).length,stairsVisible:O.filter(D=>D.g.visible&&D.steps.visible).length,shutter:A.rotation.y})}}function ny({entries:n,elements:e,layer:t,camera:i}){const s=new xt,r=new xt,o=new B,a=Object.entries(n).map(([d,h])=>({element:e[d],anchor:h.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,u=!1;return{update(d,h,f){if(t.hidden===d&&(t.hidden=!d),!d){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||c!==h||l!==f||!s.equals(r);c=h,l=f,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!g)continue;o.copy(_.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,p=(1-o.y)*f*.5,y=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&p>=10&&p<=f-55;if(y!==_.visible&&(_.visible=y,_.element.classList.toggle("hidden",!y)),!y)continue;const T=Math.round(m*10)/10,x=Math.round(p*10)/10;(T!==_.x||x!==_.y)&&(_.x=T,_.y=x,_.element.style.transform=`translate3d(${T}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function iy(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,d=Math.max(12,u?0:a.bottom+12,u?l.bottom+12:0),h=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(d)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const be=n=>document.querySelector(n),en=()=>innerWidth<700,qf=matchMedia("(prefers-reduced-motion: reduce)").matches;let Cr={};try{Cr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!Cr.running,harvest:Math.min(99,Math.max(0,Number(Cr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Cr.dockTrips)||0))),dockPending:Cr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function or(){return we.roof===null?we.running||we.loop>0:!!we.roof}function zc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const rt=new Gf({antialias:!0,alpha:!1,powerPreference:"high-performance"});rt.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2));rt.setSize(innerWidth,innerHeight,!1);rt.shadowMap.enabled=!0;rt.shadowMap.type=$s;rt.shadowMap.autoUpdate=!1;rt.shadowMap.needsUpdate=!0;rt.outputColorSpace=cn;rt.toneMapping=Ya;rt.toneMappingExposure=1.22;be("#world").append(rt.domElement);const jt=new df;jt.background=new ut("#182e32");jt.fog=new rl("#182e32",8e-4);const Oe=new no(-10,10,10,-10,.1,600),Tu=new B(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(Tu);const Ke=new s1(Oe,rt.domElement);Ke.target.copy(Tu);Ke.enableDamping=!0;Ke.enableRotate=!1;Ke.enablePan=!0;Ke.minZoom=.075;Ke.maxZoom=2.5;Ke.screenSpacePanning=!1;Ke.mouseButtons.LEFT=Ti.PAN;Ke.mouseButtons.RIGHT=Ti.PAN;Ke.touches.ONE=Ei.PAN;Ke.touches.TWO=Ei.DOLLY_PAN;jt.add(new Cf("#d9eedc","#334d53",2.3));const ws=new Su("#ffe2ac",3.3);ws.position.set(-7,14,6);ws.castShadow=!0;ws.shadow.mapSize.set(en()?512:1024,en()?512:1024);Object.assign(ws.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});ws.shadow.bias=-4e-4;ws.shadow.normalBias=.025;jt.add(ws);const Yf=new Su("#8ad5d8",1.3);Yf.position.set(5,7,-8);jt.add(Yf);const pt=new Yi;jt.add(pt);const oc={};function je(n,e={}){const t=n+JSON.stringify(e);return oc[t]||(oc[t]=new Xs({color:n,roughness:.8,...e}))}const li={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},ge={concrete:je(li.concrete),cream:je(li.cream),dark:je(li.dark),metal:je(li.metal,{metalness:.5,roughness:.4}),copper:je(li.copper,{metalness:.6,roughness:.35}),rust:je(li.rust),black:je(li.black),leaf:je(li.leaf),light:je("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:je("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},ur={box:new Oi(1,1,1),sphere:new ul(1,12,8),ico:new to(1,1),cyl:new jr(1,1,1,16),cone:new bs(1,1,8)};function kt(n,e,t,i,s=pt){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Ge=(n,e,t,i=pt)=>kt(ur.box,t,n,e,i),it=(n,e,t,i=pt)=>kt(ur.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),gt=(n,e,t,i,s=pt)=>kt(ur.cyl,i,n,[e,t,e],s);function io(n,e,t,i=pt,s=.08){return kt(new wu(...e,1,s),t,n,null,i)}function ht(n=[0,0,0],e=pt){const t=new Yi;return t.position.set(...n),e.add(t),t}function Ts(n,e,t,i=pt){const s=new pu(n.map(r=>new B(...r)));return kt(new dl(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function _t(n,e,t,i,s=pt){const r=new B(...n),o=new B(...e),a=o.clone().sub(r),c=gt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new B(0,1,0),a.normalize()),c}function Mt(n,e,t,i,s=pt,r=[Math.PI/2,0,0]){const o=kt(new hl(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Ut(n,e,t,i,s=pt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new hu(o);c.colorSpace=cn;const l=kt(new Es(t,i),new Qr({map:c,side:In}),e,null,s);return l.castShadow=!1,l}let ac=179;function At(){return ac=ac*1664525+1013904223>>>0,ac/4294967296}const Va=document.createElement("canvas");Va.width=Va.height=256;const Ha=Va.getContext("2d");Ha.fillStyle="#b4bcaa";Ha.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Ha.fillStyle=`rgba(${At()>.5?"60,82,64":"235,229,201"},${At()*.08})`,Ha.fillRect(At()*256,At()*256,1+At()*3,1+At()*3);const $r=new hu(Va);$r.wrapS=$r.wrapT=kr;$r.repeat.set(5,5);$r.colorSpace=cn;const sy=je("#c2c6b1",{map:$r,roughness:.97});function Au(n,e,t,i,s=pt){const r=new eo;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new lr(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),kt(o,i,null,null,s)}const Cu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Au(Cu,0,.82,ge.concrete);Au(Cu,.06,.14,sy);Au(Cu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,je("#47665e"));for(let n=0;n<28;n++){const e=-5.4+At()*10.9,t=At()>.5?5.15:-5.2,i=kt(ur.ico,je(n%3?"#557469":"#668477"),[e,-1.15-At()*.5,t],[.25+At()*.8,.2+At()*.55,.35+At()*.3]);i.rotation.y=At()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Ge([e,-.37,5.61],[.48,.19,.025],n%2?ge.copper:ge.dark),n%2===0&&Ts([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,ge.metal)}Ut("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,pt,{size:32});const Nt=ht([-3.2,.08,-2.5]),pn=ht([0,0,0],Nt);Ge([0,.08,0],[4.5,.15,3.6],ge.dark,Nt);Ge([0,1.2,-1.68],[4.5,2.4,.18],ge.cream,Nt);Ge([-2.15,1,0],[.18,2,3.6],ge.cream,Nt);for(let n=0;n<5;n++){Ge([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],ge.concrete,Nt),Ge([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],ge.metal,Nt);for(let e=0;e<3;e++)Ge([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],ge.copper,Nt)}Ge([0,2.47,-.2],[4.8,.14,3.7],ge.rust,pn);for(let n=0;n<23;n++){const e=Ge([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],je("#d09062"),pn);e.rotation.x=-.015}Ge([0,2.35,1.62],[4.8,.14,.18],ge.dark,Nt);_t([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,ge.copper,Nt);_t([2.3,.12,1.62],[2.3,2.4,1.62],.055,ge.copper,Nt);Ut("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Nt,{size:37});Ge([.1,.85,-.84],[3.8,.13,.87],ge.rust,Nt);for(const n of[-1.5,1.65])Ge([n,.44,-.84],[.12,.85,.65],ge.metal,Nt);for(let n=0;n<3;n++)Ge([-1.15+n*.95,.51,-.85],[.82,.47,.75],ge.concrete,Nt),Ge([-1.15+n*.95,.5,-.44],[.18,.04,.03],ge.copper,Nt);for(let n=0;n<6;n++)Ge([-1.6+n*.48,2.07,-1.48],[.28,.16+At()*.16,.17],je(["#9fba95","#cb9b70","#667f71"][n%3]),Nt);gt([0,.5,.7],.32,.12,ge.rust,Nt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;_t([e,.06,t],[e,.5,t],.04,ge.metal,Nt)}for(let n=0;n<4;n++)Mt([-1.5,.06,1],.3-n*.045,.025,ge.black,Nt);gt([-1.5,3,-.9],.16,.9,ge.metal,pn);gt([-1.5,3.47,-.9],.24,.08,ge.rust,pn);Ge([1.4,2.9,-.4],[.8,.5,.6],ge.concrete,pn);for(let n=0;n<5;n++)Ge([1.1+n*.15,2.94,-.085],[.035,.32,.03],ge.dark,pn);const Ru=new pl("#ffca86",5,5,2);Ru.position.set(-3,1.7,-1.1);pt.add(Ru);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=io([n,.1,e],[.74,.05,.74],je(At()>.3?"#b3baa6":"#a5b5a4"),pt,.018);t.rotation.y=(At()-.5)*.035}for(let n=0;n<95;n++){let e=-6+At()*12,t=-5.1+At()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=kt(ur.cone,ge.leaf,[e,.1,t],[.022,.12+At()*.12,.022]);i.rotation.z=(At()-.5)*.7}const kc=new Bn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:In});Ge([3.7,.12,3.6],[4.9,.24,2.7],ge.dark);kt(new Es(4.5,2.4),kc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Ge([3.7,.29,n],[5,.38,.16],ge.cream);for(const n of[1.18,6.2])Ge([n,.29,3.6],[.16,.38,2.85],ge.cream);for(let n=0;n<13;n++)Ge([1.85,.5,2.15+n*.235],[1.08,.09,.22],je(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])gt([e,.88,n],.045,.8,ge.copper);for(const n of[1.31,2.4])Ts([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,ge.cream);const Pu=[];for(let n=0;n<6;n++){let e=Ge([4+n*.095,-1.25,5.56],[.055,2.4,.03],je("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Pu.push(e)}for(let n=0;n<4;n++)Ge([3.96+n*.17,.31,5.31],[.055,.08,.6],ge.dark);const Yt=ht([3.7,.1,-2.6]);io([0,.14,0],[3.7,.27,3.5],ge.cream,Yt,.09);for(const n of[-1.55,1.55])Ge([n,1.76,0],[.17,3.25,.2],ge.metal,Yt),Ge([n,.38,0],[.45,.2,.6],ge.copper,Yt),_t([n,.36,-1.2],[n,2.9,0],.045,ge.copper,Yt),_t([n,.36,1.2],[n,2.9,0],.045,ge.copper,Yt);Ge([0,3.38,0],[3.5,.18,.26],ge.copper,Yt);const ry=Mt([0,2.7,-.5],1.83,.035,ge.copper,Yt,[0,0,0]);ry.scale.y=.85;const so=[];for(let n=0;n<5;n++){const e=ht([-1.18+n*.59,3.24,0],Yt),t=1.8+n*.12;_t([0,0,-.08],[0,-t,0],.015,ge.dark,e),_t([0,0,.08],[0,-t,0],.015,ge.dark,e),it([0,-t,0],.205,ge.copper,e),Mt([0,-t,0],.211,.012,ge.light,e,[0,0,0]),so.push({group:e,len:t,phase:n})}Ge([0,.6,1.3],[1.45,.8,.4],ge.metal,Yt);Ut("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Yt,{size:40});const oy=gt([-.43,.97,1.3],.19,.07,ge.cream,Yt);oy.rotation.x=Math.PI/2;const Lu=Ge([-.43,.99,1.342],[.015,.22,.008],ge.rust,Yt);Lu.rotation.z=-.7;const $f=it([.53,.93,1.52],.09,ge.light,Yt),_l=ht([.15,.4,1.59],Yt);Mt([0,0,0],.19,.023,ge.rust,_l,[0,0,0]);for(let n=0;n<3;n++)_t([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,ge.rust,_l);Ts([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,ge.copper);const Jf=[];function Iu(n,e,t=1.5){gt([n,t/2,e],.038,t,ge.metal),Ge([n,t,e],[.27,.11,.27],ge.dark),Ge([n,t-.18,e],[.17,.25,.17],ge.light),Ge([n,t-.34,e],[.25,.08,.25],ge.copper);const i=new pl("#ffbe70",1.8,3);i.position.set(n,t-.16,e),Jf.push(i)}Iu(-5.9,3.9,1.3);Iu(.3,-4.8,1.7);Iu(5.8,1.25,1.35);const un=ht([-3.6,.08,3.55]),Bc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;io([0,.14,e],[3.6,.3,1.14],ge.rust,un,.06),Ge([0,.305,e],[3.36,.04,.92],je(li.soil),un);for(let t=0;t<4;t++){const i=ht([-1.26+t*.84,.33,e],un);gt([0,.14,0],.026,.28,ge.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=it([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],je(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){it([0,.17,0],[.25,.18,.25],je("#b6c58a"),i);for(let s=0;s<6;s++){const r=it([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],ge.leaf,i);r.rotation.y=s}Bc.push(i)}else{const s=it([.05,.22,0],[.1,.21,.12],je(li.purple,{roughness:.35}),i);s.rotation.z=-.25,it([.05,.41,0],[.075,.025,.07],ge.leaf,i),Bc.push(i)}}}const Zf=ht([-1.72,.1,.8],un);for(let n=0;n<2;n++)Ge([n*3.45,.6,0],[.04,1.3,.04],ge.copper,Zf);_t([0,1.25,0],[3.45,1.25,0],.022,ge.copper,Zf);Ut("КОБАЧКИ",[-.45,.68,1.64],1,.26,un,{bg:"#c2c7a3",fg:"#445e45",size:42});gt([1.9,.23,.7],.18,.34,je("#6b9389"),un);_t([2.04,.25,.7],[2.4,.46,.7],.045,je("#6b9389"),un);Mt([1.8,.48,.7],.16,.02,ge.copper,un,[0,0,0]);Ge([-1.6,.2,1.47],[.65,.4,.45],ge.rust,un);for(let n=0;n<3;n++)Ge([-1.6,.12+n*.11,1.71],[.7,.05,.025],ge.copper,un);const Mn=ht([-3.8,.08,.35]);gt([0,.73,0],.58,.1,ge.rust,Mn);gt([0,.35,0],.045,.7,ge.metal,Mn);for(let n=0;n<3;n++)_t([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,ge.metal,Mn);const ro=ht([.1,.81,0],Mn);it([0,.2,0],[.23,.22,.23],ge.cream,ro);gt([0,.37,0],.14,.06,ge.copper,ro);it([0,.42,0],.045,ge.dark,ro);_t([.15,.18,0],[.33,.32,0],.07,ge.cream,ro);Mt([-.15,.25,0],.18,.035,ge.dark,ro,[0,0,0]);for(const n of[-.35,.38])gt([n,.84,.24],.082,.15,ge.cream,Mn),Mt([n,.92,.24],.084,.012,ge.copper,Mn),gt([n,.921,.24],.063,.006,je("#67513b"),Mn),Mt([n+.09,.86,.24],.045,.011,ge.cream,Mn,[0,0,0]);const vl=[];for(let n=0;n<9;n++){const e=it([0,0,0],.07,je("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,vl.push(e)}const jn=ht([-5.65,.09,1.1]);Ge([0,.3,0],[.7,.6,.7],ge.concrete,jn);io([0,.8,0],[.68,.45,.35],ge.dark,jn,.05);for(let n=0;n<6;n++)Ge([-.2+n*.05,.8,.18],[.022,.27,.018],ge.copper,jn);Ge([.18,.85,.184],[.16,.075,.02],ge.light,jn);it([.18,.72,.19],.05,ge.cream,jn);_t([.18,1,0],[.48,1.6,0],.012,ge.copper,jn);const Kf=ht([-.5,.1,-4.6]);gt([0,1.75,0],.055,3.5,ge.metal,Kf);it([0,3.55,0],.09,ge.copper,Kf);Ts([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,ge.dark);for(let n=0;n<8;n++){let e=n/8;const t=kt(new bs(.13,.3,3),je(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const xl=ht([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Ge([0,0,0],[.55,.09,.025],ge.rust,xl);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}it([0,0,.05],.08,ge.copper,xl);const rn=ht([7.25,-.03,1.5]);Ge([0,-.12,0],[2.25,.3,2.5],ge.metal,rn);for(let n=0;n<10;n++)Ge([-.99+n*.22,.08,0],[.2,.08,2.6],ge.rust,rn);Ge([-.95,.2,-.95],[.35,.15,.35],ge.dark,rn);gt([.87,.34,.75],.075,.5,ge.copper,rn);gt([.87,.59,.75],.13,.05,ge.cream,rn);_t([.87,.1,-.7],[.87,2.3,-.7],.035,ge.copper,rn);Ts([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,ge.copper,rn);Ge([.17,2.09,-.7],[.25,.4,.25],je("#ffd591"),rn);Ge([.17,2.32,-.7],[.34,.08,.34],ge.dark,rn);for(let n=0;n<4;n++)Mt([.87,.15,.75],.24-n*.025,.024,je("#b8ad86"),rn);Ge([6.7,.07,1.5],[1.4,.13,.8],ge.rust);Ut("НИКУДА",[.05,.28,1.36],1.3,.29,rn,{bg:"#c2c7a3",fg:"#445e45",size:45});const Du=[];function yl(n,e,t=1){const i=ht(e,n),s=new eo;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),kt(new lr(s,{depth:.19,bevelEnabled:!1}),je("#dfc99a"),[0,.15,-.1],null,i);const r=kt(new bs(.23,.36,3),ge.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=yl(pt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);Du.push(e)}const ei=v1({THREE:Zt,root:pt,dock:rn,state:we,M:ge,mat:je,group:ht,mesh:kt,box:Ge,sphere:it,cyl:gt,torus:Mt,rod:_t,sign:Ut,paperBoat:yl,batchStatic:wt,persist:zc,say:Pn,refresh:Ft,chime:Vn,reduced:qf}),Qe=ht([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const Nu=je("#233a39",{metalness:.42,roughness:.32});it([0,.1,0],[.62,.8,.55],Nu,Qe);it([0,-.36,.1],[.44,.43,.43],Nu,Qe);it([-.61,.03,.03],[.1,.2,.12],ge.copper,Qe);it([.61,.03,.03],[.1,.2,.12],ge.copper,Qe);for(const n of[-.23,.23]){it([n,.2,.485],[.17,.13,.057],ge.black,Qe),Mt([n,.2,.541],.078,.02,ge.copper,Qe,[0,0,0]),it([n,.2,.56],.041,ge.light,Qe);const e=Ge([n,.38,.48],[.24,.045,.06],ge.cream,Qe);e.rotation.z=n>0?-.13:.13}it([0,.04,.51],[.09,.17,.11],Nu,Qe);it([0,-.2,.44],[.31,.16,.11],ge.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=io([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],ge.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=it([t,i,-.04],[.18,.18,.48],ge.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Ts([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,je("#f2edda"),Qe)}for(let n=0;n<3;n++)it([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],ge.cream,Qe);const Uu=Mt([0,1.05,0],.77,.019,ge.copper,Qe);Uu.rotation.z=.14;const ay=new pl("#ffbb62",.9,3);ay.position.set(0,.2,.9);const Jo=Mt([-.15,.26,.85],.7,.018,ge.copper),Jr=kt(new al(.64,32),new Qr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Jr.rotation.x=-Math.PI/2;Jr.castShadow=!1;const wi=new B(-.15,1.9,.85),kn=ht([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Ge([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?ge.cream:ge.concrete,kn);t.rotation.x=Math.PI/2-e,n%3===0&&_t([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,ge.copper,kn)}for(const n of[-.45,.45])Mt([n,0,0],2.07,.025,ge.copper,kn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Mt([n,0,0],1.7,.075,ge.concrete,kn,[0,Math.PI/2,0]);_t([0,-2.15,-1.2],[0,-1.58,-.8],.07,ge.metal,kn);_t([0,-2.15,1.2],[0,-1.58,.8],.07,ge.metal,kn);Ut("ОБРАТНО",[.49,-.55,.2],1.15,.3,kn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+At()*20,t=-8+At()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||kt(ur.ico,je("#47675f"),[e,-1.3-At()*2,t],[.22+At()*.55,.19+At()*.4,.27+At()*.4])}const Qf=new Vt,jf=[];for(let n=0;n<75;n++)jf.push((At()-.5)*25,At()*9-2,(At()-.5)*22);Qf.setAttribute("position",new yt(jf,3));const ep=new ff(Qf,new cu({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));jt.add(ep);function wt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new xt().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=_1(o,!1);a&&kt(a,r,null,null,n),o.forEach(c=>c.dispose())}}wt(pt,[Qe,un,Yt,Mn,jn,rn,Nt,kn,xl,...Du,...vl,...Pu,Jo,Jr,ei.travel]);wt(Nt,[pn]);wt(pn,[]);wt(kn,[]);wt(Qe,[Uu]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});wt(Mn,[...vl]);wt(jn,[]);wt(rn,[ei.gallery,ei.beacon]);wt(Yt,[...so.map(n=>n.group),_l,Lu,$f]);so.forEach(n=>wt(n.group,[]));const Zr=ht([0,.33,0],un);Bc.forEach(n=>{Zr.add(n),n.position.y-=.33});wt(Zr,[]);wt(un,[Zr]);const Sn=w1({THREE:Zt,root:pt,scene:jt,head:Qe,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,paperBoat:yl,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},chime:Vn}),Ci=ty({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,mesh:kt,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),$i=Vp({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ri=Bp({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Pi=Pp({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},localPlay:()=>at.localPlay()}),Li=Np({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},localPlay:()=>at.localPlay()}),pi=Op({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ii=zp({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),mi=kp({THREE:Zt,root:pt,M:ge,mat:je,group:ht,box:Ge,sphere:it,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ji=Gp({THREE:Zt,workshop:Nt,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,changed:()=>{Ft(),rt.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ml=T1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,chime:Vn}),oo=j1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,paperBoat:yl,batchStatic:wt,chime:Vn}),Nn=Q1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,chime:Vn,changed:()=>{rs(),rt.shadowMap.needsUpdate=!0}}),tp=A1({head:Qe,group:ht,sphere:it,box:Ge,torus:Mt,M:ge,mat:je}),hi=Y1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,chime:Vn,changed:()=>{rs(),rt.shadowMap.needsUpdate=!0}}),Ln=I1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,tube:Ts,torus:Mt,sign:Ut,batchStatic:wt,chime:Vn,changed:()=>{rs(),rt.shadowMap.needsUpdate=!0}}),Zn=O1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,chime:Vn,changed:()=>{rs(),rt.shadowMap.needsUpdate=!0}}),Zi=k1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,sign:Ut,batchStatic:wt,chime:Vn,changed:()=>{rs(),rt.shadowMap.needsUpdate=!0}}),di=H1({THREE:Zt,scene:jt,root:pt,head:Qe,M:ge,mat:je,group:ht,box:Ge,sphere:it,cyl:gt,rod:_t,torus:Mt,sign:Ut,batchStatic:wt,chime:Vn,changed:()=>{rs(),rt.shadowMap.needsUpdate=!0}});let nn=null,Ze=1;const Gn={still:{n:"18",label:"облачная перегонная",title:"16 часов на облако",description:"Четыре карты переливают одно облако.",action:"перелить облако",point:new B(28.4,.7,-19.8),position:new B(24,.5,-24),run:()=>Pi.run()},fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new B(-26.4,.7,-34.3),position:new B(-23,.1,-32),run:()=>Li.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new B(-32,.6,-20.6),position:new B(-24,.6,-24),run:()=>pi.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new B(24,.9,29.7),position:new B(24,.6,24),run:()=>Ii.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new B(-6.9,1.9,-20.1),position:new B(0,.6,-24),run:()=>mi.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new B(-17.5,1.3,3.4),position:new B(-24,.6,0),run:()=>Ri.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new B(-1.4,1.5,-1.1),position:new B(-3.2,1.25,-2.2),run:()=>Ji.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new B(4.7,.8,25.8),position:new B(0,.4,24),run:()=>$i.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new B(28.4,2.2,2.5),position:new B(24,.4,0),run:()=>Ci.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new B(-.1,2.15,4.3),position:new B(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new B(-6,4.55,-3.25),position:new B(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,ip.copy(Qe.position),Pn("ноги не понадобились"),Ft())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new B(-3.2,3.15,-2.5),position:new B(-3.2,1.1,-2.5),run:()=>{we.roof=or()?0:1,Pn(or()?"заходи":"прикрыл"),Ft()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new B(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Pn(n[ly++%n.length]),wi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new B(3.7,3.85,-2.6),position:new B(3.7,1,-2.6),run:()=>{we.running=!we.running,zc(),Pn(we.running?"ну пошло":"можно и полежать"),Ft()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new B(-3.7,1.65,.35),position:new B(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,wi.set(-2.65,1.7,.65),Pn("щас, чайник поставлю"),Ft())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new B(-3.4,1,3.8),position:new B(-3.6,1,3.55),run:()=>{we.harvest++,Ks=.15,zc(),wi.set(-1.6,1.6,2.3),Pn(we.harvest===1?"о, урожай":"кабачки опять победили"),Ft()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new B(-5.65,1.75,1.1),position:new B(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,Ou(),Pn(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Ft()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new B(7.4,2.75,1.1),position:new B(7.25,.9,1.5),run:()=>{ei.launchOrCollect(),we.dockPending===!1&&we.boat===0&&wi.set(5.85,1.7,1.05)}}};let ly=0,Ks=1,np=0,xs=0;const ip=new B;let sp=()=>{ts("engine"),Gn.engine.run()};const Sl={};for(const[n,e]of Object.entries(Gn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>ts(n),be("#hotspots").append(t),Sl[n]=t}const rp=be("#hotspots"),lc=be("#speech"),ms={width:innerWidth,height:innerHeight},cy=ny({entries:Gn,elements:Sl,layer:rp,camera:Oe});let cc=!1,gd=NaN,_d=NaN;const Sr=new B;function ts(n){we.selected=n,be("#inspector").classList.remove("collapsed");const e=Gn[n];be("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,be("#object-title").textContent=e.title,be("#object-description").textContent=e.description,sp=e.run,be("#focus-object").hidden=!1,be("#focus-object").textContent=Xt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ft();for(const[t,i]of Object.entries(Sl))i.classList.toggle("selected",t===n)}function Ft(){const n=we.selected,e=Gn[n];if(be("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=or()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=ei.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Ci.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=$i.card();t=r.action,i=r.description}if(n==="bench"){const r=Ji.card();t=r.action,i=r.description}if(n==="drydock"){const r=Ri.card();t=r.action,i=r.description}if(n==="dash"){const r=mi.card();t=r.action,i=r.description}if(n==="quotes"){const r=Ii.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=pi.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Li.card();t=r.action,i=r.description,s=r.disabled}if(n==="still"){const r=Pi.card();t=r.action,i=r.description,s=r.disabled}Pi.controls.hidden=n!=="still",Li.controls.hidden=n!=="fork",pi.controls.hidden=n!=="garage",Ii.controls.hidden=n!=="quotes",mi.controls.hidden=n!=="dash",Ri.controls.hidden=n!=="drydock",Ji.controls.hidden=n!=="bench",$i.controls.hidden=n!=="amnesty",Ci.controls.hidden=n!=="cellar",be("#enter-bench")&&(be("#enter-bench").hidden=n!=="workshop"),be("#enter-dream08").hidden=n!=="radio",be("#enter-dream07").hidden=n!=="garage",be("#enter-dream06").hidden=n!=="radio",be("#enter-dream05").hidden=n!=="stair",be("#enter-dream09").hidden=n!=="dock",be("#enter-dream03").hidden=n!=="dock",be("#enter-dream04").hidden=n!=="workshop",be("#greenhouse-controls").hidden=n!=="greenhouse",be("#thermal-moves").hidden=Sn.inspect().mode!=="playing",be("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,be("#object-description").textContent=i,be("#object-action").innerHTML=t+" <span>↗</span>",be("#object-action").disabled=s}be("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&at.watching()){at.localPlay();return}at.localPlay(),sp(),xs=performance.now()+2200};be("#close-card").onclick=()=>be("#inspector").classList.add("collapsed");function Pn(n){be("#speech").textContent=n,np=performance.now()+4e3,be("#speech").classList.add("visible")}be("#markers").onclick=()=>{we.markers=!we.markers,be("#markers").setAttribute("aria-pressed",we.markers),rp.hidden=!we.markers||!!nn||Oe.zoom<.4};let Xt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function op(){ms.width=innerWidth,ms.height=innerHeight;const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(en()?2.8:0),Oe.bottom=-e-(en()?2.8:0),Oe.updateProjectionMatrix(),rt.setSize(innerWidth,innerHeight,!1),rt.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2))}function hr(){if(at==null||at.unfollow(),nn){ao();return}Xt=null,document.body.classList.remove("close-look"),be("#focus-object").textContent="осмотреть ближе ⊕",Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.maxZoom=2.5,Oe.zoom=1,Ke.target.copy(Tu),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}be("#focus-object").onclick=()=>{if(we.selected){if(Xt===we.selected){hr();return}Xt=we.selected,document.body.classList.add("close-look"),be("#focus-object").textContent="весь двор ⌂",Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.target.copy(Gn[we.selected].position),en()&&(Ke.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork","still"].includes(Xt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork","still"].includes(Xt)?en()?1.8:1.6:en()?2.5:2.1,Xt==="bench"?(Ke.maxZoom=4.5,Oe.zoom=en()?3.8:3.4,Ke.target.y+=en()?-.15:0,Ke.target.x+=.3,Ke.target.z-=.2):Ke.maxZoom=2.5,Oe.updateProjectionMatrix()}};be("#home").onclick=hr;be("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Ke.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};be("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Ke.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};be("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",op);op();function ap(n,e,t=!1){nn&&ao(),hr(),Ke.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),be("#inspector").classList.add("collapsed")}function uy(){ap(0,0);const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.zoom=Math.min(e*n/(Qs.half*1.57),e/(Qs.half*1.3)),Oe.updateProjectionMatrix()}const Qs=E1({root:pt,camera:Oe,controls:Ke,mobile:en,go:ap,overview:uy,home:hr,locationTarget:()=>["dash","quotes","garage","fork","still"].includes(Xt)&&we.selected===Xt?Gn[Xt].position:null}),Ki=document.createElement("select");Ki.id="world-places";Ki.setAttribute("aria-label","Открыть место");Ki.append(new Option("места",""));for(const[n,e]of Object.entries(Gn))Ki.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Ki,document.querySelector("#territory-location"));Ki.onchange=()=>{const n=Ki.value;Gn[n]&&(hr(),Ke.target.copy(Gn[n].position),ts(n),Ki.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const vd=new Lf,xd=new Te;let ds=null;rt.domElement.addEventListener("pointerdown",n=>{ds={x:n.clientX,y:n.clientY,time:performance.now()}});rt.domElement.addEventListener("pointerup",n=>{if(!ds||Math.hypot(n.clientX-ds.x,n.clientY-ds.y)>7||performance.now()-ds.time>550){ds=null;return}if(ds=null,xd.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),vd.setFromCamera(xd,Oe),nn)return;const e=vd.intersectObjects([Pi.house,Li.house,pi.house,Ii.house,mi.house,Ri.house,Ji.house,$i.house,Ci.house,Sn.house,Qe,Yt,un,Mn,jn,rn,Nt,kn,ei.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Pi.house,Li.house,pi.house,Ii.house,mi.house,Ri.house,Ji.house,$i.house,Ci.house,Sn.house,Qe,Yt,un,Mn,jn,rn,Nt,kn,ei.travel].includes(t);)t=t.parent;const i=new Map([[Pi.house,"still"],[Li.house,"fork"],[pi.house,"garage"],[Ii.house,"quotes"],[mi.house,"dash"],[Ri.house,"drydock"],[Ji.house,"bench"],[$i.house,"amnesty"],[Ci.house,"cellar"],[Sn.house,"greenhouse"],[Qe,"head"],[Yt,"engine"],[un,"garden"],[Mn,"tea"],[jn,"radio"],[rn,"dock"],[Nt,"workshop"],[kn,"stair"],[ei.travel,"dock"]]).get(t);i&&ts(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Gn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&ts(t)}});let Tn=null;function hy(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Ou(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}be("#sound").onclick=async()=>{try{Tn||(Tn=hy()),await Tn.ctx.resume(),we.sound=!we.sound,Tn.gain.gain.setTargetAtTime(we.sound?.08:0,Tn.ctx.currentTime,.3),be("#sound").textContent=we.sound?"звук включён":"звук выключен",be("#sound").setAttribute("aria-pressed",we.sound),Ou(),Ft()}catch{Pn("со звуком не сложилось")}};function Vn(n=330){if(!Tn||!we.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}be("#about").onclick=()=>be("#about-dialog").showModal();be("#close-about").onclick=be("#back-to-yard").onclick=()=>be("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&nn){ao();return}n.key==="Escape"&&be("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&be("#zoom-in").click(),n.key==="-"&&be("#zoom-out").click(),n.key.toLowerCase()==="r"&&be("#rotate").click(),n.key.toLowerCase()==="h"&&hr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{at.localPlay(),Sn.step(n.dataset.thermal),xs=performance.now()+2200};const dy={9:{title:"уши для берега",lines:[],verb:"слушать"},8:{title:"десять факелов на диске",lines:[],verb:"настроить"},7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Fu(){return Ze===1?Sn:Ze===2?Ml:Ze===3?oo:Ze===4?Nn:Ze===5?hi:Ze===6?di:Ze===7?Zi:Ze===8?Zn:Ln}function rs(){const n=Ze===1?Sn.inspect().dreamStep:Fu().inspect().step,e=dy[Ze];if(be("#exit-ear-dream").hidden=Ze!==9,be("#dream-ears").hidden=Ze!==9,be("#dream-torches").hidden=Ze!==8,be("#dream-cloud").hidden=Ze!==6,be("#dream-force").hidden=Ze!==3,be("#dream-roofs").hidden=Ze!==4,be("#dream-meter").hidden=Ze!==5,be("#dream-panel .object-kicker").textContent=`СОН 0${Ze} / БЕЗНОГИМ`,be("#dream-panel h2").textContent=e.title,be("#dream-text").textContent=Ze===9?Ln.text():Ze===8?Zn.text():Ze===7?Zi.text():Ze===6?di.text():Ze===5?hi.text():Ze===4?Nn.text():e.lines[n],be("#dream-breathe").textContent=Ze===9?Ln.button():Ze===8?Zn.button():Ze===7?Zi.button():Ze===6?di.button():Ze===5?hi.button():Ze===4?Nn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,be("#dream-breathe").disabled=Ze===9&&(Ln.busy()||!Ln.ready()&&Ln.inspect().phase==="sorting")||Ze===8&&(Zn.busy()||!Zn.canRelease())||Ze===7&&Zi.busy()||Ze===6&&["heating","raining"].includes(di.inspect().phase)||Ze===4&&Nn.inspect().phase==="flying"||Ze===5&&["measuring","unfolding","climbing"].includes(hi.inspect().phase),Ze===9){const t=Ln.inspect();for(const i of document.querySelectorAll("[data-ear-stone]")){const s=Number(i.dataset.earStone);i.textContent=[1,2,3,4,5,7][s]+" · "+["полка","левое","правое"][t.places[s]],i.setAttribute("aria-label","камень "+[1,2,3,4,5,7][s]+": "+["на полке","в левом ухе","в правом ухе"][t.places[s]]),i.disabled=t.phase!=="sorting"}}if(Ze===8){const t=Zn.inspect();for(const i of document.querySelectorAll("[data-torch-turn]")){const s=Number(i.dataset.torchTurn);i.textContent=["птица","вода","ветер"][s]+" · "+t.turns[s]+" ↻",i.setAttribute("aria-pressed",t.aligned[s]),i.disabled=t.phase!=="tuning"}}if(Ze===6){const t=di.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(Ze===5){const t=hi.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(Ze===4){const t=Nn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Nn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function _i(n=1){nn||(Ze=n,nn={target:Ke.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:Xt,returnId:n===9?"dock":n===8?"radio":n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},Fu().enter(),Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.target.set(0,en()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?en()?1.65:1.75:en()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7||n===8||n===9),Wa="",be("#dream-panel").hidden=!1,rs(),rt.shadowMap.needsUpdate=!0)}function ao(){if(!nn)return;const n=nn;nn=null,Fu().exit(),Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,Xt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Wa="",be("#dream-panel").hidden=!0,rt.shadowMap.needsUpdate=!0,ts(n.returnId)}be("#enter-dream").onclick=()=>_i(1);be("#exit-dream").onclick=ao;be("#dream-breathe").onclick=()=>{Ze===1?Sn.breathe():Ze===2?Ml.pour():Ze===3?oo.toss():Ze===4?Nn.send():Ze===5?hi.act():Ze===6?di.act():Ze===7?Zi.act():Ze===8?Zn.act():Ln.act(),xs=performance.now()+2200,rs(),rt.shadowMap.needsUpdate=!0};const lo=document.createElement("button");lo.id="enter-bench";lo.hidden=!0;lo.textContent="собрать механический монитор ↗";lo.onclick=()=>{ts("bench"),be("#focus-object").click()};be("#focus-object").before(lo);const bl=document.createElement("button");bl.id="enter-dream02";bl.textContent="сон 02 / вода спит ↗";bl.onclick=()=>_i(2);Ci.controls.append(bl);be("#exit-ear-dream").onclick=ao;be("#enter-dream09").onclick=()=>_i(9);for(const n of document.querySelectorAll("[data-ear-stone]"))n.onclick=()=>Ln.move(Number(n.dataset.earStone));be("#enter-dream03").onclick=()=>_i(3);be("#enter-dream04").onclick=()=>_i(4);be("#enter-dream08").onclick=()=>_i(8);for(const n of document.querySelectorAll("[data-torch-turn]"))n.onclick=()=>Zn.turn(Number(n.dataset.torchTurn));be("#enter-dream07").onclick=()=>_i(7);be("#enter-dream06").onclick=()=>_i(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>di.choose(n.dataset.cloudTarget);be("#enter-dream05").onclick=()=>_i(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>hi.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Nn.turn(Number(n.dataset.roofTurn)),xs=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{oo.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};be("#dream-archive").onclick=()=>be("#dream-archive-dialog").showModal();be("#close-dream-archive").onclick=()=>be("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{be("#dream-archive-dialog").close(),_i(Number(n.dataset.dreamId))};const at=y1({head:Qe,headDestination:wi,state:we,controls:Ke,camera:Oe,refresh:Ft,setAudioTone:Ou,say:Pn,onHarvest:()=>{Ks=.15}});let uc="";const lp=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])lp.push(new B(n,e,t));const zu=[];for(const n of[19.3,28.7])for(const e of[-1.65,3.1])for(const t of[-27.2,-19.5])zu.push(new B(n,e,t));const cp=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])cp.push(new B(n,e,t));const up=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])up.push(new B(n,e,t));const hp=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])hp.push(new B(n,e,t));const dp=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])dp.push(new B(n,e,t));function fy(){var A,v;const n=Xt==="still"&&we.selected==="still",e=Xt==="fork"&&we.selected==="fork",t=Xt==="garage"&&we.selected==="garage",i=Xt==="quotes"&&we.selected==="quotes",s=Xt==="dash"&&we.selected==="dash",r=Xt==="drydock"&&we.selected==="drydock"||s||i||t||e||n,o=(Xt==="bench"&&we.selected==="bench"||r)&&!be("#inspector").classList.contains("collapsed")&&!nn;if(document.body.classList.toggle("still-look",o&&n),document.body.classList.toggle("fork-look",o&&e),document.body.classList.toggle("garage-look",o&&t),document.body.classList.toggle("quotes-look",o&&i),document.body.classList.toggle("dash-look",o&&(s||i||t||e||n)),document.body.classList.toggle("bench-look",o&&!r),document.body.classList.toggle("drydock-look",o&&r),!o){uc="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const a=be("#inspector").getBoundingClientRect(),c=be(".territory-nav").getBoundingClientRect(),l=be(".toolbar").getBoundingClientRect(),u=innerWidth<=900&&innerHeight>innerWidth,d=u?{left:14,right:l.left-10,top:c.bottom+(n?6:14),bottom:a.top-(n?6:14)}:{left:Math.max(a.right+18,c.right+18),right:l.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!u&&(d.left=c.right+12,d.right=innerWidth-16,d.top=l.bottom+10,d.bottom=a.top-10),(s||i||t||e||n)&&innerWidth<=900&&!u&&(d.left=12,d.right=a.left-12,d.top=c.bottom+10,d.bottom=be("footer").getBoundingClientRect().top-12);const h=be(".resident-history");r&&innerWidth>900&&h&&!h.hidden&&(d.right=Math.min(d.right,h.getBoundingClientRect().left-18));const f=t?pi.inspect():null,g=[];if(f){const C=Math.max(f.gap,f.range,((A=f.flight)==null?void 0:A.range)||0),w=Math.max(f.apex,((v=f.flight)==null?void 0:v.apex)||0);for(const U of[-34,-32+.7*C+1.6])for(const X of[-1.3,Math.max(1.5,.8+.5*w)])for(const G of[-26,-19.8])g.push(new B(U,X,G))}const _=[(f==null?void 0:f.gap)||0,(f==null?void 0:f.range)||0,(f==null?void 0:f.apex)||0,n?18:e?17:t?16:i?15:s?14:r?13:12,innerWidth,innerHeight,d.left,d.right,d.top,d.bottom,mn.targetAngle].map(C=>Math.round(C*10)/10).join(":");if(_===uc||d.bottom-d.top<35||d.right-d.left<50)return;uc=_;const m=()=>{Oe.updateMatrixWorld();const C=(n?zu:e?cp:t?g:i?up:s?hp:r?dp:lp).map(w=>Dt(w.clone()));return{l:Math.min(...C.map(w=>w.x)),r:Math.max(...C.map(w=>w.x)),t:Math.min(...C.map(w=>w.y)),b:Math.max(...C.map(w=>w.y))}};let p=m();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((d.right-d.left)/(p.r-p.l),(d.bottom-d.top)/(p.b-p.t))),Oe.updateProjectionMatrix(),p=m();const y=(d.left+d.right-p.l-p.r)/2,T=(d.top+d.bottom-p.t-p.b)/2,x=new B().setFromMatrixColumn(Oe.matrixWorld,0),b=new B().setFromMatrixColumn(Oe.matrixWorld,1),S=x.multiplyScalar(-y*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(b.multiplyScalar(T*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Ke.target.add(S),Oe.position.add(S),Oe.lookAt(Ke.target),Oe.updateMatrixWorld()}let Wa="";const fp=[];for(const n of[-4.5,4.5])for(const e of[-.6,5.3])for(const t of[-3.3,3.7])fp.push(new B(n,e,t));const pp=[];for(const n of[-3.6,3.6])for(const e of[-.65,4.8])for(const t of[-3.6,3.6])pp.push(new B(n,e,t));const mp=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])mp.push(new B(n,e,t));const gp=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])gp.push(new B(n,e,t));const _p=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])_p.push(new B(n,e,t));function py(){if(!nn||![4,5,6,7,8,9].includes(Ze))return;const n=be("#dream-panel").getBoundingClientRect(),e=be("footer").getBoundingClientRect(),t=be(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===Wa||r.right-r.left<60||r.bottom-r.top<80)return;Wa=o;const a=()=>{Oe.updateMatrixWorld();const g=(Ze===9?fp:Ze===8?pp:Ze===7?mp:Ze===5?gp:_p).map(_=>Dt(_.clone()));return{l:Math.min(...g.map(_=>_.x)),r:Math.max(...g.map(_=>_.x)),t:Math.min(...g.map(_=>_.y)),b:Math.max(...g.map(_=>_.y))}};let c=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Oe.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,u=(r.top+r.bottom-c.t-c.b)/2,d=new B().setFromMatrixColumn(Oe.matrixWorld,0),h=new B().setFromMatrixColumn(Oe.matrixWorld,1),f=d.multiplyScalar(-l*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Ke.target.add(f),Oe.position.add(f),Oe.lookAt(Ke.target),Oe.updateMatrixWorld()}let yd=performance.now(),Go=0,Md=0;function Dt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function my(){at.sync();const n=performance.now(),e=(n-yd)/1e3;yd=n,Go+=e,we.energy=xn.damp(we.energy,we.running?1:0,1.6,e);const t=qf?Go*.2:Go;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(Ke.target.x+Math.sin(mn.angle)*i,Ke.target.y+i*Math.SQRT1_2,Ke.target.z+Math.cos(mn.angle)*i),Oe.lookAt(Ke.target),Ke.update(),nn||(Ke.target.x=xn.clamp(Ke.target.x,-62,Qs.half+2),Ke.target.z=xn.clamp(Ke.target.z,-62,Qs.half+2)),Qs.update(),fy(),py();for(const s of so)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(pn.position.z=xn.damp(pn.position.z,or()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,or()?.4:0,2,e),_l.rotation.z=t*we.energy*.28,Lu.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,$f.material.emissiveIntensity=.45+we.energy*1.5,kc.uniforms.uTime.value=t,kc.uniforms.uEnergy.value=we.energy,xl.rotation.z=t*(.09+we.energy*.23),Jf.forEach(s=>s.intensity=.65+we.energy*1.5),Ru.intensity=2+we.energy*4,Qe.position.x=xn.damp(Qe.position.x,wi.x,1.6,e),Qe.position.z=xn.damp(Qe.position.z,wi.z,1.6,e),Qe.position.y=xn.damp(Qe.position.y,wi.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=xn.smoothstep(s,0,2);Qe.position.lerpVectors(ip,new B(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Qe.position.lerpVectors(new B(-6,.65,-3.25),wi,r),Qe.rotation.x=(1-r)*Math.PI*2}we.loop||(Qe.rotation.x=0,Pn("ну вот и дома"),Ft())}if(at.place(),Qe.rotation.y=Math.sin(t*.3)*.12,Uu.rotation.y=t*.13,Jo.position.x=Qe.position.x,Jo.position.z=Qe.position.z,Jo.rotation.z=.04*Math.sin(t),Jr.position.x=Qe.position.x,Jr.position.z=Qe.position.z,Ks=xn.damp(Ks,1,.85,e),Zr.scale.y=Ks,Zr.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Pn("чай готов. живём."),Ft(),Vn(440))),vl.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),Du.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),tp.update(at.watching()),Ml.update(e,t),oo.update(e,t),Nn.update(e,t),hi.update(e,t),di.update(e,t),Zi.update(e,t),Zn.update(e,t),Ln.update(e,t),Pi.update(e,t),Li.update(e),pi.update(e),Ii.update(e),mi.update(e),Ri.update(e),Ji.update(e),pn.visible=!(Xt==="bench"&&we.selected==="bench"&&!be("#inspector").classList.contains("collapsed")&&!nn),$i.update(e),Ci.update(Go),Sn.update(e,t),ei.update(e,t),cc!==we.dockPending&&(cc=we.dockPending,Sl.dock.classList.toggle("waiting",cc)),Pu.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),ep.rotation.y=t*.003,we.running&&t-Md>3.5&&(Md=t,Vn([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),cy.update(!nn&&Oe.zoom>=.4&&we.markers,ms.width,ms.height),nn||n>np)lc.classList.contains("visible")&&lc.classList.remove("visible");else{Sr.copy(Qe.position),Sr.y+=1.52,Sr.project(Oe);const s=Math.round(Math.max(85,Math.min(ms.width-85,(Sr.x+1)*ms.width*.5))*10)/10,r=Math.round((1-Sr.y)*ms.height*.5*10)/10;(s!==gd||r!==_d)&&(gd=s,_d=r,lc.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}xs&&performance.now()>xs&&(rt.shadowMap.needsUpdate=!0,xs=0),rt.render(jt,Oe)}we.running&&(be("#object-action").innerHTML="остановить двор <span>↗</span>");Ft();rt.setAnimationLoop(my);requestAnimationFrame(()=>be("#loading").classList.add("done"));window.__yard={state:we,select:ts,inspect:()=>({resident:at.inspect(),territory:Qs.inspect(),sleepBody:tp.inspect(),sleepDream:Ml.inspect(),quietDream:oo.inspect(),earDream:Ln.inspect(),earDreamScreen:Ln.inspect().landmarks.map(n=>Dt(new B(...n))),torchDream:Zn.inspect(),torchDreamScreen:Zn.inspect().landmarks.map(n=>Dt(new B(...n))),pocketDream:Zi.inspect(),pocketDreamScreen:Zi.inspect().landmarks.map(n=>Dt(new B(...n))),cloudDream:di.inspect(),cloudDreamScreen:di.inspect().landmarks.map(n=>Dt(new B(...n))),meterDream:hi.inspect(),meterDreamScreen:hi.inspect().landmarks.map(n=>Dt(new B(...n))),roofDream:Nn.inspect(),roofDreamGoalScreen:Nn.inspect().goals.map(n=>Dt(new B(...n))),roofDreamLetterScreen:Dt(new B(...Nn.inspect().letter)),dreamId:nn?Ze:null,still:Pi.inspect(),stillBounds:zu.map(n=>Dt(n.clone())),stillScreen:Dt(new B(24,.3,-24)),stillScreens:Pi.inspect().landmarks.map(n=>Dt(new B(...n))),fork:Li.inspect(),forkScreen:Dt(new B(-23,.1,-32)),forkScreens:Li.inspect().landmarks.map(n=>Dt(new B(...n))),garage:pi.inspect(),garageScreen:Dt(new B(...pi.inspect().garage).add(new B(-24,-.7,-24))),garageCarScreen:Dt(new B(-32,-.7,-24)),quotes:Ii.inspect(),quoteScreens:Ii.inspect().quotePositions.map(n=>Dt(new B(...n).add(new B(24,-1.05,24)))),dash:mi.inspect(),dashSnailScreen:Dt(new B(...mi.inspect().snail).add(new B(0,-1,-24))),dashBeamScreen:Dt(new B(...mi.inspect().beam).add(new B(0,-1.5,-24))),drydock:Ri.inspect(),drydockShipScreen:Dt(new B(...Ri.inspect().ship).add(new B(-24,-.5,0))),bench:Ji.inspect(),benchScreen:Dt(new B(-2.65,1.58,-3.18)),benchBucketScreen:Dt(new B(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:$i.inspect(),amnestyScreen:Dt(new B(0,-.3,24)),cellar:Ci.inspect(),cellarScreen:Dt(new B(24,-.3,.25)),objects:Object.keys(Gn),greenhouse:Sn.inspect(),dock:ei.inspect(),boatScreen:Dt(new B(...ei.inspect().boat).add(new B(0,.2,0))),drawCalls:rt.info.render.calls,triangles:rt.info.render.triangles,gpuGeometries:rt.info.memory.geometries,zoom:Oe.zoom,target:Ke.target.toArray(),angle:mn.angle,head:Qe.position.toArray(),roof:pn.position.toArray(),roofOpen:or(),roofMode:we.roof===null?"auto":"manual",pendulums:so.map(n=>n.group.rotation.x),growth:Ks,meshes:(()=>{let n=0;return jt.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[rt.domElement.width,rt.domElement.height]})};iy();
