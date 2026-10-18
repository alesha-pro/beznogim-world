(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const hs=[3,5,7,9],vp=[3,5,7,1],Yo=16,$o=[[2,1,4,9],[3,4,1,8],[3,1,5,7]],xp=["улитка","чайник","кит"],gd=(n,e)=>n.every((t,i)=>t===e[i]);function ps(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.volumes)&&e.volumes.length===4&&e.volumes.every((a,c)=>Number.isInteger(a)&&a>=0&&a<=hs[c])&&e.volumes.reduce((a,c)=>a+c,0)===16,s=i?e.volumes.slice():vp.slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(Yo,e.used)):0,o=gd(s,$o[t])?t===2?"complete":"won":r>=Yo?"spent":"ready";return{round:t,volumes:s,used:r,phase:o,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function _d(n,e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>3||t<0||t>3||e===t)return null;const i=Math.min(n[e],hs[t]-n[t]);if(i<=0)return null;const s=n.slice();return s[e]-=i,s[t]+=i,{volumes:s,amount:i}}function yp(n,e,t,i){const s=ps(n);let r={ok:!1,reason:"locked"},o=null;if(e==="reset"||e==="all")return{state:ps({round:e==="all"?0:s.round,run:s.run+(e==="all"?1:0),seq:s.seq}),result:{ok:!0},pour:o};if(e==="next"&&s.phase==="won")return{state:ps({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:!0},pour:o};if(e==="pour"&&s.phase==="ready"){const a=_d(s.volumes,t,i);if(!a)return{state:s,result:{ok:!1,reason:"empty"},pour:o};o={a:t,b:i,amount:a.amount,before:s.volumes.slice(),after:a.volumes.slice(),seq:s.seq+1},s.volumes=a.volumes,s.used++,s.seq++,r={ok:!0,amount:a.amount}}return{state:ps(s),result:r,pour:o}}function Mp(n){const e=ps(n);if(e.phase!=="ready")return[];const t=[{v:e.volumes,path:[]}],i=new Set([e.volumes.join(",")]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(gd(r,$o[e.round]))return o;if(!(o.length>=Yo-e.used))for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=_d(r,a,c);if(!l)continue;const u=l.volumes.join(",");i.has(u)||(i.add(u),t.push({v:l.volumes,path:[...o,{a,b:c}]}))}}return null}function Sp(n,e,t){return t=Math.max(0,Math.min(1,Number(t)||0)),[-3+2*n+2*(e-n)*t,2.95+Math.sin(t*Math.PI)*1.15,0]}function bp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,localPlay:f}){const m=s([24,-1.1,-24],e);m.name="cloud-still";const _=i("#45626b",{metalness:.55,roughness:.35}),g=i("#cf9671",{metalness:.6,roughness:.3}),p=i("#e6e5d2"),y=i("#8dd8d4",{emissive:"#8dd8d4",emissiveIntensity:.28}),A=i("#233f49");r([0,-.25,.6],[9.1,.5,7.4],t.concrete,m),r([0,.04,.1],[8.7,.12,3.3],A,m);function x(E,X,te=.6,Q=.5){const R=u(E,X,te,Q,m),L=R.material.map.image;L.width=L.height=128;const F=L.getContext("2d"),O=ne=>{F.fillStyle="#294c52",F.fillRect(0,0,128,128),F.strokeStyle="#e8d7ae",F.lineWidth=4,F.strokeRect(5,5,118,118),F.font="bold 76px monospace",F.fillStyle="#fff3ce",F.textAlign="center",F.textBaseline="middle",F.fillText(ne,64,68),R.material.map.needsUpdate=!0};return O(E),{o:R,draw:O}}const S=[],b=[],T=[];for(let E=0;E<4;E++){const X=-3+2*E,te=hs[E]*.26+.4;r([X,.23,0],[1.45,.36,1.25],_,m);for(let L of[-.5,.5])for(let F of[-.57,.57])c([X+F,.4,L],[X+F,te,L],.025,g,m);r([X,te,0],[1.3,.09,1.15],_,m),l([X,te+.12,0],.23,.04,g,m);for(let L=0;L<hs[E];L++)r([X-.73,.5+L*.26,.4],[.16,.025,.12],y,m);const Q=s([X,.4,0],m);for(let L=0;L<hs[E];L++){const F=s([0,.15+L*.26,0],Q);o([0,0,0],[.4,.17,.28],p,F),o([.2,.04,.12],.15,p,F),o([-.22,0,-.12],.14,y,F),b.push({o:F,i:E,n:L})}S.push(x(""+hs[E],[X,.3,1],.72,.65)),x(""+(E+1),[X,te+.4,0],.5,.45);const R=r([X,.05,.05],[1.7,.06,1.55],y,m);T.push(R)}const v=Array.from({length:16},(E,X)=>o([-3.75+X*.5,.14,1.8],.11,g,m));u("16 ЧАСОВ / ОБЛАКО",[0,.45,-2.7],4.8,.48,m,{size:42});const C=[];for(let E=0;E<3;E++){const X=s([-2.7+E*2.7,.6,3.15],m);a([0,-.2,0],.75,.2,_,X);const te=s([0,.2,0],X);if(C.push(te),E===0){o([0,.3,0],[.5,.43,.35],p,te),o([.45,.05,0],[.7,.17,.25],p,te),o([.96,.28,0],.15,y,te);for(const Q of[-.12,.12])c([.96,.32,Q],[1.02,.65,Q],.035,g,te)}if(E===1){o([0,.3,0],[.5,.4,.45],p,te),a([0,.72,0],.25,.1,y,te),o([0,.83,0],.09,g,te),c([-.3,.35,0],[-.8,.67,0],.15,p,te);const Q=l([.5,.4,0],.3,.08,y,te);Q.rotation.x=Math.PI/2}E===2&&(o([0,.3,0],[.8,.4,.35],p,te),o([-.7,.45,0],[.3,.12,.45],y,te),o([.5,.37,.29],.06,A,te),c([0,.6,0],[0,.95,0],.045,y,te),o([0,1,0],[.28,.08,.15],p,te))}const w=s([0,0,0],m),U=Array.from({length:7},()=>o([0,0,0],[.17,.13,.17],p,w)),q=s([0,0,0],e);for(let E=0;E<19;E++)r([7.8+E*.68,-1.48,-24+Math.sin(E*.33)*.3],[.48,.13,.85],t.cream,q);d(q,[]),d(m,[...b.map(E=>E.o),...S.map(E=>E.o),...T,...v,...C,w]);let B;try{B=ps(JSON.parse(localStorage.getItem("beznogim-still-v1")||"null"))}catch{B=ps()}let k=0,D=1,V=1,H=null,Z="",Y=null;const J=document.createElement("div");J.id="still-controls",J.hidden=!0,J.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>',document.querySelector("#focus-object").before(J);for(const E of J.querySelectorAll("select"))for(let X=0;X<4;X++)E.add(new Option("карта "+(X+1),""+X));J.querySelector("#still-to").value="1";const ee=()=>{try{localStorage.setItem("beznogim-still-v1",JSON.stringify(B))}catch{}},j=()=>V<1;function he(E=1){const X=j()?H.before.map((Q,R)=>Q+(H.after[R]-Q)*E):B.volumes;for(const Q of b){const R=Math.max(0,Math.min(1,X[Q.i]-Q.n));Q.o.visible=R>.01,Q.o.scale.setScalar(Math.max(.01,R))}w.visible=j(),U.forEach((Q,R)=>{const L=Math.max(0,Math.min(1,E*1.65-R*.09));Q.visible=j()&&L>0&&L<1,Q.position.set(...Sp((H==null?void 0:H.a)||0,(H==null?void 0:H.b)||0,L))});const te=B.round+(B.phase==="won"||B.phase==="complete"?1:0)-(j()&&(B.phase==="won"||B.phase==="complete")?1:0);C.forEach((Q,R)=>Q.visible=R<te),v.forEach((Q,R)=>Q.material=R<B.used?A:g),T.forEach((Q,R)=>{Q.visible=R===k||R===D,Q.material=R===k?g:y})}function me(){J.querySelector("#still-readout").textContent=`заказ ${B.round+1}/3 · ${xp[B.round]} · ${B.used}/${Yo} ч
есть: ${B.volumes.join(" / ")}
надо: ${$o[B.round].join(" / ")}`,J.querySelector("#still-notice").textContent=j()?"облако переливается…":Z,J.querySelectorAll("select").forEach(E=>E.disabled=j()||B.phase!=="ready"),J.querySelectorAll("button").forEach(E=>E.disabled=j()),S.forEach((E,X)=>E.draw(""+B.volumes[X]));for(const E of J.querySelectorAll("select"))for(let X=0;X<4;X++)E.options[X].textContent=`${X+1}: ${B.volumes[X]}/${hs[X]}`;he(j()?0:1)}function ve(E){if(j())return;f(),Y=null;const X=yp(B,E,k,D);return B=X.state,H=X.pour,V=H?0:1,Z=X.result.ok?B.phase==="spent"?"Шестнадцать часов ушли. Облако ещё не то; повтори заказ.":B.phase==="complete"?"Три облака готовы. Кит никуда не торопится.":B.phase==="won"?"Облако собрано. Следующий заказ?":"":"Нечего переливать. Выбери другую пару; час не потрачен.",ee(),me(),h(),X}J.querySelector("#still-from").onchange=E=>{k=+E.target.value,he(),h()},J.querySelector("#still-to").onchange=E=>{D=+E.target.value,he(),h()},J.querySelector("#still-reset").onclick=()=>ve("reset"),J.querySelector("#still-all").onclick=()=>ve("all"),J.querySelector("#still-hint").onclick=()=>{if(j())return;const E=Mp(B);Y=(E==null?void 0:E[0])||null,Y?(k=Y.a,D=Y.b,J.querySelector("#still-from").value=""+k,J.querySelector("#still-to").value=""+D,Z=`Перелей ${k+1} → ${D+1}. До заказа ${E.length} переливов.`):Z=B.phase==="ready"?"Часов на этот путь уже не хватит. Повтори заказ.":"Этот заказ окончен.",me(),h()};function N(E,X){j()&&(V=Math.min(1,V+Math.max(0,Math.min(.1,E))/1.65),he(V),V===1&&(me(),h())),C.forEach((te,Q)=>{te.position.y=.2+Math.sin(X*.7+Q)*.07})}return me(),ee(),{house:m,controls:J,update:N,run:()=>ve(B.phase==="ready"?"pour":B.phase==="won"?"next":B.phase==="complete"?"all":"reset"),card:()=>({action:j()?"облако в трубе…":B.phase==="ready"?`перелить ${k+1} → ${D+1}`:B.phase==="won"?"следующий заказ →":B.phase==="complete"?"новая серия ↺":"повторить заказ ↺",disabled:j(),description:"Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов."}),inspect:()=>({...B,a:k,b:D,progress:V,pour:H,hint:Y,notice:Z,goal:$o[B.round],trophies:C.map(E=>E.visible),puffs:b.map(E=>({visible:E.o.visible,scale:E.o.scale.x})),flow:U.map(E=>E.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})}}const qn=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],Ar=[1,1,2],lc=n=>n===1?1:0;function Xs(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min(qn[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===qn[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return lc((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(Ar[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Cr(n){const e=lc(n[0]);return{bay:2*e+lc(n[e+1]),side:e}}function Ep(n){const e=n.slice(),t=Cr(e).side;return e[0]^=1,e[t+1]^=1,e}function bl(n){return qn.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function vd(n,e,t){const i=Xs(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:Xs({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:Xs({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<Ar[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Cr(i.switches),c=qn[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:c,success:o===c,before:i.switches.slice()},i.switches=Ep(i.switches),s={ok:!0,bay:o,target:c,success:r.success},r.success?(i.cursor++,i.cursor===qn[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function wp(n){const e=Xs(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,c)=>a.cost-c.cost||a.path.length-c.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,c]of[["release",null],["flip",0],["flip",1],["flip",2]]){const l=vd(r,a,c);!l.result.ok||l.state.phase==="spilled"||t.push({s:l.state,path:[...s.path,{action:a,index:c}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function Tp(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),c=o-a;return s[a].map((l,u)=>l+(s[a+1][u]-l)*c+(u===1&&a===3?.5*Math.sin(c*Math.PI):0))}function Ap({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,localPlay:f}){const m=s([-23,-1.1,-32],e);m.name="backup-fork";const _=i("#263f46"),g=i("#c5ccbe",{metalness:.65,roughness:.3}),p=i("#e4bc77"),y=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(N=>i(N,{emissive:N,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,m),r([0,-.01,0],[6.6,.1,5.8],_,m);for(const N of[-2.8,2.8])for(const E of[-2.4,2.4])r([N,-.6,E],[.14,1.2,.14],t.metal,m);function A(N,E,X,te,Q){const R=u(N,E,X,te,Q),L=R.material.map.image;L.width=L.height=128;const F=L.getContext("2d");return F.fillStyle="#29464b",F.fillRect(0,0,128,128),F.strokeStyle="#e4dfc8",F.lineWidth=3,F.strokeRect(5,5,118,118),F.fillStyle="#fff1c9",F.font="bold 90px monospace",F.textAlign="center",F.textBaseline="middle",F.fillText(N,64,68),R.material.map.needsUpdate=!0,R}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],S=[-2.8,-.9,.9,2.8],b=(N,E)=>{c(N,E,.075,g,m);for(const X of[-.14,.14])c([N[0]+X,N[1]+.08,N[2]],[E[0]+X,E[1]+.08,E[2]],.025,t.copper,m)};b([0,1.4,-2.5],x[0]);for(let N=0;N<2;N++){b(x[0],x[N+1]);for(let E=0;E<2;E++)b(x[N+1],[S[N*2+E],.4,2])}const T=x.map((N,E)=>{const X=s(N,m);a([0,0,0],.24,.13,t.copper,X);const te=s([0,.13,0],X);return c([0,0,0],[0,.07,.66],.055,p,te),o([0,.07,.66],.14,g,te),A(["А","Б","В"][E],[.48,.38,-.08],.55,.5,X),te}),v=S.map((N,E)=>(a([N,.15,2],.29,.32,t.copper,m),l([N,.37,2],.27,.04,y[E],m),A(String(E+1),[N,.74,2.65],.7,.65,m),o([N,.49,2],[.16,.2,.16],y[E],m))),C=S.map((N,E)=>{const X=s([N,.22,2],m);return r([0,0,0],[.66,.06,.7],y[E],X),X}),w=o([0,1.57,-2.5],.18,y[0],m),U=o([0,1.57,-2.5],.18,y[0],m),q=s([4,-.3,2.5],m);a([0,0,0],.4,.55,_,q),l([0,.28,0],.4,.045,g,q);const B=o([0,.21,0],.18,p,q);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,m);const k=Array.from({length:12},(N,E)=>{const X=s([3.6+E%2*.57,.18,-1.9+Math.floor(E/2)*.48],m);return a([0,0,0],.12,.14,_,X),o([0,.16,0],.13,y[qn.flat()[E]],X)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,m,{size:42});for(let N=0;N<4;N++)r([-25,-1.42,-28.7-N*.62],[.7,.1,.44],t.cream,e);d(m,[...T.map(N=>N.parent),...v,...C,w,U,q,...k]);let D;try{D=Xs(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{D=Xs()}let V=null,H=1,Z="",Y=null;const J=document.createElement("div");J.id="fork-controls",J.hidden=!0,J.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((N,E)=>`<button id="fork-flip-${E}" aria-label="Переключить развилку ${N}">${N} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before(J);function ee(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(D))}catch{}}const j=()=>H<1;function he(){const N=qn[D.wave].slice(D.cursor).map(te=>te+1).join(" → ")||"всё на месте";J.querySelector("#fork-readout").textContent=`волна ${D.wave+1}/3 · сохранено ${bl(D)}/12
очередь: ${N}
ручные щелчки ${D.used}/${Ar[D.wave]} · путь сейчас → ${Cr(D.switches).bay+1}`,J.querySelector("#fork-notice").textContent=j()?"катится…":Z;const E=j()&&V?V.before:D.switches;T.forEach((te,Q)=>{te.rotation.y=(E[Q]?1:-1)*.68;const R=J.querySelector("#fork-flip-"+Q);R.textContent=["А","Б","В"][Q]+(D.switches[Q]?" →":" ←"),R.setAttribute("aria-pressed",String(!!D.switches[Q])),R.disabled=j()||D.phase!=="ready"||D.used>=Ar[D.wave],R.classList.toggle("hinted",(Y==null?void 0:Y.action)==="flip"&&Y.index===Q)});for(const te of J.querySelectorAll(".fork-tools button"))te.disabled=j();w.visible=D.phase==="ready"&&!j(),w.material=y[qn[D.wave][D.cursor]||0];const X=D.cursor-(j()&&(V!=null&&V.success)?1:0);v.forEach((te,Q)=>te.visible=qn[D.wave].slice(0,X).includes(Q)),C.forEach((te,Q)=>te.visible=Cr(E).bay===Q),k.forEach((te,Q)=>te.visible=Q<bl(D)-(j()&&(V!=null&&V.success)?1:0)),B.visible=D.phase==="spilled"&&!j(),B.material=y[qn[D.wave][D.cursor]||0],U.visible=j()}function me(N,E){if(j())return;f(),Y=null;const X=vd(D,N,E);return D=X.state,V=X.shot,H=V?0:1,Z=X.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":D.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":D.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":D.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",ee(),he(),h(),X}["А","Б","В"].forEach((N,E)=>J.querySelector("#fork-flip-"+E).onclick=()=>me("flip",E)),J.querySelector("#fork-reset").onclick=()=>me("restart"),J.querySelector("#fork-all").onclick=()=>me("all"),J.querySelector("#fork-hint").onclick=()=>{if(j())return;const N=wp(D);Y=(N==null?void 0:N[0])||null,Z=Y?Y.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][Y.index]}.`:D.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",he(),h()};function ve(N){if(!j())return;const E=H;H=Math.min(1,H+Math.min(.1,Math.max(0,N))/2.8),U.position.set(...Tp(V,H)),U.position.y+=.17,U.material=y[V.target],H===1&&E<1&&(he(),h())}return he(),ee(),{house:m,controls:J,update:ve,run:()=>me(D.phase==="complete"?"all":D.phase==="rounddone"?"next":D.phase==="spilled"?"restart":"release"),card:()=>({action:j()?"лампочка катится…":D.phase==="complete"?"новая серия ↺":D.phase==="rounddone"?"следующая волна →":D.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:j(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...D,saved:bl(D),queue:qn[D.wave],limit:Ar[D.wave],path:Cr(D.switches).bay,progress:H,shot:V,notice:Z,hinted:Y,rolling:U.position.toArray(),archive:k.map(N=>N.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function Cp(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function $u(n){const e=n.state||{},t=(l,u,d,h)=>Number.isFinite(l)?Math.max(u,Math.min(d,Math.floor(l))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=l=>l&&typeof l=="object"?{seq:t(l.seq,1,999999,1),range:t(l.range,1,18,3),apex:Number.isFinite(l.apex)?Math.max(.5,Math.min(9,l.apex)):.5,end:Number.isFinite(l.end)?Math.max(0,Math.min(18,l.end)):0,outcome:["landed","short","far","bumped"].includes(l.outcome)?l.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const l=n.args||{};if(n.tool==="launch"&&l.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&l.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(l.power)||l.power<1||l.power>6||!Number.isInteger(l.angle)||l.angle<1||l.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=l.power,r.angle=l.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&l.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],d=r.power*(4-r.angle),h=r.power*r.angle/2,f=u.gap/2/d,m=f<=1?4*h*f*(1-f):0,_=f<=1&&m<u.barrier?"bumped":d<u.gap?"short":d>u.gap?"far":"landed";r.flight={seq:r.seq,range:d,apex:h,end:_==="bumped"?u.gap/2:d,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:d,apex:h,clearance:m,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],c={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:c[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function Rp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var F,O,ne;const m=s([-24,-1.5,-24],e);m.name="pneumatic-garage-range";const _=i("#eee0b7"),g=i("#29464b"),p=i("#d87b4d"),y=i("#94b9a0"),A=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,m),r([0,.24,0],[20,.1,5],g,m);for(let I=-9;I<10;I++)r([I,.31,2],[.55,.03,.06],_,m);const x=s([-8,.45,0],m);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],A,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const I of[-.35,.35])for(const K of[-.35,.35])o([I,.04,K],[.16,.16,.1],g,x);const S=s([-8,.37,0],m);S.name="flying-garage";for(const I of[-.9,.9])r([I,.74,0],[.12,1.5,1.6],y,S);r([0,.74,-.75],[1.8,1.5,.12],y,S),r([0,1.35,.76],[1.7,.27,.12],_,S);for(const I of[-1,1]){const K=r([I*.49,1.69,0],[1.16,.13,1.95],p,S);K.rotation.z=I*-.32}l("Г",[0,1.4,.86],.42,.29,S,{size:70});const b=[];for(const I of[-.74,.74])for(const K of[-.59,.59])a([I,-.04,K],.15,.23,t.metal,S),b.push(r([I,-.32,K],[.12,.5,.12],_,S));const T=s([0,.35,0],m);r([0,0,0],[2.5,.12,2.2],_,T),r([0,.07,0],[1.95,.035,1.65],y,T),l("ПОСАДКА",[0,.24,1.18],2.2,.3,T,{size:50});const v=s([0,.34,0],m),C=r([0,.5,0],[.32,1,2.1],p,v);for(const I of[-1.2,1.2])c([0,0,I],[0,3.4,I],.04,t.metal,v);const w=l("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),U=s([0,.33,0],m);r([0,0,0],[1.6,.12,2],t.copper,U);for(let I=0;I<5;I++)r([0,.1+I*.12,0],[1.1,.04,1.4],_,U);const q=s([-8,.6,3.4],m);a([0,.65,0],.4,1.3,t.copper,q),c([0,1.3,0],[0,1.8,0],.07,g,q),c([-.5,1.8,0],[.5,1.8,0],.07,g,q);const B=Array.from({length:6},(I,K)=>r([.7,.14+K*.24,0],[.24,.17,.12],y,q)),k=s([3,.6,3.7],m);r([0,0,0],[3.8,.2,.9],t.copper,k);const D=Array.from({length:3},(I,K)=>{const ie=s([-1.1+K*1.1,.2,0],k);return r([0,.1,0],[.65,.2,.55],g,ie),o([0,.56,0],[.3,.34,.27],_,ie),r([0,.57,.22],[.39,.19,.08],g,ie),ie});l("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,m,{size:55}),l("МАШИНА ДОМА",[-8,.9,2],2.8,.32,m,{size:50});for(let I=0;I<21;I++)r([-24,-1.42,-6-I*.65],[.9,.12,.49],t.cream,e);u(S,b),u(m,[x,S,T,v,U,q,k]);let V=null,H=((ne=(O=(F=window.__beznogimState)==null?void 0:F.mechanics)==null?void 0:O.garage)==null?void 0:ne.public)||null,Z,Y="",J="",ee=null,j=1,he="";try{V=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function me(I,K,ie={}){const W=$u({mode:I,tool:K,args:ie,state:V});V=W.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(V))}catch{}return W}me("migrate");const ve=document.createElement("div");ve.id="garage-controls",ve.hidden=!0,ve.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(I=>`<option>${I}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(I=>`<option>${I}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(ve);const N=()=>H&&h()?H:$u({mode:"migrate",state:V}).public,E=()=>H&&h()?"resident":"sandbox";function X(I,K){var W;if(j<1)return;f();const ie=me("action",I,K);return he=((W=ie.result)==null?void 0:W.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",R(0),d(),ie}ve.querySelector("#garage-pump").onclick=()=>X("pump",{power:Number(ve.querySelector("#garage-power").value),angle:Number(ve.querySelector("#garage-angle").value)}),ve.querySelector("#garage-reset").onclick=()=>X("launch",{mode:"restart"});function te(){if(!Z)return;const I=Z;ve.querySelector("#garage-readout").textContent=`испытание ${I.level}/3 · пролёт ${I.gap} · пробка ${I.barrier}
воздух ${I.air}/6 · дальность ${I.range} · вершина ${I.apex}
посадки ${I.landed}/3 · попытки ${I.attempts}`,ve.querySelector("#garage-notice").textContent=he;for(const K of ve.querySelectorAll("select,#garage-pump"))K.disabled=j<1||["landed","complete"].includes(I.phase);ve.querySelector("#garage-reset").disabled=j<1}function Q(I){const K=!Z||J!==E()||Z.run!==I.run;J=E(),K?(ee=I.flight,j=1,he=""):I.flight&&(!Z.flight||Z.flight.seq!==I.flight.seq)?(ee=I.flight,j=0):I.flight||(ee=null,j=1),Z=I,ve.querySelector("#garage-power").value=I.power,ve.querySelector("#garage-angle").value=I.angle,T.position.x=-8+I.gap*.7,v.position.x=-8+I.gap*.35,C.scale.y=I.barrier*.5,C.position.y=I.barrier*.25,w.position.y=I.barrier*.5+.4,D.forEach((ie,W)=>ie.visible=W<I.landed),B.forEach((ie,W)=>ie.visible=W<I.air),te()}function R(I){I=Math.min(.1,Math.max(0,I));const K=N(),ie=E()+":"+JSON.stringify(K);ie!==Y&&(Y=ie,Q(K),d());const W=j;j=Math.min(1,j+I/3.6);const{x:ae,y:ye}=Cp(ee,j);S.position.set(-8+ae*.7,.37+ye*.5,0),S.rotation.z=j<1?Math.sin(j*Math.PI*2)*.045:0,U.visible=!!ee&&["short","far"].includes(ee.outcome),U.position.x=-8+((ee==null?void 0:ee.range)||0)*.7,b.forEach(Se=>Se.visible=j>0&&j<.65),W<1&&j===1&&(te(),d())}const L=()=>({action:E()==="resident"?"попробовать свой гараж":j<1?"гараж в воздухе…":Z.phase==="complete"?"новая серия ↺":Z.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(E()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+Z.message,disabled:j<1});return window.addEventListener("beznogim:state",({detail:I})=>{var ie,W;const K=(W=(ie=I.mechanics)==null?void 0:ie.garage)==null?void 0:W.public;K&&(H=K)}),Q(N()),Y=E()+":"+JSON.stringify(N()),R(0),{house:m,controls:ve,update:R,card:L,run:()=>X("launch",{mode:Z.phase==="complete"?"restart":Z.phase==="landed"?"next":"jump"}),inspect:()=>({source:E(),...Z,progress:j,notice:he,garage:S.position.toArray(),car:x.position.toArray(),trophies:D.map(I=>I.visible)})}}const Sr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function El(n){const e=n.state||{},t=(u,d,h,f)=>Number.isFinite(u)?Math.max(d,Math.min(h,Math.floor(u))):f,i=t(e.planted,0,3,0),s=Math.min(2,i),r=Sr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let c=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",c={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")c={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:Sr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),c={ok:!0};else if(n.tool==="hint")c=Pp(a);else if(!["slide","plant"].includes(n.tool))c={ok:!1,reason:"unknown_tool"};else if(a.planted===3)c={ok:!1,reason:"complete"};else if(n.tool==="slide"){const d={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(d,u.direction))c={ok:!1,reason:"invalid_arguments"};else{const[h,f]=d[u.direction],m=a.positions[u.piece];let _=m%5,g=Math.floor(m/5);for(;_+h>=0&&_+h<5&&g+f>=0&&g+f<5&&!r.rocks.includes((g+f)*5+_+h)&&(g+f)*5+_+h!==a.positions[1-u.piece];)_+=h,g+=f;const p=g*5+_;a.positions[u.piece]=p,p!==m?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",c={ok:p!==m,from:m,to:p,reason:p===m?"blocked":"slid"}}}else a.positions.some((d,h)=>d!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",c={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=Sr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",c={ok:!0,trees:a.planted*2})}const l=Sr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:l.rocks,goals:l.goals,size:5},result:c,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function Pp(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=Sr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((c,l)=>c===e.goals[l]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let c=0;c<2;c++)for(const[l,[u,d]]of Object.entries(s)){let h=o[c]%5,f=Math.floor(o[c]/5);for(;h+u>=0&&h+u<5&&f+d>=0&&f+d<5&&!e.rocks.includes((f+d)*5+h+u)&&(f+d)*5+h+u!==o[1-c];)h+=u,f+=d;const m=o.slice();m[c]=f*5+h;const _=m.join(",");i.has(_)||(i.add(_),t.push([m,[...a,{piece:c,direction:l}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function Lp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var R,L,F;const m=s([24,-1.5,24],e);m.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),g=i("#274644"),p=i("#f2e3b9"),y=i("#dfaf57"),A=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,m),r([0,.17,1.5],[7.25,.14,7.25],g,m);const S=O=>[(O%5-2)*1.35,.46,(Math.floor(O/5)-2)*1.35+1.5],b=[];for(let O=0;O<25;O++){const[ne,,I]=S(O);b.push(r([ne,.27,I],[1.27,.12,1.27],_,m))}const T=Array.from({length:6},()=>{const O=s([0,0,0],m);return r([0,.24,0],[1.05,.42,1.05],t.concrete,O),r([0,.49,0],[.9,.08,.9],t.metal,O),O}),v=[1,3].map((O,ne)=>{const I=S(O),K=s([I[0],.4,I[2]],m);return r([0,-.02,0],[1.23,.07,1.23],ne?A:y,K),r([0,.025,0],[1.03,.04,1.03],p,K),l(ne?"»":"«",[0,.14,.38],.72,.55,K,{size:105}),K});function C(O){const ne=s(S(O?24:20),m);for(let I=0;I<2;I++){const K=(I-.5)*.34,ie=O?-1:1;c([K+ie*.22,.92,0],[K-ie*.16,.5,0],.065,O?A:y,ne),c([K-ie*.16,.5,0],[K+ie*.22,.08,0],.065,O?A:y,ne)}return r([0,-.07,0],[.98,.09,.5],t.metal,ne),ne}const w=[C(0),C(1)],U=w.map(O=>r([0,-.13,0],[1.1,.04,.67],p,O));for(const O of[-3.9,0,3.9])r([O,.75,-2.05],[.18,1.25,.18],t.copper,m),r([O,1.39,-2.05],[.32,.12,.32],p,m);for(const O of[-2.8,2.8])r([O,.8,-2.05],[1.85,.14,.14],t.copper,m);const q=Array.from({length:6},(O,ne)=>{const I=s([-3.5+ne%3*3.5,.3,-3.5-Math.floor(ne/3)*1.9],m);a([0,.45,0],.12,.9,t.copper,I);for(let K=0;K<3;K++){const ie=new n.Mesh(new n.ConeGeometry(.87-K*.17,1.3,5),x);ie.position.y=.95+K*.56,ie.castShadow=!0,I.add(ie)}return r([0,.02,0],[1.45,.1,1.45],t.soil||g,I),I});l("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,m,{size:44}),l("СЕВЕР",[0,1.52,-2.05],1.45,.33,m,{size:60});for(let O=0;O<23;O++)r([24,-1.42,6.6+O*.54],[1,.13,.43],t.cream,e);u(m,[...T,...w,...v,...q]);let B=null,k=((F=(L=(R=window.__beznogimState)==null?void 0:R.mechanics)==null?void 0:L.quotes)==null?void 0:F.public)||null,D,V="",H="",Z=0,Y="",J=0,ee=Array(6).fill(0),j=[null,null];try{B=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function he(O,ne,I={}){const K=El({mode:O,tool:ne,args:I,state:B});B=K.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(B))}catch{}return K}he("migrate");const me=document.createElement("div");me.id="quotes-controls",me.hidden=!0,me.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(me);const ve=()=>k&&h()?k:El({mode:"migrate",state:B}).public;function N(O,ne={}){if(J>0)return;f(),Y="";const I=he("action",O,ne);return V="",te(0),d(),I}for(const O of me.querySelectorAll("[data-quote]"))O.onclick=()=>{Z=Number(O.dataset.quote),Y="",E()};for(const O of me.querySelectorAll("[data-slide]"))O.onclick=()=>N("slide",{piece:Z,direction:O.dataset.slide});me.querySelector("#quotes-pair").onclick=()=>N("restart",{scope:"pair"}),me.querySelector("#quotes-hint").onclick=()=>{const O=El({mode:"action",tool:"hint",state:ve()}).result;Y=O.status==="route"?`${O.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[O.next.direction]} · осталось ходов: ${O.remaining}`:O.status==="aligned"?"Обе на месте. Выпускай.":O.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",E()};function E(){if(D){me.querySelector("#quotes-readout").textContent=`пара ${D.level}/3 · ели ${D.trees}/6 · ходы ${D.moves}`,me.querySelector("#quotes-hint-text").textContent=Y;for(const O of me.querySelectorAll("[data-quote]"))O.setAttribute("aria-pressed",Number(O.dataset.quote)===Z);for(const O of me.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))O.disabled=J>0||D.phase==="complete";U.forEach((O,ne)=>O.visible=ne===Z&&D.phase!=="complete")}}function X(O){const ne=k&&h()?"resident":"sandbox",I=D,K=!I||I.run!==O.run||ne!==H;H=ne,K?(w.forEach((ie,W)=>ie.position.set(...S(O.positions[W]))),ee=q.map((ie,W)=>W<O.trees?1:0),j=[null,null],J=0):O.planted>I.planted?(J=1.4,j=w.map((ie,W)=>({from:ie.position.clone(),to:q[(O.planted-1)*2+W].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):O.planted!==I.planted&&(ee=q.map((ie,W)=>W<O.trees?1:0)),D=O,T.forEach((ie,W)=>{if(ie.visible=W<O.rocks.length,ie.visible){const ae=S(O.rocks[W]);ie.position.set(ae[0],.3,ae[2])}}),E()}function te(O){O=Math.min(.1,Math.max(0,O));const ne=ve(),I=(k&&h()?"resident:":"sandbox:")+JSON.stringify(ne);I!==V&&(V=I,X(ne),d());const K=J>0;J=Math.max(0,J-O);for(let ie=0;ie<2;ie++){const W=w[ie],ae=j[ie];if(ae&&J>0)ae.t=Math.min(1,ae.t+O/1.4),W.position.lerpVectors(ae.from,ae.to,ae.t*ae.t*(3-2*ae.t)),W.position.y+=Math.sin(ae.t*Math.PI)*.9,W.scale.setScalar(1-ae.t*.8);else{j[ie]=null,W.scale.setScalar(1);const ye=S(ne.positions[ie]);W.position.x=n.MathUtils.damp(W.position.x,ye[0],12,O),W.position.y=.46,W.position.z=n.MathUtils.damp(W.position.z,ye[2],12,O)}W.visible=!!j[ie]||ne.phase!=="complete"}q.forEach((ie,W)=>{const ae=W<ne.trees?1:0;ee[W]=n.MathUtils.damp(ee[W],ae,J>0?1:5,O),ie.visible=ee[W]>.003,ie.scale.setScalar(Math.max(.001,ee[W]))}),K&&J===0&&(E(),d())}const Q=()=>({action:k&&h()?"попробовать свои ёлочки":D.phase==="complete"?"новый питомник ↺":J>0?"пролезают…":"выпустить пару",description:(k&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+D.message,disabled:J>0});return window.addEventListener("beznogim:state",({detail:O})=>{var I,K;const ne=(K=(I=O.mechanics)==null?void 0:I.quotes)==null?void 0:K.public;ne&&(k=ne)}),X(ve()),V=(k&&h()?"resident:":"sandbox:")+JSON.stringify(ve()),te(0),{house:m,controls:me,update:te,card:Q,run:()=>N(D.phase==="complete"?"restart":"plant",D.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:k&&h()?"resident":"sandbox",...D,busy:J,selected:Z,hint:Y,quotePositions:w.map(O=>O.position.toArray()),treeScales:ee.slice(),visibleTrees:q.filter(O=>O.visible).length})}}function Ju(n){const e=n.state||{},t=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function Ip({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:u,changed:d,watching:h,localPlay:f}){var X,te,Q;const m=s([0,-1.5,-24],e);m.name="punctuation-post";const _=i("#28464d"),g=i("#eee4c9"),p=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,m),r([0,.2,0],[14,.14,7],t.dark,m),r([0,.3,0],[13.6,.04,6.6],p,m);const y=s([0,0,0],m),A=s([0,0,0],m);for(const[R,L]of[[y,"ОТ"],[A,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,R),r([0,1.32,0],[2.12,.12,3.3],g,R),l(L,[0,.9,1.66],1,.36,R,{size:60});const x=s([0,1.43,0],m),S=s([0,0,0],x),b=s([0,0,0],x),T=r([-.5,0,0],[1,.15,.56],_,S),v=r([.5,0,0],[1,.15,.56],_,b),C=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,m)),w=s([0,1.47,0],m);w.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,w),o([-.08,.46,0],[.39,.42,.29],t.copper,w),c([-.08,.47,.3],.23,.033,g,w,[0,0,0]),c([-.08,.47,.315],.12,.03,g,w,[0,0,0]);for(const R of[-.13,.13])a([.4,.17,R],[.62,.46,R],.02,t.leaf,w),o([.62,.46,R],[.055,.065,.055],_,w);r([-.16,.92,0],[.46,.32,.065],g,w),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,w),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,w);const U=s([0,.4,3.9],m);r([0,0,0],[3.6,.22,1],t.copper,U);const q=[".","?","!"].map((R,L)=>{const F=s([-1.1+L*1.1,.42,0],U);return r([0,0,0],[.8,.65,.11],g,F),l(R,[0,.02,.075],.55,.5,F,{size:100}),F});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,m,{size:52});const B=s([0,.55,2.5],m);r([0,0,0],[10,.1,.4],t.copper,B);for(let R=-4;R<=4;R++)r([R,.07,0],[.035,.025,.26],_,B),l(String(R),[R,.08,.32],.4,.28,B,{size:45});for(let R=0;R<16;R++)r([1.5,-.1-R*.09,-5.9-R*.72],[1.05,.14,.65],t.cream,e);for(let R=0;R<8;R++)r([1.5,-1.45,-17.6-R*.5],[1.05,.14,.45],t.cream,e);const k=s([-6.9,.3,3.9],m);a([0,0,0],[0,2.7,0],.07,t.metal,k),r([0,2.7,0],[.8,.14,.8],t.metal,k),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),k),u(w,[]),u(y,[]),u(A,[]),u(m,[y,A,x,...C,w,U]);let D=null,V=((Q=(te=(X=window.__beznogimState)==null?void 0:X.mechanics)==null?void 0:te.dash)==null?void 0:Q.public)||null,H,Z="",Y=1,J=0;try{D=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function ee(R,L,F={}){const O=Ju({mode:R,tool:L,args:F,state:D});D=O.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(D))}catch{}return O}ee("migrate");const j=document.createElement("div");j.id="dash-controls",j.hidden=!0,j.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(R,L)=>`<option value="${L+1}">${L+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(R=>`<option value="${R}">${R>0?"+":""}${R}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(j);const he=()=>V&&h()?V:Ju({mode:"migrate",state:D}).public;function me(R,L){f(),ee("action",R,L),Z="",N(0),d()}j.querySelector("#dash-tune").onclick=()=>me("tune",{span:Number(j.querySelector("#dash-span").value),shift:Number(j.querySelector("#dash-shift").value)}),j.querySelector("#dash-reset").onclick=()=>me("reset");function ve(R){const L=["delivered","complete"].includes(R.phase);L?!H||H.run!==R.run||H.round!==R.round?Y=1:["delivered","complete"].includes(H.phase)||(Y=0):Y=0,H=R,j.querySelector("#dash-readout").textContent=`почта ${R.delivered}/3 · пролёт ${R.gap} · центр ${R.center>0?"+":""}${R.center} · попытки ${R.attempts}`,j.querySelector("#dash-span").value=R.span,j.querySelector("#dash-shift").value=R.shift;for(const F of j.querySelectorAll("select,#dash-tune"))F.disabled=L;y.position.x=R.center-R.gap/2-1,A.position.x=R.center+R.gap/2+1,C[0].position.x=R.center-R.gap/2,C[1].position.x=R.center+R.gap/2,x.position.x=R.shift,T.scale.x=v.scale.x=R.span/2,T.position.x=-R.span/4,v.position.x=R.span/4,q.forEach((F,O)=>F.visible=O<R.delivered)}function N(R){const L=he(),F=JSON.stringify(L);F!==Z&&(Z=F,ve(L),d()),Y=["delivered","complete"].includes(L.phase)?Math.min(1,Y+R/4):0,J=n.MathUtils.damp(J,L.phase==="bent"?.22:0,6,R),S.rotation.z=J,b.rotation.z=-J,x.position.y=1.43-Math.sin(J)*L.span/2,w.position.x=y.position.x+(A.position.x-y.position.x)*(Y*Y*(3-2*Y)),w.position.y=1.47,w.rotation.z=Y>0&&Y<1?Math.sin(Y*30)*.025:0}const E=()=>{const R=H||he();return{action:V&&h()?"попробовать свою почту":R.phase==="complete"?"новая почта ↺":R.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(V&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+R.message}};return window.addEventListener("beznogim:state",({detail:R})=>{var F,O;const L=(O=(F=R.mechanics)==null?void 0:F.dash)==null?void 0:O.public;L&&(V=L)}),ve(he()),Z=JSON.stringify(he()),w.position.x=Y===1?A.position.x:y.position.x,{house:m,controls:j,update:N,card:E,run:()=>{if(Y>0&&Y<1)return;const R=he().phase;me(R==="complete"?"reset":R==="delivered"?"next":"cross")},inspect:()=>({source:V&&h()?"resident":"sandbox",...H,walk:Y,bend:J,snail:w.position.toArray(),beam:x.position.toArray(),left:y.position.x,right:A.position.x,stamps:q.map(R=>R.visible)})}}function Zu(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Dp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:f,localPlay:m}){var te,Q,R;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const g=i("#d0b987"),p=i("#556f7f"),y=i("#a65d42"),A=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const L of[-2,2])r([.5,.96,L],[12.9,1.1,.22],t.copper,_);for(const L of[-6,7])r([L,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(L,F)=>r([-4+F*2,.98,0],[1.9,1,3.7],g,_)),S=r([.5,.54,0],[12.6,.04,3.75],A,_);S.castShadow=!1;const b=Array.from({length:3},(L,F)=>{const O=s([-4+F*2,.35,3.05],_);for(let ne=0;ne<5;ne++)o([(ne-2)*.27,.16+ne%2*.1,0],[.32,.22,.4],g,O);return O}),T=s([-2,1.3,0],_);T.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([L,F],O)=>O?v.lineTo(L,-F):v.moveTo(L,-F)),v.closePath();const C=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});C.rotateX(-Math.PI/2);const w=new n.Mesh(C,p);w.castShadow=!0,w.receiveShadow=!0,T.add(w),r([-.45,.7,0],[4.9,.09,1.4],t.cream,T);for(let L=0;L<3;L++){r([-.95+L*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][L],T);for(const F of[-.601,.601])for(let O=0;O<4;O++)r([-.95+L*.92-.3+O*.2,1.03,F],[.024,.5,.025],t.dark,T)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,T),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,T);for(const L of[-.63,.63])r([-2.25,1.6,L],[.73,.16,.03],t.dark,T);a([-2.45,1.98,0],.15,.43,y,T),a([-2.45,2.21,0],.15,.05,t.dark,T),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,T),r([2.55,1.7,0],[.48,.26,.03],t.cream,T);for(const L of[-2.9,2.1])for(const F of[-.7,.7])c([L,.7,F],[L,1,F],.025,t.cream,T);for(const L of[-.7,.7])c([-2.9,1,L],[2.1,1,L],.025,t.cream,T);const U=s([5.9,1.1,3.4],_);l([0,0,0],.4,.04,t.copper,U,[0,0,0]);for(let L=0;L<4;L++){const F=L*Math.PI/2;c([0,0,0],[.4*Math.cos(F),.4*Math.sin(F),0],.025,t.copper,U)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const q=r([5.9,.8,1.75],[.19,.55,.19],A,_);q.castShadow=!1;const B=s([0,.29,0],_);for(const L of[-2.9,2.9])r([.5,0,L],[13,.02,1.1],A,B);for(let L=0;L<3;L++)u(["КОРМА","ТРЮМ","НОС"][L],[-4+L*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const L of[-6.6,6.6])c([L,.3,-3.8],[L,3.6,-3.8],.08,t.metal,_),r([L,3.6,-3.5],[.55,.16,.8],t.metal,_),r([L,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let L=0;L<15;L++)r([-7.2-L*.72,-.03-L*.09,1.2],[.65,.14,1.12],t.cream,e);const k=s([-6.5,.5,3.3],_);c([0,0,0],[0,1.5,0],.045,t.copper,k),r([0,.1,0],[.32,.35,.08],t.metal,k),l([0,1.53,0],.1,.025,t.metal,k,[0,0,0]),d(T,[]),d(_,[...x,...b,S,T,U,q,B]);let D=null,V=((R=(Q=(te=window.__beznogimState)==null?void 0:te.mechanics)==null?void 0:Q.drydock)==null?void 0:R.public)||null,H,Z="",Y=0,J=0,ee=0;try{D=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function j(L,F,O={}){const ne=Zu({mode:L,tool:F,args:O,state:D});D=ne.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(D))}catch{}return ne}j("migrate");const he=document.createElement("div");he.id="drydock-controls",he.hidden=!0,he.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(he);function me(){return V&&f()?V:Zu({mode:"migrate",state:D}).public}function ve(L,F){m(),j("action",L,F),Z="",X(0),h()}he.querySelectorAll("[data-dig]").forEach(L=>L.onclick=()=>ve("dig",{channel:Number(L.dataset.dig)})),he.querySelector("#drydock-fill").onclick=()=>ve("pump",{direction:"fill"}),he.querySelector("#drydock-drain").onclick=()=>ve("pump",{direction:"drain"}),he.querySelector("#drydock-reset").onclick=()=>ve("reset");function N(L){H?(H.water!==L.water&&(Y=2),H.floods!==L.floods&&(J=3),!H.launched&&L.launched&&(ee=0)):ee=L.launched?1:0,H=L,he.querySelector("#drydock-readout").textContent=`каналы ${L.depths.join(" / ")} · вода ${L.water}/2 · переливы ${L.floods}`,he.querySelectorAll("[data-dig]").forEach(F=>{F.disabled=L.launched||L.water>0||L.depths[Number(F.dataset.dig)]===2}),he.querySelector("#drydock-fill").disabled=L.launched,he.querySelector("#drydock-drain").disabled=L.launched||L.water===0,x.forEach((F,O)=>{const ne=1-L.depths[O]*.4;F.scale.y=ne,F.position.y=.48+ne/2,b[O].scale.setScalar(.45+L.depths[O]*.4)}),S.visible=L.water>0,S.position.y=.49+L.water*.39}function E(){const L=H||me();return{action:V&&f()?"попробовать свой спуск":L.launched?"корабль в песок ↺":"спустить корабль",description:(V&&f()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+L.message}}function X(L){const F=me(),O=JSON.stringify(F);O!==Z&&(Z=O,N(F),h()),Y=Math.max(0,Y-L),J=Math.max(0,J-L),q.visible=Y>0&&F.water>0,B.visible=J>0,U.rotation.z+=Y>0?L*3:0,ee=F.launched?Math.min(1,ee+L/5):0;const ne=ee*ee*(3-2*ee);T.position.x=-2+ne*5.6;const I=Math.min(...F.depths),K=F.afloat?.94:1.15-I*.32;T.position.y=n.MathUtils.damp(T.position.y,K,4,L),T.rotation.z=n.MathUtils.damp(T.rotation.z,F.afloat?0:(F.depths[2]-F.depths[0])*.085,4,L)}return window.addEventListener("beznogim:state",({detail:L})=>{var O,ne;const F=(ne=(O=L.mechanics)==null?void 0:O.drydock)==null?void 0:ne.public;F&&(V=F,Z="")}),N(me()),T.position.x=me().launched?3.6:-2,{house:_,controls:he,update:X,card:E,run:()=>ve(me().launched?"reset":"launch"),inspect:()=>({source:V&&f()?"resident":"sandbox",...H,ship:T.position.toArray(),pitch:T.rotation.z,waterY:S.position.y,voyage:ee,sandHeights:x.map(L=>L.scale.y),floodVisible:B.visible})}}function Ku(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Np({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,changed:d,watching:h,localPlay:f}){var he,me,ve;const m=s([0,0,0],e);m.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),g=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,m),r([.55,1.5,-.713],[1.42,1.04,.035],_,m),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,m);const p=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],y=[];for(let N=0;N<7;N++)for(let E=0;E<9;E++)y.push(r([.55+(E-4)*.145,1.5+(3-N)*.14,-.683],[.13,.12,.02],g,m));const A=s([-1.05,1.24,-.38],m);A.name="core-gear",a([0,0,0],.3,.11,t.copper,A).rotation.x=Math.PI/2;const x=[];for(let N=0;N<12;N++){const E=N/12*Math.PI*2;let X=r([Math.cos(E)*.33,Math.sin(E)*.33,0],[.13,.13,.12],t.copper,A);X.rotation.z=E,x.push(X)}l([0,0,.06],.13,.025,t.dark,A,[0,0,0]);const S=s([-.4,1.12,-.38],m);l([0,0,0],.19,.035,t.dark,S,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,S);const b=s([0,0,0],m);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,b),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,b);const T=s([-1.5,1,-.05],m);c([0,0,0],[.23,0,0],.04,t.metal,T),c([.23,0,0],[.23,.23,0],.04,t.copper,T),o([.23,.23,0],.08,t.rust,T);const v=s([-1.55,1.18,-1.13],m);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),l([0,.29,0],.33,.025,t.copper,v),l([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,m,{size:37});const C=Array.from({length:3},(N,E)=>o([.17+E*.3,2.23,-.82],.06,t.mint,m));let w=null,U=((ve=(me=(he=window.__beznogimState)==null?void 0:he.mechanics)==null?void 0:me.bench)==null?void 0:ve.public)||null,q,B="",k=0;try{w=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function D(N,E,X={}){const te=Ku({mode:N,tool:E,args:X,state:w});w=te.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(w))}catch{}return te}D("migrate");const V=document.createElement("div");V.id="bench-controls",V.hidden=!0,V.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(V);function H(){return U&&h()?U:Ku({mode:"migrate",state:w}).public}function Z(N,E){f(),D("action",N,E),B="",j(0),d()}V.querySelectorAll("[data-part]").forEach(N=>N.onclick=()=>Z("fit",{part:N.dataset.part,value:Number(N.dataset.value)})),V.querySelector("#bench-salvage").onclick=()=>Z("salvage"),V.querySelector("#bench-restart").onclick=()=>Z("restart");function Y(N){q&&q.attempts!==N.attempts&&(k=3),q=N,V.querySelector("#bench-readout").textContent=`экран ${N.round+1}/3 · скорость ${N.speed} / нужно ${N.target}`,V.querySelectorAll("[data-part]").forEach(E=>{E.setAttribute("aria-pressed",String(N[E.dataset.part]===Number(E.dataset.value))),E.disabled=N.phase!=="ready"}),V.querySelector("#bench-salvage").disabled=!N.bucket,_.color.set(N.picture?"#16362c":"#e9e4cc"),_.emissive.set(N.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=N.picture?.1:.6,y.forEach((E,X)=>E.visible=!!N.picture&&p[N.picture-1][X]==="1"),x.forEach((E,X)=>E.visible=X<N.core*3),S.scale.setScalar(.75+N.belt*.25),b.visible=!N.bucket,C.forEach((E,X)=>E.visible=X<N.repairs)}const J={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function ee(){const N=q||H();return{action:U&&h()?"собрать свой монитор":N.phase==="ejected"?"достать ядро":N.phase==="repaired"?N.round===2?"закончить работу":"следующий экран":N.phase==="complete"?"ещё раз":"крутить рукоятку",description:(U&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+J[N.phase]}}function j(N){const E=H(),X=JSON.stringify(E);X!==B&&(B=X,Y(E),d()),k=Math.max(0,k-N);const te=Math.min(1,N*7),Q=E.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];A.position.lerp(new n.Vector3(...Q),te),A.rotation.x=n.MathUtils.lerp(A.rotation.x,E.bucket?-Math.PI/2:0,te);const R=k>0?E.core*2:E.picture?.4:0;A.rotation.z+=N*R,S.rotation.z-=N*R*E.belt,T.rotation.z+=N*R}return window.addEventListener("beznogim:state",({detail:N})=>{var X,te;const E=(te=(X=N.mechanics)==null?void 0:X.bench)==null?void 0:te.public;E&&(U=E,B="")}),Y(H()),A.position.set(...H().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:m,controls:V,update:j,card:ee,run:()=>{const N=H();Z(N.phase==="ejected"?"salvage":N.phase==="repaired"?"next":N.phase==="complete"?"restart":"crank")},inspect:()=>({source:U&&h()?"resident":"sandbox",...q,corePosition:A.position.toArray(),coreAngle:A.rotation.z,driveAngle:S.rotation.z,litPixels:y.filter(N=>N.visible).length})}}const Qu=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function ju(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function eh(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):ju();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,ju(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const u=Qu[e.round],d=u.weights.reduce((h,f,m)=>h+(e.loaded[m]?f+(e.pardoned?0:u.debt[m]):0),0);e.attempts++,d!==u.target?(e.status=d<u.target?"under":"over",i={ok:!1,reason:e.status,total:d,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,f)=>{e.loaded[f]&&e.delivered.push({id:`${e.run}:${e.round}:${f}`,weight:h})}),i={ok:!0,total:d,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=Qu[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,u)=>c+(e.loaded[u]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Up({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:d,changed:h,watching:f,localPlay:m}){var E,X,te;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const g=i("#9d8560"),p=i("#a1b56f"),y=i("#f1d29a"),A=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],A,_),r([3.65,-.14,0],[3.3,.5,7],A,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const Q of[-4.9,4.9])c([Q,0,-3],[Q,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],g,_);const x=s([0,.2,1.15],_);for(let Q=0;Q<11;Q++)r([-2+Q*.4,0,0],[.38,.16,1.65],g,x);for(const Q of[-.72,.72])c([-2.2,.22,Q],[2.2,.22,Q],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const S=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,S);for(const Q of[-.52,.52])for(const R of[-.58,.58]){const L=l([Q,0,R],.17,.05,t.dark,S,[0,0,0]);L.rotation.y=Math.PI/2}const b=s([-4.7,.8,1.4],_);c([0,-.5,0],[0,.2,0],.1,t.metal,b);const T=s([0,0,0],b);c([0,0,0],[0,.8,0],.065,t.copper,T),o([0,.8,0],.14,t.rust,T),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const C=a([0,.7,0],.57,1.1,t.copper,v);l([0,1.28,0],.25,.045,t.dark,v);const w=Array.from({length:3},(Q,R)=>o([1.75+R*.34,2.15,-3.05],.095,t.mint,_)),U=Array.from({length:3},(Q,R)=>{const L=s([-3.6,.72,-2.1+R*1.08],_),F=o([0,0,0],[.28,.23,.57],p,L);F.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,L);const O=s([.45,.28,0],L);return r([0,0,0],[.29,.57,.4],y,O),r([0,0,.21],[.18,.045,.012],t.rust,O),{g:L,tax:O}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],g,_);const q=Array.from({length:6},(Q,R)=>o([2.75+R%3*.7,1,-2.1+Math.floor(R/3)*.83],[.2,.19,.38],p,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const B=s([0,0,0],e);for(let Q=0;Q<15;Q++){const R=Q/14;r([-.6+Math.sin(R*Math.PI)*1.5,-1.55,17+Q*.3],[.9,.12,.65],A,B)}for(let Q=0;Q<5;Q++)r([-.8-Q*.6,-1.55,21.5],[.75,.12,.75],A,B);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,B,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,B),d(B,[]),d(_,[x,S,b,v,...U.map(Q=>Q.g),...q,...w]),d(x,[]),d(S,[]);let k=null,D=((te=(X=(E=window.__beznogimState)==null?void 0:E.mechanics)==null?void 0:X.amnesty)==null?void 0:te.public)||null,V,H="",Z=0;try{k=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function Y(Q,R,L={}){const F=eh({state:k,mode:Q,tool:R,args:L});k=F.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(k))}catch{}return F}Y("migrate");const J=document.createElement("div");J.id="amnesty-controls",J.hidden=!0,J.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(J);function ee(){return D&&f()?D:eh({state:k,mode:"migrate"}).public}function j(Q,R){m(),Y("action",Q,R),H="",N(0),h()}for(const Q of J.querySelectorAll("[data-load]"))Q.onclick=()=>j("load",{index:Number(Q.dataset.load)});J.querySelector("#amnesty-pardon").onclick=()=>j("amnesty"),J.querySelector("#amnesty-restart").onclick=()=>j("restart");const he={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function me(Q){V=Q;const R=Q.status==="delivered"||Q.status==="complete";J.querySelector("#amnesty-readout").textContent=`рейс ${Q.round+1}/3 · груз ${Q.total} / нужно ${Q.target}`,J.querySelectorAll("[data-load]").forEach((L,F)=>{L.textContent=`${["A","B","C"][F]} · ${Q.weights[F]}${Q.debt[F]?` + ${Q.debt[F]} бумага`:""}`,L.setAttribute("aria-pressed",String(Q.loaded[F])),L.disabled=R}),J.querySelector("#amnesty-pardon").disabled=Q.pardoned||R,J.querySelector("#amnesty-pardon").textContent=Q.pardoned?"налог отменён":"отменить налог",C.scale.y=Q.target/4,w.forEach((L,F)=>L.visible=F<(Q.status==="complete"?3:Q.round)),q.forEach((L,F)=>L.visible=F<Q.delivered.length),U.forEach((L,F)=>{L.tax.visible=!Q.pardoned||Z<.99,L.g.visible=!R||!Q.loaded[F],L.g.scale.setScalar(.8+Q.weights[F]*.08)})}function ve(){const Q=V||ee();return{action:D&&f()?"войти в свою амнистию":Q.status==="delivered"?"следующий рейс":Q.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(D&&f()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+he[Q.status]}}function N(Q,R){const L=ee(),F=JSON.stringify(L);F!==H&&(H=F,me(L),h());const O=L.status==="delivered"||L.status==="complete",ne=(I,K)=>n.MathUtils.lerp(I,K,Math.min(1,Q*5));x.rotation.z=ne(x.rotation.z,L.tilt),S.position.x=ne(S.position.x,O?3:-2.55),T.rotation.z=ne(T.rotation.z,L.pardoned?-.65:0),Z=ne(Z,L.pardoned?1:0),U.forEach(I=>{I.tax.position.y=.28+Z*2.5,I.tax.rotation.z=Z*.8,I.tax.visible=!L.pardoned||Z<.99}),q.forEach((I,K)=>I.visible=K<L.delivered.length-(O&&S.position.x<2.9?2:0)),U.forEach((I,K)=>{const ie=L.loaded[K];I.g.visible=!O||!ie||S.position.x<2.9,I.g.position.x=ne(I.g.position.x,ie?S.position.x+(K-1)*.42:-3.6),I.g.position.y=ne(I.g.position.y,ie?.86:.72),I.g.position.z=ne(I.g.position.z,ie?1.15:-2.1+K*1.08)})}return window.addEventListener("beznogim:state",({detail:Q})=>{var L,F;const R=(F=(L=Q.mechanics)==null?void 0:L.amnesty)==null?void 0:F.public;R&&(D=R,H="")}),Z=ee().pardoned?1:0,me(ee()),{house:_,controls:J,update:N,card:ve,run:()=>j(V.status==="delivered"?"next":V.status==="complete"?"restart":"dispatch"),inspect:()=>({source:D&&f()?"resident":"sandbox",...V,bridgeTilt:x.rotation.z,cartX:S.position.x,cargoPositions:U.map(Q=>Q.g.position.toArray()),taxVisible:U.map(Q=>Q.tax.visible),paperY:U.map(Q=>Q.tax.position.y),handleAngle:T.rotation.z,deliveredVisible:q.filter(Q=>Q.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="186",Ei={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,cc=1,yd=2,qs=1,Md=2,Vs=3,Ki=0,gn=1,Ln=2,di=0,Ys=1,uc=2,hc=3,dc=4,Sd=5,ds=100,bd=101,Ed=102,wd=103,Td=104,Ad=200,Cd=201,Rd=202,Pd=203,Uc=204,Oc=205,Ld=206,Id=207,Dd=208,Nd=209,Ud=210,Od=211,Fd=212,zd=213,kd=214,Jo=0,Zo=1,Ko=2,Ks=3,Qo=4,jo=5,ea=6,ta=7,Fc=0,Bd=1,Gd=2,Zn=0,zc=1,kc=2,Bc=3,Ha=4,Gc=5,Vc=6,Hc=7,Wc=300,Qi=301,vs=302,ko=303,Bo=304,Jr=306,Fr=1e3,ci=1001,na=1002,Kt=1003,Vd=1004,br=1005,en=1006,Go=1007,Wi=1008,yn=1009,Xc=1010,qc=1011,Qs=1012,Wa=1013,jn=1014,Nn=1015,ei=1016,Xa=1017,qa=1018,js=1020,Yc=35902,$c=35899,Jc=1021,Zc=1022,Un=1023,mi=1026,Xi=1027,Ya=1028,$a=1029,ji=1030,Ja=1031,Za=1033,Rr=33776,Pr=33777,Lr=33778,Ir=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ua=37488,ha=37489,zr=37490,da=37491,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,ya=37815,Ma=37816,Sa=37817,ba=37818,Ea=37819,wa=37820,Ta=37821,Aa=36492,Ca=36494,Ra=36495,Pa=36283,La=36284,kr=36285,Ia=36286,Hd=3200,Da=0,Wd=1,Mi="",cn="srgb",Br="srgb-linear",Gr="linear",bt="srgb",Vo=7680,Xd=519,qd=512,Yd=513,$d=514,Ka=515,Jd=516,Zd=517,Qa=518,Kd=519,Qd=35044,fc="300 es",Jn=2e3,er=2001;function Op(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jd(){const n=Na("canvas");return n.style.display="block",n}const th={};function pc(...n){const e="THREE."+n.shift();console.log(e,...n)}function ef(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=ef(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function pt(...n){n=ef(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function gs(...n){const e=n.join(" ");e in th||(th[e]=!0,et(...n))}function Fp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const zp={[Jo]:Zo,[Ko]:ea,[Qo]:ta,[Ks]:jo,[Zo]:Jo,[ea]:Ko,[ta]:Qo,[jo]:Ks};class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const Dr=Math.PI/180,Vr=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function Kc(n,e){return(n%e+e)%e}function kp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Bp(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function Gp(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function Vp(n,e=1){return e-Math.abs(Kc(n,e*2)-e)}function Hp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qp(n,e){return n+Math.random()*(e-n)}function Yp(n){return n*(.5-Math.random())}function $p(n){n!==void 0&&(nh=n);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(n){return n*Dr}function Zp(n){return n*Vr}function Kp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Qp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function em(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*u,a*l);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:Dr,RAD2DEG:Vr,generateUUID:ys,clamp:ct,euclideanModulo:Kc,mapLinear:kp,inverseLerp:Bp,lerp:Nr,damp:Gp,pingpong:Vp,smoothstep:Hp,smootherstep:Wp,randInt:Xp,randFloat:qp,randFloatSpread:Yp,seededRandom:$p,degToRad:Jp,radToDeg:Zp,isPowerOfTwo:Kp,ceilPowerOfTwo:Qp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:em,normalize:dn,denormalize:Gs},Du=class Du{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Du.prototype.isVector2=!0;let we=Du;class Li{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||c!==h||l!==f||u!==m){let g=c*h+l*f+u*m+d*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const y=Math.acos(g),A=Math.sin(y);p=Math.sin(p*y)/A,a=Math.sin(a*y)/A,c=c*p+h*a,l=l*p+f*a,u=u*p+m*a,d=d*p+_*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+m*a,d=d*p+_*a;const y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*d+c*f-l*h,e[t+1]=c*m+u*h+l*d-a*f,e[t+2]=l*m+u*f+a*h-c*d,e[t+3]=u*m-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"YZX":this._x=h*u*d+l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d-h*f*m;break;case"XZY":this._x=h*u*d-l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d+h*f*m;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nu=class Nu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nu.prototype.isVector3=!0;let z=Nu;const wl=new z,ih=new Li,Uu=class Uu{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],y=s[1],A=s[4],x=s[7],S=s[2],b=s[5],T=s[8];return r[0]=o*_+a*y+c*S,r[3]=o*g+a*A+c*b,r[6]=o*p+a*x+c*T,r[1]=l*_+u*y+d*S,r[4]=l*g+u*A+d*b,r[7]=l*p+u*x+d*T,r[2]=h*_+f*y+m*S,r[5]=h*g+f*A+m*b,r[8]=h*p+f*x+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,m=t*d+i*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uu.prototype.isMatrix3=!0;let nt=Uu;const Tl=new nt,sh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){const n={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Br]:{primaries:e,whitePoint:i,transfer:Gr,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const ft=tm();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let As;class tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=Na("canvas")),As.width=e.width,As.height=e.height;const s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nm=0;class ja{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let im=0;const Cl=new z;class nn extends Di{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=ci,s=ci,r=en,o=Wi,a=Un,c=yn,l=nn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ys(),this.name="",this.source=new ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Wc;nn.DEFAULT_ANISOTROPY=1;const Ou=class Ou{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,x=(f+1)/2,S=(p+1)/2,b=(u+h)/4,T=(d+_)/4,v=(m+g)/4;return A>x&&A>S?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=b/i,r=T/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=T/r,s=v/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ou.prototype.isVector4=!0;let Ut=Ou;class nf extends Di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new nn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ja(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends nf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qc extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ga=class Ga{constructor(e,t,i,s,r,o,a,c,l,u,d,h,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,f,m,_,g)}set(e,t,i,s,r,o,a,c,l,u,d,h,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,m=l*u,_=l*d;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,m=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=c*u,t[4]=m*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ki.crossVectors(i,bn),ki.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ki.crossVectors(i,bn)),ki.normalize(),lo.crossVectors(bn,ki),s[0]=ki.x,s[4]=lo.x,s[8]=bn.x,s[1]=ki.y,s[5]=lo.y,s[9]=bn.y,s[2]=ki.z,s[6]=lo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],y=i[3],A=i[7],x=i[11],S=i[15],b=s[0],T=s[4],v=s[8],C=s[12],w=s[1],U=s[5],q=s[9],B=s[13],k=s[2],D=s[6],V=s[10],H=s[14],Z=s[3],Y=s[7],J=s[11],ee=s[15];return r[0]=o*b+a*w+c*k+l*Z,r[4]=o*T+a*U+c*D+l*Y,r[8]=o*v+a*q+c*V+l*J,r[12]=o*C+a*B+c*H+l*ee,r[1]=u*b+d*w+h*k+f*Z,r[5]=u*T+d*U+h*D+f*Y,r[9]=u*v+d*q+h*V+f*J,r[13]=u*C+d*B+h*H+f*ee,r[2]=m*b+_*w+g*k+p*Z,r[6]=m*T+_*U+g*D+p*Y,r[10]=m*v+_*q+g*V+p*J,r[14]=m*C+_*B+g*H+p*ee,r[3]=y*b+A*w+x*k+S*Z,r[7]=y*T+A*U+x*D+S*Y,r[11]=y*v+A*q+x*V+S*J,r[15]=y*C+A*B+x*H+S*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],y=c*f-l*h,A=a*f-l*d,x=a*h-c*d,S=o*f-l*u,b=o*h-c*u,T=o*d-a*u;return t*(_*y-g*A+p*x)-i*(m*y-g*S+p*b)+s*(m*A-_*S+p*T)-r*(m*x-_*b+g*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=t*a-i*o,A=t*c-s*o,x=t*l-r*o,S=i*c-s*a,b=i*l-r*a,T=s*l-r*c,v=u*_-d*m,C=u*g-h*m,w=u*p-f*m,U=d*g-h*_,q=d*p-f*_,B=h*p-f*g,k=y*B-A*q+x*U+S*w-b*C+T*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/k;return e[0]=(a*B-c*q+l*U)*D,e[1]=(s*q-i*B-r*U)*D,e[2]=(_*T-g*b+p*S)*D,e[3]=(h*b-d*T-f*S)*D,e[4]=(c*w-o*B-l*C)*D,e[5]=(t*B-s*w+r*C)*D,e[6]=(g*x-m*T-p*A)*D,e[7]=(u*T-h*x+f*A)*D,e[8]=(o*q-a*w+l*v)*D,e[9]=(i*w-t*q-r*v)*D,e[10]=(m*b-_*x+p*y)*D,e[11]=(d*x-u*b-f*y)*D,e[12]=(a*C-o*U-c*v)*D,e[13]=(t*U-i*C+s*v)*D,e[14]=(_*A-m*S-g*y)*D,e[15]=(u*S-d*A+h*y)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,m=r*d,_=o*u,g=o*d,p=a*d,y=c*l,A=c*u,x=c*d,S=i.x,b=i.y,T=i.z;return s[0]=(1-(_+p))*S,s[1]=(f+x)*S,s[2]=(m-A)*S,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(h+p))*b,s[6]=(g+y)*b,s[7]=0,s[8]=(m+A)*T,s[9]=(g-y)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length();const a=Cs.set(s[4],s[5],s[6]).length(),c=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const l=1/o,u=1/a,d=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Jn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Jn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===er)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Jn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===er)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ga.prototype.isMatrix4=!0;let xt=Ga;const Cs=new z,Vn=new xt,sm=new z(0,0,0),rm=new z(1,1,1),ki=new z,lo=new z,bn=new z,oh=new xt,ah=new Li;class Ii{constructor(e=0,t=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let om=0;const lh=new z,Rs=new Li,gi=new xt,co=new z,hr=new z,am=new z,lm=new Li,ch=new z(1,0,0),uh=new z(0,1,0),hh=new z(0,0,1),dh={type:"added"},cm={type:"removed"},Ps={type:"childadded",child:null},Rl={type:"childremoved",child:null};class Gt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,t=new Ii,i=new Li,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new nt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?co.copy(e):co.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(hr,co,this.up):gi.lookAt(co,hr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(gi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const um={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(um)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=Kc(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pl(o,r,e+1/3),this.g=Pl(o,r,e),this.b=Pl(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=rf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ft.workingToColorSpace(ln.copy(this),e),Math.round(ct(ln.r*255,0,255))*65536+Math.round(ct(ln.g*255,0,255))*256+Math.round(ct(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){ft.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(uo);const i=Nr(Bi.h,uo.h,t),s=Nr(Bi.s,uo.s,t),r=Nr(Bi.l,uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ut;ut.NAMES=rf;class tl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class of extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new z,_i=new z,Ll=new z,vi=new z,Ls=new z,Is=new z,fh=new z,Il=new z,Dl=new z,Nl=new z,Ul=new Ut,Ol=new Ut,Fl=new Ut;class In{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),_i.subVectors(i,t),Ll.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(_i),c=Hn.dot(Ll),l=_i.dot(_i),u=_i.dot(Ll),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ul.setScalar(0),Ol.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,i),Fl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ul,r.x),o.addScaledVector(Ol,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),_i.subVectors(e,t),Hn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Hn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Is.subVectors(r,i),Il.subVectors(e,i);const c=Ls.dot(Il),l=Is.dot(Il);if(c<=0&&l<=0)return t.copy(i);Dl.subVectors(e,s);const u=Ls.dot(Dl),d=Is.dot(Dl);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ls,o);Nl.subVectors(e,r);const f=Ls.dot(Nl),m=Is.dot(Nl);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Is,a);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return fh.subVectors(r,s),a=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(fh,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ts{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fo.subVectors(this.max,dr),Ds.subVectors(e.a,dr),Ns.subVectors(e.b,dr),Us.subVectors(e.c,dr),Gi.subVectors(Ns,Ds),Vi.subVectors(Us,Ns),rs.subVectors(Ds,Us);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-rs.z,rs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,rs.z,0,-rs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-rs.y,rs.x,0];return!zl(t,Ds,Ns,Us,fo)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,Ds,Ns,Us,fo))?!1:(po.crossVectors(Gi,Vi),t=[po.x,po.y,po.z],zl(t,Ds,Ns,Us,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new z,new z,new z,new z,new z,new z,new z,new z],Wn=new z,ho=new ts,Ds=new z,Ns=new z,Us=new z,Gi=new z,Vi=new z,rs=new z,dr=new z,fo=new z,po=new z,os=new z;function zl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);const a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),l=t.dot(os),u=i.dot(os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Wt=new z,mo=new we;let hm=0;class Fn extends Di{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class jc extends Fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eu extends Fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends Fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const dm=new ts,fr=new z,kl=new z;class ns{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(kl)),this.expandByPoint(fr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fm=0;const Cn=new xt,Bl=new Gt,Os=new z,En=new ts,pr=new ts,Zt=new z;class Vt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Op(e)?eu:jc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(En.min,pr.min),En.expandByPoint(Zt),Zt.addVectors(En.max,pr.max),En.expandByPoint(Zt)):(En.expandByPoint(pr.min),En.expandByPoint(pr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(e,l),Zt.add(Os)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new z,c[v]=new z;const l=new z,u=new z,d=new z,h=new we,f=new we,m=new we,_=new z,g=new z;function p(v,C,w){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,w),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,w),u.sub(l),d.sub(l),f.sub(h),m.sub(h);const U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(U),a[v].add(_),a[C].add(_),a[w].add(_),c[v].add(g),c[C].add(g),c[w].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,C=y.length;v<C;++v){const w=y[v],U=w.start,q=w.count;for(let B=U,k=U+q;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new z,x=new z,S=new z,b=new z;function T(v){S.fromBufferAttribute(s,v),b.copy(S);const C=a[v];A.copy(C),A.sub(S.multiplyScalar(S.dot(C))).normalize(),x.crossVectors(b,C);const U=x.dot(c[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,U)}for(let v=0,C=y.length;v<C;++v){const w=y[v],U=w.start,q=w.count;for(let B=U,k=U+q;B<k;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,d=new z;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[m++]=l[f++]}return new Fn(h,u,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new z,pm=new z,mm=new nt;class li{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Gl.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||mm.getNormalMatrix(e),s=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let gm=0;class is extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Ys,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Oc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new li().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new we().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new z,Vl=new z,go=new z,_o=new z;class rr{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vl.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),_o.copy(this.origin).sub(Vl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(go),a=_o.dot(this.direction),c=-_o.dot(go),l=_o.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*c-a,h=o*a-c,m=r*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=m?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vl).addScaledVector(go,h),f}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,g=t.z-o.z,p=i.x-o.x,y=i.y-o.y,A=i.z-o.z,x=Math.abs(c),S=Math.abs(l),b=Math.abs(u);let T,v,C,w,U,q,B,k,D,V,H,Z;if(x>=S&&x>=b?(C=c,q=d,D=m,Z=p,c>=0?(T=l,v=u,w=h,U=f,B=_,k=g,V=y,H=A):(T=u,v=l,w=f,U=h,B=g,k=_,V=A,H=y)):S>=b?(C=l,q=h,D=_,Z=y,l>=0?(T=u,v=c,w=f,U=d,B=g,k=m,V=A,H=p):(T=c,v=u,w=d,U=f,B=m,k=g,V=p,H=A)):(C=u,q=f,D=g,Z=A,u>=0?(T=c,v=l,w=d,U=h,B=m,k=_,V=p,H=y):(T=l,v=c,w=h,U=d,B=_,k=m,V=y,H=p)),C===0)return null;const Y=T/C,J=v/C,ee=1/C,j=w-Y*q,he=U-J*q,me=B-Y*D,ve=k-J*D,N=V-Y*Z,E=H-J*Z,X=N*ve-E*me,te=j*E-he*N,Q=me*he-ve*j;if(s){if(X<0||te<0||Q<0)return null}else if((X<0||te<0||Q<0)&&(X>0||te>0||Q>0))return null;const R=X+te+Q;if(R===0)return null;const L=ee*(X*q+te*D+Q*Z);return(R>0?L<0:L>0)?null:this.at(L/R,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zr extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ph=new xt,as=new rr,vo=new ns,mh=new z,xo=new z,yo=new z,Mo=new z,Hl=new z,So=new z,gh=new z,bo=new z;class _n extends Gt{constructor(e=new Vt,t=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Hl.fromBufferAttribute(d,e),o?So.addScaledVector(Hl,u):So.addScaledVector(Hl.sub(t),u))}t.add(So)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(vo.containsPoint(as.origin)===!1&&(as.intersectSphere(vo,mh)===null||as.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),as.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),A=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,S=A;x<S;x+=3){const b=a.getX(x),T=a.getX(x+1),v=a.getX(x+2);s=Eo(this,p,e,i,l,u,d,b,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),A=a.getX(g+1),x=a.getX(g+2);s=Eo(this,o,e,i,l,u,d,y,A,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,S=A;x<S;x+=3){const b=x,T=x+1,v=x+2;s=Eo(this,p,e,i,l,u,d,b,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=g,A=g+1,x=g+2;s=Eo(this,o,e,i,l,u,d,y,A,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function _m(n,e,t,i,s,r,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ki,a),c===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bo);return l<t.near||l>t.far?null:{distance:l,point:bo.clone(),object:n}}function Eo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,xo),n.getVertexPosition(c,yo),n.getVertexPosition(l,Mo);const u=_m(n,e,t,i,xo,yo,Mo,gh);if(u){const d=new z;In.getBarycoord(gh,xo,yo,Mo,d),s&&(u.uv=In.getInterpolatedAttribute(s,a,c,l,d,new we)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,c,l,d,new we)),o&&(u.normal=In.getInterpolatedAttribute(o,a,c,l,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new z,materialIndex:0};In.getNormal(xo,yo,Mo,h.normal),u.face=h,u.barycoord=d}return u}class tu extends nn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Kt,u=Kt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mc extends Fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new xt,_h=new xt,wo=[],vh=new ts,vm=new xt,mr=new _n,gr=new ns;class gc extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fs),vh.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fs),gr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),_h.multiplyMatrices(i,Fs),mr.matrixWorld=_h,mr.raycast(e,wo);for(let o=0,a=wo.length;o<a;o++){const c=wo[o];c.instanceId=r,c.object=this,t.push(c)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new tu(new Float32Array(s*this.count),s,this.count,Ya,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ls=new ns,xm=new we(.5,.5),To=new z;class nl{constructor(e=new li,t=new li,i=new li,s=new li,r=new li,o=new li){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],A=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,f-u,p-m,S-y).normalize(),s[1].setComponents(l+o,f+u,p+m,S+y).normalize(),s[2].setComponents(l+a,f+d,p+_,S+A).normalize(),s[3].setComponents(l-a,f-d,p-_,S-A).normalize(),i)s[4].setComponents(c,h,g,x).normalize(),s[5].setComponents(l-c,f-h,p-g,S-x).normalize();else if(s[4].setComponents(l-c,f-h,p-g,S-x).normalize(),t===Jn)s[5].setComponents(l+c,f+h,p+g,S+x).normalize();else if(t===er)s[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=xm.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nu extends is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ua=new z,Oa=new z,xh=new xt,_r=new rr,Ao=new ns,Wl=new z,yh=new z;class ym extends Gt{constructor(e=new Vt,t=new nu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ua.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ua.distanceTo(Oa);e.setAttribute("lineDistance",new yt(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;xh.copy(s).invert(),_r.copy(e.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),y=u.getX(_+1),A=Co(this,e,_r,c,p,y,_);A&&t.push(A)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Co(this,e,_r,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=Co(this,e,_r,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Co(this,e,_r,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Co(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ua.fromBufferAttribute(a,s),Oa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ua,Oa,Wl,yh)>i)return;Wl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wl);if(!(l<e.near||l>e.far))return{distance:l,point:yh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class iu extends is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mh=new xt,_c=new rr,Ro=new ns,Po=new z;class af extends Gt{constructor(e=new Vt,t=new iu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Mh.copy(s).invert(),_c.copy(e.ray).applyMatrix4(Mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=h,_=f;m<_;m++){const g=l.getX(m);Po.fromBufferAttribute(d,g),Sh(Po,g,c,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=h,_=f;m<_;m++)Po.fromBufferAttribute(d,m),Sh(Po,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sh(n,e,t,i,s,r,o){const a=_c.distanceSqToPoint(n);if(a<t){const c=new z;_c.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class su extends nn{constructor(e=[],t=Qi,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends nn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tr extends nn{constructor(e,t,i=jn,s,r,o,a=Kt,c=Kt,l,u=mi,d=1){if(u!==mi&&u!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class lf extends tr{constructor(e,t=jn,i=Qi,s,r,o=Kt,a=Kt,c,l=mi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ou extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ni extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function m(_,g,p,y,A,x,S,b,T,v,C){const w=x/T,U=S/v,q=x/2,B=S/2,k=b/2,D=T+1,V=v+1;let H=0,Z=0;const Y=new z;for(let J=0;J<V;J++){const ee=J*U-B;for(let j=0;j<D;j++){const he=j*w-q;Y[_]=he*y,Y[g]=ee*A,Y[p]=k,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(j/T),d.push(1-J/v),H+=1}}for(let J=0;J<v;J++)for(let ee=0;ee<T;ee++){const j=h+ee+D*J,he=h+ee+D*(J+1),me=h+(ee+1)+D*(J+1),ve=h+(ee+1)+D*J;c.push(j,he,ve),c.push(he,me,ve),Z+=6}a.addGroup(f,Z,C),f+=Z,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class il extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new z,u=new we;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kr extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let m=0;const _=[],g=i/2;let p=0;y(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function y(){const x=new z,S=new z;let b=0;const T=(t-e)/i;for(let v=0;v<=r;v++){const C=[],w=v/r,U=w*(t-e)+e;for(let q=0;q<=s;q++){const B=q/s,k=B*c+a,D=Math.sin(k),V=Math.cos(k);S.x=U*D,S.y=-w*i+g,S.z=U*V,d.push(S.x,S.y,S.z),x.set(D,T,V).normalize(),h.push(x.x,x.y,x.z),f.push(B,1-w),C.push(m++)}_.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){const w=_[C][v],U=_[C+1][v],q=_[C+1][v+1],B=_[C][v+1];(e>0||C!==0)&&(u.push(w,U,B),b+=3),(t>0||C!==r-1)&&(u.push(U,q,B),b+=3)}l.addGroup(p,b,0),p+=b}function A(x){const S=m,b=new we,T=new z;let v=0;const C=x===!0?e:t,w=x===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,g*w,0),h.push(0,w,0),f.push(.5,.5),m++;const U=m;for(let q=0;q<=s;q++){const k=q/s*c+a,D=Math.cos(k),V=Math.sin(k);T.x=C*V,T.y=g*w,T.z=C*D,d.push(T.x,T.y,T.z),h.push(0,w,0),b.x=D*.5+.5,b.y=V*.5*w+.5,f.push(b.x,b.y),m++}for(let q=0;q<s;q++){const B=S+q,k=U+q;x===!0?u.push(k,k+1,B):u.push(k+1,k,B),v+=3}l.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ms extends Kr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ms(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends Vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const A=new z,x=new z,S=new z;for(let b=0;b<t.length;b+=3)f(t[b+0],A),f(t[b+1],x),f(t[b+2],S),c(A,x,S,y)}function c(y,A,x,S){const b=S+1,T=[];for(let v=0;v<=b;v++){T[v]=[];const C=y.clone().lerp(x,v/b),w=A.clone().lerp(x,v/b),U=b-v;for(let q=0;q<=U;q++)q===0&&v===b?T[v][q]=C:T[v][q]=C.clone().lerp(w,q/U)}for(let v=0;v<b;v++)for(let C=0;C<2*(b-v)-1;C++){const w=Math.floor(C/2);C%2===0?(h(T[v][w+1]),h(T[v+1][w]),h(T[v][w])):(h(T[v][w+1]),h(T[v+1][w+1]),h(T[v+1][w]))}}function l(y){const A=new z;for(let x=0;x<r.length;x+=3)A.x=r[x+0],A.y=r[x+1],A.z=r[x+2],A.normalize().multiplyScalar(y),r[x+0]=A.x,r[x+1]=A.y,r[x+2]=A.z}function u(){const y=new z;for(let A=0;A<r.length;A+=3){y.x=r[A+0],y.y=r[A+1],y.z=r[A+2];const x=g(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;o.push(x,1-S)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){const A=o[y+0],x=o[y+2],S=o[y+4],b=Math.max(A,x,S),T=Math.min(A,x,S);b>.9&&T<.1&&(A<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,A){const x=y*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function m(){const y=new z,A=new z,x=new z,S=new z,b=new we,T=new we,v=new we;for(let C=0,w=0;C<r.length;C+=9,w+=6){y.set(r[C+0],r[C+1],r[C+2]),A.set(r[C+3],r[C+4],r[C+5]),x.set(r[C+6],r[C+7],r[C+8]),b.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),v.set(o[w+4],o[w+5]),S.copy(y).add(A).add(x).divideScalar(3);const U=g(S);_(b,w+0,y,U),_(T,w+2,A,U),_(v,w+4,x,U)}}function _(y,A,x,S){S<0&&y.x===1&&(o[A]=y.x-1),x.x===0&&x.z===0&&(o[A]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.vertices,e.indices,e.radius,e.detail)}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new we:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,s=[],r=[],o=[],a=new z,c=new xt;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rl extends ni{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new we){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cf extends rl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const bh=new z,Eh=new z,Xl=new au,ql=new au,Yl=new au;class lu extends ni{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Eh.subVectors(s[0],s[1]).add(s[0]),l=Eh);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(bh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Xl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,m,_,g),ql.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,m,_,g),Yl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Xl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),ql.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Yl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Xl.calc(c),ql.calc(c),Yl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Mm(n,e){const t=1-n;return t*t*e}function Sm(n,e){return 2*(1-n)*n*e}function bm(n,e){return n*n*e}function Ur(n,e,t,i){return Mm(n,e)+Sm(n,t)+bm(n,i)}function Em(n,e){const t=1-n;return t*t*t*e}function wm(n,e){const t=1-n;return 3*t*t*n*e}function Tm(n,e){return 3*(1-n)*n*n*e}function Am(n,e){return n*n*n*e}function Or(n,e,t,i,s){return Em(n,e)+wm(n,t)+Tm(n,i)+Am(n,s)}class cu extends ni{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uf extends ni{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y),Or(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uu extends ni{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hf extends ni{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hu extends ni{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends ni{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(e,s.x,r.x,o.x),Ur(e,s.y,r.y,o.y),Ur(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fu extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(wh(a,c.x,l.x,u.x,d.x),wh(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var Fa=Object.freeze({__proto__:null,ArcCurve:cf,CatmullRomCurve3:lu,CubicBezierCurve:cu,CubicBezierCurve3:uf,EllipseCurve:rl,LineCurve:uu,LineCurve3:hf,QuadraticBezierCurve:hu,QuadraticBezierCurve3:du,SplineCurve:fu});class df extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Fa[s.type]().fromJSON(s))}return this}}class vc extends df{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new uu(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new hu(this.currentPoint.clone(),new we(e,t),new we(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new cu(this.currentPoint.clone(),new we(e,t),new we(i,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new fu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new rl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qr extends vc{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new vc().fromJSON(s))}return this}}function Cm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=ff(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Dm(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,d=c;for(let h=t;h<s;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>d&&(d=m)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Hr(r,o,t,a,c,l,0),o}function ff(n,e,t,i,s){let r;if(s===Wm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Th(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Th(o/i|0,n[o],n[o+1],r);return r&&nr(r,r.next)&&(Xr(r),r=r.next),r}function xs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&zm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Pm(n,i,s,r):Rm(n)){e.push(c.i,n.i,l.i),Xr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Lm(xs(n),e),Hr(n,e,t,i,s,r,2)):o===2&&Im(n,e,t,i,s,r):Hr(xs(n),e,t,i,s,r,1);break}}}function Rm(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Er(s,a,r,c,o,l,m.x,m.y)&&zt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),m=Math.min(u,d,h),_=Math.max(a,c,l),g=Math.max(u,d,h),p=xc(f,m,e,t,i),y=xc(_,g,e,t,i);let A=n.prevZ,x=n.nextZ;for(;A&&A.z>=p&&x&&x.z<=y;){if(A.x>=f&&A.x<=_&&A.y>=m&&A.y<=g&&A!==s&&A!==o&&Er(a,u,c,d,l,h,A.x,A.y)&&zt(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Er(a,u,c,d,l,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=_&&A.y>=m&&A.y<=g&&A!==s&&A!==o&&Er(a,u,c,d,l,h,A.x,A.y)&&zt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Er(a,u,c,d,l,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Lm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!nr(i,s)&&mf(i,t,t.next,s)&&Wr(i,s)&&Wr(s,i)&&(e.push(i.i,t.i,s.i),Xr(t),Xr(t.next),t=n=s),t=t.next}while(t!==n);return xs(t)}function Im(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gm(o,a)){let c=gf(o,a);o=xs(o,o.next),c=xs(c,c.next),Hr(o,e,t,i,s,r,0),Hr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Dm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=ff(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Bm(l))}s.sort(Nm);for(let r=0;r<s.length;r++)t=Um(s[r],t);return t}function Nm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Um(n,e){const t=Om(n,e);if(!t)return e;const i=gf(t,n);return xs(i,i.next),xs(t,t.next)}function Om(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(nr(n,t))return t;do{if(nr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&pf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);Wr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Fm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Fm(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function zm(n,e,t,i){let s=n;do s.z===0&&(s.z=xc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,km(s)}function km(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function xc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Bm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Er(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&pf(n,e,t,i,s,r,o,a)}function Gm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Vm(n,e)&&(Wr(n,e)&&Wr(e,n)&&Hm(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||nr(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nr(n,e){return n.x===e.x&&n.y===e.y}function mf(n,e,t,i){const s=Io(zt(n,e,t)),r=Io(zt(n,e,i)),o=Io(zt(t,i,n)),a=Io(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Lo(n,t,e)||r===0&&Lo(n,i,e)||o===0&&Lo(t,n,i)||a===0&&Lo(t,e,i))}function Lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function Vm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Wr(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function Hm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gf(n,e){const t=yc(n.i,n.x,n.y),i=yc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Th(n,e,t,i){const s=yc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Xm{static triangulate(e,t,i=2){return Cm(e,t,i)}}class ms{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ms.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Ah(e),Ch(i,e);let o=e.length;t.forEach(Ah);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ch(i,t[c]);const a=Xm.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ah(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ch(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class or extends Vt{constructor(e=new Qr([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:qm;let A,x=!1,S,b,T,v;if(p){A=p.getSpacedPoints(u),x=!0,h=!1;const O=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,O),b=new z,T=new z,v=new z}h||(g=0,f=0,m=0,_=0);const C=a.extractPoints(l);let w=C.shape;const U=C.holes;if(!ms.isClockWise(w)){w=w.reverse();for(let O=0,ne=U.length;O<ne;O++){const I=U[O];ms.isClockWise(I)&&(U[O]=I.reverse())}}function B(O){const I=10000000000000001e-36;let K=O[0];for(let ie=1;ie<=O.length;ie++){const W=ie%O.length,ae=O[W],ye=ae.x-K.x,Se=ae.y-K.y,$=ye*ye+Se*Se,ze=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(K.x),Math.abs(K.y)),Ae=I*ze*ze;if($<=Ae){O.splice(W,1),ie--;continue}K=ae}}B(w),U.forEach(B);const k=U.length,D=w;for(let O=0;O<k;O++){const ne=U[O];w=w.concat(ne)}function V(O,ne,I){return ne||pt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(ne,I)}const H=w.length;function Z(O,ne,I){let K,ie,W;const ae=O.x-ne.x,ye=O.y-ne.y,Se=I.x-O.x,$=I.y-O.y,ze=ae*ae+ye*ye,Ae=ae*$-ye*Se;if(Math.abs(Ae)>Number.EPSILON){const G=Math.sqrt(ze),M=Math.sqrt(Se*Se+$*$),oe=ne.x-ye/G,le=ne.y+ae/G,de=I.x-$/M,be=I.y+Se/M,Ce=((de-oe)*$-(be-le)*Se)/(ae*$-ye*Se);K=oe+ae*Ce-O.x,ie=le+ye*Ce-O.y;const ge=K*K+ie*ie;if(ge<=2)return new we(K,ie);W=Math.sqrt(ge/2)}else{let G=!1;ae>Number.EPSILON?Se>Number.EPSILON&&(G=!0):ae<-Number.EPSILON?Se<-Number.EPSILON&&(G=!0):Math.sign(ye)===Math.sign($)&&(G=!0),G?(K=-ye,ie=ae,W=Math.sqrt(ze)):(K=ae,ie=ye,W=Math.sqrt(ze/2))}return new we(K/W,ie/W)}const Y=[];for(let O=0,ne=D.length,I=ne-1,K=O+1;O<ne;O++,I++,K++)I===ne&&(I=0),K===ne&&(K=0),Y[O]=Z(D[O],D[I],D[K]);const J=[];let ee,j=Y.concat();for(let O=0,ne=k;O<ne;O++){const I=U[O];ee=[];for(let K=0,ie=I.length,W=ie-1,ae=K+1;K<ie;K++,W++,ae++)W===ie&&(W=0),ae===ie&&(ae=0),ee[K]=Z(I[K],I[W],I[ae]);J.push(ee),j=j.concat(ee)}let he;if(g===0)he=ms.triangulateShape(D,U);else{const O=[],ne=[];for(let I=0;I<g;I++){const K=I/g,ie=f*Math.cos(K*Math.PI/2),W=m*Math.sin(K*Math.PI/2)+_;for(let ae=0,ye=D.length;ae<ye;ae++){const Se=V(D[ae],Y[ae],W);te(Se.x,Se.y,-ie),K===0&&O.push(Se)}for(let ae=0,ye=k;ae<ye;ae++){const Se=U[ae];ee=J[ae];const $=[];for(let ze=0,Ae=Se.length;ze<Ae;ze++){const G=V(Se[ze],ee[ze],W);te(G.x,G.y,-ie),K===0&&$.push(G)}K===0&&ne.push($)}}he=ms.triangulateShape(O,ne)}const me=he.length,ve=m+_;for(let O=0;O<H;O++){const ne=h?V(w[O],j[O],ve):w[O];x?(T.copy(S.normals[0]).multiplyScalar(ne.x),b.copy(S.binormals[0]).multiplyScalar(ne.y),v.copy(A[0]).add(T).add(b),te(v.x,v.y,v.z)):te(ne.x,ne.y,0)}for(let O=1;O<=u;O++)for(let ne=0;ne<H;ne++){const I=h?V(w[ne],j[ne],ve):w[ne];x?(T.copy(S.normals[O]).multiplyScalar(I.x),b.copy(S.binormals[O]).multiplyScalar(I.y),v.copy(A[O]).add(T).add(b),te(v.x,v.y,v.z)):te(I.x,I.y,d/u*O)}for(let O=g-1;O>=0;O--){const ne=O/g,I=f*Math.cos(ne*Math.PI/2),K=m*Math.sin(ne*Math.PI/2)+_;for(let ie=0,W=D.length;ie<W;ie++){const ae=V(D[ie],Y[ie],K);te(ae.x,ae.y,d+I)}for(let ie=0,W=U.length;ie<W;ie++){const ae=U[ie];ee=J[ie];for(let ye=0,Se=ae.length;ye<Se;ye++){const $=V(ae[ye],ee[ye],K);x?te($.x,$.y+A[u-1].y,A[u-1].x+I):te($.x,$.y,d+I)}}}N(),E();function N(){const O=s.length/3;if(h){let ne=0,I=H*ne;for(let K=0;K<me;K++){const ie=he[K];Q(ie[2]+I,ie[1]+I,ie[0]+I)}ne=u+g*2,I=H*ne;for(let K=0;K<me;K++){const ie=he[K];Q(ie[0]+I,ie[1]+I,ie[2]+I)}}else{for(let ne=0;ne<me;ne++){const I=he[ne];Q(I[2],I[1],I[0])}for(let ne=0;ne<me;ne++){const I=he[ne];Q(I[0]+H*u,I[1]+H*u,I[2]+H*u)}}i.addGroup(O,s.length/3-O,0)}function E(){const O=s.length/3;let ne=0;X(D,ne),ne+=D.length;for(let I=0,K=U.length;I<K;I++){const ie=U[I];X(ie,ne),ne+=ie.length}i.addGroup(O,s.length/3-O,1)}function X(O,ne){let I=O.length;for(;--I>=0;){const K=I;let ie=I-1;ie<0&&(ie=O.length-1);for(let W=0,ae=u+g*2;W<ae;W++){const ye=H*W,Se=H*(W+1),$=ne+K+ye,ze=ne+ie+ye,Ae=ne+ie+Se,G=ne+K+Se;R($,ze,Ae,G)}}}function te(O,ne,I){c.push(O),c.push(ne),c.push(I)}function Q(O,ne,I){L(O),L(ne),L(I);const K=s.length/3,ie=y.generateTopUV(i,s,K-3,K-2,K-1);F(ie[0]),F(ie[1]),F(ie[2])}function R(O,ne,I,K){L(O),L(ne),L(K),L(ne),L(I),L(K);const ie=s.length/3,W=y.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);F(W[0]),F(W[1]),F(W[3]),F(W[1]),F(W[2]),F(W[3])}function L(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function F(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ym(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fa[s.type]().fromJSON(s)),new or(i,e.options)}}const qm={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new we(r,o),new we(a,c),new we(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new we(o,1-c),new we(l,1-d),new we(h,1-m),new we(_,1-p)]:[new we(a,1-c),new we(u,1-d),new we(f,1-m),new we(g,1-p)]}};function Ym(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jr extends sl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jr(e.radius,e.detail)}}class Ss extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const y=p*h-o;for(let A=0;A<l;A++){const x=A*d-r;m.push(x,-y,0),_.push(0,0,1),g.push(A/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const A=y+l*p,x=y+l*(p+1),S=y+1+l*(p+1),b=y+1+l*p;f.push(A,x,b),f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class ol extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new z,h=new z,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const y=[],A=p/i,x=o+A*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S);let T=0;p===0&&o===0?T=.5/t:p===i&&c===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){const C=v/t,w=s+C*r;d.x=-b*Math.cos(w),d.y=S,d.z=b*Math.sin(w),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(C+T,1-A),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const A=u[p][y+1],x=u[p][y],S=u[p+1][y],b=u[p+1][y+1];(p!==0||o>0)&&f.push(A,x,b),(p!==i-1||c<Math.PI)&&f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class al extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new z,f=new z,m=new z;for(let _=0;_<=i;_++){const g=o+_/i*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){const p=(s+1)*_+g-1,y=(s+1)*(_-1)+g-1,A=(s+1)*(_-1)+g,x=(s+1)*_+g;c.push(p,y,x),c.push(y,A,x)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ll extends Vt{constructor(e=new du(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,c=new z,l=new we;let u=new z;const d=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(f,2));function _(){for(let A=0;A<t;A++)g(A);g(r===!1?t:0),y(),p()}function g(A){u=e.getPointAt(A/t,u);const x=o.normals[A],S=o.binormals[A];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,v=Math.sin(T),C=-Math.cos(T);c.x=C*x.x+v*S.x,c.y=C*x.y+v*S.y,c.z=C*x.z+v*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=t;A++)for(let x=1;x<=s;x++){const S=(s+1)*(A-1)+(x-1),b=(s+1)*A+(x-1),T=(s+1)*A+x,v=(s+1)*(A-1)+x;m.push(S,b,v),m.push(b,T,v)}}function y(){for(let A=0;A<=t;A++)for(let x=0;x<=s;x++)l.x=A/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new Fa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Rh(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Rh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const s in i)e[s]=i[s]}return e}function Rh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function $m(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _f(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const vf={clone:ir,merge:fn};var Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new we().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xf extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hs extends is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yf extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mf extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Km extends nu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class cl extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Sf extends cl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const $l=new xt,Ph=new z,Lh=new z;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){$l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix($l,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===er||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply($l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Do=new z,No=new Li,ri=new z;class mu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,No,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Do,No,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new z,Ih=new we,Dh=new we;class wn extends mu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Dh),t.subVectors(Dh,Ih)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qm extends pu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class ul extends cl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eo extends mu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jm extends pu{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new jm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const zs=-90,ks=1;class bf extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(zs,ks,e,t);s.layers=this.layers,this.add(s);const r=new wn(zs,ks,e,t);r.layers=this.layers,this.add(r);const o=new wn(zs,ks,e,t);o.layers=this.layers,this.add(o);const a=new wn(zs,ks,e,t);a.layers=this.layers,this.add(a);const c=new wn(zs,ks,e,t);c.layers=this.layers,this.add(c);const l=new wn(zs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ef extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nh=new xt;class wf{constructor(e,t,i=0,s=1/0){this.ray=new rr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nh),this}intersectObject(e,t=!0,i=[]){return Mc(e,this,i,t),i.sort(Uh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mc(e[s],this,i,t);return i.sort(Uh),i}}function Uh(n,e){return n.distance-e.distance}function Mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Mc(r[o],e,t,!0)}}class Sc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fu=class Fu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Fu.prototype.isMatrix2=!0;let bc=Fu;class Tf extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Oh(n,e,t,i){const s=e0(i);switch(t){case Jc:return n*e;case Ya:return n*e/s.components*s.byteLength;case $a:return n*e/s.components*s.byteLength;case ji:return n*e*2/s.components*s.byteLength;case Ja:return n*e*2/s.components*s.byteLength;case Zc:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case Za:return n*e*4/s.components*s.byteLength;case Rr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sa:case oa:return Math.max(n,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(n,8)*Math.max(e,8)/2;case aa:case la:case ua:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case zr:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ba:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Ca:case Ra:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pa:case La:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kr:case Ia:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(n){switch(n){case yn:case Xc:return{byteLength:1,components:1};case Qs:case qc:case ei:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case jn:case Wa:case Nn:return{byteLength:4,components:1};case Yc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Af(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function t0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,J0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,u_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,v_=`#define LAMBERT
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
}`,x_=`#define LAMBERT
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
}`,y_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,w_=`#define PHONG
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
}`,T_=`#define STANDARD
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
}`,A_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,R_=`#define TOON
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
}`,P_=`uniform float size;
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
}`,L_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,D_=`uniform vec3 color;
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
}`,N_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:E0,common:w0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:C0,displacementmap_vertex:R0,emissivemap_fragment:P0,emissivemap_pars_fragment:L0,colorspace_fragment:I0,colorspace_pars_fragment:D0,envmap_fragment:N0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:$0,envmap_vertex:z0,fog_vertex:k0,fog_pars_vertex:B0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:J0,lights_toon_pars_fragment:Z0,lights_phong_fragment:K0,lights_phong_pars_fragment:Q0,lights_physical_fragment:j0,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:hg,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Ig,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:kg,shadowmap_vertex:Bg,shadowmask_pars_fragment:Gg,skinbase_vertex:Vg,skinning_pars_vertex:Hg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:$g,tonemapping_pars_fragment:Jg,transmission_fragment:Zg,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:e_,worldpos_vertex:t_,background_vert:n_,background_frag:i_,backgroundCube_vert:s_,backgroundCube_frag:r_,cube_vert:o_,cube_frag:a_,depth_vert:l_,depth_frag:c_,distance_vert:u_,distance_frag:h_,equirect_vert:d_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:v_,meshlambert_frag:x_,meshmatcap_vert:y_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:b_,meshphong_vert:E_,meshphong_frag:w_,meshphysical_vert:T_,meshphysical_frag:A_,meshtoon_vert:C_,meshtoon_frag:R_,points_vert:P_,points_frag:L_,shadow_vert:I_,shadow_frag:D_,sprite_vert:N_,sprite_frag:U_},De={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Yn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Yn.physical={uniforms:fn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Uo={r:0,b:0,g:0},O_=new xt,Cf=new nt;Cf.set(-1,0,0,0,1,0,0,0,1);function F_(n,e,t,i,s,r){const o=new ut(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){const x=y.backgroundBlurriness>0;A=e.get(A,x)}return A}function m(y){let A=!1;const x=f(y);x===null?g(o,a):x&&x.isColor&&(g(x,1),A=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,A){const x=f(A);x&&(x.isCubeTexture||x.mapping===Jr)?(l===void 0&&(l=new _n(new Ni(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ir(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cf),l.material.toneMapped=ft.getTransfer(x.colorSpace)!==bt,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new Ss(2,2),new kn({name:"BackgroundMaterial",uniforms:ir(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,A){y.getRGB(Uo,_f(n)),t.buffers.color.setClear(Uo.r,Uo.g,Uo.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,A=1){o.set(y),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:_,dispose:p}}function z_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(U,q,B,k,D){let V=!1;const H=d(U,k,B,q);r!==H&&(r=H,l(r.object)),V=f(U,k,B,D),V&&m(U,k,B,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(U,q,B,k),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,q,B,k){const D=k.wireframe===!0;let V=i[q.id];V===void 0&&(V={},i[q.id]=V);const H=U.isInstancedMesh===!0?U.id:0;let Z=V[H];Z===void 0&&(Z={},V[H]=Z);let Y=Z[B.id];Y===void 0&&(Y={},Z[B.id]=Y);let J=Y[D];return J===void 0&&(J=h(c()),Y[D]=J),J}function h(U){const q=[],B=[],k=[];for(let D=0;D<t;D++)q[D]=0,B[D]=0,k[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:B,attributeDivisors:k,object:U,attributes:{},index:null}}function f(U,q,B,k){const D=r.attributes,V=q.attributes;let H=0;const Z=B.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ee=D[Y];let j=V[Y];if(j===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),ee===void 0||ee.attribute!==j||j&&ee.data!==j.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function m(U,q,B,k){const D={},V=q.attributes;let H=0;const Z=B.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ee=V[Y];ee===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));const j={};j.attribute=ee,ee&&ee.data&&(j.data=ee.data),D[Y]=j,H++}r.attributes=D,r.attributesNum=H,r.index=k}function _(){const U=r.newAttributes;for(let q=0,B=U.length;q<B;q++)U[q]=0}function g(U){p(U,0)}function p(U,q){const B=r.newAttributes,k=r.enabledAttributes,D=r.attributeDivisors;B[U]=1,k[U]===0&&(n.enableVertexAttribArray(U),k[U]=1),D[U]!==q&&(n.vertexAttribDivisor(U,q),D[U]=q)}function y(){const U=r.newAttributes,q=r.enabledAttributes;for(let B=0,k=q.length;B<k;B++)q[B]!==U[B]&&(n.disableVertexAttribArray(B),q[B]=0)}function A(U,q,B,k,D,V,H){H===!0?n.vertexAttribIPointer(U,q,B,D,V):n.vertexAttribPointer(U,q,B,k,D,V)}function x(U,q,B,k){_();const D=k.attributes,V=B.getAttributes(),H=q.defaultAttributeValues;for(const Z in V){const Y=V[Z];if(Y.location>=0){let J=D[Z];if(J===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){const ee=J.normalized,j=J.itemSize,he=e.get(J);if(he===void 0)continue;const me=he.buffer,ve=he.type,N=he.bytesPerElement,E=ve===n.INT||ve===n.UNSIGNED_INT||J.gpuType===Wa;if(J.isInterleavedBufferAttribute){const X=J.data,te=X.stride,Q=J.offset;if(X.isInstancedInterleavedBuffer){for(let R=0;R<Y.locationSize;R++)p(Y.location+R,X.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let R=0;R<Y.locationSize;R++)g(Y.location+R);n.bindBuffer(n.ARRAY_BUFFER,me);for(let R=0;R<Y.locationSize;R++)A(Y.location+R,j/Y.locationSize,ve,ee,te*N,(Q+j/Y.locationSize*R)*N,E)}else{if(J.isInstancedBufferAttribute){for(let X=0;X<Y.locationSize;X++)p(Y.location+X,J.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let X=0;X<Y.locationSize;X++)g(Y.location+X);n.bindBuffer(n.ARRAY_BUFFER,me);for(let X=0;X<Y.locationSize;X++)A(Y.location+X,j/Y.locationSize,ve,ee,j*N,j/Y.locationSize*X*N,E)}}else if(H!==void 0){const ee=H[Z];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Y.location,ee);break;case 3:n.vertexAttrib3fv(Y.location,ee);break;case 4:n.vertexAttrib4fv(Y.location,ee);break;default:n.vertexAttrib1fv(Y.location,ee)}}}}y()}function S(){C();for(const U in i){const q=i[U];for(const B in q){const k=q[B];for(const D in k){const V=k[D];for(const H in V)u(V[H].object),delete V[H];delete k[D]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;const q=i[U.id];for(const B in q){const k=q[B];for(const D in k){const V=k[D];for(const H in V)u(V[H].object),delete V[H];delete k[D]}}delete i[U.id]}function T(U){for(const q in i){const B=i[q];for(const k in B){const D=B[k];if(D[U.id]===void 0)continue;const V=D[U.id];for(const H in V)u(V[H].object),delete V[H];delete D[U.id]}}}function v(U){for(const q in i){const B=i[q],k=U.isInstancedMesh===!0?U.id:0,D=B[k];if(D!==void 0){for(const V in D){const H=D[V];for(const Z in H)u(H[Z].object),delete H[Z];delete D[V]}delete B[k],Object.keys(B).length===0&&delete i[q]}}}function C(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function k_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function B_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const v=T===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&T!==Nn&&!v&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(et("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:x,maxSamples:S,samples:b}}function G_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new li,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const y=r?0:i,A=y*4;let x=p.clippingState||null;c.value=x,x=u(m,h,A,f);for(let S=0;S!==A;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,x=f;A!==_;++A,x+=4)o.copy(d[A]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ws=4,V_=6,H_=20,W_=256,vr=new eo,Fh=new ut;let Jl=null,Zl=0,Kl=0,Ql=!1;const X_=new z,cs=new z;class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=X_}=r;Jl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,Zl,Kl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:ei,format:Un,colorSpace:Br,depthBuffer:!1},s=zh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=q_(r)),this._blurMaterial=$_(r,e,t),this._ggxMaterial=Y_(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Vt,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,i,s,r){const c=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Fh),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Ni,new Zr({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Fh),p=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):x===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));const S=this._cubeSize;Bs(s,x*S,A>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qi||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Bs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,vr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Ws?i-m+Ws:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Bs(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,vr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,Bs(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(a,vr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ws?s-this._lodMax+Ws:0),h=4*(this._cubeSize-u);Bs(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(c,vr)}}function q_(n){const e=[],t=[];let i=n;const s=n-Ws+1+V_;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,m=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,A=p>2?0:-1,x=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];m.set(x,f*h*p);for(let S=0;S<h;S++){const b=u[S*2]*2-1,T=u[S*2+1]*2-1;p===0?cs.set(1,T,b):p===1?cs.set(-b,1,-T):p===2?cs.set(-b,T,1):p===3?cs.set(-1,T,-b):p===4?cs.set(-b,-1,T):cs.set(b,T,-1),cs.toArray(_,(p*h+S)*f)}}const g=new Vt;g.setAttribute("position",new Fn(m,f)),g.setAttribute("outputDirection",new Fn(_,f)),t.push(new _n(g,null)),i>Ws&&i--}return{lodMeshes:t,sizeLods:e}}function zh(n,e,t){const i=new On(n,e,t);return i.texture.mapping=Jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Y_(n,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function $_(n,e,t){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:H_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function kh(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Bh(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _u extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new su(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ni(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:di});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=en),new bf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function J_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===ko||f===Bo)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new _u(m.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,m=f===ko||f===Bo,_=f===Qi||f===vs;if(m||_){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ec(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return m&&y&&y.height>0||_&&y&&c(y)?(i===null&&(i=new Ec(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,f){return f===ko?h.mapping=Qi:f===Bo&&(h.mapping=vs),h}function c(h){let f=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function l(h){const f=h.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Z_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&gs("WebGLRenderer: "+i+" extension not supported."),s}}}function K_(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let A=0,x=y.length;A<x;A+=3){const S=y[A+0],b=y[A+1],T=y[A+2];h.push(S,b,b,T,T,S)}}else{const y=m.array;_=m.version;for(let A=0,x=y.length/3-1;A<x;A+=3){const S=A+0,b=A+1,T=A+2;h.push(S,b,b,T,T,S)}}const g=new(m.count>=65535?eu:jc)(h,1);g.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Q_(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function j_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ev(n,e,t){const i=new WeakMap,s=new Ut;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let w=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var f=w;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let S=a.attributes.position.count*x,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*b*4*d),v=new Qc(T,S,b,d);v.type=Nn,v.needsUpdate=!0;const C=x*4;for(let U=0;U<d;U++){const q=p[U],B=y[U],k=A[U],D=S*b*4*U;for(let V=0;V<q.count;V++){const H=V*C;m===!0&&(s.fromBufferAttribute(q,V),T[D+H+0]=s.x,T[D+H+1]=s.y,T[D+H+2]=s.z,T[D+H+3]=0),_===!0&&(s.fromBufferAttribute(B,V),T[D+H+4]=s.x,T[D+H+5]=s.y,T[D+H+6]=s.z,T[D+H+7]=0),g===!0&&(s.fromBufferAttribute(k,V),T[D+H+8]=s.x,T[D+H+9]=s.y,T[D+H+10]=s.z,T[D+H+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new we(S,b)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function tv(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const nv={[zc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Ha]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function iv(n,e,t,i,s,r){const o=new On(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Vt;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _n(l,u),h=new eo(-1,1,1,-1,0,1);let f=null,m=null,_=!1,g,p=null,y=[],A=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),c!==null&&c.setSize(x,S);for(let b=0;b<y.length;b++){const T=y[b];T.setSize&&T.setSize(x,S)}},this.setEffects=function(x){y=x,A=y.length>0&&y[0].isRenderPass===!0;const S=o.width,b=o.height;y.length>0&&a===null&&(a=new On(S,b,{type:ei,depthBuffer:!1,stencilBuffer:!1}),c=new On(S,b,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){const v=y[T];v.setSize&&v.setSize(S,b)}},this.begin=function(x,S){if(_||x.toneMapping===Zn&&y.length===0)return!1;if(p=S,S!==null){const b=S.width,T=S.height;(o.width!==b||o.height!==T)&&this.setSize(b,T)}return A===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return A},this.end=function(x,S){x.toneMapping=g,_=!0;let b=o,T=a;for(let v=0;v<y.length;v++){const C=y[v];C.enabled!==!1&&(C.render(x,T,b,S),C.needsSwap!==!1&&(b=T,T=T===a?c:a))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,u.defines={},ft.getTransfer(f)===bt&&(u.defines.SRGB_TRANSFER="");const v=nv[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Rf=new nn,wc=new tr(1,1),Pf=new Qc,Lf=new sf,If=new su,Gh=[],Vh=[],Hh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dl(n,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function lv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),Jt(t,i)}}function cv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),Jt(t,i)}}function uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Hh.set(i),n.uniformMatrix4fv(this.addr,!1,Hh),Jt(t,i)}}function hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function xv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wc.compareFunction=t.isReversedDepthBuffer()?Qa:Ka,r=wc):r=Rf,t.setTexture2D(e||r,s)}function yv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lf,s)}function Mv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||If,s)}function Sv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pf,s)}function bv(n){switch(n){case 5126:return sv;case 35664:return rv;case 35665:return ov;case 35666:return av;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return dv;case 35668:case 35672:return fv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}function Ev(n,e){n.uniform1fv(this.addr,e)}function wv(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function Tv(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function Av(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function Cv(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rv(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Pv(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lv(n,e){n.uniform1iv(this.addr,e)}function Iv(n,e){n.uniform2iv(this.addr,e)}function Dv(n,e){n.uniform3iv(this.addr,e)}function Nv(n,e){n.uniform4iv(this.addr,e)}function Uv(n,e){n.uniform1uiv(this.addr,e)}function Ov(n,e){n.uniform2uiv(this.addr,e)}function Fv(n,e){n.uniform3uiv(this.addr,e)}function zv(n,e){n.uniform4uiv(this.addr,e)}function kv(n,e,t){const i=this.cache,s=e.length,r=dl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=wc:o=Rf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Bv(n,e,t){const i=this.cache,s=e.length,r=dl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lf,r[o])}function Gv(n,e,t){const i=this.cache,s=e.length,r=dl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||If,r[o])}function Vv(n,e,t){const i=this.cache,s=e.length,r=dl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pf,r[o])}function Hv(n){switch(n){case 5126:return Ev;case 35664:return wv;case 35665:return Tv;case 35666:return Av;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Iv;case 35668:case 35672:return Dv;case 35669:case 35673:return Nv;case 5125:return Uv;case 36294:return Ov;case 36295:return Fv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Vv}}class Wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}}class Xv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function qh(n,e){n.seq.push(e),n.map[e.id]=e}function Yv(n,e,t){const i=n.name,s=i.length;for(jl.lastIndex=0;;){const r=jl.exec(i),o=jl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qh(t,l===void 0?new Wv(a,n,e):new Xv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new qv(a),qh(t,d)),t=d}}}class Wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Yv(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Yh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $v=37297;let Jv=0;function Zv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $h=new nt;function Kv(n){ft._getMatrix($h,ft.workingColorSpace,n);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Gr:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Zv(n.getShaderSource(e),a)}else return r}function Qv(n,e){const t=Kv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jv={[zc]:"Linear",[kc]:"Reinhard",[Bc]:"Cineon",[Ha]:"ACESFilmic",[Vc]:"AgX",[Hc]:"Neutral",[Gc]:"Custom"};function ex(n,e){const t=jv[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oo=new z;function tx(){ft.getLuminanceCoefficients(Oo);const n=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function ix(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wr(n){return n!==""}function Zh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(n){return n.replace(rx,ax)}const ox=new Map;function ax(n,e){let t=rt[e];if(t===void 0){const i=ox.get(e);if(i!==void 0)t=rt[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tc(t)}const lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(n){return n.replace(lx,cx)}function cx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const ux={[qs]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function hx(n){return ux[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dx={[Qi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE_UV"};function fx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const px={[vs]:"ENVMAP_MODE_REFRACTION"};function mx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":px[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gx={[Fc]:"ENVMAP_BLENDING_MULTIPLY",[Bd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function _x(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gx[n.combine]||"ENVMAP_BLENDING_NONE"}function vx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=hx(t),l=fx(t),u=mx(t),d=_x(t),h=vx(t),f=nx(t),m=ix(r),_=s.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(wr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(g=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Tc(o),o=Zh(o,t),o=Kh(o,t),a=Tc(a),a=Zh(a,t),a=Kh(a,t),o=Qh(o),a=Qh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=y+g+o,x=y+p+a,S=Yh(s,s.VERTEX_SHADER,A),b=Yh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(U){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(b)||"",D=q.trim(),V=B.trim(),H=k.trim();let Z=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,b);else{const J=Jh(s,S,"vertex"),ee=Jh(s,b,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+J+`
`+ee)}else D!==""?et("WebGLProgram: Program Info Log:",D):(V===""||H==="")&&(Y=!1);Y&&(U.diagnostics={runnable:Z,programLog:D,vertexShader:{log:V,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(S),s.deleteShader(b),v=new Wo(s,_),C=sx(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,$v)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let yx=0;class Mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sx(e),t.set(e,i)),i}}class Sx{constructor(e){this.id=yx++,this.code=e,this.usedTimes=0}}function bx(n){return n===ji||n===zr||n===kr}function Ex(n,e,t,i,s,r){const o=new el,a=new Mx,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,C,w,U,q,B){const k=U.fog,D=q.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||V,H),Y=Z&&Z.mapping===Jr?Z.image.height:null,J=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&et("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=ee!==void 0?ee.length:0;let he=0;D.morphAttributes.position!==void 0&&(he=1),D.morphAttributes.normal!==void 0&&(he=2),D.morphAttributes.color!==void 0&&(he=3);let me,ve,N,E;if(J){const Pt=Yn[J];me=Pt.vertexShader,ve=Pt.fragmentShader}else{me=v.vertexShader,ve=v.fragmentShader;const Pt=a.getVertexShaderStage(v),Mt=a.getFragmentShaderStage(v);a.update(v,Pt,Mt),N=Pt.id,E=Mt.id}const X=n.getRenderTarget(),te=n.state.buffers.depth.getReversed(),Q=q.isInstancedMesh===!0,R=q.isBatchedMesh===!0,L=!!v.map,F=!!v.matcap,O=!!Z,ne=!!v.aoMap,I=!!v.lightMap,K=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,W=!!v.displacementMap,ae=!!v.emissiveMap,ye=!!v.metalnessMap,Se=!!v.roughnessMap,$=v.anisotropy>0,ze=v.clearcoat>0,Ae=v.dispersion>0,G=v.retroreflectivity>0,M=v.iridescence>0,oe=v.sheen>0,le=v.transmission>0,de=$&&!!v.anisotropyMap,be=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,ge=ze&&!!v.clearcoatRoughnessMap,xe=M&&!!v.iridescenceMap,Re=M&&!!v.iridescenceThicknessMap,Ye=oe&&!!v.sheenColorMap,Ne=oe&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,$e=!!v.specularColorMap,je=!!v.specularIntensityMap,it=le&&!!v.transmissionMap,re=le&&!!v.thicknessMap,Le=!!v.gradientMap,_e=!!v.alphaMap,Ie=v.alphaTest>0,ke=!!v.alphaHash,Me=!!v.extensions;let Je=Zn;v.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Je=n.toneMapping);const Xe={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:ve,defines:v.defines,customVertexShaderID:N,customFragmentShaderID:E,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:R,batchingColor:R&&q._colorsTexture!==null,instancing:Q,instancingColor:Q&&q.instanceColor!==null,instancingMorph:Q&&q.morphTexture!==null,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:L,matcap:F,envMap:O,envMapMode:O&&Z.mapping,envMapCubeUVHeight:Y,aoMap:ne,lightMap:I,bumpMap:K,normalMap:ie,displacementMap:W,emissiveMap:ae,normalMapObjectSpace:ie&&v.normalMapType===Wd,normalMapTangentSpace:ie&&v.normalMapType===Da,packedNormalMap:ie&&v.normalMapType===Da&&bx(v.normalMap.format),metalnessMap:ye,roughnessMap:Se,anisotropy:$,anisotropyMap:de,clearcoat:ze,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ge,dispersion:Ae,retroreflection:G,iridescence:M,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:oe,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:$e,specularIntensityMap:je,transmission:le,transmissionMap:it,thicknessMap:re,gradientMap:Le,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ie,alphaHash:ke,combine:v.combine,mapUv:L&&m(v.map.channel),aoMapUv:ne&&m(v.aoMap.channel),lightMapUv:I&&m(v.lightMap.channel),bumpMapUv:K&&m(v.bumpMap.channel),normalMapUv:ie&&m(v.normalMap.channel),displacementMapUv:W&&m(v.displacementMap.channel),emissiveMapUv:ae&&m(v.emissiveMap.channel),metalnessMapUv:ye&&m(v.metalnessMap.channel),roughnessMapUv:Se&&m(v.roughnessMap.channel),anisotropyMapUv:de&&m(v.anisotropyMap.channel),clearcoatMapUv:be&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&m(v.sheenRoughnessMap.channel),specularMapUv:Pe&&m(v.specularMap.channel),specularColorMapUv:$e&&m(v.specularColorMap.channel),specularIntensityMapUv:je&&m(v.specularIntensityMap.channel),transmissionMapUv:it&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:_e&&m(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ie||$),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!D.attributes.uv&&(L||_e),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:L&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:ae&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||R)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function g(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)C.push(w),C.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(p(C,v),y(C,v),C.push(n.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function p(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function y(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){const C=f[v.type];let w;if(C){const U=Yn[C];w=vf.clone(U.uniforms)}else w=v.uniforms;return w}function x(v,C){let w=u.get(C);return w!==void 0?++w.usedTimes:(w=new xx(n,C,v,s),l.push(w),u.set(C,w)),w}function S(v){if(--v.usedTimes===0){const C=l.indexOf(v);l[C]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:A,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:T}}function wx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function td(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,_,g,p){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=m,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=g,y.group=p),e++,y}function c(h,f,m,_,g,p,y){y.reversedDepth===!0&&(g=-g);const A=a(h,f,m,_,g,p);m.transmission>0?i.push(A):m.transparent===!0?s.push(A):t.push(A)}function l(h,f,m,_,g,p){const y=a(h,f,m,_,g,p);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,f){t.length>1&&t.sort(h||Tx),i.length>1&&i.sort(f||ed),s.length>1&&s.sort(f||ed)}function d(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Ax(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new td,n.set(i,[o])):s>=r.length?(o=new td,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new ut};break;case"SpotLight":t={position:new z,direction:new z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Rx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Px=0;function Lx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ix(n){const e=new Cx,t=Rx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const s=new z,r=new xt,o=new xt;function a(l){let u=0,d=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,A=0,x=0,S=0,b=0,T=0,v=0,C=0,w=0;l.sort(Lx);for(let q=0,B=l.length;q<B;q++){const k=l[q],D=k.color,V=k.intensity,H=k.distance;let Z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ji?Z=k.shadow.map.texture:Z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=D.r*V,d+=D.g*V,h+=D.b*V;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(k.sh.coefficients[Y],V);w++}else if(k.isSunLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,ee=t.get(k);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[m]=ee,i.sunShadowMap[m]=Z;const j=J.getViewportCount();for(let he=0;he<j;he++)i.sunShadowMatrix[_+he]=J.getMatrix(he),i.sunShadowCascade[_+he]=J._cascadeData[he];_+=j,m++}i.sun[f]=Y,f++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,ee=t.get(k);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=k.shadow.matrix,S++}i.directional[g]=Y,g++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(D).multiplyScalar(V),Y.distance=H,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,i.spot[y]=Y;const J=k.shadow;if(k.map&&(i.spotLightMap[v]=k.map,v++,J.updateMatrices(k),k.castShadow&&C++),i.spotLightMatrix[y]=J.matrix,k.castShadow){const ee=t.get(k);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[y]=ee,i.spotShadowMap[y]=Z,T++}y++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(D).multiplyScalar(V),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),i.rectArea[A]=Y,A++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const J=k.shadow,ee=t.get(k);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=k.shadow.matrix,b++}i.point[p]=Y,p++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(V),Y.groundColor.copy(k.groundColor).multiplyScalar(V),i.hemi[x]=Y,x++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==A||U.hemiLength!==x||U.numSunShadows!==m||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==T||U.numSpotMaps!==v||U.numLightProbes!==w)&&(i.sun.length=f,i.directional.length=g,i.spot.length=y,i.rectArea.length=A,i.point.length=p,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=y,U.rectAreaLength=A,U.hemiLength=x,U.numSunShadows=m,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=T,U.numSpotMaps=v,U.numLightProbes=w,i.version=Px++)}function c(l,u){let d=0,h=0,f=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){const x=l[y];if(x.isSunLight){const S=i.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:i}}function nd(n){const e=new Ix(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Dx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new nd(n),e.set(s,[a])):r>=o.length?(a=new nd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`,Ox=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Fx=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],id=new xt,xr=new z,ec=new z;function zx(n,e,t){let i=new nl;const s=new we,r=new we,o=new Ut,a=new yf,c=new Mf,l={},u=t.maxTextureSize,d={[Ki]:gn,[gn]:Ki,[Ln]:Ln},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Vt;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(b,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Md&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const C=n.getRenderTarget(),w=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),q=n.state;q.setBlending(di),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const B=p!==this.type;B&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(D=>D.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,D=b.length;k<D;k++){const V=b[k],H=V.shadow;if(H===void 0){et("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Z=H.getFrameExtents();s.multiply(Z),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Vs){if(V.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new On(s.x,s.y,{format:ji,type:ei,minFilter:en,magFilter:en,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new tr(s.x,s.y,Nn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=mi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt}else V.isPointLight?(H.map=new _u(s.x),H.map.depthTexture=new lf(s.x,jn)):(H.map=new On(s.x,s.y),H.map.depthTexture=new tr(s.x,s.y,jn)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=mi,this.type===qs?(H.map.depthTexture.compareFunction=Y?Qa:Ka,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Kt,H.map.depthTexture.magFilter=Kt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,v);for(let ee=0;ee<J;ee++){const j=H.getCamera(ee);if(V.isPointLight){const he=H.camera,me=H.matrix,ve=V.distance||he.far;ve!==he.far&&(he.far=ve,he.updateProjectionMatrix()),xr.setFromMatrixPosition(V.matrixWorld),he.position.copy(xr),ec.copy(he.position),ec.add(Ox[ee]),he.up.copy(Fx[ee]),he.lookAt(ec),he.updateMatrixWorld(),me.makeTranslation(-xr.x,-xr.y,-xr.z),id.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),H._frustum.setFromProjectionMatrix(id,he.coordinateSystem,he.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(H.map),n.clear());const he=H.getViewport(ee);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),q.viewport(o)}i=H.getFrustum(ee),x(T,v,j,V,this.type)}H.isPointLightShadow!==!0&&this.type===Vs&&y(H,v),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(C,w,U)};function y(b,T){const v=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new On(s.x,s.y,{format:ji,type:ei}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,v,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,v,f,_,null)}function A(b,T,v,C){let w=null;const U=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)w=U;else if(w=v.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const q=w.uuid,B=T.uuid;let k=l[q];k===void 0&&(k={},l[q]=k);let D=k[B];D===void 0&&(D=w.clone(),k[B]=D,T.addEventListener("dispose",S)),w=D}if(w.visible=T.visible,w.wireframe=T.wireframe,C===Vs?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:d[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=n.properties.get(w);q.light=v}return w}function x(b,T,v,C,w){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Vs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const B=e.update(b),k=b.material;if(Array.isArray(k)){const D=B.groups;for(let V=0,H=D.length;V<H;V++){const Z=D[V],Y=k[Z.materialIndex];if(Y&&Y.visible){const J=A(b,Y,C,w);b.onBeforeShadow(n,b,T,v,B,J,Z),n.renderBufferDirect(v,null,B,J,b,Z),b.onAfterShadow(n,b,T,v,B,J,Z)}}}else if(k.visible){const D=A(b,k,C,w);b.onBeforeShadow(n,b,T,v,B,D,null),n.renderBufferDirect(v,null,B,D,b,null),b.onAfterShadow(n,b,T,v,B,D,null)}}const q=b.children;for(let B=0,k=q.length;B<k;B++)x(q[B],T,v,C,w)}function S(b){b.target.removeEventListener("dispose",S);for(const v in l){const C=l[v],w=b.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}function kx(n,e){function t(){let re=!1;const Le=new Ut;let _e=null;const Ie=new Ut(0,0,0,0);return{setMask:function(ke){_e!==ke&&!re&&(n.colorMask(ke,ke,ke,ke),_e=ke)},setLocked:function(ke){re=ke},setClear:function(ke,Me,Je,Xe,Pt){Pt===!0&&(ke*=Xe,Me*=Xe,Je*=Xe),Le.set(ke,Me,Je,Xe),Ie.equals(Le)===!1&&(n.clearColor(ke,Me,Je,Xe),Ie.copy(Le))},reset:function(){re=!1,_e=null,Ie.set(-1,0,0,0)}}}function i(){let re=!1,Le=!1,_e=null,Ie=null,ke=null;return{setReversed:function(Me){if(Le!==Me){const Je=e.get("EXT_clip_control");Me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=ke;ke=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?X(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(Me){_e!==Me&&!re&&(n.depthMask(Me),_e=Me)},setFunc:function(Me){if(Le&&(Me=zp[Me]),Ie!==Me){switch(Me){case Jo:n.depthFunc(n.NEVER);break;case Zo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Qo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case ea:n.depthFunc(n.GREATER);break;case ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){re=Me},setClear:function(Me){ke!==Me&&(ke=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){re=!1,_e=null,Ie=null,ke=null,Le=!1}}}function s(){let re=!1,Le=null,_e=null,Ie=null,ke=null,Me=null,Je=null,Xe=null,Pt=null;return{setTest:function(Mt){re||(Mt?X(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!re&&(n.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Gn,ii){(_e!==Mt||Ie!==Gn||ke!==ii)&&(n.stencilFunc(Mt,Gn,ii),_e=Mt,Ie=Gn,ke=ii)},setOp:function(Mt,Gn,ii){(Me!==Mt||Je!==Gn||Xe!==ii)&&(n.stencilOp(Mt,Gn,ii),Me=Mt,Je=Gn,Xe=ii)},setLocked:function(Mt){re=Mt},setClear:function(Mt){Pt!==Mt&&(n.clearStencil(Mt),Pt=Mt)},reset:function(){re=!1,Le=null,_e=null,Ie=null,ke=null,Me=null,Je=null,Xe=null,Pt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,y=null,A=null,x=null,S=null,b=null,T=null,v=new ut(0,0,0),C=0,w=!1,U=null,q=null,B=null,k=null,D=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=Z>=2);let J=null,ee={};const j=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),me=new Ut().fromArray(j),ve=new Ut().fromArray(he);function N(re,Le,_e,Ie){const ke=new Uint8Array(4),Me=n.createTexture();n.bindTexture(re,Me),n.texParameteri(re,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(re,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<_e;Je++)re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Le+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Me}const E={};E[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),E[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),E[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(n.DEPTH_TEST),o.setFunc(Ks),K(!1),ie(cc),X(n.CULL_FACE),ne(di);function X(re){u[re]!==!0&&(n.enable(re),u[re]=!0)}function te(re){u[re]!==!1&&(n.disable(re),u[re]=!1)}function Q(re,Le){return h[re]!==Le?(n.bindFramebuffer(re,Le),h[re]=Le,re===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),re===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function R(re,Le){let _e=m,Ie=!1;if(re){_e=f.get(Le),_e===void 0&&(_e=[],f.set(Le,_e));const ke=re.textures;if(_e.length!==ke.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Je=ke.length;Me<Je;Me++)_e[Me]=n.COLOR_ATTACHMENT0+Me;_e.length=ke.length,Ie=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(_e)}function L(re){return _!==re?(n.useProgram(re),_=re,!0):!1}const F={[ds]:n.FUNC_ADD,[bd]:n.FUNC_SUBTRACT,[Ed]:n.FUNC_REVERSE_SUBTRACT};F[wd]=n.MIN,F[Td]=n.MAX;const O={[Ad]:n.ZERO,[Cd]:n.ONE,[Rd]:n.SRC_COLOR,[Uc]:n.SRC_ALPHA,[Ud]:n.SRC_ALPHA_SATURATE,[Dd]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[Oc]:n.ONE_MINUS_SRC_ALPHA,[Nd]:n.ONE_MINUS_DST_COLOR,[Id]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[zd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(re,Le,_e,Ie,ke,Me,Je,Xe,Pt,Mt){if(re===di){g===!0&&(te(n.BLEND),g=!1);return}if(g===!1&&(X(n.BLEND),g=!0),re!==Sd){if(re!==p||Mt!==w){if((y!==ds||S!==ds)&&(n.blendEquation(n.FUNC_ADD),y=ds,S=ds),Mt)switch(re){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFunc(n.ONE,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pt("WebGLState: Invalid blending: ",re);break}else switch(re){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hc:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",re);break}A=null,x=null,b=null,T=null,v.set(0,0,0),C=0,p=re,w=Mt}return}ke=ke||Le,Me=Me||_e,Je=Je||Ie,(Le!==y||ke!==S)&&(n.blendEquationSeparate(F[Le],F[ke]),y=Le,S=ke),(_e!==A||Ie!==x||Me!==b||Je!==T)&&(n.blendFuncSeparate(O[_e],O[Ie],O[Me],O[Je]),A=_e,x=Ie,b=Me,T=Je),(Xe.equals(v)===!1||Pt!==C)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Pt),v.copy(Xe),C=Pt),p=re,w=!1}function I(re,Le){re.side===Ln?te(n.CULL_FACE):X(n.CULL_FACE);let _e=re.side===gn;Le&&(_e=!_e),K(_e),re.blending===Ys&&re.transparent===!1?ne(di):ne(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),o.setFunc(re.depthFunc),o.setTest(re.depthTest),o.setMask(re.depthWrite),r.setMask(re.colorWrite);const Ie=re.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(re.stencilWriteMask),a.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),a.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),ae(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(re){U!==re&&(re?n.frontFace(n.CW):n.frontFace(n.CCW),U=re)}function ie(re){re!==xd?(X(n.CULL_FACE),re!==q&&(re===cc?n.cullFace(n.BACK):re===yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),q=re}function W(re){re!==B&&(H&&n.lineWidth(re),B=re)}function ae(re,Le,_e){re?(X(n.POLYGON_OFFSET_FILL),(k!==Le||D!==_e)&&(k=Le,D=_e,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,_e))):te(n.POLYGON_OFFSET_FILL)}function ye(re){re?X(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function Se(re){re===void 0&&(re=n.TEXTURE0+V-1),J!==re&&(n.activeTexture(re),J=re)}function $(re,Le,_e){_e===void 0&&(J===null?_e=n.TEXTURE0+V-1:_e=J);let Ie=ee[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},ee[_e]=Ie),(Ie.type!==re||Ie.texture!==Le)&&(J!==_e&&(n.activeTexture(_e),J=_e),n.bindTexture(re,Le||E[re]),Ie.type=re,Ie.texture=Le)}function ze(){const re=ee[J];re!==void 0&&re.type!==void 0&&(n.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(re){pt("WebGLState:",re)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(re){pt("WebGLState:",re)}}function M(){try{n.texSubImage2D(...arguments)}catch(re){pt("WebGLState:",re)}}function oe(){try{n.texSubImage3D(...arguments)}catch(re){pt("WebGLState:",re)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(re){pt("WebGLState:",re)}}function de(){try{n.compressedTexSubImage3D(...arguments)}catch(re){pt("WebGLState:",re)}}function be(){try{n.texStorage2D(...arguments)}catch(re){pt("WebGLState:",re)}}function Ce(){try{n.texStorage3D(...arguments)}catch(re){pt("WebGLState:",re)}}function ge(){try{n.texImage2D(...arguments)}catch(re){pt("WebGLState:",re)}}function xe(){try{n.texImage3D(...arguments)}catch(re){pt("WebGLState:",re)}}function Re(re){return d[re]!==void 0?d[re]:n.getParameter(re)}function Ye(re,Le){d[re]!==Le&&(n.pixelStorei(re,Le),d[re]=Le)}function Ne(re){me.equals(re)===!1&&(n.scissor(re.x,re.y,re.z,re.w),me.copy(re))}function Pe(re){ve.equals(re)===!1&&(n.viewport(re.x,re.y,re.z,re.w),ve.copy(re))}function $e(re,Le){let _e=l.get(Le);_e===void 0&&(_e=new WeakMap,l.set(Le,_e));let Ie=_e.get(re);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,re.name),_e.set(re,Ie))}function je(re,Le){const Ie=l.get(Le).get(re);c.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,re.__bindingPointIndex),c.set(Le,Ie))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,ee={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,y=null,A=null,x=null,S=null,b=null,T=null,v=new ut(0,0,0),C=0,w=!1,U=null,q=null,B=null,k=null,D=null,me.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:te,bindFramebuffer:Q,drawBuffers:R,useProgram:L,setBlending:ne,setMaterial:I,setFlipSided:K,setCullFace:ie,setLineWidth:W,setPolygonOffset:ae,setScissorTest:ye,activeTexture:Se,bindTexture:$,unbindTexture:ze,compressedTexImage2D:Ae,compressedTexImage3D:G,texImage2D:ge,texImage3D:xe,pixelStorei:Ye,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:je,texStorage2D:be,texStorage3D:Ce,texSubImage2D:M,texSubImage3D:oe,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Ne,viewport:Pe,reset:it}}function Bx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,M){return m?new OffscreenCanvas(G,M):Na("canvas")}function g(G,M,oe){let le=1;const de=Ae(G);if((de.width>oe||de.height>oe)&&(le=oe/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const be=Math.floor(le*de.width),Ce=Math.floor(le*de.height);h===void 0&&(h=_(be,Ce));const ge=M?_(be,Ce):h;return ge.width=be,ge.height=Ce,ge.getContext("2d").drawImage(G,0,0,be,Ce),et("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+be+"x"+Ce+")."),ge}else return"data"in G&&et("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),G;return G}function p(G){return G.generateMipmaps}function y(G){n.generateMipmap(G)}function A(G){return G.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?n.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(G,M,oe,le,de,be=!1){if(G!==null){if(n[G]!==void 0)return n[G];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Ce;le&&(Ce=e.get("EXT_texture_norm16"),Ce||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=M;if(M===n.RED&&(oe===n.FLOAT&&(ge=n.R32F),oe===n.HALF_FLOAT&&(ge=n.R16F),oe===n.UNSIGNED_BYTE&&(ge=n.R8),oe===n.UNSIGNED_SHORT&&Ce&&(ge=Ce.R16_EXT),oe===n.SHORT&&Ce&&(ge=Ce.R16_SNORM_EXT)),M===n.RED_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ge=n.R8UI),oe===n.UNSIGNED_SHORT&&(ge=n.R16UI),oe===n.UNSIGNED_INT&&(ge=n.R32UI),oe===n.BYTE&&(ge=n.R8I),oe===n.SHORT&&(ge=n.R16I),oe===n.INT&&(ge=n.R32I)),M===n.RG&&(oe===n.FLOAT&&(ge=n.RG32F),oe===n.HALF_FLOAT&&(ge=n.RG16F),oe===n.UNSIGNED_BYTE&&(ge=n.RG8),oe===n.UNSIGNED_SHORT&&Ce&&(ge=Ce.RG16_EXT),oe===n.SHORT&&Ce&&(ge=Ce.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ge=n.RG8UI),oe===n.UNSIGNED_SHORT&&(ge=n.RG16UI),oe===n.UNSIGNED_INT&&(ge=n.RG32UI),oe===n.BYTE&&(ge=n.RG8I),oe===n.SHORT&&(ge=n.RG16I),oe===n.INT&&(ge=n.RG32I)),M===n.RGB_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),oe===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),oe===n.UNSIGNED_INT&&(ge=n.RGB32UI),oe===n.BYTE&&(ge=n.RGB8I),oe===n.SHORT&&(ge=n.RGB16I),oe===n.INT&&(ge=n.RGB32I)),M===n.RGBA_INTEGER&&(oe===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),oe===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),oe===n.UNSIGNED_INT&&(ge=n.RGBA32UI),oe===n.BYTE&&(ge=n.RGBA8I),oe===n.SHORT&&(ge=n.RGBA16I),oe===n.INT&&(ge=n.RGBA32I)),M===n.RGB&&(oe===n.UNSIGNED_SHORT&&Ce&&(ge=Ce.RGB16_EXT),oe===n.SHORT&&Ce&&(ge=Ce.RGB16_SNORM_EXT),oe===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),oe===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),M===n.RGBA){const xe=be?Gr:ft.getTransfer(de);oe===n.FLOAT&&(ge=n.RGBA32F),oe===n.HALF_FLOAT&&(ge=n.RGBA16F),oe===n.UNSIGNED_BYTE&&(ge=xe===bt?n.SRGB8_ALPHA8:n.RGBA8),oe===n.UNSIGNED_SHORT&&Ce&&(ge=Ce.RGBA16_EXT),oe===n.SHORT&&Ce&&(ge=Ce.RGBA16_SNORM_EXT),oe===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),oe===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function S(G,M){let oe;return G?M===null||M===jn||M===js?oe=n.DEPTH24_STENCIL8:M===Nn?oe=n.DEPTH32F_STENCIL8:M===Qs&&(oe=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jn||M===js?oe=n.DEPTH_COMPONENT24:M===Nn?oe=n.DEPTH_COMPONENT32F:M===Qs&&(oe=n.DEPTH_COMPONENT16),oe}function b(G,M){return p(G)===!0||G.isFramebufferTexture&&G.minFilter!==Kt&&G.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?M.mipmaps.length:1}function T(G){const M=G.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function v(G){const M=G.target;M.removeEventListener("dispose",v),U(M)}function C(G){const M=i.get(G);if(M.__webglInit===void 0)return;const oe=G.source,le=f.get(oe);if(le){const de=le[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&w(G),Object.keys(le).length===0&&f.delete(oe)}i.remove(G)}function w(G){const M=i.get(G);n.deleteTexture(M.__webglTexture);const oe=G.source,le=f.get(oe);delete le[M.__cacheKey],o.memory.textures--}function U(G){const M=i.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),i.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let de=0;de<M.__webglFramebuffer[le].length;de++)n.deleteFramebuffer(M.__webglFramebuffer[le][de]);else n.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)n.deleteFramebuffer(M.__webglFramebuffer[le]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const oe=G.textures;for(let le=0,de=oe.length;le<de;le++){const be=i.get(oe[le]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(oe[le])}i.remove(G)}let q=0;function B(){q=0}function k(){return q}function D(G){q=G}function V(){const G=q;return G>=s.maxTextures&&et("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,G}function H(G){const M=[];return M.push(G.wrapS),M.push(G.wrapT),M.push(G.wrapR||0),M.push(G.magFilter),M.push(G.minFilter),M.push(G.anisotropy),M.push(G.internalFormat),M.push(G.format),M.push(G.type),M.push(G.generateMipmaps),M.push(G.premultiplyAlpha),M.push(G.flipY),M.push(G.unpackAlignment),M.push(G.colorSpace),M.join()}function Z(G,M){const oe=i.get(G);if(G.isVideoTexture&&$(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&oe.__version!==G.version){const le=G.image;if(le===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{te(oe,G,M);return}}else G.isExternalTexture&&(oe.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture,n.TEXTURE0+M)}function Y(G,M){const oe=i.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&oe.__version!==G.version){te(oe,G,M);return}else G.isExternalTexture&&(oe.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,oe.__webglTexture,n.TEXTURE0+M)}function J(G,M){const oe=i.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&oe.__version!==G.version){te(oe,G,M);return}t.bindTexture(n.TEXTURE_3D,oe.__webglTexture,n.TEXTURE0+M)}function ee(G,M){const oe=i.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&oe.__version!==G.version){Q(oe,G,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture,n.TEXTURE0+M)}const j={[Fr]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[na]:n.MIRRORED_REPEAT},he={[Kt]:n.NEAREST,[Vd]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},me={[qd]:n.NEVER,[Kd]:n.ALWAYS,[Yd]:n.LESS,[Ka]:n.LEQUAL,[$d]:n.EQUAL,[Qa]:n.GEQUAL,[Jd]:n.GREATER,[Zd]:n.NOTEQUAL};function ve(G,M){if(M.type===Nn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Go||M.magFilter===br||M.magFilter===Wi||M.minFilter===en||M.minFilter===Go||M.minFilter===br||M.minFilter===Wi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(G,n.TEXTURE_WRAP_S,j[M.wrapS]),n.texParameteri(G,n.TEXTURE_WRAP_T,j[M.wrapT]),(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)&&n.texParameteri(G,n.TEXTURE_WRAP_R,j[M.wrapR]),n.texParameteri(G,n.TEXTURE_MAG_FILTER,he[M.magFilter]),n.texParameteri(G,n.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(n.texParameteri(G,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(G,n.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==br&&M.minFilter!==Wi||M.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");n.texParameterf(G,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function N(G,M){let oe=!1;G.__webglInit===void 0&&(G.__webglInit=!0,M.addEventListener("dispose",T));const le=M.source;let de=f.get(le);de===void 0&&(de={},f.set(le,de));const be=H(M);if(be!==G.__cacheKey){de[be]===void 0&&(de[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),de[be].usedTimes++;const Ce=de[G.__cacheKey];Ce!==void 0&&(de[G.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(M)),G.__cacheKey=be,G.__webglTexture=de[be].texture}return oe}function E(G,M,oe){return Math.floor(Math.floor(G/oe)/M)}function X(G,M,oe,le){const be=G.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,oe,le,M.data);else{be.sort((Ye,Ne)=>Ye.start-Ne.start);let Ce=0;for(let Ye=1;Ye<be.length;Ye++){const Ne=be[Ce],Pe=be[Ye],$e=Ne.start+Ne.count,je=E(Pe.start,M.width,4),it=E(Ne.start,M.width,4);Pe.start<=$e+1&&je===it&&E(Pe.start+Pe.count-1,M.width,4)===je?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,be[Ce]=Pe)}be.length=Ce+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ye=0,Ne=be.length;Ye<Ne;Ye++){const Pe=be[Ye],$e=Math.floor(Pe.start/4),je=Math.ceil(Pe.count/4),it=$e%M.width,re=Math.floor($e/M.width),Le=je,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,it),t.pixelStorei(n.UNPACK_SKIP_ROWS,re),t.texSubImage2D(n.TEXTURE_2D,0,it,re,Le,_e,oe,le,M.data)}G.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function te(G,M,oe){let le=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=n.TEXTURE_3D);const de=N(G,M),be=M.source;t.bindTexture(le,G.__webglTexture,n.TEXTURE0+oe);const Ce=i.get(be);if(be.version!==Ce.__version||de===!0){if(t.activeTexture(n.TEXTURE0+oe),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const _e=ft.getPrimaries(ft.workingColorSpace),Ie=M.colorSpace===Mi?null:ft.getPrimaries(M.colorSpace),ke=M.colorSpace===Mi||_e===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let xe=g(M.image,!1,s.maxTextureSize);xe=ze(M,xe);const Re=r.convert(M.format,M.colorSpace),Ye=r.convert(M.type);let Ne=x(M.internalFormat,Re,Ye,M.normalized,M.colorSpace,M.isVideoTexture);ve(le,M);let Pe;const $e=M.mipmaps,je=M.isVideoTexture!==!0,it=Ce.__version===void 0||de===!0,re=be.dataReady,Le=b(M,xe);if(M.isDepthTexture)Ne=S(M.format===Xi,M.type),it&&(je?t.texStorage2D(n.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ye,null));else if(M.isDataTexture)if($e.length>0){je&&it&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let _e=0,Ie=$e.length;_e<Ie;_e++)Pe=$e[_e],je?re&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data);M.generateMipmaps=!1}else je?(it&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height),re&&X(M,xe,Re,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ye,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,$e[0].width,$e[0].height,xe.depth);for(let _e=0,Ie=$e.length;_e<Ie;_e++)if(Pe=$e[_e],M.format!==Un)if(Re!==null)if(je){if(re)if(M.layerUpdates.size>0){const ke=Oh(Pe.width,Pe.height,M.format,M.type);for(const Me of M.layerUpdates){const Je=Pe.data.subarray(Me*ke/Pe.data.BYTES_PER_ELEMENT,(Me+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Me,Pe.width,Pe.height,1,Re,Je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,xe.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,xe.depth,Re,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Pe.width,Pe.height,xe.depth,0,Re,Ye,Pe.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{je&&it&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let _e=0,Ie=$e.length;_e<Ie;_e++)Pe=$e[_e],M.format!==Un?Re!==null?je?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Pe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?re&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data)}else if(M.isDataArrayTexture)if(je){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,xe.width,xe.height,xe.depth),re)if(M.layerUpdates.size>0){const _e=Oh(xe.width,xe.height,M.format,M.type);for(const Ie of M.layerUpdates){const ke=xe.data.subarray(Ie*_e/xe.data.BYTES_PER_ELEMENT,(Ie+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,Ye,ke)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(M.isData3DTexture)je?(it&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,xe.width,xe.height,xe.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(M.isFramebufferTexture){if(it)if(je)t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height);else{let _e=xe.width,Ie=xe.height;for(let ke=0;ke<Le;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ne,_e,Ie,0,Re,Ye,null),_e>>=1,Ie>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),d.add(M),_e.onpaint=Ie=>{const ke=Ie.changedElements;for(const Me of d)ke.includes(Me.image)&&(Me.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const ke=n.RGBA,Me=n.RGBA,Je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,Me,Je,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(je&&it){const _e=Ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height)}for(let _e=0,Ie=$e.length;_e<Ie;_e++)Pe=$e[_e],je?re&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re,Ye,Pe):t.texImage2D(n.TEXTURE_2D,_e,Ne,Re,Ye,Pe);M.generateMipmaps=!1}else if(je){if(it){const _e=Ae(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,_e.width,_e.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ye,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,Ye,xe);p(M)&&y(le),Ce.__version=be.version,M.onUpdate&&M.onUpdate(M)}G.__version=M.version}function Q(G,M,oe){if(M.image.length!==6)return;const le=N(G,M),de=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+oe);const be=i.get(de);if(de.version!==be.__version||le===!0){t.activeTexture(n.TEXTURE0+oe);const Ce=ft.getPrimaries(ft.workingColorSpace),ge=M.colorSpace===Mi?null:ft.getPrimaries(M.colorSpace),xe=M.colorSpace===Mi||Ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Ye=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!Ye?Ne[Me]=g(M.image[Me],!0,s.maxCubemapSize):Ne[Me]=Ye?M.image[Me].image:M.image[Me],Ne[Me]=ze(M,Ne[Me]);const Pe=Ne[0],$e=r.convert(M.format,M.colorSpace),je=r.convert(M.type),it=x(M.internalFormat,$e,je,M.normalized,M.colorSpace),re=M.isVideoTexture!==!0,Le=be.__version===void 0||le===!0,_e=de.dataReady;let Ie=b(M,Pe);ve(n.TEXTURE_CUBE_MAP,M);let ke;if(Re){re&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,it,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){ke=Ne[Me].mipmaps;for(let Je=0;Je<ke.length;Je++){const Xe=ke[Je];M.format!==Un?$e!==null?re?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Xe.width,Xe.height,$e,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,it,Xe.width,Xe.height,0,Xe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Xe.width,Xe.height,$e,je,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,it,Xe.width,Xe.height,0,$e,je,Xe.data)}}}else{if(ke=M.mipmaps,re&&Le){ke.length>0&&Ie++;const Me=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,it,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ye){re?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,$e,je,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,Ne[Me].width,Ne[Me].height,0,$e,je,Ne[Me].data);for(let Je=0;Je<ke.length;Je++){const Pt=ke[Je].image[Me].image;re?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Pt.width,Pt.height,$e,je,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,it,Pt.width,Pt.height,0,$e,je,Pt.data)}}else{re?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$e,je,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,it,$e,je,Ne[Me]);for(let Je=0;Je<ke.length;Je++){const Xe=ke[Je];re?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,$e,je,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,it,$e,je,Xe.image[Me])}}}p(M)&&y(n.TEXTURE_CUBE_MAP),be.__version=de.version,M.onUpdate&&M.onUpdate(M)}G.__version=M.version}function R(G,M,oe,le,de,be){const Ce=r.convert(oe.format,oe.colorSpace),ge=r.convert(oe.type),xe=x(oe.internalFormat,Ce,ge,oe.normalized,oe.colorSpace),Re=i.get(M),Ye=i.get(oe);if(Ye.__renderTarget=M,!Re.__hasExternalTextures){const Ne=Math.max(1,M.width>>be),Pe=Math.max(1,M.height>>be);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,be,xe,Ne,Pe,M.depth,0,Ce,ge,null):t.texImage2D(de,be,xe,Ne,Pe,0,Ce,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,G),Se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,de,Ye.__webglTexture,0,ye(M)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,de,Ye.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function L(G,M,oe){if(n.bindRenderbuffer(n.RENDERBUFFER,G),M.depthBuffer){const le=M.depthTexture,de=le&&le.isDepthTexture?le.type:null,be=S(M.stencilBuffer,de),Ce=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(M),be,M.width,M.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(M),be,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,be,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,G)}else{const le=M.textures;for(let de=0;de<le.length;de++){const be=le[de],Ce=r.convert(be.format,be.colorSpace),ge=r.convert(be.type),xe=x(be.internalFormat,Ce,ge,be.normalized,be.colorSpace);Se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(M),xe,M.width,M.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(M),xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(G,M,oe){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,G),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(M.depthTexture);if(de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(de.__webglInit===void 0&&(de.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),de.__webglTexture===void 0){de.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),ve(n.TEXTURE_CUBE_MAP,M.depthTexture);const Re=r.convert(M.depthTexture.format),Ye=r.convert(M.depthTexture.type);let Ne;M.depthTexture.format===mi?Ne=n.DEPTH_COMPONENT24:M.depthTexture.format===Xi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,M.width,M.height,0,Re,Ye,null)}}else Z(M.depthTexture,0);const be=de.__webglTexture,Ce=ye(M),ge=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+oe:n.TEXTURE_2D,xe=M.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===mi)Se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,be,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,be,0);else if(M.depthTexture.format===Xi)Se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,be,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function O(G){const M=i.get(G),oe=G.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==G.depthTexture){const le=G.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const de=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),M.__depthDisposeCallback=de}M.__boundDepthTexture=le}if(G.depthTexture&&!M.__autoAllocateDepthBuffer)if(oe)for(let le=0;le<6;le++)F(M.__webglFramebuffer[le],G,le);else{const le=G.texture.mipmaps;le&&le.length>0?F(M.__webglFramebuffer[0],G,0):F(M.__webglFramebuffer,G,0)}else if(oe){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=n.createRenderbuffer(),L(M.__webglDepthbuffer[le],G,!1);else{const de=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}else{const le=G.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),L(M.__webglDepthbuffer,G,!1);else{const de=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(G,M,oe){const le=i.get(G);M!==void 0&&R(le.__webglFramebuffer,G,G.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),oe!==void 0&&O(G)}function I(G){const M=G.texture,oe=i.get(G),le=i.get(M);G.addEventListener("dispose",v);const de=G.textures,be=G.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=M.version,o.memory.textures++),be){oe.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){oe.__webglFramebuffer[ge]=[];for(let xe=0;xe<M.mipmaps.length;xe++)oe.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else oe.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){oe.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)oe.__webglFramebuffer[ge]=n.createFramebuffer()}else oe.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ge=0,xe=de.length;ge<xe;ge++){const Re=i.get(de[ge]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(G.samples>0&&Se(G)===!1){oe.__webglMultisampledFramebuffer=n.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){const xe=de[ge];oe.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]);const Re=r.convert(xe.format,xe.colorSpace),Ye=r.convert(xe.type),Ne=x(xe.internalFormat,Re,Ye,xe.normalized,xe.colorSpace,G.isXRRenderTarget===!0),Pe=ye(G);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,G.width,G.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,oe.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),G.depthBuffer&&(oe.__webglDepthRenderbuffer=n.createRenderbuffer(),L(oe.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ve(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)R(oe.__webglFramebuffer[ge][xe],G,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else R(oe.__webglFramebuffer[ge],G,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(M)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,xe=de.length;ge<xe;ge++){const Re=de[ge],Ye=i.get(Re);let Ne=n.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ne=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),ve(Ne,Re),R(oe.__webglFramebuffer,G,Re,n.COLOR_ATTACHMENT0+ge,Ne,0),p(Re)&&y(Ne)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ge=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,le.__webglTexture),ve(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)R(oe.__webglFramebuffer[xe],G,M,n.COLOR_ATTACHMENT0,ge,xe);else R(oe.__webglFramebuffer,G,M,n.COLOR_ATTACHMENT0,ge,0);p(M)&&y(ge),t.unbindTexture()}G.depthBuffer&&O(G)}function K(G){const M=G.textures;for(let oe=0,le=M.length;oe<le;oe++){const de=M[oe];if(p(de)){const be=A(G),Ce=i.get(de).__webglTexture;t.bindTexture(be,Ce),y(be),t.unbindTexture()}}}const ie=[],W=[];function ae(G){if(G.samples>0){if(Se(G)===!1){const M=G.textures,oe=G.width,le=G.height;let de=n.COLOR_BUFFER_BIT;const be=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(G),ge=M.length>1;if(ge)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=G.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(M[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,oe,le,0,0,oe,le,de,n.NEAREST),c===!0&&(ie.length=0,W.length=0,ie.push(n.COLOR_ATTACHMENT0+Re),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&(ie.push(be),W.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,W)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(M[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&c){const M=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ye(G){return Math.min(s.maxSamples,G.samples)}function Se(G){const M=i.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $(G){const M=o.render.frame;u.get(G)!==M&&(u.set(G,M),G.update())}function ze(G,M){const oe=G.colorSpace,le=G.format,de=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||oe!==Br&&oe!==Mi&&(ft.getTransfer(oe)===bt?(le!==Un||de!==yn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",oe)),M}function Ae(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(l.width=G.naturalWidth||G.width,l.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(l.width=G.displayWidth,l.height=G.displayHeight):(l.width=G.width,l.height=G.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=R,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Df(n,e){function t(i,s=Mi){let r;const o=ft.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xc)return n.BYTE;if(i===qc)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===Wa)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===ei)return n.HALF_FLOAT;if(i===Jc)return n.ALPHA;if(i===Zc)return n.RGB;if(i===Un)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Ya)return n.RED;if(i===$a)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===Ja)return n.RG_INTEGER;if(i===Za)return n.RGBA_INTEGER;if(i===Rr||i===Pr||i===Lr||i===Ir)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ia||i===sa||i===ra||i===oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===aa||i===la||i===ca||i===ua||i===ha||i===zr||i===da)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===aa||i===la)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ca)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ua)return r.COMPRESSED_R11_EAC;if(i===ha)return r.COMPRESSED_SIGNED_R11_EAC;if(i===zr)return r.COMPRESSED_RG11_EAC;if(i===da)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fa||i===pa||i===ma||i===ga||i===_a||i===va||i===xa||i===ya||i===Ma||i===Sa||i===ba||i===Ea||i===wa||i===Ta)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ma)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ga)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_a)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===va)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ba)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ea)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wa)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ta)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===Ca||i===Ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Aa)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pa||i===La||i===kr||i===Ia)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ou(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:Gx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends Di{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Hx,p={},y=t.getContextAttributes();let A=null,x=null;const S=[],b=[],T=new we;let v=null,C=null;const w=new wn;w.viewport=new Ut;const U=new wn;U.viewport=new Ut;const q=[w,U],B=new Ef;let k=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let X=S[E];return X===void 0&&(X=new Ho,S[E]=X),X.getTargetRaySpace()},this.getControllerGrip=function(E){let X=S[E];return X===void 0&&(X=new Ho,S[E]=X),X.getGripSpace()},this.getHand=function(E){let X=S[E];return X===void 0&&(X=new Ho,S[E]=X),X.getHandSpace()};function V(E){const X=b.indexOf(E.inputSource);if(X===-1)return;const te=S[X];te!==void 0&&(te.update(E.inputSource,E.frame,l||o),te.dispatchEvent({type:E.type,data:E.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let E=0;E<S.length;E++){const X=b[E];X!==null&&(b[E]=null,S[E].disconnect(X))}k=null,D=null,g.reset();for(const E in p)delete p[E];if(e.setRenderTarget(A),f=null,h=null,d=null,s=null,x=null,N.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),C!==null){const E=C.camera;E.fov=C.fov,E.zoom=C.zoom,E.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Q=null,R=null;y.depth&&(R=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=y.stencil?Xi:mi,Q=y.stencil?js:jn);const L={colorFormat:t.RGBA8,depthFormat:R,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(L),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new On(h.textureWidth,h.textureHeight,{format:Un,type:yn,depthTexture:new tr(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new On(f.framebufferWidth,f.framebufferHeight,{format:Un,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),N.setContext(s),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(E){for(let X=0;X<E.removed.length;X++){const te=E.removed[X],Q=b.indexOf(te);Q>=0&&(b[Q]=null,S[Q].disconnect(te))}for(let X=0;X<E.added.length;X++){const te=E.added[X];let Q=b.indexOf(te);if(Q===-1){for(let L=0;L<S.length;L++)if(L>=b.length){b.push(te),Q=L;break}else if(b[L]===null){b[L]=te,Q=L;break}if(Q===-1)break}const R=S[Q];R&&R.connect(te)}}const Y=new z,J=new z;function ee(E,X,te){Y.setFromMatrixPosition(X.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const Q=Y.distanceTo(J),R=X.projectionMatrix.elements,L=te.projectionMatrix.elements,F=R[14]/(R[10]-1),O=R[14]/(R[10]+1),ne=(R[9]+1)/R[5],I=(R[9]-1)/R[5],K=(R[8]-1)/R[0],ie=(L[8]+1)/L[0],W=F*K,ae=F*ie,ye=Q/(-K+ie),Se=ye*-K;if(X.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Se),E.translateZ(ye),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),R[10]===-1)E.projectionMatrix.copy(X.projectionMatrix),E.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const $=F+ye,ze=O+ye,Ae=W-Se,G=ae+(Q-Se),M=ne*O/ze*$,oe=I*O/ze*$;E.projectionMatrix.makePerspective(Ae,G,M,oe,$,ze),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function j(E,X){X===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(X.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let X=E.near,te=E.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(te=g.depthFar)),B.near=U.near=w.near=X,B.far=U.far=w.far=te,(k!==B.near||D!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,D=B.far),B.layers.mask=E.layers.mask|6,w.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;const Q=E.parent,R=B.cameras;j(B,Q);for(let L=0;L<R.length;L++)j(R[L],Q);R.length===2?ee(B,w,U):B.projectionMatrix.copy(w.projectionMatrix),C===null&&E.isPerspectiveCamera&&(C={camera:E,fov:E.fov,zoom:E.zoom}),he(E,B,Q)};function he(E,X,te){te===null?E.matrix.copy(X.matrixWorld):(E.matrix.copy(te.matrixWorld),E.matrix.invert(),E.matrix.multiply(X.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(X.projectionMatrix),E.projectionMatrixInverse.copy(X.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Vr*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(E){c=E,h!==null&&(h.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(E){return p[E]};let me=null;function ve(E,X){if(u=X.getViewerPose(l||o),m=X,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Q=!1;te.length!==B.cameras.length&&(B.cameras.length=0,Q=!0);for(let O=0;O<te.length;O++){const ne=te[O];let I=null;if(f!==null)I=f.getViewport(ne);else{const ie=d.getViewSubImage(h,ne);I=ie.viewport,O===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let K=q[O];K===void 0&&(K=new wn,K.layers.enable(O),K.viewport=new Ut,q[O]=K),K.matrix.fromArray(ne.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ne.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(I.x,I.y,I.width,I.height),O===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Q===!0&&B.cameras.push(K)}const R=s.enabledFeatures;if(R&&R.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const O=d.getDepthInformation(te[0]);O&&O.isValid&&O.texture&&g.init(O,s.renderState)}if(R&&R.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let O=0;O<te.length;O++){const ne=te[O].camera;if(ne){let I=p[ne];I||(I=new ou,p[ne]=I);const K=d.getCameraImage(ne);I.sourceTexture=K}}}}for(let te=0;te<S.length;te++){const Q=b[te],R=S[te];Q!==null&&R!==void 0&&R.update(Q,X,l||o)}me&&me(E,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),m=null}const N=new Af;N.setAnimationLoop(ve),this.setAnimationLoop=function(E){me=E},this.dispose=function(){}}}const Xx=new xt,Nf=new nt;Nf.set(-1,0,0,0,1,0,0,0,1);function qx(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,_f(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,A):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),A=y.envMap,x=y.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const b=S.program;i.uniformBlockBinding(x,b)}function l(x,S){let b=s[x.id];b===void 0&&(g(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",y));const T=S.program;i.updateUBOMapping(x,T);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const S=d();x.__bindingPointIndex=S;const b=n.createBuffer(),T=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=s[x.id],b=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,C=b.length;v<C;v++){const w=b[v];if(Array.isArray(w))for(let U=0,q=w.length;U<q;U++)f(w[U],v,U,T);else f(w,v,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,S,b,T){if(_(x,S,b,T)===!0){const v=x.__offset,C=x.value;if(Array.isArray(C)){let w=0;for(let U=0;U<C.length;U++){const q=C[U],B=p(q);m(q,x.__data,w),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(w+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function m(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function _(x,S,b,T){const v=x.value,C=S+"_"+b;if(T[C]===void 0)return typeof v=="number"||typeof v=="boolean"?T[C]=v:ArrayBuffer.isView(v)?T[C]=v.slice():T[C]=v.clone(),!0;{const w=T[C];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(x){const S=x.uniforms;let b=0;const T=16;for(let C=0,w=S.length;C<w;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let q=0,B=U.length;q<B;q++){const k=U[q],D=Array.isArray(k.value)?k.value:[k.value];for(let V=0,H=D.length;V<H;V++){const Z=D[V],Y=p(Z),J=b%T,ee=J%Y.boundary,j=J+ee;b+=ee,j!==0&&T-j<Y.storage&&(b+=T-j),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=Y.storage}}}const v=b%T;return v>0&&(b+=T-v),x.__size=b,x.__cache={},this}function p(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):et("WebGLRenderer: Unsupported uniform value type.",x),S}function y(x){const S=x.target;S.removeEventListener("dispose",y);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function A(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}const $x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function Jx(){return oi===null&&(oi=new tu($x,16,16,ji,ei),oi.name="DFG_LUT",oi.minFilter=en,oi.magFilter=en,oi.wrapS=ci,oi.wrapT=ci,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Uf{constructor(e={}){const{canvas:t=jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=yn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=f,g=new Set([Za,Ja,$a]),p=new Set([yn,jn,Qs,js,Xa,qa]),y=new Uint32Array(4),A=new Int32Array(4),x=new z;let S=null,b=null;const T=[],v=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1,q=null,B=null,k=null,D=null;this._outputColorSpace=cn;let V=0,H=0,Z=null,Y=-1,J=null;const ee=new Ut,j=new Ut;let he=null;const me=new ut(0);let ve=0,N=t.width,E=t.height,X=1,te=null,Q=null;const R=new Ut(0,0,N,E),L=new Ut(0,0,N,E);let F=!1;const O=new nl;let ne=!1,I=!1;const K=new xt,ie=new z,W=new Ut,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Se(){return Z===null?X:1}let $=i;function ze(P,se){return t.getContext(P,se)}let Ae,G,M,oe,le,de,be,Ce,ge,xe,Re,Ye,Ne,Pe,$e,je,it,re,Le,_e,Ie,ke,Me;try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),$===null){const se="webgl2";if($=ze(se,P),$===null)throw ze(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(P){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),pt("WebGLRenderer: "+P.message),P}function Je(){Ae=new Z_($),Ae.init(),Ie=new Df($,Ae),G=new B_($,Ae,e,Ie),M=new kx($,Ae),G.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),B=$.createFramebuffer(),k=$.createFramebuffer(),D=$.createFramebuffer(),oe=new j_($),le=new wx,de=new Bx($,Ae,M,le,G,Ie,oe),be=new J_(w),Ce=new t0($),ke=new z_($,Ce),ge=new K_($,Ce,oe,ke),xe=new tv($,ge,Ce,ke,oe),re=new ev($,G,de),$e=new G_(le),Re=new Ex(w,be,Ae,G,ke,$e),Ye=new qx(w,le),Ne=new Ax,Pe=new Dx(Ae),it=new F_(w,be,M,xe,m,c),je=new zx(w,xe,G),Me=new Yx($,oe,G,M),Le=new k_($,Ae,oe),_e=new Q_($,Ae,oe),oe.programs=Re.programs,w.capabilities=G,w.extensions=Ae,w.properties=le,w.renderLists=Ne,w.shadowMap=je,w.state=M,w.info=oe}_!==yn&&(C=new iv(_,t.width,t.height,a,s,r));const Xe=new Wx(w,$);this.xr=Xe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(N,E,!1))},this.getSize=function(P){return P.set(N,E)},this.setSize=function(P,se,fe=!0){if(Xe.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,E=se,t.width=Math.floor(P*X),t.height=Math.floor(se*X),fe===!0&&(t.style.width=P+"px",t.style.height=se+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(N*X,E*X).floor()},this.setDrawingBufferSize=function(P,se,fe){N=P,E=se,X=fe,t.width=Math.floor(P*fe),t.height=Math.floor(se*fe),this.setViewport(0,0,P,se)},this.setEffects=function(P){if(_===yn){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let se=0;se<P.length;se++)if(P[se].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ee)},this.getViewport=function(P){return P.copy(R)},this.setViewport=function(P,se,fe,ce){P.isVector4?R.set(P.x,P.y,P.z,P.w):R.set(P,se,fe,ce),M.viewport(ee.copy(R).multiplyScalar(X).round())},this.getScissor=function(P){return P.copy(L)},this.setScissor=function(P,se,fe,ce){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,se,fe,ce),M.scissor(j.copy(L).multiplyScalar(X).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(P){M.setScissorTest(F=P)},this.setOpaqueSort=function(P){te=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(P=!0,se=!0,fe=!0){let ce=0;if(P){let ue=!1;if(Z!==null){const Fe=Z.texture.format;ue=g.has(Fe)}if(ue){const Fe=Z.texture.type,Ge=p.has(Fe),Ue=it.getClearColor(),He=it.getClearAlpha(),qe=Ue.r,lt=Ue.g,ht=Ue.b;Ge?(y[0]=qe,y[1]=lt,y[2]=ht,y[3]=He,$.clearBufferuiv($.COLOR,0,y)):(A[0]=qe,A[1]=lt,A[2]=ht,A[3]=He,$.clearBufferiv($.COLOR,0,A))}else ce|=$.COLOR_BUFFER_BIT}se&&(ce|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&$.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),q=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),it.dispose(),Ne.dispose(),Pe.dispose(),le.dispose(),be.dispose(),xe.dispose(),ke.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",ku),Xe.removeEventListener("sessionend",Bu),ss.stop()};function Pt(P){P.preventDefault(),pc("WebGLRenderer: Context Lost."),U=!0}function Mt(){pc("WebGLRenderer: Context Restored."),U=!1;const P=oe.autoReset,se=je.enabled,fe=je.autoUpdate,ce=je.needsUpdate,ue=je.type;Je(),oe.autoReset=P,je.enabled=se,je.autoUpdate=fe,je.needsUpdate=ce,je.type=ue}function Gn(P){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ii(P){const se=P.target;se.removeEventListener("dispose",ii),hp(se)}function hp(P){dp(P),le.remove(P)}function dp(P){const se=le.get(P).programs;se!==void 0&&(se.forEach(function(fe){Re.releaseProgram(fe)}),P.isShaderMaterial&&Re.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,fe,ce,ue,Fe){se===null&&(se=ae);const Ge=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Ue=mp(P,se,fe,ce,ue);M.setMaterial(ce,Ge);let He=fe.index,qe=1;if(ce.wireframe===!0){if(He=ge.getWireframeAttribute(fe),He===void 0)return;qe=2}const lt=fe.drawRange,ht=fe.attributes.position;let We=lt.start*qe,St=(lt.start+lt.count)*qe;Fe!==null&&(We=Math.max(We,Fe.start*qe),St=Math.min(St,(Fe.start+Fe.count)*qe)),He!==null?(We=Math.max(We,0),St=Math.min(St,He.count)):ht!=null&&(We=Math.max(We,0),St=Math.min(St,ht.count));const Ht=St-We;if(Ht<0||Ht===1/0)return;ke.setup(ue,ce,Ue,fe,He);let It,Rt=Le;if(He!==null&&(It=Ce.get(He),Rt=_e,Rt.setIndex(It)),ue.isMesh)ce.wireframe===!0?(M.setLineWidth(ce.wireframeLinewidth*Se()),Rt.setMode($.LINES)):Rt.setMode($.TRIANGLES);else if(ue.isLine){let on=ce.linewidth;on===void 0&&(on=1),M.setLineWidth(on*Se()),ue.isLineSegments?Rt.setMode($.LINES):ue.isLineLoop?Rt.setMode($.LINE_LOOP):Rt.setMode($.LINE_STRIP)}else ue.isPoints?Rt.setMode($.POINTS):ue.isSprite&&Rt.setMode($.TRIANGLES);if(ue.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const on=ue._multiDrawStarts,Be=ue._multiDrawCounts,hn=ue._multiDrawCount,vt=He?Ce.get(He).bytesPerElement:1,An=le.get(ce).currentProgram.getUniforms();for(let si=0;si<hn;si++)An.setValue($,"_gl_DrawID",si),Rt.render(on[si]/vt,Be[si])}else if(ue.isInstancedMesh)Rt.renderInstances(We,Ht,ue.count);else if(fe.isInstancedBufferGeometry){const on=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Be=Math.min(fe.instanceCount,on);Rt.renderInstances(We,Ht,Be)}else Rt.render(We,Ht)};function zu(P,se,fe,ce){q!==null&&P.isNodeMaterial&&q.setObject(ce,P),ne===!0&&$e.setState(P,fe,!1),P.transparent===!0&&P.side===Ln&&P.forceSinglePass===!1?(P.side=gn,P.needsUpdate=!0,ao(P,se,ce),P.side=Ki,P.needsUpdate=!0,ao(P,se,ce),P.side=Ln):ao(P,se,ce)}this.compile=function(P,se,fe=null){fe===null&&(fe=P),q!==null&&q.renderStart(P,se,fe),b=Pe.get(fe),b.init(se),v.push(b),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(se.layers)&&(b.pushLight(ue),ue.castShadow&&b.pushShadow(ue))}),P!==fe&&P.traverseVisible(function(ue){ue.isLight&&ue.layers.test(se.layers)&&(b.pushLight(ue),ue.castShadow&&b.pushShadow(ue))}),b.setupLights(),q!==null&&q.updateLights(b.state.lightsArray),I=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,I),ne===!0&&$e.setGlobalState(this.clippingPlanes,se),q!==null&&je.render(b.state.shadowsArray,fe,se);const ce=new Set;return P.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Fe=ue.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ue=Fe[Ge];zu(Ue,fe,se,ue),ce.add(Ue)}else zu(Fe,fe,se,ue),ce.add(Fe)}),b=v.pop(),q!==null&&q.renderEnd(),ce},this.compileAsync=function(P,se,fe=null){const ce=this.compile(P,se,fe);return new Promise(ue=>{function Fe(){if(ce.forEach(function(Ge){const He=le.get(Ge).currentProgram;(He===void 0||He.isReady())&&ce.delete(Ge)}),ce.size===0){ue(P);return}setTimeout(Fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ml=null;function fp(P){Ml&&Ml(P)}function ku(){ss.stop()}function Bu(){ss.start()}const ss=new Af;ss.setAnimationLoop(fp),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(P){Ml=P,Xe.setAnimationLoop(P),P===null?ss.stop():ss.start()},Xe.addEventListener("sessionstart",ku),Xe.addEventListener("sessionend",Bu),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;q!==null&&q.renderStart(P,se);const fe=Xe.enabled===!0&&Xe.isPresenting===!0,ce=C!==null&&(Z===null||fe)&&C.begin(w,Z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(se),se=Xe.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,se,Z),b=Pe.get(P,v.length),b.init(se),b.state.textureUnits=de.getTextureUnits(),v.push(b),K.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),O.setFromProjectionMatrix(K,Jn,se.reversedDepth),I=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,I),S=Ne.get(P,T.length),S.init(),T.push(S),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=w.xr.getDepthSensingMesh();Ge!==null&&Sl(Ge,se,-1/0,w.sortObjects)}Sl(P,se,0,w.sortObjects),S.finish(),q!==null&&q.updateLights(b.state.lightsArray),w.sortObjects===!0&&S.sort(te,Q),ye=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ye&&it.addToRenderList(S,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&$e.beginShadows();const ue=b.state.shadowsArray;if(je.render(ue,P,se),ne===!0&&$e.endShadows(),(ce&&C.hasRenderPass())===!1){const Ge=S.opaque,Ue=S.transmissive;if(b.setupLights(),se.isArrayCamera){const He=se.cameras;if(Ue.length>0)for(let qe=0,lt=He.length;qe<lt;qe++){const ht=He[qe];Vu(Ge,Ue,P,ht)}ye&&it.render(P);for(let qe=0,lt=He.length;qe<lt;qe++){const ht=He[qe];Gu(S,P,ht,ht.viewport)}}else Ue.length>0&&Vu(Ge,Ue,P,se),ye&&it.render(P),Gu(S,P,se)}Z!==null&&H===0&&(de.updateMultisampleRenderTarget(Z),de.updateRenderTargetMipmap(Z)),ce&&C.end(w),P.isScene===!0&&P.onAfterRender(w,P,se),ke.resetDefaultState(),Y=-1,J=null,v.pop(),v.length>0?(b=v[v.length-1],de.setTextureUnits(b.state.textureUnits),ne===!0&&$e.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,q!==null&&q.renderEnd()};function Sl(P,se,fe,ce){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)fe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLightProbeGrid)b.pushLightProbeGrid(P);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(O)){ce&&W.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const Ge=xe.update(P),Ue=P.material;Ue.visible&&S.push(P,Ge,Ue,fe,W.z,null,se)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(O))){const Ge=xe.update(P),Ue=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),W.copy(P.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),W.copy(Ge.boundingSphere.center)),W.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Ue)){const He=Ge.groups;for(let qe=0,lt=He.length;qe<lt;qe++){const ht=He[qe],We=Ue[ht.materialIndex];We&&We.visible&&S.push(P,Ge,We,fe,W.z,ht,se)}}else Ue.visible&&S.push(P,Ge,Ue,fe,W.z,null,se)}}const Fe=P.children;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++)Sl(Fe[Ge],se,fe,ce)}function Gu(P,se,fe,ce){const{opaque:ue,transmissive:Fe,transparent:Ge}=P;b.setupLightsView(fe),ne===!0&&$e.setGlobalState(w.clippingPlanes,fe),ce&&M.viewport(ee.copy(ce)),ue.length>0&&oo(ue,se,fe),Fe.length>0&&oo(Fe,se,fe),Ge.length>0&&oo(Ge,se,fe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Vu(P,se,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ce.id]===void 0){const We=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ce.id]=new On(1,1,{generateMipmaps:!0,type:We?ei:yn,minFilter:Wi,samples:Math.max(4,G.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Fe=b.state.transmissionRenderTarget[ce.id],Ge=ce.viewport||ee;Fe.setSize(Ge.z*w.transmissionResolutionScale,Ge.w*w.transmissionResolutionScale);const Ue=w.getRenderTarget(),He=w.getActiveCubeFace(),qe=w.getActiveMipmapLevel();w.setRenderTarget(Fe),w.getClearColor(me),ve=w.getClearAlpha(),ve<1&&w.setClearColor(16777215,.5),w.clear(),ye&&it.render(fe);const lt=w.toneMapping;w.toneMapping=Zn;const ht=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),b.setupLightsView(ce),ne===!0&&$e.setGlobalState(w.clippingPlanes,ce),oo(P,fe,ce),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let St=0,Ht=se.length;St<Ht;St++){const It=se[St],{object:Rt,geometry:on,material:Be,group:hn}=It;if(Be.side===Ln&&Rt.layers.test(ce.layers)){const vt=Be.side;Be.side=gn,Be.needsUpdate=!0,Hu(Rt,fe,ce,on,Be,hn),Be.side=vt,Be.needsUpdate=!0,We=!0}}We===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}w.setRenderTarget(Ue,He,qe),w.setClearColor(me,ve),ht!==void 0&&(ce.viewport=ht),w.toneMapping=lt}function oo(P,se,fe){const ce=se.isScene===!0?se.overrideMaterial:null;for(let ue=0,Fe=P.length;ue<Fe;ue++){const Ge=P[ue],{object:Ue,geometry:He,group:qe}=Ge;let lt=Ge.material;lt.allowOverride===!0&&ce!==null&&(lt=ce),Ue.layers.test(fe.layers)&&Hu(Ue,se,fe,He,lt,qe)}}function Hu(P,se,fe,ce,ue,Fe){q!==null&&ue.isNodeMaterial&&q.setObject(P,ue),P.onBeforeRender(w,se,fe,ce,ue,Fe),P.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ue.onBeforeRender(w,se,fe,ce,P,Fe),ue.transparent===!0&&ue.side===Ln&&ue.forceSinglePass===!1?(ue.side=gn,ue.needsUpdate=!0,w.renderBufferDirect(fe,se,ce,ue,P,Fe),ue.side=Ki,ue.needsUpdate=!0,w.renderBufferDirect(fe,se,ce,ue,P,Fe),ue.side=Ln):w.renderBufferDirect(fe,se,ce,ue,P,Fe),P.onAfterRender(w,se,fe,ce,ue,Fe)}function ao(P,se,fe){se.isScene!==!0&&(se=ae);const ce=le.get(P),ue=b.state.lights,Fe=b.state.shadowsArray,Ge=ue.state.version,Ue=Re.getParameters(P,ue.state,Fe,se,fe,b.state.lightProbeGridArray),He=Re.getProgramCacheKey(Ue);let qe=ce.programs;ce.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?se.environment:null,ce.fog=se.fog;const lt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ce.envMap=be.get(P.envMap||ce.environment,lt),ce.envMapRotation=ce.environment!==null&&P.envMap===null?se.environmentRotation:P.envMapRotation,qe===void 0&&(P.addEventListener("dispose",ii),qe=new Map,ce.programs=qe);let ht=qe.get(He);if(ht!==void 0){if(ce.currentProgram===ht&&ce.lightsStateVersion===Ge)return Xu(P,Ue),ht}else Ue.uniforms=Re.getUniforms(P),q!==null&&P.isNodeMaterial&&q.build(P,fe,Ue),P.onBeforeCompile(Ue,w),ht=Re.acquireProgram(Ue,He),qe.set(He,ht),ce.uniforms=Ue.uniforms;const We=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(We.clippingPlanes=$e.uniform),Xu(P,Ue),ce.needsLights=_p(P),ce.lightsStateVersion=Ge,ce.needsLights&&(We.ambientLightColor.value=ue.state.ambient,We.lightProbe.value=ue.state.probe,We.sunLights.value=ue.state.sun,We.sunLightShadows.value=ue.state.sunShadow,We.directionalLights.value=ue.state.directional,We.directionalLightShadows.value=ue.state.directionalShadow,We.spotLights.value=ue.state.spot,We.spotLightShadows.value=ue.state.spotShadow,We.rectAreaLights.value=ue.state.rectArea,We.ltc_1.value=ue.state.rectAreaLTC1,We.ltc_2.value=ue.state.rectAreaLTC2,We.pointLights.value=ue.state.point,We.pointLightShadows.value=ue.state.pointShadow,We.hemisphereLights.value=ue.state.hemi,We.sunShadowMatrix.value=ue.state.sunShadowMatrix,We.sunShadowCascade.value=ue.state.sunShadowCascade,We.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,We.spotLightMatrix.value=ue.state.spotLightMatrix,We.spotLightMap.value=ue.state.spotLightMap,We.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=b.state.lightProbeGridArray.length>0,ce.currentProgram=ht,ce.uniformsList=null,ht}function Wu(P){if(P.uniformsList===null){const se=P.currentProgram.getUniforms();P.uniformsList=Wo.seqWithValue(se.seq,P.uniforms)}return P.uniformsList}function Xu(P,se){const fe=le.get(P);fe.outputColorSpace=se.outputColorSpace,fe.batching=se.batching,fe.batchingColor=se.batchingColor,fe.instancing=se.instancing,fe.instancingColor=se.instancingColor,fe.instancingMorph=se.instancingMorph,fe.skinning=se.skinning,fe.morphTargets=se.morphTargets,fe.morphNormals=se.morphNormals,fe.morphColors=se.morphColors,fe.morphTargetsCount=se.morphTargetsCount,fe.numClippingPlanes=se.numClippingPlanes,fe.numIntersection=se.numClipIntersection,fe.vertexAlphas=se.vertexAlphas,fe.vertexTangents=se.vertexTangents,fe.toneMapping=se.toneMapping}function pp(P,se){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;x.setFromMatrixPosition(se.matrixWorld);for(let fe=0,ce=P.length;fe<ce;fe++){const ue=P[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(x))return ue}return null}function mp(P,se,fe,ce,ue){se.isScene!==!0&&(se=ae),de.resetTextureUnits();const Fe=se.fog,Ge=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?se.environment:null,Ue=Z===null?w.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ft.workingColorSpace,He=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,qe=be.get(ce.envMap||Ge,He),lt=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),We=!!fe.morphAttributes.position,St=!!fe.morphAttributes.normal,Ht=!!fe.morphAttributes.color;let It=Zn;ce.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(It=w.toneMapping);const Rt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,on=Rt!==void 0?Rt.length:0,Be=le.get(ce),hn=b.state.lights;if(ne===!0&&(I===!0||P!==J)){const Lt=P===J&&ce.id===Y;$e.setState(ce,P,Lt)}let vt=!1;ce.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==hn.state.version||Be.outputColorSpace!==Ue||ue.isBatchedMesh&&Be.batching===!1||!ue.isBatchedMesh&&Be.batching===!0||ue.isBatchedMesh&&Be.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&Be.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&Be.instancing===!1||!ue.isInstancedMesh&&Be.instancing===!0||ue.isSkinnedMesh&&Be.skinning===!1||!ue.isSkinnedMesh&&Be.skinning===!0||ue.isInstancedMesh&&Be.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&Be.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&Be.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&Be.instancingMorph===!1&&ue.morphTexture!==null||Be.envMap!==qe||ce.fog===!0&&Be.fog!==Fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==$e.numPlanes||Be.numIntersection!==$e.numIntersection)||Be.vertexAlphas!==lt||Be.vertexTangents!==ht||Be.morphTargets!==We||Be.morphNormals!==St||Be.morphColors!==Ht||Be.toneMapping!==It||Be.morphTargetsCount!==on||!!Be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Be.__version=ce.version);let An=Be.currentProgram;vt===!0&&(An=ao(ce,se,ue),q&&ce.isNodeMaterial&&q.onUpdateProgram(ce,An,Be));let si=!1,Oi=!1,ws=!1;const Ct=An.getUniforms(),Bt=Be.uniforms;if(M.useProgram(An.program)&&(si=!0,Oi=!0,ws=!0),ce.id!==Y&&(Y=ce.id,Oi=!0),Be.needsLights){const Lt=pp(b.state.lightProbeGridArray,ue);Be.lightProbeGrid!==Lt&&(Be.lightProbeGrid=Lt,Oi=!0)}if(si||J!==P){M.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ct.setValue($,"projectionMatrix",P.projectionMatrix),Ct.setValue($,"viewMatrix",P.matrixWorldInverse);const zi=Ct.map.cameraPosition;zi!==void 0&&zi.setValue($,ie.setFromMatrixPosition(P.matrixWorld)),G.logarithmicDepthBuffer&&Ct.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ct.setValue($,"isOrthographic",P.isOrthographicCamera===!0),J!==P&&(J=P,Oi=!0,ws=!0)}if(Be.needsLights&&(hn.state.sunShadowMap.length>0&&Ct.setValue($,"sunShadowMap",hn.state.sunShadowMap,de),hn.state.directionalShadowMap.length>0&&Ct.setValue($,"directionalShadowMap",hn.state.directionalShadowMap,de),hn.state.spotShadowMap.length>0&&Ct.setValue($,"spotShadowMap",hn.state.spotShadowMap,de),hn.state.pointShadowMap.length>0&&Ct.setValue($,"pointShadowMap",hn.state.pointShadowMap,de)),ue.isSkinnedMesh){Ct.setOptional($,ue,"bindMatrix"),Ct.setOptional($,ue,"bindMatrixInverse");const Lt=ue.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue($,"boneTexture",Lt.boneTexture,de))}ue.isBatchedMesh&&(Ct.setOptional($,ue,"batchingTexture"),Ct.setValue($,"batchingTexture",ue._matricesTexture,de),Ct.setOptional($,ue,"batchingIdTexture"),Ct.setValue($,"batchingIdTexture",ue._indirectTexture,de),Ct.setOptional($,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Ct.setValue($,"batchingColorTexture",ue._colorsTexture,de));const Fi=fe.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&re.update(ue,fe,An),(Oi||Be.receiveShadow!==ue.receiveShadow)&&(Be.receiveShadow=ue.receiveShadow,Ct.setValue($,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&se.environment!==null&&(Bt.envMapIntensity.value=se.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Jx()),Oi){if(Ct.setValue($,"toneMappingExposure",w.toneMappingExposure),Be.needsLights&&gp(Bt,ws),Fe&&ce.fog===!0&&Ye.refreshFogUniforms(Bt,Fe),Ye.refreshMaterialUniforms(Bt,ce,X,E,b.state.transmissionRenderTarget[P.id]),Be.needsLights&&Be.lightProbeGrid){const Lt=Be.lightProbeGrid;Bt.probesSH.value=Lt.texture,Bt.probesMin.value.copy(Lt.boundingBox.min),Bt.probesMax.value.copy(Lt.boundingBox.max),Bt.probesResolution.value.copy(Lt.resolution)}Wo.upload($,Wu(Be),Bt,de)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Wo.upload($,Wu(Be),Bt,de),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ct.setValue($,"center",ue.center),Ct.setValue($,"modelViewMatrix",ue.modelViewMatrix),Ct.setValue($,"normalMatrix",ue.normalMatrix),Ct.setValue($,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Lt=ce.uniformsGroups;for(let zi=0,Ts=Lt.length;zi<Ts;zi++){const Yu=Lt[zi];Me.update(Yu,An),Me.bind(Yu,An)}}return An}function gp(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.sunLights.needsUpdate=se,P.sunLightShadows.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function _p(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(P,se,fe){const ce=le.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),le.get(P.texture).__webglTexture=se,le.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,se){const fe=le.get(P);fe.__webglFramebuffer=se,fe.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(P,se=0,fe=0){Z=P,V=se,H=fe;let ce=null,ue=!1,Fe=!1;if(P){const Ue=le.get(P);if(Ue.__useDefaultFramebuffer!==void 0){M.bindFramebuffer($.FRAMEBUFFER,Ue.__webglFramebuffer),ee.copy(P.viewport),j.copy(P.scissor),he=P.scissorTest,M.viewport(ee),M.scissor(j),M.setScissorTest(he),Y=-1;return}else if(Ue.__webglFramebuffer===void 0)de.setupRenderTarget(P);else if(Ue.__hasExternalTextures)de.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const lt=P.depthTexture;if(Ue.__boundDepthTexture!==lt){if(lt!==null&&le.has(lt)&&(P.width!==lt.image.width||P.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(P)}}const He=P.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);const qe=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[se])?ce=qe[se][fe]:ce=qe[se],ue=!0):P.samples>0&&de.useMultisampledRTT(P)===!1?ce=le.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?ce=qe[fe]:ce=qe,ee.copy(P.viewport),j.copy(P.scissor),he=P.scissorTest}else ee.copy(R).multiplyScalar(X).floor(),j.copy(L).multiplyScalar(X).floor(),he=F;if(fe!==0&&(ce=B),M.bindFramebuffer($.FRAMEBUFFER,ce)&&M.drawBuffers(P,ce),M.viewport(ee),M.scissor(j),M.setScissorTest(he),ue){const Ue=le.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue.__webglTexture,fe)}else if(Fe){const Ue=se;for(let He=0;He<P.textures.length;He++){const qe=le.get(P.textures[He]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+He,qe.__webglTexture,fe,Ue)}}else if(P!==null&&fe!==0){const Ue=le.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ue.__webglTexture,fe)}Y=-1};function qu(P){const se=le.get(P);return(se.__readFormat!==P.format||se.__readType!==P.type)&&(se.__readFormat=P.format,se.__readType=P.type,se.__formatReadable=G.textureFormatReadable(P.format),se.__typeReadable=G.textureTypeReadable(P.type)),se}this.readRenderTargetPixels=function(P,se,fe,ce,ue,Fe,Ge,Ue=0){if(!(P&&P.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(He=He[Ge]),He){M.bindFramebuffer($.FRAMEBUFFER,He);try{const qe=P.textures[Ue],lt=qe.format,ht=qe.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ue);const We=qu(qe);if(We.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-ce&&fe>=0&&fe<=P.height-ue&&$.readPixels(se,fe,ce,ue,Ie.convert(lt),Ie.convert(ht),Fe)}finally{const qe=Z!==null?le.get(Z).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(P,se,fe,ce,ue,Fe,Ge,Ue=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(He=He[Ge]),He)if(se>=0&&se<=P.width-ce&&fe>=0&&fe<=P.height-ue){M.bindFramebuffer($.FRAMEBUFFER,He);const qe=P.textures[Ue],lt=qe.format,ht=qe.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ue);const We=qu(qe);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,St),$.bufferData($.PIXEL_PACK_BUFFER,Fe.byteLength,$.STREAM_READ),$.readPixels(se,fe,ce,ue,Ie.convert(lt),Ie.convert(ht),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Ht=Z!==null?le.get(Z).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,Ht);const It=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Fp($,It,4),$.bindBuffer($.PIXEL_PACK_BUFFER,St),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Fe),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(St),$.deleteSync(It),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,se=null,fe=0){const ce=Math.pow(2,-fe),ue=Math.floor(P.image.width*ce),Fe=Math.floor(P.image.height*ce),Ge=se!==null?se.x:0,Ue=se!==null?se.y:0;de.setTexture2D(P,0),$.copyTexSubImage2D($.TEXTURE_2D,fe,0,0,Ge,Ue,ue,Fe),M.unbindTexture()},this.copyTextureToTexture=function(P,se,fe=null,ce=null,ue=0,Fe=0){let Ge,Ue,He,qe,lt,ht,We,St,Ht;const It=P.isCompressedTexture?P.mipmaps[Fe]:P.image;if(fe!==null)Ge=fe.max.x-fe.min.x,Ue=fe.max.y-fe.min.y,He=fe.isBox3?fe.max.z-fe.min.z:1,qe=fe.min.x,lt=fe.min.y,ht=fe.isBox3?fe.min.z:0;else{const Bt=Math.pow(2,-ue);Ge=Math.floor(It.width*Bt),Ue=Math.floor(It.height*Bt),P.isDataArrayTexture?He=It.depth:P.isData3DTexture?He=Math.floor(It.depth*Bt):He=1,qe=0,lt=0,ht=0}ce!==null?(We=ce.x,St=ce.y,Ht=ce.z):(We=0,St=0,Ht=0);const Rt=Ie.convert(se.format),on=Ie.convert(se.type);let Be;se.isData3DTexture?(de.setTexture3D(se,0),Be=$.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(de.setTexture2DArray(se,0),Be=$.TEXTURE_2D_ARRAY):(de.setTexture2D(se,0),Be=$.TEXTURE_2D),M.activeTexture($.TEXTURE0),M.pixelStorei($.UNPACK_FLIP_Y_WEBGL,se.flipY),M.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),M.pixelStorei($.UNPACK_ALIGNMENT,se.unpackAlignment);const hn=M.getParameter($.UNPACK_ROW_LENGTH),vt=M.getParameter($.UNPACK_IMAGE_HEIGHT),An=M.getParameter($.UNPACK_SKIP_PIXELS),si=M.getParameter($.UNPACK_SKIP_ROWS),Oi=M.getParameter($.UNPACK_SKIP_IMAGES);M.pixelStorei($.UNPACK_ROW_LENGTH,It.width),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,It.height),M.pixelStorei($.UNPACK_SKIP_PIXELS,qe),M.pixelStorei($.UNPACK_SKIP_ROWS,lt),M.pixelStorei($.UNPACK_SKIP_IMAGES,ht);const ws=P.isDataArrayTexture||P.isData3DTexture,Ct=se.isDataArrayTexture||se.isData3DTexture;if(P.isDepthTexture){const Bt=le.get(P),Fi=le.get(se),Lt=le.get(Bt.__renderTarget),zi=le.get(Fi.__renderTarget);M.bindFramebuffer($.READ_FRAMEBUFFER,Lt.__webglFramebuffer),M.bindFramebuffer($.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Ts=0;Ts<He;Ts++)ws&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,le.get(P).__webglTexture,ue,ht+Ts),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,le.get(se).__webglTexture,Fe,Ht+Ts)),$.blitFramebuffer(qe,lt,Ge,Ue,We,St,Ge,Ue,$.DEPTH_BUFFER_BIT,$.NEAREST);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ue!==0||P.isRenderTargetTexture||le.has(P)){const Bt=le.get(P),Fi=le.get(se);M.bindFramebuffer($.READ_FRAMEBUFFER,k),M.bindFramebuffer($.DRAW_FRAMEBUFFER,D);for(let Lt=0;Lt<He;Lt++)ws?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Bt.__webglTexture,ue,ht+Lt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Bt.__webglTexture,ue),Ct?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Fi.__webglTexture,Fe,Ht+Lt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Fi.__webglTexture,Fe),ue!==0?$.blitFramebuffer(qe,lt,Ge,Ue,We,St,Ge,Ue,$.COLOR_BUFFER_BIT,$.NEAREST):Ct?$.copyTexSubImage3D(Be,Fe,We,St,Ht+Lt,qe,lt,Ge,Ue):$.copyTexSubImage2D(Be,Fe,We,St,qe,lt,Ge,Ue);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ct?P.isDataTexture||P.isData3DTexture?$.texSubImage3D(Be,Fe,We,St,Ht,Ge,Ue,He,Rt,on,It.data):se.isCompressedArrayTexture?$.compressedTexSubImage3D(Be,Fe,We,St,Ht,Ge,Ue,He,Rt,It.data):$.texSubImage3D(Be,Fe,We,St,Ht,Ge,Ue,He,Rt,on,It):P.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Fe,We,St,Ge,Ue,Rt,on,It.data):P.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Fe,We,St,It.width,It.height,Rt,It.data):$.texSubImage2D($.TEXTURE_2D,Fe,We,St,Ge,Ue,Rt,on,It);M.pixelStorei($.UNPACK_ROW_LENGTH,hn),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,vt),M.pixelStorei($.UNPACK_SKIP_PIXELS,An),M.pixelStorei($.UNPACK_SKIP_ROWS,si),M.pixelStorei($.UNPACK_SKIP_IMAGES,Oi),Fe===0&&se.generateMipmaps&&$.generateMipmap(Be),M.unbindTexture()},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&de.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?de.setTextureCube(P,0):P.isData3DTexture?de.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?de.setTexture2DArray(P,0):de.setTexture2D(P,0),M.unbindTexture()},this.resetState=function(){V=0,H=0,Z=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const Qt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ha,AddEquation:ds,AddOperation:Gd,AdditiveBlending:uc,AgXToneMapping:Vc,AlphaFormat:Jc,AlwaysCompare:Kd,AlwaysDepth:Zo,AlwaysStencilFunc:Xd,ArcCurve:cf,ArrayCamera:Ef,BackSide:gn,BasicDepthPacking:Hd,Box3:ts,BoxGeometry:Ni,BufferAttribute:Fn,BufferGeometry:Vt,ByteType:Xc,Camera:mu,CanvasTexture:ru,CatmullRomCurve3:lu,CineonToneMapping:Bc,CircleGeometry:il,ClampToEdgeWrapping:ci,Color:ut,ColorManagement:ft,ConeGeometry:Ms,ConstantAlphaFactor:zd,ConstantColorFactor:Od,Controls:Tf,CubeCamera:bf,CubeDepthTexture:lf,CubeReflectionMapping:Qi,CubeRefractionMapping:vs,CubeTexture:su,CubeUVReflectionMapping:Jr,CubicBezierCurve:cu,CubicBezierCurve3:uf,CullFaceBack:cc,CullFaceFront:yd,CullFaceNone:xd,Curve:ni,CurvePath:df,CustomBlending:Sd,CustomToneMapping:Gc,CylinderGeometry:Kr,Data3DTexture:sf,DataArrayTexture:Qc,DataTexture:tu,DepthFormat:mi,DepthStencilFormat:Xi,DepthTexture:tr,DirectionalLight:gu,DoubleSide:Ln,DstAlphaFactor:Ld,DstColorFactor:Dd,EllipseCurve:rl,EqualCompare:$d,EqualDepth:Qo,EquirectangularReflectionMapping:ko,EquirectangularRefractionMapping:Bo,Euler:Ii,EventDispatcher:Di,ExternalTexture:ou,ExtrudeGeometry:or,Float32BufferAttribute:yt,FloatType:Nn,FogExp2:tl,FrontSide:Ki,Frustum:nl,GLSL3:fc,GreaterCompare:Jd,GreaterDepth:ea,GreaterEqualCompare:Qa,GreaterEqualDepth:jo,Group:qi,HalfFloatType:ei,HemisphereLight:Sf,IcosahedronGeometry:jr,ImageUtils:tf,InstancedBufferAttribute:mc,InstancedMesh:gc,IntType:Wa,KeepStencilOp:Vo,Layers:el,LessCompare:Yd,LessDepth:Ko,LessEqualCompare:Ka,LessEqualDepth:Ks,Light:cl,LightShadow:pu,Line:ym,LineBasicMaterial:nu,LineCurve:uu,LineCurve3:hf,LineDashedMaterial:Km,LinearFilter:en,LinearMipmapLinearFilter:Wi,LinearMipmapNearestFilter:Go,LinearSRGBColorSpace:Br,LinearToneMapping:zc,LinearTransfer:Gr,MOUSE:Ei,Material:is,MathUtils:xn,Matrix2:bc,Matrix3:nt,Matrix4:xt,MaxEquation:Td,Mesh:_n,MeshBasicMaterial:Zr,MeshDepthMaterial:yf,MeshDistanceMaterial:Mf,MeshStandardMaterial:Hs,MinEquation:wd,MirroredRepeatWrapping:na,MixOperation:Bd,MultiplyBlending:dc,MultiplyOperation:Fc,NearestFilter:Kt,NearestMipmapLinearFilter:br,NearestMipmapNearestFilter:Vd,NeutralToneMapping:Hc,NeverCompare:qd,NeverDepth:Jo,NoBlending:di,NoColorSpace:Mi,NoToneMapping:Zn,NormalBlending:Ys,NotEqualCompare:Zd,NotEqualDepth:ta,Object3D:Gt,ObjectSpaceNormalMap:Wd,OneFactor:Cd,OneMinusConstantAlphaFactor:kd,OneMinusConstantColorFactor:Fd,OneMinusDstAlphaFactor:Id,OneMinusDstColorFactor:Nd,OneMinusSrcAlphaFactor:Oc,OneMinusSrcColorFactor:Pd,OrthographicCamera:eo,PCFShadowMap:qs,PCFSoftShadowMap:Md,PMREMGenerator:Ec,Path:vc,PerspectiveCamera:wn,Plane:li,PlaneGeometry:Ss,PointLight:ul,Points:af,PointsMaterial:iu,PolyhedronGeometry:sl,QuadraticBezierCurve:hu,QuadraticBezierCurve3:du,Quaternion:Li,R11_EAC_Format:ua,RED_GREEN_RGTC2_Format:kr,RED_RGTC1_Format:Pa,REVISION:Va,RG11_EAC_Format:zr,RGBAFormat:Un,RGBAIntegerFormat:Za,RGBA_ASTC_10x10_Format:Ea,RGBA_ASTC_10x5_Format:Ma,RGBA_ASTC_10x6_Format:Sa,RGBA_ASTC_10x8_Format:ba,RGBA_ASTC_12x10_Format:wa,RGBA_ASTC_12x12_Format:Ta,RGBA_ASTC_4x4_Format:fa,RGBA_ASTC_5x4_Format:pa,RGBA_ASTC_5x5_Format:ma,RGBA_ASTC_6x5_Format:ga,RGBA_ASTC_6x6_Format:_a,RGBA_ASTC_8x5_Format:va,RGBA_ASTC_8x6_Format:xa,RGBA_ASTC_8x8_Format:ya,RGBA_BPTC_Format:Aa,RGBA_ETC2_EAC_Format:ca,RGBA_PVRTC_2BPPV1_Format:oa,RGBA_PVRTC_4BPPV1_Format:ra,RGBA_S3TC_DXT1_Format:Pr,RGBA_S3TC_DXT3_Format:Lr,RGBA_S3TC_DXT5_Format:Ir,RGBFormat:Zc,RGB_BPTC_SIGNED_Format:Ca,RGB_BPTC_UNSIGNED_Format:Ra,RGB_ETC1_Format:aa,RGB_ETC2_Format:la,RGB_PVRTC_2BPPV1_Format:sa,RGB_PVRTC_4BPPV1_Format:ia,RGB_S3TC_DXT1_Format:Rr,RGFormat:ji,RGIntegerFormat:Ja,RawShaderMaterial:xf,Ray:rr,Raycaster:wf,RedFormat:Ya,RedIntegerFormat:$a,ReinhardToneMapping:kc,RenderTarget:nf,RepeatWrapping:Fr,ReverseSubtractEquation:Ed,SIGNED_R11_EAC_Format:ha,SIGNED_RED_GREEN_RGTC2_Format:Ia,SIGNED_RED_RGTC1_Format:La,SIGNED_RG11_EAC_Format:da,SRGBColorSpace:cn,SRGBTransfer:bt,Scene:of,ShaderChunk:rt,ShaderLib:Yn,ShaderMaterial:kn,Shape:Qr,ShapeUtils:ms,ShortType:qc,Sphere:ns,SphereGeometry:ol,Spherical:Sc,SplineCurve:fu,SrcAlphaFactor:Uc,SrcAlphaSaturateFactor:Ud,SrcColorFactor:Rd,StaticDrawUsage:Qd,SubtractEquation:bd,SubtractiveBlending:hc,TOUCH:Si,TangentSpaceNormalMap:Da,Texture:nn,TextureSource:ja,TorusGeometry:al,Triangle:In,TubeGeometry:ll,UVMapping:Wc,Uint16BufferAttribute:jc,Uint32BufferAttribute:eu,UniformsLib:De,UniformsUtils:vf,UnsignedByteType:yn,UnsignedInt101111Type:$c,UnsignedInt248Type:js,UnsignedInt5999Type:Yc,UnsignedIntType:jn,UnsignedShort4444Type:Xa,UnsignedShort5551Type:qa,UnsignedShortType:Qs,VSMShadowMap:Vs,Vector2:we,Vector3:z,Vector4:Ut,WebGLCoordinateSystem:Jn,WebGLCubeRenderTarget:_u,WebGLRenderTarget:On,WebGLRenderer:Uf,WebGLUtils:Df,WebGPUCoordinateSystem:er,WebXRController:Ho,ZeroFactor:Ad,createCanvasElement:jd,error:pt,log:pc,warn:et,warnOnce:gs},Symbol.toStringTag,{value:"Module"})),sd={type:"change"},vu={type:"start"},Of={type:"end"},Fo=new rr,rd=new li,Zx=Math.cos(70*xn.DEG2RAD),qt=new z,vn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tc=1e-6;class Kx extends Tf{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Li,this._lastTargetPosition=new z,this._quat=new Li().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sc,this._sphericalDelta=new Sc,this._scale=1,this._panOffset=new z,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new z,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jx.bind(this),this._onPointerDown=Qx.bind(this),this._onPointerUp=e1.bind(this),this._onContextMenu=a1.bind(this),this._onMouseWheel=i1.bind(this),this._onKeyDown=s1.bind(this),this._onTouchStart=r1.bind(this),this._onTouchMove=o1.bind(this),this._onMouseDown=t1.bind(this),this._onMouseMove=n1.bind(this),this._interceptControlDown=l1.bind(this),this._interceptControlUp=c1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sd),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=qt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fo.origin.copy(this.object.position),Fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fo.direction))<Zx?this.object.lookAt(this.target):(rd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fo.intersectPlane(rd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tc||this._lastTargetPosition.distanceToSquared(this.target)>tc?(this.dispatchEvent(sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;qt.copy(s).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Qx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function e1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Of),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function t1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=wt.DOLLY;break;case Ei.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=wt.ROTATE}break;case Ei.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(vu)}function n1(n){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function i1(n){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(n.preventDefault(),this.dispatchEvent(vu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Of))}function s1(n){this.enabled!==!1&&this._handleKeyDown(n)}function r1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=wt.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=wt.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(vu)}function o1(n){switch(this._trackPointer(n),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=wt.NONE}}function a1(n){this.enabled!==!1&&n.preventDefault()}function l1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yr=new z;function Rn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;yr.copy(e),yr[i]=0,yr.normalize();const l=.5*o/(o+a),u=1-yr.angleTo(n)/c;return Math.sign(yr[t])===1?u*l:a/(o+a)+l+l*(1-u)}class xu extends Ni{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new z,l=new z,u=new z(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new z,g=.5/o;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[y+0]=Rn(_,l,"z","y",r,i),f[y+1]=1-Rn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[y+0]=1-Rn(_,l,"z","y",r,i),f[y+1]=1-Rn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[y+0]=1-Rn(_,l,"x","z",r,e),f[y+1]=Rn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),f[y+0]=1-Rn(_,l,"x","z",r,e),f[y+1]=1-Rn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),f[y+0]=1-Rn(_,l,"x","y",r,e),f[y+1]=1-Rn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[y+0]=Rn(_,l,"x","y",r,e),f[y+1]=1-Rn(_,l,"y","x",r,t);break}}static fromJSON(e){return new xu(e.width,e.height,e.depth,e.segments,e.radius)}}function u1(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Vt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const f=n[h].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=od(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][h]);const m=od(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function od(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Fn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,f=u.count;h<f;h++)for(let m=0;m<t;m++){const _=u.getComponent(h,m);a.setComponent(h+d,m,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function h1({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:u,torus:d,rod:h,sign:f,paperBoat:m,batchStatic:_,persist:g,say:p,refresh:y,chime:A,reduced:x}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],T=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),d([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const C=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],C),d([0,0,0],.36,.015,s.copper,C,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),d([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const w=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,w);for(const[R,L,F]of[[-.17,.23,-.5],[.17,.41,.5]]){const O=l([R,L,0],[.24,.035,.085],s.mint,w);O.rotation.z=F}const U=o([0,.95,0],w);l([0,0,0],.115,s.light,U),d([0,0,0],.28,.021,s.cream,U,[0,0,0]),d([0,0,0],.27,.021,s.copper,U,[0,Math.PI/2,0]);const q=[];for(let R=0;R<4;R++){const L=R*Math.PI/2,F=o([Math.cos(L)*.3,.13+Math.sin(L)*.12,Math.sin(L)*.3],w);h([0,-.15,0],[0,.2,0],.012,s.copper,F),l([0,.23,0],.065,s.cream,F),_(F,[]),q.push(F)}c([-.46,.2,.32],[.68,.12,.47],s.dark,v);const B=o([-.46,.29,.32],v);c([0,0,0],[.5,.025,.32],s.cream,B);for(const R of[-.23,.23])h([R,.016,-.14],[0,.016,.06],.009,s.copper,B);l([0,.027,.06],[.04,.015,.04],s.rust,B),f("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(C,[]),_(U,[]),_(w,[U,...q]),_(B,[]),_(v,[C,w,B]);const k=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);k.castShadow=!1;const D=o([0,0,0],e),V=m(D,[8.3,.14,3.5],1.05),H=o([0,.36,0],V),Z=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],H),Y=l([0,.12,0],[.085,.13,.085],s.light,H),J=c([0,.09,0],[.23,.025,.16],s.cream,H);J.rotation.z=.2;const ee=[Z,Y,J];_(V,[H]);const j=new n.Vector3(8.3,.14,3.5),he=new n.Vector3(8.45,.14,3.65),me=new n.Vector3(9.2,-2.7,6.5);let ve=-1,N=i.dockTrips>=2?1:.02;function E(){C.visible=i.dockTrips>=1,w.visible=i.dockTrips>=2,B.visible=i.dockTrips>=3,q.forEach((R,L)=>R.visible=i.dockTrips>=5+L*3),H.visible=i.dockPending,ee.forEach((R,L)=>R.visible=L===i.dockTrips%3),V.position.copy(i.dockPending?he:j)}E();function X(){if(!(i.boat>0))if(i.dockPending){const R=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(N=.02),g(),E(),p(R.line),A(330),y()}else i.boat=18,ve=-1,ee.forEach((R,L)=>R.visible=L===i.dockTrips%3),H.visible=!1,p("ну плыви. я тут."),y()}function te(R,L){if(i.boat>0){i.boat=Math.max(0,i.boat-R);const F=18-i.boat,O=F<7?0:F<11?1:2;O!==ve&&(ve=O,y()),F<2?V.position.lerpVectors(j,he,n.MathUtils.smoothstep(F,0,2)):F<7?V.position.lerpVectors(he,me,n.MathUtils.smoothstep(F,2,7)):F<11?V.position.copy(me):F<16?V.position.lerpVectors(me,he,n.MathUtils.smoothstep(F,11,16)):V.position.copy(he),V.visible=F<7||F>=11,H.visible=F>=11,V.rotation.y=F>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,g(),V.visible=!0,E(),p("вернулся. с чем-то."),A(554),y())}V.rotation.z=x?0:Math.sin(L*1.7)*.035,i.boat===0&&(V.visible=!0,V.position.y=(i.dockPending?he.y:j.y)+Math.sin(L*1.2)*.02,V.rotation.y=i.dockPending?Math.PI+.2:0),C.position.y=.97+Math.sin(L*.9)*.055,C.rotation.y=L*.15,N=n.MathUtils.damp(N,1,1.1,R),w.scale.setScalar(N),U.rotation.y=x?0:L*.23,k.material.emissiveIntensity=i.dockPending?1.5+Math.sin(L*4)*1.1:1.2}function Q(){if(i.boat>0){const R=18-i.boat;return{disabled:!0,action:R<7?"плывёт…":R<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const R=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:R===2?`${b[R].description} ${T[Math.floor((i.dockTrips-1)/3)%T.length]}`:b[R].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:D,gallery:v,beacon:k,launchOrCollect:X,update:te,card:Q,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:V.position.toArray(),visible:V.visible,cargo:H.visible,stone:C.visible,plant:w.visible,plantScale:N,letter:B.visible,buds:q.filter(R=>R.visible).length})}}async function Ff(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function d1({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",u=!s.matches,d=!1,h=!1,f=!1,m=!1,_=!1,g=0,p=null,y=0,A=0,x=0,S=!1;try{const W=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");W!==null&&(u=W==="open")}catch{}const b=(W,ae,ye)=>{const Se=document.createElement(W);return ae&&(Se.className=ae),ye&&(Se.textContent=ye),Se},T=b("aside","resident-history");T.id="resident-history",T.setAttribute("aria-label","История мыслей и действий Головы");const v=b("div","history-heading"),C=b("div"),w=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),U=b("h3","","на полях"),q=b("span","history-eyes");q.setAttribute("aria-hidden","true"),U.append(q),C.append(w,U,b("p","history-subtitle","мысли, дела и прочее"));const B=b("button","history-close","−");B.type="button",B.setAttribute("aria-label","Свернуть историю"),B.title="Свернуть историю",v.append(C,B);const k=b("div","history-filters");k.setAttribute("role","group"),k.setAttribute("aria-label","Показывать в истории");const D=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[W,ae]of D){const ye=b("button","",ae);ye.type="button",ye.dataset.filter=W,ye.setAttribute("aria-pressed",String(l===W)),ye.onclick=()=>{l=W,L(!1),H.scrollTop=0;for(const Se of k.children)Se.setAttribute("aria-pressed",String(Se.dataset.filter===l))},k.append(ye)}const V=b("button","history-new");V.type="button",V.hidden=!0;const H=b("div","history-scroll");H.tabIndex=0,H.setAttribute("aria-label","Записи, от новых к старым");const Z=b("ol","history-list"),Y=b("p","history-empty","собираю заметки…");H.append(Z,Y);const J=b("div","history-foot"),ee=b("span","history-live","подключаюсь…"),j=b("span","history-count"),he=b("button","history-retry","повторить подключение");he.type="button",he.hidden=!0,he.onclick=()=>{I(),window.dispatchEvent(new Event("beznogim:retry"))},J.append(ee,j,he),T.append(v,k,V,H,J);const me=b("button","history-toggle");me.type="button",me.setAttribute("aria-controls",T.id);const ve=b("span","","на полях"),N=b("span","history-badge");N.hidden=!0,me.append(b("span","history-toggle-icon","◌"),ve,N),document.body.append(T),document.querySelector(".footer-actions").append(me);function E(W,ae=!0){if(u=W,T.hidden=!u,me.hidden=u,me.setAttribute("aria-expanded",String(u)),ae)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(H.scrollTop<30?X():te(),B.focus({preventScroll:!0})):ae&&me.focus({preventScroll:!0})}T.hidden=!u,me.hidden=u,me.setAttribute("aria-expanded",String(u)),me.onclick=()=>{E(!0),(m||!h)&&I()},B.onclick=()=>E(!1),s.addEventListener("change",()=>{let W=!s.matches;try{const ae=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ae!==null&&(W=ae==="open")}catch{}E(W,!1)}),document.addEventListener("keydown",W=>{W.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&E(!1)});function X(){g=0,N.hidden=!0,V.hidden=!0}function te(){N.textContent=String(g),N.hidden=!g,V.textContent=`↑ к новым · ${g}`,V.hidden=!(u&&g)}V.onclick=()=>{H.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),X()},H.addEventListener("scroll",()=>{H.scrollTop<30&&X()},{passive:!0});function Q(W){return l==="all"||(l==="thoughts"?W.type==="muse"||W.type==="say":W.type!=="muse"&&W.type!=="say")}function R(W,ae){const ye=W.type==="muse"||W.type==="say",Se=b("li",`history-entry ${ye?"history-thought":"history-action"}${ae?" is-new":""}`);Se.dataset.eventId=String(W.id),Se.dataset.type=W.type;const $=b("div","history-meta"),ze=b("time","",r.format(W.time*1e3));ze.dateTime=new Date(W.time*1e3).toISOString(),ze.title=o.format(W.time*1e3)+" · "+ze.textContent+" мск";const Ae={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return $.append(b("span","",Ae[W.type]||"во дворе"),ze),Se.append($,b("p","",W.text)),Se}function L(W,ae=new Set){const ye=H.scrollTop>30,Se=H.getBoundingClientRect().top,$=ye?[...Z.querySelectorAll("[data-event-id]")].find(de=>de.getBoundingClientRect().bottom>Se):null,ze=$==null?void 0:$.dataset.eventId,Ae=$==null?void 0:$.getBoundingClientRect().top,G=H.scrollTop,M=document.createDocumentFragment();let oe="";const le=[...i.values()].sort((de,be)=>be.id-de.id).filter(Q);for(const de of le){const be=o.format(de.time*1e3);if(be!==oe){const Ce=b("li","history-day",be);M.append(Ce),oe=be}M.append(R(de,W&&ae.has(de.id)&&!ye))}if(Z.replaceChildren(M),Y.hidden=le.length>0,Y.textContent=m?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!le.length&&(Y.textContent="в этом фильтре пока нет записей."),j.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",he.hidden=!(m||!h&&!f),he.disabled=f,ze){const de=Z.querySelector(`[data-event-id="${ze}"]`);H.scrollTop=G+(de?de.getBoundingClientRect().top-Ae:0)}else ye||(H.scrollTop=0)}function F(W,ae=!1){if(!W||!Array.isArray(W.entries))return!1;const ye=Math.max(0,...i.keys()),Se=new Set;let $=0,ze=0;for(const Ae of W.entries)!Ae||typeof Ae!="object"||!Number.isSafeInteger(Ae.id)||Ae.id<1||!Number.isFinite(Ae.time)||Math.abs(Ae.time)>864e10||!a.has(Ae.type)||typeof Ae.text!="string"||!Ae.text.trim()||(ze++,i.has(Ae.id)||(S=!0,i.set(Ae.id,{id:Ae.id,time:Ae.time,type:Ae.type,text:Ae.text.slice(0,280)}),Se.add(Ae.id),Ae.id>ye&&Q(Ae)&&$++));if(W.entries.length&&!ze)return!1;if(_=_||!!W.has_older||!!W.has_more||i.size>t,i.size>t){const Ae=[...i.keys()].sort((G,M)=>G-M);for(const G of Ae.slice(0,i.size-t))i.delete(G)}return d&&!ae&&$&&(!u||H.scrollTop>30)&&(g+=$,te()),(Se.size||!d)&&L(d&&!ae,Se),!0}function O(){if(!(!i.size||!S)){S=!1,A=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:A,has_older:_,entries:[...i.values()]}))}catch{}}}function ne(){try{const W=localStorage.getItem(c);if(!W||W.length>1e6)return;const ae=JSON.parse(W);if(ae.version!==1||!Number.isFinite(ae.saved_at)||ae.saved_at<=0)return;F(ae,!0),A=ae.saved_at,d=i.size>0,S=!1}catch{}}async function I(){if(!f){f=!0,x=performance.now(),he.disabled=!0;try{const W=await Ff(n+"/api/history");if(!F(W,!0))throw Error("invalid-public-history");h=!0,d=!0,m=!1,O(),L(!1)}catch{m=!0,L(!1)}finally{f=!1,he.disabled=!1,K()}}}function K(){var ye;const W=!p||performance.now()-y>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";T.classList.toggle("history-offline",W);const ae=A?` · сохранено ${r.format(A)} мск`:" · записи на устройстве";ee.textContent=W?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",W&&i.size&&(ee.textContent+=ae),!W&&m&&(ee.textContent+=" · архив не дошёл"),ee.title=((ye=p==null?void 0:p.action)==null?void 0:ye.label)||""}function ie(W){var ze;const ae=Math.max(0,...i.keys()),ye=Array.isArray((ze=W.history)==null?void 0:ze.entries)?W.history.entries:[];p=W,y=performance.now(),F(W.history)&&i.size&&(d=!0,O()),K();const Se=ye.filter(Ae=>Ae&&Number.isSafeInteger(Ae.id)).map(Ae=>Ae.id);(ae&&Se.length&&Math.min(...Se)>ae&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&I()}window.addEventListener("beznogim:state",W=>ie(W.detail)),window.__beznogimState&&ie(window.__beznogimState),ne(),L(!1),K(),I(),window.addEventListener("online",()=>{(m||!h)&&I()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(m||!h)&&I()}),setInterval(()=>{K(),(m||!h)&&I()},15e3)}function f1({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,u=0,d=0,h=!1,f=!1,m=!1,_=0,g=null,p=null,y=null,A="",x=!0;const S=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const T=document.createElement("span");T.className="thought-kicker",T.textContent="про себя";const v=document.createElement("p");b.append(T,v),document.body.append(b);const C=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),w=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";d1({api:w,enabled:C});const U=document.querySelector(".territory-nav"),q=document.createElement("div");q.className="resident-strip",q.hidden=!0;const B=document.createElement("span");B.className="resident-status",B.textContent="подключаюсь к голове";const k=document.createElement("div");k.className="resident-vitals",k.hidden=!0,k.setAttribute("aria-label","Самочувствие Головы");const V=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(R=>{const L=document.createElement("div");return L.className="need-meter",L.dataset.need=R.key,L.style.setProperty("--need-color",R.color),L.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${R.icon}</svg><div class="need-detail"><div class="need-heading"><b>${R.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${R.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,k.append(L),{key:R.key,card:L,value:L.querySelector(".need-value"),bar:L.querySelector(".need-track")}}),H=document.createElement("button");H.type="button",H.textContent="к голове",H.onclick=()=>{f=!1,m=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),me()};const Z=document.createElement("button");Z.type="button",Z.textContent="поиграть самому",Z.onclick=()=>{f=!f,m=!1,me()};const Y=document.createElement("button");Y.type="button",Y.textContent="мысли",Y.setAttribute("aria-pressed","true"),Y.onclick=()=>{x=!x,Y.setAttribute("aria-pressed",String(x))},q.append(B,k,H,Z,Y),U.append(q);function J(){return Date.now()/1e3+d}function ee(){return l&&J()-l.heartbeat<60&&l.resident_status!=="stopped"}function j(){return h&&l&&!f}function he(){var F,O;const R=(O=(F=l==null?void 0:l.mechanics)==null?void 0:F.vitals)==null?void 0:O.public;if(!R){k.hidden=!0;return}const L=ne=>Math.max(0,Math.min(100,Math.round(Number(ne)||0)));k.hidden=!1;for(const ne of V){const I=L(R[ne.key]);ne.value.textContent=String(I),ne.bar.setAttribute("aria-valuenow",String(I)),ne.card.style.setProperty("--need-fill",String(I/100)),ne.card.dataset.low=String(I<=20)}}function me(){const R=f?"ты в песочнице":h?ee()?l!=null&&l.action&&l.action.ends>J()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";R!==A&&(A=R,B.textContent=R),Z.textContent=f?"вернуться к голове":"поиграть самому",H.setAttribute("aria-pressed",String(m))}function ve(R){var F,O;if(!R||R.version!==1||!Array.isArray(R.position)||R.position.length!==3||!R.position.every(Number.isFinite)||!R.objects||!Number.isFinite(R.server_time)||!Number.isFinite(R.heartbeat)||l&&(R.server_time<l.server_time||R.server_time===l.server_time&&Number.isFinite(R.revision)&&Number.isFinite(l.revision)&&R.revision<l.revision))return;if(d=R.server_time-Date.now()/1e3,l=R,u=performance.now(),h=!0,q.hidden=!1,g&&((F=R.release)!=null&&F.commit)&&g!==R.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}g=((O=R.release)==null?void 0:O.commit)||g;const L=R.speech;L&&L.time>_&&L.until>J()&&(_=L.time,f||a(L.text)),window.__beznogimState=R,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:R})),he(),me()}function N(){const R=l.action;if((R==null?void 0:R.kind)==="move"){const L=Math.max(0,Math.min(1,(J()-R.started)/Math.max(.001,R.ends-R.started)));return R.from.map((F,O)=>F+(R.to[O]-F)*L)}return l.position}function E(){if(!j())return;const R=l.objects;R.engine&&(t.running=!!R.engine.running),R.workshop&&(t.roof=R.workshop.roof_open?1:0),R.radio&&(t.radio=R.radio.station,p!==t.radio&&(p=t.radio,o())),R.garden&&(t.harvest=R.garden.harvest,y!==null&&t.harvest>y&&c(),y=t.harvest);const L=l.action;t.brew=(L==null?void 0:L.effect)==="brew"?Math.max(0,L.ends-J()):0,t.loop=0,me()}function X(){if(!j()){b.hidden=!0;return}const R=N();n.position.set(R[0],R[1]+Math.sin(J()*1.4)*.1,R[2]),e.set(...R),m&&i.target.lerp(n.position,.08);const L=l.musing;if(x&&ee()&&(L!=null&&L.text)&&L.until>J()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==L.text&&(v.textContent=L.text),S.copy(n.position),S.y+=1.8,S.project(s),S.z>=-1&&S.z<=1&&Math.abs(S.x)<1&&Math.abs(S.y)<1){b.hidden=!1;const F=b.offsetWidth,O=b.offsetHeight,ne=Math.max(F/2+12,Math.min(innerWidth-F/2-12,(S.x+1)*innerWidth/2));let I=(1-S.y)*innerHeight/2-18;const K=U.getBoundingClientRect(),ie=ne-F/2<K.right&&ne+F/2>K.left?K.bottom+12:18,W=I-O<ie;W&&(I=Math.max(ie+O,(1-S.y)*innerHeight/2+70+O)),I=Math.min(innerHeight-70,Math.max(O+18,I)),b.classList.toggle("below-head",W),b.style.transform=`translate3d(${Math.round(ne)}px,${Math.round(I)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function te(){j()&&(f=!0,m=!1,me())}function Q(){if(!C)return;q.hidden=!1;let R=!1;async function L(){if(!R){R=!0;try{const O=await Ff(w+"/api/state");ve(O),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-u>35e3)&&(h=!1),me()}finally{R=!1}}}try{const O=new EventSource(w+"/api/events");O.addEventListener("state",ne=>{try{ve(JSON.parse(ne.data))}catch{}}),O.onerror=()=>{h=!1,me()}}catch{h=!1,me()}L();function F(){(!h||!l||performance.now()-u>3e4)&&L()}window.addEventListener("online",F),window.addEventListener("beznogim:retry",L),document.addEventListener("visibilitychange",()=>{document.hidden||F()}),setInterval(()=>{l&&performance.now()-u>35e3&&(h=!1),me(),F()},15e3)}return i.addEventListener("start",()=>{m=!1,me()}),Q(),{sync:E,place:X,localPlay:te,unfollow:()=>{m=!1},watching:j,inspect:()=>{var R;return{connected:h,sandbox:f,follow:m,alive:!!ee(),revision:l==null?void 0:l.revision,release:(R=l==null?void 0:l.release)==null?void 0:R.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!b.hidden,position:l?N():null}}}}const p1=120,m1=24,g1=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"settled",name:"облачная перегонная"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Xn={size:p1,sectorSize:m1,sectors:g1};function _1({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new qi;c.name="unsettled-territory",n.add(c);const l=Xn.size/2,u=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],d=new Qr;u.forEach(([w,U],q)=>q?d.lineTo(w,-U):d.moveTo(w,-U)),d.closePath();const h=new or(d,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const f=new _n(h,new Hs({color:"#233e35",roughness:1}));f.receiveShadow=!0,c.add(f);let m=8409;const _=()=>(m=m*1664525+1013904223>>>0)/4294967296,g=new gc(new jr(1,0),new Hs({color:"#8a9980",roughness:1}),150),p=new gc(new Ms(1,1,4),new Hs({color:"#9aa880",roughness:1}),850),y=new Gt;for(const[w,U,q]of[[g,150,!0],[p,850,!1]]){for(let B=0;B<U;B++){let k,D;do k=(_()-.5)*(Xn.size-10),D=(_()-.5)*(Xn.size-10);while(Math.abs(k)<11&&Math.abs(D)<9);const V=q?.15+_()*.48:.12+_()*.42;y.position.set(k,-1.7+V*.25,D),y.rotation.set(0,_()*6.28,q?_()*.25:0),y.scale.set(q?V*1.3:.07,V,q?V:.07),y.updateMatrix(),w.setMatrixAt(B,y.matrix)}w.instanceMatrix.needsUpdate=!0,c.add(w)}const A=new Hs({color:"#c1b692",roughness:1});for(let w=0;w<16;w++){const U=new _n(new Ni(1.15,.12,.65),A);U.position.set(-.6,-.06-w*.105,5.8+w*.7),U.receiveShadow=!0,c.add(U)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const S=document.createElement("dialog");S.id="territory-dialog",S.setAttribute("aria-labelledby","territory-title"),S.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. К востоку от почтового моста четыре карты переливают облако за шестнадцать игровых часов. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(S);const b=S.querySelector("#territory-grid");for(const w of Xn.sectors){const U=document.createElement("button");U.type="button",U.dataset.sector=w.id,U.className=w.status==="settled"?"settled":"",U.textContent=w.status==="settled"?`● ${w.id==="0:0"?"двор":w.name}`:`· ${w.id}`,U.setAttribute("aria-label",`${w.name}, ${w.id}`),U.onclick=()=>{S.close(),s(w.x,w.z,w.status==="settled")},b.append(U)}document.querySelector("#territory-map").onclick=()=>S.showModal(),document.querySelector("#world-overview").onclick=r,S.querySelector("#territory-close").onclick=()=>S.close(),S.querySelector("#territory-home").onclick=()=>{S.close(),o()};const T=x.querySelector("#territory-location");let v="";function C(){const w=a()||t.target,U=Math.round(w.x/Xn.sectorSize),q=Math.round(w.z/Xn.sectorSize),B=`${U}:${q}`;if(B!==v){v=B;const k=Xn.sectors.find(D=>D.id===B);T.textContent=`${(k==null?void 0:k.status)==="settled"?k.name:"свободная земля"} · ${B}`;for(const D of b.children)D.classList.toggle("current",D.dataset.sector===B)}}return{half:l,update:C,inspect:()=>({size:Xn.size,sectorSize:Xn.sectorSize,sectors:Xn.sectors.length,settled:Xn.sectors.filter(w=>w.status==="settled").length,visible:n.visible,sector:v})}}function v1({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,paperBoat:f,batchStatic:m,changed:_,chime:g}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const y={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},A=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:y.wins,trace:y.trace}))}catch{}}const S=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,S),a([0,.46,0],[1.22,.08,1.3],s.dark,S);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const W of[-.62,.62])for(const ae of[-.64,.64])u([W,.46,ae],[W,1.45,ae],.024,s.copper,S);for(const W of[-.62,.62])a([W,.96,0],[.018,.95,1.28],b,S);a([0,.96,-.64],[1.24,.95,.018],b,S);const T=o([0,1.45,-.64],S);for(const W of[-.62,.62])u([W,0,0],[W,.36,.64],.026,s.copper,T);for(const W of[-.62,.62])u([W,.36,.64],[W,0,1.28],.026,s.copper,T);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,T);const v=a([0,.18,.32],[1.26,.025,.72],b,T);v.rotation.x=-.51;const C=a([0,.18,.96],[1.26,.025,.72],b,T);C.rotation.x=.51;const w=o([0,.52,0],S);l([0,.2,0],.026,.4,s.leaf,w);for(const W of[-1,1]){const ae=c([W*.15,.27,0],[.22,.055,.09],s.leaf,w);ae.rotation.z=W*.35}const U=c([0,.25,.12],[.23,.16,.27],s.copper,w),q=c([.42,.58,.46],[.15,.1,.18],s.copper,S);q.visible=y.wins>0;const B=o([-.76,.7,.69],S);a([0,.28,0],[.13,.66,.06],s.cream,B);const k=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),B);c([0,-.06,.04],.065,s.rust,B),h("ПАРНИК",[0,.3,.716],.93,.22,S,{size:49});const D=d([0,2.05,0],.46,.016,s.mint,S);D.visible=y.trace;const V=[];for(let W=0;W<6;W++)V.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),S));m(S,[T,w,B,D,q,...V]),m(T,[]),m(w,[U]),m(B,[k]);let H=0,Z=0;function Y(){Object.assign(y,{temp:4,turn:0,mode:"playing"}),H=0,_()}function J(W){if(y.mode!=="playing")return;const ae={heat:2,wait:0,vent:-2};W in ae&&(y.temp+=A[y.turn]+ae[W],y.turn++,y.temp>6?(y.mode="hot",H=3,g(110)):y.temp<3?(y.mode="cold",g(165)):y.turn===6&&(y.mode="won",y.wins=Math.min(99,y.wins+1),q.visible=!0,x(),g(660)),_())}function ee(){let W="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return y.mode==="playing"&&(W=`Тепло ${y.temp} / норма 3–6. Такт ${y.turn+1} из 6. Следующее солнце: ${A[y.turn]>0?"+":""}${A[y.turn]}. Выбери один ход.`),y.mode==="hot"&&(W=`Тепло ${y.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),y.mode==="cold"&&(W=`Тепло ${y.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),y.mode==="won"&&(W="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:W,action:y.mode==="idle"?"вырастить вычисление":"начать заново"}}const j=o([0,0,0],t);j.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,j),a([0,-.42,0],[6.8,.08,5.6],s.dark,j);for(const W of[-3.2,3.2])for(const ae of[-2.6,2.6])u([W,-.4,ae],[W,4,ae],.055,s.copper,j);for(const W of[-3.2,3.2])u([W,4,-2.6],[W,5.7,0],.055,s.copper,j),u([W,5.7,0],[W,4,2.6],.055,s.copper,j);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,j),a([-3.2,1.8,0],[.025,4.4,5.2],b,j),a([0,1.8,-2.6],[6.4,4.4,.025],b,j),h("СОН / 01",[0,-.12,2.93],2.2,.38,j,{size:52});const he=o([0,1.6,0],j);c([0,0,0],1.16,r("#5f9c85"),he);for(let W=0;W<10;W++){let ae=W*2.4;const ye=c([Math.sin(ae)*.95,Math.cos(W*1.2)*.6,Math.cos(ae)*.95],[.35,.2,.3],s.leaf,he);ye.rotation.y=ae}d([0,0,0],1.32,.028,s.copper,he,[.4,0,.2]);const me=o([0,1.6,0],j),ve=[];for(let W=0;W<28;W++){const ae=a([0,0,0],[.53,.11,.32],W%4?s.cream:s.concrete,me);ve.push(ae)}const N=f(j,[1.7,-.05,1],1.65),E=c([0,.65,0],.13,s.cream,N),X=o([0,.65,0],N);X.visible=!1;for(let W=0;W<8;W++){let ae=W/8*Math.PI*2;u([Math.sin(ae)*.27,Math.cos(ae)*.27,0],[Math.sin(ae)*.5,Math.cos(ae)*.5,0],.026,s.light,X)}const te=i.clone(!0);j.add(te),te.scale.setScalar(.72),te.position.set(-2,1,1.3),te.rotation.z=-.25;const Q=o([-2,-.05,1.3],j);l([0,0,0],.55,.3,s.cream,Q),d([.58,0,0],.25,.04,s.copper,Q,[0,0,0]);const R=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,j);R.rotation.y=.2;let L=0,F=0,O=!1;m(j,[he,me,N,te]),m(he,[]);function ne(){O=!0,L=0,F=0,j.visible=!0,e.visible=!1,_()}function I(){O=!1,j.visible=!1,e.visible=!0,_()}function K(){O&&(L===3?(L=0,F=0):(L++,g(220+L*110),L===3&&(y.trace=!0,D.visible=!0,x())),_())}function ie(W,ae){Z=n.MathUtils.damp(Z,y.mode==="hot"?-1.1:y.mode==="playing"?-.08:0,4,W),T.rotation.x=Z,w.scale.y=n.MathUtils.damp(w.scale.y,y.mode==="hot"?.2:y.mode==="cold"?.45:y.mode==="won"?1.25:.6+y.turn*.08,4,W),U.visible=y.mode==="won",k.scale.y=.3*Math.max(.05,y.temp/8),k.position.y=-.015+y.temp/8*.15,D.rotation.z=Math.sin(ae*.3)*.15,H=Math.max(0,H-W),V.forEach((ye,Se)=>{ye.visible=H>0;const $=(3-H+Se*.18)%1.5;ye.position.set(Math.sin(Se*2)*$*.35,1.5+$,Math.cos(Se*2)*$*.35),ye.scale.setScalar(.1*(.4+$))}),O&&(F=n.MathUtils.damp(F,L,2,W),he.rotation.y=ae*.08,ve.forEach((ye,Se)=>{const $=Se/28*Math.PI*2+ae*.055*Math.min(1,F),ze=Math.min(1,F);ye.position.set(Math.sin($)*(1.8+ze*.35),Math.cos($)*(1.8-ze*1.5),Math.cos($)*ze*1.5),ye.rotation.set(0,-$*ze,Math.PI/2-$*(1-ze))}),me.rotation.y=F*.32,N.position.y=-.05+F*1.12,N.position.x=1.7-F*.32,N.rotation.y=.2+F*.35,E.scale.setScalar(.13*(1+Math.max(0,F-2)*2)),X.visible=F>2.2,X.rotation.z=ae*.22,te.position.y=1+Math.sin(ae*.8)*.06)}return{house:S,start:Y,step:J,card:ee,update:ie,enter:ne,exit:I,breathe:K,inspect:()=>({...y,weather:[...A],dream:O,dreamStep:L,phase:F,lidAngle:Z,rootVisible:e.visible,dreamVisible:j.visible,boatY:N.position.y,rays:X.visible})}}function x1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:m,chime:_}){const g=a([0,0,0],e);g.name="dream-02-water-sleeps",g.visible=!1;const p=r("#c39860"),y=r("#e0c58b"),A=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),S=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,g),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),y,[0,-.11,0],null,g);for(let N=0;N<13;N++){const E=.15+N/12*Math.PI*1.42,X=Math.sin(E)*3.65,te=Math.cos(E)*3.65,Q=c([X,.48,te],[.75,1.08,.19],y,g);Q.rotation.y=E,N%3===0&&h([X,.48,te],.15,.048,A,g,[Math.PI/2,0,0]).rotation.set(0,E,0)}f("СОН / 02",[0,-.18,3.95],2.2,.38,g,{size:52});const b=a([1.08,.12,.4],g);c([0,0,0],[2.55,.22,1.55],A,b);for(let N of[-1.15,1.15])for(let E of[-.63,.63])c([N,-.23,E],[.12,.5,.12],s.copper,b);for(let N of[-.79,.79])c([0,.36,N],[2.72,.65,.14],S,b);for(let N of[-1.32,1.32])c([N,.38,0],[.14,.68,1.55],S,b);const T=c([0,.18,0],[2.49,.045,1.49],x,b),v=l([-.84,.38,0],[.34,.14,.54],s.cream,b),C=i.clone(!0);g.add(C),C.scale.setScalar(.54),C.position.set(.3,.83,.45),C.rotation.z=-.35;const w=a([0,0,0],C);for(const N of[-.23,.23])l([N,.2,.611],[.15,.11,.025],s.black,w),c([N,.2,.64],[.2,.018,.012],s.copper,w);const U=a([-2.05,2.35,-.38],g);u([0,0,0],.52,.56,s.cream,U),u([0,.29,0],.44,.022,A,U),h([.55,0,0],.24,.055,s.copper,U,[0,0,0]),f("ПУСТО",[-2.03,2.8,-.38],1.1,.28,g,{size:52});const q=[];for(let N=0;N<7;N++){const E=a([-1.92+N*.33,.2+N*.29,1.45-N*.29],g);c([0,0,0],[.7,.13,.42],s.cream,E);for(let X of[-.2,.2])c([0,.07,X],[.7,.12,.05],s.copper,E);q.push(E)}const B=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],x,g)),k=Array.from({length:3},(N,E)=>{const X=h([.65,.2,0],.23+E*.16,.012,s.mint,b);return X.scale.z=.6,X}),D=a([-.8,3.65,-1.7],g);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,D),D.rotation.z=.55;const V=[];for(let N=0;N<9;N++){const E=N*2.4;V.push(l([Math.sin(E)*3,3.2+N%3*.28,Math.cos(E)*2],.025,s.cream,g))}let H=!1,Z=0,Y=0,J=!1;try{J=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const ee=a([26.6,-.86,.65],t);ee.visible=J,u([0,0,0],.15,.2,s.cream,ee),u([0,.104,0],.125,.014,x,ee),h([.16,0,0],.07,.02,s.copper,ee,[0,0,0]),m(g,[b,C,U,...q,...B,...V,D]),m(b,[T,v,...k]),m(U,[]),m(ee,[]),q.forEach(N=>m(N,[]));function j(){H=!0,Z=0,Y=0,g.visible=!0,t.visible=!1,ve(0,0)}function he(){H=!1,g.visible=!1,t.visible=!0}function me(){if(H&&(Z=Z===3?0:Z+1,_(165+Z*55),Z===3)){J=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function ve(N,E){H&&(Y=n.MathUtils.damp(Y,Z,2.4,N),q.forEach((X,te)=>{const Q=Math.min(1,Y/2),R=-1.92+te*.33,L=.2+te*.29,F=1.45-te*.29;X.position.set(n.MathUtils.lerp(R,-1.72+te*.39,Q),n.MathUtils.lerp(L,1.95-te*.22,Q),n.MathUtils.lerp(F,-.32+te*.055,Q)),X.rotation.z=-Q*.21}),T.position.y=.18+Y*.09,v.position.y=.38+Y*.09,C.position.y=.83+Y*.09+Math.sin(E*.6)*.025,C.rotation.z=-.35-Y*.13,U.rotation.z=-Math.min(1,Y)*.45,B.forEach((X,te)=>{const Q=(E*.16+te/16)%1;X.visible=Y>.05,X.position.set(-1.7+Q*3,2.14-Q*1.62,-.32+Q*.25),X.scale.set(.07,.1+Math.sin(Q*Math.PI)*.04,.07)}),k.forEach((X,te)=>{X.visible=Y>.4,X.position.y=T.position.y+.034,X.scale.setScalar(1+Math.sin(E*.5+te)*.08),X.scale.z*=.6}),D.rotation.z=.55+Y*.21,w.visible=Y>1.8)}return{enter:j,exit:he,pour:me,update:ve,inspect:()=>({active:H,step:Z,phase:Y,trace:J,roomVisible:g.visible,rootVisible:t.visible,waterY:T.position.y,sleeperY:C.position.y,channel:q.map(N=>N.position.toArray()),droplets:B.filter(N=>N.visible).length})}}function y1({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const f of[-.23,.23])t([f,.2,.611],[.15,.11,.025],r.black,c),i([f,.2,.64],[.2,.018,.012],r.copper,c);let l=null,u=0;function d(f){l=f,u=Number(f.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:f})=>d(f)),window.__beznogimState&&d(window.__beznogimState);function h(f){const m=l==null?void 0:l.action;a.visible=!!f&&(m==null?void 0:m.kind)==="sleep"&&Number(m.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),c.visible=a.visible}return{update:h,inspect:()=>{var f;return{visible:a.visible,ends:((f=l==null?void 0:l.action)==null?void 0:f.kind)==="sleep"?l.action.ends:null}}}}const Ac=Object.freeze([1,3,2]),Cc=()=>({phase:"tuning",turns:[0,0,0],progress:0,trace:!1}),Xo=n=>n.turns.map((e,t)=>e===Ac[t]);function M1(n,e){return n.phase==="tuning"&&Number.isInteger(e)&&e>=0&&e<3?{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t)}:n}function S1(n){return n.phase==="sky"?Cc():n.phase==="tuning"&&Xo(n).every(Boolean)?{...n,phase:"releasing",progress:0}:n}function b1(n,e){if(n.phase!=="releasing"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return t<1?{...n,progress:t}:{...n,progress:1,phase:"sky",trace:!0}}function ad(n,e){const t=n.phase==="sky"?1:n.phase==="releasing"?n.progress:0,i=t*t*(3-2*t),s=e*Math.PI/5;return{x:Math.cos(s)*(3.05+i*.25),y:.65+i*(2.5+e%3*.65),z:Math.sin(s)*(3.05+i*.25),lift:i,diskScale:1-i*.78,diskTilt:i*Math.PI/2}}function E1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,batchStatic:f,chime:m,changed:_}){const g=o([0,0,0],e);g.name="dream08-ten-torches",g.visible=!1;const p=r("#344c5d"),y=r("#647c83"),A=r("#ddc999"),x=["#d38d6d","#81beca","#d6c56e"],S=x.map(N=>r(N)),b=x.map(N=>r(N,{emissive:N,emissiveIntensity:1.4}));l([0,-.4,0],4.15,.22,p,g),d([0,-.27,0],4,.035,s.copper,g);const T=o([0,.18,0],g);l([0,0,0],2.6,.18,s.black,T),l([0,.105,0],.49,.015,A,T);const v=[],C=[];for(let N=0;N<3;N++){const E=.9+N*.6,X=o([0,.12,0],T);v.push(X),d([0,0,0],E,.035,S[N],X),d([0,-.02,0],E+.09,.008,y,X),c([E,.04,0],.13,b[N],X);for(let Q=0;Q<4;Q++){const R=Q*Math.PI/2;a([Math.cos(R)*E,.025,Math.sin(R)*E],[.1,.07,.1],Q===Ac[N]?S[N]:y,T)}const te=Ac[N]*Math.PI/2;C.push(u([Math.cos(te)*E,.18,Math.sin(te)*E],[0,.18,0],.018,b[N],T))}h("1 / 3 / 2",[0,.09,2.82],1.7,.35,g,{size:68}).rotation.x=-Math.PI/2;const w=[],U=[],q=[];for(let N=0;N<10;N++){const E=o([0,0,0],g),X=N%3;q.push(X),w.push(E),l([0,-.34,0],.055,.7,s.copper,E),l([0,0,0],.14,.14,S[X],E);const te=c([0,.26,0],[.12,.3,.12],b[X],E);U.push(te),d([0,-.16,0],.17,.018,S[X],E)}const B=i.clone(!0);B.position.set(0,.65,3.1),B.scale.setScalar(.4),g.add(B);const k=[];for(const N of[-1,1]){const E=o([N*.16,-.08,.7],B);u([0,0,0],[N*.85,-.12,0],.055,s.black,E),c([N*.8,-.12,0],[.19,.08,.08],s.black,E),k.push(E)}const D=o([-5.05,.15,1.55],t);l([0,0,0],.13,.06,s.black,D),c([0,.15,0],[.045,.095,.045],s.light,D),D.visible=!1,f(g,[T,...w,B]),f(T,[...v,...C]),v.forEach(N=>f(N,[])),w.forEach((N,E)=>f(N,[U[E]])),f(D,[]);let V=Cc(),H=!1,Z=!1;const Y=[0,0,0],J=[0,0,0];try{Z=JSON.parse(localStorage.getItem("beznogim-dream08-v1")||"{}").trace===!0}catch{}D.visible=Z;function ee(){V=Cc(),Y.fill(0),J.fill(0),H=!0,t.visible=!1,g.visible=!0,ve(0,0)}function j(){H=!1,t.visible=!0,g.visible=!1}function he(N){if(!H)return;const E=M1(V,N);E!==V&&(V=E,J[N]+=Math.PI/2,m(180+N*85+V.turns[N]*20),_())}function me(){if(!H)return;const N=S1(V);N!==V&&(V=N,V.phase==="tuning"&&(Y.fill(0),J.fill(0)),m(V.phase==="releasing"?440:165),_())}function ve(N,E){if(!H)return;const X=V.phase;V=b1(V,N);const te=Xo(V),Q=ad(V,0),R=Number.isFinite(N)?Math.max(0,Math.min(.1,N)):0;if(v.forEach((L,F)=>{Y[F]=n.MathUtils.damp(Y[F],J[F],9,R),L.rotation.y=-Y[F],C[F].visible=te[F]}),T.scale.setScalar(Q.diskScale),T.rotation.x=Q.diskTilt,T.position.y=.18+Q.lift*2.7,w.forEach((L,F)=>{const O=ad(V,F);L.position.set(O.x,O.y,O.z),L.rotation.z=Q.lift*Math.sin(E*.7+F)*.1,U[F].visible=te[q[F]],U[F].scale.y=1+Math.sin(E*5+F)*.1}),k.forEach((L,F)=>L.rotation.z=Math.sin(E*2+F*Math.PI)*.3),B.rotation.y=Math.sin(E*.3)*.12,V.trace&&!Z){Z=!0,D.visible=!0;try{localStorage.setItem("beznogim-dream08-v1",JSON.stringify({trace:!0}))}catch{}}X!==V.phase&&_()}return{enter:ee,exit:j,turn:he,act:me,update:ve,busy:()=>V.phase==="releasing",canRelease:()=>V.phase!=="tuning"||Xo(V).every(Boolean),text:()=>V.phase==="sky"?"Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.":V.phase==="releasing"?"Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.":"Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.",button:()=>V.phase==="sky"?"увидеть сон снова":V.phase==="releasing"?"факелы уходят в небо…":"освободить место ↑",inspect:()=>({...V,active:H,trace:Z,aligned:Xo(V),ringAngles:v.map(N=>N.rotation.y),flames:U.map(N=>N.visible),torches:w.map(N=>N.position.toArray()),diskScale:T.scale.x,diskTilt:T.rotation.x,diskY:T.position.y,rootVisible:t.visible,roomVisible:g.visible,whiskers:k.map(N=>N.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})}}const Rc=()=>({phase:"flat",progress:0,trace:!1}),zf=n=>["folding","falling","turning"].includes(n.phase);function w1(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?Rc():n}function T1(n,e){if(!zf(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function ld(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function A1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,sign:d,batchStatic:h,chime:f,changed:m}){const _=new n.Group;e.add(_),_.visible=!1;const g=r("#e9dbb7"),p=r("#405e62"),y=r("#c87e68"),A=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],p,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],g,x);const S=[];for(let N=0;N<4;N++){const E=o([0,0,0],x);E.rotation.y=N*Math.PI/2;const X=o([0,0,1.25],E);a([0,0,.8],[2.5,.05,1.6],g,X),a([0,.032,.76],[.022,.015,1.3],y,X),a([0,.035,.1],[2.3,.015,.018],y,X),S.push(X)}const b=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],p,b),a([0,.12,0],[2.15,.08,2.15],s.concrete,b);const T=o([-.45,.18,-.3],b);a([0,.33,0],[.8,.66,.7],g,T),a([0,.4,.36],[.25,.28,.025],A,T),a([0,.73,0],[1.05,.12,.9],y,T);const v=o([.65,.72,-.5],b);u([-.25,-.5,0],[-.25,.4,0],.03,p,v),u([.25,-.5,0],[.25,.4,0],.03,p,v),u([-.25,.4,0],[.25,.4,0],.03,p,v);const C=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,y,C),c([0,-.67,0],.14,s.copper,C);for(let N=0;N<4;N++)a([-.7+N*.42,.23,.66],[.28,.13,.36],g,b);const w=[];for(const N of[-1.05,1.05])for(const E of[-1.05,1.05])w.push(u([N,4.45,E],[N,5.25,E],.012,s.copper,_));for(const N of[-2.8,2.8])u([N,0,-1.6],[N,5.3,-1.6],.06,p,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,p,_);const U=(N,E=_)=>{const X=o(N,E);a([0,.4,0],[.55,.1,.55],y,X),a([0,.73,-.24],[.55,.65,.08],y,X);for(const te of[-.2,.2])for(const Q of[-.2,.2])u([te,0,Q],[te,.4,Q],.025,p,X);return X},q=[U([-2.6,0,1.1]),U([-2.6,0,2.1]),U([-1.65,0,2.1]),U([-.7,0,2.1])],B=o([0,2,0],_);c([0,0,0],[.15,.27,.15],A,B),u([0,.18,0],[.19,.35,0],.018,s.copper,B);const k=i.clone(!0);k.scale.setScalar(.35),k.position.set(2.8,.78,1.65),_.add(k),d("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const D=U([-30.6,-1.3,-20.8],t);D.scale.setScalar(.35),D.visible=!1,h(_,[x,b,...w,...q,B,k]),h(x,S.map(N=>N.parent)),S.forEach(N=>h(N,[])),h(b,[T,v]),h(T,[]),h(v,[C]),h(C,[]),q.forEach(N=>h(N,[])),h(B,[]),h(D,[]);const V=new n.Vector3,H=new n.Vector3(1,0,-1).normalize();let Z=Rc(),Y=!1,J=!1;try{J=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}D.visible=J;function ee(){Z=Rc(),Y=!0,_.visible=!0,t.visible=!1,me(0,0)}function j(){Y=!1,_.visible=!1,t.visible=!0}function he(){const N=w1(Z);N!==Z&&(Z=N,f(Z.phase==="falling"?165:Z.phase==="turning"?440:330),m())}function me(N,E){if(!Y)return;const X=Z.phase;Z=T1(Z,N);const{fold:te,fall:Q,turn:R}=ld(Z);if(S.forEach(L=>L.rotation.x=-te*.92*(1-R)),x.quaternion.setFromAxisAngle(H,R*2.2),x.position.y=.12+R*3.9,b.position.set(0,4.4-3.65*Q,0),b.quaternion.identity(),R>0&&(V.set(0,.63,0).applyAxisAngle(H,R*2.2),b.position.copy(V).add(x.position),b.quaternion.copy(x.quaternion)),w.forEach(L=>L.visible=Q===0),C.rotation.z=Math.sin(E*2.1)*.5,B.position.set(-2.6*R,2-1.34*R,1.1*R),B.rotation.z=Math.sin(E)*.1,q.forEach((L,F)=>{F>0&&(L.position.y=R*.15*Math.sin(E+F),L.rotation.z=R*Math.sin(E+F)*.035)}),Z.trace&&!J){J=!0,D.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}Z.phase!==X&&m()}return{enter:ee,exit:j,act:he,update:me,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[Z.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[Z.phase],busy:()=>zf(Z),inspect:()=>({...Z,...ld(Z),active:Y,trace:J,rootVisible:t.visible,roomVisible:_.visible,leafAngles:S.map(N=>N.rotation.x),yard:b.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(b.quaternion.w))),yardQuaternion:b.quaternion.toArray(),pocket:x.position.toArray(),seed:B.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const Pc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function C1(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function R1(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?Pc():n}function P1(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function L1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:d,sign:h,batchStatic:f,chime:m,changed:_}){const g=o([0,0,0],e);g.name="dream-06-cloud-heating",g.visible=!1;const p=r("#203f49"),y=r("#dce6d7"),A=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),S=r("#598e9d"),b=r("#ede1c3");l([0,-.3,0],4,.4,p,g),d([0,-.06,0],3.85,.045,A,g);for(let F=0;F<8;F++)u([-3+F*.85,-.06,-2.5],[-3+F*.85,-.06,2.5],.012,S,g);const T=o([-2.35,0,.2],g);a([0,.2,0],[1.7,.35,1.3],s.concrete,T);for(let F=0;F<6;F++){const O=-.65+F*.26;a([O,1.2,0],[.16,1.8,.66],A,T),d([O,2.12,0],.27,.065,A,T,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,A,T),u([-.8,1.95,.2],[.8,1.95,.2],.11,A,T);const v=c([-2.35,1.15,.87],.42,S,g);d([-2.35,1.15,.87],.48,.024,b,g,[.5,.3,0]);const C=["ЗЕМЛЯ","ОБЛАКО"].map((F,O)=>{const ne=o([-3+O*1.3,.4,2.1],g);a([0,0,0],[.87,.14,1.13],p,ne);for(let I=0;I<4;I++)a([-.27+I*.18,.09,-.28],[.08,.03,.25],x,ne);return h(F,[0,.12,.32],.78,.22,ne,{size:52}).rotation.x=-Math.PI/2,ne}),w=d([-2.8,.57,2.1],.5,.035,x,g);w.rotation.x=Math.PI/2;const U=o([0,0,0],g);u([-1.5,.45,.2],[-.7,.45,.2],.09,A,U),u([-.7,.45,.2],[-.7,3.7,.2],.09,A,U),u([-.7,3.7,.2],[1.2,3.7,.2],.09,A,U);const q=Array.from({length:7},(F,O)=>c([.1+O*.45,3.8+O%2*.22,-.8],[.65,.45,.63],y,g)),B=o([1.25,3.1,-.8],g);a([0,.2,0],[2.6,.1,1.7],b,B);for(const F of[-1.15,1.15])for(const O of[-.7,.7])u([F,.2,O],[F,1.28,O],.045,A,B);const k=o([0,1.26,0],B);a([-.61,.15,0],[1.45,.12,1.95],y,k).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],y,k).rotation.z=-.35;const D=[a([-.68,.8,.72],[.48,.57,.06],x,B),a([.68,.8,.72],[.48,.57,.06],x,B)],V=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],H=[],Z=[];V.forEach(([F,O,ne],I)=>{const K=o([F,O,ne],g);H.push(K),a([0,.05,0],[1.2,.13,1.1],s.concrete,K);for(const W of[-.5,.5])u([W,.1,-.38],[W,1.1,-.38],.045,A,K);u([-.5,1.1,-.38],[0,1.5,-.38],.045,A,K),u([0,1.5,-.38],[.5,1.1,-.38],.045,A,K);const ie=o([1.25,3.9,-.05],g);Z.push(ie),a([0,0,0],[.65,.72,.12],b,ie),a([0,0,.071],[.48,.55,.035],x,ie),u([0,-.28,.1],[0,.28,.1],.018,A,ie),u([-.23,0,.1],[.23,0,.1],.018,A,ie)});const Y=Array.from({length:10},()=>c([0,0,0],.065,x,g)),J=i.clone(!0);J.scale.setScalar(.4),J.position.set(-2,.9,-1.7),g.add(J),h("СОН / 06",[0,-.04,3.3],1.5,.29,g,{size:52}).rotation.x=-Math.PI/2;const ee=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],A,ee),a([0,0,.04],[.13,.22,.02],x,ee),ee.visible=!1,f(g,[T,v,...C,w,U,...q,B,...H,...Z,...Y,J]),f(T,[]),f(U,[]),f(B,[k,...D]),f(k,[]),H.forEach(F=>f(F,[])),Z.forEach(F=>f(F,[])),C.forEach(F=>f(F,[]));let j=Pc(),he=!1,me=0,ve=0,N=!1;try{N=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}ee.visible=N;function E(){j=Pc(),me=0,ve=0,he=!0,g.visible=!0,t.visible=!1,R(0,0)}function X(){he=!1,g.visible=!1,t.visible=!0}function te(F){j=C1(j,F),m(F==="sky"?330:165),_()}function Q(){j=R1(j),m(j.phase==="raining"?440:220),_()}function R(F,O){if(!he)return;const ne=j.phase;j=P1(j,F);const I=j.phase==="heating",K=j.target==="sky",ie=K?I?j.progress:["cloud","raining","settled"].includes(j.phase)?1:0:0;if(me=ie,ve=j.phase==="raining"?j.progress:j.phase==="settled"?1:0,B.visible=ie>.02,B.scale.setScalar(Math.max(.001,ie)),B.position.y=3.1+Math.sin(O*.9)*.05,q.forEach((W,ae)=>{W.position.y=3.8+ae%2*.22+ie*.5-ve*.25,W.scale.set(.65+ie*.12,.45*(1-ie*.6),.63)}),v.scale.setScalar(.42*(I&&!K?1+Math.sin(j.progress*Math.PI)*.75:1)),v.rotation.y=O*.2,Z.forEach((W,ae)=>{const ye=Math.max(0,Math.min(1,ve*1.6-ae*.3)),Se=ye*ye*(3-2*ye),$=V[ae];W.position.set(1.25+($[0]-1.25)*Se,3.9+($[1]+.8-3.9)*Se,-.05+($[2]+.06+.05)*Se),W.rotation.z=(1-Se)*Math.sin(O+ae)*.1,W.visible=["cloud","raining","settled"].includes(j.phase)}),D.forEach(W=>W.visible=j.phase==="cloud"||I),w.position.x=K?-1.7:-3,Y.forEach((W,ae)=>{W.visible=I;const ye=(O*.7+ae/10)%1;K?ye<.72?W.position.set(-.7,.45+ye/.72*3.25,.2):W.position.set(-.7+(ye-.72)/.28*1.9,3.7,.2):W.position.set(-2.35+Math.sin(ye*Math.PI*2)*.6,.5+ye*1.8,.87)}),j.trace&&!N){N=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}j.phase!==ne&&_()}return{enter:E,exit:X,choose:te,act:Q,update:R,text:()=>({ready:j.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:j.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[j.phase],button:()=>j.phase==="raining"?"окна падают…":j.phase==="heating"?"тепло идёт…":j.phase==="settled"?"увидеть сон снова":j.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...j,active:he,trace:N,warmth:me,spent:ve,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:g.visible,houseVisible:B.visible,windows:Z.map(F=>F.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...V.map(F=>[F[0],.8,F[2]])]})}}function Lc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function I1(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function D1(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Lc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function N1(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function U1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:m,chime:_,changed:g}){const p=a([0,0,0],e);p.name="dream-05-self-measuring-instrument",p.visible=!1;const y=r("#8ebcb2",{metalness:.35,roughness:.38}),A=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),S=r("#1c4147"),b=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,S,p),u([0,-.16,0],3.45,.08,b,p),h([0,-.1,0],3.65,.07,s.copper,p);for(let W=0;W<5;W++)h([0,-.1+W*.006,0],.7+W*.52,.009,A,p);const T=a([0,0,0],p);c([0,.12,-1.6],[3,.34,1.3],s.concrete,T),d([0,.3,-1.65],[0,3.75,-1.65],.12,y,T);const v=a([0,3.7,-1.4],p),C=u([0,0,-.12],1.05,.2,S,v);C.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const w=a([-.85,0,.02],v),U=a([.85,0,.02],v);c([.425,0,0],[.85,1.72,.1],x,w),c([-.425,0,0],[.85,1.72,.1],x,U);for(let W=0;W<12;W++){const ae=W*Math.PI/6;d([Math.sin(ae)*.78,Math.cos(ae)*.78,.09],[Math.sin(ae)*.91,Math.cos(ae)*.91,.09],.016,s.copper,v)}const q=a([0,0,.14],v);d([0,-.15,0],[0,.69,0],.025,S,q),l([0,0,0],.065,s.copper,q);const B=[a([-2.35,1.65,0],p),a([2.35,1.65,0],p)];for(const[W,ae]of B.entries())c([0,0,0],[.24,1.65,.38],y,ae),c([W===0?.38:-.38,-.76,0],[.95,.18,.38],A,ae),l([0,.84,0],.19,s.copper,ae);const k=[],D=[],V=[];for(let W=0;W<12;W++){const ae=-2.45+W*.445;D.push(new n.Vector3(ae,2.52,0));const ye=W/11,Se=ye*Math.PI*1.35;V.push(new n.Vector3(2.35*Math.cos(Se)*(1-ye*.85),.24+ye*3,2.05-ye*3.2));const $=a(D[W].toArray(),p);k.push($),c([0,0,0],[.42,.16,.57],y,$),c([0,.09,.15],[.03,.012,.2],s.copper,$)}const H=l([0,.7,0],[.45,.64,.45],A,p),Z=i.clone(!0);p.add(Z),Z.scale.setScalar(.43);const Y=new n.Vector3(2.8,.65,2.15);Z.position.copy(Y);function J(W,ae){const ye=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Ae],G)=>G?ye.lineTo(ze,Ae):ye.moveTo(ze,Ae)),ye.closePath();const Se=new n.ExtrudeGeometry(ye,{depth:.07,bevelEnabled:!1}),$=a([0,0,0],W);return o(Se,x,null,null,$),$.scale.setScalar(ae),$}const ee=J(v,.88);ee.position.set(0,.1,.2),ee.visible=!1;const j=J(ee,.22);j.position.set(-.03,-.2,.12);const he=c([-.03,-.2,.085],[.34,.44,.01],S,ee),me=J(t,.17);me.position.set(2.8,1.14,-2.75),me.rotation.y=Math.PI/4,f("СОН / 05",[0,-.055,2.94],1.65,.3,p,{size:48}).rotation.x=-Math.PI/2,f("СЕБЯ?",[0,.36,-.88],1.05,.26,p,{size:52});const ve=f("?",[-1.6,.65,1.5],.48,.65,p,{size:84,bg:"#1c4147"}),N=h([0,.12,0],.68,.035,s.light,p);m(p,[T,v,...k,...B,H,Z,ve,N]),m(T,[]),m(v,[w,U,q,ee]),m(w,[]),m(U,[]),m(q,[]),m(ee,[j,he]),m(j,[]),k.forEach(W=>m(W,[])),B.forEach(W=>m(W,[]));let E=Lc(),X=!1,te=0,Q=0,R=!1;try{R=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}me.visible=R;function L(){E=Lc(),te=0,Q=0,X=!0,p.visible=!0,t.visible=!1,I(0,0)}function F(){X=!1,p.visible=!1,t.visible=!0}function O(W){E=I1(E,W),_(W==="self"?330:165),g()}function ne(){E=D1(E),_(E.phase==="climbing"?440:220),g()}function I(W,ae){if(!X)return;const ye=E.phase;E=N1(E,W);const Se=E.phase==="unfolding"?E.progress:["stairs","climbing","inside"].includes(E.phase)?1:0;te=Se*Se*(3-2*Se),Q=n.MathUtils.damp(Q,E.phase==="inside"?1:0,3,W),k.forEach((ze,Ae)=>{ze.position.lerpVectors(D[Ae],V[Ae],te),ze.rotation.y=te*(-Ae*.07)});const $=E.phase==="measuring"?Math.sin(E.progress*Math.PI):0;if(B.forEach((ze,Ae)=>{const G=Ae===0?-1:1;ze.position.set(G*(2.35-$*1.55),1.65+te*.4,-te*.85),ze.rotation.z=G*te*.65}),q.rotation.z=E.phase==="measuring"?Math.sin(E.progress*35)*.8:E.phase==="refused"?Math.sin(ae*6)*.25:-te*Math.PI*1.75,H.position.y=.7+(E.phase==="measuring"?Math.sin(E.progress*Math.PI)*1.5:Math.sin(ae*1.3)*.05),H.scale.set(.45*(1-$*.16),.64*(1+$*.3),.45*(1-$*.16)),ve.visible=E.phase==="refused",ve.position.y=.65+Math.sin(ae*2)*.1,w.rotation.y=Q*1.7,U.rotation.y=-Q*1.7,q.visible=Q<.2,ee.visible=E.phase==="inside",ee.rotation.z=Math.sin(ae*.7)*.04,j.rotation.z=-ae*.12,Z.position.copy(Y),Z.scale.setScalar(.43),Z.visible=E.phase!=="inside",["climbing","inside"].includes(E.phase)){const ze=E.phase==="inside"?1:E.progress,Ae=[Y,...V.map(oe=>oe.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],G=ze*(Ae.length-1),M=Math.min(Ae.length-2,Math.floor(G));Z.position.lerpVectors(Ae[M],Ae[M+1],Math.min(1,G-M)),Z.scale.setScalar(.43*(1-ze*.8))}if(N.position.set((E.target==="self",0),E.target==="self"?3.7:.12,E.target==="self"?-1.4:0),N.rotation.x=E.target==="self"?0:Math.PI/2,N.visible=["ready","refused","measuring","unfolding"].includes(E.phase),E.trace&&!R){R=!0,me.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ye!==E.phase&&g()}function K(){return{ready:E.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[E.phase]}return{enter:L,exit:F,choose:O,act:ne,update:I,text:K,button:()=>E.phase==="inside"?"увидеть сон снова":E.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...E,active:X,trace:R,unfold:te,opened:Q,rootVisible:t.visible,roomVisible:p.visible,steps:k.map(W=>W.position.toArray()),jaws:B.map(W=>W.position.toArray()),drop:H.position.toArray(),head:Z.position.toArray(),cursorVisible:ee.visible,cursorPosition:ee.getWorldPosition(new n.Vector3).toArray(),faceAngles:[w.rotation.y,U.rotation.y],nestedVisible:ee.visible&&j.visible,landmarks:[H.position.toArray(),[0,3.7,-1.4],Y.toArray(),V[0].toArray()]})}}const O1=["восток","юг","запад","север"],kf=[0,2,3];function nc(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function F1(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function z1(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==kf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function k1(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function B1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,batchStatic:m,chime:_,changed:g}){const p=a([0,0,0],e);p.name="dream-04-letter-above-roof",p.visible=!1;const y=r("#355b62"),A=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,y,p),h([0,-.26,0],3.78,.024,s.copper,p);for(let R=0;R<4;R++){const L=R*Math.PI/2,F=Math.cos(L)*3.05,O=Math.sin(L)*3.05;f(["В","Ю","З","С"][R],[F,-.23,O],.38,.28,p).rotation.x=-Math.PI/2}const S=[],b=[],T=[];for(let R=0;R<3;R++){const L=1.05+R*1.4,F=2.05-R*.27,O=a([0,L,0],p);S.push(O);for(let ae=1;ae<4;ae++){const ye=ae*Math.PI/2,Se=Math.cos(ye),$=Math.sin(ye),ze=[[.3,.3,-.3],[.3,.3,.3],[F,.04,F],[F,.04,-F]],Ae=new n.BufferGeometry,G=[];for(const oe of[0,1,2,0,2,3]){const[le,de,be]=ze[oe];G.push(le*Se-be*$,de,le*$+be*Se)}Ae.setAttribute("position",new n.Float32BufferAttribute(G,3)),Ae.computeVertexNormals();const M=A.clone();M.side=n.DoubleSide,o(Ae,M,null,null,O),d([F*Se-F*$,.04,F*$+F*Se],[F*Se+F*$,.04,F*$-F*Se],.035,s.copper,O);for(const oe of[-1,1])d([F*Se-F*$*oe,.04,F*$+F*Se*oe],[(F+.16)*Se-(F+.16)*$*oe,.2,(F+.16)*$+(F+.16)*Se*oe],.035,s.copper,O)}const ne=a([F*.67,.045,0],O);d([-.32,0,0],[.3,0,0],.026,s.mint,ne),d([.3,0,0],[.1,0,.13],.026,s.mint,ne),d([.3,0,0],[.1,0,-.13],.026,s.mint,ne),b.push(ne);const I=kf[R]*Math.PI/2,K=Math.cos(I)*F*.63,ie=Math.sin(I)*F*.63,W=h([K,L+.09,ie],.16,.025,s.light,p);T.push(W),f(`${R+1}`,[F+.26,L+.14,.2],.36,.29,p,{bg:"#355b62",fg:"#f0e4b8"});for(const ae of[-1,1])d([ae*.3,L-.32,-.3],[ae*.3,L-.03,-.3],.018,s.copper,p)}const v=a([-2.6,.16,1.5],p);c([0,0,0],[1.1,.62,.7],s.cream,v),c([0,.16,.361],[.72,.07,.025],y,v),f("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,p,{size:40});const C=i.clone(!0);p.add(C),C.scale.setScalar(.53),C.position.set(-2.6,1,1.5),C.rotation.z=-.12,f("СОН / 04",[0,-.12,3.34],1.8,.32,p,{size:48}).rotation.x=-Math.PI/2;const w=a([-1.1,.12,1.5],p);c([0,0,0],[.52,.025,.36],x,w);const U=a([-.26,.016,0],w),q=a([.26,.016,0],w);c([.13,0,0],[.26,.022,.36],x,U),c([-.13,0,0],[.26,.022,.36],x,q),d([-.25,.04,-.17],[0,.04,.1],.009,s.copper,w),d([.25,.04,-.17],[0,.04,.1],.009,s.copper,w);const B=l([0,.045,0],.055,s.light,w),k=a([0,5.3,0],p);h([0,0,0],.55,.025,s.copper,k),d([0,-.3,0],[0,.22,0],.018,s.copper,k);const D=Array.from({length:6},(R,L)=>{const F=L*Math.PI/3,O=l([Math.cos(F)*.29,0,Math.sin(F)*.29],[.21,.065,.11],x,k);return O.rotation.y=-F,O});k.visible=!1;const V=[new n.Vector3(-1.1,.12,1.5),...T.map(R=>R.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],H=new n.BufferGeometry().setFromPoints(V),Z=new n.Line(H,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));Z.computeLineDistances(),p.add(Z);let Y=nc(),J=!1,ee=0,j=!1,he=[Math.PI/2,Math.PI/2,Math.PI/2];try{j=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const me=a([-3.75,1.17,-2.95],t);me.visible=j,c([0,0,0],[.23,.012,.16],x,me),d([-.11,.016,-.07],[0,.016,.04],.005,s.copper,me),d([.11,.016,-.07],[0,.016,.04],.005,s.copper,me),m(p,[...S,...T,v,C,w,k,Z]),S.forEach((R,L)=>m(R,[b[L]])),m(w,[U,q,B]),m(U,[]),m(q,[]),m(v,[]),m(k,D),m(me,[]);function ve(){J=!0,Y=nc(),ee=0,he=Y.turns.map(R=>R*Math.PI/2),p.visible=!0,t.visible=!1,te(0,0)}function N(){J=!1,p.visible=!1,t.visible=!0}function E(R){Y=F1(Y,R),_(165+R*55+Y.turns[R]*22),g()}function X(){Y.phase==="delivered"?(Y=nc(),ee=0):Y=z1(Y),_(220),g()}function te(R,L){if(!J)return;const F=Y.phase;Y=k1(Y,R),ee=n.MathUtils.damp(ee,Y.phase==="delivered"?1:0,2.4,R),S.forEach((ie,W)=>{const ae=Y.turns[W]*Math.PI/2,ye=Math.atan2(Math.sin(ae-he[W]),Math.cos(ae-he[W]));he[W]+=ye*(R===0?1:1-Math.exp(-R*7)),ie.rotation.y=-he[W],ie.position.x=ee*[-2.15,1.85,0][W],ie.position.z=ee*[.45,-.65,-2.1][W],ie.rotation.z=ee*(W===0?-.16:.13)});const O=Math.min(4,Y.progress),ne=Math.min(3,Math.floor(O)),I=Math.min(1,O-ne),K=I*I*(3-2*I);if(w.position.lerpVectors(V[ne],V[ne+1],K),w.rotation.y=L*.16,U.rotation.z=-ee*1.1,q.rotation.z=ee*1.1,B.position.y=.045+ee*.18,k.visible=Y.phase==="delivered",k.rotation.y=L*.22,D.forEach((ie,W)=>{ie.position.y=Math.sin(L*.7+W)*.035}),Z.visible=Y.phase!=="delivered",Y.trace&&!j){j=!0,me.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}F!==Y.phase&&g()}function Q(){return Y.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":Y.phase==="caught"?`Поймала крыша ${Y.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:Y.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:ve,exit:N,turn:E,send:X,update:te,text:Q,directions:O1,inspect:()=>({...Y,turns:[...Y.turns],active:J,trace:j,open:ee,roomVisible:p.visible,rootVisible:t.visible,roofs:S.map(R=>({position:R.position.toArray(),rotation:R.rotation.toArray().slice(0,3)})),letter:w.position.toArray(),goals:T.map(R=>R.position.toArray()),crown:k.visible})}}function G1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:d,torus:h,sign:f,paperBoat:m,batchStatic:_,chime:g}){const p=a([0,0,0],e);p.name="dream-03-silent-dock",p.visible=!1;const y=r("#526b79"),A=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,y,p),u([0,-.23,0],4,.055,A,p),h([0,-.18,0],4.08,.04,s.copper,p),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,p);for(let L of[-.1,.55,1.2,1.85])c([-2.85,.07,L],[1.38,.045,.025],y,p);for(let L of[-3.4,-2.3])d([L,-.3,1.9],[L,.48,1.9],.035,s.copper,p);f("СОН / 03",[-2.85,.13,2.4],1.6,.28,p,{size:48}).rotation.x=-Math.PI/2;const S=i.clone(!0);S.position.set(-2.8,1.27,.75),S.scale.setScalar(.65),p.add(S);const b=[];for(const L of[-1,1]){const F=a([L*.12,-.04,.68],S);d([0,0,0],[L*.64,-.2,.05],.06,s.black,F),l([L*.62,-.18,.05],[.19,.095,.07],s.black,F),d([L*.58,-.18,.06],[L*.58,-.7,.06],.015,s.copper,F),l([L*.58,-.76,.06],.075,s.copper,F),_(F,[]),b.push(F)}const T=Array.from({length:3},(L,F)=>h([-1.2+F*1.25,-.17,-.25],.72,.035,F===1?s.cream:s.copper,p)),v=Array.from({length:3},(L,F)=>h([-1.2+F*1.25,-.165,-.25],.72,.013,x,p)),C=o(new n.IcosahedronGeometry(.12,1),y,[-2.6,.35,1.5],null,p),w=m(p,[-1.9,-.13,-.25],.9),U=l([0,.53,0],[.065,.09,.065],s.light,w),q=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,p);q.rotation.z=.65;const B=[];for(let L=0;L<5;L++){const F=-1.6+L*.85;d([F,-.2,-2.9],[F,1.1+L%2*.4,-2.9],.025,y,p),B.push(l([F,1.12+L%2*.4,-2.9],.035,s.light,p))}let k=!1,D=0,V=1,H=[1,1,1],Z=[0,0,0],Y=0,J=0,ee=!1;try{ee=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const j=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);j.visible=ee;const he=Array.from({length:5},()=>new n.Vector3),me=new n.CatmullRomCurve3(he),ve=new n.Vector3,N=new n.Vector3;_(p,[S,...T,...v,C,w,q,...B]),_(S,b),_(w,[U]);function E(L){V=n.MathUtils.clamp(Math.round(Number(L)||1),1,3)}function X(){k=!0,D=0,H=[1,1,1],Z=[0,0,0],Y=0,J=0,p.visible=!0,t.visible=!1,R(0,0)}function te(){k=!1,p.visible=!1,t.visible=!0}function Q(){if(k){if(D===3){D=0,H=[1,1,1],Z=[0,0,0],J=0;return}if(H[D]=V,D++,Y=0,g(110+V*55),D===3){ee=!0,j.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function R(L,F){if(!k)return;J+=Math.min(L,.15),Y+=Math.min(L,.15);for(let K=0;K<3;K++){Z[K]=n.MathUtils.damp(Z[K],K<D?1:0,3,L);const ie=-.17+Z[K]*(.95+H[K]*.42),W=.72+H[K]*.12;T[K].position.y=ie,T[K].rotation.set(Math.PI/2*(1-Z[K]),Math.PI/2*Z[K],0),T[K].scale.setScalar(W/.72),v[K].scale.setScalar(W/.72*(1+Math.sin(J*.9+K)*.045)),he[K+1].set(T[K].position.x,Math.max(-.1,ie),-.25)}he[0].set(-2,-.1,-.25),he[4].set(2.5,-.1,-.25);const O=(1-Math.cos(J*.55))*.5;me.getPoint(O,ve),me.getPoint(Math.min(.999,O+.012),N),w.position.copy(ve),w.rotation.z=n.MathUtils.clamp(Math.atan2(N.y-ve.y,N.x-ve.x),-.45,.45),w.rotation.y=0,C.visible=D>0;const ne=Math.min(1,Y/1.8),I=Math.max(0,D-1);C.position.set(n.MathUtils.lerp(-2.5,-1.2+I*1.25,ne),.35+ne*(2.1+H[I]*.35),n.MathUtils.lerp(1.4,-.25,ne)),C.rotation.y=J*.4,b.forEach((K,ie)=>K.rotation.z=Math.sin(J*1.2+ie*Math.PI)*(.06+D*.04)),U.position.y=.53+Math.sin(F)*.02}return{enter:X,exit:te,toss:Q,choose:E,update:R,inspect:()=>({active:k,step:D,force:V,forces:[...H],lift:[...Z],trace:ee,roomVisible:p.visible,rootVisible:t.visible,boat:w.position.toArray(),ringY:T.map(L=>L.position.y),ringRotation:T.map(L=>L.rotation.toArray().slice(0,3)),stone:C.position.toArray()})}}function cd(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,u=Math.min(i,Math.max(0,360-l.age));l.age+=u,l.exposure[l.face]+=u,l[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(l.id),d=t.shelf.findIndex(h=>h.id===u);if(d<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(d,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",f={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(f),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:f,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const V1={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function H1({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:u,sign:d,batchStatic:h,changed:f,watching:m,localPlay:_}){var F,O,ne;const g=s([24,-1.55,0]);g.name="cheese-cellar";const p=i("#697b70"),y=i("#b4b89b"),A=i("#936c4d"),x=i("#e1b064"),S=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],p,g),r([0,1.6,-3.65],[10,3.2,.3],y,g),r([-4.85,1.3,0],[.3,2.6,7.3],y,g);for(let I=-4;I<=4;I+=2)r([I,1.5,-3.43],[.16,3,.1],p,g);for(let I of[-4.4,4.4])c([I,0,-3.3],[I,3.6,-3.3],.09,t.copper,g),c([I,3.6,-3.3],[I,3.6,2.5],.09,t.copper,g),c([I,3.6,2.5],[I,0,2.5],.09,t.copper,g);d("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,g,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],A,g),r([0,0,-2.7],[7.9,.14,1.05],A,g);for(let I of[-3.8,3.8])r([I,.6,-2.7],[.14,1.4,1.05],A,g);a([-3,.55,1.1],.75,1.1,t.copper,g),l([-3,1.11,1.1],.75,.055,t.dark,g),a([-3,1.1,1.1],.64,.02,b,g),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,A,g);for(let I of[2.8,3.5])a([I,.28,1.8],.26,.56,t.cream,g),a([I,.59,1.8],.12,.1,t.copper,g);const T=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,g);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,g);for(let I=0;I<4;I++)r([2.25+I*.23,2.4,-3.32],[.045,.55,.03],t.dark,g);r([.5,.3,.25],[3.7,.6,3.3],A,g);const v=s([.5,1.02,.25],g),C=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),w=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),S,[0,0,0],null,v),U=l([0,.33,0],.35,.026,t.cream,v),q=s([.5,.65,2.3],g),B=[];for(let I=0;I<6;I++)B.push(o([-1.25+I*.5,0,0],.08,t.mint,q));const k=d("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,g,{size:36});k.rotation.x=-Math.PI/2;function D(I){const K=s(I,g),ie=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,K),W=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),S.clone(),[0,0,0],null,K),ae=s([0,-.14,.09],K);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ae);const ye=o([.09,.16,.27],.04,t.mint,ae),Se=u(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,K),$=s([0,0,0],K);for(const[ze,Ae,G]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Ae,G],[.05,.05,.025],t.dark,$);return{g:K,body:ie,crust:W,steps:ae,crystal:Se,holes:$,pearl:ye}}const V=Array.from({length:6},(I,K)=>D([-3.15+K*1.26,1.42,-2.6])),H=s([0,0,0],e);for(let I=0;I<24;I++){const K=I/23;r([8.3+K*11.2,-.15-K*1.32,1.4+Math.sin(K*Math.PI)*2],[.85,.15,.75],p,H)}for(let I=0;I<5;I++)r([20+I*.7,-1.46,1.4-I*.22],[.75,.13,.7],p,H);d("СЫР →",[10.2,.35,2.4],1.5,.4,H,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,H),h(H,[]),h(g,[v,T,q,k,...V.map(I=>I.g)]);for(const I of V)h(I.steps,[I.pearl]),h(I.holes,[]);let Z=null,Y=null,J=0,ee=null,j="",he=0;try{const I=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");Z=(I==null?void 0:I.state)||I,J=Number(I==null?void 0:I.clockOffset)||0}catch{}const me=()=>Date.now()/1e3+J;function ve(I,K,ie={}){const W=cd({state:Z,mode:I,tool:K,args:ie,now:me()});Z=W.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:Z,clockOffset:J}))}catch{}return W}ve("migrate");const N=document.createElement("div");N.id="cellar-controls",N.hidden=!0,N.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(N);function E(){return Y&&m()?Y:cd({mode:"migrate",state:Z,now:Z.updated}).public}function X(I){ee=I;const K=I.batch;if(v.visible=!!K,k.visible=!K,T.rotation.y=I.air==="dry"?-.8:0,K){v.rotation.z=K.face?Math.PI:0;const ie=K.age/360;C.material.color.set(K.culture==="moon"?"#e9cf8b":"#c8bc88"),w.material.color.set(I.air==="damp"?"#8b9f78":"#b87a48"),U.scale.setScalar(1+ie*.15)}for(let ie=0;ie<6;ie++)B[ie].visible=!!K&&K.age>=(ie+1)*60;V.forEach((ie,W)=>{const ae=I.shelf[W];ie.g.visible=!!ae,ae&&(ie.g.rotation.z=ae.kind==="lopsided"?.22:0,ie.crust.material.color.set(ae.wet>=180?"#8b9f78":"#b87a48"),ie.steps.visible=ae.kind==="moon_stair",ie.crystal.visible=ae.kind==="stone",ie.holes.visible=ae.kind==="holes"||ae.kind==="lopsided")})}function te(I,K){_();const ie=ve("action",I,K);return j="",L(0),f(),ie}for(const I of N.querySelectorAll("[data-culture]"))I.onclick=()=>te("set_batch",{culture:I.dataset.culture});N.querySelector("#cellar-turn").onclick=()=>te("tend",{air:Z.air,turn:!0}),N.querySelector("#cellar-air").onclick=()=>te("tend",{air:Z.air==="damp"?"dry":"damp",turn:!1}),N.querySelector("#cellar-wait").onclick=()=>{_(),J+=60,ve("tick"),j="",L(0),f()};function Q(){const I=ee||E(),K=I.batch,ie=Y&&m()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",W=K?K.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(K.age)}/360 с. Корка: ${Math.floor(K.exposure[0])}/${Math.floor(K.exposure[1])} с.`:I.shelf.length?`На полке: ${I.shelf.map(ae=>V1[ae.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:Y&&m()?"войти в свою сыроварню":K?K.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(Y&&m())&&!!K&&!K.ready,description:ie+" "+W}}function R(){const I=ee||E(),K=I.batch;N.querySelector("#cellar-readout").textContent=`${I.air==="damp"?"сыро":"сухо"} · ${K?K.ready?"готово":`ещё ${Math.ceil(K.remaining)} с`:"нет колеса"} · полка ${I.shelf.length}/6`;for(const ie of N.querySelectorAll("[data-culture]"))ie.disabled=!!K;N.querySelector("#cellar-turn").disabled=!K||K.ready,N.querySelector("#cellar-air").textContent=I.air==="damp"?"сделать суше":"вернуть сырость"}function L(I){I-he>=1&&(he=I,ve("tick"));const K=E(),ie=JSON.stringify(K);ie!==j&&(j=ie,X(K),R(),f())}return window.addEventListener("beznogim:state",({detail:I})=>{var ie,W;const K=(W=(ie=I.mechanics)==null?void 0:ie.cellar)==null?void 0:W.public;K&&(Y=K,j="")}),Y=((ne=(O=(F=window.__beznogimState)==null?void 0:F.mechanics)==null?void 0:O.cellar)==null?void 0:ne.public)||null,X(E()),R(),{house:g,controls:N,update:L,card:Q,run:()=>te(Z.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:Y&&m()?"resident":"sandbox",...ee,wheelVisible:v.visible,shelfVisible:V.filter(I=>I.g.visible).length,stairsVisible:V.filter(I=>I.g.visible&&I.steps.visible).length,shutter:T.rotation.y})}}function W1({entries:n,elements:e,layer:t,camera:i}){const s=new xt,r=new xt,o=new z,a=Object.entries(n).map(([d,h])=>({element:e[d],anchor:h.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,u=!1;return{update(d,h,f){if(t.hidden===d&&(t.hidden=!d),!d){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const m=!u||c!==h||l!==f||!s.equals(r);c=h,l=f,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!m)continue;o.copy(_.anchor)}o.applyMatrix4(s);const g=(o.x+1)*h*.5,p=(1-o.y)*f*.5,y=o.z>=-1&&o.z<=1&&g>=10&&g<=h-10&&p>=10&&p<=f-55;if(y!==_.visible&&(_.visible=y,_.element.classList.toggle("hidden",!y)),!y)continue;const A=Math.round(g*10)/10,x=Math.round(p*10)/10;(A!==_.x||x!==_.y)&&(_.x=A,_.y=x,_.element.style.transform=`translate3d(${A}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function X1(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,d=Math.max(12,u?0:a.bottom+12,u?l.bottom+12:0),h=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(d)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Te=n=>document.querySelector(n),jt=()=>innerWidth<700,Bf=matchMedia("(prefers-reduced-motion: reduce)").matches;let Tr={};try{Tr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Ee={loop:0,roof:null,running:!!Tr.running,harvest:Math.min(99,Math.max(0,Number(Tr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Tr.dockTrips)||0))),dockPending:Tr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function sr(){return Ee.roof===null?Ee.running||Ee.loop>0:!!Ee.roof}function Ic(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Ee.running,harvest:Ee.harvest,dockTrips:Ee.dockTrips,dockPending:Ee.dockPending}))}catch{}}const ot=new Uf({antialias:!0,alpha:!1,powerPreference:"high-performance"});ot.setPixelRatio(Math.min(devicePixelRatio,jt()?1.5:2));ot.setSize(innerWidth,innerHeight,!1);ot.shadowMap.enabled=!0;ot.shadowMap.type=qs;ot.shadowMap.autoUpdate=!1;ot.shadowMap.needsUpdate=!0;ot.outputColorSpace=cn;ot.toneMapping=Ha;ot.toneMappingExposure=1.22;Te("#world").append(ot.domElement);const rn=new of;rn.background=new ut("#182e32");rn.fog=new tl("#182e32",8e-4);const Oe=new eo(-10,10,10,-10,.1,600),yu=new z(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(yu);const Ze=new Kx(Oe,ot.domElement);Ze.target.copy(yu);Ze.enableDamping=!0;Ze.enableRotate=!1;Ze.enablePan=!0;Ze.minZoom=.075;Ze.maxZoom=2.5;Ze.screenSpacePanning=!1;Ze.mouseButtons.LEFT=Ei.PAN;Ze.mouseButtons.RIGHT=Ei.PAN;Ze.touches.ONE=Si.PAN;Ze.touches.TWO=Si.DOLLY_PAN;rn.add(new Sf("#d9eedc","#334d53",2.3));const bs=new gu("#ffe2ac",3.3);bs.position.set(-7,14,6);bs.castShadow=!0;bs.shadow.mapSize.set(jt()?512:1024,jt()?512:1024);Object.assign(bs.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});bs.shadow.bias=-4e-4;bs.shadow.normalBias=.025;rn.add(bs);const Gf=new gu("#8ad5d8",1.3);Gf.position.set(5,7,-8);rn.add(Gf);const gt=new qi;rn.add(gt);const ic={};function Qe(n,e={}){const t=n+JSON.stringify(e);return ic[t]||(ic[t]=new Hs({color:n,roughness:.8,...e}))}const ai={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},pe={concrete:Qe(ai.concrete),cream:Qe(ai.cream),dark:Qe(ai.dark),metal:Qe(ai.metal,{metalness:.5,roughness:.4}),copper:Qe(ai.copper,{metalness:.6,roughness:.35}),rust:Qe(ai.rust),black:Qe(ai.black),leaf:Qe(ai.leaf),light:Qe("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:Qe("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},lr={box:new Ni(1,1,1),sphere:new ol(1,12,8),ico:new jr(1,1),cyl:new Kr(1,1,1,16),cone:new Ms(1,1,8)};function kt(n,e,t,i,s=gt){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Ve=(n,e,t,i=gt)=>kt(lr.box,t,n,e,i),st=(n,e,t,i=gt)=>kt(lr.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),_t=(n,e,t,i,s=gt)=>kt(lr.cyl,i,n,[e,t,e],s);function to(n,e,t,i=gt,s=.08){return kt(new xu(...e,1,s),t,n,null,i)}function dt(n=[0,0,0],e=gt){const t=new qi;return t.position.set(...n),e.add(t),t}function cr(n,e,t,i=gt){const s=new lu(n.map(r=>new z(...r)));return kt(new ll(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function mt(n,e,t,i,s=gt){const r=new z(...n),o=new z(...e),a=o.clone().sub(r),c=_t(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new z(0,1,0),a.normalize()),c}function Et(n,e,t,i,s=gt,r=[Math.PI/2,0,0]){const o=kt(new al(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Ot(n,e,t,i,s=gt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new ru(o);c.colorSpace=cn;const l=kt(new Ss(t,i),new Zr({map:c,side:Ln}),e,null,s);return l.castShadow=!1,l}let sc=179;function Tt(){return sc=sc*1664525+1013904223>>>0,sc/4294967296}const za=document.createElement("canvas");za.width=za.height=256;const ka=za.getContext("2d");ka.fillStyle="#b4bcaa";ka.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)ka.fillStyle=`rgba(${Tt()>.5?"60,82,64":"235,229,201"},${Tt()*.08})`,ka.fillRect(Tt()*256,Tt()*256,1+Tt()*3,1+Tt()*3);const qr=new ru(za);qr.wrapS=qr.wrapT=Fr;qr.repeat.set(5,5);qr.colorSpace=cn;const q1=Qe("#c2c6b1",{map:qr,roughness:.97});function Mu(n,e,t,i,s=gt){const r=new Qr;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new or(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),kt(o,i,null,null,s)}const Su=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Mu(Su,0,.82,pe.concrete);Mu(Su,.06,.14,q1);Mu(Su.map(([n,e])=>[n*.97,e*.97]),-.8,.6,Qe("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Tt()*10.9,t=Tt()>.5?5.15:-5.2,i=kt(lr.ico,Qe(n%3?"#557469":"#668477"),[e,-1.15-Tt()*.5,t],[.25+Tt()*.8,.2+Tt()*.55,.35+Tt()*.3]);i.rotation.y=Tt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Ve([e,-.37,5.61],[.48,.19,.025],n%2?pe.copper:pe.dark),n%2===0&&cr([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,pe.metal)}Ot("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,gt,{size:32});const Dt=dt([-3.2,.08,-2.5]),pn=dt([0,0,0],Dt);Ve([0,.08,0],[4.5,.15,3.6],pe.dark,Dt);Ve([0,1.2,-1.68],[4.5,2.4,.18],pe.cream,Dt);Ve([-2.15,1,0],[.18,2,3.6],pe.cream,Dt);for(let n=0;n<5;n++){Ve([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],pe.concrete,Dt),Ve([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],pe.metal,Dt);for(let e=0;e<3;e++)Ve([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],pe.copper,Dt)}Ve([0,2.47,-.2],[4.8,.14,3.7],pe.rust,pn);for(let n=0;n<23;n++){const e=Ve([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],Qe("#d09062"),pn);e.rotation.x=-.015}Ve([0,2.35,1.62],[4.8,.14,.18],pe.dark,Dt);mt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,pe.copper,Dt);mt([2.3,.12,1.62],[2.3,2.4,1.62],.055,pe.copper,Dt);Ot("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Dt,{size:37});Ve([.1,.85,-.84],[3.8,.13,.87],pe.rust,Dt);for(const n of[-1.5,1.65])Ve([n,.44,-.84],[.12,.85,.65],pe.metal,Dt);for(let n=0;n<3;n++)Ve([-1.15+n*.95,.51,-.85],[.82,.47,.75],pe.concrete,Dt),Ve([-1.15+n*.95,.5,-.44],[.18,.04,.03],pe.copper,Dt);for(let n=0;n<6;n++)Ve([-1.6+n*.48,2.07,-1.48],[.28,.16+Tt()*.16,.17],Qe(["#9fba95","#cb9b70","#667f71"][n%3]),Dt);_t([0,.5,.7],.32,.12,pe.rust,Dt);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;mt([e,.06,t],[e,.5,t],.04,pe.metal,Dt)}for(let n=0;n<4;n++)Et([-1.5,.06,1],.3-n*.045,.025,pe.black,Dt);_t([-1.5,3,-.9],.16,.9,pe.metal,pn);_t([-1.5,3.47,-.9],.24,.08,pe.rust,pn);Ve([1.4,2.9,-.4],[.8,.5,.6],pe.concrete,pn);for(let n=0;n<5;n++)Ve([1.1+n*.15,2.94,-.085],[.035,.32,.03],pe.dark,pn);const bu=new ul("#ffca86",5,5,2);bu.position.set(-3,1.7,-1.1);gt.add(bu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=to([n,.1,e],[.74,.05,.74],Qe(Tt()>.3?"#b3baa6":"#a5b5a4"),gt,.018);t.rotation.y=(Tt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Tt()*12,t=-5.1+Tt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=kt(lr.cone,pe.leaf,[e,.1,t],[.022,.12+Tt()*.12,.022]);i.rotation.z=(Tt()-.5)*.7}const Dc=new kn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Ln});Ve([3.7,.12,3.6],[4.9,.24,2.7],pe.dark);kt(new Ss(4.5,2.4),Dc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Ve([3.7,.29,n],[5,.38,.16],pe.cream);for(const n of[1.18,6.2])Ve([n,.29,3.6],[.16,.38,2.85],pe.cream);for(let n=0;n<13;n++)Ve([1.85,.5,2.15+n*.235],[1.08,.09,.22],Qe(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])_t([e,.88,n],.045,.8,pe.copper);for(const n of[1.31,2.4])cr([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,pe.cream);const Eu=[];for(let n=0;n<6;n++){let e=Ve([4+n*.095,-1.25,5.56],[.055,2.4,.03],Qe("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Eu.push(e)}for(let n=0;n<4;n++)Ve([3.96+n*.17,.31,5.31],[.055,.08,.6],pe.dark);const Yt=dt([3.7,.1,-2.6]);to([0,.14,0],[3.7,.27,3.5],pe.cream,Yt,.09);for(const n of[-1.55,1.55])Ve([n,1.76,0],[.17,3.25,.2],pe.metal,Yt),Ve([n,.38,0],[.45,.2,.6],pe.copper,Yt),mt([n,.36,-1.2],[n,2.9,0],.045,pe.copper,Yt),mt([n,.36,1.2],[n,2.9,0],.045,pe.copper,Yt);Ve([0,3.38,0],[3.5,.18,.26],pe.copper,Yt);const Y1=Et([0,2.7,-.5],1.83,.035,pe.copper,Yt,[0,0,0]);Y1.scale.y=.85;const no=[];for(let n=0;n<5;n++){const e=dt([-1.18+n*.59,3.24,0],Yt),t=1.8+n*.12;mt([0,0,-.08],[0,-t,0],.015,pe.dark,e),mt([0,0,.08],[0,-t,0],.015,pe.dark,e),st([0,-t,0],.205,pe.copper,e),Et([0,-t,0],.211,.012,pe.light,e,[0,0,0]),no.push({group:e,len:t,phase:n})}Ve([0,.6,1.3],[1.45,.8,.4],pe.metal,Yt);Ot("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Yt,{size:40});const $1=_t([-.43,.97,1.3],.19,.07,pe.cream,Yt);$1.rotation.x=Math.PI/2;const wu=Ve([-.43,.99,1.342],[.015,.22,.008],pe.rust,Yt);wu.rotation.z=-.7;const Vf=st([.53,.93,1.52],.09,pe.light,Yt),fl=dt([.15,.4,1.59],Yt);Et([0,0,0],.19,.023,pe.rust,fl,[0,0,0]);for(let n=0;n<3;n++)mt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,pe.rust,fl);cr([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,pe.copper);const Hf=[];function Tu(n,e,t=1.5){_t([n,t/2,e],.038,t,pe.metal),Ve([n,t,e],[.27,.11,.27],pe.dark),Ve([n,t-.18,e],[.17,.25,.17],pe.light),Ve([n,t-.34,e],[.25,.08,.25],pe.copper);const i=new ul("#ffbe70",1.8,3);i.position.set(n,t-.16,e),Hf.push(i)}Tu(-5.9,3.9,1.3);Tu(.3,-4.8,1.7);Tu(5.8,1.25,1.35);const un=dt([-3.6,.08,3.55]),Nc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;to([0,.14,e],[3.6,.3,1.14],pe.rust,un,.06),Ve([0,.305,e],[3.36,.04,.92],Qe(ai.soil),un);for(let t=0;t<4;t++){const i=dt([-1.26+t*.84,.33,e],un);_t([0,.14,0],.026,.28,pe.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=st([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],Qe(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){st([0,.17,0],[.25,.18,.25],Qe("#b6c58a"),i);for(let s=0;s<6;s++){const r=st([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],pe.leaf,i);r.rotation.y=s}Nc.push(i)}else{const s=st([.05,.22,0],[.1,.21,.12],Qe(ai.purple,{roughness:.35}),i);s.rotation.z=-.25,st([.05,.41,0],[.075,.025,.07],pe.leaf,i),Nc.push(i)}}}const Wf=dt([-1.72,.1,.8],un);for(let n=0;n<2;n++)Ve([n*3.45,.6,0],[.04,1.3,.04],pe.copper,Wf);mt([0,1.25,0],[3.45,1.25,0],.022,pe.copper,Wf);Ot("КОБАЧКИ",[-.45,.68,1.64],1,.26,un,{bg:"#c2c7a3",fg:"#445e45",size:42});_t([1.9,.23,.7],.18,.34,Qe("#6b9389"),un);mt([2.04,.25,.7],[2.4,.46,.7],.045,Qe("#6b9389"),un);Et([1.8,.48,.7],.16,.02,pe.copper,un,[0,0,0]);Ve([-1.6,.2,1.47],[.65,.4,.45],pe.rust,un);for(let n=0;n<3;n++)Ve([-1.6,.12+n*.11,1.71],[.7,.05,.025],pe.copper,un);const Mn=dt([-3.8,.08,.35]);_t([0,.73,0],.58,.1,pe.rust,Mn);_t([0,.35,0],.045,.7,pe.metal,Mn);for(let n=0;n<3;n++)mt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,pe.metal,Mn);const io=dt([.1,.81,0],Mn);st([0,.2,0],[.23,.22,.23],pe.cream,io);_t([0,.37,0],.14,.06,pe.copper,io);st([0,.42,0],.045,pe.dark,io);mt([.15,.18,0],[.33,.32,0],.07,pe.cream,io);Et([-.15,.25,0],.18,.035,pe.dark,io,[0,0,0]);for(const n of[-.35,.38])_t([n,.84,.24],.082,.15,pe.cream,Mn),Et([n,.92,.24],.084,.012,pe.copper,Mn),_t([n,.921,.24],.063,.006,Qe("#67513b"),Mn),Et([n+.09,.86,.24],.045,.011,pe.cream,Mn,[0,0,0]);const pl=[];for(let n=0;n<9;n++){const e=st([0,0,0],.07,Qe("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,pl.push(e)}const Kn=dt([-5.65,.09,1.1]);Ve([0,.3,0],[.7,.6,.7],pe.concrete,Kn);to([0,.8,0],[.68,.45,.35],pe.dark,Kn,.05);for(let n=0;n<6;n++)Ve([-.2+n*.05,.8,.18],[.022,.27,.018],pe.copper,Kn);Ve([.18,.85,.184],[.16,.075,.02],pe.light,Kn);st([.18,.72,.19],.05,pe.cream,Kn);mt([.18,1,0],[.48,1.6,0],.012,pe.copper,Kn);const Xf=dt([-.5,.1,-4.6]);_t([0,1.75,0],.055,3.5,pe.metal,Xf);st([0,3.55,0],.09,pe.copper,Xf);cr([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,pe.dark);for(let n=0;n<8;n++){let e=n/8;const t=kt(new Ms(.13,.3,3),Qe(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const ml=dt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Ve([0,0,0],[.55,.09,.025],pe.rust,ml);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}st([0,0,.05],.08,pe.copper,ml);const sn=dt([7.25,-.03,1.5]);Ve([0,-.12,0],[2.25,.3,2.5],pe.metal,sn);for(let n=0;n<10;n++)Ve([-.99+n*.22,.08,0],[.2,.08,2.6],pe.rust,sn);Ve([-.95,.2,-.95],[.35,.15,.35],pe.dark,sn);_t([.87,.34,.75],.075,.5,pe.copper,sn);_t([.87,.59,.75],.13,.05,pe.cream,sn);mt([.87,.1,-.7],[.87,2.3,-.7],.035,pe.copper,sn);cr([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,pe.copper,sn);Ve([.17,2.09,-.7],[.25,.4,.25],Qe("#ffd591"),sn);Ve([.17,2.32,-.7],[.34,.08,.34],pe.dark,sn);for(let n=0;n<4;n++)Et([.87,.15,.75],.24-n*.025,.024,Qe("#b8ad86"),sn);Ve([6.7,.07,1.5],[1.4,.13,.8],pe.rust);Ot("НИКУДА",[.05,.28,1.36],1.3,.29,sn,{bg:"#c2c7a3",fg:"#445e45",size:45});const Au=[];function gl(n,e,t=1){const i=dt(e,n),s=new Qr;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),kt(new or(s,{depth:.19,bevelEnabled:!1}),Qe("#dfc99a"),[0,.15,-.1],null,i);const r=kt(new Ms(.23,.36,3),pe.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=gl(gt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);Au.push(e)}const Qn=h1({THREE:Qt,root:gt,dock:sn,state:Ee,M:pe,mat:Qe,group:dt,mesh:kt,box:Ve,sphere:st,cyl:_t,torus:Et,rod:mt,sign:Ot,paperBoat:gl,batchStatic:At,persist:Ic,say:Pn,refresh:Ft,chime:ti,reduced:Bf}),Ke=dt([-.15,1.9,.85]);Ke.scale.setScalar(1.18);const Cu=Qe("#233a39",{metalness:.42,roughness:.32});st([0,.1,0],[.62,.8,.55],Cu,Ke);st([0,-.36,.1],[.44,.43,.43],Cu,Ke);st([-.61,.03,.03],[.1,.2,.12],pe.copper,Ke);st([.61,.03,.03],[.1,.2,.12],pe.copper,Ke);for(const n of[-.23,.23]){st([n,.2,.485],[.17,.13,.057],pe.black,Ke),Et([n,.2,.541],.078,.02,pe.copper,Ke,[0,0,0]),st([n,.2,.56],.041,pe.light,Ke);const e=Ve([n,.38,.48],[.24,.045,.06],pe.cream,Ke);e.rotation.z=n>0?-.13:.13}st([0,.04,.51],[.09,.17,.11],Cu,Ke);st([0,-.2,.44],[.31,.16,.11],pe.black,Ke);for(let n=0;n<7;n++){const e=(n-3)*.073,t=to([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],pe.cream,Ke,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=st([t,i,-.04],[.18,.18,.48],pe.cream,Ke);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;cr([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,Qe("#f2edda"),Ke)}for(let n=0;n<3;n++)st([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],pe.cream,Ke);const Ru=Et([0,1.05,0],.77,.019,pe.copper,Ke);Ru.rotation.z=.14;const J1=new ul("#ffbb62",.9,3);J1.position.set(0,.2,.9);const qo=Et([-.15,.26,.85],.7,.018,pe.copper),Yr=kt(new il(.64,32),new Zr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Yr.rotation.x=-Math.PI/2;Yr.castShadow=!1;const bi=new z(-.15,1.9,.85),zn=dt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Ve([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?pe.cream:pe.concrete,zn);t.rotation.x=Math.PI/2-e,n%3===0&&mt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,pe.copper,zn)}for(const n of[-.45,.45])Et([n,0,0],2.07,.025,pe.copper,zn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Et([n,0,0],1.7,.075,pe.concrete,zn,[0,Math.PI/2,0]);mt([0,-2.15,-1.2],[0,-1.58,-.8],.07,pe.metal,zn);mt([0,-2.15,1.2],[0,-1.58,.8],.07,pe.metal,zn);Ot("ОБРАТНО",[.49,-.55,.2],1.15,.3,zn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Tt()*20,t=-8+Tt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||kt(lr.ico,Qe("#47675f"),[e,-1.3-Tt()*2,t],[.22+Tt()*.55,.19+Tt()*.4,.27+Tt()*.4])}const qf=new Vt,Yf=[];for(let n=0;n<75;n++)Yf.push((Tt()-.5)*25,Tt()*9-2,(Tt()-.5)*22);qf.setAttribute("position",new yt(Yf,3));const $f=new af(qf,new iu({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));rn.add($f);function At(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new xt().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=u1(o,!1);a&&kt(a,r,null,null,n),o.forEach(c=>c.dispose())}}At(gt,[Ke,un,Yt,Mn,Kn,sn,Dt,zn,ml,...Au,...pl,...Eu,qo,Yr,Qn.travel]);At(Dt,[pn]);At(pn,[]);At(zn,[]);At(Ke,[Ru]);Ke.traverse(n=>{n.isMesh&&(n.castShadow=!1)});At(Mn,[...pl]);At(Kn,[]);At(sn,[Qn.gallery,Qn.beacon]);At(Yt,[...no.map(n=>n.group),fl,wu,Vf]);no.forEach(n=>At(n.group,[]));const $r=dt([0,.33,0],un);Nc.forEach(n=>{$r.add(n),n.position.y-=.33});At($r,[]);At(un,[$r]);const Sn=v1({THREE:Qt,root:gt,scene:rn,head:Ke,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,paperBoat:gl,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},chime:ti}),Ti=H1({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,mesh:kt,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Yi=Up({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ai=Dp({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Ci=bp({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},localPlay:()=>at.localPlay()}),Ri=Ap({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},localPlay:()=>at.localPlay()}),fi=Rp({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),Pi=Lp({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),pi=Ip({THREE:Qt,root:gt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,rod:mt,torus:Et,sign:Ot,batchStatic:At,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),$i=Np({THREE:Qt,workshop:Dt,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,changed:()=>{Ft(),ot.shadowMap.needsUpdate=!0},watching:()=>at==null?void 0:at.watching(),localPlay:()=>at.localPlay()}),_l=x1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,mesh:kt,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,chime:ti}),so=G1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,mesh:kt,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,paperBoat:gl,batchStatic:At,chime:ti}),Dn=B1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,mesh:kt,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,chime:ti,changed:()=>{Es(),ot.shadowMap.needsUpdate=!0}}),Jf=y1({head:Ke,group:dt,sphere:st,box:Ve,torus:Et,M:pe,mat:Qe}),ui=U1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,mesh:kt,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,chime:ti,changed:()=>{Es(),ot.shadowMap.needsUpdate=!0}}),$n=E1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,chime:ti,changed:()=>{Es(),ot.shadowMap.needsUpdate=!0}}),Ji=A1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,sign:Ot,batchStatic:At,chime:ti,changed:()=>{Es(),ot.shadowMap.needsUpdate=!0}}),hi=L1({THREE:Qt,scene:rn,root:gt,head:Ke,M:pe,mat:Qe,group:dt,box:Ve,sphere:st,cyl:_t,rod:mt,torus:Et,sign:Ot,batchStatic:At,chime:ti,changed:()=>{Es(),ot.shadowMap.needsUpdate=!0}});let tn=null,tt=1;const Bn={still:{n:"18",label:"облачная перегонная",title:"16 часов на облако",description:"Четыре карты переливают одно облако.",action:"перелить облако",point:new z(28.4,.7,-19.8),position:new z(24,.5,-24),run:()=>Ci.run()},fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new z(-26.4,.7,-34.3),position:new z(-23,.1,-32),run:()=>Ri.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new z(-32,.6,-20.6),position:new z(-24,.6,-24),run:()=>fi.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new z(24,.9,29.7),position:new z(24,.6,24),run:()=>Pi.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new z(-6.9,1.9,-20.1),position:new z(0,.6,-24),run:()=>pi.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new z(-17.5,1.3,3.4),position:new z(-24,.6,0),run:()=>Ai.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new z(-1.4,1.5,-1.1),position:new z(-3.2,1.25,-2.2),run:()=>$i.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new z(4.7,.8,25.8),position:new z(0,.4,24),run:()=>Yi.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new z(28.4,2.2,2.5),position:new z(24,.4,0),run:()=>Ti.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new z(-.1,2.15,4.3),position:new z(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new z(-6,4.55,-3.25),position:new z(-6,2.2,-3.25),run:()=>{Ee.loop>0||(Ee.loop=12,Kf.copy(Ke.position),Pn("ноги не понадобились"),Ft())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new z(-3.2,3.15,-2.5),position:new z(-3.2,1.1,-2.5),run:()=>{Ee.roof=sr()?0:1,Pn(sr()?"заходи":"прикрыл"),Ft()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Ke.position),n.y+=1.35},position:new z(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Pn(n[Z1++%n.length]),bi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new z(3.7,3.85,-2.6),position:new z(3.7,1,-2.6),run:()=>{Ee.running=!Ee.running,Ic(),Pn(Ee.running?"ну пошло":"можно и полежать"),Ft()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new z(-3.7,1.65,.35),position:new z(-3.8,1,.35),run:()=>{Ee.brew>0||(Ee.brew=8,Ee.teaCount++,bi.set(-2.65,1.7,.65),Pn("щас, чайник поставлю"),Ft())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new z(-3.4,1,3.8),position:new z(-3.6,1,3.55),run:()=>{Ee.harvest++,Js=.15,Ic(),bi.set(-1.6,1.6,2.3),Pn(Ee.harvest===1?"о, урожай":"кабачки опять победили"),Ft()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new z(-5.65,1.75,1.1),position:new z(-5.65,1,1.1),run:()=>{Ee.radio=(Ee.radio+1)%3,Pu(),Pn(["тишина. нормально.","дождь поймал","провода поют"][Ee.radio]),Ft()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new z(7.4,2.75,1.1),position:new z(7.25,.9,1.5),run:()=>{Qn.launchOrCollect(),Ee.dockPending===!1&&Ee.boat===0&&bi.set(5.85,1.7,1.05)}}};let Z1=0,Js=1,Zf=0,_s=0;const Kf=new z;let Qf=()=>{es("engine"),Bn.engine.run()};const vl={};for(const[n,e]of Object.entries(Bn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>es(n),Te("#hotspots").append(t),vl[n]=t}const jf=Te("#hotspots"),rc=Te("#speech"),fs={width:innerWidth,height:innerHeight},K1=W1({entries:Bn,elements:vl,layer:jf,camera:Oe});let oc=!1,ud=NaN,hd=NaN;const Mr=new z;function es(n){Ee.selected=n,Te("#inspector").classList.remove("collapsed");const e=Bn[n];Te("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Te("#object-title").textContent=e.title,Te("#object-description").textContent=e.description,Qf=e.run,Te("#focus-object").hidden=!1,Te("#focus-object").textContent=Xt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ft();for(const[t,i]of Object.entries(vl))i.classList.toggle("selected",t===n)}function Ft(){const n=Ee.selected,e=Bn[n];if(Te("#status").textContent=Ee.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=Ee.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=sr()?"закрыть крышу":e.action),n==="engine"&&(t=Ee.running?"остановить и отдохнуть":"запустить маятники",i=Ee.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=Ee.brew>0,t=s?"чай заваривается…":e.action,i=Ee.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&Ee.harvest&&(i=`Уже собрано: ${Ee.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Ee.radio]}. ${Ee.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Qn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Ti.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Yi.card();t=r.action,i=r.description}if(n==="bench"){const r=$i.card();t=r.action,i=r.description}if(n==="drydock"){const r=Ai.card();t=r.action,i=r.description}if(n==="dash"){const r=pi.card();t=r.action,i=r.description}if(n==="quotes"){const r=Pi.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=fi.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Ri.card();t=r.action,i=r.description,s=r.disabled}if(n==="still"){const r=Ci.card();t=r.action,i=r.description,s=r.disabled}Ci.controls.hidden=n!=="still",Ri.controls.hidden=n!=="fork",fi.controls.hidden=n!=="garage",Pi.controls.hidden=n!=="quotes",pi.controls.hidden=n!=="dash",Ai.controls.hidden=n!=="drydock",$i.controls.hidden=n!=="bench",Yi.controls.hidden=n!=="amnesty",Ti.controls.hidden=n!=="cellar",Te("#enter-bench")&&(Te("#enter-bench").hidden=n!=="workshop"),Te("#enter-dream08").hidden=n!=="radio",Te("#enter-dream07").hidden=n!=="garage",Te("#enter-dream06").hidden=n!=="radio",Te("#enter-dream05").hidden=n!=="stair",Te("#enter-dream03").hidden=n!=="dock",Te("#enter-dream04").hidden=n!=="workshop",Te("#greenhouse-controls").hidden=n!=="greenhouse",Te("#thermal-moves").hidden=Sn.inspect().mode!=="playing",Te("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,Te("#object-description").textContent=i,Te("#object-action").innerHTML=t+" <span>↗</span>",Te("#object-action").disabled=s}Te("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(Ee.selected)&&at.watching()){at.localPlay();return}at.localPlay(),Qf(),_s=performance.now()+2200};Te("#close-card").onclick=()=>Te("#inspector").classList.add("collapsed");function Pn(n){Te("#speech").textContent=n,Zf=performance.now()+4e3,Te("#speech").classList.add("visible")}Te("#markers").onclick=()=>{Ee.markers=!Ee.markers,Te("#markers").setAttribute("aria-pressed",Ee.markers),jf.hidden=!Ee.markers||!!tn||Oe.zoom<.4};let Xt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function ep(){fs.width=innerWidth,fs.height=innerHeight;const n=innerWidth/innerHeight,e=jt()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(jt()?2.8:0),Oe.bottom=-e-(jt()?2.8:0),Oe.updateProjectionMatrix(),ot.setSize(innerWidth,innerHeight,!1),ot.setPixelRatio(Math.min(devicePixelRatio,jt()?1.5:2))}function ur(){if(at==null||at.unfollow(),tn){xl();return}Xt=null,document.body.classList.remove("close-look"),Te("#focus-object").textContent="осмотреть ближе ⊕",Ze.enableDamping=!1,Ze.update(),Ze.enableDamping=!0,Ze.maxZoom=2.5,Oe.zoom=1,Ze.target.copy(yu),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Te("#focus-object").onclick=()=>{if(Ee.selected){if(Xt===Ee.selected){ur();return}Xt=Ee.selected,document.body.classList.add("close-look"),Te("#focus-object").textContent="весь двор ⌂",Ze.enableDamping=!1,Ze.update(),Ze.enableDamping=!0,Ze.target.copy(Bn[Ee.selected].position),jt()&&(Ze.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork","still"].includes(Xt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork","still"].includes(Xt)?jt()?1.8:1.6:jt()?2.5:2.1,Xt==="bench"?(Ze.maxZoom=4.5,Oe.zoom=jt()?3.8:3.4,Ze.target.y+=jt()?-.15:0,Ze.target.x+=.3,Ze.target.z-=.2):Ze.maxZoom=2.5,Oe.updateProjectionMatrix()}};Te("#home").onclick=ur;Te("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Ze.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Te("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Ze.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Te("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",ep);ep();function tp(n,e,t=!1){tn&&xl(),ur(),Ze.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Te("#inspector").classList.add("collapsed")}function Q1(){tp(0,0);const n=innerWidth/innerHeight,e=jt()?19.6:9.6;Oe.zoom=Math.min(e*n/(Zs.half*1.57),e/(Zs.half*1.3)),Oe.updateProjectionMatrix()}const Zs=_1({root:gt,camera:Oe,controls:Ze,mobile:jt,go:tp,overview:Q1,home:ur,locationTarget:()=>["dash","quotes","garage","fork","still"].includes(Xt)&&Ee.selected===Xt?Bn[Xt].position:null}),Zi=document.createElement("select");Zi.id="world-places";Zi.setAttribute("aria-label","Открыть место");Zi.append(new Option("места",""));for(const[n,e]of Object.entries(Bn))Zi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Zi,document.querySelector("#territory-location"));Zi.onchange=()=>{const n=Zi.value;Bn[n]&&(ur(),Ze.target.copy(Bn[n].position),es(n),Zi.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const dd=new wf,fd=new we;let us=null;ot.domElement.addEventListener("pointerdown",n=>{us={x:n.clientX,y:n.clientY,time:performance.now()}});ot.domElement.addEventListener("pointerup",n=>{if(!us||Math.hypot(n.clientX-us.x,n.clientY-us.y)>7||performance.now()-us.time>550){us=null;return}if(us=null,fd.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),dd.setFromCamera(fd,Oe),tn)return;const e=dd.intersectObjects([Ci.house,Ri.house,fi.house,Pi.house,pi.house,Ai.house,$i.house,Yi.house,Ti.house,Sn.house,Ke,Yt,un,Mn,Kn,sn,Dt,zn,Qn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Ci.house,Ri.house,fi.house,Pi.house,pi.house,Ai.house,$i.house,Yi.house,Ti.house,Sn.house,Ke,Yt,un,Mn,Kn,sn,Dt,zn,Qn.travel].includes(t);)t=t.parent;const i=new Map([[Ci.house,"still"],[Ri.house,"fork"],[fi.house,"garage"],[Pi.house,"quotes"],[pi.house,"dash"],[Ai.house,"drydock"],[$i.house,"bench"],[Yi.house,"amnesty"],[Ti.house,"cellar"],[Sn.house,"greenhouse"],[Ke,"head"],[Yt,"engine"],[un,"garden"],[Mn,"tea"],[Kn,"radio"],[sn,"dock"],[Dt,"workshop"],[zn,"stair"],[Qn.travel,"dock"]]).get(t);i&&es(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Bn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&es(t)}});let Tn=null;function j1(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Pu(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][Ee.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][Ee.radio],n,.4)}Te("#sound").onclick=async()=>{try{Tn||(Tn=j1()),await Tn.ctx.resume(),Ee.sound=!Ee.sound,Tn.gain.gain.setTargetAtTime(Ee.sound?.08:0,Tn.ctx.currentTime,.3),Te("#sound").textContent=Ee.sound?"звук включён":"звук выключен",Te("#sound").setAttribute("aria-pressed",Ee.sound),Pu(),Ft()}catch{Pn("со звуком не сложилось")}};function ti(n=330){if(!Tn||!Ee.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}Te("#about").onclick=()=>Te("#about-dialog").showModal();Te("#close-about").onclick=Te("#back-to-yard").onclick=()=>Te("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&tn){xl();return}n.key==="Escape"&&Te("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Te("#zoom-in").click(),n.key==="-"&&Te("#zoom-out").click(),n.key.toLowerCase()==="r"&&Te("#rotate").click(),n.key.toLowerCase()==="h"&&ur()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{at.localPlay(),Sn.step(n.dataset.thermal),_s=performance.now()+2200};const ey={8:{title:"десять факелов на диске",lines:[],verb:"настроить"},7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Lu(){return tt===1?Sn:tt===2?_l:tt===3?so:tt===4?Dn:tt===5?ui:tt===6?hi:tt===7?Ji:$n}function Es(){const n=tt===1?Sn.inspect().dreamStep:Lu().inspect().step,e=ey[tt];if(Te("#dream-torches").hidden=tt!==8,Te("#dream-cloud").hidden=tt!==6,Te("#dream-force").hidden=tt!==3,Te("#dream-roofs").hidden=tt!==4,Te("#dream-meter").hidden=tt!==5,Te("#dream-panel .object-kicker").textContent=`СОН 0${tt} / БЕЗНОГИМ`,Te("#dream-panel h2").textContent=e.title,Te("#dream-text").textContent=tt===8?$n.text():tt===7?Ji.text():tt===6?hi.text():tt===5?ui.text():tt===4?Dn.text():e.lines[n],Te("#dream-breathe").textContent=tt===8?$n.button():tt===7?Ji.button():tt===6?hi.button():tt===5?ui.button():tt===4?Dn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Te("#dream-breathe").disabled=tt===8&&($n.busy()||!$n.canRelease())||tt===7&&Ji.busy()||tt===6&&["heating","raining"].includes(hi.inspect().phase)||tt===4&&Dn.inspect().phase==="flying"||tt===5&&["measuring","unfolding","climbing"].includes(ui.inspect().phase),tt===8){const t=$n.inspect();for(const i of document.querySelectorAll("[data-torch-turn]")){const s=Number(i.dataset.torchTurn);i.textContent=["птица","вода","ветер"][s]+" · "+t.turns[s]+" ↻",i.setAttribute("aria-pressed",t.aligned[s]),i.disabled=t.phase!=="tuning"}}if(tt===6){const t=hi.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(tt===5){const t=ui.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(tt===4){const t=Dn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Dn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function Ui(n=1){tn||(tt=n,tn={target:Ze.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:Xt,returnId:n===8?"radio":n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},Lu().enter(),Ze.enableDamping=!1,Ze.update(),Ze.enableDamping=!0,Ze.target.set(0,jt()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?jt()?1.65:1.75:jt()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7||n===8),Ba="",Te("#dream-panel").hidden=!1,Es(),ot.shadowMap.needsUpdate=!0)}function xl(){if(!tn)return;const n=tn;tn=null,Lu().exit(),Ze.enableDamping=!1,Ze.update(),Ze.enableDamping=!0,Ze.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,Xt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Ba="",Te("#dream-panel").hidden=!0,ot.shadowMap.needsUpdate=!0,es(n.returnId)}Te("#enter-dream").onclick=()=>Ui(1);Te("#exit-dream").onclick=xl;Te("#dream-breathe").onclick=()=>{tt===1?Sn.breathe():tt===2?_l.pour():tt===3?so.toss():tt===4?Dn.send():tt===5?ui.act():tt===6?hi.act():tt===7?Ji.act():$n.act(),_s=performance.now()+2200,Es(),ot.shadowMap.needsUpdate=!0};const ro=document.createElement("button");ro.id="enter-bench";ro.hidden=!0;ro.textContent="собрать механический монитор ↗";ro.onclick=()=>{es("bench"),Te("#focus-object").click()};Te("#focus-object").before(ro);const yl=document.createElement("button");yl.id="enter-dream02";yl.textContent="сон 02 / вода спит ↗";yl.onclick=()=>Ui(2);Ti.controls.append(yl);Te("#enter-dream03").onclick=()=>Ui(3);Te("#enter-dream04").onclick=()=>Ui(4);Te("#enter-dream08").onclick=()=>Ui(8);for(const n of document.querySelectorAll("[data-torch-turn]"))n.onclick=()=>$n.turn(Number(n.dataset.torchTurn));Te("#enter-dream07").onclick=()=>Ui(7);Te("#enter-dream06").onclick=()=>Ui(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>hi.choose(n.dataset.cloudTarget);Te("#enter-dream05").onclick=()=>Ui(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>ui.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Dn.turn(Number(n.dataset.roofTurn)),_s=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{so.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Te("#dream-archive").onclick=()=>Te("#dream-archive-dialog").showModal();Te("#close-dream-archive").onclick=()=>Te("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Te("#dream-archive-dialog").close(),Ui(Number(n.dataset.dreamId))};const at=f1({head:Ke,headDestination:bi,state:Ee,controls:Ze,camera:Oe,refresh:Ft,setAudioTone:Pu,say:Pn,onHarvest:()=>{Js=.15}});let ac="";const np=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])np.push(new z(n,e,t));const Iu=[];for(const n of[19.3,28.7])for(const e of[-1.65,3.1])for(const t of[-27.2,-19.5])Iu.push(new z(n,e,t));const ip=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])ip.push(new z(n,e,t));const sp=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])sp.push(new z(n,e,t));const rp=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])rp.push(new z(n,e,t));const op=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])op.push(new z(n,e,t));function ty(){var T,v;const n=Xt==="still"&&Ee.selected==="still",e=Xt==="fork"&&Ee.selected==="fork",t=Xt==="garage"&&Ee.selected==="garage",i=Xt==="quotes"&&Ee.selected==="quotes",s=Xt==="dash"&&Ee.selected==="dash",r=Xt==="drydock"&&Ee.selected==="drydock"||s||i||t||e||n,o=(Xt==="bench"&&Ee.selected==="bench"||r)&&!Te("#inspector").classList.contains("collapsed")&&!tn;if(document.body.classList.toggle("still-look",o&&n),document.body.classList.toggle("fork-look",o&&e),document.body.classList.toggle("garage-look",o&&t),document.body.classList.toggle("quotes-look",o&&i),document.body.classList.toggle("dash-look",o&&(s||i||t||e||n)),document.body.classList.toggle("bench-look",o&&!r),document.body.classList.toggle("drydock-look",o&&r),!o){ac="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const a=Te("#inspector").getBoundingClientRect(),c=Te(".territory-nav").getBoundingClientRect(),l=Te(".toolbar").getBoundingClientRect(),u=innerWidth<=900&&innerHeight>innerWidth,d=u?{left:14,right:l.left-10,top:c.bottom+(n?6:14),bottom:a.top-(n?6:14)}:{left:Math.max(a.right+18,c.right+18),right:l.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!u&&(d.left=c.right+12,d.right=innerWidth-16,d.top=l.bottom+10,d.bottom=a.top-10),(s||i||t||e||n)&&innerWidth<=900&&!u&&(d.left=12,d.right=a.left-12,d.top=c.bottom+10,d.bottom=Te("footer").getBoundingClientRect().top-12);const h=Te(".resident-history");r&&innerWidth>900&&h&&!h.hidden&&(d.right=Math.min(d.right,h.getBoundingClientRect().left-18));const f=t?fi.inspect():null,m=[];if(f){const C=Math.max(f.gap,f.range,((T=f.flight)==null?void 0:T.range)||0),w=Math.max(f.apex,((v=f.flight)==null?void 0:v.apex)||0);for(const U of[-34,-32+.7*C+1.6])for(const q of[-1.3,Math.max(1.5,.8+.5*w)])for(const B of[-26,-19.8])m.push(new z(U,q,B))}const _=[(f==null?void 0:f.gap)||0,(f==null?void 0:f.range)||0,(f==null?void 0:f.apex)||0,n?18:e?17:t?16:i?15:s?14:r?13:12,innerWidth,innerHeight,d.left,d.right,d.top,d.bottom,mn.targetAngle].map(C=>Math.round(C*10)/10).join(":");if(_===ac||d.bottom-d.top<35||d.right-d.left<50)return;ac=_;const g=()=>{Oe.updateMatrixWorld();const C=(n?Iu:e?ip:t?m:i?sp:s?rp:r?op:np).map(w=>Nt(w.clone()));return{l:Math.min(...C.map(w=>w.x)),r:Math.max(...C.map(w=>w.x)),t:Math.min(...C.map(w=>w.y)),b:Math.max(...C.map(w=>w.y))}};let p=g();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((d.right-d.left)/(p.r-p.l),(d.bottom-d.top)/(p.b-p.t))),Oe.updateProjectionMatrix(),p=g();const y=(d.left+d.right-p.l-p.r)/2,A=(d.top+d.bottom-p.t-p.b)/2,x=new z().setFromMatrixColumn(Oe.matrixWorld,0),S=new z().setFromMatrixColumn(Oe.matrixWorld,1),b=x.multiplyScalar(-y*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(S.multiplyScalar(A*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Ze.target.add(b),Oe.position.add(b),Oe.lookAt(Ze.target),Oe.updateMatrixWorld()}let Ba="";const ap=[];for(const n of[-3.6,3.6])for(const e of[-.65,4.8])for(const t of[-3.6,3.6])ap.push(new z(n,e,t));const lp=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])lp.push(new z(n,e,t));const cp=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])cp.push(new z(n,e,t));const up=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])up.push(new z(n,e,t));function ny(){if(!tn||![4,5,6,7,8].includes(tt))return;const n=Te("#dream-panel").getBoundingClientRect(),e=Te("footer").getBoundingClientRect(),t=Te(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===Ba||r.right-r.left<60||r.bottom-r.top<80)return;Ba=o;const a=()=>{Oe.updateMatrixWorld();const m=(tt===8?ap:tt===7?lp:tt===5?cp:up).map(_=>Nt(_.clone()));return{l:Math.min(...m.map(_=>_.x)),r:Math.max(...m.map(_=>_.x)),t:Math.min(...m.map(_=>_.y)),b:Math.max(...m.map(_=>_.y))}};let c=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Oe.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,u=(r.top+r.bottom-c.t-c.b)/2,d=new z().setFromMatrixColumn(Oe.matrixWorld,0),h=new z().setFromMatrixColumn(Oe.matrixWorld,1),f=d.multiplyScalar(-l*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Ze.target.add(f),Oe.position.add(f),Oe.lookAt(Ze.target),Oe.updateMatrixWorld()}let pd=performance.now(),zo=0,md=0;function Nt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function iy(){at.sync();const n=performance.now(),e=(n-pd)/1e3;pd=n,zo+=e,Ee.energy=xn.damp(Ee.energy,Ee.running?1:0,1.6,e);const t=Bf?zo*.2:zo;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(Ze.target.x+Math.sin(mn.angle)*i,Ze.target.y+i*Math.SQRT1_2,Ze.target.z+Math.cos(mn.angle)*i),Oe.lookAt(Ze.target),Ze.update(),tn||(Ze.target.x=xn.clamp(Ze.target.x,-62,Zs.half+2),Ze.target.z=xn.clamp(Ze.target.z,-62,Zs.half+2)),Zs.update(),ty(),ny();for(const s of no)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*Ee.energy*.45;if(pn.position.z=xn.damp(pn.position.z,sr()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,sr()?.4:0,2,e),fl.rotation.z=t*Ee.energy*.28,wu.rotation.z=-.7+Ee.energy*1.35+Math.sin(t*4)*Ee.energy*.08,Vf.material.emissiveIntensity=.45+Ee.energy*1.5,Dc.uniforms.uTime.value=t,Dc.uniforms.uEnergy.value=Ee.energy,ml.rotation.z=t*(.09+Ee.energy*.23),Hf.forEach(s=>s.intensity=.65+Ee.energy*1.5),bu.intensity=2+Ee.energy*4,Ke.position.x=xn.damp(Ke.position.x,bi.x,1.6,e),Ke.position.z=xn.damp(Ke.position.z,bi.z,1.6,e),Ke.position.y=xn.damp(Ke.position.y,bi.y+Math.sin(t*1.4)*.1,2,e),Ee.loop>0){Ee.loop=Math.max(0,Ee.loop-e);const s=12-Ee.loop;if(s<2){const r=xn.smoothstep(s,0,2);Ke.position.lerpVectors(Kf,new z(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Ke.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Ke.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Ke.position.lerpVectors(new z(-6,.65,-3.25),bi,r),Ke.rotation.x=(1-r)*Math.PI*2}Ee.loop||(Ke.rotation.x=0,Pn("ну вот и дома"),Ft())}if(at.place(),Ke.rotation.y=Math.sin(t*.3)*.12,Ru.rotation.y=t*.13,qo.position.x=Ke.position.x,qo.position.z=Ke.position.z,qo.rotation.z=.04*Math.sin(t),Yr.position.x=Ke.position.x,Yr.position.z=Ke.position.z,Js=xn.damp(Js,1,.85,e),$r.scale.y=Js,$r.rotation.z=Math.sin(t*.9)*.009,Ee.brew>0&&(Ee.brew=Math.max(0,Ee.brew-e),Ee.brew===0&&(Pn("чай готов. живём."),Ft(),ti(440))),pl.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=Ee.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),Au.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),Jf.update(at.watching()),_l.update(e,t),so.update(e,t),Dn.update(e,t),ui.update(e,t),hi.update(e,t),Ji.update(e,t),$n.update(e,t),Ci.update(e,t),Ri.update(e),fi.update(e),Pi.update(e),pi.update(e),Ai.update(e),$i.update(e),pn.visible=!(Xt==="bench"&&Ee.selected==="bench"&&!Te("#inspector").classList.contains("collapsed")&&!tn),Yi.update(e),Ti.update(zo),Sn.update(e,t),Qn.update(e,t),oc!==Ee.dockPending&&(oc=Ee.dockPending,vl.dock.classList.toggle("waiting",oc)),Eu.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+Ee.energy*.23}),$f.rotation.y=t*.003,Ee.running&&t-md>3.5&&(md=t,ti([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),K1.update(!tn&&Oe.zoom>=.4&&Ee.markers,fs.width,fs.height),tn||n>Zf)rc.classList.contains("visible")&&rc.classList.remove("visible");else{Mr.copy(Ke.position),Mr.y+=1.52,Mr.project(Oe);const s=Math.round(Math.max(85,Math.min(fs.width-85,(Mr.x+1)*fs.width*.5))*10)/10,r=Math.round((1-Mr.y)*fs.height*.5*10)/10;(s!==ud||r!==hd)&&(ud=s,hd=r,rc.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}_s&&performance.now()>_s&&(ot.shadowMap.needsUpdate=!0,_s=0),ot.render(rn,Oe)}Ee.running&&(Te("#object-action").innerHTML="остановить двор <span>↗</span>");Ft();ot.setAnimationLoop(iy);requestAnimationFrame(()=>Te("#loading").classList.add("done"));window.__yard={state:Ee,select:es,inspect:()=>({resident:at.inspect(),territory:Zs.inspect(),sleepBody:Jf.inspect(),sleepDream:_l.inspect(),quietDream:so.inspect(),torchDream:$n.inspect(),torchDreamScreen:$n.inspect().landmarks.map(n=>Nt(new z(...n))),pocketDream:Ji.inspect(),pocketDreamScreen:Ji.inspect().landmarks.map(n=>Nt(new z(...n))),cloudDream:hi.inspect(),cloudDreamScreen:hi.inspect().landmarks.map(n=>Nt(new z(...n))),meterDream:ui.inspect(),meterDreamScreen:ui.inspect().landmarks.map(n=>Nt(new z(...n))),roofDream:Dn.inspect(),roofDreamGoalScreen:Dn.inspect().goals.map(n=>Nt(new z(...n))),roofDreamLetterScreen:Nt(new z(...Dn.inspect().letter)),dreamId:tn?tt:null,still:Ci.inspect(),stillBounds:Iu.map(n=>Nt(n.clone())),stillScreen:Nt(new z(24,.3,-24)),stillScreens:Ci.inspect().landmarks.map(n=>Nt(new z(...n))),fork:Ri.inspect(),forkScreen:Nt(new z(-23,.1,-32)),forkScreens:Ri.inspect().landmarks.map(n=>Nt(new z(...n))),garage:fi.inspect(),garageScreen:Nt(new z(...fi.inspect().garage).add(new z(-24,-.7,-24))),garageCarScreen:Nt(new z(-32,-.7,-24)),quotes:Pi.inspect(),quoteScreens:Pi.inspect().quotePositions.map(n=>Nt(new z(...n).add(new z(24,-1.05,24)))),dash:pi.inspect(),dashSnailScreen:Nt(new z(...pi.inspect().snail).add(new z(0,-1,-24))),dashBeamScreen:Nt(new z(...pi.inspect().beam).add(new z(0,-1.5,-24))),drydock:Ai.inspect(),drydockShipScreen:Nt(new z(...Ai.inspect().ship).add(new z(-24,-.5,0))),bench:$i.inspect(),benchScreen:Nt(new z(-2.65,1.58,-3.18)),benchBucketScreen:Nt(new z(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:Yi.inspect(),amnestyScreen:Nt(new z(0,-.3,24)),cellar:Ti.inspect(),cellarScreen:Nt(new z(24,-.3,.25)),objects:Object.keys(Bn),greenhouse:Sn.inspect(),dock:Qn.inspect(),boatScreen:Nt(new z(...Qn.inspect().boat).add(new z(0,.2,0))),drawCalls:ot.info.render.calls,triangles:ot.info.render.triangles,gpuGeometries:ot.info.memory.geometries,zoom:Oe.zoom,target:Ze.target.toArray(),angle:mn.angle,head:Ke.position.toArray(),roof:pn.position.toArray(),roofOpen:sr(),roofMode:Ee.roof===null?"auto":"manual",pendulums:no.map(n=>n.group.rotation.x),growth:Js,meshes:(()=>{let n=0;return rn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[ot.domElement.width,ot.domElement.height]})};X1();
