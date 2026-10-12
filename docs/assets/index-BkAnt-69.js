(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ru=[{weights:[1,2,3],debt:[2,1,2],target:4},{weights:[2,3,4],debt:[2,1,2],target:5},{weights:[1,3,5],debt:[2,1,2],target:6}];function ou(n=1){return{round:0,run:n,loaded:[!1,!1,!1],pardoned:!1,status:"idle",delivered:[],attempts:0}}function au(n){const e=n.state?JSON.parse(JSON.stringify(n.state)):ou();Array.isArray(e.delivered)||(e.delivered=[]),(!Array.isArray(e.loaded)||e.loaded.length!==3)&&(e.loaded=[!1,!1,!1]),(!Number.isInteger(e.round)||e.round<0||e.round>2)&&(e.round=0),Number.isInteger(e.run)||(e.run=1),Number.isInteger(e.attempts)||(e.attempts=0),e.status||(e.status="idle");const t=()=>e.status==="delivered"||e.status==="complete";let i={ok:!0};if(n.mode==="action"){const c=n.args||{},l=n.tool;if(l==="restart")Object.assign(e,ou(e.run+1));else if(l==="next")e.status!=="delivered"?i={ok:!1,reason:"finish_route_first"}:(e.round++,e.loaded=[!1,!1,!1],e.pardoned=!1,e.status="idle");else if(t())i={ok:!1,reason:"route_finished"};else if(l==="load")!Number.isInteger(c.index)||c.index<0||c.index>2?i={ok:!1,reason:"invalid_index"}:(e.loaded[c.index]=!e.loaded[c.index],e.status="idle");else if(l==="amnesty")e.pardoned=!0,e.status="idle";else if(l==="dispatch"){const u=ru[e.round],f=u.weights.reduce((h,d,g)=>h+(e.loaded[g]?d+(e.pardoned?0:u.debt[g]):0),0);e.attempts++,f!==u.target?(e.status=f<u.target?"under":"over",i={ok:!1,reason:e.status,total:f,target:u.target}):(e.status=e.round===2?"complete":"delivered",u.weights.forEach((h,d)=>{e.loaded[d]&&e.delivered.push({id:`${e.run}:${e.round}:${d}`,weight:h})}),i={ok:!0,total:f,target:u.target})}else i={ok:!1,reason:"unknown_tool"}}const s=ru[e.round],r=s.weights.map((c,l)=>c+(e.pardoned?0:s.debt[l])),o=r.reduce((c,l,u)=>c+(e.loaded[u]?l:0),0),a={...e,weights:s.weights,debt:e.pardoned?[0,0,0]:s.debt,effective:r,target:s.target,total:o,tilt:e.status==="under"?.22:e.status==="over"?-.22:0};return{state:e,public:a,result:i,seconds:n.tool==="dispatch"?35:15,label:"возится с кабачковым мостом"}}function lf({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,sign:u,batchStatic:f,changed:h,watching:d,localPlay:g}){var Z,ee,pe;const M=s([0,-1.5,24]);M.name="amnesty-bureau";const m=i("#9d8560"),p=i("#a1b56f"),S=i("#f1d29a"),w=i("#879c88");r([-3.65,-.14,0],[3.3,.5,7],w,M),r([3.65,-.14,0],[3.3,.5,7],w,M),r([0,-.8,0],[4.2,.1,6.7],t.dark,M);for(const se of[-4.9,4.9])c([se,0,-3],[se,3.3,-3],.06,t.copper,M);u("КАБАЧКОВАЯ АМНИСТИЯ",[0,3.25,-3],7,.65,M,{size:31}),u("НЕ ПЛАТИЛ. И НЕ НАДО.",[-3.5,1.35,-2.85],2.8,.4,M,{size:30}),r([-3.6,.4,-1],[2.1,.16,3.8],m,M);const v=s([0,.2,1.15],M);for(let se=0;se<11;se++)r([-2+se*.4,0,0],[.38,.16,1.65],m,v);for(const se of[-.72,.72])c([-2.2,.22,se],[2.2,.22,se],.045,t.copper,v);a([0,-.22,1.15],.32,.6,t.metal,M);const T=s([-2.55,.32,1.15],M);r([0,.12,0],[1.5,.18,1.35],t.metal,T);for(const se of[-.52,.52])for(const k of[-.58,.58]){const V=l([se,0,k],.17,.05,t.dark,T,[0,0,0]);V.rotation.y=Math.PI/2}const y=s([-4.7,.8,1.4],M);c([0,-.5,0],[0,.2,0],.1,t.metal,y);const A=s([0,0,0],y);c([0,0,0],[0,.8,0],.065,t.copper,A),o([0,.8,0],.14,t.rust,A),u("АМНИСТИЯ",[-4.6,.15,2.35],1.75,.35,M,{size:35});const _=s([.1,.1,-2.3],M);r([0,.08,0],[1.6,.16,1.5],t.metal,_);const E=a([0,.7,0],.57,1.1,t.copper,_);l([0,1.28,0],.25,.045,t.dark,_);const R=Array.from({length:3},(se,k)=>o([1.75+k*.34,2.15,-3.05],.095,t.mint,M)),L=Array.from({length:3},(se,k)=>{const V=s([-3.6,.72,-2.1+k*1.08],M),oe=o([0,0,0],[.28,.23,.57],p,V);oe.rotation.z=.1,c([0,0,-.5],[.05,.12,-.68],.045,t.leaf,V);const K=s([.45,.28,0],V);return r([0,0,0],[.29,.57,.4],S,K),r([0,0,.21],[.18,.045,.012],t.rust,K),{g:V,tax:K}});u("A",[-4.35,.75,-2.1],.28,.28,M),u("B",[-4.35,.75,-1.02],.28,.28,M),u("C",[-4.35,.75,.06],.28,.28,M),r([3.55,.8,-1.7],[2.75,.13,2.2],m,M);const N=Array.from({length:6},(se,k)=>o([2.75+k%3*.7,1,-2.1+Math.floor(k/3)*.83],[.2,.19,.38],p,M));u("ПРОЕХАЛИ",[3.6,1.75,-2.9],2.1,.4,M,{size:39});const B=s([0,0,0],e);for(let se=0;se<15;se++){const k=se/14;r([-.6+Math.sin(k*Math.PI)*1.5,-1.55,17+se*.3],[.9,.12,.65],w,B)}for(let se=0;se<5;se++)r([-.8-se*.6,-1.55,21.5],[.75,.12,.75],w,B);u("АМНИСТИЯ ↓",[-1.8,-.2,17.9],2.5,.4,B,{size:35}),c([-1.8,-1.6,17.9],[-1.8,-.2,17.9],.045,t.copper,B),f(B,[]),f(M,[v,T,y,_,...L.map(se=>se.g),...N,...R]),f(v,[]),f(T,[]);let I=null,O=((pe=(ee=(Z=window.__beznogimState)==null?void 0:Z.mechanics)==null?void 0:ee.amnesty)==null?void 0:pe.public)||null,W,F="",te=0;try{I=JSON.parse(localStorage.getItem("beznogim-amnesty-v1")||"null")}catch{}function H(se,k,V={}){const oe=au({state:I,mode:se,tool:k,args:V});I=oe.state;try{localStorage.setItem("beznogim-amnesty-v1",JSON.stringify(I))}catch{}return oe}H("migrate");const J=document.createElement("div");J.id="amnesty-controls",J.hidden=!0,J.innerHTML='<output id="amnesty-readout"></output><div class="amnesty-cargo"><button data-load="0"></button><button data-load="1"></button><button data-load="2"></button></div><button id="amnesty-pardon">отменить налог</button><button id="amnesty-restart">сначала ↺</button><small>Выбери кабачки. Мост пропустит ровно массу противовеса. Бумажные надбавки можно отменить. Это игрушечный груз, не урожай.</small>',document.querySelector("#focus-object").before(J);function ne(){return O&&d()?O:au({state:I,mode:"migrate"}).public}function ge(se,k){g(),H("action",se,k),F="",me(0),h()}for(const se of J.querySelectorAll("[data-load]"))se.onclick=()=>ge("load",{index:Number(se.dataset.load)});J.querySelector("#amnesty-pardon").onclick=()=>ge("amnesty"),J.querySelector("#amnesty-restart").onclick=()=>ge("restart");const xe={idle:"Выбери груз и попробуй мост.",under:"Легковато. Мост поднялся: добавь груз.",over:"Перевес. Мост опустился: убери груз или бумаги.",delivered:"Рейс прошёл. Кабачки уже на полке.",complete:"Три рейса. Шесть кабачков на свободе."};function Ie(se){W=se;const k=se.status==="delivered"||se.status==="complete";J.querySelector("#amnesty-readout").textContent=`рейс ${se.round+1}/3 · груз ${se.total} / нужно ${se.target}`,J.querySelectorAll("[data-load]").forEach((V,oe)=>{V.textContent=`${["A","B","C"][oe]} · ${se.weights[oe]}${se.debt[oe]?` + ${se.debt[oe]} бумага`:""}`,V.setAttribute("aria-pressed",String(se.loaded[oe])),V.disabled=k}),J.querySelector("#amnesty-pardon").disabled=se.pardoned||k,J.querySelector("#amnesty-pardon").textContent=se.pardoned?"налог отменён":"отменить налог",E.scale.y=se.target/4,R.forEach((V,oe)=>V.visible=oe<(se.status==="complete"?3:se.round)),N.forEach((V,oe)=>V.visible=oe<se.delivered.length),L.forEach((V,oe)=>{V.tax.visible=!se.pardoned||te<.99,V.g.visible=!k||!se.loaded[oe],V.g.scale.setScalar(.8+se.weights[oe]*.08)})}function Be(){const se=W||ne();return{action:O&&d()?"войти в свою амнистию":se.status==="delivered"?"следующий рейс":se.status==="complete"?"сыграть ещё раз":"отправить тележку",description:(O&&d()?"Жизнь жителя. Кнопки откроют отдельную песочницу. ":"Твоя песочница. ")+xe[se.status]}}function me(se,k){const V=ne(),oe=JSON.stringify(V);oe!==F&&(F=oe,Ie(V),h());const K=V.status==="delivered"||V.status==="complete",ae=(U,q)=>n.MathUtils.lerp(U,q,Math.min(1,se*5));v.rotation.z=ae(v.rotation.z,V.tilt),T.position.x=ae(T.position.x,K?3:-2.55),A.rotation.z=ae(A.rotation.z,V.pardoned?-.65:0),te=ae(te,V.pardoned?1:0),L.forEach(U=>{U.tax.position.y=.28+te*2.5,U.tax.rotation.z=te*.8,U.tax.visible=!V.pardoned||te<.99}),N.forEach((U,q)=>U.visible=q<V.delivered.length-(K&&T.position.x<2.9?2:0)),L.forEach((U,q)=>{const ce=V.loaded[q];U.g.visible=!K||!ce||T.position.x<2.9,U.g.position.x=ae(U.g.position.x,ce?T.position.x+(q-1)*.42:-3.6),U.g.position.y=ae(U.g.position.y,ce?.86:.72),U.g.position.z=ae(U.g.position.z,ce?1.15:-2.1+q*1.08)})}return window.addEventListener("beznogim:state",({detail:se})=>{var V,oe;const k=(oe=(V=se.mechanics)==null?void 0:V.amnesty)==null?void 0:oe.public;k&&(O=k,F="")}),te=ne().pardoned?1:0,Ie(ne()),{house:M,controls:J,update:me,card:Be,run:()=>ge(W.status==="delivered"?"next":W.status==="complete"?"restart":"dispatch"),inspect:()=>({source:O&&d()?"resident":"sandbox",...W,bridgeTilt:v.rotation.z,cartX:T.position.x,cargoPositions:L.map(se=>se.g.position.toArray()),taxVisible:L.map(se=>se.tax.visible),paperY:L.map(se=>se.tax.position.y),handleAngle:A.rotation.z,deliveredVisible:N.filter(se=>se.visible).length})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="186",fi={ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vh=0,Al=1,Mh=2,Es=1,Sh=2,Ss=3,Ni=0,an=1,En=2,ii=0,Ts=1,Rl=2,Cl=3,Pl=4,yh=5,Xi=100,bh=101,Eh=102,Th=103,wh=104,Ah=200,Rh=201,Ch=202,Ph=203,Zl=204,Jl=205,Lh=206,Dh=207,Ih=208,Nh=209,Uh=210,Fh=211,Oh=212,Bh=213,zh=214,Mo=0,So=1,yo=2,Ps=3,bo=4,Eo=5,To=6,wo=7,Kl=0,kh=1,Gh=2,Vn=0,$l=1,Ql=2,jl=3,ha=4,ec=5,tc=6,nc=7,ic=300,Ui=301,Ji=302,fo=303,po=304,wr=306,pr=1e3,ti=1001,Ao=1002,Xt=1003,Vh=1004,nr=1005,Yt=1006,mo=1007,Ri=1008,hn=1009,sc=1010,rc=1011,Ls=1012,da=1013,Xn=1014,wn=1015,qn=1016,fa=1017,pa=1018,Ds=1020,oc=35902,ac=35899,lc=1021,cc=1022,An=1023,si=1026,Ci=1027,ma=1028,ga=1029,Fi=1030,_a=1031,xa=1033,or=33776,ar=33777,lr=33778,cr=33779,Ro=35840,Co=35841,Po=35842,Lo=35843,Do=36196,Io=37492,No=37496,Uo=37488,Fo=37489,mr=37490,Oo=37491,Bo=37808,zo=37809,ko=37810,Go=37811,Vo=37812,Ho=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Zo=37818,Jo=37819,Ko=37820,$o=37821,Qo=36492,jo=36494,ea=36495,ta=36283,na=36284,gr=36285,ia=36286,Hh=3200,sa=0,Wh=1,ui="",jt="srgb",_r="srgb-linear",xr="linear",mt="srgb",go=7680,Xh=519,qh=512,Yh=513,Zh=514,va=515,Jh=516,Kh=517,Ma=518,$h=519,Qh=35044,Ll="300 es",Gn=2e3,Is=2001;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jh(){const n=ra("canvas");return n.style.display="block",n}const lu={};function Dl(...n){const e="THREE."+n.shift();console.log(e,...n)}function ed(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ke(...n){n=ed(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=ed(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zi(...n){const e=n.join(" ");e in lu||(lu[e]=!0,Ke(...n))}function uf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const hf={[Mo]:So,[yo]:To,[bo]:wo,[Ps]:Eo,[So]:Mo,[To]:yo,[wo]:bo,[Eo]:Ps};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const ur=Math.PI/180,vr=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function uc(n,e){return(n%e+e)%e}function df(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ff(n,e,t){return n!==e?(t-n)/(e-n):0}function hr(n,e,t){return(1-t)*n+t*e}function pf(n,e,t,i){return hr(n,e,1-Math.exp(-t*i))}function mf(n,e=1){return e-Math.abs(uc(n,e*2)-e)}function gf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _f(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vf(n,e){return n+Math.random()*(e-n)}function Mf(n){return n*(.5-Math.random())}function Sf(n){n!==void 0&&(cu=n);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yf(n){return n*ur}function bf(n){return n*vr}function Ef(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Af(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const un={DEG2RAD:ur,RAD2DEG:vr,generateUUID:Qi,clamp:rt,euclideanModulo:uc,mapLinear:df,inverseLerp:ff,lerp:hr,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:_f,randInt:xf,randFloat:vf,randFloatSpread:Mf,seededRandom:Sf,degToRad:yf,radToDeg:bf,isPowerOfTwo:Ef,ceilPowerOfTwo:Tf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Af,normalize:sn,denormalize:Ms},Wc=class Wc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wc.prototype.isVector2=!0;let ve=Wc;class gi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],g=r[o+2],M=r[o+3];if(f!==M||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*M;m<0&&(h=-h,d=-d,g=-g,M=-M,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+M*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+M*a;const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*f+c*d-l*h,e[t+1]=c*g+u*h+l*f-a*d,e[t+2]=l*g+u*d+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xc=class Xc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xc.prototype.isVector3=!0;let P=Xc;const qa=new P,uu=new gi,qc=class qc{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],M=s[0],m=s[3],p=s[6],S=s[1],w=s[4],v=s[7],T=s[2],y=s[5],A=s[8];return r[0]=o*M+a*S+c*T,r[3]=o*m+a*w+c*y,r[6]=o*p+a*v+c*A,r[1]=l*M+u*S+f*T,r[4]=l*m+u*w+f*y,r[7]=l*p+u*v+f*A,r[2]=h*M+d*S+g*T,r[5]=h*m+d*w+g*y,r[8]=h*p+d*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(s*l-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=h*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-a*t)*M,e[6]=d*M,e[7]=(i*c-l*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qc.prototype.isMatrix3=!0;let Qe=qc;const Ya=new Qe,hu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const n={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_r]:{primaries:e,whitePoint:i,transfer:xr,toXYZ:hu,fromXYZ:du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:hu,fromXYZ:du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),n}const lt=Rf();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class td{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=ra("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class Sa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?td.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Pf=0;const Ja=new P;class Zt extends xi{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=ti,s=ti,r=Yt,o=Ri,a=An,c=hn,l=Zt.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Qi(),this.name="",this.source=new Sa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=ic;Zt.DEFAULT_ANISOTROPY=1;const Yc=class Yc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,v=(d+1)/2,T=(p+1)/2,y=(u+h)/4,A=(f+M)/4,_=(g+m)/4;return w>v&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=y/i,r=A/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=y/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=_/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-M)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yc.prototype.isVector4=!0;let At=Yc;class nd extends xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Zt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Sa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hc extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ca=class ca{constructor(e,t,i,s,r,o,a,c,l,u,f,h,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,f,h,d,g,M,m)}set(e,t,i,s,r,o,a,c,l,u,f,h,d,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,M=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=h-M*l,t[9]=-a*c,t[2]=M-h*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,g=l*u,M=l*f;t[0]=h+M*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=M+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,g=l*u,M=l*f;t[0]=h-M*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=M-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,M=a*f;t[0]=c*u,t[4]=g*l-d,t[8]=h*l+M,t[1]=c*f,t[5]=M*l+h,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,g=a*c,M=a*l;t[0]=c*u,t[4]=M-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+g,t[10]=h-M*f}else if(e.order==="XZY"){const h=o*c,d=o*l,g=a*c,M=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+M,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lf,e,Df)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(i,mn),bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(i,mn)),bi.normalize(),Br.crossVectors(mn,bi),s[0]=bi.x,s[4]=Br.x,s[8]=mn.x,s[1]=bi.y,s[5]=Br.y,s[9]=mn.y,s[2]=bi.z,s[6]=Br.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],M=i[6],m=i[10],p=i[14],S=i[3],w=i[7],v=i[11],T=i[15],y=s[0],A=s[4],_=s[8],E=s[12],R=s[1],L=s[5],N=s[9],B=s[13],I=s[2],O=s[6],W=s[10],F=s[14],te=s[3],H=s[7],J=s[11],ne=s[15];return r[0]=o*y+a*R+c*I+l*te,r[4]=o*A+a*L+c*O+l*H,r[8]=o*_+a*N+c*W+l*J,r[12]=o*E+a*B+c*F+l*ne,r[1]=u*y+f*R+h*I+d*te,r[5]=u*A+f*L+h*O+d*H,r[9]=u*_+f*N+h*W+d*J,r[13]=u*E+f*B+h*F+d*ne,r[2]=g*y+M*R+m*I+p*te,r[6]=g*A+M*L+m*O+p*H,r[10]=g*_+M*N+m*W+p*J,r[14]=g*E+M*B+m*F+p*ne,r[3]=S*y+w*R+v*I+T*te,r[7]=S*A+w*L+v*O+T*H,r[11]=S*_+w*N+v*W+T*J,r[15]=S*E+w*B+v*F+T*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],M=e[7],m=e[11],p=e[15],S=c*d-l*h,w=a*d-l*f,v=a*h-c*f,T=o*d-l*u,y=o*h-c*u,A=o*f-a*u;return t*(M*S-m*w+p*v)-i*(g*S-m*T+p*y)+s*(g*w-M*T+p*A)-r*(g*v-M*y+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],M=e[13],m=e[14],p=e[15],S=t*a-i*o,w=t*c-s*o,v=t*l-r*o,T=i*c-s*a,y=i*l-r*a,A=s*l-r*c,_=u*M-f*g,E=u*m-h*g,R=u*p-d*g,L=f*m-h*M,N=f*p-d*M,B=h*p-d*m,I=S*B-w*N+v*L+T*R-y*E+A*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=(a*B-c*N+l*L)*O,e[1]=(s*N-i*B-r*L)*O,e[2]=(M*A-m*y+p*T)*O,e[3]=(h*y-f*A-d*T)*O,e[4]=(c*R-o*B-l*E)*O,e[5]=(t*B-s*R+r*E)*O,e[6]=(m*v-g*A-p*w)*O,e[7]=(u*A-h*v+d*w)*O,e[8]=(o*N-a*R+l*_)*O,e[9]=(i*R-t*N-r*_)*O,e[10]=(g*y-M*v+p*S)*O,e[11]=(f*v-u*y-d*S)*O,e[12]=(a*E-o*L-c*_)*O,e[13]=(t*L-i*E+s*_)*O,e[14]=(M*w-g*T-m*S)*O,e[15]=(u*T-f*w+h*S)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,M=o*u,m=o*f,p=a*f,S=c*l,w=c*u,v=c*f,T=i.x,y=i.y,A=i.z;return s[0]=(1-(M+p))*T,s[1]=(d+v)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(h+p))*y,s[6]=(m+S)*y,s[7]=0,s[8]=(g+w)*A,s[9]=(m-S)*A,s[10]=(1-(h+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=as.set(s[0],s[1],s[2]).length();const a=as.set(s[4],s[5],s[6]).length(),c=as.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);const l=1/o,u=1/a,f=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Gn,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let g,M;if(c)g=r/(o-r),M=o*r/(o-r);else if(a===Gn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Is)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Gn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let g,M;if(c)g=1/(o-r),M=o/(o-r);else if(a===Gn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===Is)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ca.prototype.isMatrix4=!0;let ht=ca;const as=new P,Un=new ht,Lf=new P(0,0,0),Df=new P(1,1,1),bi=new P,Br=new P,mn=new P,fu=new ht,pu=new gi;class _i{constructor(e=0,t=0,i=0,s=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let If=0;const mu=new P,ls=new gi,ri=new ht,zr=new P,qs=new P,Nf=new P,Uf=new gi,gu=new P(1,0,0),_u=new P(0,1,0),xu=new P(0,0,1),vu={type:"added"},Ff={type:"removed"},cs={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Ot extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new P,t=new _i,i=new gi,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(qs,zr,this.up):ri.lookAt(zr,qs,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ri),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),cs.child=e,this.dispatchEvent(cs),cs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.DEFAULT_UP=new P(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pi extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Of={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},kr={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=uc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return lt.workingToColorSpace(Qt.copy(this),e),Math.round(rt(Qt.r*255,0,255))*65536+Math.round(rt(Qt.g*255,0,255))*256+Math.round(rt(Qt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=jt){lt.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(kr);const i=hr(Ei.h,kr.h,t),s=hr(Ei.s,kr.s,t),r=hr(Ei.l,kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=sd;class ba{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new ba(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rd extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fn=new P,oi=new P,Qa=new P,ai=new P,us=new P,hs=new P,Mu=new P,ja=new P,el=new P,tl=new P,nl=new At,il=new At,sl=new At;class Tn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fn.subVectors(s,t),oi.subVectors(i,t),Qa.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(oi),c=Fn.dot(Qa),l=oi.dot(oi),u=oi.dot(Qa),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,i),sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(e,t,i,s){return Fn.subVectors(i,t),oi.subVectors(e,t),Fn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;us.subVectors(s,i),hs.subVectors(r,i),ja.subVectors(e,i);const c=us.dot(ja),l=hs.dot(ja);if(c<=0&&l<=0)return t.copy(i);el.subVectors(e,s);const u=us.dot(el),f=hs.dot(el);if(u>=0&&f<=u)return t.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(us,o);tl.subVectors(e,r);const d=us.dot(tl),g=hs.dot(tl);if(g>=0&&d<=g)return t.copy(r);const M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(hs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Mu.subVectors(r,s),a=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Mu,a);const p=1/(m+M+h);return o=M*p,a=h*p,t.copy(i).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Vr.subVectors(this.max,Ys),ds.subVectors(e.a,Ys),fs.subVectors(e.b,Ys),ps.subVectors(e.c,Ys),Ti.subVectors(fs,ds),wi.subVectors(ps,fs),zi.subVectors(ds,ps);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-zi.z,zi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,zi.z,0,-zi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-zi.y,zi.x,0];return!rl(t,ds,fs,ps,Vr)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,ds,fs,ps,Vr))?!1:(Hr.crossVectors(Ti,wi),t=[Hr.x,Hr.y,Hr.z],rl(t,ds,fs,ps,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,Gr=new Oi,ds=new P,fs=new P,ps=new P,Ti=new P,wi=new P,zi=new P,Ys=new P,Vr=new P,Hr=new P,ki=new P;function rl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ft=new P,Wr=new ve;let Bf=0;class Cn extends xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class dc extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fc extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const zf=new Oi,Zs=new P,ol=new P;class ji{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ol)),this.expandByPoint(Zs.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kf=0;const Sn=new ht,al=new Ot,ms=new P,gn=new Oi,Js=new Oi,Wt=new P;class Bt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?fc:dc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(gn.min,Js.min),gn.expandByPoint(Wt),Wt.addVectors(gn.max,Js.max),gn.expandByPoint(Wt)):(gn.expandByPoint(Js.min),gn.expandByPoint(Js.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(e,l),Wt.add(ms)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new P,c[_]=new P;const l=new P,u=new P,f=new P,h=new ve,d=new ve,g=new ve,M=new P,m=new P;function p(_,E,R){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[_].add(M),a[E].add(M),a[R].add(M),c[_].add(m),c[E].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,E=S.length;_<E;++_){const R=S[_],L=R.start,N=R.count;for(let B=L,I=L+N;B<I;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new P,v=new P,T=new P,y=new P;function A(_){T.fromBufferAttribute(s,_),y.copy(T);const E=a[_];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(y,E);const L=v.dot(c[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,E=S.length;_<E;++_){const R=S[_],L=R.start,N=R.count;for(let B=L,I=L+N;B<I;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,f=new P;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Cn(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new P,Gf=new P,Vf=new Qe;class ei{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ll.subVectors(i,t).cross(Gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vf.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hf=0;class es extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Ts,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new P,cl=new P,Xr=new P,qr=new P;class Ar{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){cl.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(cl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xr),a=qr.dot(this.direction),c=-qr.dot(Xr),l=qr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const M=1/u;f*=M,h*=M,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(cl).addScaledVector(Xr,h),d}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,g=t.x-o.x,M=t.y-o.y,m=t.z-o.z,p=i.x-o.x,S=i.y-o.y,w=i.z-o.z,v=Math.abs(c),T=Math.abs(l),y=Math.abs(u);let A,_,E,R,L,N,B,I,O,W,F,te;if(v>=T&&v>=y?(E=c,N=f,O=g,te=p,c>=0?(A=l,_=u,R=h,L=d,B=M,I=m,W=S,F=w):(A=u,_=l,R=d,L=h,B=m,I=M,W=w,F=S)):T>=y?(E=l,N=h,O=M,te=S,l>=0?(A=u,_=c,R=d,L=f,B=m,I=g,W=w,F=p):(A=c,_=u,R=f,L=d,B=g,I=m,W=p,F=w)):(E=u,N=d,O=m,te=w,u>=0?(A=c,_=l,R=f,L=h,B=g,I=M,W=p,F=S):(A=l,_=c,R=h,L=f,B=M,I=g,W=S,F=p)),E===0)return null;const H=A/E,J=_/E,ne=1/E,ge=R-H*N,xe=L-J*N,Ie=B-H*O,Be=I-J*O,me=W-H*te,Z=F-J*te,ee=me*Be-Z*Ie,pe=ge*Z-xe*me,se=Ie*xe-Be*ge;if(s){if(ee<0||pe<0||se<0)return null}else if((ee<0||pe<0||se<0)&&(ee>0||pe>0||se>0))return null;const k=ee+pe+se;if(k===0)return null;const V=ne*(ee*N+pe*O+se*te);return(k>0?V<0:V>0)?null:this.at(V/k,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rr extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Su=new ht,Gi=new Ar,Yr=new ji,yu=new P,Zr=new P,Jr=new P,Kr=new P,ul=new P,$r=new P,bu=new P,Qr=new P;class ln extends Ot{constructor(e=new Bt,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(ul.fromBufferAttribute(f,e),o?$r.addScaledVector(ul,u):$r.addScaledVector(ul.sub(t),u))}t.add($r)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Yr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Yr,yu)===null||Gi.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Su),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=w;v<T;v+=3){const y=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=jr(this,p,e,i,l,u,f,y,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=jr(this,o,e,i,l,u,f,S,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=w;v<T;v+=3){const y=v,A=v+1,_=v+2;s=jr(this,p,e,i,l,u,f,y,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){const S=m,w=m+1,v=m+2;s=jr(this,o,e,i,l,u,f,S,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wf(n,e,t,i,s,r,o,a){let c;if(e.side===an?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ni,a),c===null)return null;Qr.copy(a),Qr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Qr);return l<t.near||l>t.far?null:{distance:l,point:Qr.clone(),object:n}}function jr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Zr),n.getVertexPosition(c,Jr),n.getVertexPosition(l,Kr);const u=Wf(n,e,t,i,Zr,Jr,Kr,bu);if(u){const f=new P;Tn.getBarycoord(bu,Zr,Jr,Kr,f),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,c,l,f,new ve)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,c,l,f,new ve)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,c,l,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};Tn.getNormal(Zr,Jr,Kr,h.normal),u.face=h,u.barycoord=f}return u}class pc extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Xt,u=Xt,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il extends Cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new ht,Eu=new ht,eo=[],Tu=new Oi,Xf=new ht,Ks=new ln,$s=new ji;class Nl extends ln{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Il(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),Tu.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Tu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,gs),$s.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),Eu.multiplyMatrices(i,gs),Ks.matrixWorld=Eu,Ks.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const c=eo[o];c.instanceId=r,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Il(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pc(new Float32Array(s*this.count),s,this.count,ma,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vi=new ji,qf=new ve(.5,.5),to=new P;class Ea{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,d-u,p-g,T-S).normalize(),s[1].setComponents(l+o,d+u,p+g,T+S).normalize(),s[2].setComponents(l+a,d+f,p+M,T+w).normalize(),s[3].setComponents(l-a,d-f,p-M,T-w).normalize(),i)s[4].setComponents(c,h,m,v).normalize(),s[5].setComponents(l-c,d-h,p-m,T-v).normalize();else if(s[4].setComponents(l-c,d-h,p-m,T-v).normalize(),t===Gn)s[5].setComponents(l+c,d+h,p+m,T+v).normalize();else if(t===Is)s[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=qf.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mc extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new ht,Ul=new Ar,no=new ji,io=new P;class od extends Ot{constructor(e=new Bt,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;wu.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,M=d;g<M;g++){const m=l.getX(g);io.fromBufferAttribute(f,m),Au(io,m,c,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,M=d;g<M;g++)io.fromBufferAttribute(f,g),Au(io,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Au(n,e,t,i,s,r,o){const a=Ul.distanceSqToPoint(n);if(a<t){const c=new P;Ul.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class gc extends Zt{constructor(e=[],t=Ui,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _c extends Zt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends Zt{constructor(e,t,i=Xn,s,r,o,a=Xt,c=Xt,l,u=si,f=1){if(u!==si&&u!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ad extends Ns{constructor(e,t=Xn,i=Ui,s,r,o=Xt,a=Xt,c,l=si){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xc extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vi extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2));function g(M,m,p,S,w,v,T,y,A,_,E){const R=v/A,L=T/_,N=v/2,B=T/2,I=y/2,O=A+1,W=_+1;let F=0,te=0;const H=new P;for(let J=0;J<W;J++){const ne=J*L-B;for(let ge=0;ge<O;ge++){const xe=ge*R-N;H[M]=xe*S,H[m]=ne*w,H[p]=I,l.push(H.x,H.y,H.z),H[M]=0,H[m]=0,H[p]=y>0?1:-1,u.push(H.x,H.y,H.z),f.push(ge/A),f.push(1-J/_),F+=1}}for(let J=0;J<_;J++)for(let ne=0;ne<A;ne++){const ge=h+ne+O*J,xe=h+ne+O*(J+1),Ie=h+(ne+1)+O*(J+1),Be=h+(ne+1)+O*J;c.push(ge,xe,Be),c.push(xe,Ie,Be),te+=6}a.addGroup(d,te,E),d+=te,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ta extends Bt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new P,u=new ve;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=i+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cr extends Bt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const M=[],m=i/2;let p=0;S(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function S(){const v=new P,T=new P;let y=0;const A=(t-e)/i;for(let _=0;_<=r;_++){const E=[],R=_/r,L=R*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,I=B*c+a,O=Math.sin(I),W=Math.cos(I);T.x=L*O,T.y=-R*i+m,T.z=L*W,f.push(T.x,T.y,T.z),v.set(O,A,W).normalize(),h.push(v.x,v.y,v.z),d.push(B,1-R),E.push(g++)}M.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const R=M[E][_],L=M[E+1][_],N=M[E+1][_+1],B=M[E][_+1];(e>0||E!==0)&&(u.push(R,L,B),y+=3),(t>0||E!==r-1)&&(u.push(L,N,B),y+=3)}l.addGroup(p,y,0),p+=y}function w(v){const T=g,y=new ve,A=new P;let _=0;const E=v===!0?e:t,R=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const I=N/s*c+a,O=Math.cos(I),W=Math.sin(I);A.x=E*W,A.y=m*R,A.z=E*O,f.push(A.x,A.y,A.z),h.push(0,R,0),y.x=O*.5+.5,y.y=W*.5*R+.5,d.push(y.x,y.y),g++}for(let N=0;N<s;N++){const B=T+N,I=L+N;v===!0?u.push(I,I+1,B):u.push(I+1,I,B),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ts extends Cr{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ts(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends Bt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const w=new P,v=new P,T=new P;for(let y=0;y<t.length;y+=3)d(t[y+0],w),d(t[y+1],v),d(t[y+2],T),c(w,v,T,S)}function c(S,w,v,T){const y=T+1,A=[];for(let _=0;_<=y;_++){A[_]=[];const E=S.clone().lerp(v,_/y),R=w.clone().lerp(v,_/y),L=y-_;for(let N=0;N<=L;N++)N===0&&_===y?A[_][N]=E:A[_][N]=E.clone().lerp(R,N/L)}for(let _=0;_<y;_++)for(let E=0;E<2*(y-_)-1;E++){const R=Math.floor(E/2);E%2===0?(h(A[_][R+1]),h(A[_+1][R]),h(A[_][R])):(h(A[_][R+1]),h(A[_+1][R+1]),h(A[_+1][R]))}}function l(S){const w=new P;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){const S=new P;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const v=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(v,1-T)}g(),f()}function f(){for(let S=0;S<o.length;S+=6){const w=o[S+0],v=o[S+2],T=o[S+4],y=Math.max(w,v,T),A=Math.min(w,v,T);y>.9&&A<.1&&(w<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function d(S,w){const v=S*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function g(){const S=new P,w=new P,v=new P,T=new P,y=new ve,A=new ve,_=new ve;for(let E=0,R=0;E<r.length;E+=9,R+=6){S.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),y.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),T.copy(S).add(w).add(v).divideScalar(3);const L=m(T);M(y,R+0,S,L),M(A,R+2,w,L),M(_,R+4,v,L)}}function M(S,w,v,T){T<0&&S.x===1&&(o[w]=S.x-1),v.x===0&&v.z===0&&(o[w]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.detail)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ve:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,s=[],r=[],o=[],a=new P,c=new ht;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Aa extends Zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ld extends Aa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Ru=new P,Cu=new P,hl=new vc,dl=new vc,fl=new vc;class Mc extends Zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Cu.subVectors(s[0],s[1]).add(s[0]),l=Cu);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ru.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),hl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,M,m),dl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,M,m),fl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),dl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),fl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(hl.calc(c),dl.calc(c),fl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Yf(n,e){const t=1-n;return t*t*e}function Zf(n,e){return 2*(1-n)*n*e}function Jf(n,e){return n*n*e}function dr(n,e,t,i){return Yf(n,e)+Zf(n,t)+Jf(n,i)}function Kf(n,e){const t=1-n;return t*t*t*e}function $f(n,e){const t=1-n;return 3*t*t*n*e}function Qf(n,e){return 3*(1-n)*n*n*e}function jf(n,e){return n*n*n*e}function fr(n,e,t,i,s){return Kf(n,e)+$f(n,t)+Qf(n,i)+jf(n,s)}class Sc extends Zn{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fr(e,s.x,r.x,o.x,a.x),fr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cd extends Zn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fr(e,s.x,r.x,o.x,a.x),fr(e,s.y,r.y,o.y,a.y),fr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yc extends Zn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends Zn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bc extends Zn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(dr(e,s.x,r.x,o.x),dr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ec extends Zn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(dr(e,s.x,r.x,o.x),dr(e,s.y,r.y,o.y),dr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tc extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Pu(a,c.x,l.x,u.x,f.x),Pu(a,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var oa=Object.freeze({__proto__:null,ArcCurve:ld,CatmullRomCurve3:Mc,CubicBezierCurve:Sc,CubicBezierCurve3:cd,EllipseCurve:Aa,LineCurve:yc,LineCurve3:ud,QuadraticBezierCurve:bc,QuadraticBezierCurve3:Ec,SplineCurve:Tc});class hd extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new oa[s.type]().fromJSON(s))}return this}}class Fl extends hd{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new yc(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new bc(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Sc(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Tc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new Aa(e,t,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pr extends Fl{constructor(e){super(e),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Fl().fromJSON(s))}return this}}function ep(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=dd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=rp(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let u=a,f=c;for(let h=t;h<s;h+=t){const d=n[h],g=n[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Mr(r,o,t,a,c,l,0),o}function dd(n,e,t,i,s){let r;if(s===gp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Lu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Lu(o/i|0,n[o],n[o+1],r);return r&&Us(r,r.next)&&(yr(r),r=r.next),r}function Ki(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Us(t,t.next)||Ct(t.prev,t,t.next)===0)){if(yr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Mr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&up(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?np(n,i,s,r):tp(n)){e.push(c.i,n.i,l.i),yr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ip(Ki(n),e),Mr(n,e,t,i,s,r,2)):o===2&&sp(n,e,t,i,s,r):Mr(Ki(n),e,t,i,s,r,1);break}}}function tp(n){const e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&ir(s,a,r,c,o,l,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function np(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),M=Math.max(a,c,l),m=Math.max(u,f,h),p=Ol(d,g,e,t,i),S=Ol(M,m,e,t,i);let w=n.prevZ,v=n.nextZ;for(;w&&w.z>=p&&v&&v.z<=S;){if(w.x>=d&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ir(a,u,c,f,l,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ir(a,u,c,f,l,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ir(a,u,c,f,l,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ir(a,u,c,f,l,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ip(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Us(i,s)&&pd(i,t,t.next,s)&&Sr(i,s)&&Sr(s,i)&&(e.push(i.i,t.i,s.i),yr(t),yr(t.next),t=n=s),t=t.next}while(t!==n);return Ki(t)}function sp(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fp(o,a)){let c=md(o,a);o=Ki(o,o.next),c=Ki(c,c.next),Mr(o,e,t,i,s,r,0),Mr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function rp(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=dd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(dp(l))}s.sort(op);for(let r=0;r<s.length;r++)t=ap(s[r],t);return t}function op(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ap(n,e){const t=lp(n,e);if(!t)return e;const i=md(t,n);return Ki(i,i.next),Ki(t,t.next)}function lp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Us(n,t))return t;do{if(Us(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&fd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);Sr(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&cp(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function cp(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function up(n,e,t,i){let s=n;do s.z===0&&(s.z=Ol(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,hp(s)}function hp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ol(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ir(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&fd(n,e,t,i,s,r,o,a)}function fp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!pp(n,e)&&(Sr(n,e)&&Sr(e,n)&&mp(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||Us(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Us(n,e){return n.x===e.x&&n.y===e.y}function pd(n,e,t,i){const s=ro(Ct(n,e,t)),r=ro(Ct(n,e,i)),o=ro(Ct(t,i,n)),a=ro(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&so(n,t,e)||r===0&&so(n,i,e)||o===0&&so(t,n,i)||a===0&&so(t,e,i))}function so(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ro(n){return n>0?1:n<0?-1:0}function pp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&pd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sr(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function mp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function md(n,e){const t=Bl(n.i,n.x,n.y),i=Bl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Lu(n,e,t,i){const s=Bl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class _p{static triangulate(e,t,i=2){return ep(e,t,i)}}class Yi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Du(e),Iu(i,e);let o=e.length;t.forEach(Du);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Iu(i,t[c]);const a=_p.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Du(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Iu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class zs extends Bt{constructor(e=new Pr([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:xp;let w,v=!1,T,y,A,_;if(p){w=p.getSpacedPoints(u),v=!0,h=!1;const K=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,K),y=new P,A=new P,_=new P}h||(m=0,d=0,g=0,M=0);const E=a.extractPoints(l);let R=E.shape;const L=E.holes;if(!Yi.isClockWise(R)){R=R.reverse();for(let K=0,ae=L.length;K<ae;K++){const U=L[K];Yi.isClockWise(U)&&(L[K]=U.reverse())}}function B(K){const U=10000000000000001e-36;let q=K[0];for(let ce=1;ce<=K.length;ce++){const X=ce%K.length,ue=K[X],be=ue.x-q.x,Le=ue.y-q.y,D=be*be+Le*Le,We=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(q.x),Math.abs(q.y)),Ue=U*We*We;if(D<=Ue){K.splice(X,1),ce--;continue}q=ue}}B(R),L.forEach(B);const I=L.length,O=R;for(let K=0;K<I;K++){const ae=L[K];R=R.concat(ae)}function W(K,ae,U){return ae||ct("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ae,U)}const F=R.length;function te(K,ae,U){let q,ce,X;const ue=K.x-ae.x,be=K.y-ae.y,Le=U.x-K.x,D=U.y-K.y,We=ue*ue+be*be,Ue=ue*D-be*Le;if(Math.abs(Ue)>Number.EPSILON){const C=Math.sqrt(We),x=Math.sqrt(Le*Le+D*D),Y=ae.x-be/C,j=ae.y+ue/C,re=U.x-D/x,Me=U.y+Le/x,ye=((re-Y)*D-(Me-j)*Le)/(ue*D-be*Le);q=Y+ue*ye-K.x,ce=j+be*ye-K.y;const le=q*q+ce*ce;if(le<=2)return new ve(q,ce);X=Math.sqrt(le/2)}else{let C=!1;ue>Number.EPSILON?Le>Number.EPSILON&&(C=!0):ue<-Number.EPSILON?Le<-Number.EPSILON&&(C=!0):Math.sign(be)===Math.sign(D)&&(C=!0),C?(q=-be,ce=ue,X=Math.sqrt(We)):(q=ue,ce=be,X=Math.sqrt(We/2))}return new ve(q/X,ce/X)}const H=[];for(let K=0,ae=O.length,U=ae-1,q=K+1;K<ae;K++,U++,q++)U===ae&&(U=0),q===ae&&(q=0),H[K]=te(O[K],O[U],O[q]);const J=[];let ne,ge=H.concat();for(let K=0,ae=I;K<ae;K++){const U=L[K];ne=[];for(let q=0,ce=U.length,X=ce-1,ue=q+1;q<ce;q++,X++,ue++)X===ce&&(X=0),ue===ce&&(ue=0),ne[q]=te(U[q],U[X],U[ue]);J.push(ne),ge=ge.concat(ne)}let xe;if(m===0)xe=Yi.triangulateShape(O,L);else{const K=[],ae=[];for(let U=0;U<m;U++){const q=U/m,ce=d*Math.cos(q*Math.PI/2),X=g*Math.sin(q*Math.PI/2)+M;for(let ue=0,be=O.length;ue<be;ue++){const Le=W(O[ue],H[ue],X);pe(Le.x,Le.y,-ce),q===0&&K.push(Le)}for(let ue=0,be=I;ue<be;ue++){const Le=L[ue];ne=J[ue];const D=[];for(let We=0,Ue=Le.length;We<Ue;We++){const C=W(Le[We],ne[We],X);pe(C.x,C.y,-ce),q===0&&D.push(C)}q===0&&ae.push(D)}}xe=Yi.triangulateShape(K,ae)}const Ie=xe.length,Be=g+M;for(let K=0;K<F;K++){const ae=h?W(R[K],ge[K],Be):R[K];v?(A.copy(T.normals[0]).multiplyScalar(ae.x),y.copy(T.binormals[0]).multiplyScalar(ae.y),_.copy(w[0]).add(A).add(y),pe(_.x,_.y,_.z)):pe(ae.x,ae.y,0)}for(let K=1;K<=u;K++)for(let ae=0;ae<F;ae++){const U=h?W(R[ae],ge[ae],Be):R[ae];v?(A.copy(T.normals[K]).multiplyScalar(U.x),y.copy(T.binormals[K]).multiplyScalar(U.y),_.copy(w[K]).add(A).add(y),pe(_.x,_.y,_.z)):pe(U.x,U.y,f/u*K)}for(let K=m-1;K>=0;K--){const ae=K/m,U=d*Math.cos(ae*Math.PI/2),q=g*Math.sin(ae*Math.PI/2)+M;for(let ce=0,X=O.length;ce<X;ce++){const ue=W(O[ce],H[ce],q);pe(ue.x,ue.y,f+U)}for(let ce=0,X=L.length;ce<X;ce++){const ue=L[ce];ne=J[ce];for(let be=0,Le=ue.length;be<Le;be++){const D=W(ue[be],ne[be],q);v?pe(D.x,D.y+w[u-1].y,w[u-1].x+U):pe(D.x,D.y,f+U)}}}me(),Z();function me(){const K=s.length/3;if(h){let ae=0,U=F*ae;for(let q=0;q<Ie;q++){const ce=xe[q];se(ce[2]+U,ce[1]+U,ce[0]+U)}ae=u+m*2,U=F*ae;for(let q=0;q<Ie;q++){const ce=xe[q];se(ce[0]+U,ce[1]+U,ce[2]+U)}}else{for(let ae=0;ae<Ie;ae++){const U=xe[ae];se(U[2],U[1],U[0])}for(let ae=0;ae<Ie;ae++){const U=xe[ae];se(U[0]+F*u,U[1]+F*u,U[2]+F*u)}}i.addGroup(K,s.length/3-K,0)}function Z(){const K=s.length/3;let ae=0;ee(O,ae),ae+=O.length;for(let U=0,q=L.length;U<q;U++){const ce=L[U];ee(ce,ae),ae+=ce.length}i.addGroup(K,s.length/3-K,1)}function ee(K,ae){let U=K.length;for(;--U>=0;){const q=U;let ce=U-1;ce<0&&(ce=K.length-1);for(let X=0,ue=u+m*2;X<ue;X++){const be=F*X,Le=F*(X+1),D=ae+q+be,We=ae+ce+be,Ue=ae+ce+Le,C=ae+q+Le;k(D,We,Ue,C)}}}function pe(K,ae,U){c.push(K),c.push(ae),c.push(U)}function se(K,ae,U){V(K),V(ae),V(U);const q=s.length/3,ce=S.generateTopUV(i,s,q-3,q-2,q-1);oe(ce[0]),oe(ce[1]),oe(ce[2])}function k(K,ae,U,q){V(K),V(ae),V(q),V(ae),V(U),V(q);const ce=s.length/3,X=S.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);oe(X[0]),oe(X[1]),oe(X[3]),oe(X[1]),oe(X[2]),oe(X[3])}function V(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function oe(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new oa[s.type]().fromJSON(s)),new zs(i,e.options)}}const xp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new ve(r,o),new ve(a,c),new ve(l,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ve(o,1-c),new ve(l,1-f),new ve(h,1-g),new ve(M,1-p)]:[new ve(a,1-c),new ve(u,1-f),new ve(d,1-g),new ve(m,1-p)]}};function vp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Lr extends wa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lr(e.radius,e.detail)}}class ns extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=e/a,h=t/c,d=[],g=[],M=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let w=0;w<l;w++){const v=w*f-r;g.push(v,-S,0),M.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const w=S+l*p,v=S+l*(p+1),T=S+1+l*(p+1),y=S+1+l*p;d.push(w,v,y),d.push(v,T,y)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ra extends Bt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new P,h=new P,d=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){const S=[],w=p/i,v=o+w*a,T=e*Math.cos(v),y=Math.sqrt(e*e-T*T);let A=0;p===0&&o===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){const E=_/t,R=s+E*r;f.x=-y*Math.cos(R),f.y=T,f.z=y*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(E+A,1-w),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const w=u[p][S+1],v=u[p][S],T=u[p+1][S],y=u[p+1][S+1];(p!==0||o>0)&&d.push(w,v,y),(p!==i-1||c<Math.PI)&&d.push(v,T,y)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ca extends Bt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new P,d=new P,g=new P;for(let M=0;M<=i;M++){const m=o+M/i*a;for(let p=0;p<=s;p++){const S=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,S=(s+1)*(M-1)+m-1,w=(s+1)*(M-1)+m,v=(s+1)*M+m;c.push(p,S,v),c.push(S,w,v)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Pa extends Bt{constructor(e=new Ec(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new ve;let u=new P;const f=[],h=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function M(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),S(),p()}function m(w){u=e.getPointAt(w/t,u);const v=o.normals[w],T=o.binormals[w];for(let y=0;y<=s;y++){const A=y/s*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);c.x=E*v.x+_*T.x,c.y=E*v.y+_*T.y,c.z=E*v.z+_*T.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=t;w++)for(let v=1;v<=s;v++){const T=(s+1)*(w-1)+(v-1),y=(s+1)*w+(v-1),A=(s+1)*w+v,_=(s+1)*(w-1)+v;g.push(T,y,_),g.push(y,A,_)}}function S(){for(let w=0;w<=t;w++)for(let v=0;v<=s;v++)l.x=w/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Pa(new oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Nu(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Nu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function Nu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const _d={clone:Fs,merge:rn};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xd extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ys extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vd extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Md extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class La extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Sd extends La{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pl=new ht,Uu=new P,Fu=new P;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(pl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oo=new P,ao=new gi,$n=new P;class Ac extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,ao,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oo,ao,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new P,Ou=new ve,Bu=new ve;class _n extends Ac{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ou,Bu),t.subVectors(Bu,Ou)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bp extends wc{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Da extends La{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dr extends Ac{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ep extends wc{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Ep}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const _s=-90,xs=1;class yd extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(_s,xs,e,t);s.layers=this.layers,this.add(s);const r=new _n(_s,xs,e,t);r.layers=this.layers,this.add(r);const o=new _n(_s,xs,e,t);o.layers=this.layers,this.add(o);const a=new _n(_s,xs,e,t);a.layers=this.layers,this.add(a);const c=new _n(_s,xs,e,t);c.layers=this.layers,this.add(c);const l=new _n(_s,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bd extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zu=new ht;class Ed{constructor(e,t,i=0,s=1/0){this.ray=new Ar(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zu),this}intersectObject(e,t=!0,i=[]){return zl(e,this,i,t),i.sort(ku),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zl(e[s],this,i,t);return i.sort(ku),i}}function ku(n,e){return n.distance-e.distance}function zl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],e,t,!0)}}class kl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zc=class Zc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Zc.prototype.isMatrix2=!0;let Gl=Zc;class Td extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gu(n,e,t,i){const s=Tp(i);switch(t){case lc:return n*e;case ma:return n*e/s.components*s.byteLength;case ga:return n*e/s.components*s.byteLength;case Fi:return n*e*2/s.components*s.byteLength;case _a:return n*e*2/s.components*s.byteLength;case cc:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case xa:return n*e*4/s.components*s.byteLength;case or:case ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:case Lo:return Math.max(n,16)*Math.max(e,8)/4;case Ro:case Po:return Math.max(n,8)*Math.max(e,8)/2;case Do:case Io:case Uo:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case mr:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qo:case jo:case ea:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ta:case na:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gr:case ia:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tp(n){switch(n){case hn:case sc:return{byteLength:1,components:1};case Ls:case rc:case qn:return{byteLength:2,components:1};case fa:case pa:return{byteLength:2,components:4};case Xn:case da:case wn:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wd(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];n.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Tm=`uniform sampler2D dfgLUT;
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
}`,wm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,eg=`#define TOON
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
}`,tg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Ip,aomap_pars_fragment:Np,batching_pars_vertex:Up,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:zp,iridescence_fragment:kp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Qp,displacementmap_pars_vertex:jp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:vm,envmap_vertex:cm,fog_vertex:um,fog_pars_vertex:hm,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:_m,lights_pars_begin:xm,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:ym,lights_phong_pars_fragment:bm,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:wm,lights_fragment_maps:Am,lights_fragment_end:Rm,lightprobes_pars_fragment:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Im,map_fragment:Nm,map_pars_fragment:Um,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:Zm,normal_vertex:Jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:e0,opaque_fragment:t0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:u0,shadowmap_vertex:h0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:v0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:y0,uv_pars_fragment:b0,uv_pars_vertex:E0,uv_vertex:T0,worldpos_vertex:w0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:L0,cube_frag:D0,depth_vert:I0,depth_frag:N0,distance_vert:U0,distance_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:H0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:Z0,meshphong_vert:J0,meshphong_frag:K0,meshphysical_vert:$0,meshphysical_frag:Q0,meshtoon_vert:j0,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},Re={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zn={basic:{uniforms:rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:rn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:rn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:rn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ot(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:rn([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:rn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:rn([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:rn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:rn([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:rn([Re.common,Re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:rn([Re.lights,Re.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};zn.physical={uniforms:rn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const lo={r:0,b:0,g:0},ag=new ht,Ad=new Qe;Ad.set(-1,0,0,0,1,0,0,0,1);function lg(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const v=S.backgroundBlurriness>0;w=e.get(w,v)}return w}function g(S){let w=!1;const v=d(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(S,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===wr)?(l===void 0&&(l=new ln(new vi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Fs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ad),l.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,(u!==v||f!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ln(new ns(2,2),new Ln({name:"BackgroundMaterial",uniforms:Fs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(lo,gd(n)),t.buffers.color.setClear(lo.r,lo.g,lo.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:M,dispose:p}}function cg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(L,N,B,I,O){let W=!1;const F=f(L,I,B,N);r!==F&&(r=F,l(r.object)),W=d(L,I,B,O),W&&g(L,I,B,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(L,N,B,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,N,B,I){const O=I.wireframe===!0;let W=i[N.id];W===void 0&&(W={},i[N.id]=W);const F=L.isInstancedMesh===!0?L.id:0;let te=W[F];te===void 0&&(te={},W[F]=te);let H=te[B.id];H===void 0&&(H={},te[B.id]=H);let J=H[O];return J===void 0&&(J=h(c()),H[O]=J),J}function h(L){const N=[],B=[],I=[];for(let O=0;O<t;O++)N[O]=0,B[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,N,B,I){const O=r.attributes,W=N.attributes;let F=0;const te=B.getAttributes();for(const H in te)if(te[H].location>=0){const ne=O[H];let ge=W[H];if(ge===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function g(L,N,B,I){const O={},W=N.attributes;let F=0;const te=B.getAttributes();for(const H in te)if(te[H].location>=0){let ne=W[H];ne===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),O[H]=ge,F++}r.attributes=O,r.attributesNum=F,r.index=I}function M(){const L=r.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function m(L){p(L,0)}function p(L,N){const B=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;B[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),O[L]!==N&&(n.vertexAttribDivisor(L,N),O[L]=N)}function S(){const L=r.newAttributes,N=r.enabledAttributes;for(let B=0,I=N.length;B<I;B++)N[B]!==L[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function w(L,N,B,I,O,W,F){F===!0?n.vertexAttribIPointer(L,N,B,O,W):n.vertexAttribPointer(L,N,B,I,O,W)}function v(L,N,B,I){M();const O=I.attributes,W=B.getAttributes(),F=N.defaultAttributeValues;for(const te in W){const H=W[te];if(H.location>=0){let J=O[te];if(J===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ne=J.normalized,ge=J.itemSize,xe=e.get(J);if(xe===void 0)continue;const Ie=xe.buffer,Be=xe.type,me=xe.bytesPerElement,Z=Be===n.INT||Be===n.UNSIGNED_INT||J.gpuType===da;if(J.isInterleavedBufferAttribute){const ee=J.data,pe=ee.stride,se=J.offset;if(ee.isInstancedInterleavedBuffer){for(let k=0;k<H.locationSize;k++)p(H.location+k,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let k=0;k<H.locationSize;k++)m(H.location+k);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let k=0;k<H.locationSize;k++)w(H.location+k,ge/H.locationSize,Be,ne,pe*me,(se+ge/H.locationSize*k)*me,Z)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)p(H.location+ee,J.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ee=0;ee<H.locationSize;ee++)w(H.location+ee,ge/H.locationSize,Be,ne,ge*me,ge/H.locationSize*ee*me,Z)}}else if(F!==void 0){const ne=F[te];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(H.location,ne);break;case 3:n.vertexAttrib3fv(H.location,ne);break;case 4:n.vertexAttrib4fv(H.location,ne);break;default:n.vertexAttrib1fv(H.location,ne)}}}}S()}function T(){E();for(const L in i){const N=i[L];for(const B in N){const I=N[B];for(const O in I){const W=I[O];for(const F in W)u(W[F].object),delete W[F];delete I[O]}}delete i[L]}}function y(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const B in N){const I=N[B];for(const O in I){const W=I[O];for(const F in W)u(W[F].object),delete W[F];delete I[O]}}delete i[L.id]}function A(L){for(const N in i){const B=i[N];for(const I in B){const O=B[I];if(O[L.id]===void 0)continue;const W=O[L.id];for(const F in W)u(W[F].object),delete W[F];delete O[L.id]}}}function _(L){for(const N in i){const B=i[N],I=L.isInstancedMesh===!0?L.id:0,O=B[I];if(O!==void 0){for(const W in O){const F=O[W];for(const te in F)u(F[te].object),delete F[te];delete O[W]}delete B[I],Object.keys(B).length===0&&delete i[N]}}}function E(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function ug(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==An&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hn&&A!==wn&&!_&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:y}}function dg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ei,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:i,w=S*4;let v=p.clippingState||null;c.value=v,v=u(g,h,w,d);for(let T=0;T!==w;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=d+M*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=d;w!==M;++w,v+=4)o.copy(f[w]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const bs=4,fg=6,pg=20,mg=256,Qs=new Dr,Vu=new ot;let ml=null,gl=0,_l=0,xl=!1;const gg=new P,Hi=new P;class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=gg}=r;ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,_l),this._renderer.xr.enabled=xl,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:qn,format:An,colorSpace:_r,depthBuffer:!1},s=Hu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_g(r)),this._blurMaterial=vg(r,e,t),this._ggxMaterial=xg(r,e,t)}return s}_compileMaterial(e){const t=new ln(new Bt,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,i,s,r){const c=new _n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vu),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new vi,new Rr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Vu),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));const T=this._cubeSize;vs(s,v*T,w>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(M,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ui||e.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;vs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-bs?i-g+bs:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=g-t,vs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(a,Qs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,vs(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(a,Qs)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-bs?s-this._lodMax+bs:0),h=4*(this._cubeSize-u);vs(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(c,Qs)}}function _g(n){const e=[],t=[];let i=n;const s=n-bs+1+fg;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let p=0;p<f;p++){const S=p%3*2/3-1,w=p>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(v,d*h*p);for(let T=0;T<h;T++){const y=u[T*2]*2-1,A=u[T*2+1]*2-1;p===0?Hi.set(1,A,y):p===1?Hi.set(-y,1,-A):p===2?Hi.set(-y,A,1):p===3?Hi.set(-1,A,-y):p===4?Hi.set(-y,-1,A):Hi.set(y,A,-1),Hi.toArray(M,(p*h+T)*d)}}const m=new Bt;m.setAttribute("position",new Cn(g,d)),m.setAttribute("outputDirection",new Cn(M,d)),t.push(new ln(m,null)),i>bs&&i--}return{lodMeshes:t,sizeLods:e}}function Hu(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xg(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function vg(n,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:pg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Wu(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xu(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cc extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new gc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ii});r.uniforms.tEquirect.value=t;const o=new ln(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Yt),new yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Mg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===fo||d===po)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const M=new Cc(g.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",l),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,g=d===fo||d===po,M=d===Ui||d===Ji;if(g||M){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Vl(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||M&&S&&c(S)?(i===null&&(i=new Vl(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===fo?h.mapping=Ui:d===po&&(h.mapping=Ji),h}function c(h){let d=0;const g=6;for(let M=0;M<g;M++)h[M]!==void 0&&d++;return d===g}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zi("WebGLRenderer: "+i+" extension not supported."),s}}}function yg(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,g=f.attributes.position;let M=0;if(g===void 0)return;if(d!==null){const S=d.array;M=d.version;for(let w=0,v=S.length;w<v;w+=3){const T=S[w+0],y=S[w+1],A=S[w+2];h.push(T,y,y,A,A,T)}}else{const S=g.array;M=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){const T=w+0,y=w+1,A=w+2;h.push(T,y,y,A,A,T)}}const m=new(g.count>=65535?fc:dc)(h,1);m.version=M;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function bg(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function l(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*o,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Eg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Tg(n,e,t){const i=new WeakMap,s=new At;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let R=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var d=R;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),M===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,y=1;T>e.maxTextureSize&&(y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*y*4*f),_=new hc(A,T,y,f);_.type=wn,_.needsUpdate=!0;const E=v*4;for(let L=0;L<f;L++){const N=p[L],B=S[L],I=w[L],O=T*y*4*L;for(let W=0;W<N.count;W++){const F=W*E;g===!0&&(s.fromBufferAttribute(N,W),A[O+F+0]=s.x,A[O+F+1]=s.y,A[O+F+2]=s.z,A[O+F+3]=0),M===!0&&(s.fromBufferAttribute(B,W),A[O+F+4]=s.x,A[O+F+5]=s.y,A[O+F+6]=s.z,A[O+F+7]=0),m===!0&&(s.fromBufferAttribute(I,W),A[O+F+8]=s.x,A[O+F+9]=s.y,A[O+F+10]=s.z,A[O+F+11]=I.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new ve(T,y)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function wg(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Ag={[$l]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function Rg(n,e,t,i,s,r){const o=new Rn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Bt;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));const u=new xd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ln(l,u),h=new Dr(-1,1,1,-1,0,1);let d=null,g=null,M=!1,m,p=null,S=[],w=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),c!==null&&c.setSize(v,T);for(let y=0;y<S.length;y++){const A=S[y];A.setSize&&A.setSize(v,T)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;const T=o.width,y=o.height;S.length>0&&a===null&&(a=new Rn(T,y,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new Rn(T,y,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const _=S[A];_.setSize&&_.setSize(T,y)}},this.begin=function(v,T){if(M||v.toneMapping===Vn&&S.length===0)return!1;if(p=T,T!==null){const y=T.width,A=T.height;(o.width!==y||o.height!==A)&&this.setSize(y,A)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,M=!0;let y=o,A=a;for(let _=0;_<S.length;_++){const E=S[_];E.enabled!==!1&&(E.render(v,A,y,T),E.needsSwap!==!1&&(y=A,A=A===a?c:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,u.defines={},lt.getTransfer(d)===mt&&(u.defines.SRGB_TRANSFER="");const _=Ag[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(p),v.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Rd=new Zt,Hl=new Ns(1,1),Cd=new hc,Pd=new id,Ld=new gc,qu=[],Yu=[],Zu=new Float32Array(16),Ju=new Float32Array(9),Ku=new Float32Array(4);function ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Na(n,e){let t=Yu[e];t===void 0&&(t=new Int32Array(e),Yu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function Ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,i))return;Ku.set(i),n.uniformMatrix2fv(this.addr,!1,Ku),Ht(t,i)}}function Ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,i))return;Ju.set(i),n.uniformMatrix3fv(this.addr,!1,Ju),Ht(t,i)}}function Ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,i))return;Zu.set(i),n.uniformMatrix4fv(this.addr,!1,Zu),Ht(t,i)}}function Fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function Wg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Hl.compareFunction=t.isReversedDepthBuffer()?Ma:va,r=Hl):r=Rd,t.setTexture2D(e||r,s)}function Xg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pd,s)}function qg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ld,s)}function Yg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cd,s)}function Zg(n){switch(n){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Jg(n,e){n.uniform1fv(this.addr,e)}function Kg(n,e){const t=ks(e,this.size,2);n.uniform2fv(this.addr,t)}function $g(n,e){const t=ks(e,this.size,3);n.uniform3fv(this.addr,t)}function Qg(n,e){const t=ks(e,this.size,4);n.uniform4fv(this.addr,t)}function jg(n,e){const t=ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function e_(n,e){const t=ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function t_(n,e){const t=ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function n_(n,e){n.uniform1iv(this.addr,e)}function i_(n,e){n.uniform2iv(this.addr,e)}function s_(n,e){n.uniform3iv(this.addr,e)}function r_(n,e){n.uniform4iv(this.addr,e)}function o_(n,e){n.uniform1uiv(this.addr,e)}function a_(n,e){n.uniform2uiv(this.addr,e)}function l_(n,e){n.uniform3uiv(this.addr,e)}function c_(n,e){n.uniform4uiv(this.addr,e)}function u_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Hl:o=Rd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function h_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pd,r[o])}function d_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ld,r[o])}function f_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function p_(n){switch(n){case 5126:return Jg;case 35664:return Kg;case 35665:return $g;case 35666:return Qg;case 35674:return jg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Zg(t.type)}}class g_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}}class __{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function $u(n,e){n.seq.push(e),n.map[e.id]=e}function x_(n,e,t){const i=n.name,s=i.length;for(vl.lastIndex=0;;){const r=vl.exec(i),o=vl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$u(t,l===void 0?new m_(a,n,e):new g_(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new __(a),$u(t,f)),t=f}}}class xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);x_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Qu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const v_=37297;let M_=0;function S_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ju=new Qe;function y_(n){lt._getMatrix(ju,lt.workingColorSpace,n);const e=`mat3( ${ju.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case xr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function eh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+S_(n.getShaderSource(e),a)}else return r}function b_(n,e){const t=y_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const E_={[$l]:"Linear",[Ql]:"Reinhard",[jl]:"Cineon",[ha]:"ACESFilmic",[tc]:"AgX",[nc]:"Neutral",[ec]:"Custom"};function T_(n,e){const t=E_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new P;function w_(){lt.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function R_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sr(n){return n!==""}function th(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(n){return n.replace(P_,D_)}const L_=new Map;function D_(n,e){let t=nt[e];if(t===void 0){const i=L_.get(e);if(i!==void 0)t=nt[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wl(t)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(n){return n.replace(I_,N_)}function N_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const U_={[Es]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function F_(n){return U_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const O_={[Ui]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function B_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":O_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const z_={[Ji]:"ENVMAP_MODE_REFRACTION"};function k_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G_={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[kh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function V_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":G_[n.combine]||"ENVMAP_BLENDING_NONE"}function H_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function W_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=F_(t),l=B_(t),u=k_(t),f=V_(t),h=H_(t),d=A_(t),g=R_(r),M=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),w_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Wl(o),o=th(o,t),o=nh(o,t),a=Wl(a),a=th(a,t),a=nh(a,t),o=ih(o),a=ih(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+o,v=S+p+a,T=Qu(s,s.VERTEX_SHADER,w),y=Qu(s,s.FRAGMENT_SHADER,v);s.attachShader(M,T),s.attachShader(M,y),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(L){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(y)||"",O=N.trim(),W=B.trim(),F=I.trim();let te=!0,H=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,y);else{const J=eh(s,T,"vertex"),ne=eh(s,y,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+J+`
`+ne)}else O!==""?Ke("WebGLProgram: Program Info Log:",O):(W===""||F==="")&&(H=!1);H&&(L.diagnostics={runnable:te,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(y),_=new xo(s,M),E=C_(s,M)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,v_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=y,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Y_(e),t.set(e,i)),i}}class Y_{constructor(e){this.id=X_++,this.code=e,this.usedTimes=0}}function Z_(n){return n===Fi||n===mr||n===gr}function J_(n,e,t,i,s,r){const o=new ya,a=new q_,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,E,R,L,N,B){const I=L.fog,O=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||W,F),H=te&&te.mapping===wr?te.image.height:null,J=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ge=ne!==void 0?ne.length:0;let xe=0;O.morphAttributes.position!==void 0&&(xe=1),O.morphAttributes.normal!==void 0&&(xe=2),O.morphAttributes.color!==void 0&&(xe=3);let Ie,Be,me,Z;if(J){const bt=zn[J];Ie=bt.vertexShader,Be=bt.fragmentShader}else{Ie=_.vertexShader,Be=_.fragmentShader;const bt=a.getVertexShaderStage(_),ft=a.getFragmentShaderStage(_);a.update(_,bt,ft),me=bt.id,Z=ft.id}const ee=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),se=N.isInstancedMesh===!0,k=N.isBatchedMesh===!0,V=!!_.map,oe=!!_.matcap,K=!!te,ae=!!_.aoMap,U=!!_.lightMap,q=!!_.bumpMap&&_.wireframe===!1,ce=!!_.normalMap,X=!!_.displacementMap,ue=!!_.emissiveMap,be=!!_.metalnessMap,Le=!!_.roughnessMap,D=_.anisotropy>0,We=_.clearcoat>0,Ue=_.dispersion>0,C=_.retroreflectivity>0,x=_.iridescence>0,Y=_.sheen>0,j=_.transmission>0,re=D&&!!_.anisotropyMap,Me=We&&!!_.clearcoatMap,ye=We&&!!_.clearcoatNormalMap,le=We&&!!_.clearcoatRoughnessMap,fe=x&&!!_.iridescenceMap,Ee=x&&!!_.iridescenceThicknessMap,Xe=Y&&!!_.sheenColorMap,Ce=Y&&!!_.sheenRoughnessMap,Te=!!_.specularMap,qe=!!_.specularColorMap,Je=!!_.specularIntensityMap,tt=j&&!!_.transmissionMap,G=j&&!!_.thicknessMap,we=!!_.gradientMap,de=!!_.alphaMap,Ae=_.alphaTest>0,Ne=!!_.alphaHash,_e=!!_.extensions;let Ze=Vn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Ve={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:Be,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:k,batchingColor:k&&N._colorsTexture!==null,instancing:se,instancingColor:se&&N.instanceColor!==null,instancingMorph:se&&N.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:V,matcap:oe,envMap:K,envMapMode:K&&te.mapping,envMapCubeUVHeight:H,aoMap:ae,lightMap:U,bumpMap:q,normalMap:ce,displacementMap:X,emissiveMap:ue,normalMapObjectSpace:ce&&_.normalMapType===Wh,normalMapTangentSpace:ce&&_.normalMapType===sa,packedNormalMap:ce&&_.normalMapType===sa&&Z_(_.normalMap.format),metalnessMap:be,roughnessMap:Le,anisotropy:D,anisotropyMap:re,clearcoat:We,clearcoatMap:Me,clearcoatNormalMap:ye,clearcoatRoughnessMap:le,dispersion:Ue,retroreflection:C,iridescence:x,iridescenceMap:fe,iridescenceThicknessMap:Ee,sheen:Y,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:qe,specularIntensityMap:Je,transmission:j,transmissionMap:tt,thicknessMap:G,gradientMap:we,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:Ae,alphaHash:Ne,combine:_.combine,mapUv:V&&g(_.map.channel),aoMapUv:ae&&g(_.aoMap.channel),lightMapUv:U&&g(_.lightMap.channel),bumpMapUv:q&&g(_.bumpMap.channel),normalMapUv:ce&&g(_.normalMap.channel),displacementMapUv:X&&g(_.displacementMap.channel),emissiveMapUv:ue&&g(_.emissiveMap.channel),metalnessMapUv:be&&g(_.metalnessMap.channel),roughnessMapUv:Le&&g(_.roughnessMap.channel),anisotropyMapUv:re&&g(_.anisotropyMap.channel),clearcoatMapUv:Me&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(_.sheenRoughnessMap.channel),specularMapUv:Te&&g(_.specularMap.channel),specularColorMapUv:qe&&g(_.specularColorMap.channel),specularIntensityMapUv:Je&&g(_.specularIntensityMap.channel),transmissionMapUv:tt&&g(_.transmissionMap.channel),thicknessMapUv:G&&g(_.thicknessMap.channel),alphaMapUv:de&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(V||de),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:xe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:V&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||k)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(E,_),S(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const E=d[_.type];let R;if(E){const L=zn[E];R=_d.clone(L.uniforms)}else R=_.uniforms;return R}function v(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new W_(n,E,_,s),l.push(R),u.set(E,R)),R}function T(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function y(_){a.remove(_)}function A(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:y,programs:l,dispose:A}}function K_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function $_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function oh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,M,m,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=o(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function c(h,d,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);const w=a(h,d,g,M,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function l(h,d,g,M,m,p){const S=a(h,d,g,M,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,d){t.length>1&&t.sort(h||$_),i.length>1&&i.sort(d||rh),s.length>1&&s.sort(d||rh)}function f(){for(let h=e,d=n.length;h<d;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Q_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new oh,n.set(i,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function j_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ot};break;case"SpotLight":t={position:new P,direction:new P,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function ex(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tx=0;function nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ix(n){const e=new j_,t=ex(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new ht,o=new ht;function a(l){let u=0,f=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,S=0,w=0,v=0,T=0,y=0,A=0,_=0,E=0,R=0;l.sort(nx);for(let N=0,B=l.length;N<B;N++){const I=l[N],O=I.color,W=I.intensity,F=I.distance;let te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Fi?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=O.r*W,f+=O.g*W,h+=O.b*W;else if(I.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],W);R++}else if(I.isSunLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,ne=t.get(I);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=te;const ge=J.getViewportCount();for(let xe=0;xe<ge;xe++)i.sunShadowMatrix[M+xe]=J.getMatrix(xe),i.sunShadowCascade[M+xe]=J._cascadeData[xe];M+=ge,g++}i.sun[d]=H,d++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,ne=t.get(I);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=H,m++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(O).multiplyScalar(W),H.distance=F,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[S]=H;const J=I.shadow;if(I.map&&(i.spotLightMap[_]=I.map,_++,J.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[S]=J.matrix,I.castShadow){const ne=t.get(I);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=te,A++}S++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(O).multiplyScalar(W),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=H,w++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const J=I.shadow,ne=t.get(I);ne.shadowIntensity=J.intensity,ne.shadowBias=J.bias,ne.shadowNormalBias=J.normalBias,ne.shadowRadius=J.radius,ne.shadowMapSize=J.mapSize,ne.shadowCameraNear=J.camera.near,ne.shadowCameraFar=J.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=H,p++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(W),H.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[v]=H,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==T||L.numPointShadows!==y||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=S,i.rectArea.length=w,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=T,L.numPointShadows=y,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=R,i.version=tx++)}function c(l,u){let f=0,h=0,d=0,g=0,M=0,m=0;const p=u.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const v=l[S];if(v.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(v.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function ah(n){const e=new ix(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function sx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ah(n),e.set(s,[a])):r>=o.length?(a=new ah(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`,ax=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],lx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],lh=new ht,js=new P,Ml=new P;function cx(n,e,t){let i=new Ea;const s=new ve,r=new ve,o=new At,a=new vd,c=new Md,l={},u=t.maxTextureSize,f={[Ni]:an,[an]:Ni,[En]:En},h=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ln(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let p=this.type;this.render=function(y,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===Sh&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);const E=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ii),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==this.type;B&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=y.length;I<O;I++){const W=y[I],F=W.shadow;if(F===void 0){Ke("WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const te=F.getFrameExtents();s.multiply(te),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,F.mapSize.y=r.y));const H=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ss){if(W.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Rn(s.x,s.y,{format:Fi,type:qn,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),F.map.texture.name=W.name+".shadowMap",F.map.depthTexture=new Ns(s.x,s.y,wn),F.map.depthTexture.name=W.name+".shadowMapDepth",F.map.depthTexture.format=si,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt}else W.isPointLight?(F.map=new Cc(s.x),F.map.depthTexture=new ad(s.x,Xn)):(F.map=new Rn(s.x,s.y),F.map.depthTexture=new Ns(s.x,s.y,Xn)),F.map.depthTexture.name=W.name+".shadowMap",F.map.depthTexture.format=si,this.type===Es?(F.map.depthTexture.compareFunction=H?Ma:va,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const J=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();W.isPointLight!==!0&&F.updateMatrices(W,_);for(let ne=0;ne<J;ne++){const ge=F.getCamera(ne);if(W.isPointLight){const xe=F.camera,Ie=F.matrix,Be=W.distance||xe.far;Be!==xe.far&&(xe.far=Be,xe.updateProjectionMatrix()),js.setFromMatrixPosition(W.matrixWorld),xe.position.copy(js),Ml.copy(xe.position),Ml.add(ax[ne]),xe.up.copy(lx[ne]),xe.lookAt(Ml),xe.updateMatrixWorld(),Ie.makeTranslation(-js.x,-js.y,-js.z),lh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(lh,xe.coordinateSystem,xe.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ne),n.clear();else{ne===0&&(n.setRenderTarget(F.map),n.clear());const xe=F.getViewport(ne);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),N.viewport(o)}i=F.getFrustum(ne),v(A,_,ge,W,this.type)}F.isPointLightShadow!==!0&&this.type===Ss&&S(F,_),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,R,L)};function S(y,A){const _=e.update(M);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new Rn(s.x,s.y,{format:Fi,type:qn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,_,h,M,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,_,d,M,null)}function w(y,A,_,E){let R=null;const L=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,B=A.uuid;let I=l[N];I===void 0&&(I={},l[N]=I);let O=I[B];O===void 0&&(O=R.clone(),I[B]=O,A.addEventListener("dispose",T)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Ss?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=n.properties.get(R);N.light=_}return R}function v(y,A,_,E,R){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&R===Ss)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const B=e.update(y),I=y.material;if(Array.isArray(I)){const O=B.groups;for(let W=0,F=O.length;W<F;W++){const te=O[W],H=I[te.materialIndex];if(H&&H.visible){const J=w(y,H,E,R);y.onBeforeShadow(n,y,A,_,B,J,te),n.renderBufferDirect(_,null,B,J,y,te),y.onAfterShadow(n,y,A,_,B,J,te)}}}else if(I.visible){const O=w(y,I,E,R);y.onBeforeShadow(n,y,A,_,B,O,null),n.renderBufferDirect(_,null,B,O,y,null),y.onAfterShadow(n,y,A,_,B,O,null)}}const N=y.children;for(let B=0,I=N.length;B<I;B++)v(N[B],A,_,E,R)}function T(y){y.target.removeEventListener("dispose",T);for(const _ in l){const E=l[_],R=y.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function ux(n,e){function t(){let G=!1;const we=new At;let de=null;const Ae=new At(0,0,0,0);return{setMask:function(Ne){de!==Ne&&!G&&(n.colorMask(Ne,Ne,Ne,Ne),de=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,_e,Ze,Ve,bt){bt===!0&&(Ne*=Ve,_e*=Ve,Ze*=Ve),we.set(Ne,_e,Ze,Ve),Ae.equals(we)===!1&&(n.clearColor(Ne,_e,Ze,Ve),Ae.copy(we))},reset:function(){G=!1,de=null,Ae.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,de=null,Ae=null,Ne=null;return{setReversed:function(_e){if(we!==_e){const Ze=e.get("EXT_clip_control");_e?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),we=_e;const Ve=Ne;Ne=null,this.setClear(Ve)}},getReversed:function(){return we},setTest:function(_e){_e?ee(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(_e){de!==_e&&!G&&(n.depthMask(_e),de=_e)},setFunc:function(_e){if(we&&(_e=hf[_e]),Ae!==_e){switch(_e){case Mo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case yo:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case bo:n.depthFunc(n.EQUAL);break;case Eo:n.depthFunc(n.GEQUAL);break;case To:n.depthFunc(n.GREATER);break;case wo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=_e}},setLocked:function(_e){G=_e},setClear:function(_e){Ne!==_e&&(Ne=_e,we&&(_e=1-_e),n.clearDepth(_e))},reset:function(){G=!1,de=null,Ae=null,Ne=null,we=!1}}}function s(){let G=!1,we=null,de=null,Ae=null,Ne=null,_e=null,Ze=null,Ve=null,bt=null;return{setTest:function(ft){G||(ft?ee(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ft){we!==ft&&!G&&(n.stencilMask(ft),we=ft)},setFunc:function(ft,Nn,Jn){(de!==ft||Ae!==Nn||Ne!==Jn)&&(n.stencilFunc(ft,Nn,Jn),de=ft,Ae=Nn,Ne=Jn)},setOp:function(ft,Nn,Jn){(_e!==ft||Ze!==Nn||Ve!==Jn)&&(n.stencilOp(ft,Nn,Jn),_e=ft,Ze=Nn,Ve=Jn)},setLocked:function(ft){G=ft},setClear:function(ft){bt!==ft&&(n.clearStencil(ft),bt=ft)},reset:function(){G=!1,we=null,de=null,Ae=null,Ne=null,_e=null,Ze=null,Ve=null,bt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,w=null,v=null,T=null,y=null,A=null,_=new ot(0,0,0),E=0,R=!1,L=null,N=null,B=null,I=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,te=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=te>=2);let J=null,ne={};const ge=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),Ie=new At().fromArray(ge),Be=new At().fromArray(xe);function me(G,we,de,Ae){const Ne=new Uint8Array(4),_e=n.createTexture();n.bindTexture(G,_e),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<de;Ze++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(we+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return _e}const Z={};Z[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Ps),q(!1),ce(Al),ee(n.CULL_FACE),ae(ii);function ee(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function pe(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function se(G,we){return h[G]!==we?(n.bindFramebuffer(G,we),h[G]=we,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=we),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=we),!0):!1}function k(G,we){let de=g,Ae=!1;if(G){de=d.get(we),de===void 0&&(de=[],d.set(we,de));const Ne=G.textures;if(de.length!==Ne.length||de[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ze=Ne.length;_e<Ze;_e++)de[_e]=n.COLOR_ATTACHMENT0+_e;de.length=Ne.length,Ae=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(de)}function V(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const oe={[Xi]:n.FUNC_ADD,[bh]:n.FUNC_SUBTRACT,[Eh]:n.FUNC_REVERSE_SUBTRACT};oe[Th]=n.MIN,oe[wh]=n.MAX;const K={[Ah]:n.ZERO,[Rh]:n.ONE,[Ch]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[Uh]:n.SRC_ALPHA_SATURATE,[Ih]:n.DST_COLOR,[Lh]:n.DST_ALPHA,[Ph]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[Nh]:n.ONE_MINUS_DST_COLOR,[Dh]:n.ONE_MINUS_DST_ALPHA,[Fh]:n.CONSTANT_COLOR,[Oh]:n.ONE_MINUS_CONSTANT_COLOR,[Bh]:n.CONSTANT_ALPHA,[zh]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(G,we,de,Ae,Ne,_e,Ze,Ve,bt,ft){if(G===ii){m===!0&&(pe(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),G!==yh){if(G!==p||ft!==R){if((S!==Xi||T!==Xi)&&(n.blendEquation(n.FUNC_ADD),S=Xi,T=Xi),ft)switch(G){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rl:n.blendFunc(n.ONE,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",G);break}else switch(G){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cl:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",G);break}w=null,v=null,y=null,A=null,_.set(0,0,0),E=0,p=G,R=ft}return}Ne=Ne||we,_e=_e||de,Ze=Ze||Ae,(we!==S||Ne!==T)&&(n.blendEquationSeparate(oe[we],oe[Ne]),S=we,T=Ne),(de!==w||Ae!==v||_e!==y||Ze!==A)&&(n.blendFuncSeparate(K[de],K[Ae],K[_e],K[Ze]),w=de,v=Ae,y=_e,A=Ze),(Ve.equals(_)===!1||bt!==E)&&(n.blendColor(Ve.r,Ve.g,Ve.b,bt),_.copy(Ve),E=bt),p=G,R=!1}function U(G,we){G.side===En?pe(n.CULL_FACE):ee(n.CULL_FACE);let de=G.side===an;we&&(de=!de),q(de),G.blending===Ts&&G.transparent===!1?ae(ii):ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ae=G.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(G){L!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),L=G)}function ce(G){G!==vh?(ee(n.CULL_FACE),G!==N&&(G===Al?n.cullFace(n.BACK):G===Mh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),N=G}function X(G){G!==B&&(F&&n.lineWidth(G),B=G)}function ue(G,we,de){G?(ee(n.POLYGON_OFFSET_FILL),(I!==we||O!==de)&&(I=we,O=de,o.getReversed()&&(we=-we),n.polygonOffset(we,de))):pe(n.POLYGON_OFFSET_FILL)}function be(G){G?ee(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Le(G){G===void 0&&(G=n.TEXTURE0+W-1),J!==G&&(n.activeTexture(G),J=G)}function D(G,we,de){de===void 0&&(J===null?de=n.TEXTURE0+W-1:de=J);let Ae=ne[de];Ae===void 0&&(Ae={type:void 0,texture:void 0},ne[de]=Ae),(Ae.type!==G||Ae.texture!==we)&&(J!==de&&(n.activeTexture(de),J=de),n.bindTexture(G,we||Z[G]),Ae.type=G,Ae.texture=we)}function We(){const G=ne[J];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ue(){try{n.compressedTexImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function x(){try{n.texSubImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function Y(){try{n.texSubImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function Me(){try{n.texStorage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function ye(){try{n.texStorage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function le(){try{n.texImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function fe(){try{n.texImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function Ee(G){return f[G]!==void 0?f[G]:n.getParameter(G)}function Xe(G,we){f[G]!==we&&(n.pixelStorei(G,we),f[G]=we)}function Ce(G){Ie.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function Te(G){Be.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Be.copy(G))}function qe(G,we){let de=l.get(we);de===void 0&&(de=new WeakMap,l.set(we,de));let Ae=de.get(G);Ae===void 0&&(Ae=n.getUniformBlockIndex(we,G.name),de.set(G,Ae))}function Je(G,we){const Ae=l.get(we).get(G);c.get(we)!==Ae&&(n.uniformBlockBinding(we,Ae,G.__bindingPointIndex),c.set(we,Ae))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},J=null,ne={},h={},d=new WeakMap,g=[],M=null,m=!1,p=null,S=null,w=null,v=null,T=null,y=null,A=null,_=new ot(0,0,0),E=0,R=!1,L=null,N=null,B=null,I=null,O=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:pe,bindFramebuffer:se,drawBuffers:k,useProgram:V,setBlending:ae,setMaterial:U,setFlipSided:q,setCullFace:ce,setLineWidth:X,setPolygonOffset:ue,setScissorTest:be,activeTexture:Le,bindTexture:D,unbindTexture:We,compressedTexImage2D:Ue,compressedTexImage3D:C,texImage2D:le,texImage3D:fe,pixelStorei:Xe,getParameter:Ee,updateUBOMapping:qe,uniformBlockBinding:Je,texStorage2D:Me,texStorage3D:ye,texSubImage2D:x,texSubImage3D:Y,compressedTexSubImage2D:j,compressedTexSubImage3D:re,scissor:Ce,viewport:Te,reset:tt}}function hx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return g?new OffscreenCanvas(C,x):ra("canvas")}function m(C,x,Y){let j=1;const re=Ue(C);if((re.width>Y||re.height>Y)&&(j=Y/Math.max(re.width,re.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Me=Math.floor(j*re.width),ye=Math.floor(j*re.height);h===void 0&&(h=M(Me,ye));const le=x?M(Me,ye):h;return le.width=Me,le.height=ye,le.getContext("2d").drawImage(C,0,0,Me,ye),Ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Me+"x"+ye+")."),le}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,x,Y,j,re,Me=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye;j&&(ye=e.get("EXT_texture_norm16"),ye||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=x;if(x===n.RED&&(Y===n.FLOAT&&(le=n.R32F),Y===n.HALF_FLOAT&&(le=n.R16F),Y===n.UNSIGNED_BYTE&&(le=n.R8),Y===n.UNSIGNED_SHORT&&ye&&(le=ye.R16_EXT),Y===n.SHORT&&ye&&(le=ye.R16_SNORM_EXT)),x===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.R8UI),Y===n.UNSIGNED_SHORT&&(le=n.R16UI),Y===n.UNSIGNED_INT&&(le=n.R32UI),Y===n.BYTE&&(le=n.R8I),Y===n.SHORT&&(le=n.R16I),Y===n.INT&&(le=n.R32I)),x===n.RG&&(Y===n.FLOAT&&(le=n.RG32F),Y===n.HALF_FLOAT&&(le=n.RG16F),Y===n.UNSIGNED_BYTE&&(le=n.RG8),Y===n.UNSIGNED_SHORT&&ye&&(le=ye.RG16_EXT),Y===n.SHORT&&ye&&(le=ye.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.RG8UI),Y===n.UNSIGNED_SHORT&&(le=n.RG16UI),Y===n.UNSIGNED_INT&&(le=n.RG32UI),Y===n.BYTE&&(le=n.RG8I),Y===n.SHORT&&(le=n.RG16I),Y===n.INT&&(le=n.RG32I)),x===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(le=n.RGB16UI),Y===n.UNSIGNED_INT&&(le=n.RGB32UI),Y===n.BYTE&&(le=n.RGB8I),Y===n.SHORT&&(le=n.RGB16I),Y===n.INT&&(le=n.RGB32I)),x===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),Y===n.UNSIGNED_INT&&(le=n.RGBA32UI),Y===n.BYTE&&(le=n.RGBA8I),Y===n.SHORT&&(le=n.RGBA16I),Y===n.INT&&(le=n.RGBA32I)),x===n.RGB&&(Y===n.UNSIGNED_SHORT&&ye&&(le=ye.RGB16_EXT),Y===n.SHORT&&ye&&(le=ye.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(le=n.R11F_G11F_B10F)),x===n.RGBA){const fe=Me?xr:lt.getTransfer(re);Y===n.FLOAT&&(le=n.RGBA32F),Y===n.HALF_FLOAT&&(le=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(le=fe===mt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&ye&&(le=ye.RGBA16_EXT),Y===n.SHORT&&ye&&(le=ye.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function T(C,x){let Y;return C?x===null||x===Xn||x===Ds?Y=n.DEPTH24_STENCIL8:x===wn?Y=n.DEPTH32F_STENCIL8:x===Ls&&(Y=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===Ds?Y=n.DEPTH_COMPONENT24:x===wn?Y=n.DEPTH_COMPONENT32F:x===Ls&&(Y=n.DEPTH_COMPONENT16),Y}function y(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),E(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function _(C){const x=C.target;x.removeEventListener("dispose",_),L(x)}function E(C){const x=i.get(C);if(x.__webglInit===void 0)return;const Y=C.source,j=d.get(Y);if(j){const re=j[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&R(C),Object.keys(j).length===0&&d.delete(Y)}i.remove(C)}function R(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const Y=C.source,j=d.get(Y);delete j[x.__cacheKey],o.memory.textures--}function L(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let re=0;re<x.__webglFramebuffer[j].length;re++)n.deleteFramebuffer(x.__webglFramebuffer[j][re]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const Y=C.textures;for(let j=0,re=Y.length;j<re;j++){const Me=i.get(Y[j]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(Y[j])}i.remove(C)}let N=0;function B(){N=0}function I(){return N}function O(C){N=C}function W(){const C=N;return C>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function F(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function te(C,x){const Y=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){const j=C.image;if(j===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Y,C,x);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+x)}function H(C,x){const Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){pe(Y,C,x);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+x)}function J(C,x){const Y=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){pe(Y,C,x);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+x)}function ne(C,x){const Y=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Y.__version!==C.version){se(Y,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+x)}const ge={[pr]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Ao]:n.MIRRORED_REPEAT},xe={[Xt]:n.NEAREST,[Vh]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Ie={[qh]:n.NEVER,[$h]:n.ALWAYS,[Yh]:n.LESS,[va]:n.LEQUAL,[Zh]:n.EQUAL,[Ma]:n.GEQUAL,[Jh]:n.GREATER,[Kh]:n.NOTEQUAL};function Be(C,x){if(x.type===wn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yt||x.magFilter===mo||x.magFilter===nr||x.magFilter===Ri||x.minFilter===Yt||x.minFilter===mo||x.minFilter===nr||x.minFilter===Ri)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ge[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,xe[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==nr&&x.minFilter!==Ri||x.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function me(C,x){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const j=x.source;let re=d.get(j);re===void 0&&(re={},d.set(j,re));const Me=F(x);if(Me!==C.__cacheKey){re[Me]===void 0&&(re[Me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[Me].usedTimes++;const ye=re[C.__cacheKey];ye!==void 0&&(re[C.__cacheKey].usedTimes--,ye.usedTimes===0&&R(x)),C.__cacheKey=Me,C.__webglTexture=re[Me].texture}return Y}function Z(C,x,Y){return Math.floor(Math.floor(C/Y)/x)}function ee(C,x,Y,j){const Me=C.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,Y,j,x.data);else{Me.sort((Xe,Ce)=>Xe.start-Ce.start);let ye=0;for(let Xe=1;Xe<Me.length;Xe++){const Ce=Me[ye],Te=Me[Xe],qe=Ce.start+Ce.count,Je=Z(Te.start,x.width,4),tt=Z(Ce.start,x.width,4);Te.start<=qe+1&&Je===tt&&Z(Te.start+Te.count-1,x.width,4)===Je?Ce.count=Math.max(Ce.count,Te.start+Te.count-Ce.start):(++ye,Me[ye]=Te)}Me.length=ye+1;const le=t.getParameter(n.UNPACK_ROW_LENGTH),fe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ee=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Xe=0,Ce=Me.length;Xe<Ce;Xe++){const Te=Me[Xe],qe=Math.floor(Te.start/4),Je=Math.ceil(Te.count/4),tt=qe%x.width,G=Math.floor(qe/x.width),we=Je,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,tt,G,we,de,Y,j,x.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,le),t.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function pe(C,x,Y){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const re=me(C,x),Me=x.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+Y);const ye=i.get(Me);if(Me.version!==ye.__version||re===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const de=lt.getPrimaries(lt.workingColorSpace),Ae=x.colorSpace===ui?null:lt.getPrimaries(x.colorSpace),Ne=x.colorSpace===ui||de===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let fe=m(x.image,!1,s.maxTextureSize);fe=We(x,fe);const Ee=r.convert(x.format,x.colorSpace),Xe=r.convert(x.type);let Ce=v(x.internalFormat,Ee,Xe,x.normalized,x.colorSpace,x.isVideoTexture);Be(j,x);let Te;const qe=x.mipmaps,Je=x.isVideoTexture!==!0,tt=ye.__version===void 0||re===!0,G=Me.dataReady,we=y(x,fe);if(x.isDepthTexture)Ce=T(x.format===Ci,x.type),tt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Ee,Xe,null));else if(x.isDataTexture)if(qe.length>0){Je&&tt&&t.texStorage2D(n.TEXTURE_2D,we,Ce,qe[0].width,qe[0].height);for(let de=0,Ae=qe.length;de<Ae;de++)Te=qe[de],Je?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Te.width,Te.height,Ee,Xe,Te.data):t.texImage2D(n.TEXTURE_2D,de,Ce,Te.width,Te.height,0,Ee,Xe,Te.data);x.generateMipmaps=!1}else Je?(tt&&t.texStorage2D(n.TEXTURE_2D,we,Ce,fe.width,fe.height),G&&ee(x,fe,Ee,Xe)):t.texImage2D(n.TEXTURE_2D,0,Ce,fe.width,fe.height,0,Ee,Xe,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Je&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ce,qe[0].width,qe[0].height,fe.depth);for(let de=0,Ae=qe.length;de<Ae;de++)if(Te=qe[de],x.format!==An)if(Ee!==null)if(Je){if(G)if(x.layerUpdates.size>0){const Ne=Gu(Te.width,Te.height,x.format,x.type);for(const _e of x.layerUpdates){const Ze=Te.data.subarray(_e*Ne/Te.data.BYTES_PER_ELEMENT,(_e+1)*Ne/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,_e,Te.width,Te.height,1,Ee,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,fe.depth,Ee,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ce,Te.width,Te.height,fe.depth,0,Te.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,fe.depth,Ee,Xe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ce,Te.width,Te.height,fe.depth,0,Ee,Xe,Te.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Je&&tt&&t.texStorage2D(n.TEXTURE_2D,we,Ce,qe[0].width,qe[0].height);for(let de=0,Ae=qe.length;de<Ae;de++)Te=qe[de],x.format!==An?Ee!==null?Je?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ce,Te.width,Te.height,0,Te.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Te.width,Te.height,Ee,Xe,Te.data):t.texImage2D(n.TEXTURE_2D,de,Ce,Te.width,Te.height,0,Ee,Xe,Te.data)}else if(x.isDataArrayTexture)if(Je){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ce,fe.width,fe.height,fe.depth),G)if(x.layerUpdates.size>0){const de=Gu(fe.width,fe.height,x.format,x.type);for(const Ae of x.layerUpdates){const Ne=fe.data.subarray(Ae*de/fe.data.BYTES_PER_ELEMENT,(Ae+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,fe.width,fe.height,1,Ee,Xe,Ne)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Xe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,Ee,Xe,fe.data);else if(x.isData3DTexture)Je?(tt&&t.texStorage3D(n.TEXTURE_3D,we,Ce,fe.width,fe.height,fe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Xe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,Ee,Xe,fe.data);else if(x.isFramebufferTexture){if(tt)if(Je)t.texStorage2D(n.TEXTURE_2D,we,Ce,fe.width,fe.height);else{let de=fe.width,Ae=fe.height;for(let Ne=0;Ne<we;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ce,de,Ae,0,Ee,Xe,null),de>>=1,Ae>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),fe.parentNode!==de){de.appendChild(fe),f.add(x),de.onpaint=Ae=>{const Ne=Ae.changedElements;for(const _e of f)Ne.includes(_e.image)&&(_e.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,fe);else{const Ne=n.RGBA,_e=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,_e,Ze,fe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Je&&tt){const de=Ue(qe[0]);t.texStorage2D(n.TEXTURE_2D,we,Ce,de.width,de.height)}for(let de=0,Ae=qe.length;de<Ae;de++)Te=qe[de],Je?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee,Xe,Te):t.texImage2D(n.TEXTURE_2D,de,Ce,Ee,Xe,Te);x.generateMipmaps=!1}else if(Je){if(tt){const de=Ue(fe);t.texStorage2D(n.TEXTURE_2D,we,Ce,de.width,de.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Xe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Ee,Xe,fe);p(x)&&S(j),ye.__version=Me.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function se(C,x,Y){if(x.image.length!==6)return;const j=me(C,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);const Me=i.get(re);if(re.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+Y);const ye=lt.getPrimaries(lt.workingColorSpace),le=x.colorSpace===ui?null:lt.getPrimaries(x.colorSpace),fe=x.colorSpace===ui||ye===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,Xe=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let _e=0;_e<6;_e++)!Ee&&!Xe?Ce[_e]=m(x.image[_e],!0,s.maxCubemapSize):Ce[_e]=Xe?x.image[_e].image:x.image[_e],Ce[_e]=We(x,Ce[_e]);const Te=Ce[0],qe=r.convert(x.format,x.colorSpace),Je=r.convert(x.type),tt=v(x.internalFormat,qe,Je,x.normalized,x.colorSpace),G=x.isVideoTexture!==!0,we=Me.__version===void 0||j===!0,de=re.dataReady;let Ae=y(x,Te);Be(n.TEXTURE_CUBE_MAP,x);let Ne;if(Ee){G&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,tt,Te.width,Te.height);for(let _e=0;_e<6;_e++){Ne=Ce[_e].mipmaps;for(let Ze=0;Ze<Ne.length;Ze++){const Ve=Ne[Ze];x.format!==An?qe!==null?G?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,0,0,Ve.width,Ve.height,qe,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,tt,Ve.width,Ve.height,0,Ve.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,0,0,Ve.width,Ve.height,qe,Je,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze,tt,Ve.width,Ve.height,0,qe,Je,Ve.data)}}}else{if(Ne=x.mipmaps,G&&we){Ne.length>0&&Ae++;const _e=Ue(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,tt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Xe){G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ce[_e].width,Ce[_e].height,qe,Je,Ce[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,Ce[_e].width,Ce[_e].height,0,qe,Je,Ce[_e].data);for(let Ze=0;Ze<Ne.length;Ze++){const bt=Ne[Ze].image[_e].image;G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,0,0,bt.width,bt.height,qe,Je,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,tt,bt.width,bt.height,0,qe,Je,bt.data)}}else{G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,qe,Je,Ce[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,qe,Je,Ce[_e]);for(let Ze=0;Ze<Ne.length;Ze++){const Ve=Ne[Ze];G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,0,0,qe,Je,Ve.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ze+1,tt,qe,Je,Ve.image[_e])}}}p(x)&&S(n.TEXTURE_CUBE_MAP),Me.__version=re.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function k(C,x,Y,j,re,Me){const ye=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),fe=v(Y.internalFormat,ye,le,Y.normalized,Y.colorSpace),Ee=i.get(x),Xe=i.get(Y);if(Xe.__renderTarget=x,!Ee.__hasExternalTextures){const Ce=Math.max(1,x.width>>Me),Te=Math.max(1,x.height>>Me);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Me,fe,Ce,Te,x.depth,0,ye,le,null):t.texImage2D(re,Me,fe,Ce,Te,0,ye,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Le(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,re,Xe.__webglTexture,0,be(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,re,Xe.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(C,x,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const j=x.depthTexture,re=j&&j.isDepthTexture?j.type:null,Me=T(x.stencilBuffer,re),ye=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(x),Me,x.width,x.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(x),Me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,C)}else{const j=x.textures;for(let re=0;re<j.length;re++){const Me=j[re],ye=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),fe=v(Me.internalFormat,ye,le,Me.normalized,Me.colorSpace);Le(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be(x),fe,x.width,x.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,be(x),fe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,fe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(C,x,Y){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=i.get(x.depthTexture);if(re.__renderTarget=x,(!re.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(re.__webglInit===void 0&&(re.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),re.__webglTexture===void 0){re.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ee=r.convert(x.depthTexture.format),Xe=r.convert(x.depthTexture.type);let Ce;x.depthTexture.format===si?Ce=n.DEPTH_COMPONENT24:x.depthTexture.format===Ci&&(Ce=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ce,x.width,x.height,0,Ee,Xe,null)}}else te(x.depthTexture,0);const Me=re.__webglTexture,ye=be(x),le=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,fe=x.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===si)Le(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,le,Me,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,fe,le,Me,0);else if(x.depthTexture.format===Ci)Le(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,le,Me,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,fe,le,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(C){const x=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",re)};j.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=j}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(Y)for(let j=0;j<6;j++)oe(x.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?oe(x.__webglFramebuffer[0],C,0):oe(x.__webglFramebuffer,C,0)}else if(Y){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),V(x.__webglDepthbuffer[j],C,!1);else{const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Me)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),V(x.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(C,x,Y){const j=i.get(C);x!==void 0&&k(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&K(C)}function U(C){const x=C.texture,Y=i.get(C),j=i.get(x);C.addEventListener("dispose",_);const re=C.textures,Me=C.isWebGLCubeRenderTarget===!0,ye=re.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++),Me){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer[le]=[];for(let fe=0;fe<x.mipmaps.length;fe++)Y.__webglFramebuffer[le][fe]=n.createFramebuffer()}else Y.__webglFramebuffer[le]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)Y.__webglFramebuffer[le]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ye)for(let le=0,fe=re.length;le<fe;le++){const Ee=i.get(re[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Le(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const fe=re[le];Y.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[le]);const Ee=r.convert(fe.format,fe.colorSpace),Xe=r.convert(fe.type),Ce=v(fe.internalFormat,Ee,Xe,fe.normalized,fe.colorSpace,C.isXRRenderTarget===!0),Te=be(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ce,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Y.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),V(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)k(Y.__webglFramebuffer[le][fe],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else k(Y.__webglFramebuffer[le],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,fe=re.length;le<fe;le++){const Ee=re[le],Xe=i.get(Ee);let Ce=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ce=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Xe.__webglTexture),Be(Ce,Ee),k(Y.__webglFramebuffer,C,Ee,n.COLOR_ATTACHMENT0+le,Ce,0),p(Ee)&&S(Ce)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Be(le,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)k(Y.__webglFramebuffer[fe],C,x,n.COLOR_ATTACHMENT0,le,fe);else k(Y.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,le,0);p(x)&&S(le),t.unbindTexture()}C.depthBuffer&&K(C)}function q(C){const x=C.textures;for(let Y=0,j=x.length;Y<j;Y++){const re=x[Y];if(p(re)){const Me=w(C),ye=i.get(re).__webglTexture;t.bindTexture(Me,ye),S(Me),t.unbindTexture()}}}const ce=[],X=[];function ue(C){if(C.samples>0){if(Le(C)===!1){const x=C.textures,Y=C.width,j=C.height;let re=n.COLOR_BUFFER_BIT;const Me=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(C),le=x.length>1;if(le)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const fe=C.texture.mipmaps;fe&&fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const Xe=i.get(x[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,Y,j,0,0,Y,j,re,n.NEAREST),c===!0&&(ce.length=0,X.length=0,ce.push(n.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ce.push(Me),X.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const Xe=i.get(x[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function be(C){return Math.min(s.maxSamples,C.samples)}function Le(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function We(C,x){const Y=C.colorSpace,j=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==_r&&Y!==ui&&(lt.getTransfer(Y)===mt?(j!==An||re!==hn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",Y)),x}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=ne,this.rebindTextures=ae,this.setupRenderTarget=U,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dd(n,e){function t(i,s=ui){let r;const o=lt.getTransfer(s);if(i===hn)return n.UNSIGNED_BYTE;if(i===fa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sc)return n.BYTE;if(i===rc)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===da)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===lc)return n.ALPHA;if(i===cc)return n.RGB;if(i===An)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===ma)return n.RED;if(i===ga)return n.RED_INTEGER;if(i===Fi)return n.RG;if(i===_a)return n.RG_INTEGER;if(i===xa)return n.RGBA_INTEGER;if(i===or||i===ar||i===lr||i===cr)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ro||i===Co||i===Po||i===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Do||i===Io||i===No||i===Uo||i===Fo||i===mr||i===Oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Do||i===Io)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===No)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uo)return r.COMPRESSED_R11_EAC;if(i===Fo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===mr)return r.COMPRESSED_RG11_EAC;if(i===Oo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bo||i===zo||i===ko||i===Go||i===Vo||i===Ho||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===Ko||i===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Go)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ho)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jo)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ko)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$o)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===jo||i===ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ta||i===na||i===gr||i===ia)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(i===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`;class px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mx extends xi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const M=typeof XRWebGLBinding<"u",m=new px,p={},S=t.getContextAttributes();let w=null,v=null;const T=[],y=[],A=new ve;let _=null,E=null;const R=new _n;R.viewport=new At;const L=new _n;L.viewport=new At;const N=[R,L],B=new bd;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=T[Z];return ee===void 0&&(ee=new _o,T[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=T[Z];return ee===void 0&&(ee=new _o,T[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=T[Z];return ee===void 0&&(ee=new _o,T[Z]=ee),ee.getHandSpace()};function W(Z){const ee=y.indexOf(Z.inputSource);if(ee===-1)return;const pe=T[ee];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,l||o),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){const ee=y[Z];ee!==null&&(y[Z]=null,T[Z].disconnect(ee))}I=null,O=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(w),d=null,h=null,f=null,s=null,v=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",F),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,se=null,k=null;S.depth&&(k=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?Ci:si,se=S.stencil?Ds:Xn);const V={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(V),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Rn(h.textureWidth,h.textureHeight,{format:An,type:hn,depthTexture:new Ns(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Rn(d.framebufferWidth,d.framebufferHeight,{format:An,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let ee=0;ee<Z.removed.length;ee++){const pe=Z.removed[ee],se=y.indexOf(pe);se>=0&&(y[se]=null,T[se].disconnect(pe))}for(let ee=0;ee<Z.added.length;ee++){const pe=Z.added[ee];let se=y.indexOf(pe);if(se===-1){for(let V=0;V<T.length;V++)if(V>=y.length){y.push(pe),se=V;break}else if(y[V]===null){y[V]=pe,se=V;break}if(se===-1)break}const k=T[se];k&&k.connect(pe)}}const H=new P,J=new P;function ne(Z,ee,pe){H.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const se=H.distanceTo(J),k=ee.projectionMatrix.elements,V=pe.projectionMatrix.elements,oe=k[14]/(k[10]-1),K=k[14]/(k[10]+1),ae=(k[9]+1)/k[5],U=(k[9]-1)/k[5],q=(k[8]-1)/k[0],ce=(V[8]+1)/V[0],X=oe*q,ue=oe*ce,be=se/(-q+ce),Le=be*-q;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Le),Z.translateZ(be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),k[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const D=oe+be,We=K+be,Ue=X-Le,C=ue+(se-Le),x=ae*K/We*D,Y=U*K/We*D;Z.projectionMatrix.makePerspective(Ue,C,x,Y,D,We),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ge(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,pe=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),B.near=L.near=R.near=ee,B.far=L.far=R.far=pe,(I!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,O=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const se=Z.parent,k=B.cameras;ge(B,se);for(let V=0;V<k.length;V++)ge(k[V],se);k.length===2?ne(B,R,L):B.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),xe(Z,B,se)};function xe(Z,ee,pe){pe===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Ie=null;function Be(Z,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let se=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,se=!0);for(let K=0;K<pe.length;K++){const ae=pe[K];let U=null;if(d!==null)U=d.getViewport(ae);else{const ce=f.getViewSubImage(h,ae);U=ce.viewport,K===0&&(e.setRenderTargetTextures(v,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(v))}let q=N[K];q===void 0&&(q=new _n,q.layers.enable(K),q.viewport=new At,N[K]=q),q.matrix.fromArray(ae.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(ae.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(U.x,U.y,U.width,U.height),K===0&&(B.matrix.copy(q.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),se===!0&&B.cameras.push(q)}const k=s.enabledFeatures;if(k&&k.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const K=f.getDepthInformation(pe[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(k&&k.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let K=0;K<pe.length;K++){const ae=pe[K].camera;if(ae){let U=p[ae];U||(U=new xc,p[ae]=U);const q=f.getCameraImage(ae);U.sourceTexture=q}}}}for(let pe=0;pe<T.length;pe++){const se=y[pe],k=T[pe];se!==null&&k!==void 0&&k.update(se,ee,l||o)}Ie&&Ie(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const me=new wd;me.setAnimationLoop(Be),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}}const gx=new ht,Id=new Qe;Id.set(-1,0,0,0,1,0,0,0,1);function _x(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(gx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Id),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){const y=T.program;i.uniformBlockBinding(v,y)}function l(v,T){let y=s[v.id];y===void 0&&(m(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",S));const A=T.program;i.updateUBOMapping(v,A);const _=e.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function u(v){const T=f();v.__bindingPointIndex=T;const y=n.createBuffer(),A=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const T=s[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,E=y.length;_<E;_++){const R=y[_];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)d(R[L],_,L,A);else d(R,_,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,T,y,A){if(M(v,T,y,A)===!0){const _=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let L=0;L<E.length;L++){const N=E[L],B=p(N);g(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,y){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,y)}function M(v,T,y,A){const _=v.value,E=T+"_"+y;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{const R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){const T=v.uniforms;let y=0;const A=16;for(let E=0,R=T.length;E<R;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let N=0,B=L.length;N<B;N++){const I=L[N],O=Array.isArray(I.value)?I.value:[I.value];for(let W=0,F=O.length;W<F;W++){const te=O[W],H=p(te),J=y%A,ne=J%H.boundary,ge=J+ne;y+=ne,ge!==0&&A-ge<H.storage&&(y+=A-ge),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=H.storage}}}const _=y%A;return _>0&&(y+=A-_),v.__size=y,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),T}function S(v){const T=v.target;T.removeEventListener("dispose",S);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}const vx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function Mx(){return Qn===null&&(Qn=new pc(vx,16,16,Fi,qn),Qn.name="DFG_LUT",Qn.minFilter=Yt,Qn.magFilter=Yt,Qn.wrapS=ti,Qn.wrapT=ti,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class Nd{constructor(e={}){const{canvas:t=jh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=hn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=d,m=new Set([xa,_a,ga]),p=new Set([hn,Xn,Ls,Ds,fa,pa]),S=new Uint32Array(4),w=new Int32Array(4),v=new P;let T=null,y=null;const A=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,N=null,B=null,I=null,O=null;this._outputColorSpace=jt;let W=0,F=0,te=null,H=-1,J=null;const ne=new At,ge=new At;let xe=null;const Ie=new ot(0);let Be=0,me=t.width,Z=t.height,ee=1,pe=null,se=null;const k=new At(0,0,me,Z),V=new At(0,0,me,Z);let oe=!1;const K=new Ea;let ae=!1,U=!1;const q=new ht,ce=new P,X=new At,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Le(){return te===null?ee:1}let D=i;function We(b,z){return t.getContext(b,z)}let Ue,C,x,Y,j,re,Me,ye,le,fe,Ee,Xe,Ce,Te,qe,Je,tt,G,we,de,Ae,Ne,_e;try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),D===null){const z="webgl2";if(D=We(z,b),D===null)throw We(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(b){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),ct("WebGLRenderer: "+b.message),b}function Ze(){Ue=new Sg(D),Ue.init(),Ae=new Dd(D,Ue),C=new hg(D,Ue,e,Ae),x=new ux(D,Ue),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),B=D.createFramebuffer(),I=D.createFramebuffer(),O=D.createFramebuffer(),Y=new Eg(D),j=new K_,re=new hx(D,Ue,x,j,C,Ae,Y),Me=new Mg(R),ye=new wp(D),Ne=new cg(D,ye),le=new yg(D,ye,Y,Ne),fe=new wg(D,le,ye,Ne,Y),G=new Tg(D,C,re),qe=new dg(j),Ee=new J_(R,Me,Ue,C,Ne,qe),Xe=new _x(R,j),Ce=new Q_,Te=new sx(Ue),tt=new lg(R,Me,x,fe,g,c),Je=new cx(R,fe,C),_e=new xx(D,Y,C,x),we=new ug(D,Ue,Y),de=new bg(D,Ue,Y),Y.programs=Ee.programs,R.capabilities=C,R.extensions=Ue,R.properties=j,R.renderLists=Ce,R.shadowMap=Je,R.state=x,R.info=Y}M!==hn&&(E=new Rg(M,t.width,t.height,a,s,r));const Ve=new mx(R,D);this.xr=Ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(me,Z,!1))},this.getSize=function(b){return b.set(me,Z)},this.setSize=function(b,z,ie=!0){if(Ve.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}me=b,Z=z,t.width=Math.floor(b*ee),t.height=Math.floor(z*ee),ie===!0&&(t.style.width=b+"px",t.style.height=z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(me*ee,Z*ee).floor()},this.setDrawingBufferSize=function(b,z,ie){me=b,Z=z,ee=ie,t.width=Math.floor(b*ie),t.height=Math.floor(z*ie),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(M===hn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,z,ie,$){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,z,ie,$),x.viewport(ne.copy(k).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,z,ie,$){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,z,ie,$),x.scissor(ge.copy(V).multiplyScalar(ee).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(b){x.setScissorTest(oe=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,ie=!0){let $=0;if(b){let Q=!1;if(te!==null){const De=te.texture.format;Q=m.has(De)}if(Q){const De=te.texture.type,Oe=p.has(De),Pe=tt.getClearColor(),ke=tt.getClearAlpha(),He=Pe.r,st=Pe.g,at=Pe.b;Oe?(S[0]=He,S[1]=st,S[2]=at,S[3]=ke,D.clearBufferuiv(D.COLOR,0,S)):(w[0]=He,w[1]=st,w[2]=at,w[3]=ke,D.clearBufferiv(D.COLOR,0,w))}else $|=D.COLOR_BUFFER_BIT}z&&($|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),tt.dispose(),Ce.dispose(),Te.dispose(),j.dispose(),Me.dispose(),fe.dispose(),Ne.dispose(),_e.dispose(),Ee.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Kc),Ve.removeEventListener("sessionend",$c),Bi.stop()};function bt(b){b.preventDefault(),Dl("WebGLRenderer: Context Lost."),L=!0}function ft(){Dl("WebGLRenderer: Context Restored."),L=!1;const b=Y.autoReset,z=Je.enabled,ie=Je.autoUpdate,$=Je.needsUpdate,Q=Je.type;Ze(),Y.autoReset=b,Je.enabled=z,Je.autoUpdate=ie,Je.needsUpdate=$,Je.type=Q}function Nn(b){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jn(b){const z=b.target;z.removeEventListener("dispose",Jn),ef(z)}function ef(b){tf(b),j.remove(b)}function tf(b){const z=j.get(b).programs;z!==void 0&&(z.forEach(function(ie){Ee.releaseProgram(ie)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,ie,$,Q,De){z===null&&(z=ue);const Oe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Pe=rf(b,z,ie,$,Q);x.setMaterial($,Oe);let ke=ie.index,He=1;if($.wireframe===!0){if(ke=le.getWireframeAttribute(ie),ke===void 0)return;He=2}const st=ie.drawRange,at=ie.attributes.position;let Ge=st.start*He,pt=(st.start+st.count)*He;De!==null&&(Ge=Math.max(Ge,De.start*He),pt=Math.min(pt,(De.start+De.count)*He)),ke!==null?(Ge=Math.max(Ge,0),pt=Math.min(pt,ke.count)):at!=null&&(Ge=Math.max(Ge,0),pt=Math.min(pt,at.count));const Ut=pt-Ge;if(Ut<0||Ut===1/0)return;Ne.setup(Q,$,Pe,ie,ke);let Tt,yt=we;if(ke!==null&&(Tt=ye.get(ke),yt=de,yt.setIndex(Tt)),Q.isMesh)$.wireframe===!0?(x.setLineWidth($.wireframeLinewidth*Le()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(Q.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),x.setLineWidth(Kt*Le()),Q.isLineSegments?yt.setMode(D.LINES):Q.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else Q.isPoints?yt.setMode(D.POINTS):Q.isSprite&&yt.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,Fe=Q._multiDrawCounts,nn=Q._multiDrawCount,ut=ke?ye.get(ke).bytesPerElement:1,Mn=j.get($).currentProgram.getUniforms();for(let Kn=0;Kn<nn;Kn++)Mn.setValue(D,"_gl_DrawID",Kn),yt.render(Kt[Kn]/ut,Fe[Kn])}else if(Q.isInstancedMesh)yt.renderInstances(Ge,Ut,Q.count);else if(ie.isInstancedBufferGeometry){const Kt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Fe=Math.min(ie.instanceCount,Kt);yt.renderInstances(Ge,Ut,Fe)}else yt.render(Ge,Ut)};function Jc(b,z,ie,$){N!==null&&b.isNodeMaterial&&N.setObject($,b),ae===!0&&qe.setState(b,ie,!1),b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,Or(b,z,$),b.side=Ni,b.needsUpdate=!0,Or(b,z,$),b.side=En):Or(b,z,$)}this.compile=function(b,z,ie=null){ie===null&&(ie=b),N!==null&&N.renderStart(b,z,ie),y=Te.get(ie),y.init(z),_.push(y),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),b!==ie&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights(),N!==null&&N.updateLights(y.state.lightsArray),U=this.localClippingEnabled,ae=qe.init(this.clippingPlanes,U),ae===!0&&qe.setGlobalState(this.clippingPlanes,z),N!==null&&Je.render(y.state.shadowsArray,ie,z);const $=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const De=Q.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){const Pe=De[Oe];Jc(Pe,ie,z,Q),$.add(Pe)}else Jc(De,ie,z,Q),$.add(De)}),y=_.pop(),N!==null&&N.renderEnd(),$},this.compileAsync=function(b,z,ie=null){const $=this.compile(b,z,ie);return new Promise(Q=>{function De(){if($.forEach(function(Oe){const ke=j.get(Oe).currentProgram;(ke===void 0||ke.isReady())&&$.delete(Oe)}),$.size===0){Q(b);return}setTimeout(De,10)}Ue.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Wa=null;function nf(b){Wa&&Wa(b)}function Kc(){Bi.stop()}function $c(){Bi.start()}const Bi=new wd;Bi.setAnimationLoop(nf),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(b){Wa=b,Ve.setAnimationLoop(b),b===null?Bi.stop():Bi.start()},Ve.addEventListener("sessionstart",Kc),Ve.addEventListener("sessionend",$c),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(b,z);const ie=Ve.enabled===!0&&Ve.isPresenting===!0,$=E!==null&&(te===null||ie)&&E.begin(R,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(z),z=Ve.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,z,te),y=Te.get(b,_.length),y.init(z),y.state.textureUnits=re.getTextureUnits(),_.push(y),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(q,Gn,z.reversedDepth),U=this.localClippingEnabled,ae=qe.init(this.clippingPlanes,U),T=Ce.get(b,A.length),T.init(),A.push(T),Ve.enabled===!0&&Ve.isPresenting===!0){const Oe=R.xr.getDepthSensingMesh();Oe!==null&&Xa(Oe,z,-1/0,R.sortObjects)}Xa(b,z,0,R.sortObjects),T.finish(),N!==null&&N.updateLights(y.state.lightsArray),R.sortObjects===!0&&T.sort(pe,se),be=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,be&&tt.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&qe.beginShadows();const Q=y.state.shadowsArray;if(Je.render(Q,b,z),ae===!0&&qe.endShadows(),($&&E.hasRenderPass())===!1){const Oe=T.opaque,Pe=T.transmissive;if(y.setupLights(),z.isArrayCamera){const ke=z.cameras;if(Pe.length>0)for(let He=0,st=ke.length;He<st;He++){const at=ke[He];jc(Oe,Pe,b,at)}be&&tt.render(b);for(let He=0,st=ke.length;He<st;He++){const at=ke[He];Qc(T,b,at,at.viewport)}}else Pe.length>0&&jc(Oe,Pe,b,z),be&&tt.render(b),Qc(T,b,z)}te!==null&&F===0&&(re.updateMultisampleRenderTarget(te),re.updateRenderTargetMipmap(te)),$&&E.end(R),b.isScene===!0&&b.onAfterRender(R,b,z),Ne.resetDefaultState(),H=-1,J=null,_.pop(),_.length>0?(y=_[_.length-1],re.setTextureUnits(y.state.textureUnits),ae===!0&&qe.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,N!==null&&N.renderEnd()};function Xa(b,z,ie,$){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)ie=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(K)){$&&X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(q);const Oe=fe.update(b),Pe=b.material;Pe.visible&&T.push(b,Oe,Pe,ie,X.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(K))){const Oe=fe.update(b),Pe=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),X.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),X.copy(Oe.boundingSphere.center)),X.applyMatrix4(b.matrixWorld).applyMatrix4(q)),Array.isArray(Pe)){const ke=Oe.groups;for(let He=0,st=ke.length;He<st;He++){const at=ke[He],Ge=Pe[at.materialIndex];Ge&&Ge.visible&&T.push(b,Oe,Ge,ie,X.z,at,z)}}else Pe.visible&&T.push(b,Oe,Pe,ie,X.z,null,z)}}const De=b.children;for(let Oe=0,Pe=De.length;Oe<Pe;Oe++)Xa(De[Oe],z,ie,$)}function Qc(b,z,ie,$){const{opaque:Q,transmissive:De,transparent:Oe}=b;y.setupLightsView(ie),ae===!0&&qe.setGlobalState(R.clippingPlanes,ie),$&&x.viewport(ne.copy($)),Q.length>0&&Fr(Q,z,ie),De.length>0&&Fr(De,z,ie),Oe.length>0&&Fr(Oe,z,ie),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function jc(b,z,ie,$){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[$.id]===void 0){const Ge=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[$.id]=new Rn(1,1,{generateMipmaps:!0,type:Ge?qn:hn,minFilter:Ri,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const De=y.state.transmissionRenderTarget[$.id],Oe=$.viewport||ne;De.setSize(Oe.z*R.transmissionResolutionScale,Oe.w*R.transmissionResolutionScale);const Pe=R.getRenderTarget(),ke=R.getActiveCubeFace(),He=R.getActiveMipmapLevel();R.setRenderTarget(De),R.getClearColor(Ie),Be=R.getClearAlpha(),Be<1&&R.setClearColor(16777215,.5),R.clear(),be&&tt.render(ie);const st=R.toneMapping;R.toneMapping=Vn;const at=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),y.setupLightsView($),ae===!0&&qe.setGlobalState(R.clippingPlanes,$),Fr(b,ie,$),re.updateMultisampleRenderTarget(De),re.updateRenderTargetMipmap(De),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let pt=0,Ut=z.length;pt<Ut;pt++){const Tt=z[pt],{object:yt,geometry:Kt,material:Fe,group:nn}=Tt;if(Fe.side===En&&yt.layers.test($.layers)){const ut=Fe.side;Fe.side=an,Fe.needsUpdate=!0,eu(yt,ie,$,Kt,Fe,nn),Fe.side=ut,Fe.needsUpdate=!0,Ge=!0}}Ge===!0&&(re.updateMultisampleRenderTarget(De),re.updateRenderTargetMipmap(De))}R.setRenderTarget(Pe,ke,He),R.setClearColor(Ie,Be),at!==void 0&&($.viewport=at),R.toneMapping=st}function Fr(b,z,ie){const $=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,De=b.length;Q<De;Q++){const Oe=b[Q],{object:Pe,geometry:ke,group:He}=Oe;let st=Oe.material;st.allowOverride===!0&&$!==null&&(st=$),Pe.layers.test(ie.layers)&&eu(Pe,z,ie,ke,st,He)}}function eu(b,z,ie,$,Q,De){N!==null&&Q.isNodeMaterial&&N.setObject(b,Q),b.onBeforeRender(R,z,ie,$,Q,De),b.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(R,z,ie,$,b,De),Q.transparent===!0&&Q.side===En&&Q.forceSinglePass===!1?(Q.side=an,Q.needsUpdate=!0,R.renderBufferDirect(ie,z,$,Q,b,De),Q.side=Ni,Q.needsUpdate=!0,R.renderBufferDirect(ie,z,$,Q,b,De),Q.side=En):R.renderBufferDirect(ie,z,$,Q,b,De),b.onAfterRender(R,z,ie,$,Q,De)}function Or(b,z,ie){z.isScene!==!0&&(z=ue);const $=j.get(b),Q=y.state.lights,De=y.state.shadowsArray,Oe=Q.state.version,Pe=Ee.getParameters(b,Q.state,De,z,ie,y.state.lightProbeGridArray),ke=Ee.getProgramCacheKey(Pe);let He=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;const st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=Me.get(b.envMap||$.environment,st),$.envMapRotation=$.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,He===void 0&&(b.addEventListener("dispose",Jn),He=new Map,$.programs=He);let at=He.get(ke);if(at!==void 0){if($.currentProgram===at&&$.lightsStateVersion===Oe)return nu(b,Pe),at}else Pe.uniforms=Ee.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,ie,Pe),b.onBeforeCompile(Pe,R),at=Ee.acquireProgram(Pe,ke),He.set(ke,at),$.uniforms=Pe.uniforms;const Ge=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=qe.uniform),nu(b,Pe),$.needsLights=af(b),$.lightsStateVersion=Oe,$.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.sunLights.value=Q.state.sun,Ge.sunLightShadows.value=Q.state.sunShadow,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ge.sunShadowCascade.value=Q.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.lightProbeGrid=y.state.lightProbeGridArray.length>0,$.currentProgram=at,$.uniformsList=null,at}function tu(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=xo.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function nu(b,z){const ie=j.get(b);ie.outputColorSpace=z.outputColorSpace,ie.batching=z.batching,ie.batchingColor=z.batchingColor,ie.instancing=z.instancing,ie.instancingColor=z.instancingColor,ie.instancingMorph=z.instancingMorph,ie.skinning=z.skinning,ie.morphTargets=z.morphTargets,ie.morphNormals=z.morphNormals,ie.morphColors=z.morphColors,ie.morphTargetsCount=z.morphTargetsCount,ie.numClippingPlanes=z.numClippingPlanes,ie.numIntersection=z.numClipIntersection,ie.vertexAlphas=z.vertexAlphas,ie.vertexTangents=z.vertexTangents,ie.toneMapping=z.toneMapping}function sf(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let ie=0,$=b.length;ie<$;ie++){const Q=b[ie];if(Q.texture!==null&&Q.boundingBox.containsPoint(v))return Q}return null}function rf(b,z,ie,$,Q){z.isScene!==!0&&(z=ue),re.resetTextureUnits();const De=z.fog,Oe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,Pe=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:lt.workingColorSpace,ke=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,He=Me.get($.envMap||Oe,ke),st=$.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,at=!!ie.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!ie.morphAttributes.position,pt=!!ie.morphAttributes.normal,Ut=!!ie.morphAttributes.color;let Tt=Vn;$.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Tt=R.toneMapping);const yt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Kt=yt!==void 0?yt.length:0,Fe=j.get($),nn=y.state.lights;if(ae===!0&&(U===!0||b!==J)){const Et=b===J&&$.id===H;qe.setState($,b,Et)}let ut=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==nn.state.version||Fe.outputColorSpace!==Pe||Q.isBatchedMesh&&Fe.batching===!1||!Q.isBatchedMesh&&Fe.batching===!0||Q.isBatchedMesh&&Fe.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Fe.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Fe.instancing===!1||!Q.isInstancedMesh&&Fe.instancing===!0||Q.isSkinnedMesh&&Fe.skinning===!1||!Q.isSkinnedMesh&&Fe.skinning===!0||Q.isInstancedMesh&&Fe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Fe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Fe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Fe.instancingMorph===!1&&Q.morphTexture!==null||Fe.envMap!==He||$.fog===!0&&Fe.fog!==De||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==qe.numPlanes||Fe.numIntersection!==qe.numIntersection)||Fe.vertexAlphas!==st||Fe.vertexTangents!==at||Fe.morphTargets!==Ge||Fe.morphNormals!==pt||Fe.morphColors!==Ut||Fe.toneMapping!==Tt||Fe.morphTargetsCount!==Kt||!!Fe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Fe.__version=$.version);let Mn=Fe.currentProgram;ut===!0&&(Mn=Or($,z,Q),N&&$.isNodeMaterial&&N.onUpdateProgram($,Mn,Fe));let Kn=!1,Mi=!1,ss=!1;const Mt=Mn.getUniforms(),Dt=Fe.uniforms;if(x.useProgram(Mn.program)&&(Kn=!0,Mi=!0,ss=!0),$.id!==H&&(H=$.id,Mi=!0),Fe.needsLights){const Et=sf(y.state.lightProbeGridArray,Q);Fe.lightProbeGrid!==Et&&(Fe.lightProbeGrid=Et,Mi=!0)}if(Kn||J!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Mt.setValue(D,"projectionMatrix",b.projectionMatrix),Mt.setValue(D,"viewMatrix",b.matrixWorldInverse);const yi=Mt.map.cameraPosition;yi!==void 0&&yi.setValue(D,ce.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,Mi=!0,ss=!0)}if(Fe.needsLights&&(nn.state.sunShadowMap.length>0&&Mt.setValue(D,"sunShadowMap",nn.state.sunShadowMap,re),nn.state.directionalShadowMap.length>0&&Mt.setValue(D,"directionalShadowMap",nn.state.directionalShadowMap,re),nn.state.spotShadowMap.length>0&&Mt.setValue(D,"spotShadowMap",nn.state.spotShadowMap,re),nn.state.pointShadowMap.length>0&&Mt.setValue(D,"pointShadowMap",nn.state.pointShadowMap,re)),Q.isSkinnedMesh){Mt.setOptional(D,Q,"bindMatrix"),Mt.setOptional(D,Q,"bindMatrixInverse");const Et=Q.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),Mt.setValue(D,"boneTexture",Et.boneTexture,re))}Q.isBatchedMesh&&(Mt.setOptional(D,Q,"batchingTexture"),Mt.setValue(D,"batchingTexture",Q._matricesTexture,re),Mt.setOptional(D,Q,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",Q._indirectTexture,re),Mt.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",Q._colorsTexture,re));const Si=ie.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&G.update(Q,ie,Mn),(Mi||Fe.receiveShadow!==Q.receiveShadow)&&(Fe.receiveShadow=Q.receiveShadow,Mt.setValue(D,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(Dt.envMapIntensity.value=z.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Mx()),Mi){if(Mt.setValue(D,"toneMappingExposure",R.toneMappingExposure),Fe.needsLights&&of(Dt,ss),De&&$.fog===!0&&Xe.refreshFogUniforms(Dt,De),Xe.refreshMaterialUniforms(Dt,$,ee,Z,y.state.transmissionRenderTarget[b.id]),Fe.needsLights&&Fe.lightProbeGrid){const Et=Fe.lightProbeGrid;Dt.probesSH.value=Et.texture,Dt.probesMin.value.copy(Et.boundingBox.min),Dt.probesMax.value.copy(Et.boundingBox.max),Dt.probesResolution.value.copy(Et.resolution)}xo.upload(D,tu(Fe),Dt,re)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xo.upload(D,tu(Fe),Dt,re),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(D,"center",Q.center),Mt.setValue(D,"modelViewMatrix",Q.modelViewMatrix),Mt.setValue(D,"normalMatrix",Q.normalMatrix),Mt.setValue(D,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){const Et=$.uniformsGroups;for(let yi=0,rs=Et.length;yi<rs;yi++){const su=Et[yi];_e.update(su,Mn),_e.bind(su,Mn)}}return Mn}function of(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function af(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,z,ie){const $=j.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=z,j.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ie,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const ie=j.get(b);ie.__webglFramebuffer=z,ie.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,ie=0){te=b,W=z,F=ie;let $=null,Q=!1,De=!1;if(b){const Pe=j.get(b);if(Pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,Pe.__webglFramebuffer),ne.copy(b.viewport),ge.copy(b.scissor),xe=b.scissorTest,x.viewport(ne),x.scissor(ge),x.setScissorTest(xe),H=-1;return}else if(Pe.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Pe.__hasExternalTextures)re.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const st=b.depthTexture;if(Pe.__boundDepthTexture!==st){if(st!==null&&j.has(st)&&(b.width!==st.image.width||b.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(De=!0);const He=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[z])?$=He[z][ie]:$=He[z],Q=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?$=j.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?$=He[ie]:$=He,ne.copy(b.viewport),ge.copy(b.scissor),xe=b.scissorTest}else ne.copy(k).multiplyScalar(ee).floor(),ge.copy(V).multiplyScalar(ee).floor(),xe=oe;if(ie!==0&&($=B),x.bindFramebuffer(D.FRAMEBUFFER,$)&&x.drawBuffers(b,$),x.viewport(ne),x.scissor(ge),x.setScissorTest(xe),Q){const Pe=j.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,ie)}else if(De){const Pe=z;for(let ke=0;ke<b.textures.length;ke++){const He=j.get(b.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,He.__webglTexture,ie,Pe)}}else if(b!==null&&ie!==0){const Pe=j.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,ie)}H=-1};function iu(b){const z=j.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=C.textureFormatReadable(b.format),z.__typeReadable=C.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,ie,$,Q,De,Oe,Pe=0){if(!(b&&b.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){x.bindFramebuffer(D.FRAMEBUFFER,ke);try{const He=b.textures[Pe],st=He.format,at=He.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pe);const Ge=iu(He);if(Ge.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-$&&ie>=0&&ie<=b.height-Q&&D.readPixels(z,ie,$,Q,Ae.convert(st),Ae.convert(at),De)}finally{const He=te!==null?j.get(te).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,z,ie,$,Q,De,Oe,Pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke)if(z>=0&&z<=b.width-$&&ie>=0&&ie<=b.height-Q){x.bindFramebuffer(D.FRAMEBUFFER,ke);const He=b.textures[Pe],st=He.format,at=He.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pe);const Ge=iu(He);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.bufferData(D.PIXEL_PACK_BUFFER,De.byteLength,D.STREAM_READ),D.readPixels(z,ie,$,Q,Ae.convert(st),Ae.convert(at),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ut=te!==null?j.get(te).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Ut);const Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uf(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,De),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pt),D.deleteSync(Tt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,ie=0){const $=Math.pow(2,-ie),Q=Math.floor(b.image.width*$),De=Math.floor(b.image.height*$),Oe=z!==null?z.x:0,Pe=z!==null?z.y:0;re.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,Oe,Pe,Q,De),x.unbindTexture()},this.copyTextureToTexture=function(b,z,ie=null,$=null,Q=0,De=0){let Oe,Pe,ke,He,st,at,Ge,pt,Ut;const Tt=b.isCompressedTexture?b.mipmaps[De]:b.image;if(ie!==null)Oe=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,ke=ie.isBox3?ie.max.z-ie.min.z:1,He=ie.min.x,st=ie.min.y,at=ie.isBox3?ie.min.z:0;else{const Dt=Math.pow(2,-Q);Oe=Math.floor(Tt.width*Dt),Pe=Math.floor(Tt.height*Dt),b.isDataArrayTexture?ke=Tt.depth:b.isData3DTexture?ke=Math.floor(Tt.depth*Dt):ke=1,He=0,st=0,at=0}$!==null?(Ge=$.x,pt=$.y,Ut=$.z):(Ge=0,pt=0,Ut=0);const yt=Ae.convert(z.format),Kt=Ae.convert(z.type);let Fe;z.isData3DTexture?(re.setTexture3D(z,0),Fe=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(re.setTexture2DArray(z,0),Fe=D.TEXTURE_2D_ARRAY):(re.setTexture2D(z,0),Fe=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const nn=x.getParameter(D.UNPACK_ROW_LENGTH),ut=x.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(D.UNPACK_SKIP_PIXELS),Kn=x.getParameter(D.UNPACK_SKIP_ROWS),Mi=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,He),x.pixelStorei(D.UNPACK_SKIP_ROWS,st),x.pixelStorei(D.UNPACK_SKIP_IMAGES,at);const ss=b.isDataArrayTexture||b.isData3DTexture,Mt=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Dt=j.get(b),Si=j.get(z),Et=j.get(Dt.__renderTarget),yi=j.get(Si.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Et.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let rs=0;rs<ke;rs++)ss&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,j.get(b).__webglTexture,Q,at+rs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,j.get(z).__webglTexture,De,Ut+rs)),D.blitFramebuffer(He,st,Oe,Pe,Ge,pt,Oe,Pe,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||j.has(b)){const Dt=j.get(b),Si=j.get(z);x.bindFramebuffer(D.READ_FRAMEBUFFER,I),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let Et=0;Et<ke;Et++)ss?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,Q,at+Et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,Q),Mt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Si.__webglTexture,De,Ut+Et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Si.__webglTexture,De),Q!==0?D.blitFramebuffer(He,st,Oe,Pe,Ge,pt,Oe,Pe,D.COLOR_BUFFER_BIT,D.NEAREST):Mt?D.copyTexSubImage3D(Fe,De,Ge,pt,Ut+Et,He,st,Oe,Pe):D.copyTexSubImage2D(Fe,De,Ge,pt,He,st,Oe,Pe);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Fe,De,Ge,pt,Ut,Oe,Pe,ke,yt,Kt,Tt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,De,Ge,pt,Ut,Oe,Pe,ke,yt,Tt.data):D.texSubImage3D(Fe,De,Ge,pt,Ut,Oe,Pe,ke,yt,Kt,Tt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,De,Ge,pt,Oe,Pe,yt,Kt,Tt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,De,Ge,pt,Tt.width,Tt.height,yt,Tt.data):D.texSubImage2D(D.TEXTURE_2D,De,Ge,pt,Oe,Pe,yt,Kt,Tt);x.pixelStorei(D.UNPACK_ROW_LENGTH,nn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(D.UNPACK_SKIP_ROWS,Kn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Mi),De===0&&z.generateMipmaps&&D.generateMipmap(Fe),x.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){W=0,F=0,te=null,x.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Gs=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ha,AddEquation:Xi,AddOperation:Gh,AdditiveBlending:Rl,AgXToneMapping:tc,AlphaFormat:lc,AlwaysCompare:$h,AlwaysDepth:So,AlwaysStencilFunc:Xh,ArcCurve:ld,ArrayCamera:bd,BackSide:an,BasicDepthPacking:Hh,Box3:Oi,BoxGeometry:vi,BufferAttribute:Cn,BufferGeometry:Bt,ByteType:sc,Camera:Ac,CanvasTexture:_c,CatmullRomCurve3:Mc,CineonToneMapping:jl,CircleGeometry:Ta,ClampToEdgeWrapping:ti,Color:ot,ColorManagement:lt,ConeGeometry:ts,ConstantAlphaFactor:Bh,ConstantColorFactor:Fh,Controls:Td,CubeCamera:yd,CubeDepthTexture:ad,CubeReflectionMapping:Ui,CubeRefractionMapping:Ji,CubeTexture:gc,CubeUVReflectionMapping:wr,CubicBezierCurve:Sc,CubicBezierCurve3:cd,CullFaceBack:Al,CullFaceFront:Mh,CullFaceNone:vh,Curve:Zn,CurvePath:hd,CustomBlending:yh,CustomToneMapping:ec,CylinderGeometry:Cr,Data3DTexture:id,DataArrayTexture:hc,DataTexture:pc,DepthFormat:si,DepthStencilFormat:Ci,DepthTexture:Ns,DirectionalLight:Rc,DoubleSide:En,DstAlphaFactor:Lh,DstColorFactor:Ih,EllipseCurve:Aa,EqualCompare:Zh,EqualDepth:bo,EquirectangularReflectionMapping:fo,EquirectangularRefractionMapping:po,Euler:_i,EventDispatcher:xi,ExternalTexture:xc,ExtrudeGeometry:zs,Float32BufferAttribute:dt,FloatType:wn,FogExp2:ba,FrontSide:Ni,Frustum:Ea,GLSL3:Ll,GreaterCompare:Jh,GreaterDepth:To,GreaterEqualCompare:Ma,GreaterEqualDepth:Eo,Group:Pi,HalfFloatType:qn,HemisphereLight:Sd,IcosahedronGeometry:Lr,ImageUtils:td,InstancedBufferAttribute:Il,InstancedMesh:Nl,IntType:da,KeepStencilOp:go,Layers:ya,LessCompare:Yh,LessDepth:yo,LessEqualCompare:va,LessEqualDepth:Ps,Light:La,LightShadow:wc,LineCurve:yc,LineCurve3:ud,LinearFilter:Yt,LinearMipmapLinearFilter:Ri,LinearMipmapNearestFilter:mo,LinearSRGBColorSpace:_r,LinearToneMapping:$l,LinearTransfer:xr,MOUSE:fi,Material:es,MathUtils:un,Matrix2:Gl,Matrix3:Qe,Matrix4:ht,MaxEquation:wh,Mesh:ln,MeshBasicMaterial:Rr,MeshDepthMaterial:vd,MeshDistanceMaterial:Md,MeshStandardMaterial:ys,MinEquation:Th,MirroredRepeatWrapping:Ao,MixOperation:kh,MultiplyBlending:Pl,MultiplyOperation:Kl,NearestFilter:Xt,NearestMipmapLinearFilter:nr,NearestMipmapNearestFilter:Vh,NeutralToneMapping:nc,NeverCompare:qh,NeverDepth:Mo,NoBlending:ii,NoColorSpace:ui,NoToneMapping:Vn,NormalBlending:Ts,NotEqualCompare:Kh,NotEqualDepth:wo,Object3D:Ot,ObjectSpaceNormalMap:Wh,OneFactor:Rh,OneMinusConstantAlphaFactor:zh,OneMinusConstantColorFactor:Oh,OneMinusDstAlphaFactor:Dh,OneMinusDstColorFactor:Nh,OneMinusSrcAlphaFactor:Jl,OneMinusSrcColorFactor:Ph,OrthographicCamera:Dr,PCFShadowMap:Es,PCFSoftShadowMap:Sh,PMREMGenerator:Vl,Path:Fl,PerspectiveCamera:_n,Plane:ei,PlaneGeometry:ns,PointLight:Da,Points:od,PointsMaterial:mc,PolyhedronGeometry:wa,QuadraticBezierCurve:bc,QuadraticBezierCurve3:Ec,Quaternion:gi,R11_EAC_Format:Uo,RED_GREEN_RGTC2_Format:gr,RED_RGTC1_Format:ta,REVISION:ua,RG11_EAC_Format:mr,RGBAFormat:An,RGBAIntegerFormat:xa,RGBA_ASTC_10x10_Format:Jo,RGBA_ASTC_10x5_Format:qo,RGBA_ASTC_10x6_Format:Yo,RGBA_ASTC_10x8_Format:Zo,RGBA_ASTC_12x10_Format:Ko,RGBA_ASTC_12x12_Format:$o,RGBA_ASTC_4x4_Format:Bo,RGBA_ASTC_5x4_Format:zo,RGBA_ASTC_5x5_Format:ko,RGBA_ASTC_6x5_Format:Go,RGBA_ASTC_6x6_Format:Vo,RGBA_ASTC_8x5_Format:Ho,RGBA_ASTC_8x6_Format:Wo,RGBA_ASTC_8x8_Format:Xo,RGBA_BPTC_Format:Qo,RGBA_ETC2_EAC_Format:No,RGBA_PVRTC_2BPPV1_Format:Lo,RGBA_PVRTC_4BPPV1_Format:Po,RGBA_S3TC_DXT1_Format:ar,RGBA_S3TC_DXT3_Format:lr,RGBA_S3TC_DXT5_Format:cr,RGBFormat:cc,RGB_BPTC_SIGNED_Format:jo,RGB_BPTC_UNSIGNED_Format:ea,RGB_ETC1_Format:Do,RGB_ETC2_Format:Io,RGB_PVRTC_2BPPV1_Format:Co,RGB_PVRTC_4BPPV1_Format:Ro,RGB_S3TC_DXT1_Format:or,RGFormat:Fi,RGIntegerFormat:_a,RawShaderMaterial:xd,Ray:Ar,Raycaster:Ed,RedFormat:ma,RedIntegerFormat:ga,ReinhardToneMapping:Ql,RenderTarget:nd,RepeatWrapping:pr,ReverseSubtractEquation:Eh,SIGNED_R11_EAC_Format:Fo,SIGNED_RED_GREEN_RGTC2_Format:ia,SIGNED_RED_RGTC1_Format:na,SIGNED_RG11_EAC_Format:Oo,SRGBColorSpace:jt,SRGBTransfer:mt,Scene:rd,ShaderChunk:nt,ShaderLib:zn,ShaderMaterial:Ln,Shape:Pr,ShapeUtils:Yi,ShortType:rc,Sphere:ji,SphereGeometry:Ra,Spherical:kl,SplineCurve:Tc,SrcAlphaFactor:Zl,SrcAlphaSaturateFactor:Uh,SrcColorFactor:Ch,StaticDrawUsage:Qh,SubtractEquation:bh,SubtractiveBlending:Cl,TOUCH:hi,TangentSpaceNormalMap:sa,Texture:Zt,TextureSource:Sa,TorusGeometry:Ca,Triangle:Tn,TubeGeometry:Pa,UVMapping:ic,Uint16BufferAttribute:dc,Uint32BufferAttribute:fc,UniformsLib:Re,UniformsUtils:_d,UnsignedByteType:hn,UnsignedInt101111Type:ac,UnsignedInt248Type:Ds,UnsignedInt5999Type:oc,UnsignedIntType:Xn,UnsignedShort4444Type:fa,UnsignedShort5551Type:pa,UnsignedShortType:Ls,VSMShadowMap:Ss,Vector2:ve,Vector3:P,Vector4:At,WebGLCoordinateSystem:Gn,WebGLCubeRenderTarget:Cc,WebGLRenderTarget:Rn,WebGLRenderer:Nd,WebGLUtils:Dd,WebGPUCoordinateSystem:Is,WebXRController:_o,ZeroFactor:Ah,createCanvasElement:jh,error:ct,log:Dl,warn:Ke,warnOnce:Zi},Symbol.toStringTag,{value:"Module"})),ch={type:"change"},Pc={type:"start"},Ud={type:"end"},uo=new Ar,uh=new ei,Sx=Math.cos(70*un.DEG2RAD),zt=new P,cn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sl=1e-6;class yx extends Td{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new gi,this._lastTargetPosition=new P,this._quat=new gi().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kl,this._sphericalDelta=new kl,this._scale=1,this._panOffset=new P,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new P,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ex.bind(this),this._onPointerDown=bx.bind(this),this._onPointerUp=Tx.bind(this),this._onContextMenu=Dx.bind(this),this._onMouseWheel=Rx.bind(this),this._onKeyDown=Cx.bind(this),this._onTouchStart=Px.bind(this),this._onTouchMove=Lx.bind(this),this._onMouseDown=wx.bind(this),this._onMouseMove=Ax.bind(this),this._interceptControlDown=Ix.bind(this),this._interceptControlUp=Nx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<Sx?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sl||this._lastTargetPosition.distanceToSquared(this.target)>Sl?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ex(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Tx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ud),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case fi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case fi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Pc)}function Ax(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Rx(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Pc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ud))}function Cx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Px(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Pc)}function Lx(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function Dx(n){this.enabled!==!1&&n.preventDefault()}function Ix(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const er=new P;function yn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;er.copy(e),er[i]=0,er.normalize();const l=.5*o/(o+a),u=1-er.angleTo(n)/c;return Math.sign(er[t])===1?u*l:a/(o+a)+l+l*(1-u)}class Lc extends vi{constructor(e=1,t=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new P,l=new P,u=new P(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,M=new P,m=.5/o;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:M.set(1,0,0),d[S+0]=yn(M,l,"z","y",r,i),d[S+1]=1-yn(M,l,"y","z",r,t);break;case 1:M.set(-1,0,0),d[S+0]=1-yn(M,l,"z","y",r,i),d[S+1]=1-yn(M,l,"y","z",r,t);break;case 2:M.set(0,1,0),d[S+0]=1-yn(M,l,"x","z",r,e),d[S+1]=yn(M,l,"z","x",r,i);break;case 3:M.set(0,-1,0),d[S+0]=1-yn(M,l,"x","z",r,e),d[S+1]=1-yn(M,l,"z","x",r,i);break;case 4:M.set(0,0,1),d[S+0]=1-yn(M,l,"x","y",r,e),d[S+1]=1-yn(M,l,"y","x",r,t);break;case 5:M.set(0,0,-1),d[S+0]=yn(M,l,"x","y",r,e),d[S+1]=1-yn(M,l,"y","x",r,t);break}}static fromJSON(e){return new Lc(e.width,e.height,e.depth,e.segments,e.radius)}}function Ux(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Bt;let l=0;for(let u=0;u<n.length;++u){const f=n[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(const u in r){const f=hh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let M=0;M<o[u].length;++M)d.push(o[u][M][h]);const g=hh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function hh(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Cn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<t;g++){const M=u.getComponent(h,g);a.setComponent(h+f,g,M)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Fx({THREE:n,root:e,dock:t,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:u,torus:f,rod:h,sign:d,paperBoat:g,batchStatic:M,persist:m,say:p,refresh:S,chime:w,reduced:v}){const y=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],A=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],t);u([-.7,.3,-.83],.3,.38,s.concrete,_),f([-.7,.51,-.83],.31,.035,s.copper,_),u([-.7,.49,-.83],.26,.045,s.dark,_);const E=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],E),f([0,0,0],.36,.015,s.copper,E,[0,0,.35]),u([.66,.34,-.22],.27,.45,s.rust,_),f([.66,.56,-.22],.28,.028,s.copper,_),u([.66,.55,-.22],.24,.03,r("#495441"),_);const R=o([.66,.56,-.22],_);h([0,0,0],[0,.83,0],.026,s.copper,R);for(const[k,V,oe]of[[-.17,.23,-.5],[.17,.41,.5]]){const K=l([k,V,0],[.24,.035,.085],s.mint,R);K.rotation.z=oe}const L=o([0,.95,0],R);l([0,0,0],.115,s.light,L),f([0,0,0],.28,.021,s.cream,L,[0,0,0]),f([0,0,0],.27,.021,s.copper,L,[0,Math.PI/2,0]);const N=[];for(let k=0;k<4;k++){const V=k*Math.PI/2,oe=o([Math.cos(V)*.3,.13+Math.sin(V)*.12,Math.sin(V)*.3],R);h([0,-.15,0],[0,.2,0],.012,s.copper,oe),l([0,.23,0],.065,s.cream,oe),M(oe,[]),N.push(oe)}c([-.46,.2,.32],[.68,.12,.47],s.dark,_);const B=o([-.46,.29,.32],_);c([0,0,0],[.5,.025,.32],s.cream,B);for(const k of[-.23,.23])h([k,.016,-.14],[0,.016,.06],.009,s.copper,B);l([0,.027,.06],[.04,.015,.04],s.rust,B),d("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),M(E,[]),M(L,[]),M(R,[L,...N]),M(B,[]),M(_,[E,R,B]);const I=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),t);I.castShadow=!1;const O=o([0,0,0],e),W=g(O,[8.3,.14,3.5],1.05),F=o([0,.36,0],W),te=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],F),H=l([0,.12,0],[.085,.13,.085],s.light,F),J=c([0,.09,0],[.23,.025,.16],s.cream,F);J.rotation.z=.2;const ne=[te,H,J];M(W,[F]);const ge=new n.Vector3(8.3,.14,3.5),xe=new n.Vector3(8.45,.14,3.65),Ie=new n.Vector3(9.2,-2.7,6.5);let Be=-1,me=i.dockTrips>=2?1:.02;function Z(){E.visible=i.dockTrips>=1,R.visible=i.dockTrips>=2,B.visible=i.dockTrips>=3,N.forEach((k,V)=>k.visible=i.dockTrips>=5+V*3),F.visible=i.dockPending,ne.forEach((k,V)=>k.visible=V===i.dockTrips%3),W.position.copy(i.dockPending?xe:ge)}Z();function ee(){if(!(i.boat>0))if(i.dockPending){const k=y[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(me=.02),m(),Z(),p(k.line),w(330),S()}else i.boat=18,Be=-1,ne.forEach((k,V)=>k.visible=V===i.dockTrips%3),F.visible=!1,p("ну плыви. я тут."),S()}function pe(k,V){if(i.boat>0){i.boat=Math.max(0,i.boat-k);const oe=18-i.boat,K=oe<7?0:oe<11?1:2;K!==Be&&(Be=K,S()),oe<2?W.position.lerpVectors(ge,xe,n.MathUtils.smoothstep(oe,0,2)):oe<7?W.position.lerpVectors(xe,Ie,n.MathUtils.smoothstep(oe,2,7)):oe<11?W.position.copy(Ie):oe<16?W.position.lerpVectors(Ie,xe,n.MathUtils.smoothstep(oe,11,16)):W.position.copy(xe),W.visible=oe<7||oe>=11,F.visible=oe>=11,W.rotation.y=oe>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),W.visible=!0,Z(),p("вернулся. с чем-то."),w(554),S())}W.rotation.z=v?0:Math.sin(V*1.7)*.035,i.boat===0&&(W.visible=!0,W.position.y=(i.dockPending?xe.y:ge.y)+Math.sin(V*1.2)*.02,W.rotation.y=i.dockPending?Math.PI+.2:0),E.position.y=.97+Math.sin(V*.9)*.055,E.rotation.y=V*.15,me=n.MathUtils.damp(me,1,1.1,k),R.scale.setScalar(me),L.rotation.y=v?0:V*.23,I.material.emissiveIntensity=i.dockPending?1.5+Math.sin(V*4)*1.1:1.2}function se(){if(i.boat>0){const k=18-i.boat;return{disabled:!0,action:k<7?"плывёт…":k<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${y[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const k=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:k===2?`${y[k].description} ${A[Math.floor((i.dockTrips-1)/3)%A.length]}`:y[k].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:O,gallery:_,beacon:I,launchOrCollect:ee,update:pe,card:se,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:W.position.toArray(),visible:W.visible,cargo:F.visible,stone:E.visible,plant:R.visible,plantScale:me,letter:B.visible,buds:N.filter(k=>k.visible).length})}}async function Fd(n,e=12e3){const t=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),t==null||t.abort()},e)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...t?{signal:t.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function Ox({api:n,enabled:e}){if(!e)return;const t=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",u=!s.matches,f=!1,h=!1,d=!1,g=!1,M=!1,m=0,p=null,S=0,w=0,v=0,T=!1;try{const X=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");X!==null&&(u=X==="open")}catch{}const y=(X,ue,be)=>{const Le=document.createElement(X);return ue&&(Le.className=ue),be&&(Le.textContent=be),Le},A=y("aside","resident-history");A.id="resident-history",A.setAttribute("aria-label","История мыслей и действий Головы");const _=y("div","history-heading"),E=y("div"),R=y("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),L=y("h3","","на полях"),N=y("span","history-eyes");N.setAttribute("aria-hidden","true"),L.append(N),E.append(R,L,y("p","history-subtitle","мысли, дела и прочее"));const B=y("button","history-close","−");B.type="button",B.setAttribute("aria-label","Свернуть историю"),B.title="Свернуть историю",_.append(E,B);const I=y("div","history-filters");I.setAttribute("role","group"),I.setAttribute("aria-label","Показывать в истории");const O=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[X,ue]of O){const be=y("button","",ue);be.type="button",be.dataset.filter=X,be.setAttribute("aria-pressed",String(l===X)),be.onclick=()=>{l=X,V(!1),F.scrollTop=0;for(const Le of I.children)Le.setAttribute("aria-pressed",String(Le.dataset.filter===l))},I.append(be)}const W=y("button","history-new");W.type="button",W.hidden=!0;const F=y("div","history-scroll");F.tabIndex=0,F.setAttribute("aria-label","Записи, от новых к старым");const te=y("ol","history-list"),H=y("p","history-empty","собираю заметки…");F.append(te,H);const J=y("div","history-foot"),ne=y("span","history-live","подключаюсь…"),ge=y("span","history-count"),xe=y("button","history-retry","повторить подключение");xe.type="button",xe.hidden=!0,xe.onclick=()=>{U(),window.dispatchEvent(new Event("beznogim:retry"))},J.append(ne,ge,xe),A.append(_,I,W,F,J);const Ie=y("button","history-toggle");Ie.type="button",Ie.setAttribute("aria-controls",A.id);const Be=y("span","","на полях"),me=y("span","history-badge");me.hidden=!0,Ie.append(y("span","history-toggle-icon","◌"),Be,me),document.body.append(A),document.querySelector(".footer-actions").append(Ie);function Z(X,ue=!0){if(u=X,A.hidden=!u,Ie.hidden=u,Ie.setAttribute("aria-expanded",String(u)),ue)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",u?"open":"closed")}catch{}u?(F.scrollTop<30?ee():pe(),B.focus({preventScroll:!0})):ue&&Ie.focus({preventScroll:!0})}A.hidden=!u,Ie.hidden=u,Ie.setAttribute("aria-expanded",String(u)),Ie.onclick=()=>{Z(!0),(g||!h)&&U()},B.onclick=()=>Z(!1),s.addEventListener("change",()=>{let X=!s.matches;try{const ue=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");ue!==null&&(X=ue==="open")}catch{}Z(X,!1)}),document.addEventListener("keydown",X=>{X.key==="Escape"&&u&&!document.querySelector("dialog[open]")&&Z(!1)});function ee(){m=0,me.hidden=!0,W.hidden=!0}function pe(){me.textContent=String(m),me.hidden=!m,W.textContent=`↑ к новым · ${m}`,W.hidden=!(u&&m)}W.onclick=()=>{F.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),ee()},F.addEventListener("scroll",()=>{F.scrollTop<30&&ee()},{passive:!0});function se(X){return l==="all"||(l==="thoughts"?X.type==="muse"||X.type==="say":X.type!=="muse"&&X.type!=="say")}function k(X,ue){const be=X.type==="muse"||X.type==="say",Le=y("li",`history-entry ${be?"history-thought":"history-action"}${ue?" is-new":""}`);Le.dataset.eventId=String(X.id),Le.dataset.type=X.type;const D=y("div","history-meta"),We=y("time","",r.format(X.time*1e3));We.dateTime=new Date(X.time*1e3).toISOString(),We.title=o.format(X.time*1e3)+" · "+We.textContent+" мск";const Ue={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return D.append(y("span","",Ue[X.type]||"во дворе"),We),Le.append(D,y("p","",X.text)),Le}function V(X,ue=new Set){const be=F.scrollTop>30,Le=F.getBoundingClientRect().top,D=be?[...te.querySelectorAll("[data-event-id]")].find(re=>re.getBoundingClientRect().bottom>Le):null,We=D==null?void 0:D.dataset.eventId,Ue=D==null?void 0:D.getBoundingClientRect().top,C=F.scrollTop,x=document.createDocumentFragment();let Y="";const j=[...i.values()].sort((re,Me)=>Me.id-re.id).filter(se);for(const re of j){const Me=o.format(re.time*1e3);if(Me!==Y){const ye=y("li","history-day",Me);x.append(ye),Y=Me}x.append(k(re,X&&ue.has(re.id)&&!be))}if(te.replaceChildren(x),H.hidden=j.length>0,H.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":h?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!j.length&&(H.textContent="в этом фильтре пока нет записей."),ge.textContent=i.size?M?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:h?"записей: 0 · мск":"записи ещё не загружены",xe.hidden=!(g||!h&&!d),xe.disabled=d,We){const re=te.querySelector(`[data-event-id="${We}"]`);F.scrollTop=C+(re?re.getBoundingClientRect().top-Ue:0)}else be||(F.scrollTop=0)}function oe(X,ue=!1){if(!X||!Array.isArray(X.entries))return!1;const be=Math.max(0,...i.keys()),Le=new Set;let D=0,We=0;for(const Ue of X.entries)!Ue||typeof Ue!="object"||!Number.isSafeInteger(Ue.id)||Ue.id<1||!Number.isFinite(Ue.time)||Math.abs(Ue.time)>864e10||!a.has(Ue.type)||typeof Ue.text!="string"||!Ue.text.trim()||(We++,i.has(Ue.id)||(T=!0,i.set(Ue.id,{id:Ue.id,time:Ue.time,type:Ue.type,text:Ue.text.slice(0,280)}),Le.add(Ue.id),Ue.id>be&&se(Ue)&&D++));if(X.entries.length&&!We)return!1;if(M=M||!!X.has_older||!!X.has_more||i.size>t,i.size>t){const Ue=[...i.keys()].sort((C,x)=>C-x);for(const C of Ue.slice(0,i.size-t))i.delete(C)}return f&&!ue&&D&&(!u||F.scrollTop>30)&&(m+=D,pe()),(Le.size||!f)&&V(f&&!ue,Le),!0}function K(){if(!(!i.size||!T)){T=!1,w=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:w,has_older:M,entries:[...i.values()]}))}catch{}}}function ae(){try{const X=localStorage.getItem(c);if(!X||X.length>1e6)return;const ue=JSON.parse(X);if(ue.version!==1||!Number.isFinite(ue.saved_at)||ue.saved_at<=0)return;oe(ue,!0),w=ue.saved_at,f=i.size>0,T=!1}catch{}}async function U(){if(!d){d=!0,v=performance.now(),xe.disabled=!0;try{const X=await Fd(n+"/api/history");if(!oe(X,!0))throw Error("invalid-public-history");h=!0,f=!0,g=!1,K(),V(!1)}catch{g=!0,V(!1)}finally{d=!1,xe.disabled=!1,q()}}}function q(){var be;const X=!p||performance.now()-S>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";A.classList.toggle("history-offline",X);const ue=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";ne.textContent=X?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",X&&i.size&&(ne.textContent+=ue),!X&&g&&(ne.textContent+=" · архив не дошёл"),ne.title=((be=p==null?void 0:p.action)==null?void 0:be.label)||""}function ce(X){var We;const ue=Math.max(0,...i.keys()),be=Array.isArray((We=X.history)==null?void 0:We.entries)?X.history.entries:[];p=X,S=performance.now(),oe(X.history)&&i.size&&(f=!0,K()),q();const Le=be.filter(Ue=>Ue&&Number.isSafeInteger(Ue.id)).map(Ue=>Ue.id);(ue&&Le.length&&Math.min(...Le)>ue&&performance.now()-v>1e3||!h&&performance.now()-v>15e3)&&U()}window.addEventListener("beznogim:state",X=>ce(X.detail)),window.__beznogimState&&ce(window.__beznogimState),ae(),V(!1),q(),U(),window.addEventListener("online",()=>{(g||!h)&&U()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!h)&&U()}),setInterval(()=>{q(),(g||!h)&&U()},15e3)}function Bx({head:n,headDestination:e,state:t,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,u=0,f=0,h=!1,d=!1,g=!1,M=0,m=null,p=null,S=null,w="",v=!0;const T=n.position.clone(),y=document.createElement("aside");y.className="resident-thought",y.hidden=!0,y.setAttribute("aria-label","Мысли Головы");const A=document.createElement("span");A.className="thought-kicker",A.textContent="про себя";const _=document.createElement("p");y.append(A,_),document.body.append(y);const E=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),R=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";Ox({api:R,enabled:E});const L=document.querySelector(".territory-nav"),N=document.createElement("div");N.className="resident-strip",N.hidden=!0;const B=document.createElement("span");B.className="resident-status",B.textContent="подключаюсь к голове";const I=document.createElement("div");I.className="resident-vitals",I.hidden=!0,I.setAttribute("aria-label","Самочувствие Головы");const W=[{key:"hunger",label:"сытость",color:"#e4b877",icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},{key:"thirst",label:"вода",color:"#8fced9",icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},{key:"energy",label:"силы",color:"#d5dc8e",icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},{key:"mood",label:"настроение",color:"#cbb2d7",icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'}].map(k=>{const V=document.createElement("div");return V.className="need-meter",V.dataset.need=k.key,V.style.setProperty("--need-color",k.color),V.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${k.icon}</svg><div class="need-detail"><div class="need-heading"><b>${k.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${k.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`,I.append(V),{key:k.key,card:V,value:V.querySelector(".need-value"),bar:V.querySelector(".need-track")}}),F=document.createElement("button");F.type="button",F.textContent="к голове",F.onclick=()=>{d=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),Ie()};const te=document.createElement("button");te.type="button",te.textContent="поиграть самому",te.onclick=()=>{d=!d,g=!1,Ie()};const H=document.createElement("button");H.type="button",H.textContent="мысли",H.setAttribute("aria-pressed","true"),H.onclick=()=>{v=!v,H.setAttribute("aria-pressed",String(v))},N.append(B,I,F,te,H),L.append(N);function J(){return Date.now()/1e3+f}function ne(){return l&&J()-l.heartbeat<60&&l.resident_status!=="stopped"}function ge(){return h&&l&&!d}function xe(){var oe,K;const k=(K=(oe=l==null?void 0:l.mechanics)==null?void 0:oe.vitals)==null?void 0:K.public;if(!k){I.hidden=!0;return}const V=ae=>Math.max(0,Math.min(100,Math.round(Number(ae)||0)));I.hidden=!1;for(const ae of W){const U=V(k[ae.key]);ae.value.textContent=String(U),ae.bar.setAttribute("aria-valuenow",String(U)),ae.card.style.setProperty("--need-fill",String(U/100)),ae.card.dataset.low=String(U<=20)}}function Ie(){const k=d?"ты в песочнице":h?ne()?l!=null&&l.action&&l.action.ends>J()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";k!==w&&(w=k,B.textContent=k),te.textContent=d?"вернуться к голове":"поиграть самому",F.setAttribute("aria-pressed",String(g))}function Be(k){var oe,K;if(!k||k.version!==1||!Array.isArray(k.position)||k.position.length!==3||!k.position.every(Number.isFinite)||!k.objects||!Number.isFinite(k.server_time)||!Number.isFinite(k.heartbeat)||l&&(k.server_time<l.server_time||k.server_time===l.server_time&&Number.isFinite(k.revision)&&Number.isFinite(l.revision)&&k.revision<l.revision))return;if(f=k.server_time-Date.now()/1e3,l=k,u=performance.now(),h=!0,N.hidden=!1,m&&((oe=k.release)!=null&&oe.commit)&&m!==k.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((K=k.release)==null?void 0:K.commit)||m;const V=k.speech;V&&V.time>M&&V.until>J()&&(M=V.time,d||a(V.text)),window.__beznogimState=k,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:k})),xe(),Ie()}function me(){const k=l.action;if((k==null?void 0:k.kind)==="move"){const V=Math.max(0,Math.min(1,(J()-k.started)/Math.max(.001,k.ends-k.started)));return k.from.map((oe,K)=>oe+(k.to[K]-oe)*V)}return l.position}function Z(){if(!ge())return;const k=l.objects;k.engine&&(t.running=!!k.engine.running),k.workshop&&(t.roof=k.workshop.roof_open?1:0),k.radio&&(t.radio=k.radio.station,p!==t.radio&&(p=t.radio,o())),k.garden&&(t.harvest=k.garden.harvest,S!==null&&t.harvest>S&&c(),S=t.harvest);const V=l.action;t.brew=(V==null?void 0:V.effect)==="brew"?Math.max(0,V.ends-J()):0,t.loop=0,Ie()}function ee(){if(!ge()){y.hidden=!0;return}const k=me();n.position.set(k[0],k[1]+Math.sin(J()*1.4)*.1,k[2]),e.set(...k),g&&i.target.lerp(n.position,.08);const V=l.musing;if(v&&ne()&&(V!=null&&V.text)&&V.until>J()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==V.text&&(_.textContent=V.text),T.copy(n.position),T.y+=1.8,T.project(s),T.z>=-1&&T.z<=1&&Math.abs(T.x)<1&&Math.abs(T.y)<1){y.hidden=!1;const oe=y.offsetWidth,K=y.offsetHeight,ae=Math.max(oe/2+12,Math.min(innerWidth-oe/2-12,(T.x+1)*innerWidth/2));let U=(1-T.y)*innerHeight/2-18;const q=L.getBoundingClientRect(),ce=ae-oe/2<q.right&&ae+oe/2>q.left?q.bottom+12:18,X=U-K<ce;X&&(U=Math.max(ce+K,(1-T.y)*innerHeight/2+70+K)),U=Math.min(innerHeight-70,Math.max(K+18,U)),y.classList.toggle("below-head",X),y.style.transform=`translate3d(${Math.round(ae)}px,${Math.round(U)}px,0) translate(-50%,-100%)`}else y.hidden=!0;else y.hidden=!0}function pe(){ge()&&(d=!0,g=!1,Ie())}function se(){if(!E)return;N.hidden=!1;let k=!1;async function V(){if(!k){k=!0;try{const K=await Fd(R+"/api/state");Be(K),l&&!t.selected&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-u>35e3)&&(h=!1),Ie()}finally{k=!1}}}try{const K=new EventSource(R+"/api/events");K.addEventListener("state",ae=>{try{Be(JSON.parse(ae.data))}catch{}}),K.onerror=()=>{h=!1,Ie()}}catch{h=!1,Ie()}V();function oe(){(!h||!l||performance.now()-u>3e4)&&V()}window.addEventListener("online",oe),window.addEventListener("beznogim:retry",V),document.addEventListener("visibilitychange",()=>{document.hidden||oe()}),setInterval(()=>{l&&performance.now()-u>35e3&&(h=!1),Ie(),oe()},15e3)}return i.addEventListener("start",()=>{g=!1,Ie()}),se(),{sync:Z,place:ee,localPlay:pe,unfollow:()=>{g=!1},watching:ge,inspect:()=>{var k;return{connected:h,sandbox:d,follow:g,alive:!!ne(),revision:l==null?void 0:l.revision,release:(k=l==null?void 0:l.release)==null?void 0:k.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!y.hidden,position:l?me():null}}}}const zx=120,kx=24,Gx=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"frontier",name:"свободная земля"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"frontier",name:"свободная земля"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"settled",name:"амнистия"},{id:"1:1",x:24,z:24,status:"frontier",name:"свободная земля"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Bn={size:zx,sectorSize:kx,sectors:Gx};function Vx({root:n,camera:e,controls:t,mobile:i,go:s,overview:r,home:o}){const a=new Pi;a.name="unsettled-territory",n.add(a);const c=Bn.size/2,l=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],u=new Pr;l.forEach(([E,R],L)=>L?u.lineTo(E,-R):u.moveTo(E,-R)),u.closePath();const f=new zs(u,{depth:1.8,bevelEnabled:!1});f.rotateX(-Math.PI/2),f.translate(0,-3.5,0);const h=new ln(f,new ys({color:"#233e35",roughness:1}));h.receiveShadow=!0,a.add(h);let d=8409;const g=()=>(d=d*1664525+1013904223>>>0)/4294967296,M=new Nl(new Lr(1,0),new ys({color:"#8a9980",roughness:1}),150),m=new Nl(new ts(1,1,4),new ys({color:"#9aa880",roughness:1}),850),p=new Ot;for(const[E,R,L]of[[M,150,!0],[m,850,!1]]){for(let N=0;N<R;N++){let B,I;do B=(g()-.5)*(Bn.size-10),I=(g()-.5)*(Bn.size-10);while(Math.abs(B)<11&&Math.abs(I)<9);const O=L?.15+g()*.48:.12+g()*.42;p.position.set(B,-1.7+O*.25,I),p.rotation.set(0,g()*6.28,L?g()*.25:0),p.scale.set(L?O*1.3:.07,O,L?O:.07),p.updateMatrix(),E.setMatrixAt(N,p.matrix)}E.instanceMatrix.needsUpdate=!0,a.add(E)}const S=new ys({color:"#c1b692",roughness:1});for(let E=0;E<16;E++){const R=new ln(new vi(1.15,.12,.65),S);R.position.set(-.6,-.06-E*.105,5.8+E*.7),R.receiveShadow=!0,a.add(R)}const w=document.createElement("nav");w.className="territory-nav",w.setAttribute("aria-label","Путешествие по миру"),w.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(w);const v=document.createElement("dialog");v.id="territory-dialog",v.setAttribute("aria-labelledby","territory-title"),v.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор, сырный погреб и кабачковый мост. Тропы ведут к обоим местам; дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(v);const T=v.querySelector("#territory-grid");for(const E of Bn.sectors){const R=document.createElement("button");R.type="button",R.dataset.sector=E.id,R.className=E.status==="settled"?"settled":"",R.textContent=E.status==="settled"?`● ${E.id==="0:0"?"двор":E.name}`:`· ${E.id}`,R.setAttribute("aria-label",`${E.name}, ${E.id}`),R.onclick=()=>{v.close(),s(E.x,E.z,E.status==="settled")},T.append(R)}document.querySelector("#territory-map").onclick=()=>v.showModal(),document.querySelector("#world-overview").onclick=r,v.querySelector("#territory-close").onclick=()=>v.close(),v.querySelector("#territory-home").onclick=()=>{v.close(),o()};const y=w.querySelector("#territory-location");let A="";function _(){const E=Math.round(t.target.x/Bn.sectorSize),R=Math.round(t.target.z/Bn.sectorSize),L=`${E}:${R}`;if(L!==A){A=L;const N=Bn.sectors.find(B=>B.id===L);y.textContent=`${(N==null?void 0:N.status)==="settled"?N.name:"свободная земля"} · ${L}`;for(const B of T.children)B.classList.toggle("current",B.dataset.sector===L)}}return{half:c,update:_,inspect:()=>({size:Bn.size,sectorSize:Bn.sectorSize,sectors:Bn.sectors.length,settled:Bn.sectors.filter(E=>E.status==="settled").length,visible:n.visible,sector:A})}}function Hx({THREE:n,root:e,scene:t,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:u,torus:f,sign:h,paperBoat:d,batchStatic:g,changed:M,chime:m}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const S={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},w=[1,2,-1,1,2,-1];function v(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:S.wins,trace:S.trace}))}catch{}}const T=o([-.1,.08,4.3],e);a([0,.22,0],[1.35,.44,1.4],s.concrete,T),a([0,.46,0],[1.22,.08,1.3],s.dark,T);const y=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const X of[-.62,.62])for(const ue of[-.64,.64])u([X,.46,ue],[X,1.45,ue],.024,s.copper,T);for(const X of[-.62,.62])a([X,.96,0],[.018,.95,1.28],y,T);a([0,.96,-.64],[1.24,.95,.018],y,T);const A=o([0,1.45,-.64],T);for(const X of[-.62,.62])u([X,0,0],[X,.36,.64],.026,s.copper,A);for(const X of[-.62,.62])u([X,.36,.64],[X,0,1.28],.026,s.copper,A);u([-.62,.36,.64],[.62,.36,.64],.026,s.copper,A);const _=a([0,.18,.32],[1.26,.025,.72],y,A);_.rotation.x=-.51;const E=a([0,.18,.96],[1.26,.025,.72],y,A);E.rotation.x=.51;const R=o([0,.52,0],T);l([0,.2,0],.026,.4,s.leaf,R);for(const X of[-1,1]){const ue=c([X*.15,.27,0],[.22,.055,.09],s.leaf,R);ue.rotation.z=X*.35}const L=c([0,.25,.12],[.23,.16,.27],s.copper,R),N=c([.42,.58,.46],[.15,.1,.18],s.copper,T);N.visible=S.wins>0;const B=o([-.76,.7,.69],T);a([0,.28,0],[.13,.66,.06],s.cream,B);const I=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),B);c([0,-.06,.04],.065,s.rust,B),h("ПАРНИК",[0,.3,.716],.93,.22,T,{size:49});const O=f([0,2.05,0],.46,.016,s.mint,T);O.visible=S.trace;const W=[];for(let X=0;X<6;X++)W.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),T));g(T,[A,R,B,O,N,...W]),g(A,[]),g(R,[L]),g(B,[I]);let F=0,te=0;function H(){Object.assign(S,{temp:4,turn:0,mode:"playing"}),F=0,M()}function J(X){if(S.mode!=="playing")return;const ue={heat:2,wait:0,vent:-2};X in ue&&(S.temp+=w[S.turn]+ue[X],S.turn++,S.temp>6?(S.mode="hot",F=3,m(110)):S.temp<3?(S.mode="cold",m(165)):S.turn===6&&(S.mode="won",S.wins=Math.min(99,S.wins+1),N.visible=!0,v(),m(660)),M())}function ne(){let X="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return S.mode==="playing"&&(X=`Тепло ${S.temp} / норма 3–6. Такт ${S.turn+1} из 6. Следующее солнце: ${w[S.turn]>0?"+":""}${w[S.turn]}. Выбери один ход.`),S.mode==="hot"&&(X=`Тепло ${S.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),S.mode==="cold"&&(X=`Тепло ${S.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),S.mode==="won"&&(X="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:X,action:S.mode==="idle"?"вырастить вычисление":"начать заново"}}const ge=o([0,0,0],t);ge.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,ge),a([0,-.42,0],[6.8,.08,5.6],s.dark,ge);for(const X of[-3.2,3.2])for(const ue of[-2.6,2.6])u([X,-.4,ue],[X,4,ue],.055,s.copper,ge);for(const X of[-3.2,3.2])u([X,4,-2.6],[X,5.7,0],.055,s.copper,ge),u([X,5.7,0],[X,4,2.6],.055,s.copper,ge);u([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,ge),a([-3.2,1.8,0],[.025,4.4,5.2],y,ge),a([0,1.8,-2.6],[6.4,4.4,.025],y,ge),h("СОН / 01",[0,-.12,2.93],2.2,.38,ge,{size:52});const xe=o([0,1.6,0],ge);c([0,0,0],1.16,r("#5f9c85"),xe);for(let X=0;X<10;X++){let ue=X*2.4;const be=c([Math.sin(ue)*.95,Math.cos(X*1.2)*.6,Math.cos(ue)*.95],[.35,.2,.3],s.leaf,xe);be.rotation.y=ue}f([0,0,0],1.32,.028,s.copper,xe,[.4,0,.2]);const Ie=o([0,1.6,0],ge),Be=[];for(let X=0;X<28;X++){const ue=a([0,0,0],[.53,.11,.32],X%4?s.cream:s.concrete,Ie);Be.push(ue)}const me=d(ge,[1.7,-.05,1],1.65),Z=c([0,.65,0],.13,s.cream,me),ee=o([0,.65,0],me);ee.visible=!1;for(let X=0;X<8;X++){let ue=X/8*Math.PI*2;u([Math.sin(ue)*.27,Math.cos(ue)*.27,0],[Math.sin(ue)*.5,Math.cos(ue)*.5,0],.026,s.light,ee)}const pe=i.clone(!0);ge.add(pe),pe.scale.setScalar(.72),pe.position.set(-2,1,1.3),pe.rotation.z=-.25;const se=o([-2,-.05,1.3],ge);l([0,0,0],.55,.3,s.cream,se),f([.58,0,0],.25,.04,s.copper,se,[0,0,0]);const k=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,ge);k.rotation.y=.2;let V=0,oe=0,K=!1;g(ge,[xe,Ie,me,pe]),g(xe,[]);function ae(){K=!0,V=0,oe=0,ge.visible=!0,e.visible=!1,M()}function U(){K=!1,ge.visible=!1,e.visible=!0,M()}function q(){K&&(V===3?(V=0,oe=0):(V++,m(220+V*110),V===3&&(S.trace=!0,O.visible=!0,v())),M())}function ce(X,ue){te=n.MathUtils.damp(te,S.mode==="hot"?-1.1:S.mode==="playing"?-.08:0,4,X),A.rotation.x=te,R.scale.y=n.MathUtils.damp(R.scale.y,S.mode==="hot"?.2:S.mode==="cold"?.45:S.mode==="won"?1.25:.6+S.turn*.08,4,X),L.visible=S.mode==="won",I.scale.y=.3*Math.max(.05,S.temp/8),I.position.y=-.015+S.temp/8*.15,O.rotation.z=Math.sin(ue*.3)*.15,F=Math.max(0,F-X),W.forEach((be,Le)=>{be.visible=F>0;const D=(3-F+Le*.18)%1.5;be.position.set(Math.sin(Le*2)*D*.35,1.5+D,Math.cos(Le*2)*D*.35),be.scale.setScalar(.1*(.4+D))}),K&&(oe=n.MathUtils.damp(oe,V,2,X),xe.rotation.y=ue*.08,Be.forEach((be,Le)=>{const D=Le/28*Math.PI*2+ue*.055*Math.min(1,oe),We=Math.min(1,oe);be.position.set(Math.sin(D)*(1.8+We*.35),Math.cos(D)*(1.8-We*1.5),Math.cos(D)*We*1.5),be.rotation.set(0,-D*We,Math.PI/2-D*(1-We))}),Ie.rotation.y=oe*.32,me.position.y=-.05+oe*1.12,me.position.x=1.7-oe*.32,me.rotation.y=.2+oe*.35,Z.scale.setScalar(.13*(1+Math.max(0,oe-2)*2)),ee.visible=oe>2.2,ee.rotation.z=ue*.22,pe.position.y=1+Math.sin(ue*.8)*.06)}return{house:T,start:H,step:J,card:ne,update:ce,enter:ae,exit:U,breathe:q,inspect:()=>({...S,weather:[...w],dream:K,dreamStep:V,phase:oe,lidAngle:te,rootVisible:e.visible,dreamVisible:ge.visible,boatY:me.position.y,rays:ee.visible})}}function Wx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:f,torus:h,sign:d,batchStatic:g,chime:M}){const m=a([0,0,0],e);m.name="dream-02-water-sleeps",m.visible=!1;const p=r("#c39860"),S=r("#e0c58b"),w=r("#465c63"),v=r("#80b9be",{metalness:.15,roughness:.35}),T=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),S,[0,-.11,0],null,m);for(let me=0;me<13;me++){const Z=.15+me/12*Math.PI*1.42,ee=Math.sin(Z)*3.65,pe=Math.cos(Z)*3.65,se=c([ee,.48,pe],[.75,1.08,.19],S,m);se.rotation.y=Z,me%3===0&&h([ee,.48,pe],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,Z,0)}d("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const y=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],w,y);for(let me of[-1.15,1.15])for(let Z of[-.63,.63])c([me,-.23,Z],[.12,.5,.12],s.copper,y);for(let me of[-.79,.79])c([0,.36,me],[2.72,.65,.14],T,y);for(let me of[-1.32,1.32])c([me,.38,0],[.14,.68,1.55],T,y);const A=c([0,.18,0],[2.49,.045,1.49],v,y),_=l([-.84,.38,0],[.34,.14,.54],s.cream,y),E=i.clone(!0);m.add(E),E.scale.setScalar(.54),E.position.set(.3,.83,.45),E.rotation.z=-.35;const R=a([0,0,0],E);for(const me of[-.23,.23])l([me,.2,.611],[.15,.11,.025],s.black,R),c([me,.2,.64],[.2,.018,.012],s.copper,R);const L=a([-2.05,2.35,-.38],m);u([0,0,0],.52,.56,s.cream,L),u([0,.29,0],.44,.022,w,L),h([.55,0,0],.24,.055,s.copper,L,[0,0,0]),d("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const N=[];for(let me=0;me<7;me++){const Z=a([-1.92+me*.33,.2+me*.29,1.45-me*.29],m);c([0,0,0],[.7,.13,.42],s.cream,Z);for(let ee of[-.2,.2])c([0,.07,ee],[.7,.12,.05],s.copper,Z);N.push(Z)}const B=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],v,m)),I=Array.from({length:3},(me,Z)=>{const ee=h([.65,.2,0],.23+Z*.16,.012,s.mint,y);return ee.scale.z=.6,ee}),O=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,O),O.rotation.z=.55;const W=[];for(let me=0;me<9;me++){const Z=me*2.4;W.push(l([Math.sin(Z)*3,3.2+me%3*.28,Math.cos(Z)*2],.025,s.cream,m))}let F=!1,te=0,H=0,J=!1;try{J=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const ne=a([26.6,-.86,.65],t);ne.visible=J,u([0,0,0],.15,.2,s.cream,ne),u([0,.104,0],.125,.014,v,ne),h([.16,0,0],.07,.02,s.copper,ne,[0,0,0]),g(m,[y,E,L,...N,...B,...W,O]),g(y,[A,_,...I]),g(L,[]),g(ne,[]),N.forEach(me=>g(me,[]));function ge(){F=!0,te=0,H=0,m.visible=!0,t.visible=!1,Be(0,0)}function xe(){F=!1,m.visible=!1,t.visible=!0}function Ie(){if(F&&(te=te===3?0:te+1,M(165+te*55),te===3)){J=!0,ne.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function Be(me,Z){F&&(H=n.MathUtils.damp(H,te,2.4,me),N.forEach((ee,pe)=>{const se=Math.min(1,H/2),k=-1.92+pe*.33,V=.2+pe*.29,oe=1.45-pe*.29;ee.position.set(n.MathUtils.lerp(k,-1.72+pe*.39,se),n.MathUtils.lerp(V,1.95-pe*.22,se),n.MathUtils.lerp(oe,-.32+pe*.055,se)),ee.rotation.z=-se*.21}),A.position.y=.18+H*.09,_.position.y=.38+H*.09,E.position.y=.83+H*.09+Math.sin(Z*.6)*.025,E.rotation.z=-.35-H*.13,L.rotation.z=-Math.min(1,H)*.45,B.forEach((ee,pe)=>{const se=(Z*.16+pe/16)%1;ee.visible=H>.05,ee.position.set(-1.7+se*3,2.14-se*1.62,-.32+se*.25),ee.scale.set(.07,.1+Math.sin(se*Math.PI)*.04,.07)}),I.forEach((ee,pe)=>{ee.visible=H>.4,ee.position.y=A.position.y+.034,ee.scale.setScalar(1+Math.sin(Z*.5+pe)*.08),ee.scale.z*=.6}),O.rotation.z=.55+H*.21,R.visible=H>1.8)}return{enter:ge,exit:xe,pour:Ie,update:Be,inspect:()=>({active:F,step:te,phase:H,trace:J,roomVisible:m.visible,rootVisible:t.visible,waterY:A.position.y,sleeperY:E.position.y,channel:N.map(me=>me.position.toArray()),droplets:B.filter(me=>me.visible).length})}}function Xx({head:n,group:e,sphere:t,box:i,torus:s,M:r,mat:o}){const a=e([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,t([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=e([0,0,0],n);c.visible=!1;for(const d of[-.23,.23])t([d,.2,.611],[.15,.11,.025],r.black,c),i([d,.2,.64],[.2,.018,.012],r.copper,c);let l=null,u=0;function f(d){l=d,u=Number(d.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:d})=>f(d)),window.__beznogimState&&f(window.__beznogimState);function h(d){const g=l==null?void 0:l.action;a.visible=!!d&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(u)?u:0),c.visible=a.visible}return{update:h,inspect:()=>{var d;return{visible:a.visible,ends:((d=l==null?void 0:l.action)==null?void 0:d.kind)==="sleep"?l.action.ends:null}}}}function qx({THREE:n,scene:e,root:t,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:u,rod:f,torus:h,sign:d,paperBoat:g,batchStatic:M,chime:m}){const p=a([0,0,0],e);p.name="dream-03-silent-dock",p.visible=!1;const S=r("#526b79"),w=r("#375d69",{metalness:.35,roughness:.27}),v=r("#c7cdb3");u([0,-.45,0],4.15,.38,S,p),u([0,-.23,0],4,.055,w,p),h([0,-.18,0],4.08,.04,s.copper,p),c([-2.85,-.12,.9],[1.45,.35,2.6],s.concrete,p);for(let V of[-.1,.55,1.2,1.85])c([-2.85,.07,V],[1.38,.045,.025],S,p);for(let V of[-3.4,-2.3])f([V,-.3,1.9],[V,.48,1.9],.035,s.copper,p);d("СОН / 03",[-2.85,.13,2.4],1.6,.28,p,{size:48}).rotation.x=-Math.PI/2;const T=i.clone(!0);T.position.set(-2.8,1.27,.75),T.scale.setScalar(.65),p.add(T);const y=[];for(const V of[-1,1]){const oe=a([V*.12,-.04,.68],T);f([0,0,0],[V*.64,-.2,.05],.06,s.black,oe),l([V*.62,-.18,.05],[.19,.095,.07],s.black,oe),f([V*.58,-.18,.06],[V*.58,-.7,.06],.015,s.copper,oe),l([V*.58,-.76,.06],.075,s.copper,oe),M(oe,[]),y.push(oe)}const A=Array.from({length:3},(V,oe)=>h([-1.2+oe*1.25,-.17,-.25],.72,.035,oe===1?s.cream:s.copper,p)),_=Array.from({length:3},(V,oe)=>h([-1.2+oe*1.25,-.165,-.25],.72,.013,v,p)),E=o(new n.IcosahedronGeometry(.12,1),S,[-2.6,.35,1.5],null,p),R=g(p,[-1.9,-.13,-.25],.9),L=l([0,.53,0],[.065,.09,.065],s.light,R),N=o(new n.TorusGeometry(.5,.09,8,40,Math.PI*1.55),s.cream,[1.6,3.7,-1.4],null,p);N.rotation.z=.65;const B=[];for(let V=0;V<5;V++){const oe=-1.6+V*.85;f([oe,-.2,-2.9],[oe,1.1+V%2*.4,-2.9],.025,S,p),B.push(l([oe,1.12+V%2*.4,-2.9],.035,s.light,p))}let I=!1,O=0,W=1,F=[1,1,1],te=[0,0,0],H=0,J=0,ne=!1;try{ne=JSON.parse(localStorage.getItem("beznogim-dream03-v1")||"{}").trace===!0}catch{}const ge=h([6.97,1.28,1.44],.13,.017,s.copper,t,[0,0,.2]);ge.visible=ne;const xe=Array.from({length:5},()=>new n.Vector3),Ie=new n.CatmullRomCurve3(xe),Be=new n.Vector3,me=new n.Vector3;M(p,[T,...A,..._,E,R,N,...B]),M(T,y),M(R,[L]);function Z(V){W=n.MathUtils.clamp(Math.round(Number(V)||1),1,3)}function ee(){I=!0,O=0,F=[1,1,1],te=[0,0,0],H=0,J=0,p.visible=!0,t.visible=!1,k(0,0)}function pe(){I=!1,p.visible=!1,t.visible=!0}function se(){if(I){if(O===3){O=0,F=[1,1,1],te=[0,0,0],J=0;return}if(F[O]=W,O++,H=0,m(110+W*55),O===3){ne=!0,ge.visible=!0;try{localStorage.setItem("beznogim-dream03-v1",JSON.stringify({trace:!0}))}catch{}}}}function k(V,oe){if(!I)return;J+=Math.min(V,.15),H+=Math.min(V,.15);for(let q=0;q<3;q++){te[q]=n.MathUtils.damp(te[q],q<O?1:0,3,V);const ce=-.17+te[q]*(.95+F[q]*.42),X=.72+F[q]*.12;A[q].position.y=ce,A[q].rotation.set(Math.PI/2*(1-te[q]),Math.PI/2*te[q],0),A[q].scale.setScalar(X/.72),_[q].scale.setScalar(X/.72*(1+Math.sin(J*.9+q)*.045)),xe[q+1].set(A[q].position.x,Math.max(-.1,ce),-.25)}xe[0].set(-2,-.1,-.25),xe[4].set(2.5,-.1,-.25);const K=(1-Math.cos(J*.55))*.5;Ie.getPoint(K,Be),Ie.getPoint(Math.min(.999,K+.012),me),R.position.copy(Be),R.rotation.z=n.MathUtils.clamp(Math.atan2(me.y-Be.y,me.x-Be.x),-.45,.45),R.rotation.y=0,E.visible=O>0;const ae=Math.min(1,H/1.8),U=Math.max(0,O-1);E.position.set(n.MathUtils.lerp(-2.5,-1.2+U*1.25,ae),.35+ae*(2.1+F[U]*.35),n.MathUtils.lerp(1.4,-.25,ae)),E.rotation.y=J*.4,y.forEach((q,ce)=>q.rotation.z=Math.sin(J*1.2+ce*Math.PI)*(.06+O*.04)),L.position.y=.53+Math.sin(oe)*.02}return{enter:ee,exit:pe,toss:se,choose:Z,update:k,inspect:()=>({active:I,step:O,force:W,forces:[...F],lift:[...te],trace:ne,roomVisible:p.visible,rootVisible:t.visible,boat:R.position.toArray(),ringY:A.map(V=>V.position.y),ringRotation:A.map(V=>V.rotation.toArray().slice(0,3)),stone:E.position.toArray()})}}function dh(n){const e=n.state||{},t=JSON.parse(JSON.stringify(e));Array.isArray(t.shelf)||(t.shelf=[]),Number.isInteger(t.nextId)||(t.nextId=1),Number.isInteger(t.cutCount)||(t.cutCount=0),(!t.lastMeal||!Number.isInteger(t.lastMeal.id)||!Number.isFinite(t.lastMeal.at))&&(t.lastMeal=null),Array.isArray(t.mealReceipts)||(t.mealReceipts=[]),Number.isInteger(t.mealSequence)||(t.mealSequence=Math.max(0,...t.mealReceipts.map(l=>Number(l.sequence)||0))),["damp","dry"].includes(t.air)||(t.air="damp"),"batch"in t||(t.batch=null),Number.isFinite(t.updated)||(t.updated=n.now);const i=Math.max(0,n.now-t.updated);if(t.batch){const l=t.batch,u=Math.min(i,Math.max(0,360-l.age));l.age+=u,l.exposure[l.face]+=u,l[t.air==="damp"?"wet":"dry"]+=u}t.updated=Math.max(t.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")t.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-t.batch.age)}:(t.batch={id:t.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:t.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")t.air=l.air,t.batch&&t.batch.age<360&&l.turn&&(t.batch.face=1-t.batch.face,t.batch.turns++),s={ok:!0,air:t.air,face:t.batch?t.batch.face:null,turns:t.batch?t.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="eat"){const u=Number(l.id),f=t.shelf.findIndex(h=>h.id===u);if(f<0)s={ok:!1,kind:"cheese",reason:"no_cheese"};else{const h=t.shelf.splice(f,1)[0];t.lastMeal={id:h.id,at:n.now,kind:h.kind,sequence:++t.mealSequence},t.mealReceipts.push(t.lastMeal),t.mealReceipts=t.mealReceipts.slice(-64),s={ok:!0,kind:"cheese",meal:t.lastMeal,stored:t.shelf.length},r="съедает кусок зрелого сыра",o=45}}else if(n.tool==="cut"){const u=t.batch;if(!u||u.age<360)s={ok:!1,reason:u?"not_ready":"no_wheel",remaining:u?360-u.age:0};else{const h=Math.abs(u.exposure[0]-u.exposure[1])<=120?u.culture==="moon"&&u.wet>=180?"moon_stair":u.culture==="stone"&&u.dry>=180?"stone":"holes":"lopsided",d={id:u.id,culture:u.culture,kind:h,exposure:u.exposure.slice(),wet:u.wet,dry:u.dry,turns:u.turns};t.shelf.push(d),t.shelf=t.shelf.slice(-6),t.cutCount++,t.batch=null,s={ok:!0,cheese:d,stored:t.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=t.batch,c={air:t.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:t.shelf,cutCount:t.cutCount,lastMeal:t.lastMeal,mealSequence:t.mealSequence,mealReceipts:t.mealReceipts};return{state:t,public:c,result:s,seconds:o,label:r}}const Yx={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function Zx({THREE:n,root:e,M:t,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:u,sign:f,batchStatic:h,changed:d,watching:g,localPlay:M}){var oe,K,ae;const m=s([24,-1.55,0]);m.name="cheese-cellar";const p=i("#697b70"),S=i("#b4b89b"),w=i("#936c4d"),v=i("#e1b064"),T=i("#b77e42"),y=i("#f4d490");r([0,-.23,0],[10,.45,8],p,m),r([0,1.6,-3.65],[10,3.2,.3],S,m),r([-4.85,1.3,0],[.3,2.6,7.3],S,m);for(let U=-4;U<=4;U+=2)r([U,1.5,-3.43],[.16,3,.1],p,m);for(let U of[-4.4,4.4])c([U,0,-3.3],[U,3.6,-3.3],.09,t.copper,m),c([U,3.6,-3.3],[U,3.6,2.5],.09,t.copper,m),c([U,3.6,2.5],[U,0,2.5],.09,t.copper,m);f("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let U of[-3.8,3.8])r([U,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,t.copper,m),l([-3,1.11,1.1],.75,.055,t.dark,m),a([-3,1.1,1.1],.64,.02,y,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let U of[2.8,3.5])a([U,.28,1.8],.26,.56,t.cream,m),a([U,.59,1.8],.12,.1,t.copper,m);const A=r([2.6,2.4,-3.42],[1.2,.65,.12],t.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],t.copper,m);for(let U=0;U<4;U++)r([2.25+U*.23,2.4,-3.32],[.045,.55,.03],t.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const _=s([.5,1.02,.25],m),E=u(new n.CylinderGeometry(1.2,1.2,.62,40),v,[0,0,0],null,_),R=u(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),T,[0,0,0],null,_),L=l([0,.33,0],.35,.026,t.cream,_),N=s([.5,.65,2.3],m),B=[];for(let U=0;U<6;U++)B.push(o([-1.25+U*.5,0,0],.08,t.mint,N));const I=f("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});I.rotation.x=-Math.PI/2;function O(U){const q=s(U,m),ce=u(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),y,[0,0,0],null,q),X=u(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),T.clone(),[0,0,0],null,q),ue=s([0,-.14,.09],q);for(let We=0;We<4;We++)r([.05+We*.085,.04+We*.05,.15+We*.03],[.12,.06,.2],t.cream,ue);const be=o([.09,.16,.27],.04,t.mint,ue),Le=u(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,q),D=s([0,0,0],q);for(const[We,Ue,C]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([We,Ue,C],[.05,.05,.025],t.dark,D);return{g:q,body:ce,crust:X,steps:ue,crystal:Le,holes:D,pearl:be}}const W=Array.from({length:6},(U,q)=>O([-3.15+q*1.26,1.42,-2.6])),F=s([0,0,0],e);for(let U=0;U<24;U++){const q=U/23;r([8.3+q*11.2,-.15-q*1.32,1.4+Math.sin(q*Math.PI)*2],[.85,.15,.75],p,F)}for(let U=0;U<5;U++)r([20+U*.7,-1.46,1.4-U*.22],[.75,.13,.7],p,F);f("СЫР →",[10.2,.35,2.4],1.5,.4,F,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,t.copper,F),h(F,[]),h(m,[_,A,N,I,...W.map(U=>U.g)]);for(const U of W)h(U.steps,[U.pearl]),h(U.holes,[]);let te=null,H=null,J=0,ne=null,ge="",xe=0;try{const U=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");te=(U==null?void 0:U.state)||U,J=Number(U==null?void 0:U.clockOffset)||0}catch{}const Ie=()=>Date.now()/1e3+J;function Be(U,q,ce={}){const X=dh({state:te,mode:U,tool:q,args:ce,now:Ie()});te=X.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:te,clockOffset:J}))}catch{}return X}Be("migrate");const me=document.createElement("div");me.id="cellar-controls",me.hidden=!0,me.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(me);function Z(){return H&&g()?H:dh({mode:"migrate",state:te,now:te.updated}).public}function ee(U){ne=U;const q=U.batch;if(_.visible=!!q,I.visible=!q,A.rotation.y=U.air==="dry"?-.8:0,q){_.rotation.z=q.face?Math.PI:0;const ce=q.age/360;E.material.color.set(q.culture==="moon"?"#e9cf8b":"#c8bc88"),R.material.color.set(U.air==="damp"?"#8b9f78":"#b87a48"),L.scale.setScalar(1+ce*.15)}for(let ce=0;ce<6;ce++)B[ce].visible=!!q&&q.age>=(ce+1)*60;W.forEach((ce,X)=>{const ue=U.shelf[X];ce.g.visible=!!ue,ue&&(ce.g.rotation.z=ue.kind==="lopsided"?.22:0,ce.crust.material.color.set(ue.wet>=180?"#8b9f78":"#b87a48"),ce.steps.visible=ue.kind==="moon_stair",ce.crystal.visible=ue.kind==="stone",ce.holes.visible=ue.kind==="holes"||ue.kind==="lopsided")})}function pe(U,q){M();const ce=Be("action",U,q);return ge="",V(0),d(),ce}for(const U of me.querySelectorAll("[data-culture]"))U.onclick=()=>pe("set_batch",{culture:U.dataset.culture});me.querySelector("#cellar-turn").onclick=()=>pe("tend",{air:te.air,turn:!0}),me.querySelector("#cellar-air").onclick=()=>pe("tend",{air:te.air==="damp"?"dry":"damp",turn:!1}),me.querySelector("#cellar-wait").onclick=()=>{M(),J+=60,Be("tick"),ge="",V(0),d()};function se(){const U=ne||Z(),q=U.batch,ce=H&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",X=q?q.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(q.age)}/360 с. Корка: ${Math.floor(q.exposure[0])}/${Math.floor(q.exposure[1])} с.`:U.shelf.length?`На полке: ${U.shelf.map(ue=>Yx[ue.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:H&&g()?"войти в свою сыроварню":q?q.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(H&&g())&&!!q&&!q.ready,description:ce+" "+X}}function k(){const U=ne||Z(),q=U.batch;me.querySelector("#cellar-readout").textContent=`${U.air==="damp"?"сыро":"сухо"} · ${q?q.ready?"готово":`ещё ${Math.ceil(q.remaining)} с`:"нет колеса"} · полка ${U.shelf.length}/6`;for(const ce of me.querySelectorAll("[data-culture]"))ce.disabled=!!q;me.querySelector("#cellar-turn").disabled=!q||q.ready,me.querySelector("#cellar-air").textContent=U.air==="damp"?"сделать суше":"вернуть сырость"}function V(U){U-xe>=1&&(xe=U,Be("tick"));const q=Z(),ce=JSON.stringify(q);ce!==ge&&(ge=ce,ee(q),k(),d())}return window.addEventListener("beznogim:state",({detail:U})=>{var ce,X;const q=(X=(ce=U.mechanics)==null?void 0:ce.cellar)==null?void 0:X.public;q&&(H=q,ge="")}),H=((ae=(K=(oe=window.__beznogimState)==null?void 0:oe.mechanics)==null?void 0:K.cellar)==null?void 0:ae.public)||null,ee(Z()),k(),{house:m,controls:me,update:V,card:se,run:()=>pe(te.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:H&&g()?"resident":"sandbox",...ne,wheelVisible:_.visible,shelfVisible:W.filter(U=>U.g.visible).length,stairsVisible:W.filter(U=>U.g.visible&&U.steps.visible).length,shutter:A.rotation.y})}}function Jx({entries:n,elements:e,layer:t,camera:i}){const s=new ht,r=new ht,o=new P,a=Object.entries(n).map(([f,h])=>({element:e[f],anchor:h.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,u=!1;return{update(f,h,d){if(t.hidden===f&&(t.hidden=!f),!f){u=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!u||c!==h||l!==d||!s.equals(r);c=h,l=d,u=!0;for(const M of a){if(typeof M.anchor=="function")M.anchor(o);else{if(!g)continue;o.copy(M.anchor)}o.applyMatrix4(s);const m=(o.x+1)*h*.5,p=(1-o.y)*d*.5,S=o.z>=-1&&o.z<=1&&m>=10&&m<=h-10&&p>=10&&p<=d-55;if(S!==M.visible&&(M.visible=S,M.element.classList.toggle("hidden",!S)),!S)continue;const w=Math.round(m*10)/10,v=Math.round(p*10)/10;(w!==M.x||v!==M.y)&&(M.x=w,M.y=v,M.element.style.transform=`translate3d(${w}px,${v}px,0) translate(-50%,-50%)`)}r.copy(s)}}}function Kx(){const n=document.querySelector(".territory-nav");document.querySelector("#inspector");const e=document.querySelector("footer"),t=document.querySelector(".toolbar");let i=0;function s(){i=0;const a=n.getBoundingClientRect(),c=e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=matchMedia("(max-width:900px) and (orientation:landscape) and (max-height:600px)").matches,f=Math.max(12,u?0:a.bottom+12,u?l.bottom+12:0),h=Math.max(64,innerHeight-c.top+12);document.documentElement.style.setProperty("--ui-card-top",`${Math.ceil(f)}px`),document.documentElement.style.setProperty("--ui-card-bottom",`${Math.ceil(h)}px`)}function r(){i||(i=requestAnimationFrame(s))}const o=new ResizeObserver(r);for(const a of[n,e,t])o.observe(a);new MutationObserver(r).observe(document.body,{attributes:!0,attributeFilter:["class"]}),addEventListener("resize",r),visualViewport==null||visualViewport.addEventListener("resize",r),r()}const ze=n=>document.querySelector(n),on=()=>innerWidth<700,Od=matchMedia("(prefers-reduced-motion: reduce)").matches;let rr={};try{rr=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Se={loop:0,roof:null,running:!!rr.running,harvest:Math.min(99,Math.max(0,Number(rr.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(rr.dockTrips)||0))),dockPending:rr.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Os(){return Se.roof===null?Se.running||Se.loop>0:!!Se.roof}function Xl(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Se.running,harvest:Se.harvest,dockTrips:Se.dockTrips,dockPending:Se.dockPending}))}catch{}}const vt=new Nd({antialias:!0,alpha:!1,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,on()?1.5:2));vt.setSize(innerWidth,innerHeight,!1);vt.shadowMap.enabled=!0;vt.shadowMap.type=Es;vt.shadowMap.autoUpdate=!1;vt.shadowMap.needsUpdate=!0;vt.outputColorSpace=jt;vt.toneMapping=ha;vt.toneMappingExposure=1.22;ze("#world").append(vt.domElement);const Dn=new rd;Dn.background=new ot("#182e32");Dn.fog=new ba("#182e32",8e-4);const et=new Dr(-10,10,10,-10,.1,600),Dc=new P(0,1,0);et.position.set(20,20,24);et.lookAt(Dc);const je=new yx(et,vt.domElement);je.target.copy(Dc);je.enableDamping=!0;je.enableRotate=!1;je.enablePan=!0;je.minZoom=.075;je.maxZoom=2.5;je.screenSpacePanning=!1;je.mouseButtons.LEFT=fi.PAN;je.mouseButtons.RIGHT=fi.PAN;je.touches.ONE=hi.PAN;je.touches.TWO=hi.DOLLY_PAN;Dn.add(new Sd("#d9eedc","#334d53",2.3));const is=new Rc("#ffe2ac",3.3);is.position.set(-7,14,6);is.castShadow=!0;is.shadow.mapSize.set(on()?512:1024,on()?512:1024);Object.assign(is.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});is.shadow.bias=-4e-4;is.shadow.normalBias=.025;Dn.add(is);const Bd=new Rc("#8ad5d8",1.3);Bd.position.set(5,7,-8);Dn.add(Bd);const Rt=new Pi;Dn.add(Rt);const yl={};function it(n,e={}){const t=n+JSON.stringify(e);return yl[t]||(yl[t]=new ys({color:n,roughness:.8,...e}))}const jn={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},he={concrete:it(jn.concrete),cream:it(jn.cream),dark:it(jn.dark),metal:it(jn.metal,{metalness:.5,roughness:.4}),copper:it(jn.copper,{metalness:.6,roughness:.35}),rust:it(jn.rust),black:it(jn.black),leaf:it(jn.leaf),light:it("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:it("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Vs={box:new vi(1,1,1),sphere:new Ra(1,12,8),ico:new Lr(1,1),cyl:new Cr(1,1,1,16),cone:new ts(1,1,8)};function It(n,e,t,i,s=Rt){const r=new ln(n,e);return t&&r.position.set(...t),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Ye=(n,e,t,i=Rt)=>It(Vs.box,t,n,e,i),_t=(n,e,t,i=Rt)=>It(Vs.sphere,t,n,Array.isArray(e)?e:[e,e,e],i),Pt=(n,e,t,i,s=Rt)=>It(Vs.cyl,i,n,[e,t,e],s);function Hs(n,e,t,i=Rt,s=.08){return It(new Lc(...e,1,s),t,n,null,i)}function wt(n=[0,0,0],e=Rt){const t=new Pi;return t.position.set(...n),e.add(t),t}function Ws(n,e,t,i=Rt){const s=new Mc(n.map(r=>new P(...r)));return It(new Pa(s,Math.max(12,n.length*6),e,6,!1),t,null,null,i)}function Lt(n,e,t,i,s=Rt){const r=new P(...n),o=new P(...e),a=o.clone().sub(r),c=Pt(r.clone().add(o).multiplyScalar(.5).toArray(),t,a.length(),i,s);return c.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),c}function Nt(n,e,t,i,s=Rt,r=[Math.PI/2,0,0]){const o=It(new Ca(e,t,6,40),i,n,null,s);return o.rotation.set(...r),o}function In(n,e,t,i,s=Rt,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new _c(o);c.colorSpace=jt;const l=It(new ns(t,i),new Rr({map:c,side:En}),e,null,s);return l.castShadow=!1,l}let bl=179;function gt(){return bl=bl*1664525+1013904223>>>0,bl/4294967296}const aa=document.createElement("canvas");aa.width=aa.height=256;const la=aa.getContext("2d");la.fillStyle="#b4bcaa";la.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)la.fillStyle=`rgba(${gt()>.5?"60,82,64":"235,229,201"},${gt()*.08})`,la.fillRect(gt()*256,gt()*256,1+gt()*3,1+gt()*3);const br=new _c(aa);br.wrapS=br.wrapT=pr;br.repeat.set(5,5);br.colorSpace=jt;const $x=it("#c2c6b1",{map:br,roughness:.97});function Ic(n,e,t,i,s=Rt){const r=new Pr;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new zs(r,{depth:t,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,e-t,0),It(o,i,null,null,s)}const Nc=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Ic(Nc,0,.82,he.concrete);Ic(Nc,.06,.14,$x);Ic(Nc.map(([n,e])=>[n*.97,e*.97]),-.8,.6,it("#47665e"));for(let n=0;n<28;n++){const e=-5.4+gt()*10.9,t=gt()>.5?5.15:-5.2,i=It(Vs.ico,it(n%3?"#557469":"#668477"),[e,-1.15-gt()*.5,t],[.25+gt()*.8,.2+gt()*.55,.35+gt()*.3]);i.rotation.y=gt()*6}for(let n=0;n<7;n++){const e=-4.6+n*1.25;Ye([e,-.37,5.61],[.48,.19,.025],n%2?he.copper:he.dark),n%2===0&&Ws([[e,-.5,5.5],[e,-1.4,5.8],[e+.4,-2,5.4],[e+.3,-2.7,5.2]],.055,he.metal)}In("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,Rt,{size:32});const St=wt([-3.2,.08,-2.5]),vn=wt([0,0,0],St);Ye([0,.08,0],[4.5,.15,3.6],he.dark,St);Ye([0,1.2,-1.68],[4.5,2.4,.18],he.cream,St);Ye([-2.15,1,0],[.18,2,3.6],he.cream,St);for(let n=0;n<5;n++){Ye([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],he.concrete,St),Ye([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],he.metal,St);for(let e=0;e<3;e++)Ye([-1.88+n*.8+e*.21,1.7,-1.51],[.017,.55,.02],he.copper,St)}Ye([0,2.47,-.2],[4.8,.14,3.7],he.rust,vn);for(let n=0;n<23;n++){const e=Ye([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],it("#d09062"),vn);e.rotation.x=-.015}Ye([0,2.35,1.62],[4.8,.14,.18],he.dark,St);Lt([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,he.copper,St);Lt([2.3,.12,1.62],[2.3,2.4,1.62],.055,he.copper,St);In("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,St,{size:37});Ye([.1,.85,-.84],[3.8,.13,.87],he.rust,St);for(const n of[-1.5,1.65])Ye([n,.44,-.84],[.12,.85,.65],he.metal,St);for(let n=0;n<3;n++)Ye([-1.15+n*.95,.51,-.85],[.82,.47,.75],he.concrete,St),Ye([-1.15+n*.95,.5,-.44],[.18,.04,.03],he.copper,St);for(let n=0;n<2;n++){Hs([-.55+n*1.3,1.25,-.85],[.78,.59,.5],he.dark,St),Ye([-.55+n*1.3,1.27,-.591],[.62,.41,.012],it("#70a58b",{emissive:"#87cfa6",emissiveIntensity:.65}),St);for(let e=0;e<4;e++)Ye([-.65+n*1.3,1.18+e*.055,-.58],[.21+gt()*.3,.012,.012],he.mint,St);Ye([-.5+n*1.3,.94,-.35],[.75,.035,.25],he.cream,St)}for(let n=0;n<6;n++)Ye([-1.6+n*.48,2.07,-1.48],[.28,.16+gt()*.16,.17],it(["#9fba95","#cb9b70","#667f71"][n%3]),St);Pt([0,.5,.7],.32,.12,he.rust,St);for(let n=0;n<3;n++){let e=Math.cos(n*2.09)*.22,t=Math.sin(n*2.09)*.22+.7;Lt([e,.06,t],[e,.5,t],.04,he.metal,St)}for(let n=0;n<4;n++)Nt([-1.5,.06,1],.3-n*.045,.025,he.black,St);Pt([-1.5,3,-.9],.16,.9,he.metal,vn);Pt([-1.5,3.47,-.9],.24,.08,he.rust,vn);Ye([1.4,2.9,-.4],[.8,.5,.6],he.concrete,vn);for(let n=0;n<5;n++)Ye([1.1+n*.15,2.94,-.085],[.035,.32,.03],he.dark,vn);const Uc=new Da("#ffca86",5,5,2);Uc.position.set(-3,1.7,-1.1);Rt.add(Uc);for(let n=-1.4;n<3;n+=.79)for(let e=-.65;e<3.1;e+=.79){const t=Hs([n,.1,e],[.74,.05,.74],it(gt()>.3?"#b3baa6":"#a5b5a4"),Rt,.018);t.rotation.y=(gt()-.5)*.035}for(let n=0;n<95;n++){let e=-6+gt()*12,t=-5.1+gt()*10.3;if(t>-4.4&&t<.7&&e<-1||t>2.3&&e>2)continue;const i=It(Vs.cone,he.leaf,[e,.1,t],[.022,.12+gt()*.12,.022]);i.rotation.z=(gt()-.5)*.7}const ql=new Ln({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:En});Ye([3.7,.12,3.6],[4.9,.24,2.7],he.dark);It(new ns(4.5,2.4),ql,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Ye([3.7,.29,n],[5,.38,.16],he.cream);for(const n of[1.18,6.2])Ye([n,.29,3.6],[.16,.38,2.85],he.cream);for(let n=0;n<13;n++)Ye([1.85,.5,2.15+n*.235],[1.08,.09,.22],it(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const e of[1.31,2.4])Pt([e,.88,n],.045,.8,he.copper);for(const n of[1.31,2.4])Ws([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,he.cream);const Fc=[];for(let n=0;n<6;n++){let e=Ye([4+n*.095,-1.25,5.56],[.055,2.4,.03],it("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Fc.push(e)}for(let n=0;n<4;n++)Ye([3.96+n*.17,.31,5.31],[.055,.08,.6],he.dark);const kt=wt([3.7,.1,-2.6]);Hs([0,.14,0],[3.7,.27,3.5],he.cream,kt,.09);for(const n of[-1.55,1.55])Ye([n,1.76,0],[.17,3.25,.2],he.metal,kt),Ye([n,.38,0],[.45,.2,.6],he.copper,kt),Lt([n,.36,-1.2],[n,2.9,0],.045,he.copper,kt),Lt([n,.36,1.2],[n,2.9,0],.045,he.copper,kt);Ye([0,3.38,0],[3.5,.18,.26],he.copper,kt);const Qx=Nt([0,2.7,-.5],1.83,.035,he.copper,kt,[0,0,0]);Qx.scale.y=.85;const Ir=[];for(let n=0;n<5;n++){const e=wt([-1.18+n*.59,3.24,0],kt),t=1.8+n*.12;Lt([0,0,-.08],[0,-t,0],.015,he.dark,e),Lt([0,0,.08],[0,-t,0],.015,he.dark,e),_t([0,-t,0],.205,he.copper,e),Nt([0,-t,0],.211,.012,he.light,e,[0,0,0]),Ir.push({group:e,len:t,phase:n})}Ye([0,.6,1.3],[1.45,.8,.4],he.metal,kt);In("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,kt,{size:40});const jx=Pt([-.43,.97,1.3],.19,.07,he.cream,kt);jx.rotation.x=Math.PI/2;const Oc=Ye([-.43,.99,1.342],[.015,.22,.008],he.rust,kt);Oc.rotation.z=-.7;const zd=_t([.53,.93,1.52],.09,he.light,kt),Ua=wt([.15,.4,1.59],kt);Nt([0,0,0],.19,.023,he.rust,Ua,[0,0,0]);for(let n=0;n<3;n++)Lt([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,he.rust,Ua);Ws([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,he.copper);const kd=[];function Bc(n,e,t=1.5){Pt([n,t/2,e],.038,t,he.metal),Ye([n,t,e],[.27,.11,.27],he.dark),Ye([n,t-.18,e],[.17,.25,.17],he.light),Ye([n,t-.34,e],[.25,.08,.25],he.copper);const i=new Da("#ffbe70",1.8,3);i.position.set(n,t-.16,e),kd.push(i)}Bc(-5.9,3.9,1.3);Bc(.3,-4.8,1.7);Bc(5.8,1.25,1.35);const tn=wt([-3.6,.08,3.55]),Yl=[];for(let n=0;n<2;n++){const e=-.65+n*1.5;Hs([0,.14,e],[3.6,.3,1.14],he.rust,tn,.06),Ye([0,.305,e],[3.36,.04,.92],it(jn.soil),tn);for(let t=0;t<4;t++){const i=wt([-1.26+t*.84,.33,e],tn);Pt([0,.14,0],.026,.28,he.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=_t([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],it(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){_t([0,.17,0],[.25,.18,.25],it("#b6c58a"),i);for(let s=0;s<6;s++){const r=_t([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],he.leaf,i);r.rotation.y=s}Yl.push(i)}else{const s=_t([.05,.22,0],[.1,.21,.12],it(jn.purple,{roughness:.35}),i);s.rotation.z=-.25,_t([.05,.41,0],[.075,.025,.07],he.leaf,i),Yl.push(i)}}}const Gd=wt([-1.72,.1,.8],tn);for(let n=0;n<2;n++)Ye([n*3.45,.6,0],[.04,1.3,.04],he.copper,Gd);Lt([0,1.25,0],[3.45,1.25,0],.022,he.copper,Gd);In("КОБАЧКИ",[-.45,.68,1.64],1,.26,tn,{bg:"#c2c7a3",fg:"#445e45",size:42});Pt([1.9,.23,.7],.18,.34,it("#6b9389"),tn);Lt([2.04,.25,.7],[2.4,.46,.7],.045,it("#6b9389"),tn);Nt([1.8,.48,.7],.16,.02,he.copper,tn,[0,0,0]);Ye([-1.6,.2,1.47],[.65,.4,.45],he.rust,tn);for(let n=0;n<3;n++)Ye([-1.6,.12+n*.11,1.71],[.7,.05,.025],he.copper,tn);const dn=wt([-3.8,.08,.35]);Pt([0,.73,0],.58,.1,he.rust,dn);Pt([0,.35,0],.045,.7,he.metal,dn);for(let n=0;n<3;n++)Lt([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,he.metal,dn);const Nr=wt([.1,.81,0],dn);_t([0,.2,0],[.23,.22,.23],he.cream,Nr);Pt([0,.37,0],.14,.06,he.copper,Nr);_t([0,.42,0],.045,he.dark,Nr);Lt([.15,.18,0],[.33,.32,0],.07,he.cream,Nr);Nt([-.15,.25,0],.18,.035,he.dark,Nr,[0,0,0]);for(const n of[-.35,.38])Pt([n,.84,.24],.082,.15,he.cream,dn),Nt([n,.92,.24],.084,.012,he.copper,dn),Pt([n,.921,.24],.063,.006,it("#67513b"),dn),Nt([n+.09,.86,.24],.045,.011,he.cream,dn,[0,0,0]);const Fa=[];for(let n=0;n<9;n++){const e=_t([0,0,0],.07,it("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),dn);e.castShadow=!1,Fa.push(e)}const Hn=wt([-5.65,.09,1.1]);Ye([0,.3,0],[.7,.6,.7],he.concrete,Hn);Hs([0,.8,0],[.68,.45,.35],he.dark,Hn,.05);for(let n=0;n<6;n++)Ye([-.2+n*.05,.8,.18],[.022,.27,.018],he.copper,Hn);Ye([.18,.85,.184],[.16,.075,.02],he.light,Hn);_t([.18,.72,.19],.05,he.cream,Hn);Lt([.18,1,0],[.48,1.6,0],.012,he.copper,Hn);const Vd=wt([-.5,.1,-4.6]);Pt([0,1.75,0],.055,3.5,he.metal,Vd);_t([0,3.55,0],.09,he.copper,Vd);Ws([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,he.dark);for(let n=0;n<8;n++){let e=n/8;const t=It(new ts(.13,.3,3),it(n%2?"#ccb478":"#af7c60"),[-5.1+e*4.5,2.52+e*.73,-1-e*3.7],null);t.rotation.z=Math.PI}const Oa=wt([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const e=Ye([0,0,0],[.55,.09,.025],he.rust,Oa);e.rotation.z=n*Math.PI/2,e.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}_t([0,0,.05],.08,he.copper,Oa);const Jt=wt([7.25,-.03,1.5]);Ye([0,-.12,0],[2.25,.3,2.5],he.metal,Jt);for(let n=0;n<10;n++)Ye([-.99+n*.22,.08,0],[.2,.08,2.6],he.rust,Jt);Ye([-.95,.2,-.95],[.35,.15,.35],he.dark,Jt);Pt([.87,.34,.75],.075,.5,he.copper,Jt);Pt([.87,.59,.75],.13,.05,he.cream,Jt);Lt([.87,.1,-.7],[.87,2.3,-.7],.035,he.copper,Jt);Ws([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,he.copper,Jt);Ye([.17,2.09,-.7],[.25,.4,.25],it("#ffd591"),Jt);Ye([.17,2.32,-.7],[.34,.08,.34],he.dark,Jt);for(let n=0;n<4;n++)Nt([.87,.15,.75],.24-n*.025,.024,it("#b8ad86"),Jt);Ye([6.7,.07,1.5],[1.4,.13,.8],he.rust);In("НИКУДА",[.05,.28,1.36],1.3,.29,Jt,{bg:"#c2c7a3",fg:"#445e45",size:45});const zc=[];function Ba(n,e,t=1){const i=wt(e,n),s=new Pr;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),It(new zs(s,{depth:.19,bevelEnabled:!1}),it("#dfc99a"),[0,.15,-.1],null,i);const r=It(new ts(.23,.36,3),he.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(t),i}for(let n=0;n<3;n++){const e=Ba(Rt,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);zc.push(e)}const Wn=Fx({THREE:Gs,root:Rt,dock:Jt,state:Se,M:he,mat:it,group:wt,mesh:It,box:Ye,sphere:_t,cyl:Pt,torus:Nt,rod:Lt,sign:In,paperBoat:Ba,batchStatic:qt,persist:Xl,say:bn,refresh:en,chime:Bs,reduced:Od}),$e=wt([-.15,1.9,.85]);$e.scale.setScalar(1.18);const kc=it("#233a39",{metalness:.42,roughness:.32});_t([0,.1,0],[.62,.8,.55],kc,$e);_t([0,-.36,.1],[.44,.43,.43],kc,$e);_t([-.61,.03,.03],[.1,.2,.12],he.copper,$e);_t([.61,.03,.03],[.1,.2,.12],he.copper,$e);for(const n of[-.23,.23]){_t([n,.2,.485],[.17,.13,.057],he.black,$e),Nt([n,.2,.541],.078,.02,he.copper,$e,[0,0,0]),_t([n,.2,.56],.041,he.light,$e);const e=Ye([n,.38,.48],[.24,.045,.06],he.cream,$e);e.rotation.z=n>0?-.13:.13}_t([0,.04,.51],[.09,.17,.11],kc,$e);_t([0,-.2,.44],[.31,.16,.11],he.black,$e);for(let n=0;n<7;n++){const e=(n-3)*.073,t=Hs([e,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],he.cream,$e,.009);t.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const e=n/9,t=-.52+e*1.04,i=.66+Math.sin(e*Math.PI)*.23,s=_t([t,i,-.04],[.18,.18,.48],he.cream,$e);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const e=n/12,t=-.5+e,i=.68+Math.sin(e*Math.PI)*.19;Ws([[t-.12,i+.12,-.37],[t+.06,i+.15,-.08],[t+.05,i+.03,.25],[t-.03,i-.08,.4]],.012,it("#f2edda"),$e)}for(let n=0;n<3;n++)_t([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],he.cream,$e);const Gc=Nt([0,1.05,0],.77,.019,he.copper,$e);Gc.rotation.z=.14;const ev=new Da("#ffbb62",.9,3);ev.position.set(0,.2,.9);const vo=Nt([-.15,.26,.85],.7,.018,he.copper),Er=It(new Ta(.64,32),new Rr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Er.rotation.x=-Math.PI/2;Er.castShadow=!1;const di=new P(-.15,1.9,.85),Pn=wt([-6,2.18,-3.25]);for(let n=0;n<34;n++){const e=n/34*Math.PI*2,t=Ye([0,Math.sin(e)*1.83,Math.cos(e)*1.83],[.84,.12,.31],n%4?he.cream:he.concrete,Pn);t.rotation.x=Math.PI/2-e,n%3===0&&Lt([-.42,Math.sin(e)*1.84,Math.cos(e)*1.84],[-.42,Math.sin(e)*2.07,Math.cos(e)*2.07],.018,he.copper,Pn)}for(const n of[-.45,.45])Nt([n,0,0],2.07,.025,he.copper,Pn,[0,Math.PI/2,0]);for(const n of[-.34,.34])Nt([n,0,0],1.7,.075,he.concrete,Pn,[0,Math.PI/2,0]);Lt([0,-2.15,-1.2],[0,-1.58,-.8],.07,he.metal,Pn);Lt([0,-2.15,1.2],[0,-1.58,.8],.07,he.metal,Pn);In("ОБРАТНО",[.49,-.55,.2],1.15,.3,Pn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const e=-10+gt()*20,t=-8+gt()*17;Math.abs(e)<7.7&&Math.abs(t)<6.3||It(Vs.ico,it("#47675f"),[e,-1.3-gt()*2,t],[.22+gt()*.55,.19+gt()*.4,.27+gt()*.4])}const Hd=new Bt,Wd=[];for(let n=0;n<75;n++)Wd.push((gt()-.5)*25,gt()*9-2,(gt()-.5)*22);Hd.setAttribute("position",new dt(Wd,3));const Xd=new od(Hd,new mc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));Dn.add(Xd);function qt(n,e){const t=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||e.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new ht().multiplyMatrices(i,r.matrixWorld));let c=t.get(o);c||t.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of t.values()){const a=Ux(o,!1);a&&It(a,r,null,null,n),o.forEach(c=>c.dispose())}}qt(Rt,[$e,tn,kt,dn,Hn,Jt,St,Pn,Oa,...zc,...Fa,...Fc,vo,Er,Wn.travel]);qt(St,[vn]);qt(vn,[]);qt(Pn,[]);qt($e,[Gc]);$e.traverse(n=>{n.isMesh&&(n.castShadow=!1)});qt(dn,[...Fa]);qt(Hn,[]);qt(Jt,[Wn.gallery,Wn.beacon]);qt(kt,[...Ir.map(n=>n.group),Ua,Oc,zd]);Ir.forEach(n=>qt(n.group,[]));const Tr=wt([0,.33,0],tn);Yl.forEach(n=>{Tr.add(n),n.position.y-=.33});qt(Tr,[]);qt(tn,[Tr]);const fn=Hx({THREE:Gs,root:Rt,scene:Dn,head:$e,M:he,mat:it,group:wt,box:Ye,sphere:_t,cyl:Pt,rod:Lt,torus:Nt,sign:In,paperBoat:Ba,batchStatic:qt,changed:()=>{en(),vt.shadowMap.needsUpdate=!0},chime:Bs}),mi=Zx({THREE:Gs,root:Rt,M:he,mat:it,group:wt,box:Ye,sphere:_t,cyl:Pt,rod:Lt,torus:Nt,mesh:It,sign:In,batchStatic:qt,changed:()=>{en(),vt.shadowMap.needsUpdate=!0},watching:()=>Gt==null?void 0:Gt.watching(),localPlay:()=>Gt.localPlay()}),Di=lf({THREE:Gs,root:Rt,M:he,mat:it,group:wt,box:Ye,sphere:_t,cyl:Pt,rod:Lt,torus:Nt,sign:In,batchStatic:qt,changed:()=>{en(),vt.shadowMap.needsUpdate=!0},watching:()=>Gt==null?void 0:Gt.watching(),localPlay:()=>Gt.localPlay()}),za=Wx({THREE:Gs,scene:Dn,root:Rt,head:$e,M:he,mat:it,mesh:It,group:wt,box:Ye,sphere:_t,cyl:Pt,rod:Lt,torus:Nt,sign:In,batchStatic:qt,chime:Bs}),Ur=qx({THREE:Gs,scene:Dn,root:Rt,head:$e,M:he,mat:it,mesh:It,group:wt,box:Ye,sphere:_t,cyl:Pt,rod:Lt,torus:Nt,sign:In,paperBoat:Ba,batchStatic:qt,chime:Bs}),qd=Xx({head:$e,group:wt,sphere:_t,box:Ye,torus:Nt,M:he,mat:it});let pn=null,ni=1;const Yn={amnesty:{n:"11",label:"амнистия",title:"платить было не за что",description:"Кабачки встретили выдуманный налог.",action:"отправить тележку",point:new P(4.7,.8,25.8),position:new P(0,.4,24),run:()=>Di.run()},cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new P(28.4,2.2,2.5),position:new P(24,.4,0),run:()=>mi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new P(-.1,2.15,4.3),position:new P(-.1,1,4.3),run:()=>fn.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new P(-6,4.55,-3.25),position:new P(-6,2.2,-3.25),run:()=>{Se.loop>0||(Se.loop=12,Zd.copy($e.position),bn("ноги не понадобились"),en())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь два старых монитора, провода и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new P(-3.2,3.15,-2.5),position:new P(-3.2,1.1,-2.5),run:()=>{Se.roof=Os()?0:1,bn(Os()?"заходи":"прикрыл"),en()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy($e.position),n.y+=1.35},position:new P(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];bn(n[tv++%n.length]),di.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new P(3.7,3.85,-2.6),position:new P(3.7,1,-2.6),run:()=>{Se.running=!Se.running,Xl(),bn(Se.running?"ну пошло":"можно и полежать"),en()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new P(-3.7,1.65,.35),position:new P(-3.8,1,.35),run:()=>{Se.brew>0||(Se.brew=8,Se.teaCount++,di.set(-2.65,1.7,.65),bn("щас, чайник поставлю"),en())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new P(-3.4,1,3.8),position:new P(-3.6,1,3.55),run:()=>{Se.harvest++,As=.15,Xl(),di.set(-1.6,1.6,2.3),bn(Se.harvest===1?"о, урожай":"кабачки опять победили"),en()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new P(-5.65,1.75,1.1),position:new P(-5.65,1,1.1),run:()=>{Se.radio=(Se.radio+1)%3,Vc(),bn(["тишина. нормально.","дождь поймал","провода поют"][Se.radio]),en()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new P(7.4,2.75,1.1),position:new P(7.25,.9,1.5),run:()=>{Wn.launchOrCollect(),Se.dockPending===!1&&Se.boat===0&&di.set(5.85,1.7,1.05)}}};let tv=0,As=1,Yd=0,Rs=0;const Zd=new P;let Jd=()=>{$i("engine"),Yn.engine.run()};const ka={};for(const[n,e]of Object.entries(Yn)){const t=document.createElement("button");t.className="hotspot",t.textContent=e.n,t.dataset.label=e.label,t.title=e.label,t.setAttribute("aria-label",e.label),t.onclick=()=>$i(n),ze("#hotspots").append(t),ka[n]=t}const Kd=ze("#hotspots"),El=ze("#speech"),qi={width:innerWidth,height:innerHeight},nv=Jx({entries:Yn,elements:ka,layer:Kd,camera:et});let Tl=!1,fh=NaN,ph=NaN;const tr=new P;function $i(n){Se.selected=n,ze("#inspector").classList.remove("collapsed");const e=Yn[n];ze("#object-kicker").textContent=`${e.n} / ${e.label.toUpperCase()}`,ze("#object-title").textContent=e.title,ze("#object-description").textContent=e.description,Jd=e.run,ze("#focus-object").hidden=!1,ze("#focus-object").textContent=Li===n?"весь двор ⌂":"осмотреть ближе ⊕",en();for(const[t,i]of Object.entries(ka))i.classList.toggle("selected",t===n)}function en(){const n=Se.selected,e=Yn[n];if(ze("#status").textContent=Se.running?"двор проснулся":"всё потихоньку",!e)return;let t=e.action,i=e.description,s=!1;if(n==="stair"&&(s=Se.loop>0,t=s?"кручусь…":e.action),n==="workshop"&&(t=Os()?"закрыть крышу":e.action),n==="engine"&&(t=Se.running?"остановить и отдохнуть":"запустить маятники",i=Se.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":e.description),n==="tea"&&(s=Se.brew>0,t=s?"чай заваривается…":e.action,i=Se.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":e.description),n==="garden"&&Se.harvest&&(i=`Уже собрано: ${Se.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Se.radio]}. ${Se.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Wn.card();s=r.disabled,t=r.action,i=r.description}if(n==="greenhouse"){const r=fn.card();t=r.action,i=r.description}if(n==="cellar"){const r=mi.card();t=r.action,i=r.description,s=r.disabled}if(n==="amnesty"){const r=Di.card();t=r.action,i=r.description}Di.controls.hidden=n!=="amnesty",mi.controls.hidden=n!=="cellar",ze("#enter-dream03").hidden=n!=="dock",ze("#greenhouse-controls").hidden=n!=="greenhouse",ze("#thermal-moves").hidden=fn.inspect().mode!=="playing",ze("#thermal-readout").textContent=`тепло ${fn.inspect().temp} · такты ${fn.inspect().turn}/6`,ze("#object-description").textContent=i,ze("#object-action").innerHTML=t+" <span>↗</span>",ze("#object-action").disabled=s}ze("#object-action").onclick=()=>{if(["cellar","amnesty"].includes(Se.selected)&&Gt.watching()){Gt.localPlay();return}Gt.localPlay(),Jd(),Rs=performance.now()+2200};ze("#close-card").onclick=()=>ze("#inspector").classList.add("collapsed");function bn(n){ze("#speech").textContent=n,Yd=performance.now()+4e3,ze("#speech").classList.add("visible")}ze("#markers").onclick=()=>{Se.markers=!Se.markers,ze("#markers").setAttribute("aria-pressed",Se.markers),Kd.hidden=!Se.markers||!!pn||et.zoom<.4};let Li=null;const kn={angle:Math.PI/4,targetAngle:Math.PI/4};function $d(){qi.width=innerWidth,qi.height=innerHeight;const n=innerWidth/innerHeight,e=on()?19.6:9.6;et.left=-e*n,et.right=e*n,et.top=e-(on()?2.8:0),et.bottom=-e-(on()?2.8:0),et.updateProjectionMatrix(),vt.setSize(innerWidth,innerHeight,!1),vt.setPixelRatio(Math.min(devicePixelRatio,on()?1.5:2))}function Xs(){if(Gt==null||Gt.unfollow(),pn){Va();return}Li=null,document.body.classList.remove("close-look"),ze("#focus-object").textContent="осмотреть ближе ⊕",je.enableDamping=!1,je.update(),je.enableDamping=!0,et.zoom=1,je.target.copy(Dc),kn.targetAngle=Math.PI/4,et.updateProjectionMatrix()}ze("#focus-object").onclick=()=>{if(Se.selected){if(Li===Se.selected){Xs();return}Li=Se.selected,document.body.classList.add("close-look"),ze("#focus-object").textContent="весь двор ⌂",je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.copy(Yn[Se.selected].position),on()&&(je.target.y+=["cellar","amnesty"].includes(Li)?-.7:1.6),et.zoom=["cellar","amnesty"].includes(Li)?on()?1.8:1.6:on()?2.5:2.1,et.updateProjectionMatrix()}};ze("#home").onclick=Xs;ze("#zoom-in").onclick=()=>{et.zoom=Math.min(2.5,et.zoom*1.2),et.updateProjectionMatrix()};ze("#zoom-out").onclick=()=>{et.zoom=Math.max(je.minZoom,et.zoom/1.2),et.updateProjectionMatrix()};ze("#rotate").onclick=()=>kn.targetAngle+=Math.PI/2;addEventListener("resize",$d);$d();function Qd(n,e,t=!1){pn&&Va(),Xs(),je.target.set(n,1,e),et.zoom=t?1:.65,et.updateProjectionMatrix(),ze("#inspector").classList.add("collapsed")}function iv(){Qd(0,0);const n=innerWidth/innerHeight,e=on()?19.6:9.6;et.zoom=Math.min(e*n/(Cs.half*1.57),e/(Cs.half*1.3)),et.updateProjectionMatrix()}const Cs=Vx({root:Rt,camera:et,controls:je,mobile:on,go:Qd,overview:iv,home:Xs}),Ii=document.createElement("select");Ii.id="world-places";Ii.setAttribute("aria-label","Открыть место");Ii.append(new Option("места",""));for(const[n,e]of Object.entries(Yn))Ii.append(new Option(`${e.n} / ${e.label}`,n));document.querySelector(".territory-nav").insertBefore(Ii,document.querySelector("#territory-location"));Ii.onchange=()=>{const n=Ii.value;Yn[n]&&(Xs(),je.target.copy(Yn[n].position),$i(n),Ii.value="")};et.zoom=.72;et.updateProjectionMatrix();const mh=new Ed,gh=new ve;let Wi=null;vt.domElement.addEventListener("pointerdown",n=>{Wi={x:n.clientX,y:n.clientY,time:performance.now()}});vt.domElement.addEventListener("pointerup",n=>{if(!Wi||Math.hypot(n.clientX-Wi.x,n.clientY-Wi.y)>7||performance.now()-Wi.time>550){Wi=null;return}if(Wi=null,gh.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),mh.setFromCamera(gh,et),pn)return;const e=mh.intersectObjects([Di.house,mi.house,fn.house,$e,kt,tn,dn,Hn,Jt,St,Pn,Wn.travel],!0);if(e.length){let t=e[0].object;for(;t.parent&&![Di.house,mi.house,fn.house,$e,kt,tn,dn,Hn,Jt,St,Pn,Wn.travel].includes(t);)t=t.parent;const i=new Map([[Di.house,"amnesty"],[mi.house,"cellar"],[fn.house,"greenhouse"],[$e,"head"],[kt,"engine"],[tn,"garden"],[dn,"tea"],[Hn,"radio"],[Jt,"dock"],[St,"workshop"],[Pn,"stair"],[Wn.travel,"dock"]]).get(t);i&&$i(i)}else{let t=null,i=1/0;for(const[s,r]of Object.entries(Yn)){const o=r.position.clone().project(et);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,t=s)}i<45&&$i(t)}});let xn=null;function sv(){const n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain();e.gain.value=.08,e.connect(n.destination);const t=n.createBiquadFilter();t.type="lowpass",t.frequency.value=400,t.connect(e);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(t),r.start();const o=n.createGain();o.gain.value=.1,o.connect(e);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:e,filter:t,toneGain:o,tones:a}}function Vc(){if(!xn)return;const n=xn.ctx.currentTime;xn.filter.frequency.setTargetAtTime([160,1100,260][Se.radio],n,.4),xn.toneGain.gain.setTargetAtTime([.05,.025,.3][Se.radio],n,.4)}ze("#sound").onclick=async()=>{try{xn||(xn=sv()),await xn.ctx.resume(),Se.sound=!Se.sound,xn.gain.gain.setTargetAtTime(Se.sound?.08:0,xn.ctx.currentTime,.3),ze("#sound").textContent=Se.sound?"звук включён":"звук выключен",ze("#sound").setAttribute("aria-pressed",Se.sound),Vc(),en()}catch{bn("со звуком не сложилось")}};function Bs(n=330){if(!xn||!Se.sound)return;const e=xn.ctx.currentTime,t=xn.ctx.createOscillator(),i=xn.ctx.createGain();t.type="sine",t.frequency.value=n,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.12,e+.012),i.gain.exponentialRampToValueAtTime(.001,e+1),t.connect(i),i.connect(xn.gain),t.start(e),t.stop(e+1.1)}ze("#about").onclick=()=>ze("#about-dialog").showModal();ze("#close-about").onclick=ze("#back-to-yard").onclick=()=>ze("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&pn){Va();return}n.key==="Escape"&&ze("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&ze("#zoom-in").click(),n.key==="-"&&ze("#zoom-out").click(),n.key.toLowerCase()==="r"&&ze("#rotate").click(),n.key.toLowerCase()==="h"&&Xs()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{Gt.localPlay(),fn.step(n.dataset.thermal),Rs=performance.now()+2200};const rv={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"},3:{title:"усами шевелю молча",lines:["У причала никто не разговаривает. Брось камешек: круги здесь всплывают ребром. Сила броска меняет высоту ворот.","Первый круг встал. Кораблик ищет воду в воздухе. Можно бросить тише или сильнее.","Две дырки в тишине. Камень падает вверх, усы продолжают качаться.","Три круга стали дорогой. Кораблик плывёт сквозь воздух. Можно проснуться или попробовать другую дорогу."],verb:"бросить камешек"}};function Hc(){return ni===1?fn:ni===2?za:Ur}function jd(){const n=ni===1?fn.inspect().dreamStep:Hc().inspect().step,e=rv[ni];ze("#dream-force").hidden=ni!==3,ze("#dream-panel .object-kicker").textContent=`СОН 0${ni} / БЕЗНОГИМ`,ze("#dream-panel h2").textContent=e.title,ze("#dream-text").textContent=e.lines[n],ze("#dream-breathe").textContent=n===3?"увидеть сон снова":`${e.verb} · ${n+1}/3`}function Ga(n=1){pn||(ni=n,pn={target:je.target.clone(),zoom:et.zoom,angle:kn.targetAngle,focused:Li,returnId:n===1?"greenhouse":n===2?"cellar":"dock"},Hc().enter(),je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.set(0,on()?n===1?3:2.4:n===1?2:1.5,0),et.zoom=n===1?on()?1.65:1.75:on()?1.45:1.55,et.updateProjectionMatrix(),kn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),ze("#dream-panel").hidden=!1,jd(),vt.shadowMap.needsUpdate=!0)}function Va(){if(!pn)return;const n=pn;pn=null,Hc().exit(),je.enableDamping=!1,je.update(),je.enableDamping=!0,je.target.copy(n.target),et.zoom=n.zoom,kn.targetAngle=n.angle,Li=n.focused,et.updateProjectionMatrix(),document.body.classList.remove("dreaming"),ze("#dream-panel").hidden=!0,vt.shadowMap.needsUpdate=!0,$i(n.returnId)}ze("#enter-dream").onclick=()=>Ga(1);ze("#exit-dream").onclick=Va;ze("#dream-breathe").onclick=()=>{ni===1?fn.breathe():ni===2?za.pour():Ur.toss(),Rs=performance.now()+2200,jd(),vt.shadowMap.needsUpdate=!0};const Ha=document.createElement("button");Ha.id="enter-dream02";Ha.textContent="сон 02 / вода спит ↗";Ha.onclick=()=>Ga(2);mi.controls.append(Ha);ze("#enter-dream03").onclick=()=>Ga(3);for(const n of document.querySelectorAll("[data-dream-force]"))n.onclick=()=>{Ur.choose(Number(n.dataset.dreamForce));for(const e of document.querySelectorAll("[data-dream-force]"))e.setAttribute("aria-pressed",e===n)};ze("#dream-archive").onclick=()=>ze("#dream-archive-dialog").showModal();ze("#close-dream-archive").onclick=()=>ze("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{ze("#dream-archive-dialog").close(),Ga(Number(n.dataset.dreamId))};const Gt=Bx({head:$e,headDestination:di,state:Se,controls:je,camera:et,refresh:en,setAudioTone:Vc,say:bn,onHarvest:()=>{As=.15}});let _h=performance.now(),ho=0,xh=0;function wl(n){return n.project(et),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function ov(){Gt.sync();const n=performance.now(),e=(n-_h)/1e3;_h=n,ho+=e,Se.energy=un.damp(Se.energy,Se.running?1:0,1.6,e);const t=Od?ho*.2:ho;kn.angle=un.damp(kn.angle,kn.targetAngle,5,e);const i=160;et.position.set(je.target.x+Math.sin(kn.angle)*i,je.target.y+i*Math.SQRT1_2,je.target.z+Math.cos(kn.angle)*i),et.lookAt(je.target),je.update(),pn||(je.target.x=un.clamp(je.target.x,-62,Cs.half+2),je.target.z=un.clamp(je.target.z,-62,Cs.half+2)),Cs.update();for(const s of Ir)s.group.rotation.x=Math.sin(t*(1.45+s.phase*.07))*Se.energy*.45;if(vn.position.z=un.damp(vn.position.z,Os()?-2.5:0,2,e),vn.position.y=un.damp(vn.position.y,Os()?.4:0,2,e),Ua.rotation.z=t*Se.energy*.28,Oc.rotation.z=-.7+Se.energy*1.35+Math.sin(t*4)*Se.energy*.08,zd.material.emissiveIntensity=.45+Se.energy*1.5,ql.uniforms.uTime.value=t,ql.uniforms.uEnergy.value=Se.energy,Oa.rotation.z=t*(.09+Se.energy*.23),kd.forEach(s=>s.intensity=.65+Se.energy*1.5),Uc.intensity=2+Se.energy*4,$e.position.x=un.damp($e.position.x,di.x,1.6,e),$e.position.z=un.damp($e.position.z,di.z,1.6,e),$e.position.y=un.damp($e.position.y,di.y+Math.sin(t*1.4)*.1,2,e),Se.loop>0){Se.loop=Math.max(0,Se.loop-e);const s=12-Se.loop;if(s<2){const r=un.smoothstep(s,0,2);$e.position.lerpVectors(Zd,new P(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;$e.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),$e.rotation.x=(s-2)/8*Math.PI*2}else{const r=un.smoothstep(s,10,12);$e.position.lerpVectors(new P(-6,.65,-3.25),di,r),$e.rotation.x=(1-r)*Math.PI*2}Se.loop||($e.rotation.x=0,bn("ну вот и дома"),en())}if(Gt.place(),$e.rotation.y=Math.sin(t*.3)*.12,Gc.rotation.y=t*.13,vo.position.x=$e.position.x,vo.position.z=$e.position.z,vo.rotation.z=.04*Math.sin(t),Er.position.x=$e.position.x,Er.position.z=$e.position.z,As=un.damp(As,1,.85,e),Tr.scale.y=As,Tr.rotation.z=Math.sin(t*.9)*.009,Se.brew>0&&(Se.brew=Math.max(0,Se.brew-e),Se.brew===0&&(bn("чай готов. живём."),en(),Bs(440))),Fa.forEach((s,r)=>{const o=(t*.28+r/9)%1;s.visible=Se.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),zc.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(t*.2+r)*.17,s.position.z=3.5+Math.sin(t*.26+r*2)*.58,s.position.y=.35+Math.sin(t*1.2+r)*.022,s.rotation.y=.3+Math.sin(t*.2+r)*.2}),qd.update(Gt.watching()),za.update(e,t),Ur.update(e,t),Di.update(e),mi.update(ho),fn.update(e,t),Wn.update(e,t),Tl!==Se.dockPending&&(Tl=Se.dockPending,ka.dock.classList.toggle("waiting",Tl)),Fc.forEach((s,r)=>{s.scale.y=.8+Math.sin(t*2+r)*.12,s.material.opacity=.25+Se.energy*.23}),Xd.rotation.y=t*.003,Se.running&&t-xh>3.5&&(xh=t,Bs([220,277,330,415,440][Math.floor(t)%5])),et.updateMatrixWorld(),nv.update(!pn&&et.zoom>=.4&&Se.markers,qi.width,qi.height),pn||n>Yd)El.classList.contains("visible")&&El.classList.remove("visible");else{tr.copy($e.position),tr.y+=1.52,tr.project(et);const s=Math.round(Math.max(85,Math.min(qi.width-85,(tr.x+1)*qi.width*.5))*10)/10,r=Math.round((1-tr.y)*qi.height*.5*10)/10;(s!==fh||r!==ph)&&(fh=s,ph=r,El.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}Rs&&performance.now()>Rs&&(vt.shadowMap.needsUpdate=!0,Rs=0),vt.render(Dn,et)}Se.running&&(ze("#object-action").innerHTML="остановить двор <span>↗</span>");en();vt.setAnimationLoop(ov);requestAnimationFrame(()=>ze("#loading").classList.add("done"));window.__yard={state:Se,select:$i,inspect:()=>({resident:Gt.inspect(),territory:Cs.inspect(),sleepBody:qd.inspect(),sleepDream:za.inspect(),quietDream:Ur.inspect(),dreamId:pn?ni:null,amnesty:Di.inspect(),amnestyScreen:wl(new P(0,-.3,24)),cellar:mi.inspect(),cellarScreen:wl(new P(24,-.3,.25)),objects:Object.keys(Yn),greenhouse:fn.inspect(),dock:Wn.inspect(),boatScreen:wl(new P(...Wn.inspect().boat).add(new P(0,.2,0))),drawCalls:vt.info.render.calls,triangles:vt.info.render.triangles,gpuGeometries:vt.info.memory.geometries,zoom:et.zoom,target:je.target.toArray(),angle:kn.angle,head:$e.position.toArray(),roof:vn.position.toArray(),roofOpen:Os(),roofMode:Se.roof===null?"auto":"manual",pendulums:Ir.map(n=>n.group.rotation.x),growth:As,meshes:(()=>{let n=0;return Dn.traverse(e=>{e.isMesh&&n++}),n})(),canvas:[vt.domElement.width,vt.domElement.height]})};Kx();
