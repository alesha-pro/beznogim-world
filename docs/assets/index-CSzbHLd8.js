(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Pp=[[1,1,3],[1,3,2],[0,2,1]],Qo=9;function _s(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.turns)&&e.turns.length===3&&e.turns.every(l=>Number.isInteger(l)&&l>=0&&l<4),s=i?e.turns.slice():Pp[t].slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(Qo,e.used)):0,o=s.every(l=>l===0),a=o&&e.tested===!0;return{round:t,turns:s,used:r,tested:a,phase:a?t===2?"complete":"won":o?"aligned":r===Qo?"spent":"ready",run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1}}function Td(n,e){if(!Number.isInteger(e)||e<0||e>2)return null;const t=n.slice();return t[e]=(t[e]+1)%4,t[(e+1)%3]=(t[(e+1)%3]+2)%4,t}function Lp(n,e,t){const i=_s(n);let s=!1;if(e==="reset"||e==="all")return{state:_s({round:e==="all"?0:i.round,run:i.run+(e==="all"?1:0)}),ok:!0};if(e==="next"&&i.phase==="won")return{state:_s({round:i.round+1,run:i.run}),ok:!0};if(e==="test"&&i.phase==="aligned"&&(i.tested=!0,s=!0),e==="turn"&&i.phase==="ready"){const r=Td(i.turns,t);r&&(i.turns=r,i.used++,s=!0)}return{state:_s(i),ok:s}}function Ip(n){const e=_s(n);if(e.phase!=="ready")return[];const t=[{v:e.turns,path:[]}],i=new Set([e.turns.join()]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(r.every(a=>a===0))return o;if(!(o.length>=Qo-e.used))for(let a=0;a<3;a++){const l=Td(r,a),c=l.join();i.has(c)||(i.add(c),t.push({v:l,path:[...o,a]}))}}return null}function Dp(n){return n=Math.max(0,Math.min(1,Number(n)||0)),Math.sin(n*Math.PI)**2}function Np({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,localPlay:m}){const d=s([-24,-1.1,-48],e);d.name="head-seams";const _=i("#405e62",{metalness:.55,roughness:.4}),g=i("#bd8757",{metalness:.6,roughness:.35}),f=i("#e9dfbb"),M=i("#233e40"),A=i("#93beb0"),x=i("#efa250",{emissive:"#c38535",emissiveIntensity:.3});r([0,-.25,.5],[7.8,.5,7.6],t.concrete,d),r([0,.04,0],[4.4,.18,3.7],M,d);const E=s([0,0,0],d),b=[],w=[],v=[];for(let y=0;y<3;y++){const F=2.95-y*.88,Q=s([0,F,0],E);if(b.push(Q),a([0,0,0],1.4,.8,[f,A,g][y],Q),c([0,.35,0],1.4,.045,M,Q),c([0,-.35,0],1.4,.045,M,Q),r([0,0,1.4],[.16,.66,.07],f,Q),y===0){for(let P of[-.5,.5])o([P,0,1.31],[.27,.23,.13],M,Q),o([P+.025,.02,1.43],.075,f,Q);o([0,.43,0],[1.15,.25,1.1],f,Q)}if(y===1){r([0,-.06,1.52],[.36,.5,.4],f,Q);for(let P of[-.5,.5])l([P-.2,-.23,1.35],[P+.2,-.23,1.35],.045,M,Q)}if(y===2){for(let P of[-1,1])l([0,.12,1.43],[P*.7,.22,1.3],.09,M,Q),l([P*.7,.22,1.3],[P*.9,.05,1.2],.06,M,Q);r([0,-.13,1.39],[.55,.07,.07],M,Q)}const Z=s([-2.6+y*2.6,.55,2.35],d);v.push(Z),a([0,-.15,0],.6,.18,_,Z);const C=c([0,.08,0],.38,.06,g,Z);C.rotation.x=Math.PI/2,l([0,-.3,0],[0,.4,0],.065,_,Z),o([0,.48,0],.14,x,Z),u(""+(y+1),[-2.6+y*2.6,.15,2.9],.55,.4,d,{size:80})}r([0,.2,1.95],[.13,.12,.7],x,d);const R=r([0,.2,1.7],[.38,.12,.38],x,d);R.rotation.y=Math.PI/4;const T=[];for(let y=0;y<3;y++){const F=s([-2.7+y*2.7,.3,3.55],d);a([0,-.1,0],.7,.15,_,F);const Q=s([0,.18,0],F);for(let Z of[-.32,.32])l([Z,0,0],[Z,.65,0],.075,g,Q);l([-.32,.65,0],[.32,.65,0],.075,g,Q),T.push(Q)}const D=[];for(let y of[1.61,2.49])for(let F of[-1,1]){const Q=s([F*.85,y,1.2],E);l([0,-.28,0],[0,.28,0],.05,g,Q),o([0,-.28,0],.085,_,Q),o([0,.28,0],.085,_,Q),D.push(Q)}const q=u("НЕ ОШИБАЙСЯ",[0,4.22,-.3],3.5,.65,d,{size:48}),H=o([2.5,2.3,-.5],.19,x,d);l([2.5,.15,-.5],[2.5,2.3,-.5],.045,_,d),u("ШОВНАЯ",[0,.28,-3],3,.45,d,{size:52});const z=s([0,0,0],e);for(let y=0;y<17;y++)r([-24+Math.sin(y*.4)*.25,-1.48,-35.3-y*.53],[.75,.12,.37],t.cream,z);p(z,[]),p(d,[E,q,H,...v,...T]);let L;try{L=_s(JSON.parse(localStorage.getItem("beznogim-seams-v1")||"null"))}catch{L=_s()}let O=1,B=null,K=null,X="";b.forEach((y,F)=>{y.rotation.y=L.turns[F]*Math.PI/2,w[F]=y.rotation.y});const $=document.createElement("div");$.id="seams-controls",$.hidden=!0,$.innerHTML='<output id="seams-readout"></output><div class="seams-row">'+[0,1,2].map(y=>`<button data-seam="${y}">${y+1} ↻</button>`).join("")+'</div><div class="seams-row"><button id="seams-hint">намёк</button><button id="seams-reset">повтор</button><button id="seams-all">новая серия</button></div><output id="seams-notice" aria-live="polite"></output><details id="seams-help"><summary>как держится голова</summary><small>Ручка поворачивает своё кольцо на 90°, следующее на 180°: 1→2, 2→3, 3→1. Выстрой лицо по передней светлой метке за 9 ходов, затем испытай инструкцией. Все три числа должны стать 0. Намёк показывает кратчайший путь; отказ бесплатный. Повтор сохраняет прежние скобы. Локальная игра посетителя, не здоровье жителя.</small></details>',document.querySelector("#focus-object").before($);const te=()=>{try{localStorage.setItem("beznogim-seams-v1",JSON.stringify(L))}catch{}},ee=()=>O<1;function ce(){const y=(B==null?void 0:B.kind)==="test"&&ee()?Dp(O):0;E.scale.set(1+y*.12,1+y*.08,1+y*.12),E.position.y=y*.08,(B==null?void 0:B.kind)==="turn"&&ee()?b.forEach((Q,Z)=>Q.rotation.y=B.before[Z]+(w[Z]-B.before[Z])*(O*O*(3-2*O))):b.forEach((Q,Z)=>Q.rotation.y=w[Z]),q.scale.setScalar((B==null?void 0:B.kind)==="test"&&ee()?1+y*.12:1),q.rotation.z=y*Math.sin(O*28)*.025;const F=L.tested||(B==null?void 0:B.kind)==="test";D.forEach(Q=>Q.visible=F),T.forEach((Q,Z)=>Q.visible=Z<L.round+(L.tested&&!ee()?1:0)),H.material=L.phase==="aligned"||L.tested?A:x}function le(){$.querySelector("#seams-readout").textContent=`сборка ${L.round+1}/3 · ${L.used}/${Qo} ходов
кольца: ${L.turns.join(" / ")} → 0 / 0 / 0`,$.querySelector("#seams-notice").textContent=ee()?B.kind==="test"?"инструкция давит. скобы держат…":"кольца сцеплены…":X,$.querySelectorAll("[data-seam]").forEach((y,F)=>{y.disabled=ee()||L.phase!=="ready",y.classList.toggle("hinted",K===F),y.setAttribute("aria-label",`ручка ${F+1}: своё кольцо +1, следующее +2`)}),$.querySelectorAll("#seams-hint,#seams-reset,#seams-all").forEach(y=>y.disabled=ee()),ce()}function fe(y,F){if(ee())return;m();const Q=w.slice(),Z=Lp(L,y,F);return Z.ok?(L=Z.state,K=null,B=null,y==="turn"?(w[F]+=Math.PI/2,w[(F+1)%3]+=Math.PI,B={kind:"turn",before:Q},O=0):y==="test"?(B={kind:"test"},O=0):(O=1,b.forEach((C,P)=>w[P]=L.turns[P]*Math.PI/2)),X=L.phase==="spent"?"Ходы кончились, швы ещё криво. Повтори сборку.":L.phase==="aligned"?"Лицо на месте. Теперь проверка инструкцией.":L.phase==="won"?"Выдержала. Скоба остаётся на полке.":L.phase==="complete"?"Три скобы. Голова пока цела.":"",te(),le(),h(),Z):(X="Сначала совмести лицо. Ход не потрачен.",le(),h(),Z)}$.querySelectorAll("[data-seam]").forEach((y,F)=>y.onclick=()=>fe("turn",F)),$.querySelector("#seams-reset").onclick=()=>fe("reset"),$.querySelector("#seams-all").onclick=()=>fe("all"),$.querySelector("#seams-hint").onclick=()=>{if(ee())return;const y=Ip(L);K=(y==null?void 0:y[0])??null,X=K!==null?`Ручка ${K+1}. До ровных швов ${y.length} ходов.`:L.phase==="ready"?"Оставшихся ходов не хватит. Повтори сборку.":L.phase==="aligned"?"Всё ровно. Испытай инструкцией.":"Сборка закончена.",le(),h()};function N(y){ee()&&(O=Math.min(1,O+Math.max(0,Math.min(.1,y))/(B.kind==="test"?2.6:.7)),ce(),O===1&&(le(),h()))}return le(),te(),{house:d,controls:$,update:N,run:()=>fe(L.phase==="aligned"?"test":L.phase==="won"?"next":L.phase==="complete"?"all":L.phase==="spent"?"reset":"test"),card:()=>({action:ee()?"стягивается…":L.phase==="aligned"?"испытать: «не ошибайся»":L.phase==="won"?"следующая сборка →":L.phase==="complete"?"новая серия ↺":L.phase==="spent"?"повторить сборку ↺":"сначала совмести кольца",disabled:ee()||L.phase==="ready",description:"Три ручки сцеплены. Собери лицо; инструкция проверит швы."}),inspect:()=>({...L,progress:O,motion:B,hint:K,notice:X,angles:b.map(y=>y.rotation.y),scale:E.scale.toArray(),clamps:D.map(y=>y.visible),staples:T.map(y=>y.visible),landmarks:[[-27.3,-.9,-44.1],[-20.7,-.9,-44.1],[-24,3.7,-48.3],[-24,-.5,-51]]})}}const ps=[3,5,7,9],Up=[3,5,7,1],jo=16,ea=[[2,1,4,9],[3,4,1,8],[3,1,5,7]],Op=["улитка","чайник","кит"],Ad=(n,e)=>n.every((t,i)=>t===e[i]);function vs(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.volumes)&&e.volumes.length===4&&e.volumes.every((a,l)=>Number.isInteger(a)&&a>=0&&a<=ps[l])&&e.volumes.reduce((a,l)=>a+l,0)===16,s=i?e.volumes.slice():Up.slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(jo,e.used)):0,o=Ad(s,ea[t])?t===2?"complete":"won":r>=jo?"spent":"ready";return{round:t,volumes:s,used:r,phase:o,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Cd(n,e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>3||t<0||t>3||e===t)return null;const i=Math.min(n[e],ps[t]-n[t]);if(i<=0)return null;const s=n.slice();return s[e]-=i,s[t]+=i,{volumes:s,amount:i}}function Fp(n,e,t,i){const s=vs(n);let r={ok:!1,reason:"locked"},o=null;if(e==="reset"||e==="all")return{state:vs({round:e==="all"?0:s.round,run:s.run+(e==="all"?1:0),seq:s.seq}),result:{ok:!0},pour:o};if(e==="next"&&s.phase==="won")return{state:vs({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:!0},pour:o};if(e==="pour"&&s.phase==="ready"){const a=Cd(s.volumes,t,i);if(!a)return{state:s,result:{ok:!1,reason:"empty"},pour:o};o={a:t,b:i,amount:a.amount,before:s.volumes.slice(),after:a.volumes.slice(),seq:s.seq+1},s.volumes=a.volumes,s.used++,s.seq++,r={ok:!0,amount:a.amount}}return{state:vs(s),result:r,pour:o}}function zp(n){const e=vs(n);if(e.phase!=="ready")return[];const t=[{v:e.volumes,path:[]}],i=new Set([e.volumes.join(",")]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(Ad(r,ea[e.round]))return o;if(!(o.length>=jo-e.used))for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=Cd(r,a,l);if(!c)continue;const u=c.volumes.join(",");i.has(u)||(i.add(u),t.push({v:c.volumes,path:[...o,{a,b:l}]}))}}return null}function kp(n,e,t){return t=Math.max(0,Math.min(1,Number(t)||0)),[-3+2*n+2*(e-n)*t,2.95+Math.sin(t*Math.PI)*1.15,0]}function Bp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,localPlay:m}){const d=s([24,-1.1,-24],e);d.name="cloud-still";const _=i("#45626b",{metalness:.55,roughness:.35}),g=i("#cf9671",{metalness:.6,roughness:.3}),f=i("#e6e5d2"),M=i("#8dd8d4",{emissive:"#8dd8d4",emissiveIntensity:.28}),A=i("#233f49");r([0,-.25,.6],[9.1,.5,7.4],t.concrete,d),r([0,.04,.1],[8.7,.12,3.3],A,d);function x(y,F,Q=.6,Z=.5){const C=u(y,F,Q,Z,d),P=C.material.map.image;P.width=P.height=128;const V=P.getContext("2d"),G=ne=>{V.fillStyle="#294c52",V.fillRect(0,0,128,128),V.strokeStyle="#e8d7ae",V.lineWidth=4,V.strokeRect(5,5,118,118),V.font="bold 76px monospace",V.fillStyle="#fff3ce",V.textAlign="center",V.textBaseline="middle",V.fillText(ne,64,68),C.material.map.needsUpdate=!0};return G(y),{o:C,draw:G}}const E=[],b=[],w=[];for(let y=0;y<4;y++){const F=-3+2*y,Q=ps[y]*.26+.4;r([F,.23,0],[1.45,.36,1.25],_,d);for(let P of[-.5,.5])for(let V of[-.57,.57])l([F+V,.4,P],[F+V,Q,P],.025,g,d);r([F,Q,0],[1.3,.09,1.15],_,d),c([F,Q+.12,0],.23,.04,g,d);for(let P=0;P<ps[y];P++)r([F-.73,.5+P*.26,.4],[.16,.025,.12],M,d);const Z=s([F,.4,0],d);for(let P=0;P<ps[y];P++){const V=s([0,.15+P*.26,0],Z);o([0,0,0],[.4,.17,.28],f,V),o([.2,.04,.12],.15,f,V),o([-.22,0,-.12],.14,M,V),b.push({o:V,i:y,n:P})}E.push(x(""+ps[y],[F,.3,1],.72,.65)),x(""+(y+1),[F,Q+.4,0],.5,.45);const C=r([F,.05,.05],[1.7,.06,1.55],M,d);w.push(C)}const v=Array.from({length:16},(y,F)=>o([-3.75+F*.5,.14,1.8],.11,g,d));u("16 ЧАСОВ / ОБЛАКО",[0,.45,-2.7],4.8,.48,d,{size:42});const R=[];for(let y=0;y<3;y++){const F=s([-2.7+y*2.7,.6,3.15],d);a([0,-.2,0],.75,.2,_,F);const Q=s([0,.2,0],F);if(R.push(Q),y===0){o([0,.3,0],[.5,.43,.35],f,Q),o([.45,.05,0],[.7,.17,.25],f,Q),o([.96,.28,0],.15,M,Q);for(const Z of[-.12,.12])l([.96,.32,Z],[1.02,.65,Z],.035,g,Q)}if(y===1){o([0,.3,0],[.5,.4,.45],f,Q),a([0,.72,0],.25,.1,M,Q),o([0,.83,0],.09,g,Q),l([-.3,.35,0],[-.8,.67,0],.15,f,Q);const Z=c([.5,.4,0],.3,.08,M,Q);Z.rotation.x=Math.PI/2}y===2&&(o([0,.3,0],[.8,.4,.35],f,Q),o([-.7,.45,0],[.3,.12,.45],M,Q),o([.5,.37,.29],.06,A,Q),l([0,.6,0],[0,.95,0],.045,M,Q),o([0,1,0],[.28,.08,.15],f,Q))}const T=s([0,0,0],d),D=Array.from({length:7},()=>o([0,0,0],[.17,.13,.17],f,T)),q=s([0,0,0],e);for(let y=0;y<19;y++)r([7.8+y*.68,-1.48,-24+Math.sin(y*.33)*.3],[.48,.13,.85],t.cream,q);p(q,[]),p(d,[...b.map(y=>y.o),...E.map(y=>y.o),...w,...v,...R,T]);let H;try{H=vs(JSON.parse(localStorage.getItem("beznogim-still-v1")||"null"))}catch{H=vs()}let z=0,L=1,O=1,B=null,K="",X=null;const $=document.createElement("div");$.id="still-controls",$.hidden=!0,$.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>',document.querySelector("#focus-object").before($);for(const y of $.querySelectorAll("select"))for(let F=0;F<4;F++)y.add(new Option("карта "+(F+1),""+F));$.querySelector("#still-to").value="1";const te=()=>{try{localStorage.setItem("beznogim-still-v1",JSON.stringify(H))}catch{}},ee=()=>O<1;function ce(y=1){const F=ee()?B.before.map((Z,C)=>Z+(B.after[C]-Z)*y):H.volumes;for(const Z of b){const C=Math.max(0,Math.min(1,F[Z.i]-Z.n));Z.o.visible=C>.01,Z.o.scale.setScalar(Math.max(.01,C))}T.visible=ee(),D.forEach((Z,C)=>{const P=Math.max(0,Math.min(1,y*1.65-C*.09));Z.visible=ee()&&P>0&&P<1,Z.position.set(...kp((B==null?void 0:B.a)||0,(B==null?void 0:B.b)||0,P))});const Q=H.round+(H.phase==="won"||H.phase==="complete"?1:0)-(ee()&&(H.phase==="won"||H.phase==="complete")?1:0);R.forEach((Z,C)=>Z.visible=C<Q),v.forEach((Z,C)=>Z.material=C<H.used?A:g),w.forEach((Z,C)=>{Z.visible=C===z||C===L,Z.material=C===z?g:M})}function le(){$.querySelector("#still-readout").textContent=`заказ ${H.round+1}/3 · ${Op[H.round]} · ${H.used}/${jo} ч
есть: ${H.volumes.join(" / ")}
надо: ${ea[H.round].join(" / ")}`,$.querySelector("#still-notice").textContent=ee()?"облако переливается…":K,$.querySelectorAll("select").forEach(y=>y.disabled=ee()||H.phase!=="ready"),$.querySelectorAll("button").forEach(y=>y.disabled=ee()),E.forEach((y,F)=>y.draw(""+H.volumes[F]));for(const y of $.querySelectorAll("select"))for(let F=0;F<4;F++)y.options[F].textContent=`${F+1}: ${H.volumes[F]}/${ps[F]}`;ce(ee()?0:1)}function fe(y){if(ee())return;m(),X=null;const F=Fp(H,y,z,L);return H=F.state,B=F.pour,O=B?0:1,K=F.result.ok?H.phase==="spent"?"Шестнадцать часов ушли. Облако ещё не то; повтори заказ.":H.phase==="complete"?"Три облака готовы. Кит никуда не торопится.":H.phase==="won"?"Облако собрано. Следующий заказ?":"":"Нечего переливать. Выбери другую пару; час не потрачен.",te(),le(),h(),F}$.querySelector("#still-from").onchange=y=>{z=+y.target.value,ce(),h()},$.querySelector("#still-to").onchange=y=>{L=+y.target.value,ce(),h()},$.querySelector("#still-reset").onclick=()=>fe("reset"),$.querySelector("#still-all").onclick=()=>fe("all"),$.querySelector("#still-hint").onclick=()=>{if(ee())return;const y=zp(H);X=(y==null?void 0:y[0])||null,X?(z=X.a,L=X.b,$.querySelector("#still-from").value=""+z,$.querySelector("#still-to").value=""+L,K=`Перелей ${z+1} → ${L+1}. До заказа ${y.length} переливов.`):K=H.phase==="ready"?"Часов на этот путь уже не хватит. Повтори заказ.":"Этот заказ окончен.",le(),h()};function N(y,F){ee()&&(O=Math.min(1,O+Math.max(0,Math.min(.1,y))/1.65),ce(O),O===1&&(le(),h())),R.forEach((Q,Z)=>{Q.position.y=.2+Math.sin(F*.7+Z)*.07})}return le(),te(),{house:d,controls:$,update:N,run:()=>fe(H.phase==="ready"?"pour":H.phase==="won"?"next":H.phase==="complete"?"all":"reset"),card:()=>({action:ee()?"облако в трубе…":H.phase==="ready"?`перелить ${z+1} → ${L+1}`:H.phase==="won"?"следующий заказ →":H.phase==="complete"?"новая серия ↺":"повторить заказ ↺",disabled:ee(),description:"Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов."}),inspect:()=>({...H,a:z,b:L,progress:O,pour:B,hint:X,notice:K,goal:ea[H.round],trophies:R.map(y=>y.visible),puffs:b.map(y=>({visible:y.o.visible,scale:y.o.scale.x})),flow:D.map(y=>y.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})}}const $n=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],Lr=[1,1,2],pc=n=>n===1?1:0;function Js(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min($n[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===$n[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return pc((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(Lr[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Ir(n){const e=pc(n[0]);return{bay:2*e+pc(n[e+1]),side:e}}function Gp(n){const e=n.slice(),t=Ir(e).side;return e[0]^=1,e[t+1]^=1,e}function Rl(n){return $n.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function Rd(n,e,t){const i=Js(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:Js({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:Js({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<Lr[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Ir(i.switches),l=$n[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:l,success:o===l,before:i.switches.slice()},i.switches=Gp(i.switches),s={ok:!0,bay:o,target:l,success:r.success},r.success?(i.cursor++,i.cursor===$n[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function Vp(n){const e=Js(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,l)=>a.cost-l.cost||a.path.length-l.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,l]of[["release",null],["flip",0],["flip",1],["flip",2]]){const c=Rd(r,a,l);!c.result.ok||c.state.phase==="spilled"||t.push({s:c.state,path:[...s.path,{action:a,index:l}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function Hp(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),l=o-a;return s[a].map((c,u)=>c+(s[a+1][u]-c)*l+(u===1&&a===3?.5*Math.sin(l*Math.PI):0))}function Wp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,localPlay:m}){const d=s([-23,-1.1,-32],e);d.name="backup-fork";const _=i("#263f46"),g=i("#c5ccbe",{metalness:.65,roughness:.3}),f=i("#e4bc77"),M=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(N=>i(N,{emissive:N,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,d),r([0,-.01,0],[6.6,.1,5.8],_,d);for(const N of[-2.8,2.8])for(const y of[-2.4,2.4])r([N,-.6,y],[.14,1.2,.14],t.metal,d);function A(N,y,F,Q,Z){const C=u(N,y,F,Q,Z),P=C.material.map.image;P.width=P.height=128;const V=P.getContext("2d");return V.fillStyle="#29464b",V.fillRect(0,0,128,128),V.strokeStyle="#e4dfc8",V.lineWidth=3,V.strokeRect(5,5,118,118),V.fillStyle="#fff1c9",V.font="bold 90px monospace",V.textAlign="center",V.textBaseline="middle",V.fillText(N,64,68),C.material.map.needsUpdate=!0,C}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],E=[-2.8,-.9,.9,2.8],b=(N,y)=>{l(N,y,.075,g,d);for(const F of[-.14,.14])l([N[0]+F,N[1]+.08,N[2]],[y[0]+F,y[1]+.08,y[2]],.025,t.copper,d)};b([0,1.4,-2.5],x[0]);for(let N=0;N<2;N++){b(x[0],x[N+1]);for(let y=0;y<2;y++)b(x[N+1],[E[N*2+y],.4,2])}const w=x.map((N,y)=>{const F=s(N,d);a([0,0,0],.24,.13,t.copper,F);const Q=s([0,.13,0],F);return l([0,0,0],[0,.07,.66],.055,f,Q),o([0,.07,.66],.14,g,Q),A(["А","Б","В"][y],[.48,.38,-.08],.55,.5,F),Q}),v=E.map((N,y)=>(a([N,.15,2],.29,.32,t.copper,d),c([N,.37,2],.27,.04,M[y],d),A(String(y+1),[N,.74,2.65],.7,.65,d),o([N,.49,2],[.16,.2,.16],M[y],d))),R=E.map((N,y)=>{const F=s([N,.22,2],d);return r([0,0,0],[.66,.06,.7],M[y],F),F}),T=o([0,1.57,-2.5],.18,M[0],d),D=o([0,1.57,-2.5],.18,M[0],d),q=s([4,-.3,2.5],d);a([0,0,0],.4,.55,_,q),c([0,.28,0],.4,.045,g,q);const H=o([0,.21,0],.18,f,q);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,d);const z=Array.from({length:12},(N,y)=>{const F=s([3.6+y%2*.57,.18,-1.9+Math.floor(y/2)*.48],d);return a([0,0,0],.12,.14,_,F),o([0,.16,0],.13,M[$n.flat()[y]],F)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,d,{size:42});for(let N=0;N<4;N++)r([-25,-1.42,-28.7-N*.62],[.7,.1,.44],t.cream,e);p(d,[...w.map(N=>N.parent),...v,...R,T,D,q,...z]);let L;try{L=Js(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{L=Js()}let O=null,B=1,K="",X=null;const $=document.createElement("div");$.id="fork-controls",$.hidden=!0,$.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((N,y)=>`<button id="fork-flip-${y}" aria-label="Переключить развилку ${N}">${N} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before($);function te(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(L))}catch{}}const ee=()=>B<1;function ce(){const N=$n[L.wave].slice(L.cursor).map(Q=>Q+1).join(" → ")||"всё на месте";$.querySelector("#fork-readout").textContent=`волна ${L.wave+1}/3 · сохранено ${Rl(L)}/12
очередь: ${N}
ручные щелчки ${L.used}/${Lr[L.wave]} · путь сейчас → ${Ir(L.switches).bay+1}`,$.querySelector("#fork-notice").textContent=ee()?"катится…":K;const y=ee()&&O?O.before:L.switches;w.forEach((Q,Z)=>{Q.rotation.y=(y[Z]?1:-1)*.68;const C=$.querySelector("#fork-flip-"+Z);C.textContent=["А","Б","В"][Z]+(L.switches[Z]?" →":" ←"),C.setAttribute("aria-pressed",String(!!L.switches[Z])),C.disabled=ee()||L.phase!=="ready"||L.used>=Lr[L.wave],C.classList.toggle("hinted",(X==null?void 0:X.action)==="flip"&&X.index===Z)});for(const Q of $.querySelectorAll(".fork-tools button"))Q.disabled=ee();T.visible=L.phase==="ready"&&!ee(),T.material=M[$n[L.wave][L.cursor]||0];const F=L.cursor-(ee()&&(O!=null&&O.success)?1:0);v.forEach((Q,Z)=>Q.visible=$n[L.wave].slice(0,F).includes(Z)),R.forEach((Q,Z)=>Q.visible=Ir(y).bay===Z),z.forEach((Q,Z)=>Q.visible=Z<Rl(L)-(ee()&&(O!=null&&O.success)?1:0)),H.visible=L.phase==="spilled"&&!ee(),H.material=M[$n[L.wave][L.cursor]||0],D.visible=ee()}function le(N,y){if(ee())return;m(),X=null;const F=Rd(L,N,y);return L=F.state,O=F.shot,B=O?0:1,K=F.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":L.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":L.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":L.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",te(),ce(),h(),F}["А","Б","В"].forEach((N,y)=>$.querySelector("#fork-flip-"+y).onclick=()=>le("flip",y)),$.querySelector("#fork-reset").onclick=()=>le("restart"),$.querySelector("#fork-all").onclick=()=>le("all"),$.querySelector("#fork-hint").onclick=()=>{if(ee())return;const N=Vp(L);X=(N==null?void 0:N[0])||null,K=X?X.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][X.index]}.`:L.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",ce(),h()};function fe(N){if(!ee())return;const y=B;B=Math.min(1,B+Math.min(.1,Math.max(0,N))/2.8),D.position.set(...Hp(O,B)),D.position.y+=.17,D.material=M[O.target],B===1&&y<1&&(ce(),h())}return ce(),te(),{house:d,controls:$,update:fe,run:()=>le(L.phase==="complete"?"all":L.phase==="rounddone"?"next":L.phase==="spilled"?"restart":"release"),card:()=>({action:ee()?"лампочка катится…":L.phase==="complete"?"новая серия ↺":L.phase==="rounddone"?"следующая волна →":L.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:ee(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...L,saved:Rl(L),queue:$n[L.wave],limit:Lr[L.wave],path:Ir(L.switches).bay,progress:B,shot:O,notice:K,hinted:X,rolling:D.position.toArray(),archive:z.map(N=>N.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function qp(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function sh(n){const e=n.state||{},t=(c,u,p,h)=>Number.isFinite(c)?Math.max(u,Math.min(p,Math.floor(c))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=c=>c&&typeof c=="object"?{seq:t(c.seq,1,999999,1),range:t(c.range,1,18,3),apex:Number.isFinite(c.apex)?Math.max(.5,Math.min(9,c.apex)):.5,end:Number.isFinite(c.end)?Math.max(0,Math.min(18,c.end)):0,outcome:["landed","short","far","bumped"].includes(c.outcome)?c.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const c=n.args||{};if(n.tool==="launch"&&c.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&c.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(c.power)||c.power<1||c.power>6||!Number.isInteger(c.angle)||c.angle<1||c.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=c.power,r.angle=c.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&c.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],p=r.power*(4-r.angle),h=r.power*r.angle/2,m=u.gap/2/p,d=m<=1?4*h*m*(1-m):0,_=m<=1&&d<u.barrier?"bumped":p<u.gap?"short":p>u.gap?"far":"landed";r.flight={seq:r.seq,range:p,apex:h,end:_==="bumped"?u.gap/2:p,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:p,apex:h,clearance:d,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],l={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:l[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function Xp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:p,watching:h,localPlay:m}){var V,G,ne;const d=s([-24,-1.5,-24],e);d.name="pneumatic-garage-range";const _=i("#eee0b7"),g=i("#29464b"),f=i("#d87b4d"),M=i("#94b9a0"),A=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,d),r([0,.24,0],[20,.1,5],g,d);for(let U=-9;U<10;U++)r([U,.31,2],[.55,.03,.06],_,d);const x=s([-8,.45,0],d);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],A,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const U of[-.35,.35])for(const j of[-.35,.35])o([U,.04,j],[.16,.16,.1],g,x);const E=s([-8,.37,0],d);E.name="flying-garage";for(const U of[-.9,.9])r([U,.74,0],[.12,1.5,1.6],M,E);r([0,.74,-.75],[1.8,1.5,.12],M,E),r([0,1.35,.76],[1.7,.27,.12],_,E);for(const U of[-1,1]){const j=r([U*.49,1.69,0],[1.16,.13,1.95],f,E);j.rotation.z=U*-.32}c("Г",[0,1.4,.86],.42,.29,E,{size:70});const b=[];for(const U of[-.74,.74])for(const j of[-.59,.59])a([U,-.04,j],.15,.23,t.metal,E),b.push(r([U,-.32,j],[.12,.5,.12],_,E));const w=s([0,.35,0],d);r([0,0,0],[2.5,.12,2.2],_,w),r([0,.07,0],[1.95,.035,1.65],M,w),c("ПОСАДКА",[0,.24,1.18],2.2,.3,w,{size:50});const v=s([0,.34,0],d),R=r([0,.5,0],[.32,1,2.1],f,v);for(const U of[-1.2,1.2])l([0,0,U],[0,3.4,U],.04,t.metal,v);const T=c("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),D=s([0,.33,0],d);r([0,0,0],[1.6,.12,2],t.copper,D);for(let U=0;U<5;U++)r([0,.1+U*.12,0],[1.1,.04,1.4],_,D);const q=s([-8,.6,3.4],d);a([0,.65,0],.4,1.3,t.copper,q),l([0,1.3,0],[0,1.8,0],.07,g,q),l([-.5,1.8,0],[.5,1.8,0],.07,g,q);const H=Array.from({length:6},(U,j)=>r([.7,.14+j*.24,0],[.24,.17,.12],M,q)),z=s([3,.6,3.7],d);r([0,0,0],[3.8,.2,.9],t.copper,z);const L=Array.from({length:3},(U,j)=>{const ie=s([-1.1+j*1.1,.2,0],z);return r([0,.1,0],[.65,.2,.55],g,ie),o([0,.56,0],[.3,.34,.27],_,ie),r([0,.57,.22],[.39,.19,.08],g,ie),ie});c("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,d,{size:55}),c("МАШИНА ДОМА",[-8,.9,2],2.8,.32,d,{size:50});for(let U=0;U<21;U++)r([-24,-1.42,-6-U*.65],[.9,.12,.49],t.cream,e);u(E,b),u(d,[x,E,w,v,D,q,z]);let O=null,B=((ne=(G=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:G.garage)==null?void 0:ne.public)||null,K,X="",$="",te=null,ee=1,ce="";try{O=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function le(U,j,ie={}){const Y=sh({mode:U,tool:j,args:ie,state:O});O=Y.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(O))}catch{}return Y}le("migrate");const fe=document.createElement("div");fe.id="garage-controls",fe.hidden=!0,fe.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(U=>`<option>${U}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(U=>`<option>${U}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(fe);const N=()=>B&&h()?B:sh({mode:"migrate",state:O}).public,y=()=>B&&h()?"resident":"sandbox";function F(U,j){var Y;if(ee<1)return;m();const ie=le("action",U,j);return ce=((Y=ie.result)==null?void 0:Y.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",C(0),p(),ie}fe.querySelector("#garage-pump").onclick=()=>F("pump",{power:Number(fe.querySelector("#garage-power").value),angle:Number(fe.querySelector("#garage-angle").value)}),fe.querySelector("#garage-reset").onclick=()=>F("launch",{mode:"restart"});function Q(){if(!K)return;const U=K;fe.querySelector("#garage-readout").textContent=`испытание ${U.level}/3 · пролёт ${U.gap} · пробка ${U.barrier}
воздух ${U.air}/6 · дальность ${U.range} · вершина ${U.apex}
посадки ${U.landed}/3 · попытки ${U.attempts}`,fe.querySelector("#garage-notice").textContent=ce;for(const j of fe.querySelectorAll("select,#garage-pump"))j.disabled=ee<1||["landed","complete"].includes(U.phase);fe.querySelector("#garage-reset").disabled=ee<1}function Z(U){const j=!K||$!==y()||K.run!==U.run;$=y(),j?(te=U.flight,ee=1,ce=""):U.flight&&(!K.flight||K.flight.seq!==U.flight.seq)?(te=U.flight,ee=0):U.flight||(te=null,ee=1),K=U,fe.querySelector("#garage-power").value=U.power,fe.querySelector("#garage-angle").value=U.angle,w.position.x=-8+U.gap*.7,v.position.x=-8+U.gap*.35,R.scale.y=U.barrier*.5,R.position.y=U.barrier*.25,T.position.y=U.barrier*.5+.4,L.forEach((ie,Y)=>ie.visible=Y<U.landed),H.forEach((ie,Y)=>ie.visible=Y<U.air),Q()}function C(U){U=Math.min(.1,Math.max(0,U));const j=N(),ie=y()+":"+JSON.stringify(j);ie!==X&&(X=ie,Z(j),p());const Y=ee;ee=Math.min(1,ee+U/3.6);const{x:ae,y:ye}=qp(te,ee);E.position.set(-8+ae*.7,.37+ye*.5,0),E.rotation.z=ee<1?Math.sin(ee*Math.PI*2)*.045:0,D.visible=!!te&&["short","far"].includes(te.outcome),D.position.x=-8+((te==null?void 0:te.range)||0)*.7,b.forEach(Se=>Se.visible=ee>0&&ee<.65),Y<1&&ee===1&&(Q(),p())}const P=()=>({action:y()==="resident"?"попробовать свой гараж":ee<1?"гараж в воздухе…":K.phase==="complete"?"новая серия ↺":K.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(y()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+K.message,disabled:ee<1});return window.addEventListener("beznogim:state",({detail:U})=>{var ie,Y;const j=(Y=(ie=U.mechanics)==null?void 0:ie.garage)==null?void 0:Y.public;j&&(B=j)}),Z(N()),X=y()+":"+JSON.stringify(N()),C(0),{house:d,controls:fe,update:C,card:P,run:()=>F("launch",{mode:K.phase==="complete"?"restart":K.phase==="landed"?"next":"jump"}),inspect:()=>({source:y(),...K,progress:ee,notice:ce,garage:E.position.toArray(),car:x.position.toArray(),trophies:L.map(U=>U.visible)})}}const wr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function Pl(n){const e=n.state||{},t=(u,p,h,m)=>Number.isFinite(u)?Math.max(p,Math.min(h,Math.floor(u))):m,i=t(e.planted,0,3,0),s=Math.min(2,i),r=wr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let l=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",l={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")l={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:wr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),l={ok:!0};else if(n.tool==="hint")l=Yp(a);else if(!["slide","plant"].includes(n.tool))l={ok:!1,reason:"unknown_tool"};else if(a.planted===3)l={ok:!1,reason:"complete"};else if(n.tool==="slide"){const p={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(p,u.direction))l={ok:!1,reason:"invalid_arguments"};else{const[h,m]=p[u.direction],d=a.positions[u.piece];let _=d%5,g=Math.floor(d/5);for(;_+h>=0&&_+h<5&&g+m>=0&&g+m<5&&!r.rocks.includes((g+m)*5+_+h)&&(g+m)*5+_+h!==a.positions[1-u.piece];)_+=h,g+=m;const f=g*5+_;a.positions[u.piece]=f,f!==d?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",l={ok:f!==d,from:d,to:f,reason:f===d?"blocked":"slid"}}}else a.positions.some((p,h)=>p!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",l={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=wr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",l={ok:!0,trees:a.planted*2})}const c=wr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:c.rocks,goals:c.goals,size:5},result:l,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function Yp(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=wr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((l,c)=>l===e.goals[c]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let l=0;l<2;l++)for(const[c,[u,p]]of Object.entries(s)){let h=o[l]%5,m=Math.floor(o[l]/5);for(;h+u>=0&&h+u<5&&m+p>=0&&m+p<5&&!e.rocks.includes((m+p)*5+h+u)&&(m+p)*5+h+u!==o[1-l];)h+=u,m+=p;const d=o.slice();d[l]=m*5+h;const _=d.join(",");i.has(_)||(i.add(_),t.push([d,[...a,{piece:l,direction:c}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function $p({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,sign:c,batchStatic:u,changed:p,watching:h,localPlay:m}){var C,P,V;const d=s([24,-1.5,24],e);d.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),g=i("#274644"),f=i("#f2e3b9"),M=i("#dfaf57"),A=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,d),r([0,.17,1.5],[7.25,.14,7.25],g,d);const E=G=>[(G%5-2)*1.35,.46,(Math.floor(G/5)-2)*1.35+1.5],b=[];for(let G=0;G<25;G++){const[ne,,U]=E(G);b.push(r([ne,.27,U],[1.27,.12,1.27],_,d))}const w=Array.from({length:6},()=>{const G=s([0,0,0],d);return r([0,.24,0],[1.05,.42,1.05],t.concrete,G),r([0,.49,0],[.9,.08,.9],t.metal,G),G}),v=[1,3].map((G,ne)=>{const U=E(G),j=s([U[0],.4,U[2]],d);return r([0,-.02,0],[1.23,.07,1.23],ne?A:M,j),r([0,.025,0],[1.03,.04,1.03],f,j),c(ne?"»":"«",[0,.14,.38],.72,.55,j,{size:105}),j});function R(G){const ne=s(E(G?24:20),d);for(let U=0;U<2;U++){const j=(U-.5)*.34,ie=G?-1:1;l([j+ie*.22,.92,0],[j-ie*.16,.5,0],.065,G?A:M,ne),l([j-ie*.16,.5,0],[j+ie*.22,.08,0],.065,G?A:M,ne)}return r([0,-.07,0],[.98,.09,.5],t.metal,ne),ne}const T=[R(0),R(1)],D=T.map(G=>r([0,-.13,0],[1.1,.04,.67],f,G));for(const G of[-3.9,0,3.9])r([G,.75,-2.05],[.18,1.25,.18],t.copper,d),r([G,1.39,-2.05],[.32,.12,.32],f,d);for(const G of[-2.8,2.8])r([G,.8,-2.05],[1.85,.14,.14],t.copper,d);const q=Array.from({length:6},(G,ne)=>{const U=s([-3.5+ne%3*3.5,.3,-3.5-Math.floor(ne/3)*1.9],d);a([0,.45,0],.12,.9,t.copper,U);for(let j=0;j<3;j++){const ie=new n.Mesh(new n.ConeGeometry(.87-j*.17,1.3,5),x);ie.position.y=.95+j*.56,ie.castShadow=!0,U.add(ie)}return r([0,.02,0],[1.45,.1,1.45],t.soil||g,U),U});c("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,d,{size:44}),c("СЕВЕР",[0,1.52,-2.05],1.45,.33,d,{size:60});for(let G=0;G<23;G++)r([24,-1.42,6.6+G*.54],[1,.13,.43],t.cream,e);u(d,[...w,...T,...v,...q]);let H=null,z=((V=(P=(C=window.__beznogimState)==null?void 0:C.mechanics)==null?void 0:P.quotes)==null?void 0:V.public)||null,L,O="",B="",K=0,X="",$=0,te=Array(6).fill(0),ee=[null,null];try{H=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function ce(G,ne,U={}){const j=Pl({mode:G,tool:ne,args:U,state:H});H=j.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(H))}catch{}return j}ce("migrate");const le=document.createElement("div");le.id="quotes-controls",le.hidden=!0,le.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(le);const fe=()=>z&&h()?z:Pl({mode:"migrate",state:H}).public;function N(G,ne={}){if($>0)return;m(),X="";const U=ce("action",G,ne);return O="",Q(0),p(),U}for(const G of le.querySelectorAll("[data-quote]"))G.onclick=()=>{K=Number(G.dataset.quote),X="",y()};for(const G of le.querySelectorAll("[data-slide]"))G.onclick=()=>N("slide",{piece:K,direction:G.dataset.slide});le.querySelector("#quotes-pair").onclick=()=>N("restart",{scope:"pair"}),le.querySelector("#quotes-hint").onclick=()=>{const G=Pl({mode:"action",tool:"hint",state:fe()}).result;X=G.status==="route"?`${G.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[G.next.direction]} · осталось ходов: ${G.remaining}`:G.status==="aligned"?"Обе на месте. Выпускай.":G.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",y()};function y(){if(L){le.querySelector("#quotes-readout").textContent=`пара ${L.level}/3 · ели ${L.trees}/6 · ходы ${L.moves}`,le.querySelector("#quotes-hint-text").textContent=X;for(const G of le.querySelectorAll("[data-quote]"))G.setAttribute("aria-pressed",Number(G.dataset.quote)===K);for(const G of le.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))G.disabled=$>0||L.phase==="complete";D.forEach((G,ne)=>G.visible=ne===K&&L.phase!=="complete")}}function F(G){const ne=z&&h()?"resident":"sandbox",U=L,j=!U||U.run!==G.run||ne!==B;B=ne,j?(T.forEach((ie,Y)=>ie.position.set(...E(G.positions[Y]))),te=q.map((ie,Y)=>Y<G.trees?1:0),ee=[null,null],$=0):G.planted>U.planted?($=1.4,ee=T.map((ie,Y)=>({from:ie.position.clone(),to:q[(G.planted-1)*2+Y].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):G.planted!==U.planted&&(te=q.map((ie,Y)=>Y<G.trees?1:0)),L=G,w.forEach((ie,Y)=>{if(ie.visible=Y<G.rocks.length,ie.visible){const ae=E(G.rocks[Y]);ie.position.set(ae[0],.3,ae[2])}}),y()}function Q(G){G=Math.min(.1,Math.max(0,G));const ne=fe(),U=(z&&h()?"resident:":"sandbox:")+JSON.stringify(ne);U!==O&&(O=U,F(ne),p());const j=$>0;$=Math.max(0,$-G);for(let ie=0;ie<2;ie++){const Y=T[ie],ae=ee[ie];if(ae&&$>0)ae.t=Math.min(1,ae.t+G/1.4),Y.position.lerpVectors(ae.from,ae.to,ae.t*ae.t*(3-2*ae.t)),Y.position.y+=Math.sin(ae.t*Math.PI)*.9,Y.scale.setScalar(1-ae.t*.8);else{ee[ie]=null,Y.scale.setScalar(1);const ye=E(ne.positions[ie]);Y.position.x=n.MathUtils.damp(Y.position.x,ye[0],12,G),Y.position.y=.46,Y.position.z=n.MathUtils.damp(Y.position.z,ye[2],12,G)}Y.visible=!!ee[ie]||ne.phase!=="complete"}q.forEach((ie,Y)=>{const ae=Y<ne.trees?1:0;te[Y]=n.MathUtils.damp(te[Y],ae,$>0?1:5,G),ie.visible=te[Y]>.003,ie.scale.setScalar(Math.max(.001,te[Y]))}),j&&$===0&&(y(),p())}const Z=()=>({action:z&&h()?"попробовать свои ёлочки":L.phase==="complete"?"новый питомник ↺":$>0?"пролезают…":"выпустить пару",description:(z&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+L.message,disabled:$>0});return window.addEventListener("beznogim:state",({detail:G})=>{var U,j;const ne=(j=(U=G.mechanics)==null?void 0:U.quotes)==null?void 0:j.public;ne&&(z=ne)}),F(fe()),O=(z&&h()?"resident:":"sandbox:")+JSON.stringify(fe()),Q(0),{house:d,controls:le,update:Q,card:Z,run:()=>N(L.phase==="complete"?"restart":"plant",L.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:z&&h()?"resident":"sandbox",...L,busy:$,selected:K,hint:X,quotePositions:T.map(G=>G.position.toArray()),treeScales:te.slice(),visibleTrees:q.filter(G=>G.visible).length})}}function rh(n){const e=n.state||{},t=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function Jp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:l,sign:c,batchStatic:u,changed:p,watching:h,localPlay:m}){var F,Q,Z;const d=s([0,-1.5,-24],e);d.name="punctuation-post";const _=i("#28464d"),g=i("#eee4c9"),f=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,d),r([0,.2,0],[14,.14,7],t.dark,d),r([0,.3,0],[13.6,.04,6.6],f,d);const M=s([0,0,0],d),A=s([0,0,0],d);for(const[C,P]of[[M,"ОТ"],[A,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,C),r([0,1.32,0],[2.12,.12,3.3],g,C),c(P,[0,.9,1.66],1,.36,C,{size:60});const x=s([0,1.43,0],d),E=s([0,0,0],x),b=s([0,0,0],x),w=r([-.5,0,0],[1,.15,.56],_,E),v=r([.5,0,0],[1,.15,.56],_,b),R=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,d)),T=s([0,1.47,0],d);T.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,T),o([-.08,.46,0],[.39,.42,.29],t.copper,T),l([-.08,.47,.3],.23,.033,g,T,[0,0,0]),l([-.08,.47,.315],.12,.03,g,T,[0,0,0]);for(const C of[-.13,.13])a([.4,.17,C],[.62,.46,C],.02,t.leaf,T),o([.62,.46,C],[.055,.065,.055],_,T);r([-.16,.92,0],[.46,.32,.065],g,T),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,T),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,T);const D=s([0,.4,3.9],d);r([0,0,0],[3.6,.22,1],t.copper,D);const q=[".","?","!"].map((C,P)=>{const V=s([-1.1+P*1.1,.42,0],D);return r([0,0,0],[.8,.65,.11],g,V),c(C,[0,.02,.075],.55,.5,V,{size:100}),V});c("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,d,{size:52});const H=s([0,.55,2.5],d);r([0,0,0],[10,.1,.4],t.copper,H);for(let C=-4;C<=4;C++)r([C,.07,0],[.035,.025,.26],_,H),c(String(C),[C,.08,.32],.4,.28,H,{size:45});for(let C=0;C<16;C++)r([1.5,-.1-C*.09,-5.9-C*.72],[1.05,.14,.65],t.cream,e);for(let C=0;C<8;C++)r([1.5,-1.45,-17.6-C*.5],[1.05,.14,.45],t.cream,e);const z=s([-6.9,.3,3.9],d);a([0,0,0],[0,2.7,0],.07,t.metal,z),r([0,2.7,0],[.8,.14,.8],t.metal,z),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),z),u(T,[]),u(M,[]),u(A,[]),u(d,[M,A,x,...R,T,D]);let L=null,O=((Z=(Q=(F=window.__beznogimState)==null?void 0:F.mechanics)==null?void 0:Q.dash)==null?void 0:Z.public)||null,B,K="",X=1,$=0;try{L=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function te(C,P,V={}){const G=rh({mode:C,tool:P,args:V,state:L});L=G.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(L))}catch{}return G}te("migrate");const ee=document.createElement("div");ee.id="dash-controls",ee.hidden=!0,ee.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(C,P)=>`<option value="${P+1}">${P+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(C=>`<option value="${C}">${C>0?"+":""}${C}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(ee);const ce=()=>O&&h()?O:rh({mode:"migrate",state:L}).public;function le(C,P){m(),te("action",C,P),K="",N(0),p()}ee.querySelector("#dash-tune").onclick=()=>le("tune",{span:Number(ee.querySelector("#dash-span").value),shift:Number(ee.querySelector("#dash-shift").value)}),ee.querySelector("#dash-reset").onclick=()=>le("reset");function fe(C){const P=["delivered","complete"].includes(C.phase);P?!B||B.run!==C.run||B.round!==C.round?X=1:["delivered","complete"].includes(B.phase)||(X=0):X=0,B=C,ee.querySelector("#dash-readout").textContent=`почта ${C.delivered}/3 · пролёт ${C.gap} · центр ${C.center>0?"+":""}${C.center} · попытки ${C.attempts}`,ee.querySelector("#dash-span").value=C.span,ee.querySelector("#dash-shift").value=C.shift;for(const V of ee.querySelectorAll("select,#dash-tune"))V.disabled=P;M.position.x=C.center-C.gap/2-1,A.position.x=C.center+C.gap/2+1,R[0].position.x=C.center-C.gap/2,R[1].position.x=C.center+C.gap/2,x.position.x=C.shift,w.scale.x=v.scale.x=C.span/2,w.position.x=-C.span/4,v.position.x=C.span/4,q.forEach((V,G)=>V.visible=G<C.delivered)}function N(C){const P=ce(),V=JSON.stringify(P);V!==K&&(K=V,fe(P),p()),X=["delivered","complete"].includes(P.phase)?Math.min(1,X+C/4):0,$=n.MathUtils.damp($,P.phase==="bent"?.22:0,6,C),E.rotation.z=$,b.rotation.z=-$,x.position.y=1.43-Math.sin($)*P.span/2,T.position.x=M.position.x+(A.position.x-M.position.x)*(X*X*(3-2*X)),T.position.y=1.47,T.rotation.z=X>0&&X<1?Math.sin(X*30)*.025:0}const y=()=>{const C=B||ce();return{action:O&&h()?"попробовать свою почту":C.phase==="complete"?"новая почта ↺":C.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(O&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+C.message}};return window.addEventListener("beznogim:state",({detail:C})=>{var V,G;const P=(G=(V=C.mechanics)==null?void 0:V.dash)==null?void 0:G.public;P&&(O=P)}),fe(ce()),K=JSON.stringify(ce()),T.position.x=X===1?A.position.x:M.position.x,{house:d,controls:ee,update:N,card:y,run:()=>{if(X>0&&X<1)return;const C=ce().phase;le(C==="complete"?"reset":C==="delivered"?"next":"cross")},inspect:()=>({source:O&&h()?"resident":"sandbox",...B,walk:X,bend:$,snail:T.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:A.position.x,stamps:q.map(C=>C.visible)})}}function oh(n){const e=n.state||{},t=(o,a,l,c)=>Number.isFinite(o)?Math.max(a,Math.min(l,Math.floor(o))):c,i={depths:[0,0,0].map((o,a)=>{var l;return t((l=e.depths)==null?void 0:l[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function Zp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,watching:m,localPlay:d}){var Q,Z,C;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const g=i("#d0b987"),f=i("#556f7f"),M=i("#a65d42"),A=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const P of[-2,2])r([.5,.96,P],[12.9,1.1,.22],t.copper,_);for(const P of[-6,7])r([P,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(P,V)=>r([-4+V*2,.98,0],[1.9,1,3.7],g,_)),E=r([.5,.54,0],[12.6,.04,3.75],A,_);E.castShadow=!1;const b=Array.from({length:3},(P,V)=>{const G=s([-4+V*2,.35,3.05],_);for(let ne=0;ne<5;ne++)o([(ne-2)*.27,.16+ne%2*.1,0],[.32,.22,.4],g,G);return G}),w=s([-2,1.3,0],_);w.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([P,V],G)=>G?v.lineTo(P,-V):v.moveTo(P,-V)),v.closePath();const R=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});R.rotateX(-Math.PI/2);const T=new n.Mesh(R,f);T.castShadow=!0,T.receiveShadow=!0,w.add(T),r([-.45,.7,0],[4.9,.09,1.4],t.cream,w);for(let P=0;P<3;P++){r([-.95+P*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][P],w);for(const V of[-.601,.601])for(let G=0;G<4;G++)r([-.95+P*.92-.3+G*.2,1.03,V],[.024,.5,.025],t.dark,w)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,w),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,w);for(const P of[-.63,.63])r([-2.25,1.6,P],[.73,.16,.03],t.dark,w);a([-2.45,1.98,0],.15,.43,M,w),a([-2.45,2.21,0],.15,.05,t.dark,w),l([2.3,.77,0],[2.3,1.9,0],.035,t.metal,w),r([2.55,1.7,0],[.48,.26,.03],t.cream,w);for(const P of[-2.9,2.1])for(const V of[-.7,.7])l([P,.7,V],[P,1,V],.025,t.cream,w);for(const P of[-.7,.7])l([-2.9,1,P],[2.1,1,P],.025,t.cream,w);const D=s([5.9,1.1,3.4],_);c([0,0,0],.4,.04,t.copper,D,[0,0,0]);for(let P=0;P<4;P++){const V=P*Math.PI/2;l([0,0,0],[.4*Math.cos(V),.4*Math.sin(V),0],.025,t.copper,D)}l([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),l([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const q=r([5.9,.8,1.75],[.19,.55,.19],A,_);q.castShadow=!1;const H=s([0,.29,0],_);for(const P of[-2.9,2.9])r([.5,0,P],[13,.02,1.1],A,H);for(let P=0;P<3;P++)u(["КОРМА","ТРЮМ","НОС"][P],[-4+P*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const P of[-6.6,6.6])l([P,.3,-3.8],[P,3.6,-3.8],.08,t.metal,_),r([P,3.6,-3.5],[.55,.16,.8],t.metal,_),r([P,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let P=0;P<15;P++)r([-7.2-P*.72,-.03-P*.09,1.2],[.65,.14,1.12],t.cream,e);const z=s([-6.5,.5,3.3],_);l([0,0,0],[0,1.5,0],.045,t.copper,z),r([0,.1,0],[.32,.35,.08],t.metal,z),c([0,1.53,0],.1,.025,t.metal,z,[0,0,0]),p(w,[]),p(_,[...x,...b,E,w,D,q,H]);let L=null,O=((C=(Z=(Q=window.__beznogimState)==null?void 0:Q.mechanics)==null?void 0:Z.drydock)==null?void 0:C.public)||null,B,K="",X=0,$=0,te=0;try{L=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function ee(P,V,G={}){const ne=oh({mode:P,tool:V,args:G,state:L});L=ne.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(L))}catch{}return ne}ee("migrate");const ce=document.createElement("div");ce.id="drydock-controls",ce.hidden=!0,ce.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(ce);function le(){return O&&m()?O:oh({mode:"migrate",state:L}).public}function fe(P,V){d(),ee("action",P,V),K="",F(0),h()}ce.querySelectorAll("[data-dig]").forEach(P=>P.onclick=()=>fe("dig",{channel:Number(P.dataset.dig)})),ce.querySelector("#drydock-fill").onclick=()=>fe("pump",{direction:"fill"}),ce.querySelector("#drydock-drain").onclick=()=>fe("pump",{direction:"drain"}),ce.querySelector("#drydock-reset").onclick=()=>fe("reset");function N(P){B?(B.water!==P.water&&(X=2),B.floods!==P.floods&&($=3),!B.launched&&P.launched&&(te=0)):te=P.launched?1:0,B=P,ce.querySelector("#drydock-readout").textContent=`каналы ${P.depths.join(" / ")} · вода ${P.water}/2 · переливы ${P.floods}`,ce.querySelectorAll("[data-dig]").forEach(V=>{V.disabled=P.launched||P.water>0||P.depths[Number(V.dataset.dig)]===2}),ce.querySelector("#drydock-fill").disabled=P.launched,ce.querySelector("#drydock-drain").disabled=P.launched||P.water===0,x.forEach((V,G)=>{const ne=1-P.depths[G]*.4;V.scale.y=ne,V.position.y=.48+ne/2,b[G].scale.setScalar(.45+P.depths[G]*.4)}),E.visible=P.water>0,E.position.y=.49+P.water*.39}function y(){const P=B||le();return{action:O&&m()?"попробовать свой спуск":P.launched?"корабль в песок ↺":"спустить корабль",description:(O&&m()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+P.message}}function F(P){const V=le(),G=JSON.stringify(V);G!==K&&(K=G,N(V),h()),X=Math.max(0,X-P),$=Math.max(0,$-P),q.visible=X>0&&V.water>0,H.visible=$>0,D.rotation.z+=X>0?P*3:0,te=V.launched?Math.min(1,te+P/5):0;const ne=te*te*(3-2*te);w.position.x=-2+ne*5.6;const U=Math.min(...V.depths),j=V.afloat?.94:1.15-U*.32;w.position.y=n.MathUtils.damp(w.position.y,j,4,P),w.rotation.z=n.MathUtils.damp(w.rotation.z,V.afloat?0:(V.depths[2]-V.depths[0])*.085,4,P)}return window.addEventListener("beznogim:state",({detail:P})=>{var G,ne;const V=(ne=(G=P.mechanics)==null?void 0:G.drydock)==null?void 0:ne.public;V&&(O=V,K="")}),N(le()),w.position.x=le().launched?3.6:-2,{house:_,controls:ce,update:F,card:y,run:()=>fe(le().launched?"reset":"launch"),inspect:()=>({source:O&&m()?"resident":"sandbox",...B,ship:w.position.toArray(),pitch:w.rotation.z,waterY:E.position.y,voyage:te,sandHeights:x.map(P=>P.scale.y),floodVisible:H.visible})}}function ah(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,l,c,u)=>Number.isFinite(a)?Math.max(l,Math.min(c,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function Kp({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,changed:p,watching:h,localPlay:m}){var ce,le,fe;const d=s([0,0,0],e);d.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),g=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,d),r([.55,1.5,-.713],[1.42,1.04,.035],_,d),l([.55,.9,-.94],[.55,1,-.94],.08,t.metal,d);const f=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let N=0;N<7;N++)for(let y=0;y<9;y++)M.push(r([.55+(y-4)*.145,1.5+(3-N)*.14,-.683],[.13,.12,.02],g,d));const A=s([-1.05,1.24,-.38],d);A.name="core-gear",a([0,0,0],.3,.11,t.copper,A).rotation.x=Math.PI/2;const x=[];for(let N=0;N<12;N++){const y=N/12*Math.PI*2;let F=r([Math.cos(y)*.33,Math.sin(y)*.33,0],[.13,.13,.12],t.copper,A);F.rotation.z=y,x.push(F)}c([0,0,.06],.13,.025,t.dark,A,[0,0,0]);const E=s([-.4,1.12,-.38],d);c([0,0,0],.19,.035,t.dark,E,[0,0,0]),l([-.2,0,0],[.2,0,0],.025,t.metal,E);const b=s([0,0,0],d);l([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,b),l([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,b);const w=s([-1.5,1,-.05],d);l([0,0,0],[.23,0,0],.04,t.metal,w),l([.23,0,0],[.23,.23,0],.04,t.copper,w),o([.23,.23,0],.08,t.rust,w);const v=s([-1.55,1.18,-1.13],d);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),c([0,.29,0],.33,.025,t.copper,v),c([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,d,{size:37});const R=Array.from({length:3},(N,y)=>o([.17+y*.3,2.23,-.82],.06,t.mint,d));let T=null,D=((fe=(le=(ce=window.__beznogimState)==null?void 0:ce.mechanics)==null?void 0:le.bench)==null?void 0:fe.public)||null,q,H="",z=0;try{T=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function L(N,y,F={}){const Q=ah({mode:N,tool:y,args:F,state:T});T=Q.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(T))}catch{}return Q}L("migrate");const O=document.createElement("div");O.id="bench-controls",O.hidden=!0,O.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(O);function B(){return D&&h()?D:ah({mode:"migrate",state:T}).public}function K(N,y){m(),L("action",N,y),H="",ee(0),p()}O.querySelectorAll("[data-part]").forEach(N=>N.onclick=()=>K("fit",{part:N.dataset.part,value:Number(N.dataset.value)})),O.querySelector("#bench-salvage").onclick=()=>K("salvage"),O.querySelector("#bench-restart").onclick=()=>K("restart");function X(N){q&&q.attempts!==N.attempts&&(z=3),q=N,O.querySelector("#bench-readout").textContent=`экран ${N.round+1}/3 · скорость ${N.speed} / нужно ${N.target}`,O.querySelectorAll("[data-part]").forEach(y=>{y.setAttribute("aria-pressed",String(N[y.dataset.part]===Number(y.dataset.value))),y.disabled=N.phase!=="ready"}),O.querySelector("#bench-salvage").disabled=!N.bucket,_.color.set(N.picture?"#16362c":"#e9e4cc"),_.emissive.set(N.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=N.picture?.1:.6,M.forEach((y,F)=>y.visible=!!N.picture&&f[N.picture-1][F]==="1"),x.forEach((y,F)=>y.visible=F<N.core*3),E.scale.setScalar(.75+N.belt*.25),b.visible=!N.bucket,R.forEach((y,F)=>y.visible=F<N.repairs)}const $={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function te(){const N=q||B();return{action:D&&h()?"собрать свой монитор":N.phase==="ejected"?"достать ядро":N.phase==="repaired"?N.round===2?"закончить работу":"следующий экран":N.phase==="complete"?"ещё раз":"крутить рукоятку",description:(D&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+$[N.phase]}}function ee(N){const y=B(),F=JSON.stringify(y);F!==H&&(H=F,X(y),p()),z=Math.max(0,z-N);const Q=Math.min(1,N*7),Z=y.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];A.position.lerp(new n.Vector3(...Z),Q),A.rotation.x=n.MathUtils.lerp(A.rotation.x,y.bucket?-Math.PI/2:0,Q);const C=z>0?y.core*2:y.picture?.4:0;A.rotation.z+=N*C,E.rotation.z-=N*C*y.belt,w.rotation.z+=N*C}return window.addEventListener("beznogim:state",({detail:N})=>{var F,Q;const y=(Q=(F=N.mechanics)==null?void 0:F.bench)==null?void 0:Q.public;y&&(D=y,H="")}),X(B()),A.position.set(...B().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:d,controls:O,update:ee,card:te,run:()=>{const N=B();K(N.phase==="ejected"?"salvage":N.phase==="repaired"?"next":N.phase==="complete"?"restart":"crank")},inspect:()=>({source:D&&h()?"resident":"sandbox",...q,corePosition:A.position.toArray(),coreAngle:A.rotation.z,driveAngle:E.rotation.z,litPixels:M.filter(N=>N.visible).length})}}const lh=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function ch(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function uh(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):ch();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const l=n.args||{},c=n.tool;if(c==="restart")Object.assign(e,ch(e.run+1));else if(c==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(c==="load")!Number.isInteger(l.index)||l.index<0||l.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[l.index]=!e.loaded[l.index],e.status="idle");else if(c==="amnesty")e.pardoned=!0,e.status="idle";else if(c==="dispatch"){const u=lh[e.round],p=u.weights.reduce((h,m,d)=>h+(e.loaded[d]?m+(e.pardoned?0:u.debt[d]):0),0);e.attempts++,p!==u.target?(e.status=p<u.target?"under":"over",i={ok:!1,reason:e.status,total:p,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,m)=>{e.loaded[m]&&e.delivered.push({id:`${e.run}:${e.round}:${m}`,weight:h})}),i={ok:!0,total:p,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=lh[e.round],r=s.weights.map((l,c)=>l+(e.pardoned?0:s.debt[c])),o=r.reduce((l,c,u)=>l+(e.loaded[u]?c:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function Qp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,sign:u,batchStatic:p,changed:h,watching:m,localPlay:d}){var y,F,Q;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const g=i("#9d8560"),f=i("#a1b56f"),M=i("#f1d29a"),A=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],A,_),r([3.65,-.14,0],[3.3,.5,7],A,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const Z of[-4.9,4.9])l([Z,0,-3],[Z,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],g,_);const x=s([0,.2,1.15],_);for(let Z=0;Z<11;Z++)r([-2+Z*.4,0,0],[.38,.16,1.65],g,x);for(const Z of[-.72,.72])l([-2.2,.22,Z],[2.2,.22,Z],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const E=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,E);for(const Z of[-.52,.52])for(const C of[-.58,.58]){const P=c([Z,0,C],.17,.05,t.dark,E,[0,0,0]);P.rotation.y=Math.PI/2}const b=s([-4.7,.8,1.4],_);l([0,-.5,0],[0,.2,0],.1,t.metal,b);const w=s([0,0,0],b);l([0,0,0],[0,.8,0],.065,t.copper,w),o([0,.8,0],.14,t.rust,w),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const R=a([0,.7,0],.57,1.1,t.copper,v);c([0,1.28,0],.25,.045,t.dark,v);const T=Array.from({length:3},(Z,C)=>o([1.75+C*.34,2.15,-3.05],.095,t.mint,_)),D=Array.from({length:3},(Z,C)=>{const P=s([-3.6,.72,-2.1+C*1.08],_),V=o([0,0,0],[.28,.23,.57],f,P);V.rotation.z=.1,l([0,0,-.5],[.05,.12,-.68],.045,t.leaf,P);const G=s([.45,.28,0],P);return r([0,0,0],[.29,.57,.4],M,G),r([0,0,.21],[.18,.045,.012],t.rust,G),{g:P,tax:G}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],g,_);const q=Array.from({length:6},(Z,C)=>o([2.75+C%3*.7,1,-2.1+Math.floor(C/3)*.83],[.2,.19,.38],f,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const H=s([0,0,0],e);for(let Z=0;Z<15;Z++){const C=Z/14;r([-.6+Math.sin(C*Math.PI)*1.5,-1.55,17+Z*.3],[.9,.12,.65],A,H)}for(let Z=0;Z<5;Z++)r([-.8-Z*.6,-1.55,21.5],[.75,.12,.75],A,H);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,H,{size:35}),l([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,H),p(H,[]),p(_,[x,E,b,v,...D.map(Z=>Z.g),...q,...T]),p(x,[]),p(E,[]);let z=null,L=((Q=(F=(y=window.__beznogimState)==null?void 0:y.mechanics)==null?void 0:F.amnesty)==null?void 0:Q.public)||null,O,B="",K=0;try{z=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function X(Z,C,P={}){const V=uh({state:z,mode:Z,tool:C,args:P});z=V.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(z))}catch{}return V}X("migrate");const $=document.createElement("div");$.id="amnesty-controls",$.hidden=!0,$.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before($);function te(){return L&&m()?L:uh({state:z,mode:"migrate"}).public}function ee(Z,C){d(),X("action",Z,C),B="",N(0),h()}for(const Z of $.querySelectorAll("[data-load]"))Z.onclick=()=>ee("load",{index:Number(Z.dataset.load)});$.querySelector("#amnesty-pardon").onclick=()=>ee("amnesty"),$.querySelector("#amnesty-restart").onclick=()=>ee("restart");const ce={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function le(Z){O=Z;const C=Z.status==="delivered"||Z.status==="complete";$.querySelector("#amnesty-readout").textContent=`рейс ${Z.round+1}/3 · груз ${Z.total} / нужно ${Z.target}`,$.querySelectorAll("[data-load]").forEach((P,V)=>{P.textContent=`${["A","B","C"][V]} · ${Z.weights[V]}${Z.debt[V]?` + ${Z.debt[V]} бумага`:""}`,P.setAttribute("aria-pressed",String(Z.loaded[V])),P.disabled=C}),$.querySelector("#amnesty-pardon").disabled=Z.pardoned||C,$.querySelector("#amnesty-pardon").textContent=Z.pardoned?"налог отменён":"отменить налог",R.scale.y=Z.target/4,T.forEach((P,V)=>P.visible=V<(Z.status==="complete"?3:Z.round)),q.forEach((P,V)=>P.visible=V<Z.delivered.length),D.forEach((P,V)=>{P.tax.visible=!Z.pardoned||K<.99,P.g.visible=!C||!Z.loaded[V],P.g.scale.setScalar(.8+Z.weights[V]*.08)})}function fe(){const Z=O||te();return{action:L&&m()?"войти в свою амнистию":Z.status==="delivered"?"следующий рейс":Z.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(L&&m()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+ce[Z.status]}}function N(Z,C){const P=te(),V=JSON.stringify(P);V!==B&&(B=V,le(P),h());const G=P.status==="delivered"||P.status==="complete",ne=(U,j)=>n.MathUtils.lerp(U,j,Math.min(1,Z*5));x.rotation.z=ne(x.rotation.z,P.tilt),E.position.x=ne(E.position.x,G?3:-2.55),w.rotation.z=ne(w.rotation.z,P.pardoned?-.65:0),K=ne(K,P.pardoned?1:0),D.forEach(U=>{U.tax.position.y=.28+K*2.5,U.tax.rotation.z=K*.8,U.tax.visible=!P.pardoned||K<.99}),q.forEach((U,j)=>U.visible=j<P.delivered.length-(G&&E.position.x<2.9?2:0)),D.forEach((U,j)=>{const ie=P.loaded[j];U.g.visible=!G||!ie||E.position.x<2.9,U.g.position.x=ne(U.g.position.x,ie?E.position.x+(j-1)*.42:-3.6),U.g.position.y=ne(U.g.position.y,ie?.86:.72),U.g.position.z=ne(U.g.position.z,ie?1.15:-2.1+j*1.08)})}return window.addEventListener("beznogim:state",({detail:Z})=>{var P,V;const C=(V=(P=Z.mechanics)==null?void 0:P.amnesty)==null?void 0:V.public;C&&(L=C,B="")}),K=te().pardoned?1:0,le(te()),{house:_,controls:$,update:N,card:fe,run:()=>ee(O.status==="delivered"?"next":O.status==="complete"?"restart":"dispatch"),inspect:()=>({source:L&&m()?"resident":"sandbox",...O,bridgeTilt:x.rotation.z,cartX:E.position.x,cargoPositions:D.map(Z=>Z.g.position.toArray()),taxVisible:D.map(Z=>Z.tax.visible),paperY:D.map(Z=>Z.tax.position.y),handleAngle:w.rotation.z,deliveredVisible:q.filter(Z=>Z.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="186",Ti={ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pd=0,mc=1,Ld=2,Zs=1,Id=2,Xs=3,ji=0,gn=1,In=2,fi=0,Ks=1,gc=2,_c=3,vc=4,Dd=5,ms=100,Nd=101,Ud=102,Od=103,Fd=104,zd=200,kd=201,Bd=202,Gd=203,Wc=204,qc=205,Vd=206,Hd=207,Wd=208,qd=209,Xd=210,Yd=211,$d=212,Jd=213,Zd=214,ta=0,na=1,ia=2,tr=3,sa=4,ra=5,oa=6,aa=7,Xc=0,Kd=1,Qd=2,Qn=0,Yc=1,$c=2,Jc=3,Za=4,Zc=5,Kc=6,Qc=7,jc=300,es=301,Ss=302,Wo=303,qo=304,jr=306,Gr=1e3,ui=1001,la=1002,Qt=1003,jd=1004,Tr=1005,tn=1006,Xo=1007,Xi=1008,yn=1009,eu=1010,tu=1011,nr=1012,Ka=1013,ti=1014,Un=1015,ni=1016,Qa=1017,ja=1018,ir=1020,nu=35902,iu=35899,su=1021,ru=1022,On=1023,gi=1026,Yi=1027,el=1028,tl=1029,ts=1030,nl=1031,il=1033,Dr=33776,Nr=33777,Ur=33778,Or=33779,ca=35840,ua=35841,ha=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37488,_a=37489,Vr=37490,va=37491,xa=37808,ya=37809,Ma=37810,Sa=37811,ba=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,Ca=37817,Ra=37818,Pa=37819,La=37820,Ia=37821,Da=36492,Na=36494,Ua=36495,Oa=36283,Fa=36284,Hr=36285,za=36286,ef=3200,ka=0,tf=1,bi="",cn="srgb",Wr="srgb-linear",qr="linear",wt="srgb",Yo=7680,nf=519,sf=512,rf=513,of=514,sl=515,af=516,lf=517,rl=518,cf=519,uf=35044,xc="300 es",Kn=2e3,sr=2001;function jp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hf(){const n=Ba("canvas");return n.style.display="block",n}const hh={};function yc(...n){const e="THREE."+n.shift();console.log(e,...n)}function df(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=df(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=df(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ys(...n){const e=n.join(" ");e in hh||(hh[e]=!0,tt(...n))}function em(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const tm={[ta]:na,[ia]:oa,[sa]:aa,[tr]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:tr};class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dh=1234567;const Fr=Math.PI/180,Xr=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function nm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function im(n,e,t){return n!==e?(t-n)/(e-n):0}function zr(n,e,t){return(1-t)*n+t*e}function sm(n,e,t,i){return zr(n,e,1-Math.exp(-t*i))}function rm(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function am(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cm(n,e){return n+Math.random()*(e-n)}function um(n){return n*(.5-Math.random())}function hm(n){n!==void 0&&(dh=n);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(n){return n*Fr}function fm(n){return n*Xr}function pm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function mm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _m(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),p=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),d=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*p,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*p,a*c);break;case"ZXZ":n.set(l*p,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*d,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*d,a*c);break;case"ZYZ":n.set(l*d,l*m,a*u,a*c);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:Fr,RAD2DEG:Xr,generateUUID:Es,clamp:ct,euclideanModulo:ou,mapLinear:nm,inverseLerp:im,lerp:zr,damp:sm,pingpong:rm,smoothstep:om,smootherstep:am,randInt:lm,randFloat:cm,randFloatSpread:um,seededRandom:hm,degToRad:dm,radToDeg:fm,isPowerOfTwo:pm,ceilPowerOfTwo:mm,floorPowerOfTwo:gm,setQuaternionFromProperEuler:_m,normalize:dn,denormalize:qs},Hu=class Hu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hu.prototype.isVector2=!0;let Te=Hu;class Ni{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],p=i[s+3],h=r[o+0],m=r[o+1],d=r[o+2],_=r[o+3];if(p!==_||l!==h||c!==m||u!==d){let g=l*h+c*m+u*d+p*_;g<0&&(h=-h,m=-m,d=-d,_=-_,g=-g);let f=1-a;if(g<.9995){const M=Math.acos(g),A=Math.sin(M);f=Math.sin(f*M)/A,a=Math.sin(a*M)/A,l=l*f+h*a,c=c*f+m*a,u=u*f+d*a,p=p*f+_*a}else{l=l*f+h*a,c=c*f+m*a,u=u*f+d*a,p=p*f+_*a;const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],p=r[o],h=r[o+1],m=r[o+2],d=r[o+3];return e[t]=a*d+u*p+l*m-c*h,e[t+1]=l*d+u*h+c*p-a*m,e[t+2]=c*d+u*m+a*h-l*p,e[t+3]=u*d-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),p=a(r/2),h=l(i/2),m=l(s/2),d=l(r/2);switch(o){case"XYZ":this._x=h*u*p+c*m*d,this._y=c*m*p-h*u*d,this._z=c*u*d+h*m*p,this._w=c*u*p-h*m*d;break;case"YXZ":this._x=h*u*p+c*m*d,this._y=c*m*p-h*u*d,this._z=c*u*d-h*m*p,this._w=c*u*p+h*m*d;break;case"ZXY":this._x=h*u*p-c*m*d,this._y=c*m*p+h*u*d,this._z=c*u*d+h*m*p,this._w=c*u*p-h*m*d;break;case"ZYX":this._x=h*u*p-c*m*d,this._y=c*m*p+h*u*d,this._z=c*u*d-h*m*p,this._w=c*u*p+h*m*d;break;case"YZX":this._x=h*u*p+c*m*d,this._y=c*m*p+h*u*d,this._z=c*u*d-h*m*p,this._w=c*u*p-h*m*d;break;case"XZY":this._x=h*u*p-c*m*d,this._y=c*m*p-h*u*d,this._z=c*u*d+h*m*p,this._w=c*u*p+h*m*d;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wu=class Wu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),p=2*(r*i-o*t);return this.x=t+l*c+o*p-a*u,this.y=i+l*u+a*c-r*p,this.z=s+l*p+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;let k=Wu;const Ll=new k,fh=new Ni,qu=class qu{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],p=i[7],h=i[2],m=i[5],d=i[8],_=s[0],g=s[3],f=s[6],M=s[1],A=s[4],x=s[7],E=s[2],b=s[5],w=s[8];return r[0]=o*_+a*M+l*E,r[3]=o*g+a*A+l*b,r[6]=o*f+a*x+l*w,r[1]=c*_+u*M+p*E,r[4]=c*g+u*A+p*b,r[7]=c*f+u*x+p*w,r[2]=h*_+m*M+d*E,r[5]=h*g+m*A+d*b,r[8]=h*f+m*x+d*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*r,m=c*r-o*l,d=t*p+i*h+s*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/d;return e[0]=p*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qu.prototype.isMatrix3=!0;let nt=qu;const Il=new nt,ph=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vm(){const n={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Wr]:{primaries:e,whitePoint:i,transfer:qr,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const pt=vm();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ls;class ff{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=Ba("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xm=0;class ol{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let ym=0;const Nl=new k;class sn extends Oi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=ui,s=ui,r=tn,o=Xi,a=On,l=yn,c=sn.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Es(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=jc;sn.DEFAULT_ANISOTROPY=1;const Xu=class Xu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],m=l[5],d=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+_)<.1&&Math.abs(d+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(m+1)/2,E=(f+1)/2,b=(u+h)/4,w=(p+_)/4,v=(d+g)/4;return A>x&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=b/i,r=w/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=w/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-d)*(g-d)+(p-_)*(p-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-d)/M,this.y=(p-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xu.prototype.isVector4=!0;let Ft=Xu;class pf extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ol(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends pf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class au extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $a=class $a{constructor(e,t,i,s,r,o,a,l,c,u,p,h,m,d,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,p,h,m,d,_,g)}set(e,t,i,s,r,o,a,l,c,u,p,h,m,d,_,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=h,f[3]=m,f[7]=d,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*p,d=a*u,_=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+d*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=d+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*p,d=c*u,_=c*p;t[0]=h+_*a,t[4]=d*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=m*a-d,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*p,d=c*u,_=c*p;t[0]=h-_*a,t[4]=-o*p,t[8]=d+m*a,t[1]=m+d*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*p,d=a*u,_=a*p;t[0]=l*u,t[4]=d*c-m,t[8]=h*c+_,t[1]=l*p,t[5]=_*c+h,t[9]=m*c-d,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,d=a*l,_=a*c;t[0]=l*u,t[4]=_-h*p,t[8]=d*p+m,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*p+d,t[10]=h-_*p}else if(e.order==="XZY"){const h=o*l,m=o*c,d=a*l,_=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+_,t[5]=o*u,t[9]=m*p-d,t[2]=d*p-m,t[6]=a*u,t[10]=_*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mm,e,Sm)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Gi.crossVectors(i,bn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Gi.crossVectors(i,bn)),Gi.normalize(),po.crossVectors(bn,Gi),s[0]=Gi.x,s[4]=po.x,s[8]=bn.x,s[1]=Gi.y,s[5]=po.y,s[9]=bn.y,s[2]=Gi.z,s[6]=po.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],p=i[5],h=i[9],m=i[13],d=i[2],_=i[6],g=i[10],f=i[14],M=i[3],A=i[7],x=i[11],E=i[15],b=s[0],w=s[4],v=s[8],R=s[12],T=s[1],D=s[5],q=s[9],H=s[13],z=s[2],L=s[6],O=s[10],B=s[14],K=s[3],X=s[7],$=s[11],te=s[15];return r[0]=o*b+a*T+l*z+c*K,r[4]=o*w+a*D+l*L+c*X,r[8]=o*v+a*q+l*O+c*$,r[12]=o*R+a*H+l*B+c*te,r[1]=u*b+p*T+h*z+m*K,r[5]=u*w+p*D+h*L+m*X,r[9]=u*v+p*q+h*O+m*$,r[13]=u*R+p*H+h*B+m*te,r[2]=d*b+_*T+g*z+f*K,r[6]=d*w+_*D+g*L+f*X,r[10]=d*v+_*q+g*O+f*$,r[14]=d*R+_*H+g*B+f*te,r[3]=M*b+A*T+x*z+E*K,r[7]=M*w+A*D+x*L+E*X,r[11]=M*v+A*q+x*O+E*$,r[15]=M*R+A*H+x*B+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],m=e[14],d=e[3],_=e[7],g=e[11],f=e[15],M=l*m-c*h,A=a*m-c*p,x=a*h-l*p,E=o*m-c*u,b=o*h-l*u,w=o*p-a*u;return t*(_*M-g*A+f*x)-i*(d*M-g*E+f*b)+s*(d*A-_*E+f*w)-r*(d*x-_*b+g*w)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],m=e[11],d=e[12],_=e[13],g=e[14],f=e[15],M=t*a-i*o,A=t*l-s*o,x=t*c-r*o,E=i*l-s*a,b=i*c-r*a,w=s*c-r*l,v=u*_-p*d,R=u*g-h*d,T=u*f-m*d,D=p*g-h*_,q=p*f-m*_,H=h*f-m*g,z=M*H-A*q+x*D+E*T-b*R+w*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/z;return e[0]=(a*H-l*q+c*D)*L,e[1]=(s*q-i*H-r*D)*L,e[2]=(_*w-g*b+f*E)*L,e[3]=(h*b-p*w-m*E)*L,e[4]=(l*T-o*H-c*R)*L,e[5]=(t*H-s*T+r*R)*L,e[6]=(g*x-d*w-f*A)*L,e[7]=(u*w-h*x+m*A)*L,e[8]=(o*q-a*T+c*v)*L,e[9]=(i*T-t*q-r*v)*L,e[10]=(d*b-_*x+f*M)*L,e[11]=(p*x-u*b-m*M)*L,e[12]=(a*R-o*D-l*v)*L,e[13]=(t*D-i*R+s*v)*L,e[14]=(_*A-d*E-g*M)*L,e[15]=(u*E-p*A+h*M)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,p=a+a,h=r*c,m=r*u,d=r*p,_=o*u,g=o*p,f=a*p,M=l*c,A=l*u,x=l*p,E=i.x,b=i.y,w=i.z;return s[0]=(1-(_+f))*E,s[1]=(m+x)*E,s[2]=(d-A)*E,s[3]=0,s[4]=(m-x)*b,s[5]=(1-(h+f))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(d+A)*w,s[9]=(g-M)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);const c=1/o,u=1/a,p=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=p,Wn.elements[9]*=p,Wn.elements[10]*=p,t.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2*r/(t-e),p=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s);let d,_;if(l)d=r/(o-r),_=o*r/(o-r);else if(a===Kn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===sr)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2/(t-e),p=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s);let d,_;if(l)d=1/(o-r),_=o/(o-r);else if(a===Kn)d=-2/(o-r),_=-(o+r)/(o-r);else if(a===sr)d=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};$a.prototype.isMatrix4=!0;let xt=$a;const Is=new k,Wn=new xt,Mm=new k(0,0,0),Sm=new k(1,1,1),Gi=new k,po=new k,bn=new k,gh=new xt,_h=new Ni;class Ui{constructor(e=0,t=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const vh=new k,Ds=new Ni,vi=new xt,mo=new k,pr=new k,Em=new k,wm=new Ni,xh=new k(1,0,0),yh=new k(0,1,0),Mh=new k(0,0,1),Sh={type:"added"},Tm={type:"removed"},Ns={type:"childadded",child:null},Ul={type:"childremoved",child:null};class Vt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new k,t=new Ui,i=new Ni,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new nt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(pr,mo,this.up):vi.lookAt(mo,pr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(vi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tm),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),d=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),d.length>0&&(i.nodes=d)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new k(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $i extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,d=.005;c.inputState.pinching&&h>m+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=ou(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ol(o,r,e+1/3),this.g=Ol(o,r,e),this.b=Ol(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return pt.workingToColorSpace(ln.copy(this),e),Math.round(ct(ln.r*255,0,255))*65536+Math.round(ct(ln.g*255,0,255))*256+Math.round(ct(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){pt.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(go);const i=zr(Vi.h,go.h,t),s=zr(Vi.s,go.s,t),r=zr(Vi.l,go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ut;ut.NAMES=gf;class ll{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new ll(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _f extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new k,xi=new k,Fl=new k,yi=new k,Us=new k,Os=new k,bh=new k,zl=new k,kl=new k,Bl=new k,Gl=new Ft,Vl=new Ft,Hl=new Ft;class Dn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),xi.subVectors(i,t),Fl.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(xi),l=qn.dot(Fl),c=xi.dot(xi),u=xi.dot(Fl),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(c*l-a*u)*h,d=(o*u-a*l)*h;return r.set(1-m-d,d,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Gl.setScalar(0),Vl.setScalar(0),Hl.setScalar(0),Gl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,i),Hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gl,r.x),o.addScaledVector(Vl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),xi.subVectors(e,t),qn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),qn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Os.subVectors(r,i),zl.subVectors(e,i);const l=Us.dot(zl),c=Os.dot(zl);if(l<=0&&c<=0)return t.copy(i);kl.subVectors(e,s);const u=Us.dot(kl),p=Os.dot(kl);if(u>=0&&p<=u)return t.copy(s);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Us,o);Bl.subVectors(e,r);const m=Us.dot(Bl),d=Os.dot(Bl);if(d>=0&&m<=d)return t.copy(r);const _=m*c-l*d;if(_<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(Os,a);const g=u*d-m*p;if(g<=0&&p-u>=0&&m-d>=0)return bh.subVectors(r,s),a=(p-u)/(p-u+(m-d)),t.copy(s).addScaledVector(bh,a);const f=1/(g+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Us,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class is{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),vo.subVectors(this.max,mr),Fs.subVectors(e.a,mr),zs.subVectors(e.b,mr),ks.subVectors(e.c,mr),Hi.subVectors(zs,Fs),Wi.subVectors(ks,zs),ls.subVectors(Fs,ks);let t=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-ls.z,ls.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,ls.z,0,-ls.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-ls.y,ls.x,0];return!Wl(t,Fs,zs,ks,vo)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,Fs,zs,ks,vo))?!1:(xo.crossVectors(Hi,Wi),t=[xo.x,xo.y,xo.z],Wl(t,Fs,zs,ks,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new k,new k,new k,new k,new k,new k,new k,new k],Xn=new k,_o=new is,Fs=new k,zs=new k,ks=new k,Hi=new k,Wi=new k,ls=new k,mr=new k,vo=new k,xo=new k,cs=new k;function Wl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){cs.fromArray(n,r);const a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qt=new k,yo=new Te;let Cm=0;class zn extends Oi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uf,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lu extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cu extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rm=new is,gr=new k,ql=new k;class ss{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(ql)),this.expandByPoint(gr.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Pm=0;const Cn=new xt,Xl=new Vt,Bs=new k,En=new is,_r=new is,Kt=new k;class Ht extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?cu:lu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(En.min,_r.min),En.expandByPoint(Kt),Kt.addVectors(En.max,_r.max),En.expandByPoint(Kt)):(En.expandByPoint(_r.min),En.expandByPoint(_r.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Kt.add(Bs)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new zn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new k,l[v]=new k;const c=new k,u=new k,p=new k,h=new Te,m=new Te,d=new Te,_=new k,g=new k;function f(v,R,T){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,R),p.fromBufferAttribute(i,T),h.fromBufferAttribute(r,v),m.fromBufferAttribute(r,R),d.fromBufferAttribute(r,T),u.sub(c),p.sub(c),m.sub(h),d.sub(h);const D=1/(m.x*d.y-d.x*m.y);isFinite(D)&&(_.copy(u).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(D),g.copy(p).multiplyScalar(m.x).addScaledVector(u,-d.x).multiplyScalar(D),a[v].add(_),a[R].add(_),a[T].add(_),l[v].add(g),l[R].add(g),l[T].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,R=M.length;v<R;++v){const T=M[v],D=T.start,q=T.count;for(let H=D,z=D+q;H<z;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const A=new k,x=new k,E=new k,b=new k;function w(v){E.fromBufferAttribute(s,v),b.copy(E);const R=a[v];A.copy(R),A.sub(E.multiplyScalar(E.dot(R))).normalize(),x.crossVectors(b,R);const D=x.dot(l[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,R=M.length;v<R;++v){const T=M[v],D=T.start,q=T.count;for(let H=D,z=D+q;H<z;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,p=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const d=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(i,d),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let m=0,d=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let f=0;f<u;f++)h[d++]=c[m++]}return new zn(h,u,p)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],p=r[c];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new k,Lm=new k,Im=new nt;class ci{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yl.subVectors(i,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Im.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Dm=0;class rs extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ks,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=qc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ci().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new k,$l=new k,Mo=new k,So=new k;class cr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$l.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),So.copy(this.origin).sub($l);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=So.dot(this.direction),l=-So.dot(Mo),c=So.lengthSq(),u=Math.abs(1-o*o);let p,h,m,d;if(u>0)if(p=o*l-a,h=o*a-l,d=r*u,p>=0)if(h>=-d)if(h<=d){const _=1/u;p*=_,h*=_,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-d?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c):h<=d?(p=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+h*(h+2*l)+c);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy($l).addScaledVector(Mo,h),m}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,p=e.x-o.x,h=e.y-o.y,m=e.z-o.z,d=t.x-o.x,_=t.y-o.y,g=t.z-o.z,f=i.x-o.x,M=i.y-o.y,A=i.z-o.z,x=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let w,v,R,T,D,q,H,z,L,O,B,K;if(x>=E&&x>=b?(R=l,q=p,L=d,K=f,l>=0?(w=c,v=u,T=h,D=m,H=_,z=g,O=M,B=A):(w=u,v=c,T=m,D=h,H=g,z=_,O=A,B=M)):E>=b?(R=c,q=h,L=_,K=M,c>=0?(w=u,v=l,T=m,D=p,H=g,z=d,O=A,B=f):(w=l,v=u,T=p,D=m,H=d,z=g,O=f,B=A)):(R=u,q=m,L=g,K=A,u>=0?(w=l,v=c,T=p,D=h,H=d,z=_,O=f,B=M):(w=c,v=l,T=h,D=p,H=_,z=d,O=M,B=f)),R===0)return null;const X=w/R,$=v/R,te=1/R,ee=T-X*q,ce=D-$*q,le=H-X*L,fe=z-$*L,N=O-X*K,y=B-$*K,F=N*fe-y*le,Q=ee*y-ce*N,Z=le*ce-fe*ee;if(s){if(F<0||Q<0||Z<0)return null}else if((F<0||Q<0||Z<0)&&(F>0||Q>0||Z>0))return null;const C=F+Q+Z;if(C===0)return null;const P=te*(F*q+Q*L+Z*K);return(C>0?P<0:P>0)?null:this.at(P/C,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eo extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Eh=new xt,us=new cr,bo=new ss,wh=new k,Eo=new k,wo=new k,To=new k,Jl=new k,Ao=new k,Th=new k,Co=new k;class _n extends Vt{constructor(e=new Ht,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],p=r[l];u!==0&&(Jl.fromBufferAttribute(p,e),o?Ao.addScaledVector(Jl,u):Ao.addScaledVector(Jl.sub(t),u))}t.add(Ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(bo.containsPoint(us.origin)===!1&&(us.intersectSphere(bo,wh)===null||us.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),us.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,_=h.length;d<_;d++){const g=h[d],f=o[g.materialIndex],M=Math.max(g.start,m.start),A=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let x=M,E=A;x<E;x+=3){const b=a.getX(x),w=a.getX(x+1),v=a.getX(x+2);s=Ro(this,f,e,i,c,u,p,b,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const d=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let g=d,f=_;g<f;g+=3){const M=a.getX(g),A=a.getX(g+1),x=a.getX(g+2);s=Ro(this,o,e,i,c,u,p,M,A,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let d=0,_=h.length;d<_;d++){const g=h[d],f=o[g.materialIndex],M=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let x=M,E=A;x<E;x+=3){const b=x,w=x+1,v=x+2;s=Ro(this,f,e,i,c,u,p,b,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const d=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=d,f=_;g<f;g+=3){const M=g,A=g+1,x=g+2;s=Ro(this,o,e,i,c,u,p,M,A,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Nm(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:n}}function Ro(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Eo),n.getVertexPosition(l,wo),n.getVertexPosition(c,To);const u=Nm(n,e,t,i,Eo,wo,To,Th);if(u){const p=new k;Dn.getBarycoord(Th,Eo,wo,To,p),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,p,new Te)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,p,new Te)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,p,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Dn.getNormal(Eo,wo,To,h.normal),u.face=h,u.barycoord=p}return u}class uu extends sn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Qt,u=Qt,p,h){super(null,o,a,l,c,u,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends zn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new xt,Ah=new xt,Po=[],Ch=new is,Um=new xt,vr=new _n,xr=new ss;class Sc extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Um)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Ch.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),xr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Ah.multiplyMatrices(i,Gs),vr.matrixWorld=Ah,vr.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){const l=Po[o];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new uu(new Float32Array(s*this.count),s,this.count,el,Un));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hs=new ss,Om=new Te(.5,.5),Lo=new k;class cl{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],p=r[5],h=r[6],m=r[7],d=r[8],_=r[9],g=r[10],f=r[11],M=r[12],A=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-o,m-u,f-d,E-M).normalize(),s[1].setComponents(c+o,m+u,f+d,E+M).normalize(),s[2].setComponents(c+a,m+p,f+_,E+A).normalize(),s[3].setComponents(c-a,m-p,f-_,E-A).normalize(),i)s[4].setComponents(l,h,g,x).normalize(),s[5].setComponents(c-l,m-h,f-g,E-x).normalize();else if(s[4].setComponents(c-l,m-h,f-g,E-x).normalize(),t===Kn)s[5].setComponents(c+l,m+h,f+g,E+x).normalize();else if(t===sr)s[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=Om.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hu extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new k,Va=new k,Rh=new xt,yr=new cr,Io=new ss,Zl=new k,Ph=new k;class Fm extends Vt{constructor(e=new Ht,t=new hu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Va.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Va);e.setAttribute("lineDistance",new yt(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;Rh.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=m,g=d-1;_<g;_+=c){const f=u.getX(_),M=u.getX(_+1),A=Do(this,e,yr,l,f,M,_);A&&t.push(A)}if(this.isLineLoop){const _=u.getX(d-1),g=u.getX(m),f=Do(this,e,yr,l,_,g,d-1);f&&t.push(f)}}else{const m=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=m,g=d-1;_<g;_+=c){const f=Do(this,e,yr,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Do(this,e,yr,l,d-1,m,d-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Do(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ga.fromBufferAttribute(a,s),Va.fromBufferAttribute(a,r),t.distanceSqToSegment(Ga,Va,Zl,Ph)>i)return;Zl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Zl);if(!(c<e.near||c>e.far))return{distance:c,point:Ph.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class du extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lh=new xt,bc=new cr,No=new ss,Uo=new k;class vf extends Vt{constructor(e=new Ht,t=new du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Lh.copy(s).invert(),bc.copy(e.ray).applyMatrix4(Lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let d=h,_=m;d<_;d++){const g=c.getX(d);Uo.fromBufferAttribute(p,g),Ih(Uo,g,l,s,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let d=h,_=m;d<_;d++)Uo.fromBufferAttribute(p,d),Ih(Uo,d,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ih(n,e,t,i,s,r,o){const a=bc.distanceSqToPoint(n);if(a<t){const l=new k;bc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fu extends sn{constructor(e=[],t=es,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pu extends sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rr extends sn{constructor(e,t,i=ti,s,r,o,a=Qt,l=Qt,c,u=gi,p=1){if(u!==gi&&u!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class xf extends rr{constructor(e,t=ti,i=es,s,r,o=Qt,a=Qt,l,c=gi){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mu extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,m=0;d("z","y","x",-1,-1,i,t,e,o,r,0),d("z","y","x",1,-1,i,t,-e,o,r,1),d("x","z","y",1,1,e,i,t,s,o,2),d("x","z","y",1,-1,e,i,-t,s,o,3),d("x","y","z",1,-1,e,t,i,s,r,4),d("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function d(_,g,f,M,A,x,E,b,w,v,R){const T=x/w,D=E/v,q=x/2,H=E/2,z=b/2,L=w+1,O=v+1;let B=0,K=0;const X=new k;for(let $=0;$<O;$++){const te=$*D-H;for(let ee=0;ee<L;ee++){const ce=ee*T-q;X[_]=ce*M,X[g]=te*A,X[f]=z,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[f]=b>0?1:-1,u.push(X.x,X.y,X.z),p.push(ee/w),p.push(1-$/v),B+=1}}for(let $=0;$<v;$++)for(let te=0;te<w;te++){const ee=h+te+L*$,ce=h+te+L*($+1),le=h+(te+1)+L*($+1),fe=h+(te+1)+L*$;l.push(ee,ce,fe),l.push(ce,le,fe),K+=6}a.addGroup(m,K,R),m+=K,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ul extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new k,u=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const m=i+p/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class to extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],h=[],m=[];let d=0;const _=[],g=i/2;let f=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(m,2));function M(){const x=new k,E=new k;let b=0;const w=(t-e)/i;for(let v=0;v<=r;v++){const R=[],T=v/r,D=T*(t-e)+e;for(let q=0;q<=s;q++){const H=q/s,z=H*l+a,L=Math.sin(z),O=Math.cos(z);E.x=D*L,E.y=-T*i+g,E.z=D*O,p.push(E.x,E.y,E.z),x.set(L,w,O).normalize(),h.push(x.x,x.y,x.z),m.push(H,1-T),R.push(d++)}_.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){const T=_[R][v],D=_[R+1][v],q=_[R+1][v+1],H=_[R][v+1];(e>0||R!==0)&&(u.push(T,D,H),b+=3),(t>0||R!==r-1)&&(u.push(D,q,H),b+=3)}c.addGroup(f,b,0),f+=b}function A(x){const E=d,b=new Te,w=new k;let v=0;const R=x===!0?e:t,T=x===!0?1:-1;for(let q=1;q<=s;q++)p.push(0,g*T,0),h.push(0,T,0),m.push(.5,.5),d++;const D=d;for(let q=0;q<=s;q++){const z=q/s*l+a,L=Math.cos(z),O=Math.sin(z);w.x=R*O,w.y=g*T,w.z=R*L,p.push(w.x,w.y,w.z),h.push(0,T,0),b.x=L*.5+.5,b.y=O*.5*T+.5,m.push(b.x,b.y),d++}for(let q=0;q<s;q++){const H=E+q,z=D+q;x===!0?u.push(z,z+1,H):u.push(z+1,z,H),v+=3}c.addGroup(f,v,x===!0?1:2),f+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends to{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ws(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hl extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const A=new k,x=new k,E=new k;for(let b=0;b<t.length;b+=3)m(t[b+0],A),m(t[b+1],x),m(t[b+2],E),l(A,x,E,M)}function l(M,A,x,E){const b=E+1,w=[];for(let v=0;v<=b;v++){w[v]=[];const R=M.clone().lerp(x,v/b),T=A.clone().lerp(x,v/b),D=b-v;for(let q=0;q<=D;q++)q===0&&v===b?w[v][q]=R:w[v][q]=R.clone().lerp(T,q/D)}for(let v=0;v<b;v++)for(let R=0;R<2*(b-v)-1;R++){const T=Math.floor(R/2);R%2===0?(h(w[v][T+1]),h(w[v+1][T]),h(w[v][T])):(h(w[v][T+1]),h(w[v+1][T+1]),h(w[v+1][T]))}}function c(M){const A=new k;for(let x=0;x<r.length;x+=3)A.x=r[x+0],A.y=r[x+1],A.z=r[x+2],A.normalize().multiplyScalar(M),r[x+0]=A.x,r[x+1]=A.y,r[x+2]=A.z}function u(){const M=new k;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];const x=g(M)/2/Math.PI+.5,E=f(M)/Math.PI+.5;o.push(x,1-E)}d(),p()}function p(){for(let M=0;M<o.length;M+=6){const A=o[M+0],x=o[M+2],E=o[M+4],b=Math.max(A,x,E),w=Math.min(A,x,E);b>.9&&w<.1&&(A<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function m(M,A){const x=M*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function d(){const M=new k,A=new k,x=new k,E=new k,b=new Te,w=new Te,v=new Te;for(let R=0,T=0;R<r.length;R+=9,T+=6){M.set(r[R+0],r[R+1],r[R+2]),A.set(r[R+3],r[R+4],r[R+5]),x.set(r[R+6],r[R+7],r[R+8]),b.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),v.set(o[T+4],o[T+5]),E.copy(M).add(A).add(x).divideScalar(3);const D=g(E);_(b,T+0,M,D),_(w,T+2,A,D),_(v,T+4,x,D)}}function _(M,A,x,E){E<0&&M.x===1&&(o[A]=M.x-1),x.x===0&&x.z===0&&(o[A]=E/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.vertices,e.indices,e.radius,e.detail)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,m=(o-u)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Te:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,s=[],r=[],o=[],a=new k,l=new xt;for(let m=0;m<=e;m++){const d=m/e;s[m]=this.getTangentAt(d,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const d=Math.acos(ct(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,d))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(ct(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let d=1;d<=e;d++)r[d].applyMatrix4(l.makeRotationAxis(s[d],m*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dl extends ii{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*p+this.aX,c=h*p+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yf extends dl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,p){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+p)+(l-a)/p;h*=u,m*=u,s(o,a,h,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Dh=new k,Nh=new k,Kl=new gu,Ql=new gu,jl=new gu;class _u extends ii{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Nh.subVectors(s[0],s[1]).add(s[0]),c=Nh);const p=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Dh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Dh),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(u),m);_<1e-4&&(_=1),d<1e-4&&(d=_),g<1e-4&&(g=_),Kl.initNonuniformCatmullRom(c.x,p.x,h.x,u.x,d,_,g),Ql.initNonuniformCatmullRom(c.y,p.y,h.y,u.y,d,_,g),jl.initNonuniformCatmullRom(c.z,p.z,h.z,u.z,d,_,g)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(c.x,p.x,h.x,u.x,this.tension),Ql.initCatmullRom(c.y,p.y,h.y,u.y,this.tension),jl.initCatmullRom(c.z,p.z,h.z,u.z,this.tension));return i.set(Kl.calc(l),Ql.calc(l),jl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function zm(n,e){const t=1-n;return t*t*e}function km(n,e){return 2*(1-n)*n*e}function Bm(n,e){return n*n*e}function kr(n,e,t,i){return zm(n,e)+km(n,t)+Bm(n,i)}function Gm(n,e){const t=1-n;return t*t*t*e}function Vm(n,e){const t=1-n;return 3*t*t*n*e}function Hm(n,e){return 3*(1-n)*n*n*e}function Wm(n,e){return n*n*n*e}function Br(n,e,t,i,s){return Gm(n,e)+Vm(n,t)+Hm(n,i)+Wm(n,s)}class vu extends ii{constructor(e=new Te,t=new Te,i=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mf extends ii{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y),Br(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xu extends ii{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sf extends ii{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yu extends ii{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(e,s.x,r.x,o.x),kr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mu extends ii{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(e,s.x,r.x,o.x),kr(e,s.y,r.y,o.y),kr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Su extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return i.set(Uh(a,l.x,c.x,u.x,p.x),Uh(a,l.y,c.y,u.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Te().fromArray(s))}return this}}var Ha=Object.freeze({__proto__:null,ArcCurve:yf,CatmullRomCurve3:_u,CubicBezierCurve:vu,CubicBezierCurve3:Mf,EllipseCurve:dl,LineCurve:xu,LineCurve3:Sf,QuadraticBezierCurve:yu,QuadraticBezierCurve3:Mu,SplineCurve:Su});class bf extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ha[s.type]().fromJSON(s))}return this}}class Ec extends bf{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new xu(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new yu(this.currentPoint.clone(),new Te(e,t),new Te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new vu(this.currentPoint.clone(),new Te(e,t),new Te(i,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Su(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new dl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class no extends Ec{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ec().fromJSON(s))}return this}}function qm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ef(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Zm(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,p=l;for(let h=t;h<s;h+=t){const m=n[h],d=n[h+1];m<a&&(a=m),d<l&&(l=d),m>u&&(u=m),d>p&&(p=d)}c=Math.max(u-a,p-l),c=c!==0?32767/c:0}return Yr(r,o,t,a,l,c,0),o}function Ef(n,e,t,i,s){let r;if(s===a0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Oh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Oh(o/i|0,n[o],n[o+1],r);return r&&or(r,r.next)&&(Jr(r),r=r.next),r}function bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(or(t,t.next)||zt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Yr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&t0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Ym(n,i,s,r):Xm(n)){e.push(l.i,n.i,c.i),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$m(bs(n),e),Yr(n,e,t,i,s,r,2)):o===2&&Jm(n,e,t,i,s,r):Yr(bs(n),e,t,i,s,r,1);break}}}function Xm(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),p=Math.min(a,l,c),h=Math.max(s,r,o),m=Math.max(a,l,c);let d=i.next;for(;d!==e;){if(d.x>=u&&d.x<=h&&d.y>=p&&d.y<=m&&Ar(s,a,r,l,o,c,d.x,d.y)&&zt(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Ym(n,e,t,i){const s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,p=r.y,h=o.y,m=Math.min(a,l,c),d=Math.min(u,p,h),_=Math.max(a,l,c),g=Math.max(u,p,h),f=wc(m,d,e,t,i),M=wc(_,g,e,t,i);let A=n.prevZ,x=n.nextZ;for(;A&&A.z>=f&&x&&x.z<=M;){if(A.x>=m&&A.x<=_&&A.y>=d&&A.y<=g&&A!==s&&A!==o&&Ar(a,u,l,p,c,h,A.x,A.y)&&zt(A.prev,A,A.next)>=0||(A=A.prevZ,x.x>=m&&x.x<=_&&x.y>=d&&x.y<=g&&x!==s&&x!==o&&Ar(a,u,l,p,c,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;A&&A.z>=f;){if(A.x>=m&&A.x<=_&&A.y>=d&&A.y<=g&&A!==s&&A!==o&&Ar(a,u,l,p,c,h,A.x,A.y)&&zt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;x&&x.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=d&&x.y<=g&&x!==s&&x!==o&&Ar(a,u,l,p,c,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function $m(n,e){let t=n;do{const i=t.prev,s=t.next.next;!or(i,s)&&Tf(i,t,t.next,s)&&$r(i,s)&&$r(s,i)&&(e.push(i.i,t.i,s.i),Jr(t),Jr(t.next),t=n=s),t=t.next}while(t!==n);return bs(t)}function Jm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s0(o,a)){let l=Af(o,a);o=bs(o,o.next),l=bs(l,l.next),Yr(o,e,t,i,s,r,0),Yr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Zm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Ef(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(i0(c))}s.sort(Km);for(let r=0;r<s.length;r++)t=Qm(s[r],t);return t}function Km(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Qm(n,e){const t=jm(n,e);if(!t)return e;const i=Af(t,n);return bs(i,i.next),bs(t,t.next)}function jm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(or(n,t))return t;do{if(or(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const p=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>r&&(r=p,o=t.x<t.next.x?t:t.next,p===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&wf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const p=Math.abs(s-t.y)/(i-t.x);$r(t,n)&&(p<u||p===u&&(t.x>o.x||t.x===o.x&&e0(o,t)))&&(o=t,u=p)}t=t.next}while(t!==a);return o}function e0(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function t0(n,e,t,i){let s=n;do s.z===0&&(s.z=wc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,n0(s)}function n0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function wc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function i0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ar(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wf(n,e,t,i,s,r,o,a)}function s0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!r0(n,e)&&($r(n,e)&&$r(e,n)&&o0(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||or(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function or(n,e){return n.x===e.x&&n.y===e.y}function Tf(n,e,t,i){const s=Fo(zt(n,e,t)),r=Fo(zt(n,e,i)),o=Fo(zt(t,i,n)),a=Fo(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Oo(n,t,e)||r===0&&Oo(n,i,e)||o===0&&Oo(t,n,i)||a===0&&Oo(t,e,i))}function Oo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fo(n){return n>0?1:n<0?-1:0}function r0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $r(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function o0(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Af(n,e){const t=Tc(n.i,n.x,n.y),i=Tc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Oh(n,e,t,i){const s=Tc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class l0{static triangulate(e,t,i=2){return qm(e,t,i)}}class xs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return xs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Fh(e),zh(i,e);let o=e.length;t.forEach(Fh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,zh(i,t[l]);const a=l0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Fh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ur extends Ht{constructor(e=new no([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,d=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:c0;let A,x=!1,E,b,w,v;if(f){A=f.getSpacedPoints(u),x=!0,h=!1;const G=f.isCatmullRomCurve3?f.closed:!1;E=f.computeFrenetFrames(u,G),b=new k,w=new k,v=new k}h||(g=0,m=0,d=0,_=0);const R=a.extractPoints(c);let T=R.shape;const D=R.holes;if(!xs.isClockWise(T)){T=T.reverse();for(let G=0,ne=D.length;G<ne;G++){const U=D[G];xs.isClockWise(U)&&(D[G]=U.reverse())}}function H(G){const U=10000000000000001e-36;let j=G[0];for(let ie=1;ie<=G.length;ie++){const Y=ie%G.length,ae=G[Y],ye=ae.x-j.x,Se=ae.y-j.y,J=ye*ye+Se*Se,ze=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(j.x),Math.abs(j.y)),Ae=U*ze*ze;if(J<=Ae){G.splice(Y,1),ie--;continue}j=ae}}H(T),D.forEach(H);const z=D.length,L=T;for(let G=0;G<z;G++){const ne=D[G];T=T.concat(ne)}function O(G,ne,U){return ne||_t("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(ne,U)}const B=T.length;function K(G,ne,U){let j,ie,Y;const ae=G.x-ne.x,ye=G.y-ne.y,Se=U.x-G.x,J=U.y-G.y,ze=ae*ae+ye*ye,Ae=ae*J-ye*Se;if(Math.abs(Ae)>Number.EPSILON){const W=Math.sqrt(ze),S=Math.sqrt(Se*Se+J*J),oe=ne.x-ye/W,ue=ne.y+ae/W,pe=U.x-J/S,Ee=U.y+Se/S,Ce=((pe-oe)*J-(Ee-ue)*Se)/(ae*J-ye*Se);j=oe+ae*Ce-G.x,ie=ue+ye*Ce-G.y;const _e=j*j+ie*ie;if(_e<=2)return new Te(j,ie);Y=Math.sqrt(_e/2)}else{let W=!1;ae>Number.EPSILON?Se>Number.EPSILON&&(W=!0):ae<-Number.EPSILON?Se<-Number.EPSILON&&(W=!0):Math.sign(ye)===Math.sign(J)&&(W=!0),W?(j=-ye,ie=ae,Y=Math.sqrt(ze)):(j=ae,ie=ye,Y=Math.sqrt(ze/2))}return new Te(j/Y,ie/Y)}const X=[];for(let G=0,ne=L.length,U=ne-1,j=G+1;G<ne;G++,U++,j++)U===ne&&(U=0),j===ne&&(j=0),X[G]=K(L[G],L[U],L[j]);const $=[];let te,ee=X.concat();for(let G=0,ne=z;G<ne;G++){const U=D[G];te=[];for(let j=0,ie=U.length,Y=ie-1,ae=j+1;j<ie;j++,Y++,ae++)Y===ie&&(Y=0),ae===ie&&(ae=0),te[j]=K(U[j],U[Y],U[ae]);$.push(te),ee=ee.concat(te)}let ce;if(g===0)ce=xs.triangulateShape(L,D);else{const G=[],ne=[];for(let U=0;U<g;U++){const j=U/g,ie=m*Math.cos(j*Math.PI/2),Y=d*Math.sin(j*Math.PI/2)+_;for(let ae=0,ye=L.length;ae<ye;ae++){const Se=O(L[ae],X[ae],Y);Q(Se.x,Se.y,-ie),j===0&&G.push(Se)}for(let ae=0,ye=z;ae<ye;ae++){const Se=D[ae];te=$[ae];const J=[];for(let ze=0,Ae=Se.length;ze<Ae;ze++){const W=O(Se[ze],te[ze],Y);Q(W.x,W.y,-ie),j===0&&J.push(W)}j===0&&ne.push(J)}}ce=xs.triangulateShape(G,ne)}const le=ce.length,fe=d+_;for(let G=0;G<B;G++){const ne=h?O(T[G],ee[G],fe):T[G];x?(w.copy(E.normals[0]).multiplyScalar(ne.x),b.copy(E.binormals[0]).multiplyScalar(ne.y),v.copy(A[0]).add(w).add(b),Q(v.x,v.y,v.z)):Q(ne.x,ne.y,0)}for(let G=1;G<=u;G++)for(let ne=0;ne<B;ne++){const U=h?O(T[ne],ee[ne],fe):T[ne];x?(w.copy(E.normals[G]).multiplyScalar(U.x),b.copy(E.binormals[G]).multiplyScalar(U.y),v.copy(A[G]).add(w).add(b),Q(v.x,v.y,v.z)):Q(U.x,U.y,p/u*G)}for(let G=g-1;G>=0;G--){const ne=G/g,U=m*Math.cos(ne*Math.PI/2),j=d*Math.sin(ne*Math.PI/2)+_;for(let ie=0,Y=L.length;ie<Y;ie++){const ae=O(L[ie],X[ie],j);Q(ae.x,ae.y,p+U)}for(let ie=0,Y=D.length;ie<Y;ie++){const ae=D[ie];te=$[ie];for(let ye=0,Se=ae.length;ye<Se;ye++){const J=O(ae[ye],te[ye],j);x?Q(J.x,J.y+A[u-1].y,A[u-1].x+U):Q(J.x,J.y,p+U)}}}N(),y();function N(){const G=s.length/3;if(h){let ne=0,U=B*ne;for(let j=0;j<le;j++){const ie=ce[j];Z(ie[2]+U,ie[1]+U,ie[0]+U)}ne=u+g*2,U=B*ne;for(let j=0;j<le;j++){const ie=ce[j];Z(ie[0]+U,ie[1]+U,ie[2]+U)}}else{for(let ne=0;ne<le;ne++){const U=ce[ne];Z(U[2],U[1],U[0])}for(let ne=0;ne<le;ne++){const U=ce[ne];Z(U[0]+B*u,U[1]+B*u,U[2]+B*u)}}i.addGroup(G,s.length/3-G,0)}function y(){const G=s.length/3;let ne=0;F(L,ne),ne+=L.length;for(let U=0,j=D.length;U<j;U++){const ie=D[U];F(ie,ne),ne+=ie.length}i.addGroup(G,s.length/3-G,1)}function F(G,ne){let U=G.length;for(;--U>=0;){const j=U;let ie=U-1;ie<0&&(ie=G.length-1);for(let Y=0,ae=u+g*2;Y<ae;Y++){const ye=B*Y,Se=B*(Y+1),J=ne+j+ye,ze=ne+ie+ye,Ae=ne+ie+Se,W=ne+j+Se;C(J,ze,Ae,W)}}}function Q(G,ne,U){l.push(G),l.push(ne),l.push(U)}function Z(G,ne,U){P(G),P(ne),P(U);const j=s.length/3,ie=M.generateTopUV(i,s,j-3,j-2,j-1);V(ie[0]),V(ie[1]),V(ie[2])}function C(G,ne,U,j){P(G),P(ne),P(j),P(ne),P(U),P(j);const ie=s.length/3,Y=M.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);V(Y[0]),V(Y[1]),V(Y[3]),V(Y[1]),V(Y[2]),V(Y[3])}function P(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function V(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return u0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ha[s.type]().fromJSON(s)),new ur(i,e.options)}}const c0={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,l),new Te(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],p=e[i*3+2],h=e[s*3],m=e[s*3+1],d=e[s*3+2],_=e[r*3],g=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-p),new Te(h,1-d),new Te(_,1-f)]:[new Te(a,1-l),new Te(u,1-p),new Te(m,1-d),new Te(g,1-f)]}};function u0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class io extends hl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new io(e.radius,e.detail)}}class Ts extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,p=e/a,h=t/l,m=[],d=[],_=[],g=[];for(let f=0;f<u;f++){const M=f*h-o;for(let A=0;A<c;A++){const x=A*p-r;d.push(x,-M,0),_.push(0,0,1),g.push(A/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const A=M+c*f,x=M+c*(f+1),E=M+1+c*(f+1),b=M+1+c*f;m.push(A,x,b),m.push(x,E,b)}this.setIndex(m),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],p=new k,h=new k,m=[],d=[],_=[],g=[];for(let f=0;f<=i;f++){const M=[],A=f/i,x=o+A*a,E=e*Math.cos(x),b=Math.sqrt(e*e-E*E);let w=0;f===0&&o===0?w=.5/t:f===i&&l===Math.PI&&(w=-.5/t);for(let v=0;v<=t;v++){const R=v/t,T=s+R*r;p.x=-b*Math.cos(T),p.y=E,p.z=b*Math.sin(T),d.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),g.push(R+w,1-A),M.push(c++)}u.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){const A=u[f][M+1],x=u[f][M],E=u[f+1][M],b=u[f+1][M+1];(f!==0||o>0)&&m.push(A,x,b),(f!==i-1||l<Math.PI)&&m.push(x,E,b)}this.setIndex(m),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pl extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],p=[],h=new k,m=new k,d=new k;for(let _=0;_<=i;_++){const g=o+_/i*a;for(let f=0;f<=s;f++){const M=f/s*r;m.x=(e+t*Math.cos(g))*Math.cos(M),m.y=(e+t*Math.cos(g))*Math.sin(M),m.z=t*Math.sin(g),c.push(m.x,m.y,m.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),d.subVectors(m,h).normalize(),u.push(d.x,d.y,d.z),p.push(f/s),p.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){const f=(s+1)*_+g-1,M=(s+1)*(_-1)+g-1,A=(s+1)*(_-1)+g,x=(s+1)*_+g;l.push(f,M,x),l.push(M,A,x)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ml extends Ht{constructor(e=new Mu(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Te;let u=new k;const p=[],h=[],m=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(m,2));function _(){for(let A=0;A<t;A++)g(A);g(r===!1?t:0),M(),f()}function g(A){u=e.getPointAt(A/t,u);const x=o.normals[A],E=o.binormals[A];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,v=Math.sin(w),R=-Math.cos(w);l.x=R*x.x+v*E.x,l.y=R*x.y+v*E.y,l.z=R*x.z+v*E.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let A=1;A<=t;A++)for(let x=1;x<=s;x++){const E=(s+1)*(A-1)+(x-1),b=(s+1)*A+(x-1),w=(s+1)*A+x,v=(s+1)*(A-1)+x;d.push(E,b,v),d.push(b,w,v)}}function M(){for(let A=0;A<=t;A++)for(let x=0;x<=s;x++)c.x=A/t,c.y=x/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ml(new Ha[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(kh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(kh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=ar(n[t]);for(const s in i)e[s]=i[s]}return e}function kh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function h0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Rf={clone:ar,merge:fn};var d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ut().setHex(s.value);break;case"v2":this.uniforms[i].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pf extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ys extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lf extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class If extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class p0 extends hu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class gl extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Df extends gl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ec=new xt,Bh=new k,Gh=new k;class bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ec,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===sr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zo=new k,ko=new Ni,oi=new k;class Eu extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zo,ko,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(zo,ko,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new k,Vh=new Te,Hh=new Te;class wn extends Eu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Vh,Hh),t.subVectors(Hh,Vh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class m0 extends bu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class _l extends gl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new m0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class so extends Eu{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class g0 extends bu{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wu extends gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new g0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Vs=-90,Hs=1;class Nf extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Vs,Hs,e,t);s.layers=this.layers,this.add(s);const r=new wn(Vs,Hs,e,t);r.layers=this.layers,this.add(r);const o=new wn(Vs,Hs,e,t);o.layers=this.layers,this.add(o);const a=new wn(Vs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new wn(Vs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new wn(Vs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,m),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Uf extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wh=new xt;class Of{constructor(e,t,i=0,s=1/0){this.ray=new cr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(e,t=!0,i=[]){return Ac(e,this,i,t),i.sort(qh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,i,t);return i.sort(qh),i}}function qh(n,e){return n.distance-e.distance}function Ac(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],e,t,!0)}}class Cc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yu=class Yu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Yu.prototype.isMatrix2=!0;let Rc=Yu;class Ff extends Oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Xh(n,e,t,i){const s=_0(i);switch(t){case su:return n*e;case el:return n*e/s.components*s.byteLength;case tl:return n*e/s.components*s.byteLength;case ts:return n*e*2/s.components*s.byteLength;case nl:return n*e*2/s.components*s.byteLength;case ru:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case il:return n*e*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ua:case da:return Math.max(n,16)*Math.max(e,8)/4;case ca:case ha:return Math.max(n,8)*Math.max(e,8)/2;case fa:case pa:case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ma:case Vr:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Da:case Na:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oa:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hr:case za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _0(n){switch(n){case yn:case eu:return{byteLength:1,components:1};case nr:case tu:case ni:return{byteLength:2,components:1};case Qa:case ja:return{byteLength:2,components:4};case ti:case Ka:case Un:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function v0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const u=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,u);else{p.sort((m,d)=>m.start-d.start);let h=0;for(let m=1;m<p.length;m++){const d=p[h],_=p[m];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++h,p[h]=_)}p.length=h+1;for(let m=0,d=p.length;m<d;m++){const _=p[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gg=`PhysicalMaterial material;
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
#endif`,_g=`uniform sampler2D dfgLUT;
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
}`,vg=`
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rg=`#if defined( USE_POINTS_UV )
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
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vg=`#ifdef USE_NORMALMAP
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
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s_=`float getShadowMask() {
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
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,A_=`#define DISTANCE
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
}`,C_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
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
}`,I_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,U_=`#define LAMBERT
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
}`,O_=`#define LAMBERT
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
}`,F_=`#define MATCAP
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
}`,z_=`#define MATCAP
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
}`,k_=`#define NORMAL
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
}`,B_=`#define NORMAL
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
}`,G_=`#define PHONG
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
}`,V_=`#define PHONG
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
}`,H_=`#define STANDARD
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
}`,W_=`#define STANDARD
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
}`,q_=`#define TOON
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
}`,X_=`#define TOON
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
}`,Y_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,Z_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:x0,alphahash_pars_fragment:y0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:b0,alphatest_pars_fragment:E0,aomap_fragment:w0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:C0,begin_vertex:R0,beginnormal_vertex:P0,bsdfs:L0,iridescence_fragment:I0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:F0,color_fragment:z0,color_pars_fragment:k0,color_pars_vertex:B0,color_vertex:G0,common:V0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:W0,displacementmap_pars_vertex:q0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:$0,colorspace_fragment:J0,colorspace_pars_fragment:Z0,envmap_fragment:K0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:j0,envmap_pars_vertex:eg,envmap_physical_pars_fragment:hg,envmap_vertex:tg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:sg,fog_pars_fragment:rg,gradientmap_pars_fragment:og,lightmap_pars_fragment:ag,lights_lambert_fragment:lg,lights_lambert_pars_fragment:cg,lights_pars_begin:ug,lights_toon_fragment:dg,lights_toon_pars_fragment:fg,lights_phong_fragment:pg,lights_phong_pars_fragment:mg,lights_physical_fragment:gg,lights_physical_pars_fragment:_g,lights_fragment_begin:vg,lights_fragment_maps:xg,lights_fragment_end:yg,lightprobes_pars_fragment:Mg,logdepthbuf_fragment:Sg,logdepthbuf_pars_fragment:bg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:wg,map_fragment:Tg,map_pars_fragment:Ag,map_particle_fragment:Cg,map_particle_pars_fragment:Rg,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Ig,morphcolor_vertex:Dg,morphnormal_vertex:Ng,morphtarget_pars_vertex:Ug,morphtarget_vertex:Og,normal_fragment_begin:Fg,normal_fragment_maps:zg,normal_pars_fragment:kg,normal_pars_vertex:Bg,normal_vertex:Gg,normalmap_pars_fragment:Vg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:Wg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:Xg,opaque_fragment:Yg,packing:$g,premultiplied_alpha_fragment:Jg,project_vertex:Zg,dithering_fragment:Kg,dithering_pars_fragment:Qg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:o_,skinning_vertex:a_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:u_,tonemapping_fragment:h_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:__,worldpos_vertex:v_,background_vert:x_,background_frag:y_,backgroundCube_vert:M_,backgroundCube_frag:S_,cube_vert:b_,cube_frag:E_,depth_vert:w_,depth_frag:T_,distance_vert:A_,distance_frag:C_,equirect_vert:R_,equirect_frag:P_,linedashed_vert:L_,linedashed_frag:I_,meshbasic_vert:D_,meshbasic_frag:N_,meshlambert_vert:U_,meshlambert_frag:O_,meshmatcap_vert:F_,meshmatcap_frag:z_,meshnormal_vert:k_,meshnormal_frag:B_,meshphong_vert:G_,meshphong_frag:V_,meshphysical_vert:H_,meshphysical_frag:W_,meshtoon_vert:q_,meshtoon_frag:X_,points_vert:Y_,points_frag:$_,shadow_vert:J_,shadow_frag:Z_,sprite_vert:K_,sprite_frag:Q_},De={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Jn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ut(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Jn.physical={uniforms:fn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Bo={r:0,b:0,g:0},j_=new xt,kf=new nt;kf.set(-1,0,0,0,1,0,0,0,1);function ev(n,e,t,i,s,r){const o=new ut(0);let a=s===!0?0:1,l,c,u=null,p=0,h=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const x=M.backgroundBlurriness>0;A=e.get(A,x)}return A}function d(M){let A=!1;const x=m(M);x===null?g(o,a):x&&x.isColor&&(g(x,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,A){const x=m(A);x&&(x.isCubeTexture||x.mapping===jr)?(c===void 0&&(c=new _n(new Fi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ar(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kf),c.material.toneMapped=pt.getTransfer(x.colorSpace)!==wt,(u!==x||p!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new _n(new Ts(2,2),new Bn({name:"BackgroundMaterial",uniforms:ar(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=pt.getTransfer(x.colorSpace)!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(Bo,Cf(n)),t.buffers.color.setClear(Bo.r,Bo.g,Bo.b,A,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:d,addToRenderList:_,dispose:f}}function tv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,q,H,z,L){let O=!1;const B=p(D,z,H,q);r!==B&&(r=B,c(r.object)),O=m(D,z,H,L),O&&d(D,z,H,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(D,q,H,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function p(D,q,H,z){const L=z.wireframe===!0;let O=i[q.id];O===void 0&&(O={},i[q.id]=O);const B=D.isInstancedMesh===!0?D.id:0;let K=O[B];K===void 0&&(K={},O[B]=K);let X=K[H.id];X===void 0&&(X={},K[H.id]=X);let $=X[L];return $===void 0&&($=h(l()),X[L]=$),$}function h(D){const q=[],H=[],z=[];for(let L=0;L<t;L++)q[L]=0,H[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:H,attributeDivisors:z,object:D,attributes:{},index:null}}function m(D,q,H,z){const L=r.attributes,O=q.attributes;let B=0;const K=H.getAttributes();for(const X in K)if(K[X].location>=0){const te=L[X];let ee=O[X];if(ee===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),te===void 0||te.attribute!==ee||ee&&te.data!==ee.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function d(D,q,H,z){const L={},O=q.attributes;let B=0;const K=H.getAttributes();for(const X in K)if(K[X].location>=0){let te=O[X];te===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));const ee={};ee.attribute=te,te&&te.data&&(ee.data=te.data),L[X]=ee,B++}r.attributes=L,r.attributesNum=B,r.index=z}function _(){const D=r.newAttributes;for(let q=0,H=D.length;q<H;q++)D[q]=0}function g(D){f(D,0)}function f(D,q){const H=r.newAttributes,z=r.enabledAttributes,L=r.attributeDivisors;H[D]=1,z[D]===0&&(n.enableVertexAttribArray(D),z[D]=1),L[D]!==q&&(n.vertexAttribDivisor(D,q),L[D]=q)}function M(){const D=r.newAttributes,q=r.enabledAttributes;for(let H=0,z=q.length;H<z;H++)q[H]!==D[H]&&(n.disableVertexAttribArray(H),q[H]=0)}function A(D,q,H,z,L,O,B){B===!0?n.vertexAttribIPointer(D,q,H,L,O):n.vertexAttribPointer(D,q,H,z,L,O)}function x(D,q,H,z){_();const L=z.attributes,O=H.getAttributes(),B=q.defaultAttributeValues;for(const K in O){const X=O[K];if(X.location>=0){let $=L[K];if($===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const te=$.normalized,ee=$.itemSize,ce=e.get($);if(ce===void 0)continue;const le=ce.buffer,fe=ce.type,N=ce.bytesPerElement,y=fe===n.INT||fe===n.UNSIGNED_INT||$.gpuType===Ka;if($.isInterleavedBufferAttribute){const F=$.data,Q=F.stride,Z=$.offset;if(F.isInstancedInterleavedBuffer){for(let C=0;C<X.locationSize;C++)f(X.location+C,F.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let C=0;C<X.locationSize;C++)g(X.location+C);n.bindBuffer(n.ARRAY_BUFFER,le);for(let C=0;C<X.locationSize;C++)A(X.location+C,ee/X.locationSize,fe,te,Q*N,(Z+ee/X.locationSize*C)*N,y)}else{if($.isInstancedBufferAttribute){for(let F=0;F<X.locationSize;F++)f(X.location+F,$.meshPerAttribute);D.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let F=0;F<X.locationSize;F++)g(X.location+F);n.bindBuffer(n.ARRAY_BUFFER,le);for(let F=0;F<X.locationSize;F++)A(X.location+F,ee/X.locationSize,fe,te,ee*N,ee/X.locationSize*F*N,y)}}else if(B!==void 0){const te=B[K];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}M()}function E(){R();for(const D in i){const q=i[D];for(const H in q){const z=q[H];for(const L in z){const O=z[L];for(const B in O)u(O[B].object),delete O[B];delete z[L]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const q=i[D.id];for(const H in q){const z=q[H];for(const L in z){const O=z[L];for(const B in O)u(O[B].object),delete O[B];delete z[L]}}delete i[D.id]}function w(D){for(const q in i){const H=i[q];for(const z in H){const L=H[z];if(L[D.id]===void 0)continue;const O=L[D.id];for(const B in O)u(O[B].object),delete O[B];delete L[D.id]}}}function v(D){for(const q in i){const H=i[q],z=D.isInstancedMesh===!0?D.id:0,L=H[z];if(L!==void 0){for(const O in L){const B=L[O];for(const K in B)u(B[K].object),delete B[K];delete L[O]}delete H[z],Object.keys(H).length===0&&delete i[q]}}}function R(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function nv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function iv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==On&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const v=w===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==yn&&w!==Un&&!v&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:x,maxSamples:E,samples:b}}function sv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ci,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||s;return s=h,i=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,m){const d=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,f=n.get(p);if(!s||d===null||d.length===0||r&&!g)r?u(null):c();else{const M=r?0:i,A=M*4;let x=f.clippingState||null;l.value=x,x=u(d,h,A,m);for(let E=0;E!==A;++E)x[E]=t[E];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,h,m,d){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=l.value,d!==!0||g===null){const f=m+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,x=m;A!==_;++A,x+=4)o.copy(p[A]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const $s=4,rv=6,ov=20,av=256,Mr=new so,Yh=new ut;let tc=null,nc=0,ic=0,sc=!1;const lv=new k,ds=new k;class Pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=lv}=r;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=sc,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ni,format:On,colorSpace:Wr,depthBuffer:!1},s=$h(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cv(r)),this._blurMaterial=hv(r,e,t),this._ggxMaterial=uv(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Ht,e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,i,s,r){const l=new wn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(Yh),p.toneMapping=Qn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Fi,new eo({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let f=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,f=!0):(g.color.copy(Yh),f=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const E=this._cubeSize;Ws(s,x*E,A>2?E:0,E,E),p.setRenderTarget(s),f&&p.render(_,l),p.render(e,l)}p.toneMapping=m,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===es||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-u*u),h=c*1.25,m=p*h,{_lodMax:d}=this,_=this._sizeLods[i],g=3*_*(i>d-$s?i-d+$s:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=d-t,Ws(r,g,f,3*_,2*_),s.setRenderTarget(r),s.render(a,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=d-i,Ws(e,g,f,3*_,2*_),s.setRenderTarget(e),s.render(a,Mr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],p=3*u*(s>this._lodMax-$s?s-this._lodMax+$s:0),h=4*(this._cubeSize-u);Ws(t,p,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Mr)}}function cv(n){const e=[],t=[];let i=n;const s=n-$s+1+rv;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,m=3,d=new Float32Array(m*h*p),_=new Float32Array(m*h*p);for(let f=0;f<p;f++){const M=f%3*2/3-1,A=f>2?0:-1,x=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];d.set(x,m*h*f);for(let E=0;E<h;E++){const b=u[E*2]*2-1,w=u[E*2+1]*2-1;f===0?ds.set(1,w,b):f===1?ds.set(-b,1,-w):f===2?ds.set(-b,w,1):f===3?ds.set(-1,w,-b):f===4?ds.set(-b,-1,w):ds.set(b,w,-1),ds.toArray(_,(f*h+E)*m)}}const g=new Ht;g.setAttribute("position",new zn(d,m)),g.setAttribute("outputDirection",new zn(_,m)),t.push(new _n(g,null)),i>$s&&i--}return{lodMeshes:t,sizeLods:e}}function $h(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function uv(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function hv(n,e,t){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:ov,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Jh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Zh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Tu extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:fi});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=tn),new Nf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function dv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Wo||m===qo)if(e.has(h)){const d=e.get(h).texture;return a(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const _=new Tu(d.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,d=m===Wo||m===qo,_=m===es||m===Ss;if(d||_){let g=t.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Pc(n)),g=d?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return d&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Pc(n)),g=d?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,m){return m===Wo?h.mapping=es:m===qo&&(h.mapping=Ss),h}function l(h){let m=0;const d=6;for(let _=0;_<d;_++)h[_]!==void 0&&m++;return m===d}function c(h){const m=h.target;m.removeEventListener("dispose",c);const d=e.get(m);d!==void 0&&(e.delete(m),d.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const d=t.get(m);d!==void 0&&(t.delete(m),d.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function fv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("WebGLRenderer: "+i+" extension not supported."),s}}}function pv(n,e,t,i){const s={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(p){const h=[],m=p.index,d=p.attributes.position;let _=0;if(d===void 0)return;if(m!==null){const M=m.array;_=m.version;for(let A=0,x=M.length;A<x;A+=3){const E=M[A+0],b=M[A+1],w=M[A+2];h.push(E,b,b,w,w,E)}}else{const M=d.array;_=d.version;for(let A=0,x=M.length/3-1;A<x;A+=3){const E=A+0,b=A+1,w=A+2;h.push(E,b,b,w,w,E)}}const g=new(d.count>=65535?cu:lu)(h,1);g.version=_;const f=r.get(p);f&&e.remove(f),r.set(p,g)}function u(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function mv(n,e,t){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,h){n.drawElements(i,h,r,p*o),t.update(h,i,1)}function c(p,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,p*o,m),t.update(h,i,m))}function u(p,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,p,0,m);let _=0;for(let g=0;g<m;g++)_+=h[g];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function gv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _v(n,e,t){const i=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let T=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var m=T;h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let E=a.attributes.position.count*x,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*b*4*p),v=new au(w,E,b,p);v.type=Un,v.needsUpdate=!0;const R=x*4;for(let D=0;D<p;D++){const q=f[D],H=M[D],z=A[D],L=E*b*4*D;for(let O=0;O<q.count;O++){const B=O*R;d===!0&&(s.fromBufferAttribute(q,O),w[L+B+0]=s.x,w[L+B+1]=s.y,w[L+B+2]=s.z,w[L+B+3]=0),_===!0&&(s.fromBufferAttribute(H,O),w[L+B+4]=s.x,w[L+B+5]=s.y,w[L+B+6]=s.z,w[L+B+7]=0),g===!0&&(s.fromBufferAttribute(z,O),w[L+B+8]=s.x,w[L+B+9]=s.y,w[L+B+10]=s.z,w[L+B+11]=z.itemSize===4?s.w:1)}}h={count:p,texture:v,size:new Te(E,b)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function vv(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const xv={[Yc]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[Jc]:"CINEON_TONE_MAPPING",[Za]:"ACES_FILMIC_TONE_MAPPING",[Kc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function yv(n,e,t,i,s,r){const o=new Fn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ht;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));const u=new Pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new _n(c,u),h=new so(-1,1,1,-1,0,1);let m=null,d=null,_=!1,g,f=null,M=[],A=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),l!==null&&l.setSize(x,E);for(let b=0;b<M.length;b++){const w=M[b];w.setSize&&w.setSize(x,E)}},this.setEffects=function(x){M=x,A=M.length>0&&M[0].isRenderPass===!0;const E=o.width,b=o.height;M.length>0&&a===null&&(a=new Fn(E,b,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(E,b,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){const v=M[w];v.setSize&&v.setSize(E,b)}},this.begin=function(x,E){if(_||x.toneMapping===Qn&&M.length===0)return!1;if(f=E,E!==null){const b=E.width,w=E.height;(o.width!==b||o.height!==w)&&this.setSize(b,w)}return A===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return A},this.end=function(x,E){x.toneMapping=g,_=!0;let b=o,w=a;for(let v=0;v<M.length;v++){const R=M[v];R.enabled!==!1&&(R.render(x,w,b,E),R.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(m!==x.outputColorSpace||d!==x.toneMapping){m=x.outputColorSpace,d=x.toneMapping,u.defines={},pt.getTransfer(m)===wt&&(u.defines.SRGB_TRANSFER="");const v=xv[d];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(f),x.render(p,h),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Bf=new sn,Lc=new rr(1,1),Gf=new au,Vf=new mf,Hf=new fu,Kh=[],Qh=[],jh=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xl(n,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;td.set(i),n.uniformMatrix2fv(this.addr,!1,td),Zt(t,i)}}function Tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),Zt(t,i)}}function Av(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;jh.set(i),n.uniformMatrix4fv(this.addr,!1,jh),Zt(t,i)}}function Cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function Ov(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lc.compareFunction=t.isReversedDepthBuffer()?rl:sl,r=Lc):r=Bf,t.setTexture2D(e||r,s)}function Fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vf,s)}function zv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hf,s)}function kv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gf,s)}function Bv(n){switch(n){case 5126:return Mv;case 35664:return Sv;case 35665:return bv;case 35666:return Ev;case 35674:return wv;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Cv;case 35667:case 35671:return Rv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Iv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}function Gv(n,e){n.uniform1fv(this.addr,e)}function Vv(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hv(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function Wv(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function qv(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xv(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yv(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $v(n,e){n.uniform1iv(this.addr,e)}function Jv(n,e){n.uniform2iv(this.addr,e)}function Zv(n,e){n.uniform3iv(this.addr,e)}function Kv(n,e){n.uniform4iv(this.addr,e)}function Qv(n,e){n.uniform1uiv(this.addr,e)}function jv(n,e){n.uniform2uiv(this.addr,e)}function ex(n,e){n.uniform3uiv(this.addr,e)}function tx(n,e){n.uniform4uiv(this.addr,e)}function nx(n,e,t){const i=this.cache,s=e.length,r=xl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Lc:o=Bf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ix(n,e,t){const i=this.cache,s=e.length,r=xl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vf,r[o])}function sx(n,e,t){const i=this.cache,s=e.length,r=xl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hf,r[o])}function rx(n,e,t){const i=this.cache,s=e.length,r=xl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gf,r[o])}function ox(n){switch(n){case 5126:return Gv;case 35664:return Vv;case 35665:return Hv;case 35666:return Wv;case 35674:return qv;case 35675:return Xv;case 35676:return Yv;case 5124:case 35670:return $v;case 35667:case 35671:return Jv;case 35668:case 35672:return Zv;case 35669:case 35673:return Kv;case 5125:return Qv;case 36294:return jv;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}class ax{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}}class lx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ox(t.type)}}class cx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function nd(n,e){n.seq.push(e),n.map[e.id]=e}function ux(n,e,t){const i=n.name,s=i.length;for(rc.lastIndex=0;;){const r=rc.exec(i),o=rc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nd(t,c===void 0?new ax(a,n,e):new lx(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new cx(a),nd(t,p)),t=p}}}class Jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ux(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function id(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hx=37297;let dx=0;function fx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sd=new nt;function px(n){pt._getMatrix(sd,pt.workingColorSpace,n);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case qr:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fx(n.getShaderSource(e),a)}else return r}function mx(n,e){const t=px(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const gx={[Yc]:"Linear",[$c]:"Reinhard",[Jc]:"Cineon",[Za]:"ACESFilmic",[Kc]:"AgX",[Qc]:"Neutral",[Zc]:"Custom"};function _x(n,e){const t=gx[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Go=new k;function vx(){pt.getLuminanceCoefficients(Go);const n=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function yx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cr(n){return n!==""}function od(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(Sx,Ex)}const bx=new Map;function Ex(n,e){let t=at[e];if(t===void 0){const i=bx.get(e);if(i!==void 0)t=at[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ic(t)}const wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(n){return n.replace(wx,Tx)}function Tx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Ax={[Zs]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function Cx(n){return Ax[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rx={[es]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function Px(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Rx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Lx={[Ss]:"ENVMAP_MODE_REFRACTION"};function Ix(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Lx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dx={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Kd]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};function Nx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Dx[n.combine]||"ENVMAP_BLENDING_NONE"}function Ux(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ox(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cx(t),c=Px(t),u=Ix(t),p=Nx(t),h=Ux(t),m=xx(t),d=yx(r),_=s.createProgram();let g,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Cr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Cr).join(`
`),f.length>0&&(f+=`
`)):(g=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),f=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?at.tonemapping_pars_fragment:"",t.toneMapping!==Qn?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Ic(o),o=od(o,t),o=ad(o,t),a=Ic(a),a=od(a,t),a=ad(a,t),o=ld(o),a=ld(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=M+g+o,x=M+f+a,E=id(s,s.VERTEX_SHADER,A),b=id(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(E)||"",z=s.getShaderInfoLog(b)||"",L=q.trim(),O=H.trim(),B=z.trim();let K=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,b);else{const $=rd(s,E,"vertex"),te=rd(s,b,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+$+`
`+te)}else L!==""?tt("WebGLProgram: Program Info Log:",L):(O===""||B==="")&&(X=!1);X&&(D.diagnostics={runnable:K,programLog:L,vertexShader:{log:O,prefix:g},fragmentShader:{log:B,prefix:f}})}s.deleteShader(E),s.deleteShader(b),v=new Jo(s,_),R=Mx(s,_)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,hx)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let Fx=0;class zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kx(e),t.set(e,i)),i}}class kx{constructor(e){this.id=Fx++,this.code=e,this.usedTimes=0}}function Bx(n){return n===ts||n===Vr||n===Hr}function Gx(n,e,t,i,s,r){const o=new al,a=new zx,l=new Set,c=[],u=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,R,T,D,q,H){const z=D.fog,L=q.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||O,B),X=K&&K.mapping===jr?K.image.height:null,$=m[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=te!==void 0?te.length:0;let ce=0;L.morphAttributes.position!==void 0&&(ce=1),L.morphAttributes.normal!==void 0&&(ce=2),L.morphAttributes.color!==void 0&&(ce=3);let le,fe,N,y;if($){const Lt=Jn[$];le=Lt.vertexShader,fe=Lt.fragmentShader}else{le=v.vertexShader,fe=v.fragmentShader;const Lt=a.getVertexShaderStage(v),bt=a.getFragmentShaderStage(v);a.update(v,Lt,bt),N=Lt.id,y=bt.id}const F=n.getRenderTarget(),Q=n.state.buffers.depth.getReversed(),Z=q.isInstancedMesh===!0,C=q.isBatchedMesh===!0,P=!!v.map,V=!!v.matcap,G=!!K,ne=!!v.aoMap,U=!!v.lightMap,j=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,Y=!!v.displacementMap,ae=!!v.emissiveMap,ye=!!v.metalnessMap,Se=!!v.roughnessMap,J=v.anisotropy>0,ze=v.clearcoat>0,Ae=v.dispersion>0,W=v.retroreflectivity>0,S=v.iridescence>0,oe=v.sheen>0,ue=v.transmission>0,pe=J&&!!v.anisotropyMap,Ee=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,_e=ze&&!!v.clearcoatRoughnessMap,xe=S&&!!v.iridescenceMap,Re=S&&!!v.iridescenceThicknessMap,Ye=oe&&!!v.sheenColorMap,Ne=oe&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,$e=!!v.specularColorMap,et=!!v.specularIntensityMap,rt=ue&&!!v.transmissionMap,re=ue&&!!v.thicknessMap,Le=!!v.gradientMap,ve=!!v.alphaMap,Ie=v.alphaTest>0,ke=!!v.alphaHash,Me=!!v.extensions;let Je=Qn;v.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=n.toneMapping);const qe={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:fe,defines:v.defines,customVertexShaderID:N,customFragmentShaderID:y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:C,batchingColor:C&&q._colorsTexture!==null,instancing:Z,instancingColor:Z&&q.instanceColor!==null,instancingMorph:Z&&q.morphTexture!==null,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:P,matcap:V,envMap:G,envMapMode:G&&K.mapping,envMapCubeUVHeight:X,aoMap:ne,lightMap:U,bumpMap:j,normalMap:ie,displacementMap:Y,emissiveMap:ae,normalMapObjectSpace:ie&&v.normalMapType===tf,normalMapTangentSpace:ie&&v.normalMapType===ka,packedNormalMap:ie&&v.normalMapType===ka&&Bx(v.normalMap.format),metalnessMap:ye,roughnessMap:Se,anisotropy:J,anisotropyMap:pe,clearcoat:ze,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:_e,dispersion:Ae,retroreflection:W,iridescence:S,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:oe,sheenColorMap:Ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:$e,specularIntensityMap:et,transmission:ue,transmissionMap:rt,thicknessMap:re,gradientMap:Le,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:ke,combine:v.combine,mapUv:P&&d(v.map.channel),aoMapUv:ne&&d(v.aoMap.channel),lightMapUv:U&&d(v.lightMap.channel),bumpMapUv:j&&d(v.bumpMap.channel),normalMapUv:ie&&d(v.normalMap.channel),displacementMapUv:Y&&d(v.displacementMap.channel),emissiveMapUv:ae&&d(v.emissiveMap.channel),metalnessMapUv:ye&&d(v.metalnessMap.channel),roughnessMapUv:Se&&d(v.roughnessMap.channel),anisotropyMapUv:pe&&d(v.anisotropyMap.channel),clearcoatMapUv:Ee&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&d(v.sheenRoughnessMap.channel),specularMapUv:Pe&&d(v.specularMap.channel),specularColorMapUv:$e&&d(v.specularColorMap.channel),specularIntensityMapUv:et&&d(v.specularIntensityMap.channel),transmissionMapUv:rt&&d(v.transmissionMap.channel),thicknessMapUv:re&&d(v.thicknessMap.channel),alphaMapUv:ve&&d(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ie||J),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!L.attributes.uv&&(P||ve),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Q,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:P&&v.map.isVideoTexture===!0&&pt.getTransfer(v.map.colorSpace)===wt,decodeVideoTextureEmissive:ae&&v.emissiveMap.isVideoTexture===!0&&pt.getTransfer(v.emissiveMap.colorSpace)===wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===In,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||C)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function g(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)R.push(T),R.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(f(R,v),M(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function f(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function M(v,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){const R=m[v.type];let T;if(R){const D=Jn[R];T=Rf.clone(D.uniforms)}else T=v.uniforms;return T}function x(v,R){let T=u.get(R);return T!==void 0?++T.usedTimes:(T=new Ox(n,R,v,s),c.push(T),u.set(R,T)),T}function E(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:A,acquireProgram:x,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:w}}function Vx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Hx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,d,_,g,f){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:d,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},n[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=d,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=g,M.group=f),e++,M}function l(h,m,d,_,g,f,M){M.reversedDepth===!0&&(g=-g);const A=a(h,m,d,_,g,f);d.transmission>0?i.push(A):d.transparent===!0?s.push(A):t.push(A)}function c(h,m,d,_,g,f){const M=a(h,m,d,_,g,f);d.transmission>0?i.unshift(M):d.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,m){t.length>1&&t.sort(h||Hx),i.length>1&&i.sort(m||ud),s.length>1&&s.sort(m||ud)}function p(){for(let h=e,m=n.length;h<m;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Wx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new hd,n.set(i,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new ut};break;case"SpotLight":t={position:new k,direction:new k,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yx=0;function $x(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jx(n){const e=new qx,t=Xx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new xt,o=new xt;function a(c){let u=0,p=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let m=0,d=0,_=0,g=0,f=0,M=0,A=0,x=0,E=0,b=0,w=0,v=0,R=0,T=0;c.sort($x);for(let q=0,H=c.length;q<H;q++){const z=c[q],L=z.color,O=z.intensity,B=z.distance;let K=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ts?K=z.shadow.map.texture:K=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=L.r*O,p+=L.g*O,h+=L.b*O;else if(z.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(z.sh.coefficients[X],O);T++}else if(z.isSunLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,te=t.get(z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[d]=te,i.sunShadowMap[d]=K;const ee=$.getViewportCount();for(let ce=0;ce<ee;ce++)i.sunShadowMatrix[_+ce]=$.getMatrix(ce),i.sunShadowCascade[_+ce]=$._cascadeData[ce];_+=ee,d++}i.sun[m]=X,m++}else if(z.isDirectionalLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,te=t.get(z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=z.shadow.matrix,E++}i.directional[g]=X,g++}else if(z.isSpotLight){const X=e.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(L).multiplyScalar(O),X.distance=B,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,i.spot[M]=X;const $=z.shadow;if(z.map&&(i.spotLightMap[v]=z.map,v++,$.updateMatrices(z),z.castShadow&&R++),i.spotLightMatrix[M]=$.matrix,z.castShadow){const te=t.get(z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=K,w++}M++}else if(z.isRectAreaLight){const X=e.get(z);X.color.copy(L).multiplyScalar(O),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),i.rectArea[A]=X,A++}else if(z.isPointLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){const $=z.shadow,te=t.get(z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,i.pointShadow[f]=te,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=z.shadow.matrix,b++}i.point[f]=X,f++}else if(z.isHemisphereLight){const X=e.get(z);X.skyColor.copy(z.color).multiplyScalar(O),X.groundColor.copy(z.groundColor).multiplyScalar(O),i.hemi[x]=X,x++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=h;const D=i.hash;(D.sunLength!==m||D.directionalLength!==g||D.pointLength!==f||D.spotLength!==M||D.rectAreaLength!==A||D.hemiLength!==x||D.numSunShadows!==d||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==v||D.numLightProbes!==T)&&(i.sun.length=m,i.directional.length=g,i.spot.length=M,i.rectArea.length=A,i.point.length=f,i.hemi.length=x,i.sunShadow.length=d,i.sunShadowMap.length=d,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+v-R,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,D.sunLength=m,D.directionalLength=g,D.pointLength=f,D.spotLength=M,D.rectAreaLength=A,D.hemiLength=x,D.numSunShadows=d,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=v,D.numLightProbes=T,i.version=Yx++)}function l(c,u){let p=0,h=0,m=0,d=0,_=0,g=0;const f=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const x=c[M];if(x.isSunLight){const E=i.sun[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),p++}else if(x.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(x.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),d++}else if(x.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(x.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),m++}else if(x.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:i}}function dd(n){const e=new Jx(n),t=[],i=[],s=[];function r(h){p.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Zx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new dd(n),e.set(s,[a])):r>=o.length?(a=new dd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
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
}`,jx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],e1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],fd=new xt,Sr=new k,oc=new k;function t1(n,e,t){let i=new cl;const s=new Te,r=new Te,o=new Ft,a=new Lf,l=new If,c={},u=t.maxTextureSize,p={[ji]:gn,[gn]:ji,[In]:In},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Kx,fragmentShader:Qx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const d=new Ht;d.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(d,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let f=this.type;this.render=function(b,w,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Id&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);const R=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),q=n.state;q.setBlending(fi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const H=f!==this.type;H&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(L=>L.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,L=b.length;z<L;z++){const O=b[z],B=O.shadow;if(B===void 0){tt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const K=B.getFrameExtents();s.multiply(K),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,B.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Xs){if(O.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fn(s.x,s.y,{format:ts,type:ni,minFilter:tn,magFilter:tn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new rr(s.x,s.y,Un),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=gi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt}else O.isPointLight?(B.map=new Tu(s.x),B.map.depthTexture=new xf(s.x,ti)):(B.map=new Fn(s.x,s.y),B.map.depthTexture=new rr(s.x,s.y,ti)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=gi,this.type===Zs?(B.map.depthTexture.compareFunction=X?rl:sl,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Qt,B.map.depthTexture.magFilter=Qt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,v);for(let te=0;te<$;te++){const ee=B.getCamera(te);if(O.isPointLight){const ce=B.camera,le=B.matrix,fe=O.distance||ce.far;fe!==ce.far&&(ce.far=fe,ce.updateProjectionMatrix()),Sr.setFromMatrixPosition(O.matrixWorld),ce.position.copy(Sr),oc.copy(ce.position),oc.add(jx[te]),ce.up.copy(e1[te]),ce.lookAt(oc),ce.updateMatrixWorld(),le.makeTranslation(-Sr.x,-Sr.y,-Sr.z),fd.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fd,ce.coordinateSystem,ce.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,te),n.clear();else{te===0&&(n.setRenderTarget(B.map),n.clear());const ce=B.getViewport(te);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),q.viewport(o)}i=B.getFrustum(te),x(w,v,ee,O,this.type)}B.isPointLightShadow!==!0&&this.type===Xs&&M(B,v),B.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(R,T,D)};function M(b,w){const v=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new Fn(s.x,s.y,{format:ts,type:ni}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,v,h,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,v,m,_,null)}function A(b,w,v,R){let T=null;const D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)T=D;else if(T=v.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const q=T.uuid,H=w.uuid;let z=c[q];z===void 0&&(z={},c[q]=z);let L=z[H];L===void 0&&(L=T.clone(),z[H]=L,w.addEventListener("dispose",E)),T=L}if(T.visible=w.visible,T.wireframe=w.wireframe,R===Xs?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:p[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=n.properties.get(T);q.light=v}return T}function x(b,w,v,R,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Xs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const H=e.update(b),z=b.material;if(Array.isArray(z)){const L=H.groups;for(let O=0,B=L.length;O<B;O++){const K=L[O],X=z[K.materialIndex];if(X&&X.visible){const $=A(b,X,R,T);b.onBeforeShadow(n,b,w,v,H,$,K),n.renderBufferDirect(v,null,H,$,b,K),b.onAfterShadow(n,b,w,v,H,$,K)}}}else if(z.visible){const L=A(b,z,R,T);b.onBeforeShadow(n,b,w,v,H,L,null),n.renderBufferDirect(v,null,H,L,b,null),b.onAfterShadow(n,b,w,v,H,L,null)}}const q=b.children;for(let H=0,z=q.length;H<z;H++)x(q[H],w,v,R,T)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const R=c[v],T=b.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function n1(n,e){function t(){let re=!1;const Le=new Ft;let ve=null;const Ie=new Ft(0,0,0,0);return{setMask:function(ke){ve!==ke&&!re&&(n.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){re=ke},setClear:function(ke,Me,Je,qe,Lt){Lt===!0&&(ke*=qe,Me*=qe,Je*=qe),Le.set(ke,Me,Je,qe),Ie.equals(Le)===!1&&(n.clearColor(ke,Me,Je,qe),Ie.copy(Le))},reset:function(){re=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let re=!1,Le=!1,ve=null,Ie=null,ke=null;return{setReversed:function(Me){if(Le!==Me){const Je=e.get("EXT_clip_control");Me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const qe=ke;ke=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(Me){Me?F(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!re&&(n.depthMask(Me),ve=Me)},setFunc:function(Me){if(Le&&(Me=tm[Me]),Ie!==Me){switch(Me){case ta:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){re=Me},setClear:function(Me){ke!==Me&&(ke=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){re=!1,ve=null,Ie=null,ke=null,Le=!1}}}function s(){let re=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Je=null,qe=null,Lt=null;return{setTest:function(bt){re||(bt?F(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!re&&(n.stencilMask(bt),Le=bt)},setFunc:function(bt,Hn,si){(ve!==bt||Ie!==Hn||ke!==si)&&(n.stencilFunc(bt,Hn,si),ve=bt,Ie=Hn,ke=si)},setOp:function(bt,Hn,si){(Me!==bt||Je!==Hn||qe!==si)&&(n.stencilOp(bt,Hn,si),Me=bt,Je=Hn,qe=si)},setLocked:function(bt){re=bt},setClear:function(bt){Lt!==bt&&(n.clearStencil(bt),Lt=bt)},reset:function(){re=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Je=null,qe=null,Lt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},p={},h={},m=new WeakMap,d=[],_=null,g=!1,f=null,M=null,A=null,x=null,E=null,b=null,w=null,v=new ut(0,0,0),R=0,T=!1,D=null,q=null,H=null,z=null,L=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=K>=2);let $=null,te={};const ee=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),le=new Ft().fromArray(ee),fe=new Ft().fromArray(ce);function N(re,Le,ve,Ie){const ke=new Uint8Array(4),Me=n.createTexture();n.bindTexture(re,Me),n.texParameteri(re,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(re,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<ve;Je++)re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Le+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Me}const y={};y[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),y[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),y[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),y[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(tr),j(!1),ie(mc),F(n.CULL_FACE),ne(fi);function F(re){u[re]!==!0&&(n.enable(re),u[re]=!0)}function Q(re){u[re]!==!1&&(n.disable(re),u[re]=!1)}function Z(re,Le){return h[re]!==Le?(n.bindFramebuffer(re,Le),h[re]=Le,re===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),re===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function C(re,Le){let ve=d,Ie=!1;if(re){ve=m.get(Le),ve===void 0&&(ve=[],m.set(Le,ve));const ke=re.textures;if(ve.length!==ke.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Je=ke.length;Me<Je;Me++)ve[Me]=n.COLOR_ATTACHMENT0+Me;ve.length=ke.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function P(re){return _!==re?(n.useProgram(re),_=re,!0):!1}const V={[ms]:n.FUNC_ADD,[Nd]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};V[Od]=n.MIN,V[Fd]=n.MAX;const G={[zd]:n.ZERO,[kd]:n.ONE,[Bd]:n.SRC_COLOR,[Wc]:n.SRC_ALPHA,[Xd]:n.SRC_ALPHA_SATURATE,[Wd]:n.DST_COLOR,[Vd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[qc]:n.ONE_MINUS_SRC_ALPHA,[qd]:n.ONE_MINUS_DST_COLOR,[Hd]:n.ONE_MINUS_DST_ALPHA,[Yd]:n.CONSTANT_COLOR,[$d]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[Zd]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(re,Le,ve,Ie,ke,Me,Je,qe,Lt,bt){if(re===fi){g===!0&&(Q(n.BLEND),g=!1);return}if(g===!1&&(F(n.BLEND),g=!0),re!==Dd){if(re!==f||bt!==T){if((M!==ms||E!==ms)&&(n.blendEquation(n.FUNC_ADD),M=ms,E=ms),bt)switch(re){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",re);break}else switch(re){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _c:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",re);break}A=null,x=null,b=null,w=null,v.set(0,0,0),R=0,f=re,T=bt}return}ke=ke||Le,Me=Me||ve,Je=Je||Ie,(Le!==M||ke!==E)&&(n.blendEquationSeparate(V[Le],V[ke]),M=Le,E=ke),(ve!==A||Ie!==x||Me!==b||Je!==w)&&(n.blendFuncSeparate(G[ve],G[Ie],G[Me],G[Je]),A=ve,x=Ie,b=Me,w=Je),(qe.equals(v)===!1||Lt!==R)&&(n.blendColor(qe.r,qe.g,qe.b,Lt),v.copy(qe),R=Lt),f=re,T=!1}function U(re,Le){re.side===In?Q(n.CULL_FACE):F(n.CULL_FACE);let ve=re.side===gn;Le&&(ve=!ve),j(ve),re.blending===Ks&&re.transparent===!1?ne(fi):ne(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),o.setFunc(re.depthFunc),o.setTest(re.depthTest),o.setMask(re.depthWrite),r.setMask(re.colorWrite);const Ie=re.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(re.stencilWriteMask),a.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),a.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),ae(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(re){D!==re&&(re?n.frontFace(n.CW):n.frontFace(n.CCW),D=re)}function ie(re){re!==Pd?(F(n.CULL_FACE),re!==q&&(re===mc?n.cullFace(n.BACK):re===Ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),q=re}function Y(re){re!==H&&(B&&n.lineWidth(re),H=re)}function ae(re,Le,ve){re?(F(n.POLYGON_OFFSET_FILL),(z!==Le||L!==ve)&&(z=Le,L=ve,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ve))):Q(n.POLYGON_OFFSET_FILL)}function ye(re){re?F(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function Se(re){re===void 0&&(re=n.TEXTURE0+O-1),$!==re&&(n.activeTexture(re),$=re)}function J(re,Le,ve){ve===void 0&&($===null?ve=n.TEXTURE0+O-1:ve=$);let Ie=te[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},te[ve]=Ie),(Ie.type!==re||Ie.texture!==Le)&&($!==ve&&(n.activeTexture(ve),$=ve),n.bindTexture(re,Le||y[re]),Ie.type=re,Ie.texture=Le)}function ze(){const re=te[$];re!==void 0&&re.type!==void 0&&(n.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function S(){try{n.texSubImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function oe(){try{n.texSubImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ee(){try{n.texStorage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ce(){try{n.texStorage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function _e(){try{n.texImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function xe(){try{n.texImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function Re(re){return p[re]!==void 0?p[re]:n.getParameter(re)}function Ye(re,Le){p[re]!==Le&&(n.pixelStorei(re,Le),p[re]=Le)}function Ne(re){le.equals(re)===!1&&(n.scissor(re.x,re.y,re.z,re.w),le.copy(re))}function Pe(re){fe.equals(re)===!1&&(n.viewport(re.x,re.y,re.z,re.w),fe.copy(re))}function $e(re,Le){let ve=c.get(Le);ve===void 0&&(ve=new WeakMap,c.set(Le,ve));let Ie=ve.get(re);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,re.name),ve.set(re,Ie))}function et(re,Le){const Ie=c.get(Le).get(re);l.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,re.__bindingPointIndex),l.set(Le,Ie))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},$=null,te={},h={},m=new WeakMap,d=[],_=null,g=!1,f=null,M=null,A=null,x=null,E=null,b=null,w=null,v=new ut(0,0,0),R=0,T=!1,D=null,q=null,H=null,z=null,L=null,le.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:Q,bindFramebuffer:Z,drawBuffers:C,useProgram:P,setBlending:ne,setMaterial:U,setFlipSided:j,setCullFace:ie,setLineWidth:Y,setPolygonOffset:ae,setScissorTest:ye,activeTexture:Se,bindTexture:J,unbindTexture:ze,compressedTexImage2D:Ae,compressedTexImage3D:W,texImage2D:_e,texImage3D:xe,pixelStorei:Ye,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:S,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:pe,scissor:Ne,viewport:Pe,reset:rt}}function i1(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,p=new Set;let h;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(W,S){return d?new OffscreenCanvas(W,S):Ba("canvas")}function g(W,S,oe){let ue=1;const pe=Ae(W);if((pe.width>oe||pe.height>oe)&&(ue=oe/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){const Ee=Math.floor(ue*pe.width),Ce=Math.floor(ue*pe.height);h===void 0&&(h=_(Ee,Ce));const _e=S?_(Ee,Ce):h;return _e.width=Ee,_e.height=Ce,_e.getContext("2d").drawImage(W,0,0,Ee,Ce),tt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ee+"x"+Ce+")."),_e}else return"data"in W&&tt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),W;return W}function f(W){return W.generateMipmaps}function M(W){n.generateMipmap(W)}function A(W){return W.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?n.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(W,S,oe,ue,pe,Ee=!1){if(W!==null){if(n[W]!==void 0)return n[W];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let Ce;ue&&(Ce=e.get("EXT_texture_norm16"),Ce||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=S;if(S===n.RED&&(oe===n.FLOAT&&(_e=n.R32F),oe===n.HALF_FLOAT&&(_e=n.R16F),oe===n.UNSIGNED_BYTE&&(_e=n.R8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.R16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.R16_SNORM_EXT)),S===n.RED_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.R8UI),oe===n.UNSIGNED_SHORT&&(_e=n.R16UI),oe===n.UNSIGNED_INT&&(_e=n.R32UI),oe===n.BYTE&&(_e=n.R8I),oe===n.SHORT&&(_e=n.R16I),oe===n.INT&&(_e=n.R32I)),S===n.RG&&(oe===n.FLOAT&&(_e=n.RG32F),oe===n.HALF_FLOAT&&(_e=n.RG16F),oe===n.UNSIGNED_BYTE&&(_e=n.RG8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RG16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RG8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RG16UI),oe===n.UNSIGNED_INT&&(_e=n.RG32UI),oe===n.BYTE&&(_e=n.RG8I),oe===n.SHORT&&(_e=n.RG16I),oe===n.INT&&(_e=n.RG32I)),S===n.RGB_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),oe===n.UNSIGNED_INT&&(_e=n.RGB32UI),oe===n.BYTE&&(_e=n.RGB8I),oe===n.SHORT&&(_e=n.RGB16I),oe===n.INT&&(_e=n.RGB32I)),S===n.RGBA_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),oe===n.UNSIGNED_INT&&(_e=n.RGBA32UI),oe===n.BYTE&&(_e=n.RGBA8I),oe===n.SHORT&&(_e=n.RGBA16I),oe===n.INT&&(_e=n.RGBA32I)),S===n.RGB&&(oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGB16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RGB16_SNORM_EXT),oe===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),oe===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),S===n.RGBA){const xe=Ee?qr:pt.getTransfer(pe);oe===n.FLOAT&&(_e=n.RGBA32F),oe===n.HALF_FLOAT&&(_e=n.RGBA16F),oe===n.UNSIGNED_BYTE&&(_e=xe===wt?n.SRGB8_ALPHA8:n.RGBA8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGBA16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RGBA16_SNORM_EXT),oe===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),oe===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function E(W,S){let oe;return W?S===null||S===ti||S===ir?oe=n.DEPTH24_STENCIL8:S===Un?oe=n.DEPTH32F_STENCIL8:S===nr&&(oe=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ti||S===ir?oe=n.DEPTH_COMPONENT24:S===Un?oe=n.DEPTH_COMPONENT32F:S===nr&&(oe=n.DEPTH_COMPONENT16),oe}function b(W,S){return f(W)===!0||W.isFramebufferTexture&&W.minFilter!==Qt&&W.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?S.mipmaps.length:1}function w(W){const S=W.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&p.delete(S)}function v(W){const S=W.target;S.removeEventListener("dispose",v),D(S)}function R(W){const S=i.get(W);if(S.__webglInit===void 0)return;const oe=W.source,ue=m.get(oe);if(ue){const pe=ue[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&T(W),Object.keys(ue).length===0&&m.delete(oe)}i.remove(W)}function T(W){const S=i.get(W);n.deleteTexture(S.__webglTexture);const oe=W.source,ue=m.get(oe);delete ue[S.__cacheKey],o.memory.textures--}function D(W){const S=i.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),i.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(S.__webglFramebuffer[ue]))for(let pe=0;pe<S.__webglFramebuffer[ue].length;pe++)n.deleteFramebuffer(S.__webglFramebuffer[ue][pe]);else n.deleteFramebuffer(S.__webglFramebuffer[ue]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ue])}else{if(Array.isArray(S.__webglFramebuffer))for(let ue=0;ue<S.__webglFramebuffer.length;ue++)n.deleteFramebuffer(S.__webglFramebuffer[ue]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ue=0;ue<S.__webglColorRenderbuffer.length;ue++)S.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ue]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const oe=W.textures;for(let ue=0,pe=oe.length;ue<pe;ue++){const Ee=i.get(oe[ue]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(oe[ue])}i.remove(W)}let q=0;function H(){q=0}function z(){return q}function L(W){q=W}function O(){const W=q;return W>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(W+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,W}function B(W){const S=[];return S.push(W.wrapS),S.push(W.wrapT),S.push(W.wrapR||0),S.push(W.magFilter),S.push(W.minFilter),S.push(W.anisotropy),S.push(W.internalFormat),S.push(W.format),S.push(W.type),S.push(W.generateMipmaps),S.push(W.premultiplyAlpha),S.push(W.flipY),S.push(W.unpackAlignment),S.push(W.colorSpace),S.join()}function K(W,S){const oe=i.get(W);if(W.isVideoTexture&&J(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&oe.__version!==W.version){const ue=W.image;if(ue===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(oe,W,S);return}}else W.isExternalTexture&&(oe.__webglTexture=W.sourceTexture?W.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture,n.TEXTURE0+S)}function X(W,S){const oe=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&oe.__version!==W.version){Q(oe,W,S);return}else W.isExternalTexture&&(oe.__webglTexture=W.sourceTexture?W.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,oe.__webglTexture,n.TEXTURE0+S)}function $(W,S){const oe=i.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&oe.__version!==W.version){Q(oe,W,S);return}t.bindTexture(n.TEXTURE_3D,oe.__webglTexture,n.TEXTURE0+S)}function te(W,S){const oe=i.get(W);if(W.isCubeDepthTexture!==!0&&W.version>0&&oe.__version!==W.version){Z(oe,W,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture,n.TEXTURE0+S)}const ee={[Gr]:n.REPEAT,[ui]:n.CLAMP_TO_EDGE,[la]:n.MIRRORED_REPEAT},ce={[Qt]:n.NEAREST,[jd]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},le={[sf]:n.NEVER,[cf]:n.ALWAYS,[rf]:n.LESS,[sl]:n.LEQUAL,[of]:n.EQUAL,[rl]:n.GEQUAL,[af]:n.GREATER,[lf]:n.NOTEQUAL};function fe(W,S){if(S.type===Un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===Xo||S.magFilter===Tr||S.magFilter===Xi||S.minFilter===tn||S.minFilter===Xo||S.minFilter===Tr||S.minFilter===Xi)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(W,n.TEXTURE_WRAP_S,ee[S.wrapS]),n.texParameteri(W,n.TEXTURE_WRAP_T,ee[S.wrapT]),(W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY)&&n.texParameteri(W,n.TEXTURE_WRAP_R,ee[S.wrapR]),n.texParameteri(W,n.TEXTURE_MAG_FILTER,ce[S.magFilter]),n.texParameteri(W,n.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(n.texParameteri(W,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(W,n.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==Tr&&S.minFilter!==Xi||S.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");n.texParameterf(W,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function N(W,S){let oe=!1;W.__webglInit===void 0&&(W.__webglInit=!0,S.addEventListener("dispose",w));const ue=S.source;let pe=m.get(ue);pe===void 0&&(pe={},m.set(ue,pe));const Ee=B(S);if(Ee!==W.__cacheKey){pe[Ee]===void 0&&(pe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),pe[Ee].usedTimes++;const Ce=pe[W.__cacheKey];Ce!==void 0&&(pe[W.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(S)),W.__cacheKey=Ee,W.__webglTexture=pe[Ee].texture}return oe}function y(W,S,oe){return Math.floor(Math.floor(W/oe)/S)}function F(W,S,oe,ue){const Ee=W.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,oe,ue,S.data);else{Ee.sort((Ye,Ne)=>Ye.start-Ne.start);let Ce=0;for(let Ye=1;Ye<Ee.length;Ye++){const Ne=Ee[Ce],Pe=Ee[Ye],$e=Ne.start+Ne.count,et=y(Pe.start,S.width,4),rt=y(Ne.start,S.width,4);Pe.start<=$e+1&&et===rt&&y(Pe.start+Pe.count-1,S.width,4)===et?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,Ee[Ce]=Pe)}Ee.length=Ce+1;const _e=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ye=0,Ne=Ee.length;Ye<Ne;Ye++){const Pe=Ee[Ye],$e=Math.floor(Pe.start/4),et=Math.ceil(Pe.count/4),rt=$e%S.width,re=Math.floor($e/S.width),Le=et,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(n.UNPACK_SKIP_ROWS,re),t.texSubImage2D(n.TEXTURE_2D,0,rt,re,Le,ve,oe,ue,S.data)}W.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Q(W,S,oe){let ue=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ue=n.TEXTURE_3D);const pe=N(W,S),Ee=S.source;t.bindTexture(ue,W.__webglTexture,n.TEXTURE0+oe);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+oe),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ve=pt.getPrimaries(pt.workingColorSpace),Ie=S.colorSpace===bi?null:pt.getPrimaries(S.colorSpace),ke=S.colorSpace===bi||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let xe=g(S.image,!1,s.maxTextureSize);xe=ze(S,xe);const Re=r.convert(S.format,S.colorSpace),Ye=r.convert(S.type);let Ne=x(S.internalFormat,Re,Ye,S.normalized,S.colorSpace,S.isVideoTexture);fe(ue,S);let Pe;const $e=S.mipmaps,et=S.isVideoTexture!==!0,rt=Ce.__version===void 0||pe===!0,re=Ee.dataReady,Le=b(S,xe);if(S.isDepthTexture)Ne=E(S.format===Yi,S.type),rt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ye,null));else if(S.isDataTexture)if($e.length>0){et&&rt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let ve=0,Ie=$e.length;ve<Ie;ve++)Pe=$e[ve],et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data);S.generateMipmaps=!1}else et?(rt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height),re&&F(S,xe,Re,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,Ye,xe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,$e[0].width,$e[0].height,xe.depth);for(let ve=0,Ie=$e.length;ve<Ie;ve++)if(Pe=$e[ve],S.format!==On)if(Re!==null)if(et){if(re)if(S.layerUpdates.size>0){const ke=Xh(Pe.width,Pe.height,S.format,S.type);for(const Me of S.layerUpdates){const Je=Pe.data.subarray(Me*ke/Pe.data.BYTES_PER_ELEMENT,(Me+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Me,Pe.width,Pe.height,1,Re,Je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Ye,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Re,Ye,Pe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{et&&rt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,$e[0].width,$e[0].height);for(let ve=0,Ie=$e.length;ve<Ie;ve++)Pe=$e[ve],S.format!==On?Re!==null?et?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Pe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Ye,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,Ye,Pe.data)}else if(S.isDataArrayTexture)if(et){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,xe.width,xe.height,xe.depth),re)if(S.layerUpdates.size>0){const ve=Xh(xe.width,xe.height,S.format,S.type);for(const Ie of S.layerUpdates){const ke=xe.data.subarray(Ie*ve/xe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,Ye,ke)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(S.isData3DTexture)et?(rt&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,xe.width,xe.height,xe.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(S.isFramebufferTexture){if(rt)if(et)t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height);else{let ve=xe.width,Ie=xe.height;for(let ke=0;ke<Le;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ne,ve,Ie,0,Re,Ye,null),ve>>=1,Ie>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),p.add(S),ve.onpaint=Ie=>{const ke=Ie.changedElements;for(const Me of p)ke.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const ke=n.RGBA,Me=n.RGBA,Je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,Me,Je,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&rt){const ve=Ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}for(let ve=0,Ie=$e.length;ve<Ie;ve++)Pe=$e[ve],et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,Ye,Pe):t.texImage2D(n.TEXTURE_2D,ve,Ne,Re,Ye,Pe);S.generateMipmaps=!1}else if(et){if(rt){const ve=Ae(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ye,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,Ye,xe);f(S)&&M(ue),Ce.__version=Ee.version,S.onUpdate&&S.onUpdate(S)}W.__version=S.version}function Z(W,S,oe){if(S.image.length!==6)return;const ue=N(W,S),pe=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+oe);const Ee=i.get(pe);if(pe.version!==Ee.__version||ue===!0){t.activeTexture(n.TEXTURE0+oe);const Ce=pt.getPrimaries(pt.workingColorSpace),_e=S.colorSpace===bi?null:pt.getPrimaries(S.colorSpace),xe=S.colorSpace===bi||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,Ye=S.image[0]&&S.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!Ye?Ne[Me]=g(S.image[Me],!0,s.maxCubemapSize):Ne[Me]=Ye?S.image[Me].image:S.image[Me],Ne[Me]=ze(S,Ne[Me]);const Pe=Ne[0],$e=r.convert(S.format,S.colorSpace),et=r.convert(S.type),rt=x(S.internalFormat,$e,et,S.normalized,S.colorSpace),re=S.isVideoTexture!==!0,Le=Ee.__version===void 0||ue===!0,ve=pe.dataReady;let Ie=b(S,Pe);fe(n.TEXTURE_CUBE_MAP,S);let ke;if(Re){re&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,rt,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){ke=Ne[Me].mipmaps;for(let Je=0;Je<ke.length;Je++){const qe=ke[Je];S.format!==On?$e!==null?re?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,qe.width,qe.height,$e,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,rt,qe.width,qe.height,0,qe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,qe.width,qe.height,$e,et,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,rt,qe.width,qe.height,0,$e,et,qe.data)}}}else{if(ke=S.mipmaps,re&&Le){ke.length>0&&Ie++;const Me=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,rt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ye){re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,$e,et,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,Ne[Me].width,Ne[Me].height,0,$e,et,Ne[Me].data);for(let Je=0;Je<ke.length;Je++){const Lt=ke[Je].image[Me].image;re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Lt.width,Lt.height,$e,et,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,rt,Lt.width,Lt.height,0,$e,et,Lt.data)}}else{re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,$e,et,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,$e,et,Ne[Me]);for(let Je=0;Je<ke.length;Je++){const qe=ke[Je];re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,$e,et,qe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,rt,$e,et,qe.image[Me])}}}f(S)&&M(n.TEXTURE_CUBE_MAP),Ee.__version=pe.version,S.onUpdate&&S.onUpdate(S)}W.__version=S.version}function C(W,S,oe,ue,pe,Ee){const Ce=r.convert(oe.format,oe.colorSpace),_e=r.convert(oe.type),xe=x(oe.internalFormat,Ce,_e,oe.normalized,oe.colorSpace),Re=i.get(S),Ye=i.get(oe);if(Ye.__renderTarget=S,!Re.__hasExternalTextures){const Ne=Math.max(1,S.width>>Ee),Pe=Math.max(1,S.height>>Ee);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ee,xe,Ne,Pe,S.depth,0,Ce,_e,null):t.texImage2D(pe,Ee,xe,Ne,Pe,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,W),Se(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,pe,Ye.__webglTexture,0,ye(S)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,pe,Ye.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(W,S,oe){if(n.bindRenderbuffer(n.RENDERBUFFER,W),S.depthBuffer){const ue=S.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,Ee=E(S.stencilBuffer,pe),Ce=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Se(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(S),Ee,S.width,S.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(S),Ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,W)}else{const ue=S.textures;for(let pe=0;pe<ue.length;pe++){const Ee=ue[pe],Ce=r.convert(Ee.format,Ee.colorSpace),_e=r.convert(Ee.type),xe=x(Ee.internalFormat,Ce,_e,Ee.normalized,Ee.colorSpace);Se(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(S),xe,S.width,S.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(S),xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(W,S,oe){const ue=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,W),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=i.get(S.depthTexture);if(pe.__renderTarget=S,(!pe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ue){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),fe(n.TEXTURE_CUBE_MAP,S.depthTexture);const Re=r.convert(S.depthTexture.format),Ye=r.convert(S.depthTexture.type);let Ne;S.depthTexture.format===gi?Ne=n.DEPTH_COMPONENT24:S.depthTexture.format===Yi&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,S.width,S.height,0,Re,Ye,null)}}else K(S.depthTexture,0);const Ee=pe.__webglTexture,Ce=ye(S),_e=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+oe:n.TEXTURE_2D,xe=S.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===gi)Se(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else if(S.depthTexture.format===Yi)Se(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(W){const S=i.get(W),oe=W.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==W.depthTexture){const ue=W.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ue){const pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=ue}if(W.depthTexture&&!S.__autoAllocateDepthBuffer)if(oe)for(let ue=0;ue<6;ue++)V(S.__webglFramebuffer[ue],W,ue);else{const ue=W.texture.mipmaps;ue&&ue.length>0?V(S.__webglFramebuffer[0],W,0):V(S.__webglFramebuffer,W,0)}else if(oe){S.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ue]),S.__webglDepthbuffer[ue]===void 0)S.__webglDepthbuffer[ue]=n.createRenderbuffer(),P(S.__webglDepthbuffer[ue],W,!1);else{const pe=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}else{const ue=W.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),P(S.__webglDepthbuffer,W,!1);else{const pe=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(W,S,oe){const ue=i.get(W);S!==void 0&&C(ue.__webglFramebuffer,W,W.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),oe!==void 0&&G(W)}function U(W){const S=W.texture,oe=i.get(W),ue=i.get(S);W.addEventListener("dispose",v);const pe=W.textures,Ee=W.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=S.version,o.memory.textures++),Ee){oe.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){oe.__webglFramebuffer[_e]=[];for(let xe=0;xe<S.mipmaps.length;xe++)oe.__webglFramebuffer[_e][xe]=n.createFramebuffer()}else oe.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){oe.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)oe.__webglFramebuffer[_e]=n.createFramebuffer()}else oe.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=i.get(pe[_e]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(W.samples>0&&Se(W)===!1){oe.__webglMultisampledFramebuffer=n.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const xe=pe[_e];oe.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]);const Re=r.convert(xe.format,xe.colorSpace),Ye=r.convert(xe.type),Ne=x(xe.internalFormat,Re,Ye,xe.normalized,xe.colorSpace,W.isXRRenderTarget===!0),Pe=ye(W);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,W.width,W.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,oe.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),W.depthBuffer&&(oe.__webglDepthRenderbuffer=n.createRenderbuffer(),P(oe.__webglDepthRenderbuffer,W,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),fe(n.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)C(oe.__webglFramebuffer[_e][xe],W,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else C(oe.__webglFramebuffer[_e],W,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);f(S)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=pe[_e],Ye=i.get(Re);let Ne=n.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(Ne=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ye.__webglTexture),fe(Ne,Re),C(oe.__webglFramebuffer,W,Re,n.COLOR_ATTACHMENT0+_e,Ne,0),f(Re)&&M(Ne)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(_e=W.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),fe(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)C(oe.__webglFramebuffer[xe],W,S,n.COLOR_ATTACHMENT0,_e,xe);else C(oe.__webglFramebuffer,W,S,n.COLOR_ATTACHMENT0,_e,0);f(S)&&M(_e),t.unbindTexture()}W.depthBuffer&&G(W)}function j(W){const S=W.textures;for(let oe=0,ue=S.length;oe<ue;oe++){const pe=S[oe];if(f(pe)){const Ee=A(W),Ce=i.get(pe).__webglTexture;t.bindTexture(Ee,Ce),M(Ee),t.unbindTexture()}}}const ie=[],Y=[];function ae(W){if(W.samples>0){if(Se(W)===!1){const S=W.textures,oe=W.width,ue=W.height;let pe=n.COLOR_BUFFER_BIT;const Ee=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(W),_e=S.length>1;if(_e)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=W.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(S[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,oe,ue,0,0,oe,ue,pe,n.NEAREST),l===!0&&(ie.length=0,Y.length=0,ie.push(n.COLOR_ATTACHMENT0+Re),W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&(ie.push(Ee),Y.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=i.get(S[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&l){const S=W.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ye(W){return Math.min(s.maxSamples,W.samples)}function Se(W){const S=i.get(W);return W.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function J(W){const S=o.render.frame;u.get(W)!==S&&(u.set(W,S),W.update())}function ze(W,S){const oe=W.colorSpace,ue=W.format,pe=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||oe!==Wr&&oe!==bi&&(pt.getTransfer(oe)===wt?(ue!==On||pe!==yn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",oe)),S}function Ae(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(c.width=W.naturalWidth||W.width,c.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(c.width=W.displayWidth,c.height=W.displayHeight):(c.width=W.width,c.height=W.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.getTextureUnits=z,this.setTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=ne,this.setupRenderTarget=U,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=C,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wf(n,e){function t(i,s=bi){let r;const o=pt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===eu)return n.BYTE;if(i===tu)return n.SHORT;if(i===nr)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===su)return n.ALPHA;if(i===ru)return n.RGB;if(i===On)return n.RGBA;if(i===gi)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===el)return n.RED;if(i===tl)return n.RED_INTEGER;if(i===ts)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===il)return n.RGBA_INTEGER;if(i===Dr||i===Nr||i===Ur||i===Or)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===ua||i===ha||i===da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fa||i===pa||i===ma||i===ga||i===_a||i===Vr||i===va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fa||i===pa)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ma)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ga)return r.COMPRESSED_R11_EAC;if(i===_a)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vr)return r.COMPRESSED_RG11_EAC;if(i===va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xa||i===ya||i===Ma||i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ya)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ra)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ia)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Da||i===Na||i===Ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Da)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oa||i===Fa||i===Hr||i===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const s1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
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

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:s1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends Oi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,m=null,d=null;const _=typeof XRWebGLBinding<"u",g=new o1,f={},M=t.getContextAttributes();let A=null,x=null;const E=[],b=[],w=new Te;let v=null,R=null;const T=new wn;T.viewport=new Ft;const D=new wn;D.viewport=new Ft;const q=[T,D],H=new Uf;let z=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let F=E[y];return F===void 0&&(F=new $o,E[y]=F),F.getTargetRaySpace()},this.getControllerGrip=function(y){let F=E[y];return F===void 0&&(F=new $o,E[y]=F),F.getGripSpace()},this.getHand=function(y){let F=E[y];return F===void 0&&(F=new $o,E[y]=F),F.getHandSpace()};function O(y){const F=b.indexOf(y.inputSource);if(F===-1)return;const Q=E[F];Q!==void 0&&(Q.update(y.inputSource,y.frame,c||o),Q.dispatchEvent({type:y.type,data:y.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",K);for(let y=0;y<E.length;y++){const F=b[y];F!==null&&(b[y]=null,E[y].disconnect(F))}z=null,L=null,g.reset();for(const y in f)delete f[y];if(e.setRenderTarget(A),m=null,h=null,p=null,s=null,x=null,N.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(w.width,w.height,!1),R!==null){const y=R.camera;y.fov=R.fov,y.zoom=R.zoom,y.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){r=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){a=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(y){c=y},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(y){if(s=y,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,Z=null,C=null;M.depth&&(C=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=M.stencil?Yi:gi,Z=M.stencil?ir:ti);const P={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(P),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Fn(h.textureWidth,h.textureHeight,{format:On,type:yn,depthTexture:new rr(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Fn(m.framebufferWidth,m.framebufferHeight,{format:On,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),N.setContext(s),N.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(y){for(let F=0;F<y.removed.length;F++){const Q=y.removed[F],Z=b.indexOf(Q);Z>=0&&(b[Z]=null,E[Z].disconnect(Q))}for(let F=0;F<y.added.length;F++){const Q=y.added[F];let Z=b.indexOf(Q);if(Z===-1){for(let P=0;P<E.length;P++)if(P>=b.length){b.push(Q),Z=P;break}else if(b[P]===null){b[P]=Q,Z=P;break}if(Z===-1)break}const C=E[Z];C&&C.connect(Q)}}const X=new k,$=new k;function te(y,F,Q){X.setFromMatrixPosition(F.matrixWorld),$.setFromMatrixPosition(Q.matrixWorld);const Z=X.distanceTo($),C=F.projectionMatrix.elements,P=Q.projectionMatrix.elements,V=C[14]/(C[10]-1),G=C[14]/(C[10]+1),ne=(C[9]+1)/C[5],U=(C[9]-1)/C[5],j=(C[8]-1)/C[0],ie=(P[8]+1)/P[0],Y=V*j,ae=V*ie,ye=Z/(-j+ie),Se=ye*-j;if(F.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(Se),y.translateZ(ye),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),C[10]===-1)y.projectionMatrix.copy(F.projectionMatrix),y.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const J=V+ye,ze=G+ye,Ae=Y-Se,W=ae+(Z-Se),S=ne*G/ze*J,oe=U*G/ze*J;y.projectionMatrix.makePerspective(Ae,W,S,oe,J,ze),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function ee(y,F){F===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(F.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(s===null)return;let F=y.near,Q=y.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),H.near=D.near=T.near=F,H.far=D.far=T.far=Q,(z!==H.near||L!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),z=H.near,L=H.far),H.layers.mask=y.layers.mask|6,T.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;const Z=y.parent,C=H.cameras;ee(H,Z);for(let P=0;P<C.length;P++)ee(C[P],Z);C.length===2?te(H,T,D):H.projectionMatrix.copy(T.projectionMatrix),R===null&&y.isPerspectiveCamera&&(R={camera:y,fov:y.fov,zoom:y.zoom}),ce(y,H,Z)};function ce(y,F,Q){Q===null?y.matrix.copy(F.matrixWorld):(y.matrix.copy(Q.matrixWorld),y.matrix.invert(),y.matrix.multiply(F.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(F.projectionMatrix),y.projectionMatrixInverse.copy(F.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=Xr*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(y){l=y,h!==null&&(h.fixedFoveation=y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(y){return f[y]};let le=null;function fe(y,F){if(u=F.getViewerPose(c||o),d=F,u!==null){const Q=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let Z=!1;Q.length!==H.cameras.length&&(H.cameras.length=0,Z=!0);for(let G=0;G<Q.length;G++){const ne=Q[G];let U=null;if(m!==null)U=m.getViewport(ne);else{const ie=p.getViewSubImage(h,ne);U=ie.viewport,G===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let j=q[G];j===void 0&&(j=new wn,j.layers.enable(G),j.viewport=new Ft,q[G]=j),j.matrix.fromArray(ne.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ne.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(U.x,U.y,U.width,U.height),G===0&&(H.matrix.copy(j.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Z===!0&&H.cameras.push(j)}const C=s.enabledFeatures;if(C&&C.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){p=i.getBinding();const G=p.getDepthInformation(Q[0]);G&&G.isValid&&G.texture&&g.init(G,s.renderState)}if(C&&C.includes("camera-access")&&_){e.state.unbindTexture(),p=i.getBinding();for(let G=0;G<Q.length;G++){const ne=Q[G].camera;if(ne){let U=f[ne];U||(U=new mu,f[ne]=U);const j=p.getCameraImage(ne);U.sourceTexture=j}}}}for(let Q=0;Q<E.length;Q++){const Z=b[Q],C=E[Q];Z!==null&&C!==void 0&&C.update(Z,F,c||o)}le&&le(y,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),d=null}const N=new zf;N.setAnimationLoop(fe),this.setAnimationLoop=function(y){le=y},this.dispose=function(){}}}const l1=new xt,qf=new nt;qf.set(-1,0,0,0,1,0,0,0,1);function c1(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Cf(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,M,A,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&m(g,f,x)):f.isMeshMatcapMaterial?(r(g,f),d(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,M,A):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===gn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===gn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const M=e.get(f),A=M.envMap,x=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(l1.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qf),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,M,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=A*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,M){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const M=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function u1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const b=E.program;i.uniformBlockBinding(x,b)}function c(x,E){let b=s[x.id];b===void 0&&(g(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",M));const w=E.program;i.updateUBOMapping(x,w);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const E=p();x.__bindingPointIndex=E;const b=n.createBuffer(),w=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,w,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function p(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const E=s[x.id],b=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,R=b.length;v<R;v++){const T=b[v];if(Array.isArray(T))for(let D=0,q=T.length;D<q;D++)m(T[D],v,D,w);else m(T,v,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,E,b,w){if(_(x,E,b,w)===!0){const v=x.__offset,R=x.value;if(Array.isArray(R)){let T=0;for(let D=0;D<R.length;D++){const q=R[D],H=f(q);d(q,x.__data,T),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(T+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(R,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function d(x,E,b){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,b)}function _(x,E,b,w){const v=x.value,R=E+"_"+b;if(w[R]===void 0)return typeof v=="number"||typeof v=="boolean"?w[R]=v:ArrayBuffer.isView(v)?w[R]=v.slice():w[R]=v.clone(),!0;{const T=w[R];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(x){const E=x.uniforms;let b=0;const w=16;for(let R=0,T=E.length;R<T;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let q=0,H=D.length;q<H;q++){const z=D[q],L=Array.isArray(z.value)?z.value:[z.value];for(let O=0,B=L.length;O<B;O++){const K=L[O],X=f(K),$=b%w,te=$%X.boundary,ee=$+te;b+=te,ee!==0&&w-ee<X.storage&&(b+=w-ee),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=X.storage}}}const v=b%w;return v>0&&(b+=w-v),x.__size=b,x.__cache={},this}function f(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",x),E}function M(x){const E=x.target;E.removeEventListener("dispose",M);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}const h1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function d1(){return ai===null&&(ai=new uu(h1,16,16,ts,ni),ai.name="DFG_LUT",ai.minFilter=tn,ai.magFilter=tn,ai.wrapS=ui,ai.wrapT=ui,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class Xf{constructor(e={}){const{canvas:t=hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=yn}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=m,g=new Set([il,nl,tl]),f=new Set([yn,ti,nr,ir,Qa,ja]),M=new Uint32Array(4),A=new Int32Array(4),x=new k;let E=null,b=null;const w=[],v=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1,q=null,H=null,z=null,L=null;this._outputColorSpace=cn;let O=0,B=0,K=null,X=-1,$=null;const te=new Ft,ee=new Ft;let ce=null;const le=new ut(0);let fe=0,N=t.width,y=t.height,F=1,Q=null,Z=null;const C=new Ft(0,0,N,y),P=new Ft(0,0,N,y);let V=!1;const G=new cl;let ne=!1,U=!1;const j=new xt,ie=new k,Y=new Ft,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Se(){return K===null?F:1}let J=i;function ze(I,se){return t.getContext(I,se)}let Ae,W,S,oe,ue,pe,Ee,Ce,_e,xe,Re,Ye,Ne,Pe,$e,et,rt,re,Le,ve,Ie,ke,Me;try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),J===null){const se="webgl2";if(J=ze(se,I),J===null)throw ze(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(I){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),_t("WebGLRenderer: "+I.message),I}function Je(){Ae=new fv(J),Ae.init(),Ie=new Wf(J,Ae),W=new iv(J,Ae,e,Ie),S=new n1(J,Ae),W.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),H=J.createFramebuffer(),z=J.createFramebuffer(),L=J.createFramebuffer(),oe=new gv(J),ue=new Vx,pe=new i1(J,Ae,S,ue,W,Ie,oe),Ee=new dv(T),Ce=new v0(J),ke=new tv(J,Ce),_e=new pv(J,Ce,oe,ke),xe=new vv(J,_e,Ce,ke,oe),re=new _v(J,W,pe),$e=new sv(ue),Re=new Gx(T,Ee,Ae,W,ke,$e),Ye=new c1(T,ue),Ne=new Wx,Pe=new Zx(Ae),rt=new ev(T,Ee,S,xe,d,l),et=new t1(T,xe,W),Me=new u1(J,oe,W,S),Le=new nv(J,Ae,oe),ve=new mv(J,Ae,oe),oe.programs=Re.programs,T.capabilities=W,T.extensions=Ae,T.properties=ue,T.renderLists=Ne,T.shadowMap=et,T.state=S,T.info=oe}_!==yn&&(R=new yv(_,t.width,t.height,a,s,r));const qe=new a1(T,J);this.xr=qe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const I=Ae.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ae.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(I){I!==void 0&&(F=I,this.setSize(N,y,!1))},this.getSize=function(I){return I.set(N,y)},this.setSize=function(I,se,me=!0){if(qe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=I,y=se,t.width=Math.floor(I*F),t.height=Math.floor(se*F),me===!0&&(t.style.width=I+"px",t.style.height=se+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,I,se)},this.getDrawingBufferSize=function(I){return I.set(N*F,y*F).floor()},this.setDrawingBufferSize=function(I,se,me){N=I,y=se,F=me,t.width=Math.floor(I*me),t.height=Math.floor(se*me),this.setViewport(0,0,I,se)},this.setEffects=function(I){if(_===yn){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let se=0;se<I.length;se++)if(I[se].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(te)},this.getViewport=function(I){return I.copy(C)},this.setViewport=function(I,se,me,he){I.isVector4?C.set(I.x,I.y,I.z,I.w):C.set(I,se,me,he),S.viewport(te.copy(C).multiplyScalar(F).round())},this.getScissor=function(I){return I.copy(P)},this.setScissor=function(I,se,me,he){I.isVector4?P.set(I.x,I.y,I.z,I.w):P.set(I,se,me,he),S.scissor(ee.copy(P).multiplyScalar(F).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(I){S.setScissorTest(V=I)},this.setOpaqueSort=function(I){Q=I},this.setTransparentSort=function(I){Z=I},this.getClearColor=function(I){return I.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(I=!0,se=!0,me=!0){let he=0;if(I){let de=!1;if(K!==null){const Fe=K.texture.format;de=g.has(Fe)}if(de){const Fe=K.texture.type,Ve=f.has(Fe),Ue=rt.getClearColor(),He=rt.getClearAlpha(),Xe=Ue.r,lt=Ue.g,dt=Ue.b;Ve?(M[0]=Xe,M[1]=lt,M[2]=dt,M[3]=He,J.clearBufferuiv(J.COLOR,0,M)):(A[0]=Xe,A[1]=lt,A[2]=dt,A[3]=He,J.clearBufferiv(J.COLOR,0,A))}else he|=J.COLOR_BUFFER_BIT}se&&(he|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(he|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&J.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),q=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),rt.dispose(),Ne.dispose(),Pe.dispose(),ue.dispose(),Ee.dispose(),xe.dispose(),ke.dispose(),Me.dispose(),Re.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ju),qe.removeEventListener("sessionend",Zu),as.stop()};function Lt(I){I.preventDefault(),yc("WebGLRenderer: Context Lost."),D=!0}function bt(){yc("WebGLRenderer: Context Restored."),D=!1;const I=oe.autoReset,se=et.enabled,me=et.autoUpdate,he=et.needsUpdate,de=et.type;Je(),oe.autoReset=I,et.enabled=se,et.autoUpdate=me,et.needsUpdate=he,et.type=de}function Hn(I){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function si(I){const se=I.target;se.removeEventListener("dispose",si),bp(se)}function bp(I){Ep(I),ue.remove(I)}function Ep(I){const se=ue.get(I).programs;se!==void 0&&(se.forEach(function(me){Re.releaseProgram(me)}),I.isShaderMaterial&&Re.releaseShaderCache(I))}this.renderBufferDirect=function(I,se,me,he,de,Fe){se===null&&(se=ae);const Ve=de.isMesh&&de.matrixWorld.determinantAffine()<0,Ue=Ap(I,se,me,he,de);S.setMaterial(he,Ve);let He=me.index,Xe=1;if(he.wireframe===!0){if(He=_e.getWireframeAttribute(me),He===void 0)return;Xe=2}const lt=me.drawRange,dt=me.attributes.position;let We=lt.start*Xe,Et=(lt.start+lt.count)*Xe;Fe!==null&&(We=Math.max(We,Fe.start*Xe),Et=Math.min(Et,(Fe.start+Fe.count)*Xe)),He!==null?(We=Math.max(We,0),Et=Math.min(Et,He.count)):dt!=null&&(We=Math.max(We,0),Et=Math.min(Et,dt.count));const Wt=Et-We;if(Wt<0||Wt===1/0)return;ke.setup(de,he,Ue,me,He);let Nt,Pt=Le;if(He!==null&&(Nt=Ce.get(He),Pt=ve,Pt.setIndex(Nt)),de.isMesh)he.wireframe===!0?(S.setLineWidth(he.wireframeLinewidth*Se()),Pt.setMode(J.LINES)):Pt.setMode(J.TRIANGLES);else if(de.isLine){let on=he.linewidth;on===void 0&&(on=1),S.setLineWidth(on*Se()),de.isLineSegments?Pt.setMode(J.LINES):de.isLineLoop?Pt.setMode(J.LINE_LOOP):Pt.setMode(J.LINE_STRIP)}else de.isPoints?Pt.setMode(J.POINTS):de.isSprite&&Pt.setMode(J.TRIANGLES);if(de.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Pt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const on=de._multiDrawStarts,Ge=de._multiDrawCounts,hn=de._multiDrawCount,vt=He?Ce.get(He).bytesPerElement:1,An=ue.get(he).currentProgram.getUniforms();for(let ri=0;ri<hn;ri++)An.setValue(J,"_gl_DrawID",ri),Pt.render(on[ri]/vt,Ge[ri])}else if(de.isInstancedMesh)Pt.renderInstances(We,Wt,de.count);else if(me.isInstancedBufferGeometry){const on=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ge=Math.min(me.instanceCount,on);Pt.renderInstances(We,Wt,Ge)}else Pt.render(We,Wt)};function $u(I,se,me,he){q!==null&&I.isNodeMaterial&&q.setObject(he,I),ne===!0&&$e.setState(I,me,!1),I.transparent===!0&&I.side===In&&I.forceSinglePass===!1?(I.side=gn,I.needsUpdate=!0,fo(I,se,he),I.side=ji,I.needsUpdate=!0,fo(I,se,he),I.side=In):fo(I,se,he)}this.compile=function(I,se,me=null){me===null&&(me=I),q!==null&&q.renderStart(I,se,me),b=Pe.get(me),b.init(se),v.push(b),me.traverseVisible(function(de){de.isLight&&de.layers.test(se.layers)&&(b.pushLight(de),de.castShadow&&b.pushShadow(de))}),I!==me&&I.traverseVisible(function(de){de.isLight&&de.layers.test(se.layers)&&(b.pushLight(de),de.castShadow&&b.pushShadow(de))}),b.setupLights(),q!==null&&q.updateLights(b.state.lightsArray),U=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,U),ne===!0&&$e.setGlobalState(this.clippingPlanes,se),q!==null&&et.render(b.state.shadowsArray,me,se);const he=new Set;return I.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const Fe=de.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Ue=Fe[Ve];$u(Ue,me,se,de),he.add(Ue)}else $u(Fe,me,se,de),he.add(Fe)}),b=v.pop(),q!==null&&q.renderEnd(),he},this.compileAsync=function(I,se,me=null){const he=this.compile(I,se,me);return new Promise(de=>{function Fe(){if(he.forEach(function(Ve){const He=ue.get(Ve).currentProgram;(He===void 0||He.isReady())&&he.delete(Ve)}),he.size===0){de(I);return}setTimeout(Fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Al=null;function wp(I){Al&&Al(I)}function Ju(){as.stop()}function Zu(){as.start()}const as=new zf;as.setAnimationLoop(wp),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(I){Al=I,qe.setAnimationLoop(I),I===null?as.stop():as.start()},qe.addEventListener("sessionstart",Ju),qe.addEventListener("sessionend",Zu),this.render=function(I,se){if(se!==void 0&&se.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;q!==null&&q.renderStart(I,se);const me=qe.enabled===!0&&qe.isPresenting===!0,he=R!==null&&(K===null||me)&&R.begin(T,K);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(se),se=qe.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,se,K),b=Pe.get(I,v.length),b.init(se),b.state.textureUnits=pe.getTextureUnits(),v.push(b),j.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),G.setFromProjectionMatrix(j,Kn,se.reversedDepth),U=this.localClippingEnabled,ne=$e.init(this.clippingPlanes,U),E=Ne.get(I,w.length),E.init(),w.push(E),qe.enabled===!0&&qe.isPresenting===!0){const Ve=T.xr.getDepthSensingMesh();Ve!==null&&Cl(Ve,se,-1/0,T.sortObjects)}Cl(I,se,0,T.sortObjects),E.finish(),q!==null&&q.updateLights(b.state.lightsArray),T.sortObjects===!0&&E.sort(Q,Z),ye=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,ye&&rt.addToRenderList(E,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&$e.beginShadows();const de=b.state.shadowsArray;if(et.render(de,I,se),ne===!0&&$e.endShadows(),(he&&R.hasRenderPass())===!1){const Ve=E.opaque,Ue=E.transmissive;if(b.setupLights(),se.isArrayCamera){const He=se.cameras;if(Ue.length>0)for(let Xe=0,lt=He.length;Xe<lt;Xe++){const dt=He[Xe];Qu(Ve,Ue,I,dt)}ye&&rt.render(I);for(let Xe=0,lt=He.length;Xe<lt;Xe++){const dt=He[Xe];Ku(E,I,dt,dt.viewport)}}else Ue.length>0&&Qu(Ve,Ue,I,se),ye&&rt.render(I),Ku(E,I,se)}K!==null&&B===0&&(pe.updateMultisampleRenderTarget(K),pe.updateRenderTargetMipmap(K)),he&&R.end(T),I.isScene===!0&&I.onAfterRender(T,I,se),ke.resetDefaultState(),X=-1,$=null,v.pop(),v.length>0?(b=v[v.length-1],pe.setTextureUnits(b.state.textureUnits),ne===!0&&$e.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,q!==null&&q.renderEnd()};function Cl(I,se,me,he){if(I.visible===!1)return;if(I.layers.test(se.layers)){if(I.isGroup)me=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(se);else if(I.isLightProbeGrid)b.pushLightProbeGrid(I);else if(I.isLight)b.pushLight(I),I.castShadow&&b.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(G)){he&&Y.setFromMatrixPosition(I.matrixWorld).applyMatrix4(j);const Ve=xe.update(I),Ue=I.material;Ue.visible&&E.push(I,Ve,Ue,me,Y.z,null,se)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(G))){const Ve=xe.update(I),Ue=I.material;if(he&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Y.copy(I.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Y.copy(Ve.boundingSphere.center)),Y.applyMatrix4(I.matrixWorld).applyMatrix4(j)),Array.isArray(Ue)){const He=Ve.groups;for(let Xe=0,lt=He.length;Xe<lt;Xe++){const dt=He[Xe],We=Ue[dt.materialIndex];We&&We.visible&&E.push(I,Ve,We,me,Y.z,dt,se)}}else Ue.visible&&E.push(I,Ve,Ue,me,Y.z,null,se)}}const Fe=I.children;for(let Ve=0,Ue=Fe.length;Ve<Ue;Ve++)Cl(Fe[Ve],se,me,he)}function Ku(I,se,me,he){const{opaque:de,transmissive:Fe,transparent:Ve}=I;b.setupLightsView(me),ne===!0&&$e.setGlobalState(T.clippingPlanes,me),he&&S.viewport(te.copy(he)),de.length>0&&ho(de,se,me),Fe.length>0&&ho(Fe,se,me),Ve.length>0&&ho(Ve,se,me),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Qu(I,se,me,he){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[he.id]===void 0){const We=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[he.id]=new Fn(1,1,{generateMipmaps:!0,type:We?ni:yn,minFilter:Xi,samples:Math.max(4,W.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Fe=b.state.transmissionRenderTarget[he.id],Ve=he.viewport||te;Fe.setSize(Ve.z*T.transmissionResolutionScale,Ve.w*T.transmissionResolutionScale);const Ue=T.getRenderTarget(),He=T.getActiveCubeFace(),Xe=T.getActiveMipmapLevel();T.setRenderTarget(Fe),T.getClearColor(le),fe=T.getClearAlpha(),fe<1&&T.setClearColor(16777215,.5),T.clear(),ye&&rt.render(me);const lt=T.toneMapping;T.toneMapping=Qn;const dt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),b.setupLightsView(he),ne===!0&&$e.setGlobalState(T.clippingPlanes,he),ho(I,me,he),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Et=0,Wt=se.length;Et<Wt;Et++){const Nt=se[Et],{object:Pt,geometry:on,material:Ge,group:hn}=Nt;if(Ge.side===In&&Pt.layers.test(he.layers)){const vt=Ge.side;Ge.side=gn,Ge.needsUpdate=!0,ju(Pt,me,he,on,Ge,hn),Ge.side=vt,Ge.needsUpdate=!0,We=!0}}We===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}T.setRenderTarget(Ue,He,Xe),T.setClearColor(le,fe),dt!==void 0&&(he.viewport=dt),T.toneMapping=lt}function ho(I,se,me){const he=se.isScene===!0?se.overrideMaterial:null;for(let de=0,Fe=I.length;de<Fe;de++){const Ve=I[de],{object:Ue,geometry:He,group:Xe}=Ve;let lt=Ve.material;lt.allowOverride===!0&&he!==null&&(lt=he),Ue.layers.test(me.layers)&&ju(Ue,se,me,He,lt,Xe)}}function ju(I,se,me,he,de,Fe){q!==null&&de.isNodeMaterial&&q.setObject(I,de),I.onBeforeRender(T,se,me,he,de,Fe),I.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),de.onBeforeRender(T,se,me,he,I,Fe),de.transparent===!0&&de.side===In&&de.forceSinglePass===!1?(de.side=gn,de.needsUpdate=!0,T.renderBufferDirect(me,se,he,de,I,Fe),de.side=ji,de.needsUpdate=!0,T.renderBufferDirect(me,se,he,de,I,Fe),de.side=In):T.renderBufferDirect(me,se,he,de,I,Fe),I.onAfterRender(T,se,me,he,de,Fe)}function fo(I,se,me){se.isScene!==!0&&(se=ae);const he=ue.get(I),de=b.state.lights,Fe=b.state.shadowsArray,Ve=de.state.version,Ue=Re.getParameters(I,de.state,Fe,se,me,b.state.lightProbeGridArray),He=Re.getProgramCacheKey(Ue);let Xe=he.programs;he.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?se.environment:null,he.fog=se.fog;const lt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;he.envMap=Ee.get(I.envMap||he.environment,lt),he.envMapRotation=he.environment!==null&&I.envMap===null?se.environmentRotation:I.envMapRotation,Xe===void 0&&(I.addEventListener("dispose",si),Xe=new Map,he.programs=Xe);let dt=Xe.get(He);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===Ve)return th(I,Ue),dt}else Ue.uniforms=Re.getUniforms(I),q!==null&&I.isNodeMaterial&&q.build(I,me,Ue),I.onBeforeCompile(Ue,T),dt=Re.acquireProgram(Ue,He),Xe.set(He,dt),he.uniforms=Ue.uniforms;const We=he.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(We.clippingPlanes=$e.uniform),th(I,Ue),he.needsLights=Rp(I),he.lightsStateVersion=Ve,he.needsLights&&(We.ambientLightColor.value=de.state.ambient,We.lightProbe.value=de.state.probe,We.sunLights.value=de.state.sun,We.sunLightShadows.value=de.state.sunShadow,We.directionalLights.value=de.state.directional,We.directionalLightShadows.value=de.state.directionalShadow,We.spotLights.value=de.state.spot,We.spotLightShadows.value=de.state.spotShadow,We.rectAreaLights.value=de.state.rectArea,We.ltc_1.value=de.state.rectAreaLTC1,We.ltc_2.value=de.state.rectAreaLTC2,We.pointLights.value=de.state.point,We.pointLightShadows.value=de.state.pointShadow,We.hemisphereLights.value=de.state.hemi,We.sunShadowMatrix.value=de.state.sunShadowMatrix,We.sunShadowCascade.value=de.state.sunShadowCascade,We.directionalShadowMatrix.value=de.state.directionalShadowMatrix,We.spotLightMatrix.value=de.state.spotLightMatrix,We.spotLightMap.value=de.state.spotLightMap,We.pointShadowMatrix.value=de.state.pointShadowMatrix),he.lightProbeGrid=b.state.lightProbeGridArray.length>0,he.currentProgram=dt,he.uniformsList=null,dt}function eh(I){if(I.uniformsList===null){const se=I.currentProgram.getUniforms();I.uniformsList=Jo.seqWithValue(se.seq,I.uniforms)}return I.uniformsList}function th(I,se){const me=ue.get(I);me.outputColorSpace=se.outputColorSpace,me.batching=se.batching,me.batchingColor=se.batchingColor,me.instancing=se.instancing,me.instancingColor=se.instancingColor,me.instancingMorph=se.instancingMorph,me.skinning=se.skinning,me.morphTargets=se.morphTargets,me.morphNormals=se.morphNormals,me.morphColors=se.morphColors,me.morphTargetsCount=se.morphTargetsCount,me.numClippingPlanes=se.numClippingPlanes,me.numIntersection=se.numClipIntersection,me.vertexAlphas=se.vertexAlphas,me.vertexTangents=se.vertexTangents,me.toneMapping=se.toneMapping}function Tp(I,se){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;x.setFromMatrixPosition(se.matrixWorld);for(let me=0,he=I.length;me<he;me++){const de=I[me];if(de.texture!==null&&de.boundingBox.containsPoint(x))return de}return null}function Ap(I,se,me,he,de){se.isScene!==!0&&(se=ae),pe.resetTextureUnits();const Fe=se.fog,Ve=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?se.environment:null,Ue=K===null?T.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pt.workingColorSpace,He=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,Xe=Ee.get(he.envMap||Ve,He),lt=he.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,dt=!!me.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),We=!!me.morphAttributes.position,Et=!!me.morphAttributes.normal,Wt=!!me.morphAttributes.color;let Nt=Qn;he.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=T.toneMapping);const Pt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,on=Pt!==void 0?Pt.length:0,Ge=ue.get(he),hn=b.state.lights;if(ne===!0&&(U===!0||I!==$)){const It=I===$&&he.id===X;$e.setState(he,I,It)}let vt=!1;he.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hn.state.version||Ge.outputColorSpace!==Ue||de.isBatchedMesh&&Ge.batching===!1||!de.isBatchedMesh&&Ge.batching===!0||de.isBatchedMesh&&Ge.batchingColor===!0&&de._colorsTexture===null||de.isBatchedMesh&&Ge.batchingColor===!1&&de._colorsTexture!==null||de.isInstancedMesh&&Ge.instancing===!1||!de.isInstancedMesh&&Ge.instancing===!0||de.isSkinnedMesh&&Ge.skinning===!1||!de.isSkinnedMesh&&Ge.skinning===!0||de.isInstancedMesh&&Ge.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&Ge.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&Ge.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&Ge.instancingMorph===!1&&de.morphTexture!==null||Ge.envMap!==Xe||he.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$e.numPlanes||Ge.numIntersection!==$e.numIntersection)||Ge.vertexAlphas!==lt||Ge.vertexTangents!==dt||Ge.morphTargets!==We||Ge.morphNormals!==Et||Ge.morphColors!==Wt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==on||!!Ge.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ge.__version=he.version);let An=Ge.currentProgram;vt===!0&&(An=fo(he,se,de),q&&he.isNodeMaterial&&q.onUpdateProgram(he,An,Ge));let ri=!1,zi=!1,Rs=!1;const Ct=An.getUniforms(),Bt=Ge.uniforms;if(S.useProgram(An.program)&&(ri=!0,zi=!0,Rs=!0),he.id!==X&&(X=he.id,zi=!0),Ge.needsLights){const It=Tp(b.state.lightProbeGridArray,de);Ge.lightProbeGrid!==It&&(Ge.lightProbeGrid=It,zi=!0)}if(ri||$!==I){S.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Ct.setValue(J,"projectionMatrix",I.projectionMatrix),Ct.setValue(J,"viewMatrix",I.matrixWorldInverse);const Bi=Ct.map.cameraPosition;Bi!==void 0&&Bi.setValue(J,ie.setFromMatrixPosition(I.matrixWorld)),W.logarithmicDepthBuffer&&Ct.setValue(J,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Ct.setValue(J,"isOrthographic",I.isOrthographicCamera===!0),$!==I&&($=I,zi=!0,Rs=!0)}if(Ge.needsLights&&(hn.state.sunShadowMap.length>0&&Ct.setValue(J,"sunShadowMap",hn.state.sunShadowMap,pe),hn.state.directionalShadowMap.length>0&&Ct.setValue(J,"directionalShadowMap",hn.state.directionalShadowMap,pe),hn.state.spotShadowMap.length>0&&Ct.setValue(J,"spotShadowMap",hn.state.spotShadowMap,pe),hn.state.pointShadowMap.length>0&&Ct.setValue(J,"pointShadowMap",hn.state.pointShadowMap,pe)),de.isSkinnedMesh){Ct.setOptional(J,de,"bindMatrix"),Ct.setOptional(J,de,"bindMatrixInverse");const It=de.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Ct.setValue(J,"boneTexture",It.boneTexture,pe))}de.isBatchedMesh&&(Ct.setOptional(J,de,"batchingTexture"),Ct.setValue(J,"batchingTexture",de._matricesTexture,pe),Ct.setOptional(J,de,"batchingIdTexture"),Ct.setValue(J,"batchingIdTexture",de._indirectTexture,pe),Ct.setOptional(J,de,"batchingColorTexture"),de._colorsTexture!==null&&Ct.setValue(J,"batchingColorTexture",de._colorsTexture,pe));const ki=me.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&re.update(de,me,An),(zi||Ge.receiveShadow!==de.receiveShadow)&&(Ge.receiveShadow=de.receiveShadow,Ct.setValue(J,"receiveShadow",de.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&se.environment!==null&&(Bt.envMapIntensity.value=se.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=d1()),zi){if(Ct.setValue(J,"toneMappingExposure",T.toneMappingExposure),Ge.needsLights&&Cp(Bt,Rs),Fe&&he.fog===!0&&Ye.refreshFogUniforms(Bt,Fe),Ye.refreshMaterialUniforms(Bt,he,F,y,b.state.transmissionRenderTarget[I.id]),Ge.needsLights&&Ge.lightProbeGrid){const It=Ge.lightProbeGrid;Bt.probesSH.value=It.texture,Bt.probesMin.value.copy(It.boundingBox.min),Bt.probesMax.value.copy(It.boundingBox.max),Bt.probesResolution.value.copy(It.resolution)}Jo.upload(J,eh(Ge),Bt,pe)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Jo.upload(J,eh(Ge),Bt,pe),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Ct.setValue(J,"center",de.center),Ct.setValue(J,"modelViewMatrix",de.modelViewMatrix),Ct.setValue(J,"normalMatrix",de.normalMatrix),Ct.setValue(J,"modelMatrix",de.matrixWorld),he.uniformsGroups!==void 0){const It=he.uniformsGroups;for(let Bi=0,Ps=It.length;Bi<Ps;Bi++){const ih=It[Bi];Me.update(ih,An),Me.bind(ih,An)}}return An}function Cp(I,se){I.ambientLightColor.needsUpdate=se,I.lightProbe.needsUpdate=se,I.sunLights.needsUpdate=se,I.sunLightShadows.needsUpdate=se,I.directionalLights.needsUpdate=se,I.directionalLightShadows.needsUpdate=se,I.pointLights.needsUpdate=se,I.pointLightShadows.needsUpdate=se,I.spotLights.needsUpdate=se,I.spotLightShadows.needsUpdate=se,I.rectAreaLights.needsUpdate=se,I.hemisphereLights.needsUpdate=se}function Rp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(I,se,me){const he=ue.get(I);he.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),ue.get(I.texture).__webglTexture=se,ue.get(I.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:me,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,se){const me=ue.get(I);me.__webglFramebuffer=se,me.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(I,se=0,me=0){K=I,O=se,B=me;let he=null,de=!1,Fe=!1;if(I){const Ue=ue.get(I);if(Ue.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(J.FRAMEBUFFER,Ue.__webglFramebuffer),te.copy(I.viewport),ee.copy(I.scissor),ce=I.scissorTest,S.viewport(te),S.scissor(ee),S.setScissorTest(ce),X=-1;return}else if(Ue.__webglFramebuffer===void 0)pe.setupRenderTarget(I);else if(Ue.__hasExternalTextures)pe.rebindTextures(I,ue.get(I.texture).__webglTexture,ue.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const lt=I.depthTexture;if(Ue.__boundDepthTexture!==lt){if(lt!==null&&ue.has(lt)&&(I.width!==lt.image.width||I.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(I)}}const He=I.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);const Xe=ue.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Xe[se])?he=Xe[se][me]:he=Xe[se],de=!0):I.samples>0&&pe.useMultisampledRTT(I)===!1?he=ue.get(I).__webglMultisampledFramebuffer:Array.isArray(Xe)?he=Xe[me]:he=Xe,te.copy(I.viewport),ee.copy(I.scissor),ce=I.scissorTest}else te.copy(C).multiplyScalar(F).floor(),ee.copy(P).multiplyScalar(F).floor(),ce=V;if(me!==0&&(he=H),S.bindFramebuffer(J.FRAMEBUFFER,he)&&S.drawBuffers(I,he),S.viewport(te),S.scissor(ee),S.setScissorTest(ce),de){const Ue=ue.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue.__webglTexture,me)}else if(Fe){const Ue=se;for(let He=0;He<I.textures.length;He++){const Xe=ue.get(I.textures[He]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+He,Xe.__webglTexture,me,Ue)}}else if(I!==null&&me!==0){const Ue=ue.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ue.__webglTexture,me)}X=-1};function nh(I){const se=ue.get(I);return(se.__readFormat!==I.format||se.__readType!==I.type)&&(se.__readFormat=I.format,se.__readType=I.type,se.__formatReadable=W.textureFormatReadable(I.format),se.__typeReadable=W.textureTypeReadable(I.type)),se}this.readRenderTargetPixels=function(I,se,me,he,de,Fe,Ve,Ue=0){if(!(I&&I.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ue.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He){S.bindFramebuffer(J.FRAMEBUFFER,He);try{const Xe=I.textures[Ue],lt=Xe.format,dt=Xe.type;I.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ue);const We=nh(Xe);if(We.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=I.width-he&&me>=0&&me<=I.height-de&&J.readPixels(se,me,he,de,Ie.convert(lt),Ie.convert(dt),Fe)}finally{const Xe=K!==null?ue.get(K).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(I,se,me,he,de,Fe,Ve,Ue=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ue.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ve!==void 0&&(He=He[Ve]),He)if(se>=0&&se<=I.width-he&&me>=0&&me<=I.height-de){S.bindFramebuffer(J.FRAMEBUFFER,He);const Xe=I.textures[Ue],lt=Xe.format,dt=Xe.type;I.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ue);const We=nh(Xe);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Et),J.bufferData(J.PIXEL_PACK_BUFFER,Fe.byteLength,J.STREAM_READ),J.readPixels(se,me,he,de,Ie.convert(lt),Ie.convert(dt),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const Wt=K!==null?ue.get(K).__webglFramebuffer:null;S.bindFramebuffer(J.FRAMEBUFFER,Wt);const Nt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await em(J,Nt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Et),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Fe),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Et),J.deleteSync(Nt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,se=null,me=0){const he=Math.pow(2,-me),de=Math.floor(I.image.width*he),Fe=Math.floor(I.image.height*he),Ve=se!==null?se.x:0,Ue=se!==null?se.y:0;pe.setTexture2D(I,0),J.copyTexSubImage2D(J.TEXTURE_2D,me,0,0,Ve,Ue,de,Fe),S.unbindTexture()},this.copyTextureToTexture=function(I,se,me=null,he=null,de=0,Fe=0){let Ve,Ue,He,Xe,lt,dt,We,Et,Wt;const Nt=I.isCompressedTexture?I.mipmaps[Fe]:I.image;if(me!==null)Ve=me.max.x-me.min.x,Ue=me.max.y-me.min.y,He=me.isBox3?me.max.z-me.min.z:1,Xe=me.min.x,lt=me.min.y,dt=me.isBox3?me.min.z:0;else{const Bt=Math.pow(2,-de);Ve=Math.floor(Nt.width*Bt),Ue=Math.floor(Nt.height*Bt),I.isDataArrayTexture?He=Nt.depth:I.isData3DTexture?He=Math.floor(Nt.depth*Bt):He=1,Xe=0,lt=0,dt=0}he!==null?(We=he.x,Et=he.y,Wt=he.z):(We=0,Et=0,Wt=0);const Pt=Ie.convert(se.format),on=Ie.convert(se.type);let Ge;se.isData3DTexture?(pe.setTexture3D(se,0),Ge=J.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(pe.setTexture2DArray(se,0),Ge=J.TEXTURE_2D_ARRAY):(pe.setTexture2D(se,0),Ge=J.TEXTURE_2D),S.activeTexture(J.TEXTURE0),S.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,se.flipY),S.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),S.pixelStorei(J.UNPACK_ALIGNMENT,se.unpackAlignment);const hn=S.getParameter(J.UNPACK_ROW_LENGTH),vt=S.getParameter(J.UNPACK_IMAGE_HEIGHT),An=S.getParameter(J.UNPACK_SKIP_PIXELS),ri=S.getParameter(J.UNPACK_SKIP_ROWS),zi=S.getParameter(J.UNPACK_SKIP_IMAGES);S.pixelStorei(J.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(J.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(J.UNPACK_SKIP_ROWS,lt),S.pixelStorei(J.UNPACK_SKIP_IMAGES,dt);const Rs=I.isDataArrayTexture||I.isData3DTexture,Ct=se.isDataArrayTexture||se.isData3DTexture;if(I.isDepthTexture){const Bt=ue.get(I),ki=ue.get(se),It=ue.get(Bt.__renderTarget),Bi=ue.get(ki.__renderTarget);S.bindFramebuffer(J.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ps=0;Ps<He;Ps++)Rs&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ue.get(I).__webglTexture,de,dt+Ps),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ue.get(se).__webglTexture,Fe,Wt+Ps)),J.blitFramebuffer(Xe,lt,Ve,Ue,We,Et,Ve,Ue,J.DEPTH_BUFFER_BIT,J.NEAREST);S.bindFramebuffer(J.READ_FRAMEBUFFER,null),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(de!==0||I.isRenderTargetTexture||ue.has(I)){const Bt=ue.get(I),ki=ue.get(se);S.bindFramebuffer(J.READ_FRAMEBUFFER,z),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,L);for(let It=0;It<He;It++)Rs?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Bt.__webglTexture,de,dt+It):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Bt.__webglTexture,de),Ct?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ki.__webglTexture,Fe,Wt+It):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ki.__webglTexture,Fe),de!==0?J.blitFramebuffer(Xe,lt,Ve,Ue,We,Et,Ve,Ue,J.COLOR_BUFFER_BIT,J.NEAREST):Ct?J.copyTexSubImage3D(Ge,Fe,We,Et,Wt+It,Xe,lt,Ve,Ue):J.copyTexSubImage2D(Ge,Fe,We,Et,Xe,lt,Ve,Ue);S.bindFramebuffer(J.READ_FRAMEBUFFER,null),S.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ct?I.isDataTexture||I.isData3DTexture?J.texSubImage3D(Ge,Fe,We,Et,Wt,Ve,Ue,He,Pt,on,Nt.data):se.isCompressedArrayTexture?J.compressedTexSubImage3D(Ge,Fe,We,Et,Wt,Ve,Ue,He,Pt,Nt.data):J.texSubImage3D(Ge,Fe,We,Et,Wt,Ve,Ue,He,Pt,on,Nt):I.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Fe,We,Et,Ve,Ue,Pt,on,Nt.data):I.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Fe,We,Et,Nt.width,Nt.height,Pt,Nt.data):J.texSubImage2D(J.TEXTURE_2D,Fe,We,Et,Ve,Ue,Pt,on,Nt);S.pixelStorei(J.UNPACK_ROW_LENGTH,hn),S.pixelStorei(J.UNPACK_IMAGE_HEIGHT,vt),S.pixelStorei(J.UNPACK_SKIP_PIXELS,An),S.pixelStorei(J.UNPACK_SKIP_ROWS,ri),S.pixelStorei(J.UNPACK_SKIP_IMAGES,zi),Fe===0&&se.generateMipmaps&&J.generateMipmap(Ge),S.unbindTexture()},this.initRenderTarget=function(I){ue.get(I).__webglFramebuffer===void 0&&pe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?pe.setTextureCube(I,0):I.isData3DTexture?pe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?pe.setTexture2DArray(I,0):pe.setTexture2D(I,0),S.unbindTexture()},this.resetState=function(){O=0,B=0,K=null,S.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const Xt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Za,AddEquation:ms,AddOperation:Qd,AdditiveBlending:gc,AgXToneMapping:Kc,AlphaFormat:su,AlwaysCompare:cf,AlwaysDepth:na,AlwaysStencilFunc:nf,ArcCurve:yf,ArrayCamera:Uf,BackSide:gn,BasicDepthPacking:ef,Box3:is,BoxGeometry:Fi,BufferAttribute:zn,BufferGeometry:Ht,ByteType:eu,Camera:Eu,CanvasTexture:pu,CatmullRomCurve3:_u,CineonToneMapping:Jc,CircleGeometry:ul,ClampToEdgeWrapping:ui,Color:ut,ColorManagement:pt,ConeGeometry:ws,ConstantAlphaFactor:Jd,ConstantColorFactor:Yd,Controls:Ff,CubeCamera:Nf,CubeDepthTexture:xf,CubeReflectionMapping:es,CubeRefractionMapping:Ss,CubeTexture:fu,CubeUVReflectionMapping:jr,CubicBezierCurve:vu,CubicBezierCurve3:Mf,CullFaceBack:mc,CullFaceFront:Ld,CullFaceNone:Pd,Curve:ii,CurvePath:bf,CustomBlending:Dd,CustomToneMapping:Zc,CylinderGeometry:to,Data3DTexture:mf,DataArrayTexture:au,DataTexture:uu,DepthFormat:gi,DepthStencilFormat:Yi,DepthTexture:rr,DirectionalLight:wu,DoubleSide:In,DstAlphaFactor:Vd,DstColorFactor:Wd,EllipseCurve:dl,EqualCompare:of,EqualDepth:sa,EquirectangularReflectionMapping:Wo,EquirectangularRefractionMapping:qo,Euler:Ui,EventDispatcher:Oi,ExternalTexture:mu,ExtrudeGeometry:ur,Float32BufferAttribute:yt,FloatType:Un,FogExp2:ll,FrontSide:ji,Frustum:cl,GLSL3:xc,GreaterCompare:af,GreaterDepth:oa,GreaterEqualCompare:rl,GreaterEqualDepth:ra,Group:$i,HalfFloatType:ni,HemisphereLight:Df,IcosahedronGeometry:io,ImageUtils:ff,InstancedBufferAttribute:Mc,InstancedMesh:Sc,IntType:Ka,KeepStencilOp:Yo,Layers:al,LessCompare:rf,LessDepth:ia,LessEqualCompare:sl,LessEqualDepth:tr,Light:gl,LightShadow:bu,Line:Fm,LineBasicMaterial:hu,LineCurve:xu,LineCurve3:Sf,LineDashedMaterial:p0,LinearFilter:tn,LinearMipmapLinearFilter:Xi,LinearMipmapNearestFilter:Xo,LinearSRGBColorSpace:Wr,LinearToneMapping:Yc,LinearTransfer:qr,MOUSE:Ti,Material:rs,MathUtils:xn,Matrix2:Rc,Matrix3:nt,Matrix4:xt,MaxEquation:Fd,Mesh:_n,MeshBasicMaterial:eo,MeshDepthMaterial:Lf,MeshDistanceMaterial:If,MeshStandardMaterial:Ys,MinEquation:Od,MirroredRepeatWrapping:la,MixOperation:Kd,MultiplyBlending:vc,MultiplyOperation:Xc,NearestFilter:Qt,NearestMipmapLinearFilter:Tr,NearestMipmapNearestFilter:jd,NeutralToneMapping:Qc,NeverCompare:sf,NeverDepth:ta,NoBlending:fi,NoColorSpace:bi,NoToneMapping:Qn,NormalBlending:Ks,NotEqualCompare:lf,NotEqualDepth:aa,Object3D:Vt,ObjectSpaceNormalMap:tf,OneFactor:kd,OneMinusConstantAlphaFactor:Zd,OneMinusConstantColorFactor:$d,OneMinusDstAlphaFactor:Hd,OneMinusDstColorFactor:qd,OneMinusSrcAlphaFactor:qc,OneMinusSrcColorFactor:Gd,OrthographicCamera:so,PCFShadowMap:Zs,PCFSoftShadowMap:Id,PMREMGenerator:Pc,Path:Ec,PerspectiveCamera:wn,Plane:ci,PlaneGeometry:Ts,PointLight:_l,Points:vf,PointsMaterial:du,PolyhedronGeometry:hl,QuadraticBezierCurve:yu,QuadraticBezierCurve3:Mu,Quaternion:Ni,R11_EAC_Format:ga,RED_GREEN_RGTC2_Format:Hr,RED_RGTC1_Format:Oa,REVISION:Ja,RG11_EAC_Format:Vr,RGBAFormat:On,RGBAIntegerFormat:il,RGBA_ASTC_10x10_Format:Pa,RGBA_ASTC_10x5_Format:Aa,RGBA_ASTC_10x6_Format:Ca,RGBA_ASTC_10x8_Format:Ra,RGBA_ASTC_12x10_Format:La,RGBA_ASTC_12x12_Format:Ia,RGBA_ASTC_4x4_Format:xa,RGBA_ASTC_5x4_Format:ya,RGBA_ASTC_5x5_Format:Ma,RGBA_ASTC_6x5_Format:Sa,RGBA_ASTC_6x6_Format:ba,RGBA_ASTC_8x5_Format:Ea,RGBA_ASTC_8x6_Format:wa,RGBA_ASTC_8x8_Format:Ta,RGBA_BPTC_Format:Da,RGBA_ETC2_EAC_Format:ma,RGBA_PVRTC_2BPPV1_Format:da,RGBA_PVRTC_4BPPV1_Format:ha,RGBA_S3TC_DXT1_Format:Nr,RGBA_S3TC_DXT3_Format:Ur,RGBA_S3TC_DXT5_Format:Or,RGBFormat:ru,RGB_BPTC_SIGNED_Format:Na,RGB_BPTC_UNSIGNED_Format:Ua,RGB_ETC1_Format:fa,RGB_ETC2_Format:pa,RGB_PVRTC_2BPPV1_Format:ua,RGB_PVRTC_4BPPV1_Format:ca,RGB_S3TC_DXT1_Format:Dr,RGFormat:ts,RGIntegerFormat:nl,RawShaderMaterial:Pf,Ray:cr,Raycaster:Of,RedFormat:el,RedIntegerFormat:tl,ReinhardToneMapping:$c,RenderTarget:pf,RepeatWrapping:Gr,ReverseSubtractEquation:Ud,SIGNED_R11_EAC_Format:_a,SIGNED_RED_GREEN_RGTC2_Format:za,SIGNED_RED_RGTC1_Format:Fa,SIGNED_RG11_EAC_Format:va,SRGBColorSpace:cn,SRGBTransfer:wt,Scene:_f,ShaderChunk:at,ShaderLib:Jn,ShaderMaterial:Bn,Shape:no,ShapeUtils:xs,ShortType:tu,Sphere:ss,SphereGeometry:fl,Spherical:Cc,SplineCurve:Su,SrcAlphaFactor:Wc,SrcAlphaSaturateFactor:Xd,SrcColorFactor:Bd,StaticDrawUsage:uf,SubtractEquation:Nd,SubtractiveBlending:_c,TOUCH:Ei,TangentSpaceNormalMap:ka,Texture:sn,TextureSource:ol,TorusGeometry:pl,Triangle:Dn,TubeGeometry:ml,UVMapping:jc,Uint16BufferAttribute:lu,Uint32BufferAttribute:cu,UniformsLib:De,UniformsUtils:Rf,UnsignedByteType:yn,UnsignedInt101111Type:iu,UnsignedInt248Type:ir,UnsignedInt5999Type:nu,UnsignedIntType:ti,UnsignedShort4444Type:Qa,UnsignedShort5551Type:ja,UnsignedShortType:nr,VSMShadowMap:Xs,Vector2:Te,Vector3:k,Vector4:Ft,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:Tu,WebGLRenderTarget:Fn,WebGLRenderer:Xf,WebGLUtils:Wf,WebGPUCoordinateSystem:sr,WebXRController:$o,ZeroFactor:zd,createCanvasElement:hf,error:_t,log:yc,warn:tt,warnOnce:ys},Symbol.toStringTag,{value:"Module"})),pd={type:"change"},Au={type:"start"},Yf={type:"end"},Vo=new cr,md=new ci,f1=Math.cos(70*xn.DEG2RAD),Yt=new k,vn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ac=1e-6;class p1 extends Ff{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Ni,this._lastTargetPosition=new k,this._quat=new Ni().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cc,this._sphericalDelta=new Cc,this._scale=1,this._panOffset=new k,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new k,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g1.bind(this),this._onPointerDown=m1.bind(this),this._onPointerUp=_1.bind(this),this._onContextMenu=E1.bind(this),this._onMouseWheel=y1.bind(this),this._onKeyDown=M1.bind(this),this._onTouchStart=S1.bind(this),this._onTouchMove=b1.bind(this),this._onMouseDown=v1.bind(this),this._onMouseMove=x1.bind(this),this._interceptControlDown=w1.bind(this),this._interceptControlUp=T1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Yt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vo.origin.copy(this.object.position),Vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vo.direction))<f1?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vo.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ac||this._lastTargetPosition.distanceToSquared(this.target)>ac?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function m1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function g1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yf),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function v1(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Tt.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Au)}function x1(n){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function y1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(n.preventDefault(),this.dispatchEvent(Au),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yf))}function M1(n){this.enabled!==!1&&this._handleKeyDown(n)}function S1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Tt.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Tt.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Au)}function b1(n){switch(this._trackPointer(n),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Tt.NONE}}function E1(n){this.enabled!==!1&&n.preventDefault()}function w1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const br=new k;function Rn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;br.copy(e),br[i]=0,br.normalize();const c=.5*o/(o+a),u=1-br.angleTo(n)/l;return Math.sign(br[t])===1?u*c:a/(o+a)+c+c*(1-u)}class Cu extends Fi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new k,c=new k,u=new k(e,t,i).divideScalar(2).subScalar(r),p=this.attributes.position.array,h=this.attributes.normal.array,m=this.attributes.uv.array,d=p.length/6,_=new k,g=.5/o;for(let f=0,M=0;f<p.length;f+=3,M+=2)switch(l.fromArray(p,f),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),p[f+0]=u.x*Math.sign(l.x)+c.x*r,p[f+1]=u.y*Math.sign(l.y)+c.y*r,p[f+2]=u.z*Math.sign(l.z)+c.z*r,h[f+0]=c.x,h[f+1]=c.y,h[f+2]=c.z,Math.floor(f/d)){case 0:_.set(1,0,0),m[M+0]=Rn(_,c,"z","y",r,i),m[M+1]=1-Rn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),m[M+0]=1-Rn(_,c,"z","y",r,i),m[M+1]=1-Rn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),m[M+0]=1-Rn(_,c,"x","z",r,e),m[M+1]=Rn(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),m[M+0]=1-Rn(_,c,"x","z",r,e),m[M+1]=1-Rn(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),m[M+0]=1-Rn(_,c,"x","y",r,e),m[M+1]=1-Rn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),m[M+0]=Rn(_,c,"x","y",r,e),m[M+1]=1-Rn(_,c,"y","x",r,t);break}}static fromJSON(e){return new Cu(e.width,e.height,e.depth,e.segments,e.radius)}}function A1(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ht;let c=0;for(let u=0;u<n.length;++u){const p=n[u];let h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in p.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(p.attributes[m]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in p.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(p.morphAttributes[m])}if(e){let m;if(t)m=p.index.count;else if(p.attributes.position!==void 0)m=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const p=[];for(let h=0;h<n.length;++h){const m=n[h].index;for(let d=0;d<m.count;++d)p.push(m.getX(d)+u);u+=n[h].attributes.position.count}l.setIndex(p)}for(const u in r){const p=gd(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,p)}for(const u in o){const p=o[u][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<p;++h){const m=[];for(let _=0;_<o[u].length;++_)m.push(o[u][_][h]);const d=gd(m);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(d)}}}return l}function gd(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new zn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const p=l/t;for(let h=0,m=u.count;h<m;h++)for(let d=0;d<t;d++){const _=u.getComponent(h,d);a.setComponent(h+p,d,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function C1({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:l,sphere:c,cyl:u,torus:p,rod:h,sign:m,paperBoat:d,batchStatic:_,persist:g,say:f,refresh:M,chime:A,reduced:x}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],w=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),p([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const R=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],R),p([0,0,0],.36,.015,s.copper,R,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),p([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const T=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,T);for(const[C,P,V]of[[-.17,.23,-.5],[.17,.41,.5]]){const G=c([C,P,0],[.24,.035,.085],s.mint,T);G.rotation.z=V}const D=o([0,.95,0],T);c([0,0,0],.115,s.light,D),p([0,0,0],.28,.021,s.cream,D,[0,0,0]),p([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const q=[];for(let C=0;C<4;C++){const P=C*Math.PI/2,V=o([Math.cos(P)*.3,.13+Math.sin(P)*.12,Math.sin(P)*.3],T);h([0,-.15,0],[0,.2,0],.012,s.copper,V),c([0,.23,0],.065,s.cream,V),_(V,[]),q.push(V)}l([-.46,.2,.32],[.68,.12,.47],s.dark,v);const H=o([-.46,.29,.32],v);l([0,0,0],[.5,.025,.32],s.cream,H);for(const C of[-.23,.23])h([C,.016,-.14],[0,.016,.06],.009,s.copper,H);c([0,.027,.06],[.04,.015,.04],s.rust,H),m("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(R,[]),_(D,[]),_(T,[D,...q]),_(H,[]),_(v,[R,T,H]);const z=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);z.castShadow=!1;const L=o([0,0,0],e),O=d(L,[8.3,.14,3.5],1.05),B=o([0,.36,0],O),K=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],B),X=c([0,.12,0],[.085,.13,.085],s.light,B),$=l([0,.09,0],[.23,.025,.16],s.cream,B);$.rotation.z=.2;const te=[K,X,$];_(O,[B]);const ee=new n.Vector3(8.3,.14,3.5),ce=new n.Vector3(8.45,.14,3.65),le=new n.Vector3(9.2,-2.7,6.5);let fe=-1,N=i.dockTrips>=2?1:.02;function y(){R.visible=i.dockTrips>=1,T.visible=i.dockTrips>=2,H.visible=i.dockTrips>=3,q.forEach((C,P)=>C.visible=i.dockTrips>=5+P*3),B.visible=i.dockPending,te.forEach((C,P)=>C.visible=P===i.dockTrips%3),O.position.copy(i.dockPending?ce:ee)}y();function F(){if(!(i.boat>0))if(i.dockPending){const C=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(N=.02),g(),y(),f(C.line),A(330),M()}else i.boat=18,fe=-1,te.forEach((C,P)=>C.visible=P===i.dockTrips%3),B.visible=!1,f("ну плыви. я тут."),M()}function Q(C,P){if(i.boat>0){i.boat=Math.max(0,i.boat-C);const V=18-i.boat,G=V<7?0:V<11?1:2;G!==fe&&(fe=G,M()),V<2?O.position.lerpVectors(ee,ce,n.MathUtils.smoothstep(V,0,2)):V<7?O.position.lerpVectors(ce,le,n.MathUtils.smoothstep(V,2,7)):V<11?O.position.copy(le):V<16?O.position.lerpVectors(le,ce,n.MathUtils.smoothstep(V,11,16)):O.position.copy(ce),O.visible=V<7||V>=11,B.visible=V>=11,O.rotation.y=V>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,g(),O.visible=!0,y(),f("вернулся. с чем-то."),A(554),M())}O.rotation.z=x?0:Math.sin(P*1.7)*.035,i.boat===0&&(O.visible=!0,O.position.y=(i.dockPending?ce.y:ee.y)+Math.sin(P*1.2)*.02,O.rotation.y=i.dockPending?Math.PI+.2:0),R.position.y=.97+Math.sin(P*.9)*.055,R.rotation.y=P*.15,N=n.MathUtils.damp(N,1,1.1,C),T.scale.setScalar(N),D.rotation.y=x?0:P*.23,z.material.emissiveIntensity=i.dockPending?1.5+Math.sin(P*4)*1.1:1.2}function Z(){if(i.boat>0){const C=18-i.boat;return{disabled:!0,action:C<7?"плывёт…":C<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const C=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:C===2?`${b[C].description} ${w[Math.floor((i.dockTrips-1)/3)%w.length]}`:b[C].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:L,gallery:v,beacon:z,launchOrCollect:F,update:Q,card:Z,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:O.position.toArray(),visible:O.visible,cargo:B.visible,stone:R.visible,plant:T.visible,plantScale:N,letter:H.visible,buds:q.filter(C=>C.visible).length})}}async function $f(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function R1({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),l="beznogim-public-notes-v1";let c="all",u=!s.matches,p=!1,h=!1,m=!1,d=!1,_=!1,g=0,f=null,M=0,A=0,x=0,E=!1;try{const Y=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");Y!==null&&(u=Y==="open")}catch{}const b=(Y,ae,ye)=>{const Se=document.createElement(Y);return ae&&(Se.className=ae),ye&&(Se.textContent=ye),Se},w=b("aside","resident-history");w.id="resident-history",w.setAttribute("aria-label","История мыслей и действий Головы");const v=b("div","history-heading"),R=b("div"),T=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),D=b("h3","","на полях"),q=b("span","history-eyes");q.setAttribute("aria-hidden","true"),D.append(q),R.append(T,D,b("p","history-subtitle","мысли, дела и прочее"));const H=b("button","history-close","−");H.type="button",H.setAttribute("aria-label","Свернуть историю"),H.title="Свернуть историю",v.append(R,H);const z=b("div","history-filters");z.setAttribute("role","group"),z.setAttribute("aria-label","Показывать в истории");const L=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[Y,ae]of L){const ye=b("button","",ae);ye.type="button",ye.dataset.filter=Y,ye.setAttribute("aria-pressed",String(c===Y)),ye.onclick=()=>{c=Y,P(!1),B.scrollTop=0;for(const Se of z.children)Se.setAttribute("aria-pressed",String(Se.dataset.filter===c))},z.append(ye)}const O=b("button","history-new");O.type="button",O.hidden=!0;const B=b("div","history-scroll");B.tabIndex=0,B.setAttribute("aria-label","Записи, от новых к старым");const K=b("ol","history-list"),X=b("p","history-empty","собираю заметки…");B.append(K,X);const $=b("div","history-foot"),te=b("span","history-live","подключаюсь…"),ee=b("span","history-count"),ce=b("button","history-retry","повторить подключение");ce.type="button",ce.hidden=!0,ce.onclick=()=>{U(),window.dispatchEvent(new Event("beznogim:retry"))},$.append(te,ee,ce),w.append(v,z,O,B,$);const le=b("button","history-toggle");le.type="button",le.setAttribute("aria-controls",w.id);const fe=b("span","","на полях"),N=b("span","history-badge");N.hidden=!0,le.append(b("span","history-toggle-icon","◌"),fe,N),document.body.append(w),document.querySelector(".footer-actions").append(le);function y(Y,ae=!0){if(u=Y,w.hidden=!u,le.hidden=u,le.setAttribute("aria-expanded",String(u)),ae)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(B.scrollTop<30?F():Q(),H.focus({preventScroll:!0})):ae&&le.focus({preventScroll:!0})}w.hidden=!u,le.hidden=u,le.setAttribute("aria-expanded",String(u)),le.onclick=()=>{y(!0),(d||!h)&&U()},H.onclick=()=>y(!1),s.addEventListener("change",()=>{let Y=!s.matches;try{const ae=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ae!==null&&(Y=ae==="open")}catch{}y(Y,!1)}),document.addEventListener("keydown",Y=>{Y.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&y(!1)});function F(){g=0,N.hidden=!0,O.hidden=!0}function Q(){N.textContent=String(g),N.hidden=!g,O.textContent=`↑ к новым · ${g}`,O.hidden=!(u&&g)}O.onclick=()=>{B.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),F()},B.addEventListener("scroll",()=>{B.scrollTop<30&&F()},{passive:!0});function Z(Y){return c==="all"||(c==="thoughts"?Y.type==="muse"||Y.type==="say":Y.type!=="muse"&&Y.type!=="say")}function C(Y,ae){const ye=Y.type==="muse"||Y.type==="say",Se=b("li",`history-entry ${ye?"history-thought":"history-action"}${ae?" is-new":""}`);Se.dataset.eventId=String(Y.id),Se.dataset.type=Y.type;const J=b("div","history-meta"),ze=b("time","",r.format(Y.time*1e3));ze.dateTime=new Date(Y.time*1e3).toISOString(),ze.title=o.format(Y.time*1e3)+" · "+ze.textContent+" мск";const Ae={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return J.append(b("span","",Ae[Y.type]||"во дворе"),ze),Se.append(J,b("p","",Y.text)),Se}function P(Y,ae=new Set){const ye=B.scrollTop>30,Se=B.getBoundingClientRect().top,J=ye?[...K.querySelectorAll("[data-event-id]")].find(pe=>pe.getBoundingClientRect().bottom>Se):null,ze=J==null?void 0:J.dataset.eventId,Ae=J==null?void 0:J.getBoundingClientRect().top,W=B.scrollTop,S=document.createDocumentFragment();let oe="";const ue=[...i.values()].sort((pe,Ee)=>Ee.id-pe.id).filter(Z);for(const pe of ue){const Ee=o.format(pe.time*1e3);if(Ee!==oe){const Ce=b("li","history-day",Ee);S.append(Ce),oe=Ee}S.append(C(pe,Y&&ae.has(pe.id)&&!ye))}if(K.replaceChildren(S),X.hidden=ue.length>0,X.textContent=d?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ue.length&&(X.textContent="в этом фильтре пока нет записей."),ee.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",ce.hidden=!(d||!h&&!m),ce.disabled=m,ze){const pe=K.querySelector(`[data-event-id="${ze}"]`);B.scrollTop=W+(pe?pe.getBoundingClientRect().top-Ae:0)}else ye||(B.scrollTop=0)}function V(Y,ae=!1){if(!Y||!Array.isArray(Y.entries))return!1;const ye=Math.max(0,...i.keys()),Se=new Set;let J=0,ze=0;for(const Ae of Y.entries)!Ae||typeof Ae!="object"||!Number.isSafeInteger(Ae.id)||Ae.id<1||!Number.isFinite(Ae.time)||Math.abs(Ae.time)>864e10||!a.has(Ae.type)||typeof Ae.text!="string"||!Ae.text.trim()||(ze++,i.has(Ae.id)||(E=!0,i.set(Ae.id,{id:Ae.id,time:Ae.time,type:Ae.type,text:Ae.text.slice(0,280)}),Se.add(Ae.id),Ae.id>ye&&Z(Ae)&&J++));if(Y.entries.length&&!ze)return!1;if(_=_||!!Y.has_older||!!Y.has_more||i.size>t,i.size>t){const Ae=[...i.keys()].sort((W,S)=>W-S);for(const W of Ae.slice(0,i.size-t))i.delete(W)}return p&&!ae&&J&&(!u||B.scrollTop>30)&&(g+=J,Q()),(Se.size||!p)&&P(p&&!ae,Se),!0}function G(){if(!(!i.size||!E)){E=!1,A=Date.now();try{localStorage.setItem(l,JSON.stringify({version:1,saved_at:A,has_older:_,entries:[...i.values()]}))}catch{}}}function ne(){try{const Y=localStorage.getItem(l);if(!Y||Y.length>1e6)return;const ae=JSON.parse(Y);if(ae.version!==1||!Number.isFinite(ae.saved_at)||ae.saved_at<=0)return;V(ae,!0),A=ae.saved_at,p=i.size>0,E=!1}catch{}}async function U(){if(!m){m=!0,x=performance.now(),ce.disabled=!0;try{const Y=await $f(n+"/api/history");if(!V(Y,!0))throw Error("invalid-public-history");h=!0,p=!0,d=!1,G(),P(!1)}catch{d=!0,P(!1)}finally{m=!1,ce.disabled=!1,j()}}}function j(){var ye;const Y=!f||performance.now()-M>35e3||f.server_time-f.heartbeat>60||f.resident_status==="stopped";w.classList.toggle("history-offline",Y);const ae=A?` · сохранено ${r.format(A)} мск`:" · записи на устройстве";te.textContent=Y?i.size?"связи нет":"нет связи с живым сервером":f.resident_status==="sleeping"?"голова спит · дневник открыт":f.resident_status==="paused"?"голова отдыхает":"жизнь идёт",Y&&i.size&&(te.textContent+=ae),!Y&&d&&(te.textContent+=" · архив не дошёл"),te.title=((ye=f==null?void 0:f.action)==null?void 0:ye.label)||""}function ie(Y){var ze;const ae=Math.max(0,...i.keys()),ye=Array.isArray((ze=Y.history)==null?void 0:ze.entries)?Y.history.entries:[];f=Y,M=performance.now(),V(Y.history)&&i.size&&(p=!0,G()),j();const Se=ye.filter(Ae=>Ae&&Number.isSafeInteger(Ae.id)).map(Ae=>Ae.id);(ae&&Se.length&&Math.min(...Se)>ae&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&U()}window.addEventListener("beznogim:state",Y=>ie(Y.detail)),window.__beznogimState&&ie(window.__beznogimState),ne(),P(!1),j(),U(),window.addEventListener("online",()=>{(d||!h)&&U()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(d||!h)&&U()}),setInterval(()=>{j(),(d||!h)&&U()},15e3)}function P1({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:l}){let c=null,u=0,p=0,h=!1,m=!1,d=!1,_=0,g=null,f=null,M=null,A="",x=!0;const E=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const w=document.createElement("span");w.className="thought-kicker",w.textContent="про себя";const v=document.createElement("p");b.append(w,v),document.body.append(b);const R=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),T=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";R1({api:T,enabled:R});const D=document.querySelector(".territory-nav"),q=document.createElement("div");q.className="resident-strip",q.hidden=!0;const H=document.createElement("span");H.className="resident-status",H.textContent="подключаюсь к голове";const z=document.createElement("div");z.className="resident-vitals",z.hidden=!0,z.setAttribute("aria-label","Самочувствие Головы");const O=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(C=>{const P=document.createElement("div");return P.className="need-meter",P.dataset.need=C.key,P.style.setProperty("--need-color",C.color),P.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${C.icon}</svg><div class="need-detail"><div class="need-heading"><b>${C.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${C.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,z.append(P),{key:C.key,card:P,value:P.querySelector(".need-value"),bar:P.querySelector(".need-track")}}),B=document.createElement("button");B.type="button",B.textContent="к голове",B.onclick=()=>{m=!1,d=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),le()};const K=document.createElement("button");K.type="button",K.textContent="поиграть самому",K.onclick=()=>{m=!m,d=!1,le()};const X=document.createElement("button");X.type="button",X.textContent="мысли",X.setAttribute("aria-pressed","true"),X.onclick=()=>{x=!x,X.setAttribute("aria-pressed",String(x))},q.append(H,z,B,K,X),D.append(q);function $(){return Date.now()/1e3+p}function te(){return c&&$()-c.heartbeat<60&&c.resident_status!=="stopped"}function ee(){return h&&c&&!m}function ce(){var V,G;const C=(G=(V=c==null?void 0:c.mechanics)==null?void 0:V.vitals)==null?void 0:G.public;if(!C){z.hidden=!0;return}const P=ne=>Math.max(0,Math.min(100,Math.round(Number(ne)||0)));z.hidden=!1;for(const ne of O){const U=P(C[ne.key]);ne.value.textContent=String(U),ne.bar.setAttribute("aria-valuenow",String(U)),ne.card.style.setProperty("--need-fill",String(U/100)),ne.card.dataset.low=String(U<=20)}}function le(){const C=m?"ты в песочнице":h?te()?c!=null&&c.action&&c.action.ends>$()?c.action.label:(c==null?void 0:c.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";C!==A&&(A=C,H.textContent=C),K.textContent=m?"вернуться к голове":"поиграть самому",B.setAttribute("aria-pressed",String(d))}function fe(C){var V,G;if(!C||C.version!==1||!Array.isArray(C.position)||C.position.length!==3||!C.position.every(Number.isFinite)||!C.objects||!Number.isFinite(C.server_time)||!Number.isFinite(C.heartbeat)||c&&(C.server_time<c.server_time||C.server_time===c.server_time&&Number.isFinite(C.revision)&&Number.isFinite(c.revision)&&C.revision<c.revision))return;if(p=C.server_time-Date.now()/1e3,c=C,u=performance.now(),h=!0,q.hidden=!1,g&&((V=C.release)!=null&&V.commit)&&g!==C.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}g=((G=C.release)==null?void 0:G.commit)||g;const P=C.speech;P&&P.time>_&&P.until>$()&&(_=P.time,m||a(P.text)),window.__beznogimState=C,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:C})),ce(),le()}function N(){const C=c.action;if((C==null?void 0:C.kind)==="move"){const P=Math.max(0,Math.min(1,($()-C.started)/Math.max(.001,C.ends-C.started)));return C.from.map((V,G)=>V+(C.to[G]-V)*P)}return c.position}function y(){if(!ee())return;const C=c.objects;C.engine&&(t.running=!!C.engine.running),C.workshop&&(t.roof=C.workshop.roof_open?1:0),C.radio&&(t.radio=C.radio.station,f!==t.radio&&(f=t.radio,o())),C.garden&&(t.harvest=C.garden.harvest,M!==null&&t.harvest>M&&l(),M=t.harvest);const P=c.action;t.brew=(P==null?void 0:P.effect)==="brew"?Math.max(0,P.ends-$()):0,t.loop=0,le()}function F(){if(!ee()){b.hidden=!0;return}const C=N();n.position.set(C[0],C[1]+Math.sin($()*1.4)*.1,C[2]),e.set(...C),d&&i.target.lerp(n.position,.08);const P=c.musing;if(x&&te()&&(P!=null&&P.text)&&P.until>$()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==P.text&&(v.textContent=P.text),E.copy(n.position),E.y+=1.8,E.project(s),E.z>=-1&&E.z<=1&&Math.abs(E.x)<1&&Math.abs(E.y)<1){b.hidden=!1;const V=b.offsetWidth,G=b.offsetHeight,ne=Math.max(V/2+12,Math.min(innerWidth-V/2-12,(E.x+1)*innerWidth/2));let U=(1-E.y)*innerHeight/2-18;const j=D.getBoundingClientRect(),ie=ne-V/2<j.right&&ne+V/2>j.left?j.bottom+12:18,Y=U-G<ie;Y&&(U=Math.max(ie+G,(1-E.y)*innerHeight/2+70+G)),U=Math.min(innerHeight-70,Math.max(G+18,U)),b.classList.toggle("below-head",Y),b.style.transform=`translate3d(${Math.round(ne)}px,${Math.round(U)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function Q(){ee()&&(m=!0,d=!1,le())}function Z(){if(!R)return;q.hidden=!1;let C=!1;async function P(){if(!C){C=!0;try{const G=await $f(T+"/api/state");fe(G),c&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!c||performance.now()-u>35e3)&&(h=!1),le()}finally{C=!1}}}try{const G=new EventSource(T+"/api/events");G.addEventListener("state",ne=>{try{fe(JSON.parse(ne.data))}catch{}}),G.onerror=()=>{h=!1,le()}}catch{h=!1,le()}P();function V(){(!h||!c||performance.now()-u>3e4)&&P()}window.addEventListener("online",V),window.addEventListener("beznogim:retry",P),document.addEventListener("visibilitychange",()=>{document.hidden||V()}),setInterval(()=>{c&&performance.now()-u>35e3&&(h=!1),le(),V()},15e3)}return i.addEventListener("start",()=>{d=!1,le()}),Z(),{sync:y,place:F,localPlay:Q,unfollow:()=>{d=!1},watching:ee,inspect:()=>{var C;return{connected:h,sandbox:m,follow:d,alive:!!te(),revision:c==null?void 0:c.revision,release:(C=c==null?void 0:c.release)==null?void 0:C.commit,action:c==null?void 0:c.action,musing:c==null?void 0:c.musing,thoughtVisible:!b.hidden,position:c?N():null}}}}const L1=120,I1=24,D1=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"settled",name:"шовная"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"settled",name:"облачная перегонная"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Yn={size:L1,sectorSize:I1,sectors:D1};function N1({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const l=new $i;l.name="unsettled-territory",n.add(l);const c=Yn.size/2,u=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],p=new no;u.forEach(([T,D],q)=>q?p.lineTo(T,-D):p.moveTo(T,-D)),p.closePath();const h=new ur(p,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const m=new _n(h,new Ys({color:"#233e35",roughness:1}));m.receiveShadow=!0,l.add(m);let d=8409;const _=()=>(d=d*1664525+1013904223>>>0)/4294967296,g=new Sc(new io(1,0),new Ys({color:"#8a9980",roughness:1}),150),f=new Sc(new ws(1,1,4),new Ys({color:"#9aa880",roughness:1}),850),M=new Vt;for(const[T,D,q]of[[g,150,!0],[f,850,!1]]){for(let H=0;H<D;H++){let z,L;do z=(_()-.5)*(Yn.size-10),L=(_()-.5)*(Yn.size-10);while(Math.abs(z)<11&&Math.abs(L)<9);const O=q?.15+_()*.48:.12+_()*.42;M.position.set(z,-1.7+O*.25,L),M.rotation.set(0,_()*6.28,q?_()*.25:0),M.scale.set(q?O*1.3:.07,O,q?O:.07),M.updateMatrix(),T.setMatrixAt(H,M.matrix)}T.instanceMatrix.needsUpdate=!0,l.add(T)}const A=new Ys({color:"#c1b692",roughness:1});for(let T=0;T<16;T++){const D=new _n(new Fi(1.15,.12,.65),A);D.position.set(-.6,-.06-T*.105,5.8+T*.7),D.receiveShadow=!0,l.add(D)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const E=document.createElement("dialog");E.id="territory-dialog",E.setAttribute("aria-labelledby","territory-title"),E.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. К востоку от почтового моста четыре карты переливают облако за шестнадцать игровых часов. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(E);const b=E.querySelector("#territory-grid");for(const T of Yn.sectors){const D=document.createElement("button");D.type="button",D.dataset.sector=T.id,D.className=T.status==="settled"?"settled":"",D.textContent=T.status==="settled"?`● ${T.id==="0:0"?"двор":T.name}`:`· ${T.id}`,D.setAttribute("aria-label",`${T.name}, ${T.id}`),D.onclick=()=>{E.close(),s(T.x,T.z,T.status==="settled")},b.append(D)}document.querySelector("#territory-map").onclick=()=>E.showModal(),document.querySelector("#world-overview").onclick=r,E.querySelector("#territory-close").onclick=()=>E.close(),E.querySelector("#territory-home").onclick=()=>{E.close(),o()};const w=x.querySelector("#territory-location");let v="";function R(){const T=a()||t.target,D=Math.round(T.x/Yn.sectorSize),q=Math.round(T.z/Yn.sectorSize),H=`${D}:${q}`;if(H!==v){v=H;const z=Yn.sectors.find(L=>L.id===H);w.textContent=`${(z==null?void 0:z.status)==="settled"?z.name:"свободная земля"} · ${H}`;for(const L of b.children)L.classList.toggle("current",L.dataset.sector===H)}}return{half:c,update:R,inspect:()=>({size:Yn.size,sectorSize:Yn.sectorSize,sectors:Yn.sectors.length,settled:Yn.sectors.filter(T=>T.status==="settled").length,visible:n.visible,sector:v})}}function U1({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:p,sign:h,paperBoat:m,batchStatic:d,changed:_,chime:g}){let f={};try{f=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(f.wins)||0))),trace:f.trace===!0},A=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const E=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,E),a([0,.46,0],[1.22,.08,1.3],s.dark,E);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const Y of[-.62,.62])for(const ae of[-.64,.64])u([Y,.46,ae],[Y,1.45,ae],.024,s.copper,E);for(const Y of[-.62,.62])a([Y,.96,0],[.018,.95,1.28],b,E);a([0,.96,-.64],[1.24,.95,.018],b,E);const w=o([0,1.45,-.64],E);for(const Y of[-.62,.62])u([Y,0,0],[Y,.36,.64],.026,s.copper,w);for(const Y of[-.62,.62])u([Y,.36,.64],[Y,0,1.28],.026,s.copper,w);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,w);const v=a([0,.18,.32],[1.26,.025,.72],b,w);v.rotation.x=-.51;const R=a([0,.18,.96],[1.26,.025,.72],b,w);R.rotation.x=.51;const T=o([0,.52,0],E);c([0,.2,0],.026,.4,s.leaf,T);for(const Y of[-1,1]){const ae=l([Y*.15,.27,0],[.22,.055,.09],s.leaf,T);ae.rotation.z=Y*.35}const D=l([0,.25,.12],[.23,.16,.27],s.copper,T),q=l([.42,.58,.46],[.15,.1,.18],s.copper,E);q.visible=M.wins>0;const H=o([-.76,.7,.69],E);a([0,.28,0],[.13,.66,.06],s.cream,H);const z=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),H);l([0,-.06,.04],.065,s.rust,H),h("ПАРНИК",[0,.3,.716],.93,.22,E,{size:49});const L=p([0,2.05,0],.46,.016,s.mint,E);L.visible=M.trace;const O=[];for(let Y=0;Y<6;Y++)O.push(l([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),E));d(E,[w,T,H,L,q,...O]),d(w,[]),d(T,[D]),d(H,[z]);let B=0,K=0;function X(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),B=0,_()}function $(Y){if(M.mode!=="playing")return;const ae={heat:2,wait:0,vent:-2};Y in ae&&(M.temp+=A[M.turn]+ae[Y],M.turn++,M.temp>6?(M.mode="hot",B=3,g(110)):M.temp<3?(M.mode="cold",g(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),q.visible=!0,x(),g(660)),_())}function te(){let Y="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(Y=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${A[M.turn]>0?"+":""}${A[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(Y=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(Y=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(Y="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:Y,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const ee=o([0,0,0],t);ee.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ee),a([0,-.42,0],[6.8,.08,5.6],s.dark,ee);for(const Y of[-3.2,3.2])for(const ae of[-2.6,2.6])u([Y,-.4,ae],[Y,4,ae],.055,s.copper,ee);for(const Y of[-3.2,3.2])u([Y,4,-2.6],[Y,5.7,0],.055,s.copper,ee),u([Y,5.7,0],[Y,4,2.6],.055,s.copper,ee);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ee),a([-3.2,1.8,0],[.025,4.4,5.2],b,ee),a([0,1.8,-2.6],[6.4,4.4,.025],b,ee),h("СОН / 01",[0,-.12,2.93],2.2,.38,ee,{size:52});const ce=o([0,1.6,0],ee);l([0,0,0],1.16,r("#5f9c85"),ce);for(let Y=0;Y<10;Y++){let ae=Y*2.4;const ye=l([Math.sin(ae)*.95,Math.cos(Y*1.2)*.6,Math.cos(ae)*.95],[.35,.2,.3],s.leaf,ce);ye.rotation.y=ae}p([0,0,0],1.32,.028,s.copper,ce,[.4,0,.2]);const le=o([0,1.6,0],ee),fe=[];for(let Y=0;Y<28;Y++){const ae=a([0,0,0],[.53,.11,.32],Y%4?s.cream:s.concrete,le);fe.push(ae)}const N=m(ee,[1.7,-.05,1],1.65),y=l([0,.65,0],.13,s.cream,N),F=o([0,.65,0],N);F.visible=!1;for(let Y=0;Y<8;Y++){let ae=Y/8*Math.PI*2;u([Math.sin(ae)*.27,Math.cos(ae)*.27,0],[Math.sin(ae)*.5,Math.cos(ae)*.5,0],.026,s.light,F)}const Q=i.clone(!0);ee.add(Q),Q.scale.setScalar(.72),Q.position.set(-2,1,1.3),Q.rotation.z=-.25;const Z=o([-2,-.05,1.3],ee);c([0,0,0],.55,.3,s.cream,Z),p([.58,0,0],.25,.04,s.copper,Z,[0,0,0]);const C=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ee);C.rotation.y=.2;let P=0,V=0,G=!1;d(ee,[ce,le,N,Q]),d(ce,[]);function ne(){G=!0,P=0,V=0,ee.visible=!0,e.visible=!1,_()}function U(){G=!1,ee.visible=!1,e.visible=!0,_()}function j(){G&&(P===3?(P=0,V=0):(P++,g(220+P*110),P===3&&(M.trace=!0,L.visible=!0,x())),_())}function ie(Y,ae){K=n.MathUtils.damp(K,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,Y),w.rotation.x=K,T.scale.y=n.MathUtils.damp(T.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,Y),D.visible=M.mode==="won",z.scale.y=.3*Math.max(.05,M.temp/8),z.position.y=-.015+M.temp/8*.15,L.rotation.z=Math.sin(ae*.3)*.15,B=Math.max(0,B-Y),O.forEach((ye,Se)=>{ye.visible=B>0;const J=(3-B+Se*.18)%1.5;ye.position.set(Math.sin(Se*2)*J*.35,1.5+J,Math.cos(Se*2)*J*.35),ye.scale.setScalar(.1*(.4+J))}),G&&(V=n.MathUtils.damp(V,P,2,Y),ce.rotation.y=ae*.08,fe.forEach((ye,Se)=>{const J=Se/28*Math.PI*2+ae*.055*Math.min(1,V),ze=Math.min(1,V);ye.position.set(Math.sin(J)*(1.8+ze*.35),Math.cos(J)*(1.8-ze*1.5),Math.cos(J)*ze*1.5),ye.rotation.set(0,-J*ze,Math.PI/2-J*(1-ze))}),le.rotation.y=V*.32,N.position.y=-.05+V*1.12,N.position.x=1.7-V*.32,N.rotation.y=.2+V*.35,y.scale.setScalar(.13*(1+Math.max(0,V-2)*2)),F.visible=V>2.2,F.rotation.z=ae*.22,Q.position.y=1+Math.sin(ae*.8)*.06)}return{house:E,start:X,step:$,card:te,update:ie,enter:ne,exit:U,breathe:j,inspect:()=>({...M,weather:[...A],dream:G,dreamStep:P,phase:V,lidAngle:K,rootVisible:e.visible,dreamVisible:ee.visible,boatY:N.position.y,rays:F.visible})}}function O1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:m,batchStatic:d,chime:_}){const g=a([0,0,0],e);g.name="dream-02-water-sleeps",g.visible=!1;const f=r("#c39860"),M=r("#e0c58b"),A=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),E=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),f,[0,-.35,0],null,g),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,g);for(let N=0;N<13;N++){const y=.15+N/12*Math.PI*1.42,F=Math.sin(y)*3.65,Q=Math.cos(y)*3.65,Z=l([F,.48,Q],[.75,1.08,.19],M,g);Z.rotation.y=y,N%3===0&&h([F,.48,Q],.15,.048,A,g,[Math.PI/2,0,0]).rotation.set(0,y,0)}m("СОН / 02",[0,-.18,3.95],2.2,.38,g,{size:52});const b=a([1.08,.12,.4],g);l([0,0,0],[2.55,.22,1.55],A,b);for(let N of[-1.15,1.15])for(let y of[-.63,.63])l([N,-.23,y],[.12,.5,.12],s.copper,b);for(let N of[-.79,.79])l([0,.36,N],[2.72,.65,.14],E,b);for(let N of[-1.32,1.32])l([N,.38,0],[.14,.68,1.55],E,b);const w=l([0,.18,0],[2.49,.045,1.49],x,b),v=c([-.84,.38,0],[.34,.14,.54],s.cream,b),R=i.clone(!0);g.add(R),R.scale.setScalar(.54),R.position.set(.3,.83,.45),R.rotation.z=-.35;const T=a([0,0,0],R);for(const N of[-.23,.23])c([N,.2,.611],[.15,.11,.025],s.black,T),l([N,.2,.64],[.2,.018,.012],s.copper,T);const D=a([-2.05,2.35,-.38],g);u([0,0,0],.52,.56,s.cream,D),u([0,.29,0],.44,.022,A,D),h([.55,0,0],.24,.055,s.copper,D,[0,0,0]),m("ПУСТО",[-2.03,2.8,-.38],1.1,.28,g,{size:52});const q=[];for(let N=0;N<7;N++){const y=a([-1.92+N*.33,.2+N*.29,1.45-N*.29],g);l([0,0,0],[.7,.13,.42],s.cream,y);for(let F of[-.2,.2])l([0,.07,F],[.7,.12,.05],s.copper,y);q.push(y)}const H=Array.from({length:16},()=>c([0,0,0],[.07,.1,.07],x,g)),z=Array.from({length:3},(N,y)=>{const F=h([.65,.2,0],.23+y*.16,.012,s.mint,b);return F.scale.z=.6,F}),L=a([-.8,3.65,-1.7],g);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,L),L.rotation.z=.55;const O=[];for(let N=0;N<9;N++){const y=N*2.4;O.push(c([Math.sin(y)*3,3.2+N%3*.28,Math.cos(y)*2],.025,s.cream,g))}let B=!1,K=0,X=0,$=!1;try{$=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const te=a([26.6,-.86,.65],t);te.visible=$,u([0,0,0],.15,.2,s.cream,te),u([0,.104,0],.125,.014,x,te),h([.16,0,0],.07,.02,s.copper,te,[0,0,0]),d(g,[b,R,D,...q,...H,...O,L]),d(b,[w,v,...z]),d(D,[]),d(te,[]),q.forEach(N=>d(N,[]));function ee(){B=!0,K=0,X=0,g.visible=!0,t.visible=!1,fe(0,0)}function ce(){B=!1,g.visible=!1,t.visible=!0}function le(){if(B&&(K=K===3?0:K+1,_(165+K*55),K===3)){$=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function fe(N,y){B&&(X=n.MathUtils.damp(X,K,2.4,N),q.forEach((F,Q)=>{const Z=Math.min(1,X/2),C=-1.92+Q*.33,P=.2+Q*.29,V=1.45-Q*.29;F.position.set(n.MathUtils.lerp(C,-1.72+Q*.39,Z),n.MathUtils.lerp(P,1.95-Q*.22,Z),n.MathUtils.lerp(V,-.32+Q*.055,Z)),F.rotation.z=-Z*.21}),w.position.y=.18+X*.09,v.position.y=.38+X*.09,R.position.y=.83+X*.09+Math.sin(y*.6)*.025,R.rotation.z=-.35-X*.13,D.rotation.z=-Math.min(1,X)*.45,H.forEach((F,Q)=>{const Z=(y*.16+Q/16)%1;F.visible=X>.05,F.position.set(-1.7+Z*3,2.14-Z*1.62,-.32+Z*.25),F.scale.set(.07,.1+Math.sin(Z*Math.PI)*.04,.07)}),z.forEach((F,Q)=>{F.visible=X>.4,F.position.y=w.position.y+.034,F.scale.setScalar(1+Math.sin(y*.5+Q)*.08),F.scale.z*=.6}),L.rotation.z=.55+X*.21,T.visible=X>1.8)}return{enter:ee,exit:ce,pour:le,update:fe,inspect:()=>({active:B,step:K,phase:X,trace:$,roomVisible:g.visible,rootVisible:t.visible,waterY:w.position.y,sleeperY:R.position.y,channel:q.map(N=>N.position.toArray()),droplets:H.filter(N=>N.visible).length})}}function F1({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const l=e([0,0,0],n);l.visible=!1;for(const m of[-.23,.23])t([m,.2,.611],[.15,.11,.025],r.black,l),i([m,.2,.64],[.2,.018,.012],r.copper,l);let c=null,u=0;function p(m){c=m,u=Number(m.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:m})=>p(m)),window.__beznogimState&&p(window.__beznogimState);function h(m){const d=c==null?void 0:c.action;a.visible=!!m&&(d==null?void 0:d.kind)==="sleep"&&Number(d.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),l.visible=a.visible}return{update:h,inspect:()=>{var m;return{visible:a.visible,ends:((m=c==null?void 0:c.action)==null?void 0:m.kind)==="sleep"?c.action.ends:null}}}}const Rr=Object.freeze([1,2,3,4,5,7]),Dc=()=>({phase:"sorting",places:[0,0,0,0,0,0],progress:0});function Wa(n){return[1,2].map(e=>n.places.reduce((t,i,s)=>t+(i===e?Rr[s]:0),0))}function Nc(n){const[e,t]=Wa(n);return n.places.every(i=>i!==0)&&e===t}function z1(n,e){return n.phase==="sorting"&&Number.isInteger(e)&&e>=0&&e<6?{...n,places:n.places.map((t,i)=>i===e?(t+1)%3:t)}:n}function k1(n){return n.phase==="flying"?Dc():n.phase==="sorting"&&Nc(n)?{...n,phase:"unfolding",progress:0}:n}function B1(n,e){if(n.phase!=="unfolding"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return{...n,progress:t,phase:t===1?"flying":"unfolding"}}function Uc(n){const e=n.phase==="flying"?1:n.phase==="unfolding"?n.progress:0,t=e*e*(3-2*e),[i,s]=Wa(n);return{open:t,headY:.85+t*2.25,waterTilt:t*Math.PI/2,waterY:-.3+t*2.5,lean:(s-i)/22*.18}}function G1(n,e){const t=n.places[e],i=Uc(n).open;return t===0?[-3+e*1.2,.15,2.85]:[(t===1?-2.1:2.1)+(e%3-1)*.35,.9+Math.floor(e/3)*.45+i*(2.1+e*.12),.5+e%2*.35-i*.8]}function V1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,tube:u,torus:p,sign:h,batchStatic:m,chime:d,changed:_}){const g=o([0,0,0],e);g.name="dream09-ears-for-the-shore",g.visible=!1;const f=r("#cb9e8d"),M=r("#936e73"),A=r("#e6d5ad"),x=r("#649a9a",{metalness:.25,roughness:.3}),E=r("#334e59"),b=o([0,-.3,-.9],g);a([0,-.16,0],[8.1,.2,4.7],E,b),a([0,0,0],[7.8,.09,4.4],x,b);for(let le=0;le<7;le++)p([0,.07,0],.35+le*.325,.016,A,b);function w(le,fe,N,y){const F=document.createElement("canvas");F.width=F.height=128;const Q=F.getContext("2d");Q.fillStyle="#e4d8b7",Q.fillRect(0,0,128,128),Q.fillStyle="#334e59",Q.font="bold 96px monospace",Q.textAlign="center",Q.textBaseline="middle",Q.fillText(le,64,68);const Z=new n.CanvasTexture(F);Z.colorSpace=n.SRGBColorSpace;const C=new n.Mesh(new n.PlaneGeometry(N,N),new n.MeshBasicMaterial({map:Z,side:n.DoubleSide}));return C.position.set(...fe),C.rotation.y=Math.PI/4,y.add(C),C}const v=[];for(const le of[-1,1]){const fe=o([le*2.1,1.9,0],g);v.push(fe);const N=o([0,0,0],fe);N.scale.x=le,l([0,0,0],[.87,1.67,.24],f,N),l([0,.1,.2],[.65,1.33,.17],M,N),u([[.2,-1.4,.18],[.7,-.9,.2],[.8,.45,.18],[.55,1.4,.14],[-.35,1.5,.12],[-.7,.7,.2],[-.6,-.25,.3],[-.15,-.55,.4],[.2,-1.4,.18]],.1,A,N),u([[.22,-.55,.45],[.42,.1,.4],[.28,.9,.4],[-.23,1.02,.4],[-.4,.45,.43],[-.1,.1,.48],[.2,.22,.5]],.095,f,N),l([-.13,-.4,.45],[.23,.34,.07],s.black,N),l([-.45,-.5,.5],[.19,.28,.12],f,N),c([0,-1.8,0],.38,.25,s.copper,fe),w(le===-1?"Л":"П",[0,-1.5,.6],.34,fe)}const R=i.clone(!0);R.scale.setScalar(.57),g.add(R);const T=[],D=[],q=[],H=[];for(let le=0;le<6;le++){const fe=o([0,0,0],g);T.push(fe),H.push(new n.Vector3),l([0,0,0],[.19+Rr[le]*.023,.16,.23],le%2?s.concrete:s.copper,fe);const N=w(String(Rr[le]),[0,.43,.1],.42,fe);D.push(N);const y=o([0,-.2,0],fe);q.push(y);for(let F=0;F<Rr[le];F++)p([0,F*.045,0],.32,.012,A,y)}const z=l([0,.1,-1],.28,s.mint,g);h("НЕ ПО ТЕГАМ",[0,-.05,3.4],2.2,.3,g,{size:46});const L=o([3.15,.2,3.2],t);p([0,.12,0],.12,.035,A,L,[0,0,0]),l([0,0,0],[.12,.09,.1],s.concrete,L),L.visible=!1,m(b,[]),v.forEach(le=>m(le,[])),T.forEach((le,fe)=>m(le,[D[fe],q[fe]])),q.forEach(le=>m(le,[])),m(L,[]);let O=Dc(),B=!1,K=!1;try{K=JSON.parse(localStorage.getItem("beznogim-dream09-v1")||"{}").trace===!0}catch{}L.visible=K;function X(){O=Dc(),B=!0,t.visible=!1,g.visible=!0,ce(0,0,!0)}function $(){B=!1,t.visible=!0,g.visible=!1}function te(le){if(!B)return;const fe=z1(O,le);fe!==O&&(O=fe,d(150+Rr[le]*35),_())}function ee(){if(!B)return;const le=k1(O);le!==O&&(O=le,d(O.phase==="unfolding"?510:160),_())}function ce(le,fe,N=!1){if(!B)return;const y=O.phase;O=B1(O,le);const F=Uc(O),Q=Number.isFinite(le)?Math.min(.1,Math.max(0,le)):0;if(v.forEach((Z,C)=>{const P=C===0?-1:1;Z.rotation.z=F.lean*(1-F.open)-P*F.open*Math.PI/2,Z.position.y=1.9+F.open*.8}),R.position.set(0,F.headY,1.7-F.open*.8),R.rotation.x=O.places.some(Z=>Z===0)?Math.sin(fe*2.2)*.13:0,b.rotation.x=F.waterTilt,b.position.y=F.waterY,T.forEach((Z,C)=>{H[C].set(...G1(O,C)),N?Z.position.copy(H[C]):Z.position.lerp(H[C],1-Math.exp(-9*Q)),D[C].visible=O.places[C]===0,q[C].rotation.y=fe*.2}),z.position.y=.1+F.open*4.7,z.scale.setScalar(.28*(1+F.open*.6)),O.phase==="flying"&&!K){K=!0,L.visible=!0;try{localStorage.setItem("beznogim-dream09-v1",JSON.stringify({trace:!0}))}catch{}}y!==O.phase&&_()}return{enter:X,exit:$,move:te,act:ee,update:ce,ready:()=>Nc(O),busy:()=>O.phase==="unfolding",text:()=>O.phase==="flying"?"Уши раскрылись крыльями. Вода встала стеной, а камень наконец утонул в небе. Теперь я хотя бы молчу с ушами.":O.phase==="unfolding"?"Ярлыки закончились. Берег поднимает уши, вода слушает стоя.":`Каждый камень: полка → левое → правое → полка. Разложи все шесть поровну. Сейчас ${Wa(O).join(" : ")}.`,button:()=>O.phase==="flying"?"увидеть сон снова":O.phase==="unfolding"?"берег слушает…":"услышать тишину · 11 : 11",inspect:()=>({...O,active:B,trace:K,loads:Wa(O),ready:Nc(O),pose:Uc(O),earAngles:v.map(le=>le.rotation.z),stones:T.map(le=>le.position.toArray()),tags:D.map(le=>le.visible),head:R.position.toArray(),moon:z.position.toArray(),moonScale:z.scale.x,waterTilt:b.rotation.x,rootVisible:t.visible,roomVisible:g.visible,landmarks:[[-4.2,.1,0],[4.2,.1,0],[0,4.9,-1],[0,.1,3.5]]})}}const Oc=Object.freeze([1,3,2]),Fc=()=>({phase:"tuning",turns:[0,0,0],progress:0,trace:!1}),Zo=n=>n.turns.map((e,t)=>e===Oc[t]);function H1(n,e){return n.phase==="tuning"&&Number.isInteger(e)&&e>=0&&e<3?{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t)}:n}function W1(n){return n.phase==="sky"?Fc():n.phase==="tuning"&&Zo(n).every(Boolean)?{...n,phase:"releasing",progress:0}:n}function q1(n,e){if(n.phase!=="releasing"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return t<1?{...n,progress:t}:{...n,progress:1,phase:"sky",trace:!0}}function _d(n,e){const t=n.phase==="sky"?1:n.phase==="releasing"?n.progress:0,i=t*t*(3-2*t),s=e*Math.PI/5;return{x:Math.cos(s)*(3.05+i*.25),y:.65+i*(2.5+e%3*.65),z:Math.sin(s)*(3.05+i*.25),lift:i,diskScale:1-i*.78,diskTilt:i*Math.PI/2}}function X1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:p,sign:h,batchStatic:m,chime:d,changed:_}){const g=o([0,0,0],e);g.name="dream08-ten-torches",g.visible=!1;const f=r("#344c5d"),M=r("#647c83"),A=r("#ddc999"),x=["#d38d6d","#81beca","#d6c56e"],E=x.map(N=>r(N)),b=x.map(N=>r(N,{emissive:N,emissiveIntensity:1.4}));c([0,-.4,0],4.15,.22,f,g),p([0,-.27,0],4,.035,s.copper,g);const w=o([0,.18,0],g);c([0,0,0],2.6,.18,s.black,w),c([0,.105,0],.49,.015,A,w);const v=[],R=[];for(let N=0;N<3;N++){const y=.9+N*.6,F=o([0,.12,0],w);v.push(F),p([0,0,0],y,.035,E[N],F),p([0,-.02,0],y+.09,.008,M,F),l([y,.04,0],.13,b[N],F);for(let Z=0;Z<4;Z++){const C=Z*Math.PI/2;a([Math.cos(C)*y,.025,Math.sin(C)*y],[.1,.07,.1],Z===Oc[N]?E[N]:M,w)}const Q=Oc[N]*Math.PI/2;R.push(u([Math.cos(Q)*y,.18,Math.sin(Q)*y],[0,.18,0],.018,b[N],w))}h("1 / 3 / 2",[0,.09,2.82],1.7,.35,g,{size:68}).rotation.x=-Math.PI/2;const T=[],D=[],q=[];for(let N=0;N<10;N++){const y=o([0,0,0],g),F=N%3;q.push(F),T.push(y),c([0,-.34,0],.055,.7,s.copper,y),c([0,0,0],.14,.14,E[F],y);const Q=l([0,.26,0],[.12,.3,.12],b[F],y);D.push(Q),p([0,-.16,0],.17,.018,E[F],y)}const H=i.clone(!0);H.position.set(0,.65,3.1),H.scale.setScalar(.4),g.add(H);const z=[];for(const N of[-1,1]){const y=o([N*.16,-.08,.7],H);u([0,0,0],[N*.85,-.12,0],.055,s.black,y),l([N*.8,-.12,0],[.19,.08,.08],s.black,y),z.push(y)}const L=o([-5.05,.15,1.55],t);c([0,0,0],.13,.06,s.black,L),l([0,.15,0],[.045,.095,.045],s.light,L),L.visible=!1,m(g,[w,...T,H]),m(w,[...v,...R]),v.forEach(N=>m(N,[])),T.forEach((N,y)=>m(N,[D[y]])),m(L,[]);let O=Fc(),B=!1,K=!1;const X=[0,0,0],$=[0,0,0];try{K=JSON.parse(localStorage.getItem("beznogim-dream08-v1")||"{}").trace===!0}catch{}L.visible=K;function te(){O=Fc(),X.fill(0),$.fill(0),B=!0,t.visible=!1,g.visible=!0,fe(0,0)}function ee(){B=!1,t.visible=!0,g.visible=!1}function ce(N){if(!B)return;const y=H1(O,N);y!==O&&(O=y,$[N]+=Math.PI/2,d(180+N*85+O.turns[N]*20),_())}function le(){if(!B)return;const N=W1(O);N!==O&&(O=N,O.phase==="tuning"&&(X.fill(0),$.fill(0)),d(O.phase==="releasing"?440:165),_())}function fe(N,y){if(!B)return;const F=O.phase;O=q1(O,N);const Q=Zo(O),Z=_d(O,0),C=Number.isFinite(N)?Math.max(0,Math.min(.1,N)):0;if(v.forEach((P,V)=>{X[V]=n.MathUtils.damp(X[V],$[V],9,C),P.rotation.y=-X[V],R[V].visible=Q[V]}),w.scale.setScalar(Z.diskScale),w.rotation.x=Z.diskTilt,w.position.y=.18+Z.lift*2.7,T.forEach((P,V)=>{const G=_d(O,V);P.position.set(G.x,G.y,G.z),P.rotation.z=Z.lift*Math.sin(y*.7+V)*.1,D[V].visible=Q[q[V]],D[V].scale.y=1+Math.sin(y*5+V)*.1}),z.forEach((P,V)=>P.rotation.z=Math.sin(y*2+V*Math.PI)*.3),H.rotation.y=Math.sin(y*.3)*.12,O.trace&&!K){K=!0,L.visible=!0;try{localStorage.setItem("beznogim-dream08-v1",JSON.stringify({trace:!0}))}catch{}}F!==O.phase&&_()}return{enter:te,exit:ee,turn:ce,act:le,update:fe,busy:()=>O.phase==="releasing",canRelease:()=>O.phase!=="tuning"||Zo(O).every(Boolean),text:()=>O.phase==="sky"?"Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.":O.phase==="releasing"?"Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.":"Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.",button:()=>O.phase==="sky"?"увидеть сон снова":O.phase==="releasing"?"факелы уходят в небо…":"освободить место ↑",inspect:()=>({...O,active:B,trace:K,aligned:Zo(O),ringAngles:v.map(N=>N.rotation.y),flames:D.map(N=>N.visible),torches:T.map(N=>N.position.toArray()),diskScale:w.scale.x,diskTilt:w.rotation.x,diskY:w.position.y,rootVisible:t.visible,roomVisible:g.visible,whiskers:z.map(N=>N.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})}}const zc=()=>({phase:"flat",progress:0,trace:!1}),Jf=n=>["folding","falling","turning"].includes(n.phase);function Y1(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?zc():n}function $1(n,e){if(!Jf(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function vd(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function J1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,sign:p,batchStatic:h,chime:m,changed:d}){const _=new n.Group;e.add(_),_.visible=!1;const g=r("#e9dbb7"),f=r("#405e62"),M=r("#c87e68"),A=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],f,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],g,x);const E=[];for(let N=0;N<4;N++){const y=o([0,0,0],x);y.rotation.y=N*Math.PI/2;const F=o([0,0,1.25],y);a([0,0,.8],[2.5,.05,1.6],g,F),a([0,.032,.76],[.022,.015,1.3],M,F),a([0,.035,.1],[2.3,.015,.018],M,F),E.push(F)}const b=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],f,b),a([0,.12,0],[2.15,.08,2.15],s.concrete,b);const w=o([-.45,.18,-.3],b);a([0,.33,0],[.8,.66,.7],g,w),a([0,.4,.36],[.25,.28,.025],A,w),a([0,.73,0],[1.05,.12,.9],M,w);const v=o([.65,.72,-.5],b);u([-.25,-.5,0],[-.25,.4,0],.03,f,v),u([.25,-.5,0],[.25,.4,0],.03,f,v),u([-.25,.4,0],[.25,.4,0],.03,f,v);const R=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,M,R),l([0,-.67,0],.14,s.copper,R);for(let N=0;N<4;N++)a([-.7+N*.42,.23,.66],[.28,.13,.36],g,b);const T=[];for(const N of[-1.05,1.05])for(const y of[-1.05,1.05])T.push(u([N,4.45,y],[N,5.25,y],.012,s.copper,_));for(const N of[-2.8,2.8])u([N,0,-1.6],[N,5.3,-1.6],.06,f,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,f,_);const D=(N,y=_)=>{const F=o(N,y);a([0,.4,0],[.55,.1,.55],M,F),a([0,.73,-.24],[.55,.65,.08],M,F);for(const Q of[-.2,.2])for(const Z of[-.2,.2])u([Q,0,Z],[Q,.4,Z],.025,f,F);return F},q=[D([-2.6,0,1.1]),D([-2.6,0,2.1]),D([-1.65,0,2.1]),D([-.7,0,2.1])],H=o([0,2,0],_);l([0,0,0],[.15,.27,.15],A,H),u([0,.18,0],[.19,.35,0],.018,s.copper,H);const z=i.clone(!0);z.scale.setScalar(.35),z.position.set(2.8,.78,1.65),_.add(z),p("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const L=D([-30.6,-1.3,-20.8],t);L.scale.setScalar(.35),L.visible=!1,h(_,[x,b,...T,...q,H,z]),h(x,E.map(N=>N.parent)),E.forEach(N=>h(N,[])),h(b,[w,v]),h(w,[]),h(v,[R]),h(R,[]),q.forEach(N=>h(N,[])),h(H,[]),h(L,[]);const O=new n.Vector3,B=new n.Vector3(1,0,-1).normalize();let K=zc(),X=!1,$=!1;try{$=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}L.visible=$;function te(){K=zc(),X=!0,_.visible=!0,t.visible=!1,le(0,0)}function ee(){X=!1,_.visible=!1,t.visible=!0}function ce(){const N=Y1(K);N!==K&&(K=N,m(K.phase==="falling"?165:K.phase==="turning"?440:330),d())}function le(N,y){if(!X)return;const F=K.phase;K=$1(K,N);const{fold:Q,fall:Z,turn:C}=vd(K);if(E.forEach(P=>P.rotation.x=-Q*.92*(1-C)),x.quaternion.setFromAxisAngle(B,C*2.2),x.position.y=.12+C*3.9,b.position.set(0,4.4-3.65*Z,0),b.quaternion.identity(),C>0&&(O.set(0,.63,0).applyAxisAngle(B,C*2.2),b.position.copy(O).add(x.position),b.quaternion.copy(x.quaternion)),T.forEach(P=>P.visible=Z===0),R.rotation.z=Math.sin(y*2.1)*.5,H.position.set(-2.6*C,2-1.34*C,1.1*C),H.rotation.z=Math.sin(y)*.1,q.forEach((P,V)=>{V>0&&(P.position.y=C*.15*Math.sin(y+V),P.rotation.z=C*Math.sin(y+V)*.035)}),K.trace&&!$){$=!0,L.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}K.phase!==F&&d()}return{enter:te,exit:ee,act:ce,update:le,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[K.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[K.phase],busy:()=>Jf(K),inspect:()=>({...K,...vd(K),active:X,trace:$,rootVisible:t.visible,roomVisible:_.visible,leafAngles:E.map(N=>N.rotation.x),yard:b.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(b.quaternion.w))),yardQuaternion:b.quaternion.toArray(),pocket:x.position.toArray(),seed:H.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const kc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function Z1(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function K1(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?kc():n}function Q1(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function j1({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:l,cyl:c,rod:u,torus:p,sign:h,batchStatic:m,chime:d,changed:_}){const g=o([0,0,0],e);g.name="dream-06-cloud-heating",g.visible=!1;const f=r("#203f49"),M=r("#dce6d7"),A=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),E=r("#598e9d"),b=r("#ede1c3");c([0,-.3,0],4,.4,f,g),p([0,-.06,0],3.85,.045,A,g);for(let V=0;V<8;V++)u([-3+V*.85,-.06,-2.5],[-3+V*.85,-.06,2.5],.012,E,g);const w=o([-2.35,0,.2],g);a([0,.2,0],[1.7,.35,1.3],s.concrete,w);for(let V=0;V<6;V++){const G=-.65+V*.26;a([G,1.2,0],[.16,1.8,.66],A,w),p([G,2.12,0],.27,.065,A,w,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,A,w),u([-.8,1.95,.2],[.8,1.95,.2],.11,A,w);const v=l([-2.35,1.15,.87],.42,E,g);p([-2.35,1.15,.87],.48,.024,b,g,[.5,.3,0]);const R=["ЗЕМЛЯ","ОБЛАКО"].map((V,G)=>{const ne=o([-3+G*1.3,.4,2.1],g);a([0,0,0],[.87,.14,1.13],f,ne);for(let U=0;U<4;U++)a([-.27+U*.18,.09,-.28],[.08,.03,.25],x,ne);return h(V,[0,.12,.32],.78,.22,ne,{size:52}).rotation.x=-Math.PI/2,ne}),T=p([-2.8,.57,2.1],.5,.035,x,g);T.rotation.x=Math.PI/2;const D=o([0,0,0],g);u([-1.5,.45,.2],[-.7,.45,.2],.09,A,D),u([-.7,.45,.2],[-.7,3.7,.2],.09,A,D),u([-.7,3.7,.2],[1.2,3.7,.2],.09,A,D);const q=Array.from({length:7},(V,G)=>l([.1+G*.45,3.8+G%2*.22,-.8],[.65,.45,.63],M,g)),H=o([1.25,3.1,-.8],g);a([0,.2,0],[2.6,.1,1.7],b,H);for(const V of[-1.15,1.15])for(const G of[-.7,.7])u([V,.2,G],[V,1.28,G],.045,A,H);const z=o([0,1.26,0],H);a([-.61,.15,0],[1.45,.12,1.95],M,z).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,z).rotation.z=-.35;const L=[a([-.68,.8,.72],[.48,.57,.06],x,H),a([.68,.8,.72],[.48,.57,.06],x,H)],O=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],B=[],K=[];O.forEach(([V,G,ne],U)=>{const j=o([V,G,ne],g);B.push(j),a([0,.05,0],[1.2,.13,1.1],s.concrete,j);for(const Y of[-.5,.5])u([Y,.1,-.38],[Y,1.1,-.38],.045,A,j);u([-.5,1.1,-.38],[0,1.5,-.38],.045,A,j),u([0,1.5,-.38],[.5,1.1,-.38],.045,A,j);const ie=o([1.25,3.9,-.05],g);K.push(ie),a([0,0,0],[.65,.72,.12],b,ie),a([0,0,.071],[.48,.55,.035],x,ie),u([0,-.28,.1],[0,.28,.1],.018,A,ie),u([-.23,0,.1],[.23,0,.1],.018,A,ie)});const X=Array.from({length:10},()=>l([0,0,0],.065,x,g)),$=i.clone(!0);$.scale.setScalar(.4),$.position.set(-2,.9,-1.7),g.add($),h("СОН / 06",[0,-.04,3.3],1.5,.29,g,{size:52}).rotation.x=-Math.PI/2;const te=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],A,te),a([0,0,.04],[.13,.22,.02],x,te),te.visible=!1,m(g,[w,v,...R,T,D,...q,H,...B,...K,...X,$]),m(w,[]),m(D,[]),m(H,[z,...L]),m(z,[]),B.forEach(V=>m(V,[])),K.forEach(V=>m(V,[])),R.forEach(V=>m(V,[]));let ee=kc(),ce=!1,le=0,fe=0,N=!1;try{N=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}te.visible=N;function y(){ee=kc(),le=0,fe=0,ce=!0,g.visible=!0,t.visible=!1,C(0,0)}function F(){ce=!1,g.visible=!1,t.visible=!0}function Q(V){ee=Z1(ee,V),d(V==="sky"?330:165),_()}function Z(){ee=K1(ee),d(ee.phase==="raining"?440:220),_()}function C(V,G){if(!ce)return;const ne=ee.phase;ee=Q1(ee,V);const U=ee.phase==="heating",j=ee.target==="sky",ie=j?U?ee.progress:["cloud","raining","settled"].includes(ee.phase)?1:0:0;if(le=ie,fe=ee.phase==="raining"?ee.progress:ee.phase==="settled"?1:0,H.visible=ie>.02,H.scale.setScalar(Math.max(.001,ie)),H.position.y=3.1+Math.sin(G*.9)*.05,q.forEach((Y,ae)=>{Y.position.y=3.8+ae%2*.22+ie*.5-fe*.25,Y.scale.set(.65+ie*.12,.45*(1-ie*.6),.63)}),v.scale.setScalar(.42*(U&&!j?1+Math.sin(ee.progress*Math.PI)*.75:1)),v.rotation.y=G*.2,K.forEach((Y,ae)=>{const ye=Math.max(0,Math.min(1,fe*1.6-ae*.3)),Se=ye*ye*(3-2*ye),J=O[ae];Y.position.set(1.25+(J[0]-1.25)*Se,3.9+(J[1]+.8-3.9)*Se,-.05+(J[2]+.06+.05)*Se),Y.rotation.z=(1-Se)*Math.sin(G+ae)*.1,Y.visible=["cloud","raining","settled"].includes(ee.phase)}),L.forEach(Y=>Y.visible=ee.phase==="cloud"||U),T.position.x=j?-1.7:-3,X.forEach((Y,ae)=>{Y.visible=U;const ye=(G*.7+ae/10)%1;j?ye<.72?Y.position.set(-.7,.45+ye/.72*3.25,.2):Y.position.set(-.7+(ye-.72)/.28*1.9,3.7,.2):Y.position.set(-2.35+Math.sin(ye*Math.PI*2)*.6,.5+ye*1.8,.87)}),ee.trace&&!N){N=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}ee.phase!==ne&&_()}return{enter:y,exit:F,choose:Q,act:Z,update:C,text:()=>({ready:ee.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:ee.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[ee.phase],button:()=>ee.phase==="raining"?"окна падают…":ee.phase==="heating"?"тепло идёт…":ee.phase==="settled"?"увидеть сон снова":ee.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...ee,active:ce,trace:N,warmth:le,spent:fe,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:g.visible,houseVisible:H.visible,windows:K.map(V=>V.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...O.map(V=>[V[0],.8,V[2]])]})}}function Bc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function ey(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function ty(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Bc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function ny(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function iy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:m,batchStatic:d,chime:_,changed:g}){const f=a([0,0,0],e);f.name="dream-05-self-measuring-instrument",f.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),A=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),E=r("#1c4147"),b=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,E,f),u([0,-.16,0],3.45,.08,b,f),h([0,-.1,0],3.65,.07,s.copper,f);for(let Y=0;Y<5;Y++)h([0,-.1+Y*.006,0],.7+Y*.52,.009,A,f);const w=a([0,0,0],f);l([0,.12,-1.6],[3,.34,1.3],s.concrete,w),p([0,.3,-1.65],[0,3.75,-1.65],.12,M,w);const v=a([0,3.7,-1.4],f),R=u([0,0,-.12],1.05,.2,E,v);R.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const T=a([-.85,0,.02],v),D=a([.85,0,.02],v);l([.425,0,0],[.85,1.72,.1],x,T),l([-.425,0,0],[.85,1.72,.1],x,D);for(let Y=0;Y<12;Y++){const ae=Y*Math.PI/6;p([Math.sin(ae)*.78,Math.cos(ae)*.78,.09],[Math.sin(ae)*.91,Math.cos(ae)*.91,.09],.016,s.copper,v)}const q=a([0,0,.14],v);p([0,-.15,0],[0,.69,0],.025,E,q),c([0,0,0],.065,s.copper,q);const H=[a([-2.35,1.65,0],f),a([2.35,1.65,0],f)];for(const[Y,ae]of H.entries())l([0,0,0],[.24,1.65,.38],M,ae),l([Y===0?.38:-.38,-.76,0],[.95,.18,.38],A,ae),c([0,.84,0],.19,s.copper,ae);const z=[],L=[],O=[];for(let Y=0;Y<12;Y++){const ae=-2.45+Y*.445;L.push(new n.Vector3(ae,2.52,0));const ye=Y/11,Se=ye*Math.PI*1.35;O.push(new n.Vector3(2.35*Math.cos(Se)*(1-ye*.85),.24+ye*3,2.05-ye*3.2));const J=a(L[Y].toArray(),f);z.push(J),l([0,0,0],[.42,.16,.57],M,J),l([0,.09,.15],[.03,.012,.2],s.copper,J)}const B=c([0,.7,0],[.45,.64,.45],A,f),K=i.clone(!0);f.add(K),K.scale.setScalar(.43);const X=new n.Vector3(2.8,.65,2.15);K.position.copy(X);function $(Y,ae){const ye=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Ae],W)=>W?ye.lineTo(ze,Ae):ye.moveTo(ze,Ae)),ye.closePath();const Se=new n.ExtrudeGeometry(ye,{depth:.07,bevelEnabled:!1}),J=a([0,0,0],Y);return o(Se,x,null,null,J),J.scale.setScalar(ae),J}const te=$(v,.88);te.position.set(0,.1,.2),te.visible=!1;const ee=$(te,.22);ee.position.set(-.03,-.2,.12);const ce=l([-.03,-.2,.085],[.34,.44,.01],E,te),le=$(t,.17);le.position.set(2.8,1.14,-2.75),le.rotation.y=Math.PI/4,m("СОН / 05",[0,-.055,2.94],1.65,.3,f,{size:48}).rotation.x=-Math.PI/2,m("СЕБЯ?",[0,.36,-.88],1.05,.26,f,{size:52});const fe=m("?",[-1.6,.65,1.5],.48,.65,f,{size:84,bg:"#1c4147"}),N=h([0,.12,0],.68,.035,s.light,f);d(f,[w,v,...z,...H,B,K,fe,N]),d(w,[]),d(v,[T,D,q,te]),d(T,[]),d(D,[]),d(q,[]),d(te,[ee,ce]),d(ee,[]),z.forEach(Y=>d(Y,[])),H.forEach(Y=>d(Y,[]));let y=Bc(),F=!1,Q=0,Z=0,C=!1;try{C=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}le.visible=C;function P(){y=Bc(),Q=0,Z=0,F=!0,f.visible=!0,t.visible=!1,U(0,0)}function V(){F=!1,f.visible=!1,t.visible=!0}function G(Y){y=ey(y,Y),_(Y==="self"?330:165),g()}function ne(){y=ty(y),_(y.phase==="climbing"?440:220),g()}function U(Y,ae){if(!F)return;const ye=y.phase;y=ny(y,Y);const Se=y.phase==="unfolding"?y.progress:["stairs","climbing","inside"].includes(y.phase)?1:0;Q=Se*Se*(3-2*Se),Z=n.MathUtils.damp(Z,y.phase==="inside"?1:0,3,Y),z.forEach((ze,Ae)=>{ze.position.lerpVectors(L[Ae],O[Ae],Q),ze.rotation.y=Q*(-Ae*.07)});const J=y.phase==="measuring"?Math.sin(y.progress*Math.PI):0;if(H.forEach((ze,Ae)=>{const W=Ae===0?-1:1;ze.position.set(W*(2.35-J*1.55),1.65+Q*.4,-Q*.85),ze.rotation.z=W*Q*.65}),q.rotation.z=y.phase==="measuring"?Math.sin(y.progress*35)*.8:y.phase==="refused"?Math.sin(ae*6)*.25:-Q*Math.PI*1.75,B.position.y=.7+(y.phase==="measuring"?Math.sin(y.progress*Math.PI)*1.5:Math.sin(ae*1.3)*.05),B.scale.set(.45*(1-J*.16),.64*(1+J*.3),.45*(1-J*.16)),fe.visible=y.phase==="refused",fe.position.y=.65+Math.sin(ae*2)*.1,T.rotation.y=Z*1.7,D.rotation.y=-Z*1.7,q.visible=Z<.2,te.visible=y.phase==="inside",te.rotation.z=Math.sin(ae*.7)*.04,ee.rotation.z=-ae*.12,K.position.copy(X),K.scale.setScalar(.43),K.visible=y.phase!=="inside",["climbing","inside"].includes(y.phase)){const ze=y.phase==="inside"?1:y.progress,Ae=[X,...O.map(oe=>oe.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],W=ze*(Ae.length-1),S=Math.min(Ae.length-2,Math.floor(W));K.position.lerpVectors(Ae[S],Ae[S+1],Math.min(1,W-S)),K.scale.setScalar(.43*(1-ze*.8))}if(N.position.set((y.target==="self",0),y.target==="self"?3.7:.12,y.target==="self"?-1.4:0),N.rotation.x=y.target==="self"?0:Math.PI/2,N.visible=["ready","refused","measuring","unfolding"].includes(y.phase),y.trace&&!C){C=!0,le.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ye!==y.phase&&g()}function j(){return{ready:y.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[y.phase]}return{enter:P,exit:V,choose:G,act:ne,update:U,text:j,button:()=>y.phase==="inside"?"увидеть сон снова":y.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...y,active:F,trace:C,unfold:Q,opened:Z,rootVisible:t.visible,roomVisible:f.visible,steps:z.map(Y=>Y.position.toArray()),jaws:H.map(Y=>Y.position.toArray()),drop:B.position.toArray(),head:K.position.toArray(),cursorVisible:te.visible,cursorPosition:te.getWorldPosition(new n.Vector3).toArray(),faceAngles:[T.rotation.y,D.rotation.y],nestedVisible:te.visible&&ee.visible,landmarks:[B.position.toArray(),[0,3.7,-1.4],X.toArray(),O[0].toArray()]})}}const sy=["восток","юг","запад","север"],Zf=[0,2,3];function lc(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function ry(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function oy(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==Zf[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function ay(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function ly({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:m,batchStatic:d,chime:_,changed:g}){const f=a([0,0,0],e);f.name="dream-04-letter-above-roof",f.visible=!1;const M=r("#355b62"),A=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,f),h([0,-.26,0],3.78,.024,s.copper,f);for(let C=0;C<4;C++){const P=C*Math.PI/2,V=Math.cos(P)*3.05,G=Math.sin(P)*3.05;m(["В","Ю","З","С"][C],[V,-.23,G],.38,.28,f).rotation.x=-Math.PI/2}const E=[],b=[],w=[];for(let C=0;C<3;C++){const P=1.05+C*1.4,V=2.05-C*.27,G=a([0,P,0],f);E.push(G);for(let ae=1;ae<4;ae++){const ye=ae*Math.PI/2,Se=Math.cos(ye),J=Math.sin(ye),ze=[[.3,.3,-.3],[.3,.3,.3],[V,.04,V],[V,.04,-V]],Ae=new n.BufferGeometry,W=[];for(const oe of[0,1,2,0,2,3]){const[ue,pe,Ee]=ze[oe];W.push(ue*Se-Ee*J,pe,ue*J+Ee*Se)}Ae.setAttribute("position",new n.Float32BufferAttribute(W,3)),Ae.computeVertexNormals();const S=A.clone();S.side=n.DoubleSide,o(Ae,S,null,null,G),p([V*Se-V*J,.04,V*J+V*Se],[V*Se+V*J,.04,V*J-V*Se],.035,s.copper,G);for(const oe of[-1,1])p([V*Se-V*J*oe,.04,V*J+V*Se*oe],[(V+.16)*Se-(V+.16)*J*oe,.2,(V+.16)*J+(V+.16)*Se*oe],.035,s.copper,G)}const ne=a([V*.67,.045,0],G);p([-.32,0,0],[.3,0,0],.026,s.mint,ne),p([.3,0,0],[.1,0,.13],.026,s.mint,ne),p([.3,0,0],[.1,0,-.13],.026,s.mint,ne),b.push(ne);const U=Zf[C]*Math.PI/2,j=Math.cos(U)*V*.63,ie=Math.sin(U)*V*.63,Y=h([j,P+.09,ie],.16,.025,s.light,f);w.push(Y),m(`${C+1}`,[V+.26,P+.14,.2],.36,.29,f,{bg:"#355b62",fg:"#f0e4b8"});for(const ae of[-1,1])p([ae*.3,P-.32,-.3],[ae*.3,P-.03,-.3],.018,s.copper,f)}const v=a([-2.6,.16,1.5],f);l([0,0,0],[1.1,.62,.7],s.cream,v),l([0,.16,.361],[.72,.07,.025],M,v),m("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,f,{size:40});const R=i.clone(!0);f.add(R),R.scale.setScalar(.53),R.position.set(-2.6,1,1.5),R.rotation.z=-.12,m("СОН / 04",[0,-.12,3.34],1.8,.32,f,{size:48}).rotation.x=-Math.PI/2;const T=a([-1.1,.12,1.5],f);l([0,0,0],[.52,.025,.36],x,T);const D=a([-.26,.016,0],T),q=a([.26,.016,0],T);l([.13,0,0],[.26,.022,.36],x,D),l([-.13,0,0],[.26,.022,.36],x,q),p([-.25,.04,-.17],[0,.04,.1],.009,s.copper,T),p([.25,.04,-.17],[0,.04,.1],.009,s.copper,T);const H=c([0,.045,0],.055,s.light,T),z=a([0,5.3,0],f);h([0,0,0],.55,.025,s.copper,z),p([0,-.3,0],[0,.22,0],.018,s.copper,z);const L=Array.from({length:6},(C,P)=>{const V=P*Math.PI/3,G=c([Math.cos(V)*.29,0,Math.sin(V)*.29],[.21,.065,.11],x,z);return G.rotation.y=-V,G});z.visible=!1;const O=[new n.Vector3(-1.1,.12,1.5),...w.map(C=>C.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],B=new n.BufferGeometry().setFromPoints(O),K=new n.Line(B,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));K.computeLineDistances(),f.add(K);let X=lc(),$=!1,te=0,ee=!1,ce=[Math.PI/2,Math.PI/2,Math.PI/2];try{ee=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const le=a([-3.75,1.17,-2.95],t);le.visible=ee,l([0,0,0],[.23,.012,.16],x,le),p([-.11,.016,-.07],[0,.016,.04],.005,s.copper,le),p([.11,.016,-.07],[0,.016,.04],.005,s.copper,le),d(f,[...E,...w,v,R,T,z,K]),E.forEach((C,P)=>d(C,[b[P]])),d(T,[D,q,H]),d(D,[]),d(q,[]),d(v,[]),d(z,L),d(le,[]);function fe(){$=!0,X=lc(),te=0,ce=X.turns.map(C=>C*Math.PI/2),f.visible=!0,t.visible=!1,Q(0,0)}function N(){$=!1,f.visible=!1,t.visible=!0}function y(C){X=ry(X,C),_(165+C*55+X.turns[C]*22),g()}function F(){X.phase==="delivered"?(X=lc(),te=0):X=oy(X),_(220),g()}function Q(C,P){if(!$)return;const V=X.phase;X=ay(X,C),te=n.MathUtils.damp(te,X.phase==="delivered"?1:0,2.4,C),E.forEach((ie,Y)=>{const ae=X.turns[Y]*Math.PI/2,ye=Math.atan2(Math.sin(ae-ce[Y]),Math.cos(ae-ce[Y]));ce[Y]+=ye*(C===0?1:1-Math.exp(-C*7)),ie.rotation.y=-ce[Y],ie.position.x=te*[-2.15,1.85,0][Y],ie.position.z=te*[.45,-.65,-2.1][Y],ie.rotation.z=te*(Y===0?-.16:.13)});const G=Math.min(4,X.progress),ne=Math.min(3,Math.floor(G)),U=Math.min(1,G-ne),j=U*U*(3-2*U);if(T.position.lerpVectors(O[ne],O[ne+1],j),T.rotation.y=P*.16,D.rotation.z=-te*1.1,q.rotation.z=te*1.1,H.position.y=.045+te*.18,z.visible=X.phase==="delivered",z.rotation.y=P*.22,L.forEach((ie,Y)=>{ie.position.y=Math.sin(P*.7+Y)*.035}),K.visible=X.phase!=="delivered",X.trace&&!ee){ee=!0,le.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}V!==X.phase&&g()}function Z(){return X.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":X.phase==="caught"?`Поймала крыша ${X.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:X.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:fe,exit:N,turn:y,send:F,update:Q,text:Z,directions:sy,inspect:()=>({...X,turns:[...X.turns],active:$,trace:ee,open:te,roomVisible:f.visible,rootVisible:t.visible,roofs:E.map(C=>({position:C.position.toArray(),rotation:C.rotation.toArray().slice(0,3)})),letter:T.position.toArray(),goals:w.map(C=>C.position.toArray()),crown:z.visible})}}function cy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:l,sphere:c,cyl:u,rod:p,torus:h,sign:m,paperBoat:d,batchStatic:_,chime:g}){const f=a([0,0,0],e);f.name="dream-03-silent-dock",f.visible=!1;const M=r("#526b79"),A=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,f),u([0,-.23,0],4,.055,A,f),h([0,-.18,0],4.08,.04,s.copper,f),l([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,f);for(let P of[-.1,.55,1.2,1.85])l([-2.85,.07,P],[1.38,.045,.025],M,f);for(let P of[-3.4,-2.3])p([P,-.3,1.9],[P,.48,1.9],.035,s.copper,f);m("СОН / 03",[-2.85,.13,2.4],1.6,.28,f,{size:48}).rotation.x=-Math.PI/2;const E=i.clone(!0);E.position.set(-2.8,1.27,.75),E.scale.setScalar(.65),f.add(E);const b=[];for(const P of[-1,1]){const V=a([P*.12,-.04,.68],E);p([0,0,0],[P*.64,-.2,.05],.06,s.black,V),c([P*.62,-.18,.05],[.19,.095,.07],s.black,V),p([P*.58,-.18,.06],[P*.58,-.7,.06],.015,s.copper,V),c([P*.58,-.76,.06],.075,s.copper,V),_(V,[]),b.push(V)}const w=Array.from({length:3},(P,V)=>h([-1.2+V*1.25,-.17,-.25],.72,.035,V===1?s.cream:s.copper,f)),v=Array.from({length:3},(P,V)=>h([-1.2+V*1.25,-.165,-.25],.72,.013,x,f)),R=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,f),T=d(f,[-1.9,-.13,-.25],.9),D=c([0,.53,0],[.065,.09,.065],s.light,T),q=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,f);q.rotation.z=.65;const H=[];for(let P=0;P<5;P++){const V=-1.6+P*.85;p([V,-.2,-2.9],[V,1.1+P%2*.4,-2.9],.025,M,f),H.push(c([V,1.12+P%2*.4,-2.9],.035,s.light,f))}let z=!1,L=0,O=1,B=[1,1,1],K=[0,0,0],X=0,$=0,te=!1;try{te=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ee=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ee.visible=te;const ce=Array.from({length:5},()=>new n.Vector3),le=new n.CatmullRomCurve3(ce),fe=new n.Vector3,N=new n.Vector3;_(f,[E,...w,...v,R,T,q,...H]),_(E,b),_(T,[D]);function y(P){O=n.MathUtils.clamp(Math.round(Number(P)||1),1,3)}function F(){z=!0,L=0,B=[1,1,1],K=[0,0,0],X=0,$=0,f.visible=!0,t.visible=!1,C(0,0)}function Q(){z=!1,f.visible=!1,t.visible=!0}function Z(){if(z){if(L===3){L=0,B=[1,1,1],K=[0,0,0],$=0;return}if(B[L]=O,L++,X=0,g(110+O*55),L===3){te=!0,ee.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function C(P,V){if(!z)return;$+=Math.min(P,.15),X+=Math.min(P,.15);for(let j=0;j<3;j++){K[j]=n.MathUtils.damp(K[j],j<L?1:0,3,P);const ie=-.17+K[j]*(.95+B[j]*.42),Y=.72+B[j]*.12;w[j].position.y=ie,w[j].rotation.set(Math.PI/2*(1-K[j]),Math.PI/2*K[j],0),w[j].scale.setScalar(Y/.72),v[j].scale.setScalar(Y/.72*(1+Math.sin($*.9+j)*.045)),ce[j+1].set(w[j].position.x,Math.max(-.1,ie),-.25)}ce[0].set(-2,-.1,-.25),ce[4].set(2.5,-.1,-.25);const G=(1-Math.cos($*.55))*.5;le.getPoint(G,fe),le.getPoint(Math.min(.999,G+.012),N),T.position.copy(fe),T.rotation.z=n.MathUtils.clamp(Math.atan2(N.y-fe.y,N.x-fe.x),-.45,.45),T.rotation.y=0,R.visible=L>0;const ne=Math.min(1,X/1.8),U=Math.max(0,L-1);R.position.set(n.MathUtils.lerp(-2.5,-1.2+U*1.25,ne),.35+ne*(2.1+B[U]*.35),n.MathUtils.lerp(1.4,-.25,ne)),R.rotation.y=$*.4,b.forEach((j,ie)=>j.rotation.z=Math.sin($*1.2+ie*Math.PI)*(.06+L*.04)),D.position.y=.53+Math.sin(V)*.02}return{enter:F,exit:Q,toss:Z,choose:y,update:C,inspect:()=>({active:z,step:L,force:O,forces:[...B],lift:[...K],trace:te,roomVisible:f.visible,rootVisible:t.visible,boat:T.position.toArray(),ringY:w.map(P=>P.position.y),ringRotation:w.map(P=>P.rotation.toArray().slice(0,3)),stone:R.position.toArray()})}}function xd(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(c=>Number(c.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const c=t.batch,u=Math.min(i,Math.max(0,360-c.age));c.age+=u,c.exposure[c.face]+=u,c[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const c=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:c.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:c.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=c.air,t.batch&&t.batch.age<360&&c.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(c.id),p=t.shelf.findIndex(h=>h.id===u);if(p<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(p,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",m={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(m),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:m,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,l={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:l,result:s,seconds:o,label:r}}const uy={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function hy({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:l,torus:c,mesh:u,sign:p,batchStatic:h,changed:m,watching:d,localPlay:_}){var V,G,ne;const g=s([24,-1.55,0]);g.name="cheese-cellar";const f=i("#697b70"),M=i("#b4b89b"),A=i("#936c4d"),x=i("#e1b064"),E=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],f,g),r([0,1.6,-3.65],[10,3.2,.3],M,g),r([-4.85,1.3,0],[.3,2.6,7.3],M,g);for(let U=-4;U<=4;U+=2)r([U,1.5,-3.43],[.16,3,.1],f,g);for(let U of[-4.4,4.4])l([U,0,-3.3],[U,3.6,-3.3],.09,t.copper,g),l([U,3.6,-3.3],[U,3.6,2.5],.09,t.copper,g),l([U,3.6,2.5],[U,0,2.5],.09,t.copper,g);p("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,g,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],A,g),r([0,0,-2.7],[7.9,.14,1.05],A,g);for(let U of[-3.8,3.8])r([U,.6,-2.7],[.14,1.4,1.05],A,g);a([-3,.55,1.1],.75,1.1,t.copper,g),c([-3,1.11,1.1],.75,.055,t.dark,g),a([-3,1.1,1.1],.64,.02,b,g),l([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,A,g);for(let U of[2.8,3.5])a([U,.28,1.8],.26,.56,t.cream,g),a([U,.59,1.8],.12,.1,t.copper,g);const w=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,g);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,g);for(let U=0;U<4;U++)r([2.25+U*.23,2.4,-3.32],[.045,.55,.03],t.dark,g);r([.5,.3,.25],[3.7,.6,3.3],A,g);const v=s([.5,1.02,.25],g),R=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),T=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),E,[0,0,0],null,v),D=c([0,.33,0],.35,.026,t.cream,v),q=s([.5,.65,2.3],g),H=[];for(let U=0;U<6;U++)H.push(o([-1.25+U*.5,0,0],.08,t.mint,q));const z=p("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,g,{size:36});z.rotation.x=-Math.PI/2;function L(U){const j=s(U,g),ie=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,j),Y=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),E.clone(),[0,0,0],null,j),ae=s([0,-.14,.09],j);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ae);const ye=o([.09,.16,.27],.04,t.mint,ae),Se=u(new n.IcosahedronGeometry(.21,0),f,[.13,.02,.23],null,j),J=s([0,0,0],j);for(const[ze,Ae,W]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Ae,W],[.05,.05,.025],t.dark,J);return{g:j,body:ie,crust:Y,steps:ae,crystal:Se,holes:J,pearl:ye}}const O=Array.from({length:6},(U,j)=>L([-3.15+j*1.26,1.42,-2.6])),B=s([0,0,0],e);for(let U=0;U<24;U++){const j=U/23;r([8.3+j*11.2,-.15-j*1.32,1.4+Math.sin(j*Math.PI)*2],[.85,.15,.75],f,B)}for(let U=0;U<5;U++)r([20+U*.7,-1.46,1.4-U*.22],[.75,.13,.7],f,B);p("СЫР →",[10.2,.35,2.4],1.5,.4,B,{size:44}),l([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,B),h(B,[]),h(g,[v,w,q,z,...O.map(U=>U.g)]);for(const U of O)h(U.steps,[U.pearl]),h(U.holes,[]);let K=null,X=null,$=0,te=null,ee="",ce=0;try{const U=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");K=(U==null?void 0:U.state)||U,$=Number(U==null?void 0:U.clockOffset)||0}catch{}const le=()=>Date.now()/1e3+$;function fe(U,j,ie={}){const Y=xd({state:K,mode:U,tool:j,args:ie,now:le()});K=Y.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:K,clockOffset:$}))}catch{}return Y}fe("migrate");const N=document.createElement("div");N.id="cellar-controls",N.hidden=!0,N.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(N);function y(){return X&&d()?X:xd({mode:"migrate",state:K,now:K.updated}).public}function F(U){te=U;const j=U.batch;if(v.visible=!!j,z.visible=!j,w.rotation.y=U.air==="dry"?-.8:0,j){v.rotation.z=j.face?Math.PI:0;const ie=j.age/360;R.material.color.set(j.culture==="moon"?"#e9cf8b":"#c8bc88"),T.material.color.set(U.air==="damp"?"#8b9f78":"#b87a48"),D.scale.setScalar(1+ie*.15)}for(let ie=0;ie<6;ie++)H[ie].visible=!!j&&j.age>=(ie+1)*60;O.forEach((ie,Y)=>{const ae=U.shelf[Y];ie.g.visible=!!ae,ae&&(ie.g.rotation.z=ae.kind==="lopsided"?.22:0,ie.crust.material.color.set(ae.wet>=180?"#8b9f78":"#b87a48"),ie.steps.visible=ae.kind==="moon_stair",ie.crystal.visible=ae.kind==="stone",ie.holes.visible=ae.kind==="holes"||ae.kind==="lopsided")})}function Q(U,j){_();const ie=fe("action",U,j);return ee="",P(0),m(),ie}for(const U of N.querySelectorAll("[data-culture]"))U.onclick=()=>Q("set_batch",{culture:U.dataset.culture});N.querySelector("#cellar-turn").onclick=()=>Q("tend",{air:K.air,turn:!0}),N.querySelector("#cellar-air").onclick=()=>Q("tend",{air:K.air==="damp"?"dry":"damp",turn:!1}),N.querySelector("#cellar-wait").onclick=()=>{_(),$+=60,fe("tick"),ee="",P(0),m()};function Z(){const U=te||y(),j=U.batch,ie=X&&d()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",Y=j?j.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(j.age)}/360 с. Корка: ${Math.floor(j.exposure[0])}/${Math.floor(j.exposure[1])} с.`:U.shelf.length?`На полке: ${U.shelf.map(ae=>uy[ae.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:X&&d()?"войти в свою сыроварню":j?j.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(X&&d())&&!!j&&!j.ready,description:ie+" "+Y}}function C(){const U=te||y(),j=U.batch;N.querySelector("#cellar-readout").textContent=`${U.air==="damp"?"сыро":"сухо"} · ${j?j.ready?"готово":`ещё ${Math.ceil(j.remaining)} с`:"нет колеса"} · полка ${U.shelf.length}/6`;for(const ie of N.querySelectorAll("[data-culture]"))ie.disabled=!!j;N.querySelector("#cellar-turn").disabled=!j||j.ready,N.querySelector("#cellar-air").textContent=U.air==="damp"?"сделать суше":"вернуть сырость"}function P(U){U-ce>=1&&(ce=U,fe("tick"));const j=y(),ie=JSON.stringify(j);ie!==ee&&(ee=ie,F(j),C(),m())}return window.addEventListener("beznogim:state",({detail:U})=>{var ie,Y;const j=(Y=(ie=U.mechanics)==null?void 0:ie.cellar)==null?void 0:Y.public;j&&(X=j,ee="")}),X=((ne=(G=(V=window.__beznogimState)==null?void 0:V.mechanics)==null?void 0:G.cellar)==null?void 0:ne.public)||null,F(y()),C(),{house:g,controls:N,update:P,card:Z,run:()=>Q(K.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:X&&d()?"resident":"sandbox",...te,wheelVisible:v.visible,shelfVisible:O.filter(U=>U.g.visible).length,stairsVisible:O.filter(U=>U.g.visible&&U.steps.visible).length,shutter:w.rotation.y})}}function dy({entries:n,elements:e,layer:t,camera:i}){const s=new xt,r=new xt,o=new k,a=Object.entries(n).map(([p,h])=>({element:e[p],anchor:h.point,x:NaN,y:NaN,visible:null}));let l=0,c=0,u=!1;return{update(p,h,m){if(t.hidden===p&&(t.hidden=!p),!p){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const d=!u||l!==h||c!==m||!s.equals(r);l=h,c=m,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!d)continue;o.copy(_.anchor)}o.applyMatrix4(s);const g=(o.x+1)*h*.5,f=(1-o.y)*m*.5,M=o.z>=-1&&o.z<=1&&g>=10&&g<=h-10&&f>=10&&f<=m-55;if(M!==_.visible&&(_.visible=M,_.element.classList.toggle("hidden",!M)),!M)continue;const A=Math.round(g*10)/10,x=Math.round(f*10)/10;(A!==_.x||x!==_.y)&&(_.x=A,_.y=x,_.element.style.transform=`translate3d(${A}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function fy(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),l=e.getBoundingClientRect(),c=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,p=Math.max(12,u?0:a.bottom+12,u?c.bottom+12:0),h=Math.max(64,innerHeight-l.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(p)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const be=n=>document.querySelector(n),en=()=>innerWidth<700,Kf=matchMedia("(prefers-reduced-motion: reduce)").matches;let Pr={};try{Pr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!Pr.running,harvest:Math.min(99,Math.max(0,Number(Pr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Pr.dockTrips)||0))),dockPending:Pr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function lr(){return we.roof===null?we.running||we.loop>0:!!we.roof}function Gc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const st=new Xf({antialias:!0,alpha:!1,powerPreference:"high-performance"});st.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2));st.setSize(innerWidth,innerHeight,!1);st.shadowMap.enabled=!0;st.shadowMap.type=Zs;st.shadowMap.autoUpdate=!1;st.shadowMap.needsUpdate=!0;st.outputColorSpace=cn;st.toneMapping=Za;st.toneMappingExposure=1.22;be("#world").append(st.domElement);const jt=new _f;jt.background=new ut("#182e32");jt.fog=new ll("#182e32",8e-4);const Oe=new so(-10,10,10,-10,.1,600),Ru=new k(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(Ru);const Ke=new p1(Oe,st.domElement);Ke.target.copy(Ru);Ke.enableDamping=!0;Ke.enableRotate=!1;Ke.enablePan=!0;Ke.minZoom=.075;Ke.maxZoom=2.5;Ke.screenSpacePanning=!1;Ke.mouseButtons.LEFT=Ti.PAN;Ke.mouseButtons.RIGHT=Ti.PAN;Ke.touches.ONE=Ei.PAN;Ke.touches.TWO=Ei.DOLLY_PAN;jt.add(new Df("#d9eedc","#334d53",2.3));const As=new wu("#ffe2ac",3.3);As.position.set(-7,14,6);As.castShadow=!0;As.shadow.mapSize.set(en()?512:1024,en()?512:1024);Object.assign(As.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});As.shadow.bias=-4e-4;As.shadow.normalBias=.025;jt.add(As);const Qf=new wu("#8ad5d8",1.3);Qf.position.set(5,7,-8);jt.add(Qf);const ft=new $i;jt.add(ft);const cc={};function je(n,e={}){const t=n+JSON.stringify(e);return cc[t]||(cc[t]=new Ys({color:n,roughness:.8,...e}))}const li={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},ge={concrete:je(li.concrete),cream:je(li.cream),dark:je(li.dark),metal:je(li.metal,{metalness:.5,roughness:.4}),copper:je(li.copper,{metalness:.6,roughness:.35}),rust:je(li.rust),black:je(li.black),leaf:je(li.leaf),light:je("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:je("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},dr={box:new Fi(1,1,1),sphere:new fl(1,12,8),ico:new io(1,1),cyl:new to(1,1,1,16),cone:new ws(1,1,8)};function kt(n,e,t,i,s=ft){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Be=(n,e,t,i=ft)=>kt(dr.box,t,n,e,i),it=(n,e,t,i=ft)=>kt(dr.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),mt=(n,e,t,i,s=ft)=>kt(dr.cyl,i,n,[e,t,e],s);function ro(n,e,t,i=ft,s=.08){return kt(new Cu(...e,1,s),t,n,null,i)}function ht(n=[0,0,0],e=ft){const t=new $i;return t.position.set(...n),e.add(t),t}function Cs(n,e,t,i=ft){const s=new _u(n.map(r=>new k(...r)));return kt(new ml(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function gt(n,e,t,i,s=ft){const r=new k(...n),o=new k(...e),a=o.clone().sub(r),l=mt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return l.quaternion.setFromUnitVectors(new k(0,1,0),a.normalize()),l}function Mt(n,e,t,i,s=ft,r=[Math.PI/2,0,0]){const o=kt(new pl(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Dt(n,e,t,i,s=ft,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const l=new pu(o);l.colorSpace=cn;const c=kt(new Ts(t,i),new eo({map:l,side:In}),e,null,s);return c.castShadow=!1,c}let uc=179;function At(){return uc=uc*1664525+1013904223>>>0,uc/4294967296}const qa=document.createElement("canvas");qa.width=qa.height=256;const Xa=qa.getContext("2d");Xa.fillStyle="#b4bcaa";Xa.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Xa.fillStyle=`rgba(${At()>.5?"60,82,64":"235,229,201"},${At()*.08})`,Xa.fillRect(At()*256,At()*256,1+At()*3,1+At()*3);const Zr=new pu(qa);Zr.wrapS=Zr.wrapT=Gr;Zr.repeat.set(5,5);Zr.colorSpace=cn;const py=je("#c2c6b1",{map:Zr,roughness:.97});function Pu(n,e,t,i,s=ft){const r=new no;n.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new ur(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),kt(o,i,null,null,s)}const Lu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Pu(Lu,0,.82,ge.concrete);Pu(Lu,.06,.14,py);Pu(Lu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,je("#47665e"));for(let n=0;n<28;n++){const e=-5.4+At()*10.9,t=At()>.5?5.15:-5.2,i=kt(dr.ico,je(n%3?"#557469":"#668477"),[e,-1.15-At()*.5,t],[.25+At()*.8,.2+At()*.55,.35+At()*.3]);i.rotation.y=At()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Be([e,-.37,5.61],[.48,.19,.025],n%2?ge.copper:ge.dark),n%2===0&&Cs([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,ge.metal)}Dt("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,ft,{size:32});const Ut=ht([-3.2,.08,-2.5]),pn=ht([0,0,0],Ut);Be([0,.08,0],[4.5,.15,3.6],ge.dark,Ut);Be([0,1.2,-1.68],[4.5,2.4,.18],ge.cream,Ut);Be([-2.15,1,0],[.18,2,3.6],ge.cream,Ut);for(let n=0;n<5;n++){Be([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],ge.concrete,Ut),Be([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],ge.metal,Ut);for(let e=0;e<3;e++)Be([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],ge.copper,Ut)}Be([0,2.47,-.2],[4.8,.14,3.7],ge.rust,pn);for(let n=0;n<23;n++){const e=Be([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],je("#d09062"),pn);e.rotation.x=-.015}Be([0,2.35,1.62],[4.8,.14,.18],ge.dark,Ut);gt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,ge.copper,Ut);gt([2.3,.12,1.62],[2.3,2.4,1.62],.055,ge.copper,Ut);Dt("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Ut,{size:37});Be([.1,.85,-.84],[3.8,.13,.87],ge.rust,Ut);for(const n of[-1.5,1.65])Be([n,.44,-.84],[.12,.85,.65],ge.metal,Ut);for(let n=0;n<3;n++)Be([-1.15+n*.95,.51,-.85],[.82,.47,.75],ge.concrete,Ut),Be([-1.15+n*.95,.5,-.44],[.18,.04,.03],ge.copper,Ut);for(let n=0;n<6;n++)Be([-1.6+n*.48,2.07,-1.48],[.28,.16+At()*.16,.17],je(["#9fba95","#cb9b70","#667f71"][n%3]),Ut);mt([0,.5,.7],.32,.12,ge.rust,Ut);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;gt([e,.06,t],[e,.5,t],.04,ge.metal,Ut)}for(let n=0;n<4;n++)Mt([-1.5,.06,1],.3-n*.045,.025,ge.black,Ut);mt([-1.5,3,-.9],.16,.9,ge.metal,pn);mt([-1.5,3.47,-.9],.24,.08,ge.rust,pn);Be([1.4,2.9,-.4],[.8,.5,.6],ge.concrete,pn);for(let n=0;n<5;n++)Be([1.1+n*.15,2.94,-.085],[.035,.32,.03],ge.dark,pn);const Iu=new _l("#ffca86",5,5,2);Iu.position.set(-3,1.7,-1.1);ft.add(Iu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=ro([n,.1,e],[.74,.05,.74],je(At()>.3?"#b3baa6":"#a5b5a4"),ft,.018);t.rotation.y=(At()-.5)*.035}for(let n=0;n<95;n++){let e=-6+At()*12,t=-5.1+At()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=kt(dr.cone,ge.leaf,[e,.1,t],[.022,.12+At()*.12,.022]);i.rotation.z=(At()-.5)*.7}const Vc=new Bn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:In});Be([3.7,.12,3.6],[4.9,.24,2.7],ge.dark);kt(new Ts(4.5,2.4),Vc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Be([3.7,.29,n],[5,.38,.16],ge.cream);for(const n of[1.18,6.2])Be([n,.29,3.6],[.16,.38,2.85],ge.cream);for(let n=0;n<13;n++)Be([1.85,.5,2.15+n*.235],[1.08,.09,.22],je(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])mt([e,.88,n],.045,.8,ge.copper);for(const n of[1.31,2.4])Cs([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,ge.cream);const Du=[];for(let n=0;n<6;n++){let e=Be([4+n*.095,-1.25,5.56],[.055,2.4,.03],je("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Du.push(e)}for(let n=0;n<4;n++)Be([3.96+n*.17,.31,5.31],[.055,.08,.6],ge.dark);const $t=ht([3.7,.1,-2.6]);ro([0,.14,0],[3.7,.27,3.5],ge.cream,$t,.09);for(const n of[-1.55,1.55])Be([n,1.76,0],[.17,3.25,.2],ge.metal,$t),Be([n,.38,0],[.45,.2,.6],ge.copper,$t),gt([n,.36,-1.2],[n,2.9,0],.045,ge.copper,$t),gt([n,.36,1.2],[n,2.9,0],.045,ge.copper,$t);Be([0,3.38,0],[3.5,.18,.26],ge.copper,$t);const my=Mt([0,2.7,-.5],1.83,.035,ge.copper,$t,[0,0,0]);my.scale.y=.85;const oo=[];for(let n=0;n<5;n++){const e=ht([-1.18+n*.59,3.24,0],$t),t=1.8+n*.12;gt([0,0,-.08],[0,-t,0],.015,ge.dark,e),gt([0,0,.08],[0,-t,0],.015,ge.dark,e),it([0,-t,0],.205,ge.copper,e),Mt([0,-t,0],.211,.012,ge.light,e,[0,0,0]),oo.push({group:e,len:t,phase:n})}Be([0,.6,1.3],[1.45,.8,.4],ge.metal,$t);Dt("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,$t,{size:40});const gy=mt([-.43,.97,1.3],.19,.07,ge.cream,$t);gy.rotation.x=Math.PI/2;const Nu=Be([-.43,.99,1.342],[.015,.22,.008],ge.rust,$t);Nu.rotation.z=-.7;const jf=it([.53,.93,1.52],.09,ge.light,$t),yl=ht([.15,.4,1.59],$t);Mt([0,0,0],.19,.023,ge.rust,yl,[0,0,0]);for(let n=0;n<3;n++)gt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,ge.rust,yl);Cs([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,ge.copper);const ep=[];function Uu(n,e,t=1.5){mt([n,t/2,e],.038,t,ge.metal),Be([n,t,e],[.27,.11,.27],ge.dark),Be([n,t-.18,e],[.17,.25,.17],ge.light),Be([n,t-.34,e],[.25,.08,.25],ge.copper);const i=new _l("#ffbe70",1.8,3);i.position.set(n,t-.16,e),ep.push(i)}Uu(-5.9,3.9,1.3);Uu(.3,-4.8,1.7);Uu(5.8,1.25,1.35);const un=ht([-3.6,.08,3.55]),Hc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;ro([0,.14,e],[3.6,.3,1.14],ge.rust,un,.06),Be([0,.305,e],[3.36,.04,.92],je(li.soil),un);for(let t=0;t<4;t++){const i=ht([-1.26+t*.84,.33,e],un);mt([0,.14,0],.026,.28,ge.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=it([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],je(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){it([0,.17,0],[.25,.18,.25],je("#b6c58a"),i);for(let s=0;s<6;s++){const r=it([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],ge.leaf,i);r.rotation.y=s}Hc.push(i)}else{const s=it([.05,.22,0],[.1,.21,.12],je(li.purple,{roughness:.35}),i);s.rotation.z=-.25,it([.05,.41,0],[.075,.025,.07],ge.leaf,i),Hc.push(i)}}}const tp=ht([-1.72,.1,.8],un);for(let n=0;n<2;n++)Be([n*3.45,.6,0],[.04,1.3,.04],ge.copper,tp);gt([0,1.25,0],[3.45,1.25,0],.022,ge.copper,tp);Dt("КОБАЧКИ",[-.45,.68,1.64],1,.26,un,{bg:"#c2c7a3",fg:"#445e45",size:42});mt([1.9,.23,.7],.18,.34,je("#6b9389"),un);gt([2.04,.25,.7],[2.4,.46,.7],.045,je("#6b9389"),un);Mt([1.8,.48,.7],.16,.02,ge.copper,un,[0,0,0]);Be([-1.6,.2,1.47],[.65,.4,.45],ge.rust,un);for(let n=0;n<3;n++)Be([-1.6,.12+n*.11,1.71],[.7,.05,.025],ge.copper,un);const Mn=ht([-3.8,.08,.35]);mt([0,.73,0],.58,.1,ge.rust,Mn);mt([0,.35,0],.045,.7,ge.metal,Mn);for(let n=0;n<3;n++)gt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,ge.metal,Mn);const ao=ht([.1,.81,0],Mn);it([0,.2,0],[.23,.22,.23],ge.cream,ao);mt([0,.37,0],.14,.06,ge.copper,ao);it([0,.42,0],.045,ge.dark,ao);gt([.15,.18,0],[.33,.32,0],.07,ge.cream,ao);Mt([-.15,.25,0],.18,.035,ge.dark,ao,[0,0,0]);for(const n of[-.35,.38])mt([n,.84,.24],.082,.15,ge.cream,Mn),Mt([n,.92,.24],.084,.012,ge.copper,Mn),mt([n,.921,.24],.063,.006,je("#67513b"),Mn),Mt([n+.09,.86,.24],.045,.011,ge.cream,Mn,[0,0,0]);const Ml=[];for(let n=0;n<9;n++){const e=it([0,0,0],.07,je("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,Ml.push(e)}const jn=ht([-5.65,.09,1.1]);Be([0,.3,0],[.7,.6,.7],ge.concrete,jn);ro([0,.8,0],[.68,.45,.35],ge.dark,jn,.05);for(let n=0;n<6;n++)Be([-.2+n*.05,.8,.18],[.022,.27,.018],ge.copper,jn);Be([.18,.85,.184],[.16,.075,.02],ge.light,jn);it([.18,.72,.19],.05,ge.cream,jn);gt([.18,1,0],[.48,1.6,0],.012,ge.copper,jn);const np=ht([-.5,.1,-4.6]);mt([0,1.75,0],.055,3.5,ge.metal,np);it([0,3.55,0],.09,ge.copper,np);Cs([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,ge.dark);for(let n=0;n<8;n++){let e=n/8;const t=kt(new ws(.13,.3,3),je(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const Sl=ht([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Be([0,0,0],[.55,.09,.025],ge.rust,Sl);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}it([0,0,.05],.08,ge.copper,Sl);const rn=ht([7.25,-.03,1.5]);Be([0,-.12,0],[2.25,.3,2.5],ge.metal,rn);for(let n=0;n<10;n++)Be([-.99+n*.22,.08,0],[.2,.08,2.6],ge.rust,rn);Be([-.95,.2,-.95],[.35,.15,.35],ge.dark,rn);mt([.87,.34,.75],.075,.5,ge.copper,rn);mt([.87,.59,.75],.13,.05,ge.cream,rn);gt([.87,.1,-.7],[.87,2.3,-.7],.035,ge.copper,rn);Cs([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,ge.copper,rn);Be([.17,2.09,-.7],[.25,.4,.25],je("#ffd591"),rn);Be([.17,2.32,-.7],[.34,.08,.34],ge.dark,rn);for(let n=0;n<4;n++)Mt([.87,.15,.75],.24-n*.025,.024,je("#b8ad86"),rn);Be([6.7,.07,1.5],[1.4,.13,.8],ge.rust);Dt("НИКУДА",[.05,.28,1.36],1.3,.29,rn,{bg:"#c2c7a3",fg:"#445e45",size:45});const Ou=[];function bl(n,e,t=1){const i=ht(e,n),s=new no;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),kt(new ur(s,{depth:.19,bevelEnabled:!1}),je("#dfc99a"),[0,.15,-.1],null,i);const r=kt(new ws(.23,.36,3),ge.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=bl(ft,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);Ou.push(e)}const ei=C1({THREE:Xt,root:ft,dock:rn,state:we,M:ge,mat:je,group:ht,mesh:kt,box:Be,sphere:it,cyl:mt,torus:Mt,rod:gt,sign:Dt,paperBoat:bl,batchStatic:St,persist:Gc,say:Pn,refresh:Ot,chime:Vn,reduced:Kf}),Qe=ht([-.15,1.9,.85]);Qe.scale.setScalar(1.18);const Fu=je("#233a39",{metalness:.42,roughness:.32});it([0,.1,0],[.62,.8,.55],Fu,Qe);it([0,-.36,.1],[.44,.43,.43],Fu,Qe);it([-.61,.03,.03],[.1,.2,.12],ge.copper,Qe);it([.61,.03,.03],[.1,.2,.12],ge.copper,Qe);for(const n of[-.23,.23]){it([n,.2,.485],[.17,.13,.057],ge.black,Qe),Mt([n,.2,.541],.078,.02,ge.copper,Qe,[0,0,0]),it([n,.2,.56],.041,ge.light,Qe);const e=Be([n,.38,.48],[.24,.045,.06],ge.cream,Qe);e.rotation.z=n>0?-.13:.13}it([0,.04,.51],[.09,.17,.11],Fu,Qe);it([0,-.2,.44],[.31,.16,.11],ge.black,Qe);for(let n=0;n<7;n++){const e=(n-3)*.073,t=ro([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],ge.cream,Qe,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=it([t,i,-.04],[.18,.18,.48],ge.cream,Qe);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Cs([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,je("#f2edda"),Qe)}for(let n=0;n<3;n++)it([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],ge.cream,Qe);const zu=Mt([0,1.05,0],.77,.019,ge.copper,Qe);zu.rotation.z=.14;const _y=new _l("#ffbb62",.9,3);_y.position.set(0,.2,.9);const Ko=Mt([-.15,.26,.85],.7,.018,ge.copper),Kr=kt(new ul(.64,32),new eo({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Kr.rotation.x=-Math.PI/2;Kr.castShadow=!1;const wi=new k(-.15,1.9,.85),kn=ht([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Be([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?ge.cream:ge.concrete,kn);t.rotation.x=Math.PI/2-e,n%3===0&&gt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,ge.copper,kn)}for(const n of[-.45,.45])Mt([n,0,0],2.07,.025,ge.copper,kn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Mt([n,0,0],1.7,.075,ge.concrete,kn,[0,Math.PI/2,0]);gt([0,-2.15,-1.2],[0,-1.58,-.8],.07,ge.metal,kn);gt([0,-2.15,1.2],[0,-1.58,.8],.07,ge.metal,kn);Dt("ОБРАТНО",[.49,-.55,.2],1.15,.3,kn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+At()*20,t=-8+At()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||kt(dr.ico,je("#47675f"),[e,-1.3-At()*2,t],[.22+At()*.55,.19+At()*.4,.27+At()*.4])}const ip=new Ht,sp=[];for(let n=0;n<75;n++)sp.push((At()-.5)*25,At()*9-2,(At()-.5)*22);ip.setAttribute("position",new yt(sp,3));const rp=new vf(ip,new du({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));jt.add(rp);function St(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new xt().multiplyMatrices(i,r.matrixWorld));let l=t.get(o);l||t.set(o,l={material:r.material,geos:[]}),l.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=A1(o,!1);a&&kt(a,r,null,null,n),o.forEach(l=>l.dispose())}}St(ft,[Qe,un,$t,Mn,jn,rn,Ut,kn,Sl,...Ou,...Ml,...Du,Ko,Kr,ei.travel]);St(Ut,[pn]);St(pn,[]);St(kn,[]);St(Qe,[zu]);Qe.traverse(n=>{n.isMesh&&(n.castShadow=!1)});St(Mn,[...Ml]);St(jn,[]);St(rn,[ei.gallery,ei.beacon]);St($t,[...oo.map(n=>n.group),yl,Nu,jf]);oo.forEach(n=>St(n.group,[]));const Qr=ht([0,.33,0],un);Hc.forEach(n=>{Qr.add(n),n.position.y-=.33});St(Qr,[]);St(un,[Qr]);const Sn=U1({THREE:Xt,root:ft,scene:jt,head:Qe,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,paperBoat:bl,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},chime:Vn}),Ci=hy({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,mesh:kt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Ji=Qp({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Ri=Zp({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Pi=Bp({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},localPlay:()=>ot.localPlay()}),Li=Np({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},localPlay:()=>ot.localPlay()}),Ii=Wp({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},localPlay:()=>ot.localPlay()}),pi=Xp({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Di=$p({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),mi=Jp({THREE:Xt,root:ft,M:ge,mat:je,group:ht,box:Be,sphere:it,rod:gt,torus:Mt,sign:Dt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Zi=Kp({THREE:Xt,workshop:Ut,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),El=O1({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,chime:Vn}),lo=cy({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,paperBoat:bl,batchStatic:St,chime:Vn}),Nn=ly({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,chime:Vn,changed:()=>{os(),st.shadowMap.needsUpdate=!0}}),op=F1({head:Qe,group:ht,sphere:it,box:Be,torus:Mt,M:ge,mat:je}),hi=iy({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,mesh:kt,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,chime:Vn,changed:()=>{os(),st.shadowMap.needsUpdate=!0}}),Ln=V1({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,tube:Cs,torus:Mt,sign:Dt,batchStatic:St,chime:Vn,changed:()=>{os(),st.shadowMap.needsUpdate=!0}}),Zn=X1({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,chime:Vn,changed:()=>{os(),st.shadowMap.needsUpdate=!0}}),Ki=J1({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,sign:Dt,batchStatic:St,chime:Vn,changed:()=>{os(),st.shadowMap.needsUpdate=!0}}),di=j1({THREE:Xt,scene:jt,root:ft,head:Qe,M:ge,mat:je,group:ht,box:Be,sphere:it,cyl:mt,rod:gt,torus:Mt,sign:Dt,batchStatic:St,chime:Vn,changed:()=>{os(),st.shadowMap.needsUpdate=!0}});let nn=null,Ze=1;const Gn={seams:{n:"19",label:"шовная",title:"голова по швам",description:"Три сцепленных кольца держат лицо.",action:"испытать инструкцией",point:new k(-20.4,.7,-45.4),position:new k(-24,.6,-48),run:()=>Li.run()},still:{n:"18",label:"облачная перегонная",title:"16 часов на облако",description:"Четыре карты переливают одно облако.",action:"перелить облако",point:new k(28.4,.7,-19.8),position:new k(24,.5,-24),run:()=>Pi.run()},fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new k(-26.4,.7,-34.3),position:new k(-23,.1,-32),run:()=>Ii.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new k(-32,.6,-20.6),position:new k(-24,.6,-24),run:()=>pi.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new k(24,.9,29.7),position:new k(24,.6,24),run:()=>Di.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new k(-6.9,1.9,-20.1),position:new k(0,.6,-24),run:()=>mi.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new k(-17.5,1.3,3.4),position:new k(-24,.6,0),run:()=>Ri.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new k(-1.4,1.5,-1.1),position:new k(-3.2,1.25,-2.2),run:()=>Zi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new k(4.7,.8,25.8),position:new k(0,.4,24),run:()=>Ji.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new k(28.4,2.2,2.5),position:new k(24,.4,0),run:()=>Ci.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new k(-.1,2.15,4.3),position:new k(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new k(-6,4.55,-3.25),position:new k(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,lp.copy(Qe.position),Pn("ноги не понадобились"),Ot())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new k(-3.2,3.15,-2.5),position:new k(-3.2,1.1,-2.5),run:()=>{we.roof=lr()?0:1,Pn(lr()?"заходи":"прикрыл"),Ot()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Qe.position),n.y+=1.35},position:new k(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Pn(n[vy++%n.length]),wi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new k(3.7,3.85,-2.6),position:new k(3.7,1,-2.6),run:()=>{we.running=!we.running,Gc(),Pn(we.running?"ну пошло":"можно и полежать"),Ot()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new k(-3.7,1.65,.35),position:new k(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,wi.set(-2.65,1.7,.65),Pn("щас, чайник поставлю"),Ot())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new k(-3.4,1,3.8),position:new k(-3.6,1,3.55),run:()=>{we.harvest++,js=.15,Gc(),wi.set(-1.6,1.6,2.3),Pn(we.harvest===1?"о, урожай":"кабачки опять победили"),Ot()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new k(-5.65,1.75,1.1),position:new k(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,ku(),Pn(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Ot()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new k(7.4,2.75,1.1),position:new k(7.25,.9,1.5),run:()=>{ei.launchOrCollect(),we.dockPending===!1&&we.boat===0&&wi.set(5.85,1.7,1.05)}}};let vy=0,js=1,ap=0,Ms=0;const lp=new k;let cp=()=>{ns("engine"),Gn.engine.run()};const wl={};for(const[n,e]of Object.entries(Gn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>ns(n),be("#hotspots").append(t),wl[n]=t}const up=be("#hotspots"),hc=be("#speech"),gs={width:innerWidth,height:innerHeight},xy=dy({entries:Gn,elements:wl,layer:up,camera:Oe});let dc=!1,yd=NaN,Md=NaN;const Er=new k;function ns(n){we.selected=n,be("#inspector").classList.remove("collapsed");const e=Gn[n];be("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,be("#object-title").textContent=e.title,be("#object-description").textContent=e.description,cp=e.run,be("#focus-object").hidden=!1,be("#focus-object").textContent=Gt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ot();for(const[t,i]of Object.entries(wl))i.classList.toggle("selected",t===n)}function Ot(){const n=we.selected,e=Gn[n];if(be("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=lr()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=ei.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Ci.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Ji.card();t=r.action,i=r.description}if(n==="bench"){const r=Zi.card();t=r.action,i=r.description}if(n==="drydock"){const r=Ri.card();t=r.action,i=r.description}if(n==="dash"){const r=mi.card();t=r.action,i=r.description}if(n==="quotes"){const r=Di.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=pi.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Ii.card();t=r.action,i=r.description,s=r.disabled}if(n==="seams"){const r=Li.card();t=r.action,i=r.description,s=r.disabled}if(n==="still"){const r=Pi.card();t=r.action,i=r.description,s=r.disabled}Li.controls.hidden=n!=="seams",Pi.controls.hidden=n!=="still",Ii.controls.hidden=n!=="fork",pi.controls.hidden=n!=="garage",Di.controls.hidden=n!=="quotes",mi.controls.hidden=n!=="dash",Ri.controls.hidden=n!=="drydock",Zi.controls.hidden=n!=="bench",Ji.controls.hidden=n!=="amnesty",Ci.controls.hidden=n!=="cellar",be("#enter-bench")&&(be("#enter-bench").hidden=n!=="workshop"),be("#enter-dream08").hidden=n!=="radio",be("#enter-dream07").hidden=n!=="garage",be("#enter-dream06").hidden=n!=="radio",be("#enter-dream05").hidden=n!=="stair",be("#enter-dream09").hidden=n!=="dock",be("#enter-dream03").hidden=n!=="dock",be("#enter-dream04").hidden=n!=="workshop",be("#greenhouse-controls").hidden=n!=="greenhouse",be("#thermal-moves").hidden=Sn.inspect().mode!=="playing",be("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,be("#object-description").textContent=i,be("#object-action").innerHTML=t+" <span>↗</span>",be("#object-action").disabled=s}be("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&ot.watching()){ot.localPlay();return}ot.localPlay(),cp(),Ms=performance.now()+2200};be("#close-card").onclick=()=>be("#inspector").classList.add("collapsed");function Pn(n){be("#speech").textContent=n,ap=performance.now()+4e3,be("#speech").classList.add("visible")}be("#markers").onclick=()=>{we.markers=!we.markers,be("#markers").setAttribute("aria-pressed",we.markers),up.hidden=!we.markers||!!nn||Oe.zoom<.4};let Gt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function hp(){gs.width=innerWidth,gs.height=innerHeight;const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(en()?2.8:0),Oe.bottom=-e-(en()?2.8:0),Oe.updateProjectionMatrix(),st.setSize(innerWidth,innerHeight,!1),st.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2))}function fr(){if(ot==null||ot.unfollow(),nn){co();return}Gt=null,document.body.classList.remove("close-look"),be("#focus-object").textContent="осмотреть ближе ⊕",Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.maxZoom=2.5,Oe.zoom=1,Ke.target.copy(Ru),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}be("#focus-object").onclick=()=>{if(we.selected){if(Gt===we.selected){fr();return}Gt=we.selected,document.body.classList.add("close-look"),be("#focus-object").textContent="весь двор ⌂",Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.target.copy(Gn[we.selected].position),en()&&(Ke.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams"].includes(Gt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams"].includes(Gt)?en()?1.8:1.6:en()?2.5:2.1,Gt==="bench"?(Ke.maxZoom=4.5,Oe.zoom=en()?3.8:3.4,Ke.target.y+=en()?-.15:0,Ke.target.x+=.3,Ke.target.z-=.2):Ke.maxZoom=2.5,Oe.updateProjectionMatrix()}};be("#home").onclick=fr;be("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Ke.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};be("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Ke.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};be("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",hp);hp();function dp(n,e,t=!1){nn&&co(),fr(),Ke.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),be("#inspector").classList.add("collapsed")}function yy(){dp(0,0);const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.zoom=Math.min(e*n/(er.half*1.57),e/(er.half*1.3)),Oe.updateProjectionMatrix()}const er=N1({root:ft,camera:Oe,controls:Ke,mobile:en,go:dp,overview:yy,home:fr,locationTarget:()=>["dash","quotes","garage","fork","still","seams"].includes(Gt)&&we.selected===Gt?Gn[Gt].position:null}),Qi=document.createElement("select");Qi.id="world-places";Qi.setAttribute("aria-label","Открыть место");Qi.append(new Option("места",""));for(const[n,e]of Object.entries(Gn))Qi.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Qi,document.querySelector("#territory-location"));Qi.onchange=()=>{const n=Qi.value;Gn[n]&&(fr(),Ke.target.copy(Gn[n].position),ns(n),Qi.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Sd=new Of,bd=new Te;let fs=null;st.domElement.addEventListener("pointerdown",n=>{fs={x:n.clientX,y:n.clientY,time:performance.now()}});st.domElement.addEventListener("pointerup",n=>{if(!fs||Math.hypot(n.clientX-fs.x,n.clientY-fs.y)>7||performance.now()-fs.time>550){fs=null;return}if(fs=null,bd.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Sd.setFromCamera(bd,Oe),nn)return;const e=Sd.intersectObjects([Li.house,Pi.house,Ii.house,pi.house,Di.house,mi.house,Ri.house,Zi.house,Ji.house,Ci.house,Sn.house,Qe,$t,un,Mn,jn,rn,Ut,kn,ei.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Li.house,Pi.house,Ii.house,pi.house,Di.house,mi.house,Ri.house,Zi.house,Ji.house,Ci.house,Sn.house,Qe,$t,un,Mn,jn,rn,Ut,kn,ei.travel].includes(t);)t=t.parent;const i=new Map([[Li.house,"seams"],[Pi.house,"still"],[Ii.house,"fork"],[pi.house,"garage"],[Di.house,"quotes"],[mi.house,"dash"],[Ri.house,"drydock"],[Zi.house,"bench"],[Ji.house,"amnesty"],[Ci.house,"cellar"],[Sn.house,"greenhouse"],[Qe,"head"],[$t,"engine"],[un,"garden"],[Mn,"tea"],[jn,"radio"],[rn,"dock"],[Ut,"workshop"],[kn,"stair"],[ei.travel,"dock"]]).get(t);i&&ns(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Gn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&ns(t)}});let Tn=null;function My(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(o),c.start(),c});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function ku(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}be("#sound").onclick=async()=>{try{Tn||(Tn=My()),await Tn.ctx.resume(),we.sound=!we.sound,Tn.gain.gain.setTargetAtTime(we.sound?.08:0,Tn.ctx.currentTime,.3),be("#sound").textContent=we.sound?"звук включён":"звук выключен",be("#sound").setAttribute("aria-pressed",we.sound),ku(),Ot()}catch{Pn("со звуком не сложилось")}};function Vn(n=330){if(!Tn||!we.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}be("#about").onclick=()=>be("#about-dialog").showModal();be("#close-about").onclick=be("#back-to-yard").onclick=()=>be("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&nn){co();return}n.key==="Escape"&&be("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&be("#zoom-in").click(),n.key==="-"&&be("#zoom-out").click(),n.key.toLowerCase()==="r"&&be("#rotate").click(),n.key.toLowerCase()==="h"&&fr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{ot.localPlay(),Sn.step(n.dataset.thermal),Ms=performance.now()+2200};const Sy={9:{title:"уши для берега",lines:[],verb:"слушать"},8:{title:"десять факелов на диске",lines:[],verb:"настроить"},7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Bu(){return Ze===1?Sn:Ze===2?El:Ze===3?lo:Ze===4?Nn:Ze===5?hi:Ze===6?di:Ze===7?Ki:Ze===8?Zn:Ln}function os(){const n=Ze===1?Sn.inspect().dreamStep:Bu().inspect().step,e=Sy[Ze];if(be("#exit-ear-dream").hidden=Ze!==9,be("#dream-ears").hidden=Ze!==9,be("#dream-torches").hidden=Ze!==8,be("#dream-cloud").hidden=Ze!==6,be("#dream-force").hidden=Ze!==3,be("#dream-roofs").hidden=Ze!==4,be("#dream-meter").hidden=Ze!==5,be("#dream-panel .object-kicker").textContent=`СОН 0${Ze} / БЕЗНОГИМ`,be("#dream-panel h2").textContent=e.title,be("#dream-text").textContent=Ze===9?Ln.text():Ze===8?Zn.text():Ze===7?Ki.text():Ze===6?di.text():Ze===5?hi.text():Ze===4?Nn.text():e.lines[n],be("#dream-breathe").textContent=Ze===9?Ln.button():Ze===8?Zn.button():Ze===7?Ki.button():Ze===6?di.button():Ze===5?hi.button():Ze===4?Nn.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,be("#dream-breathe").disabled=Ze===9&&(Ln.busy()||!Ln.ready()&&Ln.inspect().phase==="sorting")||Ze===8&&(Zn.busy()||!Zn.canRelease())||Ze===7&&Ki.busy()||Ze===6&&["heating","raining"].includes(di.inspect().phase)||Ze===4&&Nn.inspect().phase==="flying"||Ze===5&&["measuring","unfolding","climbing"].includes(hi.inspect().phase),Ze===9){const t=Ln.inspect();for(const i of document.querySelectorAll("[data-ear-stone]")){const s=Number(i.dataset.earStone);i.textContent=[1,2,3,4,5,7][s]+" · "+["полка","левое","правое"][t.places[s]],i.setAttribute("aria-label","камень "+[1,2,3,4,5,7][s]+": "+["на полке","в левом ухе","в правом ухе"][t.places[s]]),i.disabled=t.phase!=="sorting"}}if(Ze===8){const t=Zn.inspect();for(const i of document.querySelectorAll("[data-torch-turn]")){const s=Number(i.dataset.torchTurn);i.textContent=["птица","вода","ветер"][s]+" · "+t.turns[s]+" ↻",i.setAttribute("aria-pressed",t.aligned[s]),i.disabled=t.phase!=="tuning"}}if(Ze===6){const t=di.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(Ze===5){const t=hi.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(Ze===4){const t=Nn.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Nn.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function _i(n=1){nn||(Ze=n,nn={target:Ke.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:Gt,returnId:n===9?"dock":n===8?"radio":n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},Bu().enter(),Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.target.set(0,en()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?en()?1.65:1.75:en()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7||n===8||n===9),Ya="",be("#dream-panel").hidden=!1,os(),st.shadowMap.needsUpdate=!0)}function co(){if(!nn)return;const n=nn;nn=null,Bu().exit(),Ke.enableDamping=!1,Ke.update(),Ke.enableDamping=!0,Ke.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,Gt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),Ya="",be("#dream-panel").hidden=!0,st.shadowMap.needsUpdate=!0,ns(n.returnId)}be("#enter-dream").onclick=()=>_i(1);be("#exit-dream").onclick=co;be("#dream-breathe").onclick=()=>{Ze===1?Sn.breathe():Ze===2?El.pour():Ze===3?lo.toss():Ze===4?Nn.send():Ze===5?hi.act():Ze===6?di.act():Ze===7?Ki.act():Ze===8?Zn.act():Ln.act(),Ms=performance.now()+2200,os(),st.shadowMap.needsUpdate=!0};const uo=document.createElement("button");uo.id="enter-bench";uo.hidden=!0;uo.textContent="собрать механический монитор ↗";uo.onclick=()=>{ns("bench"),be("#focus-object").click()};be("#focus-object").before(uo);const Tl=document.createElement("button");Tl.id="enter-dream02";Tl.textContent="сон 02 / вода спит ↗";Tl.onclick=()=>_i(2);Ci.controls.append(Tl);be("#exit-ear-dream").onclick=co;be("#enter-dream09").onclick=()=>_i(9);for(const n of document.querySelectorAll("[data-ear-stone]"))n.onclick=()=>Ln.move(Number(n.dataset.earStone));be("#enter-dream03").onclick=()=>_i(3);be("#enter-dream04").onclick=()=>_i(4);be("#enter-dream08").onclick=()=>_i(8);for(const n of document.querySelectorAll("[data-torch-turn]"))n.onclick=()=>Zn.turn(Number(n.dataset.torchTurn));be("#enter-dream07").onclick=()=>_i(7);be("#enter-dream06").onclick=()=>_i(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>di.choose(n.dataset.cloudTarget);be("#enter-dream05").onclick=()=>_i(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>hi.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Nn.turn(Number(n.dataset.roofTurn)),Ms=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{lo.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};be("#dream-archive").onclick=()=>be("#dream-archive-dialog").showModal();be("#close-dream-archive").onclick=()=>be("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{be("#dream-archive-dialog").close(),_i(Number(n.dataset.dreamId))};const ot=P1({head:Qe,headDestination:wi,state:we,controls:Ke,camera:Oe,refresh:Ot,setAudioTone:ku,say:Pn,onHarvest:()=>{js=.15}});let fc="";const fp=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])fp.push(new k(n,e,t));const Gu=[];for(const n of[-28,-20])for(const e of[-1.65,3.75])for(const t of[-51.4,-43.6])Gu.push(new k(n,e,t));const Vu=[];for(const n of[19.3,28.7])for(const e of[-1.65,3.1])for(const t of[-27.2,-19.5])Vu.push(new k(n,e,t));const pp=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])pp.push(new k(n,e,t));const mp=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])mp.push(new k(n,e,t));const gp=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])gp.push(new k(n,e,t));const _p=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])_p.push(new k(n,e,t));function by(){var v,R;const n=Gt==="seams"&&we.selected==="seams",e=Gt==="still"&&we.selected==="still",t=Gt==="fork"&&we.selected==="fork",i=Gt==="garage"&&we.selected==="garage",s=Gt==="quotes"&&we.selected==="quotes",r=Gt==="dash"&&we.selected==="dash",o=Gt==="drydock"&&we.selected==="drydock"||r||s||i||t||e||n,a=(Gt==="bench"&&we.selected==="bench"||o)&&!be("#inspector").classList.contains("collapsed")&&!nn;if(document.body.classList.toggle("seams-look",a&&n),document.body.classList.toggle("still-look",a&&e),document.body.classList.toggle("fork-look",a&&t),document.body.classList.toggle("garage-look",a&&i),document.body.classList.toggle("quotes-look",a&&s),document.body.classList.toggle("dash-look",a&&(r||s||i||t||e||n)),document.body.classList.toggle("bench-look",a&&!o),document.body.classList.toggle("drydock-look",a&&o),!a){fc="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const l=be("#inspector").getBoundingClientRect(),c=be(".territory-nav").getBoundingClientRect(),u=be(".toolbar").getBoundingClientRect(),p=innerWidth<=900&&innerHeight>innerWidth,h=p?{left:14,right:u.left-10,top:c.bottom+(e||n?6:14),bottom:l.top-(e||n?6:14)}:{left:Math.max(l.right+18,c.right+18),right:u.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!p&&(h.left=c.right+12,h.right=innerWidth-16,h.top=u.bottom+10,h.bottom=l.top-10),(r||s||i||t||e||n)&&innerWidth<=900&&!p&&(h.left=12,h.right=l.left-12,h.top=c.bottom+10,h.bottom=be("footer").getBoundingClientRect().top-12);const m=be(".resident-history");o&&innerWidth>900&&m&&!m.hidden&&(h.right=Math.min(h.right,m.getBoundingClientRect().left-18));const d=i?pi.inspect():null,_=[];if(d){const T=Math.max(d.gap,d.range,((v=d.flight)==null?void 0:v.range)||0),D=Math.max(d.apex,((R=d.flight)==null?void 0:R.apex)||0);for(const q of[-34,-32+.7*T+1.6])for(const H of[-1.3,Math.max(1.5,.8+.5*D)])for(const z of[-26,-19.8])_.push(new k(q,H,z))}const g=[(d==null?void 0:d.gap)||0,(d==null?void 0:d.range)||0,(d==null?void 0:d.apex)||0,n?19:e?18:t?17:i?16:s?15:r?14:o?13:12,innerWidth,innerHeight,h.left,h.right,h.top,h.bottom,mn.targetAngle].map(T=>Math.round(T*10)/10).join(":");if(g===fc||h.bottom-h.top<35||h.right-h.left<50)return;fc=g;const f=()=>{Oe.updateMatrixWorld();const T=(n?Gu:e?Vu:t?pp:i?_:s?mp:r?gp:o?_p:fp).map(D=>Rt(D.clone()));return{l:Math.min(...T.map(D=>D.x)),r:Math.max(...T.map(D=>D.x)),t:Math.min(...T.map(D=>D.y)),b:Math.max(...T.map(D=>D.y))}};let M=f();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((h.right-h.left)/(M.r-M.l),(h.bottom-h.top)/(M.b-M.t))),Oe.updateProjectionMatrix(),M=f();const A=(h.left+h.right-M.l-M.r)/2,x=(h.top+h.bottom-M.t-M.b)/2,E=new k().setFromMatrixColumn(Oe.matrixWorld,0),b=new k().setFromMatrixColumn(Oe.matrixWorld,1),w=E.multiplyScalar(-A*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(b.multiplyScalar(x*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Ke.target.add(w),Oe.position.add(w),Oe.lookAt(Ke.target),Oe.updateMatrixWorld()}let Ya="";const vp=[];for(const n of[-4.5,4.5])for(const e of[-.6,5.3])for(const t of[-3.3,3.7])vp.push(new k(n,e,t));const xp=[];for(const n of[-3.6,3.6])for(const e of[-.65,4.8])for(const t of[-3.6,3.6])xp.push(new k(n,e,t));const yp=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])yp.push(new k(n,e,t));const Mp=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Mp.push(new k(n,e,t));const Sp=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Sp.push(new k(n,e,t));function Ey(){if(!nn||![4,5,6,7,8,9].includes(Ze))return;const n=be("#dream-panel").getBoundingClientRect(),e=be("footer").getBoundingClientRect(),t=be(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===Ya||r.right-r.left<60||r.bottom-r.top<80)return;Ya=o;const a=()=>{Oe.updateMatrixWorld();const d=(Ze===9?vp:Ze===8?xp:Ze===7?yp:Ze===5?Mp:Sp).map(_=>Rt(_.clone()));return{l:Math.min(...d.map(_=>_.x)),r:Math.max(...d.map(_=>_.x)),t:Math.min(...d.map(_=>_.y)),b:Math.max(...d.map(_=>_.y))}};let l=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(l.r-l.l),(r.bottom-r.top)/(l.b-l.t))),Oe.updateProjectionMatrix(),l=a();const c=(r.left+r.right-l.l-l.r)/2,u=(r.top+r.bottom-l.t-l.b)/2,p=new k().setFromMatrixColumn(Oe.matrixWorld,0),h=new k().setFromMatrixColumn(Oe.matrixWorld,1),m=p.multiplyScalar(-c*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Ke.target.add(m),Oe.position.add(m),Oe.lookAt(Ke.target),Oe.updateMatrixWorld()}let Ed=performance.now(),Ho=0,wd=0;function Rt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function wy(){ot.sync();const n=performance.now(),e=(n-Ed)/1e3;Ed=n,Ho+=e,we.energy=xn.damp(we.energy,we.running?1:0,1.6,e);const t=Kf?Ho*.2:Ho;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(Ke.target.x+Math.sin(mn.angle)*i,Ke.target.y+i*Math.SQRT1_2,Ke.target.z+Math.cos(mn.angle)*i),Oe.lookAt(Ke.target),Ke.update(),nn||(Ke.target.x=xn.clamp(Ke.target.x,-62,er.half+2),Ke.target.z=xn.clamp(Ke.target.z,-62,er.half+2)),er.update(),by(),Ey();for(const s of oo)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(pn.position.z=xn.damp(pn.position.z,lr()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,lr()?.4:0,2,e),yl.rotation.z=t*we.energy*.28,Nu.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,jf.material.emissiveIntensity=.45+we.energy*1.5,Vc.uniforms.uTime.value=t,Vc.uniforms.uEnergy.value=we.energy,Sl.rotation.z=t*(.09+we.energy*.23),ep.forEach(s=>s.intensity=.65+we.energy*1.5),Iu.intensity=2+we.energy*4,Qe.position.x=xn.damp(Qe.position.x,wi.x,1.6,e),Qe.position.z=xn.damp(Qe.position.z,wi.z,1.6,e),Qe.position.y=xn.damp(Qe.position.y,wi.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=xn.smoothstep(s,0,2);Qe.position.lerpVectors(lp,new k(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Qe.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Qe.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Qe.position.lerpVectors(new k(-6,.65,-3.25),wi,r),Qe.rotation.x=(1-r)*Math.PI*2}we.loop||(Qe.rotation.x=0,Pn("ну вот и дома"),Ot())}if(ot.place(),Qe.rotation.y=Math.sin(t*.3)*.12,zu.rotation.y=t*.13,Ko.position.x=Qe.position.x,Ko.position.z=Qe.position.z,Ko.rotation.z=.04*Math.sin(t),Kr.position.x=Qe.position.x,Kr.position.z=Qe.position.z,js=xn.damp(js,1,.85,e),Qr.scale.y=js,Qr.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Pn("чай готов. живём."),Ot(),Vn(440))),Ml.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),Ou.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),op.update(ot.watching()),El.update(e,t),lo.update(e,t),Nn.update(e,t),hi.update(e,t),di.update(e,t),Ki.update(e,t),Zn.update(e,t),Ln.update(e,t),Li.update(e),Pi.update(e,t),Ii.update(e),pi.update(e),Di.update(e),mi.update(e),Ri.update(e),Zi.update(e),pn.visible=!(Gt==="bench"&&we.selected==="bench"&&!be("#inspector").classList.contains("collapsed")&&!nn),Ji.update(e),Ci.update(Ho),Sn.update(e,t),ei.update(e,t),dc!==we.dockPending&&(dc=we.dockPending,wl.dock.classList.toggle("waiting",dc)),Du.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),rp.rotation.y=t*.003,we.running&&t-wd>3.5&&(wd=t,Vn([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),xy.update(!nn&&Oe.zoom>=.4&&we.markers,gs.width,gs.height),nn||n>ap)hc.classList.contains("visible")&&hc.classList.remove("visible");else{Er.copy(Qe.position),Er.y+=1.52,Er.project(Oe);const s=Math.round(Math.max(85,Math.min(gs.width-85,(Er.x+1)*gs.width*.5))*10)/10,r=Math.round((1-Er.y)*gs.height*.5*10)/10;(s!==yd||r!==Md)&&(yd=s,Md=r,hc.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}Ms&&performance.now()>Ms&&(st.shadowMap.needsUpdate=!0,Ms=0),st.render(jt,Oe)}we.running&&(be("#object-action").innerHTML="остановить двор <span>↗</span>");Ot();st.setAnimationLoop(wy);requestAnimationFrame(()=>be("#loading").classList.add("done"));window.__yard={state:we,select:ns,inspect:()=>({resident:ot.inspect(),territory:er.inspect(),sleepBody:op.inspect(),sleepDream:El.inspect(),quietDream:lo.inspect(),earDream:Ln.inspect(),earDreamScreen:Ln.inspect().landmarks.map(n=>Rt(new k(...n))),torchDream:Zn.inspect(),torchDreamScreen:Zn.inspect().landmarks.map(n=>Rt(new k(...n))),pocketDream:Ki.inspect(),pocketDreamScreen:Ki.inspect().landmarks.map(n=>Rt(new k(...n))),cloudDream:di.inspect(),cloudDreamScreen:di.inspect().landmarks.map(n=>Rt(new k(...n))),meterDream:hi.inspect(),meterDreamScreen:hi.inspect().landmarks.map(n=>Rt(new k(...n))),roofDream:Nn.inspect(),roofDreamGoalScreen:Nn.inspect().goals.map(n=>Rt(new k(...n))),roofDreamLetterScreen:Rt(new k(...Nn.inspect().letter)),dreamId:nn?Ze:null,seams:Li.inspect(),seamsBounds:Gu.map(n=>Rt(n.clone())),seamsScreen:Rt(new k(-24,1,-48)),seamsScreens:Li.inspect().landmarks.map(n=>Rt(new k(...n))),still:Pi.inspect(),stillBounds:Vu.map(n=>Rt(n.clone())),stillScreen:Rt(new k(24,.3,-24)),stillScreens:Pi.inspect().landmarks.map(n=>Rt(new k(...n))),fork:Ii.inspect(),forkScreen:Rt(new k(-23,.1,-32)),forkScreens:Ii.inspect().landmarks.map(n=>Rt(new k(...n))),garage:pi.inspect(),garageScreen:Rt(new k(...pi.inspect().garage).add(new k(-24,-.7,-24))),garageCarScreen:Rt(new k(-32,-.7,-24)),quotes:Di.inspect(),quoteScreens:Di.inspect().quotePositions.map(n=>Rt(new k(...n).add(new k(24,-1.05,24)))),dash:mi.inspect(),dashSnailScreen:Rt(new k(...mi.inspect().snail).add(new k(0,-1,-24))),dashBeamScreen:Rt(new k(...mi.inspect().beam).add(new k(0,-1.5,-24))),drydock:Ri.inspect(),drydockShipScreen:Rt(new k(...Ri.inspect().ship).add(new k(-24,-.5,0))),bench:Zi.inspect(),benchScreen:Rt(new k(-2.65,1.58,-3.18)),benchBucketScreen:Rt(new k(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:Ji.inspect(),amnestyScreen:Rt(new k(0,-.3,24)),cellar:Ci.inspect(),cellarScreen:Rt(new k(24,-.3,.25)),objects:Object.keys(Gn),greenhouse:Sn.inspect(),dock:ei.inspect(),boatScreen:Rt(new k(...ei.inspect().boat).add(new k(0,.2,0))),drawCalls:st.info.render.calls,triangles:st.info.render.triangles,gpuGeometries:st.info.memory.geometries,zoom:Oe.zoom,target:Ke.target.toArray(),angle:mn.angle,head:Qe.position.toArray(),roof:pn.position.toArray(),roofOpen:lr(),roofMode:we.roof===null?"auto":"manual",pendulums:oo.map(n=>n.group.rotation.x),growth:js,meshes:(()=>{let n=0;return jt.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[st.domElement.width,st.domElement.height]})};fy();
