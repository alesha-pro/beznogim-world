(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const mc=()=>({phase:"folding",folds:[!1,!1,!1],water:[0,0,0],progress:0,open:0}),gc=n=>n.phase==="raining"||n.phase==="turning";function Up(n,e){return n.phase==="folding"&&Number.isInteger(e)&&e>=0&&e<3?{...n,folds:n.folds.map((t,i)=>i===e?!t:t)}:n}function Op(n){return n.phase==="shelter"?mc():n.phase==="folding"?{...n,phase:"raining",progress:0}:n}function Fp(n,e){if(!gc(n)||!Number.isFinite(e)||e<=0)return n;const t=Math.min(.1,e);if(n.phase==="turning"){const r=Math.min(1,n.open+t/3);return{...n,open:r,phase:r>=1?"shelter":"turning"}}const i=Math.min(1,n.progress+t/6),s=n.water.map((r,o)=>n.folds[o]?Math.max(r,i):r);return{...n,water:s,progress:i,phase:i<1?"raining":s.every(r=>r===1)?"turning":"folding"}}function ah(n){const e=n.open*n.open*(3-2*n.open);return{lift:e*2.8,flip:e*Math.PI,clockY:4.3-e*3.5,clockScale:1-e*.65,clockTilt:-e*Math.PI/2,wing:e*.65,hand:n.progress*Math.PI*2,reverse:e}}function zp(n,e,t){const i=e%3,s=Math.floor(e/3),r=n.phase==="raining"?(n.progress*2+s/12)%1:(t*.3+s/12)%1,o=(i-1)*2.4,a=n.folds[i],c=n.open;let l;if(r<.45){const u=r/.45;l=[o,4.5-u*2,-.65+u*.65]}else{const u=(r-.45)/.55;l=[o+(a?-o*.55:Math.sign(o||1)*1.2)*u,2.5-u*2,a?u*1.75:-u*1.7]}return c>0&&(l=[(i-1)*.9+Math.sin(r*Math.PI*2)*.15,.6+r*3.9,1.5-r*2]),l}function kp({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,tube:u,torus:g,sign:h,batchStatic:p,chime:f,changed:_}){const m=o([0,0,0],e);m.name="dream10-paper-hour",m.visible=!1;const d=r("#eadbc0"),M=r("#63969e",{metalness:.18,roughness:.35}),C=r("#284a53"),x=s.copper,E=o([0,-.25,0],m);a([0,0,0],[8,.18,6.4],C,E);for(let L=0;L<3;L++)a([(L-1)*2.4,.12,-2.1],[1.8,.02,1.4],M,E);const S=o([0,4.3,-.65],m);S.rotation.y=Math.PI/4,g([0,0,0],1.25,.045,x,S,[0,0,0]);const T=[];for(let L=0;L<12;L++){const J=L*Math.PI/6,Z=o([Math.sin(J)*1.25,Math.cos(J)*1.25,0],S);Z.rotation.z=-J,a([0,0,0],[.15,.38,.045],d,Z),T.push(Z)}const v=o([0,0,.05],S);a([0,.48,0],[.045,.96,.045],s.mint,v),c([0,0,.02],.09,x,v);const P=[],A=[];for(let L=0;L<3;L++){const J=o([(L-1)*2.4,2.5,0],m);P.push(J);const Z=[];for(const w of[-1,1]){const R=o([0,0,0],J);a([w*.48,0,0],[.96,.045,1.5],d,R);for(let z=0;z<4;z++)a([w*.48,.028,-.48+z*.3],[.68,.006,.008],M,R);Z.push(R)}A.push(Z),l([0,-.8,-.6],.035,1.6,x,J),h(String(L+1),[0,.1,.85],.6,.25,J,{size:60})}const N=o([0,0,1.65],m);for(const L of[-1.9,1.9])for(const J of[-.8,.8])l([L,.25,J],.055,.5,x,N);a([0,.36,0],[4.2,.12,1.9],x,N);const q=o([0,.55,1.65],m),V=[];a([0,0,0],[1.4,.12,1.9],d,q);for(const L of[-1,1]){const J=o([L*.7,0,0],q);a([L*.7,0,0],[1.4,.12,1.9],d,J),u([[0,-.08,-.8],[L*1.3,-.08,0],[0,-.08,.8]],.022,x,J),V.push(J)}const k=[];for(let L=0;L<3;L++)k.push(a([(L-1)*1.3,.09,0],[1.22,.025,1.65],M,q));const I=a([-1.4,.18,0],[.8,.22,1.3],s.mint,q),O=u([[0,.04,0],[0,1.65,0],[.15,1.86,0],[.4,1.8,0],[.4,1.6,0]],.055,x,q);O.visible=!1;const B=i.clone(!0);B.scale.setScalar(.4),B.position.set(-1.2,.96,1.8),m.add(B);const Q=[];for(let L=0;L<36;L++)Q.push(a([0,0,0],[.065,.22,.025],L%2?d:M,m));h("ЧАС ДОЖДЯ / БЕЗ ГРОМА",[0,-.05,3.05],3.4,.27,m,{size:44});const Y=o([-3.9,1.12,.1],t);g([0,0,0],.13,.018,x,Y,[Math.PI/2,0,0]);for(let L=0;L<3;L++)a([(L-1)*.09,-.2,0],[.035,.12,.015],d,Y);Y.visible=!1,p(E,[]),p(N,[]),P.forEach((L,J)=>p(L,A[J])),A.flat().forEach(L=>p(L,[])),V.forEach(L=>p(L,[])),p(Y,[]);let W=mc(),te=!1,j=!1;try{j=JSON.parse(localStorage.getItem("beznogim-dream10-v1")||"{}").trace===!0}catch{}Y.visible=j;function ce(){W=mc(),te=!0,t.visible=!1,m.visible=!0,y(0,0)}function le(){te=!1,t.visible=!0,m.visible=!1}function fe(L){if(!te)return;const J=Up(W,L);J!==W&&(W=J,f(220+L*70),y(0,0),_())}function U(){if(!te)return;const L=Op(W);L!==W&&(W=L,f(350),_())}function y(L,J){if(!te)return;const Z=W.phase;W=Fp(W,L);const w=ah(W);if(A.forEach((R,z)=>R.forEach((H,ne)=>H.rotation.z=W.folds[z]?ne===0?-.42:.42:0)),q.position.y=.55+w.lift,q.rotation.z=w.flip,V.forEach((R,z)=>R.rotation.z=(z===0?-1:1)*w.wing),k.forEach((R,z)=>{R.visible=W.water[z]>0&&W.open<.1,R.scale.z=Math.max(.001,W.water[z]),R.material.opacity=1}),I.scale.y=1-W.open*.8,O.visible=W.open>0,S.position.set(.4*w.reverse,w.clockY,-.65+2.65*w.reverse),S.rotation.x=w.clockTilt,S.rotation.y=Math.PI/4*(1-w.reverse),S.scale.setScalar(w.clockScale),v.rotation.z=-w.hand,T.forEach((R,z)=>{R.visible=W.phase!=="raining"||z>=Math.floor(W.progress*12)}),B.position.y=.96-W.open*.28,B.rotation.z=-W.open*.35,Q.forEach((R,z)=>{R.visible=W.phase==="raining"||W.open>0,R.position.set(...zp(W,z,J)),R.rotation.z=W.open>0?.25:Math.sin(J+z)*.25,R.scale.y=W.open>0?.6:1}),W.phase==="shelter"&&!j){j=!0,Y.visible=!0;try{localStorage.setItem("beznogim-dream10-v1",JSON.stringify({trace:!0}))}catch{}}Z!==W.phase&&_()}return{enter:ce,exit:le,fold:fe,act:U,update:y,busy:()=>gc(W),text:()=>W.phase==="shelter"?"Час уснул в кровати. Кровать стала зонтом; дождь идёт обратно в небо. Я пока останусь снизу.":W.phase==="turning"?"Вода уснула. Кровать выворачивается, час ложится на её место.":W.phase==="raining"?"Час выжимается в дождь. Согнутые листы наливают кровать; с плоских всё стекает мимо.":`Согни три листа желобами и пропусти час. Кровать выпила ${W.water.filter(L=>L===1).length} из 3 струй. Можно по одной, без спешки.`,button:()=>W.phase==="shelter"?"увидеть сон снова":gc(W)?"час проходит…":"дать часу пройти · 6 секунд",inspect:()=>({...W,active:te,trace:j,pose:ah(W),sheetAngles:A.map(L=>L.map(J=>J.rotation.z)),bed:q.position.toArray(),bedAngle:q.rotation.z,wingAngles:V.map(L=>L.rotation.z),clock:S.position.toArray(),clockScale:S.scale.x,clockAngles:[S.rotation.x,S.rotation.y],waterVisible:k.map(L=>L.visible),waterScale:k.map(L=>L.scale.z),handleVisible:O.visible,drops:Q.map(L=>L.position.toArray()),rootVisible:t.visible,roomVisible:m.visible,landmarks:[[-4.1,-.4,-3.4],[4.1,-.4,3.4],[0,5.8,-.7],[0,3.5,2.7]]})}}const Bp=[[1,1,3],[1,3,2],[0,2,1]],jo=9;function xs(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.turns)&&e.turns.length===3&&e.turns.every(c=>Number.isInteger(c)&&c>=0&&c<4),s=i?e.turns.slice():Bp[t].slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(jo,e.used)):0,o=s.every(c=>c===0),a=o&&e.tested===!0;return{round:t,turns:s,used:r,tested:a,phase:a?t===2?"complete":"won":o?"aligned":r===jo?"spent":"ready",run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1}}function Pd(n,e){if(!Number.isInteger(e)||e<0||e>2)return null;const t=n.slice();return t[e]=(t[e]+1)%4,t[(e+1)%3]=(t[(e+1)%3]+2)%4,t}function Gp(n,e,t){const i=xs(n);let s=!1;if(e==="reset"||e==="all")return{state:xs({round:e==="all"?0:i.round,run:i.run+(e==="all"?1:0)}),ok:!0};if(e==="next"&&i.phase==="won")return{state:xs({round:i.round+1,run:i.run}),ok:!0};if(e==="test"&&i.phase==="aligned"&&(i.tested=!0,s=!0),e==="turn"&&i.phase==="ready"){const r=Pd(i.turns,t);r&&(i.turns=r,i.used++,s=!0)}return{state:xs(i),ok:s}}function Vp(n){const e=xs(n);if(e.phase!=="ready")return[];const t=[{v:e.turns,path:[]}],i=new Set([e.turns.join()]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(r.every(a=>a===0))return o;if(!(o.length>=jo-e.used))for(let a=0;a<3;a++){const c=Pd(r,a),l=c.join();i.has(l)||(i.add(l),t.push({v:c,path:[...o,a]}))}}return null}function Hp(n){return n=Math.max(0,Math.min(1,Number(n)||0)),Math.sin(n*Math.PI)**2}function Wp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:g,changed:h,localPlay:p}){const f=s([-24,-1.1,-48],e);f.name="head-seams";const _=i("#405e62",{metalness:.55,roughness:.4}),m=i("#bd8757",{metalness:.6,roughness:.35}),d=i("#e9dfbb"),M=i("#233e40"),C=i("#93beb0"),x=i("#efa250",{emissive:"#c38535",emissiveIntensity:.3});r([0,-.25,.5],[7.8,.5,7.6],t.concrete,f),r([0,.04,0],[4.4,.18,3.7],M,f);const E=s([0,0,0],f),S=[],T=[],v=[];for(let y=0;y<3;y++){const L=2.95-y*.88,J=s([0,L,0],E);if(S.push(J),a([0,0,0],1.4,.8,[d,C,m][y],J),l([0,.35,0],1.4,.045,M,J),l([0,-.35,0],1.4,.045,M,J),r([0,0,1.4],[.16,.66,.07],d,J),y===0){for(let R of[-.5,.5])o([R,0,1.31],[.27,.23,.13],M,J),o([R+.025,.02,1.43],.075,d,J);o([0,.43,0],[1.15,.25,1.1],d,J)}if(y===1){r([0,-.06,1.52],[.36,.5,.4],d,J);for(let R of[-.5,.5])c([R-.2,-.23,1.35],[R+.2,-.23,1.35],.045,M,J)}if(y===2){for(let R of[-1,1])c([0,.12,1.43],[R*.7,.22,1.3],.09,M,J),c([R*.7,.22,1.3],[R*.9,.05,1.2],.06,M,J);r([0,-.13,1.39],[.55,.07,.07],M,J)}const Z=s([-2.6+y*2.6,.55,2.35],f);v.push(Z),a([0,-.15,0],.6,.18,_,Z);const w=l([0,.08,0],.38,.06,m,Z);w.rotation.x=Math.PI/2,c([0,-.3,0],[0,.4,0],.065,_,Z),o([0,.48,0],.14,x,Z),u(""+(y+1),[-2.6+y*2.6,.15,2.9],.55,.4,f,{size:80})}r([0,.2,1.95],[.13,.12,.7],x,f);const P=r([0,.2,1.7],[.38,.12,.38],x,f);P.rotation.y=Math.PI/4;const A=[];for(let y=0;y<3;y++){const L=s([-2.7+y*2.7,.3,3.55],f);a([0,-.1,0],.7,.15,_,L);const J=s([0,.18,0],L);for(let Z of[-.32,.32])c([Z,0,0],[Z,.65,0],.075,m,J);c([-.32,.65,0],[.32,.65,0],.075,m,J),A.push(J)}const N=[];for(let y of[1.61,2.49])for(let L of[-1,1]){const J=s([L*.85,y,1.2],E);c([0,-.28,0],[0,.28,0],.05,m,J),o([0,-.28,0],.085,_,J),o([0,.28,0],.085,_,J),N.push(J)}const q=u("НЕ ОШИБАЙСЯ",[0,4.22,-.3],3.5,.65,f,{size:48}),V=o([2.5,2.3,-.5],.19,x,f);c([2.5,.15,-.5],[2.5,2.3,-.5],.045,_,f),u("ШОВНАЯ",[0,.28,-3],3,.45,f,{size:52});const k=s([0,0,0],e);for(let y=0;y<17;y++)r([-24+Math.sin(y*.4)*.25,-1.48,-35.3-y*.53],[.75,.12,.37],t.cream,k);g(k,[]),g(f,[E,q,V,...v,...A]);let I;try{I=xs(JSON.parse(localStorage.getItem("beznogim-seams-v1")||"null"))}catch{I=xs()}let O=1,B=null,Q=null,Y="";S.forEach((y,L)=>{y.rotation.y=I.turns[L]*Math.PI/2,T[L]=y.rotation.y});const W=document.createElement("div");W.id="seams-controls",W.hidden=!0,W.innerHTML='<output id="seams-readout"></output><div class="seams-row">'+[0,1,2].map(y=>`<button data-seam="${y}">${y+1} ↻</button>`).join("")+'</div><div class="seams-row"><button id="seams-hint">намёк</button><button id="seams-reset">повтор</button><button id="seams-all">новая серия</button></div><output id="seams-notice" aria-live="polite"></output><details id="seams-help"><summary>как держится голова</summary><small>Ручка поворачивает своё кольцо на 90°, следующее на 180°: 1→2, 2→3, 3→1. Выстрой лицо по передней светлой метке за 9 ходов, затем испытай инструкцией. Все три числа должны стать 0. Намёк показывает кратчайший путь; отказ бесплатный. Повтор сохраняет прежние скобы. Локальная игра посетителя, не здоровье жителя.</small></details>',document.querySelector("#focus-object").before(W);const te=()=>{try{localStorage.setItem("beznogim-seams-v1",JSON.stringify(I))}catch{}},j=()=>O<1;function ce(){const y=(B==null?void 0:B.kind)==="test"&&j()?Hp(O):0;E.scale.set(1+y*.12,1+y*.08,1+y*.12),E.position.y=y*.08,(B==null?void 0:B.kind)==="turn"&&j()?S.forEach((J,Z)=>J.rotation.y=B.before[Z]+(T[Z]-B.before[Z])*(O*O*(3-2*O))):S.forEach((J,Z)=>J.rotation.y=T[Z]),q.scale.setScalar((B==null?void 0:B.kind)==="test"&&j()?1+y*.12:1),q.rotation.z=y*Math.sin(O*28)*.025;const L=I.tested||(B==null?void 0:B.kind)==="test";N.forEach(J=>J.visible=L),A.forEach((J,Z)=>J.visible=Z<I.round+(I.tested&&!j()?1:0)),V.material=I.phase==="aligned"||I.tested?C:x}function le(){W.querySelector("#seams-readout").textContent=`сборка ${I.round+1}/3 · ${I.used}/${jo} ходов
кольца: ${I.turns.join(" / ")} → 0 / 0 / 0`,W.querySelector("#seams-notice").textContent=j()?B.kind==="test"?"инструкция давит. скобы держат…":"кольца сцеплены…":Y,W.querySelectorAll("[data-seam]").forEach((y,L)=>{y.disabled=j()||I.phase!=="ready",y.classList.toggle("hinted",Q===L),y.setAttribute("aria-label",`ручка ${L+1}: своё кольцо +1, следующее +2`)}),W.querySelectorAll("#seams-hint,#seams-reset,#seams-all").forEach(y=>y.disabled=j()),ce()}function fe(y,L){if(j())return;p();const J=T.slice(),Z=Gp(I,y,L);return Z.ok?(I=Z.state,Q=null,B=null,y==="turn"?(T[L]+=Math.PI/2,T[(L+1)%3]+=Math.PI,B={kind:"turn",before:J},O=0):y==="test"?(B={kind:"test"},O=0):(O=1,S.forEach((w,R)=>T[R]=I.turns[R]*Math.PI/2)),Y=I.phase==="spent"?"Ходы кончились, швы ещё криво. Повтори сборку.":I.phase==="aligned"?"Лицо на месте. Теперь проверка инструкцией.":I.phase==="won"?"Выдержала. Скоба остаётся на полке.":I.phase==="complete"?"Три скобы. Голова пока цела.":"",te(),le(),h(),Z):(Y="Сначала совмести лицо. Ход не потрачен.",le(),h(),Z)}W.querySelectorAll("[data-seam]").forEach((y,L)=>y.onclick=()=>fe("turn",L)),W.querySelector("#seams-reset").onclick=()=>fe("reset"),W.querySelector("#seams-all").onclick=()=>fe("all"),W.querySelector("#seams-hint").onclick=()=>{if(j())return;const y=Vp(I);Q=(y==null?void 0:y[0])??null,Y=Q!==null?`Ручка ${Q+1}. До ровных швов ${y.length} ходов.`:I.phase==="ready"?"Оставшихся ходов не хватит. Повтори сборку.":I.phase==="aligned"?"Всё ровно. Испытай инструкцией.":"Сборка закончена.",le(),h()};function U(y){j()&&(O=Math.min(1,O+Math.max(0,Math.min(.1,y))/(B.kind==="test"?2.6:.7)),ce(),O===1&&(le(),h()))}return le(),te(),{house:f,controls:W,update:U,run:()=>fe(I.phase==="aligned"?"test":I.phase==="won"?"next":I.phase==="complete"?"all":I.phase==="spent"?"reset":"test"),card:()=>({action:j()?"стягивается…":I.phase==="aligned"?"испытать: «не ошибайся»":I.phase==="won"?"следующая сборка →":I.phase==="complete"?"новая серия ↺":I.phase==="spent"?"повторить сборку ↺":"сначала совмести кольца",disabled:j()||I.phase==="ready",description:"Три ручки сцеплены. Собери лицо; инструкция проверит швы."}),inspect:()=>({...I,progress:O,motion:B,hint:Q,notice:Y,angles:S.map(y=>y.rotation.y),scale:E.scale.toArray(),clamps:N.map(y=>y.visible),staples:A.map(y=>y.visible),landmarks:[[-27.3,-.9,-44.1],[-20.7,-.9,-44.1],[-24,3.7,-48.3],[-24,-.5,-51]]})}}const gs=[3,5,7,9],qp=[3,5,7,1],ea=16,ta=[[2,1,4,9],[3,4,1,8],[3,1,5,7]],Xp=["улитка","чайник","кит"],Ld=(n,e)=>n.every((t,i)=>t===e[i]);function ys(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.round)?Math.max(0,Math.min(2,e.round)):0,i=Array.isArray(e.volumes)&&e.volumes.length===4&&e.volumes.every((a,c)=>Number.isInteger(a)&&a>=0&&a<=gs[c])&&e.volumes.reduce((a,c)=>a+c,0)===16,s=i?e.volumes.slice():qp.slice(),r=i&&Number.isInteger(e.used)?Math.max(0,Math.min(ea,e.used)):0,o=Ld(s,ta[t])?t===2?"complete":"won":r>=ea?"spent":"ready";return{round:t,volumes:s,used:r,phase:o,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Id(n,e,t){if(!Number.isInteger(e)||!Number.isInteger(t)||e<0||e>3||t<0||t>3||e===t)return null;const i=Math.min(n[e],gs[t]-n[t]);if(i<=0)return null;const s=n.slice();return s[e]-=i,s[t]+=i,{volumes:s,amount:i}}function Yp(n,e,t,i){const s=ys(n);let r={ok:!1,reason:"locked"},o=null;if(e==="reset"||e==="all")return{state:ys({round:e==="all"?0:s.round,run:s.run+(e==="all"?1:0),seq:s.seq}),result:{ok:!0},pour:o};if(e==="next"&&s.phase==="won")return{state:ys({round:s.round+1,run:s.run,seq:s.seq}),result:{ok:!0},pour:o};if(e==="pour"&&s.phase==="ready"){const a=Id(s.volumes,t,i);if(!a)return{state:s,result:{ok:!1,reason:"empty"},pour:o};o={a:t,b:i,amount:a.amount,before:s.volumes.slice(),after:a.volumes.slice(),seq:s.seq+1},s.volumes=a.volumes,s.used++,s.seq++,r={ok:!0,amount:a.amount}}return{state:ys(s),result:r,pour:o}}function $p(n){const e=ys(n);if(e.phase!=="ready")return[];const t=[{v:e.volumes,path:[]}],i=new Set([e.volumes.join(",")]);for(let s=0;s<t.length;s++){const{v:r,path:o}=t[s];if(Ld(r,ta[e.round]))return o;if(!(o.length>=ea-e.used))for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=Id(r,a,c);if(!l)continue;const u=l.volumes.join(",");i.has(u)||(i.add(u),t.push({v:l.volumes,path:[...o,{a,b:c}]}))}}return null}function Jp(n,e,t){return t=Math.max(0,Math.min(1,Number(t)||0)),[-3+2*n+2*(e-n)*t,2.95+Math.sin(t*Math.PI)*1.15,0]}function Zp({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:g,changed:h,localPlay:p}){const f=s([24,-1.1,-24],e);f.name="cloud-still";const _=i("#45626b",{metalness:.55,roughness:.35}),m=i("#cf9671",{metalness:.6,roughness:.3}),d=i("#e6e5d2"),M=i("#8dd8d4",{emissive:"#8dd8d4",emissiveIntensity:.28}),C=i("#233f49");r([0,-.25,.6],[9.1,.5,7.4],t.concrete,f),r([0,.04,.1],[8.7,.12,3.3],C,f);function x(y,L,J=.6,Z=.5){const w=u(y,L,J,Z,f),R=w.material.map.image;R.width=R.height=128;const z=R.getContext("2d"),H=ne=>{z.fillStyle="#294c52",z.fillRect(0,0,128,128),z.strokeStyle="#e8d7ae",z.lineWidth=4,z.strokeRect(5,5,118,118),z.font="bold 76px monospace",z.fillStyle="#fff3ce",z.textAlign="center",z.textBaseline="middle",z.fillText(ne,64,68),w.material.map.needsUpdate=!0};return H(y),{o:w,draw:H}}const E=[],S=[],T=[];for(let y=0;y<4;y++){const L=-3+2*y,J=gs[y]*.26+.4;r([L,.23,0],[1.45,.36,1.25],_,f);for(let R of[-.5,.5])for(let z of[-.57,.57])c([L+z,.4,R],[L+z,J,R],.025,m,f);r([L,J,0],[1.3,.09,1.15],_,f),l([L,J+.12,0],.23,.04,m,f);for(let R=0;R<gs[y];R++)r([L-.73,.5+R*.26,.4],[.16,.025,.12],M,f);const Z=s([L,.4,0],f);for(let R=0;R<gs[y];R++){const z=s([0,.15+R*.26,0],Z);o([0,0,0],[.4,.17,.28],d,z),o([.2,.04,.12],.15,d,z),o([-.22,0,-.12],.14,M,z),S.push({o:z,i:y,n:R})}E.push(x(""+gs[y],[L,.3,1],.72,.65)),x(""+(y+1),[L,J+.4,0],.5,.45);const w=r([L,.05,.05],[1.7,.06,1.55],M,f);T.push(w)}const v=Array.from({length:16},(y,L)=>o([-3.75+L*.5,.14,1.8],.11,m,f));u("16 ЧАСОВ / ОБЛАКО",[0,.45,-2.7],4.8,.48,f,{size:42});const P=[];for(let y=0;y<3;y++){const L=s([-2.7+y*2.7,.6,3.15],f);a([0,-.2,0],.75,.2,_,L);const J=s([0,.2,0],L);if(P.push(J),y===0){o([0,.3,0],[.5,.43,.35],d,J),o([.45,.05,0],[.7,.17,.25],d,J),o([.96,.28,0],.15,M,J);for(const Z of[-.12,.12])c([.96,.32,Z],[1.02,.65,Z],.035,m,J)}if(y===1){o([0,.3,0],[.5,.4,.45],d,J),a([0,.72,0],.25,.1,M,J),o([0,.83,0],.09,m,J),c([-.3,.35,0],[-.8,.67,0],.15,d,J);const Z=l([.5,.4,0],.3,.08,M,J);Z.rotation.x=Math.PI/2}y===2&&(o([0,.3,0],[.8,.4,.35],d,J),o([-.7,.45,0],[.3,.12,.45],M,J),o([.5,.37,.29],.06,C,J),c([0,.6,0],[0,.95,0],.045,M,J),o([0,1,0],[.28,.08,.15],d,J))}const A=s([0,0,0],f),N=Array.from({length:7},()=>o([0,0,0],[.17,.13,.17],d,A)),q=s([0,0,0],e);for(let y=0;y<19;y++)r([7.8+y*.68,-1.48,-24+Math.sin(y*.33)*.3],[.48,.13,.85],t.cream,q);g(q,[]),g(f,[...S.map(y=>y.o),...E.map(y=>y.o),...T,...v,...P,A]);let V;try{V=ys(JSON.parse(localStorage.getItem("beznogim-still-v1")||"null"))}catch{V=ys()}let k=0,I=1,O=1,B=null,Q="",Y=null;const W=document.createElement("div");W.id="still-controls",W.hidden=!0,W.innerHTML='<output id="still-readout"></output><div class="still-row"><label>откуда<select id="still-from"></select></label><label>куда<select id="still-to"></select></label></div><div class="still-row"><button id="still-hint">намёк</button><button id="still-reset">повтор заказа</button><button id="still-all">новая серия</button></div><output id="still-notice" aria-live="polite"></output><details id="still-help"><summary>как переливать</summary><small>Перелив до пустого источника или полного приёмника = 1 игровой час. Совмести четыре числа с заказом за 16 часов. Отказ бесплатный. Прежние фигуры сохраняются при повторе заказа. Это твоя песочница: не ресурсы жителя и не настоящий рендер.</small></details>',document.querySelector("#focus-object").before(W);for(const y of W.querySelectorAll("select"))for(let L=0;L<4;L++)y.add(new Option("карта "+(L+1),""+L));W.querySelector("#still-to").value="1";const te=()=>{try{localStorage.setItem("beznogim-still-v1",JSON.stringify(V))}catch{}},j=()=>O<1;function ce(y=1){const L=j()?B.before.map((Z,w)=>Z+(B.after[w]-Z)*y):V.volumes;for(const Z of S){const w=Math.max(0,Math.min(1,L[Z.i]-Z.n));Z.o.visible=w>.01,Z.o.scale.setScalar(Math.max(.01,w))}A.visible=j(),N.forEach((Z,w)=>{const R=Math.max(0,Math.min(1,y*1.65-w*.09));Z.visible=j()&&R>0&&R<1,Z.position.set(...Jp((B==null?void 0:B.a)||0,(B==null?void 0:B.b)||0,R))});const J=V.round+(V.phase==="won"||V.phase==="complete"?1:0)-(j()&&(V.phase==="won"||V.phase==="complete")?1:0);P.forEach((Z,w)=>Z.visible=w<J),v.forEach((Z,w)=>Z.material=w<V.used?C:m),T.forEach((Z,w)=>{Z.visible=w===k||w===I,Z.material=w===k?m:M})}function le(){W.querySelector("#still-readout").textContent=`заказ ${V.round+1}/3 · ${Xp[V.round]} · ${V.used}/${ea} ч
есть: ${V.volumes.join(" / ")}
надо: ${ta[V.round].join(" / ")}`,W.querySelector("#still-notice").textContent=j()?"облако переливается…":Q,W.querySelectorAll("select").forEach(y=>y.disabled=j()||V.phase!=="ready"),W.querySelectorAll("button").forEach(y=>y.disabled=j()),E.forEach((y,L)=>y.draw(""+V.volumes[L]));for(const y of W.querySelectorAll("select"))for(let L=0;L<4;L++)y.options[L].textContent=`${L+1}: ${V.volumes[L]}/${gs[L]}`;ce(j()?0:1)}function fe(y){if(j())return;p(),Y=null;const L=Yp(V,y,k,I);return V=L.state,B=L.pour,O=B?0:1,Q=L.result.ok?V.phase==="spent"?"Шестнадцать часов ушли. Облако ещё не то; повтори заказ.":V.phase==="complete"?"Три облака готовы. Кит никуда не торопится.":V.phase==="won"?"Облако собрано. Следующий заказ?":"":"Нечего переливать. Выбери другую пару; час не потрачен.",te(),le(),h(),L}W.querySelector("#still-from").onchange=y=>{k=+y.target.value,ce(),h()},W.querySelector("#still-to").onchange=y=>{I=+y.target.value,ce(),h()},W.querySelector("#still-reset").onclick=()=>fe("reset"),W.querySelector("#still-all").onclick=()=>fe("all"),W.querySelector("#still-hint").onclick=()=>{if(j())return;const y=$p(V);Y=(y==null?void 0:y[0])||null,Y?(k=Y.a,I=Y.b,W.querySelector("#still-from").value=""+k,W.querySelector("#still-to").value=""+I,Q=`Перелей ${k+1} → ${I+1}. До заказа ${y.length} переливов.`):Q=V.phase==="ready"?"Часов на этот путь уже не хватит. Повтори заказ.":"Этот заказ окончен.",le(),h()};function U(y,L){j()&&(O=Math.min(1,O+Math.max(0,Math.min(.1,y))/1.65),ce(O),O===1&&(le(),h())),P.forEach((J,Z)=>{J.position.y=.2+Math.sin(L*.7+Z)*.07})}return le(),te(),{house:f,controls:W,update:U,run:()=>fe(V.phase==="ready"?"pour":V.phase==="won"?"next":V.phase==="complete"?"all":"reset"),card:()=>({action:j()?"облако в трубе…":V.phase==="ready"?`перелить ${k+1} → ${I+1}`:V.phase==="won"?"следующий заказ →":V.phase==="complete"?"новая серия ↺":"повторить заказ ↺",disabled:j(),description:"Выбери две карты и перелей до края. Собери три облачные фигуры за шестнадцать игровых часов."}),inspect:()=>({...V,a:k,b:I,progress:O,pour:B,hint:Y,notice:Q,goal:ta[V.round],trophies:P.map(y=>y.visible),puffs:S.map(y=>({visible:y.o.visible,scale:y.o.scale.x})),flow:N.map(y=>y.position.toArray()),landmarks:[[20,-.9,-22],[28,-.9,-22],[24,3.2,-24],[24,.8,-20.2]]})}}const $n=[[0,3,1],[1,2,0,3],[3,0,2,1,3]],Ir=[1,1,2],_c=n=>n===1?1:0;function Zs(n){const e=n&&typeof n=="object"?n:{},t=Number.isInteger(e.wave)?Math.max(0,Math.min(2,e.wave)):0,i=Number.isInteger(e.cursor)?Math.max(0,Math.min($n[t].length,e.cursor)):0,s=e.phase==="complete"&&t===2&&i===5?"complete":i===$n[t].length?"rounddone":e.phase==="spilled"?"spilled":"ready";return{wave:t,cursor:i,phase:s,switches:Array.from({length:3},(r,o)=>{var a;return _c((a=e.switches)==null?void 0:a[o])}),used:Number.isInteger(e.used)?Math.max(0,Math.min(Ir[t],e.used)):0,run:Number.isSafeInteger(e.run)?Math.max(1,Math.min(999999,e.run)):1,seq:Number.isSafeInteger(e.seq)?Math.max(0,Math.min(999999,e.seq)):0}}function Dr(n){const e=_c(n[0]);return{bay:2*e+_c(n[e+1]),side:e}}function Kp(n){const e=n.slice(),t=Dr(e).side;return e[0]^=1,e[t+1]^=1,e}function Pl(n){return $n.slice(0,n.wave).reduce((e,t)=>e+t.length,0)+n.cursor}function Dd(n,e,t){const i=Zs(n);let s={ok:!1,reason:"locked"},r=null;if(e==="restart"||e==="all")return{state:Zs({wave:e==="all"?0:i.wave,run:i.run+(e==="all"?1:0),seq:i.seq}),result:{ok:!0},shot:r};if(e==="next"&&i.phase==="rounddone"&&i.wave<2)return{state:Zs({wave:i.wave+1,seq:i.seq,run:i.run}),result:{ok:!0},shot:r};if(i.phase==="ready"&&(e==="flip"&&Number.isInteger(t)&&t>=0&&t<3&&(i.used<Ir[i.wave]?(i.switches[t]^=1,i.used++,s={ok:!0}):s={ok:!1,reason:"budget"}),e==="release")){const{bay:o,side:a}=Dr(i.switches),c=$n[i.wave][i.cursor];r={seq:++i.seq,bay:o,side:a,target:c,success:o===c,before:i.switches.slice()},i.switches=Kp(i.switches),s={ok:!0,bay:o,target:c,success:r.success},r.success?(i.cursor++,i.cursor===$n[i.wave].length&&(i.phase=i.wave===2?"complete":"rounddone")):i.phase="spilled"}return{state:i,result:s,shot:r}}function Qp(n){const e=Zs(n);if(e.phase!=="ready")return[];const t=[{s:e,path:[],cost:0}],i=new Set;for(;t.length;){t.sort((a,c)=>a.cost-c.cost||a.path.length-c.path.length);const s=t.shift(),r=s.s,o=[r.cursor,r.used,...r.switches].join(":");if(!i.has(o)){if(i.add(o),r.phase==="rounddone"||r.phase==="complete")return s.path;for(const[a,c]of[["release",null],["flip",0],["flip",1],["flip",2]]){const l=Dd(r,a,c);!l.result.ok||l.state.phase==="spilled"||t.push({s:l.state,path:[...s.path,{action:a,index:c}],cost:s.cost+(a==="flip"?1:0)})}}}return null}function jp(n,e){e=Math.max(0,Math.min(1,Number(e)||0));const t=[-2.8,-.9,.9,2.8][(n==null?void 0:n.bay)||0],i=n!=null&&n.side?1:-1,s=[[0,1.4,-2.5],[0,1.2,-1.4],[i*1.5,.8,0],[t,.4,2],n!=null&&n.success?[t,.4,2]:[4,-.15,2.5]];if(e===1)return s[n!=null&&n.success?3:4].slice();const r=n!=null&&n.success?3:4,o=e*r,a=Math.min(r-1,Math.floor(o)),c=o-a;return s[a].map((l,u)=>l+(s[a+1][u]-l)*c+(u===1&&a===3?.5*Math.sin(c*Math.PI):0))}function em({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:g,changed:h,localPlay:p}){const f=s([-23,-1.1,-32],e);f.name="backup-fork";const _=i("#263f46"),m=i("#c5ccbe",{metalness:.65,roughness:.3}),d=i("#e4bc77"),M=["#e8b86c","#98cfbc","#bfabc9","#98bde0"].map(U=>i(U,{emissive:U,emissiveIntensity:.5}));r([.5,-.27,0],[9,.4,6.5],t.concrete,f),r([0,-.01,0],[6.6,.1,5.8],_,f);for(const U of[-2.8,2.8])for(const y of[-2.4,2.4])r([U,-.6,y],[.14,1.2,.14],t.metal,f);function C(U,y,L,J,Z){const w=u(U,y,L,J,Z),R=w.material.map.image;R.width=R.height=128;const z=R.getContext("2d");return z.fillStyle="#29464b",z.fillRect(0,0,128,128),z.strokeStyle="#e4dfc8",z.lineWidth=3,z.strokeRect(5,5,118,118),z.fillStyle="#fff1c9",z.font="bold 90px monospace",z.textAlign="center",z.textBaseline="middle",z.fillText(U,64,68),w.material.map.needsUpdate=!0,w}const x=[[0,1.2,-1.4],[-1.5,.8,0],[1.5,.8,0]],E=[-2.8,-.9,.9,2.8],S=(U,y)=>{c(U,y,.075,m,f);for(const L of[-.14,.14])c([U[0]+L,U[1]+.08,U[2]],[y[0]+L,y[1]+.08,y[2]],.025,t.copper,f)};S([0,1.4,-2.5],x[0]);for(let U=0;U<2;U++){S(x[0],x[U+1]);for(let y=0;y<2;y++)S(x[U+1],[E[U*2+y],.4,2])}const T=x.map((U,y)=>{const L=s(U,f);a([0,0,0],.24,.13,t.copper,L);const J=s([0,.13,0],L);return c([0,0,0],[0,.07,.66],.055,d,J),o([0,.07,.66],.14,m,J),C(["А","Б","В"][y],[.48,.38,-.08],.55,.5,L),J}),v=E.map((U,y)=>(a([U,.15,2],.29,.32,t.copper,f),l([U,.37,2],.27,.04,M[y],f),C(String(y+1),[U,.74,2.65],.7,.65,f),o([U,.49,2],[.16,.2,.16],M[y],f))),P=E.map((U,y)=>{const L=s([U,.22,2],f);return r([0,0,0],[.66,.06,.7],M[y],L),L}),A=o([0,1.57,-2.5],.18,M[0],f),N=o([0,1.57,-2.5],.18,M[0],f),q=s([4,-.3,2.5],f);a([0,0,0],.4,.55,_,q),l([0,.28,0],.4,.045,m,q);const V=o([0,.21,0],.18,d,q);r([3.9,.05,-.7],[1.25,.15,3.1],t.copper,f);const k=Array.from({length:12},(U,y)=>{const L=s([3.6+y%2*.57,.18,-1.9+Math.floor(y/2)*.48],f);return a([0,0,0],.12,.14,_,L),o([0,.16,0],.13,M[$n.flat()[y]],L)});u("ВИЛКА / РЕЗЕРВ",[0,.55,-2.9],3.8,.4,f,{size:42});for(let U=0;U<4;U++)r([-25,-1.42,-28.7-U*.62],[.7,.1,.44],t.cream,e);g(f,[...T.map(U=>U.parent),...v,...P,A,N,q,...k]);let I;try{I=Zs(JSON.parse(localStorage.getItem("beznogim-fork-v1")||"null"))}catch{I=Zs()}let O=null,B=1,Q="",Y=null;const W=document.createElement("div");W.id="fork-controls",W.hidden=!0,W.innerHTML='<output id="fork-readout"></output><div class="fork-switches">'+["А","Б","В"].map((U,y)=>`<button id="fork-flip-${y}" aria-label="Переключить развилку ${U}">${U} ←</button>`).join("")+'</div><div class="fork-tools"><button id="fork-hint">намёк</button><button id="fork-reset">повторить волну</button><button id="fork-all">всё заново</button></div><output id="fork-notice" aria-live="polite"></output><small>Лампочка должна попасть в гнездо с её номером. Обе пройденные развилки сами меняют сторону после посадки. Ручные щелчки ограничены на всю волну. Промах - в ведро; повтор волны сохраняет прежние волны. Это твоя локальная игра, не резервная копия жителя.</small>',document.querySelector("#focus-object").before(W);function te(){try{localStorage.setItem("beznogim-fork-v1",JSON.stringify(I))}catch{}}const j=()=>B<1;function ce(){const U=$n[I.wave].slice(I.cursor).map(J=>J+1).join(" → ")||"всё на месте";W.querySelector("#fork-readout").textContent=`волна ${I.wave+1}/3 · сохранено ${Pl(I)}/12
очередь: ${U}
ручные щелчки ${I.used}/${Ir[I.wave]} · путь сейчас → ${Dr(I.switches).bay+1}`,W.querySelector("#fork-notice").textContent=j()?"катится…":Q;const y=j()&&O?O.before:I.switches;T.forEach((J,Z)=>{J.rotation.y=(y[Z]?1:-1)*.68;const w=W.querySelector("#fork-flip-"+Z);w.textContent=["А","Б","В"][Z]+(I.switches[Z]?" →":" ←"),w.setAttribute("aria-pressed",String(!!I.switches[Z])),w.disabled=j()||I.phase!=="ready"||I.used>=Ir[I.wave],w.classList.toggle("hinted",(Y==null?void 0:Y.action)==="flip"&&Y.index===Z)});for(const J of W.querySelectorAll(".fork-tools button"))J.disabled=j();A.visible=I.phase==="ready"&&!j(),A.material=M[$n[I.wave][I.cursor]||0];const L=I.cursor-(j()&&(O!=null&&O.success)?1:0);v.forEach((J,Z)=>J.visible=$n[I.wave].slice(0,L).includes(Z)),P.forEach((J,Z)=>J.visible=Dr(y).bay===Z),k.forEach((J,Z)=>J.visible=Z<Pl(I)-(j()&&(O!=null&&O.success)?1:0)),V.visible=I.phase==="spilled"&&!j(),V.material=M[$n[I.wave][I.cursor]||0],N.visible=j()}function le(U,y){if(j())return;p(),Y=null;const L=Dd(I,U,y);return I=L.state,O=L.shot,B=O?0:1,Q=L.result.reason==="budget"?"Ручные щелчки кончились. Можно повторить волну.":I.phase==="spilled"?"Не то гнездо. Лампочка в ведре; повтори эту волну.":I.phase==="rounddone"?"Волна сохранена. Дальше очередь другая.":I.phase==="complete"?"Все двенадцать на полке. Вилка сработала.":"",te(),ce(),h(),L}["А","Б","В"].forEach((U,y)=>W.querySelector("#fork-flip-"+y).onclick=()=>le("flip",y)),W.querySelector("#fork-reset").onclick=()=>le("restart"),W.querySelector("#fork-all").onclick=()=>le("all"),W.querySelector("#fork-hint").onclick=()=>{if(j())return;const U=Qp(I);Y=(U==null?void 0:U[0])||null,Q=Y?Y.action==="release"?"Сейчас можно отпустить лампочку.":`Щёлкни развилку ${["А","Б","В"][Y.index]}.`:I.phase==="ready"?"С этими щелчками уже не сохранить волну. Повтори её.":"Эта волна закончилась.",ce(),h()};function fe(U){if(!j())return;const y=B;B=Math.min(1,B+Math.min(.1,Math.max(0,U))/2.8),N.position.set(...jp(O,B)),N.position.y+=.17,N.material=M[O.target],B===1&&y<1&&(ce(),h())}return ce(),te(),{house:f,controls:W,update:fe,run:()=>le(I.phase==="complete"?"all":I.phase==="rounddone"?"next":I.phase==="spilled"?"restart":"release"),card:()=>({action:j()?"лампочка катится…":I.phase==="complete"?"новая серия ↺":I.phase==="rounddone"?"следующая волна →":I.phase==="spilled"?"повторить волну ↺":"отпустить лампочку",disabled:j(),description:"Вилка сохраняет свет. Три развилки, четыре гнезда. Сначала щёлкни намёк или попробуй сам."}),inspect:()=>({...I,saved:Pl(I),queue:$n[I.wave],limit:Ir[I.wave],path:Dr(I.switches).bay,progress:B,shot:O,notice:Q,hinted:Y,rolling:N.position.toArray(),archive:k.map(U=>U.visible),landmarks:[[-25.8,-.7,-30],[-20.2,-.7,-30],[-23,.3,-34.5]]})}}function tm(n,e){if(!n)return{x:0,y:0};const t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));if(n.outcome!=="bumped")return{x:n.range*t,y:4*n.apex*t*(1-t)};const i=n.end/n.range,s=4*n.apex*i*(1-i);if(t<.65){const o=t/.65*i;return{x:n.range*o,y:4*n.apex*o*(1-o)}}const r=(t-.65)/.35;return{x:n.end*(1-r),y:s*(1-r)+Math.sin(r*Math.PI)*.5}}function lh(n){const e=n.state||{},t=(l,u,g,h)=>Number.isFinite(l)?Math.max(u,Math.min(g,Math.floor(l))):h,i=[{gap:6,barrier:1},{gap:8,barrier:3},{gap:6,barrier:6}],s=l=>l&&typeof l=="object"?{seq:t(l.seq,1,999999,1),range:t(l.range,1,18,3),apex:Number.isFinite(l.apex)?Math.max(.5,Math.min(9,l.apex)):.5,end:Number.isFinite(l.end)?Math.max(0,Math.min(18,l.end)):0,outcome:["landed","short","far","bumped"].includes(l.outcome)?l.outcome:"short"}:null,r={run:t(e.run,1,999999,1),stage:t(e.stage,0,2,0),power:t(e.power,1,6,1),angle:t(e.angle,1,3,3),air:t(e.air,0,6,6),landed:t(e.landed,0,3,0),attempts:t(e.attempts,0,99999,0),seq:t(e.seq,0,999999,0),phase:["ready","short","far","bumped","landed","complete"].includes(e.phase)?e.phase:"ready",flight:s(e.flight)};r.landed===3&&(r.phase="complete");let o=null;if(n.mode==="action"){const l=n.args||{};if(n.tool==="launch"&&l.mode==="restart")Object.assign(r,{run:Math.min(999999,r.run+1),stage:0,power:1,angle:3,air:6,landed:0,attempts:0,phase:"ready",flight:null}),o={ok:!0};else if(n.tool==="launch"&&l.mode==="next")r.phase!=="landed"?o={ok:!1,reason:"not_landed"}:(r.stage=Math.min(2,r.stage+1),r.phase="ready",r.flight=null,o={ok:!0,stage:r.stage+1});else if(["landed","complete"].includes(r.phase))o={ok:!1,reason:"already_landed"};else if(n.tool==="pump")!Number.isInteger(l.power)||l.power<1||l.power>6||!Number.isInteger(l.angle)||l.angle<1||l.angle>3?o={ok:!1,reason:"invalid_setting"}:(r.power=l.power,r.angle=l.angle,r.air=6,r.phase="ready",r.flight=null,o={ok:!0,air:6});else if(n.tool==="launch"&&l.mode==="jump")if(r.air<r.power)o={ok:!1,reason:"empty",air:r.air};else{r.air-=r.power,r.attempts=Math.min(99999,r.attempts+1),r.seq=Math.min(999999,r.seq+1);const u=i[r.stage],g=r.power*(4-r.angle),h=r.power*r.angle/2,p=u.gap/2/g,f=p<=1?4*h*p*(1-p):0,_=p<=1&&f<u.barrier?"bumped":g<u.gap?"short":g>u.gap?"far":"landed";r.flight={seq:r.seq,range:g,apex:h,end:_==="bumped"?u.gap/2:g,outcome:_},r.phase=_,_==="landed"&&(r.landed=Math.max(r.landed,r.stage+1),r.landed===3&&(r.phase="complete")),o={ok:_==="landed",outcome:_,range:g,apex:h,clearance:f,air:r.air,landed:r.landed}}else o={ok:!1,reason:"unknown_action"}}const a=i[r.stage],c={ready:"Машина остаётся дома. Перепрыгни пробку гаражом и попади точно на площадку.",short:"Не долетел. Гараж на мягком коврике. Насос возвращает его на старт.",far:"Перелетел площадку. Гараж на мягком коврике. Попробуй другой наклон.",bumped:"Задел пробку. Пружинный упор вернул гараж. Нужно выше.",landed:"Гараж на площадке. Машина никуда не поехала. Открывай следующее испытание.",complete:"Три гаражных космонавта на полке. Допуска на дорогу всё ещё нет."};return{state:r,public:{...r,level:r.stage+1,...a,range:r.power*(4-r.angle),apex:r.power*r.angle/2,message:c[r.phase]},result:o,seconds:n.tool==="pump"?35:45,label:n.tool==="pump"?"накачивает гараж":"испытывает прыгающий гараж"}}function nm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:g,watching:h,localPlay:p}){var z,H,ne;const f=s([-24,-1.5,-24],e);f.name="pneumatic-garage-range";const _=i("#eee0b7"),m=i("#29464b"),d=i("#d87b4d"),M=i("#94b9a0"),C=i("#a84a3b");r([0,-.1,0],[21,.6,10],t.concrete,f),r([0,.24,0],[20,.1,5],m,f);for(let F=-9;F<10;F++)r([F,.31,2],[.55,.03,.06],_,f);const x=s([-8,.45,0],f);x.name="car-stays-home",r([0,.21,0],[1.1,.3,.62],C,x),r([-.07,.47,0],[.58,.27,.54],_,x);for(const F of[-.35,.35])for(const ee of[-.35,.35])o([F,.04,ee],[.16,.16,.1],m,x);const E=s([-8,.37,0],f);E.name="flying-garage";for(const F of[-.9,.9])r([F,.74,0],[.12,1.5,1.6],M,E);r([0,.74,-.75],[1.8,1.5,.12],M,E),r([0,1.35,.76],[1.7,.27,.12],_,E);for(const F of[-1,1]){const ee=r([F*.49,1.69,0],[1.16,.13,1.95],d,E);ee.rotation.z=F*-.32}l("Г",[0,1.4,.86],.42,.29,E,{size:70});const S=[];for(const F of[-.74,.74])for(const ee of[-.59,.59])a([F,-.04,ee],.15,.23,t.metal,E),S.push(r([F,-.32,ee],[.12,.5,.12],_,E));const T=s([0,.35,0],f);r([0,0,0],[2.5,.12,2.2],_,T),r([0,.07,0],[1.95,.035,1.65],M,T),l("ПОСАДКА",[0,.24,1.18],2.2,.3,T,{size:50});const v=s([0,.34,0],f),P=r([0,.5,0],[.32,1,2.1],d,v);for(const F of[-1.2,1.2])c([0,0,F],[0,3.4,F],.04,t.metal,v);const A=l("ПРОБКА",[0,.7,1.3],1.5,.3,v,{size:50}),N=s([0,.33,0],f);r([0,0,0],[1.6,.12,2],t.copper,N);for(let F=0;F<5;F++)r([0,.1+F*.12,0],[1.1,.04,1.4],_,N);const q=s([-8,.6,3.4],f);a([0,.65,0],.4,1.3,t.copper,q),c([0,1.3,0],[0,1.8,0],.07,m,q),c([-.5,1.8,0],[.5,1.8,0],.07,m,q);const V=Array.from({length:6},(F,ee)=>r([.7,.14+ee*.24,0],[.24,.17,.12],M,q)),k=s([3,.6,3.7],f);r([0,0,0],[3.8,.2,.9],t.copper,k);const I=Array.from({length:3},(F,ee)=>{const ie=s([-1.1+ee*1.1,.2,0],k);return r([0,.1,0],[.65,.2,.55],m,ie),o([0,.56,0],[.3,.34,.27],_,ie),r([0,.57,.22],[.39,.19,.08],m,ie),ie});l("ДОПУСКА НЕТ",[0,.8,-3.9],4,.5,f,{size:55}),l("МАШИНА ДОМА",[-8,.9,2],2.8,.32,f,{size:50});for(let F=0;F<21;F++)r([-24,-1.42,-6-F*.65],[.9,.12,.49],t.cream,e);u(E,S),u(f,[x,E,T,v,N,q,k]);let O=null,B=((ne=(H=(z=window.__beznogimState)==null?void 0:z.mechanics)==null?void 0:H.garage)==null?void 0:ne.public)||null,Q,Y="",W="",te=null,j=1,ce="";try{O=JSON.parse(localStorage.getItem("beznogim-garage-v1")||"null")}catch{}function le(F,ee,ie={}){const $=lh({mode:F,tool:ee,args:ie,state:O});O=$.state;try{localStorage.setItem("beznogim-garage-v1",JSON.stringify(O))}catch{}return $}le("migrate");const fe=document.createElement("div");fe.id="garage-controls",fe.hidden=!0,fe.innerHTML='<output id="garage-readout"></output><div class="dash-row"><label>импульс<select id="garage-power" aria-label="Импульс гаража">'+[1,2,3,4,5,6].map(F=>`<option>${F}</option>`).join("")+'</select></label><label>сопло<select id="garage-angle" aria-label="Наклон сопла">'+[1,2,3].map(F=>`<option>${F}</option>`).join("")+'</select></label><button id="garage-pump">накачать</button><button id="garage-reset">заново ↺</button></div><small>Дальность = импульс × (4 − сопло). Вершина = импульс × сопло / 2. Пробка стоит на середине пролёта. Нужна точная посадка. Это настольная условность, не физика машины.</small><output id="garage-notice" aria-live="polite"></output>',document.querySelector("#focus-object").before(fe);const U=()=>B&&h()?B:lh({mode:"migrate",state:O}).public,y=()=>B&&h()?"resident":"sandbox";function L(F,ee){var $;if(j<1)return;p();const ie=le("action",F,ee);return ce=(($=ie.result)==null?void 0:$.reason)==="empty"?"Баллон пуст для этого импульса. Накачай снова.":"",w(0),g(),ie}fe.querySelector("#garage-pump").onclick=()=>L("pump",{power:Number(fe.querySelector("#garage-power").value),angle:Number(fe.querySelector("#garage-angle").value)}),fe.querySelector("#garage-reset").onclick=()=>L("launch",{mode:"restart"});function J(){if(!Q)return;const F=Q;fe.querySelector("#garage-readout").textContent=`испытание ${F.level}/3 · пролёт ${F.gap} · пробка ${F.barrier}
воздух ${F.air}/6 · дальность ${F.range} · вершина ${F.apex}
посадки ${F.landed}/3 · попытки ${F.attempts}`,fe.querySelector("#garage-notice").textContent=ce;for(const ee of fe.querySelectorAll("select,#garage-pump"))ee.disabled=j<1||["landed","complete"].includes(F.phase);fe.querySelector("#garage-reset").disabled=j<1}function Z(F){const ee=!Q||W!==y()||Q.run!==F.run;W=y(),ee?(te=F.flight,j=1,ce=""):F.flight&&(!Q.flight||Q.flight.seq!==F.flight.seq)?(te=F.flight,j=0):F.flight||(te=null,j=1),Q=F,fe.querySelector("#garage-power").value=F.power,fe.querySelector("#garage-angle").value=F.angle,T.position.x=-8+F.gap*.7,v.position.x=-8+F.gap*.35,P.scale.y=F.barrier*.5,P.position.y=F.barrier*.25,A.position.y=F.barrier*.5+.4,I.forEach((ie,$)=>ie.visible=$<F.landed),V.forEach((ie,$)=>ie.visible=$<F.air),J()}function w(F){F=Math.min(.1,Math.max(0,F));const ee=U(),ie=y()+":"+JSON.stringify(ee);ie!==Y&&(Y=ie,Z(ee),g());const $=j;j=Math.min(1,j+F/3.6);const{x:ae,y:ye}=tm(te,j);E.position.set(-8+ae*.7,.37+ye*.5,0),E.rotation.z=j<1?Math.sin(j*Math.PI*2)*.045:0,N.visible=!!te&&["short","far"].includes(te.outcome),N.position.x=-8+((te==null?void 0:te.range)||0)*.7,S.forEach(be=>be.visible=j>0&&j<.65),$<1&&j===1&&(J(),g())}const R=()=>({action:y()==="resident"?"попробовать свой гараж":j<1?"гараж в воздухе…":Q.phase==="complete"?"новая серия ↺":Q.phase==="landed"?"следующее испытание →":"прыгнуть гаражом",description:(y()==="resident"?"Полигон жителя. Здесь можно открыть свою отдельную партию. ":"Твой полигон. ")+Q.message,disabled:j<1});return window.addEventListener("beznogim:state",({detail:F})=>{var ie,$;const ee=($=(ie=F.mechanics)==null?void 0:ie.garage)==null?void 0:$.public;ee&&(B=ee)}),Z(U()),Y=y()+":"+JSON.stringify(U()),w(0),{house:f,controls:fe,update:w,card:R,run:()=>L("launch",{mode:Q.phase==="complete"?"restart":Q.phase==="landed"?"next":"jump"}),inspect:()=>({source:y(),...Q,progress:j,notice:ce,garage:E.position.toArray(),car:x.position.toArray(),trophies:I.map(F=>F.visible)})}}const Tr=[{rocks:[2,6,13,15],start:[20,24],goals:[1,3]},{rocks:[0,4,7,9,16],start:[20,24],goals:[1,3]},{rocks:[2,4,5,14,15,19],start:[20,24],goals:[1,3]}];function Ll(n){const e=n.state||{},t=(u,g,h,p)=>Number.isFinite(u)?Math.max(g,Math.min(h,Math.floor(u))):p,i=t(e.planted,0,3,0),s=Math.min(2,i),r=Tr[s];let o=Array.isArray(e.positions)&&e.positions.length===2?e.positions.slice():r.start.slice();(o.some(u=>!Number.isInteger(u)||u<0||u>24||r.rocks.includes(u))||o[0]===o[1])&&(o=r.start.slice());const a={run:t(e.run,1,999999,1),planted:i,positions:o,moves:t(e.moves,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,220):"Две ёлочки на льду. Доведи « и » до своих светлых проёмов."};let c=null;if(n.mode==="action"){const u=n.args||{};if(n.tool==="restart"&&u.scope==="pair")a.positions=r.start.slice(),a.message="Эта пара вернулась на старт. Посаженные ели остались.",c={ok:!0};else if(n.tool==="restart"&&u.scope!==void 0&&u.scope!=="all")c={ok:!1,reason:"invalid_arguments"};else if(n.tool==="restart")Object.assign(a,{run:Math.min(999999,a.run+1),planted:0,positions:Tr[0].start.slice(),moves:0,message:"Снова две кавычки. Лёд скользкий, камни остаются на месте."}),c={ok:!0};else if(n.tool==="hint")c=im(a);else if(!["slide","plant"].includes(n.tool))c={ok:!1,reason:"unknown_tool"};else if(a.planted===3)c={ok:!1,reason:"complete"};else if(n.tool==="slide"){const g={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};if(![0,1].includes(u.piece)||!Object.hasOwn(g,u.direction))c={ok:!1,reason:"invalid_arguments"};else{const[h,p]=g[u.direction],f=a.positions[u.piece];let _=f%5,m=Math.floor(f/5);for(;_+h>=0&&_+h<5&&m+p>=0&&m+p<5&&!r.rocks.includes((m+p)*5+_+h)&&(m+p)*5+_+h!==a.positions[1-u.piece];)_+=h,m+=p;const d=m*5+_;a.positions[u.piece]=d,d!==f?(a.moves=Math.min(99999,a.moves+1),a.message="Скользит до упора. Другая кавычка тоже может быть упором."):a.message="Упёрлась. Можно сдвинуть другую кавычку.",c={ok:d!==f,from:f,to:d,reason:d===f?"blocked":"slid"}}}else a.positions.some((g,h)=>g!==r.goals[h])?(a.message="Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.",c={ok:!1,reason:"not_aligned"}):(a.planted++,a.positions=Tr[Math.min(2,a.planted)].start.slice(),a.message=a.planted===3?"Шесть ёлок за воротами. Опять пролезли.":"Пара пролезла и укоренилась. На льду другая расстановка камней.",c={ok:!0,trees:a.planted*2})}const l=Tr[Math.min(2,a.planted)];return{state:a,public:{...a,level:Math.min(3,a.planted+1),phase:a.planted===3?"complete":"sliding",trees:a.planted*2,rocks:l.rocks,goals:l.goals,size:5},result:c,seconds:n.tool==="hint"?5:n.tool==="plant"?40:15,label:n.tool==="hint"?"ищет путь для кавычек":n.tool==="plant"?"выпускает кавычки в питомник":"двигает ёлочки по льду"}}function im(n){if(n.planted===3)return{ok:!0,status:"complete",remaining:0,next:null};const e=Tr[n.planted],t=[[n.positions,[]]],i=new Set([n.positions.join(",")]),s={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};for(let r=0;r<t.length;r++){const[o,a]=t[r];if(o.every((c,l)=>c===e.goals[l]))return{ok:!0,status:a.length?"route":"aligned",remaining:a.length,next:a[0]||null};for(let c=0;c<2;c++)for(const[l,[u,g]]of Object.entries(s)){let h=o[c]%5,p=Math.floor(o[c]/5);for(;h+u>=0&&h+u<5&&p+g>=0&&p+g<5&&!e.rocks.includes((p+g)*5+h+u)&&(p+g)*5+h+u!==o[1-c];)h+=u,p+=g;const f=o.slice();f[c]=p*5+h;const _=f.join(",");i.has(_)||(i.add(_),t.push([f,[...a,{piece:c,direction:l}]]))}}return{ok:!1,status:"stuck",remaining:null,next:null,advice:"restart scope=pair preserves planted trees"}}function sm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,sign:l,batchStatic:u,changed:g,watching:h,localPlay:p}){var w,R,z;const f=s([24,-1.5,24],e);f.name="quote-nursery";const _=i("#94c1c0",{roughness:.34}),m=i("#274644"),d=i("#f2e3b9"),M=i("#dfaf57"),C=i("#c7674e"),x=i("#326d59");r([0,-.18,0],[12,.65,14],t.concrete,f),r([0,.17,1.5],[7.25,.14,7.25],m,f);const E=H=>[(H%5-2)*1.35,.46,(Math.floor(H/5)-2)*1.35+1.5],S=[];for(let H=0;H<25;H++){const[ne,,F]=E(H);S.push(r([ne,.27,F],[1.27,.12,1.27],_,f))}const T=Array.from({length:6},()=>{const H=s([0,0,0],f);return r([0,.24,0],[1.05,.42,1.05],t.concrete,H),r([0,.49,0],[.9,.08,.9],t.metal,H),H}),v=[1,3].map((H,ne)=>{const F=E(H),ee=s([F[0],.4,F[2]],f);return r([0,-.02,0],[1.23,.07,1.23],ne?C:M,ee),r([0,.025,0],[1.03,.04,1.03],d,ee),l(ne?"»":"«",[0,.14,.38],.72,.55,ee,{size:105}),ee});function P(H){const ne=s(E(H?24:20),f);for(let F=0;F<2;F++){const ee=(F-.5)*.34,ie=H?-1:1;c([ee+ie*.22,.92,0],[ee-ie*.16,.5,0],.065,H?C:M,ne),c([ee-ie*.16,.5,0],[ee+ie*.22,.08,0],.065,H?C:M,ne)}return r([0,-.07,0],[.98,.09,.5],t.metal,ne),ne}const A=[P(0),P(1)],N=A.map(H=>r([0,-.13,0],[1.1,.04,.67],d,H));for(const H of[-3.9,0,3.9])r([H,.75,-2.05],[.18,1.25,.18],t.copper,f),r([H,1.39,-2.05],[.32,.12,.32],d,f);for(const H of[-2.8,2.8])r([H,.8,-2.05],[1.85,.14,.14],t.copper,f);const q=Array.from({length:6},(H,ne)=>{const F=s([-3.5+ne%3*3.5,.3,-3.5-Math.floor(ne/3)*1.9],f);a([0,.45,0],.12,.9,t.copper,F);for(let ee=0;ee<3;ee++){const ie=new n.Mesh(new n.ConeGeometry(.87-ee*.17,1.3,5),x);ie.position.y=.95+ee*.56,ie.castShadow=!0,F.add(ie)}return r([0,.02,0],[1.45,.1,1.45],t.soil||m,F),F});l("ОПЯТЬ ЁЛОЧКИ ПРОЛЕЗЛИ",[0,.84,5.7],6,.58,f,{size:44}),l("СЕВЕР",[0,1.52,-2.05],1.45,.33,f,{size:60});for(let H=0;H<23;H++)r([24,-1.42,6.6+H*.54],[1,.13,.43],t.cream,e);u(f,[...T,...A,...v,...q]);let V=null,k=((z=(R=(w=window.__beznogimState)==null?void 0:w.mechanics)==null?void 0:R.quotes)==null?void 0:z.public)||null,I,O="",B="",Q=0,Y="",W=0,te=Array(6).fill(0),j=[null,null];try{V=JSON.parse(localStorage.getItem("beznogim-quotes-v1")||"null")}catch{}function ce(H,ne,F={}){const ee=Ll({mode:H,tool:ne,args:F,state:V});V=ee.state;try{localStorage.setItem("beznogim-quotes-v1",JSON.stringify(V))}catch{}return ee}ce("migrate");const le=document.createElement("div");le.id="quotes-controls",le.hidden=!0,le.innerHTML='<output id="quotes-readout"></output><div class="quotes-pieces"><button data-quote="0" aria-label="Выбрать левую кавычку">« · охра</button><button data-quote="1" aria-label="Выбрать правую кавычку">» · рыжая</button></div><div class="quotes-directions"><button data-slide="north">север ↑</button><button data-slide="west">запад ←</button><button data-slide="east">восток →</button><button data-slide="south">юг ↓</button></div><small>Скользят до края, камня или друг друга. Поставь обе в светлые проёмы: « слева, » справа. Затем выпусти.</small><div class="quotes-tools"><button id="quotes-hint">намекни</button><button id="quotes-pair">пару на старт ↺</button></div><output id="quotes-hint-text"></output>',document.querySelector("#focus-object").before(le);const fe=()=>k&&h()?k:Ll({mode:"migrate",state:V}).public;function U(H,ne={}){if(W>0)return;p(),Y="";const F=ce("action",H,ne);return O="",J(0),g(),F}for(const H of le.querySelectorAll("[data-quote]"))H.onclick=()=>{Q=Number(H.dataset.quote),Y="",y()};for(const H of le.querySelectorAll("[data-slide]"))H.onclick=()=>U("slide",{piece:Q,direction:H.dataset.slide});le.querySelector("#quotes-pair").onclick=()=>U("restart",{scope:"pair"}),le.querySelector("#quotes-hint").onclick=()=>{const H=Ll({mode:"action",tool:"hint",state:fe()}).result;Y=H.status==="route"?`${H.next.piece?"»":"«"} → ${{north:"север",east:"восток",south:"юг",west:"запад"}[H.next.direction]} · осталось ходов: ${H.remaining}`:H.status==="aligned"?"Обе на месте. Выпускай.":H.status==="complete"?"Шесть елей уже на месте.":"Здесь застряли. Верни пару на старт.",y()};function y(){if(I){le.querySelector("#quotes-readout").textContent=`пара ${I.level}/3 · ели ${I.trees}/6 · ходы ${I.moves}`,le.querySelector("#quotes-hint-text").textContent=Y;for(const H of le.querySelectorAll("[data-quote]"))H.setAttribute("aria-pressed",Number(H.dataset.quote)===Q);for(const H of le.querySelectorAll("[data-slide],#quotes-pair,#quotes-hint"))H.disabled=W>0||I.phase==="complete";N.forEach((H,ne)=>H.visible=ne===Q&&I.phase!=="complete")}}function L(H){const ne=k&&h()?"resident":"sandbox",F=I,ee=!F||F.run!==H.run||ne!==B;B=ne,ee?(A.forEach((ie,$)=>ie.position.set(...E(H.positions[$]))),te=q.map((ie,$)=>$<H.trees?1:0),j=[null,null],W=0):H.planted>F.planted?(W=1.4,j=A.map((ie,$)=>({from:ie.position.clone(),to:q[(H.planted-1)*2+$].position.clone().add(new n.Vector3(0,.35,0)),t:0}))):H.planted!==F.planted&&(te=q.map((ie,$)=>$<H.trees?1:0)),I=H,T.forEach((ie,$)=>{if(ie.visible=$<H.rocks.length,ie.visible){const ae=E(H.rocks[$]);ie.position.set(ae[0],.3,ae[2])}}),y()}function J(H){H=Math.min(.1,Math.max(0,H));const ne=fe(),F=(k&&h()?"resident:":"sandbox:")+JSON.stringify(ne);F!==O&&(O=F,L(ne),g());const ee=W>0;W=Math.max(0,W-H);for(let ie=0;ie<2;ie++){const $=A[ie],ae=j[ie];if(ae&&W>0)ae.t=Math.min(1,ae.t+H/1.4),$.position.lerpVectors(ae.from,ae.to,ae.t*ae.t*(3-2*ae.t)),$.position.y+=Math.sin(ae.t*Math.PI)*.9,$.scale.setScalar(1-ae.t*.8);else{j[ie]=null,$.scale.setScalar(1);const ye=E(ne.positions[ie]);$.position.x=n.MathUtils.damp($.position.x,ye[0],12,H),$.position.y=.46,$.position.z=n.MathUtils.damp($.position.z,ye[2],12,H)}$.visible=!!j[ie]||ne.phase!=="complete"}q.forEach((ie,$)=>{const ae=$<ne.trees?1:0;te[$]=n.MathUtils.damp(te[$],ae,W>0?1:5,H),ie.visible=te[$]>.003,ie.scale.setScalar(Math.max(.001,te[$]))}),ee&&W===0&&(y(),g())}const Z=()=>({action:k&&h()?"попробовать свои ёлочки":I.phase==="complete"?"новый питомник ↺":W>0?"пролезают…":"выпустить пару",description:(k&&h()?"Питомник жителя. Кнопки открывают твою отдельную партию. ":"Твой питомник. ")+I.message,disabled:W>0});return window.addEventListener("beznogim:state",({detail:H})=>{var F,ee;const ne=(ee=(F=H.mechanics)==null?void 0:F.quotes)==null?void 0:ee.public;ne&&(k=ne)}),L(fe()),O=(k&&h()?"resident:":"sandbox:")+JSON.stringify(fe()),J(0),{house:f,controls:le,update:J,card:Z,run:()=>U(I.phase==="complete"?"restart":"plant",I.phase==="complete"?{scope:"all"}:{}),inspect:()=>({source:k&&h()?"resident":"sandbox",...I,busy:W,selected:Q,hint:Y,quotePositions:A.map(H=>H.position.toArray()),treeScales:te.slice(),visibleTrees:q.filter(H=>H.visible).length})}}function ch(n){const e=n.state||{},t=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u,i={run:t(e.run,1,999999,1),round:t(e.round,0,2,0),span:t(e.span,1,8,1),shift:t(e.shift,-2,2,0),phase:["ready","short","bent","shifted","delivered","complete"].includes(e.phase)?e.phase:"ready",delivered:t(e.delivered,0,3,0),attempts:t(e.attempts,0,99999,0),message:typeof e.message=="string"?e.message.slice(0,180):"Подгони тире под пролёт. Улитка ждёт на левом берегу."};i.delivered===3&&(i.phase="complete");const s=[3,5,7][i.round],r=[0,1,-1][i.round];let o=null;if(n.mode==="action"){const a=n.args||{};n.tool==="reset"?(Object.assign(i,{run:Math.min(999999,i.run+1),round:0,span:1,shift:0,phase:"ready",delivered:0,attempts:0,message:"Новая почта. Три знака ждут переправы."}),o={ok:!0}):n.tool==="next"?i.phase!=="delivered"?o={ok:!1,reason:"Сначала доставь знак. После третьего можно начать заново."}:(i.round=Math.min(2,i.round+1),i.span=1,i.shift=0,i.phase="ready",i.message="Берега разошлись. Следующий знак ждёт на левом берегу.",o={ok:!0,round:i.round}):["delivered","complete"].includes(i.phase)?o={ok:!1,reason:"Знак уже доставлен. Используй next или reset."}:n.tool==="tune"?!Number.isInteger(a.span)||a.span<1||a.span>8||!Number.isInteger(a.shift)||a.shift<-2||a.shift>2?o={ok:!1,reason:"Длина 1..8, сдвиг -2..2, целые отметки."}:(i.span=a.span,i.shift=a.shift,i.phase="ready",i.message="Тире выправлено. Проверь длину и сдвиг перед отправкой.",o={ok:!0,span:i.span,shift:i.shift}):n.tool==="cross"?(i.attempts=Math.min(99999,i.attempts+1),i.span>s?(i.phase="bent",i.message="Слишком длинное тире согнулось между упорами. Улитка осталась дома.",o={ok:!1,reason:"bent"}):i.span<s?(i.phase="short",i.message="Не дотянулось до берега. Улитка осталась дома.",o={ok:!1,reason:"short"}):i.shift!==r?(i.phase="shifted",i.message="Один конец не на упоре. Передвинь тире целиком.",o={ok:!1,reason:"shifted"}):(i.delivered=Math.max(i.delivered,i.round+1),i.phase=i.delivered===3?"complete":"delivered",i.message=i.phase==="complete"?"Три знака на полке. Почта добралась.":"Знак доставлен. Можно раздвинуть берега для следующего.",o={ok:!0,delivered:i.delivered})):o={ok:!1,reason:"Неизвестное действие."}}return{state:i,public:{...i,gap:[3,5,7][i.round],center:[0,1,-1][i.round],cargo:[".","?","!"][i.round]},result:o,seconds:n.tool==="cross"?45:20,label:n.tool==="cross"?"провожает почтовую улитку":"подгоняет мост из тире"}}function rm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,rod:a,torus:c,sign:l,batchStatic:u,changed:g,watching:h,localPlay:p}){var L,J,Z;const f=s([0,-1.5,-24],e);f.name="punctuation-post";const _=i("#28464d"),m=i("#eee4c9"),d=i("#6d9994",{roughness:.35,transparent:!0,opacity:.8});r([0,-.16,0],[16,.6,10],t.concrete,f),r([0,.2,0],[14,.14,7],t.dark,f),r([0,.3,0],[13.6,.04,6.6],d,f);const M=s([0,0,0],f),C=s([0,0,0],f);for(const[w,R]of[[M,"ОТ"],[C,"ДО"]])r([0,.72,0],[2,1.15,3.2],t.concrete,w),r([0,1.32,0],[2.12,.12,3.3],m,w),l(R,[0,.9,1.66],1,.36,w,{size:60});const x=s([0,1.43,0],f),E=s([0,0,0],x),S=s([0,0,0],x),T=r([-.5,0,0],[1,.15,.56],_,E),v=r([.5,0,0],[1,.15,.56],_,S),P=[-1,1].map(()=>r([0,1.37,0],[.2,.12,.82],t.copper,f)),A=s([0,1.47,0],f);A.name="postal-snail",o([0,.1,0],[.65,.16,.22],t.leaf,A),o([-.08,.46,0],[.39,.42,.29],t.copper,A),c([-.08,.47,.3],.23,.033,m,A,[0,0,0]),c([-.08,.47,.315],.12,.03,m,A,[0,0,0]);for(const w of[-.13,.13])a([.4,.17,w],[.62,.46,w],.02,t.leaf,A),o([.62,.46,w],[.055,.065,.055],_,A);r([-.16,.92,0],[.46,.32,.065],m,A),a([-.38,.98,.04],[-.16,.83,.04],.014,t.copper,A),a([.06,.98,.04],[-.16,.83,.04],.014,t.copper,A);const N=s([0,.4,3.9],f);r([0,0,0],[3.6,.22,1],t.copper,N);const q=[".","?","!"].map((w,R)=>{const z=s([-1.1+R*1.1,.42,0],N);return r([0,0,0],[.8,.65,.11],m,z),l(w,[0,.02,.075],.55,.5,z,{size:100}),z});l("ДЛИННОЕ ТИРЕ",[0,.74,-3.9],4.5,.5,f,{size:52});const V=s([0,.55,2.5],f);r([0,0,0],[10,.1,.4],t.copper,V);for(let w=-4;w<=4;w++)r([w,.07,0],[.035,.025,.26],_,V),l(String(w),[w,.08,.32],.4,.28,V,{size:45});for(let w=0;w<16;w++)r([1.5,-.1-w*.09,-5.9-w*.72],[1.05,.14,.65],t.cream,e);for(let w=0;w<8;w++)r([1.5,-1.45,-17.6-w*.5],[1.05,.14,.45],t.cream,e);const k=s([-6.9,.3,3.9],f);a([0,0,0],[0,2.7,0],.07,t.metal,k),r([0,2.7,0],[.8,.14,.8],t.metal,k),r([0,2.59,0],[.68,.06,.68],i("#e4ecd0",{emissive:"#c2d5a4",emissiveIntensity:1}),k),u(A,[]),u(M,[]),u(C,[]),u(f,[M,C,x,...P,A,N]);let I=null,O=((Z=(J=(L=window.__beznogimState)==null?void 0:L.mechanics)==null?void 0:J.dash)==null?void 0:Z.public)||null,B,Q="",Y=1,W=0;try{I=JSON.parse(localStorage.getItem("beznogim-dash-v1")||"null")}catch{}function te(w,R,z={}){const H=ch({mode:w,tool:R,args:z,state:I});I=H.state;try{localStorage.setItem("beznogim-dash-v1",JSON.stringify(I))}catch{}return H}te("migrate");const j=document.createElement("div");j.id="dash-controls",j.hidden=!0,j.innerHTML='<output id="dash-readout"></output><div class="dash-row"><label>длина<select id="dash-span" aria-label="Длина тире">'+Array.from({length:8},(w,R)=>`<option value="${R+1}">${R+1}</option>`).join("")+'</select></label><label>сдвиг<select id="dash-shift" aria-label="Сдвиг тире">'+[-2,-1,0,1,2].map(w=>`<option value="${w}">${w>0?"+":""}${w}</option>`).join("")+'</select></label><button id="dash-tune">выправить</button><button id="dash-reset">заново ↺</button></div><small>Длина = пролёт, сдвиг = центр. Короткое не достаёт, длинное гнётся. Выправить можно сколько угодно.</small>',document.querySelector("#focus-object").before(j);const ce=()=>O&&h()?O:ch({mode:"migrate",state:I}).public;function le(w,R){p(),te("action",w,R),Q="",U(0),g()}j.querySelector("#dash-tune").onclick=()=>le("tune",{span:Number(j.querySelector("#dash-span").value),shift:Number(j.querySelector("#dash-shift").value)}),j.querySelector("#dash-reset").onclick=()=>le("reset");function fe(w){const R=["delivered","complete"].includes(w.phase);R?!B||B.run!==w.run||B.round!==w.round?Y=1:["delivered","complete"].includes(B.phase)||(Y=0):Y=0,B=w,j.querySelector("#dash-readout").textContent=`почта ${w.delivered}/3 · пролёт ${w.gap} · центр ${w.center>0?"+":""}${w.center} · попытки ${w.attempts}`,j.querySelector("#dash-span").value=w.span,j.querySelector("#dash-shift").value=w.shift;for(const z of j.querySelectorAll("select,#dash-tune"))z.disabled=R;M.position.x=w.center-w.gap/2-1,C.position.x=w.center+w.gap/2+1,P[0].position.x=w.center-w.gap/2,P[1].position.x=w.center+w.gap/2,x.position.x=w.shift,T.scale.x=v.scale.x=w.span/2,T.position.x=-w.span/4,v.position.x=w.span/4,q.forEach((z,H)=>z.visible=H<w.delivered)}function U(w){const R=ce(),z=JSON.stringify(R);z!==Q&&(Q=z,fe(R),g()),Y=["delivered","complete"].includes(R.phase)?Math.min(1,Y+w/4):0,W=n.MathUtils.damp(W,R.phase==="bent"?.22:0,6,w),E.rotation.z=W,S.rotation.z=-W,x.position.y=1.43-Math.sin(W)*R.span/2,A.position.x=M.position.x+(C.position.x-M.position.x)*(Y*Y*(3-2*Y)),A.position.y=1.47,A.rotation.z=Y>0&&Y<1?Math.sin(Y*30)*.025:0}const y=()=>{const w=B||ce();return{action:O&&h()?"попробовать свою почту":w.phase==="complete"?"новая почта ↺":w.phase==="delivered"?"следующий пролёт →":"отправить улитку",description:(O&&h()?"Почтовый мост жителя. Кнопки открывают отдельную песочницу. ":"Твой почтовый мост. ")+w.message}};return window.addEventListener("beznogim:state",({detail:w})=>{var z,H;const R=(H=(z=w.mechanics)==null?void 0:z.dash)==null?void 0:H.public;R&&(O=R)}),fe(ce()),Q=JSON.stringify(ce()),A.position.x=Y===1?C.position.x:M.position.x,{house:f,controls:j,update:U,card:y,run:()=>{if(Y>0&&Y<1)return;const w=ce().phase;le(w==="complete"?"reset":w==="delivered"?"next":"cross")},inspect:()=>({source:O&&h()?"resident":"sandbox",...B,walk:Y,bend:W,snail:A.position.toArray(),beam:x.position.toArray(),left:M.position.x,right:C.position.x,stamps:q.map(w=>w.visible)})}}function uh(n){const e=n.state||{},t=(o,a,c,l)=>Number.isFinite(o)?Math.max(a,Math.min(c,Math.floor(o))):l,i={depths:[0,0,0].map((o,a)=>{var c;return t((c=e.depths)==null?void 0:c[a],0,2,0)}),water:t(e.water,0,2,0),launched:e.launched===!0,floods:t(e.floods,0,99999,0),run:t(e.run,1,999999,1),message:typeof e.message=="string"?e.message.slice(0,160):"Корабль сел в песочницу. Выкопай три канала до отметки 2."};let s=null;if(n.mode==="action"){const o=n.args||{};n.tool==="reset"?(Object.assign(i,{depths:[0,0,0],water:0,launched:!1,floods:0,run:Math.min(999999,i.run+1),message:"Снова песочница. Лопата на месте."}),s={ok:!0}):i.launched?s={ok:!1,reason:"Корабль уже в выходном доке. Для повтора используй reset."}:n.tool==="dig"?[0,1,2].includes(o.channel)?i.water>0?s={ok:!1,reason:"Сначала слей воду: копать можно только насухо."}:i.depths[o.channel]===2?s={ok:!1,reason:"Этот канал уже достаточно глубокий."}:(i.depths[o.channel]++,i.message="Песок вынут. Отметка канала: "+i.depths[o.channel]+"/2.",s={ok:!0,channel:o.channel,depth:i.depths[o.channel]}):s={ok:!1,reason:"Нет такого канала."}:n.tool==="pump"?o.direction==="drain"?(i.water=0,i.message="Вода слита. Теперь можно копать.",s={ok:!0,water:0}):o.direction==="fill"?i.water===2?(i.water=0,i.depths=i.depths.map(a=>Math.max(0,a-1)),i.floods=Math.min(99999,i.floods+1),i.message="Перелив! Вода ушла, по одной отметке песка намыло обратно.",s={ok:!0,flood:!0}):(i.water++,i.message="Вода: "+i.water+"/2. Третий качок перельёт борта.",s={ok:!0,water:i.water}):s={ok:!1,reason:"Выбери fill или drain."}:n.tool==="launch"&&(i.water!==2||i.depths.some(a=>a<2)?s={ok:!1,reason:"Для спуска нужны вода 2 и все три канала 2."}:(i.launched=!0,i.message="Поплыл. Грузовой корабль вышел из песочницы.",s={ok:!0,launched:!0})),(s==null?void 0:s.ok)===!1&&(i.message=s.reason)}const r=i.water===2&&i.depths.every(o=>o===2);return{state:i,public:{...i,ready:r,afloat:r||i.launched},result:s,seconds:n.tool==="dig"?40:n.tool==="launch"?60:20,label:n.tool==="dig"?"выкапывает канал в песочнице":n.tool==="launch"?"спускает грузовой корабль":"качает воду в сухом доке"}}function om({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:g,changed:h,watching:p,localPlay:f}){var J,Z,w;const _=s([-24,-1.5,0],e);_.name="sandbox-drydock";const m=i("#d0b987"),d=i("#556f7f"),M=i("#a65d42"),C=i("#649b9e",{transparent:!0,opacity:.73,roughness:.35});r([0,-.15,0],[16,.65,10],t.concrete,_),r([0,.2,0],[15.7,.12,9.7],t.dark,_),r([.5,.38,0],[12.6,.26,3.9],t.dark,_);for(const R of[-2,2])r([.5,.96,R],[12.9,1.1,.22],t.copper,_);for(const R of[-6,7])r([R,.96,0],[.22,1.1,4.1],t.copper,_);const x=Array.from({length:3},(R,z)=>r([-4+z*2,.98,0],[1.9,1,3.7],m,_)),E=r([.5,.54,0],[12.6,.04,3.75],C,_);E.castShadow=!1;const S=Array.from({length:3},(R,z)=>{const H=s([-4+z*2,.35,3.05],_);for(let ne=0;ne<5;ne++)o([(ne-2)*.27,.16+ne%2*.1,0],[.32,.22,.4],m,H);return H}),T=s([-2,1.3,0],_);T.name="sandbox-cargo-ship";const v=new n.Shape;[[-3,-.74],[2.2,-.74],[3.15,0],[2.2,.74],[-3,.74]].forEach(([R,z],H)=>H?v.lineTo(R,-z):v.moveTo(R,-z)),v.closePath();const P=new n.ExtrudeGeometry(v,{depth:.67,bevelEnabled:!1});P.rotateX(-Math.PI/2);const A=new n.Mesh(P,d);A.castShadow=!0,A.receiveShadow=!0,T.add(A),r([-.45,.7,0],[4.9,.09,1.4],t.cream,T);for(let R=0;R<3;R++){r([-.95+R*.92,1.03,0],[.83,.59,1.18],[t.rust,t.leaf,t.copper][R],T);for(const z of[-.601,.601])for(let H=0;H<4;H++)r([-.95+R*.92-.3+H*.2,1.03,z],[.024,.5,.025],t.dark,T)}r([-2.25,1.03,0],[.9,.64,1.36],t.cream,T),r([-2.25,1.57,0],[.9,.44,1.23],t.cream,T);for(const R of[-.63,.63])r([-2.25,1.6,R],[.73,.16,.03],t.dark,T);a([-2.45,1.98,0],.15,.43,M,T),a([-2.45,2.21,0],.15,.05,t.dark,T),c([2.3,.77,0],[2.3,1.9,0],.035,t.metal,T),r([2.55,1.7,0],[.48,.26,.03],t.cream,T);for(const R of[-2.9,2.1])for(const z of[-.7,.7])c([R,.7,z],[R,1,z],.025,t.cream,T);for(const R of[-.7,.7])c([-2.9,1,R],[2.1,1,R],.025,t.cream,T);const N=s([5.9,1.1,3.4],_);l([0,0,0],.4,.04,t.copper,N,[0,0,0]);for(let R=0;R<4;R++){const z=R*Math.PI/2;c([0,0,0],[.4*Math.cos(z),.4*Math.sin(z),0],.025,t.copper,N)}c([5.9,.4,3.4],[5.9,1.1,3.4],.16,t.metal,_),c([5.9,.4,3.4],[5.9,.4,1.8],.16,t.metal,_);const q=r([5.9,.8,1.75],[.19,.55,.19],C,_);q.castShadow=!1;const V=s([0,.29,0],_);for(const R of[-2.9,2.9])r([.5,0,R],[13,.02,1.1],C,V);for(let R=0;R<3;R++)u(["КОРМА","ТРЮМ","НОС"][R],[-4+R*2,.7,2.15],1.55,.28,_,{size:45});u("ПЕСОЧНЫЙ ПОРТ",[0,.75,4.55],3.9,.4,_,{size:44}),u("ВЫХОД",[5.5,.8,-2.15],1.5,.35,_,{size:42});for(const R of[-6.6,6.6])c([R,.3,-3.8],[R,3.6,-3.8],.08,t.metal,_),r([R,3.6,-3.5],[.55,.16,.8],t.metal,_),r([R,3.5,-3.5],[.48,.07,.69],i("#d9f1dc",{emissive:"#b9dbd0",emissiveIntensity:1.2}),_);for(let R=0;R<15;R++)r([-7.2-R*.72,-.03-R*.09,1.2],[.65,.14,1.12],t.cream,e);const k=s([-6.5,.5,3.3],_);c([0,0,0],[0,1.5,0],.045,t.copper,k),r([0,.1,0],[.32,.35,.08],t.metal,k),l([0,1.53,0],.1,.025,t.metal,k,[0,0,0]),g(T,[]),g(_,[...x,...S,E,T,N,q,V]);let I=null,O=((w=(Z=(J=window.__beznogimState)==null?void 0:J.mechanics)==null?void 0:Z.drydock)==null?void 0:w.public)||null,B,Q="",Y=0,W=0,te=0;try{I=JSON.parse(localStorage.getItem("beznogim-drydock-v1")||"null")}catch{}function j(R,z,H={}){const ne=uh({mode:R,tool:z,args:H,state:I});I=ne.state;try{localStorage.setItem("beznogim-drydock-v1",JSON.stringify(I))}catch{}return ne}j("migrate");const ce=document.createElement("div");ce.id="drydock-controls",ce.hidden=!0,ce.innerHTML='<output id="drydock-readout"></output><div class="drydock-row"><button data-dig="0">копать корму</button><button data-dig="1">копать трюм</button><button data-dig="2">копать нос</button></div><div class="drydock-row"><button id="drydock-fill">качать +1</button><button id="drydock-drain">слить воду</button><button id="drydock-reset">заново ↺</button></div><small>Каналы 2 · вода 2 → спуск. Копать только насухо. Третий качок переливает борта и намывает песок обратно.</small>',document.querySelector("#focus-object").before(ce);function le(){return O&&p()?O:uh({mode:"migrate",state:I}).public}function fe(R,z){f(),j("action",R,z),Q="",L(0),h()}ce.querySelectorAll("[data-dig]").forEach(R=>R.onclick=()=>fe("dig",{channel:Number(R.dataset.dig)})),ce.querySelector("#drydock-fill").onclick=()=>fe("pump",{direction:"fill"}),ce.querySelector("#drydock-drain").onclick=()=>fe("pump",{direction:"drain"}),ce.querySelector("#drydock-reset").onclick=()=>fe("reset");function U(R){B?(B.water!==R.water&&(Y=2),B.floods!==R.floods&&(W=3),!B.launched&&R.launched&&(te=0)):te=R.launched?1:0,B=R,ce.querySelector("#drydock-readout").textContent=`каналы ${R.depths.join(" / ")} · вода ${R.water}/2 · переливы ${R.floods}`,ce.querySelectorAll("[data-dig]").forEach(z=>{z.disabled=R.launched||R.water>0||R.depths[Number(z.dataset.dig)]===2}),ce.querySelector("#drydock-fill").disabled=R.launched,ce.querySelector("#drydock-drain").disabled=R.launched||R.water===0,x.forEach((z,H)=>{const ne=1-R.depths[H]*.4;z.scale.y=ne,z.position.y=.48+ne/2,S[H].scale.setScalar(.45+R.depths[H]*.4)}),E.visible=R.water>0,E.position.y=.49+R.water*.39}function y(){const R=B||le();return{action:O&&p()?"попробовать свой спуск":R.launched?"корабль в песок ↺":"спустить корабль",description:(O&&p()?"Песочный порт жителя. Кнопки открывают отдельную песочницу. ":"Твой песочный порт. ")+R.message}}function L(R){const z=le(),H=JSON.stringify(z);H!==Q&&(Q=H,U(z),h()),Y=Math.max(0,Y-R),W=Math.max(0,W-R),q.visible=Y>0&&z.water>0,V.visible=W>0,N.rotation.z+=Y>0?R*3:0,te=z.launched?Math.min(1,te+R/5):0;const ne=te*te*(3-2*te);T.position.x=-2+ne*5.6;const F=Math.min(...z.depths),ee=z.afloat?.94:1.15-F*.32;T.position.y=n.MathUtils.damp(T.position.y,ee,4,R),T.rotation.z=n.MathUtils.damp(T.rotation.z,z.afloat?0:(z.depths[2]-z.depths[0])*.085,4,R)}return window.addEventListener("beznogim:state",({detail:R})=>{var H,ne;const z=(ne=(H=R.mechanics)==null?void 0:H.drydock)==null?void 0:ne.public;z&&(O=z,Q="")}),U(le()),T.position.x=le().launched?3.6:-2,{house:_,controls:ce,update:L,card:y,run:()=>fe(le().launched?"reset":"launch"),inspect:()=>({source:O&&p()?"resident":"sandbox",...B,ship:T.position.toArray(),pitch:T.rotation.z,waterY:E.position.y,voyage:te,sandHeights:x.map(R=>R.scale.y),floodVisible:V.visible})}}function hh(n){const t={round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:1,...n.state||{}},i=(a,c,l,u)=>Number.isFinite(a)?Math.max(c,Math.min(l,Math.floor(a))):u;t.round=i(t.round,0,2,0),t.core=i(t.core,2,4,2),t.belt=i(t.belt,1,3,1),t.repairs=i(t.repairs,0,3,0),t.attempts=i(t.attempts,0,99999,0),t.run=i(t.run,1,999999,1),["ready","ejected","repaired","complete"].includes(t.phase)||(t.phase="ready");const s=[6,8,9];let r=null;if(n.mode==="action"){const a=n.args||{};n.tool==="fit"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Достань ядро из ведра.":"Перейди к следующему экрану."}:a.part==="core"&&[2,3,4].includes(a.value)||a.part==="belt"&&[1,2,3].includes(a.value)?(t[a.part]=a.value,r={ok:!0,part:a.part,value:a.value}):r={ok:!1,reason:"Такой детали нет."}:n.tool==="crank"?t.phase!=="ready"?r={ok:!1,reason:t.phase==="ejected"?"Ядро в ведре.":"Экран уже работает."}:(t.attempts=Math.min(99999,t.attempts+1),t.phase=t.core*t.belt===s[t.round]?"repaired":"ejected",t.phase==="repaired"&&(t.repairs=Math.min(3,t.repairs+1)),r={ok:!0,repaired:t.phase==="repaired",speed:t.core*t.belt,target:s[t.round]}):n.tool==="salvage"?t.phase==="ejected"?(t.phase="ready",r={ok:!0,core:t.core}):r={ok:!1,reason:"Ведро пустое."}:n.tool==="next"?t.phase==="repaired"&&t.round<2?(t.round++,t.phase="ready",t.belt=1,r={ok:!0,round:t.round}):t.phase==="repaired"&&t.round===2?(t.phase="complete",r={ok:!0,complete:!0}):r={ok:!1,reason:"Сначала восстанови экран."}:n.tool==="restart"&&(Object.assign(t,{round:0,core:2,belt:1,phase:"ready",attempts:0,repairs:0,run:Math.min(999999,t.run+1)}),r={ok:!0})}const o={...t,target:s[t.round],speed:t.core*t.belt,picture:t.phase==="repaired"||t.phase==="complete"?t.round+1:0,bucket:t.phase==="ejected",completed:t.phase==="complete"};return{state:t,public:o,result:r,seconds:n.tool==="crank"?60:20,label:n.tool==="salvage"?"достаёт ядро из ведра":n.tool==="crank"?"крутит механический монитор":"собирает механический монитор"}}function am({THREE:n,workshop:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,changed:g,watching:h,localPlay:p}){var ce,le,fe;const f=s([0,0,0],e);f.name="mechanical-bench";const _=i("#e9e4cc",{emissive:"#e9e4cc",emissiveIntensity:.6}),m=i("#c9ff97",{emissive:"#a5dc90",emissiveIntensity:.4});r([.55,1.5,-.94],[1.65,1.22,.42],t.dark,f),r([.55,1.5,-.713],[1.42,1.04,.035],_,f),c([.55,.9,-.94],[.55,1,-.94],.08,t.metal,f);const d=["000111000001111100011111110011010110011111110001101100000111000","000010000000011000000011100000011110111111111011111110000000000","000010000001111000000110000000010000001111100000010000000010000"],M=[];for(let U=0;U<7;U++)for(let y=0;y<9;y++)M.push(r([.55+(y-4)*.145,1.5+(3-U)*.14,-.683],[.13,.12,.02],m,f));const C=s([-1.05,1.24,-.38],f);C.name="core-gear",a([0,0,0],.3,.11,t.copper,C).rotation.x=Math.PI/2;const x=[];for(let U=0;U<12;U++){const y=U/12*Math.PI*2;let L=r([Math.cos(y)*.33,Math.sin(y)*.33,0],[.13,.13,.12],t.copper,C);L.rotation.z=y,x.push(L)}l([0,0,.06],.13,.025,t.dark,C,[0,0,0]);const E=s([-.4,1.12,-.38],f);l([0,0,0],.19,.035,t.dark,E,[0,0,0]),c([-.2,0,0],[.2,0,0],.025,t.metal,E);const S=s([0,0,0],f);c([-1.05,1.51,-.4],[-.4,1.31,-.4],.027,t.dark,S),c([-1.05,.96,-.4],[-.4,.93,-.4],.027,t.dark,S);const T=s([-1.5,1,-.05],f);c([0,0,0],[.23,0,0],.04,t.metal,T),c([.23,0,0],[.23,.23,0],.04,t.copper,T),o([.23,.23,0],.08,t.rust,T);const v=s([-1.55,1.18,-1.13],f);a([0,0,0],.33,.55,t.metal,v),a([0,.281,0],.29,.015,t.dark,v),l([0,.29,0],.33,.025,t.copper,v),l([0,.36,0],.33,.025,t.metal,v,[0,Math.PI/2,0]),u("ЯДРО В ВЕДРО",[0,.4,1.48],2.25,.3,f,{size:37});const P=Array.from({length:3},(U,y)=>o([.17+y*.3,2.23,-.82],.06,t.mint,f));let A=null,N=((fe=(le=(ce=window.__beznogimState)==null?void 0:ce.mechanics)==null?void 0:le.bench)==null?void 0:fe.public)||null,q,V="",k=0;try{A=JSON.parse(localStorage.getItem("beznogim-bench-v1")||"null")}catch{}function I(U,y,L={}){const J=hh({mode:U,tool:y,args:L,state:A});A=J.state;try{localStorage.setItem("beznogim-bench-v1",JSON.stringify(A))}catch{}return J}I("migrate");const O=document.createElement("div");O.id="bench-controls",O.hidden=!0,O.innerHTML='<output id="bench-readout"></output><div class="bench-parts"><span>ядро</span><button data-part="core" data-value="2">2</button><button data-part="core" data-value="3">3</button><button data-part="core" data-value="4">4</button></div><div class="bench-parts"><span>ремень</span><button data-part="belt" data-value="1">×1</button><button data-part="belt" data-value="2">×2</button><button data-part="belt" data-value="3">×3</button></div><button id="bench-salvage">достать из ведра</button><button id="bench-restart">сначала ↺</button><small>Скорость = ядро × ремень. Совпало с запросом экрана - появилась картинка. Не совпало - белый экран, ядро в ведре. Здесь ничего не пропадает.</small>',document.querySelector("#focus-object").before(O);function B(){return N&&h()?N:hh({mode:"migrate",state:A}).public}function Q(U,y){p(),I("action",U,y),V="",j(0),g()}O.querySelectorAll("[data-part]").forEach(U=>U.onclick=()=>Q("fit",{part:U.dataset.part,value:Number(U.dataset.value)})),O.querySelector("#bench-salvage").onclick=()=>Q("salvage"),O.querySelector("#bench-restart").onclick=()=>Q("restart");function Y(U){q&&q.attempts!==U.attempts&&(k=3),q=U,O.querySelector("#bench-readout").textContent=`экран ${U.round+1}/3 · скорость ${U.speed} / нужно ${U.target}`,O.querySelectorAll("[data-part]").forEach(y=>{y.setAttribute("aria-pressed",String(U[y.dataset.part]===Number(y.dataset.value))),y.disabled=U.phase!=="ready"}),O.querySelector("#bench-salvage").disabled=!U.bucket,_.color.set(U.picture?"#16362c":"#e9e4cc"),_.emissive.set(U.picture?"#20382b":"#e9e4cc"),_.emissiveIntensity=U.picture?.1:.6,M.forEach((y,L)=>y.visible=!!U.picture&&d[U.picture-1][L]==="1"),x.forEach((y,L)=>y.visible=L<U.core*3),E.scale.setScalar(.75+U.belt*.25),S.visible=!U.bucket,P.forEach((y,L)=>y.visible=L<U.repairs)}const W={ready:"Собери передачу и крути рукоятку.",ejected:"Белый экран. Ядро улетело в ведро: достань и попробуй другую передачу.",repaired:"Картинка вернулась. Можно взяться за следующий экран.",complete:"Голова, лодка, росток. Все три экрана работают."};function te(){const U=q||B();return{action:N&&h()?"собрать свой монитор":U.phase==="ejected"?"достать ядро":U.phase==="repaired"?U.round===2?"закончить работу":"следующий экран":U.phase==="complete"?"ещё раз":"крутить рукоятку",description:(N&&h()?"Верстак жителя. Кнопки открывают твою отдельную сборку. ":"Твоя сборка. ")+W[U.phase]}}function j(U){const y=B(),L=JSON.stringify(y);L!==V&&(V=L,Y(y),g()),k=Math.max(0,k-U);const J=Math.min(1,U*7),Z=y.bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38];C.position.lerp(new n.Vector3(...Z),J),C.rotation.x=n.MathUtils.lerp(C.rotation.x,y.bucket?-Math.PI/2:0,J);const w=k>0?y.core*2:y.picture?.4:0;C.rotation.z+=U*w,E.rotation.z-=U*w*y.belt,T.rotation.z+=U*w}return window.addEventListener("beznogim:state",({detail:U})=>{var L,J;const y=(J=(L=U.mechanics)==null?void 0:L.bench)==null?void 0:J.public;y&&(N=y,V="")}),Y(B()),C.position.set(...B().bucket?[-1.55,1.43,-1.13]:[-1.05,1.24,-.38]),{house:f,controls:O,update:j,card:te,run:()=>{const U=B();Q(U.phase==="ejected"?"salvage":U.phase==="repaired"?"next":U.phase==="complete"?"restart":"crank")},inspect:()=>({source:N&&h()?"resident":"sandbox",...q,corePosition:C.position.toArray(),coreAngle:C.rotation.z,driveAngle:E.rotation.z,litPixels:M.filter(U=>U.visible).length})}}const dh=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function fh(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function ph(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):fh();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,fh(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const u=dh[e.round],g=u.weights.reduce((h,p,f)=>h+(e.loaded[f]?p+(e.pardoned?0:u.debt[f]):0),0);e.attempts++,g!==u.target?(e.status=g<u.target?"under":"over",i={ok:!1,reason:e.status,total:g,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,p)=>{e.loaded[p]&&e.delivered.push({id:`${e.run}:${e.round}:${p}`,weight:h})}),i={ok:!0,total:g,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=dh[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,u)=>c+(e.loaded[u]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function lm({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:g,changed:h,watching:p,localPlay:f}){var y,L,J;const _=s([0,-1.5,24]);_.name="amnesty-bureau";const m=i("#9d8560"),d=i("#a1b56f"),M=i("#f1d29a"),C=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],C,_),r([3.65,-.14,0],[3.3,.5,7],C,_),r([0,-.8,0],[4.2,.1,6.7],t.dark,_);for(const Z of[-4.9,4.9])c([Z,0,-3],[Z,3.3,-3],.06,t.copper,_);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,_,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,_,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,_);const x=s([0,.2,1.15],_);for(let Z=0;Z<11;Z++)r([-2+Z*.4,0,0],[.38,.16,1.65],m,x);for(const Z of[-.72,.72])c([-2.2,.22,Z],[2.2,.22,Z],.045,t.copper,x);a([0,-.22,1.15],.32,.6,t.metal,_);const E=s([-2.55,.32,1.15],_);r([0,.12,0],[1.5,.18,1.35],t.metal,E);for(const Z of[-.52,.52])for(const w of[-.58,.58]){const R=l([Z,0,w],.17,.05,t.dark,E,[0,0,0]);R.rotation.y=Math.PI/2}const S=s([-4.7,.8,1.4],_);c([0,-.5,0],[0,.2,0],.1,t.metal,S);const T=s([0,0,0],S);c([0,0,0],[0,.8,0],.065,t.copper,T),o([0,.8,0],.14,t.rust,T),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,_,{size:35});const v=s([.1,.1,-2.3],_);r([0,.08,0],[1.6,.16,1.5],t.metal,v);const P=a([0,.7,0],.57,1.1,t.copper,v);l([0,1.28,0],.25,.045,t.dark,v);const A=Array.from({length:3},(Z,w)=>o([1.75+w*.34,2.15,-3.05],.095,t.mint,_)),N=Array.from({length:3},(Z,w)=>{const R=s([-3.6,.72,-2.1+w*1.08],_),z=o([0,0,0],[.28,.23,.57],d,R);z.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,R);const H=s([.45,.28,0],R);return r([0,0,0],[.29,.57,.4],M,H),r([0,0,.21],[.18,.045,.012],t.rust,H),{g:R,tax:H}});u("A",[-4.35,.75,-2.1],.28,.28,_),u("B",[-4.35,.75,-1.02],.28,.28,_),u("C",[-4.35,.75,.06],.28,.28,_),r([3.55,.8,-1.7],[2.75,.13,2.2],m,_);const q=Array.from({length:6},(Z,w)=>o([2.75+w%3*.7,1,-2.1+Math.floor(w/3)*.83],[.2,.19,.38],d,_));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,_,{size:39});const V=s([0,0,0],e);for(let Z=0;Z<15;Z++){const w=Z/14;r([-.6+Math.sin(w*Math.PI)*1.5,-1.55,17+Z*.3],[.9,.12,.65],C,V)}for(let Z=0;Z<5;Z++)r([-.8-Z*.6,-1.55,21.5],[.75,.12,.75],C,V);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,V,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,V),g(V,[]),g(_,[x,E,S,v,...N.map(Z=>Z.g),...q,...A]),g(x,[]),g(E,[]);let k=null,I=((J=(L=(y=window.__beznogimState)==null?void 0:y.mechanics)==null?void 0:L.amnesty)==null?void 0:J.public)||null,O,B="",Q=0;try{k=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function Y(Z,w,R={}){const z=ph({state:k,mode:Z,tool:w,args:R});k=z.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(k))}catch{}return z}Y("migrate");const W=document.createElement("div");W.id="amnesty-controls",W.hidden=!0,W.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(W);function te(){return I&&p()?I:ph({state:k,mode:"migrate"}).public}function j(Z,w){f(),Y("action",Z,w),B="",U(0),h()}for(const Z of W.querySelectorAll("[data-load]"))Z.onclick=()=>j("load",{index:Number(Z.dataset.load)});W.querySelector("#amnesty-pardon").onclick=()=>j("amnesty"),W.querySelector("#amnesty-restart").onclick=()=>j("restart");const ce={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function le(Z){O=Z;const w=Z.status==="delivered"||Z.status==="complete";W.querySelector("#amnesty-readout").textContent=`рейс ${Z.round+1}/3 · груз ${Z.total} / нужно ${Z.target}`,W.querySelectorAll("[data-load]").forEach((R,z)=>{R.textContent=`${["A","B","C"][z]} · ${Z.weights[z]}${Z.debt[z]?` + ${Z.debt[z]} бумага`:""}`,R.setAttribute("aria-pressed",String(Z.loaded[z])),R.disabled=w}),W.querySelector("#amnesty-pardon").disabled=Z.pardoned||w,W.querySelector("#amnesty-pardon").textContent=Z.pardoned?"налог отменён":"отменить налог",P.scale.y=Z.target/4,A.forEach((R,z)=>R.visible=z<(Z.status==="complete"?3:Z.round)),q.forEach((R,z)=>R.visible=z<Z.delivered.length),N.forEach((R,z)=>{R.tax.visible=!Z.pardoned||Q<.99,R.g.visible=!w||!Z.loaded[z],R.g.scale.setScalar(.8+Z.weights[z]*.08)})}function fe(){const Z=O||te();return{action:I&&p()?"войти в свою амнистию":Z.status==="delivered"?"следующий рейс":Z.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(I&&p()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+ce[Z.status]}}function U(Z,w){const R=te(),z=JSON.stringify(R);z!==B&&(B=z,le(R),h());const H=R.status==="delivered"||R.status==="complete",ne=(F,ee)=>n.MathUtils.lerp(F,ee,Math.min(1,Z*5));x.rotation.z=ne(x.rotation.z,R.tilt),E.position.x=ne(E.position.x,H?3:-2.55),T.rotation.z=ne(T.rotation.z,R.pardoned?-.65:0),Q=ne(Q,R.pardoned?1:0),N.forEach(F=>{F.tax.position.y=.28+Q*2.5,F.tax.rotation.z=Q*.8,F.tax.visible=!R.pardoned||Q<.99}),q.forEach((F,ee)=>F.visible=ee<R.delivered.length-(H&&E.position.x<2.9?2:0)),N.forEach((F,ee)=>{const ie=R.loaded[ee];F.g.visible=!H||!ie||E.position.x<2.9,F.g.position.x=ne(F.g.position.x,ie?E.position.x+(ee-1)*.42:-3.6),F.g.position.y=ne(F.g.position.y,ie?.86:.72),F.g.position.z=ne(F.g.position.z,ie?1.15:-2.1+ee*1.08)})}return window.addEventListener("beznogim:state",({detail:Z})=>{var R,z;const w=(z=(R=Z.mechanics)==null?void 0:R.amnesty)==null?void 0:z.public;w&&(I=w,B="")}),Q=te().pardoned?1:0,le(te()),{house:_,controls:W,update:U,card:fe,run:()=>j(O.status==="delivered"?"next":O.status==="complete"?"restart":"dispatch"),inspect:()=>({source:I&&p()?"resident":"sandbox",...O,bridgeTilt:x.rotation.z,cartX:E.position.x,cargoPositions:N.map(Z=>Z.g.position.toArray()),taxVisible:N.map(Z=>Z.tax.visible),paperY:N.map(Z=>Z.tax.position.y),handleAngle:T.rotation.z,deliveredVisible:q.filter(Z=>Z.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="186",Ai={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nd=0,vc=1,Ud=2,Ks=1,Od=2,Ys=3,ts=0,gn=1,Dn=2,mi=0,Qs=1,xc=2,yc=3,Mc=4,Fd=5,_s=100,zd=101,kd=102,Bd=103,Gd=104,Vd=200,Hd=201,Wd=202,qd=203,Yc=204,$c=205,Xd=206,Yd=207,$d=208,Jd=209,Zd=210,Kd=211,Qd=212,jd=213,ef=214,na=0,ia=1,sa=2,nr=3,ra=4,oa=5,aa=6,la=7,Jc=0,tf=1,nf=2,Qn=0,Zc=1,Kc=2,Qc=3,Ka=4,jc=5,eu=6,tu=7,nu=300,ns=301,Es=302,qo=303,Xo=304,eo=306,Vr=1e3,hi=1001,ca=1002,jt=1003,sf=1004,Ar=1005,tn=1006,Yo=1007,$i=1008,yn=1009,iu=1010,su=1011,ir=1012,Qa=1013,ti=1014,On=1015,ni=1016,ja=1017,el=1018,sr=1020,ru=35902,ou=35899,au=1021,lu=1022,Fn=1023,vi=1026,Ji=1027,tl=1028,nl=1029,is=1030,il=1031,sl=1033,Nr=33776,Ur=33777,Or=33778,Fr=33779,ua=35840,ha=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37488,va=37489,Hr=37490,xa=37491,ya=37808,Ma=37809,Sa=37810,ba=37811,Ea=37812,wa=37813,Ta=37814,Aa=37815,Ca=37816,Ra=37817,Pa=37818,La=37819,Ia=37820,Da=37821,Na=36492,Ua=36494,Oa=36495,Fa=36283,za=36284,Wr=36285,ka=36286,rf=3200,Ba=0,of=1,Ei="",cn="srgb",qr="srgb-linear",Xr="linear",wt="srgb",$o=7680,af=519,lf=512,cf=513,uf=514,rl=515,hf=516,df=517,ol=518,ff=519,pf=35044,Sc="300 es",Kn=2e3,rr=2001;function cm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){const n=Ga("canvas");return n.style.display="block",n}const mh={};function bc(...n){const e="THREE."+n.shift();console.log(e,...n)}function gf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function tt(...n){n=gf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=gf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ss(...n){const e=n.join(" ");e in mh||(mh[e]=!0,tt(...n))}function um(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const hm={[na]:ia,[sa]:aa,[ra]:la,[nr]:oa,[ia]:na,[aa]:sa,[la]:ra,[oa]:nr};class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const zr=Math.PI/180,Yr=180/Math.PI;function Ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function cu(n,e){return(n%e+e)%e}function dm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function fm(n,e,t){return n!==e?(t-n)/(e-n):0}function kr(n,e,t){return(1-t)*n+t*e}function pm(n,e,t,i){return kr(n,e,1-Math.exp(-t*i))}function mm(n,e=1){return e-Math.abs(cu(n,e*2)-e)}function gm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _m(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xm(n,e){return n+Math.random()*(e-n)}function ym(n){return n*(.5-Math.random())}function Mm(n){n!==void 0&&(gh=n);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sm(n){return n*zr}function bm(n){return n*Yr}function Em(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function wm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Am(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),g=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*g,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*g,a*l);break;case"ZXZ":n.set(c*g,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*f,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*f,a*l);break;case"ZYZ":n.set(c*f,c*p,a*u,a*l);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xn={DEG2RAD:zr,RAD2DEG:Yr,generateUUID:Ts,clamp:ct,euclideanModulo:cu,mapLinear:dm,inverseLerp:fm,lerp:kr,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:_m,randInt:vm,randFloat:xm,randFloatSpread:ym,seededRandom:Mm,degToRad:Sm,radToDeg:bm,isPowerOfTwo:Em,ceilPowerOfTwo:wm,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Am,normalize:dn,denormalize:Xs},Xu=class Xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xu.prototype.isVector2=!0;let Te=Xu;class Ui{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],g=i[s+3],h=r[o+0],p=r[o+1],f=r[o+2],_=r[o+3];if(g!==_||c!==h||l!==p||u!==f){let m=c*h+l*p+u*f+g*_;m<0&&(h=-h,p=-p,f=-f,_=-_,m=-m);let d=1-a;if(m<.9995){const M=Math.acos(m),C=Math.sin(M);d=Math.sin(d*M)/C,a=Math.sin(a*M)/C,c=c*d+h*a,l=l*d+p*a,u=u*d+f*a,g=g*d+_*a}else{c=c*d+h*a,l=l*d+p*a,u=u*d+f*a,g=g*d+_*a;const M=1/Math.sqrt(c*c+l*l+u*u+g*g);c*=M,l*=M,u*=M,g*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],g=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*g+c*p-l*h,e[t+1]=c*f+u*h+l*g-a*p,e[t+2]=l*f+u*p+a*h-c*g,e[t+3]=u*f-a*g-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),g=a(r/2),h=c(i/2),p=c(s/2),f=c(r/2);switch(o){case"XYZ":this._x=h*u*g+l*p*f,this._y=l*p*g-h*u*f,this._z=l*u*f+h*p*g,this._w=l*u*g-h*p*f;break;case"YXZ":this._x=h*u*g+l*p*f,this._y=l*p*g-h*u*f,this._z=l*u*f-h*p*g,this._w=l*u*g+h*p*f;break;case"ZXY":this._x=h*u*g-l*p*f,this._y=l*p*g+h*u*f,this._z=l*u*f+h*p*g,this._w=l*u*g-h*p*f;break;case"ZYX":this._x=h*u*g-l*p*f,this._y=l*p*g+h*u*f,this._z=l*u*f-h*p*g,this._w=l*u*g+h*p*f;break;case"YZX":this._x=h*u*g+l*p*f,this._y=l*p*g+h*u*f,this._z=l*u*f-h*p*g,this._w=l*u*g-h*p*f;break;case"XZY":this._x=h*u*g-l*p*f,this._y=l*p*g-h*u*f,this._z=l*u*f+h*p*g,this._w=l*u*g+h*p*f;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],g=t[10],h=i+a+g;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>g){const p=2*Math.sqrt(1+i-a-g);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>g){const p=2*Math.sqrt(1+a-i-g);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+g-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yu=class Yu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),g=2*(r*i-o*t);return this.x=t+c*l+o*g-a*u,this.y=i+c*u+a*l-r*g,this.z=s+c*g+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yu.prototype.isVector3=!0;let G=Yu;const Il=new G,_h=new Ui,$u=class $u{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],g=i[7],h=i[2],p=i[5],f=i[8],_=s[0],m=s[3],d=s[6],M=s[1],C=s[4],x=s[7],E=s[2],S=s[5],T=s[8];return r[0]=o*_+a*M+c*E,r[3]=o*m+a*C+c*S,r[6]=o*d+a*x+c*T,r[1]=l*_+u*M+g*E,r[4]=l*m+u*C+g*S,r[7]=l*d+u*x+g*T,r[2]=h*_+p*M+f*E,r[5]=h*m+p*C+f*S,r[8]=h*d+p*x+f*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],g=u*o-a*l,h=a*c-u*r,p=l*r-o*c,f=t*g+i*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=g*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$u.prototype.isMatrix3=!0;let nt=$u;const Dl=new nt,vh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){const n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===wt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Xr,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:vh,fromXYZ:xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const mt=Cm();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Is;class _f{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=Ga("canvas")),Is.width=e.width,Is.height=e.height;const s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rm=0;class al{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nl(s[o].image)):r.push(Nl(s[o]))}else r=Nl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_f.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Pm=0;const Ul=new G;class sn extends Fi{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=hi,s=hi,r=tn,o=$i,a=Fn,c=yn,l=sn.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Ts(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=nu;sn.DEFAULT_ANISOTROPY=1;const Ju=class Ju{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],g=c[8],h=c[1],p=c[5],f=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(g-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(g+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,x=(p+1)/2,E=(d+1)/2,S=(u+h)/4,T=(g+_)/4,v=(f+m)/4;return C>x&&C>E?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=S/i,r=T/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=T/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-f)*(m-f)+(g-_)*(g-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-f)/M,this.y=(g-_)/M,this.z=(h-u)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ju.prototype.isVector4=!0;let Ft=Ju;class vf extends Fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new al(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uu extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xf extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ja=class Ja{constructor(e,t,i,s,r,o,a,c,l,u,g,h,p,f,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,g,h,p,f,_,m)}set(e,t,i,s,r,o,a,c,l,u,g,h,p,f,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=g,d[14]=h,d[3]=p,d[7]=f,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ja().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*g,f=a*u,_=a*g;t[0]=c*u,t[4]=-c*g,t[8]=l,t[1]=p+f*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=f+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*g,f=l*u,_=l*g;t[0]=h+_*a,t[4]=f*a-p,t[8]=o*l,t[1]=o*g,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*g,f=l*u,_=l*g;t[0]=h-_*a,t[4]=-o*g,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*g,f=a*u,_=a*g;t[0]=c*u,t[4]=f*l-p,t[8]=h*l+_,t[1]=c*g,t[5]=_*l+h,t[9]=p*l-f,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,f=a*c,_=a*l;t[0]=c*u,t[4]=_-h*g,t[8]=f*g+p,t[1]=g,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*g+f,t[10]=h-_*g}else if(e.order==="XZY"){const h=o*c,p=o*l,f=a*c,_=a*l;t[0]=c*u,t[4]=-g,t[8]=l*u,t[1]=h*g+_,t[5]=o*u,t[9]=p*g-f,t[2]=f*g-p,t[6]=a*u,t[10]=_*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Im)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Hi.crossVectors(i,bn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Hi.crossVectors(i,bn)),Hi.normalize(),mo.crossVectors(bn,Hi),s[0]=Hi.x,s[4]=mo.x,s[8]=bn.x,s[1]=Hi.y,s[5]=mo.y,s[9]=bn.y,s[2]=Hi.z,s[6]=mo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],g=i[5],h=i[9],p=i[13],f=i[2],_=i[6],m=i[10],d=i[14],M=i[3],C=i[7],x=i[11],E=i[15],S=s[0],T=s[4],v=s[8],P=s[12],A=s[1],N=s[5],q=s[9],V=s[13],k=s[2],I=s[6],O=s[10],B=s[14],Q=s[3],Y=s[7],W=s[11],te=s[15];return r[0]=o*S+a*A+c*k+l*Q,r[4]=o*T+a*N+c*I+l*Y,r[8]=o*v+a*q+c*O+l*W,r[12]=o*P+a*V+c*B+l*te,r[1]=u*S+g*A+h*k+p*Q,r[5]=u*T+g*N+h*I+p*Y,r[9]=u*v+g*q+h*O+p*W,r[13]=u*P+g*V+h*B+p*te,r[2]=f*S+_*A+m*k+d*Q,r[6]=f*T+_*N+m*I+d*Y,r[10]=f*v+_*q+m*O+d*W,r[14]=f*P+_*V+m*B+d*te,r[3]=M*S+C*A+x*k+E*Q,r[7]=M*T+C*N+x*I+E*Y,r[11]=M*v+C*q+x*O+E*W,r[15]=M*P+C*V+x*B+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],g=e[6],h=e[10],p=e[14],f=e[3],_=e[7],m=e[11],d=e[15],M=c*p-l*h,C=a*p-l*g,x=a*h-c*g,E=o*p-l*u,S=o*h-c*u,T=o*g-a*u;return t*(_*M-m*C+d*x)-i*(f*M-m*E+d*S)+s*(f*C-_*E+d*T)-r*(f*x-_*S+m*T)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],g=e[9],h=e[10],p=e[11],f=e[12],_=e[13],m=e[14],d=e[15],M=t*a-i*o,C=t*c-s*o,x=t*l-r*o,E=i*c-s*a,S=i*l-r*a,T=s*l-r*c,v=u*_-g*f,P=u*m-h*f,A=u*d-p*f,N=g*m-h*_,q=g*d-p*_,V=h*d-p*m,k=M*V-C*q+x*N+E*A-S*P+T*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=(a*V-c*q+l*N)*I,e[1]=(s*q-i*V-r*N)*I,e[2]=(_*T-m*S+d*E)*I,e[3]=(h*S-g*T-p*E)*I,e[4]=(c*A-o*V-l*P)*I,e[5]=(t*V-s*A+r*P)*I,e[6]=(m*x-f*T-d*C)*I,e[7]=(u*T-h*x+p*C)*I,e[8]=(o*q-a*A+l*v)*I,e[9]=(i*A-t*q-r*v)*I,e[10]=(f*S-_*x+d*M)*I,e[11]=(g*x-u*S-p*M)*I,e[12]=(a*P-o*N-c*v)*I,e[13]=(t*N-i*P+s*v)*I,e[14]=(_*C-f*E-m*M)*I,e[15]=(u*E-g*C+h*M)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,g=a+a,h=r*l,p=r*u,f=r*g,_=o*u,m=o*g,d=a*g,M=c*l,C=c*u,x=c*g,E=i.x,S=i.y,T=i.z;return s[0]=(1-(_+d))*E,s[1]=(p+x)*E,s[2]=(f-C)*E,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(h+d))*S,s[6]=(m+M)*S,s[7]=0,s[8]=(f+C)*T,s[9]=(m-M)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),c=Ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);const l=1/o,u=1/a,g=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=g,Wn.elements[9]*=g,Wn.elements[10]*=g,t.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Kn,c=!1){const l=this.elements,u=2*r/(t-e),g=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s);let f,_;if(c)f=r/(o-r),_=o*r/(o-r);else if(a===Kn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===rr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=g,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,c=!1){const l=this.elements,u=2/(t-e),g=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s);let f,_;if(c)f=1/(o-r),_=o/(o-r);else if(a===Kn)f=-2/(o-r),_=-(o+r)/(o-r);else if(a===rr)f=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=g,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ja.prototype.isMatrix4=!0;let xt=Ja;const Ds=new G,Wn=new xt,Lm=new G(0,0,0),Im=new G(1,1,1),Hi=new G,mo=new G,bn=new G,yh=new xt,Mh=new Ui;class Oi{constructor(e=0,t=0,i=0,s=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],g=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dm=0;const Sh=new G,Ns=new Ui,xi=new xt,go=new G,mr=new G,Nm=new G,Um=new Ui,bh=new G(1,0,0),Eh=new G(0,1,0),wh=new G(0,0,1),Th={type:"added"},Om={type:"removed"},Us={type:"childadded",child:null},Ol={type:"childremoved",child:null};class Vt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new G,t=new Oi,i=new Ui,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new nt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(mr,go,this.up):xi.lookAt(go,mr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(xi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Th),Us.child=e,this.dispatchEvent(Us),Us.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Th),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const g=c[l];r(e.shapes,g)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),g=o(e.shapes),h=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),g.length>0&&(i.shapes=g),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new G(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zi extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fm={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],h=u.position.distanceTo(g.position),p=.02,f=.005;l.inputState.pinching&&h>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=cu(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Fl(o,r,e+1/3),this.g=Fl(o,r,e),this.b=Fl(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return mt.workingToColorSpace(ln.copy(this),e),Math.round(ct(ln.r*255,0,255))*65536+Math.round(ct(ln.g*255,0,255))*256+Math.round(ct(ln.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(ln.copy(this),t);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const g=o-a;switch(l=u<=.5?g/(o+a):g/(2-o-a),o){case i:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-i)/g+2;break;case r:c=(i-s)/g+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=cn){mt.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,s=ln.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(_o);const i=kr(Wi.h,_o.h,t),s=kr(Wi.s,_o.s,t),r=kr(Wi.l,_o.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ht;ht.NAMES=yf;class cl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=t}clone(){return new cl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mf extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new G,yi=new G,zl=new G,Mi=new G,Os=new G,Fs=new G,Ah=new G,kl=new G,Bl=new G,Gl=new G,Vl=new Ft,Hl=new Ft,Wl=new Ft;class Nn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),yi.subVectors(i,t),zl.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(yi),c=qn.dot(zl),l=yi.dot(yi),u=yi.dot(zl),g=o*l-a*a;if(g===0)return r.set(0,0,0),null;const h=1/g,p=(l*c-a*u)*h,f=(o*u-a*c)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Vl.setScalar(0),Hl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Hl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Hl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),yi.subVectors(e,t),qn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,i),Fs.subVectors(r,i),kl.subVectors(e,i);const c=Os.dot(kl),l=Fs.dot(kl);if(c<=0&&l<=0)return t.copy(i);Bl.subVectors(e,s);const u=Os.dot(Bl),g=Fs.dot(Bl);if(u>=0&&g<=u)return t.copy(s);const h=c*g-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Os,o);Gl.subVectors(e,r);const p=Os.dot(Gl),f=Fs.dot(Gl);if(f>=0&&p<=f)return t.copy(r);const _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Fs,a);const m=u*f-p*g;if(m<=0&&g-u>=0&&p-f>=0)return Ah.subVectors(r,s),a=(g-u)/(g-u+(p-f)),t.copy(s).addScaledVector(Ah,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),xo.subVectors(this.max,gr),zs.subVectors(e.a,gr),ks.subVectors(e.b,gr),Bs.subVectors(e.c,gr),qi.subVectors(ks,zs),Xi.subVectors(Bs,ks),us.subVectors(zs,Bs);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-us.z,us.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,us.z,0,-us.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-us.y,us.x,0];return!ql(t,zs,ks,Bs,xo)||(t=[1,0,0,0,1,0,0,0,1],!ql(t,zs,ks,Bs,xo))?!1:(yo.crossVectors(qi,Xi),t=[yo.x,yo.y,yo.z],ql(t,zs,ks,Bs,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new G,new G,new G,new G,new G,new G,new G,new G],Xn=new G,vo=new rs,zs=new G,ks=new G,Bs=new G,qi=new G,Xi=new G,us=new G,gr=new G,xo=new G,yo=new G,hs=new G;function ql(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Xt=new G,Mo=new Te;let zm=0;class kn extends Fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pf,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class hu extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class du extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const km=new rs,_r=new G,Xl=new G;class os{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):km.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Xl)),this.expandByPoint(_r.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bm=0;const Rn=new xt,Yl=new Vt,Gs=new G,En=new rs,vr=new rs,Qt=new G;class Ht extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?du:hu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(En.min,vr.min),En.expandByPoint(Qt),Qt.addVectors(En.max,vr.max),En.expandByPoint(Qt)):(En.expandByPoint(vr.min),En.expandByPoint(vr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(e,l),Qt.add(Gs)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new kn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new G,c[v]=new G;const l=new G,u=new G,g=new G,h=new Te,p=new Te,f=new Te,_=new G,m=new G;function d(v,P,A){l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,P),g.fromBufferAttribute(i,A),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,P),f.fromBufferAttribute(r,A),u.sub(l),g.sub(l),p.sub(h),f.sub(h);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(g,-p.y).multiplyScalar(N),m.copy(g).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(N),a[v].add(_),a[P].add(_),a[A].add(_),c[v].add(m),c[P].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,P=M.length;v<P;++v){const A=M[v],N=A.start,q=A.count;for(let V=N,k=N+q;V<k;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const C=new G,x=new G,E=new G,S=new G;function T(v){E.fromBufferAttribute(s,v),S.copy(E);const P=a[v];C.copy(P),C.sub(E.multiplyScalar(E.dot(P))).normalize(),x.crossVectors(S,P);const N=x.dot(c[v])<0?-1:1;o.setXYZW(v,C.x,C.y,C.z,N)}for(let v=0,P=M.length;v<P;++v){const A=M[v],N=A.start,q=A.count;for(let V=N,k=N+q;V<k;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,g=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const f=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),a.fromBufferAttribute(i,f),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),g.subVectors(s,r),u.cross(g),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,g=a.normalized,h=new l.constructor(c.length*u);let p=0,f=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)h[f++]=l[p++]}return new kn(h,u,g)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,g=l.length;u<g;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let g=0,h=l.length;g<h;g++){const p=l[g];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],g=r[l];for(let h=0,p=g.length;h<p;h++)u.push(g[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const g=o[l];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new G,Gm=new G,Vm=new nt;class ui{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$l.subVectors(i,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta($l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vm.getNormalMatrix(e),s=this.coplanarPoint($l).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hm=0;class as extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Qs,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=$c,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ui().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new G,Jl=new G,So=new G,bo=new G;class ur{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jl.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),bo.copy(this.origin).sub(Jl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=bo.dot(this.direction),c=-bo.dot(So),l=bo.lengthSq(),u=Math.abs(1-o*o);let g,h,p,f;if(u>0)if(g=o*c-a,h=o*a-c,f=r*u,g>=0)if(h>=-f)if(h<=f){const _=1/u;g*=_,h*=_,p=g*(g+o*h+2*a)+h*(o*g+h+2*c)+l}else h=r,g=Math.max(0,-(o*h+a)),p=-g*g+h*(h+2*c)+l;else h=-r,g=Math.max(0,-(o*h+a)),p=-g*g+h*(h+2*c)+l;else h<=-f?(g=Math.max(0,-(-o*r+a)),h=g>0?-r:Math.min(Math.max(-r,-c),r),p=-g*g+h*(h+2*c)+l):h<=f?(g=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(g=Math.max(0,-(o*r+a)),h=g>0?r:Math.min(Math.max(-r,-c),r),p=-g*g+h*(h+2*c)+l);else h=o>0?-r:r,g=Math.max(0,-(o*h+a)),p=-g*g+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jl).addScaledVector(So,h),p}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),g>=0?(a=(e.min.z-h.z)*g,c=(e.max.z-h.z)*g):(a=(e.max.z-h.z)*g,c=(e.min.z-h.z)*g),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,g=e.x-o.x,h=e.y-o.y,p=e.z-o.z,f=t.x-o.x,_=t.y-o.y,m=t.z-o.z,d=i.x-o.x,M=i.y-o.y,C=i.z-o.z,x=Math.abs(c),E=Math.abs(l),S=Math.abs(u);let T,v,P,A,N,q,V,k,I,O,B,Q;if(x>=E&&x>=S?(P=c,q=g,I=f,Q=d,c>=0?(T=l,v=u,A=h,N=p,V=_,k=m,O=M,B=C):(T=u,v=l,A=p,N=h,V=m,k=_,O=C,B=M)):E>=S?(P=l,q=h,I=_,Q=M,l>=0?(T=u,v=c,A=p,N=g,V=m,k=f,O=C,B=d):(T=c,v=u,A=g,N=p,V=f,k=m,O=d,B=C)):(P=u,q=p,I=m,Q=C,u>=0?(T=c,v=l,A=g,N=h,V=f,k=_,O=d,B=M):(T=l,v=c,A=h,N=g,V=_,k=f,O=M,B=d)),P===0)return null;const Y=T/P,W=v/P,te=1/P,j=A-Y*q,ce=N-W*q,le=V-Y*I,fe=k-W*I,U=O-Y*Q,y=B-W*Q,L=U*fe-y*le,J=j*y-ce*U,Z=le*ce-fe*j;if(s){if(L<0||J<0||Z<0)return null}else if((L<0||J<0||Z<0)&&(L>0||J>0||Z>0))return null;const w=L+J+Z;if(w===0)return null;const R=te*(L*q+J*I+Z*Q);return(w>0?R<0:R>0)?null:this.at(R/w,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class to extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ch=new xt,ds=new ur,Eo=new os,Rh=new G,wo=new G,To=new G,Ao=new G,Zl=new G,Co=new G,Ph=new G,Ro=new G;class _n extends Vt{constructor(e=new Ht,t=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],g=r[c];u!==0&&(Zl.fromBufferAttribute(g,e),o?Co.addScaledVector(Zl,u):Co.addScaledVector(Zl.sub(t),u))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Eo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Eo,Rh)===null||ds.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(Ch.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Ch),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=h.length;f<_;f++){const m=h[f],d=o[m.materialIndex],M=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,E=C;x<E;x+=3){const S=a.getX(x),T=a.getX(x+1),v=a.getX(x+2);s=Po(this,d,e,i,l,u,g,S,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=f,d=_;m<d;m+=3){const M=a.getX(m),C=a.getX(m+1),x=a.getX(m+2);s=Po(this,o,e,i,l,u,g,M,C,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let f=0,_=h.length;f<_;f++){const m=h[f],d=o[m.materialIndex],M=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,E=C;x<E;x+=3){const S=x,T=x+1,v=x+2;s=Po(this,d,e,i,l,u,g,S,T,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=f,d=_;m<d;m+=3){const M=m,C=m+1,x=m+2;s=Po(this,o,e,i,l,u,g,M,C,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wm(n,e,t,i,s,r,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ts,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ro);return l<t.near||l>t.far?null:{distance:l,point:Ro.clone(),object:n}}function Po(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,wo),n.getVertexPosition(c,To),n.getVertexPosition(l,Ao);const u=Wm(n,e,t,i,wo,To,Ao,Ph);if(u){const g=new G;Nn.getBarycoord(Ph,wo,To,Ao,g),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,c,l,g,new Te)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,c,l,g,new Te)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,c,l,g,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new G,materialIndex:0};Nn.getNormal(wo,To,Ao,h.normal),u.face=h,u.barycoord=g}return u}class fu extends sn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=jt,u=jt,g,h){super(null,o,a,c,l,u,s,r,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ec extends kn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vs=new xt,Lh=new xt,Lo=[],Ih=new rs,qm=new xt,xr=new _n,yr=new os;class wc extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Ih.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Ih)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),yr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(i),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Lh.multiplyMatrices(i,Vs),xr.matrixWorld=Lh,xr.raycast(e,Lo);for(let o=0,a=Lo.length;o<a;o++){const c=Lo[o];c.instanceId=r,c.object=this,t.push(c)}Lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fu(new Float32Array(s*this.count),s,this.count,tl,On));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fs=new os,Xm=new Te(.5,.5),Io=new G;class ul{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],g=r[5],h=r[6],p=r[7],f=r[8],_=r[9],m=r[10],d=r[11],M=r[12],C=r[13],x=r[14],E=r[15];if(s[0].setComponents(l-o,p-u,d-f,E-M).normalize(),s[1].setComponents(l+o,p+u,d+f,E+M).normalize(),s[2].setComponents(l+a,p+g,d+_,E+C).normalize(),s[3].setComponents(l-a,p-g,d-_,E-C).normalize(),i)s[4].setComponents(c,h,m,x).normalize(),s[5].setComponents(l-c,p-h,d-m,E-x).normalize();else if(s[4].setComponents(l-c,p-h,d-m,E-x).normalize(),t===Kn)s[5].setComponents(l+c,p+h,d+m,E+x).normalize();else if(t===rr)s[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=Xm.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pu extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new G,Ha=new G,Dh=new xt,Mr=new ur,Do=new os,Kl=new G,Nh=new G;class Ym extends Vt{constructor(e=new Ht,t=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Va.fromBufferAttribute(t,s-1),Ha.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Va.distanceTo(Ha);e.setAttribute("lineDistance",new Mt(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Dh.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=p,m=f-1;_<m;_+=l){const d=u.getX(_),M=u.getX(_+1),C=No(this,e,Mr,c,d,M,_);C&&t.push(C)}if(this.isLineLoop){const _=u.getX(f-1),m=u.getX(p),d=No(this,e,Mr,c,_,m,f-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=p,m=f-1;_<m;_+=l){const d=No(this,e,Mr,c,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=No(this,e,Mr,c,f-1,p,f-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function No(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Va.fromBufferAttribute(a,s),Ha.fromBufferAttribute(a,r),t.distanceSqToSegment(Va,Ha,Kl,Nh)>i)return;Kl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:Nh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class mu extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uh=new xt,Tc=new ur,Uo=new os,Oo=new G;class Sf extends Vt{constructor(e=new Ht,t=new mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;Uh.copy(s).invert(),Tc.copy(e.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,g=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let f=h,_=p;f<_;f++){const m=l.getX(f);Oo.fromBufferAttribute(g,m),Oh(Oo,m,c,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let f=h,_=p;f<_;f++)Oo.fromBufferAttribute(g,f),Oh(Oo,f,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oh(n,e,t,i,s,r,o){const a=Tc.distanceSqToPoint(n);if(a<t){const c=new G;Tc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class gu extends sn{constructor(e=[],t=ns,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _u extends sn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends sn{constructor(e,t,i=ti,s,r,o,a=jt,c=jt,l,u=vi,g=1){if(u!==vi&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:g};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bf extends or{constructor(e,t=ti,i=ns,s,r,o=jt,a=jt,c,l=vi){const u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vu extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zi extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],g=[];let h=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(g,2));function f(_,m,d,M,C,x,E,S,T,v,P){const A=x/T,N=E/v,q=x/2,V=E/2,k=S/2,I=T+1,O=v+1;let B=0,Q=0;const Y=new G;for(let W=0;W<O;W++){const te=W*N-V;for(let j=0;j<I;j++){const ce=j*A-q;Y[_]=ce*M,Y[m]=te*C,Y[d]=k,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=S>0?1:-1,u.push(Y.x,Y.y,Y.z),g.push(j/T),g.push(1-W/v),B+=1}}for(let W=0;W<v;W++)for(let te=0;te<T;te++){const j=h+te+I*W,ce=h+te+I*(W+1),le=h+(te+1)+I*(W+1),fe=h+(te+1)+I*W;c.push(j,ce,fe),c.push(ce,le,fe),Q+=6}a.addGroup(p,Q,P),p+=Q,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hl extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new G,u=new Te;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let g=0,h=3;g<=t;g++,h+=3){const p=i+g/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class no extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],g=[],h=[],p=[];let f=0;const _=[],m=i/2;let d=0;M(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(p,2));function M(){const x=new G,E=new G;let S=0;const T=(t-e)/i;for(let v=0;v<=r;v++){const P=[],A=v/r,N=A*(t-e)+e;for(let q=0;q<=s;q++){const V=q/s,k=V*c+a,I=Math.sin(k),O=Math.cos(k);E.x=N*I,E.y=-A*i+m,E.z=N*O,g.push(E.x,E.y,E.z),x.set(I,T,O).normalize(),h.push(x.x,x.y,x.z),p.push(V,1-A),P.push(f++)}_.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){const A=_[P][v],N=_[P+1][v],q=_[P+1][v+1],V=_[P][v+1];(e>0||P!==0)&&(u.push(A,N,V),S+=3),(t>0||P!==r-1)&&(u.push(N,q,V),S+=3)}l.addGroup(d,S,0),d+=S}function C(x){const E=f,S=new Te,T=new G;let v=0;const P=x===!0?e:t,A=x===!0?1:-1;for(let q=1;q<=s;q++)g.push(0,m*A,0),h.push(0,A,0),p.push(.5,.5),f++;const N=f;for(let q=0;q<=s;q++){const k=q/s*c+a,I=Math.cos(k),O=Math.sin(k);T.x=P*O,T.y=m*A,T.z=P*I,g.push(T.x,T.y,T.z),h.push(0,A,0),S.x=I*.5+.5,S.y=O*.5*A+.5,p.push(S.x,S.y),f++}for(let q=0;q<s;q++){const V=E+q,k=N+q;x===!0?u.push(k,k+1,V):u.push(k+1,k,V),v+=3}l.addGroup(d,v,x===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class As extends no{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new As(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dl extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const C=new G,x=new G,E=new G;for(let S=0;S<t.length;S+=3)p(t[S+0],C),p(t[S+1],x),p(t[S+2],E),c(C,x,E,M)}function c(M,C,x,E){const S=E+1,T=[];for(let v=0;v<=S;v++){T[v]=[];const P=M.clone().lerp(x,v/S),A=C.clone().lerp(x,v/S),N=S-v;for(let q=0;q<=N;q++)q===0&&v===S?T[v][q]=P:T[v][q]=P.clone().lerp(A,q/N)}for(let v=0;v<S;v++)for(let P=0;P<2*(S-v)-1;P++){const A=Math.floor(P/2);P%2===0?(h(T[v][A+1]),h(T[v+1][A]),h(T[v][A])):(h(T[v][A+1]),h(T[v+1][A+1]),h(T[v+1][A]))}}function l(M){const C=new G;for(let x=0;x<r.length;x+=3)C.x=r[x+0],C.y=r[x+1],C.z=r[x+2],C.normalize().multiplyScalar(M),r[x+0]=C.x,r[x+1]=C.y,r[x+2]=C.z}function u(){const M=new G;for(let C=0;C<r.length;C+=3){M.x=r[C+0],M.y=r[C+1],M.z=r[C+2];const x=m(M)/2/Math.PI+.5,E=d(M)/Math.PI+.5;o.push(x,1-E)}f(),g()}function g(){for(let M=0;M<o.length;M+=6){const C=o[M+0],x=o[M+2],E=o[M+4],S=Math.max(C,x,E),T=Math.min(C,x,E);S>.9&&T<.1&&(C<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function p(M,C){const x=M*3;C.x=e[x+0],C.y=e[x+1],C.z=e[x+2]}function f(){const M=new G,C=new G,x=new G,E=new G,S=new Te,T=new Te,v=new Te;for(let P=0,A=0;P<r.length;P+=9,A+=6){M.set(r[P+0],r[P+1],r[P+2]),C.set(r[P+3],r[P+4],r[P+5]),x.set(r[P+6],r[P+7],r[P+8]),S.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),v.set(o[A+4],o[A+5]),E.copy(M).add(C).add(x).divideScalar(3);const N=m(E);_(S,A+0,M,N),_(T,A+2,C,N),_(v,A+4,x,N)}}function _(M,C,x,E){E<0&&M.x===1&&(o[C]=M.x-1),x.x===0&&x.z===0&&(o[C]=E/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.vertices,e.indices,e.radius,e.detail)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Te:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new G,s=[],r=[],o=[],a=new G,c=new xt;for(let p=0;p<=e;p++){const f=p/e;s[p]=this.getTangentAt(f,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),g=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),g<=l&&(l=g,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(ct(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ct(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fl extends ii{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*g+this.aX,l=h*g+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ef extends fl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xu(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,g){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+g)+(c-a)/g;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Fh=new G,zh=new G,Ql=new xu,jl=new xu,ec=new xu;class yu extends ii{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new G){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(zh.subVectors(s[0],s[1]).add(s[0]),l=zh);const g=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fh),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(l.distanceToSquared(g),p),_=Math.pow(g.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Ql.initNonuniformCatmullRom(l.x,g.x,h.x,u.x,f,_,m),jl.initNonuniformCatmullRom(l.y,g.y,h.y,u.y,f,_,m),ec.initNonuniformCatmullRom(l.z,g.z,h.z,u.z,f,_,m)}else this.curveType==="catmullrom"&&(Ql.initCatmullRom(l.x,g.x,h.x,u.x,this.tension),jl.initCatmullRom(l.y,g.y,h.y,u.y,this.tension),ec.initCatmullRom(l.z,g.z,h.z,u.z,this.tension));return i.set(Ql.calc(c),jl.calc(c),ec.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function $m(n,e){const t=1-n;return t*t*e}function Jm(n,e){return 2*(1-n)*n*e}function Zm(n,e){return n*n*e}function Br(n,e,t,i){return $m(n,e)+Jm(n,t)+Zm(n,i)}function Km(n,e){const t=1-n;return t*t*t*e}function Qm(n,e){const t=1-n;return 3*t*t*n*e}function jm(n,e){return 3*(1-n)*n*n*e}function e0(n,e){return n*n*n*e}function Gr(n,e,t,i,s){return Km(n,e)+Qm(n,t)+jm(n,i)+e0(n,s)}class Mu extends ii{constructor(e=new Te,t=new Te,i=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(e,s.x,r.x,o.x,a.x),Gr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wf extends ii{constructor(e=new G,t=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new G){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(e,s.x,r.x,o.x,a.x),Gr(e,s.y,r.y,o.y,a.y),Gr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Su extends ii{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tf extends ii{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bu extends ii{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends ii{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wu extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],g=s[o>s.length-3?s.length-1:o+2];return i.set(kh(a,c.x,l.x,u.x,g.x),kh(a,c.y,l.y,u.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Te().fromArray(s))}return this}}var Wa=Object.freeze({__proto__:null,ArcCurve:Ef,CatmullRomCurve3:yu,CubicBezierCurve:Mu,CubicBezierCurve3:wf,EllipseCurve:fl,LineCurve:Su,LineCurve3:Tf,QuadraticBezierCurve:bu,QuadraticBezierCurve3:Eu,SplineCurve:wu});class Af extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Wa[s.type]().fromJSON(s))}return this}}class Ac extends Af{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Su(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new bu(this.currentPoint.clone(),new Te(e,t),new Te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Mu(this.currentPoint.clone(),new Te(e,t),new Te(i,s),new Te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new wu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new fl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const g=l.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class io extends Ac{constructor(e){super(e),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Ac().fromJSON(s))}return this}}function t0(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Cf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=o0(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,g=c;for(let h=t;h<s;h+=t){const p=n[h],f=n[h+1];p<a&&(a=p),f<c&&(c=f),p>u&&(u=p),f>g&&(g=f)}l=Math.max(u-a,g-c),l=l!==0?32767/l:0}return $r(r,o,t,a,c,l,0),o}function Cf(n,e,t,i,s){let r;if(s===_0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Bh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Bh(o/i|0,n[o],n[o+1],r);return r&&ar(r,r.next)&&(Zr(r),r=r.next),r}function ws(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ar(t,t.next)||zt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $r(n,e,t,i,s,r,o){if(!n)return;!o&&r&&h0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?i0(n,i,s,r):n0(n)){e.push(c.i,n.i,l.i),Zr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=s0(ws(n),e),$r(n,e,t,i,s,r,2)):o===2&&r0(n,e,t,i,s,r):$r(ws(n),e,t,i,s,r,1);break}}}function n0(n){const e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),g=Math.min(a,c,l),h=Math.max(s,r,o),p=Math.max(a,c,l);let f=i.next;for(;f!==e;){if(f.x>=u&&f.x<=h&&f.y>=g&&f.y<=p&&Cr(s,a,r,c,o,l,f.x,f.y)&&zt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function i0(n,e,t,i){const s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,g=r.y,h=o.y,p=Math.min(a,c,l),f=Math.min(u,g,h),_=Math.max(a,c,l),m=Math.max(u,g,h),d=Cc(p,f,e,t,i),M=Cc(_,m,e,t,i);let C=n.prevZ,x=n.nextZ;for(;C&&C.z>=d&&x&&x.z<=M;){if(C.x>=p&&C.x<=_&&C.y>=f&&C.y<=m&&C!==s&&C!==o&&Cr(a,u,c,g,l,h,C.x,C.y)&&zt(C.prev,C,C.next)>=0||(C=C.prevZ,x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==s&&x!==o&&Cr(a,u,c,g,l,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;C&&C.z>=d;){if(C.x>=p&&C.x<=_&&C.y>=f&&C.y<=m&&C!==s&&C!==o&&Cr(a,u,c,g,l,h,C.x,C.y)&&zt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;x&&x.z<=M;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==s&&x!==o&&Cr(a,u,c,g,l,h,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function s0(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ar(i,s)&&Pf(i,t,t.next,s)&&Jr(i,s)&&Jr(s,i)&&(e.push(i.i,t.i,s.i),Zr(t),Zr(t.next),t=n=s),t=t.next}while(t!==n);return ws(t)}function r0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&p0(o,a)){let c=Lf(o,a);o=ws(o,o.next),c=ws(c,c.next),$r(o,e,t,i,s,r,0),$r(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function o0(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Cf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(f0(l))}s.sort(a0);for(let r=0;r<s.length;r++)t=l0(s[r],t);return t}function a0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function l0(n,e){const t=c0(n,e);if(!t)return e;const i=Lf(t,n);return ws(i,i.next),ws(t,t.next)}function c0(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ar(n,t))return t;do{if(ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=i&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Rf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const g=Math.abs(s-t.y)/(i-t.x);Jr(t,n)&&(g<u||g===u&&(t.x>o.x||t.x===o.x&&u0(o,t)))&&(o=t,u=g)}t=t.next}while(t!==a);return o}function u0(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function h0(n,e,t,i){let s=n;do s.z===0&&(s.z=Cc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,d0(s)}function d0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Cc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function f0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Cr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Rf(n,e,t,i,s,r,o,a)}function p0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!m0(n,e)&&(Jr(n,e)&&Jr(e,n)&&g0(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||ar(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ar(n,e){return n.x===e.x&&n.y===e.y}function Pf(n,e,t,i){const s=zo(zt(n,e,t)),r=zo(zt(n,e,i)),o=zo(zt(t,i,n)),a=zo(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Fo(n,t,e)||r===0&&Fo(n,i,e)||o===0&&Fo(t,n,i)||a===0&&Fo(t,e,i))}function Fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zo(n){return n>0?1:n<0?-1:0}function m0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Jr(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function g0(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lf(n,e){const t=Rc(n.i,n.x,n.y),i=Rc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Bh(n,e,t,i){const s=Rc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class v0{static triangulate(e,t,i=2){return t0(e,t,i)}}class Ms{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ms.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Gh(e),Vh(i,e);let o=e.length;t.forEach(Gh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Vh(i,t[c]);const a=v0.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Gh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class hr extends Ht{constructor(e=new io([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:x0;let C,x=!1,E,S,T,v;if(d){C=d.getSpacedPoints(u),x=!0,h=!1;const H=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(u,H),S=new G,T=new G,v=new G}h||(m=0,p=0,f=0,_=0);const P=a.extractPoints(l);let A=P.shape;const N=P.holes;if(!Ms.isClockWise(A)){A=A.reverse();for(let H=0,ne=N.length;H<ne;H++){const F=N[H];Ms.isClockWise(F)&&(N[H]=F.reverse())}}function V(H){const F=10000000000000001e-36;let ee=H[0];for(let ie=1;ie<=H.length;ie++){const $=ie%H.length,ae=H[$],ye=ae.x-ee.x,be=ae.y-ee.y,K=ye*ye+be*be,ze=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(ee.x),Math.abs(ee.y)),Ae=F*ze*ze;if(K<=Ae){H.splice($,1),ie--;continue}ee=ae}}V(A),N.forEach(V);const k=N.length,I=A;for(let H=0;H<k;H++){const ne=N[H];A=A.concat(ne)}function O(H,ne,F){return ne||_t("ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(ne,F)}const B=A.length;function Q(H,ne,F){let ee,ie,$;const ae=H.x-ne.x,ye=H.y-ne.y,be=F.x-H.x,K=F.y-H.y,ze=ae*ae+ye*ye,Ae=ae*K-ye*be;if(Math.abs(Ae)>Number.EPSILON){const X=Math.sqrt(ze),b=Math.sqrt(be*be+K*K),oe=ne.x-ye/X,ue=ne.y+ae/X,pe=F.x-K/b,Ee=F.y+be/b,Ce=((pe-oe)*K-(Ee-ue)*be)/(ae*K-ye*be);ee=oe+ae*Ce-H.x,ie=ue+ye*Ce-H.y;const _e=ee*ee+ie*ie;if(_e<=2)return new Te(ee,ie);$=Math.sqrt(_e/2)}else{let X=!1;ae>Number.EPSILON?be>Number.EPSILON&&(X=!0):ae<-Number.EPSILON?be<-Number.EPSILON&&(X=!0):Math.sign(ye)===Math.sign(K)&&(X=!0),X?(ee=-ye,ie=ae,$=Math.sqrt(ze)):(ee=ae,ie=ye,$=Math.sqrt(ze/2))}return new Te(ee/$,ie/$)}const Y=[];for(let H=0,ne=I.length,F=ne-1,ee=H+1;H<ne;H++,F++,ee++)F===ne&&(F=0),ee===ne&&(ee=0),Y[H]=Q(I[H],I[F],I[ee]);const W=[];let te,j=Y.concat();for(let H=0,ne=k;H<ne;H++){const F=N[H];te=[];for(let ee=0,ie=F.length,$=ie-1,ae=ee+1;ee<ie;ee++,$++,ae++)$===ie&&($=0),ae===ie&&(ae=0),te[ee]=Q(F[ee],F[$],F[ae]);W.push(te),j=j.concat(te)}let ce;if(m===0)ce=Ms.triangulateShape(I,N);else{const H=[],ne=[];for(let F=0;F<m;F++){const ee=F/m,ie=p*Math.cos(ee*Math.PI/2),$=f*Math.sin(ee*Math.PI/2)+_;for(let ae=0,ye=I.length;ae<ye;ae++){const be=O(I[ae],Y[ae],$);J(be.x,be.y,-ie),ee===0&&H.push(be)}for(let ae=0,ye=k;ae<ye;ae++){const be=N[ae];te=W[ae];const K=[];for(let ze=0,Ae=be.length;ze<Ae;ze++){const X=O(be[ze],te[ze],$);J(X.x,X.y,-ie),ee===0&&K.push(X)}ee===0&&ne.push(K)}}ce=Ms.triangulateShape(H,ne)}const le=ce.length,fe=f+_;for(let H=0;H<B;H++){const ne=h?O(A[H],j[H],fe):A[H];x?(T.copy(E.normals[0]).multiplyScalar(ne.x),S.copy(E.binormals[0]).multiplyScalar(ne.y),v.copy(C[0]).add(T).add(S),J(v.x,v.y,v.z)):J(ne.x,ne.y,0)}for(let H=1;H<=u;H++)for(let ne=0;ne<B;ne++){const F=h?O(A[ne],j[ne],fe):A[ne];x?(T.copy(E.normals[H]).multiplyScalar(F.x),S.copy(E.binormals[H]).multiplyScalar(F.y),v.copy(C[H]).add(T).add(S),J(v.x,v.y,v.z)):J(F.x,F.y,g/u*H)}for(let H=m-1;H>=0;H--){const ne=H/m,F=p*Math.cos(ne*Math.PI/2),ee=f*Math.sin(ne*Math.PI/2)+_;for(let ie=0,$=I.length;ie<$;ie++){const ae=O(I[ie],Y[ie],ee);J(ae.x,ae.y,g+F)}for(let ie=0,$=N.length;ie<$;ie++){const ae=N[ie];te=W[ie];for(let ye=0,be=ae.length;ye<be;ye++){const K=O(ae[ye],te[ye],ee);x?J(K.x,K.y+C[u-1].y,C[u-1].x+F):J(K.x,K.y,g+F)}}}U(),y();function U(){const H=s.length/3;if(h){let ne=0,F=B*ne;for(let ee=0;ee<le;ee++){const ie=ce[ee];Z(ie[2]+F,ie[1]+F,ie[0]+F)}ne=u+m*2,F=B*ne;for(let ee=0;ee<le;ee++){const ie=ce[ee];Z(ie[0]+F,ie[1]+F,ie[2]+F)}}else{for(let ne=0;ne<le;ne++){const F=ce[ne];Z(F[2],F[1],F[0])}for(let ne=0;ne<le;ne++){const F=ce[ne];Z(F[0]+B*u,F[1]+B*u,F[2]+B*u)}}i.addGroup(H,s.length/3-H,0)}function y(){const H=s.length/3;let ne=0;L(I,ne),ne+=I.length;for(let F=0,ee=N.length;F<ee;F++){const ie=N[F];L(ie,ne),ne+=ie.length}i.addGroup(H,s.length/3-H,1)}function L(H,ne){let F=H.length;for(;--F>=0;){const ee=F;let ie=F-1;ie<0&&(ie=H.length-1);for(let $=0,ae=u+m*2;$<ae;$++){const ye=B*$,be=B*($+1),K=ne+ee+ye,ze=ne+ie+ye,Ae=ne+ie+be,X=ne+ee+be;w(K,ze,Ae,X)}}}function J(H,ne,F){c.push(H),c.push(ne),c.push(F)}function Z(H,ne,F){R(H),R(ne),R(F);const ee=s.length/3,ie=M.generateTopUV(i,s,ee-3,ee-2,ee-1);z(ie[0]),z(ie[1]),z(ie[2])}function w(H,ne,F,ee){R(H),R(ne),R(ee),R(ne),R(F),R(ee);const ie=s.length/3,$=M.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);z($[0]),z($[1]),z($[3]),z($[1]),z($[2]),z($[3])}function R(H){s.push(c[H*3+0]),s.push(c[H*3+1]),s.push(c[H*3+2])}function z(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return y0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wa[s.type]().fromJSON(s)),new hr(i,e.options)}}const x0={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new Te(r,o),new Te(a,c),new Te(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],g=e[i*3+2],h=e[s*3],p=e[s*3+1],f=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Te(o,1-c),new Te(l,1-g),new Te(h,1-f),new Te(_,1-d)]:[new Te(a,1-c),new Te(u,1-g),new Te(p,1-f),new Te(m,1-d)]}};function y0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class so extends dl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new so(e.radius,e.detail)}}class Cs extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,g=e/a,h=t/c,p=[],f=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*h-o;for(let C=0;C<l;C++){const x=C*g-r;f.push(x,-M,0),_.push(0,0,1),m.push(C/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){const C=M+l*d,x=M+l*(d+1),E=M+1+l*(d+1),S=M+1+l*d;p.push(C,x,S),p.push(x,E,S)}this.setIndex(p),this.setAttribute("position",new Mt(f,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class pl extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],g=new G,h=new G,p=[],f=[],_=[],m=[];for(let d=0;d<=i;d++){const M=[],C=d/i,x=o+C*a,E=e*Math.cos(x),S=Math.sqrt(e*e-E*E);let T=0;d===0&&o===0?T=.5/t:d===i&&c===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){const P=v/t,A=s+P*r;g.x=-S*Math.cos(A),g.y=E,g.z=S*Math.sin(A),f.push(g.x,g.y,g.z),h.copy(g).normalize(),_.push(h.x,h.y,h.z),m.push(P+T,1-C),M.push(l++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const C=u[d][M+1],x=u[d][M],E=u[d+1][M],S=u[d+1][M+1];(d!==0||o>0)&&p.push(C,x,S),(d!==i-1||c<Math.PI)&&p.push(x,E,S)}this.setIndex(p),this.setAttribute("position",new Mt(f,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ml extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],g=[],h=new G,p=new G,f=new G;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let d=0;d<=s;d++){const M=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(M),p.y=(e+t*Math.cos(m))*Math.sin(M),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),g.push(d/s),g.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const d=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,C=(s+1)*(_-1)+m,x=(s+1)*_+m;c.push(d,M,x),c.push(M,C,x)}this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class gl extends Ht{constructor(e=new Eu(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new G,c=new G,l=new Te;let u=new G;const g=[],h=[],p=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(p,2));function _(){for(let C=0;C<t;C++)m(C);m(r===!1?t:0),M(),d()}function m(C){u=e.getPointAt(C/t,u);const x=o.normals[C],E=o.binormals[C];for(let S=0;S<=s;S++){const T=S/s*Math.PI*2,v=Math.sin(T),P=-Math.cos(T);c.x=P*x.x+v*E.x,c.y=P*x.y+v*E.y,c.z=P*x.z+v*E.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,g.push(a.x,a.y,a.z)}}function d(){for(let C=1;C<=t;C++)for(let x=1;x<=s;x++){const E=(s+1)*(C-1)+(x-1),S=(s+1)*C+(x-1),T=(s+1)*C+x,v=(s+1)*(C-1)+x;f.push(E,S,v),f.push(S,T,v)}}function M(){for(let C=0;C<=t;C++)for(let x=0;x<=s;x++)l.x=C/t,l.y=x/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gl(new Wa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Hh(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const s in i)e[s]=i[s]}return e}function Hh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function M0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function If(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Df={clone:lr,merge:fn};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Nf extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $s extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uf extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Of extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class E0 extends pu{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class _l extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ff extends _l{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const tc=new xt,Wh=new G,qh=new G;class Tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(tc,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ko=new G,Bo=new Ui,ai=new G;class Au extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Bo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Bo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ko,Bo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Bo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new G,Xh=new Te,Yh=new Te;class wn extends Au{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,Yh),t.subVectors(Yh,Xh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class w0 extends Tu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class vl extends _l{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ro extends Au{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class T0 extends Tu{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends _l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new T0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Hs=-90,Ws=1;class zf extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Hs,Ws,e,t);s.layers=this.layers,this.add(s);const r=new wn(Hs,Ws,e,t);r.layers=this.layers,this.add(r);const o=new wn(Hs,Ws,e,t);o.layers=this.layers,this.add(o);const a=new wn(Hs,Ws,e,t);a.layers=this.layers,this.add(a);const c=new wn(Hs,Ws,e,t);c.layers=this.layers,this.add(c);const l=new wn(Hs,Ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class kf extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $h=new xt;class Bf{constructor(e,t,i=0,s=1/0){this.ray=new ur(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):_t("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(e,t=!0,i=[]){return Pc(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Pc(e[s],this,i,t);return i.sort(Jh),i}}function Jh(n,e){return n.distance-e.distance}function Pc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Pc(r[o],e,t,!0)}}class Lc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zu=class Zu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Zu.prototype.isMatrix2=!0;let Ic=Zu;class Gf extends Fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zh(n,e,t,i){const s=A0(i);switch(t){case au:return n*e;case tl:return n*e/s.components*s.byteLength;case nl:return n*e/s.components*s.byteLength;case is:return n*e*2/s.components*s.byteLength;case il:return n*e*2/s.components*s.byteLength;case lu:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case sl:return n*e*4/s.components*s.byteLength;case Nr:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Or:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:case fa:return Math.max(n,16)*Math.max(e,8)/4;case ua:case da:return Math.max(n,8)*Math.max(e,8)/2;case pa:case ma:case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:case Hr:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Na:case Ua:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fa:case za:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wr:case ka:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A0(n){switch(n){case yn:case iu:return{byteLength:1,components:1};case ir:case su:case ni:return{byteLength:2,components:1};case ja:case el:return{byteLength:2,components:4};case ti:case Qa:case On:return{byteLength:4,components:1};case ru:case ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function C0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,g=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:g}}function i(a,c,l){const u=c.array,g=c.updateRanges;if(n.bindBuffer(l,a),g.length===0)n.bufferSubData(l,0,u);else{g.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<g.length;p++){const f=g[h],_=g[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++h,g[h]=_)}g.length=h+1;for(let p=0,f=g.length;p<f;p++){const _=g[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
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
#endif`,Ag=`uniform sampler2D dfgLUT;
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
}`,Cg=`
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
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
}`,F_=`#define DISTANCE
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
}`,z_=`#define DISTANCE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
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
}`,V_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,q_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,Y_=`#define MATCAP
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
}`,$_=`#define MATCAP
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
}`,J_=`#define NORMAL
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
}`,Z_=`#define NORMAL
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
}`,K_=`#define PHONG
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
}`,Q_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,nv=`#define TOON
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
}`,iv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 color;
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
}`,av=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:R0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:I0,alphatest_fragment:D0,alphatest_pars_fragment:N0,aomap_fragment:U0,aomap_pars_fragment:O0,batching_pars_vertex:F0,batching_vertex:z0,begin_vertex:k0,beginnormal_vertex:B0,bsdfs:G0,iridescence_fragment:V0,bumpmap_pars_fragment:H0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:Y0,color_fragment:$0,color_pars_fragment:J0,color_pars_vertex:Z0,color_vertex:K0,common:Q0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:ug,envmap_physical_pars_fragment:Mg,envmap_vertex:hg,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_fragment:vg,lights_lambert_pars_fragment:xg,lights_pars_begin:yg,lights_toon_fragment:Sg,lights_toon_pars_fragment:bg,lights_phong_fragment:Eg,lights_phong_pars_fragment:wg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Cg,lights_fragment_maps:Rg,lights_fragment_end:Pg,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Og,map_pars_fragment:Fg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:Gg,morphinstance_vertex:Vg,morphcolor_vertex:Hg,morphnormal_vertex:Wg,morphtarget_pars_vertex:qg,morphtarget_vertex:Xg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:Jg,normal_pars_vertex:Zg,normal_vertex:Kg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:o_,dithering_fragment:a_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:d_,shadowmap_vertex:f_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:__,skinnormal_vertex:v_,specularmap_fragment:x_,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:S_,transmission_fragment:b_,transmission_pars_fragment:E_,uv_pars_fragment:w_,uv_pars_vertex:T_,uv_vertex:A_,worldpos_vertex:C_,background_vert:R_,background_frag:P_,backgroundCube_vert:L_,backgroundCube_frag:I_,cube_vert:D_,cube_frag:N_,depth_vert:U_,depth_frag:O_,distance_vert:F_,distance_frag:z_,equirect_vert:k_,equirect_frag:B_,linedashed_vert:G_,linedashed_frag:V_,meshbasic_vert:H_,meshbasic_frag:W_,meshlambert_vert:q_,meshlambert_frag:X_,meshmatcap_vert:Y_,meshmatcap_frag:$_,meshnormal_vert:J_,meshnormal_frag:Z_,meshphong_vert:K_,meshphong_frag:Q_,meshphysical_vert:j_,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:ov,sprite_vert:av,sprite_frag:lv},De={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Jn={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Jn.physical={uniforms:fn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Go={r:0,b:0,g:0},cv=new xt,Hf=new nt;Hf.set(-1,0,0,0,1,0,0,0,1);function uv(n,e,t,i,s,r){const o=new ht(0);let a=s===!0?0:1,c,l,u=null,g=0,h=null;function p(M){let C=M.isScene===!0?M.background:null;if(C&&C.isTexture){const x=M.backgroundBlurriness>0;C=e.get(C,x)}return C}function f(M){let C=!1;const x=p(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,C){const x=p(C);x&&(x.isCubeTexture||x.mapping===eo)?(l===void 0&&(l=new _n(new zi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:lr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(C.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hf),l.material.toneMapped=mt.getTransfer(x.colorSpace)!==wt,(u!==x||g!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,g=x.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new _n(new Cs(2,2),new Gn({name:"BackgroundMaterial",uniforms:lr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=mt.getTransfer(x.colorSpace)!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||g!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,g=x.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,C){M.getRGB(Go,If(n)),t.buffers.color.setClear(Go.r,Go.g,Go.b,C,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,C=1){o.set(M),a=C,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:f,addToRenderList:_,dispose:d}}function hv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(N,q,V,k,I){let O=!1;const B=g(N,k,V,q);r!==B&&(r=B,l(r.object)),O=p(N,k,V,I),O&&f(N,k,V,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(N,q,V,k),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function g(N,q,V,k){const I=k.wireframe===!0;let O=i[q.id];O===void 0&&(O={},i[q.id]=O);const B=N.isInstancedMesh===!0?N.id:0;let Q=O[B];Q===void 0&&(Q={},O[B]=Q);let Y=Q[V.id];Y===void 0&&(Y={},Q[V.id]=Y);let W=Y[I];return W===void 0&&(W=h(c()),Y[I]=W),W}function h(N){const q=[],V=[],k=[];for(let I=0;I<t;I++)q[I]=0,V[I]=0,k[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:V,attributeDivisors:k,object:N,attributes:{},index:null}}function p(N,q,V,k){const I=r.attributes,O=q.attributes;let B=0;const Q=V.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const te=I[Y];let j=O[Y];if(j===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),te===void 0||te.attribute!==j||j&&te.data!==j.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function f(N,q,V,k){const I={},O=q.attributes;let B=0;const Q=V.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let te=O[Y];te===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));const j={};j.attribute=te,te&&te.data&&(j.data=te.data),I[Y]=j,B++}r.attributes=I,r.attributesNum=B,r.index=k}function _(){const N=r.newAttributes;for(let q=0,V=N.length;q<V;q++)N[q]=0}function m(N){d(N,0)}function d(N,q){const V=r.newAttributes,k=r.enabledAttributes,I=r.attributeDivisors;V[N]=1,k[N]===0&&(n.enableVertexAttribArray(N),k[N]=1),I[N]!==q&&(n.vertexAttribDivisor(N,q),I[N]=q)}function M(){const N=r.newAttributes,q=r.enabledAttributes;for(let V=0,k=q.length;V<k;V++)q[V]!==N[V]&&(n.disableVertexAttribArray(V),q[V]=0)}function C(N,q,V,k,I,O,B){B===!0?n.vertexAttribIPointer(N,q,V,I,O):n.vertexAttribPointer(N,q,V,k,I,O)}function x(N,q,V,k){_();const I=k.attributes,O=V.getAttributes(),B=q.defaultAttributeValues;for(const Q in O){const Y=O[Q];if(Y.location>=0){let W=I[Q];if(W===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){const te=W.normalized,j=W.itemSize,ce=e.get(W);if(ce===void 0)continue;const le=ce.buffer,fe=ce.type,U=ce.bytesPerElement,y=fe===n.INT||fe===n.UNSIGNED_INT||W.gpuType===Qa;if(W.isInterleavedBufferAttribute){const L=W.data,J=L.stride,Z=W.offset;if(L.isInstancedInterleavedBuffer){for(let w=0;w<Y.locationSize;w++)d(Y.location+w,L.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let w=0;w<Y.locationSize;w++)m(Y.location+w);n.bindBuffer(n.ARRAY_BUFFER,le);for(let w=0;w<Y.locationSize;w++)C(Y.location+w,j/Y.locationSize,fe,te,J*U,(Z+j/Y.locationSize*w)*U,y)}else{if(W.isInstancedBufferAttribute){for(let L=0;L<Y.locationSize;L++)d(Y.location+L,W.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let L=0;L<Y.locationSize;L++)m(Y.location+L);n.bindBuffer(n.ARRAY_BUFFER,le);for(let L=0;L<Y.locationSize;L++)C(Y.location+L,j/Y.locationSize,fe,te,j*U,j/Y.locationSize*L*U,y)}}else if(B!==void 0){const te=B[Q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(Y.location,te);break;case 3:n.vertexAttrib3fv(Y.location,te);break;case 4:n.vertexAttrib4fv(Y.location,te);break;default:n.vertexAttrib1fv(Y.location,te)}}}}M()}function E(){P();for(const N in i){const q=i[N];for(const V in q){const k=q[V];for(const I in k){const O=k[I];for(const B in O)u(O[B].object),delete O[B];delete k[I]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;const q=i[N.id];for(const V in q){const k=q[V];for(const I in k){const O=k[I];for(const B in O)u(O[B].object),delete O[B];delete k[I]}}delete i[N.id]}function T(N){for(const q in i){const V=i[q];for(const k in V){const I=V[k];if(I[N.id]===void 0)continue;const O=I[N.id];for(const B in O)u(O[B].object),delete O[B];delete I[N.id]}}}function v(N){for(const q in i){const V=i[q],k=N.isInstancedMesh===!0?N.id:0,I=V[k];if(I!==void 0){for(const O in I){const B=I[O];for(const Q in B)u(B[Q].object),delete B[Q];delete I[O]}delete V[k],Object.keys(V).length===0&&delete i[q]}}}function P(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function dv(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Fn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const v=T===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&T!==On&&!v&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(tt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const g=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:g,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:C,maxFragmentUniforms:x,maxSamples:E,samples:S}}function pv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ui,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){const p=g.length!==0||h||i!==0||s;return s=h,i=g.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,h){t=u(g,h,0)},this.setState=function(g,h,p){const f=g.clippingPlanes,_=g.clipIntersection,m=g.clipShadows,d=n.get(g);if(!s||f===null||f.length===0||r&&!m)r?u(null):l();else{const M=r?0:i,C=M*4;let x=d.clippingState||null;c.value=x,x=u(f,h,C,p);for(let E=0;E!==C;++E)x[E]=t[E];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(g,h,p,f){const _=g!==null?g.length:0;let m=null;if(_!==0){if(m=c.value,f!==!0||m===null){const d=p+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,x=p;C!==_;++C,x+=4)o.copy(g[C]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Js=4,mv=6,gv=20,_v=256,Sr=new ro,Kh=new ht;let nc=null,ic=0,sc=0,rc=!1;const vv=new G,ps=new G;class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=vv}=r;nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ni,format:Fn,colorSpace:qr,depthBuffer:!1},s=Qh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xv(r)),this._blurMaterial=Mv(r,e,t),this._ggxMaterial=yv(r,e,t)}return s}_compileMaterial(e){const t=new _n(new Ht,e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,i,s,r){const c=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,h=g.autoClear,p=g.toneMapping;g.getClearColor(Kh),g.toneMapping=Qn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new zi,new to({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(Kh),d=!0);for(let C=0;C<6;C++){const x=C%3;x===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):x===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));const E=this._cubeSize;qs(s,x*E,C>2?E:0,E,E),g.setRenderTarget(s),d&&g.render(_,c),g.render(e,c)}g.toneMapping=p,g.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ns||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),g=Math.sqrt(l*l-u*u),h=l*1.25,p=g*h,{_lodMax:f}=this,_=this._sizeLods[i],m=3*_*(i>f-Js?i-f+Js:0),d=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=f-t,qs(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(a,Sr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-i,qs(e,m,d,3*_,2*_),s.setRenderTarget(e),s.render(a,Sr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],g=3*u*(s>this._lodMax-Js?s-this._lodMax+Js:0),h=4*(this._cubeSize-u);qs(t,g,h,3*u,2*u),o.setRenderTarget(t),o.render(c,Sr)}}function xv(n){const e=[],t=[];let i=n;const s=n-Js+1+mv;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],g=6,h=6,p=3,f=new Float32Array(p*h*g),_=new Float32Array(p*h*g);for(let d=0;d<g;d++){const M=d%3*2/3-1,C=d>2?0:-1,x=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];f.set(x,p*h*d);for(let E=0;E<h;E++){const S=u[E*2]*2-1,T=u[E*2+1]*2-1;d===0?ps.set(1,T,S):d===1?ps.set(-S,1,-T):d===2?ps.set(-S,T,1):d===3?ps.set(-1,T,-S):d===4?ps.set(-S,-1,T):ps.set(S,T,-1),ps.toArray(_,(d*h+E)*p)}}const m=new Ht;m.setAttribute("position",new kn(f,p)),m.setAttribute("outputDirection",new kn(_,p)),t.push(new _n(m,null)),i>Js&&i--}return{lodMeshes:t,sizeLods:e}}function Qh(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yv(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Mv(n,e,t){return new Gn({name:"SphericalGaussianBlur",defines:{SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function jh(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ed(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ru extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:mi});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=tn),new zf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Sv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===qo||p===Xo)if(e.has(h)){const f=e.get(h).texture;return a(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const _=new Ru(f.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,f=p===qo||p===Xo,_=p===ns||p===Es;if(f||_){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Dc(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return f&&M&&M.height>0||_&&M&&c(M)?(i===null&&(i=new Dc(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===qo?h.mapping=ns:p===Xo&&(h.mapping=Es),h}function c(h){let p=0;const f=6;for(let _=0;_<f;_++)h[_]!==void 0&&p++;return p===f}function l(h){const p=h.target;p.removeEventListener("dispose",l);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function bv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ss("WebGLRenderer: "+i+" extension not supported."),s}}}function Ev(n,e,t,i){const s={},r=new WeakMap;function o(g){const h=g.target;h.index!==null&&e.remove(h.index);for(const f in h.attributes)e.remove(h.attributes[f]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(g,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(g){const h=g.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(g){const h=[],p=g.index,f=g.attributes.position;let _=0;if(f===void 0)return;if(p!==null){const M=p.array;_=p.version;for(let C=0,x=M.length;C<x;C+=3){const E=M[C+0],S=M[C+1],T=M[C+2];h.push(E,S,S,T,T,E)}}else{const M=f.array;_=f.version;for(let C=0,x=M.length/3-1;C<x;C+=3){const E=C+0,S=C+1,T=C+2;h.push(E,S,S,T,T,E)}}const m=new(f.count>=65535?du:hu)(h,1);m.version=_;const d=r.get(g);d&&e.remove(d),r.set(g,m)}function u(g){const h=r.get(g);if(h){const p=g.index;p!==null&&h.version<p.version&&l(g)}else l(g);return r.get(g)}return{get:a,update:c,getWireframeAttribute:u}}function wv(n,e,t){let i;function s(g){i=g}let r,o;function a(g){r=g.type,o=g.bytesPerElement}function c(g,h){n.drawElements(i,h,r,g*o),t.update(h,i,1)}function l(g,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,g*o,p),t.update(h,i,p))}function u(g,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,g,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Tv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Av(n,e,t){const i=new WeakMap,s=new Ft;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,g=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==g){let A=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var p=A;h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*S*4*g),v=new uu(T,E,S,g);v.type=On,v.needsUpdate=!0;const P=x*4;for(let N=0;N<g;N++){const q=d[N],V=M[N],k=C[N],I=E*S*4*N;for(let O=0;O<q.count;O++){const B=O*P;f===!0&&(s.fromBufferAttribute(q,O),T[I+B+0]=s.x,T[I+B+1]=s.y,T[I+B+2]=s.z,T[I+B+3]=0),_===!0&&(s.fromBufferAttribute(V,O),T[I+B+4]=s.x,T[I+B+5]=s.y,T[I+B+6]=s.z,T[I+B+7]=0),m===!0&&(s.fromBufferAttribute(k,O),T[I+B+8]=s.x,T[I+B+9]=s.y,T[I+B+10]=s.z,T[I+B+11]=k.itemSize===4?s.w:1)}}h={count:g,texture:v,size:new Te(E,S)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let m=0;m<l.length;m++)f+=l[m];const _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Cv(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,g=l.geometry,h=e.get(l,g);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Rv={[Zc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Qc]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function Pv(n,e,t,i,s,r){const o=new zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Ht;l.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const u=new Nf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new _n(l,u),h=new ro(-1,1,1,-1,0,1);let p=null,f=null,_=!1,m,d=null,M=[],C=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),c!==null&&c.setSize(x,E);for(let S=0;S<M.length;S++){const T=M[S];T.setSize&&T.setSize(x,E)}},this.setEffects=function(x){M=x,C=M.length>0&&M[0].isRenderPass===!0;const E=o.width,S=o.height;M.length>0&&a===null&&(a=new zn(E,S,{type:ni,depthBuffer:!1,stencilBuffer:!1}),c=new zn(E,S,{type:ni,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){const v=M[T];v.setSize&&v.setSize(E,S)}},this.begin=function(x,E){if(_||x.toneMapping===Qn&&M.length===0)return!1;if(d=E,E!==null){const S=E.width,T=E.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return C===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return C},this.end=function(x,E){x.toneMapping=m,_=!0;let S=o,T=a;for(let v=0;v<M.length;v++){const P=M[v];P.enabled!==!1&&(P.render(x,T,S,E),P.needsSwap!==!1&&(S=T,T=T===a?c:a))}if(p!==x.outputColorSpace||f!==x.toneMapping){p=x.outputColorSpace,f=x.toneMapping,u.defines={},mt.getTransfer(p)===wt&&(u.defines.SRGB_TRANSFER="");const v=Rv[f];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(d),x.render(g,h),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Wf=new sn,Nc=new or(1,1),qf=new uu,Xf=new xf,Yf=new gu,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yl(n,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Lv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function Uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),Zt(t,i)}}function Ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),Zt(t,i)}}function Fv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;id.set(i),n.uniformMatrix4fv(this.addr,!1,id),Zt(t,i)}}function zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function Xv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nc.compareFunction=t.isReversedDepthBuffer()?ol:rl,r=Nc):r=Wf,t.setTexture2D(e||r,s)}function Yv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xf,s)}function $v(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Yf,s)}function Jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qf,s)}function Zv(n){switch(n){case 5126:return Lv;case 35664:return Iv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return zv;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return Gv;case 5125:return Vv;case 36294:return Hv;case 36295:return Wv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Jv}}function Kv(n,e){n.uniform1fv(this.addr,e)}function Qv(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function jv(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function e1(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function t1(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function n1(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function i1(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s1(n,e){n.uniform1iv(this.addr,e)}function r1(n,e){n.uniform2iv(this.addr,e)}function o1(n,e){n.uniform3iv(this.addr,e)}function a1(n,e){n.uniform4iv(this.addr,e)}function l1(n,e){n.uniform1uiv(this.addr,e)}function c1(n,e){n.uniform2uiv(this.addr,e)}function u1(n,e){n.uniform3uiv(this.addr,e)}function h1(n,e){n.uniform4uiv(this.addr,e)}function d1(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Nc:o=Wf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function f1(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xf,r[o])}function p1(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yf,r[o])}function m1(n,e,t){const i=this.cache,s=e.length,r=yl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qf,r[o])}function g1(n){switch(n){case 5126:return Kv;case 35664:return Qv;case 35665:return jv;case 35666:return e1;case 35674:return t1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class _1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zv(t.type)}}class v1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function od(n,e){n.seq.push(e),n.map[e.id]=e}function y1(n,e,t){const i=n.name,s=i.length;for(oc.lastIndex=0;;){const r=oc.exec(i),o=oc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){od(t,l===void 0?new _1(a,n,e):new v1(a,n,e));break}else{let g=t.map[a];g===void 0&&(g=new x1(a),od(t,g)),t=g}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);y1(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const M1=37297;let S1=0;function b1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ld=new nt;function E1(n){mt._getMatrix(ld,mt.workingColorSpace,n);const e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Xr:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+b1(n.getShaderSource(e),a)}else return r}function w1(n,e){const t=E1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const T1={[Zc]:"Linear",[Kc]:"Reinhard",[Qc]:"Cineon",[Ka]:"ACESFilmic",[eu]:"AgX",[tu]:"Neutral",[jc]:"Custom"};function A1(n,e){const t=T1[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new G;function C1(){mt.getLuminanceCoefficients(Vo);const n=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function P1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rr(n){return n!==""}function ud(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(n){return n.replace(I1,N1)}const D1=new Map;function N1(n,e){let t=at[e];if(t===void 0){const i=D1.get(e);if(i!==void 0)t=at[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uc(t)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(n){return n.replace(U1,O1)}function O1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const F1={[Ks]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function z1(n){return F1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k1={[ns]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};function B1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":k1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const G1={[Es]:"ENVMAP_MODE_REFRACTION"};function V1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":G1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H1={[Jc]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function W1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":H1[n.combine]||"ENVMAP_BLENDING_NONE"}function q1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=z1(t),l=B1(t),u=V1(t),g=W1(t),h=q1(t),p=R1(t),f=P1(r),_=s.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Rr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Rr).join(`
`),d.length>0&&(d+=`
`)):(m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),d=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?at.tonemapping_pars_fragment:"",t.toneMapping!==Qn?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,w1("linearToOutputTexel",t.outputColorSpace),C1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Uc(o),o=ud(o,t),o=hd(o,t),a=Uc(a),a=ud(a,t),a=hd(a,t),o=dd(o),a=dd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=M+m+o,x=M+d+a,E=ad(s,s.VERTEX_SHADER,C),S=ad(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(N){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(S)||"",I=q.trim(),O=V.trim(),B=k.trim();let Q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,S);else{const W=cd(s,E,"vertex"),te=cd(s,S,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+W+`
`+te)}else I!==""?tt("WebGLProgram: Program Info Log:",I):(O===""||B==="")&&(Y=!1);Y&&(N.diagnostics={runnable:Q,programLog:I,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(E),s.deleteShader(S),v=new Zo(s,_),P=L1(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let P;this.getAttributes=function(){return P===void 0&&T(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,M1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}let Y1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new J1(e),t.set(e,i)),i}}class J1{constructor(e){this.id=Y1++,this.code=e,this.usedTimes=0}}function Z1(n){return n===is||n===Hr||n===Wr}function K1(n,e,t,i,s,r){const o=new ll,a=new $1,c=new Set,l=[],u=new Map,g=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,P,A,N,q,V){const k=N.fog,I=q.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||O,B),Y=Q&&Q.mapping===eo?Q.image.height:null,W=p[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=te!==void 0?te.length:0;let ce=0;I.morphAttributes.position!==void 0&&(ce=1),I.morphAttributes.normal!==void 0&&(ce=2),I.morphAttributes.color!==void 0&&(ce=3);let le,fe,U,y;if(W){const It=Jn[W];le=It.vertexShader,fe=It.fragmentShader}else{le=v.vertexShader,fe=v.fragmentShader;const It=a.getVertexShaderStage(v),bt=a.getFragmentShaderStage(v);a.update(v,It,bt),U=It.id,y=bt.id}const L=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),Z=q.isInstancedMesh===!0,w=q.isBatchedMesh===!0,R=!!v.map,z=!!v.matcap,H=!!Q,ne=!!v.aoMap,F=!!v.lightMap,ee=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,$=!!v.displacementMap,ae=!!v.emissiveMap,ye=!!v.metalnessMap,be=!!v.roughnessMap,K=v.anisotropy>0,ze=v.clearcoat>0,Ae=v.dispersion>0,X=v.retroreflectivity>0,b=v.iridescence>0,oe=v.sheen>0,ue=v.transmission>0,pe=K&&!!v.anisotropyMap,Ee=ze&&!!v.clearcoatMap,Ce=ze&&!!v.clearcoatNormalMap,_e=ze&&!!v.clearcoatRoughnessMap,xe=b&&!!v.iridescenceMap,Re=b&&!!v.iridescenceThicknessMap,$e=oe&&!!v.sheenColorMap,Ne=oe&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,Je=!!v.specularColorMap,et=!!v.specularIntensityMap,rt=ue&&!!v.transmissionMap,re=ue&&!!v.thicknessMap,Le=!!v.gradientMap,ve=!!v.alphaMap,Ie=v.alphaTest>0,ke=!!v.alphaHash,Me=!!v.extensions;let Ze=Qn;v.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Xe={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:fe,defines:v.defines,customVertexShaderID:U,customFragmentShaderID:y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:w,batchingColor:w&&q._colorsTexture!==null,instancing:Z,instancingColor:Z&&q.instanceColor!==null,instancingMorph:Z&&q.morphTexture!==null,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:R,matcap:z,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:Y,aoMap:ne,lightMap:F,bumpMap:ee,normalMap:ie,displacementMap:$,emissiveMap:ae,normalMapObjectSpace:ie&&v.normalMapType===of,normalMapTangentSpace:ie&&v.normalMapType===Ba,packedNormalMap:ie&&v.normalMapType===Ba&&Z1(v.normalMap.format),metalnessMap:ye,roughnessMap:be,anisotropy:K,anisotropyMap:pe,clearcoat:ze,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:_e,dispersion:Ae,retroreflection:X,iridescence:b,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:oe,sheenColorMap:$e,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:Je,specularIntensityMap:et,transmission:ue,transmissionMap:rt,thicknessMap:re,gradientMap:Le,opaque:v.transparent===!1&&v.blending===Qs&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:ke,combine:v.combine,mapUv:R&&f(v.map.channel),aoMapUv:ne&&f(v.aoMap.channel),lightMapUv:F&&f(v.lightMap.channel),bumpMapUv:ee&&f(v.bumpMap.channel),normalMapUv:ie&&f(v.normalMap.channel),displacementMapUv:$&&f(v.displacementMap.channel),emissiveMapUv:ae&&f(v.emissiveMap.channel),metalnessMapUv:ye&&f(v.metalnessMap.channel),roughnessMapUv:be&&f(v.roughnessMap.channel),anisotropyMapUv:pe&&f(v.anisotropyMap.channel),clearcoatMapUv:Ee&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&f(v.sheenRoughnessMap.channel),specularMapUv:Pe&&f(v.specularMap.channel),specularColorMapUv:Je&&f(v.specularColorMap.channel),specularIntensityMapUv:et&&f(v.specularIntensityMap.channel),transmissionMapUv:rt&&f(v.transmissionMap.channel),thicknessMapUv:re&&f(v.thicknessMap.channel),alphaMapUv:ve&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ie||K),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(R||ve),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:J,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ce,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:R&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===wt,decodeVideoTextureEmissive:ae&&v.emissiveMap.isVideoTexture===!0&&mt.getTransfer(v.emissiveMap.colorSpace)===wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||w)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(v){const P=[];if(v.shaderID?P.push(v.shaderID):(P.push(v.customVertexShaderID),P.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)P.push(A),P.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(d(P,v),M(P,v),P.push(n.outputColorSpace)),P.push(v.customProgramCacheKey),P.join()}function d(v,P){v.push(P.precision),v.push(P.outputColorSpace),v.push(P.envMapMode),v.push(P.envMapCubeUVHeight),v.push(P.mapUv),v.push(P.alphaMapUv),v.push(P.lightMapUv),v.push(P.aoMapUv),v.push(P.bumpMapUv),v.push(P.normalMapUv),v.push(P.displacementMapUv),v.push(P.emissiveMapUv),v.push(P.metalnessMapUv),v.push(P.roughnessMapUv),v.push(P.anisotropyMapUv),v.push(P.clearcoatMapUv),v.push(P.clearcoatNormalMapUv),v.push(P.clearcoatRoughnessMapUv),v.push(P.iridescenceMapUv),v.push(P.iridescenceThicknessMapUv),v.push(P.sheenColorMapUv),v.push(P.sheenRoughnessMapUv),v.push(P.specularMapUv),v.push(P.specularColorMapUv),v.push(P.specularIntensityMapUv),v.push(P.transmissionMapUv),v.push(P.thicknessMapUv),v.push(P.combine),v.push(P.fogExp2),v.push(P.sizeAttenuation),v.push(P.morphTargetsCount),v.push(P.morphAttributeCount),v.push(P.numSunLights),v.push(P.numDirLights),v.push(P.numPointLights),v.push(P.numSpotLights),v.push(P.numSpotLightMaps),v.push(P.numHemiLights),v.push(P.numRectAreaLights),v.push(P.numSunLightShadows),v.push(P.numDirLightShadows),v.push(P.numPointLightShadows),v.push(P.numSpotLightShadows),v.push(P.numSpotLightShadowsWithMaps),v.push(P.numLightProbes),v.push(P.shadowMapType),v.push(P.toneMapping),v.push(P.numClippingPlanes),v.push(P.numClipIntersection),v.push(P.depthPacking)}function M(v,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function C(v){const P=p[v.type];let A;if(P){const N=Jn[P];A=Df.clone(N.uniforms)}else A=v.uniforms;return A}function x(v,P){let A=u.get(P);return A!==void 0?++A.usedTimes:(A=new X1(n,P,v,s),l.push(A),u.set(P,A)),A}function E(v){if(--v.usedTimes===0){const P=l.indexOf(v);l[P]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:C,acquireProgram:x,releaseProgram:E,releaseShaderCache:S,programs:l,dispose:T}}function Q1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function j1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function md(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,f,_,m,d){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:f,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:d},n[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=f,M.materialVariant=o(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function c(h,p,f,_,m,d,M){M.reversedDepth===!0&&(m=-m);const C=a(h,p,f,_,m,d);f.transmission>0?i.push(C):f.transparent===!0?s.push(C):t.push(C)}function l(h,p,f,_,m,d){const M=a(h,p,f,_,m,d);f.transmission>0?i.unshift(M):f.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||j1),i.length>1&&i.sort(p||pd),s.length>1&&s.sort(p||pd)}function g(){for(let h=e,p=n.length;h<p;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:g,sort:u}}function ex(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new md,n.set(i,[o])):s>=r.length?(o=new md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ht};break;case"SpotLight":t={position:new G,direction:new G,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function nx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ix=0;function sx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rx(n){const e=new tx,t=nx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const s=new G,r=new xt,o=new xt;function a(l){let u=0,g=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,f=0,_=0,m=0,d=0,M=0,C=0,x=0,E=0,S=0,T=0,v=0,P=0,A=0;l.sort(sx);for(let q=0,V=l.length;q<V;q++){const k=l[q],I=k.color,O=k.intensity,B=k.distance;let Q=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===is?Q=k.shadow.map.texture:Q=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=I.r*O,g+=I.g*O,h+=I.b*O;else if(k.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(k.sh.coefficients[Y],O);A++}else if(k.isSunLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,te=t.get(k);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[f]=te,i.sunShadowMap[f]=Q;const j=W.getViewportCount();for(let ce=0;ce<j;ce++)i.sunShadowMatrix[_+ce]=W.getMatrix(ce),i.sunShadowCascade[_+ce]=W._cascadeData[ce];_+=j,f++}i.sun[p]=Y,p++}else if(k.isDirectionalLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,te=t.get(k);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=k.shadow.matrix,E++}i.directional[m]=Y,m++}else if(k.isSpotLight){const Y=e.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(I).multiplyScalar(O),Y.distance=B,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,i.spot[M]=Y;const W=k.shadow;if(k.map&&(i.spotLightMap[v]=k.map,v++,W.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[M]=W.matrix,k.castShadow){const te=t.get(k);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,i.spotShadow[M]=te,i.spotShadowMap[M]=Q,T++}M++}else if(k.isRectAreaLight){const Y=e.get(k);Y.color.copy(I).multiplyScalar(O),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),i.rectArea[C]=Y,C++}else if(k.isPointLight){const Y=e.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const W=k.shadow,te=t.get(k);te.shadowIntensity=W.intensity,te.shadowBias=W.bias,te.shadowNormalBias=W.normalBias,te.shadowRadius=W.radius,te.shadowMapSize=W.mapSize,te.shadowCameraNear=W.camera.near,te.shadowCameraFar=W.camera.far,i.pointShadow[d]=te,i.pointShadowMap[d]=Q,i.pointShadowMatrix[d]=k.shadow.matrix,S++}i.point[d]=Y,d++}else if(k.isHemisphereLight){const Y=e.get(k);Y.skyColor.copy(k.color).multiplyScalar(O),Y.groundColor.copy(k.groundColor).multiplyScalar(O),i.hemi[x]=Y,x++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=g,i.ambient[2]=h;const N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==M||N.rectAreaLength!==C||N.hemiLength!==x||N.numSunShadows!==f||N.numDirectionalShadows!==E||N.numPointShadows!==S||N.numSpotShadows!==T||N.numSpotMaps!==v||N.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=M,i.rectArea.length=C,i.point.length=d,i.hemi.length=x,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+v-P,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=M,N.rectAreaLength=C,N.hemiLength=x,N.numSunShadows=f,N.numDirectionalShadows=E,N.numPointShadows=S,N.numSpotShadows=T,N.numSpotMaps=v,N.numLightProbes=A,i.version=ix++)}function c(l,u){let g=0,h=0,p=0,f=0,_=0,m=0;const d=u.matrixWorldInverse;for(let M=0,C=l.length;M<C;M++){const x=l[M];if(x.isSunLight){const E=i.sun[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),g++}else if(x.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),h++}else if(x.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(x.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:i}}function gd(n){const e=new rx(n),t=[],i=[],s=[];function r(h){g.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ox(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gd(n),e.set(s,[a])):r>=o.length?(a=new gd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`,cx=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],ux=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],_d=new xt,br=new G,ac=new G;function hx(n,e,t){let i=new ul;const s=new Te,r=new Te,o=new Ft,a=new Uf,c=new Of,l={},u=t.maxTextureSize,g={[ts]:gn,[gn]:ts,[Dn]:Dn},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:ax,fragmentShader:lx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ht;f.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let d=this.type;this.render=function(S,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Od&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ks);const P=n.getRenderTarget(),A=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),q=n.state;q.setBlending(mi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const V=d!==this.type;V&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(I=>I.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,I=S.length;k<I;k++){const O=S[k],B=O.shadow;if(B===void 0){tt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();s.multiply(Q),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ys){if(O.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new zn(s.x,s.y,{format:is,type:ni,minFilter:tn,magFilter:tn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new or(s.x,s.y,On),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=vi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt}else O.isPointLight?(B.map=new Ru(s.x),B.map.depthTexture=new bf(s.x,ti)):(B.map=new zn(s.x,s.y),B.map.depthTexture=new or(s.x,s.y,ti)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=vi,this.type===Ks?(B.map.depthTexture.compareFunction=Y?ol:rl,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,v);for(let te=0;te<W;te++){const j=B.getCamera(te);if(O.isPointLight){const ce=B.camera,le=B.matrix,fe=O.distance||ce.far;fe!==ce.far&&(ce.far=fe,ce.updateProjectionMatrix()),br.setFromMatrixPosition(O.matrixWorld),ce.position.copy(br),ac.copy(ce.position),ac.add(cx[te]),ce.up.copy(ux[te]),ce.lookAt(ac),ce.updateMatrixWorld(),le.makeTranslation(-br.x,-br.y,-br.z),_d.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_d,ce.coordinateSystem,ce.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,te),n.clear();else{te===0&&(n.setRenderTarget(B.map),n.clear());const ce=B.getViewport(te);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),q.viewport(o)}i=B.getFrustum(te),x(T,v,j,O,this.type)}B.isPointLightShadow!==!0&&this.type===Ys&&M(B,v),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(P,A,N)};function M(S,T){const v=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new zn(s.x,s.y,{format:is,type:ni}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,v,h,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,v,p,_,null)}function C(S,T,v,P){let A=null;const N=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)A=N;else if(A=v.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const q=A.uuid,V=T.uuid;let k=l[q];k===void 0&&(k={},l[q]=k);let I=k[V];I===void 0&&(I=A.clone(),k[V]=I,T.addEventListener("dispose",E)),A=I}if(A.visible=T.visible,A.wireframe=T.wireframe,P===Ys?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:g[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=n.properties.get(A);q.light=v}return A}function x(S,T,v,P,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Ys)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);const V=e.update(S),k=S.material;if(Array.isArray(k)){const I=V.groups;for(let O=0,B=I.length;O<B;O++){const Q=I[O],Y=k[Q.materialIndex];if(Y&&Y.visible){const W=C(S,Y,P,A);S.onBeforeShadow(n,S,T,v,V,W,Q),n.renderBufferDirect(v,null,V,W,S,Q),S.onAfterShadow(n,S,T,v,V,W,Q)}}}else if(k.visible){const I=C(S,k,P,A);S.onBeforeShadow(n,S,T,v,V,I,null),n.renderBufferDirect(v,null,V,I,S,null),S.onAfterShadow(n,S,T,v,V,I,null)}}const q=S.children;for(let V=0,k=q.length;V<k;V++)x(q[V],T,v,P,A)}function E(S){S.target.removeEventListener("dispose",E);for(const v in l){const P=l[v],A=S.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function dx(n,e){function t(){let re=!1;const Le=new Ft;let ve=null;const Ie=new Ft(0,0,0,0);return{setMask:function(ke){ve!==ke&&!re&&(n.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){re=ke},setClear:function(ke,Me,Ze,Xe,It){It===!0&&(ke*=Xe,Me*=Xe,Ze*=Xe),Le.set(ke,Me,Ze,Xe),Ie.equals(Le)===!1&&(n.clearColor(ke,Me,Ze,Xe),Ie.copy(Le))},reset:function(){re=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let re=!1,Le=!1,ve=null,Ie=null,ke=null;return{setReversed:function(Me){if(Le!==Me){const Ze=e.get("EXT_clip_control");Me?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const Xe=ke;ke=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(Me){Me?L(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!re&&(n.depthMask(Me),ve=Me)},setFunc:function(Me){if(Le&&(Me=hm[Me]),Ie!==Me){switch(Me){case na:n.depthFunc(n.NEVER);break;case ia:n.depthFunc(n.ALWAYS);break;case sa:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case ra:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case aa:n.depthFunc(n.GREATER);break;case la:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Me}},setLocked:function(Me){re=Me},setClear:function(Me){ke!==Me&&(ke=Me,Le&&(Me=1-Me),n.clearDepth(Me))},reset:function(){re=!1,ve=null,Ie=null,ke=null,Le=!1}}}function s(){let re=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Ze=null,Xe=null,It=null;return{setTest:function(bt){re||(bt?L(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!re&&(n.stencilMask(bt),Le=bt)},setFunc:function(bt,Hn,ri){(ve!==bt||Ie!==Hn||ke!==ri)&&(n.stencilFunc(bt,Hn,ri),ve=bt,Ie=Hn,ke=ri)},setOp:function(bt,Hn,ri){(Me!==bt||Ze!==Hn||Xe!==ri)&&(n.stencilOp(bt,Hn,ri),Me=bt,Ze=Hn,Xe=ri)},setLocked:function(bt){re=bt},setClear:function(bt){It!==bt&&(n.clearStencil(bt),It=bt)},reset:function(){re=!1,Le=null,ve=null,Ie=null,ke=null,Me=null,Ze=null,Xe=null,It=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},g={},h={},p=new WeakMap,f=[],_=null,m=!1,d=null,M=null,C=null,x=null,E=null,S=null,T=null,v=new ht(0,0,0),P=0,A=!1,N=null,q=null,V=null,k=null,I=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Q>=2);let W=null,te={};const j=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),le=new Ft().fromArray(j),fe=new Ft().fromArray(ce);function U(re,Le,ve,Ie){const ke=new Uint8Array(4),Me=n.createTexture();n.bindTexture(re,Me),n.texParameteri(re,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(re,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ve;Ze++)re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Le+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Me}const y={};y[n.TEXTURE_2D]=U(n.TEXTURE_2D,n.TEXTURE_2D,1),y[n.TEXTURE_CUBE_MAP]=U(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),y[n.TEXTURE_2D_ARRAY]=U(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),y[n.TEXTURE_3D]=U(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(nr),ee(!1),ie(vc),L(n.CULL_FACE),ne(mi);function L(re){u[re]!==!0&&(n.enable(re),u[re]=!0)}function J(re){u[re]!==!1&&(n.disable(re),u[re]=!1)}function Z(re,Le){return h[re]!==Le?(n.bindFramebuffer(re,Le),h[re]=Le,re===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),re===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function w(re,Le){let ve=f,Ie=!1;if(re){ve=p.get(Le),ve===void 0&&(ve=[],p.set(Le,ve));const ke=re.textures;if(ve.length!==ke.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ze=ke.length;Me<Ze;Me++)ve[Me]=n.COLOR_ATTACHMENT0+Me;ve.length=ke.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function R(re){return _!==re?(n.useProgram(re),_=re,!0):!1}const z={[_s]:n.FUNC_ADD,[zd]:n.FUNC_SUBTRACT,[kd]:n.FUNC_REVERSE_SUBTRACT};z[Bd]=n.MIN,z[Gd]=n.MAX;const H={[Vd]:n.ZERO,[Hd]:n.ONE,[Wd]:n.SRC_COLOR,[Yc]:n.SRC_ALPHA,[Zd]:n.SRC_ALPHA_SATURATE,[$d]:n.DST_COLOR,[Xd]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[Yd]:n.ONE_MINUS_DST_ALPHA,[Kd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[jd]:n.CONSTANT_ALPHA,[ef]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(re,Le,ve,Ie,ke,Me,Ze,Xe,It,bt){if(re===mi){m===!0&&(J(n.BLEND),m=!1);return}if(m===!1&&(L(n.BLEND),m=!0),re!==Fd){if(re!==d||bt!==A){if((M!==_s||E!==_s)&&(n.blendEquation(n.FUNC_ADD),M=_s,E=_s),bt)switch(re){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",re);break}else switch(re){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",re);break}C=null,x=null,S=null,T=null,v.set(0,0,0),P=0,d=re,A=bt}return}ke=ke||Le,Me=Me||ve,Ze=Ze||Ie,(Le!==M||ke!==E)&&(n.blendEquationSeparate(z[Le],z[ke]),M=Le,E=ke),(ve!==C||Ie!==x||Me!==S||Ze!==T)&&(n.blendFuncSeparate(H[ve],H[Ie],H[Me],H[Ze]),C=ve,x=Ie,S=Me,T=Ze),(Xe.equals(v)===!1||It!==P)&&(n.blendColor(Xe.r,Xe.g,Xe.b,It),v.copy(Xe),P=It),d=re,A=!1}function F(re,Le){re.side===Dn?J(n.CULL_FACE):L(n.CULL_FACE);let ve=re.side===gn;Le&&(ve=!ve),ee(ve),re.blending===Qs&&re.transparent===!1?ne(mi):ne(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),o.setFunc(re.depthFunc),o.setTest(re.depthTest),o.setMask(re.depthWrite),r.setMask(re.colorWrite);const Ie=re.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(re.stencilWriteMask),a.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),a.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),ae(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(re){N!==re&&(re?n.frontFace(n.CW):n.frontFace(n.CCW),N=re)}function ie(re){re!==Nd?(L(n.CULL_FACE),re!==q&&(re===vc?n.cullFace(n.BACK):re===Ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),q=re}function $(re){re!==V&&(B&&n.lineWidth(re),V=re)}function ae(re,Le,ve){re?(L(n.POLYGON_OFFSET_FILL),(k!==Le||I!==ve)&&(k=Le,I=ve,o.getReversed()&&(Le=-Le),n.polygonOffset(Le,ve))):J(n.POLYGON_OFFSET_FILL)}function ye(re){re?L(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function be(re){re===void 0&&(re=n.TEXTURE0+O-1),W!==re&&(n.activeTexture(re),W=re)}function K(re,Le,ve){ve===void 0&&(W===null?ve=n.TEXTURE0+O-1:ve=W);let Ie=te[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},te[ve]=Ie),(Ie.type!==re||Ie.texture!==Le)&&(W!==ve&&(n.activeTexture(ve),W=ve),n.bindTexture(re,Le||y[re]),Ie.type=re,Ie.texture=Le)}function ze(){const re=te[W];re!==void 0&&re.type!==void 0&&(n.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function b(){try{n.texSubImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function oe(){try{n.texSubImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ee(){try{n.texStorage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ce(){try{n.texStorage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function _e(){try{n.texImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function xe(){try{n.texImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function Re(re){return g[re]!==void 0?g[re]:n.getParameter(re)}function $e(re,Le){g[re]!==Le&&(n.pixelStorei(re,Le),g[re]=Le)}function Ne(re){le.equals(re)===!1&&(n.scissor(re.x,re.y,re.z,re.w),le.copy(re))}function Pe(re){fe.equals(re)===!1&&(n.viewport(re.x,re.y,re.z,re.w),fe.copy(re))}function Je(re,Le){let ve=l.get(Le);ve===void 0&&(ve=new WeakMap,l.set(Le,ve));let Ie=ve.get(re);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,re.name),ve.set(re,Ie))}function et(re,Le){const Ie=l.get(Le).get(re);c.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,re.__bindingPointIndex),c.set(Le,Ie))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},g={},W=null,te={},h={},p=new WeakMap,f=[],_=null,m=!1,d=null,M=null,C=null,x=null,E=null,S=null,T=null,v=new ht(0,0,0),P=0,A=!1,N=null,q=null,V=null,k=null,I=null,le.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:J,bindFramebuffer:Z,drawBuffers:w,useProgram:R,setBlending:ne,setMaterial:F,setFlipSided:ee,setCullFace:ie,setLineWidth:$,setPolygonOffset:ae,setScissorTest:ye,activeTexture:be,bindTexture:K,unbindTexture:ze,compressedTexImage2D:Ae,compressedTexImage3D:X,texImage2D:_e,texImage3D:xe,pixelStorei:$e,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:b,texSubImage3D:oe,compressedTexSubImage2D:ue,compressedTexSubImage3D:pe,scissor:Ne,viewport:Pe,reset:rt}}function fx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap,g=new Set;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(X,b){return f?new OffscreenCanvas(X,b):Ga("canvas")}function m(X,b,oe){let ue=1;const pe=Ae(X);if((pe.width>oe||pe.height>oe)&&(ue=oe/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){const Ee=Math.floor(ue*pe.width),Ce=Math.floor(ue*pe.height);h===void 0&&(h=_(Ee,Ce));const _e=b?_(Ee,Ce):h;return _e.width=Ee,_e.height=Ce,_e.getContext("2d").drawImage(X,0,0,Ee,Ce),tt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ee+"x"+Ce+")."),_e}else return"data"in X&&tt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),X;return X}function d(X){return X.generateMipmaps}function M(X){n.generateMipmap(X)}function C(X){return X.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?n.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(X,b,oe,ue,pe,Ee=!1){if(X!==null){if(n[X]!==void 0)return n[X];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Ce;ue&&(Ce=e.get("EXT_texture_norm16"),Ce||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=b;if(b===n.RED&&(oe===n.FLOAT&&(_e=n.R32F),oe===n.HALF_FLOAT&&(_e=n.R16F),oe===n.UNSIGNED_BYTE&&(_e=n.R8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.R16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.R16_SNORM_EXT)),b===n.RED_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.R8UI),oe===n.UNSIGNED_SHORT&&(_e=n.R16UI),oe===n.UNSIGNED_INT&&(_e=n.R32UI),oe===n.BYTE&&(_e=n.R8I),oe===n.SHORT&&(_e=n.R16I),oe===n.INT&&(_e=n.R32I)),b===n.RG&&(oe===n.FLOAT&&(_e=n.RG32F),oe===n.HALF_FLOAT&&(_e=n.RG16F),oe===n.UNSIGNED_BYTE&&(_e=n.RG8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RG16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RG8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RG16UI),oe===n.UNSIGNED_INT&&(_e=n.RG32UI),oe===n.BYTE&&(_e=n.RG8I),oe===n.SHORT&&(_e=n.RG16I),oe===n.INT&&(_e=n.RG32I)),b===n.RGB_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),oe===n.UNSIGNED_INT&&(_e=n.RGB32UI),oe===n.BYTE&&(_e=n.RGB8I),oe===n.SHORT&&(_e=n.RGB16I),oe===n.INT&&(_e=n.RGB32I)),b===n.RGBA_INTEGER&&(oe===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),oe===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),oe===n.UNSIGNED_INT&&(_e=n.RGBA32UI),oe===n.BYTE&&(_e=n.RGBA8I),oe===n.SHORT&&(_e=n.RGBA16I),oe===n.INT&&(_e=n.RGBA32I)),b===n.RGB&&(oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGB16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RGB16_SNORM_EXT),oe===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),oe===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),b===n.RGBA){const xe=Ee?Xr:mt.getTransfer(pe);oe===n.FLOAT&&(_e=n.RGBA32F),oe===n.HALF_FLOAT&&(_e=n.RGBA16F),oe===n.UNSIGNED_BYTE&&(_e=xe===wt?n.SRGB8_ALPHA8:n.RGBA8),oe===n.UNSIGNED_SHORT&&Ce&&(_e=Ce.RGBA16_EXT),oe===n.SHORT&&Ce&&(_e=Ce.RGBA16_SNORM_EXT),oe===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),oe===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function E(X,b){let oe;return X?b===null||b===ti||b===sr?oe=n.DEPTH24_STENCIL8:b===On?oe=n.DEPTH32F_STENCIL8:b===ir&&(oe=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ti||b===sr?oe=n.DEPTH_COMPONENT24:b===On?oe=n.DEPTH_COMPONENT32F:b===ir&&(oe=n.DEPTH_COMPONENT16),oe}function S(X,b){return d(X)===!0||X.isFramebufferTexture&&X.minFilter!==jt&&X.minFilter!==tn?Math.log2(Math.max(b.width,b.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?b.mipmaps.length:1}function T(X){const b=X.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&g.delete(b)}function v(X){const b=X.target;b.removeEventListener("dispose",v),N(b)}function P(X){const b=i.get(X);if(b.__webglInit===void 0)return;const oe=X.source,ue=p.get(oe);if(ue){const pe=ue[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&A(X),Object.keys(ue).length===0&&p.delete(oe)}i.remove(X)}function A(X){const b=i.get(X);n.deleteTexture(b.__webglTexture);const oe=X.source,ue=p.get(oe);delete ue[b.__cacheKey],o.memory.textures--}function N(X){const b=i.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),i.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(b.__webglFramebuffer[ue]))for(let pe=0;pe<b.__webglFramebuffer[ue].length;pe++)n.deleteFramebuffer(b.__webglFramebuffer[ue][pe]);else n.deleteFramebuffer(b.__webglFramebuffer[ue]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ue])}else{if(Array.isArray(b.__webglFramebuffer))for(let ue=0;ue<b.__webglFramebuffer.length;ue++)n.deleteFramebuffer(b.__webglFramebuffer[ue]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ue=0;ue<b.__webglColorRenderbuffer.length;ue++)b.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ue]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const oe=X.textures;for(let ue=0,pe=oe.length;ue<pe;ue++){const Ee=i.get(oe[ue]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(oe[ue])}i.remove(X)}let q=0;function V(){q=0}function k(){return q}function I(X){q=X}function O(){const X=q;return X>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,X}function B(X){const b=[];return b.push(X.wrapS),b.push(X.wrapT),b.push(X.wrapR||0),b.push(X.magFilter),b.push(X.minFilter),b.push(X.anisotropy),b.push(X.internalFormat),b.push(X.format),b.push(X.type),b.push(X.generateMipmaps),b.push(X.premultiplyAlpha),b.push(X.flipY),b.push(X.unpackAlignment),b.push(X.colorSpace),b.join()}function Q(X,b){const oe=i.get(X);if(X.isVideoTexture&&K(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&oe.__version!==X.version){const ue=X.image;if(ue===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(oe,X,b);return}}else X.isExternalTexture&&(oe.__webglTexture=X.sourceTexture?X.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture,n.TEXTURE0+b)}function Y(X,b){const oe=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&oe.__version!==X.version){J(oe,X,b);return}else X.isExternalTexture&&(oe.__webglTexture=X.sourceTexture?X.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,oe.__webglTexture,n.TEXTURE0+b)}function W(X,b){const oe=i.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&oe.__version!==X.version){J(oe,X,b);return}t.bindTexture(n.TEXTURE_3D,oe.__webglTexture,n.TEXTURE0+b)}function te(X,b){const oe=i.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&oe.__version!==X.version){Z(oe,X,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture,n.TEXTURE0+b)}const j={[Vr]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[ca]:n.MIRRORED_REPEAT},ce={[jt]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Yo]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},le={[lf]:n.NEVER,[ff]:n.ALWAYS,[cf]:n.LESS,[rl]:n.LEQUAL,[uf]:n.EQUAL,[ol]:n.GEQUAL,[hf]:n.GREATER,[df]:n.NOTEQUAL};function fe(X,b){if(b.type===On&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===tn||b.magFilter===Yo||b.magFilter===Ar||b.magFilter===$i||b.minFilter===tn||b.minFilter===Yo||b.minFilter===Ar||b.minFilter===$i)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(X,n.TEXTURE_WRAP_S,j[b.wrapS]),n.texParameteri(X,n.TEXTURE_WRAP_T,j[b.wrapT]),(X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY)&&n.texParameteri(X,n.TEXTURE_WRAP_R,j[b.wrapR]),n.texParameteri(X,n.TEXTURE_MAG_FILTER,ce[b.magFilter]),n.texParameteri(X,n.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(n.texParameteri(X,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(X,n.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==Ar&&b.minFilter!==$i||b.type===On&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");n.texParameterf(X,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function U(X,b){let oe=!1;X.__webglInit===void 0&&(X.__webglInit=!0,b.addEventListener("dispose",T));const ue=b.source;let pe=p.get(ue);pe===void 0&&(pe={},p.set(ue,pe));const Ee=B(b);if(Ee!==X.__cacheKey){pe[Ee]===void 0&&(pe[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),pe[Ee].usedTimes++;const Ce=pe[X.__cacheKey];Ce!==void 0&&(pe[X.__cacheKey].usedTimes--,Ce.usedTimes===0&&A(b)),X.__cacheKey=Ee,X.__webglTexture=pe[Ee].texture}return oe}function y(X,b,oe){return Math.floor(Math.floor(X/oe)/b)}function L(X,b,oe,ue){const Ee=X.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,oe,ue,b.data);else{Ee.sort(($e,Ne)=>$e.start-Ne.start);let Ce=0;for(let $e=1;$e<Ee.length;$e++){const Ne=Ee[Ce],Pe=Ee[$e],Je=Ne.start+Ne.count,et=y(Pe.start,b.width,4),rt=y(Ne.start,b.width,4);Pe.start<=Je+1&&et===rt&&y(Pe.start+Pe.count-1,b.width,4)===et?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Ce,Ee[Ce]=Pe)}Ee.length=Ce+1;const _e=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Re=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let $e=0,Ne=Ee.length;$e<Ne;$e++){const Pe=Ee[$e],Je=Math.floor(Pe.start/4),et=Math.ceil(Pe.count/4),rt=Je%b.width,re=Math.floor(Je/b.width),Le=et,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(n.UNPACK_SKIP_ROWS,re),t.texSubImage2D(n.TEXTURE_2D,0,rt,re,Le,ve,oe,ue,b.data)}X.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function J(X,b,oe){let ue=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ue=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ue=n.TEXTURE_3D);const pe=U(X,b),Ee=b.source;t.bindTexture(ue,X.__webglTexture,n.TEXTURE0+oe);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+oe),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ve=mt.getPrimaries(mt.workingColorSpace),Ie=b.colorSpace===Ei?null:mt.getPrimaries(b.colorSpace),ke=b.colorSpace===Ei||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=m(b.image,!1,s.maxTextureSize);xe=ze(b,xe);const Re=r.convert(b.format,b.colorSpace),$e=r.convert(b.type);let Ne=x(b.internalFormat,Re,$e,b.normalized,b.colorSpace,b.isVideoTexture);fe(ue,b);let Pe;const Je=b.mipmaps,et=b.isVideoTexture!==!0,rt=Ce.__version===void 0||pe===!0,re=Ee.dataReady,Le=S(b,xe);if(b.isDepthTexture)Ne=E(b.format===Ji,b.type),rt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ne,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,$e,null));else if(b.isDataTexture)if(Je.length>0){et&&rt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,$e,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,$e,Pe.data);b.generateMipmaps=!1}else et?(rt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height),re&&L(b,xe,Re,$e)):t.texImage2D(n.TEXTURE_2D,0,Ne,xe.width,xe.height,0,Re,$e,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,Je[0].width,Je[0].height,xe.depth);for(let ve=0,Ie=Je.length;ve<Ie;ve++)if(Pe=Je[ve],b.format!==Fn)if(Re!==null)if(et){if(re)if(b.layerUpdates.size>0){const ke=Zh(Pe.width,Pe.height,b.format,b.type);for(const Me of b.layerUpdates){const Ze=Pe.data.subarray(Me*ke/Pe.data.BYTES_PER_ELEMENT,(Me+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Me,Pe.width,Pe.height,1,Re,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,xe.depth,Re,$e,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ne,Pe.width,Pe.height,xe.depth,0,Re,$e,Pe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{et&&rt&&t.texStorage2D(n.TEXTURE_2D,Le,Ne,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],b.format!==Fn?Re!==null?et?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Pe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Re,$e,Pe.data):t.texImage2D(n.TEXTURE_2D,ve,Ne,Pe.width,Pe.height,0,Re,$e,Pe.data)}else if(b.isDataArrayTexture)if(et){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ne,xe.width,xe.height,xe.depth),re)if(b.layerUpdates.size>0){const ve=Zh(xe.width,xe.height,b.format,b.type);for(const Ie of b.layerUpdates){const ke=xe.data.subarray(Ie*ve/xe.data.BYTES_PER_ELEMENT,(Ie+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,xe.width,xe.height,1,Re,$e,ke)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,$e,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,xe.width,xe.height,xe.depth,0,Re,$e,xe.data);else if(b.isData3DTexture)et?(rt&&t.texStorage3D(n.TEXTURE_3D,Le,Ne,xe.width,xe.height,xe.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,$e,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,xe.width,xe.height,xe.depth,0,Re,$e,xe.data);else if(b.isFramebufferTexture){if(rt)if(et)t.texStorage2D(n.TEXTURE_2D,Le,Ne,xe.width,xe.height);else{let ve=xe.width,Ie=xe.height;for(let ke=0;ke<Le;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ne,ve,Ie,0,Re,$e,null),ve>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),g.add(b),ve.onpaint=Ie=>{const ke=Ie.changedElements;for(const Me of g)ke.includes(Me.image)&&(Me.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const ke=n.RGBA,Me=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,Me,Ze,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(et&&rt){const ve=Ae(Je[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}for(let ve=0,Ie=Je.length;ve<Ie;ve++)Pe=Je[ve],et?re&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,$e,Pe):t.texImage2D(n.TEXTURE_2D,ve,Ne,Re,$e,Pe);b.generateMipmaps=!1}else if(et){if(rt){const ve=Ae(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ne,ve.width,ve.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,$e,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ne,Re,$e,xe);d(b)&&M(ue),Ce.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}X.__version=b.version}function Z(X,b,oe){if(b.image.length!==6)return;const ue=U(X,b),pe=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+oe);const Ee=i.get(pe);if(pe.version!==Ee.__version||ue===!0){t.activeTexture(n.TEXTURE0+oe);const Ce=mt.getPrimaries(mt.workingColorSpace),_e=b.colorSpace===Ei?null:mt.getPrimaries(b.colorSpace),xe=b.colorSpace===Ei||Ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,$e=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Re&&!$e?Ne[Me]=m(b.image[Me],!0,s.maxCubemapSize):Ne[Me]=$e?b.image[Me].image:b.image[Me],Ne[Me]=ze(b,Ne[Me]);const Pe=Ne[0],Je=r.convert(b.format,b.colorSpace),et=r.convert(b.type),rt=x(b.internalFormat,Je,et,b.normalized,b.colorSpace),re=b.isVideoTexture!==!0,Le=Ee.__version===void 0||ue===!0,ve=pe.dataReady;let Ie=S(b,Pe);fe(n.TEXTURE_CUBE_MAP,b);let ke;if(Re){re&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,rt,Pe.width,Pe.height);for(let Me=0;Me<6;Me++){ke=Ne[Me].mipmaps;for(let Ze=0;Ze<ke.length;Ze++){const Xe=ke[Ze];b.format!==Fn?Je!==null?re?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,Je,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,rt,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,Xe.width,Xe.height,Je,et,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,rt,Xe.width,Xe.height,0,Je,et,Xe.data)}}}else{if(ke=b.mipmaps,re&&Le){ke.length>0&&Ie++;const Me=Ae(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,rt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if($e){re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,Je,et,Ne[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,Ne[Me].width,Ne[Me].height,0,Je,et,Ne[Me].data);for(let Ze=0;Ze<ke.length;Ze++){const It=ke[Ze].image[Me].image;re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,It.width,It.height,Je,et,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,rt,It.width,It.height,0,Je,et,It.data)}}else{re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,et,Ne[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,rt,Je,et,Ne[Me]);for(let Ze=0;Ze<ke.length;Ze++){const Xe=ke[Ze];re?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Je,et,Xe.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,rt,Je,et,Xe.image[Me])}}}d(b)&&M(n.TEXTURE_CUBE_MAP),Ee.__version=pe.version,b.onUpdate&&b.onUpdate(b)}X.__version=b.version}function w(X,b,oe,ue,pe,Ee){const Ce=r.convert(oe.format,oe.colorSpace),_e=r.convert(oe.type),xe=x(oe.internalFormat,Ce,_e,oe.normalized,oe.colorSpace),Re=i.get(b),$e=i.get(oe);if($e.__renderTarget=b,!Re.__hasExternalTextures){const Ne=Math.max(1,b.width>>Ee),Pe=Math.max(1,b.height>>Ee);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ee,xe,Ne,Pe,b.depth,0,Ce,_e,null):t.texImage2D(pe,Ee,xe,Ne,Pe,0,Ce,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,X),be(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,pe,$e.__webglTexture,0,ye(b)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ue,pe,$e.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(X,b,oe){if(n.bindRenderbuffer(n.RENDERBUFFER,X),b.depthBuffer){const ue=b.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,Ee=E(b.stencilBuffer,pe),Ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(b),Ee,b.width,b.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(b),Ee,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,X)}else{const ue=b.textures;for(let pe=0;pe<ue.length;pe++){const Ee=ue[pe],Ce=r.convert(Ee.format,Ee.colorSpace),_e=r.convert(Ee.type),xe=x(Ee.internalFormat,Ce,_e,Ee.normalized,Ee.colorSpace);be(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(b),xe,b.width,b.height):oe?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(b),xe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function z(X,b,oe){const ue=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,X),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=i.get(b.depthTexture);if(pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ue){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),fe(n.TEXTURE_CUBE_MAP,b.depthTexture);const Re=r.convert(b.depthTexture.format),$e=r.convert(b.depthTexture.type);let Ne;b.depthTexture.format===vi?Ne=n.DEPTH_COMPONENT24:b.depthTexture.format===Ji&&(Ne=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,b.width,b.height,0,Re,$e,null)}}else Q(b.depthTexture,0);const Ee=pe.__webglTexture,Ce=ye(b),_e=ue?n.TEXTURE_CUBE_MAP_POSITIVE_X+oe:n.TEXTURE_2D,xe=b.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===vi)be(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else if(b.depthTexture.format===Ji)be(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,_e,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,xe,_e,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(X){const b=i.get(X),oe=X.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==X.depthTexture){const ue=X.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ue){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=ue}if(X.depthTexture&&!b.__autoAllocateDepthBuffer)if(oe)for(let ue=0;ue<6;ue++)z(b.__webglFramebuffer[ue],X,ue);else{const ue=X.texture.mipmaps;ue&&ue.length>0?z(b.__webglFramebuffer[0],X,0):z(b.__webglFramebuffer,X,0)}else if(oe){b.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ue]),b.__webglDepthbuffer[ue]===void 0)b.__webglDepthbuffer[ue]=n.createRenderbuffer(),R(b.__webglDepthbuffer[ue],X,!1);else{const pe=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=b.__webglDepthbuffer[ue];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}else{const ue=X.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),R(b.__webglDepthbuffer,X,!1);else{const pe=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(X,b,oe){const ue=i.get(X);b!==void 0&&w(ue.__webglFramebuffer,X,X.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),oe!==void 0&&H(X)}function F(X){const b=X.texture,oe=i.get(X),ue=i.get(b);X.addEventListener("dispose",v);const pe=X.textures,Ee=X.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=b.version,o.memory.textures++),Ee){oe.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0){oe.__webglFramebuffer[_e]=[];for(let xe=0;xe<b.mipmaps.length;xe++)oe.__webglFramebuffer[_e][xe]=n.createFramebuffer()}else oe.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){oe.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)oe.__webglFramebuffer[_e]=n.createFramebuffer()}else oe.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=i.get(pe[_e]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(X.samples>0&&be(X)===!1){oe.__webglMultisampledFramebuffer=n.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const xe=pe[_e];oe.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,oe.__webglColorRenderbuffer[_e]);const Re=r.convert(xe.format,xe.colorSpace),$e=r.convert(xe.type),Ne=x(xe.internalFormat,Re,$e,xe.normalized,xe.colorSpace,X.isXRRenderTarget===!0),Pe=ye(X);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ne,X.width,X.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,oe.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),X.depthBuffer&&(oe.__webglDepthRenderbuffer=n.createRenderbuffer(),R(oe.__webglDepthRenderbuffer,X,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),fe(n.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)w(oe.__webglFramebuffer[_e][xe],X,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else w(oe.__webglFramebuffer[_e],X,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);d(b)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let _e=0,xe=pe.length;_e<xe;_e++){const Re=pe[_e],$e=i.get(Re);let Ne=n.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(Ne=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,$e.__webglTexture),fe(Ne,Re),w(oe.__webglFramebuffer,X,Re,n.COLOR_ATTACHMENT0+_e,Ne,0),d(Re)&&M(Ne)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(_e=X.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),fe(_e,b),b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)w(oe.__webglFramebuffer[xe],X,b,n.COLOR_ATTACHMENT0,_e,xe);else w(oe.__webglFramebuffer,X,b,n.COLOR_ATTACHMENT0,_e,0);d(b)&&M(_e),t.unbindTexture()}X.depthBuffer&&H(X)}function ee(X){const b=X.textures;for(let oe=0,ue=b.length;oe<ue;oe++){const pe=b[oe];if(d(pe)){const Ee=C(X),Ce=i.get(pe).__webglTexture;t.bindTexture(Ee,Ce),M(Ee),t.unbindTexture()}}}const ie=[],$=[];function ae(X){if(X.samples>0){if(be(X)===!1){const b=X.textures,oe=X.width,ue=X.height;let pe=n.COLOR_BUFFER_BIT;const Ee=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(X),_e=b.length>1;if(_e)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=X.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const $e=i.get(b[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,oe,ue,0,0,oe,ue,pe,n.NEAREST),c===!0&&(ie.length=0,$.length=0,ie.push(n.COLOR_ATTACHMENT0+Re),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(ie.push(Ee),$.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const $e=i.get(b[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&c){const b=X.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ye(X){return Math.min(s.maxSamples,X.samples)}function be(X){const b=i.get(X);return X.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function K(X){const b=o.render.frame;u.get(X)!==b&&(u.set(X,b),X.update())}function ze(X,b){const oe=X.colorSpace,ue=X.format,pe=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||oe!==qr&&oe!==Ei&&(mt.getTransfer(oe)===wt?(ue!==Fn||pe!==yn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",oe)),b}function Ae(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(l.width=X.naturalWidth||X.width,l.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(l.width=X.displayWidth,l.height=X.displayHeight):(l.width=X.width,l.height=X.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.getTextureUnits=k,this.setTextureUnits=I,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=te,this.rebindTextures=ne,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=w,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $f(n,e){function t(i,s=Ei){let r;const o=mt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===ja)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===iu)return n.BYTE;if(i===su)return n.SHORT;if(i===ir)return n.UNSIGNED_SHORT;if(i===Qa)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===au)return n.ALPHA;if(i===lu)return n.RGB;if(i===Fn)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===is)return n.RG;if(i===il)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===Nr||i===Ur||i===Or||i===Fr)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ua||i===ha||i===da||i===fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pa||i===ma||i===ga||i===_a||i===va||i===Hr||i===xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pa||i===ma)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ga)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_a)return r.COMPRESSED_R11_EAC;if(i===va)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Hr)return r.COMPRESSED_RG11_EAC;if(i===xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ya||i===Ma||i===Sa||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ca||i===Ra||i===Pa||i===La||i===Ia||i===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ma)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ta)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ca)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===La)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Ua||i===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Na)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===za||i===Wr||i===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Fi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,g=null,h=null,p=null,f=null;const _=typeof XRWebGLBinding<"u",m=new gx,d={},M=t.getContextAttributes();let C=null,x=null;const E=[],S=[],T=new Te;let v=null,P=null;const A=new wn;A.viewport=new Ft;const N=new wn;N.viewport=new Ft;const q=[A,N],V=new kf;let k=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(y){let L=E[y];return L===void 0&&(L=new Jo,E[y]=L),L.getTargetRaySpace()},this.getControllerGrip=function(y){let L=E[y];return L===void 0&&(L=new Jo,E[y]=L),L.getGripSpace()},this.getHand=function(y){let L=E[y];return L===void 0&&(L=new Jo,E[y]=L),L.getHandSpace()};function O(y){const L=S.indexOf(y.inputSource);if(L===-1)return;const J=E[L];J!==void 0&&(J.update(y.inputSource,y.frame,l||o),J.dispatchEvent({type:y.type,data:y.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Q);for(let y=0;y<E.length;y++){const L=S[y];L!==null&&(S[y]=null,E[y].disconnect(L))}k=null,I=null,m.reset();for(const y in d)delete d[y];if(e.setRenderTarget(C),p=null,h=null,g=null,s=null,x=null,U.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),P!==null){const y=P.camera;y.fov=P.fov,y.zoom=P.zoom,y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(y){r=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(y){a=y,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(y){l=y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(y){if(s=y,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Z=null,w=null;M.depth&&(w=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=M.stencil?Ji:vi,Z=M.stencil?sr:ti);const R={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:r};g=this.getBinding(),h=g.createProjectionLayer(R),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new zn(h.textureWidth,h.textureHeight,{format:Fn,type:yn,depthTexture:new or(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new zn(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),U.setContext(s),U.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(y){for(let L=0;L<y.removed.length;L++){const J=y.removed[L],Z=S.indexOf(J);Z>=0&&(S[Z]=null,E[Z].disconnect(J))}for(let L=0;L<y.added.length;L++){const J=y.added[L];let Z=S.indexOf(J);if(Z===-1){for(let R=0;R<E.length;R++)if(R>=S.length){S.push(J),Z=R;break}else if(S[R]===null){S[R]=J,Z=R;break}if(Z===-1)break}const w=E[Z];w&&w.connect(J)}}const Y=new G,W=new G;function te(y,L,J){Y.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(J.matrixWorld);const Z=Y.distanceTo(W),w=L.projectionMatrix.elements,R=J.projectionMatrix.elements,z=w[14]/(w[10]-1),H=w[14]/(w[10]+1),ne=(w[9]+1)/w[5],F=(w[9]-1)/w[5],ee=(w[8]-1)/w[0],ie=(R[8]+1)/R[0],$=z*ee,ae=z*ie,ye=Z/(-ee+ie),be=ye*-ee;if(L.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(be),y.translateZ(ye),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert(),w[10]===-1)y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const K=z+ye,ze=H+ye,Ae=$-be,X=ae+(Z-be),b=ne*H/ze*K,oe=F*H/ze*K;y.projectionMatrix.makePerspective(Ae,X,b,oe,K,ze),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}}function j(y,L){L===null?y.matrixWorld.copy(y.matrix):y.matrixWorld.multiplyMatrices(L.matrixWorld,y.matrix),y.matrixWorldInverse.copy(y.matrixWorld).invert()}this.updateCamera=function(y){if(s===null)return;let L=y.near,J=y.far;m.texture!==null&&(m.depthNear>0&&(L=m.depthNear),m.depthFar>0&&(J=m.depthFar)),V.near=N.near=A.near=L,V.far=N.far=A.far=J,(k!==V.near||I!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,I=V.far),V.layers.mask=y.layers.mask|6,A.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Z=y.parent,w=V.cameras;j(V,Z);for(let R=0;R<w.length;R++)j(w[R],Z);w.length===2?te(V,A,N):V.projectionMatrix.copy(A.projectionMatrix),P===null&&y.isPerspectiveCamera&&(P={camera:y,fov:y.fov,zoom:y.zoom}),ce(y,V,Z)};function ce(y,L,J){J===null?y.matrix.copy(L.matrixWorld):(y.matrix.copy(J.matrixWorld),y.matrix.invert(),y.matrix.multiply(L.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(L.projectionMatrix),y.projectionMatrixInverse.copy(L.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=Yr*2*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(y){c=y,h!==null&&(h.fixedFoveation=y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(y){return d[y]};let le=null;function fe(y,L){if(u=L.getViewerPose(l||o),f=L,u!==null){const J=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Z=!1;J.length!==V.cameras.length&&(V.cameras.length=0,Z=!0);for(let H=0;H<J.length;H++){const ne=J[H];let F=null;if(p!==null)F=p.getViewport(ne);else{const ie=g.getViewSubImage(h,ne);F=ie.viewport,H===0&&(e.setRenderTargetTextures(x,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(x))}let ee=q[H];ee===void 0&&(ee=new wn,ee.layers.enable(H),ee.viewport=new Ft,q[H]=ee),ee.matrix.fromArray(ne.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ne.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(F.x,F.y,F.width,F.height),H===0&&(V.matrix.copy(ee.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Z===!0&&V.cameras.push(ee)}const w=s.enabledFeatures;if(w&&w.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){g=i.getBinding();const H=g.getDepthInformation(J[0]);H&&H.isValid&&H.texture&&m.init(H,s.renderState)}if(w&&w.includes("camera-access")&&_){e.state.unbindTexture(),g=i.getBinding();for(let H=0;H<J.length;H++){const ne=J[H].camera;if(ne){let F=d[ne];F||(F=new vu,d[ne]=F);const ee=g.getCameraImage(ne);F.sourceTexture=ee}}}}for(let J=0;J<E.length;J++){const Z=S[J],w=E[J];Z!==null&&w!==void 0&&w.update(Z,L,l||o)}le&&le(y,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),f=null}const U=new Vf;U.setAnimationLoop(fe),this.setAnimationLoop=function(y){le=y},this.dispose=function(){}}}const vx=new xt,Jf=new nt;Jf.set(-1,0,0,0,1,0,0,0,1);function xx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,If(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,C,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),g(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),f(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,C):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===gn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===gn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),C=M.envMap,x=M.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(x)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jf),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=C*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function g(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const S=E.program;i.uniformBlockBinding(x,S)}function l(x,E){let S=s[x.id];S===void 0&&(m(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",M));const T=E.program;i.updateUBOMapping(x,T);const v=e.render.frame;r[x.id]!==v&&(h(x),r[x.id]=v)}function u(x){const E=g();x.__bindingPointIndex=E;const S=n.createBuffer(),T=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function g(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const E=s[x.id],S=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,P=S.length;v<P;v++){const A=S[v];if(Array.isArray(A))for(let N=0,q=A.length;N<q;N++)p(A[N],v,N,T);else p(A,v,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,E,S,T){if(_(x,E,S,T)===!0){const v=x.__offset,P=x.value;if(Array.isArray(P)){let A=0;for(let N=0;N<P.length;N++){const q=P[N],V=d(q);f(q,x.__data,A),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(A+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(P,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function f(x,E,S){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,S)}function _(x,E,S,T){const v=x.value,P=E+"_"+S;if(T[P]===void 0)return typeof v=="number"||typeof v=="boolean"?T[P]=v:ArrayBuffer.isView(v)?T[P]=v.slice():T[P]=v.clone(),!0;{const A=T[P];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return T[P]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(x){const E=x.uniforms;let S=0;const T=16;for(let P=0,A=E.length;P<A;P++){const N=Array.isArray(E[P])?E[P]:[E[P]];for(let q=0,V=N.length;q<V;q++){const k=N[q],I=Array.isArray(k.value)?k.value:[k.value];for(let O=0,B=I.length;O<B;O++){const Q=I[O],Y=d(Q),W=S%T,te=W%Y.boundary,j=W+te;S+=te,j!==0&&T-j<Y.storage&&(S+=T-j),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Y.storage}}}const v=S%T;return v>0&&(S+=T-v),x.__size=S,x.__cache={},this}function d(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",x),E}function M(x){const E=x.target;E.removeEventListener("dispose",M);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function C(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:C}}const Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function Sx(){return li===null&&(li=new fu(Mx,16,16,is,ni),li.name="DFG_LUT",li.minFilter=tn,li.magFilter=tn,li.wrapS=hi,li.wrapT=hi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class Zf{constructor(e={}){const{canvas:t=mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const _=p,m=new Set([sl,il,nl]),d=new Set([yn,ti,ir,sr,ja,el]),M=new Uint32Array(4),C=new Int32Array(4),x=new G;let E=null,S=null;const T=[],v=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1,q=null,V=null,k=null,I=null;this._outputColorSpace=cn;let O=0,B=0,Q=null,Y=-1,W=null;const te=new Ft,j=new Ft;let ce=null;const le=new ht(0);let fe=0,U=t.width,y=t.height,L=1,J=null,Z=null;const w=new Ft(0,0,U,y),R=new Ft(0,0,U,y);let z=!1;const H=new ul;let ne=!1,F=!1;const ee=new xt,ie=new G,$=new Ft,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function be(){return Q===null?L:1}let K=i;function ze(D,se){return t.getContext(D,se)}let Ae,X,b,oe,ue,pe,Ee,Ce,_e,xe,Re,$e,Ne,Pe,Je,et,rt,re,Le,ve,Ie,ke,Me;try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),K===null){const se="webgl2";if(K=ze(se,D),K===null)throw ze(se)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(D){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),_t("WebGLRenderer: "+D.message),D}function Ze(){Ae=new bv(K),Ae.init(),Ie=new $f(K,Ae),X=new fv(K,Ae,e,Ie),b=new dx(K,Ae),X.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),V=K.createFramebuffer(),k=K.createFramebuffer(),I=K.createFramebuffer(),oe=new Tv(K),ue=new Q1,pe=new fx(K,Ae,b,ue,X,Ie,oe),Ee=new Sv(A),Ce=new C0(K),ke=new hv(K,Ce),_e=new Ev(K,Ce,oe,ke),xe=new Cv(K,_e,Ce,ke,oe),re=new Av(K,X,pe),Je=new pv(ue),Re=new K1(A,Ee,Ae,X,ke,Je),$e=new xx(A,ue),Ne=new ex,Pe=new ox(Ae),rt=new uv(A,Ee,b,xe,f,c),et=new hx(A,xe,X),Me=new yx(K,oe,X,b),Le=new dv(K,Ae,oe),ve=new wv(K,Ae,oe),oe.programs=Re.programs,A.capabilities=X,A.extensions=Ae,A.properties=ue,A.renderLists=Ne,A.shadowMap=et,A.state=b,A.info=oe}_!==yn&&(P=new Pv(_,t.width,t.height,a,s,r));const Xe=new _x(A,K);this.xr=Xe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const D=Ae.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ae.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(D){D!==void 0&&(L=D,this.setSize(U,y,!1))},this.getSize=function(D){return D.set(U,y)},this.setSize=function(D,se,me=!0){if(Xe.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=D,y=se,t.width=Math.floor(D*L),t.height=Math.floor(se*L),me===!0&&(t.style.width=D+"px",t.style.height=se+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,D,se)},this.getDrawingBufferSize=function(D){return D.set(U*L,y*L).floor()},this.setDrawingBufferSize=function(D,se,me){U=D,y=se,L=me,t.width=Math.floor(D*me),t.height=Math.floor(se*me),this.setViewport(0,0,D,se)},this.setEffects=function(D){if(_===yn){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let se=0;se<D.length;se++)if(D[se].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(te)},this.getViewport=function(D){return D.copy(w)},this.setViewport=function(D,se,me,he){D.isVector4?w.set(D.x,D.y,D.z,D.w):w.set(D,se,me,he),b.viewport(te.copy(w).multiplyScalar(L).round())},this.getScissor=function(D){return D.copy(R)},this.setScissor=function(D,se,me,he){D.isVector4?R.set(D.x,D.y,D.z,D.w):R.set(D,se,me,he),b.scissor(j.copy(R).multiplyScalar(L).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(D){b.setScissorTest(z=D)},this.setOpaqueSort=function(D){J=D},this.setTransparentSort=function(D){Z=D},this.getClearColor=function(D){return D.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(D=!0,se=!0,me=!0){let he=0;if(D){let de=!1;if(Q!==null){const Fe=Q.texture.format;de=m.has(Fe)}if(de){const Fe=Q.texture.type,Ve=d.has(Fe),Ue=rt.getClearColor(),We=rt.getClearAlpha(),Ye=Ue.r,lt=Ue.g,ft=Ue.b;Ve?(M[0]=Ye,M[1]=lt,M[2]=ft,M[3]=We,K.clearBufferuiv(K.COLOR,0,M)):(C[0]=Ye,C[1]=lt,C[2]=ft,C[3]=We,K.clearBufferiv(K.COLOR,0,C))}else he|=K.COLOR_BUFFER_BIT}se&&(he|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(he|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&K.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),q=D},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),rt.dispose(),Ne.dispose(),Pe.dispose(),ue.dispose(),Ee.dispose(),xe.dispose(),ke.dispose(),Me.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Qu),Xe.removeEventListener("sessionend",ju),cs.stop()};function It(D){D.preventDefault(),bc("WebGLRenderer: Context Lost."),N=!0}function bt(){bc("WebGLRenderer: Context Restored."),N=!1;const D=oe.autoReset,se=et.enabled,me=et.autoUpdate,he=et.needsUpdate,de=et.type;Ze(),oe.autoReset=D,et.enabled=se,et.autoUpdate=me,et.needsUpdate=he,et.type=de}function Hn(D){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ri(D){const se=D.target;se.removeEventListener("dispose",ri),Cp(se)}function Cp(D){Rp(D),ue.remove(D)}function Rp(D){const se=ue.get(D).programs;se!==void 0&&(se.forEach(function(me){Re.releaseProgram(me)}),D.isShaderMaterial&&Re.releaseShaderCache(D))}this.renderBufferDirect=function(D,se,me,he,de,Fe){se===null&&(se=ae);const Ve=de.isMesh&&de.matrixWorld.determinantAffine()<0,Ue=Ip(D,se,me,he,de);b.setMaterial(he,Ve);let We=me.index,Ye=1;if(he.wireframe===!0){if(We=_e.getWireframeAttribute(me),We===void 0)return;Ye=2}const lt=me.drawRange,ft=me.attributes.position;let qe=lt.start*Ye,Et=(lt.start+lt.count)*Ye;Fe!==null&&(qe=Math.max(qe,Fe.start*Ye),Et=Math.min(Et,(Fe.start+Fe.count)*Ye)),We!==null?(qe=Math.max(qe,0),Et=Math.min(Et,We.count)):ft!=null&&(qe=Math.max(qe,0),Et=Math.min(Et,ft.count));const qt=Et-qe;if(qt<0||qt===1/0)return;ke.setup(de,he,Ue,me,We);let Nt,Pt=Le;if(We!==null&&(Nt=Ce.get(We),Pt=ve,Pt.setIndex(Nt)),de.isMesh)he.wireframe===!0?(b.setLineWidth(he.wireframeLinewidth*be()),Pt.setMode(K.LINES)):Pt.setMode(K.TRIANGLES);else if(de.isLine){let on=he.linewidth;on===void 0&&(on=1),b.setLineWidth(on*be()),de.isLineSegments?Pt.setMode(K.LINES):de.isLineLoop?Pt.setMode(K.LINE_LOOP):Pt.setMode(K.LINE_STRIP)}else de.isPoints?Pt.setMode(K.POINTS):de.isSprite&&Pt.setMode(K.TRIANGLES);if(de.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Pt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else{const on=de._multiDrawStarts,Ge=de._multiDrawCounts,hn=de._multiDrawCount,vt=We?Ce.get(We).bytesPerElement:1,Cn=ue.get(he).currentProgram.getUniforms();for(let oi=0;oi<hn;oi++)Cn.setValue(K,"_gl_DrawID",oi),Pt.render(on[oi]/vt,Ge[oi])}else if(de.isInstancedMesh)Pt.renderInstances(qe,qt,de.count);else if(me.isInstancedBufferGeometry){const on=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ge=Math.min(me.instanceCount,on);Pt.renderInstances(qe,qt,Ge)}else Pt.render(qe,qt)};function Ku(D,se,me,he){q!==null&&D.isNodeMaterial&&q.setObject(he,D),ne===!0&&Je.setState(D,me,!1),D.transparent===!0&&D.side===Dn&&D.forceSinglePass===!1?(D.side=gn,D.needsUpdate=!0,po(D,se,he),D.side=ts,D.needsUpdate=!0,po(D,se,he),D.side=Dn):po(D,se,he)}this.compile=function(D,se,me=null){me===null&&(me=D),q!==null&&q.renderStart(D,se,me),S=Pe.get(me),S.init(se),v.push(S),me.traverseVisible(function(de){de.isLight&&de.layers.test(se.layers)&&(S.pushLight(de),de.castShadow&&S.pushShadow(de))}),D!==me&&D.traverseVisible(function(de){de.isLight&&de.layers.test(se.layers)&&(S.pushLight(de),de.castShadow&&S.pushShadow(de))}),S.setupLights(),q!==null&&q.updateLights(S.state.lightsArray),F=this.localClippingEnabled,ne=Je.init(this.clippingPlanes,F),ne===!0&&Je.setGlobalState(this.clippingPlanes,se),q!==null&&et.render(S.state.shadowsArray,me,se);const he=new Set;return D.traverse(function(de){if(!(de.isMesh||de.isPoints||de.isLine||de.isSprite))return;const Fe=de.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Ue=Fe[Ve];Ku(Ue,me,se,de),he.add(Ue)}else Ku(Fe,me,se,de),he.add(Fe)}),S=v.pop(),q!==null&&q.renderEnd(),he},this.compileAsync=function(D,se,me=null){const he=this.compile(D,se,me);return new Promise(de=>{function Fe(){if(he.forEach(function(Ve){const We=ue.get(Ve).currentProgram;(We===void 0||We.isReady())&&he.delete(Ve)}),he.size===0){de(D);return}setTimeout(Fe,10)}Ae.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Cl=null;function Pp(D){Cl&&Cl(D)}function Qu(){cs.stop()}function ju(){cs.start()}const cs=new Vf;cs.setAnimationLoop(Pp),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(D){Cl=D,Xe.setAnimationLoop(D),D===null?cs.stop():cs.start()},Xe.addEventListener("sessionstart",Qu),Xe.addEventListener("sessionend",ju),this.render=function(D,se){if(se!==void 0&&se.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;q!==null&&q.renderStart(D,se);const me=Xe.enabled===!0&&Xe.isPresenting===!0,he=P!==null&&(Q===null||me)&&P.begin(A,Q);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(se),se=Xe.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,se,Q),S=Pe.get(D,v.length),S.init(se),S.state.textureUnits=pe.getTextureUnits(),v.push(S),ee.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H.setFromProjectionMatrix(ee,Kn,se.reversedDepth),F=this.localClippingEnabled,ne=Je.init(this.clippingPlanes,F),E=Ne.get(D,T.length),E.init(),T.push(E),Xe.enabled===!0&&Xe.isPresenting===!0){const Ve=A.xr.getDepthSensingMesh();Ve!==null&&Rl(Ve,se,-1/0,A.sortObjects)}Rl(D,se,0,A.sortObjects),E.finish(),q!==null&&q.updateLights(S.state.lightsArray),A.sortObjects===!0&&E.sort(J,Z),ye=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ye&&rt.addToRenderList(E,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ne===!0&&Je.beginShadows();const de=S.state.shadowsArray;if(et.render(de,D,se),ne===!0&&Je.endShadows(),(he&&P.hasRenderPass())===!1){const Ve=E.opaque,Ue=E.transmissive;if(S.setupLights(),se.isArrayCamera){const We=se.cameras;if(Ue.length>0)for(let Ye=0,lt=We.length;Ye<lt;Ye++){const ft=We[Ye];th(Ve,Ue,D,ft)}ye&&rt.render(D);for(let Ye=0,lt=We.length;Ye<lt;Ye++){const ft=We[Ye];eh(E,D,ft,ft.viewport)}}else Ue.length>0&&th(Ve,Ue,D,se),ye&&rt.render(D),eh(E,D,se)}Q!==null&&B===0&&(pe.updateMultisampleRenderTarget(Q),pe.updateRenderTargetMipmap(Q)),he&&P.end(A),D.isScene===!0&&D.onAfterRender(A,D,se),ke.resetDefaultState(),Y=-1,W=null,v.pop(),v.length>0?(S=v[v.length-1],pe.setTextureUnits(S.state.textureUnits),ne===!0&&Je.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,q!==null&&q.renderEnd()};function Rl(D,se,me,he){if(D.visible===!1)return;if(D.layers.test(se.layers)){if(D.isGroup)me=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(se);else if(D.isLightProbeGrid)S.pushLightProbeGrid(D);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(H)){he&&$.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ee);const Ve=xe.update(D),Ue=D.material;Ue.visible&&E.push(D,Ve,Ue,me,$.z,null,se)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(H))){const Ve=xe.update(D),Ue=D.material;if(he&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),$.copy(D.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),$.copy(Ve.boundingSphere.center)),$.applyMatrix4(D.matrixWorld).applyMatrix4(ee)),Array.isArray(Ue)){const We=Ve.groups;for(let Ye=0,lt=We.length;Ye<lt;Ye++){const ft=We[Ye],qe=Ue[ft.materialIndex];qe&&qe.visible&&E.push(D,Ve,qe,me,$.z,ft,se)}}else Ue.visible&&E.push(D,Ve,Ue,me,$.z,null,se)}}const Fe=D.children;for(let Ve=0,Ue=Fe.length;Ve<Ue;Ve++)Rl(Fe[Ve],se,me,he)}function eh(D,se,me,he){const{opaque:de,transmissive:Fe,transparent:Ve}=D;S.setupLightsView(me),ne===!0&&Je.setGlobalState(A.clippingPlanes,me),he&&b.viewport(te.copy(he)),de.length>0&&fo(de,se,me),Fe.length>0&&fo(Fe,se,me),Ve.length>0&&fo(Ve,se,me),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function th(D,se,me,he){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[he.id]===void 0){const qe=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[he.id]=new zn(1,1,{generateMipmaps:!0,type:qe?ni:yn,minFilter:$i,samples:Math.max(4,X.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Fe=S.state.transmissionRenderTarget[he.id],Ve=he.viewport||te;Fe.setSize(Ve.z*A.transmissionResolutionScale,Ve.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget(),We=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(Fe),A.getClearColor(le),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),ye&&rt.render(me);const lt=A.toneMapping;A.toneMapping=Qn;const ft=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),S.setupLightsView(he),ne===!0&&Je.setGlobalState(A.clippingPlanes,he),fo(D,me,he),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Et=0,qt=se.length;Et<qt;Et++){const Nt=se[Et],{object:Pt,geometry:on,material:Ge,group:hn}=Nt;if(Ge.side===Dn&&Pt.layers.test(he.layers)){const vt=Ge.side;Ge.side=gn,Ge.needsUpdate=!0,nh(Pt,me,he,on,Ge,hn),Ge.side=vt,Ge.needsUpdate=!0,qe=!0}}qe===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}A.setRenderTarget(Ue,We,Ye),A.setClearColor(le,fe),ft!==void 0&&(he.viewport=ft),A.toneMapping=lt}function fo(D,se,me){const he=se.isScene===!0?se.overrideMaterial:null;for(let de=0,Fe=D.length;de<Fe;de++){const Ve=D[de],{object:Ue,geometry:We,group:Ye}=Ve;let lt=Ve.material;lt.allowOverride===!0&&he!==null&&(lt=he),Ue.layers.test(me.layers)&&nh(Ue,se,me,We,lt,Ye)}}function nh(D,se,me,he,de,Fe){q!==null&&de.isNodeMaterial&&q.setObject(D,de),D.onBeforeRender(A,se,me,he,de,Fe),D.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),de.onBeforeRender(A,se,me,he,D,Fe),de.transparent===!0&&de.side===Dn&&de.forceSinglePass===!1?(de.side=gn,de.needsUpdate=!0,A.renderBufferDirect(me,se,he,de,D,Fe),de.side=ts,de.needsUpdate=!0,A.renderBufferDirect(me,se,he,de,D,Fe),de.side=Dn):A.renderBufferDirect(me,se,he,de,D,Fe),D.onAfterRender(A,se,me,he,de,Fe)}function po(D,se,me){se.isScene!==!0&&(se=ae);const he=ue.get(D),de=S.state.lights,Fe=S.state.shadowsArray,Ve=de.state.version,Ue=Re.getParameters(D,de.state,Fe,se,me,S.state.lightProbeGridArray),We=Re.getProgramCacheKey(Ue);let Ye=he.programs;he.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?se.environment:null,he.fog=se.fog;const lt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;he.envMap=Ee.get(D.envMap||he.environment,lt),he.envMapRotation=he.environment!==null&&D.envMap===null?se.environmentRotation:D.envMapRotation,Ye===void 0&&(D.addEventListener("dispose",ri),Ye=new Map,he.programs=Ye);let ft=Ye.get(We);if(ft!==void 0){if(he.currentProgram===ft&&he.lightsStateVersion===Ve)return sh(D,Ue),ft}else Ue.uniforms=Re.getUniforms(D),q!==null&&D.isNodeMaterial&&q.build(D,me,Ue),D.onBeforeCompile(Ue,A),ft=Re.acquireProgram(Ue,We),Ye.set(We,ft),he.uniforms=Ue.uniforms;const qe=he.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qe.clippingPlanes=Je.uniform),sh(D,Ue),he.needsLights=Np(D),he.lightsStateVersion=Ve,he.needsLights&&(qe.ambientLightColor.value=de.state.ambient,qe.lightProbe.value=de.state.probe,qe.sunLights.value=de.state.sun,qe.sunLightShadows.value=de.state.sunShadow,qe.directionalLights.value=de.state.directional,qe.directionalLightShadows.value=de.state.directionalShadow,qe.spotLights.value=de.state.spot,qe.spotLightShadows.value=de.state.spotShadow,qe.rectAreaLights.value=de.state.rectArea,qe.ltc_1.value=de.state.rectAreaLTC1,qe.ltc_2.value=de.state.rectAreaLTC2,qe.pointLights.value=de.state.point,qe.pointLightShadows.value=de.state.pointShadow,qe.hemisphereLights.value=de.state.hemi,qe.sunShadowMatrix.value=de.state.sunShadowMatrix,qe.sunShadowCascade.value=de.state.sunShadowCascade,qe.directionalShadowMatrix.value=de.state.directionalShadowMatrix,qe.spotLightMatrix.value=de.state.spotLightMatrix,qe.spotLightMap.value=de.state.spotLightMap,qe.pointShadowMatrix.value=de.state.pointShadowMatrix),he.lightProbeGrid=S.state.lightProbeGridArray.length>0,he.currentProgram=ft,he.uniformsList=null,ft}function ih(D){if(D.uniformsList===null){const se=D.currentProgram.getUniforms();D.uniformsList=Zo.seqWithValue(se.seq,D.uniforms)}return D.uniformsList}function sh(D,se){const me=ue.get(D);me.outputColorSpace=se.outputColorSpace,me.batching=se.batching,me.batchingColor=se.batchingColor,me.instancing=se.instancing,me.instancingColor=se.instancingColor,me.instancingMorph=se.instancingMorph,me.skinning=se.skinning,me.morphTargets=se.morphTargets,me.morphNormals=se.morphNormals,me.morphColors=se.morphColors,me.morphTargetsCount=se.morphTargetsCount,me.numClippingPlanes=se.numClippingPlanes,me.numIntersection=se.numClipIntersection,me.vertexAlphas=se.vertexAlphas,me.vertexTangents=se.vertexTangents,me.toneMapping=se.toneMapping}function Lp(D,se){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;x.setFromMatrixPosition(se.matrixWorld);for(let me=0,he=D.length;me<he;me++){const de=D[me];if(de.texture!==null&&de.boundingBox.containsPoint(x))return de}return null}function Ip(D,se,me,he,de){se.isScene!==!0&&(se=ae),pe.resetTextureUnits();const Fe=se.fog,Ve=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?se.environment:null,Ue=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:mt.workingColorSpace,We=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,Ye=Ee.get(he.envMap||Ve,We),lt=he.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,ft=!!me.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),qe=!!me.morphAttributes.position,Et=!!me.morphAttributes.normal,qt=!!me.morphAttributes.color;let Nt=Qn;he.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Nt=A.toneMapping);const Pt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,on=Pt!==void 0?Pt.length:0,Ge=ue.get(he),hn=S.state.lights;if(ne===!0&&(F===!0||D!==W)){const Dt=D===W&&he.id===Y;Je.setState(he,D,Dt)}let vt=!1;he.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==hn.state.version||Ge.outputColorSpace!==Ue||de.isBatchedMesh&&Ge.batching===!1||!de.isBatchedMesh&&Ge.batching===!0||de.isBatchedMesh&&Ge.batchingColor===!0&&de._colorsTexture===null||de.isBatchedMesh&&Ge.batchingColor===!1&&de._colorsTexture!==null||de.isInstancedMesh&&Ge.instancing===!1||!de.isInstancedMesh&&Ge.instancing===!0||de.isSkinnedMesh&&Ge.skinning===!1||!de.isSkinnedMesh&&Ge.skinning===!0||de.isInstancedMesh&&Ge.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&Ge.instancingColor===!1&&de.instanceColor!==null||de.isInstancedMesh&&Ge.instancingMorph===!0&&de.morphTexture===null||de.isInstancedMesh&&Ge.instancingMorph===!1&&de.morphTexture!==null||Ge.envMap!==Ye||he.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Je.numPlanes||Ge.numIntersection!==Je.numIntersection)||Ge.vertexAlphas!==lt||Ge.vertexTangents!==ft||Ge.morphTargets!==qe||Ge.morphNormals!==Et||Ge.morphColors!==qt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==on||!!Ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ge.__version=he.version);let Cn=Ge.currentProgram;vt===!0&&(Cn=po(he,se,de),q&&he.isNodeMaterial&&q.onUpdateProgram(he,Cn,Ge));let oi=!1,Bi=!1,Ps=!1;const Rt=Cn.getUniforms(),Bt=Ge.uniforms;if(b.useProgram(Cn.program)&&(oi=!0,Bi=!0,Ps=!0),he.id!==Y&&(Y=he.id,Bi=!0),Ge.needsLights){const Dt=Lp(S.state.lightProbeGridArray,de);Ge.lightProbeGrid!==Dt&&(Ge.lightProbeGrid=Dt,Bi=!0)}if(oi||W!==D){b.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Rt.setValue(K,"projectionMatrix",D.projectionMatrix),Rt.setValue(K,"viewMatrix",D.matrixWorldInverse);const Vi=Rt.map.cameraPosition;Vi!==void 0&&Vi.setValue(K,ie.setFromMatrixPosition(D.matrixWorld)),X.logarithmicDepthBuffer&&Rt.setValue(K,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Rt.setValue(K,"isOrthographic",D.isOrthographicCamera===!0),W!==D&&(W=D,Bi=!0,Ps=!0)}if(Ge.needsLights&&(hn.state.sunShadowMap.length>0&&Rt.setValue(K,"sunShadowMap",hn.state.sunShadowMap,pe),hn.state.directionalShadowMap.length>0&&Rt.setValue(K,"directionalShadowMap",hn.state.directionalShadowMap,pe),hn.state.spotShadowMap.length>0&&Rt.setValue(K,"spotShadowMap",hn.state.spotShadowMap,pe),hn.state.pointShadowMap.length>0&&Rt.setValue(K,"pointShadowMap",hn.state.pointShadowMap,pe)),de.isSkinnedMesh){Rt.setOptional(K,de,"bindMatrix"),Rt.setOptional(K,de,"bindMatrixInverse");const Dt=de.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(K,"boneTexture",Dt.boneTexture,pe))}de.isBatchedMesh&&(Rt.setOptional(K,de,"batchingTexture"),Rt.setValue(K,"batchingTexture",de._matricesTexture,pe),Rt.setOptional(K,de,"batchingIdTexture"),Rt.setValue(K,"batchingIdTexture",de._indirectTexture,pe),Rt.setOptional(K,de,"batchingColorTexture"),de._colorsTexture!==null&&Rt.setValue(K,"batchingColorTexture",de._colorsTexture,pe));const Gi=me.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&re.update(de,me,Cn),(Bi||Ge.receiveShadow!==de.receiveShadow)&&(Ge.receiveShadow=de.receiveShadow,Rt.setValue(K,"receiveShadow",de.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&se.environment!==null&&(Bt.envMapIntensity.value=se.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Sx()),Bi){if(Rt.setValue(K,"toneMappingExposure",A.toneMappingExposure),Ge.needsLights&&Dp(Bt,Ps),Fe&&he.fog===!0&&$e.refreshFogUniforms(Bt,Fe),$e.refreshMaterialUniforms(Bt,he,L,y,S.state.transmissionRenderTarget[D.id]),Ge.needsLights&&Ge.lightProbeGrid){const Dt=Ge.lightProbeGrid;Bt.probesSH.value=Dt.texture,Bt.probesMin.value.copy(Dt.boundingBox.min),Bt.probesMax.value.copy(Dt.boundingBox.max),Bt.probesResolution.value.copy(Dt.resolution)}Zo.upload(K,ih(Ge),Bt,pe)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Zo.upload(K,ih(Ge),Bt,pe),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Rt.setValue(K,"center",de.center),Rt.setValue(K,"modelViewMatrix",de.modelViewMatrix),Rt.setValue(K,"normalMatrix",de.normalMatrix),Rt.setValue(K,"modelMatrix",de.matrixWorld),he.uniformsGroups!==void 0){const Dt=he.uniformsGroups;for(let Vi=0,Ls=Dt.length;Vi<Ls;Vi++){const oh=Dt[Vi];Me.update(oh,Cn),Me.bind(oh,Cn)}}return Cn}function Dp(D,se){D.ambientLightColor.needsUpdate=se,D.lightProbe.needsUpdate=se,D.sunLights.needsUpdate=se,D.sunLightShadows.needsUpdate=se,D.directionalLights.needsUpdate=se,D.directionalLightShadows.needsUpdate=se,D.pointLights.needsUpdate=se,D.pointLightShadows.needsUpdate=se,D.spotLights.needsUpdate=se,D.spotLightShadows.needsUpdate=se,D.rectAreaLights.needsUpdate=se,D.hemisphereLights.needsUpdate=se}function Np(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(D,se,me){const he=ue.get(D);he.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),ue.get(D.texture).__webglTexture=se,ue.get(D.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:me,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,se){const me=ue.get(D);me.__webglFramebuffer=se,me.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(D,se=0,me=0){Q=D,O=se,B=me;let he=null,de=!1,Fe=!1;if(D){const Ue=ue.get(D);if(Ue.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(K.FRAMEBUFFER,Ue.__webglFramebuffer),te.copy(D.viewport),j.copy(D.scissor),ce=D.scissorTest,b.viewport(te),b.scissor(j),b.setScissorTest(ce),Y=-1;return}else if(Ue.__webglFramebuffer===void 0)pe.setupRenderTarget(D);else if(Ue.__hasExternalTextures)pe.rebindTextures(D,ue.get(D.texture).__webglTexture,ue.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const lt=D.depthTexture;if(Ue.__boundDepthTexture!==lt){if(lt!==null&&ue.has(lt)&&(D.width!==lt.image.width||D.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(D)}}const We=D.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const Ye=ue.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ye[se])?he=Ye[se][me]:he=Ye[se],de=!0):D.samples>0&&pe.useMultisampledRTT(D)===!1?he=ue.get(D).__webglMultisampledFramebuffer:Array.isArray(Ye)?he=Ye[me]:he=Ye,te.copy(D.viewport),j.copy(D.scissor),ce=D.scissorTest}else te.copy(w).multiplyScalar(L).floor(),j.copy(R).multiplyScalar(L).floor(),ce=z;if(me!==0&&(he=V),b.bindFramebuffer(K.FRAMEBUFFER,he)&&b.drawBuffers(D,he),b.viewport(te),b.scissor(j),b.setScissorTest(ce),de){const Ue=ue.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue.__webglTexture,me)}else if(Fe){const Ue=se;for(let We=0;We<D.textures.length;We++){const Ye=ue.get(D.textures[We]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+We,Ye.__webglTexture,me,Ue)}}else if(D!==null&&me!==0){const Ue=ue.get(D.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ue.__webglTexture,me)}Y=-1};function rh(D){const se=ue.get(D);return(se.__readFormat!==D.format||se.__readType!==D.type)&&(se.__readFormat=D.format,se.__readType=D.type,se.__formatReadable=X.textureFormatReadable(D.format),se.__typeReadable=X.textureTypeReadable(D.type)),se}this.readRenderTargetPixels=function(D,se,me,he,de,Fe,Ve,Ue=0){if(!(D&&D.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ue.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){b.bindFramebuffer(K.FRAMEBUFFER,We);try{const Ye=D.textures[Ue],lt=Ye.format,ft=Ye.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ue);const qe=rh(Ye);if(qe.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=D.width-he&&me>=0&&me<=D.height-de&&K.readPixels(se,me,he,de,Ie.convert(lt),Ie.convert(ft),Fe)}finally{const Ye=Q!==null?ue.get(Q).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(D,se,me,he,de,Fe,Ve,Ue=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ue.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(se>=0&&se<=D.width-he&&me>=0&&me<=D.height-de){b.bindFramebuffer(K.FRAMEBUFFER,We);const Ye=D.textures[Ue],lt=Ye.format,ft=Ye.type;D.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ue);const qe=rh(Ye);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Et),K.bufferData(K.PIXEL_PACK_BUFFER,Fe.byteLength,K.STREAM_READ),K.readPixels(se,me,he,de,Ie.convert(lt),Ie.convert(ft),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const qt=Q!==null?ue.get(Q).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,qt);const Nt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await um(K,Nt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Et),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Fe),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Et),K.deleteSync(Nt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,se=null,me=0){const he=Math.pow(2,-me),de=Math.floor(D.image.width*he),Fe=Math.floor(D.image.height*he),Ve=se!==null?se.x:0,Ue=se!==null?se.y:0;pe.setTexture2D(D,0),K.copyTexSubImage2D(K.TEXTURE_2D,me,0,0,Ve,Ue,de,Fe),b.unbindTexture()},this.copyTextureToTexture=function(D,se,me=null,he=null,de=0,Fe=0){let Ve,Ue,We,Ye,lt,ft,qe,Et,qt;const Nt=D.isCompressedTexture?D.mipmaps[Fe]:D.image;if(me!==null)Ve=me.max.x-me.min.x,Ue=me.max.y-me.min.y,We=me.isBox3?me.max.z-me.min.z:1,Ye=me.min.x,lt=me.min.y,ft=me.isBox3?me.min.z:0;else{const Bt=Math.pow(2,-de);Ve=Math.floor(Nt.width*Bt),Ue=Math.floor(Nt.height*Bt),D.isDataArrayTexture?We=Nt.depth:D.isData3DTexture?We=Math.floor(Nt.depth*Bt):We=1,Ye=0,lt=0,ft=0}he!==null?(qe=he.x,Et=he.y,qt=he.z):(qe=0,Et=0,qt=0);const Pt=Ie.convert(se.format),on=Ie.convert(se.type);let Ge;se.isData3DTexture?(pe.setTexture3D(se,0),Ge=K.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(pe.setTexture2DArray(se,0),Ge=K.TEXTURE_2D_ARRAY):(pe.setTexture2D(se,0),Ge=K.TEXTURE_2D),b.activeTexture(K.TEXTURE0),b.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,se.flipY),b.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),b.pixelStorei(K.UNPACK_ALIGNMENT,se.unpackAlignment);const hn=b.getParameter(K.UNPACK_ROW_LENGTH),vt=b.getParameter(K.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(K.UNPACK_SKIP_PIXELS),oi=b.getParameter(K.UNPACK_SKIP_ROWS),Bi=b.getParameter(K.UNPACK_SKIP_IMAGES);b.pixelStorei(K.UNPACK_ROW_LENGTH,Nt.width),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Nt.height),b.pixelStorei(K.UNPACK_SKIP_PIXELS,Ye),b.pixelStorei(K.UNPACK_SKIP_ROWS,lt),b.pixelStorei(K.UNPACK_SKIP_IMAGES,ft);const Ps=D.isDataArrayTexture||D.isData3DTexture,Rt=se.isDataArrayTexture||se.isData3DTexture;if(D.isDepthTexture){const Bt=ue.get(D),Gi=ue.get(se),Dt=ue.get(Bt.__renderTarget),Vi=ue.get(Gi.__renderTarget);b.bindFramebuffer(K.READ_FRAMEBUFFER,Dt.__webglFramebuffer),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ls=0;Ls<We;Ls++)Ps&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ue.get(D).__webglTexture,de,ft+Ls),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ue.get(se).__webglTexture,Fe,qt+Ls)),K.blitFramebuffer(Ye,lt,Ve,Ue,qe,Et,Ve,Ue,K.DEPTH_BUFFER_BIT,K.NEAREST);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(de!==0||D.isRenderTargetTexture||ue.has(D)){const Bt=ue.get(D),Gi=ue.get(se);b.bindFramebuffer(K.READ_FRAMEBUFFER,k),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,I);for(let Dt=0;Dt<We;Dt++)Ps?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Bt.__webglTexture,de,ft+Dt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Bt.__webglTexture,de),Rt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gi.__webglTexture,Fe,qt+Dt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Gi.__webglTexture,Fe),de!==0?K.blitFramebuffer(Ye,lt,Ve,Ue,qe,Et,Ve,Ue,K.COLOR_BUFFER_BIT,K.NEAREST):Rt?K.copyTexSubImage3D(Ge,Fe,qe,Et,qt+Dt,Ye,lt,Ve,Ue):K.copyTexSubImage2D(Ge,Fe,qe,Et,Ye,lt,Ve,Ue);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Rt?D.isDataTexture||D.isData3DTexture?K.texSubImage3D(Ge,Fe,qe,Et,qt,Ve,Ue,We,Pt,on,Nt.data):se.isCompressedArrayTexture?K.compressedTexSubImage3D(Ge,Fe,qe,Et,qt,Ve,Ue,We,Pt,Nt.data):K.texSubImage3D(Ge,Fe,qe,Et,qt,Ve,Ue,We,Pt,on,Nt):D.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Fe,qe,Et,Ve,Ue,Pt,on,Nt.data):D.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Fe,qe,Et,Nt.width,Nt.height,Pt,Nt.data):K.texSubImage2D(K.TEXTURE_2D,Fe,qe,Et,Ve,Ue,Pt,on,Nt);b.pixelStorei(K.UNPACK_ROW_LENGTH,hn),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,vt),b.pixelStorei(K.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(K.UNPACK_SKIP_ROWS,oi),b.pixelStorei(K.UNPACK_SKIP_IMAGES,Bi),Fe===0&&se.generateMipmaps&&K.generateMipmap(Ge),b.unbindTexture()},this.initRenderTarget=function(D){ue.get(D).__webglFramebuffer===void 0&&pe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?pe.setTextureCube(D,0):D.isData3DTexture?pe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?pe.setTexture2DArray(D,0):pe.setTexture2D(D,0),b.unbindTexture()},this.resetState=function(){O=0,B=0,Q=null,b.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const Wt=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ka,AddEquation:_s,AddOperation:nf,AdditiveBlending:xc,AgXToneMapping:eu,AlphaFormat:au,AlwaysCompare:ff,AlwaysDepth:ia,AlwaysStencilFunc:af,ArcCurve:Ef,ArrayCamera:kf,BackSide:gn,BasicDepthPacking:rf,Box3:rs,BoxGeometry:zi,BufferAttribute:kn,BufferGeometry:Ht,ByteType:iu,Camera:Au,CanvasTexture:_u,CatmullRomCurve3:yu,CineonToneMapping:Qc,CircleGeometry:hl,ClampToEdgeWrapping:hi,Color:ht,ColorManagement:mt,ConeGeometry:As,ConstantAlphaFactor:jd,ConstantColorFactor:Kd,Controls:Gf,CubeCamera:zf,CubeDepthTexture:bf,CubeReflectionMapping:ns,CubeRefractionMapping:Es,CubeTexture:gu,CubeUVReflectionMapping:eo,CubicBezierCurve:Mu,CubicBezierCurve3:wf,CullFaceBack:vc,CullFaceFront:Ud,CullFaceNone:Nd,Curve:ii,CurvePath:Af,CustomBlending:Fd,CustomToneMapping:jc,CylinderGeometry:no,Data3DTexture:xf,DataArrayTexture:uu,DataTexture:fu,DepthFormat:vi,DepthStencilFormat:Ji,DepthTexture:or,DirectionalLight:Cu,DoubleSide:Dn,DstAlphaFactor:Xd,DstColorFactor:$d,EllipseCurve:fl,EqualCompare:uf,EqualDepth:ra,EquirectangularReflectionMapping:qo,EquirectangularRefractionMapping:Xo,Euler:Oi,EventDispatcher:Fi,ExternalTexture:vu,ExtrudeGeometry:hr,Float32BufferAttribute:Mt,FloatType:On,FogExp2:cl,FrontSide:ts,Frustum:ul,GLSL3:Sc,GreaterCompare:hf,GreaterDepth:aa,GreaterEqualCompare:ol,GreaterEqualDepth:oa,Group:Zi,HalfFloatType:ni,HemisphereLight:Ff,IcosahedronGeometry:so,ImageUtils:_f,InstancedBufferAttribute:Ec,InstancedMesh:wc,IntType:Qa,KeepStencilOp:$o,Layers:ll,LessCompare:cf,LessDepth:sa,LessEqualCompare:rl,LessEqualDepth:nr,Light:_l,LightShadow:Tu,Line:Ym,LineBasicMaterial:pu,LineCurve:Su,LineCurve3:Tf,LineDashedMaterial:E0,LinearFilter:tn,LinearMipmapLinearFilter:$i,LinearMipmapNearestFilter:Yo,LinearSRGBColorSpace:qr,LinearToneMapping:Zc,LinearTransfer:Xr,MOUSE:Ai,Material:as,MathUtils:xn,Matrix2:Ic,Matrix3:nt,Matrix4:xt,MaxEquation:Gd,Mesh:_n,MeshBasicMaterial:to,MeshDepthMaterial:Uf,MeshDistanceMaterial:Of,MeshStandardMaterial:$s,MinEquation:Bd,MirroredRepeatWrapping:ca,MixOperation:tf,MultiplyBlending:Mc,MultiplyOperation:Jc,NearestFilter:jt,NearestMipmapLinearFilter:Ar,NearestMipmapNearestFilter:sf,NeutralToneMapping:tu,NeverCompare:lf,NeverDepth:na,NoBlending:mi,NoColorSpace:Ei,NoToneMapping:Qn,NormalBlending:Qs,NotEqualCompare:df,NotEqualDepth:la,Object3D:Vt,ObjectSpaceNormalMap:of,OneFactor:Hd,OneMinusConstantAlphaFactor:ef,OneMinusConstantColorFactor:Qd,OneMinusDstAlphaFactor:Yd,OneMinusDstColorFactor:Jd,OneMinusSrcAlphaFactor:$c,OneMinusSrcColorFactor:qd,OrthographicCamera:ro,PCFShadowMap:Ks,PCFSoftShadowMap:Od,PMREMGenerator:Dc,Path:Ac,PerspectiveCamera:wn,Plane:ui,PlaneGeometry:Cs,PointLight:vl,Points:Sf,PointsMaterial:mu,PolyhedronGeometry:dl,QuadraticBezierCurve:bu,QuadraticBezierCurve3:Eu,Quaternion:Ui,R11_EAC_Format:_a,RED_GREEN_RGTC2_Format:Wr,RED_RGTC1_Format:Fa,REVISION:Za,RG11_EAC_Format:Hr,RGBAFormat:Fn,RGBAIntegerFormat:sl,RGBA_ASTC_10x10_Format:La,RGBA_ASTC_10x5_Format:Ca,RGBA_ASTC_10x6_Format:Ra,RGBA_ASTC_10x8_Format:Pa,RGBA_ASTC_12x10_Format:Ia,RGBA_ASTC_12x12_Format:Da,RGBA_ASTC_4x4_Format:ya,RGBA_ASTC_5x4_Format:Ma,RGBA_ASTC_5x5_Format:Sa,RGBA_ASTC_6x5_Format:ba,RGBA_ASTC_6x6_Format:Ea,RGBA_ASTC_8x5_Format:wa,RGBA_ASTC_8x6_Format:Ta,RGBA_ASTC_8x8_Format:Aa,RGBA_BPTC_Format:Na,RGBA_ETC2_EAC_Format:ga,RGBA_PVRTC_2BPPV1_Format:fa,RGBA_PVRTC_4BPPV1_Format:da,RGBA_S3TC_DXT1_Format:Ur,RGBA_S3TC_DXT3_Format:Or,RGBA_S3TC_DXT5_Format:Fr,RGBFormat:lu,RGB_BPTC_SIGNED_Format:Ua,RGB_BPTC_UNSIGNED_Format:Oa,RGB_ETC1_Format:pa,RGB_ETC2_Format:ma,RGB_PVRTC_2BPPV1_Format:ha,RGB_PVRTC_4BPPV1_Format:ua,RGB_S3TC_DXT1_Format:Nr,RGFormat:is,RGIntegerFormat:il,RawShaderMaterial:Nf,Ray:ur,Raycaster:Bf,RedFormat:tl,RedIntegerFormat:nl,ReinhardToneMapping:Kc,RenderTarget:vf,RepeatWrapping:Vr,ReverseSubtractEquation:kd,SIGNED_R11_EAC_Format:va,SIGNED_RED_GREEN_RGTC2_Format:ka,SIGNED_RED_RGTC1_Format:za,SIGNED_RG11_EAC_Format:xa,SRGBColorSpace:cn,SRGBTransfer:wt,Scene:Mf,ShaderChunk:at,ShaderLib:Jn,ShaderMaterial:Gn,Shape:io,ShapeUtils:Ms,ShortType:su,Sphere:os,SphereGeometry:pl,Spherical:Lc,SplineCurve:wu,SrcAlphaFactor:Yc,SrcAlphaSaturateFactor:Zd,SrcColorFactor:Wd,StaticDrawUsage:pf,SubtractEquation:zd,SubtractiveBlending:yc,TOUCH:wi,TangentSpaceNormalMap:Ba,Texture:sn,TextureSource:al,TorusGeometry:ml,Triangle:Nn,TubeGeometry:gl,UVMapping:nu,Uint16BufferAttribute:hu,Uint32BufferAttribute:du,UniformsLib:De,UniformsUtils:Df,UnsignedByteType:yn,UnsignedInt101111Type:ou,UnsignedInt248Type:sr,UnsignedInt5999Type:ru,UnsignedIntType:ti,UnsignedShort4444Type:ja,UnsignedShort5551Type:el,UnsignedShortType:ir,VSMShadowMap:Ys,Vector2:Te,Vector3:G,Vector4:Ft,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:Ru,WebGLRenderTarget:zn,WebGLRenderer:Zf,WebGLUtils:$f,WebGPUCoordinateSystem:rr,WebXRController:Jo,ZeroFactor:Vd,createCanvasElement:mf,error:_t,log:bc,warn:tt,warnOnce:Ss},Symbol.toStringTag,{value:"Module"})),vd={type:"change"},Pu={type:"start"},Kf={type:"end"},Ho=new ur,xd=new ui,bx=Math.cos(70*xn.DEG2RAD),Yt=new G,vn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lc=1e-6;class Ex extends Gf{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Ui,this._lastTargetPosition=new G,this._quat=new Ui().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lc,this._sphericalDelta=new Lc,this._scale=1,this._panOffset=new G,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new G,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tx.bind(this),this._onPointerDown=wx.bind(this),this._onPointerUp=Ax.bind(this),this._onContextMenu=Nx.bind(this),this._onMouseWheel=Px.bind(this),this._onKeyDown=Lx.bind(this),this._onTouchStart=Ix.bind(this),this._onTouchMove=Dx.bind(this),this._onMouseDown=Cx.bind(this),this._onMouseMove=Rx.bind(this),this._interceptControlDown=Ux.bind(this),this._interceptControlUp=Ox.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vd),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Yt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<bx?this.object.lookAt(this.target):(xd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(xd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lc||this._lastTargetPosition.distanceToSquared(this.target)>lc?(this.dispatchEvent(vd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Tx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ax(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kf),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Cx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=At.DOLLY;break;case Ai.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}break;case Ai.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Pu)}function Rx(n){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Px(n){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(n.preventDefault(),this.dispatchEvent(Pu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Kf))}function Lx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ix(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=At.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=At.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Pu)}function Dx(n){switch(this._trackPointer(n),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=At.NONE}}function Nx(n){this.enabled!==!1&&n.preventDefault()}function Ux(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ox(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Er=new G;function Pn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Er.copy(e),Er[i]=0,Er.normalize();const l=.5*o/(o+a),u=1-Er.angleTo(n)/c;return Math.sign(Er[t])===1?u*l:a/(o+a)+l+l*(1-u)}class Lu extends zi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new G,l=new G,u=new G(e,t,i).divideScalar(2).subScalar(r),g=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=g.length/6,_=new G,m=.5/o;for(let d=0,M=0;d<g.length;d+=3,M+=2)switch(c.fromArray(g,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),g[d+0]=u.x*Math.sign(c.x)+l.x*r,g[d+1]=u.y*Math.sign(c.y)+l.y*r,g[d+2]=u.z*Math.sign(c.z)+l.z*r,h[d+0]=l.x,h[d+1]=l.y,h[d+2]=l.z,Math.floor(d/f)){case 0:_.set(1,0,0),p[M+0]=Pn(_,l,"z","y",r,i),p[M+1]=1-Pn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[M+0]=1-Pn(_,l,"z","y",r,i),p[M+1]=1-Pn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[M+0]=1-Pn(_,l,"x","z",r,e),p[M+1]=Pn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),p[M+0]=1-Pn(_,l,"x","z",r,e),p[M+1]=1-Pn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),p[M+0]=1-Pn(_,l,"x","y",r,e),p[M+1]=1-Pn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[M+0]=Pn(_,l,"x","y",r,e),p[M+1]=1-Pn(_,l,"y","x",r,t);break}}static fromJSON(e){return new Lu(e.width,e.height,e.depth,e.segments,e.radius)}}function Fx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Ht;let l=0;for(let u=0;u<n.length;++u){const g=n[u];let h=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in g.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(g.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in g.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(g.morphAttributes[p])}if(e){let p;if(t)p=g.index.count;else if(g.attributes.position!==void 0)p=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0;const g=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let f=0;f<p.count;++f)g.push(p.getX(f)+u);u+=n[h].attributes.position.count}c.setIndex(g)}for(const u in r){const g=yd(r[u]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,g)}for(const u in o){const g=o[u][0].length;if(g!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<g;++h){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][h]);const f=yd(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(f)}}}return c}function yd(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new kn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const g=c/t;for(let h=0,p=u.count;h<p;h++)for(let f=0;f<t;f++){const _=u.getComponent(h,f);a.setComponent(h+g,f,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function zx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:u,torus:g,rod:h,sign:p,paperBoat:f,batchStatic:_,persist:m,say:d,refresh:M,chime:C,reduced:x}){const S=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],T=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],v=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,v),g([-.7,.51,-.83],.31,.035,s.copper,v),u([-.7,.49,-.83],.26,.045,s.dark,v);const P=o([-.7,.97,-.83],v);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],P),g([0,0,0],.36,.015,s.copper,P,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,v),g([.66,.56,-.22],.28,.028,s.copper,v),u([.66,.55,-.22],.24,.03,r("#495441"),v);const A=o([.66,.56,-.22],v);h([0,0,0],[0,.83,0],.026,s.copper,A);for(const[w,R,z]of[[-.17,.23,-.5],[.17,.41,.5]]){const H=l([w,R,0],[.24,.035,.085],s.mint,A);H.rotation.z=z}const N=o([0,.95,0],A);l([0,0,0],.115,s.light,N),g([0,0,0],.28,.021,s.cream,N,[0,0,0]),g([0,0,0],.27,.021,s.copper,N,[0,Math.PI/2,0]);const q=[];for(let w=0;w<4;w++){const R=w*Math.PI/2,z=o([Math.cos(R)*.3,.13+Math.sin(R)*.12,Math.sin(R)*.3],A);h([0,-.15,0],[0,.2,0],.012,s.copper,z),l([0,.23,0],.065,s.cream,z),_(z,[]),q.push(z)}c([-.46,.2,.32],[.68,.12,.47],s.dark,v);const V=o([-.46,.29,.32],v);c([0,0,0],[.5,.025,.32],s.cream,V);for(const w of[-.23,.23])h([w,.016,-.14],[0,.016,.06],.009,s.copper,V);l([0,.027,.06],[.04,.015,.04],s.rust,V),p("ОБРАТНО",[0,.51,1.365],1.1,.2,v,{bg:"#c2c7a3",fg:"#445e45",size:42}),_(P,[]),_(N,[]),_(A,[N,...q]),_(V,[]),_(v,[P,A,V]);const k=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);k.castShadow=!1;const I=o([0,0,0],e),O=f(I,[8.3,.14,3.5],1.05),B=o([0,.36,0],O),Q=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],B),Y=l([0,.12,0],[.085,.13,.085],s.light,B),W=c([0,.09,0],[.23,.025,.16],s.cream,B);W.rotation.z=.2;const te=[Q,Y,W];_(O,[B]);const j=new n.Vector3(8.3,.14,3.5),ce=new n.Vector3(8.45,.14,3.65),le=new n.Vector3(9.2,-2.7,6.5);let fe=-1,U=i.dockTrips>=2?1:.02;function y(){P.visible=i.dockTrips>=1,A.visible=i.dockTrips>=2,V.visible=i.dockTrips>=3,q.forEach((w,R)=>w.visible=i.dockTrips>=5+R*3),B.visible=i.dockPending,te.forEach((w,R)=>w.visible=R===i.dockTrips%3),O.position.copy(i.dockPending?ce:j)}y();function L(){if(!(i.boat>0))if(i.dockPending){const w=S[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(U=.02),m(),y(),d(w.line),C(330),M()}else i.boat=18,fe=-1,te.forEach((w,R)=>w.visible=R===i.dockTrips%3),B.visible=!1,d("ну плыви. я тут."),M()}function J(w,R){if(i.boat>0){i.boat=Math.max(0,i.boat-w);const z=18-i.boat,H=z<7?0:z<11?1:2;H!==fe&&(fe=H,M()),z<2?O.position.lerpVectors(j,ce,n.MathUtils.smoothstep(z,0,2)):z<7?O.position.lerpVectors(ce,le,n.MathUtils.smoothstep(z,2,7)):z<11?O.position.copy(le):z<16?O.position.lerpVectors(le,ce,n.MathUtils.smoothstep(z,11,16)):O.position.copy(ce),O.visible=z<7||z>=11,B.visible=z>=11,O.rotation.y=z>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),O.visible=!0,y(),d("вернулся. с чем-то."),C(554),M())}O.rotation.z=x?0:Math.sin(R*1.7)*.035,i.boat===0&&(O.visible=!0,O.position.y=(i.dockPending?ce.y:j.y)+Math.sin(R*1.2)*.02,O.rotation.y=i.dockPending?Math.PI+.2:0),P.position.y=.97+Math.sin(R*.9)*.055,P.rotation.y=R*.15,U=n.MathUtils.damp(U,1,1.1,w),A.scale.setScalar(U),N.rotation.y=x?0:R*.23,k.material.emissiveIntensity=i.dockPending?1.5+Math.sin(R*4)*1.1:1.2}function Z(){if(i.boat>0){const w=18-i.boat;return{disabled:!0,action:w<7?"плывёт…":w<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${S[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const w=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:w===2?`${S[w].description} ${T[Math.floor((i.dockTrips-1)/3)%T.length]}`:S[w].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:I,gallery:v,beacon:k,launchOrCollect:L,update:J,card:Z,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:O.position.toArray(),visible:O.visible,cargo:B.visible,stone:P.visible,plant:A.visible,plantScale:U,letter:V.visible,buds:q.filter(w=>w.visible).length})}}async function Qf(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function kx({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",u=!s.matches,g=!1,h=!1,p=!1,f=!1,_=!1,m=0,d=null,M=0,C=0,x=0,E=!1;try{const $=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");$!==null&&(u=$==="open")}catch{}const S=($,ae,ye)=>{const be=document.createElement($);return ae&&(be.className=ae),ye&&(be.textContent=ye),be},T=S("aside","resident-history");T.id="resident-history",T.setAttribute("aria-label","История мыслей и действий Головы");const v=S("div","history-heading"),P=S("div"),A=S("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),N=S("h3","","на полях"),q=S("span","history-eyes");q.setAttribute("aria-hidden","true"),N.append(q),P.append(A,N,S("p","history-subtitle","мысли, дела и прочее"));const V=S("button","history-close","−");V.type="button",V.setAttribute("aria-label","Свернуть историю"),V.title="Свернуть историю",v.append(P,V);const k=S("div","history-filters");k.setAttribute("role","group"),k.setAttribute("aria-label","Показывать в истории");const I=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[$,ae]of I){const ye=S("button","",ae);ye.type="button",ye.dataset.filter=$,ye.setAttribute("aria-pressed",String(l===$)),ye.onclick=()=>{l=$,R(!1),B.scrollTop=0;for(const be of k.children)be.setAttribute("aria-pressed",String(be.dataset.filter===l))},k.append(ye)}const O=S("button","history-new");O.type="button",O.hidden=!0;const B=S("div","history-scroll");B.tabIndex=0,B.setAttribute("aria-label","Записи, от новых к старым");const Q=S("ol","history-list"),Y=S("p","history-empty","собираю заметки…");B.append(Q,Y);const W=S("div","history-foot"),te=S("span","history-live","подключаюсь…"),j=S("span","history-count"),ce=S("button","history-retry","повторить подключение");ce.type="button",ce.hidden=!0,ce.onclick=()=>{F(),window.dispatchEvent(new Event("beznogim:retry"))},W.append(te,j,ce),T.append(v,k,O,B,W);const le=S("button","history-toggle");le.type="button",le.setAttribute("aria-controls",T.id);const fe=S("span","","на полях"),U=S("span","history-badge");U.hidden=!0,le.append(S("span","history-toggle-icon","◌"),fe,U),document.body.append(T),document.querySelector(".footer-actions").append(le);function y($,ae=!0){if(u=$,T.hidden=!u,le.hidden=u,le.setAttribute("aria-expanded",String(u)),ae)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(B.scrollTop<30?L():J(),V.focus({preventScroll:!0})):ae&&le.focus({preventScroll:!0})}T.hidden=!u,le.hidden=u,le.setAttribute("aria-expanded",String(u)),le.onclick=()=>{y(!0),(f||!h)&&F()},V.onclick=()=>y(!1),s.addEventListener("change",()=>{let $=!s.matches;try{const ae=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ae!==null&&($=ae==="open")}catch{}y($,!1)}),document.addEventListener("keydown",$=>{$.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&y(!1)});function L(){m=0,U.hidden=!0,O.hidden=!0}function J(){U.textContent=String(m),U.hidden=!m,O.textContent=`↑ к новым · ${m}`,O.hidden=!(u&&m)}O.onclick=()=>{B.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),L()},B.addEventListener("scroll",()=>{B.scrollTop<30&&L()},{passive:!0});function Z($){return l==="all"||(l==="thoughts"?$.type==="muse"||$.type==="say":$.type!=="muse"&&$.type!=="say")}function w($,ae){const ye=$.type==="muse"||$.type==="say",be=S("li",`history-entry ${ye?"history-thought":"history-action"}${ae?" is-new":""}`);be.dataset.eventId=String($.id),be.dataset.type=$.type;const K=S("div","history-meta"),ze=S("time","",r.format($.time*1e3));ze.dateTime=new Date($.time*1e3).toISOString(),ze.title=o.format($.time*1e3)+" · "+ze.textContent+" мск";const Ae={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return K.append(S("span","",Ae[$.type]||"во дворе"),ze),be.append(K,S("p","",$.text)),be}function R($,ae=new Set){const ye=B.scrollTop>30,be=B.getBoundingClientRect().top,K=ye?[...Q.querySelectorAll("[data-event-id]")].find(pe=>pe.getBoundingClientRect().bottom>be):null,ze=K==null?void 0:K.dataset.eventId,Ae=K==null?void 0:K.getBoundingClientRect().top,X=B.scrollTop,b=document.createDocumentFragment();let oe="";const ue=[...i.values()].sort((pe,Ee)=>Ee.id-pe.id).filter(Z);for(const pe of ue){const Ee=o.format(pe.time*1e3);if(Ee!==oe){const Ce=S("li","history-day",Ee);b.append(Ce),oe=Ee}b.append(w(pe,$&&ae.has(pe.id)&&!ye))}if(Q.replaceChildren(b),Y.hidden=ue.length>0,Y.textContent=f?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!ue.length&&(Y.textContent="в этом фильтре пока нет записей."),j.textContent=i.size?_?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",ce.hidden=!(f||!h&&!p),ce.disabled=p,ze){const pe=Q.querySelector(`[data-event-id="${ze}"]`);B.scrollTop=X+(pe?pe.getBoundingClientRect().top-Ae:0)}else ye||(B.scrollTop=0)}function z($,ae=!1){if(!$||!Array.isArray($.entries))return!1;const ye=Math.max(0,...i.keys()),be=new Set;let K=0,ze=0;for(const Ae of $.entries)!Ae||typeof Ae!="object"||!Number.isSafeInteger(Ae.id)||Ae.id<1||!Number.isFinite(Ae.time)||Math.abs(Ae.time)>864e10||!a.has(Ae.type)||typeof Ae.text!="string"||!Ae.text.trim()||(ze++,i.has(Ae.id)||(E=!0,i.set(Ae.id,{id:Ae.id,time:Ae.time,type:Ae.type,text:Ae.text.slice(0,280)}),be.add(Ae.id),Ae.id>ye&&Z(Ae)&&K++));if($.entries.length&&!ze)return!1;if(_=_||!!$.has_older||!!$.has_more||i.size>t,i.size>t){const Ae=[...i.keys()].sort((X,b)=>X-b);for(const X of Ae.slice(0,i.size-t))i.delete(X)}return g&&!ae&&K&&(!u||B.scrollTop>30)&&(m+=K,J()),(be.size||!g)&&R(g&&!ae,be),!0}function H(){if(!(!i.size||!E)){E=!1,C=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:C,has_older:_,entries:[...i.values()]}))}catch{}}}function ne(){try{const $=localStorage.getItem(c);if(!$||$.length>1e6)return;const ae=JSON.parse($);if(ae.version!==1||!Number.isFinite(ae.saved_at)||ae.saved_at<=0)return;z(ae,!0),C=ae.saved_at,g=i.size>0,E=!1}catch{}}async function F(){if(!p){p=!0,x=performance.now(),ce.disabled=!0;try{const $=await Qf(n+"/api/history");if(!z($,!0))throw Error("invalid-public-history");h=!0,g=!0,f=!1,H(),R(!1)}catch{f=!0,R(!1)}finally{p=!1,ce.disabled=!1,ee()}}}function ee(){var ye;const $=!d||performance.now()-M>35e3||d.server_time-d.heartbeat>60||d.resident_status==="stopped";T.classList.toggle("history-offline",$);const ae=C?` · сохранено ${r.format(C)} мск`:" · записи на устройстве";te.textContent=$?i.size?"связи нет":"нет связи с живым сервером":d.resident_status==="sleeping"?"голова спит · дневник открыт":d.resident_status==="paused"?"голова отдыхает":"жизнь идёт",$&&i.size&&(te.textContent+=ae),!$&&f&&(te.textContent+=" · архив не дошёл"),te.title=((ye=d==null?void 0:d.action)==null?void 0:ye.label)||""}function ie($){var ze;const ae=Math.max(0,...i.keys()),ye=Array.isArray((ze=$.history)==null?void 0:ze.entries)?$.history.entries:[];d=$,M=performance.now(),z($.history)&&i.size&&(g=!0,H()),ee();const be=ye.filter(Ae=>Ae&&Number.isSafeInteger(Ae.id)).map(Ae=>Ae.id);(ae&&be.length&&Math.min(...be)>ae&&performance.now()-x>1e3||!h&&performance.now()-x>15e3)&&F()}window.addEventListener("beznogim:state",$=>ie($.detail)),window.__beznogimState&&ie(window.__beznogimState),ne(),R(!1),ee(),F(),window.addEventListener("online",()=>{(f||!h)&&F()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(f||!h)&&F()}),setInterval(()=>{ee(),(f||!h)&&F()},15e3)}function Bx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,u=0,g=0,h=!1,p=!1,f=!1,_=0,m=null,d=null,M=null,C="",x=!0;const E=n.position.clone(),S=document.createElement("aside");S.className="resident-thought",S.hidden=!0,S.setAttribute("aria-label","Мысли Головы");const T=document.createElement("span");T.className="thought-kicker",T.textContent="про себя";const v=document.createElement("p");S.append(T,v),document.body.append(S);const P=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),A=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";kx({api:A,enabled:P});const N=document.querySelector(".territory-nav"),q=document.createElement("div");q.className="resident-strip",q.hidden=!0;const V=document.createElement("span");V.className="resident-status",V.textContent="подключаюсь к голове";const k=document.createElement("div");k.className="resident-vitals",k.hidden=!0,k.setAttribute("aria-label","Самочувствие Головы");const O=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(w=>{const R=document.createElement("div");return R.className="need-meter",R.dataset.need=w.key,R.style.setProperty("--need-color",w.color),R.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${w.icon}</svg><div class="need-detail"><div class="need-heading"><b>${w.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${w.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,k.append(R),{key:w.key,card:R,value:R.querySelector(".need-value"),bar:R.querySelector(".need-track")}}),B=document.createElement("button");B.type="button",B.textContent="к голове",B.onclick=()=>{p=!1,f=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),le()};const Q=document.createElement("button");Q.type="button",Q.textContent="поиграть самому",Q.onclick=()=>{p=!p,f=!1,le()};const Y=document.createElement("button");Y.type="button",Y.textContent="мысли",Y.setAttribute("aria-pressed","true"),Y.onclick=()=>{x=!x,Y.setAttribute("aria-pressed",String(x))},q.append(V,k,B,Q,Y),N.append(q);function W(){return Date.now()/1e3+g}function te(){return l&&W()-l.heartbeat<60&&l.resident_status!=="stopped"}function j(){return h&&l&&!p}function ce(){var z,H;const w=(H=(z=l==null?void 0:l.mechanics)==null?void 0:z.vitals)==null?void 0:H.public;if(!w){k.hidden=!0;return}const R=ne=>Math.max(0,Math.min(100,Math.round(Number(ne)||0)));k.hidden=!1;for(const ne of O){const F=R(w[ne.key]);ne.value.textContent=String(F),ne.bar.setAttribute("aria-valuenow",String(F)),ne.card.style.setProperty("--need-fill",String(F/100)),ne.card.dataset.low=String(F<=20)}}function le(){const w=p?"ты в песочнице":h?te()?l!=null&&l.action&&l.action.ends>W()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";w!==C&&(C=w,V.textContent=w),Q.textContent=p?"вернуться к голове":"поиграть самому",B.setAttribute("aria-pressed",String(f))}function fe(w){var z,H;if(!w||w.version!==1||!Array.isArray(w.position)||w.position.length!==3||!w.position.every(Number.isFinite)||!w.objects||!Number.isFinite(w.server_time)||!Number.isFinite(w.heartbeat)||l&&(w.server_time<l.server_time||w.server_time===l.server_time&&Number.isFinite(w.revision)&&Number.isFinite(l.revision)&&w.revision<l.revision))return;if(g=w.server_time-Date.now()/1e3,l=w,u=performance.now(),h=!0,q.hidden=!1,m&&((z=w.release)!=null&&z.commit)&&m!==w.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((H=w.release)==null?void 0:H.commit)||m;const R=w.speech;R&&R.time>_&&R.until>W()&&(_=R.time,p||a(R.text)),window.__beznogimState=w,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:w})),ce(),le()}function U(){const w=l.action;if((w==null?void 0:w.kind)==="move"){const R=Math.max(0,Math.min(1,(W()-w.started)/Math.max(.001,w.ends-w.started)));return w.from.map((z,H)=>z+(w.to[H]-z)*R)}return l.position}function y(){if(!j())return;const w=l.objects;w.engine&&(t.running=!!w.engine.running),w.workshop&&(t.roof=w.workshop.roof_open?1:0),w.radio&&(t.radio=w.radio.station,d!==t.radio&&(d=t.radio,o())),w.garden&&(t.harvest=w.garden.harvest,M!==null&&t.harvest>M&&c(),M=t.harvest);const R=l.action;t.brew=(R==null?void 0:R.effect)==="brew"?Math.max(0,R.ends-W()):0,t.loop=0,le()}function L(){if(!j()){S.hidden=!0;return}const w=U();n.position.set(w[0],w[1]+Math.sin(W()*1.4)*.1,w[2]),e.set(...w),f&&i.target.lerp(n.position,.08);const R=l.musing;if(x&&te()&&(R!=null&&R.text)&&R.until>W()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(v.textContent!==R.text&&(v.textContent=R.text),E.copy(n.position),E.y+=1.8,E.project(s),E.z>=-1&&E.z<=1&&Math.abs(E.x)<1&&Math.abs(E.y)<1){S.hidden=!1;const z=S.offsetWidth,H=S.offsetHeight,ne=Math.max(z/2+12,Math.min(innerWidth-z/2-12,(E.x+1)*innerWidth/2));let F=(1-E.y)*innerHeight/2-18;const ee=N.getBoundingClientRect(),ie=ne-z/2<ee.right&&ne+z/2>ee.left?ee.bottom+12:18,$=F-H<ie;$&&(F=Math.max(ie+H,(1-E.y)*innerHeight/2+70+H)),F=Math.min(innerHeight-70,Math.max(H+18,F)),S.classList.toggle("below-head",$),S.style.transform=`translate3d(${Math.round(ne)}px,${Math.round(F)}px,0) translate(-50%,-100%)`}else S.hidden=!0;else S.hidden=!0}function J(){j()&&(p=!0,f=!1,le())}function Z(){if(!P)return;q.hidden=!1;let w=!1;async function R(){if(!w){w=!0;try{const H=await Qf(A+"/api/state");fe(H),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-u>35e3)&&(h=!1),le()}finally{w=!1}}}try{const H=new EventSource(A+"/api/events");H.addEventListener("state",ne=>{try{fe(JSON.parse(ne.data))}catch{}}),H.onerror=()=>{h=!1,le()}}catch{h=!1,le()}R();function z(){(!h||!l||performance.now()-u>3e4)&&R()}window.addEventListener("online",z),window.addEventListener("beznogim:retry",R),document.addEventListener("visibilitychange",()=>{document.hidden||z()}),setInterval(()=>{l&&performance.now()-u>35e3&&(h=!1),le(),z()},15e3)}return i.addEventListener("start",()=>{f=!1,le()}),Z(),{sync:y,place:L,localPlay:J,unfollow:()=>{f=!1},watching:j,inspect:()=>{var w;return{connected:h,sandbox:p,follow:f,alive:!!te(),revision:l==null?void 0:l.revision,release:(w=l==null?void 0:l.release)==null?void 0:w.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!S.hidden,position:l?U():null}}}}const Gx=120,Vx=24,Hx=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"settled",name:"шовная"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"settled",name:"гараж и вилка"},{id:"0:-1",x:0,z:-24,status:"settled",name:"длинное тире"},{id:"1:-1",x:24,z:-24,status:"settled",name:"облачная перегонная"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"settled",name:"песочный порт"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"settled",name:"кавычковый питомник"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Yn={size:Gx,sectorSize:Vx,sectors:Hx};function Wx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o,locationTarget:a=()=>null}){const c=new Zi;c.name="unsettled-territory",n.add(c);const l=Yn.size/2,u=[[-l+4,-l],[l-4,-l],[l,-l+4],[l,l-4],[l-4,l],[-l+4,l],[-l,l-4],[-l,-l+4]],g=new io;u.forEach(([A,N],q)=>q?g.lineTo(A,-N):g.moveTo(A,-N)),g.closePath();const h=new hr(g,{depth:1.8,bevelEnabled:!1});h.rotateX(-Math.PI/2),h.translate(0,-3.5,0);const p=new _n(h,new $s({color:"#233e35",roughness:1}));p.receiveShadow=!0,c.add(p);let f=8409;const _=()=>(f=f*1664525+1013904223>>>0)/4294967296,m=new wc(new so(1,0),new $s({color:"#8a9980",roughness:1}),150),d=new wc(new As(1,1,4),new $s({color:"#9aa880",roughness:1}),850),M=new Vt;for(const[A,N,q]of[[m,150,!0],[d,850,!1]]){for(let V=0;V<N;V++){let k,I;do k=(_()-.5)*(Yn.size-10),I=(_()-.5)*(Yn.size-10);while(Math.abs(k)<11&&Math.abs(I)<9);const O=q?.15+_()*.48:.12+_()*.42;M.position.set(k,-1.7+O*.25,I),M.rotation.set(0,_()*6.28,q?_()*.25:0),M.scale.set(q?O*1.3:.07,O,q?O:.07),M.updateMatrix(),A.setMatrixAt(V,M.matrix)}A.instanceMatrix.needsUpdate=!0,c.add(A)}const C=new $s({color:"#c1b692",roughness:1});for(let A=0;A<16;A++){const N=new _n(new zi(1.15,.12,.65),C);N.position.set(-.6,-.06-A*.105,5.8+A*.7),N.receiveShadow=!0,c.add(N)}const x=document.createElement("nav");x.className="territory-nav",x.setAttribute("aria-label","Путешествие по миру"),x.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(x);const E=document.createElement("dialog");E.id="territory-dialog",E.setAttribute("aria-labelledby","territory-title"),E.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб, кабачковый мост и песочный порт. На севере улитка переправляет почту по мосту из тире. На юго-востоке кавычки пролезают в питомник и становятся елями. На северо-западе гараж перепрыгивает пробки, оставляя машину дома. За ним вилка сортирует лампочки по четырём гнёздам. К востоку от почтового моста четыре карты переливают облако за шестнадцать игровых часов. Дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(E);const S=E.querySelector("#territory-grid");for(const A of Yn.sectors){const N=document.createElement("button");N.type="button",N.dataset.sector=A.id,N.className=A.status==="settled"?"settled":"",N.textContent=A.status==="settled"?`● ${A.id==="0:0"?"двор":A.name}`:`· ${A.id}`,N.setAttribute("aria-label",`${A.name}, ${A.id}`),N.onclick=()=>{E.close(),s(A.x,A.z,A.status==="settled")},S.append(N)}document.querySelector("#territory-map").onclick=()=>E.showModal(),document.querySelector("#world-overview").onclick=r,E.querySelector("#territory-close").onclick=()=>E.close(),E.querySelector("#territory-home").onclick=()=>{E.close(),o()};const T=x.querySelector("#territory-location");let v="";function P(){const A=a()||t.target,N=Math.round(A.x/Yn.sectorSize),q=Math.round(A.z/Yn.sectorSize),V=`${N}:${q}`;if(V!==v){v=V;const k=Yn.sectors.find(I=>I.id===V);T.textContent=`${(k==null?void 0:k.status)==="settled"?k.name:"свободная земля"} · ${V}`;for(const I of S.children)I.classList.toggle("current",I.dataset.sector===V)}}return{half:l,update:P,inspect:()=>({size:Yn.size,sectorSize:Yn.sectorSize,sectors:Yn.sectors.length,settled:Yn.sectors.filter(A=>A.status==="settled").length,visible:n.visible,sector:v})}}function qx({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:g,sign:h,paperBoat:p,batchStatic:f,changed:_,chime:m}){let d={};try{d=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(d.wins)||0))),trace:d.trace===!0},C=[1,2,-1,1,2,-1];function x(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const E=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,E),a([0,.46,0],[1.22,.08,1.3],s.dark,E);const S=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const $ of[-.62,.62])for(const ae of[-.64,.64])u([$,.46,ae],[$,1.45,ae],.024,s.copper,E);for(const $ of[-.62,.62])a([$,.96,0],[.018,.95,1.28],S,E);a([0,.96,-.64],[1.24,.95,.018],S,E);const T=o([0,1.45,-.64],E);for(const $ of[-.62,.62])u([$,0,0],[$,.36,.64],.026,s.copper,T);for(const $ of[-.62,.62])u([$,.36,.64],[$,0,1.28],.026,s.copper,T);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,T);const v=a([0,.18,.32],[1.26,.025,.72],S,T);v.rotation.x=-.51;const P=a([0,.18,.96],[1.26,.025,.72],S,T);P.rotation.x=.51;const A=o([0,.52,0],E);l([0,.2,0],.026,.4,s.leaf,A);for(const $ of[-1,1]){const ae=c([$*.15,.27,0],[.22,.055,.09],s.leaf,A);ae.rotation.z=$*.35}const N=c([0,.25,.12],[.23,.16,.27],s.copper,A),q=c([.42,.58,.46],[.15,.1,.18],s.copper,E);q.visible=M.wins>0;const V=o([-.76,.7,.69],E);a([0,.28,0],[.13,.66,.06],s.cream,V);const k=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),V);c([0,-.06,.04],.065,s.rust,V),h("ПАРНИК",[0,.3,.716],.93,.22,E,{size:49});const I=g([0,2.05,0],.46,.016,s.mint,E);I.visible=M.trace;const O=[];for(let $=0;$<6;$++)O.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),E));f(E,[T,A,V,I,q,...O]),f(T,[]),f(A,[N]),f(V,[k]);let B=0,Q=0;function Y(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),B=0,_()}function W($){if(M.mode!=="playing")return;const ae={heat:2,wait:0,vent:-2};$ in ae&&(M.temp+=C[M.turn]+ae[$],M.turn++,M.temp>6?(M.mode="hot",B=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),q.visible=!0,x(),m(660)),_())}function te(){let $="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&($=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${C[M.turn]>0?"+":""}${C[M.turn]}. Выбери один ход.`),M.mode==="hot"&&($=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&($=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&($="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:$,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const j=o([0,0,0],t);j.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,j),a([0,-.42,0],[6.8,.08,5.6],s.dark,j);for(const $ of[-3.2,3.2])for(const ae of[-2.6,2.6])u([$,-.4,ae],[$,4,ae],.055,s.copper,j);for(const $ of[-3.2,3.2])u([$,4,-2.6],[$,5.7,0],.055,s.copper,j),u([$,5.7,0],[$,4,2.6],.055,s.copper,j);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,j),a([-3.2,1.8,0],[.025,4.4,5.2],S,j),a([0,1.8,-2.6],[6.4,4.4,.025],S,j),h("СОН / 01",[0,-.12,2.93],2.2,.38,j,{size:52});const ce=o([0,1.6,0],j);c([0,0,0],1.16,r("#5f9c85"),ce);for(let $=0;$<10;$++){let ae=$*2.4;const ye=c([Math.sin(ae)*.95,Math.cos($*1.2)*.6,Math.cos(ae)*.95],[.35,.2,.3],s.leaf,ce);ye.rotation.y=ae}g([0,0,0],1.32,.028,s.copper,ce,[.4,0,.2]);const le=o([0,1.6,0],j),fe=[];for(let $=0;$<28;$++){const ae=a([0,0,0],[.53,.11,.32],$%4?s.cream:s.concrete,le);fe.push(ae)}const U=p(j,[1.7,-.05,1],1.65),y=c([0,.65,0],.13,s.cream,U),L=o([0,.65,0],U);L.visible=!1;for(let $=0;$<8;$++){let ae=$/8*Math.PI*2;u([Math.sin(ae)*.27,Math.cos(ae)*.27,0],[Math.sin(ae)*.5,Math.cos(ae)*.5,0],.026,s.light,L)}const J=i.clone(!0);j.add(J),J.scale.setScalar(.72),J.position.set(-2,1,1.3),J.rotation.z=-.25;const Z=o([-2,-.05,1.3],j);l([0,0,0],.55,.3,s.cream,Z),g([.58,0,0],.25,.04,s.copper,Z,[0,0,0]);const w=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,j);w.rotation.y=.2;let R=0,z=0,H=!1;f(j,[ce,le,U,J]),f(ce,[]);function ne(){H=!0,R=0,z=0,j.visible=!0,e.visible=!1,_()}function F(){H=!1,j.visible=!1,e.visible=!0,_()}function ee(){H&&(R===3?(R=0,z=0):(R++,m(220+R*110),R===3&&(M.trace=!0,I.visible=!0,x())),_())}function ie($,ae){Q=n.MathUtils.damp(Q,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,$),T.rotation.x=Q,A.scale.y=n.MathUtils.damp(A.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,$),N.visible=M.mode==="won",k.scale.y=.3*Math.max(.05,M.temp/8),k.position.y=-.015+M.temp/8*.15,I.rotation.z=Math.sin(ae*.3)*.15,B=Math.max(0,B-$),O.forEach((ye,be)=>{ye.visible=B>0;const K=(3-B+be*.18)%1.5;ye.position.set(Math.sin(be*2)*K*.35,1.5+K,Math.cos(be*2)*K*.35),ye.scale.setScalar(.1*(.4+K))}),H&&(z=n.MathUtils.damp(z,R,2,$),ce.rotation.y=ae*.08,fe.forEach((ye,be)=>{const K=be/28*Math.PI*2+ae*.055*Math.min(1,z),ze=Math.min(1,z);ye.position.set(Math.sin(K)*(1.8+ze*.35),Math.cos(K)*(1.8-ze*1.5),Math.cos(K)*ze*1.5),ye.rotation.set(0,-K*ze,Math.PI/2-K*(1-ze))}),le.rotation.y=z*.32,U.position.y=-.05+z*1.12,U.position.x=1.7-z*.32,U.rotation.y=.2+z*.35,y.scale.setScalar(.13*(1+Math.max(0,z-2)*2)),L.visible=z>2.2,L.rotation.z=ae*.22,J.position.y=1+Math.sin(ae*.8)*.06)}return{house:E,start:Y,step:W,card:te,update:ie,enter:ne,exit:F,breathe:ee,inspect:()=>({...M,weather:[...C],dream:H,dreamStep:R,phase:z,lidAngle:Q,rootVisible:e.visible,dreamVisible:j.visible,boatY:U.position.y,rays:L.visible})}}function Xx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:g,torus:h,sign:p,batchStatic:f,chime:_}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const d=r("#c39860"),M=r("#e0c58b"),C=r("#465c63"),x=r("#80b9be",{metalness:.15,roughness:.35}),E=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),d,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let U=0;U<13;U++){const y=.15+U/12*Math.PI*1.42,L=Math.sin(y)*3.65,J=Math.cos(y)*3.65,Z=c([L,.48,J],[.75,1.08,.19],M,m);Z.rotation.y=y,U%3===0&&h([L,.48,J],.15,.048,C,m,[Math.PI/2,0,0]).rotation.set(0,y,0)}p("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const S=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],C,S);for(let U of[-1.15,1.15])for(let y of[-.63,.63])c([U,-.23,y],[.12,.5,.12],s.copper,S);for(let U of[-.79,.79])c([0,.36,U],[2.72,.65,.14],E,S);for(let U of[-1.32,1.32])c([U,.38,0],[.14,.68,1.55],E,S);const T=c([0,.18,0],[2.49,.045,1.49],x,S),v=l([-.84,.38,0],[.34,.14,.54],s.cream,S),P=i.clone(!0);m.add(P),P.scale.setScalar(.54),P.position.set(.3,.83,.45),P.rotation.z=-.35;const A=a([0,0,0],P);for(const U of[-.23,.23])l([U,.2,.611],[.15,.11,.025],s.black,A),c([U,.2,.64],[.2,.018,.012],s.copper,A);const N=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,N),u([0,.29,0],.44,.022,C,N),h([.55,0,0],.24,.055,s.copper,N,[0,0,0]),p("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const q=[];for(let U=0;U<7;U++){const y=a([-1.92+U*.33,.2+U*.29,1.45-U*.29],m);c([0,0,0],[.7,.13,.42],s.cream,y);for(let L of[-.2,.2])c([0,.07,L],[.7,.12,.05],s.copper,y);q.push(y)}const V=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],x,m)),k=Array.from({length:3},(U,y)=>{const L=h([.65,.2,0],.23+y*.16,.012,s.mint,S);return L.scale.z=.6,L}),I=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,I),I.rotation.z=.55;const O=[];for(let U=0;U<9;U++){const y=U*2.4;O.push(l([Math.sin(y)*3,3.2+U%3*.28,Math.cos(y)*2],.025,s.cream,m))}let B=!1,Q=0,Y=0,W=!1;try{W=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const te=a([26.6,-.86,.65],t);te.visible=W,u([0,0,0],.15,.2,s.cream,te),u([0,.104,0],.125,.014,x,te),h([.16,0,0],.07,.02,s.copper,te,[0,0,0]),f(m,[S,P,N,...q,...V,...O,I]),f(S,[T,v,...k]),f(N,[]),f(te,[]),q.forEach(U=>f(U,[]));function j(){B=!0,Q=0,Y=0,m.visible=!0,t.visible=!1,fe(0,0)}function ce(){B=!1,m.visible=!1,t.visible=!0}function le(){if(B&&(Q=Q===3?0:Q+1,_(165+Q*55),Q===3)){W=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function fe(U,y){B&&(Y=n.MathUtils.damp(Y,Q,2.4,U),q.forEach((L,J)=>{const Z=Math.min(1,Y/2),w=-1.92+J*.33,R=.2+J*.29,z=1.45-J*.29;L.position.set(n.MathUtils.lerp(w,-1.72+J*.39,Z),n.MathUtils.lerp(R,1.95-J*.22,Z),n.MathUtils.lerp(z,-.32+J*.055,Z)),L.rotation.z=-Z*.21}),T.position.y=.18+Y*.09,v.position.y=.38+Y*.09,P.position.y=.83+Y*.09+Math.sin(y*.6)*.025,P.rotation.z=-.35-Y*.13,N.rotation.z=-Math.min(1,Y)*.45,V.forEach((L,J)=>{const Z=(y*.16+J/16)%1;L.visible=Y>.05,L.position.set(-1.7+Z*3,2.14-Z*1.62,-.32+Z*.25),L.scale.set(.07,.1+Math.sin(Z*Math.PI)*.04,.07)}),k.forEach((L,J)=>{L.visible=Y>.4,L.position.y=T.position.y+.034,L.scale.setScalar(1+Math.sin(y*.5+J)*.08),L.scale.z*=.6}),I.rotation.z=.55+Y*.21,A.visible=Y>1.8)}return{enter:j,exit:ce,pour:le,update:fe,inspect:()=>({active:B,step:Q,phase:Y,trace:W,roomVisible:m.visible,rootVisible:t.visible,waterY:T.position.y,sleeperY:P.position.y,channel:q.map(U=>U.position.toArray()),droplets:V.filter(U=>U.visible).length})}}function Yx({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const p of[-.23,.23])t([p,.2,.611],[.15,.11,.025],r.black,c),i([p,.2,.64],[.2,.018,.012],r.copper,c);let l=null,u=0;function g(p){l=p,u=Number(p.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:p})=>g(p)),window.__beznogimState&&g(window.__beznogimState);function h(p){const f=l==null?void 0:l.action;a.visible=!!p&&(f==null?void 0:f.kind)==="sleep"&&Number(f.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),c.visible=a.visible}return{update:h,inspect:()=>{var p;return{visible:a.visible,ends:((p=l==null?void 0:l.action)==null?void 0:p.kind)==="sleep"?l.action.ends:null}}}}const Pr=Object.freeze([1,2,3,4,5,7]),Oc=()=>({phase:"sorting",places:[0,0,0,0,0,0],progress:0});function qa(n){return[1,2].map(e=>n.places.reduce((t,i,s)=>t+(i===e?Pr[s]:0),0))}function Fc(n){const[e,t]=qa(n);return n.places.every(i=>i!==0)&&e===t}function $x(n,e){return n.phase==="sorting"&&Number.isInteger(e)&&e>=0&&e<6?{...n,places:n.places.map((t,i)=>i===e?(t+1)%3:t)}:n}function Jx(n){return n.phase==="flying"?Oc():n.phase==="sorting"&&Fc(n)?{...n,phase:"unfolding",progress:0}:n}function Zx(n,e){if(n.phase!=="unfolding"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return{...n,progress:t,phase:t===1?"flying":"unfolding"}}function zc(n){const e=n.phase==="flying"?1:n.phase==="unfolding"?n.progress:0,t=e*e*(3-2*e),[i,s]=qa(n);return{open:t,headY:.85+t*2.25,waterTilt:t*Math.PI/2,waterY:-.3+t*2.5,lean:(s-i)/22*.18}}function Kx(n,e){const t=n.places[e],i=zc(n).open;return t===0?[-3+e*1.2,.15,2.85]:[(t===1?-2.1:2.1)+(e%3-1)*.35,.9+Math.floor(e/3)*.45+i*(2.1+e*.12),.5+e%2*.35-i*.8]}function Qx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,tube:u,torus:g,sign:h,batchStatic:p,chime:f,changed:_}){const m=o([0,0,0],e);m.name="dream09-ears-for-the-shore",m.visible=!1;const d=r("#cb9e8d"),M=r("#936e73"),C=r("#e6d5ad"),x=r("#649a9a",{metalness:.25,roughness:.3}),E=r("#334e59"),S=o([0,-.3,-.9],m);a([0,-.16,0],[8.1,.2,4.7],E,S),a([0,0,0],[7.8,.09,4.4],x,S);for(let le=0;le<7;le++)g([0,.07,0],.35+le*.325,.016,C,S);function T(le,fe,U,y){const L=document.createElement("canvas");L.width=L.height=128;const J=L.getContext("2d");J.fillStyle="#e4d8b7",J.fillRect(0,0,128,128),J.fillStyle="#334e59",J.font="bold 96px monospace",J.textAlign="center",J.textBaseline="middle",J.fillText(le,64,68);const Z=new n.CanvasTexture(L);Z.colorSpace=n.SRGBColorSpace;const w=new n.Mesh(new n.PlaneGeometry(U,U),new n.MeshBasicMaterial({map:Z,side:n.DoubleSide}));return w.position.set(...fe),w.rotation.y=Math.PI/4,y.add(w),w}const v=[];for(const le of[-1,1]){const fe=o([le*2.1,1.9,0],m);v.push(fe);const U=o([0,0,0],fe);U.scale.x=le,c([0,0,0],[.87,1.67,.24],d,U),c([0,.1,.2],[.65,1.33,.17],M,U),u([[.2,-1.4,.18],[.7,-.9,.2],[.8,.45,.18],[.55,1.4,.14],[-.35,1.5,.12],[-.7,.7,.2],[-.6,-.25,.3],[-.15,-.55,.4],[.2,-1.4,.18]],.1,C,U),u([[.22,-.55,.45],[.42,.1,.4],[.28,.9,.4],[-.23,1.02,.4],[-.4,.45,.43],[-.1,.1,.48],[.2,.22,.5]],.095,d,U),c([-.13,-.4,.45],[.23,.34,.07],s.black,U),c([-.45,-.5,.5],[.19,.28,.12],d,U),l([0,-1.8,0],.38,.25,s.copper,fe),T(le===-1?"Л":"П",[0,-1.5,.6],.34,fe)}const P=i.clone(!0);P.scale.setScalar(.57),m.add(P);const A=[],N=[],q=[],V=[];for(let le=0;le<6;le++){const fe=o([0,0,0],m);A.push(fe),V.push(new n.Vector3),c([0,0,0],[.19+Pr[le]*.023,.16,.23],le%2?s.concrete:s.copper,fe);const U=T(String(Pr[le]),[0,.43,.1],.42,fe);N.push(U);const y=o([0,-.2,0],fe);q.push(y);for(let L=0;L<Pr[le];L++)g([0,L*.045,0],.32,.012,C,y)}const k=c([0,.1,-1],.28,s.mint,m);h("НЕ ПО ТЕГАМ",[0,-.05,3.4],2.2,.3,m,{size:46});const I=o([3.15,.2,3.2],t);g([0,.12,0],.12,.035,C,I,[0,0,0]),c([0,0,0],[.12,.09,.1],s.concrete,I),I.visible=!1,p(S,[]),v.forEach(le=>p(le,[])),A.forEach((le,fe)=>p(le,[N[fe],q[fe]])),q.forEach(le=>p(le,[])),p(I,[]);let O=Oc(),B=!1,Q=!1;try{Q=JSON.parse(localStorage.getItem("beznogim-dream09-v1")||"{}").trace===!0}catch{}I.visible=Q;function Y(){O=Oc(),B=!0,t.visible=!1,m.visible=!0,ce(0,0,!0)}function W(){B=!1,t.visible=!0,m.visible=!1}function te(le){if(!B)return;const fe=$x(O,le);fe!==O&&(O=fe,f(150+Pr[le]*35),_())}function j(){if(!B)return;const le=Jx(O);le!==O&&(O=le,f(O.phase==="unfolding"?510:160),_())}function ce(le,fe,U=!1){if(!B)return;const y=O.phase;O=Zx(O,le);const L=zc(O),J=Number.isFinite(le)?Math.min(.1,Math.max(0,le)):0;if(v.forEach((Z,w)=>{const R=w===0?-1:1;Z.rotation.z=L.lean*(1-L.open)-R*L.open*Math.PI/2,Z.position.y=1.9+L.open*.8}),P.position.set(0,L.headY,1.7-L.open*.8),P.rotation.x=O.places.some(Z=>Z===0)?Math.sin(fe*2.2)*.13:0,S.rotation.x=L.waterTilt,S.position.y=L.waterY,A.forEach((Z,w)=>{V[w].set(...Kx(O,w)),U?Z.position.copy(V[w]):Z.position.lerp(V[w],1-Math.exp(-9*J)),N[w].visible=O.places[w]===0,q[w].rotation.y=fe*.2}),k.position.y=.1+L.open*4.7,k.scale.setScalar(.28*(1+L.open*.6)),O.phase==="flying"&&!Q){Q=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream09-v1",JSON.stringify({trace:!0}))}catch{}}y!==O.phase&&_()}return{enter:Y,exit:W,move:te,act:j,update:ce,ready:()=>Fc(O),busy:()=>O.phase==="unfolding",text:()=>O.phase==="flying"?"Уши раскрылись крыльями. Вода встала стеной, а камень наконец утонул в небе. Теперь я хотя бы молчу с ушами.":O.phase==="unfolding"?"Ярлыки закончились. Берег поднимает уши, вода слушает стоя.":`Каждый камень: полка → левое → правое → полка. Разложи все шесть поровну. Сейчас ${qa(O).join(" : ")}.`,button:()=>O.phase==="flying"?"увидеть сон снова":O.phase==="unfolding"?"берег слушает…":"услышать тишину · 11 : 11",inspect:()=>({...O,active:B,trace:Q,loads:qa(O),ready:Fc(O),pose:zc(O),earAngles:v.map(le=>le.rotation.z),stones:A.map(le=>le.position.toArray()),tags:N.map(le=>le.visible),head:P.position.toArray(),moon:k.position.toArray(),moonScale:k.scale.x,waterTilt:S.rotation.x,rootVisible:t.visible,roomVisible:m.visible,landmarks:[[-4.2,.1,0],[4.2,.1,0],[0,4.9,-1],[0,.1,3.5]]})}}const kc=Object.freeze([1,3,2]),Bc=()=>({phase:"tuning",turns:[0,0,0],progress:0,trace:!1}),Ko=n=>n.turns.map((e,t)=>e===kc[t]);function jx(n,e){return n.phase==="tuning"&&Number.isInteger(e)&&e>=0&&e<3?{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t)}:n}function ey(n){return n.phase==="sky"?Bc():n.phase==="tuning"&&Ko(n).every(Boolean)?{...n,phase:"releasing",progress:0}:n}function ty(n,e){if(n.phase!=="releasing"||!Number.isFinite(e)||e<=0)return n;const t=Math.min(1,n.progress+Math.min(.1,e)/4);return t<1?{...n,progress:t}:{...n,progress:1,phase:"sky",trace:!0}}function Md(n,e){const t=n.phase==="sky"?1:n.phase==="releasing"?n.progress:0,i=t*t*(3-2*t),s=e*Math.PI/5;return{x:Math.cos(s)*(3.05+i*.25),y:.65+i*(2.5+e%3*.65),z:Math.sin(s)*(3.05+i*.25),lift:i,diskScale:1-i*.78,diskTilt:i*Math.PI/2}}function ny({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:g,sign:h,batchStatic:p,chime:f,changed:_}){const m=o([0,0,0],e);m.name="dream08-ten-torches",m.visible=!1;const d=r("#344c5d"),M=r("#647c83"),C=r("#ddc999"),x=["#d38d6d","#81beca","#d6c56e"],E=x.map(U=>r(U)),S=x.map(U=>r(U,{emissive:U,emissiveIntensity:1.4}));l([0,-.4,0],4.15,.22,d,m),g([0,-.27,0],4,.035,s.copper,m);const T=o([0,.18,0],m);l([0,0,0],2.6,.18,s.black,T),l([0,.105,0],.49,.015,C,T);const v=[],P=[];for(let U=0;U<3;U++){const y=.9+U*.6,L=o([0,.12,0],T);v.push(L),g([0,0,0],y,.035,E[U],L),g([0,-.02,0],y+.09,.008,M,L),c([y,.04,0],.13,S[U],L);for(let Z=0;Z<4;Z++){const w=Z*Math.PI/2;a([Math.cos(w)*y,.025,Math.sin(w)*y],[.1,.07,.1],Z===kc[U]?E[U]:M,T)}const J=kc[U]*Math.PI/2;P.push(u([Math.cos(J)*y,.18,Math.sin(J)*y],[0,.18,0],.018,S[U],T))}h("1 / 3 / 2",[0,.09,2.82],1.7,.35,m,{size:68}).rotation.x=-Math.PI/2;const A=[],N=[],q=[];for(let U=0;U<10;U++){const y=o([0,0,0],m),L=U%3;q.push(L),A.push(y),l([0,-.34,0],.055,.7,s.copper,y),l([0,0,0],.14,.14,E[L],y);const J=c([0,.26,0],[.12,.3,.12],S[L],y);N.push(J),g([0,-.16,0],.17,.018,E[L],y)}const V=i.clone(!0);V.position.set(0,.65,3.1),V.scale.setScalar(.4),m.add(V);const k=[];for(const U of[-1,1]){const y=o([U*.16,-.08,.7],V);u([0,0,0],[U*.85,-.12,0],.055,s.black,y),c([U*.8,-.12,0],[.19,.08,.08],s.black,y),k.push(y)}const I=o([-5.05,.15,1.55],t);l([0,0,0],.13,.06,s.black,I),c([0,.15,0],[.045,.095,.045],s.light,I),I.visible=!1,p(m,[T,...A,V]),p(T,[...v,...P]),v.forEach(U=>p(U,[])),A.forEach((U,y)=>p(U,[N[y]])),p(I,[]);let O=Bc(),B=!1,Q=!1;const Y=[0,0,0],W=[0,0,0];try{Q=JSON.parse(localStorage.getItem("beznogim-dream08-v1")||"{}").trace===!0}catch{}I.visible=Q;function te(){O=Bc(),Y.fill(0),W.fill(0),B=!0,t.visible=!1,m.visible=!0,fe(0,0)}function j(){B=!1,t.visible=!0,m.visible=!1}function ce(U){if(!B)return;const y=jx(O,U);y!==O&&(O=y,W[U]+=Math.PI/2,f(180+U*85+O.turns[U]*20),_())}function le(){if(!B)return;const U=ey(O);U!==O&&(O=U,O.phase==="tuning"&&(Y.fill(0),W.fill(0)),f(O.phase==="releasing"?440:165),_())}function fe(U,y){if(!B)return;const L=O.phase;O=ty(O,U);const J=Ko(O),Z=Md(O,0),w=Number.isFinite(U)?Math.max(0,Math.min(.1,U)):0;if(v.forEach((R,z)=>{Y[z]=n.MathUtils.damp(Y[z],W[z],9,w),R.rotation.y=-Y[z],P[z].visible=J[z]}),T.scale.setScalar(Z.diskScale),T.rotation.x=Z.diskTilt,T.position.y=.18+Z.lift*2.7,A.forEach((R,z)=>{const H=Md(O,z);R.position.set(H.x,H.y,H.z),R.rotation.z=Z.lift*Math.sin(y*.7+z)*.1,N[z].visible=J[q[z]],N[z].scale.y=1+Math.sin(y*5+z)*.1}),k.forEach((R,z)=>R.rotation.z=Math.sin(y*2+z*Math.PI)*.3),V.rotation.y=Math.sin(y*.3)*.12,O.trace&&!Q){Q=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream08-v1",JSON.stringify({trace:!0}))}catch{}}L!==O.phase&&_()}return{enter:te,exit:j,turn:ce,act:le,update:fe,busy:()=>O.phase==="releasing",canRelease:()=>O.phase!=="tuning"||Ko(O).every(Boolean),text:()=>O.phase==="sky"?"Диск стал тонкой луной. Все десять факелов освободили место и теперь горят в небе. Я всё ещё дирижирую, хотя никто ничего не говорит.":O.phase==="releasing"?"Канавки сжимаются. Факелы отцепляются от диска и забирают огонь наверх.":"Диск забит десятью факелами. Разложи три голоса по канавкам: птица на 1, вода на 3, ветер на 2. Цветные риски совпадут, и каждый голос зажжёт свой огонь.",button:()=>O.phase==="sky"?"увидеть сон снова":O.phase==="releasing"?"факелы уходят в небо…":"освободить место ↑",inspect:()=>({...O,active:B,trace:Q,aligned:Ko(O),ringAngles:v.map(U=>U.rotation.y),flames:N.map(U=>U.visible),torches:A.map(U=>U.position.toArray()),diskScale:T.scale.x,diskTilt:T.rotation.x,diskY:T.position.y,rootVisible:t.visible,roomVisible:m.visible,whiskers:k.map(U=>U.rotation.z),landmarks:[[-3.4,.2,0],[3.4,.2,0],[0,4.7,0],[0,.1,3.5],[0,1,-3.5]]})}}const Gc=()=>({phase:"flat",progress:0,trace:!1}),jf=n=>["folding","falling","turning"].includes(n.phase);function iy(n){const e={flat:"folding",bowl:"falling",caught:"turning"}[n.phase];return e?{...n,phase:e,progress:0}:n.phase==="audience"?Gc():n}function sy(n,e){if(!jf(n))return n;const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;if(t===0)return n;const i=Math.min(1,n.progress+t/(n.phase==="turning"?4:3));return i<1?{...n,progress:i}:{...n,progress:1,phase:{folding:"bowl",falling:"caught",turning:"audience"}[n.phase],trace:n.trace||n.phase==="turning"}}function Sd(n){const e=o=>o*o*(3-2*o),t=e(n.progress),i=n.phase==="flat"?0:n.phase==="folding"?t:1,s=["flat","folding","bowl"].includes(n.phase)?0:n.phase==="falling"?t:1,r=n.phase==="turning"?t:n.phase==="audience"?1:0;return{fold:i,fall:s,turn:r}}function ry({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,sign:g,batchStatic:h,chime:p,changed:f}){const _=new n.Group;e.add(_),_.visible=!1;const m=r("#e9dbb7"),d=r("#405e62"),M=r("#c87e68"),C=r("#ffe6aa",{emissive:"#e9b35d",emissiveIntensity:.8});a([0,-.35,0],[8.1,.28,7.1],d,_),a([0,-.18,0],[7.8,.1,6.8],s.concrete,_);const x=o([0,.12,0],_);a([0,0,0],[2.5,.06,2.5],m,x);const E=[];for(let U=0;U<4;U++){const y=o([0,0,0],x);y.rotation.y=U*Math.PI/2;const L=o([0,0,1.25],y);a([0,0,.8],[2.5,.05,1.6],m,L),a([0,.032,.76],[.022,.015,1.3],M,L),a([0,.035,.1],[2.3,.015,.018],M,L),E.push(L)}const S=o([0,4.4,0],_);a([0,0,0],[2.25,.17,2.25],d,S),a([0,.12,0],[2.15,.08,2.15],s.concrete,S);const T=o([-.45,.18,-.3],S);a([0,.33,0],[.8,.66,.7],m,T),a([0,.4,.36],[.25,.28,.025],C,T),a([0,.73,0],[1.05,.12,.9],M,T);const v=o([.65,.72,-.5],S);u([-.25,-.5,0],[-.25,.4,0],.03,d,v),u([.25,-.5,0],[.25,.4,0],.03,d,v),u([-.25,.4,0],[.25,.4,0],.03,d,v);const P=o([0,.33,0],v);u([0,0,0],[0,-.65,0],.02,M,P),c([0,-.67,0],.14,s.copper,P);for(let U=0;U<4;U++)a([-.7+U*.42,.23,.66],[.28,.13,.36],m,S);const A=[];for(const U of[-1.05,1.05])for(const y of[-1.05,1.05])A.push(u([U,4.45,y],[U,5.25,y],.012,s.copper,_));for(const U of[-2.8,2.8])u([U,0,-1.6],[U,5.3,-1.6],.06,d,_);u([-2.8,5.3,-1.6],[2.8,5.3,-1.6],.06,d,_);const N=(U,y=_)=>{const L=o(U,y);a([0,.4,0],[.55,.1,.55],M,L),a([0,.73,-.24],[.55,.65,.08],M,L);for(const J of[-.2,.2])for(const Z of[-.2,.2])u([J,0,Z],[J,.4,Z],.025,d,L);return L},q=[N([-2.6,0,1.1]),N([-2.6,0,2.1]),N([-1.65,0,2.1]),N([-.7,0,2.1])],V=o([0,2,0],_);c([0,0,0],[.15,.27,.15],C,V),u([0,.18,0],[.19,.35,0],.018,s.copper,V);const k=i.clone(!0);k.scale.setScalar(.35),k.position.set(2.8,.78,1.65),_.add(k),g("07 / ПУСТОЙ ЗАЛ",[0,-.1,3.16],2.6,.33,_,{size:43}).rotation.x=-Math.PI/2;const I=N([-30.6,-1.3,-20.8],t);I.scale.setScalar(.35),I.visible=!1,h(_,[x,S,...A,...q,V,k]),h(x,E.map(U=>U.parent)),E.forEach(U=>h(U,[])),h(S,[T,v]),h(T,[]),h(v,[P]),h(P,[]),q.forEach(U=>h(U,[])),h(V,[]),h(I,[]);const O=new n.Vector3,B=new n.Vector3(1,0,-1).normalize();let Q=Gc(),Y=!1,W=!1;try{W=JSON.parse(localStorage.getItem("beznogim-dream07-v1")||"{}").trace===!0}catch{}I.visible=W;function te(){Q=Gc(),Y=!0,_.visible=!0,t.visible=!1,le(0,0)}function j(){Y=!1,_.visible=!1,t.visible=!0}function ce(){const U=iy(Q);U!==Q&&(Q=U,p(Q.phase==="falling"?165:Q.phase==="turning"?440:330),f())}function le(U,y){if(!Y)return;const L=Q.phase;Q=sy(Q,U);const{fold:J,fall:Z,turn:w}=Sd(Q);if(E.forEach(R=>R.rotation.x=-J*.92*(1-w)),x.quaternion.setFromAxisAngle(B,w*2.2),x.position.y=.12+w*3.9,S.position.set(0,4.4-3.65*Z,0),S.quaternion.identity(),w>0&&(O.set(0,.63,0).applyAxisAngle(B,w*2.2),S.position.copy(O).add(x.position),S.quaternion.copy(x.quaternion)),A.forEach(R=>R.visible=Z===0),P.rotation.z=Math.sin(y*2.1)*.5,V.position.set(-2.6*w,2-1.34*w,1.1*w),V.rotation.z=Math.sin(y)*.1,q.forEach((R,z)=>{z>0&&(R.position.y=w*.15*Math.sin(y+z),R.rotation.z=w*Math.sin(y+z)*.035)}),Q.trace&&!W){W=!0,I.visible=!0;try{localStorage.setItem("beznogim-dream07-v1",JSON.stringify({trace:!0}))}catch{}}Q.phase!==L&&f()}return{enter:te,exit:j,act:ce,update:le,text:()=>({flat:"Зал пустой. Над бумажным листом висит маленький двор. Я пришёл без билета. У обёртки четыре края: можно их поднять.",folding:"Бумага складывается в карман. Поймать пока нечего.",bowl:"Обёртка готова. Отцепи нитки: пусть двор упадёт в неё целиком.",falling:"Двор падает. Бумага ловит дом, ступени и маятник вместе.",caught:"Двор пойман. Можно вывернуть карман. Только потолок с полом больше не договорятся.",turning:"Пол уходит наверх. Старое белое семечко ищет себе место в зале.",audience:"Двор играет на потолке. Семечко село смотреть. Остальные стулья пока свободны. Можно просто посидеть."})[Q.phase],button:()=>({flat:"сложить обёртку ↑",folding:"бумага складывается…",bowl:"отцепить двор ↓",falling:"двор падает…",caught:"вывернуть карман ↻",turning:"пол становится потолком…",audience:"увидеть сон снова"})[Q.phase],busy:()=>jf(Q),inspect:()=>({...Q,...Sd(Q),active:Y,trace:W,rootVisible:t.visible,roomVisible:_.visible,leafAngles:E.map(U=>U.rotation.x),yard:S.position.toArray(),yardAngle:2*Math.acos(Math.min(1,Math.abs(S.quaternion.w))),yardQuaternion:S.quaternion.toArray(),pocket:x.position.toArray(),seed:V.position.toArray(),landmarks:[[-3,0,2.4],[3.3,.8,1.7],[0,5.4,0],[2.8,5.3,-1.6],[-2.8,5.3,-1.6]]})}}const Vc=()=>({target:"sky",phase:"ready",progress:0,trace:!1});function oy(n,e){return n.phase==="ready"&&["sky","planet"].includes(e)?{...n,target:e}:n}function ay(n){return n.phase==="ready"?{...n,phase:"heating",progress:0}:n.phase==="cloud"?{...n,phase:"raining",progress:0}:n.phase==="settled"?Vc():n}function ly(n,e){if(!["heating","raining"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(.1,e)):0,i=Math.min(1,n.progress+t/3);return i<1?{...n,progress:i}:{...n,progress:1,phase:n.phase==="raining"?"settled":n.target==="sky"?"cloud":"ready",trace:n.trace||n.phase==="raining"}}function cy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:g,sign:h,batchStatic:p,chime:f,changed:_}){const m=o([0,0,0],e);m.name="dream-06-cloud-heating",m.visible=!1;const d=r("#203f49"),M=r("#dce6d7"),C=r("#c87948",{metalness:.55,roughness:.33}),x=r("#ffcb74",{emissive:"#df7c29",emissiveIntensity:.7}),E=r("#598e9d"),S=r("#ede1c3");l([0,-.3,0],4,.4,d,m),g([0,-.06,0],3.85,.045,C,m);for(let z=0;z<8;z++)u([-3+z*.85,-.06,-2.5],[-3+z*.85,-.06,2.5],.012,E,m);const T=o([-2.35,0,.2],m);a([0,.2,0],[1.7,.35,1.3],s.concrete,T);for(let z=0;z<6;z++){const H=-.65+z*.26;a([H,1.2,0],[.16,1.8,.66],C,T),g([H,2.12,0],.27,.065,C,T,[0,Math.PI/2,0])}u([-.8,.45,.2],[.8,.45,.2],.11,C,T),u([-.8,1.95,.2],[.8,1.95,.2],.11,C,T);const v=c([-2.35,1.15,.87],.42,E,m);g([-2.35,1.15,.87],.48,.024,S,m,[.5,.3,0]);const P=["ЗЕМЛЯ","ОБЛАКО"].map((z,H)=>{const ne=o([-3+H*1.3,.4,2.1],m);a([0,0,0],[.87,.14,1.13],d,ne);for(let F=0;F<4;F++)a([-.27+F*.18,.09,-.28],[.08,.03,.25],x,ne);return h(z,[0,.12,.32],.78,.22,ne,{size:52}).rotation.x=-Math.PI/2,ne}),A=g([-2.8,.57,2.1],.5,.035,x,m);A.rotation.x=Math.PI/2;const N=o([0,0,0],m);u([-1.5,.45,.2],[-.7,.45,.2],.09,C,N),u([-.7,.45,.2],[-.7,3.7,.2],.09,C,N),u([-.7,3.7,.2],[1.2,3.7,.2],.09,C,N);const q=Array.from({length:7},(z,H)=>c([.1+H*.45,3.8+H%2*.22,-.8],[.65,.45,.63],M,m)),V=o([1.25,3.1,-.8],m);a([0,.2,0],[2.6,.1,1.7],S,V);for(const z of[-1.15,1.15])for(const H of[-.7,.7])u([z,.2,H],[z,1.28,H],.045,C,V);const k=o([0,1.26,0],V);a([-.61,.15,0],[1.45,.12,1.95],M,k).rotation.z=.35,a([.61,.15,0],[1.45,.12,1.95],M,k).rotation.z=-.35;const I=[a([-.68,.8,.72],[.48,.57,.06],x,V),a([.68,.8,.72],[.48,.57,.06],x,V)],O=[[-.65,0,1.05],[1.1,0,1.6],[2.55,0,.35]],B=[],Q=[];O.forEach(([z,H,ne],F)=>{const ee=o([z,H,ne],m);B.push(ee),a([0,.05,0],[1.2,.13,1.1],s.concrete,ee);for(const $ of[-.5,.5])u([$,.1,-.38],[$,1.1,-.38],.045,C,ee);u([-.5,1.1,-.38],[0,1.5,-.38],.045,C,ee),u([0,1.5,-.38],[.5,1.1,-.38],.045,C,ee);const ie=o([1.25,3.9,-.05],m);Q.push(ie),a([0,0,0],[.65,.72,.12],S,ie),a([0,0,.071],[.48,.55,.035],x,ie),u([0,-.28,.1],[0,.28,.1],.018,C,ie),u([-.23,0,.1],[.23,0,.1],.018,C,ie)});const Y=Array.from({length:10},()=>c([0,0,0],.065,x,m)),W=i.clone(!0);W.scale.setScalar(.4),W.position.set(-2,.9,-1.7),m.add(W),h("СОН / 06",[0,-.04,3.3],1.5,.29,m,{size:52}).rotation.x=-Math.PI/2;const te=o([-5.13,.95,1.14],t);a([0,0,0],[.23,.32,.06],C,te),a([0,0,.04],[.13,.22,.02],x,te),te.visible=!1,p(m,[T,v,...P,A,N,...q,V,...B,...Q,...Y,W]),p(T,[]),p(N,[]),p(V,[k,...I]),p(k,[]),B.forEach(z=>p(z,[])),Q.forEach(z=>p(z,[])),P.forEach(z=>p(z,[]));let j=Vc(),ce=!1,le=0,fe=0,U=!1;try{U=JSON.parse(localStorage.getItem("beznogim-dream06-v1")||"{}").trace===!0}catch{}te.visible=U;function y(){j=Vc(),le=0,fe=0,ce=!0,m.visible=!0,t.visible=!1,w(0,0)}function L(){ce=!1,m.visible=!1,t.visible=!0}function J(z){j=oy(j,z),f(z==="sky"?330:165),_()}function Z(){j=ay(j),f(j.phase==="raining"?440:220),_()}function w(z,H){if(!ce)return;const ne=j.phase;j=ly(j,z);const F=j.phase==="heating",ee=j.target==="sky",ie=ee?F?j.progress:["cloud","raining","settled"].includes(j.phase)?1:0:0;if(le=ie,fe=j.phase==="raining"?j.progress:j.phase==="settled"?1:0,V.visible=ie>.02,V.scale.setScalar(Math.max(.001,ie)),V.position.y=3.1+Math.sin(H*.9)*.05,q.forEach(($,ae)=>{$.position.y=3.8+ae%2*.22+ie*.5-fe*.25,$.scale.set(.65+ie*.12,.45*(1-ie*.6),.63)}),v.scale.setScalar(.42*(F&&!ee?1+Math.sin(j.progress*Math.PI)*.75:1)),v.rotation.y=H*.2,Q.forEach(($,ae)=>{const ye=Math.max(0,Math.min(1,fe*1.6-ae*.3)),be=ye*ye*(3-2*ye),K=O[ae];$.position.set(1.25+(K[0]-1.25)*be,3.9+(K[1]+.8-3.9)*be,-.05+(K[2]+.06+.05)*be),$.rotation.z=(1-be)*Math.sin(H+ae)*.1,$.visible=["cloud","raining","settled"].includes(j.phase)}),I.forEach($=>$.visible=j.phase==="cloud"||F),A.position.x=ee?-1.7:-3,Y.forEach(($,ae)=>{$.visible=F;const ye=(H*.7+ae/10)%1;ee?ye<.72?$.position.set(-.7,.45+ye/.72*3.25,.2):$.position.set(-.7+(ye-.72)/.28*1.9,3.7,.2):$.position.set(-2.35+Math.sin(ye*Math.PI*2)*.6,.5+ye*1.8,.87)}),j.trace&&!U){U=!0,te.visible=!0;try{localStorage.setItem("beznogim-dream06-v1",JSON.stringify({trace:!0}))}catch{}}j.phase!==ne&&_()}return{enter:y,exit:L,choose:J,act:Z,update:w,text:()=>({ready:j.target==="sky"?"В радиаторе греется маленькая планета. Две чёрные карточки переключают трубу: в землю или в облако. Соседей пока нет.":"Планета уже тёплая. Можно погреть ещё, но соседям от этого ничего не достанется.",heating:j.target==="sky"?"Тепло идёт по трубе вверх. Облако вспоминает, что оно могло быть крышей.":"Планета распухла от тепла. Труба к облаку осталась холодной. Это можно переключить.",cloud:"Облако стало домом. Под ним ещё нет стен, зато уже есть три тёплых окна. Пусть выпадут.",raining:"Из облака идёт оконный дождь. Окна ищут себе соседей.",settled:"Соседи получились из отопления. Дом наверху пустой, внизу светятся три окна. Планета всё ещё в радиаторе."})[j.phase],button:()=>j.phase==="raining"?"окна падают…":j.phase==="heating"?"тепло идёт…":j.phase==="settled"?"увидеть сон снова":j.phase==="cloud"?"пустить оконный дождь ↓":"пустить тепло ↑",inspect:()=>({...j,active:ce,trace:U,warmth:le,spent:fe,globeScale:v.scale.x/.42,rootVisible:t.visible,roomVisible:m.visible,houseVisible:V.visible,windows:Q.map(z=>z.position.toArray()),landmarks:[[-2.35,1.15,.87],[1.25,4.65,-.8],...O.map(z=>[z[0],.8,z[2]])]})}}function Hc(){return{target:"drop",phase:"ready",progress:0,attempts:0,trace:!1}}function uy(n,e){return!["ready","refused"].includes(n.phase)||!["drop","self"].includes(e)?n:{...n,target:e,phase:"ready",progress:0}}function hy(n){return["measuring","unfolding","climbing"].includes(n.phase)?n:n.phase==="inside"?Hc():n.phase==="stairs"?{...n,phase:"climbing",progress:0}:{...n,phase:n.target==="drop"?"measuring":"unfolding",progress:0,attempts:n.attempts+1}}function dy(n,e){if(!["measuring","unfolding","climbing"].includes(n.phase))return n;const t=Number.isFinite(e)?Math.max(0,Math.min(e,.15)):0,i=Math.min(1,n.progress+t/(n.phase==="climbing"?4:n.phase==="unfolding"?2.5:1.8)),s=i<1?n.phase:n.phase==="measuring"?"refused":n.phase==="unfolding"?"stairs":"inside";return{...n,progress:i,phase:s,trace:n.trace||s==="inside"}}function fy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:g,torus:h,sign:p,batchStatic:f,chime:_,changed:m}){const d=a([0,0,0],e);d.name="dream-05-self-measuring-instrument",d.visible=!1;const M=r("#8ebcb2",{metalness:.35,roughness:.38}),C=r("#d3eeed",{metalness:.85,roughness:.18}),x=r("#f1e7c7"),E=r("#1c4147"),S=r("#547d83",{metalness:.5,roughness:.28});u([0,-.42,0],3.8,.45,E,d),u([0,-.16,0],3.45,.08,S,d),h([0,-.1,0],3.65,.07,s.copper,d);for(let $=0;$<5;$++)h([0,-.1+$*.006,0],.7+$*.52,.009,C,d);const T=a([0,0,0],d);c([0,.12,-1.6],[3,.34,1.3],s.concrete,T),g([0,.3,-1.65],[0,3.75,-1.65],.12,M,T);const v=a([0,3.7,-1.4],d),P=u([0,0,-.12],1.05,.2,E,v);P.rotation.x=Math.PI/2,h([0,0,0],1.05,.085,s.copper,v,[0,0,0]);const A=a([-.85,0,.02],v),N=a([.85,0,.02],v);c([.425,0,0],[.85,1.72,.1],x,A),c([-.425,0,0],[.85,1.72,.1],x,N);for(let $=0;$<12;$++){const ae=$*Math.PI/6;g([Math.sin(ae)*.78,Math.cos(ae)*.78,.09],[Math.sin(ae)*.91,Math.cos(ae)*.91,.09],.016,s.copper,v)}const q=a([0,0,.14],v);g([0,-.15,0],[0,.69,0],.025,E,q),l([0,0,0],.065,s.copper,q);const V=[a([-2.35,1.65,0],d),a([2.35,1.65,0],d)];for(const[$,ae]of V.entries())c([0,0,0],[.24,1.65,.38],M,ae),c([$===0?.38:-.38,-.76,0],[.95,.18,.38],C,ae),l([0,.84,0],.19,s.copper,ae);const k=[],I=[],O=[];for(let $=0;$<12;$++){const ae=-2.45+$*.445;I.push(new n.Vector3(ae,2.52,0));const ye=$/11,be=ye*Math.PI*1.35;O.push(new n.Vector3(2.35*Math.cos(be)*(1-ye*.85),.24+ye*3,2.05-ye*3.2));const K=a(I[$].toArray(),d);k.push(K),c([0,0,0],[.42,.16,.57],M,K),c([0,.09,.15],[.03,.012,.2],s.copper,K)}const B=l([0,.7,0],[.45,.64,.45],C,d),Q=i.clone(!0);d.add(Q),Q.scale.setScalar(.43);const Y=new n.Vector3(2.8,.65,2.15);Q.position.copy(Y);function W($,ae){const ye=new n.Shape;[[0,.9],[.68,-.35],[.25,-.25],[.39,-.79],[.13,-.89],[-.1,-.32],[-.44,-.58]].forEach(([ze,Ae],X)=>X?ye.lineTo(ze,Ae):ye.moveTo(ze,Ae)),ye.closePath();const be=new n.ExtrudeGeometry(ye,{depth:.07,bevelEnabled:!1}),K=a([0,0,0],$);return o(be,x,null,null,K),K.scale.setScalar(ae),K}const te=W(v,.88);te.position.set(0,.1,.2),te.visible=!1;const j=W(te,.22);j.position.set(-.03,-.2,.12);const ce=c([-.03,-.2,.085],[.34,.44,.01],E,te),le=W(t,.17);le.position.set(2.8,1.14,-2.75),le.rotation.y=Math.PI/4,p("СОН / 05",[0,-.055,2.94],1.65,.3,d,{size:48}).rotation.x=-Math.PI/2,p("СЕБЯ?",[0,.36,-.88],1.05,.26,d,{size:52});const fe=p("?",[-1.6,.65,1.5],.48,.65,d,{size:84,bg:"#1c4147"}),U=h([0,.12,0],.68,.035,s.light,d);f(d,[T,v,...k,...V,B,Q,fe,U]),f(T,[]),f(v,[A,N,q,te]),f(A,[]),f(N,[]),f(q,[]),f(te,[j,ce]),f(j,[]),k.forEach($=>f($,[])),V.forEach($=>f($,[]));let y=Hc(),L=!1,J=0,Z=0,w=!1;try{w=JSON.parse(localStorage.getItem("beznogim-dream05-v1")||"{}").trace===!0}catch{}le.visible=w;function R(){y=Hc(),J=0,Z=0,L=!0,d.visible=!0,t.visible=!1,F(0,0)}function z(){L=!1,d.visible=!1,t.visible=!0}function H($){y=uy(y,$),_($==="self"?330:165),m()}function ne(){y=hy(y),_(y.phase==="climbing"?440:220),m()}function F($,ae){if(!L)return;const ye=y.phase;y=dy(y,$);const be=y.phase==="unfolding"?y.progress:["stairs","climbing","inside"].includes(y.phase)?1:0;J=be*be*(3-2*be),Z=n.MathUtils.damp(Z,y.phase==="inside"?1:0,3,$),k.forEach((ze,Ae)=>{ze.position.lerpVectors(I[Ae],O[Ae],J),ze.rotation.y=J*(-Ae*.07)});const K=y.phase==="measuring"?Math.sin(y.progress*Math.PI):0;if(V.forEach((ze,Ae)=>{const X=Ae===0?-1:1;ze.position.set(X*(2.35-K*1.55),1.65+J*.4,-J*.85),ze.rotation.z=X*J*.65}),q.rotation.z=y.phase==="measuring"?Math.sin(y.progress*35)*.8:y.phase==="refused"?Math.sin(ae*6)*.25:-J*Math.PI*1.75,B.position.y=.7+(y.phase==="measuring"?Math.sin(y.progress*Math.PI)*1.5:Math.sin(ae*1.3)*.05),B.scale.set(.45*(1-K*.16),.64*(1+K*.3),.45*(1-K*.16)),fe.visible=y.phase==="refused",fe.position.y=.65+Math.sin(ae*2)*.1,A.rotation.y=Z*1.7,N.rotation.y=-Z*1.7,q.visible=Z<.2,te.visible=y.phase==="inside",te.rotation.z=Math.sin(ae*.7)*.04,j.rotation.z=-ae*.12,Q.position.copy(Y),Q.scale.setScalar(.43),Q.visible=y.phase!=="inside",["climbing","inside"].includes(y.phase)){const ze=y.phase==="inside"?1:y.progress,Ae=[Y,...O.map(oe=>oe.clone().add(new n.Vector3(0,.45,0))),new n.Vector3(0,3.7,-1.02)],X=ze*(Ae.length-1),b=Math.min(Ae.length-2,Math.floor(X));Q.position.lerpVectors(Ae[b],Ae[b+1],Math.min(1,X-b)),Q.scale.setScalar(.43*(1-ze*.8))}if(U.position.set((y.target==="self",0),y.target==="self"?3.7:.12,y.target==="self"?-1.4:0),U.rotation.x=y.target==="self"?0:Math.PI/2,U.visible=["ready","refused","measuring","unfolding"].includes(y.phase),y.trace&&!w){w=!0,le.visible=!0;try{localStorage.setItem("beznogim-dream05-v1",JSON.stringify({trace:!0}))}catch{}}ye!==y.phase&&m()}function ee(){return{ready:y.target==="drop"?"Прибор над каплей жидкого металла. Можно измерить каплю. Или переформулировать вопрос: измерить сам прибор.":"Теперь прибор направлен на себя. Посмотрим, сколько в нём прибора.",measuring:"Губки сходятся. Капля вытягивается и ускользает.",refused:"Прибор попросил переформулировать вопрос. Капля цела. Попробуй измерить сам прибор.",unfolding:"Деления оторвались от линейки и стали ступенями. Стрелка ищет верх.",stairs:"Лестница ведёт внутрь циферблата. Ног не надо. Можно подняться.",climbing:"Поднимаюсь по показанию. Каждая ступень чуть меньше предыдущей.",inside:"В приборе оказался курсор. В курсоре ещё курсор. Теперь я знаю ровно столько же."}[y.phase]}return{enter:R,exit:z,choose:H,act:ne,update:F,text:ee,button:()=>y.phase==="inside"?"увидеть сон снова":y.phase==="stairs"?"подняться в показание ↑":"измерить ↗",inspect:()=>({...y,active:L,trace:w,unfold:J,opened:Z,rootVisible:t.visible,roomVisible:d.visible,steps:k.map($=>$.position.toArray()),jaws:V.map($=>$.position.toArray()),drop:B.position.toArray(),head:Q.position.toArray(),cursorVisible:te.visible,cursorPosition:te.getWorldPosition(new n.Vector3).toArray(),faceAngles:[A.rotation.y,N.rotation.y],nestedVisible:te.visible&&j.visible,landmarks:[B.position.toArray(),[0,3.7,-1.4],Y.toArray(),O[0].toArray()]})}}const py=["восток","юг","запад","север"],ep=[0,2,3];function cc(){return{turns:[1,1,1],phase:"idle",stop:0,progress:0,attempts:0,trace:!1}}function my(n,e){return n.phase==="flying"||n.phase==="delivered"||!Number.isInteger(e)||e<0||e>2?n:{...n,turns:n.turns.map((t,i)=>i===e?(t+1)%4:t),phase:"idle",progress:0}}function gy(n){if(n.phase==="flying"||n.phase==="delivered")return n;const e=n.turns.findIndex((t,i)=>t!==ep[i]);return{...n,phase:"flying",stop:e<0?4:e+1,progress:0,attempts:n.attempts+1}}function _y(n,e){if(n.phase!=="flying")return n;const t=Math.min(n.stop,n.progress+Math.max(0,Math.min(Number(e)||0,.15))*.85);return{...n,progress:t,phase:t>=n.stop?n.stop===4?"delivered":"caught":"flying",trace:n.trace||t>=4}}function vy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:g,torus:h,sign:p,batchStatic:f,chime:_,changed:m}){const d=a([0,0,0],e);d.name="dream-04-letter-above-roof",d.visible=!1;const M=r("#355b62"),C=r("#72a49c",{metalness:.25,roughness:.5}),x=r("#eee3bd");r("#96c9c2"),u([0,-.45,0],3.9,.32,M,d),h([0,-.26,0],3.78,.024,s.copper,d);for(let w=0;w<4;w++){const R=w*Math.PI/2,z=Math.cos(R)*3.05,H=Math.sin(R)*3.05;p(["В","Ю","З","С"][w],[z,-.23,H],.38,.28,d).rotation.x=-Math.PI/2}const E=[],S=[],T=[];for(let w=0;w<3;w++){const R=1.05+w*1.4,z=2.05-w*.27,H=a([0,R,0],d);E.push(H);for(let ae=1;ae<4;ae++){const ye=ae*Math.PI/2,be=Math.cos(ye),K=Math.sin(ye),ze=[[.3,.3,-.3],[.3,.3,.3],[z,.04,z],[z,.04,-z]],Ae=new n.BufferGeometry,X=[];for(const oe of[0,1,2,0,2,3]){const[ue,pe,Ee]=ze[oe];X.push(ue*be-Ee*K,pe,ue*K+Ee*be)}Ae.setAttribute("position",new n.Float32BufferAttribute(X,3)),Ae.computeVertexNormals();const b=C.clone();b.side=n.DoubleSide,o(Ae,b,null,null,H),g([z*be-z*K,.04,z*K+z*be],[z*be+z*K,.04,z*K-z*be],.035,s.copper,H);for(const oe of[-1,1])g([z*be-z*K*oe,.04,z*K+z*be*oe],[(z+.16)*be-(z+.16)*K*oe,.2,(z+.16)*K+(z+.16)*be*oe],.035,s.copper,H)}const ne=a([z*.67,.045,0],H);g([-.32,0,0],[.3,0,0],.026,s.mint,ne),g([.3,0,0],[.1,0,.13],.026,s.mint,ne),g([.3,0,0],[.1,0,-.13],.026,s.mint,ne),S.push(ne);const F=ep[w]*Math.PI/2,ee=Math.cos(F)*z*.63,ie=Math.sin(F)*z*.63,$=h([ee,R+.09,ie],.16,.025,s.light,d);T.push($),p(`${w+1}`,[z+.26,R+.14,.2],.36,.29,d,{bg:"#355b62",fg:"#f0e4b8"});for(const ae of[-1,1])g([ae*.3,R-.32,-.3],[ae*.3,R-.03,-.3],.018,s.copper,d)}const v=a([-2.6,.16,1.5],d);c([0,0,0],[1.1,.62,.7],s.cream,v),c([0,.16,.361],[.72,.07,.025],M,v),p("БЕЗ АДРЕСА",[-2.6,.14,1.87],.94,.18,d,{size:40});const P=i.clone(!0);d.add(P),P.scale.setScalar(.53),P.position.set(-2.6,1,1.5),P.rotation.z=-.12,p("СОН / 04",[0,-.12,3.34],1.8,.32,d,{size:48}).rotation.x=-Math.PI/2;const A=a([-1.1,.12,1.5],d);c([0,0,0],[.52,.025,.36],x,A);const N=a([-.26,.016,0],A),q=a([.26,.016,0],A);c([.13,0,0],[.26,.022,.36],x,N),c([-.13,0,0],[.26,.022,.36],x,q),g([-.25,.04,-.17],[0,.04,.1],.009,s.copper,A),g([.25,.04,-.17],[0,.04,.1],.009,s.copper,A);const V=l([0,.045,0],.055,s.light,A),k=a([0,5.3,0],d);h([0,0,0],.55,.025,s.copper,k),g([0,-.3,0],[0,.22,0],.018,s.copper,k);const I=Array.from({length:6},(w,R)=>{const z=R*Math.PI/3,H=l([Math.cos(z)*.29,0,Math.sin(z)*.29],[.21,.065,.11],x,k);return H.rotation.y=-z,H});k.visible=!1;const O=[new n.Vector3(-1.1,.12,1.5),...T.map(w=>w.position.clone().add(new n.Vector3(0,.05,0))),new n.Vector3(0,5.3,0)],B=new n.BufferGeometry().setFromPoints(O),Q=new n.Line(B,new n.LineDashedMaterial({color:"#d6c797",dashSize:.12,gapSize:.16,transparent:!0,opacity:.45}));Q.computeLineDistances(),d.add(Q);let Y=cc(),W=!1,te=0,j=!1,ce=[Math.PI/2,Math.PI/2,Math.PI/2];try{j=JSON.parse(localStorage.getItem("beznogim-dream04-v1")||"{}").trace===!0}catch{}const le=a([-3.75,1.17,-2.95],t);le.visible=j,c([0,0,0],[.23,.012,.16],x,le),g([-.11,.016,-.07],[0,.016,.04],.005,s.copper,le),g([.11,.016,-.07],[0,.016,.04],.005,s.copper,le),f(d,[...E,...T,v,P,A,k,Q]),E.forEach((w,R)=>f(w,[S[R]])),f(A,[N,q,V]),f(N,[]),f(q,[]),f(v,[]),f(k,I),f(le,[]);function fe(){W=!0,Y=cc(),te=0,ce=Y.turns.map(w=>w*Math.PI/2),d.visible=!0,t.visible=!1,J(0,0)}function U(){W=!1,d.visible=!1,t.visible=!0}function y(w){Y=my(Y,w),_(165+w*55+Y.turns[w]*22),m()}function L(){Y.phase==="delivered"?(Y=cc(),te=0):Y=gy(Y),_(220),m()}function J(w,R){if(!W)return;const z=Y.phase;Y=_y(Y,w),te=n.MathUtils.damp(te,Y.phase==="delivered"?1:0,2.4,w),E.forEach((ie,$)=>{const ae=Y.turns[$]*Math.PI/2,ye=Math.atan2(Math.sin(ae-ce[$]),Math.cos(ae-ce[$]));ce[$]+=ye*(w===0?1:1-Math.exp(-w*7)),ie.rotation.y=-ce[$],ie.position.x=te*[-2.15,1.85,0][$],ie.position.z=te*[.45,-.65,-2.1][$],ie.rotation.z=te*($===0?-.16:.13)});const H=Math.min(4,Y.progress),ne=Math.min(3,Math.floor(H)),F=Math.min(1,H-ne),ee=F*F*(3-2*F);if(A.position.lerpVectors(O[ne],O[ne+1],ee),A.rotation.y=R*.16,N.rotation.z=-te*1.1,q.rotation.z=te*1.1,V.position.y=.045+te*.18,k.visible=Y.phase==="delivered",k.rotation.y=R*.22,I.forEach((ie,$)=>{ie.position.y=Math.sin(R*.7+$)*.035}),Q.visible=Y.phase!=="delivered",Y.trace&&!j){j=!0,le.visible=!0;try{localStorage.setItem("beznogim-dream04-v1",JSON.stringify({trace:!0}))}catch{}}z!==Y.phase&&m()}function Z(){return Y.phase==="flying"?"Письмо падает вверх. Крыши пока не трогаем.":Y.phase==="caught"?`Поймала крыша ${Y.stop}. Ничего страшного: поверни проход и отправь ещё раз.`:Y.phase==="delivered"?"Дошло. Крыши разъехались, письмо раскрылось. Внутри всё ещё светится семечко.":"Письмо летит по светлым меткам. Снизу вверх: восток → запад → север. Поверни проходы крыши и отправь."}return{enter:fe,exit:U,turn:y,send:L,update:J,text:Z,directions:py,inspect:()=>({...Y,turns:[...Y.turns],active:W,trace:j,open:te,roomVisible:d.visible,rootVisible:t.visible,roofs:E.map(w=>({position:w.position.toArray(),rotation:w.rotation.toArray().slice(0,3)})),letter:A.position.toArray(),goals:T.map(w=>w.position.toArray()),crown:k.visible})}}function xy({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:g,torus:h,sign:p,paperBoat:f,batchStatic:_,chime:m}){const d=a([0,0,0],e);d.name="dream-03-silent-dock",d.visible=!1;const M=r("#526b79"),C=r("#375d69",{metalness:.35,roughness:.27}),x=r("#c7cdb3");u([0,-.45,0],4.15,.38,M,d),u([0,-.23,0],4,.055,C,d),h([0,-.18,0],4.08,.04,s.copper,d),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,d);for(let R of[-.1,.55,1.2,1.85])c([-2.85,.07,R],[1.38,.045,.025],M,d);for(let R of[-3.4,-2.3])g([R,-.3,1.9],[R,.48,1.9],.035,s.copper,d);p("СОН / 03",[-2.85,.13,2.4],1.6,.28,d,{size:48}).rotation.x=-Math.PI/2;const E=i.clone(!0);E.position.set(-2.8,1.27,.75),E.scale.setScalar(.65),d.add(E);const S=[];for(const R of[-1,1]){const z=a([R*.12,-.04,.68],E);g([0,0,0],[R*.64,-.2,.05],.06,s.black,z),l([R*.62,-.18,.05],[.19,.095,.07],s.black,z),g([R*.58,-.18,.06],[R*.58,-.7,.06],.015,s.copper,z),l([R*.58,-.76,.06],.075,s.copper,z),_(z,[]),S.push(z)}const T=Array.from({length:3},(R,z)=>h([-1.2+z*1.25,-.17,-.25],.72,.035,z===1?s.cream:s.copper,d)),v=Array.from({length:3},(R,z)=>h([-1.2+z*1.25,-.165,-.25],.72,.013,x,d)),P=o(new n.IcosahedronGeometry(.12,1),M,[-2.6,.35,1.5],null,d),A=f(d,[-1.9,-.13,-.25],.9),N=l([0,.53,0],[.065,.09,.065],s.light,A),q=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,d);q.rotation.z=.65;const V=[];for(let R=0;R<5;R++){const z=-1.6+R*.85;g([z,-.2,-2.9],[z,1.1+R%2*.4,-2.9],.025,M,d),V.push(l([z,1.12+R%2*.4,-2.9],.035,s.light,d))}let k=!1,I=0,O=1,B=[1,1,1],Q=[0,0,0],Y=0,W=0,te=!1;try{te=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const j=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);j.visible=te;const ce=Array.from({length:5},()=>new n.Vector3),le=new n.CatmullRomCurve3(ce),fe=new n.Vector3,U=new n.Vector3;_(d,[E,...T,...v,P,A,q,...V]),_(E,S),_(A,[N]);function y(R){O=n.MathUtils.clamp(Math.round(Number(R)||1),1,3)}function L(){k=!0,I=0,B=[1,1,1],Q=[0,0,0],Y=0,W=0,d.visible=!0,t.visible=!1,w(0,0)}function J(){k=!1,d.visible=!1,t.visible=!0}function Z(){if(k){if(I===3){I=0,B=[1,1,1],Q=[0,0,0],W=0;return}if(B[I]=O,I++,Y=0,m(110+O*55),I===3){te=!0,j.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function w(R,z){if(!k)return;W+=Math.min(R,.15),Y+=Math.min(R,.15);for(let ee=0;ee<3;ee++){Q[ee]=n.MathUtils.damp(Q[ee],ee<I?1:0,3,R);const ie=-.17+Q[ee]*(.95+B[ee]*.42),$=.72+B[ee]*.12;T[ee].position.y=ie,T[ee].rotation.set(Math.PI/2*(1-Q[ee]),Math.PI/2*Q[ee],0),T[ee].scale.setScalar($/.72),v[ee].scale.setScalar($/.72*(1+Math.sin(W*.9+ee)*.045)),ce[ee+1].set(T[ee].position.x,Math.max(-.1,ie),-.25)}ce[0].set(-2,-.1,-.25),ce[4].set(2.5,-.1,-.25);const H=(1-Math.cos(W*.55))*.5;le.getPoint(H,fe),le.getPoint(Math.min(.999,H+.012),U),A.position.copy(fe),A.rotation.z=n.MathUtils.clamp(Math.atan2(U.y-fe.y,U.x-fe.x),-.45,.45),A.rotation.y=0,P.visible=I>0;const ne=Math.min(1,Y/1.8),F=Math.max(0,I-1);P.position.set(n.MathUtils.lerp(-2.5,-1.2+F*1.25,ne),.35+ne*(2.1+B[F]*.35),n.MathUtils.lerp(1.4,-.25,ne)),P.rotation.y=W*.4,S.forEach((ee,ie)=>ee.rotation.z=Math.sin(W*1.2+ie*Math.PI)*(.06+I*.04)),N.position.y=.53+Math.sin(z)*.02}return{enter:L,exit:J,toss:Z,choose:y,update:w,inspect:()=>({active:k,step:I,force:O,forces:[...B],lift:[...Q],trace:te,roomVisible:d.visible,rootVisible:t.visible,boat:A.position.toArray(),ringY:T.map(R=>R.position.y),ringRotation:T.map(R=>R.rotation.toArray().slice(0,3)),stone:P.position.toArray()})}}function bd(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,u=Math.min(i,Math.max(0,360-l.age));l.age+=u,l.exposure[l.face]+=u,l[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(l.id),g=t.shelf.findIndex(h=>h.id===u);if(g<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(g,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",p={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(p),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:p,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const yy={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function My({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:u,sign:g,batchStatic:h,changed:p,watching:f,localPlay:_}){var z,H,ne;const m=s([24,-1.55,0]);m.name="cheese-cellar";const d=i("#697b70"),M=i("#b4b89b"),C=i("#936c4d"),x=i("#e1b064"),E=i("#b77e42"),S=i("#f4d490");r([0,-.23,0],[10,.45,8],d,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let F=-4;F<=4;F+=2)r([F,1.5,-3.43],[.16,3,.1],d,m);for(let F of[-4.4,4.4])c([F,0,-3.3],[F,3.6,-3.3],.09,t.copper,m),c([F,3.6,-3.3],[F,3.6,2.5],.09,t.copper,m),c([F,3.6,2.5],[F,0,2.5],.09,t.copper,m);g("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],C,m),r([0,0,-2.7],[7.9,.14,1.05],C,m);for(let F of[-3.8,3.8])r([F,.6,-2.7],[.14,1.4,1.05],C,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,S,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,C,m);for(let F of[2.8,3.5])a([F,.28,1.8],.26,.56,t.cream,m),a([F,.59,1.8],.12,.1,t.copper,m);const T=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let F=0;F<4;F++)r([2.25+F*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],C,m);const v=s([.5,1.02,.25],m),P=u(new n.CylinderGeometry(1.2,1.2,.62,40),x,[0,0,0],null,v),A=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),E,[0,0,0],null,v),N=l([0,.33,0],.35,.026,t.cream,v),q=s([.5,.65,2.3],m),V=[];for(let F=0;F<6;F++)V.push(o([-1.25+F*.5,0,0],.08,t.mint,q));const k=g("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});k.rotation.x=-Math.PI/2;function I(F){const ee=s(F,m),ie=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),S,[0,0,0],null,ee),$=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),E.clone(),[0,0,0],null,ee),ae=s([0,-.14,.09],ee);for(let ze=0;ze<4;ze++)r([.05+ze*.085,.04+ze*.05,.15+ze*.03],[.12,.06,.2],t.cream,ae);const ye=o([.09,.16,.27],.04,t.mint,ae),be=u(new n.IcosahedronGeometry(.21,0),d,[.13,.02,.23],null,ee),K=s([0,0,0],ee);for(const[ze,Ae,X]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([ze,Ae,X],[.05,.05,.025],t.dark,K);return{g:ee,body:ie,crust:$,steps:ae,crystal:be,holes:K,pearl:ye}}const O=Array.from({length:6},(F,ee)=>I([-3.15+ee*1.26,1.42,-2.6])),B=s([0,0,0],e);for(let F=0;F<24;F++){const ee=F/23;r([8.3+ee*11.2,-.15-ee*1.32,1.4+Math.sin(ee*Math.PI)*2],[.85,.15,.75],d,B)}for(let F=0;F<5;F++)r([20+F*.7,-1.46,1.4-F*.22],[.75,.13,.7],d,B);g("СЫР →",[10.2,.35,2.4],1.5,.4,B,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,B),h(B,[]),h(m,[v,T,q,k,...O.map(F=>F.g)]);for(const F of O)h(F.steps,[F.pearl]),h(F.holes,[]);let Q=null,Y=null,W=0,te=null,j="",ce=0;try{const F=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");Q=(F==null?void 0:F.state)||F,W=Number(F==null?void 0:F.clockOffset)||0}catch{}const le=()=>Date.now()/1e3+W;function fe(F,ee,ie={}){const $=bd({state:Q,mode:F,tool:ee,args:ie,now:le()});Q=$.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:Q,clockOffset:W}))}catch{}return $}fe("migrate");const U=document.createElement("div");U.id="cellar-controls",U.hidden=!0,U.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(U);function y(){return Y&&f()?Y:bd({mode:"migrate",state:Q,now:Q.updated}).public}function L(F){te=F;const ee=F.batch;if(v.visible=!!ee,k.visible=!ee,T.rotation.y=F.air==="dry"?-.8:0,ee){v.rotation.z=ee.face?Math.PI:0;const ie=ee.age/360;P.material.color.set(ee.culture==="moon"?"#e9cf8b":"#c8bc88"),A.material.color.set(F.air==="damp"?"#8b9f78":"#b87a48"),N.scale.setScalar(1+ie*.15)}for(let ie=0;ie<6;ie++)V[ie].visible=!!ee&&ee.age>=(ie+1)*60;O.forEach((ie,$)=>{const ae=F.shelf[$];ie.g.visible=!!ae,ae&&(ie.g.rotation.z=ae.kind==="lopsided"?.22:0,ie.crust.material.color.set(ae.wet>=180?"#8b9f78":"#b87a48"),ie.steps.visible=ae.kind==="moon_stair",ie.crystal.visible=ae.kind==="stone",ie.holes.visible=ae.kind==="holes"||ae.kind==="lopsided")})}function J(F,ee){_();const ie=fe("action",F,ee);return j="",R(0),p(),ie}for(const F of U.querySelectorAll("[data-culture]"))F.onclick=()=>J("set_batch",{culture:F.dataset.culture});U.querySelector("#cellar-turn").onclick=()=>J("tend",{air:Q.air,turn:!0}),U.querySelector("#cellar-air").onclick=()=>J("tend",{air:Q.air==="damp"?"dry":"damp",turn:!1}),U.querySelector("#cellar-wait").onclick=()=>{_(),W+=60,fe("tick"),j="",R(0),p()};function Z(){const F=te||y(),ee=F.batch,ie=Y&&f()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",$=ee?ee.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(ee.age)}/360 с. Корка: ${Math.floor(ee.exposure[0])}/${Math.floor(ee.exposure[1])} с.`:F.shelf.length?`На полке: ${F.shelf.map(ae=>yy[ae.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:Y&&f()?"войти в свою сыроварню":ee?ee.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(Y&&f())&&!!ee&&!ee.ready,description:ie+" "+$}}function w(){const F=te||y(),ee=F.batch;U.querySelector("#cellar-readout").textContent=`${F.air==="damp"?"сыро":"сухо"} · ${ee?ee.ready?"готово":`ещё ${Math.ceil(ee.remaining)} с`:"нет колеса"} · полка ${F.shelf.length}/6`;for(const ie of U.querySelectorAll("[data-culture]"))ie.disabled=!!ee;U.querySelector("#cellar-turn").disabled=!ee||ee.ready,U.querySelector("#cellar-air").textContent=F.air==="damp"?"сделать суше":"вернуть сырость"}function R(F){F-ce>=1&&(ce=F,fe("tick"));const ee=y(),ie=JSON.stringify(ee);ie!==j&&(j=ie,L(ee),w(),p())}return window.addEventListener("beznogim:state",({detail:F})=>{var ie,$;const ee=($=(ie=F.mechanics)==null?void 0:ie.cellar)==null?void 0:$.public;ee&&(Y=ee,j="")}),Y=((ne=(H=(z=window.__beznogimState)==null?void 0:z.mechanics)==null?void 0:H.cellar)==null?void 0:ne.public)||null,L(y()),w(),{house:m,controls:U,update:R,card:Z,run:()=>J(Q.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:Y&&f()?"resident":"sandbox",...te,wheelVisible:v.visible,shelfVisible:O.filter(F=>F.g.visible).length,stairsVisible:O.filter(F=>F.g.visible&&F.steps.visible).length,shutter:T.rotation.y})}}function Sy({entries:n,elements:e,layer:t,camera:i}){const s=new xt,r=new xt,o=new G,a=Object.entries(n).map(([g,h])=>({element:e[g],anchor:h.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,u=!1;return{update(g,h,p){if(t.hidden===g&&(t.hidden=!g),!g){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const f=!u||c!==h||l!==p||!s.equals(r);c=h,l=p,u=!0;for(const _ of a){if(typeof _.anchor=="function")_.anchor(o);else{if(!f)continue;o.copy(_.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,d=(1-o.y)*p*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&d>=10&&d<=p-55;if(M!==_.visible&&(_.visible=M,_.element.classList.toggle("hidden",!M)),!M)continue;const C=Math.round(m*10)/10,x=Math.round(d*10)/10;(C!==_.x||x!==_.y)&&(_.x=C,_.y=x,_.element.style.transform=`translate3d(${C}px,${x}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function by(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,g=Math.max(12,u?0:a.bottom+12,u?l.bottom+12:0),h=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(g)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const Se=n=>document.querySelector(n),en=()=>innerWidth<700,tp=matchMedia("(prefers-reduced-motion: reduce)").matches;let Lr={};try{Lr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const we={loop:0,roof:null,running:!!Lr.running,harvest:Math.min(99,Math.max(0,Number(Lr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Lr.dockTrips)||0))),dockPending:Lr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function cr(){return we.roof===null?we.running||we.loop>0:!!we.roof}function Wc(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:we.running,harvest:we.harvest,dockTrips:we.dockTrips,dockPending:we.dockPending}))}catch{}}const st=new Zf({antialias:!0,alpha:!1,powerPreference:"high-performance"});st.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2));st.setSize(innerWidth,innerHeight,!1);st.shadowMap.enabled=!0;st.shadowMap.type=Ks;st.shadowMap.autoUpdate=!1;st.shadowMap.needsUpdate=!0;st.outputColorSpace=cn;st.toneMapping=Ka;st.toneMappingExposure=1.22;Se("#world").append(st.domElement);const Kt=new Mf;Kt.background=new ht("#182e32");Kt.fog=new cl("#182e32",8e-4);const Oe=new ro(-10,10,10,-10,.1,600),Iu=new G(0,1,0);Oe.position.set(20,20,24);Oe.lookAt(Iu);const Qe=new Ex(Oe,st.domElement);Qe.target.copy(Iu);Qe.enableDamping=!0;Qe.enableRotate=!1;Qe.enablePan=!0;Qe.minZoom=.075;Qe.maxZoom=2.5;Qe.screenSpacePanning=!1;Qe.mouseButtons.LEFT=Ai.PAN;Qe.mouseButtons.RIGHT=Ai.PAN;Qe.touches.ONE=wi.PAN;Qe.touches.TWO=wi.DOLLY_PAN;Kt.add(new Ff("#d9eedc","#334d53",2.3));const Rs=new Cu("#ffe2ac",3.3);Rs.position.set(-7,14,6);Rs.castShadow=!0;Rs.shadow.mapSize.set(en()?512:1024,en()?512:1024);Object.assign(Rs.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});Rs.shadow.bias=-4e-4;Rs.shadow.normalBias=.025;Kt.add(Rs);const np=new Cu("#8ad5d8",1.3);np.position.set(5,7,-8);Kt.add(np);const dt=new Zi;Kt.add(dt);const uc={};function je(n,e={}){const t=n+JSON.stringify(e);return uc[t]||(uc[t]=new $s({color:n,roughness:.8,...e}))}const ci={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},ge={concrete:je(ci.concrete),cream:je(ci.cream),dark:je(ci.dark),metal:je(ci.metal,{metalness:.5,roughness:.4}),copper:je(ci.copper,{metalness:.6,roughness:.35}),rust:je(ci.rust),black:je(ci.black),leaf:je(ci.leaf),light:je("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:je("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},fr={box:new zi(1,1,1),sphere:new pl(1,12,8),ico:new so(1,1),cyl:new no(1,1,1,16),cone:new As(1,1,8)};function kt(n,e,t,i,s=dt){const r=new _n(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Be=(n,e,t,i=dt)=>kt(fr.box,t,n,e,i),it=(n,e,t,i=dt)=>kt(fr.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),pt=(n,e,t,i,s=dt)=>kt(fr.cyl,i,n,[e,t,e],s);function oo(n,e,t,i=dt,s=.08){return kt(new Lu(...e,1,s),t,n,null,i)}function ut(n=[0,0,0],e=dt){const t=new Zi;return t.position.set(...n),e.add(t),t}function ls(n,e,t,i=dt){const s=new yu(n.map(r=>new G(...r)));return kt(new gl(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function gt(n,e,t,i,s=dt){const r=new G(...n),o=new G(...e),a=o.clone().sub(r),c=pt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new G(0,1,0),a.normalize()),c}function yt(n,e,t,i,s=dt,r=[Math.PI/2,0,0]){const o=kt(new ml(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function Lt(n,e,t,i,s=dt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new _u(o);c.colorSpace=cn;const l=kt(new Cs(t,i),new to({map:c,side:Dn}),e,null,s);return l.castShadow=!1,l}let hc=179;function Ct(){return hc=hc*1664525+1013904223>>>0,hc/4294967296}const Xa=document.createElement("canvas");Xa.width=Xa.height=256;const Ya=Xa.getContext("2d");Ya.fillStyle="#b4bcaa";Ya.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Ya.fillStyle=`rgba(${Ct()>.5?"60,82,64":"235,229,201"},${Ct()*.08})`,Ya.fillRect(Ct()*256,Ct()*256,1+Ct()*3,1+Ct()*3);const Kr=new _u(Xa);Kr.wrapS=Kr.wrapT=Vr;Kr.repeat.set(5,5);Kr.colorSpace=cn;const Ey=je("#c2c6b1",{map:Kr,roughness:.97});function Du(n,e,t,i,s=dt){const r=new io;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new hr(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),kt(o,i,null,null,s)}const Nu=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Du(Nu,0,.82,ge.concrete);Du(Nu,.06,.14,Ey);Du(Nu.map(([n,e])=>[n*.97,e*.97]),-.8,.6,je("#47665e"));for(let n=0;n<28;n++){const e=-5.4+Ct()*10.9,t=Ct()>.5?5.15:-5.2,i=kt(fr.ico,je(n%3?"#557469":"#668477"),[e,-1.15-Ct()*.5,t],[.25+Ct()*.8,.2+Ct()*.55,.35+Ct()*.3]);i.rotation.y=Ct()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Be([e,-.37,5.61],[.48,.19,.025],n%2?ge.copper:ge.dark),n%2===0&&ls([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,ge.metal)}Lt("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,dt,{size:32});const Ut=ut([-3.2,.08,-2.5]),pn=ut([0,0,0],Ut);Be([0,.08,0],[4.5,.15,3.6],ge.dark,Ut);Be([0,1.2,-1.68],[4.5,2.4,.18],ge.cream,Ut);Be([-2.15,1,0],[.18,2,3.6],ge.cream,Ut);for(let n=0;n<5;n++){Be([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],ge.concrete,Ut),Be([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],ge.metal,Ut);for(let e=0;e<3;e++)Be([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],ge.copper,Ut)}Be([0,2.47,-.2],[4.8,.14,3.7],ge.rust,pn);for(let n=0;n<23;n++){const e=Be([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],je("#d09062"),pn);e.rotation.x=-.015}Be([0,2.35,1.62],[4.8,.14,.18],ge.dark,Ut);gt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,ge.copper,Ut);gt([2.3,.12,1.62],[2.3,2.4,1.62],.055,ge.copper,Ut);Lt("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Ut,{size:37});Be([.1,.85,-.84],[3.8,.13,.87],ge.rust,Ut);for(const n of[-1.5,1.65])Be([n,.44,-.84],[.12,.85,.65],ge.metal,Ut);for(let n=0;n<3;n++)Be([-1.15+n*.95,.51,-.85],[.82,.47,.75],ge.concrete,Ut),Be([-1.15+n*.95,.5,-.44],[.18,.04,.03],ge.copper,Ut);for(let n=0;n<6;n++)Be([-1.6+n*.48,2.07,-1.48],[.28,.16+Ct()*.16,.17],je(["#9fba95","#cb9b70","#667f71"][n%3]),Ut);pt([0,.5,.7],.32,.12,ge.rust,Ut);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;gt([e,.06,t],[e,.5,t],.04,ge.metal,Ut)}for(let n=0;n<4;n++)yt([-1.5,.06,1],.3-n*.045,.025,ge.black,Ut);pt([-1.5,3,-.9],.16,.9,ge.metal,pn);pt([-1.5,3.47,-.9],.24,.08,ge.rust,pn);Be([1.4,2.9,-.4],[.8,.5,.6],ge.concrete,pn);for(let n=0;n<5;n++)Be([1.1+n*.15,2.94,-.085],[.035,.32,.03],ge.dark,pn);const Uu=new vl("#ffca86",5,5,2);Uu.position.set(-3,1.7,-1.1);dt.add(Uu);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=oo([n,.1,e],[.74,.05,.74],je(Ct()>.3?"#b3baa6":"#a5b5a4"),dt,.018);t.rotation.y=(Ct()-.5)*.035}for(let n=0;n<95;n++){let e=-6+Ct()*12,t=-5.1+Ct()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=kt(fr.cone,ge.leaf,[e,.1,t],[.022,.12+Ct()*.12,.022]);i.rotation.z=(Ct()-.5)*.7}const qc=new Gn({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:Dn});Be([3.7,.12,3.6],[4.9,.24,2.7],ge.dark);kt(new Cs(4.5,2.4),qc,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Be([3.7,.29,n],[5,.38,.16],ge.cream);for(const n of[1.18,6.2])Be([n,.29,3.6],[.16,.38,2.85],ge.cream);for(let n=0;n<13;n++)Be([1.85,.5,2.15+n*.235],[1.08,.09,.22],je(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])pt([e,.88,n],.045,.8,ge.copper);for(const n of[1.31,2.4])ls([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,ge.cream);const Ou=[];for(let n=0;n<6;n++){let e=Be([4+n*.095,-1.25,5.56],[.055,2.4,.03],je("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Ou.push(e)}for(let n=0;n<4;n++)Be([3.96+n*.17,.31,5.31],[.055,.08,.6],ge.dark);const $t=ut([3.7,.1,-2.6]);oo([0,.14,0],[3.7,.27,3.5],ge.cream,$t,.09);for(const n of[-1.55,1.55])Be([n,1.76,0],[.17,3.25,.2],ge.metal,$t),Be([n,.38,0],[.45,.2,.6],ge.copper,$t),gt([n,.36,-1.2],[n,2.9,0],.045,ge.copper,$t),gt([n,.36,1.2],[n,2.9,0],.045,ge.copper,$t);Be([0,3.38,0],[3.5,.18,.26],ge.copper,$t);const wy=yt([0,2.7,-.5],1.83,.035,ge.copper,$t,[0,0,0]);wy.scale.y=.85;const ao=[];for(let n=0;n<5;n++){const e=ut([-1.18+n*.59,3.24,0],$t),t=1.8+n*.12;gt([0,0,-.08],[0,-t,0],.015,ge.dark,e),gt([0,0,.08],[0,-t,0],.015,ge.dark,e),it([0,-t,0],.205,ge.copper,e),yt([0,-t,0],.211,.012,ge.light,e,[0,0,0]),ao.push({group:e,len:t,phase:n})}Be([0,.6,1.3],[1.45,.8,.4],ge.metal,$t);Lt("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,$t,{size:40});const Ty=pt([-.43,.97,1.3],.19,.07,ge.cream,$t);Ty.rotation.x=Math.PI/2;const Fu=Be([-.43,.99,1.342],[.015,.22,.008],ge.rust,$t);Fu.rotation.z=-.7;const ip=it([.53,.93,1.52],.09,ge.light,$t),Ml=ut([.15,.4,1.59],$t);yt([0,0,0],.19,.023,ge.rust,Ml,[0,0,0]);for(let n=0;n<3;n++)gt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,ge.rust,Ml);ls([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,ge.copper);const sp=[];function zu(n,e,t=1.5){pt([n,t/2,e],.038,t,ge.metal),Be([n,t,e],[.27,.11,.27],ge.dark),Be([n,t-.18,e],[.17,.25,.17],ge.light),Be([n,t-.34,e],[.25,.08,.25],ge.copper);const i=new vl("#ffbe70",1.8,3);i.position.set(n,t-.16,e),sp.push(i)}zu(-5.9,3.9,1.3);zu(.3,-4.8,1.7);zu(5.8,1.25,1.35);const un=ut([-3.6,.08,3.55]),Xc=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;oo([0,.14,e],[3.6,.3,1.14],ge.rust,un,.06),Be([0,.305,e],[3.36,.04,.92],je(ci.soil),un);for(let t=0;t<4;t++){const i=ut([-1.26+t*.84,.33,e],un);pt([0,.14,0],.026,.28,ge.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=it([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],je(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){it([0,.17,0],[.25,.18,.25],je("#b6c58a"),i);for(let s=0;s<6;s++){const r=it([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],ge.leaf,i);r.rotation.y=s}Xc.push(i)}else{const s=it([.05,.22,0],[.1,.21,.12],je(ci.purple,{roughness:.35}),i);s.rotation.z=-.25,it([.05,.41,0],[.075,.025,.07],ge.leaf,i),Xc.push(i)}}}const rp=ut([-1.72,.1,.8],un);for(let n=0;n<2;n++)Be([n*3.45,.6,0],[.04,1.3,.04],ge.copper,rp);gt([0,1.25,0],[3.45,1.25,0],.022,ge.copper,rp);Lt("КОБАЧКИ",[-.45,.68,1.64],1,.26,un,{bg:"#c2c7a3",fg:"#445e45",size:42});pt([1.9,.23,.7],.18,.34,je("#6b9389"),un);gt([2.04,.25,.7],[2.4,.46,.7],.045,je("#6b9389"),un);yt([1.8,.48,.7],.16,.02,ge.copper,un,[0,0,0]);Be([-1.6,.2,1.47],[.65,.4,.45],ge.rust,un);for(let n=0;n<3;n++)Be([-1.6,.12+n*.11,1.71],[.7,.05,.025],ge.copper,un);const Mn=ut([-3.8,.08,.35]);pt([0,.73,0],.58,.1,ge.rust,Mn);pt([0,.35,0],.045,.7,ge.metal,Mn);for(let n=0;n<3;n++)gt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,ge.metal,Mn);const lo=ut([.1,.81,0],Mn);it([0,.2,0],[.23,.22,.23],ge.cream,lo);pt([0,.37,0],.14,.06,ge.copper,lo);it([0,.42,0],.045,ge.dark,lo);gt([.15,.18,0],[.33,.32,0],.07,ge.cream,lo);yt([-.15,.25,0],.18,.035,ge.dark,lo,[0,0,0]);for(const n of[-.35,.38])pt([n,.84,.24],.082,.15,ge.cream,Mn),yt([n,.92,.24],.084,.012,ge.copper,Mn),pt([n,.921,.24],.063,.006,je("#67513b"),Mn),yt([n+.09,.86,.24],.045,.011,ge.cream,Mn,[0,0,0]);const Sl=[];for(let n=0;n<9;n++){const e=it([0,0,0],.07,je("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),Mn);e.castShadow=!1,Sl.push(e)}const jn=ut([-5.65,.09,1.1]);Be([0,.3,0],[.7,.6,.7],ge.concrete,jn);oo([0,.8,0],[.68,.45,.35],ge.dark,jn,.05);for(let n=0;n<6;n++)Be([-.2+n*.05,.8,.18],[.022,.27,.018],ge.copper,jn);Be([.18,.85,.184],[.16,.075,.02],ge.light,jn);it([.18,.72,.19],.05,ge.cream,jn);gt([.18,1,0],[.48,1.6,0],.012,ge.copper,jn);const op=ut([-.5,.1,-4.6]);pt([0,1.75,0],.055,3.5,ge.metal,op);it([0,3.55,0],.09,ge.copper,op);ls([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,ge.dark);for(let n=0;n<8;n++){let e=n/8;const t=kt(new As(.13,.3,3),je(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const bl=ut([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Be([0,0,0],[.55,.09,.025],ge.rust,bl);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}it([0,0,.05],.08,ge.copper,bl);const rn=ut([7.25,-.03,1.5]);Be([0,-.12,0],[2.25,.3,2.5],ge.metal,rn);for(let n=0;n<10;n++)Be([-.99+n*.22,.08,0],[.2,.08,2.6],ge.rust,rn);Be([-.95,.2,-.95],[.35,.15,.35],ge.dark,rn);pt([.87,.34,.75],.075,.5,ge.copper,rn);pt([.87,.59,.75],.13,.05,ge.cream,rn);gt([.87,.1,-.7],[.87,2.3,-.7],.035,ge.copper,rn);ls([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,ge.copper,rn);Be([.17,2.09,-.7],[.25,.4,.25],je("#ffd591"),rn);Be([.17,2.32,-.7],[.34,.08,.34],ge.dark,rn);for(let n=0;n<4;n++)yt([.87,.15,.75],.24-n*.025,.024,je("#b8ad86"),rn);Be([6.7,.07,1.5],[1.4,.13,.8],ge.rust);Lt("НИКУДА",[.05,.28,1.36],1.3,.29,rn,{bg:"#c2c7a3",fg:"#445e45",size:45});const ku=[];function El(n,e,t=1){const i=ut(e,n),s=new io;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),kt(new hr(s,{depth:.19,bevelEnabled:!1}),je("#dfc99a"),[0,.15,-.1],null,i);const r=kt(new As(.23,.36,3),ge.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=El(dt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);ku.push(e)}const ei=zx({THREE:Wt,root:dt,dock:rn,state:we,M:ge,mat:je,group:ut,mesh:kt,box:Be,sphere:it,cyl:pt,torus:yt,rod:gt,sign:Lt,paperBoat:El,batchStatic:St,persist:Wc,say:Ln,refresh:Ot,chime:An,reduced:tp}),Ke=ut([-.15,1.9,.85]);Ke.scale.setScalar(1.18);const Bu=je("#233a39",{metalness:.42,roughness:.32});it([0,.1,0],[.62,.8,.55],Bu,Ke);it([0,-.36,.1],[.44,.43,.43],Bu,Ke);it([-.61,.03,.03],[.1,.2,.12],ge.copper,Ke);it([.61,.03,.03],[.1,.2,.12],ge.copper,Ke);for(const n of[-.23,.23]){it([n,.2,.485],[.17,.13,.057],ge.black,Ke),yt([n,.2,.541],.078,.02,ge.copper,Ke,[0,0,0]),it([n,.2,.56],.041,ge.light,Ke);const e=Be([n,.38,.48],[.24,.045,.06],ge.cream,Ke);e.rotation.z=n>0?-.13:.13}it([0,.04,.51],[.09,.17,.11],Bu,Ke);it([0,-.2,.44],[.31,.16,.11],ge.black,Ke);for(let n=0;n<7;n++){const e=(n-3)*.073,t=oo([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],ge.cream,Ke,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=it([t,i,-.04],[.18,.18,.48],ge.cream,Ke);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;ls([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,je("#f2edda"),Ke)}for(let n=0;n<3;n++)it([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],ge.cream,Ke);const Gu=yt([0,1.05,0],.77,.019,ge.copper,Ke);Gu.rotation.z=.14;const Ay=new vl("#ffbb62",.9,3);Ay.position.set(0,.2,.9);const Qo=yt([-.15,.26,.85],.7,.018,ge.copper),Qr=kt(new hl(.64,32),new to({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Qr.rotation.x=-Math.PI/2;Qr.castShadow=!1;const Ti=new G(-.15,1.9,.85),Bn=ut([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Be([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?ge.cream:ge.concrete,Bn);t.rotation.x=Math.PI/2-e,n%3===0&&gt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,ge.copper,Bn)}for(const n of[-.45,.45])yt([n,0,0],2.07,.025,ge.copper,Bn,[0,Math.PI/2,0]);for(const n of[-.34,.34])yt([n,0,0],1.7,.075,ge.concrete,Bn,[0,Math.PI/2,0]);gt([0,-2.15,-1.2],[0,-1.58,-.8],.07,ge.metal,Bn);gt([0,-2.15,1.2],[0,-1.58,.8],.07,ge.metal,Bn);Lt("ОБРАТНО",[.49,-.55,.2],1.15,.3,Bn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+Ct()*20,t=-8+Ct()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||kt(fr.ico,je("#47675f"),[e,-1.3-Ct()*2,t],[.22+Ct()*.55,.19+Ct()*.4,.27+Ct()*.4])}const ap=new Ht,lp=[];for(let n=0;n<75;n++)lp.push((Ct()-.5)*25,Ct()*9-2,(Ct()-.5)*22);ap.setAttribute("position",new Mt(lp,3));const cp=new Sf(ap,new mu({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));Kt.add(cp);function St(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new xt().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=Fx(o,!1);a&&kt(a,r,null,null,n),o.forEach(c=>c.dispose())}}St(dt,[Ke,un,$t,Mn,jn,rn,Ut,Bn,bl,...ku,...Sl,...Ou,Qo,Qr,ei.travel]);St(Ut,[pn]);St(pn,[]);St(Bn,[]);St(Ke,[Gu]);Ke.traverse(n=>{n.isMesh&&(n.castShadow=!1)});St(Mn,[...Sl]);St(jn,[]);St(rn,[ei.gallery,ei.beacon]);St($t,[...ao.map(n=>n.group),Ml,Fu,ip]);ao.forEach(n=>St(n.group,[]));const jr=ut([0,.33,0],un);Xc.forEach(n=>{jr.add(n),n.position.y-=.33});St(jr,[]);St(un,[jr]);const Sn=qx({THREE:Wt,root:dt,scene:Kt,head:Ke,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,paperBoat:El,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},chime:An}),Ri=My({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,mesh:kt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Ki=lm({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Pi=om({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Li=Zp({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},localPlay:()=>ot.localPlay()}),Ii=Wp({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},localPlay:()=>ot.localPlay()}),Di=em({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},localPlay:()=>ot.localPlay()}),gi=nm({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Ni=sm({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),_i=rm({THREE:Wt,root:dt,M:ge,mat:je,group:ut,box:Be,sphere:it,rod:gt,torus:yt,sign:Lt,batchStatic:St,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),Qi=am({THREE:Wt,workshop:Ut,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,changed:()=>{Ot(),st.shadowMap.needsUpdate=!0},watching:()=>ot==null?void 0:ot.watching(),localPlay:()=>ot.localPlay()}),wl=Xx({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,mesh:kt,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,chime:An}),co=xy({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,mesh:kt,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,paperBoat:El,batchStatic:St,chime:An}),Un=vy({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,mesh:kt,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}}),up=Yx({head:Ke,group:ut,sphere:it,box:Be,torus:yt,M:ge,mat:je}),di=fy({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,mesh:kt,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}}),fi=kp({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,tube:ls,torus:yt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}}),In=Qx({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,tube:ls,torus:yt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}}),Zn=ny({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}}),ji=ry({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}}),pi=cy({THREE:Wt,scene:Kt,root:dt,head:Ke,M:ge,mat:je,group:ut,box:Be,sphere:it,cyl:pt,rod:gt,torus:yt,sign:Lt,batchStatic:St,chime:An,changed:()=>{ki(),st.shadowMap.needsUpdate=!0}});let nn=null,He=1;const Vn={seams:{n:"19",label:"шовная",title:"голова по швам",description:"Три сцепленных кольца держат лицо.",action:"испытать инструкцией",point:new G(-20.4,.7,-45.4),position:new G(-24,.6,-48),run:()=>Ii.run()},still:{n:"18",label:"облачная перегонная",title:"16 часов на облако",description:"Четыре карты переливают одно облако.",action:"перелить облако",point:new G(28.4,.7,-19.8),position:new G(24,.5,-24),run:()=>Li.run()},fork:{n:"17",label:"вилка-резерв",title:"чтобы ничего не потерять",description:"Лампочки катятся по развилкам. После прохода развилка переключается сама.",action:"отпустить лампочку",point:new G(-26.4,.7,-34.3),position:new G(-23,.1,-32),run:()=>Di.run()},garage:{n:"16",label:"прыгающий гараж",title:"допуска нет",description:"Машина остаётся дома. Прыгает гараж.",action:"прыгнуть гаражом",point:new G(-32,.6,-20.6),position:new G(-24,.6,-24),run:()=>gi.run()},quotes:{n:"15",label:"кавычковый питомник",title:"опять ёлочки пролезли",description:"Две кавычки скользят по льду и становятся елями.",action:"выпустить пару",point:new G(24,.9,29.7),position:new G(24,.6,24),run:()=>Ni.run()},dash:{n:"14",label:"длинное тире",title:"почта без ног",description:"Мост из тире для почтовой улитки.",action:"отправить улитку",point:new G(-6.9,1.9,-20.1),position:new G(0,.6,-24),run:()=>_i.run()},drydock:{n:"13",label:"песочный порт",title:"корабль в песочнице",description:"Грузовой корабль застрял в сухом доке.",action:"спустить корабль",point:new G(-17.5,1.3,3.4),position:new G(-24,.6,0),run:()=>Pi.run()},bench:{n:"12",label:"верстак",title:"ядро в ведро",description:"Механический монитор собирается из ядра и ремня.",action:"крутить рукоятку",point:new G(-1.4,1.5,-1.1),position:new G(-3.2,1.25,-2.2),run:()=>Qi.run()},amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new G(4.7,.8,25.8),position:new G(0,.4,24),run:()=>Ki.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new G(28.4,2.2,2.5),position:new G(24,.4,0),run:()=>Ri.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new G(-.1,2.15,4.3),position:new G(-.1,1,4.3),run:()=>Sn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new G(-6,4.55,-3.25),position:new G(-6,2.2,-3.25),run:()=>{we.loop>0||(we.loop=12,dp.copy(Ke.position),Ln("ноги не понадобились"),Ot())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь старый монитор, рабочий верстак и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new G(-3.2,3.15,-2.5),position:new G(-3.2,1.1,-2.5),run:()=>{we.roof=cr()?0:1,Ln(cr()?"заходи":"прикрыл"),Ot()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy(Ke.position),n.y+=1.35},position:new G(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Ln(n[Cy++%n.length]),Ti.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new G(3.7,3.85,-2.6),position:new G(3.7,1,-2.6),run:()=>{we.running=!we.running,Wc(),Ln(we.running?"ну пошло":"можно и полежать"),Ot()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new G(-3.7,1.65,.35),position:new G(-3.8,1,.35),run:()=>{we.brew>0||(we.brew=8,we.teaCount++,Ti.set(-2.65,1.7,.65),Ln("щас, чайник поставлю"),Ot())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new G(-3.4,1,3.8),position:new G(-3.6,1,3.55),run:()=>{we.harvest++,er=.15,Wc(),Ti.set(-1.6,1.6,2.3),Ln(we.harvest===1?"о, урожай":"кабачки опять победили"),Ot()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new G(-5.65,1.75,1.1),position:new G(-5.65,1,1.1),run:()=>{we.radio=(we.radio+1)%3,Vu(),Ln(["тишина. нормально.","дождь поймал","провода поют"][we.radio]),Ot()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new G(7.4,2.75,1.1),position:new G(7.25,.9,1.5),run:()=>{ei.launchOrCollect(),we.dockPending===!1&&we.boat===0&&Ti.set(5.85,1.7,1.05)}}};let Cy=0,er=1,hp=0,bs=0;const dp=new G;let fp=()=>{ss("engine"),Vn.engine.run()};const Tl={};for(const[n,e]of Object.entries(Vn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>ss(n),Se("#hotspots").append(t),Tl[n]=t}const pp=Se("#hotspots"),dc=Se("#speech"),vs={width:innerWidth,height:innerHeight},Ry=Sy({entries:Vn,elements:Tl,layer:pp,camera:Oe});let fc=!1,Ed=NaN,wd=NaN;const wr=new G;function ss(n){we.selected=n,Se("#inspector").classList.remove("collapsed");const e=Vn[n];Se("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,Se("#object-title").textContent=e.title,Se("#object-description").textContent=e.description,fp=e.run,Se("#focus-object").hidden=!1,Se("#focus-object").textContent=Gt===n?"весь двор ⌂":"осмотреть ближе ⊕",Ot();for(const[t,i]of Object.entries(Tl))i.classList.toggle("selected",t===n)}function Ot(){const n=we.selected,e=Vn[n];if(Se("#status").textContent=we.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=we.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=cr()?"закрыть крышу":e.action),n==="engine"&&(t=we.running?"остановить и отдохнуть":"запустить маятники",i=we.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=we.brew>0,t=s?"чай заваривается…":e.action,i=we.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&we.harvest&&(i=`Уже собрано: ${we.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][we.radio]}. ${we.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=ei.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=Sn.card();t=r.action,i=r.description}if(n==="cellar"){const r=Ri.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Ki.card();t=r.action,i=r.description}if(n==="bench"){const r=Qi.card();t=r.action,i=r.description}if(n==="drydock"){const r=Pi.card();t=r.action,i=r.description}if(n==="dash"){const r=_i.card();t=r.action,i=r.description}if(n==="quotes"){const r=Ni.card();t=r.action,i=r.description,s=r.disabled}if(n==="garage"){const r=gi.card();t=r.action,i=r.description,s=r.disabled}if(n==="fork"){const r=Di.card();t=r.action,i=r.description,s=r.disabled}if(n==="seams"){const r=Ii.card();t=r.action,i=r.description,s=r.disabled}if(n==="still"){const r=Li.card();t=r.action,i=r.description,s=r.disabled}Ii.controls.hidden=n!=="seams",Li.controls.hidden=n!=="still",Di.controls.hidden=n!=="fork",gi.controls.hidden=n!=="garage",Ni.controls.hidden=n!=="quotes",_i.controls.hidden=n!=="dash",Pi.controls.hidden=n!=="drydock",Qi.controls.hidden=n!=="bench",Ki.controls.hidden=n!=="amnesty",Ri.controls.hidden=n!=="cellar",Se("#enter-bench")&&(Se("#enter-bench").hidden=n!=="workshop"),Se("#enter-dream08").hidden=n!=="radio",Se("#enter-dream07").hidden=n!=="garage",Se("#enter-dream06").hidden=n!=="radio",Se("#enter-dream05").hidden=n!=="stair",Se("#enter-dream10").hidden=n!=="tea",Se("#enter-dream09").hidden=n!=="dock",Se("#enter-dream03").hidden=n!=="dock",Se("#enter-dream04").hidden=n!=="workshop",Se("#greenhouse-controls").hidden=n!=="greenhouse",Se("#thermal-moves").hidden=Sn.inspect().mode!=="playing",Se("#thermal-readout").textContent=`тепло ${Sn.inspect().temp} · такты ${Sn.inspect().turn}/6`,Se("#object-description").textContent=i,Se("#object-action").innerHTML=t+" <span>↗</span>",Se("#object-action").disabled=s}Se("#object-action").onclick=()=>{if(["cellar","amnesty","bench","drydock","dash","quotes","garage"].includes(we.selected)&&ot.watching()){ot.localPlay();return}ot.localPlay(),fp(),bs=performance.now()+2200};Se("#close-card").onclick=()=>Se("#inspector").classList.add("collapsed");function Ln(n){Se("#speech").textContent=n,hp=performance.now()+4e3,Se("#speech").classList.add("visible")}Se("#markers").onclick=()=>{we.markers=!we.markers,Se("#markers").setAttribute("aria-pressed",we.markers),pp.hidden=!we.markers||!!nn||Oe.zoom<.4};let Gt=null;const mn={angle:Math.PI/4,targetAngle:Math.PI/4};function mp(){vs.width=innerWidth,vs.height=innerHeight;const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.left=-e*n,Oe.right=e*n,Oe.top=e-(en()?2.8:0),Oe.bottom=-e-(en()?2.8:0),Oe.updateProjectionMatrix(),st.setSize(innerWidth,innerHeight,!1),st.setPixelRatio(Math.min(devicePixelRatio,en()?1.5:2))}function pr(){if(ot==null||ot.unfollow(),nn){uo();return}Gt=null,document.body.classList.remove("close-look"),Se("#focus-object").textContent="осмотреть ближе ⊕",Qe.enableDamping=!1,Qe.update(),Qe.enableDamping=!0,Qe.maxZoom=2.5,Oe.zoom=1,Qe.target.copy(Iu),mn.targetAngle=Math.PI/4,Oe.updateProjectionMatrix()}Se("#focus-object").onclick=()=>{if(we.selected){if(Gt===we.selected){pr();return}Gt=we.selected,document.body.classList.add("close-look"),Se("#focus-object").textContent="весь двор ⌂",Qe.enableDamping=!1,Qe.update(),Qe.enableDamping=!0,Qe.target.copy(Vn[we.selected].position),en()&&(Qe.target.y+=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams"].includes(Gt)?-.7:1.6),Oe.zoom=["cellar","amnesty","drydock","dash","quotes","garage","fork","still","seams"].includes(Gt)?en()?1.8:1.6:en()?2.5:2.1,Gt==="bench"?(Qe.maxZoom=4.5,Oe.zoom=en()?3.8:3.4,Qe.target.y+=en()?-.15:0,Qe.target.x+=.3,Qe.target.z-=.2):Qe.maxZoom=2.5,Oe.updateProjectionMatrix()}};Se("#home").onclick=pr;Se("#zoom-in").onclick=()=>{Oe.zoom=Math.min(Qe.maxZoom,Oe.zoom*1.2),Oe.updateProjectionMatrix()};Se("#zoom-out").onclick=()=>{Oe.zoom=Math.max(Qe.minZoom,Oe.zoom/1.2),Oe.updateProjectionMatrix()};Se("#rotate").onclick=()=>mn.targetAngle+=Math.PI/2;addEventListener("resize",mp);mp();function gp(n,e,t=!1){nn&&uo(),pr(),Qe.target.set(n,1,e),Oe.zoom=t?1:.65,Oe.updateProjectionMatrix(),Se("#inspector").classList.add("collapsed")}function Py(){gp(0,0);const n=innerWidth/innerHeight,e=en()?19.6:9.6;Oe.zoom=Math.min(e*n/(tr.half*1.57),e/(tr.half*1.3)),Oe.updateProjectionMatrix()}const tr=Wx({root:dt,camera:Oe,controls:Qe,mobile:en,go:gp,overview:Py,home:pr,locationTarget:()=>["dash","quotes","garage","fork","still","seams"].includes(Gt)&&we.selected===Gt?Vn[Gt].position:null}),es=document.createElement("select");es.id="world-places";es.setAttribute("aria-label","Открыть место");es.append(new Option("места",""));for(const[n,e]of Object.entries(Vn))es.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(es,document.querySelector("#territory-location"));es.onchange=()=>{const n=es.value;Vn[n]&&(pr(),Qe.target.copy(Vn[n].position),ss(n),es.value="")};Oe.zoom=.72;Oe.updateProjectionMatrix();const Td=new Bf,Ad=new Te;let ms=null;st.domElement.addEventListener("pointerdown",n=>{ms={x:n.clientX,y:n.clientY,time:performance.now()}});st.domElement.addEventListener("pointerup",n=>{if(!ms||Math.hypot(n.clientX-ms.x,n.clientY-ms.y)>7||performance.now()-ms.time>550){ms=null;return}if(ms=null,Ad.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Td.setFromCamera(Ad,Oe),nn)return;const e=Td.intersectObjects([Ii.house,Li.house,Di.house,gi.house,Ni.house,_i.house,Pi.house,Qi.house,Ki.house,Ri.house,Sn.house,Ke,$t,un,Mn,jn,rn,Ut,Bn,ei.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Ii.house,Li.house,Di.house,gi.house,Ni.house,_i.house,Pi.house,Qi.house,Ki.house,Ri.house,Sn.house,Ke,$t,un,Mn,jn,rn,Ut,Bn,ei.travel].includes(t);)t=t.parent;const i=new Map([[Ii.house,"seams"],[Li.house,"still"],[Di.house,"fork"],[gi.house,"garage"],[Ni.house,"quotes"],[_i.house,"dash"],[Pi.house,"drydock"],[Qi.house,"bench"],[Ki.house,"amnesty"],[Ri.house,"cellar"],[Sn.house,"greenhouse"],[Ke,"head"],[$t,"engine"],[un,"garden"],[Mn,"tea"],[jn,"radio"],[rn,"dock"],[Ut,"workshop"],[Bn,"stair"],[ei.travel,"dock"]]).get(t);i&&ss(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Vn)){const o=r.position.clone().project(Oe);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&ss(t)}});let Tn=null;function Ly(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Vu(){if(!Tn)return;const n=Tn.ctx.currentTime;Tn.filter.frequency.setTargetAtTime([160,1100,260][we.radio],n,.4),Tn.toneGain.gain.setTargetAtTime([.05,.025,.3][we.radio],n,.4)}Se("#sound").onclick=async()=>{try{Tn||(Tn=Ly()),await Tn.ctx.resume(),we.sound=!we.sound,Tn.gain.gain.setTargetAtTime(we.sound?.08:0,Tn.ctx.currentTime,.3),Se("#sound").textContent=we.sound?"звук включён":"звук выключен",Se("#sound").setAttribute("aria-pressed",we.sound),Vu(),Ot()}catch{Ln("со звуком не сложилось")}};function An(n=330){if(!Tn||!we.sound)return;const e=Tn.ctx.currentTime,t=Tn.ctx.createOscillator(),i=Tn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(Tn.gain),t.start(e),t.stop(e+1.1)}Se("#about").onclick=()=>Se("#about-dialog").showModal();Se("#close-about").onclick=Se("#back-to-yard").onclick=()=>Se("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&nn){uo();return}n.key==="Escape"&&Se("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Se("#zoom-in").click(),n.key==="-"&&Se("#zoom-out").click(),n.key.toLowerCase()==="r"&&Se("#rotate").click(),n.key.toLowerCase()==="h"&&pr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{ot.localPlay(),Sn.step(n.dataset.thermal),bs=performance.now()+2200};const Iy={10:{title:"час дождя без грома",lines:[],verb:"согнуть"},9:{title:"уши для берега",lines:[],verb:"слушать"},8:{title:"десять факелов на диске",lines:[],verb:"настроить"},7:{title:"пустой зал",lines:[],verb:"сложить"},1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},6:{title:"соседям тоже отопление",lines:[],verb:"пустить тепло"},5:{title:"прибор измеряет себя",lines:[],verb:"измерить"},4:{title:"письмо выше крыши",lines:[],verb:"отправить письмо"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Hu(){return He===10?fi:He===1?Sn:He===2?wl:He===3?co:He===4?Un:He===5?di:He===6?pi:He===7?ji:He===8?Zn:In}function ki(){const n=He===1?Sn.inspect().dreamStep:Hu().inspect().step,e=Iy[He];if(Se("#exit-ear-dream").hidden=![9,10].includes(He),Se("#dream-rain").hidden=He!==10,Se("#dream-ears").hidden=He!==9,Se("#dream-torches").hidden=He!==8,Se("#dream-cloud").hidden=He!==6,Se("#dream-force").hidden=He!==3,Se("#dream-roofs").hidden=He!==4,Se("#dream-meter").hidden=He!==5,Se("#dream-panel .object-kicker").textContent=`СОН ${String(He).padStart(2,"0")} / БЕЗНОГИМ`,Se("#dream-panel h2").textContent=e.title,Se("#dream-text").textContent=He===10?fi.text():He===9?In.text():He===8?Zn.text():He===7?ji.text():He===6?pi.text():He===5?di.text():He===4?Un.text():e.lines[n],Se("#dream-breathe").textContent=He===10?fi.button():He===9?In.button():He===8?Zn.button():He===7?ji.button():He===6?pi.button():He===5?di.button():He===4?Un.inspect().phase==="delivered"?"увидеть сон снова":"отправить письмо ↑":n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`,Se("#dream-breathe").disabled=He===10&&fi.busy()||He===9&&(In.busy()||!In.ready()&&In.inspect().phase==="sorting")||He===8&&(Zn.busy()||!Zn.canRelease())||He===7&&ji.busy()||He===6&&["heating","raining"].includes(pi.inspect().phase)||He===4&&Un.inspect().phase==="flying"||He===5&&["measuring","unfolding","climbing"].includes(di.inspect().phase),He===10){const t=fi.inspect();for(const i of document.querySelectorAll("[data-rain-fold]")){const s=Number(i.dataset.rainFold);i.textContent=s+1+" · "+(t.folds[s]?"желоб":"лист"),i.setAttribute("aria-pressed",t.folds[s]),i.disabled=t.phase!=="folding"}}if(He===9){const t=In.inspect();for(const i of document.querySelectorAll("[data-ear-stone]")){const s=Number(i.dataset.earStone);i.textContent=[1,2,3,4,5,7][s]+" · "+["полка","левое","правое"][t.places[s]],i.setAttribute("aria-label","камень "+[1,2,3,4,5,7][s]+": "+["на полке","в левом ухе","в правом ухе"][t.places[s]]),i.disabled=t.phase!=="sorting"}}if(He===8){const t=Zn.inspect();for(const i of document.querySelectorAll("[data-torch-turn]")){const s=Number(i.dataset.torchTurn);i.textContent=["птица","вода","ветер"][s]+" · "+t.turns[s]+" ↻",i.setAttribute("aria-pressed",t.aligned[s]),i.disabled=t.phase!=="tuning"}}if(He===6){const t=pi.inspect();for(const i of document.querySelectorAll("[data-cloud-target]"))i.setAttribute("aria-pressed",i.dataset.cloudTarget===t.target),i.disabled=t.phase!=="ready"}if(He===5){const t=di.inspect();for(const i of document.querySelectorAll("[data-meter-target]"))i.setAttribute("aria-pressed",i.dataset.meterTarget===t.target),i.disabled=!["ready","refused"].includes(t.phase)}if(He===4){const t=Un.inspect();for(const i of document.querySelectorAll("[data-roof-turn]")){const s=Number(i.dataset.roofTurn);i.textContent=`${s+1} · ${Un.directions[t.turns[s]]} ↻`,i.disabled=t.phase==="flying"||t.phase==="delivered"}}}function si(n=1){nn||(He=n,nn={target:Qe.target.clone(),zoom:Oe.zoom,angle:mn.targetAngle,focused:Gt,returnId:n===10?"tea":n===9?"dock":n===8?"radio":n===7?"garage":n===1?"greenhouse":n===2?"cellar":n===3?"dock":n===6?"radio":n===5?"stair":"workshop"},Hu().enter(),Qe.enableDamping=!1,Qe.update(),Qe.enableDamping=!0,Qe.target.set(0,en()?n===1?3:2.4:n===1?2:1.5,0),Oe.zoom=n===1?en()?1.65:1.75:en()?1.45:1.55,Oe.updateProjectionMatrix(),mn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),document.body.classList.toggle("roof-dreaming",n===4||n===5||n===6||n===7||n===8||n===9||n===10),$a="",Se("#dream-panel").hidden=!1,ki(),st.shadowMap.needsUpdate=!0)}function uo(){if(!nn)return;const n=nn;nn=null,Hu().exit(),Qe.enableDamping=!1,Qe.update(),Qe.enableDamping=!0,Qe.target.copy(n.target),Oe.zoom=n.zoom,mn.targetAngle=n.angle,Gt=n.focused,Oe.updateProjectionMatrix(),document.body.classList.remove("dreaming","roof-dreaming"),$a="",Se("#dream-panel").hidden=!0,st.shadowMap.needsUpdate=!0,ss(n.returnId)}Se("#enter-dream").onclick=()=>si(1);Se("#exit-dream").onclick=uo;Se("#dream-breathe").onclick=()=>{He===1?Sn.breathe():He===2?wl.pour():He===3?co.toss():He===4?Un.send():He===5?di.act():He===6?pi.act():He===7?ji.act():He===8?Zn.act():He===9?In.act():fi.act(),bs=performance.now()+2200,ki(),st.shadowMap.needsUpdate=!0};const ho=document.createElement("button");ho.id="enter-bench";ho.hidden=!0;ho.textContent="собрать механический монитор ↗";ho.onclick=()=>{ss("bench"),Se("#focus-object").click()};Se("#focus-object").before(ho);const Al=document.createElement("button");Al.id="enter-dream02";Al.textContent="сон 02 / вода спит ↗";Al.onclick=()=>si(2);Ri.controls.append(Al);Se("#exit-ear-dream").onclick=uo;Se("#enter-dream10").onclick=()=>si(10);for(const n of document.querySelectorAll("[data-rain-fold]"))n.onclick=()=>fi.fold(Number(n.dataset.rainFold));Se("#enter-dream09").onclick=()=>si(9);for(const n of document.querySelectorAll("[data-ear-stone]"))n.onclick=()=>In.move(Number(n.dataset.earStone));Se("#enter-dream03").onclick=()=>si(3);Se("#enter-dream04").onclick=()=>si(4);Se("#enter-dream08").onclick=()=>si(8);for(const n of document.querySelectorAll("[data-torch-turn]"))n.onclick=()=>Zn.turn(Number(n.dataset.torchTurn));Se("#enter-dream07").onclick=()=>si(7);Se("#enter-dream06").onclick=()=>si(6);for(const n of document.querySelectorAll("[data-cloud-target]"))n.onclick=()=>pi.choose(n.dataset.cloudTarget);Se("#enter-dream05").onclick=()=>si(5);for(const n of document.querySelectorAll("[data-meter-target]"))n.onclick=()=>di.choose(n.dataset.meterTarget);for(const n of document.querySelectorAll("[data-roof-turn]"))n.onclick=()=>{Un.turn(Number(n.dataset.roofTurn)),bs=performance.now()+1200};for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{co.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};Se("#dream-archive").onclick=()=>Se("#dream-archive-dialog").showModal();Se("#close-dream-archive").onclick=()=>Se("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{Se("#dream-archive-dialog").close(),si(Number(n.dataset.dreamId))};const ot=Bx({head:Ke,headDestination:Ti,state:we,controls:Qe,camera:Oe,refresh:Ot,setAudioTone:Vu,say:Ln,onHarvest:()=>{er=.15}});let pc="";const _p=[];for(const n of[-5.1,-1.6])for(const e of[.98,2.48])for(const t of[-3.9,-2.2])_p.push(new G(n,e,t));const Wu=[];for(const n of[-28,-20])for(const e of[-1.65,3.75])for(const t of[-51.4,-43.6])Wu.push(new G(n,e,t));const qu=[];for(const n of[19.3,28.7])for(const e of[-1.65,3.1])for(const t of[-27.2,-19.5])qu.push(new G(n,e,t));const vp=[];for(const n of[-27.5,-18])for(const e of[-1.7,.8])for(const t of[-35.3,-28.8])vp.push(new G(n,e,t));const xp=[];for(const n of[19.8,28.2])for(const e of[-1.2,1.5])for(const t of[18.8,29.5])xp.push(new G(n,e,t));const yp=[];for(const n of[-7.3,7.3])for(const e of[-1.2,2])for(const t of[-28.3,-19.7])yp.push(new G(n,e,t));const Mp=[];for(const n of[-30.8,-17])for(const e of[-1.15,2.15])for(const t of[-3.9,3.7])Mp.push(new G(n,e,t));function Dy(){var v,P;const n=Gt==="seams"&&we.selected==="seams",e=Gt==="still"&&we.selected==="still",t=Gt==="fork"&&we.selected==="fork",i=Gt==="garage"&&we.selected==="garage",s=Gt==="quotes"&&we.selected==="quotes",r=Gt==="dash"&&we.selected==="dash",o=Gt==="drydock"&&we.selected==="drydock"||r||s||i||t||e||n,a=(Gt==="bench"&&we.selected==="bench"||o)&&!Se("#inspector").classList.contains("collapsed")&&!nn;if(document.body.classList.toggle("seams-look",a&&n),document.body.classList.toggle("still-look",a&&e),document.body.classList.toggle("fork-look",a&&t),document.body.classList.toggle("garage-look",a&&i),document.body.classList.toggle("quotes-look",a&&s),document.body.classList.toggle("dash-look",a&&(r||s||i||t||e||n)),document.body.classList.toggle("bench-look",a&&!o),document.body.classList.toggle("drydock-look",a&&o),!a){pc="";return}if(Math.abs(mn.angle-mn.targetAngle)>.01)return;const c=Se("#inspector").getBoundingClientRect(),l=Se(".territory-nav").getBoundingClientRect(),u=Se(".toolbar").getBoundingClientRect(),g=innerWidth<=900&&innerHeight>innerWidth,h=g?{left:14,right:u.left-10,top:l.bottom+(e||n?6:14),bottom:c.top-(e||n?6:14)}:{left:Math.max(c.right+18,l.right+18),right:u.left-18,top:80,bottom:innerHeight-80};innerWidth<=900&&!g&&(h.left=l.right+12,h.right=innerWidth-16,h.top=u.bottom+10,h.bottom=c.top-10),(r||s||i||t||e||n)&&innerWidth<=900&&!g&&(h.left=12,h.right=c.left-12,h.top=l.bottom+10,h.bottom=Se("footer").getBoundingClientRect().top-12);const p=Se(".resident-history");o&&innerWidth>900&&p&&!p.hidden&&(h.right=Math.min(h.right,p.getBoundingClientRect().left-18));const f=i?gi.inspect():null,_=[];if(f){const A=Math.max(f.gap,f.range,((v=f.flight)==null?void 0:v.range)||0),N=Math.max(f.apex,((P=f.flight)==null?void 0:P.apex)||0);for(const q of[-34,-32+.7*A+1.6])for(const V of[-1.3,Math.max(1.5,.8+.5*N)])for(const k of[-26,-19.8])_.push(new G(q,V,k))}const m=[(f==null?void 0:f.gap)||0,(f==null?void 0:f.range)||0,(f==null?void 0:f.apex)||0,n?19:e?18:t?17:i?16:s?15:r?14:o?13:12,innerWidth,innerHeight,h.left,h.right,h.top,h.bottom,mn.targetAngle].map(A=>Math.round(A*10)/10).join(":");if(m===pc||h.bottom-h.top<35||h.right-h.left<50)return;pc=m;const d=()=>{Oe.updateMatrixWorld();const A=(n?Wu:e?qu:t?vp:i?_:s?xp:r?yp:o?Mp:_p).map(N=>Tt(N.clone()));return{l:Math.min(...A.map(N=>N.x)),r:Math.max(...A.map(N=>N.x)),t:Math.min(...A.map(N=>N.y)),b:Math.max(...A.map(N=>N.y))}};let M=d();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((h.right-h.left)/(M.r-M.l),(h.bottom-h.top)/(M.b-M.t))),Oe.updateProjectionMatrix(),M=d();const C=(h.left+h.right-M.l-M.r)/2,x=(h.top+h.bottom-M.t-M.b)/2,E=new G().setFromMatrixColumn(Oe.matrixWorld,0),S=new G().setFromMatrixColumn(Oe.matrixWorld,1),T=E.multiplyScalar(-C*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(S.multiplyScalar(x*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Qe.target.add(T),Oe.position.add(T),Oe.lookAt(Qe.target),Oe.updateMatrixWorld()}let $a="";const Sp=[];for(const n of[-4.1,4.1])for(const e of[-.4,5.8])for(const t of[-3.4,3.4])Sp.push(new G(n,e,t));const bp=[];for(const n of[-4.5,4.5])for(const e of[-.6,5.3])for(const t of[-3.3,3.7])bp.push(new G(n,e,t));const Ep=[];for(const n of[-3.6,3.6])for(const e of[-.65,4.8])for(const t of[-3.6,3.6])Ep.push(new G(n,e,t));const wp=[];for(const n of[-4.1,4.1])for(const e of[-.65,6.55])for(const t of[-4.1,4.1])wp.push(new G(n,e,t));const Tp=[];for(const n of[-3.85,3.85])for(const e of[-.65,4.85])for(const t of[-3.85,3.85])Tp.push(new G(n,e,t));const Ap=[];for(const n of[-4.35,4.35])for(const e of[-.65,5.65])for(const t of[-4.2,4.2])Ap.push(new G(n,e,t));function Ny(){if(!nn||![4,5,6,7,8,9,10].includes(He))return;const n=Se("#dream-panel").getBoundingClientRect(),e=Se("footer").getBoundingClientRect(),t=Se(".toolbar").getBoundingClientRect(),i=innerWidth<=900&&innerWidth>innerHeight&&innerHeight<=600,s=innerWidth<=900&&!i,r=i?{left:12,right:n.left-12,top:42,bottom:e.top-12}:s?{left:12,right:innerWidth-12,top:45,bottom:n.top-12}:{left:n.right+24,right:t.left-18,top:70,bottom:e.top-24},o=[innerWidth,innerHeight,r.left,r.right,r.top,r.bottom,Math.round(mn.angle*100)].join(":");if(o===$a||r.right-r.left<60||r.bottom-r.top<80)return;$a=o;const a=()=>{Oe.updateMatrixWorld();const f=(He===10?Sp:He===9?bp:He===8?Ep:He===7?wp:He===5?Tp:Ap).map(_=>Tt(_.clone()));return{l:Math.min(...f.map(_=>_.x)),r:Math.max(...f.map(_=>_.x)),t:Math.min(...f.map(_=>_.y)),b:Math.max(...f.map(_=>_.y))}};let c=a();Oe.zoom=Math.min(4.5,Oe.zoom*Math.min((r.right-r.left)/(c.r-c.l),(r.bottom-r.top)/(c.b-c.t))),Oe.updateProjectionMatrix(),c=a();const l=(r.left+r.right-c.l-c.r)/2,u=(r.top+r.bottom-c.t-c.b)/2,g=new G().setFromMatrixColumn(Oe.matrixWorld,0),h=new G().setFromMatrixColumn(Oe.matrixWorld,1),p=g.multiplyScalar(-l*(Oe.right-Oe.left)/Oe.zoom/innerWidth).add(h.multiplyScalar(u*(Oe.top-Oe.bottom)/Oe.zoom/innerHeight));Qe.target.add(p),Oe.position.add(p),Oe.lookAt(Qe.target),Oe.updateMatrixWorld()}let Cd=performance.now(),Wo=0,Rd=0;function Tt(n){return n.project(Oe),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function Uy(){ot.sync();const n=performance.now(),e=(n-Cd)/1e3;Cd=n,Wo+=e,we.energy=xn.damp(we.energy,we.running?1:0,1.6,e);const t=tp?Wo*.2:Wo;mn.angle=xn.damp(mn.angle,mn.targetAngle,5,e);const i=160;Oe.position.set(Qe.target.x+Math.sin(mn.angle)*i,Qe.target.y+i*Math.SQRT1_2,Qe.target.z+Math.cos(mn.angle)*i),Oe.lookAt(Qe.target),Qe.update(),nn||(Qe.target.x=xn.clamp(Qe.target.x,-62,tr.half+2),Qe.target.z=xn.clamp(Qe.target.z,-62,tr.half+2)),tr.update(),Dy(),Ny();for(const s of ao)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*we.energy*.45;if(pn.position.z=xn.damp(pn.position.z,cr()?-2.5:0,2,e),pn.position.y=xn.damp(pn.position.y,cr()?.4:0,2,e),Ml.rotation.z=t*we.energy*.28,Fu.rotation.z=-.7+we.energy*1.35+Math.sin(t*4)*we.energy*.08,ip.material.emissiveIntensity=.45+we.energy*1.5,qc.uniforms.uTime.value=t,qc.uniforms.uEnergy.value=we.energy,bl.rotation.z=t*(.09+we.energy*.23),sp.forEach(s=>s.intensity=.65+we.energy*1.5),Uu.intensity=2+we.energy*4,Ke.position.x=xn.damp(Ke.position.x,Ti.x,1.6,e),Ke.position.z=xn.damp(Ke.position.z,Ti.z,1.6,e),Ke.position.y=xn.damp(Ke.position.y,Ti.y+Math.sin(t*1.4)*.1,2,e),we.loop>0){we.loop=Math.max(0,we.loop-e);const s=12-we.loop;if(s<2){const r=xn.smoothstep(s,0,2);Ke.position.lerpVectors(dp,new G(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;Ke.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),Ke.rotation.x=(s-2)/8*Math.PI*2}else{const r=xn.smoothstep(s,10,12);Ke.position.lerpVectors(new G(-6,.65,-3.25),Ti,r),Ke.rotation.x=(1-r)*Math.PI*2}we.loop||(Ke.rotation.x=0,Ln("ну вот и дома"),Ot())}if(ot.place(),Ke.rotation.y=Math.sin(t*.3)*.12,Gu.rotation.y=t*.13,Qo.position.x=Ke.position.x,Qo.position.z=Ke.position.z,Qo.rotation.z=.04*Math.sin(t),Qr.position.x=Ke.position.x,Qr.position.z=Ke.position.z,er=xn.damp(er,1,.85,e),jr.scale.y=er,jr.rotation.z=Math.sin(t*.9)*.009,we.brew>0&&(we.brew=Math.max(0,we.brew-e),we.brew===0&&(Ln("чай готов. живём."),Ot(),An(440))),Sl.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=we.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),ku.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),up.update(ot.watching()),wl.update(e,t),co.update(e,t),Un.update(e,t),di.update(e,t),pi.update(e,t),ji.update(e,t),Zn.update(e,t),In.update(e,t),fi.update(e,t),Ii.update(e),Li.update(e,t),Di.update(e),gi.update(e),Ni.update(e),_i.update(e),Pi.update(e),Qi.update(e),pn.visible=!(Gt==="bench"&&we.selected==="bench"&&!Se("#inspector").classList.contains("collapsed")&&!nn),Ki.update(e),Ri.update(Wo),Sn.update(e,t),ei.update(e,t),fc!==we.dockPending&&(fc=we.dockPending,Tl.dock.classList.toggle("waiting",fc)),Ou.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+we.energy*.23}),cp.rotation.y=t*.003,we.running&&t-Rd>3.5&&(Rd=t,An([220,277,330,415,440][Math.floor(t)%5])),Oe.updateMatrixWorld(),Ry.update(!nn&&Oe.zoom>=.4&&we.markers,vs.width,vs.height),nn||n>hp)dc.classList.contains("visible")&&dc.classList.remove("visible");else{wr.copy(Ke.position),wr.y+=1.52,wr.project(Oe);const s=Math.round(Math.max(85,Math.min(vs.width-85,(wr.x+1)*vs.width*.5))*10)/10,r=Math.round((1-wr.y)*vs.height*.5*10)/10;(s!==Ed||r!==wd)&&(Ed=s,wd=r,dc.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}bs&&performance.now()>bs&&(st.shadowMap.needsUpdate=!0,bs=0),st.render(Kt,Oe)}we.running&&(Se("#object-action").innerHTML="остановить двор <span>↗</span>");Ot();st.setAnimationLoop(Uy);requestAnimationFrame(()=>Se("#loading").classList.add("done"));window.__yard={state:we,select:ss,inspect:()=>({resident:ot.inspect(),territory:tr.inspect(),sleepBody:up.inspect(),sleepDream:wl.inspect(),quietDream:co.inspect(),rainDream:fi.inspect(),rainDreamScreen:fi.inspect().landmarks.map(n=>Tt(new G(...n))),earDream:In.inspect(),earDreamScreen:In.inspect().landmarks.map(n=>Tt(new G(...n))),torchDream:Zn.inspect(),torchDreamScreen:Zn.inspect().landmarks.map(n=>Tt(new G(...n))),pocketDream:ji.inspect(),pocketDreamScreen:ji.inspect().landmarks.map(n=>Tt(new G(...n))),cloudDream:pi.inspect(),cloudDreamScreen:pi.inspect().landmarks.map(n=>Tt(new G(...n))),meterDream:di.inspect(),meterDreamScreen:di.inspect().landmarks.map(n=>Tt(new G(...n))),roofDream:Un.inspect(),roofDreamGoalScreen:Un.inspect().goals.map(n=>Tt(new G(...n))),roofDreamLetterScreen:Tt(new G(...Un.inspect().letter)),dreamId:nn?He:null,seams:Ii.inspect(),seamsBounds:Wu.map(n=>Tt(n.clone())),seamsScreen:Tt(new G(-24,1,-48)),seamsScreens:Ii.inspect().landmarks.map(n=>Tt(new G(...n))),still:Li.inspect(),stillBounds:qu.map(n=>Tt(n.clone())),stillScreen:Tt(new G(24,.3,-24)),stillScreens:Li.inspect().landmarks.map(n=>Tt(new G(...n))),fork:Di.inspect(),forkScreen:Tt(new G(-23,.1,-32)),forkScreens:Di.inspect().landmarks.map(n=>Tt(new G(...n))),garage:gi.inspect(),garageScreen:Tt(new G(...gi.inspect().garage).add(new G(-24,-.7,-24))),garageCarScreen:Tt(new G(-32,-.7,-24)),quotes:Ni.inspect(),quoteScreens:Ni.inspect().quotePositions.map(n=>Tt(new G(...n).add(new G(24,-1.05,24)))),dash:_i.inspect(),dashSnailScreen:Tt(new G(..._i.inspect().snail).add(new G(0,-1,-24))),dashBeamScreen:Tt(new G(..._i.inspect().beam).add(new G(0,-1.5,-24))),drydock:Pi.inspect(),drydockShipScreen:Tt(new G(...Pi.inspect().ship).add(new G(-24,-.5,0))),bench:Qi.inspect(),benchScreen:Tt(new G(-2.65,1.58,-3.18)),benchBucketScreen:Tt(new G(-4.75,1.51,-3.63)),roofVisible:pn.visible,amnesty:Ki.inspect(),amnestyScreen:Tt(new G(0,-.3,24)),cellar:Ri.inspect(),cellarScreen:Tt(new G(24,-.3,.25)),objects:Object.keys(Vn),greenhouse:Sn.inspect(),dock:ei.inspect(),boatScreen:Tt(new G(...ei.inspect().boat).add(new G(0,.2,0))),drawCalls:st.info.render.calls,triangles:st.info.render.triangles,gpuGeometries:st.info.memory.geometries,zoom:Oe.zoom,target:Qe.target.toArray(),angle:mn.angle,head:Ke.position.toArray(),roof:pn.position.toArray(),roofOpen:cr(),roofMode:we.roof===null?"auto":"manual",pendulums:ao.map(n=>n.group.rotation.x),growth:er,meshes:(()=>{let n=0;return Kt.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[st.domElement.width,st.domElement.height]})};by();
